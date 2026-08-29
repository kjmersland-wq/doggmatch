import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { breedById } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { costRange } from "@/lib/getdog/prep";
import { useGetDog } from "@/lib/getdog/store";
import { useCopy } from "@/i18n";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "What will a dog really cost? Before they arrive, and every month | DoggMatch";
const description =
  "An honest look at the cost of a dog: the one-off spend before they arrive, the steady monthly cost, and the unexpected vet bills worth being ready for.";

export const Route = createFileRoute("/get-a-dog/costs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/get-a-dog/costs"),
  }),
  component: CostsPage,
});

const copy = {
  en: {
    eyebrow: "The commitment",
    title: "What will a dog really cost?",
    intro:
      "Money is the least romantic part of this, and the part most likely to hurt later. Here's the shape of it, honestly. Actual prices differ enormously by country, city and dog.",
    yourMatch: "Your match",
    runningCostPrefix: "Indicative running cost, per year, once they're settled:",
    runningCostSuffix:
      "That's a broad range from our breed library, not a quote — food, insurance and grooming prices vary a great deal by country.",
    noticeTitle: "Where the numbers come from",
    noticeBody:
      "Every breed page shows an indicative yearly cost range for that breed, and Compare puts two or three of them side by side. We'd rather show you a wide, honest range than a precise number that turns out to be wrong where you live.",
    compareCta: "Compare costs side by side",
    prepareCta: "Get your home ready",
  },
  no: {
    eyebrow: "Forpliktelsen",
    title: "Hva koster en hund egentlig?",
    intro:
      "Penger er den minst romantiske delen av dette, og den delen som oftest gjør vondt senere. Her er det, ærlig fortalt. De faktiske prisene varierer enormt etter land, by og hund.",
    yourMatch: "Din match",
    runningCostPrefix: "Anslått løpende kostnad per år, når hunden har slått seg til:",
    runningCostSuffix:
      "Det er et bredt spenn fra rasebiblioteket vårt, ikke et tilbud — priser på mat, forsikring og stell varierer mye fra land til land.",
    noticeTitle: "Hvor tallene kommer fra",
    noticeBody:
      "Hver raseside viser et anslått årlig kostnadsspenn for den rasen, og Sammenlign setter to eller tre av dem side om side. Vi vil heller vise deg et bredt, ærlig spenn enn et presist tall som viser seg å være feil der du bor.",
    compareCta: "Sammenlign kostnader side om side",
    prepareCta: "Gjør hjemmet ditt klart",
  },
  pl: {
    eyebrow: "Zobowiązanie",
    title: "Ile naprawdę kosztuje pies?",
    intro:
      "Pieniądze to najmniej romantyczna część tego wszystkiego i ta, która najczęściej boli później. Oto, jak to wygląda, szczerze. Rzeczywiste ceny bardzo różnią się w zależności od kraju, miasta i psa.",
    yourMatch: "Twoje dopasowanie",
    runningCostPrefix: "Orientacyjny koszt utrzymania rocznie, gdy pies się już zadomowi:",
    runningCostSuffix:
      "To szeroki przedział z naszej biblioteki ras, a nie wycena — ceny jedzenia, ubezpieczenia i pielęgnacji różnią się bardzo w zależności od kraju.",
    noticeTitle: "Skąd biorą się te liczby",
    noticeBody:
      "Każda strona rasy pokazuje orientacyjny roczny przedział kosztów dla tej rasy, a Porównywarka zestawia dwie lub trzy z nich obok siebie. Wolimy pokazać Ci szeroki, uczciwy przedział niż dokładną liczbę, która okaże się błędna tam, gdzie mieszkasz.",
    compareCta: "Porównaj koszty obok siebie",
    prepareCta: "Przygotuj swój dom",
  },
} as const;

function CostsPage() {
  const c = useCopy(copy);
  const { costGroups } = getDogContent();
  const saved = useGetDog();
  const breed = saved.interestedIn ? breedById[saved.interestedIn] : undefined;

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="display-xl mt-6">{c.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      {breed && (
        <section className="container-page mt-12 max-w-3xl">
          <div className="rounded-[1.75rem] border border-border bg-surface p-8 md:p-10">
            <p className="eyebrow">{c.yourMatch}</p>
            <h2 className="display-md mt-3">{breedContent()[breed.id].displayName}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.runningCostPrefix}{" "}
              <span className="font-display text-foreground">{costRange(breed)}</span>. {c.runningCostSuffix}
            </p>
          </div>
        </section>
      )}

      <Section className="pt-16 md:pt-20">
        <div className="container-page space-y-16">
          {costGroups.map((group) => (
            <div key={group.id} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionHead title={group.title} body={group.body} />
              </div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.label} className="bg-background p-7">
                    <p className="font-display text-[1.0625rem] leading-tight tracking-tight">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <div className="container-page max-w-3xl">
        <Notice title={c.noticeTitle}>{c.noticeBody}</Notice>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/compare" size="lg">
            {c.compareCta}
            <Arrow />
          </ButtonLink>
          <ButtonLink to="/get-a-dog/prepare" tone="outline" size="lg">
            {c.prepareCta}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
