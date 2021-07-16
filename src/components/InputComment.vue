<template>
  <div class="comment-card">
    <div class="comment-card__form">
      <div class="info">
        <div class="nickname">
          <input
            v-model="comment.nickname"
            class="nickname-input comment-card__input"
            type="text"
            placeholder="昵称"
          />
          <span class="icon comment-card__icon iconfont">&#xe617;</span>
        </div>
        <div class="email">
          <input
            v-model="comment.email"
            class="email-input comment-card__input"
            type="text"
            placeholder="邮箱"
          />
          <span class="icon comment-card__icon iconfont">&#xe626;</span>
        </div>
      </div>
      <div class="content">
        <textarea
          v-model="comment.content"
          class="ncontent-input comment-card__input"
          type
          placeholder="说点儿什么吧"
        />
        <span class="icon comment-card__icon iconfont">&#xe615;</span>
      </div>
    </div>
    <button class="comment-card__btn" @click="handleSubmit">提交</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";

defineProps({
  nickname: String,
})

const emits = defineEmits(['submit'])

const comment = reactive({
  nickname: '',
  email: '',
  content: ''
})


function handleSubmit() {

  emits('submit', comment)
  console.log(comment)
  // 清空
  comment.nickname = ''
  comment.email = ''
  comment.content = ''
}

</script>

<style lang="less">
.comment-card {
  display: flex;
  flex-direction: column;
  width: 624px;
  padding: 44px;
  border-radius: var(--border-radius-md);
  background-color: var(--heading-color);
  overflow: hidden;

  &__input,
  &__btn {
    height: 60px;
    width: 100%;
    padding-left: 56px;
    padding-right: 20px;
    margin-bottom: 24px;
    color: var(--text-color-secondary);
    background-color: var(--text-color);
    border-radius: var(--border-radius-md);
    transition: 0.2s;
    opacity: 0.5;
  }
  &__input:focus {
    background-color: var(--text-color);
    color: var(--heighlight-color);
    opacity: 1;
  }

  &__icon {
    display: block;
    margin-left: 16px;
    width: 32px;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    color: var(--text-color-secondary);
  }
  .nickname,
  .email,
  .content {
    .icon {
      position: absolute;
      top: 0;
    }
  }
  .info {
    position: relative;
    display: flex;
    .nickname,
    .email {
      width: 50%;
    }
    div:nth-of-type(1) {
      margin-right: 20px;
    }
  }
  .content {
    position: relative;
    textarea {
      height: 86px;
      padding-top: 20px;
      padding-bottom: 20px;
      resize: none;
    }
  }
  &__btn {
    padding: 0 20px;
    cursor: pointer;
    &:hover {
      background-color: var(--text-color-secondary);
      color: var(--heighlight-color);
    }
  }
}
</style>
