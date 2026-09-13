import type { FoodItem } from "./types";

const poisonLine = {
  label: "Hinweise zu giftigen Lebensmitteln für Hunde",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Eine ruhige, durchsuchbare Antwort auf "Darf mein Hund das essen?".
 * `avoid` = bekanntermaßen schädlich. `care` = in manchen Situationen unbedenklich, mit Einschränkungen.
 * Nichts hier ersetzt einen Anruf beim Tierarzt, wenn der Hund bereits etwas gefressen hat.
 */
export const foodItemsDe: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Schokolade", safety: "avoid", body: "Enthält Theobromin, das Hunde nicht so abbauen können wie wir. Zartbitter- und Backschokolade sind am schlimmsten; Milchschokolade zählt trotzdem.", warning: "Rufen Sie sofort Ihren Tierarzt an und nennen Sie Art, Menge und ungefähren Zeitpunkt. Warten Sie nicht auf Symptome.", source: poisonLine },
  { id: "xylitol", name: "Xylit / Birkenzucker", safety: "avoid", body: "Ein Süßstoff in zuckerfreiem Kaugummi, Minzbonbons, manchen Erdnussbuttersorten, Backwaren und einigen Medikamenten. Schon sehr kleine Mengen können einen gefährlichen Blutzuckerabfall auslösen.", warning: "Das ist ein Notfall. Rufen Sie sofort einen Tierarzt an.", source: poisonLine },
  { id: "grapes", name: "Weintrauben, Rosinen, Sultaninen, Korinthen", safety: "avoid", body: "Können bei manchen Hunden Nierenversagen auslösen, und niemand kann vorhersagen, bei welchen Hunden oder welcher Menge. Das gilt auch für Christstollen, Früchtekuchen und Müsli.", warning: "Jede Menge ist ein Grund für einen Tierarztbesuch noch am selben Tag.", source: poisonLine },
  { id: "onion", name: "Zwiebel, Knoblauch, Lauch, Schnittlauch", safety: "avoid", body: "Die gesamte Lauchgewächs-Familie schädigt rote Blutkörperchen, roh, gekocht, getrocknet oder als Pulver. Vorsicht bei Soße, Brühe, Curry und Essensresten.", warning: "Anzeichen können erst nach Tagen auftreten. Rufen Sie Ihren Tierarzt an.", source: poisonLine },
  { id: "macadamia", name: "Macadamianüsse", safety: "avoid", body: "Verursachen Schwäche, Wackeligkeit, Zittern und Erbrechen, oft innerhalb von zwölf Stunden.", warning: "Rufen Sie Ihren Tierarzt an.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Hunde sind weit empfindlicher als Menschen. Das gilt auch für ungebackenen Teig und manche Desserts.", warning: "Rufen Sie dringend einen Tierarzt an.", source: poisonLine },
  { id: "caffeine", name: "Kaffee, Tee, Energydrinks", safety: "avoid", body: "Koffein verursacht Herzrasen, Unruhe und Zittern. Kaffeesatz und Teebeutel im Mülleimer sind ein häufiger Übeltäter.", warning: "Rufen Sie Ihren Tierarzt an.", source: poisonLine },
  { id: "dough", name: "Roher Brotteig", safety: "avoid", body: "Geht im warmen Magen auf, und die Hefe produziert Alkohol. Schmerzhaft und wirklich gefährlich.", warning: "Das ist ein Notfall.", source: poisonLine },
  { id: "cooked-bones", name: "Gekochte Knochen", safety: "avoid", body: "Splittern in scharfe Stücke, die den Darm verletzen oder blockieren können. Das gilt auch für Hühnchen-, Kotelett- und Rippenknochen.", warning: "Wenn Ihr Hund einen gefressen hat, rufen Sie Ihren Tierarzt um Rat an." },
  { id: "corn-cob", name: "Maiskolben", safety: "avoid", body: "Die Körner sind unbedenklich; der Kolben ist eine der häufigsten Ursachen für einen operationspflichtigen Darmverschluss bei Hunden.", warning: "Rufen Sie noch am selben Tag Ihren Tierarzt an." },
  { id: "mouldy", name: "Schimmeliges Essen & Kompost", safety: "avoid", body: "Schimmel kann Toxine bilden, die schweres Zittern und Krampfanfälle auslösen. Halten Sie Komposttonnen richtig verschlossen.", warning: "Rufen Sie dringend einen Tierarzt an.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Pfirsich-, Pflaumen- und Kirschkerne", safety: "avoid", body: "Das Fruchtfleisch ist in kleinen Mengen unbedenklich, die Kerne nicht — Erstickungs- und Blockadegefahr, und sie enthalten Cyanidverbindungen." },
  { id: "mushrooms-wild", name: "Wilde Pilze", safety: "avoid", body: "Manche sind tödlich, und sie im Feld zu unterscheiden ist unrealistisch. Gekaufte Pilze in einer Mahlzeit sind etwas anderes.", warning: "Wenn Ihr Hund einen wilden Pilz frisst, rufen Sie einen Tierarzt an und fotografieren Sie ihn wenn möglich." },
  { id: "salt", name: "Sehr salziges Essen", safety: "avoid", body: "Große Mengen Salz verursachen ernsthafte Probleme. Salzteig-Dekorationen und das Schlucken viel Meerwassers sind die üblichen Ursachen." },
  { id: "rhubarb", name: "Rhabarberblätter", safety: "avoid", body: "Die Blätter sind giftig. Wichtig zu wissen, wenn Sie Rhabarber im Garten anbauen." },
  { id: "nutmeg", name: "Muskatnuss", safety: "avoid", body: "In größerer Menge verursacht sie Orientierungslosigkeit und Zittern. Eine Prise auf etwas ist normalerweise kein Notfall, aber bieten Sie es nicht an." },
  { id: "hops", name: "Hopfen", safety: "avoid", body: "Relevant, wenn im Haus Bier gebraut wird. Verursacht einen gefährlichen Anstieg der Körpertemperatur." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Erdnussbutter", safety: "care", body: "Als gelegentliches Leckerli in Ordnung — aber nur, wenn sie kein Xylit oder Birkenzucker enthält. Lesen Sie jedes Mal das Etikett, auch bei einer bekannten Marke.", serving: "Ein Teelöffel, verteilt auf einer Leckmatte", warning: "Nur ohne Xylit." },
  { id: "cheese", name: "Käse", safety: "care", body: "Hervorragende Trainingswährung, aber fett- und salzreich. Viele Hunde vertragen Milchprodukte nicht gut.", serving: "Erbsengroße Stücke, keine Scheibe" },
  { id: "yoghurt", name: "Naturjoghurt", safety: "care", body: "Kleine Mengen ungesüßten Naturjoghurts eignen sich für manche Hunde. Nie etwas Gesüßtes — auf Xylit prüfen.", serving: "Ein Löffel" },
  { id: "milk", name: "Milch", safety: "care", body: "Viele erwachsene Hunde sind laktoseintolerant, was sich meist als Magenverstimmung zeigt. Wasser ist die bessere Wahl." },
  { id: "bread", name: "Brot", safety: "care", body: "Einfaches, gebackenes Brot ist nicht schädlich, aber leere Kalorien. Meiden Sie alles mit Rosinen, Zwiebel, Knoblauch oder Kernen." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Einfach, luftgepoppt und ungesalzen ist als gelegentlicher Snack in Ordnung. Butter, Salz und süße Überzüge nicht. Ungepoppte Körner können Zähne beschädigen." },
  { id: "ham", name: "Schinken, Speck & verarbeitetes Fleisch", safety: "care", body: "Sehr salzig und fettig. Fettreiches Essen ist ein bekannter Auslöser für Pankreatitis, die schmerzhaft und ernst ist." },
  { id: "avocado", name: "Avocado", safety: "care", body: "Das Fruchtfleisch ist für Hunde deutlich weniger problematisch als für Vögel, aber es ist fettreich, und der Kern birgt echte Blockadegefahr. Am einfachsten weglassen." },
  { id: "tomato", name: "Tomate", safety: "care", body: "Reifes Tomatenfleisch ist in kleinen Mengen unbedenklich. Grüne Tomaten, Blätter und Stiele nicht." },
  { id: "nuts", name: "Nüsse (allgemein)", safety: "care", body: "Fettreich, leicht zu verschlucken, oft gesalzen. Macadamianüsse sind giftig. Am besten grundsätzlich vermeiden." },
  { id: "raw-potato", name: "Rohe Kartoffel", safety: "care", body: "Grüne oder keimende Kartoffeln sind giftig. Einfache gekochte Kartoffel ohne Butter oder Salz ist gelegentlich in Ordnung." },
  { id: "sweetcorn", name: "Zuckermaiskörner", safety: "care", body: "Körner ohne Kolben sind in kleinen Mengen unbedenklich. Der Kolben ist die Gefahr." },
  { id: "citrus", name: "Orangen & Zitrusfrüchte", safety: "care", body: "Ein kleines Stück geschälte Orange schadet nicht, auch wenn die meisten Hunde nicht begeistert sind. Schale, weiße Haut und Kerne weglassen." },
  { id: "ice-cream", name: "Eiscreme", safety: "care", body: "Zuckerreich, oft milchlastig, und manchmal mit Xylit oder Schokolade. Gefrorener Naturjoghurt oder eine gefrorene Karotte sind an einem heißen Tag die bessere Wahl." },
  { id: "raw-fish", name: "Roher Fisch", safety: "care", body: "Birgt ein Parasiten- und Bakterienrisiko, und manch roher Fisch beeinträchtigt die Vitaminaufnahme. Gekocht und ohne Gräten ist die sicherere Variante." },
  { id: "liver", name: "Leber", safety: "care", body: "Ein hervorragendes Trainingsleckerli, aber sehr reich an Vitamin A. In kleinen Mengen halten, nicht als regelmäßige Mahlzeit." },
  { id: "eggs-raw", name: "Rohes Ei", safety: "care", body: "Salmonellenrisiko, und rohes Eiweiß kann ein B-Vitamin beeinträchtigen. Gekochtes, einfaches Ei ist die einfache Alternative." },
  { id: "honey", name: "Honig", safety: "care", body: "Nicht giftig, einfach Zucker. Eine winzige Menge ab und zu ist für gesunde erwachsene Hunde in Ordnung; bei diabetischen Hunden und Welpen weglassen." },
  { id: "coconut", name: "Kokosnuss", safety: "care", body: "Kleine Mengen Fruchtfleisch oder Öl sind nicht schädlich, aber fettreich und können den Stuhl weicher machen." },
  { id: "spinach", name: "Spinat & Grünkohl", safety: "care", body: "In kleinen Mengen als Teil einer Mahlzeit unbedenklich. Große Mengen sind für Hunde mit Nierenproblemen nicht ideal." },
  { id: "table-scraps", name: "Tischreste", safety: "care", body: "Das Problem ist selten ein einzelner Bissen — es sind die Soßen, Zwiebeln, Salz und Fett, und die Kalorien, die niemand zählt. Halten Sie Leckerlis bei etwa einem Zehntel der Tagesration." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Karotte", safety: "safe", body: "Knackig, günstig und kalorienarm. Eine kalte Karotte ist gut zum Kauen für einen zahnenden Welpen.", serving: "Rohe Stangen oder gekochte Stücke" },
  { id: "apple", name: "Apfel", safety: "safe", body: "Süß, knackig und beliebt. Kerngehäuse und Kerne entfernen.", serving: "Ein paar Scheiben" },
  { id: "banana", name: "Banane", safety: "safe", body: "In kleinen Mengen in Ordnung. Zuckerreich, also nicht jeden Tag.", serving: "Ein paar Scheiben Banane" },
  { id: "blueberries", name: "Heidelbeeren", safety: "safe", body: "Klein, leicht zu verteilen, und die meisten Hunde lieben sie.", serving: "Eine kleine Handvoll" },
  { id: "watermelon", name: "Wassermelone", safety: "safe", body: "Erfrischend an einem heißen Tag. Kerne und Schale entfernen.", serving: "Ein paar Würfel, oder gefroren" },
  { id: "strawberries", name: "Erdbeeren", safety: "safe", body: "Frisch, in kleinen Mengen, in Ordnung. Nichts aus der Dose oder in Sirup.", serving: "Ein oder zwei Stück" },
  { id: "pumpkin", name: "Purer Kürbis", safety: "safe", body: "Einfacher gekochter oder Dosen-Kürbis (keine Kuchenfüllung) ist magenschonend und wird oft empfohlen, um weichen Stuhl zu festigen.", serving: "Ein oder zwei Löffel" },
  { id: "green-beans", name: "Grüne Bohnen", safety: "safe", body: "Sättigend und kalorienarm — wirklich nützlich, wenn Ihr Hund eine Diät macht.", serving: "Eine kleine Handvoll, pur" },
  { id: "cucumber", name: "Gurke", safety: "safe", body: "Größtenteils Wasser. Ein guter Snack bei heißem Wetter.", serving: "Ein paar Scheiben" },
  { id: "chicken", name: "Einfach gekochtes Hühnchen", safety: "safe", body: "Ohne Haut, ohne Knochen, ungewürzt. Eines der besten Trainingsleckerlis überhaupt.", serving: "Kleine Stücke" },
  { id: "turkey", name: "Einfach gekochter Truthahn", safety: "safe", body: "Gleiche Regeln wie bei Hühnchen: keine Haut, keine Knochen, keine Gewürze, keine Soße.", serving: "Kleine Stücke" },
  { id: "fish-cooked", name: "Gekochter Weißfisch & Lachs", safety: "safe", body: "Gut durchgekocht und gründlich entgrätet. Eine gute Quelle für Eiweiß und Omega-3.", serving: "Eine kleine Portion" },
  { id: "rice", name: "Einfach gekochter Reis", safety: "safe", body: "Mild und leicht verdaulich — wird oft von Tierärzten nach einer Magenverstimmung empfohlen.", serving: "Untergemischt in eine Mahlzeit" },
  { id: "egg", name: "Gekochtes Ei", safety: "safe", body: "Ohne Butter oder Salz gebraten, oder hartgekocht.", serving: "Teil eines Eis, je nach Größe Ihres Hundes" },
  { id: "sweet-potato", name: "Gekochte Süßkartoffel", safety: "safe", body: "Pur und gekocht. Die meisten Hunde sind sehr begeistert.", serving: "Eine kleine Menge, ohne Butter" },
  { id: "peas", name: "Erbsen", safety: "safe", body: "Frisch oder tiefgekühlt, pur. Erbsen aus der Dose meiden — zu viel Salz.", serving: "Ein Löffel" },
  { id: "broccoli", name: "Brokkoli", safety: "safe", body: "In kleinen Mengen in Ordnung. Größere Mengen können Blähungen und Magenreizungen verursachen.", serving: "Ein paar kleine Röschen" },
  { id: "courgette", name: "Zucchini", safety: "safe", body: "Kalorienarm und magenschonend, roh oder pur gekocht.", serving: "Ein paar Stücke" },
  { id: "celery", name: "Staudensellerie", safety: "safe", body: "Knackig und sehr kalorienarm. Klein schneiden.", serving: "Kleine gehackte Stücke" },
  { id: "pear", name: "Birne", safety: "safe", body: "In Ordnung ohne Kerngehäuse und Kerne.", serving: "Ein paar Stücke" },
  { id: "melon", name: "Honigmelone / Cantaloupe", safety: "safe", body: "Süß und wasserreich. Schale und Kerne entfernen.", serving: "Ein paar Würfel" },
  { id: "mango", name: "Mango", safety: "safe", body: "Geschält, Kern entfernt. Zuckerreich, also klein halten.", serving: "Ein paar Stücke" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Nur frisch, Schale und Strunk entfernt. Nicht die gezuckerte Variante aus der Dose.", serving: "Ein kleines Stück" },
  { id: "oats", name: "Einfach gekochte Haferflocken", safety: "safe", body: "Einfacher, mit Wasser zubereiteter Haferbrei. Kein Zucker, keine Süßstoffe, keine Milch.", serving: "Ein Löffel" },
  { id: "sardines", name: "Sardinen in Wasser", safety: "safe", body: "In Wasser eingelegt, nicht in Öl oder Lake. Eine gute Omega-3-Quelle.", serving: "Ein Teil einer Dose, gelegentlich" },
  { id: "cauliflower", name: "Blumenkohl", safety: "safe", body: "Pur und in kleinen Mengen. Kann Blähungen verursachen, wie bei uns auch.", serving: "Ein kleines Röschen" },
  { id: "lettuce", name: "Kopfsalat", safety: "safe", body: "Unbedenklich und größtenteils Wasser. Nicht aufregend, aber in Ordnung.", serving: "Ein wenig, gehackt" },
  { id: "beetroot", name: "Gekochte Rote Bete", safety: "safe", body: "Pur gekochte Rote Bete ist in kleinen Mengen in Ordnung — nicht die eingelegte Variante.", serving: "Ein kleines Stück" },
];

export const nutritionSectionsDe = [
  {
    title: "Lesen Sie das Etikett, nicht die Verpackung",
    body: "Die Vorderseite des Sacks ist Marketing. Wichtig ist ein Hinweis, dass das Futter für die jeweilige Lebensphase Ihres Hundes vollständig und ausgewogen ist, sowie ein Fütterungsplan, den Sie tatsächlich befolgen können.",
    points: [
      "\"Alleinfuttermittel\" bedeutet, es kann allein gefüttert werden. \"Ergänzungsfuttermittel\" bedeutet, es kann das nicht",
      "Prüfen Sie, ob es für die richtige Lebensphase ist — Welpe, erwachsen oder alle Lebensphasen",
      "Fütterungsanleitungen sind ein Ausgangspunkt, keine Regel. Passen Sie sie an Ihren Hund an",
      "Marken mit Tierärzten und Ernährungsberatern im Team, die Fütterungsstudien durchführen, sind die sicherere Wahl",
    ],
  },
  {
    title: "Wie viel, wirklich",
    body: "Jede Angabe auf jedem Sack ist ein Durchschnitt. Zwei Hunde mit demselben Gewicht können spürbar unterschiedliche Mengen brauchen, und die ehrliche Antwort lautet: füttern, beobachten und alle paar Wochen anpassen.",
    points: [
      "Wiegen Sie das Futter, statt einen Messbecher zu benutzen — Messbecher werden ungenau",
      "Zählen Sie Leckerlis und Kauartikel mit. Sie summieren sich schneller, als man denkt",
      "Prüfen Sie monatlich die Körperkondition und passen Sie um etwa 10 % auf einmal an",
      "Kastrierte Hunde brauchen oft etwas weniger als zuvor",
    ],
  },
  {
    title: "Wie oft",
    body: "Welpen brauchen häufige kleine Mahlzeiten; erwachsene Hunde kommen gut mit zwei zurecht. Die Tagesration auf zwei Mahlzeiten aufzuteilen passt für die meisten Hunde besser als ein großer Napf.",
    points: [
      "Unter 4 Monaten: drei bis vier Mahlzeiten am Tag",
      "4 bis 6 Monate: drei Mahlzeiten",
      "Ab 6 Monaten: zwei Mahlzeiten",
      "Tiefbrüstige Hunde: keine anstrengende Bewegung direkt um die Fütterungszeiten",
    ],
  },
  {
    title: "Futter wechseln",
    body: "Plötzliche Wechsel verstimmen den Magen der meisten Hunde. Nehmen Sie sich dafür etwa eine Woche Zeit.",
    points: [
      "Tag 1–2: ein Viertel neu, drei Viertel alt",
      "Tag 3–4: halb und halb",
      "Tag 5–6: drei Viertel neu",
      "Tag 7: komplett neues Futter",
      "Wenn der Stuhl weich wird, langsamer vorgehen statt weiterzumachen",
    ],
  },
  {
    title: "Wasser",
    body: "Frisches Wasser, immer verfügbar, in einem sauberen Napf. Klingt selbstverständlich, und ist trotzdem das, was an heißen Tagen und langen Ausflügen am häufigsten vergessen wird.",
  },
  {
    title: "Roh- und selbstgekochte Fütterung",
    body: "Beides kann gut gemacht werden, und bei beidem kann leicht etwas schiefgehen. Besonders selbstgekochte Rationen sind sehr oft unausgewogen, wenn sie nicht von einem Tierernährungsberater zusammengestellt wurden.",
    points: [
      "Rohfütterung birgt ein bakterielles Risiko für Ihren Hund und Ihren Haushalt",
      "Selbstgekochtes braucht ein richtiges Rezept und Ergänzungsmittel, um vollständig zu sein",
      "Sprechen Sie vor der Umstellung mit Ihrem Tierarzt, besonders bei Welpen und älteren Hunden",
      "Das ist eine echte Entscheidung, die man mit einer Fachperson trifft, nicht anhand eines Forums",
    ],
  },
] as const;
