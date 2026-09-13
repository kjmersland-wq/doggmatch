import { Link } from "@tanstack/react-router";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { ShareBar, SectionShare } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";
import { breedContent } from "@/data/breed-content";
import type { BreedId } from "@/data/breeds";
import type { LifestyleGuideConfig } from "@/lib/guides/lifestyle";

function LevelDot({ level, label }: { level: number; label: string }) {
  const tone =
    level >= 4 ? "bg-accent" : level === 3 ? "bg-amber-500" : "bg-muted-foreground/40";
  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className={`h-2.5 w-2.5 rounded-full ${tone}`} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

const eur = (n: number) => `€${n.toLocaleString("en-IE")}`;

/**
 * Shared renderer for the high-intent lifestyle guides
 * (src/lib/guides/lifestyle.ts). One consistent, honest editorial layout:
 * intro, transparent methodology, optional breed shortlist, editorial
 * sections, optional real cost examples, and a calm quiz CTA.
 */
export function LifestyleGuide({ config }: { config: LifestyleGuideConfig }) {
  const c = config.copy;
  const content = breedContent();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.h1,
    description: config.seo.description,
    author: { "@type": "Organization", name: "DoggMatch" },
    publisher: { "@type": "Organization", name: "DoggMatch" },
    mainEntityOfPage: `https://www.doggmatch.com${config.path}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {c.h1}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      <div className="mt-6">
        <ShareBar path={config.path} title={c.h1} />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {c.howChosenTitle}
        </h2>
        <ul className="mt-5 space-y-3">
          {c.howChosen.map((point) => (
            <li key={point} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {config.shortlist && c.listTitle && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {c.listTitle}
          </h2>
          {c.listIntro && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{c.listIntro}</p>
          )}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {config.shortlist.map((breed) => {
              const bc = content[breed.id as BreedId];
              return (
                <div
                  key={breed.id}
                  className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {bc?.displayName ?? breed.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {config.reasons?.[breed.id] ?? bc?.summary ?? ""}
                  </p>
                  <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {c.metrics.map((m) => (
                      <div key={m.key} className="flex items-center justify-between">
                        <dt>{m.label}</dt>
                        <dd>
                          <LevelDot
                            level={breed.traits[m.key]}
                            label={c.levelLabels[breed.traits[m.key] - 1] ?? ""}
                          />
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    to={withLangPrefix("/breeds/$breedId")}
                    params={{ breedId: breed.id }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    {c.readProfile}
                    <Arrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
          {c.tradeoffNote && (
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {c.tradeoffNote}
            </p>
          )}
          <SectionShare anchor="shortlist" title={c.listTitle} />
        </section>
      )}

      {c.sections?.map((section, i) => (
        <section key={section.title} className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {section.title}
          </h2>
          {section.paragraphs.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {config.costExamples && i === c.sections!.length - 1 && (
            <div className="mt-6 overflow-x-auto rounded-3xl border border-border">
              <table className="w-full min-w-[30rem] text-sm">

                <thead>
                  <tr className="border-b border-border bg-surface text-left text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Example</th>
                    <th className="px-5 py-3 font-medium">Breed</th>
                    <th className="px-5 py-3 font-medium text-right">Typical yearly cost</th>
                  </tr>
                </thead>
                <tbody>
                  {config.costExamples.map(({ breed, sizeLabel }) => (
                    <tr key={breed.id} className="border-b border-border last:border-0">
                      <td className="px-5 py-3 text-muted-foreground">{sizeLabel}</td>
                      <td className="px-5 py-3">
                        <Link
                          to={withLangPrefix("/breeds/$breedId")}
                          params={{ breedId: breed.id }}
                          className="font-medium text-accent hover:underline"
                        >
                          {content[breed.id as BreedId]?.displayName ?? breed.name}
                        </Link>
                      </td>
                      <td className="px-5 py-3 text-right text-foreground">
                        {eur(breed.annualCost[0])}–{eur(breed.annualCost[1])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      <section className="mt-14 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
        <h2 className="font-display text-2xl font-semibold">{c.quizTitle}</h2>
        <p className="mt-4 leading-relaxed opacity-90">{c.quizBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to={withLangPrefix("/find-my-dog")}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {c.quizCta}
          </Link>
          <Link
            to={withLangPrefix("/compare")}
            className="inline-flex h-12 items-center justify-center rounded-full border border-primary-foreground/30 px-7 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            {c.compareCta}
          </Link>
        </div>
      </section>
    </article>
  );
}
