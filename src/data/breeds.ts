/**
 * Breed identity + measurable characteristics.
 * Language-specific prose lives in `breedContent`, keyed by the stable breed id,
 * so translations never touch the identity or the scoring data.
 * This module can be replaced by a JSON file, database table or API later.
 */

export type BreedId =
  | "labrador-retriever"
  | "golden-retriever"
  | "poodle"
  | "french-bulldog"
  | "border-collie"
  | "cavalier-king-charles-spaniel"
  | "greyhound"
  | "shiba-inu"
  | "german-shepherd"
  | "dachshund"
  | "beagle"
  | "cocker-spaniel"
  | "chihuahua"
  | "miniature-schnauzer"
  | "bernese-mountain-dog"
  | "australian-shepherd"
  | "jack-russell-terrier"
  | "siberian-husky"
  | "boxer"
  | "rottweiler"
  | "whippet"
  | "shih-tzu"
  | "pug"
  | "bichon-frise"
  | "staffordshire-bull-terrier"
  | "vizsla"
  | "samoyed"
  | "yorkshire-terrier";

/** All trait values are 1–5 unless stated otherwise. */
export interface BreedTraits {
  size: number; // 1 = toy, 5 = giant
  energy: number;
  exerciseNeeds: number;
  mentalStimulation: number;
  trainability: number;
  learningAbility: number;
  independence: number;
  affection: number;
  sociability: number;
  goodWithChildren: number;
  goodWithDogs: number;
  goodWithPets: number;
  apartmentSuitability: number;
  aloneTolerance: number;
  shedding: number;
  grooming: number;
  drooling: number;
  barking: number;
  firstTimeSuitability: number;
  strengthRequired: number;
  heatTolerance: number;
  coldTolerance: number;
}

export interface Breed {
  id: BreedId;
  /** Canonical, language-neutral name used as a fallback. */
  name: string;
  group: string;
  origin: string;
  lifespan: [number, number];
  /** Indicative annual cost of ownership in EUR. */
  annualCost: [number, number];
  traits: BreedTraits;
}

export const breeds: Breed[] = [
  {
    id: "labrador-retriever",
    name: "Labrador Retriever",
    group: "Gundog",
    origin: "Canada / United Kingdom",
    lifespan: [10, 12],
    annualCost: [1400, 2200],
    traits: {
      size: 4, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 5,
      learningAbility: 5, independence: 2, affection: 5, sociability: 5,
      goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 4, apartmentSuitability: 2,
      aloneTolerance: 2, shedding: 5, grooming: 2, drooling: 3, barking: 3,
      firstTimeSuitability: 5, strengthRequired: 4, heatTolerance: 3, coldTolerance: 4,
    },
  },
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    group: "Gundog",
    origin: "Scotland",
    lifespan: [10, 12],
    annualCost: [1500, 2400],
    traits: {
      size: 4, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 5,
      learningAbility: 5, independence: 2, affection: 5, sociability: 5,
      goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 4, apartmentSuitability: 2,
      aloneTolerance: 2, shedding: 5, grooming: 4, drooling: 2, barking: 2,
      firstTimeSuitability: 5, strengthRequired: 4, heatTolerance: 2, coldTolerance: 5,
    },
  },
  {
    id: "poodle",
    name: "Poodle (Standard)",
    group: "Utility",
    origin: "Germany / France",
    lifespan: [12, 15],
    annualCost: [1700, 2800],
    traits: {
      size: 3, energy: 4, exerciseNeeds: 3, mentalStimulation: 5, trainability: 5,
      learningAbility: 5, independence: 2, affection: 4, sociability: 4,
      goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 4,
      aloneTolerance: 2, shedding: 1, grooming: 5, drooling: 1, barking: 3,
      firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 3, coldTolerance: 3,
    },
  },
  {
    id: "french-bulldog",
    name: "French Bulldog",
    group: "Companion",
    origin: "France / England",
    lifespan: [9, 12],
    annualCost: [1500, 2600],
    traits: {
      size: 2, energy: 2, exerciseNeeds: 1, mentalStimulation: 2, trainability: 3,
      learningAbility: 3, independence: 2, affection: 5, sociability: 4,
      goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 3, apartmentSuitability: 5,
      aloneTolerance: 2, shedding: 3, grooming: 2, drooling: 3, barking: 2,
      firstTimeSuitability: 4, strengthRequired: 1, heatTolerance: 1, coldTolerance: 2,
    },
  },
  {
    id: "border-collie",
    name: "Border Collie",
    group: "Herding",
    origin: "Scottish Borders",
    lifespan: [12, 15],
    annualCost: [1300, 2100],
    traits: {
      size: 3, energy: 5, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5,
      learningAbility: 5, independence: 2, affection: 4, sociability: 3,
      goodWithChildren: 3, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 1,
      aloneTolerance: 2, shedding: 4, grooming: 3, drooling: 1, barking: 4,
      firstTimeSuitability: 2, strengthRequired: 3, heatTolerance: 2, coldTolerance: 5,
    },
  },
  {
    id: "cavalier-king-charles-spaniel",
    name: "Cavalier King Charles Spaniel",
    group: "Toy",
    origin: "United Kingdom",
    lifespan: [9, 14],
    annualCost: [1200, 2000],
    traits: {
      size: 1, energy: 2, exerciseNeeds: 2, mentalStimulation: 2, trainability: 4,
      learningAbility: 4, independence: 1, affection: 5, sociability: 5,
      goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 5, apartmentSuitability: 5,
      aloneTolerance: 1, shedding: 3, grooming: 3, drooling: 1, barking: 2,
      firstTimeSuitability: 5, strengthRequired: 1, heatTolerance: 2, coldTolerance: 3,
    },
  },
  {
    id: "greyhound",
    name: "Greyhound",
    group: "Sighthound",
    origin: "United Kingdom",
    lifespan: [10, 14],
    annualCost: [1100, 1900],
    traits: {
      size: 4, energy: 2, exerciseNeeds: 2, mentalStimulation: 2, trainability: 3,
      learningAbility: 3, independence: 4, affection: 4, sociability: 3,
      goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 1, apartmentSuitability: 4,
      aloneTolerance: 3, shedding: 2, grooming: 1, drooling: 1, barking: 1,
      firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 2, coldTolerance: 1,
    },
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    group: "Spitz",
    origin: "Japan",
    lifespan: [12, 16],
    annualCost: [1200, 2000],
    traits: {
      size: 2, energy: 3, exerciseNeeds: 3, mentalStimulation: 3, trainability: 2,
      learningAbility: 4, independence: 5, affection: 2, sociability: 2,
      goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 2, apartmentSuitability: 3,
      aloneTolerance: 4, shedding: 5, grooming: 2, drooling: 1, barking: 2,
      firstTimeSuitability: 2, strengthRequired: 2, heatTolerance: 3, coldTolerance: 5,
    },
  },
  {
    id: "german-shepherd",
    name: "German Shepherd",
    group: "Herding",
    origin: "Germany",
    lifespan: [9, 13],
    annualCost: [1500, 2400],
    traits: { size: 4, energy: 4, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 3, affection: 4, sociability: 3, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 3, apartmentSuitability: 2, aloneTolerance: 2, shedding: 5, grooming: 3, drooling: 2, barking: 4, firstTimeSuitability: 2, strengthRequired: 5, heatTolerance: 2, coldTolerance: 5 },
  },
  {
    id: "dachshund",
    name: "Dachshund",
    group: "Hound",
    origin: "Germany",
    lifespan: [12, 16],
    annualCost: [1000, 1700],
    traits: { size: 1, energy: 3, exerciseNeeds: 2, mentalStimulation: 3, trainability: 3, learningAbility: 4, independence: 4, affection: 4, sociability: 3, goodWithChildren: 3, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 5, aloneTolerance: 2, shedding: 2, grooming: 2, drooling: 1, barking: 4, firstTimeSuitability: 3, strengthRequired: 1, heatTolerance: 3, coldTolerance: 2 },
  },
  {
    id: "beagle",
    name: "Beagle",
    group: "Hound",
    origin: "United Kingdom",
    lifespan: [12, 15],
    annualCost: [1100, 1800],
    traits: { size: 2, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 2, learningAbility: 3, independence: 4, affection: 4, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 3, apartmentSuitability: 3, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 2, barking: 5, firstTimeSuitability: 3, strengthRequired: 2, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "cocker-spaniel",
    name: "Cocker Spaniel",
    group: "Gundog",
    origin: "United Kingdom",
    lifespan: [12, 15],
    annualCost: [1300, 2100],
    traits: { size: 2, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 3, apartmentSuitability: 3, aloneTolerance: 2, shedding: 3, grooming: 4, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 2, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "chihuahua",
    name: "Chihuahua",
    group: "Toy",
    origin: "Mexico",
    lifespan: [12, 18],
    annualCost: [800, 1500],
    traits: { size: 1, energy: 3, exerciseNeeds: 1, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 3, affection: 5, sociability: 2, goodWithChildren: 2, goodWithDogs: 2, goodWithPets: 2, apartmentSuitability: 5, aloneTolerance: 2, shedding: 2, grooming: 1, drooling: 1, barking: 5, firstTimeSuitability: 3, strengthRequired: 1, heatTolerance: 4, coldTolerance: 1 },
  },
  {
    id: "miniature-schnauzer",
    name: "Miniature Schnauzer",
    group: "Utility",
    origin: "Germany",
    lifespan: [12, 15],
    annualCost: [1200, 2000],
    traits: { size: 2, energy: 4, exerciseNeeds: 3, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 3, affection: 4, sociability: 3, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 4, aloneTolerance: 3, shedding: 1, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 4, strengthRequired: 2, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "bernese-mountain-dog",
    name: "Bernese Mountain Dog",
    group: "Working",
    origin: "Switzerland",
    lifespan: [7, 10],
    annualCost: [1800, 3000],
    traits: { size: 5, energy: 2, exerciseNeeds: 3, mentalStimulation: 3, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 4, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 1, aloneTolerance: 2, shedding: 5, grooming: 4, drooling: 3, barking: 2, firstTimeSuitability: 3, strengthRequired: 5, heatTolerance: 1, coldTolerance: 5 },
  },
  {
    id: "australian-shepherd",
    name: "Australian Shepherd",
    group: "Herding",
    origin: "United States",
    lifespan: [12, 15],
    annualCost: [1300, 2200],
    traits: { size: 3, energy: 5, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 3, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 3, apartmentSuitability: 1, aloneTolerance: 2, shedding: 4, grooming: 3, drooling: 1, barking: 4, firstTimeSuitability: 2, strengthRequired: 3, heatTolerance: 3, coldTolerance: 5 },
  },
  {
    id: "jack-russell-terrier",
    name: "Jack Russell Terrier",
    group: "Terrier",
    origin: "United Kingdom",
    lifespan: [13, 16],
    annualCost: [900, 1600],
    traits: { size: 1, energy: 5, exerciseNeeds: 4, mentalStimulation: 4, trainability: 3, learningAbility: 4, independence: 4, affection: 4, sociability: 3, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 3, aloneTolerance: 3, shedding: 3, grooming: 1, drooling: 1, barking: 4, firstTimeSuitability: 2, strengthRequired: 1, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "siberian-husky",
    name: "Siberian Husky",
    group: "Spitz",
    origin: "Siberia",
    lifespan: [12, 15],
    annualCost: [1200, 2000],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 4, trainability: 2, learningAbility: 4, independence: 5, affection: 4, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 2, shedding: 5, grooming: 3, drooling: 1, barking: 2, firstTimeSuitability: 1, strengthRequired: 5, heatTolerance: 1, coldTolerance: 5 },
  },
  {
    id: "boxer",
    name: "Boxer",
    group: "Working",
    origin: "Germany",
    lifespan: [10, 12],
    annualCost: [1400, 2300],
    traits: { size: 4, energy: 5, exerciseNeeds: 4, mentalStimulation: 4, trainability: 3, learningAbility: 4, independence: 2, affection: 5, sociability: 4, goodWithChildren: 5, goodWithDogs: 3, goodWithPets: 3, apartmentSuitability: 2, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 4, barking: 3, firstTimeSuitability: 3, strengthRequired: 4, heatTolerance: 1, coldTolerance: 2 },
  },
  {
    id: "rottweiler",
    name: "Rottweiler",
    group: "Working",
    origin: "Germany",
    lifespan: [9, 12],
    annualCost: [1600, 2600],
    traits: { size: 5, energy: 3, exerciseNeeds: 4, mentalStimulation: 4, trainability: 4, learningAbility: 5, independence: 3, affection: 4, sociability: 2, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 3, shedding: 3, grooming: 1, drooling: 3, barking: 2, firstTimeSuitability: 1, strengthRequired: 5, heatTolerance: 2, coldTolerance: 4 },
  },
  {
    id: "whippet",
    name: "Whippet",
    group: "Sighthound",
    origin: "United Kingdom",
    lifespan: [12, 15],
    annualCost: [1000, 1700],
    traits: { size: 3, energy: 3, exerciseNeeds: 3, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 3, affection: 5, sociability: 3, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 1, apartmentSuitability: 5, aloneTolerance: 2, shedding: 1, grooming: 1, drooling: 1, barking: 1, firstTimeSuitability: 4, strengthRequired: 2, heatTolerance: 3, coldTolerance: 1 },
  },
  {
    id: "shih-tzu",
    name: "Shih Tzu",
    group: "Toy",
    origin: "Tibet / China",
    lifespan: [12, 16],
    annualCost: [1100, 1900],
    traits: { size: 1, energy: 2, exerciseNeeds: 1, mentalStimulation: 2, trainability: 2, learningAbility: 3, independence: 3, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 5, aloneTolerance: 2, shedding: 1, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 1, heatTolerance: 1, coldTolerance: 3 },
  },
  {
    id: "pug",
    name: "Pug",
    group: "Toy",
    origin: "China",
    lifespan: [11, 14],
    annualCost: [1200, 2100],
    traits: { size: 1, energy: 2, exerciseNeeds: 1, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 5, aloneTolerance: 2, shedding: 4, grooming: 2, drooling: 2, barking: 2, firstTimeSuitability: 4, strengthRequired: 1, heatTolerance: 1, coldTolerance: 2 },
  },
  {
    id: "bichon-frise",
    name: "Bichon Frise",
    group: "Companion",
    origin: "Mediterranean",
    lifespan: [13, 16],
    annualCost: [1200, 2000],
    traits: { size: 1, energy: 3, exerciseNeeds: 2, mentalStimulation: 3, trainability: 4, learningAbility: 4, independence: 1, affection: 5, sociability: 5, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 5, aloneTolerance: 1, shedding: 1, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 1, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "staffordshire-bull-terrier",
    name: "Staffordshire Bull Terrier",
    group: "Terrier",
    origin: "United Kingdom",
    lifespan: [12, 14],
    annualCost: [1100, 1900],
    traits: { size: 3, energy: 4, exerciseNeeds: 3, mentalStimulation: 3, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 4, goodWithChildren: 5, goodWithDogs: 2, goodWithPets: 2, apartmentSuitability: 4, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 2, barking: 2, firstTimeSuitability: 3, strengthRequired: 4, heatTolerance: 3, coldTolerance: 2 },
  },
  {
    id: "vizsla",
    name: "Vizsla",
    group: "Gundog",
    origin: "Hungary",
    lifespan: [12, 15],
    annualCost: [1300, 2100],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 1, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 3, apartmentSuitability: 2, aloneTolerance: 1, shedding: 2, grooming: 1, drooling: 2, barking: 3, firstTimeSuitability: 2, strengthRequired: 4, heatTolerance: 3, coldTolerance: 2 },
  },
  {
    id: "samoyed",
    name: "Samoyed",
    group: "Spitz",
    origin: "Siberia",
    lifespan: [12, 14],
    annualCost: [1500, 2500],
    traits: { size: 4, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 3, learningAbility: 4, independence: 3, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 3, apartmentSuitability: 1, aloneTolerance: 2, shedding: 5, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 2, strengthRequired: 4, heatTolerance: 1, coldTolerance: 5 },
  },
  {
    id: "yorkshire-terrier",
    name: "Yorkshire Terrier",
    group: "Toy",
    origin: "United Kingdom",
    lifespan: [13, 16],
    annualCost: [1000, 1800],
    traits: { size: 1, energy: 3, exerciseNeeds: 2, mentalStimulation: 3, trainability: 3, learningAbility: 4, independence: 3, affection: 5, sociability: 3, goodWithChildren: 3, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 5, aloneTolerance: 2, shedding: 1, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 3, strengthRequired: 1, heatTolerance: 3, coldTolerance: 2 },
  },
];

export const breedById = Object.fromEntries(breeds.map((b) => [b.id, b])) as Record<BreedId, Breed>;

export function getBreed(id: string): Breed | undefined {
  return breedById[id as BreedId];
}
