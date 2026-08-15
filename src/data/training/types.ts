/**
 * Training content is data, never UI. A lesson is a portable content object:
 * add one to `lessons.ts` (or load it from a CMS later) and every screen —
 * library, today's plan, journey, lesson page — picks it up untouched.
 */
import type { BreedId } from "@/data/breeds";

export type AgeStage = "puppy" | "adolescent" | "adult" | "senior";
export type Level = "beginner" | "building" | "intermediate" | "advanced";

export type CategoryId =
  | "puppy-foundations"
  | "everyday-manners"
  | "walking"
  | "home"
  | "socialisation"
  | "recall-safety"
  | "tricks-games"
  | "mental-stimulation";

export type GoalId =
  | "puppy-basics"
  | "calm-at-home"
  | "loose-leash"
  | "recall"
  | "sit-down-stay"
  | "potty-training"
  | "puppy-biting"
  | "leave-it"
  | "socialisation"
  | "barking"
  | "calmness"
  | "manners"
  | "mental"
  | "tricks";

export interface TrainingGoal {
  id: GoalId;
  label: string;
  hint: string;
}

export interface TrainingCategory {
  id: CategoryId;
  title: string;
  blurb: string;
  /** Skills this category covers — plain words, no jargon. */
  covers: string[];
}

export interface LessonStep {
  title: string;
  body: string;
  /** Key into `stepVisuals` — illustrations where body position matters. */
  visual?: string;
}

export interface LessonStage {
  label: string;
  body: string;
}

export interface Lesson {
  id: string;
  title: string;
  /** One warm sentence: what this gives you and your dog. */
  promise: string;
  category: CategoryId;
  goals: GoalId[];
  level: Level;
  ageStages: AgeStage[];
  /** Minutes. Sessions stay short on purpose. */
  duration: number;
  equipment: string[];
  steps: LessonStep[];
  /** Progression for skills that grow over time. */
  stages?: LessonStage[];
  oneThing?: { title: string; body: string };
  safetyNote?: string;
  /** Breeds this tends to suit especially well — a nudge, never a rule. */
  breedRelevance?: BreedId[];
  /** Reserved for later: a short demonstration clip. */
  video?: { src: string; poster?: string };
  nextLessonId?: string;
}

export type SkillStatus = "not-started" | "practising" | "getting-there" | "learned";
