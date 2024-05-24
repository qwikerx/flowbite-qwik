import { defineConfig } from 'vite'
import pkg from './package.json'
import { qwikVite } from '@builder.io/qwik/optimizer'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// import { qwikCity } from '@builder.io/qwik-city/vite'

const { dependencies = {}, peerDependencies = {} } = pkg as any
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`)
const excludeAll = (obj) => Object.keys(obj).map(makeRegex)

export default defineConfig(() => {
  return {
    build: {
      cssCodeSplit: true,
      target: 'es2020',
      lib: {
        entry: './src/index.ts',
        name: 'flowbite-qwik',
      },
      rollupOptions: {
        // output: {
        //   assetFileNames: (chunkInfo) => {
        //     return chunkInfo.name
        //   },
        // },
        // externalize deps that shouldn't be bundled into the library
        external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src/'),
      },
    },
    // plugins: [qwikCity({ trailingSlash: false }), qwikVite()],
    plugins: [qwikVite(), tsconfigPaths()],
  }
})
