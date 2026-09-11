import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/dogmatch/ui";
import { SafetyDot, VetNote } from "@/components/dogmatch/care/parts";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { ShareBar } from "@/components/dogmatch/share";
import { useCopy, useLocale } from "@/i18n";
import type { FoodSafety } from "@/data/care/types";
import { withLangPrefix } from "@/lib/localized-path";
import { foodExists, foodFor, relatedFoods } from "@/lib/food";
import { abs, breadcrumbLd, headLocale, jsonLd, langUrl, noUrl, plUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

/** "Can dogs eat X?" — the phrase people actually type, in each language. */
const question = {
  en: (name: string) => `Can dogs eat ${name.toLowerCase()}?`,
  no: (name: string) => `Kan hunder spise ${name.toLowerCase()}?`,
  pl: (name: string) => `Czy psy mogą jeść ${name.toLowerCase()}?`,
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
} as const satisfies Record<"en" | "no" | "pl", Record<FoodSafety, string>>;

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
      return { meta: [{ title: "We haven't covered that food yet — DoggMatch" }, { name: "robots", content: "noindex" }] };
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
        { rel: "alternate", hrefLang: "en", href: abs(path) },
        { rel: "alternate", hrefLang: "nb-NO", href: noUrl(path) },
        { rel: "alternate", hrefLang: "pl-PL", href: plUrl(path) },
        { rel: "alternate", hrefLang: "x-default", href: abs(path) },
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
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.serving}</p>
              </div>
            )}
            {item.warning && (
              <div className="rounded-[1.5rem] border border-destructive/30 bg-destructive/5 p-7">
                <h2 className="font-display text-xl tracking-tight text-destructive">{c.watchOut}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-destructive">{item.warning}</p>
              </div>
            )}
            <div className="rounded-[1.5rem] border border-border bg-surface p-7">
              <h2 className="font-display text-xl tracking-tight">{c.honestTitle}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.honest}</p>
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
