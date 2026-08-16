import type { Breed, BreedId } from "@/data/breeds";

export type AnswerValue = string;
export type UserProfile = Record<string, AnswerValue>;

export type DimensionKey =
  | "lifestyle"
  | "home"
  | "activity"
  | "temperament"
  | "trainability"
  | "companionship"
  | "allergy"
  | "wellbeing"
  | "maintenance";

export interface MatchResult {
  breed: Breed;
  breedId: BreedId;
  /** 0–100 final compatibility after constraints. */
  score: number;
  dimensions: Record<DimensionKey, number>;
  /** Hard-constraint violations, phrased for the user. */
  warnings: string[];
  status: "recommended" | "caution" | "not-recommended";
}

export interface QuizOption {
  value: string;
  label: string;
  hint?: string;
}

export interface QuizQuestion {
  id: string;
  eyebrow: string;
  title: string;
  help?: string;
  options: QuizOption[];
  optional?: boolean;
}
