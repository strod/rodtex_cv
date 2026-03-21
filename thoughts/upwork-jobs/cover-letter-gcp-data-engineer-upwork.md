# Cover Letter — GCP Data Engineer (Marketing Funnel Scoring)

**To:** Client — GCP Data Engineer — Marketing Funnel Scoring (BigQuery, Cloud Functions, Looker Studio, Claude API)

---

I've read your full job post and the technical spec approach. I'm a Marketing Analytics Director and Data Engineer with 8+ years building end-to-end MarTech solutions on GCP and AWS. I've designed data warehouses (including Redshift → BigQuery migrations), production Cloud Functions and Cloud Run services, and Looker/Looker Studio dashboards. I'm used to working from detailed specs and delivering pipeline + scoring + AI layers in a single stack — which is why I'm applying.

**What I bring to this role**

- **BigQuery & data warehouse:** I design and run production warehouses on BigQuery (and Redshift). At Filterbuy I own schema design, ETL orchestration, and query tuning; we cut data latency from 24h to under 1h and reduced compute cost by ~40%. I'm comfortable with config tables, EAV-style metrics, and multi-dataset roll-ups (channel → stage → brand) as in your spec.
- **GCP serverless:** I've shipped Cloud Functions (Node and Python) and Cloud Run services for ETL, APIs, and event-driven workflows — e.g. Vertex AI recommendation pipelines, Google Merchant Center feeds, and Firestore ↔ BigQuery syncs. I've used Cloud Scheduler for daily/weekly pipelines and can implement your Monday 10am scoring + recommendation run without issue.
- **Data pipelines & APIs:** I build and maintain pipelines from Meta Ads, Google Ads, GA4 (including native BigQuery export), Search Console, CRM (e.g. Pipedrive, Sheets), and similar sources. I haven't used Windsor.ai directly but I've integrated many marketing APIs (TikTok, DV360, Google Ads) and can follow your Windsor → BigQuery spec quickly.
- **Looker Studio & reporting:** I build and maintain Looker and Looker Studio dashboards for marketing and exec teams — score cards, funnel views, heatmaps, and AI/insight panels. Desktop-only, colour-coded scores and recommendation panels are within my usual scope.
- **Claude / LLM APIs:** I've built apps that call Anthropic and other LLM APIs (REST, structured JSON in/out), including an AI media planner and multi-LLM chatbots. I'm comfortable assembling payloads from BigQuery, calling the API, parsing responses, and writing results back to BigQuery or Sheets for review workflows.

**Relevant work (portfolio samples)**

1. **rodtex.dev** — [https://rodtex.dev](https://rodtex.dev)  
   Personal portfolio/CV with a dedicated Portfolio section: Data Warehouse (BigQuery/Redshift, Matillion, dbt), Vertex AI Recommendations (BigQuery ML, Cloud Functions), Google Ads Automation (Cloud Functions, GAQL, Cloud Scheduler), Server-Side GTM (Cloud Run), MMM, and related projects. The attached PDF is a short, print-optimised sample of these for quick reference.

2. **GitHub — strod** — [https://github.com/strod](https://github.com/strod)  
   Public repos include API clients (Google Ads, DV360, TikTok), ETL and data-warehouse work, Cloud Functions (e.g. GMC feeds, Firestore/BigQuery sync), and LLM/Claude-related tooling. Code style is production-oriented with clear structure and minimal dependencies.

3. **Filterbuy (current role)** — Data warehouse (BigQuery), ETL from Amazon Ads, TikTok, Google Ads, Pipedrive CRM, and web analytics; Looker/QuickSight dashboards; RFM and attribution models; and automated bid/reporting pipelines. Much of this is proprietary, but the patterns (schema, scheduling, scoring, reporting) align with what you're building for hospitality.

**Estimated hours per milestone**

| Milestone | Deliverable | Est. hours |
|-----------|-------------|------------|
| 1 | BigQuery schema + Windsor/GSC/GAds/GA4 pipelines + Sheets onboarding template + test data | 18–24 |
| 2 | Scoring Cloud Function (full formula, edge cases, unit tests) | 22–28 |
| 3 | AI recommendation Cloud Function + Sheet approval workflow + auto-approve scheduler | 16–22 |
| 4 | Looker Studio dashboards (3 views, BigQuery, scores, AI panel) | 14–20 |
| 5 | Chat interface + E2E testing + handover docs + 1 week bug fixes | 18–24 |

**Total (range):** ~88–118 hours. Assumes one pilot client (6 venues), spec followed as written, and Windsor/GCP access from day one. If the 30+ page spec includes extra edge cases or more sources, I'd refine these estimates at kickoff.

**Which milestone I expect to be most challenging (and why)**

**Milestone 2 — Scoring Cloud Function.** Getting the three-component formula (YoY, seasonal trajectory, momentum) right on a 0–1000 scale, with channel → stage → brand roll-ups, configurable weights, revenue-weighted venue aggregation, and "multiple edge case rules," is the highest risk for subtle bugs and spec drift. One mis-specified edge (e.g. missing data, single-venue, or new channel) can skew scores and undermine trust in the whole funnel. I'd tackle it with explicit unit tests per component and per roll-up level, plus a small test dataset that encodes every edge case from the spec. Milestones 1, 3, and 4 are more mechanical once the schema and pipelines are in place; Milestone 5 is integration and polish. So I'd prioritise clear test coverage and a review checkpoint on M2 before locking the formula.

---

I'm based in São Paulo (UTC−3), fluent in English, and used to async collaboration and weekly check-ins. I can start as soon as access (GCP, Windsor, Claude API key) is ready and aim to deliver Milestone 1 within one week as you indicated.

I've attached a short PDF portfolio sample (A4, print-optimised) with three relevant projects for quick review. Full details and links are on [rodtex.dev](https://rodtex.dev) and [github.com/strod](https://github.com/strod).

Best regards,  
**Rodrigo Teixeira**  
rodstex@gmail.com | +55 11 930212911 | [linkedin.com/in/strodrigo](https://linkedin.com/in/strodrigo)
