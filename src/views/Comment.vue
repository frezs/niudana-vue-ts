<template>
  <div style="position: relative; margin: 0 auto;">
    <InputComment style="margin-bottom: 40px;" @submit="receiveContent"></InputComment>
    <PageTitle
      style="
      border-top-right-radius: var(--border-radius-md);
      border-top-left-radius: var(--border-radius-md);
      padding-top: 30px; 
      background-color: var(--heading-color); font-size: 18px"
      title="Responses"
    ></PageTitle>
    <HtmlContentCard
      style="border-top-right-radius: 0;border-top-left-radius: 0; padding-bottom: 20px"
      :data="htmlComment"
    >
      <p>
        <em style="text-align: center; color: var(--text-color-secondary);">没有留言</em>
      </p>
    </HtmlContentCard>
    <span style="font-size: 22px;display: inline-block;margin-right: 10px;width: 22px;"></span>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import HtmlContentCard from '@/components/HtmlContentCard.vue'
import InputComment from '@/components/InputComment.vue'
import { useStoreComment } from '@/hooks/useComment'
import PageTitle from '@/components/PageTitle.vue'
import moment from 'moment'

const { addComment, getContent } = useStoreComment()

const htmlComment = ref('')
const commentIndex = ref(0)

loaddingContent()

// 接收内容
function receiveContent(val: any) {
  const currentTime = Date.now()
  const { nickname, email, content } = val
  commentIndex.value++
  // 存入store
  nickname && email && content && addComment({ id: currentTime, nickname, email, content } as any)
  // 添加到DOM
  htmlComment.value = htmlComment.value + generateHtmlText({ id: currentTime, nickname, email, content, index: commentIndex.value })
}

// 生成html内容
function generateHtmlText(val: any) {
  const { nickname, content, id, index } = val
  return `<ul style="margin-bottom: 44px;">
    <li style="color:var(--text-color-secondary);"><span style="font-size: 22px;display: inline-block;margin-right: 10px;width: 22px;" class="iconfont comment-content">&#xe61a;</span>#${index}</li>
    <li style="color:var(--text-color-secondary);"><span style="font-size: 22px;display: inline-block;margin-right: 10px;width: 22px;" class="iconfont comment-content">&#xe617;</span><strong style="color:var(--heighlight-color)">${nickname}</strong>${moment(id).format('YYYY-MM-DD HH:mm:ss')}</li>
    <li style="color:var(--text-color-secondary);"><span style="font-size: 22px;display: inline-block;margin-right: 10px;width: 22px;" class="iconfont comment-content">&#xe615;</span>${content}</li>
    </ul>`
}

// 渲染html
function renderHtml(val: any) {
  htmlComment.value = htmlComment.value + generateHtmlText(val)
}

function loaddingContent() {
  let index = 0
  getContent().forEach((item, id) => {
    index++
    renderHtml({ ...item, id, index })
    commentIndex.value = index
  })
}

</script>