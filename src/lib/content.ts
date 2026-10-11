import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Factory,
  Gauge,
  Lightbulb,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  Target,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; body: string };
export type Stat = { icon: LucideIcon; value: string; label: string };

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
 * Company figures for the overview section. Only verifiable facts about
 * OptivanceSoft itself; add customer or usage figures only once confirmed.
 */
export const stats: Stat[] = [
  { icon: Boxes, value: "4", label: "Software products" },
  { icon: Factory, value: "4", label: "Industries served" },
  { icon: Target, value: "1", label: "Shared vision" },
  { icon: RefreshCw, value: "Always", label: "Improving" },
];
