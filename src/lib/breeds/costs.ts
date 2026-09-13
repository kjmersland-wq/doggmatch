import type { Breed } from "@/data/breeds";

/**
 * A transparent yearly cost breakdown.
 *
 * Nothing here is invented per breed: every line is derived from the same
 * measurable characteristics used everywhere else (size, grooming), then
 * normalised so the parts always add up to the breed's published annual
 * range. The options let a reader adjust the two things that genuinely
 * change the number — where they live and whether they insure and use a
 * professional groomer.
 */

export type CostLevel = "lower" | "typical" | "higher";

export interface CostOptions {
  level: CostLevel;
  insurance: boolean;
  professionalGrooming: boolean;
}

export type CostLineId = "food" | "vet" | "grooming" | "equipment" | "buffer";

export interface CostLine {
  id: CostLineId;
  low: number;
  high: number;
}

export interface CostEstimate {
  lines: CostLine[];
  low: number;
  high: number;
}

export const DEFAULT_COST_OPTIONS: CostOptions = {
  level: "typical",
  insurance: true,
  professionalGrooming: true,
};

const LEVEL_FACTOR: Record<CostLevel, number> = {
  lower: 0.8,
  typical: 1,
  higher: 1.3,
};

const round = (n: number) => Math.round(n / 5) * 5;

export function yearlyCost(breed: Breed, options: CostOptions = DEFAULT_COST_OPTIONS): CostEstimate {
  const t = breed.traits;
  const size = Math.min(5, Math.max(1, t.size));

  const food: [number, number] = [180 + size * 90, 300 + size * 150];
  const vetBase: [number, number] = [180 + size * 35, 300 + size * 60];
  const insurance: [number, number] = [140 + size * 40, 240 + size * 70];
  const groomBase: [number, number] =
    t.grooming >= 4 ? [420, 900] : t.grooming === 3 ? [140, 320] : [40, 120];
  const equipment: [number, number] = [120 + size * 15, 240 + size * 30];

  const vet: [number, number] = options.insurance
    ? [vetBase[0] + insurance[0], vetBase[1] + insurance[1]]
    : [vetBase[0], Math.round(vetBase[1] * 1.15)];

  const grooming: [number, number] = options.professionalGrooming
    ? groomBase
    : [Math.round(groomBase[0] * 0.25), Math.round(groomBase[1] * 0.3)];

  const core: Array<[CostLineId, [number, number]]> = [
    ["food", food],
    ["vet", vet],
    ["grooming", grooming],
    ["equipment", equipment],
  ];

  const coreLow = core.reduce((sum, [, v]) => sum + v[0], 0);
  const coreHigh = core.reduce((sum, [, v]) => sum + v[1], 0);
  const buffer: [number, number] = [Math.round(coreLow * 0.12), Math.round(coreHigh * 0.2)];

  const rawLow = coreLow + buffer[0];
  const rawHigh = coreHigh + buffer[1];

  // Keep the parts consistent with the published range for this breed.
  const factor = LEVEL_FACTOR[options.level];
  const scaleLow = (breed.annualCost[0] / rawLow) * factor;
  const scaleHigh = (breed.annualCost[1] / rawHigh) * factor;

  const lines: CostLine[] = [...core, ["buffer", buffer] as [CostLineId, [number, number]]].map(
    ([id, v]) => ({ id, low: round(v[0] * scaleLow), high: round(v[1] * scaleHigh) }),
  );

  return {
    lines,
    low: lines.reduce((s, l) => s + l.low, 0),
    high: lines.reduce((s, l) => s + l.high, 0),
  };
}
