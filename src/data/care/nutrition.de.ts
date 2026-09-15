import type { FoodItem } from "./types";

const poisonLine = {
  label: "Giftige Lebensmittel für Hunde",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Eine ruhige, durchsuchbare Antwort auf die Frage "Kann mein Hund das essen?".
 * `avoid` = bekanntermaßen schädlich. `care` = in manchen Situationen in Ordnung, mit Einschränkungen.
 * Nichts hier ersetzt einen Anruf beim Tierarzt, wenn ein Hund bereits etwas gefressen hat.
 */
export const foodItemsDe: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Schokolade", safety: "avoid", body: "Enthält Theobromin, das Hunde nicht so gut abbauen können wie wir. Dunkle Schokolade und Kuvertüre sind am schlimmsten; Milchschokolade zählt aber auch.", warning: "Rufen Sie sofort Ihren Tierarzt an und nennen Sie die Art, die Menge und ungefähr, wann es passiert ist. Warten Sie nicht auf Symptome.", source: poisonLine },
  { id: "xylitol", name: "Xylit / Birkenzucker", safety: "avoid", body: "Ein Süßstoff in zuckerfreien Kaugummis, Bonbons, einigen Erdnussbuttern, Backwaren und einigen Medikamenten. Sehr kleine Mengen können einen gefährlichen Blutzuckerabfall verursachen.", warning: "Das ist ein Notfall. Rufen Sie sofort einen Tierarzt an.", source: poisonLine },
  { id: "grapes", name: "Trauben, Rosinen, Sultaninen, Korinthen", safety: "avoid", body: "Kann bei manchen Hunden zu Nierenversagen führen, und niemand kann vorhersagen, welche Hunde oder welche Menge betroffen sein wird. Das schließt auch Hackbraten, Früchtekuchen und Müsli ein.", warning: "Jede Menge erfordert einen Tierarztbesuch am selben Tag.", source: poisonLine },
  { id: "onion", name: "Zwiebeln, Knoblauch, Lauch, Schnittlauch", safety: "avoid", body: "Die gesamte Lauchfamilie schädigt rote Blutkörperchen, roh, gekocht, getrocknet oder pulverisiert. Achten Sie auf Soßen, Brühen, Currys und Reste.", warning: "Symptome können Tage dauern, bis sie auftreten. Rufen Sie Ihren Tierarzt an.", source: poisonLine },
  { id: "macadamia", name: "Macadamianüsse", safety: "avoid", body: "Verursachen Schwäche, Wackeln, Zittern und Erbrechen, oft innerhalb von zwölf Stunden.", warning: "Rufen Sie Ihren Tierarzt an.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Hunde sind weitaus empfindlicher als Menschen. Beinhaltet auch ungebackenen Teig und einige Desserts.", warning: "Rufen Sie dringend einen Tierarzt an.", source: poisonLine },
  { id: "caffeine", name: "Kaffee, Tee, Energydrinks", safety: "avoid", body: "Koffein verursacht Herzrasen, Unruhe und Zittern. Kaffeepulver und Teebeutel in einem Mülleimer sind häufige Ursachen.", warning: "Rufen Sie Ihren Tierarzt an.", source: poisonLine },
  { id: "dough", name: "Roher Brotteig", safety: "avoid", body: "Geht im warmen Magen auf und die Hefe produziert Alkohol. Schmerzhaft und wirklich gefährlich.", warning: "Das ist ein Notfall.", source: poisonLine },
  { id: "cooked-bones", name: "Gekochte Knochen", safety: "avoid", body: "Zersplittern in scharfe Stücke, die den Darm schädigen oder blockieren können. Das schließt Hühner-, Kotelett- und Rippchenknochen ein.", warning: "Wenn Ihr Hund einen gefressen hat, rufen Sie Ihren Tierarzt um Rat an." },
  { id: "corn-cob", name: "Maiskolben", safety: "avoid", body: "Die Körner sind in Ordnung; der Kolben ist eine der häufigsten Ursachen für eine chirurgisch zu behandelnde Blockade bei Hunden.", warning: "Rufen Sie Ihren Tierarzt am selben Tag an." },
  { id: "mouldy", name: "Schimmeliges Essen & Kompost", safety: "avoid", body: "Schimmel kann Toxine produzieren, die schwere Krampfanfälle und Anfälle verursachen. Halten Sie Kompostbehälter richtig geschlossen.", warning: "Rufen Sie dringend einen Tierarzt an.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Pfirsich-, Pflaumen- & Kirschkerne", safety: "avoid", body: "Das Fruchtfleisch ist in kleinen Mengen in Ordnung, die Kerne nicht – Erstickungs- und Blockaderisiko, und sie enthalten Cyanidverbindungen." },
  { id: "mushrooms-wild", name: "Wildpilze", safety: "avoid", body: "Einige sind tödlich und es ist nicht realistisch, sie auf einem Feld auseinanderzuhalten. Gekaufte Pilze in einer Mahlzeit sind eine andere Sache.", warning: "Wenn Ihr Hund einen Wildpilz frisst, rufen Sie einen Tierarzt an und fotografieren Sie ihn, wenn Sie können." },
  { id: "salt", name: "Sehr salziges Essen", safety: "avoid", body: "Große Mengen Salz verursachen ernsthafte Probleme. Salzdekorationsgebäck und das Verschlucken von viel Meerwasser sind die üblichen Ursachen." },
  { id: "rhubarb", name: "Rhabarberblätter", safety: "avoid", body: "Die Blätter sind giftig. Gut zu wissen, wenn Sie ihn im Garten anbauen." },
  { id: "nutmeg", name: "Muskatnuss", safety: "avoid", body: "In größeren Mengen verursacht es Desorientierung und Zittern. Eine Prise auf etwas ist normalerweise keine Krise, aber bieten Sie es nicht an." },
  { id: "hops", name: "Hopfen", safety: "avoid", body: "Relevant, wenn jemand im Haus Bier braut. Verursacht einen gefährlichen Anstieg der Körpertemperatur." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Erdnussbutter", safety: "care", body: "In Ordnung als gelegentlicher Leckerbissen – aber nur, wenn sie kein Xylit oder Birkenzucker enthält. Lesen Sie jedes Mal das Etikett, auch bei einer Marke, die Sie kennen.", serving: "Ein Teelöffel, der in eine Leckmatte gestrichen wird", warning: "Nur xylitfrei." },
  { id: "cheese", name: "Käse", safety: "care", body: "Ausgezeichnete Trainingsbelohnung, aber reichhaltig und salzig. Viele Hunde vertragen Milchprodukte nicht gut.", serving: "Erbsengroße Stücke, keine Scheibe" },
  { id: "yoghurt", name: "Naturjoghurt", safety: "care", body: "Kleine Mengen Naturjoghurt ohne Zuckerzusatz sind für manche Hunde gut. Niemals etwas Süßes – auf Xylit prüfen.", serving: "Ein Löffel" },
  { id: "milk", name: "Milch", safety: "care", body: "Viele erwachsene Hunde sind laktoseintolerant und es äußert sich meist in Magenverstimmung. Wasser ist eine bessere Idee." },
  { id: "bread", name: "Brot", safety: "care", body: "Einfaches gebackenes Brot ist nicht schädlich, aber es sind leere Kalorien. Vermeiden Sie alles mit Rosinen, Zwiebeln, Knoblauch oder Samen." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Einfaches, luftgepopptes und ungesalzenes Popcorn ist als gelegentlicher Snack in Ordnung. Butter, Salz und süße Überzüge sind es nicht. Ungepoppte Körner können Zähne brechen." },
  { id: "ham", name: "Schinken, Speck & verarbeitetes Fleisch", safety: "care", body: "Sehr salzig und fettig. Fettreiche Lebensmittel sind ein bekannter Auslöser für Pankreatitis, die schmerzhaft und ernst ist." },
  { id: "avocado", name: "Avocado", safety: "care", body: "Das Fruchtfleisch ist für Hunde weitaus weniger problematisch als für Vögel, aber es ist fettreich und der Kern ist ein echtes Blockaderisiko. Einfacher zu überspringen." },
  { id: "tomato", name: "Tomate", safety: "care", body: "Reifes Tomatenfruchtfleisch ist in kleinen Mengen in Ordnung. Grüne Tomaten, Blätter und Stiele nicht." },
  { id: "nuts", name: "Nüsse (allgemein)", safety: "care", body: "Fettreich, leicht zu verschlucken, oft gesalzen. Macadamianüsse sind giftig. Als Gewohnheit am besten vermeiden." },
  { id: "raw-potato", name: "Rohe Kartoffel", safety: "care", body: "Grüne oder keimende Kartoffeln sind giftig. Einfache gekochte Kartoffeln ohne Butter oder Salz sind gelegentlich in Ordnung." },
  { id: "sweetcorn", name: "Süßmaiskerne", safety: "care", body: "Körner vom Kolben sind in kleinen Mengen harmlos. Der Kolben ist die Gefahr." },
  { id: "citrus", name: "Orangen & Zitrusfrüchte", safety: "care", body: "Ein kleines Stück geschälte Orange schadet nicht, obwohl die meisten Hunde nicht begeistert sind. Schale, Mark und Kerne weglassen." },
  { id: "ice-cream", name: "Eiscreme", safety: "care", body: "Zuckerhaltig, oft milchlastig und manchmal mit Xylit oder Schokolade. Gefrorener Naturjoghurt oder eine gefrorene Karotte ist ein besseres Leckerli an einem heißen Tag." },
  { id: "raw-fish", name: "Roher Fisch", safety: "care", body: "Birgt ein Parasiten- und Bakterienrisiko, und manche rohen Fische beeinträchtigen die Vitaminaufnahme. Gekocht und grätenfrei ist die sicherere Variante." },
  { id: "liver", name: "Leber", safety: "care", body: "Ein hervorragendes Trainingsleckerli, aber sehr reich an Vitamin A. Halten Sie es bei kleinen Mengen statt einer regelmäßigen Mahlzeit." },
  { id: "eggs-raw", name: "Rohes Ei", safety: "care", body: "Salmonellenrisiko, und rohe Eiweiße können ein B-Vitamin beeinträchtigen. Gekochtes, einfaches Ei ist die einfache Alternative." },
  { id: "honey", name: "Honig", safety: "care", body: "Nicht giftig, nur Zucker. Eine winzige Menge ab und zu ist für gesunde erwachsene Hunde in Ordnung; für Diabetiker und Welpen weglassen." },
  { id: "coconut", name: "Kokosnuss", safety: "care", body: "Kleine Mengen Fruchtfleisch oder Öl sind nicht schädlich, aber es ist fettreich und kann den Stuhl lockern." },
  { id: "spinach", name: "Spinat & Grünkohl", safety: "care", body: "In kleinen Mengen als Teil einer Mahlzeit in Ordnung. Große Mengen sind für Hunde mit Nierenproblemen nicht ideal." },
  { id: "table-scraps", name: "Essensreste vom Tisch", safety: "care", body: "Das Problem ist selten ein Bissen – es sind die Soßen, Zwiebeln, Salz und Fett und die Kalorien, die niemand zählt. Halten Sie Leckerlis bei etwa einem Zehntel der Tagesration." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Karotte", safety: "safe", body: "Knackig, günstig und kalorienarm. Eine kalte Karotte ist etwas Gutes für einen zahnenden Welpen zum Kauen.", serving: "Rohe Stifte oder gekochte Stücke" },
  { id: "apple", name: "Apfel", safety: "safe", body: "Süß, knackig und beliebt. Entfernen Sie den Kern und die Kerne.", serving: "Ein paar Scheiben" },
  { id: "banana", name: "Banane", safety: "safe", body: "In kleinen Mengen in Ordnung. Zuckerhaltig, also nicht jeden Tag.", serving: "Ein paar Scheiben Banane" },
  { id: "blueberries", name: "Blaubeeren", safety: "safe", body: "Klein, leicht zu verteilen und die meisten Hunde lieben sie.", serving: "Eine kleine Handvoll" },
  { id: "watermelon", name: "Wassermelone", safety: "safe", body: "Erfrischend an einem heißen Tag. Entfernen Sie die Kerne und die Schale.", serving: "Ein paar Würfel oder gefroren" },
  { id: "strawberries", name: "Erdbeeren", safety: "safe", body: "Frisch in kleinen Mengen in Ordnung. Nichts aus der Dose oder in Sirup.", serving: "Eine oder zwei" },
  { id: "pumpkin", name: "Kürbis (natur)", safety: "safe", body: "Gekochter Kürbis oder Kürbis aus der Dose (keine Kuchenfüllung) ist magenschonend und wird oft zur Festigung von losem Stuhl empfohlen.", serving: "Ein oder zwei Löffel" },
  { id: "green-beans", name: "Grüne Bohnen", safety: "safe", body: "Sättigend und kalorienarm – wirklich nützlich, wenn Ihr Hund auf Diät ist.", serving: "Eine kleine Handvoll, pur" },
  { id: "cucumber", name: "Gurke", safety: "safe", body: "Hauptsächlich Wasser. Ein guter Snack für heißes Wetter.", serving: "Ein paar Scheiben" },
  { id: "chicken", name: "Gekochtes Hähnchen (natur)", safety: "safe", body: "Ohne Haut, ohne Knochen und ungewürzt. Eines der besten Trainingsleckerlis überhaupt.", serving: "Kleine Stücke" },
  { id: "turkey", name: "Gekochter Truthahn (natur)", safety: "safe", body: "Gleiche Regeln wie bei Hähnchen: keine Haut, keine Knochen, keine Gewürze, keine Soße.", serving: "Kleine Stücke" },
  { id: "fish-cooked", name: "Gekochter Weißfisch & Lachs", safety: "safe", body: "Gut gekocht und gründlich entgrätet. Eine gute Quelle für Protein und Omega-3-Fettsäuren.", serving: "Eine kleine Portion" },
  { id: "rice", name: "Gekochter Reis (natur)", safety: "safe", body: "Mild und leicht verdaulich – oft Teil dessen, was ein Tierarzt nach Magenverstimmung empfiehlt.", serving: "In eine Mahlzeit gemischt" },
  { id: "egg", name: "Gekochtes Ei", safety: "safe", body: "Rührei ohne Butter oder Salz, oder hartgekocht.", serving: "Teil eines Eis, je nach Größe Ihres Hundes" },
  { id: "sweet-potato", name: "Gekochte Süßkartoffel", safety: "safe", body: "Pur und gekocht. Die meisten Hunde sind sehr begeistert.", serving: "Eine kleine Menge, ohne Butter" },
  { id: "peas", name: "Erbsen", safety: "safe", body: "Frisch oder gefroren, pur. Dosen-Erbsen meiden – zu viel Salz.", serving: "Ein Löffel" },
  { id: "broccoli", name: "Brokkoli", safety: "safe", body: "In kleinen Mengen in Ordnung. Viel davon kann Blähungen und Magenreizungen verursachen.", serving: "Ein paar kleine Röschen" },
  { id: "courgette", name: "Zucchini", safety: "safe", body: "Kalorienarm und magenschonend, roh oder pur gekocht.", serving: "Ein paar Stücke" },
  { id: "celery", name: "Sellerie", safety: "safe", body: "Knackig und sehr kalorienarm. Klein schneiden.", serving: "Kleine gehackte Stücke" },
  { id: "pear", name: "Birne", safety: "safe", body: "Ohne Kern und Kerne in Ordnung.", serving: "Ein paar Stücke" },
  { id: "melon", name: "Cantaloupe-Melone", safety: "safe", body: "Süß und hydrierend. Schale und Kerne entfernen.", serving: "Ein paar Würfel" },
  { id: "mango", name: "Mango", safety: "safe", body: "Geschält, Stein entfernt. Zuckerhaltig, also klein halten.", serving: "Ein paar Stücke" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Nur frisch, Haut und Kern entfernt. Nicht die zuckerhaltige aus der Dose.", serving: "Ein kleines Stück" },
  { id: "oats", name: "Haferflocken (natur, gekocht)", safety: "safe", body: "Einfacher Porridge mit Wasser zubereitet. Kein Zucker, keine Süßstoffe, keine Milch.", serving: "Ein Löffel" },
  { id: "sardines", name: "Sardinen in Wasser", safety: "safe", body: "In Wasser, nicht in Öl oder Salzlake aus der Dose. Eine gute Quelle für Omega-3-Fettsäuren.", serving: "Teil einer Dose, gelegentlich" },
  { id: "cauliflower", name: "Blumenkohl", safety: "safe", body: "Pur und in kleinen Mengen. Kann Blähungen verursachen, wie bei uns.", serving: "Ein kleines Röschen" },
  { id: "lettuce", name: "Salat", safety: "safe", body: "Harmlos und hauptsächlich Wasser. Nicht aufregend, aber in Ordnung.", serving: "Ein wenig, gehackt" },
  { id: "beetroot", name: "Gekochte Rote Bete", safety: "safe", body: "Pur gekochte Rote Bete ist in kleinen Mengen in Ordnung – nicht die eingelegte Art.", serving: "Ein kleines Stück" },
];

export const nutritionSectionsDe = [
  {
    title: "Lesen Sie das Etikett, nicht die Verpackung",
    body: "Die Vorderseite der Tüte ist Marketing. Wichtig ist eine Angabe, dass das Futter vollständig und ausgewogen für die Lebensphase Ihres Hundes ist, und eine Fütterungsanleitung, der Sie tatsächlich folgen können.",
    points: [
      "\"Vollständig\" bedeutet, dass es allein gefüttert werden kann. \"Ergänzend\" bedeutet, dass es das nicht kann",
      "Prüfen Sie, ob es für die richtige Lebensphase ist – Welpe, Erwachsener oder alle Lebensphasen",
      "Fütterungsanleitungen sind ein Ausgangspunkt, keine Regel. Passen Sie sie an Ihren Hund an",
      "Marken mit Tierärzten und Ernährungswissenschaftlern im Team, die Fütterungsversuche durchführen, sind eine sicherere Wahl",
    ],
  },
  {
    title: "Wie viel, wirklich",
    body: "Jede Anleitung auf jeder Tüte ist ein Durchschnitt. Zwei Hunde gleichen Gewichts können merklich unterschiedliche Mengen benötigen, und die ehrliche Antwort ist: füttern, beobachten und alle paar Wochen anpassen.",
    points: [
      "Wiegen Sie das Futter, anstatt einen Löffel zu verwenden – Löffel können variieren",
      "Zählen Sie Leckerlis und Kauartikel. Sie summieren sich schneller, als man denkt",
      "Überprüfen Sie den Körperzustand monatlich und passen Sie ihn jeweils um etwa 10 % an",
      "Kastrierte Hunde benötigen oft etwas weniger als früher",
    ],
  },
  {
    title: "Wie oft",
    body: "Welpen brauchen häufige kleine Mahlzeiten; Erwachsene kommen gut mit zwei aus. Die Aufteilung der Tagesration auf zwei Mahlzeiten passt besser zu den meisten Tagesabläufen von Hunden als eine große Schüssel.",
    points: [
      "Unter 4 Monaten: drei oder vier Mahlzeiten am Tag",
      "4 bis 6 Monate: drei Mahlzeiten",
      "6 Monate und älter: zwei Mahlzeiten",
      "Hunde mit tiefem Brustkorb: Vermeiden Sie harte Bewegung direkt um die Fütterungszeiten",
    ],
  },
  {
    title: "Futterwechsel",
    body: "Plötzliche Umstellungen stören die Mägen der meisten Hunde. Planen Sie etwa eine Woche dafür ein.",
    points: [
      "Tage 1–2: ein Viertel neu, drei Viertel alt",
      "Tage 3–4: halb und halb",
      "Tage 5–6: drei Viertel neu",
      "Tag 7: komplett neues Futter",
      "Wenn der Stuhl weich wird, verlangsamen Sie den Wechsel, anstatt fortzufahren",
    ],
  },
  {
    title: "Wasser",
    body: "Frisches Wasser, immer verfügbar, in einer sauberen Schüssel. Es klingt offensichtlich, und es ist immer noch das, was an heißen Tagen und auf langen Reisen am häufigsten vergessen wird.",
  },
  {
    title: "Roh und hausgemacht",
    body: "Beides kann gut gemacht werden, und beides kann leicht falsch gemacht werden. Hausgemachte Diäten sind insbesondere sehr oft unausgewogen, es sei denn, ein tierärztlicher Ernährungsberater hat sie formuliert.",
    points: [
      "Rohfütterung birgt ein Bakterienrisiko für Ihren Hund und Ihren Haushalt",
      "Hausgemachtes Futter benötigt ein richtiges Rezept und Ergänzungen, um vollständig zu sein",
      "Sprechen Sie mit Ihrem Tierarzt, bevor Sie wechseln, insbesondere bei Welpen und älteren Hunden",
      "Dies ist eine echte Entscheidung, die Sie mit einem Fachmann treffen sollten, nicht aus einem Forum",
    ],
  },
] as const;
