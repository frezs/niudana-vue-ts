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
import { searchFeeds } from '@/api/index'
import { ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import FeedCard from '@/components/FeedCard.vue'

const feeds = ref<AppFeedCardProps[] | null>(null)
const router = useRouter()

const { word } = unref(router.currentRoute)?.query

void getSearchFeeds()

async function getSearchFeeds() {
  feeds.value = await searchFeeds(word as string)
}

function cardClick(val: any) {
  // 传递参数
  router.push({ name: 'Go', params: { card: JSON.stringify(val) } })
}

</script>