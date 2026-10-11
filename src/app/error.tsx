"use client";

import { ButtonLink, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

/** Route-level error boundary. Shows a generic message; never error details. */
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="flex flex-col items-start py-28 sm:py-36">
      <Eyebrow>Something went wrong</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
        This page couldn’t be loaded.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted">
        Please try again. If the problem continues, return to the homepage.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" onClick={reset}>
          Try again
        </Button>
        <ButtonLink href="/" size="lg" variant="secondary">
          Back to home
        </ButtonLink>
      </div>
    </Container>
  );
}
