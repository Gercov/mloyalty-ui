import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    dts({
      include: ["src/components/*", "src/index.ts"],
      compilerOptions: {
        sourceMap: true,
        declaration: true,
        declarationMap: true,
      },
      exclude: ["vite.config.ts", "main.ts"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/_variables.scss";`,
      },
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
      name: "MloyaltyUI",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
