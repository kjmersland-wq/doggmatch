# Analytics, KPIs and experiments

DoggMatch measures with **PostHog (EU cloud)**, loaded only after a visitor says
yes to statistics in the cookie notice. Code: `src/lib/analytics.ts`.

## 1. Switching it on

1. Create a project at **eu.posthog.com** (the EU region — data stays in Frankfurt).
2. Copy the *Project API key* (starts with `phc_`; it is public by design).
3. In Lovable → Project settings → Environment, add
   `VITE_POSTHOG_KEY = phc_…` and republish.
4. Open doggmatch.com, accept statistics, click around, and check
   PostHog → Activity for `$pageview`.

Without the key, every tracking call is a silent no-op.

In the PostHog project settings, also turn **off** session replay and
autocapture (the code already disables both; this keeps it that way), and
enable **"Discard client IP data"**.

## 2. Events

| Event | Fired when | Properties |
|---|---|---|
| `$pageview` | every navigation | `$current_url` |
| `quiz_started` | first answer on /find-my-dog | — |
| `quiz_completed` | result screen shown (once per result) | `top_breed`, `top_score`, `matches`, `limits_relaxed` |
| `breed_profile_viewed` | a breed profile opens | `breed`, `has_match_profile` |
| `full_report_viewed` | no longer fired — the report preview was removed from the result page | `breed` |
| `result_shared` | copy link / copy text / native share on the result | `kind`, `breed` |
| `plus_cta_clicked` | any DoggMatch+ link on result, guides or clusters | `source`, `placement`, `variant`, `purchases_open` |
| `dossier_checkout_started` | "buy the report" button (no longer on the result page; billing paused) | `breed`, `lifetime` |
| `signup_started` | a Join DoggMatch+ button | `plan`, `signed_in` |
| `subscription_started` | /checkout/success loads | — |

`source` values: `quiz_result`, `first_30_days`, `pillar_<cluster>`,
`cluster_<slug>`.

Events that happen before the visitor has answered the cookie notice wait in
memory and are sent only if they accept.

## 3. KPI dashboard (build once in PostHog)

Create a dashboard called **DoggMatch KPIs** with these insights:

1. **Traffic** — Trends, `$pageview`, unique users, weekly; breakdown by
   `$current_url` path prefix (`/no`, `/pl`, …) to see languages.
2. **Quiz completion rate** — Funnel: `quiz_started` → `quiz_completed`,
   conversion window 1 hour.
3. **Result → Plus** — Funnel: `quiz_completed` → `plus_cta_clicked` →
   `signup_started` → `subscription_started`, window 14 days.
4. **Report interest** (dormant while the report is off the result page) — Funnel: `quiz_completed` → `full_report_viewed` →
   `dossier_checkout_started`.
5. **Top breeds** — Trends, `breed_profile_viewed`, breakdown by `breed`,
   and `quiz_completed` breakdown by `top_breed`.
6. **Content that converts** — Trends, `plus_cta_clicked`, breakdown by
   `source`.

Weekly read, in this order: completion rate (is the quiz healthy?) →
result-to-Plus funnel (is the offer landing?) → sources (which content
brings people who care?).

Remember that the numbers only cover visitors who accepted statistics.
Compare rates, not absolute counts, with other tools.

## 4. A/B tests (already wired)

Create these as **multivariate feature flags** in PostHog, then attach an
Experiment to each. Everyone without consent — and everyone until the flag
exists — sees `control`.

### `result-plus-cta` — wording of the DoggMatch+ button on the result page

| Variant | Button text (EN) | Idea |
|---|---|---|
| `control` | Explore DoggMatch+ | neutral |
| `first-year` | See what DoggMatch+ adds to the first year | frames Plus as help with a concrete period |
| `weekly` | Plan the first year, week by week | leads with the most tangible feature |

Goal metric: `signup_started`; secondary: `plus_cta_clicked`.

### `result-plus-placement` — RETIRED, not running

Switched off in the brief-1 branch (`cc/brief-1-ia-plus`). The DoggMatch+ block on
the result page now always sits at the bottom, after all free content, so there is
nothing left to test. Do not create or keep a PostHog flag/experiment for it; any
running experiment will only ever serve `bottom`. The paid report card that the old
`bottom` variant referred to was also removed from the result page.

A third idea, not yet built: show the price line (`plusPrice`) **above** the
button instead of below it, to test whether upfront pricing builds trust.

Run each test until PostHog reports significance — with modest traffic that
can take several weeks. Only `result-plus-cta` is live on the result page.

## 5. Performance notes

- Images are WebP; breed portraits keep a JPEG twin for `og:image` only.
  Vite fingerprints `/assets/*` and Nitro serves them with
  `cache-control: public, max-age=31536000, immutable`.
- The largest remaining cost is the **main JavaScript bundle (~2.2 MB,
  ~690 KB gzip)**. Route `head()` and `loader()` functions ship in it, and
  several of them read the full nine-language breed prose (`breedContent()`)
  and page FAQ copy. The fix is the pattern the cluster pages already use:
  fetch that copy through a server function in the loader, so only one
  language for one page reaches the browser.
- Cloudflare (managed by Lovable): if you get dashboard access, enable
  Brotli, HTTP/3 and Early Hints, and keep HTML uncached or short-cached
  (SSR pages vary by language).
