import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-28 sm:py-36">
      <Eyebrow>Page not found</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
        We couldn’t find that page.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted">
        The page may have moved, or the address may be incorrect.
      </p>
      <ButtonLink href="/" size="lg" className="mt-10">
        Back to home
      </ButtonLink>
    </Container>
  );
}
