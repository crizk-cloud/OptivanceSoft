import type { LucideIcon } from "lucide-react";
import { Building2, Megaphone, Sprout, Trophy } from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  description: string;
  icon: LucideIcon;
};

/** Single source of truth for product content used across the site. */
export const products: Product[] = [
  {
    slug: "campus-call",
    name: "Campus Call",
    industry: "Education",
    summary: "School communication and engagement.",
    description:
      "Keeps schools, staff and families connected through one clear communication channel.",
    icon: Megaphone,
  },
  {
    slug: "athletix-school",
    name: "Athletix School",
    industry: "School athletics",
    summary: "Athletic program and sports management for schools.",
    description:
      "Brings the organisation of school sports programs, teams and activities into one place.",
    icon: Trophy,
  },
  {
    slug: "grow-manager",
    name: "Grow Manager",
    industry: "Agriculture",
    summary: "Farm and agricultural operations management.",
    description:
      "Helps farms and agricultural businesses plan, track and manage their day-to-day operations.",
    icon: Sprout,
  },
  {
    slug: "service-hub",
    name: "Service Hub",
    industry: "Real estate",
    summary: "Real estate and property management.",
    description:
      "Supports property managers and real estate teams in running properties and services efficiently.",
    icon: Building2,
  },
];
