import type { UserProfile } from "@/lib/matching/types";

/**
 * The readiness conversation. Not a test — there's no pass mark and no shame
 * in any answer. Where an answer is also useful to the matching engine, it
 * carries a `profile` patch so Find My Dog never asks it again.
 */
export interface ReadinessOption {
  value: string;
  label: string;
  hint?: string;
  /** 0–3. Higher simply means fewer things to sort out first. */
  score: number;
  /** What this answer tells the matching engine, if anything. */
  profile?: UserProfile;
  /** A gentle note shown in the result when this answer is chosen. */
  note?: string;
}

export interface ReadinessQuestion {
  id: string;
  eyebrow: string;
  title: string;
  help?: string;
  options: ReadinessOption[];
}

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "time",
    eyebrow: "Your days",
    title: "How much time could you give a dog each day?",
    help: "Walks, feeding, training, grooming, and simply being together.",
    options: [
      { value: "under1", label: "Less than an hour", score: 0, note: "Most dogs need more than an hour of your day, spread across walks, food, training and company. It's worth thinking about how you'd find that time." },
      { value: "1-2", label: "One to two hours", score: 2 },
      { value: "2-3", label: "Two to three hours", score: 3 },
      { value: "3plus", label: "More than three hours", score: 3, hint: "My days are fairly flexible" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Your day",
    title: "How long would your dog usually be on their own?",
    help: "There's no single number that's right for every dog. Age, training and temperament all matter.",
    options: [
      { value: "0", label: "Hardly ever alone", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Up to three hours", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Three to five hours", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Six hours or more", score: 0, profile: { alone: "6" }, note: "Long days alone are hard on most dogs. A dog walker, day care, or a neighbour who can drop in makes a real difference — worth planning before, not after." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Your days",
    title: "How active are you on a normal day?",
    help: "Think about an ordinary week, not your best one.",
    options: [
      { value: "1", label: "Fairly quiet", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Reasonably active", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Quite active", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Always on the go", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Home",
    title: "Where would your dog be living?",
    help: "A flat is no barrier to a happy dog. What matters more is the walking on your doorstep and the hours you keep.",
    options: [
      { value: "apartment", label: "A flat or apartment", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "A house, no garden", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "A house with a garden", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "Out in the countryside", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Away from home",
    title: "Do you travel often?",
    options: [
      { value: "rarely", label: "Rarely", score: 3 },
      { value: "sometimes", label: "A few times a year", score: 2 },
      { value: "often", label: "Often, for work or otherwise", score: 1, note: "Travelling often isn't a reason not to have a dog — but it does mean deciding early who looks after them, or which trips they come along on." },
    ],
  },
  {
    id: "children",
    eyebrow: "At home",
    title: "Who else is at home?",
    options: [
      { value: "none", label: "Just adults", score: 3, profile: { children: "none" } },
      { value: "older", label: "Older children", score: 3, profile: { children: "older" } },
      { value: "young", label: "Young children", score: 2, profile: { children: "young" }, note: "Young children and dogs can be wonderful together, with supervision and a quiet place the dog can always retreat to." },
      { value: "visitors", label: "Adults, and lots of visitors", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "At home",
    title: "Any other animals in the house?",
    options: [
      { value: "none", label: "No other pets", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "Another dog", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "A cat", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Smaller animals", hint: "Rabbits, birds, rodents", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Health at home",
    title: "Does anyone in the household have allergies?",
    help: "Some breeds shed less, which people sometimes find easier to live with. No dog is completely allergy-free, and reactions vary from person to person.",
    options: [
      { value: "no", label: "No one, as far as we know", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Someone is a little sensitive", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Yes, someone reacts to dogs", score: 1, profile: { shedding: "must-low" }, note: "Spend time with the individual dog before deciding, and talk to a doctor. Lower-shedding breeds help some people and not others." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Looking after them",
    title: "Are you comfortable with regular grooming?",
    options: [
      { value: "minimal", label: "I'd rather keep it simple", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "A regular brush is fine", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "I don't mind trips to the groomer", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Money",
    title: "Could you handle an unexpected vet bill?",
    help: "This is the one that catches most people out. Insurance or savings both work.",
    options: [
      { value: "yes", label: "Yes, we'd manage", score: 3 },
      { value: "insurance", label: "With insurance, yes", score: 3 },
      { value: "tight", label: "It would be tight", score: 1, note: "Setting a little aside each month, or insuring early, takes a lot of worry out of the years ahead." },
      { value: "no", label: "Not right now", score: 0, note: "Vet care can be expensive and rarely arrives at a convenient time. A few months of saving first can change everything." },
    ],
  },
  {
    id: "support",
    eyebrow: "Your people",
    title: "Who could help if you were ill or away?",
    options: [
      { value: "household", label: "Someone else at home", score: 3 },
      { value: "family", label: "Family or friends nearby", score: 3 },
      { value: "paid", label: "I'd pay for a sitter or day care", score: 2 },
      { value: "noone", label: "I'm not sure yet", score: 0, note: "Everyone gets ill or called away eventually. Knowing now who'd step in makes those weeks far less stressful." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "The long view",
    title: "A dog can be with you for ten to fifteen years. Does that feel right?",
    help: "Think about where you might be living, working and travelling a decade from now.",
    options: [
      { value: "yes", label: "Yes, we've thought it through", score: 3 },
      { value: "mostly", label: "Mostly — some things are uncertain", score: 2 },
      { value: "unsure", label: "Honestly, I'm not sure", score: 0, note: "That's a very reasonable thing to feel. There's no rush at all — a dog will still be there when the picture is clearer." },
    ],
  },
];

export interface ReadinessOutcome {
  id: "well-prepared" | "good-start" | "not-yet";
  title: string;
  body: string;
  encouragement: string;
}

export const readinessOutcomes: Record<ReadinessOutcome["id"], ReadinessOutcome> = {
  "well-prepared": {
    id: "well-prepared",
    title: "You're looking well prepared.",
    body: "From what you've told us, a dog would fit into your life without much having to change. You've thought about time, money and the people who'd help when life gets in the way — which is most of the hard part done.",
    encouragement: "Ready to find out which dogs may suit your life?",
  },
  "good-start": {
    id: "good-start",
    title: "You're off to a good start.",
    body: "Most of the pieces are already there. There are one or two things worth sorting out before a dog comes home, and none of them are difficult — they're just easier to arrange now than in the middle of a first week with a new dog.",
    encouragement: "Have a look at which dogs might suit you while you work through the rest.",
  },
  "not-yet": {
    id: "not-yet",
    title: "There are a few things worth thinking about first.",
    body: "Maybe not quite yet — and that's completely okay. Nothing here says you shouldn't have a dog. It says that a little preparation now would make the decision much easier, and the first year much kinder for both of you.",
    encouragement: "You're welcome to keep exploring. Nothing is locked away.",
  },
};