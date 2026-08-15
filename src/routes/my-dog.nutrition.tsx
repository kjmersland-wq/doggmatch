import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, Stat, VetNote } from "@/components/dogmatch/care/parts";
import { careImages } from "@/data/care/images";
import { nutritionSections } from "@/data/care/nutrition";
import { estimatePortions } from "@/lib/care/portions";
import { useCareProfile, useMyDog } from "@/lib/care/store";

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
    links: [{ rel: "canonical", href: "/my-dog/nutrition" }],
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

function NutritionPage() {
  const dog = useMyDog();
  const profile = useCareProfile(dog?.id);
  const portions = estimatePortions(profile.weightKg, dog?.ageStage ?? "adult", profile);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="animate-rise">
            <Eyebrow>Food</Eyebrow>
            <h1 className="display-xl mt-6">How much should I feed?</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Nobody can give you an exact number, and anyone who says otherwise is guessing too.
              What we can do is give you a sensible starting point, then help you adjust.
            </p>
          </div>
          <div className="animate-rise overflow-hidden rounded-[2rem] border border-border">
            <img
              src={careImages.careNutrition}
              alt="A bowl of dog food being measured in a kitchen"
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section>
        <Panel title={dog ? `A starting point for ${dog.name}` : "A starting point"}>
          {portions ? (
            <>
              <div className="grid gap-3 sm:grid-cols-3">
                <Stat label="A day" value={`${portions.dailyKcal} kcal`} hint={portions.factorReason} />
                <Stat
                  label="Food a day"
                  value={portions.gramsPerDay ? `${portions.gramsPerDay} g` : "—"}
                  hint={portions.gramsPerDay ? "Weighed, not scooped" : "Add the kcal/100g from the bag"}
                />
                <Stat
                  label="Per meal"
                  value={portions.gramsPerMeal ? `${portions.gramsPerMeal} g` : "—"}
                  hint={`Across ${portions.mealsPerDay} meals`}
                />
              </div>
              <div className="mt-6 rounded-[1.25rem] border border-border bg-surface p-6">
                <h3 className="font-display text-lg tracking-tight">How we got there</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  We start with the resting energy a dog of {profile.weightKg} kg needs —{" "}
                  {portions.restingKcal} kcal — using the standard formula vets use (70 × weight^0.75).
                  Then we multiply by {portions.factor} for {portions.factorReason}. No black box,
                  no guesswork you can't see.
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  Keep treats to around {portions.treatKcal} kcal a day — roughly a tenth of the total —
                  and take that out of the meals rather than adding it on top.
                </p>
              </div>
            </>
          ) : (
            <div>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                Add your dog's weight and we'll work out a daily amount, show you the maths behind it,
                and convert it into grams of the food you actually feed.
              </p>
              <ButtonLink to="/my-dog/setup" className="mt-6" size="lg">
                Add your dog's details
                <Arrow />
              </ButtonLink>
            </div>
          )}
        </Panel>
      </Section>

      <Section>
        <Eyebrow>The basics</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">Getting food right, without overthinking it</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {nutritionSections.map((s) => (
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

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <VetNote>
            This is a starting point, not a prescription. Puppies, pregnant dogs, dogs on a diet and
            dogs with a health condition all need something more specific — that's a conversation with
            your vet, and a worthwhile one.
          </VetNote>
          <div className="rounded-[1.5rem] border border-border bg-surface p-7">
            <h3 className="font-display text-xl tracking-tight">Then keep an eye on the shape</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              The real test isn't the number on the bag. It's how your dog looks and feels a month
              from now. Check monthly and adjust by about 10% at a time.
            </p>
            <ButtonLink to="/my-dog/weight" tone="outline" className="mt-6">
              Weight & shape
              <Arrow />
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
