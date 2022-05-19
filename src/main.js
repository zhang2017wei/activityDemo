import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router/index'
// import 'babel-polyfill'
import './assets/styles/index.js'
import 'iview/dist/styles/iview.css'
import VConsole from 'vconsole'
import System from './system'

System.init()

// 如果需要弹幕 将入口打开
// import VueDanmaku from './danmu/'
// Vue.use(VueDanmaku);

// 本地开发调试注入vConsole
if (location.href.indexOf('debug') > -1) {
  new VConsole()
}

Vue.config.productionTip = false

new Vue({
  ...App,
  router,
  store
}).$mount('#app')
