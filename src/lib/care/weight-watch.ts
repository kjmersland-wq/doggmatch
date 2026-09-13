import type { WeightEntry } from "@/lib/care/store";

/**
 * Deterministic, transparent weight watching.
 *
 * Everything here is plain arithmetic on the entries someone has logged:
 * no smoothing, no hidden model. We compare the newest weight with the
 * closest entry roughly 30 and 90 days back, and flag changes that a vet
 * would want to hear about.
 */

export type WeightFlagLevel = "steady" | "watch" | "vet";

export interface WeightChange {
  /** Days between the two entries compared. */
  days: number;
  fromKg: number;
  toKg: number;
  changeKg: number;
  percent: number;
  direction: "up" | "down" | "steady";
}

export interface WeightWatch {
  latest?: WeightEntry;
  /** Change over roughly the last month, when there is an entry to compare with. */
  month?: WeightChange;
  /** Change over roughly the last three months. */
  quarter?: WeightChange;
  /** Change across everything logged. */
  overall?: WeightChange;
  level: WeightFlagLevel;
  /** The change that drove the level, if any. */
  driver?: WeightChange;
}

/** Thresholds we apply, stated openly so they can be checked. */
export const WEIGHT_THRESHOLDS = { watchPercent: 5, vetPercent: 10 } as const;

function daysBetween(a: string, b: string): number {
  return Math.round(Math.abs(Date.parse(b) - Date.parse(a)) / 86400000);
}

function change(from: WeightEntry, to: WeightEntry): WeightChange {
  const changeKg = Math.round((to.kg - from.kg) * 10) / 10;
  const percent = Math.round(((to.kg - from.kg) / from.kg) * 1000) / 10;
  return {
    days: Math.max(1, daysBetween(from.day, to.day)),
    fromKg: from.kg,
    toKg: to.kg,
    changeKg,
    percent,
    direction: Math.abs(percent) < 2 ? "steady" : changeKg > 0 ? "up" : "down",
  };
}

/** The logged entry closest to `days` before the newest one. */
function closestBefore(entries: WeightEntry[], days: number): WeightEntry | undefined {
  const last = entries[entries.length - 1];
  if (!last) return undefined;
  const target = Date.parse(last.day) - days * 86400000;
  let best: WeightEntry | undefined;
  let bestGap = Infinity;
  for (const e of entries.slice(0, -1)) {
    const gap = Math.abs(Date.parse(e.day) - target);
    if (gap < bestGap) {
      bestGap = gap;
      best = e;
    }
  }
  // Only useful if it is genuinely older, within half the window of the target.
  if (!best) return undefined;
  const age = daysBetween(best.day, last.day);
  return age >= days / 2 ? best : undefined;
}

export function watchWeight(entries: WeightEntry[]): WeightWatch {
  const sorted = [...entries].sort((a, b) => a.day.localeCompare(b.day));
  const latest = sorted[sorted.length - 1];
  if (!latest || sorted.length < 2) return { level: "steady", ...(latest ? { latest } : {}) };

  const first = sorted[0]!;
  const overall = change(first, latest);
  const monthFrom = closestBefore(sorted, 30);
  const quarterFrom = closestBefore(sorted, 90);
  const month = monthFrom ? change(monthFrom, latest) : undefined;
  const quarter = quarterFrom ? change(quarterFrom, latest) : undefined;

  const candidates = [month, quarter, overall].filter(Boolean) as WeightChange[];
  let driver: WeightChange | undefined;
  let level: WeightFlagLevel = "steady";

  for (const ch of candidates) {
    const abs = Math.abs(ch.percent);
    if (abs >= WEIGHT_THRESHOLDS.vetPercent) {
      if (level !== "vet" || (driver && abs > Math.abs(driver.percent))) {
        level = "vet";
        driver = ch;
      }
    } else if (abs >= WEIGHT_THRESHOLDS.watchPercent && level === "steady") {
      level = "watch";
      driver = ch;
    }
  }

  return {
    latest,
    level,
    overall,
    ...(month ? { month } : {}),
    ...(quarter ? { quarter } : {}),
    ...(driver ? { driver } : {}),
  };
}
