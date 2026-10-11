import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Compass,
  Gauge,
  Lightbulb,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  Target,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; body: string };

export const benefits: Feature[] = [
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    body: "Software designed around real operational needs, not features for their own sake.",
  },
  {
    icon: MousePointerClick,
    title: "Easy to Use",
    body: "Modern, intuitive experiences that stay accessible across desktop, tablet and phone.",
  },
  {
    icon: Gauge,
    title: "Measurable Impact",
    body: "Tools intended to help teams save time and simplify their everyday workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable and Secure",
    body: "We believe privacy, responsible data handling and dependable software matter.",
  },
];

/**
 * Non-numeric company highlights. These describe what OptivanceSoft offers;
 * they are not evidence of customer adoption.
 */
export const highlights: Feature[] = [
  {
    icon: Boxes,
    title: "Four software products",
    body: "Campus Call, Athletix School, Grow Manager and Service Hub.",
  },
  {
    icon: Compass,
    title: "Multiple industries served",
    body: "Education, school athletics, agriculture and real estate.",
  },
  {
    icon: Target,
    title: "One unified product vision",
    body: "Every product shares the same goal: software that brings out your best.",
  },
  {
    icon: RefreshCw,
    title: "Continuous product improvement",
    body: "Our products keep evolving with the needs of the people who use them.",
  },
];
