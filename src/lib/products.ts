import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  CalendarDays,
  ClipboardList,
  Eye,
  Flag,
  HeartHandshake,
  Home,
  KeyRound,
  LayoutDashboard,
  Megaphone,
  MessagesSquare,
  Package,
  Sprout,
  Trophy,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export type ProductSlug = "campus-call" | "athletix-school" | "grow-manager" | "service-hub";

export type ProductFeature = { icon: LucideIcon; title: string; body: string };
export type ProductBenefit = { problem: string; solution: string };
export type ProductAudience = { label: string; body: string };
export type ProductFaq = { question: string; answer: string };

/**
 * Per-product accent colours. Exposed as CSS custom properties so shared
 * components (icons, visuals, dashboards) pick up each product's identity.
 * `strong` carries white text and small text on white at WCAG AA.
 */
export type ProductTheme = { accent: string; strong: string; soft: string; muted: string };

export type Product = {
  slug: ProductSlug;
  name: string;
  /** Short category line, e.g. "School Communication and Engagement". */
  category: string;
  /** Industry served, used for labels. */
  industry: string;
  /** One-line value proposition for the product page hero. */
  valueProp: string;
  description: string;
  icon: LucideIcon;
  /** 3–6 capabilities. Only what the product is confirmed to focus on. */
  features: ProductFeature[];
  benefits: ProductBenefit[];
  audience: ProductAudience[];
  faqs: ProductFaq[];
  ctaLabel: string;
  theme: ProductTheme;
};

const CTA_LABEL = "Request a Demo";

/** Questions whose honest answer is the same for every product. */
function sharedFaqs(name: string): ProductFaq[] {
  return [
    {
      question: `Can I see ${name} before deciding?`,
      answer: `Yes. Request a demo and our team will walk you through ${name} and how it could fit your organization.`,
    },
    {
      question: `How much does ${name} cost?`,
      answer:
        "We don’t publish pricing on the website. Get in touch and we’ll discuss your organization’s needs and the options available.",
    },
  ];
}

/** Single source of truth for product content used across the site. */
export const products: Product[] = [
  {
    slug: "campus-call",
    name: "Campus Call",
    category: "School Communication and Engagement",
    industry: "Education",
    valueProp: "Keep your whole school community informed and connected.",
    description:
      "Connect schools, parents, and communities with a simple, all-in-one communication platform.",
    icon: Megaphone,
    features: [
      {
        icon: MessagesSquare,
        title: "School–family communication",
        body: "One place for schools to communicate clearly with parents and families.",
      },
      {
        icon: Megaphone,
        title: "Announcements",
        body: "Share school news and important updates with the people who need them.",
      },
      {
        icon: Workflow,
        title: "Coordination",
        body: "Help administrators and teachers stay aligned on day-to-day school activities.",
      },
      {
        icon: HeartHandshake,
        title: "Community engagement",
        body: "Make it easier for parents and the wider community to stay involved in school life.",
      },
    ],
    benefits: [
      {
        problem: "Communication spread across too many channels",
        solution:
          "Bring school communication into one simple, all-in-one platform instead of scattered tools and threads.",
      },
      {
        problem: "Families missing important updates",
        solution: "Give parents a clear, consistent place to find school announcements.",
      },
      {
        problem: "A school community that feels disconnected",
        solution: "Help schools, parents and communities stay engaged with one another.",
      },
    ],
    audience: [
      { label: "Schools", body: "Institutions that want one clear channel to their community." },
      { label: "Administrators", body: "Leaders responsible for school-wide communication." },
      { label: "Teachers", body: "Staff who keep families informed about classroom life." },
      { label: "Parent communities", body: "Families who want to stay connected with their school." },
    ],
    faqs: [
      {
        question: "Who is Campus Call designed for?",
        answer:
          "Campus Call is designed for schools, including administrators and teachers, and the parent communities they serve.",
      },
      ...sharedFaqs("Campus Call"),
      {
        question: "Does Campus Call integrate with our existing school systems?",
        answer:
          "We don’t list integrations on this site. Tell us which systems your school uses and we’ll let you know what is currently supported.",
      },
    ],
    ctaLabel: CTA_LABEL,
    theme: { accent: "#0878F9", strong: "#0067DB", soft: "#EEF5FF", muted: "#B5D5FF" },
  },
  {
    slug: "athletix-school",
    name: "Athletix School",
    category: "Athletic Program Management",
    industry: "School sports",
    valueProp: "Bring structure and clarity to your school’s athletic program.",
    description:
      "Manage teams, events, schedules, and athlete engagement for a more organized sports program.",
    icon: Trophy,
    features: [
      {
        icon: Users,
        title: "Team management",
        body: "Organize your school’s teams and the people involved in them in one place.",
      },
      {
        icon: CalendarDays,
        title: "Schedules",
        body: "Keep team schedules organized and easy for everyone to follow.",
      },
      {
        icon: Flag,
        title: "Events",
        body: "Plan and manage athletic events across your program.",
      },
      {
        icon: Activity,
        title: "Athlete engagement",
        body: "Help keep athletes involved, informed and connected to their teams.",
      },
      {
        icon: MessagesSquare,
        title: "Program communication",
        body: "Keep athletic staff, coaches and athletes on the same page.",
      },
    ],
    benefits: [
      {
        problem: "Programs managed across spreadsheets and messages",
        solution: "Manage teams, events and schedules together in one organized system.",
      },
      {
        problem: "Confusion over who plays when",
        solution: "Give coaches and athletes a clear view of schedules and team activities.",
      },
      {
        problem: "Athletes losing touch with the program",
        solution: "Support athlete engagement with a program that is easier to follow.",
      },
    ],
    audience: [
      { label: "Schools", body: "Schools running one or more athletic programs." },
      { label: "Athletic directors", body: "Leaders overseeing the whole sports program." },
      { label: "Coaches", body: "Staff organizing teams, practices and events." },
      { label: "Sports administrators", body: "Teams handling athletic operations and logistics." },
    ],
    faqs: [
      {
        question: "Who is Athletix School designed for?",
        answer:
          "Athletix School is designed for schools and the people who run their sports programs: athletic directors, coaches and sports administrators.",
      },
      ...sharedFaqs("Athletix School"),
      {
        question: "Can Athletix School handle our specific sports and teams?",
        answer:
          "Athletix School is built to organize teams, events and schedules across a school athletic program. Contact us with the details of your program and we’ll confirm how it fits.",
      },
    ],
    ctaLabel: CTA_LABEL,
    theme: { accent: "#7C3AED", strong: "#6D28D9", soft: "#F5F3FF", muted: "#DDD6FE" },
  },
  {
    slug: "grow-manager",
    name: "Grow Manager",
    category: "Farm Management System",
    industry: "Agriculture",
    valueProp: "Organize your farm operations and see clearly what’s happening.",
    description:
      "Organize agricultural operations, track activities, manage resources, and make smarter decisions.",
    icon: Sprout,
    features: [
      {
        icon: ClipboardList,
        title: "Operations organization",
        body: "Organize your agricultural operations in one structured place.",
      },
      {
        icon: Activity,
        title: "Activity tracking",
        body: "Record and follow farm activities so work is easy to review.",
      },
      {
        icon: Package,
        title: "Resource management",
        body: "Keep track of the resources your operation depends on.",
      },
      {
        icon: Eye,
        title: "Operational visibility",
        body: "Get a clear overview of your operations to support smarter decisions.",
      },
    ],
    benefits: [
      {
        problem: "Activities tracked on paper or from memory",
        solution: "Keep a structured record of farm activities that the whole team can rely on.",
      },
      {
        problem: "Limited view of resources",
        solution: "See the resources your operation uses and manage them more deliberately.",
      },
      {
        problem: "Decisions made without a clear picture",
        solution: "Bring operational information together so decisions are better informed.",
      },
    ],
    audience: [
      { label: "Farm owners", body: "Owners who want a clear view of their operation." },
      { label: "Agricultural operators", body: "Businesses running day-to-day agricultural work." },
      { label: "Farm managers", body: "Managers coordinating activities, people and resources." },
    ],
    faqs: [
      {
        question: "Who is Grow Manager designed for?",
        answer:
          "Grow Manager is designed for farm owners, agricultural operators and farm managers who want to organize their operations.",
      },
      ...sharedFaqs("Grow Manager"),
      {
        question: "Does Grow Manager connect to sensors, machinery or weather services?",
        answer:
          "We don’t advertise any hardware or external data integrations on this site. If these matter to you, contact us and we’ll tell you what is currently available.",
      },
    ],
    ctaLabel: CTA_LABEL,
    theme: { accent: "#059669", strong: "#047857", soft: "#ECFDF5", muted: "#A7F3D0" },
  },
  {
    slug: "service-hub",
    name: "Service Hub",
    category: "Real Estate Management",
    industry: "Real estate",
    valueProp: "One central place to run your properties and the work around them.",
    description:
      "Manage properties, tenants, maintenance, and related operations with a centralized management solution.",
    icon: Building2,
    features: [
      {
        icon: Home,
        title: "Property organization",
        body: "Keep your properties and their details organized in one central place.",
      },
      {
        icon: KeyRound,
        title: "Tenant workflows",
        body: "Keep tenant information and related processes structured and easy to follow.",
      },
      {
        icon: Wrench,
        title: "Maintenance coordination",
        body: "Coordinate maintenance work so requests don’t fall through the cracks.",
      },
      {
        icon: LayoutDashboard,
        title: "Operational oversight",
        body: "See the state of your property operations from a single view.",
      },
    ],
    benefits: [
      {
        problem: "Property records scattered across files and inboxes",
        solution: "Centralize property and tenant information in one management solution.",
      },
      {
        problem: "Maintenance requests getting lost",
        solution: "Give maintenance work a clear place to be tracked and coordinated.",
      },
      {
        problem: "Little oversight across a portfolio",
        solution: "Bring related operations together so managers can see what needs attention.",
      },
    ],
    audience: [
      { label: "Property owners", body: "Owners managing one or more properties." },
      { label: "Real estate managers", body: "Managers responsible for properties and tenants." },
      { label: "Property management businesses", body: "Companies running operations for clients." },
    ],
    faqs: [
      {
        question: "Who is Service Hub designed for?",
        answer:
          "Service Hub is designed for property owners, real estate managers and property management businesses.",
      },
      ...sharedFaqs("Service Hub"),
      {
        question: "Does Service Hub handle rent payments, accounting or legal compliance?",
        answer:
          "We don’t list payment, accounting or compliance features on this site. Contact us with your requirements and we’ll tell you what Service Hub currently supports.",
      },
    ],
    ctaLabel: CTA_LABEL,
    theme: { accent: "#D97706", strong: "#B45309", soft: "#FFFBEB", muted: "#FDE68A" },
  },
];

export const productHref = (slug: ProductSlug) => `/products/${slug}`;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** CSS variables consumed by `bg-(--accent)` etc. in product components. */
export function themeStyle({ theme }: Product): CSSProperties {
  return {
    "--accent": theme.accent,
    "--accent-strong": theme.strong,
    "--accent-soft": theme.soft,
    "--accent-muted": theme.muted,
  } as CSSProperties;
}
