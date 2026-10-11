# OptivanceSoft website

Official website for OptivanceSoft — *Software that brings out your best.*

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide icons.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Structure

```
src/
  app/                 Routes: home, about, contact, support, privacy, terms,
                       products/[slug]; root layout; design tokens (globals.css)
  components/
    brand/             Logo and brand mark
    layout/            Site header (products menu, mobile menu), footer
    ui/                Primitives: Button, Container, Section, SectionHeading
    sections/          Reusable page sections: PageHero, FeatureGrid, CtaBand,
                       ContactDetails, PolicyPending
    products/          Product card, icon, CSS visuals, dashboard preview and
                       the shared ProductPageTemplate
    home/              Hero device illustration
  lib/
    products.ts        Typed product definitions: copy, features, benefits,
                       audience, FAQs, CTA label and colour theme
    content.ts         Benefits and company highlights
    site.ts            Company details, contact info, social links, navigation
```

## Design tokens

Defined in `src/app/globals.css` under `@theme` and available as Tailwind utilities
(e.g. `bg-navy-950`, `text-brand-600`, `bg-surface`, `text-muted`, `shadow-card`).

| Token        | Value     | Use                                         |
| ------------ | --------- | ------------------------------------------- |
| `navy-950`   | `#071A2F` | Dark sections, footer, brand mark           |
| `brand-500`  | `#0878F9` | Brand accent, icons, large elements         |
| `brand-600`  | `#0067DB` | Buttons and small link text (AA contrast)   |
| `surface`    | `#F5F8FC` | Light section backgrounds                   |
| `ink`        | `#102542` | Primary text                                |
| `muted`      | `#5B6B82` | Secondary text                              |

Contact details and social links live in `src/lib/site.ts` and are hidden until filled in.

## Contact form

The form on `/contact` posts to a Server Action (`src/app/contact/actions.ts`), which
re-validates input on the server and hands it to `deliverInquiry` in
`src/lib/contact/delivery.ts`. That file is the only place that knows about the email
provider; swap it to change providers.

Delivery uses the [Resend](https://resend.com) HTTP API. Configure it with environment
variables (see `.env.example`):

| Variable             | Purpose                                                     |
| -------------------- | ----------------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key (server-side only, never exposed to browser) |
| `CONTACT_TO_EMAIL`   | Inbox that receives inquiries                               |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend                       |

For local development, copy `.env.example` to `.env.local`. In production, set the
variables in your hosting provider's settings. **Until all three are set, the form
tells visitors their message was not sent** — it never shows a false confirmation.
If `site.contact.email` is set, that address is offered as a fallback.

Spam prevention:

- A hidden honeypot field; submissions that fill it are silently dropped.
- A minimum fill time (3 seconds from first interaction); faster submissions are
  rejected and the visitor is asked to submit again.
- Server-side validation and length limits on every field.

If spam becomes a problem, add a CAPTCHA such as Cloudflare Turnstile or rate limiting
at the hosting layer.

Errors are logged without the submitter's personal details, and visitors only see a
generic message.

## Legal pages

`/privacy` and `/terms` are **initial drafts**. They display a draft banner, are
excluded from search indexing, and contain `[bracketed]` placeholders. They require
business and legal review before publication; once approved, fill in the placeholders,
pass `draft={false}` to `LegalDocument`, and remove the `robots` noindex metadata.
