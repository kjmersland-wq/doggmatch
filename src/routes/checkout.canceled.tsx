import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Arrow, Eyebrow, Section } from "@/components/dogmatch/ui";

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

function CanceledPage() {
  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>No payment taken</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">That's completely fine.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Nothing was charged. DoggMatch+ will be here whenever you're ready, and everything you were
          using stays exactly as it was.
        </p>
      </section>
      <Section className="container-page">
        <div className="flex flex-wrap gap-4">
          <ButtonLink to="/plus" size="lg">
            Back to DoggMatch+
            <Arrow />
          </ButtonLink>
          <ButtonLink to="/my-dog" tone="outline" size="lg">
            Go to My Dog
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
