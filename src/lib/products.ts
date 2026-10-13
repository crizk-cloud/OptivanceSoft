import type { StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Archive,
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarDays,
  Camera,
  ChartColumn,
  ClipboardCheck,
  Contact,
  Database,
  DatabaseBackup,
  Droplet,
  Eye,
  FileCheck,
  FileSignature,
  FileText,
  Fingerprint,
  FlaskConical,
  GraduationCap,
  Grid3x3,
  HandCoins,
  Headset,
  HeartPulse,
  History,
  IdCard,
  Landmark,
  Languages,
  LayoutDashboard,
  Leaf,
  ListChecks,
  Lock,
  LogIn,
  MailPlus,
  Medal,
  MessagesSquare,
  Network,
  Package,
  Palette,
  PiggyBank,
  QrCode,
  Receipt,
  RefreshCw,
  School,
  ScrollText,
  Settings,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sprout,
  Tags,
  TrendingUp,
  Trophy,
  UserCheck,
  UserCog,
  Users,
  Wallet,
  Warehouse,
  Wrench,
} from "lucide-react";

import athletixImage from "@/assets/products/athletix-school.jpg";
import campusCallImage from "@/assets/products/campus-call.jpg";
import growManagerImage from "@/assets/products/grow-manager.jpg";
import athletixLogo from "@/assets/products/logos/athletix-school.png";
import athletixScreenshot from "@/assets/products/screens/athletix-school-dashboard.png";
import campusCallScreenshot from "@/assets/products/screens/campus-call-dashboard.png";
import growManagerScreenshot from "@/assets/products/screens/grow-manager-dashboard.png";
import serviceHubScreenshot from "@/assets/products/screens/service-hub-dashboard.png";
import campusCallLogo from "@/assets/products/logos/campus-call.png";
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
  /** Product logo (for light backgrounds), shown in place of the name on its page. */
  logo?: StaticImageData;
  /** Real product screenshot; replaces the illustrative preview on the product page. */
  screenshot?: { src: StaticImageData; alt: string; caption: string };
  /** Optional longer introduction shown after the hero. */
  overview?: { title: string; paragraphs: string[] };
  /** Overrides the default "Features" section heading. */
  featuresHeading?: { eyebrow: string; title: string };
  /** Capabilities. Only what the product is confirmed to do. */
  features: ProductFeature[];
  /** Optional numbered workflow ("How it works"). */
  howItWorks?: { title: string; intro: string; steps: { title: string; body: string }[] };
  /** Optional security, privacy and governance principles. */
  governance?: { title: string; intro: string; items: ProductFeature[] };
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
    logo: campusCallLogo,
    screenshot: {
      src: campusCallScreenshot,
      alt: "Campus Call administration portal dashboard showing student, staff, asset and pending-request totals, a weekly student attendance chart, asset status, recent activities and support tickets, with module navigation for attendance, school administration, IT, documents, assets, procurement, store, campus services, facilities, help desk and cyber security",
      caption: "Campus Call administration portal (sample data).",
    },
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
    category: "Complete School Athletics Management System",
    industry: "School sports",
    valueProp: "Every athlete, team and season, connected in one place.",
    description:
      "Organize, manage and develop your school’s entire sports programme in one centralized system, from teams and training to health readiness and equipment.",
    icon: Trophy,
    image: athletixImage,
    logo: athletixLogo,
    screenshot: {
      src: athletixScreenshot,
      alt: "Athletix School dashboard showing athlete, team and attendance summaries, a participation chart, teams by sport, today’s schedule, recent activity, items needing attention, season progress, upcoming competitions and injury and health status",
      caption: "Athletix School dashboard (sample data).",
    },
    imageAlt: "Sprinters set in their starting blocks on a red running track",
    overview: {
      title: "One home for your entire sports programme",
      paragraphs: [
        "Athletix School is an integrated athletics management platform designed to help educational institutions organize, manage and develop their entire sports programmes through one centralized system. It replaces fragmented spreadsheets, messaging groups and paper-based processes with structured digital workflows, reliable athletic records and coordinated communication between administrators, coaches, medical staff, students and families.",
        "Built around the Athlete 360 profile, Athletix provides a comprehensive view of each student’s athletic journey, bringing together participation, training, performance, eligibility, health readiness, equipment and sporting history in one place. Role-based access and responsive interfaces give each user the information and tools relevant to their responsibilities, on a desktop computer, tablet or mobile phone, in the office or on the field.",
      ],
    },
    featuresHeading: {
      eyebrow: "Core modules and capabilities",
      title: "Everything a school athletics programme needs",
    },
    features: [
      {
        icon: IdCard,
        title: "Athlete 360",
        body: "Maintains each athlete’s comprehensive athletic profile, including participation history, performance progress, training records, goals and relevant sporting information.",
      },
      {
        icon: Users,
        title: "Sports, Seasons & Teams",
        body: "Organizes sports programmes, seasons, team structures, rosters and athlete assignments.",
      },
      {
        icon: ClipboardCheck,
        title: "Training & Attendance",
        body: "Schedules training sessions, records attendance and check-ins, and helps coaches monitor participation.",
      },
      {
        icon: Medal,
        title: "Games & Tournaments",
        body: "Manages fixtures, competitions, schedules, results and sporting events.",
      },
      {
        icon: BadgeCheck,
        title: "Registration & Eligibility",
        body: "Coordinates athletic registration and participation requirements, with clear explanations of eligibility restrictions and the steps needed to resolve them.",
      },
      {
        icon: TrendingUp,
        title: "Fitness Testing & Personal Goals",
        body: "Records fitness assessments, tracks individual development, and helps students monitor progress against their own historical performance.",
      },
      {
        icon: HeartPulse,
        title: "Health & Readiness",
        body: "Supports injury records, health-related readiness information and participation clearance, while protecting sensitive medical information through restricted access.",
      },
      {
        icon: CalendarDays,
        title: "Facilities & Bookings",
        body: "Organizes sports facilities, availability, reservations and usage schedules.",
      },
      {
        icon: Package,
        title: "Equipment & Inventory",
        body: "Tracks sports equipment, storerooms, assignments and equipment availability.",
      },
      {
        icon: MessagesSquare,
        title: "Communication & Notifications",
        body: "Supports coordinated communication between athletic administrators, coaches, students and families.",
      },
      {
        icon: ChartColumn,
        title: "Reports & Analytics",
        body: "Provides operational reports and insights into participation, attendance, athletic development, teams, seasons and programme activities.",
      },
    ],
    governance: {
      title: "Security, privacy and governance",
      intro:
        "Athletix is designed around clear data ownership, responsible access and transparent decision-making.",
      items: [
        {
          icon: Database,
          title: "Clear data ownership",
          body: "The school’s student information system remains the authoritative source for student identity, enrolment and year-group information. Athletix maintains the athletic record without modifying the school’s source student records.",
        },
        {
          icon: Lock,
          title: "Privacy-first health information",
          body: "Medical details and readiness information are restricted to authorized medical personnel and families as appropriate. Coaches receive the participation-clearance information they need without unnecessary access to private medical details.",
        },
        {
          icon: ListChecks,
          title: "Transparent eligibility",
          body: "Participation restrictions include clear reasons and actionable steps to help resolve them.",
        },
        {
          icon: TrendingUp,
          title: "Individual development",
          body: "Performance tracking emphasizes each athlete’s personal progress over time rather than ranking students against one another.",
        },
        {
          icon: History,
          title: "Comprehensive audit trails",
          body: "Sensitive changes are recorded with the responsible user, timestamp and before-and-after values.",
        },
        {
          icon: UserCheck,
          title: "Human-led decisions",
          body: "Medical assessments and eligibility decisions remain under appropriate human authority rather than being delegated to AI.",
        },
        {
          icon: Archive,
          title: "Historical record preservation",
          body: "Records are archived rather than permanently deleted, preserving the history of athletes, teams, activities and decisions.",
        },
      ],
    },
    benefitsHeading: {
      eyebrow: "Key benefits",
      title: "A connected, secure and data-informed programme",
      description:
        "Athletix School helps institutions manage their athletes, teams, training, competitions, facilities and resources while keeping student welfare, privacy and individual development at the centre of every decision.",
    },
    benefits: [
      {
        problem: "Centralized management",
        solution: "Consolidates the school’s sports operations into one integrated platform.",
      },
      {
        problem: "Improved coordination",
        solution:
          "Connects administrators, coaches, medical staff, students and families through consistent workflows.",
      },
      {
        problem: "Better athlete development",
        solution:
          "Maintains a longitudinal view of individual progress, fitness, participation and goals.",
      },
      {
        problem: "Safer information handling",
        solution: "Protects sensitive health data through role-based access and clear privacy boundaries.",
      },
      {
        problem: "Greater accountability",
        solution:
          "Makes eligibility requirements, administrative changes and operational decisions more transparent.",
      },
      {
        problem: "Reduced administrative workload",
        solution: "Replaces repetitive manual processes with structured records and digital workflows.",
      },
      {
        problem: "Consistent historical records",
        solution: "Preserves athletic history across seasons, teams and sporting activities.",
      },
    ],
    audience: [
      {
        label: "Athletic directors and administrators",
        body: "Manage athletics operations centrally.",
      },
      { label: "Coaches", body: "Coordinate teams and training." },
      { label: "Medical staff", body: "Manage protected health information." },
      { label: "Equipment managers", body: "Oversee equipment and resources." },
      { label: "Students and parents", body: "Access the information relevant to them." },
    ],
    faqs: [
      {
        question: "What is Athletix School?",
        answer:
          "Athletix School is an integrated athletics management platform that helps educational institutions organize, manage and develop their entire sports programme in one centralized system, built around each student’s Athlete 360 profile.",
      },
      {
        question: "Who can see students’ medical information?",
        answer:
          "Medical details and readiness information are restricted to authorized medical personnel and families as appropriate. Coaches see the participation-clearance information they need, without unnecessary access to private medical details.",
      },
      {
        question: "Does Athletix change our student information system records?",
        answer:
          "No. Your student information system remains the authoritative source for student identity, enrolment and year-group information. Athletix maintains the athletic record without modifying your source student records.",
      },
      {
        question: "Can coaches use it on the field?",
        answer:
          "Yes. Athletix has a responsive design for desktop computers, tablets and smartphones, so athletics operations can continue both in the office and on the field.",
      },
      ...sharedFaqs("Athletix School"),
    ],
    ctaLabel: CTA_LABEL,
    theme: { accent: "#E5372B", strong: "#C42B20", soft: "#FEF2F1", muted: "#FBC9C4" },
  },
  {
    slug: "grow-manager",
    name: "GrowManager",
    category: "Complete Farm Management System",
    industry: "Agriculture",
    valueProp: "Complete farm management, from seed to harvest.",
    description:
      "Bring your entire growing operation into one place, from seed batches and growing areas to daily tasks, harvests and product traceability.",
    icon: Leaf,
    image: growManagerImage,
    screenshot: {
      src: growManagerScreenshot,
      alt: "GrowManager dashboard showing total crops, water usage, mixing batches and active workers, crop distribution, weekly production yield, task progress, recent activities and a field overview map, with navigation for nursery, production, microgreens, progress, water testing, mixing log, daily tasks, mezclum, analytics, schedules, reports and admin",
      caption: "GrowManager dashboard (sample data).",
    },
    imageAlt: "Rows of lettuce growing in hydroponic channels inside a bright greenhouse",
    overview: {
      title: "Connect every stage of production, from seed to finished product",
      paragraphs: [
        "GrowManager is a modern farm management system designed to bring your entire growing operation into one place. Originally developed for Hidroponía Elche, it provides a centralized platform for managing crops, growing areas, seed batches, production activities, microgreens, nutrient solutions, daily tasks, harvests and traceability.",
        "Whether you operate a hydroponic greenhouse, a traditional farm, a plant nursery, a vertical farm or a mixed agricultural business, GrowManager helps your team organize production, monitor crop progress, reduce waste and make better decisions using real operational data.",
        "GrowManager runs in any modern web browser on computers, tablets and mobile devices. Team members sign in with their Google accounts once an administrator has invited them, and role-based permissions ensure everyone sees the tools and information relevant to their responsibilities.",
      ],
    },
    featuresHeading: {
      eyebrow: "Core features",
      title: "Everything your farm needs, from seed to harvest",
    },
    features: [
      {
        icon: LayoutDashboard,
        title: "Dashboard",
        body: "See the farm at a glance: active batches, production pools, seedlings and trays, microgreens output, outstanding tasks and key indicators across growing areas, varieties and periods.",
      },
      {
        icon: Sprout,
        title: "Nursery Management",
        body: "Register seed batches, record varieties, quantities and planting dates, organize trays, and track germination until seedlings are ready for transplanting.",
      },
      {
        icon: Grid3x3,
        title: "Production Management",
        body: "Manage production through a visual grid of pools or growing areas, inspecting rows, trays, varieties, planting dates and days in growth. Adaptable to benches, field plots and vertical racks.",
      },
      {
        icon: RefreshCw,
        title: "Crop & Batch Lifecycle",
        body: "Follow each batch from planting through transplanting, harvesting and completion, with its variety, location, quantities and operational history.",
      },
      {
        icon: Leaf,
        title: "Microgreens Management",
        body: "Record plantings and track harvested, sold, discarded and growing product, with an activity log, lifecycle indicators and the status of active trays.",
      },
      {
        icon: Camera,
        title: "Crop Progress & AI Health Checks",
        body: "Capture and organize photos of trays and growing areas, review progress over time, and use AI-assisted tray-health checks as decision support alongside expert inspection.",
      },
      {
        icon: Droplet,
        title: "Water Testing & Nutrients",
        body: "Keep structured records of water tests and nutrient-solution measurements, such as pH and EC, linked to dates, batches or growing areas.",
      },
      {
        icon: FlaskConical,
        title: "Mixing Log",
        body: "Document nutrient and solution preparation, including dates, details and quantities, so teams can follow repeatable procedures and troubleshoot differences.",
      },
      {
        icon: ListChecks,
        title: "Daily Tasks",
        body: "Turn daily operations into a structured, printable task list organized by activity, growing area or workflow, from seeding and transplanting to harvesting and packaging.",
      },
      {
        icon: QrCode,
        title: "Mezclum & Traceability",
        body: "Combine selected varieties into labelled mixes, record their components, and print QR-code labels that give customers access to the product’s traceability information.",
      },
      {
        icon: ChartColumn,
        title: "Analytics",
        body: "Review production quantities, activity trends, crop and variety distribution, microgreens lifecycle and waste, and historical performance to support planning.",
      },
      {
        icon: CalendarDays,
        title: "Schedules",
        body: "Plan recurring work and upcoming production activities, and coordinate growing, maintenance and harvesting.",
      },
      {
        icon: FileText,
        title: "Reports",
        body: "Generate printable reports, with PDF or CSV exports where available, for management reviews, recordkeeping and analysis outside the application.",
      },
      {
        icon: Settings,
        title: "Administration & Configuration",
        body: "Invite users, assign permissions, manage crop varieties and reference data, and configure production pool designs and layouts to match how your farm works.",
      },
    ],
    governance: {
      title: "Security and access control",
      intro: "GrowManager is designed for controlled access within a farm team.",
      items: [
        {
          icon: LogIn,
          title: "Google sign-in",
          body: "Users authenticate with their Google accounts.",
        },
        {
          icon: MailPlus,
          title: "Invitation-based access",
          body: "An administrator must invite users before they can access the application.",
        },
        {
          icon: Lock,
          title: "Permission-gated modules",
          body: "Access to each section is controlled according to assigned permissions.",
        },
        {
          icon: UserCheck,
          title: "Role-appropriate workflows",
          body: "Team members can be given access to the tools needed for their work.",
        },
        {
          icon: ShieldCheck,
          title: "Centralized management",
          body: "Authorized administrators manage users and supported application settings.",
        },
      ],
    },
    benefitsHeading: {
      eyebrow: "The GrowManager advantage",
      title: "One platform. Your farm. Your workflow.",
      description:
        "GrowManager brings production information, daily work and operational history together, instead of leaving them scattered across spreadsheets, paper records and separate tools.",
    },
    benefits: [
      {
        problem: "Visibility across the operation",
        solution: "See what is growing, what needs attention and how production is progressing.",
      },
      {
        problem: "Consistent production records",
        solution: "Keep a structured history of batches, measurements, mixes and activities.",
      },
      {
        problem: "Better coordination",
        solution: "Organize daily activities and upcoming work so the team stays aligned.",
      },
      {
        problem: "Crop progress and quantities",
        solution: "Track each crop’s progress and product quantities from planting to harvest.",
      },
      {
        problem: "Traceability to the finished product",
        solution: "Connect finished products, including labelled mixes, to their recorded production information.",
      },
      {
        problem: "Less waste, better planning",
        solution: "Spot opportunities to reduce waste and improve planning using recorded data.",
      },
      {
        problem: "Decisions based on real data",
        solution: "Make operational decisions using recorded information rather than guesswork.",
      },
    ],
    audience: [
      {
        label: "Hydroponic farms",
        body: "Manage pools, trays, crop batches, nutrient solutions and harvests.",
      },
      {
        label: "Greenhouses",
        body: "Organize growing zones, crop cycles, inspections and production tasks.",
      },
      {
        label: "Vertical farms",
        body: "Track growing racks, trays, varieties and production cycles.",
      },
      {
        label: "Plant nurseries",
        body: "Manage seed batches, germination, seedlings and transplanting.",
      },
      {
        label: "Microgreens producers",
        body: "Track planting, harvesting, sales, discards and product preparation.",
      },
      {
        label: "Traditional farms",
        body: "Organize plots, crop activities, inspections and daily operational records.",
      },
      {
        label: "Mixed farms",
        body: "Bring different crops and growing workflows into a shared management environment.",
      },
    ],
    faqs: [
      {
        question: "What is GrowManager?",
        answer:
          "GrowManager is a farm management system that brings crops, growing areas, seed batches, production activities, microgreens, nutrient solutions, daily tasks, harvests and traceability into one centralized platform.",
      },
      {
        question: "What types of farms can use GrowManager?",
        answer:
          "Its approach adapts to hydroponic farms, greenhouses, vertical farms, plant nurseries, microgreens producers, traditional farms and mixed farms. The exact configuration of each workflow depends on the farm’s layout and operational needs.",
      },
      {
        question: "Which devices does it work on?",
        answer:
          "GrowManager runs in any modern web browser, on computers, tablets and mobile devices.",
      },
      {
        question: "How do team members get access?",
        answer:
          "An administrator invites each user, who then signs in with a Google account. Permissions assigned to each user control which modules they can access.",
      },
      {
        question: "Do the AI health checks replace expert inspection?",
        answer:
          "No. AI-assisted tray-health checks help identify potential visual issues, but their assessments are decision-support information, not a replacement for expert inspection or laboratory testing.",
      },
      {
        question: "Does GrowManager connect to sensors, machinery or weather services?",
        answer:
          "We don’t advertise any hardware or external data integrations on this site. If these matter to you, contact us and we’ll tell you what is currently available.",
      },
      ...sharedFaqs("GrowManager"),
    ],
    ctaLabel: CTA_LABEL,
    theme: { accent: "#059669", strong: "#047857", soft: "#ECFDF5", muted: "#A7F3D0" },
  },
  {
    slug: "service-hub",
    name: "ServiceHub",
    category: "Business Management & Financial Control",
    industry: "Property and service businesses",
    valueProp: "One workspace. Clearer finances. Better business management.",
    description:
      "Bring properties, clients, services, invoicing, payments, expenses, tax administration and financial reporting together in one centralized workspace.",
    icon: Building2,
    image: serviceHubImage,
    screenshot: {
      src: serviceHubScreenshot,
      alt: "ServiceHub dashboard showing total revenue, payments, expenses and net profit, net IVA and IRPF figures, IRPF refunds and payments, overdue payments, a six-month income versus expenses chart and revenue by service, with navigation for properties, clients, services, invoices, payments, expenses, reports, statements, taxes, settings and admin",
      caption: "ServiceHub dashboard (sample data).",
    },
    imageAlt: "Modern apartment buildings with glass balconies along a landscaped street",
    overview: {
      title: "One platform. Every transaction. Complete business visibility.",
      paragraphs: [
        "ServiceHub is Rizk Corporation’s all-in-one business management platform. Originally developed to support Rizk Corporation’s rental and non-rental business activities, it provides a structured way to manage day-to-day operations, maintain financial records, track client balances and organize tax-related information.",
        "Whether you operate a property rental business, manage buildings and units, provide professional services or run a company with multiple revenue streams, ServiceHub helps you maintain a clearer picture of your business and its financial position. By connecting operational records with invoices, payments, expenses, client statements and tax reports, it reduces fragmentation and makes important business information easier to manage, review and export.",
        "The platform is available in English and Spanish, with invoices in either language. Access is managed centrally, so administrators control which pages each team member can view or edit.",
      ],
    },
    featuresHeading: {
      eyebrow: "Core features",
      title: "Everything your business administration needs, in one place",
    },
    features: [
      {
        icon: LayoutDashboard,
        title: "Dashboard",
        body: "Monitor revenue, payments, expenses and net profit, IVA and withholding balances, and overdue payments, with detailed reports one click away from each indicator.",
      },
      {
        icon: Building2,
        title: "Property Management",
        body: "Keep a central register of buildings and units, with specifications, utility contracts, community and administrator details, and registry and cadastral references.",
      },
      {
        icon: Contact,
        title: "Client Management",
        body: "Maintain one record per client, with contact and tax details, opening balances, documents and deposits, connected to their invoices, payments and statements.",
      },
      {
        icon: BookOpen,
        title: "Service Catalogue",
        body: "Define your services, separate rental from non-rental activities, link services to properties and configure default IVA treatment.",
      },
      {
        icon: Receipt,
        title: "Invoicing",
        body: "Issue sequentially numbered invoices in EUR, in English or Spanish, with service and tax details. Download them as PDF, send them by email and stamp them PAID once settled.",
      },
      {
        icon: Wallet,
        title: "Payments",
        body: "Record payments against specific invoices or on their own, reconcile billed amounts against receipts, and identify outstanding and overdue invoices.",
      },
      {
        icon: HandCoins,
        title: "Expense Management",
        body: "Classify expenses by category and provider, handle VAT and salary entries, attach receipts, and protect paid expense records against inappropriate changes.",
      },
      {
        icon: PiggyBank,
        title: "Security Deposits",
        body: "Manage deposits as distinct obligations, not revenue, recording refunds, deductions and forfeitures and reflecting each movement in client statements.",
      },
      {
        icon: Landmark,
        title: "Spanish Tax Administration",
        body: "Organize IVA records for Modelo 303 and IRPF withholding records for Modelos 111, 190, 115, 180, 123 and 193, with balances, settlements and supporting justificantes.",
      },
      {
        icon: ScrollText,
        title: "Client Statements",
        body: "Give each client a chronological account history of invoices, payments, balances and deposit movements, exportable to PDF or Excel.",
      },
      {
        icon: ChartColumn,
        title: "Reports & Analytics",
        body: "Analyze revenue, payments, expenses, net profit, profit and loss, and tax amounts, switching between registered-only and all-transactions views where supported.",
      },
      {
        icon: UserCog,
        title: "Administration & Access Control",
        body: "Invite team members, assign page-level view and edit rights, and manage invoice numbering and default IVA settings centrally.",
      },
      {
        icon: Palette,
        title: "Branding & Documents",
        body: "Configure company branding, numbering rules and default tax values so every invoice and PDF your business produces looks consistent.",
      },
      {
        icon: DatabaseBackup,
        title: "Data Export & Backup",
        body: "Export supported business and financial data and back up application data and stored files, as part of your own retention and recovery policy.",
      },
      {
        icon: FileCheck,
        title: "Invoice Verification",
        body: "Give recipients an online link to check that an invoice is authentic, without needing to contact you to confirm each document.",
      },
    ],
    howItWorks: {
      title: "From first record to financial review",
      intro:
        "Because every record shares one workspace, the information used for everyday administration also supports financial review, reporting and tax preparation.",
      steps: [
        {
          title: "Register properties and clients",
          body: "Set up the records that organize your business relationships and assets.",
        },
        {
          title: "Define your services",
          body: "Separate rental and non-rental activities and set property links and tax defaults.",
        },
        {
          title: "Issue invoices",
          body: "Create numbered invoices with the right service and tax information.",
        },
        {
          title: "Record payments and expenses",
          body: "Keep transaction records together with their supporting documents.",
        },
        {
          title: "Track balances and deposits",
          body: "Review client statements, unpaid invoices and deposit movements.",
        },
        {
          title: "Organize tax information",
          body: "Maintain IVA and IRPF records and their associated documentation.",
        },
        {
          title: "Review and export reports",
          body: "Understand financial performance and retain useful records.",
        },
        {
          title: "Control team access",
          body: "Give each user the permissions their responsibilities require.",
        },
      ],
    },
    governance: {
      title: "Security, permissions and language",
      intro:
        "ServiceHub is designed for businesses that need a shared workspace without giving every team member unrestricted access.",
      items: [
        {
          icon: Database,
          title: "Centralized workspace",
          body: "Business records are managed within one application.",
        },
        {
          icon: Lock,
          title: "Page-level permissions",
          body: "Users receive access only to the pages assigned to them.",
        },
        {
          icon: Eye,
          title: "Separate viewing and editing rights",
          body: "Permissions can reflect different responsibilities across the team.",
        },
        {
          icon: Languages,
          title: "English and Spanish",
          body: "The application supports both languages, including invoice production.",
        },
        {
          icon: ShieldCheck,
          title: "Controlled financial workflows",
          body: "Payments, expenses and deposits stay organized within their respective areas.",
        },
        {
          icon: Archive,
          title: "Export and backup",
          body: "Supported data and stored files can be backed up or exported.",
        },
      ],
    },
    benefitsHeading: {
      eyebrow: "The ServiceHub advantage",
      title: "More than an invoicing tool or a property register",
      description:
        "ServiceHub connects operational records with billing, payments, expenses and financial administration, reducing the fragmentation that comes from managing them separately.",
    },
    benefits: [
      {
        problem: "One record of properties, clients and services",
        solution: "Keep the core of your business in a single, centralized register.",
      },
      {
        problem: "Consistent invoicing",
        solution: "Issue consistent invoices and organize their delivery by PDF and email.",
      },
      {
        problem: "Clear balances and deposits",
        solution: "Track payments, outstanding balances and security deposits in one place.",
      },
      {
        problem: "Documented expenses",
        solution: "Record business expenses and keep their supporting files alongside them.",
      },
      {
        problem: "Centralized Spanish tax information",
        solution: "Keep IVA and IRPF records and documents organized for periodic and annual reviews.",
      },
      {
        problem: "Statements and reports on demand",
        solution: "Generate client statements and financial reports from the same records.",
      },
      {
        problem: "Shared access, under control",
        solution: "Work as a team while each person sees and edits only what they should.",
      },
      {
        problem: "Data you can take with you",
        solution: "Export and back up supported data and documents.",
      },
      {
        problem: "Verifiable invoices",
        solution: "Give clients a convenient way to confirm an invoice is authentic.",
      },
    ],
    audience: [
      {
        label: "Property rental companies",
        body: "Manage properties, tenants, rental invoices, deposits and payments.",
      },
      {
        label: "Property managers",
        body: "Organize property information, client accounts and recurring administration.",
      },
      {
        label: "Service providers",
        body: "Manage service catalogues, client billing, expenses and reports.",
      },
      {
        label: "Businesses with multiple revenue streams",
        body: "Organize rental and non-rental activities within the same system.",
      },
      {
        label: "Small and medium-sized companies",
        body: "Centralize day-to-day financial administration instead of scattering it across tools.",
      },
      {
        label: "Businesses operating in Spain",
        body: "Organize supported IVA and IRPF information and its documentation.",
      },
      {
        label: "Multi-user organizations",
        body: "Share business records while assigning access by responsibility.",
      },
    ],
    faqs: [
      {
        question: "What is ServiceHub?",
        answer:
          "ServiceHub is a business management platform that brings properties, clients, services, invoicing, payments, expenses, tax administration and financial reporting together in one centralized workspace.",
      },
      {
        question: "Is ServiceHub only for property businesses?",
        answer:
          "No. It was built for a business combining rentals with other services, so it suits property rental companies and managers as well as service providers and companies with several revenue streams. Its suitability depends on your workflows, accounting requirements and legal obligations.",
      },
      {
        question: "Which languages does it support?",
        answer:
          "ServiceHub is available in English and Spanish, and invoices can be produced in either language.",
      },
      {
        question: "Does ServiceHub file my Spanish tax returns?",
        answer:
          "No. It centralizes the records and documents behind IVA and IRPF models such as Modelo 303 and 111. Filing obligations, tax treatment and the accuracy of each declaration must still be checked against the applicable Spanish tax rules and your business’s circumstances.",
      },
      {
        question: "What does invoice verification confirm?",
        answer:
          "It lets a recipient check online that an invoice is authentic according to ServiceHub’s verification mechanism. It is not a tax-authority certification and does not prove that the invoice has been paid.",
      },
      {
        question: "Can I control what each team member sees?",
        answer:
          "Yes. Administrators invite team members and assign page-level permissions, with separate rights for viewing and editing.",
      },
      ...sharedFaqs("ServiceHub"),
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
