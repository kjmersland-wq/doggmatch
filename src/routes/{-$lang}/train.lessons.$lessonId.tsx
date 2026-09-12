import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getLesson, getLessonsById } from "@/data/training/lessons";
import { lessonHeroes, stepVisuals } from "@/data/training/images";
import { getTrainingCategories } from "@/data/training/categories";
import type { SkillStatus } from "@/data/training/types";
import { Arrow, Badge, Button, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import { withLangPrefix } from "@/lib/localized-path";
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
import { seoLinks, breadcrumbLd } from "@/lib/seo";
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
  pl: {
    allLessons: "\u2190 Wszystkie lekcje",
    training: "Szkolenie",
    min: "min",
    inProgress: "W trakcie",
    youllNeed: "Będziesz potrzebować",
    howTo: "Jak to zrobić",
    step: "Krok",
    illustration: "Ilustracja",
    buildingUp: "Budowanie umiejętności",
    buildingUpLead:
      "Przejdź dalej, gdy poprzedni krok jest już łatwy. Jeśli się chwieje, wróć o krok \u2014 to nie porażka, tak po prostu wygląda nauka.",
    howDidItGo: "Jak poszło?",
    tellUsWhere: (name: string) =>
      `Powiedz nam, na jakim etapie jest ${name}. To tylko dla ciebie \u2014 dzięki temu twoja droga pozostaje szczera i pomaga nam zaproponować kolejny krok.`,
    feelings: ["Poszło naprawdę dobrze", "Wystarczająco dobrze jak na dziś", "Potrzebujemy więcej ćwiczeń"] as const,
    logged: "Zapisano. Świetna robota \u2014 to kolejna wspólna sesja.",
    noteLabel: "Coś, co warto zapamiętać na następny raz?",
    notePlaceholder: "Lepiej w korytarzu niż w ogrodzie.",
    noDogLead:
      "Powiedz nam o swoim psie, a będziemy śledzić, nad czym pracowaliście, i zaproponujemy, co spróbować dalej.",
    tellUsAboutDog: "Opowiedz nam o swoim psie",
    nextUp: "Dobra lekcja na kolejny krok",
    whileYouTrain: "Podczas treningu",
    whileYouTrainLead: "Trzymaj się krótko i zakończ na dobrej nucie.",
    heroAlt: (title: string) => `${title} \u2014 pies i jego opiekun ćwiczą razem`,
    notFoundTitle: "Nie mogliśmy znaleźć tej lekcji.",
    notFoundBody:
      "Mogła zostać przeniesiona. Zajrzyj do biblioteki \u2014 to, czego szukasz, prawdopodobnie tam jest.",
    seeEvery: "Zobacz wszystkie lekcje",
  },
  dk: {
    allLessons: "← Alle lektioner",
    training: "Træning",
    min: "min",
    inProgress: "I gang",
    youllNeed: "Du skal bruge",
    howTo: "Sådan gør du",
    step: "Trin",
    illustration: "Illustration",
    buildingUp: "Byg det op",
    buildingUpLead:
      "Gå videre, når det forrige trin føles nemt. Vakler det, så gå ét trin tilbage — det er ikke at fejle, det er bare sådan læring foregår.",
    howDidItGo: "Hvordan gik det?",
    tellUsWhere: (name: string) =>
      `Fortæl os, hvor ${name} er med dette. Det er kun til dig — det holder jeres rejse ærlig og hjælper os med at foreslå, hvad der er næste skridt.`,
    feelings: ["Det gik rigtig godt", "Godt nok for i dag", "Vi har brug for mere øvelse"] as const,
    logged: "Registreret. Flot klaret — endnu en session sammen.",
    noteLabel: "Noget du vil huske til næste gang?",
    notePlaceholder: "Bedre i gangen end i haven.",
    noDogLead:
      "Fortæl os om din hund, så holder vi styr på det, I har arbejdet med, og foreslår, hvad I kan prøve næste gang.",
    tellUsAboutDog: "Fortæl os om din hund",
    nextUp: "En god én at tage bagefter",
    whileYouTrain: "Mens I træner",
    whileYouTrainLead: "Hold det kort, og slut af på noget godt.",
    heroAlt: (title: string) => `${title} — en hund og deres menneske øver sammen`,
    notFoundTitle: "Vi kunne ikke finde den lektion.",
    notFoundBody:
      "Den kan være flyttet. Kig i biblioteket — det, du ledte efter, ligger nok der.",
    seeEvery: "Se alle lektioner",
  },
  se: {
    allLessons: "← Alla lektioner",
    training: "Träning",
    min: "min",
    inProgress: "Pågår",
    youllNeed: "Du behöver",
    howTo: "Så här gör du",
    step: "Steg",
    illustration: "Illustration",
    buildingUp: "Bygg upp det",
    buildingUpLead:
      "Gå vidare när föregående steg känns lätt. Om det vacklar, gå tillbaka ett steg — det är inte att misslyckas, det är bara så inlärning fungerar.",
    howDidItGo: "Hur gick det?",
    tellUsWhere: (name: string) =>
      `Berätta var ${name} befinner sig med det här. Det är bara för dig — det håller er resa ärlig och hjälper oss föreslå vad som passar härnäst.`,
    feelings: ["Det gick jättebra", "Bra nog för idag", "Vi behöver mer träning"] as const,
    logged: "Loggat. Snyggt jobbat — ännu ett pass tillsammans.",
    noteLabel: "Något du vill komma ihåg till nästa gång?",
    notePlaceholder: "Bättre i hallen än i trädgården.",
    noDogLead:
      "Berätta om din hund så håller vi koll på vad ni har jobbat med och föreslår vad ni kan prova härnäst.",
    tellUsAboutDog: "Berätta om din hund",
    nextUp: "En bra en att göra härnäst",
    whileYouTrain: "Medan ni tränar",
    whileYouTrainLead: "Håll det kort och avsluta på något bra.",
    heroAlt: (title: string) => `${title} — en hund och dess människa övar tillsammans`,
    notFoundTitle: "Vi kunde inte hitta den lektionen.",
    notFoundBody:
      "Den kan ha flyttats. Ta en titt i biblioteket — det du letade efter finns nog där.",
    seeEvery: "Se alla lektioner",
  },
  fi: {
    allLessons: "← Kaikki oppitunnit",
    training: "Koulutus",
    min: "min",
    inProgress: "Kesken",
    youllNeed: "Tarvitset",
    howTo: "Näin teet sen",
    step: "Vaihe",
    illustration: "Kuvitus",
    buildingUp: "Rakenna se vaiheittain",
    buildingUpLead:
      "Siirry eteenpäin, kun edellinen vaihe tuntuu helpolta. Jos se horjuu, palaa yksi vaihe taaksepäin — se ei ole epäonnistumista, vaan siltä oppiminen näyttää.",
    howDidItGo: "Miten meni?",
    tellUsWhere: (name: string) =>
      `Kerro, missä vaiheessa ${name} on tämän kanssa. Tieto on vain sinua varten — se pitää matkanne rehellisenä ja auttaa meitä ehdottamaan seuraavaa askelta.`,
    feelings: ["Tämä meni tosi hyvin", "Riittävän hyvin tälle päivälle", "Tarvitsemme lisää harjoitusta"] as const,
    logged: "Kirjattu. Hyvää työtä — taas yksi yhteinen harjoitus.",
    noteLabel: "Jotain, minkä haluat muistaa ensi kertaa varten?",
    notePlaceholder: "Sujui paremmin eteisessä kuin pihalla.",
    noDogLead:
      "Kerro meille koirastasi, niin pidämme kirjaa siitä, mitä olette harjoitelleet, ja ehdotamme, mitä kokeilla seuraavaksi.",
    tellUsAboutDog: "Kerro meille koirastasi",
    nextUp: "Hyvä seuraava harjoitus",
    whileYouTrain: "Harjoituksen aikana",
    whileYouTrainLead: "Pidä se lyhyenä ja lopeta hyvään hetkeen.",
    heroAlt: (title: string) => `${title} — koira ja sen ihminen harjoittelevat yhdessä`,
    notFoundTitle: "Emme löytäneet sitä oppituntia.",
    notFoundBody:
      "Se on voinut siirtyä. Käy kirjastossa — etsimäsi asia löytyy varmasti sieltä.",
    seeEvery: "Katso kaikki oppitunnit",
  },
} as const;

export const Route = createFileRoute("/{-$lang}/train/lessons/$lessonId")({
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
      scripts: [
        breadcrumbLd([
          { name: "DoggMatch", path: "/" },
          { name: "Train Your Dog", path: "/train" },
          { name: "Library", path: "/train/library" },
          { name: lesson.title, path: `/train/lessons/${lesson.id}` },
        ]),
      ],
    };
  },
  notFoundComponent: LessonNotFound,
  component: LessonPage,
});

function LessonPage() {
  const { lessonId } = Route.useParams();
  const { lesson: loaded } = Route.useLoaderData();
  const c = useCopy(copy);
  // Read the lesson during render so it follows the reader's language.
  const lesson = getLesson(lessonId) ?? loaded;
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
          to={withLangPrefix("/train/library")}
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
                  <ButtonLink to={withLangPrefix("/train/setup")}>
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
                to={withLangPrefix("/train/lessons/$lessonId")}
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
        <ButtonLink to={withLangPrefix("/train/library")}>
          {c.seeEvery}
          <Arrow />
        </ButtonLink>
      </div>
    </div>
  );
}
