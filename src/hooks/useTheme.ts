import { onMounted } from 'vue'
import { useStore } from 'vuex'

export function swithcTheme() {
  const store = useStore()

  function themeSwtich() {
    store.dispatch('theme/change')
    document.querySelector('#app')?.setAttribute('theme', store.state.theme.theme)
  }

  return {
    change: themeSwtich,
    isDark: () => { return store.state.isDark }
  }
}

export function initTheme() {
  const store = useStore()
  onMounted(() => {
    store.dispatch('theme/init') // 获取localStorage
    document.querySelector('#app')?.setAttribute('theme', store.state.theme.theme)
  })
}