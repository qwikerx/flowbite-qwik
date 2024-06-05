import { getExamplesRoutes } from './src/scripts/scan-examples'
import type { Plugin } from 'vite'
import chokidar from 'chokidar'

const path = './src/routes/examples'

export default function watchExamplesRoutes(): Plugin {
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    name: 'watch-examples-plugin',
    buildStart() {
      if (isProduction) {
        getExamplesRoutes()
        return
      }

      const watcher = chokidar.watch(path, {
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
