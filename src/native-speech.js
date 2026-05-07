// Speech abstraction layer.
//
// Why this file exists: Apple withholds many voices (Aru, Nannan, Sin-ji,
// dialect variants) from the Web Speech API in Safari/PWAs. The exact same
// voices ARE available to native iOS apps via AVSpeechSynthesizer. By
// wrapping the app in Capacitor and using the @capacitor-community/text-to-
// speech plugin, we get full voice access on the native iOS app while
// keeping the PWA fallback working for everyone else.
//
// This module exposes a single `speakBridge(text, language, opts)` function
// that:
//   - Detects whether we're running in a Capacitor native shell (iOS app)
//     or in a browser (PWA / Safari)
//   - Routes to the native plugin OR window.speechSynthesis accordingly
//   - Returns a uniform Promise<void> that resolves when speech finishes
//
// The rest of the app keeps calling speak(text, language) as before. Only
// the implementation underneath changes based on runtime platform.
//
// This file is loaded synchronously, but the Capacitor plugin import is
// dynamic so the PWA bundle doesn't bloat with native-only code that the
// browser can never use.

// Capacitor TTS plugin — statically imported. The plugin is safe to bundle
// even for the web build because it's just JavaScript that detects whether
// it's running in a Capacitor shell internally; on web, calls are no-ops.
// Earlier we tried a dynamic import with @vite-ignore so the web bundle
// wouldn't include the plugin, but Vite/Rollup stripped the import anyway,
// causing it to fail to load at runtime in the iOS WebView. Static import
// is more robust — Vite handles the resolution at build time.
import { TextToSpeech } from "@capacitor-community/text-to-speech";

let _capacitorChecked = false;
let _isNative = false;
let _nativeTTS = null;       // statically-loaded plugin
let _nativeVoices = [];      // cache of native voice list (loaded once)

// One-time check: are we running inside a Capacitor native shell?
// Capacitor injects a `window.Capacitor` global with `isNativePlatform()`.
// In the browser, this global doesn't exist.
//
// The dynamic import is wrapped with vite-ignore so the web bundler
// doesn't try to resolve the @capacitor-community package at build time
// (it won't be in node_modules until step 2 of the TestFlight setup).
// At runtime in the browser, isNativePlatform() returns false and the
// import is never attempted — so the missing package never matters.
// Diagnostic state — exposed via getNativeDiagnostics() so the AudioTestPanel
// can show parents (and us) what's actually happening with the native bridge.
// When something goes wrong, we can read the error message instead of having
// it silently swallowed by the catch blocks.
let _diagnostics = {
  capacitorDetected: false,
  isNativePlatform: false,
  pluginImported: false,
  pluginImportError: null,
  voicesQueried: false,
  voicesQueryError: null,
  voiceCount: 0,
};

async function detectAndLoadNative() {
  if (_capacitorChecked) return _isNative;
  _capacitorChecked = true;
  try {
    const cap = (typeof window !== "undefined") ? window.Capacitor : null;
    _diagnostics.capacitorDetected = !!cap;
    if (cap && typeof cap.isNativePlatform === "function" && cap.isNativePlatform()) {
      _isNative = true;
      _diagnostics.isNativePlatform = true;
      // Static import — TextToSpeech imported at top of file. On web it's
      // a no-op stub; on native it bridges to AVSpeechSynthesizer.
      _nativeTTS = TextToSpeech;
      _diagnostics.pluginImported = true;
      try {
        const result = await _nativeTTS.getSupportedVoices();
        _nativeVoices = result?.voices || [];
        _diagnostics.voicesQueried = true;
        _diagnostics.voiceCount = _nativeVoices.length;
      } catch (queryErr) {
        _diagnostics.voicesQueryError = String(queryErr?.message || queryErr);
        _nativeVoices = [];
      }
    }
  } catch (outerErr) {
    _diagnostics.pluginImportError = "outer: " + String(outerErr?.message || outerErr);
    _isNative = false;
  }
  return _isNative;
}

// Returns the diagnostic state object. Useful for displaying errors and
// debugging the native bridge in the AudioTestPanel.
export async function getNativeDiagnostics() {
  await detectionPromise;
  return { ..._diagnostics };
}

// Kick off detection on module load. This is fire-and-forget — the first
// call to speakBridge() will await it if it hasn't completed yet.
const detectionPromise = detectAndLoadNative();

// Returns the native voice list for diagnostics. On web, returns null.
// The AudioTestPanel uses this to show parents what's actually available.
export async function getNativeVoices() {
  await detectionPromise;
  if (!_isNative) return null;
  // Refresh the list — voices can change if a parent installs new ones
  // mid-session via iOS Settings (rare but possible).
  try {
    const result = await _nativeTTS.getSupportedVoices();
    _nativeVoices = result?.voices || [];
  } catch {}
  return _nativeVoices;
}

// True if running inside the native iOS app (via Capacitor). Used by the
// audio test UI to swap the "Apple withholds voices" warning for a
// "all installed voices available" message on native.
export async function isNativePlatform() {
  await detectionPromise;
  return _isNative;
}

// Synchronous variant — returns true if running inside Capacitor native shell.
// Reads window.Capacitor directly (not the cached _isNative) so that the
// answer is correct from the very first call, before async TTS plugin
// loading has completed. This is what speak() checks to decide whether to
// route through the native bridge or fall back to Web Speech.
//
// The first few calls may return true here but find _nativeTTS is still
// null (because the dynamic plugin import is still in flight). The
// speakBridge function handles that case gracefully — it awaits the
// detection promise before invoking the plugin, so a slightly-late
// utterance is queued correctly rather than silently dropped.
export function isNativePlatformSync() {
  try {
    const cap = (typeof window !== "undefined") ? window.Capacitor : null;
    if (cap && typeof cap.isNativePlatform === "function") {
      return cap.isNativePlatform();
    }
  } catch {}
  return false;
}

// Pick the best native voice for a given BCP-47 language tag. The plugin's
// voice objects have `voiceURI`, `name`, `lang`, and (sometimes) `quality`.
// Strategy: exact lang match → prefix match → null. We don't apply the
// AVOID_VOICE_HINTS scoring here because iOS native voices are curated by
// Apple and don't include the novelty/joke voices that contaminate Web
// Speech (Eddy, Flo, Grandma, etc.) — those only get registered with web
// speech, not the native AVSpeechSynthesizer voice list.
function pickNativeVoice(targetLang) {
  if (!_nativeVoices.length || !targetLang) return null;
  const lower = targetLang.toLowerCase();
  const prefix = lower.split("-")[0];
  // Exact match first
  let match = _nativeVoices.find(v => (v.lang || "").toLowerCase() === lower);
  if (match) return match;
  // Prefix match (e.g. "en" matches "en-US", "en-GB", etc.)
  match = _nativeVoices.find(v => (v.lang || "").toLowerCase().startsWith(prefix + "-"));
  if (match) return match;
  // For Chinese family — same fallback logic as web voiceScore
  const CHINESE_FAMILY = ["zh", "wuu", "nan", "yue", "cmn"];
  if (CHINESE_FAMILY.includes(prefix)) {
    match = _nativeVoices.find(v => {
      const vp = (v.lang || "").toLowerCase().split("-")[0];
      return CHINESE_FAMILY.includes(vp);
    });
    if (match) return match;
  }
  return null;
}

// Main entry point. Speaks `text` in `language` (the curriculum-language
// string like "Hawaiian" or "Chinese (Shanghainese)"). Caller must pass
// the BCP-47 mapping via `targetLang` since the language→BCP-47 lookup
// table lives in App.jsx.
//
// `opts.rate` and `opts.pitch` use the same scale as Web Speech (0.78,
// 1.35 for infant-directed). The plugin maps these to AVSpeechUtterance
// values internally.
//
// Returns a Promise that resolves when speech completes. Errors are
// swallowed (we never want speech to crash a session) but the promise
// still resolves so callers don't hang.
export async function speakBridge(text, targetLang, opts = {}) {
  if (!text) return;
  await detectionPromise;

  const rate = opts.rate ?? 0.78;
  const pitch = opts.pitch ?? 1.35;
  const volume = opts.volume ?? 1.0;

  if (_isNative && _nativeTTS) {
    // Native path: use AVSpeechSynthesizer via the Capacitor plugin.
    // This sees ALL voices the user has installed in iOS Settings,
    // including Aru / Nannan / Sin-ji / dialect voices.
    try {
      // Stop any in-progress speech first (mirrors web speechSynthesis.cancel)
      try { await _nativeTTS.stop(); } catch {}
      const voice = pickNativeVoice(targetLang);
      const speakOpts = {
        text,
        lang: targetLang || "en-US",
        rate,
        pitch,
        volume,
        category: "ambient", // doesn't interrupt music/podcasts
      };
      // Plugin uses voice index, not voiceURI — find the index
      if (voice) {
        const idx = _nativeVoices.indexOf(voice);
        if (idx >= 0) speakOpts.voice = idx;
      }
      await _nativeTTS.speak(speakOpts);
    } catch {
      // Failure on native is silent — we don't fall back to web speech
      // because that would defeat the whole purpose (we'd get the
      // gatekept voice list back).
    }
    return;
  }

  // Web path: use window.speechSynthesis as before. This is identical to
  // the legacy speak() implementation. We re-implement it here so the
  // bridge is a single source of truth, but the call site in App.jsx
  // can still use its own pickBestVoice() to handle voice selection
  // (because the web voice picker has more nuance — AVOID hints, premium
  // bonuses, accent hints — that the native plugin doesn't need).
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  // Note: the actual web-path voice picking happens in App.jsx's speak()
  // function, NOT here. This bridge is only invoked when running native.
  // App.jsx checks isNativePlatformSync() first and routes to speakBridge
  // if true; otherwise it runs its existing web speech code unchanged.
  // So this `else` branch should rarely execute — it's a safety net.
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = targetLang || "en-US";
    utter.rate = rate;
    utter.pitch = pitch;
    utter.volume = volume;
    window.speechSynthesis.speak(utter);
  } catch {}
}

// Stop any in-progress speech. Used when the user navigates away from a
// session or hits a "stop" button.
export async function stopSpeech() {
  await detectionPromise;
  if (_isNative && _nativeTTS) {
    try { await _nativeTTS.stop(); } catch {}
  } else if (typeof window !== "undefined" && window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch {}
  }
}
