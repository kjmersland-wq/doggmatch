/**
 * Cookie / storage consent for DoggMatch (GDPR, ePrivacy).
 *
 * Necessary storage — language, theme, your dog's own notes, sign-in and
 * Stripe checkout — always works and is never gated here. Only analytics
 * and marketing wait for a clear yes, and the choice can be changed at any
 * time from the footer.
 */
import { useCallback, useEffect, useState } from "react";

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = ConsentCategories & {
  version: number;
  decidedAt: string;
};

export const CONSENT_VERSION = 1;
const KEY = "doggmatch.consent";
const EVENT = "doggmatch:consent";

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeConsent(choice: { analytics: boolean; marketing: boolean }) {
  const record: ConsentRecord = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(record));
  } catch {
    /* private mode — the choice simply won't stick */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent<ConsentRecord>(EVENT, { detail: record }));
  }
  return record;
}

export function clearConsent() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nothing to do */
  }
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(EVENT));
}

/** Reactive view of the visitor's choice. `ready` is false until hydration. */
export function useConsent() {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
    const onChange = () => setConsent(readConsent());
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const accept = useCallback(
    (choice: { analytics: boolean; marketing: boolean }) => setConsent(writeConsent(choice)),
    [],
  );
  const reopen = useCallback(() => {
    clearConsent();
    setConsent(null);
  }, []);

  return { consent, ready, accept, reopen };
}

/**
 * Loads a third-party script only once the matching consent is in place.
 * Nothing in DoggMatch loads analytics today; this is the single door any
 * future measurement or advertising tag has to come through.
 */
export function loadWhenConsented(
  category: "analytics" | "marketing",
  load: () => void,
) {
  if (typeof window === "undefined") return () => {};
  let loaded = false;
  const run = () => {
    const c = readConsent();
    if (!loaded && c && c[category]) {
      loaded = true;
      load();
    }
  };
  run();
  window.addEventListener(EVENT, run);
  return () => window.removeEventListener(EVENT, run);
}
