import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDiveNl: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "De Labrador begon bij de waterhonden van Newfoundland en werd in Groot-Brittannië verfijnd tot een apporteur die met plezier ophaalt op het land en uit ijskoud water. Vandaar die liefde voor zwemmen.",
    healthConsiderations:
      "Een goede fokker laat u graag de heup- en ellebooguitslagen zien, en DNA-uitslagen voor progressieve retina-atrofie (prcd-PRA) en inspanningsgeïnduceerde collaps (EIC). In het dagelijks leven vraagt vooral het gewicht aandacht: veel Labradors dragen een genvariant voor meer eetlust, en afgewogen porties houden ze langer fit.",
    poorMatchFor: [
      "U droomt van een bank zonder hondenharen",
      "Een dagelijkse wandeling en een beetje training passen lastig in uw week",
      "Uw hond zou de meeste dagen een volledige werkdag alleen thuis zijn",
    ],
    keyTradeoffs: [
      "Heerlijk makkelijk te trainen omdat eten zoveel voor ze betekent, en diezelfde eetlust vraagt om een oogje op de lijn",
      "Begroet bijna iedereen als een vriend: fijn gezelschap, maar geen waakhond",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "De Franse Bulldog stamt af van kleine Engelse bulldogs die kantwerkers in de negentiende eeuw meenamen naar Frankrijk. De Parijzenaars vielen voor ze, en sindsdien is het een echte gezelschapshond.",
    healthConsiderations:
      "Dat lieve platte snuitje kan het ademen zwaar maken (BOAS). Vraag daarom of de ouders zijn beoordeeld op hun luchtwegen, en kies een pup met mooi open neusgaten. Rug, huidplooien en oren hebben wat extra zorg nodig, en veel nestjes worden via een keizersnede geboren. Reken op een goede verzekering en houd uw hond koel op warme dagen.",
    poorMatchFor: [
      "U zoekt een maatje voor hardlopen, lange wandeltochten of hete zomerdagen",
      "Een onverwachte dierenartsrekening van een paar duizend euro zou u echt zwaar vallen",
      "Uw huis wordt 's zomers warm en is moeilijk koel te houden",
    ],
    keyTradeoffs: [
      "Klein, rustig en tevreden met korte rondjes, maar hem gezond houden kan meer kosten dan bij bijna elk ander ras",
      "Het snuitje waar iedereen voor valt, zit ook achter de meeste gezondheidszorgen",
    ],
  },
  "border-collie": {
    originalPurpose:
      "De Border Collie komt uit de heuvels op de grens van Engeland en Schotland, waar hij schapen bijeendreef over wijde hellingen en luisterde naar een herder in de verte.",
    healthConsiderations:
      "Gelukkig is het een robuust ras. Vraag naar heupuitslagen, een oogonderzoek en DNA-tests voor Collie Eye Anomaly, Trapped Neutrophil Syndrome en neuronale ceroïd-lipofuscinose. Epilepsie komt voor, en veel Border Collies zijn gevoelig voor harde geluiden, dus een rustig huis helpt.",
    poorMatchFor: [
      "U zoekt een gezinshond die tevreden is met wandelingen en geen werk voor zijn hoofd nodig heeft",
      "U woont aan een drukke weg waar langsrijdende auto's en fietsers te verleidelijk zijn om achterna te gaan",
      "Luie weekenden op de bank zijn voor u het toppunt van geluk",
    ],
    keyTradeoffs: [
      "Misschien wel de leergierigste hond ter wereld, en zonder taak verzint hij er zelf een",
      "Zijn gevoeligheid maakt hem een geweldige partner, maar een druk en rumoerig huis put hem uit",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "De Cavalier werd in de jaren twintig in Engeland opnieuw gefokt om te lijken op de kleine spaniëls op schilderijen van het hof van Karel II, en is vanaf het begin een toegewijde schoothond geweest.",
    healthConsiderations:
      "Hartklepziekte komt heel vaak voor en begint meestal op middelbare leeftijd, dus vraag om recente hartuitslagen van beide ouders. Syringomyelie is ook een serieuze zorg, en ouders met een MRI-screening zijn het wachten meer dan waard. Er bestaan DNA-tests voor episodic falling en dry eye/curly coat.",
    poorMatchFor: [
      "Uw Cavalier zou het grootste deel van elke werkdag alleen zijn",
      "Regelmatige hartcontroles, en misschien levenslang medicijnen, passen niet in het budget",
      "U wilt graag een hond die laat weten dat er iemand aan de deur staat",
    ],
    keyTradeoffs: [
      "Een van de zachtste, makkelijkste karakters die er zijn, samen met een van de veeleisendere gezondheidsprofielen",
      "Houdt van iedereen die hij tegenkomt: heerlijk thuis, hopeloos als waakhond",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "Het ras werd in 1899 in Duitsland vastgelegd als veelzijdige herdershond, en werkte al snel als geleidehond, speurhond en naast politie en leger.",
    healthConsiderations:
      "Vraag naar heup- en ellebooguitslagen en een DNA-test voor degeneratieve myelopathie. Maagtorsie, exocriene pancreasinsufficiëntie en een gevoelige maag of huid kunnen voorkomen. Het is vriendelijker om te kiezen voor lijnen met een rechte, evenwichtige bouw in plaats van een sterk aflopende rug.",
    poorMatchFor: [
      "Dit is uw eerste hond en u heeft nog geen plan voor training en socialisatie",
      "U zoekt een hond die van nature ontspannen is bij vreemden",
      "Veel haren en een sterke hond aan de lijn zouden u uitputten",
    ],
    keyTradeoffs: [
      "Diep trouw en beschermend, en rustige, consequente socialisatie houdt die beschermende kant in verhouding",
      "Een plezier om te trainen, en echt ongelukkig zonder vaste taken",
    ],
  },
  dachshund: {
    originalPurpose:
      "De Teckel werd in Duitsland gefokt om de das (Dachs) onder de grond te volgen: een kleine, onverschrokken jager met een blaf die je tot diep uit het hol hoort.",
    healthConsiderations:
      "Rugproblemen (hernia, IVDD) treffen best veel Teckels en kunnen ernstig zijn. Het liefste wat u kunt doen: hem slank houden, hem op de trap dragen en springen voorzichtig afleren. Ruwharige lijnen hebben vaak minder rugklachten. Voor sommige variëteiten bestaan DNA-tests voor een oogziekte (cord1-PRA) en de ziekte van Lafora.",
    poorMatchFor: [
      "U woont een paar verdiepingen hoog zonder lift",
      "U heeft een stille hond nodig in een gebouw met dunne muren",
      "De kleinsten in huis zouden de hond het liefst steeds oppakken en rondsjouwen",
    ],
    keyTradeoffs: [
      "Klein genoeg om overal mee naartoe te nemen, met de stem en het zelfvertrouwen van een veel grotere hond",
      "Slim en zelfstandig, dus terugroepen en zindelijkheid vragen meestal wat extra geduld",
    ],
  },
  beagle: {
    originalPurpose:
      "De Beagle is een Britse meutehond, gefokt om het spoor van de haas te volgen terwijl de jagers te voet achteraan kwamen. Die neus heeft nog altijd de leiding.",
    healthConsiderations:
      "Goed nieuws: Beagles zijn meestal gezond en worden oud. Epilepsie, een traag werkende schildklier en rugproblemen kunnen voorkomen, en er is een DNA-test voor het Musladin-Lueke-syndroom. Beagles komen makkelijk aan, en die mooie lange oren hebben regelmatig een controle nodig.",
    poorMatchFor: [
      "U droomt van een hond die u overal los kunt laten lopen",
      "Uw buren zouden last hebben van wat gehuil terwijl u weg bent",
      "Uw tuin is niet goed omheind",
    ],
    keyTradeoffs: [
      "Vriendelijk tegen mensen en honden, maar de neus wint meestal van wat u net vroeg",
      "Compact genoeg voor de meeste huizen, met het uithoudingsvermogen van een werkende jachthond",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "De Cocker is een Britse jachthond, gefokt om houtsnippen (woodcock) uit dicht struikgewas op te jagen en terug te brengen. Vandaar de naam.",
    healthConsiderations:
      "De oren zijn het dagelijkse werk: ze vaak drogen en controleren bespaart uw hond een hoop ongemak. Vraag naar heupuitslagen en DNA-tests voor progressieve retina-atrofie (prcd-PRA) en familiaire nefropathie, een nierziekte. Werk- en showlijnen verschillen sterk in energie, dus vraag welke lijn u voor zich heeft.",
    poorMatchFor: [
      "Regelmatig borstelen en trimmen zou er al snel bij inschieten",
      "Uw Cocker zou lange werkdagen alleen zijn",
      "U wilt een rustige hond maar bent gevallen voor een pup uit een werklijn",
    ],
    keyTradeoffs: [
      "Vrolijk en graag willen behagen, en werklijnen zijn veel drukker dan dat zachte snuitje doet vermoeden",
      "Een prachtige vacht die de hulp van een trimmer nodig heeft om zo te blijven",
    ],
  },
  chihuahua: {
    originalPurpose:
      "De Chihuahua is vernoemd naar de Mexicaanse deelstaat en stamt vermoedelijk af van de kleine gezelschapshondjes uit het oude Mexico. Sinds het einde van de negentiende eeuw wordt hij als gezelschapshond gefokt.",
    healthConsiderations:
      "Het gebit vraagt de meeste zorg: dagelijks poetsen en af en toe een professionele gebitsreiniging maken echt verschil. Knieschijf- en hartklepproblemen kunnen voorkomen, en heel kleine pups kunnen een te lage bloedsuiker krijgen. Het mooie is dat 15 jaar of ouder heel normaal is.",
    poorMatchFor: [
      "Er wonen peuters of jonge kinderen in huis",
      "U wilt een hond die rustig en stil blijft als er bezoek komt",
      "Uw winters zijn koud en u trekt uw hond liever geen jasje aan voor elke wandeling",
    ],
    keyTradeoffs: [
      "Klein in ruimte en kosten, en zo teer dat hij voorzichtig behandeld moet worden",
      "Helemaal toegewijd aan zijn mens, en vaak wantrouwig of kletserig tegen alle anderen",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "De Berner Sennenhond was een boerderijhond in het Zwitserse kanton Bern, waar hij melkkarren trok, koeien dreef en een vriendelijk oogje op het erf hield.",
    healthConsiderations:
      "Het moeilijkste aan houden van een Berner is dat zijn leven kort kan zijn, en kanker, vooral histiocytair sarcoom, komt helaas vaak voor. Vraag naar heup- en ellebooguitslagen en een DNA-test voor degeneratieve myelopathie, en leer de signalen van maagtorsie herkennen.",
    poorMatchFor: [
      "U woont in een warm klimaat, of op de bovenste verdieping zonder lift",
      "Zeven tot tien jaar samen zou te kort voelen",
      "De dierenarts- en voerkosten van een grote hond zouden uw budget te zwaar belasten",
    ],
    keyTradeoffs: [
      "Een zachte, geduldige reus, met minder tijd samen dan u zou willen",
      "Rustig als volwassene na een lange, stuiterende pubertijd, en het hele jaar door haren overal",
    ],
  },
};
