import { Link, createFileRoute } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { CardGrid, SectionHead } from "@/components/dogmatch/journey/parts";
import { getTravelWithDifferentDogs } from "@/data/travel/content";
import heroImage from "@/assets/travel-hike.jpg";
import carImage from "@/assets/travel-car.jpg";
import abroadImage from "@/assets/travel-abroad.jpg";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Travel and adventures with your dog — car, trail and abroad | DoggMatch";
const description =
  "Getting there safely and having a good time when you arrive: car safety, first journeys, hot weather, paws, hiking, dog-friendly places, and travelling between countries.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Reiser og turer med hunden — bil, sti og utenlands | DoggMatch",
    description:
      "Trygt fram og fine dager når dere kommer: bilsikkerhet, første turer, varmt vær, poter, fjelltur, hundevennlige steder og reiser mellom land.",
  },
  pl: {
    title: "Podróże i wyprawy z psem — auto, szlak i zagranica | DoggMatch",
    description:
      "Bezpieczna droga i dobry czas na miejscu: bezpieczeństwo w aucie, pierwsze wyjazdy, upały, łapy, wędrówki, miejsca przyjazne psom i podróże między krajami.",
  },
  dk: {
    title: "Rejser og eventyr med hunden — bil, sti og udlandet | DoggMatch",
    description:
      "Trygt frem og gode dage, når I når frem: bilsikkerhed, første ture, varmt vejr, poter, vandreture, hundevenlige steder og rejser mellem lande.",
  },
  se: {
    title: "Resor och äventyr med hunden — bil, led och utomlands | DoggMatch",
    description:
      "Tryggt fram och bra dagar när ni kommer fram: bilsäkerhet, första resorna, varmt väder, tassar, vandring, hundvänliga platser och resor mellan länder.",
  },
  fi: {
    title: "Matkat ja seikkailut koiran kanssa — auto, polku ja ulkomaat | DoggMatch",
    description:
      "Turvallisesti perille ja hyviä hetkiä kohteessa: turvallisuus autossa, ensimmäiset matkat, kuuma sää, tassut, vaellus, koirille ystävälliset paikat ja matkustaminen maiden välillä.",
  },
  de: {
    title: "Reisen und Abenteuer mit Hund — Auto, Wanderweg und Ausland | DoggMatch",
    description:
      "Sicher ankommen und dort eine gute Zeit haben: Sicherheit im Auto, erste Fahrten, heißes Wetter, Pfoten, Wandern, hundefreundliche Orte und Reisen zwischen Ländern.",
  },
  fr: {
    title: "Voyages et aventures avec votre chien — voiture, sentier et étranger | DoggMatch",
    description:
      "Arriver en sécurité et passer de bons moments sur place : sécurité en voiture, premiers trajets, chaleur, coussinets, randonnée, lieux accueillants pour chiens et voyages entre pays.",
  },
  nl: {
    title: "Reizen en avonturen met je hond — auto, pad en buitenland | DoggMatch",
    description:
      "Veilig aankomen en genieten als je er bent: veiligheid in de auto, eerste ritjes, warm weer, pootjes, wandelen, hondvriendelijke plekken en reizen tussen landen.",
  },
};

export const Route = createFileRoute("/{-$lang}/travel/")({
  head: (ctx) => localizedHead(ctx, "/travel", seoCopy),
  component: TravelPage,
});

const copy = {
  en: {
    eyebrow: "Travel and adventures",
    heroTitle: "Going somewhere together?",
    heroBody:
      "Half of a good trip is getting there safely. The other half is knowing your dog is genuinely enjoying it — and knowing when to turn back.",
    checkJourney: "Check my journey",
    carSafety: "Car safety",
    open: "Open",
    sections: [
      {
        to: "/travel/car",
        label: "In the car",
        title: "Getting there safely.",
        body: "How to secure a dog properly, first journeys for a nervous dog, car sickness, long drives — and why a parked car in summer is so dangerous.",
        alt: "A dog secured in a travel crate in the boot of an estate car",
      },
      {
        to: "/travel/outdoors",
        label: "Out and about",
        title: "Walks, trails and weather.",
        body: "Building up to longer hikes, heat and cold, paws on hot tarmac and grit, water safety, and places that are genuinely pleased to see a dog.",
        alt: "A woman and her dog resting on a mountain trail at golden hour",
      },
      {
        to: "/travel/abroad",
        label: "Crossing borders",
        title: "Travelling abroad.",
        body: "Tell us where you're going and when. We'll show what's usually required — microchip, rabies, passport, worming — and point you at the official source for the final word.",
        alt: "A dog waiting calmly beside a suitcase in an airy departure hall",
      },
    ],
    differentEyebrow: "Not every dog travels the same",
    differentTitle: "Who you're travelling with changes everything.",
    differentBody:
      "A puppy, an old dog, a flat-faced breed and a fit adult need quite different plans for the same journey.",
  },
  dk: {
    eyebrow: "Rejser og eventyr",
    heroTitle: "Skal I ud at rejse sammen?",
    heroBody:
      "Halvdelen af en god tur er at komme sikkert frem. Den anden halvdel er at vide, at din hund nyder det – og at vide, hvornår det er tid til at vende om.",
    checkJourney: "Tjek min rejse",
    carSafety: "Bilsikkerhed",
    open: "Åben",
    sections: [
      {
        to: "/travel/car",
        label: "I bilen",
        title: "Sikker transport.",
        body: "Sådan spænder du hunden forsvarligt fast, de første bilture for en nervøs hund, køresyge, lange ture – og hvorfor en parkeret bil er livsfarlig om sommeren.",
        alt: "En hund spændt fast i en transportkasse på bagsædet af en stationcar",
      },
      {
        to: "/travel/outdoors",
        label: "Udendørs",
        title: "Gåture, stier og vejr.",
        body: "Opbygning til længere vandreture, varme og kulde, poter på varm asfalt og grus, sikkerhed ved vandet og steder, hvor hunde er velkomne.",
        alt: "En kvinde og hendes hund hviler sig på en bjergsti i gyldent lys",
      },
      {
        to: "/travel/abroad",
        label: "Over grænsen",
        title: "Rejser til udlandet.",
        body: "Fortæl os, hvor I skal hen, og hvornår. Vi viser, hvad der typisk kræves – chip, rabiesvaccination, pas, ormekur – og henviser til den officielle kilde for de endelige regler.",
        alt: "En hund venter roligt ved siden af en kuffert i en lys ankomsthal",
      },
    ],
    differentEyebrow: "Ikke alle hunde rejser ens",
    differentTitle: "Hvem du rejser med, ændrer alt.",
    differentBody:
      "En hvalp, en gammel hund, en fladnosset race og en sund voksen hund kræver helt forskellige planer for den samme rejse.",
  },
  se: {
    eyebrow: "Resor och äventyr",
    heroTitle: "Ska ni iväg någonstans tillsammans?",
    heroBody:
      "Halva en lyckad resa är att komma fram tryggt. Den andra halvan är att veta att din hund verkligen njuter – och att veta när det är dags att vända om.",
    checkJourney: "Kolla min resa",
    carSafety: "Bilsäkerhet",
    open: "Öppna",
    sections: [
      {
        to: "/travel/car",
        label: "I bilen",
        title: "Att komma fram tryggt.",
        body: "Hur du spänner fast hunden ordentligt, första bilresorna för en orolig hund, åksjuka, långa resor – och varför en parkerad bil på sommaren är så farlig.",
        alt: "En hund säkert fastspänd i en transportbur i bagageutrymmet på en kombi",
      },
      {
        to: "/travel/outdoors",
        label: "Utomhus",
        title: "Promenader, leder och väder.",
        body: "Bygga upp för längre vandringar, värme och kyla, tassar på het asfalt och grus, vattensäkerhet och platser som verkligen välkomnar hundar.",
        alt: "En kvinna och hennes hund vilar på en bergsvandringsled i gyllene timmen",
      },
      {
        to: "/travel/abroad",
        label: "Över gränserna",
        title: "Resa utomlands.",
        body: "Berätta vart ni ska och när. Vi visar vad som brukar krävas – chip, rabies, pass, avmaskning – och hänvisar till officiella källor för det slutgiltiga beskedet.",
        alt: "En hund som lugnt väntar bredvid en resväska i en ljus ankomsthall",
      },
    ],
    differentEyebrow: "Alla hundar reser inte likadant",
    differentTitle: "Vem du reser med förändrar allt.",
    differentBody:
      "En valp, en gammal hund, en brachycefal (kortnosig) ras och en frisk vuxen hund behöver helt olika planer för samma resa.",
  },
  fi: {
    eyebrow: "Matkailu ja seikkailut",
    heroTitle: "Lähdössä jonnekin yhdessä?",
    heroBody:
      "Puolikas onnistuneesta matkasta on turvallinen matkanteko. Toinen puolisko on varmuus siitä, että koirasi todella nauttii matkasta – ja tieto siitä, milloin on aika kääntyä takaisin.",
    checkJourney: "Tarkista matkani",
    carSafety: "Autoturvallisuus",
    open: "Avaa",
    sections: [
      {
        to: "/travel/car",
        label: "Autossa",
        title: "Turvallinen matkanteko autolla.",
        body: "Kuinka koira kiinnitetään asianmukaisesti, ensimmäiset matkat aralle koiralle, matkapahoinvointi, pitkät ajomatkat – ja miksi kesällä parkkeerattu auto on niin vaarallinen.",
        alt: "Matkustushäkkiin kiinnitetty koira farmariauton takakontissa",
      },
      {
        to: "/travel/outdoors",
        label: "Ulkona ja liikkeellä",
        title: "Lenkit, polut ja sää.",
        body: "Pidempien vaellusten aloittaminen, kuumuus ja kylmyys, tassut kuumalla asfaltilla ja hiekalla, vesiturvallisuus ja paikat, joissa koira on todella tervetullut.",
        alt: "Nainen ja hänen koiransa lepäämässä vuoristopolulla kultaisessa hetkessä",
      },
      {
        to: "/travel/abroad",
        label: "Rajojen ylitys",
        title: "Matkustaminen ulkomaille.",
        body: "Kerro meille minne ja milloin olet menossa. Näytämme, mitä yleensä vaaditaan – mikrosiru, raivotauti, passi, madotus – ja ohjaamme sinut viralliseen lähteeseen lopullisen tiedon saamiseksi.",
        alt: "Koira odottaa rauhallisesti matkalaukun vieressä avarassa lähtöaulassa",
      },
    ],
    differentEyebrow: "Kaikki koirat eivät matkusta samalla tavalla",
    differentTitle: "Se, kenen kanssa matkustat, muuttaa kaiken.",
    differentBody:
      "Pentu, vanha koira, lyhytkuonolainen rotu ja terve aikuinen koira tarvitsevat varsin erilaisia suunnitelmia samaan matkaan.",
  },
  no: {
    eyebrow: "Reise og eventyr",
    heroTitle: "Skal dere et sted sammen?",
    heroBody:
      "Halvparten av en god tur er å komme trygt frem. Den andre halvparten er å vite at hunden din faktisk koser seg — og å vite når dere bør snu.",
    checkJourney: "Sjekk reisen min",
    carSafety: "Sikkerhet i bilen",
    open: "Åpne",
    sections: [
      {
        to: "/travel/car",
        label: "I bilen",
        title: "Å komme trygt frem.",
        body: "Hvordan sikre en hund riktig, første turer for en engstelig hund, bilsyke, lange kjøreturer — og hvorfor en parkert bil om sommeren er så farlig.",
        alt: "En hund sikret i et transportbur i bagasjerommet på en stasjonsvogn",
      },
      {
        to: "/travel/outdoors",
        label: "Ute og går",
        title: "Turer, stier og vær.",
        body: "Å bygge opp til lengre turer, varme og kulde, poter på varm asfalt og grus, vannsikkerhet, og steder som virkelig setter pris på en hund.",
        alt: "En kvinne og hunden hennes hviler på en fjellsti i gyllent lys",
      },
      {
        to: "/travel/abroad",
        label: "Over landegrenser",
        title: "Reise til utlandet.",
        body: "Fortell oss hvor og når dere skal reise. Vi viser hva som vanligvis kreves — chip, rabies, pass, ormekur — og peker deg til den offisielle kilden for det endelige svaret.",
        alt: "En hund som venter rolig ved siden av en koffert i en luftig avgangshall",
      },
    ],
    differentEyebrow: "Ikke alle hunder reiser likt",
    differentTitle: "Hvem du reiser med endrer alt.",
    differentBody:
      "En valp, en gammel hund, en rase med flatt ansikt og en sprek voksen hund trenger ganske ulike planer for samme reise.",
  },
  pl: {
    eyebrow: "Podróże i przygody",
    heroTitle: "Wybieracie się gdzieś razem?",
    heroBody:
      "Połowa udanej podróży to bezpieczne dotarcie na miejsce. Druga połowa to wiedza, że twój pies naprawdę się cieszy — i wiedza, kiedy zawrócić.",
    checkJourney: "Sprawdź moją podróż",
    carSafety: "Bezpieczeństwo w samochodzie",
    open: "Otwórz",
    sections: [
      {
        to: "/travel/car",
        label: "W samochodzie",
        title: "Bezpieczne dotarcie na miejsce.",
        body: "Jak prawidłowo zabezpieczyć psa, pierwsze przejazdy dla niespokojnego psa, choroba lokomocyjna, długie trasy — i dlaczego zaparkowane latem auto jest tak niebezpieczne.",
        alt: "Pies zabezpieczony w transporterze w bagażniku kombi",
      },
      {
        to: "/travel/outdoors",
        label: "Na zewnątrz",
        title: "Spacery, szlaki i pogoda.",
        body: "Stopniowe wydłużanie wędrówek, upał i zimno, łapy na gorącym asfalcie i żwirze, bezpieczeństwo nad wodą oraz miejsca, w których psy są naprawdę mile widziane.",
        alt: "Kobieta i jej pies odpoczywają na górskim szlaku o złotej godzinie",
      },
      {
        to: "/travel/abroad",
        label: "Przekraczanie granic",
        title: "Podróż za granicę.",
        body: "Powiedz nam, dokąd i kiedy jedziecie. Pokażemy, co zwykle jest wymagane — chip, szczepienie przeciw wściekliźnie, paszport, odrobaczanie — i wskażemy oficjalne źródło z ostatecznym słowem.",
        alt: "Pies czekający spokojnie obok walizki w przestronnej hali odlotów",
      },
    ],
    differentEyebrow: "Nie każdy pies podróżuje tak samo",
    differentTitle: "To, z kim podróżujesz, zmienia wszystko.",
    differentBody:
      "Szczeniak, starszy pies, rasa płaskonosa i sprawny dorosły pies potrzebują zupełnie innych planów na tę samą podróż.",
  },
  de: {
    eyebrow: "Reisen und Abenteuer",
    heroTitle: "Geht es gemeinsam irgendwohin?",
    heroBody:
      "Die halbe Miete einer guten Reise ist, sicher anzukommen. Die andere Hälfte ist zu wissen, dass dein Hund es wirklich genießt — und zu wissen, wann umgekehrt werden sollte.",
    checkJourney: "Meine Reise prüfen",
    carSafety: "Sicherheit im Auto",
    open: "Öffnen",
    sections: [
      {
        to: "/travel/car",
        label: "Im Auto",
        title: "Sicher ankommen.",
        body: "Wie man einen Hund richtig sichert, erste Fahrten für einen ängstlichen Hund, Reisekrankheit, lange Fahrten — und warum ein geparktes Auto im Sommer so gefährlich ist.",
        alt: "Ein Hund gesichert in einer Transportbox im Kofferraum eines Kombis",
      },
      {
        to: "/travel/outdoors",
        label: "Draußen unterwegs",
        title: "Spaziergänge, Wege und Wetter.",
        body: "Längere Wanderungen aufbauen, Hitze und Kälte, Pfoten auf heißem Asphalt und Splitt, Sicherheit am Wasser, und Orte, die sich wirklich über einen Hund freuen.",
        alt: "Eine Frau und ihr Hund ruhen auf einem Bergpfad im goldenen Licht",
      },
      {
        to: "/travel/abroad",
        label: "Über die Grenze",
        title: "Ins Ausland reisen.",
        body: "Sag uns, wohin und wann ihr reist. Wir zeigen, was üblicherweise nötig ist — Chip, Tollwut, Pass, Entwurmung — und verweisen auf die offizielle Quelle für das letzte Wort.",
        alt: "Ein Hund wartet ruhig neben einem Koffer in einer luftigen Abflughalle",
      },
    ],
    differentEyebrow: "Nicht jeder Hund reist gleich",
    differentTitle: "Wer mitreist, verändert alles.",
    differentBody:
      "Ein Welpe, ein alter Hund, eine kurznasige Rasse und ein fitter Erwachsener brauchen ganz unterschiedliche Pläne für dieselbe Reise.",
  },
  fr: {
    eyebrow: "Voyages et aventures",
    heroTitle: "Vous partez quelque part ensemble ?",
    heroBody:
      "La moitié d'un bon voyage, c'est d'arriver en sécurité. L'autre moitié, c'est de savoir que votre chien apprécie vraiment — et de savoir quand faire demi-tour.",
    checkJourney: "Vérifier mon voyage",
    carSafety: "Sécurité en voiture",
    open: "Ouvrir",
    sections: [
      {
        to: "/travel/car",
        label: "En voiture",
        title: "Arriver en sécurité.",
        body: "Comment bien sécuriser un chien, premiers trajets pour un chien anxieux, mal des transports, longs trajets — et pourquoi une voiture garée en été est si dangereuse.",
        alt: "Un chien sécurisé dans une cage de transport dans le coffre d'un break",
      },
      {
        to: "/travel/outdoors",
        label: "En extérieur",
        title: "Promenades, sentiers et météo.",
        body: "Augmenter progressivement la longueur des randonnées, chaleur et froid, coussinets sur bitume chaud et gravillons, sécurité en milieu aquatique, et lieux réellement ravis d'accueillir un chien.",
        alt: "Une femme et son chien se reposent sur un sentier de montagne à l'heure dorée",
      },
      {
        to: "/travel/abroad",
        label: "Passer les frontières",
        title: "Voyager à l'étranger.",
        body: "Dites-nous où et quand vous partez. Nous vous montrerons ce qui est généralement requis — puce, rage, passeport, vermifuge — et nous vous orienterons vers la source officielle pour le mot final.",
        alt: "Un chien attendant calmement près d'une valise dans un hall de départ aéré",
      },
    ],
    differentEyebrow: "Tous les chiens ne voyagent pas de la même façon",
    differentTitle: "Qui vous accompagne change tout.",
    differentBody:
      "Un chiot, un chien âgé, une race brachycéphale et un adulte en forme ont besoin de plans bien différents pour le même trajet.",
  },
  nl: {
    eyebrow: "Reizen en avonturen",
    heroTitle: "Gaan jullie samen ergens heen?",
    heroBody:
      "De helft van een goede reis is veilig aankomen. De andere helft is weten dat je hond er echt van geniet — en weten wanneer je moet omkeren.",
    checkJourney: "Check mijn reis",
    carSafety: "Veiligheid in de auto",
    open: "Openen",
    sections: [
      {
        to: "/travel/car",
        label: "In de auto",
        title: "Veilig aankomen.",
        body: "Hoe je een hond goed vastzet, eerste ritjes voor een nerveuze hond, wagenziekte, lange ritten — en waarom een geparkeerde auto in de zomer zo gevaarlijk is.",
        alt: "Een hond veilig vastgezet in een reisbench in de kofferbak van een stationwagen",
      },
      {
        to: "/travel/outdoors",
        label: "Op pad",
        title: "Wandelingen, paden en weer.",
        body: "Opbouwen naar langere wandelingen, hitte en kou, pootjes op heet asfalt en split, veiligheid bij water, en plekken die echt blij zijn met een hond.",
        alt: "Een vrouw en haar hond rusten op een bergpad tijdens het gouden uur",
      },
      {
        to: "/travel/abroad",
        label: "Grenzen over",
        title: "Naar het buitenland reizen.",
        body: "Vertel ons waar en wanneer je heen gaat. We laten zien wat meestal nodig is — chip, rabiës, paspoort, ontworming — en verwijzen je naar de officiële bron voor het laatste woord.",
        alt: "Een hond wacht rustig naast een koffer in een lichte vertrekhal",
      },
    ],
    differentEyebrow: "Niet elke hond reist hetzelfde",
    differentTitle: "Met wie je reist verandert alles.",
    differentBody:
      "Een puppy, een oude hond, een kortsnuitig ras en een fitte volwassen hond hebben heel verschillende plannen nodig voor dezelfde reis.",
  },
} as const;

function TravelPage() {
  const c = useCopy(copy);
  const images = {
    "/travel/car": carImage,
    "/travel/outdoors": heroImage,
    "/travel/abroad": abroadImage,
  } as const;
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="animate-rise max-w-xl pb-2">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-7">{c.heroTitle}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.heroBody}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to={withLangPrefix("/travel/abroad")} size="lg">
                {c.checkJourney}
                <Arrow />
              </ButtonLink>
              <ButtonLink to={withLangPrefix("/travel/car")} tone="outline" size="lg">
                {c.carSafety}
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={heroImage}
              alt="A woman and her dog resting on a mountain trail at golden hour"
              width={1600}
              height={1100}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {c.sections.map((s) => (
            <Link
              key={s.to}
              to={s.to as never}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-colors hover:border-border-strong"
            >
              <img
                src={images[s.to as keyof typeof images]}
                alt={s.alt}
                width={1408}
                height={1056}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
              />
              <div className="flex flex-1 flex-col p-8">
                <p className="eyebrow">{s.label}</p>
                <h2 className="display-md mt-4">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
                  {c.open}
                  <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead
            eyebrow={c.differentEyebrow}
            title={c.differentTitle}
            body={c.differentBody}
          />
          <div className="mt-12">
            <CardGrid items={getTravelWithDifferentDogs()} />
          </div>
          <div className="mt-10">
            <SourcesLink category="travel" />
          </div>
        </div>
      </Section>
    </div>
  );
}
