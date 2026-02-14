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

import heroAnim from "./assets/animations/robot.json";
import whatIDoAnim from "./assets/animations/data.json";
import contactAnim from "./assets/animations/contact.json";
import ScrollToTop from "./components/ScrollToTop";

/**
 * Generic one-time reveal hook
 * Adds "isVisible" to the element when it enters viewport.
 */
function useReveal({ threshold = 0.25, rootMargin = "0px 0px -12% 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver is unavailable, show immediately
    if (!("IntersectionObserver" in window)) {
      el.classList.add("isVisible");
      return;
    }

    el.classList.remove("isVisible");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("isVisible");
          io.disconnect(); // run once
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}



export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [theme, setTheme] = useState("dark");

  const closeModal = () => setActiveProject(null);

  // reveal refs
  const whatRef = useReveal({ threshold: 0.35, rootMargin: "0px 0px -15% 0px" });
  const nowRef = useReveal();
  const eduRef = useReveal();
  const expRef = useReveal();
  const skillsRef = useReveal();
  const projectsRef = useReveal();
  const certRef = useReveal();

  // ESC closes modal
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  // load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  // apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const heroSocials = Array.isArray(HERO?.socials) ? HERO.socials : [];

  const iconFor = (label) => {
    if (label === "GitHub") return FaGithub;
    if (label === "LinkedIn") return FaLinkedin;
    if (label === "Medium") return FaMedium;
    if (label === "Email") return MdEmail;
    return null;
  };

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Aekank Patel</div>

        <div className="navRight">
          <nav className="links">
            <a href="#what">What I Do</a>
            <a href="#now">Now</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact Me</a>
          </nav>
          <button
            className={`themeSwitch ${theme === "dark" ? "isDark" : "isLight"}`}
            onClick={toggleTheme}
            type="button"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label="Toggle theme"
          >
            <span className="switchThumb">
              <span className="switchIcon">{theme === "dark" ? "🌙" : "☀️"}</span>
            </span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <main className="hero">
        <div className="heroGrid">
          <div className="heroLeft">
            <h1 className="title">
              {HERO?.headline ?? ""}
              <br />
              I turn <span className="purpleText">messy data</span> into systems that actually{" "}
              <span className="purpleUnderline">make sense</span> 📈
            </h1>

            <p className="subtitle">{HERO?.summary ?? ""}</p>

            <div className="cta">
              {HERO?.resumePath ? (
                <a className="btn primary" href={HERO.resumePath} target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              ) : null}
            </div>

            <div className="socialRow">
              {heroSocials.map((s) => {
                const Icon = iconFor(s?.label);
                if (!Icon) return null;

                const href = s?.href ?? "#";
                const isMail = href.startsWith("mailto:");

                return (
                  <a
                    key={s.label}
                    className="socialDot"
                    href={href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noreferrer"}
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="heroRight">
            <div className="visualCard">
              <Lottie
                animationData={heroAnim}
                loop
                autoplay
                className="visualGif"
              />
            </div>
          </div>
        </div>
      </main>

      {/* WHAT I DO */}
      <section id="what" className="section whatIDo revealSection" ref={whatRef}>
        <div className="whatGrid">
          <div className="whatLeft revealLeft">
            <div className="whatVisual">
              <Lottie
                animationData={whatIDoAnim}
                loop
                autoplay
                className="whatGif"
              />
            </div>
          </div>

          <div className="whatRight revealRight">
            <h2 className="whatTitle">{WHAT_I_DO?.title ?? ""}</h2>
            <p className="whatIntro">{WHAT_I_DO?.intro ?? ""}</p>

            <div className="whatBullets">
              {(WHAT_I_DO?.bullets ?? []).map((b, i) => (
                <p key={i} className="whatBullet">
                  {b}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOW */}
      <section id="now" className="section revealFromTop" ref={nowRef}>
        <h2>{NOW?.title ?? "Now"}</h2>
        {NOW?.subtitle ? <p className="subtitle">{NOW.subtitle}</p> : null}

        <div className="nowGrid">
          {(NOW?.cards ?? []).map((c, i) => (
            <div className="nowCard" key={`${c.title}-${i}`}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.tag ? <span className="nowTag">{c.tag}</span> : null}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section revealFromLeft" ref={eduRef}>
        <h2>Education</h2>

        {(EDUCATION ?? []).map((e) => {
          const detailsArray = Array.isArray(e.details) ? e.details : e.details ? [e.details] : [];
          const courses = Array.isArray(e.courses) ? e.courses : [];
          const marqueeCourses = courses.length ? [...courses, ...courses] : [];

          return (
            <div className="eduCard eduRow" key={`${e.school}-${e.degree}`}>
              <div className="eduLogoWrap">
                {e.logo ? <img className="logoCircle" src={e.logo} alt={`${e.school} logo`} /> : null}
              </div>

              <div className="eduMain">
                <div className="eduTopRow">
                  <div className="eduSchool">{e.school}</div>
                  <div className="eduRight">{e.time ? <div className="eduRightLine">{e.time}</div> : null}</div>
                </div>

                <div className="eduMetaRow">
                  {e.degree ? <div className="eduDegreeLine">{e.degree}</div> : <div />}
                  {e.gpa ? <div className="eduGpaInline">{e.gpa}</div> : null}
                </div>

                {detailsArray.length ? (
                  <ul className="eduBullets">
                    {detailsArray.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                ) : null}

                {courses.length ? (
                  <div className="courseBlock">
                    <div className="courseLabel">Courses</div>

                    <div className="courseMarquee" aria-label="Courses marquee">
                      <div className="courseTrack">
                        {marqueeCourses.map((c, idx) => (
                          <div className="courseChip" key={`${c}-${idx}`}>
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section revealFromLeft" ref={expRef}>
        <h2>Experience</h2>

        {(EXPERIENCE ?? []).map((x) => (
          <div className="expCard expNew" key={`${x.company}-${x.role}`}>
            <div className="expCenter">
              <div className="expCompanyName">{x.company}</div>

              {x.logo ? (
                <div className="expLogoWrap">
                  <img className="expLogo" src={x.logo} alt={`${x.company} logo`} />
                </div>
              ) : null}

              <div className="expRoleBig">{x.role}</div>
              {x.time ? <div className="expTimeCenter">{x.time}</div> : null}
              {x.location ? <div className="expLocationCenter">{x.location}</div> : null}
            </div>

            {x.bullets?.length ? (
              <ul className="expBullets">
                {x.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section id="skills" className="section revealFromTop" ref={skillsRef}>
        <h2>Skills</h2>

        <div className="skillsGrid">
          {(SKILLS ?? []).map((group) => (
            <div key={group.title} className="skillCard">
              <h3 className="skillCardTitle">{group.title}</h3>

              <div className="skillChipWrap">
                {(group.items ?? []).map((item, i) => (
                  <span key={`${group.title}-${i}`} className="skillChip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section revealFromTop" ref={projectsRef}>
        <h2>Projects</h2>

        <div className="gridCenter">
          <div className="projects">
            {(PROJECTS ?? []).map((p) => (
              <button
                key={p.id}
                className="projectCard cardButton"
                onClick={() => setActiveProject(p)}
                type="button"
              >
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                <span className="tech">{p.tech}</span>
                <span className="hint">Click for details →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section revealFromTop" ref={certRef}>
        <h2>Certifications</h2>

        <div className="gridCenter">
          <div className="certGridBig">
            {(CERTIFICATIONS ?? []).map((c) => (
              <a key={c.id} href={c.link} target="_blank" rel="noreferrer" className="certCardBig">
                <div className="certBadgeWrap">
                  {/* If image path is wrong, it won't crash */}
                  {c.badge ? <img src={c.badge} alt={c.title} className="certBadge" /> : null}
                </div>

                <h3 className="certBigTitle">{c.title}</h3>
                <div className="certBigIssuer">{c.issuer}</div>

                <div className="certBtnRow">
                  <span className="certBtn">View Certificate</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contactSection">
        <h2>Contact Me</h2>

        <div className="contactWrap">
          <div className="contactLeft">
            <p className="contactLine">
              Let’s connect — I’m open to internships and full-time opportunities in Data Science / ML.
              If you have something interesting, I’d love to chat.
            </p>

            <div className="contactIcons">
              {heroSocials.map((s) => {
                const Icon = iconFor(s?.label);
                if (!Icon) return null;

                const href = s?.href ?? "#";
                const isMail = href.startsWith("mailto:");

                return (
                  <a
                    key={`contact-${s.label}`}
                    className="contactIconBtn"
                    href={href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noreferrer"}
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon size={20} />
                    <span className="contactIconText">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contactAnimWrap">
            <Lottie
              animationData={contactAnim}
              loop
              autoplay
              className="contactAnim"
            />
          </div>
        </div>
      </section>

      <footer className="footer footerSplit">
        <div className="footerLeft">
          Designed & built by me · Animations powered by LottieFiles (Lottie Simple License)
        </div>
        <div className="footerRight">
          © {new Date().getFullYear()} Aekank Patel
        </div>
      </footer>

      {/* MODAL */}
      {activeProject && (
        <div className="modalOverlay" onClick={closeModal} role="presentation">
          <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="modalHeader">
              <h3 className="modalTitle">{activeProject.title}</h3>
              <button className="modalClose" onClick={closeModal} type="button" aria-label="Close">
                ✕
              </button>
            </div>

            <div className="modalBody">
              <p className="modalTech">{activeProject.tech}</p>
              <p className="modalText" style={{ whiteSpace: "pre-line" }}>
                {activeProject.long}
              </p>

            {activeProject.report ? <div style={{opacity:0.6}}></div> : <div style={{opacity:0.6}}></div>}

              <div className="modalActions">
              {activeProject.github ? (
                <a className="btn primary" href={activeProject.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}

              {activeProject.live ? (
                <a className="btn primary" href={activeProject.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}

              {activeProject.medium ? (
                <a className="btn primary" href={activeProject.medium} target="_blank" rel="noreferrer">
                  Medium
                </a>
              ) : null}

              {activeProject.report ? (
                <a className="btn primary" href={activeProject.report} target="_blank" rel="noreferrer">
                  View Report
                </a>
              ) : null}
            </div>
            </div>
          </div>
        </div>
      )}
      <ScrollToTop />
    </div>
  );
}

