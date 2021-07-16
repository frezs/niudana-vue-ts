<template>
  <div style="position: relative; margin: 0 auto">
    <HtmlContentCard :data="html"></HtmlContentCard>
  </div>
</template>

<script setup lang="ts">
import HtmlContentCard from "@/components/HtmlContentCard.vue"
import { ref } from "vue"
import { getLogs } from '@/api'

const html = ref(undefined)

getLogs().then(data => {
  html.value = data[0]
})

</script>
