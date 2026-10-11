import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav, site } from "@/lib/site";
import { CopyrightYear } from "./CopyrightYear";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-muted-dark">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm sm:col-span-3 lg:col-span-1">
            <Link href="/" aria-label="OptivanceSoft home" className="inline-block rounded-lg">
              <Logo inverse />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              {site.name} builds practical software for schools, sports programs, farms and
              property businesses. {site.tagline}
            </p>
            {site.social.length > 0 && (
              <ul className="mt-5 flex gap-4 text-sm">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="hover:text-white" rel="noopener noreferrer" target="_blank">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {footerNav.map((group) => {
            const headingId = `footer-${group.title.toLowerCase()}`;
            return (
              <nav key={group.title} aria-labelledby={headingId}>
                <h2 id={headingId} className="text-sm font-semibold text-white">
                  {group.title}
                </h2>
                <ul className="mt-3 space-y-1 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-block py-1.5 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm">
          <p>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
