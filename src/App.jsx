import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  HERO,
  WHAT_I_DO,
  NOW,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  CERTIFICATIONS,
} from "./data/portfolio.js";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Lottie from "lottie-react";

import whatIDoAnim from "./assets/animations/data.json";
import contactAnim from "./assets/animations/contact.json";
import ScrollToTop from "./components/ScrollToTop";

// ── Your photo (shown in hero) ──
import myPhoto from "./assets/photos/aekank-1.jpg";

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
      background: "radial-gradient(circle, rgba(212,149,106,0.035) 0%, transparent 70%)",
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

function SectionDivider() { return <div className="sectionLine" />; }

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
        {status === "sending" ? "Sending..." : status === "sent" ? "✓ Message Sent!" : status === "error" ? "Failed — Try Again" : "Send Message"}
      </div>

      {status === "sent" && (
        <p className="contactFormSuccess">Thanks! I'll get back to you soon.</p>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════ APP ══════════════════════════════════════════ */
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const closeModal = () => setActiveProject(null);
  useCursorSpotlight();

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
    if (label === "Medium") return FaMedium; if (label === "Email") return MdEmail; return null;
  };

  return (
    <>
      <div className={`loaderScreen ${fontsLoaded ? "loaderHidden" : ""}`}>
        <div className="loaderRing">
          <div className="loaderInitials">AP</div>
        </div>
      </div>

      <div className={`page ${fontsLoaded ? "pageReady" : "pageLoading"}`}>
        {/* Scroll progress bar — fixed at very top of viewport */}
        <div className="scrollProgress" aria-hidden="true"><div className="scrollProgressBar" /></div>

        <header className="nav">
          <div className="brand"><a href="https://github.com/aekankpatel/aekankpatel.github.io" target="_blank" rel="noreferrer" className="brandLink">Aekank Patel</a></div>
          <div className="navRight">
            <nav className={`links ${menuOpen ? "menuOpen" : ""}`}>
              <a href="#what" onClick={() => setMenuOpen(false)}>What I Do</a>
              <a href="#now" onClick={() => setMenuOpen(false)}>Now</a>
              <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#tech-stack" onClick={() => setMenuOpen(false)}>Tech Stack</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#certifications" onClick={() => setMenuOpen(false)}>Certs</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
            <button className={`themeSwitch ${theme === "dark" ? "isDark" : "isLight"}`} onClick={toggleTheme} type="button" role="switch" aria-checked={theme === "dark"} aria-label="Toggle theme">
              <span className="switchThumb"><span className="switchIcon">{theme === "dark" ? "🌙" : "☀️"}</span></span>
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
              <p className="heroTagline">I turn <span className="orangeText">messy data</span> into systems <br />that actually <span className="orangeUnderline">make sense</span>.</p>
              <p className="subtitle">{HERO?.summary ?? ""}</p>

              {/* Quick-stats strip */}
              <div className="heroStats">
                <div className="heroStat">
                  <span className="heroStatNum">8</span>
                  <span className="heroStatLabel">Key Projects</span>
                </div>
                <div className="heroStatDivider" />
                <div className="heroStat">
                  <span className="heroStatNum">3.97</span>
                  <span className="heroStatLabel">GPA</span>
                </div>
                <div className="heroStatDivider" />
                <div className="heroStat">
                  <span className="heroStatNum">4+</span>
                  <span className="heroStatLabel">Yrs Python</span>
                </div>
                <div className="heroStatDivider" />
                <div className="heroStat">
                  <span className="heroStatNum">1</span>
                  <span className="heroStatLabel">Yr Work Exp</span>
                </div>
                <div className="heroStatDivider" />
                <div className="heroStat">
                  <span className="heroStatNum">8</span>
                  <span className="heroStatLabel">Certifications</span>
                </div>
              </div>
            </div>

            {/* Right — photo card with emojis connected by dashed arc */}
            <div className="heroRight">
              <div className="heroCardWrap">
                {/* Dashed arc connecting the two emojis, sweeping around the photo */}
                <svg className="heroArc" viewBox="0 0 300 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M50 460 C10 350, 0 220, 15 140 C30 60, 90 10, 170 0 C230 -8, 270 15, 275 45" stroke="var(--accent)" strokeWidth="3.5" strokeDasharray="16 12" strokeLinecap="round" fill="none" opacity="0.55" />
                </svg>

                {/* Emoji 1 — bottom-left of photo (start of arc) */}
                <div className="heroEmoji heroEmoji1">📊</div>

                <div className="heroPhotoBorder">
                  <img className="heroPhoto" src={myPhoto} alt="Aekank Patel" />
                </div>

                {/* Emoji 2 — top-right of photo (end of arc) */}
                <div className="heroEmoji heroEmoji2">📈</div>

                <p className="heroPhotoName">Aekank Patel</p>

                <div className="heroCardLinks">
                  {heroSocials.map((s) => {
                    const Icon = iconFor(s?.label); if (!Icon) return null;
                    const href = s?.href ?? "#"; const isMail = href.startsWith("mailto:");
                    return <a key={s.label} className="heroCardIcon" href={href} target={isMail ? undefined : "_blank"} rel={isMail ? undefined : "noreferrer"} aria-label={s.label} title={s.label}><Icon size={18} /></a>;
                  })}
                </div>

                {HERO?.resumePath ? (
                  <a className="btn primary heroResumeBtn" href={HERO.resumePath} target="_blank" rel="noreferrer">↓ Download Resume</a>
                ) : null}
              </div>
            </div>
          </div>
        </main>

        {/* ═══════════ WHAT I DO — data.json Lottie on left ═══════════ */}
        <SectionDivider />
        <section id="what" className="section whatIDo revealSection" ref={whatRef}>
          <div className="whatGrid">
            <div className="whatLeft revealLeft">
              <div className="whatVisual">
                <Lottie animationData={whatIDoAnim} loop autoplay className="whatGif" />
              </div>
            </div>
            <div className="whatRight revealRight">
              <span className="sectionKicker">About</span>
              <h2 className="whatTitle">{WHAT_I_DO?.title ?? ""}</h2>
              <p className="whatIntro">{WHAT_I_DO?.intro ?? ""}</p>
              <div className="whatBullets">
                {(WHAT_I_DO?.bullets ?? []).map((b, i) => <p key={i} className="whatBullet">{b}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ NOW ═══════════ */}
        <SectionDivider />
        <section id="now" className="section revealFromTop" ref={nowRef}>
          <span className="sectionKicker">Current Focus</span>
          <h2>{NOW?.title ?? "Now"}</h2>
          {NOW?.subtitle ? <p className="sectionSubtitle">{NOW.subtitle}<span className="nowTimestamp"> — Last updated March 2026</span></p> : null}
          <div className="nowGrid staggerChildren">
            {(NOW?.cards ?? []).map((c, i) => (
              <div className="nowCard" key={`${c.title}-${i}`}>
                <h3>{c.title}</h3><p>{c.body}</p>
                {c.tag ? <span className="nowTag">{c.tag}</span> : null}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ EDUCATION ═══════════ */}
        <SectionDivider />
        <section id="education" className="section revealFromLeft" ref={eduRef}>
          <span className="sectionKicker">Academic Background</span><h2>Education</h2>
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
        <SectionDivider />
        <section id="experience" className="section revealFromLeft" ref={expRef}>
          <span className="sectionKicker">Work History</span><h2>Experience</h2>
          {(EXPERIENCE ?? []).map((x) => (
            <div className="expCard expNew" key={`${x.company}-${x.role}`}>
              <div className="expCenter">
                <div className="expCompanyName">{x.company}</div>
                {x.logo ? <div className="expLogoWrap"><img className="expLogo" src={x.logo} alt={`${x.company} logo`} /></div> : null}
                <div className="expRoleBig">{x.role}</div>
                {x.time ? <div className="expTimeCenter">{x.time}</div> : null}
                {x.location ? <div className="expLocationCenter">{x.location}</div> : null}
                {x.stats?.length ? <div className="expStatRow">{x.stats.map((stat, i) => <span className="expStatPill" key={i}>{stat}</span>)}</div> : null}
              </div>
              {x.bullets?.length ? <ul className="expBullets">{x.bullets.map((b, idx) => <li key={idx}>{b}</li>)}</ul> : null}
            </div>
          ))}
        </section>

        {/* ═══════════ TECH STACK ═══════════ */}
        <SectionDivider />
        <section id="tech-stack" className="section revealFromTop" ref={skillsRef}>
          <span className="sectionKicker">Tools & Technologies</span><h2>Tech Stack</h2>
          <div className="skillsGrid staggerChildren">
            {(SKILLS ?? []).map((group) => (
              <div key={group.title} className="skillCard"><h3 className="skillCardTitle">{group.title}</h3>
                <div className="skillChipWrap">{(group.items ?? []).map((item, i) => <span key={`${group.title}-${i}`} className="skillChip">{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ PROJECTS ═══════════ */}
        <SectionDivider />
        <section id="projects" className="section revealFromTop" ref={projectsRef}>
          <span className="sectionKicker">Selected Work</span><h2>Projects</h2>
          {[{ key: "ml", label: "Machine Learning & AI 🤖" }, { key: "data", label: "Data Analysis 📊" }].map(({ key, label }) => {
            const group = PROJECTS.filter((p) => p.category === key); if (!group.length) return null;
            return (
              <div key={key} className="projectGroup"><h3 className="projectGroupTitle">{label}</h3>
                <div className="projects staggerChildren">
                  {group.map((p) => (
                    <div key={p.id} className="projectCard">
                      <h3 className="projectCardTitle">{p.title}</h3><p className="projectCardShort">{p.short}</p>
                      <div className="projectChipWrap">{p.tech.split(" · ").map((t) => <span key={t} className="projectChip">{t}</span>)}</div>
                      <div className="projectActions">
                        <button className="projectActionBtn projectActionPrimary" onClick={() => setActiveProject(p)} type="button">View Details →</button>
                        {p.github ? <a className="projectActionBtn" href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a> : null}
                        {p.live ? <a className="projectActionBtn" href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a> : null}
                        {p.medium ? <a className="projectActionBtn" href={p.medium} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Medium</a> : null}
                        {p.report ? <a className="projectActionBtn" href={p.report} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Report</a> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ═══════════ CERTIFICATIONS ═══════════ */}
        <SectionDivider />
        <section id="certifications" className="section revealFromTop" ref={certRef}>
          <span className="sectionKicker">Credentials</span><h2>Certifications</h2>
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
        <SectionDivider />
        <section id="contact" className="section revealFromTop" ref={contactRef}>
          <span className="sectionKicker">Get in Touch</span><h2>Contact Me</h2>
          <p className="contactLine">I'm looking for Data Science and ML roles. If you're hiring or just want to talk about a project, drop me a message below or reach out on any of these.</p>

          <div className="contactGrid">
            {/* Left — Form + social icons at the bottom */}
            <div className="contactFormWrap">
              <ContactForm />
              <div className="contactIcons contactIconsBottom">
                {heroSocials.map((s) => {
                  const Icon = iconFor(s?.label); if (!Icon) return null;
                  const href = s?.href ?? "#"; const isMail = href.startsWith("mailto:");
                  return <a key={`contact-${s.label}`} className="contactIconBtn" href={href} target={isMail ? undefined : "_blank"} rel={isMail ? undefined : "noreferrer"} aria-label={s.label} title={s.label}><Icon size={17} /><span className="contactIconText">{s.label}</span></a>;
                })}
              </div>
            </div>

            {/* Right — just the Lottie */}
            <div className="contactSideWrap">
              <div className="contactAnimWrap"><Lottie animationData={contactAnim} loop autoplay className="contactAnim" /></div>
            </div>
          </div>
        </section>

        <footer className="footer footerSplit">
          <div className="footerLeft">Designed & built by me · Animations powered by LottieFiles · When I'm not training models, I'm probably listening to music or playing cricket</div>
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
                </div>
              </div>
            </div>
          </div>
        )}
        <ScrollToTop />
      </div>
    </>
  );
}