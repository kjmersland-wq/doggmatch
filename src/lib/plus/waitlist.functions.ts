import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const waitlistSchema = z.object({
  firstName: z.string().trim().min(1, "Please tell us your first name.").max(100),
  email: z.string().trim().email("That email address doesn't look right.").max(255),
  /** Honeypot: real people never see or fill this. */
  website: z.string().max(0).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
export type WaitlistResult = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export const joinPlusWaitlist = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data }): Promise<WaitlistResult> => {
    const parsed = waitlistSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return { ok: false, message: "Please have a quick look at the fields below.", fieldErrors };
    }

    const input = parsed.data;

    // Honeypot filled in — quietly accept, store nothing.
    if (input.website && input.website.length > 0) {
      return { ok: true, message: "joined" };
    }

    const ip =
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    const { checkRate } = await import("../contact/rate-limit.server");
    if (!checkRate(`waitlist:${ip}`)) {
      return {
        ok: false,
        message: "That's a few tries in quick succession — give it a minute and try again.",
      };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("plus_waitlist").insert({
      first_name: input.firstName,
      email: input.email.toLowerCase(),
    });

    // Already on the list — that's a happy outcome, not an error.
    if (error && error.code === "23505") {
      return { ok: true, message: "joined" };
    }

    if (error) {
      console.error("[waitlist] insert failed", error.message);
      return {
        ok: false,
        message: "Sorry, we couldn't add you just now. Please try again in a moment.",
      };
    }

    return { ok: true, message: "joined" };
  });
