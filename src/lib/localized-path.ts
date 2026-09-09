/**
 * Every page route lives under the optional `{-$lang}` segment (see
 * `src/routes/{-$lang}.tsx`), so a route's real path template is
 * `/{-$lang}/breeds` rather than `/breeds`. Call sites everywhere in this
 * app are written the way they always were — plain, prefix-free app paths
 * like "/breeds" or "/my-dog" — and this is the one place that turns a
 * logical path into the real route id TanStack Router needs for `to`.
 *
 * The language itself doesn't need to be threaded through by hand: TanStack
 * Router carries the current match's params (including `lang`) into any
 * navigation that doesn't explicitly override them, so this only needs to
 * add the segment back into the path string.
 *
 * The return type is a template literal derived from the input, so a
 * literal like "/breeds" comes back as the literal "/{-$lang}/breeds" —
 * matching a real registered route id, and keeping `params`/`search`
 * inference working for callers. A non-literal (dynamic) path widens to
 * `string`, same as it always did.
 */
export function withLangPrefix<T extends string | undefined>(
  to: T,
): T extends "/" ? "/{-$lang}" : T extends `/${string}` ? `/{-$lang}${T}` : T {
  if (typeof to !== "string" || !to.startsWith("/")) return to as never;
  return (to === "/" ? "/{-$lang}" : `/{-$lang}${to}`) as never;
}
