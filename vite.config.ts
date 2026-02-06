import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@assets": path.resolve(import.meta.dirname, "./attached_assets"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
}));
