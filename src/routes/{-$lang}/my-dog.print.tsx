import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, Printer } from "lucide-react";
import { Arrow, Button, Eyebrow, Section } from "@/components/dogmatch/ui";
import { VetNote } from "@/components/dogmatch/care/parts";
import { documents, packOrder } from "@/lib/print/documents";
import { useMyDog } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Print & save — your dog's paperwork | DoggMatch";
const description =
  "Print a profile card, feeding plan, weekly planner, vet notes or the whole Dog Pack. Clean, calm pages made to be pinned up or handed over.";

export const Route = createFileRoute("/{-$lang}/my-dog/print")({
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
    links: [{ rel: "canonical", href: abs("/my-dog/print") }],
  }),
  component: PrintPage,
});

const copy = {
  en: {
    eyebrow: "Print & save",
    title: "Something you can hold",
    introFor: (name: string) =>
      `Everything you've written about ${name} can go on paper — for the fridge door, the sitter, or the folder you keep in a drawer.`,
    dogFallback: "your dog",
    wholePack: "Make the whole Dog Pack",
    printChosen: (n: number) => `Print what I've chosen (${n})`,
    includeAria: (title: string) => `Include ${title}`,
    printJustThisOne: "Print just this one",
    vetNote:
      "Pages are filled in with whatever you've saved, and left blank where you haven't — so a fresh sheet still works with a pen. Everything stays on your device.",
  },
  no: {
    eyebrow: "Skriv ut og lagre",
    title: "Noe du kan holde i hånden",
    introFor: (name: string) =>
      `Alt du har skrevet om ${name} kan skrives ut på papir — til kjøleskapsdøren, hundepasseren, eller mappen du oppbevarer i en skuff.`,
    dogFallback: "hunden din",
    wholePack: "Lag hele hundepakken",
    printChosen: (n: number) => `Skriv ut det jeg har valgt (${n})`,
    includeAria: (title: string) => `Inkluder ${title}`,
    printJustThisOne: "Skriv ut bare denne",
    vetNote:
      "Sidene fylles ut med det du har lagret, og står tomme der du ikke har fylt inn noe — så et ferskt ark fungerer fortsatt med en penn. Alt blir liggende på enheten din.",
  },
  pl: {
    eyebrow: "Wydrukuj i zapisz",
    title: "Coś, co możesz trzymać w ręce",
    introFor: (name: string) =>
      `Wszystko, co napisałeś o ${name}, można wydrukować — na drzwi lodówki, dla opiekuna albo do teczki w szufladzie.`,
    dogFallback: "twoim psie",
    wholePack: "Utwórz cały pakiet dla psa",
    printChosen: (n: number) => `Wydrukuj wybrane (${n})`,
    includeAria: (title: string) => `Uwzględnij ${title}`,
    printJustThisOne: "Wydrukuj tylko to",
    vetNote:
      "Strony uzupełniane są tym, co zapisałeś, a tam, gdzie niczego nie wpisałeś, zostają puste — więc świeża kartka wciąż da się uzupełnić długopisem. Wszystko pozostaje na twoim urządzeniu.",
  },
  dk: {
    eyebrow: "Udskriv og gem",
    title: "Noget du kan holde i hånden",
    introFor: (name: string) =>
      `Alt du har skrevet om ${name} kan komme på papir — til køleskabsdøren, hundepasseren, eller mappen du gemmer i en skuffe.`,
    dogFallback: "din hund",
    wholePack: "Lav hele hundepakken",
    printChosen: (n: number) => `Udskriv det, jeg har valgt (${n})`,
    includeAria: (title: string) => `Inkluder ${title}`,
    printJustThisOne: "Udskriv kun denne",
    vetNote:
      "Siderne udfyldes med det, du har gemt, og står tomme der, hvor du ikke har — så et frisk ark stadig virker med en kuglepen. Alt bliver på din enhed.",
  },
  se: {
    eyebrow: "Skriv ut och spara",
    title: "Något du kan hålla i handen",
    introFor: (name: string) =>
      `Allt du har skrivit om ${name} kan skrivas ut på papper — till kylskåpsdörren, hundvakten, eller mappen du förvarar i en låda.`,
    dogFallback: "din hund",
    wholePack: "Skapa hela hundpaketet",
    printChosen: (n: number) => `Skriv ut det jag har valt (${n})`,
    includeAria: (title: string) => `Inkludera ${title}`,
    printJustThisOne: "Skriv bara ut den här",
    vetNote:
      "Sidorna fylls i med det du har sparat, och lämnas tomma där du inte har — så ett nytt papper fortfarande fungerar med en penna. Allt stannar på din enhet.",
  },
  fi: {
    eyebrow: "Tulosta ja tallenna",
    title: "Jotain, mitä voit pitää kädessäsi",
    introFor: (name: string) =>
      `Kaiken, mitä olet kirjoittanut ${name}sta, voi tulostaa paperille — jääkaapin oveen, koiranhoitajalle tai laatikossa säilytettävään kansioon.`,
    dogFallback: "koirastasi",
    wholePack: "Tee koko koirapaketti",
    printChosen: (n: number) => `Tulosta valitsemani (${n})`,
    includeAria: (title: string) => `Sisällytä ${title}`,
    printJustThisOne: "Tulosta vain tämä",
    vetNote:
      "Sivut täytetään sillä, mitä olet tallentanut, ja jätetään tyhjiksi siltä osin kuin et ole — joten tuore arkki toimii silti kynällä täytettynä. Kaikki pysyy laitteellasi.",
  },
} as const;

function PrintPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const navigate = useNavigate();
  const [picked, setPicked] = useState<string[]>(["profile"]);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const open = (ids: string[]) =>
    navigate({ to: withLangPrefix("/my-dog/pack"), search: { docs: ids.join(",") } });

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{c.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {c.introFor(dog?.name ?? c.dogFallback)}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => open(packOrder)}>
            <Printer className="h-4 w-4" />
            {c.wholePack}
            <Arrow />
          </Button>
          <Button
            tone="outline"
            size="lg"
            disabled={picked.length === 0}
            onClick={() => open(picked)}
          >
            {c.printChosen(picked.length)}
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
                    aria-label={c.includeAria(doc.title)}
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
                  {c.printJustThisOne}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-10 max-w-2xl">
          <VetNote>{c.vetNote}</VetNote>
        </div>
      </Section>
    </div>
  );
}
