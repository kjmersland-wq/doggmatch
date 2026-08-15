import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, Stat, VetNote, WeightChart, Sources } from "@/components/dogmatch/care/parts";
import { careVisuals } from "@/data/care/images";
import { getCareTopic } from "@/data/care/topics";
import { weightTrend } from "@/lib/care/portions";
import { careStore, useCareProfile, useMyDog, useWeights } from "@/lib/care/store";

const title = "Weight & shape — the check vets use | DoggMatch";
const description =
  "Learn the simple hands-on body condition check, and keep a quiet record of your dog's weight over time.";

export const Route = createFileRoute("/my-dog/weight")({
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
    links: [{ rel: "canonical", href: "/my-dog/weight" }],
  }),
  component: WeightPage,
});

function WeightPage() {
  const dog = useMyDog();
  const profile = useCareProfile(dog?.id);
  const weights = useWeights(dog?.id);
  const trend = weightTrend(weights);
  const topic = getCareTopic("body-condition")!;
  const [value, setValue] = useState("");

  function add() {
    const kg = Number.parseFloat(value);
    if (!dog || !Number.isFinite(kg) || kg <= 0) return;
    careStore.logWeight(dog.id, Math.round(kg * 10) / 10);
    setValue("");
  }

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>Weight & shape</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{topic.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{topic.promise}</p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Panel title={dog ? `${dog.name}'s weight` : "Weight"}>
            {weights.length >= 2 ? (
              <WeightChart entries={weights} />
            ) : (
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                Add a weight roughly once a month. Two entries is all it takes for the trend to
                start showing.
              </p>
            )}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                inputMode="decimal"
                placeholder="18.5"
                aria-label="Weight in kilograms"
                className="h-14 w-32 rounded-2xl border border-border bg-surface px-5 text-[1.0625rem] tabular-nums outline-none transition-colors focus:border-accent"
              />
              <span className="text-muted-foreground">kg</span>
              <Button onClick={add} className="ml-auto" disabled={!dog}>
                Save today's weight
              </Button>
            </div>
            {!dog && (
              <p className="mt-4 text-sm text-muted-foreground">
                Add your dog first and this will remember every entry.
              </p>
            )}
            {weights.length > 0 && (
              <ul className="mt-6 divide-y divide-border border-t border-border">
                {[...weights].reverse().slice(0, 8).map((w) => (
                  <li key={w.day} className="flex items-center justify-between py-3 text-[0.9375rem] tabular-nums">
                    <span className="text-muted-foreground">{w.day}</span>
                    <span>{w.kg} kg</span>
                    <button
                      type="button"
                      onClick={() => dog && careStore.removeWeight(dog.id, w.day)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <Stat
                label="Latest"
                value={profile.weightKg ? `${profile.weightKg} kg` : "—"}
                hint={trend ? `Over ${trend.days} days` : "No entries yet"}
              />
              <Stat
                label="Change"
                value={trend ? `${trend.changeKg > 0 ? "+" : ""}${trend.changeKg} kg` : "—"}
                hint={
                  trend
                    ? trend.direction === "steady"
                      ? "Holding steady"
                      : `${trend.percent > 0 ? "+" : ""}${trend.percent}% since the first entry`
                    : "Add two weights to see this"
                }
              />
            </div>
            <VetNote>
              A change of more than about 10% either way, without you meaning it to happen, is worth
              mentioning to your vet. Sudden weight loss especially.
            </VetNote>
          </div>
        </div>
      </Section>

      <Section className="container-page">
        <Eyebrow>The one-minute check</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">Your hands tell you more than the scales</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <ol className="space-y-6">
            {topic.steps?.map((step, i) => (
              <li key={step.title} className="rounded-[1.5rem] border border-border bg-card p-7">
                <p className="text-xs uppercase tracking-[0.14em] text-accent">Step {i + 1}</p>
                <h3 className="mt-3 font-display text-xl leading-tight tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
          <figure className="overflow-hidden rounded-[1.5rem] border border-border bg-surface">
            <img
              src={careVisuals["body-condition"]!}
              alt="Three outlines of a dog seen from above: too thin, about right with a clear waist, and too heavy"
              loading="lazy"
              width={1376}
              height={768}
              className="w-full"
            />
            <figcaption className="border-t border-border p-5 text-sm leading-relaxed text-muted-foreground">
              Seen from above: a gentle narrowing behind the ribs is what you're looking for. Build
              changes what that looks like — a Greyhound and a Labrador in great shape look nothing alike.
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {topic.sections?.map((s) => (
            <article key={s.title} className="rounded-[1.5rem] border border-border bg-surface p-7">
              <h3 className="font-display text-lg tracking-tight">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
          {topic.whenToAskVet}
        </p>
        <Sources sources={[...(topic.sources ?? [])]} />

        <div className="mt-10">
          <ButtonLink to="/my-dog/nutrition" tone="outline" size="lg">
            Work out food portions
            <Arrow />
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
