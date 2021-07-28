const esbuild = require('esbuild')
const flow = require('esbuild-plugin-flow')

esbuild
  .build({
    entryPoints: ['src/index.js'],
    outfile: 'dist/bundle.js',
    bundle: true,
    //plugins: [flow(/\.flow\.jsx?$/)],
    plugins: [flow(/\.jsx?$/)],
    target: "es2021",
  })
  .catch(() => process.exit(1))
