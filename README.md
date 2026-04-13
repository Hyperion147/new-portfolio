# suryansu.pro

Personal portfolio built with Next.js 16 and React 19.

## Stack

- **Next.js 16** · App Router, SSR, sitemap & robots auto-generation
- **React 19** · with lazy-loaded sections
- **TypeScript** · throughout
- **Tailwind CSS 4** · dark mode, custom bento grid layout
- **GSAP + Motion** · page & element animations
- **tsparticles** · sparkle / particle effects
- **EmailJS** · contact form
- **Cal.com embed** · meeting scheduling
- **Vercel Analytics** · built-in

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, About, Skills, Projects, Experience, GitHub, Contact |
| `/stats` | Live MonkeyType stats, gaming, setup, academics |
| `/projects` | Full project listing |

## Features

- Bento grid layout across all pages
- Dark / light theme toggle (desktop + mobile)
- Live MonkeyType profile via API (WPM, streaks, personal bests)
- Highlighted project showcase with video previews
- Animated tooltip skill icons
- Flip-words hero animation
- GitHub contributions section
- Experience timeline
- SEO — OG image, JSON-LD, sitemap, robots
- PWA manifest
- Custom cursor
- Responsive navbar with hamburger menu

## Projects Showcased

- **Convergence UI** — OKLCH dynamic theming engine (npm package)
- **Green Panipat Mission** — geo-tagged plantation tracker with leaderboard
- **Todo App** — Supabase auth + task management
- **Blog** — personal blog with GSAP animations

## Setup

```bash
pnpm install
```

Create a `.env` file:

```env
NEXT_PUBLIC_MONKEY_API=
NEXT_PUBLIC_MONKEY_USER=
NEXT_PUBLIC_MONKEY_KEY=
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).
