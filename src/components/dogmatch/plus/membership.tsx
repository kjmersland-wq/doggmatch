import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { useMembership } from "@/hooks/use-membership";
import { openBillingPortal } from "@/lib/plus/stripe.functions";
import { Panel } from "@/components/dogmatch/care/parts";
import { Button, ButtonLink } from "@/components/dogmatch/ui";
import { useCopy, useLocale, INTL_LOCALE } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border/60 py-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-right text-[0.9375rem]">{value}</span>
    </div>
  );
}

const copy = {
  en: {
    you: "You",
    email: "Email",
    notSignedIn: "Not signed in",
    language: "Language",
    languageValue: "English",
    signedInBody: "You're signed in. Everything you've filled in about your dog is still saved on this device.",
    signOut: "Sign out",
    guestBody: "You don't need an account to use DoggMatch. You only need one for DoggMatch+.",
    signIn: "Sign in",
    membership: "Membership",
    plan: "Plan",
    checking: "Checking…",
    planYearly: "DoggMatch+ yearly",
    planMonthly: "DoggMatch+ monthly",
    free: "Free",
    ends: "Ends",
    renews: "Renews",
    dash: "—",
    endingBody: "Your membership is set to end, and you'll keep everything until then.",
    activeBody: "Thank you for being a member. You can change or cancel this yourself at any time.",
    printCard: "Print my member card",
    manage: "Manage my membership",
    manageBusy: "One moment…",
    freeBodyPrefix: "Everything you can see today is free.",
    freeBodySuffix: "adds the tools for daily life with your dog.",
    portalError: "We couldn't open your billing page just then. Please try again.",
  },
  no: {
    you: "Deg",
    email: "E-post",
    notSignedIn: "Ikke logget inn",
    language: "Språk",
    languageValue: "Norsk",
    signedInBody: "Du er logget inn. Alt du har fylt inn om hunden din er fortsatt lagret på denne enheten.",
    signOut: "Logg ut",
    guestBody: "Du trenger ikke konto for å bruke DoggMatch. Du trenger bare en for DoggMatch+.",
    signIn: "Logg inn",
    membership: "Medlemskap",
    plan: "Plan",
    checking: "Sjekker …",
    planYearly: "DoggMatch+ årlig",
    planMonthly: "DoggMatch+ månedlig",
    free: "Gratis",
    ends: "Avsluttes",
    renews: "Fornyes",
    dash: "—",
    endingBody: "Medlemskapet ditt er satt til å avsluttes, og du beholder alt fram til da.",
    activeBody: "Takk for at du er medlem. Du kan endre eller si opp dette selv når som helst.",
    printCard: "Skriv ut medlemskortet mitt",
    manage: "Administrer medlemskapet mitt",
    manageBusy: "Ett øyeblikk …",
    freeBodyPrefix: "Alt du kan se i dag er gratis.",
    freeBodySuffix: "gir deg verktøyene for hverdagen med hunden din.",
    portalError: "Vi klarte ikke å åpne fakturasiden din akkurat nå. Prøv gjerne igjen.",
  },
  pl: {
    you: "Ty",
    email: "E-mail",
    notSignedIn: "Niezalogowany",
    language: "Język",
    languageValue: "Polski",
    signedInBody: "Jesteś zalogowany. Wszystko, co wpisałeś o swoim psie, nadal jest zapisane na tym urządzeniu.",
    signOut: "Wyloguj się",
    guestBody: "Nie potrzebujesz konta, by korzystać z DoggMatch. Potrzebujesz go tylko dla DoggMatch+.",
    signIn: "Zaloguj się",
    membership: "Członkostwo",
    plan: "Plan",
    checking: "Sprawdzanie…",
    planYearly: "DoggMatch+ roczny",
    planMonthly: "DoggMatch+ miesięczny",
    free: "Bezpłatny",
    ends: "Kończy się",
    renews: "Odnawia się",
    dash: "—",
    endingBody: "Twoje członkostwo ma się zakończyć, a do tego czasu zachowujesz wszystko.",
    activeBody: "Dziękujemy, że jesteś z nami. W każdej chwili możesz to zmienić lub anulować samodzielnie.",
    printCard: "Wydrukuj moją kartę członkowską",
    manage: "Zarządzaj moim członkostwem",
    manageBusy: "Chwileczkę…",
    freeBodyPrefix: "Wszystko, co widzisz dziś, jest bezpłatne.",
    freeBodySuffix: "dodaje narzędzia do codziennego życia z psem.",
    portalError: "Nie udało się teraz otworzyć strony rozliczeń. Spróbuj ponownie.",
  },
  dk: {
    you: "Dig",
    email: "E-mail",
    notSignedIn: "Ikke logget ind",
    language: "Sprog",
    languageValue: "Dansk",
    signedInBody: "Du er logget ind. Alt, du har udfyldt om din hund, er stadig gemt på denne enhed.",
    signOut: "Log ud",
    guestBody: "Du behøver ikke en konto for at bruge DoggMatch. Du skal kun bruge en til DoggMatch+.",
    signIn: "Log ind",
    membership: "Medlemskab",
    plan: "Plan",
    checking: "Tjekker …",
    planYearly: "DoggMatch+ årligt",
    planMonthly: "DoggMatch+ månedligt",
    free: "Gratis",
    ends: "Ophører",
    renews: "Fornyes",
    dash: "—",
    endingBody: "Dit medlemskab er sat til at ophøre, og du beholder alt indtil da.",
    activeBody: "Tak, fordi du er medlem. Du kan selv ændre eller opsige det når som helst.",
    printCard: "Print mit medlemskort",
    manage: "Administrer mit medlemskab",
    manageBusy: "Et øjeblik …",
    freeBodyPrefix: "Alt, du kan se i dag, er gratis.",
    freeBodySuffix: "tilføjer værktøjerne til hverdagen med din hund.",
    portalError: "Vi kunne ikke åbne din faktureringsside lige nu. Prøv venligst igen.",
  },
  se: {
    you: "Du",
    email: "E-post",
    notSignedIn: "Inte inloggad",
    language: "Språk",
    languageValue: "Svenska",
    signedInBody: "Du är inloggad. Allt du har fyllt i om din hund finns fortfarande sparat på den här enheten.",
    signOut: "Logga ut",
    guestBody: "Du behöver inget konto för att använda DoggMatch. Du behöver bara ett för DoggMatch+.",
    signIn: "Logga in",
    membership: "Medlemskap",
    plan: "Plan",
    checking: "Kontrollerar …",
    planYearly: "DoggMatch+ årsvis",
    planMonthly: "DoggMatch+ månadsvis",
    free: "Gratis",
    ends: "Upphör",
    renews: "Förnyas",
    dash: "—",
    endingBody: "Ditt medlemskap är inställt på att upphöra, och du behåller allt fram till dess.",
    activeBody: "Tack för att du är medlem. Du kan själv ändra eller säga upp det när som helst.",
    printCard: "Skriv ut mitt medlemskort",
    manage: "Hantera mitt medlemskap",
    manageBusy: "Ett ögonblick …",
    freeBodyPrefix: "Allt du kan se idag är gratis.",
    freeBodySuffix: "lägger till verktygen för vardagen med din hund.",
    portalError: "Vi kunde inte öppna din faktureringssida just nu. Försök gärna igen.",
  },
  fi: {
    you: "Sinä",
    email: "Sähköposti",
    notSignedIn: "Ei kirjautunut sisään",
    language: "Kieli",
    languageValue: "Suomi",
    signedInBody: "Olet kirjautunut sisään. Kaikki koirastasi antamasi tiedot on yhä tallennettu tälle laitteelle.",
    signOut: "Kirjaudu ulos",
    guestBody: "DoggMatchin käyttöön ei tarvita tiliä. Tarvitset sen vain DoggMatch+:aa varten.",
    signIn: "Kirjaudu sisään",
    membership: "Jäsenyys",
    plan: "Paketti",
    checking: "Tarkistetaan…",
    planYearly: "DoggMatch+ vuosittain",
    planMonthly: "DoggMatch+ kuukausittain",
    free: "Ilmainen",
    ends: "Päättyy",
    renews: "Uusiutuu",
    dash: "—",
    endingBody: "Jäsenyytesi on määrätty päättymään, ja säilytät kaiken siihen asti.",
    activeBody: "Kiitos, että olet jäsen. Voit muuttaa tai peruuttaa sen itse milloin tahansa.",
    printCard: "Tulosta jäsenkorttini",
    manage: "Hallinnoi jäsenyyttäni",
    manageBusy: "Hetkinen…",
    freeBodyPrefix: "Kaikki, mitä näet tänään, on ilmaista.",
    freeBodySuffix: "tuo työkalut koirasi kanssa elettävään arkeen.",
    portalError: "Emme juuri nyt saaneet avattua laskutussivuasi. Yritä uudelleen.",
  },
} as const;

/** Who you are, and where your DoggMatch+ membership stands. */
export function AccountMembership() {
  const c = useCopy(copy);
  const { locale } = useLocale();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { membership, loading } = useMembership();
  const toPortal = useServerFn(openBillingPortal);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function manage() {
    setError(null);
    setBusy(true);
    try {
      const { url } = await toPortal();
      window.location.href = url;
    } catch {
      setError(c.portalError);
      setBusy(false);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    void navigate({ to: withLangPrefix("/") });
  }

  const renews = membership.renewsAt
    ? new Date(membership.renewsAt).toLocaleDateString(INTL_LOCALE[locale], {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : c.dash;

  return (
    <>
      <Panel title={c.you}>
        <Row label={c.email} value={user?.email ?? c.notSignedIn} />
        <Row label={c.language} value={c.languageValue} />
        {user ? (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.signedInBody}</p>
            <Button tone="outline" onClick={signOut} className="mt-5">
              {c.signOut}
            </Button>
          </>
        ) : (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.guestBody}</p>
            <Button onClick={() => void navigate({ to: withLangPrefix("/auth") })} className="mt-5">
              {c.signIn}
            </Button>
          </>
        )}
      </Panel>

      <Panel title={c.membership}>
        <Row
          label={c.plan}
          value={
            loading
              ? c.checking
              : membership.subscribed
                ? membership.plan === "yearly"
                  ? c.planYearly
                  : c.planMonthly
                : c.free
          }
        />
        <Row
          label={membership.cancelsAtPeriodEnd ? c.ends : c.renews}
          value={membership.subscribed ? renews : c.dash}
        />
        {membership.subscribed ? (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {membership.cancelsAtPeriodEnd ? c.endingBody : c.activeBody}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink to={withLangPrefix("/member-card")}>{c.printCard}</ButtonLink>
              <Button tone="outline" onClick={manage} disabled={busy}>
                {busy ? c.manageBusy : c.manage}
              </Button>
            </div>
          </>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {c.freeBodyPrefix}{" "}
            <Link to={withLangPrefix("/plus")} className="text-accent underline-offset-4 hover:underline">
              DoggMatch+
            </Link>{" "}
            {c.freeBodySuffix}
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-sm leading-relaxed text-accent">
            {error}
          </p>
        )}
      </Panel>
    </>
  );
}
