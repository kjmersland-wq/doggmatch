import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";

const title = "Guides — choosing and living with a dog | DogMatch";
const description =
  "Plain-language guides on choosing a breed, apartment living, first-time ownership, shedding, training and everyday life with a dog.";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/guides" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesPage,
});

const guides = [
  {
    title: "Best dogs for apartment living",
    body: "Space matters less than noise, exercise and tolerance for being alone. What actually predicts a good apartment dog.",
  },
  {
    title: "Choosing a first dog",
    body: "Trainability, recovery from mistakes and forgiving temperaments — the traits that make a first year manageable.",
  },
  {
    title: "Living with shedding and sensitivity",
    body: "What lower-shedding really means, and how households with allergies can approach the decision responsibly.",
  },
  {
    title: "Calm dogs for quieter lives",
    body: "Low energy is not the same as low needs. How to recognise a genuinely calm companion.",
  },
  {
    title: "Active dogs for active people",
    body: "Matching a working breed to a real weekly routine rather than an aspirational one.",
  },
  {
    title: "The true annual cost of a dog",
    body: "Food, insurance, veterinary care, grooming and the costs people consistently underestimate.",
  },
];

function GuidesPage() {
  const t = useT();
  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{t.guides.title}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{t.guides.subtitle}</h1>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {guides.map((guide) => (
          <li key={guide.title} className="group bg-background p-8 md:p-10">
            <h2 className="display-md">{guide.title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{guide.body}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              In preparation
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <Link to="/find-my-dog" className="group inline-flex items-center gap-2 font-medium">
          {t.nav.startMatching}
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
