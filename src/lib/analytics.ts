/**
 * Product analytics for DoggMatch, via PostHog's EU cloud.
 *
 * Nothing leaves the browser without an explicit "yes" to analytics in the
 * cookie notice. Events that happen before the visitor has decided are held
 * in memory on their own device: sent if they accept, dropped if they don't.
 * Without `VITE_POSTHOG_KEY` every call here is a silent no-op, so local
 * development and previews never report anything.
 *
 * The PostHog library itself is only fetched after consent, so it costs
 * nothing on first paint.
 */
import { useEffect, useState } from "react";
import { loadWhenConsented, readConsent } from "@/lib/consent";

const KEY = import.meta.env["VITE_POSTHOG_KEY"] as string | undefined;
const API_HOST = "https://eu.i.posthog.com";
const SCRIPT_SRC = "https://eu-assets.i.posthog.com/static/array.js";
const CONSENT_EVENT = "doggmatch:consent";

/** Every event DoggMatch measures. Add new names here so they stay consistent. */
export type AnalyticsEvent =
  | "quiz_started"
  | "quiz_completed"
  | "result_shared"
  | "breed_profile_viewed"
  | "full_report_viewed"
  | "plus_cta_clicked"
  | "signup_started"
  | "subscription_started"
  | "dossier_checkout_started";

type Props = Record<string, string | number | boolean | null | undefined>;

interface PostHogLike {
  capture(event: string, props?: Props): void;
  getFeatureFlag(key: string): string | boolean | undefined;
  onFeatureFlags(cb: () => void): () => void;
  opt_in_capturing(): void;
  opt_out_capturing(): void;
}

declare global {
  interface Window {
    posthog?: PostHogLike & { __SV?: number };
  }
}

let started = false;
let loaded = false;
const pending: [string, Props | undefined][] = [];
const MAX_PENDING = 50;

/** Installs the standard PostHog stub, which queues calls until the library arrives. */
function loadPostHog() {
  if (loaded || !KEY) return;
  loaded = true;

  const methods =
    "init capture register register_once unregister getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags onFeatureFlags identify reset get_distinct_id opt_in_capturing opt_out_capturing has_opted_out_capturing".split(
      " ",
    );
  type Stub = unknown[] & Record<string, unknown> & { _i: unknown[]; __SV?: number };
  const stub = [] as unknown as Stub;
  stub._i = [];
  for (const method of methods) {
    stub[method] = (...args: unknown[]) => {
      stub.push([method, ...args]);
    };
  }
  stub._i.push([
    KEY,
    {
      api_host: API_HOST,
      ui_host: "https://eu.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
      persistence: "localStorage+cookie",
    },
    "posthog",
  ]);
  stub.__SV = 1;
  window.posthog = stub as unknown as PostHogLike & { __SV?: number };

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = SCRIPT_SRC;
  document.head.appendChild(script);

  for (const [event, props] of pending.splice(0)) window.posthog?.capture(event, props);
  flagListeners.forEach((cb) => window.posthog?.onFeatureFlags(cb));
}

/** Call once from the root layout. Safe to call more than once. */
export function initAnalytics(): () => void {
  if (started || !KEY || typeof window === "undefined") return () => {};
  started = true;

  const stopLoading = loadWhenConsented("analytics", loadPostHog);
  const onConsentChange = () => {
    const consent = readConsent();
    if (!consent) return;
    if (!consent.analytics) {
      pending.length = 0;
      if (loaded) window.posthog?.opt_out_capturing();
    } else if (loaded) {
      window.posthog?.opt_in_capturing();
    }
  };
  window.addEventListener(CONSENT_EVENT, onConsentChange);
  return () => {
    stopLoading();
    window.removeEventListener(CONSENT_EVENT, onConsentChange);
    started = false;
  };
}

function send(event: string, props?: Props) {
  if (!KEY || typeof window === "undefined") return;
  const consent = readConsent();
  if (consent && !consent.analytics) return;
  if (loaded && window.posthog) {
    window.posthog.capture(event, props);
  } else if (!consent && pending.length < MAX_PENDING) {
    pending.push([event, props]);
  }
}

/** Records one product event. Never throws, never blocks the UI. */
export function track(event: AnalyticsEvent, props?: Props) {
  try {
    send(event, props);
  } catch {
    /* measurement must never break the page */
  }
}

/** Records a page view; the root layout calls this on every navigation. */
export function trackPageview(url: string) {
  try {
    send("$pageview", { $current_url: url });
  } catch {
    /* ignore */
  }
}

const flagListeners = new Set<() => void>();

/**
 * The visitor's variant for an A/B test run as a PostHog multivariate flag.
 * Returns `fallback` on the server, without consent, and until flags load —
 * so everyone who hasn't opted in simply sees the control.
 */
export function useVariant<V extends string>(flag: string, variants: readonly V[], fallback: V): V {
  const [variant, setVariant] = useState<V>(fallback);

  useEffect(() => {
    if (!KEY) return;
    const update = () => {
      const value = window.posthog?.getFeatureFlag(flag);
      if (typeof value === "string" && (variants as readonly string[]).includes(value)) {
        setVariant(value as V);
      }
    };
    flagListeners.add(update);
    let unsubscribe: (() => void) | undefined;
    if (loaded) unsubscribe = window.posthog?.onFeatureFlags(update);
    return () => {
      flagListeners.delete(update);
      if (typeof unsubscribe === "function") unsubscribe();
    };
    // variants is a constant tuple at every call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return variant;
}
