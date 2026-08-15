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
      "Loves being around people",
      "Learns quickly, especially for a treat",
      "Wonderful company, day to day",
      "Happy to join you on anything active",
      "Usually settles well into family life",
    ],
    considerations: [
      "Sheds all year round",
      "Needs a good amount of exercise every day",
      "Big and strong on the lead",
      "Gets bored without something to think about",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Gentle, biddable and endlessly patient. A Golden asks for company more than it asks for anything else.",
    strengths: [
      "Wonderfully gentle with children",
      "Loves to learn when there's a reward in it",
      "Friendly with people and other dogs",
      "Happiest outdoors in cooler weather",
    ],
    considerations: [
      "Sheds heavily a couple of times a year",
      "Needs a regular brush",
      "Finds hot weather hard",
      "Doesn't like long hours on their own",
    ],
  },
  poodle: {
    displayName: "Poodle (Standard)",
    summary:
      "An athletic, unusually intelligent dog behind an elegant coat. Thrives on problem-solving and close partnership.",
    strengths: [
      "Sheds very little",
      "Picks things up remarkably fast",
      "Fine in a flat, as long as they get out enough",
      "Playful without being chaotic",
    ],
    considerations: [
      "A trip to the groomer every 6–8 weeks",
      "Needs something to think about, not just walks",
      "Can get anxious if left alone a lot",
      "Grooming adds up over the years",
    ],
  },
  "french-bulldog": {
    displayName: "French Bulldog",
    summary:
      "A compact, comic and deeply attached city companion with modest exercise needs and real health considerations.",
    strengths: [
      "Very happy in a flat",
      "Doesn't need much exercise",
      "Affectionate, and always near you",
      "Quieter than most small dogs",
    ],
    considerations: [
      "Can struggle to breathe in heat or when working hard",
      "Vet bills tend to be higher over a lifetime",
      "Doesn't like being left alone",
      "Worth choosing a breeder who health-tests carefully",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "The most trainable dog most people should not own. Brilliant, intense, and unhappy without daily work.",
    strengths: [
      "Learns almost anything you teach",
      "Brilliant at sport, scentwork and puzzles",
      "Deeply attached to their person",
      "At their best with genuinely active people",
    ],
    considerations: [
      "Needs a lot of exercise, and a lot to think about",
      "Rarely happy in a flat or a quiet routine",
      "May try to herd children or chase bikes",
      "Boredom turns into trouble quickly",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "A small, soft-natured companion that wants to be wherever you are. Calm company rather than a project.",
    strengths: [
      "Gentle with children and older people",
      "Perfectly content in a small home",
      "Gets on with other dogs and pets",
      "Doesn't need long walks",
    ],
    considerations: [
      "Some known inherited heart and neurological problems",
      "Rarely happy alone for long",
      "Ears and coat need regular care",
      "Always ask about health testing of the parents",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "A sprinter that sleeps most of the day. Quiet, clean and surprisingly well suited to calm homes.",
    strengths: [
      "Wonderfully calm indoors",
      "Easy coat, and rarely barks",
      "A couple of short bursts of running is plenty",
      "Often looking for a home through rescue",
    ],
    considerations: [
      "Strong urge to chase small animals",
      "Off-lead time needs a securely fenced space",
      "Feels the cold, so needs warmth and soft bedding",
      "Thin skin, so cuts and scrapes happen easily",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Independent, fastidious and self-contained. A Shiba respects you rather than obeys you.",
    strengths: [
      "Copes with time alone better than most",
      "Clean, almost cat-like",
      "Small but sturdy",
      "Often lives a long life",
    ],
    considerations: [
      "Independent, and recall takes real work",
      "Drops a huge amount of coat twice a year",
      "Often reserved with other dogs",
      "Not the easiest first dog",
    ],
  },
};
