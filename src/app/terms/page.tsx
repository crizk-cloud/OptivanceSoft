import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service (Draft)",
  description: "The terms that govern use of the OptivanceSoft website.",
  // Keep out of search results until the reviewed version is published.
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    heading: "About these terms",
    content: (
      <p>
        These terms govern your use of this website, operated by [OptivanceSoft legal entity
        name], [registered address] (“OptivanceSoft”, “we”, “us”). By using the website you agree
        to these terms. If you do not agree, please do not use the website.
      </p>
    ),
  },
  {
    heading: "Our products",
    content: (
      <p>
        This website provides information about OptivanceSoft products. Use of any OptivanceSoft
        product is governed by a separate agreement between your organization and OptivanceSoft.
        Nothing on this website forms part of such an agreement unless expressly stated in it.
      </p>
    ),
  },
  {
    heading: "Using the website",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website in any unlawful way or for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to the website or its systems</li>
          <li>Send spam or automated submissions through our forms</li>
          <li>Interfere with the operation or security of the website</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Intellectual property",
    content: (
      <p>
        The website and its content, including text, graphics, logos and product names, are owned
        by or licensed to OptivanceSoft. You may view and print pages for your own reference, but
        you may not copy, modify or distribute content without our permission.
      </p>
    ),
  },
  {
    heading: "Information on the website",
    content: (
      <p>
        We aim to keep information on the website accurate and up to date, but it is provided for
        general information only and may change without notice. Product availability and
        capabilities should be confirmed with our team.
      </p>
    ),
  },
  {
    heading: "Links to other websites",
    content: (
      <p>
        The website may link to websites operated by others. We are not responsible for their
        content or practices.
      </p>
    ),
  },
  {
    heading: "Disclaimer and limitation of liability",
    content: (
      <p>
        The website is provided “as is”. To the extent permitted by law, we exclude all warranties
        and are not liable for any loss arising from use of the website. [Liability wording must
        be reviewed by counsel for the governing jurisdiction.]
      </p>
    ),
  },
  {
    heading: "Privacy",
    content: (
      <p>
        Our{" "}
        <Link href="/privacy" className="font-medium text-brand-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        explains how we handle personal information collected through the website.
      </p>
    ),
  },
  {
    heading: "Governing law",
    content: <p>These terms are governed by the laws of [jurisdiction to be confirmed].</p>,
  },
  {
    heading: "Changes to these terms",
    content: (
      <p>
        We may update these terms from time to time. The “Last updated” date shows when they were
        last changed.
      </p>
    ),
  },
  {
    heading: "Contact us",
    content: (
      <p>
        Questions about these terms can be sent through our{" "}
        <Link href="/contact" className="font-medium text-brand-600 hover:underline">
          contact page
        </Link>{" "}
        or to [legal contact email].
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      intro={<p>Please read these terms carefully before using the OptivanceSoft website.</p>}
      sections={sections}
    />
  );
}
