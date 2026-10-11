import type { MetadataRoute } from "next";
import { productHref, products } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

/**
 * Public, indexable pages. Privacy and Terms are excluded while they are
 * unreviewed drafts marked noindex; add them back once published.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl().origin;
  const paths = ["/", "/about", "/contact", "/support", ...products.map((p) => productHref(p.slug))];
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/products/") ? 0.8 : 0.6,
  }));
}
