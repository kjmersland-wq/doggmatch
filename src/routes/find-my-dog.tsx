import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useT, interpolate, useCopy } from "@/i18n";

const resultCopy = {
  en: {
    scoreNote: "Based on everything you told us, including the limits you said you couldn't stretch.",
    essentials: ["A bed and a safe space", "Collar, lead and tag", "Food and mealtimes", "Insurance and vet care"],
    suited: "Suited to a {breed}.",
  },
  no: {
    scoreNote: "Basert på alt du har fortalt oss, også grensene du sa du ikke kunne tøye.",
    essentials: ["En seng og et trygt sted", "Halsbånd, bånd og ID-brikke", "Mat og faste måltider", "Forsikring og veterinær"],
    suited: "Tilpasset en {breed}.",
  },
};
import { quizQuestions } from "@/data/questions.locale";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { matchBreeds, explain } from "@/lib/matching/engine";
import type { DimensionKey, MatchResult, UserProfile } from "@/lib/matching/types";
import { Arrow, Badge, Button, ButtonLink, Eyebrow, ScoreBar, ScoreRing } from "@/components/dogmatch/ui";
import { cn } from "@/lib/utils";

const title = "Find My Dog — a free match, in about two minutes | DoggMatch";
const description =
  "Answer a few friendly questions about your days, your home and what you're hoping for, and we'll show you the dogs that may suit you best.";

export const Route = createFileRoute("/find-my-dog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/find-my-dog" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/find-my-dog" }],
  }),
  component: FindMyDogPage,
});

type Phase = "quiz" | "revealing" | "result";

function FindMyDogPage() {
  const t = useT();
  const questions = quizQuestions();
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<UserProfile>({});
  const [phase, setPhase] = useState<Phase>("quiz");

  const question = questions[step]!;
  const total = questions.length;
  const selected = profile[question.id];
  const progress = Math.round(((step + (selected ? 1 : 0)) / total) * 100);

  const results = useMemo(() => (phase === "result" ? matchBreeds(profile) : []), [phase, profile]);

  function choose(value: string) {
    setProfile((p) => ({ ...p, [question.id]: value }));
  }

  function next() {
    if (step + 1 < total) setStep(step + 1);
    else setPhase("revealing");
  }

  function restart() {
    setProfile({});
    setStep(0);
    setPhase("quiz");
    window.scrollTo({ top: 0 });
  }

  if (phase === "revealing") return <Reveal onDone={() => setPhase("result")} />;
  if (phase === "result") return <Results results={results} onRestart={restart} />;

  return (
    <div className="container-page flex min-h-[calc(100vh-72px)] max-w-3xl flex-col py-10 md:py-16">
      {/* progress */}
      <div>
        <div className="flex items-baseline justify-between">
          <Eyebrow>{t.quiz.intro}</Eyebrow>
          <p className="text-sm tabular-nums text-muted-foreground">
            {t.quiz.question} {step + 1} {t.quiz.of} {total}
          </p>
        </div>
        <div
          className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t.quiz.progress}
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={question.id} className="animate-rise mt-12 flex-1 md:mt-16">
        <p className="eyebrow">{question.eyebrow}</p>
        <h1 className="display-lg mt-4">{question.title}</h1>
        {question.help && (
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {question.help}
          </p>
        )}

        <fieldset className="mt-10 space-y-3">
          <legend className="sr-only">{question.title}</legend>
          {question.options.map((option) => {
            const isSelected = selected === option.value;
            return (
              <label
                key={option.value}
                className={cn(
                  "flex min-h-16 cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 ease-out",
                  isSelected
                    ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
                    : "border-border bg-card hover:border-border-strong hover:bg-surface/60",
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => choose(option.value)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
                    isSelected ? "border-accent bg-accent" : "border-border-strong",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-accent-foreground transition-transform duration-300",
                      isSelected ? "scale-100" : "scale-0",
                    )}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">
                    {option.label}
                  </span>
                  {option.hint && (
                    <span className="mt-1 block text-sm text-muted-foreground">{option.hint}</span>
                  )}
                </span>
              </label>
            );
          })}
        </fieldset>
      </div>

      <div className="sticky bottom-20 mt-12 flex items-center gap-3 border-t border-border bg-background/90 py-5 backdrop-blur-xl lg:bottom-0">
        <Button
          tone="ghost"
          onClick={() => (step === 0 ? window.history.back() : setStep(step - 1))}
        >
          {t.quiz.back}
        </Button>
        {question.optional && !selected && (
          <Button tone="outline" onClick={next}>
            {t.quiz.skip}
          </Button>
        )}
        <Button size="lg" className="ml-auto" disabled={!selected} onClick={next}>
          {step + 1 === total ? t.quiz.seeResult : t.quiz.continue}
          <Arrow />
        </Button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- The reveal */

function Reveal({ onDone }: { onDone: () => void }) {
  const t = useT();
  const lines = [t.quiz.calculating, t.quiz.comparing, t.quiz.finishing];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => setIndex((i) => i + 1), 750);
    const finish = setTimeout(onDone, 2350);
    return () => {
      clearInterval(tick);
      clearTimeout(finish);
    };
  }, [onDone]);

  return (
    <div className="container-page grid min-h-[calc(100vh-72px)] place-items-center py-20 text-center">
      <div>
        <span className="mx-auto block h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
        <p className="display-md mt-8" aria-live="polite">
          {lines[Math.min(index, lines.length - 1)]}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- The result */

const DIMENSION_ORDER: DimensionKey[] = [
  "lifestyle",
  "home",
  "activity",
  "temperament",
  "trainability",
  "companionship",
  "maintenance",
];

function Results({ results, onRestart }: { results: MatchResult[]; onRestart: () => void }) {
  const t = useT();
  const c = useCopy(resultCopy);
  const best = results[0]!;
  const content = breedContent()[best.breedId];
  const detail = explain(best);
  const others = results.slice(1, 4);

  return (
    <div className="pb-24">
      <section className="container-page pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div className="animate-rise">
            <Eyebrow>{t.result.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-6">{content.displayName}</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {detail.summary}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-8">
              <ScoreRing value={best.score} />
              <div className="max-w-[14rem]">
                <p className="font-display text-lg leading-tight">{t.result.compatibility}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.scoreNote}
                </p>
                {best.status !== "recommended" && (
                  <span className="mt-4 inline-block">
                    <Badge tone="accent">
                      {best.status === "not-recommended" ? t.result.notRecommended : t.result.mismatchTitle}
                    </Badge>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={breedImages[best.breedId]}
              alt={content.displayName}
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* breakdown */}
      <section className="container-page mt-20 md:mt-28">
        <h2 className="display-md">{t.result.breakdown}</h2>
        <div className="mt-8 grid gap-x-14 gap-y-7 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-10">
          {DIMENSION_ORDER.map((key) => (
            <ScoreBar key={key} label={t.dimensions[key]} value={best.dimensions[key]} />
          ))}
        </div>
      </section>

      {/* why + considerations */}
      <section className="container-page mt-20 grid gap-10 md:mt-28 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="display-md max-w-sm">
            {interpolate(t.result.whyTitle, { breed: content.displayName })}
          </h2>
          <ul className="mt-8 space-y-4">
            {detail.strengths.map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="mt-[2px] text-primary">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="display-md">{t.result.considerTitle}</h2>
          <ul className="mt-8 space-y-4">
            {[...detail.warnings, ...detail.considerations].map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="mt-[2px] text-accent">
                  !
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
            {t.allergyNote}
          </p>
        </div>
      </section>

      {/* other matches */}
      <section className="container-page mt-20 md:mt-28">
        <h2 className="display-md">{t.result.otherMatches}</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((r) => (
            <li key={r.breedId}>
              <Link to="/breeds/$breedId" params={{ breedId: r.breedId }} className="group block">
                <div className="overflow-hidden rounded-[1.25rem]">
                  <img
                    src={breedImages[r.breedId]}
                    alt={breedContent()[r.breedId].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg leading-tight tracking-tight">
                    {breedContent()[r.breedId].displayName}
                  </h3>
                  <span className="font-display text-sm tabular-nums text-muted-foreground">
                    {r.score}%
                  </span>
                </div>
                {r.status !== "recommended" && (
                  <p className="mt-2 text-sm text-accent">{r.warnings[0]}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* premium */}
      <section className="container-page mt-20 md:mt-28">
        <div className="grid gap-8 rounded-[1.75rem] border border-border bg-surface p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-12">
          <div>
            <p className="eyebrow">{t.result.premiumEyebrow}</p>
            <h2 className="display-md mt-4">{t.result.premiumTitle}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {t.result.premiumBody}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">{t.result.premiumNote}</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <span className="font-display text-4xl tracking-tight">{t.result.premiumPrice}</span>
            <Button tone="outline">{t.result.premiumCta}</Button>
          </div>
        </div>
      </section>

      {/* essentials */}
      <section className="container-page mt-20 md:mt-28">
        <h2 className="display-md max-w-lg">
          {interpolate(t.result.essentialsTitle, { breed: content.displayName })}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          {t.result.essentialsBody}
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {c.essentials.map((item) => (
            <li key={item} className="bg-background p-7">
              <p className="font-display text-lg leading-tight">{item}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {interpolate(c.suited, { breed: content.displayName })}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="container-page mt-16 flex flex-wrap gap-3">
        <ButtonLink to="/breeds/$breedId" params={{ breedId: best.breedId } as never} size="lg">
          {t.result.viewBreed}
          <Arrow />
        </ButtonLink>
        <Button tone="outline" size="lg" onClick={onRestart}>
          {t.result.restart}
        </Button>
      </div>
    </div>
  );
}
