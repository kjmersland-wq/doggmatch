import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getLesson, getLessonsById } from "@/data/training/lessons";
import { lessonHeroes, stepVisuals } from "@/data/training/images";
import { getTrainingCategories } from "@/data/training/categories";
import type { SkillStatus } from "@/data/training/types";
import { Arrow, Badge, Button, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import {
  levelLabel,
  SessionTimer,
  StatusPicker,
  StepFigure,
  TreatCounter,
} from "@/components/dogmatch/training/parts";
import {
  today,
  trainingStore,
  useActiveDog,
  useProgress,
  useTrainingState,
} from "@/lib/training/store";
import { cn } from "@/lib/utils";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { useCopy } from "@/i18n";


const copy = {
  en: {
    allLessons: "\u2190 All lessons",
    training: "Training",
    min: "min",
    inProgress: "In progress",
    youllNeed: "You'll need",
    howTo: "How to do it",
    step: "Step",
    illustration: "Illustration",
    buildingUp: "Building it up",
    buildingUpLead:
      "Move on when the step before feels easy. If it wobbles, go back one \u2014 that isn't failing, it's just how learning goes.",
    howDidItGo: "How did it go?",
    tellUsWhere: (name: string) =>
      `Tell us where ${name} is with this. It's only for you \u2014 it keeps your journey honest and helps us suggest what's next.`,
    feelings: ["That went really well", "Good enough for today", "We need more practice"] as const,
    logged: "Logged. Nice work \u2014 that's another session together.",
    noteLabel: "Anything you want to remember for next time?",
    notePlaceholder: "Better in the hallway than the garden.",
    noDogLead:
      "Tell us about your dog and we'll keep track of what you've worked on, and suggest what to try next.",
    tellUsAboutDog: "Tell us about your dog",
    nextUp: "A good one to do next",
    whileYouTrain: "While you train",
    whileYouTrainLead: "Keep it short and finish on a good one.",
    heroAlt: (title: string) => `${title} \u2014 a dog and their person practising together`,
    notFoundTitle: "We couldn't find that lesson.",
    notFoundBody:
      "It may have moved. Have a look through the library \u2014 whatever you were after is probably in there.",
    seeEvery: "See every lesson",
  },
  no: {
    allLessons: "\u2190 Alle leksjoner",
    training: "Trening",
    min: "min",
    inProgress: "P\u00e5g\u00e5r",
    youllNeed: "Du trenger",
    howTo: "Slik gj\u00f8r du det",
    step: "Steg",
    illustration: "Illustrasjon",
    buildingUp: "Bygg det opp",
    buildingUpLead:
      "G\u00e5 videre n\u00e5r forrige steg sitter. Vakler det, g\u00e5 ett steg tilbake \u2014 det er ikke \u00e5 mislykkes, det er bare slik l\u00e6ring fungerer.",
    howDidItGo: "Hvordan gikk det?",
    tellUsWhere: (name: string) =>
      `Fortell hvor ${name} er med dette. Det er bare for deg \u2014 det holder reisen \u00e6rlig og hjelper oss \u00e5 foresl\u00e5 hva som passer videre.`,
    feelings: ["Det gikk veldig bra", "Bra nok for i dag", "Vi trenger mer \u00f8ving"] as const,
    logged: "Lagret. Bra jobba \u2014 nok en \u00f8kt sammen.",
    noteLabel: "Noe du vil huske til neste gang?",
    notePlaceholder: "Bedre i gangen enn i hagen.",
    noDogLead:
      "Fortell oss om hunden din, s\u00e5 holder vi styr p\u00e5 hva dere har jobbet med og foresl\u00e5r hva dere kan pr\u00f8ve videre.",
    tellUsAboutDog: "Fortell oss om hunden din",
    nextUp: "En fin \u00e9n \u00e5 ta etterp\u00e5",
    whileYouTrain: "Mens dere trener",
    whileYouTrainLead: "Hold det kort og avslutt p\u00e5 noe bra.",
    heroAlt: (title: string) => `${title} \u2014 en hund og eieren \u00f8ver sammen`,
    notFoundTitle: "Vi fant ikke den leksjonen.",
    notFoundBody:
      "Den kan ha flyttet p\u00e5 seg. Ta en titt i biblioteket \u2014 det du var ute etter ligger nok der.",
    seeEvery: "Se alle leksjoner",
  },
} as const;

export const Route = createFileRoute("/train/lessons/$lessonId")({
  loader: ({ params }) => {
    const lesson = getLesson(params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Lesson not found | DoggMatch" }, { name: "robots", content: "noindex" }],
      };
    }
    const { lesson } = loaderData;
    const title = `${lesson.title} — Train Your Dog | DoggMatch`;
    return {
      meta: [
        { title },
        { name: "description", content: lesson.promise },
        { property: "og:title", content: title },
        { property: "og:description", content: lesson.promise },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: lesson.promise },
      ],
      links: seoLinks(`/train/lessons/${lesson.id}`),
    };
  },
  notFoundComponent: LessonNotFound,
  component: LessonPage,
});

function LessonPage() {
  const { lesson } = Route.useLoaderData();
  const c = useCopy(copy);
  const dog = useActiveDog();
  const progress = useProgress(dog?.id);
  const state = useTrainingState();
  const status: SkillStatus = progress[lesson.id] ?? "not-started";
  const [note, setNote] = useState(state.notes[lesson.id] ?? "");
  const [logged, setLogged] = useState(false);
  const category = getTrainingCategories().find((c) => c.id === lesson.category);
  const next = lesson.nextLessonId ? getLessonsById()[lesson.nextLessonId] : undefined;

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: lesson.title,
    description: lesson.promise,
    totalTime: `PT${lesson.duration}M`,
    supply: lesson.equipment.map((s) => ({ "@type": "HowToSupply", name: s })),
    step: lesson.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };

  function log(feeling: "great" | "good" | "more-practice") {
    trainingStore.logSession({ lessonId: lesson.id, day: today(), feeling });
    setLogged(true);
  }

  return (
    <article className="pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />

      <header className="container-page pt-28 md:pt-36">
        <Link
          to="/train/library"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {c.allLessons}
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>{category?.title ?? c.training}</Eyebrow>
            <h1 className="display-lg mt-5">{lesson.title}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {lesson.promise}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <Badge>
                {lesson.duration} {c.min}
              </Badge>
              <Badge>{levelLabel(lesson.level)}</Badge>
              {status !== "not-started" && <Badge tone="accent">{c.inProgress}</Badge>}
            </div>
            {lesson.equipment.length > 0 && (
              <p className="mt-6 text-[0.9375rem] text-muted-foreground">
                {c.youllNeed}: {lesson.equipment.join(", ")}.
              </p>
            )}
          </div>
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={lessonHeroes[lesson.id] ?? lessonHeroes["recall"]}
              alt={c.heroAlt(lesson.title)}
              width={1600}
              height={1000}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="container-page mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
        <div>
          <h2 className="display-md">{c.howTo}</h2>
          <ol className="mt-10 space-y-14">
            {lesson.steps.map((step, i) => (
              <li key={step.title} className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-center">
                <div>
                  <span className="font-display text-sm tabular-nums text-accent">
                    {c.step} {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
                {step.visual && stepVisuals[step.visual] && (
                  <StepFigure
                    src={stepVisuals[step.visual]!}
                    alt={`${c.illustration}: ${step.title}`}
                  />
                )}
              </li>
            ))}
          </ol>

          {lesson.oneThing && (
            <aside className="mt-16 rounded-[1.5rem] border border-accent/40 bg-accent-soft/60 p-8">
              <h2 className="font-display text-xl leading-tight tracking-tight">
                {lesson.oneThing.title}
              </h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{lesson.oneThing.body}</p>
            </aside>
          )}

          {lesson.stages && (
            <section className="mt-16">
              <h2 className="display-md">{c.buildingUp}</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                {c.buildingUpLead}
              </p>
              <ol className="mt-8 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
                {lesson.stages.map((s, i) => (
                  <li key={s.label} className="flex gap-5 bg-background p-6">
                    <span className="font-display text-sm tabular-nums text-accent">{i + 1}</span>
                    <div>
                      <h3 className="font-display text-lg leading-tight">{s.label}</h3>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {lesson.safetyNote && (
            <p className="mt-12 rounded-2xl border border-border bg-surface p-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {lesson.safetyNote}
            </p>
          )}

          <section className="mt-16 rounded-[1.5rem] border border-border bg-card p-8">
            <h2 className="display-md">{c.howDidItGo}</h2>
            {dog ? (
              <>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {c.tellUsWhere(dog.name)}
                </p>
                <div className="mt-6">
                  <StatusPicker
                    value={status}
                    onChange={(s) => trainingStore.setStatus(dog.id, lesson.id, s)}
                  />
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {(
                    [
                      ["great", c.feelings[0]],
                      ["good", c.feelings[1]],
                      ["more-practice", c.feelings[2]],
                    ] as const
                  ).map(([value, label]) => (
                    <Button key={value} tone="outline" onClick={() => log(value)}>
                      {label}
                    </Button>
                  ))}
                </div>
                {logged && (
                  <p className="mt-4 text-[0.9375rem] text-accent">
                    {c.logged}
                  </p>
                )}
                <label className="mt-8 block">
                  <span className="text-sm text-muted-foreground">
                    {c.noteLabel}
                  </span>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onBlur={() => trainingStore.saveNote(lesson.id, note)}
                    rows={3}
                    placeholder={c.notePlaceholder}
                    className="mt-2 w-full rounded-2xl border border-border bg-background p-4 leading-relaxed outline-none transition-colors focus:border-accent"
                  />
                </label>
              </>
            ) : (
              <>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {c.noDogLead}
                </p>
                <div className="mt-6">
                  <ButtonLink to="/train/setup">
                    {c.tellUsAboutDog}
                    <Arrow />
                  </ButtonLink>
                </div>
              </>
            )}
          </section>

          {next && (
            <div className="mt-12">
              <p className="text-sm text-muted-foreground">{c.nextUp}</p>
              <Link
                to="/train/lessons/$lessonId"
                params={{ lessonId: next.id }}
                className={cn(
                  "group mt-3 flex items-center justify-between gap-6 rounded-2xl border border-border p-6",
                  "transition-colors hover:border-border-strong hover:bg-surface/60",
                )}
              >
                <span>
                  <span className="block font-display text-xl leading-tight tracking-tight">
                    {next.title}
                  </span>
                  <span className="mt-1 block text-[0.9375rem] text-muted-foreground">
                    {next.promise}
                  </span>
                </span>
                <Arrow />
              </Link>
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.5rem] border border-border bg-surface p-7">
            <h2 className="font-display text-lg leading-tight tracking-tight">{c.whileYouTrain}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {c.whileYouTrainLead}
            </p>
            <div className="mt-6">
              <SessionTimer minutes={lesson.duration} />
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <TreatCounter />
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

function LessonNotFound() {
  const c = useCopy(copy);
  return (
    <div className="container-page pt-40 pb-32 text-center">
      <h1 className="display-lg">{c.notFoundTitle}</h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
        {c.notFoundBody}
      </p>
      <div className="mt-8 flex justify-center">
        <ButtonLink to="/train/library">
          {c.seeEvery}
          <Arrow />
        </ButtonLink>
      </div>
    </div>
  );
}
