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
  // Family extended
  "sister": { Spanish:"hermana", French:"sœur", German:"schwester", Italian:"sorella", Portuguese:"irmã", "Portuguese (Brazil)":"irmã", Russian:"сестра", "Chinese (Mandarin)":"姐妹", "Chinese (Cantonese)":"姊妹", Japanese:"しまい", Korean:"자매", Hebrew:"אחות", Arabic:"أخت", Hindi:"बहन", Vietnamese:"chị em", Turkish:"kız kardeş" },
  "brother": { Spanish:"hermano", French:"frère", German:"bruder", Italian:"fratello", Portuguese:"irmão", "Portuguese (Brazil)":"irmão", Russian:"брат", "Chinese (Mandarin)":"兄弟", "Chinese (Cantonese)":"兄弟", Japanese:"きょうだい", Korean:"형제", Hebrew:"אח", Arabic:"أخ", Hindi:"भाई", Vietnamese:"anh em", Turkish:"erkek kardeş" },
  "grandma": { Spanish:"abuela", French:"mamie", German:"oma", Italian:"nonna", Portuguese:"avó", "Portuguese (Brazil)":"vovó", Russian:"бабушка", "Chinese (Mandarin)":"奶奶", "Chinese (Cantonese)":"嫲嫲", Japanese:"おばあちゃん", Korean:"할머니", Hebrew:"סבתא", Arabic:"جدة", Hindi:"दादी", Vietnamese:"bà", Turkish:"nine" },
  "grandpa": { Spanish:"abuelo", French:"papi", German:"opa", Italian:"nonno", Portuguese:"avô", "Portuguese (Brazil)":"vovô", Russian:"дедушка", "Chinese (Mandarin)":"爷爷", "Chinese (Cantonese)":"爺爺", Japanese:"おじいちゃん", Korean:"할아버지", Hebrew:"סבא", Arabic:"جد", Hindi:"दादा", Vietnamese:"ông", Turkish:"dede" },
  "aunt": { Spanish:"tía", French:"tante", German:"tante", Italian:"zia", Portuguese:"tia", "Portuguese (Brazil)":"tia", Russian:"тётя", "Chinese (Mandarin)":"阿姨", "Chinese (Cantonese)":"阿姨", Japanese:"おば", Korean:"이모", Hebrew:"דודה", Arabic:"عمة", Hindi:"चाची", Vietnamese:"cô", Turkish:"teyze" },
  "uncle": { Spanish:"tío", French:"oncle", German:"onkel", Italian:"zio", Portuguese:"tio", "Portuguese (Brazil)":"tio", Russian:"дядя", "Chinese (Mandarin)":"叔叔", "Chinese (Cantonese)":"叔叔", Japanese:"おじ", Korean:"삼촌", Hebrew:"דוד", Arabic:"عم", Hindi:"चाचा", Vietnamese:"chú", Turkish:"amca" },
  "cousin": { Spanish:"primo", French:"cousin", German:"cousin", Italian:"cugino", Portuguese:"primo", "Portuguese (Brazil)":"primo", Russian:"кузен", Japanese:"いとこ", Korean:"사촌", Hebrew:"בן דוד", Arabic:"ابن عم", Hindi:"चचेरा भाई", Vietnamese:"anh họ", Turkish:"kuzen" },

  // Farm animals
  "cow":     { Spanish:"vaca", French:"vache", German:"kuh", Italian:"mucca", Portuguese:"vaca", "Portuguese (Brazil)":"vaca", Russian:"корова", "Chinese (Mandarin)":"牛", "Chinese (Cantonese)":"牛", Japanese:"うし", Korean:"소", Hebrew:"פרה", Arabic:"بقرة", Hindi:"गाय", Vietnamese:"bò", Turkish:"inek" },
  "chicken": { Spanish:"pollo", French:"poule", German:"huhn", Italian:"gallina", Portuguese:"galinha", "Portuguese (Brazil)":"galinha", Russian:"курица", "Chinese (Mandarin)":"鸡", "Chinese (Cantonese)":"雞", Japanese:"にわとり", Korean:"닭", Hebrew:"תרנגולת", Arabic:"دجاجة", Hindi:"मुर्गी", Vietnamese:"gà", Turkish:"tavuk" },
  "duck":    { Spanish:"pato", French:"canard", German:"ente", Italian:"anatra", Portuguese:"pato", "Portuguese (Brazil)":"pato", Russian:"утка", "Chinese (Mandarin)":"鸭子", "Chinese (Cantonese)":"鴨", Japanese:"あひる", Korean:"오리", Hebrew:"ברווז", Arabic:"بطة", Hindi:"बतख", Vietnamese:"vịt", Turkish:"ördek" },
  "sheep":   { Spanish:"oveja", French:"mouton", German:"schaf", Italian:"pecora", Portuguese:"ovelha", "Portuguese (Brazil)":"ovelha", Russian:"овца", "Chinese (Mandarin)":"羊", "Chinese (Cantonese)":"羊", Japanese:"ひつじ", Korean:"양", Hebrew:"כבש", Arabic:"خروف", Hindi:"भेड़", Vietnamese:"cừu", Turkish:"koyun" },
  "pig":     { Spanish:"cerdo", French:"cochon", German:"schwein", Italian:"maiale", Portuguese:"porco", "Portuguese (Brazil)":"porco", Russian:"свинья", "Chinese (Mandarin)":"猪", "Chinese (Cantonese)":"豬", Japanese:"ぶた", Korean:"돼지", Hebrew:"חזיר", Arabic:"خنزير", Hindi:"सुअर", Vietnamese:"lợn", Turkish:"domuz" },

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

// ── CEFR MAPPING ─────────────────────────────────────────────────────────────
// Rough vocabulary-count → CEFR-adjacent milestones. This is an approximation
// for parent motivation, not a formal CEFR assessment.

export const CEFR_MILESTONES = [
  { max: 30,   level: "Pre-A1", description: "Building first words" },
  { max: 100,  level: "Approaching A1", description: "Early beginner vocabulary" },
  { max: 250,  level: "Approaching A2", description: "Elementary vocabulary" },
  { max: 500,  level: "Approaching B1", description: "Intermediate vocabulary" },
  { max: 1000, level: "Approaching B2", description: "Upper-intermediate vocabulary" },
  { max: 2500, level: "Approaching C1", description: "Advanced vocabulary" },
  { max: Infinity, level: "Approaching C2 / Graduate", description: "Near-native vocabulary" },
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

// Combine items from 3 sets into an 11-card deck.
// Take 5 from set A, 5 from set B, 1 from set C — or whatever fits to 11.
export function buildDeckFromSets(rollingSets) {
  const out = [];
  for (const s of rollingSets) {
    for (const item of s.items) {
      out.push({ ...item, setName: s.name, setId: s.id });
      if (out.length >= 11) return out.slice(0, 11);
    }
  }
  return out.slice(0, 11);
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
