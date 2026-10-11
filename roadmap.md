# Roadmap

## In progress: Stripe → Paddle
- [x] Enable Paddle, create products (€8.49/mnd, €61.99/år)
- [x] Partner discount 25% (sandbox monthly+yearly, live monthly)
- [ ] Partner discount 25% yearly i live-miljø (avbrutt to ganger — opprett på nytt)
- [ ] Paddle client/server utils, price resolver, checkout hook
- [ ] Webhook handler /api/public/payments/webhook + subscriptions-tabell
- [ ] Skriv om plus/dossier checkout, membership, billing portal til Paddle
- [ ] Oppdater viste priser (€7.99→8.49, €59.99→61.99) alle språk
- [ ] PURCHASES_ENABLED = true, fjern Stripe-avhengigheter, CSP for Paddle
- [ ] Typecheck + bygg + verifisering

## Venter
- [ ] Integrere data/betalinger mot km-techlabs.com (brukerens ønske — avklar omfang: sporingsscript peker allerede dit; hva mer skal dit?)
