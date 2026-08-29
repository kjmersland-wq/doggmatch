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
    intro:
      "Seven things people ask us most often, answered the way we'd answer a friend — no hedging, no sales pitch.",
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
} as const;

function GuidesPage() {
  const t = useT();
  const c = useCopy(copy);
  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{t.guides.title}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{t.guides.subtitle}</h1>
      <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <ShareBar className="mt-6" />

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
