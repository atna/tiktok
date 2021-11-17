import { createStore } from 'vuex'
import tiktokDataService from '@/services/TiktokDataService'
import { FeedItem } from '@/types/FeedItem.interface'
import { UserInfo } from '@/types/UserInfo.interface'

export default createStore({
  state: {
    trandingFeed: [],
    user: {},
    userFeed: []
  },
  mutations: {
    SET_TRENDING_FEED (state, data) {
      state.trandingFeed = data
    },
    SET_USER_INFO (state, data) {
      state.user = data
    },
    SET_USER_FEED (state, data) {
      state.user = data
    }
  },
  actions: {
    async fetchTrandingFeed ({ commit }) {
      const result = await tiktokDataService.getTrandingFeed()
      const data: FeedItem[] = result.data

      commit('SET_TRENDING_FEED', data)
    },
    async fetchUserInfo ({ commit }, name) {
      const result = await tiktokDataService.getUserInfo(name)
      const data: UserInfo = result.data

      commit('SET_USER_INFO', data)
    },
    async fetchUserFeed ({ commit }, name) {
      const result = await tiktokDataService.getUserFeed(name)
      const data: UserInfo = result.data

      commit('SET_USER_FEED', data)
    }
  },
  modules: {
  }
})
