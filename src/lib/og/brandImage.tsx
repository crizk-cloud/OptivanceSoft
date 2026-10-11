import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

async function loadAssets() {
  const dir = join(process.cwd(), "src/lib/og");
  const [logo, display, text] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/optivancesoft-logo-reversed.svg")),
    readFile(join(dir, "fonts/montserrat-latin-800-normal.woff")),
    readFile(join(dir, "fonts/montserrat-latin-500-normal.woff")),
  ]);
  return { logoSrc: `data:image/svg+xml;base64,${logo.toString("base64")}`, display, text };
}

/**
 * Branded social-sharing card rendered at build time, using the official
 * reversed logo (with slogan) and Montserrat (bundled under the SIL Open Font License, see fonts/OFL.txt).
 */
export async function brandImage({
  eyebrow,
  title,
  subtitle,
  accent = "#3B8EFF",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: string;
}) {
  const { logoSrc, display, text } = await loadAssets();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "linear-gradient(135deg, #071A2F 0%, #0B2440 60%, #12325A 100%)",
          color: "#FFFFFF",
          fontFamily: "Montserrat",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires <img> */}
        <img src={logoSrc} width={556} height={112} alt="" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: accent,
            }}
          >
            {eyebrow}
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 64, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5 }}>
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 28, fontWeight: 500, lineHeight: 1.4, color: "#9FB0C6", maxWidth: 960 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", height: 8, width: 160, borderRadius: 4, background: accent }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Montserrat", data: display, weight: 800, style: "normal" },
        { name: "Montserrat", data: text, weight: 500, style: "normal" },
      ],
    },
  );
}
