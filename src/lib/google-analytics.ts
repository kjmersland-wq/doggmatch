import { readConsent } from "@/lib/consent";

const MEASUREMENT_ID = "G-X15TZXQSRD";
let started = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function syncConsent() {
  const allowed = readConsent()?.analytics === true;
  Object.assign(window, { [`ga-disable-${MEASUREMENT_ID}`]: !allowed });
  if (!allowed || started) return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer?.push(arguments);
  };
  window.gtag("set", "developer_id.dZjgwMW", true);
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
  trackGooglePageview();
}

export function initGoogleAnalytics() {
  syncConsent();
  window.addEventListener("doggmatch:consent", syncConsent);
  window.addEventListener("storage", syncConsent);
  return () => {
    window.removeEventListener("doggmatch:consent", syncConsent);
    window.removeEventListener("storage", syncConsent);
  };
}

export function trackGooglePageview() {
  if (!started || readConsent()?.analytics !== true) return;
  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  });
}