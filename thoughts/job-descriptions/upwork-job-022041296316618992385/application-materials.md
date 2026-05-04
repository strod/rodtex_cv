# Upwork Application — Marketing Analytics Pipeline (CallRail + PI Law Firm)

**Job:** Marketing Analytics Pipeline — CallRail + PI Law Firm CRM Integration (Prototype)
**Budget:** $2,000–$4,000 | **Timeline:** 2–3 weeks

---

## 1. Milestones (2-Week Plan)

### Milestone 1 — Synthetic Data + Pipeline Core (Days 1–5)
**Deliverables:**
- Realistic synthetic dataset: 6 months of ad spend across 6 channels (~$1.2M/year) + 4,000 CallRail-style call records with intentional messiness (missing sources, inconsistent labels, duplicates, gaps)
- Working ingestion pipeline that reads both CSVs, normalizes channel names, handles unmapped sources and duplicates
- Pipeline Output 1: Visibility Score (0–100)
- Pipeline Output 2: Intake Economics Baseline (answer rate, missed calls, revenue estimate, channel/day/hour breakouts)
- Pipeline Output 3: Channel Cost-per-Call Snapshot (with intentionally blank columns for signed-case metrics)

**Payment trigger:** Pipeline runs end-to-end on synthetic data and produces all three outputs correctly.

### Milestone 2 — Report Template + CRM API Research (Days 6–9)
**Deliverables:**
- Presentation-ready report template (PDF/Slides or Looker Studio with export) including: Visibility Score gauge, intake funnel table with greyed-out rows, missed-call heatmap, channel cost-per-call chart with greyed-out columns
- CRM API research document (4 platforms): Filevine, Litify, SmartAdvocate, CallRail — covering authentication, available fields, marketing source data model, rate limits, and integration feasibility
- Running time log

**Payment trigger:** Report template populated with synthetic data output + completed research doc.

### Milestone 3 — Integration, Polish & Walkthrough (Days 10–14)
**Deliverables:**
- End-to-end pipeline re-run with any edge cases fixed
- Final report with clean formatting
- Complete time log by task
- 30-minute walkthrough call
- Handover: all code, data, docs, and notes on per-client delivery cost estimates

**Payment trigger:** Walkthrough completed + all deliverables handed over.

---

## 2. Cover Letter

Hi — I read your full job post and I'm genuinely interested. This is the kind of project I do every day: take messy, multi-source marketing data, build a pipeline that normalizes and scores it, and produce a client-ready report that tells a clear story.

**Why I'm a strong fit:**

I'm a Marketing Analytics Director currently leading data infrastructure and analytics for a US e-commerce company (Filterbuy). I build and maintain pipelines that ingest data from 10+ marketing platforms — Google Ads, Meta, Amazon Ads, TikTok, Pipedrive CRM, GA4 — into a unified data warehouse. The core challenge is always the same: inconsistent source labels, missing attribution, duplicate records, and channels with spend but no tracking. I've solved this pattern dozens of times.

**What I'll bring to your prototype:**

- **Pipeline engineering from messy marketing data:** I've built production pipelines that handle exactly the data quality issues you describe — unmapped sources, inconsistent channel names, missing labels. At Filterbuy, I consolidated 6+ ad platforms into a single analytics layer, dealing with naming mismatches and attribution gaps at every step.
- **Reporting that clients can read:** I build Looker Studio dashboards and report templates for marketing and executive teams. Score cards, funnel views, heatmaps, and channel breakdowns are standard deliverables in my current role.
- **CRM API integration experience:** I've integrated Pipedrive CRM (REST API) at Filterbuy and have built API clients for Google Ads, DV360, TikTok, and Amazon Ads from scratch. Evaluating a new API (Filevine, Litify, SmartAdvocate) for available fields, authentication, and data model is routine work for me.
- **Synthetic data that's realistic:** My background in statistics (MBA Data Science at USP, M.Sc. research in optimization at COPPE-UFRJ) means I can generate synthetic data that reflects real-world distributions — not just random numbers. I'll build in the messiness you need to stress-test the pipeline.

**What I haven't done (and why it doesn't matter for this scope):**

I haven't used CallRail directly, but I've integrated comparable call-tracking and marketing attribution data via APIs and CSV exports from multiple platforms. The data structure — call records with timestamps, source/channel, duration, answered/missed — is a pattern I've processed many times. I'll review CallRail's API docs on Day 1 and can map their schema to your pipeline requirements within hours.

I haven't worked with legal CRMs (Filevine, Litify, SmartAdvocate), but Deliverable 4 is an API research document — not a production integration. I've evaluated and documented 10+ marketing APIs for feasibility, and Litify being Salesforce-based is a plus since I'm familiar with the Salesforce API structure.

**Logistics:**
- Based in São Paulo (UTC−3), fluent English, async-first with daily status updates
- Can start immediately
- Python + Looker Studio is my preferred stack for this, but flexible on tooling

Looking forward to discussing scope details.

Best,
**Rodrigo Teixeira**
rodstex@gmail.com | rodtex.dev | github.com/strod | linkedin.com/in/strodrigo

---

## 3. Screening Question: CallRail Experience

**Q: Describe your experience with CallRail (API or data exports) and/or building analytics pipelines from marketing data with multiple sources and inconsistent labeling.**

I haven't used CallRail directly, but the core of this question is really about handling call-tracking and multi-source marketing attribution data — which is central to my daily work.

At Filterbuy, I built and maintain production pipelines that ingest data from 10+ marketing platforms (Google Ads, Meta Ads, Amazon Ads SP/SB/SD, TikTok, GA4, Pipedrive CRM) into a unified data warehouse. Each source has its own naming conventions, attribution logic, and data quality issues. My pipelines handle: channel name normalization (e.g., "Google - Brand" vs "google_brand" vs "Google Ads - Search"), deduplication of records across overlapping sources, unmapped or missing attribution, and backfilling gaps from delayed API responses.

The CallRail data model — call records with timestamps, tracking numbers, source/channel labels, answered/missed status, and duration — maps directly to the kind of event-level marketing data I process daily. I'd review CallRail's API documentation and CSV export schema on Day 1, map the fields to the pipeline requirements, and be producing outputs within the first couple of days.

I've also built Python API clients from scratch for Google Ads (GAQL), DV360, TikTok Marketing API, and Amazon Advertising — so integrating a new REST API is not a learning curve, it's a repeatable process.

---

## 4. Screening Question: Legal CRM APIs

**Q: Have you worked with any legal CRM APIs — specifically Filevine, Litify, SmartAdvocate, or Clio? If yes, which ones and what did you build?**

I haven't worked with legal-specific CRMs. However, Deliverable 4 is an API research document — not a production integration — and this is a task I'm well-equipped for:

- **CRM API integration experience:** I've integrated Pipedrive CRM at Filterbuy (REST API — deals, activities, changelog endpoints) and built custom API clients for Google Ads, DV360, TikTok, and Amazon Ads. For each, I evaluated authentication methods, available fields, rate limits, pagination, and data model structure — exactly what you're asking for with the legal CRMs.
- **Salesforce familiarity:** Litify is built on Salesforce, which I've worked with in the context of first-party data activation at IPG Mediabrands (Nestlé LATAM). I understand the Salesforce API structure, object model, and how platforms built on top of it expose (or restrict) data access.
- **Structured research process:** For each platform I'll document: API availability and authentication, field mapping for the specific data points you need (signed cases, case type, source, settlement value, fee earned), where marketing source lives in the data model, rate limits and access restrictions, and feasibility assessment for future integration.

My track record of evaluating and integrating 10+ marketing APIs means I can deliver a thorough, accurate research document — not surface-level summaries, but the specific technical details you need to plan the next phase.

---

## 5. Screening Question: Synthetic Data Approach

**Q: This project requires creating a realistic synthetic dataset simulating a PI law firm's marketing spend and call data. In 2–3 sentences, how would you approach that?**

I'd start by defining realistic monthly spend distributions across channels based on typical PI firm marketing patterns — TV and billboards taking the lion's share, LSAs and Google Ads as the digital core, radio and programmatic as smaller channels — totaling ~$100K/month with seasonal variance. For the CallRail records, I'd generate 3,000–5,000 calls using probability distributions that reflect real-world patterns: higher volume during business hours with a long tail into evenings, channel-level answer rates that vary (LSA calls answer at ~70%, billboard-sourced at ~50%), and duration distributions skewed toward short calls. Critically, I'd inject the messiness that makes a prototype valuable: ~15% of calls with missing or inconsistent source labels, duplicate records from overlapping tracking numbers, channels with spend but zero call tracking (e.g., billboards), and a few weeks of data gaps — because if the pipeline only works on clean data, it's not ready for production.

---

## 6. Screening Question: Hours Estimate

**Q: What's your estimated total hours to complete the full scope?**

- Synthetic data generation: 4–6 hrs — Python script with realistic distributions + intentional messiness
- Pipeline build (3 outputs): 12–16 hrs — Ingestion, normalization, dedup, Visibility Score, Intake Economics, Cost-per-Call
- Report template: 6–8 hrs — Looker Studio or PDF/Slides with gauge, heatmap, funnel table, charts
- CRM API research (4 platforms): 8–10 hrs — Filevine, Litify, SmartAdvocate, CallRail (1.5–2 pages each)
- Integration, edge cases, polish: 4–6 hrs — End-to-end testing, edge case handling, documentation
- Walkthrough prep + call: 2 hrs — Prep + 30-min call
- Total: 36–48 hours

Assumes async communication, no major scope changes, Python + Looker Studio stack. CRM research may vary depending on API documentation quality. Hours logged by task throughout, as requested.
