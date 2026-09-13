import { Link, createFileRoute } from "@tanstack/react-router";
import { useT, useCopy, useLocale, pick } from "@/i18n";
import { GUIDE_HUB_LINKS } from "@/lib/guides/lifestyle";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { InlineShare, SectionShare } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

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
  dk: {
    title: "Guides — at vælge en hund, og leve med en | DoggMatch",
    description:
      "Ærlige, venlige svar om at vælge race, at bo i lejlighed, den første hund, fældning, træning og hverdagen sammen.",
  },
  se: {
    title: "Guider — att välja hund, och leva med en | DoggMatch",
    description:
      "Ärliga, vänliga svar om att välja ras, bo i lägenhet, den första hunden, fällning, träning och vardagen tillsammans.",
  },
  fi: {
    title: "Oppaat — koiran valinta ja arki sen kanssa | DoggMatch",
    description:
      "Suoria, ystävällisiä vastauksia rodun valintaan, kerrostaloelämään, ensimmäiseen koiraan, karvanlähtöön, koulutukseen ja yhteiseen arkeen.",
  },
  de: {
    title: "Ratgeber — einen Hund auswählen und mit ihm leben | DoggMatch",
    description:
      "Ehrliche, freundliche Antworten zur Rassewahl, zum Leben in der Wohnung, zum ersten Hund, zum Fellwechsel, zum Training und zum Alltag miteinander.",
  },
  fr: {
    title: "Guides — choisir un chien, et vivre avec lui | DoggMatch",
    description:
      "Des réponses claires et bienveillantes sur le choix d'une race, la vie en appartement, le premier chien, la mue, l'éducation et le quotidien ensemble.",
  },
  nl: {
    title: "Gidsen — een hond kiezen, en ermee leven | DoggMatch",
    description:
      "Eerlijke, vriendelijke antwoorden over het kiezen van een ras, het wonen in een appartement, je eerste hond, verharen, training en het dagelijks leven samen.",
  },
};

export const Route = createFileRoute("/{-$lang}/guides")({
  head: (ctx) => localizedHead(ctx, "/guides", seoCopy),
  component: GuidesPage,
});

const copy = {
  en: {
    intro:
      "Seven things people ask us most often, answered the way we'd answer a friend — no hedging, no sales pitch.",
    familyGuideLink: "See our full guide to the best dog breeds for families",
    shareLabel: "Share this guide",
    guides: [
      {
        id: "family-dogs",
        title: "Good dogs for families with children",
        body: "Kids and dogs can be wonderful together — as long as the dog suits your family's actual week, and the kids learn a few simple rules.",
        points: [
          "Look for a steady, forgiving temperament first. A dog who shrugs off a clumsy pat is far more important than the breed's reputation alone.",
          "Size cuts both ways: a huge dog can knock a toddler over by accident, and a tiny one can get hurt by rough play. Medium and steady is often easiest.",
          "Puppies and toddlers together is two jobs at once. Many families have a calmer start with a dog who's a year or two old.",
          "The rules matter more than the breed: no bothering a dog who's eating, sleeping or in its bed — and an adult always in the room with young children.",
        ],
        close: "Labrador, golden retriever, cavalier King Charles spaniel and many gentle crossbreeds do well here — the quiz weighs family life in every match.",
      },
      {
        id: "flat-living",
        title: "Dogs that do well in a flat",
        body: "Space matters less than you'd think. Noise, exercise and how they cope alone matter far more.",
        points: [
          "Barking is the thing that ends up mattering most. A dog who announces every footstep in the stairwell is hard work in a block of flats, however small they are.",
          "Two proper walks a day beats a garden. A garden is somewhere to potter; the walk is where a dog empties its head.",
          "Lifts and stairs are part of the deal. A big dog you may one day have to carry, and a puppy who shouldn't do stairs for months, are both worth thinking about now.",
          "Being left alone is learned, not given. Start with minutes, not hours, and build it slowly in the first weeks.",
        ],
        close: "Greyhounds, many spaniels and plenty of small terriers live happily in flats. Loud, watchful breeds usually find it harder.",
      },
      {
        id: "first-dog",
        title: "Choosing your first dog",
        body: "Everyone makes mistakes in the first year. Some dogs forgive them more easily than others.",
        points: [
          "Pick forgiving over impressive. A dog who shrugs off your inconsistency will teach you more than one who punishes it.",
          "Ask for medium energy, not low. Very low-energy dogs are often older or brachycephalic; very high-energy dogs need a job you may not have.",
          "Meet the parents if you can, or the adult dog itself if you're rehoming. Temperament shows up in the family, not the photo.",
          "Book the first vet visit, the first training class and a fortnight of quiet at home before the dog arrives.",
        ],
        close: "If you're unsure, take the quiz — it tells you which dogs suit your week, and shows the reasoning behind every score.",
      },
      {
        id: "shedding-allergies",
        title: "Shedding, and living with allergies",
        body: "What lower-shedding actually means, and how to think it through if someone at home reacts to dogs.",
        points: [
          "No dog is hypoallergenic. The trigger is a protein in saliva, skin flakes and urine — not the hair itself.",
          "Lower-shedding coats hold that dander instead of dropping it, which helps some people and does nothing for others.",
          "Low shedding usually means more grooming: a poodle-coated dog needs professional clipping every 6-8 weeks, all its life.",
          "Test before you commit. Spend a few hours with adult dogs of that breed, more than once, and talk to a doctor before deciding.",
        ],
        close: "We show shedding and coat upkeep on every breed page, and the quiz asks about allergies at home so results can take it into account.",
      },
      {
        id: "calm-dogs",
        title: "Calm dogs for quieter homes",
        body: "A quiet dog still needs plenty from you. Here's how to spot one that's genuinely easy-going.",
        points: [
          "Look for a low startle response — a dog who lifts its head at a noise rather than launching at the door.",
          "Calm indoors and calm outdoors are different traits. Many sighthounds sleep all day and still need a hard run.",
          "Age helps more than breed. A four-year-old rescue tells you exactly who they are; a puppy is a guess for two years.",
          "Give the dog somewhere to switch off — a bed away from the front door does more for calm than any amount of training.",
        ],
        close: "Greyhound, cavalier King Charles spaniel, bernese mountain dog and older rescues of many breeds all fit quieter homes well.",
      },
      {
        id: "active-life",
        title: "Dogs for people who like to move",
        body: "Be honest about the week you actually have, not the one you'd like to have.",
        points: [
          "Count your worst week, not your best. Rain, deadlines and illness are when a high-energy dog gets difficult.",
          "Mental work tires a dog faster than distance. Twenty minutes of scent games beats another kilometre most evenings.",
          "Joints need protecting. No long runs on hard ground until growth plates close — usually 12-18 months, later for big breeds.",
          "Heat is the real limit. Flat-faced breeds and thick double coats struggle long before you do.",
        ],
        close: "Border collie, vizsla, labrador and many working crossbreeds thrive here — as long as the week is real.",
      },
      {
        id: "yearly-cost",
        title: "What a dog really costs in a year",
        body: "Food, insurance, the vet, the groomer — and the bits almost everyone forgets to budget for.",
        points: [
          "Food scales with size: a small dog might cost €25 a month, a large one three times that.",
          "Insurance rises with age and varies hugely by breed. Get a real quote for the breed you want before you commit.",
          "Routine vet care — vaccination, worming, flea treatment, a dental check — is a predictable yearly line, not a surprise.",
          "The forgotten costs: grooming, boarding or a sitter for holidays, training classes, and a fund for the year something goes wrong.",
        ],
        close: "The breed cost pages show a yearly range for each breed, split into food, health, grooming and everything else.",
      },
    ],
  },
  no: {
    intro:
      "Sju spørsmål vi får oftest, besvart slik vi ville svart en venn — uten forbehold og uten salgsprat.",
    familyGuideLink: "Se hele guiden vår til de beste hunderasene for familier",
    shareLabel: "Del denne guiden",
    guides: [
      {
        id: "family-dogs",
        title: "Gode hunder for familier med barn",
        body: "Barn og hunder kan være helt herlige sammen — så lenge hunden passer familiens faktiske uke, og barna lærer noen enkle regler.",
        points: [
          "Se etter et rolig, tilgivende gemytt først. En hund som rister av seg en klønete klem er viktigere enn rasens rykte alene.",
          "Størrelse skjærer begge veier: en stor hund kan vælte en smårolling ved et uhell, og en liten kan bli skadet av røff lek. Middels og trygg er ofte enklest.",
          "Valp og småbarn samtidig er to jobber på en gang. Mange familier får en roligere start med en hund som er et år eller to.",
          "Reglene betyr mer enn rasen: ikke forstyrr en hund som spiser, sover eller ligger på plassen sin — og en voksen er alltid i rommet med små barn.",
        ],
        close: "Labrador, golden retriever, cavalier king charles spaniel og mange blidere blandinger fungerer godt her — testen veier familielivet med i hvert forslag.",
      },
      {
        id: "flat-living",
        title: "Hunder som trives i leilighet",
        body: "Plass betyr mindre enn du skulle tro. Støy, mosjon og hvordan de takler å være alene betyr mye mer.",
        points: [
          "Bjeffing er det som til slutt betyr mest. En hund som melder fra om hvert skritt i trappeoppgangen blir tung å bo med, uansett hvor liten den er.",
          "To ordentlige turer om dagen slår en hage. Hagen er et sted å rusle; turen er der hunden tømmer hodet.",
          "Heis og trapper hører med. En stor hund du en dag må bære, og en valp som ikke bør gå trapper på flere måneder, er verdt å tenke på nå.",
          "Å være alene er noe hunden lærer. Start med minutter, ikke timer, og bygg det rolig opp de første ukene.",
        ],
        close: "Greyhound, mange spaniels og en del små terriere bor godt i leilighet. Vaktsomme og høylytte raser sliter oftere.",
      },
      {
        id: "first-dog",
        title: "Å velge din første hund",
        body: "Alle gjør feil det første året. Noen hunder tilgir dem lettere enn andre.",
        points: [
          "Velg tilgivende framfor imponerende. En hund som rister av seg at du er ustø, lærer deg mer enn en som straffer det.",
          "Se etter middels energi, ikke lav. Svært rolige hunder er ofte eldre eller kortsnutede; svært energiske hunder trenger en jobb du kanskje ikke har.",
          "Møt foreldrene hvis du kan, eller den voksne hunden selv hvis du omplasserer. Gemytt viser seg i familien, ikke på bildet.",
          "Avtal første veterinærbesøk, første kurs og to rolige uker hjemme før hunden kommer.",
        ],
        close: "Er du usikker, ta testen — den viser hvilke hunder som passer uken din, og begrunnelsen bak hver score.",
      },
      {
        id: "shedding-allergies",
        title: "Pelsfelling, og å leve med allergier",
        body: "Hva mindre felling faktisk betyr, og hvordan tenke det gjennom hvis noen hjemme reagerer på hunder.",
        points: [
          "Ingen hund er hypoallergen. Det som utløser reaksjonen er et protein i spytt, hudflass og urin — ikke hårene i seg selv.",
          "Pels som feller lite holder på flasset i stedet for å slippe det. Det hjelper noen og betyr ingenting for andre.",
          "Lite felling betyr som regel mer stell: en pudderpels må klippes profesjonelt hver 6.-8. uke, hele livet.",
          "Test før du bestemmer deg. Vær sammen med voksne hunder av rasen flere ganger, og snakk med lege før du velger.",
        ],
        close: "Vi viser felling og pelsstell på hver rase-side, og testen spør om allergi hjemme slik at resultatet tar hensyn til det.",
      },
      {
        id: "calm-dogs",
        title: "Rolige hunder for stillere hjem",
        body: "En rolig hund trenger fortsatt mye av deg. Slik gjenkjenner du en som virkelig er avslappet.",
        points: [
          "Se etter en hund som løfter hodet ved en lyd i stedet for å kaste seg mot døra.",
          "Rolig inne og rolig ute er to forskjellige ting. Mange mynder sover hele dagen og trenger likevel å få løpe.",
          "Alder betyr mer enn rase. En fireåring fra omplassering viser deg hvem den er; en valp er en gjetning i to år.",
          "Gi hunden et sted å koble av — en seng vekk fra inngangsdøra gjør mer for roen enn mye trening.",
        ],
        close: "Greyhound, cavalier king charles spaniel, berner sennenhund og eldre omplasseringshunder passer godt i stille hjem.",
      },
      {
        id: "active-life",
        title: "Hunder for folk som liker å være i bevegelse",
        body: "Vær ærlig om uken du faktisk har, ikke den du skulle ønske du hadde.",
        points: [
          "Regn med den dårligste uken, ikke den beste. Regn, frister og sykdom er når en energisk hund blir krevende.",
          "Hodearbeid sliter ut en hund raskere enn distanse. Tjue minutter med søk slår en kilometer til de fleste kvelder.",
          "Ledd må skånes. Ingen lange løpeturer på hardt underlag før vekstsonene er lukket — som regel 12-18 måneder, senere for store raser.",
          "Varme er den virkelige grensen. Kortsnutede raser og tykk underull sliter lenge før du gjør det.",
        ],
        close: "Border collie, vizsla, labrador og mange bruksblandinger trives her — så lenge uken er ekte.",
      },
      {
        id: "yearly-cost",
        title: "Hva en hund egentlig koster i året",
        body: "Mat, forsikring, veterinæren, groomeren — og de delene nesten alle glemmer å budsjettere for.",
        points: [
          "Mat følger størrelsen: en liten hund kan koste rundt 300 kr i måneden, en stor tre ganger så mye.",
          "Forsikring stiger med alder og varierer mye mellom raser. Hent et ekte tilbud for rasen du vurderer.",
          "Rutinemessig helse — vaksine, orm, flått, tannsjekk — er en forutsigbar årlig post, ikke en overraskelse.",
          "De glemte postene: pelsstell, hundepensjonat eller passer i ferien, kurs, og en buffer for året noe skjer.",
        ],
        close: "Kostnadssidene for hver rase viser et årlig spenn, delt opp i mat, helse, stell og resten.",
      },
    ],
  },
  pl: {
    intro:
      "Siedem pytań, które słyszymy najczęściej — odpowiadamy tak, jak odpowiedzielibyśmy znajomemu: bez wykrętów i bez sprzedaży.",
    familyGuideLink: "Zobacz nasz pełny przewodnik po najlepszych rasach psów dla rodzin",
    shareLabel: "Udostępnij ten poradnik",
    guides: [
      {
        id: "family-dogs",
        title: "Dobre psy dla rodzin z dziećmi",
        body: "Dzieci i psy mogą tworzyć wspaniały duet — pod warunkiem że pies pasuje do waszego prawdziwego tygodnia, a dzieci poznają kilka prostych zasad.",
        points: [
          "Najpierw szukaj stabilnego, wyrozumiałego charakteru. Pies, który bez urazy znosi niezdarną pieszczotę, liczy się bardziej niż sama reputacja rasy.",
          "Rozmiar działa w dwie strony: duży pies może niechcący przewrócić malucha, a mały może ucierpieć w szorstkiej zabawie. Średni i spokojny bywa najprostszy.",
          "Szczeniak i małe dziecko jednocześnie to dwa zadania naraz. Wielu rodzinom łatwiej zacząć z psem, który ma rok czy dwa.",
          "Zasady znaczą więcej niż rasa: nie przeszkadzamy psu, który je, śpi lub leży w swoim miejscu — a dorosły jest zawsze w pokoju z małymi dziećmi.",
        ],
        close: "Labrador, golden retriever, cavalier king charles spaniel i wiele łagodnych mieszańców sprawdza się tu dobrze — test uwzględnia życie rodzinne w każdym dopasowaniu.",
      },
      {
        id: "flat-living",
        title: "Psy, które dobrze radzą sobie w mieszkaniu",
        body: "Przestrzeń liczy się mniej, niż mogłoby się wydawać. Hałas, ruch i to, jak pies radzi sobie sam, mają dużo większe znaczenie.",
        points: [
          "Szczekanie okazuje się najważniejsze. Pies, który zapowiada każdy krok na klatce schodowej, jest trudnym sąsiadem — nawet jeśli jest mały.",
          "Dwa porządne spacery dziennie znaczą więcej niż ogród. W ogrodzie pies się kręci; na spacerze porządkuje sobie głowę.",
          "Winda i schody są częścią układu. Dużego psa być może kiedyś trzeba będzie nieść, a szczeniak przez kilka miesięcy nie powinien chodzić po schodach.",
          "Zostawania samemu pies się uczy. Zacznij od minut, nie godzin, i buduj to spokojnie przez pierwsze tygodnie.",
        ],
        close: "Greyhoundy, wiele spanieli i sporo małych terierów świetnie żyje w mieszkaniach. Rasy czujne i głośne mają z tym trudniej.",
      },
      {
        id: "first-dog",
        title: "Wybór pierwszego psa",
        body: "Każdy popełnia błędy w pierwszym roku. Niektóre psy wybaczają je łatwiej niż inne.",
        points: [
          "Wybierz psa wyrozumiałego, nie efektownego. Taki, który znosi twoją niekonsekwencję, nauczy cię więcej niż taki, który ją karze.",
          "Szukaj średniej energii, nie niskiej. Psy bardzo spokojne bywają starsze lub krótkopyskie, a bardzo energiczne potrzebują zajęcia, którego możesz nie mieć.",
          "Poznaj rodziców, jeśli to możliwe, albo samego dorosłego psa przy adopcji. Charakter widać w rodzinie, nie na zdjęciu.",
          "Umów pierwszą wizytę u weterynarza, pierwsze zajęcia i dwa spokojne tygodnie w domu, zanim pies przyjedzie.",
        ],
        close: "Jeśli się wahasz, zrób test — pokaże psy pasujące do twojego tygodnia i uzasadnienie każdego wyniku.",
      },
      {
        id: "shedding-allergies",
        title: "Linienie i życie z alergią",
        body: "Co tak naprawdę oznacza mniejsze linienie i jak to przemyśleć, jeśli ktoś w domu reaguje na psy.",
        points: [
          "Żaden pies nie jest hipoalergiczny. Uczula białko obecne w ślinie, naskórku i moczu — nie sama sierść.",
          "Sierść, która mało gubi, zatrzymuje ten alergen zamiast go rozsypywać. Jednym to pomaga, innym wcale.",
          "Mało linienia zwykle oznacza więcej pielęgnacji: pudlowaty włos trzeba strzyc profesjonalnie co 6-8 tygodni, przez całe życie psa.",
          "Sprawdź to wcześniej. Spędź kilka godzin z dorosłymi psami tej rasy, więcej niż raz, i porozmawiaj z lekarzem.",
        ],
        close: "Linienie i pielęgnację pokazujemy na każdej stronie rasy, a test pyta o alergie w domu, żeby wynik to uwzględnił.",
      },
      {
        id: "calm-dogs",
        title: "Spokojne psy do cichszych domów",
        body: "Spokojny pies wciąż potrzebuje od ciebie bardzo wiele. Oto jak rozpoznać takiego, który naprawdę jest łagodnego usposobienia.",
        points: [
          "Szukaj psa, który na hałas unosi głowę, a nie rzuca się do drzwi.",
          "Spokój w domu i spokój na dworze to dwie różne cechy. Wiele chartów przesypia dzień i nadal potrzebuje solidnego biegu.",
          "Wiek znaczy więcej niż rasa. Czterolatek z adopcji pokazuje, kim jest; szczeniak to zgadywanka na dwa lata.",
          "Daj psu miejsce do wyłączenia się — legowisko z dala od drzwi robi dla spokoju więcej niż niejedno szkolenie.",
        ],
        close: "Greyhound, cavalier king charles spaniel, berneński pies pasterski i starsze psy z adopcji dobrze pasują do cichych domów.",
      },
      {
        id: "active-life",
        title: "Psy dla osób, które lubią ruch",
        body: "Bądź szczery co do tygodnia, jaki naprawdę masz, a nie tego, jaki chciałbyś mieć.",
        points: [
          "Licz najgorszy tydzień, nie najlepszy. Deszcz, terminy i choroba to momenty, w których energiczny pies staje się trudny.",
          "Praca głową męczy psa szybciej niż kilometry. Dwadzieścia minut węszenia daje więcej niż kolejny kilometr.",
          "Stawy trzeba chronić. Żadnych długich biegów po twardym podłożu, dopóki nie zamkną się chrząstki wzrostowe — zwykle 12-18 miesięcy, u dużych ras później.",
          "Prawdziwą granicą jest upał. Rasy krótkopyskie i gęsty podszerstek mają dość dużo wcześniej niż ty.",
        ],
        close: "Border collie, wyżeł węgierski, labrador i wiele mieszańców użytkowych czują się tu świetnie — o ile tydzień jest prawdziwy.",
      },
      {
        id: "yearly-cost",
        title: "Ile pies naprawdę kosztuje w ciągu roku",
        body: "Jedzenie, ubezpieczenie, weterynarz, groomer — i te pozycje, o których prawie każdy zapomina w budżecie.",
        points: [
          "Jedzenie rośnie z rozmiarem: mały pies to około 25 € miesięcznie, duży nawet trzy razy tyle.",
          "Ubezpieczenie drożeje z wiekiem i mocno zależy od rasy. Poproś o realną wycenę dla rasy, którą rozważasz.",
          "Opieka rutynowa — szczepienia, odrobaczanie, kleszcze, przegląd zębów — to przewidywalna roczna pozycja, nie niespodzianka.",
          "Zapominane koszty: groomer, hotel lub opiekun na wakacje, szkolenia i zapas na rok, w którym coś pójdzie nie tak.",
        ],
        close: "Strony kosztów każdej rasy pokazują roczny widełkowy budżet z podziałem na jedzenie, zdrowie, pielęgnację i resztę.",
      },
    ],
  },
  dk: {
    intro:
      "Syv ting folk spørger os om oftest, besvaret som vi ville svare en ven — uden forbehold og uden salgstale.",
    familyGuideLink: "Se vores fulde guide til de bedste hunderacer for familier",
    shareLabel: "Del denne guide",
    guides: [
      {
        id: "family-dogs",
        title: "Gode hunde til familier med børn",
        body: "Børn og hunde kan være helt fantastiske sammen — så længe hunden passer til familiens virkelige hverdag, og børnene lærer nogle enkle regler.",
        points: [
          "Kig efter et roligt, tilgivende sind først. En hund, der ryster en klodset klap i nakken af sig, betyder mere end racens ry alene.",
          "Størrelse tæller begge veje: en stor hund kan vælte en lille en ved et uheld, og en lille en kan komme til skade i vild leg. Mellemstor og stabil er ofte nemmest.",
          "Hvalp og småbørn på samme tid er to opgaver ad gangen. Mange familier får en roligere start med en hund på et års tid eller to.",
          "Reglerne betyder mere end racen: ingen forstyrrer en hund, der spiser, sover eller ligger på sin plads — og en voksen er altid i rummet med små børn.",
        ],
        close: "Labrador, golden retriever, cavalier king charles spaniel og mange milde blandingshunde klarer sig godt her — testen vejer familielivet ind i hvert forslag.",
      },
      {
        id: "flat-living",
        title: "Hunde der trives i lejlighed",
        body: "Plads betyder mindre, end man skulle tro. Støj, motion og evnen til at være alene betyder langt mere.",
        points: [
          "Gøen er det, der ender med at betyde mest. En hund, der melder hvert fodtrin i opgangen, bliver tung at bo med, uanset hvor lille den er.",
          "To ordentlige gåture om dagen slår en have. Haven er et sted at rode rundt; turen er der, hvor hunden tømmer hovedet.",
          "Elevator og trapper hører med. En stor hund du en dag skal bære, og en hvalp der ikke bør tage trapper i månedsvis, er værd at tænke på nu.",
          "At være alene læres, det er ikke medfødt. Start med minutter, ikke timer, og byg det roligt op i de første uger.",
        ],
        close: "Greyhounds, mange spaniels og en del små terriere bor godt i lejlighed. Vagtsomme, højtråbende racer har det ofte sværere.",
      },
      {
        id: "first-dog",
        title: "At vælge sin første hund",
        body: "Alle laver fejl det første år. Nogle hunde tilgiver dem lettere end andre.",
        points: [
          "Vælg tilgivende frem for imponerende. En hund, der ryster din usikkerhed af sig, lærer dig mere end en, der straffer den.",
          "Se efter middel energi, ikke lav. Meget rolige hunde er tit ældre eller kortsnudede; meget energiske hunde skal bruges til noget, du måske ikke har.",
          "Mød forældrene hvis du kan, eller selve den voksne hund hvis du omplacerer. Sindet viser sig i familien, ikke på billedet.",
          "Book det første dyrlægebesøg, det første hold og to rolige uger derhjemme, før hunden ankommer.",
        ],
        close: "Er du i tvivl, så tag testen — den viser hvilke hunde der passer til din uge, og begrundelsen bag hver score.",
      },
      {
        id: "shedding-allergies",
        title: "Fældning, og at leve med allergi",
        body: "Hvad mindre fældning egentlig betyder, og hvordan du tænker det igennem, hvis nogen derhjemme reagerer på hunde.",
        points: [
          "Ingen hund er hypoallergen. Det, der udløser reaktionen, er et protein i spyt, hudflager og urin — ikke selve hårene.",
          "Pels der fælder mindre holder på det protein i stedet for at sprede det. Det hjælper nogle og gør ingen forskel for andre.",
          "Lidt fældning betyder som regel mere pleje: en puddelpels skal klippes professionelt hver 6.-8. uge, hele livet.",
          "Test det, før du bestemmer dig. Tilbring nogle timer med voksne hunde af racen, mere end én gang, og tal med en læge før du vælger.",
        ],
        close: "Vi viser fældning og pelspleje på hver raceside, og testen spørger om allergi derhjemme, så resultatet tager hensyn til det.",
      },
      {
        id: "calm-dogs",
        title: "Rolige hunde til stille hjem",
        body: "En rolig hund kræver stadig meget af dig. Sådan genkender du en, der virkelig er afslappet.",
        points: [
          "Kig efter en hund der løfter hovedet ved en lyd i stedet for at kaste sig mod døren.",
          "Rolig indendørs og rolig udendørs er to forskellige ting. Mange mynder sover hele dagen og har alligevel brug for at løbe stærkt.",
          "Alder betyder mere end race. En fireårig fra omplacering viser dig præcis, hvem den er; en hvalp er et gæt i to år.",
          "Giv hunden et sted at koble af — en seng væk fra hoveddøren gør mere for roen end nok så meget træning.",
        ],
        close: "Greyhound, cavalier king charles spaniel, berner sennenhund og ældre omplaceringshunde af mange racer passer godt i stille hjem.",
      },
      {
        id: "active-life",
        title: "Hunde til dig, der kan lide at bevæge dig",
        body: "Vær ærlig om den uge, du faktisk har — ikke den, du gerne ville have.",
        points: [
          "Regn med din værste uge, ikke din bedste. Regn, deadlines og sygdom er, når en energisk hund bliver svær.",
          "Hovedarbejde slider mere på en hund end distance. Tyve minutter med sporarbejde slår endnu en kilometer de fleste aftener.",
          "Led skal beskyttes. Ingen lange løbeture på hårdt underlag før vækstzonerne er lukket — som regel 12-18 måneder, senere for store racer.",
          "Varme er den reelle grænse. Kortsnudede racer og tyk underuld mærker det, længe før du gør.",
        ],
        close: "Border collie, vizsla, labrador og mange brugsblandinger trives her — så længe ugen er ægte.",
      },
      {
        id: "yearly-cost",
        title: "Hvad en hund reelt koster om året",
        body: "Foder, forsikring, dyrlægen, groomeren — og de poster, næsten alle glemmer at budgettere med.",
        points: [
          "Foder følger størrelsen: en lille hund koster måske 200 kr om måneden, en stor tre gange så meget.",
          "Forsikring stiger med alderen og varierer meget mellem racer. Hent et reelt tilbud på den race, du overvejer, inden du bestemmer dig.",
          "Rutinemæssig sundhed — vaccine, orm, flåt, tandeftersyn — er en forudsigelig årlig post, ikke en overraskelse.",
          "De glemte poster: pelspleje, hundepension eller passer i ferien, hold, og en buffer til året, hvor noget går galt.",
        ],
        close: "Racens omkostningsside viser et årligt spænd delt op i foder, sundhed, pleje og resten.",
      },
    ],
  },
  se: {
    intro:
      "Sju saker folk frågar oss om oftast, besvarade som vi skulle svara en vän — utan förbehåll och utan säljprat.",
    familyGuideLink: "Se vår fullständiga guide till de bästa hundraserna för familjer",
    shareLabel: "Dela den här guiden",
    guides: [
      {
        id: "family-dogs",
        title: "Bra hundar för familjer med barn",
        body: "Barn och hundar kan vara underbara tillsammans — så länge hunden passar familjens verkliga vecka, och barnen lär sig några enkla regler.",
        points: [
          "Leta efter ett stabilt, förlåtande temperament först. En hund som skakar av sig en klumpig klapp betyder mer än rasens rykte i sig.",
          "Storlek går åt båda hållen: en stor hund kan råka välta en liten, och en liten kan skadas i vild lek. Medelstor och trygg är ofta enklast.",
          "Valp och småbarn samtidigt är två jobb på en gång. Många familjer får en lugnare start med en hund som är ett eller två år.",
          "Reglerna betyder mer än rasen: ingen stör en hund som äter, sover eller ligger på sin plats — och en vuxen är alltid i rummet med små barn.",
        ],
        close: "Labrador, golden retriever, cavalier king charles spaniel och många snälla blandraser fungerar bra här — testet väger in familjelivet i varje förslag.",
      },
      {
        id: "flat-living",
        title: "Hundar som trivs i lägenhet",
        body: "Utrymme spelar mindre roll än man kan tro. Ljud, motion och hur de hanterar att vara ensamma spelar mycket större roll.",
        points: [
          "Skällande är det som till slut betyder mest. En hund som meddelar varje steg i trappuppgången blir tung att bo med, hur liten den än är.",
          "Två ordentliga promenader om dagen slår en trädgård. Trädgården är ett ställe att pyssla i; promenaden är där hunden tömmer huvudet.",
          "Hiss och trappor hör till. En stor hund du en dag kan behöva bära, och en valp som inte bör gå i trappor på flera månader, är värt att tänka på nu.",
          "Att vara ensam är något hunden lär sig, inget den föds med. Börja med minuter, inte timmar, och bygg upp det lugnt de första veckorna.",
        ],
        close: "Greyhound, många spanielraser och en del små terriers bor gott i lägenhet. Vaksamma, högljudda raser har det ofta svårare.",
      },
      {
        id: "first-dog",
        title: "Att välja sin första hund",
        body: "Alla gör misstag det första året. Vissa hundar förlåter dem lättare än andra.",
        points: [
          "Välj förlåtande framför imponerande. En hund som skakar av sig din osäkerhet lär dig mer än en som straffar den.",
          "Sikta på medelenergi, inte låg. Väldigt lugna hundar är ofta äldre eller kortnosiga; väldigt energiska hundar behöver ett jobb du kanske inte har.",
          "Träffa föräldrarna om du kan, eller själva den vuxna hunden om du adopterar om. Temperamentet syns i familjen, inte på bilden.",
          "Boka första veterinärbesöket, den första kursen och två lugna veckor hemma innan hunden kommer.",
        ],
        close: "Är du osäker, gör testet — det visar vilka hundar som passar din vecka, och resonemanget bakom varje poäng.",
      },
      {
        id: "shedding-allergies",
        title: "Fällning, och att leva med allergi",
        body: "Vad mindre fällning egentligen betyder, och hur du tänker igenom det om någon hemma reagerar på hundar.",
        points: [
          "Ingen hund är hypoallergen. Det som utlöser reaktionen är ett protein i saliv, hudflagor och urin — inte pälsen i sig.",
          "Päls som fäller mindre håller kvar det proteinet istället för att sprida det. Det hjälper vissa och gör ingen skillnad för andra.",
          "Lite fällning betyder oftast mer skötsel: en pudelpäls måste klippas professionellt var 6:e till 8:e vecka, hela livet.",
          "Testa innan du bestämmer dig. Tillbringa några timmar med vuxna hundar av rasen, mer än en gång, och prata med läkare innan du väljer.",
        ],
        close: "Vi visar fällning och pälsvård på varje rassida, och testet frågar om allergi hemma så att resultatet tar hänsyn till det.",
      },
      {
        id: "calm-dogs",
        title: "Lugna hundar för tystare hem",
        body: "En lugn hund behöver ändå mycket av dig. Så här känner du igen en som verkligen är avslappnad.",
        points: [
          "Leta efter en hund som lyfter huvudet vid ett ljud istället för att kasta sig mot dörren.",
          "Lugn inomhus och lugn utomhus är två olika saker. Många vinthundar sover hela dagen och behöver ändå få springa av sig ordentligt.",
          "Ålder säger mer än ras. En fyraåring från omplacering visar dig exakt vem den är; en valp är en gissning i två år.",
          "Ge hunden en plats att koppla av på — en bädd bort från ytterdörren gör mer för lugnet än mängder av träning.",
        ],
        close: "Greyhound, cavalier king charles spaniel, berner sennenhund och äldre omplaceringshundar av många raser passar bra i tysta hem.",
      },
      {
        id: "active-life",
        title: "Hundar för dig som gillar att röra på dig",
        body: "Var ärlig om den vecka du faktiskt har, inte den du önskar att du hade.",
        points: [
          "Räkna med din sämsta vecka, inte din bästa. Regn, deadlines och sjukdom är när en energisk hund blir jobbig.",
          "Huvudarbete tröttar ut en hund snabbare än distans. Tjugo minuter med söklek slår ytterligare en kilometer de flesta kvällar.",
          "Leder måste skyddas. Inga långa löprundor på hårt underlag innan tillväxtzonerna slutits — oftast 12-18 månader, senare för stora raser.",
          "Värme är den verkliga gränsen. Kortnosiga raser och tjock underull känner av det långt innan du gör det.",
        ],
        close: "Border collie, vizsla, labrador och många brukskorsningar trivs här — så länge veckan är verklig.",
      },
      {
        id: "yearly-cost",
        title: "Vad en hund verkligen kostar per år",
        body: "Foder, försäkring, veterinären, hundfrisören — och de poster nästan alla glömmer att budgetera för.",
        points: [
          "Foder följer storleken: en liten hund kan kosta runt 250 kr i månaden, en stor tre gånger så mycket.",
          "Försäkringen stiger med åldern och varierar kraftigt mellan raser. Hämta en riktig offert för rasen du funderar på innan du bestämmer dig.",
          "Rutinmässig vård — vaccin, mask, fästingmedel, tandkontroll — är en förutsägbar årlig post, ingen överraskning.",
          "De glömda kostnaderna: pälsvård, hundpensionat eller hundvakt på semestern, kurser, och en buffert för året något går fel.",
        ],
        close: "Kostnadssidorna för varje ras visar ett årligt spann uppdelat i foder, hälsa, skötsel och resten.",
      },
    ],
  },
  fi: {
    intro:
      "Seitsemän asiaa, joita meiltä kysytään useimmin, vastattuna niin kuin vastaisimme ystävälle — ilman varauksia ja ilman myyntipuhetta.",
    familyGuideLink: "Katso koko oppaamme parhaista koiraroduista perheille",
    shareLabel: "Jaa tämä opas",
    guides: [
      {
        id: "family-dogs",
        title: "Hyviä koiria lapsiperheille",
        body: "Lapset ja koirat voivat olla ihana yhdistelmä — kunhan koira sopii perheen todelliseen arkeen ja lapset opettelevat muutaman yksinkertaisen säännön.",
        points: [
          "Etsi ensin vakaata, anteeksiantavaa luonnetta. Koira, joka ravistaa kömpelön silityksen harteiltaan, on tärkeämpi kuin rodun maine yksinään.",
          "Koko vaikuttaa molempiin suuntiin: iso koira voi kaataa taaperon vahingossa, ja pieni voi loukkaantua rajussa leikissä. Keskikokoinen ja tasapainoinen on usein helpoin valinta.",
          "Pentu ja pikkulapsi samaan aikaan on kaksi työtä yhtä aikaa. Monelle perheelle alku sujuu rauhallisemmin vuoden tai parin ikäisen koiran kanssa.",
          "Säännöt merkitsevät enemmän kuin rotu: koiraa ei häiritä sen syödessä, nukkuessa tai maatessa omalla paikallaan — ja aikuinen on aina huoneessa pienten lasten kanssa.",
        ],
        close: "Labradorinnoutaja, kultainennoutaja, cavalier kingcharlesinspanieli ja moni lempeä sekarotuinen pärjäävät tässä hyvin — testi ottaa perhe-elämän huomioon jokaisessa ehdotuksessa.",
      },
      {
        id: "flat-living",
        title: "Koirat, jotka viihtyvät kerrostalossa",
        body: "Tila merkitsee vähemmän kuin luulisi. Äänekkyys, liikunta ja yksinolokyky merkitsevät paljon enemmän.",
        points: [
          "Haukkuminen on lopulta se, mikä eniten merkitsee. Koira, joka ilmoittaa jokaisesta askeleesta rappukäytävässä, on raskas naapuri, vaikka olisi kuinka pieni.",
          "Kaksi kunnon lenkkiä päivässä voittaa pihan. Piha on paikka, jossa jaloitellaan; lenkki on se, missä koiran pää tyhjenee.",
          "Hissi ja portaat kuuluvat asiaan. Iso koira, jota saatat joskus joutua kantamaan, ja pentu, jonka ei pitäisi kulkea portaita kuukausiin, kannattaa miettiä jo nyt.",
          "Yksinolo opitaan, sitä ei ole valmiiksi. Aloita minuuteista, ei tunneista, ja kasvata sitä rauhassa ensimmäisten viikkojen aikana.",
        ],
        close: "Vinttikoirat, monet spanielit ja useat pienet terrierit asuvat hyvin kerrostalossa. Valppaat, äänekkäät rodut pärjäävät useammin huonommin.",
      },
      {
        id: "first-dog",
        title: "Ensimmäisen koiran valinta",
        body: "Kaikki tekevät virheitä ensimmäisenä vuonna. Jotkin koirat antavat ne anteeksi helpommin kuin toiset.",
        points: [
          "Valitse anteeksiantava, ei vaikuttava. Koira, joka ravistaa epäjohdonmukaisuutesi harteiltaan, opettaa sinua enemmän kuin sellainen, joka rankaisee siitä.",
          "Tavoittele keskitasoista energiaa, älä matalaa. Hyvin rauhalliset koirat ovat usein iäkkäämpiä tai lyhytkuonoisia; hyvin energiset koirat tarvitsevat tehtävän, jota sinulla ei ehkä ole.",
          "Tapaa vanhemmat, jos mahdollista, tai itse aikuinen koira, jos otat uudelleensijoitettavan. Luonne näkyy perheessä, ei kuvassa.",
          "Varaa ensimmäinen eläinlääkärikäynti, ensimmäinen kurssi ja kaksi rauhallista viikkoa kotona ennen koiran saapumista.",
        ],
        close: "Jos olet epävarma, tee testi — se kertoo, mitkä koirat sopivat viikkoosi, ja perustelut jokaisen tuloksen takana.",
      },
      {
        id: "shedding-allergies",
        title: "Karvanlähtö ja eläminen allergian kanssa",
        body: "Mitä vähäisempi karvanlähtö oikeasti tarkoittaa, ja miten ajatella asiaa, jos joku kotona reagoi koiriin.",
        points: [
          "Yksikään koira ei ole täysin allergeeniton. Reaktion aiheuttaa proteiini syljessä, ihohilseessä ja virtsassa — ei itse karva.",
          "Vähemmän karvaa irrottava turkki pidättää sen proteiinin sen sijaan, että levittäisi sitä. Se auttaa joitakin eikä vaikuta toisiin lainkaan.",
          "Vähäinen karvanlähtö tarkoittaa yleensä enemmän hoitoa: villakoiraturkki pitää trimmata ammattilaisella 6-8 viikon välein koko elämän ajan.",
          "Testaa asia ennen kuin päätät. Vietä muutama tunti rodun aikuisten koirien kanssa useammin kuin kerran, ja keskustele lääkärin kanssa ennen valintaa.",
        ],
        close: "Näytämme karvanlähdön ja turkinhoidon jokaisella rotusivulla, ja testi kysyy kotona olevasta allergiasta, jotta tulos ottaa sen huomioon.",
      },
      {
        id: "calm-dogs",
        title: "Rauhalliset koirat hiljaisempiin koteihin",
        body: "Rauhallinenkin koira tarvitsee sinulta paljon. Näin tunnistat koiran, joka on aidosti rento.",
        points: [
          "Etsi koiraa, joka nostaa päätään äänen kuullessaan sen sijaan, että syöksyisi ovelle.",
          "Rauhallisuus sisällä ja rauhallisuus ulkona ovat kaksi eri asiaa. Moni vinttikoira nukkuu koko päivän ja tarvitsee silti kunnon juoksulenkin.",
          "Ikä kertoo enemmän kuin rotu. Nelivuotias uudelleensijoitettava koira näyttää tarkalleen, kuka se on; pentu on arvaus parin vuoden ajan.",
          "Anna koiralle paikka rauhoittua — makuupaikka kaukana ulko-ovesta tekee rauhallisuuden eteen enemmän kuin mikään koulutus.",
        ],
        close: "Vinttikoira, cavalier kingcharlesinspanieli, sveitsinpaimenkoira ja monen rodun iäkkäämmät uudelleensijoitettavat koirat sopivat hyvin hiljaisiin koteihin.",
      },
      {
        id: "active-life",
        title: "Koirat sinulle, joka pidät liikkumisesta",
        body: "Ole rehellinen sen viikon suhteen, joka sinulla oikeasti on — älä sen, jonka toivoisit olevan.",
        points: [
          "Laske huonoin viikkosi, älä paras. Sade, määräajat ja sairaus ovat hetkiä, jolloin energinen koira käy vaikeaksi.",
          "Pään käyttäminen väsyttää koiraa nopeammin kuin matka. Kaksikymmentä minuuttia hajutyötä voittaa ylimääräisen kilometrin useimpina iltoina.",
          "Niveliä pitää suojella. Ei pitkiä juoksulenkkejä kovalla alustalla ennen kuin kasvulevyt ovat sulkeutuneet — yleensä 12-18 kuukautta, isommilla roduilla myöhemmin.",
          "Kuumuus on todellinen raja. Lyhytkuonoiset rodut ja paksu aluskarva tuntevat sen kauan ennen sinua.",
        ],
        close: "Bordercollie, unkarinvizsla, labradorinnoutaja ja moni käyttösekarotuinen viihtyy tässä — kunhan viikko on todellinen.",
      },
      {
        id: "yearly-cost",
        title: "Mitä koira todella maksaa vuodessa",
        body: "Ruoka, vakuutus, eläinlääkäri, trimmaaja — ja ne erät, jotka melkein kaikki unohtavat budjetoida.",
        points: [
          "Ruoka mukailee kokoa: pieni koira voi maksaa noin 25 € kuussa, iso jopa kolme kertaa sen verran.",
          "Vakuutus nousee iän myötä ja vaihtelee suuresti rodun mukaan. Pyydä todellinen tarjous harkitsemastasi rodusta ennen päätöstä.",
          "Rutiininomainen terveydenhoito — rokotukset, madotus, punkkisuoja, hampaiden tarkistus — on ennustettava vuosittainen erä, ei yllätys.",
          "Unohdetut kulut: turkinhoito, hoitola tai lemmikinhoitaja loman ajaksi, kurssit ja puskuri sille vuodelle, jolloin jokin menee pieleen.",
        ],
        close: "Jokaisen rodun kustannussivu näyttää vuosittaisen vaihteluvälin jaettuna ruokaan, terveyteen, hoitoon ja muuhun.",
      },
    ],
  },
  de: {
    intro:
      "Sieben Fragen, die uns am häufigsten gestellt werden, beantwortet so, wie wir einer Freundin oder einem Freund antworten würden — ohne Wenn und Aber, ohne Verkaufsgerede.",
    familyGuideLink: "Sieh dir unseren ganzen Ratgeber zu den besten Hunderassen für Familien an",
    shareLabel: "Diesen Ratgeber teilen",
    guides: [
      {
        id: "family-dogs",
        title: "Gute Hunde für Familien mit Kindern",
        body: "Kinder und Hunde können wunderbar miteinander auskommen — solange der Hund zum tatsächlichen Alltag der Familie passt und die Kinder ein paar einfache Regeln lernen.",
        points: [
          "Achte zuerst auf ein ruhiges, nachsichtiges Temperament. Ein Hund, der ein ungeschicktes Tätscheln locker wegsteckt, ist wichtiger als der Ruf der Rasse allein.",
          "Größe wirkt in beide Richtungen: Ein sehr großer Hund kann ein Kleinkind versehentlich umstoßen, ein sehr kleiner kann bei grobem Spiel verletzt werden. Mittelgroß und gelassen ist oft am einfachsten.",
          "Welpe und Kleinkind gleichzeitig bedeutet zwei Aufgaben auf einmal. Viele Familien starten ruhiger mit einem Hund, der schon ein oder zwei Jahre alt ist.",
          "Die Regeln zählen mehr als die Rasse: einen Hund beim Fressen, Schlafen oder in seinem Körbchen nicht stören — und immer ein Erwachsener im Raum, wenn kleine Kinder dabei sind.",
        ],
        close: "Labrador, Golden Retriever, Cavalier King Charles Spaniel und viele sanfte Mischlinge eignen sich hier gut — der Test berücksichtigt das Familienleben bei jedem Vorschlag.",
      },
      {
        id: "flat-living",
        title: "Hunde, die sich in einer Wohnung wohlfühlen",
        body: "Platz zählt weniger, als man denkt. Lärm, Bewegung und der Umgang mit Alleinsein zählen viel mehr.",
        points: [
          "Bellen ist am Ende das, was am meisten zählt. Ein Hund, der jeden Schritt im Treppenhaus meldet, ist in einem Mehrfamilienhaus mühsam, egal wie klein er ist.",
          "Zwei richtige Spaziergänge am Tag schlagen einen Garten. Der Garten ist zum Herumtrödeln da; der Spaziergang ist es, wo der Hund seinen Kopf leert.",
          "Aufzug und Treppen gehören dazu. Ein großer Hund, den man vielleicht eines Tages tragen muss, und ein Welpe, der monatelang keine Treppen laufen sollte, sind es wert, jetzt schon bedacht zu werden.",
          "Alleinsein wird gelernt, nicht mitgebracht. Beginne mit Minuten, nicht Stunden, und steigere es in den ersten Wochen langsam.",
        ],
        close: "Windhunde, viele Spanielrassen und zahlreiche kleine Terrier leben glücklich in Wohnungen. Laute, wachsame Rassen tun sich meist schwerer.",
      },
      {
        id: "first-dog",
        title: "Den ersten Hund auswählen",
        body: "Im ersten Jahr macht jeder Fehler. Manche Hunde verzeihen sie leichter als andere.",
        points: [
          "Wähle nachsichtig statt beeindruckend. Ein Hund, der deine Unstimmigkeiten locker wegsteckt, lehrt dich mehr als einer, der sie bestraft.",
          "Achte auf mittlere Energie, nicht auf niedrige. Sehr ruhige Hunde sind oft älter oder kurzköpfig; sehr energiegeladene Hunde brauchen eine Aufgabe, die du vielleicht nicht bieten kannst.",
          "Triff die Eltern, wenn möglich, oder den erwachsenen Hund selbst, wenn du ein Tier vermittelst bekommst. Das Wesen zeigt sich in der Familie, nicht auf dem Foto.",
          "Vereinbare den ersten Tierarztbesuch, den ersten Kurs und zwei ruhige Wochen zu Hause, bevor der Hund einzieht.",
        ],
        close: "Wenn du unsicher bist, mach den Test — er zeigt dir, welche Hunde zu deiner Woche passen, und die Begründung hinter jedem Ergebnis.",
      },
      {
        id: "shedding-allergies",
        title: "Fellwechsel und das Leben mit Allergien",
        body: "Was weniger Fellwechsel wirklich bedeutet, und wie man es durchdenkt, wenn jemand zu Hause auf Hunde reagiert.",
        points: [
          "Kein Hund ist hypoallergen. Der Auslöser ist ein Protein in Speichel, Hautschuppen und Urin — nicht das Haar selbst.",
          "Fell mit weniger Haarausfall hält diese Schuppen fest, statt sie zu verteilen. Das hilft manchen und bringt anderen nichts.",
          "Wenig Fellwechsel bedeutet meist mehr Pflege: Ein Pudelfell muss ein Leben lang alle 6 bis 8 Wochen professionell geschoren werden.",
          "Teste es, bevor du dich entscheidest. Verbringe mehrfach ein paar Stunden mit erwachsenen Hunden dieser Rasse, und sprich vor der Entscheidung mit einem Arzt.",
        ],
        close: "Wir zeigen Fellwechsel und Fellpflege auf jeder Rasseseite, und der Test fragt nach Allergien zu Hause, damit das Ergebnis dies berücksichtigt.",
      },
      {
        id: "calm-dogs",
        title: "Ruhige Hunde für stillere Zuhause",
        body: "Auch ein ruhiger Hund braucht viel von dir. So erkennst du einen, der wirklich gelassen ist.",
        points: [
          "Achte auf eine niedrige Schreckreaktion — ein Hund, der bei einem Geräusch den Kopf hebt, statt zur Tür zu stürmen.",
          "Ruhig drinnen und ruhig draußen sind zwei verschiedene Eigenschaften. Viele Windhunde schlafen den ganzen Tag und brauchen trotzdem einen ordentlichen Auslauf.",
          "Alter sagt mehr aus als Rasse. Ein vierjähriger Hund aus dem Tierschutz zeigt dir genau, wer er ist; ein Welpe ist zwei Jahre lang eine Vermutung.",
          "Gib dem Hund einen Ort zum Abschalten — ein Körbchen abseits der Haustür bewirkt für die Ruhe mehr als jedes Training.",
        ],
        close: "Windhund, Cavalier King Charles Spaniel, Berner Sennenhund und ältere Tierschutzhunde vieler Rassen passen gut zu stilleren Zuhause.",
      },
      {
        id: "active-life",
        title: "Hunde für Menschen, die sich gerne bewegen",
        body: "Sei ehrlich zur Woche, die du tatsächlich hast — nicht zu der, die du dir wünschst.",
        points: [
          "Zähle deine schlechteste Woche, nicht deine beste. Regen, Termindruck und Krankheit sind es, wenn ein energiegeladener Hund schwierig wird.",
          "Kopfarbeit ermüdet einen Hund schneller als Strecke. Zwanzig Minuten Nasenarbeit schlagen an den meisten Abenden einen zusätzlichen Kilometer.",
          "Gelenke müssen geschützt werden. Keine langen Läufe auf hartem Untergrund, bevor die Wachstumsfugen geschlossen sind — meist mit 12 bis 18 Monaten, bei großen Rassen später.",
          "Hitze ist die eigentliche Grenze. Kurzköpfige Rassen und dichtes Unterfell stoßen lange vor dir an ihre Grenzen.",
        ],
        close: "Border Collie, Vizsla, Labrador und viele Gebrauchsmischlinge blühen hier auf — solange die Woche echt ist.",
      },
      {
        id: "yearly-cost",
        title: "Was ein Hund im Jahr wirklich kostet",
        body: "Futter, Versicherung, Tierarzt, Hundefriseur — und die Posten, die fast jeder beim Budgetieren vergisst.",
        points: [
          "Futter richtet sich nach der Größe: Ein kleiner Hund kostet vielleicht 25 € im Monat, ein großer das Dreifache.",
          "Die Versicherung steigt mit dem Alter und schwankt je nach Rasse stark. Hol ein echtes Angebot für die Rasse ein, bevor du dich entscheidest.",
          "Routinemäßige Tierarztkosten — Impfung, Entwurmung, Zeckenschutz, Zahnkontrolle — sind ein vorhersehbarer Jahresposten, keine Überraschung.",
          "Die vergessenen Kosten: Fellpflege, Hundepension oder Sitter für den Urlaub, Trainingskurse, und eine Rücklage für das Jahr, in dem etwas schiefgeht.",
        ],
        close: "Die Kostenseiten der Rassen zeigen eine jährliche Spanne, aufgeteilt in Futter, Gesundheit, Pflege und alles Weitere.",
      },
    ],
  },
  fr: {
    intro:
      "Sept questions qu'on nous pose le plus souvent, avec les réponses qu'on donnerait à un ami — sans détour et sans discours commercial.",
    familyGuideLink: "Consultez notre guide complet des meilleures races de chiens pour les familles",
    shareLabel: "Partager ce guide",
    guides: [
      {
        id: "family-dogs",
        title: "Bons chiens pour les familles avec enfants",
        body: "Enfants et chiens peuvent former un duo merveilleux — à condition que le chien convienne à la vraie semaine de la famille, et que les enfants apprennent quelques règles simples.",
        points: [
          "Cherchez avant tout un tempérament stable et indulgent. Un chien qui encaisse une caresse maladroite sans broncher compte bien plus que la réputation de sa race.",
          "La taille joue dans les deux sens : un grand chien peut renverser un tout-petit par accident, et un petit peut être blessé par un jeu trop brusque. Taille moyenne et calme est souvent le plus simple.",
          "Chiot et tout-petit en même temps, c'est deux tâches à la fois. Beaucoup de familles ont un départ plus serein avec un chien d'un an ou deux.",
          "Les règles comptent plus que la race : ne jamais déranger un chien qui mange, dort ou est dans son panier — et toujours un adulte présent avec de jeunes enfants.",
        ],
        close: "Labrador, golden retriever, cavalier king charles spaniel et de nombreux croisés au caractère doux conviennent bien ici — le test tient compte de la vie de famille dans chaque suggestion.",
      },
      {
        id: "flat-living",
        title: "Chiens qui s'épanouissent en appartement",
        body: "L'espace compte moins qu'on ne le pense. Le bruit, l'exercice et la capacité à rester seul comptent bien davantage.",
        points: [
          "Les aboiements finissent par être ce qui compte le plus. Un chien qui signale chaque pas dans la cage d'escalier devient vite pénible, aussi petit soit-il.",
          "Deux vraies promenades par jour valent mieux qu'un jardin. Le jardin sert à flâner ; la promenade est ce qui vide la tête du chien.",
          "L'ascenseur et les escaliers font partie du contrat. Un grand chien qu'il faudra peut-être porter un jour, et un chiot qui ne doit pas monter d'escaliers pendant des mois, méritent d'y penser dès maintenant.",
          "Rester seul s'apprend, ce n'est pas inné. Commencez par des minutes, pas des heures, et augmentez doucement pendant les premières semaines.",
        ],
        close: "Les lévriers, de nombreux épagneuls et pas mal de petits terriers vivent bien en appartement. Les races vigilantes et bruyantes ont souvent plus de mal.",
      },
      {
        id: "first-dog",
        title: "Choisir son premier chien",
        body: "Tout le monde fait des erreurs la première année. Certains chiens les pardonnent plus facilement que d'autres.",
        points: [
          "Préférez un chien indulgent à un chien impressionnant. Celui qui passe l'éponge sur vos maladresses vous apprendra plus qu'un chien qui les punit.",
          "Visez une énergie moyenne, pas basse. Les chiens très calmes sont souvent âgés ou brachycéphales ; les chiens très énergiques ont besoin d'une activité que vous n'avez peut-être pas.",
          "Rencontrez les parents si possible, ou le chien adulte lui-même en cas d'adoption. Le tempérament se révèle dans la famille, pas sur la photo.",
          "Prenez rendez-vous pour la première visite chez le vétérinaire, le premier cours d'éducation, et prévoyez deux semaines calmes à la maison avant l'arrivée du chien.",
        ],
        close: "Si vous hésitez, faites le test — il vous montre quels chiens conviennent à votre semaine, et le raisonnement derrière chaque score.",
      },
      {
        id: "shedding-allergies",
        title: "Mue, et vivre avec des allergies",
        body: "Ce que « perd moins de poils » signifie vraiment, et comment réfléchir à la question si quelqu'un à la maison réagit aux chiens.",
        points: [
          "Aucun chien n'est hypoallergénique. Le déclencheur est une protéine présente dans la salive, les squames et l'urine — pas le poil lui-même.",
          "Un poil qui mue moins retient ces squames au lieu de les disperser, ce qui aide certaines personnes et ne change rien pour d'autres.",
          "Peu de mue signifie généralement plus d'entretien : un poil type caniche doit être tondu par un professionnel toutes les 6 à 8 semaines, toute sa vie.",
          "Testez avant de vous engager. Passez plusieurs heures avec des chiens adultes de cette race, à plusieurs reprises, et parlez-en à un médecin avant de décider.",
        ],
        close: "Nous indiquons la mue et l'entretien du poil sur chaque fiche de race, et le test interroge sur les allergies à la maison pour en tenir compte dans les résultats.",
      },
      {
        id: "calm-dogs",
        title: "Chiens calmes pour foyers plus tranquilles",
        body: "Un chien calme demande quand même beaucoup de vous. Voici comment repérer un chien véritablement placide.",
        points: [
          "Cherchez une faible réactivité à la surprise — un chien qui lève la tête à un bruit plutôt que de se précipiter vers la porte.",
          "Calme à l'intérieur et calme à l'extérieur sont deux traits différents. Beaucoup de lévriers dorment toute la journée et ont quand même besoin d'un bon défoulement.",
          "L'âge en dit plus que la race. Un chien de refuge de quatre ans vous montre exactement qui il est ; un chiot reste une supposition pendant deux ans.",
          "Offrez au chien un endroit pour se déconnecter — un panier loin de la porte d'entrée fait plus pour le calme que n'importe quel entraînement.",
        ],
        close: "Lévrier, cavalier king charles spaniel, bouvier bernois et de nombreux chiens de refuge plus âgés conviennent bien aux foyers tranquilles.",
      },
      {
        id: "active-life",
        title: "Chiens pour les personnes qui aiment bouger",
        body: "Soyez honnête sur la semaine que vous avez réellement, pas celle que vous aimeriez avoir.",
        points: [
          "Comptez votre pire semaine, pas votre meilleure. Pluie, échéances et maladie, c'est là qu'un chien très énergique devient difficile à gérer.",
          "Le travail mental fatigue un chien plus vite que la distance. Vingt minutes de jeux de flair valent mieux qu'un kilomètre de plus la plupart des soirs.",
          "Les articulations doivent être protégées. Pas de longues courses sur sol dur avant la fermeture des cartilages de croissance — généralement 12 à 18 mois, plus tard pour les grandes races.",
          "La chaleur est la vraie limite. Les races au museau court et au double poil épais peinent bien avant vous.",
        ],
        close: "Border collie, vizsla, labrador et de nombreux croisés de travail s'épanouissent ici — à condition que la semaine soit réelle.",
      },
      {
        id: "yearly-cost",
        title: "Ce qu'un chien coûte vraiment par an",
        body: "Nourriture, assurance, vétérinaire, toiletteur — et les postes que presque tout le monde oublie de budgétiser.",
        points: [
          "La nourriture suit la taille : un petit chien peut coûter environ 25 € par mois, un grand chien trois fois plus.",
          "L'assurance augmente avec l'âge et varie énormément selon la race. Demandez un vrai devis pour la race envisagée avant de vous engager.",
          "Les soins vétérinaires courants — vaccination, vermifuge, antiparasitaire, contrôle dentaire — représentent un poste annuel prévisible, pas une surprise.",
          "Les coûts oubliés : toilettage, pension ou garde pendant les vacances, cours d'éducation, et une réserve pour l'année où quelque chose se passe mal.",
        ],
        close: "Les pages de coûts par race indiquent une fourchette annuelle, répartie entre nourriture, santé, toilettage et le reste.",
      },
    ],
  },
  nl: {
    intro:
      "Zeven dingen die mensen ons het vaakst vragen, beantwoord zoals we een vriend zouden antwoorden — zonder omwegen en zonder verkooppraatje.",
    familyGuideLink: "Bekijk onze volledige gids met de beste hondenrassen voor gezinnen",
    shareLabel: "Deel deze gids",
    guides: [
      {
        id: "family-dogs",
        title: "Goede honden voor gezinnen met kinderen",
        body: "Kinderen en honden kunnen prachtig samengaan — zolang de hond past bij het echte weekritme van het gezin, en de kinderen een paar eenvoudige regels leren.",
        points: [
          "Let eerst op een stabiel, vergevingsgezind karakter. Een hond die een onhandig aaitje gewoon opvangt, is belangrijker dan de reputatie van het ras alleen.",
          "Formaat werkt twee kanten op: een grote hond kan per ongeluk een peuter omverlopen, en een kleine kan gewond raken bij ruw spel. Middelgroot en stabiel is vaak het makkelijkst.",
          "Puppy en peuter tegelijk is twee klussen ineens. Veel gezinnen hebben een rustigere start met een hond van één of twee jaar oud.",
          "De regels tellen meer dan het ras: niemand stoort een hond die eet, slaapt of in zijn mand ligt — en er is altijd een volwassene in de kamer bij jonge kinderen.",
        ],
        close: "Labrador, golden retriever, cavalier king charles spaniël en veel zachtaardige kruisingen doen het hier goed — de test weegt gezinsleven mee in elke uitkomst.",
      },
      {
        id: "flat-living",
        title: "Honden die het goed doen in een appartement",
        body: "Ruimte telt minder dan je zou denken. Geluid, beweging en hoe ze omgaan met alleen zijn tellen veel zwaarder.",
        points: [
          "Blaffen blijkt uiteindelijk het belangrijkst. Een hond die elke voetstap in het trappenhuis aankondigt, is lastig in een flatgebouw, hoe klein hij ook is.",
          "Twee echte wandelingen per dag verslaan een tuin. De tuin is om even rond te scharrelen; de wandeling is waar de hond zijn hoofd leegt.",
          "Lift en trappen horen erbij. Een grote hond die je misschien ooit moet dragen, en een puppy die maanden geen trappen mag lopen, zijn het waard om nu al te overwegen.",
          "Alleen blijven wordt geleerd, niet meegegeven. Begin met minuten, niet uren, en bouw dat de eerste weken rustig op.",
        ],
        close: "Windhonden, veel spanielrassen en heel wat kleine terriërs wonen prima in een appartement. Waakzame, luidruchtige rassen hebben het vaak lastiger.",
      },
      {
        id: "first-dog",
        title: "Je eerste hond kiezen",
        body: "Iedereen maakt fouten in het eerste jaar. Sommige honden vergeven die makkelijker dan andere.",
        points: [
          "Kies vergevingsgezind boven indrukwekkend. Een hond die jouw inconsistentie relativeert, leert je meer dan een hond die het afstraft.",
          "Zoek gemiddelde energie, geen lage. Zeer rustige honden zijn vaak ouder of kortsnuitig; zeer energieke honden hebben een taak nodig die jij misschien niet kunt bieden.",
          "Ontmoet de ouders als dat kan, of de volwassen hond zelf bij een herplaatsing. Karakter blijkt uit het gezin, niet uit de foto.",
          "Plan het eerste dierenartsbezoek, de eerste cursus en twee rustige weken thuis voordat de hond arriveert.",
        ],
        close: "Twijfel je? Doe de test — die laat zien welke honden bij jouw week passen, en de redenering achter elke score.",
      },
      {
        id: "shedding-allergies",
        title: "Verharen, en leven met allergieën",
        body: "Wat minder verharen echt betekent, en hoe je dat overweegt als iemand thuis reageert op honden.",
        points: [
          "Geen enkele hond is hypoallergeen. De trigger is een eiwit in speeksel, huidschilfers en urine — niet de haren zelf.",
          "Minder verharende vachten houden dat schilfer vast in plaats van het los te laten, wat sommigen helpt en voor anderen niets uitmaakt.",
          "Weinig verharen betekent meestal meer verzorging: een poedelvacht moet elke 6 tot 8 weken professioneel geschoren worden, het hele leven lang.",
          "Test het voordat je je vastlegt. Breng meerdere keren een paar uur door met volwassen honden van dat ras, en praat met een arts voor je beslist.",
        ],
        close: "We tonen verharen en vachtonderhoud op elke rassenpagina, en de test vraagt naar allergieën thuis zodat de uitkomst daar rekening mee houdt.",
      },
      {
        id: "calm-dogs",
        title: "Rustige honden voor stillere huishoudens",
        body: "Ook een rustige hond vraagt veel van jou. Zo herken je een hond die echt ontspannen is.",
        points: [
          "Zoek naar een lage schrikreactie — een hond die zijn kop optilt bij een geluid in plaats van naar de deur te stormen.",
          "Rustig binnen en rustig buiten zijn twee verschillende eigenschappen. Veel windhonden slapen de hele dag en hebben toch een stevige sprint nodig.",
          "Leeftijd zegt meer dan ras. Een vierjarige hond uit herplaatsing laat precies zien wie hij is; een puppy blijft twee jaar lang gissen.",
          "Geef de hond een plek om tot rust te komen — een mand weg van de voordeur doet meer voor rust dan welke training dan ook.",
        ],
        close: "Windhond, cavalier king charles spaniël, berner sennenhond en oudere herplaatsingshonden van veel rassen passen goed bij stillere huishoudens.",
      },
      {
        id: "active-life",
        title: "Honden voor mensen die graag bewegen",
        body: "Wees eerlijk over de week die je echt hebt, niet de week die je zou willen hebben.",
        points: [
          "Reken met je slechtste week, niet je beste. Regen, deadlines en ziekte zijn het moment waarop een energieke hond lastig wordt.",
          "Denkwerk vermoeit een hond sneller dan afstand. Twintig minuten speurspel verslaat de meeste avonden nog een extra kilometer.",
          "Gewrichten moeten beschermd worden. Geen lange looprondes op harde ondergrond voordat de groeischijven gesloten zijn — meestal 12 tot 18 maanden, later bij grote rassen.",
          "Hitte is de echte grens. Kortsnuitige rassen en dikke ondervacht hebben het al lang moeilijk voordat jij dat hebt.",
        ],
        close: "Border collie, vizsla, labrador en veel werkkruisingen floreren hier — zolang de week echt is.",
      },
      {
        id: "yearly-cost",
        title: "Wat een hond echt kost per jaar",
        body: "Voer, verzekering, de dierenarts, de trimmer — en de posten die bijna iedereen vergeet te begroten.",
        points: [
          "Voer schaalt met formaat: een kleine hond kost misschien 25 euro per maand, een grote drie keer zoveel.",
          "Verzekering stijgt met leeftijd en verschilt enorm per ras. Vraag een echte offerte op voor het ras dat je overweegt voordat je beslist.",
          "Routinematige diergeneeskundige zorg — inenting, ontworming, vlooien- en tekenbehandeling, gebitscontrole — is een voorspelbare jaarlijkse post, geen verrassing.",
          "De vergeten kosten: vachtverzorging, een pension of oppas voor de vakantie, trainingslessen, en een buffer voor het jaar waarin iets misgaat.",
        ],
        close: "De kostenpagina's per ras tonen een jaarlijkse bandbreedte, opgesplitst in voer, gezondheid, verzorging en de rest.",
      },
    ],
  },
} as const;

function GuidesPage() {
  const t = useT();
  const c = useCopy(copy);
  const { locale } = useLocale();
  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{t.guides.title}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{t.guides.subtitle}</h1>
      <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {c.guides.map((guide) => (
          <li key={guide.id} id={guide.id} className="group scroll-mt-28 bg-background p-8 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <h2 className="display-md">{guide.title}</h2>
              <SectionShare anchor={guide.id} title={guide.title} text={guide.body} />
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{guide.body}</p>
            <ul className="mt-6 space-y-3">
              {guide.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{guide.close}</p>
            {(() => {
              const link = GUIDE_HUB_LINKS[guide.id];
              if (!link) return null;
              return (
                <Link
                  to={withLangPrefix(link.path)}
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  {pick(link.label, locale)}
                  <Arrow />
                </Link>
              );
            })()}
          </li>
        ))}
      </ul>

      <InlineShare label={c.shareLabel} className="mt-14" />

      <div className="mt-8">
        <Link to={withLangPrefix("/find-my-dog")} className="group inline-flex items-center gap-2 font-medium">
          {t.nav.startMatching}
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
