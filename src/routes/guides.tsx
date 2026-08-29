import { createFileRoute, Link } from "@tanstack/react-router";
import { useT, useCopy } from "@/i18n";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar, SectionShare } from "@/components/dogmatch/share";

const title = "Guides — choosing a dog, and living with one | DoggMatch";
const description =
  "Straight, friendly answers on choosing a breed, living in a flat, your first dog, shedding, training and everyday life together.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Guider — å velge hund, og å leve med en | DoggMatch",
    description:
      "Ærlige, vennlige svar om å velge rase, å bo i leilighet, første hund, pelsfelling, trening og hverdagen sammen.",
  },
  pl: {
    title: "Poradniki — jak wybrać psa i jak z nim żyć | DoggMatch",
    description:
      "Proste, przyjazne odpowiedzi na pytania o wybór rasy, życie w mieszkaniu, pierwszego psa, linienie, szkolenie i wspólną codzienność.",
  },
};

export const Route = createFileRoute("/guides")({
  head: (ctx) => localizedHead(ctx, "/guides", seoCopy),
  component: GuidesPage,
});

const copy = {
  en: {
    comingSoon: "Coming soon",
    guides: [
      {
        id: "flat-living",
        title: "Dogs that do well in a flat",
        body: "Space matters less than you'd think. Noise, exercise and how they cope alone matter far more.",
      },
      {
        id: "first-dog",
        title: "Choosing your first dog",
        body: "Everyone makes mistakes in the first year. Some dogs forgive them more easily than others.",
      },
      {
        id: "shedding-allergies",
        title: "Shedding, and living with allergies",
        body: "What lower-shedding actually means, and how to think it through if someone at home reacts to dogs.",
      },
      {
        id: "calm-dogs",
        title: "Calm dogs for quieter homes",
        body: "A quiet dog still needs plenty from you. Here's how to spot one that's genuinely easy-going.",
      },
      {
        id: "active-life",
        title: "Dogs for people who like to move",
        body: "Be honest about the week you actually have, not the one you'd like to have.",
      },
      {
        id: "yearly-cost",
        title: "What a dog really costs in a year",
        body: "Food, insurance, the vet, the groomer — and the bits almost everyone forgets to budget for.",
      },
    ],
  },
  no: {
    comingSoon: "Kommer snart",
    guides: [
      {
        id: "flat-living",
        title: "Hunder som trives i leilighet",
        body: "Plass betyr mindre enn du skulle tro. Støy, mosjon og hvordan de takler å være alene betyr mye mer.",
      },
      {
        id: "first-dog",
        title: "Å velge din første hund",
        body: "Alle gjør feil det første året. Noen hunder tilgir dem lettere enn andre.",
      },
      {
        id: "shedding-allergies",
        title: "Pelsfelling, og å leve med allergier",
        body: "Hva mindre felling faktisk betyr, og hvordan tenke det gjennom hvis noen hjemme reagerer på hunder.",
      },
      {
        id: "calm-dogs",
        title: "Rolige hunder for stillere hjem",
        body: "En rolig hund trenger fortsatt mye av deg. Slik gjenkjenner du en som virkelig er avslappet.",
      },
      {
        id: "active-life",
        title: "Hunder for folk som liker å være i bevegelse",
        body: "Vær ærlig om uken du faktisk har, ikke den du skulle ønske du hadde.",
      },
      {
        id: "yearly-cost",
        title: "Hva en hund egentlig koster i året",
        body: "Mat, forsikring, veterinæren, groomeren — og de delene nesten alle glemmer å budsjettere for.",
      },
    ],
  },
  pl: {
    comingSoon: "Wkrótce",
    guides: [
      {
        id: "flat-living",
        title: "Psy, które dobrze radzą sobie w mieszkaniu",
        body: "Przestrzeń liczy się mniej, niż mogłoby się wydawać. Hałas, ruch i to, jak pies radzi sobie sam, mają dużo większe znaczenie.",
      },
      {
        id: "first-dog",
        title: "Wybór pierwszego psa",
        body: "Każdy popełnia błędy w pierwszym roku. Niektóre psy wybaczają je łatwiej niż inne.",
      },
      {
        id: "shedding-allergies",
        title: "Linienie i życie z alergią",
        body: "Co tak naprawdę oznacza mniejsze linienie i jak to przemyśleć, jeśli ktoś w domu reaguje na psy.",
      },
      {
        id: "calm-dogs",
        title: "Spokojne psy do cichszych domów",
        body: "Spokojny pies wciąż potrzebuje od ciebie bardzo wiele. Oto jak rozpoznać takiego, który naprawdę jest łagodnego usposobienia.",
      },
      {
        id: "active-life",
        title: "Psy dla osób, które lubią ruch",
        body: "Bądź szczery co do tygodnia, jaki naprawdę masz, a nie tego, jaki chciałbyś mieć.",
      },
      {
        id: "yearly-cost",
        title: "Ile pies naprawdę kosztuje w ciągu roku",
        body: "Jedzenie, ubezpieczenie, weterynarz, groomer — i te pozycje, o których prawie każdy zapomina w budżecie.",
      },
    ],
  },
} as const;

function GuidesPage() {
  const t = useT();
  const c = useCopy(copy);
  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{t.guides.title}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{t.guides.subtitle}</h1>
      <ShareBar className="mt-6" />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {c.guides.map((guide) => (
          <li key={guide.id} id={guide.id} className="group scroll-mt-28 bg-background p-8 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <h2 className="display-md">{guide.title}</h2>
              <SectionShare anchor={guide.id} title={guide.title} text={guide.body} />
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{guide.body}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              {c.comingSoon}
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
