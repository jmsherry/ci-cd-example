import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore its a demo app straight from the docs
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
