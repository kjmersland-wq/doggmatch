/** A small in-memory throttle: kind to people, unkind to scripts. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_IN_WINDOW = 5;
const MIN_GAP_MS = 20 * 1000;

export function checkRate(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_IN_WINDOW) {
    hits.set(key, recent);
    return false;
  }
  const last = recent[recent.length - 1];
  if (last !== undefined && now - last < MIN_GAP_MS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return true;
}
