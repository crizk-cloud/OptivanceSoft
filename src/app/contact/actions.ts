"use server";

import { deliverInquiry } from "@/lib/contact/delivery";
import { readValues, validateContact, type FieldErrors } from "@/lib/contact/validation";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; errors: FieldErrors }
  | { status: "too_fast" }
  | { status: "not_configured" }
  | { status: "error" };

/** Submissions faster than this are almost certainly automated. */
const MIN_FILL_MS = 3000;

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Spam check 1: a hidden honeypot field that people never see or fill in.
  // Bots that fill it get a quiet response so they don't adapt; nothing is sent.
  if (String(formData.get("company_website") ?? "") !== "") return { status: "success" };

  // Spam check 2: a minimum time between first interaction and submitting.
  // A real person could trip this (e.g. autofill + paste), so they are told
  // their message was not sent and asked to submit again.
  const startedAt = Number(formData.get("started_at"));
  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "too_fast" };
  }

  // Always re-validate on the server: the action is a public endpoint.
  const values = readValues(formData);
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors };

  const result = await deliverInquiry(values);
  if (result.ok) return { status: "success" };
  return { status: result.reason === "not_configured" ? "not_configured" : "error" };
}
