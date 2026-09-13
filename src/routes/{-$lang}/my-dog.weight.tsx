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
  dk: {
    eyebrow: "Vægt og hold",
    weightFor: (name: string) => `${name}s vægt`,
    weight: "Vægt",
    noEntries: "Tilføj en vægt cirka én gang om måneden. To målinger er alt, der skal til, før tendensen begynder at vise sig.",
    weightAria: "Vægt i kilo",
    kg: "kg",
    saveToday: "Gem dagens vægt",
    addDogNote: "Tilføj først din hund, så husker vi hver indtastning.",
    remove: "Fjern",
    latest: "Seneste",
    noEntriesShort: "Ingen indtastninger endnu",
    overDays: (n: number) => `Over ${n} dage`,
    change: "Ændring",
    holdingSteady: "Stabil",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% siden første indtastning`,
    addTwoWeights: "Tilføj to vægte for at se dette",
    weightVetNote:
      "En ændring på mere end omkring 10 % i nogen retning, uden at du har planlagt det, er værd at nævne for din dyrlæge. Især pludseligt vægttab.",
    checkEyebrow: "Etminuts-tjekket",
    checkTitle: "Dine hænder fortæller mere end vægten",
    step: (n: number) => `Trin ${n}`,
    figureAlt:
      "Tre omrids af en hund set ovenfra: for tynd, passende med tydelig talje, og for tung",
    figCaption:
      "Set ovenfra: en let indsnævring bag ribbenene er det, du kigger efter. Bygning ændrer, hvordan det ser ud — en greyhound og en labrador i god form ser slet ikke ens ud.",
    workOutPortions: "Beregn madportioner",
  },
  se: {
    eyebrow: "Vikt och hull",
    weightFor: (name: string) => `${name}s vikt`,
    weight: "Vikt",
    noEntries: "Lägg till en vikt ungefär en gång i månaden. Två poster räcker för att trenden ska börja synas.",
    weightAria: "Vikt i kilogram",
    kg: "kg",
    saveToday: "Spara dagens vikt",
    addDogNote: "Lägg till din hund först, så minns vi varje post.",
    remove: "Ta bort",
    latest: "Senaste",
    noEntriesShort: "Inga poster än",
    overDays: (n: number) => `Över ${n} dagar`,
    change: "Förändring",
    holdingSteady: "Stabil",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% sedan första posten`,
    addTwoWeights: "Lägg till två vikter för att se detta",
    weightVetNote:
      "En förändring på mer än ungefär 10 % åt endera hållet, utan att du menat det, är värd att nämna för din veterinär. Särskilt plötslig viktnedgång.",
    checkEyebrow: "Enminuterskontrollen",
    checkTitle: "Dina händer säger mer än vågen",
    step: (n: number) => `Steg ${n}`,
    figureAlt:
      "Tre konturer av en hund sedda ovanifrån: för smal, lagom med tydlig midja, och för tung",
    figCaption:
      "Sett ovanifrån: en mjuk insnävning bakom revbenen är vad du letar efter. Kroppsbyggnad ändrar hur det ser ut — en greyhound och en labrador i toppform ser inte alls likadana ut.",
    workOutPortions: "Räkna ut foderportioner",
  },
  fi: {
    eyebrow: "Paino ja kunto",
    weightFor: (name: string) => `Koiran ${name} paino`,
    weight: "Paino",
    noEntries: "Lisää paino noin kerran kuukaudessa. Kaksi merkintää riittää, jotta trendi alkaa näkyä.",
    weightAria: "Paino kilogrammoina",
    kg: "kg",
    saveToday: "Tallenna tämän päivän paino",
    addDogNote: "Lisää koirasi ensin, niin muistamme jokaisen merkinnän.",
    remove: "Poista",
    latest: "Viimeisin",
    noEntriesShort: "Ei vielä merkintöjä",
    overDays: (n: number) => `${n} päivän aikana`,
    change: "Muutos",
    holdingSteady: "Vakaa",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% ensimmäisestä merkinnästä`,
    addTwoWeights: "Lisää kaksi painoa nähdäksesi tämän",
    weightVetNote:
      "Yli noin 10 %:n muutos kumpaan tahansa suuntaan, ilman että se on tarkoituksellista, kannattaa mainita eläinlääkärille. Erityisesti äkillinen painonpudotus.",
    checkEyebrow: "Minuutin tarkistus",
    checkTitle: "Kätesi kertovat enemmän kuin vaaka",
    step: (n: number) => `Vaihe ${n}`,
    figureAlt:
      "Kolme koiran ääriviivaa ylhäältä katsottuna: liian laiha, sopiva selkeällä vyötäröllä ja liian painava",
    figCaption:
      "Ylhäältä katsottuna: kevyt kaventuminen kylkiluiden takana on se, mitä etsit. Rakenne muuttaa, miltä tämä näyttää — huippukunnossa oleva greyhound ja labradorinnoutaja näyttävät aivan erilaisilta.",
    workOutPortions: "Laske ruoka-annokset",
  },
  de: {
    eyebrow: "Gewicht & Kondition",
    weightFor: (name: string) => `Das Gewicht von ${name}`,
    weight: "Gewicht",
    noEntries: "Tragen Sie etwa einmal im Monat ein Gewicht ein. Zwei Einträge reichen aus, damit sich der Trend zeigt.",
    weightAria: "Gewicht in Kilogramm",
    kg: "kg",
    saveToday: "Heutiges Gewicht speichern",
    addDogNote: "Fügen Sie zuerst Ihren Hund hinzu, dann merken wir uns jeden Eintrag.",
    remove: "Entfernen",
    latest: "Neuester",
    noEntriesShort: "Noch keine Einträge",
    overDays: (n: number) => `Über ${n} Tage`,
    change: "Veränderung",
    holdingSteady: "Stabil",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% seit dem ersten Eintrag`,
    addTwoWeights: "Fügen Sie zwei Gewichte hinzu, um dies zu sehen",
    weightVetNote:
      "Eine Veränderung von mehr als etwa 10 % in beide Richtungen, ohne dass Sie es beabsichtigt haben, ist es wert, Ihrem Tierarzt genannt zu werden. Besonders plötzlicher Gewichtsverlust.",
    checkEyebrow: "Der Ein-Minuten-Check",
    checkTitle: "Ihre Hände sagen mehr aus als die Waage",
    step: (n: number) => `Schritt ${n}`,
    figureAlt:
      "Drei Umrisse eines Hundes von oben gesehen: zu dünn, genau richtig mit klarer Taille, und zu schwer",
    figCaption:
      "Von oben gesehen: eine sanfte Verjüngung hinter den Rippen ist es, wonach Sie suchen. Der Körperbau verändert, wie das aussieht — ein Greyhound und ein Labrador in guter Form sehen völlig unterschiedlich aus.",
    workOutPortions: "Futterportionen berechnen",
  },
  fr: {
    eyebrow: "Poids & forme",
    weightFor: (name: string) => `Le poids de ${name}`,
    weight: "Poids",
    noEntries: "Ajoutez un poids environ une fois par mois. Deux entrées suffisent pour que la tendance commence à apparaître.",
    weightAria: "Poids en kilogrammes",
    kg: "kg",
    saveToday: "Enregistrer le poids d'aujourd'hui",
    addDogNote: "Ajoutez d'abord votre chien, et chaque entrée sera mémorisée.",
    remove: "Supprimer",
    latest: "Dernier",
    noEntriesShort: "Pas encore d'entrée",
    overDays: (n: number) => `Sur ${n} jours`,
    change: "Variation",
    holdingSteady: "Stable",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% depuis la première entrée`,
    addTwoWeights: "Ajoutez deux poids pour voir cela",
    weightVetNote:
      "Une variation de plus d'environ 10 % dans un sens ou dans l'autre, sans que vous l'ayez recherchée, mérite d'être signalée à votre vétérinaire. Une perte de poids soudaine en particulier.",
    checkEyebrow: "Le contrôle d'une minute",
    checkTitle: "Vos mains en disent plus long que la balance",
    step: (n: number) => `Étape ${n}`,
    figureAlt:
      "Trois silhouettes de chien vues de dessus : trop maigre, parfaite avec une taille marquée, et trop lourde",
    figCaption:
      "Vu de dessus : un léger rétrécissement derrière les côtes est ce que vous recherchez. La morphologie change cette apparence — un lévrier et un labrador en pleine forme n'ont pas du tout la même silhouette.",
    workOutPortions: "Calculer les portions de nourriture",
  },
  nl: {
    eyebrow: "Gewicht & conditie",
    weightFor: (name: string) => `Het gewicht van ${name}`,
    weight: "Gewicht",
    noEntries: "Voeg ongeveer één keer per maand een gewicht toe. Twee metingen zijn genoeg om de trend te laten zien.",
    weightAria: "Gewicht in kilogram",
    kg: "kg",
    saveToday: "Gewicht van vandaag opslaan",
    addDogNote: "Voeg eerst uw hond toe, dan onthouden we elke invoer.",
    remove: "Verwijderen",
    latest: "Laatste",
    noEntriesShort: "Nog geen invoer",
    overDays: (n: number) => `Over ${n} dagen`,
    change: "Verandering",
    holdingSteady: "Stabiel",
    sincePercent: (percent: number) => `${percent > 0 ? "+" : ""}${percent}% sinds de eerste invoer`,
    addTwoWeights: "Voeg twee gewichten toe om dit te zien",
    weightVetNote:
      "Een verandering van meer dan ongeveer 10% in beide richtingen, zonder dat u dit van plan was, is het waard om aan uw dierenarts te melden. Vooral plotseling gewichtsverlies.",
    checkEyebrow: "De één-minuut-check",
    checkTitle: "Uw handen vertellen meer dan de weegschaal",
    step: (n: number) => `Stap ${n}`,
    figureAlt:
      "Drie omtrekken van een hond van bovenaf gezien: te mager, precies goed met een duidelijke taille, en te zwaar",
    figCaption:
      "Van bovenaf gezien: een zachte versmalling achter de ribben is waar u naar op zoek bent. Bouw verandert hoe dit eruitziet — een greyhound en een labrador in topvorm zien er totaal anders uit.",
    workOutPortions: "Voedingsporties berekenen",
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
