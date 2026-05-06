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

let _capacitorChecked = false;
let _isNative = false;
let _nativeTTS = null;       // dynamically-loaded plugin instance
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
async function detectAndLoadNative() {
  if (_capacitorChecked) return _isNative;
  _capacitorChecked = true;
  try {
    const cap = (typeof window !== "undefined") ? window.Capacitor : null;
    if (cap && typeof cap.isNativePlatform === "function" && cap.isNativePlatform()) {
      _isNative = true;
      // Lazy-load the TTS plugin only when we know we need it. The
      // /* @vite-ignore */ comment tells Vite not to try to resolve
      // this dependency at build time — it's only present at runtime
      // inside the Capacitor iOS shell where we DO have the package.
      const mod = await import(/* @vite-ignore */ "@capacitor-community/text-to-speech");
      _nativeTTS = mod.TextToSpeech;
      // Pre-load the voice list so language matching is fast
      try {
        const result = await _nativeTTS.getSupportedVoices();
        _nativeVoices = result?.voices || [];
      } catch {
        _nativeVoices = [];
      }
    }
  } catch {
    _isNative = false;
  }
  return _isNative;
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

// Synchronous variant — returns the cached value. Safe to call after the
// app has been running for a moment (which it always has by the time
// speech is invoked from a session). Used in render paths where async
// would be awkward.
export function isNativePlatformSync() {
  return _isNative;
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
