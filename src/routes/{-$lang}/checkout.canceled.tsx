import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Arrow, Eyebrow, Section } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import { noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Payment stopped | DoggMatch";
const description = "No payment was taken. You can join DoggMatch+ whenever the time feels right.";

export const Route = createFileRoute("/{-$lang}/checkout/canceled")({
  head: () => ({
    meta: [
      ...noindexMeta,
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CanceledPage,
});

const copy = {
  en: {
    eyebrow: "No payment taken",
    heading: "That's completely fine.",
    body: "Nothing was charged. DoggMatch+ will be here whenever you're ready, and everything you were using stays exactly as it was.",
    backToPlus: "Back to DoggMatch+",
    goToMyDog: "Go to My Dog",
  },
  no: {
    eyebrow: "Ingen betaling er tatt",
    heading: "Det går helt fint.",
    body: "Ingenting ble belastet. DoggMatch+ er her når du er klar, og alt du brukte er akkurat som det var.",
    backToPlus: "Tilbake til DoggMatch+",
    goToMyDog: "Gå til Min hund",
  },
  pl: {
    eyebrow: "Płatność nie została pobrana",
    heading: "To zupełnie w porządku.",
    body: "Nic nie zostało obciążone. DoggMatch+ będzie tu czekać, gdy będziesz gotowy, a wszystko, z czego korzystałeś, pozostaje bez zmian.",
    backToPlus: "Wróć do DoggMatch+",
    goToMyDog: "Przejdź do Mój pies",
  },
  dk: {
    eyebrow: "Ingen betaling gennemført",
    heading: "Det er helt fint.",
    body: "Der blev ikke trukket noget. DoggMatch+ er her, når du er klar, og alt du brugte er præcis, som det var.",
    backToPlus: "Tilbage til DoggMatch+",
    goToMyDog: "Gå til Min hund",
  },
  se: {
    eyebrow: "Ingen betalning genomförd",
    heading: "Det är helt okej.",
    body: "Inget drogs från ditt kort. DoggMatch+ finns kvar när du är redo, och allt du använde är precis som det var.",
    backToPlus: "Tillbaka till DoggMatch+",
    goToMyDog: "Gå till Min hund",
  },
  fi: {
    eyebrow: "Maksua ei veloitettu",
    heading: "Se on ihan ok.",
    body: "Mitään ei veloitettu. DoggMatch+ on täällä, kun olet valmis, ja kaikki käyttämäsi pysyy täsmälleen ennallaan.",
    backToPlus: "Takaisin DoggMatch+:aan",
    goToMyDog: "Siirry Oma koirani -osioon",
  },
  de: {
    eyebrow: "Keine Zahlung erfolgt",
    heading: "Das ist völlig in Ordnung.",
    body: "Es wurde nichts abgebucht. DoggMatch+ wartet, bis du bereit bist, und alles, was du genutzt hast, bleibt genau so, wie es war.",
    backToPlus: "Zurück zu DoggMatch+",
    goToMyDog: "Zu Mein Hund",
  },
  fr: {
    eyebrow: "Aucun paiement effectué",
    heading: "C'est tout à fait normal.",
    body: "Rien n'a été débité. DoggMatch+ sera là quand vous serez prêt, et tout ce que vous utilisiez reste exactement comme avant.",
    backToPlus: "Retour à DoggMatch+",
    goToMyDog: "Aller à Mon chien",
  },
  nl: {
    eyebrow: "Geen betaling verwerkt",
    heading: "Dat is helemaal prima.",
    body: "Er is niets in rekening gebracht. DoggMatch+ staat klaar wanneer jij er klaar voor bent, en alles wat je gebruikte blijft precies zoals het was.",
    backToPlus: "Terug naar DoggMatch+",
    goToMyDog: "Naar Mijn hond",
  },
} as const;

function CanceledPage() {
  const c = useCopy(copy);
  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{c.heading}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>
      </section>
      <Section className="container-page">
        <div className="flex flex-wrap gap-4">
          <ButtonLink to={withLangPrefix("/plus")} size="lg">
            {c.backToPlus}
            <Arrow />
          </ButtonLink>
          <ButtonLink to={withLangPrefix("/my-dog")} tone="outline" size="lg">
            {c.goToMyDog}
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
