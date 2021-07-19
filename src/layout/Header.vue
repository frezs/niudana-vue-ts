<template>
  <header class="header">
    <h1 class="header-site">
      <a class="site-logo" href="/"></a>
      <span class="sub-logo"></span>
    </h1>
    <div class="header-content">
      <div class="header-menu nav">
        <a href="/">
          <span class="iconfont">&#xe65d;</span>
        </a>
      </div>
      <form class="header-search" @keypress="handelKeyEvent" @click="handelClick">
        <input v-model="search" type="text" placeholder="SEARCH..." />
        <span class="iconfont search-btn">&#xe616;</span>
      </form>
      <div class="header-menu tag">
        <a href="#/tag">
          <span class="iconfont">&#xe655;</span>
        </a>
      </div>
    </div>
    <slot></slot>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const search = ref<string | null>(null)
const router = useRouter()

// 有bug? why?
function handelKeyEvent(e: KeyboardEvent) {
  if (e.code.toUpperCase() === 'ENTER' && search.value) {
    router.push({ path: `/search?${search.value}`, query: { word: search.value } })
    search.value = ''
  }
}

function handelClick() {
  search.value && router.push({ path: `/search?${search.value}`, query: { word: search.value } })
  search.value = ''
}

</script>

<style lang="less">
.header {
  padding: 48px 0;
  font-size: 24px;
  color: var(--main-font-color);

  .header-site {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .site-logo {
      display: block;
      width: 128px;
      height: 128px;
      background: center/128px;
      background-image: url("@/assets/images/logo.png");
    }
    .sub-logo {
      display: block;
      margin-top: 8px;
      margin-bottom: 48px;
      width: 200px;
      height: 40px;
      background: center/200px;
      background-image: url("@/assets/images/logo-sub.png");
    }
  }
  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .header-menu {
      height: 64px;
      width: 64px;
      cursor: pointer;
      background-color: var(--heading-color);
      border-radius: var(--border-radius-lg);
      &:hover {
        background-color: var(--text-color);
      }
    }
    .iconfont {
      line-height: 64px;
      font-size: 24px;
    }
    .nav {
      margin-right: 20px;
    }
    .tag {
      margin-left: 20px;
    }
    .header-search {
      position: relative;
      display: block;
      height: 60px;
      input {
        width: 452px;
        height: 100%;
        padding: 0 50px;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        cursor: text;
        color: var(--text-color-secondary);
        background-color: var(--heading-color);
        border-radius: var(--border-radius-lg);
        transition: 0.2s;
        &:focus {
          background-color: var(--text-color);
          color: var(--heighlight-color);
        }
      }
      .search-btn {
        position: absolute;
        display: inline-block;
        right: 0px;
        width: 68px;
        color: var(--text-color-secondary);
        cursor: pointer;
      }
    }
  }
}
</style>
