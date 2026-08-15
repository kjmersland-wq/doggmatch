import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, Printer } from "lucide-react";
import { Arrow, Button, Eyebrow, Section } from "@/components/dogmatch/ui";
import { VetNote } from "@/components/dogmatch/care/parts";
import { documents, packOrder } from "@/lib/print/documents";
import { useMyDog } from "@/lib/care/store";

const title = "Print & save — your dog's paperwork | DoggMatch";
const description =
  "Print a profile card, feeding plan, weekly planner, vet notes or the whole Dog Pack. Clean, calm pages made to be pinned up or handed over.";

export const Route = createFileRoute("/my-dog/print")({
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
    links: [{ rel: "canonical", href: "/my-dog/print" }],
  }),
  component: PrintPage,
});

function PrintPage() {
  const dog = useMyDog();
  const navigate = useNavigate();
  const [picked, setPicked] = useState<string[]>(["profile"]);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const open = (ids: string[]) =>
    navigate({ to: "/my-dog/pack", search: { docs: ids.join(",") } });

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>Print & save</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">Something you can hold</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Everything you've written about {dog?.name ?? "your dog"} can go on paper — for the fridge
          door, the sitter, or the folder you keep in a drawer.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => open(packOrder)}>
            <Printer className="h-4 w-4" />
            Make the whole Dog Pack
            <Arrow />
          </Button>
          <Button
            tone="outline"
            size="lg"
            disabled={picked.length === 0}
            onClick={() => open(picked)}
          >
            Print what I've chosen ({picked.length})
          </Button>
        </div>
      </section>

      <Section className="container-page">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => {
            const on = picked.includes(doc.id);
            return (
              <div
                key={doc.id}
                className={`rounded-[1.4rem] border bg-surface p-6 transition-colors ${
                  on ? "border-accent" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg leading-snug">{doc.title}</h2>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    aria-label={`Include ${doc.title}`}
                    onClick={() => toggle(doc.id)}
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
                      on
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border-strong text-transparent"
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {doc.blurb}
                </p>
                <button
                  type="button"
                  onClick={() => open([doc.id])}
                  className="mt-5 text-sm text-accent underline-offset-4 hover:underline"
                >
                  Print just this one
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-10 max-w-2xl">
          <VetNote>
            Pages are filled in with whatever you've saved, and left blank where you haven't — so a
            fresh sheet still works with a pen. Everything stays on your device.
          </VetNote>
        </div>
      </Section>
    </div>
  );
}