<template>
  <ul class="pagination" @click="currentChange">
    <li class="prev" v-if="showPrev" :class="{ disabled }">{{ prevText }}</li>
    <li
      class="number"
      v-if="countPage && countPage > 0"
      :class="{ active: currentPage === 1, disabled }"
    >1</li>
    <li v-if="jumpPrev" :class="{ disabled }" class="jumpprev">·</li>
    <li
      v-for="page,index in pageArray"
      :key="index"
      :class="{ active: currentPage === page, disabled }"
      class="number"
    >{{ page }}</li>
    <li v-if="jumpNext" :class="{ disabled }" class="jumpnext">·</li>
    <li
      class="number"
      v-if="countPage && countPage > 1"
      :class="{ active: currentPage === countPage, disabled }"
    >{{ countPage }}</li>
    <li class="next" v-if="showNext" :class="{ disabled }">{{ nextText }}</li>
  </ul>
</template>
<script setup lang='ts'>
import { watch, computed, ref } from 'vue'

const props = defineProps({
  total: { type: Number, default: 50 },// 数据大小
  pageSize: { type: Number, default: 10 }, // 分页大小
  // pageSizes: { type: Array as PropType<number[]>, default: [10, 20, 30, 40, 50, 100] }, // 分页选项
  prevText: { type: String, default: 'PREV' },
  nextText: { type: String, default: 'NEXT' },
  disabled: { type: Boolean, default: false },
  pageCount: { type: Number, default: 7 }
})

const currentPage = ref<number>(1)
const jumpPrev = ref(false)
const jumpNext = ref(false)
const showPrev = ref(false)
const showNext = ref(true)

// 页码计算
const pageArray = computed<number[] | undefined>(() => pageArrayComputed())

// 页数计算
const countPage = computed(() => props.total && Math.ceil(props.total / props.pageSize))

// 页码选中监控
watch(
  () => currentPage.value,
  (active, current) => {

  })

// 传值事件
const emit = defineEmits(['size-change', 'current-change', 'prev-click', 'next-click'])

// 当前页码改变
function currentChange({ target }: any) {
  const { tagName, className, innerText } = target
  // 父标签
  if (tagName == 'UL') return
  if (className.includes('active')) return

  let pageCount = props.pageCount

  if (pageCount < 7 || pageCount > 21) {
    throw ('props parmes pageCount is max 7 min 21')
  }

  let currentOffset = parseInt(String(pageCount / 2)) + 1
  let newPage
  let current

  // jumpprev
  if (className.includes('jumpprev')) {
    newPage = currentPage.value - currentOffset
  }
  // jumpnext
  if (className.includes('jumpnext')) {
    newPage = currentPage.value + currentOffset
  }

  // prev
  if (className.includes('prev')) {
    newPage = currentPage.value - 1
    emit('prev-click', currentPage.value)
  }

  // pnext
  if (className.includes('next')) {
    newPage = currentPage.value + 1
    emit('prev-click', currentPage.value)
  }

  // number
  if (className.includes('number')) {
    newPage = Number(innerText)
    current = Number(currentPage)
    // 设置
    if (!isNaN(newPage) && newPage < 1) { newPage = 1 }

    // 设置
    if (!isNaN(newPage) && newPage > current) { newPage = current }

  }
  if (newPage !== current) {
    currentPage.value = Number(newPage)
    //传值
    emit('current-change', newPage)
  }
}

// 页码数组计算
function pageArrayComputed() {

  if (!props.total) {
    return
  }

  if (props.total <= 2 * props.pageSize) {
    return
  }

  let pageCount = Math.ceil(props.total / props.pageSize) //计算
  let pageOffset = pageCount - 2
  let currentOffset = parseInt(String(props.pageCount / 2))
  let pageStart: number = 2
  let pageArray: number[]

  if (pageOffset > props.pageCount - 2) {
    pageOffset = props.pageCount - 2
  }

  // 跳转
  if (pageCount > props.pageCount) {
    // 当前页 <= 页码显示数/2 + 1 或者 当前页 <= 总页数 - 页码显示数/2 - 尾页
    if (currentPage.value <= currentOffset + 1 || currentPage.value <= pageCount - currentOffset - 1) {
      jumpNext.value = true
      jumpPrev.value = false
    }
    // 当前页 > 页码显示数/2
    if (currentPage.value > currentOffset + 1) {
      jumpPrev.value = true
      pageStart = currentPage.value - currentOffset + 1
    }
    // 总页数 - 页码显示数/2 - 尾页
    if (currentPage.value > pageCount - currentOffset - 1) {
      jumpNext.value = false
      // 总页数 - 页码显示数/2 - 收尾2页
      pageStart = pageCount - currentOffset - 2
    }
  }

  if (currentPage.value > 1 && !showPrev.value) {
    showPrev.value = true
  }

  if (currentPage.value < pageCount && !showNext.value) {
    showNext.value = true
  }

  if (currentPage.value === 1) {
    showPrev.value = false
  }

  if (currentPage.value === pageCount) {
    showNext.value = false
  }

  pageArray = Array.from(Array.from(Array(pageOffset), (v, k) => k), x => x + pageStart) // 返回数组

  return pageArray
}

</script>

<style lang="less">
.pagination {
  display: inline-flex;
  width: 100%;
  justify-content: center;
  height: 60px;
  line-height: 60px;
  li {
    display: block;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 500;
    color: var(--heighlight-color);
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
    &.jumpnext,
    &.jumpprev {
      padding: 0 10px;
    }
  }
  .active {
    color: var(--primary-color);
    &:hover {
      cursor: default;
    }
  }
  .disabled {
    cursor: no-drop;
    &:hover {
      color: var(--heighlight-color);
    }
  }
}
</style>