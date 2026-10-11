import type { Metadata } from "next";
import { site } from "./site";

/**
 * Canonical production origin, e.g. "https://www.optivancesoft.com".
 * Set SITE_URL in the hosting environment. On Vercel the production domain is
 * used automatically if SITE_URL is missing; locally it falls back to localhost.
 */
export function siteUrl(): URL {
  const fromEnv =
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    "http://localhost:3000";
  return new URL(fromEnv);
}

/**
 * Per-page metadata with canonical URL and matching Open Graph / Twitter tags.
 * Page-level `openGraph` replaces the layout's, so shared fields live here.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  ownImage,
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is instead of applying the "| OptivanceSoft" template. */
  absoluteTitle?: boolean;
  /** The route has its own opengraph-image file; otherwise use the site-wide card. */
  ownImage?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en",
      url: path,
      title: fullTitle,
      description,
      ...(ownImage ? {} : { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }] }),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
