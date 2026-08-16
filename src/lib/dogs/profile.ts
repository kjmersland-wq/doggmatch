/**
 * Mixed-breed support.
 *
 * A dog is described by its own measurable characteristics first. Known breeds
 * in a mix are supporting data only — never a claim of an exact breed match.
 * Everything here is deterministic: same input, same output, on server and client.
 */
import { breedById, type BreedId, type BreedTraits } from "@/data/breeds";
import { pick } from "@/i18n";
import type { DogProfile } from "@/lib/training/store";
import { OBSERVED_KEYS } from "./types";
import { matchDogTraits, type DogFit } from "@/lib/matching/engine";
import type { UserProfile } from "@/lib/matching/types";

export { OBSERVED_KEYS } from "./types";
export type { BreedType, ObservedTraits } from "./types";

/** A neutral, average dog. Used when we genuinely know nothing else. */
export const BASELINE_TRAITS: BreedTraits = {
  size: 3,
  energy: 3,
  exerciseNeeds: 3,
  mentalStimulation: 3,
  trainability: 3,
  learningAbility: 3,
  independence: 3,
  affection: 4,
  sociability: 3,
  goodWithChildren: 3,
  goodWithDogs: 3,
  goodWithPets: 3,
  apartmentSuitability: 3,
  aloneTolerance: 3,
  shedding: 3,
  grooming: 3,
  drooling: 2,
  barking: 3,
  firstTimeSuitability: 3,
  strengthRequired: 3,
  heatTolerance: 3,
  coldTolerance: 3,
} as BreedTraits;

export type TraitBasis = "breed" | "mix-known" | "individual" | "estimate";

export interface DogTraitProfile {
  traits: BreedTraits;
  /** Breeds we can lean on. Empty for an unknown mix. */
  breedIds: BreedId[];
  isMixed: boolean;
  unknownMix: boolean;
  /** How the numbers were arrived at — drives the honesty note in the UI. */
  basis: TraitBasis;
  /** Rough 0–100 confidence in the trait picture. Never presented as exact. */
  confidence: number;
}

const round1 = (n: number) => Math.round(n * 10) / 10;
const clamp5 = (n: number) => Math.max(1, Math.min(5, n));

export function isMixedDog(dog?: Pick<DogProfile, "breedType">): boolean {
  return dog?.breedType === "mixed";
}

/** Breeds actually known for this dog. Purebred -> one, mix -> however many were named. */
export function knownBreedIds(dog?: DogProfile): BreedId[] {
  if (!dog) return [];
  if (isMixedDog(dog)) {
    if (dog.mixUnknown) return [];
    return (dog.mixBreedIds ?? []).filter((id) => Boolean(breedById[id]));
  }
  return dog.breedId && breedById[dog.breedId] ? [dog.breedId] : [];
}

function averageTraits(ids: BreedId[]): BreedTraits | undefined {
  const list = ids.map((id) => breedById[id]).filter(Boolean);
  if (list.length === 0) return undefined;
  const keys = Object.keys(BASELINE_TRAITS) as (keyof BreedTraits)[];
  const out = {} as BreedTraits;
  for (const key of keys) {
    const sum = list.reduce((acc, b) => acc + (b!.traits[key] ?? BASELINE_TRAITS[key]), 0);
    out[key] = round1(sum / list.length);
  }
  return out;
}

/**
 * The dog's working trait picture.
 *
 * Order of authority:
 *   1. What the owner has observed about this individual dog.
 *   2. The average of any known breeds in the mix (supporting data).
 *   3. A neutral baseline.
 */
export function resolveDogTraits(dog?: DogProfile): DogTraitProfile {
  const breedIds = knownBreedIds(dog);
  const mixed = isMixedDog(dog);
  const unknownMix = mixed && breedIds.length === 0;
  const breedTraits = averageTraits(breedIds);
  const observed = dog?.observed ?? {};
  const observedCount = OBSERVED_KEYS.filter((k) => typeof observed[k] === "number").length;

  const base: BreedTraits = { ...(breedTraits ?? BASELINE_TRAITS) };

  // Individual observations lead. With no breed to lean on they are the whole
  // picture; with a known mix they still dominate, breed data only nudges.
  const observedWeight = breedTraits ? 0.75 : 1;
  const traits = { ...base };
  for (const key of OBSERVED_KEYS) {
    const value = observed[key];
    if (typeof value !== "number") continue;
    const blended = clamp5(value) * observedWeight + base[key] * (1 - observedWeight);
    traits[key] = round1(blended);
  }

  // A couple of traits follow sensibly from the observed ones.
  if (typeof observed.energy === "number") {
    traits.mentalStimulation = round1((traits.mentalStimulation + clamp5(observed.energy)) / 2);
  }
  if (typeof observed.size === "number") {
    traits.strengthRequired = round1((traits.strengthRequired + clamp5(observed.size)) / 2);
  }

  const basis: TraitBasis = !mixed && breedIds.length === 1
    ? "breed"
    : breedIds.length > 0
      ? "mix-known"
      : observedCount >= 3
        ? "individual"
        : "estimate";

  const confidence =
    basis === "breed" ? 90
    : basis === "mix-known" ? Math.min(85, 60 + observedCount * 3)
    : basis === "individual" ? Math.min(80, 45 + observedCount * 5)
    : 40;

  return { traits, breedIds, isMixed: mixed, unknownMix, basis, confidence };
}

/** Human label for the dog's breed line: "Mixed breed · Labrador × Poodle". */
export function dogBreedLabel(dog?: DogProfile): string {
  if (!dog) return "";
  const mixedWord = pick({ en: "Mixed breed", no: "Blandingshund" });
  if (isMixedDog(dog)) {
    const names = knownBreedIds(dog).map((id) => breedById[id]!.name);
    if (names.length > 0) return `${mixedWord} · ${names.join(" × ")}`;
    if (dog.breedOther?.trim()) return `${mixedWord} · ${dog.breedOther.trim()}`;
    return `${mixedWord} · ${pick({ en: "unknown mix", no: "ukjent blanding" })}`;
  }
  if (dog.breedId && breedById[dog.breedId]) return breedById[dog.breedId]!.name;
  return dog.breedOther?.trim() ?? "";
}

/** Honest one-liner about how much the breed data can be trusted for this dog. */
export function traitBasisNote(profile: DogTraitProfile): string {
  switch (profile.basis) {
    case "breed":
      return pick({
        en: "Based on the breed, adjusted by what you've told us about your own dog.",
        no: "Basert på rasen, justert etter det du har fortalt oss om din egen hund.",
      });
    case "mix-known":
      return pick({
        en: "Based mostly on your own dog, with the breeds in the mix as background. A mix is never an exact copy of the breeds behind it.",
        no: "Bygger mest på din egen hund, med rasene i blandingen som bakgrunn. En blanding blir aldri en nøyaktig kopi av rasene bak den.",
      });
    case "individual":
      return pick({
        en: "Built entirely from what you've told us about your dog — no breed guesswork.",
        no: "Bygget helt på det du har fortalt oss om hunden din — ingen gjetting på rase.",
      });
    default:
      return pick({
        en: "We don't know much about your dog yet, so this is a careful average. Add a few details and it gets a lot more useful.",
        no: "Vi vet ikke så mye om hunden din ennå, så dette er et forsiktig gjennomsnitt. Legg inn noen detaljer, så blir det mye mer nyttig.",
      });
  }
}

/** Fit between this dog — mix or not — and the answers from the compatibility quiz. */
export function matchOwnDog(dog: DogProfile | undefined, profile: UserProfile): DogFit & { basis: TraitBasis } {
  const resolved = resolveDogTraits(dog);
  const fit = matchDogTraits(resolved.traits, profile, {
    individual: resolved.basis !== "breed",
  });
  return { ...fit, basis: resolved.basis };
}
