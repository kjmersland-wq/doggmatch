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
import { withLangPrefix } from "@/lib/localized-path";

const title = "What will a dog really cost? Before they arrive, and every month | DoggMatch";
const description =
  "An honest look at the cost of a dog: the one-off spend before they arrive, the steady monthly cost, and the unexpected vet bills worth being ready for.";

export const Route = createFileRoute("/{-$lang}/get-a-dog/costs")({
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
  dk: {
    eyebrow: "Forpligtelsen",
    title: "Hvad koster en hund egentlig?",
    intro:
      "Penge er den mindst romantiske del af det her, og den del der oftest gør ondt senere. Her er billedet af det, ærligt talt. De faktiske priser varierer enormt efter land, by og hund.",
    yourMatch: "Dit match",
    runningCostPrefix: "Vejledende løbende omkostning, per år, når hunden har sat sig til rette:",
    runningCostSuffix:
      "Det er et bredt spænd fra vores racebibliotek, ikke et tilbud — priser på mad, forsikring og pleje varierer meget fra land til land.",
    noticeTitle: "Hvor tallene kommer fra",
    noticeBody:
      "Hver raceside viser et vejledende årligt omkostningsspænd for den race, og Sammenlign sætter to eller tre af dem side om side. Vi vil hellere vise dig et bredt, ærligt spænd end et præcist tal, der viser sig at være forkert der, hvor du bor.",
    compareCta: "Sammenlign omkostninger side om side",
    prepareCta: "Gør dit hjem klar",
  },
  se: {
    eyebrow: "Åtagandet",
    title: "Vad kostar en hund egentligen?",
    intro:
      "Pengar är den minst romantiska delen av det här, och den del som oftast gör ont senare. Här är läget, ärligt talat. De faktiska priserna varierar enormt beroende på land, stad och hund.",
    yourMatch: "Din matchning",
    runningCostPrefix: "Ungefärlig löpande kostnad, per år, när hunden har kommit till ro:",
    runningCostSuffix:
      "Det är ett brett spann från vårt rasbibliotek, inte en offert — priser på mat, försäkring och skötsel varierar mycket mellan länder.",
    noticeTitle: "Var siffrorna kommer ifrån",
    noticeBody:
      "Varje rassida visar ett ungefärligt årligt kostnadsspann för den rasen, och Jämför lägger två eller tre av dem sida vid sida. Vi vill hellre visa dig ett brett, ärligt spann än en exakt siffra som visar sig vara fel där du bor.",
    compareCta: "Jämför kostnader sida vid sida",
    prepareCta: "Gör ditt hem redo",
  },
  fi: {
    eyebrow: "Sitoumus",
    title: "Mitä koira todella maksaa?",
    intro:
      "Raha on tämän vähiten romanttinen osa, ja se osa, joka useimmiten sattuu myöhemmin. Tässä on tilanne rehellisesti kerrottuna. Todelliset hinnat vaihtelevat valtavasti maan, kaupungin ja koiran mukaan.",
    yourMatch: "Sinun osumasi",
    runningCostPrefix: "Suuntaa antava vuosittainen ylläpitokustannus, kun koira on asettunut arkeen:",
    runningCostSuffix:
      "Tämä on laaja haarukka rotukirjastostamme, ei tarjous — ruoan, vakuutuksen ja hoidon hinnat vaihtelevat paljon maittain.",
    noticeTitle: "Mistä luvut tulevat",
    noticeBody:
      "Jokainen rotusivu näyttää suuntaa antavan vuosittaisen kustannushaarukan kyseiselle rodulle, ja Vertailu asettaa kaksi tai kolme niistä rinnakkain. Näytämme mieluummin laajan, rehellisen haarukan kuin tarkan luvun, joka osoittautuu vääräksi juuri sinun asuinpaikassasi.",
    compareCta: "Vertaile kustannuksia rinnakkain",
    prepareCta: "Valmistele kotisi",
  },
  de: {
    eyebrow: "Die Verpflichtung",
    title: "Was kostet ein Hund wirklich?",
    intro:
      "Geld ist der am wenigsten romantische Teil davon, und der Teil, der später am ehesten wehtut. Hier ist die ehrliche Übersicht. Die tatsächlichen Preise unterscheiden sich enorm nach Land, Stadt und Hund.",
    yourMatch: "Deine Übereinstimmung",
    runningCostPrefix: "Ungefähre laufende Kosten pro Jahr, sobald der Hund sich eingelebt hat:",
    runningCostSuffix:
      "Das ist eine breite Spanne aus unserer Rassenbibliothek, kein Angebot — Preise für Futter, Versicherung und Pflege variieren stark von Land zu Land.",
    noticeTitle: "Woher die Zahlen kommen",
    noticeBody:
      "Jede Rassenseite zeigt eine ungefähre jährliche Kostenspanne für diese Rasse, und Vergleichen stellt zwei oder drei davon nebeneinander. Wir zeigen dir lieber eine breite, ehrliche Spanne als eine genaue Zahl, die sich dort, wo du lebst, als falsch herausstellt.",
    compareCta: "Kosten nebeneinander vergleichen",
    prepareCta: "Dein Zuhause vorbereiten",
  },
  fr: {
    eyebrow: "L'engagement",
    title: "Combien coûte vraiment un chien ?",
    intro:
      "L'argent est la partie la moins romantique de tout cela, et celle qui fait le plus souvent mal ensuite. Voici la réalité, en toute honnêteté. Les prix réels varient énormément selon le pays, la ville et le chien.",
    yourMatch: "Votre correspondance",
    runningCostPrefix: "Coût de fonctionnement indicatif, par an, une fois qu'il est installé :",
    runningCostSuffix:
      "C'est une large fourchette issue de notre bibliothèque de races, pas un devis — les prix de la nourriture, de l'assurance et du toilettage varient beaucoup selon le pays.",
    noticeTitle: "D'où viennent ces chiffres",
    noticeBody:
      "Chaque page de race affiche une fourchette de coût annuel indicatif pour cette race, et Comparer en met deux ou trois côte à côte. Nous préférons vous montrer une fourchette large et honnête plutôt qu'un chiffre précis qui se révélerait faux là où vous vivez.",
    compareCta: "Comparer les coûts côte à côte",
    prepareCta: "Préparer votre maison",
  },
  nl: {
    eyebrow: "De verantwoordelijkheid",
    title: "Wat kost een hond echt?",
    intro:
      "Geld is het minst romantische deel hiervan, en het deel dat later het vaakst pijn doet. Hier is het beeld, eerlijk verteld. De werkelijke prijzen verschillen enorm per land, stad en hond.",
    yourMatch: "Jouw match",
    runningCostPrefix: "Indicatieve doorlopende kosten, per jaar, zodra de hond is ingeburgerd:",
    runningCostSuffix:
      "Dat is een brede marge uit onze rassenbibliotheek, geen offerte — prijzen voor voeding, verzekering en verzorging verschillen sterk per land.",
    noticeTitle: "Waar de cijfers vandaan komen",
    noticeBody:
      "Elke rassenpagina toont een indicatieve jaarlijkse kostenmarge voor dat ras, en Vergelijken zet er twee of drie naast elkaar. We laten liever een brede, eerlijke marge zien dan een precies getal dat op jouw woonplek onjuist blijkt.",
    compareCta: "Vergelijk kosten naast elkaar",
    prepareCta: "Maak je huis klaar",
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
          <ButtonLink to={withLangPrefix("/compare")} size="lg">
            {c.compareCta}
            <Arrow />
          </ButtonLink>
          <ButtonLink to={withLangPrefix("/get-a-dog/prepare")} tone="outline" size="lg">
            {c.prepareCta}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
