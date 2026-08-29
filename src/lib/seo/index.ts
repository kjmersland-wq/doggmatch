/**
 * Central SEO helpers for DoggMatch.
 *
 * One source of truth for the canonical origin, absolute URLs, hreflang
 * pairs (EN / NO) and the small JSON-LD builders used across routes.
 * Language is a client preference stored per visitor, and the Norwegian
 * reading of a page is addressable with ?lang=no — so that is what the
 * hreflang alternates point at.
 */

export const SITE_URL = "https://www.doggmatch.com";
export const SITE_NAME = "DoggMatch";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Absolute URL for an app path ("/breeds/labrador" -> full https URL). */
export function abs(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** The same page read in another language (English is the bare URL). */
export function langUrl(path: string, lang: "en" | "no" | "pl"): string {
  const url = abs(path);
  if (lang === "en") return url;
  return url.includes("?") ? `${url}&lang=${lang}` : `${url}?lang=${lang}`;
}

/** The Norwegian reading of a page. */
export function noUrl(path: string): string {
  return langUrl(path, "no");
}

/** The Polish reading of a page. */
export function plUrl(path: string): string {
  return langUrl(path, "pl");
}

type LinkTag = { rel: string; href: string; hrefLang?: string };

/**
 * Canonical + a reciprocal hreflang set for a public page. Every language
 * lists all three, so EN, NO and PL point at one another.
 */
export function seoLinks(path: string): LinkTag[] {
  return [
    { rel: "canonical", href: abs(path) },
    { rel: "alternate", hrefLang: "en", href: abs(path) },
    { rel: "alternate", hrefLang: "nb-NO", href: noUrl(path) },
    { rel: "alternate", hrefLang: "pl-PL", href: plUrl(path) },
    { rel: "alternate", hrefLang: "x-default", href: abs(path) },
  ];
}

/** Keep private / personal pages out of the index. */
export const noindexMeta = [
  { name: "robots", content: "noindex, nofollow" },
  { name: "googlebot", content: "noindex, nofollow" },
];

export type Crumb = { name: string; path: string };

/** BreadcrumbList JSON-LD for deeper pages. */
export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: abs(c.path),
      })),
    }),
  };
}

/** Generic JSON-LD script entry. */
export function jsonLd(data: Record<string, unknown>) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({ "@context": "https://schema.org", ...data }),
  };
}
