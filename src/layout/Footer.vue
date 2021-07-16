<template>
  <div class="footer">
    <div class="footer-logo" :style="{ backgroundImage: `url(${logo})` }">
      <a href="/"></a>
    </div>
    <div class="friend-link">
      <a v-for="link,index in links" :key="index" :href="link.url">{{ link.name }}</a>
    </div>
    <div class="copyright">{{ copyright }}</div>
    <div class="site-icp">
      <a v-for="item,index in icps" :key="index" :href="item.url">{{ item.name }}</a>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { PropType } from 'vue'
defineProps({
  links: Array as PropType<AppFooterLinkProps[]>,
  icps: Array as PropType<AppFooterLinkProps[]>,
  logo: { type: String, default: '/src/assets/images/logo.png' },
  copyright: { type: String, default: 'COPYRIGHT © 2021' },
})

</script>

<style lang="less" scoped>
.footer {
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-logo,
.footer-logo a {
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
  background-size: 100%;
}
.friend-link,
.site-icp,
.copyright {
  display: inline-flex;
  margin-bottom: 8px;
}
.copyright {
  color: var(--disabled-color);
}
a {
  position: relative;
  display: block;
  padding: 0 5px;
  color: var(--heighlight-color);
  &:hover {
    color: var(--primary-color);
  }
  span {
    content: "-";
    color: var(--disabled-color);
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    cursor: text;
    margin-left: 5px;
    padding: 0 2px;
  }
}
</style>