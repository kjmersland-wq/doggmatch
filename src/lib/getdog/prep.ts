import type { Breed } from "@/data/breeds";

/**
 * Turns the breed trait data we already have into honest preparation notes.
 * Deterministic, and deliberately hedged: this describes what many dogs of a
 * type tend to need, never what a particular dog will definitely be like.
 */

export interface PrepCard {
  id: string;
  title: string;
  headline: string;
  body: string;
}

const scale = (v: number, words: [string, string, string, string, string]) =>
  words[Math.min(4, Math.max(0, Math.round(v) - 1))]!;

export function prepCards(breed: Breed): PrepCard[] {
  const t = breed.traits;

  return [
    {
      id: "activity",
      title: "Activity",
      headline: scale(t.exerciseNeeds, [
        "Short, gentle walks",
        "Around an hour a day",
        "An hour or so, most days",
        "One to two hours, every day",
        "Two hours or more, every day",
      ]),
      body: "Many dogs of this type settle far better in the house when the walking is regular rather than occasional. Build any distance up slowly, especially with a young or older dog.",
    },
    {
      id: "training",
      title: "Training",
      headline: scale(t.trainability, [
        "Patience will be needed",
        "Takes a little persistence",
        "Learns steadily",
        "Learns quickly",
        "Learns very quickly",
      ]),
      body: t.trainability >= 4
        ? "Quick learners pick up the habits you didn't mean to teach just as fast. Short, kind, reward-based sessions from day one."
        : "Independent thinkers aren't being difficult — they simply need a better reason. Keep sessions short and worth their while.",
    },
    {
      id: "food",
      title: "Food",
      headline: scale(t.size, [
        "A small daily amount",
        "A modest daily amount",
        "A moderate daily amount",
        "A substantial daily amount",
        "A large daily amount",
      ]),
      body: "Weigh meals rather than guessing, and count treats as food. My Dog can work out a starting portion once you know their weight.",
    },
    {
      id: "grooming",
      title: "Grooming",
      headline: scale(t.grooming, [
        "Very little upkeep",
        "An occasional brush",
        "A regular brush",
        "Frequent brushing",
        "Brushing plus professional grooming",
      ]),
      body: t.grooming >= 4
        ? "Coats like this mat if they're left. Getting a puppy used to being handled early makes the next fifteen years far easier."
        : "Easy-going coats still need nails, ears and teeth looking after — that part is the same for every dog.",
    },
    {
      id: "shedding",
      title: "Shedding",
      headline: scale(t.shedding, [
        "Sheds very little",
        "Sheds lightly",
        "Sheds moderately",
        "Sheds a good deal",
        "Sheds heavily, all year",
      ]),
      body: "Lower-shedding breeds are sometimes easier for people with allergies, but no dog is completely allergy-free and reactions vary from person to person.",
    },
    {
      id: "dental",
      title: "Dental",
      headline: t.size <= 2 ? "Worth extra attention" : "Part of the weekly routine",
      body: t.size <= 2
        ? "Smaller mouths tend to have more crowded teeth, and dental problems are common in middle age. Daily brushing is the cheapest care there is."
        : "Brushing a few times a week, started early, saves a great deal of money and discomfort later on.",
    },
    {
      id: "weight",
      title: "Weight",
      headline: t.energy <= 2 ? "Easy to overfeed" : "Keep an eye as they mature",
      body: "You should be able to feel the ribs easily without pressing. Weight creeps on slowly — a monthly note in My Dog catches it early.",
    },
    {
      id: "mental",
      title: "Mental stimulation",
      headline: scale(t.mentalStimulation, [
        "Content with quiet days",
        "A little variety is plenty",
        "Needs something to do",
        "Needs a job most days",
        "Needs real work to be content",
      ]),
      body: t.mentalStimulation >= 4
        ? "Boredom in this kind of dog usually shows up as noise, chewing or invented jobs. Scentwork, training and puzzles cost you ten minutes and buy hours of calm."
        : "A sniffy walk, a chew and a bit of training is usually enough to keep this kind of dog settled.",
    },
    {
      id: "home",
      title: "Home",
      headline: t.apartmentSuitability >= 4
        ? "Usually fine in a flat"
        : t.apartmentSuitability >= 3
          ? "A flat can work with good walks"
          : "Happier with more space and daily outdoor time",
      body: "What matters most is the walking near your door and the hours you keep, not the number of rooms.",
    },
    {
      id: "alone",
      title: "Time alone",
      headline: scale(t.aloneTolerance, [
        "Finds being alone hard",
        "Prefers company most of the day",
        "Manages a few hours",
        "Copes well with a normal working morning",
        "Fairly independent",
      ]),
      body: "There's no single maximum that fits every dog. Age, training and temperament all change the answer — and being alone is a skill you teach gradually.",
    },
    {
      id: "social",
      title: "Social life",
      headline: scale(t.sociability, [
        "Reserved with strangers",
        "Takes a while to warm up",
        "Friendly once introduced",
        "Sociable with most people",
        "Delighted by everyone",
      ]),
      body: "Early, calm, positive introductions to people, dogs, traffic and handling shape this more than the breed does.",
    },
    {
      id: "health",
      title: "Health to read up on",
      headline: `Typically lives ${breed.lifespan[0]}–${breed.lifespan[1]} years`,
      body: "Every breed has conditions that appear more often than average. Ask a breeder which tests they do and why, or ask a rescue what's known. Your vet is the right person for anything specific.",
    },
  ];
}

export function costRange(breed: Breed): string {
  return `€${breed.annualCost[0].toLocaleString()}–€${breed.annualCost[1].toLocaleString()}`;
}