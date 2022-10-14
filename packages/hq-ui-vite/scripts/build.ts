import * as fs from "fs-extra";
import { resolve } from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";

const buildAll = async () => {
  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);
  // 复制 package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "hq-ui.umd.js";
  packageJson.module = "hq-ui.esm.js";
  fs.outputFile(
    resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md 文件
  fs.copyFileSync(
    resolve("./README.md"),
    resolve(config.build.outDir + "/README.md")
  );

  const srcDir = resolve(__dirname, "../src/");
  // 读取 src 下的目录内容
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含 index.ts
      const componentDir = resolve(srcDir, name);
      // 检查文件是否是文件夹
      const isDir = fs.lstatSync(componentDir).isDirectory();
      // 返回是文件夹，且当前文件夹下有 index.ts 文件的目录
      return isDir && fs.readdirSync(componentDir);
    })
    .forEach(async (name) => {
      const outDir = resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: resolve(srcDir, name),
          name,
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir,
      };
      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);
      fs.outputFile(
        resolve(outDir, `package.json`),
        `{
            "name":"hq-ui-vite/${name}",
            "main":"index.umd.js",
            "module":"index.esm.js"
        }`,
        `utf-8`
      );
    });
};

buildAll();
