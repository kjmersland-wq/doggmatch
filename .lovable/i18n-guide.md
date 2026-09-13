# DoggMatch multilingual conventions (EN / NO / PL)

English at `/` is the source version. Norwegian (`/no`) and Polish (`/pl`) mirror its structure, images, illustrations, and visual order while localizing text.
Infrastructure already exists — DO NOT invent a second system.

## Helpers (from `@/i18n`)

```tsx
import { useCopy, useT, useLocale, pick, getLocale } from "@/i18n";

const c = useCopy(copy);        // inside React components
const t = useT();               // shared dictionary (src/i18n/en.ts + no.ts)
const v = pick({ en, no });     // outside React (plain modules), reads current locale
```

## Rule 1 — component / route files

Move every user-facing English literal in the file into ONE bilingual object
declared at module scope, then read it with `useCopy`:

```tsx
const copy = {
  en: { title: "Find the dog that's right for your life.", cta: "Start" },
  no: { title: "Finn hunden som passer livet ditt.", cta: "Kom i gang" },
} as const;

function Page() {
  const c = useCopy(copy);
  return <h1>{c.title}</h1>;
}
```

All language branches MUST have exactly the same keys and shape (same array lengths too).
Every image and illustration introduced on the English source page MUST also appear in the same context on `/no` and `/pl`; only its alt text and caption change by language.
Keep aria-labels, placeholders, validation text, empty states, toasts and errors in it.
Do NOT touch `head()` metadata — SSR has no locale; leave meta in English.

## Rule 2 — data files (`*.en.ts`)

Add a `*.no.ts` sibling exporting the SAME export names with the same types,
and a locale-aware accessor module `*.ts` (or extend the existing importer):

```ts
// src/data/foo/content.ts
import * as en from "./content.en";
import * as no from "./content.no";
import { pick } from "@/i18n";
export function fooContent() { return pick({ en, no }); }
```

Consumers call `fooContent()` during render (it reads the live locale) instead of
importing `content.en` directly.

## Rule 3 — plain data modules without an `.en` suffix
(e.g. `src/data/breeds.ts`) — keep the identifiers/ids/slugs English and add
Norwegian text alongside as `{ en, no }` fields, or a parallel `no` map keyed by id,
read via `pick`. Never change ids, slugs, route paths, keys or type names.

## Voice

Norwegian must read as if written by a Norwegian dog person: warm, calm, personal,
plain bokmål. Not machine translation, not corporate, not salesy.
Never translate: DoggMatch, DoggMatch+, KM TECH LABS, Stripe, brand/product names,
breed names stay in common Norwegian usage where one exists (e.g. "Golden retriever"),
technical identifiers, code, ids.

## Non-negotiable

- Do not change functionality, logic, Stripe, auth, database, routing or styling.
- `bunx tsgo --noEmit -p tsconfig.json` must pass for the files you touched.
- Only edit the files assigned to you.

## Rule 4 — lifestyle guides, breed FAQs and calculators

Newer content modules keep every translatable string inside a `{ en: ... }`
locale map, so a translation is added by dropping a sibling key beside the
English one — no component changes, and English keeps showing until the
translation exists.

- `src/lib/guides/lifestyle.ts` — each guide has `seo`, `copy`, `reasons`
  and `costExamples[].sizeLabel` as locale maps. Add `no: { ... }` next to
  `en: { ... }` with the same keys. Do not translate `id`, `path` or breed ids.
- `src/lib/breeds/faq.ts` — answers are locale maps with `{token}`
  placeholders (`{min}`, `{h}`). Keep the tokens; only the sentence changes.
- Components (`cost-calculator.tsx`, `mix-matcher.tsx`, `breed-onward.tsx`,
  `lifestyle-guide.tsx`) hold their UI strings in a local `copy = { en, no, pl }`
  map read through `useCopy`. Add languages there, never inline new text in JSX.

### Keeping content country-neutral

- Use metric units (kg, km, minutes, hours) and ranges, never miles, pounds
  or °F.
- Money is shown in euros and formatted with `Intl.NumberFormat` using
  `INTL_LOCALE[locale]`, so separators follow the reader's language.
- Cost, insurance and rehoming figures are ranges with a visible note that
  they vary by country — never quote one national price, tax rule or law as
  if it applied everywhere.
- No country-specific assumptions in examples (no "your local shelter charges
  X", no national registry names) unless the page is explicitly about one
  country, as the travel rules pages are.
