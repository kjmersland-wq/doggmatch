import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Panel } from "@/components/dogmatch/care/parts";
import { Button } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import {
  useLocalOwnerProfile,
  localOwnerProfileStore,
  OWNER_PROFILE_DEFAULTS,
  type OwnerProfile,
  type OwnerExperience,
} from "@/lib/account/owner-profile";

const fieldClass =
  "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-[0.9375rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-border-strong";

const EXPERIENCE_OPTIONS: OwnerExperience[] = ["first-time", "experienced", "professional"];

function profileFromMetadata(metadata: Record<string, unknown> | undefined): OwnerProfile {
  const m = metadata ?? {};
  const str = (key: string) => (typeof m[key] === "string" ? (m[key] as string) : "");
  const experience = str("experience");
  return {
    fullName: str("full_name"),
    phone: str("phone"),
    postalCode: str("postal_code"),
    city: str("city"),
    country: str("country"),
    experience: EXPERIENCE_OPTIONS.includes(experience as OwnerExperience)
      ? (experience as OwnerExperience)
      : "",
  };
}

const copy = {
  en: {
    title: "Owner profile",
    intro: "Your own details — used on member cards and to tailor advice to where you live.",
    fullName: "Full name",
    fullNamePlaceholder: "Your name",
    phone: "Mobile phone",
    phonePlaceholder: "For emergency contact on your member card",
    postalCode: "Postal code",
    postalCodePlaceholder: "e.g. 4630",
    city: "City",
    cityPlaceholder: "Your city",
    country: "Country",
    countryPlaceholder: "Your country",
    experience: "Dog owner experience",
    experiencePlaceholder: "Select one",
    experienceFirstTime: "First-time owner",
    experienceExperienced: "Experienced",
    experienceProfessional: "Breeder / Professional",
    save: "Save changes",
    saving: "Saving…",
    saved: "Saved.",
    error: "We couldn't save that just now. Please try again.",
    localNote: "Sign in to keep this on every device — for now it's saved on this one only.",
  },
  no: {
    title: "Eierprofil",
    intro: "Dine egne opplysninger — brukes på medlemskort og for å tilpasse råd til hvor du bor.",
    fullName: "Fullt navn",
    fullNamePlaceholder: "Navnet ditt",
    phone: "Mobiltelefon",
    phonePlaceholder: "Til nødkontakt på medlemskortet ditt",
    postalCode: "Postnummer",
    postalCodePlaceholder: "f.eks. 4630",
    city: "Poststed",
    cityPlaceholder: "Poststedet ditt",
    country: "Land",
    countryPlaceholder: "Landet ditt",
    experience: "Erfaring som hundeeier",
    experiencePlaceholder: "Velg ett",
    experienceFirstTime: "Førstegangseier",
    experienceExperienced: "Erfaren",
    experienceProfessional: "Oppdretter / Profesjonell",
    save: "Lagre endringer",
    saving: "Lagrer …",
    saved: "Lagret.",
    error: "Vi klarte ikke å lagre akkurat nå. Prøv gjerne igjen.",
    localNote: "Logg inn for å ha dette på alle enheter — foreløpig er det bare lagret på denne.",
  },
  pl: {
    title: "Profil właściciela",
    intro:
      "Twoje dane — używane na karcie członkowskiej i do dopasowania porad do miejsca zamieszkania.",
    fullName: "Imię i nazwisko",
    fullNamePlaceholder: "Twoje imię i nazwisko",
    phone: "Telefon komórkowy",
    phonePlaceholder: "Do kontaktu awaryjnego na karcie członkowskiej",
    postalCode: "Kod pocztowy",
    postalCodePlaceholder: "np. 00-001",
    city: "Miasto",
    cityPlaceholder: "Twoje miasto",
    country: "Kraj",
    countryPlaceholder: "Twój kraj",
    experience: "Doświadczenie jako właściciel psa",
    experiencePlaceholder: "Wybierz jedno",
    experienceFirstTime: "Początkujący właściciel",
    experienceExperienced: "Doświadczony",
    experienceProfessional: "Hodowca / Profesjonalista",
    save: "Zapisz zmiany",
    saving: "Zapisywanie…",
    saved: "Zapisano.",
    error: "Nie udało się teraz zapisać. Spróbuj ponownie.",
    localNote: "Zaloguj się, aby mieć to na każdym urządzeniu — na razie zapisane tylko na tym.",
  },
  dk: {
    title: "Ejerprofil",
    intro: "Dine egne oplysninger — bruges på medlemskort og til at tilpasse råd til, hvor du bor.",
    fullName: "Fulde navn",
    fullNamePlaceholder: "Dit navn",
    phone: "Mobiltelefon",
    phonePlaceholder: "Til nødkontakt på dit medlemskort",
    postalCode: "Postnummer",
    postalCodePlaceholder: "f.eks. 2100",
    city: "By",
    cityPlaceholder: "Din by",
    country: "Land",
    countryPlaceholder: "Dit land",
    experience: "Erfaring som hundeejer",
    experiencePlaceholder: "Vælg én",
    experienceFirstTime: "Førstegangsejer",
    experienceExperienced: "Erfaren",
    experienceProfessional: "Opdrætter / Professionel",
    save: "Gem ændringer",
    saving: "Gemmer …",
    saved: "Gemt.",
    error: "Vi kunne ikke gemme det lige nu. Prøv venligst igen.",
    localNote:
      "Log ind for at have dette på alle enheder — indtil videre er det kun gemt på denne.",
  },
  se: {
    title: "Ägarprofil",
    intro: "Dina egna uppgifter — används på medlemskort och för att anpassa råd efter var du bor.",
    fullName: "Fullständigt namn",
    fullNamePlaceholder: "Ditt namn",
    phone: "Mobiltelefon",
    phonePlaceholder: "Till nödkontakt på ditt medlemskort",
    postalCode: "Postnummer",
    postalCodePlaceholder: "t.ex. 111 22",
    city: "Stad",
    cityPlaceholder: "Din stad",
    country: "Land",
    countryPlaceholder: "Ditt land",
    experience: "Erfarenhet som hundägare",
    experiencePlaceholder: "Välj ett",
    experienceFirstTime: "Förstagångsägare",
    experienceExperienced: "Erfaren",
    experienceProfessional: "Uppfödare / Professionell",
    save: "Spara ändringar",
    saving: "Sparar …",
    saved: "Sparat.",
    error: "Vi kunde inte spara just nu. Försök gärna igen.",
    localNote:
      "Logga in för att ha det här på alla enheter — just nu är det bara sparat på den här.",
  },
  fi: {
    title: "Omistajan profiili",
    intro: "Omat tietosi — käytetään jäsenkortilla ja neuvojen sovittamiseen asuinpaikkaasi.",
    fullName: "Koko nimi",
    fullNamePlaceholder: "Nimesi",
    phone: "Matkapuhelin",
    phonePlaceholder: "Hätäyhteystietona jäsenkortillasi",
    postalCode: "Postinumero",
    postalCodePlaceholder: "esim. 00100",
    city: "Kaupunki",
    cityPlaceholder: "Kaupunkisi",
    country: "Maa",
    countryPlaceholder: "Maasi",
    experience: "Kokemus koiranomistajana",
    experiencePlaceholder: "Valitse yksi",
    experienceFirstTime: "Ensikertalainen omistaja",
    experienceExperienced: "Kokenut",
    experienceProfessional: "Kasvattaja / Ammattilainen",
    save: "Tallenna muutokset",
    saving: "Tallennetaan…",
    saved: "Tallennettu.",
    error: "Emme juuri nyt saaneet tallennettua. Yritä uudelleen.",
    localNote:
      "Kirjaudu sisään, jotta tämä on käytössä kaikilla laitteillasi — toistaiseksi se on tallennettu vain tälle.",
  },
  de: {
    title: "Besitzerprofil",
    intro:
      "Ihre eigenen Angaben — verwendet auf Mitgliedskarten und um Ratschläge an Ihren Wohnort anzupassen.",
    fullName: "Vollständiger Name",
    fullNamePlaceholder: "Ihr Name",
    phone: "Mobiltelefon",
    phonePlaceholder: "Für den Notfallkontakt auf Ihrer Mitgliedskarte",
    postalCode: "Postleitzahl",
    postalCodePlaceholder: "z. B. 10115",
    city: "Stadt",
    cityPlaceholder: "Ihre Stadt",
    country: "Land",
    countryPlaceholder: "Ihr Land",
    experience: "Erfahrung als Hundehalter",
    experiencePlaceholder: "Eines auswählen",
    experienceFirstTime: "Ersthundehalter",
    experienceExperienced: "Erfahren",
    experienceProfessional: "Züchter / Profi",
    save: "Änderungen speichern",
    saving: "Wird gespeichert …",
    saved: "Gespeichert.",
    error: "Wir konnten das gerade nicht speichern. Bitte versuchen Sie es erneut.",
    localNote:
      "Melden Sie sich an, um dies auf jedem Gerät zu haben — vorerst nur auf diesem gespeichert.",
  },
  fr: {
    title: "Profil du propriétaire",
    intro:
      "Vos informations — utilisées sur les cartes de membre et pour adapter les conseils à votre lieu de résidence.",
    fullName: "Nom complet",
    fullNamePlaceholder: "Votre nom",
    phone: "Téléphone mobile",
    phonePlaceholder: "Pour le contact d'urgence sur votre carte de membre",
    postalCode: "Code postal",
    postalCodePlaceholder: "ex. 75001",
    city: "Ville",
    cityPlaceholder: "Votre ville",
    country: "Pays",
    countryPlaceholder: "Votre pays",
    experience: "Expérience en tant que propriétaire de chien",
    experiencePlaceholder: "Choisissez-en un",
    experienceFirstTime: "Primo-adoptant",
    experienceExperienced: "Expérimenté",
    experienceProfessional: "Éleveur / Professionnel",
    save: "Enregistrer les modifications",
    saving: "Enregistrement…",
    saved: "Enregistré.",
    error: "Nous n'avons pas pu enregistrer cela à l'instant. Veuillez réessayer.",
    localNote:
      "Connectez-vous pour retrouver ceci sur chaque appareil — pour l'instant, c'est enregistré uniquement sur celui-ci.",
  },
  nl: {
    title: "Eigenaarprofiel",
    intro:
      "Uw eigen gegevens — gebruikt op ledenpassen en om advies af te stemmen op waar u woont.",
    fullName: "Volledige naam",
    fullNamePlaceholder: "Uw naam",
    phone: "Mobiele telefoon",
    phonePlaceholder: "Voor noodcontact op uw ledenpas",
    postalCode: "Postcode",
    postalCodePlaceholder: "bijv. 1011 AB",
    city: "Stad",
    cityPlaceholder: "Uw stad",
    country: "Land",
    countryPlaceholder: "Uw land",
    experience: "Ervaring als hondenbezitter",
    experiencePlaceholder: "Kies er één",
    experienceFirstTime: "Beginnende eigenaar",
    experienceExperienced: "Ervaren",
    experienceProfessional: "Fokker / Professional",
    save: "Wijzigingen opslaan",
    saving: "Opslaan…",
    saved: "Opgeslagen.",
    error: "We konden dit zojuist niet opslaan. Probeer het opnieuw.",
    localNote:
      "Log in om dit op elk apparaat te hebben — voorlopig is het alleen op dit apparaat opgeslagen.",
  },
} as const;

/** Personal details, saved to Supabase `user_metadata` when signed in, or kept in this browser otherwise. */
export function OwnerProfileCard() {
  const c = useCopy(copy);
  const { user, session, loading } = useAuth();
  const local = useLocalOwnerProfile();
  const signedIn = Boolean(user);

  const [form, setForm] = useState<OwnerProfile>(OWNER_PROFILE_DEFAULTS);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (loading) return;
    setForm(signedIn ? profileFromMetadata(session?.user.user_metadata) : local);
    // Re-seed only when sign-in state resolves or changes — not on every
    // keystroke, since `local` and `session` are read fresh here already.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, signedIn, session?.user.id]);

  function set<K extends keyof OwnerProfile>(key: K, value: OwnerProfile[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setSaved(false);
  }

  async function onSave() {
    setBusy(true);
    setError(null);
    setSaved(false);
    try {
      if (signedIn) {
        const { error } = await supabase.auth.updateUser({
          data: {
            full_name: form.fullName,
            phone: form.phone,
            postal_code: form.postalCode,
            city: form.city,
            country: form.country,
            experience: form.experience,
          },
        });
        if (error) throw error;
      } else {
        localOwnerProfileStore.save(form);
      }
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Panel title={c.title}>
      <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.intro}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium sm:col-span-2">
          {c.fullName}
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder={c.fullNamePlaceholder}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium sm:col-span-2">
          {c.phone}
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder={c.phonePlaceholder}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium">
          {c.postalCode}
          <input
            type="text"
            value={form.postalCode}
            onChange={(e) => set("postalCode", e.target.value)}
            placeholder={c.postalCodePlaceholder}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium">
          {c.city}
          <input
            type="text"
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            placeholder={c.cityPlaceholder}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium sm:col-span-2">
          {c.country}
          <input
            type="text"
            value={form.country}
            onChange={(e) => set("country", e.target.value)}
            placeholder={c.countryPlaceholder}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium sm:col-span-2">
          {c.experience}
          <select
            value={form.experience}
            onChange={(e) => set("experience", e.target.value as OwnerExperience)}
            className={fieldClass}
          >
            <option value="">{c.experiencePlaceholder}</option>
            <option value="first-time">{c.experienceFirstTime}</option>
            <option value="experienced">{c.experienceExperienced}</option>
            <option value="professional">{c.experienceProfessional}</option>
          </select>
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button onClick={onSave} disabled={busy}>
          {busy ? c.saving : c.save}
        </Button>
        {saved && (
          <p role="status" className="text-sm text-muted-foreground">
            {c.saved}
          </p>
        )}
        {error && (
          <p role="alert" className="text-sm text-accent">
            {error}
          </p>
        )}
      </div>

      {!signedIn && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.localNote}</p>
      )}
    </Panel>
  );
}
