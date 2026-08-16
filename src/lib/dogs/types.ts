/** Shared mixed-breed types. Kept separate so the dog store stays dependency-light. */
export type BreedType = "purebred" | "mixed";

/** What the owner can observe themselves, 1–5. All optional. */
export interface ObservedTraits {
  size?: number;
  energy?: number;
  exerciseNeeds?: number;
  trainability?: number;
  sociability?: number;
  grooming?: number;
  shedding?: number;
  barking?: number;
}

export const OBSERVED_KEYS = [
  "size",
  "energy",
  "exerciseNeeds",
  "trainability",
  "sociability",
  "grooming",
  "shedding",
  "barking",
] as const satisfies readonly (keyof ObservedTraits)[];
