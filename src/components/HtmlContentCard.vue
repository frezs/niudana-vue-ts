<template>
  <div class="html-content-card">
    <slot v-if="!data"></slot>
    <div v-else class="content" v-html="data"></div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  data: { type: String, default: null },
})
</script>

<style lang="less">
.html-content-card {
  width: 624px;
  padding: 44px;
  line-height: 24px;
  border-radius: var(--border-radius-md);
  background-color: var(--heading-color);
  overflow: hidden;
  p,
  li {
    margin-bottom: 24px;
    color: var(--heighlight-color);
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  blockquote,
  ul {
    margin: 0;
    padding: 5px;
  }
  strong {
    margin-right: 8px;
    color: var(--primary-color);
  }
  hr {
    margin-bottom: 24px;
    border: 1px var(--text-color) solid;
  }
  em {
    display: inline-block;
    padding: 16px;
    width: 100%;
    font-style: normal;
    color: var(--heighlight-color);
    background: var(--text-color);
    border-radius: var(--border-radius-md);
  }
  a {
    color: var(--primary-color);
  }
  a:hover {
    color: var(--heighlight-color);
  }
}
</style>
