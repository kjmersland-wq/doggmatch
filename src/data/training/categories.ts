import { pick } from "@/i18n";
import type { TrainingCategory, TrainingGoal } from "./types";
import { trainingCategories as catsEn, trainingGoals as goalsEn } from "./categories.en";
import { trainingCategories as catsNo, trainingGoals as goalsNo } from "./categories.no";
import { trainingCategories as catsPl, trainingGoals as goalsPl } from "./categories.pl";

/** Locale-aware training categories — call inside render. */
export function getTrainingCategories(): TrainingCategory[] {
  return pick({ en: catsEn, no: catsNo, pl: catsPl });
}

/** Locale-aware training goals — call inside render. */
export function getTrainingGoals(): TrainingGoal[] {
  return pick({ en: goalsEn, no: goalsNo, pl: goalsPl });
}
