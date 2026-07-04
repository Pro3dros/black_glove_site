import { defineConfig } from "@tanstack/start/config";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [
      viteReact(),
      tsconfigPaths(),
    ],
  },
  server: {
    preset: "netlify", // Εδώ λέμε στο Netlify πώς να χτίσει το site
  },
});