import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { BreedPicker, selectionFromDog, selectionToDog, type BreedSelection } from "@/components/dogmatch/breed-picker";
import { getTrainingGoals } from "@/data/training/categories";
import type { AgeStage, GoalId, Level } from "@/data/training/types";
import type { BreedId } from "@/data/breeds";
import { Arrow, Button, Eyebrow } from "@/components/dogmatch/ui";
import { trainingStore, useActiveDog } from "@/lib/training/store";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Tell us about your dog — Training | DoggMatch";
const description =
  "A few friendly questions about your dog, so the training we suggest actually fits the two of you.";

export const Route = createFileRoute("/{-$lang}/train/setup")({
  head: () => ({
    meta: [
      ...noindexMeta,
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
    links: [{ rel: "canonical", href: abs("/train/setup") }],
  }),
  component: SetupPage,
});

const copy = {
  en: {
    eyebrow: "Your dog",
    title: "Tell us a little about your dog.",
    intro:
      "Only so the training we suggest actually fits the two of you. It stays on this device, and you can change any of it later.",
    nameLabel: "What's their name?",
    namePlaceholder: "Luna",
    ageLabel: "How old is your dog?",
    experienceLabel: "How much training have you done before?",
    levelLabel: "And where are the two of you right now?",
    goalsLabel: "What would you most like to work on together?",
    goalsHint: "Pick as many as you like. Nothing is locked in.",
    notNow: "Not now",
    save: "Save and start training",
    ageStages: [
      { value: "puppy" as const, label: "A puppy", hint: "Up to about six months" },
      { value: "adolescent" as const, label: "A teenager", hint: "Roughly six months to two years" },
      { value: "adult" as const, label: "Grown up", hint: "Somewhere in the middle years" },
      { value: "senior" as const, label: "Getting older", hint: "Slowing down a little" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "This is my first dog", hint: "We'll keep everything simple" },
      { value: "some" as const, label: "I've had a dog before", hint: "You know your way around a treat pouch" },
      { value: "lots" as const, label: "I've trained a fair bit", hint: "Happy to go a bit further" },
    ],
    levels: [
      { value: "beginner" as const, label: "We're just starting", hint: "Almost everything is new" },
      { value: "building" as const, label: "A few things are coming along", hint: "Some days are better than others" },
      { value: "intermediate" as const, label: "The basics are solid", hint: "Ready for distractions" },
      { value: "advanced" as const, label: "We train a lot", hint: "Looking for something more" },
    ],
  },
  no: {
    eyebrow: "Hunden din",
    title: "Fortell oss litt om hunden din.",
    intro:
      "Bare så treningen vi foreslår faktisk passer dere to. Det blir liggende på denne enheten, og du kan endre alt senere.",
    nameLabel: "Hva heter hunden?",
    namePlaceholder: "Luna",
    ageLabel: "Hvor gammel er hunden din?",
    experienceLabel: "Hvor mye trening har du gjort før?",
    levelLabel: "Og hvor er dere to akkurat nå?",
    goalsLabel: "Hva vil dere helst jobbe med sammen?",
    goalsHint: "Velg så mange du vil. Ingenting er bindende.",
    notNow: "Ikke nå",
    save: "Lagre og start treningen",
    ageStages: [
      { value: "puppy" as const, label: "En valp", hint: "Opptil rundt seks måneder" },
      { value: "adolescent" as const, label: "En tenåring", hint: "Cirka seks måneder til to år" },
      { value: "adult" as const, label: "Voksen", hint: "Et sted i de midtre årene" },
      { value: "senior" as const, label: "Blir eldre", hint: "Roer seg litt ned" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "Dette er min første hund", hint: "Vi holder alt enkelt" },
      { value: "some" as const, label: "Jeg har hatt hund før", hint: "Du kjenner godteriposen godt" },
      { value: "lots" as const, label: "Jeg har trent en god del", hint: "Gjerne litt lenger" },
    ],
    levels: [
      { value: "beginner" as const, label: "Vi er akkurat i gang", hint: "Nesten alt er nytt" },
      { value: "building" as const, label: "Noen ting begynner å sitte", hint: "Noen dager er bedre enn andre" },
      { value: "intermediate" as const, label: "Grunnlaget sitter godt", hint: "Klare for forstyrrelser" },
      { value: "advanced" as const, label: "Vi trener mye", hint: "Ser etter noe mer" },
    ],
  },
  pl: {
    eyebrow: "Twój pies",
    title: "Opowiedz nam trochę o swoim psie.",
    intro:
      "Tylko po to, by zaproponowany trening naprawdę pasował do Was dwojga. Zostaje na tym urządzeniu, a wszystko możesz zmienić później.",
    nameLabel: "Jak się nazywa?",
    namePlaceholder: "Luna",
    ageLabel: "Ile lat ma Twój pies?",
    experienceLabel: "Ile treningu miałeś już za sobą?",
    levelLabel: "A na jakim etapie jesteście teraz?",
    goalsLabel: "Nad czym najbardziej chcielibyście razem popracować?",
    goalsHint: "Wybierz tyle, ile chcesz. Nic nie jest wiążące.",
    notNow: "Nie teraz",
    save: "Zapisz i zacznij trening",
    ageStages: [
      { value: "puppy" as const, label: "Szczeniak", hint: "Do około szóstego miesiąca" },
      { value: "adolescent" as const, label: "Nastolatek", hint: "Mniej więcej od sześciu miesięcy do dwóch lat" },
      { value: "adult" as const, label: "Dorosły", hint: "Gdzieś w środkowych latach" },
      { value: "senior" as const, label: "Coraz starszy", hint: "Trochę zwalnia tempo" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "To mój pierwszy pies", hint: "Zaczniemy od podstaw" },
      { value: "some" as const, label: "Miałem już psa wcześniej", hint: "Znasz się na przysmakach" },
      { value: "lots" as const, label: "Trenowałem już sporo", hint: "Chętnie pójdziemy dalej" },
    ],
    levels: [
      { value: "beginner" as const, label: "Dopiero zaczynamy", hint: "Prawie wszystko jest nowe" },
      { value: "building" as const, label: "Niektóre rzeczy zaczynają działać", hint: "Niektóre dni są lepsze od innych" },
      { value: "intermediate" as const, label: "Podstawy są solidne", hint: "Gotowi na rozpraszacze" },
      { value: "advanced" as const, label: "Trenujemy dużo", hint: "Szukamy czegoś więcej" },
    ],
  },
  dk: {
    eyebrow: "Din hund",
    title: "Fortæl os lidt om din hund.",
    intro:
      "Kun så træningen, vi foreslår, faktisk passer jer to. Det bliver på denne enhed, og du kan ændre det hele senere.",
    nameLabel: "Hvad hedder din hund?",
    namePlaceholder: "Luna",
    ageLabel: "Hvor gammel er din hund?",
    experienceLabel: "Hvor meget træning har du gjort før?",
    levelLabel: "Og hvor er I to lige nu?",
    goalsLabel: "Hvad vil I helst arbejde med sammen?",
    goalsHint: "Vælg lige så mange, du vil. Intet er bindende.",
    notNow: "Ikke nu",
    save: "Gem og start træningen",
    ageStages: [
      { value: "puppy" as const, label: "En hvalp", hint: "Op til cirka seks måneder" },
      { value: "adolescent" as const, label: "En teenager", hint: "Cirka seks måneder til to år" },
      { value: "adult" as const, label: "Voksen", hint: "Et sted i de midterste år" },
      { value: "senior" as const, label: "Bliver ældre", hint: "Falder lidt til ro" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "Det her er min første hund", hint: "Vi holder det hele enkelt" },
      { value: "some" as const, label: "Jeg har haft hund før", hint: "Du kender godbidsposen godt" },
      { value: "lots" as const, label: "Jeg har trænet en del", hint: "Gerne lidt længere" },
    ],
    levels: [
      { value: "beginner" as const, label: "Vi er lige startet", hint: "Næsten alt er nyt" },
      { value: "building" as const, label: "Noget begynder at sidde", hint: "Nogle dage er bedre end andre" },
      { value: "intermediate" as const, label: "Grundlaget sidder godt", hint: "Klar til forstyrrelser" },
      { value: "advanced" as const, label: "Vi træner meget", hint: "Leder efter noget mere" },
    ],
  },
  se: {
    eyebrow: "Din hund",
    title: "Berätta lite om din hund.",
    intro:
      "Bara så att träningen vi föreslår faktiskt passar er två. Det stannar på den här enheten, och du kan ändra allt senare.",
    nameLabel: "Vad heter din hund?",
    namePlaceholder: "Luna",
    ageLabel: "Hur gammal är din hund?",
    experienceLabel: "Hur mycket träning har du gjort tidigare?",
    levelLabel: "Och var befinner ni er just nu?",
    goalsLabel: "Vad vill ni helst jobba med tillsammans?",
    goalsHint: "Välj så många du vill. Inget är bindande.",
    notNow: "Inte nu",
    save: "Spara och börja träna",
    ageStages: [
      { value: "puppy" as const, label: "En valp", hint: "Upp till ungefär sex månader" },
      { value: "adolescent" as const, label: "En tonåring", hint: "Ungefär sex månader till två år" },
      { value: "adult" as const, label: "Vuxen", hint: "Någonstans i de mellersta åren" },
      { value: "senior" as const, label: "Blir äldre", hint: "Lugnar ner sig lite" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "Det här är min första hund", hint: "Vi håller allt enkelt" },
      { value: "some" as const, label: "Jag har haft hund tidigare", hint: "Du kan din godispåse" },
      { value: "lots" as const, label: "Jag har tränat en hel del", hint: "Gärna lite längre" },
    ],
    levels: [
      { value: "beginner" as const, label: "Vi har precis börjat", hint: "Nästan allt är nytt" },
      { value: "building" as const, label: "Något börjar sitta", hint: "Vissa dagar är bättre än andra" },
      { value: "intermediate" as const, label: "Grunderna sitter bra", hint: "Redo för distraktioner" },
      { value: "advanced" as const, label: "Vi tränar mycket", hint: "Letar efter något mer" },
    ],
  },
  fi: {
    eyebrow: "Koirasi",
    title: "Kerro meille vähän koirastasi.",
    intro:
      "Vain jotta ehdottamamme koulutus sopii teille molemmille. Tiedot pysyvät tällä laitteella, ja voit muuttaa niitä myöhemmin.",
    nameLabel: "Mikä koirasi nimi on?",
    namePlaceholder: "Luna",
    ageLabel: "Kuinka vanha koirasi on?",
    experienceLabel: "Kuinka paljon koulutuskokemusta sinulla on?",
    levelLabel: "Ja missä te kaksi olette juuri nyt?",
    goalsLabel: "Mitä haluaisitte eniten harjoitella yhdessä?",
    goalsHint: "Valitse niin monta kuin haluat. Mikään ei ole lopullista.",
    notNow: "Ei nyt",
    save: "Tallenna ja aloita koulutus",
    ageStages: [
      { value: "puppy" as const, label: "Pentu", hint: "Noin kuuteen kuukauteen asti" },
      { value: "adolescent" as const, label: "Murrosikäinen", hint: "Noin kuudesta kuukaudesta kahteen vuoteen" },
      { value: "adult" as const, label: "Aikuinen", hint: "Jossain keskivaiheilla" },
      { value: "senior" as const, label: "Ikääntyvä", hint: "Rauhoittuu hieman" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "Tämä on ensimmäinen koirani", hint: "Pidämme kaiken yksinkertaisena" },
      { value: "some" as const, label: "Minulla on ollut koira aiemmin", hint: "Tunnet jo herkkupussin" },
      { value: "lots" as const, label: "Olen kouluttanut aika paljon", hint: "Voidaan mennä pidemmälle" },
    ],
    levels: [
      { value: "beginner" as const, label: "Olemme vasta aloittamassa", hint: "Melkein kaikki on uutta" },
      { value: "building" as const, label: "Jotkin asiat alkavat sujua", hint: "Toiset päivät ovat parempia kuin toiset" },
      { value: "intermediate" as const, label: "Perusteet ovat hallussa", hint: "Valmiina häiriötekijöille" },
      { value: "advanced" as const, label: "Koulutamme paljon", hint: "Etsimme jotain lisää" },
    ],
  },
  de: {
    eyebrow: "Dein Hund",
    title: "Erzähl uns ein wenig von deinem Hund.",
    intro:
      "Nur damit das Training, das wir vorschlagen, wirklich zu euch beiden passt. Es bleibt auf diesem Gerät, und du kannst später alles ändern.",
    nameLabel: "Wie heißt er oder sie?",
    namePlaceholder: "Luna",
    ageLabel: "Wie alt ist dein Hund?",
    experienceLabel: "Wie viel Trainingserfahrung hast du schon?",
    levelLabel: "Und wo steht ihr beide gerade?",
    goalsLabel: "Woran möchtet ihr am liebsten gemeinsam arbeiten?",
    goalsHint: "Wähle so viele du magst. Nichts davon ist fest gebucht.",
    notNow: "Jetzt nicht",
    save: "Speichern und Training starten",
    ageStages: [
      { value: "puppy" as const, label: "Ein Welpe", hint: "Bis etwa sechs Monate" },
      { value: "adolescent" as const, label: "Ein Teenager", hint: "Etwa sechs Monate bis zwei Jahre" },
      { value: "adult" as const, label: "Erwachsen", hint: "Irgendwo in den mittleren Jahren" },
      { value: "senior" as const, label: "Wird älter", hint: "Wird etwas ruhiger" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "Das ist mein erster Hund", hint: "Wir halten alles einfach" },
      { value: "some" as const, label: "Ich hatte schon einen Hund", hint: "Du kennst dich mit dem Leckerlibeutel aus" },
      { value: "lots" as const, label: "Ich habe schon einiges trainiert", hint: "Gerne auch etwas anspruchsvoller" },
    ],
    levels: [
      { value: "beginner" as const, label: "Wir fangen gerade erst an", hint: "Fast alles ist neu" },
      { value: "building" as const, label: "Einiges klappt schon", hint: "Manche Tage sind besser als andere" },
      { value: "intermediate" as const, label: "Die Grundlagen sitzen gut", hint: "Bereit für Ablenkungen" },
      { value: "advanced" as const, label: "Wir trainieren viel", hint: "Wir suchen nach mehr" },
    ],
  },
  fr: {
    eyebrow: "Votre chien",
    title: "Parlez-nous un peu de votre chien.",
    intro:
      "Juste pour que l'entraînement proposé vous convienne vraiment à tous les deux. Ça reste sur cet appareil, et vous pourrez tout modifier plus tard.",
    nameLabel: "Comment s'appelle-t-il ou elle ?",
    namePlaceholder: "Luna",
    ageLabel: "Quel âge a votre chien ?",
    experienceLabel: "Combien d'entraînement avez-vous déjà fait ?",
    levelLabel: "Et où en êtes-vous tous les deux en ce moment ?",
    goalsLabel: "Sur quoi aimeriez-vous le plus travailler ensemble ?",
    goalsHint: "Choisissez-en autant que vous voulez. Rien n'est figé.",
    notNow: "Pas maintenant",
    save: "Enregistrer et commencer l'entraînement",
    ageStages: [
      { value: "puppy" as const, label: "Un chiot", hint: "Jusqu'à environ six mois" },
      { value: "adolescent" as const, label: "Un ado", hint: "Environ six mois à deux ans" },
      { value: "adult" as const, label: "Adulte", hint: "Quelque part dans les années du milieu" },
      { value: "senior" as const, label: "Qui vieillit", hint: "Ralentit un peu" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "C'est mon premier chien", hint: "On garde tout simple" },
      { value: "some" as const, label: "J'ai déjà eu un chien", hint: "Vous savez manier la pochette à friandises" },
      { value: "lots" as const, label: "J'ai déjà pas mal entraîné", hint: "Prêts à aller un peu plus loin" },
    ],
    levels: [
      { value: "beginner" as const, label: "On démarre tout juste", hint: "Presque tout est nouveau" },
      { value: "building" as const, label: "Quelques choses commencent à venir", hint: "Certains jours sont meilleurs que d'autres" },
      { value: "intermediate" as const, label: "Les bases sont solides", hint: "Prêts pour les distractions" },
      { value: "advanced" as const, label: "On s'entraîne beaucoup", hint: "On cherche autre chose" },
    ],
  },
  nl: {
    eyebrow: "Jouw hond",
    title: "Vertel ons iets over je hond.",
    intro:
      "Alleen zodat de training die we voorstellen ook echt bij jullie twee past. Het blijft op dit apparaat, en je kunt alles later nog aanpassen.",
    nameLabel: "Hoe heet hij of zij?",
    namePlaceholder: "Luna",
    ageLabel: "Hoe oud is je hond?",
    experienceLabel: "Hoeveel training heb je al gedaan?",
    levelLabel: "En waar staan jullie twee nu?",
    goalsLabel: "Waar zouden jullie het liefst samen aan willen werken?",
    goalsHint: "Kies er zoveel als je wilt. Niets ligt vast.",
    notNow: "Niet nu",
    save: "Opslaan en beginnen met trainen",
    ageStages: [
      { value: "puppy" as const, label: "Een puppy", hint: "Tot ongeveer zes maanden" },
      { value: "adolescent" as const, label: "Een puber", hint: "Ongeveer zes maanden tot twee jaar" },
      { value: "adult" as const, label: "Volwassen", hint: "Ergens in de middenjaren" },
      { value: "senior" as const, label: "Wordt ouder", hint: "Wordt wat rustiger" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "Dit is mijn eerste hond", hint: "We houden alles simpel" },
      { value: "some" as const, label: "Ik heb eerder een hond gehad", hint: "Je kent de snoepzak al" },
      { value: "lots" as const, label: "Ik heb al aardig wat getraind", hint: "Graag wat verder gaan" },
    ],
    levels: [
      { value: "beginner" as const, label: "We beginnen net", hint: "Bijna alles is nieuw" },
      { value: "building" as const, label: "Sommige dingen beginnen te lukken", hint: "Sommige dagen gaan beter dan andere" },
      { value: "intermediate" as const, label: "De basis zit goed", hint: "Klaar voor afleiding" },
      { value: "advanced" as const, label: "We trainen veel", hint: "Op zoek naar meer" },
    ],
  },
} as const;

function SetupPage() {
  const c = useCopy(copy);
  const navigate = useNavigate();
  const existing = useActiveDog();
  const [name, setName] = useState(existing?.name ?? "");
  const [breedSel, setBreedSel] = useState<BreedSelection>(() => selectionFromDog(existing));
  const [ageStage, setAgeStage] = useState<AgeStage>(existing?.ageStage ?? "puppy");
  const [experience, setExperience] = useState(existing?.experience ?? "first-dog");
  const [level, setLevel] = useState<Level>(existing?.level ?? "beginner");
  const [goals, setGoals] = useState<GoalId[]>(existing?.goals ?? []);

  function toggleGoal(id: GoalId) {
    setGoals((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));
  }

  function save() {
    trainingStore.saveDog({
      ...(existing?.id ? { id: existing.id } : {}),
      name: name.trim() || "your dog",
      ...selectionToDog(breedSel),
      ageStage,
      experience,
      level,
      goals,
    });
    void navigate({ to: withLangPrefix("/train") });
  }

  return (
    <div className="container-page max-w-3xl pt-28 pb-32 md:pt-36">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-5">{c.title}</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>

      <div className="mt-12 space-y-12">
        <Field label={c.nameLabel}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={c.namePlaceholder}
            className="h-14 w-full max-w-sm rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
          />
        </Field>

        <BreedPicker value={breedSel} onChange={setBreedSel} Field={Field} />

        <Field label={c.ageLabel}>
          <Choices options={c.ageStages} value={ageStage} onChange={(v) => setAgeStage(v as AgeStage)} />
        </Field>

        <Field label={c.experienceLabel}>
          <Choices
            options={c.experiences}
            value={experience}
            onChange={(v) => setExperience(v as typeof experience)}
          />
        </Field>

        <Field label={c.levelLabel}>
          <Choices options={c.levels} value={level} onChange={(v) => setLevel(v as Level)} />
        </Field>

        <Field label={c.goalsLabel} hint={c.goalsHint}>
          <div className="flex flex-wrap gap-3">
            {getTrainingGoals().map((g) => {
              const on = goals.includes(g.id);
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleGoal(g.id)}
                  className={cn(
                    "min-h-14 rounded-2xl border px-5 py-3 text-left transition-all duration-300",
                    on
                      ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
                      : "border-border bg-card hover:border-border-strong",
                  )}
                >
                  <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">
                    {g.label}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{g.hint}</span>
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      <div className="sticky bottom-20 mt-14 flex items-center gap-3 border-t border-border bg-background/90 py-5 backdrop-blur-xl lg:bottom-0">
        <Button tone="ghost" onClick={() => void navigate({ to: withLangPrefix("/train") })}>
          {c.notNow}
        </Button>
        <Button size="lg" className="ml-auto" onClick={save}>
          {c.save}
          <Arrow />
        </Button>
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl leading-tight tracking-tight">{label}</h2>
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Choices({
  options,
  value,
  onChange,
}: {
  options: readonly { value: string; label: string; hint: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const on = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.value)}
            className={cn(
              "min-h-16 rounded-2xl border px-5 py-4 text-left transition-all duration-300",
              on
                ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
                : "border-border bg-card hover:border-border-strong",
            )}
          >
            <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">
              {o.label}
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">{o.hint}</span>
          </button>
        );
      })}
    </div>
  );
}
