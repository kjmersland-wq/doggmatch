# Brief 1 — IA, homepage, quiz, result, /plus, nav

Branch: `cc/brief-1-ia-plus` (not pushed). No matching math, questions, scoring or languages were changed.

## Routes touched

| Route | Change |
| --- | --- |
| `/pricing` (+ every `/{lang}/pricing`) | New. 301 → `/plus#membership`, language prefix kept. Was a 404. |
| `/plus` | Waitlist section (`#waitlist`) shown while billing is paused. Plan buttons become "Notify me when membership opens" and scroll to it. The page itself already existed (5k lines: journey, free vs Plus, pricing, FAQ) — it was not empty. |
| `/` | Order: hero → 3 steps → "what makes this different" (2 columns, all five sentences kept) → real matches → breeds → compare → Plus teaser → places → FAQ → closing CTA → section anchors + language links. Secondary hero action is now a text link. |
| `/find-my-dog` | Three chapters (Your days / Your home / Your limits) over the same 15 questions. Single-choice answers advance after 250 ms, except the four hard-limit questions (the switch needs a beat) which keep Continue. Footer, share strip and mobile tab bar are hidden during the quiz. `?r=<answers>` reopens a result. |
| `/find-my-dog` result | Order: top match → actions (profile, compare top 3, copy link, share, share card) → why this score → fit + trade-offs → strengths/considerations → hard-limit notice + removed breeds → alternatives → yearly cost → your dog → adjust answers → free next steps → 30-day plan → mixed-breed builder → DoggMatch+ → dossier → essentials. Plus is never above free value. |
| Header (all routes) | No match yet: Find My Dog · Breeds · DoggMatch+ · More. After a match or dog profile: My match · My Dog · Train · Travel · DoggMatch+ · More. Every previous destination is still reachable via More or the footer. |

## Billing

The existing switch `PURCHASES_ENABLED` in `src/lib/purchases.ts` is the billing flag (the brief's `BILLING_ENABLED`). It is `false`. Server functions for Plus and dossier checkout already throw when it is off; the UI now no longer offers a checkout button at all on `/plus`.

## Not done / needs a decision

- **Waitlist stores name + email only.** The brief asks for locale and result id too; that needs a migration on `plus_waitlist` (applied through Lovable). Not added.
- **OG share image not generated.** The share card is text (breed, %, three reasons, tagline, link). A real image needs a server render route.
- **Alternatives are not diversified.** That needs a rule in the engine (or a breed-group field); left alone per "no new matching math".
- **The paid dossier (with a € price) is still on the result page.** It contradicts "the result page is free"; its button is disabled while billing is off. Your call whether it stays.
- **Cookie banner stays.** PostHog analytics is consent-gated, so a banner is required. It was already pinned to the bottom, max 15 vh.
- **A/B `result-plus-placement` retired.** Plus always renders after the free sections now (`early` broke that rule). `result-plus-cta` still runs. `docs/analytics.md` still mentions the old test.
- New event `result_shared`.

## i18n

All new strings use the existing per-component `useCopy` maps with all nine locales (en, no, pl, dk, se, fi, de, fr, nl). No English fallbacks left; no keys missing. Translations are mine — worth a native read for the tagline and the chapter names.
