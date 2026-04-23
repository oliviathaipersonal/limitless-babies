// ── LIMITLESS BABIES CURRICULUM ──────────────────────────────────────────────
// 30 themed word sets + 30 themed knowledge sets.
// Each set has exactly 5 items. With the rolling-window of 3 sets per day,
// a session of 11 cards is 5+5+1 (first two sets + 1 card from the third) OR
// whichever distribution gives 11 total - we just take 11 from the union.
//
// The word curriculum progresses from concrete/familiar → abstract/academic,
// mapping roughly to CEFR vocabulary exposure milestones:
//   Sets 1-10   ≈ Approaching A1  (everyday concrete nouns)
//   Sets 11-20  ≈ Approaching A2  (household, nature, activities)
//   Sets 21-30  ≈ Approaching B1  (abstract concepts, academic terms)
// Later sets (when added) will target B2, C1, and graduate-level vocabulary.

// Each word has an emoji (used as the "photo") + English word. Translations
// are pulled from EXTRA_TRANSLATIONS below (falls back to English if missing).

export const WORD_SETS = [
  // ── MONTH 1: Foundation (concrete, familiar) ─────────────────────────────
  { id: "family",      name: "family",          items: [
    { word: "mama",    emoji: "👩" },
    { word: "dada",    emoji: "👨" },
    { word: "baby",    emoji: "👶" },
    { word: "sister",  emoji: "👧" },
    { word: "brother", emoji: "👦" },
  ]},
  { id: "family-extended", name: "grandparents", items: [
    { word: "grandma",  emoji: "👵" },
    { word: "grandpa",  emoji: "👴" },
    { word: "aunt",     emoji: "🧑" },
    { word: "uncle",    emoji: "🧔" },
    { word: "cousin",   emoji: "🧒" },
  ]},
  { id: "farm-animals", name: "farm animals", items: [
    { word: "cow",      emoji: "🐄" },
    { word: "chicken",  emoji: "🐔" },
    { word: "duck",     emoji: "🦆" },
    { word: "sheep",    emoji: "🐑" },
    { word: "pig",      emoji: "🐷" },
  ]},
  { id: "fruits", name: "fruits", items: [
    { word: "apple",      emoji: "🍎" },
    { word: "banana",     emoji: "🍌" },
    { word: "grape",      emoji: "🍇" },
    { word: "orange",     emoji: "🍊" },
    { word: "strawberry", emoji: "🍓" },
  ]},
  { id: "pets", name: "pets", items: [
    { word: "dog",     emoji: "🐶" },
    { word: "cat",     emoji: "🐱" },
    { word: "rabbit",  emoji: "🐰" },
    { word: "fish",    emoji: "🐠" },
    { word: "bird",    emoji: "🐦" },
  ]},
  { id: "food", name: "food", items: [
    { word: "bread",   emoji: "🍞" },
    { word: "cheese",  emoji: "🧀" },
    { word: "milk",    emoji: "🥛" },
    { word: "water",   emoji: "💧" },
    { word: "egg",     emoji: "🥚" },
  ]},
  { id: "body", name: "body parts", items: [
    { word: "eye",     emoji: "👁️" },
    { word: "nose",    emoji: "👃" },
    { word: "mouth",   emoji: "👄" },
    { word: "hand",    emoji: "✋" },
    { word: "foot",    emoji: "🦶" },
  ]},
  { id: "colors", name: "colors", items: [
    { word: "red",     emoji: "🔴" },
    { word: "blue",    emoji: "🔵" },
    { word: "yellow",  emoji: "🟡" },
    { word: "green",   emoji: "🟢" },
    { word: "pink",    emoji: "🌸" },
  ]},
  { id: "wild-animals", name: "wild animals", items: [
    { word: "lion",    emoji: "🦁" },
    { word: "tiger",   emoji: "🐅" },
    { word: "bear",    emoji: "🐻" },
    { word: "elephant",emoji: "🐘" },
    { word: "monkey",  emoji: "🐵" },
  ]},
  { id: "vehicles", name: "vehicles", items: [
    { word: "car",     emoji: "🚗" },
    { word: "bus",     emoji: "🚌" },
    { word: "train",   emoji: "🚂" },
    { word: "airplane",emoji: "✈️" },
    { word: "boat",    emoji: "⛵" },
  ]},

  // ── MONTH 2: Everyday expansion (A2) ─────────────────────────────────────
  { id: "home", name: "home", items: [
    { word: "bed",     emoji: "🛏️" },
    { word: "chair",   emoji: "🪑" },
    { word: "table",   emoji: "🪵" },
    { word: "door",    emoji: "🚪" },
    { word: "window",  emoji: "🪟" },
  ]},
  { id: "weather", name: "weather", items: [
    { word: "sun",     emoji: "☀️" },
    { word: "rain",    emoji: "🌧️" },
    { word: "snow",    emoji: "❄️" },
    { word: "cloud",   emoji: "☁️" },
    { word: "wind",    emoji: "🌬️" },
  ]},
  { id: "sea-animals", name: "sea animals", items: [
    { word: "whale",   emoji: "🐋" },
    { word: "dolphin", emoji: "🐬" },
    { word: "octopus", emoji: "🐙" },
    { word: "shark",   emoji: "🦈" },
    { word: "crab",    emoji: "🦀" },
  ]},
  { id: "shapes", name: "shapes", items: [
    { word: "circle",   emoji: "⭕" },
    { word: "square",   emoji: "⬜" },
    { word: "triangle", emoji: "🔺" },
    { word: "star",     emoji: "⭐" },
    { word: "heart",    emoji: "❤️" },
  ]},
  { id: "clothing", name: "clothing", items: [
    { word: "shirt",   emoji: "👕" },
    { word: "pants",   emoji: "👖" },
    { word: "shoes",   emoji: "👟" },
    { word: "hat",     emoji: "🎩" },
    { word: "socks",   emoji: "🧦" },
  ]},
  { id: "nature", name: "nature", items: [
    { word: "tree",    emoji: "🌳" },
    { word: "flower",  emoji: "🌸" },
    { word: "grass",   emoji: "🌱" },
    { word: "mountain",emoji: "⛰️" },
    { word: "river",   emoji: "🏞️" },
  ]},
  { id: "insects", name: "insects", items: [
    { word: "butterfly",emoji: "🦋" },
    { word: "bee",      emoji: "🐝" },
    { word: "ant",      emoji: "🐜" },
    { word: "ladybug",  emoji: "🐞" },
    { word: "spider",   emoji: "🕷️" },
  ]},
  { id: "toys", name: "toys", items: [
    { word: "ball",     emoji: "⚽" },
    { word: "doll",     emoji: "🪆" },
    { word: "block",    emoji: "🧱" },
    { word: "puzzle",   emoji: "🧩" },
    { word: "teddy",    emoji: "🧸" },
  ]},
  { id: "actions", name: "actions", items: [
    { word: "run",     emoji: "🏃" },
    { word: "jump",    emoji: "🤸" },
    { word: "walk",    emoji: "🚶" },
    { word: "sleep",   emoji: "😴" },
    { word: "eat",     emoji: "🍽️" },
  ]},
  { id: "feelings", name: "feelings", items: [
    { word: "happy",   emoji: "😊" },
    { word: "sad",     emoji: "😢" },
    { word: "angry",   emoji: "😠" },
    { word: "tired",   emoji: "😪" },
    { word: "scared",  emoji: "😨" },
  ]},

  // ── MONTH 3: Concept expansion (approaching B1) ──────────────────────────
  { id: "instruments", name: "instruments", items: [
    { word: "piano",    emoji: "🎹" },
    { word: "guitar",   emoji: "🎸" },
    { word: "drum",     emoji: "🥁" },
    { word: "violin",   emoji: "🎻" },
    { word: "trumpet",  emoji: "🎺" },
  ]},
  { id: "professions", name: "professions", items: [
    { word: "doctor",   emoji: "👩‍⚕️" },
    { word: "teacher",  emoji: "👩‍🏫" },
    { word: "chef",     emoji: "👨‍🍳" },
    { word: "artist",   emoji: "🧑‍🎨" },
    { word: "scientist",emoji: "👩‍🔬" },
  ]},
  { id: "space", name: "space", items: [
    { word: "planet",   emoji: "🪐" },
    { word: "moon",     emoji: "🌙" },
    { word: "rocket",   emoji: "🚀" },
    { word: "galaxy",   emoji: "🌌" },
    { word: "comet",    emoji: "☄️" },
  ]},
  { id: "buildings", name: "buildings", items: [
    { word: "school",   emoji: "🏫" },
    { word: "hospital", emoji: "🏥" },
    { word: "library",  emoji: "📚" },
    { word: "museum",   emoji: "🏛️" },
    { word: "castle",   emoji: "🏰" },
  ]},
  { id: "opposites", name: "opposites", items: [
    { word: "big",     emoji: "🐘" },
    { word: "small",   emoji: "🐭" },
    { word: "hot",     emoji: "🔥" },
    { word: "cold",    emoji: "🧊" },
    { word: "fast",    emoji: "⚡" },
  ]},
  { id: "countries", name: "countries", items: [
    { word: "japan",    emoji: "🗾" },
    { word: "brazil",   emoji: "🇧🇷" },
    { word: "france",   emoji: "🗼" },
    { word: "kenya",    emoji: "🦒" },
    { word: "india",    emoji: "🕌" },
  ]},
  { id: "science", name: "science", items: [
    { word: "atom",      emoji: "⚛️" },
    { word: "molecule",  emoji: "🧬" },
    { word: "gravity",   emoji: "🌍" },
    { word: "energy",    emoji: "⚡" },
    { word: "chemistry", emoji: "🧪" },
  ]},
  { id: "emotions-advanced", name: "feelings 2", items: [
    { word: "curious",   emoji: "🤔" },
    { word: "excited",   emoji: "🤩" },
    { word: "peaceful",  emoji: "🕊️" },
    { word: "grateful",  emoji: "🙏" },
    { word: "brave",     emoji: "🦸" },
  ]},
  { id: "geography", name: "geography", items: [
    { word: "ocean",     emoji: "🌊" },
    { word: "desert",    emoji: "🏜️" },
    { word: "forest",    emoji: "🌲" },
    { word: "island",    emoji: "🏝️" },
    { word: "volcano",   emoji: "🌋" },
  ]},
  { id: "history", name: "history", items: [
    { word: "pyramid",    emoji: "🔺" },
    { word: "dinosaur",   emoji: "🦕" },
    { word: "knight",     emoji: "⚔️" },
    { word: "pharaoh",    emoji: "👑" },
    { word: "explorer",   emoji: "🧭" },
  ]},
];

// Extra translations for themed set words not already in CORE_TRANSLATIONS.
// Only top languages for the first ~50 new words; others fall back to English.
export const EXTRA_TRANSLATIONS = {
    // Month 1 common words (auto-generated bulk)
  "mango": { "Spanish":"mango", "French":"mangue", "German":"mango", "Italian":"mango", "Portuguese":"manga", "Portuguese (Brazil)":"manga", "Russian":"манго", "Chinese (Mandarin)":"芒果", "Chinese (Cantonese)":"芒果", "Japanese":"マンゴー", "Korean":"망고", "Hebrew":"מנגו", "Arabic":"مانجو", "Hindi":"आम", "Vietnamese":"xoài", "Thai":"มะม่วง", "Turkish":"mango", "Lao":"ໝາກມ່ວງ" },
  "pineapple": { "Spanish":"piña", "French":"ananas", "German":"ananas", "Italian":"ananas", "Portuguese":"abacaxi", "Portuguese (Brazil)":"abacaxi", "Russian":"ананас", "Chinese (Mandarin)":"菠萝", "Chinese (Cantonese)":"菠蘿", "Japanese":"パイナップル", "Korean":"파인애플", "Hebrew":"אננס", "Arabic":"أناناس", "Hindi":"अनानास", "Vietnamese":"dứa", "Thai":"สับปะรด", "Turkish":"ananas" },
  "watermelon": { "Spanish":"sandía", "French":"pastèque", "German":"wassermelone", "Italian":"anguria", "Portuguese":"melancia", "Portuguese (Brazil)":"melancia", "Russian":"арбуз", "Chinese (Mandarin)":"西瓜", "Chinese (Cantonese)":"西瓜", "Japanese":"スイカ", "Korean":"수박", "Hebrew":"אבטיח", "Arabic":"بطيخ", "Hindi":"तरबूज", "Vietnamese":"dưa hấu", "Thai":"แตงโม", "Turkish":"karpuz" },
  "peach": { "Spanish":"durazno", "French":"pêche", "German":"pfirsich", "Italian":"pesca", "Portuguese":"pêssego", "Portuguese (Brazil)":"pêssego", "Russian":"персик", "Chinese (Mandarin)":"桃子", "Chinese (Cantonese)":"桃", "Japanese":"もも", "Korean":"복숭아", "Hebrew":"אפרסק", "Arabic":"خوخ", "Hindi":"आड़ू", "Vietnamese":"đào", "Thai":"ลูกพีช", "Turkish":"şeftali" },
  "kiwi": { "Spanish":"kiwi", "French":"kiwi", "German":"kiwi", "Italian":"kiwi", "Portuguese":"kiwi", "Portuguese (Brazil)":"kiwi", "Russian":"киви", "Chinese (Mandarin)":"猕猴桃", "Chinese (Cantonese)":"奇異果", "Japanese":"キウイ", "Korean":"키위", "Hebrew":"קיווי", "Arabic":"كيوي", "Hindi":"कीवी", "Vietnamese":"kiwi", "Thai":"กีวี", "Turkish":"kivi" },
  "blueberry": { "Spanish":"arándano", "French":"myrtille", "German":"blaubeere", "Italian":"mirtillo", "Portuguese":"mirtilo", "Portuguese (Brazil)":"mirtilo", "Russian":"черника", "Chinese (Mandarin)":"蓝莓", "Chinese (Cantonese)":"藍莓", "Japanese":"ブルーベリー", "Korean":"블루베리", "Hebrew":"אוכמנית", "Arabic":"توت أزرق", "Hindi":"ब्लूबेरी", "Vietnamese":"việt quất", "Thai":"บลูเบอร์รี่", "Turkish":"yaban mersini" },
  "raspberry": { "Spanish":"frambuesa", "French":"framboise", "German":"himbeere", "Italian":"lampone", "Portuguese":"framboesa", "Portuguese (Brazil)":"framboesa", "Russian":"малина", "Chinese (Mandarin)":"覆盆子", "Chinese (Cantonese)":"紅桑子", "Japanese":"ラズベリー", "Korean":"라즈베리", "Hebrew":"פטל", "Arabic":"توت العليق", "Hindi":"रसभरी", "Vietnamese":"mâm xôi", "Thai":"ราสเบอร์รี่", "Turkish":"ahududu" },
  "blackberry": { "Spanish":"mora", "French":"mûre", "German":"brombeere", "Italian":"mora", "Portuguese":"amora", "Portuguese (Brazil)":"amora", "Russian":"ежевика", "Chinese (Mandarin)":"黑莓", "Chinese (Cantonese)":"黑莓", "Japanese":"ブラックベリー", "Korean":"블랙베리", "Hebrew":"פטל שחור", "Arabic":"توت أسود", "Hindi":"जामुन", "Vietnamese":"mâm xôi đen", "Thai":"แบล็คเบอร์รี่", "Turkish":"böğürtlen" },
  "cranberry": { "Spanish":"arándano rojo", "French":"canneberge", "German":"preiselbeere", "Italian":"mirtillo rosso", "Portuguese":"cranberry", "Portuguese (Brazil)":"cranberry", "Russian":"клюква", "Chinese (Mandarin)":"蔓越莓", "Japanese":"クランベリー", "Korean":"크랜베리" },
  "horse": { "Spanish":"caballo", "French":"cheval", "German":"pferd", "Italian":"cavallo", "Portuguese":"cavalo", "Portuguese (Brazil)":"cavalo", "Russian":"лошадь", "Chinese (Mandarin)":"马", "Chinese (Cantonese)":"馬", "Japanese":"うま", "Korean":"말", "Hebrew":"סוס", "Arabic":"حصان", "Hindi":"घोड़ा", "Vietnamese":"ngựa", "Thai":"ม้า", "Turkish":"at" },
  "goat": { "Spanish":"cabra", "French":"chèvre", "German":"ziege", "Italian":"capra", "Portuguese":"cabra", "Portuguese (Brazil)":"cabra", "Russian":"коза", "Chinese (Mandarin)":"山羊", "Chinese (Cantonese)":"山羊", "Japanese":"やぎ", "Korean":"염소", "Hebrew":"עז", "Arabic":"ماعز", "Hindi":"बकरी", "Vietnamese":"dê", "Thai":"แพะ", "Turkish":"keçi" },
  "mouse": { "Spanish":"ratón", "French":"souris", "German":"maus", "Italian":"topo", "Portuguese":"rato", "Portuguese (Brazil)":"rato", "Russian":"мышь", "Chinese (Mandarin)":"老鼠", "Chinese (Cantonese)":"老鼠", "Japanese":"ねずみ", "Korean":"쥐", "Hebrew":"עכבר", "Arabic":"فأر", "Hindi":"चूहा", "Vietnamese":"chuột", "Thai":"หนู", "Turkish":"fare" },
  "squirrel": { "Spanish":"ardilla", "French":"écureuil", "German":"eichhörnchen", "Italian":"scoiattolo", "Portuguese":"esquilo", "Portuguese (Brazil)":"esquilo", "Russian":"белка", "Chinese (Mandarin)":"松鼠", "Chinese (Cantonese)":"松鼠", "Japanese":"りす", "Korean":"다람쥐", "Hebrew":"סנאי", "Arabic":"سنجاب", "Hindi":"गिलहरी", "Vietnamese":"sóc" },
  "park": { "Spanish":"parque", "French":"parc", "German":"park", "Italian":"parco", "Portuguese":"parque", "Portuguese (Brazil)":"parque", "Russian":"парк", "Chinese (Mandarin)":"公园", "Chinese (Cantonese)":"公園", "Japanese":"こうえん", "Korean":"공원", "Hebrew":"פארק", "Arabic":"حديقة", "Hindi":"पार्क", "Vietnamese":"công viên", "Thai":"สวน", "Turkish":"park" },
  "school": { "Spanish":"escuela", "French":"école", "German":"schule", "Italian":"scuola", "Portuguese":"escola", "Portuguese (Brazil)":"escola", "Russian":"школа", "Chinese (Mandarin)":"学校", "Chinese (Cantonese)":"學校", "Japanese":"がっこう", "Korean":"학교", "Hebrew":"בית ספר", "Arabic":"مدرسة", "Hindi":"स्कूल", "Vietnamese":"trường học", "Thai":"โรงเรียน", "Turkish":"okul" },
  "beach": { "Spanish":"playa", "French":"plage", "German":"strand", "Italian":"spiaggia", "Portuguese":"praia", "Portuguese (Brazil)":"praia", "Russian":"пляж", "Chinese (Mandarin)":"海滩", "Chinese (Cantonese)":"沙灘", "Japanese":"ビーチ", "Korean":"해변", "Hebrew":"חוף", "Arabic":"شاطئ", "Hindi":"समुद्र तट", "Vietnamese":"bãi biển", "Thai":"ชายหาด", "Turkish":"plaj" },
  "home": { "Spanish":"casa", "French":"maison", "German":"zuhause", "Italian":"casa", "Portuguese":"casa", "Portuguese (Brazil)":"casa", "Russian":"дом", "Chinese (Mandarin)":"家", "Chinese (Cantonese)":"家", "Japanese":"いえ", "Korean":"집", "Hebrew":"בית", "Arabic":"بيت", "Hindi":"घर", "Vietnamese":"nhà", "Thai":"บ้าน", "Turkish":"ev" },
  "store": { "Spanish":"tienda", "French":"magasin", "German":"geschäft", "Italian":"negozio", "Portuguese":"loja", "Portuguese (Brazil)":"loja", "Russian":"магазин", "Chinese (Mandarin)":"商店", "Chinese (Cantonese)":"商店", "Japanese":"みせ", "Korean":"가게", "Hebrew":"חנות", "Arabic":"متجر", "Hindi":"दुकान", "Vietnamese":"cửa hàng", "Thai":"ร้าน", "Turkish":"mağaza" },
  "library": { "Spanish":"biblioteca", "French":"bibliothèque", "German":"bibliothek", "Italian":"biblioteca", "Portuguese":"biblioteca", "Portuguese (Brazil)":"biblioteca", "Russian":"библиотека", "Chinese (Mandarin)":"图书馆", "Chinese (Cantonese)":"圖書館", "Japanese":"としょかん", "Korean":"도서관", "Hebrew":"ספרייה", "Arabic":"مكتبة", "Hindi":"पुस्तकालय", "Vietnamese":"thư viện", "Thai":"ห้องสมุด", "Turkish":"kütüphane" },
  "pizza": { "Spanish":"pizza", "French":"pizza", "German":"pizza", "Italian":"pizza", "Portuguese":"pizza", "Portuguese (Brazil)":"pizza", "Russian":"пицца", "Chinese (Mandarin)":"披萨", "Chinese (Cantonese)":"薄餅", "Japanese":"ピザ", "Korean":"피자", "Hebrew":"פיצה", "Arabic":"بيتزا", "Hindi":"पिज़्ज़ा", "Vietnamese":"pizza", "Thai":"พิซซ่า", "Turkish":"pizza" },
  "icecream": { "Spanish":"helado", "French":"glace", "German":"eis", "Italian":"gelato", "Portuguese":"sorvete", "Portuguese (Brazil)":"sorvete", "Russian":"мороженое", "Chinese (Mandarin)":"冰淇淋", "Chinese (Cantonese)":"雪糕", "Japanese":"アイスクリーム", "Korean":"아이스크림", "Hebrew":"גלידה", "Arabic":"آيس كريم", "Hindi":"आइसक्रीम", "Vietnamese":"kem", "Thai":"ไอศกรีม", "Turkish":"dondurma" },
  "cookie": { "Spanish":"galleta", "French":"biscuit", "German":"keks", "Italian":"biscotto", "Portuguese":"biscoito", "Portuguese (Brazil)":"biscoito", "Russian":"печенье", "Chinese (Mandarin)":"饼干", "Chinese (Cantonese)":"餅", "Japanese":"クッキー", "Korean":"쿠키", "Hebrew":"עוגיה", "Arabic":"بسكويت", "Hindi":"कुकी", "Vietnamese":"bánh quy", "Thai":"คุกกี้", "Turkish":"kurabiye" },
  "cake": { "Spanish":"pastel", "French":"gâteau", "German":"kuchen", "Italian":"torta", "Portuguese":"bolo", "Portuguese (Brazil)":"bolo", "Russian":"торт", "Chinese (Mandarin)":"蛋糕", "Chinese (Cantonese)":"蛋糕", "Japanese":"ケーキ", "Korean":"케이크", "Hebrew":"עוגה", "Arabic":"كعكة", "Hindi":"केक", "Vietnamese":"bánh", "Thai":"เค้ก", "Turkish":"pasta" },
  "popcorn": { "Spanish":"palomitas", "French":"pop-corn", "German":"popcorn", "Italian":"popcorn", "Portuguese":"pipoca", "Portuguese (Brazil)":"pipoca", "Russian":"попкорн", "Chinese (Mandarin)":"爆米花", "Chinese (Cantonese)":"爆谷", "Japanese":"ポップコーン", "Korean":"팝콘", "Hebrew":"פופקורן", "Arabic":"فشار", "Hindi":"पॉपकॉर्न", "Vietnamese":"bỏng ngô", "Thai":"ข้าวโพดคั่ว", "Turkish":"patlamış mısır" },
  "rice": { "Spanish":"arroz", "French":"riz", "German":"reis", "Italian":"riso", "Portuguese":"arroz", "Portuguese (Brazil)":"arroz", "Russian":"рис", "Chinese (Mandarin)":"米饭", "Chinese (Cantonese)":"飯", "Japanese":"ごはん", "Korean":"밥", "Hebrew":"אורז", "Arabic":"أرز", "Hindi":"चावल", "Vietnamese":"cơm", "Thai":"ข้าว", "Turkish":"pirinç" },
  "pasta": { "Spanish":"pasta", "French":"pâtes", "German":"nudeln", "Italian":"pasta", "Portuguese":"massa", "Portuguese (Brazil)":"macarrão", "Russian":"паста", "Chinese (Mandarin)":"面食", "Chinese (Cantonese)":"意粉", "Japanese":"パスタ", "Korean":"파스타", "Hebrew":"פסטה", "Arabic":"معكرونة", "Hindi":"पास्ता", "Vietnamese":"mì ý", "Thai":"พาสต้า", "Turkish":"makarna" },
  "soup": { "Spanish":"sopa", "French":"soupe", "German":"suppe", "Italian":"zuppa", "Portuguese":"sopa", "Portuguese (Brazil)":"sopa", "Russian":"суп", "Chinese (Mandarin)":"汤", "Chinese (Cantonese)":"湯", "Japanese":"スープ", "Korean":"수프", "Hebrew":"מרק", "Arabic":"حساء", "Hindi":"सूप", "Vietnamese":"súp", "Thai":"ซุป", "Turkish":"çorba" },
  "salad": { "Spanish":"ensalada", "French":"salade", "German":"salat", "Italian":"insalata", "Portuguese":"salada", "Portuguese (Brazil)":"salada", "Russian":"салат", "Chinese (Mandarin)":"沙拉", "Chinese (Cantonese)":"沙律", "Japanese":"サラダ", "Korean":"샐러드", "Hebrew":"סלט", "Arabic":"سلطة", "Hindi":"सलाद", "Vietnamese":"xà lách", "Thai":"สลัด", "Turkish":"salata" },
  "beef": { "Spanish":"carne de res", "French":"bœuf", "German":"rindfleisch", "Italian":"manzo", "Portuguese":"carne", "Portuguese (Brazil)":"carne bovina", "Russian":"говядина", "Chinese (Mandarin)":"牛肉", "Chinese (Cantonese)":"牛肉", "Japanese":"ぎゅうにく", "Korean":"소고기", "Hebrew":"בקר", "Arabic":"لحم بقر", "Hindi":"गोमांस", "Vietnamese":"thịt bò", "Thai":"เนื้อวัว", "Turkish":"sığır eti" },
  "pork": { "Spanish":"cerdo", "French":"porc", "German":"schweinefleisch", "Italian":"maiale", "Portuguese":"porco", "Portuguese (Brazil)":"porco", "Russian":"свинина", "Chinese (Mandarin)":"猪肉", "Chinese (Cantonese)":"豬肉", "Japanese":"ぶたにく", "Korean":"돼지고기", "Hebrew":"חזיר", "Arabic":"لحم خنزير", "Hindi":"सूअर का मांस", "Vietnamese":"thịt lợn", "Thai":"หมู", "Turkish":"domuz eti" },
  "lamb": { "Spanish":"cordero", "French":"agneau", "German":"lamm", "Italian":"agnello", "Portuguese":"cordeiro", "Portuguese (Brazil)":"cordeiro", "Russian":"ягнёнок", "Chinese (Mandarin)":"羊肉", "Chinese (Cantonese)":"羊肉", "Japanese":"ラム", "Korean":"양고기", "Hebrew":"כבש", "Arabic":"لحم الضأن", "Hindi":"भेड़ का मांस", "Vietnamese":"thịt cừu", "Thai":"เนื้อแกะ", "Turkish":"kuzu" },
  "carrot": { "Spanish":"zanahoria", "French":"carotte", "German":"karotte", "Italian":"carota", "Portuguese":"cenoura", "Portuguese (Brazil)":"cenoura", "Russian":"морковь", "Chinese (Mandarin)":"胡萝卜", "Chinese (Cantonese)":"紅蘿蔔", "Japanese":"にんじん", "Korean":"당근", "Hebrew":"גזר", "Arabic":"جزر", "Hindi":"गाजर", "Vietnamese":"cà rốt", "Thai":"แครอท", "Turkish":"havuç" },
  "broccoli": { "Spanish":"brócoli", "French":"brocoli", "German":"brokkoli", "Italian":"broccoli", "Portuguese":"brócolis", "Portuguese (Brazil)":"brócolis", "Russian":"брокколи", "Chinese (Mandarin)":"西兰花", "Chinese (Cantonese)":"西蘭花", "Japanese":"ブロッコリー", "Korean":"브로콜리", "Hebrew":"ברוקולי", "Arabic":"بروكلي", "Hindi":"ब्रोकोली", "Vietnamese":"bông cải xanh", "Thai":"บรอกโคลี", "Turkish":"brokoli" },
  "potato": { "Spanish":"patata", "French":"pomme de terre", "German":"kartoffel", "Italian":"patata", "Portuguese":"batata", "Portuguese (Brazil)":"batata", "Russian":"картофель", "Chinese (Mandarin)":"土豆", "Chinese (Cantonese)":"薯仔", "Japanese":"じゃがいも", "Korean":"감자", "Hebrew":"תפוח אדמה", "Arabic":"بطاطا", "Hindi":"आलू", "Vietnamese":"khoai tây", "Thai":"มันฝรั่ง", "Turkish":"patates" },
  "tomato": { "Spanish":"tomate", "French":"tomate", "German":"tomate", "Italian":"pomodoro", "Portuguese":"tomate", "Portuguese (Brazil)":"tomate", "Russian":"помидор", "Chinese (Mandarin)":"番茄", "Chinese (Cantonese)":"番茄", "Japanese":"トマト", "Korean":"토마토", "Hebrew":"עגבניה", "Arabic":"طماطم", "Hindi":"टमाटर", "Vietnamese":"cà chua", "Thai":"มะเขือเทศ", "Turkish":"domates" },
  "lettuce": { "Spanish":"lechuga", "French":"laitue", "German":"salat", "Italian":"lattuga", "Portuguese":"alface", "Portuguese (Brazil)":"alface", "Russian":"салат", "Chinese (Mandarin)":"生菜", "Chinese (Cantonese)":"生菜", "Japanese":"レタス", "Korean":"상추", "Hebrew":"חסה", "Arabic":"خس", "Hindi":"सलाद पत्ता", "Vietnamese":"xà lách", "Thai":"ผักกาด", "Turkish":"marul" },
  "corn": { "Spanish":"maíz", "French":"maïs", "German":"mais", "Italian":"mais", "Portuguese":"milho", "Portuguese (Brazil)":"milho", "Russian":"кукуруза", "Chinese (Mandarin)":"玉米", "Chinese (Cantonese)":"粟米", "Japanese":"とうもろこし", "Korean":"옥수수", "Hebrew":"תירס", "Arabic":"ذرة", "Hindi":"मक्का", "Vietnamese":"ngô", "Thai":"ข้าวโพด", "Turkish":"mısır" },
  "pear": { "Spanish":"pera", "French":"poire", "German":"birne", "Italian":"pera", "Portuguese":"pera", "Portuguese (Brazil)":"pera", "Russian":"груша", "Chinese (Mandarin)":"梨", "Chinese (Cantonese)":"梨", "Japanese":"なし", "Korean":"배", "Hebrew":"אגס", "Arabic":"كمثرى", "Hindi":"नाशपाती", "Vietnamese":"lê", "Thai":"สาลี่", "Turkish":"armut" },
  "head": { "Spanish":"cabeza", "French":"tête", "German":"kopf", "Italian":"testa", "Portuguese":"cabeça", "Portuguese (Brazil)":"cabeça", "Russian":"голова", "Chinese (Mandarin)":"头", "Chinese (Cantonese)":"頭", "Japanese":"あたま", "Korean":"머리", "Hebrew":"ראש", "Arabic":"رأس", "Hindi":"सिर", "Vietnamese":"đầu", "Thai":"หัว", "Turkish":"baş" },
  "arm": { "Spanish":"brazo", "French":"bras", "German":"arm", "Italian":"braccio", "Portuguese":"braço", "Portuguese (Brazil)":"braço", "Russian":"рука", "Chinese (Mandarin)":"手臂", "Chinese (Cantonese)":"手臂", "Japanese":"うで", "Korean":"팔", "Hebrew":"זרוע", "Arabic":"ذراع", "Hindi":"बांह", "Vietnamese":"cánh tay", "Thai":"แขน", "Turkish":"kol" },
  "leg": { "Spanish":"pierna", "French":"jambe", "German":"bein", "Italian":"gamba", "Portuguese":"perna", "Portuguese (Brazil)":"perna", "Russian":"нога", "Chinese (Mandarin)":"腿", "Chinese (Cantonese)":"腿", "Japanese":"あし", "Korean":"다리", "Hebrew":"רגל", "Arabic":"ساق", "Hindi":"पैर", "Vietnamese":"chân", "Thai":"ขา", "Turkish":"bacak" },
  "ear": { "Spanish":"oreja", "French":"oreille", "German":"ohr", "Italian":"orecchio", "Portuguese":"orelha", "Portuguese (Brazil)":"orelha", "Russian":"ухо", "Chinese (Mandarin)":"耳朵", "Chinese (Cantonese)":"耳", "Japanese":"みみ", "Korean":"귀", "Hebrew":"אוזן", "Arabic":"أذن", "Hindi":"कान", "Vietnamese":"tai", "Thai":"หู", "Turkish":"kulak" },
  "run": { "Spanish":"correr", "French":"courir", "German":"laufen", "Italian":"correre", "Portuguese":"correr", "Portuguese (Brazil)":"correr", "Russian":"бежать", "Chinese (Mandarin)":"跑", "Chinese (Cantonese)":"跑", "Japanese":"はしる", "Korean":"달리다", "Hebrew":"לרוץ", "Arabic":"يركض", "Hindi":"दौड़ना", "Vietnamese":"chạy", "Thai":"วิ่ง", "Turkish":"koşmak" },
  "jump": { "Spanish":"saltar", "French":"sauter", "German":"springen", "Italian":"saltare", "Portuguese":"pular", "Portuguese (Brazil)":"pular", "Russian":"прыгать", "Chinese (Mandarin)":"跳", "Chinese (Cantonese)":"跳", "Japanese":"ジャンプ", "Korean":"점프", "Hebrew":"לקפוץ", "Arabic":"يقفز", "Hindi":"कूदना", "Vietnamese":"nhảy", "Thai":"กระโดด", "Turkish":"zıplamak" },
  "sing": { "Spanish":"cantar", "French":"chanter", "German":"singen", "Italian":"cantare", "Portuguese":"cantar", "Portuguese (Brazil)":"cantar", "Russian":"петь", "Chinese (Mandarin)":"唱歌", "Chinese (Cantonese)":"唱歌", "Japanese":"うたう", "Korean":"노래하다", "Hebrew":"לשיר", "Arabic":"يغني", "Hindi":"गाना", "Vietnamese":"hát", "Thai":"ร้องเพลง", "Turkish":"şarkı söylemek" },
  "dance": { "Spanish":"bailar", "French":"danser", "German":"tanzen", "Italian":"ballare", "Portuguese":"dançar", "Portuguese (Brazil)":"dançar", "Russian":"танцевать", "Chinese (Mandarin)":"跳舞", "Chinese (Cantonese)":"跳舞", "Japanese":"おどる", "Korean":"춤추다", "Hebrew":"לרקוד", "Arabic":"يرقص", "Hindi":"नाचना", "Vietnamese":"nhảy múa", "Thai":"เต้น", "Turkish":"dans" },
  "play": { "Spanish":"jugar", "French":"jouer", "German":"spielen", "Italian":"giocare", "Portuguese":"brincar", "Portuguese (Brazil)":"brincar", "Russian":"играть", "Chinese (Mandarin)":"玩", "Chinese (Cantonese)":"玩", "Japanese":"あそぶ", "Korean":"놀다", "Hebrew":"לשחק", "Arabic":"يلعب", "Hindi":"खेलना", "Vietnamese":"chơi", "Thai":"เล่น", "Turkish":"oynamak" },
  "swim": { "Spanish":"nadar", "French":"nager", "German":"schwimmen", "Italian":"nuotare", "Portuguese":"nadar", "Portuguese (Brazil)":"nadar", "Russian":"плавать", "Chinese (Mandarin)":"游泳", "Chinese (Cantonese)":"游水", "Japanese":"およぐ", "Korean":"수영", "Hebrew":"לשחות", "Arabic":"يسبح", "Hindi":"तैरना", "Vietnamese":"bơi", "Thai":"ว่ายน้ำ", "Turkish":"yüzmek" },
  "climb": { "Spanish":"escalar", "French":"grimper", "German":"klettern", "Italian":"arrampicarsi", "Portuguese":"escalar", "Portuguese (Brazil)":"escalar", "Russian":"лазить", "Chinese (Mandarin)":"爬", "Chinese (Cantonese)":"爬", "Japanese":"のぼる", "Korean":"오르다", "Hebrew":"לטפס", "Arabic":"يتسلق", "Hindi":"चढ़ना", "Vietnamese":"leo", "Thai":"ปีน", "Turkish":"tırmanmak" },
  "read": { "Spanish":"leer", "French":"lire", "German":"lesen", "Italian":"leggere", "Portuguese":"ler", "Portuguese (Brazil)":"ler", "Russian":"читать", "Chinese (Mandarin)":"读", "Chinese (Cantonese)":"讀", "Japanese":"よむ", "Korean":"읽다", "Hebrew":"לקרוא", "Arabic":"يقرأ", "Hindi":"पढ़ना", "Vietnamese":"đọc", "Thai":"อ่าน", "Turkish":"okumak" },
  "paint": { "Spanish":"pintar", "French":"peindre", "German":"malen", "Italian":"dipingere", "Portuguese":"pintar", "Portuguese (Brazil)":"pintar", "Russian":"красить", "Chinese (Mandarin)":"画", "Chinese (Cantonese)":"畫", "Japanese":"えがく", "Korean":"그리다", "Hebrew":"לצבוע", "Arabic":"يرسم", "Hindi":"पेंट करना", "Vietnamese":"vẽ", "Thai":"วาด", "Turkish":"boyamak" },
  "cook": { "Spanish":"cocinar", "French":"cuisiner", "German":"kochen", "Italian":"cucinare", "Portuguese":"cozinhar", "Portuguese (Brazil)":"cozinhar", "Russian":"готовить", "Chinese (Mandarin)":"煮", "Chinese (Cantonese)":"煮", "Japanese":"りょうりする", "Korean":"요리하다", "Hebrew":"לבשל", "Arabic":"يطبخ", "Hindi":"पकाना", "Vietnamese":"nấu", "Thai":"ทำอาหาร", "Turkish":"pişirmek" },
  "chair": { "Spanish":"silla", "French":"chaise", "German":"stuhl", "Italian":"sedia", "Portuguese":"cadeira", "Portuguese (Brazil)":"cadeira", "Russian":"стул", "Chinese (Mandarin)":"椅子", "Chinese (Cantonese)":"椅", "Japanese":"いす", "Korean":"의자", "Hebrew":"כיסא", "Arabic":"كرسي", "Hindi":"कुर्सी", "Vietnamese":"ghế", "Thai":"เก้าอี้", "Turkish":"sandalye" },
  "table": { "Spanish":"mesa", "French":"table", "German":"tisch", "Italian":"tavolo", "Portuguese":"mesa", "Portuguese (Brazil)":"mesa", "Russian":"стол", "Chinese (Mandarin)":"桌子", "Chinese (Cantonese)":"枱", "Japanese":"テーブル", "Korean":"식탁", "Hebrew":"שולחן", "Arabic":"طاولة", "Hindi":"मेज़", "Vietnamese":"bàn", "Thai":"โต๊ะ", "Turkish":"masa" },
  "bed": { "Spanish":"cama", "French":"lit", "German":"bett", "Italian":"letto", "Portuguese":"cama", "Portuguese (Brazil)":"cama", "Russian":"кровать", "Chinese (Mandarin)":"床", "Chinese (Cantonese)":"床", "Japanese":"ベッド", "Korean":"침대", "Hebrew":"מיטה", "Arabic":"سرير", "Hindi":"बिस्तर", "Vietnamese":"giường", "Thai":"เตียง", "Turkish":"yatak" },
  "sofa": { "Spanish":"sofá", "French":"canapé", "German":"sofa", "Italian":"divano", "Portuguese":"sofá", "Portuguese (Brazil)":"sofá", "Russian":"диван", "Chinese (Mandarin)":"沙发", "Chinese (Cantonese)":"沙發", "Japanese":"ソファ", "Korean":"소파", "Hebrew":"ספה", "Arabic":"أريكة", "Hindi":"सोफा", "Vietnamese":"ghế sofa", "Thai":"โซฟา", "Turkish":"kanepe" },
  "lamp": { "Spanish":"lámpara", "French":"lampe", "German":"lampe", "Italian":"lampada", "Portuguese":"lâmpada", "Portuguese (Brazil)":"lâmpada", "Russian":"лампа", "Chinese (Mandarin)":"灯", "Chinese (Cantonese)":"燈", "Japanese":"ランプ", "Korean":"램프", "Hebrew":"מנורה", "Arabic":"مصباح", "Hindi":"दीपक", "Vietnamese":"đèn", "Thai":"โคมไฟ", "Turkish":"lamba" },
  "happy": { "Spanish":"feliz", "French":"heureux", "German":"glücklich", "Italian":"felice", "Portuguese":"feliz", "Portuguese (Brazil)":"feliz", "Russian":"счастливый", "Chinese (Mandarin)":"开心", "Chinese (Cantonese)":"開心", "Japanese":"うれしい", "Korean":"행복한", "Hebrew":"שמח", "Arabic":"سعيد", "Hindi":"खुश", "Vietnamese":"vui", "Thai":"มีความสุข", "Turkish":"mutlu" },
  "sad": { "Spanish":"triste", "French":"triste", "German":"traurig", "Italian":"triste", "Portuguese":"triste", "Portuguese (Brazil)":"triste", "Russian":"грустный", "Chinese (Mandarin)":"伤心", "Chinese (Cantonese)":"傷心", "Japanese":"かなしい", "Korean":"슬픈", "Hebrew":"עצוב", "Arabic":"حزين", "Hindi":"उदास", "Vietnamese":"buồn", "Thai":"เศร้า", "Turkish":"üzgün" },
  "angry": { "Spanish":"enojado", "French":"fâché", "German":"wütend", "Italian":"arrabbiato", "Portuguese":"zangado", "Portuguese (Brazil)":"bravo", "Russian":"сердитый", "Chinese (Mandarin)":"生气", "Chinese (Cantonese)":"嬲", "Japanese":"おこってる", "Korean":"화난", "Hebrew":"כועס", "Arabic":"غاضب", "Hindi":"गुस्सा", "Vietnamese":"giận", "Thai":"โกรธ", "Turkish":"kızgın" },
  "scared": { "Spanish":"asustado", "French":"effrayé", "German":"ängstlich", "Italian":"spaventato", "Portuguese":"assustado", "Portuguese (Brazil)":"assustado", "Russian":"испуганный", "Chinese (Mandarin)":"害怕", "Chinese (Cantonese)":"驚", "Japanese":"こわい", "Korean":"무서운", "Hebrew":"מפחד", "Arabic":"خائف", "Hindi":"डरा हुआ", "Vietnamese":"sợ", "Thai":"กลัว", "Turkish":"korkmuş" },
  "excited": { "Spanish":"emocionado", "French":"excité", "German":"aufgeregt", "Italian":"entusiasta", "Portuguese":"animado", "Portuguese (Brazil)":"animado", "Russian":"взволнованный", "Chinese (Mandarin)":"兴奋", "Chinese (Cantonese)":"興奮", "Japanese":"わくわく", "Korean":"신난", "Hebrew":"מתרגש", "Arabic":"متحمس", "Hindi":"उत्साहित", "Vietnamese":"hào hứng", "Thai":"ตื่นเต้น", "Turkish":"heyecanlı" },
  "doll": { "Spanish":"muñeca", "French":"poupée", "German":"puppe", "Italian":"bambola", "Portuguese":"boneca", "Portuguese (Brazil)":"boneca", "Russian":"кукла", "Chinese (Mandarin)":"娃娃", "Chinese (Cantonese)":"公仔", "Japanese":"にんぎょう", "Korean":"인형", "Hebrew":"בובה", "Arabic":"دمية", "Hindi":"गुड़िया", "Vietnamese":"búp bê", "Thai":"ตุ๊กตา", "Turkish":"bebek" },
  "teddybear": { "Spanish":"osito", "French":"ours en peluche", "German":"teddy", "Italian":"orsacchiotto", "Portuguese":"ursinho", "Portuguese (Brazil)":"ursinho", "Russian":"плюшевый мишка", "Chinese (Mandarin)":"泰迪熊", "Chinese (Cantonese)":"泰迪熊", "Japanese":"テディベア", "Korean":"곰 인형", "Hebrew":"דובי", "Arabic":"دب محشو", "Hindi":"टेडी बियर" },
  "block": { "Spanish":"bloque", "French":"bloc", "German":"block", "Italian":"blocco", "Portuguese":"bloco", "Portuguese (Brazil)":"bloco", "Russian":"кубик", "Chinese (Mandarin)":"积木", "Chinese (Cantonese)":"積木", "Japanese":"ブロック", "Korean":"블록", "Hebrew":"קובייה", "Arabic":"مكعب", "Hindi":"ब्लॉक", "Vietnamese":"khối", "Thai":"บล็อก" },
  "puzzle": { "Spanish":"rompecabezas", "French":"puzzle", "German":"puzzle", "Italian":"puzzle", "Portuguese":"quebra-cabeça", "Portuguese (Brazil)":"quebra-cabeça", "Russian":"пазл", "Chinese (Mandarin)":"拼图", "Chinese (Cantonese)":"砌圖", "Japanese":"パズル", "Korean":"퍼즐", "Hebrew":"פאזל", "Arabic":"أحجية", "Hindi":"पहेली", "Vietnamese":"câu đố", "Thai":"ปริศนา" },
  "truck": { "Spanish":"camión", "French":"camion", "German":"lastwagen", "Italian":"camion", "Portuguese":"caminhão", "Portuguese (Brazil)":"caminhão", "Russian":"грузовик", "Chinese (Mandarin)":"卡车", "Chinese (Cantonese)":"貨車", "Japanese":"トラック", "Korean":"트럭", "Hebrew":"משאית", "Arabic":"شاحنة", "Hindi":"ट्रक", "Vietnamese":"xe tải", "Thai":"รถบรรทุก" },
  "plane": { "Spanish":"avión", "French":"avion", "German":"flugzeug", "Italian":"aereo", "Portuguese":"avião", "Portuguese (Brazil)":"avião", "Russian":"самолёт", "Chinese (Mandarin)":"飞机", "Chinese (Cantonese)":"飛機", "Japanese":"ひこうき", "Korean":"비행기", "Hebrew":"מטוס", "Arabic":"طائرة", "Hindi":"हवाई जहाज", "Vietnamese":"máy bay", "Thai":"เครื่องบิน" },
  "robot": { "Spanish":"robot", "French":"robot", "German":"roboter", "Italian":"robot", "Portuguese":"robô", "Portuguese (Brazil)":"robô", "Russian":"робот", "Chinese (Mandarin)":"机器人", "Chinese (Cantonese)":"機械人", "Japanese":"ロボット", "Korean":"로봇", "Hebrew":"רובוט", "Arabic":"روبوت", "Hindi":"रोबोट", "Vietnamese":"người máy", "Thai":"หุ่นยนต์" },
  "big": { "Spanish":"grande", "French":"grand", "German":"groß", "Italian":"grande", "Portuguese":"grande", "Portuguese (Brazil)":"grande", "Russian":"большой", "Chinese (Mandarin)":"大", "Chinese (Cantonese)":"大", "Japanese":"おおきい", "Korean":"큰", "Hebrew":"גדול", "Arabic":"كبير", "Hindi":"बड़ा", "Vietnamese":"to", "Thai":"ใหญ่", "Turkish":"büyük" },
  "small": { "Spanish":"pequeño", "French":"petit", "German":"klein", "Italian":"piccolo", "Portuguese":"pequeno", "Portuguese (Brazil)":"pequeno", "Russian":"маленький", "Chinese (Mandarin)":"小", "Chinese (Cantonese)":"細", "Japanese":"ちいさい", "Korean":"작은", "Hebrew":"קטן", "Arabic":"صغير", "Hindi":"छोटा", "Vietnamese":"nhỏ", "Thai":"เล็ก", "Turkish":"küçük" },
  "fast": { "Spanish":"rápido", "French":"rapide", "German":"schnell", "Italian":"veloce", "Portuguese":"rápido", "Portuguese (Brazil)":"rápido", "Russian":"быстрый", "Chinese (Mandarin)":"快", "Chinese (Cantonese)":"快", "Japanese":"はやい", "Korean":"빠른", "Hebrew":"מהיר", "Arabic":"سريع", "Hindi":"तेज़", "Vietnamese":"nhanh", "Thai":"เร็ว", "Turkish":"hızlı" },
  "slow": { "Spanish":"lento", "French":"lent", "German":"langsam", "Italian":"lento", "Portuguese":"lento", "Portuguese (Brazil)":"lento", "Russian":"медленный", "Chinese (Mandarin)":"慢", "Chinese (Cantonese)":"慢", "Japanese":"おそい", "Korean":"느린", "Hebrew":"איטי", "Arabic":"بطيء", "Hindi":"धीमा", "Vietnamese":"chậm", "Thai":"ช้า", "Turkish":"yavaş" },
  "loud": { "Spanish":"ruidoso", "French":"fort", "German":"laut", "Italian":"rumoroso", "Portuguese":"alto", "Portuguese (Brazil)":"alto", "Russian":"громкий", "Chinese (Mandarin)":"大声", "Chinese (Cantonese)":"大聲", "Japanese":"うるさい", "Korean":"시끄러운", "Hebrew":"רועש", "Arabic":"صاخب", "Hindi":"ज़ोर", "Vietnamese":"to", "Thai":"ดัง", "Turkish":"yüksek sesle" },
  "soft": { "Spanish":"suave", "French":"doux", "German":"weich", "Italian":"morbido", "Portuguese":"macio", "Portuguese (Brazil)":"macio", "Russian":"мягкий", "Chinese (Mandarin)":"软", "Chinese (Cantonese)":"軟", "Japanese":"やわらかい", "Korean":"부드러운", "Hebrew":"רך", "Arabic":"ناعم", "Hindi":"मुलायम", "Vietnamese":"mềm", "Thai":"นุ่ม", "Turkish":"yumuşak" },
  "hard": { "Spanish":"duro", "French":"dur", "German":"hart", "Italian":"duro", "Portuguese":"duro", "Portuguese (Brazil)":"duro", "Russian":"твёрдый", "Chinese (Mandarin)":"硬", "Chinese (Cantonese)":"硬", "Japanese":"かたい", "Korean":"단단한", "Hebrew":"קשה", "Arabic":"صلب", "Hindi":"कठोर", "Vietnamese":"cứng", "Thai":"แข็ง", "Turkish":"sert" },
  "hot": { "Spanish":"caliente", "French":"chaud", "German":"heiß", "Italian":"caldo", "Portuguese":"quente", "Portuguese (Brazil)":"quente", "Russian":"горячий", "Chinese (Mandarin)":"热", "Chinese (Cantonese)":"熱", "Japanese":"あつい", "Korean":"뜨거운", "Hebrew":"חם", "Arabic":"ساخن", "Hindi":"गरम", "Vietnamese":"nóng", "Thai":"ร้อน", "Turkish":"sıcak" },
  "cold": { "Spanish":"frío", "French":"froid", "German":"kalt", "Italian":"freddo", "Portuguese":"frio", "Portuguese (Brazil)":"frio", "Russian":"холодный", "Chinese (Mandarin)":"冷", "Chinese (Cantonese)":"凍", "Japanese":"さむい", "Korean":"차가운", "Hebrew":"קר", "Arabic":"بارد", "Hindi":"ठंडा", "Vietnamese":"lạnh", "Thai":"เย็น", "Turkish":"soğuk" },
  "soccer": { "Spanish":"fútbol", "French":"football", "German":"fußball", "Italian":"calcio", "Portuguese":"futebol", "Portuguese (Brazil)":"futebol", "Russian":"футбол", "Chinese (Mandarin)":"足球", "Chinese (Cantonese)":"足球", "Japanese":"サッカー", "Korean":"축구", "Hebrew":"כדורגל", "Arabic":"كرة القدم", "Hindi":"फुटबॉल", "Vietnamese":"bóng đá", "Thai":"ฟุตบอล" },
  "basketball": { "Spanish":"baloncesto", "French":"basket", "German":"basketball", "Italian":"pallacanestro", "Portuguese":"basquete", "Portuguese (Brazil)":"basquete", "Russian":"баскетбол", "Chinese (Mandarin)":"篮球", "Chinese (Cantonese)":"籃球", "Japanese":"バスケットボール", "Korean":"농구", "Hebrew":"כדורסל", "Arabic":"كرة السلة", "Hindi":"बास्केटबॉल", "Vietnamese":"bóng rổ", "Thai":"บาสเก็ตบอล" },
  "tennis": { "Spanish":"tenis", "French":"tennis", "German":"tennis", "Italian":"tennis", "Portuguese":"tênis", "Portuguese (Brazil)":"tênis", "Russian":"теннис", "Chinese (Mandarin)":"网球", "Chinese (Cantonese)":"網球", "Japanese":"テニス", "Korean":"테니스", "Hebrew":"טניס", "Arabic":"تنس", "Hindi":"टेनिस" },
  "baseball": { "Spanish":"béisbol", "French":"baseball", "German":"baseball", "Italian":"baseball", "Portuguese":"beisebol", "Portuguese (Brazil)":"beisebol", "Russian":"бейсбол", "Chinese (Mandarin)":"棒球", "Chinese (Cantonese)":"棒球", "Japanese":"やきゅう", "Korean":"야구", "Hebrew":"בייסבול", "Arabic":"بيسبول", "Hindi":"बेसबॉल" },
  "swimming": { "Spanish":"natación", "French":"natation", "German":"schwimmen", "Italian":"nuoto", "Portuguese":"natação", "Portuguese (Brazil)":"natação", "Russian":"плавание", "Chinese (Mandarin)":"游泳", "Chinese (Cantonese)":"游水", "Japanese":"すいえい", "Korean":"수영", "Hebrew":"שחייה", "Arabic":"سباحة", "Hindi":"तैराकी", "Vietnamese":"bơi lội", "Thai":"ว่ายน้ำ" },
  "phone": { "Spanish":"teléfono", "French":"téléphone", "German":"telefon", "Italian":"telefono", "Portuguese":"telefone", "Portuguese (Brazil)":"telefone", "Russian":"телефон", "Chinese (Mandarin)":"手机", "Chinese (Cantonese)":"手機", "Japanese":"でんわ", "Korean":"전화", "Hebrew":"טלפון", "Arabic":"هاتف", "Hindi":"फोन", "Vietnamese":"điện thoại", "Thai":"โทรศัพท์", "Turkish":"telefon" },
  "tablet": { "Spanish":"tableta", "French":"tablette", "German":"tablet", "Italian":"tablet", "Portuguese":"tablet", "Portuguese (Brazil)":"tablet", "Russian":"планшет", "Chinese (Mandarin)":"平板", "Chinese (Cantonese)":"平板", "Japanese":"タブレット", "Korean":"태블릿", "Hebrew":"טאבלט", "Arabic":"جهاز لوحي", "Hindi":"टैबलेट" },
  "tv": { "Spanish":"televisión", "French":"télé", "German":"fernseher", "Italian":"tv", "Portuguese":"tv", "Portuguese (Brazil)":"tv", "Russian":"телевизор", "Chinese (Mandarin)":"电视", "Chinese (Cantonese)":"電視", "Japanese":"テレビ", "Korean":"텔레비전", "Hebrew":"טלוויזיה", "Arabic":"تلفاز", "Hindi":"टीवी" },
  "computer": { "Spanish":"computadora", "French":"ordinateur", "German":"computer", "Italian":"computer", "Portuguese":"computador", "Portuguese (Brazil)":"computador", "Russian":"компьютер", "Chinese (Mandarin)":"电脑", "Chinese (Cantonese)":"電腦", "Japanese":"コンピューター", "Korean":"컴퓨터", "Hebrew":"מחשב", "Arabic":"حاسوب", "Hindi":"कंप्यूटर" },
  "camera": { "Spanish":"cámara", "French":"appareil photo", "German":"kamera", "Italian":"macchina fotografica", "Portuguese":"câmera", "Portuguese (Brazil)":"câmera", "Russian":"камера", "Chinese (Mandarin)":"相机", "Chinese (Cantonese)":"相機", "Japanese":"カメラ", "Korean":"카메라", "Hebrew":"מצלמה", "Arabic":"كاميرا", "Hindi":"कैमरा" },

  // Family — primary (most important for babies). "mother"/"father" now in
  // curriculum replacing "mama"/"dada" — make sure these have full coverage.
  "mother": { Spanish:"madre", French:"mère", German:"mutter", Italian:"madre", Portuguese:"mãe", "Portuguese (Brazil)":"mãe", Russian:"мать", "Chinese (Mandarin)":"妈妈", "Chinese (Cantonese)":"媽媽", Japanese:"おかあさん", Korean:"엄마", Hebrew:"אמא", Arabic:"أم", Hindi:"माँ", Vietnamese:"mẹ", "Vietnamese (Northern)":"mẹ", "Vietnamese (Southern)":"má", Turkish:"anne", Lao:"ແມ່", Thai:"แม่", Indonesian:"ibu", Malay:"ibu", Tagalog:"ina", Swahili:"mama", Persian:"مادر", Urdu:"ماں", Bengali:"মা", Tamil:"அம்மா", Telugu:"అమ్మ", Marathi:"आई", Polish:"matka", Dutch:"moeder", Swedish:"mor", Greek:"μητέρα" },
  "father": { Spanish:"padre", French:"père", German:"vater", Italian:"padre", Portuguese:"pai", "Portuguese (Brazil)":"pai", Russian:"отец", "Chinese (Mandarin)":"爸爸", "Chinese (Cantonese)":"爸爸", Japanese:"おとうさん", Korean:"아빠", Hebrew:"אבא", Arabic:"أب", Hindi:"पिता", Vietnamese:"cha", "Vietnamese (Northern)":"bố", "Vietnamese (Southern)":"ba", Turkish:"baba", Lao:"ພໍ່", Thai:"พ่อ", Indonesian:"ayah", Malay:"ayah", Tagalog:"ama", Swahili:"baba", Persian:"پدر", Urdu:"باپ", Bengali:"বাবা", Tamil:"அப்பா", Telugu:"నాన్న", Marathi:"बाबा", Polish:"ojciec", Dutch:"vader", Swedish:"far", Greek:"πατέρας" },
  "baby":   { Spanish:"bebé", French:"bébé", German:"baby", Italian:"bambino", Portuguese:"bebê", "Portuguese (Brazil)":"bebê", Russian:"малыш", "Chinese (Mandarin)":"宝宝", "Chinese (Cantonese)":"BB", Japanese:"あかちゃん", Korean:"아기", Hebrew:"תינוק", Arabic:"طفل", Hindi:"बच्चा", Vietnamese:"em bé", Turkish:"bebek", Lao:"ລູກ", Thai:"ทารก", Indonesian:"bayi", Malay:"bayi", Tagalog:"sanggol", Swahili:"mtoto", Persian:"نوزاد", Urdu:"بچہ", Bengali:"শিশু", Tamil:"குழந்தை", Telugu:"బిడ్డ", Marathi:"बाळ", Polish:"dziecko", Dutch:"baby", Swedish:"bebis", Greek:"μωρό" },
  "mama":   { Spanish:"mamá", French:"maman", German:"mama", Italian:"mamma", Portuguese:"mamãe", "Portuguese (Brazil)":"mamãe", Russian:"мама", "Chinese (Mandarin)":"妈妈", "Chinese (Cantonese)":"媽媽", Japanese:"ママ", Korean:"엄마", Hebrew:"אמא", Arabic:"ماما", Hindi:"मम्मी", Vietnamese:"mẹ", Turkish:"anne", Lao:"ແມ່" },
  "dada":   { Spanish:"papá", French:"papa", German:"papa", Italian:"papà", Portuguese:"papai", "Portuguese (Brazil)":"papai", Russian:"папа", "Chinese (Mandarin)":"爸爸", "Chinese (Cantonese)":"爸爸", Japanese:"パパ", Korean:"아빠", Hebrew:"אבא", Arabic:"بابا", Hindi:"पापा", Vietnamese:"bố", Turkish:"baba", Lao:"ພໍ່" },

  // Family extended
  "sister": { Spanish:"hermana", French:"sœur", German:"schwester", Italian:"sorella", Portuguese:"irmã", "Portuguese (Brazil)":"irmã", Russian:"сестра", "Chinese (Mandarin)":"姐妹", "Chinese (Cantonese)":"姊妹", Japanese:"しまい", Korean:"자매", Hebrew:"אחות", Arabic:"أخت", Hindi:"बहन", Vietnamese:"chị em", Turkish:"kız kardeş", Lao:"ເອື້ອຍ" },
  "brother": { Spanish:"hermano", French:"frère", German:"bruder", Italian:"fratello", Portuguese:"irmão", "Portuguese (Brazil)":"irmão", Russian:"брат", "Chinese (Mandarin)":"兄弟", "Chinese (Cantonese)":"兄弟", Japanese:"きょうだい", Korean:"형제", Hebrew:"אח", Arabic:"أخ", Hindi:"भाई", Vietnamese:"anh em", Turkish:"erkek kardeş", Lao:"ອ້າຍ" },
  "grandma": { Spanish:"abuela", French:"mamie", German:"oma", Italian:"nonna", Portuguese:"avó", "Portuguese (Brazil)":"vovó", Russian:"бабушка", "Chinese (Mandarin)":"奶奶", "Chinese (Cantonese)":"嫲嫲", Japanese:"おばあちゃん", Korean:"할머니", Hebrew:"סבתא", Arabic:"جدة", Hindi:"दादी", Vietnamese:"bà", Turkish:"nine", Lao:"ແມ່ຕູ້" },
  "grandpa": { Spanish:"abuelo", French:"papi", German:"opa", Italian:"nonno", Portuguese:"avô", "Portuguese (Brazil)":"vovô", Russian:"дедушка", "Chinese (Mandarin)":"爷爷", "Chinese (Cantonese)":"爺爺", Japanese:"おじいちゃん", Korean:"할아버지", Hebrew:"סבא", Arabic:"جد", Hindi:"दादा", Vietnamese:"ông", Turkish:"dede", Lao:"ພໍ່ຕູ້" },
  "aunt": { Spanish:"tía", French:"tante", German:"tante", Italian:"zia", Portuguese:"tia", "Portuguese (Brazil)":"tia", Russian:"тётя", "Chinese (Mandarin)":"阿姨", "Chinese (Cantonese)":"阿姨", Japanese:"おば", Korean:"이모", Hebrew:"דודה", Arabic:"عمة", Hindi:"चाची", Vietnamese:"cô", Turkish:"teyze", Lao:"ປ້າ" },
  "uncle": { Spanish:"tío", French:"oncle", German:"onkel", Italian:"zio", Portuguese:"tio", "Portuguese (Brazil)":"tio", Russian:"дядя", "Chinese (Mandarin)":"叔叔", "Chinese (Cantonese)":"叔叔", Japanese:"おじ", Korean:"삼촌", Hebrew:"דוד", Arabic:"عم", Hindi:"चाचा", Vietnamese:"chú", Turkish:"amca", Lao:"ລຸງ" },
  "cousin": { Spanish:"primo", French:"cousin", German:"cousin", Italian:"cugino", Portuguese:"primo", "Portuguese (Brazil)":"primo", Russian:"кузен", "Chinese (Mandarin)":"表哥", "Chinese (Cantonese)":"表哥", Japanese:"いとこ", Korean:"사촌", Hebrew:"בן דוד", Arabic:"ابن عم", Hindi:"चचेरा भाई", Vietnamese:"anh họ", Turkish:"kuzen", Lao:"ຫຼານ" },

  // Farm animals
  "cow":     { Spanish:"vaca", French:"vache", German:"kuh", Italian:"mucca", Portuguese:"vaca", "Portuguese (Brazil)":"vaca", Russian:"корова", "Chinese (Mandarin)":"牛", "Chinese (Cantonese)":"牛", Japanese:"うし", Korean:"소", Hebrew:"פרה", Arabic:"بقرة", Hindi:"गाय", Vietnamese:"bò", Turkish:"inek", Lao:"ງົວ" },
  "chicken": { Spanish:"pollo", French:"poule", German:"huhn", Italian:"gallina", Portuguese:"galinha", "Portuguese (Brazil)":"galinha", Russian:"курица", "Chinese (Mandarin)":"鸡", "Chinese (Cantonese)":"雞", Japanese:"にわとり", Korean:"닭", Hebrew:"תרנגולת", Arabic:"دجاجة", Hindi:"मुर्गी", Vietnamese:"gà", Turkish:"tavuk", Lao:"ໄກ່" },
  "duck":    { Spanish:"pato", French:"canard", German:"ente", Italian:"anatra", Portuguese:"pato", "Portuguese (Brazil)":"pato", Russian:"утка", "Chinese (Mandarin)":"鸭子", "Chinese (Cantonese)":"鴨", Japanese:"あひる", Korean:"오리", Hebrew:"ברווז", Arabic:"بطة", Hindi:"बतख", Vietnamese:"vịt", Turkish:"ördek", Lao:"ເປັດ" },
  "sheep":   { Spanish:"oveja", French:"mouton", German:"schaf", Italian:"pecora", Portuguese:"ovelha", "Portuguese (Brazil)":"ovelha", Russian:"овца", "Chinese (Mandarin)":"羊", "Chinese (Cantonese)":"羊", Japanese:"ひつじ", Korean:"양", Hebrew:"כבש", Arabic:"خروف", Hindi:"भेड़", Vietnamese:"cừu", Turkish:"koyun", Lao:"ແກະ" },
  "pig":     { Spanish:"cerdo", French:"cochon", German:"schwein", Italian:"maiale", Portuguese:"porco", "Portuguese (Brazil)":"porco", Russian:"свинья", "Chinese (Mandarin)":"猪", "Chinese (Cantonese)":"豬", Japanese:"ぶた", Korean:"돼지", Hebrew:"חזיר", Arabic:"خنزير", Hindi:"सुअर", Vietnamese:"lợn", Turkish:"domuz", Lao:"ໝູ" },

  // Fruits (apple/banana already in CORE)
  "grape":      { Spanish:"uva", French:"raisin", German:"traube", Italian:"uva", Portuguese:"uva", "Portuguese (Brazil)":"uva", Russian:"виноград", "Chinese (Mandarin)":"葡萄", "Chinese (Cantonese)":"葡萄", Japanese:"ぶどう", Korean:"포도", Hebrew:"ענב", Arabic:"عنب", Hindi:"अंगूर", Vietnamese:"nho", Turkish:"üzüm" },
  "orange":     { Spanish:"naranja", French:"orange", German:"orange", Italian:"arancia", Portuguese:"laranja", "Portuguese (Brazil)":"laranja", Russian:"апельсин", "Chinese (Mandarin)":"橙子", "Chinese (Cantonese)":"橙", Japanese:"オレンジ", Korean:"오렌지", Hebrew:"תפוז", Arabic:"برتقال", Hindi:"संतरा", Vietnamese:"cam", Turkish:"portakal" },
  "strawberry": { Spanish:"fresa", French:"fraise", German:"erdbeere", Italian:"fragola", Portuguese:"morango", "Portuguese (Brazil)":"morango", Russian:"клубника", "Chinese (Mandarin)":"草莓", "Chinese (Cantonese)":"士多啤梨", Japanese:"いちご", Korean:"딸기", Hebrew:"תות", Arabic:"فراولة", Hindi:"स्ट्रॉबेरी", Vietnamese:"dâu", Turkish:"çilek" },

  // Pets (dog/cat/fish/bird in CORE)
  "rabbit": { Spanish:"conejo", French:"lapin", German:"hase", Italian:"coniglio", Portuguese:"coelho", "Portuguese (Brazil)":"coelho", Russian:"кролик", "Chinese (Mandarin)":"兔子", "Chinese (Cantonese)":"兔仔", Japanese:"うさぎ", Korean:"토끼", Hebrew:"ארנב", Arabic:"أرنب", Hindi:"खरगोश", Vietnamese:"thỏ", Turkish:"tavşan" },

  // Food
  "bread":  { Spanish:"pan", French:"pain", German:"brot", Italian:"pane", Portuguese:"pão", "Portuguese (Brazil)":"pão", Russian:"хлеб", "Chinese (Mandarin)":"面包", "Chinese (Cantonese)":"麵包", Japanese:"パン", Korean:"빵", Hebrew:"לחם", Arabic:"خبز", Hindi:"रोटी", Vietnamese:"bánh mì", Turkish:"ekmek" },
  "cheese": { Spanish:"queso", French:"fromage", German:"käse", Italian:"formaggio", Portuguese:"queijo", "Portuguese (Brazil)":"queijo", Russian:"сыр", "Chinese (Mandarin)":"奶酪", "Chinese (Cantonese)":"芝士", Japanese:"チーズ", Korean:"치즈", Hebrew:"גבינה", Arabic:"جبن", Hindi:"पनीर", Vietnamese:"phô mai", Turkish:"peynir" },
  "egg":    { Spanish:"huevo", French:"œuf", German:"ei", Italian:"uovo", Portuguese:"ovo", "Portuguese (Brazil)":"ovo", Russian:"яйцо", "Chinese (Mandarin)":"蛋", "Chinese (Cantonese)":"蛋", Japanese:"たまご", Korean:"달걀", Hebrew:"ביצה", Arabic:"بيضة", Hindi:"अंडा", Vietnamese:"trứng", Turkish:"yumurta" },

  // Body
  "eye":   { Spanish:"ojo", French:"œil", German:"auge", Italian:"occhio", Portuguese:"olho", "Portuguese (Brazil)":"olho", Russian:"глаз", "Chinese (Mandarin)":"眼睛", "Chinese (Cantonese)":"眼", Japanese:"め", Korean:"눈", Hebrew:"עין", Arabic:"عين", Hindi:"आँख", Vietnamese:"mắt", Turkish:"göz" },
  "nose":  { Spanish:"nariz", French:"nez", German:"nase", Italian:"naso", Portuguese:"nariz", "Portuguese (Brazil)":"nariz", Russian:"нос", "Chinese (Mandarin)":"鼻子", "Chinese (Cantonese)":"鼻", Japanese:"はな", Korean:"코", Hebrew:"אף", Arabic:"أنف", Hindi:"नाक", Vietnamese:"mũi", Turkish:"burun" },
  "mouth": { Spanish:"boca", French:"bouche", German:"mund", Italian:"bocca", Portuguese:"boca", "Portuguese (Brazil)":"boca", Russian:"рот", "Chinese (Mandarin)":"嘴", "Chinese (Cantonese)":"口", Japanese:"くち", Korean:"입", Hebrew:"פה", Arabic:"فم", Hindi:"मुँह", Vietnamese:"miệng", Turkish:"ağız" },
  "hand":  { Spanish:"mano", French:"main", German:"hand", Italian:"mano", Portuguese:"mão", "Portuguese (Brazil)":"mão", Russian:"рука", "Chinese (Mandarin)":"手", "Chinese (Cantonese)":"手", Japanese:"て", Korean:"손", Hebrew:"יד", Arabic:"يد", Hindi:"हाथ", Vietnamese:"tay", Turkish:"el" },
  "foot":  { Spanish:"pie", French:"pied", German:"fuß", Italian:"piede", Portuguese:"pé", "Portuguese (Brazil)":"pé", Russian:"нога", "Chinese (Mandarin)":"脚", "Chinese (Cantonese)":"腳", Japanese:"あし", Korean:"발", Hebrew:"רגל", Arabic:"قدم", Hindi:"पैर", Vietnamese:"chân", Turkish:"ayak" },

  // Colors
  "red":    { Spanish:"rojo", French:"rouge", German:"rot", Italian:"rosso", Portuguese:"vermelho", "Portuguese (Brazil)":"vermelho", Russian:"красный", "Chinese (Mandarin)":"红", "Chinese (Cantonese)":"紅", Japanese:"あか", Korean:"빨강", Hebrew:"אדום", Arabic:"أحمر", Hindi:"लाल", Vietnamese:"đỏ", Turkish:"kırmızı" },
  "blue":   { Spanish:"azul", French:"bleu", German:"blau", Italian:"blu", Portuguese:"azul", "Portuguese (Brazil)":"azul", Russian:"синий", "Chinese (Mandarin)":"蓝", "Chinese (Cantonese)":"藍", Japanese:"あお", Korean:"파랑", Hebrew:"כחול", Arabic:"أزرق", Hindi:"नीला", Vietnamese:"xanh", Turkish:"mavi" },
  "yellow": { Spanish:"amarillo", French:"jaune", German:"gelb", Italian:"giallo", Portuguese:"amarelo", "Portuguese (Brazil)":"amarelo", Russian:"жёлтый", "Chinese (Mandarin)":"黄", "Chinese (Cantonese)":"黃", Japanese:"きいろ", Korean:"노랑", Hebrew:"צהוב", Arabic:"أصفر", Hindi:"पीला", Vietnamese:"vàng", Turkish:"sarı" },
  "green":  { Spanish:"verde", French:"vert", German:"grün", Italian:"verde", Portuguese:"verde", "Portuguese (Brazil)":"verde", Russian:"зелёный", "Chinese (Mandarin)":"绿", "Chinese (Cantonese)":"綠", Japanese:"みどり", Korean:"초록", Hebrew:"ירוק", Arabic:"أخضر", Hindi:"हरा", Vietnamese:"xanh lá", Turkish:"yeşil" },
  "pink":   { Spanish:"rosa", French:"rose", German:"rosa", Italian:"rosa", Portuguese:"rosa", "Portuguese (Brazil)":"rosa", Russian:"розовый", "Chinese (Mandarin)":"粉红", "Chinese (Cantonese)":"粉紅", Japanese:"ピンク", Korean:"분홍", Hebrew:"ורוד", Arabic:"وردي", Hindi:"गुलाबी", Vietnamese:"hồng", Turkish:"pembe" },

  // Wild animals
  "lion":    { Spanish:"león", French:"lion", German:"löwe", Italian:"leone", Portuguese:"leão", "Portuguese (Brazil)":"leão", Russian:"лев", "Chinese (Mandarin)":"狮子", "Chinese (Cantonese)":"獅子", Japanese:"ライオン", Korean:"사자", Hebrew:"אריה", Arabic:"أسد", Hindi:"शेर", Vietnamese:"sư tử", Turkish:"aslan" },
  "tiger":   { Spanish:"tigre", French:"tigre", German:"tiger", Italian:"tigre", Portuguese:"tigre", "Portuguese (Brazil)":"tigre", Russian:"тигр", "Chinese (Mandarin)":"老虎", "Chinese (Cantonese)":"老虎", Japanese:"とら", Korean:"호랑이", Hebrew:"טיגריס", Arabic:"نمر", Hindi:"बाघ", Vietnamese:"hổ", Turkish:"kaplan" },
  "bear":    { Spanish:"oso", French:"ours", German:"bär", Italian:"orso", Portuguese:"urso", "Portuguese (Brazil)":"urso", Russian:"медведь", "Chinese (Mandarin)":"熊", "Chinese (Cantonese)":"熊", Japanese:"くま", Korean:"곰", Hebrew:"דוב", Arabic:"دب", Hindi:"भालू", Vietnamese:"gấu", Turkish:"ayı" },
  "elephant":{ Spanish:"elefante", French:"éléphant", German:"elefant", Italian:"elefante", Portuguese:"elefante", "Portuguese (Brazil)":"elefante", Russian:"слон", "Chinese (Mandarin)":"大象", "Chinese (Cantonese)":"大象", Japanese:"ぞう", Korean:"코끼리", Hebrew:"פיל", Arabic:"فيل", Hindi:"हाथी", Vietnamese:"voi", Turkish:"fil" },
  "monkey":  { Spanish:"mono", French:"singe", German:"affe", Italian:"scimmia", Portuguese:"macaco", "Portuguese (Brazil)":"macaco", Russian:"обезьяна", "Chinese (Mandarin)":"猴子", "Chinese (Cantonese)":"馬騮", Japanese:"さる", Korean:"원숭이", Hebrew:"קוף", Arabic:"قرد", Hindi:"बंदर", Vietnamese:"khỉ", Turkish:"maymun" },

  // Vehicles (car in CORE)
  "bus":      { Spanish:"autobús", French:"bus", German:"bus", Italian:"autobus", Portuguese:"ônibus", "Portuguese (Brazil)":"ônibus", Russian:"автобус", "Chinese (Mandarin)":"公交车", "Chinese (Cantonese)":"巴士", Japanese:"バス", Korean:"버스", Hebrew:"אוטובוס", Arabic:"حافلة", Hindi:"बस", Vietnamese:"xe buýt", Turkish:"otobüs" },
  "train":    { Spanish:"tren", French:"train", German:"zug", Italian:"treno", Portuguese:"trem", "Portuguese (Brazil)":"trem", Russian:"поезд", "Chinese (Mandarin)":"火车", "Chinese (Cantonese)":"火車", Japanese:"でんしゃ", Korean:"기차", Hebrew:"רכבת", Arabic:"قطار", Hindi:"ट्रेन", Vietnamese:"tàu hỏa", Turkish:"tren" },
  "airplane": { Spanish:"avión", French:"avion", German:"flugzeug", Italian:"aereo", Portuguese:"avião", "Portuguese (Brazil)":"avião", Russian:"самолёт", "Chinese (Mandarin)":"飞机", "Chinese (Cantonese)":"飛機", Japanese:"ひこうき", Korean:"비행기", Hebrew:"מטוס", Arabic:"طائرة", Hindi:"हवाई जहाज", Vietnamese:"máy bay", Turkish:"uçak" },
  "boat":     { Spanish:"barco", French:"bateau", German:"boot", Italian:"barca", Portuguese:"barco", "Portuguese (Brazil)":"barco", Russian:"лодка", "Chinese (Mandarin)":"船", "Chinese (Cantonese)":"船", Japanese:"ふね", Korean:"배", Hebrew:"סירה", Arabic:"قارب", Hindi:"नाव", Vietnamese:"thuyền", Turkish:"tekne" },

  // Home, weather, sea-animals, shapes, clothing, nature, insects, toys,
  // actions, feelings — translations coming in v2. For now, English fallback.
  // All later sets (instruments, professions, space, etc.) are English-only.
};

// ── KNOWLEDGE SETS (aligned with word sets) ──────────────────────────────────
// Each set has 5 cards paralleling the vocabulary theme.

export const KNOWLEDGE_SETS = [
  { id: "k-family", name: "family", items: [
    { id:"mother",      title:"mother",   fact:"A mother grows a baby in her belly", emoji:"👩" },
    { id:"father",      title:"father",   fact:"A father helps care for the family", emoji:"👨" },
    { id:"baby-fact",   title:"baby",     fact:"Babies are born knowing how to cry", emoji:"👶" },
    { id:"sibling",     title:"sibling",  fact:"Brothers and sisters share parents", emoji:"👧" },
    { id:"twins",       title:"twins",    fact:"Twins can look exactly alike", emoji:"👯" },
  ]},
  { id: "k-family-extended", name: "grandparents", items: [
    { id:"grandma-fact", title:"grandma", fact:"Grandma is your mother's or father's mother", emoji:"👵" },
    { id:"grandpa-fact", title:"grandpa", fact:"Grandpa tells stories from long ago", emoji:"👴" },
    { id:"family-tree",  title:"family tree", fact:"Everyone in a family is connected", emoji:"🌳" },
    { id:"ancestor",     title:"ancestor", fact:"Ancestors lived a long time ago", emoji:"🕰️" },
    { id:"relative",     title:"relative", fact:"A relative is part of your family", emoji:"🫂" },
  ]},
  { id: "k-farm-animals", name: "farm animals", items: [
    { id:"cow-fact",     title:"cow",     fact:"Cows give us milk every day", emoji:"🐄" },
    { id:"chicken-fact", title:"chicken", fact:"Chickens lay eggs in a nest", emoji:"🐔" },
    { id:"duck-fact",    title:"duck",    fact:"Ducks have special waterproof feathers", emoji:"🦆" },
    { id:"sheep-fact",   title:"sheep",   fact:"Sheep give us warm wool", emoji:"🐑" },
    { id:"pig-fact",     title:"pig",     fact:"Pigs are very smart animals", emoji:"🐷" },
  ]},
  { id: "k-fruits", name: "fruits", items: [
    { id:"apple-fact",      title:"apple",      fact:"Apples grow on trees in orchards", emoji:"🍎" },
    { id:"banana-fact",     title:"banana",     fact:"Bananas grow in big bunches", emoji:"🍌" },
    { id:"grape-fact",      title:"grape",      fact:"Grapes grow on climbing vines", emoji:"🍇" },
    { id:"orange-fact",     title:"orange",     fact:"Oranges are full of vitamin C", emoji:"🍊" },
    { id:"strawberry-fact", title:"strawberry", fact:"Strawberries have seeds on the outside", emoji:"🍓" },
  ]},
  { id: "k-pets", name: "pets", items: [
    { id:"dog-fact",    title:"dog",    fact:"Dogs can smell a million times better than us", emoji:"🐶" },
    { id:"cat-fact",    title:"cat",    fact:"Cats purr when they feel happy", emoji:"🐱" },
    { id:"rabbit-fact", title:"rabbit", fact:"Rabbits can hop very fast", emoji:"🐰" },
    { id:"goldfish",    title:"goldfish", fact:"Goldfish have better memory than we thought", emoji:"🐠" },
    { id:"parrot",      title:"parrot", fact:"Parrots can copy human words", emoji:"🦜" },
  ]},
  { id: "k-food", name: "food", items: [
    { id:"bread-fact",  title:"bread",  fact:"Bread is made from wheat flour", emoji:"🍞" },
    { id:"cheese-fact", title:"cheese", fact:"Cheese is made from milk", emoji:"🧀" },
    { id:"water-fact",  title:"water",  fact:"Our bodies are mostly water", emoji:"💧" },
    { id:"honey",       title:"honey",  fact:"Bees make honey from flower nectar", emoji:"🍯" },
    { id:"rice",        title:"rice",   fact:"Rice feeds half the world every day", emoji:"🍚" },
  ]},
  { id: "k-body", name: "body", items: [
    { id:"eye-fact",   title:"eye",    fact:"Your eyes see light and color", emoji:"👁️" },
    { id:"heart-fact", title:"heart",  fact:"The heart pumps blood all day", emoji:"❤️" },
    { id:"brain",      title:"brain",  fact:"The brain helps you think and learn", emoji:"🧠" },
    { id:"bones",      title:"bones",  fact:"Bones give your body shape and strength", emoji:"🦴" },
    { id:"lungs",      title:"lungs",  fact:"Lungs let you breathe in fresh air", emoji:"🫁" },
  ]},
  { id: "k-colors", name: "colors", items: [
    { id:"rainbow-fact", title:"rainbow", fact:"Rainbows have seven different colors", emoji:"🌈" },
    { id:"red-fact",     title:"red",     fact:"Red is the color of strawberries", emoji:"🔴" },
    { id:"blue-fact",    title:"blue",    fact:"The sky looks blue on sunny days", emoji:"🔵" },
    { id:"mixing",       title:"mixing",  fact:"Red and yellow mix into orange", emoji:"🎨" },
    { id:"chameleon",    title:"chameleon", fact:"Chameleons change their color", emoji:"🦎" },
  ]},
  { id: "k-wild-animals", name: "wild animals", items: [
    { id:"lion-fact",     title:"lion",     fact:"Lions live together in big groups", emoji:"🦁" },
    { id:"tiger-fact",    title:"tiger",    fact:"Every tiger has unique stripes", emoji:"🐅" },
    { id:"bear-fact",     title:"bear",     fact:"Bears sleep all winter long", emoji:"🐻" },
    { id:"elephant-fact", title:"elephant", fact:"Elephants never forget their family", emoji:"🐘" },
    { id:"monkey-fact",   title:"monkey",   fact:"Monkeys use tools just like people", emoji:"🐵" },
  ]},
  { id: "k-vehicles", name: "vehicles", items: [
    { id:"car-fact",     title:"car",     fact:"Cars roll on four rubber wheels", emoji:"🚗" },
    { id:"train-fact",   title:"train",   fact:"Trains run on long metal tracks", emoji:"🚂" },
    { id:"plane-fact",   title:"airplane",fact:"Airplanes fly high above the clouds", emoji:"✈️" },
    { id:"boat-fact",    title:"boat",    fact:"Boats float on rivers and oceans", emoji:"⛵" },
    { id:"bicycle",      title:"bicycle", fact:"You can power a bicycle with your legs", emoji:"🚲" },
  ]},

  // Month 2 knowledge
  { id: "k-home", name: "home", items: [
    { id:"house-fact",  title:"house",  fact:"Houses keep us warm and dry", emoji:"🏠" },
    { id:"roof",        title:"roof",   fact:"Roofs protect us from the rain", emoji:"🏡" },
    { id:"kitchen",     title:"kitchen",fact:"Kitchens are where we make food", emoji:"🍳" },
    { id:"bed-fact",    title:"bed",    fact:"Beds help us rest and grow", emoji:"🛏️" },
    { id:"garden",      title:"garden", fact:"Gardens grow flowers and food", emoji:"🌻" },
  ]},
  { id: "k-weather", name: "weather", items: [
    { id:"sun-fact",   title:"sun",   fact:"The sun gives our planet light and warmth", emoji:"☀️" },
    { id:"rain-fact",  title:"rain",  fact:"Rain helps plants grow big and strong", emoji:"🌧️" },
    { id:"snow-fact",  title:"snow",  fact:"Every snowflake is a unique shape", emoji:"❄️" },
    { id:"cloud-fact", title:"cloud", fact:"Clouds are made of tiny water drops", emoji:"☁️" },
    { id:"storm",      title:"storm", fact:"Lightning moves at the speed of light", emoji:"⛈️" },
  ]},
  { id: "k-sea-animals", name: "sea animals", items: [
    { id:"whale-fact",   title:"whale",   fact:"Whales are the biggest animals on Earth", emoji:"🐋" },
    { id:"dolphin-fact", title:"dolphin", fact:"Dolphins talk to each other underwater", emoji:"🐬" },
    { id:"octopus-fact", title:"octopus", fact:"Octopuses have three beating hearts", emoji:"🐙" },
    { id:"shark-fact",   title:"shark",   fact:"Sharks have existed longer than trees", emoji:"🦈" },
    { id:"jellyfish",    title:"jellyfish",fact:"Jellyfish have no brain and no heart", emoji:"🎐" },
  ]},
  { id: "k-shapes", name: "shapes", items: [
    { id:"circle-fact",  title:"circle",  fact:"A circle has no beginning or end", emoji:"⭕" },
    { id:"square-fact",  title:"square",  fact:"A square has four equal sides", emoji:"⬜" },
    { id:"triangle-fact",title:"triangle",fact:"Triangles are the strongest shape", emoji:"🔺" },
    { id:"hexagon",      title:"hexagon", fact:"Bees build hexagons in their hives", emoji:"🔶" },
    { id:"sphere",       title:"sphere",  fact:"A sphere is a 3D circle like a ball", emoji:"⚽" },
  ]},
  { id: "k-clothing", name: "clothing", items: [
    { id:"shirt-fact", title:"shirt",  fact:"Shirts keep our top half warm", emoji:"👕" },
    { id:"shoes-fact", title:"shoes",  fact:"Shoes protect our feet while walking", emoji:"👟" },
    { id:"coat",       title:"coat",   fact:"Coats keep us warm in the cold", emoji:"🧥" },
    { id:"hat-fact",   title:"hat",    fact:"Hats shield our heads from the sun", emoji:"🎩" },
    { id:"mittens",    title:"mittens",fact:"Mittens keep all your fingers cozy", emoji:"🧤" },
  ]},
  { id: "k-nature", name: "nature", items: [
    { id:"tree-fact",   title:"tree",   fact:"Trees make the air we breathe", emoji:"🌳" },
    { id:"flower-fact", title:"flower", fact:"Flowers feed busy bees and butterflies", emoji:"🌸" },
    { id:"mountain-fact", title:"mountain", fact:"Mountains rise up over millions of years", emoji:"⛰️" },
    { id:"river-fact",  title:"river",  fact:"Rivers flow all the way to the sea", emoji:"🏞️" },
    { id:"cactus",      title:"cactus", fact:"A cactus stores water inside itself", emoji:"🌵" },
  ]},
  { id: "k-insects", name: "insects", items: [
    { id:"butterfly-fact", title:"butterfly", fact:"Butterflies start life as caterpillars", emoji:"🦋" },
    { id:"bee-fact",       title:"bee",       fact:"Bees help flowers grow into fruit", emoji:"🐝" },
    { id:"ant-fact",       title:"ant",       fact:"Ants can lift fifty times their weight", emoji:"🐜" },
    { id:"ladybug-fact",   title:"ladybug",   fact:"Ladybugs eat bugs that harm plants", emoji:"🐞" },
    { id:"firefly",        title:"firefly",   fact:"Fireflies glow in the dark at night", emoji:"✨" },
  ]},
  { id: "k-toys", name: "toys", items: [
    { id:"ball-fact",  title:"ball",  fact:"Balls bounce because of stored energy", emoji:"⚽" },
    { id:"doll-fact",  title:"doll",  fact:"Dolls have been toys for thousands of years", emoji:"🪆" },
    { id:"blocks-fact",title:"blocks",fact:"Blocks help us build our imagination", emoji:"🧱" },
    { id:"puzzle-fact",title:"puzzle",fact:"Puzzles teach your brain new tricks", emoji:"🧩" },
    { id:"kite",       title:"kite",  fact:"Kites fly by catching the wind", emoji:"🪁" },
  ]},
  { id: "k-actions", name: "actions", items: [
    { id:"run-fact",   title:"running",   fact:"Running makes your heart strong", emoji:"🏃" },
    { id:"jump-fact",  title:"jumping",   fact:"Jumping builds strong leg muscles", emoji:"🤸" },
    { id:"swim",       title:"swimming",  fact:"Swimming uses your whole body", emoji:"🏊" },
    { id:"dance",      title:"dancing",   fact:"Dancing is joyful movement to music", emoji:"💃" },
    { id:"sleep-fact", title:"sleeping",  fact:"Sleeping is when your body repairs", emoji:"😴" },
  ]},
  { id: "k-feelings", name: "feelings", items: [
    { id:"happy-fact", title:"happy",  fact:"Happy faces make others feel good", emoji:"😊" },
    { id:"sad-fact",   title:"sad",    fact:"It's okay to feel sad sometimes", emoji:"😢" },
    { id:"love",       title:"love",   fact:"Love is a feeling shared between people", emoji:"💖" },
    { id:"calm",       title:"calm",   fact:"Deep breaths help you feel calm", emoji:"🧘" },
    { id:"brave",      title:"brave",  fact:"Brave means doing it even when scared", emoji:"🦸" },
  ]},

  // Month 3 knowledge
  { id: "k-instruments", name: "instruments", items: [
    { id:"piano",  title:"piano",  fact:"Pianos have 88 black and white keys", emoji:"🎹" },
    { id:"guitar", title:"guitar", fact:"Guitars can have 6 or 12 strings", emoji:"🎸" },
    { id:"drum",   title:"drum",   fact:"Drums are among the oldest instruments", emoji:"🥁" },
    { id:"violin", title:"violin", fact:"Violins are played with a horsehair bow", emoji:"🎻" },
    { id:"flute",  title:"flute",  fact:"Flutes make music by blowing air", emoji:"🪈" },
  ]},
  { id: "k-professions", name: "professions", items: [
    { id:"doctor",    title:"doctor",    fact:"Doctors help keep our bodies healthy", emoji:"👩‍⚕️" },
    { id:"teacher",   title:"teacher",   fact:"Teachers help us learn new things", emoji:"👩‍🏫" },
    { id:"scientist", title:"scientist", fact:"Scientists explore how the world works", emoji:"👩‍🔬" },
    { id:"farmer",    title:"farmer",    fact:"Farmers grow all our food", emoji:"🧑‍🌾" },
    { id:"astronaut", title:"astronaut", fact:"Astronauts travel to outer space", emoji:"👨‍🚀" },
  ]},
  { id: "k-space", name: "space", items: [
    { id:"planet-fact", title:"planet", fact:"There are eight planets in our solar system", emoji:"🪐" },
    { id:"moon-fact",   title:"moon",   fact:"The moon orbits Earth once each month", emoji:"🌙" },
    { id:"rocket-fact", title:"rocket", fact:"Rockets need powerful engines to reach space", emoji:"🚀" },
    { id:"galaxy-fact", title:"galaxy", fact:"Our galaxy has billions of stars", emoji:"🌌" },
    { id:"black-hole",  title:"black hole", fact:"Black holes pull in everything nearby", emoji:"⚫" },
  ]},
  { id: "k-buildings", name: "buildings", items: [
    { id:"school-fact", title:"school",   fact:"Schools are where children grow their minds", emoji:"🏫" },
    { id:"hospital",    title:"hospital", fact:"Hospitals help people when they're sick", emoji:"🏥" },
    { id:"library",     title:"library",  fact:"Libraries hold thousands of stories", emoji:"📚" },
    { id:"museum",      title:"museum",   fact:"Museums preserve the world's treasures", emoji:"🏛️" },
    { id:"castle",      title:"castle",   fact:"Castles were built for protection long ago", emoji:"🏰" },
  ]},
  { id: "k-opposites", name: "opposites", items: [
    { id:"big-small",  title:"size",      fact:"An elephant is big, a mouse is small", emoji:"🐘" },
    { id:"hot-cold",   title:"temperature", fact:"Fire is hot and ice is cold", emoji:"🔥" },
    { id:"fast-slow",  title:"speed",     fact:"A cheetah is fast, a turtle is slow", emoji:"🐆" },
    { id:"light-dark", title:"light",     fact:"Day is light and night is dark", emoji:"🌞" },
    { id:"up-down",    title:"direction", fact:"Birds fly up, apples fall down", emoji:"⬆️" },
  ]},
  { id: "k-countries", name: "countries", items: [
    { id:"japan-fact",   title:"japan",   fact:"Japan has many islands in the sea", emoji:"🗾" },
    { id:"brazil-fact",  title:"brazil",  fact:"Brazil is home to the Amazon rainforest", emoji:"🌴" },
    { id:"france-fact",  title:"france",  fact:"France made the Eiffel Tower a century ago", emoji:"🗼" },
    { id:"kenya-fact",   title:"kenya",   fact:"Kenya has amazing animals on its savannas", emoji:"🦒" },
    { id:"antarctica",   title:"antarctica", fact:"Antarctica is the coldest place on Earth", emoji:"🧊" },
  ]},
  { id: "k-science", name: "science", items: [
    { id:"atom",      title:"atom",     fact:"Atoms are tiny building blocks of everything", emoji:"⚛️" },
    { id:"gravity",   title:"gravity",  fact:"Gravity pulls objects toward the Earth", emoji:"🍎" },
    { id:"energy",    title:"energy",   fact:"Energy can change from one form to another", emoji:"⚡" },
    { id:"magnet",    title:"magnet",   fact:"Magnets attract metals like iron", emoji:"🧲" },
    { id:"electricity", title:"electricity", fact:"Electricity powers our homes and phones", emoji:"💡" },
  ]},
  { id: "k-emotions-advanced", name: "feelings 2", items: [
    { id:"curious",   title:"curious",   fact:"Curious people ask great questions", emoji:"🤔" },
    { id:"excited",   title:"excited",   fact:"Excited means ready for something fun", emoji:"🤩" },
    { id:"peaceful",  title:"peaceful",  fact:"Peaceful means feeling calm and safe", emoji:"🕊️" },
    { id:"grateful",  title:"grateful",  fact:"Grateful means thankful for what you have", emoji:"🙏" },
    { id:"empathy",   title:"empathy",   fact:"Empathy means feeling what others feel", emoji:"💞" },
  ]},
  { id: "k-geography", name: "geography", items: [
    { id:"ocean",    title:"ocean",    fact:"Oceans cover most of our planet's surface", emoji:"🌊" },
    { id:"desert",   title:"desert",   fact:"Deserts get very little rain each year", emoji:"🏜️" },
    { id:"forest",   title:"forest",   fact:"Forests are home to millions of creatures", emoji:"🌲" },
    { id:"island",   title:"island",   fact:"Islands are lands surrounded by water", emoji:"🏝️" },
    { id:"volcano",  title:"volcano",  fact:"Volcanoes are mountains that erupt lava", emoji:"🌋" },
  ]},
  { id: "k-history", name: "history", items: [
    { id:"pyramid",   title:"pyramid",   fact:"Pyramids were built by ancient Egyptians", emoji:"🔺" },
    { id:"dinosaur",  title:"dinosaur",  fact:"Dinosaurs lived millions of years ago", emoji:"🦕" },
    { id:"knight",    title:"knight",    fact:"Knights wore armor to stay safe in battle", emoji:"⚔️" },
    { id:"explorer",  title:"explorer",  fact:"Explorers discovered new lands and peoples", emoji:"🧭" },
    { id:"invention", title:"invention", fact:"The wheel was invented thousands of years ago", emoji:"⚙️" },
  ]},
];

// ── COUPLETS (month 2+) ──────────────────────────────────────────────────────
// Short 2-word phrases combining words kids already know.
export const COUPLET_SETS = [
  { id: "cp-family", name: "family phrases", items: [
    { word: "my mama",    emoji: "👩" },
    { word: "big sister", emoji: "👧" },
    { word: "little baby",emoji: "👶" },
    { word: "my dada",    emoji: "👨" },
    { word: "kind grandma",emoji: "👵" },
  ]},
  { id: "cp-animals", name: "animal phrases", items: [
    { word: "fluffy cat",  emoji: "🐱" },
    { word: "happy dog",   emoji: "🐶" },
    { word: "big elephant",emoji: "🐘" },
    { word: "little mouse",emoji: "🐭" },
    { word: "brave lion",  emoji: "🦁" },
  ]},
  { id: "cp-food", name: "food phrases", items: [
    { word: "red apple",  emoji: "🍎" },
    { word: "cold milk",  emoji: "🥛" },
    { word: "sweet banana",emoji: "🍌" },
    { word: "warm bread", emoji: "🍞" },
    { word: "yummy cheese",emoji: "🧀" },
  ]},
  { id: "cp-actions", name: "action phrases", items: [
    { word: "run fast",  emoji: "🏃" },
    { word: "jump high", emoji: "🤸" },
    { word: "sleep well",emoji: "😴" },
    { word: "eat slowly",emoji: "🍽️" },
    { word: "walk quietly",emoji: "🚶" },
  ]},
  { id: "cp-colors", name: "color phrases", items: [
    { word: "blue sky",   emoji: "🌤️" },
    { word: "green grass",emoji: "🌱" },
    { word: "red flower", emoji: "🌹" },
    { word: "yellow sun", emoji: "☀️" },
    { word: "pink heart", emoji: "💗" },
  ]},
  { id: "cp-feelings", name: "feeling phrases", items: [
    { word: "feel happy",  emoji: "😊" },
    { word: "very tired",  emoji: "😪" },
    { word: "really excited",emoji: "🤩" },
    { word: "so curious",  emoji: "🤔" },
    { word: "truly brave", emoji: "🦸" },
  ]},
];

// ── SENTENCES (month 3+) ─────────────────────────────────────────────────────
// Short 3-word simple sentences.
export const SENTENCE_SETS = [
  { id: "st-daily", name: "daily life", items: [
    { word: "mama loves me",   emoji: "💕" },
    { word: "i drink milk",    emoji: "🥛" },
    { word: "we eat breakfast",emoji: "🍳" },
    { word: "i see you",       emoji: "👁️" },
    { word: "we play ball",    emoji: "⚽" },
  ]},
  { id: "st-world", name: "the world", items: [
    { word: "sun is bright",  emoji: "☀️" },
    { word: "moon is round",  emoji: "🌕" },
    { word: "birds can fly",  emoji: "🐦" },
    { word: "fish can swim",  emoji: "🐠" },
    { word: "trees are tall", emoji: "🌳" },
  ]},
  { id: "st-feelings", name: "feelings", items: [
    { word: "i feel happy",    emoji: "😊" },
    { word: "you are kind",    emoji: "💗" },
    { word: "we are family",   emoji: "👨‍👩‍👧" },
    { word: "love is big",     emoji: "❤️" },
    { word: "sharing is caring",emoji: "🤝" },
  ]},
  { id: "st-animals", name: "animals do", items: [
    { word: "cats say meow",   emoji: "🐱" },
    { word: "dogs say woof",   emoji: "🐶" },
    { word: "cows eat grass",  emoji: "🐄" },
    { word: "bees make honey", emoji: "🍯" },
    { word: "lions are strong",emoji: "🦁" },
  ]},
  { id: "st-actions", name: "actions", items: [
    { word: "i can jump",   emoji: "🤸" },
    { word: "i can run",    emoji: "🏃" },
    { word: "i read books", emoji: "📖" },
    { word: "we sing songs",emoji: "🎵" },
    { word: "you help me",  emoji: "🫂" },
  ]},
  { id: "st-bedtime", name: "bedtime", items: [
    { word: "night night moon",emoji: "🌙" },
    { word: "goodnight sweet baby",emoji: "👶" },
    { word: "dream big dreams",emoji: "💭" },
    { word: "i love you",  emoji: "❤️" },
    { word: "sleepy tired eyes",emoji: "😴" },
  ]},
];

// ── SAMPLE BOOK (month 4+) ───────────────────────────────────────────────────
// A 5-page illustrated story with 3-5 word sentences per page.
// Page emoji is shown large, sentence below in big red text.

export const SAMPLE_BOOK = {
  id: "book-first-day",
  title: "A Day at the Park",
  pages: [
    { text: "we walk to park", emoji: "🌳" },
    { text: "i see a puppy",   emoji: "🐶" },
    { text: "we feed the ducks",emoji: "🦆" },
    { text: "mama pushes swing high",emoji: "🎠" },
    { text: "happy happy happy day",emoji: "😊" },
  ],
  // The "teaching set" is 5 single-word flashcards that introduce the
  // new vocabulary from the book. These get shown as flashcards during the
  // single-word reading sessions on alternate days.
  teachingWords: [
    { word: "park",   emoji: "🌳" },
    { word: "puppy",  emoji: "🐶" },
    { word: "swing",  emoji: "🎠" },
    { word: "high",   emoji: "⬆️" },
    { word: "feed",   emoji: "🥖" },
  ],
};

// ── KNOWLEDGE SET TRANSLATIONS ───────────────────────────────────────────────
// Translations for the new themed knowledge cards. Indexed by the card's `id`.
// Starting with Day 1 content (family, grandparents, farm-animals = 15 cards)
// across the most-requested languages. More translations to be added over time.

export const KNOWLEDGE_SET_TRANSLATIONS = {
  // ── Family (k-family) ──────────────────────────────────────────────────
  mother: {
    Spanish:{title:"madre",fact:"Una madre lleva al bebé en su vientre"},
    French:{title:"mère",fact:"Une mère porte son bébé dans son ventre"},
    "Portuguese (Brazil)":{title:"mãe",fact:"A mãe carrega o bebê na barriga"},
    "Chinese (Mandarin)":{title:"妈妈",fact:"妈妈在肚子里孕育宝宝"},
    "Chinese (Cantonese)":{title:"媽媽",fact:"媽媽喺肚入面孕育寶寶"},
    Japanese:{title:"お母さん",fact:"お母さんはお腹で赤ちゃんを育てます"},
    Korean:{title:"어머니",fact:"엄마는 뱃속에서 아기를 키워요"},
    "Vietnamese (Northern)":{title:"mẹ",fact:"Mẹ mang em bé trong bụng"},
    "Vietnamese (Southern)":{title:"má",fact:"Má mang em bé trong bụng"},
    Vietnamese:{title:"mẹ",fact:"Mẹ mang em bé trong bụng"},
    Hindi:{title:"माँ",fact:"माँ बच्चे को पेट में रखती है"},
    Arabic:{title:"أم",fact:"الأم تحمل الطفل في بطنها"},
  },
  father: {
    Spanish:{title:"padre",fact:"Un padre ayuda a cuidar a la familia"},
    French:{title:"père",fact:"Un père aide à prendre soin de la famille"},
    "Portuguese (Brazil)":{title:"pai",fact:"O pai ajuda a cuidar da família"},
    "Chinese (Mandarin)":{title:"爸爸",fact:"爸爸帮助照顾家人"},
    "Chinese (Cantonese)":{title:"爸爸",fact:"爸爸幫手照顧屋企人"},
    Japanese:{title:"お父さん",fact:"お父さんは家族を大切に育てます"},
    Korean:{title:"아버지",fact:"아빠는 가족을 돌봐줘요"},
    "Vietnamese (Northern)":{title:"bố",fact:"Bố giúp chăm sóc gia đình"},
    "Vietnamese (Southern)":{title:"ba",fact:"Ba giúp chăm sóc gia đình"},
    Vietnamese:{title:"bố",fact:"Bố giúp chăm sóc gia đình"},
    Hindi:{title:"पिता",fact:"पिता परिवार की देखभाल में मदद करते हैं"},
    Arabic:{title:"أب",fact:"الأب يساعد في رعاية الأسرة"},
  },
  "baby-fact": {
    Spanish:{title:"bebé",fact:"Los bebés nacen sabiendo llorar"},
    French:{title:"bébé",fact:"Les bébés naissent en sachant pleurer"},
    "Portuguese (Brazil)":{title:"bebê",fact:"Bebês nascem sabendo chorar"},
    "Chinese (Mandarin)":{title:"宝宝",fact:"宝宝一出生就会哭"},
    "Chinese (Cantonese)":{title:"BB",fact:"BB一出世就識喊"},
    Japanese:{title:"赤ちゃん",fact:"赤ちゃんは生まれたときから泣けます"},
    Korean:{title:"아기",fact:"아기는 태어날 때부터 울어요"},
    Vietnamese:{title:"em bé",fact:"Em bé sinh ra đã biết khóc"},
    Hindi:{title:"बच्चा",fact:"बच्चे रोना जानते हुए पैदा होते हैं"},
    Arabic:{title:"طفل",fact:"يولد الأطفال وهم يعرفون البكاء"},
  },
  sibling: {
    Spanish:{title:"hermano",fact:"Los hermanos comparten a sus padres"},
    French:{title:"frère",fact:"Les frères et sœurs partagent leurs parents"},
    "Portuguese (Brazil)":{title:"irmão",fact:"Irmãos compartilham os mesmos pais"},
    "Chinese (Mandarin)":{title:"兄弟姐妹",fact:"兄弟姐妹共有同样的父母"},
    "Chinese (Cantonese)":{title:"兄弟姊妹",fact:"兄弟姊妹有同一對父母"},
    Japanese:{title:"きょうだい",fact:"きょうだいは同じお父さんお母さんの子です"},
    Korean:{title:"형제",fact:"형제는 같은 부모를 가져요"},
    Vietnamese:{title:"anh chị em",fact:"Anh chị em có chung cha mẹ"},
    Hindi:{title:"भाई-बहन",fact:"भाई-बहन के माता-पिता एक होते हैं"},
  },
  twins: {
    Spanish:{title:"gemelos",fact:"Los gemelos pueden ser iguales"},
    French:{title:"jumeaux",fact:"Les jumeaux peuvent se ressembler"},
    "Portuguese (Brazil)":{title:"gêmeos",fact:"Gêmeos podem ser idênticos"},
    "Chinese (Mandarin)":{title:"双胞胎",fact:"双胞胎长得可以一模一样"},
    "Chinese (Cantonese)":{title:"孖仔孖女",fact:"孖仔孖女可以生得一模一樣"},
    Japanese:{title:"双子",fact:"双子はそっくりのこともあります"},
    Korean:{title:"쌍둥이",fact:"쌍둥이는 똑같이 생길 수 있어요"},
    Vietnamese:{title:"cặp sinh đôi",fact:"Cặp sinh đôi có thể giống hệt nhau"},
    Hindi:{title:"जुड़वाँ",fact:"जुड़वाँ बच्चे एक जैसे दिख सकते हैं"},
  },

  // ── Grandparents (k-family-extended) ────────────────────────────────────
  "grandma-fact": {
    Spanish:{title:"abuela",fact:"La abuela es la mamá de tu mamá o papá"},
    French:{title:"grand-mère",fact:"Grand-mère est la maman de ta maman ou de ton papa"},
    "Portuguese (Brazil)":{title:"vovó",fact:"A vovó é a mãe da sua mãe ou do seu pai"},
    "Chinese (Mandarin)":{title:"奶奶",fact:"奶奶是爸爸或妈妈的妈妈"},
    "Chinese (Cantonese)":{title:"嫲嫲",fact:"嫲嫲或婆婆係爸爸媽媽嘅媽媽"},
    Japanese:{title:"おばあちゃん",fact:"おばあちゃんはお父さんかお母さんのお母さんです"},
    Korean:{title:"할머니",fact:"할머니는 엄마나 아빠의 엄마예요"},
    Vietnamese:{title:"bà",fact:"Bà là mẹ của mẹ hoặc bố bạn"},
    Hindi:{title:"दादी",fact:"दादी आपके पापा या माँ की माँ होती हैं"},
  },
  "grandpa-fact": {
    Spanish:{title:"abuelo",fact:"El abuelo cuenta historias de hace mucho tiempo"},
    French:{title:"grand-père",fact:"Grand-père raconte des histoires d'il y a longtemps"},
    "Portuguese (Brazil)":{title:"vovô",fact:"O vovô conta histórias de muito tempo atrás"},
    "Chinese (Mandarin)":{title:"爷爷",fact:"爷爷会讲很久以前的故事"},
    "Chinese (Cantonese)":{title:"爺爺",fact:"爺爺或公公講好耐以前嘅故事"},
    Japanese:{title:"おじいちゃん",fact:"おじいちゃんは昔のお話をしてくれます"},
    Korean:{title:"할아버지",fact:"할아버지는 옛날 이야기를 해주세요"},
    Vietnamese:{title:"ông",fact:"Ông kể những câu chuyện từ ngày xưa"},
    Hindi:{title:"दादा",fact:"दादा पुराने समय की कहानियाँ सुनाते हैं"},
  },
  "family-tree": {
    Spanish:{title:"árbol familiar",fact:"Todos en la familia están conectados"},
    French:{title:"arbre généalogique",fact:"Tout le monde dans la famille est lié"},
    "Portuguese (Brazil)":{title:"árvore genealógica",fact:"Todos na família estão conectados"},
    "Chinese (Mandarin)":{title:"家谱",fact:"家里所有人都有联系"},
    "Chinese (Cantonese)":{title:"族譜",fact:"屋企人全部都有聯繫"},
    Japanese:{title:"家系図",fact:"家族はみんな繋がっています"},
    Korean:{title:"가계도",fact:"가족은 모두 이어져 있어요"},
    Vietnamese:{title:"gia phả",fact:"Mọi người trong gia đình đều gắn kết"},
    Hindi:{title:"वंश वृक्ष",fact:"परिवार में सब आपस में जुड़े हैं"},
  },
  ancestor: {
    Spanish:{title:"antepasado",fact:"Los antepasados vivieron hace mucho tiempo"},
    French:{title:"ancêtre",fact:"Les ancêtres ont vécu il y a longtemps"},
    "Portuguese (Brazil)":{title:"ancestral",fact:"Os ancestrais viveram há muito tempo"},
    "Chinese (Mandarin)":{title:"祖先",fact:"祖先很久以前就生活在这里"},
    "Chinese (Cantonese)":{title:"祖先",fact:"祖先好耐以前住喺度"},
    Japanese:{title:"ご先祖さま",fact:"ご先祖さまは昔に生きていました"},
    Korean:{title:"조상",fact:"조상은 오래전에 살았어요"},
    Vietnamese:{title:"tổ tiên",fact:"Tổ tiên đã sống từ rất lâu"},
    Hindi:{title:"पूर्वज",fact:"पूर्वज बहुत पहले रहते थे"},
  },
  relative: {
    Spanish:{title:"pariente",fact:"Un pariente es parte de tu familia"},
    French:{title:"parent",fact:"Un parent fait partie de ta famille"},
    "Portuguese (Brazil)":{title:"parente",fact:"Um parente faz parte da sua família"},
    "Chinese (Mandarin)":{title:"亲戚",fact:"亲戚是你家族的一员"},
    "Chinese (Cantonese)":{title:"親戚",fact:"親戚係你屋企人嘅一份子"},
    Japanese:{title:"親戚",fact:"親戚は家族の一員です"},
    Korean:{title:"친척",fact:"친척은 가족의 일원이에요"},
    Vietnamese:{title:"họ hàng",fact:"Họ hàng là một phần của gia đình"},
    Hindi:{title:"रिश्तेदार",fact:"रिश्तेदार आपके परिवार का हिस्सा होते हैं"},
  },

  // ── Farm animals (k-farm-animals) ───────────────────────────────────────
  "cow-fact": {
    Spanish:{title:"vaca",fact:"Las vacas nos dan leche cada día"},
    French:{title:"vache",fact:"Les vaches nous donnent du lait chaque jour"},
    "Portuguese (Brazil)":{title:"vaca",fact:"As vacas nos dão leite todos os dias"},
    "Chinese (Mandarin)":{title:"牛",fact:"牛每天给我们产奶"},
    "Chinese (Cantonese)":{title:"牛",fact:"牛每日俾我哋出牛奶"},
    Japanese:{title:"うし",fact:"牛さんは毎日ミルクをくれます"},
    Korean:{title:"소",fact:"소는 매일 우유를 줘요"},
    Vietnamese:{title:"bò",fact:"Bò cho chúng ta sữa mỗi ngày"},
    Hindi:{title:"गाय",fact:"गाय हमें रोज़ दूध देती है"},
  },
  "chicken-fact": {
    Spanish:{title:"gallina",fact:"Las gallinas ponen huevos en un nido"},
    French:{title:"poule",fact:"Les poules pondent des œufs dans un nid"},
    "Portuguese (Brazil)":{title:"galinha",fact:"As galinhas põem ovos no ninho"},
    "Chinese (Mandarin)":{title:"鸡",fact:"鸡在鸟窝里下蛋"},
    "Chinese (Cantonese)":{title:"雞",fact:"雞會喺窩度生蛋"},
    Japanese:{title:"にわとり",fact:"にわとりは巣で卵を産みます"},
    Korean:{title:"닭",fact:"닭은 둥지에 알을 낳아요"},
    Vietnamese:{title:"gà",fact:"Gà đẻ trứng trong ổ"},
    Hindi:{title:"मुर्गी",fact:"मुर्गी घोंसले में अंडे देती है"},
  },
  "duck-fact": {
    Spanish:{title:"pato",fact:"Los patos tienen plumas impermeables"},
    French:{title:"canard",fact:"Les canards ont des plumes imperméables"},
    "Portuguese (Brazil)":{title:"pato",fact:"Os patos têm penas à prova d'água"},
    "Chinese (Mandarin)":{title:"鸭子",fact:"鸭子有防水的羽毛"},
    "Chinese (Cantonese)":{title:"鴨仔",fact:"鴨仔有防水嘅羽毛"},
    Japanese:{title:"あひる",fact:"あひるの羽は水をはじきます"},
    Korean:{title:"오리",fact:"오리는 방수 깃털을 가지고 있어요"},
    Vietnamese:{title:"vịt",fact:"Vịt có lông không thấm nước"},
    Hindi:{title:"बतख",fact:"बतख के पंख पानी में नहीं भीगते"},
  },
  "sheep-fact": {
    Spanish:{title:"oveja",fact:"Las ovejas nos dan lana calentita"},
    French:{title:"mouton",fact:"Les moutons nous donnent de la laine"},
    "Portuguese (Brazil)":{title:"ovelha",fact:"As ovelhas nos dão lã quentinha"},
    "Chinese (Mandarin)":{title:"绵羊",fact:"绵羊给我们温暖的羊毛"},
    "Chinese (Cantonese)":{title:"綿羊",fact:"綿羊俾我哋溫暖嘅羊毛"},
    Japanese:{title:"ひつじ",fact:"ひつじさんは温かい毛をくれます"},
    Korean:{title:"양",fact:"양은 따뜻한 털을 줘요"},
    Vietnamese:{title:"cừu",fact:"Cừu cho chúng ta len ấm"},
    Hindi:{title:"भेड़",fact:"भेड़ हमें गरम ऊन देती है"},
  },
  "pig-fact": {
    Spanish:{title:"cerdo",fact:"Los cerdos son animales muy inteligentes"},
    French:{title:"cochon",fact:"Les cochons sont des animaux très intelligents"},
    "Portuguese (Brazil)":{title:"porco",fact:"Os porcos são animais muito inteligentes"},
    "Chinese (Mandarin)":{title:"猪",fact:"猪是很聪明的动物"},
    "Chinese (Cantonese)":{title:"豬",fact:"豬仔係好聰明嘅動物"},
    Japanese:{title:"ぶた",fact:"ぶたさんはとても賢い動物です"},
    Korean:{title:"돼지",fact:"돼지는 아주 똑똑한 동물이에요"},
    Vietnamese:{title:"lợn",fact:"Lợn là động vật rất thông minh"},
    Hindi:{title:"सूअर",fact:"सूअर बहुत समझदार जानवर होते हैं"},
  },
};

// ── CEFR MAPPING ─────────────────────────────────────────────────────────────
// Vocabulary thresholds follow commonly-cited CEFR vocabulary research
// (Milton 2009, Vocabulary Size Test norms, and Cambridge English estimates):
//   A1 ≈ 500 words        A2 ≈ 1,000 words
//   B1 ≈ 2,000 words      B2 ≈ 4,000 words
//   C1 ≈ 8,000 words      C2 ≈ 16,000+ words
// These are the actual adult CEFR standards, not age-adjusted. A child who
// has been exposed to more words is showing vocabulary typical of that level.

export const CEFR_MILESTONES = [
  { max: 50,    babyLabel: "Babbling",          level: "Pre-A1",                 description: "Building first words" },
  { max: 500,   babyLabel: "First words",       level: "A1 — Beginner",           description: "Survival vocabulary (basic nouns, pronouns, common verbs)" },
  { max: 1000,  babyLabel: "Short phrases",     level: "A2 — Elementary",        description: "Everyday vocabulary (family, home, shopping, work)" },
  { max: 2000,  babyLabel: "First sentences",   level: "B1 — Intermediate",      description: "Familiar topics (travel, interests, opinions)" },
  { max: 4000,  babyLabel: "Storytime ready",   level: "B2 — Upper Intermediate",description: "Complex topics (current events, abstract ideas)" },
  { max: 8000,  babyLabel: "Chatting fluently", level: "C1 — Advanced",          description: "Fluent expression, nuanced meaning" },
  { max: 16000, babyLabel: "Near-native",       level: "C2 — Proficient",        description: "Near-native vocabulary and understanding" },
  { max: Infinity, babyLabel: "Limitless",      level: "Beyond C2 — Graduate",   description: "Expert-level vocabulary" },
];

export function cefrForVocabCount(count) {
  for (const m of CEFR_MILESTONES) if (count <= m.max) return m;
  return CEFR_MILESTONES[CEFR_MILESTONES.length - 1];
}

// ── DAY-BASED SELECTION ──────────────────────────────────────────────────────
// Given the current day number, return the 3 rolling sets to use.
// Day 1: sets 0-2, Day 2: sets 1-3, etc.
// When we run out of sets, we loop back to the beginning.

export function getRollingSets(sets, dayNum) {
  if (!sets || sets.length === 0) return [];
  const start = (dayNum - 1) % sets.length;
  const result = [];
  for (let i = 0; i < 3; i++) result.push(sets[(start + i) % sets.length]);
  return result;
}

// ── KINSHIP VARIANTS ─────────────────────────────────────────────────────────
// East Asian languages distinguish kinship relations that English collapses into
// a single word. For linguistic authenticity, when learning these languages,
// babies should see the specific kinship terms they'd actually hear at home.
//
// This feature only activates for these languages:
const KINSHIP_LANGUAGES = [
  "Chinese (Mandarin)",
  "Chinese (Cantonese)",
  "Korean",
  "Japanese",
  "Vietnamese",
  "Hindi",
  "Urdu",
  "Bengali",
  "Tamil",
  "Telugu",
  "Marathi",
  "Arabic",
  "Persian",
  "Turkish",
  "Swahili",
  "Thai",
  "Indonesian",
  "Malay",
  "Tagalog",
];

export { KINSHIP_LANGUAGES };
//
// Accuracy notes:
// - Korean older sister/brother varies by the speaker's gender. We use both
//   forms joined by "/" — parents should teach the one matching each twin.
// - Japanese typically does NOT distinguish paternal/maternal grandparents in
//   daily speech, so we keep those as single cards (not 2).
// - Mandarin has many uncle terms. We use the two most common: 叔叔
//   (father's younger brother / paternal uncle) and 舅舅 (mother's brother /
//   maternal uncle). Other uncles (伯伯, 姑父, 姨父) are left for later.
// - Cantonese aunts: 姑姐 (paternal, father's sister) / 姨姨 (maternal).

export const KINSHIP_VARIANTS = {
  // ── SIBLINGS: older sister / younger sister ────────────────────────────────
  sister: {
    "Chinese (Mandarin)":  [{ word: "姐姐",   note: "older sister",   emoji: "👩" },
                            { word: "妹妹",   note: "younger sister", emoji: "👧" }],
    "Chinese (Cantonese)": [{ word: "家姐",   note: "older sister",   emoji: "👩" },
                            { word: "妹妹",   note: "younger sister", emoji: "👧" }],
    "Korean":              [{ word: "언니/누나", note: "older sister (언니 for girls, 누나 for boys)", emoji: "👩" },
                            { word: "여동생",  note: "younger sister", emoji: "👧" }],
    "Japanese":            [{ word: "お姉ちゃん", note: "older sister",   emoji: "👩" },
                            { word: "いもうと", note: "younger sister", emoji: "👧" }],
    "Vietnamese":          [{ word: "chị",    note: "older sister",   emoji: "👩" },
                            { word: "em gái", note: "younger sister", emoji: "👧" }],
    "Hindi":       [{ word: "दीदी",    note: "older sister",   emoji: "👩" },
                    { word: "छोटी बहन", note: "younger sister", emoji: "👧" }],
    "Urdu":        [{ word: "آپا",     note: "older sister",   emoji: "👩" },
                    { word: "چھوٹی بہن", note: "younger sister", emoji: "👧" }],
    "Bengali":     [{ word: "দিদি",     note: "older sister",   emoji: "👩" },
                    { word: "ছোট বোন",  note: "younger sister", emoji: "👧" }],
    "Tamil":       [{ word: "அக்கா",   note: "older sister",   emoji: "👩" },
                    { word: "தங்கை",   note: "younger sister", emoji: "👧" }],
    "Telugu":      [{ word: "అక్క",    note: "older sister",   emoji: "👩" },
                    { word: "చెల్లెలు", note: "younger sister", emoji: "👧" }],
    "Marathi":     [{ word: "ताई",     note: "older sister",   emoji: "👩" },
                    { word: "लहान बहीण", note: "younger sister", emoji: "👧" }],
    "Turkish":     [{ word: "abla",    note: "older sister",   emoji: "👩" },
                    { word: "kız kardeş", note: "younger sister", emoji: "👧" }],
    "Swahili":     [{ word: "dada mkubwa", note: "older sister (\"big sister\")", emoji: "👩" },
                    { word: "dada mdogo",  note: "younger sister (\"little sister\")", emoji: "👧" }],
    "Thai":        [{ word: "พี่สาว",  note: "older sister",   emoji: "👩" },
                    { word: "น้องสาว", note: "younger sister", emoji: "👧" }],
    "Indonesian":  [{ word: "kakak perempuan", note: "older sister",   emoji: "👩" },
                    { word: "adik perempuan",  note: "younger sister", emoji: "👧" }],
    "Malay":       [{ word: "kakak",   note: "older sister",   emoji: "👩" },
                    { word: "adik perempuan", note: "younger sister", emoji: "👧" }],
    "Tagalog":    [{ word: "ate",     note: "older sister",   emoji: "👩" },
                    { word: "bunso",   note: "younger sister (youngest)", emoji: "👧" }],
  },

  // ── SIBLINGS: older brother / younger brother ──────────────────────────────
  brother: {
    "Chinese (Mandarin)":  [{ word: "哥哥",   note: "older brother",   emoji: "👨" },
                            { word: "弟弟",   note: "younger brother", emoji: "👦" }],
    "Chinese (Cantonese)": [{ word: "哥哥",   note: "older brother",   emoji: "👨" },
                            { word: "細佬",   note: "younger brother", emoji: "👦" }],
    "Korean":              [{ word: "오빠/형", note: "older brother (오빠 for girls, 형 for boys)", emoji: "👨" },
                            { word: "남동생",  note: "younger brother", emoji: "👦" }],
    "Japanese":            [{ word: "お兄ちゃん", note: "older brother",   emoji: "👨" },
                            { word: "おとうと", note: "younger brother", emoji: "👦" }],
    "Vietnamese":          [{ word: "anh",    note: "older brother",   emoji: "👨" },
                            { word: "em trai",note: "younger brother", emoji: "👦" }],
    "Hindi":       [{ word: "भैया",    note: "older brother",   emoji: "👨" },
                    { word: "छोटा भाई", note: "younger brother", emoji: "👦" }],
    "Urdu":        [{ word: "بھائی جان", note: "older brother",  emoji: "👨" },
                    { word: "چھوٹا بھائی", note: "younger brother", emoji: "👦" }],
    "Bengali":     [{ word: "দাদা",    note: "older brother",   emoji: "👨" },
                    { word: "ছোট ভাই", note: "younger brother", emoji: "👦" }],
    "Tamil":       [{ word: "அண்ணன்", note: "older brother",   emoji: "👨" },
                    { word: "தம்பி",   note: "younger brother", emoji: "👦" }],
    "Telugu":      [{ word: "అన్న",    note: "older brother",   emoji: "👨" },
                    { word: "తమ్ముడు", note: "younger brother", emoji: "👦" }],
    "Marathi":     [{ word: "दादा",    note: "older brother",   emoji: "👨" },
                    { word: "लहान भाऊ", note: "younger brother", emoji: "👦" }],
    "Turkish":     [{ word: "abi",     note: "older brother",   emoji: "👨" },
                    { word: "erkek kardeş", note: "younger brother", emoji: "👦" }],
    "Swahili":     [{ word: "kaka mkubwa", note: "older brother",   emoji: "👨" },
                    { word: "kaka mdogo",  note: "younger brother", emoji: "👦" }],
    "Thai":        [{ word: "พี่ชาย",  note: "older brother",   emoji: "👨" },
                    { word: "น้องชาย", note: "younger brother", emoji: "👦" }],
    "Indonesian":  [{ word: "kakak laki-laki", note: "older brother",   emoji: "👨" },
                    { word: "adik laki-laki",  note: "younger brother", emoji: "👦" }],
    "Malay":       [{ word: "abang",   note: "older brother",   emoji: "👨" },
                    { word: "adik lelaki", note: "younger brother", emoji: "👦" }],
    "Tagalog":    [{ word: "kuya",    note: "older brother",   emoji: "👨" },
                    { word: "bunso",   note: "youngest brother", emoji: "👦" }],
  },

  // ── GRANDMAS: paternal / maternal ──────────────────────────────────────────
  grandma: {
    "Chinese (Mandarin)":  [{ word: "奶奶",   note: "paternal grandma (father's mother)", emoji: "👵" },
                            { word: "外婆",   note: "maternal grandma (mother's mother)", emoji: "👵" }],
    "Chinese (Cantonese)": [{ word: "嫲嫲",   note: "paternal grandma", emoji: "👵" },
                            { word: "婆婆",   note: "maternal grandma", emoji: "👵" }],
    "Korean":              [{ word: "친할머니", note: "paternal grandma", emoji: "👵" },
                            { word: "외할머니", note: "maternal grandma", emoji: "👵" }],
    "Japanese":            [{ word: "おばあちゃん", note: "grandma", emoji: "👵" }],
    "Vietnamese":          [{ word: "bà nội", note: "paternal grandma (father's mother)", emoji: "👵" },
                            { word: "bà ngoại", note: "maternal grandma (mother's mother)", emoji: "👵" }],
    "Hindi":       [{ word: "दादी",    note: "paternal grandma (father's mother)", emoji: "👵" },
                    { word: "नानी",    note: "maternal grandma (mother's mother)", emoji: "👵" }],
    "Urdu":        [{ word: "دادی",     note: "paternal grandma", emoji: "👵" },
                    { word: "نانی",     note: "maternal grandma", emoji: "👵" }],
    "Bengali":     [{ word: "দাদি",     note: "paternal grandma (Bangladesh Bengali)", emoji: "👵" },
                    { word: "নানি",     note: "maternal grandma", emoji: "👵" }],
    "Tamil":       [{ word: "பாட்டி",   note: "paternal grandma (father's mother)", emoji: "👵" },
                    { word: "அம்மம்மா", note: "maternal grandma (mother's mother)", emoji: "👵" }],
    "Telugu":      [{ word: "నాన్నమ్మ", note: "paternal grandma", emoji: "👵" },
                    { word: "అమ్మమ్మ", note: "maternal grandma", emoji: "👵" }],
    "Turkish":     [{ word: "babaanne", note: "paternal grandma (father's mother)", emoji: "👵" },
                    { word: "anneanne", note: "maternal grandma (mother's mother)", emoji: "👵" }],
    "Thai":        [{ word: "ย่า",      note: "paternal grandma", emoji: "👵" },
                    { word: "ยาย",     note: "maternal grandma", emoji: "👵" }],
  },

  // ── GRANDPAS: paternal / maternal ──────────────────────────────────────────
  grandpa: {
    "Chinese (Mandarin)":  [{ word: "爷爷",   note: "paternal grandpa (father's father)", emoji: "👴" },
                            { word: "外公",   note: "maternal grandpa (mother's father)", emoji: "👴" }],
    "Chinese (Cantonese)": [{ word: "爺爺",   note: "paternal grandpa", emoji: "👴" },
                            { word: "公公",   note: "maternal grandpa", emoji: "👴" }],
    "Korean":              [{ word: "친할아버지", note: "paternal grandpa", emoji: "👴" },
                            { word: "외할아버지", note: "maternal grandpa", emoji: "👴" }],
    "Japanese":            [{ word: "おじいちゃん", note: "grandpa", emoji: "👴" }],
    "Vietnamese":          [{ word: "ông nội",  note: "paternal grandpa (father's father)", emoji: "👴" },
                            { word: "ông ngoại",note: "maternal grandpa (mother's father)", emoji: "👴" }],
    "Hindi":       [{ word: "दादा",    note: "paternal grandpa (father's father)", emoji: "👴" },
                    { word: "नाना",    note: "maternal grandpa (mother's father)", emoji: "👴" }],
    "Urdu":        [{ word: "دادا",     note: "paternal grandpa", emoji: "👴" },
                    { word: "نانا",     note: "maternal grandpa", emoji: "👴" }],
    "Bengali":     [{ word: "দাদু",     note: "paternal grandpa", emoji: "👴" },
                    { word: "নানা",     note: "maternal grandpa", emoji: "👴" }],
    "Tamil":       [{ word: "தாத்தா", note: "paternal grandpa",  emoji: "👴" },
                    { word: "அம்மப்பா", note: "maternal grandpa", emoji: "👴" }],
    "Telugu":      [{ word: "తాతయ్య", note: "paternal grandpa",  emoji: "👴" },
                    { word: "అమ్మగారి తాత", note: "maternal grandpa", emoji: "👴" }],
    "Thai":        [{ word: "ปู่",      note: "paternal grandpa", emoji: "👴" },
                    { word: "ตา",      note: "maternal grandpa", emoji: "👴" }],
  },

  // ── AUNTS: paternal / maternal ─────────────────────────────────────────────
  aunt: {
    "Chinese (Mandarin)":  [{ word: "姑姑",   note: "paternal aunt (father's sister)", emoji: "🧑" },
                            { word: "阿姨",   note: "maternal aunt (mother's sister)", emoji: "🧑" }],
    "Chinese (Cantonese)": [{ word: "姑姐",   note: "paternal aunt", emoji: "🧑" },
                            { word: "阿姨",   note: "maternal aunt", emoji: "🧑" }],
    "Korean":              [{ word: "고모",   note: "paternal aunt (father's sister)", emoji: "🧑" },
                            { word: "이모",   note: "maternal aunt (mother's sister)", emoji: "🧑" }],
    "Japanese":            [{ word: "おば",   note: "aunt", emoji: "🧑" }],
    "Vietnamese":          [{ word: "cô",     note: "paternal aunt (father's sister)", emoji: "🧑" },
                            { word: "dì",     note: "maternal aunt (mother's sister)", emoji: "🧑" }],
    "Hindi":       [{ word: "बुआ",     note: "paternal aunt (father's sister)", emoji: "🧑" },
                    { word: "मौसी",     note: "maternal aunt (mother's sister)", emoji: "🧑" }],
    "Urdu":        [{ word: "پھپھو",    note: "paternal aunt", emoji: "🧑" },
                    { word: "خالہ",     note: "maternal aunt", emoji: "🧑" }],
    "Bengali":     [{ word: "ফুফু",     note: "paternal aunt", emoji: "🧑" },
                    { word: "খালা",     note: "maternal aunt", emoji: "🧑" }],
    "Tamil":       [{ word: "அத்தை",  note: "paternal aunt", emoji: "🧑" },
                    { word: "சித்தி",  note: "maternal aunt", emoji: "🧑" }],
    "Telugu":      [{ word: "అత్త",    note: "paternal aunt", emoji: "🧑" },
                    { word: "పిన్ని",    note: "maternal aunt", emoji: "🧑" }],
    "Marathi":     [{ word: "आत्या",   note: "paternal aunt", emoji: "🧑" },
                    { word: "मावशी",   note: "maternal aunt", emoji: "🧑" }],
    "Arabic":      [{ word: "عمة",     note: "paternal aunt (father's sister)", emoji: "🧑" },
                    { word: "خالة",    note: "maternal aunt (mother's sister)", emoji: "🧑" }],
    "Persian":     [{ word: "عمه",     note: "paternal aunt", emoji: "🧑" },
                    { word: "خاله",    note: "maternal aunt", emoji: "🧑" }],
    "Turkish":     [{ word: "hala",    note: "paternal aunt (father's sister)", emoji: "🧑" },
                    { word: "teyze",   note: "maternal aunt (mother's sister)", emoji: "🧑" }],
    "Swahili":     [{ word: "shangazi", note: "paternal aunt (father's sister)", emoji: "🧑" },
                    { word: "mama mdogo", note: "maternal aunt (mother's younger sister)", emoji: "🧑" }],
    "Thai":        [{ word: "อา",       note: "paternal aunt (informal)", emoji: "🧑" },
                    { word: "น้า",       note: "maternal aunt (informal)", emoji: "🧑" }],
  },

  // ── UNCLES: paternal / maternal ────────────────────────────────────────────
  uncle: {
    "Chinese (Mandarin)":  [{ word: "叔叔",   note: "paternal uncle (father's brother)", emoji: "🧔" },
                            { word: "舅舅",   note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Chinese (Cantonese)": [{ word: "叔叔",   note: "paternal uncle", emoji: "🧔" },
                            { word: "舅父",   note: "maternal uncle", emoji: "🧔" }],
    "Korean":              [{ word: "삼촌",   note: "paternal uncle (father's brother)", emoji: "🧔" },
                            { word: "외삼촌", note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Japanese":            [{ word: "おじ",   note: "uncle", emoji: "🧔" }],
    "Vietnamese":          [{ word: "chú",    note: "paternal uncle (father's younger brother)", emoji: "🧔" },
                            { word: "cậu",    note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Hindi":       [{ word: "चाचा",    note: "paternal uncle (father's brother)", emoji: "🧔" },
                    { word: "मामा",    note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Urdu":        [{ word: "چچا",     note: "paternal uncle", emoji: "🧔" },
                    { word: "ماموں",   note: "maternal uncle", emoji: "🧔" }],
    "Bengali":     [{ word: "চাচা",    note: "paternal uncle", emoji: "🧔" },
                    { word: "মামা",    note: "maternal uncle", emoji: "🧔" }],
    "Tamil":       [{ word: "சித்தப்பா", note: "paternal uncle", emoji: "🧔" },
                    { word: "மாமா",    note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Telugu":      [{ word: "బాబాయి", note: "paternal uncle", emoji: "🧔" },
                    { word: "మామ",     note: "maternal uncle", emoji: "🧔" }],
    "Marathi":     [{ word: "काका",    note: "paternal uncle", emoji: "🧔" },
                    { word: "मामा",    note: "maternal uncle", emoji: "🧔" }],
    "Arabic":      [{ word: "عم",      note: "paternal uncle (father's brother)", emoji: "🧔" },
                    { word: "خال",     note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Persian":     [{ word: "عمو",     note: "paternal uncle", emoji: "🧔" },
                    { word: "دایی",    note: "maternal uncle", emoji: "🧔" }],
    "Turkish":     [{ word: "amca",    note: "paternal uncle (father's brother)", emoji: "🧔" },
                    { word: "dayı",    note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Swahili":     [{ word: "baba mdogo", note: "paternal uncle (father's younger brother)", emoji: "🧔" },
                    { word: "mjomba", note: "maternal uncle (mother's brother)", emoji: "🧔" }],
    "Thai":        [{ word: "อา",       note: "paternal uncle (informal)", emoji: "🧔" },
                    { word: "น้า",       note: "maternal uncle (informal)", emoji: "🧔" }],
  },
};

// Expand a single word into multiple cards if kinship variants exist for this language
function expandWordForLanguage(item, lang) {
  const variants = KINSHIP_VARIANTS[item.word]?.[lang];
  if (!variants) return [{ ...item }];
  return variants.map(v => ({
    ...item,                    // preserve setName, setId, original emoji (if no override)
    word: v.word,               // the kinship-specific translated word
    emoji: v.emoji || item.emoji,
    note: v.note,               // "older sister", "paternal grandma", etc.
    original: item.word,        // the English source word
    preTranslated: true,        // signal: don't re-translate this one
  }));
}

// Combine items from 3 sets into a deck, expanding kinship variants per language.
// For English/Spanish/French/etc., returns exactly 15 cards.
// For Chinese/Korean/Japanese/Vietnamese, may return up to 21 cards on Day 1
// (when family + family-extended + farm-animals are in rotation).
export function buildDeckForLanguage(rollingSets, lang) {
  const useKinship = KINSHIP_LANGUAGES.includes(lang);
  const out = [];
  for (const s of rollingSets) {
    for (const item of s.items) {
      const baseCard = { ...item, setName: s.name, setId: s.id };
      const expanded = useKinship
        ? expandWordForLanguage(baseCard, lang)
        : [baseCard];
      for (const card of expanded) {
        out.push(card);
      }
    }
  }
  return out;
}

// Backwards-compatible 15-card version (used for non-language-specific preview).
export function buildDeckFromSets(rollingSets) {
  const out = [];
  for (const s of rollingSets) {
    for (const item of s.items) {
      out.push({ ...item, setName: s.name, setId: s.id });
      if (out.length >= 15) return out.slice(0, 15);
    }
  }
  return out.slice(0, 15);
}

// Count total unique words a child has been exposed to, based on history.
// This is what drives the CEFR milestone display.
export function countUniqueWordsExposed(history) {
  // `history` here is the exposure log keyed by childId
  // For simplicity: each completed word session = 11 new words (some dupes)
  // Better: use day number and formula: day N has exposed up to N+2 sets = (N+2)*5 words
  // We'll use the more honest "sets completed" count.
  if (!history) return 0;
  let sessionsCompleted = 0;
  Object.values(history).forEach(day => {
    Object.entries(day).forEach(([k, count]) => {
      if (k.startsWith("reading:") || k.startsWith("couplets:") || k.startsWith("sentences:")) {
        sessionsCompleted += count;
      }
    });
  });
  // Rough: each session exposes ~5 new words averaged over the rolling window
  // (since sets 1,2,3 includes 5 old + 5 old + 5 new = 5 truly new)
  return Math.round(sessionsCompleted * 5 / 3);
}

// Per-language version of countUniqueWordsExposed. Filters the history to
// only count sessions completed in the specified language, then applies the
// same "5 new words per session, averaged across the rolling window" formula.
// Returns 0 if the child has never done a word session in this language.
export function countUniqueWordsExposedInLanguage(history, language) {
  if (!history || !language) return 0;
  let sessionsCompleted = 0;
  Object.values(history).forEach(day => {
    Object.entries(day).forEach(([k, count]) => {
      // Keys look like "reading:English", "couplets:Spanish", etc.
      const [cat, lang] = k.split(":");
      if (lang !== language) return;
      if (cat === "reading" || cat === "couplets" || cat === "sentences") {
        sessionsCompleted += count;
      }
    });
  });
  return Math.round(sessionsCompleted * 5 / 3);
}

// Returns the list of languages the child has done at least one word session
// in, sorted by total vocab exposure descending. Useful for the progress
// screen to know which languages to show.
export function languagesWithVocabProgress(history) {
  if (!history) return [];
  const sessionsByLang = {};
  Object.values(history).forEach(day => {
    Object.entries(day).forEach(([k, count]) => {
      const [cat, lang] = k.split(":");
      if (!lang) return;
      if (cat === "reading" || cat === "couplets" || cat === "sentences") {
        sessionsByLang[lang] = (sessionsByLang[lang] || 0) + count;
      }
    });
  });
  return Object.entries(sessionsByLang)
    .map(([lang, sessions]) => ({
      language: lang,
      vocab: Math.round(sessions * 5 / 3),
    }))
    .filter(e => e.vocab > 0)
    .sort((a, b) => b.vocab - a.vocab);
}
// ── DOMAN-STYLE CURRICULUM (generated) ────────────────────────────────────
// Parent-controlled: parent picks current month + set index per child.
// Each set has exactly 5 items. 3 sets shown concurrently = 15 cards/session.

export const WORDS_MONTH1 = [
  { id:"set1-family-members", name:"Family Members", items:[
    { word:"mother" },
    { word:"father" },
    { word:"sister" },
    { word:"brother" },
    { word:"baby" },
  ]},
  { id:"set2-animals", name:"Animals", items:[
    { word:"dog" },
    { word:"cat" },
    { word:"bird" },
    { word:"fish" },
    { word:"rabbit" },
  ]},
  { id:"set3-fruit", name:"Fruit", items:[
    { word:"apple" },
    { word:"banana" },
    { word:"orange" },
    { word:"grapes" },
    { word:"strawberry" },
  ]},
  { id:"set4-furniture", name:"Furniture", items:[
    { word:"chair" },
    { word:"table" },
    { word:"bed" },
    { word:"sofa" },
    { word:"lamp" },
  ]},
  { id:"set5-places", name:"Places", items:[
    { word:"home" },
    { word:"park" },
    { word:"school" },
    { word:"beach" },
    { word:"store" },
  ]},
  { id:"set6-african-animals", name:"African Animals", items:[
    { word:"lion" },
    { word:"elephant" },
    { word:"giraffe" },
    { word:"zebra" },
    { word:"hippo" },
  ]},
  { id:"set7-fun-foods", name:"Fun Foods", items:[
    { word:"pizza" },
    { word:"icecream" },
    { word:"cookie" },
    { word:"cake" },
    { word:"popcorn" },
  ]},
  { id:"set8-objects-in-the-house", name:"Objects in the House", items:[
    { word:"bottle" },
    { word:"pillow" },
    { word:"towel" },
    { word:"mirror" },
    { word:"basket" },
  ]},
  { id:"set9-at-the-playground", name:"At the Playground", items:[
    { word:"swing" },
    { word:"slide" },
    { word:"seesaw" },
    { word:"sandbox" },
    { word:"swingset" },
  ]},
  { id:"set10-fun-activities", name:"Fun Activities", items:[
    { word:"dance" },
    { word:"sing" },
    { word:"run" },
    { word:"jump" },
    { word:"play" },
  ]},
  { id:"set11-farm-animals", name:"Farm Animals", items:[
    { word:"cow" },
    { word:"chicken" },
    { word:"duck" },
    { word:"sheep" },
    { word:"pig" },
  ]},
  { id:"set12-food-groups", name:"Food Groups", items:[
    { word:"grains" },
    { word:"dairy" },
    { word:"protein" },
    { word:"vegetable" },
    { word:"fruit" },
  ]},
  { id:"set13-technology", name:"Technology", items:[
    { word:"phone" },
    { word:"tablet" },
    { word:"tv" },
    { word:"computer" },
    { word:"camera" },
  ]},
  { id:"set14-toys", name:"Toys", items:[
    { word:"ball" },
    { word:"doll" },
    { word:"block" },
    { word:"puzzle" },
    { word:"teddybear" },
  ]},
  { id:"set15-superheroes", name:"Superheroes", items:[
    { word:"superman" },
    { word:"spiderman" },
    { word:"batman" },
    { word:"hulk" },
    { word:"wonderwoman" },
  ]},
  { id:"set16-activities", name:"Activities", items:[
    { word:"swim" },
    { word:"climb" },
    { word:"read" },
    { word:"paint" },
    { word:"cook" },
  ]},
  { id:"set17-foods", name:"Foods", items:[
    { word:"rice" },
    { word:"bread" },
    { word:"pasta" },
    { word:"soup" },
    { word:"salad" },
  ]},
  { id:"set18-body-parts", name:"Body Parts", items:[
    { word:"head" },
    { word:"arm" },
    { word:"leg" },
    { word:"hand" },
    { word:"foot" },
  ]},
  { id:"set19-toys-2", name:"Toys 2", items:[
    { word:"car" },
    { word:"truck" },
    { word:"train" },
    { word:"plane" },
    { word:"robot" },
  ]},
  { id:"set20-motor-vehicles", name:"Motor Vehicles", items:[
    { word:"bicycle" },
    { word:"motorcycle" },
    { word:"bus" },
    { word:"scooter" },
    { word:"skateboard" },
  ]},
  { id:"set21-colors", name:"Colors", items:[
    { word:"red" },
    { word:"blue" },
    { word:"yellow" },
    { word:"green" },
    { word:"purple" },
  ]},
  { id:"set22-meat", name:"Meat", items:[
    { word:"chicken" },
    { word:"beef" },
    { word:"pork" },
    { word:"fish" },
    { word:"lamb" },
  ]},
  { id:"set23-emotions", name:"Emotions", items:[
    { word:"happy" },
    { word:"sad" },
    { word:"angry" },
    { word:"scared" },
    { word:"excited" },
  ]},
  { id:"set24-descriptive-words", name:"Descriptive Words", items:[
    { word:"big" },
    { word:"small" },
    { word:"fast" },
    { word:"slow" },
    { word:"loud" },
  ]},
  { id:"set25-body-parts-2", name:"Body Parts 2", items:[
    { word:"knee" },
    { word:"elbow" },
    { word:"shoulder" },
    { word:"ankle" },
    { word:"wrist" },
  ]},
  { id:"set26-sports", name:"Sports", items:[
    { word:"soccer" },
    { word:"basketball" },
    { word:"tennis" },
    { word:"baseball" },
    { word:"swimming" },
  ]},
  { id:"set27-colors-2", name:"Colors 2", items:[
    { word:"pink" },
    { word:"orange" },
    { word:"brown" },
    { word:"black" },
    { word:"white" },
  ]},
  { id:"set28-vegetables", name:"Vegetables", items:[
    { word:"carrot" },
    { word:"broccoli" },
    { word:"potato" },
    { word:"tomato" },
    { word:"lettuce" },
  ]},
  { id:"set29-descriptive-words-2", name:"Descriptive Words 2", items:[
    { word:"soft" },
    { word:"hard" },
    { word:"hot" },
    { word:"cold" },
    { word:"smooth" },
  ]},
];

export const WORDS_MONTH2 = [
  { id:"set1-people", name:"People", items:[
    { word:"woman" },
    { word:"man" },
    { word:"child" },
    { word:"elder" },
    { word:"friend" },
  ]},
  { id:"set2-rodents", name:"Rodents", items:[
    { word:"mouse" },
    { word:"rat" },
    { word:"hamster" },
    { word:"squirrel" },
    { word:"beaver" },
  ]},
  { id:"set3-berries", name:"Berries", items:[
    { word:"strawberry" },
    { word:"blueberry" },
    { word:"raspberry" },
    { word:"blackberry" },
    { word:"cranberry" },
  ]},
  { id:"set4-furnitures", name:"Furnitures", items:[
    { word:"dresser" },
    { word:"desk" },
    { word:"bookshelf" },
    { word:"armchair" },
    { word:"nightstand" },
  ]},
  { id:"set5-places", name:"Places", items:[
    { word:"library" },
    { word:"museum" },
    { word:"zoo" },
    { word:"aquarium" },
    { word:"hospital" },
  ]},
  { id:"set6-occupation-1", name:"Occupation 1", items:[
    { word:"doctor" },
    { word:"teacher" },
    { word:"firefighter" },
    { word:"policeofficer" },
    { word:"chef" },
  ]},
  { id:"set7-african-animals", name:"African Animals", items:[
    { word:"rhinoceros" },
    { word:"cheetah" },
    { word:"gazelle" },
    { word:"meerkat" },
    { word:"warthog" },
  ]},
  { id:"set8-vegetables", name:"Vegetables", items:[
    { word:"spinach" },
    { word:"cauliflower" },
    { word:"zucchini" },
    { word:"asparagus" },
    { word:"kale" },
  ]},
  { id:"set9-kitchen-appliances", name:"Kitchen Appliances", items:[
    { word:"refrigerator" },
    { word:"oven" },
    { word:"microwave" },
    { word:"blender" },
    { word:"toaster" },
  ]},
  { id:"set10-synonyms-for-smart", name:"Synonyms for Smart", items:[
    { word:"clever" },
    { word:"wise" },
    { word:"bright" },
    { word:"brilliant" },
    { word:"intelligent" },
  ]},
  { id:"set11-animal-verbs", name:"Animal Verbs", items:[
    { word:"bark" },
    { word:"meow" },
    { word:"moo" },
    { word:"roar" },
    { word:"chirp" },
  ]},
  { id:"set12-farm-animals", name:"Farm Animals", items:[
    { word:"horse" },
    { word:"goat" },
    { word:"goose" },
    { word:"turkey" },
    { word:"donkey" },
  ]},
  { id:"set13-food-groups", name:"Food Groups", items:[
    { word:"carbohydrate" },
    { word:"legume" },
    { word:"nut" },
    { word:"seed" },
    { word:"herb" },
  ]},
  { id:"set14-occupation-2", name:"Occupation 2", items:[
    { word:"engineer" },
    { word:"lawyer" },
    { word:"artist" },
    { word:"scientist" },
    { word:"musician" },
  ]},
  { id:"set15-sports", name:"Sports", items:[
    { word:"hockey" },
    { word:"football" },
    { word:"volleyball" },
    { word:"rugby" },
    { word:"cricket" },
  ]},
  { id:"set16-superheroes", name:"Superheroes", items:[
    { word:"captainamerica" },
    { word:"thor" },
    { word:"blackwidow" },
    { word:"ironman" },
    { word:"flash" },
  ]},
  { id:"set17-fun-activities", name:"Fun Activities", items:[
    { word:"skating" },
    { word:"biking" },
    { word:"surfing" },
    { word:"fishing" },
    { word:"camping" },
  ]},
  { id:"set18-synonyms-for-pretty", name:"Synonyms for Pretty", items:[
    { word:"beautiful" },
    { word:"lovely" },
    { word:"gorgeous" },
    { word:"charming" },
    { word:"elegant" },
  ]},
  { id:"set19-parts-of-the-face", name:"Parts of the Face", items:[
    { word:"eye" },
    { word:"nose" },
    { word:"mouth" },
    { word:"ear" },
    { word:"cheek" },
  ]},
  { id:"set20-synonyms-for-big", name:"Synonyms for Big", items:[
    { word:"huge" },
    { word:"large" },
    { word:"giant" },
    { word:"massive" },
    { word:"enormous" },
  ]},
  { id:"set21-transport", name:"Transport", items:[
    { word:"helicopter" },
    { word:"submarine" },
    { word:"rocket" },
    { word:"ferry" },
    { word:"subway" },
  ]},
  { id:"set22-fruit", name:"Fruit", items:[
    { word:"mango" },
    { word:"pineapple" },
    { word:"kiwi" },
    { word:"watermelon" },
    { word:"peach" },
  ]},
  { id:"set23-synonyms-for-small", name:"Synonyms for Small", items:[
    { word:"tiny" },
    { word:"little" },
    { word:"mini" },
    { word:"petite" },
    { word:"miniature" },
  ]},
  { id:"set24-emotions", name:"Emotions", items:[
    { word:"surprised" },
    { word:"confused" },
    { word:"proud" },
    { word:"shy" },
    { word:"grateful" },
  ]},
  { id:"set25-directions", name:"Directions", items:[
    { word:"up" },
    { word:"down" },
    { word:"left" },
    { word:"right" },
    { word:"forward" },
  ]},
  { id:"set26-body-parts", name:"Body Parts", items:[
    { word:"stomach" },
    { word:"back" },
    { word:"chest" },
    { word:"neck" },
    { word:"waist" },
  ]},
  { id:"set27-actions", name:"Actions", items:[
    { word:"walk" },
    { word:"stand" },
    { word:"sit" },
    { word:"lie" },
    { word:"crawl" },
  ]},
  { id:"set28-locations", name:"Locations", items:[
    { word:"kitchen" },
    { word:"bedroom" },
    { word:"bathroom" },
    { word:"livingroom" },
    { word:"garden" },
  ]},
  { id:"set29-synonyms-for-tasty", name:"Synonyms for Tasty", items:[
    { word:"delicious" },
    { word:"yummy" },
    { word:"scrumptious" },
    { word:"flavorful" },
    { word:"savory" },
  ]},
  { id:"set30-parts-of-the-mouth", name:"Parts of the Mouth", items:[
    { word:"lip" },
    { word:"tongue" },
    { word:"tooth" },
    { word:"gum" },
    { word:"palate" },
  ]},
];

export const WORDS_MONTH3 = [
  { id:"set1-european-countries", name:"European Countries", items:[
    { word:"france" },
    { word:"germany" },
    { word:"italy" },
    { word:"spain" },
    { word:"greece" },
  ]},
  { id:"set2-emotions", name:"Emotions", items:[
    { word:"jealous" },
    { word:"nervous" },
    { word:"calm" },
    { word:"relaxed" },
    { word:"bored" },
  ]},
  { id:"set3-joints", name:"Joints", items:[
    { word:"knee" },
    { word:"elbow" },
    { word:"shoulder" },
    { word:"hip" },
    { word:"knuckle" },
  ]},
  { id:"set4-traveling", name:"Traveling", items:[
    { word:"suitcase" },
    { word:"passport" },
    { word:"ticket" },
    { word:"map" },
    { word:"hotel" },
  ]},
  { id:"set5-parts-of-the-face", name:"Parts of the Face", items:[
    { word:"eyebrow" },
    { word:"eyelash" },
    { word:"chin" },
    { word:"forehead" },
    { word:"jaw" },
  ]},
  { id:"set6-space", name:"Space", items:[
    { word:"sun" },
    { word:"moon" },
    { word:"star" },
    { word:"planet" },
    { word:"galaxy" },
  ]},
  { id:"set7-actions", name:"Actions", items:[
    { word:"skip" },
    { word:"hop" },
    { word:"tiptoe" },
    { word:"march" },
    { word:"glide" },
  ]},
  { id:"set8-actions-2", name:"Actions 2", items:[
    { word:"throw" },
    { word:"catch" },
    { word:"kick" },
    { word:"push" },
    { word:"pull" },
  ]},
  { id:"set9-north-america", name:"North America", items:[
    { word:"usa" },
    { word:"canada" },
    { word:"mexico" },
    { word:"cuba" },
    { word:"guatemala" },
  ]},
  { id:"set10-geography", name:"Geography", items:[
    { word:"mountain" },
    { word:"valley" },
    { word:"river" },
    { word:"lake" },
    { word:"desert" },
  ]},
  { id:"set11-bodies-of-water", name:"Bodies of Water", items:[
    { word:"ocean" },
    { word:"sea" },
    { word:"pond" },
    { word:"stream" },
    { word:"waterfall" },
  ]},
  { id:"set12-nature", name:"Nature", items:[
    { word:"tree" },
    { word:"leaf" },
    { word:"flower" },
    { word:"grass" },
    { word:"rock" },
  ]},
  { id:"set13-flowers", name:"Flowers", items:[
    { word:"rose" },
    { word:"tulip" },
    { word:"daisy" },
    { word:"sunflower" },
    { word:"lily" },
  ]},
  { id:"set14-apes", name:"Apes", items:[
    { word:"chimpanzee" },
    { word:"gorilla" },
    { word:"orangutan" },
    { word:"bonobo" },
    { word:"gibbon" },
  ]},
  { id:"set15-at-the-beach", name:"At the Beach", items:[
    { word:"sand" },
    { word:"seashell" },
    { word:"wave" },
    { word:"umbrella" },
    { word:"towel" },
  ]},
  { id:"set16-environments", name:"Environments", items:[
    { word:"forest" },
    { word:"jungle" },
    { word:"tundra" },
    { word:"savanna" },
    { word:"wetland" },
  ]},
  { id:"set17-nature-2", name:"Nature 2", items:[
    { word:"cloud" },
    { word:"rainbow" },
    { word:"lightning" },
    { word:"thunder" },
    { word:"wind" },
  ]},
  { id:"set18-at-the-airport", name:"At the Airport", items:[
    { word:"airplane" },
    { word:"gate" },
    { word:"pilot" },
    { word:"luggage" },
    { word:"runway" },
  ]},
  { id:"set19-actions-3", name:"Actions 3", items:[
    { word:"climb" },
    { word:"swim" },
    { word:"dance" },
    { word:"leap" },
    { word:"spin" },
  ]},
  { id:"set20-verbs", name:"Verbs", items:[
    { word:"think" },
    { word:"feel" },
    { word:"know" },
    { word:"wonder" },
    { word:"imagine" },
  ]},
  { id:"set21-babies", name:"Babies", items:[
    { word:"newborn" },
    { word:"infant" },
    { word:"toddler" },
    { word:"preschooler" },
    { word:"diaper" },
  ]},
  { id:"set22-love", name:"Love", items:[
    { word:"hug" },
    { word:"kiss" },
    { word:"cuddle" },
    { word:"snuggle" },
    { word:"embrace" },
  ]},
  { id:"set23-asian-countries", name:"Asian Countries", items:[
    { word:"china" },
    { word:"japan" },
    { word:"korea" },
    { word:"vietnam" },
    { word:"thailand" },
  ]},
  { id:"set24-cities-of-usa", name:"Cities of USA", items:[
    { word:"newyork" },
    { word:"losangeles" },
    { word:"chicago" },
    { word:"houston" },
    { word:"miami" },
  ]},
  { id:"set25-synonyms-for-silly", name:"Synonyms for Silly", items:[
    { word:"goofy" },
    { word:"funny" },
    { word:"wacky" },
    { word:"silly" },
    { word:"ridiculous" },
  ]},
  { id:"set26-synonyms-for-fast", name:"Synonyms for Fast", items:[
    { word:"quick" },
    { word:"rapid" },
    { word:"speedy" },
    { word:"swift" },
    { word:"hasty" },
  ]},
  { id:"set27-insects", name:"Insects", items:[
    { word:"bee" },
    { word:"ant" },
    { word:"butterfly" },
    { word:"ladybug" },
    { word:"dragonfly" },
  ]},
  { id:"set28-body-parts", name:"Body Parts", items:[
    { word:"heart" },
    { word:"lung" },
    { word:"liver" },
    { word:"kidney" },
    { word:"brain" },
  ]},
  { id:"set29-parts-of-the-head", name:"Parts of the Head", items:[
    { word:"skull" },
    { word:"scalp" },
    { word:"temple" },
    { word:"crown" },
    { word:"nape" },
  ]},
  { id:"set30-synonyms-for-rude", name:"Synonyms for Rude", items:[
    { word:"impolite" },
    { word:"disrespectful" },
    { word:"bratty" },
    { word:"crass" },
    { word:"harsh" },
  ]},
];

export const COUPLETS_MONTH2 = [
  { id:"set1-colors-and-fruits", name:"Colors and Fruits", items:[
    { words:["red","apple"] },
    { words:["yellow","banana"] },
    { words:["orange","orange"] },
    { words:["purple","grapes"] },
    { words:["green","pear"] },
  ]},
  { id:"set2-descriptive-family", name:"Descriptive Family", items:[
    { words:["tall","daddy"] },
    { words:["kind","mommy"] },
    { words:["little","baby"] },
    { words:["big","sister"] },
    { words:["funny","brother"] },
  ]},
  { id:"set3-actions-and-animals", name:"Actions and Animals", items:[
    { words:["running","dog"] },
    { words:["flying","bird"] },
    { words:["jumping","cat"] },
    { words:["swimming","fish"] },
    { words:["hopping","rabbit"] },
  ]},
  { id:"set4-actions-and-family", name:"Actions and Family", items:[
    { words:["hugging","mommy"] },
    { words:["playing","daddy"] },
    { words:["loving","baby"] },
    { words:["laughing","sister"] },
    { words:["helping","brother"] },
  ]},
  { id:"set5-colors-and-motor-vehicle", name:"Colors and Motor Vehicles", items:[
    { words:["red","car"] },
    { words:["yellow","bus"] },
    { words:["blue","bike"] },
    { words:["black","truck"] },
    { words:["green","scooter"] },
  ]},
  { id:"set6-descriptive-toys", name:"Descriptive Toys", items:[
    { words:["soft","teddy"] },
    { words:["loud","drum"] },
    { words:["colorful","block"] },
    { words:["bouncy","ball"] },
    { words:["fun","doll"] },
  ]},
  { id:"set7-emotions-and-animals", name:"Emotions and Animals", items:[
    { words:["happy","dog"] },
    { words:["scared","cat"] },
    { words:["angry","lion"] },
    { words:["calm","fish"] },
    { words:["playful","puppy"] },
  ]},
  { id:"set8-colors-and-household-obj", name:"Colors and Household Objects", items:[
    { words:["blue","cup"] },
    { words:["red","bowl"] },
    { words:["white","plate"] },
    { words:["yellow","spoon"] },
    { words:["green","fork"] },
  ]},
  { id:"set9-descriptive-electronics", name:"Descriptive Electronics", items:[
    { words:["bright","phone"] },
    { words:["loud","tv"] },
    { words:["smart","tablet"] },
    { words:["fast","laptop"] },
    { words:["new","camera"] },
  ]},
  { id:"set10-colors-and-animals", name:"Colors and Animals", items:[
    { words:["brown","bear"] },
    { words:["white","rabbit"] },
    { words:["black","panther"] },
    { words:["gray","wolf"] },
    { words:["pink","pig"] },
  ]},
  { id:"set11-emotions-and-family", name:"Emotions and Family", items:[
    { words:["happy","mommy"] },
    { words:["proud","daddy"] },
    { words:["silly","sister"] },
    { words:["sweet","baby"] },
    { words:["caring","grandma"] },
  ]},
  { id:"set12-descriptive-food", name:"Descriptive Food", items:[
    { words:["sweet","cake"] },
    { words:["sour","lemon"] },
    { words:["salty","chip"] },
    { words:["spicy","pepper"] },
    { words:["crunchy","cookie"] },
  ]},
  { id:"set13-actions", name:"Actions", items:[
    { words:["eating","breakfast"] },
    { words:["drinking","water"] },
    { words:["cooking","food"] },
    { words:["baking","bread"] },
    { words:["serving","dinner"] },
  ]},
  { id:"set14-actions-2", name:"Actions 2", items:[
    { words:["reading","book"] },
    { words:["writing","letter"] },
    { words:["drawing","picture"] },
    { words:["painting","canvas"] },
    { words:["singing","song"] },
  ]},
  { id:"set15-instructions", name:"Instructions", items:[
    { words:["please","sit"] },
    { words:["please","eat"] },
    { words:["please","stand"] },
    { words:["please","sleep"] },
    { words:["please","wait"] },
  ]},
  { id:"set16-different-juice", name:"Different Juice", items:[
    { words:["apple","juice"] },
    { words:["orange","juice"] },
    { words:["grape","juice"] },
    { words:["carrot","juice"] },
    { words:["tomato","juice"] },
  ]},
  { id:"set17-colors-and-food", name:"Colors and Food", items:[
    { words:["red","tomato"] },
    { words:["yellow","corn"] },
    { words:["green","broccoli"] },
    { words:["orange","carrot"] },
    { words:["purple","eggplant"] },
  ]},
  { id:"set18-actions-and-directions", name:"Actions and Directions", items:[
    { words:["go","up"] },
    { words:["look","down"] },
    { words:["turn","left"] },
    { words:["turn","right"] },
    { words:["move","forward"] },
  ]},
  { id:"set19-colors-and-electronics", name:"Colors and Electronics", items:[
    { words:["white","phone"] },
    { words:["black","tv"] },
    { words:["silver","laptop"] },
    { words:["red","camera"] },
    { words:["pink","tablet"] },
  ]},
  { id:"set20-descriptive-fruit", name:"Descriptive Fruit", items:[
    { words:["ripe","banana"] },
    { words:["fresh","apple"] },
    { words:["juicy","orange"] },
    { words:["sweet","strawberry"] },
    { words:["sour","lemon"] },
  ]},
  { id:"set21-descriptive-food-2", name:"Descriptive Food 2", items:[
    { words:["hot","soup"] },
    { words:["cold","icecream"] },
    { words:["warm","bread"] },
    { words:["cool","salad"] },
    { words:["tasty","pasta"] },
  ]},
  { id:"set22-descriptive-places", name:"Descriptive Places", items:[
    { words:["quiet","library"] },
    { words:["busy","market"] },
    { words:["fun","park"] },
    { words:["calm","beach"] },
    { words:["loud","stadium"] },
  ]},
  { id:"set23-colors-and-berries", name:"Colors and Berries", items:[
    { words:["red","strawberry"] },
    { words:["blue","blueberry"] },
    { words:["black","blackberry"] },
    { words:["red","cranberry"] },
    { words:["purple","grape"] },
  ]},
  { id:"set24-places-and-furniture", name:"Places and Furniture", items:[
    { words:["kitchen","table"] },
    { words:["bedroom","bed"] },
    { words:["living room","sofa"] },
    { words:["office","desk"] },
    { words:["garden","bench"] },
  ]},
  { id:"set25-eating-and-drinking", name:"Eating and Drinking", items:[
    { words:["eating","sandwich"] },
    { words:["drinking","milk"] },
    { words:["tasting","soup"] },
    { words:["chewing","apple"] },
    { words:["sipping","tea"] },
  ]},
  { id:"set26-descriptive-places-2", name:"Descriptive Places 2", items:[
    { words:["cold","igloo"] },
    { words:["hot","desert"] },
    { words:["wet","beach"] },
    { words:["dry","mountain"] },
    { words:["green","forest"] },
  ]},
  { id:"set27-actions-and-directions-2", name:"Actions and Directions 2", items:[
    { words:["going","up"] },
    { words:["coming","down"] },
    { words:["walking","forward"] },
    { words:["running","back"] },
    { words:["jumping","high"] },
  ]},
  { id:"set28-colors-and-food-2", name:"Colors and Food 2", items:[
    { words:["white","rice"] },
    { words:["brown","bread"] },
    { words:["yellow","cheese"] },
    { words:["pink","ham"] },
    { words:["green","lettuce"] },
  ]},
  { id:"set29-emotions-and-animals-2", name:"Emotions and Animals 2", items:[
    { words:["silly","monkey"] },
    { words:["wise","owl"] },
    { words:["shy","turtle"] },
    { words:["brave","lion"] },
    { words:["gentle","lamb"] },
  ]},
  { id:"set30-colors-and-transportatio", name:"Colors and Transportation", items:[
    { words:["red","firetruck"] },
    { words:["yellow","schoolbus"] },
    { words:["blue","trainplane"] },
    { words:["white","boat"] },
    { words:["black","limousine"] },
  ]},
];

export const SENTENCES_MONTH3 = [
  { id:"set1-family-and-eating", name:"Family and Eating", items:[
    { sentence:"mommy eats apple" },
    { sentence:"daddy drinks water" },
    { sentence:"sister cooks pasta" },
    { sentence:"brother makes cake" },
    { sentence:"baby tastes milk" },
  ]},
  { id:"set2-family-and-emotions", name:"Family and Emotions", items:[
    { sentence:"mommy feels happy" },
    { sentence:"daddy looks tired" },
    { sentence:"sister is excited" },
    { sentence:"brother is proud" },
    { sentence:"baby is curious" },
  ]},
  { id:"set3-animals-and-actions", name:"Animals and Actions", items:[
    { sentence:"dog runs fast" },
    { sentence:"cat jumps high" },
    { sentence:"bird flies away" },
    { sentence:"fish swims deep" },
    { sentence:"horse gallops quickly" },
  ]},
  { id:"set4-animals-and-size", name:"Animals and Size", items:[
    { sentence:"elephant is huge" },
    { sentence:"mouse is tiny" },
    { sentence:"giraffe is tall" },
    { sentence:"penguin is small" },
    { sentence:"whale is enormous" },
  ]},
  { id:"set5-food-and-descriptions", name:"Food and Descriptions", items:[
    { sentence:"soup is hot" },
    { sentence:"icecream is cold" },
    { sentence:"pizza is tasty" },
    { sentence:"salad is fresh" },
    { sentence:"cookie is sweet" },
  ]},
  { id:"set6-favorite-locations", name:"Favorite Locations", items:[
    { sentence:"I love park" },
    { sentence:"I love beach" },
    { sentence:"I love zoo" },
    { sentence:"I love home" },
    { sentence:"I love garden" },
  ]},
  { id:"set7-foods-and-colors", name:"Foods and Colors", items:[
    { sentence:"apple is red" },
    { sentence:"banana is yellow" },
    { sentence:"grape is purple" },
    { sentence:"lettuce is green" },
    { sentence:"carrot is orange" },
  ]},
  { id:"set8-animals-and-colors", name:"Animals and Colors", items:[
    { sentence:"bear is brown" },
    { sentence:"swan is white" },
    { sentence:"crow is black" },
    { sentence:"lion is golden" },
    { sentence:"frog is green" },
  ]},
  { id:"set9-vegetables-and-colors", name:"Vegetables and Colors", items:[
    { sentence:"tomato is red" },
    { sentence:"corn is yellow" },
    { sentence:"eggplant is purple" },
    { sentence:"spinach is green" },
    { sentence:"carrot is orange" },
  ]},
  { id:"set10-family-and-descriptions", name:"Family and Descriptions", items:[
    { sentence:"mommy is kind" },
    { sentence:"daddy is strong" },
    { sentence:"sister is smart" },
    { sentence:"brother is funny" },
    { sentence:"baby is sweet" },
  ]},
  { id:"set11-locations-and-colors", name:"Locations and Colors", items:[
    { sentence:"sky is blue" },
    { sentence:"grass is green" },
    { sentence:"sand is yellow" },
    { sentence:"snow is white" },
    { sentence:"soil is brown" },
  ]},
  { id:"set12-i-love-sentences", name:"I Love Sentences", items:[
    { sentence:"I love mommy" },
    { sentence:"I love daddy" },
    { sentence:"I love family" },
    { sentence:"I love home" },
    { sentence:"I love life" },
  ]},
  { id:"set13-family-and-actions", name:"Family and Actions", items:[
    { sentence:"mommy hugs baby" },
    { sentence:"daddy kisses sister" },
    { sentence:"brother plays ball" },
    { sentence:"sister reads book" },
    { sentence:"baby laughs happily" },
  ]},
  { id:"set14-animals-and-actions-2", name:"Animals and Actions 2", items:[
    { sentence:"dog wags tail" },
    { sentence:"cat purrs softly" },
    { sentence:"bird sings sweetly" },
    { sentence:"fish splashes water" },
    { sentence:"rabbit hops gently" },
  ]},
  { id:"set15-animals-and-emotions", name:"Animals and Emotions", items:[
    { sentence:"dog feels happy" },
    { sentence:"cat feels calm" },
    { sentence:"bird feels free" },
    { sentence:"fish feels peaceful" },
    { sentence:"puppy feels playful" },
  ]},
  { id:"set16-occupations-and-actions", name:"Occupations and Actions", items:[
    { sentence:"doctor helps people" },
    { sentence:"teacher teaches students" },
    { sentence:"chef cooks food" },
    { sentence:"firefighter puts out fires" },
    { sentence:"artist paints pictures" },
  ]},
  { id:"set17-intelligent-synonyms", name:"Intelligent Synonyms", items:[
    { sentence:"you are smart" },
    { sentence:"you are bright" },
    { sentence:"you are wise" },
    { sentence:"you are clever" },
    { sentence:"you are brilliant" },
  ]},
  { id:"set18-directions", name:"Directions", items:[
    { sentence:"go up stairs" },
    { sentence:"go down slide" },
    { sentence:"turn left here" },
    { sentence:"turn right there" },
    { sentence:"walk straight forward" },
  ]},
  { id:"set19-occupations-and-emotions", name:"Occupations and Emotions", items:[
    { sentence:"doctor feels caring" },
    { sentence:"teacher feels proud" },
    { sentence:"chef feels creative" },
    { sentence:"artist feels inspired" },
    { sentence:"musician feels joyful" },
  ]},
  { id:"set20-parts-of-the-face", name:"Parts of the Face", items:[
    { sentence:"eyes can see" },
    { sentence:"nose can smell" },
    { sentence:"ears can hear" },
    { sentence:"mouth can taste" },
    { sentence:"skin can feel" },
  ]},
  { id:"set21-body-parts", name:"Body Parts", items:[
    { sentence:"arms can hug" },
    { sentence:"legs can run" },
    { sentence:"hands can clap" },
    { sentence:"feet can stomp" },
    { sentence:"heart can love" },
  ]},
  { id:"set22-playing-sports", name:"Playing Sports", items:[
    { sentence:"we play soccer" },
    { sentence:"we play basketball" },
    { sentence:"we play tennis" },
    { sentence:"we play baseball" },
    { sentence:"we play volleyball" },
  ]},
  { id:"set23-favorite-foods", name:"Favorite Foods", items:[
    { sentence:"my favorite apple" },
    { sentence:"my favorite pasta" },
    { sentence:"my favorite pizza" },
    { sentence:"my favorite icecream" },
    { sentence:"my favorite bread" },
  ]},
  { id:"set24-superhero-sentences", name:"Superhero Sentences", items:[
    { sentence:"superman flies high" },
    { sentence:"batman is brave" },
    { sentence:"spiderman climbs walls" },
    { sentence:"hulk is strong" },
    { sentence:"wonderwoman saves people" },
  ]},
  { id:"set25-good-behavior", name:"Good Behavior", items:[
    { sentence:"we say please" },
    { sentence:"we say thankyou" },
    { sentence:"we share toys" },
    { sentence:"we help friends" },
    { sentence:"we be kind" },
  ]},
  { id:"set26-we-never", name:"We Never", items:[
    { sentence:"we never lie" },
    { sentence:"we never hurt" },
    { sentence:"we never yell" },
    { sentence:"we never take" },
    { sentence:"we never hide" },
  ]},
  { id:"set27-friend-comments", name:"Friend Comments", items:[
    { sentence:"friends are kind" },
    { sentence:"friends are caring" },
    { sentence:"friends are honest" },
    { sentence:"friends are fun" },
    { sentence:"friends are loyal" },
  ]},
  { id:"set28-my-favorite-places", name:"My Favorite Places", items:[
    { sentence:"I love home" },
    { sentence:"I love school" },
    { sentence:"I love park" },
    { sentence:"I love beach" },
    { sentence:"I love garden" },
  ]},
  { id:"set29-what-we-do", name:"What We Do", items:[
    { sentence:"we play together" },
    { sentence:"we laugh together" },
    { sentence:"we learn together" },
    { sentence:"we grow together" },
    { sentence:"we love together" },
  ]},
  { id:"set30-i-love-sentences-2", name:"I Love Sentences 2", items:[
    { sentence:"I love you" },
    { sentence:"I love us" },
    { sentence:"I love today" },
    { sentence:"I love forever" },
    { sentence:"I love everything" },
  ]},
];

export const KNOWLEDGE_MONTH1 = [
  { id:"kset1-epic-historical-women", name:"Epic Historical Women", items:[
    { id:"cleopatra", photoSeed:"cleopatra", facts:["Cleopatra was a queen of Egypt.", "She ruled over 2000 years ago.", "She spoke many different languages."] },
    { id:"joan_of_arc", photoSeed:"joan_of_arc", facts:["Joan of Arc was a hero from France.", "She led soldiers into battle.", "She lived 600 years ago."] },
    { id:"queen_victoria", photoSeed:"queen_victoria", facts:["Queen Victoria was the queen of England.", "She ruled for 63 years.", "She had nine children."] },
    { id:"amelia_earhart", photoSeed:"amelia_earhart", facts:["Amelia Earhart was a pilot.", "She flew a plane across the ocean.", "She was the first woman to do it."] },
    { id:"marie_curie", photoSeed:"marie_curie", facts:["Marie Curie was a scientist.", "She discovered new chemical elements.", "She won the Nobel Prize twice."] },
  ]},
  { id:"kset2-flags-of-europe", name:"Flags of Europe", items:[
    { id:"italy_flag", photoSeed:"italy_flag", facts:["This is the flag of Italy.", "It has green, white, and red stripes.", "Italy is a country in Europe."] },
    { id:"france_flag", photoSeed:"france_flag", facts:["This is the flag of France.", "It has blue, white, and red stripes.", "France is famous for the Eiffel Tower."] },
    { id:"germany_flag", photoSeed:"germany_flag", facts:["This is the flag of Germany.", "It has black, red, and yellow stripes.", "Germany is in the middle of Europe."] },
    { id:"spain_flag", photoSeed:"spain_flag", facts:["This is the flag of Spain.", "It has red and yellow bands.", "Spanish is spoken in Spain."] },
    { id:"uk_flag", photoSeed:"uk_flag", facts:["This is the flag of the United Kingdom.", "It is called the Union Jack.", "England, Scotland, and Wales are part of it."] },
  ]},
  { id:"kset3-landmarks", name:"Landmarks", items:[
    { id:"eiffel_tower", photoSeed:"eiffel_tower", facts:["This is the Eiffel Tower.", "It is in Paris, France.", "It is made of iron."] },
    { id:"great_wall", photoSeed:"great_wall", facts:["This is the Great Wall of China.", "It is thousands of miles long.", "It was built long ago for protection."] },
    { id:"statue_liberty", photoSeed:"statue_liberty", facts:["This is the Statue of Liberty.", "She stands in New York Harbor.", "France gave her to the United States as a gift."] },
    { id:"pyramid", photoSeed:"pyramid", facts:["These are the pyramids of Egypt.", "They are very, very old.", "They were built as tombs for kings."] },
    { id:"taj_mahal", photoSeed:"taj_mahal", facts:["This is the Taj Mahal.", "It is in India.", "It is made of white marble."] },
  ]},
  { id:"kset4-dog-breeds", name:"Dog Breeds", items:[
    { id:"labrador", photoSeed:"labrador", facts:["This is a Labrador.", "Labradors love to swim.", "They are friendly family dogs."] },
    { id:"poodle", photoSeed:"poodle", facts:["This is a poodle.", "Poodles have curly hair.", "They are very smart dogs."] },
    { id:"bulldog", photoSeed:"bulldog", facts:["This is a bulldog.", "Bulldogs have wrinkly faces.", "They are gentle and calm."] },
    { id:"husky", photoSeed:"husky", facts:["This is a husky.", "Huskies have thick fur to stay warm.", "They love cold and snowy weather."] },
    { id:"corgi", photoSeed:"corgi", facts:["This is a corgi.", "Corgis have short legs and big ears.", "The Queen of England loved corgis."] },
  ]},
  { id:"kset5-sport-balls", name:"Sport Balls", items:[
    { id:"soccer_ball", photoSeed:"soccer_ball", facts:["This is a soccer ball.", "Soccer is the most popular sport in the world.", "Players kick the ball with their feet."] },
    { id:"basketball", photoSeed:"basketball", facts:["This is a basketball.", "Players bounce it and throw it in a hoop.", "It has little bumps to help you grip it."] },
    { id:"baseball", photoSeed:"baseball", facts:["This is a baseball.", "It is small and hard.", "Players hit it with a bat."] },
    { id:"tennis_ball", photoSeed:"tennis_ball", facts:["This is a tennis ball.", "It is yellow and fuzzy.", "Players hit it with a racket."] },
    { id:"football", photoSeed:"football", facts:["This is an American football.", "It has a pointy shape.", "Players throw and catch it."] },
  ]},
  { id:"kset6-symbols-of-america", name:"Symbols of America", items:[
    { id:"bald_eagle", photoSeed:"bald_eagle", facts:["This is a bald eagle.", "It is the national bird of America.", "Bald eagles can fly very high."] },
    { id:"liberty_bell", photoSeed:"liberty_bell", facts:["This is the Liberty Bell.", "It is in Philadelphia.", "It has a famous big crack."] },
    { id:"american_flag", photoSeed:"american_flag", facts:["This is the American flag.", "It has fifty stars and thirteen stripes.", "The stars stand for the fifty states."] },
    { id:"white_house", photoSeed:"white_house", facts:["This is the White House.", "The president of the United States lives here.", "It is in Washington, D.C."] },
    { id:"mt_rushmore", photoSeed:"mt_rushmore", facts:["This is Mount Rushmore.", "Four presidents' faces are carved into the rock.", "It is in South Dakota."] },
  ]},
  { id:"kset7-flags-of-asia", name:"Flags of Asia", items:[
    { id:"japan_flag", photoSeed:"japan_flag", facts:["This is the flag of Japan.", "It has a red circle on a white background.", "The circle stands for the sun."] },
    { id:"china_flag", photoSeed:"china_flag", facts:["This is the flag of China.", "It is red with yellow stars.", "China is a very big country."] },
    { id:"korea_flag", photoSeed:"korea_flag", facts:["This is the flag of South Korea.", "It has a red and blue circle in the middle.", "The circle is called Taegeuk."] },
    { id:"india_flag", photoSeed:"india_flag", facts:["This is the flag of India.", "It has orange, white, and green stripes.", "A blue wheel is in the middle."] },
    { id:"vietnam_flag", photoSeed:"vietnam_flag", facts:["This is the flag of Vietnam.", "It is red with a yellow star.", "Vietnam is in Southeast Asia."] },
  ]},
  { id:"kset8-big-cats", name:"Big Cats", items:[
    { id:"lion", photoSeed:"lion", facts:["This is a lion.", "Male lions have a big furry mane.", "Lions are called the king of the jungle."] },
    { id:"tiger", photoSeed:"tiger", facts:["This is a tiger.", "Tigers have orange fur with black stripes.", "Every tiger has different stripes."] },
    { id:"leopard", photoSeed:"leopard", facts:["This is a leopard.", "Leopards have spots all over their fur.", "They can climb trees very well."] },
    { id:"cheetah", photoSeed:"cheetah", facts:["This is a cheetah.", "Cheetahs are the fastest land animals.", "They can run as fast as a car."] },
    { id:"jaguar", photoSeed:"jaguar", facts:["This is a jaguar.", "Jaguars live in the rainforest.", "They are excellent swimmers."] },
  ]},
  { id:"kset9-kinds-of-automobiles", name:"Kinds of Automobiles", items:[
    { id:"sedan", photoSeed:"sedan", facts:["This is a sedan.", "A sedan is a family car.", "It has four doors and a trunk."] },
    { id:"suv", photoSeed:"suv", facts:["This is an SUV.", "SUV stands for sport utility vehicle.", "It sits up high off the ground."] },
    { id:"sportscar", photoSeed:"sportscar", facts:["This is a sports car.", "Sports cars are very fast.", "They are low to the ground."] },
    { id:"pickup", photoSeed:"pickup", facts:["This is a pickup truck.", "It has a big open back for carrying things.", "Farmers and builders use pickups."] },
    { id:"convertible", photoSeed:"convertible", facts:["This is a convertible.", "The roof can fold down.", "You can feel the wind in your hair."] },
  ]},
  { id:"kset10-inspirational-people", name:"Inspirational People", items:[
    { id:"mlk", photoSeed:"mlk", facts:["This is Martin Luther King Jr.", "He fought for fairness and equal rights.", "He gave a famous speech called I Have a Dream."] },
    { id:"gandhi", photoSeed:"gandhi", facts:["This is Mahatma Gandhi.", "He helped India become free.", "He believed in peaceful change."] },
    { id:"mandela", photoSeed:"mandela", facts:["This is Nelson Mandela.", "He became the president of South Africa.", "He worked to end unfair rules."] },
    { id:"mother_teresa", photoSeed:"mother_teresa", facts:["This is Mother Teresa.", "She spent her life helping the poor.", "She won the Nobel Peace Prize."] },
    { id:"einstein", photoSeed:"einstein", facts:["This is Albert Einstein.", "He was a very famous scientist.", "He figured out how time and space work."] },
  ]},
  { id:"kset11-african-animals", name:"African Animals", items:[
    { id:"elephant", photoSeed:"elephant", facts:["This is an elephant.", "Elephants are the biggest land animals.", "They use their long trunks to grab food."] },
    { id:"giraffe", photoSeed:"giraffe", facts:["This is a giraffe.", "Giraffes are the tallest animals on Earth.", "They have very long necks to reach leaves."] },
    { id:"zebra", photoSeed:"zebra", facts:["This is a zebra.", "Zebras have black and white stripes.", "Every zebra's stripes are different."] },
    { id:"lion", photoSeed:"lion", facts:["This is a lion.", "Male lions have a big furry mane.", "Lions are called the king of the jungle."] },
    { id:"rhinoceros", photoSeed:"rhinoceros", facts:["This is a rhinoceros.", "Rhinos have horns on their noses.", "They have very thick skin like armor."] },
  ]},
  { id:"kset12-international-cuisine", name:"International Cuisine", items:[
    { id:"sushi", photoSeed:"sushi", facts:["This is sushi.", "Sushi comes from Japan.", "It is made with rice and fish."] },
    { id:"pizza", photoSeed:"pizza", facts:["This is pizza.", "Pizza comes from Italy.", "It has cheese, sauce, and dough."] },
    { id:"tacos", photoSeed:"tacos", facts:["These are tacos.", "Tacos come from Mexico.", "They are folded tortillas with tasty fillings."] },
    { id:"curry", photoSeed:"curry", facts:["This is curry.", "Curry comes from India.", "It uses warm, colorful spices."] },
    { id:"croissant", photoSeed:"croissant", facts:["This is a croissant.", "Croissants come from France.", "They are flaky and shaped like a crescent moon."] },
  ]},
];

export const KNOWLEDGE_MONTH2 = [
  { id:"kset1-historic-landmarks", name:"Historic Landmarks", items:[
    { id:"colosseum", photoSeed:"colosseum", facts:["This is the Colosseum.", "It is in Rome, Italy.", "It was built almost 2000 years ago."] },
    { id:"acropolis", photoSeed:"acropolis", facts:["This is the Acropolis.", "It stands on a hill in Athens, Greece.", "The most famous building on it is the Parthenon."] },
    { id:"machu_picchu", photoSeed:"machu_picchu", facts:["This is Machu Picchu.", "It is high up in the mountains of Peru.", "The Inca people built it long ago."] },
    { id:"angkor_wat", photoSeed:"angkor_wat", facts:["This is Angkor Wat.", "It is in Cambodia.", "It is the largest temple in the world."] },
    { id:"stonehenge", photoSeed:"stonehenge", facts:["This is Stonehenge.", "It is in England.", "People built it thousands of years ago."] },
  ]},
  { id:"kset2-technology", name:"Technology", items:[
    { id:"smartphone", photoSeed:"smartphone", facts:["This is a smartphone.", "It can call, text, and take pictures.", "Most people carry one in their pocket."] },
    { id:"laptop", photoSeed:"laptop", facts:["This is a laptop computer.", "It folds open like a book.", "You can take it anywhere you go."] },
    { id:"headphones", photoSeed:"headphones", facts:["These are headphones.", "You wear them over your ears.", "They let you listen to music quietly."] },
    { id:"drone", photoSeed:"drone", facts:["This is a drone.", "It flies like a tiny helicopter.", "A person controls it from the ground."] },
    { id:"smartwatch", photoSeed:"smartwatch", facts:["This is a smartwatch.", "You wear it on your wrist.", "It tells time and counts your steps."] },
  ]},
  { id:"kset3-sports", name:"Sports", items:[
    { id:"basketball", photoSeed:"basketball", facts:["This is basketball.", "Players throw the ball into a hoop.", "It was invented in America."] },
    { id:"soccer", photoSeed:"soccer", facts:["This is soccer.", "Players kick the ball into a goal.", "Most of the world calls it football."] },
    { id:"tennis", photoSeed:"tennis", facts:["This is tennis.", "Players hit a ball over a net with rackets.", "Famous tournaments include Wimbledon."] },
    { id:"golf", photoSeed:"golf", facts:["This is golf.", "Players hit a small ball into a hole.", "They use different clubs for different shots."] },
    { id:"surfing", photoSeed:"surfing", facts:["This is surfing.", "Surfers ride ocean waves on a board.", "It is popular in Hawaii and Australia."] },
  ]},
  { id:"kset4-presidents-of-the-usa", name:"Presidents of the USA", items:[
    { id:"washington", photoSeed:"washington", facts:["This is George Washington.", "He was the first president of America.", "His face is on the one-dollar bill."] },
    { id:"lincoln", photoSeed:"lincoln", facts:["This is Abraham Lincoln.", "He was the sixteenth president.", "He helped end slavery in America."] },
    { id:"jefferson", photoSeed:"jefferson", facts:["This is Thomas Jefferson.", "He wrote the Declaration of Independence.", "He was the third president of America."] },
    { id:"roosevelt", photoSeed:"roosevelt", facts:["This is Franklin D. Roosevelt.", "He led America through tough times.", "He was president for twelve years."] },
    { id:"kennedy", photoSeed:"kennedy", facts:["This is John F. Kennedy.", "He was the thirty-fifth president.", "He wanted to send people to the moon."] },
  ]},
  { id:"kset5-kinds-of-transport", name:"Kinds of Transport", items:[
    { id:"airplane", photoSeed:"airplane", facts:["This is an airplane.", "Airplanes fly high in the sky.", "They carry people all over the world."] },
    { id:"ship", photoSeed:"ship", facts:["This is a ship.", "Ships sail on the ocean.", "Some ships are as big as a small town."] },
    { id:"train", photoSeed:"train", facts:["This is a train.", "Trains travel on long metal tracks.", "They can carry many people or things."] },
    { id:"helicopter", photoSeed:"helicopter", facts:["This is a helicopter.", "It has big spinning blades on top.", "It can hover in one spot in the air."] },
    { id:"bicycle", photoSeed:"bicycle", facts:["This is a bicycle.", "You pedal it with your feet.", "It is a fun way to get around."] },
  ]},
  { id:"kset6-flags-of-the-americas", name:"Flags of the Americas", items:[
    { id:"usa_flag", photoSeed:"usa_flag", facts:["This is the flag of the USA.", "It has fifty stars and thirteen stripes.", "People call it the Stars and Stripes."] },
    { id:"canada_flag", photoSeed:"canada_flag", facts:["This is the flag of Canada.", "It has a red maple leaf in the middle.", "Canada is north of the United States."] },
    { id:"mexico_flag", photoSeed:"mexico_flag", facts:["This is the flag of Mexico.", "It has green, white, and red stripes.", "An eagle on a cactus is in the middle."] },
    { id:"brazil_flag", photoSeed:"brazil_flag", facts:["This is the flag of Brazil.", "It is green with a big yellow diamond.", "A blue globe with stars is in the middle."] },
    { id:"argentina_flag", photoSeed:"argentina_flag", facts:["This is the flag of Argentina.", "It has blue and white stripes.", "A golden sun is in the middle."] },
  ]},
  { id:"kset7-organs", name:"Organs", items:[
    { id:"heart", photoSeed:"heart", facts:["This is the heart.", "It pumps blood through the body.", "You can feel it beating in your chest."] },
    { id:"brain", photoSeed:"brain", facts:["This is the brain.", "It sits inside your head.", "It helps you think, feel, and remember."] },
    { id:"lungs", photoSeed:"lungs", facts:["These are the lungs.", "They help you breathe air.", "You have two of them in your chest."] },
    { id:"liver", photoSeed:"liver", facts:["This is the liver.", "It cleans the blood.", "It is the largest organ inside the body."] },
    { id:"kidneys", photoSeed:"kidneys", facts:["These are the kidneys.", "They filter out water and waste.", "You have two of them, one on each side."] },
  ]},
  { id:"kset8-occupations", name:"Occupations", items:[
    { id:"doctor", photoSeed:"doctor", facts:["This is a doctor.", "Doctors help people feel better when they are sick.", "They go to school for many years to learn."] },
    { id:"teacher", photoSeed:"teacher", facts:["This is a teacher.", "Teachers help children learn new things.", "They make school fun and interesting."] },
    { id:"architect", photoSeed:"architect", facts:["This is an architect.", "Architects design buildings and houses.", "They draw plans before builders build."] },
    { id:"chef", photoSeed:"chef", facts:["This is a chef.", "Chefs cook food in restaurants.", "They wear tall white hats."] },
    { id:"scientist", photoSeed:"scientist", facts:["This is a scientist.", "Scientists study how the world works.", "They do experiments to find answers."] },
  ]},
  { id:"kset9-musical-instruments", name:"Musical Instruments", items:[
    { id:"piano", photoSeed:"piano", facts:["This is a piano.", "It has black and white keys.", "You press the keys to play music."] },
    { id:"guitar", photoSeed:"guitar", facts:["This is a guitar.", "It has six strings.", "You strum the strings to make sounds."] },
    { id:"violin", photoSeed:"violin", facts:["This is a violin.", "You hold it under your chin.", "You play it with a bow on four strings."] },
    { id:"drums", photoSeed:"drums", facts:["These are drums.", "You hit them with sticks.", "They keep the beat in music."] },
    { id:"flute", photoSeed:"flute", facts:["This is a flute.", "You blow across it to make music.", "It makes a high, sweet sound."] },
  ]},
  { id:"kset10-fruit", name:"Fruit", items:[
    { id:"mango", photoSeed:"mango", facts:["This is a mango.", "Mangoes are sweet tropical fruit.", "They have a big seed in the middle."] },
    { id:"pineapple", photoSeed:"pineapple", facts:["This is a pineapple.", "It is spiky on the outside.", "The inside is juicy and yellow."] },
    { id:"kiwi", photoSeed:"kiwi", facts:["This is a kiwi fruit.", "It is fuzzy and brown on the outside.", "The inside is bright green with tiny seeds."] },
    { id:"dragonfruit", photoSeed:"dragonfruit", facts:["This is a dragonfruit.", "It looks like pink and green flames.", "The inside is white with little black seeds."] },
    { id:"papaya", photoSeed:"papaya", facts:["This is a papaya.", "It is orange on the inside.", "Papayas grow in warm, tropical places."] },
  ]},
  { id:"kset11-exotic-birds", name:"Exotic Birds", items:[
    { id:"peacock", photoSeed:"peacock", facts:["This is a peacock.", "Its tail has huge, shiny feathers.", "When it shows its tail, it looks like a fan."] },
    { id:"parrot", photoSeed:"parrot", facts:["This is a parrot.", "Parrots have bright, colorful feathers.", "Some parrots can copy what people say."] },
    { id:"flamingo", photoSeed:"flamingo", facts:["This is a flamingo.", "Flamingoes are pink birds.", "They stand on one leg to rest."] },
    { id:"toucan", photoSeed:"toucan", facts:["This is a toucan.", "It has a huge, colorful beak.", "Toucans live in the rainforest."] },
    { id:"hornbill", photoSeed:"hornbill", facts:["This is a hornbill.", "It has a big, curved beak.", "Some have a helmet on top of their beak."] },
  ]},
  { id:"kset12-african-countries", name:"African Countries", items:[
    { id:"egypt", photoSeed:"egypt", facts:["This is Egypt.", "It is a country in North Africa.", "The Nile, a very long river, flows through it."] },
    { id:"kenya", photoSeed:"kenya", facts:["This is Kenya.", "It is a country in East Africa.", "Elephants, lions, and giraffes live there."] },
    { id:"nigeria", photoSeed:"nigeria", facts:["This is Nigeria.", "It is a country in West Africa.", "More people live there than in any other African country."] },
    { id:"morocco", photoSeed:"morocco", facts:["This is Morocco.", "It is a country in North Africa.", "Part of Morocco is in the Sahara Desert."] },
    { id:"southafrica", photoSeed:"southafrica", facts:["This is South Africa.", "It is at the southern tip of Africa.", "It has mountains, beaches, and safari parks."] },
  ]},
];

export const KNOWLEDGE_MONTH3 = [
  { id:"kset1-european-countries", name:"European Countries", items:[
    { id:"france_map", photoSeed:"france_map", facts:[null,null,null] },
    { id:"germany_map", photoSeed:"germany_map", facts:[null,null,null] },
    { id:"italy_map", photoSeed:"italy_map", facts:[null,null,null] },
    { id:"spain_map", photoSeed:"spain_map", facts:[null,null,null] },
    { id:"uk_map", photoSeed:"uk_map", facts:[null,null,null] },
  ]},
  { id:"kset2-sports", name:"Sports", items:[
    { id:"hockey", photoSeed:"hockey", facts:[null,null,null] },
    { id:"boxing", photoSeed:"boxing", facts:[null,null,null] },
    { id:"gymnastics", photoSeed:"gymnastics", facts:[null,null,null] },
    { id:"skiing", photoSeed:"skiing", facts:[null,null,null] },
    { id:"cycling", photoSeed:"cycling", facts:[null,null,null] },
  ]},
  { id:"kset3-types-of-cars", name:"Types of Cars", items:[
    { id:"ferrari", photoSeed:"ferrari", facts:[null,null,null] },
    { id:"tesla", photoSeed:"tesla", facts:[null,null,null] },
    { id:"mustang", photoSeed:"mustang", facts:[null,null,null] },
    { id:"jeep", photoSeed:"jeep", facts:[null,null,null] },
    { id:"minivan", photoSeed:"minivan", facts:[null,null,null] },
  ]},
  { id:"kset4-flowers", name:"Flowers", items:[
    { id:"rose", photoSeed:"rose", facts:[null,null,null] },
    { id:"tulip", photoSeed:"tulip", facts:[null,null,null] },
    { id:"sunflower", photoSeed:"sunflower", facts:[null,null,null] },
    { id:"orchid", photoSeed:"orchid", facts:[null,null,null] },
    { id:"daisy", photoSeed:"daisy", facts:[null,null,null] },
  ]},
  { id:"kset5-canines", name:"Canines", items:[
    { id:"wolf", photoSeed:"wolf", facts:[null,null,null] },
    { id:"fox", photoSeed:"fox", facts:[null,null,null] },
    { id:"coyote", photoSeed:"coyote", facts:[null,null,null] },
    { id:"jackal", photoSeed:"jackal", facts:[null,null,null] },
    { id:"dingo", photoSeed:"dingo", facts:[null,null,null] },
  ]},
  { id:"kset6-berries", name:"Berries", items:[
    { id:"strawberry", photoSeed:"strawberry", facts:[null,null,null] },
    { id:"blueberry", photoSeed:"blueberry", facts:[null,null,null] },
    { id:"raspberry", photoSeed:"raspberry", facts:[null,null,null] },
    { id:"blackberry", photoSeed:"blackberry", facts:[null,null,null] },
    { id:"goji", photoSeed:"goji", facts:[null,null,null] },
  ]},
  { id:"kset7-dog-breeds-2", name:"Dog Breeds 2", items:[
    { id:"goldendoodle", photoSeed:"goldendoodle", facts:[null,null,null] },
    { id:"shiba_inu", photoSeed:"shiba_inu", facts:[null,null,null] },
    { id:"samoyed", photoSeed:"samoyed", facts:[null,null,null] },
    { id:"beagle", photoSeed:"beagle", facts:[null,null,null] },
    { id:"boxer", photoSeed:"boxer", facts:[null,null,null] },
  ]},
  { id:"kset8-frogs", name:"Frogs", items:[
    { id:"tree_frog", photoSeed:"tree_frog", facts:[null,null,null] },
    { id:"bullfrog", photoSeed:"bullfrog", facts:[null,null,null] },
    { id:"poison_dart", photoSeed:"poison_dart", facts:[null,null,null] },
    { id:"glass_frog", photoSeed:"glass_frog", facts:[null,null,null] },
    { id:"wood_frog", photoSeed:"wood_frog", facts:[null,null,null] },
  ]},
  { id:"kset9-dinosaurs", name:"Dinosaurs", items:[
    { id:"trex", photoSeed:"trex", facts:[null,null,null] },
    { id:"triceratops", photoSeed:"triceratops", facts:[null,null,null] },
    { id:"brachiosaurus", photoSeed:"brachiosaurus", facts:[null,null,null] },
    { id:"velociraptor", photoSeed:"velociraptor", facts:[null,null,null] },
    { id:"stegosaurus", photoSeed:"stegosaurus", facts:[null,null,null] },
  ]},
  { id:"kset10-important-scientists", name:"Important Scientists", items:[
    { id:"einstein", photoSeed:"einstein", facts:[null,null,null] },
    { id:"newton", photoSeed:"newton", facts:[null,null,null] },
    { id:"darwin", photoSeed:"darwin", facts:[null,null,null] },
    { id:"curie", photoSeed:"curie", facts:[null,null,null] },
    { id:"hawking", photoSeed:"hawking", facts:[null,null,null] },
  ]},
  { id:"kset11-musical-instruments-2", name:"Musical Instruments 2", items:[
    { id:"cello", photoSeed:"cello", facts:[null,null,null] },
    { id:"trumpet", photoSeed:"trumpet", facts:[null,null,null] },
    { id:"saxophone", photoSeed:"saxophone", facts:[null,null,null] },
    { id:"harp", photoSeed:"harp", facts:[null,null,null] },
    { id:"banjo", photoSeed:"banjo", facts:[null,null,null] },
  ]},
  { id:"kset12-parts-of-a-computer", name:"Parts of a Computer", items:[
    { id:"monitor", photoSeed:"monitor", facts:[null,null,null] },
    { id:"keyboard", photoSeed:"keyboard", facts:[null,null,null] },
    { id:"mouse", photoSeed:"mouse", facts:[null,null,null] },
    { id:"cpu", photoSeed:"cpu", facts:[null,null,null] },
    { id:"motherboard", photoSeed:"motherboard", facts:[null,null,null] },
  ]},
];

export const WORDS_BY_MONTH =    [null, WORDS_MONTH1, WORDS_MONTH2, WORDS_MONTH3];
export const COUPLETS_BY_MONTH = [null, null,         COUPLETS_MONTH2, null];
export const SENTENCES_BY_MONTH= [null, null,         null,           SENTENCES_MONTH3];
export const KNOWLEDGE_BY_MONTH= [null, KNOWLEDGE_MONTH1, KNOWLEDGE_MONTH2, KNOWLEDGE_MONTH3];