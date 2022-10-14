/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { safelist } from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export const config = {
  plugins: [
    vue(),
    vueJsx(),
    Unocss({
      safelist,
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  build: {
    rollupOptions,
    minify: "terser", // 启用打包压缩
    cssCodeSplit: true, // 启用 css 代码分隔
    sourcemap: true, // 生成 source map 文件
    lib: {
      entry: "./src/entry.ts",
      name: "HqUI",
      fileName: "hq-ui",
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
  server: {
    port: 1167,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
};
// https://vitejs.dev/config/
export default defineConfig(config as UserConfig);
