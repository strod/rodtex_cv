# CipherSalt Lean POC — Proposed Milestones

Aligned with the 30 / 40 / 30 payment split in Section 3 of the RFQ. Each milestone ends with a 30–60 min review where I walk through the architecture (back-end logic → formula layer → UI binding), demonstrate functionality, and present a written QA tick-and-tie sheet plus pre-submitted founder questions.

---

## Milestone 1 — Data Foundation & Salt Score Engine (30% complete · 30% payment)

**Theme:** Get raw inputs out of AMC, unify the three-tier data structure, and produce a working "black box" Salt Score Python script — proven on real CSV data, not slides.

**Deliverables:**
- **AMC extraction pack:** documented SQL queries against the provided AMC instance pulling Direct Data (Impressions, Deterministic Reach, Conversions) and the inputs needed for Derived Data (Path Depth, Revenue Velocity, New-to-Brand). Outputs land as versioned CSVs in the project data lake.
- **Three-tier data dictionary:** one-page schema mapping each of the 17 proprietary metrics to Direct / Derived / Synthesized origin, with formula and source field for every Derived metric.
- **Join engine (Python):** clean module that ingests Procurement and Performance CSVs, normalizes supplier keys, resolves duplicates, and produces a single supplier-level dataframe ready for scoring.
- **Salt Score v1 script:** parameterized weighting engine with the founder's "Moneyball" rules encoded as a config file (weights swappable without touching logic). Outputs a per-supplier Scorecard CSV.
- **QA tick-and-tie sheet:** spot-check of 3–5 suppliers showing the math from raw AMC field → derived metric → weighted contribution → final Salt Score, so the founder can audit any number end-to-end.

**Acceptance criteria:** running `python score.py` on the provided CSVs produces a Scorecard whose top/bottom suppliers the founder agrees pass the "smell test"; the formula path for any score can be traced in under a minute.

---

## Milestone 2 — Integrated POC: CSV-to-UI Pipeline & Optimization Dial (70% complete · 40% payment)

**Theme:** Wire the Python engine to a Next.js front-end via React Server Components so the founder can *use* the dashboard. Sub-second response on the dial, real numbers behind every visual.

**Deliverables:**
- **Data Bridge:** Python service (FastAPI) exposing the Salt Score engine with two surfaces — a batch pre-compute path for steady-state views and an on-demand recompute endpoint for dial interactions.
- **Next.js dashboard skeleton (RSC-first):** v0.app starting layout cleaned up to production standards — typography system, spacing scale, color tokens, component primitives. Server Components fetch and pre-aggregate from CSV; Client Components only where interactivity demands it.
- **Optimization Dial (live):** dragging the dial re-weights the Moneyball formula → Python recomputes → UI updates with optimistic streaming. Target: <800 ms perceived latency at POC data volumes.
- **Situation Room v1:** read-only view of top movers, supplier scorecards, and the breakdown of any Salt Score into its 17 contributing metrics.
- **Architecture map:** one-page diagram tracing a single user action (turn dial → recalc → render) through every layer, with file paths and function names — the "I can point to where every number lives" artifact the RFQ asks for.

**Acceptance criteria:** founder can open the dashboard, turn the Optimization Dial, see suppliers re-rank in near real time, and click any score to see its formula breakdown sourced from real CSV values.

---

## Milestone 3 — Agentic UI, Demo Polish & Handover (100% complete · 30% payment)

**Theme:** Take the working POC from "engineer-grade" to "investor-ready." Layer in the agent, harden, document, hand over.

**Deliverables:**
- **Vercel AI SDK / `streamUI` integration:** the agent reads the Scorecard and renders custom components on the fly to *explain* a Salt Score — e.g. "Why is Supplier X ranked #3?" returns a streamed component showing the dominant weighted metrics, not a wall of text.
- **Situation Room v2:** narrative views the CMO can present from — anomaly callouts, period-over-period deltas, what-if traces tied to dial movements.
- **End-to-end QA pass:** edge-case sweep (empty CSVs, missing supplier joins, extreme weights), unit tests on the scoring module, and a regression check that the same input always yields the same Salt Score.
- **Demo script & founder run-book:** the exact flow for the investor demo, plus a short technical map (where the formulas live, how to swap weights, how to refresh AMC data) so the founder is not dependent on me post-handover.
- **Final handover bundle:** Python repo + Next.js repo + Figma reference + data dictionary + architecture map. Work-for-hire IP transfer per Section 1.

**Acceptance criteria:** founder can run the investor demo unaided; the agent narrates Salt Scores convincingly; all 17 metrics tick-and-tie; repo is clean, documented, and reproducible.
