import { useEffect } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/dogmatch/ui";
import { DocPaper } from "@/components/dogmatch/print/doc";
import { buildDocument, documentsById, packOrder } from "@/lib/print/documents";
import { useDocContext } from "@/lib/print/context";
import { useCopy } from "@/i18n";
import { noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Your printable pages | DoggMatch";
const description = "A print-ready set of pages for your dog, made from what you've saved.";

export const Route = createFileRoute("/{-$lang}/my-dog/pack")({
  validateSearch: (search: Record<string, unknown>) => ({
    docs: typeof search["docs"] === "string" && search["docs"] ? (search["docs"] as string) : "profile",
  }),
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
  component: PackPage,
});

const copy = {
  en: {
    backLink: "Choose different pages",
    printOrSave: "Print or save as PDF",
    printHint:
      'This is exactly how it will print. Choose "Save as PDF" in the print dialog if you\'d rather keep it on your phone.',
    wholePackTitle: "The DoggMatch Dog Pack",
    dogPack: "Dog pack",
    dogNameFallback: "My dog",
    subtitleWhole:
      "Everything worth having on paper — who your dog is, what they eat, how your week runs, and who to call.",
    subtitlePart: "Printed from DoggMatch. Fill in anything that's blank by hand.",
  },
  no: {
    backLink: "Velg andre sider",
    printOrSave: "Skriv ut eller lagre som PDF",
    printHint:
      'Slik vil dette se ut på papir. Velg «Lagre som PDF» i utskriftsdialogen hvis du heller vil ha det på telefonen.',
    wholePackTitle: "Den komplette DoggMatch-hundepakken",
    dogPack: "Hundepakke",
    dogNameFallback: "Hunden min",
    subtitleWhole:
      "Alt som er verdt å ha på papir — hvem hunden din er, hva den spiser, hvordan uken din går, og hvem du skal ringe.",
    subtitlePart: "Skrevet ut fra DoggMatch. Fyll inn det som er tomt for hånd.",
  },
  pl: {
    backLink: "Wybierz inne strony",
    printOrSave: "Wydrukuj lub zapisz jako PDF",
    printHint:
      'Tak dokładnie będzie to wyglądać na wydruku. Wybierz „Zapisz jako PDF” w oknie drukowania, jeśli wolisz mieć to na telefonie.',
    wholePackTitle: "Kompletny pakiet DoggMatch dla psa",
    dogPack: "Pakiet dla psa",
    dogNameFallback: "Mój pies",
    subtitleWhole:
      "Wszystko, co warto mieć na papierze — kim jest twój pies, co je, jak wygląda twój tydzień i do kogo dzwonić.",
    subtitlePart: "Wydrukowano z DoggMatch. Puste pola uzupełnij ręcznie.",
  },
  dk: {
    backLink: "Vælg andre sider",
    printOrSave: "Udskriv eller gem som PDF",
    printHint:
      'Sådan vil dette se ud på papir. Vælg "Gem som PDF" i udskriftsdialogen, hvis du hellere vil have det på telefonen.',
    wholePackTitle: "Den komplette DoggMatch hundepakke",
    dogPack: "Hundepakke",
    dogNameFallback: "Min hund",
    subtitleWhole:
      "Alt der er værd at have på papir — hvem din hund er, hvad den spiser, hvordan din uge kører, og hvem du skal ringe til.",
    subtitlePart: "Udskrevet fra DoggMatch. Udfyld det, der er tomt, i hånden.",
  },
  se: {
    backLink: "Välj andra sidor",
    printOrSave: "Skriv ut eller spara som PDF",
    printHint:
      'Så här kommer det se ut på papper. Välj "Spara som PDF" i utskriftsdialogen om du hellre vill ha det på telefonen.',
    wholePackTitle: "Det kompletta DoggMatch-hundpaketet",
    dogPack: "Hundpaket",
    dogNameFallback: "Min hund",
    subtitleWhole:
      "Allt som är värt att ha på papper — vem din hund är, vad den äter, hur din vecka ser ut och vem du ska ringa.",
    subtitlePart: "Utskrivet från DoggMatch. Fyll i det som är tomt för hand.",
  },
  fi: {
    backLink: "Valitse muita sivuja",
    printOrSave: "Tulosta tai tallenna PDF:nä",
    printHint:
      'Näin tämä näyttää paperilla. Valitse tulostusikkunassa "Tallenna PDF:nä", jos haluat sen mieluummin puhelimeesi.',
    wholePackTitle: "Koko DoggMatch-koirapaketti",
    dogPack: "Koirapaketti",
    dogNameFallback: "Koirani",
    subtitleWhole:
      "Kaikki, mikä kannattaa olla paperilla — kuka koirasi on, mitä se syö, miltä viikkosi näyttää ja kenelle soittaa.",
    subtitlePart: "Tulostettu DoggMatchista. Täytä tyhjät kohdat käsin.",
  },
} as const;

function PackPage() {
  const c = useCopy(copy);
  const { docs } = Route.useSearch();
  const ctx = useDocContext();

  const ids = docs.split(",").filter((id) => documentsById[id]);
  const sections = buildDocument(ids.length ? ids : ["profile"], ctx);
  const whole = ids.length >= packOrder.length - 1;
  const docTitle = whole
    ? c.wholePackTitle
    : ids.length === 1
      ? (documentsById[ids[0]!]?.title ?? c.dogPack)
      : c.dogPack;

  useEffect(() => {
    document.body.classList.add("bg-background");
    return () => document.body.classList.remove("bg-background");
  }, []);

  return (
    <div className="doc-print-root pb-16">
      <div className="no-print container-page flex flex-wrap items-center justify-between gap-4 pt-28 md:pt-32">
        <Link
          to={withLangPrefix("/my-dog/print")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {c.backLink}
        </Link>
        <Button size="md" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
          {c.printOrSave}
        </Button>
      </div>

      <p className="no-print container-page mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {c.printHint}
      </p>

      <div className="container-page mt-10 overflow-x-auto">
        <DocPaper
          title={docTitle}
          dogName={ctx.dog?.name ?? c.dogNameFallback}
          {...(ctx.breedName ? { breedName: ctx.breedName } : {})}
          {...(ctx.details.photo ? { photo: ctx.details.photo } : {})}
          subtitle={whole ? c.subtitleWhole : c.subtitlePart}
          contents={ids.map((id) => documentsById[id]?.title ?? id)}
          sections={sections}
          date={ctx.today}
        />
      </div>
    </div>
  );
}
