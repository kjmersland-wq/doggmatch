import type { AgeStage } from "@/data/care/types";
import type { ActivityLevel, BodyCondition, CareProfile } from "@/lib/care/store";

/**
 * A transparent, deterministic daily energy estimate.
 *
 * Resting energy is the standard 70 x weight^0.75 formula, multiplied by a
 * life-stage and lifestyle factor. It is a starting point for a conversation
 * with a vet — never a prescription, and we say so wherever we show it.
 */
export interface PortionResult {
  restingKcal: number;
  dailyKcal: number;
  factor: number;
  factorReason: string;
  gramsPerDay?: number;
  gramsPerMeal?: number;
  treatKcal: number;
  mealsPerDay: number;
}

const activityAdjust: Record<ActivityLevel, number> = {
  gentle: -0.1,
  moderate: 0,
  busy: 0.2,
};

const conditionAdjust: Record<BodyCondition, number> = {
  thin: 0.1,
  ideal: 0,
  heavy: -0.2,
};

function baseFactor(age: AgeStage, neutered: boolean): { factor: number; reason: string } {
  if (age === "puppy") return { factor: 3, reason: "growing puppy" };
  if (age === "adolescent") return { factor: 2, reason: "still growing" };
  if (age === "senior") return { factor: 1.4, reason: "older dog" };
  return neutered
    ? { factor: 1.6, reason: "adult, neutered" }
    : { factor: 1.8, reason: "adult" };
}

export function estimatePortions(
  weightKg: number | undefined,
  ageStage: AgeStage,
  profile: CareProfile,
): PortionResult | undefined {
  if (!weightKg || weightKg <= 0) return undefined;

  const resting = 70 * Math.pow(weightKg, 0.75);
  const base = baseFactor(ageStage, profile.neutered ?? false);
  let factor = base.factor;
  const reasons = [base.reason];

  if (ageStage === "adult" || ageStage === "senior") {
    const activity = profile.activity ?? "moderate";
    if (activityAdjust[activity]) {
      factor += activityAdjust[activity];
      reasons.push(activity === "busy" ? "busy days" : "gentle days");
    }
    const condition = profile.bodyCondition;
    if (condition && conditionAdjust[condition]) {
      factor += conditionAdjust[condition];
      reasons.push(condition === "heavy" ? "a little to lose" : "building up");
    }
  }

  factor = Math.max(1, Math.round(factor * 100) / 100);
  const dailyKcal = Math.round(resting * factor);
  const energy = profile.foodEnergy && profile.foodEnergy > 0 ? profile.foodEnergy : undefined;
  const mealsPerDay = profile.mealsPerDay ?? (ageStage === "puppy" ? 3 : 2);
  const gramsPerDay = energy ? Math.round((dailyKcal / energy) * 100) : undefined;

  return {
    restingKcal: Math.round(resting),
    dailyKcal,
    factor,
    factorReason: reasons.join(", "),
    gramsPerDay,
    gramsPerMeal: gramsPerDay ? Math.round(gramsPerDay / mealsPerDay) : undefined,
    treatKcal: Math.round(dailyKcal * 0.1),
    mealsPerDay,
  };
}

/** Meals per day we'd suggest, before anyone overrides it. */
export function suggestedMeals(ageStage: AgeStage): number {
  return ageStage === "puppy" ? 3 : 2;
}

export interface WeightTrend {
  changeKg: number;
  percent: number;
  direction: "up" | "down" | "steady";
  days: number;
}

export function weightTrend(entries: { day: string; kg: number }[]): WeightTrend | undefined {
  if (entries.length < 2) return undefined;
  const first = entries[0]!;
  const last = entries[entries.length - 1]!;
  const changeKg = Math.round((last.kg - first.kg) * 10) / 10;
  const percent = Math.round(((last.kg - first.kg) / first.kg) * 1000) / 10;
  const days = Math.max(
    1,
    Math.round((Date.parse(last.day) - Date.parse(first.day)) / 86400000),
  );
  return {
    changeKg,
    percent,
    direction: Math.abs(percent) < 2 ? "steady" : changeKg > 0 ? "up" : "down",
    days,
  };
}
