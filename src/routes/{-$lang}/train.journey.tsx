import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import { LessonCard, statusLabel } from "@/components/dogmatch/training/parts";
import { getLessons, getLessonsById } from "@/data/training/lessons";
import type { SkillStatus } from "@/data/training/types";
import { rankLessons } from "@/lib/training/plan";
import { streakDays, useActiveDog, useProgress, useTrainingState } from "@/lib/training/store";
import { useCopy } from "@/i18n";
import { seoLinks } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Your training journey | DoggMatch";
const description =
  "Everything you and your dog have worked on, in one place — what's going well, what needs practice, and what to try next.";

export const Route = createFileRoute("/{-$lang}/train/journey")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "noindex" },
    ],
    links: seoLinks("/train/journey"),
  }),
  component: JourneyPage,
});

const order: SkillStatus[] = ["learned", "getting-there", "practising", "not-started"];

const copy = {
  en: {
    eyebrow: "Your journey",
    titleWithDog: (name: string) => `You and ${name}, so far.`,
    titleGuest: "Your journey together, once you start.",
    guestBody: "Tell us about your dog and we'll keep track of what you've worked on. Nothing leaves this device.",
    guestCta: "Tell us about your dog",
    statSessions: "Sessions together",
    statSkills: "Skills learned",
    statStreak: "Days in a row",
    standingTitle: "Where everything stands",
    nothingYet: "Nothing here yet.",
    recentTitle: "Recent sessions",
    feelingGreat: "Went really well",
    feelingGood: "Good enough",
    feelingMore: "Needs more practice",
    nextTitle: "What to try next",
  },
  no: {
    eyebrow: "Reisen din",
    titleWithDog: (name: string) => `Du og ${name}, så langt.`,
    titleGuest: "Reisen sammen, så snart dere starter.",
    guestBody: "Fortell oss om hunden din, så holder vi oversikt over det dere har jobbet med. Ingenting forlater denne enheten.",
    guestCta: "Fortell oss om hunden din",
    statSessions: "Økter sammen",
    statSkills: "Ferdigheter lært",
    statStreak: "Dager på rad",
    standingTitle: "Slik står det til",
    nothingYet: "Ingenting her ennå.",
    recentTitle: "Siste økter",
    feelingGreat: "Gikk veldig bra",
    feelingGood: "Godt nok",
    feelingMore: "Trenger mer øving",
    nextTitle: "Hva dere kan prøve videre",
  },
  pl: {
    eyebrow: "Twoja podróż",
    titleWithDog: (name: string) => `Ty i ${name}, jak dotąd.`,
    titleGuest: "Wasza wspólna podróż, gdy tylko zaczniecie.",
    guestBody: "Opowiedz nam o swoim psie, a będziemy śledzić, nad czym pracowaliście. Nic nie opuszcza tego urządzenia.",
    guestCta: "Opowiedz nam o swoim psie",
    statSessions: "Sesje razem",
    statSkills: "Poznane umiejętności",
    statStreak: "Dni z rzędu",
    standingTitle: "Jak wygląda sytuacja",
    nothingYet: "Nic tu jeszcze nie ma.",
    recentTitle: "Ostatnie sesje",
    feelingGreat: "Poszło naprawdę dobrze",
    feelingGood: "Wystarczająco dobrze",
    feelingMore: "Potrzeba więcej ćwiczeń",
    nextTitle: "Co warto spróbować dalej",
  },
  dk: {
    eyebrow: "Din rejse",
    titleWithDog: (name: string) => `Dig og ${name}, indtil videre.`,
    titleGuest: "Jeres fælles rejse, når I kommer i gang.",
    guestBody: "Fortæl os om din hund, så holder vi styr på det, I har arbejdet med. Intet forlader denne enhed.",
    guestCta: "Fortæl os om din hund",
    statSessions: "Sessioner sammen",
    statSkills: "Færdigheder lært",
    statStreak: "Dage i træk",
    standingTitle: "Sådan står det til",
    nothingYet: "Her er ikke noget endnu.",
    recentTitle: "Seneste sessioner",
    feelingGreat: "Gik rigtig godt",
    feelingGood: "Godt nok",
    feelingMore: "Har brug for mere øvelse",
    nextTitle: "Hvad I kan prøve næste gang",
  },
  se: {
    eyebrow: "Din resa",
    titleWithDog: (name: string) => `Du och ${name}, hittills.`,
    titleGuest: "Er gemensamma resa, så snart ni sätter igång.",
    guestBody: "Berätta om din hund så håller vi koll på vad ni har jobbat med. Inget lämnar den här enheten.",
    guestCta: "Berätta om din hund",
    statSessions: "Pass tillsammans",
    statSkills: "Färdigheter inlärda",
    statStreak: "Dagar i rad",
    standingTitle: "Så här ser det ut",
    nothingYet: "Inget här än.",
    recentTitle: "Senaste passen",
    feelingGreat: "Gick jättebra",
    feelingGood: "Bra nog",
    feelingMore: "Behöver mer träning",
    nextTitle: "Vad ni kan prova härnäst",
  },
  fi: {
    eyebrow: "Matkasi",
    titleWithDog: (name: string) => `Sinä ja ${name}, tähän mennessä.`,
    titleGuest: "Yhteinen matkanne alkaa, kun aloitatte.",
    guestBody: "Kerro meille koirastasi, niin pidämme kirjaa siitä, mitä olette harjoitelleet. Mikään ei poistu tältä laitteelta.",
    guestCta: "Kerro meille koirastasi",
    statSessions: "Yhteiset harjoitukset",
    statSkills: "Opitut taidot",
    statStreak: "Peräkkäisiä päiviä",
    standingTitle: "Näin tilanne on juuri nyt",
    nothingYet: "Ei vielä mitään.",
    recentTitle: "Viimeisimmät harjoitukset",
    feelingGreat: "Meni tosi hyvin",
    feelingGood: "Ihan hyvin",
    feelingMore: "Kaipaa lisää harjoitusta",
    nextTitle: "Mitä kannattaa kokeilla seuraavaksi",
  },
  de: {
    eyebrow: "Ihre Reise",
    titleWithDog: (name: string) => `Sie und ${name}, bisher.`,
    titleGuest: "Ihre gemeinsame Reise, sobald Sie starten.",
    guestBody: "Erzählen Sie uns von Ihrem Hund, und wir behalten den Überblick über das, woran Sie gearbeitet haben. Nichts verlässt dieses Gerät.",
    guestCta: "Erzählen Sie uns von Ihrem Hund",
    statSessions: "Einheiten zusammen",
    statSkills: "Gelernte Fähigkeiten",
    statStreak: "Tage in Folge",
    standingTitle: "So sieht es gerade aus",
    nothingYet: "Hier ist noch nichts.",
    recentTitle: "Letzte Einheiten",
    feelingGreat: "Lief richtig gut",
    feelingGood: "Gut genug",
    feelingMore: "Braucht mehr Übung",
    nextTitle: "Was Sie als Nächstes ausprobieren können",
  },
  fr: {
    eyebrow: "Votre parcours",
    titleWithDog: (name: string) => `Vous et ${name}, jusqu'ici.`,
    titleGuest: "Votre parcours ensemble, dès que vous commencerez.",
    guestBody: "Parlez-nous de votre chien, et nous suivrons ce sur quoi vous avez travaillé. Rien ne quitte cet appareil.",
    guestCta: "Parlez-nous de votre chien",
    statSessions: "Séances ensemble",
    statSkills: "Compétences acquises",
    statStreak: "Jours consécutifs",
    standingTitle: "Où vous en êtes",
    nothingYet: "Rien ici pour l'instant.",
    recentTitle: "Séances récentes",
    feelingGreat: "Ça s'est vraiment bien passé",
    feelingGood: "Assez bien",
    feelingMore: "A besoin de plus de pratique",
    nextTitle: "Quoi essayer ensuite",
  },
  nl: {
    eyebrow: "Uw reis",
    titleWithDog: (name: string) => `U en ${name}, tot nu toe.`,
    titleGuest: "Uw gezamenlijke reis, zodra u begint.",
    guestBody: "Vertel ons over uw hond, dan houden we bij waar u aan gewerkt heeft. Er verlaat niets dit apparaat.",
    guestCta: "Vertel ons over uw hond",
    statSessions: "Sessies samen",
    statSkills: "Geleerde vaardigheden",
    statStreak: "Dagen op rij",
    standingTitle: "Zo staat het ervoor",
    nothingYet: "Hier staat nog niets.",
    recentTitle: "Recente sessies",
    feelingGreat: "Ging heel goed",
    feelingGood: "Goed genoeg",
    feelingMore: "Heeft meer oefening nodig",
    nextTitle: "Wat u hierna kunt proberen",
  },
} as const;

function JourneyPage() {
  const c = useCopy(copy);
  const dog = useActiveDog();
  const state = useTrainingState();
  const progress = useProgress(dog?.id);
  const recent = [...state.sessions].reverse().slice(0, 8);
  const nextUp = rankLessons(dog, progress)
    .filter((s) => (progress[s.lesson.id] ?? "not-started") !== "learned")
    .slice(0, 3);

  const grouped = order.map((status) => ({
    status,
    items: getLessons().filter((l) => (progress[l.id] ?? "not-started") === status),
  }));

  return (
    <div className="container-page pt-28 pb-28 md:pt-36">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-5 max-w-2xl">{dog ? c.titleWithDog(dog.name) : c.titleGuest}</h1>

      {!dog ? (
        <>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{c.guestBody}</p>
          <div className="mt-8">
            <ButtonLink to={withLangPrefix("/train/setup")} size="lg">
              {c.guestCta}
              <Arrow />
            </ButtonLink>
          </div>
        </>
      ) : (
        <>
          <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-3">
            <Stat value={String(state.sessions.length)} label={c.statSessions} />
            <Stat
              value={String(Object.values(progress).filter((s) => s === "learned").length)}
              label={c.statSkills}
            />
            <Stat value={String(streakDays(state.sessions))} label={c.statStreak} />
          </div>

          <section className="mt-20">
            <h2 className="display-md">{c.standingTitle}</h2>
            <div className="mt-8 space-y-10">
              {grouped.map((g) => (
                <div key={g.status}>
                  <h3 className="font-display text-lg tracking-tight">
                    {statusLabel(g.status)}{" "}
                    <span className="text-muted-foreground">({g.items.length})</span>
                  </h3>
                  {g.items.length === 0 ? (
                    <p className="mt-2 text-[0.9375rem] text-muted-foreground">{c.nothingYet}</p>
                  ) : (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((l) => (
                        <li
                          key={l.id}
                          className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                        >
                          {l.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {recent.length > 0 && (
            <section className="mt-20">
              <h2 className="display-md">{c.recentTitle}</h2>
              <ul className="mt-8 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
                {recent.map((s, i) => (
                  <li
                    key={`${s.lessonId}-${s.day}-${i}`}
                    className="flex flex-wrap items-center justify-between gap-3 bg-background p-6"
                  >
                    <span className="font-display text-lg tracking-tight">
                      {getLessonsById()[s.lessonId]?.title ?? s.lessonId}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {s.day} ·{" "}
                      {s.feeling === "great" ? c.feelingGreat : s.feeling === "good" ? c.feelingGood : c.feelingMore}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-20">
            <h2 className="display-md">{c.nextTitle}</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nextUp.map((s) => (
                <li key={s.lesson.id}>
                  <LessonCard lesson={s.lesson} status={progress[s.lesson.id]} note={s.reason} />
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
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
