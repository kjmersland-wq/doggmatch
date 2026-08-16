import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { breeds } from "@/data/breeds";
import { careTopics } from "@/data/care/topics";
import { getLessons } from "@/data/training/lessons";

const BASE_URL = "https://www.doggmatch.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

/** Every public, indexable page. Private/personal areas are deliberately absent. */
function collect(): SitemapEntry[] {
  const staticPaths: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/find-my-dog", changefreq: "monthly", priority: "0.9" },
    { path: "/breeds", changefreq: "weekly", priority: "0.9" },
    { path: "/compare", changefreq: "monthly", priority: "0.8" },
    { path: "/guides", changefreq: "monthly", priority: "0.8" },
    { path: "/dog-life", changefreq: "monthly", priority: "0.6" },
    { path: "/get-a-dog", changefreq: "monthly", priority: "0.8" },
    { path: "/get-a-dog/ready", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/choose", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/costs", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/prepare", changefreq: "monthly", priority: "0.7" },
    { path: "/get-a-dog/welcome-home", changefreq: "monthly", priority: "0.7" },
    { path: "/train", changefreq: "monthly", priority: "0.8" },
    { path: "/train/library", changefreq: "monthly", priority: "0.7" },
    { path: "/train/journey", changefreq: "monthly", priority: "0.6" },
    { path: "/my-dog", changefreq: "monthly", priority: "0.7" },
    { path: "/my-dog/nutrition", changefreq: "monthly", priority: "0.7" },
    { path: "/my-dog/food", changefreq: "monthly", priority: "0.7" },
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
    { path: `/breeds/${b.id}`, changefreq: "monthly" as const, priority: "0.8" },
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

  return [...staticPaths, ...breedPages, ...carePages, ...lessonPages];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = collect().map((e) => {
          const loc = `${BASE_URL}${e.path}`;
          return [
            `  <url>`,
            `    <loc>${loc}</loc>`,
            `    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>`,
            `    <xhtml:link rel="alternate" hreflang="nb-NO" href="${loc}?lang=no"/>`,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n");
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
