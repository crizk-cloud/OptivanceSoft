export const site = {
  name: "OptivanceSoft",
  tagline: "Software that brings out your best.",
  description:
    "OptivanceSoft builds focused software products for schools, athletic programs, agriculture and real estate.",
  /**
   * Public contact details. Leave as null until confirmed; the UI hides
   * anything that is not set instead of showing placeholder values.
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    location: null as string | null,
  },
} as const;

export const mainNav = [
  { label: "Products", href: "/#products" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
] as const;
