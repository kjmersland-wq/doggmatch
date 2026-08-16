import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const partnerSchema = z.object({
  company: z.string().trim().min(2, "Please tell us the company name.").max(150),
  contact: z.string().trim().min(2, "Who should we reply to?").max(100),
  email: z.string().trim().email("That email address doesn't look right.").max(255),
  country: z.string().trim().min(2, "Which country are you in?").max(80),
  website: z.string().trim().max(200).optional(),
  category: z.string().trim().min(2, "Pick the closest category.").max(60),
  offer: z.string().trim().min(3, "Even a rough idea helps.").max(300),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps us reply properly.")
    .max(4000, "That's a bit long — could you shorten it a touch?"),
  /** Honeypot: real people never see or fill this. */
  fax: z.string().max(0).optional(),
});

export type PartnerInput = z.infer<typeof partnerSchema>;
export type PartnerResult = { ok: boolean; message: string; fieldErrors?: Record<string, string> };

export const sendPartnerEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data }): Promise<PartnerResult> => {
    const parsed = partnerSchema.safeParse(data);
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
    if (input.fax && input.fax.length > 0) return { ok: true, message: "sent" };

    const ip =
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    const { checkRate } = await import("../contact/rate-limit.server");
    if (!checkRate(`partner:${ip}`)) {
      return {
        ok: false,
        message: "That's a few messages in quick succession — give it a minute and try again.",
      };
    }

    const { buildMime, headerSafe, resolveRecipient, sendGmail } = await import(
      "../contact/mail.server"
    );

    const to = await resolveRecipient();
    if (!to) {
      console.error("[partner] no recipient configured — Gmail connection missing");
      return {
        ok: false,
        message: "Sorry, we couldn't send your enquiry right now. Please try again in a moment.",
      };
    }

    const body = [
      "New partner enquiry from DoggMatch",
      "",
      "Company:",
      input.company,
      "",
      "Contact person:",
      input.contact,
      "",
      "Email:",
      input.email,
      "",
      "Country:",
      input.country,
      "",
      "Website:",
      input.website || "Not given",
      "",
      "Category:",
      input.category,
      "",
      "Proposed discount or benefit:",
      input.offer,
      "",
      "Message:",
      input.message,
      "",
      "Sent:",
      new Date().toISOString(),
    ].join("\n");

    try {
      await sendGmail(
        buildMime({
          to,
          replyTo: `${headerSafe(input.contact)} <${input.email}>`,
          subject: `[DoggMatch Partner] ${input.company}`,
          body,
        }),
      );
    } catch (error) {
      console.error("[partner] send failed", error);
      return {
        ok: false,
        message: "Sorry, we couldn't send your enquiry right now. Please try again in a moment.",
      };
    }

    // Confirmation to the sender. Never let this failure spoil their success.
    try {
      await sendGmail(
        buildMime({
          to: input.email,
          subject: "Thank you for your partner enquiry — DoggMatch",
          body: [
            `Hi ${input.contact},`,
            "",
            "Thank you for getting in touch about becoming a DoggMatch Partner.",
            "",
            "We've received your enquiry and a real person will read it and reply as soon as we can.",
            "",
            "Warmly,",
            "The DoggMatch team",
          ].join("\n"),
        }),
      );
    } catch (error) {
      console.error("[partner] confirmation email failed", error);
    }

    return { ok: true, message: "sent" };
  });