/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "c8",
      all: true,
      include: ["src/**/*"],
      exclude: ["src/vite-env.d.ts", "src/types/index.tsx", "src/interfaces/index.tsx"],
      skipFull: true,
      reporter: "text",
    },
  },
});
