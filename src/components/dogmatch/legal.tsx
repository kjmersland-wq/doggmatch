import type { ReactNode } from "react";
import { Eyebrow } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";

const copy = {
  en: { lastUpdated: "Last updated: " },
  no: { lastUpdated: "Sist oppdatert: " },
  pl: { lastUpdated: "Ostatnia aktualizacja: " },
  dk: { lastUpdated: "Sidst opdateret: " },
  se: { lastUpdated: "Senast uppdaterad: " },
  fi: { lastUpdated: "Viimeksi päivitetty: " },
} as const;

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  const c = useCopy(copy);
  return (
    <div className="container-page max-w-3xl py-14 md:py-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="display-lg mt-6">{title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
      <p className="mt-4 text-sm text-muted-foreground">{c.lastUpdated}{updated}</p>
      <div className="mt-12 space-y-12">{children}</div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
