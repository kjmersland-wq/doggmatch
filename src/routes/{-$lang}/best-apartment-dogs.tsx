import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { APARTMENT_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/best-apartment-dogs")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = APARTMENT_GUIDE.seo[locale] ?? APARTMENT_GUIDE.seo.en;
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
      ],
    };
  },
  component: () => <LifestyleGuide config={APARTMENT_GUIDE} />,
});
