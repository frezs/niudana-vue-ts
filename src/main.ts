import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from '@/router'
import { setupStore } from '@/store'

import './global.less'

async function bootstrap() {
  // 创建实例
  const app = createApp(App)

  // 加载Store
  setupStore(app)

  // 加载router
  setupRouter(app)

  // 加载其他插件

  // 等路由OK
  // https://next.router.vuejs.org/api/#isready
  await router.isReady()

  // 挂载app
  app.mount('#app', true)
}

void bootstrap()