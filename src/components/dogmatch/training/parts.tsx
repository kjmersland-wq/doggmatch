import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { Lesson, SkillStatus } from "@/data/training/types";
import { lessonHeroes } from "@/data/training/images";
import { Badge } from "@/components/dogmatch/ui";
import { cn } from "@/lib/utils";
import { useCopy, pick } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

const copy = {
  en: {
    level: {
      beginner: "Beginner",
      building: "Building confidence",
      intermediate: "Intermediate",
      advanced: "Advanced",
    } as Record<Lesson["level"], string>,
    status: {
      "not-started": "Not started",
      practising: "Practising",
      "getting-there": "Getting there",
      learned: "Learned",
    } as Record<SkillStatus, string>,
    howGoing: "How is this going?",
    pause: "Pause",
    startTimer: "Start timer",
    resume: "Resume",
    reset: "Reset",
    goodOne: "Good one",
    rewardsGiven: "rewards given",
  },
  no: {
    level: {
      beginner: "Nybegynner",
      building: "Bygger selvtillit",
      intermediate: "Middels",
      advanced: "Viderekommen",
    } as Record<Lesson["level"], string>,
    status: {
      "not-started": "Ikke startet",
      practising: "Øver på det",
      "getting-there": "Nesten der",
      learned: "Kan det",
    } as Record<SkillStatus, string>,
    howGoing: "Hvordan går det?",
    pause: "Pause",
    startTimer: "Start timer",
    resume: "Fortsett",
    reset: "Nullstill",
    goodOne: "Bra jobba",
    rewardsGiven: "belønninger gitt",
  },
  pl: {
    level: {
      beginner: "Początkujący",
      building: "Budowanie pewności siebie",
      intermediate: "Średnio zaawansowany",
      advanced: "Zaawansowany",
    } as Record<Lesson["level"], string>,
    status: {
      "not-started": "Nierozpoczęte",
      practising: "W trakcie ćwiczeń",
      "getting-there": "Coraz bliżej",
      learned: "Opanowane",
    } as Record<SkillStatus, string>,
    howGoing: "Jak idzie?",
    pause: "Pauza",
    startTimer: "Uruchom stoper",
    resume: "Wznów",
    reset: "Zresetuj",
    goodOne: "Brawo",
    rewardsGiven: "przyznanych nagród",
  },
} as const;

/** English fallback level labels, for use outside React render. */
export const levelLabels: Record<Lesson["level"], string> = copy.en.level;
/** English fallback status labels, for use outside React render. */
export const statusLabels: Record<SkillStatus, string> = copy.en.status;

export function levelLabel(level: Lesson["level"]): string {
  return pick(copy).level[level];
}

export function statusLabel(status: SkillStatus): string {
  return pick(copy).status[status];
}

const statusOrder: SkillStatus[] = ["not-started", "practising", "getting-there", "learned"];

/* ------------------------------------------------------------ Lesson card */

export function LessonCard({
  lesson,
  status = "not-started",
  note,
}: {
  lesson: Lesson;
  status?: SkillStatus | undefined;
  note?: string | undefined;
}) {
  const c = useCopy(copy);
  return (
    <Link
      to={withLangPrefix("/train/lessons/$lessonId")}
      params={{ lessonId: lesson.id }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all duration-300 hover:-translate-y-[2px] hover:border-border-strong hover:shadow-[var(--shadow-soft)]"
    >
      <div className="overflow-hidden">
        <img
          src={lessonHeroes[lesson.id] ?? lessonHeroes["recall"]!}
          alt=""
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          {status !== "not-started" && <Badge tone="accent">{c.status[status]}</Badge>}
        </div>
        <h3 className="mt-3 font-display text-xl leading-tight tracking-tight">{lesson.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{lesson.promise}</p>
        {note && <p className="mt-3 text-sm text-accent">{note}</p>}
        <p className="mt-auto pt-5 text-sm tabular-nums text-muted-foreground">
          {lesson.duration} min · {c.level[lesson.level]}
        </p>
      </div>
    </Link>
  );
}

/* ---------------------------------------------------------- Status picker */

export function StatusPicker({
  value,
  onChange,
  disabled,
}: {
  value: SkillStatus;
  onChange: (s: SkillStatus) => void;
  disabled?: boolean;
}) {
  const c = useCopy(copy);
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={c.howGoing}>
      {statusOrder.map((s) => (
        <button
          key={s}
          type="button"
          disabled={disabled}
          aria-pressed={value === s}
          onClick={() => onChange(s)}
          className={cn(
            "min-h-11 rounded-full border px-4 text-sm transition-colors duration-300 disabled:opacity-50",
            value === s
              ? "border-accent bg-accent-soft text-accent"
              : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
          )}
        >
          {c.status[s]}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ Step visual */

export function StepFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-border bg-surface">
      <img src={src} alt={alt} loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
    </div>
  );
}

/* ------------------------------------------------------------- Small tools */

export function SessionTimer({ minutes }: { minutes: number }) {
  const c = useCopy(copy);
  const [remaining, setRemaining] = useState(minutes * 60);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setRemaining((r) => (r <= 1 ? (setRunning(false), 0) : r - 1));
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-3xl tabular-nums tracking-tight" aria-live="off">
        {mm}:{ss}
      </span>
      <button
        type="button"
        onClick={() => setRunning((v) => !v)}
        className="min-h-11 rounded-full border border-border-strong px-5 text-sm transition-colors hover:bg-surface"
      >
        {running ? c.pause : remaining === minutes * 60 ? c.startTimer : c.resume}
      </button>
      <button
        type="button"
        onClick={() => {
          setRunning(false);
          setRemaining(minutes * 60);
        }}
        className="min-h-11 rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {c.reset}
      </button>
    </div>
  );
}

export function TreatCounter() {
  const c = useCopy(copy);
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="min-h-11 rounded-full bg-primary px-5 text-sm text-primary-foreground transition-transform duration-300 active:scale-95"
      >
        {c.goodOne}
      </button>
      <span className="font-display text-2xl tabular-nums">{count}</span>
      <span className="text-sm text-muted-foreground">{c.rewardsGiven}</span>
      {count > 0 && (
        <button
          type="button"
          onClick={() => setCount(0)}
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          {c.reset}
        </button>
      )}
    </div>
  );
}
