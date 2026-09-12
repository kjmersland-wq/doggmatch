import { createFileRoute } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Notice, PointList, SectionHead, StepList } from "@/components/dogmatch/journey/parts";
import { getCarSafety, getCarSickness, getCarSteps, getLongJourney, getNervousDog, getPublicTransport, getAirTravel } from "@/data/travel/content";
import carImage from "@/assets/travel-car.jpg";
import safetyIllus from "@/assets/illus-car-safety.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Travelling by car with your dog — safely | DoggMatch";
const description =
  "How to secure a dog in a car, first journeys for a nervous dog, car sickness, long drives and breaks — and the honest truth about hot cars.";

export const Route = createFileRoute("/{-$lang}/travel/car")({
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
    links: seoLinks("/travel/car"),
  }),
  component: CarPage,
});

const copy = {
  en: {
    eyebrow: "In the car",
    title: "Getting there safely.",
    intro:
      "An unsecured dog is dangerous — to themselves, and to everyone else in the car. It's also the easiest thing on this page to put right.",
    safeUnsafeEyebrow: "Safe and unsafe",
    safeUnsafeTitle: "How your dog should travel.",
    safe: "Safe",
    notSafe: "Not safe",
    safetyAlt: "An illustration comparing a dog secured in a crate with an unsecured dog on a car seat",
    hotCarEyebrow: "Please read this one",
    hotCarTitle: "Never leave your dog in a parked car in warm weather.",
    hotCarBody1:
      "A car heats up far faster than people expect, and a dog can't cool itself the way we can. Shade moves. A window cracked open does very little. On a mild day it can still become dangerous inside in minutes.",
    hotCarBody2:
      "If you see a dog in distress in a locked car — panting hard, drooling, unsteady, unresponsive — call your local emergency number. It is always better to be wrong about it than too late.",
    firstJourneysEyebrow: "First journeys",
    firstJourneysTitle: "Start smaller than you think.",
    firstJourneysBody:
      "Most dogs who hate the car learned to hate it on one long, frightening trip. Undoing that takes far longer than doing it gently in the first place.",
    ifNervous: "If your dog is nervous",
    sicknessEyebrow: "Car sickness",
    sicknessTitle: "Very common, and usually improves.",
    signsToWatch: "Signs to watch for:",
    longJourneysEyebrow: "Long journeys",
    longJourneysTitle: "Breaks, water and patience.",
    otherEyebrow: "Trains, buses, boats and planes",
    otherTitle: "Everything else that moves.",
    otherBody: "Every operator sets its own rules, and they change. Always confirm directly with them before you book anything.",
    publicTransport: "Public transport",
    flying: "Flying",
    flyingNotice:
      "Flying is genuinely hard on some dogs, and some airlines won't carry flat-faced breeds at all because of the risk. If there's a way to drive or take a ferry instead, it's usually kinder.",
    walksCta: "Walks, trails and weather",
    abroadCta: "Travelling abroad",
  },
  no: {
    eyebrow: "I bilen",
    title: "Å komme trygt frem.",
    intro:
      "En usikret hund er farlig — for seg selv, og for alle andre i bilen. Det er også det enkleste på denne siden å rette opp.",
    safeUnsafeEyebrow: "Trygt og utrygt",
    safeUnsafeTitle: "Hvordan hunden din bør reise.",
    safe: "Trygt",
    notSafe: "Ikke trygt",
    safetyAlt: "En illustrasjon som sammenligner en hund sikret i et bur med en usikret hund på bilsetet",
    hotCarEyebrow: "Vennligst les denne",
    hotCarTitle: "Aldri la hunden din bli igjen i en parkert bil i varmt vær.",
    hotCarBody1:
      "En bil varmes opp langt raskere enn folk tror, og en hund kan ikke kjøle seg ned slik vi kan. Skyggen flytter seg. Et vindu på gløtt hjelper svært lite. Selv på en mild dag kan det bli farlig inne på få minutter.",
    hotCarBody2:
      "Ser du en hund i nød i en låst bil — tung pusting, sikling, ustøhet, uten respons — ring nødnummeret. Det er alltid bedre å ta feil enn å komme for sent.",
    firstJourneysEyebrow: "Første turer",
    firstJourneysTitle: "Start mindre enn du tror.",
    firstJourneysBody:
      "De fleste hunder som hater bilen lærte å hate den på én lang, skremmende tur. Å bygge det ned igjen tar langt lengre tid enn å gjøre det forsiktig fra starten.",
    ifNervous: "Hvis hunden din er engstelig",
    sicknessEyebrow: "Bilsyke",
    sicknessTitle: "Veldig vanlig, og som regel bedre med tiden.",
    signsToWatch: "Tegn å følge med på:",
    longJourneysEyebrow: "Lange turer",
    longJourneysTitle: "Pauser, vann og tålmodighet.",
    otherEyebrow: "Tog, buss, båt og fly",
    otherTitle: "Alt annet som beveger seg.",
    otherBody: "Hver operatør har sine egne regler, og de endrer seg. Bekreft alltid direkte med dem før dere bestiller noe.",
    publicTransport: "Offentlig transport",
    flying: "Fly",
    flyingNotice:
      "Fly er virkelig krevende for enkelte hunder, og noen flyselskaper tar overhodet ikke med raser med flatt ansikt på grunn av risikoen. Er det mulig å kjøre eller ta ferge i stedet, er det som regel snillere.",
    walksCta: "Turer, stier og vær",
    abroadCta: "Reise til utlandet",
  },
  pl: {
    eyebrow: "W samochodzie",
    title: "Bezpieczne dotarcie na miejsce.",
    intro:
      "Niezabezpieczony pies jest niebezpieczny — dla siebie i dla wszystkich innych w samochodzie. To też najłatwiejsza rzecz na tej stronie do naprawienia.",
    safeUnsafeEyebrow: "Bezpiecznie i niebezpiecznie",
    safeUnsafeTitle: "Jak powinien podróżować twój pies.",
    safe: "Bezpiecznie",
    notSafe: "Niebezpiecznie",
    safetyAlt: "Ilustracja porównująca psa zabezpieczonego w transporterze z niezabezpieczonym psem na siedzeniu samochodu",
    hotCarEyebrow: "Koniecznie to przeczytaj",
    hotCarTitle: "Nigdy nie zostawiaj psa w zaparkowanym samochodzie w ciepłą pogodę.",
    hotCarBody1:
      "Samochód nagrzewa się znacznie szybciej, niż większość ludzi się spodziewa, a pies nie potrafi schłodzić się tak jak my. Cień się przesuwa. Uchylone okno niewiele pomaga. Nawet w łagodny dzień wnętrze może stać się niebezpieczne w kilka minut.",
    hotCarBody2:
      "Jeśli widzisz psa w rozpaczliwym stanie w zamkniętym samochodzie — ciężko dyszącego, ślinionego, chwiejącego się, niereagującego — zadzwoń pod lokalny numer alarmowy. Zawsze lepiej się pomylić, niż zareagować za późno.",
    firstJourneysEyebrow: "Pierwsze przejazdy",
    firstJourneysTitle: "Zacznij od czegoś mniejszego, niż myślisz.",
    firstJourneysBody:
      "Większość psów, które nienawidzą samochodu, nauczyła się tego podczas jednej długiej, przerażającej podróży. Odwrócenie tego trwa dużo dłużej niż łagodne wprowadzenie od samego początku.",
    ifNervous: "Jeśli twój pies jest niespokojny",
    sicknessEyebrow: "Choroba lokomocyjna",
    sicknessTitle: "Bardzo częsta i zwykle mija z czasem.",
    signsToWatch: "Objawy, na które warto zwrócić uwagę:",
    longJourneysEyebrow: "Długie trasy",
    longJourneysTitle: "Przerwy, woda i cierpliwość.",
    otherEyebrow: "Pociągi, autobusy, statki i samoloty",
    otherTitle: "Wszystko inne, co się porusza.",
    otherBody: "Każdy przewoźnik ma własne zasady i one się zmieniają. Zawsze potwierdź je bezpośrednio przed rezerwacją.",
    publicTransport: "Transport publiczny",
    flying: "Podróż samolotem",
    flyingNotice:
      "Lot samolotem jest naprawdę trudny dla niektórych psów, a część linii lotniczych w ogóle nie przewozi ras płaskonosych ze względu na ryzyko. Jeśli można zamiast tego pojechać samochodem lub popłynąć promem, zwykle jest to łagodniejsze rozwiązanie.",
    walksCta: "Spacery, szlaki i pogoda",
    abroadCta: "Podróż za granicę",
  },
  dk: {
    eyebrow: "I bilen",
    title: "At komme sikkert frem.",
    intro:
      "En usikret hund er farlig — for sig selv, og for alle andre i bilen. Det er også det letteste på denne side at rette op på.",
    safeUnsafeEyebrow: "Sikkert og usikkert",
    safeUnsafeTitle: "Sådan bør din hund rejse.",
    safe: "Sikkert",
    notSafe: "Ikke sikkert",
    safetyAlt: "En illustration der sammenligner en hund sikret i en boks med en usikret hund på et bilsæde",
    hotCarEyebrow: "Læs venligst denne",
    hotCarTitle: "Efterlad aldrig din hund i en parkeret bil i varmt vejr.",
    hotCarBody1:
      "En bil bliver varm langt hurtigere, end folk forventer, og en hund kan ikke køle sig ned, som vi kan. Skyggen flytter sig. Et vindue på klem hjælper meget lidt. Selv på en mild dag kan det blive farligt derinde på få minutter.",
    hotCarBody2:
      "Ser du en hund i nød i en låst bil — tung vejrtrækning, savlen, ustøhed, ingen reaktion — ring til det lokale nødnummer. Det er altid bedre at tage fejl end at komme for sent.",
    firstJourneysEyebrow: "De første ture",
    firstJourneysTitle: "Start mindre, end du tror.",
    firstJourneysBody:
      "De fleste hunde, der hader bilen, lærte at hade den på én lang, skræmmende tur. At ændre det tager langt længere tid end at gøre det roligt fra starten.",
    ifNervous: "Hvis din hund er nervøs",
    sicknessEyebrow: "Køresyge",
    sicknessTitle: "Meget almindeligt, og bliver som regel bedre.",
    signsToWatch: "Tegn at holde øje med:",
    longJourneysEyebrow: "Lange ture",
    longJourneysTitle: "Pauser, vand og tålmodighed.",
    otherEyebrow: "Tog, busser, både og fly",
    otherTitle: "Alt andet der bevæger sig.",
    otherBody: "Hver operatør har sine egne regler, og de ændrer sig. Bekræft altid direkte med dem, før du booker noget.",
    publicTransport: "Offentlig transport",
    flying: "At flyve",
    flyingNotice:
      "At flyve er reelt hårdt for nogle hunde, og nogle flyselskaber tager slet ikke fladtrynede racer med på grund af risikoen. Er der en mulighed for at køre eller tage færge i stedet, er det som regel mere skånsomt.",
    walksCta: "Ture, stier og vejr",
    abroadCta: "Rejse til udlandet",
  },
  se: {
    eyebrow: "I bilen",
    title: "Att komma dit säkert.",
    intro:
      "En osäkrad hund är farlig — för sig själv, och för alla andra i bilen. Det är också det enklaste på den här sidan att rätta till.",
    safeUnsafeEyebrow: "Säkert och osäkert",
    safeUnsafeTitle: "Så här bör din hund resa.",
    safe: "Säkert",
    notSafe: "Inte säkert",
    safetyAlt: "En illustration som jämför en hund säkrad i en bur med en osäkrad hund i ett bilsäte",
    hotCarEyebrow: "Läs den här",
    hotCarTitle: "Lämna aldrig din hund i en parkerad bil i varmt väder.",
    hotCarBody1:
      "En bil värms upp mycket snabbare än folk tror, och en hund kan inte kyla ner sig som vi kan. Skuggan flyttar sig. Ett fönster på glänt hjälper väldigt lite. Även en mild dag kan det bli farligt inuti på några minuter.",
    hotCarBody2:
      "Ser du en hund i nöd i en låst bil — flåsar tungt, dreglar, ostadig, oresponsiv — ring det lokala larmnumret. Det är alltid bättre att ha fel än att vara för sen.",
    firstJourneysEyebrow: "De första resorna",
    firstJourneysTitle: "Börja mindre än du tror.",
    firstJourneysBody:
      "De flesta hundar som hatar bilen lärde sig hata den under en lång, skrämmande resa. Att ändra på det tar mycket längre tid än att göra det varsamt från början.",
    ifNervous: "Om din hund är nervös",
    sicknessEyebrow: "Åksjuka",
    sicknessTitle: "Väldigt vanligt, och brukar bli bättre.",
    signsToWatch: "Tecken att hålla utkik efter:",
    longJourneysEyebrow: "Långa resor",
    longJourneysTitle: "Pauser, vatten och tålamod.",
    otherEyebrow: "Tåg, bussar, båtar och flyg",
    otherTitle: "Allt annat som rör sig.",
    otherBody: "Varje operatör har sina egna regler, och de ändras. Bekräfta alltid direkt med dem innan du bokar något.",
    publicTransport: "Kollektivtrafik",
    flying: "Att flyga",
    flyingNotice:
      "Att flyga är verkligen tufft för vissa hundar, och vissa flygbolag tar inte alls med kortnosiga raser på grund av risken. Finns det ett sätt att köra eller ta färja istället, är det oftast snällare.",
    walksCta: "Promenader, stigar och väder",
    abroadCta: "Resa utomlands",
  },
  fi: {
    eyebrow: "Autossa",
    title: "Perille turvallisesti.",
    intro:
      "Kiinnittämätön koira on vaarallinen — itselleen ja kaikille muille autossa. Se on myös helpoin asia korjata tällä sivulla.",
    safeUnsafeEyebrow: "Turvallista ja turvatonta",
    safeUnsafeTitle: "Näin koirasi tulisi matkustaa.",
    safe: "Turvallista",
    notSafe: "Ei turvallista",
    safetyAlt: "Kuva, joka vertaa häkkiin kiinnitettyä koiraa kiinnittämättömään koiraan autonistuimella",
    hotCarEyebrow: "Lue tämä ehdottomasti",
    hotCarTitle: "Älä koskaan jätä koiraasi pysäköityyn autoon lämpimällä säällä.",
    hotCarBody1:
      "Auto lämpenee paljon nopeammin kuin ihmiset odottavat, eikä koira pysty jäähdyttämään itseään kuten me. Varjo liikkuu. Raolleen jätetty ikkuna auttaa hyvin vähän. Lämpimänäkin päivänä sisällä voi tulla vaarallista minuuteissa.",
    hotCarBody2:
      "Jos näet koiran hädässä lukitussa autossa — voimakas läähätys, kuolaaminen, horjuminen, reagoimattomuus — soita paikalliseen hätänumeroon. On aina parempi olla väärässä kuin liian myöhässä.",
    firstJourneysEyebrow: "Ensimmäiset matkat",
    firstJourneysTitle: "Aloita pienemmästä kuin luulet.",
    firstJourneysBody:
      "Useimmat autoa vihaavat koirat oppivat vihaamaan sitä yhdellä pitkällä, pelottavalla matkalla. Sen korjaaminen kestää paljon kauemmin kuin sen tekeminen rauhallisesti alusta alkaen.",
    ifNervous: "Jos koirasi on hermostunut",
    sicknessEyebrow: "Matkapahoinvointi",
    sicknessTitle: "Hyvin yleistä, ja yleensä helpottaa ajan myötä.",
    signsToWatch: "Merkkejä, joita kannattaa tarkkailla:",
    longJourneysEyebrow: "Pitkät matkat",
    longJourneysTitle: "Tauot, vesi ja kärsivällisyys.",
    otherEyebrow: "Junat, bussit, laivat ja lentokoneet",
    otherTitle: "Kaikki muu, mikä liikkuu.",
    otherBody: "Jokaisella liikennöitsijällä on omat sääntönsä, ja ne muuttuvat. Varmista aina suoraan heiltä ennen varaamista.",
    publicTransport: "Julkinen liikenne",
    flying: "Lentäminen",
    flyingNotice:
      "Lentäminen on aidosti raskasta joillekin koirille, ja jotkin lentoyhtiöt eivät kuljeta lyhytkuonoisia rotuja lainkaan riskin vuoksi. Jos autolla tai lautalla matkustaminen on mahdollista, se on yleensä lempeämpi vaihtoehto.",
    walksCta: "Lenkit, polut ja sää",
    abroadCta: "Matkustaminen ulkomaille",
  },
} as const;

function CarPage() {
  const c = useCopy(copy);
  const carSafety = getCarSafety();
  const carSickness = getCarSickness();
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="display-xl mt-6">{c.title}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img src={carImage} alt="A dog secured in a travel crate in the boot of an estate car" width={1600} height={1100} fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Safe / unsafe */}
      <Section className="pt-16 md:pt-24">
        <div className="container-page">
          <SectionHead
            eyebrow={c.safeUnsafeEyebrow}
            title={c.safeUnsafeTitle}
            body={carSafety.note}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr_0.8fr] lg:gap-12">
            <div className="rounded-[1.5rem] border border-border bg-card p-8">
              <p className="eyebrow">{c.safe}</p>
              <div className="mt-5">
                <PointList items={carSafety.safe} />
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-card p-8">
              <p className="eyebrow">{c.notSafe}</p>
              <div className="mt-5">
                <PointList items={carSafety.unsafe} tone="watch" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={safetyIllus} alt={c.safetyAlt} width={1200} height={1200} loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Hot cars */}
      <Section className="pt-0">
        <div className="container-page max-w-3xl">
          <div className="rounded-[1.75rem] border-2 border-accent bg-accent-soft/50 p-8 md:p-10">
            <p className="eyebrow text-accent">{c.hotCarEyebrow}</p>
            <h2 className="display-md mt-4">{c.hotCarTitle}</h2>
            <p className="mt-5 leading-relaxed">{c.hotCarBody1}</p>
            <p className="mt-4 leading-relaxed">{c.hotCarBody2}</p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- First journeys */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHead
                eyebrow={c.firstJourneysEyebrow}
                title={c.firstJourneysTitle}
                body={c.firstJourneysBody}
              />
              <div className="mt-8 rounded-2xl border border-border bg-background p-7">
                <p className="eyebrow">{c.ifNervous}</p>
                <div className="mt-5">
                  <PointList items={getNervousDog()} />
                </div>
              </div>
            </div>
            <StepList steps={getCarSteps()} />
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Sickness */}
      <Section>
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">{c.sicknessEyebrow}</p>
            <h2 className="display-md mt-4">{c.sicknessTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {c.signsToWatch} {carSickness.signs.join(", ").toLowerCase()}.
            </p>
            <div className="mt-6">
              <PointList items={carSickness.helps} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{carSickness.note}</p>
          </article>
          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">{c.longJourneysEyebrow}</p>
            <h2 className="display-md mt-4">{c.longJourneysTitle}</h2>
            <div className="mt-6">
              <PointList items={getLongJourney()} />
            </div>
          </article>
        </div>
      </Section>

      {/* ----------------------------------------------- Other transport */}
      <Section className="pt-0">
        <div className="container-page">
          <SectionHead
            eyebrow={c.otherEyebrow}
            title={c.otherTitle}
            body={c.otherBody}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{c.publicTransport}</p>
              <div className="mt-6">
                <CardGrid items={getPublicTransport()} columns={2} />
              </div>
            </div>
            <div>
              <p className="eyebrow">{c.flying}</p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-7">
                <PointList items={getAirTravel()} tone="watch" />
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-3xl">
            <Notice>{c.flyingNotice}</Notice>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink to={withLangPrefix("/travel/outdoors")} size="lg">
              {c.walksCta}
              <Arrow />
            </ButtonLink>
            <ButtonLink to={withLangPrefix("/travel/abroad")} tone="outline" size="lg">
              {c.abroadCta}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
