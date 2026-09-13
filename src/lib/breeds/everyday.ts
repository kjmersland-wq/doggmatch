import { pick } from "@/i18n";
import type { Breed, BreedTraits } from "@/data/breeds";

/**
 * What life with a dog actually looks like, derived from the same measurable
 * characteristics the matching engine uses. Nothing here is invented per breed:
 * every line follows deterministically from the trait values, so the breed
 * pages and the match result can never contradict each other.
 */

export interface EverydayFact {
  label: string;
  value: string;
  detail?: string;
}

const band = <T,>(value: number, low: T, mid: T, high: T): T =>
  value <= 2 ? low : value <= 3 ? mid : high;

/** Rough daily exercise, in minutes, as a range. */
export function exerciseMinutes(t: BreedTraits): [number, number] {
  const base = [20, 30, 45, 70, 100][Math.min(4, Math.max(0, Math.round(t.exerciseNeeds) - 1))]!;
  return [base, Math.round(base * 1.5)];
}

/** A single, rounded "hours a day" figure for the commitment badge — the midpoint of `exerciseMinutes`, to the nearest half hour. */
export function dailyCommitmentHours(t: BreedTraits): number {
  const [lo, hi] = exerciseMinutes(t);
  const hours = (lo + hi) / 2 / 60;
  return Math.max(0.5, Math.round(hours * 2) / 2);
}

/** Weekly hands-on time: walks, training, coat care, play. */
export function weeklyHours(t: BreedTraits): [number, number] {
  const [lo, hi] = exerciseMinutes(t);
  const extras = (t.mentalStimulation + t.grooming) * 12;
  return [Math.round((lo * 7 + extras) / 60), Math.round((hi * 7 + extras * 1.4) / 60)];
}

export function groomingCadence(t: BreedTraits): string {
  if (t.grooming >= 4)
    return pick({
      en: "Brushing most days, plus a groomer every 6–8 weeks",
      no: "Børsting de fleste dager, og frisør hver 6.–8. uke",
      pl: "Szczotkowanie niemal codziennie oraz wizyta u groomera co 6–8 tygodni",
      dk: "Børstning de fleste dage, plus en tur til frisøren hver 6.-8. uge",
      se: "Borstning de flesta dagar, plus en tur till frisören var 6-8 vecka",
      fi: "Harjaus useimpina päivinä, sekä trimmaus 6–8 viikon välein",
      de: "Bürsten an den meisten Tagen, plus ein Friseurtermin alle 6–8 Wochen",
      fr: "Brossage la plupart des jours, plus un toiletteur toutes les 6–8 semaines",
      nl: "Borstelen de meeste dagen, plus een trimbeurt elke 6-8 weken",
    });
  if (t.grooming === 3)
    return pick({
      en: "A proper brush a couple of times a week",
      no: "En ordentlig børsting et par ganger i uka",
      pl: "Porządne szczotkowanie kilka razy w tygodniu",
      dk: "En ordentlig børstning et par gange om ugen",
      se: "En ordentlig borstning ett par gånger i veckan",
      fi: "Kunnon harjaus pari kertaa viikossa",
      de: "Ein ordentliches Bürsten ein paar Mal pro Woche",
      fr: "Un bon brossage quelques fois par semaine",
      nl: "Een goede borstelbeurt een paar keer per week",
    });
  return pick({
    en: "A quick brush once a week is usually enough",
    no: "En rask børsting én gang i uka holder som regel",
    pl: "Szybkie szczotkowanie raz w tygodniu zwykle wystarcza",
    dk: "En hurtig børstning en gang om ugen er som regel nok",
    se: "En snabb borstning en gång i veckan räcker oftast",
    fi: "Nopea harjaus kerran viikossa riittää yleensä",
    de: "Ein schnelles Bürsten einmal pro Woche ist normalerweise ausreichend",
    fr: "Un brossage rapide une fois par semaine suffit généralement",
    nl: "Een snelle borstelbeurt eens per week is meestal voldoende",
  });
}

export function spaceNeeds(t: BreedTraits): string {
  if (t.apartmentSuitability >= 4)
    return pick({
      en: "Content in a flat, provided they get out often enough",
      no: "Trives i leilighet, så lenge den kommer nok ut",
      pl: "Dobrze się czuje w mieszkaniu, o ile wystarczająco często wychodzi",
      dk: "Tilfreds i en lejlighed, forudsat at den kommer nok ud",
      se: "Trivs i en lägenhet, förutsatt att den får tillräckligt med motion utomhus",
      fi: "Tyytyväinen kerrostaloasunnossa, kunhan se pääsee tarpeeksi ulos",
      de: "Zufrieden in einer Wohnung, vorausgesetzt, sie kommt oft genug raus",
      fr: "Content dans un appartement, à condition qu'il sorte assez souvent",
      nl: "Tevreden in een flat, mits hij vaak genoeg buiten komt",
    });
  if (t.apartmentSuitability === 3)
    return pick({
      en: "Manageable in a flat, easier with a garden or green space nearby",
      no: "Går fint i leilighet, enklere med hage eller grøntområde i nærheten",
      pl: "Radzi sobie w mieszkaniu, choć łatwiej z ogrodem lub zielenią w pobliżu",
      dk: "Håndterbar i en lejlighed, nemmere med en have eller grønt område i nærheden",
      se: "Hanterbar i en lägenhet, enklare med en trädgård eller grönområde i närheten",
      fi: "Hallittavissa kerrostaloasunnossa, helpompi puutarhan tai viheralueen läheisyydessä",
      de: "In einer Wohnung handhabbar, einfacher mit einem Garten oder Grünfläche in der Nähe",
      fr: "Gérable dans un appartement, plus facile avec un jardin ou un espace vert à proximité",
      nl: "Beheersbaar in een flat, makkelijker met een tuin of groenvoorziening in de buurt",
    });
  return pick({
    en: "Really wants space — a garden and room to move suits them far better",
    no: "Trenger virkelig plass — hage og rom å bevege seg på passer den langt bedre",
    pl: "Naprawdę potrzebuje przestrzeni — ogród i miejsce do ruchu pasują mu o wiele lepiej",
    dk: "Ønsker virkelig plads — en have og plads at bevæge sig på passer dem langt bedre",
    se: "Vill verkligen ha utrymme — en trädgård och plats att röra sig på passar dem mycket bättre",
    fi: "Todella kaipaa tilaa — puutarha ja liikkumatila sopivat sille paljon paremmin",
    de: "Braucht wirklich Platz – ein Garten und Bewegungsfreiheit passen ihm viel besser",
    fr: "Veut vraiment de l'espace – un jardin et de la place pour bouger lui conviennent beaucoup mieux",
    nl: "Wil echt ruimte – een tuin en bewegingsruimte passen er veel beter bij",
  });
}

/** A plain description of a normal day, built from energy and stimulation needs. */
export function typicalDay(t: BreedTraits): string[] {
  const [lo, hi] = exerciseMinutes(t);
  const morning = pick({
    en: `A walk of ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutes before the day starts properly.`,
    no: `En tur på ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutter før dagen begynner for alvor.`,
    pl: `Spacer trwający ${Math.round(lo / 2)}–${Math.round(hi / 2)} minut, zanim dzień na dobre się zacznie.`,
    dk: `En gåtur på ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutter, før dagen rigtigt starter.`,
    se: `En promenad på ${Math.round(lo / 2)}–${Math.round(hi / 2)} minuter, innan dagen riktigt börjar.`,
    fi: `Kävely ${Math.round(lo / 2)}–${Math.round(hi / 2)} minuutin ajan ennen kuin päivä alkaa kunnolla.`,
    de: `Ein Spaziergang von ${Math.round(lo / 2)}–${Math.round(hi / 2)} Minuten, bevor der Tag richtig beginnt.`,
    fr: `Une promenade de ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutes avant que la journée ne commence vraiment.`,
    nl: `Een wandeling van ${Math.round(lo / 2)}–${Math.round(hi / 2)} minuten voordat de dag echt begint.`,
  });
  const middle = band(
    t.aloneTolerance,
    pick({
      en: "Midday is the hard part — they'd rather not be left for long stretches, so most homes need a plan for it.",
      no: "Midt på dagen er det vanskeligste — den vil helst ikke være alene lenge, så de fleste hjem trenger en plan for det.",
      pl: "Środek dnia jest najtrudniejszy — wolałby nie zostawać sam na długo, więc większość domów potrzebuje na to planu.",
      dk: "Midt på dagen er den svære del – den vil helst ikke efterlades i lange stræk, så de fleste hjem har brug for en plan for det.",
      se: "Middagen är den svåra delen – den vill helst inte lämnas ensam under långa perioder, så de flesta hem behöver en plan för det.",
      fi: "Keskipäivä on vaikein osa – se ei halua jäädä pitkäksi aikaa yksin, joten useimmat kodit tarvitsevat siihen suunnitelman.",
      de: "Der Mittag ist der schwierigste Teil – sie möchte lieber nicht lange allein gelassen werden, daher brauchen die meisten Haushalte einen Plan dafür.",
      fr: "Le milieu de journée est la partie difficile – elle préférerait ne pas être laissée seule pendant de longues périodes, donc la plupart des foyers ont besoin d'un plan pour cela.",
      nl: "Het middaguur is het moeilijkste deel – hij blijft liever niet lang alleen, dus de meeste huishoudens hebben daar een plan voor nodig.",
    }),
    pick({
      en: "A few quiet hours alone are fine once they've had a proper morning.",
      no: "Noen rolige timer alene går fint når morgenen har vært ordentlig.",
      pl: "Kilka spokojnych godzin w samotności to nic złego, gdy poranek był porządny.",
      dk: "Et par rolige timer alene er fint, når de har haft en ordentlig morgen.",
      se: "Några lugna timmar ensam går bra när de har haft en ordentlig morgon.",
      fi: "Muutama rauhallinen tunti yksin on ok, kunhan aamu on ollut kunnollinen.",
      de: "Ein paar ruhige Stunden allein sind in Ordnung, sobald sie einen ordentlichen Morgen hatten.",
      fr: "Quelques heures calmes seule sont bien une fois qu'elle a eu une matinée correcte.",
      nl: "Een paar rustige uren alleen zijn prima als ze een goede ochtend hebben gehad.",
    }),
    pick({
      en: "Happy to sleep through the middle of the day once the morning has been earned.",
      no: "Sover gjerne gjennom midten av dagen når morgenen er tjent inn.",
      pl: "Chętnie prześpi środek dnia, gdy poranek zostanie należycie odpracowany.",
      dk: "Sover gerne igennem midt på dagen, når morgenen er tjent ind.",
      se: "Sover gärna igenom mitt på dagen när morgonen har förtjänats.",
      fi: "Nukkuu mielellään päivän keskivaiheen yli, kunhan aamu on ansaittu.",
      de: "Schläft gerne den größten Teil des Tages, sobald der Morgen verdient wurde.",
      fr: "Heureuse de dormir pendant le milieu de la journée une fois que la matinée a été gagnée.",
      nl: "Slaapt graag de middag door zodra de ochtend verdiend is.",
    }),
  );
  const mind = band(
    t.mentalStimulation,
    pick({
      en: "Not a dog that needs puzzles — company and routine matter more.",
      no: "Ikke en hund som trenger oppgaver — selskap og rutine betyr mer.",
      pl: "To nie pies, który potrzebuje zagadek — bardziej liczy się towarzystwo i rutyna.",
      dk: "Ikke en hund, der har brug for puslespil – selskab og rutine betyder mere.",
      se: "Inte en hund som behöver pussel – sällskap och rutiner är viktigare.",
      fi: "Ei koira, joka tarvitsee pulmia – seura ja rutiinit ovat tärkeämpiä.",
      de: "Kein Hund, der Rätsel braucht – Gesellschaft und Routine sind wichtiger.",
      fr: "Pas un chien qui a besoin de casse-têtes – la compagnie et la routine comptent plus.",
      nl: "Geen hond die puzzels nodig heeft – gezelschap en routine zijn belangrijker.",
    }),
    pick({
      en: "Ten minutes of training or a scent game keeps their head busy.",
      no: "Ti minutter trening eller et luktespill holder hodet i gang.",
      pl: "Dziesięć minut treningu albo zabawa węchowa utrzymuje umysł w ruchu.",
      dk: "Ti minutters træning eller et duftspil holder hovedet beskæftiget.",
      se: "Tio minuters träning eller ett doftspel håller huvudet sysselsatt.",
      fi: "Kymmenen minuuttia koulutusta tai hajupeli pitää mielen virkeänä.",
      de: "Zehn Minuten Training oder ein Nasenspiel halten den Kopf beschäftigt.",
      fr: "Dix minutes d'entraînement ou un jeu d'odorat occupent son esprit.",
      nl: "Tien minuten training of een geurspel houden zijn geest bezig.",
    }),
    pick({
      en: "Needs something to think about every day. Without it, walks alone won't be enough.",
      no: "Trenger noe å tenke på hver dag. Uten det holder ikke turer alene.",
      pl: "Potrzebuje czegoś do przemyślenia każdego dnia. Bez tego same spacery nie wystarczą.",
      dk: "Har brug for noget at tænke over hver dag. Uden det er gåture alene ikke nok.",
      se: "Behöver något att tänka på varje dag. Utan det räcker inte promenader ensamma.",
      fi: "Tarvitsee jotain mietittävää joka päivä. Ilman sitä pelkät kävelyt eivät riitä.",
      de: "Braucht jeden Tag etwas zum Nachdenken. Ohne das reichen Spaziergänge allein nicht aus.",
      fr: "A besoin de quelque chose pour réfléchir chaque jour. Sans cela, les promenades seules ne suffiront pas.",
      nl: "Heeft elke dag iets nodig om over na te denken. Zonder dat zijn wandelingen alleen niet genoeg.",
    }),
  );
  const evening = pick({
    en: `A longer outing later on — ${lo}–${hi} minutes across the day in total — then settling down with you.`,
    no: `En lengre tur senere — ${lo}–${hi} minutter til sammen gjennom dagen — og så ro sammen med deg.`,
    pl: `Dłuższe wyjście później — łącznie ${lo}–${hi} minut w ciągu dnia — a potem odpoczynek razem z tobą.`,
    dk: `En længere tur senere – ${lo}–${hi} minutter i alt i løbet af dagen – og så falder de til ro hos dig.`,
    se: `En längre utflykt senare – ${lo}–${hi} minuter totalt under dagen – sedan lugnar de sig hos dig.`,
    fi: `Pidempi ulkoilu myöhemmin – ${lo}–${hi} minuuttia yhteensä päivän aikana – sitten rauhoittuu kanssasi.`,
    de: `Ein längerer Ausflug später – ${lo}–${hi} Minuten insgesamt über den Tag verteilt – dann kuschelt er sich zu Ihnen.`,
    fr: `Une sortie plus longue plus tard – ${lo}–${hi} minutes au total dans la journée – puis se calme avec vous.`,
    nl: `Een langere uitstap later – ${lo}–${hi} minuten in totaal gedurende de dag – daarna tot rust komen bij jou.`,
  });
  return [morning, middle, mind, evening];
}

/** Who this dog genuinely suits, in the reader's own terms. */
export function bestSuitedFor(t: BreedTraits): string[] {
  const out: string[] = [];
  out.push(
    t.exerciseNeeds >= 4
      ? pick({ en: "People who are outdoors every day, whatever the weather", no: "Folk som er ute hver dag, uansett vær", pl: "Osoby, które są na zewnątrz codziennie, bez względu na pogodę", dk: "Folk, der er udendørs hver dag, uanset vejret", se: "Människor som är utomhus varje dag, oavsett väder", fi: "Ihmiset, jotka ovat ulkona joka päivä, säästä riippumatta", de: "Menschen, die jeden Tag draußen sind, bei jedem Wetter", fr: "Les gens qui sont dehors tous les jours, peu importe le temps", nl: "Mensen die elke dag buiten zijn, ongeacht het weer" })
      : t.exerciseNeeds <= 2
        ? pick({ en: "Quieter homes and shorter, gentler walks", no: "Roligere hjem og kortere, mildere turer", pl: "Spokojniejsze domy i krótsze, łagodniejsze spacery", dk: "Roligere hjem og kortere, blidere gåture", se: "Lugnare hem och kortare, mildare promenader", fi: "Rauhallisemmat kodit ja lyhyemmät, lempeämmät kävelyt", de: "Ruhigere Haushalte und kürzere, sanftere Spaziergänge", fr: "Des foyers plus calmes et des promenades plus courtes et plus douces", nl: "Rustigere huizen en kortere, mildere wandelingen" })
        : pick({ en: "An ordinary, active week — a decent walk morning and evening", no: "En vanlig, aktiv uke — en skikkelig tur morgen og kveld", pl: "Zwykły, aktywny tydzień — porządny spacer rano i wieczorem", dk: "En almindelig, aktiv uge – en ordentlig gåtur morgen og aften", se: "En vanlig, aktiv vecka – en ordentlig promenad morgon och kväll", fi: "Tavallinen, aktiivinen viikko – kunnollinen kävely aamulla ja illalla", de: "Eine gewöhnliche, aktive Woche – ein ordentlicher Spaziergang morgens und abends", fr: "Une semaine ordinaire et active – une promenade décente le matin et le soir", nl: "Een gewone, actieve week – een fatsoenlijke wandeling 's ochtends en 's avonds" }),
  );
  if (t.firstTimeSuitability >= 4)
    out.push(pick({ en: "First-time owners willing to put the early work in", no: "Førstegangseiere som er villige til å legge inn jobben tidlig", pl: "Początkujący właściciele gotowi włożyć pracę na starcie", dk: "Førstegangsejere, der er villige til at lægge det tidlige arbejde i", se: "Förstagångsägare som är villiga att lägga ner det tidiga arbetet", fi: "Ensimmäistä kertaa koiran hankkivat, jotka ovat valmiita tekemään alkuun työtä", de: "Erstbesitzer, die bereit sind, die frühe Arbeit zu leisten", fr: "Propriétaires novices prêts à faire le travail initial", nl: "Eerstekeer eigenaren die bereid zijn de vroege inspanning te leveren" }));
  else if (t.firstTimeSuitability <= 2)
    out.push(pick({ en: "People who have lived with a dog before", no: "Folk som har hatt hund før", pl: "Osoby, które miały już psa wcześniej", dk: "Folk, der har boet med en hund før", se: "Människor som har bott med en hund tidigare", fi: "Ihmiset, jotka ovat asuneet koiran kanssa aiemmin", de: "Menschen, die schon einmal mit einem Hund gelebt haben", fr: "Les personnes qui ont déjà vécu avec un chien", nl: "Mensen die eerder met een hond hebben geleefd" }));
  if (t.goodWithChildren >= 4)
    out.push(pick({ en: "Family homes with children around", no: "Familiehjem med barn rundt seg", pl: "Rodzinne domy z dziećmi w otoczeniu", dk: "Familiehjem med børn omkring sig", se: "Familjehem med barn omkring sig", fi: "Perhekodit, joissa on lapsia", de: "Familienheime mit Kindern in der Nähe", fr: "Foyers familiaux avec des enfants autour", nl: "Gezinswoningen met kinderen in de buurt" }));
  if (t.apartmentSuitability >= 4)
    out.push(pick({ en: "Flats and town living", no: "Leilighet og byliv", pl: "Mieszkania i życie w mieście", dk: "Lejligheder og byliv", se: "Lägenheter och stadsliv", fi: "Kerrostaloasunnot ja kaupunkielämä", de: "Wohnungen und Stadtleben", fr: "Appartements et vie en ville", nl: "Appartementen en stadsleven" }));
  if (t.independence >= 4)
    out.push(pick({ en: "Someone who likes a dog with its own opinions", no: "Noen som liker en hund med egne meninger", pl: "Osoby, które lubią psa z własnym zdaniem", dk: "Nogen, der kan lide en hund med sine egne meninger", se: "Någon som gillar en hund med egna åsikter", fi: "Joku, joka pitää koirasta, jolla on omat mielipiteensä", de: "Jemand, der einen Hund mit eigenen Meinungen mag", fr: "Quelqu'un qui aime un chien avec ses propres opinions", nl: "Iemand die van een hond met eigen meningen houdt" }));
  if (t.affection >= 5)
    out.push(pick({ en: "Anyone who wants a dog close by, most of the day", no: "Alle som vil ha hunden tett på, mesteparten av dagen", pl: "Każdy, kto chce mieć psa blisko siebie przez większość dnia", dk: "Alle, der ønsker en hund tæt på sig det meste af dagen", se: "Alla som vill ha en hund nära sig, större delen av dagen", fi: "Kuka tahansa, joka haluaa koiran lähelleen suurimman osan päivästä", de: "Jeder, der einen Hund den größten Teil des Tages in seiner Nähe haben möchte", fr: "Toute personne qui veut un chien près d'elle, la plupart de la journée", nl: "Iedereen die een hond dichtbij wil hebben, het grootste deel van de dag" }));
  return out;
}

/** Honest things to weigh up, again derived from the traits themselves. */
export function thingsToConsider(t: BreedTraits): string[] {
  const out: string[] = [];
  if (t.shedding >= 4)
    out.push(pick({ en: "Sheds a great deal — hair becomes part of the household", no: "Feller mye — hår blir en del av husholdningen", pl: "Bardzo dużo linieje — sierść staje się częścią domowego życia", dk: "Fælder meget – hår bliver en del af husholdningen", se: "Fäller mycket – hår blir en del av hushållet", fi: "Irtoaa paljon karvaa – karvat tulevat osaksi kotitaloutta", de: "Haart stark – Haare werden Teil des Haushalts", fr: "Perd beaucoup de poils – les poils font partie du foyer", nl: "Verhaart veel – haar wordt onderdeel van het huishouden" }));
  if (t.grooming >= 4)
    out.push(pick({ en: "Coat care is ongoing and adds a real cost each year", no: "Pelsstell er kontinuerlig og koster reelt hvert år", pl: "Pielęgnacja sierści jest ciągła i co roku generuje realny koszt", dk: "Pelspleje er løbende og tilføjer en reel omkostning hvert år", se: "Pälsvård är pågående och medför en verklig kostnad varje år", fi: "Turkinhoito on jatkuvaa ja lisää todellisia kustannuksia vuosittain", de: "Fellpflege ist laufend und verursacht jedes Jahr erhebliche Kosten", fr: "Le toilettage du pelage est continu et représente un coût réel chaque année", nl: "Vachtverzorging is doorlopend en brengt elk jaar reële kosten met zich mee" }));
  if (t.barking >= 4)
    out.push(pick({ en: "Vocal by nature, which matters where neighbours are close", no: "Bjeffer av natur, noe som betyr mye der naboene er nære", pl: "Z natury głośny, co ma znaczenie, gdy sąsiedzi są blisko", dk: "Vokal af natur, hvilket betyder noget, hvor naboerne er tæt på", se: "Vokal av naturen, vilket är viktigt där grannarna är nära", fi: "Luonnostaan äänekäs, mikä on tärkeää lähellä olevien naapureiden kanssa", de: "Von Natur aus laut, was wichtig ist, wenn Nachbarn in der Nähe sind", fr: "Vocal par nature, ce qui est important là où les voisins sont proches", nl: "Van nature vocaal, wat belangrijk is waar buren dichtbij zijn" }));
  if (t.aloneTolerance <= 2)
    out.push(pick({ en: "Finds long days alone genuinely hard", no: "Synes lange dager alene er reelt tungt", pl: "Naprawdę trudno mu znosić długie dni w samotności", dk: "Finder lange dage alene oprigtigt hårde", se: "Tycker att långa dagar ensam är genuint svårt", fi: "Pitää pitkiä päiviä yksin todella vaikeina", de: "Findet lange Tage allein wirklich schwer", fr: "Trouve les longues journées seule vraiment difficiles", nl: "Vindt lange dagen alleen echt zwaar" }));
  if (t.strengthRequired >= 4)
    out.push(pick({ en: "Strong on the lead until loose-lead work is solid", no: "Sterk i bånd inntil båndtreningen sitter", pl: "Silny na smyczy, dopóki nauka chodzenia na luźnej smyczy nie zostanie utrwalona", dk: "Stærk i snoren, indtil løs-snore-arbejdet er solidt", se: "Stark i kopplet tills löst koppel-träningen sitter", fi: "Vahva hihnassa, kunnes löysän hihnan koulutus on vankka", de: "Stark an der Leine, bis die Leinenführigkeit gefestigt ist", fr: "Fort en laisse jusqu'à ce que le travail en laisse lâche soit solide", nl: "Sterk aan de lijn totdat het loslopen aan de lijn solide is" }));
  if (t.mentalStimulation >= 4)
    out.push(pick({ en: "Boredom shows up fast, usually as unwanted behaviour", no: "Kjedsomhet viser seg fort, som regel som uønsket atferd", pl: "Nuda pojawia się szybko, zwykle w postaci niepożądanych zachowań", dk: "Kedsomhed viser sig hurtigt, normalt som uønsket adfærd", se: "Uttråkning visar sig snabbt, vanligtvis som oönskat beteende", fi: "Ikävystyminen ilmenee nopeasti, yleensä ei-toivottuna käytöksenä", de: "Langeweile zeigt sich schnell, normalerweise als unerwünschtes Verhalten", fr: "L'ennui se manifeste rapidement, généralement par un comportement indésirable", nl: "Verveling uit zich snel, meestal als ongewenst gedrag" }));
  if (t.heatTolerance <= 2)
    out.push(pick({ en: "Struggles in hot weather — summer walks need rethinking", no: "Sliter i varmt vær — sommerturer må planlegges annerledes", pl: "Źle znosi upały — letnie spacery trzeba planować inaczej", dk: "Kæmper i varmt vejr – sommerture skal gentænkes", se: "Kämpar i varmt väder – sommarpromenader behöver omprövas", fi: "Kamppailee kuumalla säällä – kesäkävelyt on suunniteltava uudelleen", de: "Hat Schwierigkeiten bei heißem Wetter – Sommerausflüge müssen überdacht werden", fr: "A du mal par temps chaud – les promenades estivales doivent être repensées", nl: "Heeft moeite bij warm weer – zomerwandelingen moeten worden heroverwogen" }));
  if (t.coldTolerance <= 2)
    out.push(pick({ en: "Feels the cold, so winter needs a coat and shorter outings", no: "Fryser lett, så vinteren krever dekken og kortere turer", pl: "Łatwo marznie, więc zimą potrzebuje ubranka i krótszych spacerów", dk: "Fryser let, så vinteren kræver en frakke og kortere ture", se: "Fryser lätt, så vintern kräver en täckjacka och kortare utflykter", fi: "Paleltuu helposti, joten talvella tarvitaan takki ja lyhyempiä ulkoiluja", de: "Friert leicht, daher braucht der Winter einen Mantel und kürzere Ausflüge", fr: "A froid facilement, donc l'hiver nécessite un manteau et des sorties plus courtes", nl: "Heeft snel koud, dus de winter vereist een jas en kortere uitstapjes" }));
  return out;
}

/** Cost and time framing for the page — indicative, never a quote. */
export function commitmentFacts(breed: Breed): EverydayFact[] {
  const t = breed.traits;
  const [exLo, exHi] = exerciseMinutes(t);
  const [hLo, hHi] = weeklyHours(t);
  return [
    {
      label: pick({ en: "Exercise", no: "Mosjon", pl: "Ruch", dk: "Motion", se: "Motion", fi: "Liikunta", de: "Bewegung", fr: "Exercice", nl: "Beweging" }),
      value: pick({ en: `${exLo}–${exHi} min a day`, no: `${exLo}–${exHi} min per dag`, pl: `${exLo}–${exHi} min dziennie`, dk: `${exLo}–${exHi} min om dagen`, se: `${exLo}–${exHi} min per dag`, fi: `${exLo}–${exHi} min päivässä`, de: `${exLo}–${exHi} Min. pro Tag`, fr: `${exLo}–${exHi} min par jour`, nl: `${exLo}–${exHi} min per dag` }),
    },
    {
      label: pick({ en: "Your time", no: "Din tid", pl: "Twój czas", dk: "Din tid", se: "Din tid", fi: "Sinun aikasi", de: "Deine Zeit", fr: "Ton temps", nl: "Jouw tijd" }),
      value: pick({ en: `${hLo}–${hHi} hours a week`, no: `${hLo}–${hHi} timer i uka`, pl: `${hLo}–${hHi} godzin tygodniowo`, dk: `${hLo}–${hHi} timer om ugen`, se: `${hLo}–${hHi} timmar i veckan`, fi: `${hLo}–${hHi} tuntia viikossa`, de: `${hLo}–${hHi} Stunden pro Woche`, fr: `${hLo}–${hHi} heures par semaine`, nl: `${hLo}–${hHi} uur per week` }),
      detail: pick({
        en: "Walks, training, coat care and play together",
        no: "Turer, trening, pelsstell og lek til sammen",
        pl: "Spacery, trening, pielęgnacja sierści i zabawa razem",
        dk: "Gåture, træning, pelspleje og leg sammen",
        se: "Promenader, träning, pälsvård och lek tillsammans",
        fi: "Kävelyt, koulutus, turkinhoito ja leikki yhdessä",
        de: "Spaziergänge, Training, Fellpflege und gemeinsames Spielen",
        fr: "Promenades, dressage, toilettage et jeu ensemble",
        nl: "Wandelingen, training, vachtverzorging en samen spelen",
      }),
    },
    {
      label: pick({ en: "Space", no: "Plass", pl: "Przestrzeń", dk: "Plads", se: "Utrymme", fi: "Tila", de: "Platz", fr: "Espace", nl: "Ruimte" }),
      value: spaceNeeds(t),
    },
    {
      label: pick({ en: "Coat care", no: "Pelsstell", pl: "Pielęgnacja sierści", dk: "Pelspleje", se: "Pälsvård", fi: "Turkinhoito", de: "Fellpflege", fr: "Toilettage du pelage", nl: "Vachtverzorging" }),
      value: groomingCadence(t),
    },
    {
      label: pick({ en: "Typical yearly cost", no: "Typisk årlig kostnad", pl: "Typowy roczny koszt", dk: "Typiske årlige omkostninger", se: "Typisk årlig kostnad", fi: "Tyypillinen vuosikustannus", de: "Typische jährliche Kosten", fr: "Coût annuel typique", nl: "Typische jaarlijkse kosten" }),
      value: `€${breed.annualCost[0]}–${breed.annualCost[1]}`,
      detail: pick({
        en: "Food, insurance, routine vet care and grooming. Illness and emergencies come on top.",
        no: "Fôr, forsikring, vanlig veterinærstell og pelsstell. Sykdom og akutte ting kommer i tillegg.",
        pl: "Karma, ubezpieczenie, rutynowa opieka weterynaryjna i pielęgnacja. Choroby i nagłe przypadki dochodzą osobno.",
        dk: "Foder, forsikring, rutinemæssig dyrlægepleje og pelspleje. Sygdom og nødsituationer kommer oveni.",
        se: "Foder, försäkring, rutinmässig veterinärvård och pälsvård. Sjukdom och nödsituationer tillkommer.",
        fi: "Ruoka, vakuutus, rutiininomainen eläinlääkärihoito ja turkinhoito. Sairaudet ja hätätilanteet tulevat lisäksi.",
        de: "Futter, Versicherung, routinemäßige tierärztliche Versorgung und Fellpflege. Krankheiten und Notfälle kommen noch hinzu.",
        fr: "Nourriture, assurance, soins vétérinaires de routine et toilettage. Les maladies et les urgences s'ajoutent.",
        nl: "Voer, verzekering, routinematige dierenartsenzorg en vachtverzorging. Ziekte en noodgevallen komen daar nog bij.",
      }),
    },
    {
      label: pick({ en: "Lifespan", no: "Levealder", pl: "Długość życia", dk: "Levetid", se: "Livslängd", fi: "Elinikä", de: "Lebenserwartung", fr: "Espérance de vie", nl: "Levensverwachting" }),
      value: pick({
        en: `${breed.lifespan[0]}–${breed.lifespan[1]} years`,
        no: `${breed.lifespan[0]}–${breed.lifespan[1]} år`,
        pl: `${breed.lifespan[0]}–${breed.lifespan[1]} lat`,
        dk: `${breed.lifespan[0]}–${breed.lifespan[1]} år`,
        se: `${breed.lifespan[0]}–${breed.lifespan[1]} år`,
        fi: `${breed.lifespan[0]}–${breed.lifespan[1]} vuotta`,
        de: `${breed.lifespan[0]}–${breed.lifespan[1]} Jahre`,
        fr: `${breed.lifespan[0]}–${breed.lifespan[1]} ans`,
        nl: `${breed.lifespan[0]}–${breed.lifespan[1]} jaar`,
      }),
      detail: pick({
        en: "The whole of that time is the commitment, not just the puppy year.",
        no: "Hele den tiden er forpliktelsen, ikke bare valpeåret.",
        pl: "Cały ten czas jest zobowiązaniem, nie tylko rok szczeniaka.",
        dk: "Hele den tid er forpligtelsen, ikke kun hvalpeåret.",
        se: "Hela den tiden är åtagandet, inte bara valpåret.",
        fi: "Koko tuo aika on sitoumus, ei vain pentuvuosi.",
        de: "Die gesamte Zeit ist die Verpflichtung, nicht nur das Welpenjahr.",
        fr: "Toute cette période est l'engagement, pas seulement l'année du chiot.",
        nl: "Die hele periode is de verbintenis, niet alleen het puppyjaar.",
      }),
    },
  ];
}

/** Health framing that stays honest without pretending to be veterinary advice. */
export function healthNote(t: BreedTraits): string {
  const parts: string[] = [];
  if (t.size >= 4)
    parts.push(
      pick({
        en: "Larger dogs carry more joint wear and tend to have shorter lives.",
        no: "Større hunder får mer slitasje på ledd og lever gjerne kortere.",
        pl: "Większe psy mają większe obciążenie stawów i zwykle żyją krócej.",
        dk: "Større hunde bærer mere ledslid og har en tendens til at leve kortere.",
        se: "Större hundar har mer ledslitage och tenderar att leva kortare liv.",
        fi: "Suuremmilla koirilla on enemmän nivelten kulumista ja ne elävät yleensä lyhyemmän elämän.",
        de: "Größere Hunde tragen mehr Gelenkverschleiß und leben tendenziell kürzer.",
        fr: "Les grands chiens supportent plus d'usure articulaire et ont tendance à vivre moins longtemps.",
        nl: "Grotere honden hebben meer gewrichtsslijtage en leven doorgaans korter.",
      }),
    );
  if (t.heatTolerance <= 2)
    parts.push(
      pick({
        en: "Breathing and heat regulation deserve particular attention in this breed.",
        no: "Pust og varmeregulering fortjener særlig oppmerksomhet hos denne rasen.",
        pl: "Oddychanie i regulacja temperatury zasługują na szczególną uwagę u tej rasy.",
        dk: "Åndedræt og varmeregulering fortjener særlig opmærksomhed hos denne race.",
        se: "Andning och värmereglering förtjänar särskild uppmärksamhet hos denna ras.",
        fi: "Hengitys ja lämmönsäätely ansaitsevat erityistä huomiota tässä rodussa.",
        de: "Atmung und Wärmeregulierung verdienen bei dieser Rasse besondere Aufmerksamkeit.",
        fr: "La respiration et la régulation de la chaleur méritent une attention particulière chez cette race.",
        nl: "Ademhaling en warmteregulatie verdienen bijzondere aandacht bij dit ras.",
      }),
    );
  parts.push(
    pick({
      en: "Ask any breeder or rescue which health screening the parents have had, and speak to a vet before you commit.",
      no: "Spør enhver oppdretter eller omplasserer hvilke helseundersøkelser foreldrene har tatt, og snakk med en veterinær før du bestemmer deg.",
      pl: "Zapytaj hodowcę lub organizację adopcyjną, jakie badania zdrowotne przeszli rodzice, i porozmawiaj z weterynarzem, zanim się zdecydujesz.",
      dk: "Spørg enhver opdrætter eller internat, hvilke sundhedsscreeninger forældrene har fået, og tal med en dyrlæge, før du forpligter dig.",
      se: "Fråga varje uppfödare eller omplaceringsorganisation vilka hälsokontroller föräldrarna har genomgått, och prata med en veterinär innan du bestämmer dig.",
      fi: "Kysy jokaiselta kasvattajalta tai pelastusjärjestöltä, mitä terveystarkastuksia vanhemmille on tehty, ja keskustele eläinlääkärin kanssa ennen sitoutumista.",
      de: "Fragen Sie jeden Züchter oder jede Tierschutzorganisation nach den Gesundheitsuntersuchungen der Eltern und sprechen Sie mit einem Tierarzt, bevor Sie sich entscheiden.",
      fr: "Demandez à tout éleveur ou refuge quels dépistages de santé les parents ont subis, et parlez-en à un vétérinaire avant de vous engager.",
      nl: "Vraag elke fokker of opvangorganisatie welke gezondheidsscreenings de ouders hebben gehad, en praat met een dierenarts voordat u zich committeert.",
    }),
  );
  return parts.join(" ");
}
