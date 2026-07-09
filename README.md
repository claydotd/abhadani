# Journalist Portfolio

A simple, clean portfolio website for a freelance journalist. Built with React and Vite, designed to be updated via JSON files without touching code.

## Pages

- **Home** — Bio and featured work
- **About** — Extended biography
- **Selected Work** — Portfolio organised by category (Reportage, Features, Investigations, Opinion/Analysis, Reviews)
- **Contact** — Email and social links

## Local development

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Build and deployment**
3. Set source to **GitHub Actions**
4. Push to `main` — the included workflow builds and deploys automatically

The site will be available at `https://<username>.github.io/abhadani/`.

If your repo has a different name, update the `base` path in `vite.config.ts`.

## Updating content

See **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** for instructions your friend can follow to add, edit, or remove portfolio items by editing JSON files in the `content/` folder.

## Project structure

```
content/           ← Edit these JSON files to update the site
  site.json        ← Name, bio, contact info
  reportage.json
  features.json
  investigations.json
  opinion-analysis.json
  reviews.json
src/
  components/      ← Layout, navigation, work cards
  pages/           ← Home, About, Selected Work, Contact
  data/content.ts  ← Loads JSON into the app
```
