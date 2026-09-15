import type { ReactNode } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section, Toggle } from "@/components/dogmatch/ui";
import { Panel } from "@/components/dogmatch/care/parts";
import { DogSwitcher } from "@/components/dogmatch/care/hub";
import { useMyDog } from "@/lib/care/store";
import { useTrainingState } from "@/lib/training/store";
import { AccountMembership } from "@/components/dogmatch/plus/membership";
import { MemberBenefits } from "@/components/dogmatch/plus/benefits";
import { OwnerProfileCard } from "@/components/dogmatch/account/owner-profile";
import { useMembership } from "@/hooks/use-membership";
import { usePreferences, preferencesStore, type UnitSystem } from "@/lib/account/preferences";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";
import { cn } from "@/lib/utils";

const title = "My Account — Your details and preferences | DoggMatch";
const description =
  "Your name, your language, what you'd like to hear from us, and how your information is kept. Your dog's own pages live under My Dog.";

export const Route = createFileRoute("/{-$lang}/account")({
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
    links: [{ rel: "canonical", href: abs("/account") }],
  }),
  component: AccountPage,
});

function PrefRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-border/60 py-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}

const copy = {
  en: {
    eyebrow: "My Account",
    heading: "Your side of things",
    introPrefix:
      "This page is about you — your details, your language, what you'd like to hear from us. Everything about your dog lives over in",
    myDogLink: "My Dog",
    preferences: "Preferences",
    units: "Units",
    unitsMetric: "Metric",
    unitsImperial: "Imperial",
    unitsNote: "Applies here for now — weight, food and travel pages still show metric.",
    reminders: "Reminders",
    emailFromUs: "Email from us",
    preferencesNote: "We'd rather send nothing than send something you didn't ask for.",
    privacy: "Privacy",
    privacyBody:
      "Your dog's details, weights, training progress and notes stay in this browser. Nothing is uploaded, sold or shared. Clearing your browser data will clear them too — so if something matters, print it and keep a copy.",
    printSave: "Print & save",
    yourDogs: "Your dogs",
    yourDog: "Your dog",
    switchBody:
      "Switch between them here, or add another. Each dog keeps their own food, health, training and documents.",
    noDogBody:
      "You haven't added a dog yet. It only takes a minute, and everything else follows from it.",
    addAnother: "Add another dog",
    addYours: "Add your dog",
  },
  no: {
    eyebrow: "Min konto",
    heading: "Din side av saken",
    introPrefix:
      "Denne siden handler om deg — dine detaljer, ditt språk, hva du ønsker å høre fra oss. Alt om hunden din finner du under",
    myDogLink: "Min hund",
    preferences: "Innstillinger",
    units: "Enheter",
    unitsMetric: "Metrisk",
    unitsImperial: "Imperial",
    unitsNote: "Gjelder foreløpig bare her — vekt, mat og reisesider viser fortsatt metrisk.",
    reminders: "Påminnelser",
    emailFromUs: "E-post fra oss",
    preferencesNote: "Vi sender heller ingenting enn noe du ikke har bedt om.",
    privacy: "Personvern",
    privacyBody:
      "Hundens detaljer, vekt, treningsfremgang og notater lagres i denne nettleseren. Ingenting lastes opp, selges eller deles. Sletter du nettleserdataene, forsvinner de også — så skriv ut det som er viktig, og ta vare på en kopi.",
    printSave: "Skriv ut og lagre",
    yourDogs: "Hundene dine",
    yourDog: "Hunden din",
    switchBody:
      "Bytt mellom dem her, eller legg til en til. Hver hund har sin egen mat, helse, trening og dokumenter.",
    noDogBody:
      "Du har ikke lagt til noen hund ennå. Det tar bare et minutt, og alt annet følger av det.",
    addAnother: "Legg til en hund til",
    addYours: "Legg til hunden din",
  },
  pl: {
    eyebrow: "Moje konto",
    heading: "Twoja strona sprawy",
    introPrefix:
      "Ta strona dotyczy Ciebie — Twoich danych, Twojego języka, tego, co chcesz od nas słyszeć. Wszystko o Twoim psie znajdziesz w",
    myDogLink: "Mój pies",
    preferences: "Preferencje",
    units: "Jednostki",
    unitsMetric: "Metryczne",
    unitsImperial: "Imperialne",
    unitsNote: "Na razie dotyczy tylko tego miejsca — strony wagi, jedzenia i podróży nadal pokazują wartości metryczne.",
    reminders: "Przypomnienia",
    emailFromUs: "Wiadomości od nas",
    preferencesNote: "Wolimy nic nie wysyłać, niż wysłać coś, o co nie prosiłeś.",
    privacy: "Prywatność",
    privacyBody:
      "Dane Twojego psa, waga, postępy w treningu i notatki pozostają w tej przeglądarce. Nic nie jest wysyłane, sprzedawane ani udostępniane. Wyczyszczenie danych przeglądarki usunie je również — więc jeśli coś jest ważne, wydrukuj i zachowaj kopię.",
    printSave: "Drukuj i zachowaj",
    yourDogs: "Twoje psy",
    yourDog: "Twój pies",
    switchBody:
      "Przełączaj się między nimi tutaj albo dodaj kolejnego. Każdy pies ma własne dane o jedzeniu, zdrowiu, treningu i dokumentach.",
    noDogBody:
      "Nie dodałeś jeszcze psa. To zajmuje tylko chwilę, a wszystko inne wynika z tego kroku.",
    addAnother: "Dodaj kolejnego psa",
    addYours: "Dodaj swojego psa",
  },
  dk: {
    eyebrow: "Min konto",
    heading: "Din side af sagen",
    introPrefix:
      "Denne side handler om dig — dine oplysninger, dit sprog, hvad du gerne vil høre fra os. Alt om din hund finder du under",
    myDogLink: "Min hund",
    preferences: "Indstillinger",
    units: "Enheder",
    unitsMetric: "Metrisk",
    unitsImperial: "Imperial",
    unitsNote: "Gælder kun her indtil videre — vægt, mad og rejsesider viser stadig metrisk.",
    reminders: "Påmindelser",
    emailFromUs: "E-mail fra os",
    preferencesNote: "Vi sender hellere ingenting end noget, du ikke har bedt om.",
    privacy: "Privatliv",
    privacyBody:
      "Din hunds oplysninger, vægt, træningsfremskridt og noter forbliver i denne browser. Intet uploades, sælges eller deles. Rydder du browserdata, forsvinder de også — så print det, der betyder noget, og gem en kopi.",
    printSave: "Udskriv og gem",
    yourDogs: "Dine hunde",
    yourDog: "Din hund",
    switchBody:
      "Skift mellem dem her, eller tilføj en mere. Hver hund har sin egen mad, sundhed, træning og dokumenter.",
    noDogBody:
      "Du har ikke tilføjet en hund endnu. Det tager kun et minut, og resten følger derfra.",
    addAnother: "Tilføj endnu en hund",
    addYours: "Tilføj din hund",
  },
  se: {
    eyebrow: "Mitt konto",
    heading: "Din sida av saken",
    introPrefix:
      "Den här sidan handlar om dig — dina uppgifter, ditt språk, vad du vill höra från oss. Allt om din hund hittar du under",
    myDogLink: "Min hund",
    preferences: "Inställningar",
    units: "Enheter",
    unitsMetric: "Metriskt",
    unitsImperial: "Imperial",
    unitsNote: "Gäller bara här tills vidare — vikt, mat och resesidor visar fortfarande metriskt.",
    reminders: "Påminnelser",
    emailFromUs: "E-post från oss",
    preferencesNote: "Vi skickar hellre ingenting än något du inte bad om.",
    privacy: "Integritet",
    privacyBody:
      "Din hunds uppgifter, vikt, träningsframsteg och anteckningar stannar i den här webbläsaren. Inget laddas upp, säljs eller delas. Rensar du webbläsardata försvinner de också — så skriv ut det som är viktigt och spara en kopia.",
    printSave: "Skriv ut och spara",
    yourDogs: "Dina hundar",
    yourDog: "Din hund",
    switchBody:
      "Växla mellan dem här, eller lägg till en till. Varje hund har sin egen mat, hälsa, träning och sina egna dokument.",
    noDogBody:
      "Du har inte lagt till någon hund än. Det tar bara en minut, och resten följer av det.",
    addAnother: "Lägg till en hund till",
    addYours: "Lägg till din hund",
  },
  fi: {
    eyebrow: "Oma tili",
    heading: "Sinun puolesi asiasta",
    introPrefix:
      "Tämä sivu koskee sinua — tietojasi, kieltäsi, sitä mitä toivot kuulevasi meiltä. Kaiken koirastasi löydät kohdasta",
    myDogLink: "Oma koirani",
    preferences: "Asetukset",
    units: "Mittayksiköt",
    unitsMetric: "Metrinen",
    unitsImperial: "Imperiaalinen",
    unitsNote: "Koskee toistaiseksi vain tätä kohtaa — paino-, ruoka- ja matkasivut näyttävät yhä metrisiä yksiköitä.",
    reminders: "Muistutukset",
    emailFromUs: "Sähköpostit meiltä",
    preferencesNote: "Lähetämme mieluummin ei mitään kuin jotain, mitä et pyytänyt.",
    privacy: "Tietosuoja",
    privacyBody:
      "Koirasi tiedot, painot, koulutuksen edistyminen ja muistiinpanot pysyvät tässä selaimessa. Mitään ei ladata pilveen, myydä tai jaeta. Selaimen tietojen tyhjentäminen poistaa myös nämä — joten jos jokin on tärkeää, tulosta se ja säilytä kopio.",
    printSave: "Tulosta ja tallenna",
    yourDogs: "Koirasi",
    yourDog: "Koirasi",
    switchBody:
      "Vaihda niiden välillä täällä, tai lisää toinen. Jokaisella koiralla on omat ruoka-, terveys-, koulutus- ja asiakirjatietonsa.",
    noDogBody: "Et ole vielä lisännyt koiraa. Se vie vain minuutin, ja loput seuraa siitä.",
    addAnother: "Lisää toinen koira",
    addYours: "Lisää koirasi",
  },
  de: {
    eyebrow: "Mein Konto",
    heading: "Dein Teil der Sache",
    introPrefix:
      "Diese Seite dreht sich um dich — deine Angaben, deine Sprache, was du von uns hören möchtest. Alles über deinen Hund findest du unter",
    myDogLink: "Mein Hund",
    preferences: "Einstellungen",
    units: "Einheiten",
    unitsMetric: "Metrisch",
    unitsImperial: "Imperial",
    unitsNote: "Gilt vorerst nur hier — Gewicht, Futter und Reiseseiten zeigen weiterhin metrische Einheiten.",
    reminders: "Erinnerungen",
    emailFromUs: "E-Mails von uns",
    preferencesNote: "Wir schicken lieber nichts, als etwas, um das du nicht gebeten hast.",
    privacy: "Datenschutz",
    privacyBody:
      "Die Angaben deines Hundes, Gewichte, Trainingsfortschritt und Notizen bleiben in diesem Browser. Nichts wird hochgeladen, verkauft oder weitergegeben. Löschst du deine Browserdaten, verschwinden sie ebenfalls — drucke also aus, was dir wichtig ist, und bewahre eine Kopie auf.",
    printSave: "Drucken & speichern",
    yourDogs: "Deine Hunde",
    yourDog: "Dein Hund",
    switchBody:
      "Wechsle hier zwischen ihnen oder füge einen weiteren hinzu. Jeder Hund hat sein eigenes Futter, seine Gesundheit, sein Training und seine Dokumente.",
    noDogBody:
      "Du hast noch keinen Hund hinzugefügt. Es dauert nur eine Minute, und alles andere folgt daraus.",
    addAnother: "Weiteren Hund hinzufügen",
    addYours: "Deinen Hund hinzufügen",
  },
  fr: {
    eyebrow: "Mon compte",
    heading: "Votre part de l'histoire",
    introPrefix:
      "Cette page vous concerne — vos informations, votre langue, ce que vous aimeriez recevoir de notre part. Tout ce qui concerne votre chien se trouve dans",
    myDogLink: "Mon chien",
    preferences: "Préférences",
    units: "Unités",
    unitsMetric: "Métrique",
    unitsImperial: "Impérial",
    unitsNote: "S'applique seulement ici pour l'instant — les pages poids, alimentation et voyage affichent encore le métrique.",
    reminders: "Rappels",
    emailFromUs: "E-mails de notre part",
    preferencesNote:
      "Nous préférons ne rien envoyer plutôt que quelque chose que vous n'avez pas demandé.",
    privacy: "Confidentialité",
    privacyBody:
      "Les informations de votre chien, son poids, sa progression à l'entraînement et vos notes restent dans ce navigateur. Rien n'est envoyé, vendu ou partagé. Si vous effacez les données de votre navigateur, elles disparaîtront aussi — imprimez donc ce qui compte et gardez-en une copie.",
    printSave: "Imprimer et enregistrer",
    yourDogs: "Vos chiens",
    yourDog: "Votre chien",
    switchBody:
      "Passez de l'un à l'autre ici, ou ajoutez-en un autre. Chaque chien garde sa propre alimentation, sa santé, son entraînement et ses documents.",
    noDogBody:
      "Vous n'avez pas encore ajouté de chien. Cela ne prend qu'une minute, et tout le reste en découle.",
    addAnother: "Ajouter un autre chien",
    addYours: "Ajouter votre chien",
  },
  nl: {
    eyebrow: "Mijn account",
    heading: "Jouw kant van het verhaal",
    introPrefix:
      "Deze pagina gaat over jou — je gegevens, je taal, wat je van ons wilt horen. Alles over je hond vind je onder",
    myDogLink: "Mijn hond",
    preferences: "Voorkeuren",
    units: "Eenheden",
    unitsMetric: "Metrisch",
    unitsImperial: "Imperiaal",
    unitsNote: "Geldt voorlopig alleen hier — gewicht-, voedings- en reispagina's tonen nog steeds metrisch.",
    reminders: "Herinneringen",
    emailFromUs: "E-mail van ons",
    preferencesNote: "We sturen liever niets dan iets waar je niet om hebt gevraagd.",
    privacy: "Privacy",
    privacyBody:
      "De gegevens, gewichten, trainingsvoortgang en notities van je hond blijven in deze browser. Niets wordt geüpload, verkocht of gedeeld. Als je je browsergegevens wist, verdwijnen ze ook — druk dus af wat belangrijk is en bewaar een kopie.",
    printSave: "Afdrukken & bewaren",
    yourDogs: "Jouw honden",
    yourDog: "Jouw hond",
    switchBody:
      "Wissel hier tussen ze, of voeg er nog een toe. Elke hond heeft zijn eigen voeding, gezondheid, training en documenten.",
    noDogBody:
      "Je hebt nog geen hond toegevoegd. Het kost maar een minuutje, en de rest volgt vanzelf.",
    addAnother: "Nog een hond toevoegen",
    addYours: "Voeg je hond toe",
  },
} as const;

function AccountPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const { dogs } = useTrainingState();
  const { membership } = useMembership();
  const prefs = usePreferences();

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">{c.heading}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {c.introPrefix}{" "}
          <Link
            to={withLangPrefix("/my-dog")}
            className="text-accent underline-offset-4 hover:underline"
          >
            {c.myDogLink}
          </Link>
          .
        </p>
      </section>

      <Section className="container-page">
        <OwnerProfileCard />
      </Section>

      <Section className="container-page pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <AccountMembership />

          <Panel title={c.preferences}>
            <PrefRow label={c.units}>
              <div className="inline-flex rounded-full border border-border-strong p-1">
                {(["metric", "imperial"] as UnitSystem[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={prefs.units === option}
                    onClick={() => preferencesStore.setUnits(option)}
                    className={cn(
                      "rounded-full px-3 py-1 text-sm font-medium transition-colors",
                      prefs.units === option
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {option === "metric" ? c.unitsMetric : c.unitsImperial}
                  </button>
                ))}
              </div>
            </PrefRow>
            <PrefRow label={c.reminders}>
              <Toggle
                checked={prefs.reminders}
                onChange={preferencesStore.setReminders}
                label={c.reminders}
              />
            </PrefRow>
            <PrefRow label={c.emailFromUs}>
              <Toggle
                checked={prefs.emailUpdates}
                onChange={preferencesStore.setEmailUpdates}
                label={c.emailFromUs}
              />
            </PrefRow>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.unitsNote}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {c.preferencesNote}
            </p>
          </Panel>

          <Panel title={c.privacy}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.privacyBody}
            </p>
            <ButtonLink
              to={withLangPrefix("/my-dog/print")}
              tone="outline"
              size="md"
              className="mt-5"
            >
              {c.printSave}
            </ButtonLink>
          </Panel>
        </div>
      </Section>

      {membership.subscribed && (
        <Section className="container-page">
          <MemberBenefits />
        </Section>
      )}

      <Section className="container-page">
        <Panel title={dogs.length > 1 ? c.yourDogs : c.yourDog}>
          <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {dogs.length ? c.switchBody : c.noDogBody}
          </p>
          <DogSwitcher {...(dog ? { active: dog } : {})} />
          <div className="mt-6">
            <ButtonLink to={withLangPrefix("/my-dog/setup")} size="lg">
              {dogs.length ? c.addAnother : c.addYours}
              <Arrow />
            </ButtonLink>
          </div>
        </Panel>
      </Section>
    </div>
  );
}
