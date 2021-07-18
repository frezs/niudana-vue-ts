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
  <Pagination @current-change="changeFeeds"></Pagination>
</template>

<script setup lang="ts">
import { getFeeds } from '@/api/index'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FeedCard from '@/components/FeedCard.vue'
import Pagination from '@/components/Pagination.vue'

const feeds = ref<AppFeedCardProps[] | null>(null)
const router = useRouter()

void getHomeData()

async function getHomeData() {
  feeds.value = await getFeeds()
}

async function changeFeeds(page: number) {
  feeds.value = await getFeeds(page)
}

function cardClick(val: any) {
  // 传递参数
  router.push({ name: 'Go', params: { card: JSON.stringify(val) } })
}

// 全局事件写法，创建一个事件
// import { mitter } from '@/plugins/mitt'

// function cardClick(val: any) {
//   // 传递参数
//   router.push({ name: 'Go', })
//   mitter.on('Go', (callback: any) => {
//     callback(JSON.stringify(val))
//   })
// }

</script>