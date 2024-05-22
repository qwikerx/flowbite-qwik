import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import * as path from 'path'
import { qwikCity } from '@builder.io/qwik-city/vite'

export default defineConfig(() => {
  return {
    build: {
      cssCodeSplit: true,
      target: 'esnext',
      lib: {
        entry: './src/index.ts',
        name: 'flowbite-qwik',
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
    plugins: [qwikCity({ trailingSlash: false }), qwikVite()],
  }
})
