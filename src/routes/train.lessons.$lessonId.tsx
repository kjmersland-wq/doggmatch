import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getLesson, getLessonsById } from "@/data/training/lessons";
import { lessonHeroes, stepVisuals } from "@/data/training/images";
import { trainingCategories } from "@/data/training/categories";
import type { SkillStatus } from "@/data/training/types";
import { Arrow, Badge, Button, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import {
  levelLabels,
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
  const dog = useActiveDog();
  const progress = useProgress(dog?.id);
  const state = useTrainingState();
  const status: SkillStatus = progress[lesson.id] ?? "not-started";
  const [note, setNote] = useState(state.notes[lesson.id] ?? "");
  const [logged, setLogged] = useState(false);
  const category = trainingCategories.find((c) => c.id === lesson.category);
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
          ← All lessons
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>{category?.title ?? "Training"}</Eyebrow>
            <h1 className="display-lg mt-5">{lesson.title}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {lesson.promise}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <Badge>{lesson.duration} min</Badge>
              <Badge>{levelLabels[lesson.level]}</Badge>
              {status !== "not-started" && <Badge tone="accent">In progress</Badge>}
            </div>
            {lesson.equipment.length > 0 && (
              <p className="mt-6 text-[0.9375rem] text-muted-foreground">
                You'll need: {lesson.equipment.join(", ")}.
              </p>
            )}
          </div>
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={lessonHeroes[lesson.id] ?? lessonHeroes["recall"]}
              alt={`${lesson.title} — a dog and their person practising together`}
              width={1600}
              height={1000}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="container-page mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
        <div>
          <h2 className="display-md">How to do it</h2>
          <ol className="mt-10 space-y-14">
            {lesson.steps.map((step, i) => (
              <li key={step.title} className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-center">
                <div>
                  <span className="font-display text-sm tabular-nums text-accent">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
                {step.visual && stepVisuals[step.visual] && (
                  <StepFigure
                    src={stepVisuals[step.visual]!}
                    alt={`Illustration: ${step.title}`}
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
              <h2 className="display-md">Building it up</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                Move on when the step before feels easy. If it wobbles, go back one — that isn't
                failing, it's just how learning goes.
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
            <h2 className="display-md">How did it go?</h2>
            {dog ? (
              <>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Tell us where {dog.name} is with this. It's only for you — it keeps your journey
                  honest and helps us suggest what's next.
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
                      ["great", "That went really well"],
                      ["good", "Good enough for today"],
                      ["more-practice", "We need more practice"],
                    ] as const
                  ).map(([value, label]) => (
                    <Button key={value} tone="outline" onClick={() => log(value)}>
                      {label}
                    </Button>
                  ))}
                </div>
                {logged && (
                  <p className="mt-4 text-[0.9375rem] text-accent">
                    Logged. Nice work — that's another session together.
                  </p>
                )}
                <label className="mt-8 block">
                  <span className="text-sm text-muted-foreground">
                    Anything you want to remember for next time?
                  </span>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onBlur={() => trainingStore.saveNote(lesson.id, note)}
                    rows={3}
                    placeholder="Better in the hallway than the garden."
                    className="mt-2 w-full rounded-2xl border border-border bg-background p-4 leading-relaxed outline-none transition-colors focus:border-accent"
                  />
                </label>
              </>
            ) : (
              <>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Tell us about your dog and we'll keep track of what you've worked on, and suggest
                  what to try next.
                </p>
                <div className="mt-6">
                  <ButtonLink to="/train/setup">
                    Tell us about your dog
                    <Arrow />
                  </ButtonLink>
                </div>
              </>
            )}
          </section>

          {next && (
            <div className="mt-12">
              <p className="text-sm text-muted-foreground">A good one to do next</p>
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
            <h2 className="font-display text-lg leading-tight tracking-tight">While you train</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Keep it short and finish on a good one.
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
  return (
    <div className="container-page pt-40 pb-32 text-center">
      <h1 className="display-lg">We couldn't find that lesson.</h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
        It may have moved. Have a look through the library — whatever you were after is probably in
        there.
      </p>
      <div className="mt-8 flex justify-center">
        <ButtonLink to="/train/library">
          See every lesson
          <Arrow />
        </ButtonLink>
      </div>
    </div>
  );
}
