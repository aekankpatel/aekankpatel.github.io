import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Sections reachable as real paths (e.g. /contact) on GitHub Pages
const SECTION_ROUTES = ["what", "education", "experience", "tech-stack", "projects", "certifications", "contact"];

const sectionRoutes = () => ({
  name: "section-routes",
  apply: "build",
  closeBundle() {
    const dist = fileURLToPath(new URL("./dist", import.meta.url));
    const index = resolve(dist, "index.html");
    for (const route of SECTION_ROUTES) {
      copyFileSync(index, resolve(dist, `${route}.html`));
    }
    copyFileSync(index, resolve(dist, "404.html"));
  },
});

export default defineConfig({
  plugins: [react(), sectionRoutes()],
  base: "/",
});
