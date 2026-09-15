import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";
import { useCopy } from "@/i18n";

const copy = {
  en: { of: "of" },
  no: { of: "av" },
  pl: { of: "z" },
  dk: { of: "af" },
  se: { of: "av" },
  fi: { of: "/" },
  de: { of: "von" },
  fr: { of: "sur" },
  nl: { of: "van" },
} as const;

/* ---------------------------------------------------------------- Button */

type Tone = "primary" | "outline" | "ghost" | "accent";
type Size = "md" | "lg";

const toneClass: Record<Tone, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-[1px]",
  accent:
    "bg-accent text-accent-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-[1px]",
  outline:
    "border border-border-strong text-foreground hover:bg-surface hover:border-foreground/30",
  ghost: "text-foreground hover:bg-surface",
};

const sizeClass: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 select-none";

export function Button({
  tone = "primary",
  size = "md",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { tone?: Tone; size?: Size }) {
  return (
    <button className={cn(base, toneClass[tone], sizeClass[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  tone = "primary",
  size = "md",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { tone?: Tone; size?: Size }) {
  return (
    <Link className={cn(base, toneClass[tone], sizeClass[size], className)} {...props}>
      {children}
    </Link>
  );
}

/** The arrow that slides on hover — used only on primary calls to action. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn(
        "h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

/* --------------------------------------------------------------- Sections */

export function Section({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 md:py-28 lg:py-36", className)} {...props}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-6 bg-border-strong" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------ Score parts */

export function ScoreBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-display text-sm font-semibold tabular-nums text-foreground">{value}%</span>
      <div className="col-span-2 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-[900ms] ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function TraitMeter({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  const c = useCopy(copy);
  return (
    <div className="flex items-center justify-between gap-6 py-2.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="flex gap-1" role="img" aria-label={`${label}: ${value} ${c.of} ${max}`}>
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-5 rounded-full",
              i < value ? "bg-primary" : "bg-surface-strong",
            )}
          />
        ))}
      </span>
    </div>
  );
}

export function ScoreRing({ value, size = 168 }: { value: number; size?: number }) {
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute text-center">
        <span className="font-display text-5xl font-semibold tabular-nums tracking-tight text-accent">
          {value}
        </span>
        <span className="font-display text-2xl align-top text-accent">%</span>
      </div>
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "primary";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]",
        tone === "neutral" && "bg-surface-strong text-muted-foreground",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "primary" && "bg-primary-soft text-primary",
      )}
    >
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- Toggle */

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-7 w-12 shrink-0 rounded-full border transition-colors duration-200 ease-out",
        checked ? "border-primary bg-primary" : "border-border-strong bg-surface-strong",
      )}
    >
      <span
        className={cn(
          "absolute top-[3px] h-5 w-5 rounded-full bg-background shadow-[var(--shadow-soft)] transition-transform duration-200 ease-out",
          checked ? "translate-x-[22px]" : "translate-x-[3px]",
        )}
        aria-hidden="true"
      />
    </button>
  );
}
