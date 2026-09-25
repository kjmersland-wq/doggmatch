import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd, faqLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { localeFromParam } from "@/i18n/locale";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { ClusterHubExtras } from "@/components/dogmatch/cluster-page";
import { getClusterHub } from "@/lib/guides/clusters/clusters.functions";
import { LOW_SHEDDING_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/low-shedding-dogs")({
  loader: ({ params }) =>
    getClusterHub({
      data: { cluster: "low-shedding", locale: localeFromParam((params as { lang?: string }).lang) ?? "en" },
    }),
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = LOW_SHEDDING_GUIDE.seo[locale] ?? LOW_SHEDDING_GUIDE.seo.en;
    const hub = ctx.loaderData;
    return {
      ...localizedHead(ctx, LOW_SHEDDING_GUIDE.path, LOW_SHEDDING_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: LOW_SHEDDING_GUIDE.path },
          ],
          locale,
        ),
        ...(hub ? [faqLd(hub.faq.map((f) => ({ question: f.q, answer: f.a })))] : []),
      ],
    };
  },
  component: LowSheddingGuidePage,
});

function LowSheddingGuidePage() {
  const hub = Route.useLoaderData();
  return (
    <>
      <LifestyleGuide config={LOW_SHEDDING_GUIDE} />
      <ClusterHubExtras data={hub} />
    </>
  );
}
