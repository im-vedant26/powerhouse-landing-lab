import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Update this with your GitHub repo name
const repoName = "powerhouse-landing-lab"; 

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${repoName}/` : "/",  // 🔹 Ensures correct path on GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
