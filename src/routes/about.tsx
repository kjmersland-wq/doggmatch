import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";

const title = "About DogMatch — transparent breed compatibility";
const description =
  "DogMatch is a free, privacy-first platform that matches people with dog breeds using a transparent, explainable scoring system rather than AI guesswork.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <div className="container-page max-w-3xl py-14 md:py-24">
      <Eyebrow>{t.footer.about}</Eyebrow>
      <h1 className="display-lg mt-6">{t.brand.tagline}</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          DogMatch exists because the decision to bring a dog into your life deserves better than a
          list of popular breeds. Choosing well protects both the person and the dog.
        </p>
        <p>
          Our compatibility system is deterministic and explainable. Every score comes from your
          answers weighed against documented breed characteristics — and every hard limit you set is
          respected, even when it rules out a breed you like.
        </p>
        <p>
          We collect as little as possible. Location is optional until you ask for local
          recommendations, and nothing you answer is required to be tied to an account.
        </p>
        <p className="text-base">{t.footer.note}</p>
      </div>
      <div className="mt-12">
        <ButtonLink to="/find-my-dog" size="lg">
          {t.nav.startMatching}
          <Arrow />
        </ButtonLink>
      </div>
    </div>
  );
}
