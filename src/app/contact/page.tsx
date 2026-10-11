import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormFromUrl } from "@/components/contact/ContactFormFromUrl";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ProductIcon } from "@/components/products/ProductCard";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { productHref, products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us and Request a Demo",
  description:
    "Talk to OptivanceSoft about Campus Call, Athletix School, Grow Manager or Service Hub, ask a question, or request a demo.",
  path: "/contact",
});

export default function ContactPage() {
  const fallbackEmail = site.contact.email;

  return (
    <section className="bg-surface">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-navy-950 sm:text-5xl">
            Let’s talk about what your organization needs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Whether you run a school, a sports program, a farm or a property business, we’d be glad
            to hear from you. Ask a question, request a demo, or tell us what you’re trying to
            achieve, and our team will get back to you.
          </p>

          <h2 className="mt-10 text-sm font-semibold tracking-wide text-ink uppercase">Our products</h2>
          <ul className="mt-4 space-y-3">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={productHref(p.slug)} className="group flex items-center gap-3">
                  <ProductIcon product={p} size="sm" />
                  <span>
                    <span className="block font-medium text-ink group-hover:underline group-hover:underline-offset-4">
                      {p.name}
                    </span>
                    <span className="block text-sm text-muted">{p.category}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ContactDetails hideWhenEmpty />
          </div>
        </div>

        <div>
          <h2 className="sr-only">Contact form</h2>
          <Suspense fallback={<ContactForm fallbackEmail={fallbackEmail} />}>
            <ContactFormFromUrl fallbackEmail={fallbackEmail} />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
