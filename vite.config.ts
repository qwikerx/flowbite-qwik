import { defineConfig } from 'vite'
import pkg from './package.json'
import { qwikVite } from '@builder.io/qwik/optimizer'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

import { qwikCity } from '@builder.io/qwik-city/vite'

const { dependencies = {}, peerDependencies = {} } = pkg
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`)
const excludeAll = (obj) => Object.keys(obj).map(makeRegex)

export default defineConfig(() => {
  return {
    build: {
      cssCodeSplit: true,
      target: 'es2020',
      lib: {
        entry: './src/lib/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format) => `flowbite.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        output: {
          assetFileNames: (chunkInfo) => {
            return chunkInfo.name || 'index'
          },
        },
        // externalize deps that shouldn't be bundled into the library
        external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src/'),
      },
    },
    plugins: [
      qwikCity({ trailingSlash: false, routesDir: 'src/docs/routes' }),
      qwikVite(),
      tsconfigPaths(),
      dts({
        outDir: 'lib-types',
        entryRoot: 'src/lib',
      }),
    ],
  }
})
