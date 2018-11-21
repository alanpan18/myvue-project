import Vue from 'vue'
import Router from 'vue-router'
import BlogLogin from '@/components/manage/BlogLogin.vue'
import BlogIndex from '@/components/home/BlogIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirrct:'/login'
    },
    {
      path:'/index',
      name:'BlogIndex',
      component:BlogIndex
    },
    {
      path:'/manage',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'BlogLogin',
      component:BlogLogin
    }
  ]
})
