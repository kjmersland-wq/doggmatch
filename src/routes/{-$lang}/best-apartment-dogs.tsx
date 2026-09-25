import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd, faqLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { localeFromParam } from "@/i18n/locale";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { ClusterHubExtras } from "@/components/dogmatch/cluster-page";
import { getClusterHub } from "@/lib/guides/clusters/clusters.functions";
import { APARTMENT_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/best-apartment-dogs")({
  loader: ({ params }) =>
    getClusterHub({
      data: { cluster: "apartment", locale: localeFromParam((params as { lang?: string }).lang) ?? "en" },
    }),
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = APARTMENT_GUIDE.seo[locale] ?? APARTMENT_GUIDE.seo.en;
    const hub = ctx.loaderData;
    return {
      ...localizedHead(ctx, APARTMENT_GUIDE.path, APARTMENT_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: APARTMENT_GUIDE.path },
          ],
          locale,
        ),
        ...(hub ? [faqLd(hub.faq.map((f) => ({ question: f.q, answer: f.a })))] : []),
      ],
    };
  },
  component: ApartmentGuidePage,
});

function ApartmentGuidePage() {
  const hub = Route.useLoaderData();
  return (
    <>
      <LifestyleGuide config={APARTMENT_GUIDE} />
      <ClusterHubExtras data={hub} />
    </>
  );
}
