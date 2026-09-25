import { createFileRoute, notFound } from "@tanstack/react-router";
import { breadcrumbLd, faqLd, headLocale, jsonLd, langUrl, localizedHead } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { localeFromParam } from "@/i18n/locale";
import { CLUSTER_OF } from "@/lib/guides/clusters/registry";
import { getClusterPage } from "@/lib/guides/clusters/clusters.functions";
import { ClusterPage } from "@/components/dogmatch/cluster-page";

/** Support pages of the topic clusters, e.g. /guides/quiet-apartment-dogs. */
export const Route = createFileRoute("/{-$lang}/guides/$slug")({
  loader: async ({ params }) => {
    if (!CLUSTER_OF[params.slug]) throw notFound();
    const locale = localeFromParam((params as { lang?: string }).lang) ?? "en";
    return getClusterPage({ data: { slug: params.slug, locale } });
  },
  head: (ctx) => {
    const data = ctx.loaderData;
    if (!data) return { meta: [{ name: "robots", content: "noindex" }] };
    const locale = headLocale(ctx);
    const { copy } = data;
    const head = localizedHead(ctx, data.path, { en: { title: copy.title, description: copy.description } }, { type: "article" });
    return {
      ...head,
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: copy.h1, path: data.path },
          ],
          locale,
        ),
        faqLd(copy.faq.map((f) => ({ question: f.q, answer: f.a }))),
        jsonLd({
          "@type": "Article",
          headline: copy.h1,
          description: copy.description,
          inLanguage: locale,
          author: { "@type": "Organization", name: "DoggMatch" },
          publisher: { "@type": "Organization", name: "DoggMatch" },
          mainEntityOfPage: langUrl(data.path, locale),
        }),
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const data = Route.useLoaderData();
  return <ClusterPage data={data} />;
}
