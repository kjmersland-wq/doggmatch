import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import { withLangPrefix } from "@/lib/localized-path";
import {
  contactGroups,
  infoFields,
  recordsStore,
  useContacts,
  useDogDetails,
  useImportantInfo,
} from "@/lib/care/records";
import { useMyDog } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";

const title = "Important contacts & information | DoggMatch";
const description =
  "Keep your dog's paperwork, your vet's number and the things worth knowing in one place — then print it and keep it somewhere easy to find.";

export const Route = createFileRoute("/{-$lang}/my-dog/contacts")({
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
    links: [{ rel: "canonical", href: abs("/my-dog/contacts") }],
  }),
  component: ContactsPage,
});

const inputClass =
  "mt-2 w-full rounded-[0.9rem] border border-border bg-background px-4 py-3 text-[0.9375rem] outline-none transition-colors focus:border-border-strong";

const copy = {
  en: {
    eyebrow: "Contacts & information",
    titleFor: (name: string) => `Everything about ${name}, in one place`,
    titleFallback: "Everything in one place",
    intro:
      "Fill in what you know. It stays on this device, and you can print it whenever you need it — for the vet, a sitter, or the fridge door.",
    printSave: "Print & save",
    addDogNote: "Add your dog first and everything you type here will be kept with them.",
    detailsTitle: "Your dog's details",
    dob: "Date of birth",
    colour: "Colour and markings",
    microchip: "Microchip number",
    insurance: "Insurance",
    policy: "Policy number",
    worthKnowing: "Worth knowing",
    worthKnowingTitle: "The things you'd want someone else to know",
    worthKnowingIntro:
      "In your words. Nothing here is a diagnosis — it's simply what you've noticed living with your dog.",
    vetNote:
      "If you're worried about a change in your dog's health, your veterinarian is the best person to ask. What you write here just helps you remember it all when you get there.",
  },
  no: {
    eyebrow: "Kontakter og informasjon",
    titleFor: (name: string) => `Alt om ${name}, på ett sted`,
    titleFallback: "Alt på ett sted",
    intro:
      "Fyll inn det du vet. Det blir liggende på denne enheten, og du kan skrive det ut når du trenger det — til veterinæren, hundepasseren eller kjøleskapsdøren.",
    printSave: "Skriv ut og lagre",
    addDogNote: "Legg til hunden din først, så blir alt du skriver her tatt vare på sammen med den.",
    detailsTitle: "Detaljer om hunden din",
    dob: "Fødselsdato",
    colour: "Farge og tegninger",
    microchip: "Chipnummer",
    insurance: "Forsikring",
    policy: "Polisenummer",
    worthKnowing: "Verdt å vite",
    worthKnowingTitle: "Det du vil at noen andre skal vite",
    worthKnowingIntro:
      "Med dine egne ord. Ingenting her er en diagnose — det er rett og slett det du har lagt merke til i hverdagen med hunden din.",
    vetNote:
      "Er du bekymret for en endring i hundens helse, er veterinæren den beste å spørre. Det du skriver her hjelper deg bare å huske alt når du kommer dit.",
  },
  pl: {
    eyebrow: "Kontakty i informacje",
    titleFor: (name: string) => `Wszystko o ${name} w jednym miejscu`,
    titleFallback: "Wszystko w jednym miejscu",
    intro:
      "Uzupełnij to, co wiesz. Zostaje to na tym urządzeniu i możesz to wydrukować, kiedy tylko potrzebujesz — dla weterynarza, opiekuna albo na drzwi lodówki.",
    printSave: "Wydrukuj i zapisz",
    addDogNote: "Dodaj najpierw swojego psa, a wszystko, co tu wpiszesz, zostanie zapisane razem z nim.",
    detailsTitle: "Dane twojego psa",
    dob: "Data urodzenia",
    colour: "Umaszczenie i znaki szczególne",
    microchip: "Numer chipa",
    insurance: "Ubezpieczenie",
    policy: "Numer polisy",
    worthKnowing: "Warto wiedzieć",
    worthKnowingTitle: "To, co chciałbyś, aby wiedział ktoś inny",
    worthKnowingIntro:
      "Własnymi słowami. Nic z tego nie jest diagnozą — to po prostu twoje spostrzeżenia z życia z psem.",
    vetNote:
      "Jeśli martwisz się o zmianę w zdrowiu twojego psa, najlepiej zapytać weterynarza. To, co tu napiszesz, po prostu pomoże ci wszystko zapamiętać, gdy tam trafisz.",
  },
} as const;

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />
    </label>
  );
}

function ContactsPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const details = useDogDetails(dog?.id);
  const contacts = useContacts(dog?.id);
  const info = useImportantInfo(dog?.id);
  const id = dog?.id;

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {dog ? c.titleFor(dog.name) : c.titleFallback}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to={withLangPrefix("/my-dog/print")} size="lg">
            {c.printSave}
            <Arrow />
          </ButtonLink>
        </div>
        {!dog && (
          <p className="mt-6 text-sm text-muted-foreground">{c.addDogNote}</p>
        )}
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title={c.detailsTitle}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label={c.dob}
                type="date"
                value={details.dob ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { dob: v })}
              />
              <Field
                label={c.colour}
                value={details.colour ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { colour: v })}
              />
              <Field
                label={c.microchip}
                value={details.microchip ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { microchip: v })}
              />
              <Field
                label={c.insurance}
                value={details.insurer ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { insurer: v })}
              />
              <Field
                label={c.policy}
                value={details.policy ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { policy: v })}
              />
            </div>
          </Panel>

          {contactGroups.map((group) => (
            <Panel key={group.id} title={group.title}>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.fields.map((field) => (
                  <Field
                    key={field.key}
                    label={field.label}
                    value={contacts[group.id]?.[field.key] ?? ""}
                    onChange={(v) => id && recordsStore.saveContact(id, group.id, field.key, v)}
                  />
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section className="container-page">
        <Eyebrow>{c.worthKnowing}</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">{c.worthKnowingTitle}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.worthKnowingIntro}</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {infoFields.map((field) => (
            <Panel key={field.key} title={field.label}>
              <p className="-mt-3 mb-3 text-sm text-muted-foreground">{field.hint}</p>
              <textarea
                rows={3}
                value={info[field.key] ?? ""}
                onChange={(e) => id && recordsStore.saveInfo(id, field.key, e.target.value)}
                className="w-full resize-y rounded-[0.9rem] border border-border bg-background px-4 py-3 text-[0.9375rem] outline-none transition-colors focus:border-border-strong"
              />
            </Panel>
          ))}
        </div>
        <div className="mt-10 max-w-2xl">
          <VetNote>{c.vetNote}</VetNote>
        </div>
      </Section>
    </div>
  );
}
