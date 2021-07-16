import type { AppRouteRecordRaw } from '#/router'

export const REDIRECT_NAME = 'Redirect'

// 主路由
export const mainRoutes: AppRouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    name: 'Tag',
    path: '/tag',
    component: () => import('@/views/Tag.vue'),
    meta: {
      title: 'Tag',
    },
  },
  {
    name: 'Go',
    path: '/go',
    component: () => import('@/views/Go.vue'),
    meta: {
      title: 'Go',
    },
  },
  {
    name: 'Log',
    path: '/log',
    component: () => import('@/views/Log.vue'),
    meta: {
      title: 'Log',
    },
  },
  {
    name: 'Comment',
    path: '/comment',
    component: () => import('@/views/Comment.vue'),
    meta: {
      title: 'Comment',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    name: 'Target',
    path: '/target',
    component: () => import('@/views/Target.vue'),
    meta: {
      title: 'Target',
    },
  },
  {
    name: 'Search',
    path: '/search',
    component: () => import('@/views/Search.vue'),
    meta: {
      title: 'Search',
    }
  }
]

// 登录
export const LoginRoute: AppRouteRecordRaw = {
  name: 'Login',
  path: '/login',
  //component: () => import(),
  meta: {
    title: 'Login',
  },
}

// 重定向
export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  name: REDIRECT_NAME,
  path: '/redirect',
  //component: () => import(),
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      //component: () => (),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
}

// 没找到
export const NOT_FIND_ROUTE: AppRouteRecordRaw = {
  name: REDIRECT_NAME,
  path: '/404',
  //component: LAYOUT,
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      name: REDIRECT_NAME,
      path: '/:path(.*)*',
      //component: () => import(),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
}

//  错误
export const ERROR_ROUTE: AppRouteRecordRaw = {
  name: REDIRECT_NAME,
  path: '/error',
  //component: LAYOUT
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      name: REDIRECT_NAME,
      path: '/error/:path(.*)*',
      //component: () => import(),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
}

export const BaseRoutes = [LoginRoute, ...mainRoutes, REDIRECT_ROUTE]
