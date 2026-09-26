import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Allgemeine Orientierung, kein tierärztlicher Rat.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreDe: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Whippets wurden im 19. Jahrhundert im Norden Englands von Fabrik- und Bergarbeiterfamilien gezüchtet, die einen kleinen, schnellen Hund für Rennen und die Kaninchenjagd wollten – das »Rennpferd des kleinen Mannes«.",
    healthConsiderations: h(
      "Whippets sind meist eine robuste, langlebige Rasse, aber die dünne Haut reißt leicht und der schlanke Körper friert, ein Mäntelchen an Frosttagen ist also ein freundlicher Gedanke. Windhunde können auf Narkosemittel anders reagieren, erwähne die Rasse deshalb bei jeder Tierarztpraxis. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du würdest deinen Hund in der Nähe von Kaninchen, Katzen oder Verkehr von der Leine lassen und auf das Beste hoffen",
      "Du wünschst dir einen Hund, der draußen oder in einem kühlen Haus zufrieden ist",
      "Dein Garten ist nicht eingezäunt, und du hast keinen sicheren Platz für einen richtigen Sprint",
    ],
    keyTradeoffs: [
      "Ruhig und sauber im Haus, erstaunlich draußen – du brauchst sowohl ein Sofa als auch eine sichere Wiese",
      "Sanft und leise, mit einem Jagdtrieb, den kein Training ganz abstellt",
    ],
  },
  greyhound: {
    originalPurpose:
      "Der Greyhound gehört zu den ältesten Windhundtypen und wurde seit Jahrtausenden gezüchtet, um Hasen auf Sicht einzuholen. In jüngerer Zeit war er Rennhund, und viele pensionierte Renner finden heute ein Zuhause als Familienhund.",
    healthConsiderations: h(
      "Greyhounds sind schlank, mit dünner Haut und wenig Körperfett, sie frieren also und können auf harten Böden Druckstellen bekommen – ein weiches Bett ist wichtig. Die Zähne brauchen oft regelmäßige Pflege, und bei tiefbrüstigen Hunden wie diesem achtet man üblicherweise auf Magendrehung. Pensionierte Renner können alte Verletzungen mitbringen, frag also die Organisation, was sie weiß, und sprich mit deiner Tierarztpraxis.",
    ),
    poorMatchFor: [
      "Du möchtest deinen Hund in einem unumzäunten Park frei laufen lassen",
      "Du lebst mit einer Katze oder Kleintieren und kannst sie nicht getrennt halten",
      "Du wünschst dir einen Hund, der an einem Wintertag draußen warm bleibt",
    ],
    keyTradeoffs: [
      "Einer der sanftesten, leisesten Hunde überhaupt, einen Großteil des Tages auf dem Sofa, und gebaut zum Sprint, sobald etwas Kleines rennt",
      "Ein großer Hund in einem ruhigen Körper: einfach im Haus, und viel Hund am anderen Ende der Leine, wenn er losschießt",
    ],
  },
  poodle: {
    originalPurpose:
      "Der Pudel begann als deutscher Wasserapportierer, der Jägern Enten holte, und wurde in Frankreich zum geliebten Begleiter und zum bekanntesten Hund des Landes. Die berühmte Ausstellungsschur soll als praktische Schur zum Schwimmen begonnen haben.",
    healthConsiderations: h(
      "Hüften, Augen und Haut sind die üblichen Fragen, und bei tiefbrüstigen Hunden wie dem Großpudel achtet man üblicherweise auf Magendrehung. Das Fell verfilzt ohne regelmäßiges Bürsten, und die Ohren sollten auch kontrolliert werden. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Alle sechs bis acht Wochen zum Hundefriseur und an den meisten Tagen bürsten passt nicht in dein Leben",
      "Du wünschst dir einen Hund, der es verkraftet, einen Tag lang ignoriert zu werden",
      "Du möchtest dir lieber nicht die Zeit nehmen, einem klugen Hund etwas zum Nachdenken zu geben",
    ],
    keyTradeoffs: [
      "Schnell, gefallen wollend und kaum haarend – mit einem Fell, das echte, regelmäßige Pflege braucht",
      "Ein ernsthafter Denker: brillant zu trainieren und erfinderisch, wenn ihm langweilig ist",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichons stammen von kleinen Wasserhunden des Mittelmeerraums ab und werden seit Jahrhunderten in Südeuropa als Begleiter gehalten.",
    healthConsiderations: h(
      "Zähne, Haut und Kniescheiben sind die üblichen Stellen, auf die man bei einer kleinen, hellfelligen Rasse schaut: Zahnpflege ist Routine, und Hautallergien sieht man häufig. Eine kurze, regelmäßige Pflegeroutine ist wichtig. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du hättest Mühe, mit dem Bürsten und einer professionellen Schur alle sechs bis acht Wochen Schritt zu halten",
      "Dein Hund wäre an den meisten Tagen einen langen Arbeitstag allein",
      "Du wünschst dir einen Hund, der gern sich selbst überlassen bleibt",
    ],
    keyTradeoffs: [
      "Fröhlich, freundlich und kaum haarend, mit einem Fell, das nie aufhört, Aufmerksamkeit zu brauchen",
      "Am glücklichsten, wo du bist, und am unglücklichsten, wenn du gehst",
    ],
  },
  maltese: {
    originalPurpose:
      "Der Malteser ist einer der ältesten Zwerg-Begleithunde Europas, seit Jahrhunderten als Schoßhund gehalten und geschätzt für sein langes weißes Fell und seine Hingabe an seinen Menschen.",
    healthConsiderations: h(
      "Zähne, Kniescheiben und Tränenspuren sieht man bei kleinen weißen Hunden häufig, und das feine Fell verfilzt schnell. Ein winziger Hund ermüdet und friert auch schneller, als du denkst. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Tägliches Bürsten passt nicht in deine Routine",
      "Du wünschst dir einen Hund, der still bleibt, wenn es klingelt",
      "Dein Hund wäre lange Zeit allein",
    ],
    keyTradeoffs: [
      "Winzig, sanft und sehr treu, mit einem Bellen, das größer ist als er selbst",
      "Ein Fell, das mühelos aussieht und täglichen Aufwand braucht",
    ],
  },
  havanese: {
    originalPurpose:
      "Der Havaneser ist der Nationalhund Kubas, Nachfahre kleiner Bichon-Typen, die auf die Insel kamen und zu Begleitern in wohlhabenden Häusern wurden.",
    healthConsiderations: h(
      "Kniescheiben, Augen und Hüften sind die üblichen Fragen bei einer kleinen, langlebigen Rasse, und das seidige Fell verfilzt ohne regelmäßiges Bürsten. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Dein Hund wäre die meiste Zeit eines Arbeitstags allein",
      "Du hast keine Zeit für regelmäßiges Bürsten",
      "Du wünschst dir einen Hund, der im Hintergrund zufrieden ist, während du deinen Tag lebst",
    ],
    keyTradeoffs: [
      "Gesellig, lernt schnell und ist fröhliche Gesellschaft – und er will wirklich den ganzen Tag deine Gesellschaft",
      "Leicht an der Leine und leicht zu tragen, mit einem Fell, das eine echte Routine braucht",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "Das Italienische Windspiel ist ein Miniatur-Windhund, seit Jahrhunderten als Begleiter gehalten und besonders beliebt an den Höfen der italienischen Renaissance.",
    healthConsiderations: h(
      "Die Beine sind sehr fein, frag deshalb deine Tierarztpraxis, wie Sprünge und wildes Spiel sicher bleiben, und denk an Treppen und Sofas. Die Zähne brauchen regelmäßige Pflege, und das dünne Fell bedeutet richtige Winterausrüstung. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du hast kleine Kinder, die den Hund gern hochheben oder wild mit ihm toben würden",
      "Du wünschst dir einen Hund, der einen kalten, nassen Spaziergang gelassen nimmt",
      "Dein Hund wäre lange Tage allein",
    ],
    keyTradeoffs: [
      "Klein, leise und lieb anhänglich, und zerbrechlicher, als er aussieht",
      "Liebt den Schoß und eine Decke, und eine Jagd über ein Feld genauso sehr",
    ],
  },
  pug: {
    originalPurpose:
      "Möpse stammen aus China, wo kleine kurzköpfige Hunde als Begleiter von Kaisern gehalten wurden; später kamen sie mit niederländischen Händlern nach Europa und wurden Schoßhunde in vielen Königshäusern.",
    healthConsiderations: h(
      "Kurzköpfige Hunde haben häufig Atemprobleme und leiden bei Wärme – Hitzerisiko gehört zu den Tierschutzthemen, die die British Veterinary Association anspricht – und Augen, Hautfalten und Gewicht brauchen regelmäßige Aufmerksamkeit. Wenn du dich trotzdem für die Rasse entscheidest, wähle einen Welpen mit offenen Nasenlöchern und längerem Fang, leg Geld für eine Versicherung zurück und lies das Rassenprofil und frag eine Tierärztin oder einen Tierarzt.",
    ),
    poorMatchFor: [
      "Deine Sommer sind heiß, und es gibt keinen kühlen Raum für den Hund",
      "Eine überraschende Tierarztrechnung von mehreren tausend Euro würde dich stark belasten",
      "Du wünschst dir einen Hund, der mit dir läuft oder wandert",
    ],
    keyTradeoffs: [
      "Lustig, anhänglich und mit kurzen Runden zufrieden, und oft mit echten Atem- und Hitzesorgen",
      "Das plattgedrückte Gesicht, das alle Herzen gewinnt, steckt auch hinter den meisten Gesundheitssorgen",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih Tzus wurden als Begleiter für den chinesischen Kaiserhof gezüchtet, mit tibetischen Wurzeln, und der Name bedeutet »Löwenhund«. Sie sind seit sehr langer Zeit Schoßhunde.",
    healthConsiderations: h(
      "Als kurzköpfige Rasse braucht sie Aufmerksamkeit bei Atmung und Wärme – Hitzerisiko gehört zu den Tierschutzthemen, die die British Veterinary Association anspricht – und die großen Augen, die Ohren und die Haut unter dem Fell müssen regelmäßig kontrolliert werden. Das lange Fell verfilzt schnell, weshalb viele eine kurze Schur wählen. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Regelmäßige Pflege oder eine kurze Schur alle paar Wochen passt nicht in deine Routine",
      "Du wohnst dort, wo es heiß ist und keine kühle Ecke gibt",
      "Du wünschst dir einen Hund, der schnell und einfach stubenrein wird",
    ],
    keyTradeoffs: [
      "Ein fröhlicher, menschenliebender Schoßhund, dessen Fell und Gesicht beide tägliche Pflege verlangen",
      "Ein sturer Zug im flauschigen Fell: geduldiges, leckerlibasiertes Training funktioniert am besten",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Golden Retriever wurden im 19. Jahrhundert in den schottischen Highlands entwickelt, um geschossene Vögel aus unwegsamem Gelände und kaltem Wasser zu apportieren, und das weiche Maul und der Wille zu gefallen stammen von dieser Arbeit.",
    healthConsiderations: h(
      "Hüften, Ellbogen, Augen und Herz sind die üblichen Fragen, und Krebs sieht man bei der Rasse häufig – ein Grund, warum es sich lohnt, auf gute Züchter zu warten. Fell und Ohren brauchen regelmäßige Pflege, und das Gewicht spielt eine Rolle. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du wünschst dir einen Hund, der sauber bleibt und wenig haart",
      "Dein Hund wäre an den meisten Tagen einen ganzen Arbeitstag allein zu Hause",
      "Du möchtest einen Wachhund",
    ],
    keyTradeoffs: [
      "Freundlich zu fast allen und gefallen wollend, was sie zu wunderbaren Familienhunden und schlechten Wächtern macht",
      "Leicht zu trainieren und immer scharf darauf, etwas im Maul zu tragen, weshalb diese Neigung sanft gelenkt werden muss",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "Der Boston Terrier entstand Ende des 19. Jahrhunderts in Boston aus Kreuzungen von Englischen Bulldoggen und Terriern und wurde eine der ersten in Amerika gezüchteten Begleithunderassen.",
    healthConsiderations: h(
      "Es ist eine kurznasige Rasse, deshalb brauchen Atmung, Hitze und Augen Aufmerksamkeit – Hitzerisiko gehört zu den Tierschutzthemen, die die British Veterinary Association anspricht – und viele Würfe brauchen Hilfe bei der Geburt. Auch nach Kniescheiben und Hautallergien lohnt sich zu fragen. Wähle wenn möglich einen Welpen mit offenen Nasenlöchern und längerem Fang, und lies das Rassenprofil und frag eine Tierärztin oder einen Tierarzt.",
    ),
    poorMatchFor: [
      "Es wird zu Hause im Sommer sehr heiß, und du kannst den Hund nicht kühl halten",
      "Du möchtest dir lieber kein Schlafzimmer mit Schnarchen teilen",
      "Du suchst einen Begleiter für Läufe oder Wanderungen bei Hitze",
    ],
    keyTradeoffs: [
      "Lebhaft, freundlich und ordentlich, mit einer kurzen Nase, die begrenzt, wie viel Hitze und Bewegung er verträgt",
      "Verspielt und clownesk, und nicht ganz so robust, wie das quirlige Wesen vermuten lässt",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillons sind Zwergspaniel vom europäischen Festland, benannt nach den schmetterlingsförmigen Ohren, und sie tauchen auf vielen alten Gemälden als Begleiter adliger Familien auf.",
    healthConsiderations: h(
      "Es ist eine kleine, oft langlebige Rasse, und Kniescheiben, Zähne und Augen sind die üblichen Fragen. Der leichte Körperbau bedeutet, dass Sprünge von Möbeln im Blick behalten werden sollten. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du wünschst dir einen Hund, der an Tür oder Fenster still bleibt",
      "Dein Hund wäre lange Tage allein",
      "Du möchtest lieber nicht regelmäßig trainieren, um einen wachen Kopf zu beschäftigen",
    ],
    keyTradeoffs: [
      "Aufgeweckt, gut trainierbar und lebhaft für seine Größe, und schnell dabei, bei jedem Geräusch zu bellen",
      "Klein genug zum Tragen, klug genug, sich zu langweilen, wenn du ihm nichts zu tun gibst",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "Der Lhasa Apso kommt aus Tibet, wo kleine Hunde als Wächter in Häusern und Klöstern dienten – den größten Teil des Tages leise und schnell dabei, Alarm zu schlagen.",
    healthConsiderations: h(
      "Augen, Haut sowie die Ohren und Pfoten unter dem langen Fell brauchen regelmäßige Kontrolle, und das Fell verfilzt ohne Bürsten schnell, weshalb viele eine kurze Schur wählen. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Bellen bei jedem Klopfen und Geräusch würde dich oder die Nachbarn in den Wahnsinn treiben",
      "Du würdest mit dem Bürsten nicht Schritt halten",
      "Du wünschst dir einen Hund, der Fremde liebt",
    ],
    keyTradeoffs: [
      "Ein würdevoller, ergebener kleiner Wächter mit Meinungen über Besuch",
      "Eigenständig und manchmal stur: Belohnung und Geduld schlagen Wiederholung",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "Der Zwergschnauzer wurde Ende des 19. Jahrhunderts in Deutschland aus kleineren Schnauzern als Hofhund und Rattenfänger gezüchtet, was das wache, muntere Wesen, das erst einmal bellt erklärt.",
    healthConsiderations: h(
      "Augen und Harnsteine werden bei der Rasse häufig besprochen, und fettige Leckerlis können die Bauchspeicheldrüse belasten, deshalb sind eine schlichte Ernährung und ein stabiles Gewicht wichtig. Das drahtige Fell braucht regelmäßige Pflege. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du wünschst dir einen ruhigen Hund, der das Kommen und Gehen der Nachbarn unbeachtet lässt",
      "Regelmäßige Pflege und Trimmen passen nicht in deine Routine",
      "Du möchtest dich lieber nicht mit dem Bellen eines kleinen Hundes befassen",
    ],
    keyTradeoffs: [
      "Robust, klug und kaum haarend, mit einem Bellen, das vor der Türklingel kommt",
      "Lernt hervorragend und ist im Herzen ein Terrier: nicht um eine Meinung verlegen",
    ],
  },
  labradoodle: {
    originalPurpose:
      "Der Labradoodle ist eine Kreuzung aus Labrador und Pudel, erstmals Ende der 1980er-Jahre in Australien gezüchtet, um das Wesen eines Blindenführhundes mit einem weniger haarenden Fell zu verbinden. Es ist eine Kreuzung und keine anerkannte Rasse, und die Würfe sind unterschiedlich.",
    healthConsiderations: h(
      "Ein Mix ist nicht automatisch gesünder: Ein Labradoodle kann von beiden Seiten erben, deshalb lohnt es sich, nach Hüften, Ellbogen, Augen, Ohren und Haut zu fragen. Das Fell ist sehr unterschiedlich, und viele brauchen regelmäßiges Bürsten und Scheren. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen beide Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du brauchst ein garantiert wenig haarendes oder allergikerfreundliches Fell",
      "Dir würde es schwerfallen, ein lockiges Fell regelmäßig zu pflegen",
      "Du wünschst dir einen Hund, der sich aus einer Rassebeschreibung gut vorhersagen lässt",
    ],
    keyTradeoffs: [
      "Freundlich, aufgeweckt und oft leicht zu leben, und jeder Wurf ist ein bisschen anders",
      "Federt wie ein Labrador und denkt wie ein Pudel: Energie, die einen täglichen Ausgleich braucht",
    ],
  },
  cavapoo: {
    originalPurpose:
      "Der Cavapoo ist eine Kreuzung aus Cavalier King Charles Spaniel und Pudel und seit Anfang der 2000er-Jahre als kleiner, kuscheliger Begleiter beliebt. Es ist eine Kreuzung und keine anerkannte Rasse, und die Würfe sind unterschiedlich.",
    healthConsiderations: h(
      "Ein Cavapoo kann von beiden Seiten erben, deshalb frag, welche Gesundheitsuntersuchungen beide Elterntiere hatten – Herz, Augen, Kniescheiben und Fell sind alle eine Frage wert. Das Fell verfilzt ohne regelmäßiges Bürsten. Lies das Rassenprofil und frag eine Tierärztin oder einen Tierarzt.",
    ),
    poorMatchFor: [
      "Dein Hund wäre einen ganzen Arbeitstag allein",
      "Du wünschst dir einen Hund, dessen Felltyp und Größe du vorhersagen kannst",
      "Du würdest gern auf regelmäßige Pflege verzichten",
    ],
    keyTradeoffs: [
      "Anhänglich und gesellig, und oft sehr auf Gesellschaft aus – manchmal zu sehr, um allein zu bleiben",
      "Liebenswert und klug, mit einem Fell, das eine echte Routine braucht",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshire Terrier wurden im 19. Jahrhundert von Fabrikarbeitern in Yorkshire und Lancashire entwickelt, um Ratten zu fangen. Von dort ist es ein weiter Weg zum seidenfelligen Schoßhund, aber der Terrier steckt noch drin.",
    healthConsiderations: h(
      "Kniescheiben, Zähne und eine halsbandempfindliche Luftröhre sind die üblichen Fragen bei kleinen Hunden, weshalb viele ein Geschirr benutzen. Das feine Fell braucht regelmäßiges Bürsten oder Scheren. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du wünschst dir einen Hund, der andere Hunde in Ruhe lässt, egal wie groß sie sind",
      "Du möchtest lieber nicht regelmäßig bürsten oder scheren",
      "Du wünschst dir einen ruhigen Hund, den es nicht zum Bellen reizt",
    ],
    keyTradeoffs: [
      "Ein kleiner Hund mit Großhund-Attitüde: mutig, aufgeweckt und selbstbewusst",
      "Seidig, kaum haarend und ein Terrier in Vollzeit",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Huskys wurden vom Volk der Tschuktschen im Nordosten Sibiriens als Schlittenhunde gezüchtet, gebaut, um leichte Lasten über weite Strecken in bitterer Kälte zu ziehen, und sie lieben es noch immer zu laufen.",
    healthConsiderations: h(
      "Es ist eine recht robuste Rasse; Augen und Hüften sind die üblichen Fragen, und das dichte Fell macht Hitze bei warmem Wetter zu einem echten Thema. Sie haaren außerdem zweimal im Jahr stark. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du wünschst dir einen Hund, der beim Freilauf jedes Mal zurückkommt",
      "Dein Zuhause ist heiß, oder deine Tage lassen wenig Zeit zum Laufen",
      "Du wünschst dir einen ruhigen Hund, der sich leicht in einer Wohnung halten lässt",
    ],
    keyTradeoffs: [
      "Freundlich, auffallend und voller Ausdauer, und ein echter Ausbruchskünstler, der heult statt zu bellen",
      "Liebt es, mit dir zu laufen, und braucht viel davon, egal bei welchem Wetter",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke Welsh Corgis stammen aus Pembrokeshire in Wales, wo sie Rinder hüteten, indem sie in die Fersen zwickten und den Tritten auswichen, und dieser tiefe, flinke, bestimmende Zug ist nicht verschwunden.",
    healthConsiderations: h(
      "Der lange Rücken und die kurzen Beine bedeuten, dass Gewicht und Springen Aufmerksamkeit verdienen, und Hüften und Augen sind die üblichen Fragen. Sie haaren viel, das ganze Jahr. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Treppen, Springen und Gewichtszunahme passen schlecht zu einem langen Rücken",
      "Du wünschst dir einen Hund, der Knöchel und Kinder in Ruhe lässt",
      "Du möchtest keine Hundehaare auf allem",
    ],
    keyTradeoffs: [
      "Klug, fröhlich und zäher, als er aussieht, und ein Hütehund, der versuchen kann, dich und die Kinder zu hüten",
      "Liebt Futter und Spiele, und zusätzliche Kilos belasten den langen Rücken",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "Der Shiba Inu ist eine kleine japanische Rasse vom Spitztyp, ursprünglich zur Jagd auf Vögel und Kleinwild in den Bergen eingesetzt, und er hat noch immer eine stolze, eigenständige, katzenartige Art.",
    healthConsiderations: h(
      "Allergien, Augen, Kniescheiben und Hüften sind die üblichen Fragen bei der Rasse, und sie haaren zweimal im Jahr stark. Frag die Züchterin oder den Züchter, welche Gesundheitsuntersuchungen die Elterntiere hatten, und lies das Rassenprofil.",
    ),
    poorMatchFor: [
      "Du wünschst dir einen Hund, der auf Ruf kommt und frei laufen kann",
      "Du wünschst dir einen Hund, der es liebt, von allen angefasst zu werden",
      "Du möchtest lieber keine Zeit für geduldiges, belohnungsbasiertes Training aufwenden",
    ],
    keyTradeoffs: [
      "Sauber, würdevoll und leise anhänglich, mit einem eigenen Willen",
      "Eigenständig bis zur Sturheit: Training ist ein Gespräch, kein Befehl",
    ],
  },
};
