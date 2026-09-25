import { createServerFn } from "@tanstack/react-start";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import type { BreedId, BreedTraits } from "@/data/breeds";
import { CLUSTER_OF, CLUSTER_PAGES, CLUSTER_PILLARS, clusterPagePath, type ClusterId } from "./registry";
import type { ClusterContent, ClusterPageCopy, FaqItem } from "./types";

/**
 * Cluster pages read their prose through these server functions, so only the
 * one page, in the one language being read, ever travels to the browser.
 */

const CONTENT: Record<ClusterId, () => Promise<{ content: ClusterContent }>> = {
  apartment: () => import("./content/apartment"),
  "first-time": () => import("./content/first-time"),
  families: () => import("./content/families"),
  "low-shedding": () => import("./content/low-shedding"),
  alone: () => import("./content/alone"),
};

function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as string[]).includes(value);
}

export interface NavLink {
  path: string;
  label: string;
}

export interface ShortlistCard {
  id: BreedId;
  name: string;
  summary: string;
  cost: [number, number];
  levels: number[];
}

export interface ClusterPageData {
  slug: string;
  path: string;
  cluster: ClusterId;
  copy: ClusterPageCopy;
  pillar: NavLink;
  siblings: NavLink[];
  metrics: { key: keyof BreedTraits; label: string }[];
  shortlist: ShortlistCard[];
}

export interface ClusterHubData {
  cluster: ClusterId;
  faq: FaqItem[];
  pages: NavLink[];
}

export const getClusterPage = createServerFn({ method: "GET" })
  .validator((data: { slug: string; locale: string }) => {
    if (!CLUSTER_OF[data.slug]) throw new Error("Unknown guide");
    return { slug: data.slug, locale: isLocale(data.locale) ? data.locale : "en" };
  })
  .handler(async ({ data }): Promise<ClusterPageData> => {
    const cluster = CLUSTER_OF[data.slug]!;
    const [{ content }, { shortlistFor, SHORTLIST_RULES }, { breedContent }, { traitLabels }] =
      await Promise.all([
        CONTENT[cluster](),
        import("./shortlists"),
        import("@/data/breed-content"),
        import("@/lib/breeds/trait-labels"),
      ]);
    const locale = data.locale;
    const prose = breedContent(locale);
    const rule = SHORTLIST_RULES[data.slug]!;

    return {
      slug: data.slug,
      path: clusterPagePath(data.slug),
      cluster,
      copy: content.pages[data.slug]![locale],
      pillar: { path: CLUSTER_PILLARS[cluster], label: content.hub[locale].pillarLabel },
      siblings: CLUSTER_PAGES[cluster]
        .filter((slug) => slug !== data.slug)
        .map((slug) => ({ path: clusterPagePath(slug), label: content.pages[slug]![locale].h1 })),
      metrics: rule.metrics.map((key) => ({ key, label: traitLabels[key][locale] })),
      shortlist: shortlistFor(data.slug).map((breed) => ({
        id: breed.id,
        name: prose[breed.id]?.displayName ?? breed.name,
        summary: prose[breed.id]?.summary ?? "",
        cost: breed.annualCost,
        levels: rule.metrics.map((key) => breed.traits[key]),
      })),
    };
  });

export const getClusterHub = createServerFn({ method: "GET" })
  .validator((data: { cluster: string; locale: string }) => {
    if (!(data.cluster in CLUSTER_PILLARS)) throw new Error("Unknown cluster");
    return { cluster: data.cluster as ClusterId, locale: isLocale(data.locale) ? data.locale : "en" };
  })
  .handler(async ({ data }): Promise<ClusterHubData> => {
    const { content } = await CONTENT[data.cluster]();
    return {
      cluster: data.cluster,
      faq: content.hub[data.locale].faq,
      pages: CLUSTER_PAGES[data.cluster].map((slug) => ({
        path: clusterPagePath(slug),
        label: content.pages[slug]![data.locale].h1,
      })),
    };
  });
