import { useMemo, useState } from "react";
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
    links: seoLinks("/get-a-dog/ready"),
  }),
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
