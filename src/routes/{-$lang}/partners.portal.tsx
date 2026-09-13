import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ButtonLink, Eyebrow, Section, Arrow } from "@/components/dogmatch/ui";
import { Panel } from "@/components/dogmatch/care/parts";
import { useAuth } from "@/hooks/use-auth";
import {
  applyForPortal,
  getPartnerAccount,
  getPartnerStats,
  issuePartnerCode,
  listPartners,
  setPartnerStatus,
} from "@/lib/partners/portal.functions";
import { useCopy } from "@/i18n";
import { noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Partner portal | DoggMatch";
const description =
  "Your own place as a DoggMatch partner: your customer code, the members who joined through you, and how the 25% first-year discount is being used.";

export const Route = createFileRoute("/{-$lang}/partners/portal")({
  head: () => ({
    meta: [
      ...noindexMeta,
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PortalPage,
});

const copy = {
  en: {
    eyebrow: "Partner portal",
    heading: "Your side of the partnership",
    intro: "Your customer code, the members who joined through you, and how the 25% first-year discount is being used.",
    signInTitle: "Sign in to continue",
    signInBody: "The portal is tied to your account, so we know which business you belong to.",
    signIn: "Sign in",
    applyTitle: "Tell us about your business",
    applyBody: "A real person reads this. Once we've approved you, your code appears here.",
    company: "Company name",
    contact: "Your name",
    country: "Country",
    category: "What you do",
    website: "Website (optional)",
    benefit: "The benefit you'd like to offer members (optional)",
    apply: "Send application",
    applying: "Sending…",
    applyError: "Something went wrong. Please check the fields and try again.",
    pendingTitle: "We've got your application",
    pendingBody: "We read every one ourselves. You'll hear from us by email, and your code will appear on this page once you're approved.",
    pausedTitle: "Your listing is paused",
    pausedBody: "Write to us whenever you'd like to start again.",
    codeTitle: "Your customer code",
    codeBody: "Give this to your customers. It takes 25% off their first year of DoggMatch+.",
    createCode: "Create my code",
    creating: "Creating…",
    copyCode: "Copy code",
    copied: "Copied",
    statsTitle: "Members through you",
    joinedLabel: "Joined",
    startedLabel: "Started checkout",
    discountLabel: "Discount given",
    noneYet: "Nobody has used your code yet. It often takes a little while.",
    tableDate: "Date",
    tableStatus: "Status",
    tablePlan: "Plan",
    statusStarted: "Started",
    statusJoined: "Joined",
    adminTitle: "Partners",
    approve: "Approve",
    pause: "Pause",
    noPartners: "No partners yet.",
    privacyNote: "We only show you dates and status — never a member's name or email.",
  },
  no: {
    eyebrow: "Partnerportal",
    heading: "Din side av samarbeidet",
    intro: "Kundekoden din, medlemmene som har blitt med via deg, og hvordan rabatten på 25 % det første året brukes.",
    signInTitle: "Logg inn for å fortsette",
    signInBody: "Portalen er knyttet til kontoen din, så vi vet hvilken bedrift du hører til.",
    signIn: "Logg inn",
    applyTitle: "Fortell oss om bedriften din",
    applyBody: "Et ekte menneske leser dette. Når du er godkjent, dukker koden din opp her.",
    company: "Firmanavn",
    contact: "Navnet ditt",
    country: "Land",
    category: "Hva dere driver med",
    website: "Nettside (valgfritt)",
    benefit: "Fordelen du ønsker å gi medlemmene (valgfritt)",
    apply: "Send søknad",
    applying: "Sender …",
    applyError: "Noe gikk galt. Se over feltene og prøv igjen.",
    pendingTitle: "Vi har fått søknaden din",
    pendingBody: "Vi leser hver eneste en selv. Du hører fra oss på e-post, og koden din dukker opp her når du er godkjent.",
    pausedTitle: "Oppføringen din er satt på pause",
    pausedBody: "Skriv til oss når du vil starte opp igjen.",
    codeTitle: "Kundekoden din",
    codeBody: "Gi denne til kundene dine. Den gir 25 % avslag på det første året med DoggMatch+.",
    createCode: "Lag koden min",
    creating: "Lager …",
    copyCode: "Kopier kode",
    copied: "Kopiert",
    statsTitle: "Medlemmer via deg",
    joinedLabel: "Ble medlem",
    startedLabel: "Startet betaling",
    discountLabel: "Rabatt gitt",
    noneYet: "Ingen har brukt koden din ennå. Det tar ofte litt tid.",
    tableDate: "Dato",
    tableStatus: "Status",
    tablePlan: "Plan",
    statusStarted: "Startet",
    statusJoined: "Ble medlem",
    adminTitle: "Partnere",
    approve: "Godkjenn",
    pause: "Sett på pause",
    noPartners: "Ingen partnere ennå.",
    privacyNote: "Vi viser bare dato og status — aldri navn eller e-post til et medlem.",
  },
  pl: {
    eyebrow: "Portal partnera",
    heading: "Twoja strona współpracy",
    intro: "Twój kod dla klientów, osoby, które dołączyły dzięki Tobie, i to, jak wykorzystywana jest zniżka 25% na pierwszy rok.",
    signInTitle: "Zaloguj się, aby kontynuować",
    signInBody: "Portal jest powiązany z Twoim kontem, dzięki czemu wiemy, do jakiej firmy należysz.",
    signIn: "Zaloguj się",
    applyTitle: "Opowiedz nam o swojej firmie",
    applyBody: "Czyta to prawdziwa osoba. Po zatwierdzeniu Twój kod pojawi się tutaj.",
    company: "Nazwa firmy",
    contact: "Twoje imię",
    country: "Kraj",
    category: "Czym się zajmujecie",
    website: "Strona internetowa (opcjonalnie)",
    benefit: "Korzyść, którą chcesz zaoferować członkom (opcjonalnie)",
    apply: "Wyślij zgłoszenie",
    applying: "Wysyłanie…",
    applyError: "Coś poszło nie tak. Sprawdź pola i spróbuj ponownie.",
    pendingTitle: "Mamy Twoje zgłoszenie",
    pendingBody: "Czytamy każde osobiście. Odezwiemy się mailem, a kod pojawi się tutaj po zatwierdzeniu.",
    pausedTitle: "Twój wpis jest wstrzymany",
    pausedBody: "Napisz do nas, kiedy zechcesz zacząć od nowa.",
    codeTitle: "Twój kod dla klientów",
    codeBody: "Przekaż go klientom. Daje 25% zniżki na pierwszy rok DoggMatch+.",
    createCode: "Utwórz mój kod",
    creating: "Tworzenie…",
    copyCode: "Kopiuj kod",
    copied: "Skopiowano",
    statsTitle: "Członkowie dzięki Tobie",
    joinedLabel: "Dołączyli",
    startedLabel: "Rozpoczęli płatność",
    discountLabel: "Udzielona zniżka",
    noneYet: "Nikt jeszcze nie użył Twojego kodu. Często trochę to trwa.",
    tableDate: "Data",
    tableStatus: "Status",
    tablePlan: "Plan",
    statusStarted: "Rozpoczęte",
    statusJoined: "Dołączył",
    adminTitle: "Partnerzy",
    approve: "Zatwierdź",
    pause: "Wstrzymaj",
    noPartners: "Brak partnerów.",
    privacyNote: "Pokazujemy tylko datę i status — nigdy imienia ani e-maila członka.",
  },
  dk: {
    eyebrow: "Partnerportal",
    heading: "Din side af samarbejdet",
    intro: "Din kundekode, de medlemmer der er kommet til via dig, og hvordan rabatten på 25 % det første år bliver brugt.",
    signInTitle: "Log ind for at fortsætte",
    signInBody: "Portalen er knyttet til din konto, så vi ved, hvilken virksomhed du hører til.",
    signIn: "Log ind",
    applyTitle: "Fortæl os om din virksomhed",
    applyBody: "Et rigtigt menneske læser det her. Når du er godkendt, dukker din kode op her.",
    company: "Firmanavn",
    contact: "Dit navn",
    country: "Land",
    category: "Hvad I laver",
    website: "Hjemmeside (valgfrit)",
    benefit: "Den fordel du gerne vil give medlemmerne (valgfrit)",
    apply: "Send ansøgning",
    applying: "Sender …",
    applyError: "Noget gik galt. Se felterne igennem og prøv igen.",
    pendingTitle: "Vi har modtaget din ansøgning",
    pendingBody: "Vi læser hver eneste selv. Du hører fra os på mail, og din kode dukker op her, når du er godkendt.",
    pausedTitle: "Din visning er sat på pause",
    pausedBody: "Skriv til os, når du gerne vil i gang igen.",
    codeTitle: "Din kundekode",
    codeBody: "Giv den til dine kunder. Den giver 25 % på det første år med DoggMatch+.",
    createCode: "Lav min kode",
    creating: "Laver …",
    copyCode: "Kopiér kode",
    copied: "Kopieret",
    statsTitle: "Medlemmer via dig",
    joinedLabel: "Blev medlem",
    startedLabel: "Startede betaling",
    discountLabel: "Rabat givet",
    noneYet: "Ingen har brugt din kode endnu. Det tager ofte lidt tid.",
    tableDate: "Dato",
    tableStatus: "Status",
    tablePlan: "Plan",
    statusStarted: "Startet",
    statusJoined: "Blev medlem",
    adminTitle: "Partnere",
    approve: "Godkend",
    pause: "Sæt på pause",
    noPartners: "Ingen partnere endnu.",
    privacyNote: "Vi viser kun dato og status — aldrig et medlems navn eller mail.",
  },
  se: {
    eyebrow: "Partnerportal",
    heading: "Din sida av samarbetet",
    intro: "Din kundkod, medlemmarna som gått med via dig och hur rabatten på 25 % första året används.",
    signInTitle: "Logga in för att fortsätta",
    signInBody: "Portalen hör ihop med ditt konto, så vi vet vilket företag du tillhör.",
    signIn: "Logga in",
    applyTitle: "Berätta om ditt företag",
    applyBody: "En riktig människa läser det här. När du är godkänd dyker din kod upp här.",
    company: "Företagsnamn",
    contact: "Ditt namn",
    country: "Land",
    category: "Vad ni gör",
    website: "Webbplats (valfritt)",
    benefit: "Förmånen du vill ge medlemmarna (valfritt)",
    apply: "Skicka ansökan",
    applying: "Skickar …",
    applyError: "Något gick fel. Titta igenom fälten och försök igen.",
    pendingTitle: "Vi har fått din ansökan",
    pendingBody: "Vi läser varenda en själva. Du hör från oss via mejl, och koden dyker upp här när du är godkänd.",
    pausedTitle: "Din listning är pausad",
    pausedBody: "Skriv till oss när du vill börja igen.",
    codeTitle: "Din kundkod",
    codeBody: "Ge den till dina kunder. Den ger 25 % på första året med DoggMatch+.",
    createCode: "Skapa min kod",
    creating: "Skapar …",
    copyCode: "Kopiera kod",
    copied: "Kopierad",
    statsTitle: "Medlemmar via dig",
    joinedLabel: "Blev medlem",
    startedLabel: "Påbörjad betalning",
    discountLabel: "Given rabatt",
    noneYet: "Ingen har använt din kod ännu. Det tar ofta en liten stund.",
    tableDate: "Datum",
    tableStatus: "Status",
    tablePlan: "Plan",
    statusStarted: "Påbörjad",
    statusJoined: "Blev medlem",
    adminTitle: "Partner",
    approve: "Godkänn",
    pause: "Pausa",
    noPartners: "Inga partner ännu.",
    privacyNote: "Vi visar bara datum och status — aldrig en medlems namn eller mejl.",
  },
  fi: {
    eyebrow: "Kumppaniportaali",
    heading: "Sinun puolesi yhteistyöstä",
    intro: "Asiakaskoodisi, kauttasi liittyneet jäsenet ja se, miten ensimmäisen vuoden 25 %:n alennusta käytetään.",
    signInTitle: "Kirjaudu sisään jatkaaksesi",
    signInBody: "Portaali on sidottu tiliisi, joten tiedämme mihin yritykseen kuulut.",
    signIn: "Kirjaudu sisään",
    applyTitle: "Kerro yrityksestäsi",
    applyBody: "Tämän lukee oikea ihminen. Kun sinut on hyväksytty, koodisi ilmestyy tähän.",
    company: "Yrityksen nimi",
    contact: "Nimesi",
    country: "Maa",
    category: "Mitä teette",
    website: "Verkkosivu (vapaaehtoinen)",
    benefit: "Etu, jonka haluat tarjota jäsenille (vapaaehtoinen)",
    apply: "Lähetä hakemus",
    applying: "Lähetetään…",
    applyError: "Jokin meni pieleen. Tarkista kentät ja yritä uudelleen.",
    pendingTitle: "Hakemuksesi on saapunut",
    pendingBody: "Luemme jokaisen itse. Kuulet meistä sähköpostitse, ja koodisi ilmestyy tälle sivulle hyväksynnän jälkeen.",
    pausedTitle: "Listauksesi on tauolla",
    pausedBody: "Kirjoita meille, kun haluat jatkaa.",
    codeTitle: "Asiakaskoodisi",
    codeBody: "Anna tämä asiakkaillesi. Se antaa 25 % alennuksen DoggMatch+:n ensimmäisestä vuodesta.",
    createCode: "Luo koodini",
    creating: "Luodaan…",
    copyCode: "Kopioi koodi",
    copied: "Kopioitu",
    statsTitle: "Jäsenet kauttasi",
    joinedLabel: "Liittyi",
    startedLabel: "Aloitti maksun",
    discountLabel: "Annettu alennus",
    noneYet: "Kukaan ei ole vielä käyttänyt koodiasi. Se vie usein hetken.",
    tableDate: "Päivä",
    tableStatus: "Tila",
    tablePlan: "Jäsenyys",
    statusStarted: "Aloitettu",
    statusJoined: "Liittyi",
    adminTitle: "Kumppanit",
    approve: "Hyväksy",
    pause: "Tauolle",
    noPartners: "Ei vielä kumppaneita.",
    privacyNote: "Näytämme vain päivän ja tilan — emme koskaan jäsenen nimeä tai sähköpostia.",
  },
  de: {
    eyebrow: "Partnerportal",
    heading: "Deine Seite der Partnerschaft",
    intro: "Dein Kundencode, die Mitglieder, die über dich dazugekommen sind, und wie der Rabatt von 25 % im ersten Jahr genutzt wird.",
    signInTitle: "Melde dich an, um fortzufahren",
    signInBody: "Das Portal hängt an deinem Konto, damit wir wissen, zu welchem Betrieb du gehörst.",
    signIn: "Anmelden",
    applyTitle: "Erzähl uns von deinem Betrieb",
    applyBody: "Das liest ein echter Mensch. Sobald du freigeschaltet bist, erscheint dein Code hier.",
    company: "Firmenname",
    contact: "Dein Name",
    country: "Land",
    category: "Was ihr macht",
    website: "Website (optional)",
    benefit: "Der Vorteil, den du Mitgliedern geben möchtest (optional)",
    apply: "Anfrage senden",
    applying: "Wird gesendet …",
    applyError: "Da ist etwas schiefgelaufen. Schau kurz über die Felder und versuch es noch einmal.",
    pendingTitle: "Deine Anfrage ist da",
    pendingBody: "Wir lesen jede selbst. Du hörst per E-Mail von uns, und dein Code erscheint hier, sobald du freigeschaltet bist.",
    pausedTitle: "Dein Eintrag pausiert",
    pausedBody: "Schreib uns, wann immer du wieder starten möchtest.",
    codeTitle: "Dein Kundencode",
    codeBody: "Gib ihn deinen Kundinnen und Kunden. Er gibt 25 % auf das erste Jahr DoggMatch+.",
    createCode: "Meinen Code erstellen",
    creating: "Wird erstellt …",
    copyCode: "Code kopieren",
    copied: "Kopiert",
    statsTitle: "Mitglieder über dich",
    joinedLabel: "Beigetreten",
    startedLabel: "Zahlung begonnen",
    discountLabel: "Gewährter Rabatt",
    noneYet: "Noch hat niemand deinen Code benutzt. Das dauert oft ein Weilchen.",
    tableDate: "Datum",
    tableStatus: "Status",
    tablePlan: "Tarif",
    statusStarted: "Begonnen",
    statusJoined: "Beigetreten",
    adminTitle: "Partner",
    approve: "Freischalten",
    pause: "Pausieren",
    noPartners: "Noch keine Partner.",
    privacyNote: "Wir zeigen dir nur Datum und Status — nie Name oder E-Mail eines Mitglieds.",
  },
  fr: {
    eyebrow: "Espace partenaire",
    heading: "Votre côté du partenariat",
    intro: "Votre code client, les membres arrivés grâce à vous, et l'usage de la remise de 25 % la première année.",
    signInTitle: "Connectez-vous pour continuer",
    signInBody: "L'espace est lié à votre compte, pour que nous sachions à quelle entreprise vous appartenez.",
    signIn: "Se connecter",
    applyTitle: "Parlez-nous de votre entreprise",
    applyBody: "Une vraie personne vous lit. Une fois validé, votre code apparaît ici.",
    company: "Nom de l'entreprise",
    contact: "Votre nom",
    country: "Pays",
    category: "Votre activité",
    website: "Site web (facultatif)",
    benefit: "L'avantage que vous souhaitez offrir aux membres (facultatif)",
    apply: "Envoyer la demande",
    applying: "Envoi…",
    applyError: "Quelque chose n'a pas fonctionné. Vérifiez les champs et réessayez.",
    pendingTitle: "Nous avons bien votre demande",
    pendingBody: "Nous lisons chacune nous-mêmes. Vous aurez un mot par e-mail, et votre code apparaîtra ici une fois validé.",
    pausedTitle: "Votre fiche est en pause",
    pausedBody: "Écrivez-nous quand vous voulez reprendre.",
    codeTitle: "Votre code client",
    codeBody: "Donnez-le à vos clients. Il offre 25 % sur leur première année de DoggMatch+.",
    createCode: "Créer mon code",
    creating: "Création…",
    copyCode: "Copier le code",
    copied: "Copié",
    statsTitle: "Membres venus par vous",
    joinedLabel: "Ont adhéré",
    startedLabel: "Paiement commencé",
    discountLabel: "Remise accordée",
    noneYet: "Personne n'a encore utilisé votre code. Cela prend souvent un peu de temps.",
    tableDate: "Date",
    tableStatus: "Statut",
    tablePlan: "Formule",
    statusStarted: "Commencé",
    statusJoined: "Adhéré",
    adminTitle: "Partenaires",
    approve: "Valider",
    pause: "Mettre en pause",
    noPartners: "Aucun partenaire pour l'instant.",
    privacyNote: "Nous n'affichons que la date et le statut — jamais le nom ni l'e-mail d'un membre.",
  },
  nl: {
    eyebrow: "Partnerportaal",
    heading: "Jouw kant van de samenwerking",
    intro: "Je klantcode, de leden die via jou zijn binnengekomen, en hoe de korting van 25% in het eerste jaar wordt gebruikt.",
    signInTitle: "Log in om verder te gaan",
    signInBody: "Het portaal hangt aan je account, zodat we weten bij welk bedrijf je hoort.",
    signIn: "Inloggen",
    applyTitle: "Vertel ons over je bedrijf",
    applyBody: "Een echt mens leest dit. Zodra je bent goedgekeurd, verschijnt je code hier.",
    company: "Bedrijfsnaam",
    contact: "Je naam",
    country: "Land",
    category: "Wat jullie doen",
    website: "Website (optioneel)",
    benefit: "Het voordeel dat je leden wilt geven (optioneel)",
    apply: "Aanvraag versturen",
    applying: "Versturen…",
    applyError: "Er ging iets mis. Kijk de velden even na en probeer het opnieuw.",
    pendingTitle: "We hebben je aanvraag",
    pendingBody: "We lezen ze allemaal zelf. Je hoort van ons per e-mail, en je code verschijnt hier zodra je bent goedgekeurd.",
    pausedTitle: "Je vermelding staat op pauze",
    pausedBody: "Schrijf ons wanneer je weer wilt starten.",
    codeTitle: "Je klantcode",
    codeBody: "Geef deze aan je klanten. Hij geeft 25% korting op hun eerste jaar DoggMatch+.",
    createCode: "Maak mijn code",
    creating: "Aanmaken…",
    copyCode: "Code kopiëren",
    copied: "Gekopieerd",
    statsTitle: "Leden via jou",
    joinedLabel: "Lid geworden",
    startedLabel: "Betaling gestart",
    discountLabel: "Gegeven korting",
    noneYet: "Nog niemand heeft je code gebruikt. Dat duurt vaak even.",
    tableDate: "Datum",
    tableStatus: "Status",
    tablePlan: "Abonnement",
    statusStarted: "Gestart",
    statusJoined: "Lid geworden",
    adminTitle: "Partners",
    approve: "Goedkeuren",
    pause: "Pauzeren",
    noPartners: "Nog geen partners.",
    privacyNote: "We tonen alleen datum en status — nooit de naam of het e-mailadres van een lid.",
  },
} as const;

function Field({
  label,
  name,
  required,
  textarea,
}: {
  label: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-[0.9375rem] outline-none focus:border-border-strong";
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={3} required={required} className={base} />
      ) : (
        <input type="text" name={name} required={required} className={base} />
      )}
    </label>
  );
}

function PortalPage() {
  const c = useCopy(copy);
  const { user, loading } = useAuth();
  const queryClient = useQueryClient();

  const fetchAccount = useServerFn(getPartnerAccount);
  const fetchStats = useServerFn(getPartnerStats);
  const fetchPartners = useServerFn(listPartners);
  const apply = useServerFn(applyForPortal);
  const issue = useServerFn(issuePartnerCode);
  const setStatus = useServerFn(setPartnerStatus);

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const account = useQuery({
    queryKey: ["partner-account", user?.id ?? "anon"],
    queryFn: () => fetchAccount(),
    enabled: Boolean(user),
  });
  const partner = account.data?.partner ?? null;
  const isAdmin = account.data?.isAdmin ?? false;

  const stats = useQuery({
    queryKey: ["partner-stats", partner?.id ?? "none"],
    queryFn: () => fetchStats(),
    enabled: Boolean(partner && partner.status === "approved"),
  });

  const partners = useQuery({
    queryKey: ["all-partners"],
    queryFn: () => fetchPartners(),
    enabled: isAdmin,
  });

  async function onApply(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusy(true);
    setError(null);
    const res = await apply({
      data: {
        company: String(form.get("company") ?? ""),
        contactName: String(form.get("contactName") ?? ""),
        country: String(form.get("country") ?? ""),
        category: String(form.get("category") ?? ""),
        website: String(form.get("website") ?? ""),
        benefit: String(form.get("benefit") ?? ""),
      },
    });
    setBusy(false);
    if (!res.ok) {
      setError(c.applyError);
      return;
    }
    void queryClient.invalidateQueries({ queryKey: ["partner-account"] });
    void account.refetch();
  }

  async function onIssue() {
    setBusy(true);
    await issue();
    setBusy(false);
    void account.refetch();
  }

  async function onSetStatus(partnerId: string, status: "approved" | "paused") {
    await setStatus({ data: { partnerId, status } });
    void partners.refetch();
  }

  return (
    <Section>
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">{c.heading}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>

      {!loading && !user && (
        <Panel className="mt-12">
          <h2 className="text-2xl">{c.signInTitle}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.signInBody}</p>
          <div className="mt-6">
            <ButtonLink to={withLangPrefix("/auth")} search={{ next: "/partners/portal" }}>
              {c.signIn} <Arrow />
            </ButtonLink>
          </div>
        </Panel>
      )}

      {user && !account.isLoading && !partner && (
        <Panel className="mt-12">
          <h2 className="text-2xl">{c.applyTitle}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.applyBody}</p>
          <form onSubmit={onApply} className="mt-8 grid max-w-2xl gap-5">
            <Field label={c.company} name="company" required />
            <Field label={c.contact} name="contactName" required />
            <Field label={c.country} name="country" required />
            <Field label={c.category} name="category" required />
            <Field label={c.website} name="website" />
            <Field label={c.benefit} name="benefit" textarea />
            <button
              type="submit"
              disabled={busy}
              className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-[0.9375rem] font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
            >
              {busy ? c.applying : c.apply}
            </button>
            {error && (
              <p role="alert" className="text-sm text-accent">
                {error}
              </p>
            )}
          </form>
        </Panel>
      )}

      {partner && partner.status === "pending" && (
        <Panel className="mt-12">
          <h2 className="text-2xl">{c.pendingTitle}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.pendingBody}</p>
        </Panel>
      )}

      {partner && partner.status === "paused" && (
        <Panel className="mt-12">
          <h2 className="text-2xl">{c.pausedTitle}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.pausedBody}</p>
        </Panel>
      )}

      {partner && partner.status === "approved" && (
        <>
          <Panel className="mt-12">
            <h2 className="text-2xl">{c.codeTitle}</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.codeBody}</p>
            {partner.code ? (
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="rounded-2xl border border-border-strong px-6 py-4 font-mono text-2xl tracking-[0.2em]">
                  {partner.code}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    void navigator.clipboard.writeText(partner.code ?? "");
                    setCopiedCode(true);
                    window.setTimeout(() => setCopiedCode(false), 2000);
                  }}
                  className="rounded-full border border-border-strong px-6 py-3 text-sm hover:bg-surface"
                >
                  {copiedCode ? c.copied : c.copyCode}
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={onIssue}
                disabled={busy}
                className="mt-6 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-[0.9375rem] font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
              >
                {busy ? c.creating : c.createCode}
              </button>
            )}
          </Panel>

          <Panel className="mt-8">
            <h2 className="text-2xl">{c.statsTitle}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border p-5">
                <p className="text-3xl">{stats.data?.joined ?? 0}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.joinedLabel}</p>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <p className="text-3xl">{stats.data?.started ?? 0}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.startedLabel}</p>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <p className="text-3xl">25%</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.discountLabel}</p>
              </div>
            </div>

            {(stats.data?.referrals.length ?? 0) === 0 ? (
              <p className="mt-6 text-muted-foreground">{c.noneYet}</p>
            ) : (
              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-muted-foreground">
                    <tr>
                      <th className="py-2 pr-6 font-normal">{c.tableDate}</th>
                      <th className="py-2 pr-6 font-normal">{c.tableStatus}</th>
                      <th className="py-2 font-normal">{c.tablePlan}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.data?.referrals.map((r) => (
                      <tr key={r.id} className="border-t border-border/60">
                        <td className="py-3 pr-6">{new Date(r.createdAt).toLocaleDateString()}</td>
                        <td className="py-3 pr-6">
                          {r.status === "joined" ? c.statusJoined : c.statusStarted}
                        </td>
                        <td className="py-3">{r.plan ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="mt-6 text-sm text-muted-foreground">{c.privacyNote}</p>
          </Panel>
        </>
      )}

      {isAdmin && (
        <Panel className="mt-8">
          <h2 className="text-2xl">{c.adminTitle}</h2>
          {(partners.data?.length ?? 0) === 0 ? (
            <p className="mt-4 text-muted-foreground">{c.noPartners}</p>
          ) : (
            <ul className="mt-6 divide-y divide-border/60">
              {partners.data?.map((p) => (
                <li key={p.id} className="flex flex-wrap items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-[0.9375rem]">{p.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {p.country} · {p.category} · {p.status}
                      {p.code ? ` · ${p.code}` : ""}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => void onSetStatus(p.id, "approved")}
                      className="rounded-full border border-border-strong px-5 py-2 text-sm hover:bg-surface"
                    >
                      {c.approve}
                    </button>
                    <button
                      type="button"
                      onClick={() => void onSetStatus(p.id, "paused")}
                      className="rounded-full border border-border px-5 py-2 text-sm hover:bg-surface"
                    >
                      {c.pause}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      )}
    </Section>
  );
}
