<template>
  <div style="position: relative; margin: 0 auto;">
    <HtmlContentCard style="margin-bottom: 40px;" :data="htmlComment">
      <p>
        <em style="text-align: center; color: var(--text-color-secondary);">没有留言</em>
      </p>
    </HtmlContentCard>
    <InputComment @submit="receiveContent"></InputComment>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import HtmlContentCard from '@/components/HtmlContentCard.vue'
import InputComment from '@/components/InputComment.vue'
import { useStoreComment } from '@/hooks/useComment'

const { addComment, getContent } = useStoreComment()

const htmlComment = ref('')

loaddingContent()

// 接收内容
function receiveContent(val: any) {
  const { nickname, email, content } = val
  // 存入store
  nickname && email && content && addComment({ nickname, email, content } as any)
  // 添加到DOM
  htmlComment.value = htmlComment.value + generateHtmlText({ nickname, email, content })
}

// 生成html内容
function generateHtmlText(val: any) {
  const { nickname, email, content } = val
  return `<blockquote style="margin-bottom: 20px;"><p><strong>${nickname}</strong>${email}</p><p><em>${content}</em></p></blockquote>`
}

// 渲染html
function renderHtml(val: any) {
  htmlComment.value = htmlComment.value + generateHtmlText(val)
}

function loaddingContent() {
  getContent().forEach(item => renderHtml(item))
}

</script>