import "server-only";
import { productLabel, type ContactValues } from "./validation";

/**
 * Delivery interface for contact inquiries. The rest of the app only calls
 * `deliverInquiry`; swapping email providers means changing this file.
 *
 * Configured via environment variables (see README / .env.example):
 *   RESEND_API_KEY      API key for https://resend.com
 *   CONTACT_TO_EMAIL    Inbox that receives inquiries
 *   CONTACT_FROM_EMAIL  Verified sender, e.g. "OptivanceSoft <website@yourdomain.com>"
 */
export type DeliveryResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

export function isDeliveryConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL,
  );
}

export async function deliverInquiry(inquiry: ContactValues): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return { ok: false, reason: "not_configured" };

  const product = productLabel(inquiry.product);
  const text = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Organization: ${inquiry.organization}`,
    `Product of interest: ${product}`,
    "",
    inquiry.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email,
        subject: `Website inquiry: ${product} — ${inquiry.organization}`.slice(0, 200),
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      // Log status only; never log the submitter's details or provider response body.
      console.error(`[contact] Email provider responded with status ${res.status}`);
      return { ok: false, reason: "failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Email delivery request failed:", (err as Error).name);
    return { ok: false, reason: "failed" };
  }
}
