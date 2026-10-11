import { productHref, products } from "./products";

export const site = {
  name: "OptivanceSoft",
  tagline: "Software that brings out your best.",
  description:
    "OptivanceSoft develops powerful, easy-to-use software that helps schools, sports programs, farms, and property businesses work smarter, communicate better, and achieve more.",
  /**
   * Public contact details. Leave as null until confirmed; the UI hides
   * anything that is not set instead of showing placeholder values.
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    location: null as string | null,
  },
  /** Social profiles. Only entries with a real URL are rendered. */
  social: [] as { label: string; href: string }[],
} as const;

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why OptivanceSoft", href: "/#why-optivancesoft" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: products.map((p) => ({ label: p.name, href: productHref(p.slug) })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "Why OptivanceSoft", href: "/#why-optivancesoft" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Product Support", href: "/support#product-support" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
