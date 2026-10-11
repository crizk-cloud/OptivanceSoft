import type { LucideIcon } from "lucide-react";
import { Building2, Megaphone, Sprout, Trophy } from "lucide-react";

export type ProductSlug = "campus-call" | "athletix-school" | "grow-manager" | "service-hub";

export type Product = {
  slug: ProductSlug;
  name: string;
  /** Short category line, e.g. "School Communication and Engagement". */
  category: string;
  /** Industry served, used for labels. */
  industry: string;
  description: string;
  /** Areas the product helps manage, taken directly from its description. */
  focusAreas: string[];
  icon: LucideIcon;
};

/** Single source of truth for product content used across the site. */
export const products: Product[] = [
  {
    slug: "campus-call",
    name: "Campus Call",
    category: "School Communication and Engagement",
    industry: "Education",
    description:
      "Connect schools, parents, and communities with a simple, all-in-one communication platform.",
    focusAreas: ["School communication", "Parent engagement", "Community updates"],
    icon: Megaphone,
  },
  {
    slug: "athletix-school",
    name: "Athletix School",
    category: "Athletic Program Management",
    industry: "School sports",
    description:
      "Manage teams, events, schedules, and athlete engagement for a more organized sports program.",
    focusAreas: ["Teams", "Events", "Schedules", "Athlete engagement"],
    icon: Trophy,
  },
  {
    slug: "grow-manager",
    name: "Grow Manager",
    category: "Farm Management System",
    industry: "Agriculture",
    description:
      "Organize agricultural operations, track activities, manage resources, and make smarter decisions.",
    focusAreas: ["Agricultural operations", "Activity tracking", "Resource management", "Decision support"],
    icon: Sprout,
  },
  {
    slug: "service-hub",
    name: "Service Hub",
    category: "Real Estate Management",
    industry: "Real estate",
    description:
      "Manage properties, tenants, maintenance, and related operations with a centralized management solution.",
    focusAreas: ["Properties", "Tenants", "Maintenance", "Operations"],
    icon: Building2,
  },
];

export const productHref = (slug: ProductSlug) => `/products/${slug}`;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
