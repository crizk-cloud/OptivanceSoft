import type { StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  CalendarDays,
  ClipboardList,
  Eye,
  FileSignature,
  Fingerprint,
  Flag,
  GraduationCap,
  Headset,
  Home,
  KeyRound,
  LayoutDashboard,
  Leaf,
  MessagesSquare,
  Network,
  Package,
  School,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
  Tags,
  Trophy,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";

import athletixImage from "@/assets/products/athletix-school.jpg";
import campusCallImage from "@/assets/products/campus-call.jpg";
import growManagerImage from "@/assets/products/grow-manager.jpg";
import serviceHubImage from "@/assets/products/service-hub.jpg";
import type { ProductSlug } from "./productSlugs";

export type { ProductSlug };

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
  /** Short category line, e.g. "Integrated Campus Operations Platform". */
  category: string;
  /** Industry served, used for labels. */
  industry: string;
  /** One-line value proposition for the product page hero. */
  valueProp: string;
  description: string;
  icon: LucideIcon;
  /** Industry photo used on product cards. */
  image: StaticImageData;
  imageAlt: string;
  /** Optional longer introduction shown after the hero. */
  overview?: { title: string; paragraphs: string[] };
  /** Overrides the default "Features" section heading. */
  featuresHeading?: { eyebrow: string; title: string };
  /** Capabilities. Only what the product is confirmed to do. */
  features: ProductFeature[];
  /** Overrides the default "The problems it addresses" heading. */
  benefitsHeading?: { eyebrow: string; title: string; description: string };
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
    category: "Integrated Campus Operations Platform",
    industry: "Education",
    valueProp: "Run every part of your campus from one connected platform.",
    description:
      "Centralize the daily operations of educational institutions, from administration and IT to facilities, procurement, inventory and security, in one integrated platform.",
    icon: GraduationCap,
    image: campusCallImage,
    imageAlt: "Students at their desks watching a teacher present in a bright classroom",
    overview: {
      title: "From fragmented tools to one connected campus",
      paragraphs: [
        "Campus Call is an integrated campus operations and administration platform designed to centralize the daily operations of educational institutions within a single, unified system. It replaces fragmented spreadsheets, email chains, paper forms and disconnected departmental tools with a shared digital environment, providing centralized access, standardized workflows, improved collaboration and greater operational visibility.",
        "Built with a modular architecture, Campus Call brings together administrative, academic, IT, facilities, procurement, inventory and security operations. Its flexible design allows institutions to manage multiple campuses, buildings, departments and operational teams while maintaining consistent processes and centralized records.",
      ],
    },
    featuresHeading: {
      eyebrow: "Core modules and capabilities",
      title: "One platform, built from integrated modules",
    },
    features: [
      {
        icon: Fingerprint,
        title: "Attendance & Workforce Management",
        body: "Integrates with access-control devices to process attendance records, calculate lateness and working hours, support fixed schedules and rotating shifts, and coordinate leave and vacation calendars.",
      },
      {
        icon: School,
        title: "School Administration",
        body: "Manages campuses, buildings, academic years, grades, classes, student admissions, bulk data imports, credential generation and directory integration.",
      },
      {
        icon: FileSignature,
        title: "Documents & Acknowledgements",
        body: "Distributes circulars, forms and official communications while tracking document access, acknowledgements and signatures through verifiable links.",
      },
      {
        icon: Headset,
        title: "IT Service Management",
        body: "A structured help desk with categorized service requests, multi-level approvals, SLA tracking, CCTV retrieval requests and requester feedback.",
      },
      {
        icon: Network,
        title: "IT Infrastructure Administration",
        body: "Organizes network infrastructure, printers and IT assets through a detailed physical hierarchy, with topology visualization, device and port checks, audit logs and online-user monitoring.",
      },
      {
        icon: Tags,
        title: "Asset Management",
        body: "Tracks IT and non-IT assets, including identification, tagging, assignment and lifecycle-related records.",
      },
      {
        icon: ShoppingCart,
        title: "Procurement & Expense Management",
        body: "Digitizes purchase requests, approval workflows, RFQs, vendor management, purchase orders and invoices. Price Intelligence tracks historical prices and flags potentially suspicious increases.",
      },
      {
        icon: Warehouse,
        title: "Inventory & Store Management",
        body: "Manages warehouses, stock levels, material requests and approvals, with a dedicated stationery request portal.",
      },
      {
        icon: Wrench,
        title: "Campus Services & Facilities Maintenance",
        body: "Coordinates service personnel, maintenance requests, work orders, cleaning, repairs, planned maintenance, reporting and configurable email notifications.",
      },
      {
        icon: ShieldAlert,
        title: "IT Cybersecurity Management",
        body: "Centralizes cybersecurity incidents, device records, vulnerability tracking and security policies.",
      },
      {
        icon: Smartphone,
        title: "Mobile Workforce Application",
        body: "Lets facilities and campus service workers receive, accept and complete assigned jobs with notes and photos, in English, Arabic (right-to-left) and French, with job notifications and on-demand job-description translation. Supervisors manage assignments from the desktop platform.",
      },
    ],
    benefitsHeading: {
      eyebrow: "Key benefits",
      title: "A connected, transparent and efficient campus",
      description:
        "Campus Call helps educational institutions manage their people, services, infrastructure, resources and workflows through one integrated platform.",
    },
    benefits: [
      {
        problem: "Centralized operations",
        solution: "Brings multiple departments and workflows together in one platform.",
      },
      {
        problem: "Standardized processes",
        solution: "Reduces manual work through structured requests, approvals and automated workflows.",
      },
      {
        problem: "Improved accountability",
        solution:
          "Maintains traceable records of activities, decisions, assignments and acknowledgements.",
      },
      {
        problem: "Operational visibility",
        solution:
          "Gives administrators and supervisors a clearer view of requests, resources, assets and ongoing work.",
      },
      {
        problem: "Better resource management",
        solution:
          "Supports informed decisions through inventory records, asset tracking and historical procurement data.",
      },
      {
        problem: "Multilingual accessibility",
        solution: "Supports diverse workforces through English, Arabic and French interfaces where applicable.",
      },
      {
        problem: "Scalable deployment",
        solution:
          "Supports institutions with one or multiple campuses and adapts to different organizational structures and operational requirements.",
      },
    ],
    audience: [
      {
        label: "Educational institutions",
        body: "Schools and education groups operating one or multiple campuses.",
      },
      {
        label: "School administration",
        body: "Teams managing campuses, academic years, classes, admissions and staff attendance.",
      },
      {
        label: "IT and security teams",
        body: "Staff running the help desk, network infrastructure, assets and cybersecurity.",
      },
      {
        label: "Facilities, procurement and stores",
        body: "Teams handling maintenance, campus services, purchasing and inventory.",
      },
    ],
    faqs: [
      {
        question: "What is Campus Call?",
        answer:
          "Campus Call is an integrated campus operations and administration platform. It brings administrative, academic, IT, facilities, procurement, inventory and security operations into one unified system.",
      },
      {
        question: "Can Campus Call manage more than one campus?",
        answer:
          "Yes. Campus Call supports institutions with one or multiple campuses, buildings, departments and operational teams, while keeping processes consistent and records centralized.",
      },
      {
        question: "Which languages does Campus Call support?",
        answer:
          "Campus Call supports English, Arabic and French interfaces where applicable. The mobile workforce application supports all three, including a right-to-left layout for Arabic.",
      },
      {
        question: "Does Campus Call work with our access-control devices?",
        answer:
          "The Attendance & Workforce Management module integrates with access-control devices to process attendance records. Contact us with your device details and we’ll confirm compatibility.",
      },
      ...sharedFaqs("Campus Call"),
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
    image: athletixImage,
    imageAlt: "Sprinters set in their starting blocks on a red running track",
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
    theme: { accent: "#E5372B", strong: "#C42B20", soft: "#FEF2F1", muted: "#FBC9C4" },
  },
  {
    slug: "grow-manager",
    name: "Grow Manager",
    category: "Farm Management System",
    industry: "Agriculture",
    valueProp: "Organize your farm operations and see clearly what’s happening.",
    description:
      "Organize agricultural operations, track activities, manage resources, and make smarter decisions.",
    icon: Leaf,
    image: growManagerImage,
    imageAlt: "Rows of lettuce growing in hydroponic channels inside a bright greenhouse",
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
    image: serviceHubImage,
    imageAlt: "Modern apartment buildings with glass balconies along a landscaped street",
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
    theme: { accent: "#7C4DFF", strong: "#5B33D6", soft: "#F4F0FF", muted: "#D9CCFF" },
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
