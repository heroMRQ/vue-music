import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import fastClick from 'fastclick'
import router from './router'

import './common/stylus/index.styl'

fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
