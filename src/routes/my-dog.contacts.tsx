import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import {
  contactGroups,
  infoFields,
  recordsStore,
  useContacts,
  useDogDetails,
  useImportantInfo,
} from "@/lib/care/records";
import { useMyDog } from "@/lib/care/store";

const title = "Important contacts & information | DoggMatch";
const description =
  "Keep your dog's paperwork, your vet's number and the things worth knowing in one place — then print it and keep it somewhere easy to find.";

export const Route = createFileRoute("/my-dog/contacts")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/my-dog/contacts" }],
  }),
  component: ContactsPage,
});

const inputClass =
  "mt-2 w-full rounded-[0.9rem] border border-border bg-background px-4 py-3 text-[0.9375rem] outline-none transition-colors focus:border-border-strong";

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
  const dog = useMyDog();
  const details = useDogDetails(dog?.id);
  const contacts = useContacts(dog?.id);
  const info = useImportantInfo(dog?.id);
  const id = dog?.id;

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>Contacts & information</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {dog ? `Everything about ${dog.name}, in one place` : "Everything in one place"}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Fill in what you know. It stays on this device, and you can print it whenever you need it —
          for the vet, a sitter, or the fridge door.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to="/my-dog/print" size="lg">
            Print & save
            <Arrow />
          </ButtonLink>
        </div>
        {!dog && (
          <p className="mt-6 text-sm text-muted-foreground">
            Add your dog first and everything you type here will be kept with them.
          </p>
        )}
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="Your dog's details">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Date of birth"
                type="date"
                value={details.dob ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { dob: v })}
              />
              <Field
                label="Colour and markings"
                value={details.colour ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { colour: v })}
              />
              <Field
                label="Microchip number"
                value={details.microchip ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { microchip: v })}
              />
              <Field
                label="Insurance"
                value={details.insurer ?? ""}
                onChange={(v) => id && recordsStore.saveDetails(id, { insurer: v })}
              />
              <Field
                label="Policy number"
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
        <Eyebrow>Worth knowing</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">The things you'd want someone else to know</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          In your words. Nothing here is a diagnosis — it's simply what you've noticed living with
          your dog.
        </p>
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
          <VetNote>
            If you're worried about a change in your dog's health, your veterinarian is the best
            person to ask. What you write here just helps you remember it all when you get there.
          </VetNote>
        </div>
      </Section>
    </div>
  );
}