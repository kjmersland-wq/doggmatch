import { useSyncExternalStore } from "react";
import { useActiveDog, type DogProfile } from "@/lib/training/store";

export type ActivityLevel = "gentle" | "moderate" | "busy";
export type FoodType = "dry" | "wet" | "mixed" | "raw" | "home";
export type BodyCondition = "thin" | "ideal" | "heavy";

/** Everything extra we know about a dog's day-to-day care. Keyed by dog id. */
export interface CareProfile {
  weightKg?: number;
  neutered?: boolean;
  activity?: ActivityLevel;
  foodType?: FoodType;
  /** kcal per 100g of the food, from the bag. */
  foodEnergy?: number;
  /** Free text: the brand or kind of food currently being fed. */
  foodBrand?: string;
  mealsPerDay?: number;
  bodyCondition?: BodyCondition;
  vetName?: string;
  vetPhone?: string;
  emergencyPhone?: string;
  notes?: string;
}

export interface WeightEntry {
  day: string;
  kg: number;
}

export type RoutineId =
  | "fresh-water"
  | "measured-meals"
  | "walk"
  | "brush"
  | "teeth"
  | "paw-check"
  | "play"
  | "quiet-time";

export interface CareState {
  profiles: Record<string, CareProfile>;
  weights: Record<string, WeightEntry[]>;
  /** dogId -> day -> completed routine ids. */
  routine: Record<string, Record<string, RoutineId[]>>;
  /** dogId -> "topicId" -> ISO day it was last done. */
  lastDone: Record<string, Record<string, string>>;
  saved: string[];
}

const KEY = "doggmatch.care.v1";
const empty: CareState = { profiles: {}, weights: {}, routine: {}, lastDone: {}, saved: [] };

let state: CareState = empty;
let loaded = false;
const listeners = new Set<() => void>();

function read(): CareState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...(JSON.parse(raw) as CareState) };
  } catch {
    return empty;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  state = read();
  loaded = true;
}

function write(next: CareState) {
  state = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* nothing here is critical enough to interrupt anyone's day */
    }
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  ensureLoaded();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useCareState(): CareState {
  return useSyncExternalStore(
    subscribe,
    () => {
      ensureLoaded();
      return state;
    },
    () => empty,
  );
}

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export const careStore = {
  get: () => {
    ensureLoaded();
    return state;
  },
  saveProfile(dogId: string, patch: Partial<CareProfile>) {
    ensureLoaded();
    const current = state.profiles[dogId] ?? {};
    write({ ...state, profiles: { ...state.profiles, [dogId]: { ...current, ...patch } } });
  },
  logWeight(dogId: string, kg: number, day = todayKey()) {
    ensureLoaded();
    const existing = (state.weights[dogId] ?? []).filter((w) => w.day !== day);
    const entries = [...existing, { day, kg }].sort((a, b) => a.day.localeCompare(b.day));
    write({
      ...state,
      weights: { ...state.weights, [dogId]: entries },
      profiles: { ...state.profiles, [dogId]: { ...(state.profiles[dogId] ?? {}), weightKg: kg } },
    });
  },
  removeWeight(dogId: string, day: string) {
    ensureLoaded();
    const entries = (state.weights[dogId] ?? []).filter((w) => w.day !== day);
    write({ ...state, weights: { ...state.weights, [dogId]: entries } });
  },
  toggleRoutine(dogId: string, id: RoutineId, day = todayKey()) {
    ensureLoaded();
    const forDog = state.routine[dogId] ?? {};
    const done = forDog[day] ?? [];
    const next = done.includes(id) ? done.filter((d) => d !== id) : [...done, id];
    write({ ...state, routine: { ...state.routine, [dogId]: { ...forDog, [day]: next } } });
  },
  markDone(dogId: string, topicId: string, day = todayKey()) {
    ensureLoaded();
    const forDog = { ...(state.lastDone[dogId] ?? {}), [topicId]: day };
    write({ ...state, lastDone: { ...state.lastDone, [dogId]: forDog } });
  },
  toggleSaved(foodId: string) {
    ensureLoaded();
    const saved = state.saved.includes(foodId)
      ? state.saved.filter((f) => f !== foodId)
      : [...state.saved, foodId];
    write({ ...state, saved });
  },
  reset() {
    write({ ...empty });
  },
};

export function useCareProfile(dogId?: string): CareProfile {
  const s = useCareState();
  return (dogId && s.profiles[dogId]) || {};
}

export function useWeights(dogId?: string): WeightEntry[] {
  const s = useCareState();
  return (dogId && s.weights[dogId]) || [];
}

export function useTodayRoutine(dogId?: string): RoutineId[] {
  const s = useCareState();
  return (dogId && s.routine[dogId]?.[todayKey()]) || [];
}

/** The dog everything on My Dog is about — shared with Train Your Dog. */
export function useMyDog(): DogProfile | undefined {
  return useActiveDog();
}
