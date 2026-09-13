import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { cn } from "@/lib/utils";
import { withLangPrefix } from "@/lib/localized-path";
import type { Lesson } from "@/data/training/types";
import type { PlannedDay, ProgressSummary } from "@/lib/training/schedule";

const copy = {
  en: {
    step: "Step",
    of: "of",
    start: "Start",
    pause: "Pause",
    resume: "Resume",
    reset: "Start over",
    nextStep: "Next step",
    finished: "That's the session. Finish on something easy and let them be brilliant.",
    whyTitle: "Why this one matters",
    markDone: "Mark today's session done",
    doneToday: "Done today — nice one.",
    weekTitle: "Your week",
    restDay: "Lighter day",
    noPlan: "Tell us about your dog and we'll shape a week around the time you actually have.",
    today: "Today",
    minutes: "min",
    streak: "day streak",
    best: "Best so far",
    sessions: "sessions logged",
    learned: "skills you'd call learned",
    practising: "in practice right now",
    thisWeek: "days trained this last week",
  },
  no: {
    step: "Steg",
    of: "av",
    start: "Start",
    pause: "Pause",
    resume: "Fortsett",
    reset: "Start på nytt",
    nextStep: "Neste steg",
    finished: "Da er økta ferdig. Avslutt med noe lett og la hunden få føle seg flink.",
    whyTitle: "Hvorfor denne betyr noe",
    markDone: "Marker dagens økt som gjort",
    doneToday: "Gjort i dag — bra jobba.",
    weekTitle: "Uken deres",
    restDay: "Lettere dag",
    noPlan: "Fortell oss om hunden din, så former vi en uke rundt tiden du faktisk har.",
    today: "I dag",
    minutes: "min",
    streak: "dager på rad",
    best: "Beste så langt",
    sessions: "økter logget",
    learned: "ferdigheter dere kaller lært",
    practising: "under øving nå",
    thisWeek: "dager trent siste uke",
  },
  pl: {
    step: "Krok",
    of: "z",
    start: "Start",
    pause: "Pauza",
    resume: "Wznów",
    reset: "Zacznij od nowa",
    nextStep: "Następny krok",
    finished: "To koniec sesji. Zakończcie czymś łatwym i pozwólcie psu poczuć się świetnie.",
    whyTitle: "Dlaczego to ma znaczenie",
    markDone: "Zapisz dzisiejszą sesję",
    doneToday: "Zrobione dzisiaj — brawo.",
    weekTitle: "Wasz tydzień",
    restDay: "Lżejszy dzień",
    noPlan: "Opowiedz nam o swoim psie, a ułożymy tydzień wokół czasu, który naprawdę masz.",
    today: "Dziś",
    minutes: "min",
    streak: "dni z rzędu",
    best: "Najlepszy wynik",
    sessions: "zapisanych sesji",
    learned: "umiejętności uznanych za opanowane",
    practising: "obecnie ćwiczonych",
    thisWeek: "dni treningu w ostatnim tygodniu",
  },
} as const;

/* --------------------------------------------------------- stepped timer */

/**
 * A timer that follows the lesson instead of just counting down: the current
 * step is on screen, the ring shows how much of it is left, and nothing moves
 * on until you say so.
 */
export function StepTimer({ lesson, minutes }: { lesson: Lesson; minutes: number }) {
  const c = useCopy(copy);
  const steps = lesson.steps.length > 0 ? lesson.steps : [{ title: lesson.title, body: lesson.promise }];
  const perStep = Math.max(30, Math.round((minutes * 60) / steps.length));

  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(perStep);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setRunning(false);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const step = steps[index]!;
  const pct = Math.round(((perStep - remaining) / perStep) * 100);
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  const last = index === steps.length - 1;

  function goNext() {
    if (last) return;
    setIndex(index + 1);
    setRemaining(perStep);
    setRunning(false);
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground">
        {c.step} {index + 1} {c.of} {steps.length}
      </p>
      <h3 className="mt-2 font-display text-lg leading-tight tracking-tight">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-display text-3xl tabular-nums tracking-tight">
          {mm}:{ss}
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(perStep / 60)} {c.minutes}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-linear"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setRunning((v) => !v)}
          className="min-h-11 rounded-full border border-border-strong px-5 text-sm transition-colors hover:bg-surface"
        >
          {running ? c.pause : remaining === perStep ? c.start : c.resume}
        </button>
        {!last && (
          <button
            type="button"
            onClick={goNext}
            className="min-h-11 rounded-full bg-primary px-5 text-sm text-primary-foreground transition-transform duration-300 active:scale-95"
          >
            {c.nextStep}
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setRunning(false);
            setIndex(0);
            setRemaining(perStep);
          }}
          className="min-h-11 px-3 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {c.reset}
        </button>
      </div>

      {last && remaining === 0 && (
        <p className="mt-4 text-sm leading-relaxed text-accent">{c.finished}</p>
      )}
    </div>
  );
}

/* --------------------------------------------------------- why it matters */

export function WhyItMatters({ text }: { text: string }) {
  const c = useCopy(copy);
  return (
    <aside className="rounded-[1.25rem] border border-border bg-surface p-6">
      <h2 className="font-display text-lg leading-tight tracking-tight">{c.whyTitle}</h2>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{text}</p>
    </aside>
  );
}

/* ------------------------------------------------------------- mark done */

export function MarkDoneButton({
  done,
  onDone,
}: {
  done: boolean;
  onDone: () => void;
}) {
  const c = useCopy(copy);
  if (done) return <p className="text-[0.9375rem] text-accent">{c.doneToday}</p>;
  return (
    <button
      type="button"
      onClick={onDone}
      className="min-h-12 rounded-full bg-primary px-6 text-sm text-primary-foreground transition-transform duration-300 active:scale-95"
    >
      {c.markDone}
    </button>
  );
}

/* ------------------------------------------------------------- week plan */

export function WeekPlan({ days }: { days: PlannedDay[] }) {
  const c = useCopy(copy);
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {days.map((d, i) => (
        <li key={d.day} className="bg-background p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-display text-sm tracking-tight text-accent">
              {i === 0 ? c.today : d.label}
            </span>
            <span className="text-xs tabular-nums text-muted-foreground">
              {d.minutes} {c.minutes}
            </span>
          </div>
          {d.easy && <p className="mt-2 text-xs text-muted-foreground">{c.restDay}</p>}
          <ul className="mt-4 space-y-2">
            {d.sessions.map((s) => (
              <li key={s.lesson.id}>
                <Link
                  to={withLangPrefix("/train/lessons/$lessonId")}
                  params={{ lessonId: s.lesson.id }}
                  className="block text-[0.9375rem] leading-snug underline-offset-4 hover:underline"
                >
                  {s.lesson.title}
                </Link>
                <span className="text-xs text-muted-foreground">
                  {s.minutes} {c.minutes}
                </span>
              </li>
            ))}
          </ul>
          {d.done && <p className="mt-4 text-xs text-accent">✓</p>}
        </li>
      ))}
    </ul>
  );
}

export function WeekPlanEmpty() {
  const c = useCopy(copy);
  return (
    <p className="rounded-2xl border border-border bg-surface p-6 leading-relaxed text-muted-foreground">
      {c.noPlan}
    </p>
  );
}

/* -------------------------------------------------------- progress panel */

export function ProgressOverview({ summary, note }: { summary: ProgressSummary; note: string }) {
  const c = useCopy(copy);
  return (
    <div className="rounded-[1.5rem] border border-border bg-surface p-8">
      <div className="flex flex-wrap items-end gap-x-10 gap-y-6">
        <div>
          <p className="font-display text-4xl tabular-nums tracking-tight text-accent">
            {summary.streak}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{c.streak}</p>
        </div>
        <div className="flex gap-2">
          {summary.week.map((d) => (
            <div key={d.day} className="text-center">
              <span
                aria-hidden="true"
                className={cn(
                  "block h-9 w-9 rounded-xl border",
                  d.done ? "border-accent bg-accent/80" : "border-border bg-background",
                  d.today && "ring-2 ring-accent/40",
                )}
              />
              <span className="mt-1 block text-[0.6875rem] text-muted-foreground">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{note}</p>

      <dl className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-4">
        <Fact value={summary.sessions} label={c.sessions} />
        <Fact value={summary.sessionsThisWeek} label={c.thisWeek} />
        <Fact value={summary.practising} label={c.practising} />
        <Fact value={`${summary.learned}/${summary.total}`} label={c.learned} />
      </dl>
      {summary.bestStreak > summary.streak && (
        <p className="mt-5 text-sm text-muted-foreground">
          {c.best}: {summary.bestStreak} {c.streak}
        </p>
      )}
    </div>
  );
}

function Fact({ value, label }: { value: string | number; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl tabular-nums tracking-tight">{value}</dt>
      <dd className="mt-1 text-sm leading-snug text-muted-foreground">{label}</dd>
    </div>
  );
}
