import { NextResponse, type NextRequest } from "next/server";
import { productSlugs } from "@/lib/productSlugs";

/**
 * Unknown product slugs would otherwise stream the not-found UI with a 200
 * status (a "soft 404"). Rewriting them to an unmatched route returns a real
 * 404 with the site's not-found page.
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (!(productSlugs as readonly string[]).includes(slug)) {
    return NextResponse.rewrite(new URL("/__product-not-found", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // Product pages only; their opengraph-image routes have an extra segment.
  matcher: "/products/:slug",
};
