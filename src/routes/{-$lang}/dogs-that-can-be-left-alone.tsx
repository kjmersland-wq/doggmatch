import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd, faqLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { localeFromParam } from "@/i18n/locale";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { ClusterHubExtras } from "@/components/dogmatch/cluster-page";
import { getClusterHub } from "@/lib/guides/clusters/clusters.functions";
import { ALONE_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/dogs-that-can-be-left-alone")({
  loader: ({ params }) =>
    getClusterHub({
      data: { cluster: "alone", locale: localeFromParam((params as { lang?: string }).lang) ?? "en" },
    }),
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = ALONE_GUIDE.seo[locale] ?? ALONE_GUIDE.seo.en;
    const hub = ctx.loaderData;
    return {
      ...localizedHead(ctx, ALONE_GUIDE.path, ALONE_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: ALONE_GUIDE.path },
          ],
          locale,
        ),
        ...(hub ? [faqLd(hub.faq.map((f) => ({ question: f.q, answer: f.a })))] : []),
      ],
    };
  },
  component: AloneGuidePage,
});

function AloneGuidePage() {
  const hub = Route.useLoaderData();
  return (
    <>
      <LifestyleGuide config={ALONE_GUIDE} />
      <ClusterHubExtras data={hub} />
    </>
  );
}
