import { Link, createFileRoute } from "@tanstack/react-router";
import { useCopy, useT } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { LessonCard } from "@/components/dogmatch/training/parts";
import { getTrainingCategories } from "@/data/training/categories";
import { categoryImages, trainingImages } from "@/data/training/images";
import { getLessons } from "@/data/training/lessons";
import { todaysPlan, getAgeFocus } from "@/lib/training/plan";
import {
  dailyBudget,
  encouragement,
  progressSummary,
  weeklyPlan,
} from "@/lib/training/schedule";
import { ProgressOverview, WeekPlan, WeekPlanEmpty } from "@/components/dogmatch/training/plan-parts";
import { today, useActiveDog, useProgress, useTrainingState } from "@/lib/training/store";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const copy = {
  en: { welcomeUser: (name: string) => `Good to see you, ${name}'s human.` },
  no: { welcomeUser: (name: string) => `Godt å se deg, ${name} sin menneske.` },
  pl: { welcomeUser: (name: string) => `Miło cię widzieć, człowieku ${name}.` },
  dk: { welcomeUser: (name: string) => `Godt at se dig, ${name}s menneske.` },
  se: { welcomeUser: (name: string) => `Kul att se dig, ${name}s människa.` },
  fi: { welcomeUser: (name: string) => `Kiva nähdä sinut taas – ${name} odottaa jo!` },
  de: { welcomeUser: (name: string) => `Schön, dich zu sehen, Mensch von ${name}.` },
  fr: { welcomeUser: (name: string) => `Ravi de te revoir, humain de ${name}.` },
  nl: { welcomeUser: (name: string) => `Fijn je te zien, mens van ${name}.` },
} as const;

const weekCopy = {
  en: {
    weekTitle: "The week ahead",
    weekBody: (m: number) =>
      `Built around ${m} minutes a day — your dog's age and size, and the time you told us you have. Miss a day and nothing breaks; it simply moves along with you.`,
    weekBodyGuest:
      "Tell us your dog's age, size and how much time you have, and we'll lay out a simple week you can actually keep.",
    progressTitle: "How it's going",
  },
  no: {
    weekTitle: "Uken som kommer",
    weekBody: (m: number) =>
      `Bygget rundt ${m} minutter om dagen — hundens alder og størrelse, og tiden du sa du har. Hopper du over en dag, ryker ingenting; planen flytter seg bare med deg.`,
    weekBodyGuest:
      "Fortell oss hundens alder, størrelse og hvor mye tid du har, så legger vi opp en enkel uke du faktisk klarer å holde.",
    progressTitle: "Hvordan det går",
  },
  pl: {
    weekTitle: "Nadchodzący tydzień",
    weekBody: (m: number) =>
      `Ułożony wokół ${m} minut dziennie — wieku i wielkości psa oraz czasu, który masz. Opuszczony dzień niczego nie psuje; plan po prostu przesuwa się razem z tobą.`,
    weekBodyGuest:
      "Powiedz nam, ile pies ma lat, jak jest duży i ile masz czasu, a ułożymy prosty tydzień, który naprawdę utrzymasz.",
    progressTitle: "Jak idzie",
  },
} as const;

const title = "Train Your Dog — Small sessions, clear steps | DoggMatch";
const description =
  "Kind, reward-based training you can actually do at home. Short sessions, clear steps and pictures that show you exactly what to do.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Tren hunden din — korte økter, tydelige steg | DoggMatch",
    description:
      "Vennlig, belønningsbasert trening du faktisk får til hjemme. Korte økter, tydelige steg og bilder som viser deg nøyaktig hva du skal gjøre.",
  },
  pl: {
    title: "Szkolenie psa — krótkie sesje, jasne kroki | DoggMatch",
    description:
      "Łagodne szkolenie oparte na nagrodach, które naprawdę zrobisz w domu. Krótkie sesje, jasne kroki i zdjęcia pokazujące dokładnie, co robić.",
  },
  dk: {
    title: "Træn din hund — korte sessioner, tydelige trin | DoggMatch",
    description:
      "Venlig, belønningsbaseret træning du faktisk kan gøre derhjemme. Korte sessioner, tydelige trin og billeder, der viser dig præcis, hvad du skal gøre.",
  },
  se: {
    title: "Träna din hund — korta pass, tydliga steg | DoggMatch",
    description:
      "Snäll, belöningsbaserad träning du faktiskt orkar göra hemma. Korta pass, tydliga steg och bilder som visar precis vad du ska göra.",
  },
  fi: {
    title: "Kouluta koiraasi — lyhyitä harjoituksia, selkeitä askeleita | DoggMatch",
    description:
      "Ystävällistä, palkitsevaa koulutusta, jota oikeasti ehtii tehdä kotona. Lyhyitä harjoituksia, selkeitä askeleita ja kuvia, jotka näyttävät tarkalleen, mitä tehdä.",
  },
  de: {
    title: "Hundetraining — kurze Einheiten, klare Schritte | DoggMatch",
    description:
      "Freundliches, belohnungsbasiertes Training, das du wirklich zu Hause schaffst. Kurze Einheiten, klare Schritte und Bilder, die genau zeigen, was zu tun ist.",
  },
  fr: {
    title: "Éduquez votre chien — séances courtes, étapes claires | DoggMatch",
    description:
      "Une éducation bienveillante et positive que vous pouvez vraiment faire à la maison. Des séances courtes, des étapes claires et des images qui montrent exactement quoi faire.",
  },
  nl: {
    title: "Train je hond — korte sessies, duidelijke stappen | DoggMatch",
    description:
      "Vriendelijke, beloningsgerichte training die je echt thuis volhoudt. Korte sessies, duidelijke stappen en beelden die precies laten zien wat je moet doen.",
  },
};

export const Route = createFileRoute("/{-$lang}/train/")({
  head: (ctx) => localizedHead(ctx, "/train", seoCopy),
  component: TrainHome,
});

function TrainHome() {
  const t = useT();
  const c = useCopy(copy);
  const dog = useActiveDog();
  const state = useTrainingState();
  const progress = useProgress(dog?.id);
  const plan = todaysPlan(dog, progress, today());
  const ageFocus = getAgeFocus();
  const planCopy = useCopy(weekCopy);
  const week = weeklyPlan(dog, progress, state.sessions, today());
  const summary = progressSummary(state.sessions, progress, getLessons().length, today());

  return (
    <div className="pb-24">
      {/* hero */}
      <section className="relative">
        <div className="container-page pt-28 md:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div className="animate-rise">
              <Eyebrow>{t.train.eyebrow}</Eyebrow>
              <h1 className="display-xl mt-6">{t.train.heroTitle}</h1>
              <ShareBar className="mt-6" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {t.train.heroBody}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {dog ? (
                  <ButtonLink
                    to={withLangPrefix("/train/lessons/$lessonId")}
                    params={{ lessonId: plan[0]?.lesson.id ?? "recall" } as never}
                    size="lg"
                  >
                    {t.train.startToday}
                    <Arrow />
                  </ButtonLink>
                ) : (
                  <ButtonLink to={withLangPrefix("/train/setup")} size="lg">
                    {t.train.setupCta}
                    <Arrow />
                  </ButtonLink>
                )}
                <ButtonLink to={withLangPrefix("/train/library")} tone="outline" size="lg">
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
                {dog ? c.welcomeUser(dog.name) : t.train.todayTitleGuest}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                {dog ? t.train.todayBody : t.train.todayBodyGuest}
              </p>
            </div>
            {dog && (
              <Link
                to={withLangPrefix("/train/setup")}
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
                  to={withLangPrefix("/train/lessons/$lessonId")}
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

          {/* the week ahead, shaped by age, size and the time you actually have */}
          <div className="mt-16">
            <h3 className="display-md">{planCopy.weekTitle}</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              {dog ? planCopy.weekBody(dailyBudget(dog)) : planCopy.weekBodyGuest}
            </p>
            <div className="mt-8">{dog ? <WeekPlan days={week} /> : <WeekPlanEmpty />}</div>
          </div>

          {dog && (
            <div className="mt-16">
              <h3 className="display-md">{planCopy.progressTitle}</h3>
              <div className="mt-8">
                <ProgressOverview summary={summary} note={encouragement(summary)} />
              </div>
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
              to={withLangPrefix("/train/library")}
              className="group flex items-center gap-2 text-[0.9375rem] text-foreground"
            >
              {t.train.libraryCta}
              <Arrow />
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {getTrainingCategories().slice(0, 4).map((c) => (
              <li key={c.id}>
                <Link
                  to={withLangPrefix("/train/library")}
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
            {getLessons().slice(0, 3).map((l) => (
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
              <ButtonLink to={withLangPrefix("/train/journey")} tone="outline">
                {t.train.journeyCta}
                <Arrow />
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-surface p-8 md:p-10">
            <h2 className="display-md">{t.train.safetyTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.train.safetyBody}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.train.safetyBody2}</p>
            <div className="mt-6">
              <SourcesLink category="behaviour" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}


