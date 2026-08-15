import type { QuizQuestion } from "@/lib/matching/types";

/** Question content is language-specific; ids and option values are not. */
export const questions: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Lifestyle",
    title: "How active is your everyday life?",
    help: "Think about a normal week, not your best week.",
    options: [
      { value: "1", label: "Mostly relaxed", hint: "Short walks, quiet routines" },
      { value: "2", label: "Moderately active", hint: "A daily walk, occasional outings" },
      { value: "3", label: "Quite active", hint: "Long walks, weekends outdoors" },
      { value: "4", label: "Very active", hint: "Running, hiking, sport — most days" },
    ],
  },
  {
    id: "home",
    eyebrow: "Home",
    title: "Where would your dog live?",
    options: [
      { value: "apartment", label: "Apartment", hint: "Shared stairs or a lift" },
      { value: "house", label: "House without a garden" },
      { value: "house-garden", label: "House with a garden" },
      { value: "rural", label: "Rural property with land" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Daily routine",
    title: "How long would your dog usually be alone?",
    options: [
      { value: "0", label: "Rarely alone", hint: "Someone is nearly always home" },
      { value: "2", label: "Up to 3 hours" },
      { value: "4", label: "Three to five hours" },
      { value: "6", label: "Six hours or more" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "How much experience do you have with dogs?",
    options: [
      { value: "first", label: "This would be my first dog" },
      { value: "some", label: "Some experience", hint: "Grew up with dogs, or helped care for one" },
      { value: "experienced", label: "Experienced owner", hint: "I've raised and trained dogs myself" },
    ],
  },
  {
    id: "size",
    eyebrow: "Preferences",
    title: "What size of dog suits your life?",
    optional: true,
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "any", label: "I'm open to any size" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Preferences",
    title: "Which temperament appeals to you most?",
    options: [
      { value: "calm", label: "Calm and steady" },
      { value: "affectionate", label: "Affectionate and close" },
      { value: "playful", label: "Playful and lively" },
      { value: "independent", label: "Independent and self-contained" },
    ],
  },
  {
    id: "children",
    eyebrow: "Social",
    title: "Who else shares your home?",
    options: [
      { value: "none", label: "Just adults" },
      { value: "older", label: "Older children" },
      { value: "young", label: "Young children" },
      { value: "visitors", label: "Adults, with frequent visitors" },
    ],
  },
  {
    id: "pets",
    eyebrow: "Social",
    title: "Do you have other animals at home?",
    optional: true,
    options: [
      { value: "none", label: "No other pets" },
      { value: "dog", label: "Another dog" },
      { value: "cat", label: "A cat" },
      { value: "small", label: "Small animals", hint: "Rabbits, birds, rodents" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Allergy & sensitivity",
    title: "How do you feel about shedding?",
    help: "Some people with allergies may find lower-shedding breeds easier to live with, but no dog breed is completely allergy-free.",
    options: [
      { value: "fine", label: "Hair doesn't bother me" },
      { value: "prefer-low", label: "I'd prefer less shedding" },
      { value: "must-low", label: "Someone here reacts to dogs", hint: "Lower-shedding breeds only" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Maintenance",
    title: "How much grooming are you willing to take on?",
    options: [
      { value: "minimal", label: "As little as possible" },
      { value: "moderate", label: "Regular brushing is fine" },
      { value: "high", label: "I'm happy with professional grooming" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Physical demands",
    title: "How much dog can you physically manage?",
    help: "Strength on the lead matters more than most people expect.",
    options: [
      { value: "light", label: "Nothing strong or heavy", hint: "A hard case for a large dog" },
      { value: "moderate", label: "A medium dog is manageable" },
      { value: "strong", label: "I can handle a large, strong dog" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Deal-breakers",
    title: "Could you live with a high-energy dog?",
    help: "We treat this as a hard limit, not a preference.",
    options: [
      { value: "no", label: "No — I need a calmer dog" },
      { value: "maybe", label: "Within reason" },
      { value: "yes", label: "Yes — I want an active dog" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Companionship & wellbeing",
    title: "What do you most want from a dog?",
    options: [
      { value: "calm-company", label: "Calm, steady company" },
      { value: "motivation", label: "A reason to get outdoors" },
      { value: "active", label: "An active partner" },
      { value: "family", label: "A family companion" },
    ],
  },
];
