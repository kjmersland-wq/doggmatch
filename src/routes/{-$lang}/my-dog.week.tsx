import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import { buildWeek, getDayNames, kindLabel } from "@/lib/care/week";
import { recordsStore, useWeekOverride } from "@/lib/care/records";
import { useCareProfile, useMyDog } from "@/lib/care/store";
import { useProgress } from "@/lib/training/store";
import { useCopy } from "@/i18n";
import { seoLinks } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "My Dog Week — a simple week with your dog | DoggMatch";
const description =
  "A calm weekly overview built from your dog's age, breed, activity and training: walks, short sessions, meals and the bits of care that are easy to forget.";

export const Route = createFileRoute("/{-$lang}/my-dog/week")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/my-dog/week"),
  }),
  component: WeekPage,
});

const copy = {
  en: {
    eyebrow: "My Dog Week",
    titleFor: (name: string) => `${name}'s week`,
    titleFallback: "A week with your dog",
    intro:
      "Here's what you may want to remember this week. It's put together from what you've told us about your dog — nothing is fixed, so take out anything that doesn't suit your days.",
    printWeek: "Print this week",
    putBack: "Put the suggestions back",
    today: "Today",
    removeAria: (label: string, day: string) => `Remove ${label} from ${day}`,
    addPlaceholder: "Puppy class, long walk…",
    add: "Add",
    addOwn: "Add something of your own",
    genericNotePrefix: "This week is generic until you tell us about your dog.",
    addDog: "Add your dog",
    genericNoteSuffix: "and it'll fit them properly.",
    vetNote:
      "Days like these are a rhythm, not a rulebook. Some weeks are busier than others, and a missed walk or a skipped brush isn't a failure — it's just life with a dog.",
    footer: (n: number) =>
      `Suggestions for ${n} days, worked out from your dog's details — never from a guess or a model.`,
  },
  no: {
    eyebrow: "Min hundeuke",
    titleFor: (name: string) => `${name}s uke`,
    titleFallback: "En uke med hunden din",
    intro:
      "Her er det du kanskje vil huske denne uken. Det er satt sammen ut fra det du har fortalt oss om hunden din — ingenting er fastlåst, så fjern det som ikke passer dagene dine.",
    printWeek: "Skriv ut denne uken",
    putBack: "Legg tilbake forslagene",
    today: "I dag",
    removeAria: (label: string, day: string) => `Fjern ${label} fra ${day}`,
    addPlaceholder: "Valpekurs, lang tur…",
    add: "Legg til",
    addOwn: "Legg til noe eget",
    genericNotePrefix: "Denne uken er generisk til du forteller oss om hunden din.",
    addDog: "Legg til hunden din",
    genericNoteSuffix: "så tilpasser den seg.",
    vetNote:
      "Dager som disse er en rytme, ikke en regelbok. Noen uker er travlere enn andre, og en tur som uteblir eller en børsting som ikke blir noe av er ikke en fiasko — det er bare livet med hund.",
    footer: (n: number) =>
      `Forslag for ${n} dager, regnet ut fra hundens detaljer — aldri fra en gjetning eller en modell.`,
  },
  pl: {
    eyebrow: "Mój tydzień z psem",
    titleFor: (name: string) => `Tydzień ${name}`,
    titleFallback: "Tydzień z twoim psem",
    intro:
      "Oto, co warto zapamiętać w tym tygodniu. To zestawienie oparte na tym, co powiedziałeś nam o swoim psie — nic nie jest sztywne, więc usuń wszystko, co nie pasuje do twoich dni.",
    printWeek: "Wydrukuj ten tydzień",
    putBack: "Przywróć sugestie",
    today: "Dziś",
    removeAria: (label: string, day: string) => `Usuń ${label} z dnia ${day}`,
    addPlaceholder: "Szkolenie szczeniaka, długi spacer…",
    add: "Dodaj",
    addOwn: "Dodaj coś od siebie",
    genericNotePrefix: "Ten tydzień jest ogólny, dopóki nie opowiesz nam o swoim psie.",
    addDog: "Dodaj swojego psa",
    genericNoteSuffix: "a wtedy dopasujemy go do niego.",
    vetNote:
      "Takie dni to rytm, nie regulamin. Niektóre tygodnie są bardziej zajęte niż inne, a pominięty spacer czy szczotkowanie to nie porażka — to po prostu życie z psem.",
    footer: (n: number) =>
      `Sugestie na ${n} dni, wyliczone na podstawie danych twojego psa — nigdy z domysłu ani z modelu.`,
  },
  dk: {
    eyebrow: "Min hundeuge",
    titleFor: (name: string) => `${name}s uge`,
    titleFallback: "En uge med din hund",
    intro:
      "Her er det, du måske vil huske denne uge. Det er sat sammen ud fra det, du har fortalt os om din hund — intet er fastlåst, så fjern det, der ikke passer til dine dage.",
    printWeek: "Udskriv denne uge",
    putBack: "Sæt forslagene tilbage",
    today: "I dag",
    removeAria: (label: string, day: string) => `Fjern ${label} fra ${day}`,
    addPlaceholder: "Hvalpekursus, lang tur…",
    add: "Tilføj",
    addOwn: "Tilføj noget selv",
    genericNotePrefix: "Denne uge er generisk, indtil du fortæller os om din hund.",
    addDog: "Tilføj din hund",
    genericNoteSuffix: "så tilpasser den sig.",
    vetNote:
      "Dage som disse er en rytme, ikke en regelbog. Nogle uger er mere travle end andre, og en udeblevet tur eller en sprunget børstning er ikke et nederlag — det er bare livet med hund.",
    footer: (n: number) =>
      `Forslag til ${n} dage, beregnet ud fra din hunds detaljer — aldrig ud fra et gæt eller en model.`,
  },
  se: {
    eyebrow: "Min hundvecka",
    titleFor: (name: string) => `${name}s vecka`,
    titleFallback: "En vecka med din hund",
    intro:
      "Här är det du kanske vill komma ihåg den här veckan. Det är sammanställt utifrån vad du har berättat om din hund — inget är låst, så ta bort det som inte passar dina dagar.",
    printWeek: "Skriv ut den här veckan",
    putBack: "Lägg tillbaka förslagen",
    today: "Idag",
    removeAria: (label: string, day: string) => `Ta bort ${label} från ${day}`,
    addPlaceholder: "Valpkurs, lång promenad…",
    add: "Lägg till",
    addOwn: "Lägg till något eget",
    genericNotePrefix: "Den här veckan är generisk tills du berättar om din hund för oss.",
    addDog: "Lägg till din hund",
    genericNoteSuffix: "så anpassas den efter den.",
    vetNote:
      "Dagar som dessa är en rytm, inte en regelbok. Vissa veckor är mer hektiska än andra, och en uteblven promenad eller en missad borstning är inget misslyckande — det är bara livet med hund.",
    footer: (n: number) =>
      `Förslag för ${n} dagar, uträknade utifrån din hunds uppgifter — aldrig från en gissning eller en modell.`,
  },
  fi: {
    eyebrow: "Oma koiraviikko",
    titleFor: (name: string) => `Viikko koiran ${name} kanssa`,
    titleFallback: "Viikko koirasi kanssa",
    intro:
      "Tässä on, mitä kannattaa muistaa tällä viikolla. Se on koottu sen perusteella, mitä olet kertonut meille koirastasi — mikään ei ole kiveen hakattu, joten poista se, mikä ei sovi arkeesi.",
    printWeek: "Tulosta tämä viikko",
    putBack: "Palauta ehdotukset",
    today: "Tänään",
    removeAria: (label: string, day: string) => `Poista ${label} päivästä ${day}`,
    addPlaceholder: "Pentukoulu, pitkä lenkki…",
    add: "Lisää",
    addOwn: "Lisää jotain omaa",
    genericNotePrefix: "Tämä viikko on yleinen, kunnes kerrot meille koirastasi.",
    addDog: "Lisää koirasi",
    genericNoteSuffix: "niin se sovitetaan hänelle sopivaksi.",
    vetNote:
      "Tällaiset päivät ovat rytmi, ei sääntökirja. Jotkut viikot ovat kiireisempiä kuin toiset, eikä väliin jäänyt lenkki tai harjaus ole epäonnistuminen — se on vain elämää koiran kanssa.",
    footer: (n: number) =>
      `Ehdotuksia ${n} päivälle, laskettuna koirasi tietojen perusteella — ei koskaan arvauksesta tai mallista.`,
  },
  de: {
    eyebrow: "Meine Hundewoche",
    titleFor: (name: string) => `Die Woche von ${name}`,
    titleFallback: "Eine Woche mit Ihrem Hund",
    intro:
      "Hier ist, was Sie sich diese Woche merken möchten. Es ist zusammengestellt aus dem, was Sie uns über Ihren Hund erzählt haben — nichts ist festgelegt, also entfernen Sie, was nicht zu Ihren Tagen passt.",
    printWeek: "Diese Woche drucken",
    putBack: "Vorschläge zurücksetzen",
    today: "Heute",
    removeAria: (label: string, day: string) => `${label} von ${day} entfernen`,
    addPlaceholder: "Welpenkurs, langer Spaziergang…",
    add: "Hinzufügen",
    addOwn: "Etwas Eigenes hinzufügen",
    genericNotePrefix: "Diese Woche ist allgemein, bis Sie uns von Ihrem Hund erzählen.",
    addDog: "Fügen Sie Ihren Hund hinzu",
    genericNoteSuffix: "dann passt sie sich ihm an.",
    vetNote:
      "Solche Tage sind ein Rhythmus, kein Regelwerk. Manche Wochen sind hektischer als andere, und ein ausgefallener Spaziergang oder ausgelassenes Bürsten ist kein Versagen — es ist einfach das Leben mit einem Hund.",
    footer: (n: number) =>
      `Vorschläge für ${n} Tage, berechnet aus den Angaben Ihres Hundes — nie aus einer Vermutung oder einem Modell.`,
  },
  fr: {
    eyebrow: "Ma semaine avec mon chien",
    titleFor: (name: string) => `La semaine de ${name}`,
    titleFallback: "Une semaine avec votre chien",
    intro:
      "Voici ce que vous voudrez peut-être retenir cette semaine. C'est établi à partir de ce que vous nous avez dit sur votre chien — rien n'est figé, donc retirez ce qui ne convient pas à vos journées.",
    printWeek: "Imprimer cette semaine",
    putBack: "Remettre les suggestions",
    today: "Aujourd'hui",
    removeAria: (label: string, day: string) => `Retirer ${label} de ${day}`,
    addPlaceholder: "Cours pour chiot, longue promenade…",
    add: "Ajouter",
    addOwn: "Ajouter quelque chose de personnel",
    genericNotePrefix: "Cette semaine est générique jusqu'à ce que vous nous parliez de votre chien.",
    addDog: "Ajoutez votre chien",
    genericNoteSuffix: "et elle s'adaptera à lui.",
    vetNote:
      "Des journées comme celles-ci sont un rythme, pas un règlement. Certaines semaines sont plus chargées que d'autres, et une promenade manquée ou un brossage sauté n'est pas un échec — c'est simplement la vie avec un chien.",
    footer: (n: number) =>
      `Suggestions pour ${n} jours, calculées à partir des informations de votre chien — jamais à partir d'une supposition ou d'un modèle.`,
  },
  nl: {
    eyebrow: "Mijn hondenweek",
    titleFor: (name: string) => `De week van ${name}`,
    titleFallback: "Een week met uw hond",
    intro:
      "Hier is wat u deze week misschien wilt onthouden. Het is samengesteld op basis van wat u ons over uw hond heeft verteld — niets ligt vast, dus verwijder wat niet bij uw dagen past.",
    printWeek: "Deze week afdrukken",
    putBack: "Zet de suggesties terug",
    today: "Vandaag",
    removeAria: (label: string, day: string) => `${label} verwijderen van ${day}`,
    addPlaceholder: "Puppycursus, lange wandeling…",
    add: "Toevoegen",
    addOwn: "Voeg iets van uzelf toe",
    genericNotePrefix: "Deze week is algemeen totdat u ons over uw hond vertelt.",
    addDog: "Voeg uw hond toe",
    genericNoteSuffix: "dan wordt hij op hem/haar afgestemd.",
    vetNote:
      "Dagen zoals deze zijn een ritme, geen regelboek. Sommige weken zijn drukker dan andere, en een gemiste wandeling of overgeslagen borstelbeurt is geen mislukking — het is gewoon het leven met een hond.",
    footer: (n: number) =>
      `Suggesties voor ${n} dagen, berekend op basis van de gegevens van uw hond — nooit op basis van een gok of een model.`,
  },
} as const;

function WeekPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const care = useCareProfile(dog?.id);
  const progress = useProgress(dog?.id);
  const override = useWeekOverride(dog?.id);
  const week = buildWeek(dog, care, progress, override);
  const [adding, setAdding] = useState<number | undefined>(undefined);
  const [text, setText] = useState("");

  const todayIndex = (new Date().getDay() + 6) % 7;

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {dog ? c.titleFor(dog.name) : c.titleFallback}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to={withLangPrefix("/my-dog/print")} size="lg">
            {c.printWeek}
            <Arrow />
          </ButtonLink>
          {(override.removed.length > 0 || override.added.length > 0) && dog && (
            <Button tone="outline" size="lg" onClick={() => recordsStore.restoreWeek(dog.id)}>
              {c.putBack}
            </Button>
          )}
        </div>
      </section>

      <Section className="container-page">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {week.map((day) => (
            <Panel
              key={day.index}
              title={day.name}
              className={day.index === todayIndex ? "border-accent/50" : ""}
              action={
                day.index === todayIndex ? (
                  <span className="text-sm text-accent">{c.today}</span>
                ) : undefined
              }
            >
              <ul className="grid gap-2">
                {day.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-3 rounded-[1rem] border border-border bg-surface px-4 py-3"
                  >
                    <span className="mt-[3px] shrink-0 text-xs uppercase tracking-[0.12em] text-accent">
                      {kindLabel(item.kind)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.9375rem]">{item.label}</span>
                      {item.detail && (
                        <span className="block text-sm text-muted-foreground">{item.detail}</span>
                      )}
                    </span>
                    {dog && (
                      <button
                        type="button"
                        aria-label={c.removeAria(item.label, day.name)}
                        onClick={() => recordsStore.removeWeekItem(dog.id, item.id)}
                        className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {dog && adding === day.index ? (
                <form
                  className="mt-4 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (text.trim()) recordsStore.addWeekItem(dog.id, day.index, text.trim());
                    setText("");
                    setAdding(undefined);
                  }}
                >
                  <input
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={c.addPlaceholder}
                    className="w-full rounded-full border border-border bg-background px-4 py-2 text-[0.9375rem] outline-none focus:border-border-strong"
                  />
                  <Button type="submit" size="md">
                    {c.add}
                  </Button>
                </form>
              ) : (
                dog && (
                  <button
                    type="button"
                    onClick={() => setAdding(day.index)}
                    className="mt-4 text-sm text-accent underline-offset-4 hover:underline"
                  >
                    {c.addOwn}
                  </button>
                )
              )}
            </Panel>
          ))}
        </div>

        {!dog && (
          <p className="mt-8 text-sm text-muted-foreground">
            {c.genericNotePrefix}{" "}
            <a href="/my-dog/setup" className="text-accent underline-offset-4 hover:underline">
              {c.addDog}
            </a>{" "}
            {c.genericNoteSuffix}
          </p>
        )}

        <div className="mt-10 max-w-2xl">
          <VetNote>{c.vetNote}</VetNote>
        </div>
      </Section>

      <p className="container-page text-sm text-muted-foreground">{c.footer(getDayNames().length)}</p>
    </div>
  );
}
