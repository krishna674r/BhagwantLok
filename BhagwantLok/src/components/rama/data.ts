import ayodhya from "@/assets/rama-ayodhya.jpg";
import birth from "@/assets/rama-art-birth.jpg";
import bow from "@/assets/rama-art-bow.jpg";
import hanuman from "@/assets/rama-art-hanuman.jpg";
import hero from "@/assets/rama-hero.jpg";
import paduka from "@/assets/rama-art-paduka.jpg";
import ramrajya from "@/assets/rama-ramrajya.jpg";
import ravana from "@/assets/rama-art-ravana.jpg";
import returnArt from "@/assets/rama-art-return.jpg";
import setu from "@/assets/rama-art-setu.jpg";
import shabari from "@/assets/rama-art-shabari.jpg";
import vanvas from "@/assets/rama-art-vanvas.jpg";

export type RSymbol = {
  id: string;
  glyph: string;
  name: string;
  sanskrit: string;
  meaning: string;
  symbolism: string;
};

export const R_SYMBOLS: RSymbol[] = [
  {
    id: "kodanda",
    glyph: "🏹",
    name: "Kodanda Bow",
    sanskrit: "कोदण्ड",
    meaning: "The great bow always carried by Rama.",
    symbolism:
      "Strength held in restraint. A bow is only noble while it is drawn for dharma — power that waits, aims true, and never boasts.",
  },
  {
    id: "arrow",
    glyph: "➶",
    name: "The Arrow",
    sanskrit: "बाण",
    meaning: "Released once, never recalled.",
    symbolism:
      "The word of a righteous person. Rama's arrow and Rama's promise are the same thing: once given, they travel to their end.",
  },
  {
    id: "lotus",
    glyph: "🪷",
    name: "Lotus",
    sanskrit: "कमल",
    meaning: "Rama's eyes are likened to lotus petals.",
    symbolism:
      "Purity untouched by circumstance. Born of still water and mud, the lotus opens only to the sun — as the heart opens only to truth.",
  },
  {
    id: "paduka",
    glyph: "👣",
    name: "Paduka",
    sanskrit: "पादुका",
    meaning: "The wooden sandals placed on Ayodhya's throne.",
    symbolism:
      "Authority as trust, not possession. Bharata ruled beneath them for fourteen years — the humblest object holding the highest seat.",
  },
  {
    id: "crown",
    glyph: "👑",
    name: "The Crown",
    sanskrit: "मुकुट",
    meaning: "The kingship Rama gave up and later returned to.",
    symbolism:
      "A crown worn as duty weighs more than a crown worn as reward. Maryada — the line a king draws first around himself.",
  },
  {
    id: "deepa",
    glyph: "🪔",
    name: "Temple Lamp",
    sanskrit: "दीप",
    meaning: "The rows of lamps that welcomed him home.",
    symbolism:
      "One flame is enough to end a room's darkness. Ayodhya lit a million, and called it Deepavali.",
  },
  {
    id: "setu",
    glyph: "🌉",
    name: "Ram Setu",
    sanskrit: "रामसेतु",
    meaning: "The bridge of stones across the sea.",
    symbolism:
      "The impossible built by the small. Squirrels carried grains of sand; each name written on a stone made it float.",
  },
];

export type Milestone = {
  id: string;
  sanskrit: string;
  title: string;
  text: string;
  image?: string;
};

export const RAMAYANA: Milestone[] = [
  {
    id: "birth",
    sanskrit: "जन्म",
    title: "Birth in Ayodhya",
    text: "On the ninth day of Chaitra, Vishnu takes a human birth in the house of Dasharatha — choosing limits, choosing a mother, choosing to be bound so that he may show how to live within bounds.",
    image: birth,
  },
  {
    id: "gurukul",
    sanskrit: "गुरुकुल",
    title: "Gurukul",
    text: "A prince of the greatest kingdom on earth sleeps on a mat and gathers firewood with the sons of hermits. Learning begins where privilege ends.",
  },
  {
    id: "swayamvar",
    sanskrit: "स्वयंवर",
    title: "Sita Swayamvara",
    text: "Kings strain and fail at Shiva's bow. Rama lifts it as if lifting a garland — and Mithila gives him Sita, the earth's own daughter.",
    image: bow,
  },
  {
    id: "vanvas",
    sanskrit: "वनवास",
    title: "Fourteen Years of Exile",
    text: "A word given by his father to a queen sends him to the forest on the eve of his coronation. He removes his silks without a sigh. Sita and Lakshmana follow without being asked.",
    image: vanvas,
  },
  {
    id: "panchavati",
    sanskrit: "पञ्चवटी",
    title: "Panchavati",
    text: "A hut of leaves beside the Godavari, five banyan trees, deer at the doorway. Here exile becomes something like peace — until a golden deer crosses the clearing.",
  },
  {
    id: "hanuman",
    sanskrit: "हनुमान",
    title: "Hanuman's Devotion",
    text: "On Rishyamukha a monkey in a brahmin's guise speaks perfect Sanskrit and then kneels. From that hour, wherever Rama's name is spoken, Hanuman is already listening.",
    image: hanuman,
  },
  {
    id: "setu",
    sanskrit: "रामसेतु",
    title: "Ram Setu",
    text: "The ocean will not part, so it is crossed. Vanaras carry boulders, a squirrel carries dust, and a bridge of a hundred yojanas rises upon a written name.",
    image: setu,
  },
  {
    id: "lanka",
    sanskrit: "लङ्का युद्ध",
    title: "The War at Lanka",
    text: "Ravana is a scholar, a devotee, a king of terrifying power — and still he falls, because dharma is not defeated by brilliance. Rama grants him the honour of a rival, and then the honour of last rites.",
    image: ravana,
  },
  {
    id: "return",
    sanskrit: "पुनरागमन",
    title: "Return to Ayodhya",
    text: "Fourteen years to the day, the city sets out a million lamps. Bharata brings back the sandals he never dared to replace.",
    image: returnArt,
  },
  {
    id: "ramrajya",
    sanskrit: "रामराज्य",
    title: "Ram Rajya",
    text: "Not an age without sorrow, but an age without injustice: granaries full, courts fair, the weakest voice heard first. The ideal that India has never stopped measuring itself against.",
    image: ramrajya,
  },
];

export type RStory = {
  id: string;
  sanskrit: string;
  title: string;
  summary: string;
  body: string;
  image: string;
};

export const R_STORIES: RStory[] = [
  {
    id: "birth",
    sanskrit: "राम जन्म",
    title: "The Birth of Rama",
    summary: "A childless king, a sacred offering, and four sons of light.",
    body: "Dasharatha, king of Kosala, ruled well but grew old without an heir. At the counsel of the sages he performed the Putrakameshti yajna, and from the fire rose a being bearing a vessel of divine payasam. The three queens shared it, and in time four sons were born — Rama, Bharata, Lakshmana and Shatrughna. Ayodhya woke to drums and conch shells, not knowing that the child in Kaushalya's arms had come to draw a line the world would call maryada: the boundary a good person keeps even when nobody is watching.",
    image: birth,
  },
  {
    id: "bow",
    sanskrit: "धनुष भंग",
    title: "Breaking Shiva's Bow",
    summary: "Mithila's test, and the marriage that answered it.",
    body: "King Janaka had made a vow: his daughter Sita would marry whoever could string the bow of Shiva, a weapon so heavy that a hundred men drew the cart that carried it. Kings came from every direction and left with lowered eyes. Then a young prince from Ayodhya rose at his teacher's nod, walked to the bow as though greeting an elder, lifted it, bent it — and the bow broke with a sound like the sky splitting. Sita placed the garland around his neck. What the assembly saw as strength was really something quieter: a man who did not hesitate, because he was not performing.",
    image: bow,
  },
  {
    id: "paduka",
    sanskrit: "पादुका",
    title: "Bharata and the Paduka",
    summary: "A brother who refused a throne he was given.",
    body: "Bharata returned to Ayodhya to find his father dead, his brother exiled, and a crown waiting for him that he had never wanted. He went to the forest and begged Rama to come home. Rama would not break their father's word. So Bharata asked for his sandals instead. He carried them back on his head, set them upon the throne, and for fourteen years ruled from a lower seat in the name of another man. There is no greater picture of power in all of literature: a regent who kept the throne warm and empty.",
    image: paduka,
  },
  {
    id: "hanuman",
    sanskrit: "हनुमान मिलन",
    title: "Meeting Hanuman",
    summary: "The first meeting of the lord and his greatest devotee.",
    body: "Searching for Sita, Rama and Lakshmana came to the slopes of Rishyamukha. Sugriva, in hiding, sent his minister to learn who these armed strangers were. Hanuman came down in the form of a mendicant and spoke — and his speech was so flawless that Rama turned to his brother and said, no one could speak like this who had not mastered the Vedas. When Hanuman understood at last who stood before him, he fell at his feet and never truly rose again. Strength found its purpose that afternoon; devotion found its face.",
    image: hanuman,
  },
  {
    id: "shabari",
    sanskrit: "शबरी",
    title: "Shabari's Devotion",
    summary: "Berries tasted first, offered with love.",
    body: "Shabari had waited her whole life in a forest hermitage, sweeping the path each morning for a guest her guru promised would come. When Rama finally arrived, she offered him wild berries — and, fearing they might be sour, tasted each one before giving it. By every rule of ritual her offering was polluted. Rama ate them all and called them the sweetest food he had ever received. Caste, age, propriety — everything the world weighs by — went silent before one old woman's love.",
    image: shabari,
  },
  {
    id: "setu",
    sanskrit: "सेतुबन्ध",
    title: "Building Ram Setu",
    summary: "Stones that floated, and a squirrel that helped.",
    body: "The vanara army stood at the shore of an ocean that would not be crossed. Nala and Nila built, stone by stone, a bridge to Lanka. The story says a small squirrel rolled in the sand and shook it into the gaps between the boulders, and when the monkeys laughed, Rama lifted her gently and stroked her back — leaving three pale stripes that her descendants carry still. No service offered with a whole heart is too small to matter.",
    image: setu,
  },
  {
    id: "victory",
    sanskrit: "रावण वध",
    title: "Victory over Ravana",
    summary: "The end of a war, and the dignity given to a fallen king.",
    body: "For ten days the armies met. Ravana was no ordinary enemy — a master of the Vedas, a peerless devotee of Shiva, a ruler whose city was gold. When at last the arrow of Brahma found him, Rama sent Lakshmana to sit at the dying king's feet and learn statecraft from him, and ordered that his last rites be performed with full royal honour. Dharma does not celebrate a fallen opponent. It closes his eyes with respect.",
    image: ravana,
  },
  {
    id: "return",
    sanskrit: "अयोध्या आगमन",
    title: "Return to Ayodhya",
    summary: "A city of a million lamps, waiting fourteen years.",
    body: "On the day the exile ended, Ayodhya cleaned its streets, hung mango leaves at every door, and lit rows of clay lamps along the Sarayu until the river doubled the sky. Rama returned not as a conqueror but as a son coming home. Bharata brought the sandals down from the throne and placed them at his brother's feet. From that night the world has kept the custom: when the righteous return, we light lamps.",
    image: returnArt,
  },
];

export type Teaching = { text: string; source: string };

export const R_TEACHINGS: Teaching[] = [
  {
    text: "A promise given is a debt owed. Keep it when it costs you nothing, and keep it when it costs you a kingdom.",
    source: "On Truth",
  },
  {
    text: "Dharma is not the path that is easy or the path that is popular. It is the path you would still walk if no one ever knew.",
    source: "On Dharma",
  },
  {
    text: "The strong are measured by how gently they treat the weak, not by how easily they defeat the strong.",
    source: "On Compassion",
  },
  {
    text: "A ruler is the first servant of his people. His comfort comes last, and his grief is his own.",
    source: "On Leadership",
  },
  {
    text: "Bow before your teachers, your elders and your guests. What is bent in humility is never broken.",
    source: "On Humility",
  },
  {
    text: "Duty performed without complaint becomes devotion. Duty performed for praise becomes a burden.",
    source: "On Duty",
  },
  {
    text: "A family is held together not by blood but by sacrifice — by who is willing to go without.",
    source: "On Family",
  },
  {
    text: "Give even your enemy the dignity of a fair hearing and an honourable end. Justice without cruelty is justice.",
    source: "On Justice",
  },
];

export type Mantra = { sanskrit: string; translit: string; meaning: string };

export const R_MANTRAS: Mantra[] = [
  {
    sanskrit: "श्री राम जय राम जय जय राम",
    translit: "SHRI RAMA JAYA RAMA JAYA JAYA RAMA",
    meaning:
      "The Taraka mantra of thirteen syllables — a simple victory-song to Rama, chanted to steady the mind and dissolve fear.",
  },
  {
    sanskrit: "ॐ श्री रामाय नमः",
    translit: "OM SHRI RAMAYA NAMAH",
    meaning:
      "Salutations to the auspicious Rama — an invocation of righteousness, patience and inner order.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  w: number;
  h: number;
};

export const R_GALLERY: GalleryImage[] = [
  { src: hero, alt: "Ayodhya at golden sunrise beside the Sarayu river", title: "Ayodhya at Dawn", w: 1920, h: 1088 },
  { src: birth, alt: "The birth of Rama in the palace of Ayodhya", title: "Rama Janma", w: 1024, h: 1280 },
  { src: bow, alt: "Rama breaking the bow of Shiva at Sita's swayamvara", title: "Dhanush Bhang", w: 1024, h: 1280 },
  { src: vanvas, alt: "Rama and Sita in the forest during exile", title: "Panchavati", w: 1024, h: 1280 },
  { src: hanuman, alt: "Hanuman kneeling before Rama", title: "Hanuman", w: 1024, h: 1280 },
  { src: shabari, alt: "Shabari offering berries to Rama", title: "Shabari", w: 1024, h: 1280 },
  { src: setu, alt: "The building of Ram Setu across the ocean", title: "Ram Setu", w: 1024, h: 1280 },
  { src: ravana, alt: "Rama drawing his bow against Ravana", title: "Vijaya", w: 1024, h: 1280 },
  { src: returnArt, alt: "The lamplit return of Rama to Ayodhya", title: "Deepavali", w: 1024, h: 1280 },
  { src: paduka, alt: "Bharata placing Rama's sandals upon the throne", title: "Paduka", w: 1024, h: 1280 },
  { src: ayodhya, alt: "The Ram Mandir and the ghats of the Sarayu", title: "Ram Mandir", w: 1920, h: 1088 },
  { src: ramrajya, alt: "The prosperous kingdom of Ram Rajya", title: "Ram Rajya", w: 1920, h: 1088 },
];

export const RAM_RAJYA_PILLARS = [
  { glyph: "🌾", title: "Prosperity", text: "Granaries full in every season; no household without grain, no field without water." },
  { glyph: "⚖️", title: "Justice", text: "The court open to the poorest citizen, and the king held to the same law he wrote." },
  { glyph: "🕊️", title: "Harmony", text: "Neighbours without fear of one another; disputes settled before the sun sets." },
  { glyph: "🤲", title: "Compassion", text: "The old, the ill and the orphaned as the first charge upon the treasury." },
  { glyph: "🪔", title: "Unity", text: "One city of many faiths, trades and tongues, lit by a single row of lamps." },
];
