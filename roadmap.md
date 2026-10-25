# Roadmap: Creem → innebygd Stripe

## Temporary payments pause
- [ ] Show localized site-wide relocation notice and stop new checkout with one shared switch
- [ ] Verify notice, blocked purchase entry points and continued existing-user access

- [x] Aktiver Lovable Payments med Stripe (testmiljø oppe)
- [x] Produkter/priser: DoggMatch+ €8,69/mnd + €61,99/år (uendret)
- [x] stripe.server.ts + stripe.ts (gateway-klient, webhook-verifisering)
- [x] plus.functions.ts: embedded checkout, partnerkode 25 %/12 mnd (DMPARTNER25), membership, portal
- [x] Webhook: Stripe-events → subscriptions + KM-TECHLABS (ugyldig signatur → 400, verifisert)
- [x] join.tsx: embedded checkout-overlay; membership/portal oppdatert
- [x] Creem-kode og -secrets slettet; alle tekster (9 språk) sier Stripe
- [x] CSP utvidet med Stripe-domener; testmodus-banner montert
- [x] Build OK; founder-livstid verifisert i preview ("You're already a member")
- [ ] Publisert
- [ ] Bruker: Stripe go-live (claim-konto → aktiver → installer Lovable-appen) for ekte betalinger
- [ ] Etter eksplisitt gjenåpning og go-live: ett ekte testkjøp (venter på avsluttet betalingspause)
