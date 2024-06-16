import { getExamplesRoutes } from './src/scripts/scan-examples'
import { scanComponentsRoutes } from './src/scripts/scan-components'
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

export function watchComponentsRoutes(): Plugin {
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    name: 'watch-components-plugin',
    buildStart() {
      if (isProduction) {
        scanComponentsRoutes()
        return
      }

      const watcher = watch(path, {
        persistent: true,
        ignoreInitial: true,
      })

      watcher.on('all', (event, path) => {
        console.log(`${path} file changed due to ${event}`)
        scanComponentsRoutes()
      })
    },
  }
}
