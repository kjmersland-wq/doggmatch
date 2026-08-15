import { useSyncExternalStore } from "react";
import type { BreedId } from "@/data/breeds";
import type { UserProfile } from "@/lib/matching/types";

/**
 * The "before you get your dog" journey, kept on the device.
 * It shares one profile with Find My Dog so nobody is ever asked the same
 * question twice, and it hands everything over to My Dog at the end.
 */
export interface GetDogState {
  /** Answers to the readiness questions, by question id. */
  readiness: Record<string, string>;
  /** Shared matching answers — written by readiness and by Find My Dog. */
  profile: UserProfile;
  /** The breed the person is currently thinking about. */
  interestedIn?: BreedId;
  /** Where they're thinking of getting their dog from. */
  source?: "breeder" | "rescue" | "undecided";
  /** Puppy or an older dog. */
  age?: "puppy" | "adult" | "undecided";
  /** Ticked items, by checklist id -> item ids. */
  checked: Record<string, string[]>;
  /** The trip being planned in Travel Abroad. */
  trip: {
    from?: string;
    to?: string;
    date?: string;
    transport?: string;
    transit?: string[];
  };
}

const KEY = "doggmatch.getdog.v1";
const empty: GetDogState = { readiness: {}, profile: {}, checked: {}, trip: {} };

let state: GetDogState = empty;
let loaded = false;
const listeners = new Set<() => void>();

function read(): GetDogState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...(JSON.parse(raw) as GetDogState) };
  } catch {
    return empty;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  state = read();
  loaded = true;
}

function write(next: GetDogState) {
  state = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* never worth interrupting someone's day over */
    }
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  ensureLoaded();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useGetDog(): GetDogState {
  return useSyncExternalStore(
    subscribe,
    () => {
      ensureLoaded();
      return state;
    },
    () => empty,
  );
}

export const getDogStore = {
  get: () => {
    ensureLoaded();
    return state;
  },
  saveReadiness(answers: Record<string, string>, profilePatch: UserProfile) {
    ensureLoaded();
    write({
      ...state,
      readiness: { ...state.readiness, ...answers },
      profile: { ...state.profile, ...profilePatch },
    });
  },
  saveProfile(patch: UserProfile) {
    ensureLoaded();
    write({ ...state, profile: { ...state.profile, ...patch } });
  },
  setInterest(breedId: BreedId) {
    ensureLoaded();
    write({ ...state, interestedIn: breedId });
  },
  setSource(source: NonNullable<GetDogState["source"]>) {
    ensureLoaded();
    write({ ...state, source });
  },
  setAge(age: NonNullable<GetDogState["age"]>) {
    ensureLoaded();
    write({ ...state, age });
  },
  toggle(listId: string, itemId: string) {
    ensureLoaded();
    const current = state.checked[listId] ?? [];
    const next = current.includes(itemId)
      ? current.filter((i) => i !== itemId)
      : [...current, itemId];
    write({ ...state, checked: { ...state.checked, [listId]: next } });
  },
  setTrip(patch: { [K in keyof GetDogState["trip"]]?: GetDogState["trip"][K] | undefined }) {
    ensureLoaded();
    write({ ...state, trip: { ...state.trip, ...patch } });
  },
  reset() {
    write({ ...empty });
  },
};