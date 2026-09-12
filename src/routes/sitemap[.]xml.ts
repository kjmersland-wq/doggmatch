import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { breeds } from "@/data/breeds";
import { careTopics } from "@/data/care/topics";
import { getLessons } from "@/data/training/lessons";
import { foodIds } from "@/lib/food";

const BASE_URL = "https://www.doggmatch.com";

/**
 * Path prefixes that are never indexable (private, personal, or a payment
 * flow — see public/robots.txt). Checked defensively below so a path added
 * to `collect()` by mistake can never reach the sitemap.
 */
const PRIVATE_PREFIXES = [
  "/account",
  "/auth",
  "/checkout",
  "/member-card",
  "/verify",
  "/my-dog/print",
  "/my-dog/pack",
  "/my-dog/contacts",
  "/my-dog/vet",
  "/my-dog/setup",
  "/train/setup",
  "/train/journey",
  "/brochure",
];

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const FEATURED_BREED_IDS = new Set(breeds.slice(0, 4).map((b) => b.id));

/** Every public, indexable page. Private/personal areas are deliberately absent. */
function collect(): SitemapEntry[] {
  const staticPaths: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/find-my-dog", changefreq: "weekly", priority: "0.95" },
    { path: "/breeds", changefreq: "weekly", priority: "0.9" },
    { path: "/compare", changefreq: "monthly", priority: "0.8" },
    { path: "/guides", changefreq: "monthly", priority: "0.8" },
    { path: "/best-dog-breeds-for-families", changefreq: "monthly", priority: "0.8" },
    { path: "/dog-life", changefreq: "monthly", priority: "0.6" },
    { path: "/get-a-dog", changefreq: "monthly", priority: "0.8" },
    { path: "/get-a-dog/ready", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/choose", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/costs", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/prepare", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/welcome-home", changefreq: "monthly", priority: "0.7" },
    { path: "/train", changefreq: "monthly", priority: "0.8" },
    { path: "/train/library", changefreq: "monthly", priority: "0.7" },
    { path: "/my-dog", changefreq: "monthly", priority: "0.7" },
    { path: "/my-dog/nutrition", changefreq: "monthly", priority: "0.7" },
    { path: "/my-dog/food", changefreq: "monthly", priority: "0.7" },
    { path: "/can-dogs-eat", changefreq: "weekly", priority: "0.9" },
    { path: "/my-dog/weight", changefreq: "monthly", priority: "0.6" },
    { path: "/my-dog/week", changefreq: "monthly", priority: "0.6" },
    { path: "/travel", changefreq: "monthly", priority: "0.8" },
    { path: "/travel/abroad", changefreq: "monthly", priority: "0.8" },
    { path: "/travel/car", changefreq: "monthly", priority: "0.6" },
    { path: "/travel/outdoors", changefreq: "monthly", priority: "0.6" },
    { path: "/plus", changefreq: "monthly", priority: "0.8" },
    { path: "/partners", changefreq: "monthly", priority: "0.6" },
    { path: "/sources", changefreq: "monthly", priority: "0.6" },
    { path: "/about", changefreq: "yearly", priority: "0.5" },
    { path: "/contact", changefreq: "yearly", priority: "0.5" },
    { path: "/privacy", changefreq: "yearly", priority: "0.3" },
    { path: "/terms", changefreq: "yearly", priority: "0.3" },
  ];

  const breedPages = breeds.flatMap((b) => [
    {
      path: `/breeds/${b.id}`,
      changefreq: "monthly" as const,
      priority: FEATURED_BREED_IDS.has(b.id) ? "0.9" : "0.8",
    },
    { path: `/get-a-dog/breed/${b.id}`, changefreq: "monthly" as const, priority: "0.6" },
  ]);
  const carePages = careTopics().map((t) => ({
    path: `/my-dog/care/${t.id}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  }));
  const lessonPages = getLessons().map((l) => ({
    path: `/train/lessons/${l.id}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  }));

  const foodPages = foodIds.map((id) => ({
    path: `/can-dogs-eat/${id}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  }));

  const all = [...staticPaths, ...breedPages, ...carePages, ...lessonPages, ...foodPages];

  // Defence in depth: never let a private path or a duplicate reach the sitemap,
  // however it got into the list above.
  const seen = new Set<string>();
  return all.filter((e) => {
    if (PRIVATE_PREFIXES.some((prefix) => e.path === prefix || e.path.startsWith(`${prefix}/`))) return false;
    if (seen.has(e.path)) return false;
    seen.add(e.path);
    return true;
  });
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = collect().flatMap((e) => {
          const localised = (lang: "" | "no" | "pl" | "dk" | "se" | "fi") =>
            lang === "" ? `${BASE_URL}${e.path}` : `${BASE_URL}/${lang}${e.path === "/" ? "" : e.path}`;
          const alternates = [
            `    <xhtml:link rel="alternate" hreflang="en" href="${localised("")}"/>`,
            `    <xhtml:link rel="alternate" hreflang="nb-NO" href="${localised("no")}"/>`,
            `    <xhtml:link rel="alternate" hreflang="pl-PL" href="${localised("pl")}"/>`,
            `    <xhtml:link rel="alternate" hreflang="da-DK" href="${localised("dk")}"/>`,
            `    <xhtml:link rel="alternate" hreflang="sv-SE" href="${localised("se")}"/>`,
            `    <xhtml:link rel="alternate" hreflang="fi-FI" href="${localised("fi")}"/>`,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${localised("")}"/>`,
          ];
          // Each language reading is its own indexable URL.
          return (["", "no", "pl", "dk", "se", "fi"] as const).map((lang) => [
            `  <url>`,
            `    <loc>${localised(lang)}</loc>`,
            ...alternates,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"));
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
