import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Deutschsprachige Rassetexte, verknüpft mit den stabilen Rasse-IDs. */
export const breedContentDe: Partial<Record<BreedId, BreedContent>> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "Ein herzlicher, futterfreudiger Gebrauchshund, der aus gutem Grund zum Inbegriff des Familienhundes geworden ist — und trotzdem eine echte Aufgabe braucht, um zufrieden zu sein.",
    strengths: [
      "Liebt es, unter Menschen zu sein",
      "Lernt schnell, besonders für einen Leckerbissen",
      "Wunderbare Gesellschaft im Alltag",
      "Kommt gern bei allem Aktiven mit",
      "Findet sich meist gut ins Familienleben ein",
    ],
    considerations: [
      "Haart das ganze Jahr über — ein guter Staubsauger lohnt sich",
      "Braucht jeden Tag einen richtigen Spaziergang, nicht nur am Wochenende",
      "Groß und kräftig an der Leine, solange er es nicht anders gelernt hat",
      "Langweilt sich schnell ohne Aufgabe, und ein gelangweilter Labrador findet Unfug",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Sanft, gelehrig und von endloser Geduld. Ein Golden verlangt vor allem eines: Gesellschaft.",
    strengths: [
      "Wunderbar sanft mit Kindern",
      "Lernt gern, wenn es sich lohnt",
      "Freundlich zu Menschen und anderen Hunden",
      "Am glücklichsten draußen bei kühlerem Wetter",
    ],
    considerations: [
      "Haart zweimal im Jahr stark — Fellbüschel inklusive",
      "Braucht fast wöchentlich gründliches Bürsten, sonst verfilzt das Fell",
      "Tut sich schwer bei Hitze, Sommerspaziergänge sollten früh stattfinden",
      "Mag es wirklich nicht, lange allein gelassen zu werden",
    ],
  },
  poodle: {
    displayName: "Pudel (Großpudel)",
    summary:
      "Ein athletischer, ungewöhnlich kluger Hund hinter elegantem Fell. Blüht auf bei Denksport und enger Partnerschaft.",
    strengths: [
      "Haart sehr wenig",
      "Begreift Dinge bemerkenswert schnell",
      "Kommt in der Wohnung zurecht, solange er genug rauskommt",
      "Verspielt, ohne chaotisch zu sein",
    ],
    considerations: [
      "Alle 6–8 Wochen zum Hundefriseur, und das ist nicht billig",
      "Braucht Kopfarbeit und Training, nicht nur Kilometer an der Leine",
      "Kann bei zu viel Alleinsein wirklich ängstlich werden",
      "Die Fellpflegekosten summieren sich über die Jahre",
    ],
  },
  "french-bulldog": {
    displayName: "Französische Bulldogge",
    summary:
      "Ein kompakter, komischer und sehr anhänglicher Stadthund mit bescheidenem Bewegungsbedarf, aber ernsten gesundheitlichen Themen.",
    strengths: [
      "Sehr wohl in der Wohnung",
      "Braucht nicht viel Bewegung",
      "Anhänglich und immer in deiner Nähe",
      "Ruhiger als die meisten kleinen Hunde",
    ],
    considerations: [
      "Kann bei Hitze oder Anstrengung schlecht Luft bekommen",
      "Tierarztkosten liegen über die Lebenszeit meist höher",
      "Kommt mit einem ganzen Arbeitstag allein nicht gut zurecht",
      "Auf einen Züchter bestehen, der gründlich gesundheitstestet",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "Der lernfähigste Hund, den die meisten Menschen nicht halten sollten. Brillant, intensiv und unglücklich ohne tägliche Aufgabe.",
    strengths: [
      "Lernt fast alles, was man ihm beibringt",
      "Brillant in Hundesport, Nasenarbeit und Denkspielen",
      "Tief verbunden mit seiner Bezugsperson",
      "Am besten aufgehoben bei wirklich aktiven Menschen",
    ],
    considerations: [
      "Braucht ernsthafte tägliche Bewegung und auch Kopfarbeit",
      "Wird selten glücklich in Wohnung oder ruhigem Alltag",
      "Kann versuchen, Kinder, Radfahrer oder die Katze zu hüten",
      "Ein unterforderter Collie lenkt sein Gehirn schnell auf Unfug",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "Ein kleiner, sanftmütiger Begleiter, der einfach dort sein will, wo du bist. Ruhige Gesellschaft statt Projekt.",
    strengths: [
      "Sanft mit Kindern und älteren Menschen",
      "Vollkommen zufrieden in einem kleinen Zuhause",
      "Kommt gut mit anderen Hunden und Haustieren aus",
      "Braucht keine langen Spaziergänge",
    ],
    considerations: [
      "Bekannte erbliche Herz- und neurologische Erkrankungen",
      "Selten glücklich, lange allein zu bleiben — ein echter Kletthund",
      "Ohren und Fell brauchen regelmäßige Kontrolle und Pflege",
      "Immer nach Gesundheitstests beider Elterntiere fragen",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "Ein Sprinter, der den größten Teil des Tages schläft. Ruhig, sauber und überraschend gut für ruhige Haushalte geeignet.",
    strengths: [
      "Wunderbar ruhig in der Wohnung",
      "Pflegeleichtes Fell, bellt selten",
      "Ein paar kurze Sprints reichen völlig",
      "Oft über den Tierschutz zu finden",
    ],
    considerations: [
      "Starker Jagdtrieb auf alles Kleine und Schnelle",
      "Freilauf braucht wirklich sicher eingezäunte Flächen",
      "Friert stark, Mantel und weiches Körbchen sind Pflicht",
      "Dünne Haut, Schnitte und Schürfwunden passieren leichter als gedacht",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Eigenständig, reinlich und in sich ruhend. Ein Shiba respektiert dich, statt dir zu gehorchen.",
    strengths: [
      "Kommt mit Alleinsein besser zurecht als die meisten",
      "Sauber, fast katzenhaft",
      "Klein, aber robust",
      "Wird oft sehr alt",
    ],
    considerations: [
      "Von Natur aus eigenständig — der Rückruf braucht echte, geduldige Arbeit",
      "Verliert zweimal im Jahr enorm viel Unterwolle, überall",
      "Oft zurückhaltend oder distanziert gegenüber anderen Hunden",
      "Nicht der nachsichtigste Ersthund für Trainingsanfänger",
    ],
  },
  "german-shepherd": {
    displayName: "Deutscher Schäferhund",
    summary:
      "Ernsthaft, wachsam und tief loyal. Ein Deutscher Schäferhund will eine Aufgabe, eine Routine und jemanden, für den es sich zu arbeiten lohnt.",
    strengths: [
      "Lernt schnell und merkt sich alles",
      "Ergeben gegenüber seinen Menschen",
      "Wunderbar, wenn richtig sozialisiert",
      "Am besten mit einer täglichen Aufgabe",
    ],
    considerations: [
      "Haart das ganze Jahr über, dazu zweimal im Jahr besonders stark",
      "Braucht täglich eine Stunde oder mehr echte Arbeit, nicht nur einen Spaziergang",
      "Kann ohne frühe, gezielte Sozialisierung fremden Menschen gegenüber misstrauisch sein",
      "Beim Züchter unbedingt nach HD/ED-Gesundheitstests fragen",
    ],
  },
  dachshund: {
    displayName: "Dackel",
    summary:
      "Klein, komisch und mutiger, als seine Beine vermuten lassen. Eine große Persönlichkeit, die gern nah bei dir ist.",
    strengths: [
      "Passt gut in ein kleines Zuhause",
      "Braucht keine langen Spaziergänge",
      "Klug und voller Charakter",
      "Gute Gesellschaft, immer unter den Füßen",
    ],
    considerations: [
      "Der Rücken ist wirklich empfindlich — keine Treppen, kein Sprung vom Sofa",
      "Hört gern die eigene Stimme, oft an der Türklingel",
      "Kann stur beim Training sein — Verhandlungssache",
      "Nimmt leicht zu, was den langen Rücken zusätzlich belastet",
    ],
  },
  beagle: {
    displayName: "Beagle",
    summary:
      "Eine Nase auf vier Beinen. Fröhlich, gesellig und fast unmöglich von einem guten Geruch abzubringen.",
    strengths: [
      "Wirklich freundlich zu jedem",
      "Robust und gelassen mit Kindern",
      "Liebt andere Hunde",
      "Kurzes Fell, unkompliziert zu pflegen",
    ],
    considerations: [
      "Der Rückruf ist harte Arbeit — die Nase gewinnt meist",
      "Bellt und heult, wenn er sich langweilt oder zu lange allein ist",
      "Frisst wirklich alles, was in Reichweite liegt",
      "Braucht einen wirklich sicheren Garten, nicht nur einen niedrigen Zaun",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker Spaniel",
    summary:
      "Sanfter Blick, viel Betrieb und endlose Kooperationsbereitschaft. Ein Cocker ist am glücklichsten, wenn er mit dir etwas unternimmt.",
    strengths: [
      "Anhänglich und lernwillig",
      "Liebt Nasenarbeit und Spiele",
      "Kommt in Stadt und Land zurecht",
      "Gute Größe für die meisten Zuhause",
    ],
    considerations: [
      "Ohren müssen oft kontrolliert und gereinigt werden, sonst drohen Entzündungen",
      "Fell verfilzt schnell ohne regelmäßiges, gründliches Bürsten",
      "Wird ohne Aufgabe zappelig und unruhig",
      "Kommt mit langen Stunden allein nicht gut zurecht",
    ],
  },
  chihuahua: {
    displayName: "Chihuahua",
    summary:
      "Winzig, mutig und völlig ergeben gegenüber ein oder zwei Menschen. Kleiner Hund, große Meinungen.",
    strengths: [
      "Perfekt für die Wohnung",
      "Braucht sehr wenig Bewegung",
      "Wird oft sehr alt, weit in die Teenagerjahre hinein",
      "Lässt sich leicht mitnehmen",
    ],
    considerations: [
      "Wirklich zerbrechlich — kein Hund für stürmischen Umgang",
      "Neigt dazu, alles Fremde anzubellen, auch den Paketboten",
      "Friert stark und braucht im Winter einen Mantel",
      "Braucht echte, gezielte Sozialisierung, um entspannt und nicht schnappig zu bleiben",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Zwergschnauzer",
    summary:
      "Bärtig, klug und still von sich überzeugt. Ein Terriergehirn in einem gepflegten, wenig haarenden Fell.",
    strengths: [
      "Haart sehr wenig",
      "Aufgeweckt und lernt schnell",
      "Passt in Wohnung oder Haus",
      "Robust für einen kleinen Hund",
    ],
    considerations: [
      "Trimmen alle 6–8 Wochen, das summiert sich in den Kosten",
      "Bellt gern an der Tür, bei der Post und beim Wind",
      "Nicht immer begeistert von kleineren Haustieren im Haus",
      "Neigt zu Übergewicht, Portionsgrößen sind wichtig",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berner Sennenhund",
    summary:
      "Riesig, sanft und ruhig. Ein Berner ist sanfte Gesellschaft für eine Familie mit Platz und einer Schwäche für Hundehaare.",
    strengths: [
      "Wunderbar geduldig mit Kindern",
      "Für so einen großen Hund erstaunlich ruhig drinnen",
      "Liebt kaltes Wetter",
      "Gutmütig und ausgeglichen",
    ],
    considerations: [
      "Kürzere Lebenserwartung als die meisten Rassen — ein ehrliches Herzensthema, das man abwägen muss",
      "Viel Fell, überall im Haus, fast das ganze Jahr über",
      "Kostet spürbar mehr bei Futter, Versicherung und Behandlung",
      "Kommt mit warmem Wetter richtig schlecht zurecht",
    ],
  },
  "australian-shepherd": {
    displayName: "Australian Shepherd",
    summary:
      "Wendig, athletisch und immer wachsam. Ein Aussie braucht eher eine Aufgabe als einen Garten.",
    strengths: [
      "Brillant bei allem, was man ihm beibringt",
      "Liebt Hundesport, Tricks und Nasenarbeit",
      "Sehr eng an seine Bezugsperson gebunden",
      "Hübsch und robust im Freien",
    ],
    considerations: [
      "Braucht jeden einzelnen Tag stundenlang echte Beschäftigung",
      "Hütet Kinder, Fahrräder und Jogger, wenn er unterfordert ist",
      "Langweilt sich schnell — und macht das laut deutlich",
      "Passt selten gut zum Leben in der Wohnung",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack Russell Terrier",
    summary:
      "Klein, schnell und felsenfest von sich überzeugt. Großer Spaß, wenn man einen Hund mit Motor mag.",
    strengths: [
      "Robust, gesund und langlebig",
      "Passt in ein kleines Zuhause",
      "Endlos verspielt",
      "Kommt mit Alleinsein besser zurecht als die meisten",
    ],
    considerations: [
      "Jagt alles, was klein ist und schnell läuft, Eichhörnchen inklusive",
      "Gräbt, und zwar mit vollem Ernst — der Rasen ist nicht sicher",
      "Kann mit anderen Hunden zickig werden, besonders unbekannten",
      "Braucht deutlich mehr Bewegung, als seine Größe vermuten lässt",
    ],
  },
  "siberian-husky": {
    displayName: "Siberian Husky",
    summary:
      "Wunderschön, freundlich und gebaut, um den ganzen Tag zu laufen. Ein Husky tut selten, was du willst, nur weil du gefragt hast.",
    strengths: [
      "Gesellig gegenüber Menschen und Hunden",
      "Gemacht für kaltes Wetter und lange Strecken",
      "Bellt selten",
      "Sauber, mit wenig Hundegeruch",
    ],
    considerations: [
      "Entkommt aus Gärten mit echter Entschlossenheit und kommt nicht zuverlässig zurück",
      "Der Rückruf ist ein lebenslanges Projekt, keine Wochenendsache",
      "Verliert zweimal im Jahr wochenlang massenhaft Unterwolle, überall",
      "Leidet in warmem Klima oder einem heißen Sommer wirklich",
    ],
  },
  boxer: {
    displayName: "Boxer",
    summary:
      "Ein Clown, der nie ganz erwachsen wird. Übermütig, warmherzig und immer mittendrin.",
    strengths: [
      "Wunderbar mit Kindern",
      "Verspielt bis ins hohe Alter",
      "Kurzes Fell, einfach zu pflegen",
      "Lernt gut mit freundlichem, motivierendem Training",
    ],
    considerations: [
      "Übermütig und kräftig — Hochspringen muss früh trainiert werden",
      "Überhitzt schnell wegen der kurzen Schnauze",
      "Einige ernste erbliche Gesundheitsprobleme in der Rasse",
      "Ein bekennender Sabberer — ein Tuch griffbereit halten",
    ],
  },
  rottweiler: {
    displayName: "Rottweiler",
    summary:
      "Kraftvoll, besonnen und still selbstbewusst. Ein Rottweiler braucht einen Halter, der weiß, was er tut.",
    strengths: [
      "Ausgeglichen und selbstsicher bei guter Erziehung",
      "Lernt schnell und arbeitet bereitwillig mit",
      "Loyal und beschützend gegenüber der Familie",
      "Pflegeleichtes Fell",
    ],
    considerations: [
      "Sehr kräftig — das Leinentraining muss von Anfang an sitzen",
      "Braucht von Tag eins an sorgfältige, gezielte Sozialisierung",
      "Versicherung und Futter kosten spürbar mehr",
      "Manche Orte und Versicherer schränken die Rasse ein — vorher unbedingt prüfen",
    ],
  },
  whippet: {
    displayName: "Whippet",
    summary:
      "Ein Sofahund im Körper eines Sprinters. Ruhig, anhänglich und bemerkenswert unkompliziert im Zusammenleben.",
    strengths: [
      "Ruhig und genügsam zu Hause",
      "Fast keine Fellpflege nötig",
      "Zwei kurze Sprints am Tag reichen",
      "Sanft und still",
    ],
    considerations: [
      "Jagt allem hinterher, was läuft, Katzen und Jogger inklusive",
      "Braucht sicher eingezäunte Flächen für jeden Freilauf",
      "Friert stark — ein Mantel ist im Winter keine Option, sondern Pflicht",
      "Dünne Haut reißt leichter ein, als man erwarten würde",
    ],
  },
  "shih-tzu": {
    displayName: "Shih Tzu",
    summary:
      "Gemacht zum Begleiter, und sehr gut darin. Glücklich auf dem Schoß, glücklich in einer kleinen Wohnung.",
    strengths: [
      "Ideal für das Stadtleben",
      "Freundlich zu fast jedem",
      "Haart sehr wenig",
      "Braucht keine langen Spaziergänge",
    ],
    considerations: [
      "Tägliches Bürsten, oder ein kurzer Schnitt, um es einfach zu halten",
      "Die kurze Schnauze macht Hitze wirklich gefährlich",
      "Augen müssen täglich beobachtet und gereinigt werden",
      "Die Stubenreinheit kann echte Geduld erfordern",
    ],
  },
  pug: {
    displayName: "Mops",
    summary:
      "Komisch, anhänglich und dir immer dicht auf den Fersen. Ein Mops verlangt weit mehr nach Gesellschaft als nach Bewegung.",
    strengths: [
      "Liebt jeden, andere Hunde eingeschlossen",
      "Kommt im kleinsten Zuhause gut zurecht",
      "Gelassen und komisch",
      "Braucht wenig Bewegung",
    ],
    considerations: [
      "Atemprobleme sind in der Rasse verbreitet",
      "Hitze kann überraschend schnell gefährlich werden",
      "Nimmt sehr leicht zu — Portionsgrößen sind wichtig",
      "Falten und Augen brauchen tägliche, sorgfältige Pflege",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon Frisé",
    summary:
      "Eine kleine weiße Wolke mit fröhlichem Gemüt. Gesellig, aufgeweckt und am glücklichsten mit Menschen um sich herum.",
    strengths: [
      "Haart sehr wenig",
      "Freundlich zu Kindern und anderen Hunden",
      "Passt zu Wohnung und kleinem Garten",
      "Lernt schnell und liebt Lob",
    ],
    considerations: [
      "Alle 4–6 Wochen zum Hundefriseur, und das ist keine Option",
      "Kommt wirklich schlecht mit langem Alleinsein zurecht",
      "Haut und Ohren brauchen regelmäßige Aufmerksamkeit",
      "Die Stubenreinheit braucht wirklich Konsequenz, um zu sitzen",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire Bullterrier",
    summary:
      "Muskulös, weichherzig und berühmt für seine Zuneigung zu Kindern. Ein Staffie liebt seine Menschen vorbehaltlos.",
    strengths: [
      "Wunderbarer Familienhund bei guter Erziehung",
      "Kurzes Fell, sehr pflegeleicht",
      "Robust und verspielt",
      "Bemüht, es dir recht zu machen",
    ],
    considerations: [
      "Kann ohne sorgfältigen frühen Umgang schwierig mit anderen Hunden sein",
      "Erstaunlich kräftig für seine Größe an der Leine",
      "Zerkaut Kuscheltiere und Betten mit echter Begeisterung",
      "In manchen Orten unfair eingeschränkt oder falsch eingeschätzt — vorher gut informieren",
    ],
  },
  vizsla: {
    displayName: "Vizsla",
    summary:
      "Der Kletthund. Athletisch, feinfühlig und nie mehr als einen Meter von dir entfernt.",
    strengths: [
      "Schön, ruhig und sauber",
      "Brillanter Begleiter beim Laufen oder Wandern",
      "Sehr anhänglich",
      "Fast keine Fellpflege nötig",
    ],
    considerations: [
      "Leidet stark, wenn er ganze Arbeitstage allein bleiben muss",
      "Braucht täglich ein bis zwei Stunden richtig anstrengende Bewegung",
      "Empfindlich gegenüber lauter Stimme — nur freundliches Training",
      "Friert im Winter auf Spaziergängen deutlich",
    ],
  },
  samoyed: {
    displayName: "Samojede",
    summary:
      "Der lächelnde Schneehund. Gesellig, gesprächig und wunderschön — und jede Menge Fell.",
    strengths: [
      "Wirklich freundlich zu jedem",
      "Liebt kaltes Wetter und Schnee",
      "Verspielt und familienbezogen",
      "Selten aggressiv",
    ],
    considerations: [
      "Haart eine ehrlich erstaunliche Menge",
      "Braucht mehrmals wöchentlich Bürsten, um mitzuhalten",
      "Bellt, heult und macht seine Meinung regelmäßig laut",
      "Überhitzt leicht, sobald der Sommer kommt",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire Terrier",
    summary:
      "Winzig, scharfsinnig und voller Terriergeist. Ein Yorkie ist mutiger, als jeder erwartet.",
    strengths: [
      "Haart kaum",
      "Perfekte Größe für die Wohnung",
      "Aufgeweckt und lernt schnell",
      "Wird oft sehr alt",
    ],
    considerations: [
      "Fell braucht tägliche Pflege, oder einen kurzen Schnitt, um es einfach zu halten",
      "Neigt dazu, alles anzubellen, auch den Paketboten",
      "Zerbrechlich unter den Füßen — leicht unabsichtlich zu verletzen",
      "Die Stubenreinheit kann länger dauern, als man erwarten würde",
    ],
  },
};
