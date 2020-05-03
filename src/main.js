import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

// 解决移动端点击事件300ms延迟
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 样式重置
import './assets/styles/reset.css'
// 解决移动端1px边框问题
import './assets/styles/border.css'
// 图标字体
import './assets/styles/iconfont.css'
import 'swiper/css/swiper.css'

// axios.defaults.baseURL = '/api'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
