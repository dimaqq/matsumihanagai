// @flow
import esbuild from "esbuild";
import flow from "esbuild-plugin-flow";
import {copyFile, mkdir} from "fs/promises";

await mkdir("dist");

esbuild
  .build({
    entryPoints: ["src/index.js"],
    outfile: "dist/bundle.js",
    bundle: true,
    plugins: [flow(/\.jsx?$/)],
    target: "es2021",
  })
  .catch(() => process.exit(1))

await copyFile("src/index.html", "dist/index.html");
await copyFile("src/favicon.ico", "dist/favicon.ico");
