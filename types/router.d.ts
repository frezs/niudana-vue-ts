import type { RouteRecordRaw, RouteMeta } from 'vue-router'

// meta
interface AppRouteMeta extends RouteMeta {
  title: string
}

// router and router children
interface AppRouteRecordRaw
  extends Omit<RouteRecordRaw, 'redirect' | 'children'> {
  meta?: AppRouteMeta
  children?: AppRouteRecordRaw[]
}
