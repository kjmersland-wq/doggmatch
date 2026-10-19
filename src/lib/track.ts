/**
 * Sends one named event to the cookie-free counter (public/tracker.js, reported to
 * KM TECH LABS). Values stay plain and anonymous: a breed id, a placement, never an
 * answer set or anything about the person. Safe to call anywhere; it does nothing
 * when the script is missing, blocked or not loaded yet.
 */
declare global {
  interface Window {
    __doggmatchTrack?: (event?: string, data?: Record<string, string | number | boolean>) => void;
  }
}

export function track(event: string, data?: Record<string, string | number | boolean>): void {
  if (typeof window === "undefined") return;
  try {
    window.__doggmatchTrack?.(event, data);
  } catch {
    /* tracking must never get in the way of the page */
  }
}
