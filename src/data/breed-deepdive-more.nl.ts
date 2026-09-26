import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Algemene richtlijn, geen dierenartsadvies.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreNl: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "De whippet is in de 19e eeuw in Noord-Engeland gefokt door fabrieks- en mijnwerkersgezinnen die een kleine, snelle hond wilden voor races en konijnenjacht – het 'renpaard van de arme man'.",
    healthConsiderations: h(
      "Whippets zijn meestal een stevig, langlevend ras, maar de dunne huid scheurt makkelijk en het slanke lijf heeft snel kou, dus een jasje op vrieskoude dagen is een vriendelijk gebaar. Windhonden kunnen anders reageren op narcose, dus noem het ras bij elke dierenarts. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je zou je hond in de buurt van konijnen, katten of verkeer loslaten en het beste hopen",
      "Je wilt een hond die zich prettig voelt buiten of in een koel huis",
      "Je tuin is niet omheind en je hebt geen veilige plek voor een echte sprint",
    ],
    keyTradeoffs: [
      "Rustig en schoon in huis, verbluffend buiten – je hebt zowel een bank als een veilig veld nodig",
      "Zacht en stil, met een jachtinstinct dat geen training helemaal uitschakelt",
    ],
  },
  greyhound: {
    originalPurpose:
      "De greyhound is een van de oudste windhondtypen, al duizenden jaren gefokt om hazen op zicht in te halen. Recenter was hij renhond, en veel gepensioneerde renners vinden nu een thuis als gezinshond.",
    healthConsiderations: h(
      "Greyhounds zijn slank, met een dunne huid en weinig lichaamsvet, dus ze hebben snel kou en kunnen drukplekken krijgen op harde vloeren – een zacht bed doet ertoe. De tanden hebben vaak regelmatige zorg nodig, en bij diepborstige honden als deze let men vaak op maagtorsie. Gepensioneerde renners kunnen oude blessures hebben, dus vraag de organisatie wat ze weet en praat met je dierenarts.",
    ),
    poorMatchFor: [
      "Je wilt je hond loslaten in een onomheind park",
      "Je woont met een kat of kleine huisdieren en kunt ze niet gescheiden houden",
      "Je wilt een hond die op een winterdag buiten warm blijft",
    ],
    keyTradeoffs: [
      "Een van de zachtste, stilste honden die er zijn, een groot deel van de dag op de bank, en gebouwd om te sprinten zodra iets kleins rent",
      "Een grote hond in een rustig lijf: makkelijk in huis, en veel hond aan het eind van de lijn als hij ervandoor gaat",
    ],
  },
  poodle: {
    originalPurpose:
      "De poedel begon als Duitse waterapporteerder die eenden haalde voor jagers, en werd in Frankrijk een geliefde huisgenoot en de bekendste hond van het land. De beroemde showtrim zou begonnen zijn als een praktische trim om te kunnen zwemmen.",
    healthConsiderations: h(
      "Heupen, ogen en huid zijn de gebruikelijke vragen, en bij diepborstige honden als de grote poedel let men vaak op maagtorsie. De vacht klit zonder regelmatig borstelen, en ook de oren verdienen een blik. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Elke zes tot acht weken naar de trimsalon en bijna dagelijks borstelen past niet in je leven",
      "Je wilt een hond die het prima vindt een dag genegeerd te worden",
      "Je besteedt liever geen tijd aan het geven van iets om over na te denken aan een slimme hond",
    ],
    keyTradeoffs: [
      "Snel, graag om je te plezieren en weinig verhaarend, met een vacht die echte, regelmatige zorg vraagt",
      "Een serieuze denker: briljant om te trainen en vindingrijk als hij zich verveelt",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichons stammen af van kleine waterhonden rond de Middellandse Zee en worden al eeuwen als huisgenoot gehouden in Zuid-Europa.",
    healthConsiderations: h(
      "Tanden, huid en knieschijven zijn de gebruikelijke plekken om naar te kijken bij een klein, lichtharig ras: gebitsverzorging is routine, en huidallergieën komen vaak voor. Een korte, vaste verzorgingsroutine doet ertoe. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Het zou je moeite kosten om borstelen en een professionele trim elke zes tot acht weken bij te houden",
      "Je hond zou een lange werkdag alleen zijn, de meeste dagen",
      "Je wilt een hond die het prima vindt aan zijn lot overgelaten te worden",
    ],
    keyTradeoffs: [
      "Vrolijk, vriendelijk en weinig verhaarend, met een vacht die nooit ophoudt aandacht te vragen",
      "Het gelukkigst waar jij bent, en het ongelukkigst als je weggaat",
    ],
  },
  maltese: {
    originalPurpose:
      "De maltezer is een van de oudste kleine gezelschapshonden van Europa, al eeuwen gehouden als schoothond en gekoesterd om de lange witte vacht en de toewijding aan zijn mens.",
    healthConsiderations: h(
      "Tanden, knieschijven en tranenvlekken komen vaak voor bij kleine witte honden, en de fijne vacht klit snel. Een piepklein hondje wordt ook sneller moe en koud dan je denkt. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Dagelijks borstelen past niet in je routine",
      "Je wilt een hond die stil blijft als de bel gaat",
      "Je hond zou lange tijd alleen zijn",
    ],
    keyTradeoffs: [
      "Klein, zacht en erg loyaal, met een blaf die groter is dan hijzelf",
      "Een vacht die moeiteloos lijkt en dagelijkse moeite kost",
    ],
  },
  havanese: {
    originalPurpose:
      "De havanezer is de nationale hond van Cuba, een afstammeling van kleine bichon-achtige honden die naar het eiland kwamen en huisgenoten werden in welgestelde huizen.",
    healthConsiderations: h(
      "Knieschijven, ogen en heupen zijn de gebruikelijke vragen bij een klein, langlevend ras, en de zijdezachte vacht klit zonder regelmatig borstelen. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je hond zou het grootste deel van een werkdag alleen zijn",
      "Je hebt geen tijd voor regelmatig borstelen",
      "Je wilt een hond die tevreden op de achtergrond meedoet terwijl jij je dag doorbrengt",
    ],
    keyTradeoffs: [
      "Sociaal, leert snel en vrolijk gezelschap – en hij wil echt de hele dag jouw gezelschap",
      "Licht aan de lijn en makkelijk te dragen, met een vacht die een echte routine nodig heeft",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "De Italiaanse windhond is een miniatuurwindhond, al eeuwen als gezelschapshond gehouden en vooral geliefd aan de hoven van het renaissancistische Italië.",
    healthConsiderations: h(
      "De pootjes zijn heel dun, dus vraag een dierenarts hoe je springen en wild spel veilig houdt, en denk aan trappen en banken. De tanden hebben regelmatige zorg nodig, en een dunne vacht betekent echte winteruitrusting. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je hebt jonge kinderen die de hond graag oppakken of ermee stoeien",
      "Je wilt een hond die een koude, natte wandeling gelaten neemt",
      "Je hond zou lange dagen alleen zijn",
    ],
    keyTradeoffs: [
      "Klein, stil en lief aanhankelijk, en breekbaarder dan hij eruitziet",
      "Dol op een schoot en een dekentje, en op een achtervolging over een veld net zo goed",
    ],
  },
  pug: {
    originalPurpose:
      "Mopshonden komen uit China, waar kleine platsnuitige honden door keizers als gezelschap werden gehouden; later kwamen ze met Nederlandse handelaren naar Europa en werden ze schoothonden in veel koningshuizen.",
    healthConsiderations: h(
      "Platsnuitige honden hebben vaak ademhalingsproblemen en hebben het moeilijk bij warm weer – hitterisico is een van de welzijnszorgen die de British Veterinary Association noemt – en ogen, huidplooien en gewicht vragen regelmatig aandacht. Kies je er toch voor, neem dan een pup met open neusgaten en een langere snuit, reserveer geld voor een verzekering en lees het rasprofiel en vraag een dierenarts.",
    ),
    poorMatchFor: [
      "Je zomers zijn heet en er is geen koele kamer voor de hond",
      "Een onverwachte dierenartsrekening van enkele duizenden euro's zou je flink onder druk zetten",
      "Je wilt een hond die met je rent of wandelt in de bergen",
    ],
    keyTradeoffs: [
      "Grappig, aanhankelijk en tevreden met korte wandelingen, en vaak met echte ademhalings- en hittezorgen",
      "Het samengedrukte gezichtje dat elk hart wint, zit ook achter de meeste gezondheidszorgen",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih tzu's zijn gefokt als gezelschap voor het Chinese keizerlijke hof, met Tibetaanse wortels, en de naam betekent 'leeuwenhond'. Ze zijn al heel lang schoothonden.",
    healthConsiderations: h(
      "Als platsnuitig ras vraagt hij aandacht voor ademhaling en warmte – hitterisico is een van de welzijnszorgen die de British Veterinary Association noemt – en de grote ogen, de oren en de huid onder de vacht moeten regelmatig gecontroleerd worden. De lange vacht klit snel, daarom kiezen veel eigenaren een korte trim. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Regelmatige verzorging, of om de paar weken een korte trim, past niet in je routine",
      "Je woont ergens waar het heet is en er geen koele hoek is",
      "Je wilt een hond die snel en makkelijk zindelijk wordt",
    ],
    keyTradeoffs: [
      "Een vrolijke, mensenlievende schoothond, met een vacht en een gezicht die allebei dagelijkse zorg vragen",
      "Een koppige trek in de pluizige vacht: geduldige training met lekkers werkt het best",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Golden retrievers zijn in de 19e eeuw in de Schotse Hooglanden ontwikkeld om geschoten vogels uit ruw terrein en koud water te apporteren, en de zachte bek en de wil om te behagen komen uit dat werk.",
    healthConsiderations: h(
      "Heupen, ellebogen, ogen en hart zijn de gebruikelijke vragen, en kanker komt vaak voor bij het ras – een reden dat een goede fokker het wachten waard is. Vacht en oren vragen regelmatige zorg, en gewicht doet ertoe. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je wilt een hond die schoon blijft en weinig verhaart",
      "Je hond zou een hele werkdag alleen thuis zijn, de meeste dagen",
      "Je wilt een waakhond",
    ],
    keyTradeoffs: [
      "Vriendelijk tegen bijna iedereen en graag behagend, wat ze tot heerlijke gezinshonden en slechte bewakers maakt",
      "Makkelijk te trainen en altijd happig om iets in de bek te dragen, dus dat pakken moet zacht gestuurd worden",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "De Boston terriër ontstond eind 19e eeuw in Boston uit kruisingen van Engelse bulldogs en terriërs en werd een van Amerika's eerste eigen gezelschapsrassen.",
    healthConsiderations: h(
      "Het is een kortsnuitig ras, dus ademhaling, warmte en ogen vragen aandacht – hitterisico is een van de welzijnszorgen die de British Veterinary Association noemt – en veel nesten hebben hulp nodig bij de geboorte. Ook naar knieschijven en huidallergieën is het de moeite waard te vragen. Kies waar mogelijk een pup met open neusgaten en een langere snuit, en lees het rasprofiel en vraag een dierenarts.",
    ),
    poorMatchFor: [
      "Het wordt thuis in de zomer erg heet en je kunt de hond niet koel houden",
      "Je deelt liever geen slaapkamer met gesnurk",
      "Je zoekt een maatje voor hardlopen of wandelen in de hitte",
    ],
    keyTradeoffs: [
      "Levendig, vriendelijk en netjes, met een korte neus die beperkt hoeveel warmte en beweging hij aankan",
      "Speels en clownesk, en niet helemaal zo robuust als zijn stuiterende aard doet vermoeden",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillons zijn dwergspaniëls van het Europese vasteland, genoemd naar de vlindervormige oren, en ze komen voor op veel oude schilderijen als gezelschap van adellijke families.",
    healthConsiderations: h(
      "Het is een klein, vaak langlevend ras, en knieschijven, tanden en ogen zijn de gebruikelijke vragen. Het lichte postuur betekent dat springen van meubels in de gaten gehouden moet worden. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je wilt een hond die stil blijft bij de deur of het raam",
      "Je hond zou lange dagen alleen zijn",
      "Je wilt liever niet regelmatig trainen om een actieve geest bezig te houden",
    ],
    keyTradeoffs: [
      "Alert, goed trainbaar en levendig voor zijn formaat, en snel met blaffen bij elk geluid",
      "Klein genoeg om te dragen, slim genoeg om zich te vervelen als je hem niets te doen geeft",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "De lhasa apso komt uit Tibet, waar kleine honden dienden als wachters binnenshuis in huizen en kloosters – het grootste deel van de dag stil, en snel met alarm slaan.",
    healthConsiderations: h(
      "Ogen, huid en de oren en poten onder de lange vacht vragen regelmatige controle, en de vacht klit snel zonder borstelen, daarom kiezen veel eigenaren een korte trim. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Blaffen bij elk klopje en geluid zou jou of de buren gek maken",
      "Je zou het borstelen niet bijhouden",
      "Je wilt een hond die vreemden aanbidt",
    ],
    keyTradeoffs: [
      "Een waardige, toegewijde kleine waker, met meningen over bezoek",
      "Zelfstandig en soms koppig: beloning en geduld winnen het van herhaling",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "De dwergschnauzer is eind 19e eeuw in Duitsland gefokt uit kleinere schnauzers als boerderijhond en rattenvanger, wat de alerte, springerige, eerst-blaffen-aard verklaart.",
    healthConsiderations: h(
      "Ogen en blaasstenen worden vaak genoemd bij het ras, en vette lekkers kunnen de alvleesklier belasten, dus een eenvoudig dieet en een stabiel gewicht doen ertoe. De ruwe vacht vraagt regelmatige verzorging. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je wilt een stille hond die het komen en gaan van de buren met rust laat",
      "Regelmatige verzorging en trimmen passen niet in je routine",
      "Je wilt liever niet omgaan met het blaffen van een kleine hond",
    ],
    keyTradeoffs: [
      "Stevig, slim en weinig verhaarend, met een blaf die eerder komt dan de bel",
      "Leert geweldig en is in hart en nieren een terriër: niet verlegen om een mening",
    ],
  },
  labradoodle: {
    originalPurpose:
      "De labradoodle is een kruising van labrador en poedel, voor het eerst gefokt in Australië eind jaren tachtig om het karakter van een geleidehond te combineren met een minder verhaarende vacht. Het is een kruising en geen erkend ras, en nesten verschillen.",
    healthConsiderations: h(
      "Een mix is niet automatisch gezonder: een labradoodle kan van beide kanten erven, dus heupen, ellebogen, ogen, oren en huid zijn het vragen waard. De vacht verschilt sterk, en veel honden hebben regelmatig borstelen en trimmen nodig. Vraag de fokker welke gezondheidstesten beide ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je hebt een gegarandeerd weinig verhaarende of allergievriendelijke vacht nodig",
      "Het zou je moeite kosten een krullende vacht regelmatig te verzorgen",
      "Je wilt een hond die je goed kunt voorspellen uit een rasbeschrijving",
    ],
    keyTradeoffs: [
      "Vriendelijk, alert en vaak makkelijk om mee te leven, en elk nest is een beetje anders",
      "Stuitert als een labrador en denkt als een poedel: energie die een dagelijkse uitlaatklep nodig heeft",
    ],
  },
  cavapoo: {
    originalPurpose:
      "De cavapoo is een kruising van cavalier king charles spaniël en poedel, populair als klein, knuffelbaar gezelschap sinds het begin van de jaren 2000. Het is een kruising en geen erkend ras, en nesten verschillen.",
    healthConsiderations: h(
      "Een cavapoo kan van beide kanten erven, dus vraag welke gezondheidstesten beide ouders hebben gehad – hart, ogen, knieschijven en vacht zijn allemaal een vraag waard. De vacht klit zonder regelmatig borstelen. Lees het rasprofiel en vraag een dierenarts.",
    ),
    poorMatchFor: [
      "Je hond zou een hele werkdag alleen zijn",
      "Je wilt een hond van wie je vachttype en formaat kunt voorspellen",
      "Je zou graag regelmatige verzorging overslaan",
    ],
    keyTradeoffs: [
      "Aanhankelijk en sociaal, en vaak erg op gezelschap gesteld – soms te erg om alleen gelaten te worden",
      "Lief van aard en slim, met een vacht die een echte routine vraagt",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshire terriërs zijn in de 19e eeuw ontwikkeld door fabrieksarbeiders in Yorkshire en Lancashire om ratten te vangen. Het is een lange weg naar de zijdeharige schoothond, maar de terriër zit er nog in.",
    healthConsiderations: h(
      "Knieschijven, tanden en een voor halsbanden gevoelige luchtpijp zijn de gebruikelijke vragen bij kleine honden, daarom gebruiken veel eigenaren een tuigje. De fijne vacht vraagt regelmatig borstelen of trimmen. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je wilt een hond die andere honden met rust laat, hoe groot ze ook zijn",
      "Je wilt liever niet regelmatig borstelen of trimmen",
      "Je wilt een stille hond die niet in de verleiding komt te blaffen",
    ],
    keyTradeoffs: [
      "Een kleine hond met een grote-hondenhouding: dapper, alert en zelfverzekerd",
      "Zijdezacht, weinig verhaarend en een terriër in hart en nieren",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Husky's zijn gefokt door de Tsjoektsjen in Noordoost-Siberië als sledehonden, gebouwd om lichte lasten over lange afstanden te trekken in bittere kou, en ze rennen nog steeds graag.",
    healthConsiderations: h(
      "Het is een vrij robuust ras; ogen en heupen zijn de gebruikelijke vragen, en een dikke vacht maakt warmte bij warm weer tot een echte zorg. Ze verharen ook twee keer per jaar flink. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je wilt een hond die elke keer terugkomt als hij loslopt",
      "Je huis is heet, of je dagen laten weinig tijd om te rennen",
      "Je wilt een stille hond die makkelijk in een appartement te houden is",
    ],
    keyTradeoffs: [
      "Vriendelijk, opvallend en vol uithoudingsvermogen, en een echte ontsnappingskunstenaar die huilt in plaats van blaft",
      "Rent graag met je mee en heeft er veel van nodig, wat voor weer het ook is",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke welsh corgi's komen uit Pembrokeshire in Wales, waar ze vee dreven door in de hielen te knijpen en de trappen te ontwijken, en die lage, snelle, bazige streek is niet verdwenen.",
    healthConsiderations: h(
      "Een lange rug en korte poten betekenen dat gewicht en springen aandacht verdienen, en heupen en ogen zijn de gebruikelijke vragen. Ze verharen veel, het hele jaar. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Trappen, springen en gewichtstoename passen slecht bij een lange rug",
      "Je wilt een hond die enkels en kinderen met rust laat",
      "Je wilt geen hondenhaar op alles",
    ],
    keyTradeoffs: [
      "Slim, vrolijk en taaier dan hij eruitziet, en een herder die jou en de kinderen kan proberen te hoeden",
      "Dol op eten en spel, en extra kilo's zijn zwaar voor die lange rug",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "De shiba inu is een klein Japans ras van het spitstype, oorspronkelijk gebruikt om vogels en klein wild in de bergen te jagen, en hij heeft nog steeds een trotse, zelfstandige, katachtige manier van doen.",
    healthConsiderations: h(
      "Allergieën, ogen, knieschijven en heupen zijn de gebruikelijke vragen bij het ras, en ze verharen twee keer per jaar flink. Vraag de fokker welke gezondheidstesten de ouders hebben gehad, en lees het rasprofiel.",
    ),
    poorMatchFor: [
      "Je wilt een hond die komt als je roept en los kan lopen",
      "Je wilt een hond die het heerlijk vindt door iedereen aangeraakt te worden",
      "Je besteedt liever geen tijd aan geduldige, beloningsgerichte training",
    ],
    keyTradeoffs: [
      "Schoon, waardig en stil aanhankelijk, met een eigen wil",
      "Zelfstandig tot koppig aan toe: training is een gesprek, geen commando",
    ],
  },
};
