import { Link, createFileRoute } from "@tanstack/react-router";
import { breedGroupLabel, breedOriginLabel } from "@/data/breed-meta";
import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useT, useCopy, useLocale } from "@/i18n";
import { breeds } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { Arrow, ButtonLink, Eyebrow, Section, TraitMeter } from "@/components/dogmatch/ui";
import { RealMatchesSection } from "@/components/dogmatch/real-matches";
import heroImage from "@/assets/hero.jpg";
import homeImage from "@/assets/editorial-home.jpg";
import dogLifeImage from "@/assets/dog-life.jpg";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "DoggMatch — Find the dog that's right for your life";
const description =
  "Tell us a little about your life, your home and your days, and we'll help you find the dogs that may suit you best. Free, honest, and we always show our reasoning.";

/**
 * Section ids are language-independent so a shared link lands in the right
 * place whichever language the reader has chosen; only the wording changes.
 */
const SECTION_IDS = [
  "why-doggmatch",
  "how-it-works",
  "real-matches",
  "dog-breeds",
  "compare-breeds",
  "doggmatch-plus",
  "dog-life",
  "faq",
  "find-your-dog",
] as const;

/** Trait names in the comparison preview, so the whole card reads in one language. */
const traitCopy = {
  en: {
    energy: "Energy",
    trainability: "Trainability",
    shedding: "Shedding",
    apartmentSuitability: "Apartment",
  },
  no: {
    energy: "Energi",
    trainability: "Lærevillighet",
    shedding: "Pelsfelling",
    apartmentSuitability: "Leilighet",
  },
  pl: {
    energy: "Energia",
    trainability: "Podatność na szkolenie",
    shedding: "Linienie",
    apartmentSuitability: "Mieszkanie",
  },
  dk: {
    energy: "Energi",
    trainability: "Trænbarhed",
    shedding: "Fældning",
    apartmentSuitability: "Lejlighed",
  },
  se: {
    energy: "Energi",
    trainability: "Träningsvillighet",
    shedding: "Fällning",
    apartmentSuitability: "Lägenhet",
  },
  fi: {
    energy: "Energia",
    trainability: "Koulutettavuus",
    shedding: "Karvanlähtö",
    apartmentSuitability: "Kerrostaloon sopivuus",
  },
} as const;

const localCopy = {
  en: {
    matchLooks: "What a match looks like",
    match: "match",
    heroAlt: "A woman walking a golden retriever along a coastal path at sunrise",
    terrierAlt: "A terrier resting in a sunlit apartment",
    parkAlt: "A city park at dawn with winding walking paths",
    jumpLabel: "Jump to a section of this page",
    jumpTitle: "On this page",
    shareLabel: "Share DoggMatch in a language",
    shareTitle: "Read DoggMatch in your language",
    shareBody:
      "Each link opens DoggMatch directly in that language — copy it and send it to someone who'd rather read it their way.",
    shareCopy: "Copy link",
    shareCopied: "Copied",
    anchors: {
      "why-doggmatch": "Why DoggMatch",
      "how-it-works": "How it works",
      "real-matches": "See it work",
      "dog-breeds": "Explore dog breeds",
      "compare-breeds": "Compare breeds",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Dog life near you",
      faq: "Questions people ask",
      "find-your-dog": "Find your dog",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "A little more help, once the dog is home",
    plusBody:
      "Training you can follow week by week, food and weight kept in one place, travel paperwork sorted, and everything printable for the fridge or the vet.",
    plusCta: "See what's inside DoggMatch+",
    faqEyebrow: "Good to know",
    faqTitle: "Questions people ask us",
    faq: [
      {
        q: "Is the matching done by AI?",
        a: "No. It's a fixed set of rules we wrote ourselves. The same answers always give the same dogs, and we show you the reasoning behind every score.",
      },
      {
        q: "Does it cost anything to find my dog?",
        a: "No. The questions, the results and every breed page are free. DoggMatch+ is only for the tools you use after the dog moves in.",
      },
      {
        q: "What if a mixed breed is right for me?",
        a: "Mixes are welcome. You can build one from two breeds and we'll score the dog in front of you rather than a label.",
      },
      {
        q: "Can I trust the breed information?",
        a: "We keep our sources open. Every breed, training and health page links to the bodies and research we lean on.",
      },
    ],
  },
  no: {
    matchLooks: "Slik ser en match ut",
    match: "match",
    heroAlt: "En kvinne g\u00e5r tur med en golden retriever langs kysten i soloppgang",
    terrierAlt: "En terrier som hviler i en solfylt leilighet",
    parkAlt: "En bypark i grålysningen med svingete turveier",
    jumpLabel: "Hopp til en del av denne siden",
    jumpTitle: "På denne siden",
    shareLabel: "Del DoggMatch på et språk",
    shareTitle: "Les DoggMatch på ditt eget språk",
    shareBody:
      "Hver lenke åpner DoggMatch direkte på det språket — kopier den og send den til noen som heller vil lese på sin måte.",
    shareCopy: "Kopier lenke",
    shareCopied: "Kopiert",
    anchors: {
      "why-doggmatch": "Hvorfor DoggMatch",
      "how-it-works": "Slik fungerer det",
      "real-matches": "Se det i praksis",
      "dog-breeds": "Bli kjent med rasene",
      "compare-breeds": "Sammenlign raser",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Hundeliv der du bor",
      faq: "Spørsmål vi ofte får",
      "find-your-dog": "Finn hunden din",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "Litt mer hjelp når hunden først er hjemme",
    plusBody:
      "Trening du kan følge uke for uke, fôr og vekt samlet på ett sted, reisepapirene i orden, og alt kan skrives ut til kjøleskapet eller veterinæren.",
    plusCta: "Se hva som ligger i DoggMatch+",
    faqEyebrow: "Godt å vite",
    faqTitle: "Spørsmål vi ofte får",
    faq: [
      {
        q: "Er det KI som gjør matchingen?",
        a: "Nei. Det er faste regler vi har skrevet selv. De samme svarene gir alltid de samme hundene, og vi viser deg begrunnelsen bak hver score.",
      },
      {
        q: "Koster det noe å finne hunden min?",
        a: "Nei. Spørsmålene, resultatet og alle rasesidene er gratis. DoggMatch+ gjelder bare verktøyene du bruker etter at hunden har flyttet inn.",
      },
      {
        q: "Hva om en blandingshund passer best for meg?",
        a: "Blandinger er hjertelig velkomne. Du kan sette sammen to raser, så vurderer vi hunden foran deg — ikke et stempel.",
      },
      {
        q: "Kan jeg stole på raseinformasjonen?",
        a: "Vi holder kildene åpne. Hver rase-, trenings- og helseside lenker til fagmiljøene og forskningen vi støtter oss på.",
      },
    ],
  },
  pl: {
    matchLooks: "Tak wygląda dopasowanie",
    match: "dopasowanie",
    heroAlt: "Kobieta spacerująca z golden retrieverem wzdłuż wybrzeża o wschodzie słońca",
    terrierAlt: "Terier odpoczywający w słonecznym mieszkaniu",
    parkAlt: "Miejski park o świcie z krętymi alejkami spacerowymi",
    jumpLabel: "Przejdź do wybranej części tej strony",
    jumpTitle: "Na tej stronie",
    shareLabel: "Udostępnij DoggMatch w wybranym języku",
    shareTitle: "Czytaj DoggMatch w swoim języku",
    shareBody:
      "Każdy link otwiera DoggMatch od razu w danym języku — skopiuj go i wyślij osobie, która woli czytać po swojemu.",
    shareCopy: "Kopiuj link",
    shareCopied: "Skopiowano",
    anchors: {
      "why-doggmatch": "Dlaczego DoggMatch",
      "how-it-works": "Jak to działa",
      "real-matches": "Zobacz, jak to działa",
      "dog-breeds": "Poznaj rasy psów",
      "compare-breeds": "Porównaj rasy",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Życie z psem w Twojej okolicy",
      faq: "Najczęstsze pytania",
      "find-your-dog": "Znajdź swojego psa",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "Trochę więcej wsparcia, gdy pies już jest w domu",
    plusBody:
      "Trening krok po kroku na każdy tydzień, karmienie i waga w jednym miejscu, dokumenty podróżne w porządku i wszystko gotowe do wydrukowania na lodówkę albo do weterynarza.",
    plusCta: "Zobacz, co zawiera DoggMatch+",
    faqEyebrow: "Warto wiedzieć",
    faqTitle: "Pytania, które nam zadajecie",
    faq: [
      {
        q: "Czy dopasowanie robi sztuczna inteligencja?",
        a: "Nie. To stały zestaw zasad, które sami napisaliśmy. Te same odpowiedzi zawsze dają te same psy, a przy każdym wyniku pokazujemy, skąd się wziął.",
      },
      {
        q: "Czy znalezienie mojego psa coś kosztuje?",
        a: "Nie. Pytania, wyniki i wszystkie strony ras są bezpłatne. DoggMatch+ dotyczy tylko narzędzi, z których korzystasz, gdy pies już zamieszka z Tobą.",
      },
      {
        q: "A jeśli najlepiej pasuje mi pies mieszaniec?",
        a: "Mieszańce są jak najbardziej mile widziane. Możesz złożyć psa z dwóch ras, a my ocenimy psa, jakiego masz przed sobą, a nie samą etykietkę.",
      },
      {
        q: "Czy mogę zaufać informacjom o rasach?",
        a: "Trzymamy nasze źródła jawnie. Każda strona rasy, treningu i zdrowia linkuje do organizacji i badań, na których się opieramy.",
      },
    ],
  },
  dk: {
    matchLooks: "Sådan ser et match ud",
    match: "match",
    heroAlt: "En kvinde går tur med en golden retriever langs kysten ved solopgang",
    terrierAlt: "En terrier, der hviler sig i en solbeskinnet lejlighed",
    parkAlt: "En bypark i gryet med snoede gåstier",
    jumpLabel: "Hop til en del af denne side",
    jumpTitle: "På denne side",
    shareLabel: "Del DoggMatch på et sprog",
    shareTitle: "Læs DoggMatch på dit eget sprog",
    shareBody:
      "Hvert link åbner DoggMatch direkte på det sprog — kopiér det, og send det til nogen, der hellere vil læse på deres egen måde.",
    shareCopy: "Kopiér link",
    shareCopied: "Kopieret",
    anchors: {
      "why-doggmatch": "Hvorfor DoggMatch",
      "how-it-works": "Sådan fungerer det",
      "real-matches": "Se det i praksis",
      "dog-breeds": "Udforsk hunderacer",
      "compare-breeds": "Sammenlign racer",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Hundeliv, hvor du bor",
      faq: "Spørgsmål folk stiller",
      "find-your-dog": "Find din hund",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "Lidt mere hjælp, når hunden er flyttet ind",
    plusBody:
      "Træning du kan følge uge for uge, foder og vægt samlet ét sted, styr på rejsepapirerne, og alt kan printes ud til køleskabet eller dyrlægen.",
    plusCta: "Se, hvad der er i DoggMatch+",
    faqEyebrow: "Godt at vide",
    faqTitle: "Spørgsmål, folk stiller os",
    faq: [
      {
        q: "Er det AI, der laver matchingen?",
        a: "Nej. Det er et fast regelsæt, vi selv har skrevet. De samme svar giver altid de samme hunde, og vi viser dig begrundelsen bag hver eneste score.",
      },
      {
        q: "Koster det noget at finde min hund?",
        a: "Nej. Spørgsmålene, resultatet og alle racesider er gratis. DoggMatch+ gælder kun de værktøjer, du bruger, efter hunden er flyttet ind.",
      },
      {
        q: "Hvad hvis en blandingshund passer bedst til mig?",
        a: "Blandinger er hjertelig velkomne. Du kan sætte to racer sammen, så vurderer vi hunden foran dig — ikke en etiket.",
      },
      {
        q: "Kan jeg stole på raceoplysningerne?",
        a: "Vi holder vores kilder åbne. Hver race-, trænings- og sundhedsside linker til de fagmiljøer og den forskning, vi støtter os på.",
      },
    ],
  },
  se: {
    matchLooks: "Så här ser en matchning ut",
    match: "matchning",
    heroAlt: "En kvinna som går med en golden retriever längs en kustväg vid soluppgång",
    terrierAlt: "En terrier som vilar i en solig lägenhet",
    parkAlt: "En stadspark i gryningen med slingrande gångstigar",
    jumpLabel: "Hoppa till en del av denna sida",
    jumpTitle: "På den här sidan",
    shareLabel: "Dela DoggMatch på ett språk",
    shareTitle: "Läs DoggMatch på ditt eget språk",
    shareBody:
      "Varje länk öppnar DoggMatch direkt på det språket — kopiera den och skicka den till någon som hellre läser på sitt eget sätt.",
    shareCopy: "Kopiera länk",
    shareCopied: "Kopierad",
    anchors: {
      "why-doggmatch": "Varför DoggMatch",
      "how-it-works": "Så här fungerar det",
      "real-matches": "Se det i praktiken",
      "dog-breeds": "Utforska hundraser",
      "compare-breeds": "Jämför raser",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Hundliv nära dig",
      faq: "Frågor folk ställer",
      "find-your-dog": "Hitta din hund",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "Lite mer hjälp, när hunden väl är hemma",
    plusBody:
      "Träning du kan följa vecka för vecka, foder och vikt samlat på ett ställe, resepapper i ordning, och allt går att skriva ut till kylskåpet eller veterinären.",
    plusCta: "Se vad som ingår i DoggMatch+",
    faqEyebrow: "Bra att veta",
    faqTitle: "Frågor vi ofta får",
    faq: [
      {
        q: "Är det AI som gör matchningen?",
        a: "Nej. Det är ett fast regelverk som vi själva har skrivit. Samma svar ger alltid samma hundar, och vi visar dig resonemanget bakom varje poäng.",
      },
      {
        q: "Kostar det något att hitta min hund?",
        a: "Nej. Frågorna, resultatet och alla rassidor är gratis. DoggMatch+ gäller bara verktygen du använder efter att hunden har flyttat in.",
      },
      {
        q: "Tänk om en blandras passar mig bäst?",
        a: "Blandraser är varmt välkomna. Du kan sätta ihop två raser, så bedömer vi hunden framför dig — inte en etikett.",
      },
      {
        q: "Kan jag lita på rasinformationen?",
        a: "Vi håller våra källor öppna. Varje ras-, tränings- och hälsosida länkar till de organisationer och den forskning vi bygger på.",
      },
    ],
  },
  fi: {
    matchLooks: "Tältä ehdotus näyttää",
    match: "osuvuus",
    heroAlt: "Nainen kävelyttää kultaistanoutajaa rantareitillä auringonnousun aikaan",
    terrierAlt: "Terrieri lepäämässä aurinkoisessa asunnossa",
    parkAlt: "Kaupunkipuisto aamuhämärässä mutkittelevine kävelyteineen",
    jumpLabel: "Siirry sivun johonkin osioon",
    jumpTitle: "Tällä sivulla",
    shareLabel: "Jaa DoggMatch jollain kielellä",
    shareTitle: "Lue DoggMatchia omalla kielelläsi",
    shareBody:
      "Jokainen linkki avaa DoggMatchin suoraan kyseisellä kielellä — kopioi se ja lähetä sille, joka haluaa mieluummin lukea omalla kielellään.",
    shareCopy: "Kopioi linkki",
    shareCopied: "Kopioitu",
    anchors: {
      "why-doggmatch": "Miksi DoggMatch",
      "how-it-works": "Näin se toimii",
      "real-matches": "Katso, miten se toimii",
      "dog-breeds": "Tutustu koirarotuihin",
      "compare-breeds": "Vertaile rotuja",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Koiraelämää lähelläsi",
      faq: "Kysytyt kysymykset",
      "find-your-dog": "Löydä koirasi",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "Vähän lisää apua, kun koira on jo kotona",
    plusBody:
      "Koulutusta, jota voit seurata viikko kerrallaan, ruokinta ja paino samassa paikassa, matkapaperit kunnossa, ja kaiken voi tulostaa jääkaapin oveen tai eläinlääkärille.",
    plusCta: "Katso, mitä DoggMatch+ sisältää",
    faqEyebrow: "Hyvä tietää",
    faqTitle: "Kysymyksiä, joita meiltä usein kysytään",
    faq: [
      {
        q: "Tekeekö tekoäly sovittamisen?",
        a: "Ei. Kyse on kiinteistä säännöistä, jotka olemme kirjoittaneet itse. Samat vastaukset antavat aina samat koirat, ja näytämme sinulle perustelun jokaisen pistemäärän takana.",
      },
      {
        q: "Maksaako koirani löytäminen mitään?",
        a: "Ei. Kysymykset, tulos ja jokainen rotusivu ovat ilmaisia. DoggMatch+ koskee vain työkaluja, joita käytät sen jälkeen, kun koira on muuttanut kotiin.",
      },
      {
        q: "Entä jos sekarotuinen sopisi minulle parhaiten?",
        a: "Sekarotuiset ovat lämpimästi tervetulleita. Voit yhdistää kaksi rotua, ja me arvioimme edessäsi olevan koiran — emme pelkkää nimikettä.",
      },
      {
        q: "Voinko luottaa rotutietoihin?",
        a: "Pidämme lähteemme avoimina. Jokainen rotu-, koulutus- ja terveyssivu linkittyy niihin tahoihin ja tutkimuksiin, joihin nojaamme.",
      },
    ],
  },
} as const;

const seoCopy = {
  en: { title, description },
  no: {
    title: "DoggMatch — finn hunden som passer livet ditt",
    description:
      "Fortell oss litt om livet ditt, hjemmet ditt og dagene dine, så hjelper vi deg å finne hundene som kan passe best. Gratis, ærlig, og vi viser alltid hvordan vi tenker.",
  },
  pl: {
    title: "DoggMatch — znajdź psa, który pasuje do Twojego życia",
    description:
      "Opowiedz nam trochę o swoim życiu, domu i codziennych dniach, a pomożemy Ci znaleźć psy, które mogą pasować najlepiej. Za darmo, uczciwie i zawsze pokazujemy, jak liczymy.",
  },
  dk: {
    title: "DoggMatch — find hunden, der passer til dit liv",
    description:
      "Fortæl os lidt om dit liv, dit hjem og dine dage, så hjælper vi dig med at finde de hunde, der kan passe bedst. Gratis, ærligt, og vi viser altid, hvordan vi tænker.",
  },
  se: {
    title: "DoggMatch — hitta hunden som passar ditt liv",
    description:
      "Berätta lite om ditt liv, ditt hem och dina dagar, så hjälper vi dig hitta de hundar som kan passa bäst. Gratis, ärligt, och vi visar alltid hur vi tänker.",
  },
  fi: {
    title: "DoggMatch — löydä elämääsi sopiva koira",
    description:
      "Kerro meille vähän elämästäsi, kodistasi ja päivistäsi, niin autamme sinua löytämään koirat, jotka voisivat sopia sinulle parhaiten. Ilmaista, rehellistä, ja näytämme aina, miten päättelemme asiat.",
  },
};

export const Route = createFileRoute("/{-$lang}/")({
  head: (ctx) => localizedHead(ctx, "/", seoCopy),
  component: HomePage,
});

/** Very restrained parallax — a few pixels, disabled for reduced motion. */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        if (ref.current) ref.current.style.transform = `translate3d(0, ${y * 0.06}px, 0) scale(1.04)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return ref;
}

function HomePage() {
  const t = useT();
  const c = useCopy(localCopy);
  const traits = useCopy(traitCopy);
  const parallax = useParallax();
  const featured = breeds.slice(0, 4);

  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section className="container-page pt-6 md:pt-10">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="animate-rise max-w-xl pb-2 lg:pb-16">
            <Eyebrow>{t.home.heroEyebrow}</Eyebrow>
            <h1 className="display-xl mt-7">{t.home.heroTitle}</h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              {t.home.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
                {t.home.heroCta}
                <Arrow />
              </ButtonLink>
              <ButtonLink to={withLangPrefix("/breeds")} tone="outline" size="lg">
                {t.home.heroSecondary}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{t.home.heroCaption}</p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface md:aspect-[5/4] lg:aspect-[4/5]">
              <img
                ref={parallax as never}
                src={heroImage}
                alt={c.heroAlt}
                width={1600}
                height={1200}
                fetchPriority="high"
                className="h-full w-full scale-[1.04] object-cover will-change-transform"
              />
            </div>
            <figure className="absolute -bottom-8 left-4 hidden w-60 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-lift)] md:block lg:-left-10">
              <figcaption className="eyebrow">{c.matchLooks}</figcaption>
              <p className="mt-3 font-display text-lg leading-tight text-foreground">
                Labrador Retriever
              </p>
              <p className="mt-2 font-display text-3xl font-semibold tabular-nums tracking-tight text-accent">
                94<span className="text-xl align-top">%</span>
              </p>
              <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong">
                <span className="block h-full w-[94%] rounded-full bg-accent" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{c.match}</p>
            </figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- Anchors for this page */}
      <nav aria-label={c.jumpLabel} className="container-page mt-16 md:mt-20">
        <h2 className="eyebrow">{c.jumpTitle}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {c.anchors[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ------------------------- Shareable link for each language version */}
      <LanguageShare c={c} />

      {/* ---------------------------------------------------- Value strip */}
      <section id="why-doggmatch" aria-label={c.anchors["why-doggmatch"]} className="container-page mt-16 md:mt-20">
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.home.valueStrip.map((item) => (
            <div key={item.title} className="bg-background p-7">
              <dt className="font-display text-lg tracking-tight">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------ How it works */}
      <Section id="how-it-works">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>{t.home.howEyebrow}</Eyebrow>
              <h2 className="display-lg mt-6 max-w-md">{t.home.howTitle}</h2>
              <div className="mt-10 hidden overflow-hidden rounded-[1.75rem] lg:block">
                <img
                  src={homeImage}
                  alt={c.terrierAlt}
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {t.home.steps.map((step) => (
                <li key={step.no} className="bg-background p-8 md:p-12">
                  <span className="font-display text-sm tabular-nums text-accent">{step.no}</span>
                  <h3 className="display-md mt-5">{step.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ Real matches */}
      <Section id="real-matches">
        <RealMatchesSection />
      </Section>

      {/* --------------------------------------------------- Breed preview */}
      <Section id="dog-breeds" className="bg-surface">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-lg">
              <Eyebrow>{t.home.breedsEyebrow}</Eyebrow>
              <h2 className="display-lg mt-6">{t.home.breedsTitle}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{t.home.breedsBody}</p>
            </div>
            <Link
              to={withLangPrefix("/breeds")}
              className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium"
            >
              {t.home.breedsCta}
              <Arrow />
            </Link>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((breed) => (
              <li key={breed.id}>
                <Link
                  to={withLangPrefix("/breeds/$breedId")}
                  params={{ breedId: breed.id }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[1.25rem] bg-background">
                    <img
                      src={breedImages[breed.id]}
                      alt={breedContent()[breed.id].displayName}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-tight tracking-tight">
                    {breedContent()[breed.id].displayName}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {breedGroupLabel(breed.group)} · {breedOriginLabel(breed.origin)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------- Comparison */}
      <Section id="compare-breeds">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div className="max-w-lg">
            <Eyebrow>{t.home.compareEyebrow}</Eyebrow>
            <h2 className="display-lg mt-6">{t.home.compareTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.home.compareBody}</p>
            <div className="mt-9">
              <ButtonLink to={withLangPrefix("/compare")} tone="outline" size="lg">
                {t.home.compareCta}
                <Arrow />
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-card p-7 shadow-[var(--shadow-soft)] md:p-9">
            <div className="grid grid-cols-2 gap-4 border-b border-border pb-5">
              {breeds.slice(0, 2).map((b) => (
                <div key={b.id}>
                  <img
                    src={breedImages[b.id]}
                    alt={breedContent()[b.id].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <p className="mt-3 font-display text-sm leading-tight">
                    {breedContent()[b.id].displayName}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 divide-y divide-border">
              {(["energy", "trainability", "shedding", "apartmentSuitability"] as const).map((key) => (
                <div key={key} className="grid grid-cols-2 gap-4">
                  <TraitMeter
                    label={traits[key]}
                    value={breeds[0]!.traits[key]}
                  />
                  <TraitMeter label="" value={breeds[1]!.traits[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- DoggMatch+ */}
      <Section id="doggmatch-plus" className="pt-0">
        <div className="container-page max-w-3xl">
          <Eyebrow>{c.plusEyebrow}</Eyebrow>
          <h2 className="display-lg mt-6">{c.plusTitle}</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{c.plusBody}</p>
          <div className="mt-9">
            <ButtonLink to={withLangPrefix("/plus")} tone="outline" size="lg">
              {c.plusCta}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- Dog Life */}
      <Section id="dog-life" className="pt-0">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={dogLifeImage}
              alt={c.parkAlt}
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[26rem] w-full object-cover md:h-[34rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
              <p className="eyebrow text-primary-foreground/70">{t.home.lifeEyebrow}</p>
              <h2 className="display-lg mt-4 max-w-xl text-primary-foreground">{t.home.lifeTitle}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
                {t.home.lifeBody}
              </p>
              <div className="mt-8">
                <ButtonLink to={withLangPrefix("/dog-life")} tone="accent" size="lg">
                  {t.home.lifeCta}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------- FAQ */}
      <Section id="faq" className="pt-0">
        <div className="container-page">
          <Eyebrow>{c.faqEyebrow}</Eyebrow>
          <h2 className="display-lg mt-6 max-w-lg">{c.faqTitle}</h2>
          <dl className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {c.faq.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-lg leading-tight tracking-tight">{item.q}</dt>
                <dd className="mt-3 max-w-md leading-relaxed text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ---------------------------------------------------------- Closing */}
      <Section id="find-your-dog" className="border-t border-border pt-16 md:pt-24">
        <div className="container-page max-w-3xl text-center">
          <h2 className="display-lg">{t.home.closingTitle}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.home.closingBody}</p>
          <div className="mt-10 flex justify-center">
            <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
              {t.home.closingCta}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

/**
 * Visible, shareable links that open the homepage directly in each language.
 * Every card is a real anchor (/, /no or /pl) with a copy button, so the
 * exact language version can be shared straight from the page.
 */
const SHARE_LANGS = [
  { code: "en", flag: "gb", short: "GB", label: "English" },
  { code: "no", flag: "no", short: "NO", label: "Norsk" },
  { code: "pl", flag: "pl", short: "PL", label: "Polski" },
  { code: "dk", flag: "dk", short: "DK", label: "Dansk" },
  { code: "se", flag: "se", short: "SE", label: "Svenska" },
  { code: "fi", flag: "fi", short: "FI", label: "Suomi" },
] as const;

/** The homepage's path in a given language: English is the bare root. */
const sharePath = (code: string) => (code === "en" ? "/" : `/${code}`);

/** BCP-47 language tag for a share-link's `hreflang` — most locale codes double as the tag, but dk/se are market codes over the real language codes da/sv. */
const shareHrefLang = (code: string) => (code === "no" ? "nb" : code === "dk" ? "da" : code === "se" ? "sv" : code);

function LanguageShare({ c }: { c: (typeof localCopy)["en"] }) {
  const { locale } = useLocale();
  const [copied, setCopied] = useState<string | null>(null);

  const copyLink = async (code: string) => {
    const url = abs(sharePath(code));
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt(url, url);
    }
    setCopied(code);
    window.setTimeout(() => setCopied((v) => (v === code ? null : v)), 2000);
  };

  return (
    <section aria-label={c.shareLabel} className="container-page mt-8">
      <div className="rounded-2xl border border-border bg-surface/60 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-xl tracking-tight text-foreground">{c.shareTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.shareBody}</p>
          </div>
          <ul className="grid flex-1 gap-2 sm:grid-cols-3 md:max-w-xl">
            {SHARE_LANGS.map((l) => {
              const isCurrent = locale === l.code;
              const isCopied = copied === l.code;
              return (
                <li key={l.code}>
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-2 pr-1.5">
                    <a
                      href={sharePath(l.code)}
                      hrefLang={shareHrefLang(l.code)}
                      className="flex min-w-0 flex-1 items-center gap-2 rounded-lg px-1.5 py-1 transition-colors hover:text-primary"
                      aria-label={`${l.label} — ${sharePath(l.code)}`}
                    >
                      <img
                        src={`https://flagcdn.com/w80/${l.flag}.png`}
                        srcSet={`https://flagcdn.com/w160/${l.flag}.png 2x`}
                        alt=""
                        aria-hidden
                        width={20}
                        height={15}
                        loading="lazy"
                        className="h-[15px] w-5 rounded-[3px] object-cover ring-1 ring-black/10"
                      />
                      <span className="truncate text-sm font-medium">
                        {l.label}
                        {isCurrent && <span className="sr-only"> ({c.shareCopied})</span>}
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyLink(l.code)}
                      aria-label={`${c.shareCopy}: ${l.label}`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-accent" aria-hidden />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden />
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
