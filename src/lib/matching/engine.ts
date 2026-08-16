import { breeds, type Breed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import type { DimensionKey, MatchResult, UserProfile } from "./types";

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

function scoreDimensions(breed: Breed, p: UserProfile): Record<DimensionKey, number> {
  const t = breed.traits;
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

  return {
    lifestyle: Math.round(lifestyle),
    home: Math.round(homeScore),
    activity: Math.round(activityScore),
    temperament: Math.round(temperamentScore),
    trainability: Math.round(trainability),
    companionship: Math.round(companionship),
    maintenance: Math.round(maintenance),
  };
}

/** Hard constraints. These cap the final score regardless of how well everything else fits. */
function hardConstraints(breed: Breed, p: UserProfile): { warnings: string[]; cap: number } {
  const t = breed.traits;
  const warnings: string[] = [];
  let cap = 100;

  if (p["energyLimit"] === "no" && t.energy >= 4) {
    warnings.push("You told us you'd need a calmer dog, and this one really does have a lot of energy.");
    cap = Math.min(cap, 52);
  }
  if (p["physical"] === "light" && t.strengthRequired >= 4) {
    warnings.push("This is a big, strong dog. That can be hard work on the lead if strength is an issue for you.");
    cap = Math.min(cap, 55);
  }
  if (p["shedding"] === "must-low" && t.shedding >= 4) {
    warnings.push("They shed a lot. With someone at home who reacts to dogs, that's a difficult place to start.");
    cap = Math.min(cap, 50);
  }
  if (p["children"] === "young" && t.goodWithChildren <= 3) {
    warnings.push("With young children at home, this one usually needs an experienced hand.");
    cap = Math.min(cap, 62);
  }
  if (p["pets"] === "small" && t.goodWithPets <= 2) {
    warnings.push("They have a strong chase instinct, so small pets in the same home would be a real worry.");
    cap = Math.min(cap, 45);
  }
  if (p["experience"] === "first" && t.firstTimeSuitability <= 2) {
    warnings.push("A demanding choice for a first dog. They do best with someone who's done it before.");
    cap = Math.min(cap, 60);
  }
  if (Number(p["alone"] ?? 0) >= 6 && t.aloneTolerance <= 2) {
    warnings.push("They find long days on their own hard. Six hours or more would need a proper plan.");
    cap = Math.min(cap, 58);
  }
  if (p["home"] === "apartment" && t.apartmentSuitability <= 1) {
    warnings.push("Flat living rarely suits this breed, even with plenty of long walks.");
    cap = Math.min(cap, 50);
  }

  return { warnings, cap };
}

export function matchBreeds(profile: UserProfile): MatchResult[] {
  return breeds
    .map((breed) => {
      const dimensions = scoreDimensions(breed, profile);
      const { warnings, cap } = hardConstraints(breed, profile);

      const weightedTotal = (Object.keys(dimensions) as DimensionKey[]).reduce(
        (sum, key) => sum + dimensions[key] * DIMENSION_WEIGHTS[key],
        0,
      );
      const weightSum = Object.values(DIMENSION_WEIGHTS).reduce((a, b) => a + b, 0);
      const base = weightedTotal / weightSum;
      const score = Math.round(Math.min(base, cap));

      const status: MatchResult["status"] =
        cap <= 55 ? "not-recommended" : warnings.length > 0 ? "caution" : "recommended";

      return { breed, breedId: breed.id, score, dimensions, warnings, status };
    })
    .sort((a, b) => b.score - a.score);
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
