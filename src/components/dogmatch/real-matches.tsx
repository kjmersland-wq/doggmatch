import { useCopy } from "@/i18n";
import { Eyebrow } from "@/components/dogmatch/ui";
import { matchBreeds } from "@/lib/matching/engine";
import { matchInsights } from "@/lib/matching/insights";
import { breedById } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import type { UserProfile } from "@/lib/matching/types";

/**
 * Three realistic lifestyle profiles, run through the real matching engine
 * live on every render — not testimonials, and not tuned to land on a
 * particular breed. Whatever breed and score come out is what's shown.
 */
const SCENARIOS: { key: string; profile: UserProfile }[] = [
  {
    key: "apartmentAlone",
    profile: {
      home: "apartment",
      alone: "6",
      activity: "2",
      experience: "some",
      size: "any",
      temperament: "calm",
      children: "none",
      pets: "none",
      shedding: "prefer-low",
      grooming: "minimal",
      physical: "light",
      energyLimit: "no",
      companionship: "calm-company",
      allergy: "none",
      wellbeing: "some",
    },
  },
  {
    key: "familyShedding",
    profile: {
      home: "house-garden",
      alone: "2",
      activity: "3",
      experience: "some",
      size: "large",
      temperament: "affectionate",
      children: "young",
      pets: "none",
      shedding: "prefer-low",
      grooming: "moderate",
      physical: "moderate",
      energyLimit: "maybe",
      companionship: "family",
      allergy: "none",
      wellbeing: "some",
    },
  },
  {
    key: "firstTimeOutdoor",
    profile: {
      home: "house-garden",
      alone: "2",
      activity: "3",
      experience: "first",
      size: "medium",
      temperament: "affectionate",
      children: "none",
      pets: "none",
      shedding: "fine",
      grooming: "moderate",
      physical: "moderate",
      energyLimit: "maybe",
      companionship: "motivation",
      allergy: "none",
      wellbeing: "some",
    },
  },
];

const copy = {
  en: {
    eyebrow: "See it work",
    title: "Three lifestyles, matched",
    intro:
      "Not testimonials — the same deterministic engine, run live against three common situations, so you can see exactly how it reasons before you try it yourself.",
    badge: "Worked example",
    scenarios: {
      apartmentAlone: { context: "Apartment living, alone 6+ hours on a workday" },
      familyShedding: { context: "House with a garden, young children, wants low shedding" },
      firstTimeOutdoor: { context: "First dog, house with a garden, wants an outdoor companion" },
    },
  },
  no: {
    eyebrow: "Se det i praksis",
    title: "Tre liv, matchet",
    intro:
      "Ikke kundeuttalelser — samme deterministiske motor, brukt direkte på tre vanlige situasjoner, så du kan se nøyaktig hvordan den tenker før du prøver selv.",
    badge: "Reelt eksempel",
    scenarios: {
      apartmentAlone: { context: "Leilighet, alene 6+ timer på en vanlig arbeidsdag" },
      familyShedding: { context: "Hus med hage, små barn, vil ha lite pelsfelling" },
      firstTimeOutdoor: { context: "Første hund, hus med hage, ønsker en aktiv turkamerat" },
    },
  },
  pl: {
    eyebrow: "Zobacz, jak to działa",
    title: "Trzy życia, dopasowane",
    intro:
      "To nie opinie klientów — ten sam deterministyczny silnik, użyty na żywo w trzech typowych sytuacjach, żebyś zobaczył/a dokładnie, jak wnioskuje, zanim spróbujesz sam/sama.",
    badge: "Praktyczny przykład",
    scenarios: {
      apartmentAlone: { context: "Mieszkanie, pies zostaje sam na 6+ godzin w dzień roboczy" },
      familyShedding: { context: "Dom z ogrodem, małe dzieci, priorytetem jest małe linienie" },
      firstTimeOutdoor: { context: "Pierwszy pies, dom z ogrodem, szuka aktywnego towarzysza" },
    },
  },
  dk: {
    eyebrow: "Se det i praksis",
    title: "Tre liv, matchet",
    intro:
      "Ikke kundeudtalelser — samme deterministiske motor, brugt direkte på tre almindelige situationer, så du kan se præcis, hvordan den tænker, før du selv prøver.",
    badge: "Reelt eksempel",
    scenarios: {
      apartmentAlone: { context: "Lejlighed, hunden er alene 6+ timer på en hverdag" },
      familyShedding: { context: "Hus med have, små børn, prioriterer lidt fældning" },
      firstTimeOutdoor: { context: "Første hund, hus med have, ønsker en aktiv følgesvend" },
    },
  },
  se: {
    eyebrow: "Se det i praktiken",
    title: "Tre liv, matchade",
    intro:
      "Inga kundomdömen — samma deterministiska motor, använd direkt på tre vanliga situationer, så att du kan se exakt hur den resonerar innan du testar själv.",
    badge: "Exempel ur verkligheten",
    scenarios: {
      apartmentAlone: { context: "Lägenhet, hunden är ensam 6+ timmar en vardag" },
      familyShedding: { context: "Hus med trädgård, små barn, prioriterar lite fällning" },
      firstTimeOutdoor: { context: "Första hunden, hus med trädgård, vill ha en aktiv följeslagare" },
    },
  },
  fi: {
    eyebrow: "Katso, miten se toimii",
    title: "Kolme elämäntilannetta, kolme täsmäystä",
    intro:
      "Ei asiakaskertomuksia — sama deterministinen moottori, ajettuna suoraan kolmen tavallisen elämäntilanteen läpi, jotta näet tarkalleen, miten se päättelee, ennen kuin kokeilet itse.",
    badge: "Käytännön esimerkki",
    scenarios: {
      apartmentAlone: { context: "Kerrostaloasunto, koira yksin 6+ tuntia arkipäivänä" },
      familyShedding: { context: "Talo pihalla, pieniä lapsia, vähäinen karvanlähtö tärkeää" },
      firstTimeOutdoor: { context: "Ensimmäinen koira, talo pihalla, toivoo aktiivista seuralaista" },
    },
  },
  de: {
    eyebrow: "So funktioniert es",
    title: "Drei Lebenssituationen, gematcht",
    intro:
      "Keine Kundenstimmen — dieselbe deterministische Engine, live auf drei alltägliche Situationen angewendet, damit Sie genau sehen, wie sie argumentiert, bevor Sie es selbst ausprobieren.",
    badge: "Praxisbeispiel",
    scenarios: {
      apartmentAlone: { context: "Wohnung, Hund an einem Arbeitstag 6+ Stunden allein" },
      familyShedding: { context: "Haus mit Garten, kleine Kinder, wenig Fellwechsel gewünscht" },
      firstTimeOutdoor: { context: "Erster Hund, Haus mit Garten, wünscht sich einen aktiven Begleiter" },
    },
  },
  fr: {
    eyebrow: "Voyez-le à l'œuvre",
    title: "Trois styles de vie, trois matchs",
    intro:
      "Pas des témoignages — le même moteur déterministe, appliqué en direct à trois situations courantes, pour que vous voyiez exactement comment il raisonne avant de l'essayer vous-même.",
    badge: "Cas pratique en conditions réelles",
    scenarios: {
      apartmentAlone: { context: "Vie en appartement, seul 6 heures ou plus un jour de travail" },
      familyShedding: { context: "Maison avec jardin, jeunes enfants, souhaite peu de perte de poils" },
      firstTimeOutdoor: { context: "Premier chien, maison avec jardin, souhaite un compagnon actif en extérieur" },
    },
  },
  nl: {
    eyebrow: "Zie het in actie",
    title: "Drie levensstijlen, gematcht",
    intro:
      "Geen testimonials — dezelfde deterministische engine, live losgelaten op drie veelvoorkomende situaties, zodat u precies ziet hoe die redeneert voordat u het zelf probeert.",
    badge: "Praktijkvoorbeeld",
    scenarios: {
      apartmentAlone: { context: "Appartement, hond 6+ uur alleen op een werkdag" },
      familyShedding: { context: "Huis met tuin, jonge kinderen, wil weinig haaruitval" },
      firstTimeOutdoor: { context: "Eerste hond, huis met tuin, wil een actieve buitenmetgezel" },
    },
  },
} as const;

export function RealMatchesSection({ className }: { className?: string }) {
  const c = useCopy(copy);

  const cards = SCENARIOS.map(({ key, profile }) => {
    const result = matchBreeds(profile)[0]!;
    const traits = breedById[result.breedId].traits;
    const insights = matchInsights(traits, profile);
    return {
      key,
      context: c.scenarios[key as keyof typeof c.scenarios].context,
      breedName: breedContent()[result.breedId].displayName,
      score: result.score,
      fit: insights.fits[0]?.text,
      tradeoff: insights.tradeoffs[0]?.text,
    };
  });

  return (
    <section aria-label={c.title} className={className}>
      <div className="container-page">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-lg mt-6 max-w-xl">{c.title}</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.key} className="flex flex-col rounded-2xl border border-border bg-surface p-7">
              <span className="inline-flex w-fit items-center rounded-full border border-border-strong px-2.5 py-1 text-xs text-muted-foreground">
                {c.badge}
              </span>
              <p className="mt-4 text-sm text-muted-foreground">{card.context}</p>
              <h3 className="mt-2 flex items-baseline gap-2 font-display text-xl tracking-tight text-foreground">
                {card.breedName}
                <span className="text-base font-semibold tabular-nums text-accent">{card.score}%</span>
              </h3>
              {card.fit && (
                <blockquote className="mt-4 border-l-2 border-border pl-4 text-[0.9375rem] leading-relaxed text-foreground/90">
                  “{card.fit}”
                </blockquote>
              )}
              {card.tradeoff && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.tradeoff}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
