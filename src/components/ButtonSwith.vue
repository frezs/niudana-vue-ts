<template>
  <div class="button-switch" :class="!isDark() ? null : 'dark'" @click="change">
    <button type="button" role="switch" class="switch">
      <div class="switch-handle"></div>
      <span class="switch-inner">{{ !isDark() ? '🌞' : '🌜' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { swithcTheme } from '@/hooks/useTheme'

const { change, isDark } = swithcTheme()
</script>

<style lang="less">
.button-switch {
  position: absolute;
  top: -60%;
  left: calc(50% - 22px);

  .switch {
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 44px;
    min-width: 44px;
    height: 22px;
    line-height: 22px;
    list-style: none;
    font-size: 14px;
    font-variant: tabular-nums;
    font-feature-settings: "tnum", "tnum";
    box-sizing: border-box;
    vertical-align: middle;
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    user-select: none;
    color: var(--seleced-color);
    background-color: var(--heading-color);
    transition: all 0.2s;
    &-handle {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      transition: all 0.2s ease-in-out;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--text-color);
        border-radius: 9px;
        box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
        transition: all 0.2s ease-in-out;
      }
    }
    &-inner {
      display: block;
      margin: 0 5px 0 25px;
      transition: margin 0.2s;
    }
  }
}
.dark {
  .switch {
    &-handle {
      right: 2px;
      left: auto;
    }
    &-inner {
      margin: 0 25px 0 5px;
    }
  }
}
</style>
