// src/data/portfolio.js

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
    "I started in mechatronics, building robots and working with sensors. But I kept getting more interested in the data coming off those systems than the systems themselves. The math behind it clicked for me in a way nothing else had. So I switched tracks. Now I spend my time building ML models, writing Python, and figuring out what messy datasets are actually trying to say.",
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
    "Most of my time goes into figuring out why something happened in a dataset and whether we can predict it next time. I like the full loop \u2014 from messy CSVs to a working model.",
  bullets: [
    "\u26A1 Build ML systems from scratch. Data cleaning, feature work, model training, evaluation, and sometimes a Flask API or Streamlit dashboard on top.",
    "\u26A1 Comfortable with messy, real world data. Missing values, weird distributions, inconsistent labels. That's most datasets.",
    "\u26A1 Big on explainability. If a model can't tell you why it made a prediction, I don't trust it much.",
    "\u26A1 I break things a lot while building. That's usually where I learn the most.",
  ],
};

export const NOW = {
  kicker: "CURRENT FOCUS",
  title: "Now",
  subtitle: "What I'm up to right now. I try to update this regularly.",
  cards: [
    {
      title: "Finishing my Master\u2019s \uD83C\uDF93",
      body:
        "MS in Data Science at Stevens, graduating May 2026. Coursework in ML, linear algebra, time series, deep learning. Lots of math, lots of Python.",
      tag: "MS Data Science \u00B7 May 2026",
    },
    {
      title: "Looking for work \uD83D\uDD0D",
      body:
        "Applying to Data Science and ML roles, both internships and full time. I want to be on a team that actually ships models, not just builds slide decks about them.",
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
    gpa: "GPA: 3.966 / 4.0",
    logo: stevensLogo,
    details: [
      "Also doing a Graduate Certificate in Applied Statistics (3.918 GPA) on top of the MS DS. Focused on applied ML, stats, finance, and working with large datasets.",
      "TA for 3 graduate math courses: Foundational Math for Data Science (MA 574), Numerical Linear Algebra for Big Data (MA 544), and Introduction to Probability Theory (MA 540). Grading and feedback for 89 students.",
      "Most of my learning happens through projects. I've built things across ML, deep learning, time series, and financial analytics."
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
      "Was Class Representative for my batch. Mostly meant answering a lot of questions and being the go-between for students and faculty.",
      "Ran the Mechatronics Peer Programme, which was basically tutoring juniors and organizing events.",
      "Got a solid foundation in robotics, embedded systems, and sensors. Also took electives in financial technology, which is where data science started making sense to me."
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
      "TA for 3 graduate math courses under Dr. Upendra Prasad: Foundational Math for Data Science (MA 574), Numerical Linear Algebra for Big Data (MA 544), and Introduction to Probability Theory (MA 540).",
      "Graded assignments, quizzes, and exams across multiple sections. Tried to keep grading consistent and fair, which is harder than it sounds with 89 students.",
      "Gave written feedback on math and coding work. The goal was always to be specific enough that students could actually fix what went wrong.",
      "Kept grade records up to date, tracked submission patterns, and flagged issues to the professor when something seemed off.",
      "Used Canvas for grading and feedback.",
      "Noticed the same mistakes coming up repeatedly in linear algebra and numerical methods, so I started pointing those out proactively in feedback.",
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
      "Built a fall detection system using deep learning and computer vision. The idea was to detect when someone falls in a live video feed and flag it for safety monitoring.",
      "Tried a bunch of approaches (CNN, RNN, BodyPix, R-CNN) before landing on a hybrid CNN + MediaPipe pipeline for pose estimation. It handled different body orientations better than the alternatives.",
      "Added YOLOv5 for multi person detection so the system could track several people at once in the same frame.",
      "Annotated over 100,000 images myself. It was tedious but it made a real difference in how well the model generalized.",
      "Got to 91.39% test accuracy and tested it on actual video feeds, not just test sets.",
      "Used TensorFlow, PyTorch, OpenCV, NumPy, and Matplotlib. Spent a lot of time optimizing inference speed to keep things real time.",
    ],
  },
];

export const PROJECTS = [
  // \u2500\u2500 Machine Learning & AI \uD83E\uDD16\u2500\u2500
  {
    id: "insightforgeai",
    category: "ml",
    title: "Insight Forge AI: LLM-Powered Data Profiling System",
    short: "Upload any dataset and get a full EDA report with anomaly detection, health scores, and LLM-generated insights. Deployed on Streamlit Cloud.",
    tech: "Python \u00B7 Scikit-learn \u00B7 Pandas \u00B7 Plotly \u00B7 Streamlit \u00B7 Groq \u00B7 ReportLab \u00B7 NumPy",
    github: "https://github.com/aekankpatel/insightforgeai/",
    live: "https://insightforgeai.streamlit.app",
    impact: "8 module Auto-EDA pipeline deployed on Streamlit Cloud with LLM insights",
    long: `I wanted a tool where you could drop in any CSV and get a useful EDA report without writing code. So I built one.

It has 8 Python modules that run in sequence: profiling, anomaly detection, correlation analysis, feature summaries, a health scorecard, data cleaning, ML readiness scoring, and LLM insight generation via Groq-hosted LLaMA 3.1.

The tricky part was staying within Groq's free tier rate limits. I ended up designing a single API call that generates all three insight sections (overview, anomalies, correlations) in one request instead of three separate ones. That solved it.

I also built 10 synthetic sample datasets with realistic class imbalance and missing values so people could try it without uploading anything.

The frontend is a 12-tab Streamlit dashboard with Plotly charts \u2014 heatmaps, network graphs, outlier grids, before/after cleaning comparisons. There's also a chat interface where you can ask questions about your dataset in plain English, and a one-click PDF report export.

One thing I'd do differently: the session state management got messy. I'm persisting everything (analysis results, chat history, cleaning state) in Streamlit session state because there's no database. It works, but it's fragile across reruns.`,
  },

  {
    id: "fraudgen",
    category: "ml",
    title: "FRAUDGEN: Unmasking Fraud with Real-Time Explanations",
    short: "Classifies transactions into four risk tiers using XGBoost, then explains why using LLaMA. Full stack with Flask backend and React dashboard.",
    tech: "Python \u00B7 XGBoost \u00B7 Flask \u00B7 React \u00B7 SQLite \u00B7 Recharts \u00B7 LLaMA",
    github: "https://github.com/aekankpatel/FraudGen",
    live: "https://fraud-gen.vercel.app",
    impact: "Multi-tier fraud classifier on 6.36M transactions with LLaMA explanations",
    long: `The idea was simple: don't just flag fraud, explain why it's suspicious. Most fraud systems give you a score. I wanted mine to say "this transaction is flagged because the amount is 4x the user's average and it came from a new IP in a different country."

Trained an XGBoost model on the PaySim dataset (6.36M transactions, only 0.129% fraud). The class imbalance was brutal \u2014 I used 5-fold stratified temporal validation to deal with it. On top of the model output, I added rule-based refinement to sort transactions into Legitimate, Needs Review, High Risk, and Confirmed Fraud.

For the explanations, I hooked up LLaMA via Groq to generate plain English summaries of why each high-risk transaction got flagged. Also added IPInfo for geolocation and VPN detection.

The frontend is a React + Tailwind dashboard with Recharts showing fraud trends, severity breakdowns, and a map view. Flask handles the API layer, SQLite stores transactions.

What I'd change: the rule layer and ML layer sometimes disagree on edge cases. I'd probably add a conflict resolution mechanism if I rebuilt this.`,
  },

  {
    id: "finrag",
    category: "ml",
    title: "FinRAG: Financial Document Intelligence System",
    short: "Ask questions about SEC filings and earnings calls in plain English. RAG system over 25 financial documents, deployed on Streamlit.",
    tech: "Python \u00B7 LlamaIndex \u00B7 HuggingFace \u00B7 Groq \u00B7 LLaMA \u00B7 Streamlit",
    github: "https://github.com/aekankpatel/finrag",
    live: "https://fin-rag.streamlit.app",
    impact: "RAG over 25 SEC filings, 80% eval pass rate",
    long: `I built this because reading 10-K filings is painful. The idea was: upload a bunch of SEC filings and earnings transcripts, then ask questions in plain English and get answers with source citations.

The pipeline uses LlamaIndex for PDF ingestion and chunking (ended up with 14,055 text nodes), HuggingFace BGE embeddings for vector search, and Groq-hosted LLaMA 3.1 for answer generation.

Getting this deployed was the hardest part. I started with local Ollama for inference, but that doesn't work on Streamlit Cloud. Switched to Groq, but had to bypass LlamaIndex's LLM layer entirely and call the Groq SDK directly. The vector index files were ~150MB, too big for GitHub, so I hosted them on Google Drive and download them at startup.

The app has a compare mode where you can ask the same question to two different companies side by side. Also added confidence scores and source highlighting.

I ran an evaluation on 10 financial queries and got an 80% pass rate with 0.57 average keyword recall. Not amazing, but honest \u2014 retrieval over long financial documents is hard, especially when the answer spans multiple sections.`,
  },

  {
    id: "pneumonia-detection",
    category: "ml",
    title: "Deep Learning for Pneumonia Detection",
    short: "Can a CNN tell if a chest X-ray shows pneumonia? Trained two models and combined them. 97.23% accuracy on the ensemble.",
    tech: "Python \u00B7 TensorFlow \u00B7 CNN \u00B7 MobileNet \u00B7 Medical Imaging",
    github: "https://github.com/aekankpatel/Pneumonia_Detection",
    live: "",
    impact: "97.23% ensemble accuracy on chest X-ray classification",
    long: `This was a straightforward image classification project but I learned a lot about how augmentation affects medical imaging.

Trained a custom CNN from scratch \u2014 got 96.64% accuracy. Then fine-tuned MobileNet and got 95.00%. Neither was bad, but combining them as an ensemble pushed it to 97.23%.

The augmentation mattered more than I expected. Without it, the CNN was overfitting badly on the training set. Random rotations, flips, and zoom brought the gap between train and test accuracy down significantly.

It's a clean project \u2014 not a lot of moving parts \u2014 but it taught me that simpler ensembles often beat trying to build one perfect model.`,
  },

  // \u2500\u2500 Data Analysis \uD83D\uDCCA \u2500\u2500
  {
    id: "oil-airline-bloomberg",
    category: "data",
    title: "Oil and Airline Stocks: An Empirical Study",
    short: "Everyone assumes oil prices drive airline stocks. I used 10 years of Bloomberg data to check. The answer is more nuanced than you'd think.",
    tech: "Bloomberg Terminal \u00B7 Python \u00B7 Econometrics \u00B7 Regression \u00B7 Finance",
    github: "",
    live: "",
    report: oilAirlineReport,
    medium: "https://medium.com/@aekankpatel/oil-prices-vs-airline-stocks-the-relationship-everyone-gets-wrong-c493da0cf700",
    impact: "Market-adjusted models explain 25-33% of airline return variability",
    long: `The common wisdom is: oil goes up, airline stocks go down. I wanted to see if the data actually supports that.

Pulled 10+ years of Bloomberg data (2015-2025): WTI crude, Delta, American Airlines, United, and the S&P 500. Used Bloomberg's analytics functions (CRP, CMT, HRA, GP) for the raw data.

When I ran a simple regression of oil on airline returns, the relationship was weak. Oil alone barely explains anything. But when I controlled for the broader market (S&P 500), something interesting happened \u2014 the oil betas flipped negative and became statistically significant.

So the relationship exists, but only after you strip out the market noise. The adjusted models explain about 25-33% of airline return variability. Not huge, but real.

I wrote a Medium article about this because the "oil kills airlines" narrative is oversimplified and I thought the actual finding was more interesting.`,
  },

  {
    id: "netflix-hotel-ts",
    category: "data",
    title: "Time Series Modeling: Netflix Stock & Hotel Bookings",
    short: "Forecasted Netflix stock prices and hotel booking demand using ARIMA and SARIMA. Full Box-Jenkins workflow in R.",
    tech: "R \u00B7 ARIMA \u00B7 SARIMA \u00B7 ACF/PACF \u00B7 Ljung-Box \u00B7 Forecasting",
    github: "",
    report: timeSeriesReport,
    live: "",
    impact: "ARIMA/SARIMA models with validated white-noise residuals",
    long: `Two datasets, one workflow. Netflix adjusted close prices (2002-2022) for trend forecasting, and monthly hotel bookings for seasonal demand.

I followed the full Box-Jenkins approach: plotted the data, applied log transforms, ran ADF tests for stationarity, differenced where needed, then used ACF/PACF plots to identify the right ARIMA and SARIMA structures. Model selection came down to AIC/BIC scores.

The Netflix data was relatively straightforward \u2014 strong upward trend, no seasonality. Hotel bookings were trickier because of the seasonal component. SARIMA handled it well but I had to experiment with the seasonal period to get clean residuals.

Ran Ljung-Box tests on all residuals to confirm they looked like white noise. The Netflix projections captured the long-term trend, and the hotel forecasts preserved the monthly seasonality pattern over a 12-month horizon.

Honest take: ARIMA models are limited for stock forecasting. They capture trend but miss regime changes completely. I'd pair this with something like GARCH for volatility if I did it again.`,
  },

  {
    id: "usd-inr",
    category: "data",
    title: "Effects of Factors Affecting USD\u2013INR Exchange Rates",
    short: "What actually moves the rupee against the dollar? Tested 20 years of macro data to find out.",
    tech: "Python \u00B7 Statsmodels \u00B7 Econometrics \u00B7 Regression",
    github: "https://github.com/aekankpatel/USD_INR",
    live: "",
    impact: "20-year regression identifying key macro drivers of INR volatility",
    long: `I grew up in India and always heard people blame different things for the rupee falling \u2014 inflation, trade deficit, oil prices. I wanted to check which ones actually matter statistically.

Collected 20 years (2002-2022) of macroeconomic data: inflation, interest rates, trade balance, foreign reserves, and a few others. Aligned everything by time period and ran correlation analysis first to see what stood out.

Then built multivariate regression models in Statsmodels. Checked coefficient stability, ran significance tests, and validated assumptions (normality, homoscedasticity, multicollinearity).

Some of the "obvious" drivers turned out to be weaker than expected once you control for other variables. Trade balance and foreign reserves had the most consistent explanatory power across different model specifications.

It's a straightforward econometrics project, but I liked it because the question was personal and the answer was less obvious than I assumed going in.`,
  },

  {
    id: "life-expectancy",
    category: "data",
    title: "Life Expectancy Data Analysis",
    short: "What predicts how long people live in different countries? Ran stats and ML on WHO data from 193 countries. Random Forest got R-squared of 0.97.",
    tech: "Python \u00B7 EDA \u00B7 Statistics \u00B7 Random Forest \u00B7 Regression",
    github: "",
    live: "",
    impact: "Random Forest R-squared 0.97 on WHO data across 193 countries",
    long: `Started with a simple question: across 193 countries and 15 years of WHO data, what actually predicts life expectancy?

The data needed a lot of cleaning. Missing values across countries, outliers in health spending data, inconsistent encoding. Used median imputation, z-score filtering, and normalization to get it into shape.

For the exploratory analysis I used boxplots, heatmaps, and distribution plots. Then ran formal hypothesis tests \u2014 Z-tests, Chi-Square, one-way ANOVA with Tukey HSD for post-hoc comparisons.

Built a linear regression first (R-squared around 0.82), then a Random Forest that jumped to 0.97 with RMSE of 1.67. The gap was surprising \u2014 the nonlinear relationships between variables like HIV/AIDS prevalence and income composition really benefit from tree-based models.

The strongest predictors were HIV/AIDS prevalence, income composition, and adult mortality. Some variables I expected to matter (like healthcare spending) were weaker than I thought once you controlled for income.`,
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
    issuer: "Google \u00B7 Coursera",
    desc: "Where I first learned the full analytics workflow \u2014 spreadsheets, SQL, Tableau, and thinking about data cleaning properly.",
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
    desc: "Basics of cloud infra \u2014 EC2, S3, IAM. Helped me understand how deployed apps actually run.",
    badge: "/logos/awscf.png",
    link: "https://www.credly.com/badges/463d6e11-fa00-4c7f-806f-732a82aafbd3",
  },
  {
    id: "aws-data-engineering",
    title: "AWS Data Engineering",
    issuer: "AWS",
    desc: "Data pipelines on AWS \u2014 Glue, Redshift, S3. Useful for thinking about scale.",
    badge: "/logos/awsde.png",
    link: "https://www.credly.com/badges/5eb28d13-eab2-4769-b437-550e83b2bc1e/public_url",
  },
  {
    id: "bloomberg-market-concepts",
    title: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg for Education",
    desc: "Fixed income, equities, currencies, commodities. Gave me the finance vocabulary I needed.",
    badge: "/logos/bloomberg.png",
    link: "https://portal.bloombergforeducation.com/certificates/K9TARksDTbVAsVMjzUceWYMT",
  },
  {
    id: "python-for-everybody",
    title: "Python for Everybody",
    issuer: "University of Michigan \u00B7 Coursera",
    desc: "The course that got me started with Python back in college. Still recommend it.",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/LBSKYLVNXD8H",
    badge: "/logos/um.png",
  },
  {
    id: "matlab-onramp",
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    desc: "Used MATLAB for signal processing coursework. Not my daily driver, but good to know.",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a4b379b7-6ea3-4f08-98b1-7f5746741ff5&",
    badge: "/logos/matlab.png",
  },
  {
    id: "sql-essential-training",
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    desc: "Filled in the gaps in my SQL knowledge. Joins, subqueries, window functions.",
    link: "https://www.linkedin.com/learning/certificates/b1a021f81e9166c07ada8a6a2f0ba7fcc6109a9832fbfee70c31168a36b4c5e8?trk=share_certificate",
    badge: "/logos/ll.png",
  }
];