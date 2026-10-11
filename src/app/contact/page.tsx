import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { productHref, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with OptivanceSoft about our software products.",
};

export default function ContactPage() {
  return (
    <section className="bg-surface">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div className="max-w-xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-navy-950 sm:text-5xl">
            Let’s talk about your organization
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Whether you run a school, a sports program, a farm or a property business, we’d be
            glad to help you find the OptivanceSoft product that fits.
          </p>
          <h2 className="mt-10 text-sm font-semibold tracking-wide text-ink uppercase">Our products</h2>
          <ul className="mt-4 space-y-2">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={productHref(p.slug)} className="font-medium text-brand-600 hover:text-brand-700">
                  {p.name}
                </Link>
                <span className="text-muted"> — {p.category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:pt-10">
          <ContactDetails />
        </div>
      </Container>
    </section>
  );
}
