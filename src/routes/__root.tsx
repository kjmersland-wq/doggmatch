import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LocaleProvider, useCopy } from "@/i18n";
import { HTML_LANG, localeFromParam } from "@/i18n/locale";
import { SiteHeader } from "@/components/dogmatch/site-header";
import { SiteFooter } from "@/components/dogmatch/site-footer";
import { MobileTabs } from "@/components/dogmatch/mobile-tabs";
import { CookieConsent } from "@/components/dogmatch/cookie-consent";
import { ShareStrip } from "@/components/dogmatch/share";

const shellCopy = {
  en: {
    notFound: "This page seems to have wandered off.",
    notFoundBody: "No harm done — let's get you back on track.",
    back: "Back to DoggMatch",
    errorTitle: "Something went wrong on our side.",
    errorBody: "Sorry about that. Your answers are safe — give it another go.",
    retry: "Try again",
    home: "Go home",
  },
  no: {
    notFound: "Denne siden ser ut til å ha stukket av.",
    notFoundBody: "Ingen skade skjedd — la oss få deg på rett spor igjen.",
    back: "Tilbake til DoggMatch",
    errorTitle: "Noe gikk galt hos oss.",
    errorBody: "Beklager det. Svarene dine er trygge — prøv en gang til.",
    retry: "Prøv igjen",
    home: "Til forsiden",
  },
  pl: {
    notFound: "Wygląda na to, że ta strona gdzieś się zawieruszyła.",
    notFoundBody: "Nic straconego — wracamy na właściwy trop.",
    back: "Wróć do DoggMatch",
    errorTitle: "Coś poszło nie tak po naszej stronie.",
    errorBody: "Przepraszamy za to. Twoje odpowiedzi są bezpieczne — spróbuj jeszcze raz.",
    retry: "Spróbuj ponownie",
    home: "Strona główna",
  },
};

function NotFoundComponent() {
  const c = useCopy(shellCopy);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="display-lg mt-5">{c.notFound}</h1>
        <p className="mt-4 text-muted-foreground">
          {c.notFoundBody}
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            {c.back}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const c = useCopy(shellCopy);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="display-md">{c.errorTitle}</h1>
        <p className="mt-3 text-muted-foreground">
          {c.errorBody}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            {c.retry}
          </button>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border-strong px-7 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            {c.home}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#071A2F" },
      { title: "DoggMatch — breed matching, training and everyday dog care" },
      {
        name: "description",
        content:
          "DoggMatch helps you choose a breed, train your dog and look after it day to day, with the reasoning behind every answer shown openly.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: "DoggMatch" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        children:
          "(function(){try{var m=localStorage.getItem('doggmatch.theme');if(!m){m=window.matchMedia('(prefers-color-scheme: dark)').matches?'night':'day';}if(m==='night'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DoggMatch",
          url: "https://www.doggmatch.com/",
          inLanguage: ["en", "nb-NO", "pl-PL"],
          description:
            "A friendly, honest way to work out which dog would really suit your life.",
          publisher: {
            "@type": "Organization",
            name: "KM TECH LABS",
            legalName: "KM TECH LABS",
            url: "https://www.doggmatch.com/",
            logo: "https://www.doggmatch.com/icon-192.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kristiansand",
              addressCountry: "NO",
            },
            identifier: "934 044 029",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const langParam = useRouterState({
    select: (s) => (s.location.search as { lang?: string } | undefined)?.lang,
  });
  const lang = HTML_LANG[localeFromParam(langParam) ?? "en"];
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <RootBody queryClient={queryClient} />
  );
}

/** Keyboard users get straight to the content, ahead of the navigation. */
function SkipLink() {
  const c = useCopy({ en: { skip: "Skip to content" }, no: { skip: "Hopp til innhold" }, pl: { skip: "Przejdź do treści" } });
  return (
    <a href="#main" className="skip-link">
      {c.skip}
    </a>
  );
}

function RootBody({ queryClient }: { queryClient: QueryClient }) {
  // ?lang= is part of the shareable URL, so the server can render the page in
  // that language too — no English flash, no hydration mismatch.
  const langParam = useRouterState({
    select: (s) => (s.location.search as { lang?: string } | undefined)?.lang,
  });
  const initialLocale = localeFromParam(langParam) ?? undefined;

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider initialLocale={initialLocale}>
        <SkipLink />
        <SiteHeader />
        <main id="main" className="pb-20 pt-[72px] print:p-0 lg:pb-0">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <ShareStrip />
        <SiteFooter />
        <MobileTabs />
        <CookieConsent />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
