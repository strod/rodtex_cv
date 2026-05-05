# rodtex_cv — Personal Portfolio Site Context

**Purpose:** Static personal portfolio/CV website for Rodrigo Teixeira, hosted on GitHub Pages at **rodtex.dev**. No build system, no bundler, no package manager — pure HTML/CSS/JS. Also serves as the working directory for Upwork job application materials under `thoughts/job-descriptions/`.
**Last Updated:** 2026-05-04 (CipherSalt scope negotiation: backtesting + iterative testing guardrails locked in)

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

## Recent Changes (2026-05-04)

- **Upwork application workflow established** in `thoughts/job-descriptions/`. Each job folder follows a standard pattern:
  - `Job-Description.txt` (or `job-description.txt`) — raw paste of the Upwork RFQ
  - `milestones.md` — proposed payment-aligned milestones (e.g. 30/40/30 split)
  - `cover-letter.md` — tailored pitch with direct answers to the RFQ's technical confirmations
  - `portfolio-sample.html` (or named after the role) — single-file dark-themed HTML one-pager with `@media print` that flips to a printable light theme
  - `*.pdf` — Chrome-headless export of the HTML, used as the Upwork attachment
- **CipherSalt POC application** (`upwork-job-2050078365074842831_ciphersalt/`) — RFQ for a Salt Score POC (AMC + CSV → Python scoring engine → Next.js/RSC/Vercel AI SDK dashboard with Optimization Dial). Materials include `milestones.md`, `cover-letter.md`, and `rt-portfolio-and-plan.html` (+ PDF) covering RFQ Fit Map, 5 case studies, Section 6 confirmations, milestone plan, and stack matrix. Also includes the signed NDA: `CipherSalt_IP_NDA_filled.html` + `.pdf` (filled from the original `CipherSalt_IP_NDA_Professional (1).pdf`).
- **CipherSalt scope negotiation (in flight, 2026-05-04):** Founder Jeff Baccetti proposed a Phase 1 scope (AMC extraction, three-tier data model, Python Salt Score, modular/testable engine, scorecards CSV/JSON + API-ready). Mapped against M1 — gaps were unit tests (was M3) and JSON/FastAPI surface (was M2). Rodrigo proposed pulling those into M1 at the same price ($2,250 / 2 weeks), keeping 30/40/30 split. Subsequent thread established two key contractual guardrails: (1) **backtesting** acceptance must be tied to *methodology rigor* not *outcome* (algorithm IP risk stays with founder); (2) **iterative implementation testing** (tick-and-tie reviews on 3–5 supplier sample, 2–3 review cycles in week 1, founder sign-off before scaling) sits *before* backtesting in the sequence, so backtest measures the algorithm not a bug. Founder agreed to both framings. Founder review-availability flagged as the main delivery dependency.
- **Quant requirements brief** (`data_scientist_quant_requirements_&_capabilities_needed.md`) — internal notes on the data-scientist/quant capabilities the role demands.
- **Two earlier Upwork applications** also live in `thoughts/job-descriptions/`: CallRail+PI Law Firm pipeline (`022041296316618992385`) and a third RFQ (`022044023046738693790`).

## Signature & NDA Filling Convention

- **Signature image:** `doc/assets/assinatura-rod_without_bg.PNG` (transparent-background PNG of Rodrigo's handwritten signature). Embed as base64 data URI in HTML — do not link the file.
- **Filling NDAs / contracts:** Recreate the original PDF layout in HTML (preserving headings, spacing, signature blocks), fill blanks with bold/underlined values, embed the signature image on the contractor signature line, then export with the standard Chrome-headless flags. Keep both `*_filled.html` (source) and `*_filled.pdf` (final) alongside the original.
- **Standard contractor identity:** Rodrigo Teixeira, São Paulo, Brazil (full legal/contact details in `doc/context/PROFESSIONAL_PROFILE_CONTEXT.md`).

## PDF Generation Convention

For HTML → PDF in this repo, use Chrome headless with these flags:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="output.pdf" "input.html"
```
HTML files should include a `@media print` block that overrides CSS variables to a light palette and adds `print-color-adjust: exact` so background tints survive the export.

## Previous Changes (2026-02-20)

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
