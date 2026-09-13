import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Rasseninhalte auf Deutsch, mit VDH-Rassenamen wo diese abweichen. */
export const breedContentDe: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "Ein aufgeschlossener, futtermotivierter Arbeitshund, der aus gutem Grund zum Standard-Familienhund geworden ist — und trotzdem eine echte Aufgabe braucht, um zufrieden zu sein.",
    strengths: [
      "Liebt es, unter Menschen zu sein",
      "Lernt schnell, besonders für ein Leckerli",
      "Wunderbare Gesellschaft im Alltag",
      "Begleitet Sie gern bei allem Aktiven",
      "Findet sich meist gut ins Familienleben ein",
    ],
    considerations: [
      "Haart das ganze Jahr über — ein ordentlicher Staubsauger lohnt sich",
      "Braucht jeden Tag einen richtigen Spaziergang, nicht nur am Wochenende",
      "Groß und kräftig an der Leine, bis er es anders gelernt hat",
      "Wird ohne Aufgabe schnell gelangweilt, und ein gelangweilter Labrador findet Unfug",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Sanft, gelehrig und unendlich geduldig. Ein Golden wünscht sich vor allem Ihre Gesellschaft.",
    strengths: [
      "Wunderbar sanft mit Kindern",
      "Lernt gern, wenn eine Belohnung winkt",
      "Freundlich zu Menschen und anderen Hunden",
      "Am glücklichsten draußen bei kühlerem Wetter",
    ],
    considerations: [
      "Haart zweimal jährlich stark — rechnen Sie mit richtigen Fellbüscheln",
      "Braucht fast jede Woche eine gründliche Bürste, sonst verfilzt das Fell",
      "Kommt bei Hitze schlecht klar, Sommerspaziergänge sollten früh stattfinden",
      "Mag es wirklich nicht, lange allein gelassen zu werden",
    ],
  },
  poodle: {
    displayName: "Pudel (Großpudel)",
    summary:
      "Ein athletischer, ungewöhnlich intelligenter Hund unter einem eleganten Fell. Blüht bei Denkaufgaben und enger Partnerschaft auf.",
    strengths: [
      "Haart sehr wenig",
      "Begreift Dinge bemerkenswert schnell",
      "Kommt in einer Wohnung zurecht, solange er genug rauskommt",
      "Verspielt, ohne chaotisch zu sein",
    ],
    considerations: [
      "Alle 6–8 Wochen zum Hundefriseur, und das ist nicht günstig",
      "Braucht Denksport und Training, nicht nur Kilometer an der Leine",
      "Kann bei zu häufigem Alleinsein wirklich ängstlich werden",
      "Pflegekosten summieren sich über die Jahre spürbar",
    ],
  },
  "french-bulldog": {
    displayName: "Französische Bulldogge",
    summary:
      "Ein kompakter, komischer und tief anhänglicher Stadtbegleiter mit bescheidenem Bewegungsbedarf und echten gesundheitlichen Besonderheiten.",
    strengths: [
      "Sehr zufrieden in einer Wohnung",
      "Braucht nicht viel Bewegung",
      "Anhänglich und immer in Ihrer Nähe",
      "Ruhiger als die meisten kleinen Hunde",
    ],
    considerations: [
      "Kann bei Hitze oder nach Anstrengung schlecht Luft bekommen",
      "Tierarztkosten fallen über ein Hundeleben tendenziell höher aus",
      "Kommt mit einem vollen Arbeitstag allein zu Hause nicht gut zurecht",
      "Es lohnt sich, auf einen Züchter zu bestehen, der ordentlich gesundheitlich testet",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "Der trainierbarste Hund, den die meisten Menschen nicht halten sollten. Brillant, intensiv, und unglücklich ohne tägliche Beschäftigung.",
    strengths: [
      "Lernt fast alles, was man ihm beibringt",
      "Brillant im Sport, bei Nasenarbeit und Denkspielen",
      "Tief verbunden mit seiner Bezugsperson",
      "Am besten aufgehoben bei wirklich aktiven Menschen",
    ],
    considerations: [
      "Braucht ernsthafte tägliche Bewegung und auch etwas zum Nachdenken",
      "Kommt selten glücklich in einer Wohnung oder ruhigen Routine zurecht",
      "Neigt dazu, Kinder, Radfahrer oder die Katze zu hüten",
      "Ein unterforderter Collie lenkt seinen Verstand schnell auf Unfug",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "Ein kleiner, sanftmütiger Begleiter, der überall dort sein möchte, wo Sie sind. Ruhige Gesellschaft statt eines Projekts.",
    strengths: [
      "Sanft mit Kindern und älteren Menschen",
      "Vollkommen zufrieden in einem kleinen Zuhause",
      "Kommt gut mit anderen Hunden und Haustieren aus",
      "Braucht keine langen Spaziergänge",
    ],
    considerations: [
      "Einige bekannte erbliche Herz- und neurologische Erkrankungen",
      "Selten glücklich, lange allein gelassen zu werden — ein echter Klettehund",
      "Ohren und Fell brauchen regelmäßige Kontrolle und Pflege",
      "Fragen Sie immer nach den Gesundheitstests beider Elterntiere",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "Ein Sprinter, der den Großteil des Tages schläft. Ruhig, sauber und überraschend gut für ruhige Haushalte geeignet.",
    strengths: [
      "Wunderbar ruhig in der Wohnung",
      "Pflegeleichtes Fell, bellt selten",
      "Ein paar kurze Sprints reichen völlig aus",
      "Oft über Tierschutzorganisationen auf der Suche nach einem Zuhause",
    ],
    considerations: [
      "Ein starker Trieb, alles Kleine und Schnelle zu jagen",
      "Freilauf braucht ein wirklich sicher eingezäuntes Gelände",
      "Friert stark, ein Mantel und weiches Körbchen sind kein Luxus",
      "Dünne Haut bedeutet, Schnitte und Schrammen passieren leichter als gedacht",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Eigenständig, penibel und in sich ruhend. Ein Shiba respektiert Sie, statt Ihnen zu gehorchen.",
    strengths: [
      "Kommt mit Alleinsein besser klar als die meisten",
      "Sauber, fast katzenartig",
      "Klein, aber robust",
      "Erreicht oft ein hohes Alter",
    ],
    considerations: [
      "Von Natur aus eigenständig — der Rückruf braucht echte, geduldige Arbeit",
      "Haart zweimal jährlich enorm, überall",
      "Oft zurückhaltend oder distanziert gegenüber anderen Hunden",
      "Nicht der nachsichtigste Ersthund, wenn Sie neu im Training sind",
    ],
  },
  "german-shepherd": {
    displayName: "Deutscher Schäferhund",
    summary:
      "Ernst, wachsam und tief loyal. Ein Deutscher Schäferhund möchte eine Aufgabe, eine Routine und jemanden, für den es sich zu arbeiten lohnt.",
    strengths: [
      "Lernt schnell und behält es",
      "Seinen Menschen ergeben",
      "Wunderbar, wenn richtig sozialisiert",
      "Am besten mit einer täglichen Aufgabe",
    ],
    considerations: [
      "Haart ganzjährig, dazu zweimal jährlich noch stärker",
      "Braucht täglich eine Stunde oder mehr echte Beschäftigung, nicht nur einen Spaziergang",
      "Kann Fremden gegenüber misstrauisch sein ohne frühe, gezielte Sozialisierung",
      "Fragen Sie jeden Züchter nach Hüft- und Ellbogen-Gesundheitstests",
    ],
  },
  "dachshund": {
    displayName: "Dachshund (Teckel)",
    summary:
      "Klein, komisch und mutiger, als seine Beine vermuten lassen. Eine große Persönlichkeit, die gern in Ihrer Nähe ist.",
    strengths: [
      "Passt gut in ein kleines Zuhause",
      "Braucht keine langen Spaziergänge",
      "Aufgeweckt und voller Charakter",
      "Gute Gesellschaft, immer in Ihrer Nähe",
    ],
    considerations: [
      "Der Rücken ist wirklich empfindlich — keine Treppen, kein Sprung von der Couch",
      "Hört gern die eigene Stimme, oft bei der Türklingel",
      "Kann beim Training stur sein — verhandeln Sie damit",
      "Nimmt leicht zu, was für den langen Rücken belastend ist",
    ],
  },
  "beagle": {
    displayName: "Beagle",
    summary:
      "Eine Nase auf vier Beinen. Fröhlich, gesellig und kaum von einem guten Geruch abzubringen.",
    strengths: [
      "Wirklich freundlich zu allen",
      "Robust und gelassen mit Kindern",
      "Liebt andere Hunde",
      "Kurzes Fell, einfach zu pflegen",
    ],
    considerations: [
      "Der Rückruf ist harte Arbeit — die Nase gewinnt meist das Rennen",
      "Bellt und heult, wenn gelangweilt oder zu lange allein",
      "Frisst wirklich alles, was in Reichweite liegt",
      "Braucht einen wirklich sicheren Garten, nicht nur einen niedrigen Zaun",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker Spaniel",
    summary:
      "Sanfte Augen, geschäftig und unendlich bereitwillig. Ein Cocker ist am glücklichsten, wenn er etwas mit Ihnen unternimmt.",
    strengths: [
      "Anhänglich und gefallsüchtig",
      "Liebt Nasenarbeit und Spiele",
      "Kommt in Stadt und Land zurecht",
      "Gute Größe für die meisten Zuhause",
    ],
    considerations: [
      "Ohren müssen oft kontrolliert und gereinigt werden, sonst folgen Entzündungen",
      "Fell verfilzt schnell ohne regelmäßige, gründliche Bürste",
      "Wird ohne Aufgabe zappelig und unruhig",
      "Kommt mit langen Stunden allein nicht gut zurecht",
    ],
  },
  "chihuahua": {
    displayName: "Chihuahua",
    summary:
      "Winzig, mutig und völlig ergeben gegenüber ein oder zwei Menschen. Kleiner Hund, ausgewachsene Meinungen.",
    strengths: [
      "Perfekt für eine Wohnung",
      "Braucht sehr wenig Bewegung",
      "Langlebig, oft bis weit in die Teenagerjahre",
      "Lässt sich leicht mitnehmen",
    ],
    considerations: [
      "Wirklich zerbrechlich — kein Hund für ausgelassenen Umgang",
      "Neigt dazu, alles Unbekannte anzubellen, auch den Paketboten",
      "Friert stark und braucht im Winter einen Mantel",
      "Braucht echte, gezielte Sozialisierung, um entspannt und nicht schnappig zu bleiben",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Zwergschnauzer",
    summary:
      "Bärtig, aufgeweckt und leise von sich überzeugt. Ein Terrier-Verstand in einem gepflegten, haararmen Fell.",
    strengths: [
      "Haart sehr wenig",
      "Scharfsinnig und lernt schnell",
      "Passt in Wohnung oder Haus",
      "Robust für einen kleinen Hund",
    ],
    considerations: [
      "Trimmen alle 6–8 Wochen, was sich in den Kosten summiert",
      "Neigt dazu, an der Tür, bei der Post und beim Wind zu bellen",
      "Nicht immer begeistert von kleineren Haustieren im Haus",
      "Neigt zu Übergewicht, daher zählen die Portionen",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berner Sennenhund",
    summary:
      "Riesig, sanft und ruhig. Ein Berner ist sanfte Gesellschaft für eine Familie mit Platz und einem Faible für Fellhaare.",
    strengths: [
      "Wunderbar geduldig mit Kindern",
      "Ruhig in der Wohnung für einen so großen Hund",
      "Liebt kaltes Wetter",
      "Gutmütig und ausgeglichen",
    ],
    considerations: [
      "Eine kürzere Lebenserwartung als die meisten Rassen — ein ehrlicher Kummer, den man abwägen muss",
      "Viel Fell, überall im Haus, den größten Teil des Jahres",
      "Kostet spürbar mehr bei Futter, Versicherung und Behandlung",
      "Kommt mit warmem Wetter schlecht zurecht",
    ],
  },
  "australian-shepherd": {
    displayName: "Australian Shepherd",
    summary:
      "Flink, athletisch und immer auf der Hut. Ein Aussie braucht eher eine Aufgabe als einen Garten.",
    strengths: [
      "Brillant bei allem, was man ihm beibringt",
      "Liebt Sport, Tricks und Nasenarbeit",
      "Sehr verbunden mit seiner Bezugsperson",
      "Ansehnlich und robust im Freien",
    ],
    considerations: [
      "Braucht täglich stundenlange echte Beschäftigung",
      "Hütet Kinder, Fahrräder und Jogger, wenn zu wenig ausgelastet",
      "Wird schnell gelangweilt, und dann auch laut",
      "Selten gut für ein Leben in der Wohnung geeignet",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack Russell Terrier",
    summary:
      "Klein, schnell und vollkommen von sich überzeugt. Großer Spaß, wenn Sie einen Hund mit Motor mögen.",
    strengths: [
      "Robust, gesund und langlebig",
      "Passt in ein kleines Zuhause",
      "Endlos verspielt",
      "Kommt mit Alleinsein besser klar als die meisten",
    ],
    considerations: [
      "Jagt alles Kleine und Schnelle, Eichhörnchen eingeschlossen",
      "Gräbt, und zwar ernsthaft — Ihr Rasen ist nicht sicher",
      "Kann mit anderen Hunden ruppig werden, besonders fremden",
      "Braucht deutlich mehr Bewegung, als seine Größe vermuten lässt",
    ],
  },
  "siberian-husky": {
    displayName: "Siberian Husky",
    summary:
      "Wunderschön, freundlich und dafür gebaut, den ganzen Tag zu laufen. Ein Husky tut selten das, was Sie wollen, nur weil Sie darum gebeten haben.",
    strengths: [
      "Gesellig mit Menschen und Hunden",
      "Gemacht für kaltes Wetter und lange Strecken",
      "Bellt selten",
      "Sauber, mit wenig Hundegeruch",
    ],
    considerations: [
      "Entkommt aus Gärten mit echter Entschlossenheit und kommt nicht zuverlässig zurück",
      "Der Rückruf ist ein lebenslanges Projekt, kein Wochenendkurs",
      "Haart zweimal jährlich enorm — überall, wochenlang",
      "Leidet wirklich in warmem Klima oder heißen Sommern",
    ],
  },
  "boxer": {
    displayName: "Boxer",
    summary:
      "Ein Clown, der nie ganz erwachsen wird. Ausgelassen, warmherzig und immer mittendrin.",
    strengths: [
      "Wunderbar mit Kindern",
      "Verspielt bis ins hohe Alter",
      "Kurzes Fell, einfach zu pflegen",
      "Lernt gut mit freundlichem, positivem Training",
    ],
    considerations: [
      "Ausgelassen und kräftig — Hochspringen braucht frühes Training",
      "Überhitzt schnell wegen der kurzen Nase",
      "Einige ernsthafte erbliche Gesundheitsprobleme in der Rasse",
      "Ein bekennender Sabberer — halten Sie ein Tuch bereit",
    ],
  },
  "rottweiler": {
    displayName: "Rottweiler",
    summary:
      "Kraftvoll, besonnen und still selbstbewusst. Ein Rottweiler braucht einen Halter, der weiß, was er tut.",
    strengths: [
      "Ausgeglichen und selbstsicher bei guter Erziehung",
      "Lernt schnell und arbeitet bereitwillig",
      "Loyal und beschützend gegenüber der Familie",
      "Pflegeleichtes Fell",
    ],
    considerations: [
      "Sehr kräftig — das Leinentraining muss von Anfang an solide sein",
      "Braucht vom ersten Tag an sorgfältige, gezielte Sozialisierung",
      "Versicherung und Futter kosten spürbar mehr",
      "Manche Orte und Versicherer schränken die Rasse ein — vorab prüfen lohnt sich",
    ],
  },
  "whippet": {
    displayName: "Whippet",
    summary:
      "Ein Sofahund mit dem Körper eines Sprinters. Ruhig, anhänglich und bemerkenswert unkompliziert im Zusammenleben.",
    strengths: [
      "Ruhig und genügsam zu Hause",
      "Fast keine Fellpflege nötig",
      "Zwei kurze Sprints am Tag reichen aus",
      "Sanft und ruhig",
    ],
    considerations: [
      "Jagt alles, was läuft, Katzen und Jogger eingeschlossen",
      "Braucht sicher eingezäuntes Gelände für jeden Freilauf",
      "Friert stark — ein Mantel ist im Winter kein Luxus",
      "Dünne Haut reißt leichter ein, als man erwarten würde",
    ],
  },
  "shih-tzu": {
    displayName: "Shih Tzu",
    summary:
      "Gemacht, um Begleiter zu sein, und wirklich gut darin. Zufrieden auf dem Schoß, zufrieden in einer kleinen Wohnung.",
    strengths: [
      "Ideal für das Stadtleben",
      "Freundlich zu fast allen",
      "Haart sehr wenig",
      "Braucht keine langen Spaziergänge",
    ],
    considerations: [
      "Tägliches Bürsten, oder ein kurzer Schnitt, um es einfach zu halten",
      "Die kurze Nase macht Hitze wirklich gefährlich",
      "Augen brauchen tägliche Kontrolle und Reinigung",
      "Stubenreinheit kann echte Geduld erfordern",
    ],
  },
  "pug": {
    displayName: "Mops",
    summary:
      "Komisch, anhänglich und stets dicht dabei. Ein Mops verlangt viel mehr nach Gesellschaft als nach Bewegung.",
    strengths: [
      "Liebt jeden, Hunde eingeschlossen",
      "Zufrieden im kleinsten Zuhause",
      "Gelassen und lustig",
      "Braucht wenig Bewegung",
    ],
    considerations: [
      "Atemprobleme sind in der Rasse verbreitet",
      "Hitze kann überraschend schnell gefährlich werden",
      "Nimmt sehr leicht zu — Portionen sind wichtig",
      "Falten und Augen brauchen richtige tägliche Pflege",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon Frisé",
    summary:
      "Eine kleine weiße Wolke mit fröhlichem Wesen. Gesellig, aufgeweckt und am glücklichsten mit Menschen um sich herum.",
    strengths: [
      "Haart sehr wenig",
      "Freundlich zu Kindern und anderen Hunden",
      "Passt in Wohnungen und kleine Gärten",
      "Lernt schnell und liebt Lob",
    ],
    considerations: [
      "Ein Termin beim Hundefriseur alle 4–6 Wochen, kein Verhandlungsspielraum",
      "Kommt mit langem Alleinsein wirklich nicht klar",
      "Haut und Ohren brauchen regelmäßige Aufmerksamkeit",
      "Stubenreinheit braucht echte Konsequenz, um sich zu festigen",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire Bullterrier",
    summary:
      "Muskulös, weichherzig und bekanntermaßen kinderlieb. Ein Staffie liebt seine Menschen vorbehaltlos.",
    strengths: [
      "Wunderbarer Familienhund bei guter Erziehung",
      "Kurzes Fell, sehr pflegeleicht",
      "Robust und verspielt",
      "Gefallsüchtig",
    ],
    considerations: [
      "Kann ohne sorgfältigen, frühen Umgang schwierig mit anderen Hunden sein",
      "Überraschend kräftig an der Leine für seine Größe",
      "Zerkaut Kuscheltiere und Betten mit echter Begeisterung",
      "Wird an manchen Orten ungerecht eingeschränkt oder falsch eingeschätzt — gut zu wissen, bevor man sich entscheidet",
    ],
  },
  "vizsla": {
    displayName: "Magyar Vizsla",
    summary:
      "Der Klettehund. Athletisch, feinfühlig und nie mehr als einen Meter von Ihnen entfernt.",
    strengths: [
      "Wunderschön, ruhig und sauber",
      "Brillanter Lauf- oder Wanderbegleiter",
      "Sehr anhänglich",
      "Fast keine Fellpflege nötig",
    ],
    considerations: [
      "Leidet stark, wenn er ganze Arbeitstage allein gelassen wird",
      "Braucht täglich ein bis zwei Stunden richtig anstrengende Bewegung",
      "Empfindlich gegenüber lauter Stimme — nur freundliches Training",
      "Friert bei Winterspaziergängen deutlich stärker als andere",
    ],
  },
  "samoyed": {
    displayName: "Samojede",
    summary:
      "Der lächelnde Schneehund. Gesellig, gesprächig und wunderschön — und jede Menge Fell.",
    strengths: [
      "Wirklich freundlich zu allen",
      "Liebt kaltes Wetter und Schnee",
      "Verspielt und familienorientiert",
      "Selten aggressiv",
    ],
    considerations: [
      "Haart in einem ehrlich erstaunlichen Ausmaß",
      "Braucht mehrmals wöchentlich Bürsten, um mitzuhalten",
      "Spricht, heult und äußert regelmäßig seine Meinung",
      "Überhitzt leicht, sobald der Sommer kommt",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire Terrier",
    summary:
      "Winzig, scharfsinnig und voller Terrier-Wesen. Ein Yorkie ist mutiger, als jeder erwartet.",
    strengths: [
      "Haart kaum",
      "Perfekte Größe für eine Wohnung",
      "Aufgeweckt und lernt schnell",
      "Erreicht oft ein hohes Alter",
    ],
    considerations: [
      "Fell braucht tägliche Pflege, oder einen kurzen Schnitt, um es einfach zu halten",
      "Neigt dazu, alles anzubellen, den Paketboten eingeschlossen",
      "Empfindlich unter den Füßen — leicht unabsichtlich zu verletzen",
      "Stubenreinheit kann langsamer gehen, als man erwarten würde",
    ],
  },
};
