# Aniket Lodh — Portfolio

React + Vite portfolio, Persona 4-inspired UI. Deploys to `hadoken-io.github.io`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

This repo **is** `hadoken-io.github.io` (a user-page repo), so it's served straight
from the `main` branch — no `gh-pages` branch or `/docs` folder needed.

The included workflow (`.github/workflows/deploy.yml`) builds the site with Vite and
publishes it via GitHub Pages on every push to `main`. One-time setup after you push
this repo:

1. Go to **Settings → Pages** on `hadoken-io/hadoken-io.github.io`.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically. Your site will be
   live at `https://hadoken-io.github.io/` a minute or two later.

## Editing content

All copy — projects, skills, education, contact links — lives in `src/data.js`.
Update the arrays there rather than editing the components directly; the components
just render whatever is in that file.

## Structure

```
src/
  components/   one file per section (Hero, About, Work, Skills, Contact, Header, Footer)
  data.js       all portfolio content
  useReveal.js  scroll-reveal hook (IntersectionObserver, respects reduced motion)
  styles.css    global styles
```
