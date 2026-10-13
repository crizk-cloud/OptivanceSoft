import type { Metadata } from "next";
import Link from "next/link";
import { ProductIcon } from "@/components/products/ProductCard";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { productHref, products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Help Center and Product Support",
  description:
    "Get help with Campus Call, Athletix School, GrowManager and ServiceHub from the OptivanceSoft team.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Help Center" title="How can we help?">
        <p>
          Our help center is being expanded with guides for each product. In the meantime, our
          team is happy to answer your questions directly.
        </p>
      </PageHero>

      <Section id="product-support" aria-labelledby="product-support-title">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              id="product-support-title"
              eyebrow="Product Support"
              title="Support for every OptivanceSoft product"
              description="Let us know which product you are using and what you need help with."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={productHref(p.slug)}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-card transition-colors hover:border-brand-200"
                  >
                    <ProductIcon product={p} size="sm" />
                    <span className="font-medium text-ink">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ContactDetails />
        </div>
      </Section>
    </>
  );
}
