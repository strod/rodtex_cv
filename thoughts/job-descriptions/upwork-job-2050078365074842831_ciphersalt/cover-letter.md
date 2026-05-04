# Cover Letter — CipherSalt Lean POC

Hi,

I read the full RFQ, including the "Black Box" framing, the three-tier data flow, and the technical confirmations in Section 6. This is squarely the kind of work I do — turning AMC and CSV data into a defensible scoring engine, then presenting it through an interface a CMO can actually steer.

**Why I fit this role specifically:**

I'm a Marketing Analytics Director at Filterbuy (US e-commerce, remote from São Paulo), where I run both the data engineering and data science fronts. Two parts of my current work map almost one-to-one onto your POC:

- **Amazon Marketing Cloud + scoring engines.** I build and operate Filterbuy's Amazon advertising stack — including a production Amazon Bids Optimizer (Lambda + Python) that ingests AMC-adjacent data, applies a weighted decision logic, and reallocates budget. Pulling SQL out of AMC, joining it with proprietary CSVs, and turning that into a per-supplier scorecard is the same shape of problem.
- **Weighted "Moneyball" logic.** At MINT I built **AIRE**, a recommendation engine using linear optimization to reallocate budget across digital channels (lifted ROI 25%+), and a Markowitz-style predictive planning algorithm. I'm comfortable owning both the *formula* and the *why* — exactly the granular articulation Section 2 demands.

**On the technical confirmations (Section 6):**

- **CSV-to-UI pipeline / RSC performance:** I'd run the Python engine as a FastAPI service exposing batch pre-computes (for steady views) and an on-demand recompute endpoint (for dial interactions). React Server Components handle the heavy aggregation server-side; Client Components are reserved for the dial and other interactive surfaces. Pre-computing the Scorecard at ingest keeps the dial under the sub-second "Financial Terminal" bar at POC data volumes.
- **v0.app handoff:** I treat v0 output as a *layout sketch*, not a codebase. First pass: extract the typography scale, spacing, and color tokens into a design system; second pass: replace ad-hoc components with composable primitives; third pass: wire RSC data and remove client-side fetch code v0 tends to over-generate.
- **Vercel AI SDK / `streamUI`:** I've built multi-LLM applications (Adagio Chatbot, AI Media Planner) where the model renders structured components, not plaintext. For CipherSalt, the agent would read the Scorecard and stream a per-supplier explanation component — dominant weighted metrics, score deltas — rather than narrating in prose.
- **Tooling recommendation:** v0.app + Next.js is the right backbone for the agentic feel. I'd add Figma only as a reference layer for the design system, and I'd keep Streamlit out of the demo path — it ships fast but won't deliver the terminal-grade response the brief calls for.

**On QA and "tick and tie":** every milestone review will come with a written audit sheet showing 3–5 suppliers traced from raw AMC field → derived metric → weighted contribution → final Salt Score. You should be able to point at any number on screen and I should be able to point at the line of code that produced it.

**Confidentiality:** I treat the Salt Score weighting logic as a trade secret per Section 1 — work-for-hire, no reuse, no derivative.

Three proposed milestones (30 / 70 / 100) are in the attached `milestones.md`. Pricing table per Section 7 is ready to send once I've reviewed the attached document. Happy to do a 30-minute call to walk through architecture before you commit.

Best,
**Rodrigo Teixeira**
Marketing Analytics Director · rodtex.dev · github.com/strod
