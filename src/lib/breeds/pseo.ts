import { interpolate, pick } from "@/i18n";
import type { BreedTraits } from "@/data/breeds";
import { exerciseMinutes, groomingCadence, spaceNeeds } from "./everyday";

/**
 * Deterministic, trait-derived copy for the breed pages' programmatic-SEO
 * sections (Living Space, Family & Temperament, Exercise & Care, FAQ).
 * Nothing here is invented per breed — every sentence follows from the same
 * `BreedTraits` values the matching engine and `src/lib/breeds/everyday.ts`
 * already use, so this content can never contradict the rest of the page.
 */

function barkingSentence(t: BreedTraits): string {
  return t.barking >= 4
    ? pick({
        en: "They tend to be vocal, so it's worth bearing in mind if you share walls with neighbours.",
        no: "Den er ofte pratsom, så det er verdt å tenke på hvis du deler vegg med naboer.",
        pl: "Bywa dość głośny, więc warto to uwzględnić, jeśli dzielisz ściany z sąsiadami.",
        dk: "Den er ofte pratsom, så det er værd at huske, hvis du deler væg med naboer.",
        se: "Den är ofta pratsam, så det är värt att tänka på om du delar vägg med grannar.",
        fi: "Se on usein äänekäs, joten se kannattaa huomioida, jos jaat seinät naapureiden kanssa.",
        de: "Er neigt zum Bellen, was Sie bedenken sollten, wenn Sie sich Wände mit Nachbarn teilen.",
        fr: "Il a tendance à être vocal, à garder en tête si vous partagez des murs avec des voisins.",
        nl: "Hij is vaak vocaal, dus houd daar rekening mee als u muren deelt met buren.",
      })
    : pick({
        en: "They're not typically a big barker, which helps in shared buildings.",
        no: "Den er som regel ikke en storbjeffer, noe som hjelper i bygg med flere naboer.",
        pl: "Zwykle nie szczeka zbyt dużo, co pomaga w budynkach wielorodzinnych.",
        dk: "Den er som regel ikke en storgøer, hvilket hjælper i etageejendomme.",
        se: "Den är oftast inte en storskällare, vilket underlättar i flerfamiljshus.",
        fi: "Se ei yleensä hauku paljon, mikä auttaa kerrostaloasumisessa.",
        de: "Er ist in der Regel kein großer Beller, was in Mehrfamilienhäusern hilfreich ist.",
        fr: "Il n'est généralement pas très aboyeur, ce qui aide dans les immeubles collectifs.",
        nl: "Hij is meestal geen grote blaffer, wat helpt in gedeelde gebouwen.",
      });
}

function aloneSentence(t: BreedTraits): string {
  return t.aloneTolerance <= 2
    ? pick({
        en: "Long days alone are genuinely hard for them, so a plan for company or a dog walker matters.",
        no: "Lange dager alene er reelt tungt for den, så en plan for selskap eller lufter er viktig.",
        pl: "Długie dni w samotności są dla niego naprawdę trudne, więc plan na towarzystwo lub spacerowicza ma znaczenie.",
        dk: "Lange dage alene er reelt svært for den, så en plan for selskab eller hundeluftning betyder noget.",
        se: "Långa dagar ensam är verkligen tufft för den, så en plan för sällskap eller hundvakt är viktig.",
        fi: "Pitkät yksinäiset päivät ovat sille aidosti raskaita, joten seura- tai koirankävelytyssuunnitelma on tärkeä.",
        de: "Lange Tage allein sind für ihn wirklich schwer, daher ist ein Plan für Gesellschaft oder einen Hundesitter wichtig.",
        fr: "De longues journées seul sont vraiment difficiles pour lui, un plan pour de la compagnie ou un promeneur compte donc.",
        nl: "Lange dagen alleen zijn echt zwaar voor hem, dus een plan voor gezelschap of een hondenuitlaatservice is belangrijk.",
      })
    : pick({
        en: "A few hours alone during the day is manageable for them once they've had a proper outing.",
        no: "Noen timer alene i løpet av dagen går fint når den har fått en ordentlig tur først.",
        pl: "Kilka godzin samotności w ciągu dnia to dla niego coś, z czym poradzi sobie, gdy wcześniej dobrze się wybiegał.",
        dk: "Et par timer alene i løbet af dagen går fint, når den har fået en ordentlig tur først.",
        se: "Några timmar ensam under dagen går bra när den har fått en ordentlig promenad först.",
        fi: "Muutama tunti yksin päivän aikana sujuu hyvin, kun se on saanut kunnollisen ulkoilun ensin.",
        de: "Ein paar Stunden allein am Tag sind für ihn machbar, sobald er sich richtig ausgetobt hat.",
        fr: "Quelques heures seul dans la journée sont gérables pour lui une fois qu'il a eu une vraie sortie.",
        nl: "Een paar uur alleen overdag is voor hem prima te doen zodra hij een goede uitlaatbeurt heeft gehad.",
      });
}

function childrenSentence(t: BreedTraits): string {
  if (t.goodWithChildren >= 4)
    return pick({
      en: "They're a good match for family homes with children, generally patient and easygoing around kids.",
      no: "Den passer godt i familiehjem med barn, som regel tålmodig og grei å ha rundt barn.",
      pl: "Dobrze sprawdza się w rodzinnych domach z dziećmi, zwykle cierpliwy i spokojny przy dzieciach.",
      dk: "Den passer godt i familiehjem med børn, som regel tålmodig og let at have med at gøre omkring børn.",
      se: "Den passar bra i familjehem med barn, oftast tålmodig och lättsam runt barn.",
      fi: "Se sopii hyvin lapsiperheisiin, yleensä kärsivällinen ja mutkaton lasten seurassa.",
      de: "Er passt gut zu Familien mit Kindern, meist geduldig und unkompliziert im Umgang mit Kindern.",
      fr: "Il convient bien aux foyers familiaux avec enfants, généralement patient et facile avec eux.",
      nl: "Hij past goed bij gezinnen met kinderen, meestal geduldig en makkelijk in de omgang met kinderen.",
    });
  if (t.goodWithChildren === 3)
    return pick({
      en: "They can do well with children, especially once introductions and house rules are handled properly.",
      no: "Den kan fungere fint med barn, spesielt når introduksjoner og husregler er gjort ordentlig.",
      pl: "Może dobrze funkcjonować z dziećmi, zwłaszcza gdy wprowadzenie i zasady domowe są dobrze przemyślane.",
      dk: "Den kan fungere fint med børn, især når introduktioner og husregler er håndteret ordentligt.",
      se: "Den kan fungera bra med barn, särskilt när introduktioner och hemmaregler sköts ordentligt.",
      fi: "Se voi toimia hyvin lasten kanssa, etenkin kun tutustuttaminen ja kotisäännöt hoidetaan kunnolla.",
      de: "Er kann gut mit Kindern zurechtkommen, besonders wenn Vorstellung und Hausregeln richtig gehandhabt werden.",
      fr: "Il peut bien s'entendre avec les enfants, surtout si les présentations et les règles de la maison sont bien gérées.",
      nl: "Hij kan goed omgaan met kinderen, vooral als kennismaking en huisregels goed worden aangepakt.",
    });
  return pick({
    en: "This isn't naturally a breed for young children — it tends to do better in a calmer, adult household.",
    no: "Dette er ikke naturlig en rase for små barn — den trives gjerne bedre i et roligere voksenhjem.",
    pl: "To nie jest naturalnie rasa dla małych dzieci — lepiej czuje się w spokojniejszym, dorosłym domu.",
    dk: "Dette er ikke naturligt en race for små børn — den trives ofte bedre i et roligere voksenhjem.",
    se: "Det här är inte naturligt en ras för små barn — den trivs oftast bättre i ett lugnare vuxenhem.",
    fi: "Tämä ei ole luontaisesti pienten lasten rotu — se viihtyy yleensä paremmin rauhallisemmassa aikuistaloudessa.",
    de: "Das ist von Natur aus keine Rasse für kleine Kinder — er fühlt sich in einem ruhigeren Erwachsenenhaushalt meist wohler.",
    fr: "Ce n'est pas naturellement une race pour les jeunes enfants — il s'épanouit généralement mieux dans un foyer d'adultes plus calme.",
    nl: "Dit is van nature geen ras voor jonge kinderen — hij gedijt meestal beter in een rustiger volwassen huishouden.",
  });
}

function sociabilitySentence(t: BreedTraits): string {
  return t.sociability >= 4
    ? pick({
        en: "They're sociable by nature and generally warm up quickly to new people and other dogs.",
        no: "Den er sosial av natur og blir som regel fort trygg på nye folk og andre hunder.",
        pl: "Z natury jest towarzyski i zwykle szybko oswaja się z nowymi ludźmi i innymi psami.",
        dk: "Den er social af natur og bliver som regel hurtigt tryg ved nye mennesker og andre hunde.",
        se: "Den är social av naturen och blir oftast snabbt trygg med nya människor och andra hundar.",
        fi: "Se on luonnostaan sosiaalinen ja tottuu yleensä nopeasti uusiin ihmisiin ja koiriin.",
        de: "Er ist von Natur aus gesellig und gewöhnt sich meist schnell an neue Menschen und andere Hunde.",
        fr: "Il est sociable de nature et s'habitue généralement vite aux nouvelles personnes et aux autres chiens.",
        nl: "Hij is van nature sociaal en went meestal snel aan nieuwe mensen en andere honden.",
      })
    : pick({
        en: "They tend to be more reserved or selective, and appreciate proper introductions rather than a crowd.",
        no: "Den er ofte mer tilbakeholden eller selektiv, og setter pris på ordentlige introduksjoner fremfor mengder av folk.",
        pl: "Bywa bardziej powściągliwy lub wybiórczy i docenia porządne przedstawienie zamiast tłumu.",
        dk: "Den er ofte mere tilbageholdende eller selektiv og sætter pris på ordentlige introduktioner frem for mange mennesker på én gang.",
        se: "Den är ofta mer reserverad eller selektiv och uppskattar ordentliga presentationer hellre än en folkmassa.",
        fi: "Se on usein varautuneempi tai valikoivampi ja arvostaa kunnollista tutustuttamista väkijoukon sijaan.",
        de: "Er ist oft zurückhaltender oder wählerischer und schätzt richtige Vorstellungen statt vieler fremder Menschen auf einmal.",
        fr: "Il a tendance à être plus réservé ou sélectif, et apprécie de vraies présentations plutôt qu'une foule.",
        nl: "Hij is vaak terughoudender of selectiever en waardeert een fatsoenlijke kennismaking boven een menigte.",
      });
}

function firstTimeSentence(t: BreedTraits): string {
  if (t.firstTimeSuitability >= 4)
    return pick({
      en: "This is a solid choice for first-time owners who are willing to put the early work in.",
      no: "Dette er et solid valg for førstegangseiere som er villige til å legge inn jobben tidlig.",
      pl: "To solidny wybór dla początkujących właścicieli gotowych włożyć pracę na starcie.",
      dk: "Dette er et solidt valg for førstegangsejere, der er villige til at lægge arbejdet i starten.",
      se: "Det här är ett bra val för förstagångsägare som är villiga att lägga ner arbete i början.",
      fi: "Tämä on hyvä valinta ensikertalaisille, jotka ovat valmiita tekemään alkutyön.",
      de: "Das ist eine solide Wahl für Ersthundehalter, die bereit sind, am Anfang Arbeit zu investieren.",
      fr: "C'est un bon choix pour les primo-adoptants prêts à investir du travail au départ.",
      nl: "Dit is een prima keuze voor beginnende hondenbezitters die bereid zijn er in het begin werk in te steken.",
    });
  if (t.firstTimeSuitability === 3)
    return pick({
      en: "First-time owners can manage this breed, though patience and consistency in training help a great deal.",
      no: "Førstegangseiere kan fint ha denne rasen, men tålmodighet og konsekvens i treningen hjelper mye.",
      pl: "Początkujący właściciele mogą sobie poradzić z tą rasą, choć cierpliwość i konsekwencja w treningu bardzo pomagają.",
      dk: "Førstegangsejere kan sagtens have denne race, men tålmodighed og konsekvens i træningen hjælper meget.",
      se: "Förstagångsägare kan hantera den här rasen, men tålamod och konsekvens i träningen hjälper mycket.",
      fi: "Ensikertalaiset voivat pärjätä tämän rodun kanssa, mutta kärsivällisyys ja johdonmukaisuus koulutuksessa auttavat paljon.",
      de: "Ersthundehalter können mit dieser Rasse zurechtkommen, aber Geduld und Konsequenz im Training helfen sehr.",
      fr: "Les primo-adoptants peuvent s'en sortir avec cette race, mais patience et cohérence dans l'éducation aident beaucoup.",
      nl: "Beginnende hondenbezitters kunnen dit ras prima aan, al helpen geduld en consistentie in de training enorm.",
    });
  return pick({
    en: "This breed suits someone who has had a dog before more than a first-time owner.",
    no: "Denne rasen passer bedre for noen som har hatt hund før enn en førstegangseier.",
    pl: "Ta rasa lepiej pasuje do osoby, która miała już psa, niż do początkującego właściciela.",
    dk: "Denne race passer bedre til nogen, der har haft hund før, end en førstegangsejer.",
    se: "Den här rasen passar bättre för någon som har haft hund tidigare än en förstagångsägare.",
    fi: "Tämä rotu sopii paremmin jollekulle, jolla on ollut koira aiemmin, kuin ensikertalaiselle.",
    de: "Diese Rasse passt eher zu jemandem, der schon einmal einen Hund hatte, als zu einem Ersthundehalter.",
    fr: "Cette race convient mieux à quelqu'un ayant déjà eu un chien qu'à un primo-adoptant.",
    nl: "Dit ras past beter bij iemand die al eerder een hond heeft gehad dan bij een beginner.",
  });
}

function exerciseSentence(t: BreedTraits): string {
  if (t.exerciseNeeds >= 4)
    return pick({
      en: "They need serious daily exercise — long walks or runs, not just a quick trip round the block.",
      no: "Den trenger seriøs daglig mosjon — lange turer eller løping, ikke bare en rask runde rundt kvartalet.",
      pl: "Potrzebuje solidnego, codziennego ruchu — długich spacerów lub biegania, nie tylko krótkiej rundki.",
      dk: "Den har brug for seriøs daglig motion — lange gåture eller løb, ikke bare en hurtig runde om hjørnet.",
      se: "Den behöver rejäl daglig motion — långa promenader eller löprundor, inte bara en snabb sväng runt kvarteret.",
      fi: "Se tarvitsee kunnollista päivittäistä liikuntaa — pitkiä lenkkejä tai juoksua, ei vain nopeaa kierrosta korttelin ympäri.",
      de: "Er braucht ernsthafte tägliche Bewegung — lange Spaziergänge oder Läufe, nicht nur eine kurze Runde um den Block.",
      fr: "Il a besoin d'un exercice quotidien sérieux — longues promenades ou courses, pas juste un petit tour du pâté de maisons.",
      nl: "Hij heeft serieuze dagelijkse beweging nodig — lange wandelingen of rondjes hardlopen, niet alleen een snel rondje om de hoek.",
    });
  if (t.exerciseNeeds === 3)
    return pick({
      en: "A decent walk morning and evening covers their exercise needs most days.",
      no: "En skikkelig tur morgen og kveld dekker mosjonsbehovet de fleste dager.",
      pl: "Porządny spacer rano i wieczorem zwykle wystarcza na pokrycie jego potrzeb ruchowych.",
      dk: "En ordentlig gåtur morgen og aften dækker motionsbehovet de fleste dage.",
      se: "En rejäl promenad morgon och kväll täcker motionsbehovet de flesta dagar.",
      fi: "Kunnon lenkki aamuin illoin kattaa liikuntatarpeen useimpina päivinä.",
      de: "Ein ordentlicher Spaziergang morgens und abends deckt an den meisten Tagen den Bewegungsbedarf.",
      fr: "Une bonne promenade matin et soir couvre ses besoins en exercice la plupart des jours.",
      nl: "Een flinke wandeling 's ochtends en 's avonds dekt de meeste dagen zijn beweegbehoefte.",
    });
  return pick({
    en: "Their exercise needs are modest — shorter, gentler walks are usually enough.",
    no: "Mosjonsbehovet er beskjedent — kortere, roligere turer holder som regel.",
    pl: "Jego potrzeby ruchowe są skromne — zwykle wystarczą krótsze, łagodniejsze spacery.",
    dk: "Motionsbehovet er beskedent — kortere, mildere gåture er som regel nok.",
    se: "Motionsbehovet är blygsamt — kortare, mildare promenader räcker oftast.",
    fi: "Liikuntatarve on vaatimaton — lyhyemmät, kevyemmät lenkit riittävät yleensä.",
    de: "Der Bewegungsbedarf ist gering — kürzere, ruhigere Spaziergänge reichen meist aus.",
    fr: "Ses besoins en exercice sont modestes — des promenades plus courtes et plus douces suffisent généralement.",
    nl: "Zijn beweegbehoefte is bescheiden — kortere, rustigere wandelingen zijn meestal genoeg.",
  });
}

function trainabilitySentence(t: BreedTraits): string {
  return t.trainability >= 4
    ? pick({
        en: "They're quick to pick up training, which makes early obedience and manners easier to establish.",
        no: "Den lærer fort, noe som gjør det enklere å etablere grunnleggende lydighet og folkeskikk tidlig.",
        pl: "Szybko przyswaja naukę, co ułatwia wcześniejsze wpajanie posłuszeństwa i dobrych manier.",
        dk: "Den lærer hurtigt, hvilket gør det nemmere at etablere grundlæggende lydighed og manerer tidligt.",
        se: "Den lär sig snabbt, vilket gör det lättare att etablera grundlydnad och gott uppförande tidigt.",
        fi: "Se oppii nopeasti, mikä helpottaa peruskuuliaisuuden ja tapojen opettamista alusta lähtien.",
        de: "Er lernt schnell, was den frühen Gehorsam und gute Manieren leichter etabliert.",
        fr: "Il apprend vite, ce qui facilite l'établissement précoce de l'obéissance et des bonnes manières.",
        nl: "Hij pikt training snel op, waardoor vroege gehoorzaamheid en manieren makkelijker aan te leren zijn.",
      })
    : pick({
        en: "Training takes a bit more patience and consistency, but it pays off with regular short sessions.",
        no: "Trening krever litt mer tålmodighet og konsekvens, men det lønner seg med korte, regelmessige økter.",
        pl: "Trening wymaga nieco więcej cierpliwości i konsekwencji, ale opłaca się przy regularnych, krótkich sesjach.",
        dk: "Træning kræver lidt mere tålmodighed og konsekvens, men det betaler sig med korte, regelmæssige sessioner.",
        se: "Träning kräver lite mer tålamod och konsekvens, men det lönar sig med korta, regelbundna pass.",
        fi: "Koulutus vaatii hieman enemmän kärsivällisyyttä ja johdonmukaisuutta, mutta se kannattaa lyhyillä, säännöllisillä harjoituksilla.",
        de: "Training erfordert etwas mehr Geduld und Konsequenz, zahlt sich aber mit kurzen, regelmäßigen Einheiten aus.",
        fr: "L'éducation demande un peu plus de patience et de constance, mais ça paie avec des séances courtes et régulières.",
        nl: "Training vraagt wat meer geduld en consistentie, maar dat betaalt zich uit met korte, regelmatige sessies.",
      });
}

/** "Living Space & Apartment Fit" — apartment suitability, barking, alone tolerance. */
export function livingSpaceParagraph(t: BreedTraits): string {
  return [spaceNeeds(t), barkingSentence(t), aloneSentence(t)].join(" ");
}

/** "Family & Temperament" — children, sociability, first-time owner suitability. */
export function familyTemperamentParagraph(t: BreedTraits): string {
  return [childrenSentence(t), sociabilitySentence(t), firstTimeSentence(t)].join(" ");
}

/** "Exercise & Care Needs" — exercise, grooming/coat care, trainability. */
export function exerciseCareParagraph(t: BreedTraits): string {
  return [exerciseSentence(t), groomingCadence(t), trainabilitySentence(t)].join(" ");
}

const faqApartmentQ = {
  en: "Is a {breed} good for apartments?",
  no: "Passer en {breed} i leilighet?",
  pl: "Czy {breed} nadaje się do mieszkania?",
  dk: "Passer en {breed} til en lejlighed?",
  se: "Passar en {breed} i lägenhet?",
  fi: "Sopiiko {breed} kerrostaloasumiseen?",
  de: "Eignet sich ein {breed} für eine Wohnung?",
  fr: "Un {breed} convient-il à la vie en appartement ?",
  nl: "Is een {breed} geschikt voor een appartement?",
} as const;

const faqFamilyQ = {
  en: "Is a {breed} good with children and first-time owners?",
  no: "Passer en {breed} med barn og førstegangseiere?",
  pl: "Czy {breed} dobrze radzi sobie z dziećmi i początkującymi właścicielami?",
  dk: "Passer en {breed} med børn og førstegangsejere?",
  se: "Fungerar en {breed} med barn och förstagångsägare?",
  fi: "Sopiiko {breed} lapsille ja ensikertalaisille omistajille?",
  de: "Ist ein {breed} gut mit Kindern und für Ersthundehalter geeignet?",
  fr: "Un {breed} est-il adapté aux enfants et aux primo-adoptants ?",
  nl: "Is een {breed} goed met kinderen en beginnende eigenaren?",
} as const;

const faqExerciseQ = {
  en: "How much exercise does a {breed} need?",
  no: "Hvor mye mosjon trenger en {breed}?",
  pl: "Ile ruchu potrzebuje {breed}?",
  dk: "Hvor meget motion har en {breed} brug for?",
  se: "Hur mycket motion behöver en {breed}?",
  fi: "Kuinka paljon liikuntaa {breed} tarvitsee?",
  de: "Wie viel Bewegung braucht ein {breed}?",
  fr: "De combien d'exercice un {breed} a-t-il besoin ?",
  nl: "Hoeveel beweging heeft een {breed} nodig?",
} as const;

const faqMinutesTemplate = {
  en: "About {lo}–{hi} minutes a day is typical, split across two or more outings.",
  no: "Rundt {lo}–{hi} minutter om dagen er typisk, fordelt på to eller flere turer.",
  pl: "Zazwyczaj to około {lo}–{hi} minut dziennie, podzielone na dwa lub więcej wyjść.",
  dk: "Omkring {lo}–{hi} minutter om dagen er typisk, fordelt på to eller flere ture.",
  se: "Cirka {lo}–{hi} minuter om dagen är typiskt, uppdelat på två eller fler promenader.",
  fi: "Noin {lo}–{hi} minuuttia päivässä on tyypillistä, jaettuna kahteen tai useampaan ulkoiluun.",
  de: "Etwa {lo}–{hi} Minuten am Tag sind typisch, aufgeteilt auf zwei oder mehr Ausflüge.",
  fr: "Environ {lo} à {hi} minutes par jour sont typiques, réparties sur deux sorties ou plus.",
  nl: "Ongeveer {lo}–{hi} minuten per dag is gebruikelijk, verdeeld over twee of meer uitstapjes.",
} as const;

export interface FaqItem {
  question: string;
  answer: string;
}

/** Three deterministic, trait-derived FAQ pairs for FAQPage rich snippets. */
export function breedFaqs(displayName: string, t: BreedTraits): FaqItem[] {
  const [lo, hi] = exerciseMinutes(t);
  return [
    {
      question: interpolate(pick(faqApartmentQ), { breed: displayName }),
      answer: spaceNeeds(t),
    },
    {
      question: interpolate(pick(faqFamilyQ), { breed: displayName }),
      answer: `${childrenSentence(t)} ${firstTimeSentence(t)}`,
    },
    {
      question: interpolate(pick(faqExerciseQ), { breed: displayName }),
      answer: `${exerciseSentence(t)} ${interpolate(pick(faqMinutesTemplate), { lo: String(lo), hi: String(hi) })}`,
    },
  ];
}
