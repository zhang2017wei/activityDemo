import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/indexPage'
import ruler from '@/views/rulerModule'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: index,
      meta: { title: '首页', keepAlive: true }
    },
    {
      path: '/ruler',
      component: ruler
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.error("2022年03月03日11:49:54。。。。", to, from)
  // document.title =  to.meta.title;
  next()
})
export default router
