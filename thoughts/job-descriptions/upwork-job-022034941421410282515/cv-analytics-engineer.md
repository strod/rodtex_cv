# RODRIGO TEIXEIRA

**Analytics Engineer | BI & Data Modeling Specialist**

São Paulo, Brazil | rodrigo@rodtex.dev | +55 11 930212911
linkedin.com/in/strodrigo | github.com/strod | rodtex.dev

---

## PROFESSIONAL SUMMARY

Analytics Engineer with 8+ years of experience designing production dashboards, data models, and monitoring systems for ML-driven teams. Expert in Looker, LookML, DBT, SQL, and cloud data warehouses (BigQuery, Redshift, Snowflake-equivalent). Proven track record translating model performance data into actionable business insights for non-technical stakeholders. Experienced working embedded within AI/ML engineering teams, owning dashboard strategy, data transformation pipelines, and alerting logic for model degradation detection.

---

## CORE SKILLS

| Category | Technologies |
|----------|-------------|
| **BI & Dashboards** | Looker, LookML, Looker Studio, QuickSight, Tableau, Power BI |
| **Data Modeling** | DBT (incremental models, materializations, DAG dependencies), dimensional modeling, fact/dimension tables, time-windowed joins |
| **Data Warehouses** | BigQuery, Redshift, PostgreSQL |
| **SQL** | Complex analytical queries, window functions, CTEs, query optimization, partitioning, clustering |
| **Orchestration** | Airflow, Matillion ETL, Fivetran, Cloud Scheduler, EventBridge |
| **Python** | Pandas, Scikit-learn, XGBoost, Prophet, boto3, ad-hoc analysis & automation |
| **ML Monitoring** | Model performance tracking, data drift detection, feature drift, concept drift, retraining triggers |
| **Cloud** | GCP (BigQuery, Cloud Functions, Cloud Run, Vertex AI, Pub/Sub), AWS (Redshift, S3, Lambda, Kinesis) |
| **Version Control** | Git, GitHub, CI/CD workflows |

---

## PROFESSIONAL EXPERIENCE

### Marketing Analytics Director
**Filterbuy** | Fort Lauderdale, FL (Remote) | Jan 2024 - Present

- Own end-to-end analytics for 10+ production ML models: churn prediction, predictive LTV, Marketing Mix Model (Google Meridian), Amazon bid optimization, and attribution models
- Design and maintain Looker and QuickSight dashboards tracking model performance, translating statistical outputs into business decisions ("retrain model," "feature data issue," "budget reallocation needed")
- Build and manage DBT incremental models joining predictions to actuals with time-lag offsets (e.g., LTV predictions at T joined to actual revenue at T+30, T+60, T+90)
- Apply DBT materialization strategies (incremental, table, view) and manage full refreshes after schema changes across BigQuery and Redshift
- Design alerting logic to flag model degradation, abnormal prediction patterns, and data quality issues
- Reduced reporting latency from 24 hours to under 1 hour through optimized pipeline architecture
- Cut query costs by 40% via partitioning, clustering, and materialization strategy optimization
- Collaborate daily with ML engineers to define healthy performance metrics and monitoring thresholds
- Respond to ad-hoc analytical questions from engineering, product, and executive leadership

### Sr. Marketing Analytics Developer
**Filterbuy** | Fort Lauderdale, FL (Remote) | Jan 2022 - Dec 2023

- Built ETL pipelines consolidating data from Amazon Ads, TikTok, Google Ads, Pipedrive CRM, and web analytics into Redshift data warehouse
- Designed dimensional models (fact tables, dimension tables) for cross-platform marketing attribution
- Created BigQuery analytical modules for ROI analysis, cohort analysis, and LTV evolution tracking
- Implemented enhanced ecommerce tagging and server-side event forwarding (GA4, GTM server-side, Meta CAPI)

### Head of Data, LATAM
**IPG Mediabrands** | São Paulo, Brazil | 2022 - 2023

- Led data strategy across 8 LATAM markets for Nestlé, designing first-party data ingestion and unification pipelines
- Built server-side GTM infrastructure that identified 30%+ conversion undercounting on Safari (ITP/ad blockers), driving investment in server-side measurement
- Implemented Google BPI (Best Practices Implementation) across all Nestlé Google Ads accounts in LATAM

### Data Manager / Tech Lead
**MINT (AI Startup)** | São Paulo, Brazil | 2020 - 2022

- Designed AIRE (AI Recommendation Engine): budget optimization algorithm using Linear Programming that increased ROI by 25%+
- Built Megalista: ML-based smart audience generation tool using web traffic data
- Developed predictive planning algorithms based on Markowitz Portfolio Optimization for media budget allocation

### Data Analytics Manager
**WMcCann (McCann Worldgroup)** | São Paulo, Brazil | 2019

- Led comprehensive Marketing Mix Model study defining optimal annual budget allocation for General Motors ($100M+ marketing spend)
- Built measurement frameworks and automated reporting pipelines (SQL, BigQuery)

### Data Scientist
**Rede Globo** | Rio de Janeiro, Brazil | 2018

- Automated reporting processes for Gshow entertainment portal (80% reduction in manual time)
- Developed churn optimization algorithm for content engagement prediction

### Data Science Consultant
**Bridge Consulting** | Rio de Janeiro, Brazil | 2017

- Built target stock calculation algorithms and outlier detection systems for retail clients
- Designed custom dashboards and automated reporting pipelines

---

## EDUCATION

| Year | Degree | Institution |
|------|--------|------------|
| 2020-2021 | MBA in Data Science & Analytics | USP (Universidade de São Paulo) |
| 2018-2019 | M.Sc. Industrial Engineering (Operations Research) | COPPE-UFRJ |
| 2010-2015 | B.Sc. Mechanical Engineering | UFF |
| 2006-2010 | B.Sc. Physics | UFF |

**MBA Thesis:** "Machine Learning Applied to Audience Generation in the Context of Digital Marketing"
**MSc Research:** "Non-Linear Programming Methods Applied to Media Mix Modeling"

---

## LANGUAGES

- English: Fluent
- Portuguese: Native
- Spanish: Intermediate

---

## KEY PROJECTS

- **ML Model Performance Dashboards:** Looker dashboards tracking prediction accuracy, drift metrics, and retraining triggers across 10+ production models
- **Predictive LTV Pipeline:** 24-month LTV prediction using RFM + XGBoost with censored purchase data, DBT incremental models joining predictions to actuals
- **Amazon Bid Optimization Engine:** Multi-signal control system on AWS Lambda processing real-time Marketing Stream data (Kinesis → Redshift)
- **MMM Production Pipeline:** Google Meridian implementation with weekly retraining, daily inference, model versioning, BigQuery as input/output layer
- **Data Warehouse Migration:** Led Redshift → BigQuery migration with dimensional model redesign, partitioning/clustering optimization
