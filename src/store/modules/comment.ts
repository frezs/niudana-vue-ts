
import type { ActionTree, GetterTree, MutationTree, Module } from 'vuex'

export interface UserInfo {
  nickname: string
  email: string
}

export interface CommentUserInfo extends UserInfo {
  content: string
}

export interface CommentContent extends CommentUserInfo {
  id: string
}

export interface CommentState {
  content: Map<string, CommentContent>,
  userInfo: CommentUserInfo[],
}

const state: CommentState = {
  content: new Map<string, CommentContent>(),
  userInfo: [],
}

const mutations: MutationTree<any> = {
  ADD_CONTENT(state: CommentState, comment: CommentContent) {
    const { id = Date.now().toString() } = comment
    if (!state.content.has(id)) {
      state.content.set(id, comment)
    }
  },
  ADD_USERINFO(state: CommentState, user: CommentUserInfo) {
    const { email } = user
    const hasUser = state.userInfo.filter(item => item.email === email)
    if (hasUser && !hasUser.length) {
      state.userInfo.push(user)
    }
  },
  DETEL_CONTENT(state: CommentState, id: string) {
    if (state.content.has(id)) {
      state.content.delete(id)
    }
  },
  DETEL_USERINFO(state: CommentState, email: string) {
    state.userInfo = state.userInfo.filter(item => item.email !== email)
  }
}

const getters: GetterTree<any, any> = {
  getContentCount: (state: CommentState) => {
    return state.content.keys.length
  },
  getUserByEmail: (state: CommentState) => (email: string) => {
    return state.userInfo.length && state.userInfo.find(item => item.email === email)
  },
  getContent: (state: CommentState) => {
    return state.content
  },
  getUserInfo: (state: CommentState) => {
    return state.userInfo
  }
}

const actions: ActionTree<any, any> = {
  addComment({ commit, getters }, comment: CommentUserInfo) {
    const { content, ...userInfo } = comment
    const { email = null } = (getters.getUserByEmail(comment.email) as CommentUserInfo) || {}
    !email && commit('ADD_USERINFO', userInfo)
    commit('ADD_CONTENT', comment)
  },
  removeComment({ commit, state: CommentState }, email: string) {
    commit('DETEL_USERINFO', email)
    console.log(state.content)
  }
}


export const comment: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}