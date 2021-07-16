<template>
  <div class="feed-card" @click="onClick">
    <div class="feed-content">
      <a class="feed-cover" :href="url" @click.prevent>
        <img :src="image" :alt="title" />
      </a>
      <a class="feed-title" :href="url" @click.prevent>{{ title }}</a>
      <div class="feed-desc">
        <span>{{ desc }}</span>
      </div>
      <div class="feed-tag">
        <a class="tag" v-for="(tag, index) in tags" :key="index" :href="tag.url">{{ tag.title }}</a>
      </div>
    </div>
    <div class="feed-background" :style="{ backgroundImage: `url(${image})` }"></div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
const props = defineProps({
  image: String,
  url: String,
  title: String,
  desc: String,
  updateTime: String,
  tags: Array as PropType<AppFeedCardTagProps[]>,
})
const emits = defineEmits(['card-click'])

function onClick() {
  emits('card-click', props)
}

</script>

<style lang="less" scoped>
.feed-card {
  position: relative;
  padding: 24px;
  width: 300px;
  height: 258px;
  margin: 0 0 24px 24px;
  border-radius: var(--border-radius-lg);
  background-color: var(--heading-color);
  overflow: hidden;
  &:hover {
    background-color: var(--seleced-color);
  }
  .feed-content {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2;
    .feed-cover {
      height: 48px;
      width: 48px;
      margin-bottom: 20px;
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
    .feed-title {
      display: block;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      color: var(--heighlight-color);
      &:hover {
        color: var(--link-color);
      }
    }
    .feed-desc {
      margin: 20px 0;
      font-size: 16px;
      line-height: 24px;
      color: var(--disabled-color);
    }
    .feed-tag {
      line-height: 24px;
      a {
        margin-right: 8px;
        font-size: 16px;
        color: var(--text-color-secondary);
        &:hover {
          color: var(--heighlight-color);
        }
      }
    }
  }
  .feed-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-size: 200%;
    filter: blur(50px);
    opacity: 0.05;
    z-index: 1;
  }
}
@media screen and (min-width: 1280px) {
  .feed-card:nth-of-type(4n + 1) {
    margin-left: 0;
  }
}
@media screen and(min-width: 970px) and (max-width: 1280px) {
  .feed-card:nth-of-type(3n + 1) {
    margin-left: 0;
  }
}
@media screen and(min-width: 600px) and (max-width: 970px) {
  .feed-card:nth-of-type(2n + 1) {
    margin-left: 0;
  }
}
@media screen and(max-width: 600px) {
  .feed-card:nth-of-type(2n + 1) {
    margin-left: 0;
  }
}
</style>
