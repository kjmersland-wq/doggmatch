import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Nederlandstalige rasteksten, gekoppeld aan dezelfde vaste ras-id's. */
export const breedContentNl: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "Een openhartige, voedselgedreven werkhond die niet voor niets dé standaard gezinshond is geworden — en die nog steeds een echte taak nodig heeft om tevreden te zijn.",
    strengths: [
      "Houdt van mensen om zich heen",
      "Leert snel, zeker voor een lekker hapje",
      "Heerlijk gezelschap, dag in dag uit",
      "Gaat graag mee met alles wat actief is",
      "Past zich meestal goed aan het gezinsleven aan",
    ],
    considerations: [
      "Verliest het hele jaar door haar — een goede stofzuiger is geen overbodige luxe",
      "Heeft elke dag een echte wandeling nodig, niet alleen in het weekend",
      "Groot en sterk aan de lijn totdat hem anders geleerd wordt",
      "Verveelt zich snel zonder taak, en een verveelde Labrador zoekt kattenkwaad op",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Zachtaardig, leergierig en eindeloos geduldig. Een Golden vraagt vooral om gezelschap, meer dan om wat dan ook.",
    strengths: [
      "Heerlijk lief voor kinderen",
      "Leert graag als er een beloning tegenover staat",
      "Vriendelijk naar mensen en andere honden",
      "Het gelukkigst buiten bij koeler weer",
    ],
    considerations: [
      "Verliest twee keer per jaar flink haar — verwacht bollen haar door het huis",
      "Heeft de meeste weken een goede borstelbeurt nodig, anders verklit de vacht",
      "Heeft het moeilijk bij warm weer, dus in de zomer beter vroeg wandelen",
      "Vindt het écht vervelend om lang alleen gelaten te worden",
    ],
  },
  poodle: {
    displayName: "Poedel (Groot)",
    summary:
      "Een atletische, opvallend intelligente hond achter een elegante vacht. Bloeit op bij het oplossen van problemen en een hechte samenwerking.",
    strengths: [
      "Verliest nauwelijks haar",
      "Pikt dingen opvallend snel op",
      "Prima in een appartement, zolang hij maar genoeg naar buiten kan",
      "Speels zonder chaotisch te zijn",
    ],
    considerations: [
      "Om de 6 tot 8 weken naar de trimsalon, en dat is niet goedkoop",
      "Heeft puzzels en training nodig, niet alleen kilometers aan de lijn",
      "Kan echt angstig worden als hij te vaak alleen wordt gelaten",
      "De trimkosten lopen over de jaren gestaag op",
    ],
  },
  "french-bulldog": {
    displayName: "Franse Bulldog",
    summary:
      "Een compacte, komische en diep gehechte stadshond met een bescheiden bewegingsbehoefte en serieuze gezondheidsaandachtspunten.",
    strengths: [
      "Heel gelukkig in een appartement",
      "Heeft niet veel beweging nodig",
      "Aanhankelijk, en altijd bij je in de buurt",
      "Rustiger dan de meeste kleine honden",
    ],
    considerations: [
      "Kan moeilijk ademen bij hitte of na echte inspanning",
      "De dierenartskosten lopen over een leven vaak hoger op",
      "Kan slecht overweg met een hele werkdag alleen thuis",
      "Sta erop dat de fokker goed gezondheidsonderzoek doet",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "De meest leergierige hond die de meeste mensen eigenlijk niet zouden moeten nemen. Briljant, intens, en ongelukkig zonder dagelijks werk.",
    strengths: [
      "Leert bijna alles wat je aanleert",
      "Uitblinker in sport, speurwerk en puzzels",
      "Diep gehecht aan zijn eigen persoon",
      "Op zijn best bij echt actieve mensen",
    ],
    considerations: [
      "Heeft serieuze dagelijkse beweging nodig, en ook mentale uitdaging",
      "Voelt zich zelden echt op zijn gemak in een appartement of rustige routine",
      "Kan de neiging hebben kinderen, fietsers of de kat te hoeden",
      "Een onderbenutte Collie zet dat brein snel in voor problemen",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "Een kleine, zachtaardige metgezel die het liefst overal is waar jij bent. Rustig gezelschap in plaats van een project.",
    strengths: [
      "Zachtaardig met kinderen en ouderen",
      "Volkomen tevreden in een klein huis",
      "Kan goed overweg met andere honden en huisdieren",
      "Heeft geen lange wandelingen nodig",
    ],
    considerations: [
      "Enkele bekende erfelijke hart- en neurologische aandoeningen",
      "Zelden gelukkig lang alleen — een echte plakhond",
      "Oren en vacht hebben regelmatige controle en verzorging nodig",
      "Vraag altijd naar gezondheidsonderzoek van beide ouderdieren",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "Een sprinter die het grootste deel van de dag slaapt. Rustig, netjes en verrassend goed geschikt voor rustige huishoudens.",
    strengths: [
      "Heerlijk rustig binnenshuis",
      "Makkelijke vacht, en blaft zelden",
      "Een paar korte sprintjes zijn ruim voldoende",
      "Vaak op zoek naar een thuis via een asiel of rehoming",
    ],
    considerations: [
      "Een sterke drang om alles wat klein en snel is te achtervolgen",
      "Loslopen kan alleen in een echt goed omheind terrein",
      "Heeft het snel koud, dus een jas en zacht ligbed zijn geen luxe",
      "Dunne huid betekent sneller schrammen en wondjes dan je zou denken",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Onafhankelijk, kieskeurig en op zichzelf. Een Shiba respecteert je, in plaats van je te gehoorzamen.",
    strengths: [
      "Kan beter dan de meeste honden tegen alleen zijn",
      "Netjes, bijna kat-achtig",
      "Klein maar stevig",
      "Vaak een lang leven beschoren",
    ],
    considerations: [
      "Van nature zelfstandig — de terugroep vraagt echt geduldig werk",
      "Verliest twee keer per jaar enorm veel haar, overal",
      "Vaak terughoudend of afstandelijk naar andere honden",
      "Niet de meest vergevingsgezinde eerste hond als je nieuw bent in training",
    ],
  },
  "german-shepherd": {
    displayName: "Duitse Herder",
    summary:
      "Serieus, waakzaam en diep loyaal. Een Duitse Herder wil een taak, een routine en iemand die het waard is om voor te werken.",
    strengths: [
      "Leert snel en onthoudt goed",
      "Toegewijd aan zijn eigen mensen",
      "Heerlijk gezelschap eenmaal goed gesocialiseerd",
      "Op zijn best met een dagelijkse taak",
    ],
    considerations: [
      "Verliest het hele jaar door haar, en daarbovenop twee keer per jaar flink",
      "Heeft dagelijks een uur of meer echt werk nodig, niet alleen een ommetje",
      "Kan wantrouwig zijn naar vreemden zonder vroege, bewuste socialisatie",
      "Vraag elke fokker naar onderzoek op heup- en elleboogdysplasie",
    ],
  },
  "dachshund": {
    displayName: "Teckel",
    summary:
      "Klein, grappig en dapperder dan zijn pootjes doen vermoeden. Een grote persoonlijkheid die graag dicht bij je is.",
    strengths: [
      "Past prima in een klein huis",
      "Heeft geen lange wandelingen nodig",
      "Slim en vol karakter",
      "Fijn gezelschap, altijd om je voeten",
    ],
    considerations: [
      "De rug is echt kwetsbaar — geen trappen of van de bank springen",
      "Houdt van zijn eigen stem, vaak bij de deurbel",
      "Kan koppig zijn tijdens training — reken op onderhandelen",
      "Komt makkelijk aan in gewicht, wat zwaar is voor die lange rug",
    ],
  },
  "beagle": {
    displayName: "Beagle",
    summary:
      "Een neus op vier poten. Vrolijk, sociaal en bijna onmogelijk weg te houden van een goede lucht.",
    strengths: [
      "Echt vriendelijk naar iedereen",
      "Stevig en makkelijk in de omgang met kinderen",
      "Houdt van andere honden",
      "Korte vacht, eenvoudig te verzorgen",
    ],
    considerations: [
      "De terugroep is lastig — de neus wint meestal de discussie",
      "Janken en blaffen bij verveling of te lang alleen gelaten worden",
      "Eet werkelijk alles wat binnen bereik ligt",
      "Heeft een écht goed afgesloten tuin nodig, geen laag hekje",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker Spaniël",
    summary:
      "Zachte ogen, altijd in de weer en eindeloos gewillig. Een Cocker is het gelukkigst als hij iets met jou aan het doen is.",
    strengths: [
      "Aanhankelijk en gretig om te plezieren",
      "Houdt van speurspelletjes en spel",
      "Redt zich zowel in de stad als op het platteland",
      "Fijne maat voor de meeste huizen",
    ],
    considerations: [
      "Oren moeten vaak gecontroleerd en gereinigd worden, anders volgen infecties",
      "De vacht verklit snel zonder regelmatige, goede borstelbeurt",
      "Wordt onrustig en gefrustreerd zonder een taak",
      "Kan slecht overweg met lange uren alleen",
    ],
  },
  "chihuahua": {
    displayName: "Chihuahua",
    summary:
      "Piepklein, brutaal en volledig toegewijd aan één of twee mensen. Kleine hond, grote-mensen-meningen.",
    strengths: [
      "Perfect voor een appartement",
      "Heeft heel weinig beweging nodig",
      "Wordt vaak oud, soms tot ver in de tienerjaren",
      "Reist makkelijk mee",
    ],
    considerations: [
      "Echt kwetsbaar — geen hond voor uitbundig hanteren",
      "Heeft de neiging te blaffen naar alles wat onbekend is, ook de pakketbezorger",
      "Heeft het snel koud en heeft in de winter een jasje nodig",
      "Heeft echte, bewuste socialisatie nodig om ontspannen te blijven en niet snauwerig te worden",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Dwergschnauzer",
    summary:
      "Baardig, pienter en stilletjes zelfverzekerd. Een terriërbrein in een nette, weinig-verlies-vacht.",
    strengths: [
      "Verliest heel weinig haar",
      "Scherp en leert snel",
      "Past zowel in een appartement als een huis",
      "Stevig voor een kleine hond",
    ],
    considerations: [
      "Om de 6 tot 8 weken trimmen, wat aardig oploopt in kosten",
      "Heeft de neiging te blaffen naar de deur, de post en de wind",
      "Niet altijd gecharmeerd van kleinere huisdieren in huis",
      "Komt snel aan, dus de porties moeten kloppen",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berner Sennenhond",
    summary:
      "Enorm, zachtaardig en kalm. Een Berner is zacht gezelschap voor een gezin met ruimte en een zwak voor haar op de bank.",
    strengths: [
      "Heerlijk geduldig met kinderen",
      "Rustig binnenshuis voor zo'n grote hond",
      "Houdt van koud weer",
      "Vriendelijk van aard en stabiel",
    ],
    considerations: [
      "Een kortere levensverwachting dan de meeste rassen — een eerlijk hartzeer om mee te wegen",
      "Veel haar, overal in huis, het grootste deel van het jaar",
      "Kost merkbaar meer aan voer, verzekering en dierenartszorg",
      "Heeft het duidelijk moeilijk zodra het warmer wordt",
    ],
  },
  "australian-shepherd": {
    displayName: "Australische Herder",
    summary:
      "Vlot, atletisch en altijd op scherp. Een Aussie heeft meer aan een doel dan aan een tuin.",
    strengths: [
      "Briljant in alles wat je aanleert",
      "Houdt van sport, trucjes en speurwerk",
      "Zeer gehecht aan zijn eigen persoon",
      "Knap en taai buiten",
    ],
    considerations: [
      "Heeft elke dag uren aan echte activiteit nodig",
      "Zal kinderen, fietsen en joggers hoeden als hij te weinig beweging krijgt",
      "Verveelt zich snel, en laat dat luidruchtig merken",
      "Zelden een goede match voor het appartementsleven",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack Russell Terriër",
    summary:
      "Klein, snel en volledig overtuigd van zichzelf. Erg leuk als je van een hond met een motortje houdt.",
    strengths: [
      "Taai, gezond en lang levend",
      "Past in een klein huis",
      "Eindeloos speels",
      "Kan beter dan de meeste honden tegen alleen zijn",
    ],
    considerations: [
      "Achtervolgt alles wat klein en snel is, eekhoorns incluis",
      "Graaft, en meent het — je gazon is niet veilig",
      "Kan ruzie zoeken met andere honden, zeker onbekende",
      "Heeft veel meer beweging nodig dan zijn formaat doet vermoeden",
    ],
  },
  "siberian-husky": {
    displayName: "Siberische Husky",
    summary:
      "Prachtig, vriendelijk en gebouwd om de hele dag te rennen. Een Husky doet zelden iets alleen omdat jij het vraagt.",
    strengths: [
      "Sociaal met mensen en honden",
      "Gemaakt voor koud weer en lange afstanden",
      "Blaft zelden",
      "Netjes, met weinig hondengeur",
    ],
    considerations: [
      "Ontsnapt uit tuinen met echte vastberadenheid en komt niet altijd betrouwbaar terug",
      "De terugroep is een levenslang project, geen weekendklusje",
      "Verliest twee keer per jaar enorm veel haar — overal, wekenlang",
      "Heeft het echt zwaar in warme klimaten of een hete zomer",
    ],
  },
  "boxer": {
    displayName: "Boxer",
    summary:
      "Een clown die nooit helemaal volwassen wordt. Uitbundig, warm en altijd middenin het gebeuren.",
    strengths: [
      "Geweldig met kinderen",
      "Speels tot op hoge leeftijd",
      "Korte vacht, makkelijk te verzorgen",
      "Leert goed met vriendelijke, opgewekte training",
    ],
    considerations: [
      "Levendig en sterk — opspringen moet er vroeg uitgetraind worden",
      "Raakt snel oververhit door die korte snuit",
      "Enkele serieuze erfelijke gezondheidsproblemen binnen het ras",
      "Een notoire kwijler — houd een doekje bij de hand",
    ],
  },
  "rottweiler": {
    displayName: "Rottweiler",
    summary:
      "Krachtig, evenwichtig en stilletjes zelfverzekerd. Een Rottweiler heeft een eigenaar nodig die weet wat hij doet.",
    strengths: [
      "Stabiel en zelfverzekerd bij een goede opvoeding",
      "Leert snel en werkt gewillig mee",
      "Loyaal en beschermend naar het gezin",
      "Makkelijke vacht",
    ],
    considerations: [
      "Erg sterk — het lijnwerk moet vanaf het begin goed zitten",
      "Heeft vanaf dag één zorgvuldige, bewuste socialisatie nodig",
      "Verzekering en voer kosten merkbaar meer",
      "Sommige plekken en verzekeraars beperken het ras — vooraf de moeite van het checken waard",
    ],
  },
  "whippet": {
    displayName: "Whippet",
    summary:
      "Een bankhond met een sprinterslijf. Rustig, aanhankelijk en opvallend makkelijk in huis.",
    strengths: [
      "Rustig en onopvallend thuis",
      "Bijna geen vachtverzorging nodig",
      "Twee korte sprintjes per dag is genoeg",
      "Zachtaardig en stil",
    ],
    considerations: [
      "Achtervolgt alles wat wegrent, katten en joggers incluis",
      "Heeft een goed omheind terrein nodig om los te lopen",
      "Heeft het snel koud — een jas is in de winter geen optie",
      "Dunne huid scheurt makkelijker dan je zou verwachten",
    ],
  },
  "shih-tzu": {
    displayName: "Shih Tzu",
    summary:
      "Gemaakt om metgezel te zijn, en daar erg goed in. Gelukkig op schoot, gelukkig in een klein appartement.",
    strengths: [
      "Ideaal voor het leven in de stad",
      "Vriendelijk naar bijna iedereen",
      "Verliest heel weinig haar",
      "Heeft geen lange wandelingen nodig",
    ],
    considerations: [
      "Dagelijks borstelen, of een korte trim om het behapbaar te houden",
      "Die korte snuit maakt hitte echt gevaarlijk",
      "Ogen moeten dagelijks bekeken en schoongeveegd worden",
      "Zindelijk maken kan echt geduld vergen",
    ],
  },
  "pug": {
    displayName: "Mopshond",
    summary:
      "Komisch, aanhankelijk en altijd dichtbij. Een Mops vraagt veel meer om gezelschap dan om beweging.",
    strengths: [
      "Houdt van iedereen, andere honden incluis",
      "Prima in het allerkleinste huis",
      "Makkelijk in de omgang en grappig",
      "Heeft weinig beweging nodig",
    ],
    considerations: [
      "Ademhalingsproblemen komen vaak voor binnen het ras",
      "Hitte kan verrassend snel gevaarlijk worden",
      "Komt heel makkelijk aan — de porties zijn erg belangrijk",
      "Plooien en ogen hebben dagelijks goede verzorging nodig",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon Frisé",
    summary:
      "Een klein wit wolkje met een vrolijke inslag. Sociaal, pienter en het gelukkigst met mensen om zich heen.",
    strengths: [
      "Verliest heel weinig haar",
      "Vriendelijk met kinderen en andere honden",
      "Past goed in appartementen en kleine tuinen",
      "Leert snel en houdt van complimenten",
    ],
    considerations: [
      "Om de 4 tot 6 weken naar de trimsalon, en dat is niet optioneel",
      "Kan echt niet goed tegen lang alleen gelaten worden",
      "Huid en oren hebben regelmatige aandacht nodig",
      "Zindelijk maken vraagt om echte consistentie",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire Bull Terriër",
    summary:
      "Gespierd, zachtaardig en berucht dol op kinderen. Een Staffie houdt onvoorwaardelijk van zijn mensen.",
    strengths: [
      "Geweldige gezinshond bij een goede opvoeding",
      "Korte vacht, heel makkelijk in onderhoud",
      "Stevig en speels",
      "Gretig om te plezieren",
    ],
    considerations: [
      "Kan lastig zijn naar andere honden zonder zorgvuldige vroege omgang",
      "Verrassend sterk voor zijn formaat aan de lijn",
      "Kauwt met echt enthousiasme door zachte speeltjes en manden heen",
      "Wordt op sommige plekken onterecht beperkt of verkeerd beoordeeld — goed om te weten voordat je begint",
    ],
  },
  "vizsla": {
    displayName: "Vizsla",
    summary:
      "De plakhond bij uitstek. Atletisch, gevoelig en nooit meer dan een meter bij je vandaan.",
    strengths: [
      "Prachtig, stil en netjes",
      "Geweldige hardloop- of wandelmaatje",
      "Zeer aanhankelijk",
      "Bijna geen vachtverzorging nodig",
    ],
    considerations: [
      "Heeft het echt zwaar als hij hele werkdagen alleen wordt gelaten",
      "Heeft dagelijks een uur of twee stevige beweging nodig",
      "Gevoelig voor een verheven stem — alleen vriendelijke training",
      "Heeft het snel koud tijdens winterse wandelingen",
    ],
  },
  "samoyed": {
    displayName: "Samojeed",
    summary:
      "De lachende sneeuwhond. Sociaal, spraakzaam en prachtig — en met een enorme hoeveelheid vacht.",
    strengths: [
      "Echt vriendelijk naar iedereen",
      "Houdt van koud weer en sneeuw",
      "Speels en gezinsgericht",
      "Zelden agressief",
    ],
    considerations: [
      "Verliest een werkelijk verbazingwekkende hoeveelheid haar",
      "Heeft meerdere keren per week borstelen nodig om het bij te houden",
      "Praat, jankt en laat regelmatig zijn mening horen",
      "Raakt snel oververhit zodra de zomer aanbreekt",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire Terriër",
    summary:
      "Piepklein, scherp en boordevol terriër. Een Yorkie is dapperder dan iedereen verwacht.",
    strengths: [
      "Verliest nauwelijks haar",
      "Perfect formaat voor een appartement",
      "Pienter en leert snel",
      "Wordt vaak oud",
    ],
    considerations: [
      "De vacht heeft dagelijkse verzorging nodig, of een korte trim om het simpel te houden",
      "Heeft de neiging naar alles te blaffen, ook de pakketbezorger",
      "Kwetsbaar onderweg — makkelijk onbedoeld pijn te doen",
      "Zindelijk maken kan langzamer gaan dan je zou verwachten",
    ],
  },
};
