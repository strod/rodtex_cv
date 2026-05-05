**Data Scientist/Quant Requirements & Capabilities Needed**

A data scientist/Quant are  a mathematical architect. To build a "Bloomberg-level" environment that CMOs and CFOs trust, the math must be bulletproof.

Here is a breakdown of the skill set you need and a plain-language explanation of how **Game Theory** and **Bayesian principles** create your **Salt Score**.

---

## **1\. The Expert Data Scientist Skill Set (2026 Standards)**

Be able to  bridge the gap between "Big Data" (Amazon Marketing Cloud) and "Executive Strategy."

| Skill Category | Why It Matters for CipherSalt |
| :---- | :---- |
| **Bayesian Statistics** | To calculate the "Confidence" part of Salt  score. It allows the model to "learn" from past performance rather than just looking at a single snapshot of data. |
| **Game Theory** | To model competitive behavior. If you increase spend, how will competitors react? Game theory helps find the "Nash Equilibrium" where your ROI is maximized. |
| **SQL & AMC Expertise** | They must be able to write complex joins in the **AMC Sandbox** using synthetic and real signals (e.g., joining dsp\_impressions with conversions). |
| **Probabilistic Programming** | Proficiency in tools like **PyMC** or **Stan** to build the actual "Salt Score" algorithm that provides a range of outcomes, not just a single guess. |
| **Business Acumen** | The ability to translate a complex $p$-value into a "Salt Score" that a CFO understands as "Low Risk" or "High Yield." |

---

## **2\. Advanced Analytics in Plain Language**

### **Bayesian Principles (The "Confidence" Engine)**

Traditional math treats every campaign like a brand-new coin flip. **Bayesian math** has a memory.

* **The Prior:** We start with what we already know (e.g., "Historically, video ads in Hawaii have a 2% conversion").  
* **The Evidence:** We look at the new data from the AMC Sandbox.  
* **The Posterior (The Salt Score):** We combine them. If the new data is weak, the "Confidence" score stays low. As more data rolls in, the math "updates" its belief, and the Salt Score becomes more certain.

### **Game Theory (The "ROI" Optimizer)**

In marketing, you aren't playing against a wall; you're playing against other brands.

* **Strategic Interaction:** It calculates the ROI of a "Move"   
* **Scenario Planning:** Game theory helps the Salt Score predict if a high ROI is sustainable  
  ---

## **3\. The 17 Metrics & The Salt Algorithm**

Based on your 17 metrics, here is how a data scientist would apply these advanced theories to derive your **Salt Score**.

### **Salt Score Table: Metric to Analytics Mapping**

| Metric Type | Example Metric (from your 17\) | Analytics Entailment (The "Math") | Game Theory / Bayesian Application |
| :---- | :---- | :---- | :---- |
| **Exposure** | Total Impressions (DSP) | Aggregate dsp\_impressions across all devices. | **Bayesian:** Uses "Priors" to filter out bot traffic/noise based on historical patterns. |
| **Engagement** | Click-Through Rate (CTR) | Derived by clicks / impressions. | **Bayesian:** Adjusts confidence if the sample size is too small to be "statistically significant." |
| **Cost** | Effective CPM (eCPM) | Pulling spend data and normalizing across channels. | **Game Theory:** Identifies if you are overpaying for "vanity" reach vs. competitive conquesting. |
| **Conversion** | Attributed Purchases | Joining amazon\_attributed\_events with specific campaign IDs. | **Bayesian:** Predicts "Likely" ROI even when conversion lag exists (people see ad today, buy in 3 days). |
| **Efficiency** | ROAS / Salt ROI | The core calculation of Revenue / Spend. | **Salt Score:** Weighs the ROI against "Confidence." A 10x ROI with 10% confidence is a lower Salt Score than a 4x ROI with 95% confidence. |
| **Pathing** | Multi-Touch Attribution | Mapping the sequence of ads a user saw before buying. | **Game Theory:** Assigns "value" to each touchpoint as if they were players on a team contributing to a goal. |
| **Frequency** | Optimal Frequency | Determining the "point of diminishing returns." | **Game Theory:** Finds the "Saturation Point" where one more ad actually hurts your ROI. |

---

### **How the "Salt Score" is Born**

The algorithm takes your raw metrics and runs them through a **Monte Carlo Simulation** (running the scenario 10,000 times).

1. **Input:** Your 17 metrics from the AMC Sandbox.  
2. **Process:** Bayesian filters remove the "luck" factor; Game Theory models the "competitive" risk.  
3. **Output:** A single **Salt Score** (e.g., **84/100**).  
   * **The Number:** Represents the expected ROI.  
   * **The Heat Map:** Represents the "Confidence" (how likely we are to hit that ROI).*\*\*This ensures that when your SaaS tells a CMO to spend $1M, the math isn't just "statistically sound"—it's strategically defensive.*

