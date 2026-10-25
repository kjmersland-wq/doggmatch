/**
 * Single switch for all new payments (DoggMatch+ subscriptions).
 * TEMPORARY SITE-UPGRADE + POLAND RELOCATION PAUSE: set ONLY this flag to
 * true to remove the site-wide notice and re-enable checkout. No automatic
 * date-based reopening. Webhooks, billing portal and existing access are
 * unaffected.
 */
export const PURCHASES_ENABLED = false;

export const PURCHASES_PAUSED_ERROR =
  "We are upgrading the site and preparing for our move to Poland. New purchases and subscriptions are temporarily paused, and some features may not work fully right now. Existing users continue as normal. Everything will be online and updated in December/January. Thank you for your patience.";

export const purchasesPausedCopy = {
  en: { paused: PURCHASES_PAUSED_ERROR },
  no: { paused: "Vi oppgraderer nettstedet og gjør klar flyttingen vår til Polen. Nye kjøp og abonnementer er midlertidig satt på pause, og noen funksjoner kan være utilgjengelige en stund. Eksisterende brukere fortsetter som normalt. Alt er på plass og oppdatert i desember/januar. Takk for tålmodigheten." },
  pl: { paused: "Ulepszamy stronę i przygotowujemy się do przeprowadzki do Polski. Nowe zakupy i subskrypcje są tymczasowo wstrzymane, a część funkcji może na razie działać niepełną. Obecni użytkownicy korzystają ze strony jak dotychczas. Wszystko będzie w pełni dostępne i zaktualizowane w grudniu/styczniu. Dziękujemy za cierpliwość." },
  dk: { paused: "Vi opgraderer hjemmesiden og gør klar til vores flytning til Polen. Nye køb og abonnementer er midlertidigt sat på pause, og enkelte funktioner virker måske ikke helt endnu. Eksisterende brugere fortsætter som normalt. Alt vil være online og opdateret i december/januar. Tak for din tålmodighed." },
  se: { paused: "Vi uppgraderar webbplatsen och förbereder vår flytt till Polen. Nya köp och prenumerationer är tillfälligt pausade, och vissa funktioner kan vara ofullständiga just nu. Befintliga användare fortsätter som vanligt. Allt är online och uppdaterat i december/januari. Tack för ditt tålamod." },
  fi: { paused: "Päivitämme sivustoa ja valmistaudumme muuttoon Puolaan. Uudet ostot ja tilaukset ovat toistaiseksi tauolla, ja jotkin toiminnot eivät välttämättä toimi vielä täysin. Nykyiset käyttäjät voivat jatkaa tavalliseen tapaan. Kaikki on taas kunnossa ja päivitetty joulukuussa/tammikuussa. Kiitos kärsivällisyydestä." },
  de: { paused: "Wir aktualisieren die Website und bereiten unseren Umzug nach Polen vor. Neue Käufe und Abonnements sind vorübergehend pausiert, und einige Funktionen funktionieren gerade vielleicht noch nicht ganz. Bestehende Nutzer können alles wie gewohnt weiter nutzen. Alles ist im Dezember/Januar wieder online und aktualisiert. Danke für deine Geduld." },
  fr: { paused: "Nous mettons le site à jour et préparons notre déménagement en Pologne. Les nouveaux achats et abonnements sont temporairement suspendus, et certaines fonctionnalités peuvent être momentanément indisponibles. Les utilisateurs actuels continuent comme d’habitude. Tout sera de nouveau en ligne et à jour en décembre/janvier. Merci de votre patience." },
  nl: { paused: "We werken aan een update van de site en bereiden onze verhuizing naar Polen voor. Nieuwe aankopen en abonnementen zijn tijdelijk gepauzeerd, en sommige functies werken op dit moment mogelijk nog niet volledig. Bestaande gebruikers kunnen gewoon doorgaan. Alles is weer online en bijgewerkt in december/januari. Bedankt voor je geduld." },
} as const;
