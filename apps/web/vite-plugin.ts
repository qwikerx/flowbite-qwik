import { getExamplesRoutes } from './src/scripts/scan-examples'
import { scanDocsRoutes } from './src/scripts/scan-docs'
import type { Plugin } from 'vite'
import { watch } from 'chokidar'

const path = './src/routes/examples'

export function watchExamplesRoutes(): Plugin {
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    name: 'watch-examples-plugin',
    buildStart() {
      if (isProduction) {
        getExamplesRoutes()
        return
      }

      const watcher = watch(path, {
        persistent: true,
        ignoreInitial: true,
      })

      watcher.on('all', (event, path) => {
        console.log(`${path} file changed due to ${event}`)
        getExamplesRoutes()
      })
    },
  }
}

export function watchDocsRoutes(): Plugin {
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    name: 'watch-docs-plugin',
    buildStart() {
      if (isProduction) {
        scanDocsRoutes()
        return
      }

      const watcher = watch(path, {
        persistent: true,
        ignoreInitial: true,
      })

      watcher.on('all', (event, path) => {
        console.log(`${path} file changed due to ${event}`)
        scanDocsRoutes()
      })
    },
  }
}
