import { brandImage, ogSize } from "@/lib/og/brandImage";
import { getProduct, products } from "@/lib/products";
import { site } from "@/lib/site";

export const alt = `${site.name} product overview card`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug) ?? products[0];
  return brandImage({
    eyebrow: product.category,
    title: product.name,
    subtitle: product.valueProp,
    accent: product.theme.accent,
  });
}
