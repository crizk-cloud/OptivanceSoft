import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Renders configured contact channels from `site.contact`. When none are set,
 * shows an honest notice instead of placeholder details.
 */
export function ContactDetails() {
  const { email, phone, location } = site.contact;

  if (!email && !phone && !location) {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <h2 className="text-lg font-semibold text-ink">Contact details coming soon</h2>
        <p className="mt-2 leading-relaxed text-muted">
          Our public contact channels are being finalized and will be listed here shortly.
        </p>
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
