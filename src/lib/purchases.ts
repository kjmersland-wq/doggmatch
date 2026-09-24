/**
 * Single switch for all new payments (DoggMatch+ subscriptions and dossier purchases).
 * Set to true to re-enable checkout. Webhooks, billing portal and existing access are unaffected.
 */
export const PURCHASES_ENABLED = false;

export const PURCHASES_PAUSED_ERROR =
  "Paid plans are paused for a short while as we set up in Poland. Everything free works as normal.";

export const purchasesPausedCopy = {
  en: { paused: "Paid plans are paused for a short while as we set up in Poland. Everything free works as normal." },
  no: { paused: "Betalte planer er satt på pause en liten stund mens vi etablerer oss i Polen. Alt som er gratis fungerer som vanlig." },
  pl: { paused: "Płatne plany są na krótko wstrzymane, bo zakładamy działalność w Polsce. Wszystko, co darmowe, działa normalnie." },
  dk: { paused: "Betalte planer er sat på pause en kort stund, mens vi etablerer os i Polen. Alt det gratis virker som normalt." },
  se: { paused: "Betalda planer är pausade en kort tid medan vi etablerar oss i Polen. Allt som är gratis fungerar som vanligt." },
  fi: { paused: "Maksulliset tilaukset ovat hetken tauolla, kun perustamme toimintaa Puolaan. Kaikki ilmainen toimii normaalisti." },
  de: { paused: "Bezahlte Pläne sind kurz pausiert, während wir uns in Polen niederlassen. Alles Kostenlose funktioniert wie gewohnt." },
  fr: { paused: "Les offres payantes sont brièvement en pause le temps de notre installation en Pologne. Tout ce qui est gratuit fonctionne normalement." },
  nl: { paused: "Betaalde abonnementen staan even op pauze terwijl we ons in Polen vestigen. Alles wat gratis is, werkt gewoon." },
} as const;
