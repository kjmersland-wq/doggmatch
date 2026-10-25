/// <reference types="bun" />
import { expect, mock, test } from "bun:test";
import { PURCHASES_ENABLED, PURCHASES_PAUSED_ERROR } from "../purchases";

// Exercise the real handler without auth/network: any downstream access must fail.
mock.module("@tanstack/react-start", () => ({
  createServerFn: () => {
    const builder = {
      middleware: () => builder,
      inputValidator: () => builder,
      handler: (handler: unknown) => handler,
    };
    return builder;
  },
}));
mock.module("@/integrations/supabase/auth-middleware", () => ({ requireSupabaseAuth: {} }));

test("new purchases stay paused until explicitly reopened", () => {
  expect(PURCHASES_ENABLED).toBe(false);
});

test("checkout rejects new subscriptions before customer, referral or Stripe work", async () => {
  const { createPlusCheckout } = await import("./plus.functions");
  const handler = createPlusCheckout as unknown as (input: {
    data: { plan: string; environment: string };
    context: object;
  }) => Promise<{ error: string }>;
  const context = new Proxy({}, {
    get: () => { throw new Error("Paused checkout must not access user or payment data"); },
  });
  for (const environment of ["sandbox", "live"]) {
    for (const plan of ["monthly", "yearly"]) {
      expect(await handler({ data: { plan, environment }, context })).toEqual({ error: PURCHASES_PAUSED_ERROR });
    }
  }
});