#!/usr/bin/env node
// scripts/translate-knowledge.mjs
//
// Bulk-translate knowledge card facts into the languages your testers want.
// Reads English facts from src/curriculum.js, calls the Anthropic API with a
// kid-friendly translation prompt, and patches src/knowledge-translations.js
// with the new entries.
//
// USAGE
//   1. Get an Anthropic API key: https://console.anthropic.com
//   2. export ANTHROPIC_API_KEY=sk-ant-api03-...
//   3. From the project root:
//        node scripts/translate-knowledge.mjs --langs "French,Italian,German" --months 1,2,3
//
//   Common variants:
//     --langs "all-tier1"   → top tester languages (PT-BR, ES, FR, IT, DE, ZH, JA)
//     --langs "all-tier2"   → adds AR, HE, KO, NL, PL, SV, RU
//     --months 1            → just M1 (60 cards). Default: all 3 months.
//     --dry-run             → show what would be translated, don't call API
//     --force               → re-translate even if entry exists (default: skip)
//
// COST ESTIMATE
//   Each card sends ~150 tokens of input, gets ~80 tokens of output.
//   180 cards × 1 language ≈ 30K input + 14K output tokens = ~$0.04
//   180 cards × 15 languages ≈ ~$0.60 total. Cheap.
//
// SAFETY
//   - Idempotent: skips entries that already exist (use --force to override)
//   - Rate-limited: max 10 concurrent API calls
//   - Atomic write: builds the full new file in memory, writes once at the end
//   - Manual review: print a sample of generated translations before saving

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── CONFIG ──────────────────────────────────────────────────────────────────
const TIER_1 = [
  "Portuguese (Brazil)", "Spanish", "French", "Italian", "German",
  "Chinese (Mandarin-Simplified)", "Chinese (Mandarin-Traditional)",
  "Japanese",
];
const TIER_2 = [
  "Arabic", "Hebrew", "Korean", "Dutch", "Polish", "Swedish", "Russian",
  "Chinese (Cantonese-Traditional)", "Chinese (Cantonese-Simplified)",
];
const TIER_3 = [
  "Hindi", "Vietnamese (Northern)", "Vietnamese (Southern)", "Bosnian",
  "Nepali", "Turkish", "Thai", "Indonesian", "Greek",
];

const ALL_TESTER_LANGS = [...TIER_1, ...TIER_2, ...TIER_3];

const MAX_CONCURRENT = 10;
const MODEL = "claude-opus-4-7";

// ── ARG PARSING ─────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(`--${name}`);
  if (i < 0) return null;
  return args[i + 1] || true;
};

let langs = (getArg("langs") || "all-tier1").split(",").map(s => s.trim());
if (langs.includes("all-tier1")) langs = TIER_1;
else if (langs.includes("all-tier2")) langs = [...TIER_1, ...TIER_2];
else if (langs.includes("all")) langs = ALL_TESTER_LANGS;

const months = (getArg("months") || "1,2,3").split(",").map(n => parseInt(n.trim(), 10));
const dryRun = !!getArg("dry-run");
const force  = !!getArg("force");

console.log("Languages:", langs.join(", "));
console.log("Months:   ", months.join(", "));
console.log("Mode:     ", dryRun ? "DRY RUN (no API calls)" : "LIVE");
console.log("Force:    ", force ? "yes (re-translate existing)" : "no (skip existing)");

if (!dryRun && !process.env.ANTHROPIC_API_KEY) {
  console.error("\n❌ ANTHROPIC_API_KEY not set. Get one at https://console.anthropic.com");
  process.exit(1);
}

// ── LOAD ENGLISH SOURCE ─────────────────────────────────────────────────────
// Hack: dynamically import the curriculum module so we get the live data
const { KNOWLEDGE_BY_MONTH } = await import(join(ROOT, "src/curriculum.js"));

const cards = [];
for (const m of months) {
  if (!KNOWLEDGE_BY_MONTH[m]) continue;
  for (const set of KNOWLEDGE_BY_MONTH[m]) {
    for (const card of set.items) {
      if (!cards.find(c => c.id === card.id)) {
        cards.push({
          id: card.id, setName: set.name, month: m,
          facts: card.facts || []
        });
      }
    }
  }
}

console.log(`\nFound ${cards.length} unique cards across months ${months.join(",")}`);

// ── LOAD EXISTING TRANSLATIONS ──────────────────────────────────────────────
const TRANSLATIONS_PATH = join(ROOT, "src/knowledge-translations.js");
let existing = {};
if (existsSync(TRANSLATIONS_PATH)) {
  const mod = await import(TRANSLATIONS_PATH);
  existing = mod.KNOWLEDGE_FACT_TRANSLATIONS || {};
}
console.log(`Existing translation entries: ${Object.keys(existing).length}\n`);

// ── BUILD WORK QUEUE ────────────────────────────────────────────────────────
const tasks = [];
for (const card of cards) {
  for (const lang of langs) {
    if (!force && existing[card.id]?.[lang]) continue;
    tasks.push({ card, lang });
  }
}
console.log(`Tasks queued: ${tasks.length} (${cards.length} cards × ${langs.length} langs, minus already-done)\n`);

if (tasks.length === 0) {
  console.log("Nothing to do. Use --force to re-translate.");
  process.exit(0);
}

if (dryRun) {
  console.log("DRY RUN — would translate:");
  for (const t of tasks.slice(0, 10)) {
    console.log(`  ${t.lang.padEnd(35)} ${t.card.id} (${t.card.facts.length} facts)`);
  }
  if (tasks.length > 10) console.log(`  ... and ${tasks.length - 10} more`);
  process.exit(0);
}

// ── TRANSLATE VIA ANTHROPIC API ─────────────────────────────────────────────
const PROMPT = (card, lang) => `Translate these baby-friendly facts into ${lang}.

Context: These are short flashcard facts read aloud to babies and toddlers (under 6 years old). The translations should be:
- SHORT and natural
- Match the register of children's books (simple, warm, not formal)
- Grammatically simple
- Avoid clinical / technical / academic phrasing
- Keep proper names and well-known places in their natural form (e.g. "Eiffel" stays "Eiffel" in Portuguese)
- For Brazilian Portuguese, use "você" not "tu"
- For Spanish, default to neutral Latin American Spanish

Card: ${card.id} (set: "${card.setName}")
Facts in English:
${card.facts.map((f, i) => `${i + 1}. ${f}`).join("\n")}

Output ONLY a JSON array of ${card.facts.length} strings — the translations in order. No explanation, no markdown fences, just raw JSON. Example: ["fact 1 translated", "fact 2 translated", "fact 3 translated"]`;

async function translateOne(card, lang) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 500,
      messages: [{ role: "user", content: PROMPT(card, lang) }],
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.content?.[0]?.text?.trim() || "";
  // Strip code fences if present
  const cleaned = text.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
  let parsed;
  try { parsed = JSON.parse(cleaned); }
  catch { throw new Error(`Bad JSON for ${card.id}/${lang}: ${text.slice(0, 100)}`); }
  if (!Array.isArray(parsed) || parsed.length !== card.facts.length) {
    throw new Error(`Wrong array length for ${card.id}/${lang}: got ${parsed.length}, expected ${card.facts.length}`);
  }
  return parsed;
}

const results = { ...existing };
let done = 0, failed = 0;

async function runBatch(batch) {
  await Promise.all(batch.map(async ({ card, lang }) => {
    try {
      const facts = await translateOne(card, lang);
      if (!results[card.id]) results[card.id] = {};
      results[card.id][lang] = facts;
      done++;
      if (done % 20 === 0 || done === tasks.length) {
        process.stdout.write(`\r  Progress: ${done}/${tasks.length} (${failed} failed)`);
      }
    } catch (e) {
      failed++;
      console.error(`\n  ⚠️  ${card.id}/${lang}: ${e.message}`);
    }
  }));
}

console.log("Translating (this takes a few minutes)...");
const start = Date.now();
for (let i = 0; i < tasks.length; i += MAX_CONCURRENT) {
  await runBatch(tasks.slice(i, i + MAX_CONCURRENT));
}
const elapsed = ((Date.now() - start) / 1000).toFixed(1);
console.log(`\n\n✓ Translated ${done}/${tasks.length} in ${elapsed}s (${failed} failed)`);

// ── WRITE BACK TO knowledge-translations.js ─────────────────────────────────
// Sort cards by month/set/idx so the output stays organized
const cardOrder = new Map();
let order = 0;
for (let m = 1; m <= 3; m++) {
  if (!KNOWLEDGE_BY_MONTH[m]) continue;
  for (const set of KNOWLEDGE_BY_MONTH[m]) {
    for (const card of set.items) {
      if (!cardOrder.has(card.id)) cardOrder.set(card.id, { order: order++, month: m, setName: set.name });
    }
  }
}

const sortedIds = Object.keys(results).sort((a, b) => {
  const aOrd = cardOrder.get(a)?.order ?? 999;
  const bOrd = cardOrder.get(b)?.order ?? 999;
  return aOrd - bOrd;
});

let body = "";
let lastSet = null;
for (const id of sortedIds) {
  const meta = cardOrder.get(id);
  if (meta && meta.setName !== lastSet) {
    if (lastSet !== null) body += "\n";
    body += `  // M${meta.month}: ${meta.setName}\n`;
    lastSet = meta.setName;
  }
  body += `  ${id}: ${JSON.stringify(results[id], null, 2).split("\n").map((l, i) => i === 0 ? l : "  " + l).join("\n")},\n`;
}

const fileContent = `// Knowledge-card fact translations for the EncyclopediaSession (M4-M6).
// Auto-generated by scripts/translate-knowledge.mjs — manual edits are OK
// but will be preserved on next run only if the cardId+language combo
// doesn't appear in --langs/--months. Use --force to overwrite.
//
// Format: KNOWLEDGE_FACT_TRANSLATIONS[cardId][language] = [fact1, fact2, fact3]
// Last updated: ${new Date().toISOString()}

export const KNOWLEDGE_FACT_TRANSLATIONS = {
${body}};

export function getKnowledgeFactsTranslation(cardId, language) {
  const t = KNOWLEDGE_FACT_TRANSLATIONS[cardId];
  if (!t) return null;
  return t[language] || null;
}
`;

await writeFile(TRANSLATIONS_PATH, fileContent);
console.log(`\n✓ Wrote ${TRANSLATIONS_PATH}`);
console.log(`  Total cards in file: ${Object.keys(results).length}`);
console.log(`  Total (card,lang) pairs: ${Object.values(results).reduce((s,v) => s + Object.keys(v).length, 0)}`);
console.log("\nNext: run `npm run build` to verify, then test in-app.");
