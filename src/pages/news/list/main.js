import Vue from 'vue'
import App from './index.vue'
import store from './../../../store'

const app = new Vue({
  store,
  ...App
})

app.$mount()
