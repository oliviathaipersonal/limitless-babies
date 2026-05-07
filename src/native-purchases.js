// ─── RevenueCat / In-App Purchases Bridge ──────────────────────────────────
//
// This module wraps @revenuecat/purchases-capacitor and exposes a small,
// stable API that App.jsx can call without caring whether we're running
// in the Capacitor native iOS shell or in a browser PWA.
//
// On native iOS:  configures RevenueCat SDK with the iOS API key, queries
//                 offerings, and processes purchases via Apple StoreKit.
// On web:         all functions are no-op stubs that return null/false so
//                 the PWA continues to work with the existing localStorage
//                 fallback in PremiumUpsell.handleSubscribe.
//
// Architecture mirrors native-speech.js: dynamic Capacitor detection at
// runtime, static plugin import (Vite bundles it; on web the plugin's
// methods short-circuit because Capacitor.isNativePlatform() is false).
//
// Apple sandbox testing: when the app is installed via TestFlight, all
// purchases go through Apple's sandbox environment automatically — no
// real money is charged. Sign in to a sandbox tester account in iOS
// Settings → App Store → Sandbox Account before testing purchases.

import { Purchases, LOG_LEVEL } from "@revenuecat/purchases-capacitor";

// Public iOS API key from RevenueCat dashboard (May 2026). Safe to embed
// in client code — these keys are designed for mobile distribution and
// only allow the operations a customer client needs (read offerings,
// initiate purchases, restore purchases). They CANNOT modify products,
// entitlements, or other server-side configuration.
const REVENUECAT_IOS_API_KEY = "appl_QfxJCVoDyBJbFUaYlmIUkMOqWQS";

// Entitlement identifier — must match what's configured in RevenueCat.
// The "premium" entitlement is unlocked by either lb_monthly or lb_annual
// (both products are attached to it in the RevenueCat dashboard).
export const PREMIUM_ENTITLEMENT_ID = "premium";

let _initialized = false;
let _initializing = null; // promise dedup so repeated calls don't re-init

// Diagnostic state — exposed via getPurchasesDiagnostics() for the
// AudioTestPanel-style debug UI we may want to add to Parent Profile
// once this is in production.
let _diagnostics = {
  capacitorDetected: false,
  isNativePlatform: false,
  configured: false,
  configureError: null,
  offeringsQueried: false,
  offeringsError: null,
  packageCount: 0,
};

function isNative() {
  try {
    const cap = (typeof window !== "undefined") ? window.Capacitor : null;
    if (cap && typeof cap.isNativePlatform === "function") {
      _diagnostics.capacitorDetected = true;
      const native = cap.isNativePlatform();
      _diagnostics.isNativePlatform = native;
      return native;
    }
  } catch {}
  return false;
}

// Initialize the RevenueCat SDK. Safe to call multiple times — second
// call returns the same promise as the first. Resolves to true on
// successful native init, false on web or if init fails.
export async function initializePurchases() {
  if (_initializing) return _initializing;
  if (_initialized) return true;
  if (!isNative()) {
    // PWA / browser path: SDK does nothing. App.jsx falls back to
    // the existing localStorage purchase flow.
    return false;
  }
  _initializing = (async () => {
    try {
      // LOG_LEVEL.DEBUG is helpful during TestFlight beta. Switch to
      // LOG_LEVEL.WARN or LOG_LEVEL.ERROR before production launch to
      // avoid leaking purchase details into the device console.
      await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
      await Purchases.configure({
        apiKey: REVENUECAT_IOS_API_KEY,
        // appUserID omitted — RevenueCat generates an anonymous ID per
        // device. If we add account login later (Sign in with Apple,
        // email/phone), we'll pass a stable user ID here so subscriptions
        // follow the user across devices.
      });
      _diagnostics.configured = true;
      _initialized = true;
      return true;
    } catch (err) {
      _diagnostics.configureError = String(err?.message || err);
      _initialized = false;
      return false;
    }
  })();
  return _initializing;
}

// Returns the current "default" offering's packages, or null on web /
// failure. Each package contains an Apple StoreKit product with title,
// price (localized), and identifier.
export async function getOfferings() {
  if (!isNative()) return null;
  await initializePurchases();
  if (!_initialized) return null;
  try {
    const offerings = await Purchases.getOfferings();
    _diagnostics.offeringsQueried = true;
    const current = offerings?.current;
    if (!current) {
      _diagnostics.packageCount = 0;
      return null;
    }
    // Capacitor SDK returns availablePackages as an array. Find monthly
    // and annual by package identifier (configured in RevenueCat dashboard
    // as "Monthly" / "$rc_monthly" and "Annual" / "$rc_annual").
    const packages = current.availablePackages || [];
    _diagnostics.packageCount = packages.length;
    return {
      monthly: packages.find(p =>
        p.identifier === "$rc_monthly" ||
        p.identifier === "Monthly" ||
        p.packageType === "MONTHLY"
      ) || null,
      annual: packages.find(p =>
        p.identifier === "$rc_annual" ||
        p.identifier === "Annual" ||
        p.packageType === "ANNUAL"
      ) || null,
      raw: current,
    };
  } catch (err) {
    _diagnostics.offeringsError = String(err?.message || err);
    return null;
  }
}

// Initiate a purchase for the given package. Returns:
//   { ok: true, customerInfo } — purchase succeeded, premium unlocked
//   { ok: false, cancelled: true } — user dismissed the Apple sheet
//   { ok: false, error: "..." } — error during purchase
export async function purchasePackage(pkg) {
  if (!isNative()) {
    return { ok: false, error: "Not running on native iOS" };
  }
  await initializePurchases();
  if (!_initialized || !pkg) {
    return { ok: false, error: "Purchases SDK not ready" };
  }
  try {
    const result = await Purchases.purchasePackage({ aPackage: pkg });
    const customerInfo = result?.customerInfo;
    const entitlement = customerInfo?.entitlements?.active?.[PREMIUM_ENTITLEMENT_ID];
    if (entitlement) {
      return { ok: true, customerInfo, entitlement };
    }
    return { ok: false, error: "Purchase completed but premium entitlement not active" };
  } catch (err) {
    // RevenueCat's SDK throws an error with userCancelled flag when the
    // user dismisses the Apple subscribe sheet. Treat as a soft failure.
    if (err?.userCancelled) {
      return { ok: false, cancelled: true };
    }
    return { ok: false, error: String(err?.message || err) };
  }
}

// Restore previous purchases — required by Apple for users who reinstall
// or switch devices. Returns true if a premium entitlement is now active.
export async function restorePurchases() {
  if (!isNative()) return false;
  await initializePurchases();
  if (!_initialized) return false;
  try {
    const result = await Purchases.restorePurchases();
    const customerInfo = result?.customerInfo;
    const entitlement = customerInfo?.entitlements?.active?.[PREMIUM_ENTITLEMENT_ID];
    return !!entitlement;
  } catch {
    return false;
  }
}

// Returns whether the user has an active premium entitlement at this
// moment, according to RevenueCat. This bypasses our local subscription
// state and asks the source of truth (Apple via RevenueCat).
export async function hasActivePremium() {
  if (!isNative()) return null; // null = unknown, fall back to local state
  await initializePurchases();
  if (!_initialized) return null;
  try {
    const result = await Purchases.getCustomerInfo();
    const entitlement = result?.customerInfo?.entitlements?.active?.[PREMIUM_ENTITLEMENT_ID];
    return !!entitlement;
  } catch {
    return null;
  }
}

export function getPurchasesDiagnostics() {
  return { ..._diagnostics };
}

// Synchronous variant of isNative() exported for App.jsx render paths
// where async detection would be awkward.
export function isPurchasesNative() {
  return isNative();
}
