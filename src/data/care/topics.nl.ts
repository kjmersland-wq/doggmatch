import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Globale richtlijnen voor voeding en gebitsverzorging", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Advies voor thuisverzorging van het gebit", org: "American Veterinary Dental College" },
  rspca: { label: "Advies voor dagelijkse hondenzorg", org: "RSPCA" },
  aaha: { label: "Richtlijnen voor levensfase en preventieve zorg", org: "American Animal Hospital Association" },
  bva: { label: "Advies voor eigenaren over gezondheid en welzijn", org: "British Veterinary Association" },
} as const;

export const careTopicsNl: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "Een gezond gebit telt mee",
    promise: "Een paar zachte minuten, een paar keer per week, en de mond van je hond blijft een stuk comfortabeler.",
    category: "dental",
    intro: [
      "De meeste honden hebben wel wat gebitsproblemen tegen de tijd dat ze een paar jaar oud zijn, en het is makkelijk te missen omdat honden er zelden een punt van maken.",
      "Het goede nieuws: poetsen is het allerbelangrijkste wat je thuis kunt doen, en bijna elke hond kan leren ervan te genieten als je het rustig aanpakt.",
    ],
    steps: [
      {
        title: "Laat ze het eerst bekijken",
        body: "Leg de tandenborstel op de grond en laat je hond eraan snuffelen. Er gebeurt verder niets. Dit deel is belangrijker dan het klinkt.",
        visual: "brush-1",
      },
      {
        title: "Raak de lippen aan, dan de tanden",
        body: "Til een lip even op, prijs je hond, laat los. Daarna een vinger langs de buitenkant van de tanden. Houd het kort en vrolijk.",
        visual: "brush-1",
      },
      {
        title: "Voeg hondentandpasta toe",
        body: "Laat ze een beetje van je vinger likken — de meeste zijn vlees- of gevogelte-smaak, en honden vinden ze over het algemeen lekker. Gebruik nooit mensentandpasta; die is niet bedoeld om ingeslikt te worden.",
      },
      {
        title: "Poets een paar tanden",
        body: "Kleine cirkels langs de buitenkant, waar tandplak zich het meest ophoopt. De grote tanden achterin en de hoektanden zijn het belangrijkst. De binnenkant kan wachten — daar bouwt zich minder op en de meeste honden vinden het niet fijn.",
        visual: "brush-2",
      },
      {
        title: "Stop voordat ze er genoeg van hebben",
        body: "Dertig seconden is in het begin een goede sessie. Stop terwijl je hond het nog prima vindt, en bouw het van daaruit op.",
      },
    ],
    routine: [
      { day: "Dag 1", body: "Laat je hond aan de tandenborstel snuffelen. Dat is de hele sessie." },
      { day: "Dag 2", body: "Raak hun lippen zachtjes aan voor een seconde of twee, daarna een traktatie." },
      { day: "Dag 3", body: "Een likje hondvriendelijke tandpasta van je vinger." },
      { day: "Dag 4", body: "Ga met een vinger of borstel langs een paar voortanden." },
      { day: "Dag 5", body: "Poets één kant van de mond, kort." },
      { day: "Dag 6", body: "Beide kanten, nog steeds kort. Prijs je hond tijdens het poetsen." },
      { day: "Dag 7", body: "Een normale kleine sessie. Ga zo door, het liefst de meeste dagen." },
    ],
    sections: [
      {
        title: "Wat echt helpt",
        body: "Poetsen is hetgeen met het sterkste bewijs. Al het andere is een nuttige aanvulling, geen vervanging.",
        points: [
          "Een zachte borstel, een vingerborstel of zelfs gaas — wat je hond ook tolereert",
          "Alleen hondentandpasta",
          "Dagelijks is ideaal, een paar keer per week helpt ook nog",
          "Kauwproducten en voedingen met een tandheelkundig zegel kunnen naast het poetsen helpen",
        ],
      },
      {
        title: "Over botten en harde kauwspeeltjes",
        body: "Hard kauwen reinigt tanden niet betrouwbaar, en zeer harde voorwerpen zijn een veelvoorkomende oorzaak van gebroken tanden — geweien, hoeven, hard nylon, gekookte botten, ijsklontjes.",
        points: [
          "Een ruwe richtlijn: als je het niet met een vingernagel kon indeuken, is het waarschijnlijk te hard",
          "Gekookte botten kunnen splinteren en moeten vermeden worden",
          "Houd elk kauwspeeltje in de gaten, en neem het weg als het klein genoeg wordt om ingeslikt te worden",
          "Je dierenarts kan je vertellen welke kauwspeeltjes lokaal problemen veroorzaken",
        ],
      },
      {
        title: "Professionele reiniging",
        body: "Sommige tandsteen kan alleen onder narcose verwijderd worden, met röntgenfoto's om te zien wat er onder het tandvlees gebeurt. Het is geen falen van jouw kant — het is onderdeel van de normale zorg voor veel honden.",
      },
    ],
    watchFor: [
      "Aanhoudend slechte adem, niet zomaar hondse adem",
      "Rood, gezwollen of bloedend tandvlees",
      "Kauwen aan één kant, of voedsel laten vallen",
      "Een gebroken of verkleurde tand",
      "Meer kwijlen dan normaal",
      "Met de poot naar de mond grijpen, of wegkijken als je het gezicht aanraakt",
      "Zwelling in het gezicht of onder een oog",
    ],
    whenToAskVet:
      "Als je een van deze dingen opmerkt, is het de moeite waard om een afspraak te maken. Pijn aan het gebit is makkelijk te missen omdat de meeste honden gewoon blijven eten.",
    ageNotes: {
      puppy: "Puppy's wisselen hun melktanden vanaf ongeveer vier maanden. Begin nu met het wennen aan aanraking — een puppy die tandenborstels normaal vindt, is een geschenk aan je toekomstige zelf.",
      senior: "Oudere bekken moeten vaker gecontroleerd worden, en pijn aan het gebit is een veelvoorkomende reden waarom een oudere hond langzamer of humeuriger lijkt.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Vacht & huid",
    promise: "Leer wat normaal is voor je hond, en je merkt snel genoeg als dat niet zo is.",
    category: "coat",
    intro: [
      "Borstelen gaat niet alleen om het uiterlijk. Het is hoe de meeste mensen voor het eerst een bultje, een zere plek, een teek of een klit op een onhandige plek opmerken.",
      "Hoe vaak hangt veel meer af van de vacht dan van de rasnaam op het stamboom — en kruisingen kunnen overal vallen.",
    ],
    sections: [
      {
        title: "Korte, gladde vachten",
        body: "Een snelle borstelbeurt eens per week met een rubberen borstel of borstel met haren houdt losse haren tegen en voelt prettig aan voor de meeste honden.",
        points: ["Verhaart het hele jaar door, vaak meer dan mensen verwachten", "Alleen badderen als het echt vies is", "De huid is makkelijk te zien — gebruik dat"],
      },
      {
        title: "Lange vachten",
        body: "Vereist meerdere keren per week goed borstelen, tot op de huid in plaats van alleen de bovenkant scheren.",
        points: ["Klitten vormen zich achter de oren, onder de oksels en rond de halsband", "Een kam vertelt je de waarheid die een borstel niet kan", "Trimmen rond de poten en achterkant houdt dingen schoon"],
      },
      {
        title: "Krullende vachten",
        body: "Krullen verharen weinig, wat betekent dat het losse haar in de vacht blijft en stilletjes klit.",
        points: ["Borstel en kam elke dag of twee", "Regelmatige trimafspraken, meestal elke zes tot acht weken", "Klitten trekken aan de huid en doen pijn — verwijder ze vroegtijdig"],
      },
      {
        title: "Dubbele vachten",
        body: "Een zachte ondervacht onder een grovere bovenvacht. Deze verhaart zwaar twee keer per jaar en je vindt het overal.",
        points: ["Een ondervacht hark verdient zijn plek in de lente en herfst", "Scheer een dubbele vacht niet, tenzij een dierenarts het adviseert", "Veel borstelen is beter dan frequent badderen"],
      },
      {
        title: "Draadhaar vachten",
        body: "Harde, weerbestendige vachten die hun textuur behouden met handstrippen in plaats van knippen.",
        points: ["Kam de baard en poten door", "Knippen verzacht de vacht na verloop van tijd", "Een trimmer die het vachttype kent, is de moeite waard om te vinden"],
      },
    ],
    steps: [
      {
        title: "Begin met je handen",
        body: "Ga met je handen over je hond voordat de borstel tevoorschijn komt. Je voelt naar bultjes, korstjes, zere plekken en alles wat in de vacht vastzit.",
      },
      {
        title: "Borstel in secties",
        body: "Werk in kleine stukjes, tot op de huid. Houd het haar boven een klit vast, zodat je niet aan de huid trekt terwijl je werkt.",
      },
      {
        title: "Controleer de lastige plekken",
        body: "Achter de oren, oksels, de achterkant van de poten, de staart en onder de halsband. Klitten beginnen bijna altijd waar dingen schuren.",
      },
      {
        title: "Eindig met iets fijns",
        body: "Een traktatie, een kriebel, een spelletje. Borstelen moet iets zijn waar je hond naar uitkijkt, niet iets wat hij verdraagt.",
      },
    ],
    watchFor: [
      "Krabbelen, likken of bijten dat nieuw of constant is",
      "Rode huid, bultjes, korstjes of een warme plek",
      "Haaruitval of kale plekken",
      "Een geur die er voorheen niet was",
      "Schilferige of vette huid",
      "Bultjes, of een bultje dat veranderd is",
    ],
    whenToAskVet:
      "Jeuk heeft veel mogelijke oorzaken — parasieten, allergieën, infecties, soms iets heel anders. Als het aanhoudt, kan je dierenarts uitzoeken wat het is, in plaats van dat jij zelf met shampoos gaat experimenteren.",
    ageNotes: {
      puppy: "Puppy vachten veranderen naarmate ze groeien. Borstelen is nu vooral om ze te leren dat aangeraakt worden prettig is.",
      senior: "Oudere honden verzorgen zichzelf vaak minder en krijgen een schilferigere of hobbeligere huid. Zacht, frequent borstelen is beter dan lange sessies.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Poten & nagels",
    promise: "Dertig seconden na een wandeling vangen de meeste kleine problemen op voordat ze pijnlijk worden.",
    category: "paws",
    intro: [
      "Poten krijgen veel te verduren en honden zijn stoïcijns erover. Een snelle blik na wandelingen is een van de makkelijkste gewoontes om aan te leren.",
      "Nagels die te lang zijn, veranderen hoe een hond staat en kunnen lopen oncomfortabel maken, dus het is de moeite waard om daarop te letten.",
    ],
    steps: [
      {
        title: "Houd de poot zachtjes vast",
        body: "Ondersteun hem van onderaf in plaats van vast te pakken. Als je hond wegtrekt, laat hem dan gaan — probeer het later opnieuw met een traktatie in je andere hand.",
        visual: "paw-check",
      },
      {
        title: "Kijk tussen de voetzolen",
        body: "Graszaadjes, gruis, strooizout en kleine steentjes vinden het heerlijk om daar te zitten. Spoel in de winter de poten af en droog ze na het lopen op gestrooide trottoirs.",
        visual: "paw-check",
      },
      {
        title: "Voel de voetzolen",
        body: "Ze moeten soepel zijn. Scheurtjes, barstjes, roodheid of een poot die warmer is dan de andere, zijn het waard om nader te bekijken.",
      },
      {
        title: "Controleer de vacht tussen de voetzolen",
        body: "Bij honden met behaarde poten klit het en pakt het dingen op. Een voorzichtige trim gelijk met de voetzolen helpt ook veel met grip.",
      },
      {
        title: "Knip kleine beetjes",
        body: "Knip alleen het puntje eraf, stop dan. Klein en vaak is veel veiliger dan één grote sessie, en beloon rustig gedurende het hele proces.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Nagels, zonder drama",
        body: "Als je getik op een harde vloer hoort, zijn ze waarschijnlijk een beetje lang. De meeste honden hebben elke drie tot zes weken een knipbeurt nodig.",
        points: [
          "Raak de poten elke dag aan, zodat knippers geen verrassing zijn",
          "Knip alleen het puntje — het leven zit verder naar beneden dan mensen denken",
          "Donkere nagels: knip kleine stukjes en stop als het snijvlak er krijtachtig uitziet",
          "Stop als je hond gestrest raakt. Niets hiervan is een gevecht waard",
          "Een trimmer of dierenartsassistent kan het doen, en daar is helemaal niets mis mee",
        ],
      },
      {
        title: "Trottoirs en weer",
        body: "Houd de rug van je hand zeven seconden op het trottoir. Als je het daar niet kunt houden, is het te heet voor poten — loop dan vroeg of laat in plaats daarvan.",
        points: ["Winterzout en gruis irriteren de voetzolen — spoel en droog daarna af", "Lange wandelingen op ruw terrein kunnen de voetzolen pijnlijk maken", "Diepe sneeuw vormt ijsballen in behaarde poten"],
      },
    ],
    watchFor: [
      "Hinken, of steeds dezelfde poot likken",
      "Een gescheurde, bloedende of gezwollen voetzool",
      "Een nagel die gescheurd of afgebroken is",
      "Roodheid of een vieze geur tussen de tenen",
      "Weerstand om op een ondergrond te lopen waar ze eerder wel mee overweg konden",
    ],
    whenToAskVet:
      "Een gescheurde nagel, een diepe snee of aanhoudend hinken is een telefoontje waard. Als je een nagel te kort knipt en het bloedt, stoppen styptische poeder en zachte druk het meestal — bel je dierenarts als dat niet gebeurt.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Oren",
    promise: "Even kijken, even ruiken. Dat is het grootste deel van oorverzorging.",
    category: "health",
    intro: [
      "Gezonde oren zijn van binnen lichtroze, zonder veel geur. Die basis kennen is de hele truc.",
      "Oren hebben geen diepe reiniging nodig als routine. Prikken in een gezond oor veroorzaakt vaak de problemen die het juist moet voorkomen.",
    ],
    sections: [
      {
        title: "De wekelijkse blik",
        body: "Til de flap op, kijk naar binnen, ruik eraan. Een paar seconden terwijl je al samen zit.",
        points: ["Lichtroze, geen sterke geur, geen afscheiding", "Een beetje oorsmeer is normaal", "Droog de oren na het zwemmen of badderen"],
      },
      {
        title: "Als je dierenarts je reiniger heeft gegeven",
        body: "Gebruik hun product en hun instructies. Duw nooit wattenstaafjes in het oor kanaal — je duwt vuil verder naar binnen.",
      },
      {
        title: "Oren die meer aandacht nodig hebben",
        body: "Hangende oren, behaarde gehoorgangen en honden die veel zwemmen zijn gevoeliger voor problemen. Dat hangt af van de individuele hond, niet alleen van het ras.",
      },
    ],
    watchFor: [
      "Een gistachtige of zure geur",
      "Roodheid of zwelling aan de binnenkant van de flap",
      "Bruine, gele of bloederige afscheiding",
      "Krabbelen aan een oor, of het langs de bank wrijven",
      "Hoofdschudden of kantelen",
      "Schrikken als je het oor aanraakt",
    ],
    whenToAskVet:
      "Oorontstekingen zijn pijnlijk en gaan zelden vanzelf over. Als iets er raar uitziet of ruikt, laat het dan nakijken in plaats van te proberen met druppels die je nog hebt liggen.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Ogen",
    promise: "Helder, schoon en gelijk. Dat is waar je naar zoekt.",
    category: "health",
    intro: [
      "Een snelle blik op de ogen van je hond als je 's ochtends hallo zegt, is voor de meeste dagen genoeg.",
      "Ogen kunnen snel van licht geïrriteerd naar ernstig pijnlijk gaan, dus het is een van de dingen waar je een beetje voorzichtig mee moet zijn.",
    ],
    sections: [
      {
        title: "Hoe normaal eruitziet",
        body: "Helder en schoon, witte oogballen die niet bloeddoorlopen zijn, pupillen van gelijke grootte, geen geknepen ogen. Een beetje helder of grijs traanvocht in de hoekjes is meestal niets.",
      },
      {
        title: "Dagelijkse verzorging",
        body: "Veeg korstjes weg met vochtig wattenschijfje en schoon water, één veeg per oog. Houd lang haar uit de buurt van de ogen. Gebruik geen oogdruppels voor mensen.",
      },
      {
        title: "Platte gezichtshonden",
        body: "Prominente ogen zijn meer blootgesteld aan stoten, uitdroging en zweren. Als je hond een korte snuit heeft, kijk dan iets vaker.",
      },
    ],
    watchFor: [
      "Knijpen met de ogen of een oog gesloten houden",
      "Aanhoudende roodheid",
      "Groene of gele afscheiding",
      "Wazigheid of een kleurverandering",
      "Het gezicht over de grond wrijven",
      "Elke plotselinge verandering, of tegen dingen aanlopen",
    ],
    whenToAskVet:
      "Een pijnlijk of plotseling veranderd oog is een reden om dezelfde dag te bellen. Zichtproblemen hebben betere resultaten als ze vroeg worden gezien.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Lichaamsconditie",
    promise: "Het getal op de weegschaal telt minder dan hoe je hond eruitziet en voelt onder je handen.",
    category: "weight",
    intro: [
      "Twee honden van hetzelfde gewicht kunnen in compleet verschillende condities zijn. Lichaamsconditie is hoe dierenartsen het beoordelen, en je kunt het in ongeveer een minuut leren.",
      "Dit is een richtlijn, geen diagnose. Ras en bouw veranderen hoe 'goed' eruitziet — een Greyhound en een Labrador in perfecte conditie zien er totaal anders uit.",
    ],
    steps: [
      {
        title: "Voel de ribben",
        body: "Ga met je vingertoppen langs de zijkant van je hond. Je zou de ribben gemakkelijk moeten voelen onder een dun laagje, een beetje zoals je de botten aan de achterkant van je hand voelt.",
        visual: "body-condition",
      },
      {
        title: "Kijk van bovenaf",
        body: "Staand boven je hond, kijk naar een lichte vernauwing achter de ribben. Een rechte of uitpuilende lijn suggereert wat extra gewicht.",
        visual: "body-condition",
      },
      {
        title: "Kijk van de zijkant",
        body: "De buik moet omhoog lopen naar de achterpoten in plaats van op gelijke hoogte met de borst te lopen.",
      },
      {
        title: "Doe het maandelijks",
        body: "Veranderingen sluipen er langzaam in. Dit op dezelfde dag elke maand doen, maakt de verschuiving duidelijk terwijl deze nog klein is.",
      },
    ],
    sections: [
      {
        title: "Een beetje zwaar",
        body: "Ribben moeilijk te voelen, taille moeilijk te zien, buik loopt plat. Kleine veranderingen werken: meet het voer af, tel de traktaties, voeg tien minuten wandelen toe.",
      },
      {
        title: "Ongeveer goed",
        body: "Ribben makkelijk te voelen, zichtbare taille, buik loopt omhoog. Ga zo door met wat je doet.",
      },
      {
        title: "Een beetje dun",
        body: "Ribben, ruggengraat of heupen steken uit, weinig bedekking. De moeite waard om te laten controleren door een dierenarts in plaats van alleen meer voer — onverklaarbaar gewichtsverlies verdient aandacht.",
      },
    ],
    whenToAskVet:
      "Je dierenarts kan je helpen de lichaamsconditie goed te controleren, en kan een plan bespreken als er gewicht te verliezen is. Plotselinge of onverklaarbare gewichtsveranderingen verdienen altijd een gesprek.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "Een goede dag voor een hond",
    promise: "Een wandeling, een beetje spelen, wat eten, veel slaap en tijd met jou telt zwaar mee.",
    category: "wellbeing",
    intro: [
      "Een goed leven voor een hond hoeft niet ingewikkeld of duur te zijn. Het grootste deel bestaat uit routine, gezelschap en voldoende rust.",
      "Als je maar één ding verandert, is het meestal slaap. Veel 'gedragsproblemen' zijn een vermoeide hond die nooit de kans krijgt om echt tot rust te komen.",
    ],
    sections: [
      {
        title: "Slaap",
        body: "Honden slapen veel meer dan de meeste mensen verwachten. Puppy's hebben vaak 18 tot 20 uur per dag nodig, volwassenen ergens rond de 12 tot 14, en oudere honden meestal weer meer.",
        points: ["Een rustige plek weg van de voordeur en het verkeer in huis", "Middagdutjes overdag zijn normaal, geen luiheid", "Constante stimulatie is uitputtend voor een hond, niet verrijkend"],
      },
      {
        title: "Snuffelen en denken",
        body: "Tien minuten goed snuffelen kan een hond meer kalmeren dan een uur rennen. Laat wandelingen soms langzaam zijn.",
        points: ["Strooi het avondeten in het gras", "Verstop traktaties in een kamer en laat ze zoeken", "Een voerpuzzel of een opgerolde handdoek met brokjes erin", "Nieuwe, rustige plekken om te verkennen"],
      },
      {
        title: "Gezelschap",
        body: "Honden zijn sociaal. De meesten hebben moeite met lange periodes alleen zijn, en alleen zijn is een vaardigheid die geleidelijk moet worden aangeleerd in plaats van aangenomen.",
      },
      {
        title: "Voorspelbare dagen",
        body: "Min of meer regelmatige wandelingen, maaltijden en bedtijden maken het leven makkelijker te lezen. Het hoeft niet tot op de minuut nauwkeurig te zijn.",
      },
      {
        title: "Rustige tijd",
        body: "Tijd waarin er niets van hen wordt gevraagd — geen training, geen bezoek, geen spelletjes. Elke hond heeft daar overdag wat van nodig.",
      },
    ],
    ageNotes: {
      puppy: "Puppy's worden snel oververmoeid en dat lijkt op ondeugd — bijten, rondrennen, alles negeren. Meer slaap lost het meestal op.",
      adolescent: "Tieners hebben echte uitlaatkleppen nodig: snuffelen, kauwen, trainen, spelen. Verveling uit zich dan in het kauwen op je spullen.",
      senior: "Kortere, frequentere wandelingen, zachter beddengoed en rustige hersenspelletjes passen beter bij oudere honden dan lange uitstapjes.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Ken wat normaal is voor je hond",
    promise: "Je merkt een verandering lang voordat iemand anders dat doet. Dat is echt waardevol.",
    category: "health",
    intro: [
      "Je hoeft je hond niet te onderzoeken. Je hebt alleen een ruw idee nodig van wat normaal is — hoeveel ze eten, drinken, bewegen en slapen.",
      "Wanneer er iets verandert, helpt het je dierenarts enorm als je kunt zeggen 'dit begon op dinsdag'.",
    ],
    sections: [
      {
        title: "Appetijt",
        body: "De meeste honden zijn redelijk voorspelbare eters. Eén maaltijd overslaan gebeurt; een dag of langer geen eten is aandacht waard.",
      },
      {
        title: "Drinkgedrag",
        body: "Een duidelijke toename of afname van drinken is een van de nuttigste vroege signalen die er zijn. Als je twijfelt, meet dan een paar dagen wat er in de bak gaat.",
      },
      {
        title: "Energie",
        body: "Langzamer worden is niet alleen leeftijd. Weerstand op trappen, stijfheid na rusten of minder interesse in wandelingen is vaak ongemak.",
      },
      {
        title: "Toiletgewoonten",
        body: "Noteer veranderingen in frequentie, persen, of dunne ontlasting die langer dan een dag aanhoudt. Geen prettig onderwerp, maar wel een nuttig onderwerp.",
      },
      {
        title: "Gewicht en vacht",
        body: "Maandelijks wegen, maandelijks voelen. Vachtkwaliteit verandert vaak voordat iets anders dat doet.",
      },
      {
        title: "Gedrag",
        body: "Verstoppen, aanhankelijkheid, prikkelbaarheid of rusteloosheid 's nachts kunnen allemaal tekenen van pijn zijn in plaats van stemming.",
      },
    ],
    whenToAskVet:
      "Eén kleine verandering op één dag is meestal niets. Een verandering die langer dan een dag of twee duurt, of meerdere veranderingen tegelijk, is een telefoontje waard.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Iets lijkt anders?",
    promise: "Een rustige plek om uit te werken of dit een afwachten-en-kijken-situatie is, of een bel-de-dierenarts.",
    category: "health",
    intro: [
      "Dit is algemene informatie, geen diagnose. Sommige veranderingen zijn onschadelijk en sommige niet, en het verschil is vaak niet duidelijk van buitenaf.",
      "Als je je zorgen maakt, of de verandering kwam plotseling of ernstig opzetten, neem dan contact op met je dierenarts. Zorgen op zich zijn al een goede reden om te bellen.",
    ],
    sections: [
      {
        title: "Niet willen eten",
        body: "Eén maaltijd overslaan bij een verder vrolijke hond is gebruikelijk. Bel je dierenarts als het langer dan ongeveer 24 uur duurt, als een puppy maaltijden overslaat, of als er braken, lusteloosheid of een gezwollen buik bij komt kijken.",
      },
      {
        title: "Veel meer of minder drinken",
        body: "Een duidelijke verandering die langer dan een paar dagen aanhoudt, is het waard om te onderzoeken in plaats van af te wachten. Noteer ongeveer hoeveel.",
      },
      {
        title: "Braken",
        body: "Eén keer braken, daarna weer normaal, gaat vaak vanzelf over. Bel als het herhaaldelijk is, als ze geen water binnen kunnen houden, als er bloed bij zit, als ze proberen te braken zonder iets te produceren, of als ze iets ingeslikt kunnen hebben.",
      },
      {
        title: "Diarree",
        body: "Mild en kortdurend is gebruikelijk. Bel als het langer dan een dag of twee duurt, bloed bevat, of gepaard gaat met braken, pijn of een platte, vermoeide hond — en sneller voor puppy's en oudere honden, die snel uitdrogen.",
      },
      {
        title: "Hoesten",
        body: "Een incidentele hoest na trekken aan de lijn is anders dan een hoest die blijft aanhouden. Aanhoudend hoesten, hoesten 's nachts, of ademhalingsproblemen vereisen een dierenarts.",
      },
      {
        title: "Jeuk",
        body: "Constant krabben, likken of bijten is oncomfortabel en heeft meestal een oorzaak die het waard is om te vinden — parasieten, huidinfectie of allergie. Het verdwijnt zelden alleen met shampoo.",
      },
      {
        title: "Hinken",
        body: "Mild hinken dat binnen een dag met rust overgaat, kan worden afgewacht. Niet-gewichtdragende kreupelheid, duidelijke pijn, zwelling of een hinken dat aanhoudt, moet worden gezien.",
      },
      {
        title: "Ongebruikelijke vermoeidheid",
        body: "Een rustige dag komt voor. Een hond die niet wil opstaan, wankel is, of veel platter is dan normaal, moet snel worden gezien.",
      },
    ],
    whenToAskVet:
      "Je dierenarts hoort liever te vroeg dan te laat van je. Beschrijven wat er veranderd is, wanneer het begon en wat er anders is dan normaal, is precies wat ze nodig hebben.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "Wanneer het niet kan wachten",
    promise: "De korte lijst met dingen die betekenen dat je direct een dierenarts moet bellen, op elk uur.",
    category: "health",
    intro: [
      "Bewaar het nummer van je dierenarts en je dichtstbijzijnde spoedkliniek ergens waar je ze kunt vinden zonder na te denken. Sla ze nu op in je telefoon.",
      "In deze situaties, bel eerst en ga dan. Wacht niet af hoe dingen zich ontwikkelen, en probeer geen huismiddeltjes.",
    ],
    sections: [
      {
        title: "Bel onmiddellijk een dierenarts",
        body: "Elk van deze punten betekent dringende professionele hulp, dag en nacht.",
        points: [
          "Ademhalingsproblemen, verstikking, of blauwe of zeer bleke tandvlees",
          "Instorting, bewusteloosheid, of plotselinge zwakte",
          "Bloedingen die niet stoppen",
          "Verdenking van vergiftiging, of iets gegeten hebben wat ze niet hadden moeten eten",
          "Een epileptische aanval, of herhaalde aanvallen",
          "Aangereden worden, een val, of enig ernstig letsel",
          "Persen om te urineren en niets produceren",
          "Een gezwollen, harde buik met kokhalzen en geen braken",
          "Tekenen van hitteberoerte: zwaar hijgen, benauwdheid, instorting in de hitte",
          "Plotselinge hevige pijn, of een hond die helemaal niet tot rust kan komen",
        ],
      },
      {
        title: "Verdenking van vergiftiging",
        body: "Bel onmiddellijk je dierenarts of een dierenvergiftigingslijn, en vertel hen wat, hoeveel en wanneer. Neem de verpakking mee. Probeer je hond niet te laten braken, tenzij een dierenarts je dat vertelt — met sommige stoffen veroorzaakt dat meer schade.",
      },
      {
        title: "Onderweg",
        body: "Houd je hond rustig, warm en stil. Rijd voorzichtig. Bel vooruit zodat de kliniek klaar voor je is.",
      },
    ],
    whenToAskVet:
      "Als je dit leest en je afvraagt of het ertoe doet, bel dan. Niemand op een dierenartspraktijk vindt een telefoontje dat niets blijkt te zijn erg.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
