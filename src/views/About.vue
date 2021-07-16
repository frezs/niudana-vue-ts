<template>
  <div style="position: relative; margin: 0 auto;">
    <HtmlContentCard>
      <blockquote style="margin-bottom: 60px;">
        <p>
          <strong>关于{{ setting.APP_NAME }}</strong>
        </p>
        <p>
          <em>{{ description }}</em>
        </p>
      </blockquote>
    </HtmlContentCard>
  </div>
</template>

<script setup lang='ts'>
import HtmlContentCard from '@/components/HtmlContentCard.vue'
import { setting } from '@/setting'

const description = `${setting.APP_NAME} 设计导航`

</script>