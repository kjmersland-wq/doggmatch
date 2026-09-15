import { useSyncExternalStore } from "react";

/**
 * Personal display and contact preferences, kept in this browser only —
 * consistent with how the rest of DoggMatch stores personal data (see
 * `src/lib/care/store.ts`). No account or server round-trip needed.
 */

export type UnitSystem = "metric" | "imperial";

export interface AccountPreferences {
  units: UnitSystem;
  /** In-app care reminders (e.g. "log today's weight"). Not yet wired to any notification. */
  reminders: boolean;
  /** Occasional email from DoggMatch. Not yet wired to any sender. */
  emailUpdates: boolean;
}

const KEY = "doggmatch.preferences.v1";
const defaults: AccountPreferences = { units: "metric", reminders: false, emailUpdates: false };

let state: AccountPreferences = defaults;
let loaded = false;
const listeners = new Set<() => void>();

function read(): AccountPreferences {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaults;
    return { ...defaults, ...(JSON.parse(raw) as Partial<AccountPreferences>) };
  } catch {
    return defaults;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  state = read();
  loaded = true;
}

function write(next: AccountPreferences) {
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

export function usePreferences(): AccountPreferences {
  return useSyncExternalStore(
    subscribe,
    () => {
      ensureLoaded();
      return state;
    },
    () => defaults,
  );
}

export const preferencesStore = {
  setUnits(units: UnitSystem) {
    ensureLoaded();
    write({ ...state, units });
  },
  setReminders(on: boolean) {
    ensureLoaded();
    write({ ...state, reminders: on });
  },
  setEmailUpdates(on: boolean) {
    ensureLoaded();
    write({ ...state, emailUpdates: on });
  },
};
