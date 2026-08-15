import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";

const title = "About DoggMatch — a kinder way to choose a dog";
const description =
  "DoggMatch is a free, honest way to work out which dog might suit your life. We always show our reasoning, and we ask for as little about you as we can.";

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
          Bringing a dog home is a big decision, and it deserves more thought than a list of the
          most popular breeds. Getting it right is better for you, and much better for the dog.
        </p>
        <p>
          There's no guesswork here. Every match comes from what you've told us, held up against
          what each breed usually needs. If you tell us something is a hard limit, we take you at
          your word — even when that rules out a dog you had your heart set on.
        </p>
        <p>
          We ask for as little as we can. You only share where you live if you want local
          suggestions, and you never need an account to get your result.
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
