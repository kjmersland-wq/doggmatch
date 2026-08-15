import type { Block, DocContext, DocSection, DocSpec } from "./types";
import { contactGroups, infoFields } from "@/lib/care/records";

/**
 * One place where every printable DoggMatch document is described.
 * Document type -> data -> sections -> the shared DoggMatch page template.
 * Adding a new printable means adding one entry here; nothing else changes.
 */

const ageWords: Record<string, string> = {
  puppy: "Puppy",
  adolescent: "Adolescent",
  adult: "Adult",
  senior: "Senior",
};

function dogFields(ctx: DocContext): Block {
  return {
    kind: "fields",
    fields: [
      { label: "Name", value: ctx.dog?.name },
      { label: "Breed", value: ctx.breedName },
      { label: "Age", value: ctx.dog ? ageWords[ctx.dog.ageStage] : undefined },
      { label: "Born", value: ctx.details.dob },
      { label: "Sex", value: ctx.dog?.sex === "female" ? "Female" : ctx.dog?.sex === "male" ? "Male" : undefined },
      { label: "Colour", value: ctx.details.colour },
      { label: "Weight", value: ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
      { label: "Microchip", value: ctx.details.microchip },
      { label: "Insurance", value: ctx.details.insurer },
      { label: "Policy number", value: ctx.details.policy },
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
    heading: "Worth knowing about this dog",
    intro: "Written down by the owner, so nobody has to remember it under pressure.",
    blocks: infoFields.map((field) => ({
      kind: "fields",
      fields: [{ label: field.label, value: ctx.info[field.key], wide: true }],
    })),
  };
}

function feedingSection(ctx: DocContext): DocSection {
  const p = ctx.portions;
  return {
    heading: "Food & feeding",
    intro: p
      ? "The amounts below are a starting point worked out from weight, age and how busy your days are — not a prescription. Watch your dog's shape and adjust."
      : "Fill in what your dog eats, so anyone looking after them gets it right.",
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: "Food", value: ctx.care.foodType },
          { label: "Energy on the bag", value: ctx.care.foodEnergy ? `${ctx.care.foodEnergy} kcal / 100 g` : undefined },
          { label: "Meals a day", value: p ? String(p.mealsPerDay) : ctx.care.mealsPerDay ? String(ctx.care.mealsPerDay) : undefined },
          { label: "Roughly per day", value: p ? (p.gramsPerDay ? `${p.gramsPerDay} g (about ${p.dailyKcal} kcal)` : `${p.dailyKcal} kcal`) : undefined },
          { label: "Roughly per meal", value: p?.gramsPerMeal ? `${p.gramsPerMeal} g` : undefined },
          { label: "Treats", value: p ? `Keep under about ${p.treatKcal} kcal a day` : undefined },
          { label: "Feeding times" },
          { label: "Fresh water", value: "Topped up and clean, always" },
          { label: "Notes", wide: true },
        ],
      },
      {
        kind: "week",
        days: ctx.week.map((d) => ({ name: d.name, items: ["Breakfast", "Dinner"] })),
      },
      {
        kind: "note",
        text: "Any amount here is an estimate to start from. If your dog is losing or gaining weight, or you're unsure, your vet is the best person to ask.",
      },
    ],
  };
}

function weekSection(ctx: DocContext): DocSection {
  return {
    heading: "Our week",
    intro: "Built from what you've told us about your dog. Change anything that doesn't suit your days.",
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
    heading: "Training",
    intro: "A few short sessions beat one long one. Tick things off as you go.",
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: "Where we're at", value: ctx.dog?.level },
          { label: "What we're working on", value: ctx.skills.map((s) => s.title).join(", ") || undefined, wide: true },
        ],
      },
      { kind: "checklist", items: ctx.skills.map((s) => s.title), columns: 1 },
      { kind: "lines", count: 6, label: "How it went" },
    ],
  };
}

function healthSection(ctx: DocContext): DocSection {
  const recent = ctx.weights.slice(-6);
  return {
    heading: "Health",
    intro: "Owner-kept notes. Nothing here is a diagnosis.",
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: "Weight now", value: ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
          { label: "Body shape", value: ctx.care.bodyCondition },
          { label: "Neutered", value: ctx.care.neutered === undefined ? undefined : ctx.care.neutered ? "Yes" : "No" },
          { label: "Medication", value: ctx.info.medication, wide: true },
          { label: "Allergies and sensitivities", value: ctx.info.allergies, wide: true },
          { label: "Health worth knowing about", value: ctx.info.health, wide: true },
        ],
      },
      ...(recent.length
        ? [
            {
              kind: "fields",
              fields: recent.map((w) => ({ label: w.day, value: `${w.kg} kg` })),
            } as Block,
          ]
        : [{ kind: "lines", count: 4, label: "Weight log" } as Block]),
      {
        kind: "note",
        text: "If you're worried about a change in your dog's health, your veterinarian is the best person to ask.",
      },
    ],
  };
}

function groomingSection(ctx: DocContext): DocSection {
  return {
    heading: "Grooming & everyday care",
    intro: "The small things that keep a dog comfortable.",
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
        items: ["Teeth", "Brush through", "Nails", "Ears", "Eyes", "Paws and pads", "Skin and lumps", "Bath (only when needed)"],
        columns: 2,
      },
      { kind: "lines", count: 4, label: "Notes" },
    ],
  };
}

function vetSection(ctx: DocContext): DocSection {
  const latest = ctx.visits[0];
  return {
    heading: "For the vet",
    intro:
      "This information is written down by the owner to help organise observations and questions for a veterinary visit.",
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: "Date", value: latest?.date },
          { label: "Why we're going", value: latest?.reason, wide: true },
          { label: "Weight", value: latest?.weightKg ? `${latest.weightKg} kg` : ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
          { label: "What I want to ask", value: latest?.questions, wide: true },
          { label: "What we were told", value: latest?.notes, wide: true },
          { label: "Follow-up", value: latest?.followUp, wide: true },
          { label: "Next appointment", value: latest?.next },
        ],
      },
      { kind: "lines", count: 8, label: "Room for notes on the day" },
    ],
  };
}

function handoverSections(ctx: DocContext): DocSection[] {
  const name = ctx.dog?.name ?? "our dog";
  return [
    {
      heading: `Caring for ${name}`,
      intro: "Everything someone would need if they're looking after your dog for a day or a fortnight.",
      blocks: [dogFields(ctx)],
    },
    feedingSection(ctx),
    { ...weekSection(ctx), heading: "A normal day and week" },
    infoSection(ctx),
    ...contactBlocks(ctx).filter((s) => ["Owner", "Our vet", "Out-of-hours vet"].includes(s.heading)),
  ];
}

export const documents: DocSpec[] = [
  {
    id: "profile",
    title: "Dog profile card",
    blurb: "One page with the essentials. Handy for sitters, boarding and travelling.",
    build: (ctx) => [
      { heading: "My dog", blocks: [dogFields(ctx)] },
      {
        heading: "In an emergency",
        blocks: [
          {
            kind: "fields",
            fields: [
              { label: "Owner", value: ctx.contacts["owner"]?.["name"] },
              { label: "Phone", value: ctx.contacts["owner"]?.["phone"] },
              { label: "Vet", value: ctx.contacts["vet"]?.["clinic"] },
              { label: "Vet phone", value: ctx.contacts["vet"]?.["phone"] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "contacts",
    title: "Important contacts",
    blurb: "The people who help look after your dog, all on one sheet.",
    build: (ctx) => [{ heading: "My dog", blocks: [dogFields(ctx)] }, ...contactBlocks(ctx)],
  },
  {
    id: "food",
    title: "Food & feeding plan",
    blurb: "What your dog eats, roughly how much, and a simple week to tick off.",
    build: (ctx) => [feedingSection(ctx)],
  },
  {
    id: "health",
    title: "Health summary",
    blurb: "Weight, medication and the things you'd want to remember.",
    build: (ctx) => [healthSection(ctx)],
  },
  {
    id: "grooming",
    title: "Grooming checklist",
    blurb: "Teeth, coat, nails, ears — the everyday care rhythm.",
    build: (ctx) => [groomingSection(ctx)],
  },
  {
    id: "training",
    title: "Training plan",
    blurb: "This week's skills, with room to write how each session went.",
    build: (ctx) => [trainingSection(ctx)],
  },
  {
    id: "week",
    title: "Weekly dog plan",
    blurb: "Your week at a glance — walks, training, food and care.",
    build: (ctx) => [weekSection(ctx)],
  },
  {
    id: "planner",
    title: "Blank weekly planner",
    blurb: "Morning, afternoon, evening. Made for the fridge door.",
    build: (ctx) => [
      {
        heading: "Our week",
        intro: "Write it in however suits you.",
        blocks: [
          {
            kind: "planner",
            days: ctx.week.map((d) => d.name),
            rows: ["Morning", "Afternoon", "Evening"],
          },
        ],
      },
    ],
  },
  {
    id: "vet",
    title: "Vet visit notes",
    blurb: "Questions to ask and space for what you're told. Take it with you.",
    build: (ctx) => [vetSection(ctx)],
  },
  {
    id: "info",
    title: "Important information",
    blurb: "Allergies, medication, fears, favourites and special instructions.",
    build: (ctx) => [infoSection(ctx)],
  },
  {
    id: "handover",
    title: "Caring for my dog",
    blurb: "For family, a friend, a sitter or boarding. Everything they'd need.",
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