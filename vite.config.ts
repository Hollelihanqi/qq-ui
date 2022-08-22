import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: "Vue",
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "HqUI",
      formats: ["es", "umd", "iife", "esm",]
    }
  }
});