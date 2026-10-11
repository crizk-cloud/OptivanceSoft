import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Renders configured contact channels from `site.contact`. When none are set,
 * points to the contact form (or renders nothing with `hideWhenEmpty`).
 */
export function ContactDetails({ hideWhenEmpty }: { hideWhenEmpty?: boolean }) {
  const { email, phone, location } = site.contact;

  if (!email && !phone && !location) {
    if (hideWhenEmpty) return null;
    return (
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <h2 className="text-lg font-semibold text-ink">Contact our team</h2>
        <p className="mt-2 leading-relaxed text-muted">
          Send us a message through our contact form and tell us which product you’re using.
        </p>
        <ButtonLink href="/contact" variant="secondary" className="mt-5">
          Go to the contact form
        </ButtonLink>
      </div>
    );
  }

  const rows = [
    email && { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    phone && { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    location && { icon: MapPin, label: "Location", value: location },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <dl className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
      {rows.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-start gap-4 p-6">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 ring-1 ring-brand-100">
            <Icon className="size-5" aria-hidden strokeWidth={1.75} />
          </span>
          <div>
            <dt className="text-sm font-semibold text-ink">{label}</dt>
            <dd className="mt-1 text-muted">
              {href ? (
                <a href={href} className="font-medium text-brand-600 hover:text-brand-700">
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
