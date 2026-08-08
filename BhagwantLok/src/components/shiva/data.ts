import ardhanari from "@/assets/shiva-art-ardhanari.jpg";
import ganga from "@/assets/shiva-art-ganga.jpg";
import neelkanth from "@/assets/shiva-art-neelkanth.jpg";
import tandava from "@/assets/shiva-art-tandava.jpg";
import temple from "@/assets/shiva-temple.jpg";
import kailash from "@/assets/shiva-kailash-pano.jpg";
import hero from "@/assets/shiva-hero.jpg";

export type Symbolism = {
  id: string;
  glyph: string;
  name: string;
  sanskrit: string;
  meaning: string;
  symbolism: string;
};

export const SYMBOLS: Symbolism[] = [
  {
    id: "trishul",
    glyph: "🔱",
    name: "Trishul",
    sanskrit: "त्रिशूल",
    meaning: "The three-pronged spear of Mahadev.",
    symbolism:
      "Creation, preservation and dissolution — and the mastery of the three gunas: sattva, rajas and tamas.",
  },
  {
    id: "damru",
    glyph: "🥁",
    name: "Damru",
    sanskrit: "डमरू",
    meaning: "The hourglass drum held in the upper right hand.",
    symbolism:
      "Its beat is the primordial sound from which language, rhythm and the universe itself unfold.",
  },
  {
    id: "third-eye",
    glyph: "👁",
    name: "Third Eye",
    sanskrit: "त्रिनेत्र",
    meaning: "The eye of wisdom upon the brow.",
    symbolism:
      "Perception beyond the senses. What it opens upon, illusion cannot survive.",
  },
  {
    id: "moon",
    glyph: "☾",
    name: "Crescent Moon",
    sanskrit: "चन्द्रशेखर",
    meaning: "The waxing crescent resting in his hair.",
    symbolism:
      "Time held gently — the cycles of mind and tide worn as ornament, never as a burden.",
  },
  {
    id: "ganga",
    glyph: "≋",
    name: "Ganga",
    sanskrit: "गङ्गा",
    meaning: "The celestial river caught in his matted locks.",
    symbolism:
      "Grace tempered by stillness — purity that descends only where there is the strength to receive it.",
  },
  {
    id: "serpent",
    glyph: "🐍",
    name: "Vasuki",
    sanskrit: "वासुकि",
    meaning: "The serpent coiled about his throat.",
    symbolism:
      "Fear and desire, awake yet at peace. The kundalini energy resting in perfect awareness.",
  },
  {
    id: "nandi",
    glyph: "🐂",
    name: "Nandi",
    sanskrit: "नन्दी",
    meaning: "The bull who waits at every Shiva shrine.",
    symbolism:
      "Unwavering faith and patient strength — the mind seated quietly, gazing only at the divine.",
  },
  {
    id: "rudraksha",
    glyph: "◉",
    name: "Rudraksha",
    sanskrit: "रुद्राक्ष",
    meaning: "Beads said to be born of Rudra's tears.",
    symbolism:
      "Compassion for all beings, and the steady breath of repeated remembrance.",
  },
];

export type Jyotirlinga = {
  name: string;
  sanskrit: string;
  place: string;
  note: string;
};

export const JYOTIRLINGAS: Jyotirlinga[] = [
  { name: "Somnath", sanskrit: "सोमनाथ", place: "Prabhas Patan, Gujarat", note: "The first jyotirlinga, rebuilt again and again — eternity that outlasts ruin." },
  { name: "Mallikarjuna", sanskrit: "मल्लिकार्जुन", place: "Srisailam, Andhra Pradesh", note: "Shiva and Parvati together upon the Srisailam hill, drawn back by a child's love." },
  { name: "Mahakaleshwar", sanskrit: "महाकालेश्वर", place: "Ujjain, Madhya Pradesh", note: "The lord of time itself, worshipped at dawn with the rare Bhasma Aarti." },
  { name: "Omkareshwar", sanskrit: "ओंकारेश्वर", place: "Khandwa, Madhya Pradesh", note: "An island in the Narmada shaped like the syllable ॐ." },
  { name: "Kedarnath", sanskrit: "केदारनाथ", place: "Rudraprayag, Uttarakhand", note: "A stone shrine amid Himalayan snow, reachable only in the open months." },
  { name: "Bhimashankar", sanskrit: "भीमाशंकर", place: "Pune, Maharashtra", note: "Born of the sweat of Shiva after a great battle, hidden in Sahyadri forest." },
  { name: "Kashi Vishwanath", sanskrit: "काशी विश्वनाथ", place: "Varanasi, Uttar Pradesh", note: "The city of light on the Ganga, where liberation is said to be whispered." },
  { name: "Trimbakeshwar", sanskrit: "त्र्यम्बकेश्वर", place: "Nashik, Maharashtra", note: "Source of the Godavari, with a linga of three faces — Brahma, Vishnu, Shiva." },
  { name: "Vaidyanath", sanskrit: "वैद्यनाथ", place: "Deoghar, Jharkhand", note: "The divine healer, sought by pilgrims who walk barefoot with Ganga water." },
  { name: "Nageshwar", sanskrit: "नागेश्वर", place: "Dwarka, Gujarat", note: "Lord of serpents — protection from poison, within and without." },
  { name: "Rameshwaram", sanskrit: "रामेश्वरम्", place: "Rameswaram, Tamil Nadu", note: "Consecrated by Rama before crossing the sea; corridors of a thousand pillars." },
  { name: "Grishneshwar", sanskrit: "घृष्णेश्वर", place: "Ellora, Maharashtra", note: "The last jyotirlinga, beside the rock-cut caves of Ellora." },
];

export type Story = {
  id: string;
  title: string;
  sanskrit: string;
  image: string;
  summary: string;
  body: string;
};

export const STORIES: Story[] = [
  {
    id: "ganga",
    title: "The Descent of the Ganga",
    sanskrit: "गंगावतरण",
    image: ganga,
    summary: "A river so vast the earth could not bear it.",
    body:
      "When Bhagirath's penance called the heavenly Ganga down, her force would have shattered the world. Mahadev stood beneath her and received the torrent in his matted locks, releasing her gently as seven calm streams. Power, when held in stillness, becomes blessing.",
  },
  {
    id: "neelkanth",
    title: "Samudra Manthan & Neelkanth",
    sanskrit: "नीलकण्ठ",
    image: neelkanth,
    summary: "He drank the poison the world could not survive.",
    body:
      "As gods and asuras churned the ocean for nectar, the halahala poison rose first. None could touch it. Shiva gathered it and held it in his throat, which turned deep blue. He neither swallowed the darkness nor spat it upon the world — the mark of one who transmutes suffering.",
  },
  {
    id: "ardhanarishvara",
    title: "Ardhanarishvara",
    sanskrit: "अर्धनारीश्वर",
    image: ardhanari,
    summary: "Half Shiva, half Shakti — one indivisible truth.",
    body:
      "Consciousness without energy is inert; energy without consciousness is blind. In the Ardhanarishvara form the two stand as one body, teaching that the divine is never divided, and neither is the seeker.",
  },
  {
    id: "parvati",
    title: "The Marriage to Parvati",
    sanskrit: "शिव-पार्वती विवाह",
    image: temple,
    summary: "Devotion that outlasted lifetimes.",
    body:
      "Parvati took birth again to reach the ascetic who would not open his eyes. Through years of tapasya she matched his stillness with her resolve, until the great renunciate came down from Kailash. Love, here, is not distraction from the path — it is the path completed.",
  },
  {
    id: "tandava",
    title: "The Tandava",
    sanskrit: "ताण्डव",
    image: tandava,
    summary: "The dance in which worlds end and begin.",
    body:
      "Within a ring of fire Nataraja dances: the damru sounding creation, the flame dissolving it, one hand raised in fearlessness, one foot upon the demon of ignorance, one foot lifted in release. Nothing is destroyed that was ever real.",
  },
  {
    id: "tripurantaka",
    title: "Tripurantaka",
    sanskrit: "त्रिपुरान्तक",
    image: kailash,
    summary: "Three cities felled with a single arrow.",
    body:
      "The three flying fortresses of the asuras could be destroyed only in the one instant they aligned. Shiva waited, drew a single arrow, and let it go with a smile. The three cities are said to be the waking, dreaming and sleeping states — pierced together in one moment of awakening.",
  },
];

export type Teaching = { text: string; source: string };

export const TEACHINGS: Teaching[] = [
  { text: "What you resist, you carry. What you witness, you release.", source: "On detachment" },
  { text: "The one who knows the silence between two thoughts knows Shiva.", source: "Vijnana Bhairava, in essence" },
  { text: "Poison becomes ornament in the throat that refuses to pass it on.", source: "On compassion" },
  { text: "Nothing truly ends. Form returns to formlessness, and formlessness dances again.", source: "On transformation" },
  { text: "Be still enough, and even the Ganga will rest in your hair.", source: "On inner strength" },
  { text: "Ash on the body is a reminder, not a sorrow: this too will be light.", source: "On impermanence" },
];

export const GALLERY = [
  { src: tandava, alt: "Nataraja dancing the cosmic Tandava within a ring of fire", w: 1024, h: 1280, title: "Nataraja" },
  { src: ganga, alt: "The descent of the river Ganga into the locks of Shiva", w: 1024, h: 1280, title: "Gangadhara" },
  { src: neelkanth, alt: "Shiva as Neelkanth holding the halahala poison in his throat", w: 1024, h: 768, title: "Neelkanth" },
  { src: ardhanari, alt: "Ardhanarishvara, the united form of Shiva and Parvati", w: 1024, h: 1024, title: "Ardhanarishvara" },
  { src: temple, alt: "Moonlit stone Shiva temple with oil lamps and mist", w: 1024, h: 1024, title: "The Shrine" },
  { src: kailash, alt: "Himalayan peaks at night with prayer flags and snowfall", w: 1920, h: 1088, title: "Kailash" },
  { src: hero, alt: "Mount Kailash beneath a full moon in drifting mist", w: 1920, h: 1088, title: "Moonrise" },
];
