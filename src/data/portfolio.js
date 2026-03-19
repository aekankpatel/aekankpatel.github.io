// src/data/portfolio.js

// Only these 3 logos
import stevensLogo from "../assets/logos/stevens.png";
import mitLogo from "../assets/logos/mit.png";
import matrixLogo from "../assets/logos/matrixcomsec.png";

import resumePdf from "../assets/Aekank_Patel_Resume.pdf";

import oilAirlineReport from "../assets/reports/oil_airline_report.pdf";
import timeSeriesReport from "../assets/reports/Time_Series.pdf";

export const HERO = {
  headline: "",
  subheadline: "",
  summary:
    "I didn't plan on ending up in data science. But somewhere in my mechatronics degree, between the robots and sensors, I fell in love with the patterns hiding inside the data they generated. Then the math hit me. Every number and equation felt like it was describing something real. I couldn't stop pulling on that thread. The robots became a footnote, the math became everything, and data science stopped being a detour and became an exciting journey.",
  resumePath: resumePdf,
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aekankpatel/" },
    { label: "GitHub", href: "https://github.com/aekankpatel" },
    { label: "Medium", href: "https://medium.com/@aekankpatel" },
    { label: "Email", href: "mailto:aekankpatel@gmail.com" },
  ],
};

export const WHAT_I_DO = {
  title: "What I do",
  intro:
    "I like asking “why did this happen?” and “what can we do about it next?” — then using data to figure out the answer.",
  bullets: [
    "⚡ Build ML systems end-to-end — from raw data and feature ideas to models, APIs, and dashboards.",
    "⚡ Enjoy working with real-world data that’s noisy, imperfect, and full of surprises.",
    "⚡ Care a lot about explainability — models should not just predict, but also explain themselves.",
    "⚡ Love experimenting, breaking things, fixing them, and learning something new each time.",
  ],
};

// ==============================
// NOW / CURRENT FOCUS SECTION
// Add this to src/data/portfolio.js
// ==============================

export const NOW = {
  kicker: "CURRENT FOCUS",
  title: "Now",
  subtitle: "A quick snapshot of what I’m working on these days — updating regularly.",
  cards: [
    {
      title: "Finishing my Master’s 🎓",
      body:
        "MS in Data Science at Stevens Institute of Technology (graduating May 2026). Currently sharpening my foundations in ML, linear algebra, and data analytics through coursework and projects.",
      tag: "MS Data Science · May 2026",
    },
    {
      title: "Applying for roles 🔍",
      body:
        "Actively applying for Data Science / ML internships and early full-time opportunities. Looking for teams where I can build reliable models, ship analytics, and improve decision-making with data.",
      tag: "Open to opportunities",
    },
    {
      title: "Building projects 🛠️",
      body:
        "Building end-to-end projects that go beyond notebooks — clean data pipelines, model training, evaluation, and lightweight deployments with dashboards and APIs.",
      tag: "Shipping real systems",
    },
    {
      title: "Improving skills 📈",
      body:
        "Practicing DSA in Python, strengthening SQL for analytics + ETL, and improving my ability to write larger programs cleanly and confidently.",
      tag: "Leveling up every day",
    },
  ],
};

export const EDUCATION = [
  {
    school: "Stevens Institute of Technology",
    degree: "Master of Science in Data Science",
    time: "Aug 2024 – May 2026",
    gpa: "GPA: 3.966 / 4.0",
    logo: stevensLogo,
    details: [
      "Pursuing Graduate Certificate in Applied Statistics (GPA: 3.918 / 4.0) alongside the MS in Data Science, focused on applied ML, statistics, finance, and scalable data systems.",
      "Graduate Teaching Assistant for MA 574, MA 544, and MA 540, supporting grading, feedback, and course operations across multiple sections.",
      "Hands-on, project-driven learning across machine learning, deep learning, time series, big data, and financial analytics."
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
    time: "Oct 2020 – Jul 2024",
    gpa: "GPA: 7.83 / 10",
    logo: mitLogo,
    details: [
      "Served as Class Representative, acting as a liaison between faculty and students and handling academic and administrative queries.",
      "Mechatronics Peer Programme Coordinator, guiding juniors, supporting coursework and projects, and organizing peer-learning initiatives.",
      "Built a strong applied engineering foundation in robotics, embedded systems, sensors, and machine vision with exposure to fintech and analytics."
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
    time: "Sep 2025 – May 2026",
    location: "Hoboken, NJ",
    logo: stevensLogo,

    // ← NEW: these render as purple pills above the bullets
    stats: [
      "3 Courses Supported",
      "89 Students",
      "MA 574 · MA 544 · MA 540",
    ],

    bullets: [
      "Served as Graduate Teaching Assistant for MA 574: Foundational Mathematics for Data Science, MA 544: Numerical Algebra for Big Data and MA 540: Intro to Probability Theory under Dr. Upendra Prasad.",
      "Evaluated mathematical and programming assignments, quizzes, and exams across multiple course sections, ensuring fair, consistent, and rubric-aligned grading.",
      "Supported 89 students by delivering clear, constructive, and actionable feedback to improve mathematical reasoning and coding accuracy.",
      "Maintained accurate grade records, monitored submission trends, and collaborated closely with the course instructor to ensure transparent and timely assessment.",
      "Utilized Canvas LMS to streamline grading workflows, manage submissions, and provide structured digital feedback at scale.",
      "Contributed to student learning outcomes by identifying common misconceptions and reinforcing best practices in linear algebra, numerical methods, and data science foundations.",
    ],
  },
  {
    company: "Matrix ComSec Pvt. Ltd.",
    role: "Research & Development Intern",
    time: "Jan 2024 – May 2024",
    location: "Vadodara, Gujarat, India",
    logo: matrixLogo,

    // ← NEW: key numbers surface immediately above the bullets
    stats: [
      "91.39% Test Accuracy",
      "100,000+ Images Annotated",
      "YOLOv5 Multi-Person Detection",
    ],

    bullets: [
      "Designed and implemented a real-time human fall detection system using deep learning and computer vision for safety monitoring applications.",
      "Engineered a hybrid CNN–MediaPipe pipeline for pose estimation and fall classification, improving detection robustness across dynamic body orientations.",
      "Evaluated multiple architectures (CNN, RNN, BodyPix, R-CNN) and optimized model selection based on accuracy–latency tradeoffs for deployment readiness.",
      "Integrated YOLOv5 multi-person detection, enabling scalable monitoring across multi-subject live video streams.",
      "Personally annotated 100,000+ images to enhance dataset quality and improve generalization performance.",
      "Achieved 91.39% test accuracy and validated performance on real-world video feeds.",
      "Built and evaluated models using TensorFlow, PyTorch, OpenCV, NumPy, and Matplotlib; optimized inference for real-time deployment.",
    ],
  },
];

// Projects: short = card, long = modal
// ── Drop-in replacement for your PROJECTS export in portfolio.js ──

export const PROJECTS = [

  // ── Machine Learning & AI 🤖──
  {
    id: "insightforgeai",
    category: "ml",
    title: "Insight Forge AI: LLM-Powered Data Profiling System",
    short: "Modular Auto-EDA engine + ML readiness scoring + Groq LLaMA insights + Streamlit dashboard + PDF reporting.",
    tech: "Python · Scikit-learn · Pandas · Plotly · Streamlit · Groq · ReportLab · NumPy",
    github: "https://github.com/aekankpatel/insightforgeai/",
    live: "https://insightforgeai.streamlit.app",
    long: `Built an end-to-end automated exploratory data analysis platform that profiles datasets, detects anomalies, scores ML readiness, and generates LLM-powered insights through a modular agentic pipeline.

What I Built:
• Architected InsightForge AI, a full-stack Auto-EDA system with 8 independent Python modules covering data profiling, anomaly detection, correlation analysis, feature summarization, health scoring, data cleaning, ML readiness evaluation, and LLM insight generation.
• Designed a single-API-call optimization for Groq-hosted LLaMA 3.1 that generates all three insight sections (overview, anomalies, correlations) in one request to stay within free-tier rate limits.
• Built 10 synthetic sample datasets (Titanic, Credit Card Fraud, Diabetes, Stock Market, etc.) with realistic distributions, class imbalance, and missing value patterns for out-of-the-box demos.

System Design:
• Implemented secure server-side API key management with a priority resolution chain: Streamlit Secrets → environment variable → fallback UI input, preventing key exposure in browser DevTools.
• Engineered a session state architecture to persist analysis results, chat history, cleaning state, and dataset history across Streamlit reruns without database dependencies.
• Computed a 5-dimension Dataset Health Scorecard (Completeness, Consistency, Outlier Health, Feature Quality, Correlation Structure) with programmatic scoring and letter grades.

Frontend & Analytics:
• Built 12-tab Streamlit dashboard with Plotly visualizations including correlation heatmaps, network graphs, outlier boxplot grids, sunburst feature breakdowns, and before/after cleaning comparisons.
• Shipped a natural language dataset chat interface using Groq with full conversation history, dataset context injection, and suggested question shortcuts.
• Implemented one-click PDF report export using ReportLab, generating structured reports with summary tables, missing value analysis, correlation findings, and LLM insights.

Impact:
• Demonstrates full-stack ML tooling, LLM integration, agentic pipeline design, and production deployment on Streamlit Cloud with a focus on data quality and ML readiness workflows.`,
  },

  {
    id: "fraudgen",
    category: "ml",
    title: "FRAUDGEN: Unmasking Fraud with Real-Time Explanations",
    short: "XGBoost-based fraud classifier + rules + Flask APIs + LLaMA explanations + React dashboard.",
    tech: "Python · XGBoost · Flask · React · SQLite · Recharts · LLaMA",
    github: "https://github.com/aekankpatel/FraudGen",
    live: "https://fraud-gen.vercel.app",
    long: `Built an end-to-end fraud detection system that classifies transactions into Legitimate, Needs Review, High Risk, and Confirmed Fraud.

What I Built:
• Architected FraudGen, a full-stack system combining an XGBoost model with rule-based refinement to assign multi-tier risk labels (Legitimate, Needs Review, High Risk, Confirmed Fraud).
• Trained on PaySim dataset (6.36M transactions, 0.129% fraud) using 5-fold stratified temporal validation to handle extreme imbalance.
• Engineered behavioral and transactional features including balance shifts, transaction velocity, cross-border mismatches, and IP anomaly signals.

System Design:
• Developed Flask REST APIs for real-time scoring and structured transaction storage in SQLite.
• Integrated LLaMA to generate contextual natural-language explanations for high-risk and cross-border transactions.
• Enriched transactions via IPInfo API for geolocation, VPN/proxy detection, and automated risk escalation logic.

Frontend & Analytics:
• Built a React + Tailwind dashboard with Recharts visualizing fraud trends, severity distributions, and geolocation intelligence.
• Designed modular architecture separating ML pipeline, backend services, and frontend UI for scalability and cloud readiness.

Impact:
• Demonstrates applied ML + explainable AI + product engineering in a production-style fraud monitoring system.`,
  },

  {
    id: "finrag",
    category: "ml",
    title: "FinRAG: Financial Document Intelligence System",
    short: "RAG pipeline over 25 SEC filings & earnings transcripts; HuggingFace embeddings + Groq LLaMA; deployed on Streamlit Cloud.",
    tech: "Python · LlamaIndex · HuggingFace · Groq · LLaMA · Streamlit",
    github: "https://github.com/aekankpatel/finrag",
    live: "https://fin-rag.streamlit.app",
    long: `Built an end-to-end Retrieval-Augmented Generation system for querying 25 financial documents including SEC 10-K/10-Q filings, earnings call transcripts, and macroeconomic reports.

What I Built:
• Architected a full RAG pipeline using LlamaIndex: PDF ingestion, text chunking (14,055 nodes), HuggingFace BGE embeddings, and vector similarity search with metadata filtering.
• Replaced local Ollama inference with Groq-hosted LLaMA 3.1 for cloud deployment, bypassing LlamaIndex's LLM layer entirely to call Groq SDK directly.
• Designed auto-company detection logic that maps query keywords to source documents for targeted retrieval.

System Design:
• Built Google Drive-based index distribution: 4 vector store files (~150MB) auto-downloaded at app startup via gdown, eliminating GitHub file size constraints.
• Implemented source-level metadata filtering to restrict retrieval to specific filings per query.
• Managed full MLOps lifecycle: local Ollama prototyping → HuggingFace embeddings → Groq inference → Streamlit Cloud deployment.

Frontend & UX:
• Shipped production Streamlit app with compare mode (side-by-side document Q&A), retrieval confidence scoring, chat history, and export functionality.
• Designed dark-themed UI with custom CSS, color-coded confidence indicators, and suggested question shortcuts.

Evaluation:
• Ran custom evaluation framework across 10 domain-specific financial queries achieving 80% pass rate and 0.57 average keyword recall score.

Impact:
• Demonstrates end-to-end RAG engineering, cloud deployment, and applied NLP on real-world financial corpora.`,
  },

  {
    id: "pneumonia-detection",
    category: "ml",
    title: "Deep Learning for Pneumonia Detection",
    short: "Chest X-ray classifier with augmentation; CNN 96.64%, MobileNet 95.00%, ensemble 97.23%.",
    tech: "Python · TensorFlow · CNN · MobileNet · Medical Imaging",
    github: "https://github.com/aekankpatel/Pneumonia_Detection",
    live: "",
    long: `Built and fine-tuned deep learning models to detect pneumonia from chest X-rays.

Model Development:
• Applied image augmentation to improve generalization on medical imaging data.
• Trained custom CNN achieving 96.64% test accuracy.
• Fine-tuned MobileNet achieving 95.00% accuracy.

Ensemble Strategy:
• Combined CNN + MobileNet outputs via ensemble learning.
• Achieved 97.23% test accuracy with improved robustness.

Impact:
• Demonstrates applied deep learning for medical image classification with production-level performance metrics.`,
  },

  // ── Data Analysis 📊 ──
  {
    id: "oil-airline-bloomberg",
    category: "data",
    title: "Oil and Airline Stocks: An Empirical Study",
    short: "10+ years Bloomberg data (2015–2025) + multi-factor regressions; market-adjusted returns explain 25–33%.",
    tech: "Bloomberg Terminal · Python · Econometrics · Regression · Finance",
    github: "",
    live: "",
    report: oilAirlineReport,
    medium: "https://medium.com/@aekankpatel/oil-prices-vs-airline-stocks-the-relationship-everyone-gets-wrong-c493da0cf700",
    long: `Collected and analyzed 10+ years of Bloomberg Terminal data (2015–2025) to study how oil cost pressure impacts airline equity returns.

Data Scope:
• Collected 10+ years (2015–2025) of Bloomberg Terminal data: WTI crude (CL1), DAL, AAL, UAL, and SPX.
• Leveraged Bloomberg analytics functions including CRP, CMT, HRA, and GP.

Methodology:
• Computed daily log returns and constructed multi-factor regression models controlling for market exposure.
• Evaluated statistical significance and beta shifts under market-adjusted frameworks.

Key Findings:
• Oil alone explains minimal airline return variation.
• After controlling for SPX, oil betas become negative and statistically significant.
• Market-adjusted models explain ~25–33% of airline return variability.

Impact:
• Delivered data-driven insights challenging simplistic oil–airline correlations and highlighting importance of market controls.`,
  },

  {
    id: "netflix-hotel-ts",
    category: "data",
    title: "Time Series Modeling: Netflix Stock & Hotel Bookings",
    short: "Box–Jenkins workflow; ARIMA/SARIMA selection via AIC/BIC + diagnostics; interpretable forecasts.",
    tech: "R · ARIMA · SARIMA · ACF/PACF · Ljung-Box · Forecasting",
    github: "",
    report: timeSeriesReport,
    live: "",
    long: `Analyzed two real-world datasets: Netflix adjusted close prices (2002–2022) and monthly hotel booking demand.

Workflow:
• Implemented full Box–Jenkins methodology: visualization, log transformation, ADF stationarity testing, differencing.
• Identified ARIMA/SARIMA structures using ACF/PACF diagnostics.
• Selected optimal models via AIC/BIC.

Validation:
• Conducted Ljung–Box residual diagnostics to ensure white-noise residuals.
• Evaluated forecast stability and interpretability.

Output:
• Produced long-term Netflix trend projections and seasonality-preserving 12-month forecasts for hotel bookings.

Impact:
• Demonstrates statistical rigor in financial forecasting and seasonal demand modeling.`,
  },

  {
    id: "usd-inr",
    category: "data",
    title: "Effects of Factors Affecting USD–INR Exchange Rates",
    short: "20-year analysis (2002–2022) using correlation + regression to study macroeconomic drivers.",
    tech: "Python · Statsmodels · Econometrics · Regression",
    github: "https://github.com/aekankpatel/USD_INR",
    live: "",
    long: `Analyzed factors impacting USD–INR exchange rate movements over 20 years (2002–2022).

Data & Framework:
• Aggregated macroeconomic indicators including inflation, interest rates, trade balance, and foreign reserves.
• Structured time-aligned datasets for regression-based inference.

Methodology:
• Performed correlation analysis to identify significant macro relationships.
• Built multivariate regression models using Statsmodels to quantify macro sensitivity.
• Evaluated statistical significance, coefficient stability, and model assumptions.

Findings:
• Identified key macroeconomic variables contributing to exchange-rate volatility.
• Produced interpretable econometric outputs explaining structural currency movement patterns.

Impact:
• Demonstrates applied macroeconometrics and long-horizon financial modeling.`,
  },

  {
    id: "life-expectancy",
    category: "data",
    title: "Life Expectancy Data Analysis",
    short: "WHO dataset (193 countries); EDA + hypothesis tests + models (RF R²≈0.97, RMSE≈1.67).",
    tech: "Python · EDA · Statistics · Random Forest · Regression",
    github: "",
    live: "",
    long: `Performed a comprehensive statistical analysis on WHO life expectancy data (193 countries, 2000–2015).

Data Preparation:
• Cleaned and standardized multi-country health indicators using median imputation, z-score outlier filtering, encoding, and normalization.
• Structured longitudinal panel data for consistent cross-country comparison.

Exploratory & Statistical Analysis:
• Conducted EDA using boxplots, heatmaps, distribution analysis, and temporal trend visualization.
• Performed hypothesis testing including Z-tests, Chi-Square tests, one-way ANOVA, and Tukey HSD for post-hoc comparisons.

Modeling:
• Built Multiple Linear Regression model achieving R² ≈ 0.82.
• Developed Random Forest Regression achieving R² ≈ 0.97 and RMSE ≈ 1.67.

Insights:
• Identified HIV/AIDS prevalence, income composition index, and adult mortality as dominant life-expectancy predictors.

Impact:
• Demonstrates end-to-end statistical reasoning, hypothesis validation, and high-performance predictive modeling on global health data.`,
  },

  // ── Commented out ──
  // {
  //   id: "vehicle-speed",
  //   category: "ml",
  //   title: "Speed Measurement of Vehicles (Computer Vision)",
  //   short: "CV-based vehicle speed estimation using detection + tracking and pixel-motion across frames.",
  //   tech: "Python · OpenCV · Computer Vision · Tracking",
  //   github: "https://github.com/aekankpatel/Speed_Measurements_of_Vehicles",
  //   live: "",
  //   long: `...`,
  // },

  // {
  //   id: "insurance-claim",
  //   category: "ml",
  //   title: "Insurance Claim Prediction using Deep Learning",
  //   short: "Binary classification pipeline (10,302 rows) with MLP + TabNet ensemble; strong ROC/PR and calibration.",
  //   tech: "Python · TabNet · MLP · XGBoost · Random Forest · LightGBM · Model Evaluation",
  //   github: "",
  //   live: "",
  //   long: `...`,
  // },
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
      "Unsupervised Learning",
      "Cross Validation",
      "Model Selection",
      "Pipeline Design",
      "Ensemble Learning",
      "Performance Metrics & Evaluation",
      "Feature Engineering & Selection",
      "Hyperparameter Tuning"
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
      "Training & Regularization",
      "Model Optimization",
      "Computer Vision",
      "Explainable AI"
    ]
  },
  {
    title: "NLP & LLMs",
    items: [
      "NLP",
      "Word Embeddings",
      "Transformer Models",
      "Prompt Engineering",
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Search",
      "Text Classification"
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
      "A/B Testing",
      "Feature Importance",
      "Data Visualization",
      "Tableau",
      "Power BI"
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
      "HuggingFace Transformers",
      "LangChain",
      "LlamaIndex",
      "Streamlit"
    ]
  },
  {
    title: "Data Engineering, Backend & Deployment",
    items: [
      "Flask",
      "REST APIs",
      "API Design",
      "SQLite",
      "PostgreSQL",
      "MongoDB",
      "Apache Spark",
      "Hadoop",
      "YARN",
      "Docker (Basic)",
      "Cloud Deployment",
      "Model Serialization",
      "Monitoring & Logging (Basic)",
      "ETL Pipelines"
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
  }
];

export const CERTIFICATIONS = [
  {
    id: "google-data-analytics",
    title: "Google Data Analytics",
    issuer: "Google · Coursera",
    badge: "/logos/google.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3JLUGFNQVEEE",
  },
  {
    id: "ibm-ai-engineering",
    title: "IBM AI Engineering",
    issuer: "IBM · Coursera",
    badge: "/logos/ibm.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/4GP8HGGM8HBU",
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    badge: "/logos/awscf.png",
    link: "https://www.credly.com/badges/463d6e11-fa00-4c7f-806f-732a82aafbd3",
  },
  {
    id: "aws-data-engineering",
    title: "AWS Data Engineering",
    issuer: "AWS",
    badge: "/logos/awsde.png",
    link: "https://www.credly.com/badges/5eb28d13-eab2-4769-b437-550e83b2bc1e/public_url",
  },
  {
    id: "bloomberg-market-concepts",
    title: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg for Education",
    badge: "/logos/bloomberg.png",
    link: "https://portal.bloombergforeducation.com/certificates/K9TARksDTbVAsVMjzUceWYMT",
  },
  {
    id: "python-for-everybody",
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan · Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/LBSKYLVNXD8H",
    badge: "/logos/um.png",
  },
  {
    id: "matlab-onramp",
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a4b379b7-6ea3-4f08-98b1-7f5746741ff5&",
    badge: "/logos/matlab.png",
  },
  {
    id: "sql-essential-training",
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/b1a021f81e9166c07ada8a6a2f0ba7fcc6109a9832fbfee70c31168a36b4c5e8?trk=share_certificate",
    badge: "/logos/ll.png",
  }
];