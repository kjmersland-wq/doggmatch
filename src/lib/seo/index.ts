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
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-en.jpg`;

/** Share cards are written in the reader's language, so previews match the page. */
export const OG_IMAGE_BY_LOCALE: Record<"en" | "no" | "pl", string> = {
  en: `${SITE_URL}/og-en.jpg`,
  no: `${SITE_URL}/og-no.jpg`,
  pl: `${SITE_URL}/og-pl.jpg`,
};

export function ogImage(locale: "en" | "no" | "pl"): string {
  return OG_IMAGE_BY_LOCALE[locale] ?? DEFAULT_OG_IMAGE;
}

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

/** Title + description for one language. */
export type SeoCopy = { title: string; description: string };

type HeadCtx = { match?: { search?: unknown } };

/** The language a request asked for (?lang=), readable inside `head()`. */
export function headLocale(ctx: HeadCtx): "en" | "no" | "pl" {
  const raw = String((ctx?.match?.search as { lang?: string } | undefined)?.lang ?? "").toLowerCase();
  if (raw === "no" || raw === "nb" || raw === "nn" || raw === "nb-no") return "no";
  if (raw === "pl" || raw === "pl-pl") return "pl";
  return "en";
}

/**
 * Meta + links for a public page, written in the language the URL asks for.
 * The canonical points at that language's URL and every language lists all
 * three alternates, so EN, NO and PL stay reciprocal.
 */
export function localizedHead(
  ctx: HeadCtx,
  path: string,
  copy: { en: SeoCopy; no?: SeoCopy; pl?: SeoCopy },
  options?: { image?: string; type?: string },
) {
  const locale = headLocale(ctx);
  const { title, description } = (locale === "no" ? copy.no : locale === "pl" ? copy.pl : copy.en) ?? copy.en;
  const url = langUrl(path, locale);
  const image = options?.image ?? ogImage(locale);
  const ogLocale = locale === "no" ? "nb_NO" : locale === "pl" ? "pl_PL" : "en_GB";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: options?.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: ogLocale },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: abs(path) },
      { rel: "alternate", hrefLang: "nb-NO", href: noUrl(path) },
      { rel: "alternate", hrefLang: "pl-PL", href: plUrl(path) },
      { rel: "alternate", hrefLang: "x-default", href: abs(path) },
    ],
  };
}
