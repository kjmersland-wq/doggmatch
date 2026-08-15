/**
 * Care content is data, never UI. Every topic is a portable object with its
 * own steps, warning signs and sources, so a screen can render any topic
 * without knowing what it is about.
 */
import type { BreedId } from "@/data/breeds";

export type AgeStage = "puppy" | "adolescent" | "adult" | "senior";

export type CareCategoryId =
  | "health"
  | "nutrition"
  | "dental"
  | "coat"
  | "paws"
  | "weight"
  | "activity"
  | "wellbeing"
  | "behaviour"
  | "dog-life";

export interface Source {
  label: string;
  org: string;
}

export interface CareStep {
  title: string;
  body: string;
  /** Key into `careVisuals`. */
  visual?: string;
}

export interface CareTopic {
  id: string;
  title: string;
  /** One warm sentence that says why this matters. */
  promise: string;
  category: CareCategoryId;
  intro: string[];
  /** The illustrated how-to, when the topic has one. */
  steps?: CareStep[];
  /** A gentle multi-day introduction, for things dogs need to get used to. */
  routine?: { day: string; body: string }[];
  /** Simple lists rendered as cards — never a wall of text. */
  sections?: { title: string; body: string; points?: string[] }[];
  /** Things worth noticing. Never a diagnosis. */
  watchFor?: string[];
  whenToAskVet?: string;
  ageNotes?: Partial<Record<AgeStage, string>>;
  breedNotes?: { breeds: BreedId[]; note: string }[];
  sources?: Source[];
}

export type FoodSafety = "safe" | "care" | "avoid";

export interface FoodItem {
  id: string;
  name: string;
  safety: FoodSafety;
  body: string;
  serving?: string;
  warning?: string;
  source?: Source;
}
