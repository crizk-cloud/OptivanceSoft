import { PageHero } from "./PageHero";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

/** Placeholder for legal pages until the approved text is published. */
export function PolicyPending({ title, subject }: { title: string; subject: string }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        <p>
          Our {subject} is being finalized and will be published on this page. If you have a
          question in the meantime, please get in touch with our team.
        </p>
      </PageHero>
      <Section>
        <ButtonLink href="/contact" variant="secondary">
          Contact us
        </ButtonLink>
      </Section>
    </>
  );
}
