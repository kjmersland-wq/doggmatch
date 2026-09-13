import { Link, createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel } from "@/components/dogmatch/care/parts";
import { DogSwitcher } from "@/components/dogmatch/care/hub";
import { useMyDog } from "@/lib/care/store";
import { useTrainingState } from "@/lib/training/store";
import { AccountMembership } from "@/components/dogmatch/plus/membership";
import { MemberBenefits } from "@/components/dogmatch/plus/benefits";
import { useMembership } from "@/hooks/use-membership";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

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
    eyebrow: "My Account",
    heading: "Your side of things",
    introPrefix: "This page is about you — your details, your language, what you'd like to hear from us. Everything about your dog lives over in",
    myDogLink: "My Dog",
    preferences: "Preferences",
    units: "Units",
    unitsValue: "Metric (kg, km)",
    reminders: "Reminders",
    off: "Off",
    emailFromUs: "Email from us",
    preferencesNote: "We'd rather send nothing than send something you didn't ask for.",
    privacy: "Privacy",
    privacyBody:
      "Your dog's details, weights, training progress and notes stay in this browser. Nothing is uploaded, sold or shared. Clearing your browser data will clear them too — so if something matters, print it and keep a copy.",
    printSave: "Print & save",
    yourDogs: "Your dogs",
    yourDog: "Your dog",
    switchBody: "Switch between them here, or add another. Each dog keeps their own food, health, training and documents.",
    noDogBody: "You haven't added a dog yet. It only takes a minute, and everything else follows from it.",
    addAnother: "Add another dog",
    addYours: "Add your dog",
  },
  no: {
    eyebrow: "Min konto",
    heading: "Din side av saken",
    introPrefix: "Denne siden handler om deg — dine detaljer, ditt språk, hva du ønsker å høre fra oss. Alt om hunden din finner du under",
    myDogLink: "Min hund",
    preferences: "Innstillinger",
    units: "Enheter",
    unitsValue: "Metrisk (kg, km)",
    reminders: "Påminnelser",
    off: "Av",
    emailFromUs: "E-post fra oss",
    preferencesNote: "Vi sender heller ingenting enn noe du ikke har bedt om.",
    privacy: "Personvern",
    privacyBody:
      "Hundens detaljer, vekt, treningsfremgang og notater lagres i denne nettleseren. Ingenting lastes opp, selges eller deles. Sletter du nettleserdataene, forsvinner de også — så skriv ut det som er viktig, og ta vare på en kopi.",
    printSave: "Skriv ut og lagre",
    yourDogs: "Hundene dine",
    yourDog: "Hunden din",
    switchBody: "Bytt mellom dem her, eller legg til en til. Hver hund har sin egen mat, helse, trening og dokumenter.",
    noDogBody: "Du har ikke lagt til noen hund ennå. Det tar bare et minutt, og alt annet følger av det.",
    addAnother: "Legg til en hund til",
    addYours: "Legg til hunden din",
  },
  pl: {
    eyebrow: "Moje konto",
    heading: "Twoja strona sprawy",
    introPrefix: "Ta strona dotyczy Ciebie — Twoich danych, Twojego języka, tego, co chcesz od nas słyszeć. Wszystko o Twoim psie znajdziesz w",
    myDogLink: "Mój pies",
    preferences: "Preferencje",
    units: "Jednostki",
    unitsValue: "Metryczne (kg, km)",
    reminders: "Przypomnienia",
    off: "Wyłączone",
    emailFromUs: "Wiadomości od nas",
    preferencesNote: "Wolimy nic nie wysyłać, niż wysłać coś, o co nie prosiłeś.",
    privacy: "Prywatność",
    privacyBody:
      "Dane Twojego psa, waga, postępy w treningu i notatki pozostają w tej przeglądarce. Nic nie jest wysyłane, sprzedawane ani udostępniane. Wyczyszczenie danych przeglądarki usunie je również — więc jeśli coś jest ważne, wydrukuj i zachowaj kopię.",
    printSave: "Drukuj i zachowaj",
    yourDogs: "Twoje psy",
    yourDog: "Twój pies",
    switchBody: "Przełączaj się między nimi tutaj albo dodaj kolejnego. Każdy pies ma własne dane o jedzeniu, zdrowiu, treningu i dokumentach.",
    noDogBody: "Nie dodałeś jeszcze psa. To zajmuje tylko chwilę, a wszystko inne wynika z tego kroku.",
    addAnother: "Dodaj kolejnego psa",
    addYours: "Dodaj swojego psa",
  },
  dk: {
    eyebrow: "Min konto",
    heading: "Din side af sagen",
    introPrefix: "Denne side handler om dig — dine oplysninger, dit sprog, hvad du gerne vil høre fra os. Alt om din hund finder du under",
    myDogLink: "Min hund",
    preferences: "Indstillinger",
    units: "Enheder",
    unitsValue: "Metrisk (kg, km)",
    reminders: "Påmindelser",
    off: "Fra",
    emailFromUs: "E-mail fra os",
    preferencesNote: "Vi sender hellere ingenting end noget, du ikke har bedt om.",
    privacy: "Privatliv",
    privacyBody:
      "Din hunds oplysninger, vægt, træningsfremskridt og noter forbliver i denne browser. Intet uploades, sælges eller deles. Rydder du browserdata, forsvinder de også — så print det, der betyder noget, og gem en kopi.",
    printSave: "Udskriv og gem",
    yourDogs: "Dine hunde",
    yourDog: "Din hund",
    switchBody: "Skift mellem dem her, eller tilføj en mere. Hver hund har sin egen mad, sundhed, træning og dokumenter.",
    noDogBody: "Du har ikke tilføjet en hund endnu. Det tager kun et minut, og resten følger derfra.",
    addAnother: "Tilføj endnu en hund",
    addYours: "Tilføj din hund",
  },
  se: {
    eyebrow: "Mitt konto",
    heading: "Din sida av saken",
    introPrefix: "Den här sidan handlar om dig — dina uppgifter, ditt språk, vad du vill höra från oss. Allt om din hund hittar du under",
    myDogLink: "Min hund",
    preferences: "Inställningar",
    units: "Enheter",
    unitsValue: "Metriskt (kg, km)",
    reminders: "Påminnelser",
    off: "Av",
    emailFromUs: "E-post från oss",
    preferencesNote: "Vi skickar hellre ingenting än något du inte bad om.",
    privacy: "Integritet",
    privacyBody:
      "Din hunds uppgifter, vikt, träningsframsteg och anteckningar stannar i den här webbläsaren. Inget laddas upp, säljs eller delas. Rensar du webbläsardata försvinner de också — så skriv ut det som är viktigt och spara en kopia.",
    printSave: "Skriv ut och spara",
    yourDogs: "Dina hundar",
    yourDog: "Din hund",
    switchBody: "Växla mellan dem här, eller lägg till en till. Varje hund har sin egen mat, hälsa, träning och sina egna dokument.",
    noDogBody: "Du har inte lagt till någon hund än. Det tar bara en minut, och resten följer av det.",
    addAnother: "Lägg till en hund till",
    addYours: "Lägg till din hund",
  },
  fi: {
    eyebrow: "Oma tili",
    heading: "Sinun puolesi asiasta",
    introPrefix: "Tämä sivu koskee sinua — tietojasi, kieltäsi, sitä mitä toivot kuulevasi meiltä. Kaiken koirastasi löydät kohdasta",
    myDogLink: "Oma koirani",
    preferences: "Asetukset",
    units: "Mittayksiköt",
    unitsValue: "Metrinen (kg, km)",
    reminders: "Muistutukset",
    off: "Pois päältä",
    emailFromUs: "Sähköpostit meiltä",
    preferencesNote: "Lähetämme mieluummin ei mitään kuin jotain, mitä et pyytänyt.",
    privacy: "Tietosuoja",
    privacyBody:
      "Koirasi tiedot, painot, koulutuksen edistyminen ja muistiinpanot pysyvät tässä selaimessa. Mitään ei ladata pilveen, myydä tai jaeta. Selaimen tietojen tyhjentäminen poistaa myös nämä — joten jos jokin on tärkeää, tulosta se ja säilytä kopio.",
    printSave: "Tulosta ja tallenna",
    yourDogs: "Koirasi",
    yourDog: "Koirasi",
    switchBody: "Vaihda niiden välillä täällä, tai lisää toinen. Jokaisella koiralla on omat ruoka-, terveys-, koulutus- ja asiakirjatietonsa.",
    noDogBody: "Et ole vielä lisännyt koiraa. Se vie vain minuutin, ja loput seuraa siitä.",
    addAnother: "Lisää toinen koira",
    addYours: "Lisää koirasi",
  },
  de: {
    eyebrow: "Mein Konto",
    heading: "Ihre Seite der Dinge",
    introPrefix: "Diese Seite dreht sich um Sie — Ihre Daten, Ihre Sprache, was Sie von uns hören möchten. Alles über Ihren Hund finden Sie unter",
    myDogLink: "Mein Hund",
    preferences: "Einstellungen",
    units: "Einheiten",
    unitsValue: "Metrisch (kg, km)",
    reminders: "Erinnerungen",
    off: "Aus",
    emailFromUs: "E-Mails von uns",
    preferencesNote: "Wir schicken lieber gar nichts, als etwas zu schicken, das Sie nicht wollten.",
    privacy: "Datenschutz",
    privacyBody:
      "Die Angaben zu Ihrem Hund, Gewichte, Trainingsfortschritt und Notizen bleiben in diesem Browser. Nichts wird hochgeladen, verkauft oder weitergegeben. Löschen Sie Ihre Browserdaten, verschwinden sie ebenfalls — drucken Sie also aus, was Ihnen wichtig ist, und bewahren Sie eine Kopie auf.",
    printSave: "Drucken & speichern",
    yourDogs: "Ihre Hunde",
    yourDog: "Ihr Hund",
    switchBody: "Wechseln Sie hier zwischen ihnen, oder fügen Sie einen weiteren hinzu. Jeder Hund hat sein eigenes Futter, seine Gesundheit, sein Training und seine Dokumente.",
    noDogBody: "Sie haben noch keinen Hund hinzugefügt. Das dauert nur eine Minute, und alles Weitere ergibt sich daraus.",
    addAnother: "Einen weiteren Hund hinzufügen",
    addYours: "Ihren Hund hinzufügen",
  },
  fr: {
    eyebrow: "Mon compte",
    heading: "Votre côté des choses",
    introPrefix: "Cette page vous concerne — vos coordonnées, votre langue, ce que vous souhaitez entendre de notre part. Tout ce qui concerne votre chien se trouve dans",
    myDogLink: "Mon chien",
    preferences: "Préférences",
    units: "Unités",
    unitsValue: "Métrique (kg, km)",
    reminders: "Rappels",
    off: "Désactivés",
    emailFromUs: "E-mails de notre part",
    preferencesNote: "Nous préférons ne rien envoyer plutôt que d'envoyer quelque chose que vous n'avez pas demandé.",
    privacy: "Confidentialité",
    privacyBody:
      "Les informations de votre chien, ses poids, ses progrès d'éducation et vos notes restent dans ce navigateur. Rien n'est téléchargé, vendu ou partagé. Effacer les données de votre navigateur les effacera également — alors si quelque chose compte, imprimez-le et gardez-en une copie.",
    printSave: "Imprimer et enregistrer",
    yourDogs: "Vos chiens",
    yourDog: "Votre chien",
    switchBody: "Passez de l'un à l'autre ici, ou ajoutez-en un autre. Chaque chien garde sa propre alimentation, sa santé, son éducation et ses documents.",
    noDogBody: "Vous n'avez pas encore ajouté de chien. Cela ne prend qu'une minute, et tout le reste en découle.",
    addAnother: "Ajouter un autre chien",
    addYours: "Ajouter votre chien",
  },
  nl: {
    eyebrow: "Mijn account",
    heading: "Uw kant van de zaak",
    introPrefix: "Deze pagina gaat over u — uw gegevens, uw taal, wat u van ons wilt horen. Alles over uw hond vindt u onder",
    myDogLink: "Mijn hond",
    preferences: "Voorkeuren",
    units: "Eenheden",
    unitsValue: "Metrisch (kg, km)",
    reminders: "Herinneringen",
    off: "Uit",
    emailFromUs: "E-mail van ons",
    preferencesNote: "We sturen liever niets dan iets waar u niet om heeft gevraagd.",
    privacy: "Privacy",
    privacyBody:
      "De gegevens van uw hond, gewichten, trainingsvoortgang en notities blijven in deze browser. Niets wordt geüpload, verkocht of gedeeld. Als u uw browsergegevens wist, verdwijnen deze ook — druk dus af wat belangrijk is en bewaar een kopie.",
    printSave: "Afdrukken en bewaren",
    yourDogs: "Uw honden",
    yourDog: "Uw hond",
    switchBody: "Wissel hier tussen ze, of voeg er nog een toe. Elke hond houdt zijn eigen voeding, gezondheid, training en documenten bij.",
    noDogBody: "U heeft nog geen hond toegevoegd. Het kost maar een minuutje, en de rest volgt vanzelf.",
    addAnother: "Nog een hond toevoegen",
    addYours: "Uw hond toevoegen",
  },
} as const;

function AccountPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const { dogs } = useTrainingState();
  const { membership } = useMembership();

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">{c.heading}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {c.introPrefix}{" "}
          <Link to={withLangPrefix("/my-dog")} className="text-accent underline-offset-4 hover:underline">
            {c.myDogLink}
          </Link>
          .
        </p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-2">
          <AccountMembership />

          <Panel title={c.preferences}>
            <Row label={c.units} value={c.unitsValue} />
            <Row label={c.reminders} value={c.off} />
            <Row label={c.emailFromUs} value={c.off} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.preferencesNote}</p>
          </Panel>

          <Panel title={c.privacy}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.privacyBody}</p>
            <ButtonLink to={withLangPrefix("/my-dog/print")} tone="outline" size="md" className="mt-5">
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
