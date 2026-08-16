import { createFileRoute, Link } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { CareTile, Panel, RoutineRow, Stat, TopicCard, VetNote } from "@/components/dogmatch/care/parts";
import { CareCalendar, DogSwitcher, WeekStrip } from "@/components/dogmatch/care/hub";
import { careImages, categoryImages } from "@/data/care/images";
import { careTopics, getCareTopic } from "@/data/care/topics";
import { estimatePortions, weightTrend } from "@/lib/care/portions";
import {
  careStore,
  todayKey,
  useCareProfile,
  useMyDog,
  useTodayRoutine,
  useWeights,
  type RoutineId,
} from "@/lib/care/store";
import { dogBreedLabel, resolveDogTraits, traitBasisNote } from "@/lib/dogs/profile";
import { breedById } from "@/data/breeds";
import { breedImages } from "@/data/breed-images";
import { buildWeek } from "@/lib/care/week";
import { useWeekOverride } from "@/lib/care/records";
import { useProgress } from "@/lib/training/store";

const title = "My Dog — Everyday health, food and care | DoggMatch";
const description =
  "A calm, personal place to look after your dog properly: food and portions, weight, teeth, coat, paws and the little daily things that add up.";

export const Route = createFileRoute("/my-dog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/my-dog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/my-dog" }],
  }),
  component: MyDogHome,
});

const copy = {
  en: {
    eyebrow: "My Dog",
    heroTitleNoDog: "Looking after your dog, properly",
    heroLetsCare: "Let's take good care of {name}.",
    heroTextDog:
      "Food, weight, teeth, coat, paws and the small daily things. Everything in one calm place.",
    heroTextNoDog:
      "Tell us a little about your dog and we'll work out food portions, keep an eye on weight, and show you what everyday care actually looks like.",
    dogDetails: "{name}'s details",
    setupCta: "Set up my dog",
    canEatCta: "Can my dog eat this?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "your dog",
    portraitAltNoDog: "A person sitting on the floor with their dog resting against them",
    sectionsAria: "My Dog sections",
    ageStages: { puppy: "Puppy", adolescent: "Adolescent", adult: "Adult", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Fresh water", hint: "Clean bowl, topped up" },
      { id: "measured-meals", label: "Meals measured", hint: "Weighed, not guessed" },
      { id: "walk", label: "A proper walk", hint: "With time to sniff" },
      { id: "play", label: "A bit of play", hint: "Ten minutes counts" },
      { id: "teeth", label: "Teeth", hint: "Even thirty seconds helps" },
      { id: "brush", label: "Quick brush", hint: "And a feel for lumps or mats" },
      { id: "paw-check", label: "Paw check", hint: "After the walk" },
      { id: "quiet-time", label: "Quiet time", hint: "Nothing asked of them" },
    ],
    sections: [
      { to: "/my-dog/week", label: "My week", line: "Walks, training, food and care, day by day" },
      { to: "/train", label: "Training", line: "Today's short session and what you're working on" },
      { to: "/my-dog/nutrition", label: "Food", line: "Portions, meals and switching food safely" },
      { to: "/my-dog/care/everyday-check", label: "Health", line: "The quick once-over that catches things early" },
      { to: "/my-dog/care/dental", label: "Dental", line: "Teeth and gums, in under a minute a day" },
      { to: "/my-dog/care/coat", label: "Coat & care", line: "Brushing, bathing and knowing the coat type" },
      { to: "/my-dog/care/paws", label: "Paws & nails", line: "Pads, nails and what winter does to them" },
      { to: "/my-dog/weight", label: "Weight", line: "The hands-on check, and a simple record" },
      { to: "/my-dog/care/wellbeing", label: "Activity", line: "Movement, sniffing and enough rest" },
      { to: "/train/library", label: "Behaviour", line: "Pulling, jumping, barking — one lesson at a time" },
      { to: "/dog-life", label: "Dog life", line: "Places to go and things to do nearby" },
      { to: "/my-dog/print", label: "Documents", line: "Print the plan, the pack or a note for the sitter" },
    ],
    today: "Today",
    ofCount: "{done} of {total}",
    todayIntro: "None of this has to be perfect. Tick off what you've done — it resets tomorrow.",
    addYourDog: "Add your dog",
    toSaveDaily: "to save this from day to day.",
    whereThingsStand: "Where things stand",
    weight: "Weight",
    steadyOver: "Steady over {days} days",
    changeOver: "{sign}{kg} kg over {days} days",
    addWeightToTrack: "Add a weight to start tracking",
    foodADay: "Food a day",
    roughlyAcross: "Roughly, across {meals} meals",
    addWeightAndFood: "Add a weight and food",
    weightShape: "Weight & shape",
    foodPortions: "Food & portions",
    vetNoteHome:
      "Everything here is general guidance to help you look after your dog day to day. It doesn't replace your vet, who knows your dog. If something worries you, ring them — they'd always rather hear from you early.",
    yourWeek: "Your week",
    dogsWeek: "{name}'s week",
    seeWholeWeek: "See the whole week",
    weekIntro: "The next few days, worked out from your dog's age, breed and how busy your days are.",
    comingRoundAgain: "Coming round again",
    calendarIntro: "A gentle nudge, never a telling-off. Tick something off once it's done.",
    printSave: "Print & save",
    printSaveBody: "A profile card for the sitter, a feeding plan for the fridge, or the whole Dog Pack in one go.",
    printSaveCta: "Make something to print",
    contactsInfo: "Contacts & information",
    contactsInfoBody: "Your vet's number, the microchip, the allergies — all the things you'd hate to be hunting for in a hurry.",
    contactsInfoCta: "Fill in the details",
    vetVisits: "Vet visits",
    vetVisitsBody: "Write down what you've noticed and what you want to ask, then take it with you.",
    vetVisitsCta: "Prepare for a visit",
    everydayCare: "Everyday care",
    biggestDifference: "The things that make the biggest difference",
    biggestDifferenceSub: "Short, clear and doable. Pick one and start there.",
    foodPortionsTitle: "Food & portions",
    foodPortionsBody: "How much to feed, how often, and how to change food without upsetting anyone's stomach.",
    foodPortionsMeta: "Works out a daily amount for your dog",
    weightShapeTitle: "Weight & shape",
    weightShapeBody: "Learn the hands-on check vets use, and keep a simple record over time.",
    weightShapeMeta: "Takes about a minute a month",
    canEatTitle: "Can my dog eat this?",
    canEatBody: "A calm, searchable answer for the moment something falls on the kitchen floor.",
    canEatMeta: "Search any food",
    trainingCare: "Training and care go together",
    trainingCareBody:
      "A dog who's comfortable being handled is easier to brush, check and take to the vet. The handling lessons in Train Your Dog make all of this easier.",
    trainYourDog: "Train Your Dog",
    readGuides: "Read the guides",
    careGuidesCount: "{count} care guides · written to be read in a few minutes",
  },
  no: {
    eyebrow: "Min hund",
    heroTitleNoDog: "Å ta godt vare på hunden din",
    heroLetsCare: "La oss ta godt vare på {name}.",
    heroTextDog:
      "Mat, vekt, tenner, pels, poter og de små tingene i hverdagen. Alt samlet ett rolig sted.",
    heroTextNoDog:
      "Fortell oss litt om hunden din, så regner vi ut matmengder, holder øye med vekten, og viser deg hva hverdagsstell faktisk innebærer.",
    dogDetails: "Detaljer om {name}",
    setupCta: "Registrer hunden min",
    canEatCta: "Kan hunden min spise dette?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "hunden din",
    portraitAltNoDog: "En person som sitter på gulvet med hunden sin inntil seg",
    sectionsAria: "Seksjoner under Min hund",
    ageStages: { puppy: "Valp", adolescent: "Tenåring", adult: "Voksen", senior: "Eldre" },
    routineItems: [
      { id: "fresh-water", label: "Friskt vann", hint: "Ren bolle, fylt opp" },
      { id: "measured-meals", label: "Målte måltider", hint: "Veid, ikke anslått" },
      { id: "walk", label: "En skikkelig tur", hint: "Med tid til å snuse" },
      { id: "play", label: "Litt lek", hint: "Ti minutter teller" },
      { id: "teeth", label: "Tenner", hint: "Selv tretti sekunder hjelper" },
      { id: "brush", label: "Rask børsting", hint: "Og en følekontroll for kuler eller filt" },
      { id: "paw-check", label: "Potesjekk", hint: "Etter turen" },
      { id: "quiet-time", label: "Rolig stund", hint: "Ingenting kreves av dem" },
    ],
    sections: [
      { to: "/my-dog/week", label: "Min uke", line: "Turer, trening, mat og stell, dag for dag" },
      { to: "/train", label: "Trening", line: "Dagens korte økt og det dere jobber med" },
      { to: "/my-dog/nutrition", label: "Mat", line: "Porsjoner, måltider og trygt fôrbytte" },
      { to: "/my-dog/care/everyday-check", label: "Helse", line: "Den raske sjekken som fanger ting tidlig" },
      { to: "/my-dog/care/dental", label: "Tannhelse", line: "Tenner og tannkjøtt, på under et minutt om dagen" },
      { to: "/my-dog/care/coat", label: "Pels & stell", line: "Børsting, bading og å kjenne pelstypen" },
      { to: "/my-dog/care/paws", label: "Poter & klør", line: "Poter, klør og hva vinteren gjør med dem" },
      { to: "/my-dog/weight", label: "Vekt", line: "Håndssjekken, og en enkel logg" },
      { to: "/my-dog/care/wellbeing", label: "Aktivitet", line: "Bevegelse, snusing og nok hvile" },
      { to: "/train/library", label: "Atferd", line: "Dra i bånd, hopping, bjeffing — én lekse om gangen" },
      { to: "/dog-life", label: "Hundeliv", line: "Steder å dra og ting å gjøre i nærheten" },
      { to: "/my-dog/print", label: "Dokumenter", line: "Skriv ut planen, pakken eller en lapp til hundepasseren" },
    ],
    today: "I dag",
    ofCount: "{done} av {total}",
    todayIntro: "Ingenting her trenger å være perfekt. Kryss av det du har gjort — det nullstilles i morgen.",
    addYourDog: "Legg til hunden din",
    toSaveDaily: "for å lagre dette fra dag til dag.",
    whereThingsStand: "Sånn ligger det an",
    weight: "Vekt",
    steadyOver: "Stabil over {days} dager",
    changeOver: "{sign}{kg} kg over {days} dager",
    addWeightToTrack: "Legg inn en vekt for å begynne å følge med",
    foodADay: "Mat per dag",
    roughlyAcross: "Omtrent, fordelt på {meals} måltider",
    addWeightAndFood: "Legg inn vekt og fôrtype",
    weightShape: "Vekt & hold",
    foodPortions: "Mat & porsjoner",
    vetNoteHome:
      "Alt her er generell veiledning som skal hjelpe deg med å ta vare på hunden i hverdagen. Det erstatter ikke veterinæren, som kjenner hunden din. Er du bekymret, ring dem — de vil alltid heller høre fra deg tidlig.",
    yourWeek: "Din uke",
    dogsWeek: "{name}s uke",
    seeWholeWeek: "Se hele uken",
    weekIntro: "De neste dagene, satt sammen ut fra hundens alder, rase og hvor travle dagene dine er.",
    comingRoundAgain: "Det som kommer igjen",
    calendarIntro: "Et vennlig dytt, aldri en skyldfølelse. Kryss av når det er gjort.",
    printSave: "Skriv ut & lagre",
    printSaveBody: "Et profilkort til hundepasseren, en fôringsplan til kjøleskapet, eller hele Hundepakken på én gang.",
    printSaveCta: "Lag noe å skrive ut",
    contactsInfo: "Kontakter & informasjon",
    contactsInfoBody: "Veterinærens nummer, mikrochip, allergier — alt du ville hatet å måtte lete etter i en fart.",
    contactsInfoCta: "Fyll inn detaljene",
    vetVisits: "Veterinærbesøk",
    vetVisitsBody: "Skriv ned hva du har lagt merke til og hva du vil spørre om, og ta det med deg dit.",
    vetVisitsCta: "Forbered et besøk",
    everydayCare: "Hverdagsstell",
    biggestDifference: "Tingene som utgjør størst forskjell",
    biggestDifferenceSub: "Kort, tydelig og gjennomførbart. Velg ett og start der.",
    foodPortionsTitle: "Mat & porsjoner",
    foodPortionsBody: "Hvor mye du bør fôre, hvor ofte, og hvordan du bytter fôr uten å velte noens mage.",
    foodPortionsMeta: "Regner ut en daglig mengde for hunden din",
    weightShapeTitle: "Vekt & hold",
    weightShapeBody: "Lær håndssjekken veterinærer bruker, og hold en enkel logg over tid.",
    weightShapeMeta: "Tar omtrent ett minutt i måneden",
    canEatTitle: "Kan hunden min spise dette?",
    canEatBody: "Et rolig, søkbart svar for øyeblikket noe havner på kjøkkengulvet.",
    canEatMeta: "Søk i alle typer mat",
    trainingCare: "Trening og stell hører sammen",
    trainingCareBody:
      "En hund som er komfortabel med å bli håndtert, er lettere å børste, sjekke og ta med til veterinæren. Håndteringsleksjonene i Tren hunden din gjør alt dette enklere.",
    trainYourDog: "Tren hunden din",
    readGuides: "Les guidene",
    careGuidesCount: "{count} stellguider · skrevet for å leses på noen minutter",
  },
} as const;

function fmt(s: string, values: Record<string, string | number>) {
  return s.replace(/\{(\w+)\}/g, (_, k: string) => (k in values ? String(values[k]) : `{${k}}`));
}

function MyDogHome() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const profile = useCareProfile(dog?.id);
  const weights = useWeights(dog?.id);
  const done = useTodayRoutine(dog?.id);
  const progress = useProgress(dog?.id);
  const override = useWeekOverride(dog?.id);
  const week = buildWeek(dog, profile, progress, override);
  const todayIndex = (new Date().getDay() + 6) % 7;
  const portions = estimatePortions(profile.weightKg, dog?.ageStage ?? "adult", profile);
  const trend = weightTrend(weights);
  const traitProfile = resolveDogTraits(dog);
  const breedLine = dogBreedLabel(dog);
  const portraitBreed = traitProfile.breedIds[0];
  const breed = portraitBreed ? breedById[portraitBreed] : undefined;
  const portrait = portraitBreed ? breedImages[portraitBreed] : careImages.careHero;
  const ageLabel = dog?.ageStage ? c.ageStages[dog.ageStage] : c.ageStages.adult;

  return (
    <div className="pb-24">
      {/* ------------------------------------------------------------ hero */}
      <section className="relative">
        <div className="container-page pt-28 md:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div className="animate-rise">
              <Eyebrow>{c.eyebrow}</Eyebrow>
              {dog ? (
                <>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-accent">
                    {breedLine ? `${breedLine} · ` : ""}
                    {ageLabel}
                    {profile.weightKg ? ` · ${profile.weightKg} kg` : ""}
                  </p>
                  <h1 className="display-xl mt-3">{dog.name}</h1>
                  <p className="mt-4 text-2xl leading-snug">{fmt(c.heroLetsCare, { name: dog.name })}</p>
                </>
              ) : (
                <h1 className="display-xl mt-6">{c.heroTitleNoDog}</h1>
              )}
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {dog ? c.heroTextDog : c.heroTextNoDog}
              </p>
              {dog && traitProfile.isMixed && (
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {traitBasisNote(traitProfile)}
                </p>
              )}
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/my-dog/setup" size="lg">
                  {dog ? fmt(c.dogDetails, { name: dog.name }) : c.setupCta}
                  <Arrow />
                </ButtonLink>
                <ButtonLink to="/my-dog/food" tone="outline" size="lg">
                  {c.canEatCta}
                </ButtonLink>
              </div>
              <div className="mt-6">
                <DogSwitcher {...(dog ? { active: dog } : {})} />
              </div>
            </div>
            <div className="animate-rise overflow-hidden rounded-[2rem] border border-border">
              <img
                src={portrait}
                alt={
                  dog
                    ? fmt(c.portraitAltDog, { name: dog.name, breed: breedLine || c.portraitAltFallbackBreed })
                    : c.portraitAltNoDog
                }
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </div>

          {/* ------------------------------------------------- section map */}
          <nav aria-label={c.sectionsAria} className="mt-14">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.sections.map((s) => (
                <Link
                  key={s.to}
                  to={s.to as never}
                  className="group rounded-[1.2rem] border border-border bg-surface p-5 transition-colors hover:border-border-strong"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[1.05rem] font-medium">{s.label}</span>
                    <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      <Arrow />
                    </span>
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                    {s.line}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* --------------------------------------------------------- today */}
      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Panel
            title={c.today}
            action={
              <span className="text-sm tabular-nums text-muted-foreground">
                {fmt(c.ofCount, { done: done.length, total: c.routineItems.length })}
              </span>
            }
          >
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.todayIntro}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {c.routineItems.map((item) => (
                <RoutineRow
                  key={item.id}
                  label={item.label}
                  hint={item.hint}
                  done={done.includes(item.id as RoutineId)}
                  onToggle={() => dog && careStore.toggleRoutine(dog.id, item.id as RoutineId, todayKey())}
                />
              ))}
            </div>
            {!dog && (
              <p className="mt-5 text-sm text-muted-foreground">
                <Link to="/my-dog/setup" className="text-accent underline-offset-4 hover:underline">
                  {c.addYourDog}
                </Link>{" "}
                {c.toSaveDaily}
              </p>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <Panel title={c.whereThingsStand}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Stat
                  label={c.weight}
                  value={profile.weightKg ? `${profile.weightKg} kg` : "—"}
                  {...(trend
                    ? {
                        hint:
                          trend.direction === "steady"
                            ? fmt(c.steadyOver, { days: trend.days })
                            : fmt(c.changeOver, { sign: trend.changeKg > 0 ? "+" : "", kg: trend.changeKg, days: trend.days }),
                      }
                    : { hint: c.addWeightToTrack })}
                />
                <Stat
                  label={c.foodADay}
                  value={
                    portions?.gramsPerDay
                      ? `${portions.gramsPerDay} g`
                      : portions
                        ? `${portions.dailyKcal} kcal`
                        : "—"
                  }
                  hint={portions ? fmt(c.roughlyAcross, { meals: portions.mealsPerDay }) : c.addWeightAndFood}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink to="/my-dog/weight" tone="outline" size="md">
                  {c.weightShape}
                </ButtonLink>
                <ButtonLink to="/my-dog/nutrition" tone="outline" size="md">
                  {c.foodPortions}
                </ButtonLink>
              </div>
            </Panel>

            <VetNote>{c.vetNoteHome}</VetNote>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------------- week */}
      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Panel
            title={dog ? fmt(c.dogsWeek, { name: dog.name }) : c.yourWeek}
            action={
              <Link to="/my-dog/week" className="text-sm text-accent underline-offset-4 hover:underline">
                {c.seeWholeWeek}
              </Link>
            }
          >
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.weekIntro}
            </p>
            <WeekStrip week={week} todayIndex={todayIndex} />
          </Panel>

          <Panel title={c.comingRoundAgain}>
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.calendarIntro}
            </p>
            <CareCalendar {...(dog ? { dog } : {})} />
          </Panel>
        </div>
      </Section>

      {/* ------------------------------------------------------ paper & people */}
      <Section className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          <Panel title={c.printSave}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.printSaveBody}
            </p>
            <ButtonLink to="/my-dog/print" tone="outline" size="md" className="mt-5">
              {c.printSaveCta}
            </ButtonLink>
          </Panel>
          <Panel title={c.contactsInfo}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.contactsInfoBody}
            </p>
            <ButtonLink to="/my-dog/contacts" tone="outline" size="md" className="mt-5">
              {c.contactsInfoCta}
            </ButtonLink>
          </Panel>
          <Panel title={c.vetVisits}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.vetVisitsBody}
            </p>
            <ButtonLink to="/my-dog/vet" tone="outline" size="md" className="mt-5">
              {c.vetVisitsCta}
            </ButtonLink>
          </Panel>
        </div>
      </Section>

      {/* -------------------------------------------------------- the areas */}
      <Section className="container-page">
        <Eyebrow>{c.everydayCare}</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">{c.biggestDifference}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {c.biggestDifferenceSub}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CareTile
            to="/my-dog/nutrition"
            image={categoryImages.nutrition}
            title={c.foodPortionsTitle}
            body={c.foodPortionsBody}
            meta={c.foodPortionsMeta}
          />
          <CareTile
            to="/my-dog/weight"
            image={categoryImages.weight}
            title={c.weightShapeTitle}
            body={c.weightShapeBody}
            meta={c.weightShapeMeta}
          />
          <CareTile
            to="/my-dog/food"
            image={categoryImages.nutrition}
            title={c.canEatTitle}
            body={c.canEatBody}
            meta={c.canEatMeta}
          />
          {["dental", "coat", "paws", "ears", "eyes", "wellbeing", "everyday-check", "something-different", "emergency"]
            .map((id) => getCareTopic(id))
            .filter((t): t is NonNullable<typeof t> => Boolean(t))
            .map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- closing */}
      <Section className="container-page">
        <div className="rounded-[2rem] border border-border bg-surface p-10 md:p-14">
          <h2 className="display-md max-w-2xl">{c.trainingCare}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {c.trainingCareBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/train" size="lg">
              {c.trainYourDog}
              <Arrow />
            </ButtonLink>
            <ButtonLink to="/guides" tone="outline" size="lg">
              {c.readGuides}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <p className="container-page mt-4 text-sm text-muted-foreground">
        {fmt(c.careGuidesCount, { count: careTopics.length })}
      </p>
    </div>
  );
}
