import { createFileRoute } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Notice, PointList, SectionHead, Checklist } from "@/components/dogmatch/journey/parts";
import { getHikingFactors, getHolidayChecklist, getPawChecks, getWalkPrep, getWeather } from "@/data/travel/content";
import hikeImage from "@/assets/travel-hike.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "Walks, hikes and weather — adventures your dog will enjoy | DoggMatch";
const description =
  "Building up to longer walks, hot and cold weather, paw care on tarmac and grit, water safety, and what to take on a holiday with your dog.";

export const Route = createFileRoute("/travel/outdoors")({
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
    links: seoLinks("/travel/outdoors"),
  }),
  component: OutdoorsPage,
});

const copy = {
  en: {
    eyebrow: "Out and about",
    title: "Adventures they'll actually enjoy.",
    intro: "Dogs will almost always keep going for you, well past the point they should have stopped. That's why the judgement has to be yours.",
    beforeEyebrow: "Before a big walk",
    beforeTitle: "A little preparation.",
    hikingEyebrow: "Hiking",
    hikingTitle: "What decides how far you go.",
    weatherEyebrow: "Weather",
    weatherTitle: "The weather decides more than the map does.",
    heat: "Heat",
    cold: "Cold",
    heatstrokeTitle: "Heatstroke is an emergency",
    heatstrokeBody: "Heavy panting that won't settle, bright red gums, drooling, wobbliness, vomiting or collapse. Get them into shade, offer water, cool them with tepid — not icy — water, and ring a vet straight away.",
    pawsEyebrow: "Paws",
    pawsTitle: "Check them after every big day.",
    holidayEyebrow: "A holiday together",
    holidayTitle: "What to take.",
    holidayBody: "Tick it off as you pack. It saves on this device, so it'll still be here next time.",
    abroadCta: "Travelling abroad",
    placesCta: "Find dog-friendly places",
  },
  no: {
    eyebrow: "Ute og går",
    title: "Eventyr de faktisk kommer til å like.",
    intro: "Hunder holder nesten alltid på for din skyld, godt forbi punktet der de burde stoppet. Derfor må vurderingen være din.",
    beforeEyebrow: "Før en stor tur",
    beforeTitle: "Litt forberedelse.",
    hikingEyebrow: "Fjelltur",
    hikingTitle: "Hva som avgjør hvor langt dere går.",
    weatherEyebrow: "Vær",
    weatherTitle: "Været avgjør mer enn kartet gjør.",
    heat: "Varme",
    cold: "Kulde",
    heatstrokeTitle: "Hetesjokk er en nødsituasjon",
    heatstrokeBody: "Tung pusting som ikke roer seg, klarrøde tannkjøtt, sikling, ustøhet, oppkast eller kollaps. Få dem i skygge, tilby vann, kjøl dem ned med lunkent — ikke iskaldt — vann, og ring veterinæren med en gang.",
    pawsEyebrow: "Poter",
    pawsTitle: "Sjekk dem etter hver store tur.",
    holidayEyebrow: "En ferie sammen",
    holidayTitle: "Hva dere bør ta med.",
    holidayBody: "Kryss av mens dere pakker. Det lagres på denne enheten, så det ligger her neste gang også.",
    abroadCta: "Reise til utlandet",
    placesCta: "Finn hundevennlige steder",
  },
  pl: {
    eyebrow: "Na zewnątrz",
    title: "Przygody, które naprawdę mu się spodobają.",
    intro: "Psy niemal zawsze będą kontynuować marsz dla ciebie, długo po tym, jak powinny się zatrzymać. Dlatego to ty musisz ocenić sytuację.",
    beforeEyebrow: "Przed dużym spacerem",
    beforeTitle: "Odrobina przygotowania.",
    hikingEyebrow: "Wędrówki",
    hikingTitle: "Co decyduje o tym, jak daleko dojdziecie.",
    weatherEyebrow: "Pogoda",
    weatherTitle: "Pogoda decyduje bardziej niż mapa.",
    heat: "Upał",
    cold: "Zimno",
    heatstrokeTitle: "Udar cieplny to stan nagły",
    heatstrokeBody: "Ciężkie dyszenie, które nie ustępuje, jaskrawoczerwone dziąsła, ślinienie się, chwianie, wymioty lub zapaść. Zaprowadź psa w cień, podaj wodę, schładzaj letnią — nie lodowatą — wodą i natychmiast zadzwoń do weterynarza.",
    pawsEyebrow: "Łapy",
    pawsTitle: "Sprawdzaj je po każdym dużym dniu.",
    holidayEyebrow: "Wspólny wyjazd",
    holidayTitle: "Co zabrać ze sobą.",
    holidayBody: "Odhaczaj podczas pakowania. Zapisuje się to na tym urządzeniu, więc będzie tu też następnym razem.",
    abroadCta: "Podróż za granicę",
    placesCta: "Znajdź miejsca przyjazne psom",
  },
} as const;

function OutdoorsPage() {
  const c = useCopy(copy);
  const weather = getWeather();
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="overflow-hidden rounded-[2rem]">
          <img src={hikeImage} alt="A woman and her dog resting on a mountain trail at golden hour" width={1600} height={1008} fetchPriority="high" className="h-[22rem] w-full object-cover md:h-[30rem]" />
        </div>
        <div className="mt-12 max-w-2xl">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="display-xl mt-6">{c.title}</h1>
          <ShareBar className="mt-6" />
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        </div>
      </section>

      <Section className="pt-16 md:pt-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow={c.beforeEyebrow} title={c.beforeTitle} />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <PointList items={getWalkPrep()} />
            </div>
          </div>
          <div>
            <SectionHead eyebrow={c.hikingEyebrow} title={c.hikingTitle} />
            <div className="mt-8">
              <CardGrid items={getHikingFactors()} columns={2} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead
            eyebrow={c.weatherEyebrow}
            title={c.weatherTitle}
            body={weather.note}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-border bg-background p-8 md:p-10">
              <h3 className="display-md">{c.heat}</h3>
              <div className="mt-6">
                <PointList items={weather.hot} tone="watch" />
              </div>
            </article>
            <article className="rounded-[1.75rem] border border-border bg-background p-8 md:p-10">
              <h3 className="display-md">{c.cold}</h3>
              <div className="mt-6">
                <PointList items={weather.cold} tone="watch" />
              </div>
            </article>
          </div>
          <div className="mt-10 max-w-3xl">
            <Notice title={c.heatstrokeTitle}>{c.heatstrokeBody}</Notice>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow={c.pawsEyebrow} title={c.pawsTitle} />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <PointList items={getPawChecks()} />
            </div>
          </div>
          <div>
            <SectionHead eyebrow={c.holidayEyebrow} title={c.holidayTitle} body={c.holidayBody} />
            <div className="mt-8">
              <Checklist
                listId="holiday"
                columns={1}
                items={getHolidayChecklist().map((label, i) => ({ id: `h${i}`, label }))}
              />
            </div>
          </div>
        </div>

        <div className="container-page mt-14 flex flex-wrap gap-3">
          <ButtonLink to="/travel/abroad" size="lg">
            {c.abroadCta}
            <Arrow />
          </ButtonLink>
          <ButtonLink to="/dog-life" tone="outline" size="lg">
            {c.placesCta}
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
