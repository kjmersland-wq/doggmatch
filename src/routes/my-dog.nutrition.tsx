import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, Stat, VetNote } from "@/components/dogmatch/care/parts";
import { careImages } from "@/data/care/images";
import { nutritionSections } from "@/data/care/nutrition";
import { estimatePortions } from "@/lib/care/portions";
import { useCareProfile, useMyDog } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "Food & portions — how much to feed your dog | DoggMatch";
const description =
  "Work out roughly how much to feed your dog each day, how often to feed, and how to change food without upsetting their stomach.";

export const Route = createFileRoute("/my-dog/nutrition")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/my-dog/nutrition"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How much should I feed my dog?",
          description,
          about: "Dog nutrition and portion sizes",
        }),
      },
    ],
  }),
  component: NutritionPage,
});

const copy = {
  en: {
    eyebrow: "Food",
    title: "How much should I feed?",
    intro:
      "Nobody can give you an exact number, and anyone who says otherwise is guessing too. What we can do is give you a sensible starting point, then help you adjust.",
    heroAlt: "A bowl of dog food being measured in a kitchen",
    startingPointFor: (name: string) => `A starting point for ${name}`,
    startingPoint: "A starting point",
    statDay: "A day",
    statFoodDay: "Food a day",
    statFoodDayHintWeighed: "Weighed, not scooped",
    statFoodDayHintMissing: "Add the kcal/100g from the bag",
    statPerMeal: "Per meal",
    statPerMealHint: (n: number) => `Across ${n} meals`,
    howWeGotThereTitle: "How we got there",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `We start with the resting energy a dog of ${weightKg} kg needs — ${restingKcal} kcal — using the standard formula vets use (70 × weight^0.75). Then we multiply by ${factor} for ${reason}. No black box, no guesswork you can't see.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Keep treats to around ${treatKcal} kcal a day — roughly a tenth of the total — and take that out of the meals rather than adding it on top.`,
    noPortionsBody:
      "Add your dog's weight and we'll work out a daily amount, show you the maths behind it, and convert it into grams of the food you actually feed.",
    addDetailsCta: "Add your dog's details",
    basicsEyebrow: "The basics",
    basicsTitle: "Getting food right, without overthinking it",
    vetNote:
      "This is a starting point, not a prescription. Puppies, pregnant dogs, dogs on a diet and dogs with a health condition all need something more specific — that's a conversation with your vet, and a worthwhile one.",
    watchShapeTitle: "Then keep an eye on the shape",
    watchShapeBody:
      "The real test isn't the number on the bag. It's how your dog looks and feels a month from now. Check monthly and adjust by about 10% at a time.",
    weightCta: "Weight & shape",
  },
  no: {
    eyebrow: "Mat",
    title: "Hvor mye bør jeg fôre?",
    intro:
      "Ingen kan gi deg et eksakt tall, og alle som sier noe annet gjetter også. Det vi kan gjøre, er å gi deg et fornuftig utgangspunkt, og så hjelpe deg å justere.",
    heroAlt: "En bolle med hundemat måles opp på et kjøkken",
    startingPointFor: (name: string) => `Et utgangspunkt for ${name}`,
    startingPoint: "Et utgangspunkt",
    statDay: "Per dag",
    statFoodDay: "Mat per dag",
    statFoodDayHintWeighed: "Veid, ikke øst opp",
    statFoodDayHintMissing: "Legg inn kcal/100 g fra posen",
    statPerMeal: "Per måltid",
    statPerMealHint: (n: number) => `Fordelt på ${n} måltider`,
    howWeGotThereTitle: "Slik regnet vi det ut",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Vi starter med hvileenergien en hund på ${weightKg} kg trenger — ${restingKcal} kcal — med formelen veterinærer bruker (70 × vekt^0,75). Så ganger vi med ${factor} for ${reason}. Ingen svart boks, ingen gjetning du ikke kan se.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Hold godbiter til rundt ${treatKcal} kcal per dag — omtrent en tidel av totalen — og ta det fra måltidene i stedet for å legge det på toppen.`,
    noPortionsBody:
      "Legg inn hundens vekt, så regner vi ut en daglig mengde, viser deg matematikken bak, og gjør det om til gram av maten du faktisk fôrer med.",
    addDetailsCta: "Legg til hundens detaljer",
    basicsEyebrow: "Det grunnleggende",
    basicsTitle: "Å få maten riktig, uten å overtenke det",
    vetNote:
      "Dette er et utgangspunkt, ikke en forskrivning. Valper, drektige tisper, hunder på diett og hunder med en helsetilstand trenger alle noe mer spesifikt — det er en samtale med veterinæren din, og en verdifull en.",
    watchShapeTitle: "Følg så med på formen",
    watchShapeBody:
      "Den virkelige testen er ikke tallet på posen. Det er hvordan hunden din ser ut og har det om en måned. Sjekk månedlig og juster med rundt 10 % om gangen.",
    weightCta: "Vekt og hold",
  },
} as const;

function NutritionPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const profile = useCareProfile(dog?.id);
  const portions = estimatePortions(profile.weightKg, dog?.ageStage ?? "adult", profile);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="animate-rise">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-6">{c.title}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
          </div>
          <div className="animate-rise overflow-hidden rounded-[2rem] border border-border">
            <img
              src={careImages.careNutrition}
              alt={c.heroAlt}
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="container-page">
        <Panel title={dog ? c.startingPointFor(dog.name) : c.startingPoint}>
          {portions ? (
            <>
              <div className="grid gap-3 sm:grid-cols-3">
                <Stat label={c.statDay} value={`${portions.dailyKcal} kcal`} hint={portions.factorReason} />
                <Stat
                  label={c.statFoodDay}
                  value={portions.gramsPerDay ? `${portions.gramsPerDay} g` : "—"}
                  hint={portions.gramsPerDay ? c.statFoodDayHintWeighed : c.statFoodDayHintMissing}
                />
                <Stat
                  label={c.statPerMeal}
                  value={portions.gramsPerMeal ? `${portions.gramsPerMeal} g` : "—"}
                  hint={c.statPerMealHint(portions.mealsPerDay)}
                />
              </div>
              <div className="mt-6 rounded-[1.25rem] border border-border bg-surface p-6">
                <h3 className="font-display text-lg tracking-tight">{c.howWeGotThereTitle}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {c.howWeGotThereP1(profile.weightKg!, portions.restingKcal, portions.factor, portions.factorReason)}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {c.howWeGotThereP2(portions.treatKcal)}
                </p>
              </div>
            </>
          ) : (
            <div>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.noPortionsBody}</p>
              <ButtonLink to="/my-dog/setup" className="mt-6" size="lg">
                {c.addDetailsCta}
                <Arrow />
              </ButtonLink>
            </div>
          )}
        </Panel>
      </Section>

      <Section className="container-page">
        <Eyebrow>{c.basicsEyebrow}</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">{c.basicsTitle}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {nutritionSections().map((s) => (
            <article key={s.title} className="rounded-[1.5rem] border border-border bg-card p-7">
              <h3 className="font-display text-xl leading-tight tracking-tight">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.body}</p>
              {"points" in s && s.points && (
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-2">
          <VetNote>{c.vetNote}</VetNote>
          <div className="rounded-[1.5rem] border border-border bg-surface p-7">
            <h3 className="font-display text-xl tracking-tight">{c.watchShapeTitle}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.watchShapeBody}</p>
            <ButtonLink to="/my-dog/weight" tone="outline" className="mt-6">
              {c.weightCta}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
        <div className="container-page mt-8">
          <SourcesLink category="nutrition" />
        </div>
      </Section>
    </div>
  );
}
