import { breeds, breedById, type Breed, type BreedId } from "@/data/breeds";

/**
 * A rough measure of how similar day-to-day life is with two breeds —
 * size, energy, apartment living, and coat care are what people actually
 * weigh up when they're torn between two dogs.
 */
const SIMILARITY_KEYS = ["size", "energy", "apartmentSuitability", "grooming", "shedding"] as const;

function distance(a: Breed, b: Breed): number {
  return SIMILARITY_KEYS.reduce((sum, key) => sum + (a.traits[key] - b.traits[key]) ** 2, 0);
}

/**
 * A handful of breeds a reader looking at this one would plausibly also
 * consider: breeds from the same group first (sorted by how similar day to
 * day life actually is), then the closest matches from the rest of the
 * library, so every breed page always links onward to others.
 */
export function relatedBreeds(breedId: BreedId, count = 4): Breed[] {
  const current = breedById[breedId];
  return breeds
    .filter((b) => b.id !== breedId)
    .map((b) => ({ breed: b, sameGroup: b.group === current.group, dist: distance(current, b) }))
    .sort((a, b) => (a.sameGroup === b.sameGroup ? a.dist - b.dist : a.sameGroup ? -1 : 1))
    .slice(0, count)
    .map((r) => r.breed);
}
