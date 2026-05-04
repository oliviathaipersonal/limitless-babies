// Knowledge-card fact translations for the EncyclopediaSession (M4-M6).
//
// FORMAT
//   KNOWLEDGE_FACT_TRANSLATIONS[cardId][language] = ["fact1", "fact2", "fact3"]
// where the array length matches the English `facts` array in curriculum.js.
//
// LOOKUP CONVENTION
//   - Keys are the card.id strings from KNOWLEDGE_BY_MONTH (e.g. "cleopatra",
//     "italy_flag", "eiffel_tower"). IDs MUST match curriculum.js exactly.
//   - Language strings match the LANGUAGES array exactly (e.g. "Portuguese
//     (Brazil)", "Chinese (Mandarin-Simplified)"). Mismatches → no translation.
//   - If a translation is missing for a (card, language) pair, the renderer
//     falls back to the English fact — no error, just untranslated.
//
// COVERAGE STATUS (May 2026)
//   This file is being filled in incrementally. Current coverage:
//     - Portuguese (Brazil): M1 fully covered (60 cards). M2/M3 pending.
//     - Spanish:             M1 fully covered (60 cards). M2/M3 pending.
//     - All other tester languages: 0% — handled by the bulk-translation
//       script at scripts/translate-knowledge.mjs.
//
// HOW TO ADD MORE LANGUAGES OR CARDS
//   1. Run `node scripts/translate-knowledge.mjs --langs "French,Italian" --months 1,2`
//      with ANTHROPIC_API_KEY set. The script reads curriculum.js, translates
//      missing entries via Claude, and patches this file.
//   2. Manually review a few — Claude is strong at this but kid-content
//      sometimes wants softer phrasing.
//   3. `npm run build` to verify no syntax errors.
//
// QUALITY NOTES
//   - Facts are read aloud to babies. Translations should be SHORT, NATURAL,
//     and grammatically simple — match the register of children's books.
//   - For Brazilian Portuguese prefer "você" over "tu". Avoid Portugal-isms.
//   - For Spanish, default to neutral Latin American Spanish.
//   - Numbers/proper names/brand-like terms can stay in their native form
//     when natural ("Eiffel" stays "Eiffel" in PT-BR).

export const KNOWLEDGE_FACT_TRANSLATIONS = {
  // ─────────────────────────────────────────────────────────────────────────
  // MONTH 1 — 12 sets × 5 cards = 60 cards
  // ─────────────────────────────────────────────────────────────────────────

  // M1 S1: Epic Historical Women
  cleopatra: {
    "Portuguese (Brazil)": ["Cleópatra foi uma rainha do Egito.", "Ela governou há mais de 2000 anos.", "Ela falava muitas línguas diferentes."],
    "Spanish": ["Cleopatra fue una reina de Egipto.", "Gobernó hace más de 2000 años.", "Hablaba muchos idiomas diferentes."],
  },
  joan_of_arc: {
    "Portuguese (Brazil)": ["Joana d'Arc foi uma heroína da França.", "Ela liderou soldados em batalha.", "Ela viveu há 600 anos."],
    "Spanish": ["Juana de Arco fue una heroína de Francia.", "Lideró a soldados en la batalla.", "Vivió hace 600 años."],
  },
  queen_victoria: {
    "Portuguese (Brazil)": ["A rainha Vitória foi rainha da Inglaterra.", "Ela reinou por 63 anos.", "Ela teve nove filhos."],
    "Spanish": ["La reina Victoria fue la reina de Inglaterra.", "Reinó durante 63 años.", "Tuvo nueve hijos."],
  },
  amelia_earhart: {
    "Portuguese (Brazil)": ["Amelia Earhart foi uma piloto.", "Ela voou um avião pelo oceano.", "Ela foi a primeira mulher a fazer isso."],
    "Spanish": ["Amelia Earhart fue piloto.", "Voló un avión cruzando el océano.", "Fue la primera mujer en hacerlo."],
  },
  marie_curie: {
    "Portuguese (Brazil)": ["Marie Curie foi uma cientista.", "Ela descobriu novos elementos químicos.", "Ela ganhou o prêmio Nobel duas vezes."],
    "Spanish": ["Marie Curie fue una científica.", "Descubrió nuevos elementos químicos.", "Ganó el Premio Nobel dos veces."],
  },

  // M1 S2: Flags of Europe
  italy_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira da Itália.", "Ela tem listras verde, branca e vermelha.", "A Itália é um país da Europa."],
    "Spanish": ["Esta es la bandera de Italia.", "Tiene franjas verdes, blancas y rojas.", "Italia es un país de Europa."],
  },
  france_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira da França.", "Ela tem listras azul, branca e vermelha.", "A França é famosa pela Torre Eiffel."],
    "Spanish": ["Esta es la bandera de Francia.", "Tiene franjas azules, blancas y rojas.", "Francia es famosa por la Torre Eiffel."],
  },
  germany_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira da Alemanha.", "Ela tem listras preta, vermelha e amarela.", "A Alemanha fica no meio da Europa."],
    "Spanish": ["Esta es la bandera de Alemania.", "Tiene franjas negras, rojas y amarillas.", "Alemania está en el centro de Europa."],
  },
  spain_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira da Espanha.", "Ela tem faixas vermelhas e amarelas.", "Na Espanha se fala espanhol."],
    "Spanish": ["Esta es la bandera de España.", "Tiene franjas rojas y amarillas.", "En España se habla español."],
  },
  uk_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira do Reino Unido.", "Ela é chamada de Union Jack.", "Inglaterra, Escócia e País de Gales fazem parte dele."],
    "Spanish": ["Esta es la bandera del Reino Unido.", "Se llama Union Jack.", "Inglaterra, Escocia y Gales forman parte de él."],
  },

  // M1 S3: Landmarks
  eiffel_tower: {
    "Portuguese (Brazil)": ["Esta é a Torre Eiffel.", "Ela fica em Paris, na França.", "Ela é feita de ferro."],
    "Spanish": ["Esta es la Torre Eiffel.", "Está en París, Francia.", "Está hecha de hierro."],
  },
  great_wall: {
    "Portuguese (Brazil)": ["Esta é a Grande Muralha da China.", "Ela tem milhares de quilômetros de comprimento.", "Foi construída há muito tempo para proteção."],
    "Spanish": ["Esta es la Gran Muralla China.", "Mide miles de kilómetros de largo.", "Se construyó hace mucho tiempo como protección."],
  },
  statue_liberty: {
    "Portuguese (Brazil)": ["Esta é a Estátua da Liberdade.", "Ela fica no porto de Nova York.", "A França deu ela de presente para os Estados Unidos."],
    "Spanish": ["Esta es la Estatua de la Libertad.", "Está en el puerto de Nueva York.", "Francia se la regaló a Estados Unidos."],
  },
  pyramid: {
    "Portuguese (Brazil)": ["Estas são as pirâmides do Egito.", "Elas são muito, muito antigas.", "Foram construídas como tumbas para reis."],
    "Spanish": ["Estas son las pirámides de Egipto.", "Son muy, muy antiguas.", "Fueron construidas como tumbas para los reyes."],
  },
  taj_mahal: {
    "Portuguese (Brazil)": ["Este é o Taj Mahal.", "Ele fica na Índia.", "Ele é feito de mármore branco."],
    "Spanish": ["Este es el Taj Mahal.", "Está en la India.", "Está hecho de mármol blanco."],
  },

  // M1 S4: Dog Breeds
  labrador: {
    "Portuguese (Brazil)": ["Este é um labrador.", "Labradores adoram nadar.", "Eles são cachorros amigáveis e ótimos para a família."],
    "Spanish": ["Este es un labrador.", "A los labradores les encanta nadar.", "Son perros amigables y buenos para la familia."],
  },
  poodle: {
    "Portuguese (Brazil)": ["Este é um poodle.", "Poodles têm pelos cacheados.", "Eles são cachorros muito espertos."],
    "Spanish": ["Este es un caniche.", "Los caniches tienen el pelo rizado.", "Son perros muy inteligentes."],
  },
  bulldog: {
    "Portuguese (Brazil)": ["Este é um buldogue.", "Buldogues têm o focinho enrugado.", "Eles são gentis e calmos."],
    "Spanish": ["Este es un bulldog.", "Los bulldogs tienen la cara arrugada.", "Son gentiles y tranquilos."],
  },
  husky: {
    "Portuguese (Brazil)": ["Este é um husky.", "Huskies têm pelo grosso para se manter aquecidos.", "Eles adoram tempo frio e com neve."],
    "Spanish": ["Este es un husky.", "Los huskies tienen pelaje grueso para mantenerse abrigados.", "Les encanta el clima frío y con nieve."],
  },
  corgi: {
    "Portuguese (Brazil)": ["Este é um corgi.", "Corgis têm pernas curtas e orelhas grandes.", "A rainha da Inglaterra adorava corgis."],
    "Spanish": ["Este es un corgi.", "Los corgis tienen patas cortas y orejas grandes.", "A la reina de Inglaterra le encantaban los corgis."],
  },

  // M1 S5: Sport Balls
  soccer_ball: {
    "Portuguese (Brazil)": ["Esta é uma bola de futebol.", "O futebol é o esporte mais popular do mundo.", "Os jogadores chutam a bola com os pés."],
    "Spanish": ["Esta es un balón de fútbol.", "El fútbol es el deporte más popular del mundo.", "Los jugadores patean la pelota con los pies."],
  },
  basketball: {
    "Portuguese (Brazil)": ["Esta é uma bola de basquete.", "Os jogadores quicam ela e jogam dentro de uma cesta.", "Ela tem pequenos relevos para ajudar a segurar."],
    "Spanish": ["Esta es una pelota de baloncesto.", "Los jugadores la rebotan y la lanzan en un aro.", "Tiene pequeños bultos que ayudan a agarrarla."],
  },
  baseball: {
    "Portuguese (Brazil)": ["Esta é uma bola de beisebol.", "Ela é pequena e dura.", "Os jogadores batem nela com um taco."],
    "Spanish": ["Esta es una pelota de béisbol.", "Es pequeña y dura.", "Los jugadores la golpean con un bate."],
  },
  tennis_ball: {
    "Portuguese (Brazil)": ["Esta é uma bola de tênis.", "Ela é amarela e felpuda.", "Os jogadores batem nela com uma raquete."],
    "Spanish": ["Esta es una pelota de tenis.", "Es amarilla y peluda.", "Los jugadores la golpean con una raqueta."],
  },
  football: {
    "Portuguese (Brazil)": ["Esta é uma bola de futebol americano.", "Ela tem um formato pontudo.", "Os jogadores jogam ela e a pegam."],
    "Spanish": ["Esta es una pelota de fútbol americano.", "Tiene una forma puntiaguda.", "Los jugadores la lanzan y la atrapan."],
  },

  // M1 S6: Symbols of America
  bald_eagle: {
    "Portuguese (Brazil)": ["Esta é uma águia-careca.", "Ela é a ave nacional dos Estados Unidos.", "Águias-carecas conseguem voar muito alto."],
    "Spanish": ["Esta es un águila calva.", "Es el ave nacional de Estados Unidos.", "Las águilas calvas pueden volar muy alto."],
  },
  liberty_bell: {
    "Portuguese (Brazil)": ["Este é o Sino da Liberdade.", "Ele fica em Filadélfia.", "Ele tem uma rachadura grande e famosa."],
    "Spanish": ["Esta es la Campana de la Libertad.", "Está en Filadelfia.", "Tiene una grieta grande y famosa."],
  },
  american_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira americana.", "Ela tem cinquenta estrelas e treze listras.", "As estrelas representam os cinquenta estados."],
    "Spanish": ["Esta es la bandera estadounidense.", "Tiene cincuenta estrellas y trece franjas.", "Las estrellas representan los cincuenta estados."],
  },
  white_house: {
    "Portuguese (Brazil)": ["Esta é a Casa Branca.", "O presidente dos Estados Unidos mora aqui.", "Ela fica em Washington, D.C."],
    "Spanish": ["Esta es la Casa Blanca.", "El presidente de Estados Unidos vive aquí.", "Está en Washington, D.C."],
  },
  mt_rushmore: {
    "Portuguese (Brazil)": ["Este é o Monte Rushmore.", "Os rostos de quatro presidentes estão esculpidos na rocha.", "Ele fica em Dakota do Sul."],
    "Spanish": ["Este es el Monte Rushmore.", "Las caras de cuatro presidentes están talladas en la roca.", "Está en Dakota del Sur."],
  },

  // M1 S7: Flags of Asia
  japan_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira do Japão.", "Ela tem um círculo vermelho em fundo branco.", "O círculo representa o sol."],
    "Spanish": ["Esta es la bandera de Japón.", "Tiene un círculo rojo sobre fondo blanco.", "El círculo representa al sol."],
  },
  china_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira da China.", "Ela é vermelha com estrelas amarelas.", "A China é um país muito grande."],
    "Spanish": ["Esta es la bandera de China.", "Es roja con estrellas amarillas.", "China es un país muy grande."],
  },
  korea_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira da Coreia do Sul.", "Ela tem um círculo azul e vermelho no meio.", "O círculo é chamado de Taegeuk."],
    "Spanish": ["Esta es la bandera de Corea del Sur.", "Tiene un círculo rojo y azul en el medio.", "El círculo se llama Taegeuk."],
  },
  india_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira da Índia.", "Ela tem listras laranja, branca e verde.", "Há uma roda azul no meio."],
    "Spanish": ["Esta es la bandera de la India.", "Tiene franjas naranjas, blancas y verdes.", "Hay una rueda azul en el medio."],
  },
  vietnam_flag: {
    "Portuguese (Brazil)": ["Esta é a bandeira do Vietnã.", "Ela é vermelha com uma estrela amarela.", "O Vietnã fica no sudeste asiático."],
    "Spanish": ["Esta es la bandera de Vietnam.", "Es roja con una estrella amarilla.", "Vietnam está en el sudeste asiático."],
  },

  // M1 S8: Big Cats
  lion: {
    "Portuguese (Brazil)": ["Este é um leão.", "Os leões machos têm uma juba grande e felpuda.", "Os leões são chamados de o rei da selva."],
    "Spanish": ["Este es un león.", "Los leones machos tienen una gran melena peluda.", "A los leones les llaman el rey de la selva."],
  },
  tiger: {
    "Portuguese (Brazil)": ["Este é um tigre.", "Tigres têm pelo laranja com listras pretas.", "Cada tigre tem listras diferentes."],
    "Spanish": ["Este es un tigre.", "Los tigres tienen pelaje naranja con rayas negras.", "Cada tigre tiene rayas diferentes."],
  },
  leopard: {
    "Portuguese (Brazil)": ["Este é um leopardo.", "Leopardos têm pintas em todo o pelo.", "Eles sobem em árvores muito bem."],
    "Spanish": ["Este es un leopardo.", "Los leopardos tienen manchas por todo el pelaje.", "Trepan a los árboles muy bien."],
  },
  cheetah: {
    "Portuguese (Brazil)": ["Esta é uma chita.", "Chitas são os animais terrestres mais rápidos.", "Elas correm tão rápido quanto um carro."],
    "Spanish": ["Este es un guepardo.", "Los guepardos son los animales terrestres más rápidos.", "Pueden correr tan rápido como un coche."],
  },
  jaguar: {
    "Portuguese (Brazil)": ["Esta é uma onça-pintada.", "Onças vivem na floresta tropical.", "Elas são ótimas nadadoras."],
    "Spanish": ["Este es un jaguar.", "Los jaguares viven en la selva tropical.", "Son excelentes nadadores."],
  },

  // M1 S9: Kinds of Automobiles
  sedan: {
    "Portuguese (Brazil)": ["Este é um sedã.", "Um sedã é um carro de família.", "Ele tem quatro portas e um porta-malas."],
    "Spanish": ["Este es un sedán.", "Un sedán es un coche familiar.", "Tiene cuatro puertas y un maletero."],
  },
  suv: {
    "Portuguese (Brazil)": ["Este é um SUV.", "SUV significa veículo utilitário esportivo.", "Ele fica alto do chão."],
    "Spanish": ["Este es un SUV.", "SUV significa vehículo utilitario deportivo.", "Va alto sobre el suelo."],
  },
  sportscar: {
    "Portuguese (Brazil)": ["Este é um carro esportivo.", "Carros esportivos são muito rápidos.", "Eles ficam baixinhos perto do chão."],
    "Spanish": ["Este es un coche deportivo.", "Los coches deportivos son muy rápidos.", "Van bajitos cerca del suelo."],
  },
  pickup: {
    "Portuguese (Brazil)": ["Esta é uma caminhonete.", "Ela tem uma caçamba grande para carregar coisas.", "Fazendeiros e construtores usam caminhonetes."],
    "Spanish": ["Esta es una camioneta pickup.", "Tiene una caja grande atrás para cargar cosas.", "Los granjeros y constructores las usan."],
  },
  convertible: {
    "Portuguese (Brazil)": ["Este é um conversível.", "O teto pode abaixar.", "Você sente o vento no cabelo."],
    "Spanish": ["Este es un descapotable.", "El techo se puede bajar.", "Sientes el viento en el cabello."],
  },

  // M1 S10: Inspirational People
  mlk: {
    "Portuguese (Brazil)": ["Este é Martin Luther King Jr.", "Ele lutou pela justiça e pela igualdade.", "Ele fez um discurso famoso chamado Eu Tenho um Sonho."],
    "Spanish": ["Este es Martin Luther King Jr.", "Luchó por la justicia y la igualdad.", "Dio un discurso famoso llamado Tengo un Sueño."],
  },
  gandhi: {
    "Portuguese (Brazil)": ["Este é Mahatma Gandhi.", "Ele ajudou a Índia a se tornar livre.", "Ele acreditava em mudanças pacíficas."],
    "Spanish": ["Este es Mahatma Gandhi.", "Ayudó a la India a ser libre.", "Creía en el cambio pacífico."],
  },
  mandela: {
    "Portuguese (Brazil)": ["Este é Nelson Mandela.", "Ele se tornou presidente da África do Sul.", "Ele trabalhou para acabar com regras injustas."],
    "Spanish": ["Este es Nelson Mandela.", "Se convirtió en presidente de Sudáfrica.", "Trabajó para acabar con las leyes injustas."],
  },
  mother_teresa: {
    "Portuguese (Brazil)": ["Esta é Madre Teresa.", "Ela passou a vida ajudando os pobres.", "Ela ganhou o prêmio Nobel da Paz."],
    "Spanish": ["Esta es la Madre Teresa.", "Pasó su vida ayudando a los pobres.", "Ganó el Premio Nobel de la Paz."],
  },
  einstein: {
    "Portuguese (Brazil)": ["Este é Albert Einstein.", "Ele foi um cientista muito famoso.", "Ele descobriu como o tempo e o espaço funcionam."],
    "Spanish": ["Este es Albert Einstein.", "Fue un científico muy famoso.", "Descubrió cómo funcionan el tiempo y el espacio."],
  },

  // M1 S11: African Animals
  elephant: {
    "Portuguese (Brazil)": ["Este é um elefante.", "Elefantes são os maiores animais terrestres.", "Eles usam a tromba comprida para pegar comida."],
    "Spanish": ["Este es un elefante.", "Los elefantes son los animales terrestres más grandes.", "Usan su larga trompa para agarrar comida."],
  },
  giraffe: {
    "Portuguese (Brazil)": ["Esta é uma girafa.", "Girafas são os animais mais altos do mundo.", "Elas têm pescoços bem longos para alcançar folhas."],
    "Spanish": ["Esta es una jirafa.", "Las jirafas son los animales más altos del mundo.", "Tienen cuellos muy largos para alcanzar las hojas."],
  },
  zebra: {
    "Portuguese (Brazil)": ["Esta é uma zebra.", "Zebras têm listras pretas e brancas.", "As listras de cada zebra são diferentes."],
    "Spanish": ["Esta es una cebra.", "Las cebras tienen rayas negras y blancas.", "Las rayas de cada cebra son diferentes."],
  },
  // Note: "lion" appears in both M1 S8 (Big Cats) and M1 S11 (African Animals)
  // — same id, same facts, so the M1 S8 translation applies to both.
  rhinoceros: {
    "Portuguese (Brazil)": ["Este é um rinoceronte.", "Rinocerontes têm chifres no nariz.", "Eles têm pele muito grossa, como uma armadura."],
    "Spanish": ["Este es un rinoceronte.", "Los rinocerontes tienen cuernos en la nariz.", "Tienen una piel muy gruesa, como una armadura."],
  },

  // M1 S12: International Cuisine
  sushi: {
    "Portuguese (Brazil)": ["Isto é sushi.", "O sushi vem do Japão.", "Ele é feito com arroz e peixe."],
    "Spanish": ["Esto es sushi.", "El sushi viene de Japón.", "Está hecho con arroz y pescado."],
  },
  pizza: {
    "Portuguese (Brazil)": ["Isto é pizza.", "A pizza vem da Itália.", "Ela tem queijo, molho e massa."],
    "Spanish": ["Esto es pizza.", "La pizza viene de Italia.", "Tiene queso, salsa y masa."],
  },
  tacos: {
    "Portuguese (Brazil)": ["Estes são tacos.", "Os tacos vêm do México.", "São tortilhas dobradas com recheios saborosos."],
    "Spanish": ["Estos son tacos.", "Los tacos vienen de México.", "Son tortillas dobladas con rellenos deliciosos."],
  },
  curry: {
    "Portuguese (Brazil)": ["Isto é curry.", "O curry vem da Índia.", "Ele usa especiarias quentes e coloridas."],
    "Spanish": ["Esto es curry.", "El curry viene de la India.", "Usa especias cálidas y coloridas."],
  },
  croissant: {
    "Portuguese (Brazil)": ["Isto é um croissant.", "Os croissants vêm da França.", "Eles são folhados e em forma de meia lua."],
    "Spanish": ["Esto es un cruasán.", "Los cruasanes vienen de Francia.", "Son hojaldrados y con forma de media luna."],
  },
};

// Helper: returns translated facts array for a card+language, or null if missing.
// The renderer falls back to English when this returns null.
export function getKnowledgeFactsTranslation(cardId, language) {
  const t = KNOWLEDGE_FACT_TRANSLATIONS[cardId];
  if (!t) return null;
  return t[language] || null;
}
