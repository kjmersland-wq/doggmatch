import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Arrow, Eyebrow, Section } from "@/components/dogmatch/ui";
import { useMembership } from "@/hooks/use-membership";
import { useCopy } from "@/i18n";
import { noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Welcome to DoggMatch+ | DoggMatch";
const description = "Your DoggMatch+ membership is active. Everything is ready for you and your dog.";

export const Route = createFileRoute("/{-$lang}/checkout/success")({
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
  component: SuccessPage,
});

const copy = {
  en: {
    eyebrow: "Thank you",
    heading: "You're in. Welcome to DoggMatch",
    body: "Your membership is active and your receipt is on its way by email. Let's take good care of your dog together.",
    goToMyDog: "Go to My Dog",
    seeMembership: "See my membership",
  },
  no: {
    eyebrow: "Takk skal du ha",
    heading: "Du er med. Velkommen til DoggMatch",
    body: "Medlemskapet ditt er aktivt, og kvitteringen er på vei på e-post. La oss ta godt vare på hunden din sammen.",
    goToMyDog: "Gå til Min hund",
    seeMembership: "Se medlemskapet mitt",
  },
  pl: {
    eyebrow: "Dziękujemy",
    heading: "Jesteś z nami. Witaj w DoggMatch",
    body: "Twoje członkostwo jest aktywne, a potwierdzenie już zmierza do Ciebie e-mailem. Zadbajmy razem dobrze o Twojego psa.",
    goToMyDog: "Przejdź do Mój pies",
    seeMembership: "Zobacz moje członkostwo",
  },
  dk: {
    eyebrow: "Tak skal du have",
    heading: "Du er med. Velkommen til DoggMatch",
    body: "Dit medlemskab er aktivt, og din kvittering er på vej på e-mail. Lad os passe godt på din hund sammen.",
    goToMyDog: "Gå til Min hund",
    seeMembership: "Se mit medlemskab",
  },
  se: {
    eyebrow: "Tack så mycket",
    heading: "Du är med. Välkommen till DoggMatch",
    body: "Ditt medlemskap är aktivt, och ditt kvitto är på väg via e-post. Nu tar vi hand om din hund tillsammans.",
    goToMyDog: "Gå till Min hund",
    seeMembership: "Se mitt medlemskap",
  },
  fi: {
    eyebrow: "Kiitos",
    heading: "Olet mukana. Tervetuloa DoggMatchiin",
    body: "Jäsenyytesi on aktiivinen, ja kuittisi on tulossa sähköpostitse. Pidetään yhdessä hyvää huolta koirastasi.",
    goToMyDog: "Siirry Oma koirani -osioon",
    seeMembership: "Katso jäsenyyteni",
  },
} as const;

function SuccessPage() {
  const c = useCopy(copy);
  const { refetch } = useMembership();
  useEffect(() => {
    const t = setTimeout(() => void refetch(), 1500);
    return () => clearTimeout(t);
  }, [refetch]);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {c.heading} DoggMatch<span className="text-accent">+</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>
      </section>
      <Section className="container-page">
        <div className="flex flex-wrap gap-4">
          <ButtonLink to={withLangPrefix("/my-dog")} size="lg">
            {c.goToMyDog}
            <Arrow />
          </ButtonLink>
          <ButtonLink to={withLangPrefix("/account")} tone="outline" size="lg">
            {c.seeMembership}
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
