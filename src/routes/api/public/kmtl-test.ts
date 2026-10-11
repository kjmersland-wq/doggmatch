// TEMPORARY diagnostic route: verifies the shared ingest secret against
// km-techlabs.com using the real runtime environment. To be deleted after use.
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/kmtl-test")({
  server: {
    handlers: {
      GET: async () => {
        const secret = process.env["DOGGMATCH_INGEST_SECRET"];
        if (!secret) return Response.json({ error: "no_secret_in_env" });
        const payload = {
          site: "doggmatch.com",
          id: "kmtl-connection-test-runtime",
          type: "payment",
          status: "test",
          amount: 0,
          discount: 0,
          currency: "EUR",
          customer: "connection-test",
          plan: "test",
          occurred_at: new Date().toISOString(),
        };
        const res = await fetch("https://www.km-techlabs.com/api/public/ingest/payments", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${secret}` },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(8000),
        });
        return Response.json({ kmtlStatus: res.status, kmtlBody: await res.text() });
      },
    },
  },
});
