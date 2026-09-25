import type { Locale } from "@/i18n";

export interface FaqItem {
  q: string;
  a: string;
}

/** Everything written by hand for one support page, in one language. */
export interface ClusterPageCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** Two short lines on how the list was built. */
  howChosen: string[];
  listTitle: string;
  /** The honest middle of the page: what living with these dogs is really like, costs included. */
  body: { title: string; paragraphs: string[] };
  /** "Don't pick from this list if…" — three lines. */
  hardLimits: string[];
  faq: FaqItem[];
}

/** Extras for a cluster's pillar guide. */
export interface ClusterHubCopy {
  /** Short name of the pillar, used in "back to" links from support pages. */
  pillarLabel: string;
  faq: FaqItem[];
}

export type ByLocale<T> = Record<Locale, T>;

export interface ClusterContent {
  hub: ByLocale<ClusterHubCopy>;
  pages: Record<string, ByLocale<ClusterPageCopy>>;
}
