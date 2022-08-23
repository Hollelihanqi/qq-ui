import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss"
import Unocss from "unocss/vite"
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
    vueJsx(),
    Unocss(
      {
        presets: [presetUno(), presetAttributify(), presetIcons()],
      }
    )
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