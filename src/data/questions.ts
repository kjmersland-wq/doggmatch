import type { QuizQuestion } from "@/lib/matching/types";

/**
 * Question content is language-specific; ids and option values are not.
 * Write these the way a person would actually ask them out loud.
 */
export const questions: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Your days",
    title: "How active are you on a normal day?",
    help: "Think about an ordinary week, not your best one.",
    options: [
      { value: "1", label: "Fairly quiet", hint: "A gentle wander round the block, most days" },
      { value: "2", label: "Reasonably active", hint: "A 45-minute stroll around the park on a wet Tuesday" },
      { value: "3", label: "Quite active", hint: "An hour or more most days, and proper effort at weekends" },
      { value: "4", label: "Always on the go", hint: "A proper two-hour hike, whatever the weather" },
    ],
  },
  {
    id: "home",
    eyebrow: "Home",
    title: "Where will your dog be living?",
    options: [
      { value: "apartment", label: "In a flat or apartment", hint: "Shared stairs or a lift" },
      { value: "house", label: "A house, no garden" },
      { value: "house-garden", label: "A house with a garden" },
      { value: "rural", label: "Out in the countryside" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Your day",
    title: "How long would your dog usually be on their own?",
    help: "Count the whole day realistically — commuting and office days included, not just the hours you're at your desk.",
    options: [
      { value: "0", label: "Hardly ever alone", hint: "Someone's nearly always home" },
      { value: "2", label: "Up to three hours", hint: "A short commute either side of home working, or a morning out" },
      { value: "4", label: "Three to five hours", hint: "A typical office day with a lunchtime dash home" },
      { value: "6", label: "Six hours or more", hint: "A full commute and a full office day, door to door" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Have you had a dog before?",
    help: "Never had a dog before? Don't fret. We weigh things like training leeway, patience and separation tolerance, so you won't end up out of your depth.",
    options: [
      { value: "first", label: "This would be my first" },
      { value: "some", label: "A little", hint: "Grew up with dogs, or helped look after one" },
      { value: "experienced", label: "Plenty", hint: "I've raised and trained dogs myself" },
    ],
  },
  {
    id: "size",
    eyebrow: "What you'd like",
    title: "Do you have a size in mind?",
    optional: true,
    options: [
      { value: "small", label: "Something small" },
      { value: "medium", label: "Somewhere in the middle" },
      { value: "large", label: "A big dog" },
      { value: "any", label: "I'm open to anything" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "What you'd like",
    title: "What kind of personality would you enjoy most?",
    options: [
      { value: "calm", label: "Calm and easy-going" },
      { value: "affectionate", label: "Loving and close by" },
      { value: "playful", label: "Playful and full of life" },
      { value: "independent", label: "Happy in their own company" },
    ],
  },
  {
    id: "children",
    eyebrow: "At home",
    title: "Who else is at home?",
    options: [
      { value: "none", label: "Just adults" },
      { value: "older", label: "Older children" },
      { value: "young", label: "Young children" },
      { value: "visitors", label: "Adults, and lots of visitors" },
    ],
  },
  {
    id: "pets",
    eyebrow: "At home",
    title: "Any other animals in the house?",
    optional: true,
    options: [
      { value: "none", label: "No other pets" },
      { value: "dog", label: "Another dog" },
      { value: "cat", label: "A cat" },
      { value: "small", label: "Smaller animals", hint: "Rabbits, birds, rodents" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Coat and allergies",
    title: "How do you feel about dog hair around the house?",
    help: "Some breeds shed less, which people with allergies sometimes find easier. No dog is completely allergy-free, though.",
    options: [
      { value: "fine", label: "Hair doesn't bother me" },
      { value: "prefer-low", label: "I'd rather have less of it" },
      { value: "must-low", label: "Someone here reacts to dogs", hint: "Lower-shedding breeds only, please" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Looking after them",
    title: "How much grooming are you happy to take on?",
    options: [
      { value: "minimal", label: "As little as possible" },
      { value: "moderate", label: "A regular brush is fine" },
      { value: "high", label: "I don't mind trips to the groomer" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Looking after them",
    title: "How much dog can you comfortably handle?",
    help: "Strength on the lead catches a lot of people out.",
    options: [
      { value: "light", label: "Nothing big or strong", hint: "A strong dog would be too much" },
      { value: "moderate", label: "A medium dog is fine" },
      { value: "strong", label: "I can manage a large, strong dog" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Being honest",
    title: "Could you live happily with a high-energy dog?",
    help: "It's worth being honest here — we'll take you at your word.",
    options: [
      { value: "no", label: "No, I'd need a calmer dog" },
      { value: "maybe", label: "Within reason" },
      { value: "yes", label: "Yes, I'd love an active one" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Company",
    title: "What are you hoping a dog will bring to your life?",
    options: [
      { value: "calm-company", label: "Quiet, steady company" },
      { value: "motivation", label: "A reason to get outside" },
      { value: "active", label: "Someone to keep up with me" },
      { value: "family", label: "A dog for the whole family" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Coat and allergies",
    title: "Does anyone in your home have a dog allergy?",
    help: "Some breeds shed less and hold their coat, which some people find easier. No dog is completely allergy-free, and tolerance varies from person to person.",
    options: [
      { value: "none", label: "No, nobody reacts to dogs" },
      { value: "mild", label: "Mild reactions", hint: "A bit sniffly around some dogs" },
      { value: "significant", label: "A significant allergy", hint: "We'd want proper allergy advice first" },
      { value: "unsure", label: "We're not sure yet" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Company and wellbeing",
    title: "How much are you hoping for a calm, close companion to have around?",
    help: "A dog is company, not care. We'll look at calmness, sociability and how people-oriented a breed tends to be.",
    options: [
      { value: "no", label: "Not something I'm looking for" },
      { value: "some", label: "It would be nice" },
      { value: "important", label: "Yes, that matters to me" },
      { value: "very", label: "That's the main thing I want" },
    ],
  },
];
