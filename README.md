# suryansu.pro

Personal portfolio built with Next.js 16, React 19, and Tailwind CSS 4.

Live site: [suryansu.pro](https://suryansu.pro)

## Overview

This repo powers a multi-page portfolio with:

- a bento-style landing page
- an expanded projects showcase with shipped apps and UI templates
- a stats page with Monkeytype data and personal snapshots
- a `/blocks` page for reusable interactive UI experiments

The project is focused on frontend presentation, motion, and polish while still keeping SEO, responsiveness, and deployment details production-ready.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero, About, Skills, Projects, Experience, Education, GitHub, Links, Contact |
| `/projects` | Full project archive plus UI template work |
| `/stats` | Monkeytype stats, setup, gaming, academics, misc. |
| `/blocks` | Experimental interactive blocks and reusable UI ideas |

## Stack

- `Next.js 16` with App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `GSAP` and `motion` for animation
- `shadcn`-style UI building blocks
- `react-hot-toast`
- `@calcom/embed-react`
- `@vercel/analytics`

## Current Features

- Bento-grid based responsive layout
- Desktop and mobile theme switching
- Custom cursor experience
- Lazy-loaded project section on the homepage
- Animated GitHub contribution heatmap
- Monkeytype profile integration
- Project cards with image and video previews
- Dedicated templates showcase
- Blocks playground for interactive UI pieces
- JSON-LD, sitemap, robots, OG image, and manifest support
- Vercel Analytics integration

## Featured Work In The Repo

### Projects

- `Convergence UI` - dynamic OKLCH theming engine
- `Green Panipat Mission` - plantation tracking platform
- `Flora` - plantation/community app variant
- `ssh-18` - hackathon e-commerce build
- `Todo App` - Supabase-powered task manager
- `Blog` - animated personal blog

### Templates

- `Dashboard - React`
- `Travel Website Template`
- `Student Hub`

### Blocks

- `Blob Cursor`
- `Theme Clipper`
- `Rect Tip`

## Local Setup

Install dependencies:

```bash
pnpm install
```

Create `.env`:

```env
NEXT_PUBLIC_MONKEY_API=
NEXT_PUBLIC_MONKEY_USER=
NEXT_PUBLIC_MONKEY_KEY=
```

Start the dev server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Project Structure

```text
src/
  app/          Next.js routes and page-level entrypoints
  components/   sections, UI primitives, utilities
  constants/    project, template, and content metadata
public/         static images, videos, manifest, and media assets
```

## Notes

- `FRONTEND_FLOW.md` contains extra project-side frontend notes.
- The stats page depends on Monkeytype environment variables for live profile data.
- GitHub contributions are fetched from an external contributions API at runtime.
