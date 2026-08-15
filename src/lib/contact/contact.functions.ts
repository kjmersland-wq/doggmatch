import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(100),
  email: z.string().trim().email("That email address doesn't look right.").max(255),
  subject: z.string().trim().min(2, "A short subject helps us reply properly.").max(150),
  reason: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps us help you.")
    .max(4000, "That's a bit long — could you shorten it a touch?"),
  /** Honeypot: real people never see or fill this. */
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactResult = { ok: boolean; message: string; fieldErrors?: Record<string, string> };

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data }): Promise<ContactResult> => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return { ok: false, message: "Please have a quick look at the fields below.", fieldErrors };
    }

    const input = parsed.data;

    // Honeypot filled in — quietly accept, send nothing.
    if (input.website && input.website.length > 0) {
      return { ok: true, message: "sent" };
    }

    const ip =
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    const { checkRate } = await import("./rate-limit.server");
    if (!checkRate(ip)) {
      return {
        ok: false,
        message: "That's a few messages in quick succession — give it a minute and try again.",
      };
    }

    const { buildMime, headerSafe, resolveRecipient, sendGmail } = await import("./mail.server");

    const to = await resolveRecipient();
    if (!to) {
      console.error("[contact] no recipient configured — Gmail connection missing");
      return {
        ok: false,
        message: "Sorry, we couldn't send your message right now. Please try again in a moment.",
      };
    }

    const sentAt = new Date().toISOString();
    const body = [
      "New message from DoggMatch",
      "",
      "Name:",
      input.name,
      "",
      "Email:",
      input.email,
      "",
      "Reason:",
      input.reason || "Not given",
      "",
      "Message:",
      input.message,
      "",
      "Sent:",
      sentAt,
    ].join("\n");

    try {
      await sendGmail(
        buildMime({
          to,
          replyTo: `${headerSafe(input.name)} <${input.email}>`,
          subject: `[DoggMatch Contact] ${input.subject}`,
          body,
        }),
      );
    } catch (error) {
      console.error("[contact] send failed", error);
      return {
        ok: false,
        message: "Sorry, we couldn't send your message right now. Please try again in a moment.",
      };
    }

    // Confirmation to the sender. Never let this failure spoil their success.
    try {
      await sendGmail(
        buildMime({
          to: input.email,
          subject: "We received your message — DoggMatch",
          body: [
            `Hi ${input.name},`,
            "",
            "Thank you for getting in touch with DoggMatch.",
            "",
            "We've received your message and will get back to you as soon as we can.",
            "",
            "Warmly,",
            "The DoggMatch team",
          ].join("\n"),
        }),
      );
    } catch (error) {
      console.error("[contact] confirmation email failed", error);
    }

    return { ok: true, message: "sent" };
  });
