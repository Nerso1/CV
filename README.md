# Dominik Ciastoń - CV

Personal CV published as a static website hosted on GitHub Pages.
Built with vanilla HTML, CSS, and JavaScript - no frameworks.

## Features

- Language switcher (EN / PL) via `?lang=pl` URL parameter with localStorage persistence
- Dark mode toggle with OS preference detection and localStorage persistence
- Print-optimized layout - always renders in light mode with a desaturated sidebar

## Tech Stack

- HTML5 (semantic markup, ARIA attributes)
- CSS (Custom Properties, Grid, Flexbox)
- JavaScript (vanilla, no dependencies)

## Design Decisions

| Decision | Choice |
|---|---|
| Framework | None - pure HTML/CSS/JS |
| Layout | CSS Grid (page), Flexbox (components) |
| i18n | Single file + `?lang=pl` URL param |
| Dark mode | Toggle + OS preference + localStorage |
| Print | Always light mode, sidebar desaturated |

## Getting Started

Clone the repository and open `index.html` directly in a browser - no build step or server required.

```bash
git clone https://github.com/Nerso1/cv.git
cd cv
# open index.html in your browser
```

## Code Snippets
