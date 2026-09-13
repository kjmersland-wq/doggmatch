import { useMemo, useState } from "react";
import { breeds, type BreedId } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { combineBreedTraits } from "@/lib/dogs/profile";
import { matchDogTraits } from "@/lib/matching/engine";
import { matchInsights, scoreReading } from "@/lib/matching/insights";
import type { DimensionKey, UserProfile } from "@/lib/matching/types";
import { useCopy, useT } from "@/i18n";
import { Badge, Eyebrow, ScoreBar, ScoreRing } from "@/components/dogmatch/ui";

const DIMENSION_ORDER: DimensionKey[] = [
  "lifestyle",
  "home",
  "activity",
  "temperament",
  "trainability",
  "companionship",
  "allergy",
  "wellbeing",
  "maintenance",
];

/** Common crosses people actually ask about, expressed as their two parent breeds. */
const PRESETS: { label: string; parents: [BreedId, BreedId] }[] = [
  { label: "Labradoodle", parents: ["labrador-retriever", "poodle"] },
  { label: "Goldendoodle", parents: ["golden-retriever", "poodle"] },
  { label: "Cavapoo", parents: ["cavalier-king-charles-spaniel", "poodle"] },
  { label: "Cockapoo", parents: ["cocker-spaniel", "poodle"] },
  { label: "Puggle", parents: ["pug", "beagle"] },
  { label: "Border Collie × Labrador", parents: ["border-collie", "labrador-retriever"] },
];

const copy = {
  en: {
    eyebrow: "Mixed breeds",
    title: "Score a mix, not just a breed",
    body:
      "Lots of wonderful dogs are a mix of two breeds. Pick the two parents and we'll score the cross against your own answers, with exactly the same maths we use for pure breeds.",
    parentA: "First parent breed",
    parentB: "Second parent breed",
    presets: "Or start from a common cross",
    resultTitle: "How this cross looks for your life",
    fits: "What lines up",
    trade: "What to weigh up",
    none: "Nothing stood out here from your answers.",
    breakdown: "Score breakdown",
    disclaimer:
      "An honest caveat: a mix is scored from the average of its parents, with the more demanding parent leading on needs like exercise and coat care, and the more careful parent leading on things like being left alone. Real mixed dogs vary far more than purebreds — two puppies from the same litter can turn out quite differently. Treat this as a starting point, then meet the actual dog.",
    same: "Pick two different breeds to score a cross.",
    mixLabel: "cross",
  },
  no: {
    eyebrow: "Blandingshunder",
    title: "Gi en blanding en score, ikke bare en rase",
    body:
      "Mange nydelige hunder er en blanding av to raser. Velg de to foreldrene, så scorer vi krysningen mot svarene dine — med nøyaktig samme regnestykke som for renrasede hunder.",
    parentA: "Første foreldrerase",
    parentB: "Andre foreldrerase",
    presets: "Eller start fra en vanlig krysning",
    resultTitle: "Slik ser denne krysningen ut for livet ditt",
    fits: "Dette passer",
    trade: "Dette bør du veie",
    none: "Ingenting skilte seg ut her ut fra svarene dine.",
    breakdown: "Poengoversikt",
    disclaimer:
      "En ærlig reservasjon: en blanding scores ut fra gjennomsnittet av foreldrene, der den mest krevende forelderen leder på behov som mosjon og pelsstell, og den mest forsiktige leder på ting som å være alene. Ekte blandingshunder varierer langt mer enn renrasede — to valper fra samme kull kan bli ganske ulike. Bruk dette som et utgangspunkt, og møt så hunden selv.",
    same: "Velg to forskjellige raser for å score en krysning.",
    mixLabel: "krysning",
  },
  pl: {
    eyebrow: "Mieszańce",
    title: "Oceń mieszankę, nie tylko rasę",
    body:
      "Wiele wspaniałych psów to mieszanka dwóch ras. Wybierz oboje rodziców, a ocenimy krzyżówkę na podstawie Twoich odpowiedzi — dokładnie tą samą metodą co psy rasowe.",
    parentA: "Pierwsza rasa rodzicielska",
    parentB: "Druga rasa rodzicielska",
    presets: "Albo zacznij od popularnej krzyżówki",
    resultTitle: "Jak ta krzyżówka wygląda przy Twoim życiu",
    fits: "Co pasuje",
    trade: "Co rozważyć",
    none: "Nic szczególnego nie wynikło tu z Twoich odpowiedzi.",
    breakdown: "Rozbicie wyniku",
    disclaimer:
      "Szczere zastrzeżenie: mieszankę oceniamy na podstawie średniej rodziców — bardziej wymagający rodzic prowadzi przy potrzebach takich jak ruch i pielęgnacja sierści, a bardziej wrażliwy przy kwestiach takich jak zostawanie samemu. Prawdziwe mieszańce różnią się znacznie bardziej niż psy rasowe: dwa szczenięta z jednego miotu mogą wyrosnąć zupełnie inaczej. Potraktuj to jako punkt wyjścia i poznaj konkretnego psa.",
    same: "Wybierz dwie różne rasy, aby ocenić krzyżówkę.",
    mixLabel: "krzyżówka",
  },
};

/**
 * Deterministic scoring for a two-parent cross.
 * Same engine, same dimensions and same transparency as a pure breed — only
 * the trait source differs, and that is stated plainly to the reader.
 */
export function MixMatcher({ profile }: { profile: UserProfile }) {
  const c = useCopy(copy);
  const t = useT();
  const content = breedContent();
  const options = useMemo(
    () =>
      breeds
        .map((b) => ({ id: b.id, name: content[b.id]?.displayName ?? b.name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [content],
  );

  const [parentA, setParentA] = useState<BreedId>("labrador-retriever");
  const [parentB, setParentB] = useState<BreedId>("poodle");

  const traits = parentA !== parentB ? combineBreedTraits([parentA, parentB]) : undefined;
  const fit = traits ? matchDogTraits(traits, profile, { individual: true }) : undefined;
  const insights = traits ? matchInsights(traits, profile) : undefined;

  const nameA = content[parentA]?.displayName ?? parentA;
  const nameB = content[parentB]?.displayName ?? parentB;

  return (
    <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h2 className="display-md mt-4">{c.title}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{c.body}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          <span>{c.parentA}</span>
          <select
            value={parentA}
            onChange={(event) => setParentA(event.target.value as BreedId)}
            className="h-12 w-full rounded-lg border border-border-strong bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            {options.map((o) => (
              <option key={o.id} value={o.id}>{o.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          <span>{c.parentB}</span>
          <select
            value={parentB}
            onChange={(event) => setParentB(event.target.value as BreedId)}
            className="h-12 w-full rounded-lg border border-border-strong bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            {options.map((o) => (
              <option key={o.id} value={o.id}>{o.name}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{c.presets}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                setParentA(preset.parents[0]);
                setParentB(preset.parents[1]);
              }}
              className="rounded-full border border-border-strong px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {!fit || !traits || !insights ? (
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{c.same}</p>
      ) : (
        <div className="mt-10" aria-live="polite">
          <h3 className="font-display text-xl leading-tight">{c.resultTitle}</h3>
          <div className="mt-6 flex flex-wrap items-center gap-8">
            <ScoreRing value={fit.score} />
            <div className="max-w-md">
              <p className="font-display text-lg leading-tight">
                {nameA} × {nameB}
              </p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed">{scoreReading(fit.score)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge tone="neutral">{c.mixLabel}</Badge>
                {fit.status !== "recommended" && (
                  <Badge tone="accent">
                    {fit.status === "not-recommended" ? t.result.notRecommended : t.result.mismatchTitle}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <h4 className="mt-10 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {c.breakdown}
          </h4>
          <div className="mt-5 grid gap-x-14 gap-y-7 rounded-2xl border border-border bg-background p-6 md:grid-cols-2 md:p-8">
            {DIMENSION_ORDER.map((key) => (
              <ScoreBar key={key} label={t.dimensions[key]} value={fit.dimensions[key]} />
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <h4 className="font-display text-lg leading-tight">{c.fits}</h4>
              <ul className="mt-4 space-y-3">
                {insights.fits.slice(0, 3).length === 0 && (
                  <li className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.none}</li>
                )}
                {insights.fits.slice(0, 3).map((item) => (
                  <li key={item.from} className="text-[0.9375rem] leading-relaxed">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <h4 className="font-display text-lg leading-tight">{c.trade}</h4>
              <ul className="mt-4 space-y-3">
                {[...insights.tradeoffs.slice(0, 3), ...fit.warnings.slice(0, 2)].length === 0 && (
                  <li className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.none}</li>
                )}
                {insights.tradeoffs.slice(0, 3).map((item) => (
                  <li key={item.from} className="text-[0.9375rem] leading-relaxed">
                    {item.text}
                  </li>
                ))}
                {fit.warnings.slice(0, 2).map((warning) => (
                  <li key={warning} className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {warning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <p className="mt-8 max-w-3xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
        {c.disclaimer}
      </p>
    </div>
  );
}
