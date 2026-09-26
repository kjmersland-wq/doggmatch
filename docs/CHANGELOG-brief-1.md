# Brief 1 — IA, homepage, quiz, result, /plus, nav

Branch: `cc/brief-1-ia-plus` (not pushed). No matching math, questions, scoring or languages were changed.

## Routes touched

| Route | Change |
| --- | --- |
| `/pricing` (+ every `/{lang}/pricing`) | New. 301 → `/plus#membership`, language prefix kept. Was a 404. |
| `/plus` | Waitlist section (`#waitlist`) shown while billing is paused. Plan buttons become "Notify me when membership opens" and scroll to it. The page itself already existed (5k lines: journey, free vs Plus, pricing, FAQ) — it was not empty. |
| `/` | Order: hero → 3 steps → "what makes this different" (2 columns, all five sentences kept) → real matches → breeds → compare → Plus teaser → places → FAQ → closing CTA → section anchors + language links. Secondary hero action is now a text link. |
| `/find-my-dog` | Three chapters (Your days / Your home / Your limits) over the same 15 questions. Single-choice answers advance after 250 ms, except the four hard-limit questions (the switch needs a beat) which keep Continue. Footer, share strip and mobile tab bar are hidden during the quiz. `?r=<answers>` reopens a result. |
| `/find-my-dog` result | Order: top match → actions (profile, compare top 3, copy link, share, share card) → why this score → fit + trade-offs → strengths/considerations → hard-limit notice + removed breeds → alternatives → yearly cost → your dog → adjust answers → free next steps → 30-day plan → mixed-breed builder → DoggMatch+ (bottom) → essentials. Plus is never above free value. |
| Header (all routes) | No match yet: Find My Dog · Breeds · DoggMatch+ · More. After a match or dog profile: My match · My Dog · Train · Travel · DoggMatch+ · More. Every previous destination is still reachable via More or the footer. |

## Billing

The existing switch `PURCHASES_ENABLED` in `src/lib/purchases.ts` is the billing flag (the brief's `BILLING_ENABLED`). It is `false`. Server functions for Plus and dossier checkout already throw when it is off; the UI now no longer offers a checkout button at all on `/plus`.

## Decisions applied

- **Result page is fully free.** Paid dossier, its price and the disabled button are gone. A DoggMatch+ teaser stays at the bottom and links to `/plus#waitlist` while `PURCHASES_ENABLED=false` (`#membership` once it is true). The dossier is not yet shown on `/plus` — it is per-breed, so it needs a design decision before it goes there.
- **Waitlist:** name + email only. `plus_waitlist` has no column for locale, so nothing extra is written; no migration in this branch. Locale and result id come later.
- **Share:** text card + `?r=` answers link. No OG image.
- **Alternatives:** engine untouched; no diversification and no extra UI (the "Compare the top 3" button already covers it).
- **Cookie banner:** unchanged, pinned at the bottom (PostHog is consent-gated).
- **`result-plus-placement` A/B retired** and marked off in `docs/analytics.md`; `result-plus-cta` is the only result-page test. Report-related events (`full_report_viewed`, `dossier_checkout_started`) are no longer fired from the result page and are marked as such in the doc.
- New event `result_shared`.
- `/pricing` verified: 301 → that locale's `/plus#membership` for en, no, pl, dk, se, fi, de, fr, nl.

## i18n

All new strings use the existing per-component `useCopy` maps with all nine locales (en, no, pl, dk, se, fi, de, fr, nl). No English fallbacks left; no keys missing. Translations are mine — worth a native read for the tagline and the chapter names.
