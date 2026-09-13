/**
 * Copy for the "Become a DoggMatch Partner" page.
 * English is the source language — a sibling file per locale keeps the same shape.
 * Voice: warm, honest, human. Never salesy.
 */
export type PartnerCategory = {
  id: string;
  label: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Tierbedarf & Hundeausstattung", blurb: "Geschirre, Leinen, Betten, Spielzeug und die alltäglichen Dinge, die abgenutzt werden." },
  { id: "grooming", label: "Pflege", blurb: "Salons und mobile Hundefriseure, die sich Zeit für nervöse Hunde nehmen." },
  { id: "training", label: "Training", blurb: "Welpenkurse, Einzelunterstützung und belohnungsbasierte Verhaltensarbeit." },
  { id: "vet", label: "Tierärztliche Versorgung & Gesundheit", blurb: "Kliniken, Physiotherapeuten, Zahnärzte und alle, die Hunde gesund halten." },
  { id: "insurance", label: "Versicherungen", blurb: "Tarife, die klar darlegen, was sie abdecken und was nicht." },
  { id: "boarding", label: "Betreuung & Tagesstätte", blurb: "Zwinger, private Hundebetreuer, Tagesstätten und vertrauenswürdige Sitter." },
  { id: "food", label: "Futter & Ernährung", blurb: "Futter, Leckerlis und Ergänzungsmittel, die Sie auch Ihrem eigenen Hund geben würden." },
  { id: "travel", label: "Reisen & Aktivitäten", blurb: "Hundefreundliche Unterkünfte, Autozubehör, Wanderungen, Schwimmen und Ausflüge." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Erreichen Sie Halter, die aktiv suchen",
    body: "Menschen kommen zu DoggMatch, wenn sie einen Hund auswählen, sich einleben oder Hilfe bei Futter, Training und Reisen suchen. Sie erhalten eine durchdachte Vorstellung in dem Moment, in dem sie Sie wirklich brauchen.",
  },
  {
    id: "listing",
    title: "Ihr eigener Platz in den Mitglieder-Vorteilen",
    body: "Ein richtiges Profil im Mitgliederbereich: Wer Sie sind, was Sie anbieten, wo es genutzt werden kann, und ein direkter Link zu Ihnen. Nützlicher als ein Logo in einer Wand voller Logos.",
  },
  {
    id: "offer",
    title: "Ein Angebot, das Sie gestalten können",
    body: "Ein prozentualer Rabatt, eine kostenlose erste Sitzung, ein Upgrade oder ein Paket – was immer sich für Ihr Geschäft richtig anfühlt. Sie entscheiden jedes Detail und können es jederzeit ändern oder pausieren.",
  },
  {
    id: "branding",
    title: "Partner-Branding, das Sie nutzen können",
    body: "Ein DoggMatch Partner-Abzeichen für Ihr Schaufenster, Ihre Website und Ihre Social-Media-Kanäle, damit Kunden ein Geschäft erkennen, hinter dem wir gerne stehen.",
  },
  {
    id: "verification",
    title: "Verifizierung, die zwei Sekunden dauert",
    body: "Mitglieder haben eine DoggMatch+ Karte mit einem QR-Code. Scannen Sie ihn, sehen Sie, ob die Mitgliedschaft aktiv ist, und heißen Sie sie willkommen. Keine App, kein Login, kein Papierkram.",
  },
  {
    id: "no-cost",
    title: "Auch ein Vorteil für Ihre Kunden",
    body: "Wir gewähren Ihren Kunden 25 % Rabatt auf DoggMatch+ für ihr erstes Jahr. Das kostet Sie nichts, und Sie entscheiden weiterhin vollständig, welchen Vorteil Sie unseren Mitgliedern bieten möchten. Es gibt keine Listungsgebühr oder Provision.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Erzählen Sie uns von Ihrem Geschäft",
    body: "Das kurze Formular unten reicht für den Anfang. Sagen Sie uns, wer Sie sind, wo Sie ansässig sind und welche ersten Gedanken Sie zu einem Angebot haben – es muss noch nicht endgültig sein.",
  },
  {
    no: "02",
    title: "Wir führen ein richtiges Gespräch",
    body: "Eine echte Person liest Ihre Notiz und antwortet. Wir besprechen die Details und stellen sicher, dass es für beide Seiten passt – für Sie und für unsere Mitglieder.",
  },
  {
    no: "03",
    title: "Wir erstellen gemeinsam Ihr Profil",
    body: "Wir fassen die Texte, das Angebot und die praktischen Details mit Ihnen zusammen. Sie genehmigen alles, bevor es online geht, und nichts wird ohne Ihr Einverständnis veröffentlicht.",
  },
  {
    no: "04",
    title: "Wir stellen Sie den Mitgliedern vor",
    body: "Ihr Angebot erscheint in den Mitglieder-Vorteilen, Sie erhalten das Partner-Abzeichen und Ihren Kunden-Code, und Mitglieder können ihre QR-Karte beim Besuch vorzeigen.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Was kostet es, Partner zu werden?",
    a: "Nichts. Es gibt keine Listungsgebühr und keine Provision. Der Rabatt oder Vorteil, den Sie den Mitgliedern gewähren, ist Ihr Beitrag.",
  },
  {
    q: "Was kostet mich der 25% Rabatt für meine Kunden?",
    a: "Nichts. Wir gewähren Ihren Kunden einen Rabatt auf DoggMatch+ für das erste Jahr. Sie entscheiden weiterhin vollständig, welchen Vorteil Sie unseren Mitgliedern bieten möchten.",
  },
  {
    q: "Wie prüfe ich, ob jemand wirklich Mitglied ist?",
    a: "Jedes DoggMatch+ Mitglied hat eine Karte mit einem QR-Code. Das Scannen öffnet eine Seite, die nur anzeigt, ob die Mitgliedschaft aktiv ist und bis wann – keine persönlichen Daten.",
  },
  {
    q: "Kann ich mein Angebot später ändern oder beenden?",
    a: "Ja, jederzeit. Schreiben Sie uns, und wir aktualisieren oder pausieren Ihr Profil. Wir bitten Sie lediglich, alles bereits Zugesagte einzuhalten.",
  },
  {
    q: "Wir sind nicht in Norwegen – können wir trotzdem mitmachen?",
    a: "Ja. DoggMatch wird international genutzt, und die Mitglieder-Vorteile werden mit dem Land angezeigt, für das sie gelten. Online-Shops, die weithin versenden, sind ebenfalls sehr willkommen.",
  },
  {
    q: "Wie viele Mitglieder werden es sehen?",
    a: "Wir werden Ihnen keine Zahl nennen, hinter der wir nicht stehen können. DoggMatch+ ist noch jung und wächst, und wir sind lieber ehrlich darüber, als zu viel zu versprechen.",
  },
  {
    q: "Welche Art von Geschäften lehnen Sie ab?",
    a: "Alles, was auf aversiven Trainingsmethoden basiert, oder Produkte, die wir einem Freund mit Hund nicht guten Gewissens empfehlen würden. Wir ziehen eine kurze Liste vor, der wir vertrauen.",
  },
] as const;
