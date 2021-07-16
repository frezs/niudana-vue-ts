<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/layout/index.vue'
import { useTitle } from './hooks/useTitle'
import { initTheme } from './hooks/useTheme'

export default defineComponent({
  name: 'App',
  components: { Layout },
  setup() {
    useTitle()
    initTheme()
  },
})
</script>
