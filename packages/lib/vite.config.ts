import { defineConfig } from 'vite'
// @ts-ignore
import pkg from './package.json'
import { qwikVite } from '@builder.io/qwik/optimizer'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'

const { dependencies = {}, peerDependencies = {} } = pkg as any
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`)
const excludeAll = (obj) => Object.keys(obj).map(makeRegex)

export default defineConfig(() => {
  return {
    build: {
      cssCodeSplit: true,
      target: 'esnext',
      lib: {
        entry: './src/index.ts',
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
        external: [
          /^node:.*/,
          ...excludeAll(dependencies),
          ...excludeAll(peerDependencies),
          // used in Button to determine if it's passed a Link component
          '@builder.io/qwik-city',
        ],
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src/'),
      },
    },
    plugins: [tailwindcss(), qwikVite(), tsconfigPaths()],
  }
})
