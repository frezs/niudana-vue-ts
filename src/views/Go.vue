<template>
  <div style="position: relative; margin: 0 auto;">
    <JumpCard
      :title="cards?.title"
      :url="cards?.url"
      :image="cards?.image"
      :tags="cards?.tags"
      :desc="cards?.desc"
      :updata-time="cards?.updateTime"
    ></JumpCard>
    <InputComment></InputComment>
  </div>
</template>

<script setup lang='ts'>
import JumpCard from '@/components/JumpCard.vue'
import InputComment from '@/components/InputComment.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { currentRoute } = router

const cards: AppFeedCardProps = computed(() => {
  // 接收参数
  const { card = '{}' } = currentRoute.value.params
  if (card && card === '{}') {
    router.push({ name: 'Home' })
  }
  return JSON.parse(card as string)
}) as any

</script>