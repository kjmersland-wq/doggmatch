# Roadmap

## In progress: Creem → innebygd Stripe (Lovable Payments)
- [ ] Enable built-in Stripe via enable_stripe_payments
- [ ] Delete all Creem code: checkout, webhook, membership, billing portal, partner discount flow
- [ ] Delete Creem secrets/env vars (CREEM_API_KEY, CREEM_WEBHOOK_SECRET, CREEM_PRODUCT_*)
- [ ] Remove Creem references in footer/copy/code
- [ ] Recreate products in Stripe at unchanged prices (Plus €8.69/mo, €61.99/yr; partner code 25 % / 12 months)
- [ ] Keep founder lifetime bypass and km-techlabs forwarding working
- [ ] Update roadmap when done

## Done: Paddle → Creem
- [x] Creem keys added (no dossier product)
- [x] Plus checkout, webhook, membership, billing portal on Creem
- [x] Partner discount DMPARTNER25 (25 %, 12 months), founder lifetime, km-techlabs forwarding
- [x] Paddle/Stripe code and text removed
- [x] Monthly price set to €8.69 (matches Creem)
- [x] Paddle integration disconnected by user (no longer used)
- [x] Fixed "couldn't open the payment page" on live /plus (login token now always sent)
- [x] km-techlabs tracker allowed from www subdomain
