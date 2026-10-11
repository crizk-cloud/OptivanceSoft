import type { Metadata } from "next";
import { PolicyPending } from "@/components/sections/PolicyPending";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <PolicyPending title="Privacy Policy" subject="privacy policy" />;
}
