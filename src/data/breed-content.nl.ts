import type { BreedContent } from "./breed-content.en";
import type { BreedId } from "./breeds";

/** Nederlandse rasteksten, met namen volgens de Raad van Beheer waar die afwijken. */
export const breedContentNl: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "Een openhartige, op eten gerichte werkhond die niet voor niets de standaard gezinshond is geworden — en die nog steeds een echte taak nodig heeft om tevreden te zijn.",
    strengths: [
      "Houdt van mensen om zich heen",
      "Leert snel, zeker voor een lekker hapje",
      "Heerlijk gezelschap, dag in dag uit",
      "Doet graag mee met alles wat actief is",
      "Past zich meestal goed aan het gezinsleven aan",
    ],
    considerations: [
      "Verhaart het hele jaar door — een goede stofzuiger is geen overbodige luxe",
      "Heeft elke dag een echte wandeling nodig, niet alleen in het weekend",
      "Groot en sterk aan de lijn totdat ze anders geleerd wordt",
      "Verveelt zich snel zonder taak, en een verveelde Labrador zoekt kattenkwaad op",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Zachtaardig, volgzaam en eindeloos geduldig. Een Golden vraagt vooral om gezelschap, meer dan om wat dan ook.",
    strengths: [
      "Heerlijk zachtaardig met kinderen",
      "Leert graag als er een beloning tegenover staat",
      "Vriendelijk voor mensen en andere honden",
      "Het gelukkigst buiten bij koeler weer",
    ],
    considerations: [
      "Verhaart flink twee keer per jaar — reken op plukken haar overal",
      "Heeft de meeste weken een goede beurt met de borstel nodig, anders viltjt de vacht",
      "Heeft het moeilijk bij warm weer, dus zomerwandelingen kunnen beter vroeg",
      "Vindt het echt vervelend om lang alleen gelaten te worden",
    ],
  },
  poodle: {
    displayName: "Poedel (Groot)",
    summary:
      "Een atletische, ongewoon intelligente hond achter een elegante vacht. Bloeit op bij problemen oplossen en nauwe samenwerking.",
    strengths: [
      "Verhaart bijna niet",
      "Pikt dingen opvallend snel op",
      "Kan prima in een appartement, zolang hij genoeg naar buiten kan",
      "Speels zonder chaotisch te zijn",
    ],
    considerations: [
      "Om de 6 tot 8 weken naar de trimsalon, en dat is niet goedkoop",
      "Heeft puzzels en training nodig, niet alleen kilometers aan de lijn",
      "Kan echt angstig worden als hij te vaak alleen wordt gelaten",
      "Trimkosten lopen door de jaren heen gestaag op",
    ],
  },
  "french-bulldog": {
    displayName: "Franse Bulldog",
    summary:
      "Een compacte, komische en diep gehechte stadshond met bescheiden bewegingsbehoefte en reële gezondheidsaandachtspunten.",
    strengths: [
      "Heel blij in een appartement",
      "Heeft niet veel beweging nodig",
      "Aanhankelijk, en altijd in de buurt",
      "Rustiger dan de meeste kleine honden",
    ],
    considerations: [
      "Kan moeite hebben met ademhalen bij hitte of na echte inspanning",
      "Dierenartskosten lopen over een leven vaak hoger op",
      "Kan niet goed alleen gelaten worden voor een hele werkdag",
      "Het loont om aan te dringen op een fokker die goed gezondheidstest",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "De meest leerbare hond die de meeste mensen eigenlijk niet zouden moeten nemen. Briljant, intens, en ongelukkig zonder dagelijks werk.",
    strengths: [
      "Leert bijna alles wat je hem leert",
      "Uitblinker in sport, speurwerk en puzzels",
      "Diep gehecht aan zijn eigen persoon",
      "Op zijn best bij echt actieve mensen",
    ],
    considerations: [
      "Heeft serieuze dagelijkse beweging nodig, en ook iets om over na te denken",
      "Went zelden gelukkig aan een appartement of een rustige routine",
      "Kan proberen kinderen, fietsers of de kat te drijven",
      "Een onderstimuleerde Collie zet dat brein snel in voor onheil",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniël",
    summary:
      "Een kleine, zachtaardige metgezel die wil zijn waar u bent. Rustig gezelschap, geen project.",
    strengths: [
      "Zachtaardig met kinderen en ouderen",
      "Volkomen tevreden in een klein huis",
      "Kan goed opschieten met andere honden en huisdieren",
      "Heeft geen lange wandelingen nodig",
    ],
    considerations: [
      "Enkele bekende erfelijke hart- en neurologische aandoeningen",
      "Zelden blij om lang alleen gelaten te worden — een echte plakkerd",
      "Oren en vacht hebben regelmatige controle en verzorging nodig",
      "Vraag altijd om gezondheidstesten van beide ouderdieren te zien",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "Een sprinter die het grootste deel van de dag slaapt. Rustig, schoon en verrassend goed passend bij kalme huishoudens.",
    strengths: [
      "Heerlijk rustig binnenshuis",
      "Makkelijke vacht, en blaft zelden",
      "Een paar korte sprintjes zijn ruim voldoende",
      "Vaak op zoek naar een thuis via een opvangorganisatie",
    ],
    considerations: [
      "Een sterke drang om alles wat klein en snel is te achtervolgen",
      "Loslopen kan alleen in een goed, veilig omheinde ruimte",
      "Heeft het flink koud, dus een jasje en een zachte mand zijn geen luxe",
      "Dunne huid betekent dat schaafwondjes sneller ontstaan dan je zou denken",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Onafhankelijk, kieskeurig en zelfvoorzienend. Een Shiba respecteert u eerder dan dat hij u gehoorzaamt.",
    strengths: [
      "Kan beter tegen alleen zijn dan de meeste honden",
      "Schoon, bijna kattenachtig",
      "Klein maar stevig",
      "Leeft vaak lang",
    ],
    considerations: [
      "Van nature onafhankelijk — de terugroep vraagt echt geduldig werk",
      "Verliest twee keer per jaar een enorme hoeveelheid haar, overal",
      "Vaak terughoudend of afstandelijk tegenover andere honden",
      "Niet de meest vergevingsgezinde eerste hond als u nieuw bent in training",
    ],
  },
  "german-shepherd": {
    displayName: "Duitse Herder",
    summary:
      "Serieus, waakzaam en diep loyaal. Een Duitse Herder wil een taak, een routine en iemand voor wie het de moeite waard is te werken.",
    strengths: [
      "Leert snel en onthoudt goed",
      "Toegewijd aan zijn eigen mensen",
      "Fantastisch zodra hij goed gesocialiseerd is",
      "Op zijn best met een dagelijkse taak",
    ],
    considerations: [
      "Verhaart het hele jaar door, en daarbovenop nog flink twee keer per jaar",
      "Heeft elke dag een uur of meer echt werk nodig, niet alleen een ommetje",
      "Kan wantrouwend zijn tegenover vreemden zonder vroege, doelgerichte socialisatie",
      "Het loont om elke fokker te vragen naar heup- en elleboogonderzoek",
    ],
  },
  "dachshund": {
    displayName: "Teckel",
    summary:
      "Klein, grappig en dapperder dan zijn pootjes doen vermoeden. Een groot karakter dat graag dicht bij u is.",
    strengths: [
      "Past prima in een klein huis",
      "Heeft geen lange wandelingen nodig",
      "Slim en vol karakter",
      "Fijn gezelschap, altijd onder de voeten",
    ],
    considerations: [
      "De rug is echt kwetsbaar — geen trappen of van de bank springen",
      "Houdt van zijn eigen stem, vaak bij de deurbel",
      "Kan koppig zijn tijdens training — reken op onderhandelen",
      "Komt makkelijk aan, wat zwaar is voor die lange rug",
    ],
  },
  "beagle": {
    displayName: "Beagle",
    summary:
      "Een neus op vier poten. Vrolijk, sociaal en bijna niet weg te praten bij een goede geur.",
    strengths: [
      "Oprecht vriendelijk naar iedereen",
      "Stevig en makkelijk in de omgang met kinderen",
      "Houdt van andere honden",
      "Korte vacht, simpel te onderhouden",
    ],
    considerations: [
      "De terugroep is hard werken — de neus wint meestal de discussie",
      "Janken en huilen bij verveling of te lang alleen gelaten worden",
      "Eet werkelijk alles wat binnen bereik ligt",
      "Heeft een echt veilige tuin nodig, niet zomaar een laag hekje",
    ],
  },
  "cocker-spaniel": {
    displayName: "Engelse Cocker Spaniël",
    summary:
      "Zachte ogen, druk en eindeloos bereidwillig. Een Cocker is het gelukkigst als hij iets met u aan het doen is.",
    strengths: [
      "Aanhankelijk en graag tot dienst",
      "Houdt van speurwerk en spelletjes",
      "Redt zich zowel in de stad als op het platteland",
      "Goede maat voor de meeste huizen",
    ],
    considerations: [
      "Oren moeten vaak gecontroleerd en gereinigd worden, anders volgen infecties",
      "De vacht viltjt snel zonder regelmatige, goede beurt met de borstel",
      "Wordt onrustig en gefrustreerd zonder een taak",
      "Kan niet goed tegen lange uren alleen",
    ],
  },
  "chihuahua": {
    displayName: "Chihuahua",
    summary:
      "Piepklein, brutaal en volledig toegewijd aan één of twee mensen. Kleine hond, meningen van volwassen formaat.",
    strengths: [
      "Perfect voor een appartement",
      "Heeft heel weinig beweging nodig",
      "Wordt vaak oud, tot ver in de tienerjaren",
      "Reist makkelijk mee",
    ],
    considerations: [
      "Echt kwetsbaar — geen hond voor uitbundig hanteren",
      "Blaft snel naar alles wat onbekend is, pakketbezorgers incluis",
      "Heeft het flink koud en heeft in de winter een jasje nodig",
      "Heeft echte, doelgerichte socialisatie nodig om ontspannen te blijven en niet snauwerig te worden",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Dwergschnauzer",
    summary:
      "Bebaard, slim en stilletjes belangrijk. Een terriërbrein in een nette, weinig verharende vacht.",
    strengths: [
      "Verhaart heel weinig",
      "Scherp en leert snel",
      "Past bij een appartement of een huis",
      "Stevig voor een kleine hond",
    ],
    considerations: [
      "Elke 6 tot 8 weken trimmen, wat aardig kan oplopen in kosten",
      "Blaft graag naar de deur, de post en de wind",
      "Niet altijd gecharmeerd van kleinere huisdieren in huis",
      "Komt makkelijk aan, dus de porties zijn belangrijk",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berner Sennenhond",
    summary:
      "Enorm, zachtaardig en kalm. Een Berner is zacht gezelschap voor een gezin met ruimte en een zwak voor haren.",
    strengths: [
      "Wonderbaarlijk geduldig met kinderen",
      "Rustig binnenshuis voor zo'n grote hond",
      "Houdt van koud weer",
      "Vriendelijk van aard en stabiel",
    ],
    considerations: [
      "Een kortere levensduur dan de meeste rassen — een eerlijk hartzeer om mee te wegen",
      "Veel haar, door het hele huis, het grootste deel van het jaar",
      "Kost merkbaar meer aan voeding, verzekering en behandeling",
      "Heeft het flink moeilijk zodra het weer warm wordt",
    ],
  },
  "australian-shepherd": {
    displayName: "Australian Shepherd",
    summary:
      "Snel, atletisch en altijd waakzaam. Een Aussie heeft vooral een doel nodig, meer dan een tuin.",
    strengths: [
      "Briljant in alles wat je hem leert",
      "Houdt van sport, trucjes en speurwerk",
      "Zeer gehecht aan zijn persoon",
      "Fraai en gehard voor het buitenleven",
    ],
    considerations: [
      "Heeft elke dag urenlange, echte activiteit nodig",
      "Zal kinderen, fietsers en joggers drijven als hij te weinig beweging krijgt",
      "Verveelt zich snel, en laat dat luidruchtig merken",
      "Zelden een goede match voor het appartementsleven",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack Russell Terriër",
    summary:
      "Klein, snel en volledig overtuigd van zichzelf. Groot plezier als u van een hond met een motortje houdt.",
    strengths: [
      "Taai, gezond en langlevend",
      "Past in een klein huis",
      "Eindeloos speels",
      "Kan beter tegen alleen zijn dan de meeste honden",
    ],
    considerations: [
      "Achtervolgt alles wat klein en snel is, eekhoorns incluis",
      "Graaft, en meent het — uw gazon is niet veilig",
      "Kan opvliegend zijn tegenover andere honden, vooral onbekende",
      "Heeft veel meer beweging nodig dan zijn formaat doet vermoeden",
    ],
  },
  "siberian-husky": {
    displayName: "Siberian Husky",
    summary:
      "Prachtig, vriendelijk en gebouwd om de hele dag te rennen. Een Husky doet zelden wat u wilt alleen omdat u erom vroeg.",
    strengths: [
      "Sociaal met mensen en honden",
      "Gemaakt voor koud weer en lange afstanden",
      "Blaft zelden",
      "Schoon, met weinig hondengeur",
    ],
    considerations: [
      "Ontsnapt met echte vastberadenheid uit tuinen en komt niet betrouwbaar terug",
      "De terugroep is een levenslang project, geen weekendklusje",
      "Verliest twee keer per jaar zijn vacht — overal, wekenlang",
      "Lijdt oprecht in warme klimaten of een hete zomer",
    ],
  },
  "boxer": {
    displayName: "Boxer",
    summary:
      "Een clown die nooit helemaal volwassen wordt. Uitbundig, warm en altijd middenin alles.",
    strengths: [
      "Fantastisch met kinderen",
      "Speels tot op hoge leeftijd",
      "Korte vacht, makkelijk te onderhouden",
      "Leert goed met vriendelijke, positieve training",
    ],
    considerations: [
      "Levendig en sterk — opspringen vraagt om vroege training",
      "Raakt snel oververhit vanwege die korte snuit",
      "Enkele ernstige erfelijke gezondheidsaandoeningen in het ras",
      "Een bewezen kwijler — houd een doekje bij de hand",
    ],
  },
  "rottweiler": {
    displayName: "Rottweiler",
    summary:
      "Krachtig, evenwichtig en rustig zelfverzekerd. Een Rottweiler heeft een eigenaar nodig die weet wat hij doet.",
    strengths: [
      "Stabiel en zelfverzekerd bij een goede opvoeding",
      "Leert snel en werkt gewillig mee",
      "Loyaal en beschermend naar het gezin",
      "Makkelijke vacht",
    ],
    considerations: [
      "Erg sterk — lijntraining moet vanaf het begin solide zijn",
      "Heeft vanaf dag één zorgvuldige, doelgerichte socialisatie nodig",
      "Verzekering en voeding kosten merkbaar meer",
      "Sommige plaatsen en verzekeraars beperken het ras — het loont dit vooraf te checken",
    ],
  },
  "whippet": {
    displayName: "Whippet",
    summary:
      "Een bankhangbeest met het lichaam van een sprinter. Rustig, aanhankelijk en opvallend makkelijk om mee samen te leven.",
    strengths: [
      "Rustig en onopvallend thuis",
      "Bijna geen verzorging nodig",
      "Twee korte sprintjes per dag is genoeg",
      "Zachtaardig en stil",
    ],
    considerations: [
      "Achtervolgt alles wat rent, katten en joggers incluis",
      "Heeft veilig omheinde ruimte nodig om los te lopen",
      "Heeft het koud — een jasje is in de winter geen keuze maar een must",
      "Dunne huid scheurt makkelijker dan u zou verwachten",
    ],
  },
  "shih-tzu": {
    displayName: "Shih Tzu",
    summary:
      "Gemaakt om metgezel te zijn, en daar erg goed in. Blij op schoot, blij in een klein appartement.",
    strengths: [
      "Ideaal voor het stadsleven",
      "Vriendelijk naar bijna iedereen",
      "Verhaart heel weinig",
      "Heeft geen lange wandelingen nodig",
    ],
    considerations: [
      "Dagelijks borstelen, of een korte trim om het behapbaar te houden",
      "Die korte snuit maakt hitte oprecht gevaarlijk",
      "Ogen moeten dagelijks in de gaten gehouden en schoongeveegd worden",
      "Zindelijk worden kan echt geduld vragen",
    ],
  },
  "pug": {
    displayName: "Mops",
    summary:
      "Komisch, aanhankelijk en altijd in de buurt. Een Mops vraagt veel meer om gezelschap dan om beweging.",
    strengths: [
      "Houdt van iedereen, andere honden incluis",
      "Prima in het allerkleinste huis",
      "Ontspannen en grappig",
      "Weinig beweging nodig",
    ],
    considerations: [
      "Ademhalingsproblemen komen vaak voor in het ras",
      "Hitte kan verrassend snel gevaarlijk worden",
      "Komt heel makkelijk aan — porties zijn erg belangrijk",
      "Plooien en ogen hebben dagelijkse verzorging nodig",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon Frisé",
    summary:
      "Een klein wit wolkje met een vrolijke streek. Sociaal, slim en het gelukkigst met mensen om zich heen.",
    strengths: [
      "Verhaart heel weinig",
      "Vriendelijk met kinderen en andere honden",
      "Past bij appartementen en kleine tuinen",
      "Leert snel en houdt van complimentjes",
    ],
    considerations: [
      "Elke 4 tot 6 weken naar de trimsalon, en dat is niet optioneel",
      "Kan echt niet goed tegen lang alleen gelaten worden",
      "Huid en oren hebben regelmatige aandacht nodig",
      "Zindelijkheidstraining vraagt om echte consistentie om te beklijven",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire Bullterrier",
    summary:
      "Gespierd, zachtaardig en berucht dol op kinderen. Een Staffie houdt onvoorwaardelijk van zijn mensen.",
    strengths: [
      "Fantastische gezinshond bij een goede opvoeding",
      "Korte vacht, heel makkelijk te onderhouden",
      "Stevig en speels",
      "Graag tot dienst",
    ],
    considerations: [
      "Kan lastig zijn rond andere honden zonder zorgvuldige, vroege begeleiding",
      "Verrassend sterk voor zijn formaat aan de lijn",
      "Kauwt met echt enthousiasme door zacht speelgoed en manden heen",
      "Op sommige plekken onterecht beperkt of verkeerd beoordeeld — goed om te weten voordat u toezegt",
    ],
  },
  "vizsla": {
    displayName: "Vizsla",
    summary:
      "De plakhond. Atletisch, gevoelig en nooit meer dan een meter bij u vandaan.",
    strengths: [
      "Mooi, rustig en schoon",
      "Fantastische hardloop- of wandelmaat",
      "Zeer aanhankelijk",
      "Bijna geen verzorging nodig",
    ],
    considerations: [
      "Heeft het flink moeilijk als hij hele werkdagen alleen wordt gelaten",
      "Heeft dagelijks een uur of twee echt stevige beweging nodig",
      "Gevoelig voor een verheven stem — alleen vriendelijke training",
      "Heeft het scherp koud tijdens winterwandelingen",
    ],
  },
  "samoyed": {
    displayName: "Samojeed",
    summary:
      "De glimlachende sneeuwhond. Sociaal, praterig en prachtig — en een enorme hoeveelheid vacht.",
    strengths: [
      "Oprecht vriendelijk naar iedereen",
      "Houdt van koud weer en sneeuw",
      "Speels en gezinsgericht",
      "Zelden agressief",
    ],
    considerations: [
      "Verhaart een oprecht verbazingwekkende hoeveelheid",
      "Moet meerdere keren per week geborsteld worden om het bij te houden",
      "Praat, huilt en laat regelmatig zijn mening horen",
      "Raakt makkelijk oververhit zodra de zomer aanbreekt",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshireterriër",
    summary:
      "Piepklein, scherp en boordevol terriër. Een Yorkie is dapperder dan iedereen verwacht.",
    strengths: [
      "Verhaart nauwelijks",
      "Perfecte maat voor een appartement",
      "Slim en leert snel",
      "Wordt vaak oud",
    ],
    considerations: [
      "De vacht heeft dagelijkse zorg nodig, of een korte trim om het simpel te houden",
      "Blaft naar van alles, pakketbezorgers incluis",
      "Kwetsbaar onder de voeten — makkelijk onbedoeld pijn te doen",
      "Zindelijk worden kan langzamer gaan dan u zou verwachten",
    ],
  },
};
