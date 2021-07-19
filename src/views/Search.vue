<template >
  <div style="display: flex; flex-wrap: wrap;">
    <FeedCard
      v-for="(feed,index) in feeds"
      :key="index"
      :title="feed.title"
      :image="feed.image"
      :url="feed.url"
      :desc="feed.desc"
      :tags="feed.tags"
      :update-time="feed.updateTime"
      @card-click="cardClick"
    ></FeedCard>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { searchFeeds } from '@/api/index'
import { ref, unref, watch } from 'vue'
import { useRouter } from 'vue-router'
import FeedCard from '@/components/FeedCard.vue'
import { mitter as mitt } from '@/plugins/mitt'
import { getTitle } from '@/hooks/useTitle'

const feeds = ref<AppFeedCardProps[] | null>(null)
const word = ref()
const router = useRouter()
const { currentRoute } = router

const pageTitle = getTitle().value

word.value = currentRoute.value.query?.word

watch(
  () => currentRoute.value.query,
  (val) => {
    word.value = val?.word
    // 有word参数的情况，重新触发搜索
    Reflect.has(currentRoute.value.query, 'word') && loadSearch()
  }
)

void loadSearch()

function loadSearch() {
  getSearchFeeds()
  mitt.emit('PageTitle', (val: Ref) => {
    val.value = `${pageTitle}:${word.value}`
  })
}

async function getSearchFeeds() {
  feeds.value = await searchFeeds(word.value)
}

function cardClick(val: any) {
  // 传递参数
  router.push({ name: 'Go', params: { card: JSON.stringify(val) } })
}

</script>