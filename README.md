# OptivanceSoft website

Official website for OptivanceSoft — *Software that brings out your best.*

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide icons.

## Requirements

- Node.js 20.9 or newer (required by Next.js 16)
- npm (a `package-lock.json` is committed; use `npm ci` in CI)

## Getting started

```bash
npm ci                       # install exact dependency versions
cp .env.example .env.local   # optional: configure site URL and email delivery
npm run dev                  # http://localhost:3000
```

## Scripts

| Command             | What it does                                           |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Development server with hot reload                     |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)    |
| `npm run typecheck` | Generates route types, then runs `tsc --noEmit`        |
| `npm run build`     | Production build (also type-checks)                    |
| `npm start`         | Serves the production build (`npm run build` first)    |

There is no automated test suite yet. Before each release run `lint`, `typecheck`
and `build`, then check the pages and contact form manually (see the launch
checklist below).

## Environment variables

All variables are **server-side only**: none use the `NEXT_PUBLIC_` prefix, so none
are included in browser bundles. `.env*` files are git-ignored except
`.env.example`.

| Variable             | Required             | Purpose                                                       |
| -------------------- | -------------------- | ------------------------------------------------------------- |
| `SITE_URL`           | Yes, in production   | Canonical origin, e.g. `https://www.optivancesoft.com`. Used for canonical links, sitemap, robots.txt, Open Graph and structured data. Falls back to Vercel's production domain, then `http://localhost:3000`. |
| `RESEND_API_KEY`     | For the contact form | Resend API key                                                |
| `CONTACT_TO_EMAIL`   | For the contact form | Inbox that receives inquiries                                 |
| `CONTACT_FROM_EMAIL` | For the contact form | Sender address on a domain verified in Resend                 |

`SITE_URL` is read at build time for statically generated pages, so **rebuild after
changing it**.

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
                       ContactDetails
    contact/           Contact form (client) and URL-aware wrapper
    legal/             Layout for Privacy Policy and Terms drafts
    products/          Product card, icon, CSS visuals, dashboard preview and
                       the shared ProductPageTemplate
    home/              Hero device illustration
  lib/
    products.ts        Typed product definitions: copy, features, benefits,
                       audience, FAQs, CTA label and colour theme
    content.ts         Benefits and company highlights
    site.ts            Company details, contact info, social links, navigation
    seo.ts             Site URL and per-page metadata helper
    contact/           Form validation (shared) and email delivery (server-only)
    og/                Branded Open Graph image template
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

Without JavaScript the form still POSTs to the Server Action (form data never goes
into the URL). Because the minimum-fill-time check needs JavaScript, such
submissions are answered with an honest "not sent" message.

## Legal pages

`/privacy` and `/terms` are **initial drafts**. They display a draft banner, are
excluded from search indexing, and contain `[bracketed]` placeholders. They require
business and legal review before publication; once approved, fill in the placeholders,
pass `draft={false}` to `LegalDocument`, and remove the `robots` noindex metadata.

## SEO

- Every indexable page sets a unique title, description, canonical URL, Open Graph
  and Twitter card metadata through `pageMetadata()` in `src/lib/seo.ts`.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` from `SITE_URL`. Draft legal pages are excluded from the sitemap and
  marked `noindex`.
- Unknown product URLs return a real 404 via `src/proxy.ts` (instead of a "soft 404"),
  and `/products` redirects to the homepage's product section.
- Social sharing images are generated at build time: `src/app/opengraph-image.tsx`
  for the site and `src/app/products/[slug]/opengraph-image.tsx` per product.
- The homepage includes `Organization` and `WebSite` structured data limited to
  verified facts (name, URL, logo, approved description). Add address, social
  profiles (`sameAs`) or contact points only once they are confirmed.

## Security

- Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`, `Strict-Transport-Security`) are set in `next.config.ts`, and
  the `X-Powered-By` header is disabled. A Content-Security-Policy is not set because
  it requires nonce support for Next.js inline scripts; add one if your policy needs it.
- The contact Server Action re-validates all input on the server. The email module
  imports `server-only`, so it cannot be bundled into client code.
- `src/app/error.tsx` and `src/app/global-error.tsx` show generic messages; error
  details and stack traces are never rendered to visitors.

## Deployment

The site uses Server Actions (contact form) and generated images, so it needs a
**Node.js runtime**. It cannot be deployed as a static export (for example GitHub
Pages).

### Recommended: Vercel

1. Import the GitHub repository in Vercel. The framework (Next.js), build command
   (`npm run build`) and output are detected automatically.
2. Set the production branch to the branch you deploy from.
3. Add environment variables for **Production** (and Preview if you want a working
   form there): `SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
4. Add your custom domain, then redeploy so `SITE_URL`-based URLs are baked in.
5. Preview deployments are served on `*.vercel.app` with Vercel's default
   `X-Robots-Tag: noindex`, so they will not compete with production in search.

### Self-hosting (any Node.js host or container)

```bash
npm ci
SITE_URL=https://www.optivancesoft.com npm run build
SITE_URL=https://www.optivancesoft.com RESEND_API_KEY=... CONTACT_TO_EMAIL=... CONTACT_FROM_EMAIL=... npm start   # port 3000; set PORT to change
```

Run it behind a reverse proxy or platform that terminates HTTPS.

## Launch checklist

- [ ] `SITE_URL` set to the final domain and site rebuilt
- [ ] Resend domain verified and the three email variables set; send a real test
      inquiry and confirm it arrives
- [ ] Public contact details (if any) added to `src/lib/site.ts`
- [ ] Privacy Policy and Terms reviewed, placeholders completed, draft banner and
      `noindex` removed, pages added to `sitemap.ts`
- [ ] Product features and copy confirmed against the actual products
- [ ] Submit `https://<domain>/sitemap.xml` in Google Search Console
- [ ] Check social previews (for example with LinkedIn Post Inspector)
