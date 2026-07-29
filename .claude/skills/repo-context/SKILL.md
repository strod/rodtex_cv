# rodtex_cv — Personal Portfolio Site Context

**Purpose:** Static personal portfolio/CV website for Rodrigo Teixeira, hosted on GitHub Pages at **rodtex.dev**. No build system, no bundler, no package manager — pure HTML/CSS/JS. Also holds the CV source and the career-positioning research under `thoughts/`.
**Last Updated:** 2026-07-29 (full 123-repo audit → CV and website rebuilt for Data & AI positioning; PR workflow adopted)

---

## Current Design

`index.html` (~120 KB, self-contained inline CSS/JS) runs the **Midnight Dashboard** design:
- Dark theme with teal/violet/amber/rose/green accents
- Fixed sidebar: profile, live clock, availability status, quick stats, nav
- Mobile hamburger overlay; glass-card sections
- Scroll-reveal via IntersectionObserver; skill bars animate on scroll
- Availability calculator (Mon–Fri 8–19 SP time)
- **Portfolio: 15 clickable cards** with a modal overlay driven by a `PORTFOLIO_DATA` object

**Positioning as of 2026-07-29:** "Data & AI Leader", not "Marketing Science & Ad-Tech Developer". Marketing analytics is one proven domain, not the headline.

---

## Directory Structure

- `index.html` — the live site (Midnight Dashboard, self-contained)
- `index_original.html` — previous design backup
- `rodrigoteixeira_cv.html` — **CV source** (regenerate the PDF from this; see CV Pipeline)
- `rodrigoteixeira_cv.pdf` — the deliverable, linked from the hero "Download CV" button
- `portfolio/{tiktokapi,dv360api,google_app_scripts,online_courses}/` — project pages plus `callback/`, `privacy_policy/`, `terms_of_service/` sub-pages for OAuth app compliance. **Not linked from `index.html`** (the portfolio section uses modals, not links) — they exist for OAuth verification
- `vote/` — design voting system (a–d.html)
- `thoughts/mockups/` — 8 design mockups archive
- `thoughts/repo-inventory.md` — **1,925-line audit of 123 repositories** (evidence layer)
- `thoughts/professional-summary-2026.md` — **the single source of truth for all CV/site copy**: positioning, skills matrix, portfolio, decisions log, gap assessment
- `doc/context/` — `PROFESSIONAL_PROFILE_CONTEXT.md` (canonical profile) and `rodrigo_context.md`. `doc/` is gitignored, so both are tracked via `git add -f`
- `doc/assets/assinatura-rod_without_bg.PNG` — transparent-background signature PNG
- `css/`, `scripts/`, `images/` — Bootstrap 5, AOS, Font Awesome 5, legacy JS, assets

**Removed 2026-07-29:** `thoughts/job-descriptions/` and `thoughts/upwork-jobs/` (24 files of archived Upwork application materials, incl. the signed CipherSalt NDA). Deleted at Rodrigo's instruction — recoverable from history before commit `01779ce`.

---

## Key Files

- `CLAUDE.md` — project instructions (paths, SSH config, architecture)
- `CNAME` — `rodtex.dev`
- `_config.yml` — Jekyll `baseurl: /rodtex_cv`
- `.nojekyll` — disables Jekyll processing
- `.gitignore` — ignores `doc/` and `.claude/`; both contain force-added tracked files (including this file)

---

## Git & Deployment

- **GitHub account:** `strod` (**not** `rodstex`)
- **Remote:** `git@github.com-strod:strod/rodtex_cv.git` (SSH alias, key `~/.ssh/id_ed25519_personal`)
- If a push fails with "Permission denied to rodstex", the remote URL is wrong — fix with `git remote set-url`
- `main` auto-deploys via GitHub Pages. No CI, no build step, no tests
- Deploy status: `gh api repos/strod/rodtex_cv/pages --jq .status`

**PR workflow (adopted 2026-07-29).** Rodrigo prefers branch → push → PR → merge over direct pushes to `main`, even though Pages serves from `main`:
```bash
git checkout -b <branch>          # commit work here, never on main
git push -u origin <branch>
gh pr create --base main --head <branch> --title "..." --body "..."
gh pr merge <N> --merge --delete-branch
git checkout main && git pull && git remote prune origin
```
PRs #1–#3 were merged this way. `gh` is authenticated for both `strod` and `rodstex`; `strod` is active.

⚠️ **Never `git reset --hard` with uncommitted changes present.** Doing so on 2026-07-29 destroyed an uncommitted edit to this very file (the 2026-05-19 DSP section), which had to be reconstructed from session context. `git stash` first.

---

## CV Pipeline

**Source:** `rodrigoteixeira_cv.html` → Chrome headless → `rodrigoteixeira_cv.pdf`. Self-contained HTML with inline CSS; screen styles plus an `@media print` block.

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="rodrigoteixeira_cv.pdf" "rodrigoteixeira_cv.html"
```

**Hard requirement: 2 pages.** The tuning knob is `html { font-size: Npx }` inside `@media print` — currently **10.3px**. Bisect it against the page count rather than guessing:
```bash
pdfinfo rodrigoteixeira_cv.pdf | awk '/^Pages/{print $2}'
```
Content additions usually cost a page. Pay for new content by merging bullets *before* shrinking type.

**Verification suite** (all run 2026-07-29):
```bash
pdftotext rodrigoteixeira_cv.pdf out.txt   # real text layer? ~1,200 words expected
pdfimages -list rodrigoteixeira_cv.pdf     # must be 0 — text, not raster
pdftoppm -png -r 80 rodrigoteixeira_cv.pdf page   # inspect both pages
```
Also confirm: 0 ligature/soft-hyphen glyphs, 0 mid-word line breaks, 4 ALL-CAPS section headings, every job entry parsing as Title → Company/Location → Dates. When grepping extracted text, normalise whitespace first — line wrapping breaks literal substring matches.

**History:** the CV source was deleted in `19ef004` and recovered from `3af0582` on 2026-07-29. It is tracked again — keep it that way.

---

## Website Editing Notes

- **Font Awesome 5, not 6.** `fa-diagram-project`, `fa-shield-halved`, `fa-magnifying-glass-chart` do **not** exist. Use `fa-project-diagram`, `fa-shield-alt`, `fa-search-plus`
- **Portfolio cards and modal data must stay in sync.** Every `data-project="key"` needs a matching key in `PORTFOLIO_DATA`. Verify parity before committing — 15/15 currently
- `PORTFOLIO_DATA` entries support an optional `link` + `linkLabel` pair, rendered as a GitHub link under the description (used by the blingMCP card)
- Verify JS after editing: extract inline `<script>` blocks and run `node --check`
- Headless smoke test: `python3 -m http.server` then Chrome `--headless --virtual-time-budget=6000 --dump-dom`. Evidence JS ran = the live clock is populated in the dumped DOM
- When link-checking, strip `?ver=` query strings **and** HTML comments, or you get false positives

---

## Editorial Policies (decided 2026-07-29 — read before writing any CV or site copy)

1. **CV is employer-only.** Filterbuy → IPG Mediabrands → MINT → WMcCann → Rede Globo → Bridge Consulting. **rt analytica / independent consulting does NOT appear on the CV** — no entry, no bullets, no mention. Those projects live *only* in the website portfolio, reached via the CV footer link.
2. **Name no clients** anywhere — CV or website. Describe by sector ("a UK hospitality group", "a food-service business").
3. **Title, two distinct fields:** the CV *headline* carries target-role keywords ("Director of Data & AI"); the *experience entry* keeps the actual title ("Marketing Analytics Director"). Both on the same page. Never alter the experience entry to match the headline.
4. **Filterbuy starts Jan 2024.** There was no earlier Filterbuy role — the "Sr. Marketing Analytics Developer 2022–2023" line in older profile docs was wrong, and was also the source of an apparent Filterbuy/IPG date overlap. Do not reintroduce it.
5. **Team leadership:** state line management **with numbers** for MINT (6 — 2 data scientists, 3 analysts, 1 data engineer) and IPG (~8 — country hub analytics leads for BR/MX/AR/CL/CO, i.e. second-line). Filterbuy is **cross-functional, zero direct reports**. Never imply current direct reports.
6. **No fabrication for new claims.** The rule filters *new* inclusions; pre-existing CV claims predating the repo estate (LTV uplift, GA4 undercounting, latency/cost reductions, causal impact) were confirmed by Rodrigo and retained.
7. **Filterbuy work is prose-only** — no repo links, no code, no screenshots. All 39 `afb-git` repos contain credentials, AWS account IDs, fitted model coefficients or margin economics.

---

## Corrections the 2026-07-29 Audit Forced

| Old claim | Reality |
|---|---|
| Bid engine used **OR-Tools** | **cvxpy + SciPy** |
| Amazon pipeline used **Kinesis** | **EventBridge + SNS + Lambda + Step Functions** |
| `mediamixmodel` was a portfolio project | Empty scaffold, no modelling code, remote points at a third-party account — removed |
| MMM ran on BigQuery/Vertex AI/Looker | **Athena/Iceberg + ECS Fargate** (Google Meridian) |
| **Segment** was a skill | Zero evidence in 123 repos — removed |
| `filterbuy-cms` / `filterbuy-marketing-app` were portfolio items | 588/669 commits, **none by Rodrigo** — his contribution to that effort lives in `filterbuy-ads-skills` |
| Team leadership absent | **~8 reports at IPG, 6 at MINT**, hiring + mentoring in both |

---

## Social Links

- GitHub: github.com/strod
- LinkedIn: linkedin.com/in/strodrigo
- Instagram: instagram.com/tex.rod (updated from rodtex on 2026-02-10)
- Email: rodrigo@rodtex.dev
- Birthdate used by `scripts/ageCalculator.js`: 1988-01-07

---

## Recent Changes (2026-07-29)

**Full repository audit → CV and website rebuild.** 3 PRs merged plus a deletion commit; 12 commits total.

- **`thoughts/repo-inventory.md`** — audited **123 directories** (84 `myGit/`, 39 `Filterbuy/afb-git/`) via 11 parallel scan agents. Per entry: purpose, stack, category, client, last commit, commit count, status, portfolio verdict, metrics. All counts literal or literally counted with the method stated inline. ~94 are git repos with history.
- **`thoughts/professional-summary-2026.md`** — the synthesis and the source of truth for all copy: positioning, corrected company-wide Filterbuy scope, evidence-ranked skills matrix, six body-of-work themes, curated 15-project portfolio, verified timeline, decisions log, Turno-style gap assessment (§9).
- **CV rewritten** — source recovered from `3af0582`, regenerated through the existing pipeline. 4 pages → **2 pages**. Employer-only. Tuned for LLM/semantic screening: target title in the headline, "9+ years" stated, leadership vocabulary (roadmap, stakeholders, prioritisation), people leadership with numbers, `(Remote)` in the location field.
- **Website content refresh** — no redesign, no new dependencies. Sidebar title → "Data & AI Leader"; stats → 9+ years / 4 degrees / **120+ repos**; hero and about rewritten; skills cards re-ranked (Data Engineering and AI & LLM Engineering first, Marketing Science last); timeline corrected (Filterbuy = Marketing Analytics Director from Jan 2024; rt analytica added; MINT 2020–2021); education years fixed (were 2016/2016); **portfolio 8 → 15 cards** with 15 matching modal entries.
- **Bug fixed** — 6 `portfolio/` pages loaded `/scripts/markdownRender.js`, which does not exist (only `_PP` and `_TS` variants do): a 404 on every page load, pre-existing. Commented out to match the `terms_of_service` convention. All 11 HTML pages now resolve every local reference.
- **Profile doc rebuilt** and synced to the tracked `doc/context/` copy, because `Upwork-Assistant/` is **not a git repo** and has no version history of its own.
- **Gap assessment:** 5 strongly evidenced (NL/LLM warehouse interfaces, GCP, BigQuery, marketplace/SaaS, data governance), 6 thin (executive partnership, financial reconciliation, production ML platforms, A/B testing, **dbt**, **Looker/LookML**), 1 absent (Segment), 1 revised to strong (team leadership). dbt and LookML remain on the CV but are invisible across 123 repos — flagged as interview risk.

**⚠️ Outstanding security items** — not in this repo, but in repos under the `strod` account:
- Hardcoded **OpenAI API key** in `gpt_sentiment_analysis/sentiment_analysis.py:5`
- Hardcoded **client secret** in `TIKTOK_API_CLIENT/testing.py`
- SSH private key in `ai_media-planner/`; GCP service-account JSONs in `hoshinsul-switching-app/`, `inbox-bridge/`, `ga4-analysis/`, `filterbuy-gdf-catalog/`; `.env` files in ~15 repos
- Full inventory in `thoughts/professional-summary-2026.md` §7

---

## Previous Changes (2026-05-19)

*(Reconstructed 2026-07-29 — this section was lost to a `git reset --hard` on an uncommitted edit.)*

- **White-Label DSP application** (`upwork-job-2050078365074842831_dsp/`, since deleted) — RFQ for an AdTech white-label layer over an existing OpenRTB DSP (Java Spring bidder + Aerospike + Kafka + ClickHouse + S3/Athena + MySQL + React/AntD admin). The client shared an architecture diagram and 7 White Label Settings UI screenshots from a product called **PPCmate** (tabs: Branding, Domain & URLs, Email & Notifications, User Experience, Security, Monetization, Tracking & Scripts). The diagram surfaced a **Data Sync** component between MySQL and the bidder runtime needing `tenant_id` threading.
- **Honest framing convention** — where Rodrigo has ecosystem/adjacent experience but not the specific production stack (there: Java Spring bidder code), declare the gap upfront, frame Claude Code + client conventions as the ramp-up mechanism, and commit to self-funding the learning curve and surfacing pace issues immediately rather than at milestone review. No "bring a backend partner in" hedging.
- **Scope-vs-budget candor convention** — when a fixed budget is clearly tight for the visible scope, state explicitly which deliverables land at production quality vs scaffolded (schema + admin-only stub UI + read endpoints), with a follow-on scope document delivered at handover. DSP example: USD 10,000 buys 5-of-7 tabs in production + 2 scaffolded; the founder re-prioritizes in a P1 workshop.
- **Upwork "no outside contact" rule** — when the RFQ states the client only hires through Upwork, portfolio/proposal PDFs must **not** include email or phone in the CTA footer. Use "Available via Upwork" + timezone instead. Header URLs (rodtex.dev, github, linkedin) are kept — they are identifying portfolio links, not communication channels. The cover letter (sent inside Upwork's proposal box) can retain name + rodtex.dev / github sign-off.

## Previous Changes (2026-05-04)

- **Upwork application workflow** established in `thoughts/job-descriptions/` (since deleted). Standard per-job folder: `Job-Description.txt`, `milestones.md`, `cover-letter.md`, a single-file dark-themed `portfolio-sample.html` with an `@media print` block that flips to a printable light theme, and a Chrome-headless PDF export used as the Upwork attachment.
- **CipherSalt POC application** — RFQ for a Salt Score POC (AMC + CSV → Python scoring engine → Next.js/RSC/Vercel AI SDK dashboard with an Optimization Dial). Materials covered an RFQ Fit Map, 5 case studies, Section 6 confirmations, a milestone plan and a stack matrix. Included the signed NDA.
- **CipherSalt scope negotiation** — founder proposed a Phase 1 scope (AMC extraction, three-tier data model, Python Salt Score, modular/testable engine, scorecards CSV/JSON + API-ready). Gaps against M1 were unit tests (was M3) and the JSON/FastAPI surface (was M2); Rodrigo pulled both into M1 at the same price ($2,250 / 2 weeks), keeping the 30/40/30 split. Two contractual guardrails were established and agreed: (1) **backtesting** acceptance tied to *methodology rigor*, not *outcome* (algorithm IP risk stays with the founder); (2) **iterative implementation testing** (tick-and-tie on a 3–5 supplier sample, 2–3 review cycles in week 1, founder sign-off before scaling) sequenced *before* backtesting, so the backtest measures the algorithm and not a bug. Founder review-availability was the main delivery dependency.

## Signature & NDA Filling Convention

- **Signature image:** `doc/assets/assinatura-rod_without_bg.PNG`. Embed as a base64 data URI — do not link the file.
- **Filling NDAs/contracts:** recreate the original PDF layout in HTML (headings, spacing, signature blocks), fill blanks with bold/underlined values, embed the signature on the contractor signature line, then export with the standard Chrome-headless flags. Keep both `*_filled.html` and `*_filled.pdf` alongside the original.
- **Standard contractor identity:** Rodrigo Teixeira, São Paulo, Brazil (full legal/contact details in `doc/context/PROFESSIONAL_PROFILE_CONTEXT.md`).

## PDF Generation Convention

Same Chrome-headless invocation as the CV pipeline above. HTML should include an `@media print` block overriding CSS variables to a light palette with `print-color-adjust: exact`, so background tints survive the export.

## Previous Changes (2026-02-11 → 2026-02-20)

- New AI/ATS-optimized CV PDF replacing the old version; "Download CV" button added to the hero section
- Clickable portfolio cards with modal overlay introduced
- `thoughts/` reorganized into subdirectories
- Removed `hire_me/` page (freelance contact page with Foucault pendulum animation)
- Added Data Engineering and Marketing Science skill cards
- Midnight Dashboard deployed as the main `index.html`; Instagram link fixed to `tex.rod`
- Filterbuy start date corrected to January 2024
