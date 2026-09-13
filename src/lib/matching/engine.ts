import { breeds, type Breed, type BreedTraits } from "@/data/breeds";
import { pick } from "@/i18n";
import { breedContent } from "@/data/breed-content";
import type { DimensionKey, MatchRanking, MatchResult, UserProfile } from "./types";

/**
 * Deterministic, explainable compatibility engine.
 *
 *   User profile -> hard constraints -> weighted scoring -> ranking -> explanation
 *
 * No AI, no network calls. Runs identically on the server and in the browser.
 */

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n));

/** 100 when the trait matches the target exactly, decaying by `perStep` per point of distance. */
const near = (trait: number, target: number, perStep = 22) =>
  clamp(100 - Math.abs(trait - target) * perStep);

/** 100 when the trait is at or below the ceiling, penalised above it. */
const atMost = (trait: number, ceiling: number, perStep = 25) =>
  clamp(100 - Math.max(0, trait - ceiling) * perStep);

/** 100 when the trait is at or above the floor. */
const atLeast = (trait: number, floor: number, perStep = 25) =>
  clamp(100 - Math.max(0, floor - trait) * perStep);

const avg = (values: number[]) => values.reduce((a, b) => a + b, 0) / values.length;

const DIMENSION_WEIGHTS: Record<DimensionKey, number> = {
  lifestyle: 1.15,
  home: 1.1,
  activity: 1.25,
  temperament: 1,
  trainability: 0.9,
  companionship: 1.1,
  allergy: 0.9,
  wellbeing: 1,
  maintenance: 0.95,
};

const SIZE_TARGET: Record<string, number | null> = {
  small: 1.5, medium: 3, large: 4.5, any: null,
};

const TEMPERAMENT_TARGET: Record<string, { energy: number; affection: number; independence: number }> = {
  calm: { energy: 2, affection: 4, independence: 3 },
  affectionate: { energy: 3, affection: 5, independence: 1 },
  playful: { energy: 4, affection: 4, independence: 2 },
  independent: { energy: 3, affection: 2, independence: 5 },
};

function num(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function scoreDimensions(t: BreedTraits, p: UserProfile): Record<DimensionKey, number> {
  const activity = num(p["activity"], 2);
  const alone = num(p["alone"], 2);
  const home = p["home"] ?? "house-garden";
  const apartmentish = home === "apartment" || home === "house";
  const sizeTarget = SIZE_TARGET[p["size"] ?? "any"] ?? null;
  const temperament = TEMPERAMENT_TARGET[p["temperament"] ?? "affectionate"] ?? TEMPERAMENT_TARGET["affectionate"]!;

  const lifestyle = avg([
    near(t.energy, activity + 1, 20),
    atMost(t.exerciseNeeds, activity + 1, 20),
    p["experience"] === "first" ? atLeast(t.firstTimeSuitability, 4, 18) : 100,
    alone >= 6 ? atLeast(t.aloneTolerance, 4, 22) : alone >= 4 ? atLeast(t.aloneTolerance, 3, 18) : 100,
  ]);

  const homeScore = avg([
    apartmentish ? atLeast(t.apartmentSuitability, home === "apartment" ? 4 : 3, 20) : 100,
    sizeTarget === null ? 90 : near(t.size, sizeTarget, 24),
    home === "apartment" ? atMost(t.barking, 3, 18) : 100,
    home === "rural" ? 100 : atMost(t.exerciseNeeds, activity + 2, 16),
  ]);

  const activityScore = avg([
    near(t.exerciseNeeds, activity, 18),
    near(t.energy, activity, 18),
    p["energyLimit"] === "no" ? atMost(t.energy, 2, 28) : p["energyLimit"] === "maybe" ? atMost(t.energy, 4, 18) : atLeast(t.energy, 3, 14),
    p["physical"] === "light" ? atMost(t.strengthRequired, 1, 26) : p["physical"] === "moderate" ? atMost(t.strengthRequired, 3, 20) : 100,
  ]);

  const children = p["children"] ?? "none";
  const pets = p["pets"] ?? "none";
  const temperamentScore = avg([
    near(t.energy, temperament.energy, 16),
    near(t.affection, temperament.affection, 16),
    near(t.independence, temperament.independence, 14),
    children === "young" ? atLeast(t.goodWithChildren, 5, 22) : children === "older" ? atLeast(t.goodWithChildren, 4, 18) : 100,
    children === "visitors" ? atLeast(t.sociability, 4, 16) : 100,
    pets === "dog" ? atLeast(t.goodWithDogs, 4, 20) : pets === "cat" || pets === "small" ? atLeast(t.goodWithPets, 4, 22) : 100,
  ]);

  const trainability = avg([
    p["experience"] === "first" ? atLeast(t.trainability, 4, 20) : atLeast(t.trainability, 3, 14),
    atLeast(t.learningAbility, 3, 12),
    activity <= 2 ? atMost(t.mentalStimulation, 3, 18) : 100,
  ]);

  const companionshipGoal = p["companionship"] ?? "family";
  const companionship = avg([
    companionshipGoal === "calm-company" ? avg([atMost(t.energy, 3, 18), atLeast(t.affection, 4, 18)]) : 100,
    companionshipGoal === "motivation" ? avg([atLeast(t.energy, 3, 16), atLeast(t.affection, 4, 16)]) : 100,
    companionshipGoal === "active" ? avg([atLeast(t.energy, 4, 18), atLeast(t.exerciseNeeds, 4, 16)]) : 100,
    companionshipGoal === "family" ? avg([atLeast(t.sociability, 4, 16), atLeast(t.goodWithChildren, 4, 16)]) : 100,
    atLeast(t.affection, 3, 12),
  ]);

  const sheddingCeiling = p["shedding"] === "must-low" ? 1 : p["shedding"] === "prefer-low" ? 3 : 5;
  const groomingCeiling = p["grooming"] === "minimal" ? 2 : p["grooming"] === "moderate" ? 3 : 5;
  const maintenance = avg([
    atMost(t.shedding, sheddingCeiling, 20),
    atMost(t.grooming, groomingCeiling, 18),
    home === "apartment" ? atMost(t.barking, 3, 14) : 100,
    atMost(t.drooling, 3, 10),
  ]);

  /**
   * Allergy considerations.
   * Shedding, coat upkeep and drooling are supporting signals only: they say
   * something about how much hair and saliva ends up in the home. No breed is
   * allergy-free, and individual tolerance varies, so this never gates a breed
   * in on its own — it only reflects the odds of an easier start.
   */
  const allergyLevel = p["allergy"] ?? "none";
  const allergy =
    allergyLevel === "significant"
      ? avg([
          atMost(t.shedding, 2, 26),
          atLeast(t.grooming, 3, 12),
          atMost(t.drooling, 2, 16),
        ])
      : allergyLevel === "mild"
        ? avg([atMost(t.shedding, 3, 18), atMost(t.drooling, 3, 12)])
        : allergyLevel === "unsure"
          ? avg([atMost(t.shedding, 3, 12), atMost(t.drooling, 3, 8)])
          : 100;

  /**
   * Companion & wellbeing.
   * Calmness, sociability, human orientation, trainability and activity level.
   * This describes potential suitability for a calm companion lifestyle — never
   * a therapy role, and never a treatment for any medical condition.
   */
  const wellbeingGoal = p["wellbeing"] ?? "no";
  const wellbeingBase = avg([
    atLeast(t.affection, 4, 14),
    atLeast(t.sociability, 3, 12),
    atLeast(t.trainability, 3, 12),
  ]);
  const wellbeingCalm = avg([
    atMost(t.energy, 3, 16),
    atMost(t.barking, 3, 12),
    atMost(t.mentalStimulation, 4, 12),
    atLeast(t.learningAbility, 3, 10),
  ]);
  const wellbeing =
    wellbeingGoal === "very"
      ? avg([wellbeingBase, wellbeingCalm, atLeast(t.affection, 5, 14), atMost(t.independence, 3, 12)])
      : wellbeingGoal === "important"
        ? avg([wellbeingBase, wellbeingCalm])
        : wellbeingGoal === "some"
          ? avg([wellbeingBase, 100])
          : 100;

  return {
    lifestyle: Math.round(lifestyle),
    home: Math.round(homeScore),
    activity: Math.round(activityScore),
    temperament: Math.round(temperamentScore),
    trainability: Math.round(trainability),
    companionship: Math.round(companionship),
    allergy: Math.round(allergy),
    wellbeing: Math.round(wellbeing),
    maintenance: Math.round(maintenance),
  };
}

/** A reader-set "non-negotiable" toggle on one of the four hard-limit-eligible questions. */
const isHardLimit = (p: UserProfile, key: string) => p[`${key}HardLimit`] === "true";

/** Hard constraints. These cap the final score regardless of how well everything else fits — and, for a question the reader has flagged as a hard limit, eliminate the breed from `matchBreeds` outright. */
function hardConstraints(t: BreedTraits, p: UserProfile): { warnings: string[]; cap: number; eliminated: boolean; eliminationReasons: string[] } {
  const warnings: string[] = [];
  const eliminationReasons: string[] = [];
  let cap = 100;
  let eliminated = false;

  if (p["energyLimit"] === "no" && t.energy >= 4) {
    warnings.push(pick({ en: "You told us you'd need a calmer dog, and this one really does have a lot of energy.", no: "Du sa at du trenger en roligere hund, og denne har virkelig mye energi.", pl: "Napisałeś, że potrzebujesz spokojniejszego psa, a ten naprawdę ma sporo energii." }));
    cap = Math.min(cap, 52);
  }
  if (p["physical"] === "light" && t.strengthRequired >= 4) {
    warnings.push(pick({ en: "This is a big, strong dog. That can be hard work on the lead if strength is an issue for you.", no: "Dette er en stor og sterk hund. Det kan bli tungt i bånd hvis styrke er en utfordring for deg.", pl: "To duży i silny pies. Trzymanie go na smyczy może być trudne, jeśli siła fizyczna jest dla Ciebie wyzwaniem." }));
    cap = Math.min(cap, 55);
  }
  if (p["shedding"] === "must-low" && t.shedding >= 4) {
    const warning = pick({ en: "They shed a lot. With someone at home who reacts to dogs, that's a difficult place to start.", no: "Den feller mye. Når noen hjemme reagerer på hund, er det et vanskelig utgangspunkt.", pl: "Ten pies mocno linieje. Jeśli ktoś w domu reaguje na psy, to trudny punkt wyjścia." });
    warnings.push(warning);
    cap = Math.min(cap, 50);
    if (isHardLimit(p, "shedding")) {
      eliminated = true;
      eliminationReasons.push(warning);
    }
  }
  if (p["children"] === "young" && t.goodWithChildren <= 3) {
    warnings.push(pick({ en: "With young children at home, this one usually needs an experienced hand.", no: "Med små barn hjemme trenger denne som regel en erfaren eier.", pl: "Z małymi dziećmi w domu ten pies zwykle potrzebuje doświadczonej ręki." }));
    cap = Math.min(cap, 62);
  }
  if (p["pets"] === "small" && t.goodWithPets <= 2) {
    warnings.push(pick({ en: "They have a strong chase instinct, so small pets in the same home would be a real worry.", no: "Den har sterk jaktlyst, så små dyr i samme hjem ville vært en reell bekymring.", pl: "Ten pies ma silny instynkt łowiecki, więc małe zwierzęta w tym samym domu byłyby realnym ryzykiem." }));
    cap = Math.min(cap, 45);
  }
  if (p["experience"] === "first" && t.firstTimeSuitability <= 2) {
    warnings.push(pick({ en: "Beginner friendliness: low. This one forgives fewer first-timer mistakes, and does best with someone who's raised a dog before.", no: "Et krevende valg som første hund. Den trives best hos noen som har gjort det før.", pl: "Wymagający wybór na pierwszego psa. Najlepiej czuje się przy kimś, kto ma już doświadczenie." }));
    cap = Math.min(cap, 60);
  }
  if (Number(p["alone"] ?? 0) >= 6 && t.aloneTolerance <= 2) {
    const warning = pick({ en: "They find long days on their own hard. Six hours or more would need a proper plan.", no: "Den synes lange dager alene er tungt. Seks timer eller mer krever en ordentlig plan.", pl: "Długie dni w samotności są dla niego trudne. Sześć godzin lub więcej wymagałoby przemyślanego planu." });
    warnings.push(warning);
    cap = Math.min(cap, 58);
    if (isHardLimit(p, "alone")) {
      eliminated = true;
      eliminationReasons.push(warning);
    }
  }
  if (p["home"] === "apartment" && t.apartmentSuitability <= 1) {
    const warning = pick({ en: "Flat living rarely suits this breed, even with plenty of long walks.", no: "Leilighetsliv passer sjelden for denne rasen, selv med mange lange turer.", pl: "Życie w mieszkaniu rzadko pasuje tej rasie, nawet przy wielu długich spacerach." });
    warnings.push(warning);
    cap = Math.min(cap, 50);
    if (isHardLimit(p, "home")) {
      eliminated = true;
      eliminationReasons.push(warning);
    }
  }
  if (p["allergy"] === "significant" && t.shedding >= 4) {
    const warning = pick({
      en: "With a significant allergy at home, a heavy-shedding dog is a hard place to start. Speak to an allergy specialist before you decide.",
      no: "Med en betydelig allergi hjemme er en hund som feller mye et vanskelig utgangspunkt. Snakk med en allergispesialist før du bestemmer deg.",
      pl: "Przy poważnej alergii w domu, pies, który mocno linieje, to trudny punkt wyjścia. Porozmawiaj ze specjalistą od alergii, zanim podejmiesz decyzję.",
    });
    warnings.push(warning);
    cap = Math.min(cap, 48);
    if (isHardLimit(p, "allergy")) {
      eliminated = true;
      eliminationReasons.push(warning);
    }
  }

  return { warnings, cap, eliminated, eliminationReasons };
}


/** Weighted total for any set of traits — same maths as the breed ranking. */
function weighted(dimensions: Record<DimensionKey, number>): number {
  const weightedTotal = (Object.keys(dimensions) as DimensionKey[]).reduce(
    (sum, key) => sum + dimensions[key] * DIMENSION_WEIGHTS[key],
    0,
  );
  const weightSum = Object.values(DIMENSION_WEIGHTS).reduce((a, b) => a + b, 0);
  return weightedTotal / weightSum;
}

export interface DogFit {
  score: number;
  dimensions: Record<DimensionKey, number>;
  warnings: string[];
  status: MatchResult["status"];
  /** True when the score rests on the dog itself rather than a breed. */
  individual: boolean;
}

/**
 * How well one specific dog — pure breed or mix — fits a life.
 * Scored from the dog's own characteristics, never from a guessed breed.
 */
export function matchDogTraits(
  traits: BreedTraits,
  profile: UserProfile,
  options: { individual?: boolean } = {},
): DogFit {
  const dimensions = scoreDimensions(traits, profile);
  const { warnings, cap } = hardConstraints(traits, profile);
  const score = Math.round(Math.min(weighted(dimensions), cap));
  const status: MatchResult["status"] =
    cap <= 55 ? "not-recommended" : warnings.length > 0 ? "caution" : "recommended";
  return { score, dimensions, warnings, status, individual: options.individual ?? false };
}

/**
 * Ranks every breed against a profile. A breed that fails a question the
 * reader has explicitly flagged as a hard limit is dropped from the list
 * entirely, rather than merely capped — unless that would eliminate every
 * breed, in which case the limits are relaxed back to soft caps so the
 * reader always sees a result rather than an empty page.
 */
export function matchBreeds(profile: UserProfile): MatchResult[] {
  return matchBreedRanking(profile).matches;
}

/** Full deterministic ranking, including breeds removed by a reader-set hard limit. */
export function matchBreedRanking(profile: UserProfile): MatchRanking {
  const scored = breeds.map((breed) => {
    const dimensions = scoreDimensions(breed.traits, profile);
    const { warnings, cap, eliminated, eliminationReasons } = hardConstraints(breed.traits, profile);

    const weightedTotal = (Object.keys(dimensions) as DimensionKey[]).reduce(
      (sum, key) => sum + dimensions[key] * DIMENSION_WEIGHTS[key],
      0,
    );
    const weightSum = Object.values(DIMENSION_WEIGHTS).reduce((a, b) => a + b, 0);
    const base = weightedTotal / weightSum;
    const score = Math.round(Math.min(base, cap));

    const status: MatchResult["status"] =
      cap <= 55 ? "not-recommended" : warnings.length > 0 ? "caution" : "recommended";

    return { result: { breed, breedId: breed.id, score, dimensions, warnings, status }, eliminated, eliminationReasons };
  });

  const survivors = scored.filter((s) => !s.eliminated).map((s) => s.result);
  const limitsRelaxed = survivors.length === 0;
  const pool = limitsRelaxed ? scored.map((s) => s.result) : survivors;
  const eliminated = scored
    .filter((s) => s.eliminated)
    .map((s) => ({ result: s.result, reasons: s.eliminationReasons }))
    .sort((a, b) => b.result.score - a.result.score);

  return {
    matches: pool.sort((a, b) => b.score - a.score),
    eliminated,
    limitsRelaxed,
  };
}

/** Explanation generator — strengths and honest trade-offs for the matched breed. */
export function explain(result: MatchResult) {
  const content = breedContent()[result.breedId];
  return {
    summary: content.summary,
    strengths: content.strengths,
    considerations: content.considerations,
    warnings: result.warnings,
  };
}
