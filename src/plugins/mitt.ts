import type { App } from 'vue'
import mitt from 'mitt'

export const mitter = mitt()

export const mittPlugin = {
  install: (app: App<Element>, alios: string = '$mitt') => {
    return app.config.globalProperties[alios] = mitter
  }
}

export function setupMitt(app: App<Element>) {
  app.use(mittPlugin)
}