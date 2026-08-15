import type { BreedId } from "./breeds";

/** Language-specific breed prose, attached to stable breed ids. */
export interface BreedContent {
  displayName: string;
  summary: string;
  strengths: string[];
  considerations: string[];
}

export const breedContentEn: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "An open-hearted, food-motivated working dog that has become the default family companion for good reason — and that still needs a real job to be content.",
    strengths: [
      "Highly social and people-oriented",
      "Strong trainability and food motivation",
      "Excellent companionship potential",
      "Good fit for an active lifestyle",
      "Usually adaptable to family life",
    ],
    considerations: [
      "High shedding all year round",
      "Requires substantial daily exercise",
      "Large and physically strong on the lead",
      "Needs mental stimulation to avoid boredom",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Gentle, biddable and endlessly patient. A Golden asks for company more than it asks for anything else.",
    strengths: [
      "Exceptionally gentle with children",
      "Very responsive to reward-based training",
      "Sociable with people and other dogs",
      "Enjoys outdoor life in cooler climates",
    ],
    considerations: [
      "Heavy seasonal shedding",
      "Coat needs regular brushing",
      "Struggles in hot climates",
      "Dislikes long hours alone",
    ],
  },
  poodle: {
    displayName: "Poodle (Standard)",
    summary:
      "An athletic, unusually intelligent dog behind an elegant coat. Thrives on problem-solving and close partnership.",
    strengths: [
      "Very low shedding coat",
      "Outstanding learning ability",
      "Adaptable to apartments with enough exercise",
      "Playful without being chaotic",
    ],
    considerations: [
      "Professional grooming every 6–8 weeks",
      "Needs daily mental work, not just walks",
      "Can become anxious if left alone often",
      "Grooming costs add up over a lifetime",
    ],
  },
  "french-bulldog": {
    displayName: "French Bulldog",
    summary:
      "A compact, comic and deeply attached city companion with modest exercise needs and real health considerations.",
    strengths: [
      "Excellent for apartment living",
      "Low exercise requirement",
      "Affectionate and people-focused",
      "Quiet compared to most small breeds",
    ],
    considerations: [
      "Breathing difficulties in heat and exertion",
      "Higher lifetime veterinary costs",
      "Dislikes being left alone",
      "Choose breeders who prioritise health testing",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "The most trainable dog most people should not own. Brilliant, intense, and unhappy without daily work.",
    strengths: [
      "Extraordinary learning ability",
      "Superb at sport, scentwork and problem-solving",
      "Loyal and closely bonded",
      "Thrives with genuinely active owners",
    ],
    considerations: [
      "Very high exercise and stimulation needs",
      "Poor fit for apartments and quiet routines",
      "Herding instinct can target children or bikes",
      "Boredom turns quickly into problem behaviour",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "A small, soft-natured companion that wants to be wherever you are. Calm company rather than a project.",
    strengths: [
      "Gentle with children and older adults",
      "Comfortable in small homes",
      "Sociable with other dogs and pets",
      "Modest exercise needs",
    ],
    considerations: [
      "Known hereditary heart and neurological risks",
      "Rarely happy alone for long periods",
      "Regular ear and coat care",
      "Health testing of parents is essential",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "A sprinter that sleeps most of the day. Quiet, clean and surprisingly well suited to calm homes.",
    strengths: [
      "Very calm indoors",
      "Low grooming and low barking",
      "Short bursts of exercise are enough",
      "Often available through rescue",
    ],
    considerations: [
      "Strong prey drive around small animals",
      "Off-lead freedom needs secure areas",
      "Needs warmth and bedding in cold weather",
      "Thin skin is easily injured",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Independent, fastidious and self-contained. A Shiba respects you rather than obeys you.",
    strengths: [
      "Tolerates time alone better than most",
      "Clean, almost cat-like habits",
      "Compact and sturdy",
      "Long life expectancy",
    ],
    considerations: [
      "Independent and slow to recall",
      "Heavy seasonal coat blow",
      "Often reserved with other dogs",
      "Not an easy first dog",
    ],
  },
};
