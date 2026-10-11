import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * Branded social-sharing card rendered at build time. Uses the default
 * system font bundled with next/og, so no external font fetch is needed.
 */
export function brandImage({
  eyebrow,
  title,
  subtitle,
  accent = "#0878F9",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #071A2F 0%, #0B2440 60%, #12325A 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <rect x="0.5" y="0.5" width="31" height="31" rx="8" fill="#0B2440" stroke="rgba(255,255,255,0.2)" />
            <path
              d="M24.2 13.2v7.55L16 25.5l-8.2-4.75v-9.5L16 6.5"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M16 6.5l8.2 4.75" fill="none" stroke="#0878F9" strokeWidth="3" strokeLinecap="round" />
            <circle cx="16" cy="16" r="2.4" fill="#0878F9" />
          </svg>
          <div style={{ display: "flex", fontSize: 38, letterSpacing: -0.5 }}>
            <span>Optivance</span>
            {/* The image renderer adds space between text runs; pull "Soft" back. */}
            <span style={{ color: "#4FA3FF", marginLeft: -7 }}>Soft</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: accent,
            }}
          >
            {eyebrow}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 30, lineHeight: 1.4, color: "#9FB0C6", maxWidth: 940 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", height: 8, width: 160, borderRadius: 4, background: accent }} />
      </div>
    ),
    ogSize,
  );
}
