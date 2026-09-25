import { pick } from "@/i18n";
import type { Locale } from "@/i18n";
import type { BreedTraits } from "@/data/breeds";
import type { UserProfile } from "./types";

/**
 * Turns the maths into plain sentences.
 *
 * Every line below is derived from one of the reader's own answers set against
 * one measurable characteristic of the dog. Nothing is generated, nothing is
 * guessed, and the trade-offs are shown with exactly the same prominence as
 * the strengths — a dog that scores well is still allowed to be hard work.
 */

export interface MatchInsight {
  /** The answer this line came from, e.g. "You said: a flat". */
  from: string;
  /** What that means for this dog. */
  text: string;
}

export interface MatchInsights {
  fits: MatchInsight[];
  tradeoffs: MatchInsight[];
}

const num = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

type Copy = Record<Locale, string>;
const s = (v: Copy) => pick(v);

/** One comparison between an answer and a characteristic. */
interface Rule {
  /** Skip entirely when this returns false. */
  when: (p: UserProfile) => boolean;
  from: Copy;
  /** True when the dog suits the answer. */
  good: (t: BreedTraits, p: UserProfile) => boolean;
  fit: Copy;
  tradeoff: Copy;
}

const RULES: Rule[] = [
  {
    when: () => true,
    from: {
      en: "How active your days are",
      no: "Hvor aktive dagene dine er",
      pl: "Jak aktywne są twoje dni",
      dk: "Hvor aktive dine dage er",
      se: "Hur aktiva dina dagar är",
      fi: "Kuinka aktiivisia päiväsi ovat",
      de: "Wie aktiv Ihre Tage sind",
      fr: "Le rythme de vos journées",
      nl: "Hoe actief uw dagen zijn",
    },
    good: (t, p) => Math.abs(t.exerciseNeeds - num(p["activity"], 2)) <= 1,
    fit: {
      en: "The amount of walking and running this dog needs lines up well with the days you described.",
      no: "Mengden gåing og løping denne hunden trenger passer godt med dagene du beskrev.",
      pl: "Ilość spacerów i biegania, jakiej potrzebuje ten pies, dobrze pasuje do dni, które opisałeś/aś.",
      dk: "Den mængde gåture og løb, hunden har brug for, passer fint til de dage, du beskrev.",
      se: "Mängden promenader och spring som den här hunden behöver stämmer fint med dagarna du beskrev.",
      fi: "Koiran lenkkeilyn ja juoksemisen tarve sopii hyvin kuvaamiisi päiviin.",
      de: "Wie viel dieser Hund laufen und rennen möchte, passt gut zu den Tagen, die Sie beschrieben haben.",
      fr: "La quantité de marche et de course dont ce chien a besoin correspond bien aux journées que vous avez décrites.",
      nl: "Hoeveel deze hond wil wandelen en rennen, sluit mooi aan bij de dagen die u beschreef.",
    },
    tradeoff: {
      en: "There's a gap between the exercise this dog needs and the pace of your days. That gap has to be closed by you, every single day, not just at weekends.",
      no: "Det er et gap mellom mosjonen denne hunden trenger og tempoet i dagene dine. Det gapet må du tette hver eneste dag, ikke bare i helgene.",
      pl: "Jest luka między aktywnością, jakiej potrzebuje ten pies, a tempem twoich dni. Tę lukę musisz wypełniać ty, codziennie, nie tylko w weekendy.",
      dk: "Der er et hul mellem den motion, hunden har brug for, og tempoet i dine dage. Det hul skal du lukke hver eneste dag, ikke kun i weekenden.",
      se: "Det finns ett glapp mellan den motion hunden behöver och tempot i dina dagar. Det glappet behöver du fylla varje dag, inte bara på helgerna.",
      fi: "Koiran liikunnan tarpeen ja päiviesi tahdin välillä on eroa. Sinun pitäisi kuroa se umpeen joka ikinen päivä, ei vain viikonloppuisin.",
      de: "Zwischen dem Bewegungsbedarf dieses Hundes und dem Tempo Ihrer Tage klafft eine Lücke. Die müssten Sie jeden Tag schließen, nicht nur am Wochenende.",
      fr: "Il y a un écart entre l’exercice dont ce chien a besoin et le rythme de vos journées. Cet écart, c’est à vous de le combler, chaque jour, pas seulement le week-end.",
      nl: "Er zit een gat tussen de beweging die deze hond nodig heeft en het tempo van uw dagen. Dat gat moet u elke dag dichten, niet alleen in het weekend.",
    },
  },
  {
    when: (p) => p["home"] === "apartment",
    from: {
      en: "You live in a flat",
      no: "Du bor i leilighet",
      pl: "Mieszkasz w mieszkaniu",
      dk: "Du bor i lejlighed",
      se: "Du bor i lägenhet",
      fi: "Asut kerrostalossa",
      de: "Sie wohnen in einer Wohnung",
      fr: "Vous vivez en appartement",
      nl: "U woont in een appartement",
    },
    good: (t) => t.apartmentSuitability >= 4 && t.barking <= 3,
    fit: {
      en: "They settle well in a flat and aren't especially vocal, which matters when you share walls.",
      no: "Den faller godt til ro i leilighet og er ikke spesielt høylytt, noe som betyr mye når du deler vegger.",
      pl: "Dobrze się wycisza w mieszkaniu i nie jest szczególnie głośny, co ma duże znaczenie, gdy dzielisz ściany z sąsiadami.",
      dk: "Den falder godt til ro i en lejlighed og er ikke særlig højrøstet, og det betyder noget, når man deler vægge.",
      se: "Den landar fint i en lägenhet och är inte särskilt högljudd, vilket spelar roll när man delar väggar.",
      fi: "Se asettuu hyvin kerrostaloon eikä ole erityisen äänekäs, mikä on tärkeää, kun seinät ovat yhteiset.",
      de: "Er kommt in einer Wohnung gut zur Ruhe und ist nicht besonders laut, was zählt, wenn man Wände teilt.",
      fr: "Il se pose bien en appartement et n’est pas particulièrement bruyant, ce qui compte quand on partage des murs.",
      nl: "Hij komt goed tot rust in een appartement en is niet bijzonder luidruchtig, en dat telt als u muren deelt.",
    },
    tradeoff: {
      en: "Flat living asks a lot of this one — either the space, the noise or the need to get out often will be a daily consideration.",
      no: "Leilighetsliv krever mye av denne — enten plassen, lyden eller behovet for å komme ut ofte blir en daglig vurdering.",
      pl: "Życie w mieszkaniu wymaga od niego wiele — albo przestrzeń, albo hałas, albo potrzeba częstego wychodzenia będą codzienną sprawą do przemyślenia.",
      dk: "Lejlighedsliv kræver meget af denne — pladsen, lyden eller behovet for at komme ofte ud bliver noget, du skal tænke på hver dag.",
      se: "Lägenhetsliv kräver mycket av den här — utrymmet, ljudet eller behovet av att komma ut ofta blir något att tänka på varje dag.",
      fi: "Kerrostaloelämä vaatii tältä koiralta paljon — tila, ääni tai tarve päästä usein ulos on jokapäiväinen asia mietittäväksi.",
      de: "Das Leben in der Wohnung verlangt diesem Hund einiges ab — Platz, Lautstärke oder der Drang, oft hinauszukommen, werden Sie täglich beschäftigen.",
      fr: "La vie en appartement lui demande beaucoup — l’espace, le bruit ou le besoin de sortir souvent seront une question de chaque jour.",
      nl: "Wonen in een appartement vraagt veel van deze hond — de ruimte, het geluid of de behoefte om vaak naar buiten te gaan wordt een dagelijkse afweging.",
    },
  },
  {
    when: (p) => num(p["alone"], 0) >= 4,
    from: {
      en: "Hours alone on a normal day",
      no: "Timer alene på en vanlig dag",
      pl: "Godziny same w zwykły dzień",
      dk: "Timer alene på en almindelig dag",
      se: "Timmar ensam en vanlig dag",
      fi: "Tunnit yksin tavallisena päivänä",
      de: "Stunden allein an einem normalen Tag",
      fr: "Heures seul un jour ordinaire",
      nl: "Uren alleen op een gewone dag",
    },
    good: (t, p) => t.aloneTolerance >= (num(p["alone"], 0) >= 6 ? 4 : 3),
    fit: {
      en: "They cope reasonably well with quiet hours at home, as long as the day around them is full enough.",
      no: "Den takler rolige timer hjemme ganske godt, så lenge resten av dagen er innholdsrik nok.",
      pl: "Radzi sobie całkiem dobrze ze spokojnymi godzinami w domu, o ile reszta dnia jest wystarczająco wypełniona.",
      dk: "Den klarer rolige timer derhjemme ret godt, så længe resten af dagen er fyldt nok.",
      se: "Den klarar lugna timmar hemma ganska bra, så länge resten av dagen är tillräckligt innehållsrik.",
      fi: "Se pärjää kotona hiljaisina tunteina melko hyvin, kunhan päivän muut hetket ovat riittävän täysiä.",
      de: "Ruhige Stunden zu Hause verkraftet er recht gut, solange der Rest des Tages ausgefüllt genug ist.",
      fr: "Il gère plutôt bien les heures calmes à la maison, tant que le reste de la journée est assez rempli.",
      nl: "Rustige uren thuis kan hij redelijk goed aan, zolang de rest van de dag voldoende gevuld is.",
    },
    tradeoff: {
      en: "Long days on their own are genuinely hard for this dog. You'd need help — a walker, day care or a neighbour — not just good intentions.",
      no: "Lange dager alene er reelt vanskelig for denne hunden. Du ville trengt hjelp — en turgåer, dagpass eller en nabo — ikke bare gode intensjoner.",
      pl: "Długie dni w samotności są dla tego psa naprawdę trudne. Potrzebna byłaby pomoc — osoba wyprowadzająca psy, opieka dzienna albo sąsiad — a nie tylko dobre chęci.",
      dk: "Lange dage alene er virkelig svære for denne hund. Du ville få brug for hjælp — en hundelufter, en hundepasning eller en nabo — ikke bare gode intentioner.",
      se: "Långa dagar ensam är verkligen svåra för den här hunden. Du skulle behöva hjälp — en hundrastare, hunddagis eller en granne — inte bara goda föresatser.",
      fi: "Pitkät päivät yksin ovat tälle koiralle todella vaikeita. Tarvitsisit apua — ulkoiluttajan, koirapäiväkodin tai naapurin — et pelkkiä hyviä aikeita.",
      de: "Lange Tage allein fallen diesem Hund wirklich schwer. Sie bräuchten Unterstützung — einen Gassigeher, eine Hundetagesstätte oder Nachbarn — nicht nur gute Vorsätze.",
      fr: "Les longues journées seul sont vraiment difficiles pour ce chien. Il vous faudrait de l’aide — un promeneur, une garderie ou un voisin — pas seulement de bonnes intentions.",
      nl: "Lange dagen alleen zijn echt zwaar voor deze hond. U zou hulp nodig hebben — een uitlaatservice, hondenopvang of een buur — niet alleen goede voornemens.",
    },
  },
  {
    when: (p) => p["children"] === "young" || p["children"] === "older",
    from: {
      en: "Children at home",
      no: "Barn hjemme",
      pl: "Dzieci w domu",
      dk: "Børn i hjemmet",
      se: "Barn hemma",
      fi: "Lapsia kotona",
      de: "Kinder im Haushalt",
      fr: "Des enfants à la maison",
      nl: "Kinderen in huis",
    },
    good: (t, p) => t.goodWithChildren >= (p["children"] === "young" ? 5 : 4),
    fit: {
      en: "Patient and steady with children, which is the part that matters most in a busy house.",
      no: "Tålmodig og stødig med barn, som er det viktigste i et travelt hjem.",
      pl: "Cierpliwy i opanowany przy dzieciach, a to liczy się najbardziej w zapracowanym domu.",
      dk: "Tålmodig og stabil med børn, og det er det, der betyder mest i et travlt hjem.",
      se: "Tålmodig och stabil med barn, och det är det som betyder mest i ett livligt hem.",
      fi: "Kärsivällinen ja tasainen lasten kanssa, mikä on vilkkaassa kodissa kaikkein tärkeintä.",
      de: "Geduldig und ausgeglichen mit Kindern, und genau darauf kommt es in einem lebhaften Haushalt an.",
      fr: "Patient et posé avec les enfants, ce qui compte le plus dans une maison animée.",
      nl: "Geduldig en stabiel met kinderen, en dat is wat het meest telt in een druk huis.",
    },
    tradeoff: {
      en: "With children in the house this one needs more supervision and more structure than most. That's a real, daily commitment.",
      no: "Med barn i huset trenger denne mer tilsyn og mer struktur enn de fleste. Det er en reell, daglig forpliktelse.",
      pl: "Przy dzieciach w domu ten pies potrzebuje więcej nadzoru i struktury niż większość. To realne, codzienne zobowiązanie.",
      dk: "Med børn i huset har denne brug for mere opsyn og mere struktur end de fleste. Det er en reel, daglig forpligtelse.",
      se: "Med barn i huset behöver den här mer tillsyn och mer struktur än de flesta. Det är ett verkligt, dagligt åtagande.",
      fi: "Lapsiperheessä tämä koira tarvitsee enemmän valvontaa ja rakennetta kuin useimmat. Se on todellinen, päivittäinen sitoumus.",
      de: "Mit Kindern im Haus braucht dieser Hund mehr Aufsicht und Struktur als die meisten. Das ist eine echte, tägliche Verpflichtung.",
      fr: "Avec des enfants à la maison, celui-ci demande plus de surveillance et de cadre que la plupart. C’est un engagement réel, au quotidien.",
      nl: "Met kinderen in huis heeft deze hond meer toezicht en structuur nodig dan de meeste. Dat is een echte, dagelijkse verplichting.",
    },
  },
  {
    when: (p) => p["pets"] === "dog" || p["pets"] === "cat" || p["pets"] === "small",
    from: {
      en: "Other animals at home",
      no: "Andre dyr hjemme",
      pl: "Inne zwierzęta w domu",
      dk: "Andre dyr i hjemmet",
      se: "Andra djur hemma",
      fi: "Muita eläimiä kotona",
      de: "Andere Tiere im Haushalt",
      fr: "D’autres animaux à la maison",
      nl: "Andere dieren in huis",
    },
    good: (t, p) => (p["pets"] === "dog" ? t.goodWithDogs >= 4 : t.goodWithPets >= 4),
    fit: {
      en: "Usually easy-going with the animals already living with you.",
      no: "Som regel grei med dyrene som allerede bor hos deg.",
      pl: "Zazwyczaj dobrze dogaduje się ze zwierzętami, które już mieszkają w twoim domu.",
      dk: "Som regel afslappet med de dyr, der allerede bor hos dig.",
      se: "Oftast avslappnad med de djur som redan bor hos dig.",
      fi: "Yleensä leppoisa niiden eläinten kanssa, jotka jo asuvat kanssasi.",
      de: "Meist entspannt mit den Tieren, die schon bei Ihnen leben.",
      fr: "Généralement à l’aise avec les animaux qui vivent déjà chez vous.",
      nl: "Meestal relaxed met de dieren die al bij u wonen.",
    },
    tradeoff: {
      en: "Introductions would need to be slow and carefully managed, and some households never get past the chase instinct.",
      no: "Introduksjoner må gjøres langsomt og styres nøye, og noen hjem kommer aldri forbi jaktlysten.",
      pl: "Wprowadzanie musiałoby przebiegać powoli i pod ścisłą kontrolą, a w niektórych domach instynkt łowiecki nigdy nie ustępuje.",
      dk: "Introduktioner skal ske langsomt og styres med omhu, og nogle hjem kommer aldrig forbi jagtinstinktet.",
      se: "Introduktionerna behöver gå långsamt och skötas varsamt, och en del hem kommer aldrig förbi jaktinstinkten.",
      fi: "Tutustuttaminen pitäisi tehdä hitaasti ja huolella, eikä kaikissa kodeissa koskaan päästä saalisvietin ohi.",
      de: "Das Kennenlernen müsste langsam und sorgfältig begleitet werden, und manche Haushalte kommen nie ganz am Jagdtrieb vorbei.",
      fr: "Les présentations devraient être lentes et bien encadrées, et certains foyers ne dépassent jamais l’instinct de poursuite.",
      nl: "Kennismaken zou langzaam en zorgvuldig moeten gaan, en sommige huishoudens komen nooit voorbij het jachtinstinct.",
    },
  },
  {
    when: (p) => p["experience"] === "first",
    from: {
      en: "This would be your first dog",
      no: "Dette blir din første hund",
      pl: "To byłby twój pierwszy pies",
      dk: "Det bliver din første hund",
      se: "Det här blir din första hund",
      fi: "Tämä olisi ensimmäinen koirasi",
      de: "Es wäre Ihr erster Hund",
      fr: "Ce serait votre premier chien",
      nl: "Dit zou uw eerste hond zijn",
    },
    good: (t) => t.firstTimeSuitability >= 4 && t.trainability >= 4,
    fit: {
      en: "Forgiving of the mistakes every first-time owner makes, and quick to pick up what you're asking.",
      no: "Tilgivende for feilene alle førstegangseiere gjør, og rask til å skjønne hva du ber om.",
      pl: "Wyrozumiały wobec błędów, które popełnia każdy początkujący właściciel, i szybko pojmuje, o co go prosisz.",
      dk: "Tilgivende over for de fejl, alle førstegangsejere laver, og hurtig til at forstå, hvad du beder om.",
      se: "Förlåtande mot de misstag alla förstagångsägare gör, och snabb på att förstå vad du ber om.",
      fi: "Antaa anteeksi virheet, joita jokainen ensikertalainen tekee, ja oppii nopeasti, mitä pyydät.",
      de: "Verzeiht die Fehler, die alle Ersthundehalter machen, und versteht schnell, worum Sie ihn bitten.",
      fr: "Indulgent envers les erreurs que fait tout premier maître, et prompt à comprendre ce que vous lui demandez.",
      nl: "Vergevingsgezind voor de fouten die elke beginnende eigenaar maakt, en snel van begrip.",
    },
    tradeoff: {
      en: "A demanding first dog. Not impossible — but plan on proper training help from the start rather than working it out alone.",
      no: "En krevende første hund. Ikke umulig — men regn med ordentlig treningshjelp fra start, ikke å finne ut av det alene.",
      pl: "Wymagający pierwszy pies. Nie niemożliwe — ale licz się z tym, że od początku potrzebna będzie porządna pomoc trenerska, a nie samodzielne dochodzenie do wszystkiego.",
      dk: "En krævende første hund. Ikke umulig — men regn med ordentlig træningshjælp fra starten i stedet for at finde ud af det selv.",
      se: "En krävande första hund. Inte omöjligt — men räkna med ordentlig träningshjälp från början i stället för att lösa det på egen hand.",
      fi: "Vaativa ensimmäinen koira. Ei mahdoton — mutta varaudu hyvään koulutusapuun alusta asti sen sijaan, että selvittäisit kaiken yksin.",
      de: "Ein anspruchsvoller erster Hund. Nicht unmöglich — aber planen Sie von Anfang an gute Trainingshilfe ein, statt alles allein herauszufinden.",
      fr: "Un premier chien exigeant. Pas impossible — mais prévoyez une vraie aide à l’éducation dès le départ plutôt que de tout découvrir seul.",
      nl: "Een veeleisende eerste hond. Niet onmogelijk — maar reken vanaf het begin op goede trainingshulp in plaats van het alleen uit te zoeken.",
    },
  },
  {
    when: (p) => p["shedding"] === "must-low" || p["shedding"] === "prefer-low",
    from: {
      en: "How much shedding you can live with",
      no: "Hvor mye pelsfelling du tåler",
      pl: "Ile linienia jesteś w stanie znieść",
      dk: "Hvor meget fældning du kan leve med",
      se: "Hur mycket fällning du kan leva med",
      fi: "Kuinka paljon karvaa siedät",
      de: "Wie viele Haare Sie in Kauf nehmen",
      fr: "Les poils que vous êtes prêt à tolérer",
      nl: "Hoeveel verharen u accepteert",
    },
    good: (t, p) => t.shedding <= (p["shedding"] === "must-low" ? 2 : 3),
    fit: {
      en: "Leaves comparatively little hair around the house.",
      no: "Legger igjen forholdsvis lite hår i huset.",
      pl: "Zostawia w domu stosunkowo mało sierści.",
      dk: "Efterlader forholdsvis få hår i huset.",
      se: "Lämnar förhållandevis lite hår efter sig i hemmet.",
      fi: "Jättää kotiin verrattain vähän karvaa.",
      de: "Hinterlässt vergleichsweise wenige Haare im Haus.",
      fr: "Laisse relativement peu de poils dans la maison.",
      nl: "Laat relatief weinig haar achter in huis.",
    },
    tradeoff: {
      en: "There will be hair — on clothes, on furniture, in the car. No amount of brushing removes that entirely.",
      no: "Det blir hår — på klær, på møbler, i bilen. Ingen mengde børsting fjerner det helt.",
      pl: "Sierści będzie sporo — na ubraniach, na meblach, w samochodzie. Żadne szczotkowanie nie usunie jej całkowicie.",
      dk: "Der kommer hår — på tøjet, på møblerne, i bilen. Ingen mængde børstning fjerner det helt.",
      se: "Det blir hår — på kläderna, på möblerna, i bilen. Ingen mängd borstning tar bort det helt.",
      fi: "Karvaa tulee — vaatteisiin, huonekaluihin, autoon. Mikään määrä harjausta ei poista sitä kokonaan.",
      de: "Es wird Haare geben — auf der Kleidung, auf den Möbeln, im Auto. Kein Bürsten der Welt ändert das ganz.",
      fr: "Il y aura des poils — sur les vêtements, sur les meubles, dans la voiture. Aucun brossage ne l’évitera complètement.",
      nl: "Er komt haar — op kleding, op meubels, in de auto. Geen enkele hoeveelheid borstelen haalt dat helemaal weg.",
    },
  },
  {
    when: (p) => p["grooming"] === "minimal" || p["grooming"] === "moderate",
    from: {
      en: "Time you want to spend on coat care",
      no: "Tid du vil bruke på pelsstell",
      pl: "Czas, jaki chcesz poświęcać na pielęgnację sierści",
      dk: "Tid du vil bruge på pelspleje",
      se: "Tid du vill lägga på pälsvård",
      fi: "Aika, jonka haluat käyttää turkinhoitoon",
      de: "Zeit, die Sie in Fellpflege stecken möchten",
      fr: "Le temps que vous voulez consacrer au pelage",
      nl: "Tijd die u aan vachtverzorging wilt besteden",
    },
    good: (t, p) => t.grooming <= (p["grooming"] === "minimal" ? 2 : 3),
    fit: {
      en: "The coat is straightforward — a brush now and then keeps it in good order.",
      no: "Pelsen er enkel — en børste innimellom holder den i god stand.",
      pl: "Sierść jest prosta w pielęgnacji — szczotkowanie od czasu do czasu utrzymuje ją w dobrym stanie.",
      dk: "Pelsen er ligetil — en børste en gang imellem holder den i god stand.",
      se: "Pälsen är enkel — en borstning då och då håller den i fint skick.",
      fi: "Turkki on helppo — harjaus silloin tällöin pitää sen hyvässä kunnossa.",
      de: "Das Fell ist unkompliziert — ab und zu bürsten hält es in gutem Zustand.",
      fr: "Le pelage est simple — un coup de brosse de temps en temps suffit à le garder en bon état.",
      nl: "De vacht is eenvoudig — af en toe borstelen houdt hem netjes.",
    },
    tradeoff: {
      en: "The coat needs regular work, and skipping it doesn't just look untidy — it becomes uncomfortable for the dog and costly at the groomer.",
      no: "Pelsen krever jevnlig arbeid, og å hoppe over det ser ikke bare uryddig ut — det blir ubehagelig for hunden og dyrt hos frisøren.",
      pl: "Sierść wymaga regularnej pracy, a pomijanie tego nie tylko wygląda niechlujnie — staje się niewygodne dla psa i kosztowne u groomera.",
      dk: "Pelsen kræver jævnligt arbejde, og springer du det over, ser det ikke bare rodet ud — det bliver ubehageligt for hunden og dyrt hos frisøren.",
      se: "Pälsen kräver regelbundet arbete, och hoppar du över det ser det inte bara stökigt ut — det blir obekvämt för hunden och dyrt hos frisören.",
      fi: "Turkki vaatii säännöllistä hoitoa, ja jos sen laiminlyö, se ei vain näytä siistimättömältä — se on koiralle epämukavaa ja trimmaajalla kallista.",
      de: "Das Fell braucht regelmäßige Arbeit, und wer sie auslässt, hat nicht nur einen zerzausten Hund — es wird unangenehm für ihn und teuer beim Hundefriseur.",
      fr: "Le pelage demande un entretien régulier, et le négliger n’est pas qu’une question d’allure — cela devient inconfortable pour le chien et coûteux chez le toiletteur.",
      nl: "De vacht vraagt regelmatig werk, en overslaan ziet er niet alleen slordig uit — het wordt oncomfortabel voor de hond en duur bij de trimmer.",
    },
  },
  {
    when: (p) => p["physical"] === "light" || p["physical"] === "moderate",
    from: {
      en: "What you can manage physically",
      no: "Hva du klarer fysisk",
      pl: "Co jesteś w stanie unieść fizycznie",
      dk: "Hvad du kan klare fysisk",
      se: "Vad du orkar fysiskt",
      fi: "Mihin fyysisesti pystyt",
      de: "Was Sie körperlich bewältigen können",
      fr: "Ce que vous pouvez gérer physiquement",
      nl: "Wat u fysiek aankunt",
    },
    good: (t, p) => t.strengthRequired <= (p["physical"] === "light" ? 2 : 3),
    fit: {
      en: "Manageable on the lead without needing much strength.",
      no: "Håndterbar i bånd uten at det krever mye styrke.",
      pl: "Łatwy do prowadzenia na smyczy, bez potrzeby dużej siły.",
      dk: "Til at styre i snor uden at det kræver mange kræfter.",
      se: "Lätt att hantera i koppel utan att det kräver mycket styrka.",
      fi: "Helppo hallita hihnassa ilman suuria voimia.",
      de: "An der Leine gut zu führen, ohne viel Kraft zu brauchen.",
      fr: "Facile à tenir en laisse sans avoir besoin de beaucoup de force.",
      nl: "Goed te hanteren aan de lijn zonder veel kracht.",
    },
    tradeoff: {
      en: "A strong dog on the other end of the lead. Loose-lead work would need to be solid before it becomes comfortable.",
      no: "En sterk hund i andre enden av båndet. Båndtrening må sitte godt før det blir behagelig.",
      pl: "Silny pies na drugim końcu smyczy. Nauka chodzenia na luźnej smyczy musi być solidna, zanim stanie się to komfortowe.",
      dk: "En stærk hund i den anden ende af snoren. Linetræningen skal sidde godt, før det bliver behageligt.",
      se: "En stark hund i andra änden av kopplet. Koppelträningen behöver sitta ordentligt innan det blir bekvämt.",
      fi: "Vahva koira hihnan toisessa päässä. Löysän hihnan taidon pitää olla vankka, ennen kuin lenkit tuntuvat mukavilta.",
      de: "Ein kräftiger Hund am anderen Ende der Leine. Die Leinenführigkeit muss sitzen, bevor es angenehm wird.",
      fr: "Un chien puissant au bout de la laisse. La marche en laisse détendue devra être bien acquise avant que ce soit confortable.",
      nl: "Een sterke hond aan de andere kant van de lijn. Losjes aan de lijn lopen moet goed zitten voordat het prettig wordt.",
    },
  },
  {
    when: (p) => p["energyLimit"] === "no" || p["energyLimit"] === "maybe",
    from: {
      en: "How much energy you can handle",
      no: "Hvor mye energi du takler",
      pl: "Ile energii jesteś w stanie znieść",
      dk: "Hvor meget energi du kan rumme",
      se: "Hur mycket energi du klarar",
      fi: "Kuinka paljon energiaa jaksat",
      de: "Wie viel Energie Sie auffangen können",
      fr: "L’énergie que vous pouvez suivre",
      nl: "Hoeveel energie u aankunt",
    },
    good: (t, p) => t.energy <= (p["energyLimit"] === "no" ? 2 : 4),
    fit: {
      en: "Calm enough indoors to fit the pace you said you needed.",
      no: "Rolig nok innendørs til å passe tempoet du sa du trengte.",
      pl: "Wystarczająco spokojny w domu, by pasować do tempa, jakiego potrzebowałeś/aś.",
      dk: "Rolig nok indendørs til at passe til det tempo, du sagde, du havde brug for.",
      se: "Lugn nog inomhus för att passa det tempo du sa att du behövde.",
      fi: "Sisällä tarpeeksi rauhallinen sopiakseen tahtiin, jota kerroit tarvitsevasi.",
      de: "Drinnen ruhig genug für das Tempo, das Sie sich gewünscht haben.",
      fr: "Assez calme à l’intérieur pour s’accorder au rythme que vous souhaitiez.",
      nl: "Binnen rustig genoeg voor het tempo dat u zei nodig te hebben.",
    },
    tradeoff: {
      en: "This is a high-energy dog. Under-exercised, that energy turns into chewing, barking and restlessness indoors.",
      no: "Dette er en hund med mye energi. Med for lite mosjon blir energien til tygging, bjeffing og uro innendørs.",
      pl: "To pies o dużej energii. Przy zbyt małej dawce ruchu ta energia zamienia się w gryzienie, szczekanie i niepokój w domu.",
      dk: "Det er en hund med meget energi. Får den for lidt motion, bliver energien til gnaven, gøen og uro indendørs.",
      se: "Det här är en hund med mycket energi. Får den för lite motion blir energin till tuggande, skällande och rastlöshet inomhus.",
      fi: "Tämä on energinen koira. Liian vähällä liikunnalla energia purkautuu sisällä pureskeluna, haukkumisena ja levottomuutena.",
      de: "Das ist ein Hund mit viel Energie. Zu wenig ausgelastet, wird daraus drinnen Kauen, Bellen und Unruhe.",
      fr: "C’est un chien très énergique. Sans assez d’exercice, cette énergie devient mâchonnements, aboiements et agitation à l’intérieur.",
      nl: "Dit is een hond met veel energie. Met te weinig beweging wordt die energie binnen knagen, blaffen en onrust.",
    },
  },
  {
    when: (p) => Boolean(p["temperament"]),
    from: {
      en: "The temperament you were hoping for",
      no: "Temperamentet du håpet på",
      pl: "Temperament, na jaki liczyłeś/aś",
      dk: "Det temperament, du håbede på",
      se: "Temperamentet du hoppades på",
      fi: "Luonne, jota toivoit",
      de: "Das Wesen, das Sie sich gewünscht haben",
      fr: "Le tempérament que vous espériez",
      nl: "Het karakter waarop u hoopte",
    },
    good: (t, p) => {
      const want = p["temperament"];
      if (want === "calm") return t.energy <= 3;
      if (want === "affectionate") return t.affection >= 4;
      if (want === "playful") return t.energy >= 3 && t.affection >= 3;
      if (want === "independent") return t.independence >= 4;
      return true;
    },
    fit: {
      en: "Their everyday character is close to what you said you were looking for.",
      no: "Hverdagskarakteren deres ligger nær det du sa du så etter.",
      pl: "Ich codzienny charakter jest bliski temu, czego szukałeś/aś.",
      dk: "Dens hverdagskarakter ligger tæt på det, du sagde, du ledte efter.",
      se: "Dess vardagliga karaktär ligger nära det du sa att du letade efter.",
      fi: "Sen arkiluonne on lähellä sitä, mitä kerroit etsiväsi.",
      de: "Sein Alltagswesen liegt nah an dem, was Sie gesucht haben.",
      fr: "Son caractère au quotidien est proche de ce que vous cherchiez.",
      nl: "Zijn dagelijkse karakter ligt dicht bij wat u zocht.",
    },
    tradeoff: {
      en: "Their natural character sits a little away from what you described. Not wrong — just something to meet in person before deciding.",
      no: "Karakteren deres ligger litt unna det du beskrev. Ikke feil — bare noe du bør møte i virkeligheten før du bestemmer deg.",
      pl: "Ich naturalny charakter trochę odbiega od tego, co opisałeś/aś. Nie błąd — po prostu coś, co warto sprawdzić osobiście przed decyzją.",
      dk: "Dens naturlige karakter ligger lidt fra det, du beskrev. Ikke forkert — bare noget, du bør møde i virkeligheden, før du beslutter dig.",
      se: "Dess naturliga karaktär ligger en bit ifrån det du beskrev. Inte fel — bara något att möta i verkligheten innan du bestämmer dig.",
      fi: "Sen luontainen luonne poikkeaa hieman kuvaamastasi. Ei väärin — vain jotain, mihin kannattaa tutustua livenä ennen päätöstä.",
      de: "Sein natürliches Wesen liegt etwas neben dem, was Sie beschrieben haben. Nicht falsch — nur etwas, das Sie vor der Entscheidung persönlich erleben sollten.",
      fr: "Son caractère naturel s’éloigne un peu de ce que vous avez décrit. Rien de rédhibitoire — simplement quelque chose à découvrir en vrai avant de décider.",
      nl: "Zijn natuurlijke karakter wijkt wat af van wat u beschreef. Niet verkeerd — gewoon iets om in het echt te ervaren voordat u beslist.",
    },
  },
  {
    when: (p) => Boolean(p["companionship"]) && p["companionship"] !== "family",
    from: {
      en: "What you want from the company",
      no: "Hva du ønsker av selskapet",
      pl: "Czego oczekujesz od towarzystwa psa",
      dk: "Hvad du ønsker dig af selskabet",
      se: "Vad du vill ha av sällskapet",
      fi: "Mitä toivot seuralta",
      de: "Was Sie sich von der Gesellschaft wünschen",
      fr: "Ce que vous attendez de sa compagnie",
      nl: "Wat u van het gezelschap verwacht",
    },
    good: (t, p) => {
      const goal = p["companionship"];
      if (goal === "calm-company") return t.energy <= 3 && t.affection >= 4;
      if (goal === "motivation") return t.energy >= 3 && t.affection >= 4;
      if (goal === "active") return t.exerciseNeeds >= 4;
      return true;
    },
    fit: {
      en: "The kind of company you described is exactly what this dog tends to offer.",
      no: "Den typen selskap du beskrev er nettopp det denne hunden pleier å gi.",
      pl: "Ten rodzaj towarzystwa, który opisałeś/aś, to dokładnie to, co zwykle daje ten pies.",
      dk: "Den slags selskab, du beskrev, er præcis det, denne hund plejer at give.",
      se: "Den sortens sällskap du beskrev är precis vad den här hunden brukar ge.",
      fi: "Kuvaamasi kaltainen seura on juuri sitä, mitä tämä koira yleensä tarjoaa.",
      de: "Genau die Art von Gesellschaft, die Sie beschrieben haben, schenkt dieser Hund meist.",
      fr: "Le genre de compagnie que vous avez décrit, c’est exactement ce que ce chien offre en général.",
      nl: "Het soort gezelschap dat u beschreef, is precies wat deze hond meestal biedt.",
    },
    tradeoff: {
      en: "You'd get good company — just a different sort from the one you pictured.",
      no: "Du får godt selskap — bare av en litt annen type enn den du så for deg.",
      pl: "Dostaniesz dobre towarzystwo — tylko trochę innego rodzaju, niż sobie wyobrażałeś/aś.",
      dk: "Du får godt selskab — bare en lidt anden slags end den, du forestillede dig.",
      se: "Du får fint sällskap — bara av ett lite annat slag än det du föreställde dig.",
      fi: "Saisit hyvää seuraa — vain vähän erilaista kuin kuvittelit.",
      de: "Sie bekämen gute Gesellschaft — nur eine etwas andere als die, die Sie sich vorgestellt haben.",
      fr: "Vous auriez une belle compagnie — simplement d’un autre genre que celle que vous imaginiez.",
      nl: "U krijgt fijn gezelschap — alleen van een iets ander soort dan u zich voorstelde.",
    },
  },
  {
    when: (p) => p["allergy"] === "mild" || p["allergy"] === "significant",
    from: {
      en: "Allergy in the household",
      no: "Allergi i husstanden",
      pl: "Alergia w gospodarstwie domowym",
      dk: "Allergi i husstanden",
      se: "Allergi i hushållet",
      fi: "Allergia taloudessa",
      de: "Allergie im Haushalt",
      fr: "Allergie dans le foyer",
      nl: "Allergie in het huishouden",
    },
    good: (t, p) => t.shedding <= (p["allergy"] === "significant" ? 2 : 3) && t.drooling <= 3,
    fit: {
      en: "Lighter shedding and little drool make for an easier starting point — though no dog is allergy-free.",
      no: "Lite felling og lite sikkel gir et enklere utgangspunkt — men ingen hund er allergivennlig i seg selv.",
      pl: "Mniejsze linienie i mniej ślinienia dają łatwiejszy punkt wyjścia — ale żaden pies nie jest w pełni hipoalergiczny.",
      dk: "Mindre fældning og lidt savl giver et lettere udgangspunkt — men ingen hund er allergifri.",
      se: "Mindre fällning och lite dregel ger en enklare utgångspunkt — men ingen hund är allergifri.",
      fi: "Vähäisempi karvanlähtö ja vähäinen kuolaaminen ovat helpompi lähtökohta — mutta mikään koira ei ole allergiavapaa.",
      de: "Weniger Haaren und wenig Sabbern sind ein leichterer Ausgangspunkt — allergiefrei ist aber kein Hund.",
      fr: "Moins de poils et peu de bave offrent un meilleur point de départ — même si aucun chien n’est sans allergènes.",
      nl: "Minder verharen en weinig kwijl maken het beginpunt makkelijker — al is geen enkele hond allergievrij.",
    },
    tradeoff: {
      en: "Heavier shedding is a difficult starting point where someone reacts to dogs. Speak to an allergy specialist before you decide.",
      no: "Mye felling er et vanskelig utgangspunkt når noen reagerer på hund. Snakk med en allergispesialist før du bestemmer deg.",
      pl: "Duże linienie to trudny punkt wyjścia, gdy ktoś reaguje na psy. Porozmawiaj ze specjalistą od alergii, zanim podejmiesz decyzję.",
      dk: "Meget fældning er et svært udgangspunkt, når nogen reagerer på hunde. Tal med en allergispecialist, før du beslutter dig.",
      se: "Mycket fällning är en svår utgångspunkt när någon reagerar på hundar. Prata med en allergispecialist innan du bestämmer dig.",
      fi: "Runsas karvanlähtö on vaikea lähtökohta, jos joku reagoi koiriin. Keskustele allergialääkärin kanssa ennen päätöstä.",
      de: "Starkes Haaren ist ein schwieriger Ausgangspunkt, wenn jemand auf Hunde reagiert. Sprechen Sie vor der Entscheidung mit einem Allergologen.",
      fr: "Une perte de poils importante est un point de départ difficile quand quelqu’un réagit aux chiens. Parlez-en à un allergologue avant de décider.",
      nl: "Veel verharen is een lastig beginpunt als iemand op honden reageert. Praat met een allergiespecialist voordat u beslist.",
    },
  },
  {
    when: (p) => p["wellbeing"] === "important" || p["wellbeing"] === "very",
    from: {
      en: "Company for your wellbeing",
      no: "Selskap for ditt velvære",
      pl: "Towarzystwo dla twojego dobrostanu",
      dk: "Selskab for dit velvære",
      se: "Sällskap för ditt välmående",
      fi: "Seuraa hyvinvointisi tueksi",
      de: "Gesellschaft für Ihr Wohlbefinden",
      fr: "Une compagnie pour votre bien-être",
      nl: "Gezelschap voor uw welzijn",
    },
    good: (t) => t.affection >= 4 && t.sociability >= 3 && t.energy <= 4,
    fit: {
      en: "Affectionate, people-oriented and steady — the qualities that make a dog easy to be around on a hard day.",
      no: "Kjærlig, menneskeorientert og stødig — egenskapene som gjør en hund lett å ha rundt seg på en tung dag.",
      pl: "Czuły, zorientowany na ludzi i stabilny emocjonalnie — cechy, które sprawiają, że łatwo mieć go przy sobie w trudny dzień.",
      dk: "Kærlig, menneskeorienteret og stabil — de egenskaber, der gør en hund let at være sammen med på en svær dag.",
      se: "Tillgiven, människoorienterad och stabil — egenskaperna som gör en hund lätt att ha nära en tung dag.",
      fi: "Hellä, ihmisiin suuntautunut ja tasainen — ominaisuudet, joiden ansiosta koiran seura on helppoa raskaanakin päivänä.",
      de: "Anhänglich, menschenbezogen und ausgeglichen — genau das, was einen Hund an schweren Tagen zu einer leichten Gesellschaft macht.",
      fr: "Affectueux, tourné vers les gens et stable — les qualités qui rendent un chien facile à vivre les jours difficiles.",
      nl: "Aanhankelijk, op mensen gericht en stabiel — de eigenschappen die een hond fijn gezelschap maken op een zware dag.",
    },
    tradeoff: {
      en: "More independent than most, so the closeness you're hoping for would take longer to build.",
      no: "Mer selvstendig enn de fleste, så nærheten du håper på ville tatt lengre tid å bygge.",
      pl: "Bardziej niezależny niż większość, więc bliskość, na jaką liczysz, budowałaby się dłużej.",
      dk: "Mere selvstændig end de fleste, så den nærhed, du håber på, vil tage længere tid at bygge op.",
      se: "Mer självständig än de flesta, så närheten du hoppas på skulle ta längre tid att bygga upp.",
      fi: "Itsenäisempi kuin useimmat, joten toivomasi läheisyys syntyisi hitaammin.",
      de: "Eigenständiger als die meisten, die Nähe, auf die Sie hoffen, bräuchte also länger.",
      fr: "Plus indépendant que la plupart, la proximité que vous espérez prendrait donc plus de temps à se construire.",
      nl: "Zelfstandiger dan de meeste honden, dus de nabijheid waarop u hoopt, zou langer duren om op te bouwen.",
    },
  },
];

/** Strengths and honest trade-offs, each tied back to a specific answer. */
export function matchInsights(traits: BreedTraits, profile: UserProfile): MatchInsights {
  const fits: MatchInsight[] = [];
  const tradeoffs: MatchInsight[] = [];

  for (const rule of RULES) {
    if (!rule.when(profile)) continue;
    const from = s(rule.from);
    if (rule.good(traits, profile)) fits.push({ from, text: s(rule.fit) });
    else tradeoffs.push({ from, text: s(rule.tradeoff) });
  }

  return { fits, tradeoffs };
}

/** A short, honest reading of the number — never presented as an exact science. */
export function scoreReading(score: number): string {
  if (score >= 80)
    return pick({
      en: "A strong fit with the life you described.",
      no: "Passer godt med livet du beskrev.",
      pl: "Bardzo dobre dopasowanie do życia, które opisałeś/aś.",
      dk: "Et rigtig godt match med det liv, du beskrev.",
      se: "En riktigt bra match med livet du beskrev.",
      fi: "Sopii hyvin kuvaamaasi elämään.",
      de: "Passt sehr gut zu dem Leben, das Sie beschrieben haben.",
      fr: "Une très bonne correspondance avec la vie que vous avez décrite.",
      nl: "Past heel goed bij het leven dat u beschreef.",
    });
  if (score >= 65)
    return pick({
      en: "A good fit, with a few things to plan around.",
      no: "Passer bra, med noen ting å planlegge rundt.",
      pl: "Dobre dopasowanie, z kilkoma sprawami do zaplanowania.",
      dk: "Et godt match, med et par ting at planlægge omkring.",
      se: "En bra match, med några saker att planera kring.",
      fi: "Hyvä valinta, kunhan muutama asia suunnitellaan etukäteen.",
      de: "Passt gut, mit ein paar Dingen, die Sie einplanen sollten.",
      fr: "Une bonne correspondance, avec quelques points à anticiper.",
      nl: "Past goed, met een paar dingen om rekening mee te houden.",
    });
  if (score >= 50)
    return pick({
      en: "Workable, but only with real changes to your week.",
      no: "Mulig, men bare med reelle endringer i uka di.",
      pl: "Możliwe, ale tylko przy realnych zmianach w twoim tygodniu.",
      dk: "Muligt, men kun med reelle ændringer i din uge.",
      se: "Möjligt, men bara med verkliga förändringar i din vecka.",
      fi: "Mahdollinen, mutta vain todellisilla muutoksilla viikkoosi.",
      de: "Machbar, aber nur mit echten Änderungen in Ihrer Woche.",
      fr: "Envisageable, mais seulement avec de vrais changements dans votre semaine.",
      nl: "Haalbaar, maar alleen met echte veranderingen in uw week.",
    });
  return pick({
    en: "Difficult to make work as your days look now.",
    no: "Vanskelig å få til slik dagene dine ser ut nå.",
    pl: "Trudne do pogodzenia z tym, jak wyglądają twoje dni obecnie.",
    dk: "Svært at få til at fungere, som dine dage ser ud nu.",
    se: "Svårt att få att fungera som dina dagar ser ut nu.",
    fi: "Vaikea saada toimimaan nykyisillä päivilläsi.",
    de: "Schwer umzusetzen, so wie Ihre Tage im Moment aussehen.",
    fr: "Difficile à concilier avec vos journées telles qu’elles sont aujourd’hui.",
    nl: "Lastig te combineren met hoe uw dagen er nu uitzien.",
  });
}
