// @flow
import esbuild from "esbuild";
import flow from "esbuild-plugin-flow";
import alias from "esbuild-plugin-alias";
import {copyFileSync} from "fs";

const prod = process.env.NODE_ENV === 'production';

esbuild
  .build({
    entryPoints: ["src/index.js"],
    outfile: "dist/bundle.js",
    bundle: true,
    minify: prod,
    plugins: [
      alias({react: `${ process.cwd() }/node_modules/preact/compat/dist/compat.mjs`}),
      flow(/\.jsx?$/),
    ],
    target: "es2021",
    jsxFactory: "h",
    jsxFragment: "Fragment",
  })
  .catch(() => process.exit(1))

// facebook/flow#7710 🙏
copyFileSync("src/index.html", "dist/index.html");
copyFileSync("src/favicon.ico", "dist/favicon.ico");
