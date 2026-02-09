# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio/CV website for Rodrigo Teixeira, hosted on GitHub Pages at **rodtex.dev**. No build system, no bundler, no package manager — pure HTML/CSS/JS served directly.

## Git & SSH Authentication

This repo is owned by the **strod** GitHub account. The default SSH config (`~/.ssh/config`) maps `github.com` to the `rodstex` key, which does **not** have access.

Always push using the `github.com-strod` host alias:

```bash
# The remote must use the strod host alias
git remote set-url origin git@github.com-strod:strod/rodtex_cv.git

# SSH key: ~/.ssh/id_ed25519_personal  →  GitHub account: strod
# Requires Host entry in ~/.ssh/config:
#   Host github.com-strod
#     HostName github.com
#     User git
#     IdentityFile ~/.ssh/id_ed25519_personal
#     IdentitiesOnly yes
```

If a push fails with "Permission denied to rodstex", the remote URL is wrong — fix it with the `set-url` command above.

## Development

```bash
# Local server (no build step needed)
python -m http.server 8000
# Then visit http://localhost:8000
```

There are no tests, linters, or CI pipelines. Changes are deployed by pushing to `main` on GitHub (GitHub Pages serves from the `main` branch).

## Architecture

**Static site with no build step.** All pages are standalone HTML files that load their own CSS/JS via relative paths.

### Pages
- `index.html` — Main CV page (About, Skills, Work Experience, Education, Portfolio, Contact)
- `hire_me/index.html` — Freelance contact page with Foucault pendulum animation
- `portfolio/*/index.html` — Individual portfolio project pages (TikTok API, DV360 API, Google App Scripts, Online Courses)
- Portfolio apps under `portfolio/*/` also have `callback/`, `privacy_policy/`, and `terms_of_service/` sub-pages for OAuth app compliance

### Key JS files (`scripts/`)
- `main.js` — AOS (Animate On Scroll) initialization
- `scroller.js` — Custom scroll-based card navigation for Work Experience, Education, and Portfolio timeline sections
- `ageCalculator.js` — Dynamically calculates and displays age from hardcoded birthdate
- `navigate.js` — Navigation helper functions for portfolio/hire_me pages
- `foucault13-2.js` — Foucault pendulum canvas animation on the hire_me page
- `markdownRender_PP.js` / `markdownRender_TS.js` — Render markdown content for privacy policy and terms of service pages using `marked.js`

### CSS
- `css/main.css` — All custom styles: timeline components, scrollable section containers (hidden scrollbars), avatar, portfolio layout, print styles, button components
- `css/bootstrap.min.css` — Bootstrap 5
- `css/aos.css` — AOS animation library styles
- `css/font-awesome/` — Font Awesome 5 icons

### Important patterns
- **Relative paths required:** Sub-pages use `../` relative paths for CSS/JS/images. The `index.html` root page uses paths without leading `/` (e.g., `css/main.css`, not `/css/main.css`). Portfolio section links in `index.html` still use absolute paths (`/portfolio/...`, `/images/...`) which work on GitHub Pages with CNAME but not with `python -m http.server` at the repo root.
- **GTM on every page:** Google Tag Manager (GTM-W9TNNNGR) snippet is in both `<head>` and `<body>` of every HTML page.
- **Contact form:** Uses Formspree (`formspree.io/f/xyyqkyoj`) for form submission on the main page.
- **Timeline scroll containers:** Work Experience, Education, and Portfolio sections use fixed-height scrollable divs with hidden scrollbars. The `scroller.js` handles wheel events for card-by-card navigation.
- **`_config.yml`:** Sets Jekyll `baseurl: /rodtex_cv` (used by GitHub Pages when accessed via `github.io` path, not the custom domain).
- **CNAME:** `rodtex.dev` — custom domain for GitHub Pages.
