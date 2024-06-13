import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    build: {
      cssCodeSplit: true,
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
