/** German copy for the "Become a DoggMatch Partner" page. Same shape as content.en.ts. */
import type { PartnerCategory } from "./content.en";

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Zubehör für Hunde", blurb: "Geschirre, Leinen, Betten, Spielzeug und die Alltagsdinge, die sich abnutzen." },
  { id: "grooming", label: "Fellpflege", blurb: "Salons und mobile Hundefriseure, die sich für nervöse Hunde Zeit nehmen." },
  { id: "training", label: "Training", blurb: "Welpenkurse, Einzelbetreuung und belohnungsbasierte Verhaltensarbeit." },
  { id: "vet", label: "Tierärzte & Gesundheit", blurb: "Kliniken, Physiotherapeuten, Zahnärzte und alle, die Hunde gesund halten." },
  { id: "insurance", label: "Versicherung", blurb: "Versicherungsschutz, der klar sagt, was er zahlt und was nicht." },
  { id: "boarding", label: "Betreuung & Tagesstätte", blurb: "Pensionen, private Betreuer, Tagesstätten und vertrauenswürdige Sitter." },
  { id: "food", label: "Futter & Ernährung", blurb: "Futter, Leckerlis und Nahrungsergänzung, die Sie Ihrem eigenen Hund geben würden." },
  { id: "travel", label: "Reisen & Aktivitäten", blurb: "Hundefreundliche Unterkünfte, Autozubehör, Wanderungen, Schwimmen und Ausflüge." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Erreichen Sie Halter, die wirklich suchen",
    body: "Menschen kommen zu DoggMatch, während sie einen Hund auswählen, ihn eingewöhnen oder Hilfe bei Futter, Training und Reisen suchen. Sie erhalten eine durchdachte Vorstellung genau in dem Moment, in dem man Sie wirklich braucht.",
  },
  {
    id: "listing",
    title: "Ihr eigener Platz bei den Mitgliedervorteilen",
    body: "Ein richtiger Eintrag im Mitgliederbereich: wer Sie sind, was Sie anbieten, wo es gilt, und ein direkter Link zu Ihnen. Nützlicher als ein Logo in einer Wand voller Logos.",
  },
  {
    id: "offer",
    title: "Ein Angebot, das Sie selbst gestalten",
    body: "Ein Prozentrabatt, eine kostenlose erste Sitzung, ein Upgrade oder ein Paket — was auch immer zu Ihrem Geschäft passt. Sie entscheiden über jedes Detail und können es jederzeit ändern oder pausieren.",
  },
  {
    id: "branding",
    title: "Partner-Branding, das Sie nutzen können",
    body: "Ein DoggMatch-Partner-Abzeichen für Ihr Schaufenster, Ihre Website und Ihre sozialen Kanäle, damit Kunden ein Geschäft erkennen, hinter dem wir gerne stehen.",
  },
  {
    id: "verification",
    title: "Verifizierung in zwei Sekunden",
    body: "Mitglieder tragen eine DoggMatch+-Karte mit einem QR-Code. Scannen Sie ihn, sehen Sie, ob die Mitgliedschaft aktiv ist, und heißen Sie sie willkommen. Keine App, kein Login, kein Papierkram.",
  },
  {
    id: "no-cost",
    title: "Auch ein Vorteil für Ihre Kunden",
    body: "Wir geben Ihren Kunden 25 % Rabatt auf DoggMatch+ für das erste Jahr. Das kostet Sie nichts, und Sie entscheiden weiterhin vollständig, welchen Vorteil Sie unseren Mitgliedern bieten. Es gibt keine Eintragungsgebühr und keine Provision.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Erzählen Sie uns von Ihrem Unternehmen",
    body: "Das kurze Formular unten reicht zum Start. Erzählen Sie uns, wer Sie sind, wo Sie ansässig sind, und erste Gedanken zu einem Angebot — es muss noch nicht endgültig sein.",
  },
  {
    no: "02",
    title: "Wir führen ein richtiges Gespräch",
    body: "Ein echter Mensch liest Ihre Nachricht und antwortet. Wir besprechen die Details und stellen sicher, dass es für beide Seiten passt — für Sie und für unsere Mitglieder.",
  },
  {
    no: "03",
    title: "Wir schreiben Ihren Eintrag gemeinsam",
    body: "Wir stellen Text, Angebot und praktische Details gemeinsam mit Ihnen zusammen. Sie genehmigen alles, bevor es live geht, und nichts wird ohne Ihr Einverständnis veröffentlicht.",
  },
  {
    no: "04",
    title: "Wir stellen Sie unseren Mitgliedern vor",
    body: "Ihr Angebot erscheint bei den Mitgliedervorteilen, Sie erhalten das Partner-Abzeichen und Ihren Kundencode, und Mitglieder können bei ihrem Besuch ihre QR-Karte zeigen.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Was kostet es, Partner zu werden?",
    a: "Nichts. Es gibt keine Eintragungsgebühr und keine Provision. Ihr Beitrag ist der Rabatt oder Vorteil, den Sie den Mitgliedern geben.",
  },
  {
    q: "Was kostet mich der 25 %-Rabatt für meine Kunden?",
    a: "Nichts. Wir gewähren Ihren Kunden einen Rabatt auf das erste Jahr von DoggMatch+. Sie entscheiden weiterhin vollständig, welchen Vorteil Sie unseren Mitgliedern bieten möchten.",
  },
  {
    q: "Wie prüfe ich, ob jemand wirklich Mitglied ist?",
    a: "Jedes DoggMatch+-Mitglied hat eine Karte mit einem QR-Code. Beim Scannen öffnet sich eine Seite, die nur zeigt, ob die Mitgliedschaft aktiv ist und bis wann — keine persönlichen Daten.",
  },
  {
    q: "Kann ich mein Angebot später ändern oder beenden?",
    a: "Ja, jederzeit. Schreiben Sie uns, und wir aktualisieren oder pausieren Ihren Eintrag. Wir bitten nur darum, bereits Zugesagtes einzuhalten.",
  },
  {
    q: "Wir sind nicht in Norwegen — können wir trotzdem mitmachen?",
    a: "Ja. DoggMatch wird international genutzt, und Mitgliedervorteile werden mit dem Land angezeigt, für das sie gelten. Online-Shops mit weitem Versand sind ebenfalls sehr willkommen.",
  },
  {
    q: "Wie viele Mitglieder werden es sehen?",
    a: "Wir nennen keine Zahl, hinter der wir nicht stehen können. DoggMatch+ ist jung und wächst, und das sagen wir lieber ehrlich, als es zu übertreiben.",
  },
  {
    q: "Welche Art von Unternehmen lehnen Sie ab?",
    a: "Alles, was auf aversiven Trainingsmethoden basiert, oder Produkte, die wir einem Freund mit Hund nicht guten Gewissens empfehlen würden. Wir haben lieber eine kurze Liste, der wir vertrauen.",
  },
] as const;
