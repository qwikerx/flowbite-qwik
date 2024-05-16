import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import * as path from 'path'
import pkg from './package.json'

const { dependencies = {}, peerDependencies = {} } = pkg as any
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`)
const excludeAll = (obj) => Object.keys(obj).map(makeRegex)

export default defineConfig(() => {
  return {
    build: {
      target: 'esnext',
      lib: {
        entry: './src/index.ts',
        name: 'flowbite-qwik',
        fileName: 'index',
      },
      rollupOptions: {
        output: {
          assetFileNames: (chunkInfo) => {
            return chunkInfo.name
          },
        },
        // externalize deps that shouldn't be bundled into the library
        external: [/^node:.*/, '@builder.io/qwik', '@builder.io/qwik-city'],
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src/'),
      },
    },
    plugins: [qwikVite()],
  }
})
