<template>
  <div class="button-go" @click="onClick">
    <a :href="url">
      <span class="text">
        <slot></slot>
      </span>
      <span v-if="go" class="go iconfont">&#xe65e;</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useTarget } from '@/hooks/useTarget'
const props = defineProps({
  go: { type: Boolean, default: true },
  url: String,
})

function onClick() {
  props?.url && useTarget(props.url)
}

</script>

<style lang="less">
.button-go {
  width: 100%;
  height: 60px;
  a {
    display: inline-flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 60px;
    text-align: center;
    transition: all 0.3s;
    color: var(--heighlight-color);
    border-radius: var(--border-radius-md);
    background-color: var(--primary-color);
    transition: cubic-bezier(0.47, 0, 0.745, 0.715);
    &:hover {
      //opacity: 0.8;
      .go {
        transform: translateX(2px);
      }
      .text {
        transform: translateX(-1px);
      }
    }
    .go {
      margin: 0;
      margin-left: 5px;
      display: block;
      width: 28px;
      height: 32px;
      font-size: 18px;
      line-height: 32px;
      color: var(--heighlight-color);
      transition: all 0.3s;
    }
  }
}
</style>
