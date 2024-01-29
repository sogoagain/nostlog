import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      exclude: ["out", ".next", "*.config.js", "*.config.mjs", "**/layout.jsx"],
    },
    exclude: [...configDefaults.exclude, "**/__e2e__/**"],
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./") }],
  },
});
