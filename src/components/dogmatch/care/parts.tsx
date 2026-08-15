import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import type { CareTopic, FoodItem, FoodSafety } from "@/data/care/types";
import { topicImages, categoryImages } from "@/data/care/images";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- Cards */

export function CareTile({
  to,
  params,
  image,
  title,
  body,
  meta,
}: {
  to: string;
  params?: Record<string, string>;
  image: string;
  title: string;
  body: string;
  meta?: string;
}) {
  return (
    <Link
      to={to as never}
      params={params as never}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all duration-300 hover:-translate-y-[2px] hover:border-border-strong hover:shadow-[var(--shadow-soft)]"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl leading-tight tracking-tight">{title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
        {meta && <p className="mt-auto pt-5 text-sm text-accent">{meta}</p>}
      </div>
    </Link>
  );
}

export function TopicCard({ topic, meta }: { topic: CareTopic; meta?: string }) {
  return (
    <CareTile
      to="/my-dog/care/$topicId"
      params={{ topicId: topic.id }}
      image={topicImages[topic.id] ?? categoryImages[topic.category]}
      title={topic.title}
      body={topic.promise}
      {...(meta ? { meta } : {})}
    />
  );
}

export function Panel({
  title,
  children,
  action,
  className,
}: {
  title?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-[1.5rem] border border-border bg-card p-6 md:p-8", className)}>
      {(title || action) && (
        <div className="mb-5 flex items-baseline justify-between gap-4">
          {title && <h2 className="font-display text-xl tracking-tight">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-[1.25rem] border border-border bg-surface p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-2xl tabular-nums tracking-tight">{value}</p>
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}

/* --------------------------------------------------------- Today's routine */

export function RoutineRow({
  label,
  hint,
  done,
  onToggle,
}: {
  label: string;
  hint?: string;
  done: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={done}
      className={cn(
        "flex w-full items-center gap-4 rounded-[1.15rem] border px-5 py-4 text-left transition-colors duration-300",
        done
          ? "border-accent/45 bg-accent-soft"
          : "border-border bg-surface hover:border-border-strong",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors",
          done ? "border-accent bg-accent text-accent-foreground" : "border-border-strong",
        )}
      >
        {done && <Check className="h-3.5 w-3.5" strokeWidth={2.5} />}
      </span>
      <span className="min-w-0">
        <span className={cn("block text-[0.9375rem]", done && "text-accent")}>{label}</span>
        {hint && <span className="block text-sm text-muted-foreground">{hint}</span>}
      </span>
    </button>
  );
}

/* ------------------------------------------------------------ Weight chart */

export function WeightChart({ entries }: { entries: { day: string; kg: number }[] }) {
  if (entries.length < 2) return null;
  const values = entries.map((e) => e.kg);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const pad = span * 0.35;
  const lo = min - pad;
  const hi = max + pad;
  const w = 640;
  const h = 200;
  const points = entries.map((e, i) => {
    const x = entries.length === 1 ? w / 2 : (i / (entries.length - 1)) * w;
    const y = h - ((e.kg - lo) / (hi - lo)) * h;
    return { x, y, ...e };
  });
  const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <figure className="rounded-[1.25rem] border border-border bg-surface p-5">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full" role="img" aria-label="Weight over time">
        <path d={area} className="fill-accent/10" />
        <path d={line} className="fill-none stroke-accent" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p) => (
          <circle key={p.day} cx={p.x} cy={p.y} r={4} className="fill-accent" />
        ))}
      </svg>
      <figcaption className="mt-3 flex justify-between text-sm tabular-nums text-muted-foreground">
        <span>{entries[0]!.day} · {entries[0]!.kg} kg</span>
        <span>{entries[entries.length - 1]!.day} · {entries[entries.length - 1]!.kg} kg</span>
      </figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------- Food */

export const safetyLabels: Record<FoodSafety, string> = {
  safe: "Fine in small amounts",
  care: "Be careful",
  avoid: "Don't give this",
};

export function SafetyDot({ safety }: { safety: FoodSafety }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-2.5 w-2.5 shrink-0 rounded-full",
        safety === "safe" && "bg-accent",
        safety === "care" && "bg-muted-foreground",
        safety === "avoid" && "bg-destructive",
      )}
    />
  );
}

export function FoodRow({
  item,
  open,
  onToggle,
}: {
  item: FoodItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 py-4 text-left"
      >
        <SafetyDot safety={item.safety} />
        <span className="flex-1 text-[0.9375rem]">{item.name}</span>
        <span
          className={cn(
            "shrink-0 text-sm",
            item.safety === "avoid" ? "text-destructive" : "text-muted-foreground",
          )}
        >
          {safetyLabels[item.safety]}
        </span>
      </button>
      {open && (
        <div className="pb-5 pl-[1.625rem] pr-2">
          <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{item.body}</p>
          {item.serving && (
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="text-foreground">How much: </span>
              {item.serving}
            </p>
          )}
          {item.warning && (
            <p className="mt-3 rounded-[0.9rem] border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {item.warning}
            </p>
          )}
          {item.source && (
            <p className="mt-3 text-xs text-muted-foreground">
              {item.source.label} — {item.source.org}
            </p>
          )}
        </div>
      )}
    </li>
  );
}

/* ------------------------------------------------------------- Reassurance */

export function VetNote({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-[1.25rem] border border-border-strong bg-surface p-6">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Worth knowing</p>
      <p className="mt-3 text-[0.9375rem] leading-relaxed">{children}</p>
    </aside>
  );
}

export function Sources({ sources }: { sources?: { label: string; org: string }[] }) {
  if (!sources?.length) return null;
  return (
    <div className="mt-10 border-t border-border pt-6">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Based on guidance from</p>
      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
        {sources.map((s) => (
          <li key={s.org}>
            {s.org} — {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
