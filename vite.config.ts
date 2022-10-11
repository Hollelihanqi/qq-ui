/// <reference types="vitest" />
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss"
import Unocss from "unocss/vite"
import {safelist} from './config/unocss'
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
        safelist,
        presets: [presetUno(), presetAttributify(), presetIcons()],
      }
    )
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "HqUI",
      formats: ["es", "umd", "iife","cjs"]
    }
  },
  server:{
    port:1167
  },
  test:{
    globals:true,
    environment:'happy-dom',
    transformMode:{
      web: [/.[tj]sx$/]
    }
  }
});