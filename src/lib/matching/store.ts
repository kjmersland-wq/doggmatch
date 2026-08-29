import { useEffect, useState } from "react";
import type { UserProfile } from "./types";

/**
 * The answers from the last Find My Dog run, kept on this device only.
 * Lets Compare and the breed pages speak to the life the reader described,
 * without asking them everything twice. Nothing leaves the browser.
 */
const KEY = "doggmatch.match-profile";

export function saveMatchProfile(profile: UserProfile) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(profile));
    window.dispatchEvent(new Event("doggmatch:match-profile"));
  } catch {
    /* private mode, quota — nothing to do */
  }
}

export function readMatchProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    const entries = Object.entries(parsed as Record<string, unknown>).filter(
      ([, v]) => typeof v === "string",
    ) as [string, string][];
    return entries.length > 0 ? Object.fromEntries(entries) : null;
  } catch {
    return null;
  }
}

export function clearMatchProfile() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
    window.dispatchEvent(new Event("doggmatch:match-profile"));
  } catch {
    /* ignore */
  }
}

/** The saved answers, read after hydration so server and client agree. */
export function useMatchProfile(): UserProfile | null {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const sync = () => setProfile(readMatchProfile());
    sync();
    window.addEventListener("doggmatch:match-profile", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("doggmatch:match-profile", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return profile;
}
