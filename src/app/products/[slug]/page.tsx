import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { getProduct, productHref, products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return pageMetadata({
    title: `${product.name} — ${product.category}`,
    description: `${product.valueProp} ${product.description}`,
    path: productHref(product.slug),
    ownImage: true,
  });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return <ProductPageTemplate product={product} />;
}
