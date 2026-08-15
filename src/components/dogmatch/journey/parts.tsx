import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { useGetDog, getDogStore } from "@/lib/getdog/store";

/* ------------------------------------------------------------------ Hero */

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  alt,
  children,
  priority,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  children?: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="container-page pt-24 md:pt-32">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="animate-rise max-w-xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-xl mt-7">{title}</h1>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{body}</p>
          {children && <div className="mt-10 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-surface">
          <img
            src={image}
            alt={alt}
            width={1600}
            height={1100}
            {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Headings */

export function SectionHead({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={cn("display-lg", eyebrow && "mt-6")}>{title}</h2>
      {body && <p className="mt-5 leading-relaxed text-muted-foreground">{body}</p>}
    </div>
  );
}

/* ----------------------------------------------------------------- Cards */

export function CardGrid({
  items,
  columns = 3,
}: {
  items: { title: string; body: string; headline?: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <ul
      className={cn(
        "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {items.map((item) => (
        <li key={item.title} className="bg-background p-7">
          <h3 className="font-display text-lg leading-tight tracking-tight">{item.title}</h3>
          {item.headline && <p className="mt-2 text-[0.9375rem] font-medium text-accent">{item.headline}</p>}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function StepList({ steps }: { steps: { no: string; title: string; body: string }[] }) {
  return (
    <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
      {steps.map((step) => (
        <li key={step.no} className="bg-background p-8 md:p-10">
          <span className="font-display text-sm tabular-nums text-accent">{step.no}</span>
          <h3 className="display-md mt-4">{step.title}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------- Two sides */

export function PointList({
  items,
  tone = "good",
}: {
  items: string[];
  tone?: "good" | "watch";
}) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
          <span aria-hidden="true" className={cn("mt-[2px]", tone === "good" ? "text-primary" : "text-accent")}>
            {tone === "good" ? "✓" : "!"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------- Checklist */

export function Checklist({
  listId,
  items,
  columns = 2,
}: {
  listId: string;
  items: { id: string; label: string; note?: string }[];
  columns?: 1 | 2;
}) {
  const state = useGetDog();
  const ticked = state.checked[listId] ?? [];

  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2")}>
      {items.map((item) => {
        const on = ticked.includes(item.id);
        return (
          <li key={item.id}>
            <label
              className={cn(
                "flex cursor-pointer items-start gap-4 rounded-2xl border px-5 py-4 transition-colors duration-300",
                on ? "border-accent bg-accent-soft/60" : "border-border bg-card hover:border-border-strong",
              )}
            >
              <input
                type="checkbox"
                checked={on}
                onChange={() => getDogStore.toggle(listId, item.id)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "mt-[2px] grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors",
                  on ? "border-accent bg-accent text-accent-foreground" : "border-border-strong",
                )}
              >
                {on && (
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">{item.label}</span>
                {item.note && <span className="mt-1 block text-sm text-muted-foreground">{item.note}</span>}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

/* --------------------------------------------------------------- Notices */

export function Notice({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
      {title && <p className="font-display text-lg leading-tight">{title}</p>}
      <div className={cn("text-[0.9375rem] leading-relaxed text-muted-foreground", title && "mt-3")}>{children}</div>
    </div>
  );
}

/** The quiet "here's what comes next" bar at the foot of every journey page. */
export function NextStep({
  label,
  title,
  to,
  params,
}: {
  label: string;
  title: string;
  to: string;
  params?: Record<string, string>;
}) {
  return (
    <Link
      to={to as never}
      {...(params ? { params: params as never } : {})}
      className="group flex flex-wrap items-center justify-between gap-6 rounded-[1.75rem] border border-border bg-card p-8 transition-colors hover:border-border-strong md:p-10"
    >
      <div>
        <p className="eyebrow">{label}</p>
        <p className="display-md mt-3">{title}</p>
      </div>
      <span className="inline-flex items-center gap-2 text-[0.9375rem] font-medium">
        Continue
        <Arrow />
      </span>
    </Link>
  );
}