import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useT } from "@/i18n";
import { Button, Eyebrow } from "@/components/dogmatch/ui";
import dogLifeImage from "@/assets/dog-life.jpg";

const title = "Dog Life — dog-friendly places wherever you live | DogMatch";
const description =
  "Parks, walking routes, training, veterinarians, groomers and dog-friendly cafés, restaurants and hotels — searchable by city, town or postcode.";

export const Route = createFileRoute("/dog-life")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dog-life" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/dog-life" }],
  }),
  component: DogLifePage,
});

function DogLifePage() {
  const t = useT();
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <div className="pb-24">
      <section className="container-page py-14 md:py-20">
        <Eyebrow>{t.home.lifeEyebrow}</Eyebrow>
        <h1 className="display-lg mt-6 max-w-2xl">{t.dogLife.title}</h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{t.dogLife.subtitle}</p>

        <form
          className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(location.trim() || null);
          }}
        >
          <label htmlFor="location" className="sr-only">
            {t.dogLife.placeholder}
          </label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t.dogLife.placeholder}
            autoComplete="address-level2"
            className="h-14 flex-1 rounded-full border border-border bg-card px-6 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <Button size="lg" type="submit">
            {t.dogLife.search}
          </Button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">{t.dogLife.optional}</p>
      </section>

      <section className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-border">
          <img
            src={dogLifeImage}
            alt="Aerial view of a park with walking paths at dawn"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-[22rem] w-full object-cover md:h-[30rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
            <p className="font-display text-2xl text-primary-foreground">
              {submitted ? submitted : "Anywhere in the world"}
            </p>
            <p className="mt-2 max-w-md text-sm text-primary-foreground/80">
              {t.dogLife.comingSoon}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page mt-16">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.dogLife.categories.map((category) => (
            <li key={category} className="bg-background p-7">
              <p className="font-display text-lg leading-tight tracking-tight">{category}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {submitted ? `Coverage for ${submitted} is being prepared.` : t.dogLife.comingSoon}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
