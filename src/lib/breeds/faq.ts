import type { Breed } from "@/data/breeds";
import { pick, type Locale } from "@/i18n/locale";
import { interpolate } from "@/i18n";

/**
 * The questions people actually type before committing to a breed, answered
 * deterministically from the same trait numbers the rest of the site uses.
 * English is the source language; other locales fall back to English.
 */

export type BreedFaqItem = { question: string; answer: string };

const q = {
  children: {
    en: "Is a {breed} good with children?",
    no: "Passer en {breed} sammen med barn?",
    pl: "Czy {breed} dobrze dogaduje się z dziećmi?",
  },
  apartment: {
    en: "Can a {breed} live in an apartment?",
    no: "Kan en {breed} bo i leilighet?",
    pl: "Czy {breed} może mieszkać w bloku?",
  },
  exercise: {
    en: "How much exercise does a {breed} need each day?",
    no: "Hvor mye mosjon trenger en {breed} hver dag?",
    pl: "Ile ruchu potrzebuje {breed} każdego dnia?",
  },
  shedding: {
    en: "Does a {breed} shed a lot?",
    no: "Feller en {breed} mye?",
    pl: "Czy {breed} dużo linieje?",
  },
  firstDog: {
    en: "Is a {breed} a good first dog?",
    no: "Er en {breed} en god første hund?",
    pl: "Czy {breed} to dobry pierwszy pies?",
  },
  alone: {
    en: "How long can a {breed} be left alone?",
    no: "Hvor lenge kan en {breed} være alene?",
    pl: "Jak długo {breed} może zostać sam w domu?",
  },
  cost: {
    en: "What does a {breed} cost per year?",
    no: "Hva koster en {breed} i året?",
    pl: "Ile kosztuje {breed} rocznie?",
  },
};

type Band = { en: string; no?: string; pl?: string };

/** Picks a band by a 1–5 trait value (index 0 = value 1). */
function band(value: number, bands: [Band, Band, Band, Band, Band], locale: Locale) {
  const i = Math.min(5, Math.max(1, Math.round(value))) - 1;
  return pick(bands[i]!, locale);
}

export function breedFaq(breed: Breed, displayName: string, locale: Locale): BreedFaqItem[] {
  const t = breed.traits;
  const name = displayName;
  const ask = (key: keyof typeof q) => interpolate(pick(q[key], locale), { breed: name });

  const exerciseMinutes = [30, 45, 60, 90, 120][Math.min(4, Math.max(0, Math.round(t.exerciseNeeds) - 1))]!;
  const aloneHours = [1, 2, 3, 4, 5][Math.min(4, Math.max(0, Math.round(t.aloneTolerance) - 1))]!;

  const items: BreedFaqItem[] = [
    {
      question: ask("children"),
      answer: band(
        t.goodWithChildren,
        [
          {
            en: `Generally not the easiest choice for a busy family home. A ${name} usually does better with calm, older children who understand when to leave a dog alone, and needs close supervision around small kids.`,
            no: `Som regel ikke det enkleste valget i et travelt familiehjem. En ${name} trives best med rolige, større barn som forstår når hunden skal få være i fred, og trenger tett tilsyn rundt små barn.`,
            pl: `Zwykle nie jest to najłatwiejszy wybór do ruchliwego domu rodzinnego. ${name} radzi sobie lepiej ze spokojnymi, starszymi dziećmi, które wiedzą, kiedy zostawić psa w spokoju, i wymaga bliskiego nadzoru przy maluchach.`,
          },
          {
            en: `Can work with children, but on conditions. A ${name} needs predictable routines, a place to retreat to, and adults who step in before things get loud.`,
            no: `Kan fungere med barn, men på betingelser. En ${name} trenger forutsigbare rutiner, et sted å trekke seg tilbake, og voksne som griper inn før det blir for høylytt.`,
            pl: `Może się sprawdzić z dziećmi, ale pod warunkami. ${name} potrzebuje przewidywalnych rutyn, miejsca na wycofanie się i dorosłych, którzy reagują, zanim zrobi się głośno.`,
          },
          {
            en: `Usually fine with children who have been shown how to behave around a dog. As with any breed, the mix of good manners and adult supervision matters more than the label.`,
            no: `Går som regel bra med barn som har lært hvordan man er med hund. Som med alle raser betyr gode rutiner og voksent tilsyn mer enn selve rasen.`,
            pl: `Zwykle dobrze układa się z dziećmi, którym pokazano, jak zachowywać się przy psie. Jak u każdej rasy, dobre nawyki i obecność dorosłych znaczą więcej niż sama rasa.`,
          },
          {
            en: `Yes — a ${name} is typically patient and easy-going with children, as long as the dog gets rest and children learn to respect it.`,
            no: `Ja — en ${name} er som regel tålmodig og grei med barn, så lenge hunden får hvile og barna lærer å respektere den.`,
            pl: `Tak — ${name} jest zwykle cierpliwy i spokojny wobec dzieci, o ile pies ma czas na odpoczynek, a dzieci uczą się go szanować.`,
          },
          {
            en: `Yes — this is one of the more family-friendly dogs there is. A ${name} is usually tolerant and steady with children, though it still needs somewhere quiet to sleep.`,
            no: `Ja — dette er en av de mer familievennlige hundene. En ${name} er som regel tålmodig og trygg med barn, men trenger likevel et rolig sted å sove.`,
            pl: `Tak — to jeden z bardziej rodzinnych psów. ${name} jest zwykle tolerancyjny i stabilny przy dzieciach, ale wciąż potrzebuje cichego miejsca do spania.`,
          },
        ],
        locale,
      ),
    },
    {
      question: ask("apartment"),
      answer: band(
        t.apartmentSuitability,
        [
          {
            en: `Honestly, apartment life is a poor fit for most ${name}s. Space, noise and the daily walks in and out of a building make it hard work for both of you.`,
            no: `Ærlig talt passer leilighetsliv dårlig for de fleste ${name}. Plass, lyd og de daglige turene ut og inn av bygget gjør det tungt for begge.`,
            pl: `Szczerze mówiąc, mieszkanie w bloku słabo pasuje większości psów rasy ${name}. Przestrzeń, hałas i codzienne wyjścia z budynku są męczące dla obu stron.`,
          },
          {
            en: `Possible, but demanding. A ${name} in a flat needs long daily outings and real work on settling quietly indoors.`,
            no: `Mulig, men krevende. En ${name} i leilighet trenger lange daglige turer og bevisst trening på å falle til ro inne.`,
            pl: `Możliwe, ale wymagające. ${name} w mieszkaniu potrzebuje długich codziennych wyjść i pracy nad wyciszaniem się w domu.`,
          },
          {
            en: `Yes, if you go out often enough. A ${name} can live well in a flat when exercise and stimulation happen outside every day.`,
            no: `Ja, hvis dere er nok ute. En ${name} kan ha det fint i leilighet når mosjon og aktivisering skjer ute hver dag.`,
            pl: `Tak, jeśli często wychodzicie. ${name} może dobrze żyć w mieszkaniu, gdy ruch i stymulacja odbywają się codziennie na zewnątrz.`,
          },
          {
            en: `Yes — a ${name} adapts well to a flat. Daily walks still matter, but indoors it usually settles.`,
            no: `Ja — en ${name} tilpasser seg leilighet godt. Daglige turer er fortsatt viktig, men inne faller den som regel til ro.`,
            pl: `Tak — ${name} dobrze przystosowuje się do mieszkania. Codzienne spacery są nadal ważne, ale w domu zwykle się wycisza.`,
          },
          {
            en: `Yes — apartments suit a ${name} well. Give it a fixed resting spot and reliable walks and the space itself is rarely the problem.`,
            no: `Ja — leilighet passer en ${name} godt. Gi den en fast hvileplass og faste turer, så er selve plassen sjelden problemet.`,
            pl: `Tak — mieszkanie dobrze pasuje psu rasy ${name}. Stałe miejsce do odpoczynku i regularne spacery sprawiają, że metraż rzadko jest problemem.`,
          },
        ],
        locale,
      ),
    },
    {
      question: ask("exercise"),
      answer: interpolate(
        pick(
          {
            en: `Plan for around {min} minutes of real activity a day, split into more than one outing, plus something that uses its head — scent games, training, or a proper sniffing walk.`,
            no: `Regn med rundt {min} minutter reell aktivitet om dagen, fordelt på flere turer, pluss noe som bruker hodet — søk, trening eller en skikkelig luktetur.`,
            pl: `Licz na około {min} minut prawdziwej aktywności dziennie, podzielonej na kilka wyjść, plus coś dla głowy — węszenie, trening albo spokojny spacer z nosem przy ziemi.`,
          },
          locale,
        ),
        { min: exerciseMinutes },
      ),
    },
    {
      question: ask("shedding"),
      answer: band(
        t.shedding,
        [
          {
            en: `Very little loose hair around the home. Expect regular trips to a groomer instead — low shedding almost always means more coat care.`,
            no: `Svært lite løshår i hjemmet. Til gjengjeld blir det jevnlige turer til frisør — lite felling betyr nesten alltid mer pelsstell.`,
            pl: `Bardzo mało włosów w domu. W zamian czekają regularne wizyty u groomera — małe linienie prawie zawsze oznacza więcej pielęgnacji.`,
          },
          {
            en: `Light shedding. A weekly brush usually keeps things under control.`,
            no: `Lite felling. En børsting i uka holder som regel styr på det.`,
            pl: `Niewielkie linienie. Szczotkowanie raz w tygodniu zwykle wystarcza.`,
          },
          {
            en: `Moderate shedding all year, with heavier periods in spring and autumn. Brushing a few times a week makes a real difference.`,
            no: `Moderat felling hele året, med tyngre perioder vår og høst. Børsting noen ganger i uka gjør stor forskjell.`,
            pl: `Umiarkowane linienie przez cały rok, z nasileniem wiosną i jesienią. Szczotkowanie kilka razy w tygodniu naprawdę pomaga.`,
          },
          {
            en: `Yes, noticeably. Hair on clothes and floors is part of the deal, and the seasonal moults are heavy.`,
            no: `Ja, merkbart. Hår på klær og gulv hører med, og sesongfellingen er kraftig.`,
            pl: `Tak, wyraźnie. Włosy na ubraniach i podłodze to część układu, a sezonowe linienie jest obfite.`,
          },
          {
            en: `Yes — a lot. If loose hair genuinely bothers you, be honest with yourself before choosing a ${name}.`,
            no: `Ja — mye. Hvis løshår faktisk plager deg, vær ærlig med deg selv før du velger en ${name}.`,
            pl: `Tak — bardzo. Jeśli luźna sierść naprawdę ci przeszkadza, bądź wobec siebie szczery, zanim wybierzesz rasę ${name}.`,
          },
        ],
        locale,
      ),
    },
    {
      question: ask("firstDog"),
      answer: band(
        t.firstTimeSuitability,
        [
          {
            en: `We would not recommend it as a first dog. A ${name} asks for experience, timing and consistency that are hard to build from scratch.`,
            no: `Vi anbefaler den ikke som første hund. En ${name} krever erfaring, timing og konsekvens som er vanskelig å bygge fra bunnen.`,
            pl: `Nie polecamy jako pierwszego psa. ${name} wymaga doświadczenia, wyczucia i konsekwencji, które trudno zbudować od zera.`,
          },
          {
            en: `Possible for a determined first-time owner with good help — a trainer from week one, and realistic expectations.`,
            no: `Mulig for en målbevisst førstegangseier med god hjelp — en trener fra uke én, og realistiske forventninger.`,
            pl: `Możliwe dla zdeterminowanego początkującego z dobrym wsparciem — trener od pierwszego tygodnia i realistyczne oczekiwania.`,
          },
          {
            en: `A reasonable first dog if you prepare. Read up, book a course early, and keep the daily routine simple.`,
            no: `En rimelig første hund hvis du forbereder deg. Les deg opp, meld deg på kurs tidlig, og hold hverdagen enkel.`,
            pl: `Rozsądny pierwszy pies, jeśli się przygotujesz. Poczytaj, zapisz się wcześnie na kurs i trzymaj prostą codzienną rutynę.`,
          },
          {
            en: `Yes — a ${name} is a forgiving first dog for most people who can give it time.`,
            no: `Ja — en ${name} er en overbærende første hund for de fleste som kan gi den tid.`,
            pl: `Tak — ${name} to wyrozumiały pierwszy pies dla większości osób, które mogą poświęcić mu czas.`,
          },
          {
            en: `Yes — one of the easier breeds to start with. It still needs training and exercise, but it tends to forgive beginners' mistakes.`,
            no: `Ja — en av de enklere rasene å starte med. Den trenger fortsatt trening og mosjon, men tåler nybegynnerfeil godt.`,
            pl: `Tak — jedna z łatwiejszych ras na start. Nadal potrzebuje treningu i ruchu, ale wybacza błędy początkującym.`,
          },
        ],
        locale,
      ),
    },
    {
      question: ask("alone"),
      answer: interpolate(
        pick(
          {
            en: `Around {h} hours at a stretch once fully grown and gradually trained for it. Longer days need a dog walker, day care or someone dropping in — and a puppy needs far shorter stretches at first.`,
            no: `Rundt {h} timer av gangen når den er voksen og gradvis trent på det. Lengre dager krever hundelufter, dagpass eller noen som stikker innom — og en valp trenger langt kortere økter i starten.`,
            pl: `Około {h} godzin bez przerwy, gdy jest już dorosły i stopniowo do tego przyzwyczajany. Dłuższe dni wymagają opiekuna, przedszkola dla psów albo kogoś, kto wpadnie — a szczeniak na początku potrzebuje znacznie krótszych okresów.`,
          },
          locale,
        ),
        { h: aloneHours },
      ),
    },
    {
      question: ask("cost"),
      answer: interpolate(
        pick(
          {
            en: `Budget roughly €{lo}–{hi} a year for food, routine vet care, insurance, grooming and everyday kit. Country, size and individual health move that figure quite a bit, and a single unlucky year can cost more.`,
            no: `Regn med omtrent €{lo}–{hi} i året til fôr, vanlig veterinær, forsikring, pelsstell og utstyr. Land, størrelse og hundens helse flytter tallet en del, og et uheldig år kan koste mer.`,
            pl: `Przyjmij mniej więcej €{lo}–{hi} rocznie na jedzenie, rutynową opiekę weterynaryjną, ubezpieczenie, pielęgnację i codzienne wyposażenie. Kraj, wielkość psa i jego zdrowie sporo tym ruszają, a jeden pechowy rok może kosztować więcej.`,
          },
          locale,
        ),
        { lo: breed.annualCost[0], hi: breed.annualCost[1] },
      ),
    },
  ];

  return items;
}
