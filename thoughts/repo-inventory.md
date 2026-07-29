# Repository Inventory — Full Audit

**Generated:** 2026-07-29
**Scope:** 123 repositories/directories across two roots
**Purpose:** Raw evidence layer for the 2026 CV and website rebuild. Every claim in
`professional-summary-2026.md` must trace back to an entry here.

## Method

- `~/Documents/RODRIGO_MAC/Rodrigo/myGit/` — 84 entries (personal + freelance/client)
- `~/Documents/RODRIGO_MAC/Rodrigo/Filterbuy/afb-git/` — 39 entries (employer)
- Excluded: `.DS_Store`, `id_rsa*`, `*.zip`, `*-corrupted*`, trailing-` 2` duplicates
- Each entry: README + dependency/config manifests read; source skimmed where no README;
  `git log -1` and `git rev-list --count HEAD` for dates and commit counts.
- **No estimated numbers.** Counts are either literally stated in the repo or were produced by
  counting files/entries, in which case the counting method is stated inline.
- Entries that are not git repositories are marked as such; directory mtime is used instead and
  labelled, never presented as a commit date.

## Scan coverage

| Batch | Root | Entries |
|---|---|---|
| B1–B7 | `myGit/` | 84 |
| F1–F4 | `afb-git/` | 39 |
| **Total** | | **123** |

---

# Part 1 — Personal & Client Repositories (`myGit/`)


<!-- ===== batch B1 ===== -->

# Repo Inventory — Batch B1

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/myGit/`
Audit date: 2026-07-29. "Active" = last commit within 6 months of 2026-07-29 (i.e. on/after 2026-01-29).

---

### Adagio-Smart-GMC-Feeds
- **Purpose:** Google Cloud Function that builds personalized Google Merchant Center product feeds for Adagio Teas — runs a BigQuery seed query, gets per-visitor recommendations from the Vertex AI Retail API, then uploads the resulting feed to Merchant Center.
- **Stack:** Python 3.11, Google Cloud Functions (functions-framework), BigQuery, Google Cloud Storage, Google Shopping Merchant API client libraries (accounts, datasources, products, reports, promotions, inventories, etc.), Vertex AI Search for Retail API, google-auth / OAuth, pytest + pytest-mock, Flask (local mode), `gcloud functions deploy` via `deploy.sh` / `main.yaml`
- **Category:** MarTech & Advertising
- **Client:** Adagio
- **Last commit:** 2025-11-07 | **Commits:** 17 | **Status:** complete
- **Portfolio:** yes — end-to-end MarTech pipeline (BigQuery → recommendation API → Merchant Center feed) with a clear commercial use case; modular src/ layout with mocks and tests.
- **Metrics:** 19 SQL audience queries in `queries/` and 20 matching scheduler request JSON files in `scheduler-input-requests/` (incl. `example_request.json`); 4-step workflow orchestrator (`_step1_execute_initial_query` … `_step4_upload_to_merchant_center`); deploy config states memory 256MB, timeout 60s, max_instances 10, min_instances 0, runtime python311.

---

### Bling-Chatbot-Agent
- **Purpose:** Multi-tenant LLM chatbot agent platform integrating with the Bling ERP (Brazil) — customer-facing restaurant ordering agent over WhatsApp/web plus internal BI-analyst agents, each tenant with its own credentials, permissions, catalog and guardrails.
- **Stack:** TypeScript / Node.js >= 20 (ESM), Express, React 18 + React Router v6 + Tailwind CSS + Vite (web frontend), OpenAI SDK via OpenRouter (Claude Haiku 4.5 with prompt caching), Model Context Protocol SDK (`@modelcontextprotocol/sdk`), Zod, Pino, helmet, express-rate-limit, Google Cloud Firestore, Cloud Storage, Cloud Tasks, Cloud Run, Cloud Functions, GCP Secret Manager, Docker, vitest, tsup/tsx, Bling API v3, WhatsApp Business Cloud API, PagBank, Fidelimax; companion Python/FastAPI microservices
- **Category:** AI & LLM
- **Client:** Bling ERP integration; the deployed tenant is Forneria Luce (GCP project `chatbot-forneria-luce`, `clients/forneria-luce/`)
- **Last commit:** 2026-07-28 | **Commits:** 345 | **Status:** active
- **Portfolio:** yes — by far the deepest project in this batch: production multi-tenant agentic system with tool/skill layer, prompt-injection hardening, payments, WhatsApp channel, extensive test suite and real business outcome (order taking).
- **Metrics:** README documents 10 HTTP API endpoints (`POST /api/chat`, `GET /api/chat/conversations`, `GET /api/chat/conversations/:id`, `GET/PUT/DELETE /api/clients[/:id]`, `GET|POST /api/whatsapp/:clientId`, `GET /health`); 3 client types (Restaurant, BI Analyst, Custom); 3 companion services (`bling-phone-lookup`, `fidelimax-points-lookup`, `bling-token-rotation`); README states `bling-phone-lookup` "Indexes ~37k Bling contacts by phone"; 1 configured tenant directory (`clients/forneria-luce/`) plus 2 starter templates.

---

### DV360_API_CLIENT
- **Purpose:** Minimal Python client/spike for authenticating against the Google Display & Video 360 API (OAuth installed-app flow) and pulling advertiser/creative data.
- **Stack:** Python 3.10 (Pipfile), `google-auth-oauthlib` (InstalledAppFlow), `googleapiclient.discovery`; scopes for display-video, dfatrafficking, doubleclickbidmanager; SDF version 5.3
- **Category:** MarTech & Advertising
- **Client:** unknown (hardcoded advertiser ID `586578177`; personal OAuth client `client_secret_rt.json`)
- **Last commit:** 2023-08-01 | **Commits:** 2 | **Status:** abandoned (>2yr old, single-script spike)
- **Portfolio:** no — 2-commit script with no README beyond one line; already covered by the existing rodtex.dev DV360 portfolio page.
- **Metrics:** none stated

---

### GADS_API_CLIENT
- **Purpose:** Google Ads API Python client spike — generates OAuth user credentials from a client secrets file for Google Ads API access.
- **Stack:** Python 3.10 (Pipfile), Google Ads API, `generate_user_credentials.py`, `google-ads.yml` config
- **Category:** MarTech & Advertising
- **Client:** unknown (personal OAuth client `client_secret_rt.json`)
- **Last commit:** 2023-08-01 | **Commits:** 3 | **Status:** abandoned (>2yr old, credential-bootstrap stub)
- **Portfolio:** no — a single auth-bootstrap script, no product or outcome.
- **Metrics:** none stated

---

### NonLinear_Programming
- **Purpose:** Academic non-linear optimization study — solves the "Hanging Chain" constrained minimization problem (static equilibrium of a rigid-bar chain above a piecewise-linear convex floor) from Bonnans et al., *Numerical Optimization*.
- **Stack:** Python (Pipfile), Jupyter notebook (`Hanging_Chain.ipynb`), custom modules `pnl.py` / `hanging_chain.py`; `requirements.txt` is empty so exact libraries are unknown
- **Category:** Experiment / Learning
- **Client:** personal (academic)
- **Last commit:** 2023-08-07 | **Commits:** 18 | **Status:** abandoned (>2yr old)
- **Portfolio:** no — academic exercise; shows math depth but no business outcome and not shareable as a product.
- **Metrics:** none stated

---

### TIKTOK_API_CLIENT
- **Purpose:** Simple TikTok API handler to retrieve TikTok data into Google Sheets (OAuth authorize + access-token exchange).
- **Stack:** Python 3.10 (Pipfile), `pytiktok` (KitApi), helper modules `utils/auth.py` and `utils/request.py`; redirect URI `https://databridgehub.app/callback`
- **Category:** MarTech & Advertising
- **Client:** unknown (redirect domain `databridgehub.app`)
- **Last commit:** 2023-07-19 | **Commits:** 5 | **Status:** abandoned (>2yr old)
- **Portfolio:** no — thin wrapper, ~800B main script; the existing rodtex.dev TikTok API portfolio page already covers this. NOTE: `testing.py` has a hardcoded `CLIENT_SECRET` committed to the repo — should be rotated/scrubbed before this repo is shown or made public.
- **Metrics:** none stated

---

### TrimTrek
- **Purpose:** iOS weight-loss tracking app — logs weight, body measurements and calorie intake, computes BMI / daily calorie deficit / weekly trends, and shows dashboard, charts, goal assessment and reminders.
- **Stack:** Swift, SwiftUI (iOS 14+ deployment target), Xcode project generated by XcodeGen (`project.yml`, `trimtrek_generate.sh`), XCTest unit-test bundle; README names Core Data or Realm for local storage and Google/Apple/Facebook sign-in (services present as small stub files)
- **Category:** Web / App
- **Client:** personal
- **Last commit:** 2025-04-03 | **Commits:** 6 | **Status:** experimental (scaffolded — all Swift source files are 250B–4.4K stubs; no evidence of a shipped build)
- **Portfolio:** no — well-documented product concept but the implementation is skeletal; would need real screenshots/App Store presence to be credible.
- **Metrics:** README states suggested pricing ~$7.99/month and ~$59.99/year with a 21-day free trial; 4 model files, 5 view files, 4 service files, 2 view-model files
- **Note:** `LICENSE` is a 0-byte empty file.

---

### Upwork-Assistant
- **Purpose:** Personal working folder of Upwork/job application assets — job descriptions, gap analyses, tailored CVs, cover letters, portfolio samples and a consolidated professional-profile context document used to generate applications.
- **Stack:** Not software — markdown, HTML, PDF, DOCX artifacts plus one Python CV generator (`generate_cv.py`, 13.7K) in the Ladder job folder; a standalone `monetization-opportunities.html`
- **Category:** Automation & Tooling
- **Client:** personal
- **Last commit:** not a git repo | **Commits:** not a git repo | **Status:** active (mirrors the job-application work also present in `rodtex_cv/thoughts/job-descriptions/`)
- **Portfolio:** no — private job-search material; contains personal contact details and client-specific application content. Not shareable.
- **Metrics:** 12 job/application folders under `docs/job-descriptions/` and `docs/upwork-jobs/`; 1 consolidated profile document (`PROFESSIONAL_PROFILE_CONTEXT.md`, 11.4K) plus `rodrigo_context.md` (11.5K)

---

### adagio-visitor-ids-updater
- **Purpose:** Daily Google Cloud Function that queries BigQuery for user-ID→visitor-ID pairs and syncs them into the `adagio-teas-visitor-ids` Firestore database, so downstream personalization can resolve a logged-in user to their tracking visitor ID.
- **Stack:** Python, Google Cloud Functions, Cloud Scheduler (`scheduler.yaml`), Cloud Build (`cloudbuild.yaml`), BigQuery (`google-cloud-bigquery==3.11.4`), Firestore (`google-cloud-firestore==2.11.1`), `google-cloud-functions==1.12.0`, `deploy.sh`
- **Category:** Data Engineering / ETL
- **Client:** Adagio
- **Last commit:** 2025-10-27 | **Commits:** 7 | **Status:** complete
- **Portfolio:** no on its own — small, single-purpose sync job; better presented as one component of the wider Adagio personalization stack than as a standalone piece.
- **Metrics:** README states it runs daily; targets 1 Firestore database (`adagio-teas-visitor-ids`); includes a rate-limited initial upload script (`initial_upload_rate_limited.py`) — no record counts stated.

---

### adagio-visitorId-fastapi
- **Purpose:** Serverless lookup API that returns a visitor ID for a given user ID from the `adagio-teas-visitor-ids` Firestore database, with API-key + checksum authentication — the read side of the visitor-ID sync above.
- **Stack:** Python, FastAPI (per README) with Flask 3.0.0 + functions-framework 3.9.1 in `requirements.txt`, Firestore (`google-cloud-firestore==2.13.1`), Google Cloud Functions (us-central1, project `adagio-teas-visitor-ids`), `deploy.sh` / `deploy.yaml`
- **Category:** Web / App
- **Client:** Adagio
- **Last commit:** 2025-10-28 | **Commits:** 16 | **Status:** complete
- **Portfolio:** no on its own — small microservice; pair it with `adagio-visitor-ids-updater` as one "identity resolution service" story rather than showing it alone.
- **Metrics:** README documents the health endpoints `GET /` and `GET /health` plus a visitor-ID lookup endpoint; documented base URL `https://us-central1-adagio-teas-visitor-ids.cloudfunctions.net/adagio-visitor-id-lookup`; client examples given for `requests`, `httpx`/asyncio and JavaScript.

---

### adagio_chatbot
- **Purpose:** AI shopping-assistant chatbot for the Adagio Teas e-commerce site — personalizes replies from BigQuery customer history, does semantic product search over the catalog, streams responses to an embeddable widget, and attributes conversations to sales.
- **Stack:** Python 3.11+, FastAPI, SSE streaming, Google Cloud Run, BigQuery, Vertex AI vector search, Redis cache, Docker + docker-compose, Terraform (`deploy/terraform/`), multi-provider LLMs (OpenAI GPT, Anthropic Claude, Google Gemini), vanilla-JS chat widget, pytest / pytest-asyncio / pytest-cov, black, ruff, mypy
- **Category:** AI & LLM
- **Client:** Adagio
- **Last commit:** 2026-01-27 | **Commits:** 3 | **Status:** experimental (only 3 commits despite a full architecture; unknown whether it was deployed)
- **Portfolio:** yes, with caveat — strong architecture story (RAG + BigQuery personalization + attribution) and a real e-commerce client, but the 3-commit history suggests it may not be production-proven; verify deployment status before claiming outcomes.
- **Metrics:** README documents 5 API endpoints (`POST /api/v1/session/init`, `POST /api/v1/chat`, `POST /api/v1/chat/feedback`, `GET /api/v1/products/search`, `GET /api/v1/health`); 3 supported LLM providers; 3 configurable conversation tones (friendly, expert, concise); 8 `src/` modules.

---

### adagio_teas_recommendations_vertex_ai
- **Purpose:** Maintenance, insight, reporting and diagnostics tooling for Adagio Teas' product recommendation engine running on Google Cloud Vertex AI Search for Retail — catalog sync, attribute enrichment, user-event auditing and prediction testing.
- **Stack:** Python, Google Cloud Retail API (`google-cloud-retail==1.22.0`), BigQuery (`google-cloud-bigquery==3.27.0`), Vertex AI (`google-cloud-aiplatform==1.74.0`), google-auth/OAuth + service account, pandas 2.2.3, db-dtypes, python-dotenv, tabulate; Jupyter notebooks; GCP project `retail-api-397423`
- **Category:** AI & LLM
- **Client:** Adagio
- **Last commit:** 2026-02-09 | **Commits:** 6 | **Status:** active
- **Portfolio:** yes — a real recommendation engine on Vertex AI Search for Retail with catalog engineering, attribute enrichment and reporting; pairs naturally with Adagio-Smart-GMC-Feeds (which consumes its predictions) into one "personalization stack" case study.
- **Metrics:** 2 deployed serving configs (`adagio-rfy` recommendations, `adagio-teas-search` search); 1 catalog (`default_catalog` / `default_branch`) ingested from BigQuery; 6 `src/` modules (auth, bigquery, catalog, events, recommendations, reporting); 17 operational scripts in `scripts/`. No catalog-size, event-volume or lift figures stated.


<!-- ===== batch B2 ===== -->

# Repo Inventory — Batch B2

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/myGit/`
Audit date: 2026-07-29. "Last commit" is `git log -1` where a `.git` exists; where it does not, the
directory mtime is given explicitly as such (mtime is filesystem metadata, not a commit).

---

### ads-mcp
- **Purpose:** FastAPI REST server that wraps the Google Ads API, exposing `/query_gaql` and `/query_preset` endpoints so downstream tools can run GAQL queries with automatic pagination and flattened rows.
- **Stack:** Python 3.12, FastAPI, Uvicorn, Pydantic v2 / pydantic-settings, `google-ads` SDK (>=24), google-auth + service-account impersonation, structlog (JSON logs), PyYAML, Docker, Google Cloud Run (`infra/run_deploy.sh`, `infra/workflow.invoke.sample.yaml`).
- **Category:** MarTech & Advertising
- **Client:** unknown (README describes it as a fork of the official `google-marketing-solutions/google_ads_mcp` "with enhancements for production deployment"; no client named)
- **Last commit:** not a git repo (directory mtime 2025-11-12) | **Commits:** not a git repo | **Status:** complete
- **Portfolio:** yes — a deployable production API layer over Google Ads with dual auth modes (OAuth + SA impersonation), pagination, presets and Cloud Run deploy scripts; concrete and shareable, though it is a fork so the original contribution is the productionization layer.
- **Metrics:** 8 named GAQL presets in `app/gaql_presets.py` (campaigns_overview, campaigns_performance, ad_groups_overview, keywords_performance, search_terms, ad_performance, budgets_overview, audience_performance). No other numbers stated.

---

### afb-fast-forecast
- **Purpose:** AWS Lambda (container image) that runs a SQL query against Redshift for a daily time series, fits a Prophet forecast, and uploads the resulting CSV (point forecast + confidence bounds) to S3.
- **Stack:** Python 3.12, AWS Lambda container image, Prophet + cmdstanpy, pandas, numpy, `psycopg` v3 (Redshift over the Postgres protocol), boto3, Amazon S3, Amazon ECR, Docker buildx (`linux/amd64`), Makefile-driven build/publish.
- **Category:** Data Engineering / ETL
- **Client:** Filterbuy (repo prefix `afb`; Makefile pins `AWS_ACCOUNT_ID ?= 937346932434` and `REPO_NAME ?= mkt/fast-forecast`; sample data file `src/afb_autodelivery_forecast_db.csv`)
- **Last commit:** 2025-10-30 | **Commits:** 5 | **Status:** complete
- **Portfolio:** yes — a compact, self-contained ML-in-production artifact (Redshift → Prophet → S3 on Lambda) with a clear input/output contract; easy to explain, though small in scope.
- **Metrics:** defaults stated in README — `forecast_horizon_days` default 30, `alpha` default 0.05 (95% confidence interval), Redshift port default 5439. No performance/accuracy/business metrics stated.

---

### agenteVendasWhatsapp
- **Purpose:** A commercial proposal document ("Proposta Comercial — Agente de Vendas WhatsApp com IA") for an AI WhatsApp sales-agent engagement — not source code.
- **Stack:** HTML (single 43.7K `proposta.html`) plus a rendered PDF. No application code, no manifests.
- **Category:** Experiment / Learning
- **Client:** unknown (proposal document; no client name confirmed from the files inspected)
- **Last commit:** not a git repo (directory mtime 2026-02-23) | **Commits:** not a git repo | **Status:** complete (as a document; not a codebase)
- **Portfolio:** no — it is a sales proposal artifact, not an engineering deliverable; no code to demonstrate.
- **Metrics:** none stated (the HTML contains BRL price figures, but they are proposal pricing rather than delivered-outcome metrics, so nothing is recorded here as a factual project metric).

---

### ai_media-planner
- **Purpose:** Front-end shell for an AI media-planner product — a static `index.html` + `login.html` with CSS, in a nested `ai_media-panner/` folder; the outer folder also holds an SSH keypair (`adop_test_key`).
- **Stack:** HTML, CSS. No package.json, no framework manifest found.
- **Category:** Web / App
- **Client:** unknown (sibling backend `ai_mediaplanner_back` deploys to GCP project `adop-ai-media-planner`, and the key file is named `adop_test_key`, suggesting an "ADOP" context — not confirmed)
- **Last commit:** outer repo has **no commits** ("No commits yet on main"); nested `ai_media-panner/` repo last commit 2025-03-02 | **Commits:** outer 0, nested 1 | **Status:** abandoned (stub — 1 commit, README is a single line)
- **Portfolio:** no — a one-commit static stub with no working functionality; also note an SSH private key (`adop_test_key`) is checked into the folder, which is a hygiene issue to fix rather than showcase.
- **Metrics:** none stated

---

### ai_mediaplanner_back
- **Purpose:** FastAPI backend for an AI media-planning assistant: a guided chat interface that walks a marketing manager through building a digital media plan and returns a structured JSON plan.
- **Stack:** Python 3.11 (deploy runtime), FastAPI 0.109, Uvicorn, Pydantic 2.x, OpenAI Python SDK (>=1.12), Jinja2 + StaticFiles, python-dotenv, Google Cloud Functions (Gen 1/2 HTTP trigger, `us-central1`) deployed via Cloud Build (`cloudbuild.yaml`, function name `adopMediaPlanner`, project `adop-ai-media-planner`), JSON prompt/response templates in `json_templates/`.
- **Category:** AI & LLM
- **Client:** unknown — deploys to GCP project `adop-ai-media-planner` ("ADOP"); no client explicitly named in the README
- **Last commit:** 2025-03-21 | **Commits:** 12 | **Status:** complete (last activity >12 months before audit date; not abandoned by the >2yr rule)
- **Portfolio:** yes — a deployed LLM product with a real use case (structured media-plan generation) and a serverless deployment path; moderate technical depth, small commit history.
- **Metrics:** none stated

---

### amazon-bid-engine-model
- **Purpose:** Investigation-turned-implementation repo that redesigns a Filterbuy-specific Amazon Ads bid engine into an agnostic multi-tenant product — ships three runtime domains (tenant identity/authorization, Amazon OAuth/profile connections, and a placement-anchored optimization domain) plus architecture blueprints for the remaining gaps.
- **Stack:** Python >=3.11, setuptools packaging (`amazon-placement-domain` v1.2.0), `cryptography` >=43, pytest + pytest-cov, hexagonal-style layering (`ports.py` / `service.py` / `store.py` / `repository.py` per domain), Graphify knowledge-graph output (`graphify-out/`), extensive ADR + feature-request documentation. Amazon Ads Reporting API, Marketing Stream and AMC are covered as design targets in `docs/data-pipelines.md`.
- **Category:** MarTech & Advertising
- **Client:** Filterbuy (the stated starting point — "transform the Filterbuy-specific application into an agnostic multi-tenant Amazon Ads application")
- **Last commit:** not a git repo (directory mtime 2026-07-22) | **Commits:** not a git repo | **Status:** active (most recent filesystem activity in the batch, 7 days before audit date)
- **Portfolio:** yes — strongest architecture/domain-design showcase in the batch: multi-tenant isolation boundaries, ADRs, requirement-coverage traceability, a tested optimization engine (7 test modules incl. golden and property tests). Caveat: it is client-derived and heavily documentation-led, so it needs sanitizing before sharing.
- **Metrics:** stated in README/pyproject — three runtime components delivered (FR-001 tenant access, FR-002 Amazon connections, FR-008 placement domain); package version 1.2.0; scope limited to Sponsored Products placement-anchored optimization; four planned product modules (analytics, control, explore, documentation). 7 test files under `tests/`. No business-outcome numbers stated.

---

### analyticsbot-forneria-luce
- **Purpose:** Internal analytics + catalog-admin AI agent for Forneria Luce — answers business questions in natural language against a BigQuery mirror of Bling ERP data (read path) and performs guarded catalog writes against the live Bling API v3 (write path).
- **Stack:** Python >=3.11, FastAPI + Uvicorn on Cloud Run (`us-east1`), `nao-core` context-engineered analytics agent for SQL generation, OpenRouter via the OpenAI SDK, httpx + tenacity (Bling 429 backoff), BigQuery (`google-cloud-bigquery[pandas]`), Secret Manager, Firestore, Cloud Speech, Cloud Storage, structlog, argon2-cffi + itsdangerous SessionMiddleware login wall, PyJWT HS256 SSO, an `ActionGuard` write-safety layer, ruff + mypy + pytest(-asyncio), Docker.
- **Category:** AI & LLM
- **Client:** Forneria Luce
- **Last commit:** 2026-06-22 | **Commits:** 93 | **Status:** active
- **Portfolio:** yes — the most complete AI system in the batch: a text-to-SQL analytics agent plus a mutation path with an explicit safety guard, real auth/SSO, and a large test suite covering write safety, prompt behaviour and outage handling. Genuinely demonstrable, if anonymized.
- **Metrics:** stated in the repo — 13 curated SQL queries in `queries/` (01–13, e.g. daily revenue, top SKUs, receivables aging, LTV top-20); ~30+ test modules under `tests/` including `test_action_guard.py` and `test_agent_write_safety.py`; two disjoint agent paths (read-only analytics, mutating admin). No business KPI numbers stated.

---

### anchora-chat
- **Purpose:** AI spiritual-guidance chatbot grounded in the writings of St. Josemaría Escrivá — a RAG system where every answer is forced to cite a retrieved passage so the model cannot fabricate quotes.
- **Stack:** Python + FastAPI 0.115 / Uvicorn, Pydantic 2.9, OpenAI SDK (used against OpenRouter), Claude used for theme tagging and generation per the README, Firecrawl for crawling sources, FAISS (`IndexFlatIP`) vector store, OpenAI `text-embedding-3-small` embeddings, SQLAlchemy 2 + Alembic + psycopg2 (Postgres prod, SQLite dev), Firebase Admin auth, Stripe billing, `cryptography` for BYO-key encryption, GCS + Secret Manager + Firestore session store, Typer/Rich CLI, Docker + Cloud Build (`cloudbuild.yaml`) + Firebase Hosting (`firebase.json`); frontend is Vite + TypeScript + Tailwind.
- **Category:** AI & LLM
- **Client:** personal (own product — README, `MASTER PROMPT.md`, phased build docs; no external client named)
- **Last commit:** 2026-06-08 | **Commits:** 4 | **Status:** active (recent commits, but only 4 in total)
- **Portfolio:** yes — end-to-end RAG product with a defensible design decision (mandatory citation extraction to prevent fabricated quotes) plus auth, billing and deploy wired in; the low commit count means it reads as early-stage.
- **Metrics:** stated in README — 8 "Caminho" maxims in `data/sample/` used for smoke tests; 3 chat modes (guidance / talk / meditation); chunking strategy is "short = passthrough, long = sliding window". No usage or accuracy numbers stated.

---

### bi-forneria-luce
- **Purpose:** Central documentation, alerting and setup tooling for the Forneria Luce BI pipeline on GCP — the index/runbook for a fleet of Cloud Functions that ingest Bling ERP data into BigQuery, plus the alerting code and migration/reconciliation records.
- **Stack:** GCP — Cloud Functions Gen2 (Python 3.11, `us-central1`), Cloud Scheduler → Pub/Sub → BigQuery MERGE, HTTP webhook ingress with signature verification and ack-first Pub/Sub handoff to worker functions, Prophet for sales forecasting, BigQuery datasets `forneria_luce` + `analytics`, Secret Manager, Workload Identity Federation (`setup-wif.sh`) for GitHub Actions CI/CD, Telegram alerting (`alerts/forneria_luce_alerts.py` + pytest), Graphify output.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-07-28 | **Commits:** 15 | **Status:** active (most recent commit in the batch — 1 day before audit date)
- **Portfolio:** yes — the clearest "I run a real production data platform" evidence in the batch: event-driven + scheduled ingestion, ack-first webhook design, per-function CI/CD, alerting and documented incident/reconciliation history. Note it is documentation/tooling; the function code lives in ~22 separate repos.
- **Metrics:** stated in README — 22 Cloud Functions (Gen2, Python 3.11, us-central1) plus a Prophet sales-forecasting function; 2 BigQuery datasets (`forneria_luce` operational, `analytics` forecasts); token refresh every 5h keeping 3 prior versions alive; named schedules incl. hourly sales, daily 04:30 UTC produtos, 04:45 estoques, 05:20 contas a pagar, 05:25 nfe, 05:35 nfce, 05:40 pedidos de compras; RD Station ingestion marked deprecated. A reconciliation record is dated 2026-05-23.

---

### bip39
- **Purpose:** A local clone of Ian Coleman's open-source BIP39 tool — converts BIP39 mnemonic phrases into wallet addresses and private keys, buildable into a standalone offline HTML file.
- **Stack:** JavaScript (bitcoinjs-lib, bitcoinjs-bip38, base-x, ethereumjs-util, nanocurrency-web, stellar-util vendored under `src/libs`), HTML/CSS, Python build script (`compile.py`) that inlines everything into `bip39-standalone.html`, shell dev-env setup script.
- **Category:** Experiment / Learning
- **Client:** personal (third-party open-source project cloned locally — README points to https://iancoleman.io/bip39/)
- **Last commit:** 2023-08-01 | **Commits:** 914 | **Status:** abandoned (>2 years old; commit history is upstream's, not the user's)
- **Portfolio:** no — this is someone else's open-source project cloned locally; no evidence of original contribution found.
- **Metrics:** none stated

---

### bling-chatbot-infra-forneria-luce
- **Purpose:** Two Cloud Run microservices that sync external data into Firestore for the Forneria Luce chatbot — `phone-sync` (Bling ERP contacts, so the bot can identify callers by phone) and `fidelimax-sync` (Fidelimax loyalty points balances).
- **Stack:** Python 3.12, FastAPI + Uvicorn, Google Cloud Run (source deploy via `deploy.sh`), Firestore, Google Cloud Scheduler with OIDC auth, Bling API and Fidelimax API clients, Docker, custom phone normalization module.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce (GCP project `chatbot-forneria-luce`); integrates Bling and Fidelimax as sources
- **Last commit:** 2026-03-04 | **Commits:** 2 | **Status:** active (commit within 6 months) — small and stable rather than actively evolving
- **Portfolio:** no — competent but thin: two straightforward sync services with 2 commits; overlaps with the stronger bi-forneria-luce story.
- **Metrics:** stated in README — phone-sync full sync weekly (Sundays 3 AM BRT), incremental sync every 6 hours over the last 24h of changes; fidelimax-sync full sync every 6 hours offset 30 min after phone-sync. No volume numbers stated.

---

### bling-gcp-native-connector
- **Purpose:** A productized, GCP-native multi-tenant data connector that extracts Bling ERP data into customer-owned BigQuery/GCS, designed to be sold as SaaS on Google Cloud Marketplace with billing through the customer's Cloud Billing account.
- **Stack:** TypeScript 5.7 on Node >=20, pnpm workspaces monorepo (`packages/shared`, `packages/entities`, `services/api`, `services/sync`), Express-style API service with auth / error-handler / request-id middleware and `oauth`, `tenants`, `webhooks`, `health` routes, Firestore (local emulator via docker-compose), Docker, Bling REST API + OAuth 2.0, targets BigQuery and Cloud Storage; extensive product/commercial planning docs under `docs/foundations` (PLAN.md, TODO.md, LAUNCH_PROMPT.md).
- **Category:** Data Engineering / ETL
- **Client:** Bling (as data source) — the product itself is an independent/personal commercial venture; no end client named
- **Last commit:** not a git repo (directory mtime 2026-04-01) | **Commits:** not a git repo | **Status:** experimental (API and sync service skeletons exist — OAuth, tenants and webhooks routes are implemented; sync service has only a health route; TODO.md phases are all unchecked)
- **Portfolio:** yes — the most "product/founder" flavoured item: multi-tenant SaaS architecture, Marketplace billing integration research, monorepo discipline in TypeScript. Caveat: incomplete — the sync engine, the actual value-delivering half, is not built.
- **Metrics:** stated in the repo — 4 workspace packages (shared, entities, api, sync); 4 API route modules (oauth, tenants, webhooks, health); Node >=20, pnpm >=9 engine constraints; TODO.md Phase A checklist items all unchecked. No delivery or revenue numbers stated.

---

## Batch notes / caveats
- **Not git repositories** (so no commit history is available): `ads-mcp`, `agenteVendasWhatsapp`, `amazon-bid-engine-model`, `bling-gcp-native-connector`. Directory mtimes are reported for these and labelled as such — they are not commit dates.
- `ai_media-planner` has an initialized but empty git repo (0 commits); the nested `ai_media-panner/` folder is a separate repo with 1 commit.
- `bip39`'s 914 commits are the upstream open-source project's history, not the user's authorship.
- No metric in this file is estimated. Where the source stated no number, the field reads "none stated".


<!-- ===== batch B3 ===== -->

# Inventory — Batch B3

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/myGit/`
Audit date reference: 2026-07-29. "Active" = last commit within 6 months of that date.
All facts below are taken literally from README/source/workflow files. Anything not stated in the repo is written as "unknown".

---

### bling-product-sync
- **Purpose:** Scheduled Cloud Run service that mirrors Bling ERP product data into Firestore so a chatbot can read a stable product snapshot instead of calling Bling at runtime (README states it replaces the chatbot's runtime `listAllProducts()` call).
- **Stack:** Python 3.12 (Dockerfile `python:3.12-slim`), FastAPI 0.115.6 + uvicorn 0.34.0, httpx 0.28.1, `google-cloud-firestore` 2.19.0, `google-cloud-secret-manager` 2.22.0, Pydantic 2.10.4 + pydantic-settings; deployed to Cloud Run (region `us-east1`, `--no-allow-unauthenticated`) via `deploy.sh`; Cloud Scheduler job `product-sync-daily-{tenant}`; pytest tests in `tests/test_firestore_writer.py`.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce (tenant `forneria-luce`; sibling repos `Bling-Chatbot-Agent`, `bling-phone-lookup`, `bling-chatbot-infra-forneria-luce`)
- **Last commit:** 2026-05-07 | **Commits:** 9 | **Status:** active
- **Portfolio:** yes — well-documented production service with an explicit incident-driven design rationale, locking/idempotency/failure semantics, schema-migration playbook and tests.
- **Metrics (literal, from README):** Bling rate cap stated as 3 req/s; service paces 500 ms between paginated `/produtos` requests = 2 req/s; sync cadence cron `0 */3 * * *` America/Sao_Paulo (every 3 hours); Firestore lock TTL 10 min; chatbot health considered unavailable if no sync in >36 h; 2026-05-07 "Daniele incident" — payment confirmed for R$ 374,98 with Bling order never created; deploy gate `products_written == products_fetched` and `products_servable_by_chatbot >= threshold` (threshold value not stated); prior gate was a single `>400` count.

### blingMCP
- **Purpose:** Model Context Protocol (MCP) server for the Bling ERP API v3, exposing the full API surface to AI assistants as a small set of domain tools.
- **Stack:** TypeScript (strict) on Node >= 20, `@modelcontextprotocol/sdk` ^1.12.1, axios, zod + zod-to-json-schema, bottleneck (rate limiting), express (HTTP/SSE transport), jsonwebtoken, node-forge, node-cache, `@apidevtools/json-schema-ref-parser`; build via tsup + tsx codegen from `docs/bling-openapi.json`; tests with vitest + msw; dual transport stdio / HTTP-SSE; OAuth 2.0 or external-token auth; HMAC-SHA256 webhook receiver. MIT licensed, repo `github.com/strod/blingMCP`.
- **Category:** AI & LLM
- **Client:** Personal / open source (author Rodrigo Teixeira, MIT license) — no client named in repo
- **Last commit:** 2026-02-27 | **Commits:** 5 | **Status:** active
- **Portfolio:** yes — public MIT open-source MCP server with full OpenAPI-driven codegen, strong README and architecture docs; strongest AI/LLM-facing artifact in this batch.
- **Metrics (literal, from README/package.json):** 254 Bling v3 endpoints covered, consolidated into 18 LLM-friendly tools (tool-registry.ts comment says it registers 19 tools); rate limiting 3 req/sec token bucket; default daily request budget 115,000 (max 120K); test coverage stated as "90%+"; per-tool action counts listed (e.g. `bling_produtos` 44, `bling_financeiro` 23, `bling_logistica` 20).

### camino
- **Purpose:** unknown — the folder is not a git repository and contains no source code, README or manifest. It holds only a `.env` (1.8K) and `assets/anchora-chat/brand/` with four PNG brand/login images (e.g. `house-on-rock-byzantine.png`, `login-empty-state-1600x1200.png`).
- **Stack:** unknown from code. The `.env` variable *names* (values not read) reference: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `OPENROUTER_API_KEY`, `FIRECRAWL_API_KEY`, `SCRAPINGBEE_API_KEY`, `ANTHROPIC_MODEL`, `EMBEDDING_MODEL`, `EMBEDDING_DIM`, `DATA_DIR`, `INDEX_DIR`, `GCP_PROJECT_ID`, `GCS_BUCKET`, `GCS_PREFIX`, `RETRIEVAL_TOP_K`, `RETRIEVAL_MIN_SCORE`, `DEFAULT_LANGUAGE`, `LOG_LEVEL`, and five `STRIPE_*` keys — suggesting an LLM/retrieval (RAG) product with Stripe billing, but no code is present to confirm.
- **Category:** Experiment / Learning (assigned on the basis of an asset/config-only folder with no code)
- **Client:** unknown (asset folder named `anchora-chat`)
- **Last commit:** unknown (not a git repository) | **Commits:** unknown | **Status:** experimental — no code, no git history
- **Portfolio:** no — no code, no README, nothing demonstrable.
- **Metrics:** none stated.

### cf-bling-api-call-contas-pagar
- **Purpose:** Daily GCP Cloud Function that mirrors Bling accounts payable into BigQuery table `forneria_luce.contas_a_pagar`.
- **Stack:** Python 3.11 Cloud Function gen2, `functions-framework==3.*`, `requests==2.32.3`, `google-cloud-bigquery==3.25.0`; Pub/Sub trigger topic `bling_api_calls_contas_pagar`; entry point `call_contas_pagar`; memory 512Mi; project `chatbot-forneria-luce`; deployed by GitHub Actions with Workload Identity Federation; Bling API v3 `GET /contas/pagar` paginated; MERGE on `id` into a partitioned table; nested structs stored as JSON columns; BigQuery schema cached in module scope.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 9 | **Status:** active
- **Portfolio:** no — small single-file function nearly identical to its siblings; the platform as a whole is the portfolio item, not this repo alone.
- **Metrics (literal, from main.py):** `PAGE_LIMIT = 100`, `MAX_PAGES = 500`, `API_DELAY = 0.3` s, `API_TIMEOUT = 30` s; README states a 90-day rolling lookback pattern.

### cf-bling-api-call-contas-receber
- **Purpose:** Hourly Cloud Function that mirrors Bling accounts receivable into `forneria_luce.contas_a_receber` (partitioned by `dataEmissao`).
- **Stack:** Python 3.11 Cloud Function gen2, functions-framework, requests, google-cloud-bigquery; Pub/Sub topic `bling_api_calls_contas_receber`; entry point `call_contas_receber`; secret `bling_access_token=bi-bling-access-token:latest`; project `chatbot-forneria-luce`; GitHub Actions + WIF deploy; paginated fetch → MERGE on `id`; nested fields (contato, formaPagamento, contaContabil, origem) as JSON columns; schema cache avoids per-invocation `get_table` on warm instances.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 10 | **Status:** active
- **Portfolio:** no — same reason as the other per-entity functions.
- **Metrics (literal, from README):** Cloud Scheduler cron `0 * * * *` (hourly, UTC); `LOOKBACK_DAYS=30` (records older than 30 days assumed immutable); pagination failure aborts without writing.

### cf-bling-api-call-contatos
- **Purpose:** Cloud Function that fetches contact details from Bling for customer IDs present in `forneria_luce.sales` but missing from `forneria_luce.contatos`, and streams them into BigQuery.
- **Stack:** Python 3.11 Cloud Function gen2, `functions-framework==3.*`, `pandas==2.2.2`, `pandas-gbq==0.23.1`, `google-cloud-secret-manager==2.16.0`, `google-cloud-bigquery==3.25.0`, `google-cloud-bigquery-storage==2.25.0`; Pub/Sub topic `bling_api_calls_contatos`; entry point `call_contatos`; memory 512Mi, timeout 540s, region `us-central1`; secret `bling_access_token` from Secret Manager; GitHub Actions + WIF deploy; local run via `functions-framework --target=call_contatos`.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 6 | **Status:** active
- **Portfolio:** no — small single-purpose backfill function; covered by the platform-level entry.
- **Metrics (literal, from README):** up to 1,000 missing customers fetched per invocation; timeout 540 s; memory 512 Mi.
- **Note:** README lists service account `fornerialuce-bi@silent-hook-430215-j2...` and project `silent-hook-430215-j2`, while `.github/workflows/deploy.yml` deploys to project `chatbot-forneria-luce`. The README appears stale relative to the workflow.

### cf-bling-api-call-estoques
- **Purpose:** Pub/Sub-triggered Cloud Function that reconciles the full stock state into `forneria_luce.estoques` by calling Bling's bulk stock endpoint for every active product; also the backfill path and the drift-catcher for the real-time `cf-bling-webhook-estoques`.
- **Stack:** Python 3.11 Cloud Function gen2, functions-framework, requests 2.32.3, google-cloud-bigquery 3.25.0; Pub/Sub topic `bling_api_calls_estoques`; entry point `call_estoques`; reads `SELECT id FROM forneria_luce.produtos WHERE situacao = 'A'`; calls `GET /estoques/saldos?idsProdutos[]=…`; per-request UUID-suffixed staging table with 1h expiry backstop, MERGE on `produto_id`, explicit delete in `finally`; target table clustered on `produto_id` (not partitioned); GitHub Actions + WIF deploy.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 3 | **Status:** active
- **Portfolio:** no as a standalone repo — but its staging-table + MERGE + clustering design is the best single illustration of the platform's cost-aware pattern; use it as evidence inside the platform portfolio entry.
- **Metrics (literal, from README):** product IDs batched in groups of 100 per `/estoques/saldos` call; 300 ms delay between batches; Cloud Scheduler daily `45 4 * * *` UTC, deliberately 15 minutes after `cf-bling-api-call-produtos`; staging tables expire after 1 h.

### cf-bling-api-call-nfce
- **Purpose:** Daily Cloud Function that mirrors NFC-e (Brazilian consumer fiscal receipts) from Bling into `forneria_luce.nfce`.
- **Stack:** Python 3.11 Cloud Function gen2, functions-framework, requests 2.32.3, google-cloud-bigquery 3.25.0; Pub/Sub topic `bling_api_calls_nfce`; entry point `call_nfce`; project `chatbot-forneria-luce`; paginated fetch → MERGE on `id` into partitioned target; nested structs (`contato`, `naturezaOperacao`, `loja`) as JSON columns; timestamp cleaning on `dataEmissao` / `dataOperacao`; GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 9 | **Status:** active
- **Portfolio:** no — sibling boilerplate of the same ingestion pattern.
- **Metrics (literal, from main.py):** `PAGE_LIMIT = 100`, `MAX_PAGES = 1000`, `LOOKBACK_DAYS = 90`, `API_DELAY = 0.3` s, `API_TIMEOUT = 30` s.

### cf-bling-api-call-nfe
- **Purpose:** Daily Cloud Function that mirrors NF-e (B2B fiscal invoices) from Bling into `forneria_luce.nfe`; also carries the shared Telegram alerting module.
- **Stack:** Python 3.11 Cloud Function gen2, functions-framework, requests 2.32.3, google-cloud-bigquery 3.25.0, `google-cloud-pubsub>=2.21,<3`; Pub/Sub topic `bling_api_calls_nfe`; entry point `call_nfe`; paginated fetch → MERGE on `id`; nested structs as JSON; plus `alerts.py`, the canonical vendored alert publisher that posts JSON alerts to `projects/rt-analytics-alerts-bot/topics/alerts-monitoring`, forwarded to Telegram.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 10 | **Status:** active
- **Portfolio:** no as a standalone repo — but `alerts.py` (severity taxonomy, fingerprinting, never-raises contract, deliberate vendoring rationale) is good supporting evidence for the platform entry.
- **Metrics (literal, from main.py / alerts.py):** `PAGE_LIMIT = 100`, `MAX_PAGES = 1000`, `LOOKBACK_DAYS = 90`, `API_DELAY = 0.3` s; alert severities defined as high / medium / low with explicit rules (webhook 5xx or DLQ arrival → high; retryable worker raise → medium; recovery and test alerts → low).

### cf-bling-api-call-orders
- **Purpose:** Cloud Function that fetches full order detail from Bling for order IDs present in `forneria_luce.sales` but missing from `forneria_luce.orders_full_info`, writing to BigQuery with schema pruning and GCS error logging.
- **Stack:** Python 3.11 Cloud Function gen2, functions-framework, `requests>=2.31.0`, `google-cloud-storage>=2.14.0`, `google-cloud-bigquery==3.25.0`, `google-cloud-bigquery-storage==2.25.0`; Pub/Sub topic `bling_api_call_orders`; entry point `call_orders`; memory 512Mi, timeout 540s, `--max-instances=1`, region `us-central1`; secrets `bling_refresh_token`, `bling_access_token`, `bling_credentials` from Secret Manager; staging table `orders_raw` → MERGE (upsert on `id`) into `orders_full_info` → truncate staging; error logs to GCS bucket `forneria_luce_bq_data` under `bq_upload_errors/orders/`; has `CLAUDE.md` and `docs/`.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-27 | **Commits:** 8 | **Status:** active
- **Portfolio:** borderline yes — the largest and most complete of the cf-bling functions (16.5K main.py, docs/, full staging→merge→truncate flow with OAuth refresh and error quarantine). Best single repo to show if a concrete example of the platform is needed.
- **Metrics (literal, from README/workflow):** up to 500 missing orders fetched per run; memory 512 Mi; timeout 540 s; max instances 1.
- **Note:** README states project/SA `silent-hook-430215-j2`, while `deploy.yml` deploys to `chatbot-forneria-luce`. The workflow is the deployed truth; README appears stale.

### cf-bling-api-call-pedidos-compras
- **Purpose:** Daily Cloud Function that mirrors Bling purchase orders into `forneria_luce.pedidos_compras`.
- **Stack:** Python 3.11 Cloud Function gen2, functions-framework, requests 2.32.3, google-cloud-bigquery 3.25.0; Pub/Sub topic `bling_api_calls_pedidos_compras`; entry point `call_pedidos_compras`; paginated fetch → MERGE on `id` into partitioned target; nested structs (`fornecedor`, `situacao`) as JSON columns; date cleaning on `data` / `dataPrevista`; GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 8 | **Status:** active
- **Portfolio:** no — sibling boilerplate.
- **Metrics (literal, from main.py):** `PAGE_LIMIT = 100`, `MAX_PAGES = 1000`, `LOOKBACK_DAYS = 90`, `API_DELAY = 0.3` s, `API_TIMEOUT = 30` s.

### cf-bling-api-call-produtos
- **Purpose:** Daily reconciliation Cloud Function that mirrors the full Bling product catalog into `forneria_luce.produtos`; the safety net behind the real-time `cf-bling-webhook-products` (catches missed webhooks, hard deletes, renamed events, new columns, initial population).
- **Stack:** Python 3.11 Cloud Function gen2, functions-framework, requests 2.32.3, google-cloud-bigquery 3.25.0; Pub/Sub topic `bling_api_calls_produtos`; entry point `call_produtos`; paginates `GET /produtos?pagina=N&limite=100`; loads with `WRITE_TRUNCATE` (full snapshot) and `ignore_unknown_values=True`; stamps every row with `fetched_at` UTC; secret `bling_access_token` at `:latest`; GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 5 | **Status:** active
- **Portfolio:** no as a standalone repo — but its explicit failure-mode reasoning (return 500 without writing rather than TRUNCATE a partial catalog) is quotable evidence for the platform entry.
- **Metrics (literal, from README):** page size 100; Cloud Scheduler daily `30 4 * * *` UTC (04:30); on mid-pagination crash the function returns 500 and writes nothing.

---

## Bling Platform Shared Architecture

All nine `cf-bling-api-call-*` repos in this batch are one repo-per-service slice of a single Bling ERP → BigQuery ingestion platform for **Forneria Luce**. The pattern is identical across every repo and is evidenced in the code and workflows, not inferred.

**1. Deployment — one repo, one gen2 Cloud Function, GitHub Actions + Workload Identity Federation.**
Every repo has exactly one `.github/workflows/deploy.yml`, triggered on push to `main`, with `permissions: id-token: write`, `google-github-actions/auth@v2` using repo secrets `WIF_PROVIDER` / `WIF_SERVICE_ACCOUNT` (no service-account JSON keys), then `google-github-actions/setup-gcloud@v2` and a single `gcloud functions deploy … --gen2 --runtime=python311 --region=us-central1 --source=. --memory=512Mi --timeout=540s`. Function names follow `bling_api_call_<entity>` and entry points follow `call_<entity>`. Grepping all deploy workflows in the folder shows 13 such functions on the same template — the nine in this batch plus siblings `bling_api_call_sales`, `bling_api_call_situacoes`, `bling_api_call_vendedores` and `bling_api_call_roteiros`.

**2. Trigger — Cloud Scheduler → Pub/Sub → Cloud Function.**
Every function is `--trigger-topic=bling_api_calls_<entity>` (the `orders` repo is the one naming exception: `bling_api_call_orders`, singular "call"). Cadence is set by Cloud Scheduler jobs, documented per repo: `contas_receber` hourly `0 * * * *` UTC; `produtos` daily `30 4 * * *` UTC; `estoques` daily `45 4 * * *` UTC, explicitly sequenced 15 minutes after `produtos` so the active-product list is fresh; the remaining daily jobs point at the Cloud Scheduler UI rather than pinning cron in the README.

**3. Auth and project — Secret Manager env-var injection into one BI service account.**
Bling OAuth tokens are never in the repos. They are mounted at deploy time with `--set-secrets=bling_access_token=bi-bling-access-token:latest` (the `orders` function additionally mounts `bi-bling-refresh-token` and `bi-bling-credentials`, since it performs token refresh). The deployed GCP project across all workflows is `chatbot-forneria-luce`, running as `fornerialuce-bi@…`. Note that several READMEs (`orders`, `contatos`, `estoques`, `produtos`) still name the older project `silent-hook-430215-j2` — the workflows are the current truth and the READMEs are stale on this point.

**4. Data flow — Bling API v3 → paginate → shape → BigQuery MERGE, with two deliberate exceptions.**
The default write path is: paginate `GET https://api.bling.com.br/Api/v3/<resource>?pagina=N&limite=100` with a 0.3 s courtesy delay and a 30 s request timeout, stopping when a short page signals end of data; a module-level `_SCHEMA_CACHE` fetches the BigQuery table schema once per warm instance; records are pruned to the target schema, dates/timestamps cleaned, and nested Bling structs (`contato`, `fornecedor`, `formaPagamento`, `naturezaOperacao`, `loja`, `situacao`, …) stored as JSON columns; then a `MERGE … ON target.id = source.id` upsert into a date-partitioned target table in dataset `forneria_luce`, over a rolling lookback (90 days for the fiscal/purchase entities, 30 for `contas_a_receber`). Two intentional deviations: `produtos` uses `WRITE_TRUNCATE` for a full-catalog snapshot with `ignore_unknown_values=True`, and `estoques` uses a per-request UUID-suffixed staging table (1 h expiry backstop, deleted in `finally`) merging on `produto_id` into a clustered, unpartitioned state table. `orders` uses a named `orders_raw` staging table plus truncate-after-merge and quarantines failures to GCS `forneria_luce_bq_data/bq_upload_errors/orders/`. Everything lands in BigQuery — **no Firestore** in the cf-bling functions; Firestore appears only in the separate chatbot-serving service `bling-product-sync`.

**5. Reliability posture — fail-closed, backfill-capable, alert-aware.**
The reconciliation functions are explicitly the safety net for real-time webhook siblings (`cf-bling-webhook-products`, `cf-bling-webhook-estoques`) and double as first-run backfills. Failure semantics are stated and consistent: pagination failure aborts without writing rather than persisting a partial state (`produtos` returns 500 rather than TRUNCATE a partial catalog; `contas_receber` aborts without writing). `cf-bling-api-call-nfe` carries `alerts.py`, the canonical alert publisher vendored verbatim into each CF that emits alerts, publishing JSON to `projects/rt-analytics-alerts-bot/topics/alerts-monitoring` for Telegram delivery, with a documented severity taxonomy, fingerprinting scheme, and a never-raise contract so alerting can't break ingestion.

**Adjacent, different architecture:** `bling-product-sync` is *not* part of the BigQuery path. It is a Cloud Run + FastAPI service on a 3-hourly Cloud Scheduler that mirrors Bling products into **Firestore** for chatbot serving, with transactional locking and idempotent upserts. `blingMCP` is a third, independent surface on the same ERP: a TypeScript MCP server exposing Bling v3 to AI assistants.


<!-- ===== batch B4 ===== -->

# Inventory — Batch B4 (Bling ERP integration platform)

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/myGit/`
Audit date: 2026-07-29 (active = last commit on/after 2026-01-29)

All 12 repos are GCP Cloud Functions (Gen 2, Python 3.11, `functions-framework`), deployed
by GitHub Actions on push to `main` using Workload Identity Federation (`WIF_PROVIDER` /
`WIF_SERVICE_ACCOUNT`). GitHub org/account: `strod`. Two GCP projects appear in evidence:
`silent-hook-430215-j2` (the older batch/api-call functions + BigQuery dataset
`forneria_luce`) and `chatbot-forneria-luce` (default `GCP_PROJECT` in the newer
webhook/worker code).

---

### cf-bling-api-call-roteiros
- **Purpose:** Scheduled batch pull of delivery-route data (sales orders with upcoming `dataPrevista`) plus associated contacts from the Bling ERP API into BigQuery.
- **Stack:** Python 3.11, GCP Cloud Functions gen2 (Pub/Sub trigger `bling_api_call_roteiros`), BigQuery streaming inserts, GCP Secret Manager, `pandas==2.2.2`, `pandas-gbq==0.23.1`, `google-cloud-bigquery==3.25.0`, `google-cloud-bigquery-storage==2.25.0`, `tqdm`, `pytz`; GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce (BigQuery dataset `forneria_luce`, SA `fornerialuce-bi@silent-hook-430215-j2`)
- **Last commit:** 2026-05-23 | **Commits:** 3 | **Status:** active
- **Portfolio:** no — small single-purpose batch function; the platform as a whole is the portfolio-worthy unit, not this piece.
- **Metrics:** Stated config only: memory 512 Mi, timeout 540 s. Writes `forneria_luce.orders_raw` and `forneria_luce.contatos`; reads `forneria_luce.contatos`. No volume metrics stated.

### cf-bling-api-call-sales
- **Purpose:** Batch ELT pulling the last 7 days of sales orders from Bling `/pedidos/vendas` and upserting them into BigQuery via a staging-table + MERGE pattern.
- **Stack:** Python 3.11, Cloud Functions gen2 (Pub/Sub trigger `bling_api_calls_sales`, entry point `call_sales`), `pandas==2.2.2`, `pandas-gbq==0.23.1`, `google-cloud-bigquery==3.17.2`, BigQuery MERGE SQL, Secret Manager (`bling_access_token`), GitHub Actions + WIF. Repo also contains `CLAUDE.md` and a `docs/` tree with a 15 KB `bling-api-reference.md`.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 8 | **Status:** active
- **Portfolio:** no — standard incremental-load function; better represented by the platform-level story.
- **Metrics:** Stated: 7-day lookback window; Bling pagination 100 records/page; memory 512 Mi; timeout 240 s. Staging `forneria_luce.bling_sales_raw` → target `forneria_luce.sales` MERGE on `ORDER_ID`. No volume metrics stated.

### cf-bling-api-call-situacoes
- **Purpose:** Batch fetch of Bling order-status definitions (`situacoes`) for every distinct `situacao.id` found in BigQuery, loaded into a lookup table.
- **Stack:** Python 3.11, Cloud Functions gen2 (Pub/Sub trigger `bling_api_calls_situacoes`, entry point `call_situacoes`), Bling API v3 `GET /Api/v3/situacoes/{id}`, `pandas==2.2.2`, `pandas-gbq==0.23.1`, `google-cloud-bigquery==3.25.0`, `google-cloud-bigquery-storage==2.25.0`, `google-cloud-secret-manager==2.16.0`, GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** unknown (`main` has no commits yet) | **Commits:** 0 | **Status:** unknown — full source, README and `deploy.yml` exist and are staged (`git status` shows all files as `A`), but nothing has ever been committed. Remote `git@github.com-strod:strod/cf-bling-api-call-situacoes.git` is configured.
- **Portfolio:** no — no commit history; small lookup-table loader.
- **Metrics:** Stated: memory 256 MB, timeout 60 s. Reads `forneria_luce.orders_full_info`, writes `forneria_luce.situacoes`. No volume metrics stated.

### cf-bling-api-call-vendedores
- **Purpose:** Full-refresh batch load of the salespeople (`vendedores`) master list from Bling API v3 into BigQuery.
- **Stack:** Python 3.11, Cloud Functions gen2 (Pub/Sub trigger `bling_api_call_vendedores`), `requests==2.32.3`, `google-cloud-bigquery==3.25.0`, Secret Manager, BigQuery `WRITE_TRUNCATE`, GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 4 | **Status:** active
- **Portfolio:** no — trivial dimension-table refresher.
- **Metrics:** Stated: memory 256 MB, timeout 60 s; full truncate-and-reload of `forneria_luce.vendedores` on every run. No volume metrics stated.
- **Note:** README documents the entry point as `call_situacoes` (copy-paste carryover from the `situacoes` function).

### cf-bling-sales-prediction
- **Purpose:** Runs Facebook Prophet time-series forecasting over Forneria Luce sales history to produce 120-day forecasts of purchases, revenue, new customers and new revenue, written back to BigQuery.
- **Stack:** Python 3.11, Cloud Functions gen2 (Pub/Sub trigger `bling-sales-prediction`, entry point `bling_sales_predictions`), `prophet==1.1.4` with pinned `pandas==1.5.3` / `numpy==1.24.4`, `pandas-gbq==0.19.1`, `google-cloud-bigquery==3.11.4`, BigQuery streaming inserts, GitHub Actions + WIF.
- **Category:** Analytics & BI
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 2 | **Status:** active
- **Portfolio:** yes — the only forecasting/ML component in the batch; production time-series forecasting feeding a BI layer is a differentiated, explainable story. Caveat: only 2 commits, so scope is modest.
- **Metrics:** Stated: 4 Prophet models (purchases, revenue, new_purchases, new_revenue); 120-day forecast horizon; weekly + monthly + yearly seasonality; pessimistic/average/optimistic bounds (`yhat_lower`/`yhat`/`yhat_upper`); memory 512 Mi; timeout 60 s. Reads `forneria_luce.sales`, writes `analytics.sales_predictive`. No accuracy metrics stated.

### cf-bling-webhook-estoques
- **Purpose:** Ack-first HTTP ingress for Bling stock webhooks (`stock.*`, `virtual_stock.*`, legacy `estoque.*`): verifies HMAC, filters the event name, publishes the raw payload to Pub/Sub, returns 204.
- **Stack:** Python 3.11, Cloud Functions gen2 HTTP trigger, `functions-framework==3.*`, `google-cloud-pubsub>=2.21,<3`, HMAC-SHA256 signature verification (`X-Bling-Signature-256`), Secret Manager (`bling_credentials`, base64 `client_id:client_secret`), GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 10 | **Status:** active
- **Portfolio:** yes — part of the ack-first webhook refactor, which has a documented before/after latency incident. Present it as one platform story with the worker repos rather than standalone.
- **Metrics:** Stated: target ack under 1 s at p99; prior synchronous version had p50 7.3 s and "nearly every 'success' violated Bling's 5-second SLA"; refactor dated 2026-05-12. Config: `memory=256Mi`, `timeout=10s`, `max-instances=50`, `concurrency=80`. Publishes to topic `bling-webhook-estoques`; DLQ `bling-webhook-dlq`.

### cf-bling-webhook-nfe
- **Purpose:** Ack-first HTTP ingress for Bling NF-e (invoice) webhooks (`invoice.*`): verifies HMAC, filters the event, publishes to Pub/Sub topic `bling-webhook-nfe`, returns 204.
- **Stack:** Python 3.11, Cloud Functions gen2 HTTP trigger, `functions-framework==3.*`, `google-cloud-pubsub>=2.21,<3`, HMAC-SHA256 verification, Secret Manager (`bling_credentials`), GitHub Actions + WIF. Default `GCP_PROJECT=chatbot-forneria-luce`.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-06-23 | **Commits:** 6 | **Status:** active
- **Portfolio:** yes — same ack-first platform story; has the sharpest stated failure metric (webhook disabled by the vendor).
- **Metrics:** Stated in module docstring: previous synchronous version p50 ~7 s with frequent 30 s timeouts, "Bling counted ~99% of deliveries as failures and disabled the webhook"; Bling enforces a 5-second response SLA; publish future `.result(timeout=2)`. Hot-fix dated 2026-06-23. No README in repo (purpose taken from `main.py` docstring).

### cf-bling-webhook-orders
- **Purpose:** Ack-first HTTP ingress for Bling order webhooks (`order.*` / `pedido_venda.*`): verifies HMAC, filters, publishes to Pub/Sub topic `bling-webhook-orders`, returns 204.
- **Stack:** Python 3.11, Cloud Functions gen2 HTTP trigger, `functions-framework==3.*`, `google-cloud-pubsub>=2.21,<3`, HMAC-SHA256 verification, Secret Manager (`bling_credentials` only — access token moved to the worker), GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 11 | **Status:** active
- **Portfolio:** yes — highest-traffic path of the platform and the best-documented incident/remediation narrative.
- **Metrics:** Stated: prior synchronous version p50 19 s, "~33% explicit 500s and ~33% Cloud Run 30s timeouts"; production was previously running unpushed off-repo code. Config: `memory=512Mi`, `cpu=1`, `concurrency=80`, `max-instances=50`, `timeout=10s`. Target ack under 1 s at p99. Documented rollback procedure via `gcloud run services update-traffic`.

### cf-bling-webhook-products
- **Purpose:** Ack-first HTTP ingress for Bling product webhooks (`product.created/updated/deleted`, legacy `produto.*`): verifies HMAC, filters, publishes to Pub/Sub topic `bling-webhook-products` for `cf-bling-worker-products`.
- **Stack:** Python 3.11, Cloud Functions gen2 HTTP trigger, `functions-framework==3.*`, `google-cloud-pubsub>=2.21,<3`, HMAC-SHA256 (`X-Bling-Signature-256`), Secret Manager, GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-06-23 | **Commits:** 8 | **Status:** active
- **Portfolio:** yes — same platform story (as a component, not standalone).
- **Metrics:** Stated in `main.py` docstring: previous synchronous version p50 ~7 s, frequently hitting Cloud Run timeout, "Bling counted ~92% of deliveries as failures and disabled the webhook"; hot-fix dated 2026-06-23.
- **Note:** The README is **stale** — it still describes the old synchronous design (fetch `GET /produtos/{id}` + per-request staging table + MERGE into `forneria_luce.produtos`, `max_instances=5`, `concurrency=1`, secret `bling_product_webhook_secret`). The current `main.py` is ingress-only and `requirements.txt` contains no BigQuery dependency, confirming the refactor.

### cf-bling-worker-estoques
- **Purpose:** Pub/Sub-triggered worker that consumes stock events from `bling-webhook-estoques`, shapes the row and MERGEs it into `forneria_luce.estoques`.
- **Stack:** Python 3.11, Cloud Functions gen2 (Pub/Sub trigger), `functions-framework>=3.5,<4`, `google-cloud-bigquery>=3.20,<4`, `google-cloud-pubsub>=2.21,<3`, BigQuery MERGE, vendored `alerts.py` (Telegram alerting via `projects/rt-analytics-alerts-bot/topics/alerts-monitoring`), GitHub Actions + WIF (deploy.yml also configures the subscription retry/DLQ policy).
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-06-07 | **Commits:** 7 | **Status:** active
- **Portfolio:** yes — as part of the platform; demonstrates idempotency, DLQ and BigQuery DML-concurrency reasoning.
- **Metrics:** Stated: subscription exponential backoff 10 s min → 600 s max, `max-delivery-attempts=5`, dead-letter topic `bling-webhook-dlq`; `min-instances=1`; `max-instances=4` chosen to keep concurrent MERGEs "well under BigQuery's per-table DML cap of 20"; ingress acks in <200 ms; MERGE keys on `produto_id`.

### cf-bling-worker-nfe
- **Purpose:** Pub/Sub worker for Bling NF-e (invoice) events: fetches the full NF-e (`GET /nfe/{id}`) and MERGEs it into `forneria_luce.nfe` (partitioned by `dataEmissao`).
- **Stack:** Python 3.11, Cloud Functions gen2 (`--trigger-topic=bling-webhook-nfe`), `functions-framework>=3.5,<4`, `google-cloud-bigquery>=3.20,<4`, `google-cloud-pubsub>=2.21,<3`, `google-cloud-secret-manager>=2.20,<3`, `requests>=2.32,<3`, `urllib3>=2.2,<3`, vendored `alerts.py` (Telegram), GitHub Actions + WIF.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-06-23 | **Commits:** 1 | **Status:** active (newest member of the family — single commit)
- **Portfolio:** yes — as part of the platform; notable for the OAuth 401 → token-refresh-and-retry logic and partition-pruned MERGE.
- **Metrics:** Stated: MERGE ON `id AND dataEmissao` for partition pruning; subscription `--max-instances=1`, `--max-delivery-attempts=100`, backoff 10 s..600 s, dead-letter `bling-webhook-dlq` in project `chatbot-forneria-luce`; prior synchronous path "averaged ~7s with frequent 30s timeouts and got the webhook disabled"; Bling 5-second webhook SLA. On 401 it triggers a token refresh, polls until Secret Manager `:latest` advances, retries once.

### cf-bling-worker-orders
- **Purpose:** Pub/Sub worker for Bling order events: fetches the full order and its linked contact, MERGEs both into BigQuery, and on DESPACHADO status forwards a dispatch notification to a WhatsApp chatbot.
- **Stack:** Python 3.11, Cloud Functions gen2 (Pub/Sub trigger `bling-webhook-orders`), `functions-framework>=3.5,<4`, `google-cloud-bigquery>=3.20,<4`, `google-cloud-pubsub>=2.21,<3`, `google-cloud-secret-manager>=2.20,<3`, `requests`/`urllib3`, BigQuery MERGE, HTTP call to `DISPATCH_NOTIFY_URL` (`Bling-Chatbot-Agent` `/api/dispatch/notify`), vendored `alerts.py` (Telegram), GitHub Actions + WIF. Largest `main.py` in the batch (25.2 KB).
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-06-07 | **Commits:** 10 | **Status:** active
- **Portfolio:** yes — the richest single component: two MERGEs, cross-service notification into a customer-facing WhatsApp chatbot, explicit idempotency and concurrency reasoning.
- **Metrics:** Stated: order volume "~1k events/day, ~5-10 per minute peak"; `max-instances=1` (chosen to eliminate a MERGE race that a load test showed produced duplicate rows), `min-instances=1`, `timeout=540s`, "real invocations are ~5-10s"; subscription backoff 10 s → 600 s, `max-delivery-attempts=5`, DLQ `bling-webhook-dlq`; DESPACHADO status ids `{55496, 79061, 87825}`; replaced a synchronous flow with p50 19 s peaking Cloud Run's 30 s timeout. Token from `bling_access_token`, rotated by `cf-refresh-bling-tokens`.

---

## api-call vs webhook vs worker pattern

These 12 repos are three distinct roles inside one event-driven Bling ERP → BigQuery
integration platform for Forneria Luce. All three are GCP Cloud Functions gen2 in Python,
but they differ in trigger, latency budget, and write target.

**1. `api-call-*` — scheduled batch pull (reconciliation layer).**
Trigger: a Pub/Sub topic named after the function (`bling_api_calls_sales`,
`bling_api_call_vendedores`, `bling_api_call_roteiros`, `bling_api_calls_situacoes`) — i.e.
fired on a schedule by an external publisher, not by Bling. These functions *pull* from the
Bling REST API (paginating `/pedidos/vendas`, `/vendedores/{id}`, `/situacoes/{id}`,
`/contatos/{id}`) and write directly to BigQuery `forneria_luce.*` using either
`WRITE_TRUNCATE` full refresh (`vendedores`), a staging-table + MERGE upsert (`sales` via
`bling_sales_raw`), or streaming inserts (`orders_raw`, `contatos`, `situacoes`). They own no
real-time path. Both the orders and the estoques READMEs explicitly name them as the
**reconciliation safety net**: *"The daily batch CFs (`cf-bling-api-call-orders`,
`cf-bling-api-call-contatos`) remain as the reconciliation safety net for dropped/DLQ'd
messages and deletes"* (cf-bling-worker-orders README) and *"The Bling batch CF
(`cf-bling-api-call-estoques`) continues to run daily as the reconciliation safety net"*
(cf-bling-webhook-estoques README). They are also where deletes get cleaned up, because the
real-time path deliberately no-ops on `.deleted` events.

**2. `webhook-*` — ack-first HTTP ingress (push, latency-critical).**
Trigger: Bling POSTs the event to a public Cloud Run/Cloud Functions HTTP endpoint with an
`X-Bling-Signature-256` header. Each of the four ingress functions does exactly five things
and nothing else: verify the HMAC-SHA256 of the raw body against the OAuth `client_secret`
(decoded from the base64 `bling_credentials` secret), parse JSON, filter on the event-name
prefix (`stock.`/`virtual_stock.`, `order.`/`pedido_venda.`, `product.`/`produto.`,
`invoice.`), publish an envelope to Pub/Sub, and return `204`. They write to **Pub/Sub only —
never to BigQuery**; their `requirements.txt` contains no BigQuery dependency at all, which is
the cleanest evidence of the split. The envelope is uniform across all four:
`{"event", "eventId", "received_at", "payload": <original Bling body>}` with `event` and
`eventId` also set as Pub/Sub message attributes for filtering and observability. Their
config is tuned for absorbing bursts rather than doing work: `memory=256Mi`–`512Mi`,
`timeout=10s`, `max-instances=50`, `concurrency=80`.

**3. `worker-*` — Pub/Sub-triggered async processor (does the slow work).**
Trigger: `--trigger-topic=bling-webhook-<domain>`, one worker subscription per ingress topic.
Workers do everything the ingress was forbidden from doing: fetch the full record back from
Bling (`GET /pedidos/vendas/{id}`, `GET /contatos/{id}`, `GET /nfe/{id}`), shape/sanitize it,
and MERGE into the BigQuery target (`orders_full_info`, `contatos`, `estoques`, `nfe`). They
hold the secrets the ingress gave up — `bling_access_token` (rotated by
`cf-refresh-bling-tokens`; worker-nfe additionally handles a 401 by triggering a refresh,
polling until Secret Manager `:latest` advances, and retrying once) and the dispatch-notify
secret. worker-orders extends the chain one hop further: when `situacao.id` is a DESPACHADO
variant it POSTs to the `Bling-Chatbot-Agent` `/api/dispatch/notify` endpoint, which sends the
customer a WhatsApp "your order is on the way" message. Workers are built around
at-least-once delivery: MERGE keys are chosen so re-execution is idempotent (`produto_id`;
`id` + partition predicate; `(id, dataEmissao)`), BigQuery `concurrent update` BadRequests are
allowed to raise so Pub/Sub redelivers, and each `deploy.yml` step configures the subscription
with exponential backoff (10 s → 600 s), a max-delivery-attempt count (5 for orders/estoques,
100 for nfe) and dead-lettering to the shared `bling-webhook-dlq` topic. Instance counts are
deliberately low (`max-instances=1` for orders and nfe, `4` for estoques) to bound concurrent
BigQuery DML — estoques cites BigQuery's per-table DML cap of 20, orders cites a load test
that produced duplicate rows at higher concurrency — with `min-instances=1` to avoid
cold starts. Failures publish Telegram alerts through the vendored `alerts.py`.

**Why the split exists (documented, with numbers).**
Bling enforces a 5-second response SLA on webhook deliveries. Every webhook originally did the
Bling fetch + BigQuery MERGE synchronously on the request path. The stated results: orders at
p50 19 s with ~33% explicit 500s and ~33% Cloud Run 30 s timeouts; estoques at p50 7.3 s;
products at p50 ~7 s with Bling counting ~92% of deliveries as failures and **disabling the
webhook**; nfe at p50 ~7 s with frequent 30 s timeouts and likewise **disabled by Bling**. Two
remediation waves are recorded: the 2026-05-12 refactor (orders + estoques, documented in
`bi-forneria-luce/handoffs/webhook-audit-2026-05-12.md`) and the 2026-06-23 hot-fix
(products + nfe, documented in
`bi-forneria-luce/docs/hot-fixes/webhook-products-nfe-ackfirst-hotfix-2026-06-23.md`). Both
split each webhook into ingress + worker with the same envelope contract. Target after the
split: ack under 1 s at p99 (estoques README claims <200 ms in practice). The Bling-side
registration URL was deliberately kept unchanged so no Bling-UI reconfiguration was needed.

**End-to-end chain:**
`Bling event → cf-bling-webhook-<domain> (HMAC verify → filter → publish → 204)
→ Pub/Sub topic bling-webhook-<domain> → cf-bling-worker-<domain> (fetch from Bling API →
MERGE into forneria_luce.<table>) → [orders only] POST chatbot /api/dispatch/notify;
on max retries → bling-webhook-dlq`, with `cf-bling-api-call-<domain>` running on a schedule
in parallel to backfill anything dropped or dead-lettered and to handle deletes.
`cf-bling-sales-prediction` sits at the end of the chain as a consumer, not a producer: it
reads `forneria_luce.sales` (populated by `cf-bling-api-call-sales`) and writes forecasts to
`analytics.sales_predictive`.

**Gaps / caveats noted for accuracy:**
- `cf-bling-worker-products` is referenced by `cf-bling-webhook-products/main.py` but is **not
  in this batch** — its state is unknown from the evidence here.
- `cf-bling-api-call-orders`, `cf-bling-api-call-contatos`, `cf-bling-api-call-estoques`,
  `cf-bling-api-call-produtos` and `cf-refresh-bling-tokens` are referenced in READMEs but
  are not in this batch.
- `cf-bling-api-call-situacoes` has zero commits.
- `cf-bling-webhook-products/README.md` still documents the pre-refactor synchronous design
  and contradicts its own `main.py`.
- `cf-bling-webhook-nfe` has no README.
- Project IDs are inconsistent across generations: `silent-hook-430215-j2` in the api-call
  READMEs vs `chatbot-forneria-luce` as the code default in the webhook/worker functions.


<!-- ===== batch B5 ===== -->

# Inventory — Batch B5

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/myGit/`
Audit date reference: 2026-07-29 (active = last commit on/after 2026-01-29)

---

### cf-bling-worker-products
- **Purpose:** GCP Pub/Sub-triggered Cloud Function worker that fetches a Bling ERP produto by id and MERGEs it into BigQuery `forneria_luce.produtos` (ack-first split so the webhook ingress meets Bling's 5-second SLA).
- **Stack:** Python 3.11, Cloud Functions Gen 2, `functions-framework`, `google-cloud-bigquery`, `google-cloud-pubsub`, `google-cloud-secret-manager`, `requests`; deployed via GitHub Actions + Workload Identity Federation to GCP project `chatbot-forneria-luce` (us-central1). Pub/Sub retry + dead-letter (`bling-webhook-dlq`) configured in the deploy workflow. Vendored `alerts.py`.
- **Category:** Data Engineering / ETL
- **Client:** Forneria Luce
- **Last commit:** 2026-06-23 | **Commits:** 1 | **Status:** active
- **Portfolio:** yes — clean, well-documented example of event-driven ERP→warehouse ingestion with idempotent MERGE, DLQ, secret rotation handling and IaC-style CI/CD. Caveat: single-commit repo, small surface area.
- **Metrics:** README states the synchronous version "averaged ~7s and got the webhook disabled"; Bling enforces a 5-second webhook SLA; subscription retry policy = 100 attempts, 10s..600s backoff; memory 512Mi, timeout 540s, max-instances 1. No business/volume metrics stated.

---

### cf-refresh-bling-tokens
- **Purpose:** Cloud Function that refreshes Bling ERP API OAuth tokens via the `refresh_token` grant, writes new access/refresh tokens as Secret Manager versions and destroys the previous versions.
- **Stack:** Python 3.11, Cloud Functions Gen 2, `functions-framework`, `requests`, `google-cloud-secret-manager`, `google-cloud-pubsub`; Pub/Sub trigger topic `bling_refresh_tokens`; GitHub Actions deploy with Workload Identity Federation. (README documents project `silent-hook-430215-j2`; the deploy workflow targets project `chatbot-forneria-luce` — the two disagree.)
- **Category:** Automation & Tooling
- **Client:** Forneria Luce
- **Last commit:** 2026-05-23 | **Commits:** 7 | **Status:** active
- **Portfolio:** no — useful infrastructure glue but too small and generic to stand alone; better folded into a Forneria Luce data-platform case study.
- **Metrics:** none stated (config only: 256Mi memory, 60s timeout).

---

### cf-refresh-rdstation-tokens
- **Purpose:** Cloud Function that refreshes RD Station Marketing API OAuth tokens via the `refresh_token` grant and rotates them in Secret Manager, destroying prior versions.
- **Stack:** Python 3.11, Cloud Functions Gen 2, `functions-framework`, `requests`, `google-cloud-secret-manager`; Pub/Sub trigger topic `rdstation_refresh_tokens`; GCP project `silent-hook-430215-j2`, region us-central1; GitHub Actions + WIF deploy.
- **Category:** Automation & Tooling
- **Client:** Forneria Luce (service account `fornerialuce-bi@…`)
- **Last commit:** 2026-04-13 | **Commits:** 1 | **Status:** active
- **Portfolio:** no — near-identical sibling of `cf-refresh-bling-tokens`; supporting infrastructure, not a showcase project.
- **Metrics:** none stated (config only: 256Mi memory, 60s timeout).

---

### chatbot-doutor-sofa
- **Purpose:** WhatsApp AI agent for Doutor Sofá (sofa repair / upholstery) that qualifies customers and books appointments on Google Calendar.
- **Stack:** TypeScript (ESM, Node ≥20), Express 4, `openai` SDK pointed at **OpenRouter** (`https://openrouter.ai/api/v1`), default model **`anthropic/claude-sonnet-4-6`**; Google Calendar via `googleapis`; Zod config validation, Pino logging, Helmet, `express-rate-limit`; Dockerfile (multi-stage node:20-slim). Per-client config loaded from `clients/<client>/` JSON (config, stage-instructions, chat-history).
  - **LLM provider(s):** OpenRouter (Claude Sonnet 4.6) for the agent; OpenAI `whisper-1` (`api.openai.com/v1/audio/transcriptions`) for voice-note transcription.
  - **RAG / vector search / embeddings:** **none found** — no embeddings, vector store, or retrieval layer. Context comes from a hand-built XML-sectioned system prompt plus JSON client config.
  - **Channel:** WhatsApp, via an "Inbox Bridge" webhook (`src/routes/inbox-bridge.ts`, `src/channels/inbox-bridge.ts`) carrying phone/customer + text/audio/image/video/document/sticker message types; also an authenticated web `/chat` route and a password-gated test page.
  - **Agent / tool-calling architecture:** yes — an `Orchestrator` running an OpenAI-style tool-calling loop with a skills registry (`SKILL_TOOLS` / `SKILL_MAP`): `buscar-agenda`, `criar-evento`, `identificar-sofa`, `escalar-atendimento`, `encerrar-conversa`. Includes derived conversation state (`conversation-state.ts`), a prompt-injection sanitizer (`prompt-builder/sanitizer.ts`), an immutable `<safety>` prompt section, and a blocked-response fallback.
- **Category:** AI & LLM
- **Client:** Doutor Sofá
- **Last commit:** 2026-03-30 | **Commits:** 3 | **Status:** active (by date) — but only 3 commits; likely an early build
- **Portfolio:** yes — a full production-shaped LLM agent (tool calling, multi-tenant client config, prompt-injection defenses, calendar booking, WhatsApp + voice) is a strong showcase. Note repo hygiene issues: committed `.env` and a GCP service-account JSON key are present in the working tree.
- **Metrics:** none stated as business outcomes. Literal code constants only: `LLM_TIMEOUT_MS = 60_000`, `MAX_TOOL_CALLS_PER_TURN = 15`, `MAX_MESSAGE_LENGTH` default 2000, `MAX_CONVERSATION_TURNS` default 30.

---

### chatbot-forneria-luce-analytics
- **Purpose:** Streamlit analytics dashboard (PT-BR) over the Forneria Luce WhatsApp chatbot's BigQuery event stream — conversion funnel, orders, customer journey, operations, delivery/CEP.
- **Stack:** Python ≥3.10, Streamlit ≥1.37, Pandas, Plotly, `google-cloud-bigquery[pandas]`, `google-cloud-firestore`, `google-cloud-secret-manager`, PyJWT; data source `chatbot-forneria-luce.chatbot_events.agent_events_view`; Firestore-backed single-use visitor tokens (SHA-256 hashed, consumed in a transaction); Docker + Cloud Run (`southamerica-east1`), GitHub Actions deploy via Workload Identity Federation; pytest tests.
- **Category:** Analytics & BI
- **Client:** Forneria Luce
- **Last commit:** 2026-05-30 | **Commits:** 20 | **Status:** active
- **Portfolio:** yes — a deployed, access-controlled client-facing BI product with real engineering care (BRT/UTC day-boundary handling, PII phone masking, test-phone exclusion at the SQL layer, partition-pruned queries, cached queries). Pairs naturally with the chatbot itself as a case study.
- **Metrics:** none stated as business outcomes. Literal facts from README/config: 5 dashboard pages (Funil, Pedidos, Jornada, Operacional, Entrega) plus a Visão Geral home; `CACHE_TTL` 300 s; visitor token default TTL 48 h; `DATA_START_DATE = 2026-04-06`.

---

### cooperadores_op_mural
- **Purpose:** Private community website for the Supernumerários do Opus Dei — Campinas: invite-only registration, member area, admin panel (users/admins/invites/visits, recolhimento content management), and XLSX / Google Sheets export.
- **Stack:** Vanilla HTML/JS frontend (PWA: `manifest.json`, `sw.js`) on Firebase Hosting (`supern-coop-od`); Firebase Auth (Google + email/password, custom claims for admin), Firestore (8 collections) with `firestore.rules`, Cloud Storage with `storage.rules`; Cloud Functions Node 22 (`firebase-functions` v5, `firebase-admin` v12, `googleapis`, `resend` for email, `cheerio`), region `southamerica-east1`; Firebase project `cooperadores-od`. Repo carries `CLAUDE.md`/`AGENTS.md` agent workflow docs and a `tasks/` folder.
- **Category:** Web / App
- **Client:** Supernumerários do Opus Dei — Campinas (community / likely pro bono; not stated)
- **Last commit:** 2026-06-09 | **Commits:** 23 | **Status:** active
- **Portfolio:** no — functional and live, but a private religious-community intranet; sensitive membership data and limited technical differentiation make it a weak public showcase. (Also: a Google OAuth `client_secret*.json` and `.env` are in the working tree.)
- **Metrics:** none stated as outcomes. Literal config facts: individual invites single-use, 1-hour validity; group invites unlimited use, 10-minute validity; admin invites email-bound, 24-hour validity; 3 Cloud Functions; 8 Firestore collections.

---

### crvendas-chabot-agent
- **Purpose:** WhatsApp AI sales agent for CR Vendas (food distribution) — product catalog lookup, price quoting, and order assembly.
- **Stack:** TypeScript (ESM, Node ≥20), Express 4, `openai` SDK against **OpenRouter**, default model **`anthropic/claude-haiku-4.5`** (`OPEN_ROUTER_API_KEY`); Zod, Pino, Helmet, `express-rate-limit`, CORS; Dockerfile. Client data in `clients/cr-vendas/` (`catalog.json`, `price-table.json`, `config.json`, `stage-instructions.json`).
  - **LLM provider(s):** OpenRouter (Claude Haiku 4.5); OpenAI `whisper-1` for audio transcription (`src/media/audio-transcriber.ts`).
  - **RAG / vector search / embeddings:** **none** — retrieval is a hand-rolled **fuzzy string search** over a JSON catalog (`fuzzyScore()` in `src/skills/consultar-catalogo.ts`). No embeddings or vector DB.
  - **Channel:** no live WhatsApp webhook wired in this repo — routes are `/chat` and a password-gated `/test` sandbox page; WhatsApp is the stated product target (package description, `docs/Ações do bot para centralizar os atendimentos pelo Whatsapp..docx`).
  - **Agent / tool-calling architecture:** yes — same Orchestrator + skills-registry pattern as `chatbot-doutor-sofa`: skills `consultar-catalogo`, `consultar-preco`, `montar-pedido`, plus `conversation-state`, prompt sanitizer, `utils/pii-filter.ts`, and multimodal input (`media/image-encoder.ts` for vision, `media/audio-transcriber.ts`).
- **Category:** AI & LLM
- **Client:** CR Vendas
- **Last commit:** 2026-03-28 | **Commits:** 2 | **Status:** active by date, but only 2 commits and a pre-sales `proposta-comercial` in `docs/` — reads as an early/pilot build
- **Portfolio:** no — architecturally a near-duplicate of `chatbot-doutor-sofa` with fewer commits and no live channel integration; `chatbot-doutor-sofa` is the stronger version of the same story. Also contains a 175 MB WhatsApp `msgstore-*.db.crypt14` export and a client PDF catalog in `docs/` (sensitive, do not surface).
- **Metrics:** none stated.

---

### databridgehubapp
- **Purpose:** Static marketing/landing site at `databridgehub.app` for "Data Bridge Hub App — WebApp Data Connector to easily access several api services", including `callback/`, `privacy-police/` and `terms-of-service/` pages (the shape required for third-party API/OAuth app verification).
- **Stack:** Static HTML/CSS/JS from a purchased/free HTML template (`vendor/`, `assets/`, WOW.js animations), custom domain via `CNAME` (`databridgehub.app`). No build system, no backend code in the repo.
- **Category:** Web / App
- **Client:** self / own product
- **Last commit:** 2023-09-29 | **Commits:** 52 | **Status:** abandoned (no commits in ~2.8 years)
- **Portfolio:** no — the page body is still largely unmodified template lorem-ipsum text; there is no application code here, only a landing shell.
- **Metrics:** none stated.

---

### eric-nuvemshop-ecomm
- **Purpose:** Pre-sales / discovery material for a Nuvemshop (Tiendanube) e-commerce store build: platform research, an HTML client briefing form, a pricing/scoping points matrix, and a sample proposal.
- **Stack:** Not a codebase — Markdown docs plus one standalone HTML briefing form (`form/briefing-nuvemshop.html`). Target platform researched: Nuvemshop/Tiendanube. A `.env` file is present.
- **Category:** Web / App
- **Client:** "Eric" (prospect; full name not stated in repo)
- **Last commit:** n/a (**not a git repository** — no `.git/`) | **Commits:** unknown | **Status:** unknown; docs are dated jul/2026, so recent but pre-sales only
- **Portfolio:** no — sales collateral and market research, no delivered work product.
- **Metrics:** none as outcomes. Literal figures stated in `matriz-orcamento.md` / `research-nuvemshop.md` (internal pricing research, not achievements): proposed project price band R$ 3.000–R$ 7.000; Nuvemshop plan prices Impulso R$ 164/mês and Escala R$ 449/mês; platform per-sale fee 0,7%–2% if Nuvem Pago is not used.

---

### filterbuy-data-engineering
- **Purpose:** Umbrella repo holding four Filterbuy data-engineering projects: an Amazon Ads bid optimizer (AWS Lambda), a Slack message retrieval/analysis tool, a Facebook transfer scheduler, and a shared engineering toolkit.
- **Stack:** Python; `boto3`, `redshift-connector`, `pandas`, `pyarrow`, `python-dotenv`, `slack-sdk`, `google-api-python-client` / `google-auth*`. AWS Lambda + Amazon Redshift + S3; Google Docs API integration in the toolkit; shared `venv/` at repo root. No Dockerfile, no CI workflows.
- **Category:** Data Engineering / ETL
- **Client:** Filterbuy (employer)
- **Last commit:** 2025-11-12 | **Commits:** 2 | **Status:** complete/dormant (last commit ~8.5 months before 2026-07-29)
- **Portfolio:** partial — the `amazon_bids_optimizer` sub-project is the portfolio-worthy piece (serverless Redshift→bid-optimization→Amazon Ads bulksheet pipeline, MarTech/advertising angle). The repo as a whole is an internal employer monorepo with credentials and `venv/` committed, so it cannot be published as-is; extract and sanitize the bid optimizer instead.
- **Metrics:** none stated. (README describes outputs: two CSVs per execution — an Amazon Ads bulksheet plus a dashboard dataset — but no volumes, spend, or performance figures.)

---

### forneria-crm-sns
- **Purpose:** B2C segmentation CRM for Forneria Luce — dynamic customer segments over BigQuery, WhatsApp campaign dispatch via ChatGuru, 5-day conversion attribution, and LGPD compliance (opt-out, consent, deletion/anonymization, audit log).
- **Stack:** TypeScript full-stack. Backend: Node ≥20, Express 4, `@google-cloud/bigquery`, `@google-cloud/firestore`, `@google-cloud/tasks`, `jsonwebtoken`, Zod, Pino, Helmet, `express-rate-limit`; frontend: React 18 + Vite 6 + TailwindCSS + React Router + `lucide-react`; tests with Vitest + Supertest + Testing Library. Infra: Docker, Cloud Build, Cloud Run YAML and BigQuery `crm` DDL under `infra/`; GitHub Actions `ci.yml` + `deploy.yml`. Backend modules: `segments` (nested boolean AST compiled to parameterized BigQuery SQL), `campaigns`, `dispatch`, `chatguru`, `lgpd`, `coupons`, `reports`, `security`, `repositories` (with mock repos for credential-free local dev).
- **Category:** Data Engineering / ETL (with strong MarTech & Advertising and Web/App components — a segmentation + campaign platform)
- **Client:** Forneria Luce
- **Last commit:** 2026-07-28 | **Commits:** 167 | **Status:** active (most recent repo in the batch; CLAUDE.md says "Implemented — pre-production", remaining go-live work tracked in `PRODUCTION_CHECKLIST.md`)
- **Portfolio:** yes — the flagship of this batch. Real full-stack product: boolean segment AST → parameterized BigQuery SQL, idempotent per-recipient campaign dispatch with dry-run and test-redirect safety modes, fixed-window revenue attribution, and LGPD compliance enforced at both preview and send time. Substantial commit history and a real test suite.
  Note: `README.md` is stale (still says "apenas a proposta comercial… ainda não há código de aplicação"); `CLAUDE.md` is the accurate status. A `.env` (7.3 KB) is in the working tree.
- **Metrics:** literal facts stated in `CLAUDE.md`: all 11 modules (`implementation-prompts/01`–`11`) built out; **29 test files / 259 tests**. Attribution window: fixed 5 calendar days. No business outcome metrics stated (not yet in production).

---

### forneria-ecomm
- **Purpose:** unknown — directory is **empty** (no files, no `.git/`).
- **Stack:** unknown
- **Category:** unknown (name suggests a Forneria Luce e-commerce effort, but there is no evidence in the directory)
- **Client:** unknown (name suggests Forneria Luce)
- **Last commit:** n/a (not a git repository) | **Commits:** unknown | **Status:** unknown / placeholder
- **Portfolio:** no — nothing exists.
- **Metrics:** none stated.


<!-- ===== batch B6 ===== -->

# Repo Inventory — Batch B6

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/myGit/`
Audit date: 2026-07-29. "Status: active" = last commit within 6 months of 2026-07-29 (i.e. on/after 2026-01-29).

---

### forneria-ops
- **Purpose:** Single authenticated entry point ("application gate") in front of every Forneria Luce internal app behind the rt-analytica load balancer — one login, an app selector showing only permitted apps, and cross-app SSO so downstream apps need no second login.
- **Stack:** Python 3.11, FastAPI, Uvicorn, Starlette SessionMiddleware (itsdangerous), PyJWT (HS256 cross-app SSO token), argon2-cffi password hashing, Pydantic v2 / pydantic-settings, structlog, google-cloud-secret-manager; pytest + httpx; Docker (python:3.11-slim); Cloud Build → Artifact Registry → Cloud Run (GCP project `chatbot-forneria-luce`, region `southamerica-east1`), served via a serverless NEG on an HTTPS load balancer at `fornerialuce.rt-analytica.com`.
- **Category:** Web / App
- **Client:** Forneria Luce (consulting client; hosted under rt-analytica / rodtex.dev infra)
- **Last commit:** 2026-05-29 | **Commits:** 3 | **Status:** active
- **Portfolio:** yes — real deployed auth/SSO infrastructure for a paying client; clean documented architecture (docs on authentication, SSO design, deployment, downstream-app integration) and an offline test suite. Demonstrates security + cloud infra work, not just UI.
- **Metrics:** none stated

### forneria-pcp-app
- **Purpose:** Specification/proposal repo for a web-based PCP (Planejamento e Controle de Produção — production planning & control) platform for Forneria Luce, driven by the Bling ERP API v3 as source of truth. Planning phase only — no application code.
- **Stack:** No code. Intended stack per `docs/IMPLEMENTATION_PLAN.md`: React + TypeScript + Vite + Tailwind-style design system + Lucide; Node.js + TypeScript backend (mandatory, intermediates all Bling calls); PostgreSQL preferred; Bling API v3 over OAuth 2.0 with scheduled sync workers; Cloud Run hosting; Secret Manager; PDF + Excel exports. Present artifacts: `Forneria_Luce_Especificacao_PCP.pdf` (functional spec v1.0, PT-BR), `docs/IMPLEMENTATION_PLAN.md`, `docs/PROPOSTA.html` / `.pdf` (commercial proposal with HTML mockups), `docs/mockup/`.
- **Category:** Web / App
- **Client:** Forneria Luce (explicitly labeled a consulting project, not a Filterbuy property)
- **Last commit:** unknown (not a git repository — no `.git`) | **Commits:** unknown | **Status:** experimental (documented as "planning phase — no code yet")
- **Portfolio:** no — no implementation exists; only spec and commercial proposal documents. Could support a "scoping/solution design" narrative but has nothing to demo.
- **Metrics:** none stated

### git-history-of-the-church
- **Purpose:** A single self-contained `index.html` that teaches both the history of Christian schisms and how Git works, using the Git branching model as the unifying metaphor; trilingual (EN / PT-BR / ES).
- **Stack:** Vanilla HTML/CSS/JS in one ~244 KB file (~2540 lines). No build, no dependencies, no package.json. Hand-built SVG git-graph rendered in JS, IntersectionObserver-driven progressive reveal and panning, custom i18n engine (107 keys, dictionaries for PT/ES, `localStorage['cg-lang']`), collapsible sticky mobile graph band. Only external request is Google Fonts (Cinzel / Lora / JetBrains Mono).
- **Category:** Experiment / Learning
- **Client:** Personal (author Rodrigo Teixeira <hello@rodtex.dev>)
- **Last commit:** unknown (not a git repository — no `.git`; its repo-context notes the parent monorepo has no commits) | **Commits:** unknown | **Status:** unknown — repo-context states "Last Updated: 2026-06-14 — built from scratch"
- **Portfolio:** yes — highly visual, self-contained, zero-dependency interactive piece that showcases frontend craft (SVG data-viz, scroll choreography, i18n, responsive design) and is trivially hostable next to rodtex.dev. Caveat: religious subject matter may not fit every audience.
- **Metrics:** stated in repo-context: ~2540 lines / ~250 KB single file; 107 i18n keys; 22 commit nodes in the SVG graph; 3 languages; responsive breakpoints at 1060px and 640px.

### google-ads-automation
- **Purpose:** Collection of Google Ads Scripts to automate daily campaign management routines (per README: "Scripts in JS and Python to automate campaign daily routines").
- **Stack:** JavaScript (Google Ads Scripts) — 14 files including `247_autobidding.js`, `masterNKW.js`, `performance_heatmap.js`, `custom_audience_building.js`, `broken_urls.js`, `low_quality-score_keywords.js`, and rule scripts (1st-page bid, 6-week flight, quality score, match share, 1P/3P audiences, responsive ads). The `Python/` directory is empty.
- **Category:** MarTech & Advertising
- **Client:** unknown (no client named in repo)
- **Last commit:** 2023-12-27 | **Commits:** 2 | **Status:** abandoned
- **Portfolio:** no — dormant since 2023, 2 commits, README is one line, and the advertised Python half is empty. The JS scripts could be mined as evidence of paid-media automation experience for CV bullet points, but the repo itself is not presentable.
- **Metrics:** none stated

### gpt_sentiment_analysis
- **Purpose:** Single-script experiment that sends Portuguese customer-complaint texts (telecom/ANATEL-style complaints) to the OpenAI chat-completions API with a structured prompt, asking for sentiment class, listed feelings with 0-100 intensity, contributing keywords, possible reasons and a justification, returned as JSON.
- **Stack:** Python 3.10 (Pipfile, no declared packages), `requests`, OpenAI `/v1/chat/completions` REST API called directly; `prompt.txt` holds the templated prompt, `sample.json` a sample response, plus `curl_test_files`.
- **Category:** AI & LLM
- **Client:** unknown (sample data references TIM / ANATEL complaints; no client stated)
- **Last commit:** 2023-07-25 | **Commits:** 1 | **Status:** abandoned
- **Portfolio:** no — single-commit throwaway script with hardcoded messages, no repo structure or docs. NOTE: a live-looking OpenAI API key is hardcoded in `sentiment_analysis.py` (line 5) — it should be revoked/scrubbed before this repo is ever published.
- **Metrics:** none stated

### historias-de-colo-app
- **Purpose:** *Histórias de Colo* — a PWA that turns a scanned physical children's book into a sound-designed audiobook narrated in cloned family voices (vovó/papai/mamãe); recordings are training material for voice cloning + TTS, not playback audio. Currently a directory skeleton plus a complete architectural blueprint — no implementation code.
- **Stack:** Planned/scaffolded monorepo per `PROJECT_BLUEPRINT.md` and `README.md`: `packages/shared` (domain types + versioned playback manifest contract), `packages/providers` (swappable adapters for ocr / analyzer / voice / sound / render), `apps/web` (React + Vite PWA), `functions/` (Cloud Functions gen 2 pipeline orchestration), `services/renderer` (Cloud Run job, FFmpeg + batch synthesis); Firebase/GCP hosting. Pipeline: capture → OCR → human text review → multimodal-LLM story analysis → character/voice assignment → narration synthesis → sound design → mix/manifest → player. A `graphify-out/` knowledge graph exists.
- **Category:** AI & LLM
- **Client:** Personal / unknown
- **Last commit:** unknown (not a git repository — no `.git`) | **Commits:** unknown | **Status:** experimental (README and CLAUDE.md both state "pre-implementation"; all source dirs contain only `.gitkeep`, 57 files total, docs and READMEs only)
- **Portfolio:** no — nothing is built. The blueprint is strong and could later become a flagship AI project, but today there is no running code, no git history, and no deployment.
- **Metrics:** none stated

### hoshinsul-salto-app
- **Purpose:** "Salto Hoshinsul" — scoring & ranking web app for the jump events (Salto em Altura / Salto em Distância) of a Hoshinsul martial-arts championship, replacing two hand-maintained Word documents with a register → score → rank → display flow, including a controls-free TV standings board with auto-rotate carousel.
- **Stack:** React 18 + Vite 5 + TypeScript 5 + Tailwind 3; Firebase 11 (Google Auth, Firestore, Hosting) with fail-closed email-based 3-way roles (superadmin/operator/viewer) enforced in `firestore.rules`; React Hook Form + Zod; Vitest + `@firebase/rules-unit-testing` (rules tests via Firestore emulator); ESLint 9 flat config; `firebase-admin` + `tsx` admin scripts (`setRoles`); GitHub Actions `ci.yml`.
- **Category:** Web / App
- **Client:** Hoshinsul (martial-arts championship organization)
- **Last commit:** 2026-06-04 | **Commits:** 2 | **Status:** active
- **Portfolio:** yes (secondary) — real client app with tested security rules and role-based access. Weaker standalone than `hoshinsul-webapp` (deliberately simpler, no live URL stated, only 2 commits); best presented together with the other two Hoshinsul apps as one "tournament platform" case study.
- **Metrics:** none stated

### hoshinsul-switching-app
- **Purpose:** "Chaves Hoshinsul" — automatic matchmaking/bracket app for Hoshinsul tournaments: athlete registry with check-in, filters by range/faixa, gender and age group, automatic bracket generation persisted to Firestore, per-tab screens (Chaves / Atletas / Display / Torneios / Sistema) and a read-only display view.
- **Stack:** React 18 + Vite + TypeScript + Tailwind 3; Firebase 11 (Google Auth, Firestore, Hosting) with multi-user fail-closed roles from `roles/current` + `userRoles/{uid}` and a superadmin admin panel; React Router 6, React Hook Form + Zod, lodash.debounce; Vitest + `@firebase/rules-unit-testing` rules tests; `firebase-admin` + `tsx` scripts; GitHub Actions workflows; ESLint 9. Largest single component is `src/App.tsx` (~36.6 KB) alongside `src/screens/`, `src/components/`, `src/auth/`, `src/data/`.
- **Category:** Web / App
- **Client:** Hoshinsul (tournament organization)
- **Last commit:** 2026-06-04 | **Commits:** 5 | **Status:** active
- **Portfolio:** yes (secondary) — genuine domain logic (automatic bracket generation) plus role-based auth and tested Firestore rules. No live URL stated in the README; present as part of the combined Hoshinsul case study. Housekeeping flag: a Firebase admin SDK service-account JSON (`hoshinsul-switching-app-firebase-adminsdk-fbsvc-*.json`) sits at the repo root and must not be published.
- **Metrics:** none stated

### hoshinsul-webapp
- **Purpose:** "Avaliação Hoshinsul" — tournament scoring web app for the FMHI Hapkido federation, replacing an Excel-based judging workflow: an operator manages athletes and rounds, three referees score from their own devices, and a public TV view shows the live result.
- **Stack:** React 18 + Vite + TypeScript + Tailwind CSS; Firebase Auth (Google + Anonymous), Firestore, Firebase Hosting on the **Spark (free) plan**; React Router 6, React Hook Form + Zod; `firebase-admin` + `tsx` admin scripts; Vitest + `@firebase/rules-unit-testing` for security-rules tests (7.4 KB `firestore.rules`); Node 20.x.
- **Category:** Web / App
- **Client:** FMHI Hapkido federation / Hoshinsul
- **Last commit:** 2026-05-22 | **Commits:** 4 | **Status:** active
- **Portfolio:** yes — the strongest of the three Hoshinsul apps: it is **live at https://avaliacao-hoshinsul.web.app**, has a clear before/after story (replaced an Excel judging workflow — the source `AVALIAÇÃO HOSHINSUL — Campeonato.xlsx` is in the repo), multi-device real-time scoring, a public display mode, and tested security rules on a deliberately zero-cost free-tier footprint.
- **Metrics:** stated in README: live URL `https://avaliacao-hoshinsul.web.app`; GCP project `hoshinsul-webapp` (org `rodtex.dev`); Firebase Spark free plan; three referees scoring concurrently; built against Node 20.20.

### inbox-bridge
- **Purpose:** WhatsApp Business inbox platform — receives Meta Cloud API webhooks, optionally forwards messages to an external bot, and lets human agents take over via a real-time dashboard; conversation lifecycle is an explicit state machine with handoff.
- **Stack:** Fastify 4 + TypeScript (ESM) API with `@fastify/cookie|cors|helmet|multipart|rate-limit|static`; PostgreSQL + Drizzle ORM with SQL migrations (`src/db/migrations/`); Socket.IO 4 real-time with JWT on handshake; Zod-validated config; bcrypt + jsonwebtoken auth (httpOnly cookies for the dashboard, API-key headers for the bot API); pino logging; Google Cloud Storage for media; React 18 + Vite + Tailwind + TanStack Query + Zustand frontend in `web/` served as a static SPA from Fastify; Vitest tests; Docker + docker-compose; GitHub Actions `ci.yml` + `deploy.yml` → Cloud Run (`us-east1`, Artifact Registry). Routes include `webhook.ts`, `dashboard.ts` (27 KB), `auth.ts`, `bot-api.ts`, `account-setup.ts`, `meta-callbacks.ts`; services include `whatsapp.ts`, `bot-forwarder.ts`, `conversation.ts`, `media.ts`, `session.ts`, `meta-signup.ts`.
- **Category:** Web / App
- **Client:** Forneria Luce was the live account during the test phase (per repo-context); product itself is Rodrigo's (domain `inbox-bridge.com`)
- **Last commit:** 2026-04-02 | **Commits:** 30 | **Status:** active by commit date (within 6 months), but the repo's own context declares the project **POSTPONED — cloud infra deleted 2026-07-18** (GCP project `inbox-bridge` deleted; undelete window until ~2026-08-17; `deploy.yml` now targets a dead project). Treat as postponed/complete-but-offline.
- **Portfolio:** yes — by far the most substantial engineering artifact in this batch: 30 commits, a full production stack (Meta Cloud API webhooks, Postgres/Drizzle, Socket.IO, JWT auth, GCS media, Cloud Run CI/CD, Vitest tests) and unusually thorough documentation. Must be presented as a case study / architecture write-up rather than a live demo, since the infra was torn down. Housekeeping flag: a GCP service-account JSON (`inbox-bridge-fe768cb903b0.json`) and a `.env` sit at the repo root.
- **Metrics:** stated in repo-context: GCP project deleted 2026-07-18 (test phase, no data retained); undelete window until ~2026-08-17; media bucket `inbox-bridge-media`; region `us-east1`; domain `inbox-bridge.com` registered externally.

### leticialacava_cv
- **Purpose:** Personal portfolio/CV website for Leticia La Cava, "Data Analytics & Visualization Consultant", built to attract freelance clients; deployed to the custom domain `leticialacava.me`.
- **Stack:** Single-file static site — `index.html` (151 KB) with no build system; custom domain via `CNAME` (`leticialacava.me`); GitHub Actions `deploy.yml` (690 B) for deployment; supporting `docs/context.md` (12.7 KB professional context doc sourced from her CV and profiles), `mockups/`, source CV PDF and photo.
- **Category:** Web / App
- **Client:** Leticia La Cava (individual client)
- **Last commit:** 2026-02-14 | **Commits:** 8 | **Status:** active (last commit within 6 months of 2026-07-29) — effectively complete/delivered
- **Portfolio:** yes (secondary) — a delivered, domain-mapped client website that mirrors the rodtex.dev approach; good evidence of client-facing web delivery. Modest technically (one hand-written HTML file), so use it as a supporting item rather than a headline project. Note: contains a client's personal contact details (email/phone) in `docs/context.md` — do not surface those.
- **Metrics:** none stated
- **PII flag:** `docs/context.md` and `.env` contain the client's personal email/phone.

### llm_engineering_course
- **Purpose:** Local working copy of Ed Donner's public "LLM Engineering — Master AI and LLMs" 8-week course (weeks 1-8 notebooks plus extras: trading, agents, knowledge-base/RAG, community contributions). Learning material, not original work.
- **Stack:** Python (conda `environment.yml` + `requirements.txt`), Jupyter notebooks across `week1/`–`week8/` and `extras/`; includes `diagnostics.py`, C++ files (`optimized.cpp`, `simple.cpp`) from the week-4 performance exercise, and setup guides for mac/PC/linux.
- **Category:** Experiment / Learning
- **Client:** N/A (third-party course, MIT-licensed, by Ed Donner)
- **Last commit:** 2025-03-29 | **Commits:** 612 | **Status:** abandoned (last commit 2025-03-29; commits are upstream authors' — top committers are Ed Donner (187 + 114), Kevin Bogusch, Zoya Hammad, codenigma1)
- **Portfolio:** no — this is a **clone of `https://github.com/ed-donner/llm_engineering.git`**; the git history belongs to upstream contributors, not to Rodrigo. It is evidence of LLM training/upskilling for a CV "continuing education" line only. Note: the outer `llm_engineering_course/` folder has no `.git`; the git repo is the nested `llm_engineering/` directory.
- **Metrics:** 612 commits upstream (not authored by Rodrigo); 8-week course structure. No personally-authored metrics stated.

---

## Batch notes / caveats
- Four entries have **no git repository at all** (`forneria-pcp-app`, `git-history-of-the-church`, `historias-de-colo-app`, and the outer `llm_engineering_course` folder) — last commit and commit counts are therefore "unknown", not zero.
- Commit counts here are raw `git rev-list --count HEAD` values and are low for several real projects (2-5), which reflects squashed/large-batch committing rather than project size — do not use commit count as a proxy for effort.
- Secrets/PII spotted (do not publish as-is): hardcoded OpenAI key in `gpt_sentiment_analysis/sentiment_analysis.py`; Firebase admin service-account JSON in `hoshinsul-switching-app/`; GCP service-account JSON in `inbox-bridge/`; client contact details in `leticialacava_cv/docs/context.md`.


<!-- ===== batch B7 ===== -->

# Repo Inventory — Batch B7

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/myGit/`
Audit date: 2026-07-29. "Active" = last commit within 6 months (i.e. on/after 2026-01-29).

---

### mediamixmodel
- **Purpose:** Media Mix Model project scaffold — repo contains only a one-line README ("# Media Mix Model"), a Python/Jupyter `.gitignore`, and an (empty locally) `data_sources/` folder. No modeling code exists.
- **Stack:** No manifests, no source files. `.gitignore` is a Python/Jupyter/venv template, implying an intended Python + Jupyter stack. **MMM framework: none present — not Meridian, not Robyn, not PyMC, no custom Bayesian code. Optimization method: none present.**
- **Category:** Experiment / Learning
- **Client:** unknown (remote is `git@github.com:chagasrennan/mediamixmodel.git` — a third-party GitHub account, `chagasrennan`, not one of Rodrigo's known accounts)
- **Last commit:** 2025-03-31 | **Commits:** 2 | **Status:** abandoned
- **Portfolio:** no — empty scaffold with zero implementation; nothing to show.
- **Metrics:** none stated. (Only tracked files ever: `.gitignore`, `README.md`, `data_sources/test_data_synthetic.csv` — commit message "Inclusion of data source 1 - Synthetic Data Set".)

---

### opticodes_webpage
- **Purpose:** Marketing website for "OptiCode Solutions", a consultancy brand, served at `opticodesolutions.dev`.
- **Stack:** Static HTML/CSS/JS from a purchased/adapted theme ("Theme Name: OptiCode Solutions"), with `css/`, `js/`, `lib/`, `img/`, `portfolio/`, and a `contactform/` directory. Single 43 KB `index.html`. CNAME `opticodesolutions.dev`. No build system, no package manager.
- **Category:** Web / App
- **Client:** OptiCode Solutions (own venture/brand)
- **Last commit:** 2023-10-01 | **Commits:** 33 | **Status:** abandoned
- **Portfolio:** no — theme-based static brochure site, superseded by rt-analytica; little original engineering to demonstrate.
- **Metrics:** none stated.

---

### rodtex_cv
- **Purpose:** Personal portfolio/CV website for Rodrigo Teixeira, hosted on GitHub Pages at `rodtex.dev`.
- **Stack:** Static HTML/CSS/JS, no build step. Bootstrap 5, AOS (animate-on-scroll), Font Awesome 5, `marked.js` for markdown rendering. Custom `scripts/` (`scroller.js`, `ageCalculator.js`, `navigate.js`, `markdownRender_*.js`). Google Tag Manager (GTM-W9TNNNGR) on every page. Formspree contact form. Jekyll `_config.yml` + CNAME `rodtex.dev`. Sub-pages under `portfolio/` include `callback/`, `privacy_policy/`, `terms_of_service/` for OAuth app compliance.
- **Category:** Web / App
- **Client:** self (personal)
- **Last commit:** 2026-05-04 | **Commits:** 59 | **Status:** active
- **Portfolio:** no — it *is* the portfolio site itself, not a portfolio item.
- **Metrics:** none stated.

---

### roteirizador-forneria-luce
- **Purpose:** Delivery route optimizer for Forneria Luce (bakery/confectionery, Rio de Janeiro) — pulls daily orders from the Bling ERP API v3, classifies delivery addresses by CEP into zones, packs routes, and exports printable route sheets (CSV/XLSX/PDF).
- **Stack:** TypeScript + Express (Node >=20, ESM), `tsx`/`tsc`, Firestore cache (`@google-cloud/firestore`), GCP Secret Manager, `axios`, `exceljs`, `pdfkit`, `jsonwebtoken`, cookie-signed auth sessions. Multi-stage Dockerfile → Cloud Run (project `chatbot-forneria-luce`, region `southamerica-east1`). Vanilla-HTML SPA frontend with self-hosted fonts and a strict CSP. Routing logic is a **custom heuristic packer** (3-tier CEP→zone classifier: prefix → bairro name → numeric proximity; then time-slot ordering morning/flex/afternoon) — not a solver library.
- **Category:** Automation & Tooling
- **Client:** Forneria Luce (bakery/confectionery, Rio de Janeiro) — served via `fornerialuce.rt-analytica.com/roteirizador/`
- **Last commit:** 2026-05-30 | **Commits:** 8 | **Status:** active
- **Portfolio:** yes — real production client system on Cloud Run with a concrete business outcome (replaced a Google Sheets + Apps Script workflow), a non-trivial domain algorithm, and a documented risk register.
- **Metrics:** Literal stated facts from README: routes packed to **≤12 orders each** (hard limit, "was 10; bumped in commit `5912c6b`"); **~80-entry** zona/bairro/CEP-prefix table; Bling rate limiting = **350 ms** minimum between request starts with **concurrency=5** worker pool yielding **~2.85 req/s**; Firestore cache hit serves in **~0.5s**; Cloud Run request timeout **120 s**; morning slots = positions 1-6, afternoon = positions 7-12.

---

### rt-analytica
- **Purpose:** Marketing landing site for the "rt analytica" consultancy brand (custom software, automation & data solutions), live at `rt-analytica.com`.
- **Stack:** Static site — HTML, CSS, vanilla JS. No build step, no dependencies. GitHub Pages, CNAME `rt-analytica.com`. Bilingual PT-BR (default) + EN. Google Fonts (Inter, JetBrains Mono). Pages: `index.html`, `billing.html`, `privacy-policy.html`, `terms-of-service.html`. Also carries `brand-strategy.md` and `pretext-thread-summary.md`.
- **Category:** Web / App
- **Client:** rt analytica (own consultancy brand). Client logos present in `img/clients/`: adagio, doutor-sofa, forneria-luce, nexus.
- **Last commit:** 2026-03-30 | **Commits:** 4 | **Status:** active
- **Portfolio:** no — it is the consultancy's own marketing site; useful as a link/credential, not as an engineering sample.
- **Metrics:** none stated. Stated service lines: WhatsApp AI chatbots, data & web automations, business intelligence dashboards, data pipelines & integrations.

---

### rt-analytica-hub
- **Purpose:** Internal HTML hosting service at `hub.rt-analytica.com` — upload a folder, a single `.html`, or a `.zip` and it is published at `hub.rt-analytica.com/<slug>` with title, description, tags, and a custom or auto-generated slug; bundles can be Public or SSO-Private.
- **Stack:** FastAPI backend (single container also serving the built SPA) + React + Vite + Tailwind frontend (`pages/Dashboard.tsx`, `pages/Publish.tsx`). Google OAuth in-app auth gated to `rodrigo@rodtex.dev`. Firestore (`hub-db`) for bundle metadata, GCS bucket `rt-analytica-hub-bundles` (private; app streams files). Terraform in `infra/terraform/` (google provider 6.50.0): bucket, Firestore, Artifact Registry, service account + IAM, Secret Manager, global external ALB with static IP + managed cert + serverless NEG → Cloud Run. GitHub Actions `ci.yml`. Docker. GCP project `rt-analytica-main` (`us-east1`). Also carries a `graphify-out/` knowledge graph.
- **Category:** Web / App
- **Client:** rt analytica (internal tooling)
- **Last commit:** 2026-06-04 | **Commits:** 7 | **Status:** active
- **Portfolio:** yes — full-stack + IaC breadth in one repo (FastAPI, React/Vite/Tailwind, OAuth, GCS, Firestore, Terraform-provisioned load balancer, Cloud Run, CI). Caveat: an OAuth `client_secret_*.json` file is committed at repo root and would need removal before sharing.
- **Metrics:** Literal stated facts: bundle size **capped at ~30 MB total** (Cloud Run rejects HTTP/1 requests over that limit).

---

### rt-analytics-alerts-bot
- **Purpose:** Personal Telegram alert bot — ingests events from GCP and other sources, normalizes them into a common internal alert model, filters and dedupes, and sends concise direct messages to a single Telegram chat.
- **Stack:** Python 3.12, FastAPI, Uvicorn, Pydantic v2 + pydantic-settings, httpx, google-auth, google-cloud-secret-manager, structlog + python-json-logger. Cloud Run, Docker, GitHub Actions (`ci.yml`, `deploy.yml`), Telegram Bot API, GCP Pub/Sub, GCP Secret Manager. Ruff + mypy + pytest/pytest-asyncio/respx. Layered `app/` layout: `api/routes`, `core` (config, dedupe, logging, models, rules), `integrations/{gcp,email}`, `services`.
- **Category:** Automation & Tooling
- **Client:** self (personal ops)
- **Last commit:** 2026-05-12 | **Commits:** 4 | **Status:** active
- **Portfolio:** yes — clean, well-documented cloud-native service (Pub/Sub push with OIDC bearer auth, webhook secret auth, rules engine with TTL dedupe and quiet hours, CI/CD to Cloud Run). Modest in size but a tidy showcase of production hygiene. **Not agentic/LLM — no LLM, no tool-calling, no MCP; it is a plain event-normalization and notification service.**
- **Metrics:** Literal stated facts: severity levels `critical | high | medium | low | info`; endpoints `/health`, `/readyz`, `/webhooks/gcp/pubsub`, `/webhooks/gcp/generic`, `/webhooks/email` (v2, disabled, returns 503), `/telegram/webhook`. No test count or volume figure stated.

---

### rt-code-assistant
- **Purpose:** A daemon running on the author's Mac that lets him drive **Claude Code** and **Codex** — and run shell commands — from a Telegram chat on his phone, without exposing the Mac to the internet.
- **Stack:** Python 3.12, `python-telegram-bot` (>=21), pydantic-settings, python-json-logger; pytest/pytest-asyncio, ruff. Runs under macOS `launchd` LaunchAgent + `caffeinate`. `app/` modules: `router.py` (15.8 KB), `approvals.py`, `auth.py`, `redact.py`, `state.py`, `telegram_io.py`, `paths.py`, and `runners/` (`agents.py`, `shell.py`, `background.py`, `base.py`).
- **Agent architecture:** **CLI-agent orchestration, not MCP and not in-process tool-calling.** The bot is an *outbound controller* that shells out to external coding agents (Claude Code and Codex) via a runner layer, with **human-in-the-loop approval**: agents run read-only first and escalate to writes only when the user taps an inline Telegram approve button. Transport is **Telegram long polling (`getUpdates`) — outbound HTTPS only**, no port forwarding, no public URL, no inbound listener (stated as a hard invariant). Safety layers: numeric-user-id allowlist checked on every update (fail-closed), human approval gate, and blast-radius limits (confinement to active project dir, per-command timeouts, output truncation, `drop_pending_updates` on restart, shell denylist, secret-redaction filter on all outbound text). Phase 7 (kernel sandbox + egress allowlist) is documented but not built.
- **Category:** AI & LLM
- **Client:** self (personal tooling)
- **Last commit:** 2026-07-06 | **Commits:** 5 | **Status:** active
- **Portfolio:** yes — strongest AI/agent-tooling narrative in this batch: a genuinely interesting security-first design (no inbound surface), explicit risk register, human-in-the-loop approvals, and documented phased delivery. Would need `.env`/secret scrubbing before sharing.
- **Metrics:** Literal stated facts: **"132 tests, ruff clean"**; status "v1 working. Phases 0–6 are built and shipped"; remaining work is "Phase 7 — containment". Docs referenced: `docs/ARCHITECTURE.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/RISK_TRACEABILITY.md`, `docs/TELEGRAM_SETUP.md`, `docs/hardening/`.

---

### rt-stripe-setup
- **Purpose:** Stripe billing integration for two independent flows, both charged in BRL: (1) OpenRouter top-ups — poll balance, charge when below threshold (USD→BRL + 20% markup); (2) GCP monthly — aggregate BigQuery billing export (already BRL), apply 50% markup with a R$1,000 minimum.
- **Stack:** Python 3.9+, `stripe` SDK, google-cloud-bigquery / firestore / tasks / pubsub, Flask + gunicorn (webhook receiver), `resend` (email), httpx/requests, pydantic v2 + pydantic-settings, structlog. Ruff + mypy (strict) + pytest. Four Dockerfiles (`Dockerfile`, `.cloudrun`, `.email`, `.webhook`), docker-compose, Makefile. Deploy via Cloud Build (`cloudbuild.yaml`, `-email`, `-webhook`, `-weekly`) + `deploy/terraform/`. GitHub Actions `build-images.yml`. Modules include `fx.py`, `markup.py`, `stripe_charges.py` (18.6 KB), `invoice_economics.py`, `firestore_state.py`, `nf_scheduler.py`, `email_nf.py`, `alerts.py`, plus `jobs/` (`poll_openrouter_topup.py`, `run_gcp_monthly.py`, `run_weekly_billing.py` 18.5 KB) and `api/` (`billing.py`, `nf_email_app.py`).
- **Category:** Automation & Tooling
- **Client:** rt analytica (own billing operations, charging clients for pass-through OpenRouter and GCP costs)
- **Last commit:** 2026-07-20 | **Commits:** 21 | **Status:** active (most recently touched repo in this batch)
- **Portfolio:** yes, with redaction — genuinely production-grade billing code: explicit idempotency-key design, FX-rate sourcing with fallback, markup/minimum rules, PaymentIntent-vs-Invoice modeling rationale, strict mypy, mocked test suite, multi-service Cloud Build deploys. Caveat: it exposes his own client pricing/markup structure and a 4.7 KB `.env`, so it can only be shown redacted or discussed verbally.
- **Metrics:** Literal stated facts: **54 tests, all mocked**; OpenRouter markup **20%**, no fixed fee, no minimum (example: `$50 × 5.50 = R$275 → +20% = R$330`); GCP markup **50%** with **R$1,000 minimum** (examples: `R$2,000 → R$3,000`; `R$200 → R$300 → min R$1,000`); OpenRouter poll interval default **300s**; idempotency keys `openrouter_topup_{customer}_{time_bucket}` and `gcp_monthly_{customer}_{YYYY-MM}`.

---

### rt_assistent
- **Purpose:** Personal "daily briefing" assistant workspace — a set of Claude Code skills (`/daily-work-log`, `/llm-delegate`, `/repo-context`) that pull from Gmail, Slack and other work surfaces to generate daily work logs and summaries, plus the accumulated output of running them.
- **Stack:** Python (an empty `src/__init__.py` is the only source file present locally; the skill instructions reference `src/integrations/gmail.py`, which is not on disk). Google API credentials in `config/token.json` + `config/google_credentials.json`; `.env` holds a `SLACK_BOT_TOKEN`. Content is mostly `.claude/skills/*/SKILL.md` markdown plus generated `thought/worklog/*.md` and `thought/daily/*.md` files, and a tutorial in `docs/` (md + html + pdf).
- **Category:** AI & LLM
- **Client:** self (personal productivity)
- **Last commit:** n/a — **not a git repository** (no `.git` directory) | **Commits:** n/a | **Status:** active (generated logs run through 2026-04-20; `.claude/` skills present)
- **Portfolio:** no — not version-controlled, integration source code is missing from the tree, and it contains live Slack/Google credentials. The `docs/tutorial-daily-summary-skills.md/.html/.pdf` write-up is the only shareable artifact (a ~400-line guide, "Building Your Own AI-Powered Daily Briefing").
- **Metrics:** none stated. Generated artifacts on disk: daily summaries and weekly work logs dated between 2026-02 and 2026-04.
- **Agent architecture note:** Claude Code **skill-based** (markdown SKILL.md instructions invoked as slash commands) with parallel data gathering across 4 sources; the `llm-delegate` skill delegates work to another LLM CLI (e.g. codex/aider) running in a tmux pane. No MCP server, no multi-agent framework.

---

### upwork
- **Purpose:** Container folder for Upwork client engagements. Not a repo itself. Holds two client folders:
  - **`Daniel Turner - Marketing Funnel Scoring`** (its own git repo, remote `https://github.com/strod/marketing-funnel-scoring.git`) — hospitality marketing funnel scoring system that evaluates marketing channel performance on a 0–1000 scale using four weighted components, generates AI recommendations via Claude Sonnet, and visualizes results in Looker Studio.
  - **`Michael - AdTech White-Label Layer DSP`** — contains only `docs/context/job-description.txt`; no code, not started.
- **Stack (Daniel Turner project):** Python 3.9, FastAPI + Uvicorn + Jinja2 (approval app), `anthropic` SDK 0.49.0 (Claude Sonnet for recommendation generation), google-cloud-bigquery, google-auth, google-cloud-secret-manager, itsdangerous + custom email/password auth with RBAC, Docker → Cloud Run. Data pipeline: Windsor.ai (6–11 sources) → BigQuery scheduled queries → `raw_metrics` → `channel_scores` → `stage_scores` → `brand_scores` (staging + MERGE pattern), then Looker Studio views. Cloud Function `cf_scoring` runs weekly.
- **Category:** Analytics & BI (with an AI & LLM recommendation layer)
- **Client:** Insourced Agency (Upwork, via Daniel Turner); pilot end-client **Hop Vietnamese** (6 venues, London & Manchester)
- **Last commit:** 2026-03-26 (Daniel Turner subfolder) | **Commits:** 18 | **Status:** active (parent `upwork/` folder is not a repo; the AdTech DSP folder is a job description only — not started)
- **Portfolio:** yes — the Marketing Funnel Scoring project is the strongest client-outcome story available: paying client, end-to-end pipeline (ingestion → BigQuery transforms → scoring engine → LLM recommendations → approval app → BI layer), with concrete numbers. Requires client permission and secret scrubbing (two OAuth `client_secret_*.json` files and a GCP service-account JSON are committed).
- **Metrics:** Literal stated facts (README, Milestone 1): **6/7 Windsor.ai data sources** flowing into BigQuery, **79,000+ raw rows**; **5 daily scheduled queries** producing **35,828 scoring-ready rows**; scoring engine **77 tests passing**; first run Brand Score **419.5**; **119 AI recommendations** generated across **6 venues** via Claude Sonnet; **10 Looker Studio views** deployed. From `docs/PROJECT-STATUS.md` (dated 2026-03-15, "verified against live BQ + gcloud + repo grep"): project **~90% complete** through Milestone 5 (partial); **11 channels** ingesting, **47,239 raw_metrics rows**, **9 stored procedures** active; **58 channel + 24 stage + 5 brand scores** for 1 period (2026-02-09 to 2026-03-08); **339 draft recommendations (338 approved, 1 rejected, 338 live)**; approval app on Cloud Run revision **00016-mx7**; all **10 BQ views** return data, dashboard build not started. Scoring scale: **0–1000, four weighted components**.

---

### workana-geomap
- **Purpose:** Commercial proposal + technical validation for a Power BI geographic dashboard that cross-references Pipedrive leads/quotes against real logistics delivery routes — to spot load-consolidation opportunities, cut logistics cost on under-filled routes, and steer commercial effort toward high-demand/low-coverage regions.
- **Stack:** No code. Three markdown documents only: `context/rodrigo_context.md`, `thougths/proposta.md` (~430 lines, PT-BR commercial proposal dated January 2026), `thougths/validacao_tecnica_powerbi.md`. Intended stack per the proposal: Power BI + Pipedrive data.
- **Category:** Analytics & BI
- **Client:** prospective Workana client (name not stated in the files reviewed)
- **Last commit:** n/a — **not a git repository** (no `.git` directory) | **Commits:** n/a | **Status:** experimental (pre-sales artifact; no implementation)
- **Portfolio:** no — proposal documents only, no delivered work, and client is unnamed/unconfirmed.
- **Metrics:** none stated. Proposal dated January 2026.

---

## Batch summary table

| Repo | Category | Last commit | Commits | Status | Portfolio |
|---|---|---|---|---|---|
| mediamixmodel | Experiment / Learning | 2025-03-31 | 2 | abandoned | no |
| opticodes_webpage | Web / App | 2023-10-01 | 33 | abandoned | no |
| rodtex_cv | Web / App | 2026-05-04 | 59 | active | no (is the site) |
| roteirizador-forneria-luce | Automation & Tooling | 2026-05-30 | 8 | active | **yes** |
| rt-analytica | Web / App | 2026-03-30 | 4 | active | no |
| rt-analytica-hub | Web / App | 2026-06-04 | 7 | active | **yes** |
| rt-analytics-alerts-bot | Automation & Tooling | 2026-05-12 | 4 | active | yes |
| rt-code-assistant | AI & LLM | 2026-07-06 | 5 | active | **yes** |
| rt-stripe-setup | Automation & Tooling | 2026-07-20 | 21 | active | yes (redacted) |
| rt_assistent | AI & LLM | n/a (no git) | n/a | active | no |
| upwork / Marketing Funnel Scoring | Analytics & BI + AI & LLM | 2026-03-26 | 18 | active | **yes** |
| workana-geomap | Analytics & BI | n/a (no git) | n/a | experimental | no |

## Caveats for CV use
- **Secrets committed** in `rt-analytica-hub` (root `client_secret_*.json`), `upwork/Daniel Turner - Marketing Funnel Scoring` (two `client_secret_*.json` + a GCP service-account JSON), and `.env` files present in `roteirizador-forneria-luce`, `rt-analytics-alerts-bot`, `rt-code-assistant`, `rt-stripe-setup`, `rt_assistent`, and the Daniel Turner folder. Scrub before any repo is made public.
- **Commit counts are low across the rt-\* repos (4–21)** — these look like squashed / large-grained commits, so commit count is a poor proxy for effort here. Do not present it as a volume metric.
- `mediamixmodel`'s remote points at a **different GitHub account** (`chagasrennan`); ownership is unclear.


---

# Part 2 — Filterbuy Repositories (`afb-git/`)


<!-- ===== batch F1 ===== -->

# Inventory — Batch F1 (Filterbuy / Amazon Advertising platform cluster)

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/Filterbuy/afb-git/`
Audit date reference: 2026-07-29. "Active" = last commit within 6 months (i.e. on/after 2026-01-29).
All facts below are quoted or literally counted from repo files; anything not evidenced is written "unknown".

---

### OWBR
- **Purpose:** Migrate the Operations Weekly Business Review QuickSight dashboard from Redshift to an Athena/`filterbuy_lake_marts` (dbt) foundation — a working/planning repo holding specs, audits, lineage and remediation notes (no application code).
- **Stack:** AWS Athena + AWS Glue catalog, `filterbuy_lake_marts` (dbt-built), Amazon QuickSight (SPICE), legacy Redshift (`dwh`/`stg2`), Matillion SQL, federated Postgres replica. Markdown/SQL/JSON artifacts only.
- **Category:** Analytics & BI
- **Client:** Filterbuy
- **Last commit:** 2026-06-12 | **Commits:** 1 | **Status:** active (last commit within 6 months) — content is a planning/spec workspace, not shipped code
- **Portfolio:** no — employer-internal BI migration; contains AWS account ID `937346932434`, QuickSight dashboard/dataset IDs, internal table and employee-level model names. Confidentiality risk is high and there is no self-contained artifact to show.
- **Metrics (literal / literally counted):**
  - README/CLAUDE.md states: old Redshift dashboard had **21 datasets**, new Athena dashboard has **22 datasets** (21 Athena + 1 Postgres direct, SPICE).
  - Stated identical sheets/visual counts on both dashboards: Safety & Quality (16), Inventory (19), Capacity (20), Service (24), Cost (28), People (12).
  - Stated "~18 dbt-model contracts" written for Workstream C + B; **counted 22 `.md` files** in `specs/` (`ls specs/*.md | wc -l` = 22), of which the model-contract files are named `C1-1` … `C7-1` plus `B_existing_table_columns.md` and `README.md`.
  - **Counted 22 files** in `assessment/sql_new/` and **21 files** in `assessment/sql_old/` (`ls … | wc -l`) — matches the 22-vs-21 dataset counts.
  - Stated "8 existing marts tables already define columns covering most TD gaps"; "Two daily snapshot tables in `analytics_sandbox` (live since 2026-05-28)".
  - Note: this repo is NOT part of the Amazon Ads cluster — it is an Operations BI migration that happens to sit in the same folder.

---

### afb-customer-journey
- **Purpose:** Working repo for Jira epic WEB-3969 ("B2C Customer Journey — Tracking & Data Quality"): tasks are drafted as markdown, reviewed, then pushed to Jira via a CLI.
- **Stack:** Python 3 (`tools/jira.py`, Jira Cloud REST API), Markdown task templates, one benchmark SQL file. No AWS/infra.
- **Category:** Automation & Tooling
- **Client:** Filterbuy
- **Last commit:** unknown (no `.git` directory present — not a git repository) | **Commits:** unknown | **Status:** unknown (no commit history to date it); content is a small planning/tooling workspace
- **Portfolio:** no — internal Jira workflow tooling, references the company Jira instance, epic keys and a work email; nothing demonstrable outside the org.
- **Metrics:** counted **1 drafted task file** in `tasks/` (`01-google-tag-gateway.md`, plus `_TEMPLATE.md`), **1 analysis SQL** (`analysis/tracking-gap-benchmark.sql`), **1 tool** (`tools/jira.py`). README documents **8 customer-journey stage labels** (`cj-acquisition`, `cj-discovery`, `cj-cart`, `cj-checkout`, `cj-post-purchase`, `cj-retention`, `cj-support`, `cj-foundation`) — counted from the README table.

---

### amazon-acos-optimizer
- **Purpose:** Sets the per-campaign target ACoS that maximizes total account net profit and feeds those targets into the `amazon-bids-optimizer` bid engine via its target-ACoS hierarchy.
- **Stack:** Python 3.12; container-image AWS Lambda (`public.ecr.aws/lambda/python:3.12`, built/pushed by GitHub Actions); boto3, pandas, pyarrow, numpy; **scipy** (`scipy.optimize.curve_fit`), **hillfit**; **cvxpy** with solvers clarabel / osqp / scs / highspy; matplotlib for EDA. Data via **Athena over Iceberg**; outputs written to an Athena/Iceberg target table; artifacts to S3/`/tmp`.
- **Category:** MarTech & Advertising (with heavy Data Science / optimization content)
- **Client:** Filterbuy
- **Last commit:** 2026-07-09 | **Commits:** 32 | **Status:** active
- **Portfolio:** no as-is — employer-owned model with internal Athena table names, margin logic and account economics. The *method* (Hill saturation response curve + net-profit optimization) could be described generically in a CV bullet without repo access; publishing the repo or its docs is an NDA/confidentiality risk.
- **Metrics (literal / literally counted):**
  - **Optimization algorithm (explicit, from README + `requirements.txt`):** fit a per-campaign **two-parameter Hill saturation response curve** of revenue vs. spend by **bounded least squares** (`scipy.optimize.curve_fit`), with **bootstrap uncertainty**; then run an **uncertainty-aware optimization** maximizing `Σ (margin·revenue(spend) − spend)` — convex program via **cvxpy** (piecewise-linear LP / convex), with optional account-level max-budget and max-CPC guardrails, over a bootstrap curve ensemble in **expected / risk-averse / chance-constrained** modes. Explicitly *not* a Bayesian MMM; a geometric-adstock primitive exists but is off in v1.
  - README states: "**Built (25/26 tasks shipped); deploy pending.**" — **counted 25 shipped task docs** in `docs/shipped/` (`2026-06-29-01…-25`, plus a README).
  - `requirements.txt` comment states "**~300 campaigns/round** → fast point-estimate fits".
  - **Counted 30 Python modules** under `src/` and **20 test files** (`find tests -name 'test_*.py' | wc -l` = 20).
  - Deployment is a container image because "scipy+cvxpy+pyarrow blow past Lambda's 250 MB unzipped-zip limit" (Dockerfile comment). Pinned runtime set includes boto3 1.43.37, numpy 2.5.0, pandas 3.0.3, pyarrow 24.0.0, scipy 1.18.0, cvxpy 1.9.2.

---

### amazon-ads-skills-library
- **Purpose:** `@filterbuy/amazon-ads-skills` — a safe, agent-callable Amazon Ads PPC operations library; the capability layer a future analytics chatbot will use to manage Sponsored Products campaigns through chat.
- **Stack:** TypeScript 5.5 (ESM), Node ≥ 20 (global `fetch`, `node:zlib`), **zod** schemas, **vitest** 2, tsx, pnpm 9. Strict 3-layer architecture: provider primitives → operational skills → workflow skills, plus scope allowlists, audit sinks (in-memory / file / S3-ready), redaction, dry-run, approval and idempotency helpers. Talks to the Amazon Ads API via LwA OAuth.
- **Category:** AI & LLM (agent tool/skill layer for Amazon Ads)
- **Client:** Filterbuy
- **Last commit:** 2026-05-11 | **Commits:** 2 | **Status:** active (within 6 months), early-stage — README says "first-wave Sponsored Products coverage + Phase-1 production hardening"
- **Portfolio:** no as-is — private `filterbuy` org package, and the repo contains a committed `.env` with credentials-shaped values. A sanitized write-up of the "safe agent tool layer" design (allowlist + audit + dry-run + approval) would be the low-risk way to use it.
- **Metrics (literal / literally counted):**
  - README states "**65 tests passing** (`pnpm test`)", "~800ms".
  - **Counted 13 registered skills** in `src/skills/amazon-ads/registry.ts` (grep of `name:` entries inside `skillRegistry`): `get_campaign_performance_summary`, `change_campaign_budget`, `bulk_change_campaign_budget`, `pause_campaigns`, `resume_campaigns`, `rename_campaign`, `bulk_rename_campaigns`, `generate_campaign_naming_convention`, `apply_campaign_naming_convention`, `build_performance_snapshot`, `analyze_creatives`, `recommend_creative_actions`, `recommend_bid_adjustments`.
  - **Counted 5 provider primitive modules** (`ad-groups.ts`, `campaigns.ts`, `exports.ts`, `profiles.ts`, `reports.ts`) and **3 schema modules**.
  - **Counted 14 test files** (`find tests -name '*.test.ts' | wc -l` = 14).
  - Declared risk taxonomy in the registry: side effects `read | mutate-campaign | create-campaign | generate-report`; risk levels `LOW | MEDIUM | HIGH`.

---

### amazon-bid-engine-control
- **Purpose:** Control center for the Amazon Ads bid optimizer — analytics dashboard, operator control panel, scheduled-run scheduler, rollback, and the backend Lambdas that serve them.
- **Stack:** Static HTML/CSS/JS dashboard on **CloudFront + S3**, gated by **Lambda@Edge** Google OAuth (restricted to `@filterbuy.com`); **API Gateway HTTP API** + Python Lambdas (`control-api`, `dashboard-refresh`); **DynamoDB** (run status, schedules, allowlist, audit); **EventBridge** cron + **EventBridge Scheduler** group; **SNS** to trigger the optimizer; **Athena over Iceberg** as the read layer; Terraform (infra since 2026-05-12 lives in the `filterbuy/devops` repo); GitHub Actions CI/CD; pre-commit + gitleaks.
- **Category:** MarTech & Advertising (Web/App + Analytics & BI surface over the ads platform)
- **Client:** Filterbuy
- **Last commit:** 2026-07-23 | **Commits:** 346 | **Status:** active
- **Portfolio:** no — production internal tool. README enumerates live AWS resource IDs (CloudFront distribution `E25UZE02HN8JHA`, S3 bucket incl. account number, API Gateway `talpuplc7f`), the OAuth allowlist mechanism, and internal ads/margin metrics. High NDA/confidentiality risk. A screenshot-free, name-free architecture description is the safe CV form.
- **Metrics (literal / literally counted):**
  - **Counted 8 HTML pages** under `dashboard/` (`find dashboard -name '*.html' | wc -l` = 8); README documents 6 named pages (Home, Analytics-Overall, Analytics-SP, Control panel, Recommendation Logs, Docs).
  - **Counted 3 Lambda handler directories** in `lambda/` (`auth-proposed/`, `control-api/`, `dashboard-refresh/`) — README documents 3 Lambdas (auth @ Edge, control-api, dashboard-refresh); the `auth` source now lives in the DevOps repo.
  - **Counted 10 shared service modules** in `scripts/services/` (athena, dashboard_refresh, sp_performance, overall_results, asin_performance, did, keyword_did, keyword_impact, saturation, config).
  - **Counted 3 GitHub Actions workflows** (`deploy-dashboard.yml`, `refresh-dashboard-data.yml`, `security-scan.yml`).
  - **Counted 9 operator/analysis scripts** in `scripts/` root and **10 HTML analysis/presentation decks** in `docs/presentations/`.
  - README lists **13 named AWS resources** in the infrastructure table and **7 Athena/Iceberg source tables** in the data-sources table.
  - Schedules: dashboard-refresh EventBridge rule `cron(0/10 15-18 * * ? *)` (every 10 min, 15:00–18:00 UTC); GitHub Actions backup cron every 2 h. Refresh Lambda sized 900 s / 2048 MB with the AWSSDKPandas layer.
  - Control panel exposes **3 optimization modes** (TACoS / ACoS / Placement-Anchored) plus Profitability Lock and Rollback; Recommendation Logs cover "all runs since Mar 10" with `dry-run` / `bulksheet` / `api` category badges.

---

### amazon-bids-optimizer
- **Purpose:** The production serverless bid-optimization engine: pulls Athena/Iceberg model tables, runs product-specific bid models for Sponsored Brands and Sponsored Products, applies guardrails, and either exports Amazon Ads bulksheets or applies bids directly through the Amazon Ads API (auto-bidding).
- **Stack:** Python 3.11+ AWS Lambda (zip, `lambda_package/`); boto3, pandas, redshift-connector (legacy, unused); **Athena over Iceberg** as primary data source; **S3** artifacts; **DynamoDB** run-status tracking; **SNS** trigger; **CloudWatch** metrics/alarms/dashboard; **Step Functions** state machine (`deployment/statemachine/bid-engine.asl.json`); a second Lambda handler for async **Amazon Bedrock** AI enrichment of dashboard CSVs (S3 ObjectCreated → parallel Bedrock calls); Amazon Ads API (SP keywords/targets, SB keywords) with circuit breaker + batching; GitHub Actions deploy.
- **Category:** MarTech & Advertising (production ML/optimization service)
- **Client:** Filterbuy
- **Last commit:** 2026-07-28 | **Commits:** 239 | **Status:** active (most recently touched repo in the batch — 1 day before the 2026-07-29 reference date)
  - Note: `--first-parent` count is 235, i.e. only 4 of the 239 commits came in via merges.
- **Portfolio:** no — the core proprietary bid model. README (45 KB) documents the exact factor weights, tier bounds, target-ACoS logic and unit-economics formulas; `docs/account_model_coefficients.json` (63.6 KB) holds fitted account coefficients. This is the highest-confidentiality asset in the batch.
- **Metrics (literal / literally counted):**
  - **Optimization algorithms (explicit, from README):**
    - **Sponsored Brands — multi-factor weighted (additive) model:** `bid_multiplier = w1·efficiency + w2·brand_capture + w3·top_of_search + w4·funnel_engagement`, default weights 0.25 / 0.30 / 0.30 / 0.15 (sum 1.0).
    - **Sponsored Products — performance-centric multiplicative model:** performance factor = `effective_target_ACoS / TACoS_blend` where `TACoS = cost / (paid_sales + organic_sales)`; TACoS_blend is a 0.6/0.4 weighted blend of two windows per `date_preset` (14d → 7d/14d, 30d → 14d/30d, 45d → 30d/45d). Opportunity factor is a **composite robust z-score model** (median/IQR z-scores) over three dimensions — visibility headroom `1 − tos_is`, market importance (log-scaled impressions / ToS IS, P90-normalized), market-share headroom `1 − share/100` — weights 0.40 / 0.25 / 0.35, combined through `opportunity_factor = 1 + A·tanh(k·composite_z)` with A = 0.5, k = 1.0. Plus velocity gate, optional day-of-week temporal factor, constraint factor, and a **tanh** bid-multiplier transform for tiers T1/T2/T3 with special T4 (zero-sales) handling.
    - **Placement-anchored mode (SP) — absolute unit-economics bid:** `Base Bid = KW AOV × (Target ACoS/100) × KW PP CVR`, with **Empirical Bayes (Beta-Binomial) CVR smoothing** — `smoothed_kw_cvr = (kw_purchases + μ·m)/(kw_clicks + m)`, prior strength `m` estimated per campaign by **method-of-moments variance decomposition**, clamped to [20, 200] (fallback m = 20 when < 5 keywords or < 30 clicks); placement discount clamped to [0.3, 3.0].
    - **Guardrails:** match-type hierarchy `BROAD ≤ PHRASE ≤ EXACT` within ad group (campaign-level in placement-anchored mode), bid caps default ±20 %, tier bounds T1 ±5 % / T2 ±10 % / T3 ±15 %, growth-bias dial −100…+100.
    - **Auto-bidding:** batches of **1,000 keywords** with a **0.15 s** delay between batches, circuit breaker, `auto_bidding_max_updates` cap.
  - **Counted 19,061 lines of Python** under `src/` (`find src -name '*.py' | xargs wc -l` → total 19061); `src/handler.py` alone is **3,351 lines**.
  - **Counted 62 test files** (`find tests -name 'test_*.py' | wc -l` = 62).
  - **Counted 17 optimization/config modules** across `src/config/` and `src/optimization/` (incl. `sponsored_products.py` 60 KB, `placement_anchored.py` 55 KB, `applicator.py` 52 KB, `step_walker.py` 46 KB).
  - **Counted 10 SQL files** in `sql/tables/` (create/refresh for `amazon_bids_model_data_sp`, `_sb`, `amazon_bids_temporal_factors_sp`, plus 4 dashboard-table ALTERs).
  - **Counted 3 upstream Iceberg model tables** consumed (`amazon_bids_model_data_sp`, `amazon_bids_model_data_sb`, `amazon_bids_temporal_factors_sp`, all in the `amazon_bid_engine_model_data` Glue database).
  - **Counted 1 GitHub Actions workflow** (`deploy-lambda.yml`) and **1 Step Functions definition**.
  - Documentation weight: README is **45.0 KB**; `DATA_QUALITY_CHECKS.md` is **27.9 KB**.

---

### amazon-etl-alerting
- **Purpose:** Lambda that generates a daily AI-written summary of the Amazon Ads reporting-pipeline alerts and posts it back to Slack.
- **Stack:** Python 3.12 AWS Lambda (128–256 MB, 120 s); **Amazon Bedrock** (`amazon.nova-pro-v1:0`); Slack Web API (`channels:history`, `chat:write`); **EventBridge** cron `cron(0 18 * * ? *)`; **SNS** topic `etl_alerting` upstream; GitHub Actions OIDC deploy.
- **Category:** AI & LLM (LLM-based ops summarization) — supporting Data Engineering / ETL
- **Client:** Filterbuy
- **Last commit:** 2026-04-02 | **Commits:** 3 | **Status:** active (within 6 months); small and complete in scope
- **Portfolio:** no — small internal ops utility; README embeds a real Slack channel ID and internal Lambda/SNS names. The pattern ("LLM daily digest of pipeline alerts") is describable generically with zero risk.
- **Metrics (literal / literally counted):**
  - **Counted 4 Python modules** in `src/` (`lambda_function.py`, `config.py`, `slack_client.py`, `summarizer.py`) — `summarizer.py` is 12.9 KB.
  - README states it summarizes **3 pipeline stages** (`amazonReportingAPI`, `amazonReportingGrab`, `amazon-reporting-ingestion`).
  - README schedule table lists **5 report families × 2 marketplaces (US/CA)** with fixed UTC times, and derives the 18:00 UTC run from the last one (CA Search Term 14:10 UTC + up to 2 h Grab polling + ingestion ≈ 16:15 UTC, giving a stated "~1h45m buffer").
  - **Counted 1 GitHub Actions workflow** (`deploy.yml`).

---

### amazon-marketing-stream-data-prep
- **Purpose:** Lambda that converts Amazon Marketing Stream JSON drops in S3 into schema-validated Parquet, sweeping a dataset's `load/` folder per event so bursts self-coalesce; supports load and backfill modes.
- **Stack:** Python AWS Lambda; boto3, **pandas**, **pyarrow** (explicit `pa.schema` per dataset prefix, longest-prefix match); **S3** (list/copy-then-delete); triggered by **S3 Object Created** via the `amazon-marketing-stream-load-trigger` EventBridge rule, or by **SNS**/EventBridge; SNS alerting with de-duplication; timeout-aware processing (30 s buffer before Lambda timeout); GitHub Actions deploy.
- **Category:** Data Engineering / ETL
- **Client:** Filterbuy
- **Last commit:** 2026-07-10 | **Commits:** 8 | **Status:** active
- **Portfolio:** no — internal ingestion Lambda tied to Filterbuy's S3 layout and Amazon Marketing Stream subscription; no README, nothing self-explanatory to show.
- **Metrics (literal / literally counted):**
  - **Counted 4 registered dataset schemas** in `src/schemas.py` `PREFIX_SCHEMAS` (`amazon_ads/ads/`, `amazon_ads/campaigns/`, `amazon_ads/adgroups/`, `amazon_ads/targets/`) — one commented-out placeholder schema is present and not counted.
  - **Counted 6 source modules** in `src/` (`alerting.py`, `json_parser.py`, `parquet.py`, `s3_utils.py`, `schemas.py`, `__init__.py`) plus a 7.6 KB `lambda_function.py` orchestrator.
  - `TIMEOUT_BUFFER_MS = 30_000` (literal constant).
  - No README present; findings taken from `lambda_function.py` and `src/schemas.py`.

---

### amazon-reporting-api
- **Purpose:** Lambda that requests asynchronous Amazon Advertising reports for a given profile/report config and schedules the follow-up collection job that will fetch and land them.
- **Stack:** Python 3.12 AWS Lambda (128 MB, `requests-lib-layer:4`); Amazon Ads Reporting API over OAuth refresh-token auth; **EventBridge Scheduler** (creates/updates a polling schedule: every 15 minutes for a 2-hour window); triggered by **SNS** or **EventBridge** constant input; **S3** destination; SNS alerting; GitHub Actions OIDC deploy (`github-actions-amazonReportingAPI-deploy`, `lambda:UpdateFunctionCode` only).
- **Category:** Data Engineering / ETL (MarTech source)
- **Client:** Filterbuy
- **Last commit:** 2026-06-05 | **Commits:** 25 | **Status:** active
- **Portfolio:** no — employer ingestion Lambda; payload files and README contain profile IDs, S3 prefixes and IAM role names.
- **Metrics (literal / literally counted):**
  - **Counted 17 distinct Amazon Ads report types ingested**, from the README's US trigger table (`spTargeting`, `sbTargeting`, `sdTargeting`, `spPurchasedProduct`, `sbPurchasedProduct`, `sdPurchasedProduct`, `spGrossAndInvalids`, `sbGrossAndInvalids`, `sdGrossAndInvalids`, `spAdvertisedProduct`, `sdAdvertisedProduct`, `spSearchTerm`, `sbSearchTerm`, `spCampaigns`, `sbCampaigns`, `stCampaigns`, `stTargeting`).
  - **Counted 34 scheduled EventBridge report triggers** = 17 US rules + 17 CA rules (the CA table mirrors the US table 1:1 with a `_CA` suffix). Counted by tallying the rows of both README tables.
  - Ad products covered: **4** (Sponsored Products, Sponsored Brands, Sponsored Display, Sponsored TV) across **2 marketplaces** (US, CA).
  - **Counted 16 reference payload files** (`ls local_payload_*.json | wc -l` = 16).
  - **Counted 5 service modules** in `src/services/` (`auth.py`, `reporting.py`, `scheduler.py`, `event_parser.py`, `alerting.py`) behind a thin `lambda_function.py` handler.
  - **Counted 6 backfill campaigns** in `backfill/` (`sb_campaigns`, `sb_purchased_product_mar_apr`, `sp_campaigns_placement`, `sp_search_term`, `st_campaigns`, `st_targeting`).
  - Default report window: last 7 days excluding today (overridable via payload `start_date`/`end_date`).

---

### amazon-reporting-grab
- **Purpose:** Lambda that polls Amazon Ads for report completion, downloads the gzip-compressed JSON, converts it to CSV, and uploads to S3 with duplicate-upload protection.
- **Stack:** Python AWS Lambda (only dependency `requests`; boto3 from the runtime); Amazon Advertising API + OAuth refresh token; **S3** (`PutObject`/`GetObject`/`HeadObject`); triggered by **EventBridge** or **SNS**; SNS notifications module; GitHub Actions OIDC deploy (role `GitHubActions-AmazonReportingGrab-Deploy`, `lambda:UpdateFunctionCode` only). Thin `lambda_function.py` entry delegating to an `amazon_reporting/` package.
- **Category:** Data Engineering / ETL (MarTech source)
- **Client:** Filterbuy
- **Last commit:** 2026-03-25 | **Commits:** 5 | **Status:** active (within 6 months); stable/complete in scope
- **Portfolio:** no — employer ingestion Lambda; README documents internal IAM role names and S3 key patterns.
- **Metrics (literal / literally counted):**
  - **Counted 9 modules** in the `amazon_reporting/` package (`__init__.py`, `api.py`, `auth.py`, `constants.py`, `event_parser.py`, `helpers.py`, `notifications.py`, `orchestrator.py`, `s3_ops.py`).
  - README states polling "up to **5 times with 60-second intervals**"; the `amazon-etl-alerting` README instead describes Grab polling "for up to 2 hours" via the EventBridge Scheduler window — the two docs disagree, so the operative polling budget is best cited as the 15-min-for-2-h schedule created by `amazon-reporting-api`.
  - S3 output naming pattern: `{file_key}_{profile_id}_{time_key}.csv`.
  - **Counted 6 required event parameters** (`bucket_name`, `file_key`, `time_key`, `profile_id`, `field_names`, `report_id`) and **5 environment variables**.
  - **Counted 1 GitHub Actions workflow** (`deploy.yml`).

---

## Amazon Ads Platform Architecture

Eight of these ten repos form one end-to-end, single-owner Amazon advertising data-and-decision platform on AWS. (`OWBR` is a separate Operations BI migration and `afb-customer-journey` is a Jira tooling repo — neither is part of this cluster.) The flow, with the evidence for each hop:

**1 — Ingestion (source of truth).**
`amazon-reporting-api` requests asynchronous reports from the Amazon Ads Reporting API and creates an EventBridge Scheduler job that polls every 15 minutes for 2 hours (README "High-level flow" §5). `amazon-reporting-grab` is that job's target: it polls report status, downloads the gzip JSON, converts to CSV and lands it in S3 (grab README "Overview"). Verified scale: **17 distinct report types × 2 marketplaces = 34 scheduled EventBridge report triggers**, covering Sponsored Products, Sponsored Brands, Sponsored Display and Sponsored TV (counted from the two trigger tables in `amazon-reporting-api/README.md`). In parallel, `amazon-marketing-stream-data-prep` handles the real-time Amazon Marketing Stream feed, converting S3 JSON drops into schema-validated Parquet for **4 registered datasets** — ads, campaigns, adgroups, targets (counted from `PREFIX_SCHEMAS` in `src/schemas.py`).

**2 — Transformation (not in this batch, but referenced).**
A third repo, `amazon-reporting-ingestion`, ingests the landed CSVs into **Iceberg tables in the `amazon_reporting_api` and `amazon_bid_engine_model_data` Glue databases** and runs a `bid-model-refresh` Lambda daily. Evidence: `amazon-etl-alerting/README.md` names it as pipeline stage 3, and `amazon-bids-optimizer/README.md` §"Data Source Requirements" states the model tables "are populated daily by the `bid-model-refresh` Lambda in the `amazon-reporting-ingestion` repo". The SQL that builds those model tables is nonetheless versioned inside `amazon-bids-optimizer/sql/tables/` (**10 files counted**).

**3 — Decision layer (the models).**
`amazon-bids-optimizer` is the production Lambda that reads **3 Iceberg model tables** via Athena and computes per-keyword bids under **3 optimization modes**: an additive multi-factor model for Sponsored Brands (weights 0.25/0.30/0.30/0.15), a multiplicative performance × composite-robust-z-score-opportunity × velocity × temporal model for Sponsored Products (tanh-bounded, tiered T1–T4), and a placement-anchored absolute-bid mode built on unit economics with Empirical-Bayes/Beta-Binomial CVR smoothing. It emits Amazon Ads bulksheets *or* writes bids straight back through the Amazon Ads API in batches of 1,000 with a circuit breaker. Verified scale: **19,061 lines of Python** in `src/` and **62 test files** (both literally counted). Sitting above it, `amazon-acos-optimizer` closes the outer loop — it fits a per-campaign **two-parameter Hill saturation curve** (`scipy.optimize.curve_fit`, bounded least squares + bootstrap) and solves `max Σ(margin·revenue(spend) − spend)` in **cvxpy** under budget/max-CPC guardrails, in expected / risk-averse / chance-constrained modes, to set the *target ACoS* the bid engine then optimizes against (`amazon-acos-optimizer/README.md`, first paragraph: "feeds those targets into the `amazon-bids-optimizer` bid engine via its target-ACoS hierarchy"). It reports **~300 campaigns per round** and **25/26 tasks shipped**.

**4 — Control, observability and human-in-the-loop.**
`amazon-bid-engine-control` is the operations layer: a CloudFront+S3 dashboard behind Lambda@Edge Google OAuth, an API Gateway control API, a DynamoDB-backed run-status/schedule/allowlist/audit store, an EventBridge Scheduler group that fires SNS to invoke the optimizer, and a refresh Lambda on `cron(0/10 15-18 * * ? *)` that regenerates the dashboard JSON only when `MAX(dt)` on `amazon_reporting_api.sp_targets` advances. Verified scale: **346 commits** (largest repo in the batch by history), **8 dashboard HTML pages**, **10 shared Athena service modules**, **13 named AWS resources**, **7 Athena source tables**, **3 CI/CD workflows** — all literally counted. Its README's ASCII diagram is the platform's own statement that the optimizer writes recommendations/snapshots/run metadata into Athena + S3 + DynamoDB, from which the dashboard and control Lambdas read.

**5 — Alerting and the AI surface.**
All three pipeline Lambdas publish to the SNS topic `etl_alerting` → `slack-bot-alerts` → `#etl_alerts`; `amazon-etl-alerting` then runs at 18:00 UTC and uses **Amazon Bedrock Nova Pro** to write a structured daily digest of those alerts back into Slack (`amazon-etl-alerting/README.md`). Bedrock also appears inside the optimizer itself, as an async S3-triggered `ai_enrichment_handler` that adds natural-language summaries to the dashboard CSVs. Finally, `amazon-ads-skills-library` is the forward-looking agent layer — **13 registered, risk-classified, audited, dry-runnable skills** over the Amazon Ads API (counted from `registry.ts`), intended as the capability surface for a chatbot that manages campaigns conversationally.

**Ownership signal.** One person's fingerprints run across every layer — ingestion (2 Lambdas + a stream prep Lambda), the Iceberg model tables' SQL, two distinct optimization models (bid-level and account-level), the operator dashboard and control plane, the CI/CD (**every repo deploys via GitHub Actions with OIDC, no long-lived credentials**), the alerting, and the agent/LLM layer. Cross-repo handoff documents (`docs/implementation-plans/` in both optimizer repos, README cross-links between all four core repos) are explicit evidence that the same author designed the contracts between components rather than only contributing to one.

**Verified aggregate numbers** (all literally counted, no estimates):
- 34 scheduled Amazon Ads report-fetch triggers; 17 distinct report types; 4 ad products; 2 marketplaces (US, CA).
- 4 Amazon Marketing Stream datasets converted to Parquet.
- 3 Iceberg model tables consumed by the bid engine; 7 Athena tables read by the dashboard layer; 10 model-table SQL files.
- 3 bid-optimization modes + 1 account-level ACoS allocator.
- 19,061 lines of Python in the optimizer `src/`; 62 optimizer test files; 20 ACoS-optimizer test files; 14 skills-library test files (65 tests stated).
- Commit history across the 8 cluster repos: **660 commits total** (346 bid-engine-control + 239 bids-optimizer + 32 acos-optimizer + 25 reporting-api + 8 marketing-stream-data-prep + 5 reporting-grab + 3 etl-alerting + 2 ads-skills-library), summed from the per-repo `git rev-list --count HEAD` values above.
- Most recent activity in the cluster: 2026-07-28 (`amazon-bids-optimizer`); all 8 cluster repos have commits within the last ~4 months.
- 13 agent-callable Amazon Ads skills; 13 named AWS resources in the control plane; 8 dashboard pages.

**Confidentiality verdict for the whole cluster:** none of these repos is publishable. They are Filterbuy-owned, contain live AWS resource identifiers, account numbers, OAuth allowlists, fitted model coefficients and account-level margin economics, and at least two repos (`amazon-ads-skills-library`, `amazon-bids-optimizer`) have committed `.env` files. The CV-safe form is architecture-and-method prose with counted scale figures, no names, no screenshots, no code.


<!-- ===== batch F2 ===== -->

# Inventory — Batch F2 (Filterbuy)

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/Filterbuy/afb-git/`
Audit date: 2026-07-29. All numbers below are either literal quotes from repo files (marked "doc states") or counted by me with the command noted.

**Note on git:** 4 of the 10 directories are NOT git repositories (no `.git`): `claude-skills-factory`, `filterbuy-ads-app`, `filterbuy-data-analytics`, `filterbuy-dw-v2`. Their commit counts / last-commit dates are **unknown**.

---

### amazon-reporting-ingestion
- **Purpose:** Event-driven AWS Lambda service ingesting Amazon Advertising data (Reporting API CSVs, Marketing Stream events, Keepa market intelligence) into Apache Iceberg tables via Athena.
- **Stack:** Python 3.12 Lambdas; `boto3>=1.34`, `pandas>=2.0`, `pyarrow>=14.0` (requirements.txt); AWS Athena + Apache Iceberg (MERGE INTO / DELETE+INSERT), S3, EventBridge rules, SNS, IAM, `AWSSDKPandas-Python312` Lambda layer; `deploy.sh` using `aws-vault exec rt`. pytest (1 test file).
- **Category:** `Data Engineering / ETL`
- **Client:** Filterbuy
- **Last commit:** 2026-07-22 | **Commits:** 65 | **Status:** Active (most recently committed repo in this batch)
- **Portfolio:** no — contains internal AWS account id, S3 bucket names, and Amazon advertising profile IDs; describable as an anonymized case study only.
- **Metrics:**
  - 65 commits, all by "Rodrigo Teixeira" (`git shortlog -sn --all`); first commit 2026-03-19.
  - README doc states: 5 Lambda functions (`amazon-reporting-ingestion`, `amazon-marketing-stream-ingestion`, `amazon-marketing-stream-backfill`, `keepa-data-ingestion`, `bid-model-refresh`), 3 EventBridge rules, 3 S3 buckets, 2 advertising profiles (US, CAD).
  - README doc states 4 Athena databases with table counts: `amazon_reporting_api` 13, `amazon_marketing_stream` 12, `amazon_bid_engine_model_data` 3, `keepa_data` 3 Iceberg + 3 external + 1 MV.
  - I counted 57 `.sql` files under `sql/` (`find sql -name '*.sql' | wc -l`, by subfolder: amazon_reporting_api 16, amazon_marketing_stream 14, amazon_bid_engine_model_data 11, keepa_transformations 7, amazon_transformations 5, mmm_model_data 3, amazon_cloud 1).
  - I counted 3 tool-neutral AI skills under `ai/skills/` (`bid-model-health`, `fact-stats-diff`, `repo-context`), mirrored into `.claude/skills/` and `.codex/skills/` by `scripts/sync-ai-skills.sh`.

---

### amc-query-runner
- **Purpose:** Lambda system that programmatically submits SQL queries to Amazon Marketing Cloud (AMC), polls the async execution, and lands result CSVs in S3.
- **Stack:** Python Lambdas (`amcQueryRunnerSubmit`, `amcQueryRunnerPoll`); `requests==2.32.5`, `urllib3<2`, `boto3` (requirements.txt, vendored into `src/`); Amazon Ads OAuth (token refresh), AMC workflow API, EventBridge Scheduler (poll every 2 min over a 3-hour window), S3; GitHub Actions `deploy.yml` zips `src/` and deploys both Lambdas on push to `main`.
- **Category:** `MarTech & Advertising`
- **Client:** Filterbuy
- **Last commit:** 2026-04-16 | **Commits:** 24 | **Status:** Complete / low activity
- **Portfolio:** no — Filterbuy-specific AMC instance and credentials; the AMC submit/poll pattern could be described generically.
- **Metrics:**
  - 24 commits, all by "Rodrigo Teixeira"; first commit 2026-03-17.
  - I counted 6 AMC SQL query files in `src/queries/`: `q1_monthly_revenue.sql`, `q7_sponsored_ads_spend.sql`, `q11_full_funnel_attribution.sql`, `daily_organic_sales_per_asin.sql`, `sb_purchased_product.sql`, `sb_purchased_product_debug.sql`.
  - README doc names 3 headline queries: revenue & customers by ASIN, Sponsored Ads spend by ASIN, full-funnel attribution.
  - 5 service modules in `src/services/` (`amc_client.py`, `auth.py`, `scheduler.py`, `alerting.py`, `__init__.py`).

---

### claude-skills-factory
- **Purpose:** Scratch workspace holding reusable Claude Code skills (email, calendar, availability, AWS-vault setup, repo-context) plus marketing-API onboarding handlers/quickstarts for Facebook Ads and Bing Ads.
- **Stack:** Markdown Claude Code skills (`.claude/skills/`), Python quickstart scripts (`facebook_ads_quickstart.py`, `bingads_quickstart.py`), JSON credential files, setup ZIPs, `docs/context/building-applications-with-ai-agents-context`.
- **Category:** `AI & LLM`
- **Client:** Filterbuy
- **Last commit:** unknown (no `.git` directory) | **Commits:** unknown | **Status:** Scratch / working folder, not version-controlled
- **Portfolio:** no — HIGH confidentiality risk: contains plaintext credential files (`.gauth.json`, `.accounts.json`, `rt_credentails.json`, `cj_searcy_redshift_credentials.json`, `facebook_ads_credentials.json`, `bingads_filterbuy_credentials.json`, `bingads_amz_credentials.json`) and an internal Walmart Connect integration guide.
- **Metrics:**
  - I counted 7 entries in `.claude/skills/` (`ls`): 6 skill `.md` files (`availability.md`, `aws-vault-setup.md`, `calendar.md`, `email-reply.md`, `email-search.md`, `send-email.md`) + 1 skill directory (`repo-context/`).
  - 2 marketing-API handler folders (`mkt_api_handlers/facebook_ads`, `mkt_api_handlers/bing_ads`), each with a quickstart script, an API context doc, a credentials JSON, and a setup ZIP.
  - No MCP server, no agent framework code found — these are plain Claude Code skill markdown files.

---

### fairing-data-integration
- **Purpose:** Scheduled Lambda that ingests Fairing post-purchase survey data (questions + responses) from the Fairing REST API into partitioned gzipped JSONL on S3; also documents the parallel Prequel-managed S3 connector.
- **Stack:** Python >=3.9 package `fairing-ingest` (`requests>=2.31`, `boto3>=1.34`, `pytest>=8.0` per `pyproject.toml`); AWS Lambda + EventBridge + IAM + DynamoDB (checkpointing) + SNS + CloudWatch alarms defined in `infra/cloudformation/fairing-ingest.yml`; AWS Secrets Manager for credentials; GitHub Actions `ci.yml` + `deploy.yml`.
- **Category:** `Data Engineering / ETL`
- **Client:** Filterbuy
- **Last commit:** 2026-05-21 | **Commits:** 6 | **Status:** Complete, small; all 6 commits landed on a single day
- **Portfolio:** no — `.env` with Fairing API tokens present, Filterbuy-specific S3 layout. The API-ingestion pattern (paginated REST → partitioned JSONL → manifest + checkpoint) is generalizable.
- **Metrics:**
  - 6 commits, author "rodstex"; first and last commit both 2026-05-21.
  - I counted 11 Python modules in `fairing_ingest/` (client, extractors, runner, lambda_handler, s3_writer, manifest, checkpoint, keys, config, logger, `__init__`) and 10 files in `tests/` (8 `test_*.py` + `conftest.py` + `__init__.py`).
  - 7 docs under `docs/` (API reference, probe findings, runbook, integration overview, landing format, handoff, project prompt).

---

### filterbuy-ads-app
- **Purpose:** Design-artifact folder only — Google Stitch-generated UI mockups and design spec for a "Filterbuy Ads Co-Pilot" agent front-end (agent proposal cards, approval modals, skill catalog, activity/audit log, onboarding empty state, mobile viewport).
- **Stack:** Static HTML mockups (`code.html`) + PNG screenshots + Material-style design-token markdown. No application code, no manifest, no framework.
- **Category:** `Web / App`
- **Client:** Filterbuy
- **Last commit:** unknown (no `.git` directory) | **Commits:** unknown | **Status:** Design concept only — not implemented in this folder
- **Portfolio:** no — it is a design mockup set, not a working app; would misrepresent shipped work. UI-design direction could be shown if de-branded.
- **Metrics:**
  - I counted 15 files total (`find . -type f`): 6 screen folders each with `screen.png` + `code.html`, plus `DESIGN.md`, `design_tokens_page.md`, `design_rationale_storyboards.md`, `agent_proposal_card_spec_sheet.md`.
  - Screens: activity_log_audit_detail, empty_state_onboarding, skill_catalog_detail, approval_modal_high_risk, agent_proposal_low_risk, narrow_viewport_mobile.
  - Intended consumer per the design docs: agent proposals with risk levels and human approval — matches the `filterbuy-ads-skills` safety envelope. Users: unknown (not stated).

---

### filterbuy-ads-skills
- **Purpose:** TypeScript monorepo of advertising-channel "skills" for analytics agents — one vendor-neutral safety core plus one package per ad platform, all sharing the same dry-run / risk-classification / approval / idempotency / audit / rollback semantics.
- **Stack:** pnpm workspace monorepo (pnpm 10.33.0, Node >=20), TypeScript strict ESM (target ES2022, `noUncheckedIndexedAccess`), Zod runtime schemas (also used for LLM tool-use), Vitest, Changesets release automation, GitHub Actions (`ci.yml`, `release.yml`), published privately to GitHub Packages under `@filterbuy` scope. Vendor APIs: Google Ads API v24 + GAQL (OAuth + developer token), Amazon Ads SP-API (LwA + profileId), Meta Graph API.
- **Category:** `AI & LLM`
- **Client:** Filterbuy
- **Last commit:** 2026-06-17 | **Commits:** 46 | **Status:** Active; Phases 0–4 complete, Phases 5 (Meta/Bing scaffolds) and 6 (CI hardening) pending per README
- **Portfolio:** no as-is — README states "Internal — Filterbuy. Not licensed for external distribution." The *architecture* (uniform `SkillResult` envelope, blast-radius estimation, risk gating, idempotency key, audit sink with redaction, rollback hints) is the single strongest CV story in this batch and can be written up without code.
- **Metrics:**
  - 46 commits; authors on the last 80 commits: 41 "Rodrigo Teixeira", 5 `github-actions[bot]`. First commit 2026-05-18.
  - 4 workspace packages (`ls packages/`): `skills-core`, `google-ads-skills`, `amazon-ads-skills`, `meta-ads-skills`. (Bing is named in the README as Phase 5 but has no package directory.)
  - **61 registered skills** — counted with `grep -oE 'name: "[a-z][a-z0-9_]*"' registry.ts | sort -u | wc -l` on each channel registry: google-ads 33, amazon-ads 15, meta 13.
  - Source TS files excluding tests (`find src -name '*.ts' -not -name '*.test.ts'`): google-ads 66, amazon-ads 42, meta-ads 24, skills-core 11.
  - Test files (`find -name '*.test.ts' -not -path '*/node_modules/*'`): amazon-ads 25, google-ads 23, skills-core 7, meta-ads 4 — **59 total**.
  - Published versions per README table: `@filterbuy/skills-core` 0.2.0, `@filterbuy/google-ads-skills` 0.3.0, `@filterbuy/amazon-ads-skills` 0.3.0.
  - README doc states: google package has "live smoke against `v24`"; amazon package "live sandbox harness 12/12".
  - README doc states "eight non-negotiable invariants" documented in AGENTS.md.
  - Provenance per README: consolidates two predecessor repos, `google-ads-skills-library` and `amazon-ads-skills`.
  - `skills-core` has zero runtime dependencies (README + package layout).

---

### filterbuy-cms
- **Purpose:** In-house headless CMS for Filterbuy's marketing team — manages blog posts and dynamic landing pages with AI integration; filterbuy.com (Next.js ecommerce) consumes its content API.
- **Stack:** Next.js 16, React 19, TypeScript, tRPC v11, Drizzle ORM, PostgreSQL 17, Better Auth + Workforce SSO (`@filterbuy/rp-sso` from GitHub Packages), Tailwind CSS v4, Radix UI, Anthropic Claude SDK; Turborepo + pnpm 10.25.0 workspace, Biome, Vitest, Docker Compose + LocalStack for local dev; GitHub Actions `ci.yml`, `deploy.yml`, `migrate.yml`.
- **Category:** `Web / App`
- **Client:** Filterbuy
- **Last commit:** 2026-05-19 | **Commits:** 588 | **Status:** Active team project — **Rodrigo is not among the commit authors**
- **Portfolio:** no — not the user's authored work (0 commits attributable to Rodrigo Teixeira / rodstex in `git shortlog -sn --all`); also proprietary internal tooling. Listing it would misattribute authorship.
- **Metrics:**
  - 588 commits; first commit 2026-03-09. Author breakdown (`git shortlog -sn --all`): luizerajs 454, Mateus Metz 83, William Scariot 34, William 11, luizera 6. No Rodrigo/rodstex entry.
  - 1 app (`apps/web`) + 2 shared packages (`packages/google-ads-skills`, `packages/typescript-config`).
  - Users per README: Filterbuy marketing team (dashboard) and filterbuy.com (API consumer).
  - Depends on sibling repos `orchestrator/` and `filterbuy-sso/` per README.

---

### filterbuy-data-analytics
- **Purpose:** Documentation-first workspace building an agent-readable knowledge library for the Filterbuy **Athena/Glue data lake** — one durable page per table covering grain, keys, metrics, lineage, safe joins and cost-aware query patterns — plus a set of standalone operational/data-quality investigations.
- **Stack:** Athena (`AwsDataCatalog`, Glue-backed, workgroup `Analytics`), Apache Iceberg on `s3://filterbuy-lakehouse/dbt-data/` (tables described as dbt-produced), Python 3.9.2 via pyenv with `boto3` (Athena/Glue metadata scripts) and `playwright` (screenshot capture), `aws-vault` profile `rt`; Claude Code skills + `graphify-out/` knowledge graph.
- **Category:** `Analytics & BI`
- **Client:** Filterbuy
- **Last commit:** unknown (no `.git` directory) | **Commits:** unknown | **Status:** Active; README dates evidence refreshes to 2026-07-09 / 2026-07-16 / 2026-07-23
- **Portfolio:** no — the entire value is a detailed map of Filterbuy's proprietary data model (table names, grains, keys, business metrics). Publishable only as a methodology write-up ("how to build an agent-readable data catalog"), never the content.
- **Metrics:**
  - README doc states: "Five datasets, 99 tables total (from Glue metadata, 2026-07-09)" — `amazon_bid_engine_model_data` 11, `amazon_cloud` 1, `amazon_marketing_stream` 15, `amazon_reporting_api` 16, `filterbuy_lake_marts` 56.
  - I verified the per-table page counts by `ls` on `docs/data-lake/AwsDataCatalog/tables/<dataset>/`: 11 / 1 / 15 / 16 / 56 = **99 table pages**, matching the stated table count. Total markdown under `docs/data-lake/`: 115 files (`find ... -name '*.md' | wc -l`).
  - README doc states: "All 99 table tasks have been investigated: 97 are `second_pass_complete`; two ephemeral Marketing Stream staging artifacts are `offline_pass_complete`". The 56 `filterbuy_lake_marts` pages "were refreshed from live Glue/Athena evidence on 2026-07-16".
  - I counted 8 investigation folders: asin-pack-cost-sales, bom-cost-engine, ga4-events, ga4-transaction-attribution, keepa-lambda, marketing-ad-spend-athena, marketing-data-ingestion, must-ship-investigation.
  - I counted 17 Python scripts in `scripts/` (14 `athena_*`, 2 `redshift_*`, 1 `render_*`).
  - AWS account `937346932434`, region `us-east-1` (stated in README).
  - No `dbt_project.yml` or `profiles.yml` exists in this folder — dbt is referenced as the upstream producer of `filterbuy_lake_marts`, the dbt project itself lives elsewhere.

---

### filterbuy-dw-v2
- **Purpose:** Effectively empty — the directory contains only a shell script exporting Redshift connection variables for a `filterbuy_dw_v…` database. No warehouse code here.
- **Stack:** 1 shell credential file (`redshift_credentials.sh`, mode 600, exports `REDSHIFT_HOST/PORT/DATABASE/USER/PASSWORD/URL`).
- **Category:** `Data Engineering / ETL`
- **Client:** Filterbuy
- **Last commit:** unknown (no `.git` directory) | **Commits:** unknown | **Status:** Empty placeholder / credential stash
- **Portfolio:** no — contains a live database password; nothing to show.
- **Metrics:** 1 file total. Note: the actual "new data warehouse" design work is **not here** — it lives in `filterbuy-etl/docs/new_dwh/` (see architecture section below).

---

### filterbuy-etl
- **Purpose:** Canonical repository for every SQL query and Matillion job behind the Filterbuy Redshift data warehouse, organised as `layer → domain → object`, plus warehouse documentation, QuickSight audit artifacts, and the design of a rebuilt DWH.
- **Stack:** Amazon Redshift (`redshift-cluster-filterbuy`, `filterbuy_dw`, us-east-1) via `aws redshift-data`; Matillion ETL (job/transformation JSON exports); AWS Athena + Apache Iceberg (`sql/iceberg/`); Amazon QuickSight (`sql/qs/`, dashboard/dataset audit); `aws-vault` profile `rt`; shell scripts; GitHub Actions `protect-main.yml`. **No dbt** — no `dbt_project.yml` or `models/` directory exists.
- **Category:** `Data Engineering / ETL`
- **Client:** Filterbuy
- **Last commit:** 2026-04-20 | **Commits:** 35 | **Status:** Active reference repo (docs updated well past the last commit date via untracked working files)
- **Portfolio:** no — this is Filterbuy's proprietary business logic end to end (revenue, P&L, payroll, customer PII schemas). Also contains credential shell scripts (`redshift_credentials.sh`, `matillion_credentials.sh`, `middleware_credentials.sh`, `supplybuy_credentials.sh`) and a VPN profile (`prod-1-vpn.ovpn`). Only an abstracted architecture narrative is safe.
- **Metrics:**
  - 35 commits, all by "Rodrigo Teixeira" (`git shortlog -sn --all`); first commit 2025-12-09, last 2026-04-20.
  - **SQL files (`find -name '*.sql' -not -path '*/.git/*' | wc -l`): 1,202 total**, split as: `sql/` **81**, `matillion_exports/` **1,011**, `docs/` **36** (plus 4 elsewhere, e.g. `scripts/`).
  - `sql/` breakdown by layer (`find <layer> -name '*.sql' | wc -l`): `dwh` 27, `iceberg` 17, `stg1` 14, `qs` 12, `stg2` 11.
  - 5 business domains under each staging/warehouse layer: finance, hr, marketing, operations, sales (+ `subscriptions` under `dwh` only). `sql/iceberg/` has 3 domains: `amazon_reporting_api`, `amazon_bid_engine_model_data`, `keepa_data`.
  - **961 Matillion `.json` job/transformation exports** (`find matillion_exports -name '*.json' | wc -l`) across 7 bundles: customer_pipeline, run_incremental, purchasing_alerting_package, ups_jobs, recovered_from_snapshot_2026-04-07, Untitled, plus two `.zip` packages.
  - 614 markdown files repo-wide (`find -name '*.md' -not -path '*/.git/*' | wc -l`).
  - 9 Claude Code skills in `.claude/skills/`: airfilterbuy-unmatching-analysis, debug-etl, debug-matillion, debug-query, manage-matillion, marketing-report-context, quicksight, repo-context, update-repo-context.
  - 11 QuickSight dashboards documented under `docs/quicksight_metrics_audit/dashboards/` (operations_intraday, owbr, production_schedule, inventory_report, distribution_dashboard, executive_summary, profit_and_loss, data_detail, production_performance, marketing_report, filterbuy_crm_analysis).
  - 17 design documents in `docs/new_dwh/` (00_overview + 16 table designs).

---

## Data Warehouse Architecture

Evidence base: `filterbuy-etl/docs/context/dw_overview.md`, `filterbuy-etl/docs/context/schema_reference.md`, `filterbuy-etl/docs/new_dwh/00_overview.md`, `filterbuy-data-analytics/README.md`, `amazon-reporting-ingestion/README.md`. `filterbuy-dw-v2/` is an empty directory (one credential file) and contributes nothing.

**Two co-existing platforms.**

**1. Redshift (production warehouse, `filterbuy-etl`).**
- Platform: Amazon Redshift, cluster `redshift-cluster-filterbuy`, database `filterbuy_dw`, port 5439, region us-east-1. Accessed via `aws redshift-data execute-statement` under `aws-vault exec rt`.
- Layered schema model, **9 schemas documented** in `dw_overview.md` (counted from its schema table): `stg1` (raw), `stg1_restricted` (raw PII/payroll), `stg2` (typed/transformed), `stg2_restricted`, `dwh` (star-schema facts/dims), `dwh_views` (views + materialized views), `sandbox`, `sandbox_stg1`, `sandbox_stg2`. Data flow stated as `Source Systems → stg1 → stg2 → dwh`, with the `*_restricted` chain isolated for PII (SSN, tax, payroll, salary, addresses) behind elevated permissions.
- Table volumes are **doc-stated estimates, not counted by me** (`schema_reference.md` "Key Table Counts by Schema"): dwh 36 tables; dwh_views ~50 tables / ~60 views; stg1 ~400; stg1_restricted ~40; stg2 ~450; stg2_restricted ~20; sandbox ~45; sandbox_stg1 ~200; sandbox_stg2 ~350; `amazon_ads` ~40. Most of these are prefixed "~" in the source and must be quoted as approximate or dropped.
- Star schema: `schema_reference.md` lists **12 `dim_` tables** (business_location, campaign, cart, customer, date, employee, employee_history, financial_account, item, msa, quote, shipment) and **20+ `fact_` tables** (campaign_spend, commission, customer, expense, hours_worked, item, item_association, item_competitor, item_competitor_price_history, item_competitor_sales_history, item_price, item_price_history, manufacturing, manufacturing_need, manufacturing_performance, production_schedule, quote, … — I counted 18 in the visible fact table plus more beyond the excerpt read; treat "36 dwh tables" as the doc-stated total).
- **16 source systems** feed `stg1`, identified by prefix in `dw_overview.md`: AirfilterBuy (`ab_`), AirfilterBuy V2 (`abv2_`), SupplyBuy (`sb_`), QuickBooks Online (`qbo_`), Facebook Ads (`fb_`), Google Ads (`gads_`), Bing Ads (`bing_`), Amazon Advertising (`amazon_ads_`), Google Sheets (`gs_`), Pipedrive (`pd_`), Paycor/Paylocity (`pcty_`, restricted), Routable (`rtb_`), Keepa (`ka_`), ServiceTitan (`st_`/`servicetitan_`), Production Schedule (`ps_`), UPS (`ups_`), plus QuickSight metadata (`qs_`).
- 5 marketplaces tracked (`airfilterbuy`, `supplybuy`, `amazon_us`/`amazon_ca`, `walmart`, `hvac`); manufacturing locations named: Newberry, Pope, Ogden, New Kensington, Woodland.
- **Orchestration: Matillion ETL.** Evidence: `matillion_exports/` with 961 exported job/transformation JSON files and 1,011 SQL files; `matillion_credentials.sh`; dedicated `debug-matillion` and `manage-matillion` Claude skills; a `run_incremental` job bundle with `alerting`, `quicksight`, `transformations`, `data_loaders` sub-folders. Alerting via an `etl_alerting` SNS topic (referenced from `amazon-reporting-ingestion`).
- **BI layer: Amazon QuickSight.** `sql/qs/` holds dashboard views by domain; `docs/quicksight_metrics_audit/` documents 11 dashboards with extracted queries, dataset IDs, and baselines.
- **Data quality / contracts:** partial and informal. Evidence found: a `qa_*` table-prefix convention in `stg2` ("Quality Assurance — qa_* (Data quality checks)", `schema_reference.md`), quality-check SQL under `amazon-reporting-ingestion/sql/amazon_transformations/`, and per-table confidence labels (`confirmed` / `likely` / `possible`) in the data-lake catalog. **There is no dbt, no test framework, and no schema-contract layer in the Redshift repo** — I confirmed no `dbt_project.yml`, `profiles.yml`, or `models/` directory exists in `filterbuy-etl`, `filterbuy-dw-v2`, or `filterbuy-data-analytics`.
- **Rebuild in progress:** `docs/new_dwh/` (17 documents, started 2026-03-09) is a ground-up redesign. Its stated drivers, quoting the overview: `dim_cart` carries "255 QuickSight dataset references" and acts as the de-facto orders table while `fact_sales_orders` "is only used in 4 datasets"; "15 of the top 40 most-used QuickSight tables are stg2 staging tables". Design principle: self-sufficient, denormalized fact tables that "answer 80% of questions without any joins" and that "an analyst — or an AI agent — reading a single fact table" can use directly.

**2. Athena / Iceberg lakehouse (`amazon-reporting-ingestion` + `filterbuy-data-analytics`).**
- Platform: AWS Athena over Glue `AwsDataCatalog`, Apache Iceberg table format, workgroup `Analytics`, storage `s3://filterbuy-lakehouse/dbt-data/` and `s3://filterbuy-amazon-reporting-iceberg/`. AWS account 937346932434, us-east-1.
- **5 datasets / 99 tables**, doc-stated from Glue metadata 2026-07-09 and independently verified by me against the 99 per-table documentation pages: `filterbuy_lake_marts` 56 (dbt-produced marts: dims, facts, aggregates for sales, shipping, production, subscriptions, labor), `amazon_reporting_api` 16, `amazon_marketing_stream` 15, `amazon_bid_engine_model_data` 11, `amazon_cloud` 1.
- Ingestion is event-driven and serverless rather than orchestrated by Matillion: S3 `ObjectCreated` → EventBridge rule → Python 3.12 Lambda → Athena `MERGE INTO` / `DELETE+INSERT` into Iceberg. 5 Lambdas, 3 EventBridge rules, 3 S3 buckets (doc-stated in `amazon-reporting-ingestion/README.md`).
- dbt is used *somewhere upstream* to produce `filterbuy_lake_marts` (stated in `filterbuy-data-analytics/README.md`), but no dbt project exists in any of the ten folders in this batch — its location is unknown.
- The knowledge layer sitting on top is `filterbuy-data-analytics/docs/data-lake/`: 115 markdown files, 99 of them one-per-table pages carrying purpose, grain, keys, schema, metrics, relationships, cost-aware query patterns, open questions, and an evidence log with a citation for every assertion.

**Counting method, restated:** every "I counted" figure came from `find`/`ls`/`grep -c` run directly on the working tree today; every "doc states" figure is a literal value written in a repository markdown file and was not independently verified against the live warehouse.

---

## AI Skills Tooling

Four distinct layers of AI/agent tooling appear in this batch. Only one is a real engineered product.

**1. `filterbuy-ads-skills` — the production agent-skill platform (the flagship).**
- A pnpm/TypeScript monorepo of **61 skills** across 3 implemented channels (Google Ads 33, Amazon Ads 15, Meta 13 — counted from unique snake_case `name:` entries in each `src/skills/<vendor>/registry.ts`), built on a zero-runtime-dependency core package `@filterbuy/skills-core`.
- Its point is a uniform safety contract for agents that *mutate* ad accounts. Every skill returns the same `SkillResult` envelope: `ok`, `preview` (populated for both dry-run and applied), `applied`, `skipped[]`, `errors[]` (with `retryable`), `warnings[]`, and an `audit` block carrying `invocationId`, `idempotencyKey`, `riskLevel` (LOW/MEDIUM/HIGH), `requiresApproval`, `estimatedBlastRadius`, `rollbackHint`, timestamps, and `persistedAuditId`. README states eight non-negotiable invariants govern this (documented in AGENTS.md).
- Concrete safety mechanics, from README/AGENTS.md: `dryRun: true` is the schema default; the idempotency key is derived from `(skillName, subjectId, payload)`; audit records go to a pluggable `AuditSink` (`FileAuditSink`) wrapped in `withRedaction`; HIGH-risk results set `requiresApproval` so a human gates the non-dry-run re-run; `policies/` holds thresholds, blast-radius builders, allowlists and a mutation guard.
- **Zod schemas serve double duty** — runtime validation and LLM tool-use definitions — which is what makes the registry directly consumable by an agent. Each registry entry carries `purpose`, `riskLevel`, `requiresApproval`, `inputSchema`, `safetyNotes`, `examples`.
- Architectural rule: dependencies flow upward only; `skills-core` imports nothing, channel packages never import each other. This is what lets an agent treat Google, Amazon and Meta identically.
- Engineering maturity: 59 Vitest test files (no live API in CI — mocked fetch; smoke/sandbox scripts hit real vendors manually), Changesets-driven releases publishing to a private GitHub Packages registry, CI + Release GitHub Actions workflows, generated vendor endpoint code reproducible from `research/` artifacts via `pnpm generate:endpoints`.
- **It is not an MCP server** — it is a published TypeScript library of typed, audited functions plus a machine-readable registry.
- Scale/authorship: 46 commits (41 by Rodrigo Teixeira, 5 by CI bot), 2026-05-18 → 2026-06-17; 143 non-test source TS files across the 4 packages.

**2. Repo-embedded Claude Code skills — operational agent tooling for the warehouse.**
- `filterbuy-etl/.claude/skills/`: **9 skills** — `debug-etl`, `debug-matillion`, `manage-matillion`, `debug-query`, `quicksight`, `marketing-report-context`, `airfilterbuy-unmatching-analysis`, `repo-context`, `update-repo-context`. Several are very large (one `SKILL.md` is 60.7 KB, another 34.3 KB), i.e. substantial encoded operational knowledge, not stubs.
- `amazon-reporting-ingestion/ai/skills/`: **3 skills** (`bid-model-health`, `fact-stats-diff`, `repo-context`), each with `SKILL.md`, `skill.meta.yaml`, `references/` and `scripts/`. Notable pattern: a **tool-neutral canonical skill source** in `ai/skills/` that `scripts/sync-ai-skills.sh` compiles into `.claude/skills/` and `.codex/skills/` mirrors, with a `check` mode that fails on drift — cross-agent skill portability with CI-style verification.
- `filterbuy-data-analytics` also carries `.claude/skills/`, `.agents/skills/`, `agents/skills/` and `agents/templates/` (per-table Athena mapping task template), plus a `graphify-out/` knowledge graph.

**3. `claude-skills-factory` — an unversioned scratch folder, not a product.** 6 personal-productivity skill markdown files (email search/reply/send, calendar, availability, aws-vault-setup) plus a `repo-context` skill dir, and Facebook/Bing Ads API onboarding quickstarts. No git history, no framework, no MCP server. Its main characteristic for CV purposes is that it is a credential graveyard — exclude entirely.

**4. `filterbuy-ads-app` — the unimplemented UI for layer 1.** Design mockups only (6 screens) for an "Ads Co-Pilot" that surfaces agent proposals, a skill catalog, high-risk approval modals and an activity/audit log — the human-in-the-loop front end that the `filterbuy-ads-skills` approval/audit envelope was designed to feed. No code was written in this folder.

**Cross-cutting theme worth putting on the CV:** the same person built the warehouse (Redshift + Matillion + Athena/Iceberg), then built the agent-safety layer that lets LLM agents operate on top of it (61 audited ad-platform skills, dry-run + risk + approval + rollback), then encoded the operational runbooks themselves as portable agent skills (12 skills across `filterbuy-etl` and `amazon-reporting-ingestion`), then documented the entire data lake as an agent-readable library (99 table pages). All of it is Filterbuy-internal and none of it can be published verbatim.


<!-- ===== batch F3 ===== -->

# Repo Inventory — Batch F3 (Filterbuy)

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/Filterbuy/afb-git/`
Audit date: 2026-07-29. "Active" = last commit within 6 months of 2026-07-29 (i.e. on/after 2026-01-29).

All 10 repos are Filterbuy (employer) work.

---

### filterbuy-gdf-catalog
- **Purpose:** Working directory that builds, QAs and SFTP-uploads Filterbuy's Google Data Feed / Google Merchant Center product feed (US + Canada), plus GMC API diagnostics and patching. NOT a warehouse data dictionary — it is a *product catalog / merchandising feed* layer.
- **Stack:** Python 3 (pandas-style CSV/XLSX scripts, `openpyxl`-class Excel sources), Google Content API for Shopping (GMC product/productstatuses insert + patch), SFTP upload (`upload_to_gdf.sh`), Google service-account JSON key. No package manifest, no Dockerfile, no CI.
- **Category:** `Data Engineering / ETL`
- **Client:** Filterbuy
- **Last commit:** unknown (not a git repository — README states "Not a git repo — plain working directory") | **Commits:** unknown | **Status:** active — newest file mtimes are 2026-07-27 (`scripts/gmc_insert_auto_cabin.py`, `analysis_outputs/gmc-diagnostics/*_20260727-*`), counted via `find -newermt` + `stat`
- **Portfolio:** no — confidentiality risk is high. The directory contains live Filterbuy pricing files (`Master Pricing File Updated.xlsx`), a committed `.env`, a Google service-account private key (`filterbuy_service-account_key.json`), full SKU/price/URL catalogs, and a 74.5 MB GMC product-status export. Nothing here can be shown without heavy redaction; at most the *pattern* (feed QA/governance pipeline) can be described in prose.
- **Metrics** (all literal or literally counted):
  - Live feed `Go Data Feed Merge File.csv`: **10,532 data rows × 132 columns** — counted directly with Python `csv` reader on 2026-07-29. (README states 10,464 rows × 121 columns "as of 2026-05-20"; the file has grown since.)
  - README states the Canada/GMC extension added **34 columns** (87 original + 34).
  - **16 files** in `scripts/` (counted with `ls | wc -l`), incl. `add_canada_fields_to_merge.py`, `validate_canada_fields_live.py`, `full_scan_price_drift.py`, `gmc_diagnostics.py`, `gmc_patch_products.py`, `append_category_missing_skus.py`.
  - README-stated QA outcomes (literal): **2,488 SKUs dropped** for >1% price drift vs live page (2026-05-20); **468 no-PDP SKUs dropped** (2026-05-19); **14 "Not Available" placeholder URLs dropped** (2026-05-20); half-inch dot→hyphen URL rewrite applied to `Merge_Url` and `Merge_Url_CA`; `Merge_Google_Product_Category` backfilled to `3573` (air filters) / `605` (mini-splits); live-validation sample size **150 SKUs** against filterbuy.ca.
  - `analysis_outputs/` organised into **6 topic folders**: canada-fields, canada-mapping, category-append, gmc-diagnostics, share, url-quality.

---

### filterbuy-marketing-app
- **Purpose:** In-house headless CMS ("Filterbuy CMS") for the marketing team — blog posts and dynamic landing pages with AI-assisted authoring; filterbuy.com consumes its content API.
- **Stack:** Next.js 16, React 19, TypeScript, tRPC v11, Drizzle ORM + PostgreSQL 17, Better Auth + `@filterbuy/rp-sso` (Workforce SSO relying party), Tailwind v4 + Radix UI, TipTap editor, `@anthropic-ai/sdk` (Claude), AWS S3 + presigned URLs, SendGrid, Turborepo + pnpm workspaces, Biome, Vitest, Docker Compose + LocalStack. CI: `.github/workflows/ci.yml`, `deploy.yml`, `migrate.yml`.
- **Category:** `Web / App`
- **Client:** Filterbuy
- **Last commit:** 2026-06-15 | **Commits:** 669 | **Status:** active
- **Portfolio:** no — proprietary internal product with employer branding, SSO integration and business logic. Can be described generically ("built an AI-native headless CMS with Next.js/tRPC/Drizzle") but no code or screenshots.
- **Metrics:** none stated. (Structural facts only: monorepo with `apps/web` + 2 shared packages; 669 commits; latest work includes an A/B-experiment bot-impression filter and an Amazon Ads client factory.)

---

### filterbuy-sso
- **Purpose:** Two-app SSO monorepo providing Filterbuy's identity layer — `customer-sso` (end-customer identity) and `workforce-sso` (employee/internal identity), both acting as OIDC providers for downstream Filterbuy apps.
- **Stack:** TypeScript, Next.js (App Router), **Better Auth + `@better-auth/oauth-provider`** as the OIDC provider implementation, `jose` for JWT/JWKS, Drizzle ORM + PostgreSQL (`postgres` driver), Zod + `@t3-oss/env-nextjs` for env validation, SendGrid (magic links, customer app only). Turborepo + pnpm, Biome, Knip, dependency-cruiser (architecture-boundary enforcement in CI), Vitest (unit + integration projects), Docker Compose + Traefik with local certs. CI: `ci.yml`, `deploy.yml`, `integration-tests.yml`.
- **Auth architecture (evidence-based):** self-hosted OIDC identity provider, not a SaaS IdP. Two independent Better Auth instances each with their own Postgres database (`customer-sso-db`, `workforce-sso-db` in the orchestrator compose) and their own JWKS table (`jwks` table seen in the security review). OIDC clients are seeded per-app (`seed:oidc-clients` script); a break-glass admin account is seeded for workforce (`seed:break-glass`). Downstream apps consume it as relying parties via the published `@filterbuy/rp-sso` package (installed from GitHub Packages by the CMS, B2B and Finance apps). A user-import plugin + admin CSV upload was added 2026-05-18 for bulk customer migration.
- **Category:** `Web / App`
- **Client:** Filterbuy
- **Last commit:** 2026-05-19 | **Commits:** 136 | **Status:** active
- **Portfolio:** no — authentication infrastructure for the employer, and the repo contains a 27.9 KB internal security review enumerating unfixed vulnerabilities. Publishing any of it is a live security risk. The *architecture* (self-hosted OIDC provider, dual customer/workforce trust domains, arch-boundary linting in CI) is safe to describe in prose.
- **Metrics:** Internal security review `docs/security-review-2026-02-27.md` (dated 2026-02-27) lists a **Top 5 risk table — 3 rated High, 2 rated Medium** (counted from the table). No performance/scale metrics stated.

---

### ga4-analysis
- **Purpose:** Analysis workspace for the Filterbuy.com GA4 raw export in BigQuery — a profiled schema/context reference plus a library of reusable GAQL/SQL analyses (channel mix, funnel, affiliate attribution, new-customer revenue, and an affiliate-fraud audit).
- **Stack:** BigQuery SQL against the GA4 raw export, GCP service account, Claude Code skill (`.claude/skills/ga4-explore`). No package manifest, no CI, no application code.
- **Category:** `Analytics & BI`
- **Client:** Filterbuy
- **Last commit:** 2026-04-23 | **Commits:** 1 | **Status:** active
- **Portfolio:** no — the repo root contains a committed GCP service-account key (`filterbuy-195915-e3a2e8e1cd7e.json`) and the queries embed Filterbuy's GA4 property/dataset IDs and an affiliate-fraud investigation. Generic GA4-modelling technique could be written up from scratch, but this repo cannot be published.
- **Metrics** (literal, from `GA4-CONTEXT.md`, profiled 2026-04-22): dataset `analytics_320918237`, GA4 property `320918237`, single web stream `3798291800`; **855 `events_YYYYMMDD` tables, 1 intraday, 817 `users_*`, 826 `pseudonymous_users_*`**; event date coverage **2023-12-19 → yesterday**. Repo contains **9 SQL query files** (counted in `queries/`) and a 26.4 KB context doc + 13.4 KB event-schema doc.

---

### google-ads-skills-library
- **Purpose:** `@filterbuy/google-ads-skills` — a safe, agent-callable Google Ads API library: typed REST client, a generated endpoint-tool registry covering the full Google Ads v24 surface, a GAQL query builder, and higher-level "operational skills" with dry-run/approval/audit safety controls for LLM agents.
- **Stack:** TypeScript (ESM), Zod for schemas, Vitest, tsx, pnpm. Google Ads REST API v24 + OAuth2 refresh-token flow. Endpoint catalog is code-generated from a Firecrawl scrape of Google's REST reference (`pnpm scrape:docs && pnpm generate:endpoints`). No runtime framework — pure callables.
- **Category:** `AI & LLM` (secondary: `MarTech & Advertising`)
- **Client:** Filterbuy
- **Last commit:** 2026-05-13 | **Commits:** 2 | **Status:** active
- **Portfolio:** partial / rewrite-only — the library itself is generic Google Ads tooling with no Filterbuy business data in `src/`, but `.env` is committed (Google Ads developer token + OAuth secrets) and the package is scoped `@filterbuy/`. A sanitised fork or a written case study is feasible; the repo as-is is not publishable.
- **Metrics** (literally counted): **111 distinct Google Ads v24 services** in `src/providers/google-ads/generated/endpoint-catalog.ts` (counted distinct `service: "..."` + `resourceMutate("...")` identifiers with a regex script) — matches the README claim of "all 111 v24 services". **26 skill/shared TypeScript files** under `src/skills/` and **54 `.ts` files under `src/`** total; **16 test files** under `tests/` (all counted with `find | wc -l`). Safety layer: dry-run defaults, blast-radius classification, deterministic idempotency keys, redacting audit sink, customer/scope allowlists, bulk caps (README, literal).

---

### gs_conversion_table
- **Purpose:** unknown — the directory is completely empty.
- **Stack:** unknown
- **Category:** unknown (no evidence)
- **Client:** Filterbuy
- **Last commit:** unknown (not a git repository) | **Commits:** unknown | **Status:** unknown — no files at all (`find` returns only the directory itself)
- **Portfolio:** no — nothing exists.
- **Metrics:** none stated.

---

### keepa-data-extraction
- **Purpose:** Weekly serverless extraction of Amazon competitor product data from the Keepa API for Filterbuy's top-selling filter sizes — a migration of a failing Matillion job onto AWS Lambda + Step Functions.
- **Stack:** Python (only declared dependency: `requests>=2.31.0,<3.0.0`), AWS Lambda (4 functions), AWS Step Functions state machine (`step_function/state_machine.json`), EventBridge Scheduler, Amazon Athena (query for top sizes), Amazon S3 (`s3://filterbuy-datawarehouse/keepa_data/`), bash deploy script, GitHub Actions `deploy.yml`.
- **Category:** `Data Engineering / ETL`
- **Client:** Filterbuy
- **Last commit:** 2026-03-21 | **Commits:** 1 | **Status:** active
- **Portfolio:** no — small repo but it hardcodes Filterbuy's S3 warehouse bucket paths and internal Matillion job dependencies. The migration story (13-hour brittle ETL job → scheduled Step Functions workflow) is a strong CV *bullet*, written in prose without the code.
- **Metrics** (literal from README): replaced the `ka_data_extraction` Matillion job that **"ran ~13 hours with token timeout failures"**; schedule **Saturday 06:00 UTC**; **4 Lambda functions** with stated timeouts/memory (`keepaArchiveAndGetSizes` 5 min/256 MB, `keepaCheckTokens` 30 s/128 MB, `keepaExtractSize` 15 min/256 MB, `keepaWriteCompletion` 30 s/128 MB); **3 S3 output datasets** + a `_SUCCESS` marker; downstream consumer is the `ka_transformations` Matillion job (runs Sunday).

---

### matillion-ai-debugging
- **Purpose:** LLM-assisted forensic debugging and documentation of Filterbuy's Matillion ETL platform — exports the whole Matillion project via its REST API, parses it into greppable artifacts, and pairs that with a Claude Code skill that runs live Redshift diagnostics to root-cause pipeline failures. Also produced the warehouse's de-facto **data dictionary**.
- **Stack:** Python 3 parsing scripts (`analyze-matillion-export.py`, `extract-all-sql.py`, `extract-sql-queries.py`), bash (`quick-diagnose.sh`), Matillion REST API v1 export endpoints (`/rest/v1/group/FilterBuy/project/filterbuy_dw/.../export`), AWS `redshift-data` API against `redshift-cluster-filterbuy` / `filterbuy_dw`, Claude Code custom skill (`.claude/skills/debug-matillion/SKILL.md`), Markdown knowledge base. No package manifest, no CI.
- **AI-debugging mechanism (how it actually works, from evidence):**
  1. **Extract** — the full Matillion project (v1.74.5) is pulled through the Matillion REST export API into `exports/matillion-full-export.json` (5.8 MB) plus per-job JSON exports.
  2. **Flatten for retrieval** — `extract-all-sql.py` unpacks every embedded SQL query into individual numbered files under `exports/sql-extracted/`, and isolates suspected failure points into a dedicated `line_type_joins/` subdirectory. This turns an opaque GUI-ETL blob into a corpus an LLM can grep and read.
  3. **Index** — `analyze-matillion-export.py` emits `exports/analysis-results.json` with job counts, production-schedule job list, and join-pattern counts.
  4. **Ground the model** — `docs/context/` supplies the warehouse schema dictionary, a data-source inventory and prior investigation write-ups so the agent reasons against documented grain/keys instead of guessing.
  5. **Live diagnosis loop** — the `debug-matillion` skill encodes a runbook of ordered `aws redshift-data execute-statement` probes (date-gap check on `stg2.ps_staffing_by_dt`, `is_selected_dt` flag distribution, `dwh.fact_production_schedule` null-`line_type` counts, history-table freshness), each with an **expected** result, then maps observed deviations to a catalogue of known root causes and remediation SQL.
  6. **Persist findings** — root-cause evidence, fix guides and dated handoffs are written back into `docs/` (`root-cause-evidence.md`, `production-schedule-fix-guide.md`, `.claude/handoffs/`), so the next agent session resumes with prior state.
- **Category:** `AI & LLM` (secondary: `Data Engineering / ETL`)
- **Client:** Filterbuy
- **Last commit:** 2026-01-16 | **Commits:** 3 | **Status:** **inactive** (2026-01-16 is more than 6 months before 2026-07-29)
- **Portfolio:** no — the export contains Filterbuy's complete production ETL logic and SQL, plus `credentials.sh` and Matillion host/credential instructions. The *technique* (export a GUI ETL platform to text, ground an LLM on it, drive a deterministic diagnostic runbook) is an excellent CV/portfolio narrative and can be rewritten generically with no Filterbuy artifacts.
- **Metrics** (literal or literally counted):
  - `exports/analysis-results.json` (produced by the repo's own analyzer): Matillion **version 1.74.5**, **total_jobs 253**, **ps_jobs 109** (production-schedule-related jobs), **line_type_join_count 210**, `jobs_with_target_tables 0`.
  - **361 extracted SQL files** under `exports/sql-extracted/` (counted with `find -type f | wc -l`).
  - `docs/context/dwh-schema-documentation.md` (50.3 KB, "Last Updated: 2026-01-19"): documents the `dwh` schema of `filterbuy_dw` — header states **36 tables (12 dimension + 24 fact)**; I verified **36 rows** in the Table Summary (12 `dim_*` + 24 `fact_*`) and **36 corresponding detailed `###` sections**, plus a "Validated Field Definitions" section (~194 lines) and a "Data Quality Notes" section. Row counts are recorded per table (e.g. `dim_cart` 21,011,165; `dim_campaign` 760; `dim_business_location` 25).
  - `docs/context/data-sources-inventory.md` (26.5 KB, created 2026-01-16): **8 source categories** containing **16 documented data sources** (counted from `###`/`####` headings) — Airfilterbuy RDS, Supplybuy RDS, Pipedrive, Service Titan, Klaviyo (not integrated), QuickBooks Online, Routable, Google Ads, Meta Ads, Bing Ads, TikTok Ads, Amazon Advertising, Keepa, UPS, Google Sheets production inputs, QuickSight. Documents **4 key ETL orchestrations** (`run_incremental`, `run_production_schedule_v4`, `run_mkt_incremental`, `qs_refresh`) and the table-prefix→source naming convention.
  - Stated platform constraint: **Matillion v1.74.5 EOL 2026-04-01**, which motivated the repo.
  - **13 Markdown documents** in `docs/context/` (counted with `ls`).

---

### mmm-filterbuy
- **Purpose:** Marketing Mix Modeling for Filterbuy — a Bayesian, privacy-safe multi-channel media model built on **Google Meridian**, fed by a purpose-built Athena/Iceberg lakehouse, trained on ECS Fargate, producing channel contribution, ROI/ROAS, saturation curves and budget optimization.
- **Stack:** Python ≥3.10. **`google-meridian>=1.0.0`** + JAX/jaxlib + NumPyro (MCMC); pandas, numpy, polars; SQLAlchemy + `redshift-connector` + psycopg2; boto3; Streamlit dashboard; plotly/matplotlib/seaborn; pydantic/pydantic-settings; typer CLI (`mmm`); loguru. Infra: AWS Athena + Glue Iceberg lakehouse (`mmm_model_data`), S3 (`filterbuy-mmm-iceberg`, `filterbuy-mmm-artifacts`), ECR, ECS Fargate + Spot cluster `mmm-cluster`, CloudWatch, IAM/OIDC. CI: `.github/workflows/ci.yaml` (ruff + black + mypy) and `deploy.yml` (builds/pushes the training image to ECR via OIDC). Docker: `docker/Dockerfile.training` (Meridian + TF + tfp).
- **MMM framework:** **Google Meridian** — explicitly (README line 3, `pyproject.toml` dependency `google-meridian>=1.0.0`, `docker/Dockerfile.training`, and `src/mmm_filterbuy/model/train.py`'s `_fit_meridian()`). Not Robyn, not PyMC-Marketing. Adstock: geometric, `max_lag: 8` weeks. Saturation: Hill. MCMC: 1000 warmup / 1000 samples / 4 chains (default), 2000/2000/4 with `target_accept_prob 0.9` in production. Controls: workdays, `is_bfcm`, `is_christmas`, `has_holiday`, plus Fourier annual seasonality (sin/cos). Weekly grain.
- **Budget optimization output:** yes — `src/mmm_filterbuy/analysis/optimization.py` defines a `BudgetOptimizer` class over a fitted model with `optimize(total_budget, min_spend, max_spend)`, `scenario_analysis(...)` and `calculate_efficiency_frontier(...)`; README documents "Budget Optimization" and "Saturation Curves" as expected outputs. Note: README flags `src/mmm_filterbuy/analysis/` and `cli.py` as **stale / pending refactor** (they reference a removed `MeridianMMM` class), so optimization is designed-and-coded but not confirmed wired to the current training path.
- **Category:** `Analytics & BI` (secondary: `Data Engineering / ETL` for the lakehouse layer)
- **Client:** Filterbuy
- **Last commit:** 2026-05-13 | **Commits:** 26 | **Status:** active
- **Portfolio:** no — the README publishes Filterbuy revenue and per-channel spend figures, the AWS account number, S3 bucket names and Redshift cluster identifiers. Extremely high confidentiality risk. This is however the single strongest *CV narrative* in the batch and can be described without any numbers ("built a Bayesian MMM on Google Meridian over an Athena/Iceberg lakehouse, trained on ECS Fargate, with budget-allocation optimization").
- **Metrics** (all literal from README/config — these are Filterbuy-confidential, do not publish):
  - Channels modeled — config `model.media_channels`: **4 aggregate channels** (google_ads, meta, bing, tiktok); channel definitions exist for **5 platforms** (Google Ads incl. Search/Display/PMax sub-channels, Meta, Bing, TikTok, Amazon Ads).
  - DTC channel taxonomy (locked, README): **9 channels** — Google Non-Brand Search $5.7M, Google PMax $2.7M, Meta $2.4M, Bing Non-Brand Search $2.1M, Google Brand Search $1.1M, Bing Other $857K, Google Other $845K, Bing Brand Search $660K, TikTok $171K.
  - Model scopes (`src/mmm_filterbuy/scopes.py`): **3** — `DTC_REVENUE` (filterbuy.com revenue ~$70M YTD, 9 channels) Active; `AMAZON_US_REVENUE` (~$245M YTD) Active; `DTC_NEW_CUSTOMER_REVENUE` **Blocked** by an upstream data defect (`daily_revenue.is_first_order` false on every row).
  - Lakehouse: **11 Athena/Iceberg views deployed and validated 2026-05-06** — verified by counting `sql/iceberg/mmm_model_data/` which contains files `01`–`11` (11 numbered DDL files + a `backfill/` directory).
  - Frozen historical Iceberg backfills (README, literal): `historical_amazon_sp_spend` 2023-12-07→2025-08-31 $24.1M; `historical_amazon_sb_spend` $2.93M; `historical_amazon_sd_spend` $2.37M; `historical_bing_spend` 2024-01-01→2025-11-20 $3.97M.
  - Evaluation: MAPE + **6 "sniff guards"** combined into a `composite_score` (`model/eval.py`).
  - Production alert thresholds (config): min R² 0.70, max ROAS CI width 3.0, max data staleness 48 h; retraining cron `0 6 * * 1` on a 104-week rolling window.
  - Organic traffic view buckets non-paid GA4 sessions into **6 buckets**; a `(not set)|(not set)` **≈17% loss** is filtered, not redistributed (README, literal).

---

### orchestrator
- **Purpose:** Filterbuy's **local development and ephemeral-environment orchestration layer** — one Docker Compose stack (behind Traefik with HTTPS) that runs the entire Filterbuy product estate on a developer's machine, plus GitHub Actions + Terraform that stand up the same stack as a per-branch ephemeral environment on AWS ECS. It orchestrates *applications and environments*, not data pipelines (no Airflow, no Matillion, no Step Functions here).
- **Stack:** Docker Compose (6 compose files), Traefik (reverse proxy + local TLS certs), **Terraform** (ECS Fargate, EFS, ALB/NLB, Cloud Map service discovery, IAM, Route53) for ephemeral envs, **GitHub Actions** (3 workflows: create / destroy / cleanup), AWS (ECR, S3 DB dumps, RDS, aws-vault + MFA), LocalStack, MLflow, and a full observability sub-stack (Grafana, Prometheus, Alertmanager, Loki, Promtail, Tempo, node-exporter, cAdvisor, Postgres/Redis/memcached/OpenSearch exporters). Services span Django, Next.js, legacy Bixly, SupplyBuy, B2B, Product Catalog, CMS, Finance, Sanity-localizer, Celery workers/beats, Postgres, Redis, OpenSearch, InfluxDB, Mailpit, Stripe webhooks.
- **What orchestrates what (counted with an awk pass over the `services:` block of each compose file):**
  - `docker-compose.yml` — **48 services** (core stack: traefik, certs, next, django + db/redis/celery-worker/celery-beat, bixly + db/redis/celery-worker/celery-beat, supplybuy + db/redis/memcached/opensearch/influxdb, outside, b2b stack incl. Stripe webhooks/migrate/seed, product-catalog stack, customer-sso + workforce-sso + their dbs/init/seed + sso-redis, mailpit, localstack, mlflow)
  - `docker-compose.observability.yml` — **20 services**
  - `docker-compose.sanity-localizer.yml` — **7 services**
  - `docker-compose.analytics.yml` — **5 services**
  - `docker-compose.finance.yml` — **5 services**
  - `docker-compose.cms.yml` — **3 services**
  - **Total: 88 compose service definitions across 6 files.**
  - README lists **13 HTTPS local hostnames** routed through Traefik (`*.filterbuy.local`).
  - Terraform (`terraform/ephemeral/*.tf`, 15 `.tf` files): **96 resources** counted by regex over `^resource "` — including **29 `aws_ecs_task_definition`, 22 `aws_ecs_service`, 21 `aws_service_discovery_service`**, 6 EFS access points, 3 security groups, 2 IAM roles + 2 role policies, 1 ECS cluster, 1 EFS filesystem, ALB + target group + 2 listeners, 1 Route53 record, 1 CloudWatch log group.
  - **3 GitHub Actions workflows** driving ephemeral envs: `ephemeral-env-create.yml` (36.4 KB), `ephemeral-env-cleanup.yml` (22.8 KB), `ephemeral-env-destroy.yml` (7.7 KB).
  - Ephemeral envs expose **8 per-service NLB URLs** per branch (README list).
- **Category:** `Automation & Tooling` (secondary: `Web / App` infrastructure)
- **Client:** Filterbuy
- **Last commit:** 2026-05-18 | **Commits:** 206 | **Status:** active
- **Portfolio:** no — it maps Filterbuy's entire internal service topology, AWS account ID (937346932434), S3 dump buckets, and prod-DB sync procedures (`sync-prod-db-to-local.sh`, 21 KB; `SYNC-PROD-DB.md`). Publishing it would be an architecture disclosure. Strong CV bullet in prose: "built the developer platform that runs 88 containerised services locally and provisions per-branch ephemeral AWS ECS environments via Terraform + GitHub Actions in ~15–20 min."
- **Metrics:** README states ephemeral environment creation takes **"~15-20 minutes"**. All service/resource counts above are my own literal counts (method stated inline). No performance or cost metrics stated.

---

## Data Governance & Orchestration

**Two distinct "catalog" layers exist in this batch, and they are not the same thing.**

### 1. Warehouse data dictionary — lives in `matillion-ai-debugging`, not in `filterbuy-gdf-catalog`
The batch's actual **data-governance artifact** is `matillion-ai-debugging/docs/context/`, produced as a by-product of the LLM-assisted ETL debugging effort. Evidence:

- `dwh-schema-documentation.md` (50.3 KB, "Last Updated: 2026-01-19") is a formal **data dictionary for the `dwh` schema of `filterbuy_dw`**: a star-schema reference with **36 tables — 12 `dim_*` + 24 `fact_*`** (I verified 36 summary rows and 36 matching detailed sections), each with a description and a recorded row count (e.g. `dim_cart` 21,011,165 rows), plus explicit sections for **Key Relationships**, **Validated Field Definitions**, and **Data Quality Notes**. The "Validated Field Definitions" section is the contract-like layer — it pins down what each ambiguous field actually means after verification against production.
- `data-sources-inventory.md` (26.5 KB, created 2026-01-16) is the **upstream lineage / source register**: **8 categories, 16 documented sources** (RDS Airfilterbuy + Supplybuy, Pipedrive, Service Titan, Klaviyo [not integrated], QuickBooks Online, Routable, Google Ads, Meta, Bing, TikTok, Amazon Advertising, Keepa, UPS, Google Sheets, QuickSight), each with source type, credential variable, table prefix, stg1/stg2 table counts, owning orchestration and business context — plus the **table-prefix → source-system naming convention** (`ab_`, `sb_`, `pd_`, `gs_`, `dw_`, …) that functions as the warehouse's governance convention.
- Together with the **361 extracted SQL files** and the **253-job / 210-`line_type`-join** index from `analysis-results.json`, this is a complete lineage-and-contract picture of a GUI-based ETL platform that had none.
- Its second-order value is that it exists specifically to make an **LLM agent** reason correctly about the warehouse — governance documentation as agent-grounding, which is exactly the mechanism the `debug-matillion` skill relies on.

`mmm-filterbuy` adds a second, narrower contract layer: `docs/mmm_views_master_prompt.md` (68.6 KB) documents **every one of the 11 Athena/Iceberg views' source, parser and validation rules** as a data-engineering handover, and `v_marketing_spend` is explicitly defined as a **"9-column shared contract"** unioning the 5 spend channels — an actual data contract, in the literal sense.

### 2. Product feed catalog — `filterbuy-gdf-catalog`
This is a **merchandising/product-feed governance layer**, not a warehouse catalog: it owns the Google Data Feed / Google Merchant Center file (**10,532 rows × 132 columns**, counted 2026-07-29) with a documented **source-of-truth precedence rule** (XLSM > Master Pricing File > supplier table > website scrape), idempotent Python scripts with timestamped backups, and a QA regime that produced literal, auditable outcomes (2,488 SKUs dropped for >1% price drift; 468 no-PDP SKUs dropped; 14 placeholder URLs dropped; currency and URL-format corrections). It is data governance applied to a commercial catalog rather than to a warehouse — worth presenting as *catalog quality / data-contract enforcement*, distinct from the dictionary above.

### 3. Orchestration
"Orchestration" in this batch splits three ways, and the CV should not blur them:

- **`orchestrator` = environment/application orchestration.** Docker Compose + Traefik locally (**88 service definitions across 6 compose files**, 13 HTTPS local hostnames), and Terraform + GitHub Actions for per-branch ephemeral AWS environments (**96 Terraform resources, 29 ECS task definitions, 22 ECS services, 21 Cloud Map service-discovery entries**, 3 workflows, ~15–20 min provisioning). No Airflow, no DAGs, no data-pipeline scheduler.
- **Matillion = the (legacy) data-pipeline orchestrator**, documented but not owned in this batch: **253 jobs**, of which **109** relate to the production-schedule tool, with **4 key orchestrations** named (`run_incremental`, `run_production_schedule_v4`, `run_mkt_incremental`, `qs_refresh`) — and a hard EOL of **2026-04-01** for v1.74.5.
- **AWS Step Functions = the replacement pattern**, demonstrated by `keepa-data-extraction`: a Matillion job that ran ~13 hours with token-timeout failures was re-platformed onto EventBridge Scheduler → Step Functions (Map + Wait states) → **4 Lambdas** → S3 with a `_SUCCESS` marker. `mmm-filterbuy` shows the same direction of travel on the modelling side (ECS Fargate training tasks + Athena/Iceberg instead of Redshift/Matillion).

That trajectory — *documented the legacy orchestrator with AI assistance, then migrated workloads off it onto serverless AWS orchestration and an Iceberg lakehouse* — is the coherent story this batch supports.

---

## Cross-batch notes

- **Confidentiality: 9 of 10 repos are not publishable.** Committed secrets found: `filterbuy-gdf-catalog/.env` + `filterbuy_service-account_key.json`; `ga4-analysis/filterbuy-195915-e3a2e8e1cd7e.json` (GCP service-account key); `google-ads-skills-library/.env`; `matillion-ai-debugging/credentials.sh`. Repos also expose the AWS account ID, internal hostnames, revenue figures and per-channel ad spend. Recommendation: describe everything in prose with no figures; only `google-ads-skills-library` is a plausible candidate for a sanitised public rewrite.
- **Two repos are not git repositories:** `filterbuy-gdf-catalog` (explicitly stated in its README) and `gs_conversion_table` (empty directory). Commit counts and last-commit dates for these are unknown.
- **`gs_conversion_table` is empty** — exclude from any CV inventory.
- **Status summary:** 8 active (marketing-app, sso, ga4-analysis, google-ads-skills-library, keepa, mmm-filterbuy, orchestrator, gdf-catalog by file mtime), 1 inactive (`matillion-ai-debugging`, last commit 2026-01-16), 1 unknown (`gs_conversion_table`).


<!-- ===== batch F4 ===== -->

# Inventory — Batch F4 (Filterbuy)

Base folder: `/Users/rodrigoteixeira/Documents/RODRIGO_MAC/Rodrigo/Filterbuy/afb-git/`
Audit date: 2026-07-29. "Status: active" = last activity within 6 months of 2026-07-29 (i.e. on/after 2026-01-29).

**Note on git data:** 4 of the 9 folders are NOT git repositories (`pipedrive`, `trigger-matillion-orchestrations`, `unmatch-orders`) or have zero commits (`rt-weekly-worklog`, `tiktok-report-automation`). For those, "Last commit" is reported as "unknown (not a git repo)" / "unknown (0 commits)" and a **file mtime** is given separately as the only available activity evidence.

---

### pipedrive
- **Purpose:** Three standalone Python scripts that archive/prune old Pipedrive CSV extracts in S3 (`s3://filterbuy-datawarehouse/pipedrive_data/`), keeping only the most recent file per prefix and moving the rest to an `archive/` path.
- **Stack:** Python 3, `boto3`, `ThreadPoolExecutor` (parallel S3 copy/delete), AWS S3 (bucket `filterbuy-datawarehouse`, account `937346932434`, us-east-1). Written to run as a Matillion Python component — hard-coded `TIMEOUT_SECONDS = 360  # Matillion timeout limit` with a 10s graceful-exit buffer.
- **Category:** Data Engineering / ETL
- **Client:** Filterbuy
- **Last commit:** unknown (not a git repo — no `.git` present) | **Commits:** unknown | **Status:** inactive — newest file mtime 2025-12-18
- **Portfolio:** no — 3 loose scripts with hard-coded Filterbuy AWS account ID, bucket name and internal S3 layout; low narrative value and confidentiality risk.
- **Metrics:** 3 script folders (`pd_activities/`, `pd_deals/`, `pd_organization_changelog/`), one script each. Literal `FILE_PREFIXES` lists: `pd_activities` = 3 prefixes (`activities`, `activity_locations`, `activity_participants`); `pd_deals` = 6 prefixes (`deals`, `deal_labels`, `deal_custom_fields`, `dealz_archived`, `deal_labelz_archived`, `deal_custom_fieldz_archived`); `pd_organization_changelog` groups by `(prefix, id)` parsed from `<prefix>_<id>_<timestamp>.csv`. Timeout budget literal: 360s Matillion limit, 350s max runtime.

---

### production-scheduling-tool
- **Purpose:** Analysis, debugging, documentation and fix repository for Filterbuy's Production Scheduling Tool v4 — the Matillion ETL pipeline that generates weekly manufacturing schedules (what to produce, where, when) across 8 distribution locations, plus the Matillion→AWS migration effort ahead of the Matillion v1.74.5 EOL on 2026-04-01.
- **Stack:** Matillion ETL v1.74.5 (orchestration + transformation jobs, exported as JSON), Amazon Redshift (`redshift-cluster-filterbuy`, db `filterbuy_dw`, schemas `stg1`/`stg2`/`dwh`), SQL, Python 3 (`scripts/` — Matillion export parsers, v5 pipeline builder, recovery scripts), Matillion REST API v1, AWS Redshift Data API, S3 `filterbuy-datawarehouse`, QuickSight dashboards.
- **Category:** Data Engineering / ETL
- **Client:** Filterbuy
- **Last commit:** 2026-03-09 | **Commits:** 16 | **Status:** inactive (last commit ~4.7 months before 2026-07-29 — technically within 6 months, so **active by the stated 6-month rule**; flagged because the repo's own deadline, Matillion EOL 2026-04-01, has passed)
- **Portfolio:** no — contains Matillion credentials script (`credentials.sh`), live EC2 instance ID, Redshift cluster identifier, internal SKU/location/capacity business logic and a Q1 2026 post-mortem. High confidentiality risk. The *story* (debugging a critical manufacturing scheduler, root-cause analysis, migration plan) is CV-worthy in prose form, but the repo itself is not publishable.
- **Metrics (literal / literally counted):**
  - 148 `.sql` files counted in `exports/sql-extracted/` (README states "~190 SQL queries extracted").
  - `run_production_schedule_v4` export (`exports/run_production_schedule_v4_export_2026-03-02.json`): **98 components** counted programmatically; includes **11** `PS Slack Alerts*` components and **9** `Failure Script 00–08` components.
  - **20 QA / data-quality SQL checks** counted by filename in `exports/sql-extracted/`: 8 `fps_qa_Critical_Error_00–07`, 2 `fps_qa_Non-critical_Error_00–01`, 8 `ps_qa_inputs_Error_#1–#8`, 2 `ps_qa_missing_inputs_Error_#1–#2` (see Data Quality section below).
  - 8 distribution centers enumerated literally in `0237_ps_qa_inputs_Error__1.sql`: New Kensington PA, Ogden UT, Fresno CA, Talladega AL (Pope), Talladega AL (Newberry), Dallas TX, Orlando FL, Elgin IL.
  - 7 line types documented (Automated, Single Loader, Double Loader, Manual, + 3 threshold/exception types).
  - Known-issues table in README lists 5 issues (2 deployed, 1 pending deploy, 1 mitigated, 1 known-undeployed).
- **Optimization method (asked):** **Rule-based / greedy heuristic — NOT linear programming.** Evidence from `docs/context/production-scheduling-tool-business-logic.md`: demand = "Sales for N days − Available Quantity" where available = stock − on order + in transit; B2C demand uses a **linear projection based on sales from the prior 28 days**; products are ranked (reactive: out-of-stock at DC → out-of-stock at MFG → days-of-inventory asc → production need desc; proactive: production need desc) and then assigned by the explicit rule "Products go to (1) the most efficient line type that (2) still has capacity (3) based on their ranking." No solver, no objective function, no LP/MIP library anywhere in the repo.

---

### rt-weekly-worklog
- **Purpose:** Personal weekly work log — one markdown folder per ISO week under `weeks/`, each README being the Slack message Rodrigo posts to the dev team comparing planned vs. done.
- **Stack:** Markdown only (no code). Claude Code `/weekly-log` skill under `.claude/skills/weekly-log/` scaffolds each week from `template/`.
- **Category:** Automation & Tooling
- **Client:** Filterbuy (personal productivity tooling used for team reporting)
- **Last commit:** unknown (0 commits — branch `main` has no commits; all files untracked) | **Commits:** 0 | **Status:** active — newest file mtime 2026-05-23
- **Portfolio:** no — contains named colleagues, internal Slack channels, revenue figures and unreleased project details. Personal/internal by nature.
- **Metrics:** 1 week folder present (`weeks/2026-W21`). Template sections: Planned, Done, Blockers, Next week, Notes (5). **Personal productivity tooling that doubles as team reporting** (README: "the Slack message delivered to the dev team"; CLAUDE.md: "read by the dev team and must be accurate").

---

### run-incremental
- **Purpose:** Documentation, Matillion job exports and Claude Code skills for `run_incremental` — Filterbuy's primary **daily** ETL orchestration that loads 8 source systems into Redshift, transforms them into the dimensional model, runs error checks, and refreshes QuickSight; also holds the Matillion→AWS migration analysis.
- **Stack:** Matillion ETL (job JSON exports), Amazon Redshift (`filterbuy_dw`; `stg1` → `stg2` → `dwh`), PostgreSQL sources (Supplybuy ERP `supplybuy-prod-3.filterbuy.internal:5432`, Airfilterbuy), QuickBooks Online API, Pipedrive REST API, Routable API, Paylocity SFTP/API, Google Sheets API, AWS QuickSight API, AWS SNS, AWS Secrets Manager (`analytics/` prefix), AWS Redshift Data API, aws-vault. Migration target design uses Step Functions + Lambda + Glue + EventBridge + Terraform (documented, not implemented here).
- **Category:** Data Engineering / ETL
- **Client:** Filterbuy
- **Last commit:** 2026-02-02 | **Commits:** 2 | **Status:** active (within 6 months of 2026-07-29)
- **Portfolio:** no — repo ships `credentials/` shell scripts for Matillion, Redshift and Supplybuy, plus internal hostnames, cluster endpoint and full warehouse schema. High confidentiality risk.
- **Metrics (literal / literally counted, all verified against the export JSONs):**
  - `run_incremental` orchestration: **53 components** (counted from `exports/run_incremental_export.json`); doc states 53 main + 252 nested = "305+ total".
  - **17 child orchestrations** invoked by `run_incremental` (counted by component name): `gs_data_loaders`, `sb_data_loaders`, `ab_data_loaders`, `qbo_orchestrations`, `rtb_data_loaders`, `pcty_data_loaders`, `qs_data_loaders`, `pd_data_loaders`, `incremental_transformations`, `error_checks`, `qs_refresh`, `purchasing_alerting`, `production_capacity_alerting`, `human_resources_manager_alerting`, `qs_terminated_users`, `qs_create_backup_assets`, `Copy of ups_invoice`.
  - **8 source systems / data-loader orchestrations.** Component counts verified from each export: `gs_data_loaders` 6, `sb_data_loaders` 59, `ab_data_loaders` 8, `qbo_orchestrations` 62, `rtb_data_loaders` 5, `pcty_data_loaders` 12, `qs_data_loaders` 11, `pd_data_loaders` 18, `incremental_transformations` 71. Total across the 9 child exports present = 252.
  - **26 Slack alert components** in `incremental_transformations` (counted programmatically by component `Name` parameter: `Slack Alerts 0, 2, 3, 7, 8, 9, 10–28, 30`). *The repo's own doc says "28 Slack alert components"; the actual export contains 26.* Each is a Matillion "Run Orchestration" component pointing at a shared `Slack Alerts` job and passing `component_message`, `environment_name`, `job_name` — i.e. **failure/error notifications wired to transformation components, not distinct data-quality assertions.**
  - 11 dimension transformations + 19 fact transformations + 11 supporting transformations listed in the docs.
  - `docs/context/aws-migration-plan.md` literals: "305+ Matillion components across 10 orchestrations", "8 data sources", "36 DWH tables", "~90-180 minute daily runtime".

---

### slack-bot-alerts
- **Purpose:** AWS Lambda that relays Amazon SNS messages to Slack — for each SNS record it reads the `slack_webhook` tag off the source SNS topic and POSTs the message body to that webhook.
- **Stack:** Python 3 (stdlib `urllib.request`, `json`) + `boto3`; AWS Lambda (`slack-bot-alerts`, us-east-1), AWS SNS (topic tags as webhook routing), Slack incoming webhooks. Deployment: `deploy.sh` (zip + `aws lambda update-function-code` via aws-vault) and GitHub Actions `.github/workflows/deploy.yml` (push to `main` or `workflow_dispatch`, `aws-actions/configure-aws-credentials@v4`).
- **Category:** Automation & Tooling
- **Client:** Filterbuy
- **Last commit:** 2026-03-24 | **Commits:** 3 | **Status:** active (within 6 months of 2026-07-29)
- **Portfolio:** borderline — the code itself (~80 lines) is generic and clean, and the tag-based webhook routing is a genuinely neat pattern. But the repo contains a committed `.env` and it is small. If used, rewrite as a standalone snippet/gist rather than publishing the repo.
- **Metrics:** 1 Lambda handler, 1 file (`lambda_function.py`, 2.0K). **Zero enumerable data-quality checks** — this repo contains no check logic at all; it is pure transport. Per-topic webhook cache (`_webhook_cache`) is the only state.

---

### tiktok-report-automation
- **Purpose:** unknown — the folder contains only an initialized, empty `.git` directory. No source files, no commits, no README.
- **Stack:** unknown
- **Category:** unknown (name suggests MarTech & Advertising, but there is no evidence in the repo)
- **Client:** Filterbuy
- **Last commit:** unknown (0 commits — `main` has no commits) | **Commits:** 0 | **Status:** inactive — `.git/HEAD` mtime 2026-01-28; no working files exist
- **Portfolio:** no — empty repo, nothing to show.
- **Metrics:** none stated. 0 tracked files, 0 working files.

---

### trigger-matillion-orchestrations
- **Purpose:** unknown beyond configuration — the folder contains only a `.env` file holding Matillion API connection defaults. No scripts, no README, no git repo. Name and contents indicate it was set up to trigger Matillion orchestration jobs via the Matillion REST API.
- **Stack:** Matillion REST API (host `https://matillion.filterbuy.com/`), env-file config only. No code present.
- **Category:** Data Engineering / ETL
- **Client:** Filterbuy
- **Last commit:** unknown (not a git repo) | **Commits:** unknown | **Status:** inactive — `.env` mtime 2025-11-28
- **Portfolio:** no — the only file is a credentials file (`MATILLION_USER`, `MATILLION_PASSWORD`). Must never be published.
- **Metrics:** 1 file. Literal non-secret config values: `MATILLION_DEFAULT_GROUP=FilterBuy`, `MATILLION_DEFAULT_PROJECT=filterbuy_dw`, `MATILLION_DEFAULT_ENVIRONMENT=prod_incremental`, `MATILLION_DEFAULT_JOB=amz_bid_engine`.

---

### unmatch-orders
- **Purpose:** Marketing-attribution reconciliation investigation — quantifies and root-causes orders in the warehouse that have **no matching GA4 transaction**, i.e. orders missing marketing attribution. **Not** financial/AR/AP or order-to-cash reconciliation.
- **Stack:** SQL against Amazon Redshift (`redshift-cluster-filterbuy` / `filterbuy_dw`, us-east-1) via the AWS Redshift Data API with aws-vault profile `rt`; Claude Code custom command `.claude/commands/redshift.md`. Output is a markdown analysis document — no application code.
- **Category:** Analytics & BI
- **Client:** Filterbuy
- **Last commit:** unknown (not a git repo — no `.git` present) | **Commits:** unknown | **Status:** active — file mtime 2026-02-03
- **Portfolio:** no — the single document contains 90 days of order volumes and revenue by marketplace, payment-method mix, and customer-type breakdowns. Commercially sensitive.
- **Metrics (all literal, quoted from `context/attribution-investigation-2026-02-03.md`, period 2025-11-06 → 2026-02-03, 90 days):**
  - 43.8% of airfilterbuy orders (66,850 of 152,575) missing attribution.
  - Overall: 85,725 orders with attribution ($9,367,740.90) vs 1,078,314 without ($57,570,571.71).
  - By marketplace: amazon 965,242 orders (100% unattributed), airfilterbuy 152,575 (43.8%), walmart 27,930 (100%), wholesale 8,415 (100%), homedepot 7,086 (100%), ebay 1,396, godatafeed 814, target 342, manual 165, bjs 74 — 10 marketplaces enumerated.
  - Root causes ranked: auto-delivery/subscription renewals 99.8% unattributed (35,676 of 35,762 orders, server-side, no browser session); Stripe Pay-with-Link 91.0% (9,443 of 10,379, 1-click bypass); Amazon Pay 100% (439, redirect loses session); PayPal 48.8% (11,183 of 22,903).
  - Returning customers 55.8% unattributed vs new customers 14.4%.
  - Weekly trend improved from ~52.6% (week of 2025-11-03) to ~36.8% (week of 2026-02-02).

---

### weekly-review
- **Purpose:** Maintenance-support repository for the **Operations Weekly Business Review** QuickSight dashboard — context docs, the SQL behind each dashboard visual, exported dataset/dashboard definitions, and investigation write-ups.
- **Stack:** AWS QuickSight (dashboard `68f34ced-6468-4e2b-8ffb-945207e313b9`, analysis `9d127966-5faf-40e7-997e-bcca233425d6`, account `937346932434`, us-east-1), Amazon Redshift SQL (`filterbuy_dw`), Matillion, AWS CLI/QuickSight API exports, credential shell scripts for Redshift / Matillion / Supplybuy / middleware, Claude Code skills (`/build-context`, `/quicksight`, `/debug-etl`, `/debug-matillion`).
- **Category:** Analytics & BI
- **Client:** Filterbuy
- **Last commit:** 2026-02-23 | **Commits:** 2 | **Status:** active (within 6 months of 2026-07-29)
- **Portfolio:** no — 4 committed credential scripts plus internal operational metrics (manufacturing, shipping, workforce, safety). Confidentiality risk.
- **Metrics (literal / literally counted):** Dashboard literals from `context/overview.md`: **116 total visuals**, **20 datasets (all SPICE)**, version 107, created 2024-11-12, last updated 2026-01-12; Safety & Quality sheet = 16 visuals. Counted on disk: **20 `.sql` files** in `queries/`, **20 `dataset-*.json` exports** in `exports/` (matches the stated 20 datasets). Query subject areas by filename: unshipped orders, unshipped B2B orders (weekly + daily), manufacturing detail, shipping detail, rerouted orders, sales detail, production schedule facts, lines scheduled vs actual, production performance, labor force by day, inventory detail, shipping vs manufacturing, upcoming B2B subscriptions, raw material consumption, shipping by location, active employees, workforce planning.

---

## Data Quality & Reconciliation

Three distinct layers exist in this batch. Naming is misleading in one place, so the evidence matters.

**1. Transport layer — `slack-bot-alerts` (no checks).**
This repo does **not** contain any data-quality checks. `lambda_function.py` (80 lines) is a generic SNS→Slack relay: for each SNS record it calls `sns_client.list_tags_for_resource(topic_arn)`, reads the `slack_webhook` tag, and POSTs `{"text": <sns message>}` to that URL, caching topic→webhook in `_webhook_cache`. The routing pattern (webhook URL stored as an SNS topic tag, so new alert channels need no code change) is the only design idea in the repo. Deployed to Lambda `slack-bot-alerts` in us-east-1 by GitHub Actions on push to `main`. **Enumerable checks: 0.**

**2. Alert-emission layer — `run-incremental` (26 failure alerts, verified).**
Counted programmatically from `exports/incremental_transformations_export.json`: of 71 components, **26 are named `Slack Alerts <n>`** (`0, 2, 3, 7, 8, 9, 10–28, 30`). Every one is a Matillion "Run Orchestration" component that calls a shared `Slack Alerts` job and forwards `${component_message}`, `${environment_name}`, `${job_name}`. They are wired to transformation components as failure handlers — so they are **26 error-notification hooks, not 26 independent data-quality assertions**. The repo's own doc claims 28; the export contains 26 — trust 26. Separately, `run_incremental` invokes a dedicated `error_checks` orchestration ("Runs `error_checks` orchestration to validate data quality") plus 3 domain alerting jobs (`purchasing_alerting`, `production_capacity_alerting`, `human_resources_manager_alerting`); **the `error_checks` job itself is not exported into this repo, so its check count is unknown.** A table-freshness checker with an `EXPECTED_UPDATE_FREQUENCY` map of 4 tables (`dwh.dim_cart`, `dwh.fact_sales_transaction`, `dwh.fact_manufacturing` at 24h; `dwh.fact_production_schedule` at 168h) appears in `docs/context/migration-optimization-analysis.md` — but as **proposed** AWS-migration design, not deployed code.

**3. Assertion layer — `production-scheduling-tool` (20 enumerable checks, the real data-quality suite).**
This is the only place in the batch with actual, countable check logic. Counted by file in `exports/sql-extracted/`, each file being one Matillion SQL-Query component that emits an `error_type` row when it finds a violation:

*Input validation, 10 checks* — `ps_qa_inputs` Error #1–#8 and `ps_qa_missing_inputs` Error #1–#2. Verified `error_type` labels include: "distribution center not mapped to any manufacturing locations" (checks all 8 named DCs have a mapping), "distribution center not mapped to any non-automated inventory target" (×3), "manufacturing location does not have MERV ratings for automated lines", "manufacturing location does not have staff capacities for Automated line types" / "...for Non-Automated line types", "line type does not have line facts", "Production capacities not input for size <sku>".

*Output validation, 10 checks* — `fps_qa` Critical Error 00–07 (8) and Non-critical Error 00–01 (2), plus 2 `Initialize stg2.ps_error_count` components that reset the error counter. Verified `error_type` labels: (critical) "Production and changeover lines > staffing available by MFG location"; "Production and changeover lines > lines available by MFG location and line type"; "Production lines > allowed lines for a SKU without MERV rating on a grouped line type"; "Production lines for SKU without MERV rating is > auto tooling sets available"; "Row multiplicity is incorrect." (duplicate `(mfg location, DC, line type, rank)` grain); "Manufacturing location, line type, and rank has more than one distinct size."; "Minimum production goal is less than zero." / "Minimum production lines is less than zero."; (non-critical) "Production goal for SKU without MERV rating is less than minimum production run"; "Production goal for SKU is less than minimum production run".

These are **capacity, staffing, grain/uniqueness and negative-value assertions on `dwh.fact_production_schedule`**, scoped to future dates (`inserted_dt_utc::date >= (current_timestamp at time zone 'America/New_York')::date`), with an explicit tolerance buffer in Critical Error 00 (`> staffing_available + 0.2`). Results feed a counter table `stg2.ps_error_count`, and the parent orchestration `run_production_schedule_v4` carries **11 `PS Slack Alerts*` components and 9 `Failure Script 00–08` components** (counted from `exports/run_production_schedule_v4_export_2026-03-02.json`, 98 components total) to push them out.

**4. Reconciliation — `unmatch-orders` is attribution reconciliation, not financial reconciliation.**
It reconciles Filterbuy's warehouse order fact table against Google Analytics 4 transaction data: `dwh.fact_sales_orders o LEFT JOIN stg2.stage_ga4_transactions g ON o.marketplace_order_id = g.transaction_id` (the doc explicitly flags `generic_order_id` as the *wrong* join key). Unmatched rows = orders with no GA4 session, i.e. **marketing spend that cannot be attributed to revenue**. Over 90 days it found 43.8% of airfilterbuy orders unattributed and traced it to four mechanisms — server-side subscription renewals (99.8%), Stripe Pay-with-Link 1-click checkout (91%), Amazon Pay redirect (100%), PayPal redirect (48.8%) — separating "expected by design" (marketplace orders, server-side renewals) from "fixable tracking gaps" (Link/PayPal/Amazon Pay callbacks). No money, invoices, payments or ledgers are reconciled anywhere in this repo.

**5. Pipeline triggering / scheduling.**
No cron, EventBridge rule, Airflow DAG or scheduler definition exists as deployed code anywhere in this batch. The evidence is: **Matillion's own built-in scheduler** drives everything — `run-incremental/docs/context/data-warehouse-etl.md` lists four scheduled jobs (Incremental — main DWH update, CRITICAL; IntraDay — operations data, Medium; Keepa Data Extraction, 12–14 hours, Low; Production Schedule — manufacturing schedules, CRITICAL). `run_incremental` runs **daily** (~90–180 min runtime, per `aws-migration-plan.md`); `run_production_schedule_v4` runs **weekly on Saturday** (per `production-scheduling-tool/README.md`), and `run_incremental` itself branches on an `is_saturday_flg` / "Is Saturday?" component for Saturday-only work. Within a run, orchestration is nested and mostly sequential: `run_incremental` calls 17 child orchestrations, gated by `Is Backfill 00`, `Is Saturday?`, `Table Iterator 0` (materialized-view refresh loop) and `*_Timer In` / `*_Timer Out` components that record per-source start/end/runtime variables into `stg2.dw_job_running`. `run_production_schedule_v4` additionally guards itself with `Is Incremental ETL Job Running`, `Has production schedule run today?` and `Is Weekday` components. Manual/API triggering is possible via the Matillion REST API (`https://matillion.filterbuy.com/rest/v1/group/FilterBuy/project/filterbuy_dw/...`) — which is exactly what the `trigger-matillion-orchestrations` folder is configured for, though it contains no executable code, only a `.env` (default job `amz_bid_engine`, environment `prod_incremental`). The **replacement** design — EventBridge `cron(0 6 * * ? *)` (6 AM UTC daily) → Step Functions state machines, one nested state machine per orchestration including `error_checks` — is written up in `run-incremental/docs/context/aws-migration-plan.md` as a Terraform plan and is **not implemented in any repo in this batch**.

