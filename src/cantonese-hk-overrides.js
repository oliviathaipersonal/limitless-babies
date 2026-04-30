// ─────────────────────────────────────────────────────────────────────────
// HK CANTONESE CONVERSATIONAL OVERRIDES
// ─────────────────────────────────────────────────────────────────────────
// This file overrides the default "Chinese (Cantonese)" translation for
// specific words where conversational HK Cantonese diverges from formal
// written Chinese (which often follows Mandarin conventions).
//
// HOW TO ADD MORE CORRECTIONS:
//   1. Add a new entry: "english_word": "HK_cantonese_word",
//   2. Save the file. The override is automatically applied.
//   3. Words not in this file fall back to the default Cantonese translation.
//
// SEED ENTRIES BELOW are corrections Olivia explicitly identified or which
// I am highly confident reflect HK conversational usage. When uncertain, we
// LEAVE THE DEFAULT — better to fall back to a slightly formal translation
// than to invent something wrong.
//
// Examples of HK vs formal divergence:
//   - chair: 凳 (HK) vs 椅子 (formal/Mandarin)
//   - elephant: 大笨象 (HK conversational) vs 大象 (formal)
//   - refrigerator: 雪櫃 (HK) vs 冰箱 (Mandarin)
//   - taxi: 的士 (HK) vs 出租车 (Mandarin)
//
// EXTEND THIS LIST as you encounter words that should use HK conversational
// forms. Pull requests welcome from native speakers.
//
export const CANTONESE_HK_OVERRIDES = {
  // Confirmed corrections from Olivia
  "chair":            "凳",
  "elephant":         "大笨象",

  // Furniture & household — HK uses different characters than Mandarin
  "refrigerator":     "雪櫃",
  "table":            "枱",                  // HK: 枱; Mandarin: 桌子
  "bottle":           "樽",                  // HK: 樽; Mandarin: 瓶子
  "umbrella":         "遮",                  // HK: 遮; Mandarin: 雨伞
  "cup":              "杯",
  "plate":            "碟",                  // HK: 碟; Mandarin: 盘子
  "spoon":            "匙羹",                // HK: 匙羹; Mandarin: 勺子
  "chopsticks":       "筷子",
  "fork":             "叉",

  // Transport — HK has distinct vocabulary
  "taxi":             "的士",                // HK: 的士; Mandarin: 出租车
  "bus":              "巴士",                // HK: 巴士; Mandarin: 公共汽车
  "minibus":          "小巴",
  "bicycle":          "單車",                // HK: 單車; Mandarin: 自行车
  "motorcycle":       "電單車",              // HK: 電單車; Mandarin: 摩托车

  // Food — HK conversational forms
  "fruit":            "生果",                // HK: 生果; Mandarin: 水果
  "egg":              "蛋",
  "bread":            "麵包",
  "milk":             "奶",
  "water":            "水",
  "rice":             "飯",                  // cooked rice (饭) — HK speakers use 飯 not 米饭
  "noodles":          "麵",                  // HK: 麵; simplified: 面
  "soup":             "湯",
  "ice cream":        "雪糕",                // HK: 雪糕; Mandarin: 冰淇淋
  "candy":            "糖",
  "strawberry":       "士多啤梨",            // HK: 士多啤梨 (transliterated); Mandarin: 草莓

  // Animals — HK has playful conversational names
  "ant":              "螞蟻",
  "ladybug":          "甲蟲",                // HK informal; literal: 瓢蟲
  "rabbit":           "兔仔",                // HK affectionate; formal: 兔子
  "mouse":            "老鼠",
  "pig":              "豬",
  "chicken":          "雞",
  "duck":             "鴨",

  // Body parts — HK uses different characters
  "tongue":           "脷",                  // HK: 脷; Mandarin: 舌头
  "ear":              "耳仔",                // HK affectionate; formal: 耳朵
  "tooth":            "牙",                  // HK: 牙; Mandarin: 牙齿

  // Clothing
  "pants":            "褲",
  "shoes":            "鞋",
  "socks":            "襪",
  "hat":              "帽",
  "shirt":            "恤衫",                // HK: 恤衫 (from "shirt"); Mandarin: 衬衫
  "dress":            "裙",

  // Colors (HK uses 色 suffix conversationally)
  "color":            "顏色",

  // People & family — HK conversational
  "baby":             "BB",                  // HK: BB; or 嬰兒 formal
  "boy":              "男仔",                // HK: 男仔; Mandarin: 男孩
  "girl":             "女仔",                // HK: 女仔; Mandarin: 女孩
  "friend":           "朋友",

  // Verbs / actions — common HK forms
  "eat":              "食",                  // HK uses 食; Mandarin uses 吃
  "drink":            "飲",                  // HK: 飲; Mandarin: 喝
  "sleep":            "瞓",                  // HK: 瞓; Mandarin: 睡
  "walk":             "行",                  // HK: 行; Mandarin: 走 (走 in Cantonese means "run")
  "run":              "走",                  // HK: 走 (跑 also used)
  "look":             "睇",                  // HK: 睇; Mandarin: 看
  "play":             "玩",
  "stand":            "企",                  // HK: 企; Mandarin: 站

  // Adjectives — HK conversational
  "good":             "好",
  "bad":              "壞",
  "happy":            "開心",                // HK conversational; formal: 高興/快樂
  "sad":              "唔開心",              // HK literal: "not happy"; or 傷心
  "shy":              "怕醜",                // HK: 怕醜; Mandarin: 害羞
  "smart":            "醒目",                // HK conversational; or 聰明
  "delicious":        "好食",                // HK: 好食; Mandarin: 好吃
  "cute":             "得意",                // HK conversational; or 可愛
};
