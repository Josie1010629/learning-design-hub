import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
  base: "/learning-design-hub/",
  plugins: [
    tsconfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    {
      // GitHub Pages SPA fallback — mirror index.html to 404.html so
      // deep links like /learning-design-hub/projects/foo resolve on refresh.
      name: "spa-github-pages-404",
      apply: "build",
      closeBundle() {
        const src = resolve("dist/index.html");
        const dest = resolve("dist/404.html");
        if (existsSync(src)) copyFileSync(src, dest);
      },
    },
  ],
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});
