import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { LessonCard, levelLabels } from "@/components/dogmatch/training/parts";
import { trainingCategories } from "@/data/training/categories";
import { categoryImages, trainingImages } from "@/data/training/images";
import { lessons } from "@/data/training/lessons";
import { todaysPlan, ageFocus } from "@/lib/training/plan";
import { streakDays, today, useActiveDog, useProgress, useTrainingState } from "@/lib/training/store";

const title = "Train Your Dog — Small sessions, clear steps | DoggMatch";
const description =
  "Kind, reward-based training you can actually do at home. Short sessions, clear steps and pictures that show you exactly what to do.";

export const Route = createFileRoute("/train/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/train" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/train" }],
  }),
  component: TrainHome,
});

function TrainHome() {
  const t = useT();
  const dog = useActiveDog();
  const state = useTrainingState();
  const progress = useProgress(dog?.id);
  const plan = todaysPlan(dog, progress, today());
  const learned = Object.values(progress).filter((s) => s === "learned").length;
  const streak = streakDays(state.sessions);

  return (
    <div className="pb-24">
      {/* hero */}
      <section className="relative">
        <div className="container-page pt-28 md:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div className="animate-rise">
              <Eyebrow>{t.train.eyebrow}</Eyebrow>
              <h1 className="display-xl mt-6">{t.train.heroTitle}</h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {t.train.heroBody}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to={dog ? "/train/lessons/$lessonId" : "/train/setup"} params={{ lessonId: plan[0]?.lesson.id ?? "recall" } as never} size="lg">
                  {dog ? t.train.startToday : t.train.setupCta}
                  <Arrow />
                </ButtonLink>
                <ButtonLink to="/train/library" tone="outline" size="lg">
                  {t.train.exploreCta}
                </ButtonLink>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{t.train.heroCaption}</p>
            </div>
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={trainingImages.trainHero}
                alt="A woman crouching in a park, smiling at her dog"
                width={1600}
                height={1000}
                className="aspect-[16/11] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* today */}
      <Section>
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>{t.train.todayEyebrow}</Eyebrow>
              <h2 className="display-md mt-5">
                {dog ? `Good to see you, ${dog.name}'s human.` : t.train.todayTitleGuest}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                {dog ? t.train.todayBody : t.train.todayBodyGuest}
              </p>
            </div>
            {dog && (
              <Link
                to="/train/setup"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                {t.train.editDog}
              </Link>
            )}
          </div>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {plan.map((item, i) => (
              <li key={item.lesson.id} className="bg-background">
                <Link
                  to="/train/lessons/$lessonId"
                  params={{ lessonId: item.lesson.id }}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-surface/60"
                >
                  <span className="font-display text-sm tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-tight tracking-tight">
                    {item.lesson.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {item.reason}
                  </p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm text-foreground">
                    {item.lesson.duration} min
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          {dog && (
            <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-3">
              <Stat value={String(state.sessions.length)} label={t.train.statSessions} />
              <Stat value={String(learned)} label={t.train.statSkills} />
              <Stat value={String(streak)} label={t.train.statStreak} />
            </div>
          )}
        </div>
      </Section>

      {/* signature */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
            <div>
              <h2 className="display-lg max-w-md">{t.train.signatureTitle}</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                {t.train.signatureBody}
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6">
                {t.train.signatureStats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl tracking-tight text-accent">{s.value}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={trainingImages.trainRecall}
                alt="A dog running happily back to their person across a field"
                loading="lazy"
                width={1600}
                height={1000}
                className="aspect-[16/11] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* categories */}
      <Section>
        <div className="container-page">
          <Eyebrow>{t.train.libraryEyebrow}</Eyebrow>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-md max-w-lg">{t.train.libraryTitle}</h2>
            <Link
              to="/train/library"
              className="group flex items-center gap-2 text-[0.9375rem] text-foreground"
            >
              {t.train.libraryCta}
              <Arrow />
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingCategories.slice(0, 4).map((c) => (
              <li key={c.id}>
                <Link
                  to="/train/library"
                  hash={c.id}
                  className="group block overflow-hidden rounded-[1.25rem]"
                >
                  <img
                    src={categoryImages[c.id]}
                    alt=""
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                  <h3 className="mt-4 font-display text-lg leading-tight tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* a full lesson */}
      <Section className="pt-0">
        <div className="container-page">
          <Eyebrow>{t.train.pickedEyebrow}</Eyebrow>
          <h2 className="display-md mt-5 max-w-lg">{t.train.pickedTitle}</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.slice(0, 3).map((l) => (
              <li key={l.id}>
                <LessonCard lesson={l} status={progress[l.id]} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* age paths */}
      <Section className="pt-0">
        <div className="container-page">
          <Eyebrow>{t.train.agesEyebrow}</Eyebrow>
          <h2 className="display-md mt-5 max-w-xl">{t.train.agesTitle}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t.train.agesBody}</p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(ageFocus) as (keyof typeof ageFocus)[]).map((k) => (
              <li key={k} className="bg-background p-8">
                <h3 className="font-display text-lg leading-tight">{ageFocus[k].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ageFocus[k].body}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {ageFocus[k].points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent">
                        ·
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* journey + honesty */}
      <Section className="pt-0">
        <div className="container-page grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <h2 className="display-md">{t.train.journeyTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.train.journeyBody}</p>
            <div className="mt-8">
              <ButtonLink to="/train/journey" tone="outline">
                {t.train.journeyCta}
                <Arrow />
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-surface p-8 md:p-10">
            <h2 className="display-md">{t.train.safetyTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.train.safetyBody}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.train.safetyBody2}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl tabular-nums tracking-tight text-accent">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export { levelLabels };
