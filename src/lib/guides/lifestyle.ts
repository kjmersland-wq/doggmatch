import { breeds, type Breed, type BreedTraits } from "@/data/breeds";
import type { CopyMap } from "@/i18n";

/**
 * High-intent lifestyle guides. Each guide is honest editorial content plus a
 * shortlist computed directly from the same trait data the matching engine
 * uses — so what the guide recommends is exactly what the quiz would.
 *
 * English is the source language; other locales fall back to English until
 * translated (pick() in src/i18n handles the fallback).
 */

export interface GuideMetric {
  key: keyof BreedTraits;
  label: string;
}

export interface GuideSection {
  title: string;
  paragraphs: string[];
}

/** Everything a reader sees on a guide page, in one language. */
export interface GuideCopy {
  eyebrow: string;
  h1: string;
  intro: string;
  howChosenTitle: string;
  howChosen: string[];
  listTitle?: string;
  listIntro?: string;
  metrics: GuideMetric[];
  readProfile: string;
  tradeoffNote?: string;
  sections?: GuideSection[];
  quizTitle: string;
  quizBody: string;
  quizCta: string;
  compareCta: string;
  levelLabels: string[];
  /** Column headings for the cost table (cost guide only). */
  costTable?: { example: string; breed: string; yearly: string };
}

export interface GuideSeo {
  title: string;
  description: string;
}

/**
 * Every translatable value sits in a `{ en: ... }` map, so a new language is
 * added by dropping a sibling key beside the English one — no code changes,
 * and English keeps showing until the translation exists.
 */
export interface LifestyleGuideConfig {
  id: string;
  path: string;
  seo: CopyMap<GuideSeo>;
  copy: CopyMap<GuideCopy>;
  /** Deterministic shortlist from real trait data. */
  shortlist?: Breed[];
  /** One honest line per shortlisted breed, keyed by breed id. */
  reasons?: CopyMap<Record<string, string>>;
  /** Example breeds with real yearly cost ranges (cost guide). */
  costExamples?: { breed: Breed; sizeLabel: CopyMap<string> }[];
}

const levelLabels = ["Very low", "Low", "Moderate", "High", "Very high"];

const quizBlock = {
  quizTitle: "Your week is the other half of the match",
  quizBody:
    "A shortlist is a starting point, not an answer. The Find My Dog quiz weighs your home, your time, your experience and your week against every breed's traits — and shows you the reasoning behind each score, so you can judge it for yourself.",
  quizCta: "Take the Find My Dog quiz",
  compareCta: "Compare breeds side by side",
  levelLabels,
};

function byIds(ids: string[]): Breed[] {
  return ids
    .map((id) => breeds.find((b) => b.id === id))
    .filter((b): b is Breed => Boolean(b));
}

/* ------------------------------------------------------------------ */
/* 1. Apartment living                                                 */
/* ------------------------------------------------------------------ */

export const APARTMENT_GUIDE: LifestyleGuideConfig = {
  id: "apartment-dogs",
  path: "/best-apartment-dogs",
  seo: { en: {
    title: "Best dog breeds for apartment living | DoggMatch",
    description:
      "The best dogs for flats, chosen for calm indoor manners and low barking rather than small size — with the honest trade-offs of each breed.",
  } },
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "The best dog breeds for apartment living",
    intro:
      "A small dog is not automatically a good flat dog, and a big dog is not automatically a bad one. What actually decides it is noise, energy indoors, and how the dog copes with neighbours, stairs and time alone. Here's our honest shortlist — and the trade-offs that come with each name on it.",
    howChosenTitle: "How we chose",
    howChosen: [
      "We started from the same trait data the matching engine uses: apartment suitability, barking, exercise needs and alone tolerance.",
      "Barking weighed heaviest. In a block of flats, a vocal dog is the thing that makes neighbours knock — whatever its size.",
      "No breed is 'maintenance-free'. Every dog on this list still needs two proper walks a day and company most of the time.",
    ],
    listTitle: "Our apartment shortlist",
    listIntro:
      "Eight breeds that consistently suit flat living in our data — calm indoors, moderate voice, realistic about stairs and lifts.",
    metrics: [
      { key: "apartmentSuitability", label: "Flat living" },
      { key: "barking", label: "Barking" },
      { key: "exerciseNeeds", label: "Exercise needs" },
      { key: "aloneTolerance", label: "Time alone" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "Two honest warnings. Small companion breeds often struggle with being left alone — flat or house makes no difference to that. And a shared stairwell means every toilet trip is a small expedition, in every kind of weather, for the next twelve years.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } },
  shortlist: byIds([
    "french-bulldog",
    "pug",
    "cavalier-king-charles-spaniel",
    "whippet",
    "shih-tzu",
    "bichon-frise",
    "dachshund",
    "chihuahua",
  ]),
  reasons: { en: {
    "french-bulldog":
      "Quiet, low-exercise and happiest beside you — but heat-sensitive and prone to expensive health problems.",
    pug: "Calm and comical indoors; snoring, heat sensitivity and vet bills are part of the package.",
    "cavalier-king-charles-spaniel":
      "The classic gentle flat companion — but hates being alone, and heart disease is common in the breed.",
    whippet: "Sprints outside, sleeps all day inside. Genuinely one of the quietest, cleanest flat dogs there is.",
    "shih-tzu": "Bred for centuries to live in rooms, not fields. The coat, though, is a weekly commitment.",
    "bichon-frise": "Cheerful and low-shedding; the trade-off is professional grooming every 6–8 weeks.",
    dachshund: "Small and portable — but surprisingly vocal, and backs need protecting from stairs and jumps.",
    chihuahua: "Tiny and flat-friendly in size; many bark more than neighbours would like, so training matters.",
  } },
};

/* ------------------------------------------------------------------ */
/* 2. First-time owners                                                */
/* ------------------------------------------------------------------ */

export const FIRST_TIME_GUIDE: LifestyleGuideConfig = {
  id: "first-time-owners",
  path: "/best-dogs-for-first-time-owners",
  seo: { en: {
    title: "Best dog breeds for first-time owners | DoggMatch",
    description:
      "The best dogs for beginners: forgiving, trainable breeds that shrug off first-year mistakes — chosen from real trait data, with the trade-offs spelled out.",
  } },
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "The best dog breeds for first-time owners",
    intro:
      "Everyone gets things wrong in the first year — feeding too much, training inconsistently, worrying at the wrong moments. The kindest thing you can do for yourself is pick a dog that forgives that. Here's our honest shortlist of breeds that do, and what each one asks in return.",
    howChosenTitle: "How we chose",
    howChosen: [
      "We ranked breeds by first-time suitability and trainability in the same trait data the matching engine uses — not by popularity.",
      "We favoured steady energy over low energy. Very low-energy breeds are often brachycephalic or elderly; very high-energy ones need a job you may not have.",
      "No breed trains itself. 'Easy for beginners' means forgiving of your learning curve — not effortless.",
    ],
    listTitle: "Our first-dog shortlist",
    listIntro:
      "Eight breeds that reliably forgive beginner mistakes, learn quickly, and settle into ordinary family life.",
    metrics: [
      { key: "firstTimeSuitability", label: "First-time owners" },
      { key: "trainability", label: "Trainability" },
      { key: "energy", label: "Energy" },
      { key: "grooming", label: "Grooming" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "One honest caveat: forgiving breeds are often popular breeds, and popularity attracts poor breeding. A calm start depends as much on where the dog comes from as which breed it is — meet the breeder or the rescue, and walk away from anything that feels rushed.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } },
  shortlist: byIds([
    "labrador-retriever",
    "golden-retriever",
    "papillon",
    "rough-collie",
    "toy-poodle",
    "poodle",
    "cavalier-king-charles-spaniel",
    "labradoodle",
  ]),
  reasons: { en: {
    "labrador-retriever":
      "Forgiving, food-motivated and endlessly good-natured — but a serious shedder with a serious appetite.",
    "golden-retriever":
      "The gentle classic: eager to please, patient with mistakes, and covered in hair you will find everywhere.",
    papillon: "A small dog with a big brain — quick to learn, easy to carry, and tougher than it looks.",
    "rough-collie":
      "Soft-mannered and deeply trainable; the full coat needs real brushing, and sensitivity means gentle handling.",
    "toy-poodle": "Bright, trainable and low-shedding in a small package — with professional grooming for life.",
    poodle: "Perhaps the most trainable companion there is; the coat is a standing appointment, not a haircut.",
    "cavalier-king-charles-spaniel":
      "As forgiving as a dog gets — but health screening of the breeder matters more here than almost anywhere.",
    labradoodle:
      "Friendly and clever, though less predictable than the marketing suggests — coat and energy vary dog to dog.",
  } },
};

/* ------------------------------------------------------------------ */
/* 3. Dogs that handle alone time                                      */
/* ------------------------------------------------------------------ */

export const ALONE_GUIDE: LifestyleGuideConfig = {
  id: "dogs-left-alone",
  path: "/dogs-that-can-be-left-alone",
  seo: { en: {
    title: "Dogs that can be left alone longer | DoggMatch",
    description:
      "Which dog breeds cope best with time alone, what 'longer' really means, and how to build alone time kindly — no myths, no guilt, just the honest picture.",
  } },
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "Dogs that can handle being left alone",
    intro:
      "Let's start with the honest part: no dog should regularly spend a whole working day alone. Dogs are social animals, and eight-plus hours is a long time for any of them. But some breeds genuinely cope better with a few hours than others — and if your week includes a commute, that difference matters. Here's the realistic picture.",
    howChosenTitle: "The honest ground rules",
    howChosen: [
      "Four hours is a sensible everyday ceiling for most adult dogs; six is the occasional stretch, not the routine.",
      "Being alone is learned, not inherited. Even an independent breed needs alone time built up in minutes, then hours, from the first weeks.",
      "A walked, settled dog rests; an under-exercised one dismantles your kitchen. What happens before you leave matters more than the breed.",
      "Puppies, seniors and rescue dogs in their first months are a different question entirely — they need far more company.",
    ],
    listTitle: "Breeds that typically cope best",
    listIntro:
      "These breeds score highest for independence and alone tolerance in the same trait data the matching engine uses. Independent often also means less clingy — and sometimes less interested in obedience.",
    metrics: [
      { key: "aloneTolerance", label: "Time alone" },
      { key: "independence", label: "Independence" },
      { key: "energy", label: "Energy" },
      { key: "trainability", label: "Trainability" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "The trade-off is real: the same independence that lets these dogs rest while you're out often makes them less eager to please when you're home. If you work long days every day, the kinder answer isn't a tougher breed — it's a dog walker, daycare, or waiting a few years.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } },
  shortlist: byIds([
    "great-pyrenees",
    "chinese-shar-pei",
    "chow-chow",
    "lhasa-apso",
    "shiba-inu",
    "akita",
    "basenji",
    "rhodesian-ridgeback",
  ]),
  reasons: { en: {
    "great-pyrenees":
      "Bred to watch flocks alone for days — calm and self-sufficient, but giant, sheddy and fond of night barking.",
    "chinese-shar-pei":
      "Naturally reserved and content with its own company; skin and eyes need an owner who stays on top of care.",
    "chow-chow": "The most cat-like of dogs — aloof, quiet and undemanding indoors, but not a cuddler and not for first-timers.",
    "lhasa-apso": "A small, independent watchdog bred for monastery life; the coat is a lifelong commitment.",
    "shiba-inu": "Fastidious, quiet and happy alone for reasonable stretches — with a stubborn streak in training.",
    akita: "Dignified and self-contained; powerful, protective and best with an experienced owner.",
    basenji: "Famously barkless and independent — but clever enough to invent mischief if under-exercised.",
    "rhodesian-ridgeback":
      "Athletic outside, settled and independent at home; needs real exercise before any alone time counts.",
  } },
};

/* ------------------------------------------------------------------ */
/* 4. Low-shedding & allergies                                         */
/* ------------------------------------------------------------------ */

export const LOW_SHEDDING_GUIDE: LifestyleGuideConfig = {
  id: "low-shedding-dogs",
  path: "/low-shedding-dogs",
  seo: { en: {
    title: "Low-shedding dogs and allergies | DoggMatch",
    description:
      "Which dogs shed least, why no dog is truly hypoallergenic, and how to think it through if someone at home is allergic — plus the grooming trade-offs.",
  } },
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "Low-shedding dogs, and living with allergies",
    intro:
      "If someone in your home reacts to dogs, you've probably been told to 'get a hypoallergenic breed'. Here is the honest version: there is no such thing. But there are dogs that spread far less of what triggers the reaction — and for many families that's enough. Here's what actually helps, and what it costs you in grooming.",
    howChosenTitle: "What the science actually says",
    howChosen: [
      "The trigger is a protein (Can f 1) found in saliva, skin flakes and urine — not in hair itself. Every dog produces it.",
      "Low-shedding coats hold onto dander instead of dropping it around the house. That reduces how much spreads — it doesn't remove it.",
      "Studies have found no consistent difference in allergen levels between 'hypoallergenic' and ordinary breeds. Individual dogs vary more than breeds do.",
      "Low shedding almost always means high grooming: coats that don't fall out keep growing, and need clipping every 6–8 weeks for life.",
    ],
    listTitle: "Breeds that shed the least",
    listIntro:
      "Eight breeds with genuinely low-shedding coats in our trait data. Treat this as a starting point for meeting dogs — not a guarantee.",
    metrics: [
      { key: "shedding", label: "Shedding" },
      { key: "grooming", label: "Grooming" },
      { key: "energy", label: "Energy" },
      { key: "firstTimeSuitability", label: "First-time owners" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "Before you commit: spend several hours with adult dogs of the exact breed, more than once, and talk to a doctor — ideally with an allergy test. A trial visit beats any list, including this one. The quiz asks about allergies at home and weighs shedding into every match it makes.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } },
  shortlist: byIds([
    "poodle",
    "miniature-schnauzer",
    "shih-tzu",
    "bichon-frise",
    "yorkshire-terrier",
    "maltipoo",
    "havanese",
    "maltese",
  ]),
  reasons: { en: {
    poodle: "The benchmark low-shedding coat — clever, trainable, and at the groomer every 6–8 weeks without fail.",
    "miniature-schnauzer":
      "Hardly sheds at all and full of character; needs hand-stripping or clipping and firm, kind training.",
    "shih-tzu": "Hair rather than fluff — very little drops, but daily brushing or a short clip is non-negotiable.",
    "bichon-frise": "A cheerful powder-puff that keeps its coat to itself; professional grooming is a fixed monthly cost.",
    "yorkshire-terrier":
      "Silky, low-shedding and portable; a big-dog voice in a small body, and a coat that tangles fast.",
    maltipoo:
      "A popular low-shedding cross — coats vary puppy to puppy, so meet the litter rather than trusting the label.",
    havanese: "Gentle, sociable and light on shedding; the long coat needs daily attention or a practical pet clip.",
    maltese: "Centuries as a companion, barely sheds — but the white coat shows every tear stain and tangle.",
  } },
};

/* ------------------------------------------------------------------ */
/* 5. What a dog really costs                                          */
/* ------------------------------------------------------------------ */

type CostExample = { breed: Breed; sizeLabel: CopyMap<string> };

function costExample(id: string, sizeLabel: CopyMap<string>): CostExample | null {
  const breed = breeds.find((b) => b.id === id);
  return breed ? { breed, sizeLabel } : null;
}

export const COST_GUIDE: LifestyleGuideConfig = {
  id: "what-a-dog-costs",
  path: "/what-a-dog-costs",
  seo: { en: {
    title: "What a dog really costs each year | DoggMatch",
    description:
      "An honest yearly budget for a dog: food, vet care, insurance, grooming and the costs everyone forgets — with real ranges and the first year counted apart.",
  } },
  copy: { en: {
    eyebrow: "Before you decide",
    h1: "What a dog really costs",
    intro:
      "Most people budget for food and forget the rest. The honest answer is that a dog costs more than the purchase price every single year — and the first year most of all. None of this is meant to put you off. It's meant to make sure the dog you bring home never has to pay for a budget that wasn't real.",
    howChosenTitle: "How these numbers work",
    howChosen: [
      "Every range below is a planning figure, not a quote — costs vary by country, by the size of the dog, and by individual health.",
      "The first year includes one-off costs: the dog itself, equipment, initial vaccinations, and often castration or spaying.",
      "Insurance is the single biggest variable. Get a real quote for the exact breed before you commit — premiums differ enormously.",
      "All figures are in euros. Every breed profile on DoggMatch carries a full cost calculator with the same ranges, broken down line by line.",
    ],
    metrics: [],
    readProfile: "See the full cost breakdown",
    sections: [
      {
        title: "The first year",
        paragraphs: [
          "Expect roughly €1,500–€4,000 depending on the dog and where you live. The dog itself is usually the largest single line: a well-bred puppy from health-tested parents typically costs €1,000–€2,500, while adoption fees are usually €150–€400 and include the first vet work.",
          "Then come the one-offs people forget: vaccinations and microchipping, castration or spaying (often €200–€600), equipment like a bed, lead, crate and bowls (€200–€400), and a puppy training course (€100–€250). Add pet insurance from day one — the month you skip is the month something happens.",
        ],
      },
      {
        title: "Every year after",
        paragraphs: [
          "Food scales with size: a small dog might eat €25–€40 a month, a large one €70–€120. Routine vet care — vaccinations, worming, flea and tick treatment, an annual check — is a predictable €150–€400 a year. Insurance typically runs €20–€60 a month and rises as the dog ages.",
          "Grooming is the quiet budget-breaker. Short-coated dogs need almost nothing; a poodle-coated dog needs professional clipping every 6–8 weeks, which is €400–€900 a year, every year, for life.",
        ],
      },
      {
        title: "The costs almost everyone forgets",
        paragraphs: [
          "Holidays: boarding or a sitter easily adds €300–€800 a year if you travel. Dental work: many dogs need at least one professional clean in mid-life, often €300–€700. And the buffer: sooner or later there is a year with a swallowed sock, a torn cruciate ligament or an unexplained limp, and that year costs €1,000–€4,000 you didn't plan.",
          "A working rule of thumb: if the regular budget is comfortable and you can absorb a surprise €2,000 without debt, you're ready. If either part makes you wince, waiting a year and saving is the kindest thing you can do for your future dog.",
        ],
      },
      {
        title: "Where the money actually goes",
        paragraphs: [
          "Below are three real examples from our breed data — the yearly range we show on each breed's profile, covering food, routine care, grooming and the rest. The spread within each range is mostly size, country and insurance choices.",
        ],
      },
    ],
    quizTitle: "See what your shortlist would really cost",
    quizBody:
      "Every breed profile carries the same honest yearly range, and the Find My Dog quiz matches you with breeds that fit your week — so the budget you plan is for a dog that actually suits your life.",
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
    costTable: {
      example: "Example",
      breed: "Breed",
      yearly: "Typical yearly cost",
    },
  } },
  costExamples: [
    costExample("chihuahua", { en: "A small dog (up to about 10 kg)" }),
    costExample("cocker-spaniel", { en: "A medium dog (about 10–25 kg)" }),
    costExample("bernese-mountain-dog", { en: "A large dog (over about 25 kg)" }),
  ].filter((x): x is CostExample => Boolean(x)),
};

export const LIFESTYLE_GUIDES = [
  APARTMENT_GUIDE,
  FIRST_TIME_GUIDE,
  ALONE_GUIDE,
  LOW_SHEDDING_GUIDE,
  COST_GUIDE,
];

/**
 * Links from the /guides hub sections to the full guide pages.
 * Labels are translated for en/no/pl; other locales fall back to English
 * until translated.
 */
export const GUIDE_HUB_LINKS: Record<
  string,
  { path: string; label: { en: string; no: string; pl: string } }
> = {
  "family-dogs": {
    path: "/best-dog-breeds-for-families",
    label: {
      en: "Read the full guide to the best dog breeds for families",
      no: "Les hele guiden til de beste hunderasene for familier",
      pl: "Przeczytaj pełny przewodnik po najlepszych rasach dla rodzin",
    },
  },
  "flat-living": {
    path: APARTMENT_GUIDE.path,
    label: {
      en: "Read the full guide to the best apartment dogs",
      no: "Les hele guiden til de beste hundene for leilighet",
      pl: "Przeczytaj pełny przewodnik po najlepszych psach do mieszkania",
    },
  },
  "first-dog": {
    path: FIRST_TIME_GUIDE.path,
    label: {
      en: "Read the full guide for first-time owners",
      no: "Les hele guiden for førstegangseiere",
      pl: "Przeczytaj pełny przewodnik dla początkujących właścicieli",
    },
  },
  "calm-dogs": {
    path: ALONE_GUIDE.path,
    label: {
      en: "Read the honest guide to dogs and time alone",
      no: "Les den ærlige guiden om hunder og alene-tid",
      pl: "Przeczytaj szczery przewodnik o psach zostających samym",
    },
  },
  "shedding-allergies": {
    path: LOW_SHEDDING_GUIDE.path,
    label: {
      en: "Read the honest guide to low-shedding dogs and allergies",
      no: "Les den ærlige guiden om lite røytende hunder og allergi",
      pl: "Przeczytaj szczery przewodnik o psach mało liniących i alergii",
    },
  },
  "yearly-cost": {
    path: COST_GUIDE.path,
    label: {
      en: "Read the full guide to what a dog really costs",
      no: "Les hele guiden om hva en hund egentlig koster",
      pl: "Przeczytaj pełny przewodnik o prawdziwych kosztach psa",
    },
  },
};
