import { getCountriesByCode, type Country, type Rule, type RuleSet } from "@/data/travel/countries";
import { pick } from "@/i18n";

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

const alwaysRecommendedCopy = {
  en: [
    {
      id: "vet-check",
      level: "recommended" as const,
      title: "A check-up before you go",
      detail: "A quick appointment before a long trip is worth it, especially for a puppy, an older dog, or a dog on medication. Your veterinarian is the right person to say whether the journey suits them.",
    },
    {
      id: "transport-rules",
      level: "recommended" as const,
      title: "The transport company's own rules",
      detail: "Airlines, ferries and train operators set their own conditions, entirely separately from any government requirement. Confirm those directly with them.",
    },
    {
      id: "insurance",
      level: "recommended" as const,
      title: "Insurance that covers you abroad",
      detail: "Check whether your policy travels with you, and what it covers at your destination.",
    },
  ],
  no: [
    {
      id: "vet-check",
      level: "recommended" as const,
      title: "En sjekk hos veterinæren før dere drar",
      detail: "En rask time før en lang reise er verdt det, spesielt for en valp, en eldre hund, eller en hund på medisiner. Veterinæren din er rette person til å si om reisen passer for hunden.",
    },
    {
      id: "transport-rules",
      level: "recommended" as const,
      title: "Transportselskapets egne regler",
      detail: "Flyselskaper, ferger og togoperatører setter sine egne betingelser, helt uavhengig av statlige krav. Bekreft dette direkte med dem.",
    },
    {
      id: "insurance",
      level: "recommended" as const,
      title: "Forsikring som gjelder i utlandet",
      detail: "Sjekk om forsikringen din gjelder på reise, og hva den dekker på reisemålet.",
    },
  ],
};

const alwaysGoodCopy = {
  en: [
    { id: "vet-at-destination", level: "good-to-have" as const, title: "A vet at your destination", detail: "Look one up before you leave and save the number in your phone." },
    { id: "contacts", level: "good-to-have" as const, title: "Emergency contacts", detail: "Your own vet, someone at home, and the microchip database details." },
    { id: "photo", level: "good-to-have" as const, title: "A recent photo of your dog", detail: "The one thing you'll wish you had if they ever slip a lead somewhere unfamiliar." },
    { id: "familiar", level: "good-to-have" as const, title: "Something that smells of home", detail: "A blanket or a toy makes an unfamiliar room settle much faster." },
  ],
  no: [
    { id: "vet-at-destination", level: "good-to-have" as const, title: "En veterinær på reisemålet", detail: "Finn en før dere drar, og lagre nummeret i telefonen." },
    { id: "contacts", level: "good-to-have" as const, title: "Nødkontakter", detail: "Din egen veterinær, noen hjemme, og opplysninger om mikrochip-registeret." },
    { id: "photo", level: "good-to-have" as const, title: "Et ferskt bilde av hunden", detail: "Det ene du kommer til å ønske du hadde hvis hunden skulle slite seg et ukjent sted." },
    { id: "familiar", level: "good-to-have" as const, title: "Noe som lukter hjemme", detail: "Et teppe eller et leketøy gjør at et fremmed rom føles trygt mye raskere." },
  ],
};

function buildLeg(fromCode: string, toCode: string): Leg | undefined {
  const countriesByCode = getCountriesByCode();
  const from = countriesByCode[fromCode];
  const to = countriesByCode[toCode];
  if (!from || !to) return undefined;

  const alwaysRecommended = pick(alwaysRecommendedCopy);
  const alwaysGood = pick(alwaysGoodCopy);

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
  const countriesByCode = getCountriesByCode();
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
