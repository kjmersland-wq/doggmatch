import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd, faqLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { localeFromParam } from "@/i18n/locale";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { ClusterHubExtras } from "@/components/dogmatch/cluster-page";
import { getClusterHub } from "@/lib/guides/clusters/clusters.functions";
import { FIRST_TIME_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/best-dogs-for-first-time-owners")({
  loader: ({ params }) =>
    getClusterHub({
      data: { cluster: "first-time", locale: localeFromParam((params as { lang?: string }).lang) ?? "en" },
    }),
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = FIRST_TIME_GUIDE.seo[locale] ?? FIRST_TIME_GUIDE.seo.en;
    const hub = ctx.loaderData;
    return {
      ...localizedHead(ctx, FIRST_TIME_GUIDE.path, FIRST_TIME_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: FIRST_TIME_GUIDE.path },
          ],
          locale,
        ),
        ...(hub ? [faqLd(hub.faq.map((f) => ({ question: f.q, answer: f.a })))] : []),
      ],
    };
  },
  component: FirstTimeGuidePage,
});

function FirstTimeGuidePage() {
  const hub = Route.useLoaderData();
  return (
    <>
      <LifestyleGuide config={FIRST_TIME_GUIDE} />
      <ClusterHubExtras data={hub} />
    </>
  );
}
