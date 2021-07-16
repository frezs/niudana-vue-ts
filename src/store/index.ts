import type { App } from 'vue'
import { createStore, createLogger } from 'vuex'
import { theme } from '@/store/modules/theme'
import { comment } from '@/store/modules/comment'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    comment,
    theme,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export function setupStore(app: App<Element>) {
  app.use(store)
}