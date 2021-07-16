<template>
  <div class="tag-card">
    <div class="tag-name">
      <a :href="url">{{ name }}</a>
      <span>{{ tag }}</span>
    </div>
    <div class="tag-count">
      <span>{{ count }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  tag: String,
  url: String,
  count: Number,
})
</script>

<style lang="less" scoped>
.tag-card {
  position: relative;
  display: flex;
  padding: 24px;
  width: 300px;
  height: 96px;
  margin: 0 0 24px 24px;
  justify-content: space-between;
  border-radius: var(--border-radius-lg);
  background-color: var(--heading-color);
  overflow: hidden;
  &:hover {
    background-color: var(--seleced-color);
  }
  .tag-name {
    display: flex;
    flex-direction: column;
    a {
      display: block;
      margin-bottom: 10px;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      cursor: pointer;
      color: var(--heighlight-color);
      &:hover {
        color: var(--primary-color);
      }
    }
    span {
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      color: var(--text-color-secondary);
      &:hover {
        color: var(--disabled-color);
      }
    }
  }
  .tag-count {
    height: 48px;
    span {
      display: block;
      font-size: 60px;
      line-height: 48px;
      font-weight: 700;
      color: var(--text-color-secondary);
      overflow: hidden;
    }
  }
}

@media screen and (min-width: 1280px) {
  .tag-card:nth-of-type(4n + 1) {
    margin-left: 0;
  }
}
@media screen and(min-width: 970px) and (max-width: 1280px) {
  .tag-card:nth-of-type(3n + 1) {
    margin-left: 0;
  }
}
@media screen and(min-width: 600px) and (max-width: 970px) {
  .tag-card:nth-of-type(2n + 1) {
    margin-left: 0;
  }
}

@media screen and(max-width: 600px) {
  .tag-card:nth-of-type(2n + 1) {
    margin-left: 0;
  }
}
</style>
