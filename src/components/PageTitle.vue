<template>
  <div class="page-title">
    <slot></slot>
    <a v-if="hasHref" :href="url">{{ title }}</a>
    <span v-else>{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  hasHref: { type: Boolean, default: false },
  title: String,
  url: String,
})
</script>

<style lang="less" scoped>
.page-title {
  position: relative;
  text-align: center;
  a,
  span {
    font-size: 24px;
    font-weight: 500;
    color: var(--heighlight-color);
  }
  &::after {
    content: "";
    display: block;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    width: 20px;
    height: 4px;
    border-radius: 3px;
    background-color: var(--disabled-color);
    opacity: 0.75;
  }
  a {
    color: var(--link-color);
    cursor: pointer;
    &:hover {
      color: var(--heighlight-color);
    }
  }
}
</style>
