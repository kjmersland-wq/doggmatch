import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Arrow, Eyebrow, Section } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";

const title = "Payment stopped | DoggMatch";
const description = "No payment was taken. You can join DoggMatch+ whenever the time feels right.";

export const Route = createFileRoute("/checkout/canceled")({
  head: () => ({
    meta: [
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
          <ButtonLink to="/plus" size="lg">
            {c.backToPlus}
            <Arrow />
          </ButtonLink>
          <ButtonLink to="/my-dog" tone="outline" size="lg">
            {c.goToMyDog}
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
