import { countriesByCode, type Country, type Rule, type RuleSet } from "@/data/travel/countries";

/**
 * Route -> requirements. FROM, TO and the date are the whole foundation.
 * If we don't hold verified rules for a leg, we say so and point at the
 * official authority. We never invent a rule to fill a gap.
 */

export interface Leg {
  from: Country;
  to: Country;
  /** True when we hold verified rules for this direction. */
  known: boolean;
  ruleSet?: RuleSet;
  required: Rule[];
  recommended: Rule[];
  goodToHave: Rule[];
  /** Where the rules came from, and when we last checked them. */
  sources: Country["sources"];
  withinEu: boolean;
}

const alwaysRecommended: Rule[] = [
  {
    id: "vet-check",
    level: "recommended",
    title: "A check-up before you go",
    detail: "A quick appointment before a long trip is worth it, especially for a puppy, an older dog, or a dog on medication. Your veterinarian is the right person to say whether the journey suits them.",
  },
  {
    id: "transport-rules",
    level: "recommended",
    title: "The transport company's own rules",
    detail: "Airlines, ferries and train operators set their own conditions, entirely separately from any government requirement. Confirm those directly with them.",
  },
  {
    id: "insurance",
    level: "recommended",
    title: "Insurance that covers you abroad",
    detail: "Check whether your policy travels with you, and what it covers at your destination.",
  },
];

const alwaysGood: Rule[] = [
  { id: "vet-at-destination", level: "good-to-have", title: "A vet at your destination", detail: "Look one up before you leave and save the number in your phone." },
  { id: "contacts", level: "good-to-have", title: "Emergency contacts", detail: "Your own vet, someone at home, and the microchip database details." },
  { id: "photo", level: "good-to-have", title: "A recent photo of your dog", detail: "The one thing you'll wish you had if they ever slip a lead somewhere unfamiliar." },
  { id: "familiar", level: "good-to-have", title: "Something that smells of home", detail: "A blanket or a toy makes an unfamiliar room settle much faster." },
];

function buildLeg(fromCode: string, toCode: string): Leg | undefined {
  const from = countriesByCode[fromCode];
  const to = countriesByCode[toCode];
  if (!from || !to) return undefined;

  const withinEu = from.eu && to.eu;
  const ruleSet = withinEu ? to.entry.fromEu : (to.entry.fromNonEu ?? (from.eu ? to.entry.fromEu : undefined));
  const known = Boolean(ruleSet);
  const rules = ruleSet?.rules ?? [];

  return {
    from,
    to,
    known,
    ...(ruleSet ? { ruleSet } : {}),
    required: rules.filter((r) => r.level === "required"),
    recommended: [...rules.filter((r) => r.level === "recommended"), ...alwaysRecommended],
    goodToHave: [...rules.filter((r) => r.level === "good-to-have"), ...alwaysGood],
    sources: to.sources,
    withinEu,
  };
}

export interface RouteCheck {
  outbound?: Leg;
  ret?: Leg;
  transit: Leg[];
  /** Countries we were asked about but hold nothing verified for. */
  unknown: string[];
}

export function checkRoute(input: {
  from?: string | undefined;
  to?: string | undefined;
  transit?: string[] | undefined;
}): RouteCheck {
  const unknown: string[] = [];
  if (input.from && !countriesByCode[input.from]) unknown.push(input.from);
  if (input.to && !countriesByCode[input.to]) unknown.push(input.to);

  const outbound = input.from && input.to ? buildLeg(input.from, input.to) : undefined;
  const ret = input.from && input.to ? buildLeg(input.to, input.from) : undefined;

  const transit = (input.transit ?? [])
    .map((code) => (input.from ? buildLeg(input.from, code) : undefined))
    .filter((l): l is Leg => Boolean(l));

  return {
    ...(outbound ? { outbound } : {}),
    ...(ret ? { ret } : {}),
    transit,
    unknown,
  };
}

/** The non-legal, non-medical "does your checklist look complete" indicator. */
export function readinessCount(leg: Leg | undefined, ticked: string[]): { done: number; total: number } {
  if (!leg) return { done: 0, total: 0 };
  const ids = [...leg.required, ...leg.recommended].map((r) => r.id);
  return { done: ids.filter((id) => ticked.includes(id)).length, total: ids.length };
}