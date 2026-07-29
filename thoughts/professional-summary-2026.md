# Professional Summary 2026 — Rodrigo Teixeira

**Generated:** 2026-07-29
**Source:** `thoughts/repo-inventory.md` (123 repositories audited) + `PROFESSIONAL_PROFILE_CONTEXT.md` (treated as a draft to correct)
**Purpose:** Single data source for the CV, website and upstream profile-doc rewrite.
**Target role:** Director of Data & AI — full-time contractor, remote from Brazil, USD.

> **Repositioning rule applied throughout:** *from "Marketing Analytics Director" → "Data & AI leader who is hands-on."*
> Marketing analytics is one proven domain, not the headline. The headline is: owns the data platform end
> to end, and ships production LLM/AI systems.

**Evidence discipline:** every claim below cites a repo or a document. Anything I could not verify is in
§7 as an open question rather than being written into the CV. Numbers are literal or literally counted.

---

## 1. Positioning statement

Data and AI leader who still ships code. Owns a company-wide data platform end to end — a nine-schema
Redshift warehouse fed from 16 source systems, an Athena/Iceberg lakehouse of 99 tables, and the
orchestration, governance and data-quality layers around both — while designing and deploying the
production LLM systems that sit on top of it: agent-safety libraries, natural-language interfaces to the
warehouse, and customer-facing conversational agents.

Fifteen years of engineering training (Physics and Mechanical Engineering) applied to commercial
problems: a Bayesian marketing mix model on Google Meridian, a convex-optimization budget allocator, and
a production Amazon advertising bid engine that closes the loop from report ingestion through
optimization to automated bid writes. Equally at home diagnosing a 43.8% attribution gap in SQL and
architecting the event-driven pipeline that fixed a vendor's 5-second webhook SLA.

Marketing analytics is where this started and remains a proven domain — MMM, Markov attribution, budget
optimization under uncertainty. It is no longer the boundary of the work.

---

## 2. Corrected Filterbuy scope

The current profile document describes Filterbuy as "leading Marketing Analytics on both Data Engineering
and Data Science fronts." **The repository evidence shows materially broader ownership.** Below is what
`afb-git/` actually contains — 39 repositories, all Filterbuy-internal, none publishable.

### 2.1 The data warehouse (`filterbuy-etl`, 35 commits, all by Rodrigo)

Canonical repository for every SQL query and Matillion job behind the Redshift warehouse.

- **Amazon Redshift** (`redshift-cluster-filterbuy` / `filterbuy_dw`, us-east-1)
- **9 documented schemas** in a `stg1 → stg2 → dwh` flow, with **parallel `*_restricted` chains isolating
  PII** (SSN, tax, payroll, salary, addresses) behind elevated permissions, plus `sandbox*` dev mirrors
- **36 `dwh` tables — 12 dimensions + 24 facts** (star schema)
- **16 source systems** feeding `stg1`, identified by table prefix: two RDS ERPs (AirfilterBuy,
  SupplyBuy), QuickBooks Online, Pipedrive, ServiceTitan, Routable, Paycor/Paylocity (restricted),
  Facebook/Google/Bing/TikTok/Amazon Ads, Keepa, UPS, Google Sheets, QuickSight metadata
- **5 marketplaces** tracked; 5 named manufacturing locations
- **1,202 SQL files** counted in the repo (`sql/` 81, `matillion_exports/` 1,011, `docs/` 36)
- **961 Matillion job/transformation JSON exports** across 7 bundles
- BI layer: **Amazon QuickSight, 11 dashboards documented** with extracted queries and dataset IDs

**Warehouse rebuild designed** (`docs/new_dwh/`, 17 documents, started 2026-03-09), driven by a
diagnosed pathology: `dim_cart` carries **255 QuickSight dataset references** and acts as the de-facto
orders table while `fact_sales_orders` is used in only 4; **15 of the top 40 most-used QuickSight tables
are `stg2` staging tables.** Design principle stated explicitly: self-sufficient denormalized facts that
"an analyst — or an AI agent — reading a single fact table" can use without joins.

### 2.2 The Athena/Iceberg lakehouse (`amazon-reporting-ingestion` 65 commits, `filterbuy-data-analytics`)

A second, serverless platform running alongside Redshift.

- **AWS Athena over Glue, Apache Iceberg** format, workgroup `Analytics`, `s3://filterbuy-lakehouse/`
- **5 datasets / 99 tables** (verified against 99 one-per-table documentation pages)
- Ingestion is **event-driven, not orchestrated**: S3 `ObjectCreated` → EventBridge → Python 3.12 Lambda
  → Athena `MERGE INTO` / `DELETE+INSERT` into Iceberg. 5 Lambdas, 3 EventBridge rules, 3 S3 buckets
- **57 SQL files** under `sql/`, spanning reporting API, marketing stream, bid-engine model data, Keepa
- All 65 commits in `amazon-reporting-ingestion` authored by Rodrigo; first commit 2026-03-19

### 2.3 Orchestration, and the migration off it

Three different things are called "orchestration" here and the CV must not blur them:

| Layer | What | Scale (counted) |
|---|---|---|
| **Data pipelines** | Matillion ETL (legacy, **EOL 2026-04-01**) | **253 jobs**, 109 production-schedule-related |
| **Environments** | `orchestrator` — Docker Compose + Terraform | **88 compose services** across 6 files; **96 Terraform resources** (29 ECS task defs, 22 ECS services, 21 Cloud Map entries); per-branch ephemeral AWS ECS envs in ~15–20 min via 3 GitHub Actions workflows |
| **Replacement** | AWS Step Functions + EventBridge | Demonstrated in `keepa-data-extraction` |

`run_incremental` — the primary daily ETL orchestration — runs **53 components**, invokes **17 child
orchestrations** across **8 source systems**, and takes **90–180 minutes**.

**The Matillion EOL migration is the through-line:** documented the legacy orchestrator with AI
assistance, then began moving workloads onto serverless AWS orchestration and an Iceberg lakehouse.
`keepa-data-extraction` is the proof point — a Matillion job that **ran ~13 hours with token-timeout
failures** was re-platformed onto EventBridge Scheduler → Step Functions → 4 Lambdas → S3.

### 2.4 The Amazon advertising platform — 8 repos, 660 commits, active

A complete closed-loop system, single-owner across every layer.

**Ingest.** `amazon-reporting-api` requests async Amazon Ads reports and creates an EventBridge Scheduler
poll job (every 15 min for 2 hours); `amazon-reporting-grab` polls, downloads gzip JSON, converts to CSV,
lands in S3; `amazon-marketing-stream-data-prep` converts real-time Marketing Stream JSON to
schema-validated Parquet.
→ **34 scheduled EventBridge report triggers = 17 distinct report types × 2 marketplaces (US/CA)**,
covering 4 ad products (Sponsored Products/Brands/Display/TV). 4 Marketing Stream datasets.

**Decide.** `amazon-bids-optimizer` — the production Lambda. **19,061 lines of Python**, **62 test
files**. Three optimization modes:
- *Sponsored Brands* — additive multi-factor model, weights 0.25/0.30/0.30/0.15
- *Sponsored Products* — multiplicative: performance factor (target ACoS / TACoS blend) ×
  opportunity factor from a **composite robust z-score** over visibility headroom, market importance and
  market-share headroom (weights 0.40/0.25/0.35, combined via `1 + A·tanh(k·z)`) × velocity ×
  day-of-week, tanh-bounded across tiers T1–T4
- *Placement-anchored* — absolute unit-economics bid `AOV × TargetACoS × CVR` with **Empirical-Bayes
  (Beta-Binomial) CVR smoothing**, prior strength estimated per campaign by method-of-moments variance
  decomposition
Writes bulksheets or applies bids through the Ads API in **batches of 1,000 behind a circuit breaker**.

**Optimize (outer loop).** `amazon-acos-optimizer` fits a per-campaign **two-parameter Hill saturation
curve** (`scipy.optimize.curve_fit`, bounded least squares + bootstrap), then solves
`max Σ(margin·revenue(spend) − spend)` in **cvxpy** under budget and max-CPC guardrails, in
**expected / risk-averse / chance-constrained** modes — setting the target ACoS the bid engine optimizes
against. ~300 campaigns per round. Deployed as a container-image Lambda because scipy+cvxpy+pyarrow
exceed the 250 MB zip limit.

**Control.** `amazon-bid-engine-control` (**346 commits** — largest in the cluster): CloudFront+S3
dashboard behind Lambda@Edge Google OAuth, API Gateway control API, DynamoDB run-status/schedule/audit
store, EventBridge Scheduler → SNS trigger, refresh Lambda that regenerates dashboard JSON only when the
source table's `MAX(dt)` advances. 8 dashboard pages, 13 named AWS resources, 10 shared Athena modules.

**Every repo deploys via GitHub Actions with OIDC — no long-lived credentials.**

### 2.5 AI and LLM systems at Filterbuy

This is the section the current profile document omits almost entirely.

**`filterbuy-ads-skills` — production agent-skill platform (46 commits, 41 by Rodrigo).**
A pnpm/TypeScript monorepo of **61 registered agent skills** (Google Ads 33, Amazon Ads 15, Meta 13) on a
zero-runtime-dependency core. Its value is a **uniform mutation-safety contract**: every skill returns the
same `SkillResult` envelope with `dryRun: true` as the schema default, an idempotency key derived from
`(skillName, subjectId, payload)`, LOW/MEDIUM/HIGH risk classification, estimated blast radius, approval
gating on HIGH, a redacted pluggable audit sink, and rollback hints. **Zod schemas serve double duty** —
runtime validation and LLM tool-use definitions — which is what makes the registry directly consumable by
an agent. **59 Vitest test files**; Changesets releases to a private registry. Eight non-negotiable
invariants documented. Architectural rule: dependencies flow upward only, so an agent treats Google,
Amazon and Meta identically.

**`matillion-ai-debugging` — LLM-assisted ETL forensics, and the warehouse's data dictionary.**
Mechanism: export the whole Matillion project via its REST API → flatten every embedded query into
**361 individual SQL files** → index into `analysis-results.json` → ground a Claude Code agent on a
hand-built schema dictionary and source inventory → run an ordered runbook of Redshift Data API probes,
each with an **expected** result, mapping deviations to a catalogue of known root causes → persist
findings as dated handoffs so the next session resumes with prior state.
Index produced: Matillion v1.74.5, **253 total jobs**, 109 production-schedule jobs, 210 `line_type` joins.

**Operational agent tooling.** **12 Claude Code skills** embedded in the warehouse repos — 9 in
`filterbuy-etl` (`debug-matillion`, `manage-matillion`, `debug-query`, `quicksight`, …; one `SKILL.md` is
60.7 KB of encoded operational knowledge) and 3 in `amazon-reporting-ingestion`, which use a
**tool-neutral `ai/skills/` source that syncs to both Claude and Codex mirrors with CI drift checking.**

**LLM in the pipeline.** `amazon-etl-alerting` runs **AWS Bedrock (Nova Pro)** daily at 18:00 UTC to write
a structured digest of pipeline alerts back into Slack. Bedrock also runs inside the bid optimizer as an
async S3-triggered enrichment handler adding natural-language summaries to dashboard CSVs.

### 2.6 Data governance and quality

- **Warehouse data dictionary** (`matillion-ai-debugging/docs/context/`, 50.3 KB): all **36 `dwh` tables
  documented — 12 dim + 24 fact** — each with description, recorded row count (e.g. `dim_cart`
  21,011,165 rows), plus Key Relationships, **Validated Field Definitions** (the contract-like layer,
  pinning down ambiguous fields after verification against production) and Data Quality Notes.
- **Lineage/source register** (26.5 KB): **8 categories, 16 documented sources**, each with source type,
  credential variable, table prefix, stg1/stg2 table counts, owning orchestration and business context —
  plus the table-prefix→source naming convention that functions as the governance standard.
- **Agent-readable data-lake library** (`filterbuy-data-analytics/docs/data-lake/`): **115 markdown files,
  99 of them one page per table**, carrying grain, keys, metrics, lineage, safe joins, cost-aware query
  patterns and an evidence log citing a source for every assertion. 97 of 99 marked `second_pass_complete`.
- **Data-quality assertions**: **20 enumerable SQL checks** in the production-scheduling pipeline — 10
  input-validation (missing DC→manufacturing mappings, missing MERV ratings, missing staff/production
  capacities) and 10 output-validation (lines > staffing available, lines > tooling sets, duplicate
  `(mfg, DC, line type, rank)` grain, negative production goals, sub-minimum runs), with an explicit
  tolerance buffer and results feeding a counter table.
- **A genuine data contract**: `v_marketing_spend` in `mmm-filterbuy` is defined as a **"9-column shared
  contract"** unioning 5 spend channels; all 11 Athena/Iceberg views have documented source, parser and
  validation rules.
- **Attribution reconciliation** (`unmatch-orders`): found **43.8% of airfilterbuy orders unattributed
  (66,850 of 152,575)** over 90 days, then root-caused it — server-side subscription renewals 99.8%
  unattributed, Stripe Pay-with-Link 91%, Amazon Pay 100%, PayPal 48.8% — separating "expected by design"
  from "fixable tracking gap", and tracked the weekly trend from ~52.6% down to ~36.8%.

### 2.7 Marketing science (now one domain among several)

**`mmm-filterbuy` — Bayesian marketing mix model on Google Meridian** (26 commits, active). JAX/NumPyro
MCMC, geometric adstock (max_lag 8 weeks), Hill saturation, weekly grain, controls for workdays,
BFCM/Christmas/holidays plus Fourier annual seasonality. Fed by a purpose-built lakehouse: **11
Athena/Iceberg views** deployed and validated. Trained on **ECS Fargate**. 3 model scopes (one blocked by
an upstream `is_first_order` data defect — diagnosed, not hidden). Evaluation is MAPE plus **6 "sniff
guards"** combined into a composite score, with production alert thresholds (min R² 0.70, max ROAS CI
width 3.0, max staleness 48h) and a 104-week rolling retrain. A `BudgetOptimizer` with efficiency-frontier
and scenario analysis exists — see §7, its wiring is unconfirmed.

Also at Filterbuy: `amc-query-runner` (Amazon Marketing Cloud submit/poll on Lambda, 24 commits),
`ga4-analysis` (GA4 raw export in BigQuery — 855 event tables, coverage from 2023-12-19), Google Merchant
Center feed governance (**10,532 rows × 132 columns**, with auditable QA outcomes: 2,488 SKUs dropped for
>1% price drift, 468 no-PDP SKUs dropped).

### 2.8 Team leadership

**Not evidenced in the repositories.** See §7 — this needs your input, and it matters for a Director role.
The only adjacent signal is `rt-weekly-worklog`, described in its own README as "the Slack message
delivered to the dev team," and its CLAUDE.md noting it is "read by the dev team and must be accurate."
That evidences team *reporting*, not people management.

---

## 3. Skills matrix — rewritten and re-ranked

Ordered within each group by depth of evidence in the repositories. Items marked ⚠ are claims in the
current profile document that the repository audit does **not** support at the stated level.

### Data Engineering & Warehousing
1. **SQL / dimensional modelling** — 1,202 SQL files in one repo alone; 36-table star schema; 9-schema
   layered architecture with PII isolation
2. **AWS data stack** — Redshift, Athena, **Apache Iceberg**, Glue, S3, Lambda, Step Functions,
   EventBridge, SNS, DynamoDB, ECS Fargate, Secrets Manager
3. **BigQuery** — the entire Bling/Forneria Luce, Adagio and Marketing Funnel Scoring body of work;
   partitioned/clustered tables, `MERGE` upserts, staging-table patterns, partition-pruned queries
4. **Event-driven pipeline architecture** — ack-first webhook ingress → Pub/Sub → idempotent worker →
   MERGE, with DLQ, exponential backoff and bounded concurrency (see §4.3)
5. **Matillion ETL** — 253 jobs, 961 exported job definitions; plus the migration off it
6. **Data governance** — 36-table data dictionary, 16-source lineage register, 99-table agent-readable
   catalog, 20 enumerable quality assertions, a literal 9-column data contract
7. ⚠ **dbt** — see §7. Referenced as the upstream producer of 56 marts tables and 22 model contracts were
   written for a migration, but **no dbt project exists in any of the 123 repositories audited.**

### AI & LLM Engineering
1. **Agent tool/skill layer design** — the strongest and most differentiated skill. 61 production skills
   with a uniform safety envelope (dry-run default, idempotency keys, risk classification, blast-radius
   estimation, approval gating, redacted audit, rollback hints); Zod schemas doubling as LLM tool-use
   definitions
2. **Production LLM agents** — tool-calling orchestrator loops over skills registries, multi-tenant client
   config, derived conversation state, multimodal (vision + Whisper transcription)
3. **LLM security hardening** — prompt-injection sanitizers, immutable safety prompt sections, PII
   filters, blocked-response fallbacks, human-in-the-loop approval gates, fail-closed allowlists
4. **Natural-language interfaces to a data warehouse** — text-to-SQL agent over BigQuery with an
   `ActionGuard` write-safety layer; LLM-grounded diagnostic runbooks over a 253-job ETL platform
5. **Multi-LLM routing** — OpenRouter (Claude Sonnet 4.6 / Haiku 4.5), Anthropic SDK, OpenAI SDK, AWS
   Bedrock (Nova Pro), Google Vertex AI
6. **MCP (Model Context Protocol)** — `blingMCP`, a public MIT-licensed MCP server: 254 Bling API v3
   endpoints consolidated into 18 LLM-friendly tools, OpenAPI-driven codegen, stdio + HTTP-SSE transports
7. **Agent-oriented documentation** — governance docs written specifically so an LLM reasons correctly;
   tool-neutral skill sources syncing to Claude and Codex mirrors with CI drift checks
8. ⚠ **RAG / vector search** — genuinely thin. See §7. One production RAG system (`anchora-chat`: FAISS
   `IndexFlatIP`, `text-embedding-3-small`, mandatory citation extraction), one architected but
   3-commit (`adagio_chatbot`). Every other chatbot grounds via hand-built XML system prompts and JSON
   config, and one catalog lookup is a hand-rolled `fuzzyScore()`.

### Analytics & Experimentation
1. **Marketing mix modelling** — Google Meridian, Bayesian MCMC (JAX/NumPyro), adstock + Hill saturation,
   sniff-guard evaluation, production alert thresholds
2. **Optimization under uncertainty** — cvxpy convex programs in expected / risk-averse /
   chance-constrained modes; Hill response-curve fitting with bootstrap ensembles
3. **Statistical methods in production** — Empirical Bayes / Beta-Binomial smoothing, composite robust
   z-scores (median/IQR), method-of-moments estimation
4. **Attribution** — Markov chain (per profile doc); GA4 attribution-gap reconciliation with root-cause
   decomposition (repo-verified)
5. **Forecasting** — Prophet in production twice (AWS Lambda container → Redshift → S3; GCP Cloud
   Function → BigQuery, 4 models, 120-day horizon)
6. ⚠ **A/B testing & experimentation** — claimed in the current profile doc; **no experimentation
   framework, test-assignment logic or analysis code found in any repository.** See §7.

### Cloud & Infrastructure
1. **GCP-native architecture** — Cloud Functions gen2, Cloud Run, Pub/Sub, Cloud Scheduler, Cloud Tasks,
   Firestore, BigQuery, Secret Manager, Cloud Build, Artifact Registry, Vertex AI, Cloud Storage
2. **Serverless at scale** — 22+ Cloud Functions in one platform; 5 Lambdas in another; container-image
   Lambdas for heavy scientific dependencies
3. **CI/CD** — GitHub Actions everywhere, with **Workload Identity Federation on GCP and OIDC on AWS —
   no long-lived credentials in either estate**
4. **Terraform** — 96 resources for ephemeral ECS environments; GCS/Firestore/Artifact Registry/global
   ALB with managed certs and serverless NEG
5. **Docker** — multi-stage builds, 88-service Compose stacks, LocalStack, Traefik with local TLS
6. **Auth & security** — self-hosted OIDC provider architecture, Lambda@Edge OAuth, JWT/JWKS cross-app
   SSO, argon2 hashing, HMAC-SHA256 webhook verification, fail-closed Firestore security rules with
   emulator-based rules tests

### BI & Visualization
1. **Amazon QuickSight** — 11 dashboards documented and audited; a 116-visual / 20-dataset weekly business
   review; SPICE dataset management
2. **Streamlit** — deployed client-facing BI on Cloud Run with token auth, PII masking, partition-pruned
   queries
3. **Custom analytics front-ends** — CloudFront+S3 dashboards, React/Vite admin surfaces
4. **Looker Studio** — 10 views deployed on the Marketing Funnel Scoring engagement
5. ⚠ **Looker / LookML** — claimed in the current profile doc; **no LookML, no `.lkml` files, no Looker
   project found anywhere.** See §7.

### MarTech & Advertising
1. **Amazon Advertising** — deepest platform expertise: Reporting API, Marketing Stream, Marketing Cloud
   (AMC), Ads API writes, 17 report types, 4 ad products, 2 marketplaces
2. **Google Ads** — 111 v24 services covered in a generated endpoint catalog; GAQL; 33 agent skills
3. **Meta / TikTok / Bing Ads** — 13 Meta skills; multi-channel spend ingestion
4. **Google Merchant Center** — feed construction, QA and governance at 10,532 SKUs × 132 columns
5. **Vertex AI Search for Retail** — recommendation engine with catalog sync, attribute enrichment,
   user-event auditing, 2 deployed serving configs
6. **GA4** — raw BigQuery export modelling, 855 event tables, attribution analysis
7. **GTM (client + server-side)**, DV360, Campaign Manager — per profile doc; repos show only 2023-era
   API-client spikes
8. ⚠ **Segment** — claimed in the current profile doc; **no evidence in any repository.** See §7.

---

## 4. Body of work — six themes

Not a repo list. 123 directories audited; ~94 are git repositories with commit history.

### 4.1 Enterprise data platform ownership
*Filterbuy — 39 repositories, none publishable*

Two co-existing warehouse platforms (Redshift + Athena/Iceberg), 16 source systems, 253 orchestration
jobs, 99 lakehouse tables, a 36-table dimensional model, the governance layer documenting all of it, and
an in-flight migration off a platform hitting end-of-life. Plus the developer platform that runs the
company's 88-service estate locally and provisions per-branch ephemeral AWS environments. Full detail
in §2.

### 4.2 Production LLM and agentic systems
*Both employer and independent work*

The strongest differentiator and the most under-represented area in the current CV.

- **`Bling-Chatbot-Agent`** (345 commits, active 2026-07-28) — multi-tenant LLM agent platform on Cloud
  Run: customer-facing restaurant ordering over WhatsApp plus internal BI-analyst agents, each tenant with
  its own credentials, permissions, catalog and guardrails. MCP SDK, 10 documented API endpoints, 3
  companion microservices, prompt-injection hardening, PagBank payments, vitest suite.
- **`filterbuy-ads-skills`** — 61 skills with the mutation-safety envelope (§2.5).
- **`analyticsbot-forneria-luce`** (93 commits) — text-to-SQL analytics agent over BigQuery *plus* a
  guarded catalog-write path against a live ERP, with an `ActionGuard` layer and a test suite explicitly
  covering write safety, prompt behaviour and outage handling.
- **`blingMCP`** — public MIT MCP server; 254 API endpoints → 18 tools; OpenAPI-driven codegen.
- **`matillion-ai-debugging`** — LLM grounded on a hand-built schema dictionary driving a deterministic
  diagnostic runbook over 361 extracted SQL files.
- **`rt-code-assistant`** (132 tests) — security-first agent controller: drives Claude Code and Codex from
  Telegram with human-in-the-loop approval, outbound-only long polling as a hard invariant (no inbound
  surface), fail-closed allowlist, blast-radius limits, secret redaction.
- **`chatbot-doutor-sofa`**, **`crvendas-chabot-agent`** — WhatsApp sales/booking agents on the same
  orchestrator + skills-registry pattern, multimodal (vision + Whisper).
- **`anchora-chat`** — RAG product where every answer must cite a retrieved passage, so the model cannot
  fabricate quotes. FAISS + `text-embedding-3-small`, Stripe billing, Firebase auth.

### 4.3 E-commerce and marketplace integration at scale
*The Bling ecosystem — one platform, not 30 projects*

**~30 repositories comprising a single event-driven ERP→warehouse integration platform** for a Brazilian
client, plus the chatbot and CRM that consume it. Deployed as **22 Cloud Functions** (gen2, Python 3.11)
across GCP, every one via GitHub Actions with Workload Identity Federation.

The architecture is worth stating as an engineering decision, because it was forced by a measured failure:

> Bling enforces a **5-second webhook SLA**. The original synchronous handlers did the API fetch and
> BigQuery MERGE on the request path. Measured results: orders at **p50 19s** with ~33% explicit 500s and
> ~33% Cloud Run timeouts; stock at **p50 7.3s**; products and invoices at ~7s, with **Bling counting
> ~92% and ~99% of deliveries as failures and disabling both webhooks.**
>
> Rearchitected into three roles: **ack-first ingress** (verify HMAC-SHA256, filter event prefix, publish
> a uniform envelope to Pub/Sub, return 204 — no BigQuery dependency at all, which is the cleanest
> evidence of the split) → **worker** (re-fetch the full record, idempotent MERGE, exponential backoff
> 10s→600s, dead-lettering) → **scheduled reconciliation** (daily batch pull catching dropped messages,
> DLQ'd events and hard deletes). Shipped in two waves, 2026-05-12 and 2026-06-23. Target ack under 1s at
> p99; stock ingress reports <200ms in practice. The Bling-side registration URL was deliberately left
> unchanged so no vendor reconfiguration was needed.

Supporting detail that shows the reasoning was cost- and correctness-aware, not just architectural:
worker instance counts deliberately capped (`max-instances=1` for orders after a load test produced
duplicate rows; `4` for stock, citing BigQuery's per-table DML cap of 20); MERGE keys chosen for
idempotency under at-least-once delivery; `WRITE_TRUNCATE` used only where a full snapshot is correct, and
that function returns 500 rather than truncate a partial catalog on a mid-pagination failure.

Also in this theme: **`forneria-crm-sns`** (167 commits, **259 tests**) — a B2C segmentation CRM
compiling a nested boolean AST into parameterized BigQuery SQL, with idempotent per-recipient WhatsApp
campaign dispatch, dry-run and test-redirect safety modes, 5-day fixed-window attribution, and **LGPD
compliance enforced at both preview and send time**.

### 4.4 Full-stack operational apps for real businesses
*Independent consulting — rt analytica*

- **`roteirizador-forneria-luce`** — delivery route optimizer on Cloud Run; pulls daily ERP orders,
  classifies addresses through a 3-tier CEP→zone classifier (~80-entry table), packs routes to ≤12 orders
  with morning/flex/afternoon slot ordering. Replaced a Google Sheets + Apps Script workflow. Custom
  heuristic packer, documented risk register.
- **`forneria-ops`** — deployed FastAPI SSO gate on Cloud Run: one login, app selector showing only
  permitted apps, JWT HS256 cross-app SSO so downstream apps need no second login.
- **`hoshinsul-webapp`** — **live at `avaliacao-hoshinsul.web.app`**. Replaced an Excel judging workflow
  for a Hapkido federation: three referees scoring concurrently from their own devices, public TV display
  view, fail-closed role-based Firestore rules with emulator-based rules tests, deliberately on the free
  tier. Two sibling apps cover jump-event scoring and automatic bracket generation.
- **`inbox-bridge`** (30 commits) — WhatsApp Business inbox platform: Meta Cloud API webhooks, human agent
  takeover via a real-time dashboard, conversation lifecycle as an explicit state machine. Fastify +
  Postgres/Drizzle + Socket.IO + JWT + GCS media + Cloud Run CI/CD. **Postponed — cloud infra
  decommissioned 2026-07-18**, so it is a case study, not a live demo.
- **`chatbot-forneria-luce-analytics`** — client-facing Streamlit BI on Cloud Run with single-use hashed
  visitor tokens, BRT/UTC day-boundary handling, PII phone masking, test-phone exclusion at the SQL layer.
- **`rt-analytica-hub`** — internal HTML hosting service; FastAPI + React + Terraform-provisioned global
  ALB with managed cert and serverless NEG.

### 4.5 Marketing science
*Where the career started; now one domain of several*

Google Meridian MMM (§2.7). The Amazon bid engine and ACoS optimizer (§2.4) — genuinely the most
mathematically substantial work in the estate. GA4 attribution reconciliation (§2.6). Vertex AI Search for
Retail recommendations feeding personalized Google Merchant Center feeds (`adagio_teas_recommendations_vertex_ai`
+ `Adagio-Smart-GMC-Feeds`, 19 audience queries — best told as one "personalization stack"). Prophet
forecasting in production on both AWS and GCP.

From the profile document (pre-dating the repo estate, not repo-verifiable): MMM for General Motors
(\$100M+ spend) at WMcCann; AIRE budget-reallocation engine and Megalista audience generation at MINT;
first-party data activation across 8 LATAM markets for Nestlé at IPG Mediabrands.

### 4.6 Developer tooling and automation
- **`rt-stripe-setup`** (**54 tests**, all mocked) — production billing: idempotency-key design, FX
  sourcing with fallback, markup/minimum rules, PaymentIntent-vs-Invoice modelling rationale, strict mypy,
  4 Dockerfiles, multi-service Cloud Build deploys
- **`rt-analytics-alerts-bot`** — Pub/Sub push with OIDC bearer auth, rules engine with TTL dedupe and
  quiet hours, CI/CD to Cloud Run. *(Not agentic despite the name — a plain event-normalization service.)*
- **`ads-mcp`** — productionized FastAPI wrapper over the Google Ads API, dual auth (OAuth + service
  account impersonation), 8 GAQL presets, Cloud Run deploy
- **12 Claude Code operational skills** across the Filterbuy warehouse repos, with cross-agent portability
  and CI drift checking

---

## 5. Curated portfolio — 15 projects

Optimized for range: platform ownership, AI/LLM depth, ML in production, business impact.
**Shareable** = can be linked or shown. **Prose only** = describable, never linked (NDA, secrets, or
client-confidential).

| # | Project | Hook | Stack | Demonstrates | Shareable? |
|---|---|---|---|---|---|
| 1 | **Filterbuy data platform** | Two warehouse platforms, 16 sources, 253 orchestration jobs, 99 lakehouse tables, all documented | Redshift, Athena/Iceberg, Glue, Matillion, Lambda, Step Functions, QuickSight | End-to-end platform ownership | **Prose only** |
| 2 | **Amazon advertising bid engine + ACoS optimizer** | Closed loop from report ingest to automated bid writes; Hill curves + cvxpy set the target the bid engine optimizes against | Python, Lambda, Athena/Iceberg, scipy, cvxpy, DynamoDB, Step Functions | Applied optimization in production at real spend | **Prose only** |
| 3 | **`filterbuy-ads-skills` — agent safety layer** | 61 agent skills across 3 ad platforms behind one mutation-safety contract | TypeScript, Zod, Vitest, pnpm, Changesets | Making LLM agents safe to run against production systems | **Prose only** (architecture write-up feasible) |
| 4 | **Bling ERP → BigQuery event platform** | Rearchitected under a vendor's 5s SLA after webhooks were being disabled at ~92–99% failure | Python, Cloud Functions gen2, Pub/Sub, BigQuery, Secret Manager, GH Actions + WIF | Event-driven reliability engineering with measured before/after | **Shareable** (client naming: ask) |
| 5 | **`Bling-Chatbot-Agent`** | Multi-tenant production LLM agent — WhatsApp ordering + internal BI agents, 345 commits | TypeScript, Cloud Run, MCP SDK, OpenRouter/Claude, Firestore, Cloud Tasks | Production agentic systems at multi-tenant scale | **Shareable** (client naming: ask) |
| 6 | **`analyticsbot-forneria-luce`** | Natural-language analytics over BigQuery *plus* a guarded ERP write path | Python, FastAPI, Cloud Run, BigQuery, OpenRouter, ActionGuard | NL interface to a data warehouse — with write safety | **Shareable** (anonymize) |
| 7 | **`blingMCP`** | Public MIT MCP server: 254 API endpoints → 18 LLM-friendly tools via OpenAPI codegen | TypeScript, MCP SDK, Zod, vitest | Open-source MCP/agent-tooling contribution | **Public** ✅ |
| 8 | **Marketing Funnel Scoring** | 0–1000 channel scoring engine with LLM recommendations and a human approval app | Python, FastAPI, BigQuery, Anthropic SDK, Cloud Run, Looker Studio | Full pipeline → model → LLM → human-in-loop → BI, for a paying client | **Shareable** (client permission: ask) |
| 9 | **`mmm-filterbuy`** — Bayesian MMM | Google Meridian on a purpose-built Iceberg lakehouse, trained on ECS Fargate | Meridian, JAX/NumPyro, Athena/Iceberg, ECS Fargate, Streamlit | Bayesian modelling in production with real evaluation guards | **Prose only** |
| 10 | **`matillion-ai-debugging`** | Export a GUI ETL platform to text, ground an LLM on it, drive a deterministic diagnostic runbook | Python, Matillion REST API, Redshift Data API, Claude Code skills | LLM applied to data engineering — and the resulting data dictionary | **Prose only** (technique is generic) |
| 11 | **`forneria-crm-sns`** | Boolean segment AST → parameterized BigQuery SQL; WhatsApp campaigns with LGPD enforced at preview *and* send | TypeScript, React, BigQuery, Firestore, Cloud Tasks, Cloud Run | Full-stack product with compliance built in; 259 tests | **Shareable** (client naming: ask) |
| 12 | **`rt-code-assistant`** | Drive Claude Code and Codex from Telegram with no inbound network surface | Python, python-telegram-bot, launchd | Security-first agent design, human-in-the-loop; 132 tests | **Shareable** (scrub secrets) |
| 13 | **`inbox-bridge`** | WhatsApp Business inbox with agent handoff as an explicit state machine | Fastify, Postgres/Drizzle, Socket.IO, React, Cloud Run | Substantial full-stack product engineering | **Case study** (infra decommissioned) |
| 14 | **`hoshinsul-webapp`** | Replaced an Excel judging workflow — 3 referees scoring live from their own devices | React, Vite, TypeScript, Firebase, Vitest + rules tests | Clear before/after outcome, tested security rules, zero-cost footprint | **Public** ✅ (live URL) |
| 15 | **Adagio personalization stack** | Vertex AI Search for Retail recommendations feeding personalized Merchant Center feeds | Python, Vertex AI Retail, BigQuery, Cloud Functions, Shopping Merchant API | ML recommendations wired into a commercial feed pipeline | **Shareable** (client naming: ask) |

**Deliberately excluded and why:**
`mediamixmodel` — empty scaffold, no modelling code, remote points at a third-party account (currently
listed as a portfolio project in the profile doc; **removing it**). `filterbuy-cms` / `filterbuy-marketing-app`
— 588/669 commits, **zero by Rodrigo**; listing would misattribute authorship. `claude-skills-factory` —
unversioned scratch folder full of plaintext credentials. `llm_engineering_course` — a clone of
`ed-donner/llm_engineering`; its 612 commits belong to upstream authors. `bip39` — someone else's
open-source project. `TrimTrek`, `forneria-pcp-app`, `historias-de-colo-app` — specs/stubs with no
implementation. The 2023 API-client spikes (DV360/GADS/TIKTOK) — 2–5 commits each, already superseded.

---

## 6. Career timeline

Verified against `PROFESSIONAL_PROFILE_CONTEXT.md`. **The repositories cannot confirm employment dates or
titles** — repo creation dates reflect when a repo was started, not when a role began. Flagged rather than
silently changed.

| Period | Role | Organization |
|---|---|---|
| 2024–present | Marketing Analytics Director ⚠ | Filterbuy (Fort Lauderdale, FL — remote from São Paulo) |
| 2022–2023 | Sr. Marketing Analytics Developer | Filterbuy |
| 2022–2023 ⚠ | Head of Data LATAM | IPG Mediabrands |
| 2020–2022 | Data Manager | MINT |
| 2019 | Data Analytics Manager | WMcCann (McCann Worldgroup) |
| 2018 | Data Scientist | Rede Globo (Gshow) |
| 2017 | Data Science Consultant | Bridge Consulting |

**⚠ Two things to resolve — see §7:**
1. **Title.** "Marketing Analytics Director" is the single biggest obstacle to the repositioning. The
   scope in §2 is a Head of Data / Director of Data & AI scope. Is there a current internal title that
   reflects it, or do we present the actual title with the scope stated underneath?
2. **Date overlap.** The profile doc lists Filterbuy 2022–2023 *and* IPG Mediabrands 2022–2023. One of
   these is wrong or they overlapped. Which?

**Education** (from the profile doc; corrections you already flagged are applied):

| Year | Qualification | Institution |
|---|---|---|
| 2020–2021 | MBA, Data Science & Analytics | USP |
| 2018–2019 | M.Sc., Industrial Engineering — **interrupted** | COPPE-UFRJ |
| 2010–2015 | **B.Sc., Mechanical Engineering** | UFF |
| 2006–2010 | B.Sc., Physics | UFF |

**Confirmed corrections to apply everywhere:** GitHub `strod` · LinkedIn `linkedin.com/in/strodrigo` ·
born 7 Jan 1988 · B.Sc. Mechanical Engineering (not Industrial) plus B.Sc. Physics · UFRJ M.Sc. interrupted.

---

## 7. Gaps and open questions — checklist

Nothing below goes into the CV until you answer. Grouped by how much it changes the output.

### DECIDED 2026-07-29 (answers from Rodrigo)

- [x] **Team leadership → cross-functional / dotted line.** No direct reports. Write it as *technical
      leadership* — leading engineers and analysts on projects without formal reporting lines. **Do not
      claim line management anywhere.** Lead with platform ownership and scope.
- [x] **Title → keep the actual title, restate the scope beneath it.** "Marketing Analytics Director" stays
      as the formal title; the summary line immediately underneath states the company-wide data platform
      and AI scope. Honest, survives reference checks.
- [x] **Claims to keep: dbt, Looker/LookML, A/B testing & experimentation.** These are real work that
      never landed in a repository. Write them without repo-derived specifics — no invented counts, no
      fabricated project names. **Segment is dropped entirely.**
- [x] **Client naming → name no clients.** Rodrigo's framing: these are side gigs, and surfacing them
      risks reading as moonlighting rather than as a career-oriented Director candidate. No client names
      anywhere on the CV or the public site. See the open question directly below on how far this goes.

- [x] **Independent work → website portfolio ONLY, not the CV.** Final call: **rt analytica does not
      appear on the CV at all** — no experience entry, no bullets, no mention. The CV covers employers
      only (Filterbuy → IPG → MINT → WMcCann → Rede Globo → Bridge). The independent projects live in
      the rodtex.dev portfolio, which the CV footer links to.
      *Consequence, stated plainly:* the CV's AI/LLM evidence now rests entirely on Filterbuy work —
      the 61-skill agent-safety library, LLM-assisted ETL diagnostics, and Bedrock in the pipeline.
      That is still substantial, but the deepest artifacts (345-commit multi-tenant agent platform,
      text-to-SQL agent, public MCP server) are visible only via the website. The CV summary was
      reworded to stop claiming "customer-facing conversational agents", since nothing in the CV body
      evidences it any more.
- [x] **Filterbuy start date = January 2024.** There was no earlier Filterbuy role. The
      "Sr. Marketing Analytics Developer 2022–2023" line in the old profile doc was **wrong** and is
      removed. The apparent Filterbuy/IPG overlap was an artifact of that error — timeline is now clean:
      IPG 2022–2023, Filterbuy Jan 2024 onward.

### Blocking — remaining

Nothing blocking. Remaining items below are enhancements, not blockers.

### Metrics I could not obtain from the repositories

- [ ] **Business outcomes at Filterbuy.** The repos contain scale and method but almost no *results* — no
      ROAS lift, no cost saved, no revenue influenced. Do you have any figure you're permitted to quote?
      Even one ("cut reporting latency from X to Y", "reduced ad spend waste by Z%") transforms the CV.
- [ ] **Warehouse scale in business terms** — rows, daily volume, spend under management. `dim_cart` at
      21,011,165 rows is the only row count recorded anywhere.
- [ ] **Bling platform volume** — the orders worker states "~1k events/day, ~5–10 per minute peak". Is
      that the whole platform or just orders?
- [ ] **Adagio, Doutor Sofá, CR Vendas** — any usage, conversion or deflection numbers?
- [ ] **Years of experience.** The profile doc says "8+"; the timeline (2017→2026) supports 9. Confirm.

### Claims in the current profile doc I could not verify — tell me which to keep

Each of these is currently on your CV. The audit found no supporting code. Some may be real work that
never landed in a repo — I need you to tell me which.

- [ ] **dbt** — no dbt project in 123 repositories. Evidence found: dbt named as the upstream producer of
      56 `filterbuy_lake_marts` tables, and 22 dbt-model contracts written in `OWBR` for a migration.
      Do you write dbt models, or consume tables someone else builds with it?
- [ ] **Looker / LookML** — no LookML anywhere. You have Looker *Studio* (10 views) and deep QuickSight.
      Have you built LookML?
- [ ] **Segment** — zero evidence. Real experience, or should it come off?
- [ ] **A/B testing & experimentation** — claimed, but no framework, assignment logic or analysis code
      found. Where does this live?
- [ ] **Kubernetes** — listed under DevOps; no manifests, Helm charts or k8s config in any repo.
- [ ] **GTM server-side, DV360, Campaign Manager 360** — the repos hold only 2023 API-client spikes.
      These are presumably from the agency years and fine to keep as prior-role skills — confirm.

### Technical points to confirm

- [ ] **MMM `BudgetOptimizer`** — the code exists (efficiency frontier, scenario analysis) but the README
      flags that module as stale/pending refactor. Is budget optimization actually running, or is it built
      but not wired to the current training path? Changes whether I write "delivers budget
      recommendations" or "implemented budget optimization".
- [ ] **`amazon-bid-engine-model`** — a multi-tenant productization of the Filterbuy bid engine, active as
      of 2026-07-22 but not a git repo. Is this a commercial product you're building? It changes the
      narrative if so.
- [ ] **Vertex AI / SageMaker** — I found Vertex AI *Search for Retail* (a managed recommendation
      service), Prophet on Lambda, and Meridian on ECS Fargate. I did **not** find custom model training
      or deployment on Vertex AI or SageMaker. Correct?

### Housekeeping — not CV-related, but you should know

Committed secrets found during the audit. None are in `rodtex_cv`, so none block this work, but several
sit in repos with public or shareable remotes:

- Live-looking **OpenAI API key** hardcoded in `gpt_sentiment_analysis/sentiment_analysis.py:5`
- **SSH private key** `adop_test_key` in `ai_media-planner/`
- **GCP service-account JSON keys** in `hoshinsul-switching-app/`, `inbox-bridge/`, `ga4-analysis/`,
  `filterbuy-gdf-catalog/`, and the Marketing Funnel Scoring folder
- **OAuth `client_secret_*.json`** in `rt-analytica-hub/`, `cooperadores_op_mural/`, Marketing Funnel
  Scoring, `TIKTOK_API_CLIENT/testing.py` (hardcoded secret)
- **Plaintext credential files** throughout `claude-skills-factory/` (Redshift, Facebook Ads, Bing Ads)
- **`.env` files** committed in ~15 repos, including `matillion_credentials.sh`, `redshift_credentials.sh`
  and a VPN profile in `filterbuy-etl`, and `MATILLION_USER`/`MATILLION_PASSWORD` in
  `trigger-matillion-orchestrations`
- Client **PII** in `leticialacava_cv/docs/context.md`; a 175 MB WhatsApp message-store export in
  `crvendas-chabot-agent/docs/`

Rotate the OpenAI key and the TikTok client secret first — those are the two most likely to be live and
abusable.

---

## 8. What changes in the CV and site

Concrete deltas, so Phase 3 is mechanical once you approve.

**Headline.** "Marketing Analytics Director" → Data & AI leadership framing (exact wording depends on
your answer to the title question in §7).

**Summary.** Rewritten per §1 — platform ownership and production AI first, marketing analytics as a
proven domain rather than the identity.

**Filterbuy bullets.** Currently 9 marketing-scoped bullets. Replaced with company-wide scope leading with
outcomes: warehouse architecture and governance, the Amazon advertising platform, the agent-safety layer,
the Matillion EOL migration, MMM, data quality and reconciliation.

**Skills section.** Reordered per §3 — Data Engineering & Warehousing and AI & LLM Engineering first;
MarTech last. Unverifiable claims removed pending your §7 answers.

**Portfolio.** From ~40 loosely-described projects to the 15 in §5, chosen for range and each with a
stated demonstration. `mediamixmodel` removed. Filterbuy work described in prose with no links.

**CV vs website split (final).** The **CV is employer-only** — Filterbuy, IPG Mediabrands, MINT,
WMcCann, Rede Globo, Bridge Consulting. Independent work appears **only in the website portfolio**,
reached via the CV footer link to rodtex.dev. No client is named in either place.

**Stale facts corrected.** GitHub `strod`, LinkedIn `strodrigo`, born 7 Jan 1988, B.Sc. Mechanical
Engineering + B.Sc. Physics, UFRJ M.Sc. interrupted — verified across `index.html` and every
`portfolio/` page.

**"50+ projects" / "40+ projects"** → 123 repositories audited, ~94 with commit history. The claim gets
more accurate *and* more impressive.

---

## 9. Turno-style requirements — honest gap assessment

Assessed 2026-07-29 against the repository evidence. **Strongly evidenced** = a hiring manager could
verify it from artifacts. **Thin** = real but narrower or on different tooling than the requirement
implies. **Absent** = no evidence found.

| Requirement | Verdict | Evidence / gap |
|---|---|---|
| **Leading NL / LLM interfaces to a data warehouse** | **Strong** | Best-in-class. Text-to-SQL agent over BigQuery (93 commits) with an `ActionGuard` write-safety layer and tests for prompt behaviour under adversarial input; LLM grounded on a hand-built schema dictionary driving a diagnostic runbook over a 253-job ETL platform; 61-skill agent library with a mutation-safety contract |
| **GCP** | **Strong** | 22+ gen2 Cloud Functions, Cloud Run, Pub/Sub, Cloud Tasks, Firestore, Secret Manager, Vertex AI, Cloud Build — all deployed via Workload Identity Federation, no long-lived keys |
| **BigQuery** | **Strong** | The whole independent estate. Partitioned/clustered tables, `MERGE` upserts, staging-table patterns, partition-pruned queries, cost-aware design, a boolean segment AST compiled to parameterized SQL |
| **Marketplace / SaaS domain** | **Strong** | Amazon US+CA, Walmart, eBay, Home Depot, Target marketplaces in the warehouse; a multi-tenant agent SaaS platform; a multi-tenant ERP connector designed for Cloud Marketplace billing |
| **Data governance** (dictionaries, contracts, quality standards) | **Strong**, with a caveat | 36-table dictionary with *Validated Field Definitions*; 16-source lineage register with a prefix→source convention; 99-page agent-readable catalog with per-assertion evidence logs; 20 enumerable SQL quality assertions; one literal "9-column shared contract". **Caveat:** all self-built documentation and hand-rolled SQL checks — no Great Expectations, no dbt tests, no data-observability platform. Present it as *governance built from scratch where none existed*, which is the honest and more impressive framing |
| **Executive stakeholder partnership** | **Thin** | Indirect only: 11 QuickSight dashboards including `executive_summary` and `profit_and_loss`; a 116-visual weekly business review; IPG-era "investment cases" for enterprise clients. No artifact shows you *in the room*. **Fix:** one or two concrete sentences from you — which executives, what cadence, what decisions changed |
| **Financial-data reconciliation** | **Thin** | Adjacent but not the thing. `unmatch-orders` is *marketing attribution* reconciliation, explicitly not financial. Real financial engineering does exist — Stripe billing automation with FX sourcing, markup rules, idempotency keys and PaymentIntent-vs-Invoice modelling (54 tests) — plus QuickBooks Online, Routable and payroll ingestion with restricted PII chains and a `finance` warehouse domain. **Gap:** no ledger/AR/AP tie-out or month-end close work. Don't claim reconciliation; claim financial data pipelines and billing systems |
| **ML deployed to production** (Vertex AI / SageMaker) | **Thin** | Production ML is real: Prophet forecasting on AWS Lambda *and* GCP Cloud Functions (4 models, 120-day horizon), Bayesian MMM trained on ECS Fargate, Vertex AI Search for Retail recommendations with 2 live serving configs. **But:** no custom model training or endpoint deployment on Vertex AI, and **no SageMaker at all.** If a JD names those two platforms specifically, this reads as a gap |
| **A/B testing & experimentation** | **Thin** | You confirmed it's real, and it stays on the CV. No supporting code in 123 repos — no assignment logic, no test registry, no analysis notebooks. **Fix:** name the platform (Optimizely? VWO? in-house?) and one test with a result, or expect it to be probed in interview |
| **dbt** | **Thin, bordering absent** | Zero dbt projects across 123 repos — no `dbt_project.yml`, no `profiles.yml`, no `models/`. What exists: dbt named as the *upstream producer* of 56 `filterbuy_lake_marts` tables, and **22 dbt model contracts you authored** for a QuickSight-to-Athena migration. So you specify and consume dbt output; there's no evidence you build and run the models. **Fix:** either clarify that you own the dbt project elsewhere, or reframe as "specified dbt model contracts; consume dbt-built marts" |
| **Looker / LookML** | **Thin** | No LookML, no `.lkml`, no Looker project anywhere. You have Looker *Studio* (10 deployed views) and genuinely deep **QuickSight** (11 documented dashboards, a 116-visual review, SPICE dataset management). **Fix:** if the LookML is real, it lives outside these repos — say where. Otherwise lead with QuickSight, which is your actual strength |
| **Team leadership (3–4 people)** | **Absent** as specified | You confirmed cross-functional / dotted-line leadership with **no direct reports**. Written as technical leadership throughout; line management is never claimed. This is the single biggest first-screen risk for a Director title. **Fix:** if you've ever had reports, mentored named juniors, or owned hiring/onboarding, that's worth stating explicitly |
| **Segment** | **Absent** | Zero evidence. Removed from the CV and profile doc with your agreement |

### The three things worth fixing before applying

1. **Team leadership.** A Director JD asking for 3–4 people screens on this first. Dotted-line leadership
   is writable, but if there's any people-management history — mentoring, onboarding, interviewing —
   surface it.
2. **One business outcome at Filterbuy.** The evidence is overwhelmingly *scale and method*, almost never
   *result*. A single permitted figure (spend optimized, ROAS lift, cost avoided) would do more for the CV
   than any rewording.
3. **dbt and LookML.** Both are on the CV and both are invisible in the code. If a technical screen probes
   either, the gap shows. Decide now whether to defend them or reframe them.

### What is genuinely differentiating

Lead with these, because they are rare and fully evidenced: **owning two warehouse platforms end to end**;
**building the agent-safety layer that lets LLMs mutate production ad accounts safely**; **applied
optimization in production** (Hill curves, convex programs, Empirical Bayes); and **reliability
engineering with measured before/after** (p50 19s → sub-second; 43.8% → ~37% attribution gap; 13-hour job
re-platformed). Very few Data & AI candidates can show all four.
