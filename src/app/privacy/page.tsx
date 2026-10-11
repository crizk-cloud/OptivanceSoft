import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft)",
  description: "How OptivanceSoft collects, uses and protects personal information submitted through this website.",
  // Keep out of search results until the reviewed version is published.
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    content: (
      <p>
        This website is operated by [OptivanceSoft legal entity name], [registered address]
        (“OptivanceSoft”, “we”, “us”). This policy explains how we handle personal information
        collected through this website. Our software products may be covered by separate
        agreements and privacy terms.
      </p>
    ),
  },
  {
    heading: "Information we collect",
    content: (
      <>
        <p>When you use our contact form, we collect the information you choose to provide:</p>
        <ul>
          <li>Your name and work email address</li>
          <li>Your organization’s name</li>
          <li>The product you are interested in</li>
          <li>The content of your message</li>
        </ul>
        <p>
          Like most websites, our hosting provider may automatically record technical information
          such as IP address, browser type and pages requested, for security and operation of the
          site. [Confirm hosting provider and any analytics tools before publication. This site
          does not currently use analytics or advertising cookies.]
        </p>
      </>
    ),
  },
  {
    heading: "How we use your information",
    content: (
      <ul>
        <li>To respond to your inquiry and provide the information or demo you request</li>
        <li>To follow up about the products you asked about</li>
        <li>To protect the website against spam, abuse and security threats</li>
        <li>To comply with legal obligations</li>
      </ul>
    ),
  },
  {
    heading: "Legal basis for processing",
    content: (
      <p>
        [Confirm the applicable legal bases with counsel for the jurisdictions where you operate,
        for example legitimate interests in responding to business inquiries, or consent.]
      </p>
    ),
  },
  {
    heading: "How we share information",
    content: (
      <>
        <p>We do not sell your personal information. We share it only with:</p>
        <ul>
          <li>
            Service providers that help us operate the website and deliver messages, such as our
            hosting and email providers [list providers, e.g. hosting provider and email delivery
            service]
          </li>
          <li>Professional advisers or authorities where required by law</li>
        </ul>
      </>
    ),
  },
  {
    heading: "International transfers",
    content: (
      <p>
        Our service providers may process information in other countries. [Describe where data is
        processed and the safeguards used, once providers are confirmed.]
      </p>
    ),
  },
  {
    heading: "How long we keep information",
    content: (
      <p>
        We keep inquiry information only as long as needed to respond and for related follow-up,
        then delete it. [Confirm retention period, e.g. 24 months.]
      </p>
    ),
  },
  {
    heading: "Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect personal information.
        No method of transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    heading: "Your rights",
    content: (
      <p>
        Depending on where you live, you may have the right to access, correct or delete your
        personal information, or to object to or restrict its use. To make a request, contact us
        using the details below. [Confirm rights and any supervisory authority under applicable
        law.]
      </p>
    ),
  },
  {
    heading: "Children",
    content: (
      <p>
        This website is intended for organizations and their representatives and is not directed
        at children. [Confirm wording; product-specific policies may address student or minor data
        separately.]
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. The “Last updated” date shows when it was
        last changed.
      </p>
    ),
  },
  {
    heading: "Contact us",
    content: (
      <p>
        For privacy questions or requests, contact us at [privacy contact email] or through our{" "}
        <Link href="/contact" className="font-medium text-brand-600 hover:underline">
          contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      intro={
        <p>
          We respect your privacy. This policy describes what information we collect through this
          website, how we use it, and the choices you have.
        </p>
      }
      sections={sections}
    />
  );
}
