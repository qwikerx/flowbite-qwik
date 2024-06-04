import { defineConfig } from 'vitest/config'
import * as path from 'path'

export default defineConfig({
  test: {
    testTimeout: 6000,
  },
  resolve: {
    alias: {
      '~': path.resolve(process.cwd(), 'src/'),
    },
  },
})
