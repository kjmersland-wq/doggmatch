/**
 * Central SEO helpers for DoggMatch.
 *
 * One source of truth for the canonical origin, absolute URLs, hreflang
 * pairs (EN / NO / PL / DK / SE / FI) and the small JSON-LD builders used
 * across routes. The language lives in the path — / is English, /no, /pl,
 * /dk, /se and /fi are the other readings — so that is what canonical and
 * the hreflang alternates point at.
 */

export const SITE_URL = "https://www.doggmatch.com";
export const SITE_NAME = "DoggMatch";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-en.jpg`;

export type Locale = "en" | "no" | "pl" | "dk" | "se" | "fi" | "de" | "fr" | "nl";

/** Share cards are written in the reader's language, so previews match the page. */
const LOCALES: Locale[] = ["en", "no", "pl", "dk", "se", "fi", "de", "fr", "nl"];

function cards(suffix: string): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}/og-${l}${suffix}.jpg`]),
  ) as Record<Locale, string>;
}

/** 1200×630 — Facebook, LinkedIn, X, WhatsApp link previews, Messenger, Slack. */
export const OG_IMAGE_BY_LOCALE = cards("");
/** 1200×1200 — Instagram feed, WhatsApp status, square placements. */
export const OG_SQUARE_BY_LOCALE = cards("-square");
/** 1080×1920 — Instagram / Facebook / TikTok stories and reels covers. */
export const OG_STORY_BY_LOCALE = cards("-story");
/** 1000×1500 — Pinterest pins. */
export const OG_PIN_BY_LOCALE = cards("-pin");

export function ogImage(locale: Locale): string {
  return OG_IMAGE_BY_LOCALE[locale] ?? DEFAULT_OG_IMAGE;
}

export function ogSquare(locale: Locale): string {
  return OG_SQUARE_BY_LOCALE[locale] ?? OG_SQUARE_BY_LOCALE.en;
}

export function ogStory(locale: Locale): string {
  return OG_STORY_BY_LOCALE[locale] ?? OG_STORY_BY_LOCALE.en;
}

export function ogPin(locale: Locale): string {
  return OG_PIN_BY_LOCALE[locale] ?? OG_PIN_BY_LOCALE.en;
}

/** Absolute URL for an app path ("/breeds/labrador" -> full https URL). */
export function abs(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** The same page read in another language (English is the bare, unprefixed path). */
export function langUrl(path: string, lang: Locale): string {
  if (lang === "en") return abs(path);
  return abs(`/${lang}${path === "/" ? "" : path}`);
}

/** The Norwegian reading of a page. */
export function noUrl(path: string): string {
  return langUrl(path, "no");
}

/** The Polish reading of a page. */
export function plUrl(path: string): string {
  return langUrl(path, "pl");
}

/** The Danish reading of a page. */
export function dkUrl(path: string): string {
  return langUrl(path, "dk");
}

/** The Swedish reading of a page. */
export function seUrl(path: string): string {
  return langUrl(path, "se");
}

/** The Finnish reading of a page. */
export function fiUrl(path: string): string {
  return langUrl(path, "fi");
}

/** The German reading of a page. */
export function deUrl(path: string): string {
  return langUrl(path, "de");
}

/** The French reading of a page. */
export function frUrl(path: string): string {
  return langUrl(path, "fr");
}

/** The Dutch reading of a page. */
export function nlUrl(path: string): string {
  return langUrl(path, "nl");
}

type LinkTag = { rel: string; href: string; hreflang?: string };

/**
 * Canonical + a reciprocal hreflang set for a public page. Every language
 * lists all six, so EN, NO, PL, DK, SE and FI point at one another.
 */
export function seoLinks(path: string): LinkTag[] {
  return [
    { rel: "canonical", href: abs(path) },
    { rel: "alternate", hreflang: "en", href: abs(path) },
    { rel: "alternate", hreflang: "nb-NO", href: noUrl(path) },
    { rel: "alternate", hreflang: "pl-PL", href: plUrl(path) },
    { rel: "alternate", hreflang: "da-DK", href: dkUrl(path) },
    { rel: "alternate", hreflang: "sv-SE", href: seUrl(path) },
    { rel: "alternate", hreflang: "fi-FI", href: fiUrl(path) },
    { rel: "alternate", hreflang: "de-DE", href: deUrl(path) },
    { rel: "alternate", hreflang: "fr-FR", href: frUrl(path) },
    { rel: "alternate", hreflang: "nl-NL", href: nlUrl(path) },
    { rel: "alternate", hreflang: "x-default", href: abs(path) },
  ];
}

/** Keep private / personal pages out of the index. */
export const noindexMeta = [
  { name: "robots", content: "noindex, nofollow" },
  { name: "googlebot", content: "noindex, nofollow" },
];

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList JSON-LD for deeper pages. Pass the locale so the trail
 * points at the localized route paths (/no/breeds/..., /de/breeds/...).
 */
export function breadcrumbLd(crumbs: Crumb[], locale: Locale = "en") {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: langUrl(c.path, locale),
      })),
    }),
  };
}

/** FAQPage JSON-LD from plain question / answer pairs. */
export function faqLd(items: { question: string; answer: string }[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: { "@type": "Answer", text: i.answer },
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

type HeadCtx = { params: { lang?: string | undefined } };

/** The language a request asked for (the /no, /pl, /dk, /se, /fi path segment), readable inside `head()`. */
export function headLocale(ctx: HeadCtx): Locale {
  const raw = String(ctx?.params?.lang ?? "").toLowerCase();
  if (raw === "no" || raw === "nb" || raw === "nn" || raw === "nb-no") return "no";
  if (raw === "pl" || raw === "pl-pl") return "pl";
  if (raw === "dk" || raw === "da" || raw === "da-dk") return "dk";
  if (raw === "se" || raw === "sv" || raw === "sv-se") return "se";
  if (raw === "fi" || raw === "fi-fi") return "fi";
  if (raw === "de" || raw === "de-de" || raw === "de-at") return "de";
  if (raw === "fr" || raw === "fr-fr" || raw === "fr-be") return "fr";
  if (raw === "nl" || raw === "nl-nl" || raw === "nl-be") return "nl";
  return "en";
}

const OG_LOCALE: Record<Locale, string> = {
  en: "en_GB",
  no: "nb_NO",
  pl: "pl_PL",
  dk: "da_DK",
  se: "sv_SE",
  fi: "fi_FI",
  de: "de_DE",
  fr: "fr_FR",
  nl: "nl_NL",
};

/** Open Graph locale string for a language ("de" -> "de_DE"). */
export function ogLocaleTag(locale: Locale): string {
  return OG_LOCALE[locale];
}

/**
 * Meta + links for a public page, written in the language the URL asks for.
 * The canonical points at that language's URL and every language lists all
 * six alternates, so EN, NO, PL, DK, SE and FI stay reciprocal.
 */
export function localizedHead(
  ctx: HeadCtx,
  path: string,
  copy: { en: SeoCopy; no?: SeoCopy; pl?: SeoCopy; dk?: SeoCopy; se?: SeoCopy; fi?: SeoCopy; de?: SeoCopy; fr?: SeoCopy; nl?: SeoCopy },
  options?: { image?: string; type?: string },
) {
  const locale = headLocale(ctx);
  const byLocale: Record<Locale, SeoCopy | undefined> = {
    en: copy.en,
    no: copy.no,
    pl: copy.pl,
    dk: copy.dk,
    se: copy.se,
    fi: copy.fi,
    de: copy.de,
    fr: copy.fr,
    nl: copy.nl,
  };
  const { title, description } = byLocale[locale] ?? copy.en;
  const url = langUrl(path, locale);
  const image = options?.image ?? ogImage(locale);
  const ogLocale = OG_LOCALE[locale];
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
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: seoLinks(path).map((l) => (l.rel === "canonical" ? { rel: "canonical", href: url } : l)),
  };
}
