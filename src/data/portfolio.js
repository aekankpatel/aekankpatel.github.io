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
    "Hi, I’m Aekank 👋 I like building things where math, code, and curiosity come together, from predicting risk and finding patterns to making complex models easier to understand. Right now, I am learning, building, and improving every day.",
  resumePath: resumePdf,
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aekankpatel/" },
    { label: "GitHub", href: "https://github.com/aekankpatel" },
    { label: "Medium", href: "https://medium.com/@aekankpatel" },
    { label: "Email", href: "mailto:apatel33@stevens.edu" },
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
      title: "Finishing my Master’s",
      body:
        "MS in Data Science at Stevens Institute of Technology (graduating May 2026). Currently sharpening my foundations in ML, linear algebra, and data analytics through coursework and projects.",
      tag: "MS Data Science · May 2026",
    },
    {
      title: "Applying for roles",
      body:
        "Actively applying for Data Science / ML internships and early full-time opportunities. Looking for teams where I can build reliable models, ship analytics, and improve decision-making with data.",
      tag: "Open to opportunities",
    },
    {
      title: "Building projects",
      body:
        "Building end-to-end projects that go beyond notebooks — clean data pipelines, model training, evaluation, and lightweight deployments with dashboards and APIs.",
      tag: "Shipping real systems",
    },
    {
      title: "Improving skills",
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
    bullets: [
      "Graduate Teaching Assistant (Grader) for MA 574: Foundational Mathematics for Data Science under Dr. Upendra Prasad.",
      "Graded mathematical/programming assignments, quizzes, and exams across two sections (13 and 22 students) with fairness and consistency.",
      "Provided constructive feedback to help students understand mistakes and improve.",
      "Maintained accurate grading records and coordinated with the instructor when needed.",
      "Used Canvas LMS to manage submissions, record grades, and deliver feedback effectively.",
    ],
  },
  {
    company: "Matrix ComSec Pvt. Ltd.",
    role: "Research & Development Intern",
    time: "Jan 2024 – May 2024",
    location: "Vadodara, Gujarat, India",
    logo: matrixLogo,
    bullets: [
      "Developed a human fall detection system using deep learning and computer vision.",
      "Integrated CNNs and MediaPipe for accurate human pose estimation and fall classification.",
      "Tested multiple approaches (CNN, RNN, BodyPix, R-CNN) and built a CNN–MediaPipe hybrid model to improve accuracy and real-time efficiency.",
      "Worked with TensorFlow, PyTorch, NumPy, Matplotlib, and OpenCV for model development and evaluation.",
      "Achieved 91.39% test accuracy and validated performance on image datasets.",
      "Deployed on live video feeds; used YOLOv5 for multi-person detection to improve real-time fall detection robustness.",
    ],
  },
];
// Projects: short = card, long = modal
export const PROJECTS = [
  {
    id: "fraudgen",
    title: "FRAUDGEN: Unmasking Fraud with Real-Time Explanations",
    short:
      "XGBoost-based fraud classifier + rules + Flask APIs + LLaMA explanations + React dashboard.",
    tech: "Python · XGBoost · Flask · React · SQLite · Recharts · LLaMA",
    github: "https://github.com/aekankpatel/FraudGen",
    live: "https://fraud-gen.vercel.app",
    long: `Built an end-to-end fraud detection system that classifies transactions into Legitimate, Needs Review, High Risk, and Confirmed Fraud.

What I built:
• Built FraudGen, a full-stack fraud analytics platform combining an XGBoost-based fraud classifier with rule-based refinement for multi-tiered risk labels (Legitimate, Needs Review, High Risk, Confirmed Fraud). 
• Engineered rich transactional features such as sender/receiver balance differentials, time patterns, location mismatches, and cross-border indicators, with training and experimentation captured in a dedicated Jupyter model notebook.
• Developed a Flask backend exposing RESTful endpoints for scoring transactions, storing results in a structured SQLite database, and serving explainable feedback generated via LLaMA-based natural language explanations. 
• Built a React + Tailwind CSS client in the fraudgen-client directory, featuring dynamic dashboards visualizing fraud trends, severity distributions, and geolocation breakdowns using Recharts. 
• Integrated IPInfo API for IP geolocation, VPN/proxy detection, and contextual enrichment, enabling advanced rule overrides and cross-border risk escalation logic.
• Architected the project modularly with clean separation of modeling, backend services, and frontend UI, ensuring readiness for future enhancements such as explainable AI modules and cloud deployment.

Why it matters:
Designed as a practical, recruiter-friendly system showing ML + product thinking + full-stack implementation.`,
  },

  {
    id: "oil-airline-bloomberg",
    title: "Oil and Airline Stocks: An Empirical Study Using Bloomberg Data",
    short:
      "10+ years Bloomberg data (2015–2025) + multi-factor regressions; market-adjusted returns explain 25–33%.",
    tech: "Bloomberg Terminal · Python · Econometrics · Regression · Finance",
    github: "",
    live: "",
    report: oilAirlineReport,
    medium: "https://medium.com/@aekankpatel/oil-prices-vs-airline-stocks-the-relationship-everyone-gets-wrong-c493da0cf700",
    long: `Collected and analyzed 10+ years of Bloomberg Terminal data (2015–2025) to study how oil cost pressure impacts airline equity returns.

Scope:
• WTI crude oil (CL1), major U.S. airlines (DAL, AAL, UAL), and S&P 500 (SPX).

Methods:
• Bloomberg exploratory analysis using functions like CRP, CMT, HRA, and GP.
• Built Python-based econometric pipelines: computed daily log returns and ran multi-factor regressions controlling for market movement.

Key insight:
• Oil alone explains almost none of the variation in airline returns, but after controlling for SPX, oil betas become negative and statistically significant.

Output:
• Built market-adjusted return models explaining ~25–33% of airline return variability.`,
  },

  {
    id: "netflix-hotel-ts",
    title:
      "Time Series Modeling and Forecasting of Netflix Stock Prices and Hotel Bookings",
    short:
      "Box–Jenkins workflow; ARIMA/SARIMA selection via AIC/BIC + diagnostics; interpretable forecasts.",
    tech: "R · ARIMA · SARIMA · ACF/PACF · Ljung-Box · Forecasting",
    github: "",
    report: timeSeriesReport,
    live: "",
    long: `Analyzed two real-world datasets: Netflix adjusted close prices (2002–2022) and monthly hotel booking demand.

Work done:
• Full Box–Jenkins workflow: visualization, log transforms, stationarity testing (ADF), differencing.
• Built and compared ARIMA/SARIMA models with selection via AIC/BIC and ACF/PACF.
• Validated with Ljung–Box residual diagnostics.

Outputs:
• Produced forward forecasts: long-term trend projections for Netflix and seasonality-preserving 12-month forecasts for hotel bookings.`,
  },

  {
    id: "pneumonia-detection",
    title: "Deep Learning for Pneumonia Detection (CNN + MobileNet Ensemble)",
    short:
      "Chest X-ray classifier with augmentation; CNN 96.64%, MobileNet 95.00%, ensemble 97.23%.",
    tech: "Python · TensorFlow · CNN · MobileNet · Medical Imaging",
    github: "https://github.com/aekankpatel/Pneumonia_Detection",
    live: "",
    long: `Built and fine-tuned deep learning models to detect pneumonia from chest X-rays.

Key work:
• Used data augmentation to improve reliability.
• Trained a custom CNN (96.64% test accuracy) and MobileNet (95.00%).
• Ensemble combined CNN + MobileNet outputs.

Result:
• Ensemble achieved 97.23% test accuracy.`,
  },

  {
    id: "life-expectancy",
    title: "Life Expectancy Data Analysis",
    short:
      "WHO dataset (193 countries); EDA + hypothesis tests + models (RF R²≈0.97, RMSE≈1.67).",
    tech: "Python · EDA · Statistics · Random Forest · Regression",
    github: "",
    live: "",
    long: `Performed a comprehensive statistical analysis on WHO life expectancy data (193 countries, 2000–2015).

Key work:
• Preprocessing: median imputation, outlier handling (z-scores), encoding/standardization.
• EDA using boxplots, heatmaps, histograms, and time trends.
• Statistical testing: Z-test, Chi-Square, one-way ANOVA with Tukey HSD.
• Modeling: Multiple Linear Regression (R²≈0.82) and Random Forest Regression (R²≈0.97).

Insights:
• Key predictors included HIV/AIDS prevalence, income composition index, and adult mortality.`,
  },

  {
    id: "usd-inr",
    title: "Effects of Factors Affecting USD–INR Exchange Rates",
    short:
      "20-year analysis (2002–2022) using correlation + regression to study macroeconomic drivers.",
    tech: "Python · Statsmodels · Econometrics · Regression",
    github: "https://github.com/aekankpatel/USD_INR",
    live: "",
    long: `Analyzed factors impacting USD–INR exchange rate movements over 20 years (2002–2022).

Approach:
• Correlation analysis and regression modeling on macro variables.

Outcome:
• Interpretable insights into key drivers of exchange-rate swings.`,
  },

  {
    id: "vehicle-speed",
    title: "Speed Measurement of Vehicles (Computer Vision)",
    short:
      "CV-based vehicle speed estimation using detection + tracking and pixel-motion across frames.",
    tech: "Python · OpenCV · Computer Vision · Tracking",
    github: "https://github.com/aekankpatel/Speed_Measurements_of_Vehicles",
    live: "",
    long: `Developed an image-processing-based vehicle speed detection system.

How it works:
• Detects and tracks vehicles in video.
• Estimates speed via pixel displacement between frames.

Applications:
• Traffic monitoring and road-safety analytics.`,
  },

  {
    id: "insurance-claim",
    title: "Insurance Claim Prediction using Deep Learning",
    short:
      "Binary classification pipeline (10,302 rows) with MLP + TabNet ensemble; strong ROC/PR and calibration.",
    tech: "Python · TabNet · MLP · XGBoost · Random Forest · LightGBM · Model Evaluation",
    github: "",
    live: "",
    long: `Built an end-to-end claim likelihood prediction system using a real-world dataset (10,302 policyholders, 27 features).

Key work:
• Designed a robust preprocessing pipeline: missing-value handling, invalid-entry cleanup, skew treatment, encoding, and class-imbalance management (~27% claims).
• Trained and compared multiple ML + DL models: Logistic Regression, Random Forest, XGBoost, LightGBM, MLP, and TabNet.
• Built a soft-voting ensemble (MLP + TabNet) to balance recall and precision.

Results:
• ROC-AUC ≈ 0.97, PR-AUC ≈ 0.95, F1 ≈ 0.89, strong separation (KS ≈ 0.85).
• Produced calibrated probability outputs, confusion-matrix + ROC/PR analysis, and KS curves for risk-aware decision-making (underwriting/pricing/fraud).`,
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
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Problem Solving",
      "Debugging",
      "Clean Code Practices",
      "Git & Version Control",
      "Modular Code Design",
      "MATLAB"
    ]
  },
  {
    title: "Machine Learning",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression",
      "Classification",
      "Clustering",
      "Anomaly Detection",
      "Feature Engineering",
      "Model Evaluation",
      "Cross Validation",
      "Hyperparameter Tuning",
      "Explainable AI (SHAP, LIME)",   
    ]
  },
  {
    title: "Deep Learning",
    items: [
      "Neural Networks",
      "CNN",
      "RNN",
      "LSTM",
      "Transfer Learning",
      "Computer Vision",
      "Time Series Forecasting",
      "Model Optimization",
      "Backpropagation",
      "Ensemble Deep Learning"
    ]
  },
  {
    title: "Natural Language Processing",
    items: [
      "Text Preprocessing",
      "Tokenization",
      "Word Embeddings",
      "Transformer Models",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
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
      "Feature Importance Analysis",
      "Data Visualization"
    ]
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "XGBoost",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "OpenCV",
      "Statsmodels"
    ]
  },
  {
    title: "Backend & APIs",
    items: [
      "Flask",
      "REST APIs",
      "API Design",
      "Model Deployment",
      "JSON Handling",
      "Authentication",
      "Microservices (Basic)",
      "SQLite"
    ]
  },
  {
    title: "Big Data & Distributed Systems",
    items: [
      "Apache Spark",
      "Hadoop",
      "YARN",
      "ETL Pipelines",
      "Data Pipelines",
      "Distributed Computing",
      "Large-Scale Data Processing",
      "Delta Lake (Conceptual)"
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Docker (Basic)",
      "Render Deployment",
      "GitHub Workflows",
      "Cloud Storage",
      "Compute & Deployment Concepts",
      "CI/CD Fundamentals"
    ]
  },
  {
    title: "Data Analysis & Business Intelligence",
    items: [
      "SQL",
      "Excel",
      "Tableau",
      "Power BI",
      "Dashboard Design",
      "KPI Development",
      "Data Reporting",
      "Pivot Tables",
      "Data Storytelling"
    ]
  },
  {
    title: "Model Deployment & ML Systems",
    items: [
      "End-to-End ML Pipelines",
      "Model Serialization",
      "Prediction APIs",
      "Experiment Tracking (Conceptual)",
      "Monitoring & Logging (Basic)",
      "Production Readiness Considerations",
      "Scalable Model Architecture"
    ]
  },

  {
    title: "Interpersonal Skills",
    items: [
      "Technical Communication",
      "Teaching & Mentoring",
      "Leadership",
      "Analytical Thinking",
      "Problem Decomposition",
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
    badge: "/logos/aws.png",
    link: "https://www.credly.com/badges/463d6e11-fa00-4c7f-806f-732a82aafbd3",
  },
  {
    id: "aws-data-engineering",
    title: "AWS Data Engineering",
    issuer: "AWS",
    badge: "/logos/aws.png",
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
  }
];