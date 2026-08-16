import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Arrow, Eyebrow, Section } from "@/components/dogmatch/ui";
import { useMembership } from "@/hooks/use-membership";

const title = "Welcome to DoggMatch+ | DoggMatch";
const description = "Your DoggMatch+ membership is active. Everything is ready for you and your dog.";

export const Route = createFileRoute("/checkout/success")({
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
  component: SuccessPage,
});

function SuccessPage() {
  const { refetch } = useMembership();
  useEffect(() => {
    const t = setTimeout(() => void refetch(), 1500);
    return () => clearTimeout(t);
  }, [refetch]);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>Thank you</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          You're in. Welcome to DoggMatch<span className="text-accent">+</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Your membership is active and your receipt is on its way by email. Let's take good care of
          your dog together.
        </p>
      </section>
      <Section className="container-page">
        <div className="flex flex-wrap gap-4">
          <ButtonLink to="/my-dog" size="lg">
            Go to My Dog
            <Arrow />
          </ButtonLink>
          <ButtonLink to="/account" tone="outline" size="lg">
            See my membership
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
