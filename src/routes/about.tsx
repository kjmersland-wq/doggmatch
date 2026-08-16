import { createFileRoute } from "@tanstack/react-router";
import { useT, useCopy } from "@/i18n";
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

const copy = {
  en: {
    p1: "Bringing a dog home is a big decision, and it deserves more thought than a list of the most popular breeds. Getting it right is better for you, and much better for the dog.",
    p2: "There's no guesswork here. Every match comes from what you've told us, held up against what each breed usually needs. If you tell us something is a hard limit, we take you at your word — even when that rules out a dog you had your heart set on.",
    p3: "We ask for as little as we can. You only share where you live if you want local suggestions, and you never need an account to get your result.",
  },
  no: {
    p1: "Å ta med en hund hjem er en stor beslutning, og den fortjener mer omtanke enn en liste over de mest populære rasene. Å få det riktig er bedre for deg, og mye bedre for hunden.",
    p2: "Her er det ingen gjetting. Hver match kommer fra det du har fortalt oss, holdt opp mot det hver rase vanligvis trenger. Sier du at noe er en absolutt grense, tar vi deg på ordet — selv når det utelukker en hund du hadde satt deg fore.",
    p3: "Vi ber om så lite som mulig. Du deler bare hvor du bor hvis du vil ha lokale forslag, og du trenger aldri en konto for å få resultatet ditt.",
  },
} as const;

function AboutPage() {
  const t = useT();
  const c = useCopy(copy);
  return (
    <div className="container-page max-w-3xl py-14 md:py-24">
      <Eyebrow>{t.footer.about}</Eyebrow>
      <h1 className="display-lg mt-6">{t.brand.tagline}</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
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
