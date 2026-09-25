import { breeds, type Breed, type BreedTraits } from "@/data/breeds";

/**
 * How each support page picks its breeds: a plain filter and a sort over the
 * same trait scores the matching engine uses. No hand-picking, so a page can
 * never recommend a dog the quiz would quietly mark down.
 */
interface ShortlistRule {
  keep: (t: BreedTraits) => boolean;
  order: (a: BreedTraits, b: BreedTraits) => number;
  /** The traits shown on each card, in order. */
  metrics: (keyof BreedTraits)[];
}

export const SHORTLIST_SIZE = 8;

export const SHORTLIST_RULES: Record<string, ShortlistRule> = {
  "quiet-apartment-dogs": {
    keep: (t) => t.apartmentSuitability >= 4 && t.barking <= 2,
    order: (a, b) => a.barking - b.barking || b.apartmentSuitability - a.apartmentSuitability,
    metrics: ["barking", "apartmentSuitability", "exerciseNeeds", "aloneTolerance"],
  },
  "low-energy-apartment-dogs": {
    keep: (t) => t.apartmentSuitability >= 4 && t.energy <= 2,
    order: (a, b) => a.energy - b.energy || a.exerciseNeeds - b.exerciseNeeds,
    metrics: ["energy", "exerciseNeeds", "apartmentSuitability", "heatTolerance"],
  },
  "apartment-dogs-for-working-people": {
    keep: (t) => t.apartmentSuitability >= 3 && t.aloneTolerance >= 3,
    order: (a, b) => b.aloneTolerance - a.aloneTolerance || b.apartmentSuitability - a.apartmentSuitability,
    metrics: ["aloneTolerance", "apartmentSuitability", "barking", "exerciseNeeds"],
  },
  "bigger-dogs-for-apartments": {
    keep: (t) => t.size >= 3 && t.apartmentSuitability >= 3 && t.energy <= 3,
    order: (a, b) => b.apartmentSuitability - a.apartmentSuitability || a.energy - b.energy,
    metrics: ["size", "apartmentSuitability", "energy", "barking"],
  },
  "easy-to-train-dogs": {
    keep: (t) => t.trainability >= 4 && t.firstTimeSuitability >= 4,
    order: (a, b) => b.trainability - a.trainability || b.firstTimeSuitability - a.firstTimeSuitability,
    metrics: ["trainability", "firstTimeSuitability", "exerciseNeeds", "mentalStimulation"],
  },
  "low-maintenance-first-dogs": {
    keep: (t) => t.grooming <= 2 && t.firstTimeSuitability >= 4 && t.exerciseNeeds <= 3,
    order: (a, b) => a.grooming - b.grooming || a.exerciseNeeds - b.exerciseNeeds,
    metrics: ["grooming", "exerciseNeeds", "firstTimeSuitability", "heatTolerance"],
  },
  "calm-dogs-for-beginners": {
    keep: (t) => t.energy <= 2 && t.firstTimeSuitability >= 3,
    order: (a, b) => b.firstTimeSuitability - a.firstTimeSuitability || a.energy - b.energy,
    metrics: ["energy", "firstTimeSuitability", "trainability", "aloneTolerance"],
  },
  "hard-breeds-for-first-time-owners": {
    keep: (t) => t.firstTimeSuitability <= 1,
    order: (a, b) => a.firstTimeSuitability - b.firstTimeSuitability || b.strengthRequired - a.strengthRequired,
    metrics: ["firstTimeSuitability", "strengthRequired", "independence", "exerciseNeeds"],
  },
  "gentle-dogs-for-young-children": {
    keep: (t) => t.goodWithChildren >= 5 && t.strengthRequired <= 3,
    order: (a, b) => b.goodWithChildren - a.goodWithChildren || a.strengthRequired - b.strengthRequired,
    metrics: ["goodWithChildren", "strengthRequired", "energy", "trainability"],
  },
  "small-family-dogs": {
    keep: (t) => t.size <= 2 && t.goodWithChildren >= 4,
    order: (a, b) => b.goodWithChildren - a.goodWithChildren || a.size - b.size,
    metrics: ["goodWithChildren", "size", "energy", "barking"],
  },
  "family-dogs-good-with-other-pets": {
    keep: (t) => t.goodWithChildren >= 4 && t.goodWithPets >= 4 && t.goodWithDogs >= 4,
    order: (a, b) => b.goodWithPets - a.goodWithPets || b.goodWithChildren - a.goodWithChildren,
    metrics: ["goodWithPets", "goodWithDogs", "goodWithChildren", "exerciseNeeds"],
  },
  "low-shedding-family-dogs": {
    keep: (t) => t.goodWithChildren >= 4 && t.shedding <= 2,
    order: (a, b) => a.shedding - b.shedding || b.goodWithChildren - a.goodWithChildren,
    metrics: ["shedding", "goodWithChildren", "grooming", "exerciseNeeds"],
  },
  "hypoallergenic-dogs": {
    keep: (t) => t.shedding <= 1,
    order: (a, b) => a.shedding - b.shedding || a.drooling - b.drooling || a.grooming - b.grooming,
    metrics: ["shedding", "drooling", "grooming", "size"],
  },
  "small-low-shedding-dogs": {
    keep: (t) => t.size <= 2 && t.shedding <= 2,
    order: (a, b) => a.barking - b.barking || a.shedding - b.shedding,
    metrics: ["shedding", "barking", "grooming", "size"],
  },
  "large-low-shedding-dogs": {
    keep: (t) => t.size >= 3 && t.shedding <= 2,
    order: (a, b) => a.shedding - b.shedding || b.size - a.size,
    metrics: ["shedding", "size", "grooming", "exerciseNeeds"],
  },
  "low-shedding-low-grooming-dogs": {
    keep: (t) => t.shedding <= 2 && t.grooming <= 3,
    order: (a, b) => a.grooming - b.grooming || a.shedding - b.shedding,
    metrics: ["grooming", "shedding", "coldTolerance", "exerciseNeeds"],
  },
  "independent-dog-breeds": {
    keep: (t) => t.independence >= 4 && t.aloneTolerance >= 3,
    order: (a, b) => b.independence - a.independence || b.aloneTolerance - a.aloneTolerance,
    metrics: ["independence", "aloneTolerance", "trainability", "firstTimeSuitability"],
  },
  "dogs-for-people-who-work-full-time": {
    keep: (t) => t.aloneTolerance >= 3 && t.firstTimeSuitability >= 3,
    order: (a, b) => b.aloneTolerance - a.aloneTolerance || b.firstTimeSuitability - a.firstTimeSuitability,
    metrics: ["aloneTolerance", "firstTimeSuitability", "energy", "barking"],
  },
  "small-dogs-that-cope-alone": {
    keep: (t) => t.size <= 2 && t.aloneTolerance >= 3,
    order: (a, b) => b.aloneTolerance - a.aloneTolerance || a.barking - b.barking,
    metrics: ["aloneTolerance", "barking", "size", "energy"],
  },
  "dogs-that-hate-being-alone": {
    keep: (t) => t.aloneTolerance <= 1,
    order: (a, b) => a.aloneTolerance - b.aloneTolerance || b.affection - a.affection,
    metrics: ["aloneTolerance", "affection", "sociability", "size"],
  },
};

/** The breeds for one support page, best fit first; ties settle alphabetically so the order never drifts. */
export function shortlistFor(slug: string): Breed[] {
  const rule = SHORTLIST_RULES[slug];
  if (!rule) return [];
  return breeds
    .filter((b) => rule.keep(b.traits))
    .sort((a, b) => rule.order(a.traits, b.traits) || a.id.localeCompare(b.id))
    .slice(0, SHORTLIST_SIZE);
}
