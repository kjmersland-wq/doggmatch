import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/dogmatch/ui";
import { SafetyDot } from "@/components/dogmatch/care/parts";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { ShareBar } from "@/components/dogmatch/share";
import { useCopy, useLocale } from "@/i18n";
import type { FoodSafety } from "@/data/care/types";
import { withLangPrefix } from "@/lib/localized-path";
import { foodExists, foodFor, relatedFoods } from "@/lib/food";
import {
  abs,
  breadcrumbLd,
  deUrl,
  dkUrl,
  fiUrl,
  frUrl,
  headLocale,
  jsonLd,
  langUrl,
  nlUrl,
  noUrl,
  plUrl,
  seUrl,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

/** "Can dogs eat X?" — the phrase people actually type, in each language. */
const question = {
  en: (name: string) => `Can dogs eat ${name.toLowerCase()}?`,
  no: (name: string) => `Kan hunder spise ${name.toLowerCase()}?`,
  pl: (name: string) => `Czy psy mogą jeść ${name.toLowerCase()}?`,
  dk: (name: string) => `Må hunde spise ${name.toLowerCase()}?`,
  se: (name: string) => `Kan hundar äta ${name.toLowerCase()}?`,
  fi: (name: string) => `Voiko koira syödä ${name.toLowerCase()}?`,
  de: (name: string) => `Dürfen Hunde ${name.toLowerCase()} fressen?`,
  fr: (name: string) => `Les chiens peuvent-ils manger ${name.toLowerCase()} ?`,
  nl: (name: string) => `Mogen honden ${name.toLowerCase()} eten?`,
};

const verdict = {
  en: {
    safe: "Yes — fine in small amounts",
    care: "Yes, but be careful",
    avoid: "No — don't give this",
  },
  no: {
    safe: "Ja — greit i små mengder",
    care: "Ja, men vær forsiktig",
    avoid: "Nei — ikke gi dette",
  },
  pl: {
    safe: "Tak — w porządku w małych ilościach",
    care: "Tak, ale ostrożnie",
    avoid: "Nie — nie podawaj tego",
  },
  dk: {
    safe: "Ja — fint i små mængder",
    care: "Ja, men vær forsigtig",
    avoid: "Nej — giv ikke hunden dette",
  },
  se: {
    safe: "Ja — okej i små mängder",
    care: "Ja, men var försiktig",
    avoid: "Nej — ge inte din hund detta",
  },
  fi: {
    safe: "Kyllä — pieninä määrinä sopii",
    care: "Kyllä, mutta varovasti",
    avoid: "Ei — älä anna tätä koiralle",
  },
  de: {
    safe: "Ja — in kleinen Mengen unbedenklich",
    care: "Ja, aber mit Bedacht",
    avoid: "Nein — das bitte nicht geben",
  },
  fr: {
    safe: "Oui — sans souci en petite quantité",
    care: "Oui, mais avec prudence",
    avoid: "Non — à ne pas donner",
  },
  nl: {
    safe: "Ja — prima in kleine hoeveelheden",
    care: "Ja, maar wees voorzichtig",
    avoid: "Nee — geef dit niet",
  },
} as const satisfies Record<
  "en" | "no" | "pl" | "dk" | "se" | "fi" | "de" | "fr" | "nl",
  Record<FoodSafety, string>
>;

export const Route = createFileRoute("/{-$lang}/can-dogs-eat/$foodId")({
  loader: ({ params }) => {
    if (!foodExists(params.foodId)) throw notFound();
    return { foodId: params.foodId };
  },
  head: (ctx) => {
    const locale = headLocale(ctx);
    const id = ctx.params.foodId;
    const item = foodFor(locale, id);
    if (!item) {
      return {
        meta: [
          { title: "We haven't covered that food yet — DoggMatch" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const path = `/can-dogs-eat/${id}`;
    const heading = question[locale](item.name);
    const title = `${heading} — a straight answer | DoggMatch`;
    const description = `${verdict[locale][item.safety]}. ${item.body}`.slice(0, 300);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: langUrl(path, locale) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: langUrl(path, locale) },
        { rel: "alternate", hreflang: "en", href: abs(path) },
        { rel: "alternate", hreflang: "nb-NO", href: noUrl(path) },
        { rel: "alternate", hreflang: "pl-PL", href: plUrl(path) },
        { rel: "alternate", hreflang: "da-DK", href: dkUrl(path) },
        { rel: "alternate", hreflang: "sv-SE", href: seUrl(path) },
        { rel: "alternate", hreflang: "fi-FI", href: fiUrl(path) },
        { rel: "alternate", hreflang: "de-DE", href: deUrl(path) },
        { rel: "alternate", hreflang: "fr-FR", href: frUrl(path) },
        { rel: "alternate", hreflang: "nl-NL", href: nlUrl(path) },
        { rel: "alternate", hreflang: "x-default", href: abs(path) },
      ],
      scripts: [
        breadcrumbLd([
          { name: "DoggMatch", path: "/" },
          { name: "Can dogs eat that?", path: "/can-dogs-eat" },
          { name: item.name, path },
        ]),
        jsonLd({
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: heading,
              acceptedAnswer: {
                "@type": "Answer",
                text: [verdict[locale][item.safety], item.body, item.serving, item.warning]
                  .filter(Boolean)
                  .join(" "),
              },
            },
          ],
        }),
      ],
    };
  },
  component: FoodAnswer,
});

const copy = {
  en: {
    eyebrow: "Food safety",
    howMuch: "How much",
    watchOut: "If your dog has already eaten it",
    basedOn: "Based on guidance from",
    relatedTitle: "Other foods people ask about",
    backLink: "See every food, A–Z",
    honest:
      "Dogs differ, and amount matters — a crumb of something rich is not the same as half a packet. Treats of any kind should stay under a tenth of what your dog eats in a day. If you're unsure, your vet would far rather take the call.",
    honestTitle: "Being honest about this",
  },
  de: {
    eyebrow: "Lebensmittelsicherheit",
    howMuch: "Wie viel",
    watchOut: "Wenn Ihr Hund es bereits gefressen hat",
    basedOn: "Basierend auf Empfehlungen von",
    relatedTitle: "Andere Lebensmittel, nach denen Leute fragen",
    backLink: "Alle Lebensmittel anzeigen, A–Z",
    honest:
      "Hunde sind unterschiedlich, und die Menge spielt eine Rolle – ein Krümel von etwas Reichhaltigem ist nicht dasselbe wie eine halbe Packung. Leckerlis jeglicher Art sollten unter einem Zehntel dessen bleiben, was Ihr Hund täglich frisst. Wenn Sie unsicher sind, ruft Ihr Tierarzt lieber einmal zu viel als zu wenig an.",
    honestTitle: "Ehrlich gesagt",
  },
  fr: {
    eyebrow: "Sécurité alimentaire",
    howMuch: "Quelle quantité",
    watchOut: "Si votre chien en a déjà mangé",
    basedOn: "Basé sur les recommandations de",
    relatedTitle: "Autres aliments qui suscitent des questions",
    backLink: "Voir tous les aliments, A-Z",
    honest:
      "Les chiens sont différents, et la quantité compte — une miette de quelque chose de riche n'est pas la même chose qu'un demi-paquet. Les friandises, quelles qu'elles soient, ne devraient pas dépasser un dixième de ce que votre chien mange par jour. En cas de doute, votre vétérinaire préférera de loin recevoir votre appel.",
    honestTitle: "Soyons honnêtes à ce sujet",
  },
  nl: {
    eyebrow: "Voedselveiligheid",
    howMuch: "Hoeveel",
    watchOut: "Als je hond het al heeft gegeten",
    basedOn: "Gebaseerd op advies van",
    relatedTitle: "Andere voedingsmiddelen waar mensen naar vragen",
    backLink: "Bekijk al het voedsel, A–Z",
    honest:
      "Honden verschillen, en de hoeveelheid is belangrijk – een kruimel van iets rijks is niet hetzelfde als de helft van een pakje. Snoepjes van welke soort dan ook moeten minder dan een tiende blijven van wat je hond per dag eet. Als je twijfelt, neemt je dierenarts liever even contact op.",
    honestTitle: "Eerlijk hierover zijn",
  },
  no: {
    eyebrow: "Mattrygghet",
    howMuch: "Hvor mye",
    watchOut: "Hvis hunden allerede har spist det",
    basedOn: "Basert på råd fra",
    relatedTitle: "Andre matvarer folk lurer på",
    backLink: "Se alle matvarer, A–Å",
    honest:
      "Hunder er forskjellige, og mengden betyr noe. Godbiter bør holde seg under en tiendedel av det hunden spiser i løpet av dagen. Er du usikker, tar veterinæren gjerne telefonen.",
    honestTitle: "Helt ærlig om dette",
  },
  pl: {
    eyebrow: "Bezpieczeństwo żywności",
    howMuch: "Ile",
    watchOut: "Jeśli pies już to zjadł",
    basedOn: "Na podstawie wskazówek od",
    relatedTitle: "Inne produkty, o które ludzie pytają",
    backLink: "Zobacz wszystkie produkty, A–Z",
    honest:
      "Psy się różnią, a ilość ma znaczenie. Przysmaki powinny stanowić mniej niż jedną dziesiątą dziennej porcji. W razie wątpliwości zadzwoń do weterynarza.",
    honestTitle: "Szczerze o tym",
  },
  dk: {
    eyebrow: "Fødevaresikkerhed",
    howMuch: "Hvor meget",
    watchOut: "Hvis hunden allerede har spist det",
    basedOn: "Baseret på rådgivning fra",
    relatedTitle: "Andre fødevarer folk spørger om",
    backLink: "Se alle fødevarer, A–Å",
    honest:
      "Hunde er forskellige, og mængden betyder noget — en krumme af noget kraftigt er ikke det samme som en halv pose. Godbidder bør holde sig under en tiendedel af det, hunden spiser på en dag. Er du i tvivl, tager din dyrlæge langt hellere telefonen.",
    honestTitle: "Helt ærligt om det her",
  },
  se: {
    eyebrow: "Matsäkerhet",
    howMuch: "Hur mycket",
    watchOut: "Om hunden redan har ätit det",
    basedOn: "Baserat på rådgivning från",
    relatedTitle: "Andra livsmedel folk undrar över",
    backLink: "Se alla livsmedel, A–Ö",
    honest:
      "Hundar är olika, och mängden spelar roll — en smula av något kraftigt är inte samma sak som en halv påse. Godis av alla slag bör hållas under en tiondel av det hunden äter under en dag. Är du osäker tar veterinären hellre ett samtal för mycket än för lite.",
    honestTitle: "Helt ärligt om det här",
  },
  fi: {
    eyebrow: "Ruokaturvallisuus",
    howMuch: "Kuinka paljon",
    watchOut: "Jos koira on jo syönyt sitä",
    basedOn: "Perustuu ohjeisiin lähteestä",
    relatedTitle: "Muita ruokia, joista kysytään usein",
    backLink: "Katso kaikki ruoka-aineet, A–Ö",
    honest:
      "Koirat ovat yksilöitä, ja määrällä on väliä — murunen jotain raskasta ei ole sama asia kuin puoli pussillista. Herkkujen osuus koiran päivittäisestä ruoasta kannattaa pitää alle kymmenesosassa. Jos olet epävarma, eläinlääkäri ottaa mieluummin vastaan turhankin puhelun.",
    honestTitle: "Rehellisesti tästä aiheesta",
  },
} as const;

function FoodAnswer() {
  const c = useCopy(copy);
  const { locale } = useLocale();
  const { foodId } = Route.useLoaderData();
  const item = foodFor(locale, foodId);
  if (!item) return null;
  const related = relatedFoods(locale, foodId);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{question[locale](item.name)}</h1>

        <div
          className={cn(
            "mt-8 inline-flex items-center gap-3 rounded-full border px-5 py-3 text-[0.9375rem]",
            item.safety === "avoid"
              ? "border-destructive/40 bg-destructive/5 text-destructive"
              : "border-border bg-surface",
          )}
        >
          <SafetyDot safety={item.safety} />
          <span>{verdict[locale][item.safety]}</span>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{item.body}</p>
        <ShareBar className="mt-8" />
      </section>

      <Section className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="grid gap-6">
            {item.serving && (
              <div className="rounded-[1.5rem] border border-border bg-card p-7">
                <h2 className="font-display text-xl tracking-tight">{c.howMuch}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {item.serving}
                </p>
              </div>
            )}
            {item.warning && (
              <div className="rounded-[1.5rem] border border-destructive/30 bg-destructive/5 p-7">
                <h2 className="font-display text-xl tracking-tight text-destructive">
                  {c.watchOut}
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-destructive">
                  {item.warning}
                </p>
              </div>
            )}
            <div className="rounded-[1.5rem] border border-border bg-surface p-7">
              <h2 className="font-display text-xl tracking-tight">{c.honestTitle}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {c.honest}
              </p>
            </div>
            {item.source && (
              <p className="text-xs text-muted-foreground">
                {c.basedOn}: {item.source.label} — {item.source.org}
              </p>
            )}
            <SourcesLink category="nutrition" />
          </div>

          <div className="rounded-[1.5rem] border border-border bg-card px-6 py-6 md:px-8">
            <h2 className="font-display text-xl tracking-tight">{c.relatedTitle}</h2>
            <ul className="mt-4 grid gap-1">
              {related.map((f) => (
                <li key={f.id}>
                  <Link
                    to={withLangPrefix("/can-dogs-eat/$foodId")}
                    params={{ foodId: f.id }}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.9375rem] transition-colors hover:bg-surface"
                  >
                    <SafetyDot safety={f.safety} />
                    <span>{f.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={withLangPrefix("/can-dogs-eat")}
              className="mt-5 inline-flex text-sm text-accent underline decoration-border underline-offset-4 hover:decoration-accent"
            >
              {c.backLink}
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
