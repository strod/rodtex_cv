# rodtex_cv — Personal Portfolio Site Context

**Purpose:** Static personal portfolio/CV website for Rodrigo Teixeira, hosted on GitHub Pages at **rodtex.dev**. No build system, no bundler, no package manager — pure HTML/CSS/JS.
**Last Updated:** 2026-02-20

## Current Design

The site uses the **Midnight Dashboard** design (formerly `vote/c.html`), deployed as the main `index.html`. Key features:
- Dark theme with teal/violet/amber/rose/green accent colors
- Fixed sidebar with profile, live clock, availability status, quick stats, and navigation
- Mobile-responsive with hamburger menu overlay
- Glass-card sections: Hero, About, Skills (6 cards), Experience timeline, Education, Portfolio
- Scroll-reveal animations via IntersectionObserver
- Animated skill bars triggered on scroll
- Active nav link tracking on scroll
- Availability calculator (Mon-Fri 8-19 SP time)

## Directory Structure

- `index.html` — Main site (Midnight Dashboard design, self-contained with inline CSS/JS)
- `index_original.html` — Previous site backup
- `portfolio/*/index.html` — Individual portfolio project pages (TikTok API, DV360 API, Google App Scripts, Online Courses)
- `portfolio/*/callback/`, `privacy_policy/`, `terms_of_service/` — OAuth app compliance pages
- `vote/` — Design voting system (a.html, b.html, c.html, d.html, index.html)
- `thoughts/mockups/` — Design mockups archive (mockup1-8 HTML files, reorganized from flat structure)
- `thoughts/job-descriptions/` — Job description analyses (e.g., Johnson & Johnson DS role with analysis.md)
- `doc/context/rodrigo_context.md` — Comprehensive personal/professional context reference (tracked via git add -f, doc/ is gitignored)
- `doc/context/PROFESSIONAL_PROFILE_CONTEXT.md` — Canonical professional profile from LinkedIn, CV/TEX, repos (tracked via git add -f)
- `doc/conversations.json` — ChatGPT history dump (54MB, gitignored)
- `css/` — Bootstrap 5, AOS, Font Awesome 5, main.css (used by old design and sub-pages)
- `scripts/` — JS files for old design (scroller.js, ageCalculator.js, navigate.js, etc.)
- `images/` — Profile pics, portfolio images, favicon (`rt_icon.ico`)

## Key Files

- `CLAUDE.md` — Project instructions for Claude Code (paths, SSH config, architecture)
- `CNAME` — Custom domain: `rodtex.dev`
- `_config.yml` — Jekyll config with `baseurl: /rodtex_cv`
- `.nojekyll` — Disables Jekyll processing on GitHub Pages
- `.gitignore` — Ignores `doc/` directory (contains large/sensitive files)

## Git & Deployment

- **GitHub account:** `strod` (not `rodstex`)
- **SSH alias:** `github.com-strod` (key: `~/.ssh/id_ed25519_personal`)
- **Remote URL:** `git@github.com-strod:strod/rodtex_cv.git`
- **Branch:** `main` — pushes auto-deploy via GitHub Pages
- No CI/CD, no build step, no tests

## Social Links

- GitHub: github.com/strod
- LinkedIn: linkedin.com/in/strodrigo
- Instagram: instagram.com/tex.rod (updated from rodtex on 2026-02-10)
- Email: rodrigo@rodtex.dev

## Recent Changes (2026-02-20)

- Created new AI/ATS-optimized CV PDF (`rodrigoteixeira_cv.pdf`) replacing the old version — clean semantic HTML, proper heading hierarchy, quantified achievements, keyword-rich for AI screening
- Added "Download CV" button to hero section in `index.html` (between "Get in Touch" and "View Projects")
- Created tailored CV for Head of BI role (HTML source files removed from repo after PDF generation — kept locally only)
- Filterbuy start date corrected to January 2024

## Previous Changes (2026-02-19)

- Added clickable portfolio cards with modal overlay for project details
- Updated portfolio highlights section with data and measurement projects
- Reorganized `thoughts/` directory: mockup HTML files moved into `thoughts/mockups/` subdirectory
- New `thoughts/job-descriptions/` directory for job description analyses (Johnson & Johnson DS role)

## Previous Changes (2026-02-11)

- Removed `hire_me/` page (freelance contact page with Foucault pendulum animation, no longer used)
- Added Data Engineering and Marketing Science skill cards (with green CSS variant)
- Enriched `doc/context/rodrigo_context.md` with details extracted from 1659 ChatGPT conversations
- Deployed Midnight Dashboard design as main `index.html`
- Fixed Instagram link to `tex.rod` across all files
