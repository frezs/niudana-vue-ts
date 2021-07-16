import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteRecordRaw } from '#/router'

import { createRouter, createWebHashHistory } from 'vue-router'
import { BaseRoutes, LoginRoute, REDIRECT_NAME } from './routes'

// 路由白名单
const WHITE_NAME_LIST = [LoginRoute.name, REDIRECT_NAME]

// 动态路由
export let isDynamicLoadRouter: boolean = false

export let DynamicLoadRoutes: AppRouteRecordRaw[] = []

// 创建router
export const router = createRouter({
  // 哈希路由
  history: createWebHashHistory(),
  // 注册路由，可动态加载路由
  routes: isDynamicLoadRouter
    ? (DynamicLoadRoutes as RouteRecordRaw[])
    : (BaseRoutes as RouteRecordRaw[]),
})

// 移除白名单路由/重置
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    // 获取路由名称
    const { name } = route
    // 判断是否在白名单
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      // 卸载路由
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

// 动态加载路由
export function dynamicLoadRouter(path: string) {
  if (!path) throw new Error('path is string and not null')
  isDynamicLoadRouter = true
  // 动态加载路由逻辑
}

// 加载router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
