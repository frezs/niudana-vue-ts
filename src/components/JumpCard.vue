<template>
  <div class="jump-card">
    <div class="jump-card__header">
      <img class="cover" :src="image" :alt="title" />
    </div>
    <slot></slot>
    <div class="jump-card__content">
      <div class="desc-content jump-card__item">
        <div class="left">
          <span class="desc-icon iconfont">&#xe60b;</span>
        </div>
        <div class="right">
          <span>{{ desc }}</span>
        </div>
      </div>
      <div class="tag-content jump-card__item">
        <div class="left">
          <span>标签</span>
        </div>
        <div class="right">
          <a v-for="(tag, index) in tags" :key="index" :href="tag.url">
            {{
              tag.title
            }}
          </a>
        </div>
      </div>
      <div class="info-content jump-card__item">
        <div class="left">
          <span>更新</span>
        </div>
        <div class="right">
          <span>{{ updataTime }}</span>
        </div>
      </div>
    </div>
    <ButtonGo :url="url">{{ title }}</ButtonGo>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import ButtonGo from './ButtonGo.vue'

defineProps({
  image: String,
  title: String,
  desc: String,
  url: String,
  updataTime: String,
  tags: Array as PropType<AppJumpCardTagProps[]>,
})

</script>

<style lang="less" scoped>
.jump-card {
  display: flex;
  flex-direction: column;
  width: 624px;
  padding: 44px;
  margin-bottom: 40px;
  border-radius: var(--border-radius-lg);
  background-color: var(--heading-color);
  overflow: hidden;
  &__header {
    display: flex;
    margin-bottom: 40px;
    height: 96px;
    border-radius: var(--border-radius-md);
    justify-content: center;
    overflow: hidden;
    .cover {
      display: block;
      height: 96px;
      width: 96px;
      border-radius: var(--border-radius-md);
      overflow: hidden;
    }
  }
  &__content {
    margin-bottom: 40px;
  }
  &__item {
    display: flex;
    margin-bottom: 20px;
    font-weight: 500;
    line-height: 32px;

    .left {
      color: var(--text-color-secondary);
      margin-right: 20px;
    }
    .right {
      color: var(--disabled-color);
    }
  }

  .desc-content {
    .left .desc-icon {
      display: block;
      width: 32px;
      height: 32px;
      font-size: 32px;
      line-height: 32px;
    }
    .right span {
      color: var(--heighlight-color);
    }
  }
  .tag-content .right {
    a {
      margin-right: 10px;
      color: var(--primary-color);
      &:hover {
        color: var(--heighlight-color);
      }
    }
  }
}
</style>
