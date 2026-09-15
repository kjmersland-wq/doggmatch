import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/use-auth";
import { Arrow, Button, Eyebrow, Section } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";
import { resetCopy } from "@/lib/auth/reset-copy";

const title = "Sign in — Your DoggMatch account | DoggMatch";
const description =
  "Sign in to DoggMatch to look after your membership, your dog's pages and everything you've saved.";

type Search = { next?: string };

export const Route = createFileRoute("/{-$lang}/auth")({
  validateSearch: (search: Record<string, unknown>): Search =>
    typeof search["next"] === "string" && search["next"].startsWith("/")
      ? { next: search["next"] }
      : {},
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
    ],
    links: [{ rel: "canonical", href: abs("/auth") }],
  }),
  component: AuthPage,
});

const fieldClass =
  "mt-2 h-14 w-full rounded-2xl border border-border bg-background px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-border-strong";

const copy = {
  en: {
    eyebrow: "Your account",
    welcomeBack: "Welcome back",
    letsSetUp: "Let's get you set up",
    intro:
      "You only need an account for DoggMatch+ and anything we keep for you. Everything else on DoggMatch stays free and open.",
    google: "Continue with Google",
    orWithEmail: "or with email",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 8 characters",
    signingIn: "One moment…",
    signIn: "Sign in",
    createAccount: "Create my account",
    noAccount: "No account yet?",
    haveAccount: "Already have an account?",
    createOne: "Create one",
    signInInstead: "Sign in instead",
    signUpNotice: "Almost there — check your inbox and confirm your email address.",
    genericError: "Something went wrong. Please try again.",
    configError: "Sign-in is temporarily unavailable. Please try again shortly.",
    googleError: "We couldn't sign you in with Google just then. Please try again.",
    magicLinkCta: "Email me a sign-in link instead",
    magicLinkSending: "Sending…",
    magicLinkSent: "Check your inbox — click the link we sent to sign in, no password needed.",
    magicLinkNeedsEmail: "Enter your email address above first.",
  },
  no: {
    eyebrow: "Kontoen din",
    welcomeBack: "Velkommen tilbake",
    letsSetUp: "La oss sette deg opp",
    intro:
      "Du trenger bare en konto for DoggMatch+ og alt vi lagrer for deg. Alt annet på DoggMatch er fortsatt gratis og åpent.",
    google: "Fortsett med Google",
    orWithEmail: "eller med e-post",
    emailLabel: "E-postadresse",
    emailPlaceholder: "du@eksempel.no",
    passwordLabel: "Passord",
    passwordPlaceholder: "Minst 8 tegn",
    signingIn: "Ett øyeblikk …",
    signIn: "Logg inn",
    createAccount: "Opprett kontoen min",
    noAccount: "Har du ikke konto ennå?",
    haveAccount: "Har du allerede konto?",
    createOne: "Opprett en",
    signInInstead: "Logg inn i stedet",
    signUpNotice: "Nesten der — sjekk innboksen din og bekreft e-postadressen.",
    genericError: "Noe gikk galt. Prøv gjerne igjen.",
    configError: "Innlogging er midlertidig utilgjengelig. Prøv igjen om litt.",
    googleError: "Vi klarte ikke å logge deg inn med Google akkurat nå. Prøv gjerne igjen.",
    magicLinkCta: "Send meg en innloggingslenke i stedet",
    magicLinkSending: "Sender …",
    magicLinkSent: "Sjekk innboksen din — klikk på lenken vi sendte for å logge inn, uten passord.",
    magicLinkNeedsEmail: "Skriv inn e-postadressen din ovenfor først.",
  },
  pl: {
    eyebrow: "Twoje konto",
    welcomeBack: "Witaj z powrotem",
    letsSetUp: "Załóżmy Ci konto",
    intro:
      "Konto potrzebne jest tylko do DoggMatch+ i tego, co przechowujemy dla Ciebie. Reszta DoggMatch pozostaje bezpłatna i otwarta dla wszystkich.",
    google: "Kontynuuj z Google",
    orWithEmail: "lub przez e-mail",
    emailLabel: "Adres e-mail",
    emailPlaceholder: "ty@przyklad.pl",
    passwordLabel: "Hasło",
    passwordPlaceholder: "Co najmniej 8 znaków",
    signingIn: "Chwileczkę…",
    signIn: "Zaloguj się",
    createAccount: "Utwórz moje konto",
    noAccount: "Nie masz jeszcze konta?",
    haveAccount: "Masz już konto?",
    createOne: "Utwórz je",
    signInInstead: "Zaloguj się zamiast tego",
    signUpNotice: "Już prawie gotowe — sprawdź swoją skrzynkę i potwierdź adres e-mail.",
    genericError: "Coś poszło nie tak. Spróbuj ponownie.",
    configError: "Logowanie jest chwilowo niedostępne. Spróbuj ponownie za chwilę.",
    googleError: "Nie udało się zalogować przez Google. Spróbuj ponownie.",
    magicLinkCta: "Wyślij mi zamiast tego link do logowania",
    magicLinkSending: "Wysyłanie…",
    magicLinkSent: "Sprawdź skrzynkę — kliknij wysłany link, aby się zalogować, bez hasła.",
    magicLinkNeedsEmail: "Najpierw wpisz swój adres e-mail powyżej.",
  },
  dk: {
    eyebrow: "Din konto",
    welcomeBack: "Velkommen tilbage",
    letsSetUp: "Lad os sætte dig op",
    intro:
      "Du skal kun bruge en konto til DoggMatch+ og alt det, vi gemmer for dig. Alt andet på DoggMatch er stadig gratis og åbent.",
    google: "Fortsæt med Google",
    orWithEmail: "eller med e-mail",
    emailLabel: "E-mailadresse",
    emailPlaceholder: "dig@eksempel.dk",
    passwordLabel: "Adgangskode",
    passwordPlaceholder: "Mindst 8 tegn",
    signingIn: "Et øjeblik…",
    signIn: "Log ind",
    createAccount: "Opret min konto",
    noAccount: "Ingen konto endnu?",
    haveAccount: "Har du allerede en konto?",
    createOne: "Opret en",
    signInInstead: "Log ind i stedet",
    signUpNotice: "Næsten der — tjek din indbakke og bekræft din e-mailadresse.",
    genericError: "Noget gik galt. Prøv venligst igen.",
    configError: "Log ind er midlertidigt utilgængeligt. Prøv igen om lidt.",
    googleError: "Vi kunne ikke logge dig ind med Google lige nu. Prøv venligst igen.",
    magicLinkCta: "Send mig et login-link i stedet",
    magicLinkSending: "Sender …",
    magicLinkSent: "Tjek din indbakke — klik på linket, vi sendte, for at logge ind, uden adgangskode.",
    magicLinkNeedsEmail: "Indtast din e-mailadresse ovenfor først.",
  },
  se: {
    eyebrow: "Ditt konto",
    welcomeBack: "Välkommen tillbaka",
    letsSetUp: "Nu sätter vi upp dig",
    intro:
      "Du behöver bara ett konto för DoggMatch+ och det vi sparar åt dig. Allt annat på DoggMatch är fortsatt gratis och öppet.",
    google: "Fortsätt med Google",
    orWithEmail: "eller med e-post",
    emailLabel: "E-postadress",
    emailPlaceholder: "du@exempel.se",
    passwordLabel: "Lösenord",
    passwordPlaceholder: "Minst 8 tecken",
    signingIn: "Ett ögonblick…",
    signIn: "Logga in",
    createAccount: "Skapa mitt konto",
    noAccount: "Inget konto än?",
    haveAccount: "Har du redan ett konto?",
    createOne: "Skapa ett",
    signInInstead: "Logga in istället",
    signUpNotice: "Nästan klart — kolla din inkorg och bekräfta din e-postadress.",
    genericError: "Något gick fel. Försök igen.",
    configError: "Inloggning är tillfälligt otillgänglig. Försök igen om en liten stund.",
    googleError: "Vi kunde inte logga in dig med Google just nu. Försök igen.",
    magicLinkCta: "Skicka mig en inloggningslänk istället",
    magicLinkSending: "Skickar …",
    magicLinkSent: "Kolla din inkorg — klicka på länken vi skickade för att logga in, utan lösenord.",
    magicLinkNeedsEmail: "Ange din e-postadress ovan först.",
  },
  fi: {
    eyebrow: "Tilisi",
    welcomeBack: "Tervetuloa takaisin",
    letsSetUp: "Perustetaan sinulle tili",
    intro:
      "Tarvitset tilin vain DoggMatch+:aa ja sitä varten, mitä tallennamme puolestasi. Kaikki muu DoggMatchissa pysyy ilmaisena ja avoimena.",
    google: "Jatka Googlella",
    orWithEmail: "tai sähköpostilla",
    emailLabel: "Sähköpostiosoite",
    emailPlaceholder: "sina@esimerkki.fi",
    passwordLabel: "Salasana",
    passwordPlaceholder: "Vähintään 8 merkkiä",
    signingIn: "Hetki…",
    signIn: "Kirjaudu sisään",
    createAccount: "Luo tilini",
    noAccount: "Eikö sinulla ole vielä tiliä?",
    haveAccount: "Onko sinulla jo tili?",
    createOne: "Luo tili",
    signInInstead: "Kirjaudu sisään sen sijaan",
    signUpNotice: "Melkein valmista — tarkista sähköpostisi ja vahvista osoitteesi.",
    genericError: "Jokin meni pieleen. Yritä uudelleen.",
    configError: "Kirjautuminen ei ole juuri nyt käytettävissä. Yritä pian uudelleen.",
    googleError: "Emme voineet kirjata sinua sisään Googlella juuri nyt. Yritä uudelleen.",
    magicLinkCta: "Lähetä minulle kirjautumislinkki sen sijaan",
    magicLinkSending: "Lähetetään…",
    magicLinkSent: "Tarkista sähköpostisi — kirjaudu sisään lähettämämme linkin kautta, ilman salasanaa.",
    magicLinkNeedsEmail: "Kirjoita ensin sähköpostiosoitteesi yllä.",
  },
  de: {
    eyebrow: "Dein Konto",
    welcomeBack: "Willkommen zurück",
    letsSetUp: "Lass uns dich einrichten",
    intro:
      "Ein Konto brauchst du nur für DoggMatch+ und alles, was wir für dich speichern. Alles andere bei DoggMatch bleibt kostenlos und offen.",
    google: "Weiter mit Google",
    orWithEmail: "oder mit E-Mail",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "du@beispiel.de",
    passwordLabel: "Passwort",
    passwordPlaceholder: "Mindestens 8 Zeichen",
    signingIn: "Einen Moment…",
    signIn: "Anmelden",
    createAccount: "Mein Konto erstellen",
    noAccount: "Noch kein Konto?",
    haveAccount: "Schon ein Konto?",
    createOne: "Konto erstellen",
    signInInstead: "Stattdessen anmelden",
    signUpNotice: "Fast geschafft — sieh in dein Postfach und bestätige deine E-Mail-Adresse.",
    genericError: "Etwas ist schiefgelaufen. Bitte versuch es noch einmal.",
    configError: "Die Anmeldung ist vorübergehend nicht verfügbar. Bitte versuch es in Kürze erneut.",
    googleError: "Wir konnten dich gerade nicht mit Google anmelden. Bitte versuch es noch einmal.",
    magicLinkCta: "Stattdessen einen Anmeldelink zuschicken",
    magicLinkSending: "Wird gesendet …",
    magicLinkSent: "Sieh in dein Postfach — klicke auf den gesendeten Link, um dich ohne Passwort anzumelden.",
    magicLinkNeedsEmail: "Gib zuerst deine E-Mail-Adresse oben ein.",
  },
  fr: {
    eyebrow: "Votre compte",
    welcomeBack: "Content de vous revoir",
    letsSetUp: "Configurons votre compte",
    intro:
      "Un compte n'est nécessaire que pour DoggMatch+ et ce que nous conservons pour vous. Tout le reste sur DoggMatch reste gratuit et ouvert.",
    google: "Continuer avec Google",
    orWithEmail: "ou avec un e-mail",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.fr",
    passwordLabel: "Mot de passe",
    passwordPlaceholder: "Au moins 8 caractères",
    signingIn: "Un instant…",
    signIn: "Se connecter",
    createAccount: "Créer mon compte",
    noAccount: "Pas encore de compte ?",
    haveAccount: "Vous avez déjà un compte ?",
    createOne: "En créer un",
    signInInstead: "Se connecter à la place",
    signUpNotice: "Presque terminé — vérifiez votre boîte mail et confirmez votre adresse e-mail.",
    genericError: "Une erreur s'est produite. Veuillez réessayer.",
    configError: "La connexion est temporairement indisponible. Veuillez réessayer sous peu.",
    googleError:
      "Nous n'avons pas pu vous connecter avec Google pour l'instant. Veuillez réessayer.",
    magicLinkCta: "M'envoyer un lien de connexion à la place",
    magicLinkSending: "Envoi…",
    magicLinkSent:
      "Vérifiez votre boîte mail — cliquez sur le lien envoyé pour vous connecter, sans mot de passe.",
    magicLinkNeedsEmail: "Saisissez d'abord votre adresse e-mail ci-dessus.",
  },
  nl: {
    eyebrow: "Jouw account",
    welcomeBack: "Welkom terug",
    letsSetUp: "Laten we je instellen",
    intro:
      "Je hebt alleen een account nodig voor DoggMatch+ en alles wat we voor je bewaren. Al het andere bij DoggMatch blijft gratis en open.",
    google: "Doorgaan met Google",
    orWithEmail: "of met e-mail",
    emailLabel: "E-mailadres",
    emailPlaceholder: "jij@voorbeeld.nl",
    passwordLabel: "Wachtwoord",
    passwordPlaceholder: "Minstens 8 tekens",
    signingIn: "Een moment…",
    signIn: "Inloggen",
    createAccount: "Mijn account aanmaken",
    noAccount: "Nog geen account?",
    haveAccount: "Heb je al een account?",
    createOne: "Maak er een aan",
    signInInstead: "Toch inloggen",
    signUpNotice: "Bijna klaar — check je inbox en bevestig je e-mailadres.",
    genericError: "Er ging iets mis. Probeer het opnieuw.",
    configError: "Inloggen is tijdelijk niet beschikbaar. Probeer het binnenkort opnieuw.",
    googleError: "We konden je niet inloggen met Google. Probeer het opnieuw.",
    magicLinkCta: "Stuur mij in plaats daarvan een inloglink",
    magicLinkSending: "Verzenden…",
    magicLinkSent: "Check je inbox — klik op de link die we stuurden om in te loggen, zonder wachtwoord.",
    magicLinkNeedsEmail: "Vul eerst uw e-mailadres hierboven in.",
  },
} as const;

/**
 * Supabase client creation failures (missing build-time env vars) surface
 * here as a raw internal error message. Show something honest but calm
 * instead of that string verbatim.
 */
function authErrorMessage(error: unknown, fallback: string, configFallback: string): string {
  if (error instanceof Error) {
    if (error.message.includes("Missing Supabase environment variable")) return configFallback;
    return error.message;
  }
  return fallback;
}

function AuthPage() {
  const c = useCopy(copy);
  const r = useCopy(resetCopy);
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const search = Route.useSearch();
  const next = search.next ?? "/account";

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [magicLinkBusy, setMagicLinkBusy] = useState(false);
  const [resetBusy, setResetBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && user) void navigate({ to: withLangPrefix(next) as never });
  }, [loading, user, next, navigate]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setMessage(null);
    setNotice(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}${next}` },
        });
        if (error) throw error;
        setNotice(c.signUpNotice);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (error) {
      setMessage(authErrorMessage(error, c.genericError, c.configError));
    } finally {
      setBusy(false);
    }
  }

  async function onResetPassword() {
    if (!email.trim()) {
      setMessage(r.needsEmail);
      return;
    }
    setMessage(null);
    setNotice(null);
    setResetBusy(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}${withLangPrefix("/reset-password")}`,
      });
      if (error) throw error;
      setNotice(r.sent);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : r.error);
    } finally {
      setResetBusy(false);
    }
  }

  async function onGoogle() {
    setMessage(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result?.error) setMessage(c.googleError);
  }

  async function onMagicLink() {
    if (!email.trim()) {
      setMessage(c.magicLinkNeedsEmail);
      return;
    }
    setMessage(null);
    setNotice(null);
    setMagicLinkBusy(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}${next}` },
      });
      if (error) throw error;
      setNotice(c.magicLinkSent);
    } catch (error) {
      setMessage(authErrorMessage(error, c.genericError, c.configError));
    } finally {
      setMagicLinkBusy(false);
    }
  }

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">
          {mode === "signin" ? c.welcomeBack : c.letsSetUp}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      <Section className="container-page">
        <div className="max-w-md rounded-[1.5rem] border border-border bg-surface p-6 sm:p-8">
          <button
            type="button"
            onClick={onGoogle}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-border-strong px-6 text-base font-medium transition-colors hover:bg-background"
          >
            {c.google}
          </button>

          <div className="my-7 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            {c.orWithEmail}
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="auth-email" className="text-[0.9375rem] font-medium">
              {c.emailLabel}
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
              placeholder={c.emailPlaceholder}
            />

            <div className="mt-5">
              <label htmlFor="auth-password" className="text-[0.9375rem] font-medium">
                {c.passwordLabel}
              </label>
              <input
                id="auth-password"
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={fieldClass}
                placeholder={c.passwordPlaceholder}
              />
            </div>

            <Button type="submit" size="lg" disabled={busy} className="mt-7 w-full">
              {busy ? c.signingIn : mode === "signin" ? c.signIn : c.createAccount}
              {!busy && <Arrow />}
            </Button>
          </form>

          {message && (
            <p role="alert" className="mt-5 text-sm leading-relaxed text-accent">
              {message}
            </p>
          )}
          {notice && (
            <p role="status" className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {notice}
            </p>
          )}

          {mode === "signin" && (
            <>
              <button
                type="button"
                onClick={onMagicLink}
                disabled={magicLinkBusy}
                className="mt-4 w-full text-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline disabled:opacity-70"
              >
                {magicLinkBusy ? c.magicLinkSending : c.magicLinkCta}
              </button>
              <button
                type="button"
                onClick={onResetPassword}
                disabled={resetBusy}
                className="mt-3 w-full text-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline disabled:opacity-70"
              >
                {resetBusy ? r.sending : r.forgot}
              </button>
            </>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            {mode === "signin" ? c.noAccount : c.haveAccount}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setMessage(null);
                setNotice(null);
              }}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {mode === "signin" ? c.createOne : c.signInInstead}
            </button>
          </p>
        </div>
      </Section>
    </div>
  );
}
