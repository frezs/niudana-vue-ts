import type { ActionTree, MutationTree, Module } from 'vuex'

const state = {
  isDark: true,
  theme: 'dark'
}

const mutations: MutationTree<any> = {
  GET_THEME(state: any) {
    const rTheme = localStorage.getItem('THEME')
    if (rTheme) {
      state.isDark = rTheme === 'dark' ? true : false
      state.theme = rTheme === 'ligth' ? '' : 'dark'
    }
  },
  SET_THEME(state: any) {
    if (state.theme) {
      localStorage.setItem('THEME', state.theme.toString())
    }
  },
  CHANGE_THEME(state: any) {
    state.isDark = !state.isDark
    if (state.isDark) {
      state.theme = 'dark'
      localStorage.setItem('THEME', state.theme.toString())
    } else {
      state.theme = ''
      localStorage.setItem('THEME', 'ligth')
    }
  }
}

const actions: ActionTree<any, any> = {
  get({ commit }) {
    commit('GET_THEME')
  },
  set({ commit }) {
    commit('SET_THEME')
  },
  change({ commit }) {
    commit('CHANGE_THEME')
  },
  init({ commit }) {
    commit('GET_THEME')
    commit('SET_THEME')
  }
}

export const theme: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions
}