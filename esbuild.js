const esbuild = require('esbuild')

const defaultConfig = {
  entryPoints: ['src/index.jsx'],
  bundle: true,
}

esbuild.build({
  ...defaultConfig,
  format: 'esm',
  outfile: './dist/index.mjs',
})

esbuild.build({
  ...defaultConfig,
  format: 'cjs',
  outfile: './dist/index.js',
})
