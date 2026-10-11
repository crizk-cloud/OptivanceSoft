import type { Metadata } from "next";
import { PolicyPending } from "@/components/sections/PolicyPending";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return <PolicyPending title="Terms of Service" subject="terms of service" />;
}
