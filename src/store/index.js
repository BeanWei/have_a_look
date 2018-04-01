import Vue from 'vue'
import Vuex from 'vuex'
import xml2json from 'xmlstring2json'
import { formatSlideList, formatNewsList } from '../utils'
import api from './../utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slides: [],
    news: [],
    topics: []
  },

  mutations: {
    slides (state, data) {
      state.slides = [...data]
    },
    news (state, data) {
      state.news = [...data]
    },
    topics (state, data) {
      state.topics = [...data]
    }
  },

  actions: {
    // 获取banner图
    async getSlides ({ commit }) {
      const slides = await api.getSlides()
      if (!slides) return
      const parsedSlides = xml2json(slides).rss.channel.item
      const filtedSlides = parsedSlides.filter(
        slide => slide.opentype['#text'] === '1'
      )
      const formatedSlides = filtedSlides.map(formatSlideList)
      commit('slides', formatedSlides)
    },
    // 获取首页列表
    async getNewsList ({ state, commit }, init) {
      const news = await api.getNewsList()
      if (!news) return
      const formatedNews = news.data.feeds.map(formatNewsList)
      if (init) {
        commit('news', formatedNews)
      } else {
        commit('news', state.news.concat(formatedNews))
      }
    },
    //获取妹子图
    async getMeiziList ({ state, commit }, {page}) {
      const meizi = await api.getMeiziList(page)
      if (!meizi) return
      const formatedMeizi = meizi.results.map(formatMeiziList)
      if (page) {
        commit('meizi', formatedMeizi)
      } else {
        commit('meizi', state.meizi.concat(formatedMeizi))
      }
    }
  }
})

export default store
