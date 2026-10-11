import { brandImage, ogSize } from "@/lib/og/brandImage";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return brandImage({
    eyebrow: site.tagline,
    title: "Powering Smarter Operations Across Every Industry",
    subtitle: "Software for schools, sports programs, farms and property businesses.",
  });
}
