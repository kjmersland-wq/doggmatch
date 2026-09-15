import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Globale Richtlinien für Ernährung und Zahnpflege", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Anleitung zur häuslichen Zahnpflege", org: "American Veterinary Dental College" },
  rspca: { label: "Ratschläge zur täglichen Hundepflege", org: "RSPCA" },
  aaha: { label: "Richtlinien für Lebensphasen und Vorsorge", org: "American Animal Hospital Association" },
  bva: { label: "Anleitung für Besitzer zu Gesundheit und Wohlbefinden", org: "British Veterinary Association" },
} as const;

export const careTopicsDe: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "Ein gesundes Maul ist wichtig",
    promise: "Ein paar sanfte Minuten, ein paar Mal pro Woche, und das Maul Ihres Hundes bleibt deutlich angenehmer.",
    category: "dental",
    intro: [
      "Die meisten Hunde haben irgendwann Probleme mit den Zähnen, und es ist leicht, das zu übersehen, weil Hunde selten Aufhebens davon machen.",
      "Die gute Nachricht: Zähneputzen ist das Einzige, was Sie zu Hause tun können, und fast jeder Hund kann lernen, es zu genießen, wenn Sie es langsam angehen.",
    ],
    steps: [
      {
        title: "Lassen Sie ihn es zuerst ansehen",
        body: "Legen Sie die Zahnbürste auf den Boden und lassen Sie Ihren Hund daran schnuppern. Sonst passiert nichts. Dieser Teil ist wichtiger, als es klingt.",
        visual: "brush-1",
      },
      {
        title: "Lippen berühren, dann die Zähne",
        body: "Heben Sie eine Lippe kurz an, loben Sie ihn, lassen Sie los. Dann mit einem Finger entlang der Außenseite der Zähne. Halten Sie es kurz und fröhlich.",
        visual: "brush-1",
      },
      {
        title: "Hundezahnpasta hinzufügen",
        body: "Lassen Sie ihn ein wenig von Ihrem Finger lecken – die meisten sind mit Fleisch- oder Geflügelgeschmack und Hunde mögen sie generell. Verwenden Sie niemals menschliche Zahnpasta; sie ist nicht zum Schlucken gedacht.",
      },
      {
        title: "Ein paar Zähne putzen",
        body: "Kleine Kreise entlang der Außenflächen, wo sich am meisten Plaque bildet. Die großen Zähne hinten und die Eckzähne sind am wichtigsten. Die Innenseiten können warten – dort bildet sich weniger Belag und die meisten Hunde mögen es nicht.",
        visual: "brush-2",
      },
      {
        title: "Beenden Sie, bevor er genug hat",
        body: "Dreißig Sekunden sind am Anfang eine gute Sitzung. Hören Sie auf, solange Ihr Hund es noch gut findet, und steigern Sie sich von dort aus.",
      },
    ],
    routine: [
      { day: "Tag 1", body: "Lassen Sie Ihren Hund an der Zahnbürste schnuppern. Das ist die ganze Sitzung." },
      { day: "Tag 2", body: "Berühren Sie sanft seine Lippen für ein oder zwei Sekunden, dann ein Leckerli." },
      { day: "Tag 3", body: "Ein Geschmack von hundesicherer Zahnpasta von Ihrem Finger." },
      { day: "Tag 4", body: "Fahren Sie mit einem Finger oder einer Bürste über ein paar Vorderzähne." },
      { day: "Tag 5", body: "Putzen Sie kurz eine Seite des Mauls." },
      { day: "Tag 6", body: "Beide Seiten, immer noch kurz. Loben Sie ihn dabei." },
      { day: "Tag 7", body: "Eine normale kleine Sitzung. Dann machen Sie weiter, wenn möglich an den meisten Tagen." },
    ],
    sections: [
      {
        title: "Was wirklich hilft",
        body: "Zähneputzen ist das, was die stärksten Beweise dafür hat. Alles andere ist eine nützliche Ergänzung, kein Ersatz.",
        points: [
          "Eine weiche Bürste, ein Fingerling oder sogar Mullbinde – was auch immer Ihr Hund toleriert",
          "Nur Hundezahnpasta",
          "Täglich ist ideal, mehrmals pro Woche hilft trotzdem",
          "Kausnacks und Futtermittel mit einem zahnärztlichen Siegel können zusätzlich zum Putzen helfen",
        ],
      },
      {
        title: "Über Knochen und harte Kausnacks",
        body: "Hartes Kauen reinigt die Zähne nicht zuverlässig, und sehr harte Gegenstände sind eine häufige Ursache für Zahnfrakturen – Geweihe, Hufe, hartes Nylon, gekochte Knochen, Eiswürfel.",
        points: [
          "Eine grobe Regel: Wenn Sie es mit dem Fingernagel nicht eindrücken könnten, ist es wahrscheinlich zu hart",
          "Gekochte Knochen können splittern und sollten vermieden werden",
          "Beaufsichtigen Sie jeden Kausnack und nehmen Sie ihn weg, wenn er klein genug zum Verschlucken wird",
          "Ihr Tierarzt kann Ihnen sagen, welche Kausnacks lokal Probleme verursachen",
        ],
      },
      {
        title: "Professionelle Reinigung",
        body: "Manche Beläge können nur unter Narkose entfernt werden, mit Röntgenaufnahmen, um zu sehen, was unter dem Zahnfleischrand passiert. Das ist kein Versäumnis Ihrerseits – es ist Teil der normalen Pflege für viele Hunde.",
      },
    ],
    watchFor: [
      "Anhaltend schlechter Atem, nicht nur hundetypisch",
      "Rotes, geschwollenes oder blutendes Zahnfleisch",
      "Einseitiges Kauen oder Fallenlassen von Futter",
      "Ein gebrochener oder verfärbter Zahn",
      "Mehr Speichelfluss als üblich",
      "Pfötchen vor dem Maul reiben oder sich abwenden, wenn Sie das Gesicht berühren",
      "Schwellungen im Gesicht oder unter einem Auge",
    ],
    whenToAskVet:
      "Wenn Sie eines davon bemerken, lohnt es sich, einen Termin zu vereinbaren. Zahnschmerzen sind leicht zu übersehen, da die meisten Hunde dabei weiterfressen.",
    ageNotes: {
      puppy: "Welpen verlieren ihre Milchzähne ab etwa vier Monaten. Beginnen Sie jetzt mit dem Handling – ein Welpe, der Zahnbürsten für normal hält, ist ein Geschenk an Ihr zukünftiges Ich.",
      senior: "Ältere Mäuler müssen öfter kontrolliert werden, und Zahnschmerzen sind ein häufiger Grund, warum ein älterer Hund langsamer oder mürrischer erscheint.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Fell & Haut",
    promise: "Lernen Sie kennen, was für Ihren Hund normal ist, und Sie werden schnell bemerken, wenn etwas nicht stimmt.",
    category: "coat",
    intro: [
      "Bürsten dient nicht nur der Optik. So bemerken die meisten Leute zuerst einen Knoten, eine wunde Stelle, eine Zecke oder eine Verfilzung an einer ungünstigen Stelle.",
      "Wie oft hängt viel mehr vom Fell als vom Rassenamen auf dem Papier ab – und Mischlinge können überall dazwischen liegen.",
    ],
    sections: [
      {
        title: "Kurzes, glattes Fell",
        body: "Ein kurzes Bürsten einmal pro Woche mit einem Gummihandschuh oder einer Borstenbürste hält lose Haare zurück und fühlt sich für die meisten Hunde gut an.",
        points: ["Haart das ganze Jahr über, oft mehr als erwartet", "Nur baden, wenn tatsächlich schmutzig", "Die Haut ist leicht zu sehen – nutzen Sie das"],
      },
      {
        title: "Langes Fell",
        body: "Benötigt mehrmals pro Woche gründliches Bürsten, bis zur Haut, nicht nur an der Oberfläche.",
        points: ["Verfilzungen bilden sich hinter den Ohren, unter den Achseln und um den Kragen", "Ein Kamm sagt Ihnen die Wahrheit, die eine Bürste nicht verrät", "Scheren um Pfoten und Hinterteil hält die Dinge sauber"],
      },
      {
        title: "Gekraustes Fell",
        body: "Locken haaren nicht viel, was bedeutet, dass die losen Haare im Fell bleiben und sich leise verfilzen.",
        points: ["Jeden oder jeden zweiten Tag bürsten und kämmen", "Regelmäßige Fellpflege-Termine, normalerweise alle sechs bis acht Wochen", "Verfilzungen ziehen an der Haut und schmerzen – entfernen Sie sie frühzeitig"],
      },
      {
        title: "Doppeltes Fell",
        body: "Eine weiche Unterwolle unter einem gröberen Deckhaar. Es fällt zweimal im Jahr stark aus und Sie finden es überall.",
        points: ["Ein Unterwollharke ist im Frühling und Herbst Gold wert", "Scheren Sie ein doppeltes Fell nicht, es sei denn, ein Tierarzt rät dazu", "Viel Bürsten ist besser als häufiges Baden"],
      },
      {
        title: "Drahtiges Fell",
        body: "Hartes, wetterfestes Fell, das seine Textur durch Handstripping statt durch Scheren behält.",
        points: ["Bart und Beine durchkämmen", "Scheren macht das Fell mit der Zeit weicher", "Ein Hundefriseur, der den Felltyp kennt, ist es wert"],
      },
    ],
    steps: [
      {
        title: "Beginnen Sie mit Ihren Händen",
        body: "Fahren Sie mit den Händen über Ihren Hund, bevor die Bürste herauskommt. Sie tasten nach Knoten, Krusten, wunden Stellen und allem, was im Fell steckt.",
      },
      {
        title: "In Abschnitten bürsten",
        body: "Arbeiten Sie in kleinen Bereichen, bis zur Haut. Halten Sie das Haar oberhalb einer Verfilzung fest, damit Sie nicht an der Haut ziehen, während Sie arbeiten.",
      },
      {
        title: "Prüfen Sie die schwierigen Stellen",
        body: "Hinter den Ohren, Achseln, an der Rückseite der Beine, am Schwanz und unter dem Kragen. Verfilzungen beginnen fast immer dort, wo etwas reibt.",
      },
      {
        title: "Beenden Sie mit etwas Schönem",
        body: "Ein Leckerli, ein Kraulen, ein Spiel. Fellpflege sollte etwas sein, auf das sich Ihr Hund freut, nicht etwas, das er ertragen muss.",
      },
    ],
    watchFor: [
      "Kratzen, Lecken oder Kauen, das neu oder ständig ist",
      "Rote Haut, Flecken, Krusten oder eine heiße Stelle",
      "Haarausfall oder Ausfallen in Büscheln",
      "Ein Geruch, der vorher nicht da war",
      "Schuppenbildung oder fettige Haut",
      "Knoten oder ein Knoten, der sich verändert hat",
    ],
    whenToAskVet:
      "Juckreiz hat viele mögliche Ursachen – Parasiten, Allergien, Infektionen, manchmal etwas ganz anderes. Wenn er anhaltend ist, kann Ihr Tierarzt herausfinden, was es ist, anstatt dass Sie nur Shampoos ausprobieren.",
    ageNotes: {
      puppy: "Welpenfelle ändern sich, wenn sie wachsen. Bürsten dient jetzt hauptsächlich dazu, ihnen beizubringen, dass Berührung angenehm ist.",
      senior: "Ältere Hunde pflegen sich oft weniger und bekommen schuppigere oder knotigere Haut. Sanftes, häufiges Bürsten ist besser als lange Sitzungen.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Pfoten & Krallen",
    promise: "Dreißig Sekunden nach einem Spaziergang fangen die meisten kleinen Probleme auf, bevor sie schmerzhaft werden.",
    category: "paws",
    intro: [
      "Pfoten werden stark beansprucht und Hunde sind da stoisch. Ein kurzer Blick nach Spaziergängen ist eine der einfachsten Gewohnheiten, die man sich aneignen kann.",
      "Zu lange Krallen verändern, wie ein Hund steht, und können das Gehen unangenehm machen, daher lohnt es sich, sie im Auge zu behalten.",
    ],
    steps: [
      {
        title: "Halten Sie die Pfote sanft",
        body: "Stützen Sie sie von unten ab, anstatt sie zu umgreifen. Wenn Ihr Hund wegzieht, lassen Sie ihn – versuchen Sie es später mit einem Leckerli in der anderen Hand erneut.",
        visual: "paw-check",
      },
      {
        title: "Schauen Sie zwischen die Ballen",
        body: "Grassesamen, Kies, Streusalz und kleine Steine lieben es, sich dort zu verstecken. Im Winter die Pfoten nach dem Gehen auf gestreuten Wegen abspülen und trocknen.",
        visual: "paw-check",
      },
      {
        title: "Fühlen Sie die Ballen",
        body: "Sie sollten geschmeidig sein. Risse, Spalten, Rötungen oder eine Pfote, die wärmer als die anderen ist, verdienen eine genauere Untersuchung.",
      },
      {
        title: "Überprüfen Sie das Fell zwischen den Ballen",
        body: "Bei Hunden mit behaarten Pfoten verfilzt es und sammelt Dinge auf. Ein vorsichtiges Trimmen auf Höhe der Ballen hilft auch beim Halt.",
      },
      {
        title: "Schneiden Sie winzige Mengen ab",
        body: "Nehmen Sie nur die Spitze ab, dann hören Sie auf. Wenig und oft ist viel sicherer als eine große Sitzung, und belohnen Sie ruhig währenddessen.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Krallen, ohne Drama",
        body: "Wenn Sie auf hartem Boden ein Klicken hören, sind sie wahrscheinlich etwas zu lang. Die meisten Hunde brauchen alle drei bis sechs Wochen einen Schnitt.",
        points: [
          "Berühren Sie die Pfoten täglich, damit Krallenzangen keine Überraschung sind",
          "Schneiden Sie nur die allerletzte Spitze ab – das Leben sitzt weiter unten, als man denkt",
          "Dunkle Krallen: Schneiden Sie kleinere Scheiben ab und hören Sie auf, wenn die Schnittfläche kalkig aussieht",
          "Hören Sie auf, wenn Ihr Hund gestresst ist. Nichts davon ist einen Kampf wert",
          "Ein Hundefriseur oder eine Tierarzthelferin kann das machen, und das ist überhaupt keine Schande",
        ],
      },
      {
        title: "Gehwege und Wetter",
        body: "Halten Sie die Rückseite Ihrer Hand sieben Sekunden lang auf den Bürgersteig. Wenn Sie sie dort nicht halten können, ist es zu heiß für Pfoten – gehen Sie stattdessen früh oder spät.",
        points: ["Winter-Salz und Streugut reizen die Ballen – danach abspülen und trocknen", "Lange Spaziergänge auf rauem Untergrund können die Ballen wund scheuern", "Tiefschnee packt sich in pelzigen Pfoten zu Eisbällen"],
      },
    ],
    watchFor: [
      "Humpeln oder ständiges Lecken einer Pfote",
      "Ein rissiger, blutender oder geschwollener Ballen",
      "Eine Kralle, die eingerissen oder abgebrochen ist",
      "Rötung oder ein schlechter Geruch zwischen den Zehen",
      "Abneigung, auf einer Oberfläche zu laufen, auf der sie vorher in Ordnung waren",
    ],
    whenToAskVet:
      "Eine eingerissene Kralle, ein tiefer Schnitt oder anhaltendes Humpeln ist einen Anruf wert. Wenn Sie eine Kralle zu kurz schneiden und sie blutet, beruhigen sie sich normalerweise mit blutstillendem Pulver und sanftem Druck – rufen Sie Ihren Tierarzt an, wenn nicht.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Ohren",
    promise: "Ein Blick, ein Schnuppern. Das ist der Großteil der Ohrenpflege.",
    category: "health",
    intro: [
      "Gesunde Ohren sind innen blassrosa, ohne viel Geruch. Diese Basis zu kennen, ist der ganze Trick.",
      "Ohren brauchen keine Tiefenreinigung als Routine. Das Hineinstochern in ein gesundes Ohr verursacht eher die Probleme, die es verhindern soll.",
    ],
    sections: [
      {
        title: "Der wöchentliche Blick",
        body: "Heben Sie die Klappe an, schauen Sie hinein, schnuppern Sie. Ein paar Sekunden, während Sie sowieso zusammen sitzen.",
        points: ["Blassrosa, kein starker Geruch, kein Ausfluss", "Ein wenig Wachs ist normal", "Ohren nach dem Schwimmen oder Baden trocknen"],
      },
      {
        title: "Wenn Ihr Tierarzt Ihnen Reiniger gegeben hat",
        body: "Verwenden Sie sein Produkt und seine Anweisungen. Stecken Sie niemals Wattestäbchen in den Gehörgang – Sie werden Ablagerungen weiter hineindrücken.",
      },
      {
        title: "Ohren, die mehr Aufmerksamkeit brauchen",
        body: "Schlappohren, behaarte Gehörgänge und Hunde, die viel schwimmen, sind anfälliger für Probleme. Das hängt vom einzelnen Hund ab, nicht nur von der Rasse.",
      },
    ],
    watchFor: [
      "Ein hefiger oder säuerlicher Geruch",
      "Rötung oder Schwellung im Inneren der Ohrmuschel",
      "Brauner, gelber oder blutiger Ausfluss",
      "Kratzen am Ohr oder Reiben am Sofa",
      "Kopfschütteln oder -neigen",
      "Zusammenzucken, wenn Sie das Ohr berühren",
    ],
    whenToAskVet:
      "Ohrenentzündungen sind schmerzhaft und heilen selten von selbst ab. Wenn etwas komisch aussieht oder riecht, lassen Sie es untersuchen, anstatt Tropfen auszuprobieren, die Sie in einer Schublade haben.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Augen",
    promise: "Hell, klar und gleichmäßig. Das ist es, wonach Sie Ausschau halten sollten.",
    category: "health",
    intro: [
      "Ein kurzer Blick in die Augen Ihres Hundes, während Sie sich morgens begrüßen, reicht für die meisten Tage.",
      "Augen können schnell von leicht gereizt zu ernsthaft schmerzhaft werden, daher sind sie eines der Dinge, bei denen man etwas vorsichtig sein sollte.",
    ],
    sections: [
      {
        title: "Was normal aussieht",
        body: "Klar und hell, weiße, die nicht gerötet sind, Pupillen gleicher Größe, kein Blinzeln. Ein wenig klarer oder grauer Tränensekret in den Ecken ist normalerweise nichts.",
      },
      {
        title: "Tägliche Pflege",
        body: "Wischen Sie Krusten mit feuchter Watte und sauberem Wasser weg, ein Wisch pro Auge. Halten Sie langes Haar aus den Augen. Verwenden Sie keine menschlichen Augentropfen.",
      },
      {
        title: "Flachgesichtige Hunde",
        body: "Hervorstehende Augen sind stärker Stößen, Austrocknung und Geschwüren ausgesetzt. Wenn Ihr Hund eine kurze Schnauze hat, schauen Sie etwas öfter nach.",
      },
    ],
    watchFor: [
      "Blinzeln oder ein Auge geschlossen halten",
      "Rötung, die anhält",
      "Grüner oder gelber Ausfluss",
      "Trübung oder Farbveränderung",
      "Das Gesicht über den Boden reiben",
      "Jede plötzliche Veränderung oder gegen Dinge stoßen",
    ],
    whenToAskVet:
      "Ein schmerzhaftes oder plötzlich verändertes Auge erfordert einen Anruf am selben Tag. Sehprobleme haben bessere Ergebnisse, wenn sie frühzeitig erkannt werden.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Körperliche Verfassung",
    promise: "Die Zahl auf der Waage ist weniger wichtig als das Aussehen und Gefühl Ihres Hundes unter Ihren Händen.",
    category: "weight",
    intro: [
      "Zwei Hunde gleichen Gewichts können in völlig unterschiedlicher Form sein. Die Körperliche Verfassung ist, wie Tierärzte sie beurteilen, und Sie können sie in etwa einer Minute lernen.",
      "Dies ist ein Leitfaden, keine Diagnose. Rasse und Körperbau ändern, wie 'richtig' aussieht – ein Greyhound und ein Labrador in perfekter Verfassung sehen sich überhaupt nicht ähnlich.",
    ],
    steps: [
      {
        title: "Fühlen Sie die Rippen",
        body: "Fahren Sie mit den Fingerspitzen über die Seite Ihres Hundes. Sie sollten die Rippen leicht unter einer dünnen Schicht spüren, ähnlich wie die Knochen auf dem Handrücken.",
        visual: "body-condition",
      },
      {
        title: "Von oben betrachten",
        body: "Wenn Sie über Ihrem Hund stehen, suchen Sie nach einer leichten Verengung hinter den Rippen. Eine gerade oder hervorstehende Silhouette deutet auf etwas zu viel hin.",
        visual: "body-condition",
      },
      {
        title: "Von der Seite betrachten",
        body: "Der Bauch sollte sich zu den Hinterbeinen hin nach oben ziehen, anstatt auf gleicher Höhe mit der Brust zu verlaufen.",
      },
      {
        title: "Machen Sie es monatlich",
        body: "Veränderungen schleichen sich langsam ein. Wenn Sie dies jeden Monat am selben Tag tun, wird die Abweichung offensichtlich, solange sie noch klein ist.",
      },
    ],
    sections: [
      {
        title: "Etwas zu schwer",
        body: "Rippen schwer zu fühlen, Taille schwer zu sehen, Bauch flach verlaufend. Kleine Änderungen wirken: Futter abmessen, Leckerlis zählen, zehn Minuten mehr spazieren gehen.",
      },
      {
        title: "Ungefähr richtig",
        body: "Rippen leicht zu fühlen, sichtbare Taille, Bauch nach oben gezogen. Machen Sie weiter so.",
      },
      {
        title: "Etwas zu dünn",
        body: "Rippen, Wirbelsäule oder Hüften stehen hervor, wenig Bedeckung. Ein Tierarztbesuch ist ratsamer als nur mehr Futter – unerklärlicher Gewichtsverlust verdient eine Untersuchung.",
      },
    ],
    whenToAskVet:
      "Ihr Tierarzt kann Ihnen helfen, die Körperliche Verfassung richtig zu beurteilen und einen Plan besprechen, wenn Gewicht verloren werden muss. Plötzliche oder unerklärliche Gewichtsveränderungen verdienen immer ein Gespräch.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "Ein guter Tag für einen Hund",
    promise: "Ein Spaziergang, ein bisschen spielen, etwas zu essen, viel Schlaf und Zeit mit Ihnen zählt viel.",
    category: "wellbeing",
    intro: [
      "Ein gutes Hundeleben muss nicht kompliziert oder teuer sein. Das meiste davon ist Routine, Gesellschaft und ausreichend Ruhe.",
      "Wenn Sie nur eine Sache ändern, ist es meist der Schlaf. Viele 'Verhaltensprobleme' sind ein müder Hund, der nie die Chance bekommt, richtig abzuschalten.",
    ],
    sections: [
      {
        title: "Schlaf",
        body: "Hunde schlafen viel mehr, als die meisten Leute erwarten. Welpen brauchen oft 18 bis 20 Stunden am Tag, Erwachsene etwa 12 bis 14 Stunden, und ältere Hunde meist wieder mehr.",
        points: ["Ein ruhiger Ort abseits der Haustür und des Trubels im Haus", "Nickerchen am Tag sind normal, keine Faulheit", "Ständige Stimulation ist für einen Hund erschöpfend, nicht bereichernd"],
      },
      {
        title: "Schnüffeln und Denken",
        body: "Zehn Minuten richtiges Schnüffeln können einen Hund mehr beruhigen als eine Stunde Laufen. Lassen Sie Spaziergänge manchmal langsam sein.",
        points: ["Abendessen im Gras verstreuen", "Leckerlis in einem Raum verstecken und sie suchen lassen", "Ein Futterpuzzle oder ein zusammengerolltes Handtuch mit Trockenfutter", "Neue, ruhige Orte zum Erkunden"],
      },
      {
        title: "Gesellschaft",
        body: "Hunde sind sozial. Die meisten haben Schwierigkeiten mit langen Phasen allein, und allein sein ist eine Fähigkeit, die schrittweise gelehrt werden muss, anstatt angenommen zu werden.",
      },
      {
        title: "Vorhersehbare Tage",
        body: "Ungefähr regelmäßige Spaziergänge, Mahlzeiten und Schlafenszeiten machen das Leben leichter lesbar. Es muss nicht auf die Minute genau sein.",
      },
      {
        title: "Ruhezeit",
        body: "Zeit, in der nichts von ihnen verlangt wird – kein Training, keine Besucher, keine Spiele. Jeder Hund braucht etwas davon am Tag.",
      },
    ],
    ageNotes: {
      puppy: "Welpen werden schnell übermüdet und das sieht nach Unfug aus – Beißen, Rennen, Ignorieren von allem. Mehr Schlaf löst das meistens.",
      adolescent: "Teenager-Hunde brauchen echte Auslastung: Schnüffeln, Kauen, Training, Spielen. Langeweile zeigt sich stattdessen im Kauen an Ihren Sachen.",
      senior: "Kürzere, häufigere Spaziergänge, weichere Betten und sanfte Denkspiele passen älteren Hunden besser als lange Ausflüge.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Wissen, was für Ihren Hund normal ist",
    promise: "Sie werden eine Veränderung bemerken, lange bevor jemand anderes es tut. Das ist wirklich wertvoll.",
    category: "health",
    intro: [
      "Sie müssen Ihren Hund nicht untersuchen. Sie brauchen nur ein grobes Gefühl für sein Normalverhalten – wie viel er frisst, trinkt, sich bewegt und schläft.",
      "Wenn sich etwas ändert, hilft es Ihrem Tierarzt enorm, sagen zu können: 'Das hat am Dienstag angefangen'.",
    ],
    sections: [
      {
        title: "Appetit",
        body: "Die meisten Hunde sind ziemlich vorhersehbare Esser. Eine Mahlzeit auslassen passiert; wenn er einen Tag oder länger nichts frisst, ist das bemerkenswert.",
      },
      {
        title: "Trinken",
        body: "Eine deutliche Zunahme oder Abnahme des Trinkens ist eines der nützlichsten Frühwarnzeichen. Wenn Sie unsicher sind, messen Sie, was in den Napf kommt, für ein paar Tage.",
      },
      {
        title: "Energie",
        body: "Weniger aktiv zu werden ist nicht nur altersbedingt. Abneigung auf Treppen, Steifheit nach dem Ausruhen oder weniger Interesse an Spaziergängen ist oft Unbehagen.",
      },
      {
        title: "Toilettengewohnheiten",
        body: "Notieren Sie Änderungen in der Häufigkeit, beim Pressen oder bei weichem Stuhl, der länger als einen Tag anhält. Kein angenehmes Thema, aber ein nützliches.",
      },
      {
        title: "Gewicht und Fell",
        body: "Monatliches Gewicht, monatliche manuelle Untersuchung. Die Fellqualität ändert sich oft, bevor etwas anderes passiert.",
      },
      {
        title: "Verhalten",
        body: "Verstecken, Anhänglichkeit, Reizbarkeit oder Unruhe in der Nacht können Anzeichen von Schmerz sein und nicht nur von schlechter Laune.",
      },
    ],
    whenToAskVet:
      "Eine kleine Veränderung an einem Tag ist normalerweise nichts. Eine Veränderung, die länger als ein oder zwei Tage anhält, oder mehrere Veränderungen gleichzeitig, ist einen Anruf wert.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Etwas scheint anders zu sein?",
    promise: "Ein ruhiger Ort, um herauszufinden, ob dies ein Abwarten oder ein Anruf beim Tierarzt ist.",
    category: "health",
    intro: [
      "Dies sind allgemeine Informationen, keine Diagnose. Manche Veränderungen sind harmlos und manche nicht, und der Unterschied ist oft von außen nicht erkennbar.",
      "Wenn Sie sich Sorgen machen oder die Veränderung plötzlich oder stark aufgetreten ist, kontaktieren Sie Ihren Tierarzt. Sorge allein ist ein guter Grund zum Anrufen.",
    ],
    sections: [
      {
        title: "Schlechter Appetit",
        body: "Eine ausgelassene Mahlzeit bei einem ansonsten munteren Hund ist häufig. Rufen Sie Ihren Tierarzt an, wenn es länger als etwa 24 Stunden dauert, wenn ein Welpe Mahlzeiten auslässt, oder wenn Erbrechen, Lethargie oder ein geschwollener Bauch dabei sind.",
      },
      {
        title: "Trinkt viel mehr oder weniger",
        body: "Eine deutliche Veränderung, die länger als ein paar Tage anhält, ist es wert, untersucht zu werden, anstatt sie zu beobachten. Notieren Sie ungefähr, wie viel.",
      },
      {
        title: "Erbrechen",
        body: "Einmaliges Erbrechen, dann wieder normal, legt sich oft. Rufen Sie an, wenn es wiederholt auftritt, wenn er kein Wasser bei sich behalten kann, wenn Blut dabei ist, wenn er versucht zu erbrechen, ohne etwas hervorzubringen, oder wenn er etwas verschluckt haben könnte.",
      },
      {
        title: "Durchfall",
        body: "Mild und kurzzeitig ist häufig. Rufen Sie an, wenn es länger als ein oder zwei Tage dauert, Blut enthält oder mit Erbrechen, Schmerzen oder einem flachen, müden Hund einhergeht – und früher für Welpen und ältere Hunde, die schnell dehydrieren.",
      },
      {
        title: "Husten",
        body: "Ein gelegentlicher Husten nach dem Ziehen an der Leine ist anders als ein Husten, der anhält. Anhaltender Husten, Husten in der Nacht oder jede Atembeschwerde erfordert einen Tierarzt.",
      },
      {
        title: "Juckreiz",
        body: "Ständiges Kratzen, Lecken oder Kauen ist unangenehm und hat normalerweise eine Ursache, die es wert ist, gefunden zu werden – Parasiten, Hautinfektion oder Allergie. Es löst sich selten nur mit Shampoo.",
      },
      {
        title: "Humpeln",
        body: "Mildes Humpeln, das sich innerhalb eines Tages mit Ruhe legt, kann beobachtet werden. Nicht-gewichtstragende Lahmheit, offensichtliche Schmerzen, Schwellungen oder ein Humpeln, das anhält, sollten untersucht werden.",
      },
      {
        title: "Ungewöhnliche Müdigkeit",
        body: "Ein ruhiger Tag passiert. Ein Hund, der nicht aufstehen will, unsicher ist oder viel flacher als üblich ist, sollte umgehend untersucht werden.",
      },
    ],
    whenToAskVet:
      "Ihr Tierarzt hört lieber früh als spät von Ihnen. Was sich geändert hat, wann es angefangen hat und was anders ist als normal, zu beschreiben, ist genau das, was er braucht.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "Wenn es nicht warten kann",
    promise: "Die kurze Liste von Dingen, die bedeuten, dass Sie sofort einen Tierarzt anrufen müssen, zu jeder Stunde.",
    category: "health",
    intro: [
      "Bewahren Sie die Nummer Ihres Tierarztes und Ihrer nächstgelegenen Notfallklinik an einem Ort auf, den Sie ohne Nachdenken finden können. Speichern Sie sie jetzt in Ihrem Handy.",
      "In diesen Situationen rufen Sie zuerst an und fahren Sie hin. Warten Sie nicht ab, wie sich die Dinge entwickeln, und versuchen Sie keine Hausmittel.",
    ],
    sections: [
      {
        title: "Rufen Sie sofort einen Tierarzt an",
        body: "Jeder dieser Punkte erfordert dringende professionelle Hilfe, Tag und Nacht.",
        points: [
          "Atemnot, Würgen oder blaue oder sehr blasse Zahnfleischfarbe",
          "Kollaps, Bewusstlosigkeit oder plötzliche Schwäche",
          "Blutungen, die nicht aufhören",
          "Verdacht auf Vergiftung oder Verschlucken von etwas, das er nicht hätte tun sollen",
          "Ein Anfall oder wiederholte Anfälle",
          "Von einem Auto angefahren werden, ein Sturz oder eine schwere Verletzung",
          "Pressen beim Urinieren und nichts produzieren",
          "Geschwollener, harter Bauch mit Würgen und keinem Erbrechen",
          "Anzeichen von Hitzschlag: starkes Hecheln, Not, Kollaps bei Hitze",
          "Plötzliche starke Schmerzen oder ein Hund, der sich überhaupt nicht beruhigen kann",
        ],
      },
      {
        title: "Verdacht auf Vergiftung",
        body: "Rufen Sie sofort Ihren Tierarzt oder eine Tiergift-Hotline an und sagen Sie ihnen, was, wie viel und wann. Nehmen Sie die Verpackung mit. Versuchen Sie nicht, Ihren Hund zum Erbrechen zu bringen, es sei denn, ein Tierarzt sagt Ihnen das – bei manchen Substanzen verursacht das mehr Schaden.",
      },
      {
        title: "Auf dem Weg",
        body: "Halten Sie Ihren Hund ruhig, warm und still. Fahren Sie vorsichtig. Rufen Sie im Voraus an, damit die Klinik auf Sie vorbereitet ist.",
      },
    ],
    whenToAskVet:
      "Wenn Sie das hier lesen und sich fragen, ob es zählt, rufen Sie an. Niemand in einer Tierarztpraxis stört sich an einem Anruf, der sich als nichts herausstellt.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
