# Blue Pen Solutions: website (redesign)

Plain static HTML/CSS with one small optional script. No build step. GitHub Pages ready (`.nojekyll` included).

```
index.html            the whole site (one page: hero, services at a glance, seven numbered chapters)
styles.css            all styles; design tokens at the top
pen.js                optional: draws the pen marks in on scroll (skipped with reduced motion; marks show without it)
assets/fonts/         self-hosted, subset WOFF2: Newsreader (roman + italic, variable) and IBM Plex Mono (SIL OFL)
assets/favicon.svg    pen-nib favicon (+ favicon-32.png, apple-touch-icon.png)
assets/og-image.png   1200x630 social card
```

Preview locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000.

## Before publishing (TODOs marked in index.html)
- Contact email `hello@bluepensolutions.com` is a placeholder.
- Canonical / og:url / og:image / JSON-LD assume the domain `bluepensolutions.com`.
