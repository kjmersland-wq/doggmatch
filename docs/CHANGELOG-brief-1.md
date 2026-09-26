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

## Follow-up: a calmer companion (no new engine, no new quiz questions)

- **New guide** `/guides/a-calmer-companion` (all nine locales, e.g. `/no/guides/a-calmer-companion`): size, trainability, street manners, health burdens, "small is not the same as easy". Seven breeds from the library: Cavalier King Charles Spaniel, Whippet, Greyhound, Maltese, Havanese, Bichon Frise, Italian Greyhound — each with one real drawback. Flat-faced breeds are left off on purpose and explained. Portraits reused from the breed library. No video (nothing suitable in the repo).
- **Homepage "Four lifestyles, matched"**: fourth card is the real engine's output for "daily walks, quieter home, not too big, easy to live with". The engine's top pick there is the French Bulldog (98%); this card skips flat-faced breeds (listed in `real-matches.tsx`) and says so on the card, so it shows the Cavalier King Charles Spaniel at its real score (98%). Quote and drawback are hand-written and only used if the engine lands on that breed; otherwise the card falls back to the engine's own reasoning. All four cards now carry a breed portrait.
- Quiet link "Want a calmer dog for daily walks?" on `/` and `/get-a-dog`.
- Sitemap entry added. Static route beats `/guides/$slug`, cluster support pages are unaffected.

## Trust pass: health lines in the calmer-companion guide and card

- Health claims now name a body already in `src/data/sources/registry.ts` and end with "general guidance, not a vet": The Kennel Club (UK) and RVC VetCompass for breed health information, the British Veterinary Association for heat risk. The guide ends with a note linking to `/sources`.
- Claims with no source in the registry are softened to "commonly seen in the breed — read the breed profile and ask a vet": Cavalier heart problems, Italian Greyhound legs, flat-faced breathing, back trouble in long-backed dogs. Removed: "very common", "often need surgery", "break easily", "heart screening".
- The homepage card keeps the Cavalier; French Bulldog is not on it. Matching math and homepage order untouched.

## Guides card + twenty more breed deep-dives

- **/guides**: new card `calmer-companion` (all nine locales) after "Calm dogs for quieter homes", which is unchanged. With seven cards the last one spans the row.
- **Breed count**: 78 engine breeds, 78 published pages (each with portrait, profile, trait data, cost and Compare), 10 deep-dives before this pass. Adding breeds to the engine would change matching, so the "missing" editorial layer is the deep-dive (purpose, health, poor match, trade-offs). 20 added, 30 of 78 now.
- **The 20** (in order): whippet, greyhound, poodle, bichon-frise, maltese, havanese, italian-greyhound, pug, shih-tzu, golden-retriever, boston-terrier, papillon, lhasa-apso, miniature-schnauzer, labradoodle, cavapoo, yorkshire-terrier, siberian-husky, pembroke-welsh-corgi, shiba-inu. Chosen from calmer-companion / apartment / first-dog / low-shedding / mismatch guides, the homepage cards and quiz top-3 frequency, then popular searches.
- Files: `src/data/breed-deepdive-more.<locale>.ts`, merged over the base profiles in `breed-content.ts`. Health lines follow the trust rule (commonly seen, read the breed profile and ask a vet, "general guidance, not a vet"; British Veterinary Association only for heat risk in flat-faced breeds).
- Routes, sitemap and `/breeds` already cover all 78 breeds, so nothing new to register.
- Note: the older Cavalier deep-dive still says heart valve disease is "very common"; it predates the trust pass and was not touched.

## Truth pass: breed count

- `/breeds` intro said the engine "draws on a model covering 250+ breeds". It now says the engine scores the published breeds, all the same way, using the live count (78 today). No unpublished library exists. Nine locales. This was the only "250+" claim in `src`, `docs`, `public` or the README.
