import { useSyncExternalStore } from "react";
import type { PlaceCategory } from "./types";

export type SavedPlace = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  category: PlaceCategory;
  savedAt: string;
};

const KEY = "doggmatch.places.saved.v1";
const EMPTY: SavedPlace[] = [];

let state: SavedPlace[] = [];
let loaded = false;
const listeners = new Set<() => void>();

function read(): SavedPlace[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedPlace[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  state = read();
  loaded = true;
}

function write(next: SavedPlace[]) {
  state = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* saving a place should never break the page */
    }
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  ensureLoaded();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useSavedPlaces(): SavedPlace[] {
  return useSyncExternalStore(
    subscribe,
    () => {
      ensureLoaded();
      return state;
    },
    () => EMPTY,
  );
}

export const savedPlaces = {
  toggle(place: Omit<SavedPlace, "savedAt">) {
    ensureLoaded();
    const exists = state.some((p) => p.id === place.id);
    write(
      exists
        ? state.filter((p) => p.id !== place.id)
        : [{ ...place, savedAt: new Date().toISOString() }, ...state].slice(0, 60),
    );
  },
  remove(id: string) {
    ensureLoaded();
    write(state.filter((p) => p.id !== id));
  },
};

/** A link any phone or car navigation system can open. */
export function mapsLink(place: { name: string; address: string; lat: number; lng: number }): string {
  return `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
}


/** Plain coordinates — what most car systems ask you to type in. */
export function coordsText(place: { lat: number; lng: number }): string {
  return `${place.lat.toFixed(6)}, ${place.lng.toFixed(6)}`;
}
