/**
 * The five topic clusters: one pillar guide each, plus focused support pages
 * served at /guides/<slug>. This file stays tiny on purpose — it is read by
 * route heads and the sitemap, which ship in the main bundle. The prose lives
 * server-side in ./content and reaches the page through a server function.
 */

export type ClusterId = "apartment" | "first-time" | "families" | "low-shedding" | "alone";

/** The pillar guide each cluster hangs off. */
export const CLUSTER_PILLARS: Record<ClusterId, string> = {
  apartment: "/best-apartment-dogs",
  "first-time": "/best-dogs-for-first-time-owners",
  families: "/best-dog-breeds-for-families",
  "low-shedding": "/low-shedding-dogs",
  alone: "/dogs-that-can-be-left-alone",
};

/** Support pages, in reading order within each cluster. */
export const CLUSTER_PAGES: Record<ClusterId, readonly string[]> = {
  apartment: [
    "quiet-apartment-dogs",
    "low-energy-apartment-dogs",
    "apartment-dogs-for-working-people",
    "bigger-dogs-for-apartments",
  ],
  "first-time": [
    "easy-to-train-dogs",
    "low-maintenance-first-dogs",
    "calm-dogs-for-beginners",
    "hard-breeds-for-first-time-owners",
  ],
  families: [
    "gentle-dogs-for-young-children",
    "small-family-dogs",
    "family-dogs-good-with-other-pets",
    "low-shedding-family-dogs",
  ],
  "low-shedding": [
    "hypoallergenic-dogs",
    "small-low-shedding-dogs",
    "large-low-shedding-dogs",
    "low-shedding-low-grooming-dogs",
  ],
  alone: [
    "independent-dog-breeds",
    "dogs-for-people-who-work-full-time",
    "small-dogs-that-cope-alone",
    "dogs-that-hate-being-alone",
  ],
};

export const CLUSTER_OF: Record<string, ClusterId> = Object.fromEntries(
  (Object.entries(CLUSTER_PAGES) as [ClusterId, readonly string[]][]).flatMap(([cluster, slugs]) =>
    slugs.map((slug) => [slug, cluster]),
  ),
);

export const clusterPagePath = (slug: string) => `/guides/${slug}`;

export const ALL_CLUSTER_PATHS = Object.keys(CLUSTER_OF).map(clusterPagePath);
