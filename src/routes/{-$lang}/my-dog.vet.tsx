import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import { recordsStore, useVisits, type VetVisit } from "@/lib/care/records";
import { useCareProfile, useMyDog, todayKey } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Vet visit notes — questions and what you were told | DoggMatch";
const description =
  "Write down what you've noticed and what you want to ask before a vet appointment, then print it and take it with you.";

export const Route = createFileRoute("/{-$lang}/my-dog/vet")({
  head: () => ({
    meta: [
      ...noindexMeta,
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: abs("/my-dog/vet") }],
  }),
  component: VetPage,
});

const fieldClass =
  "mt-2 w-full rounded-[0.9rem] border border-border bg-background px-4 py-3 text-[0.9375rem] outline-none transition-colors focus:border-border-strong";

const copy = {
  en: {
    eyebrow: "Vet visits",
    titleFor: (name: string) => `Taking ${name} to the vet`,
    titleFallback: "Taking your dog to the vet",
    intro:
      "It's easy to forget half of what you meant to say once you're in the room. Write it down here, print it, and take it with you.",
    beforeWeGo: "Before we go",
    date: "Date",
    weight: "Weight (kg)",
    reason: "Why we're going",
    questions: "What I want to ask",
    notes: "What we were told",
    followUp: "Follow-up",
    next: "Next appointment",
    saveVisit: "Save this visit",
    printIt: "Print it",
    addDogNote: "Add your dog first if you'd like this kept for next time.",
    visitsSavedTitle: "Visits you've saved",
    noVisits: "Nothing saved yet. Once you've been, keep the notes here — it helps to look back.",
    remove: "Remove",
    vetNote:
      "This information is entered by you to help organise your observations and questions for a veterinary visit. Your vet is the one who can examine your dog and advise you.",
  },
  de: {
    eyebrow: "Tierarztbesuche",
    titleFor: (name: string) => `Mit ${name} zum Tierarzt`,
    titleFallback: "Mit Ihrem Hund zum Tierarzt",
    intro:
      "Es ist leicht, die Hälfte dessen zu vergessen, was man sagen wollte, sobald man im Raum ist. Schreiben Sie es hier auf, drucken Sie es aus und nehmen Sie es mit.",
    beforeWeGo: "Bevor wir gehen",
    date: "Datum",
    weight: "Gewicht (kg)",
    reason: "Warum wir gehen",
    questions: "Was ich fragen möchte",
    notes: "Was uns gesagt wurde",
    followUp: "Nachsorge",
    next: "Nächster Termin",
    saveVisit: "Diesen Besuch speichern",
    printIt: "Ausdrucken",
    addDogNote: "Fügen Sie zuerst Ihren Hund hinzu, wenn Sie möchten, dass dies für das nächste Mal aufbewahrt wird.",
    visitsSavedTitle: "Gespeicherte Besuche",
    noVisits: "Noch nichts gespeichert. Wenn Sie einmal dort waren, bewahren Sie die Notizen hier auf – es hilft, zurückzublicken.",
    remove: "Entfernen",
    vetNote:
      "Diese Informationen werden von Ihnen eingegeben, um Ihre Beobachtungen und Fragen für einen Tierarztbesuch zu organisieren. Ihr Tierarzt ist derjenige, der Ihren Hund untersuchen und Sie beraten kann.",
  },
  fr: {
    eyebrow: "Visites chez le vétérinaire",
    titleFor: (name: string) => `Emmener ${name} chez le vétérinaire`,
    titleFallback: "Emmener votre chien chez le vétérinaire",
    intro:
      "Il est facile d'oublier la moitié de ce que l'on voulait dire une fois dans la pièce. Notez-le ici, imprimez-le et emportez-le avec vous.",
    beforeWeGo: "Avant de partir",
    date: "Date",
    weight: "Poids (kg)",
    reason: "Pourquoi nous y allons",
    questions: "Ce que je veux demander",
    notes: "Ce qu'on nous a dit",
    followUp: "Suivi",
    next: "Prochain rendez-vous",
    saveVisit: "Enregistrer cette visite",
    printIt: "L'imprimer",
    addDogNote: "Ajoutez d'abord votre chien si vous souhaitez que cela soit conservé pour la prochaine fois.",
    visitsSavedTitle: "Visites que vous avez enregistrées",
    noVisits: "Rien n'est encore enregistré. Une fois que vous y serez allé, conservez les notes ici — cela aide à regarder en arrière.",
    remove: "Supprimer",
    vetNote:
      "Ces informations sont saisies par vous pour vous aider à organiser vos observations et vos questions pour une visite vétérinaire. Votre vétérinaire est la personne qui peut examiner votre chien et vous conseiller.",
  },
  nl: {
    eyebrow: "Dierenartsbezoeken",
    titleFor: (name: string) => `Met ${name} naar de dierenarts`,
    titleFallback: "Met uw hond naar de dierenarts",
    intro:
      "Het is zo gebeurd dat je de helft vergeet wat je wilde zeggen als je eenmaal in de kamer bent. Schrijf het hier op, print het uit en neem het mee.",
    beforeWeGo: "Voordat we gaan",
    date: "Datum",
    weight: "Gewicht (kg)",
    reason: "Waarom we gaan",
    questions: "Wat ik wil vragen",
    notes: "Wat ons verteld is",
    followUp: "Vervolg",
    next: "Volgende afspraak",
    saveVisit: "Dit bezoek opslaan",
    printIt: "Print het uit",
    addDogNote: "Voeg eerst uw hond toe als u dit voor de volgende keer wilt bewaren.",
    visitsSavedTitle: "Opgeslagen bezoeken",
    noVisits: "Nog niets opgeslagen. Als u geweest bent, bewaar de aantekeningen hier — het helpt om terug te kijken.",
    remove: "Verwijderen",
    vetNote:
      "Deze informatie wordt door u ingevoerd om uw observaties en vragen voor een dierenartsbezoek te helpen organiseren. Uw dierenarts is degene die uw hond kan onderzoeken en u advies kan geven.",
  },
  no: {
    eyebrow: "Veterinærbesøk",
    titleFor: (name: string) => `Ta ${name} til veterinæren`,
    titleFallback: "Ta hunden din til veterinæren",
    intro:
      "Det er lett å glemme halvparten av det du hadde tenkt å si når du først står der. Skriv det ned her, skriv det ut, og ta det med deg.",
    beforeWeGo: "Før vi drar",
    date: "Dato",
    weight: "Vekt (kg)",
    reason: "Hvorfor vi skal dit",
    questions: "Det jeg vil spørre om",
    notes: "Det vi fikk beskjed om",
    followUp: "Oppfølging",
    next: "Neste time",
    saveVisit: "Lagre dette besøket",
    printIt: "Skriv ut",
    addDogNote: "Legg til hunden din først hvis du vil ha dette lagret til neste gang.",
    visitsSavedTitle: "Besøk du har lagret",
    noVisits: "Ingenting lagret ennå. Når du har vært der, ta vare på notatene her — det er nyttig å se tilbake på.",
    remove: "Fjern",
    vetNote:
      "Denne informasjonen skrives inn av deg for å organisere dine observasjoner og spørsmål til et veterinærbesøk. Veterinæren din er den som kan undersøke hunden din og gi deg råd.",
  },
  pl: {
    eyebrow: "Wizyty u weterynarza",
    titleFor: (name: string) => `Wizyta ${name} u weterynarza`,
    titleFallback: "Wizyta twojego psa u weterynarza",
    intro:
      "Łatwo zapomnieć o połowie tego, co chciałeś powiedzieć, gdy już jesteś w gabinecie. Zapisz to tutaj, wydrukuj i zabierz ze sobą.",
    beforeWeGo: "Zanim pojedziemy",
    date: "Data",
    weight: "Waga (kg)",
    reason: "Powód wizyty",
    questions: "Co chcę zapytać",
    notes: "Co usłyszeliśmy",
    followUp: "Dalsze kroki",
    next: "Kolejna wizyta",
    saveVisit: "Zapisz tę wizytę",
    printIt: "Wydrukuj",
    addDogNote: "Dodaj najpierw swojego psa, jeśli chcesz zachować to na później.",
    visitsSavedTitle: "Zapisane wizyty",
    noVisits: "Nic jeszcze nie zapisano. Po wizycie zachowaj tu notatki — dobrze mieć do czego wrócić.",
    remove: "Usuń",
    vetNote:
      "Te informacje wpisujesz sam, aby uporządkować swoje obserwacje i pytania przed wizytą u weterynarza. To weterynarz może zbadać twojego psa i udzielić ci porady.",
  },
  dk: {
    eyebrow: "Dyrlægebesøg",
    titleFor: (name: string) => `${name} skal til dyrlægen`,
    titleFallback: "Din hund skal til dyrlægen",
    intro:
      "Det er let at glemme halvdelen af det, du havde tænkt dig at sige, når du først står der. Skriv det ned her, udskriv det, og tag det med dig.",
    beforeWeGo: "Før vi tager afsted",
    date: "Dato",
    weight: "Vægt (kg)",
    reason: "Hvorfor vi skal derhen",
    questions: "Det jeg vil spørge om",
    notes: "Det vi fik at vide",
    followUp: "Opfølgning",
    next: "Næste tid",
    saveVisit: "Gem dette besøg",
    printIt: "Udskriv",
    addDogNote: "Tilføj først din hund, hvis du gerne vil have dette gemt til næste gang.",
    visitsSavedTitle: "Besøg du har gemt",
    noVisits: "Intet gemt endnu. Når du har været der, kan du gemme noterne her — det er nyttigt at kunne se tilbage på.",
    remove: "Fjern",
    vetNote:
      "Denne information indtaster du selv for at organisere dine observationer og spørgsmål til et dyrlægebesøg. Det er din dyrlæge, der kan undersøge din hund og rådgive dig.",
  },
  se: {
    eyebrow: "Veterinärbesök",
    titleFor: (name: string) => `Ta ${name} till veterinären`,
    titleFallback: "Ta din hund till veterinären",
    intro:
      "Det är lätt att glömma hälften av det man tänkt säga när man väl står där. Skriv ner det här, skriv ut det och ta med det.",
    beforeWeGo: "Innan vi åker",
    date: "Datum",
    weight: "Vikt (kg)",
    reason: "Varför vi ska dit",
    questions: "Det jag vill fråga om",
    notes: "Det vi fick veta",
    followUp: "Uppföljning",
    next: "Nästa tid",
    saveVisit: "Spara det här besöket",
    printIt: "Skriv ut",
    addDogNote: "Lägg till din hund först om du vill spara detta till nästa gång.",
    visitsSavedTitle: "Besök du har sparat",
    noVisits: "Inget sparat än. När du har varit där, spara anteckningarna här — det är bra att kunna gå tillbaka till.",
    remove: "Ta bort",
    vetNote:
      "Den här informationen skriver du själv in för att organisera dina observationer och frågor inför ett veterinärbesök. Det är din veterinär som kan undersöka din hund och ge dig råd.",
  },
  fi: {
    eyebrow: "Eläinlääkärikäynnit",
    titleFor: (name: string) => `Koiran ${name} vienti eläinlääkäriin`,
    titleFallback: "Koirasi vienti eläinlääkäriin",
    intro:
      "On helppo unohtaa puolet siitä, mitä aikoi sanoa, kun on jo paikan päällä. Kirjoita se tähän, tulosta se ja ota se mukaan.",
    beforeWeGo: "Ennen kuin lähdemme",
    date: "Päivämäärä",
    weight: "Paino (kg)",
    reason: "Miksi menemme",
    questions: "Mitä haluan kysyä",
    notes: "Mitä meille kerrottiin",
    followUp: "Seuranta",
    next: "Seuraava aika",
    saveVisit: "Tallenna tämä käynti",
    printIt: "Tulosta",
    addDogNote: "Lisää koirasi ensin, jos haluat tämän tallennettuna seuraavaa kertaa varten.",
    visitsSavedTitle: "Tallennetut käynnit",
    noVisits: "Ei vielä tallennettuja käyntejä. Kun olet käynyt, säilytä muistiinpanot täällä — niihin on hyvä palata.",
    remove: "Poista",
    vetNote:
      "Nämä tiedot kirjoitat itse jäsentääksesi havaintosi ja kysymyksesi eläinlääkärikäyntiä varten. Eläinlääkärisi on se, joka voi tutkia koirasi ja antaa sinulle neuvoja.",
  },
} as const;

function VetPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const care = useCareProfile(dog?.id);
  const visits = useVisits(dog?.id);
  const [draft, setDraft] = useState<Omit<VetVisit, "id">>({
    date: todayKey(),
    reason: "",
    ...(care.weightKg ? { weightKg: care.weightKg } : {}),
    questions: "",
    notes: "",
    followUp: "",
    next: "",
  });

  const set = (patch: Partial<VetVisit>) => setDraft((d) => ({ ...d, ...patch }));

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {dog ? c.titleFor(dog.name) : c.titleFallback}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Panel title={c.beforeWeGo}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.date}</span>
                <input
                  type="date"
                  value={draft.date}
                  onChange={(e) => set({ date: e.target.value })}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.weight}</span>
                <input
                  type="number"
                  step="0.1"
                  value={draft.weightKg ?? ""}
                  onChange={(e) =>
                    setDraft((d) => {
                      const next = { ...d };
                      if (e.target.value) next.weightKg = Number(e.target.value);
                      else delete next.weightKg;
                      return next;
                    })
                  }
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.reason}</span>
              <textarea rows={2} value={draft.reason ?? ""} onChange={(e) => set({ reason: e.target.value })} className={fieldClass} />
            </label>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.questions}</span>
              <textarea rows={4} value={draft.questions ?? ""} onChange={(e) => set({ questions: e.target.value })} className={fieldClass} />
            </label>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.notes}</span>
              <textarea rows={4} value={draft.notes ?? ""} onChange={(e) => set({ notes: e.target.value })} className={fieldClass} />
            </label>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.followUp}</span>
                <input value={draft.followUp ?? ""} onChange={(e) => set({ followUp: e.target.value })} className={fieldClass} />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.next}</span>
                <input type="date" value={draft.next ?? ""} onChange={(e) => set({ next: e.target.value })} className={fieldClass} />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => {
                  if (dog) recordsStore.saveVisit(dog.id, draft);
                }}
              >
                {c.saveVisit}
              </Button>
              <ButtonLink to={withLangPrefix("/my-dog/pack")} search={{ docs: "vet" } as never} tone="outline" size="lg">
                {c.printIt}
                <Arrow />
              </ButtonLink>
            </div>
            {!dog && (
              <p className="mt-4 text-sm text-muted-foreground">{c.addDogNote}</p>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <Panel title={c.visitsSavedTitle}>
              {visits.length === 0 ? (
                <p className="text-[0.9375rem] text-muted-foreground">{c.noVisits}</p>
              ) : (
                <ul className="grid gap-3">
                  {visits.map((v) => (
                    <li key={v.id} className="rounded-[1rem] border border-border bg-surface px-4 py-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[0.9375rem] tabular-nums">{v.date}</span>
                        <button
                          type="button"
                          onClick={() => dog && recordsStore.removeVisit(dog.id, v.id)}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {c.remove}
                        </button>
                      </div>
                      {v.reason && <p className="mt-1 text-sm text-muted-foreground">{v.reason}</p>}
                    </li>
                  ))}
                </ul>
              )}
            </Panel>

            <VetNote>{c.vetNote}</VetNote>
          </div>
        </div>
      </Section>
    </div>
  );
}
