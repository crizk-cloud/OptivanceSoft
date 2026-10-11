/**
 * Product URL slugs. Kept separate from `products.ts` so lightweight code such
 * as `src/proxy.ts` can use it without importing product content and icons.
 */
export const productSlugs = ["campus-call", "athletix-school", "grow-manager", "service-hub"] as const;

export type ProductSlug = (typeof productSlugs)[number];
