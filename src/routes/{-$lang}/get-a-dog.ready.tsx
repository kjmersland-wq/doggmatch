import { useMemo, useState } from "react";
import { localizedHead } from "@/lib/seo";
import { pageSeo } from "@/lib/seo/pages";
import { createFileRoute } from "@tanstack/react-router";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { getReadinessData } from "@/data/getdog/readiness";
import { scoreReadiness } from "@/lib/getdog/readiness";
import { getDogStore, useGetDog } from "@/lib/getdog/store";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { seoLinks } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Is a dog right for your life? A calm readiness check | DoggMatch";
const description =
  "Twelve honest questions about your days, your home, your money and the people around you — and a warm, useful answer. No pass mark, no pressure.";

export const Route = createFileRoute("/{-$lang}/get-a-dog/ready")({
  head: (ctx) => localizedHead(ctx, "/get-a-dog/ready", pageSeo.getDogReady),
  component: ReadyPage,
});

const copy = {
  en: {
    eyebrow: "Is a dog right for your life?",
    of: "of",
    progress: "Progress",
    back: "Back",
    seeWhatIThink: "See what I think",
    continueBtn: "Continue",
    noPassMark: "There's no pass mark here, and no wrong answer.",
    answersOnDevice: "Your answers stay on this device.",
    resultEyebrow: "What we think",
    basedOn: "Based on",
    resultNote: "answers. This isn't a score — it just decides which of three honest answers we give you.",
    notesTitle: "A few things worth sorting out first",
    notesBody:
      "None of these are reasons not to have a dog. They're the things that are much easier to arrange now than later.",
    weveKept: "We've kept the",
    answersHelp: "answers that help with matching, so Find My Dog won't ask you any of them again.",
    findMyDog: "Find My Dog",
    puppyOrAdult: "Puppy or adult?",
    changeAnswers: "Change my answers",
    oneMoreThing: "One more thing",
    oneMoreThingBody:
      "Nothing here is a judgement, and nothing is stored anywhere but this device. If now isn't the right time, a dog will still be there when it is.",
  },
  no: {
    eyebrow: "Er en hund riktig for livet ditt?",
    of: "av",
    progress: "Fremdrift",
    back: "Tilbake",
    seeWhatIThink: "Se hva vi tenker",
    continueBtn: "Fortsett",
    noPassMark: "Det finnes ingen ståkarakter her, og ingen svar er feil.",
    answersOnDevice: "Svarene dine blir liggende på denne enheten.",
    resultEyebrow: "Det vi tenker",
    basedOn: "Basert på",
    resultNote: "svar. Dette er ikke en poengsum — det avgjør bare hvilket av tre ærlige svar vi gir deg.",
    notesTitle: "Noen ting som er verdt å ordne først",
    notesBody:
      "Ingen av disse er grunner til å ikke ha hund. Det er ting som er langt lettere å ordne nå enn senere.",
    weveKept: "Vi har tatt vare på de",
    answersHelp: "svarene som hjelper med matching, så Finn min hund ikke spør om dem igjen.",
    findMyDog: "Finn min hund",
    puppyOrAdult: "Valp eller voksen?",
    changeAnswers: "Endre svarene mine",
    oneMoreThing: "Én ting til",
    oneMoreThingBody:
      "Ingenting her er en dom, og ingenting lagres andre steder enn på denne enheten. Hvis nå ikke er riktig tidspunkt, vil en hund fortsatt være der når det er.",
  },
  pl: {
    eyebrow: "Czy pies pasuje do Twojego życia?",
    of: "z",
    progress: "Postęp",
    back: "Wstecz",
    seeWhatIThink: "Zobacz, co o tym myślimy",
    continueBtn: "Dalej",
    noPassMark: "Nie ma tu progu zaliczenia ani złej odpowiedzi.",
    answersOnDevice: "Twoje odpowiedzi zostają na tym urządzeniu.",
    resultEyebrow: "Co o tym myślimy",
    basedOn: "Na podstawie",
    resultNote: "odpowiedzi. To nie jest wynik punktowy — decyduje jedynie, którą z trzech szczerych odpowiedzi Ci damy.",
    notesTitle: "Kilka spraw warto ogarnąć wcześniej",
    notesBody:
      "Żadna z nich nie jest powodem, by nie mieć psa. To po prostu rzeczy, które dużo łatwiej ustalić teraz niż później.",
    weveKept: "Zachowaliśmy",
    answersHelp: "odpowiedzi, które pomagają w dopasowaniu, więc Znajdź mojego psa nie zapyta o nie ponownie.",
    findMyDog: "Znajdź mojego psa",
    puppyOrAdult: "Szczeniak czy dorosły?",
    changeAnswers: "Zmień moje odpowiedzi",
    oneMoreThing: "Jeszcze jedno",
    oneMoreThingBody:
      "Nic tu nie jest oceną, i nic nie jest przechowywane nigdzie poza tym urządzeniem. Jeśli teraz to nie jest odpowiedni moment, pies wciąż będzie na Ciebie czekał, gdy nadejdzie właściwy czas.",
  },
  dk: {
    eyebrow: "Passer en hund til dit liv?",
    of: "af",
    progress: "Fremgang",
    back: "Tilbage",
    seeWhatIThink: "Se hvad vi tænker",
    continueBtn: "Fortsæt",
    noPassMark: "Der er ingen bestå-grænse her, og intet forkert svar.",
    answersOnDevice: "Dine svar bliver på denne enhed.",
    resultEyebrow: "Det vi tænker",
    basedOn: "Baseret på",
    resultNote: "svar. Det her er ikke en pointsum — det afgør bare hvilket af tre ærlige svar vi giver dig.",
    notesTitle: "Et par ting der er værd at ordne først",
    notesBody:
      "Ingen af dem er grunde til ikke at have hund. Det er ting der er langt lettere at ordne nu end senere.",
    weveKept: "Vi har gemt de",
    answersHelp: "svar der hjælper med matchingen, så Find min hund ikke spørger om dem igen.",
    findMyDog: "Find min hund",
    puppyOrAdult: "Hvalp eller voksen?",
    changeAnswers: "Ret mine svar",
    oneMoreThing: "Én ting til",
    oneMoreThingBody:
      "Intet her er en dom, og intet gemmes andre steder end på denne enhed. Hvis nu ikke er det rigtige tidspunkt, vil en hund stadig være der, når det er.",
  },
  se: {
    eyebrow: "Passar en hund ditt liv?",
    of: "av",
    progress: "Framsteg",
    back: "Tillbaka",
    seeWhatIThink: "Se vad vi tycker",
    continueBtn: "Fortsätt",
    noPassMark: "Det finns ingen gräns för godkänt här, och inget svar är fel.",
    answersOnDevice: "Dina svar stannar på den här enheten.",
    resultEyebrow: "Vad vi tycker",
    basedOn: "Baserat på",
    resultNote: "svar. Det här är inte ett poäng — det avgör bara vilket av tre ärliga svar vi ger dig.",
    notesTitle: "Några saker som är värda att ordna först",
    notesBody:
      "Inget av det här är skäl att inte skaffa hund. Det är saker som är mycket lättare att ordna nu än senare.",
    weveKept: "Vi har sparat de",
    answersHelp: "svaren som hjälper till med matchningen, så Hitta min hund frågar inte om dem igen.",
    findMyDog: "Hitta min hund",
    puppyOrAdult: "Valp eller vuxen?",
    changeAnswers: "Ändra mina svar",
    oneMoreThing: "En sak till",
    oneMoreThingBody:
      "Inget här är en dom, och inget sparas någon annanstans än på den här enheten. Om nu inte är rätt tid finns hunden kvar när det är.",
  },
  fi: {
    eyebrow: "Sopiiko koira elämääsi?",
    of: "/",
    progress: "Eteneminen",
    back: "Takaisin",
    seeWhatIThink: "Katso, mitä ajattelemme",
    continueBtn: "Jatka",
    noPassMark: "Tässä ei ole läpäisyrajaa eikä väärää vastausta.",
    answersOnDevice: "Vastauksesi pysyvät tällä laitteella.",
    resultEyebrow: "Mitä ajattelemme",
    basedOn: "Perustuu",
    resultNote: "vastaukseen. Tämä ei ole pistemäärä — se vain ratkaisee, minkä kolmesta rehellisestä vastauksesta annamme sinulle.",
    notesTitle: "Muutama asia kannattaa hoitaa ensin",
    notesBody:
      "Mikään näistä ei ole syy olla hankkimatta koiraa. Ne on vain paljon helpompi hoitaa nyt kuin myöhemmin.",
    weveKept: "Säilytimme ne",
    answersHelp: "vastausta, jotka auttavat sopivuuden arvioinnissa, joten Löydä koirani ei kysy niitä uudelleen.",
    findMyDog: "Löydä koirani",
    puppyOrAdult: "Pentu vai aikuinen?",
    changeAnswers: "Muuta vastauksiani",
    oneMoreThing: "Vielä yksi asia",
    oneMoreThingBody:
      "Mikään tässä ei ole arvio sinusta, eikä mitään tallenneta muualle kuin tälle laitteelle. Jos nyt ei ole oikea hetki, koira on yhä olemassa, kun se on.",
  },
  de: {
    eyebrow: "Passt ein Hund zu deinem Leben?",
    of: "von",
    progress: "Fortschritt",
    back: "Zurück",
    seeWhatIThink: "Sehen, was wir denken",
    continueBtn: "Weiter",
    noPassMark: "Es gibt hier keine Bestehensgrenze, und keine falsche Antwort.",
    answersOnDevice: "Deine Antworten bleiben auf diesem Gerät.",
    resultEyebrow: "Was wir denken",
    basedOn: "Basierend auf",
    resultNote: "Antworten. Das ist keine Punktzahl — es entscheidet nur, welche von drei ehrlichen Antworten wir dir geben.",
    notesTitle: "Ein paar Dinge, die sich vorher zu klären lohnen",
    notesBody:
      "Keines davon ist ein Grund, keinen Hund zu haben. Es sind Dinge, die sich jetzt viel leichter regeln lassen als später.",
    weveKept: "Wir haben die",
    answersHelp: "Antworten aufbewahrt, die beim Matching helfen, damit Meinen Hund finden dich nicht noch einmal danach fragt.",
    findMyDog: "Meinen Hund finden",
    puppyOrAdult: "Welpe oder erwachsen?",
    changeAnswers: "Meine Antworten ändern",
    oneMoreThing: "Noch etwas",
    oneMoreThingBody:
      "Nichts hier ist eine Bewertung, und nichts wird irgendwo außer auf diesem Gerät gespeichert. Wenn jetzt nicht der richtige Zeitpunkt ist, wird es trotzdem einen Hund geben, wenn er kommt.",
  },
  fr: {
    eyebrow: "Un chien convient-il à votre vie ?",
    of: "sur",
    progress: "Progression",
    back: "Retour",
    seeWhatIThink: "Voir ce que nous en pensons",
    continueBtn: "Continuer",
    noPassMark: "Il n'y a pas de seuil de réussite ici, ni de mauvaise réponse.",
    answersOnDevice: "Vos réponses restent sur cet appareil.",
    resultEyebrow: "Ce que nous en pensons",
    basedOn: "Sur la base de",
    resultNote: "réponses. Ce n'est pas un score — cela détermine simplement laquelle des trois réponses honnêtes nous vous donnons.",
    notesTitle: "Quelques points à régler d'abord",
    notesBody:
      "Aucun d'eux n'est une raison de ne pas avoir de chien. Ce sont des choses bien plus faciles à organiser maintenant que plus tard.",
    weveKept: "Nous avons conservé les",
    answersHelp: "réponses qui aident au matching, afin que Trouver mon chien ne vous les demande plus.",
    findMyDog: "Trouver mon chien",
    puppyOrAdult: "Chiot ou adulte ?",
    changeAnswers: "Modifier mes réponses",
    oneMoreThing: "Encore une chose",
    oneMoreThingBody:
      "Rien ici n'est un jugement, et rien n'est conservé ailleurs que sur cet appareil. Si le moment n'est pas venu, un chien sera toujours là quand il le sera.",
  },
  nl: {
    eyebrow: "Past een hond bij jouw leven?",
    of: "van",
    progress: "Voortgang",
    back: "Terug",
    seeWhatIThink: "Bekijk wat wij denken",
    continueBtn: "Verder",
    noPassMark: "Er is hier geen slaaggrens, en geen fout antwoord.",
    answersOnDevice: "Je antwoorden blijven op dit apparaat.",
    resultEyebrow: "Wat wij denken",
    basedOn: "Gebaseerd op",
    resultNote: "antwoorden. Dit is geen score — het bepaalt alleen welk van de drie eerlijke antwoorden we je geven.",
    notesTitle: "Een paar dingen die het waard zijn om eerst te regelen",
    notesBody:
      "Geen van deze zijn redenen om geen hond te nemen. Het zijn dingen die nu veel makkelijker te regelen zijn dan later.",
    weveKept: "We hebben de",
    answersHelp: "antwoorden bewaard die helpen bij het matchen, zodat Vind mijn hond er niet opnieuw naar vraagt.",
    findMyDog: "Vind mijn hond",
    puppyOrAdult: "Puppy of volwassen?",
    changeAnswers: "Mijn antwoorden wijzigen",
    oneMoreThing: "Nog één ding",
    oneMoreThingBody:
      "Niets hier is een oordeel, en niets wordt ergens anders bewaard dan op dit apparaat. Als nu niet het juiste moment is, is er nog steeds een hond wanneer dat wel zo is.",
  },
} as const;

function ReadyPage() {
  const c = useCopy(copy);
  const { readinessQuestions } = getReadinessData();
  const saved = useGetDog();
  const [answers, setAnswers] = useState<Record<string, string>>(saved.readiness);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(Object.keys(saved.readiness).length >= readinessQuestions.length);

  const question = readinessQuestions[step]!;
  const total = readinessQuestions.length;
  const selected = answers[question.id];
  const progress = Math.round(((step + (selected ? 1 : 0)) / total) * 100);
  const result = useMemo(() => scoreReadiness(answers), [answers]);

  function choose(value: string) {
    setAnswers((a) => ({ ...a, [question.id]: value }));
  }

  function next() {
    if (step + 1 < total) {
      setStep(step + 1);
      return;
    }
    const final = scoreReadiness(answers);
    getDogStore.saveReadiness(answers, final.profile);
    setDone(true);
    window.scrollTo({ top: 0 });
  }

  if (done) {
    return (
      <Result
        onRedo={() => {
          setDone(false);
          setStep(0);
          window.scrollTo({ top: 0 });
        }}
      />
    );
  }

  return (
    <div className="container-page flex min-h-[calc(100vh-72px)] max-w-3xl flex-col py-24 md:py-28">
      <div>
        <div className="flex items-baseline justify-between">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <p className="text-sm tabular-nums text-muted-foreground">
            {step + 1} {c.of} {total}
          </p>
        </div>
        <div
          className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={c.progress}
        >
          <div className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div key={question.id} className="animate-rise mt-12 flex-1 md:mt-16">
        <p className="eyebrow">{question.eyebrow}</p>
        <h1 className="display-lg mt-4">{question.title}</h1>
        {question.help && (
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">{question.help}</p>
        )}

        <fieldset className="mt-10 space-y-3">
          <legend className="sr-only">{question.title}</legend>
          {question.options.map((option) => {
            const isSelected = selected === option.value;
            return (
              <label
                key={option.value}
                className={cn(
                  "flex min-h-16 cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 ease-out",
                  isSelected
                    ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
                    : "border-border bg-card hover:border-border-strong hover:bg-surface/60",
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => choose(option.value)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
                    isSelected ? "border-accent bg-accent" : "border-border-strong",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-accent-foreground transition-transform duration-300",
                      isSelected ? "scale-100" : "scale-0",
                    )}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">{option.label}</span>
                  {option.hint && <span className="mt-1 block text-sm text-muted-foreground">{option.hint}</span>}
                </span>
              </label>
            );
          })}
        </fieldset>
      </div>

      <div className="sticky bottom-20 mt-12 flex items-center gap-3 border-t border-border bg-background/90 py-5 backdrop-blur-xl lg:bottom-0">
        <Button tone="ghost" onClick={() => (step === 0 ? window.history.back() : setStep(step - 1))}>
          {c.back}
        </Button>
        <Button size="lg" className="ml-auto" disabled={!selected} onClick={next}>
          {step + 1 === total ? c.seeWhatIThink : c.continueBtn}
          <Arrow />
        </Button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {c.noPassMark} {result.answered > 0 && c.answersOnDevice}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------- The result */

function Result({ onRedo }: { onRedo: () => void }) {
  const c = useCopy(copy);
  const saved = useGetDog();
  const result = scoreReadiness(saved.readiness);
  const { outcome } = result;

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <Eyebrow>{c.resultEyebrow}</Eyebrow>
        <h1 className="display-xl mt-7">{outcome.title}</h1>
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{outcome.body}</p>

        <div className="mt-10 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong" aria-hidden="true">
          <div className="h-full rounded-full bg-accent transition-[width] duration-[1200ms] ease-out" style={{ width: `${result.percent}%` }} />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          {c.basedOn} {result.answered} {c.of} {result.total} {c.resultNote}
        </p>
      </section>

      {result.notes.length > 0 && (
        <Section className="pt-16 md:pt-20">
          <div className="container-page max-w-3xl">
            <SectionHead title={c.notesTitle} body={c.notesBody} />
            <ul className="mt-10 space-y-4">
              {result.notes.map((note) => (
                <li key={note} className="rounded-2xl border border-border bg-card p-6 text-[0.9375rem] leading-relaxed">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <Section className={cn(result.notes.length ? "pt-0" : "pt-16 md:pt-20")}>
        <div className="container-page max-w-3xl">
          <div className="rounded-[1.75rem] border border-border bg-surface p-8 md:p-12">
            <h2 className="display-md">{outcome.encouragement}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.weveKept} {Object.keys(result.profile).length} {c.answersHelp}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
                {c.findMyDog}
                <Arrow />
              </ButtonLink>
              <ButtonLink to={withLangPrefix("/get-a-dog/choose")} tone="outline" size="lg">
                {c.puppyOrAdult}
              </ButtonLink>
              <Button tone="ghost" size="lg" onClick={onRedo}>
                {c.changeAnswers}
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <Notice title={c.oneMoreThing}>{c.oneMoreThingBody}</Notice>
          </div>
        </div>
      </Section>
    </div>
  );
}
