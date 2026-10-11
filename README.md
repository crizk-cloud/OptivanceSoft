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
Privacy Policy and Terms of Service pages show a notice until the approved text is added.
