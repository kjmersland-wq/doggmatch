import { createFileRoute, notFound, redirect, Outlet } from "@tanstack/react-router";

/**
 * The only two path prefixes that exist. Bare paths (no prefix) are English.
 * Anything else in this position — /de, /xx, a stray typo — is a real 404,
 * not a silent fall-through to English.
 */
const LANG_PREFIXES = ["no", "pl"] as const;
type LangPrefix = (typeof LANG_PREFIXES)[number];

function isLangPrefix(value: unknown): value is LangPrefix {
  return value === "no" || value === "pl";
}

export const Route = createFileRoute("/{-$lang}")({
  beforeLoad: ({ params, search, location }) => {
    if (params.lang !== undefined && !isLangPrefix(params.lang)) {
      throw notFound();
    }

    // Old ?lang=no / ?lang=pl links (query-param era) still work — permanently
    // redirected to the equivalent /no or /pl path so search engines and
    // anyone's bookmarks converge on the one URL that now carries the language.
    // Built as a plain href: this path is arbitrary and unknown ahead of
    // time, so it doesn't go through the typed to/params route machinery.
    const legacyLang = (search as Record<string, unknown>)["lang"];
    if (params.lang === undefined && isLangPrefix(legacyLang)) {
      const { lang: _lang, ...restSearch } = search as Record<string, unknown>;
      const qs = new URLSearchParams();
      for (const [key, value] of Object.entries(restSearch)) {
        if (value !== undefined) qs.set(key, String(value));
      }
      const query = qs.toString();
      const pathname = location.pathname === "/" ? "" : location.pathname;
      throw redirect({
        href: `/${legacyLang}${pathname}${query ? `?${query}` : ""}`,
        statusCode: 301,
      });
    }
  },
  component: () => <Outlet />,
});
