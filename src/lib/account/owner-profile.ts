import { useSyncExternalStore } from "react";

/**
 * Owner profile fields, kept locally as a fallback for anyone not signed in.
 * Signed-in people get this from Supabase `user_metadata` instead (see
 * `useOwnerProfile` in `src/components/dogmatch/account/owner-profile.tsx`),
 * which is the source of truth whenever a session exists.
 */

export type OwnerExperience = "" | "first-time" | "experienced" | "professional";

export interface OwnerProfile {
  fullName: string;
  phone: string;
  postalCode: string;
  city: string;
  country: string;
  experience: OwnerExperience;
}

export const OWNER_PROFILE_DEFAULTS: OwnerProfile = {
  fullName: "",
  phone: "",
  postalCode: "",
  city: "",
  country: "",
  experience: "",
};

const KEY = "doggmatch.owner-profile.v1";

let state: OwnerProfile = OWNER_PROFILE_DEFAULTS;
let loaded = false;
const listeners = new Set<() => void>();

function read(): OwnerProfile {
  if (typeof window === "undefined") return OWNER_PROFILE_DEFAULTS;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return OWNER_PROFILE_DEFAULTS;
    return { ...OWNER_PROFILE_DEFAULTS, ...(JSON.parse(raw) as Partial<OwnerProfile>) };
  } catch {
    return OWNER_PROFILE_DEFAULTS;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  state = read();
  loaded = true;
}

function write(next: OwnerProfile) {
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

/** The locally-saved profile — used only as a fallback when signed out. */
export function useLocalOwnerProfile(): OwnerProfile {
  return useSyncExternalStore(
    subscribe,
    () => {
      ensureLoaded();
      return state;
    },
    () => OWNER_PROFILE_DEFAULTS,
  );
}

export const localOwnerProfileStore = {
  save(next: OwnerProfile) {
    write(next);
  },
};
