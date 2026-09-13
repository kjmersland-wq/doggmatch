import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import { Check, Mail } from "lucide-react";
import { Button, Eyebrow, Arrow } from "@/components/dogmatch/ui";
import { sendContactMessage } from "@/lib/contact/contact.functions";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { seoLinks, abs, localizedHead } from "@/lib/seo";

const title = "Contact DoggMatch";
const description =
  "Get in touch with DoggMatch. We're here to help with questions about finding the right dog, training, health, travel and life with your dog.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Kontakt DoggMatch",
    description:
      "Ta kontakt med DoggMatch. Vi hjelper gjerne med spørsmål om å finne riktig hund, trening, helse, reiser og livet med hund.",
  },
  pl: {
    title: "Kontakt z DoggMatch",
    description:
      "Napisz do nas. Chętnie pomożemy w pytaniach o wybór właściwego psa, szkolenie, zdrowie, podróże i życie z psem.",
  },
  dk: {
    title: "Kontakt DoggMatch",
    description:
      "Skriv til DoggMatch. Vi hjælper gerne med spørgsmål om at finde den rette hund, træning, sundhed, rejser og livet med hund.",
  },
  se: {
    title: "Kontakta DoggMatch",
    description:
      "Hör av dig till DoggMatch. Vi hjälper gärna till med frågor om att hitta rätt hund, träning, hälsa, resor och livet med hund.",
  },
  fi: {
    title: "Ota yhteyttä DoggMatchiin",
    description:
      "Ota yhteyttä DoggMatchiin. Autamme mielellämme oikean koiran löytämisessä, koulutuksessa, terveydessä, matkustamisessa ja koiran kanssa elämisessä.",
  },
  de: {
    title: "Kontaktieren Sie DoggMatch",
    description:
      "Nehmen Sie Kontakt mit DoggMatch auf. Wir helfen gerne bei Fragen zur Suche nach dem richtigen Hund, zu Training, Gesundheit, Reisen und dem Leben mit Ihrem Hund.",
  },
  fr: {
    title: "Contacter DoggMatch",
    description:
      "Contactez DoggMatch. Nous sommes là pour vous aider avec vos questions sur le choix du bon chien, l'éducation, la santé, les voyages et la vie avec votre chien.",
  },
  nl: {
    title: "Neem contact op met DoggMatch",
    description:
      "Neem contact op met DoggMatch. We helpen u graag met vragen over het vinden van de juiste hond, training, gezondheid, reizen en het leven met uw hond.",
  },
};

export const Route = createFileRoute("/{-$lang}/contact")({
  head: (ctx) => localizedHead(ctx, "/contact", seoCopy),
  component: ContactPage,
});

const reasonKeys = [
  "general",
  "matching",
  "training",
  "health",
  "myDog",
  "technical",
  "partnership",
  "other",
] as const;

const fieldClass =
  "w-full rounded-2xl border border-border-strong bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

const copy = {
  en: {
    eyebrow: "Contact",
    heading: "We'd love to hear from you.",
    intro:
      "A question about finding the right dog, training, food, health or travelling together — or something that isn't working as it should. Write to us and a real person will answer.",
    doneHeading: "Thank you. Your message has been sent.",
    doneBody:
      "We'll get back to you as soon as we can. Keep an eye on your inbox — we've sent you a short note confirming it arrived.",
    writeAnother: "Write another message",
    nameLabel: "Your name",
    namePlaceholder: "Kari Nordmann",
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "What's it about?",
    reasonLabel: "What's it about?",
    reasonHint: "Optional",
    reasonPlaceholder: "Choose one, if you like",
    reasons: {
      general: "General question",
      matching: "Dog matching",
      training: "Training",
      health: "Health & Nutrition",
      myDog: "My Dog",
      technical: "Technical problem",
      partnership: "Partnership",
      other: "Other",
    },
    messageLabel: "Your message",
    messagePlaceholder: "Tell us as much or as little as you like.",
    send: "Send Message",
    sending: "Sending…",
    onlyUse: "We only use your details to answer you. Nothing else.",
    sendError: "Sorry, we couldn't send your message right now. Please try again in a moment.",
  },
  no: {
    eyebrow: "Kontakt",
    heading: "Vi vil gjerne høre fra deg.",
    intro:
      "Et spørsmål om å finne riktig hund, trening, mat, helse eller reise sammen — eller noe som ikke virker som det skal. Skriv til oss, så svarer et ekte menneske.",
    doneHeading: "Takk. Meldingen din er sendt.",
    doneBody:
      "Vi svarer så snart vi kan. Følg med i innboksen din — vi har sendt deg en kort bekreftelse på at den kom fram.",
    writeAnother: "Skriv en ny melding",
    nameLabel: "Navnet ditt",
    namePlaceholder: "Kari Nordmann",
    emailLabel: "E-posten din",
    emailPlaceholder: "du@eksempel.no",
    subjectLabel: "Emne",
    subjectPlaceholder: "Hva gjelder det?",
    reasonLabel: "Hva gjelder det?",
    reasonHint: "Valgfritt",
    reasonPlaceholder: "Velg gjerne ett",
    reasons: {
      general: "Generelt spørsmål",
      matching: "Hundematching",
      training: "Trening",
      health: "Helse og ernæring",
      myDog: "Min hund",
      technical: "Teknisk problem",
      partnership: "Samarbeid",
      other: "Annet",
    },
    messageLabel: "Meldingen din",
    messagePlaceholder: "Fortell oss så mye eller så lite du vil.",
    send: "Send melding",
    sending: "Sender …",
    onlyUse: "Vi bruker opplysningene dine bare til å svare deg. Ikke noe annet.",
    sendError: "Beklager, vi klarte ikke å sende meldingen din akkurat nå. Prøv gjerne igjen om litt.",
  },
  pl: {
    eyebrow: "Kontakt",
    heading: "Chętnie cię wysłuchamy.",
    intro:
      "Pytanie dotyczące znalezienia odpowiedniego psa, szkolenia, jedzenia, zdrowia lub wspólnego podróżowania — albo coś, co nie działa tak, jak powinno. Napisz do nas, a odpowie ci prawdziwa osoba.",
    doneHeading: "Dziękujemy. Twoja wiadomość została wysłana.",
    doneBody:
      "Odpowiemy najszybciej, jak to możliwe. Sprawdzaj swoją skrzynkę — wysłaliśmy krótką wiadomość potwierdzającą, że dotarła.",
    writeAnother: "Napisz kolejną wiadomość",
    nameLabel: "Twoje imię",
    namePlaceholder: "Anna Kowalska",
    emailLabel: "Twój e-mail",
    emailPlaceholder: "ty@przyklad.pl",
    subjectLabel: "Temat",
    subjectPlaceholder: "Czego to dotyczy?",
    reasonLabel: "Czego to dotyczy?",
    reasonHint: "Opcjonalnie",
    reasonPlaceholder: "Wybierz, jeśli chcesz",
    reasons: {
      general: "Ogólne pytanie",
      matching: "Dopasowanie psa",
      training: "Szkolenie",
      health: "Zdrowie i żywienie",
      myDog: "Mój pies",
      technical: "Problem techniczny",
      partnership: "Współpraca",
      other: "Inne",
    },
    messageLabel: "Twoja wiadomość",
    messagePlaceholder: "Napisz tyle, ile chcesz.",
    send: "Wyślij wiadomość",
    sending: "Wysyłanie…",
    onlyUse: "Używamy twoich danych wyłącznie po to, by ci odpowiedzieć. Nic więcej.",
    sendError: "Przepraszamy, nie udało nam się teraz wysłać twojej wiadomości. Spróbuj ponownie za chwilę.",
  },
  dk: {
    eyebrow: "Kontakt",
    heading: "Vi vil meget gerne høre fra dig.",
    intro:
      "Et spørgsmål om at finde den rette hund, træning, mad, sundhed eller rejser sammen — eller noget, der ikke virker, som det skal. Skriv til os, og et rigtigt menneske svarer.",
    doneHeading: "Tak. Din besked er sendt.",
    doneBody:
      "Vi vender tilbage så hurtigt som muligt. Hold øje med din indbakke — vi har sendt dig en kort bekræftelse på, at den er kommet frem.",
    writeAnother: "Skriv en ny besked",
    nameLabel: "Dit navn",
    namePlaceholder: "Karina Nielsen",
    emailLabel: "Din e-mail",
    emailPlaceholder: "dig@eksempel.dk",
    subjectLabel: "Emne",
    subjectPlaceholder: "Hvad handler det om?",
    reasonLabel: "Hvad handler det om?",
    reasonHint: "Valgfrit",
    reasonPlaceholder: "Vælg gerne en, hvis du vil",
    reasons: {
      general: "Generelt spørgsmål",
      matching: "Hundematch",
      training: "Træning",
      health: "Sundhed og ernæring",
      myDog: "Min hund",
      technical: "Teknisk problem",
      partnership: "Samarbejde",
      other: "Andet",
    },
    messageLabel: "Din besked",
    messagePlaceholder: "Fortæl os så meget eller så lidt, du har lyst til.",
    send: "Send besked",
    sending: "Sender…",
    onlyUse: "Vi bruger kun dine oplysninger til at svare dig. Ikke til andet.",
    sendError: "Beklager, vi kunne ikke sende din besked lige nu. Prøv venligst igen om et øjeblik.",
  },
  se: {
    eyebrow: "Kontakt",
    heading: "Vi vill gärna höra från dig.",
    intro:
      "En fråga om att hitta rätt hund, träning, mat, hälsa eller att resa tillsammans — eller något som inte fungerar som det ska. Skriv till oss, så svarar en riktig person.",
    doneHeading: "Tack. Ditt meddelande har skickats.",
    doneBody:
      "Vi återkommer så snart vi kan. Håll utkik i din inkorg — vi har skickat en kort bekräftelse på att det kom fram.",
    writeAnother: "Skriv ett nytt meddelande",
    nameLabel: "Ditt namn",
    namePlaceholder: "Karin Andersson",
    emailLabel: "Din e-post",
    emailPlaceholder: "du@exempel.se",
    subjectLabel: "Ämne",
    subjectPlaceholder: "Vad gäller det?",
    reasonLabel: "Vad gäller det?",
    reasonHint: "Valfritt",
    reasonPlaceholder: "Välj gärna ett, om du vill",
    reasons: {
      general: "Allmän fråga",
      matching: "Matchning av hund",
      training: "Träning",
      health: "Hälsa och kost",
      myDog: "Min hund",
      technical: "Tekniskt problem",
      partnership: "Samarbete",
      other: "Annat",
    },
    messageLabel: "Ditt meddelande",
    messagePlaceholder: "Berätta så mycket eller så lite du vill.",
    send: "Skicka meddelande",
    sending: "Skickar…",
    onlyUse: "Vi använder bara dina uppgifter för att svara dig. Inget annat.",
    sendError: "Tyvärr kunde vi inte skicka ditt meddelande just nu. Försök gärna igen om en liten stund.",
  },
  fi: {
    eyebrow: "Yhteystiedot",
    heading: "Kuulisimme mielellämme sinusta.",
    intro:
      "Kysymys oikean koiran löytämisestä, koulutuksesta, ruokinnasta, terveydestä tai yhdessä matkustamisesta — tai jokin, joka ei toimi niin kuin pitäisi. Kirjoita meille, niin oikea ihminen vastaa.",
    doneHeading: "Kiitos. Viestisi on lähetetty.",
    doneBody:
      "Vastaamme niin pian kuin mahdollista. Pidä silmällä sähköpostiasi — lähetimme sinulle lyhyen vahvistuksen viestin perillepääsystä.",
    writeAnother: "Kirjoita uusi viesti",
    nameLabel: "Nimesi",
    namePlaceholder: "Kaisa Korhonen",
    emailLabel: "Sähköpostisi",
    emailPlaceholder: "sina@esimerkki.fi",
    subjectLabel: "Aihe",
    subjectPlaceholder: "Mitä asia koskee?",
    reasonLabel: "Mitä asia koskee?",
    reasonHint: "Valinnainen",
    reasonPlaceholder: "Valitse halutessasi yksi",
    reasons: {
      general: "Yleinen kysymys",
      matching: "Koiran sovittaminen",
      training: "Koulutus",
      health: "Terveys ja ravitsemus",
      myDog: "Oma koirani",
      technical: "Tekninen ongelma",
      partnership: "Yhteistyö",
      other: "Muu",
    },
    messageLabel: "Viestisi",
    messagePlaceholder: "Kerro niin paljon tai niin vähän kuin haluat.",
    send: "Lähetä viesti",
    sending: "Lähetetään…",
    onlyUse: "Käytämme tietojasi vain vastataksemme sinulle. Emme mihinkään muuhun.",
    sendError: "Valitettavasti viestiäsi ei juuri nyt voitu lähettää. Yritä hetken kuluttua uudelleen.",
  },
  de: {
    eyebrow: "Kontakt",
    heading: "Wir würden gerne von Ihnen hören.",
    intro:
      "Eine Frage zur Suche nach dem richtigen Hund, zu Training, Futter, Gesundheit oder gemeinsamem Reisen — oder etwas, das nicht so funktioniert, wie es sollte. Schreiben Sie uns, und ein echter Mensch antwortet.",
    doneHeading: "Danke. Ihre Nachricht wurde gesendet.",
    doneBody:
      "Wir melden uns so schnell wie möglich bei Ihnen. Behalten Sie Ihr Postfach im Auge — wir haben Ihnen eine kurze Bestätigung geschickt.",
    writeAnother: "Eine weitere Nachricht schreiben",
    nameLabel: "Ihr Name",
    namePlaceholder: "Anna Müller",
    emailLabel: "Ihre E-Mail-Adresse",
    emailPlaceholder: "sie@beispiel.de",
    subjectLabel: "Betreff",
    subjectPlaceholder: "Worum geht es?",
    reasonLabel: "Worum geht es?",
    reasonHint: "Optional",
    reasonPlaceholder: "Wählen Sie gerne eine Option",
    reasons: {
      general: "Allgemeine Frage",
      matching: "Hundevermittlung",
      training: "Training",
      health: "Gesundheit & Ernährung",
      myDog: "Mein Hund",
      technical: "Technisches Problem",
      partnership: "Partnerschaft",
      other: "Sonstiges",
    },
    messageLabel: "Ihre Nachricht",
    messagePlaceholder: "Erzählen Sie uns so viel oder so wenig, wie Sie möchten.",
    send: "Nachricht senden",
    sending: "Wird gesendet…",
    onlyUse: "Wir verwenden Ihre Angaben nur, um Ihnen zu antworten. Zu nichts anderem.",
    sendError: "Leider konnten wir Ihre Nachricht gerade nicht senden. Bitte versuchen Sie es in einem Moment erneut.",
  },
  fr: {
    eyebrow: "Contact",
    heading: "Nous serions ravis d'avoir de vos nouvelles.",
    intro:
      "Une question sur le choix du bon chien, l'éducation, l'alimentation, la santé ou les voyages ensemble — ou quelque chose qui ne fonctionne pas comme il faudrait. Écrivez-nous, une vraie personne vous répondra.",
    doneHeading: "Merci. Votre message a été envoyé.",
    doneBody:
      "Nous vous répondrons dès que possible. Gardez un œil sur votre boîte de réception — nous vous avons envoyé une courte confirmation de bonne réception.",
    writeAnother: "Écrire un autre message",
    nameLabel: "Votre nom",
    namePlaceholder: "Claire Dubois",
    emailLabel: "Votre e-mail",
    emailPlaceholder: "vous@exemple.fr",
    subjectLabel: "Sujet",
    subjectPlaceholder: "De quoi s'agit-il ?",
    reasonLabel: "De quoi s'agit-il ?",
    reasonHint: "Facultatif",
    reasonPlaceholder: "Choisissez-en un, si vous voulez",
    reasons: {
      general: "Question générale",
      matching: "Mise en correspondance",
      training: "Éducation",
      health: "Santé et nutrition",
      myDog: "Mon chien",
      technical: "Problème technique",
      partnership: "Partenariat",
      other: "Autre",
    },
    messageLabel: "Votre message",
    messagePlaceholder: "Dites-nous-en autant ou aussi peu que vous le souhaitez.",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    onlyUse: "Nous utilisons vos informations uniquement pour vous répondre. Rien d'autre.",
    sendError: "Désolé, nous n'avons pas pu envoyer votre message pour le moment. Veuillez réessayer dans un instant.",
  },
  nl: {
    eyebrow: "Contact",
    heading: "We horen graag van u.",
    intro:
      "Een vraag over het vinden van de juiste hond, training, voeding, gezondheid of samen reizen — of iets dat niet werkt zoals het zou moeten. Schrijf ons, en een echt persoon antwoordt.",
    doneHeading: "Bedankt. Uw bericht is verzonden.",
    doneBody:
      "We nemen zo snel mogelijk contact met u op. Houd uw inbox in de gaten — we hebben u een korte bevestiging gestuurd dat het is aangekomen.",
    writeAnother: "Nog een bericht schrijven",
    nameLabel: "Uw naam",
    namePlaceholder: "Anna de Vries",
    emailLabel: "Uw e-mailadres",
    emailPlaceholder: "u@voorbeeld.nl",
    subjectLabel: "Onderwerp",
    subjectPlaceholder: "Waar gaat het over?",
    reasonLabel: "Waar gaat het over?",
    reasonHint: "Optioneel",
    reasonPlaceholder: "Kies er gerust een",
    reasons: {
      general: "Algemene vraag",
      matching: "Hond matchen",
      training: "Training",
      health: "Gezondheid & voeding",
      myDog: "Mijn hond",
      technical: "Technisch probleem",
      partnership: "Samenwerking",
      other: "Anders",
    },
    messageLabel: "Uw bericht",
    messagePlaceholder: "Vertel ons zo veel of zo weinig als u wilt.",
    send: "Bericht versturen",
    sending: "Verzenden…",
    onlyUse: "We gebruiken uw gegevens alleen om u te antwoorden. Nergens anders voor.",
    sendError: "Sorry, we konden uw bericht nu niet verzenden. Probeer het straks nog eens.",
  },
} as const;

function ContactPage() {
  const c = useCopy(copy);
  const send = useServerFn(sendContactMessage);
  const formRef = useRef<HTMLFormElement>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setFormError(null);
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      reason: String(fd.get("reason") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };

    try {
      const res = await send({ data: payload });
      if (res.ok) {
        formRef.current?.reset();
        setDone(true);
      } else {
        setErrors(res.fieldErrors ?? {});
        setFormError(res.message);
      }
    } catch {
      setFormError(c.sendError);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container-page max-w-3xl py-14 md:py-24">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-6">{c.heading}</h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>

      {done ? (
        <div className="animate-fade mt-10 rounded-3xl border border-border bg-surface p-8 md:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
            <Check className="h-6 w-6" strokeWidth={2} aria-hidden />
          </span>
          <h2 className="mt-6 font-display text-2xl tracking-tight text-foreground">
            {c.doneHeading}
          </h2>
          <p className="mt-3 text-muted-foreground">{c.doneBody}</p>
          <Button
            tone="outline"
            className="mt-7"
            onClick={() => setDone(false)}
            type="button"
          >
            {c.writeAnother}
            <Arrow />
          </Button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
          {formError && (
            <p
              role="alert"
              className="animate-fade rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
            >
              {formError}
            </p>
          )}

          <Field label={c.nameLabel} id="name" error={errors["name"]}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder={c.namePlaceholder}
              aria-invalid={!!errors["name"]}
              aria-describedby={errors["name"] ? "name-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label={c.emailLabel} id="email" error={errors["email"]}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              maxLength={255}
              placeholder={c.emailPlaceholder}
              aria-invalid={!!errors["email"]}
              aria-describedby={errors["email"] ? "email-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label={c.subjectLabel} id="subject" error={errors["subject"]}>
            <input
              id="subject"
              name="subject"
              required
              maxLength={150}
              placeholder={c.subjectPlaceholder}
              aria-invalid={!!errors["subject"]}
              aria-describedby={errors["subject"] ? "subject-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label={c.reasonLabel} id="reason" hint={c.reasonHint} error={errors["reason"]}>
            <select id="reason" name="reason" defaultValue="" className={cn(fieldClass, "appearance-none")}>
              <option value="">{c.reasonPlaceholder}</option>
              {reasonKeys.map((r) => (
                <option key={r} value={c.reasons[r]}>
                  {c.reasons[r]}
                </option>
              ))}
            </select>
          </Field>

          <Field label={c.messageLabel} id="message" error={errors["message"]}>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              maxLength={4000}
              placeholder={c.messagePlaceholder}
              aria-invalid={!!errors["message"]}
              aria-describedby={errors["message"] ? "message-error" : undefined}
              className={cn(fieldClass, "resize-y leading-relaxed")}
            />
          </Field>

          {/* Honeypot — hidden from people, catnip for bots. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">Leave this empty</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
              <Mail className="h-4 w-4" aria-hidden />
              {busy ? c.sending : c.send}
            </Button>
            <p className="text-sm text-muted-foreground">{c.onlyUse}</p>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  id,
  hint,
  error,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline gap-2 text-sm font-medium text-foreground">
        {label}
        {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
