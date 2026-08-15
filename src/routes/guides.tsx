import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";

const title = "Guides — choosing a dog, and living with one | DoggMatch";
const description =
  "Straight, friendly answers on choosing a breed, living in a flat, your first dog, shedding, training and everyday life together.";

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
    title: "Dogs that do well in a flat",
    body: "Space matters less than you'd think. Noise, exercise and how they cope alone matter far more.",
  },
  {
    title: "Choosing your first dog",
    body: "Everyone makes mistakes in the first year. Some dogs forgive them more easily than others.",
  },
  {
    title: "Shedding, and living with allergies",
    body: "What lower-shedding actually means, and how to think it through if someone at home reacts to dogs.",
  },
  {
    title: "Calm dogs for quieter homes",
    body: "A quiet dog still needs plenty from you. Here's how to spot one that's genuinely easy-going.",
  },
  {
    title: "Dogs for people who like to move",
    body: "Be honest about the week you actually have, not the one you'd like to have.",
  },
  {
    title: "What a dog really costs in a year",
    body: "Food, insurance, the vet, the groomer — and the bits almost everyone forgets to budget for.",
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
              Coming soon
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
