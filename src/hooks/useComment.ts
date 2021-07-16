import type { CommentContent, CommentUserInfo } from '@/store/modules/comment'
import { useStore } from 'vuex'

export function useStoreComment() {
  const store = useStore()

  const addComment = (comment: CommentContent) => {
    store.dispatch('comment/addComment', comment)
  }

  const removeComment = (email: string) => {
    store.dispatch('comment/addComment', email)
  }

  const getContent = () => {
    return store.getters['comment/getContent'] as Map<string, CommentContent>
  }

  const getUserInfo = () => {
    return store.getters['comment/getUserInfo'] as CommentUserInfo[]
  }

  return {
    addComment,
    removeComment,
    getContent,
    getUserInfo,
  }
}