import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    build: {
      target: 'esnext',
      lib: {
        entry: './src/init.ts',
        formats: ['cjs'],
      },
      outDir: 'bin',
      rollupOptions: {
        output: {
          assetFileNames: (chunkInfo) => {
            return chunkInfo.name || 'index'
          },
        },
        external: [/^node:.*/],
      },
    },
  }
})
