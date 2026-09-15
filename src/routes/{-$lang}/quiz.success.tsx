import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Printer, ShieldCheck } from "lucide-react";
import { getBreed, type Breed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { verifyDossierCheckout } from "@/lib/dossier/stripe.functions";
import { dossierSections } from "@/lib/dossier/doc";
import { DocPaper } from "@/components/dogmatch/print/doc";
import { ButtonLink, Button, Eyebrow } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import { noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Your Dossier | DoggMatch";

export const Route = createFileRoute("/{-$lang}/quiz/success")({
  validateSearch: (search: Record<string, unknown>) => ({
    session_id: typeof search["session_id"] === "string" ? search["session_id"] : "",
  }),
  head: () => ({
    meta: [...noindexMeta, { title }, { name: "robots", content: "noindex" }],
  }),
  component: SuccessPage,
});

const copy = {
  en: {
    verifying: "Confirming your payment…",
    unpaidTitle: "We couldn't confirm that payment",
    unpaidBody:
      "That might mean the checkout was cancelled, or the link has expired. No charge was made if you didn't complete checkout.",
    backToQuiz: "Back to Find My Dog",
    unlockedEyebrow: "Payment confirmed",
    unlockedTitle: "Your Complete Breed & Puppy Buyer Dossier",
    unlockedBody: "Everything below is yours to keep — read it here, or print it for the glovebox.",
    guarantee:
      "100% Satisfaction Guarantee — not what you expected? Reply to your receipt email and we'll make it right.",
    printOrSave: "Print or save as PDF",
    printHint:
      'This is exactly how it will print. Choose "Save as PDF" in the print dialog to keep it on your phone.',
    subtitle: "Prepared from your Find My Dog result — peace of mind before you meet a breeder.",
  },
  no: {
    verifying: "Bekrefter betalingen din …",
    unpaidTitle: "Vi klarte ikke å bekrefte betalingen",
    unpaidBody:
      "Det kan bety at betalingen ble avbrutt, eller at lenken er utløpt. Du er ikke belastet hvis du ikke fullførte betalingen.",
    backToQuiz: "Tilbake til Finn min hund",
    unlockedEyebrow: "Betaling bekreftet",
    unlockedTitle: "Din komplette rase- og valpekjøper-dossier",
    unlockedBody: "Alt under er ditt å beholde — les det her, eller skriv det ut til hanskerommet.",
    guarantee:
      "100 % fornøydgaranti — ikke det du hadde forventet? Svar på kvitteringsmailen, så ordner vi det.",
    printOrSave: "Skriv ut eller lagre som PDF",
    printHint:
      "Slik vil dette se ut på papir. Velg «Lagre som PDF» i utskriftsdialogen for å ha det på telefonen.",
    subtitle: "Laget fra resultatet ditt i Finn min hund — trygghet før du møter en oppdretter.",
  },
  pl: {
    verifying: "Potwierdzamy płatność…",
    unpaidTitle: "Nie udało się potwierdzić płatności",
    unpaidBody:
      "Mogło to oznaczać, że płatność została anulowana, albo że link wygasł. Jeśli nie dokończyłeś/aś płatności, nic nie zostało pobrane.",
    backToQuiz: "Wróć do Znajdź mojego psa",
    unlockedEyebrow: "Płatność potwierdzona",
    unlockedTitle: "Twoje pełne dossier rasy i kupującego szczenię",
    unlockedBody:
      "Wszystko poniżej zostaje przy tobie — przeczytaj tutaj albo wydrukuj do schowka w aucie.",
    guarantee:
      "100% gwarancji satysfakcji — coś nie tak? Odpowiedz na e-mail z potwierdzeniem, a naprawimy to.",
    printOrSave: "Wydrukuj lub zapisz jako PDF",
    printHint:
      "Tak dokładnie będzie to wyglądać na wydruku. Wybierz „Zapisz jako PDF” w oknie drukowania, aby mieć to na telefonie.",
    subtitle:
      "Przygotowane na podstawie Twojego wyniku Znajdź mojego psa — spokój ducha przed spotkaniem z hodowcą.",
  },
  dk: {
    verifying: "Bekræfter din betaling …",
    unpaidTitle: "Vi kunne ikke bekræfte den betaling",
    unpaidBody:
      "Det kan betyde, at betalingen blev annulleret, eller at linket er udløbet. Du er ikke blevet opkrævet, hvis du ikke gennemførte betalingen.",
    backToQuiz: "Tilbage til Find min hund",
    unlockedEyebrow: "Betaling bekræftet",
    unlockedTitle: "Din komplette race- og hvalpekøber-dossier",
    unlockedBody:
      "Alt nedenfor er dit at beholde — læs det her, eller udskriv det til handskerummet.",
    guarantee:
      "100 % tilfredshedsgaranti — ikke det du forventede? Svar på kvitteringsmailen, så ordner vi det.",
    printOrSave: "Udskriv eller gem som PDF",
    printHint:
      'Sådan vil dette se ud på papir. Vælg "Gem som PDF" i udskriftsdialogen for at have det på telefonen.',
    subtitle: "Lavet ud fra dit resultat i Find min hund — tryghed før du møder en opdrætter.",
  },
  se: {
    verifying: "Bekräftar din betalning …",
    unpaidTitle: "Vi kunde inte bekräfta den betalningen",
    unpaidBody:
      "Det kan betyda att betalningen avbröts, eller att länken har gått ut. Du har inte debiterats om du inte slutförde betalningen.",
    backToQuiz: "Tillbaka till Hitta min hund",
    unlockedEyebrow: "Betalning bekräftad",
    unlockedTitle: "Din kompletta ras- och valpköpar-dossier",
    unlockedBody:
      "Allt nedan är ditt att behålla — läs det här, eller skriv ut det till handskfacket.",
    guarantee:
      "100 % nöjdhetsgaranti — inte vad du förväntade dig? Svara på kvittomejlet så ordnar vi det.",
    printOrSave: "Skriv ut eller spara som PDF",
    printHint:
      'Så här kommer det se ut på papper. Välj "Spara som PDF" i utskriftsdialogen för att ha det på telefonen.',
    subtitle:
      "Sammanställd från ditt resultat i Hitta min hund — trygghet innan du möter en uppfödare.",
  },
  fi: {
    verifying: "Vahvistetaan maksuasi …",
    unpaidTitle: "Emme pystyneet vahvistamaan maksua",
    unpaidBody:
      "Tämä voi tarkoittaa, että maksu peruttiin tai linkki on vanhentunut. Sinulta ei ole veloitettu, jos et viimeistellyt maksua.",
    backToQuiz: "Takaisin Löydä koirani -testiin",
    unlockedEyebrow: "Maksu vahvistettu",
    unlockedTitle: "Täydellinen rotu- ja pentuostajan dossier",
    unlockedBody: "Kaikki alla oleva jää sinulle — lue se täältä tai tulosta hansikaslokeroon.",
    guarantee:
      "100 % tyytyväisyystakuu — ei vastannut odotuksia? Vastaa kuittisähköpostiin, niin korjaamme asian.",
    printOrSave: "Tulosta tai tallenna PDF:nä",
    printHint:
      'Näin tämä näyttää paperilla. Valitse tulostusikkunassa "Tallenna PDF:nä" pitääksesi sen puhelimessasi.',
    subtitle:
      "Koottu Löydä koirani -tuloksesi pohjalta — mielenrauhaa ennen kasvattajan tapaamista.",
  },
  de: {
    verifying: "Ihre Zahlung wird bestätigt …",
    unpaidTitle: "Wir konnten diese Zahlung nicht bestätigen",
    unpaidBody:
      "Das könnte bedeuten, dass die Zahlung abgebrochen wurde oder der Link abgelaufen ist. Es wurde nichts berechnet, wenn Sie die Zahlung nicht abgeschlossen haben.",
    backToQuiz: "Zurück zu Finde meinen Hund",
    unlockedEyebrow: "Zahlung bestätigt",
    unlockedTitle: "Ihr vollständiges Rassen- und Welpenkäufer-Dossier",
    unlockedBody:
      "Alles unten gehört Ihnen — lesen Sie es hier oder drucken Sie es fürs Handschuhfach aus.",
    guarantee:
      "100 % Zufriedenheitsgarantie — nicht das, was Sie erwartet haben? Antworten Sie auf Ihre Bestätigungs-E-Mail, wir kümmern uns darum.",
    printOrSave: "Drucken oder als PDF speichern",
    printHint:
      'Genau so wird es gedruckt aussehen. Wählen Sie im Druckdialog „Als PDF speichern", um es auf dem Handy zu behalten.',
    subtitle:
      "Erstellt aus Ihrem Ergebnis von Finde meinen Hund — Sicherheit, bevor Sie einen Züchter treffen.",
  },
  fr: {
    verifying: "Confirmation de votre paiement…",
    unpaidTitle: "Nous n'avons pas pu confirmer ce paiement",
    unpaidBody:
      "Cela peut signifier que le paiement a été annulé, ou que le lien a expiré. Aucun montant n'a été débité si vous n'avez pas terminé le paiement.",
    backToQuiz: "Retour à Trouver mon chien",
    unlockedEyebrow: "Paiement confirmé",
    unlockedTitle: "Votre dossier complet race et achat de chiot",
    unlockedBody:
      "Tout ce qui suit est à vous — lisez-le ici, ou imprimez-le pour la boîte à gants.",
    guarantee:
      "Garantie satisfaction 100 % — pas à la hauteur de vos attentes ? Répondez à votre e-mail de reçu, nous arrangerons ça.",
    printOrSave: "Imprimer ou enregistrer en PDF",
    printHint:
      "Voici exactement à quoi cela ressemblera imprimé. Choisissez « Enregistrer au format PDF » pour le garder sur votre téléphone.",
    subtitle:
      "Préparé à partir de votre résultat Trouver mon chien — la tranquillité d'esprit avant de rencontrer un éleveur.",
  },
  nl: {
    verifying: "Uw betaling wordt bevestigd …",
    unpaidTitle: "We konden die betaling niet bevestigen",
    unpaidBody:
      "Dat kan betekenen dat het afrekenen is geannuleerd, of dat de link is verlopen. Er is niets in rekening gebracht als u niet hebt afgerekend.",
    backToQuiz: "Terug naar Vind mijn hond",
    unlockedEyebrow: "Betaling bevestigd",
    unlockedTitle: "Uw volledige ras- en puppykoper-dossier",
    unlockedBody:
      "Alles hieronder is van u — lees het hier, of druk het af voor het handschoenenvakje.",
    guarantee:
      "100% tevredenheidsgarantie — niet wat u verwachtte? Antwoord op uw bevestigingsmail, dan lossen we het op.",
    printOrSave: "Afdrukken of opslaan als PDF",
    printHint:
      'Zo zal dit er precies uitzien op papier. Kies "Opslaan als PDF" in het afdrukvenster om het op uw telefoon te bewaren.',
    subtitle:
      "Samengesteld uit uw Vind mijn hond-resultaat — gemoedsrust voordat u een fokker ontmoet.",
  },
} as const;

function SuccessPage() {
  const c = useCopy(copy);
  const { session_id } = Route.useSearch();
  const verify = useServerFn(verifyDossierCheckout);
  const [status, setStatus] = useState<"loading" | "paid" | "unpaid">("loading");
  const [breed, setBreed] = useState<Breed | null>(null);

  useEffect(() => {
    if (!session_id) {
      setStatus("unpaid");
      return;
    }
    let cancelled = false;
    verify({ data: { sessionId: session_id } })
      .then((res) => {
        if (cancelled) return;
        if (res.paid && res.breedId) {
          setBreed(getBreed(res.breedId) ?? null);
          setStatus("paid");
        } else {
          setStatus("unpaid");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("unpaid");
      });
    return () => {
      cancelled = true;
    };
  }, [session_id, verify]);

  if (status === "loading") {
    return (
      <div className="container-page pt-28 pb-24 md:pt-36">
        <p className="text-lg text-muted-foreground">{c.verifying}</p>
      </div>
    );
  }

  if (status === "unpaid" || !breed) {
    return (
      <div className="container-page pt-28 pb-24 md:pt-36">
        <Eyebrow>{c.unlockedEyebrow}</Eyebrow>
        <h1 className="display-lg mt-6 max-w-xl">{c.unpaidTitle}</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          {c.unpaidBody}
        </p>
        <div className="mt-9">
          <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
            {c.backToQuiz}
          </ButtonLink>
        </div>
      </div>
    );
  }

  const name = breedContent()[breed.id]?.displayName ?? breed.name;
  const sections = dossierSections(breed);
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="doc-print-root pb-16">
      <div className="no-print container-page pt-28 md:pt-32">
        <Eyebrow>{c.unlockedEyebrow}</Eyebrow>
        <h1 className="display-lg mt-6 max-w-2xl">{c.unlockedTitle}</h1>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
          {c.unlockedBody}
        </p>
        <p className="mt-6 flex max-w-lg items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {c.guarantee}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button size="md" onClick={() => window.print()}>
            <Printer className="h-4 w-4" />
            {c.printOrSave}
          </Button>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{c.printHint}</p>
      </div>

      <div className="container-page mt-10 overflow-x-auto">
        <DocPaper
          title="DoggMatch"
          dogName={name}
          subtitle={c.subtitle}
          sections={sections}
          date={today}
        />
      </div>
    </div>
  );
}
