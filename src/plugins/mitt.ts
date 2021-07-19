import type { App } from 'vue'
import mitt from 'mitt'

export const mitter = mitt()

export const mittPlugin = {
  install: (app: App<Element>, alias: string = '$mitt') => {
    return app.config.globalProperties[alias] = mitter
  }
}

export function setupMitt(app: App<Element>) {
  app.use(mittPlugin)
}