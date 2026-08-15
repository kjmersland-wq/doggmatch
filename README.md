# DoggMatch

DoggMatch helps people find the dog breed that fits their lifestyle, and gives dog
owners practical tools for training, health, food, care, travel and everyday life.

Live site: https://doggmatch.com
Built and run by KM TECH LABS, Kristiansand, Norway.

## Overview

DoggMatch is a premium, editorial consumer product with a deterministic (non-AI)
matching engine. The journey runs from "should I get a dog" all the way to daily
life with the dog you already have.

## Main functionality

- **Get a Dog** (`/get-a-dog`) — readiness quiz, choosing carefully, costs, preparing
  your home, welcome home.
- **Find My Dog** (`/find-my-dog`) — deterministic compatibility quiz across seven
  scoring dimensions, with transparent result reveal.
- **Breeds** (`/breeds`, `/breeds/$breedId`, `/compare`) — 28 breeds with trait
  scoring, editorial portraits and side-by-side comparison.
- **My Dog** (`/my-dog`) — the personal hub: Today, My Week, food & portions,
  weight log, health/care topics, contacts, vet visits. Multi-dog with switching.
- **Train Your Dog** (`/train`) — lesson library, visual lessons with timers,
  deterministic daily plan and progress tracking.
- **Dog Life** (`/dog-life`) and **Guides** (`/guides`) — everyday-life content.
- **Travel** (`/travel`) — car safety, outdoors, and a country-to-country
  travelling-abroad checker.
- **Print & Save** (`/my-dog/print`, `/my-dog/pack`) — printable A4 documents and
  the full DoggMatch Dog Pack.
- **Contact** (`/contact`) — validated contact form delivered by email.
- **DoggMatch+** (`/plus`) — membership showcase, waitlist and FAQ.
- **Account** (`/account`) — personal settings, kept separate from dog data.

## Technology stack

- TanStack Start (TanStack Router, file-based routes) on Vite 7
- React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Lovable Cloud (Supabase: Postgres, auth, storage) for backend data
- Server functions (`createServerFn`) for server-side logic
- Deployed to a Cloudflare Workers style edge runtime

## Local development

Requires Node.js 20+ (or Bun).

```sh
git clone https://github.com/kjmersland-wq/doggmatch.git
cd doggmatch
npm install
cp .env.example .env   # fill in your own values
npm run dev
```

Production build: `npm run build`.

## Environment variables

See `.env.example` for the full list of names. No values are committed. Secrets are
managed in the Lovable Cloud / hosting environment, never in this repository.

Client-side (publishable): `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`,
`VITE_SUPABASE_PROJECT_ID`.

Server-side only: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`,
`SUPABASE_SERVICE_ROLE_KEY`, `LOVABLE_API_KEY`, `GOOGLE_MAIL_API_KEY`,
`CONTACT_EMAIL`.

## Database setup

SQL migrations live in `supabase/migrations/` and can be applied in order to
recreate the schema, indexes, grants and row-level-security policies.

Current schema:

- `public.plus_waitlist` — DoggMatch+ waitlist (`id`, `first_name`, `email`,
  `consented_at`, `created_at`), unique index on `lower(email)`, RLS enabled with an
  insert-only policy for `anon`/`authenticated` plus length/format checks. Rows are
  readable only with the service role.

Everything else in the product (dog profiles, training progress, care records,
weight logs, contacts, vet visits, readiness answers) is deterministic and stored
locally in the browser, so it is reproducible from code alone with no data export.

No production data is included in this repository.

## Architecture

- **Frontend** — React 19 + TanStack Router file routes in `src/routes`, shared UI in
  `src/components/dogmatch`, content/data in `src/data`, deterministic logic in
  `src/lib`, i18n strings in `src/i18n` (no hard-coded user-facing strings).
- **Backend** — TanStack `createServerFn` server functions (contact sending,
  waitlist signup) plus server routes under `src/routes/api` where needed. No
  separate backend service.
- **Database** — Postgres via Lovable Cloud (Supabase), migrations in
  `supabase/migrations`, RLS on all public tables.
- **Storage** — none in use; all imagery is bundled in `src/assets` or served from
  `public/`.
- **Authentication** — Supabase auth is available through the generated client; the
  current production experience is usable without an account.
- **Email / contact** — contact form validated with Zod server-side, header-injection
  safe MIME construction, honeypot + IP rate limiting, delivered through the Gmail
  connector gateway with an auto-confirmation to the sender.
- **PDF / print system** — no PDF library; printable documents are real HTML pages
  (`src/lib/print`, `src/components/dogmatch/print`) with an A4 `@media print`
  stylesheet, printed or saved as PDF by the browser.
- **PWA** — `public/manifest.webmanifest` with the DoggMatch icon set.
- **SEO** — per-route `head()` metadata, canonical URLs, semantic HTML, JSON-LD,
  `public/robots.txt`, and the social share image `public/og-image.jpg`.
- **Hosting** — Lovable deployment on an edge runtime, custom domain doggmatch.com.
- **External services** — Lovable Cloud (database) and the Gmail connector for
  contact email. Nothing else.

## Assets

All logos, icons, favicons, the OG/Twitter image, illustrations and editorial
photography are project-owned and committed: `public/` for icons, manifest, robots
and the OG image; `src/assets/` for imagery imported by components. No image is
loaded from an external host, so image URLs cannot break.

## Security notes

- `.env`, `.env.*` (except `.env.example`), keys and certificates are gitignored.
- No passwords, API keys, tokens, SMTP credentials or service-role keys are in the
  repository — server code reads them from the environment at request time.
- The service-role key is used only inside server-side modules and never reaches the
  browser bundle.
- Every public table has RLS enabled with narrow policies and explicit grants.
- Contact and waitlist endpoints validate input, use a honeypot and rate limiting.

## Future monetization

DoggMatch+ planned pricing:

- €7.99 / month
- €59.99 / year

The subscription and payment system is **not implemented**. There is no Stripe code,
no Stripe keys and no active checkout — the `/plus` page is a showcase with a
waitlist only.
