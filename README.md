# Parnika Garg — Portfolio

A responsive, editorial-style personal portfolio for Parnika Garg, positioning her work across corporate strategy, operations, finance, and business transformation.

## Highlights

- CV-grounded experience, education, and selected-work content
- Responsive layout with a mobile navigation menu and accessible keyboard focus states
- Downloadable CV included with the site
- Lightweight static architecture with no framework or dependency installation required

## Run locally

Use any static-file server to open the site. For example:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Verify and build

The project uses Node.js only for the checks and static build step:

```powershell
node scripts/check.mjs
node scripts/build.mjs
```

The production-ready site is written to `dist/`.

## Share the live portfolio

The complete browser-ready HTML package is committed in `dist/`. To make it available as a normal public website, enable **Settings → Pages → Source → GitHub Actions** once in GitHub. The deployment workflow will then publish future updates automatically.

## Project structure

```text
index.html       Main page markup
styles.css       Responsive visual system
app.js           Navigation and reveal enhancements
assets/          Downloadable CV
scripts/         Verification and build scripts
```

## Design direction

The site uses a restrained editorial palette, serif-led typography, and clear content hierarchy to suit strategy and operations roles.
