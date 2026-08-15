import { useSyncExternalStore } from "react";

/**
 * Everything the owner writes down themselves: the dog's paperwork, the people
 * who help look after them, the things worth remembering, and notes for the vet.
 * All of it stays on this device — nothing here is sent anywhere.
 */

export interface DogDetails {
  dob?: string;
  colour?: string;
  microchip?: string;
  insurer?: string;
  policy?: string;
  /** A photo the owner picked, stored as a data URL. */
  photo?: string;
}

/** groupId -> field key -> what the owner typed. */
export type ContactBook = Record<string, Record<string, string>>;

export type InfoKey =
  | "allergies"
  | "medication"
  | "health"
  | "afraid"
  | "loves"
  | "instructions"
  | "emergency";

export type ImportantInfo = Partial<Record<InfoKey, string>>;

export interface VetVisit {
  id: string;
  date: string;
  reason?: string;
  weightKg?: number;
  questions?: string;
  notes?: string;
  followUp?: string;
  next?: string;
}

export interface WeekOverride {
  /** Suggestion ids the owner removed. */
  removed: string[];
  /** Things the owner added themselves, by weekday index (0 = Monday). */
  added: { id: string; day: number; label: string }[];
}

export interface RecordsState {
  details: Record<string, DogDetails>;
  contacts: Record<string, ContactBook>;
  info: Record<string, ImportantInfo>;
  visits: Record<string, VetVisit[]>;
  week: Record<string, WeekOverride>;
}

const KEY = "doggmatch.records.v1";
const empty: RecordsState = { details: {}, contacts: {}, info: {}, visits: {}, week: {} };

let state: RecordsState = empty;
let loaded = false;
const listeners = new Set<() => void>();

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(KEY);
    state = raw ? { ...empty, ...(JSON.parse(raw) as RecordsState) } : empty;
  } catch {
    state = empty;
  }
  loaded = true;
}

function write(next: RecordsState) {
  state = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* not worth interrupting anyone for */
    }
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  ensureLoaded();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useRecords(): RecordsState {
  return useSyncExternalStore(
    subscribe,
    () => {
      ensureLoaded();
      return state;
    },
    () => empty,
  );
}

export const recordsStore = {
  get: () => {
    ensureLoaded();
    return state;
  },
  saveDetails(dogId: string, patch: Partial<DogDetails>) {
    ensureLoaded();
    write({ ...state, details: { ...state.details, [dogId]: { ...(state.details[dogId] ?? {}), ...patch } } });
  },
  saveContact(dogId: string, groupId: string, field: string, value: string) {
    ensureLoaded();
    const book = state.contacts[dogId] ?? {};
    const group = { ...(book[groupId] ?? {}), [field]: value };
    write({ ...state, contacts: { ...state.contacts, [dogId]: { ...book, [groupId]: group } } });
  },
  saveInfo(dogId: string, key: InfoKey, value: string) {
    ensureLoaded();
    write({ ...state, info: { ...state.info, [dogId]: { ...(state.info[dogId] ?? {}), [key]: value } } });
  },
  saveVisit(dogId: string, visit: Omit<VetVisit, "id"> & { id?: string }) {
    ensureLoaded();
    const id = visit.id ?? `visit-${Date.now()}`;
    const list = state.visits[dogId] ?? [];
    const next = list.some((v) => v.id === id)
      ? list.map((v) => (v.id === id ? { ...visit, id } : v))
      : [...list, { ...visit, id }];
    next.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
    write({ ...state, visits: { ...state.visits, [dogId]: next } });
    return id;
  },
  removeVisit(dogId: string, id: string) {
    ensureLoaded();
    write({
      ...state,
      visits: { ...state.visits, [dogId]: (state.visits[dogId] ?? []).filter((v) => v.id !== id) },
    });
  },
  removeWeekItem(dogId: string, itemId: string) {
    ensureLoaded();
    const w = state.week[dogId] ?? { removed: [], added: [] };
    if (w.added.some((a) => a.id === itemId)) {
      write({ ...state, week: { ...state.week, [dogId]: { ...w, added: w.added.filter((a) => a.id !== itemId) } } });
      return;
    }
    if (w.removed.includes(itemId)) return;
    write({ ...state, week: { ...state.week, [dogId]: { ...w, removed: [...w.removed, itemId] } } });
  },
  restoreWeek(dogId: string) {
    ensureLoaded();
    write({ ...state, week: { ...state.week, [dogId]: { removed: [], added: [] } } });
  },
  addWeekItem(dogId: string, day: number, label: string) {
    ensureLoaded();
    const w = state.week[dogId] ?? { removed: [], added: [] };
    const item = { id: `own-${Date.now()}`, day, label };
    write({ ...state, week: { ...state.week, [dogId]: { ...w, added: [...w.added, item] } } });
  },
};

export function useDogDetails(dogId?: string): DogDetails {
  return (dogId && useRecords().details[dogId]) || {};
}

export function useContacts(dogId?: string): ContactBook {
  return (dogId && useRecords().contacts[dogId]) || {};
}

export function useImportantInfo(dogId?: string): ImportantInfo {
  return (dogId && useRecords().info[dogId]) || {};
}

export function useVisits(dogId?: string): VetVisit[] {
  return (dogId && useRecords().visits[dogId]) || [];
}

export function useWeekOverride(dogId?: string): WeekOverride {
  return (dogId && useRecords().week[dogId]) || { removed: [], added: [] };
}

/* ------------------------------------------------------------ the forms */

export interface ContactGroup {
  id: string;
  title: string;
  fields: { key: string; label: string }[];
}

export const contactGroups: ContactGroup[] = [
  {
    id: "owner",
    title: "Owner",
    fields: [
      { key: "name", label: "Name" },
      { key: "phone", label: "Phone" },
      { key: "email", label: "Email" },
      { key: "address", label: "Address" },
    ],
  },
  {
    id: "vet",
    title: "Our vet",
    fields: [
      { key: "clinic", label: "Clinic" },
      { key: "vet", label: "Veterinarian" },
      { key: "phone", label: "Phone" },
      { key: "email", label: "Email" },
      { key: "address", label: "Address" },
    ],
  },
  {
    id: "emergency-vet",
    title: "Out-of-hours vet",
    fields: [
      { key: "clinic", label: "Clinic" },
      { key: "phone", label: "Phone" },
      { key: "address", label: "Address" },
      { key: "hours", label: "Open when" },
    ],
  },
  {
    id: "trainer",
    title: "Trainer",
    fields: [
      { key: "name", label: "Name" },
      { key: "phone", label: "Phone" },
      { key: "email", label: "Email" },
    ],
  },
  {
    id: "groomer",
    title: "Groomer",
    fields: [
      { key: "name", label: "Name" },
      { key: "phone", label: "Phone" },
      { key: "email", label: "Email" },
    ],
  },
  {
    id: "sitter",
    title: "Sitter or walker",
    fields: [
      { key: "name", label: "Name" },
      { key: "phone", label: "Phone" },
      { key: "email", label: "Email" },
    ],
  },
  {
    id: "other",
    title: "Someone else who helps",
    fields: [
      { key: "name", label: "Name" },
      { key: "relationship", label: "How they know your dog" },
      { key: "phone", label: "Phone" },
    ],
  },
];

export const infoFields: { key: InfoKey; label: string; hint: string }[] = [
  { key: "allergies", label: "Allergies and things that don't agree with them", hint: "Foods, plants, anything you've noticed" },
  { key: "medication", label: "Medication", hint: "What, how much, and when" },
  { key: "health", label: "Health worth knowing about", hint: "Past injuries, ongoing things, what your vet has said" },
  { key: "afraid", label: "Things they find frightening", hint: "Fireworks, the hoover, men in hats — whatever it is" },
  { key: "loves", label: "Things they love", hint: "The squeaky duck, the long grass field, cheese" },
  { key: "instructions", label: "How we do things", hint: "Little routines someone else would need to know" },
  { key: "emergency", label: "If something goes wrong", hint: "Who to ring first, and anything a vet should be told" },
];