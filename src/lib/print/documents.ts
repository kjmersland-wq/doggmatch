import type { Block, DocContext, DocSection, DocSpec } from "./types";
import { contactGroups, infoFields } from "@/lib/care/records";
import { pick } from "@/i18n";

/**
 * One place where every printable DoggMatch document is described.
 * Document type -> data -> sections -> the shared DoggMatch page template.
 * Adding a new printable means adding one entry here; nothing else changes.
 */

const ageWordsEn: Record<string, string> = {
  puppy: "Puppy",
  adolescent: "Adolescent",
  adult: "Adult",
  senior: "Senior",
};

const ageWordsNo: Record<string, string> = {
  puppy: "Valp",
  adolescent: "Ungdom",
  adult: "Voksen",
  senior: "Eldre",
};

function ageWords(): Record<string, string> {
  return pick({ en: ageWordsEn, no: ageWordsNo });
}

function dogFields(ctx: DocContext): Block {
  const words = ageWords();
  return {
    kind: "fields",
    fields: [
      { label: pick({ en: "Name", no: "Navn" }), value: ctx.dog?.name },
      { label: pick({ en: "Breed", no: "Rase" }), value: ctx.breedName },
      { label: pick({ en: "Age", no: "Alder" }), value: ctx.dog ? words[ctx.dog.ageStage] : undefined },
      { label: pick({ en: "Born", no: "Født" }), value: ctx.details.dob },
      {
        label: pick({ en: "Sex", no: "Kjønn" }),
        value:
          ctx.dog?.sex === "female"
            ? pick({ en: "Female", no: "Tispe" })
            : ctx.dog?.sex === "male"
              ? pick({ en: "Male", no: "Hannhund" })
              : undefined,
      },
      { label: pick({ en: "Colour", no: "Farge" }), value: ctx.details.colour },
      { label: pick({ en: "Weight", no: "Vekt" }), value: ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
      { label: pick({ en: "Microchip", no: "ID-merking" }), value: ctx.details.microchip },
      { label: pick({ en: "Insurance", no: "Forsikring" }), value: ctx.details.insurer },
      { label: pick({ en: "Policy number", no: "Forsikringsnummer" }), value: ctx.details.policy },
    ],
  };
}

function contactBlocks(ctx: DocContext): DocSection[] {
  return contactGroups.map((group) => ({
    heading: group.title,
    blocks: [
      {
        kind: "fields",
        fields: group.fields.map((f) => ({
          label: f.label,
          value: ctx.contacts[group.id]?.[f.key],
        })),
      } as Block,
    ],
  }));
}

function infoSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Worth knowing about this dog", no: "Verdt å vite om denne hunden" }),
    intro: pick({
      en: "Written down by the owner, so nobody has to remember it under pressure.",
      no: "Skrevet ned av eieren, så ingen trenger å huske det under press.",
    }),
    blocks: infoFields.map((field) => ({
      kind: "fields",
      fields: [{ label: field.label, value: ctx.info[field.key], wide: true }],
    })),
  };
}

function feedingSection(ctx: DocContext): DocSection {
  const p = ctx.portions;
  return {
    heading: pick({ en: "Food & feeding", no: "Mat og fôring" }),
    intro: p
      ? pick({
          en: "The amounts below are a starting point worked out from weight, age and how busy your days are — not a prescription. Watch your dog's shape and adjust.",
          no: "Mengdene under er et utgangspunkt, regnet ut fra vekt, alder og hvor travle dagene dine er — ikke en fasit. Følg med på hundens form og juster.",
        })
      : pick({
          en: "Fill in what your dog eats, so anyone looking after them gets it right.",
          no: "Fyll inn hva hunden din spiser, så alle som passer den får det riktig.",
        }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Food", no: "Mat" }), value: ctx.care.foodType },
          {
            label: pick({ en: "Energy on the bag", no: "Energi på posen" }),
            value: ctx.care.foodEnergy ? `${ctx.care.foodEnergy} kcal / 100 g` : undefined,
          },
          {
            label: pick({ en: "Meals a day", no: "Måltider per dag" }),
            value: p ? String(p.mealsPerDay) : ctx.care.mealsPerDay ? String(ctx.care.mealsPerDay) : undefined,
          },
          {
            label: pick({ en: "Roughly per day", no: "Omtrent per dag" }),
            value: p
              ? p.gramsPerDay
                ? `${p.gramsPerDay} g (${pick({ en: "about", no: "omtrent" })} ${p.dailyKcal} kcal)`
                : `${p.dailyKcal} kcal`
              : undefined,
          },
          { label: pick({ en: "Roughly per meal", no: "Omtrent per måltid" }), value: p?.gramsPerMeal ? `${p.gramsPerMeal} g` : undefined },
          {
            label: pick({ en: "Treats", no: "Godbiter" }),
            value: p ? pick({ en: `Keep under about ${p.treatKcal} kcal a day`, no: `Hold deg under omtrent ${p.treatKcal} kcal om dagen` }) : undefined,
          },
          { label: pick({ en: "Feeding times", no: "Fôringstider" }) },
          { label: pick({ en: "Fresh water", no: "Rent vann" }), value: pick({ en: "Topped up and clean, always", no: "Fylt opp og rent, alltid" }) },
          { label: pick({ en: "Notes", no: "Notater" }), wide: true },
        ],
      },
      {
        kind: "week",
        days: ctx.week.map((d) => ({ name: d.name, items: [pick({ en: "Breakfast", no: "Frokost" }), pick({ en: "Dinner", no: "Middag" })] })),
      },
      {
        kind: "note",
        text: pick({
          en: "Any amount here is an estimate to start from. If your dog is losing or gaining weight, or you're unsure, your vet is the best person to ask.",
          no: "Alle mengder her er anslag å starte med. Går hunden opp eller ned i vekt, eller du er usikker, er veterinæren den beste å spørre.",
        }),
      },
    ],
  };
}

function weekSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Our week", no: "Vår uke" }),
    intro: pick({
      en: "Built from what you've told us about your dog. Change anything that doesn't suit your days.",
      no: "Satt sammen ut fra det du har fortalt oss om hunden din. Endre alt som ikke passer dagene dine.",
    }),
    blocks: [
      {
        kind: "week",
        days: ctx.week.map((d) => ({ name: d.name, items: d.items.map((i) => i.label) })),
      },
    ],
  };
}

function trainingSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Training", no: "Trening" }),
    intro: pick({
      en: "A few short sessions beat one long one. Tick things off as you go.",
      no: "Noen korte økter slår én lang. Kryss av etter hvert som du går.",
    }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Where we're at", no: "Hvor vi står" }), value: ctx.dog?.level },
          {
            label: pick({ en: "What we're working on", no: "Det vi jobber med" }),
            value: ctx.skills.map((s) => s.title).join(", ") || undefined,
            wide: true,
          },
        ],
      },
      { kind: "checklist", items: ctx.skills.map((s) => s.title), columns: 1 },
      { kind: "lines", count: 6, label: pick({ en: "How it went", no: "Hvordan det gikk" }) },
    ],
  };
}

function healthSection(ctx: DocContext): DocSection {
  const recent = ctx.weights.slice(-6);
  return {
    heading: pick({ en: "Health", no: "Helse" }),
    intro: pick({ en: "Owner-kept notes. Nothing here is a diagnosis.", no: "Notater ført av eieren. Ingenting her er en diagnose." }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Weight now", no: "Vekt nå" }), value: ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
          { label: pick({ en: "Body shape", no: "Holdfasong" }), value: ctx.care.bodyCondition },
          {
            label: pick({ en: "Neutered", no: "Kastrert" }),
            value: ctx.care.neutered === undefined ? undefined : ctx.care.neutered ? pick({ en: "Yes", no: "Ja" }) : pick({ en: "No", no: "Nei" }),
          },
          { label: pick({ en: "Medication", no: "Medisiner" }), value: ctx.info.medication, wide: true },
          { label: pick({ en: "Allergies and sensitivities", no: "Allergier og sensitivitet" }), value: ctx.info.allergies, wide: true },
          { label: pick({ en: "Health worth knowing about", no: "Helse verdt å vite om" }), value: ctx.info.health, wide: true },
        ],
      },
      ...(recent.length
        ? [
            {
              kind: "fields",
              fields: recent.map((w) => ({ label: w.day, value: `${w.kg} kg` })),
            } as Block,
          ]
        : [{ kind: "lines", count: 4, label: pick({ en: "Weight log", no: "Vektlogg" }) } as Block]),
      {
        kind: "note",
        text: pick({
          en: "If you're worried about a change in your dog's health, your veterinarian is the best person to ask.",
          no: "Er du bekymret for en endring i hundens helse, er veterinæren den beste å spørre.",
        }),
      },
    ],
  };
}

function groomingSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Grooming & everyday care", no: "Stell og daglig pleie" }),
    intro: pick({ en: "The small things that keep a dog comfortable.", no: "De små tingene som holder en hund komfortabel." }),
    blocks: [
      {
        kind: "week",
        days: ctx.week.map((d) => ({
          name: d.name,
          items: d.items.filter((i) => i.kind === "care").map((i) => i.label),
        })),
      },
      {
        kind: "checklist",
        items: pick({
          en: ["Teeth", "Brush through", "Nails", "Ears", "Eyes", "Paws and pads", "Skin and lumps", "Bath (only when needed)"],
          no: ["Tenner", "Børste gjennom", "Klør", "Ører", "Øyne", "Poter og trynepute", "Hud og kuler", "Bad (kun ved behov)"],
        }),
        columns: 2,
      },
      { kind: "lines", count: 4, label: pick({ en: "Notes", no: "Notater" }) },
    ],
  };
}

function vetSection(ctx: DocContext): DocSection {
  const latest = ctx.visits[0];
  return {
    heading: pick({ en: "For the vet", no: "Til veterinæren" }),
    intro: pick({
      en: "This information is written down by the owner to help organise observations and questions for a veterinary visit.",
      no: "Denne informasjonen er skrevet ned av eieren for å organisere observasjoner og spørsmål til et veterinærbesøk.",
    }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Date", no: "Dato" }), value: latest?.date },
          { label: pick({ en: "Why we're going", no: "Hvorfor vi skal dit" }), value: latest?.reason, wide: true },
          {
            label: pick({ en: "Weight", no: "Vekt" }),
            value: latest?.weightKg ? `${latest.weightKg} kg` : ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined,
          },
          { label: pick({ en: "What I want to ask", no: "Det jeg vil spørre om" }), value: latest?.questions, wide: true },
          { label: pick({ en: "What we were told", no: "Det vi fikk vite" }), value: latest?.notes, wide: true },
          { label: pick({ en: "Follow-up", no: "Oppfølging" }), value: latest?.followUp, wide: true },
          { label: pick({ en: "Next appointment", no: "Neste time" }), value: latest?.next },
        ],
      },
      { kind: "lines", count: 8, label: pick({ en: "Room for notes on the day", no: "Plass til notater på dagen" }) },
    ],
  };
}

function handoverSections(ctx: DocContext): DocSection[] {
  const name = ctx.dog?.name ?? pick({ en: "our dog", no: "hunden vår" });
  return [
    {
      heading: pick({ en: `Caring for ${name}`, no: `Å passe ${name}` }),
      intro: pick({
        en: "Everything someone would need if they're looking after your dog for a day or a fortnight.",
        no: "Alt noen trenger hvis de skal passe hunden din en dag eller to uker.",
      }),
      blocks: [dogFields(ctx)],
    },
    feedingSection(ctx),
    { ...weekSection(ctx), heading: pick({ en: "A normal day and week", no: "En vanlig dag og uke" }) },
    infoSection(ctx),
    ...contactBlocks(ctx).filter((s) =>
      [pick({ en: "Owner", no: "Eier" }), pick({ en: "Our vet", no: "Vår veterinær" }), pick({ en: "Out-of-hours vet", no: "Vakttelefon veterinær" })].includes(
        s.heading,
      ),
    ),
  ];
}

export const documents: DocSpec[] = [
  {
    id: "profile",
    title: pick({ en: "Dog profile card", no: "Profilkort for hunden" }),
    blurb: pick({ en: "One page with the essentials. Handy for sitters, boarding and travelling.", no: "Én side med det viktigste. Praktisk for hundepassere, hundepensjonat og reise." }),
    build: (ctx) => [
      { heading: pick({ en: "My dog", no: "Min hund" }), blocks: [dogFields(ctx)] },
      {
        heading: pick({ en: "In an emergency", no: "Ved en nødsituasjon" }),
        blocks: [
          {
            kind: "fields",
            fields: [
              { label: pick({ en: "Owner", no: "Eier" }), value: ctx.contacts["owner"]?.["name"] },
              { label: pick({ en: "Phone", no: "Telefon" }), value: ctx.contacts["owner"]?.["phone"] },
              { label: pick({ en: "Vet", no: "Veterinær" }), value: ctx.contacts["vet"]?.["clinic"] },
              { label: pick({ en: "Vet phone", no: "Veterinærens telefon" }), value: ctx.contacts["vet"]?.["phone"] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "contacts",
    title: pick({ en: "Important contacts", no: "Viktige kontakter" }),
    blurb: pick({ en: "The people who help look after your dog, all on one sheet.", no: "Alle som hjelper til med å passe hunden din, på ett ark." }),
    build: (ctx) => [{ heading: pick({ en: "My dog", no: "Min hund" }), blocks: [dogFields(ctx)] }, ...contactBlocks(ctx)],
  },
  {
    id: "food",
    title: pick({ en: "Food & feeding plan", no: "Mat- og fôringsplan" }),
    blurb: pick({ en: "What your dog eats, roughly how much, and a simple week to tick off.", no: "Hva hunden din spiser, omtrent hvor mye, og en enkel uke å krysse av." }),
    build: (ctx) => [feedingSection(ctx)],
  },
  {
    id: "health",
    title: pick({ en: "Health summary", no: "Helseoversikt" }),
    blurb: pick({ en: "Weight, medication and the things you'd want to remember.", no: "Vekt, medisiner og tingene du vil huske." }),
    build: (ctx) => [healthSection(ctx)],
  },
  {
    id: "grooming",
    title: pick({ en: "Grooming checklist", no: "Stellsjekkliste" }),
    blurb: pick({ en: "Teeth, coat, nails, ears — the everyday care rhythm.", no: "Tenner, pels, klør, ører — den daglige stellrytmen." }),
    build: (ctx) => [groomingSection(ctx)],
  },
  {
    id: "training",
    title: pick({ en: "Training plan", no: "Treningsplan" }),
    blurb: pick({ en: "This week's skills, with room to write how each session went.", no: "Ukens ferdigheter, med plass til å skrive hvordan hver økt gikk." }),
    build: (ctx) => [trainingSection(ctx)],
  },
  {
    id: "week",
    title: pick({ en: "Weekly dog plan", no: "Ukentlig hundeplan" }),
    blurb: pick({ en: "Your week at a glance — walks, training, food and care.", no: "Uken din på ett blikk — turer, trening, mat og stell." }),
    build: (ctx) => [weekSection(ctx)],
  },
  {
    id: "planner",
    title: pick({ en: "Blank weekly planner", no: "Tom ukeplanlegger" }),
    blurb: pick({ en: "Morning, afternoon, evening. Made for the fridge door.", no: "Morgen, ettermiddag, kveld. Laget for kjøleskapsdøren." }),
    build: (ctx) => [
      {
        heading: pick({ en: "Our week", no: "Vår uke" }),
        intro: pick({ en: "Write it in however suits you.", no: "Skriv det inn slik det passer deg." }),
        blocks: [
          {
            kind: "planner",
            days: ctx.week.map((d) => d.name),
            rows: pick({ en: ["Morning", "Afternoon", "Evening"], no: ["Morgen", "Ettermiddag", "Kveld"] }),
          },
        ],
      },
    ],
  },
  {
    id: "vet",
    title: pick({ en: "Vet visit notes", no: "Notater fra veterinærbesøk" }),
    blurb: pick({ en: "Questions to ask and space for what you're told. Take it with you.", no: "Spørsmål å stille og plass til det du får vite. Ta det med deg." }),
    build: (ctx) => [vetSection(ctx)],
  },
  {
    id: "info",
    title: pick({ en: "Important information", no: "Viktig informasjon" }),
    blurb: pick({ en: "Allergies, medication, fears, favourites and special instructions.", no: "Allergier, medisiner, frykt, favoritter og spesielle instrukser." }),
    build: (ctx) => [infoSection(ctx)],
  },
  {
    id: "handover",
    title: pick({ en: "Caring for my dog", no: "Å passe hunden min" }),
    blurb: pick({ en: "For family, a friend, a sitter or boarding. Everything they'd need.", no: "For familie, en venn, hundepasser eller pensjonat. Alt de trenger." }),
    build: handoverSections,
  },
];

export const documentsById: Record<string, DocSpec> = Object.fromEntries(
  documents.map((d) => [d.id, d]),
);

/** The complete pack, in the order it reads best on paper. */
export const packOrder = ["profile", "contacts", "food", "health", "grooming", "training", "week", "vet", "info"];

export function buildDocument(ids: string[], ctx: DocContext): DocSection[] {
  const ordered = packOrder
    .filter((id) => ids.includes(id))
    .concat(ids.filter((id) => !packOrder.includes(id)));
  return ordered.flatMap((id, index) => {
    const spec = documentsById[id];
    if (!spec) return [];
    return spec.build(ctx).map((section, i) => ({
      ...section,
      newPage: section.newPage ?? (i === 0 && index > 0),
    }));
  });
}
