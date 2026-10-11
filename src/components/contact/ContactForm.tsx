"use client";

import { AlertCircle, CheckCircle2, Info, Loader2 } from "lucide-react";
import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  emptyValues,
  limits,
  productOptions,
  validateContact,
  type ContactField,
  type ContactValues,
  type FieldErrors,
} from "@/lib/contact/validation";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-ink shadow-sm transition-colors placeholder:text-muted/70 focus:border-brand-500 focus:outline-2 focus:outline-offset-0 focus:outline-brand-500/30";

export function ContactForm({
  defaultProduct = "",
  fallbackEmail,
}: {
  defaultProduct?: string;
  /** Shown when the form cannot send, so visitors still have a way to reach us. */
  fallbackEmail?: string | null;
}) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [values, setValues] = useState<ContactValues>(() => ({
    ...emptyValues,
    product: productOptions.some((o) => o.value === defaultProduct) ? defaultProduct : "",
  }));
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  // True after a submission, including one made before hydration (no-JS POST).
  const [submitted, setSubmitted] = useState(() => state.status !== "idle");
  // Time of first interaction, sent with the submission for the spam check.
  const startedAtRef = useRef(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Server-side errors take over once the server has responded.
  const errors: FieldErrors =
    submitted && state.status === "invalid" ? { ...clientErrors, ...state.errors } : clientErrors;
  const errorList = Object.entries(errors) as [ContactField, string][];

  useEffect(() => {
    if (state.status === "idle") return;
    if (state.status === "invalid") summaryRef.current?.focus();
    else statusRef.current?.focus();
  }, [state]);

  const isSuccess = submitted && state.status === "success";

  function update(field: ContactField, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      // Re-check just this field so the error clears as soon as it's fixed.
      const next = validateContact({ ...values, [field]: value })[field];
      setClientErrors((e) => ({ ...e, [field]: next }));
    }
  }

  function markStarted() {
    if (!startedAtRef.current) startedAtRef.current = Date.now();
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(values);
    setClientErrors(found);
    setSubmitted(false);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    const data = new FormData(e.currentTarget);
    data.set("started_at", String(startedAtRef.current));
    setSubmitted(true);
    startTransition(() => formAction(data));
  }

  if (isSuccess) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-line bg-white p-8 shadow-card"
      >
        <CheckCircle2 className="size-8 text-emerald-600" aria-hidden />
        <h2 className="mt-4 text-xl font-semibold text-ink">Thank you — your message has been sent.</h2>
        <p className="mt-2 leading-relaxed text-muted">
          Our team will review your inquiry and reply to the email address you provided.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setValues(emptyValues);
            setClientErrors({});
            setSubmitted(false);
            startedAtRef.current = 0;
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const field = (name: ContactField) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: cn(inputClass, errors[name] ? "border-red-600" : "border-line-strong"),
  });

  const fieldError = (name: ContactField) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
        {errors[name]}
      </p>
    );

  const required = (
    <span className="text-red-700" aria-hidden>
      {" "}
      *
    </span>
  );

  return (
    <form
      noValidate
      // Without JavaScript the form still POSTs to the server action (no form
      // data in the URL); with JavaScript, onSubmit validates first.
      action={formAction}
      onSubmit={onSubmit}
      onFocusCapture={markStarted}
      aria-describedby="contact-required-note"
      className="relative rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <div
        ref={summaryRef}
        tabIndex={-1}
        hidden={errorList.length === 0}
        role="alert"
        className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
      >
        <p className="font-semibold">Please correct the following:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {errorList.map(([name, message]) => (
            <li key={name}>
              <a href={`#contact-${name}`} className="underline underline-offset-2">
                {message}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite">
        {submitted && state.status === "not_configured" && (
          <Notice tone="info">
            Our online form isn’t connected yet, so <strong>your message was not sent</strong>.{" "}
            {fallbackEmail ? (
              <>
                Please email us at{" "}
                <a href={`mailto:${fallbackEmail}`} className="font-semibold underline">
                  {fallbackEmail}
                </a>
                .
              </>
            ) : (
              "Please check back soon. Your details are still in the form."
            )}
          </Notice>
        )}
        {submitted && state.status === "error" && (
          <Notice tone="error">
            Something went wrong and <strong>your message was not sent</strong>. Please try again in
            a few minutes.
          </Notice>
        )}
        {submitted && state.status === "too_fast" && (
          <Notice tone="info">
            <strong>Your message was not sent.</strong> Please review your details and press “Send
            message” again.
          </Notice>
        )}
      </div>

      <p id="contact-required-note" className="text-sm text-muted">
        Fields marked <span className="text-red-700">*</span> are required.
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
            Name{required}
          </label>
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            maxLength={limits.name}
            required
            onChange={(e) => update("name", e.target.value)}
          />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
            Work email{required}
          </label>
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={limits.email}
            required
            onChange={(e) => update("email", e.target.value)}
          />
          {fieldError("email")}
        </div>
        <div>
          <label htmlFor="contact-organization" className="text-sm font-semibold text-ink">
            Organization{required}
          </label>
          <input
            {...field("organization")}
            type="text"
            autoComplete="organization"
            maxLength={limits.organization}
            required
            onChange={(e) => update("organization", e.target.value)}
          />
          {fieldError("organization")}
        </div>
        <div>
          <label htmlFor="contact-product" className="text-sm font-semibold text-ink">
            Product of interest{required}
          </label>
          <select {...field("product")} required onChange={(e) => update("product", e.target.value)}>
            <option value="" disabled>
              Select a product
            </option>
            {productOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {fieldError("product")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
            Message{required}
          </label>
          <textarea
            {...field("message")}
            rows={6}
            maxLength={limits.message}
            required
            placeholder="Tell us a little about your organization and what you’d like to achieve."
            onChange={(e) => update("message", e.target.value)}
          />
          {fieldError("message")}
        </div>
      </div>

      {/* Spam prevention: honeypot field, hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company-website">Leave this field empty</label>
        <input id="contact-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted">
        We use the details you submit only to respond to your inquiry. See our{" "}
        <Link href="/privacy" className="font-medium text-brand-600 underline-offset-2 hover:underline">
          Privacy Policy
        </Link>{" "}
        for more information.
      </p>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={pending} aria-disabled={pending}>
        {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Notice({ tone, children }: { tone: "info" | "error"; children: React.ReactNode }) {
  const Icon = tone === "error" ? AlertCircle : Info;
  return (
    <div
      className={cn(
        "mb-6 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed",
        tone === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-brand-200 bg-brand-50 text-ink",
      )}
    >
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden />
      <p>{children}</p>
    </div>
  );
}
