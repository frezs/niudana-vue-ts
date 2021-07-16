import { useRouter } from 'vue-router'
import { REDIRECT_NAME } from '@/router/routes'
import { useTitle as usePageTitle } from '@vueuse/core'
import { watch, unref, ref } from 'vue'
import { setting } from '@/setting'

export function useTitle() {
  const { currentRoute } = useRouter()
  const pageTitle = usePageTitle()

  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      if (route.name === REDIRECT_NAME) {
        return
      }
      const routeTitle = route?.meta?.title as string
      // 加入判断逻辑
      pageTitle.value = `${routeTitle} - ${setting.APP_NAME}`
    },
    { immediate: true }
  )
}

export function getTitle() {
  const { currentRoute } = useRouter()
  const currentTitle = ref<string | undefined>(undefined)
  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      if (route.name === REDIRECT_NAME) {
        return
      }
      currentTitle.value = route?.meta?.title as string
    },
    { immediate: true }
  )
  return currentTitle
}


export function setTitle(val: string) {
  const pageTitle = usePageTitle()
  console.log(pageTitle.value)
  pageTitle.value = `${pageTitle.value}${val}`
}