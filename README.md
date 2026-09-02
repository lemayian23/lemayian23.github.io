# Denis Lemayian Kirionki — Portfolio

Personal portfolio site built with Next.js (App Router) and TypeScript. Showcases my
background as a Software Engineer / AI Developer, work experience, and projects —
including [TUK-ConvoSearch](https://github.com/lemayian23/tuk-convosearch), a
production-grade RAG assistant.

**Live site:** _add your domain here once deployed_

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + TypeScript
- Plain CSS (CSS custom properties) — no UI framework dependency

## Getting Started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run eslint
```

## Project Structure

```
portfolio/
├── public/                 # static assets — profile photos, favicon, etc.
│   ├── favicon.ico
│   ├── profile1.jpg
│   ├── profile2.jpg
│   └── profile3.jpg
└── src/
    ├── app/
    │   ├── globals.css     # theme variables + shared classes (header, hero, cards…)
    │   ├── layout.tsx      # root layout — page <head>, Header/Footer wrapper
    │   └── page.tsx        # homepage — assembles all sections
    ├── components/
    │   ├── Header.tsx      # sticky nav
    │   ├── About.tsx       # bio, contact info, skills grid
    │   ├── Experience.tsx  # work history timeline
    │   ├── Projects.tsx    # featured + secondary project cards
    │   └── Footer.tsx
    └── types/
        └── index.ts        # shared TS interfaces (Skill, PortfolioItem, ExperienceItem)
```

### Before your first run

`About.tsx` expects three headshots in `public/`: `profile1.jpg`, `profile2.jpg`,
`profile3.jpg` (used by the About section's photo carousel). If they're missing,
the image falls back to an auto-generated avatar — the site still works, it just
looks generic until you add real photos.

## Updating Content

- **Bio / skills:** `src/components/About.tsx` — the `skills` array drives the
  skills grid; each entry has a `name`, `level` (0–100), and `category`.
- **Work history:** `src/components/Experience.tsx` — the `experience` array.
- **Projects:** `src/components/Projects.tsx` — the `projects` array. Set
  `featured: true` on at most one or two entries to highlight them at the top.
- **Contact info / hero copy:** `src/app/page.tsx`.
- **Colors / spacing:** `src/app/globals.css` — edit the CSS variables at the top
  (`--primary-color`, `--secondary-color`, `--card-bg`, `--text-color`) to retheme
  the whole site.

## Deployment

The simplest path is [Vercel](https://vercel.com) (built by the Next.js team):

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo. It auto-detects Next.js — no
   config needed.
3. Deploy. You'll get a `*.vercel.app` URL immediately.
4. Go to **Project → Settings → Domains** and add your custom domain.
5. In your domain registrar's DNS settings, add the A record / CNAME (or
   nameservers) Vercel gives you. Propagation is usually minutes to a couple
   hours.

Alternatives: [Netlify](https://netlify.com) (same Git-connected workflow) or
[Render](https://render.com).

## License

© 2026 Denis Lemayian Kirionki. All rights reserved.
