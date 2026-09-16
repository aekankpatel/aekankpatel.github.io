import { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
import {
  HERO,
  WHAT_I_DO,
  NOW,
  FOCUS,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  CERTIFICATIONS,
} from "./data/portfolio.js";

import {
  FaGithub, FaLinkedin, FaMedium,
  FaCode, FaBrain, FaRobot, FaComments, FaChartBar, FaCubes, FaServer, FaSquareRootAlt, FaUsers,
  FaBolt, FaArrowUp, FaMoon, FaSun, FaChartLine,
  FaGraduationCap, FaMapMarkerAlt, FaArrowRight, FaFileAlt, FaRegCopy,
  FaDatabase, FaLayerGroup, FaBriefcase, FaShieldAlt,
  FaProjectDiagram, FaNetworkWired, FaEye, FaFlask, FaSuperscript, FaInfinity,
  FaWaveSquare, FaFileExcel, FaSitemap, FaMagic, FaBalanceScale, FaBullseye,
  FaChalkboardTeacher, FaLightbulb, FaHandshake, FaSearch, FaMicrochip, FaTerminal,
  FaChartArea, FaCloud,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiTableau,
  SiPython, SiR, SiC, SiGit, SiNumpy, SiPandas, SiScipy, SiScikitlearn,
  SiTensorflow, SiKeras, SiPytorch, SiOpencv, SiPlotly, SiHuggingface, SiStreamlit,
  SiFlask, SiFastapi, SiSqlite, SiPostgresql, SiMongodb, SiApachespark, SiApachehadoop,
  SiDocker, SiVercel, SiLangchain, SiGooglecloud,
  SiJavascript, SiCplusplus, SiGnubash, SiMysql, SiGooglebigquery, SiApacheairflow,
  SiJupyter, SiGooglecolab, SiPycharm,
} from "react-icons/si";

/* ── Tech-stack category → header icon ── */
const SKILL_ICONS = {
  "Programming Languages": FaCode,
  "Databases": FaDatabase,
  "Data Engineering & Cloud": FaCloud,
  "Backend & APIs": FaServer,
  "Machine Learning": FaBrain,
  "Deep Learning & AI": FaRobot,
  "NLP & LLMs": FaComments,
  "Data Science & Analytics": FaChartBar,
  "Libraries & Frameworks": FaCubes,
  "Data Viz & BI": FaChartArea,
  "Tools & IDEs": FaTerminal,
  "Mathematics": FaSquareRootAlt,
};

/* ── "What I Focus On" card → icon + accent colour ── */
const FOCUS_META = {
  ai:    { Icon: FaRobot,     color: "#a78bfa", bg: "rgba(133,76,230,0.13)", border: "rgba(133,76,230,0.28)", glow: "rgba(133,76,230,0.12)" },
  ml:    { Icon: FaBrain,     color: "#a78bfa", bg: "rgba(133,76,230,0.13)", border: "rgba(133,76,230,0.28)", glow: "rgba(133,76,230,0.12)" },
  data:  { Icon: FaDatabase,  color: "#a78bfa", bg: "rgba(133,76,230,0.13)", border: "rgba(133,76,230,0.28)", glow: "rgba(133,76,230,0.12)" },
  focus: { Icon: FaChartLine, color: "#a78bfa", bg: "rgba(133,76,230,0.13)", border: "rgba(133,76,230,0.28)", glow: "rgba(133,76,230,0.12)" },
};

/* ── Skill item → tech logo + brand colour (theme-safe variants). Near-black
   marks (Flask, Vercel) use a theme var so they stay visible in both modes. ── */
const TECH_LOGOS = {
  "Python": { icon: SiPython, color: "#3776AB" },
  "R": { icon: SiR, color: "#276DC3" },
  "C": { icon: SiC, color: "#649AD2" },
  "Git & Version Control": { icon: SiGit, color: "#F05032" },
  "NumPy": { icon: SiNumpy, color: "#4DABCF" },
  "Pandas": { icon: SiPandas, color: "#E70488" },
  "SciPy": { icon: SiScipy, color: "#5A79D6" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "Keras": { icon: SiKeras, color: "#D00000" },
  "PyTorch": { icon: SiPytorch, color: "#EE4C2C" },
  "OpenCV": { icon: SiOpencv, color: "#5C3EE8" },
  "Plotly": { icon: SiPlotly, color: "#636EFA" },
  "HuggingFace": { icon: SiHuggingface, color: "#E8901E" },
  "Streamlit": { icon: SiStreamlit, color: "#FF4B4B" },
  "Flask": { icon: SiFlask, color: "var(--text-secondary)" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "SQLite": { icon: SiSqlite, color: "#0F80CC" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Apache Spark": { icon: SiApachespark, color: "#E25A1C" },
  "PySpark": { icon: SiApachespark, color: "#E25A1C" },
  "Hadoop": { icon: SiApachehadoop, color: "#2596BE" },
  "Docker (Basic)": { icon: SiDocker, color: "#2496ED" },
  "Vercel": { icon: SiVercel, color: "var(--text-secondary)" },
  "LangChain": { icon: SiLangchain, color: "#2E8B7F" },
  "Google Cloud Storage": { icon: SiGooglecloud, color: "#4285F4" },
  "Dataproc": { icon: SiGooglecloud, color: "#4285F4" },
};

/* ── Skill → icon + colour for the Tech Stack proficiency boxes.
   Brand tools use their real logo/colour; concepts use a themed Fa icon.
   Anything not listed falls back to a generic accent icon. ── */
const SKILL_META = {
  // Programming
  "Python": { Icon: SiPython, color: "#3776AB" },
  "SQL": { Icon: FaDatabase, color: "#6d9dc5" },
  "R": { Icon: SiR, color: "#276DC3" },
  "C++": { Icon: SiCplusplus, color: "#00599C" },
  "C": { Icon: SiC, color: "#A8B9CC" },
  "JavaScript": { Icon: SiJavascript, color: "#F7DF1E" },
  "Bash/Shell": { Icon: SiGnubash, color: "#4EAA25" },
  // Databases
  "PostgreSQL": { Icon: SiPostgresql, color: "#4169E1" },
  "MySQL": { Icon: SiMysql, color: "#4479A1" },
  "SQLite": { Icon: SiSqlite, color: "#0F80CC" },
  "MongoDB": { Icon: SiMongodb, color: "#47A248" },
  "BigQuery": { Icon: SiGooglebigquery, color: "#669DF6" },
  // Data Engineering & Cloud
  "Apache Spark": { Icon: SiApachespark, color: "#E25A1C" },
  "PySpark": { Icon: SiApachespark, color: "#E25A1C" },
  "Hadoop": { Icon: SiApachehadoop, color: "#66CCFF" },
  "Google Cloud": { Icon: SiGooglecloud, color: "#4285F4" },
  "Dataproc": { Icon: SiGooglecloud, color: "#4285F4" },
  "Apache Airflow": { Icon: SiApacheairflow, color: "#017CEE" },
  "ETL Pipelines": { Icon: FaProjectDiagram, color: "#8b7fe0" },
  "Docker": { Icon: SiDocker, color: "#2496ED" },
  // Backend & APIs
  "FastAPI": { Icon: SiFastapi, color: "#009688" },
  "Flask": { Icon: SiFlask, color: "#cbd0d6" },
  "REST APIs": { Icon: FaServer, color: "#a78bfa" },
  "Streamlit": { Icon: SiStreamlit, color: "#FF4B4B" },
  "Vercel": { Icon: SiVercel, color: "#cbd0d6" },
  // Machine Learning
  "Scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
  "XGBoost": { Icon: FaProjectDiagram, color: "#2E86C1" },
  "Supervised Learning": { Icon: FaBrain, color: "#a78bfa" },
  "Classification": { Icon: FaSitemap, color: "#7bb3e0" },
  "Regression": { Icon: FaChartLine, color: "#5aa9e6" },
  "Ensemble Learning": { Icon: FaLayerGroup, color: "#8b7fe0" },
  "Model Evaluation": { Icon: FaBalanceScale, color: "#4cc38a" },
  // Deep Learning & AI
  "PyTorch": { Icon: SiPytorch, color: "#EE4C2C" },
  "TensorFlow": { Icon: SiTensorflow, color: "#FF6F00" },
  "Keras": { Icon: SiKeras, color: "#D00000" },
  "Neural Networks": { Icon: FaNetworkWired, color: "#5aa9e6" },
  "CNN": { Icon: FaMicrochip, color: "#8b7fe0" },
  "Computer Vision": { Icon: FaEye, color: "#5aa9e6" },
  "OpenCV": { Icon: SiOpencv, color: "#5C3EE8" },
  // NLP & LLMs
  "LangChain": { Icon: SiLangchain, color: "#2E8B7F" },
  "LlamaIndex": { Icon: FaRobot, color: "#a78bfa" },
  "HuggingFace": { Icon: SiHuggingface, color: "#FFD21E" },
  "Retrieval-Augmented Generation": { Icon: FaSearch, color: "#4cc38a" },
  "Large Language Models": { Icon: FaComments, color: "#a78bfa" },
  "Prompt Engineering": { Icon: FaTerminal, color: "#5aa9e6" },
  "Multi-Agent Systems": { Icon: FaSitemap, color: "#8b7fe0" },
  // Data Science & Analytics
  "Exploratory Data Analysis": { Icon: FaChartBar, color: "#4cc38a" },
  "Statistical Analysis": { Icon: FaChartLine, color: "#5aa9e6" },
  "Hypothesis Testing": { Icon: FaBalanceScale, color: "#a78bfa" },
  "Time Series Analysis": { Icon: FaChartArea, color: "#5aa9e6" },
  "A/B Testing": { Icon: FaFlask, color: "#4cc38a" },
  "Feature Engineering": { Icon: FaMagic, color: "#a78bfa" },
  "Data Visualization": { Icon: FaChartBar, color: "#8b7fe0" },
  // Libraries & Frameworks
  "NumPy": { Icon: SiNumpy, color: "#4DABCF" },
  "Pandas": { Icon: SiPandas, color: "#E70488" },
  "SciPy": { Icon: SiScipy, color: "#8CAAE6" },
  "Matplotlib": { Icon: FaChartArea, color: "#5aa9e6" },
  "Seaborn": { Icon: FaChartBar, color: "#4cc38a" },
  "Plotly": { Icon: SiPlotly, color: "#636EFA" },
  "Statsmodels": { Icon: FaWaveSquare, color: "#8b7fe0" },
  // Data Viz & BI
  "Tableau": { Icon: SiTableau, color: "#E97627" },
  "Power BI": { Icon: FaChartBar, color: "#F2C811" },
  "Excel": { Icon: FaFileExcel, color: "#217346" },
  // Tools & IDEs
  "Git": { Icon: SiGit, color: "#F05032" },
  "GitHub": { Icon: FaGithub, color: "#cbd0d6" },
  "VS Code": { Icon: FaCode, color: "#3B9EFF" },
  "Jupyter": { Icon: SiJupyter, color: "#F37626" },
  "Google Colab": { Icon: SiGooglecolab, color: "#F9AB00" },
  "PyCharm": { Icon: SiPycharm, color: "#21D789" },
  // Mathematics
  "Probability": { Icon: FaInfinity, color: "#a78bfa" },
  "Statistics": { Icon: FaChartBar, color: "#5aa9e6" },
  "Linear Algebra": { Icon: FaSuperscript, color: "#8b7fe0" },
  "Calculus": { Icon: FaInfinity, color: "#5aa9e6" },
  "Optimization": { Icon: FaBullseye, color: "#4cc38a" },
  "Bayesian Methods": { Icon: FaBalanceScale, color: "#a78bfa" },
  // Soft Skills
  "Technical Communication": { Icon: FaComments, color: "#5aa9e6" },
  "Teaching & Mentoring": { Icon: FaChalkboardTeacher, color: "#a78bfa" },
  "Leadership": { Icon: FaUsers, color: "#8b7fe0" },
  "Problem Solving": { Icon: FaLightbulb, color: "#F2C811" },
  "Team Collaboration": { Icon: FaHandshake, color: "#4cc38a" },
};

import Lottie from "lottie-react";

import whatIDoAnim from "./assets/animations/data.json";
import contactAnim from "./assets/animations/email-verify.json";
import ChatBot from "./components/ChatBot";

// ── Your photo (shown in hero) ──
import myPhoto from "./assets/photos/aekank-2.jpg";

/* ── Reveal hook ── */
function useReveal({ threshold = 0.15, rootMargin = "0px 0px -6% 0px" } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("isVisible"); return; }
    el.classList.remove("isVisible");
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("isVisible"); io.disconnect(); } },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);
  return ref;
}

/* ── Cursor spotlight (desktop only) ── */
function useCursorSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const spotlight = document.createElement("div");
    Object.assign(spotlight.style, {
      position: "fixed", width: "500px", height: "500px", borderRadius: "50%",
      background: "radial-gradient(circle, rgba(133,76,230,0.035) 0%, transparent 70%)",
      pointerEvents: "none", zIndex: "0", transform: "translate(-50%, -50%)",
      transition: "opacity 400ms ease", opacity: "0",
    });
    document.body.appendChild(spotlight);
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spotlight.style.left = e.clientX + "px";
        spotlight.style.top = e.clientY + "px";
        spotlight.style.opacity = "1";
      });
    };
    const onLeave = () => { spotlight.style.opacity = "0"; };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      spotlight.remove();
    };
  }, []);
}

function SectionDivider({ variant = "a" }) {
  const paths = {
    a: "M0,30 C 200,8 380,8 600,24 C 820,40 1000,44 1200,20",
    b: "M0,18 C 200,40 380,42 600,24 C 820,6 1000,2 1200,26",
  };
  return (
    <div className={`sectionWave sectionWave--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1200 48" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`wg-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="0.5" stopColor="var(--accent)" stopOpacity="0.6" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={paths[variant]} fill="none" stroke={`url(#wg-${variant})`} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Contact Form — sends email via EmailJS
   ────────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus("sending");

    try {
      // ── EmailJS config — set in .env as VITE_EMAILJS_* ──
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            name: form.name,
            email: form.email,
            message: form.message,
            title: "Portfolio Contact from " + form.name,
          },
        }),
      });

      const text = await res.text();
      if (res.ok || res.status === 200 || text === "OK") {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error(text || "Send failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="contactForm">
      <div className="contactFormField">
        <label className="contactFormLabel" htmlFor="cf-name">Name</label>
        <input
          className="contactFormInput"
          id="cf-name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          disabled={status === "sending"}
        />
      </div>

      <div className="contactFormField">
        <label className="contactFormLabel" htmlFor="cf-email">Email</label>
        <input
          className="contactFormInput"
          id="cf-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          disabled={status === "sending"}
        />
      </div>

      <div className="contactFormField">
        <label className="contactFormLabel" htmlFor="cf-message">Message</label>
        <textarea
          className="contactFormInput contactFormTextarea"
          id="cf-message"
          name="message"
          placeholder="Tell me about the opportunity..."
          rows={4}
          value={form.message}
          onChange={handleChange}
          disabled={status === "sending"}
        />
      </div>

      <div
        className={`contactFormBtn ${status === "sending" || !form.name.trim() || !form.email.trim() || !form.message.trim() ? "contactFormBtnDisabled" : ""}`}
        onClick={(e) => {
          if (status === "sending" || !form.name.trim() || !form.email.trim() || !form.message.trim()) return;
          handleSubmit(e);
        }}
        role="button"
        tabIndex={-1}
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "✓ Message Sent!" : status === "error" ? "Failed — Try Again" : "Send Message →"}
      </div>

      {status === "sent" && (
        <p className="contactFormSuccess">Thanks! I'll get back to you soon.</p>
      )}
    </div>
  );
}

/* ── Rotating accent word in the hero tagline ── */
function RotatingWord({ words, interval = 2200 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span className="rotatingWordWrap">
      <span className="rotatingWord" key={i}>{words[i]}</span>
    </span>
  );
}

/* ── Animated count-up number (hero stats) ── */
function CountUp({ value, decimals = 0, prefix = "", suffix = "", duration = 1500, run = true }) {
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!run || done.current) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else { setN(value); done.current = true; }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value, duration]);
  return <>{prefix}{n.toFixed(decimals)}{suffix}</>;
}

/* ══════════════════════════════════════════ APP ══════════════════════════════════════════ */
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const closeModal = () => setActiveProject(null);
  useCursorSpotlight();

  // Pointer-tracked 3D tilt for the hero photo card
  const heroCardRef = useRef(null);
  const handleCardTilt = (e) => {
    const el = heroCardRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tilt-x", `${(-py * 9).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 9).toFixed(2)}deg`);
  };
  const resetCardTilt = () => {
    const el = heroCardRef.current; if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  const whatRef = useReveal({ threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  const nowRef = useReveal(); const eduRef = useReveal(); const expRef = useReveal();
  const skillsRef = useReveal(); const projectsRef = useReveal();
  const certRef = useReveal(); const contactRef = useReveal();

  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => setTimeout(() => setFontsLoaded(true), 150));
    } else { setTimeout(() => setFontsLoaded(true), 800); }
  }, []);
  useEffect(() => { const fn = (e) => e.key === "Escape" && closeModal(); window.addEventListener("keydown", fn); return () => window.removeEventListener("keydown", fn); }, []);
  useEffect(() => { document.body.style.overflow = activeProject ? "hidden" : "auto"; }, [activeProject]);
  useEffect(() => { const s = localStorage.getItem("theme"); if (s === "light" || s === "dark") setTheme(s); }, []);
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); localStorage.setItem("theme", theme); }, [theme]);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const t = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress-scale", String(h > 0 ? Math.min(1, Math.max(0, t / h)) : 0));
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const heroSocials = Array.isArray(HERO?.socials) ? HERO.socials : [];
  const iconFor = (label) => {
    if (label === "GitHub") return FaGithub; if (label === "LinkedIn") return FaLinkedin;
    if (label === "Medium") return FaMedium; if (label === "Email") return MdEmail;
    if (label === "Tableau") return SiTableau; return null;
  };

  // Contact — copy-email + clean URL labels
  const [emailCopied, setEmailCopied] = useState(false);
  const contactEmail = (heroSocials.find((s) => s?.label === "Email")?.href || "mailto:aekankpatel@gmail.com").replace("mailto:", "");
  const copyEmail = () => {
    navigator.clipboard?.writeText(contactEmail)
      .then(() => { setEmailCopied(true); setTimeout(() => setEmailCopied(false), 2000); })
      .catch(() => {});
  };
  const cleanUrl = (href) => (href || "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <>
      <div className={`loaderScreen ${fontsLoaded ? "loaderHidden" : ""}`}>
        <div className="loaderRing">
          <div className="loaderMark">
            <span className="loaderInitials">AP</span>
            <svg className="loaderSpark" viewBox="0 0 40 12" fill="none" aria-hidden="true">
              <polyline points="2,10 12,6 20,8 32,2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className={`page ${fontsLoaded ? "pageReady" : "pageLoading"}`}>
        {/* Scroll progress bar — fixed at very top of viewport */}
        <div className="scrollProgress" aria-hidden="true"><div className="scrollProgressBar" /></div>

        <header className="nav">
          <div className="brand"><a href="https://github.com/aekankpatel/aekankpatel.github.io" target="_blank" rel="noreferrer" className="brandLink">Aekank Patel</a></div>
          <div className="navRight">
            <nav className={`links ${menuOpen ? "menuOpen" : ""}`}>
              <a href="#what" onClick={() => setMenuOpen(false)}>Focus</a>
              <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#tech-stack" onClick={() => setMenuOpen(false)}>Tech Stack</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#certifications" onClick={() => setMenuOpen(false)}>Certs</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
            <button className={`themeSwitch ${theme === "dark" ? "isDark" : "isLight"}`} onClick={toggleTheme} type="button" role="switch" aria-checked={theme === "dark"} aria-label="Toggle theme">
              <span className="switchThumb"><span className="switchIcon">{theme === "dark" ? <FaMoon size={10} /> : <FaSun size={11} />}</span></span>
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" type="button">
              <span className="hamburgerLine" /><span className="hamburgerLine" /><span className="hamburgerLine" />
            </button>
          </div>
        </header>

        {/* ═══════════ HERO ═══════════ */}
        <main className="hero">
          <div className="heroGrid">
            {/* Left — who you are */}
            <div className="heroLeft">
              <div className="availableBadge"><span className="availableDot" />Open to Opportunities</div>
              <p className="heroGreeting">Hi, I'm Aekank <span className="waveEmoji">👋</span></p>
              <p className="heroTagline">I turn <RotatingWord words={["messy data", "raw numbers", "noisy signals", "chaos", "spreadsheets"]} /> into systems <br />that solve <span className="orangeUnderline"></span>real world problems.</p>
              <p className="subtitle">{HERO?.summary ?? ""}</p>

              {/* Primary actions */}
              <div className="heroCtas">
                <a className="btn heroCtaPrimary" href="#projects">Explore Projects <FaArrowRight size={12} /></a>
                {HERO?.resumePath ? (
                  <a className="btn heroCta" href={HERO.resumePath} target="_blank" rel="noreferrer"><FaFileAlt size={13} /> Download Resume</a>
                ) : null}
                <a className="btn heroCtaGhost" href="#contact">Get in Touch</a>
              </div>

              {/* Quick-stats strip */}
              <div className="heroStats">
                {(HERO?.stats ?? []).map((s, i) => (
                  <Fragment key={s.label}>
                    {i > 0 ? <div className="heroStatDivider" /> : null}
                    <div className="heroStat">
                      <span className="heroStatNum"><CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} run={fontsLoaded} /></span>
                      <span className="heroStatLabel">{s.label}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Right — photo card with overlaid badges + socials below */}
            <div className="heroRight">
              <div className="heroPhotoCard" ref={heroCardRef} onMouseMove={handleCardTilt} onMouseLeave={resetCardTilt}>
                <img className="heroPhoto" src={myPhoto} alt="Aekank Patel" />
              </div>

              <div className="heroCardLinks">
                {heroSocials.map((s) => {
                  const Icon = iconFor(s?.label); if (!Icon) return null;
                  const href = s?.href ?? "#"; const isMail = href.startsWith("mailto:");
                  return <a key={s.label} className="heroCardIcon" href={href} target={isMail ? undefined : "_blank"} rel={isMail ? undefined : "noreferrer"} aria-label={s.label} title={s.label}><Icon size={18} /></a>;
                })}
              </div>
            </div>
          </div>
        </main>

        {/* ═══════════ WHAT I FOCUS ON — capability grid ═══════════ */}
        <SectionDivider variant="a" />
        <section id="what" className="section revealFromTop" ref={whatRef}>
          <span className="sectionKicker"><FaLayerGroup size={12} style={{ verticalAlign: "-1px", marginRight: "8px" }} />{FOCUS?.kicker}</span>
          <h2>{FOCUS?.title}</h2>
          {FOCUS?.subtitle ? <p className="sectionSubtitle">{FOCUS.subtitle}</p> : null}
          <div className="focusGrid staggerChildren">
            {(FOCUS?.cards ?? []).map((c) => {
              const meta = FOCUS_META[c.key] ?? {};
              const Icon = meta.Icon;
              return (
                <div className="focusCard" key={c.key} style={{ "--fc-glow": meta.glow }}>
                  {Icon ? <div className="focusIcon" style={{ color: meta.color, background: meta.bg, borderColor: meta.border }}><Icon size={20} /></div> : null}
                  <h3 className="focusCardTitle">{c.title}</h3>
                  <p className="focusCardBody">{c.body}</p>
                  <div className="focusChips">{(c.chips ?? []).map((ch, i) => <span className="focusChip" key={i}>{ch}</span>)}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════ EDUCATION ═══════════ */}
        <SectionDivider variant="b" />
        <section id="education" className="section revealFromLeft" ref={eduRef}>
          <span className="sectionKicker"><FaGraduationCap size={12} style={{ verticalAlign: "-1px", marginRight: "8px" }} />Academic Background</span><h2>Education</h2>
          {(EDUCATION ?? []).map((e) => {
            const detailsArray = Array.isArray(e.details) ? e.details : e.details ? [e.details] : [];
            const courses = Array.isArray(e.courses) ? e.courses : [];
            const marqueeCourses = courses.length ? [...courses, ...courses] : [];
            return (
              <div className="eduCard eduRow" key={`${e.school}-${e.degree}`}>
                <div className="eduLogoWrap">{e.logo ? <img className="logoCircle" src={e.logo} alt={`${e.school} logo`} /> : null}</div>
                <div className="eduMain">
                  <div className="eduTopRow"><div className="eduSchool">{e.school}</div><div className="eduRight">{e.time ? <div className="eduRightLine">{e.time}</div> : null}</div></div>
                  <div className="eduMetaRow">{e.degree ? <div className="eduDegreeLine">{e.degree}</div> : <div />}{e.gpa ? <div className="eduGpaInline">{e.gpa}</div> : null}</div>
                  {detailsArray.length ? <ul className="eduBullets">{detailsArray.map((d, idx) => <li key={idx}>{d}</li>)}</ul> : null}
                  {courses.length ? (
                    <div className="courseBlock"><div className="courseLabel">Courses</div>
                      <div className="courseMarquee" aria-label="Courses marquee"><div className="courseTrack">{marqueeCourses.map((c, idx) => <div className="courseChip" key={`${c}-${idx}`}>{c}</div>)}</div></div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </section>

        {/* ═══════════ EXPERIENCE ═══════════ */}
        <SectionDivider variant="a" />
        <section id="experience" className="section revealFromLeft" ref={expRef}>
          <span className="sectionKicker"><FaBriefcase size={12} style={{ verticalAlign: "-1px", marginRight: "8px" }} />Work History</span><h2>Experience</h2>
          <div className="expTimeline">
            {(EXPERIENCE ?? []).map((x) => (
              <div className="expItem" key={`${x.company}-${x.role}`}>
                <div className="expRail"><span className="expNode" /></div>
                <div className="expCard expNew">
                  <div className="expHead">
                    {x.logo ? <div className="expLogoWrap"><img className="expLogo" src={x.logo} alt={`${x.company} logo`} /></div> : null}
                    <div className="expHeadText">
                      <div className="expRoleBig">{x.role}</div>
                      <div className="expCompanyName">{x.company}</div>
                      <div className="expMetaRow">
                        {x.time ? <span className="expTimeCenter">{x.time}</span> : null}
                        {x.location ? <span className="expLocationCenter">{x.location}</span> : null}
                        {x.workType ? <span className="expWorkType">{x.workType}</span> : null}
                      </div>
                    </div>
                  </div>
                  {x.bullets?.length ? <ul className="expBullets">{x.bullets.map((b, idx) => <li key={idx}>{b}</li>)}</ul> : null}
                  {x.tags?.length ? <div className="expTags">{x.tags.map((t) => <span className="expTag" key={t}>{t}</span>)}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ TECH STACK ═══════════ */}
        <SectionDivider variant="b" />
        <section id="tech-stack" className="section revealFromTop" ref={skillsRef}>
          <span className="sectionKicker"><FaServer size={12} style={{ verticalAlign: "-1px", marginRight: "8px" }} />Tools & Technologies</span><h2>Tech Stack</h2>
          <div className="skillsGrid staggerChildren">
            {(SKILLS ?? []).map((group) => {
              const Icon = SKILL_ICONS[group.title];
              return (
                <div key={group.title} className="skillCard">
                  <div className="skillCardHead">
                    <span className="skillCardIcon">{Icon ? <Icon size={15} /> : null}</span>
                    <h3 className="skillCardTitle">{group.title}</h3>
                    <span className="skillCardCount">{(group.items ?? []).length}</span>
                  </div>
                  <div className="skillList">
                    {(group.items ?? []).map((item, i) => {
                      const meta = SKILL_META[item.name] ?? {};
                      const SkillIcon = meta.Icon ?? FaCubes;
                      return (
                        <div key={`${group.title}-${i}`} className="skillItem">
                          <div className="skillItemTop">
                            <span className="skillItemIcon">
                              <SkillIcon size={16} style={{ color: meta.color ?? "var(--accent)" }} />
                            </span>
                            <span className="skillItemName">{item.name}</span>
                          </div>
                          <div className="skillBar">
                            <div className="skillBarFill" style={{ width: `${item.level}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════ PROJECTS ═══════════ */}
        <SectionDivider variant="a" />
        <section id="projects" className="section revealFromTop" ref={projectsRef}>
          <span className="sectionKicker"><FaCode size={12} style={{ verticalAlign: "-1px", marginRight: "8px" }} />Things I've Built</span><h2>Projects</h2>

          {/* Filter bar */}
          <div className="projectFilters">
            {["All", ...Array.from(new Set(PROJECTS.map(p => p.tag)))].map(f => (
              <button
                key={f}
                className={`projectFilter ${activeFilter === f ? "projectFilterActive" : ""}`}
                onClick={() => setActiveFilter(f)}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="projectsUnified staggerChildren">
            {PROJECTS.filter(p => activeFilter === "All" || p.tag === activeFilter).map((p) => (
              <div key={p.id} className="projectCardNew" data-tag={p.tag?.replace(/[&\s]/g, '-').toLowerCase()}>
                {/* Image tile — click opens details; description/tags/links reveal on hover */}
                <div
                  className="projectTile"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveProject(p)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveProject(p); } }}
                >
                  {p.image ? (
                    <img className="projectImage" src={p.image} alt={p.title} />
                  ) : (
                    <div className="projectVisual">
                      <div className="projectVisualGlow" />
                      <div className="projectVisualGrid" />
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="projectOverlay">
                    <span className="projectCat">{p.tag}</span>
                    <h4 className="projectOverlayTitle">{p.title}</h4>
                    <p className="projectOverlayShort">{p.short}</p>
                    <div className="projectChipWrap">
                      {(() => {
                        const techs = p.tech.split(" · ");
                        const shown = techs.slice(0, 4);
                        const extra = techs.length - shown.length;
                        return (
                          <>
                            {shown.map((t) => <span key={t} className="projectChip">{t}</span>)}
                            {extra > 0 ? <span className="projectChip projectChipMore">+{extra}</span> : null}
                          </>
                        );
                      })()}
                    </div>
                    <div className="projectActions">
                      {p.github ? <a className="projectActionBtn" href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a> : null}
                      {p.live ? <a className="projectActionBtn" href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a> : null}
                      {p.medium ? <a className="projectActionBtn" href={p.medium} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Medium</a> : null}
                      {p.report ? <a className="projectActionBtn" href={p.report} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Report</a> : null}
                      {p.tableau ? <a className="projectActionBtn" href={p.tableau} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Tableau</a> : null}
                      <button className="projectActionBtn projectActionPrimary" onClick={(e) => { e.stopPropagation(); setActiveProject(p); }} type="button">View Details →</button>
                    </div>
                  </div>
                </div>

                {/* Title caption below the tile */}
                <h3 className="projectCaption">{p.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ CERTIFICATIONS ═══════════ */}
        <SectionDivider variant="b" />
        <section id="certifications" className="section revealFromTop" ref={certRef}>
          <span className="sectionKicker"><FaShieldAlt size={12} style={{ verticalAlign: "-1px", marginRight: "8px" }} />Credentials</span><h2>Certifications</h2>
          <div className="certGridBig staggerChildren">
            {(CERTIFICATIONS ?? []).map((c) => (
              <div key={c.id} className="certCardBig">
                <div className="certBadgeWrap">{c.badge ? <img src={c.badge} alt={c.title} className="certBadge" /> : null}</div>
                <h3 className="certBigTitle">{c.title}</h3><div className="certBigIssuer">{c.issuer}</div>
                {c.desc ? <p className="certDesc">{c.desc}</p> : null}
                <div className="certBtnRow"><a href={c.link} target="_blank" rel="noreferrer" className="certBtn">View Certificate</a></div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <SectionDivider variant="a" />
        <section id="contact" className="section revealFromTop" ref={contactRef}>
          <span className="sectionKicker"><MdEmail size={13} style={{ verticalAlign: "-2px", marginRight: "8px" }} />Get in Touch</span><h2>Contact Me</h2>
          <div className="contactHeader">
            <div className="contactHeaderText">
              <p className="contactLine">I'm looking for Data Science, Machine Learning, AI Engineering, and Data Engineering roles, both internships and full-time. If you're hiring or just want to talk about a project, drop me a message below or reach out on any of these.</p>
            </div>
            <div className="contactAnimWrap"><Lottie animationData={contactAnim} loop autoplay className="contactAnim" /></div>
          </div>

          <div className="contactGrid">
            {/* Left — "Let's connect" info card */}
            <div className="contactInfoCard">
              <h3 className="contactInfoTitle">Let's connect.</h3>
              <p className="contactInfoText">The fastest way to reach me is email — copy it or open your mail app below. You can also connect with me on LinkedIn.</p>

              <div className="contactEmailBox">
                <span className="contactEmailAddr">{contactEmail}</span>
                <div className="contactEmailActions">
                  <button className="contactCopyBtn" onClick={copyEmail} type="button" aria-label="Copy email">
                    <FaRegCopy size={13} /> {emailCopied ? "Copied" : "Copy"}
                  </button>
                  <a className="contactCopyBtn contactMailBtn" href={`mailto:${contactEmail}`} aria-label="Email me directly">
                    <MdEmail size={15} /> Email
                  </a>
                </div>
              </div>

              <div className="contactDetailBox">
                {heroSocials.filter((s) => s?.label === "LinkedIn").map((s) => {
                  const Icon = iconFor(s?.label); if (!Icon) return null;
                  return (
                    <a key={`clink-${s.label}`} className="contactLink" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                      <Icon className="contactLinkIcon" size={16} /><span className="contactLinkText">{s.label}</span>
                    </a>
                  );
                })}
                <div className="contactMetaRow">
                  <FaMapMarkerAlt className="contactMetaIcon" size={15} />
                  <span>Based in Jersey City, NJ · Open to NYC Metro, Relocation &amp; Remote</span>
                </div>
              </div>
            </div>

            {/* Right — form card */}
            <div className="contactFormCard">
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="footer footerSplit">
          <div className="footerLeft">Designed & built by me · Animations powered by LottieFiles</div>
          <div className="footerRight">© {new Date().getFullYear()} Aekank Patel</div>
        </footer>

        {activeProject && (
          <div className="modalOverlay" onClick={closeModal} role="presentation">
            <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
              <div className="modalHeader"><h3 className="modalTitle">{activeProject.title}</h3><button className="modalClose" onClick={closeModal} type="button" aria-label="Close">✕</button></div>
              <div className="modalBody">
                <p className="modalTech">{activeProject.tech}</p>

                {/* Key result callout */}
                {activeProject.impact ? (
                  <div className="modalCallout">
                    <span className="modalCalloutLabel">Key Result</span>
                    <span className="modalCalloutText">{activeProject.impact}</span>
                  </div>
                ) : null}

                <p className="modalText" style={{ whiteSpace: "pre-line" }}>{activeProject.long}</p>
                <div className="modalActions">
                  {activeProject.github ? <a className="btn primary" href={activeProject.github} target="_blank" rel="noreferrer">GitHub</a> : null}
                  {activeProject.live ? <a className="btn primary" href={activeProject.live} target="_blank" rel="noreferrer">Live Demo</a> : null}
                  {activeProject.medium ? <a className="btn primary" href={activeProject.medium} target="_blank" rel="noreferrer">Medium</a> : null}
                  {activeProject.report ? <a className="btn primary" href={activeProject.report} target="_blank" rel="noreferrer">View Report</a> : null}
                  {activeProject.tableau ? <a className="btn primary" href={activeProject.tableau} target="_blank" rel="noreferrer">Tableau</a> : null}
                </div>
              </div>
            </div>
          </div>
        )}
        <ChatBot />
      </div>
    </>
  );
}