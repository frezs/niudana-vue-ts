<template>
  <div style="position: relative; margin: 0 auto;">
    <HtmlContentCard>
      <blockquote style="margin-bottom: 60px;">
        <p>即将离开 {{ setting.APP_NAME }} 是否要继续访问</p>
        <p>
          <em style="color:var(--text-color-secondary)">{{ targetUrl }}</em>
        </p>
      </blockquote>
      <ButtonGo :url="targetUrl">继续访问</ButtonGo>
    </HtmlContentCard>
  </div>
</template>

<script setup lang='ts'>
import { ref, unref } from 'vue'
import HtmlContentCard from '@/components/HtmlContentCard.vue'
import ButtonGo from '@/components/ButtonGo.vue'
import { useRouter } from 'vue-router'
import { setting } from '@/setting'

const targetUrl = ref()

const router = useRouter()
targetUrl.value = unref(router.currentRoute).query?.url

</script>