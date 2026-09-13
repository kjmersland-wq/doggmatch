import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Racetekst på dansk, knyttet til de samme stabile race-id'er. */
export const breedContentDk: Partial<Record<BreedId, BreedContent>> = {
  "labrador-retriever": {
    displayName: "Labrador retriever",
    summary:
      "En åbenhjertet, madglad brugshund, som med god grund er blevet selve familiehunden — og som stadig har brug for en rigtig opgave for at trives.",
    strengths: [
      "Elsker at være sammen med mennesker",
      "Lærer hurtigt, især når der er en godbid i det",
      "Skøn hverdagsselskab",
      "Bliver gerne med på alt, der er aktivt",
      "Falder som regel godt til i familielivet",
    ],
    considerations: [
      "Taber hår hele året",
      "Skal have en ordentlig gåtur hver eneste dag, ikke kun i weekenden",
      "Stor og stærk i snoren, indtil den er lært det",
      "Keder sig hurtigt uden en opgave — og en kedende Labrador finder på ting",
    ],
  },
  "golden-retriever": {
    displayName: "Golden retriever",
    summary:
      "Mild, føjelig og utroligt tålmodig. En golden retriever beder om selskab mere end om noget andet.",
    strengths: [
      "Vidunderligt mild med børn",
      "Elsker at lære, når der venter en belønning",
      "Venlig med både mennesker og andre hunde",
      "Trives bedst udendørs i køligere vejr",
    ],
    considerations: [
      "Fælder kraftigt to gange om året",
      "Skal børstes grundigt de fleste uger, ellers filtrer pelsen",
      "Har det svært i varmt vejr, så sommerture kræver tidlige morgener",
      "Bryder sig virkelig ikke om at blive efterladt alene i lang tid",
    ],
  },
  poodle: {
    displayName: "Puddel (stor)",
    summary:
      "En atletisk og usædvanligt klog hund bag en elegant pels. Trives med at løse opgaver og med et tæt samarbejde med sin ejer.",
    strengths: [
      "Fælder meget lidt",
      "Opfatter nye ting bemærkelsesværdigt hurtigt",
      "Klarer sig fint i en lejlighed, så længe den kommer nok ud",
      "Legesyg uden at være kaotisk",
    ],
    considerations: [
      "En tur til hundefrisøren hver 6.-8. uge, og det er ikke billigt",
      "Har brug for opgaver for hovedet, ikke bare kilometer i snoren",
      "Kan blive utryg, hvis den er alene for ofte",
      "Pelsplejen koster støt gennem årene",
    ],
  },
  "french-bulldog": {
    displayName: "Fransk bulldog",
    summary:
      "En kompakt, komisk og dybt hengiven byhund med begrænset behov for motion og reelle helbredsmæssige forbehold.",
    strengths: [
      "Trives rigtig godt i lejlighed",
      "Har ikke brug for meget motion",
      "Kærlig og altid tæt på dig",
      "Roligere end de fleste små hunde",
    ],
    considerations: [
      "Kan få vejrtrækningsproblemer i varme eller efter anstrengelse",
      "Dyrlægeregningerne bliver ofte højere gennem livet",
      "Klarer ikke en hel arbejdsdag alene særlig godt",
      "Det er umagen værd at insistere på en opdrætter, der sundhedstester ordentligt",
    ],
  },
  "border-collie": {
    displayName: "Border collie",
    summary:
      "Den mest indlæringsvillige hund, de fleste ikke burde have. Skarp, intens og ulykkelig uden dagligt arbejde.",
    strengths: [
      "Lærer stort set alt, du underviser den i",
      "Fremragende til hundesport, næsearbejde og gåder",
      "Knytter sig dybt til sin person",
      "På sit bedste hos rigtig aktive mennesker",
    ],
    considerations: [
      "Har brug for seriøs daglig motion og noget at tænke over oveni",
      "Falder sjældent til ro i en lejlighed eller en stille hverdag",
      "Kan finde på at vogte børn, cyklister eller katten",
      "En understimuleret border collie bruger hurtigt hjernen til ballade",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier king charles spaniel",
    summary:
      "En lille, blid følgesvend, der helst vil være, hvor du er. Roligt selskab snarere end et projekt.",
    strengths: [
      "Mild med børn og ældre",
      "Fuldt tilfreds i et lille hjem",
      "Kommer godt ud af det med andre hunde og dyr",
      "Har ikke brug for lange gåture",
    ],
    considerations: [
      "Kendte arvelige hjerte- og neurologiske problemer i racen",
      "Sjældent glad for at være alene i lang tid — en ægte velcro-hund",
      "Ører og pels skal tjekkes og plejes jævnligt",
      "Spørg altid til sundhedstestning af begge forældre",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "En sprinter, der sover det meste af dagen. Stille, ren og overraskende velegnet til rolige hjem.",
    strengths: [
      "Vidunderligt rolig indendørs",
      "Nem pels, og gøer sjældent",
      "Et par korte spurter om dagen er rigeligt",
      "Mange venter på et hjem gennem omplacering",
    ],
    considerations: [
      "Stærk trang til at jage alt, der er lille og hurtigt",
      "Løs gang kræver et grundigt indhegnet område",
      "Fryser let — dækken og en blød seng er ikke til forhandling",
      "Tynd hud gør, at småsår og skrammer sker lettere, end man skulle tro",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba inu",
    summary:
      "Selvstændig, kræsen og selvhjulpen. En shiba respekterer dig snarere end at adlyde dig.",
    strengths: [
      "Klarer alenetid bedre end de fleste",
      "Renlig, næsten kattelignende",
      "Lille, men robust",
      "Lever ofte længe",
    ],
    considerations: [
      "Selvstændig af natur — indkald kræver rigtigt, tålmodigt arbejde",
      "Fælder enorme mængder pels to gange om året",
      "Ofte reserveret eller afvisende over for andre hunde",
      "Ikke den mest tilgivende førstehund, hvis du er ny til træning",
    ],
  },
  "german-shepherd": {
    displayName: "Schæferhund",
    summary:
      "Alvorlig, årvågen og dybt loyal. En schæferhund vil have en opgave, en rutine og nogen, det er værd at arbejde for.",
    strengths: [
      "Lærer hurtigt og husker godt",
      "Hengiven over for sine egne",
      "Fantastisk, når den er ordentligt socialiseret",
      "På sit bedste med en daglig opgave",
    ],
    considerations: [
      "Fælder hele året, og kraftigt to gange om året",
      "Har brug for en time eller mere med rigtigt arbejde dagligt, ikke bare en gåtur",
      "Kan være mistroisk over for fremmede uden tidlig, målrettet socialisering",
      "Spørg opdrætteren om hofte- og albuestatus",
    ],
  },
  dachshund: {
    displayName: "Gravhund",
    summary:
      "Lille, sjov og modigere, end benene lader ane. En stor personlighed, der kan lide at være tæt på dig.",
    strengths: [
      "Trives fint i et lille hjem",
      "Har ikke brug for lange gåture",
      "Kvik og fuld af karakter",
      "Godt selskab, altid under fødderne",
    ],
    considerations: [
      "Sårbar ryg — ingen trapper eller spring ned fra sofaen",
      "Kan lide lyden af sin egen stemme, gerne ved dørklokken",
      "Kan være stædig under træning — regn med forhandling",
      "Tager let på i vægt, hvilket belaster den lange ryg",
    ],
  },
  beagle: {
    displayName: "Beagle",
    summary:
      "En næse på fire ben. Munter, social og næsten umulig at overtale væk fra en god lugt.",
    strengths: [
      "Ægte venlig over for alle",
      "Robust og rar med børn",
      "Elsker andre hunde",
      "Kort pels, enkel at holde",
    ],
    considerations: [
      "Indkald er hårdt arbejde — næsen vinder som regel",
      "Hyler og gør sig hørt, når den keder sig eller er alene for længe",
      "Spiser bogstaveligt talt alt inden for rækkevidde",
      "Har brug for en rigtigt sikret have, ikke bare et lavt hegn",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker spaniel",
    summary:
      "Bløde øjne, travle poter og en uendelig samarbejdsvilje. En cocker spaniel er lykkeligst, når den laver noget sammen med dig.",
    strengths: [
      "Kærlig og opsat på at gøre dig glad",
      "Elsker næsearbejde og leg",
      "Klarer både by og land",
      "God størrelse til de fleste hjem",
    ],
    considerations: [
      "Ørerne skal tjekkes og renses ofte, ellers kommer der infektioner",
      "Pelsen filtrer hurtigt uden regelmæssig børstning",
      "Bliver rastløs uden en opgave",
      "Klarer ikke lange timer alene særlig godt",
    ],
  },
  chihuahua: {
    displayName: "Chihuahua",
    summary:
      "Bittelille, modig og helt viet til én eller to mennesker. Lille hund, meninger i fuld størrelse.",
    strengths: [
      "Perfekt til lejlighed",
      "Har brug for meget lidt motion",
      "Lever ofte langt op i tenårene",
      "Nem at tage med på rejse",
    ],
    considerations: [
      "Skrøbelig — ikke en hund til hårdhændet håndtering",
      "Gør ad alt ukendt, også pakkebude",
      "Fryser let og skal have frakke om vinteren",
      "Har brug for ægte socialisering for at forblive afslappet",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Dværgschnauzer",
    summary:
      "Skæg, skarp i hovedet og stille selvsikker. En terrierhjerne i en velholdt pels, der fælder minimalt.",
    strengths: [
      "Fælder meget lidt",
      "Kvik og lærer hurtigt",
      "Passer til både lejlighed og hus",
      "Robust for sådan en lille hund",
    ],
    considerations: [
      "Klipning hver 6.-8. uge, hvilket løber op",
      "Gør ad døren, posten og vinden",
      "Ikke altid vild med mindre dyr i huset",
      "Tager let på i vægt",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berner sennenhund",
    summary:
      "Enorm, mild og rolig. En berner sennenhund er blidt selskab for en familie med plads og en svaghed for hundehår.",
    strengths: [
      "Vidunderligt tålmodig med børn",
      "Rolig indendørs for sådan en stor hund",
      "Elsker koldt vejr",
      "Godmodig og stabil",
    ],
    considerations: [
      "Kortere levetid end de fleste racer — et ærligt hjertesuk at forholde sig til",
      "Meget pels, over hele huset, det meste af året",
      "Koster mærkbart mere i foder, forsikring og behandling",
      "Har det virkelig svært, når vejret bliver varmt",
    ],
  },
  "australian-shepherd": {
    displayName: "Australian shepherd",
    summary:
      "Hurtig, atletisk og altid på vagt. En australian shepherd har brug for en mening med tilværelsen mere end en have.",
    strengths: [
      "Skarp til alt, du lærer den",
      "Elsker hundesport, tricks og næsearbejde",
      "Knytter sig tæt til sin person",
      "Flot og hårdfør udendørs",
    ],
    considerations: [
      "Har brug for timevis af aktivitet, hver eneste dag",
      "Vogter børn, cykler og joggere, hvis den ikke får nok motion",
      "Keder sig hurtigt — og siger tydeligt fra",
      "Passer sjældent til lejlighedsliv",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack russell terrier",
    summary:
      "Lille, hurtig og fuldstændig overbevist om sig selv. God underholdning, hvis du kan lide en hund med motor i.",
    strengths: [
      "Sej, sund og lever længe",
      "Kan være i et lille hjem",
      "Uendeligt legesyg",
      "Klarer alenetid bedre end de fleste",
    ],
    considerations: [
      "Jagter alt, der er lille og hurtigt, egern inklusive",
      "Graver, og mener det alvorligt — plænen er ikke fredet",
      "Kan være stridbar med andre hunde, især ukendte",
      "Har brug for langt mere motion, end størrelsen antyder",
    ],
  },
  "siberian-husky": {
    displayName: "Siberian husky",
    summary:
      "Smuk, venlig og bygget til at løbe hele dagen. En husky gør sjældent, som du beder om, bare fordi du spurgte.",
    strengths: [
      "Social med både mennesker og hunde",
      "Skabt til kulde og lange distancer",
      "Gør sjældent",
      "Ren, med lidt hundelugt",
    ],
    considerations: [
      "Flygter fra haven med ægte beslutsomhed og kommer ikke pålideligt tilbage",
      "Indkald er et livslangt projekt, ikke en weekendøvelse",
      "Fælder alt pelsen to gange om året, i ugevis, overalt",
      "Lider reelt i varmt klima eller en varm sommer",
    ],
  },
  boxer: {
    displayName: "Boxer",
    summary:
      "En klovn, der aldrig helt bliver voksen. Livlig, varmhjertet og altid midt i det hele.",
    strengths: [
      "Fantastisk med børn",
      "Legesyg langt op i årene",
      "Kort pels, nem at holde",
      "Lærer godt med venlig og opmuntrende træning",
    ],
    considerations: [
      "Springende og stærk — hopper op ad folk, indtil den lærer andet",
      "Bliver hurtigt overophedet med den korte snude",
      "Nogle alvorlige arvelige helbredsproblemer i racen",
      "En troværdig sikler — hav en klud parat",
    ],
  },
  rottweiler: {
    displayName: "Rottweiler",
    summary:
      "Kraftfuld, jordnær og stille selvsikker. En rottweiler har brug for en ejer, der ved, hvad de laver.",
    strengths: [
      "Stabil og selvsikker, når den er godt opdraget",
      "Lærer hurtigt og arbejder villigt",
      "Loyal og beskyttende over for familien",
      "Nem pels",
    ],
    considerations: [
      "Meget stærk — snortræningen skal sidde fra starten",
      "Har brug for grundig, målrettet socialisering fra dag ét",
      "Forsikring og foder koster mærkbart mere",
      "Enkelte steder og forsikringsselskaber begrænser racen — værd at undersøge først",
    ],
  },
  whippet: {
    displayName: "Whippet",
    summary:
      "En sofahund med en sprinters krop. Stille, kærlig og bemærkelsesværdigt let at leve med.",
    strengths: [
      "Rolig og lidet krævende derhjemme",
      "Næsten ingen pelspleje",
      "To korte spurter om dagen er nok",
      "Blid og stille",
    ],
    considerations: [
      "Jager alt, der løber, katte og joggere inklusive",
      "Har brug for sikkert indhegnet plads til løs gang",
      "Fryser let — en frakke er ikke valgfri om vinteren",
      "Tynd hud, der river lettere, end man skulle tro",
    ],
  },
  "shih-tzu": {
    displayName: "Shih tzu",
    summary:
      "Skabt til at være selskabshund, og meget god til det. Glad på skødet, glad i en lille lejlighed.",
    strengths: [
      "Ideel til byliv",
      "Venlig med næsten alle",
      "Fælder meget lidt",
      "Har ikke brug for lange gåture",
    ],
    considerations: [
      "Daglig børstning, eller en kort klipning for at holde styr på det",
      "Den korte snude gør varme reelt farligt",
      "Øjnene skal holdes øje med og tørres dagligt",
      "Renlighedstræning kan kræve rigtig tålmodighed",
    ],
  },
  pug: {
    displayName: "Mops",
    summary:
      "Komisk, kærlig og klæbet som en skygge. En mops beder om selskab langt mere end om motion.",
    strengths: [
      "Elsker alle, andre hunde inklusive",
      "Trives i det mindste hjem",
      "Afslappet og sjov",
      "Har brug for lidt motion",
    ],
    considerations: [
      "Vejrtrækningsproblemer er almindelige i racen",
      "Varme kan hurtigt blive farligt",
      "Tager meget let på i vægt — portionerne betyder noget",
      "Rynker og øjne skal have daglig pleje",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon frisé",
    summary:
      "En lille hvid sky med godt humør. Social, kvik og lykkeligst med mennesker omkring sig.",
    strengths: [
      "Fælder meget lidt",
      "Venlig med børn og andre hunde",
      "Passer til lejlighed og lille have",
      "Lærer hurtigt og elsker ros",
    ],
    considerations: [
      "Hundefrisør hver 4.-6. uge, og det er ikke valgfrit",
      "Klarer virkelig ikke at være alene i lang tid",
      "Hud og ører skal holdes øje med",
      "Renlighedstræning kræver ægte konsekvens",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire bullterrier",
    summary:
      "Muskuløs, blødhjertet og kendt for at holde af børn. En staffordshire bullterrier elsker sine mennesker uden forbehold.",
    strengths: [
      "Fantastisk familiehund, når den er godt opdraget",
      "Kort pels, meget nem at holde",
      "Robust og legesyg",
      "Ivrig efter at gøre dig tilfreds",
    ],
    considerations: [
      "Kan være vanskelig med andre hunde uden grundig, tidlig håndtering",
      "Overraskende stærk for størrelsen i snoren",
      "Tygger bløde legetøj og senge i stykker med stor entusiasme",
      "Bliver uretfærdigt begrænset eller fordømt visse steder — værd at kende til, før du beslutter dig",
    ],
  },
  vizsla: {
    displayName: "Vizsla",
    summary:
      "Velcro-hunden. Atletisk, følsom og aldrig mere end en meter fra dig.",
    strengths: [
      "Smuk, stille og ren",
      "Fremragende løbe- eller vandreledsager",
      "Meget kærlig",
      "Næsten ingen pelspleje",
    ],
    considerations: [
      "Har det svært, hvis den er alene hele arbejdsdage",
      "Har brug for en til to timers ordentlig hård motion dagligt",
      "Følsom over for en hævet stemme — kun venlig træning",
      "Fryser mærkbart på vinterture",
    ],
  },
  samoyed: {
    displayName: "Samojedehund",
    summary:
      "Den smilende snehund. Social, snakkesalig og smuk — og en enorm mængde pels.",
    strengths: [
      "Ægte venlig over for alle",
      "Elsker kulde og sne",
      "Legesyg og familiekær",
      "Sjældent aggressiv",
    ],
    considerations: [
      "Fælder ærligt talt utrolige mængder",
      "Har brug for børstning flere gange om ugen for at følge med",
      "Snakker, hyler og gør sin mening klar jævnligt",
      "Overopheder let, når sommeren kommer",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire terrier",
    summary:
      "Bittelille, skarp og fuld af terrier. En yorkshire terrier er modigere, end nogen forventer.",
    strengths: [
      "Fælder næsten intet",
      "Perfekt størrelse til lejlighed",
      "Kvik og lærer hurtigt",
      "Lever ofte længe",
    ],
    considerations: [
      "Pelsen kræver daglig pleje, eller en kort klipning for at holde det simpelt",
      "Gør ad alt, pakkebude inklusive",
      "Sart under fødderne — nem at komme til at træde på",
      "Renlighedstræning kan tage længere tid, end man skulle tro",
    ],
  },
};
