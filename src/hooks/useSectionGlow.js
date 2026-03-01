import { useEffect } from "react";

const SECTION_COLORS = {
  hero:           "rgba(139, 92, 246, 0.13)",
  what:           "rgba(99,  102, 241, 0.11)",
  now:            "rgba(167, 139, 250, 0.11)",
  education:      "rgba(96,  165, 250, 0.10)",
  experience:     "rgba(192, 132, 252, 0.11)",
  "tech-stack":   "rgba(34,  211, 238, 0.08)",
  projects:       "rgba(139, 92,  246, 0.15)",
  certifications: "rgba(251, 191, 36,  0.07)",
  contact:        "rgba(139, 92,  246, 0.09)",
};

const SECTION_ACCENTS = {
  hero:           "#8b5cf6",
  what:           "#6366f1",
  now:            "#a78bfa",
  education:      "#60a5fa",
  experience:     "#c084fc",
  "tech-stack":   "#22d3ee",
  projects:       "#8b5cf6",
  certifications: "#fbbf24",
  contact:        "#8b5cf6",
};

export function useSectionGlow() {
  useEffect(() => {
    const sections = Object.keys(SECTION_COLORS)
      .map((id) => ({
        id,
        el: id === "hero"
          ? document.querySelector("main.hero")
          : document.getElementById(id),
      }))
      .filter((s) => s.el);

    const setGlow = (id) => {
      document.body.style.setProperty("--hero-glow", SECTION_COLORS[id] ?? SECTION_COLORS.hero);
      // with this — only background glow, no bar touching:
    const setGlow = (id) => {
     document.body.style.setProperty("--hero-glow", SECTION_COLORS[id] ?? SECTION_COLORS.hero);
    };
    };

    setGlow("hero");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || "hero";
            setGlow(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
  }, []);
}