import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Generell veiledning, ikke veterinærråd.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreNo: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Whippeten ble avlet frem i Nord-England på 1800-tallet av fabrikk- og gruvefamilier som ville ha en liten, rask hund til løp og kaninjakt – «den fattige manns veddeløpshest».",
    healthConsiderations: h(
      "Whippeten er stort sett en robust og langlivet rase, men den tynne huden river lett, og den slanke kroppen fryser, så et varmt dekken på frostdager er en vennlig tanke. Mynder kan reagere annerledes på narkose, så nevn rasen for veterinæren. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du ville sluppet hunden løs nær kaniner, katter eller trafikk og håpet det går bra",
      "Du vil ha en hund som trives ute eller i et kjølig hus",
      "Hagen din er ikke inngjerdet, og du har ikke noe trygt sted for en skikkelig spurt",
    ],
    keyTradeoffs: [
      "Rolig og ren inne, forbløffende ute – du trenger både en sofa og en trygg åker",
      "Mild og stille, med en jaktlyst som ingen trening helt slår av",
    ],
  },
  greyhound: {
    originalPurpose:
      "Greyhound er en av de eldste mydetypene, avlet i tusenvis av år for å løpe ned harer på syn. I nyere tid har den vært løpshund, og mange pensjonerte løpere får i dag et hjem som familiehund.",
    healthConsiderations: h(
      "Greyhounden er slank, med tynn hud og lite kroppsfett, så den fryser og kan få trykksår på hardt gulv – en myk seng betyr mye. Tennene trenger ofte jevnlig stell, og dyp brystkasse som denne følges gjerne opp med tanke på magedreining. Pensjonerte løpere kan ha gamle skader, så spør organisasjonen hva de vet, og snakk med veterinæren.",
    ),
    poorMatchFor: [
      "Du vil slippe hunden løs i en park uten gjerde",
      "Du bor med katt eller små kjæledyr og får ikke holdt dem fra hverandre",
      "Du vil ha en hund som holder seg varm ute på en vinterdag",
    ],
    keyTradeoffs: [
      "En av de mildeste og stilleste hundene som finnes, sovende i sofaen store deler av dagen, og bygget for å spurte i det øyeblikket noe lite løper",
      "En stor hund i en rolig kropp: enkel inne, og mye hund i enden av båndet hvis den stikker av",
    ],
  },
  poodle: {
    originalPurpose:
      "Puddelen begynte som en tysk vannapportør som hentet ender for jegere, og ble en høyt elsket selskapshund i Frankrike, hvor den er landets mest kjente hund. Den berømte utstillingsklippen sies å ha startet som en praktisk klipp for svømming.",
    healthConsiderations: h(
      "Hofter, øyne og hud er det man vanligvis spør om, og hunder med dyp brystkasse som storpuddel følges gjerne opp med tanke på magedreining. Pelsen floker seg uten jevnlig børsting, og ørene bør sjekkes. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Hundefrisør hver sjette til åttende uke og børsting de fleste dager passer ikke i livet ditt",
      "Du vil ha en hund som er fornøyd med å bli oversett en dag",
      "Du helst ikke vil bruke tid på å gi en klok hund noe å tenke på",
    ],
    keyTradeoffs: [
      "Rask, ivrig etter å glede og lite røytende, med en pels som krever ekte, jevnlig stell",
      "En alvorlig tenker: strålende å trene, og full av påfunn når den kjeder seg",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichon frisé stammer fra små vannhunder rundt Middelhavet, og har i århundrer vært holdt som selskapshund i det sørlige Europa.",
    healthConsiderations: h(
      "Tenner, hud og kneskåler er det man vanligvis ser på hos en liten, lyspelset rase: tannstell er en rutine, og hudallergi ses ofte. En kort, fast stellerutine betyr mye. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du ville slitt med å holde tritt med børsting og profesjonell klipp hver sjette til åttende uke",
      "Hunden ville vært alene en lang arbeidsdag, de fleste dager",
      "Du vil ha en hund som er fornøyd med å bli latt i fred",
    ],
    keyTradeoffs: [
      "Blid, vennlig og lite røytende, med en pels som aldri slutter å trenge oppmerksomhet",
      "Fornøyd der du er, og minst fornøyd når du går",
    ],
  },
  maltese: {
    originalPurpose:
      "Maltese er en av Europas eldste dvergselskapshunder, holdt i århundrer som skjøtehund og verdsatt for den lange hvite pelsen og hengivenheten til sin egen person.",
    healthConsiderations: h(
      "Tenner, kneskåler og tårefarging ses ofte hos små hvite hunder, og den fine pelsen floker seg fort. En liten hund blir også fortere sliten og kald enn du tror. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Daglig børsting passer ikke i rutinene dine",
      "Du vil ha en hund som holder seg stille når det ringer på",
      "Hunden ville vært alene i lange perioder",
    ],
    keyTradeoffs: [
      "Liten, mild og svært lojal, med et bjeff som er større enn den selv",
      "En pels som ser ut som den ikke krever noe, og krever noe hver dag",
    ],
  },
  havanese: {
    originalPurpose:
      "Havaneser er Cubas nasjonalhund, etterkommer av små bichon-lignende hunder som kom til øya og ble selskap i velstående hjem.",
    healthConsiderations: h(
      "Kneskåler, øyne og hofter er det man vanligvis spør om hos en liten, langlivet rase, og den silkemyke pelsen floker seg uten jevnlig børsting. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Hunden ville vært alene mesteparten av en arbeidsdag",
      "Du har ikke tid til jevnlig børsting",
      "Du vil ha en hund som er fornøyd i bakgrunnen mens du gjør dagen din",
    ],
    keyTradeoffs: [
      "Sosial, rask til å lære og blid selskapshund – og den vil virkelig ha selskapet ditt hele dagen",
      "Lett i båndet og lett å bære, med en pels som trenger en ekte rutine",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "Italiensk mynde er en miniatyrmynde, holdt som selskapshund i århundrer og særlig populær ved hoffene i renessansens Italia.",
    healthConsiderations: h(
      "Beina er veldig tynne, så spør en veterinær hvordan du holder hopp og røff lek trygt, og tenk på trapper og sofaer. Tennene trenger jevnlig stell, og en tynn pels betyr at den trenger ordentlig vinterutstyr. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du har små barn som gjerne vil løfte opp hunden eller boltre seg med den",
      "Du vil ha en hund som tar en kald og våt tur med største selvfølge",
      "Hunden ville vært alene i lange dager",
    ],
    keyTradeoffs: [
      "Liten, stille og søtt kjærlig, og mer skjør enn den ser ut",
      "Elsker fanget og et teppe, og en jakt over en åker like mye",
    ],
  },
  pug: {
    originalPurpose:
      "Mopsen kommer fra Kina, der små flatnesete hunder ble holdt som selskap av keisere, og den nådde senere Europa med nederlandske handelsmenn og ble skjøtehund i mange kongehus.",
    healthConsiderations: h(
      "Flatnesete hunder har ofte pustebesvær og sliter i varmt vær – varmerisiko er blant velferdshensynene British Veterinary Association tar opp – og øyne, hudfolder og vekt trenger jevnlig oppmerksomhet. Går du likevel for rasen, velg en valp med åpne nesebor og lengre snute, sett av penger til forsikring, og les rasens profil og spør en veterinær.",
    ),
    poorMatchFor: [
      "Somrene dine er varme, og det finnes ikke et kjølig rom til hunden",
      "En uventet veterinærregning på flere titusen kroner ville blitt en stor belastning",
      "Du vil ha en hund som løper eller går tur i fjellet sammen med deg",
    ],
    keyTradeoffs: [
      "Morsom, kjærlig og fornøyd med korte turer, og ofte med reelle pusteproblemer og varmeplager",
      "Det sammenklemte ansiktet som vinner alle hjerter er også bak de fleste helseplagene",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih tzu ble avlet som selskapshund for det kinesiske keiserhoffet, med røtter i Tibet, og navnet betyr «løvehund». De har vært skjøtehunder i svært lang tid.",
    healthConsiderations: h(
      "Som flatnesete rase trenger den oppmerksomhet på pust og varme – varmerisiko er blant velferdshensynene British Veterinary Association tar opp – og de store øynene, ørene og huden under pelsen må sjekkes jevnlig. Den lange pelsen floker seg fort, derfor velger mange en kort klipp. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Jevnlig stell, eller en kort klipp hver få uker, passer ikke i rutinene dine",
      "Du bor et sted der det blir varmt og uten et kjølig hjørne",
      "Du vil ha en hund som er rask og enkel å gjøre renslig",
    ],
    keyTradeoffs: [
      "En blid og menneskekjær skjøtehund, med en pels og et ansikt som begge krever daglig stell",
      "En sta strek inne i den fluffy pelsen: tålmodig, godbitbasert trening fungerer best",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Golden retriever ble utviklet i skotske Highlands på 1800-tallet for å hente skutt fugl fra ulendt terreng og kaldt vann, og den milde munnen og viljen til å glede kommer fra den jobben.",
    healthConsiderations: h(
      "Hofter, albuer, øyne og hjerte er det man vanligvis spør om, og kreft ses ofte i rasen – en grunn til at en god oppdretter er verdt å vente på. Pels og ører trenger jevnlig stell, og vekten betyr noe. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du vil ha en hund som holder seg ren og røyter lite",
      "Hunden ville vært alene hjemme en hel arbeidsdag, de fleste dager",
      "Du vil ha en vakthund",
    ],
    keyTradeoffs: [
      "Vennlig mot nesten alle og ivrig etter å glede, noe som gir fine familiehunder og dårlige vakthunder",
      "Lett å trene og alltid gira på å bære noe i munnen, så munnbruken må veiledes mildt",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "Boston terrier oppstod i Boston på slutten av 1800-tallet, av krysninger mellom engelsk bulldogg og terrier, og ble en av Amerikas første hjemmeavlede selskapsraser.",
    healthConsiderations: h(
      "Det er en kortsnutet rase, så pust, varme og øyne trenger oppmerksomhet – varmerisiko er blant velferdshensynene British Veterinary Association tar opp – og mange kull trenger hjelp til å komme til verden. Kneskåler og hudallergi er også verdt å spørre om. Velg om mulig en valp med åpne nesebor og lengre snute, og les rasens profil og spør en veterinær.",
    ),
    poorMatchFor: [
      "Det blir veldig varmt hjemme om sommeren, og du kan ikke holde hunden kjølig",
      "Du helst ikke vil dele soverom med snorking",
      "Du er ute etter løpeturer eller fjellturer i varmt vær",
    ],
    keyTradeoffs: [
      "Livlig, vennlig og ryddig, med en kort nese som begrenser hvor mye varme og mosjon den tåler",
      "Leken og kjekk på det, og ikke helt så robust som det spretne temperamentet antyder",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillon er en dvergspaniel fra det europeiske fastlandet, oppkalt etter de sommerfuglformede ørene, og den dukker opp i mange gamle malerier som selskap for adelsfamilier.",
    healthConsiderations: h(
      "Det er en liten rase som ofte blir gammel, og kneskåler, tenner og øyne er det man vanligvis spør om. Den lette kroppen gjør at hopp ned fra møbler er verdt å holde styr på. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du vil ha en hund som holder seg stille ved døren eller vinduet",
      "Hunden ville vært alene i lange dager",
      "Du helst ikke vil trene jevnlig for å holde et aktivt sinn opptatt",
    ],
    keyTradeoffs: [
      "Våken, trenbar og livlig til å være så liten, og rask til å bjeffe på hver lyd",
      "Liten nok til å bære, klok nok til å kjede seg hvis du ikke gir den noe å gjøre",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "Lhasa apso kommer fra Tibet, der små hunder var vaktposter innendørs i hjem og klostre – stille det meste av dagen, og raske til å slå alarm.",
    healthConsiderations: h(
      "Øyne, hud, og ørene og potene under den lange pelsen trenger jevnlig ettersyn, og pelsen floker seg fort uten børsting, så mange velger en kort klipp. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Bjeffing ved hver banking og lyd ville drevet deg eller naboene til vanvidd",
      "Du ikke ville holdt tritt med børstingen",
      "Du vil ha en hund som elsker fremmede",
    ],
    keyTradeoffs: [
      "En verdig, hengiven liten vakthund, med meninger om gjester",
      "Selvstendig og av og til sta: belønning og tålmodighet slår gjentakelse",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "Dvergschnauzeren ble avlet i Tyskland på slutten av 1800-tallet fra mindre schnauzere som gårdshund og rottefanger, noe som forklarer det våkne, spreke, bjeff-først-temperamentet.",
    healthConsiderations: h(
      "Øyne og urinstein blir ofte nevnt for rasen, og fete godbiter kan gå utover bukspyttkjertelen, så et enkelt kosthold og stabil vekt betyr noe. Den strie pelsen trenger jevnlig stell. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du vil ha en stille hund som lar naboenes kommen og gåen være i fred",
      "Jevnlig stell og trimming passer ikke i rutinene dine",
      "Du helst ikke vil håndtere en liten hunds bjeffing",
    ],
    keyTradeoffs: [
      "Robust, klok og lite røytende, med et bjeff som kommer før dørklokka",
      "Flink til å lære, og en terrier i hjertet: ikke redd for å mene noe",
    ],
  },
  labradoodle: {
    originalPurpose:
      "Labradoodle er en krysning mellom labrador og puddel, først avlet i Australia på slutten av 1980-tallet for å kombinere en førerhunds temperament med en pels som røyter mindre. Det er en krysning og ikke en anerkjent rase, og kullene varierer.",
    healthConsiderations: h(
      "En blanding er ikke automatisk friskere: en labradoodle kan arve fra begge sider, så hofter, albuer, øyne, ører og hud er verdt å spørre om. Pelsen varierer mye, og mange trenger jevnlig børsting og klipp. Spør oppdretteren hvilke helsetester begge foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du trenger en garantert lite røytende eller allergivennlig pels",
      "Du ville hatt vanskelig for å stelle en krøllete pels jevnlig",
      "Du vil ha en hund som er lett å forutsi ut fra en rasebeskrivelse",
    ],
    keyTradeoffs: [
      "Vennlig, våken og ofte lett å leve med, og hvert kull er litt forskjellig",
      "Spretter som en labrador og tenker som en puddel: energi som trenger et daglig utløp",
    ],
  },
  cavapoo: {
    originalPurpose:
      "Cavapoo er en krysning mellom cavalier king charles spaniel og puddel, populær som liten, kosete selskapshund siden tidlig på 2000-tallet. Det er en krysning og ikke en anerkjent rase, og kullene varierer.",
    healthConsiderations: h(
      "En cavapoo kan arve fra begge sider, så spør hvilke helsetester begge foreldrene har tatt – hjerte, øyne, kneskåler og pels er alt verdt å spørre om. Pelsen floker seg uten jevnlig børsting. Les rasens profil og spør en veterinær.",
    ),
    poorMatchFor: [
      "Hunden ville vært alene en hel arbeidsdag",
      "Du vil ha en hund der du kan forutsi pelstype og størrelse",
      "Du helst vil slippe jevnlig stell",
    ],
    keyTradeoffs: [
      "Kjærlig og sosial, og ofte svært glad i selskap – noen ganger for glad til å bli latt alene",
      "Snill og klok, med en pels som trenger en ekte rutine",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshire terrier ble utviklet på 1800-tallet av fabrikkarbeidere i Yorkshire og Lancashire for å fange rotter. Det er langt derfra til skjøtehunden med silkepels, men terrieren sitter der fortsatt.",
    healthConsiderations: h(
      "Kneskåler, tenner og en luftrør som er følsomt for halsbånd er det man vanligvis spør om hos små hunder, så mange bruker sele. Den fine pelsen trenger jevnlig børsting eller klipp. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du vil ha en hund som lar andre hunder være i fred, uansett størrelse",
      "Du helst ikke vil børste eller klippe jevnlig",
      "Du vil ha en stille hund som ikke fristes til å bjeffe",
    ],
    keyTradeoffs: [
      "En liten hund med storhundholdning: modig, våken og selvsikker",
      "Silkemyk, lite røytende og en terrier på heltid",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Huskyen ble avlet av chukchi-folket i nordøstlige Sibir som sledehund, bygget for å trekke lette laster over lange avstander i bitende kulde, og den elsker fortsatt å løpe.",
    healthConsiderations: h(
      "Det er en ganske robust rase; øyne og hofter er det man vanligvis spør om, og tett pels gjør at varme er en reell utfordring i varmt vær. De røyter også kraftig to ganger i året. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du vil ha en hund som kommer tilbake hver eneste gang uten bånd",
      "Hjemmet ditt er varmt, eller dagene dine har lite tid til løping",
      "Du vil ha en stille hund som er lett å ha i leilighet",
    ],
    keyTradeoffs: [
      "Vennlig, iøynefallende og full av utholdenhet, og en ekte rømningskunstner som uler heller enn å bjeffe",
      "Elsker å løpe sammen med deg, og trenger mye av det, uansett vær",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke welsh corgi kommer fra Pembrokeshire i Wales, der den drev kveg ved å nappe i hælene og dukke unna sparkene, og den lave, raske, bestemte strekene har ikke forsvunnet.",
    healthConsiderations: h(
      "Lang rygg og korte bein gjør at vekt og hopping fortjener oppmerksomhet, og hofter og øyne er det man vanligvis spør om. De røyter mye, hele året. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Trapper, hopping og vektøkning passer dårlig med en lang rygg",
      "Du vil ha en hund som lar ankler og barn være i fred",
      "Du vil ikke ha hundehår på alt",
    ],
    keyTradeoffs: [
      "Klok, blid og tøffere enn den ser ut, og en gjeterhund som kan prøve å gjete deg og barna",
      "Elsker mat og lek, og ekstra kilo er tungt for den lange ryggen",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "Shiba inu er en liten japansk rase av spisstype, opprinnelig brukt til å jakte fugl og småvilt i fjellet, og den har fortsatt en stolt, selvstendig, kattelignende måte å være på.",
    healthConsiderations: h(
      "Allergier, øyne, kneskåler og hofter er det man vanligvis spør om hos rasen, og de røyter kraftig to ganger i året. Spør oppdretteren hvilke helsetester foreldrene har tatt, og les rasens profil.",
    ),
    poorMatchFor: [
      "Du vil ha en hund som kommer når du kaller og kan gå løs",
      "Du vil ha en hund som elsker å bli tatt på av alle",
      "Du helst ikke vil bruke tid på tålmodig, belønningsbasert trening",
    ],
    keyTradeoffs: [
      "Ren, verdig og stille kjærlig, med en egen vilje",
      "Selvstendig til den blir sta: trening er en samtale, ikke en kommando",
    ],
  },
};
