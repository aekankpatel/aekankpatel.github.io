// src/data/portfolio.js

import stevensLogo from "../assets/logos/stevens.png";
import mitLogo from "../assets/logos/mit.png";
import matrixLogo from "../assets/logos/matrixcomsec.png";

import resumePdf from "../assets/Aekank_Patel_Resume.pdf";

import oilAirlineReport from "../assets/reports/oil_airline_report.pdf";
import timeSeriesReport from "../assets/reports/Time_Series.pdf";


import insightforgeImg from "../assets/projects/insightforgeai.png";
import fraudgenImg from "../assets/projects/fraudgen.png";
import finragImg from "../assets/projects/finrag.png";
import pneumoniaImg from "../assets/projects/pneumonia-detection.png";
import oilAirlineImg from "../assets/projects/oil-airline.png";
import netflixHotelImg from "../assets/projects/netflix-hotel-ts.png";
import usdInrImg from "../assets/projects/usd-inr.png";
import ecommerceImg from "../assets/projects/ecommerce-dashboard.png";
import noshowImg from "../assets/projects/noshow-dashboard.png";
import lifeExpectancyImg from "../assets/projects/life-expectancy.png";
import ecommerceSearchImg from "../assets/projects/ecommerce_search.png";
import nlipSentinelImg from "../assets/projects/nlip.png";
import pageRankImg from "../assets/projects/page_rank.png";
import movieRecommendationImg from "../assets/projects/movie.png";
import videoBackgroundRemovalImg from "../assets/projects/video_bg_remove.png";
import eigenfacesImg from "../assets/projects/face.png";
import insuranceClaimImg from "../assets/projects/insurance.png";
import tradingRLImg from "../assets/projects/rl.png";

export const HERO = {
  headline: "",
  subheadline: "",
  summary:
    "I started in mechatronics, building robots and working with sensors. But I kept getting more interested in the data coming off those systems than the systems themselves. The math behind it clicked for me in a way nothing else had. So I switched tracks. Now I spend my time building ML models, writing Python, and figuring out what messy datasets are actually trying to say.",
  resumePath: resumePdf,
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aekankpatel/" },
    { label: "GitHub", href: "https://github.com/aekankpatel" },
    { label: "Medium", href: "https://medium.com/@aekankpatel" },
    { label: "Tableau", href: "https://public.tableau.com/app/profile/aekank.patel/vizzes" },
    { label: "Email", href: "mailto:aekankpatel@gmail.com" },
  ],
};

export const WHAT_I_DO = {
  title: "What I do",
  intro:
    "Most of my time goes into figuring out why something happened in a dataset and whether we can predict it next time. I like the full loop, from messy CSVs to a working model.",
  bullets: [
    "\u26A1 Build ML systems from scratch: data cleaning, feature work, model training, evaluation, and sometimes a Flask API or Streamlit dashboard on top.",
    "\u26A1 Comfortable with messy, real-world data. Missing values, weird distributions, inconsistent labels. That is most datasets.",
    "\u26A1 Big on explainability. If a model cannot tell you why it made a prediction, I do not trust it much.",
    "\u26A1 I break things a lot while building. That is usually where I learn the most.",
  ],
};

export const NOW = {
  kicker: "CURRENT FOCUS",
  title: "Now",
  subtitle: "What I am up to right now. I try to update this regularly.",
  cards: [
    {
      title: "Recently completed my Master’s 🎓",
      body:
        "Completed my MS in Data Science at Stevens in May 2026. My coursework focused on machine learning, statistics, linear algebra, time series, deep learning, big data, and financial analytics.",
      tag: "Graduated May 2026",
    },
    {
      title: "Looking for work \uD83D\uDD0D",
      body:
        "Applying to Data Science, Machine Learning, AI Engineering, and Data Engineering roles, both internships and full-time. I want to work on teams that build real systems, not just prototypes that stay in notebooks.",
      tag: "Open to opportunities",
    },
    {
      title: "Building projects \uD83D\uDEE0\uFE0F",
      body:
        "Working on projects that go past Jupyter notebooks. Pipelines, model training, evaluation, and getting things deployed with dashboards or APIs.",
      tag: "Always building",
    },
    {
      title: "The basics \uD83D\uDCC8",
      body:
        "Practicing data structures in Python, getting faster at SQL, and trying to write cleaner code in general. The fundamentals matter more than I thought.",
      tag: "Work in progress",
    },
  ],
};

export const EDUCATION = [
  {
    school: "Stevens Institute of Technology",
    degree: "Master of Science in Data Science",
    time: "Aug 2024 \u2013 May 2026",
    gpa: "GPA: 3.967 / 4.0",
    logo: stevensLogo,
    details: [
      "Completed an MS in Data Science (GPA: 3.967 / 4.0) along with a Graduate Certificate in Applied Statistics (GPA: 3.918 / 4.0). Focused on applied machine learning, statistics, finance, time series, and large-scale data systems.",
      "TA for three graduate math courses: Foundational Math for Data Science (MA 574), Numerical Linear Algebra for Big Data (MA 544), and Intro to Probability Theory (MA 540). Responsible for grading and feedback for 89 students.",
      "Most of my learning happens through projects. I have built things across ML, deep learning, time series, and financial analytics."
    ],
    courses: [
      "Foundational Mathematics for Data Science",
      "Introduction to Probability Theory",
      "Applied Machine Learning",
      "Numerical Linear Algebra for Big Data",
      "Statistical Methods",
      "Augmented Intelligence and Generative AI",
      "Time Series Analysis I",
      "Deep Learning",
      "Big Data Technologies",
      "Intro to Bloomberg LSEG and Capital IQ",
      "Financial Lab: Practical Aspects of Database Design",
      "Deep Reinforcement Learning: Applications in Finance",
    ],
  },
  {
    school: "Manipal Institute of Technology",
    degree: "Bachelor of Technology in Mechatronics Engineering",
    time: "Oct 2020 \u2013 Jul 2024",
    gpa: "GPA: 7.83 / 10",
    logo: mitLogo,
    details: [
      "Served as Class Representative for my batch. Mostly meant answering a lot of questions and acting as the go-between for students and faculty.",
      "Ran the Mechatronics Peer Programme, which was essentially tutoring juniors and organizing events.",
      "Built a solid foundation in robotics, embedded systems, and sensors. Also took electives in financial technology, which is where data science started making sense to me."
    ],
    courses: [
      "Data Structures and Algorithms",
      "Financial Econometrics",
      "Fintech Services",
      "Financial Management",
      "IIoT Lab",
      "Machine Vision and Image Processing",
      "Micro Electro Mechanical Systems",
      "Microcontroller Based System Design",
      "Robotics - I",
      "Robotics Lab - I",
      "Robotics Lab - II",
      "Sensors and Instrumentation",
      "Sensors and PLC Lab",
      "Technology For Finance",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "Stevens Institute of Technology",
    role: "Graduate Teaching Assistant",
    time: "Sep 2025 \u2013 May 2026",
    location: "Hoboken, NJ",
    logo: stevensLogo,
    stats: [
      "3 Courses Supported",
      "89 Students",
      "MA 574 \u00B7 MA 544 \u00B7 MA 540",
    ],
    bullets: [
      "Served as TA for three graduate math courses under Dr. Upendra Prasad: Foundational Math for Data Science (MA 574), Numerical Linear Algebra for Big Data (MA 544), and Intro to Probability Theory (MA 540).",
      "Graded assignments, quizzes, and exams across multiple sections. Keeping grading consistent and fair is harder than it sounds with 89 students.",
      "Gave written feedback on math and coding work. The goal was always to be specific enough that students could actually fix what went wrong.",
      "Kept grade records up to date, tracked submission patterns, and flagged issues to the professor when something seemed off.",
      "Used Canvas LMS for grading, submission review, feedback, and grade record management.",
      "Noticed the same mistakes coming up repeatedly in linear algebra and numerical methods, so I started pointing those out proactively in my feedback.",
    ],
  },
  {
    company: "Matrix ComSec Pvt. Ltd.",
    role: "Research & Development Intern",
    time: "Jan 2024 \u2013 May 2024",
    location: "Vadodara, Gujarat, India",
    logo: matrixLogo,
    stats: [
      "91.39% Test Accuracy",
      "100,000+ Images Annotated",
      "YOLOv5 Multi-Person Detection",
    ],
    bullets: [
      "Built a fall detection system using deep learning and computer vision. The goal was to detect when someone falls in a live video feed and flag it for safety monitoring.",
      "Tried several approaches (CNN, RNN, BodyPix, R-CNN) before settling on a hybrid CNN + MediaPipe pipeline for pose estimation. It handled different body orientations better than the alternatives.",
      "Added YOLOv5 for multi-person detection so the system could track several people at once in the same frame.",
      "Annotated over 100,000 images myself. It was tedious, but it made a real difference in how well the model generalized.",
      "Achieved 91.39% test accuracy and validated performance on actual video feeds, not just static test sets.",
      "Used TensorFlow, PyTorch, OpenCV, NumPy, and Matplotlib. Spent a lot of time optimizing inference speed to keep things running in real time.",
    ],
  },
];

export const PROJECTS = [
  // \u2500\u2500 Machine Learning & AI \uD83E\uDD16\u2500\u2500

    {
    id: "finrag",
    category: "ai",
    tag: "AI Engineering",
    title: "FinRAG: Financial Document Intelligence System",
    image: finragImg,
    short: "Ask questions about SEC filings and earnings calls in plain English. A RAG system over 25 financial documents, deployed on Streamlit.",
    tech: "Python \u00B7 LlamaIndex \u00B7 HuggingFace \u00B7 Groq \u00B7 LLaMA \u00B7 Streamlit",
    github: "https://github.com/aekankpatel/finrag",
    live: "https://huggingface.co/spaces/aekankpatel/finrag",
    impact: "RAG over 25 SEC filings with an 80% evaluation pass rate",
    long: `I built this because reading 10-K filings is painful. The idea was to upload a bunch of SEC filings and earnings transcripts, then ask questions in plain English and get answers with source citations.

The pipeline uses LlamaIndex for PDF ingestion and chunking (I ended up with 14,055 text nodes), HuggingFace BGE embeddings for vector search, and Groq-hosted LLaMA 3.1 for answer generation.

Getting this deployed was the hardest part. I started with local Ollama for inference, but that does not work on Streamlit Cloud. I switched to Groq, but had to bypass LlamaIndex's LLM layer entirely and call the Groq SDK directly. The vector index files were around 150 MB, too big for GitHub, so I hosted them on Google Drive and download them at startup.

The app has a compare mode where you can ask the same question to two different companies side by side. I also added confidence scores and source highlighting.

I ran an evaluation on ten financial queries and got an 80% pass rate with 0.57 average keyword recall. Not amazing, but honest. Retrieval over long financial documents is hard, especially when the answer spans multiple sections.`,
  },

    {
    id: "fraudgen",
    category: "ml",
    tag: "Machine Learning",
    title: "FRAUDGEN: Unmasking Fraud with Real-Time Explanations",
    image: fraudgenImg,
    short: "Classifies transactions into four risk tiers using XGBoost, then explains why using LLaMA. Full stack with a Flask backend and React dashboard.",
    tech: "Python \u00B7 XGBoost \u00B7 Flask \u00B7 React \u00B7 SQLite \u00B7 Recharts \u00B7 LLaMA",
    github: "https://github.com/aekankpatel/FraudGen",
    live: "https://fraud-gen.vercel.app",
    impact: "Multi-tier fraud classifier on 6.36M transactions with LLaMA explanations",
    long: `The idea was simple: do not just flag fraud, explain why it is suspicious. Most fraud systems give you a score. I wanted mine to say "this transaction is flagged because the amount is four times the user's average and it came from a new IP in a different country."

I trained an XGBoost model on the PaySim dataset (6.36 million transactions, only 0.129% fraud). The class imbalance was brutal. I used five-fold stratified temporal validation to deal with it. On top of the model output, I added rule-based refinement to sort transactions into Legitimate, Needs Review, High Risk, and Confirmed Fraud.

For the explanations, I connected LLaMA via Groq to generate plain-English summaries of why each high-risk transaction got flagged. I also added IPInfo for geolocation and VPN detection.

The frontend is a React and Tailwind dashboard with Recharts showing fraud trends, severity breakdowns, and a map view. Flask handles the API layer, and SQLite stores transactions.

What I would change: the rule layer and ML layer sometimes disagree on edge cases. I would probably add a conflict resolution mechanism if I rebuilt this.`,
  },

  {

  id: "nlip-sentinel",

  category: "ai",

  tag: "AI Engineering",

  title: "NLIP Sentinel: Trust Firewall for Multi-Agent AI Workflows",

  image: nlipSentinelImg,

  short: "Built a trust firewall for AG2 multi-agent workflows that validates messages, blocks unsafe tool calls, gates risky actions, and produces an auditable trust score.",

  tech: "Python · FastAPI · React · AG2 · Multi-Agent Systems · Gemini · Tavily · Daytona · Vercel",

  github: "https://github.com/aekankpatel/nlip-sentinel",

  live: "https://nlip-sentinel.vercel.app/",

  impact: "End-to-end multi-agent safety layer with schema validation, tool-risk scanning, human approval gates, trust scoring, and audit trails",

  long: `Most multi-agent demos show agents doing impressive things: searching the web, writing code, calling tools. But nobody talks about what happens when agents start talking to each other and using real tools without any guardrails. That is the problem I built NLIP Sentinel to solve.
 
The system runs on AG2 GroupChat with six specialized agents: a PlannerAgent, ResearchAgent, CodeAgent, SandboxExecutionAgent, VerifierAgent, and ReportAgent. Instead of letting them pass messages freely, every step goes through a Sentinel Firewall that checks message schema, validates sender-receiver pairs, scans tool calls for unsafe behavior, and requires human approval for risky execution.
 
The main safety demo is the code execution path. The CodeAgent first produces unsafe code that tries to access environment variables. The firewall catches it, blocks the attempt, logs the decision, and forces the workflow to regenerate safer code. Only after the tool call passes safety checks and human approval can it move to sandbox execution.
 
The backend is FastAPI with endpoints for running demos, checking message envelopes, validating tool requests, and handling approvals. The frontend is a React dashboard that shows the workflow output, trust score, and audit trail.
 
By default, it runs in mock mode so the demo is deterministic without needing external API keys. With real keys, it connects to Tavily for search, Gemini for summaries, and Daytona for sandbox execution.
 
The part I care about most is the audit trail. Every decision is logged: what was checked, what passed, what was blocked, where approval was needed. That makes the system debuggable and closer to how enterprise AI agents would need to work in production.`

  },

    {
    id: "noshow-dashboard",
    category: "analytics",
    tag: "Analytics",
    title: "Patient No-Show Risk Dashboard",
    image: noshowImg,
    short: "Why do patients miss appointments? I analyzed 110K medical records, built a Random Forest model (AUC 0.966), and created dashboards in both HTML and Tableau.",
    tech: "Python \u00B7 SQL \u00B7 SQLite \u00B7 Random Forest \u00B7 Chart.js \u00B7 Tableau \u00B7 Pandas",
    github: "https://github.com/aekankpatel/noshow-dashboard",
    tableau: "https://public.tableau.com/app/profile/aekank.patel/viz/noshow_dashboard/PatientNo-ShowRiskDashboard",
    impact: "AUC of 0.966 on predicting patient no-shows across 110,527 appointments",
    long: `One in five patients does not show up for their medical appointments. I wanted to figure out why, and whether it is predictable.

The dataset has 110,527 appointments from Vitória, Brazil. About 35% of rows had negative lead times because the scheduled timestamp included time-of-day but the appointment date was always midnight. I clamped those to zero instead of dropping them, which would have cut the dataset by a third.

I normalized everything into three SQLite tables (clinics, patients, appointments) and wrote SQL queries to break down no-show rates by weekday, clinic, age group, and SMS reminder status.

The SMS result was surprising. Patients who received reminders actually had a higher no-show rate (28% vs 17%). It turns out SMS was only being sent to patients already flagged as high risk, so the correlation is misleading.

For the prediction model, I built 13 features and trained a Random Forest (100 trees, max depth 8). The model achieved an AUC of 0.966. The single strongest predictor was prior missed visits. If someone has missed three or more times before, they will very likely miss again. Lead time and age were the next most important factors.

I built two dashboards: a standalone HTML version using Chart.js that works offline, and a Tableau Public dashboard with KPI cards, bar charts by weekday, clinic, and age group, plus a feature importance breakdown from the model.

The main takeaway is simple: call patients with three or more prior misses first. That one variable explains more than everything else combined.`,
  },

  {
  id: "ecommerce-product-search-recommendation",
  category: "de",
  tag: "Data Engineering",
  title: "E-Commerce Product Search & Recommendation on Google Cloud",
  image: ecommerceSearchImg,
  short: "Built a cloud-scale product search and recommendation pipeline on 9.8M product-query records using Spark, Dataproc, TF-IDF, LSH, and FP-Growth.",
  tech: "Python · PySpark · Google Cloud · Dataproc · GCS · TF-IDF · LSH · FP-Growth · Recommender Systems",
  github: "",
  live: "",
  impact: "Processed 9.72M cleaned records and achieved 0.856 NDCG, with relevant products usually appearing in the top 1–2 results",
  long: `I wanted to build a product search system that could actually scale. Not a toy demo on a small CSV, but something that worked on nearly 10 million product-query records from Google Shopping.
 
The dataset was MARQO-GS-10M, and just loading it was a problem. My first attempt in Databricks ran out of memory. I ended up using a Compute Engine VM for ingestion into Google Cloud Storage, then Dataproc Spark clusters for the actual processing. Separating storage from compute made everything more manageable.
 
The ETL followed a Medallion architecture: Bronze for raw Parquet, Silver for cleaning and feature engineering, Gold for the final analytics table with about 9.72 million cleaned records. Text went through a TF-IDF pipeline in PySpark (tokenization, stopword removal, lemmatization, HashingTF, IDF, L2 normalization), and I used Bucketed Random Projection LSH for approximate nearest neighbor search at scale.
 
The retrieval metrics were solid: 0.856 NDCG, 0.79 MRR, 0.748 MAP. In practice, a relevant product usually showed up in the first one or two results.
 
I also added an FP-Growth recommendation layer on top. Product baskets were mined for association rules using support, confidence, and lift. This complemented the text search because it captured behavioral co-occurrence patterns that TF-IDF misses entirely.
 
The scaling work was honestly the hardest part. I tested at 100K, 500K, 3M, and full 10M rows. The full ETL ran in about 43 minutes even under quota constraints. Partitioning, shuffle behavior, and cluster lifecycle management mattered more than I expected.
 
If I rebuilt this, I would swap TF-IDF for transformer embeddings and add a learning-to-rank layer on top.`
  },

  {
    id: "insightforgeai",
    category: "ai",
    tag: "AI Engineering",
    title: "Insight Forge AI: LLM-Powered Data Profiling System",
    image: insightforgeImg,
    short: "Upload any dataset and get a full EDA report with anomaly detection, health scores, and LLM-generated insights. Deployed on Streamlit Cloud.",
    tech: "Python \u00B7 Scikit-learn \u00B7 Pandas \u00B7 Plotly \u00B7 Streamlit \u00B7 Groq \u00B7 ReportLab \u00B7 NumPy",
    github: "https://github.com/aekankpatel/insightforgeai/",
    live: "https://huggingface.co/spaces/aekankpatel/insightforgeai",
    impact: "Eight-module Auto-EDA pipeline deployed on Streamlit Cloud with LLM insights",
    long: `I wanted a tool where you could drop in any CSV and get a useful EDA report without writing code. So I built one.

It has eight Python modules that run in sequence: profiling, anomaly detection, correlation analysis, feature summaries, a health scorecard, data cleaning, ML readiness scoring, and LLM insight generation via Groq-hosted LLaMA 3.1.

The tricky part was staying within Groq's free-tier rate limits. I ended up designing a single API call that generates all three insight sections (overview, anomalies, correlations) in one request instead of three separate ones. That solved it.

I also built ten synthetic sample datasets with realistic class imbalance and missing values so people could try it without uploading anything.

The frontend is a twelve-tab Streamlit dashboard with Plotly charts: heatmaps, network graphs, outlier grids, and before-and-after cleaning comparisons. There is also a chat interface where you can ask questions about your dataset in plain English, and a one-click PDF report export.

One thing I would do differently: the session state management got messy. I am persisting everything (analysis results, chat history, cleaning state) in Streamlit session state because there is no database. It works, but it is fragile across reruns.`,
  },

  {
  id: "reinforcement-learning-stock-trading",
  category: "rl",
  tag: "Reinforcement Learning",
  title: "Reinforcement Learning for Stock Trading",
  image: tradingRLImg,
  short: "Built a reinforcement learning trading system for SPY using a custom Gymnasium environment, DQN, PPO, technical indicators, and portfolio backtesting.",
  tech: "Python · Gymnasium · Stable-Baselines3 · PyTorch · DQN · PPO · yFinance · Pandas · NumPy · Backtesting",
  github: "https://github.com/aekankpatel/stock_trading/",
  live: "",
  impact: "Compared DQN and PPO trading agents and found that PPO, despite being the more advanced policy-gradient method, produced weaker out-of-sample trading behavior than expected",
  long: `I built this to see if RL agents could learn to trade SPY better than simple baseline strategies. The short answer is: sometimes, but not as reliably as you would hope.
 
The system used SPY data from 2015 to 2024, converted into features: daily returns, moving-average ratios, 20-day volatility, RSI, MACD histogram, and volume change. I built a custom Gymnasium environment from scratch where the agent sees the market state and its own portfolio (cash ratio, invested ratio, current return), then picks hold, buy, or sell. A 0.1% transaction cost per trade kept things realistic.
 
The reward function measured excess return over the market, not just portfolio growth. This gave a stronger learning signal: staying in cash while the market rose was penalized, while avoiding a decline was rewarded.
 
I trained DQN and PPO using Stable-Baselines3. PPO was expected to be stronger since it is the more advanced algorithm. It was not. PPO produced weaker out-of-sample behavior, sometimes leaning toward overly conservative policies. DQN, being simpler, handled the discrete action space more reliably.
 
For comparison, I also ran Buy-and-Hold, Random, and Moving-Average Crossover baselines. The evaluation included equity curves, drawdown curves, Sharpe ratio, max drawdown, win rate, and trade count.
 
The honest takeaway is that RL in finance is hard. Model complexity does not guarantee better performance. PPO looked like the smart choice on paper but DQN actually traded better in practice. That made the project more interesting to me than if everything had worked perfectly.`
  },

      {
    id: "ecommerce-dashboard",
    category: "analytics",
    tag: "Analytics",
    title: "E-Commerce Sales Dashboard",
    image: ecommerceImg,
    short: "Built a full analytics pipeline on 541K retail transactions. SQL for cleaning and segmentation, Tableau for dashboards. Found that 43% of customers drive 88% of revenue.",
    tech: "SQL \u00B7 SQLite \u00B7 Tableau \u00B7 Excel \u00B7 Data Cleaning \u00B7 RFM Segmentation",
    github: "https://github.com/aekankpatel/ecommerce-dashboard",
    tableau: "https://public.tableau.com/app/profile/aekank.patel/viz/E-commerceSalesDashboard_17744839619360/Dashboard1",
    impact: "RFM segmentation across 4,338 customers revealing that Champions drive 88% of \u00A38.9M revenue",
    long: `This started as a SQL practice project but turned into something more interesting once I started digging into the customer data.

The dataset is 541,909 transactions from a UK-based online gift retailer (UCI Online Retail Dataset). After cleaning out cancellations, null customer IDs, and invalid quantities, I was left with about 398,000 rows.

I normalized the raw CSV into four relational tables: customers, products, orders, and a cleaned line-items table. All done in SQLite using CREATE TABLE AS SELECT statements.

The SQL work covered most of what you would need in practice: aggregations, multi-table joins, window functions (RANK, LAG, NTILE, SUM OVER), CTEs, subqueries, and HAVING clauses. The most involved part was building an RFM (Recency, Frequency, Monetary) segmentation pipeline using NTILE scoring and CASE WHEN logic.

The findings were interesting. Champions (1,883 customers, 43% of the base) account for 88% of total revenue (\u00A37.84M out of \u00A38.9M). The At Risk segment has 1,085 customers worth \u00A3476K. Thursday is the peak revenue day, and 85% of sales happen between 9 AM and 3 PM, which suggests this is more of a B2B wholesale operation than a typical consumer store.

I built Tableau dashboards for revenue trends, geographic breakdowns, product rankings, and the customer segment distribution. The UK dominates at 82% of revenue, with the Netherlands, Ireland, and Germany as the top international markets.`,
  },


  {
    id: "pneumonia-detection",
    category: "ml",
    tag: "Machine Learning",
    title: "Deep Learning for Pneumonia Detection",
    image: pneumoniaImg,
    short: "Can a CNN tell if a chest X-ray shows pneumonia? I trained two models and combined them. The ensemble hit 97.23% accuracy.",
    tech: "Python \u00B7 TensorFlow \u00B7 CNN \u00B7 MobileNet \u00B7 Medical Imaging",
    github: "https://github.com/aekankpatel/Pneumonia_Detection",
    live: "",
    impact: "97.23% ensemble accuracy on chest X-ray classification",
    long: `This was a straightforward image classification project, but I learned a lot about how augmentation affects medical imaging.

I trained a custom CNN from scratch and got 96.64% accuracy. Then I fine-tuned MobileNet and got 95.00%. Neither was bad, but combining them as an ensemble pushed it to 97.23%.

The augmentation mattered more than I expected. Without it, the CNN was overfitting badly on the training set. Random rotations, flips, and zoom brought the gap between training and test accuracy down significantly.

It is a clean project with not a lot of moving parts, but it taught me that simpler ensembles often beat trying to build one perfect model.`,
  },

  {
    id: "oil-airline-bloomberg",
    category: "analytics",
    tag: "Analytics",
    title: "Oil and Airline Stocks: An Empirical Study",
    image: oilAirlineImg,
    short: "Everyone assumes oil prices drive airline stocks. I used ten years of Bloomberg data to check. The answer is more nuanced than you would think.",
    tech: "Bloomberg Terminal \u00B7 Python \u00B7 Econometrics \u00B7 Regression \u00B7 Finance",
    github: "",
    live: "",
    report: oilAirlineReport,
    medium: "https://medium.com/@aekankpatel/oil-prices-vs-airline-stocks-the-relationship-everyone-gets-wrong-c493da0cf700",
    impact: "Market-adjusted models explain 25\u201333% of airline return variability",
    long: `The common wisdom is that when oil goes up, airline stocks go down. I wanted to see if the data actually supports that.

I pulled over ten years of Bloomberg data (2015\u20132025): WTI crude, Delta, American Airlines, United, and the S&P 500. I used Bloomberg's analytics functions (CRP, CMT, HRA, GP) for the raw data.

When I ran a simple regression of oil on airline returns, the relationship was weak. Oil alone barely explains anything. But when I controlled for the broader market (S&P 500), something interesting happened: the oil betas flipped negative and became statistically significant.

So the relationship exists, but only after you strip out the market noise. The adjusted models explain about 25\u201333% of airline return variability. Not huge, but real.

I wrote a Medium article about this because the "oil kills airlines" narrative is oversimplified, and I thought the actual finding was more interesting.`,
  },

  {
  id: "video-background-removal",
  category: "cv",
  tag: "Computer Vision",
  title: "Video Background Removal using SVD and Robust PCA",
  image: videoBackgroundRemovalImg,
  short: "Built a video background subtraction pipeline that separates static background from moving foreground objects using SVD and Robust PCA.",
  tech: "Python · MoviePy · NumPy · SciPy · Scikit-image · SVD · Robust PCA · Computer Vision · Matrix Factorization",
  github: "",
  live: "",
  impact: "Separated foreground motion from 309 CCTV frames using low-rank and sparse matrix decomposition techniques",
  long: `I wanted to see if I could separate a moving person from a static CCTV background using nothing but linear algebra. No pretrained models, no object detectors, just matrix decomposition.
 
The input was 309 frames from a porch security camera at 768 by 432 resolution. Each frame was converted to grayscale, smoothed, flattened into a vector, and stacked column-wise into a big data matrix. The key insight is that the background of a mostly static scene behaves like a low-rank structure, while moving objects show up as sparse deviations.
 
My first approach used SVD. I took a low-rank approximation as the background, subtracted it from the original, and thresholded the difference to isolate motion. It worked, but picked up noise and ghosting from shadows and compression artifacts.
 
The second approach used Robust PCA, which explicitly decomposes the matrix into a low-rank part (background) and a sparse part (foreground). It uses iterative soft-thresholding and randomized SVD. I added morphological filtering on top (binary opening, closing, small-object removal) to clean up the motion masks.
 
Both methods produced usable results. The SVD version was faster but noisier. Robust PCA gave cleaner separation because it models the sparse component directly instead of treating it as leftover error.
 
The main limitation is that both methods assume a fixed camera and mostly stable background. If the camera moves or lighting changes heavily, the separation breaks down. But for a simple CCTV setup, it is surprisingly effective without any deep learning.`
},

  {
    id: "netflix-hotel-ts",
    category: "analytics",
    tag: "Analytics",
    title: "Time Series Modeling: Netflix Stock & Hotel Bookings",
    image: netflixHotelImg,
    short: "Forecasted Netflix stock prices and hotel booking demand using ARIMA and SARIMA. Full Box\u2013Jenkins workflow in R.",
    tech: "R \u00B7 ARIMA \u00B7 SARIMA \u00B7 ACF/PACF \u00B7 Ljung-Box \u00B7 Forecasting",
    github: "",
    report: timeSeriesReport,
    live: "",
    impact: "ARIMA and SARIMA models with validated white-noise residuals",
    long: `Two datasets, one workflow. Netflix adjusted close prices (2002\u20132022) for trend forecasting, and monthly hotel bookings for seasonal demand.

I followed the full Box\u2013Jenkins approach: plotted the data, applied log transforms, ran ADF tests for stationarity, differenced where needed, then used ACF/PACF plots to identify the right ARIMA and SARIMA structures. Model selection came down to AIC and BIC scores.

The Netflix data was relatively straightforward: a strong upward trend with no seasonality. Hotel bookings were trickier because of the seasonal component. SARIMA handled it well, but I had to experiment with the seasonal period to get clean residuals.

I ran Ljung\u2013Box tests on all residuals to confirm they looked like white noise. The Netflix projections captured the long-term trend, and the hotel forecasts preserved the monthly seasonality pattern over a twelve-month horizon.

Honest take: ARIMA models are limited for stock forecasting. They capture trend but miss regime changes completely. I would pair this with something like GARCH for volatility if I did it again.`,
  },

  {
  id: "movie-recommendation-matrix-factorization",
  category: "rs",
  tag: "Recommendation System",
  title: "Movie Recommendation System using Matrix Factorization",
  image: movieRecommendationImg,
  short: "Built a movie recommendation system on the MovieLens dataset using sparse user-item matrices, SVD-based matrix factorization, cosine similarity, and nearest-neighbor retrieval.",
  tech: "Python · Pandas · NumPy · SciPy · SVD · Sparse Matrices · Cosine Similarity · KNN · Recommendation Systems",
  github: "",
  live: "",
  impact: "Generated top-10 personalized movie recommendations from a 330K-user, 83K-movie sparse rating matrix with 33.8M ratings",
  long: `I built this to understand how recommendation systems actually work under the hood, not just calling a library function, but seeing how a sparse rating matrix turns into useful suggestions.
 
The dataset was MovieLens with 330,975 users, 83,239 movies, and 33.8 million ratings. Most user-movie pairs are missing because people only rate a tiny fraction of what is available. That sparsity is the core challenge.
 
After building the sparse user-item matrix, I normalized ratings by subtracting each user's mean. This removes the bias where some people rate everything high and others rate everything low. Then I applied SVD to decompose the matrix into lower-dimensional user and movie embeddings. A scree plot showed the elbow around 9 components, which I used as the latent dimension count.
 
For recommendations, I used cosine similarity on the user embeddings to find similar users, then surfaced movies those users liked that the target user had not seen yet. Evaluation on a holdout set gave 0.31 recall and 0.14 precision. Recall being higher makes sense because the system recovers a decent chunk of relevant movies, but the top 10 list also includes some exploratory picks.
 
I also built a movie-to-movie similarity layer using the learned embeddings. Fantasy films clustered near other fantasy titles, action movies near action, and so on. This made it possible to show "similar movies" alongside each recommendation.
 
The interesting part was seeing how factorization compresses a huge sparse table into a small shared space where similarity search actually works. No deep learning needed.`
},

  {
  id: "large-scale-pagerank",
  category: "de",
  tag: "Data Engineering",
  title: "Large-Scale PageRank on Web Graph using Sparse Matrices",
  image: pageRankImg,
  short: "Implemented PageRank on the Berkeley-Stanford web graph with 685K pages and 7.6M hyperlinks using sparse matrix formats and optimized iterative computation.",
  tech: "Python · NumPy · SciPy · Sparse Matrices · PageRank · Graph Analytics · Numerical Linear Algebra",
  github: "",
  live: "",
  impact: "Computed PageRank on a 685K-node web graph in under 1.32 seconds and compared standard and personalized ranking behavior",
  long: `I wanted to implement PageRank on something large enough that a naive approach would fail. The Berkeley-Stanford web graph has 685,230 pages and 7.6 million hyperlinks. A dense matrix for that would need hundreds of billions of entries, so sparse matrices were the only option.
 
I converted the raw edge list into a link matrix using DoK format (good for incremental construction), normalized each row so outgoing probabilities summed to one, then converted to CSR format for the iterative computation. CSR is much faster for repeated matrix-vector multiplication, which is all PageRank really does.
 
I tested two damping factors. With alpha = 0.85, it converged in about 0.85 seconds. With alpha = 0.95, it took about 1.31 seconds because the random walk depends more heavily on the link structure and takes longer to stabilize. Both produced the same top 10 pages.
 
I also built a personalized version where the teleportation vector only assigned probability to pages with prime-numbered indices. This changed the ranking slightly, biasing toward a specific subset of the graph. It is the same math, but the results behave differently because the random walk has a different "home base."
 
The main lesson was that the PageRank formula is simple, but making it run on hundreds of thousands of nodes requires the right sparse format, careful normalization, and efficient iteration. Representation matters more than the algorithm itself at this scale.`
},

{
  id: "face-recognition-eigenfaces",
  category: "cv",
  tag: "Computer Vision",
  title: "Face Recognition using Eigenfaces",
  image: eigenfacesImg,
  short: "Built a PCA-based face recognition system using 10K+ images, Eigenfaces, reconstruction, cosine similarity, and nearest-neighbor search.",
  tech: "Python · OpenCV · NumPy · Scikit-learn · PCA · Eigenfaces · Cosine Similarity · KNN · Computer Vision",
  github: "",
  live: "",
  impact: "Processed 10,181 face images and retained 95.54% variance using 450 principal components for reconstruction and recognition",
  long: `I built a face recognition system using PCA and Eigenfaces to understand how dimensionality reduction works on visual data, before reaching for a CNN.
 
The dataset combined three sources: AT&T/ORL face database, a face recognition dataset, and a larger human faces dataset. In total, 10,181 images standardized to 112 by 92 grayscale pixels, flattened into 10,304-dimensional vectors, and stacked into a single matrix.
 
The idea behind Eigenfaces is that faces are structured enough that most of the variation can be captured by a small number of directions. After subtracting the mean face, I fitted PCA with 450 components, retaining 95.54% of the total variance. That means each face compressed from 10,304 pixel values to 450 meaningful features.
 
Reconstruction showed the tradeoff clearly. The reconstructed faces were blurrier, but the core structure (pose, contrast, facial shape) survived. PCA was keeping the signal and dropping the noise.
 
For recognition, every image was projected into the Eigenface space, normalized, and indexed with cosine distance. A query face was projected into the same space and matched against the nearest neighbors. The results were solid: the top matches were visually similar even across mixed datasets with different image quality and formats.
 
Eigenfaces are sensitive to lighting, pose, and alignment since PCA is linear. A CNN would handle that better. But the point was to see how far you can get with just linear algebra, and the answer is surprisingly far for a method from 1991.`
},

  {
    id: "usd-inr",
    category: "analytics",
    tag: "Analytics",
    title: "Effects of Factors Affecting USD\u2013INR Exchange Rates",
    image: usdInrImg,
    short: "What actually moves the rupee against the dollar? I tested twenty years of macro data to find out.",
    tech: "Python \u00B7 Statsmodels \u00B7 Econometrics \u00B7 Regression",
    github: "https://github.com/aekankpatel/USD_INR",
    live: "",
    impact: "Twenty-year regression identifying key macro drivers of INR volatility",
    long: `I grew up in India and always heard people blame different things for the rupee falling: inflation, the trade deficit, oil prices. I wanted to check which ones actually matter statistically.

I collected twenty years (2002\u20132022) of macroeconomic data: inflation, interest rates, trade balance, foreign reserves, and a few others. I aligned everything by time period and ran correlation analysis first to see what stood out.

Then I built multivariate regression models in Statsmodels. I checked coefficient stability, ran significance tests, and validated assumptions (normality, homoscedasticity, multicollinearity).

Some of the "obvious" drivers turned out to be weaker than expected once you control for other variables. Trade balance and foreign reserves had the most consistent explanatory power across different model specifications.

It is a straightforward econometrics project, but I liked it because the question was personal and the answer was less obvious than I assumed going in.`,
  },

  {
    id: "life-expectancy",
    category: "analytics",
    tag: "Analytics",
    title: "Life Expectancy Data Analysis",
    image: lifeExpectancyImg,
    short: "What predicts how long people live in different countries? I ran statistics and ML on WHO data from 193 countries. Random Forest got an R-squared of 0.97.",
    tech: "Python \u00B7 EDA \u00B7 Statistics \u00B7 Random Forest \u00B7 Regression",
    github: "",
    live: "",
    impact: "Random Forest R-squared of 0.97 on WHO data across 193 countries",
    long: `I started with a simple question: across 193 countries and fifteen years of WHO data (2000 to 2015), what actually predicts life expectancy?

The data needed a lot of work before I could do anything useful with it. Missing values across countries, outliers in health spending figures, inconsistent encoding. I cleaned and standardized everything using median imputation, z-score outlier filtering, encoding, and normalization. The goal was to get a consistent longitudinal panel that allowed fair cross-country comparisons.

For the exploratory analysis, I used boxplots, heatmaps, distribution plots, and temporal trend visualizations to get a feel for the data. Then I ran formal hypothesis tests: Z-tests, Chi-Square tests, one-way ANOVA, and Tukey HSD for post-hoc comparisons.

I built a Multiple Linear Regression first and got an R-squared of about 0.82. Then I trained a Random Forest and it jumped to 0.97 with an RMSE of about 1.67. That gap surprised me. The nonlinear relationships between variables like HIV/AIDS prevalence and income composition clearly benefit from tree-based models.

The strongest predictors turned out to be HIV/AIDS prevalence, income composition index, and adult mortality. Some variables I expected to matter a lot, like healthcare spending, were weaker than I thought once you controlled for income. That was probably the most interesting finding.`,
  },

{
  id: "insurance-claim-prediction",
  category: "ml",
  tag: "Machine Learning",
  title: "Insurance Claim Prediction using Deep Learning",
  image: insuranceClaimImg,
  short: "Built a claim-risk prediction system on 10K+ policyholder records using Logistic Regression, MLP, TabNet, and an MLP–TabNet ensemble.",
  tech: "Python · Scikit-learn · PyTorch · TabNet · MLP · Logistic Regression · ROC-AUC · PR-AUC · Calibration",
  github: "",
  live: "",
  impact: "MLP–TabNet ensemble achieved 0.9457 accuracy, 0.9696 ROC-AUC, 0.9516 PR-AUC, and 0.8477 KS statistic",
  long: `The goal was to predict whether a policyholder would file an insurance claim, not just as a classification problem, but as a calibrated probability estimate. In insurance, downstream decisions depend on risk scores, not just labels.
 
The dataset had 10,302 policyholders with 27 variables: demographics, vehicle info, driving behavior, claim history, and regional data. The data needed cleanup: dollar signs in monetary fields, missing values, a few entries with negative car age. Class imbalance was moderate at about 26.7% claim rate.
 
I tried tree-based models first (Random Forest, XGBoost, LightGBM) and they produced near-perfect scores. That looked too good, so I moved to deep learning models that gave strong but more believable numbers.
 
The final system was a soft-voting ensemble averaging predictions from an MLP (dense layers, ReLU, dropout, L2 regularization, early stopping) and TabNet (attention-based feature selection for tabular data). The MLP carried most of the weight since TabNet underperformed on this dataset.
 
Results: 0.9457 accuracy, 0.9696 ROC-AUC, 0.9516 PR-AUC, 0.8477 KS statistic. The confusion matrix showed 1,481 true negatives, 468 true positives, 31 false positives, and 81 false negatives. That is a strong tradeoff: the model catches most claim-risk customers while keeping false alarms low.
 
I also checked calibration because insurance predictions need to behave like actual probabilities. The Brier score was 0.076, confirming the model was well-calibrated for ranking policyholders by risk.
 
The main takeaway: high accuracy is not the same as a trustworthy model. Some models hit near-perfect scores but were clearly overfitting. The ensemble gave more realistic, stable, and useful results.`
},

];


export const SKILLS = [
  {
    title: "Programming",
    items: [
      "Python",
      "R",
      "SQL",
      "C",
      "MATLAB",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Scripting & Automation",
      "Git & Version Control"
    ]
  },
  {
    title: "Machine Learning",
    items: [
      "Supervised Learning", 
      "Classification",
      "Regression",
      "Unsupervised Learning",
      "Cross Validation",
      "Model Selection",
      "Feature Engineering", "Risk Scoring",
      "Hyperparameter Tuning",
      "Ensemble Learning",
      "Model Evaluation",
      "Recommendation Systems",
      "Matrix Factorization",
      "Model Calibration"
    ]
  },
  {
    title: "Deep Learning & AI",
    items: [
      "Neural Networks",
      "CNN",
      "RNN",
      "LSTM",
      "Transfer Learning",
      "Computer Vision",
      "Tabular Deep Learning",
      "Model Optimization",
      "Explainable AI",
      "Reinforcement Learning",
      "Human-in-the-Loop Systems"
    ]
  },
  {
    title: "NLP & LLMs",
    items: [
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Search",
      "Prompt Engineering",
      "Embeddings",
      "Vector Search",
      "Document Intelligence",
      "LLM Evaluation",
      "Multi-Agent AI Systems",
      "Agentic AI Workflows"
    ]
  },
  {
    title: "Data Science & Analytics",
    items: [
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Time Series Analysis",
      "Econometrics",
      "A/B Testing",
      "Graph Analytics",
      "Backtesting",
      "Data Visualization",
      "Business Analytics"
    ]
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "NumPy",
      "Pandas",
      "SciPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "XGBoost",
      "OpenCV",
      "Statsmodels",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "HuggingFace",
      "LangChain",
      "LlamaIndex",
      "Streamlit",
      "Stable-Baselines3",
      "Gymnasium",
      "MoviePy",
      "ReportLab"
    ]
  },
  {
    title: "Data Engineering, Backend & Deployment",
    items: [
      "Flask",
      "FastAPI",
      "REST APIs",
      "API Design",
      "SQLite",
      "PostgreSQL",
      "MongoDB",
      "Apache Spark",
      "PySpark",
      "Hadoop",
      "YARN",
      "Dataproc",
      "MapReduce",
      "Vercel",
      "Docker (Basic)",
      "Model Deployment",
      "ETL Pipelines",
      "Google Cloud Storage",
      "Medallion Architecture",
      "Cloud ETL"
    ]
  },
  {
    title: "Mathematics",
    items: [
      "Probability",
      "Statistics",
      "Linear Algebra",
      "Calculus",
      "Multivariable Calculus",
      "Differential Equations",
      "Optimization",
      "Numerical Methods",
      "Discrete Mathematics",
      "Bayesian Methods",
      "Stochastic Processes",
      "Time Series",
      "Graph Theory"
    ]
  },
  {
    title: "Interpersonal Skills",
    items: [
      "Technical Communication",
      "Teaching & Mentoring",
      "Leadership",
      "Analytical Thinking",
      "Problem Solving",
      "Team Collaboration",
      "Adaptability",
      "Continuous Learning"
    ]
  },
];

export const CERTIFICATIONS = [
  {
    id: "google-data-analytics",
    title: "Google Data Analytics",
    issuer: "Google \u00B7 Coursera",
    desc: "Where I first learned the full analytics workflow: spreadsheets, SQL, R, and thinking about data cleaning properly.",
    badge: "/logos/google.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3JLUGFNQVEEE",
  },
  {
    id: "ibm-ai-engineering",
    title: "IBM AI Engineering",
    issuer: "IBM \u00B7 Coursera",
    desc: "Deep learning with TensorFlow and Keras. My first serious exposure to neural networks.",
    badge: "/logos/ibm.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/4GP8HGGM8HBU",
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    desc: "The basics of cloud infrastructure: EC2, S3, and IAM. Helped me understand how deployed apps actually run.",
    badge: "/logos/awscf.png",
    link: "https://www.credly.com/badges/463d6e11-fa00-4c7f-806f-732a82aafbd3",
  },
  {
    id: "aws-data-engineering",
    title: "AWS Data Engineering",
    issuer: "AWS",
    desc: "Data pipelines on AWS using Glue, Redshift, and S3. Useful for thinking about scale.",
    badge: "/logos/awsde.png",
    link: "https://www.credly.com/badges/5eb28d13-eab2-4769-b437-550e83b2bc1e/public_url",
  },
  {
    id: "bloomberg-market-concepts",
    title: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg for Education",
    desc: "Covered fixed income, equities, currencies, and commodities. Gave me the finance vocabulary I needed.",
    badge: "/logos/bloomberg.png",
    link: "https://portal.bloombergforeducation.com/certificates/K9TARksDTbVAsVMjzUceWYMT",
  },
  {
    id: "python-for-everybody",
    title: "Python for Everybody",
    issuer: "University of Michigan \u00B7 Coursera",
    desc: "The course that got me started with Python back in college. I still recommend it.",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/LBSKYLVNXD8H",
    badge: "/logos/um.png",
  },
  {
    id: "matlab-onramp",
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    desc: "Used MATLAB for two of my coursework. Not my daily driver, but good to know.",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a4b379b7-6ea3-4f08-98b1-7f5746741ff5&",
    badge: "/logos/matlab.png",
  },
  {
    id: "sql-essential-training",
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    desc: "Filled in the gaps in my SQL knowledge: joins, subqueries, and window functions.",
    link: "https://www.linkedin.com/learning/certificates/b1a021f81e9166c07ada8a6a2f0ba7fcc6109a9832fbfee70c31168a36b4c5e8?trk=share_certificate",
    badge: "/logos/ll.png",
  }
];