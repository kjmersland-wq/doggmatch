import { useCallback, useSyncExternalStore } from "react";
import type { AgeStage, GoalId, Level, SkillStatus } from "@/data/training/types";
import type { BreedId } from "@/data/breeds";
import type { BreedType, ObservedTraits } from "@/lib/dogs/types";

export interface DogProfile {
  id: string;
  name: string;
  /** "purebred" (default when absent) or "mixed". */
  breedType?: BreedType;
  breedId?: BreedId;
  /** Known breeds in a mix. Empty or absent when the mix is unknown. */
  mixBreedIds?: BreedId[];
  /** Owner explicitly told us the mix is unknown. */
  mixUnknown?: boolean;
  /** What the owner has observed about this individual dog, 1–5. */
  observed?: ObservedTraits;
  breedOther?: string;
  ageStage: AgeStage;
  /** Rough adult size. Shapes how long a session should realistically be. */
  sizeBand?: "small" | "medium" | "large";
  /** Minutes the owner can realistically give to training on a normal day. */
  minutesPerDay?: number;
  sex?: "female" | "male";
  experience: "first-dog" | "some" | "lots";
  level: Level;
  goals: GoalId[];
}

export interface SessionRecord {
  lessonId: string;
  /** ISO date, day precision — everything here is local and private. */
  day: string;
  feeling: "great" | "good" | "more-practice";
}

export interface TrainingState {
  dogs: DogProfile[];
  activeDogId?: string;
  /** lessonId -> where you've got to. Keyed per dog. */
  progress: Record<string, Record<string, SkillStatus>>;
  sessions: SessionRecord[];
  notes: Record<string, string>;
}

const KEY = "doggmatch.training.v1";
const empty: TrainingState = { dogs: [], progress: {}, sessions: [], notes: {} };

let state: TrainingState = empty;
let loaded = false;
const listeners = new Set<() => void>();

function read(): TrainingState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...(JSON.parse(raw) as TrainingState) };
  } catch {
    return empty;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  state = read();
  loaded = true;
}

function emit() {
  listeners.forEach((l) => l());
}

function write(next: TrainingState) {
  state = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* storage full or blocked — the session still works in memory */
    }
  }
  emit();
}

function subscribe(listener: () => void) {
  ensureLoaded();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Server render and first paint use the empty state, so hydration matches. */
export function useTrainingState(): TrainingState {
  return useSyncExternalStore(
    subscribe,
    () => {
      ensureLoaded();
      return state;
    },
    () => empty,
  );
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export const trainingStore = {
  get: () => {
    ensureLoaded();
    return state;
  },
  saveDog(dog: Omit<DogProfile, "id"> & { id?: string }) {
    ensureLoaded();
    const id = dog.id ?? `dog-${Date.now()}`;
    const next: DogProfile = { ...dog, id };
    const dogs = state.dogs.some((d) => d.id === id)
      ? state.dogs.map((d) => (d.id === id ? next : d))
      : [...state.dogs, next];
    write({ ...state, dogs, activeDogId: id });
    return id;
  },
  setActiveDog(id: string) {
    ensureLoaded();
    write({ ...state, activeDogId: id });
  },
  setStatus(dogId: string, lessonId: string, status: SkillStatus) {
    ensureLoaded();
    const forDog = { ...(state.progress[dogId] ?? {}), [lessonId]: status };
    write({ ...state, progress: { ...state.progress, [dogId]: forDog } });
  },
  logSession(record: SessionRecord) {
    ensureLoaded();
    write({ ...state, sessions: [...state.sessions, record] });
  },
  /**
   * Mark a session done: logs it and nudges the skill one honest step
   * forward, never past "getting there" on its own — only you decide when
   * something is truly learned.
   */
  markDone(dogId: string, lessonId: string, feeling: SessionRecord["feeling"] = "good") {
    ensureLoaded();
    const current = state.progress[dogId]?.[lessonId] ?? "not-started";
    const next: SkillStatus =
      current === "not-started" ? "practising" : current === "practising" ? "getting-there" : current;
    const forDog = { ...(state.progress[dogId] ?? {}), [lessonId]: next };
    write({
      ...state,
      progress: { ...state.progress, [dogId]: forDog },
      sessions: [...state.sessions, { lessonId, day: today(), feeling }],
    });
  },
  saveNote(lessonId: string, note: string) {
    ensureLoaded();
    write({ ...state, notes: { ...state.notes, [lessonId]: note } });
  },
  reset() {
    write({ ...empty });
  },
};

/** Convenience: the dog we're currently training with, if any. */
export function useActiveDog(): DogProfile | undefined {
  const s = useTrainingState();
  return s.dogs.find((d) => d.id === s.activeDogId) ?? s.dogs[0];
}

export function useProgress(dogId?: string): Record<string, SkillStatus> {
  const s = useTrainingState();
  return (dogId && s.progress[dogId]) || {};
}

export function useSetStatus(dogId?: string) {
  return useCallback(
    (lessonId: string, status: SkillStatus) => {
      if (dogId) trainingStore.setStatus(dogId, lessonId, status);
    },
    [dogId],
  );
}

/** Consecutive days with at least one logged session, counting back from today. */
export function streakDays(sessions: SessionRecord[]): number {
  const days = new Set(sessions.map((s) => s.day));
  let count = 0;
  const cursor = new Date();
  for (;;) {
    const key = cursor.toISOString().slice(0, 10);
    if (!days.has(key)) break;
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}
