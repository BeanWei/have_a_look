import Vue from 'vue'
import App from './App'
import infiniteScroll from 'vue-infinite-scroll'
import store from './store'

Vue.use(infiniteScroll)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // pages: ['pages/logs/main', '^pages/index/main'],
    pages: ['^pages/news/list/main', 'pages/meizi/list/main'],
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#333',
      backgroundColorTop: '#333',
      navigationBarBackgroundColor: '#333',
      navigationBarTitleText: 'Q.daily',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/news/list/main',
          text: '资讯',
          iconPath: 'static/assets/news.png',
          selectedIconPath: 'static/assets/news-active.png'
        },
        {
          pagePath: 'pages/meizi/list/main',
          text: '福利',
          iconPath: 'static/assets/meizi.png',
          selectedIconPath: 'static/assets/meizi-active.png'
        }
      ]
    }
  }
}
