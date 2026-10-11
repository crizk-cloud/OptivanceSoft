"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "./ContactForm";

/** Pre-selects the product when arriving from a product page (`/contact?product=slug`). */
export function ContactFormFromUrl({ fallbackEmail }: { fallbackEmail?: string | null }) {
  const product = useSearchParams().get("product") ?? "";
  return <ContactForm key={product} defaultProduct={product} fallbackEmail={fallbackEmail} />;
}
