import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Generel vejledning, ikke dyrlægeråd.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreDk: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Whippeten blev avlet frem i det nordlige England i 1800-tallet af fabriks- og minefamilier, der ville have en lille, hurtig hund til løb og kaninjagt – »den fattige mands væddeløbshest«.",
    healthConsiderations: h(
      "Whippeten er som regel en robust og langlivet race, men den tynde hud river let, og den slanke krop fryser, så et varmt dækken på frostdage er en venlig tanke. Mynder kan reagere anderledes på bedøvelse, så nævn racen for dyrlægen. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du ville slippe hunden løs nær kaniner, katte eller trafik og håbe på det bedste",
      "Du vil have en hund, der trives udenfor eller i et køligt hus",
      "Din have er ikke indhegnet, og du har intet sikkert sted til et ordentligt sprint",
    ],
    keyTradeoffs: [
      "Rolig og ren indenfor, forbløffende udenfor – du har brug for både en sofa og en sikker mark",
      "Mild og stille, med en jagtlyst, som ingen træning helt slukker",
    ],
  },
  greyhound: {
    originalPurpose:
      "Greyhound er en af de ældste mynde-typer, avlet i tusinder af år til at løbe harer ned på syn. I nyere tid har den været væddeløbshund, og mange pensionerede løbere finder i dag et hjem som familiehund.",
    healthConsiderations: h(
      "Greyhounden er slank med tynd hud og lidt kropsfedt, så den fryser og kan få tryksår på hårdt gulv – en blød seng betyder meget. Tænderne har ofte brug for jævnlig pleje, og hunde med dyb brystkasse som denne holdes ofte øje med i forhold til mavedrejning. Pensionerede løbere kan have gamle skader, så spørg organisationen, hvad de ved, og tal med din dyrlæge.",
    ),
    poorMatchFor: [
      "Du vil slippe hunden løs i en park uden hegn",
      "Du bor med en kat eller små kæledyr og kan ikke holde dem adskilt",
      "Du vil have en hund, der holder sig varm udenfor på en vinterdag",
    ],
    keyTradeoffs: [
      "En af de mildeste og stilleste hunde, der findes, sovende i sofaen store dele af dagen, og bygget til at sprinte i det øjeblik, noget lille løber",
      "En stor hund i en rolig krop: nem indenfor, og en masse hund for enden af snoren, hvis den stikker af",
    ],
  },
  poodle: {
    originalPurpose:
      "Puddelen begyndte som en tysk vandapportør, der hentede ænder til jægere, og blev en højt elsket selskabshund i Frankrig, hvor den er landets mest kendte hund. Den berømte udstillingsklipning siges at være begyndt som en praktisk klipning til svømning.",
    healthConsiderations: h(
      "Hofter, øjne og hud er det, man typisk spørger om, og hunde med dyb brystkasse som storpuddelen holdes ofte øje med i forhold til mavedrejning. Pelsen filtrer uden jævnlig børstning, og ørerne bør tjekkes. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Hundefrisør hver sjette til ottende uge og børstning de fleste dage passer ikke ind i dit liv",
      "Du vil have en hund, der er tilfreds med at blive overset en dag",
      "Du helst ikke vil bruge tid på at give en klog hund noget at tænke over",
    ],
    keyTradeoffs: [
      "Hurtig, ivrig efter at gøre dig glad og lidt fældende, med en pels, der kræver ægte, jævnlig pleje",
      "En alvorlig tænker: fantastisk at træne og fuld af påfund, når den keder sig",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichon frisé stammer fra små vandhunde omkring Middelhavet og har i århundreder været holdt som selskabshund i det sydlige Europa.",
    healthConsiderations: h(
      "Tænder, hud og knæskaller er det, man typisk ser på hos en lille, lyspelset race: tandpleje er en rutine, og hudallergi ses ofte. En kort, fast plejerutine betyder meget. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du ville få svært ved at følge med børstning og professionel klipning hver sjette til ottende uge",
      "Hunden ville være alene en lang arbejdsdag, de fleste dage",
      "Du vil have en hund, der er tilfreds med at blive overladt til sig selv",
    ],
    keyTradeoffs: [
      "Frisk, venlig og lidt fældende, med en pels, der aldrig holder op med at have brug for opmærksomhed",
      "Gladest, hvor du er, og mindst glad, når du går",
    ],
  },
  maltese: {
    originalPurpose:
      "Maltesere er en af Europas ældste dværg-selskabshunde, holdt i århundreder som skødehund og skattet for den lange hvide pels og hengivenheden til sit menneske.",
    healthConsiderations: h(
      "Tænder, knæskaller og tårepletter ses ofte hos små hvide hunde, og den fine pels filtrer hurtigt. En lille hund bliver også hurtigere træt og kold, end du tror. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Daglig børstning passer ikke ind i dine rutiner",
      "Du vil have en hund, der holder sig stille, når det ringer på",
      "Hunden ville være alene i lange perioder",
    ],
    keyTradeoffs: [
      "Lille, mild og meget loyal, med et gøen, der er større end den selv",
      "En pels, der ser ud, som om den ikke kræver noget, og som kræver noget hver dag",
    ],
  },
  havanese: {
    originalPurpose:
      "Havaneseren er Cubas nationalhund, efterkommer af små bichon-lignende hunde, der kom til øen og blev selskab i velhavende hjem.",
    healthConsiderations: h(
      "Knæskaller, øjne og hofter er det, man typisk spørger om hos en lille, langlivet race, og den silkebløde pels filtrer uden jævnlig børstning. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Hunden ville være alene det meste af en arbejdsdag",
      "Du har ikke tid til jævnlig børstning",
      "Du vil have en hund, der er tilfreds i baggrunden, mens du får din dag til at gå",
    ],
    keyTradeoffs: [
      "Social, hurtig til at lære og glad selskab – og den vil virkelig have dit selskab hele dagen",
      "Let i snoren og nem at bære, med en pels, der kræver en rigtig rutine",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "Italiensk mynde er en miniaturemynde, holdt som selskabshund i århundreder og særligt populær ved hoffene i renæssancens Italien.",
    healthConsiderations: h(
      "Benene er meget tynde, så spørg en dyrlæge, hvordan du holder hop og hård leg sikkert, og tænk på trapper og sofaer. Tænderne har brug for jævnlig pleje, og en tynd pels betyder, at den har brug for ordentligt vinterudstyr. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du har små børn, der gerne vil løfte hunden op eller boltre sig voldsomt med den",
      "Du vil have en hund, der tager en kold og våd tur med største selvfølgelighed",
      "Hunden ville være alene i lange dage",
    ],
    keyTradeoffs: [
      "Lille, stille og sødt kærlig, og mere skrøbelig, end den ser ud",
      "Elsker skødet og et tæppe, og en jagt henover en mark lige så meget",
    ],
  },
  pug: {
    originalPurpose:
      "Mopsen kommer fra Kina, hvor små fladnæsede hunde blev holdt som selskab af kejsere, og den nåede senere Europa med hollandske handelsmænd og blev skødehund i mange kongehuse.",
    healthConsiderations: h(
      "Fladnæsede hunde har ofte vejrtrækningsproblemer og døjer i varmt vejr – varmerisiko er blandt de velfærdshensyn, British Veterinary Association peger på – og øjne, hudfolder og vægt kræver jævnlig opmærksomhed. Går du alligevel efter racen, så vælg en hvalp med åbne næsebor og længere snude, sæt penge af til forsikring, og læs racens profil og spørg en dyrlæge.",
    ),
    poorMatchFor: [
      "Dine somre er varme, og der er intet køligt rum til hunden",
      "En uventet dyrlægeregning på flere tusind euro ville være en stor belastning",
      "Du vil have en hund, der løber eller vandrer med dig",
    ],
    keyTradeoffs: [
      "Sjov, kærlig og tilfreds med korte ture, og ofte med reelle vejrtræknings- og varmeproblemer",
      "Det sammentrykte ansigt, der vinder alle hjerter, er også bag de fleste af helbredsproblemerne",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih tzu blev avlet som selskabshund for det kinesiske kejserhof, med rødder i Tibet, og navnet betyder »løvehund«. De har været skødehunde i meget lang tid.",
    healthConsiderations: h(
      "Som fladnæset race kræver den opmærksomhed på vejrtrækning og varme – varmerisiko er blandt de velfærdshensyn, British Veterinary Association peger på – og de store øjne, ørerne og huden under pelsen skal tjekkes jævnligt. Den lange pels filtrer hurtigt, og derfor vælger mange en kort klipning. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Jævnlig pleje eller en kort klipning hver få uger passer ikke ind i dine rutiner",
      "Du bor et sted, hvor der er varmt, og uden et køligt hjørne",
      "Du vil have en hund, der er hurtig og nem at gøre renlig",
    ],
    keyTradeoffs: [
      "En frisk, menneskekær skødehund, med en pels og et ansigt, der begge kræver daglig pleje",
      "En stædig streg inde i den fluffy pels: tålmodig, godbid-baseret træning virker bedst",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Golden retriever blev udviklet i de skotske Highlands i 1800-tallet til at hente skudt fugl fra ujævnt terræn og koldt vand, og den bløde mund og lysten til at glæde kommer fra det arbejde.",
    healthConsiderations: h(
      "Hofter, albuer, øjne og hjerte er det, man typisk spørger om, og kræft ses ofte i racen – en grund til, at en god opdrætter er værd at vente på. Pels og ører kræver jævnlig pleje, og vægten betyder noget. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du vil have en hund, der holder sig ren og fælder lidt",
      "Hunden ville være alene hjemme en hel arbejdsdag, de fleste dage",
      "Du vil have en vagthund",
    ],
    keyTradeoffs: [
      "Venlig over for næsten alle og ivrig efter at gøre dig glad, hvilket giver dejlige familiehunde og dårlige vagthunde",
      "Nem at træne og altid lysten til at bære noget i munden, så mundbrugen skal guides blidt",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "Boston terrier opstod i Boston i slutningen af 1800-tallet af krydsninger mellem engelsk bulldog og terrier og blev en af Amerikas første hjemmeavlede selskabsracer.",
    healthConsiderations: h(
      "Det er en kortsnudet race, så vejrtrækning, varme og øjne kræver opmærksomhed – varmerisiko er blandt de velfærdshensyn, British Veterinary Association peger på – og mange kuld har brug for hjælp til at komme til verden. Knæskaller og hudallergi er også værd at spørge om. Vælg om muligt en hvalp med åbne næsebor og længere snude, og læs racens profil og spørg en dyrlæge.",
    ),
    poorMatchFor: [
      "Der bliver meget varmt derhjemme om sommeren, og du kan ikke holde hunden kølig",
      "Du helst ikke vil dele soveværelse med snorken",
      "Du leder efter løbeture eller bjergture i varmt vejr",
    ],
    keyTradeoffs: [
      "Livlig, venlig og ordentlig, med en kort næse, der begrænser, hvor meget varme og motion den tåler",
      "Legesyg og klovnagtig, og ikke helt så robust, som det sprælske væsen antyder",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillon er en dværgspaniel fra det europæiske fastland, opkaldt efter de sommerfugleformede ører, og den dukker op i mange gamle malerier som selskab for adelsfamilier.",
    healthConsiderations: h(
      "Det er en lille race, der ofte bliver gammel, og knæskaller, tænder og øjne er det, man typisk spørger om. Den lette krop gør, at hop ned fra møbler er værd at holde styr på. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du vil have en hund, der holder sig stille ved døren eller vinduet",
      "Hunden ville være alene i lange dage",
      "Du helst ikke vil træne jævnligt for at holde et aktivt sind beskæftiget",
    ],
    keyTradeoffs: [
      "Vaks, træningsvillig og livlig af sin størrelse, og hurtig til at gø ad hver lyd",
      "Lille nok til at bære, klog nok til at kede sig, hvis du ikke giver den noget at lave",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "Lhasa apso kommer fra Tibet, hvor små hunde var vagtposter indendørs i hjem og klostre – stille det meste af dagen og hurtige til at slå alarm.",
    healthConsiderations: h(
      "Øjne, hud og ørerne og poterne under den lange pels kræver jævnligt eftersyn, og pelsen filtrer hurtigt uden børstning, så mange vælger en kort klipning. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Gøen ved hver banken og lyd ville drive dig eller naboerne til vanvid",
      "Du ikke ville følge med børstningen",
      "Du vil have en hund, der elsker fremmede",
    ],
    keyTradeoffs: [
      "En værdig, hengiven lille vagthund, med meninger om gæster",
      "Selvstændig og til tider stædig: belønning og tålmodighed slår gentagelse",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "Dværgschnauzeren blev avlet i Tyskland i slutningen af 1800-tallet ud fra mindre schnauzere som gårdhund og rottefanger, hvilket forklarer det vågne, sprælske, gø-først-væsen.",
    healthConsiderations: h(
      "Øjne og urinsten nævnes ofte for racen, og fede godbidder kan belaste bugspytkirtlen, så en enkel kost og stabil vægt betyder noget. Den strithårede pels kræver jævnlig pleje. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du vil have en stille hund, der lader naboernes komme og gå være i fred",
      "Jævnlig pleje og trimning passer ikke ind i dine rutiner",
      "Du helst ikke vil håndtere en lille hunds gøen",
    ],
    keyTradeoffs: [
      "Robust, klog og lidt fældende, med et gøen, der kommer før dørklokken",
      "God til at lære og en terrier i hjertet: ikke bange for at have en mening",
    ],
  },
  labradoodle: {
    originalPurpose:
      "Labradoodle er en krydsning mellem labrador og puddel, første gang avlet i Australien i slutningen af 1980'erne for at kombinere en førerhunds temperament med en pels, der fælder mindre. Det er en krydsning og ikke en anerkendt race, og kuldene varierer.",
    healthConsiderations: h(
      "En blanding er ikke automatisk sundere: en labradoodle kan arve fra begge sider, så hofter, albuer, øjne, ører og hud er værd at spørge om. Pelsen varierer meget, og mange kræver jævnlig børstning og klipning. Spørg opdrætteren, hvilke sundhedstest begge forældre har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du har brug for en garanteret lidt fældende eller allergivenlig pels",
      "Du ville få svært ved at pleje en krøllet pels jævnligt",
      "Du vil have en hund, der er nem at forudsige ud fra en racebeskrivelse",
    ],
    keyTradeoffs: [
      "Venlig, vaks og ofte nem at leve med, og hvert kuld er lidt forskelligt",
      "Sprælsk som en labrador og tænker som en puddel: energi, der har brug for et dagligt udløb",
    ],
  },
  cavapoo: {
    originalPurpose:
      "Cavapoo er en krydsning mellem cavalier king charles spaniel og puddel, populær som lille, nusset selskabshund siden begyndelsen af 2000'erne. Det er en krydsning og ikke en anerkendt race, og kuldene varierer.",
    healthConsiderations: h(
      "En cavapoo kan arve fra begge sider, så spørg, hvilke sundhedstest begge forældre har fået – hjerte, øjne, knæskaller og pels er alle værd at spørge om. Pelsen filtrer uden jævnlig børstning. Læs racens profil og spørg en dyrlæge.",
    ),
    poorMatchFor: [
      "Hunden ville være alene en hel arbejdsdag",
      "Du vil have en hund, hvor du kan forudsige pelstype og størrelse",
      "Du helst vil slippe for jævnlig pleje",
    ],
    keyTradeoffs: [
      "Kærlig og social, og ofte meget glad for selskab – nogle gange for glad til at blive alene",
      "Blid og klog, med en pels, der kræver en rigtig rutine",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshire terrier blev udviklet i 1800-tallet af fabriksarbejdere i Yorkshire og Lancashire til at fange rotter. Der er langt derfra til skødehunden med silkepels, men terrieren sidder der stadig.",
    healthConsiderations: h(
      "Knæskaller, tænder og et luftrør, der er følsomt over for halsbånd, er det, man typisk spørger om hos små hunde, så mange bruger sele. Den fine pels kræver jævnlig børstning eller klipning. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du vil have en hund, der lader andre hunde være i fred, uanset størrelse",
      "Du helst ikke vil børste eller klippe jævnligt",
      "Du vil have en stille hund, der ikke fristes til at gø",
    ],
    keyTradeoffs: [
      "En lille hund med storhunde-attitude: modig, vaks og selvsikker",
      "Silkeblød, lidt fældende og terrier på fuld tid",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Huskyen blev avlet af chukchi-folket i det nordøstlige Sibirien som slædehund, bygget til at trække lette læs over lange afstande i bidende kulde, og den elsker stadig at løbe.",
    healthConsiderations: h(
      "Det er en ret robust race; øjne og hofter er det, man typisk spørger om, og en tyk pels gør, at varme er en reel udfordring i varmt vejr. De fælder også kraftigt to gange om året. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du vil have en hund, der kommer tilbage hver eneste gang uden snor",
      "Dit hjem er varmt, eller dine dage har lidt tid til løb",
      "Du vil have en stille hund, der er nem at have i en lejlighed",
    ],
    keyTradeoffs: [
      "Venlig, iøjnefaldende og fuld af udholdenhed, og en ægte flugtkunstner, der hyler frem for at gø",
      "Elsker at løbe med dig, og har brug for meget af det, uanset vejret",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke welsh corgi kommer fra Pembrokeshire i Wales, hvor den drev kvæg ved at nappe i hælene og dukke sig for sparkene, og den lave, hurtige, bestemte streg er ikke forsvundet.",
    healthConsiderations: h(
      "En lang ryg og korte ben gør, at vægt og hop fortjener opmærksomhed, og hofter og øjne er det, man typisk spørger om. De fælder meget, hele året. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Trapper, hop og vægtøgning passer dårligt til en lang ryg",
      "Du vil have en hund, der lader ankler og børn være i fred",
      "Du ikke vil have hundehår på alt",
    ],
    keyTradeoffs: [
      "Klog, glad og hårdere, end den ser ud, og en hyrdehund, der måske prøver at drive dig og børnene",
      "Elsker mad og lege, og ekstra kilo er hårdt for den lange ryg",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "Shiba inu er en lille japansk race af spids-typen, oprindelig brugt til at jage fugle og småvildt i bjergene, og den har stadig en stolt, selvstændig, kattelignende måde at være på.",
    healthConsiderations: h(
      "Allergier, øjne, knæskaller og hofter er det, man typisk spørger om hos racen, og de fælder kraftigt to gange om året. Spørg opdrætteren, hvilke sundhedstest forældrene har fået, og læs racens profil.",
    ),
    poorMatchFor: [
      "Du vil have en hund, der kommer, når du kalder, og kan gå løs",
      "Du vil have en hund, der elsker at blive rørt ved af alle",
      "Du helst ikke vil bruge tid på tålmodig, belønningsbaseret træning",
    ],
    keyTradeoffs: [
      "Ren, værdig og stille kærlig, med sin egen vilje",
      "Selvstændig til det stædige: træning er en samtale, ikke en kommando",
    ],
  },
};
