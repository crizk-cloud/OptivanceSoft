"use client";

/**
 * Last-resort boundary when the root layout itself fails. Renders its own
 * <html> and avoids app styles and components, which may be what failed.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#F5F8FC", color: "#102542" }}>
        <main style={{ maxWidth: 560, margin: "0 auto", padding: "120px 24px" }}>
          <h1 style={{ fontSize: 32, margin: 0 }}>Something went wrong.</h1>
          <p style={{ color: "#5B6B82", fontSize: 18, lineHeight: 1.5 }}>
            Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{ marginTop: 16, padding: "12px 20px", fontSize: 16, fontWeight: 600, color: "#fff", background: "#0067DB", border: 0, borderRadius: 8, cursor: "pointer" }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
