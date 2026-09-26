import { createFileRoute, redirect } from "@tanstack/react-router";

/** /pricing used to 404. Pricing lives on the DoggMatch+ page — 301 there, language kept. */
export const Route = createFileRoute("/{-$lang}/pricing")({
  beforeLoad: ({ params }) => {
    const prefix = params.lang ? `/${params.lang}` : "";
    throw redirect({ href: `${prefix}/plus#membership`, statusCode: 301 });
  },
});
