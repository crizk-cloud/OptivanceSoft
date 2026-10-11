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
  app/                 Routes, root layout, global styles and design tokens (globals.css)
  components/
    brand/             Logo and brand mark
    layout/            Site header, footer
    ui/                Shared primitives: Button, Container, Section, SectionHeading
    products/          Product card and icon
    home/              Homepage-specific pieces
  lib/
    products.ts        Single source of truth for product content
    site.ts            Company details, navigation and contact info
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

Contact details live in `src/lib/site.ts` and are hidden until filled in.
