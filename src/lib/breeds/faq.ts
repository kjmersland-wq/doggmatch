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
    dk: "Er en {breed} god med børn?",
    se: "Är en {breed} bra med barn?",
    fi: "Onko {breed} hyvä lapsiperheeseen?",
    de: "Ist ein {breed} gut mit Kindern?",
    fr: "Un {breed} est-il bon avec les enfants ?",
    nl: "Is een {breed} goed met kinderen?",
  },
  apartment: {
    en: "Can a {breed} live in an apartment?",
    no: "Kan en {breed} bo i leilighet?",
    pl: "Czy {breed} może mieszkać w bloku?",
    dk: "Kan en {breed} bo i lejlighed?",
    se: "Kan en {breed} bo i lägenhet?",
    fi: "Voiko {breed} asua kerrostalossa?",
    de: "Kann ein {breed} in einer Wohnung leben?",
    fr: "Un {breed} peut-il vivre en appartement ?",
    nl: "Kan een {breed} in een appartement wonen?",
  },
  exercise: {
    en: "How much exercise does a {breed} need each day?",
    no: "Hvor mye mosjon trenger en {breed} hver dag?",
    pl: "Ile ruchu potrzebuje {breed} każdego dnia?",
    dk: "Hvor meget motion har en {breed} brug for hver dag?",
    se: "Hur mycket motion behöver en {breed} varje dag?",
    fi: "Kuinka paljon liikuntaa {breed} tarvitsee päivittäin?",
    de: "Wie viel Bewegung braucht ein {breed} pro Tag?",
    fr: "Combien d'exercice un {breed} a-t-il besoin par jour ?",
    nl: "Hoeveel beweging heeft een {breed} per dag nodig?",
  },
  shedding: {
    en: "Does a {breed} shed a lot?",
    no: "Feller en {breed} mye?",
    pl: "Czy {breed} dużo linieje?",
    dk: "Høster en {breed} meget?",
    se: "Fäller en {breed} mycket?",
    fi: "Irtoaako {breed}-rodulta paljon karvaa?",
    de: "Haart ein {breed} viel?",
    fr: "Un {breed} perd-il beaucoup ses poils ?",
    nl: "Verhaart een {breed} veel?",
  },
  firstDog: {
    en: "Is a {breed} a good first dog?",
    no: "Er en {breed} en god første hund?",
    pl: "Czy {breed} to dobry pierwszy pies?",
    dk: "Er en {breed} en god første hund?",
    se: "Är en {breed} en bra första hund?",
    fi: "Onko {breed} hyvä ensimmäiseksi koiraksi?",
    de: "Ist ein {breed} ein guter Anfängerhund?",
    fr: "Un {breed} est-il un bon premier chien ?",
    nl: "Is een {breed} een goede eerste hond?",
  },
  alone: {
    en: "How long can a {breed} be left alone?",
    no: "Hvor lenge kan en {breed} være alene?",
    pl: "Jak długo {breed} może zostać sam w domu?",
    dk: "Hvor længe kan en {breed} være alene hjemme?",
    se: "Hur länge kan en {breed} vara ensam hemma?",
    fi: "Kuinka kauan {breed} voi olla yksin kotona?",
    de: "Wie lange kann ein {breed} allein gelassen werden?",
    fr: "Combien de temps un {breed} peut-il être laissé seul ?",
    nl: "Hoe lang kan een {breed} alleen gelaten worden?",
  },
  cost: {
    en: "What does a {breed} cost per year?",
    no: "Hva koster en {breed} i året?",
    pl: "Ile kosztuje {breed} rocznie?",
    dk: "Hvad koster en {breed} om året?",
    se: "Vad kostar en {breed} per år?",
    fi: "Mitä {breed} maksaa vuodessa?",
    de: "Was kostet ein {breed} pro Jahr?",
    fr: "Quel est le coût annuel d'un {breed} ?",
    nl: "Wat kost een {breed} per jaar?",
  },
};

type Band = { en: string; no?: string; pl?: string; dk?: string; se?: string; fi?: string; de?: string; fr?: string; nl?: string };

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
            dk: `Generelt ikke det nemmeste valg i et travlt hjem med børn. En ${name} klarer sig som regel bedst med rolige, ældre børn, der forstår, hvornår hunden skal være alene, og kræver tæt opsyn omkring små børn.`,
            se: `Generellt sett inte det enklaste valet för ett livligt familjehem. En ${name} trivs oftast bäst med lugna, äldre barn som förstår när hunden behöver vara ifred och kräver noggrann övervakning kring små barn.`,
            fi: `Yleensä ei helpoin valinta vilkkaaseen perhekotiin. ${name} viihtyy yleensä parhaiten rauhallisten, vanhempien lasten kanssa, jotka ymmärtävät, milloin koiraa tulee jättää rauhaan, ja vaatii tarkkaa valvontaa pienempien lasten läheisyydessä.`,
            de: `Im Allgemeinen keine leichte Wahl für ein geschäftiges Familienhaus. Ein ${name} kommt normalerweise besser mit ruhigen, älteren Kindern zurecht, die verstehen, wann sie einen Hund in Ruhe lassen sollen, und benötigt eine genaue Aufsicht bei kleinen Kindern.`,
            fr: `Généralement pas le choix le plus facile pour une maison familiale animée. Un ${name} s'en sort généralement mieux avec des enfants calmes et plus âgés qui comprennent quand laisser un chien tranquille et nécessite une surveillance étroite autour des jeunes enfants.`,
            nl: `Over het algemeen niet de makkelijkste keuze voor een druk gezinswoning. Een ${name} doet het meestal beter met rustige, oudere kinderen die begrijpen wanneer ze een hond met rust moeten laten, en vereist nauw toezicht bij kleine kinderen.`,
          },
          {
            en: `Can work with children, but on conditions. A ${name} needs predictable routines, a place to retreat to, and adults who step in before things get loud.`,
            no: `Kan fungere med barn, men på betingelser. En ${name} trenger forutsigbare rutiner, et sted å trekke seg tilbake, og voksne som griper inn før det blir for høylytt.`,
            pl: `Może się sprawdzić z dziećmi, ale pod warunkami. ${name} potrzebuje przewidywalnych rutyn, miejsca na wycofanie się i dorosłych, którzy reagują, zanim zrobi się głośno.`,
            dk: `Kan fungere med børn, men på betingelser. En ${name} har brug for forudsigelige rutiner, et sted at trække sig tilbage og voksne, der griber ind, før det bliver for højt.`,
            se: `Kan fungera med barn, men på villkor. En ${name} behöver förutsägbara rutiner, en plats att dra sig tillbaka till och vuxna som ingriper innan det blir för högljutt.`,
            fi: `Voi toimia lasten kanssa, mutta tietyin ehdoin. ${name} tarvitsee ennustettavia rutiineja, paikan vetäytyä ja aikuisia, jotka puuttuvat tilanteeseen ennen kuin siitä tulee liian äänekäs.`,
            de: `Kann mit Kindern funktionieren, aber unter bestimmten Bedingungen. Ein ${name} benötigt vorhersehbare Routinen, einen Rückzugsort und Erwachsene, die eingreifen, bevor es laut wird.`,
            fr: `Peut fonctionner avec des enfants, mais sous conditions. Un ${name} a besoin de routines prévisibles, d'un endroit pour se retirer et d'adultes qui interviennent avant que les choses ne deviennent bruyantes.`,
            nl: `Kan werken met kinderen, maar onder voorwaarden. Een ${name} heeft voorspelbare routines nodig, een plek om zich terug te trekken en volwassenen die ingrijpen voordat het te luidruchtig wordt.`,
          },
          {
            en: `Usually fine with children who have been shown how to behave around a dog. As with any breed, the mix of good manners and adult supervision matters more than the label.`,
            no: `Går som regel bra med barn som har lært hvordan man er med hund. Som med alle raser betyr gode rutiner og voksent tilsyn mer enn selve rasen.`,
            pl: `Zwykle dobrze układa się z dziećmi, którym pokazano, jak zachowywać się przy psie. Jak u każdej rasy, dobre nawyki i obecność dorosłych znaczą więcej niż sama rasa.`,
            dk: `Som regel fint med børn, der er blevet vist, hvordan man opfører sig omkring en hund. Som med alle racer betyder gode manerer og voksent opsyn mere end selve racen.`,
            se: `Oftast bra med barn som har visats hur man beter sig runt en hund. Som med alla raser spelar goda vanor och vuxen tillsyn större roll än rasen i sig.`,
            fi: `Yleensä sopii hyvin lasten kanssa, joille on opetettu, miten koiran kanssa tulee käyttäytyä. Kuten minkä tahansa rodun kohdalla, hyvät tavat ja aikuisen valvonta ovat tärkeämpiä kuin itse rotu.`,
            de: `Normalerweise in Ordnung mit Kindern, denen gezeigt wurde, wie man sich in der Nähe eines Hundes verhält. Wie bei jeder Rasse sind gute Manieren und die Aufsicht durch Erwachsene wichtiger als das Etikett.`,
            fr: `Généralement bien avec les enfants à qui l'on a montré comment se comporter près d'un chien. Comme pour toute race, le mélange de bonnes manières et de surveillance adulte est plus important que l'étiquette.`,
            nl: `Meestal prima met kinderen die geleerd hebben hoe ze zich rond een hond moeten gedragen. Zoals bij elk ras, is de combinatie van goede manieren en toezicht door volwassenen belangrijker dan het etiket.`,
          },
          {
            en: `Yes — a ${name} is typically patient and easy-going with children, as long as the dog gets rest and children learn to respect it.`,
            no: `Ja — en ${name} er som regel tålmodig og grei med barn, så lenge hunden får hvile og barna lærer å respektere den.`,
            pl: `Tak — ${name} jest zwykle cierpliwy i spokojny wobec dzieci, o ile pies ma czas na odpoczynek, a dzieci uczą się go szanować.`,
            dk: `Ja — en ${name} er typisk tålmodig og omgængelig med børn, så længe hunden får hvile, og børnene lærer at respektere den.`,
            se: `Ja — en ${name} är typiskt sett tålmodig och lättsam med barn, så länge hunden får vila och barnen lär sig att respektera den.`,
            fi: `Kyllä — ${name} on tyypillisesti kärsivällinen ja leppoisa lasten kanssa, kunhan koira saa levätä ja lapset oppivat kunnioittamaan sitä.`,
            de: `Ja — ein ${name} ist typischerweise geduldig und umgänglich mit Kindern, solange der Hund Ruhe bekommt und die Kinder lernen, ihn zu respektieren.`,
            fr: `Oui — un ${name} est typiquement patient et facile à vivre avec les enfants, tant que le chien se repose et que les enfants apprennent à le respecter.`,
            nl: `Ja — een ${name} is doorgaans geduldig en gemakkelijk in de omgang met kinderen, zolang de hond rust krijgt en de kinderen leren hem te respecteren.`,
          },
          {
            en: `Yes — this is one of the more family-friendly dogs there is. A ${name} is usually tolerant and steady with children, though it still needs somewhere quiet to sleep.`,
            no: `Ja — dette er en av de mer familievennlige hundene. En ${name} er som regel tålmodig og trygg med barn, men trenger likevel et rolig sted å sove.`,
            pl: `Tak — to jeden z bardziej rodzinnych psów. ${name} jest zwykle tolerancyjny i stabilny przy dzieciach, ale wciąż potrzebuje cichego miejsca do spania.`,
            dk: `Ja — dette er en af de mere familievenlige hunde. En ${name} er som regel tolerant og stabil med børn, selvom den stadig har brug for et roligt sted at sove.`,
            se: `Ja — detta är en av de mer familjevänliga hundarna. En ${name} är vanligtvis tolerant och stabil med barn, även om den fortfarande behöver en lugn plats att sova på.`,
            fi: `Kyllä — tämä on yksi perheystävällisimmistä koirista. ${name} on yleensä kärsivällinen ja vakaa lasten kanssa, vaikka se silti tarvitsee rauhallisen paikan nukkua.`,
            de: `Ja — dies ist einer der familienfreundlichsten Hunde. Ein ${name} ist normalerweise tolerant und ausgeglichen mit Kindern, obwohl er immer noch einen ruhigen Schlafplatz benötigt.`,
            fr: `Oui — c'est l'un des chiens les plus familiaux qui existent. Un ${name} est généralement tolérant et stable avec les enfants, bien qu'il ait toujours besoin d'un endroit calme pour dormir.`,
            nl: `Ja — dit is een van de meest gezinsvriendelijke honden die er zijn. Een ${name} is doorgaans tolerant en stabiel met kinderen, hoewel hij nog steeds een rustige slaapplaats nodig heeft.`,
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
            dk: `Ærligt talt er lejlighedsliv en dårlig pasform for de fleste ${name}er. Plads, støj og de daglige ture ind og ud af bygningen gør det til hårdt arbejde for jer begge.`,
            se: `Ärligt talat är lägenhetsliv ett dåligt val för de flesta ${name}. Utrymme, buller och de dagliga turerna in och ut ur byggnaden gör det till ett hårt arbete för er båda.`,
            fi: `Rehellisesti sanottuna kerrostaloasuminen ei sovi useimmille ${name}-roduille. Tila, melu ja päivittäiset kävelyt rakennukseen ja sieltä pois tekevät siitä raskasta työtä teille molemmille.`,
            de: `Ehrlich gesagt, ist das Leben in einer Wohnung für die meisten ${name} schlecht geeignet. Platz, Lärm und die täglichen Wege in und aus dem Gebäude machen es für beide zu harter Arbeit.`,
            fr: `Honnêtement, la vie en appartement ne convient pas à la plupart des ${name}. L'espace, le bruit et les promenades quotidiennes dans et hors du bâtiment en font un travail difficile pour vous deux.`,
            nl: `Eerlijk gezegd is het leven in een appartement geen goede keuze voor de meeste ${name}s. Ruimte, geluid en de dagelijkse wandelingen in en uit het gebouw maken het voor beiden zwaar werk.`,
          },
          {
            en: `Possible, but demanding. A ${name} in a flat needs long daily outings and real work on settling quietly indoors.`,
            no: `Mulig, men krevende. En ${name} i leilighet trenger lange daglige turer og bevisst trening på å falle til ro inne.`,
            pl: `Możliwe, ale wymagające. ${name} w mieszkaniu potrzebuje długich codziennych wyjść i pracy nad wyciszaniem się w domu.`,
            dk: `Muligt, men krævende. En ${name} i en lejlighed har brug for lange daglige ture og reel træning i at falde til ro indendørs.`,
            se: `Möjligt, men krävande. En ${name} i en lägenhet behöver långa dagliga utflykter och verkligt arbete för att lugna sig inomhus.`,
            fi: `Mahdollista, mutta vaativaa. ${name} tarvitsee asunnossa pitkiä päivittäisiä ulkoiluja ja todellista työtä sisätilojen rauhoittamiseksi.`,
            de: `Möglich, aber anspruchsvoll. Ein ${name} in einer Wohnung benötigt lange tägliche Ausflüge und echte Arbeit, um sich drinnen ruhig zu verhalten.`,
            fr: `Possible, mais exigeant. Un ${name} en appartement a besoin de longues sorties quotidiennes et d'un travail réel pour se calmer à l'intérieur.`,
            nl: `Mogelijk, maar veeleisend. Een ${name} in een flat heeft lange dagelijkse uitstapjes nodig en serieuze inspanningen om binnenshuis rustig te worden.`,
          },
          {
            en: `Yes, if you go out often enough. A ${name} can live well in a flat when exercise and stimulation happen outside every day.`,
            no: `Ja, hvis dere er nok ute. En ${name} kan ha det fint i leilighet når mosjon og aktivisering skjer ute hver dag.`,
            pl: `Tak, jeśli często wychodzicie. ${name} może dobrze żyć w mieszkaniu, gdy ruch i stymulacja odbywają się codziennie na zewnątrz.`,
            dk: `Ja, hvis I kommer nok ud. En ${name} kan bo godt i en lejlighed, når motion og stimulering sker udenfor hver dag.`,
            se: `Ja, om ni går ut tillräckligt ofta. En ${name} kan bo bra i en lägenhet när motion och stimulans sker utomhus varje dag.`,
            fi: `Kyllä, jos käytte tarpeeksi usein ulkona. ${name} voi asua hyvin asunnossa, kun liikunta ja virikkeet tapahtuvat ulkona päivittäin.`,
            de: `Ja, wenn Sie oft genug rausgehen. Ein ${name} kann gut in einer Wohnung leben, wenn Bewegung und Stimulation jeden Tag draußen stattfinden.`,
            fr: `Oui, si vous sortez assez souvent. Un ${name} peut bien vivre en appartement lorsque l'exercice et la stimulation ont lieu dehors chaque jour.`,
            nl: `Ja, als u vaak genoeg naar buiten gaat. Een ${name} kan goed in een appartement wonen als beweging en stimulatie elke dag buiten plaatsvinden.`,
          },
          {
            en: `Yes — a ${name} adapts well to a flat. Daily walks still matter, but indoors it usually settles.`,
            no: `Ja — en ${name} tilpasser seg leilighet godt. Daglige turer er fortsatt viktig, men inne faller den som regel til ro.`,
            pl: `Tak — ${name} dobrze przystosowuje się do mieszkania. Codzienne spacery są nadal ważne, ale w domu zwykle się wycisza.`,
            dk: `Ja — en ${name} tilpasser sig godt til en lejlighed. Daglige gåture er stadig vigtige, men indendørs falder den som regel til ro.`,
            se: `Ja — en ${name} anpassar sig väl till en lägenhet. Dagliga promenader är fortfarande viktiga, men inomhus lugnar den sig oftast.`,
            fi: `Kyllä — ${name} sopeutuu hyvin asuntoon. Päivittäiset kävelyt ovat edelleen tärkeitä, mutta sisällä se yleensä rauhoittuu.`,
            de: `Ja — ein ${name} passt sich gut an eine Wohnung an. Tägliche Spaziergänge sind immer noch wichtig, aber drinnen beruhigt er sich normalerweise.`,
            fr: `Oui — un ${name} s'adapte bien à un appartement. Les promenades quotidiennes sont toujours importantes, mais à l'intérieur, il se calme généralement.`,
            nl: `Ja — een ${name} past zich goed aan een appartement aan. Dagelijkse wandelingen blijven belangrijk, maar binnenshuis wordt hij meestal rustig.`,
          },
          {
            en: `Yes — apartments suit a ${name} well. Give it a fixed resting spot and reliable walks and the space itself is rarely the problem.`,
            no: `Ja — leilighet passer en ${name} godt. Gi den en fast hvileplass og faste turer, så er selve plassen sjelden problemet.`,
            pl: `Tak — mieszkanie dobrze pasuje psu rasy ${name}. Stałe miejsce do odpoczynku i regularne spacery sprawiają, że metraż rzadko jest problemem.`,
            dk: `Ja — lejligheder passer en ${name} godt. Giv den et fast hvilehjørne og pålidelige gåture, og selve pladsen er sjældent problemet.`,
            se: `Ja — lägenheter passar en ${name} bra. Ge den en fast viloplats och pålitliga promenader, så är utrymmet i sig sällan problemet.`,
            fi: `Kyllä — asunnot sopivat ${name}-rodulle hyvin. Anna sille kiinteä lepopaikka ja luotettavat kävelyt, niin tila itsessään harvoin on ongelma.`,
            de: `Ja — Wohnungen passen gut zu einem ${name}. Geben Sie ihm einen festen Ruheplatz und zuverlässige Spaziergänge, und der Platz selbst ist selten das Problem.`,
            fr: `Oui — les appartements conviennent bien à un ${name}. Donnez-lui un endroit fixe pour se reposer et des promenades fiables, et l'espace lui-même est rarement le problème.`,
            nl: `Ja — appartementen passen goed bij een ${name}. Geef hem een vaste rustplek en betrouwbare wandelingen, en de ruimte zelf is zelden het probleem.`,
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
            dk: `Planlæg omkring {min} minutters reel aktivitet om dagen, fordelt på mere end én udflugt, plus noget der bruger hovedet — duftlege, træning eller en ordentlig snusetur.`,
            se: `Planera för cirka {min} minuters verklig aktivitet per dag, uppdelat på mer än en utflykt, plus något som använder huvudet — doftlekar, träning eller en ordentlig sniffpromenad.`,
            fi: `Varaa noin {min} minuutin verran todellista liikuntaa päivässä, jaettuna useammalle ulkoilukerralle, sekä jotain aivoja käyttävää – hajupelit, koulutus tai kunnon haistelulenkki.`,
            de: `Planen Sie etwa {min} Minuten echte Aktivität pro Tag ein, aufgeteilt auf mehr als einen Spaziergang, plus etwas, das den Kopf beschäftigt – Nasenspiele, Training oder ein richtiger Schnüffelspaziergang.`,
            fr: `Prévoyez environ {min} minutes d'activité réelle par jour, réparties sur plus d'une sortie, plus quelque chose qui utilise sa tête – jeux d'odorat, entraînement ou une vraie promenade de reniflage.`,
            nl: `Plan ongeveer {min} minuten echte activiteit per dag, verdeeld over meer dan één uitje, plus iets dat de hersenen gebruikt – geurspelletjes, training of een goede snuffelwandeling.`,
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
            dk: `Meget lidt løst hår i hjemmet. Forvent i stedet regelmæssige ture til en groomer — lav fældning betyder næsten altid mere pelspleje.`,
            se: `Mycket lite löst hår i hemmet. Räkna istället med regelbundna besök hos en groomer – låg fällning innebär nästan alltid mer pälsvård.`,
            fi: `Hyvin vähän irtoavaa karvaa kotona. Sen sijaan odota säännöllisiä käyntejä trimmaajalla – vähäinen karvanlähtö tarkoittaa lähes aina enemmän turkinhoitoa.`,
            de: `Sehr wenig loses Haar im Haus. Erwarten Sie stattdessen regelmäßige Besuche bei einem Hundefriseur – geringer Haarausfall bedeutet fast immer mehr Fellpflege.`,
            fr: `Très peu de poils morts à la maison. Attendez-vous plutôt à des visites régulières chez un toiletteur – une faible perte de poils signifie presque toujours plus de soins de pelage.`,
            nl: `Zeer weinig losse haren in huis. Verwacht in plaats daarvan regelmatige bezoeken aan een trimmer – weinig verharing betekent bijna altijd meer vachtverzorging.`,
          },
          {
            en: `Light shedding. A weekly brush usually keeps things under control.`,
            no: `Lite felling. En børsting i uka holder som regel styr på det.`,
            pl: `Niewielkie linienie. Szczotkowanie raz w tygodniu zwykle wystarcza.`,
            dk: `Let fældning. En ugentlig børstning holder normalt tingene under kontrol.`,
            se: `Lätt fällning. En veckovis borstning håller oftast saker under kontroll.`,
            fi: `Vähäinen karvanlähtö. Viikoittainen harjaus pitää yleensä tilanteen hallinnassa.`,
            de: `Leichter Haarausfall. Ein wöchentliches Bürsten hält die Dinge normalerweise unter Kontrolle.`,
            fr: `Perte de poils légère. Un brossage hebdomadaire permet généralement de garder les choses sous contrôle.`,
            nl: `Lichte verharing. Een wekelijkse borstelbeurt houdt de zaken meestal onder controle.`,
          },
          {
            en: `Moderate shedding all year, with heavier periods in spring and autumn. Brushing a few times a week makes a real difference.`,
            no: `Moderat felling hele året, med tyngre perioder vår og høst. Børsting noen ganger i uka gjør stor forskjell.`,
            pl: `Umiarkowane linienie przez cały rok, z nasileniem wiosną i jesienią. Szczotkowanie kilka razy w tygodniu naprawdę pomaga.`,
            dk: `Moderat fældning hele året, med kraftigere perioder om foråret og efteråret. Børstning et par gange om ugen gør en reel forskel.`,
            se: `Måttlig fällning året runt, med kraftigare perioder på våren och hösten. Borstning några gånger i veckan gör verklig skillnad.`,
            fi: `Kohtalainen karvanlähtö ympäri vuoden, voimakkaampana keväällä ja syksyllä. Muutaman kerran viikossa harjaaminen tekee todellisen eron.`,
            de: `Mäßiger Haarausfall das ganze Jahr über, mit stärkeren Perioden im Frühling und Herbst. Mehrmals pro Woche bürsten macht einen echten Unterschied.`,
            fr: `Perte de poils modérée toute l'année, avec des périodes plus intenses au printemps et à l'automne. Un brossage quelques fois par semaine fait une réelle différence.`,
            nl: `Matige verharing het hele jaar door, met zwaardere periodes in de lente en herfst. Een paar keer per week borstelen maakt echt verschil.`,
          },
          {
            en: `Yes, noticeably. Hair on clothes and floors is part of the deal, and the seasonal moults are heavy.`,
            no: `Ja, merkbart. Hår på klær og gulv hører med, og sesongfellingen er kraftig.`,
            pl: `Tak, wyraźnie. Włosy na ubraniach i podłodze to część układu, a sezonowe linienie jest obfite.`,
            dk: `Ja, mærkbart. Hår på tøj og gulve er en del af pakken, og de sæsonbestemte fældninger er kraftige.`,
            se: `Ja, märkbart. Hår på kläder och golv är en del av paketet, och de säsongsmässiga fällningarna är kraftiga.`,
            fi: `Kyllä, huomattavasti. Karvat vaatteissa ja lattioilla kuuluvat asiaan, ja kausittainen karvanlähtö on runsasta.`,
            de: `Ja, merklich. Haare auf Kleidung und Böden gehören dazu, und die saisonalen Haarungen sind stark.`,
            fr: `Oui, de manière notable. Les poils sur les vêtements et les sols font partie du lot, et les mues saisonnières sont abondantes.`,
            nl: `Ja, merkbaar. Haar op kleding en vloeren hoort erbij, en de seizoensgebonden rui is hevig.`,
          },
          {
            en: `Yes — a lot. If loose hair genuinely bothers you, be honest with yourself before choosing a ${name}.`,
            no: `Ja — mye. Hvis løshår faktisk plager deg, vær ærlig med deg selv før du velger en ${name}.`,
            pl: `Tak — bardzo. Jeśli luźna sierść naprawdę ci przeszkadza, bądź wobec siebie szczery, zanim wybierzesz rasę ${name}.`,
            dk: `Ja — meget. Hvis løst hår virkelig generer dig, så vær ærlig over for dig selv, før du vælger en ${name}.`,
            se: `Ja – mycket. Om löst hår verkligen stör dig, var ärlig mot dig själv innan du väljer en ${name}.`,
            fi: `Kyllä — paljon. Jos irtoava karva todella häiritsee sinua, ole rehellinen itsellesi ennen kuin valitset ${name}-rodun.`,
            de: `Ja – viel. Wenn Sie lose Haare wirklich stören, seien Sie ehrlich zu sich selbst, bevor Sie sich für einen ${name} entscheiden.`,
            fr: `Oui — beaucoup. Si la perte de poils vous dérange vraiment, soyez honnête avec vous-même avant de choisir un ${name}.`,
            nl: `Ja — veel. Als losse haren u echt storen, wees dan eerlijk tegen uzelf voordat u een ${name} kiest.`,
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
            dk: `Vi vil ikke anbefale den som en første hund. En ${name} kræver erfaring, timing og konsistens, som er svære at opbygge fra bunden.`,
            se: `Vi skulle inte rekommendera den som en första hund. En ${name} kräver erfarenhet, timing och konsekvens som är svåra att bygga upp från grunden.`,
            fi: `Emme suosittele sitä ensimmäiseksi koiraksi. ${name} vaatii kokemusta, ajoitusta ja johdonmukaisuutta, joita on vaikea rakentaa tyhjästä.`,
            de: `Wir würden ihn nicht als ersten Hund empfehlen. Ein ${name} erfordert Erfahrung, Timing und Konsequenz, die von Grund auf schwer aufzubauen sind.`,
            fr: `Nous ne le recommanderions pas comme premier chien. Un ${name} demande de l'expérience, du timing et de la cohérence, difficiles à acquérir à partir de zéro.`,
            nl: `We zouden het niet aanbevelen als eerste hond. Een ${name} vereist ervaring, timing en consistentie die moeilijk van de grond af op te bouwen zijn.`,
          },
          {
            en: `Possible for a determined first-time owner with good help — a trainer from week one, and realistic expectations.`,
            no: `Mulig for en målbevisst førstegangseier med god hjelp — en trener fra uke én, og realistiske forventninger.`,
            pl: `Możliwe dla zdeterminowanego początkującego z dobrym wsparciem — trener od pierwszego tygodnia i realistyczne oczekiwania.`,
            dk: `Muligt for en beslutsom førstegangs hundeejer med god hjælp — en træner fra uge ét og realistiske forventninger.`,
            se: `Möjligt för en beslutsam förstagångsägare med bra hjälp – en tränare från första veckan och realistiska förväntningar.`,
            fi: `Mahdollista päättäväiselle ensikertalaiselle hyvällä avustuksella – kouluttaja ensimmäisestä viikosta alkaen ja realistiset odotukset.`,
            de: `Möglich für einen entschlossenen Erstbesitzer mit guter Hilfe – ein Trainer ab der ersten Woche und realistische Erwartungen.`,
            fr: `Possible pour un propriétaire débutant déterminé avec une bonne aide – un dresseur dès la première semaine et des attentes réalistes.`,
            nl: `Mogelijk voor een vastberaden beginnende eigenaar met goede hulp – een trainer vanaf de eerste week en realistische verwachtingen.`,
          },
          {
            en: `A reasonable first dog if you prepare. Read up, book a course early, and keep the daily routine simple.`,
            no: `En rimelig første hund hvis du forbereder deg. Les deg opp, meld deg på kurs tidlig, og hold hverdagen enkel.`,
            pl: `Rozsądny pierwszy pies, jeśli się przygotujesz. Poczytaj, zapisz się wcześnie na kurs i trzymaj prostą codzienną rutynę.`,
            dk: `En rimelig første hund, hvis du forbereder dig. Læs op på det, book et kurs tidligt, og hold den daglige rutine enkel.`,
            se: `En rimlig första hund om du förbereder dig. Läs på, boka en kurs tidigt och håll den dagliga rutinen enkel.`,
            fi: `Kohtuullinen ensimmäinen koira, jos valmistaudut. Lue aiheesta, varaa kurssi ajoissa ja pidä päivittäinen rutiini yksinkertaisena.`,
            de: `Ein vernünftiger erster Hund, wenn Sie sich vorbereiten. Lesen Sie sich ein, buchen Sie frühzeitig einen Kurs und halten Sie die tägliche Routine einfach.`,
            fr: `Un premier chien raisonnable si vous vous préparez. Renseignez-vous, inscrivez-vous tôt à un cours et gardez une routine quotidienne simple.`,
            nl: `Een redelijke eerste hond als u zich voorbereidt. Lees u in, boek vroeg een cursus en houd de dagelijkse routine eenvoudig.`,
          },
          {
            en: `Yes — a ${name} is a forgiving first dog for most people who can give it time.`,
            no: `Ja — en ${name} er en overbærende første hund for de fleste som kan gi den tid.`,
            pl: `Tak — ${name} to wyrozumiały pierwszy pies dla większości osób, które mogą poświęcić mu czas.`,
            dk: `Ja — en ${name} er en tilgivende første hund for de fleste, der kan give den tid.`,
            se: `Ja — en ${name} är en förlåtande första hund för de flesta som kan ge den tid.`,
            fi: `Kyllä — ${name} on anteeksiantava ensimmäinen koira useimmille ihmisille, jotka voivat antaa sille aikaa.`,
            de: `Ja — ein ${name} ist ein nachsichtiger erster Hund für die meisten Menschen, die ihm Zeit geben können.`,
            fr: `Oui — un ${name} est un premier chien indulgent pour la plupart des gens qui peuvent lui consacrer du temps.`,
            nl: `Ja — een ${name} is een vergevingsgezinde eerste hond voor de meeste mensen die hem tijd kunnen geven.`,
          },
          {
            en: `Yes — one of the easier breeds to start with. It still needs training and exercise, but it tends to forgive beginners' mistakes.`,
            no: `Ja — en av de enklere rasene å starte med. Den trenger fortsatt trening og mosjon, men tåler nybegynnerfeil godt.`,
            pl: `Tak — jedna z łatwiejszych ras na start. Nadal potrzebuje treningu i ruchu, ale wybacza błędy początkującym.`,
            dk: `Ja — en af de nemmere racer at starte med. Den har stadig brug for træning og motion, men den har tendens til at tilgive begyndernes fejl.`,
            se: `Ja – en av de enklare raserna att börja med. Den behöver fortfarande träning och motion, men den tenderar att förlåta nybörjarmisstag.`,
            fi: `Kyllä — yksi helpoimmista roduista aloittaa. Se tarvitsee edelleen koulutusta ja liikuntaa, mutta se antaa yleensä anteeksi aloittelijoiden virheet.`,
            de: `Ja — eine der einfacheren Rassen für den Anfang. Sie braucht immer noch Training und Bewegung, aber sie verzeiht Anfängerfehler.`,
            fr: `Oui — l'une des races les plus faciles pour commencer. Elle a toujours besoin d'entraînement et d'exercice, mais elle a tendance à pardonner les erreurs des débutants.`,
            nl: `Ja — een van de makkelijkere rassen om mee te beginnen. Hij heeft nog steeds training en beweging nodig, maar hij vergeeft beginnersfouten.`,
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
            dk: `Omkring {h} timer ad gangen, når den er fuldt udvokset og gradvist trænet til det. Længere dage kræver en hundelufter, dagpleje eller nogen, der kommer forbi — og en hvalp har brug for langt kortere perioder i starten.`,
            se: `Cirka {h} timmar i sträck när den är fullvuxen och gradvis tränad för det. Längre dagar kräver en hundvakt, dagis eller någon som tittar in – och en valp behöver mycket kortare perioder till en början.`,
            fi: `Noin {h} tuntia kerrallaan, kun se on täysin kasvanut ja vähitellen siihen koulutettu. Pidemmät päivät vaativat koiranulkoiluttajaa, päivähoitoa tai jotakuta käymään – ja pentu tarvitsee aluksi paljon lyhyempiä aikoja.`,
            de: `Etwa {h} Stunden am Stück, sobald er ausgewachsen und schrittweise daran gewöhnt ist. Längere Tage erfordern einen Hundesitter, eine Tagesbetreuung oder jemanden, der vorbeikommt – und ein Welpe benötigt anfangs viel kürzere Zeiträume.`,
            fr: `Environ {h} heures d'affilée une fois complètement développé et progressivement entraîné pour cela. Les journées plus longues nécessitent un promeneur de chiens, une garderie ou quelqu'un qui passe – et un chiot a besoin de périodes beaucoup plus courtes au début.`,
            nl: `Ongeveer {h} uur achter elkaar zodra hij volgroeid is en er geleidelijk aan voor getraind is. Langere dagen vereisen een hondenuitlater, dagopvang of iemand die langskomt – en een puppy heeft in het begin veel kortere periodes nodig.`,
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
            dk: `Budgetter cirka €{lo}–{hi} om året til mad, rutinemæssig dyrlægepleje, forsikring, pelspleje og hverdagsudstyr. Land, størrelse og individuel sundhed påvirker dette tal en del, og et enkelt uheldigt år kan koste mere.`,
            se: `Budgettera cirka €{lo}–{hi} per år för mat, rutinmässig veterinärvård, försäkring, pälsvård och vardagsutrustning. Land, storlek och individuell hälsa påverkar den siffran en hel del, och ett enda olyckligt år kan kosta mer.`,
            fi: `Budjetoi noin €{lo}–{hi} vuodessa ruokaan, rutiininomaiseen eläinlääkärikäyntiin, vakuutukseen, turkinhoitoon ja arkivarusteisiin. Maa, koko ja yksilöllinen terveys vaikuttavat tähän lukuun melkoisesti, ja yksi epäonninen vuosi voi maksaa enemmän.`,
            de: `Rechnen Sie mit etwa €{lo}–{hi} pro Jahr für Futter, routinemäßige Tierarztversorgung, Versicherung, Fellpflege und alltägliche Ausrüstung. Land, Größe und individuelle Gesundheit beeinflussen diese Zahl erheblich, und ein einziges unglückliches Jahr kann mehr kosten.`,
            fr: `Budgettez environ €{lo}–{hi} par an pour la nourriture, les soins vétérinaires de routine, l'assurance, le toilettage et le matériel quotidien. Le pays, la taille et la santé individuelle font beaucoup varier ce chiffre, et une seule année malheureuse peut coûter plus cher.`,
            nl: `Budgetteer ongeveer €{lo}–{hi} per jaar voor voer, routine dierenartsbezoeken, verzekering, vachtverzorging en dagelijkse benodigdheden. Land, grootte en individuele gezondheid beïnvloeden dit cijfer aanzienlijk, en een enkel ongelukkig jaar kan meer kosten.`,
          },
          locale,
        ),
        { lo: breed.annualCost[0], hi: breed.annualCost[1] },
      ),
    },
  ];

  return items;
}
