import type { Metadata } from "next";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { highlights } from "@/lib/content";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About OptivanceSoft" title="A Smarter Future, Across More Industries">
        <p>
          From classrooms to playing fields, from farms to properties, OptivanceSoft helps
          organizations operate more efficiently and achieve their goals.
        </p>
        <p>{site.description}</p>
      </PageHero>

      <Section id="vision" aria-labelledby="vision-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeading
            id="vision-title"
            eyebrow="Our Vision"
            title="Software that brings out your best."
            description="We believe the right software should make an organization’s work clearer and simpler, so its people can focus on what they do best. Each of our products is built around that idea for a specific industry."
          />
          <FeatureGrid items={highlights} columns={2} variant="plain" />
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="about-products-title">
        <SectionHeading id="about-products-title" eyebrow="Our Products" title="One vision, four products" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
