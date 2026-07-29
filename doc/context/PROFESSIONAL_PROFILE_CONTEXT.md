# Rodrigo Teixeira — Professional Profile Context Document

> Canonical reference for CVs, applications and the rodtex.dev website.
>
> **Last rebuilt:** 2026-07-29, from a full audit of 123 repositories across
> `myGit/` (84, personal + independent client work) and `Filterbuy/afb-git/` (39, employer).
> Evidence layer: `rodtex_cv/thoughts/repo-inventory.md`.
> Synthesis and open questions: `rodtex_cv/thoughts/professional-summary-2026.md`.
>
> **Positioning:** Data & AI leader who is hands-on. Marketing analytics is *one proven domain*,
> not the headline. The headline is platform ownership plus production LLM/AI systems.

---

## Personal Information

- **Full Name:** Rodrigo Teixeira
- **Date of Birth:** January 7, 1988
- **Location:** São Paulo, Brazil
- **Email:** rodrigo@rodtex.dev
- **Phone:** +55 11 930212911
- **Website:** rodtex.dev
- **LinkedIn:** linkedin.com/in/strodrigo
- **GitHub:** github.com/strod
- **Languages:** Portuguese (native), English (fluent), Spanish (intermediate)

---

## Positioning Statement

Data and AI leader who still ships code. Owns a company-wide data platform end to end — a
nine-schema Redshift warehouse fed from 16 source systems, an Athena/Iceberg lakehouse of 99
tables, and the orchestration, governance and data-quality layers around both — while designing
and deploying the production LLM systems that sit on top of it: agent-safety libraries,
natural-language interfaces to the warehouse, and customer-facing conversational agents.

Engineering training (Physics and Mechanical Engineering) applied to commercial problems: a
Bayesian marketing mix model on Google Meridian, a convex-optimization budget allocator, and a
production Amazon advertising bid engine that closes the loop from report ingestion through
optimization to automated bid writes. Equally at home diagnosing a 43.8% attribution gap in SQL
and architecting the event-driven pipeline that fixed a vendor's 5-second webhook SLA.

---

## Current Title

**Marketing Analytics Director** at Filterbuy — **started January 2024** (confirmed 2026-07-29).

> **Correction:** earlier versions of this document listed a prior Filterbuy role,
> "Sr. Marketing Analytics Developer (2022 – 2023)". **That role does not exist** — Rodrigo's
> Filterbuy tenure begins Jan 2024. This also resolves what looked like a Filterbuy/IPG date
> overlap: IPG Mediabrands ran 2022 – 2023, Filterbuy from Jan 2024. Do not reintroduce it.

**Title handling, refined 2026-07-29 for LLM/ATS screening — two distinct fields:**

| Field | Value | Why |
|---|---|---|
| **CV headline** (under the name) | *Director of Data & AI · Data Platform Ownership \| Production LLM & ML Systems \| Applied Optimization* | A positioning line, not an employment record. Carries the target-role keywords that semantic screeners weight heavily. |
| **Experience entry** (role field) | *Marketing Analytics Director* — Filterbuy, Jan 2024 – Present | The **actual title, unchanged.** Verifiable, survives reference checks. |

Both appear on the same page, so a reader always sees the real title. Never alter the experience
entry to match the headline.

**Team leadership — two distinct facts, keep them distinct:**

| Role | Direct reports | Detail |
|---|---|---|
| **IPG Mediabrands** (2022–2023) | **~8** | The country hub analytics leads for **Brazil, Mexico, Argentina, Chile, Colombia** — a team of team leads, i.e. **second-line leadership across 5 markets** |
| **MINT** (2020–2021) | **6** | 2 data scientists, 3 data analysts, 1 data engineer |
| **Filterbuy** (current) | **0** | Cross-functional / dotted-line leadership of engineers and analysts |

- **Hiring and interviewing in both** prior roles; also referred and placed candidates into adjacent
  roles outside the direct reporting line.
- **Coaching and mentoring in both**, in two directions: *data science for non-technical marketing
  stakeholders* and *marketing analytics for data scientists*. Fluency in both worlds is the
  differentiator — most data scientists lack the marketing side.

**Writing rule:** state line management with numbers for MINT and IPG. State cross-functional
leadership for Filterbuy. **Never imply current direct reports.**

---

## Work Experience

### 1. Filterbuy — Marketing Analytics Director (2024 – present)
**Fort Lauderdale, FL (remote from São Paulo).** D2C and marketplace e-commerce, HVAC air filtration.

Owns the company-wide data platform, the advertising decision systems built on it, and the AI
tooling layer above both.

**Data platform**
- Two co-existing warehouse platforms: a **nine-schema Redshift warehouse** (`stg1 → stg2 → dwh`,
  **36-table star schema** = 12 dims + 24 facts, parallel `*_restricted` chains isolating PII)
  fed by **16 source systems**; and a **99-table Athena/Apache Iceberg lakehouse** ingested
  event-driven via S3 → EventBridge → Lambda → `MERGE INTO`.
- **1,202 SQL files** and **961 Matillion job exports** under version control.
- BI layer: **Amazon QuickSight, 11 dashboards** documented and audited.
- Warehouse rebuild designed (17 documents) after diagnosing that `dim_cart` carried **255
  QuickSight dataset references** while `fact_sales_orders` was used in only 4.

**Amazon advertising platform** (8 repos, 660 commits, active)
- Ingest: **34 scheduled EventBridge report triggers** = 17 report types × 2 marketplaces, across
  4 ad products, plus real-time Marketing Stream → schema-validated Parquet.
- Bid engine: production Lambda, **19,061 lines of Python, 62 test files**. Three modes — additive
  multi-factor (Sponsored Brands); multiplicative performance × **composite robust z-score**
  opportunity × velocity × day-of-week, tanh-bounded across tiers (Sponsored Products); and
  placement-anchored unit economics `AOV × TargetACoS × CVR` with **Empirical Bayes
  (Beta-Binomial) CVR smoothing**. Writes bids via the Ads API in batches of 1,000 behind a
  circuit breaker.
- Outer loop: per-campaign **two-parameter Hill saturation curves** (`scipy.optimize.curve_fit`,
  bounded least squares + bootstrap) feeding a **cvxpy** convex program
  `max Σ(margin·revenue(spend) − spend)` in expected / risk-averse / chance-constrained modes.
  ~300 campaigns per round.
- Control plane: CloudFront+S3 dashboard behind Lambda@Edge OAuth, API Gateway control API,
  DynamoDB run-status/schedule/audit, EventBridge Scheduler → SNS.

**AI and LLM systems**
- **61-skill agent-safety library** across Google Ads (33), Amazon Ads (15) and Meta (13) with a
  uniform mutation contract: dry-run by default, idempotency key from
  `(skillName, subjectId, payload)`, LOW/MEDIUM/HIGH risk classification, blast-radius estimate,
  approval gating, redacted audit sink, rollback hints. **Zod schemas double as runtime validation
  and LLM tool-use definitions.** 59 Vitest test files.
- **LLM-assisted ETL forensics**: exported a GUI ETL platform via REST API, flattened it into
  **361 greppable SQL files**, grounded an agent on a hand-built schema dictionary, and drove an
  ordered diagnostic runbook of expected-vs-actual database probes with persisted handoffs.
- **12 operational Claude Code skills** embedded in the warehouse repos, with a tool-neutral skill
  source that syncs to both Claude and Codex mirrors with CI drift checking.
- **AWS Bedrock (Nova Pro)** writing a daily structured digest of pipeline alerts into Slack.

**Governance and data quality**
- **36-table data dictionary** with row counts, key relationships and **Validated Field
  Definitions**; **16-source lineage register** with prefix→source naming convention;
  **99-page agent-readable data-lake catalog** (grain, keys, safe joins, cost-aware patterns).
- **20 enumerable SQL data-quality assertions** (10 input, 10 output validation) on the
  manufacturing scheduling pipeline.
- **Attribution reconciliation**: found **43.8% of orders unattributed (66,850 of 152,575)** over
  90 days; root-caused to server-side subscription renewals (99.8%), Stripe Pay-with-Link (91%),
  Amazon Pay (100%) and PayPal (48.8%); drove the gap from ~53% to ~37%.

**Marketing science**
- **Bayesian MMM on Google Meridian** (JAX/NumPyro MCMC, geometric adstock max_lag 8 weeks, Hill
  saturation, weekly grain, Fourier seasonality) over a purpose-built lakehouse of **11 validated
  Athena/Iceberg views**, trained on **ECS Fargate**. Evaluation = MAPE + **6 sniff guards** into a
  composite score; production alerting on min R² 0.70, ROAS CI width, 48h staleness; 104-week
  rolling retrain.
- Amazon Marketing Cloud (AMC) query automation; GA4 raw-export modelling; Google Merchant Center
  feed governance at **10,532 SKUs × 132 columns** with auditable QA drops.

**Platform migration**
- Led migration off Matillion (**253 jobs**, EOL 2026-04-01) onto serverless AWS orchestration.
  Re-platformed a job that **ran ~13 hours with token-timeout failures** onto EventBridge
  Scheduler → Step Functions → 4 Lambdas.
- Developer platform (`orchestrator`): **88 Docker Compose service definitions** and **96
  Terraform resources** (29 ECS task definitions, 22 ECS services, 21 Cloud Map entries)
  provisioning per-branch ephemeral AWS ECS environments in ~15–20 minutes.

**Also delivered (pre-dating the current repo estate; not repo-verifiable):**
- Predictive 24-month LTV model (RFM + XGBoost) wired to a server-side pixel — **12% uplift in
  repeat purchase orders**
- GA4 migration with client- and server-side GTM, uncovering **30%+ conversion undercounting**
  from ITP and ad blockers
- **Reporting latency cut from 24 hours to under 1 hour**; **warehouse query costs reduced 40%**
  through partitioning, clustering and schema redesign
- Causal-impact frameworks using geo-holdouts and matched-market experiments

### 2. rt analytica — Independent Data & AI Work (Oct 2025 – present)
**São Paulo, Brazil.** Independent practice; e-commerce, food-service and retail clients in Brazil
and the UK.

> **Placement policy (decided 2026-07-29) — read this before writing any CV:**
> **rt analytica does NOT appear on the CV.** No experience entry, no bullets, no mention.
> The CV covers employers only: Filterbuy → IPG Mediabrands → MINT → WMcCann → Rede Globo →
> Bridge Consulting. These projects surface **only in the rodtex.dev website portfolio**, where the
> footer link on the CV points.
>
> **Client naming policy: name no clients** anywhere — CV or website. Describe by sector only.
>
> The record below exists so the work stays documented and reusable for website copy,
> interview answers and targeted applications — not for the CV.

- **Multi-tenant LLM agent platform** on Cloud Run (345 commits): customer-facing WhatsApp
  ordering plus internal BI-analyst agents, per-tenant credentials/permissions/catalog/guardrails,
  MCP integration, multi-LLM routing, prompt-injection hardening, payments, 10 API endpoints.
- **Event-driven ERP→BigQuery platform**, 22 Cloud Functions. Rearchitected under a vendor's
  **5-second webhook SLA**: original synchronous handlers ran **p50 19s** (orders) with ~33%
  errors and ~33% timeouts, and the vendor counted **~92% and ~99%** of product/invoice deliveries
  as failures and **disabled those webhooks**. Split into ack-first HMAC-verified ingress →
  Pub/Sub → idempotent worker (backoff 10s→600s, DLQ) → scheduled reconciliation.
  **Sub-second acknowledgement** in production. Worker concurrency deliberately capped to bound
  concurrent BigQuery DML.
- **Text-to-SQL analytics agent** over BigQuery (93 commits) with a guarded ERP write path behind
  an `ActionGuard` layer; 30+ test modules covering write safety, prompt behaviour and outages.
- **Segmentation CRM** (167 commits, **259 tests**): nested boolean segment AST compiled to
  parameterized BigQuery SQL, idempotent per-recipient WhatsApp dispatch with dry-run and
  test-redirect safety modes, 5-day fixed-window attribution, **LGPD compliance enforced at both
  preview and send time**.
- **Marketing funnel scoring engine** (UK hospitality): multi-source ingestion → BigQuery →
  weighted **0–1000** channel scoring → LLM recommendations → human approval app → BI.
  **339 recommendations** reviewed and deployed across 6 venues; 77 engine tests.
- **blingMCP** — open source (MIT), `github.com/strod/blingMCP`: MCP server consolidating
  **254 ERP API endpoints into 18 LLM-friendly tools** via OpenAPI-driven codegen; stdio and
  HTTP/SSE transports.
- Supporting delivery: route optimizer on Cloud Run (replaced a Sheets + Apps Script workflow),
  FastAPI SSO gate with JWT cross-app SSO, client-facing Streamlit BI with hashed single-use
  tokens and PII masking, Vertex AI Search for Retail recommendations feeding personalized
  Merchant Center feeds, Stripe billing automation (54 tests).

### 3. IPG Mediabrands — Head of Data LATAM (2022 – 2023)
**São Paulo, Brazil.**
- **Led a team of ~8** — the country hub analytics leads for Brazil, Mexico, Argentina, Chile and
  Colombia (second-line leadership across 5 markets). Hired and interviewed for the organisation
- Led first-party data unification across Latin America, integrating CRM and offline sales into
  the Google advertising ecosystem
- Server-side GTM measurement across 8 LATAM markets, quantifying browser-side conversion loss
- Nestlé "Speedboat" — 6-month programme integrating CRM, cloud and digital advertising platforms
- Google BPI and Facebook Brilliant Basics best-practice rollouts across Nestlé accounts
- Partnered with enterprise stakeholders to turn infrastructure needs into investment cases

### 4. MINT — Data Manager / Tech Lead (2020 – 2021)
**São Paulo, Brazil.** AI-powered advertising intelligence startup.
- **Led a team of 6** — 2 data scientists, 3 data analysts, 1 data engineer. Hired and interviewed
- Coached and mentored in both directions: data science for non-technical marketing stakeholders,
  marketing analytics for data scientists
- **AIRE** — next-best-investment engine using Markowitz-style portfolio optimization for budget
  reallocation across digital channels and DSPs; **increased ROI by 25%+**
- **Megalista** — privacy-safe smart audience generation from ML models fed with web traffic data
- Predictive planning algorithm; multi-touch attribution models; Down Detector competitor-outage
  trigger

### 5. WMcCann (McCann Worldgroup) — Data Analytics Manager (2019)
**São Paulo, Brazil.**
- Marketing mix modelling study for **General Motors ($100M+ annual spend)** defining optimal
  annual budget allocation
- Automated measurement frameworks and reporting pipelines in SQL and BigQuery

### 6. Rede Globo — Data Scientist (2018)
**Rio de Janeiro, Brazil.** Gshow, Latin America's largest entertainment portal.
- Automated the reporting process — **reduced manual reporting time by 80%**
- Churn optimization algorithm for content engagement

### 7. Bridge Consulting — Data Science Consultant (2017)
**Rio de Janeiro, Brazil.**
- Target-stock calculation algorithm; outlier detection on business expenses; custom dashboards

---

## Skills Matrix

Ordered within each group by depth of evidence.

### Data Engineering & Warehousing
Dimensional modelling & warehouse design · Redshift · BigQuery · Athena · **Apache Iceberg** ·
Glue · Matillion · Fivetran · Airflow · dbt · event-driven pipelines (Pub/Sub, EventBridge, SNS) ·
Step Functions · data governance (dictionaries, lineage, contracts, quality assertions)

### AI & LLM Engineering
**Agent tool/skill layer design** (dry-run, idempotency, risk gating, blast radius, approval,
audit, rollback) · production LLM agents & tool-calling orchestration · **Model Context Protocol
(MCP)** · **text-to-SQL / NL interfaces to warehouses** · prompt-injection hardening & LLM safety ·
multi-LLM routing (Anthropic, OpenAI, AWS Bedrock, Vertex AI, OpenRouter) · RAG & vector search
(FAISS, embeddings) · agent-oriented documentation

### Analytics & Experimentation
Marketing Mix Modelling (Google Meridian, Meta Robyn, Bayesian MCMC) · convex & portfolio
optimization (cvxpy, SciPy) · Empirical Bayes / Beta-Binomial smoothing · robust z-score modelling ·
attribution (Markov chain, multi-touch) · predictive LTV (XGBoost, SHAP) · A/B testing ·
causal impact (geo-holdouts, matched markets) · forecasting (Prophet, ARIMA) · RFM segmentation ·
churn prediction

### Cloud & Infrastructure
GCP (BigQuery, Cloud Run, Cloud Functions gen2, Pub/Sub, Cloud Tasks, Firestore, Vertex AI,
Secret Manager) · AWS (Redshift, Athena, Lambda, S3, Step Functions, EventBridge, DynamoDB,
ECS Fargate, SNS, Bedrock) · Terraform · Docker · Kubernetes · GitHub Actions CI/CD with
**Workload Identity Federation (GCP) and OIDC (AWS) — no long-lived credentials** ·
OIDC/SSO & JWT auth

### BI & Visualization
Amazon QuickSight · Looker & LookML · Looker Studio · Tableau · Power BI · Streamlit ·
custom analytics front-ends (React, CloudFront/S3)

### MarTech & Advertising
Amazon Ads (Reporting API, Marketing Stream, AMC, Ads API) · Google Ads & GAQL · Meta · TikTok ·
Bing · Google Merchant Center · GA4 · GTM (client & server-side) · DV360 · Campaign Manager 360 ·
Vertex AI Search for Retail · Shopify · Klaviyo · Okendo · Recharge · Triple Whale

### Languages & Tooling
Python (pandas, PyArrow, SciPy, cvxpy, Prophet, boto3) · SQL · TypeScript / Node.js · JavaScript ·
React · FastAPI · Express · Zod · pytest / Vitest

**Removed 2026-07-29:** Segment (no evidence found in 123 repositories; confirmed for removal).

---

## Education

| Year | Degree | Institution | Notes |
|------|--------|-------------|-------|
| 2020–2021 | MBA in Data Science & Analytics | USP | Thesis: Machine Learning Applied to Audience Generation in Digital Marketing |
| 2018–2019 | M.Sc. in Industrial Engineering | COPPE-UFRJ | Research: Non-Linear Programming Methods for Media Mix Modelling — **interrupted** |
| 2010–2015 | **B.Sc. in Mechanical Engineering** | UFF | |
| 2006–2010 | B.Sc. in Physics | UFF | |

---

## Curated Portfolio

**Shareable / public**
1. **blingMCP** — MIT open source; 254 API endpoints → 18 LLM tools. `github.com/strod/blingMCP`
2. **Multi-tenant LLM agent platform** — WhatsApp ordering + internal BI agents (client unnamed)
3. **Event-driven ERP→warehouse platform** — p50 19s → sub-second under a 5s vendor SLA
4. **Text-to-SQL analytics agent** — NL over BigQuery with a guarded write path
5. **Marketing funnel scoring engine** — scoring + LLM recommendations + human approval
6. **Segmentation CRM** — boolean segment AST → BigQuery SQL, LGPD-compliant dispatch
7. **Tournament scoring web app** — live, replaced an Excel judging workflow
8. **Agent controller with human-in-the-loop approval** — no inbound network surface, 132 tests

**Prose only — describable, never linked (employer-confidential)**
9. **Filterbuy data platform** — 2 warehouses, 16 sources, 253 orchestration jobs, 99 lakehouse tables
10. **Amazon bid engine + ACoS optimizer** — Hill curves + cvxpy, automated bid writes
11. **61-skill agent-safety library** — one mutation contract across 3 ad platforms
12. **Bayesian MMM on Google Meridian** — Iceberg lakehouse, ECS Fargate
13. **LLM-assisted ETL diagnostics** — 361 SQL files, grounded agent, deterministic runbook
14. **Attribution reconciliation** — 43.8% gap diagnosed and root-caused
15. **Developer platform** — 88 containerised services, per-branch ephemeral ECS environments

**Explicitly excluded:** `mediamixmodel` (empty scaffold, no modelling code, third-party remote) ·
`filterbuy-cms` / `filterbuy-marketing-app` (588/669 commits, **none by Rodrigo** — his
contribution to that effort lives in `filterbuy-ads-skills`) · `claude-skills-factory`
(unversioned credential graveyard) · `llm_engineering_course` and `bip39` (clones of third-party
projects) · 2023-era API-client spikes (2–5 commits each).

---

## Key Differentiators

1. **Platform owner *and* hands-on builder** — owns warehouse architecture, governance and
   orchestration while personally shipping the optimization and LLM systems on top
2. **Production LLM/agentic depth, not demos** — 61-skill safety library, multi-tenant agent
   platform, text-to-SQL with write guards, a published MCP server
3. **Applied mathematics that ships** — Hill saturation curves, convex programs, Empirical Bayes
   smoothing, Bayesian MMM, all in production systems
4. **Reliability engineering with measured outcomes** — p50 19s → sub-second under a vendor SLA;
   43.8% attribution gap diagnosed and reduced; 13-hour job re-platformed
5. **Engineering + marketing bridge** — formal engineering training (Physics, Mechanical
   Engineering, Operations Research) with deep marketing science
6. **Security-conscious by default** — no long-lived cloud credentials anywhere; dry-run defaults;
   fail-closed allowlists; human-in-the-loop approval gates
7. **International remote delivery** — US employer and UK clients, working from Brazil

---

## Open Questions

Tracked in full in `rodtex_cv/thoughts/professional-summary-2026.md` §7.

**Resolved 2026-07-29:** team leadership (see the table above — ~8 reports at IPG, 6 at MINT, hiring
and interviewing in both); Filterbuy start date (Jan 2024, no earlier role).

Outstanding:

- [x] **RESOLVED 2026-07-29 — Filterbuy start date is January 2024.** There was no earlier Filterbuy
      role; the "Sr. Marketing Analytics Developer 2022–2023" entry in prior versions of this
      document was wrong and has been removed. Timeline is clean: IPG 2022–2023, Filterbuy Jan 2024
      onward, no overlap.
- [ ] **Business outcome metrics at Filterbuy** — the repos hold scale and method but almost no
      results. Any permitted figure (revenue influenced, spend optimized, ROAS lift) would
      materially strengthen the CV.
- [ ] **MMM budget optimizer** — code exists (efficiency frontier, scenario analysis) but its
      module is flagged stale/pending refactor. Is budget optimization actually running?
- [ ] **`amazon-bid-engine-model`** — a multi-tenant productization of the bid engine, active
      2026-07-22 but not under version control. Commercial product?
- [ ] **Vertex AI / SageMaker** — evidence covers Vertex AI *Search for Retail* (managed service),
      Prophet on Lambda and Meridian on ECS Fargate. No custom model training on Vertex AI or
      SageMaker was found.

## Housekeeping (not CV-related)

Committed secrets found during the 2026-07-29 audit — rotate the first two first:
- Hardcoded **OpenAI API key** in `gpt_sentiment_analysis/sentiment_analysis.py:5`
- Hardcoded **client secret** in `TIKTOK_API_CLIENT/testing.py`
- **SSH private key** `adop_test_key` in `ai_media-planner/`
- **GCP service-account JSON keys** in `hoshinsul-switching-app/`, `inbox-bridge/`,
  `ga4-analysis/`, `filterbuy-gdf-catalog/`, and the funnel-scoring client folder
- **OAuth `client_secret_*.json`** in `rt-analytica-hub/`, `cooperadores_op_mural/`
- **Plaintext credential files** throughout `claude-skills-factory/`
- **`.env` files** in ~15 repos; `matillion_credentials.sh` / `redshift_credentials.sh` and a VPN
  profile in `filterbuy-etl`; `MATILLION_USER`/`PASSWORD` in `trigger-matillion-orchestrations`
- Client **PII** in `leticialacava_cv/docs/context.md`; a 175 MB WhatsApp export in
  `crvendas-chabot-agent/docs/`
