/**
 * Everything the Get A Dog journey says out loud, in the DoggMatch voice.
 * Kept out of the components so it can be translated later without touching
 * a single piece of layout.
 */

export interface JourneyStep {
  id: string;
  no: string;
  title: string;
  body: string;
  to: string;
}

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Ist ein Hund das Richtige für mich?", body: "Ein paar ehrliche Fragen zu deinem Alltag, deinem Zuhause und den Menschen um dich herum.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Finde meinen Hund", body: "Sieh, welche Rassen gut zu deinem Leben passen – und warum.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Wähle mit Bedacht", body: "Welpe oder erwachsener Hund, Züchter oder Tierheim, und was du fragen solltest, bevor du Ja sagst.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Verstehe die Verpflichtung", body: "Was ein Hund wirklich kostet, bevor er einzieht und jeden Monat danach.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Mach dich bereit", body: "Der Einkauf, der Tierarzt, die Versicherung – und wie du dein Zuhause vorbereitest.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Willkommen zu Hause", body: "Der erste Tag und die erste Woche, ganz behutsam.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Mein Hund", body: "Sein ganzes Leben an einem Ort – Futter, Training, Gesundheit, Spaziergänge und Papiere.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Puppy / adult */

export const puppyVsAdult = {
  title: "Welpe oder ein Hund, der schon erwachsen ist?",
  body: "Keines von beiden ist besser. Es sind zwei sehr unterschiedliche erste Jahre, und das Richtige hängt viel mehr von deinem Leben ab als vom Hund.",
  puppy: {
    title: "Ein Welpe",
    lead: "Du darfst fast alles formen – und bezahlst dafür mit Schlaf.",
    good: [
      "Du erlebst jede Entwicklungsstufe mit",
      "Sozialisierung und Gewohnheiten beginnen bei dir",
      "Meist einfacher, ihn an andere Haustiere und Kinder zu gewöhnen",
      "Ein langes gemeinsames Leben liegt vor euch",
    ],
    hard: [
      "Monatelang schlaflose Nächte, Stubenreinheitstraining und Knabbern",
      "Braucht anfangs die meiste Zeit des Tages Gesellschaft",
      "Die Persönlichkeit ist noch ein Rätsel, selbst bei einem sorgfältigen Züchter",
      "Im ersten Jahr fallen Impfungen, Kastration und frühe Tierarztkosten an",
    ],
  },
  adult: {
    title: "Ein erwachsener Hund",
    lead: "Vieles, was du siehst, ist auch das, was du bekommst.",
    good: [
      "Größe, Fell und Temperament sind bereits klar",
      "Viele sind stubenrein und können sich alleine beschäftigen",
      "Oft vom ersten Tag an ruhiger",
      "Tierheimhunde kommen meist mit einer ehrlichen Einschätzung des Hundes",
    ],
    hard: [
      "Sie bringen eine Vorgeschichte mit, die du vielleicht nur teilweise kennst",
      "Manche Gewohnheiten brauchen Geduld, um sie zu ändern",
      "Weniger gemeinsame Jahre, besonders bei einem älteren Hund",
      "Die Eingewöhnung kann Wochen dauern, nicht Tage",
    ],
  },
  closing:
    "Wenn dein Alltag bereits voll ist, ist ein erwachsener Hund, der weiß, wie man ein Hund ist, oft die sanftere Wahl – für dich und für ihn.",
};

/* -------------------------------------------------------------- The source */

export const sources = {
  title: "Woher kommt dein Hund?",
  body: "Beide Wege können dir einen wunderbaren Hund bringen. Beide sind ein paar sorgfältige Fragen wert. Keiner ist automatisch die richtige Antwort.",
  breeder: {
    title: "Ein verantwortungsvoller Züchter",
    good: [
      "Du triffst die Mutter und siehst, wie die Welpen aufgezogen werden",
      "Gesundheitstests, die für die Rasse relevant sind, wurden meist durchgeführt",
      "Du bekommst eine ziemlich klare Vorstellung von Größe, Fell und Temperament im Erwachsenenalter",
      "Ein guter Züchter bleibt ein Leben lang für den Hund erreichbar",
    ],
    check: [
      "Werden die Welpen in einem Zuhause aufgezogen, inmitten des normalen Familienlebens?",
      "Welche Gesundheitstests wurden durchgeführt und kannst du die Ergebnisse sehen?",
      "Wie viele Würfe haben sie und von wie vielen Rassen?",
      "Werden sie den Hund zurücknehmen, wenn sich deine Umstände jemals ändern?",
    ],
  },
  rescue: {
    title: "Adoption oder Tierheim",
    good: [
      "Erwachsene Hunde haben eine Persönlichkeit, die du tatsächlich kennenlernen kannst",
      "Gute Tierheime beurteilen und beschreiben ihre Hunde ehrlich",
      "Oft bereits geimpft, gechippt und kastriert",
      "Unterstützung nach der Adoption ist meist Teil des Angebots",
    ],
    check: [
      "Was wissen sie über die Vorgeschichte und das frühere Zuhause des Hundes?",
      "Wie verhält sich der Hund gegenüber Kindern, anderen Hunden und Katzen?",
      "Welche Gesundheitsinformationen liegen vor?",
      "Welche Hilfe gibt es, wenn die ersten Wochen schwierig sind?",
    ],
  },
};

export const breederQuestions = [
  "Kann ich die Mutter treffen?",
  "Kann ich sehen, wo die Welpen aufgezogen werden?",
  "Welche Gesundheitstests wurden für diese Rasse durchgeführt?",
  "Welche tierärztliche Versorgung haben die Welpen bisher erhalten?",
  "Wie wurden sie sozialisiert – womit sind sie in Kontakt gekommen und was haben sie gehört?",
  "Welche Unterstützung gibt es, nachdem ich den Welpen mit nach Hause genommen habe?",
  "Welche Dokumentation erhalte ich?",
  "Kann ich mir ein paar Tage Zeit zum Entscheiden nehmen?",
];

export const breederRedFlags = [
  "Du wirst gedrängt, sofort zu bezahlen oder dich zu entscheiden",
  "Du kannst nicht sehen, wo die Welpen leben, oder die Mutter nicht treffen",
  "Gesundheits- oder Impfdokumente fehlen oder sind unklar",
  "Direkte Fragen werden ausweichend beantwortet",
  "Eine ungewöhnlich große Anzahl von Würfen, die nicht zusammengehören, oder viele Rassen gleichzeitig",
  "Ein Welpe sieht krank aus oder hat extreme Angst vor alltäglichen Dingen",
  "Die Geschichte ändert sich zwischen den Gesprächen",
];

export const adoptionConsiderations = [
  { title: "Vorgeschichte", body: "Manche Hunde kommen mit einer vollständigen Geschichte, andere mit fast keiner. Ein gutes Tierheim wird dir ehrlich sagen, um was es sich handelt." },
  { title: "Temperament", body: "Frage, was sie tatsächlich beobachtet haben: gegenüber Fremden, an der Leine, im Auto, eine Stunde allein gelassen." },
  { title: "Gesundheit", body: "Verlange die Tierarztunterlagen, keine Zusammenfassung. Chronische Erkrankungen sind gut zu managen, wenn du davon weißt." },
  { title: "Verhalten", body: "Die meisten 'Probleme' sind ein Hund, der nicht richtig angeleitet wurde oder Angst hat. Frage, welche Hilfe verfügbar ist." },
  { title: "Dein Zuhause", body: "Treppen, Kinder, Katzen, eine belebte Straße – sprich alles laut aus. Eine gute Übereinstimmung ist wichtiger als eine schnelle." },
  { title: "Danach", body: "Frage, welche Unterstützung es in der zweiten Woche gibt, wenn die erste Aufregung verflogen ist und der echte Hund zum Vorschein kommt." },
];

/* -------------------------------------------------------------- The costs */

export interface CostGroup {
  id: string;
  title: string;
  body: string;
  items: { label: string; note: string }[];
}

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Bevor dein Hund einzieht",
    body: "Die einmaligen Ausgaben. Das meiste davon passiert in zwei Wochen, deshalb überrascht es die Leute.",
    items: [
      { label: "Anschaffungs- oder Adoptionsgebühr", note: "Variiert stark je nach Rasse, Land und Weg" },
      { label: "Bett und eine Box, falls du eine benutzt", note: "Kaufe die Größe, in die er hineinwachsen wird" },
      { label: "Näpfe, Halsband, Geschirr, Leine, ID-Tag", note: "Gesetzliche Ausweispflichten unterscheiden sich je nach Land" },
      { label: "Pflegeausstattung", note: "Bürste, Kamm, Krallenschere, Zahnbürste" },
      { label: "Spielzeug und Kauartikel", note: "Weniger als du denkst, häufiger ersetzt als du denkst" },
      { label: "Erster Tierarztbesuch", note: "Check-up, Impfungen, Chip, falls noch nicht geschehen" },
    ],
  },
  {
    id: "monthly",
    title: "Jeden Monat",
    body: "Die laufenden Kosten. Es lohnt sich, sie ehrlich aufzuschreiben, bevor du dich entscheidest, nicht danach.",
    items: [
      { label: "Futter", note: "Der größte monatliche Posten, und er skaliert mit der Größe" },
      { label: "Leckerlis und Kauartikel", note: "Im ersten Jahr läuft das Training darauf" },
      { label: "Versicherung", note: "Je jünger und gesünder, desto günstiger" },
      { label: "Pflege", note: "Von nichts bis zu einem Salonbesuch alle sechs Wochen" },
      { label: "Routinepflege", note: "Entwurmung, Floh- und Zeckenbehandlung, Krallenpflege" },
      { label: "Hilfe während der Arbeitszeit", note: "Ein Gassi-Service oder eine Hundetagesstätte, falls dein Tag lang ist" },
    ],
  },
  {
    id: "unexpected",
    title: "Worauf du vorbereitet sein solltest",
    body: "Der Teil, für den niemand budgetiert. Ein bisschen jeden Monat zur Seite legen, macht diese Dinge erträglich.",
    items: [
      { label: "Unerwartete tierärztliche Behandlung", note: "Verletzungen und Krankheiten kommen selten gelegen" },
      { label: "Zahnpflege", note: "Sehr häufig im mittleren Alter und nicht billig" },
      { label: "Notfall- und Bereitschaftsdienst", note: "Kostet mehr als ein geplanter Termin" },
      { label: "Ersatz von Dingen", note: "Betten, Leinen und ein oder zwei Gegenstände, die dir lieb waren" },
    ],
  },
];

/* ---------------------------------------------------------------- Your home */

export const homeScenarios = [
  { id: "apartment", title: "Eine Wohnung", body: "Perfekt machbar. Denke an Treppen oder einen Aufzug, Nachbarn und wo du den ersten Spaziergang des Tages machen wirst." },
  { id: "house", title: "Ein Haus", body: "Der Platz drinnen ist weniger wichtig, als du denkst. Wichtig ist, dass du innerhalb von zehn Minuten von deiner Tür aus spazieren gehen kannst." },
  { id: "garden", title: "Ein Garten", body: "Schön zu haben und kein Ersatz für einen Spaziergang. Überprüfe den Zaun, das Tor und alles, was wächst und nicht gefressen werden sollte." },
  { id: "city", title: "Stadt", body: "Belebte Gehwege, Verkehr, Aufzüge und Cafés. Stadt-Hunde müssen vor allem mit Lärm zurechtkommen." },
  { id: "suburb", title: "Vorort", body: "Meist am einfachsten von allen: ruhige Straßen, Grünflächen in der Nähe und ein Ort, an dem er sich am Wochenende austoben kann." },
  { id: "rural", title: "Ländlich", body: "Platz und Freiheit, mit Vieh, Wildtieren und einer längeren Anfahrt zum Tierarzt, die man bedenken muss." },
];

export const homeFactors = [
  "Treppen und ob dein Hund sie am Anfang und Ende seines Lebens bewältigen könnte",
  "Ein Aufzug und ob er sich darin wohlfühlt",
  "Außenbereich und wie sicher er wirklich ist",
  "Grünflächen in bequemer Gehweite",
  "Ein sicherer Ort, an dem ein Hund rennen kann",
  "Cafés, Geschäfte und öffentliche Verkehrsmittel, die Hunde willkommen heißen",
];

export const lifeScenarios = [
  { id: "quiet", title: "Ruhiger Stubenhocker", body: "Gleichmäßige Routinen und kurze, regelmäßige Spaziergänge. Ein ruhigerer Hund ist hier glücklicher als ein Athlet." },
  { id: "outdoors", title: "Aktiv draußen", body: "Wochenenden auf Wanderwegen, das Wetter spielt keine Rolle. Ein fitter Hund, der mit dir die Distanz steigern kann." },
  { id: "city", title: "Stadtleben", body: "Gehwege, Verkehr, Menschenmengen. Selbstvertrauen im Umgang mit Lärm ist wichtiger als die Größe." },
  { id: "family", title: "Familienleben", body: "Lärm, Besucher, Schulwege. Toleranz und ein Rückzugsort sind entscheidend." },
  { id: "home-office", title: "Arbeiten von zu Hause", body: "Wunderbar für einen Hund – solange er auch lernt, manchmal allein zu sein." },
  { id: "retired", title: "Rentner oder flexibel", body: "Zeit und Routine, das ist das meiste, was ein Hund will. Denke an die Kraft an der Leine." },
  { id: "travel", title: "Häufiger Reisender", body: "Mit einem Plan durchaus möglich: ein regelmäßiger Sitter oder ein Hund, der gut mit dir reist." },
];

/* ------------------------------------------------------------- Preparation */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Futter", note: "Beginne mit dem, was er bereits frisst, und ändere es dann langsam" },
  { id: "bowls", label: "Näpfe", note: "Einer für Futter, einer immer gefüllt mit Wasser" },
  { id: "collar", label: "Halsband" },
  { id: "tag", label: "ID-Tag", note: "Deine Telefonnummer, mindestens" },
  { id: "harness", label: "Geschirr" },
  { id: "lead", label: "Leine" },
  { id: "bed", label: "Bett", note: "Ein ruhiger Ort, abseits des Hauptverkehrs im Haus" },
  { id: "toys", label: "Ein paar Spielzeuge" },
  { id: "grooming", label: "Pflegeutensilien" },
  { id: "toothbrush", label: "Zahnbürste und Hundezahnpasta" },
  { id: "waste", label: "Kotbeutel" },
  { id: "cleaning", label: "Reinigungsmittel", note: "Ein Enzymreiniger für die Unfälle, die passieren werden" },
  { id: "travel", label: "Sichere Reiseausstattung", note: "Für die Heimfahrt und auch danach" },
  { id: "vet", label: "Tierarzttermin gebucht" },
  { id: "insurance", label: "Versicherung abgeschlossen" },
  { id: "microchip", label: "Chip-Details", note: "Auf deinen Namen registriert, mit deiner aktuellen Telefonnummer" },
  { id: "emergency", label: "Notfallkontakte aufgeschrieben", note: "Dein Tierarzt und die nächste Notfallklinik" },
];

export const firstDay = [
  { title: "Halte es ruhig", body: "Keine Willkommensparty. Nur die Menschen, die hier leben, die normal sprechen." },
  { title: "Zeige ihm sein Bett", body: "Bringe ihn zu seinem Platz und lass ihn in seinem eigenen Tempo zurückkommen." },
  { title: "Wasser, dann Futter", body: "Sofort Wasser. Futter, wenn er sich etwas beruhigt hat, und das gleiche Futter wie zuvor." },
  { title: "Lass ihn erkunden", body: "Ein Raum nach dem anderen, ohne Leine, mit dir in der Nähe, aber nicht bedrängend." },
  { title: "Halte die Welt klein", body: "Das Haus und der Garten reichen für einen Tag. Alles andere kann warten." },
  { title: "Beginne zu beobachten", body: "Wann er raus muss, wo er schlafen möchte, was ihn beunruhigt. Das ist der Anfang, ihn kennenzulernen." },
];

export const firstWeek = [
  { title: "Eine sanfte Routine", body: "Gleiche Zeiten für Futter, Spaziergänge und Schlaf. Vorhersehbarkeit beruhigt einen Hund am schnellsten." },
  { title: "Sein Name", body: "Sage ihn und belohne ihn, wenn er dich ansieht. Nichts Komplizierteres als das im Moment." },
  { title: "Die ersten kleinen Lektionen", body: "Kommen, wenn man gerufen wird, und für ein paar Minuten allein sein können." },
  { title: "Toilettenroutine", body: "Draußen nach dem Schlafen, Essen und Spielen. Lobe den Moment, wenn es passiert, schimpfe nie über Unfälle." },
  { title: "Schlaf", body: "Neue Hunde schlafen enorm viel. Lass sie. Welpen brauchen den größten Teil des Tages." },
  { title: "Die Welt kennenlernen", body: "In einem Tempo, das seinem Alter entspricht, und im Einklang mit den Ratschlägen deines Tierarztes bezüglich Impfungen." },
  { title: "Gemeinsame Zeit", body: "Ruhig im selben Raum zu sitzen, tut der Bindung mehr gut als jede Bewegung." },
  { title: "Achtsam sein", body: "Appetit, Toilettengewohnheiten, Energie. Du wirst schneller als gedacht wissen, was für ihn normal ist." },
];
