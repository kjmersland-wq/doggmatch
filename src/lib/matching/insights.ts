import { pick } from "@/i18n";
import type { BreedTraits } from "@/data/breeds";
import type { UserProfile } from "./types";

/**
 * Turns the maths into plain sentences.
 *
 * Every line below is derived from one of the reader's own answers set against
 * one measurable characteristic of the dog. Nothing is generated, nothing is
 * guessed, and the trade-offs are shown with exactly the same prominence as
 * the strengths — a dog that scores well is still allowed to be hard work.
 */

export interface MatchInsight {
  /** The answer this line came from, e.g. "You said: a flat". */
  from: string;
  /** What that means for this dog. */
  text: string;
}

export interface MatchInsights {
  fits: MatchInsight[];
  tradeoffs: MatchInsight[];
}

const num = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

type Bi = { en: string; no: string };
const s = (v: Bi) => pick(v);

/** One comparison between an answer and a characteristic. */
interface Rule {
  /** Skip entirely when this returns false. */
  when: (p: UserProfile) => boolean;
  from: Bi;
  /** True when the dog suits the answer. */
  good: (t: BreedTraits, p: UserProfile) => boolean;
  fit: Bi;
  tradeoff: Bi;
}

const RULES: Rule[] = [
  {
    when: () => true,
    from: { en: "How active your days are", no: "Hvor aktive dagene dine er" },
    good: (t, p) => Math.abs(t.exerciseNeeds - num(p["activity"], 2)) <= 1,
    fit: {
      en: "The amount of walking and running this dog needs lines up well with the days you described.",
      no: "Mengden gåing og løping denne hunden trenger passer godt med dagene du beskrev.",
    },
    tradeoff: {
      en: "There's a gap between the exercise this dog needs and the pace of your days. That gap has to be closed by you, every single day, not just at weekends.",
      no: "Det er et gap mellom mosjonen denne hunden trenger og tempoet i dagene dine. Det gapet må du tette hver eneste dag, ikke bare i helgene.",
    },
  },
  {
    when: (p) => p["home"] === "apartment",
    from: { en: "You live in a flat", no: "Du bor i leilighet" },
    good: (t) => t.apartmentSuitability >= 4 && t.barking <= 3,
    fit: {
      en: "They settle well in a flat and aren't especially vocal, which matters when you share walls.",
      no: "Den faller godt til ro i leilighet og er ikke spesielt høylytt, noe som betyr mye når du deler vegger.",
    },
    tradeoff: {
      en: "Flat living asks a lot of this one — either the space, the noise or the need to get out often will be a daily consideration.",
      no: "Leilighetsliv krever mye av denne — enten plassen, lyden eller behovet for å komme ut ofte blir en daglig vurdering.",
    },
  },
  {
    when: (p) => num(p["alone"], 0) >= 4,
    from: { en: "Hours alone on a normal day", no: "Timer alene på en vanlig dag" },
    good: (t, p) => t.aloneTolerance >= (num(p["alone"], 0) >= 6 ? 4 : 3),
    fit: {
      en: "They cope reasonably well with quiet hours at home, as long as the day around them is full enough.",
      no: "Den takler rolige timer hjemme ganske godt, så lenge resten av dagen er innholdsrik nok.",
    },
    tradeoff: {
      en: "Long days on their own are genuinely hard for this dog. You'd need help — a walker, day care or a neighbour — not just good intentions.",
      no: "Lange dager alene er reelt vanskelig for denne hunden. Du ville trengt hjelp — en turgåer, dagpass eller en nabo — ikke bare gode intensjoner.",
    },
  },
  {
    when: (p) => p["children"] === "young" || p["children"] === "older",
    from: { en: "Children at home", no: "Barn hjemme" },
    good: (t, p) => t.goodWithChildren >= (p["children"] === "young" ? 5 : 4),
    fit: {
      en: "Patient and steady with children, which is the part that matters most in a busy house.",
      no: "Tålmodig og stødig med barn, som er det viktigste i et travelt hjem.",
    },
    tradeoff: {
      en: "With children in the house this one needs more supervision and more structure than most. That's a real, daily commitment.",
      no: "Med barn i huset trenger denne mer tilsyn og mer struktur enn de fleste. Det er en reell, daglig forpliktelse.",
    },
  },
  {
    when: (p) => p["pets"] === "dog" || p["pets"] === "cat" || p["pets"] === "small",
    from: { en: "Other animals at home", no: "Andre dyr hjemme" },
    good: (t, p) => (p["pets"] === "dog" ? t.goodWithDogs >= 4 : t.goodWithPets >= 4),
    fit: {
      en: "Usually easy-going with the animals already living with you.",
      no: "Som regel grei med dyrene som allerede bor hos deg.",
    },
    tradeoff: {
      en: "Introductions would need to be slow and carefully managed, and some households never get past the chase instinct.",
      no: "Introduksjoner må gjøres langsomt og styres nøye, og noen hjem kommer aldri forbi jaktlysten.",
    },
  },
  {
    when: (p) => p["experience"] === "first",
    from: { en: "This would be your first dog", no: "Dette blir din første hund" },
    good: (t) => t.firstTimeSuitability >= 4 && t.trainability >= 4,
    fit: {
      en: "Forgiving of the mistakes every first-time owner makes, and quick to pick up what you're asking.",
      no: "Tilgivende for feilene alle førstegangseiere gjør, og rask til å skjønne hva du ber om.",
    },
    tradeoff: {
      en: "A demanding first dog. Not impossible — but plan on proper training help from the start rather than working it out alone.",
      no: "En krevende første hund. Ikke umulig — men regn med ordentlig treningshjelp fra start, ikke å finne ut av det alene.",
    },
  },
  {
    when: (p) => p["shedding"] === "must-low" || p["shedding"] === "prefer-low",
    from: { en: "How much shedding you can live with", no: "Hvor mye pelsfelling du tåler" },
    good: (t, p) => t.shedding <= (p["shedding"] === "must-low" ? 2 : 3),
    fit: {
      en: "Leaves comparatively little hair around the house.",
      no: "Legger igjen forholdsvis lite hår i huset.",
    },
    tradeoff: {
      en: "There will be hair — on clothes, on furniture, in the car. No amount of brushing removes that entirely.",
      no: "Det blir hår — på klær, på møbler, i bilen. Ingen mengde børsting fjerner det helt.",
    },
  },
  {
    when: (p) => p["grooming"] === "minimal" || p["grooming"] === "moderate",
    from: { en: "Time you want to spend on coat care", no: "Tid du vil bruke på pelsstell" },
    good: (t, p) => t.grooming <= (p["grooming"] === "minimal" ? 2 : 3),
    fit: {
      en: "The coat is straightforward — a brush now and then keeps it in good order.",
      no: "Pelsen er enkel — en børste innimellom holder den i god stand.",
    },
    tradeoff: {
      en: "The coat needs regular work, and skipping it doesn't just look untidy — it becomes uncomfortable for the dog and costly at the groomer.",
      no: "Pelsen krever jevnlig arbeid, og å hoppe over det ser ikke bare uryddig ut — det blir ubehagelig for hunden og dyrt hos frisøren.",
    },
  },
  {
    when: (p) => p["physical"] === "light" || p["physical"] === "moderate",
    from: { en: "What you can manage physically", no: "Hva du klarer fysisk" },
    good: (t, p) => t.strengthRequired <= (p["physical"] === "light" ? 2 : 3),
    fit: {
      en: "Manageable on the lead without needing much strength.",
      no: "Håndterbar i bånd uten at det krever mye styrke.",
    },
    tradeoff: {
      en: "A strong dog on the other end of the lead. Loose-lead work would need to be solid before it becomes comfortable.",
      no: "En sterk hund i andre enden av båndet. Båndtrening må sitte godt før det blir behagelig.",
    },
  },
  {
    when: (p) => p["energyLimit"] === "no" || p["energyLimit"] === "maybe",
    from: { en: "How much energy you can handle", no: "Hvor mye energi du takler" },
    good: (t, p) => t.energy <= (p["energyLimit"] === "no" ? 2 : 4),
    fit: {
      en: "Calm enough indoors to fit the pace you said you needed.",
      no: "Rolig nok innendørs til å passe tempoet du sa du trengte.",
    },
    tradeoff: {
      en: "This is a high-energy dog. Under-exercised, that energy turns into chewing, barking and restlessness indoors.",
      no: "Dette er en hund med mye energi. Med for lite mosjon blir energien til tygging, bjeffing og uro innendørs.",
    },
  },
  {
    when: (p) => Boolean(p["temperament"]),
    from: { en: "The temperament you were hoping for", no: "Temperamentet du håpet på" },
    good: (t, p) => {
      const want = p["temperament"];
      if (want === "calm") return t.energy <= 3;
      if (want === "affectionate") return t.affection >= 4;
      if (want === "playful") return t.energy >= 3 && t.affection >= 3;
      if (want === "independent") return t.independence >= 4;
      return true;
    },
    fit: {
      en: "Their everyday character is close to what you said you were looking for.",
      no: "Hverdagskarakteren deres ligger nær det du sa du så etter.",
    },
    tradeoff: {
      en: "Their natural character sits a little away from what you described. Not wrong — just something to meet in person before deciding.",
      no: "Karakteren deres ligger litt unna det du beskrev. Ikke feil — bare noe du bør møte i virkeligheten før du bestemmer deg.",
    },
  },
  {
    when: (p) => Boolean(p["companionship"]) && p["companionship"] !== "family",
    from: { en: "What you want from the company", no: "Hva du ønsker av selskapet" },
    good: (t, p) => {
      const goal = p["companionship"];
      if (goal === "calm-company") return t.energy <= 3 && t.affection >= 4;
      if (goal === "motivation") return t.energy >= 3 && t.affection >= 4;
      if (goal === "active") return t.exerciseNeeds >= 4;
      return true;
    },
    fit: {
      en: "The kind of company you described is exactly what this dog tends to offer.",
      no: "Den typen selskap du beskrev er nettopp det denne hunden pleier å gi.",
    },
    tradeoff: {
      en: "You'd get good company — just a different sort from the one you pictured.",
      no: "Du får godt selskap — bare av en litt annen type enn den du så for deg.",
    },
  },
  {
    when: (p) => p["allergy"] === "mild" || p["allergy"] === "significant",
    from: { en: "Allergy in the household", no: "Allergi i husstanden" },
    good: (t, p) => t.shedding <= (p["allergy"] === "significant" ? 2 : 3) && t.drooling <= 3,
    fit: {
      en: "Lighter shedding and little drool make for an easier starting point — though no dog is allergy-free.",
      no: "Lite felling og lite sikkel gir et enklere utgangspunkt — men ingen hund er allergivennlig i seg selv.",
    },
    tradeoff: {
      en: "Heavier shedding is a difficult starting point where someone reacts to dogs. Speak to an allergy specialist before you decide.",
      no: "Mye felling er et vanskelig utgangspunkt når noen reagerer på hund. Snakk med en allergispesialist før du bestemmer deg.",
    },
  },
  {
    when: (p) => p["wellbeing"] === "important" || p["wellbeing"] === "very",
    from: { en: "Company for your wellbeing", no: "Selskap for ditt velvære" },
    good: (t) => t.affection >= 4 && t.sociability >= 3 && t.energy <= 4,
    fit: {
      en: "Affectionate, people-oriented and steady — the qualities that make a dog easy to be around on a hard day.",
      no: "Kjærlig, menneskeorientert og stødig — egenskapene som gjør en hund lett å ha rundt seg på en tung dag.",
    },
    tradeoff: {
      en: "More independent than most, so the closeness you're hoping for would take longer to build.",
      no: "Mer selvstendig enn de fleste, så nærheten du håper på ville tatt lengre tid å bygge.",
    },
  },
];

/** Strengths and honest trade-offs, each tied back to a specific answer. */
export function matchInsights(traits: BreedTraits, profile: UserProfile): MatchInsights {
  const fits: MatchInsight[] = [];
  const tradeoffs: MatchInsight[] = [];

  for (const rule of RULES) {
    if (!rule.when(profile)) continue;
    const from = s(rule.from);
    if (rule.good(traits, profile)) fits.push({ from, text: s(rule.fit) });
    else tradeoffs.push({ from, text: s(rule.tradeoff) });
  }

  return { fits, tradeoffs };
}

/** A short, honest reading of the number — never presented as an exact science. */
export function scoreReading(score: number): string {
  if (score >= 80)
    return pick({
      en: "A strong fit with the life you described.",
      no: "Passer godt med livet du beskrev.",
    });
  if (score >= 65)
    return pick({
      en: "A good fit, with a few things to plan around.",
      no: "Passer bra, med noen ting å planlegge rundt.",
    });
  if (score >= 50)
    return pick({
      en: "Workable, but only with real changes to your week.",
      no: "Mulig, men bare med reelle endringer i uka di.",
    });
  return pick({
    en: "Difficult to make work as your days look now.",
    no: "Vanskelig å få til slik dagene dine ser ut nå.",
  });
}
