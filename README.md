# Blue Pen Solutions: marketing site

Static, no-build marketing site for Blue Pen Solutions (technology consulting). Plain HTML/CSS with a few lines of JS for the mobile menu.

## Structure
- `index.html`: the single page (hero, services, approach, selected work, about, contact)
- `styles.css`: all styles (responsive, blue theme)
- `assets/`: favicon/logo mark (SVG), Open Graph image (SVG source + PNG)
- `.nojekyll`: serve files as-is on GitHub Pages
- `screenshots/`: desktop and mobile full-page renders

## Local preview
Open `index.html` in a browser, or run `python3 -m http.server 8080` and visit http://localhost:8080.

## Deploy to GitHub Pages
1. Push this repo to GitHub (`BPSAppTech/bps-web`).
2. Settings → Pages → Build and deployment → "Deploy from a branch" → `main` / `(root)`.
3. The site is published at **https://bpsapptech.github.io/bps-web/** (project path). Asset and in-page links use relative URLs so they work under that path.
4. Optional custom domain: add a `CNAME` file with the domain, point DNS at GitHub Pages, and update `canonical`, Open Graph, JSON-LD, `sitemap.xml`, and `robots.txt` as noted in `index.html`.

Note: Pages on a **private** repo requires GitHub Pro/Team/Enterprise; on GitHub Free the repo must be public.

## TODO before going live
- [ ] Replace the placeholder contact email `hello@bluepensolutions.com` in `index.html` (href + link text).
- [ ] Confirm the final domain; update `canonical`, `og:url`, `og:image`, and JSON-LD URLs in `index.html`.
- [ ] Review the "Selected work" summaries and the About copy.
