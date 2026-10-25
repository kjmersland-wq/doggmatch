/**
 * Single switch for all new payments (DoggMatch+ subscriptions and dossier purchases).
 * TEMPORARY POLAND RELOCATION PAUSE: set ONLY this flag to true to remove
 * the site-wide notice and re-enable checkout. No automatic date-based reopening.
 * Webhooks, billing portal and existing access are unaffected.
 */
export const PURCHASES_ENABLED = false;

export const PURCHASES_PAUSED_ERROR =
  "New purchases and subscriptions are temporarily paused while we relocate to Poland and set up our new company. Existing users continue as normal. We will reopen in November/December 2026.";

export const purchasesPausedCopy = {
  en: { paused: PURCHASES_PAUSED_ERROR },
  no: { paused: "Nye kjøp og abonnementer er midlertidig satt på pause mens vi flytter til Polen og etablerer vårt nye selskap. Eksisterende brukere fortsetter som normalt. Vi åpner igjen i november/desember 2026." },
  pl: { paused: "Nowe zakupy i subskrypcje są tymczasowo wstrzymane, ponieważ przeprowadzamy się do Polski i zakładamy nową firmę. Obecni użytkownicy korzystają ze strony jak dotychczas. Wznowimy sprzedaż w listopadzie/grudniu 2026 r." },
  dk: { paused: "Nye køb og abonnementer er midlertidigt sat på pause, mens vi flytter til Polen og etablerer vores nye virksomhed. Eksisterende brugere fortsætter som normalt. Vi åbner igen i november/december 2026." },
  se: { paused: "Nya köp och abonnemang är tillfälligt pausade medan vi flyttar till Polen och startar vårt nya företag. Befintliga användare fortsätter som vanligt. Vi öppnar igen i november/december 2026." },
  fi: { paused: "Uudet ostot ja tilaukset ovat tilapäisesti tauolla, kun muutamme Puolaan ja perustamme uuden yrityksemme. Nykyiset käyttäjät voivat jatkaa tavalliseen tapaan. Avaamme jälleen marras–joulukuussa 2026." },
  de: { paused: "Neue Käufe und Abonnements sind vorübergehend pausiert, während wir nach Polen ziehen und unser neues Unternehmen gründen. Bestehende Nutzer können alles wie gewohnt weiter nutzen. Wir öffnen wieder im November/Dezember 2026." },
  fr: { paused: "Les nouveaux achats et abonnements sont temporairement suspendus pendant notre déménagement en Pologne et la création de notre nouvelle entreprise. Les utilisateurs actuels continuent comme d’habitude. Nous rouvrirons en novembre/décembre 2026." },
  nl: { paused: "Nieuwe aankopen en abonnementen zijn tijdelijk gepauzeerd terwijl we naar Polen verhuizen en ons nieuwe bedrijf oprichten. Bestaande gebruikers kunnen gewoon doorgaan. We gaan weer open in november/december 2026." },
} as const;
