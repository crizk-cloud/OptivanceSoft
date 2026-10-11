import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductIcon } from "@/components/products/ProductCard";
import { ProductVisual } from "@/components/products/ProductVisual";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getProduct, productHref, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.category}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        aside={
          <ProductVisual
            slug={product.slug}
            large
            className="h-64 rounded-2xl border border-line shadow-card sm:h-80"
          />
        }
      >
        <p>{product.description}</p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Get in Touch
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/#products" size="lg" variant="secondary">
            All products
          </ButtonLink>
        </div>
      </PageHero>

      <Section aria-labelledby="focus-title">
        <SectionHeading
          id="focus-title"
          eyebrow={product.industry}
          title={`What ${product.name} helps you manage`}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.focusAreas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-3 rounded-xl border border-line bg-white p-5 shadow-card"
            >
              <CheckCircle2 className="size-5 shrink-0 text-brand-500" aria-hidden strokeWidth={1.75} />
              <span className="font-medium text-ink">{area}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" aria-labelledby="other-products-title">
        <SectionHeading id="other-products-title" eyebrow="Explore more" title="Other OptivanceSoft products" />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={productHref(p.slug)}
                className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-card transition-[border-color,box-shadow] hover:border-brand-200 hover:shadow-raised"
              >
                <ProductIcon product={p} />
                <span>
                  <span className="block font-semibold text-ink">{p.name}</span>
                  <span className="mt-1 block text-sm text-muted">{p.category}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
