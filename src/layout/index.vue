<template>
  <Header></Header>
  <div class="content">
    <PageTitle :url="titleURL" :title="title">
      <ButtonSwith></ButtonSwith>
    </PageTitle>
    <div class="feed-content">
      <slot></slot>
    </div>
  </div>
  <Footer :links="links" :icps="icps"></Footer>
</template>

<script setup lang="ts">
import { getIcp, getLinks } from '@/api'
import ButtonSwith from '@/components/ButtonSwith.vue'
import PageTitle from '@/components/PageTitle.vue'
import { getTitle } from '@/hooks/useTitle'
import Footer from '@/layout/Footer.vue'
import Header from '@/layout/Header.vue'
import { mitter as mitt } from '@/plugins/mitt'

import { ref } from 'vue'

const links = ref<AppFooterLinkProps[] | undefined>(undefined)
const icps = ref<AppFooterLinkProps[] | undefined>(undefined)

let title = ref<string | undefined>(undefined)
const titleURL = ref('#/log')

title = getTitle()

mitt.on('PageTitle', (cb: any) => {
  cb(title)
})

getLinks().then((data) => {
  links.value = data
})

getIcp().then((data) => {
  icps.value = data
})
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  min-width: 680px;
  margin: 0 auto;

  .feed-content {
    position: relative;
    margin: 40px 0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-items: center;
  }
}

@media screen and (min-width: 1280px) {
  .content {
    width: 1272px;
  }
}

@media screen and (max-width: 1280px) {
  .content {
    width: 948px;
  }
}

@media screen and (max-width: 970px) {
  .content {
    width: 624px;
  }
}
@media screen and (max-width: 900px) {
  .content {
    min-width: 624px;
  }
}
</style>
