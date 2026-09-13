import type { Breed } from "./breeds";

/** English-first expansion. Traits stay deterministic and language-neutral. */
export const newBreeds: Breed[] = [
  {
    id: "labradoodle", name: "Labradoodle", group: "Companion", origin: "Australia", lifespan: [12, 15], annualCost: [1500, 2600],
    traits: { size: 3, energy: 4, exerciseNeeds: 4, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 4, apartmentSuitability: 3, aloneTolerance: 2, shedding: 2, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "goldendoodle", name: "Goldendoodle", group: "Companion", origin: "United States", lifespan: [10, 15], annualCost: [1600, 2800],
    traits: { size: 3, energy: 4, exerciseNeeds: 4, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 4, apartmentSuitability: 3, aloneTolerance: 2, shedding: 2, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 2, coldTolerance: 4 },
  },
  {
    id: "cavapoo", name: "Cavapoo", group: "Companion", origin: "Australia", lifespan: [12, 15], annualCost: [1300, 2300],
    traits: { size: 1, energy: 3, exerciseNeeds: 2, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 1, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 5, apartmentSuitability: 1, aloneTolerance: 1, shedding: 2, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 1, heatTolerance: 2, coldTolerance: 3 },
  },
  {
    id: "cockapoo", name: "Cockapoo", group: "Companion", origin: "United States", lifespan: [12, 16], annualCost: [1300, 2300],
    traits: { size: 2, energy: 4, exerciseNeeds: 3, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 5, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 2, aloneTolerance: 2, shedding: 2, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 2, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "maltipoo", name: "Maltipoo", group: "Companion", origin: "United States", lifespan: [12, 16], annualCost: [1200, 2100],
    traits: { size: 1, energy: 3, exerciseNeeds: 2, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 1, affection: 5, sociability: 5, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 1, aloneTolerance: 1, shedding: 1, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 4, strengthRequired: 1, heatTolerance: 3, coldTolerance: 2 },
  },
  {
    id: "bernedoodle", name: "Bernedoodle", group: "Companion", origin: "United States", lifespan: [10, 15], annualCost: [1800, 3200],
    traits: { size: 4, energy: 3, exerciseNeeds: 3, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 2, aloneTolerance: 2, shedding: 2, grooming: 5, drooling: 2, barking: 3, firstTimeSuitability: 3, strengthRequired: 4, heatTolerance: 2, coldTolerance: 4 },
  },
  {
    id: "great-dane", name: "Great Dane", group: "Working", origin: "Germany", lifespan: [7, 10], annualCost: [2200, 3800],
    traits: { size: 5, energy: 2, exerciseNeeds: 3, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 2, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 4, barking: 2, firstTimeSuitability: 2, strengthRequired: 5, heatTolerance: 2, coldTolerance: 3 },
  },
  {
    id: "dobermann", name: "Dobermann", group: "Working", origin: "Germany", lifespan: [10, 13], annualCost: [1600, 2700],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 3, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 2, barking: 4, firstTimeSuitability: 2, strengthRequired: 5, heatTolerance: 2, coldTolerance: 3 },
  },
  {
    id: "great-pyrenees", name: "Great Pyrenees", group: "Working", origin: "France / Spain", lifespan: [10, 12], annualCost: [1700, 2900],
    traits: { size: 5, energy: 2, exerciseNeeds: 3, mentalStimulation: 3, trainability: 2, learningAbility: 4, independence: 5, affection: 3, sociability: 3, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 3, apartmentSuitability: 1, aloneTolerance: 4, shedding: 5, grooming: 3, drooling: 3, barking: 5, firstTimeSuitability: 1, strengthRequired: 5, heatTolerance: 2, coldTolerance: 5 },
  },
  {
    id: "newfoundland", name: "Newfoundland", group: "Working", origin: "Canada", lifespan: [9, 12], annualCost: [2000, 3400],
    traits: { size: 5, energy: 2, exerciseNeeds: 3, mentalStimulation: 3, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 2, shedding: 5, grooming: 4, drooling: 5, barking: 2, firstTimeSuitability: 3, strengthRequired: 5, heatTolerance: 1, coldTolerance: 5 },
  },
  {
    id: "cane-corso", name: "Cane Corso", group: "Working", origin: "Italy", lifespan: [9, 12], annualCost: [1800, 3200],
    traits: { size: 5, energy: 3, exerciseNeeds: 4, mentalStimulation: 4, trainability: 4, learningAbility: 5, independence: 4, affection: 4, sociability: 2, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 3, shedding: 3, grooming: 1, drooling: 3, barking: 2, firstTimeSuitability: 1, strengthRequired: 5, heatTolerance: 2, coldTolerance: 3 },
  },
  {
    id: "bullmastiff", name: "Bullmastiff", group: "Working", origin: "United Kingdom", lifespan: [8, 10], annualCost: [1900, 3200],
    traits: { size: 5, energy: 2, exerciseNeeds: 3, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 3, affection: 4, sociability: 3, goodWithChildren: 4, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 3, shedding: 3, grooming: 1, drooling: 5, barking: 2, firstTimeSuitability: 2, strengthRequired: 5, heatTolerance: 2, coldTolerance: 3 },
  },
  {
    id: "english-bulldog", name: "English Bulldog", group: "Companion", origin: "United Kingdom", lifespan: [8, 10], annualCost: [1900, 3400],
    traits: { size: 3, energy: 1, exerciseNeeds: 1, mentalStimulation: 2, trainability: 2, learningAbility: 3, independence: 2, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 5, apartmentSuitability: 1, aloneTolerance: 2, shedding: 3, grooming: 2, drooling: 4, barking: 2, firstTimeSuitability: 3, strengthRequired: 3, heatTolerance: 1, coldTolerance: 2 },
  },
  {
    id: "boston-terrier", name: "Boston Terrier", group: "Companion", origin: "United States", lifespan: [11, 13], annualCost: [1300, 2300],
    traits: { size: 2, energy: 3, exerciseNeeds: 2, mentalStimulation: 3, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 5, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 1, aloneTolerance: 2, shedding: 2, grooming: 1, drooling: 2, barking: 2, firstTimeSuitability: 4, strengthRequired: 2, heatTolerance: 1, coldTolerance: 2 },
  },
  {
    id: "pembroke-welsh-corgi", name: "Pembroke Welsh Corgi", group: "Herding", origin: "Wales", lifespan: [12, 13], annualCost: [1300, 2200],
    traits: { size: 2, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 5, learningAbility: 5, independence: 3, affection: 4, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 3, apartmentSuitability: 3, aloneTolerance: 3, shedding: 5, grooming: 2, drooling: 1, barking: 4, firstTimeSuitability: 3, strengthRequired: 2, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "belgian-malinois", name: "Belgian Malinois", group: "Herding", origin: "Belgium", lifespan: [12, 14], annualCost: [1500, 2500],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 3, affection: 4, sociability: 2, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 2, shedding: 4, grooming: 1, drooling: 1, barking: 4, firstTimeSuitability: 1, strengthRequired: 4, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "shetland-sheepdog", name: "Shetland Sheepdog", group: "Herding", origin: "Scotland", lifespan: [12, 14], annualCost: [1300, 2200],
    traits: { size: 2, energy: 4, exerciseNeeds: 3, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 3, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 3, apartmentSuitability: 4, aloneTolerance: 2, shedding: 5, grooming: 4, drooling: 1, barking: 5, firstTimeSuitability: 4, strengthRequired: 2, heatTolerance: 3, coldTolerance: 5 },
  },
  {
    id: "australian-cattle-dog", name: "Australian Cattle Dog", group: "Herding", origin: "Australia", lifespan: [12, 16], annualCost: [1300, 2200],
    traits: { size: 3, energy: 5, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 4, affection: 3, sociability: 2, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 4, shedding: 4, grooming: 1, drooling: 1, barking: 3, firstTimeSuitability: 1, strengthRequired: 4, heatTolerance: 4, coldTolerance: 4 },
  },
  {
    id: "dalmatian", name: "Dalmatian", group: "Utility", origin: "Croatia", lifespan: [11, 13], annualCost: [1400, 2400],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 3, affection: 4, sociability: 4, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 2, aloneTolerance: 3, shedding: 4, grooming: 1, drooling: 1, barking: 3, firstTimeSuitability: 2, strengthRequired: 4, heatTolerance: 4, coldTolerance: 3 },
  },
  {
    id: "weimaraner", name: "Weimaraner", group: "Gundog", origin: "Germany", lifespan: [10, 13], annualCost: [1500, 2500],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 4, trainability: 4, learningAbility: 5, independence: 2, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 1, shedding: 2, grooming: 1, drooling: 2, barking: 3, firstTimeSuitability: 2, strengthRequired: 4, heatTolerance: 3, coldTolerance: 2 },
  },
  {
    id: "english-springer-spaniel", name: "English Springer Spaniel", group: "Gundog", origin: "United Kingdom", lifespan: [12, 14], annualCost: [1400, 2300],
    traits: { size: 3, energy: 5, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 3, apartmentSuitability: 3, aloneTolerance: 2, shedding: 4, grooming: 4, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "brittany", name: "Brittany", group: "Gundog", origin: "France", lifespan: [12, 14], annualCost: [1300, 2200],
    traits: { size: 3, energy: 5, exerciseNeeds: 5, mentalStimulation: 4, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 3, apartmentSuitability: 2, aloneTolerance: 2, shedding: 3, grooming: 2, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "german-shorthaired-pointer", name: "German Shorthaired Pointer", group: "Gundog", origin: "Germany", lifespan: [10, 13], annualCost: [1500, 2500],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 3, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 1, barking: 3, firstTimeSuitability: 2, strengthRequired: 4, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "havanese", name: "Havanese", group: "Companion", origin: "Cuba", lifespan: [14, 16], annualCost: [1200, 2100],
    traits: { size: 1, energy: 3, exerciseNeeds: 2, mentalStimulation: 3, trainability: 4, learningAbility: 4, independence: 1, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 5, apartmentSuitability: 1, aloneTolerance: 1, shedding: 1, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 5, strengthRequired: 1, heatTolerance: 4, coldTolerance: 2 },
  },
  {
    id: "maltese", name: "Maltese", group: "Toy", origin: "Mediterranean", lifespan: [12, 15], annualCost: [1100, 2000],
    traits: { size: 1, energy: 2, exerciseNeeds: 1, mentalStimulation: 3, trainability: 4, learningAbility: 4, independence: 1, affection: 5, sociability: 4, goodWithChildren: 3, goodWithDogs: 3, goodWithPets: 5, apartmentSuitability: 1, aloneTolerance: 1, shedding: 1, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 4, strengthRequired: 1, heatTolerance: 4, coldTolerance: 1 },
  },
  {
    id: "pomeranian", name: "Pomeranian", group: "Toy", origin: "Germany / Poland", lifespan: [12, 16], annualCost: [1100, 2000],
    traits: { size: 1, energy: 4, exerciseNeeds: 2, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 3, affection: 5, sociability: 3, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 5, apartmentSuitability: 2, aloneTolerance: 2, shedding: 4, grooming: 4, drooling: 1, barking: 5, firstTimeSuitability: 3, strengthRequired: 1, heatTolerance: 2, coldTolerance: 4 },
  },
  {
    id: "papillon", name: "Papillon", group: "Toy", origin: "France / Belgium", lifespan: [14, 16], annualCost: [1100, 1900],
    traits: { size: 1, energy: 4, exerciseNeeds: 3, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 5, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 5, apartmentSuitability: 2, aloneTolerance: 3, shedding: 2, grooming: 3, drooling: 1, barking: 4, firstTimeSuitability: 5, strengthRequired: 1, heatTolerance: 3, coldTolerance: 2 },
  },
  {
    id: "akita", name: "Akita", group: "Spitz", origin: "Japan", lifespan: [10, 13], annualCost: [1600, 2700],
    traits: { size: 5, energy: 3, exerciseNeeds: 4, mentalStimulation: 3, trainability: 3, learningAbility: 4, independence: 5, affection: 3, sociability: 2, goodWithChildren: 3, goodWithDogs: 1, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 4, shedding: 5, grooming: 2, drooling: 2, barking: 2, firstTimeSuitability: 1, strengthRequired: 5, heatTolerance: 4, coldTolerance: 5 },
  },
  {
    id: "basenji", name: "Basenji", group: "Hound", origin: "Central Africa", lifespan: [13, 16], annualCost: [1200, 2100],
    traits: { size: 2, energy: 4, exerciseNeeds: 4, mentalStimulation: 5, trainability: 2, learningAbility: 4, independence: 5, affection: 3, sociability: 2, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 4, aloneTolerance: 4, shedding: 2, grooming: 1, drooling: 1, barking: 1, firstTimeSuitability: 1, strengthRequired: 2, heatTolerance: 5, coldTolerance: 2 },
  },
  {
    id: "rhodesian-ridgeback", name: "Rhodesian Ridgeback", group: "Hound", origin: "Southern Africa", lifespan: [10, 12], annualCost: [1500, 2500],
    traits: { size: 4, energy: 4, exerciseNeeds: 4, mentalStimulation: 3, trainability: 3, learningAbility: 4, independence: 5, affection: 4, sociability: 3, goodWithChildren: 4, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 4, shedding: 3, grooming: 1, drooling: 2, barking: 2, firstTimeSuitability: 2, strengthRequired: 5, heatTolerance: 5, coldTolerance: 2 },
  },
  {
    id: "basset-hound", name: "Basset Hound", group: "Hound", origin: "France / United Kingdom", lifespan: [10, 12], annualCost: [1300, 2300],
    traits: { size: 3, energy: 2, exerciseNeeds: 2, mentalStimulation: 4, trainability: 2, learningAbility: 3, independence: 5, affection: 4, sociability: 5, goodWithChildren: 4, goodWithDogs: 5, goodWithPets: 3, apartmentSuitability: 3, aloneTolerance: 2, shedding: 4, grooming: 2, drooling: 4, barking: 5, firstTimeSuitability: 3, strengthRequired: 3, heatTolerance: 2, coldTolerance: 3 },
  },
  {
    id: "bloodhound", name: "Bloodhound", group: "Hound", origin: "Belgium / United Kingdom", lifespan: [8, 12], annualCost: [1800, 3000],
    traits: { size: 5, energy: 3, exerciseNeeds: 4, mentalStimulation: 5, trainability: 2, learningAbility: 4, independence: 5, affection: 4, sociability: 5, goodWithChildren: 4, goodWithDogs: 5, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 3, shedding: 3, grooming: 1, drooling: 5, barking: 5, firstTimeSuitability: 2, strengthRequired: 5, heatTolerance: 2, coldTolerance: 4 },
  },
  {
    id: "italian-greyhound", name: "Italian Greyhound", group: "Toy", origin: "Italy", lifespan: [13, 15], annualCost: [1100, 2000],
    traits: { size: 1, energy: 3, exerciseNeeds: 2, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 2, affection: 5, sociability: 4, goodWithChildren: 3, goodWithDogs: 3, goodWithPets: 4, apartmentSuitability: 2, aloneTolerance: 1, shedding: 1, grooming: 1, drooling: 1, barking: 2, firstTimeSuitability: 3, strengthRequired: 1, heatTolerance: 3, coldTolerance: 1 },
  },
  {
    id: "west-highland-white-terrier", name: "West Highland White Terrier", group: "Terrier", origin: "Scotland", lifespan: [13, 15], annualCost: [1200, 2100],
    traits: { size: 2, energy: 4, exerciseNeeds: 3, mentalStimulation: 4, trainability: 3, learningAbility: 4, independence: 4, affection: 4, sociability: 4, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 3, aloneTolerance: 3, shedding: 2, grooming: 4, drooling: 1, barking: 4, firstTimeSuitability: 3, strengthRequired: 2, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "cairn-terrier", name: "Cairn Terrier", group: "Terrier", origin: "Scotland", lifespan: [13, 15], annualCost: [1100, 1900],
    traits: { size: 2, energy: 4, exerciseNeeds: 3, mentalStimulation: 4, trainability: 3, learningAbility: 4, independence: 4, affection: 4, sociability: 4, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 2, apartmentSuitability: 3, aloneTolerance: 3, shedding: 3, grooming: 3, drooling: 1, barking: 4, firstTimeSuitability: 3, strengthRequired: 2, heatTolerance: 4, coldTolerance: 4 },
  },
  {
    id: "airedale-terrier", name: "Airedale Terrier", group: "Terrier", origin: "United Kingdom", lifespan: [10, 13], annualCost: [1500, 2500],
    traits: { size: 4, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 3, learningAbility: 4, independence: 4, affection: 4, sociability: 3, goodWithChildren: 4, goodWithDogs: 2, goodWithPets: 2, apartmentSuitability: 1, aloneTolerance: 3, shedding: 2, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 2, strengthRequired: 4, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "bull-terrier", name: "Bull Terrier", group: "Terrier", origin: "United Kingdom", lifespan: [11, 14], annualCost: [1400, 2400],
    traits: { size: 3, energy: 4, exerciseNeeds: 4, mentalStimulation: 3, trainability: 3, learningAbility: 3, independence: 4, affection: 5, sociability: 3, goodWithChildren: 4, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 2, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 2, barking: 2, firstTimeSuitability: 2, strengthRequired: 4, heatTolerance: 3, coldTolerance: 3 },
  },
  {
    id: "chinese-shar-pei", name: "Chinese Shar-Pei", group: "Utility", origin: "China", lifespan: [8, 12], annualCost: [1600, 2900],
    traits: { size: 3, energy: 2, exerciseNeeds: 2, mentalStimulation: 2, trainability: 2, learningAbility: 3, independence: 5, affection: 3, sociability: 1, goodWithChildren: 2, goodWithDogs: 1, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 4, shedding: 2, grooming: 1, drooling: 1, barking: 2, firstTimeSuitability: 1, strengthRequired: 3, heatTolerance: 2, coldTolerance: 2 },
  },
  {
    id: "chow-chow", name: "Chow Chow", group: "Spitz", origin: "China", lifespan: [9, 12], annualCost: [1600, 2800],
    traits: { size: 4, energy: 2, exerciseNeeds: 2, mentalStimulation: 2, trainability: 2, learningAbility: 3, independence: 5, affection: 2, sociability: 1, goodWithChildren: 2, goodWithDogs: 1, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 4, shedding: 5, grooming: 4, drooling: 2, barking: 2, firstTimeSuitability: 1, strengthRequired: 4, heatTolerance: 1, coldTolerance: 5 },
  },
  {
    id: "portuguese-water-dog", name: "Portuguese Water Dog", group: "Working", origin: "Portugal", lifespan: [11, 13], annualCost: [1600, 2700],
    traits: { size: 3, energy: 5, exerciseNeeds: 4, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 4, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 4, apartmentSuitability: 2, aloneTolerance: 2, shedding: 1, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 4, coldTolerance: 3 },
  },
  {
    id: "rough-collie", name: "Rough Collie", group: "Herding", origin: "Scotland", lifespan: [12, 14], annualCost: [1400, 2400],
    traits: { size: 4, energy: 3, exerciseNeeds: 3, mentalStimulation: 4, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 4, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 3, apartmentSuitability: 3, aloneTolerance: 2, shedding: 5, grooming: 4, drooling: 1, barking: 4, firstTimeSuitability: 5, strengthRequired: 3, heatTolerance: 3, coldTolerance: 5 },
  },
  {
    id: "old-english-sheepdog", name: "Old English Sheepdog", group: "Herding", origin: "United Kingdom", lifespan: [10, 12], annualCost: [1800, 3000],
    traits: { size: 4, energy: 4, exerciseNeeds: 4, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 2, apartmentSuitability: 2, aloneTolerance: 2, shedding: 3, grooming: 5, drooling: 2, barking: 3, firstTimeSuitability: 3, strengthRequired: 4, heatTolerance: 2, coldTolerance: 5 },
  },
  {
    id: "saint-bernard", name: "Saint Bernard", group: "Working", origin: "Switzerland", lifespan: [8, 10], annualCost: [2200, 3800],
    traits: { size: 5, energy: 2, exerciseNeeds: 2, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 4, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 2, shedding: 5, grooming: 3, drooling: 5, barking: 2, firstTimeSuitability: 3, strengthRequired: 5, heatTolerance: 1, coldTolerance: 5 },
  },
  {
    id: "irish-setter", name: "Irish Setter", group: "Gundog", origin: "Ireland", lifespan: [12, 15], annualCost: [1500, 2500],
    traits: { size: 4, energy: 5, exerciseNeeds: 5, mentalStimulation: 4, trainability: 4, learningAbility: 4, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 3, apartmentSuitability: 2, aloneTolerance: 2, shedding: 4, grooming: 4, drooling: 1, barking: 3, firstTimeSuitability: 3, strengthRequired: 4, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "miniature-pinscher", name: "Miniature Pinscher", group: "Toy", origin: "Germany", lifespan: [12, 16], annualCost: [1000, 1800],
    traits: { size: 1, energy: 4, exerciseNeeds: 3, mentalStimulation: 4, trainability: 3, learningAbility: 4, independence: 5, affection: 4, sociability: 2, goodWithChildren: 2, goodWithDogs: 2, goodWithPets: 4, apartmentSuitability: 3, aloneTolerance: 4, shedding: 2, grooming: 1, drooling: 1, barking: 5, firstTimeSuitability: 2, strengthRequired: 1, heatTolerance: 4, coldTolerance: 1 },
  },
  {
    id: "lhasa-apso", name: "Lhasa Apso", group: "Companion", origin: "Tibet", lifespan: [12, 15], annualCost: [1200, 2100],
    traits: { size: 1, energy: 2, exerciseNeeds: 2, mentalStimulation: 3, trainability: 3, learningAbility: 4, independence: 5, affection: 4, sociability: 2, goodWithChildren: 3, goodWithDogs: 2, goodWithPets: 5, apartmentSuitability: 3, aloneTolerance: 4, shedding: 1, grooming: 5, drooling: 1, barking: 5, firstTimeSuitability: 3, strengthRequired: 1, heatTolerance: 3, coldTolerance: 4 },
  },
  {
    id: "alaskan-malamute", name: "Alaskan Malamute", group: "Working", origin: "Alaska", lifespan: [10, 14], annualCost: [1700, 2900],
    traits: { size: 5, energy: 4, exerciseNeeds: 5, mentalStimulation: 4, trainability: 2, learningAbility: 4, independence: 5, affection: 4, sociability: 3, goodWithChildren: 4, goodWithDogs: 2, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 3, shedding: 5, grooming: 4, drooling: 1, barking: 2, firstTimeSuitability: 1, strengthRequired: 5, heatTolerance: 1, coldTolerance: 5 },
  },
  {
    id: "english-mastiff", name: "English Mastiff", group: "Working", origin: "United Kingdom", lifespan: [6, 10], annualCost: [2300, 4000],
    traits: { size: 5, energy: 1, exerciseNeeds: 2, mentalStimulation: 2, trainability: 3, learningAbility: 3, independence: 2, affection: 5, sociability: 3, goodWithChildren: 4, goodWithDogs: 3, goodWithPets: 1, apartmentSuitability: 1, aloneTolerance: 2, shedding: 3, grooming: 1, drooling: 5, barking: 1, firstTimeSuitability: 2, strengthRequired: 5, heatTolerance: 2, coldTolerance: 3 },
  },
  {
    id: "toy-poodle", name: "Toy Poodle", group: "Toy", origin: "France / Germany", lifespan: [14, 17], annualCost: [1200, 2200],
    traits: { size: 1, energy: 4, exerciseNeeds: 3, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 4, goodWithChildren: 4, goodWithDogs: 4, goodWithPets: 5, apartmentSuitability: 2, aloneTolerance: 2, shedding: 1, grooming: 5, drooling: 1, barking: 4, firstTimeSuitability: 5, strengthRequired: 1, heatTolerance: 3, coldTolerance: 2 },
  },
  {
    id: "australian-labradoodle", name: "Australian Labradoodle", group: "Companion", origin: "Australia", lifespan: [12, 15], annualCost: [1700, 3000],
    traits: { size: 3, energy: 4, exerciseNeeds: 4, mentalStimulation: 5, trainability: 5, learningAbility: 5, independence: 2, affection: 5, sociability: 5, goodWithChildren: 5, goodWithDogs: 5, goodWithPets: 4, apartmentSuitability: 3, aloneTolerance: 2, shedding: 1, grooming: 5, drooling: 1, barking: 3, firstTimeSuitability: 4, strengthRequired: 3, heatTolerance: 3, coldTolerance: 3 },
  },
];
