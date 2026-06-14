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

# FOUC prevention:
When the page loads, the browser briefly renders content before JavaScript applies translations - this is known as a Flash of Untranslated Content (FOUC). To prevent this, an inline <script> is placed as the very first element inside <head>, before any stylesheets or external scripts. Since inline scripts block HTML parsing and execute synchronously, the language is applied to the <html> element before the browser renders a single pixel. The script reads the language from the URL parameter (?lang=pl) or localStorage, sets document.documentElement.lang, and exits - keeping the critical path as short as possible.


## Getting Started

Clone the repository and open `index.html` directly in a browser - no build step or server required.

```bash
git clone https://github.com/Nerso1/cv.git
cd cv
# open index.html in your browser
```

## Code Snippets
