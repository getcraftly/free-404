# Free 404 — Space-Themed 404 Page

> A beautifully animated 404 page with a cosmic twist. Drop it into any Next.js project.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)

**Part of [Craftly](https://getcraftly.dev)** — Premium Next.js templates for modern builders. This one is free under MIT.

---

## Preview

Visit [getcraftly.dev](https://getcraftly.dev) for a live gallery, or see the full walkthrough on [YouTube](https://www.youtube.com/@craftly-dev).

---

## What's inside

- 🌌 **Space-themed design** — Dark cosmos background, glow effects
- ✨ **120 twinkling stars** — Randomized positions, subtle animation
- 👨‍🚀 **Floating astronaut** — SVG illustration with Framer Motion
- 🪐 **Orbital objects** — Rotating planets and satellites
- 🎨 **Gradient "404" text** — Eye-catching title
- 💫 **Motion particles** — Framer Motion particles for depth
- 🔘 **Two CTA buttons** — "Go Home" and "Go Back"
- 🌓 **Dark mode** — Looks great in both themes
- 📱 **Fully responsive**

---

## Tech Stack

| Layer | Choice |
|------|--------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript (strict) |
| Animation | Framer Motion |
| License | MIT |

---

## Quick Start

### Option 1: Use as a standalone project

```bash
git clone https://github.com/getcraftly/free-404.git
cd free-404
npm install
npm run dev
```

Open [http://localhost:3000/missing-page](http://localhost:3000/missing-page) to see the 404.

### Option 2: Drop into an existing Next.js project

Copy `src/app/not-found.tsx` and any CSS variables from `src/app/globals.css` into your project. Make sure you have:

- Next.js 15+ (App Router)
- Tailwind CSS v4
- `framer-motion` installed

```bash
npm install framer-motion
```

That's it — Next.js auto-renders `not-found.tsx` for unmatched routes.

### Option 3: Deploy to Vercel in 1 click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgetcraftly%2Ffree-404)

### Option 4: Use the CLI

```bash
npx create-craftly-app my-app
```

---

## Customization

### Change the colors

All brand colors live in `src/app/globals.css`:

```css
@theme inline {
  --color-primary: #6366F1;
  --color-secondary: #EC4899;
  --color-accent: #14B8A6;
}
```

Edit and every component updates — Tailwind v4 `@theme inline` in action.

### Change the copy

The not-found page copy lives in `src/app/not-found.tsx`. Search for the string you want to change, replace. No data files to hunt through.

### Swap the illustration

The astronaut SVG is inline in `src/app/not-found.tsx`. Replace the SVG with your own, keep the `motion.svg` wrapper for animation.

---

## File Structure

```
free-404/
├── src/
│   └── app/
│       ├── globals.css      # Tailwind v4 + brand tokens
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home (redirects to missing-page)
│       └── not-found.tsx    # The 404 page
├── public/                  # Static assets
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## License

MIT — use in commercial and personal projects. No attribution required.

If you like this template, star the repo — it helps others find it.

---

## Related

🎯 **Looking for more templates?**

This is the free one. The [All-Access Bundle](https://getcraftly.gumroad.com/l/all-access-bundle) includes:

- **SaaSify** — SaaS landing page
- **Admin Dashboard** — analytics with charts and tables
- **Developer Portfolio** — 7-section portfolio
- **Blog** — tag-filtered blog with newsletter
- **Pricing Page** — conversion-optimized pricing
- **Waitlist** — pre-launch page with countdown

All built the same way. One bundle, one price, every future template included.

→ [Browse the full catalog at getcraftly.dev](https://getcraftly.dev)

---

**Made by [Craftly](https://getcraftly.dev)** — Next.js templates built for shipping fast.
