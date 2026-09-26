import { useEffect, useSyncExternalStore } from "react";

/**
 * True while someone is mid-quiz. The shared footer and mobile tab bar step
 * aside so the questions get a calm screen — no share strips, no site map.
 */
let active = false;
const listeners = new Set<() => void>();

function set(next: boolean) {
  if (active === next) return;
  active = next;
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useQuizChromeActive(): boolean {
  return useSyncExternalStore(subscribe, () => active, () => false);
}

/** Call from the quiz screen; releases the chrome again on unmount or when `on` turns false. */
export function useQuizChrome(on: boolean) {
  useEffect(() => {
    set(on);
    return () => set(false);
  }, [on]);
}
