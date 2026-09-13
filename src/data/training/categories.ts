import { pick } from "@/i18n";
import type { TrainingCategory, TrainingGoal } from "./types";
import { trainingCategories as catsEn, trainingGoals as goalsEn } from "./categories.en";
import { trainingCategories as catsNo, trainingGoals as goalsNo } from "./categories.no";
import { trainingCategories as catsPl, trainingGoals as goalsPl } from "./categories.pl";
import { trainingCategories as catsDk, trainingGoals as goalsDk } from "./categories.dk";
import { trainingCategories as catsSe, trainingGoals as goalsSe } from "./categories.se";
import { trainingCategories as catsFi, trainingGoals as goalsFi } from "./categories.fi";
import { trainingCategories as catsDe, trainingGoals as goalsDe } from "./categories.de";
import { trainingCategories as catsFr, trainingGoals as goalsFr } from "./categories.fr";
import { trainingCategories as catsNl, trainingGoals as goalsNl } from "./categories.nl";

/** Locale-aware training categories — call inside render. */
export function getTrainingCategories(): TrainingCategory[] {
  return pick({ en: catsEn, no: catsNo, pl: catsPl, dk: catsDk, se: catsSe, fi: catsFi, de: catsDe, fr: catsFr, nl: catsNl });
}

/** Locale-aware training goals — call inside render. */
export function getTrainingGoals(): TrainingGoal[] {
  return pick({ en: goalsEn, no: goalsNo, pl: goalsPl, dk: goalsDk, se: goalsSe, fi: goalsFi, de: goalsDe, fr: goalsFr, nl: goalsNl });
}
