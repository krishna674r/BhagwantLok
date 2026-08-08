import birth from "@/assets/krishna-art-birth.jpg";
import makhan from "@/assets/krishna-art-makhan.jpg";
import kaliya from "@/assets/krishna-art-kaliya.jpg";
import govardhan from "@/assets/krishna-art-govardhan.jpg";
import rasa from "@/assets/krishna-art-rasa.jpg";
import sudama from "@/assets/krishna-art-sudama.jpg";
import gita from "@/assets/krishna-art-gita.jpg";
import vrindavan from "@/assets/krishna-vrindavan.jpg";
import hero from "@/assets/krishna-hero.jpg";

export type KSymbol = {
  id: string;
  glyph: string;
  name: string;
  sanskrit: string;
  meaning: string;
  symbolism: string;
};

export const K_SYMBOLS: KSymbol[] = [
  {
    id: "flute",
    glyph: "🪈",
    name: "The Flute",
    sanskrit: "बांसुरी",
    meaning: "A hollow reed at Krishna's lips.",
    symbolism:
      "Empty of itself, it becomes song. The heart that empties of ego becomes an instrument of the divine.",
  },
  {
    id: "peacock",
    glyph: "🦚",
    name: "Peacock Feather",
    sanskrit: "मयूर पंख",
    meaning: "The single feather in his crown.",
    symbolism:
      "Beauty worn lightly. The peacock dances at the first rain — joy that arrives before the harvest, not after it.",
  },
  {
    id: "lotus",
    glyph: "🪷",
    name: "Lotus",
    sanskrit: "कमल",
    meaning: "The flower rooted in mud, open to the sun.",
    symbolism:
      "Act in the world, untouched by it. As water does not cling to a lotus petal, karma does not cling to the selfless.",
  },
  {
    id: "cow",
    glyph: "🐄",
    name: "The Cow",
    sanskrit: "गौ",
    meaning: "Krishna the cowherd, Govinda.",
    symbolism:
      "Gentle abundance, patient giving, and the tender care of all living beings as one's own family.",
  },
  {
    id: "chakra",
    glyph: "☸",
    name: "Sudarshan Chakra",
    sanskrit: "सुदर्शन चक्र",
    meaning: "The spinning disc upon his finger.",
    symbolism:
      "Time turning without pause, and the clear seeing — su-darshan — that cuts through every illusion.",
  },
  {
    id: "conch",
    glyph: "🐚",
    name: "Panchajanya",
    sanskrit: "पाञ्चजन्य",
    meaning: "The conch sounded at Kurukshetra.",
    symbolism:
      "The primordial sound Om carried in a shell of the sea — the call that wakes the sleeping heart to its duty.",
  },
];

export type Leela = {
  id: string;
  title: string;
  sanskrit: string;
  image: string;
  summary: string;
};

export const BAL_LEELA: Leela[] = [
  {
    id: "mathura",
    title: "Birth in Mathura",
    sanskrit: "जन्म",
    image: birth,
    summary:
      "Born at midnight in a prison cell, carried across the swollen Yamuna to safety — light arriving in the darkest hour.",
  },
  {
    id: "gokul",
    title: "Gokul & Yashoda",
    sanskrit: "गोकुल",
    image: makhan,
    summary:
      "Raised by Nanda and Yashoda among cowherds, the infinite let itself be held, scolded and loved as a child.",
  },
  {
    id: "makhan",
    title: "Makhan Chor",
    sanskrit: "माखन चोर",
    image: makhan,
    summary:
      "The butter thief of Gokul — a god who steals not wealth but hearts, and always leaves them fuller.",
  },
  {
    id: "kaliya",
    title: "Kaliya Mardan",
    sanskrit: "कालिय मर्दन",
    image: kaliya,
    summary:
      "He danced upon the hoods of the serpent poisoning the Yamuna, and sent it away alive — victory without cruelty.",
  },
  {
    id: "govardhan",
    title: "Govardhan Hill",
    sanskrit: "गोवर्धन",
    image: govardhan,
    summary:
      "He raised a whole hill on one finger for seven days, sheltering his village — protection offered without a word of reproach.",
  },
  {
    id: "gopas",
    title: "The Gopas",
    sanskrit: "सखा",
    image: rasa,
    summary:
      "Wrestling, racing, sharing lunches on the riverbank. The supreme being chose, above all, to be a friend.",
  },
];

export type KStory = {
  id: string;
  title: string;
  sanskrit: string;
  image: string;
  summary: string;
  body: string;
};

export const K_STORIES: KStory[] = [
  {
    id: "birth",
    title: "The Birth of Krishna",
    sanskrit: "कृष्ण जन्म",
    image: birth,
    summary: "Light born in a prison, at the darkest hour of the night.",
    body: "Kansa had chained his sister Devaki and her husband Vasudeva, killing each child born to them. On the eighth night of the waning moon, in a locked cell, the eighth was born — and the chains fell open, the guards slept, and the river parted. Vasudeva carried the infant through the storm to Gokul. What is meant to arrive cannot be imprisoned.",
  },
  {
    id: "kaliya",
    title: "Kaliya Mardan",
    sanskrit: "कालिय मर्दन",
    image: kaliya,
    summary: "He danced on the serpent that poisoned the river.",
    body: "The many-hooded Kaliya had turned a bend of the Yamuna black with venom. The boy leapt in, and rather than slaying the serpent he danced upon its hoods until its pride was spent. Then he let it go, marked by his footprint, to live elsewhere in peace. Even what poisons us is not destroyed — only asked to move.",
  },
  {
    id: "govardhan",
    title: "Govardhan Leela",
    sanskrit: "गोवर्धन लीला",
    image: govardhan,
    summary: "A hill lifted on one small finger.",
    body: "When Vrindavan stopped its yearly offering to Indra, the rains came as punishment for seven days and nights. Krishna lifted Govardhan hill on the little finger of his left hand, and the whole village — people, cows, birds — stood dry beneath it. Devotion is not owed upward to power; it is owed to the earth that feeds you.",
  },
  {
    id: "rasa",
    title: "Rasa Leela",
    sanskrit: "रास लीला",
    image: rasa,
    summary: "One dance, and each dancer certain she alone was held.",
    body: "On an autumn full-moon night the flute called, and the gopis left everything to follow it. In the circle that formed, Krishna stood beside each one at once. The Rasa is not romance but the soul's dance with the divine — love so complete that it is never divided by being shared.",
  },
  {
    id: "sudama",
    title: "Meeting Sudama",
    sanskrit: "सुदामा चरित्र",
    image: sudama,
    summary: "A handful of poor rice, received like a kingdom.",
    body: "Sudama walked to Dwarka with nothing but a small bundle of flattened rice, too ashamed to offer it. Krishna took it from him and ate, weeping, and sent him home. Sudama returned to find his hut become a palace — and never once had he asked. Friendship keeps no account.",
  },
  {
    id: "gita",
    title: "Kurukshetra & the Gita",
    sanskrit: "भगवद्गीता",
    image: gita,
    summary: "A conversation between two chariot wheels, before the world changed.",
    body: "Arjuna set down his bow, unwilling to fight his own kin. Between the two armies Krishna spoke to him of the deathless self, of action offered without grasping at its fruit, of devotion as the shortest road home. Seven hundred verses in the pause before a war — and then, gently: now choose.",
  },
];

export type GitaTeaching = {
  theme: string;
  sanskrit: string;
  verse: string;
  ref: string;
  note: string;
};

export const GITA: GitaTeaching[] = [
  {
    theme: "Karma Yoga",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    verse: "You have a right to your action alone, never to its fruits.",
    ref: "Bhagavad Gita 2.47",
    note: "Work wholeheartedly, then release the outcome. Anxiety lives in the gap between effort and result — this closes it.",
  },
  {
    theme: "Dharma",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्",
    verse: "Better one's own duty imperfectly done than another's done well.",
    ref: "Bhagavad Gita 3.35",
    note: "Your path may look smaller than someone else's. It is still the only one that will carry you.",
  },
  {
    theme: "The Self",
    sanskrit: "न जायते म्रियते वा कदाचित्",
    verse: "The self is never born and never dies.",
    ref: "Bhagavad Gita 2.20",
    note: "What you truly are was not made by time and cannot be taken by it. Grief belongs to the form, not the flame.",
  },
  {
    theme: "Bhakti",
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति",
    verse: "A leaf, a flower, a fruit, water — offered with love, I accept it.",
    ref: "Bhagavad Gita 9.26",
    note: "The offering is never measured. Only the heart behind it is.",
  },
  {
    theme: "Detachment",
    sanskrit: "समत्वं योग उच्यते",
    verse: "Evenness of mind is called yoga.",
    ref: "Bhagavad Gita 2.48",
    note: "Not indifference — steadiness. Equal in gain and loss, you finally become free to act rightly.",
  },
  {
    theme: "Refuge",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
    verse: "Let go of all else and take refuge in me alone.",
    ref: "Bhagavad Gita 18.66",
    note: "The last verse of the teaching, and the simplest: you do not have to carry it by yourself.",
  },
];

export type Mantra = {
  sanskrit: string;
  translit: string;
  meaning: string;
};

export const MANTRAS: Mantra[] = [
  {
    sanskrit:
      "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम राम राम हरे हरे ॥",
    translit:
      "HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE\nHARE RAMA HARE RAMA RAMA RAMA HARE HARE",
    meaning:
      "The Mahamantra. A calling of the divine by name and of its joyful energy — sixteen words that ask for nothing but nearness.",
  },
  {
    sanskrit: "ॐ नमो भगवते वासुदेवाय",
    translit: "OM NAMO BHAGAVATE VASUDEVAYA",
    meaning:
      "\"I bow to the divine dwelling in all beings.\" The twelve-syllable mantra of surrender to Vasudeva — the one who lives in everything.",
  },
];

export type KTeaching = { text: string; source: string };

export const K_TEACHINGS: KTeaching[] = [
  { text: "Do your work, and let the harvest belong to the earth.", source: "On selfless action" },
  { text: "The one who sees me everywhere never loses sight of me, and I never lose sight of them.", source: "On devotion" },
  { text: "Fear is only forgetting that you were never the body.", source: "On courage" },
  { text: "Be a friend to all creatures; there is no other worship.", source: "On compassion" },
  { text: "Whenever love falters in the world, I return — not to punish, but to remind.", source: "On divine descent" },
  { text: "The mind, when steadied, is your closest friend. Unsteadied, your only enemy.", source: "On wisdom" },
];

export const K_GALLERY = [
  { src: rasa, alt: "Krishna and Radha dancing the Rasa Leela with gopis under a full moon", w: 1024, h: 1024, title: "Rasa Leela" },
  { src: kaliya, alt: "Young Krishna dancing on the hoods of the serpent Kaliya", w: 1024, h: 1280, title: "Kaliya Mardan" },
  { src: govardhan, alt: "Krishna lifting Govardhan hill to shelter the village", w: 1024, h: 1280, title: "Govardhan" },
  { src: makhan, alt: "Baby Krishna stealing butter from a clay pot", w: 1024, h: 1280, title: "Makhan Chor" },
  { src: sudama, alt: "Krishna embracing his childhood friend Sudama", w: 1024, h: 1024, title: "Sudama" },
  { src: gita, alt: "Krishna speaking the Bhagavad Gita to Arjuna on his chariot", w: 1920, h: 1088, title: "The Gita" },
  { src: vrindavan, alt: "The forests of Vrindavan in golden light with peacocks and cows", w: 1920, h: 1088, title: "Vrindavan" },
  { src: hero, alt: "Krishna playing the flute beside the Yamuna at sunrise", w: 1920, h: 1088, title: "Yamuna Dawn" },
  { src: birth, alt: "The divine birth of Krishna and the crossing of the Yamuna", w: 1024, h: 1280, title: "Janmashtami" },
];
