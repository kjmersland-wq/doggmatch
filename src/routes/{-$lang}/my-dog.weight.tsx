import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, Stat, VetNote, WeightChart, Sources } from "@/components/dogmatch/care/parts";
import { careVisuals } from "@/data/care/images";
import { getCareTopic } from "@/data/care/topics";
import { weightTrend } from "@/lib/care/portions";
import { careStore, useCareProfile, useMyDog, useWeights } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Weight & shape — the check vets use | DoggMatch";
const description =
  "Learn the simple hands-on body condition check, and keep a quiet record of your dog's weight over time.";

export const Route = createFileRoute("/{-$lang}/my-dog/weight")({
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
    links: seoLinks("/my-dog/weight"),
  }),
  component: WeightPage,
});

const copy = {
  en: {
    eyebrow: "Weight & shape",
    weightFor: (name: string) => `${name}'s weight`,
    weight: "Weight",
    noEntries: "Add a weight roughly once a month. Two entries is all it takes for the trend to start showing.",
    weightAria: "Weight in kilograms",
    kg: "kg",
    saveToday: "Save today's weight",
    addDogNote: "Add your dog first and this will remember every entry.",
    remove: "Remove",
    latest: "Latest",
    noEntriesShort: "No entries yet",
    overDays: (n: number) => `Over ${n} days`,
    change: "Change",
    holdingSteady: "Holding steady",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% since the first entry`,
    addTwoWeights: "Add two weights to see this",
    weightVetNote:
      "A change of more than about 10% either way, without you meaning it to happen, is worth mentioning to your vet. Sudden weight loss especially.",
    checkEyebrow: "The one-minute check",
    checkTitle: "Your hands tell you more than the scales",
    step: (n: number) => `Step ${n}`,
    figureAlt:
      "Three outlines of a dog seen from above: too thin, about right with a clear waist, and too heavy",
    figCaption:
      "Seen from above: a gentle narrowing behind the ribs is what you're looking for. Build changes what that looks like — a Greyhound and a Labrador in great shape look nothing alike.",
    workOutPortions: "Work out food portions",
  },
  no: {
    eyebrow: "Vekt og hold",
    weightFor: (name: string) => `${name}s vekt`,
    weight: "Vekt",
    noEntries: "Legg inn en vekt omtrent én gang i måneden. To målinger er alt som skal til for at trenden begynner å vise seg.",
    weightAria: "Vekt i kilo",
    kg: "kg",
    saveToday: "Lagre dagens vekt",
    addDogNote: "Legg til hunden din først, så husker vi hver oppføring.",
    remove: "Fjern",
    latest: "Siste",
    noEntriesShort: "Ingen oppføringer ennå",
    overDays: (n: number) => `Over ${n} dager`,
    change: "Endring",
    holdingSteady: "Stabil",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% siden første oppføring`,
    addTwoWeights: "Legg inn to vekter for å se dette",
    weightVetNote:
      "En endring på mer enn omtrent 10 % i noen retning, uten at du har planlagt det, er verdt å nevne for veterinæren din. Spesielt plutselig vekttap.",
    checkEyebrow: "Ettminuttssjekken",
    checkTitle: "Hendene dine forteller mer enn vekten",
    step: (n: number) => `Steg ${n}`,
    figureAlt:
      "Tre omriss av en hund sett ovenfra: for tynn, passe med tydelig midje, og for tung",
    figCaption:
      "Sett ovenfra: en mild innsnevring bak ribbeina er det du ser etter. Bygning endrer hvordan dette ser ut — en Greyhound og en Labrador i god form ser helt forskjellige ut.",
    workOutPortions: "Regn ut matporsjoner",
  },
  pl: {
    eyebrow: "Waga i sylwetka",
    weightFor: (name: string) => `Waga ${name}`,
    weight: "Waga",
    noEntries: "Dodawaj wagę mniej więcej raz w miesiącu. Wystarczą dwa wpisy, żeby zaczął się rysować trend.",
    weightAria: "Waga w kilogramach",
    kg: "kg",
    saveToday: "Zapisz dzisiejszą wagę",
    addDogNote: "Dodaj najpierw swojego psa, a zapamiętamy każdy wpis.",
    remove: "Usuń",
    latest: "Ostatnia",
    noEntriesShort: "Brak wpisów",
    overDays: (n: number) => `Przez ${n} dni`,
    change: "Zmiana",
    holdingSteady: "Stabilna",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% od pierwszego wpisu`,
    addTwoWeights: "Dodaj dwie wagi, żeby to zobaczyć",
    weightVetNote:
      "Zmiana o więcej niż około 10% w dowolną stronę, której nie planowałeś, warta jest wzmianki u weterynarza. Zwłaszcza nagła utrata wagi.",
    checkEyebrow: "Sprawdzenie na minutę",
    checkTitle: "Twoje ręce powiedzą więcej niż waga",
    step: (n: number) => `Krok ${n}`,
    figureAlt:
      "Trzy sylwetki psa widziane z góry: zbyt szczupły, w sam raz z wyraźną talią i zbyt ciężki",
    figCaption:
      "Widziane z góry: delikatne zwężenie za żebrami to właśnie to, czego szukasz. Budowa ciała zmienia, jak to wygląda — chart i labrador w świetnej formie wyglądają zupełnie inaczej.",
    workOutPortions: "Wylicz porcje jedzenia",
  },
} as const;

function WeightPage() {
  const c = useCopy(copy);
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
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{topic.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{topic.promise}</p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Panel title={dog ? c.weightFor(dog.name) : c.weight}>
            {weights.length >= 2 ? (
              <WeightChart entries={weights} />
            ) : (
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.noEntries}</p>
            )}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                inputMode="decimal"
                placeholder="18.5"
                aria-label={c.weightAria}
                className="h-14 w-32 rounded-2xl border border-border bg-surface px-5 text-[1.0625rem] tabular-nums outline-none transition-colors focus:border-accent"
              />
              <span className="text-muted-foreground">{c.kg}</span>
              <Button onClick={add} className="ml-auto" disabled={!dog}>
                {c.saveToday}
              </Button>
            </div>
            {!dog && (
              <p className="mt-4 text-sm text-muted-foreground">{c.addDogNote}</p>
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
                      {c.remove}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <Stat
                label={c.latest}
                value={profile.weightKg ? `${profile.weightKg} kg` : "—"}
                hint={trend ? c.overDays(trend.days) : c.noEntriesShort}
              />
              <Stat
                label={c.change}
                value={trend ? `${trend.changeKg > 0 ? "+" : ""}${trend.changeKg} kg` : "—"}
                hint={
                  trend
                    ? trend.direction === "steady"
                      ? c.holdingSteady
                      : c.sincePercent(trend.percent)
                    : c.addTwoWeights
                }
              />
            </div>
            <VetNote>{c.weightVetNote}</VetNote>
          </div>
        </div>
      </Section>

      <Section className="container-page">
        <Eyebrow>{c.checkEyebrow}</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">{c.checkTitle}</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <ol className="space-y-6">
            {topic.steps?.map((step, i) => (
              <li key={step.title} className="rounded-[1.5rem] border border-border bg-card p-7">
                <p className="text-xs uppercase tracking-[0.14em] text-accent">{c.step(i + 1)}</p>
                <h3 className="mt-3 font-display text-xl leading-tight tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
          <figure className="overflow-hidden rounded-[1.5rem] border border-border bg-surface">
            <img
              src={careVisuals["body-condition"]!}
              alt={c.figureAlt}
              loading="lazy"
              width={1376}
              height={768}
              className="w-full"
            />
            <figcaption className="border-t border-border p-5 text-sm leading-relaxed text-muted-foreground">
              {c.figCaption}
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
          <ButtonLink to={withLangPrefix("/my-dog/nutrition")} tone="outline" size="lg">
            {c.workOutPortions}
            <Arrow />
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
