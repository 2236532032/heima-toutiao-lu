import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import home from '@/views/home'
import welcome from '@/views/welcome'
import article from '@/views/article'
import NotFound from '@/views/404'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      // name: home,
      component: home,
      children: [
        {
          path: '/',
          name: 'welcome',
          component: welcome
        },
        {
          path: '/article',
          name: article,
          component: article
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

// 拦截未登录路由跳转
// to 去的路由对象 from  来自哪里路由对象
// 做事情，获取用户信息
// 判断 是否登录  如果登录 放行 next()   拦截登录 next('/login')
// 注意 排除登录路由
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  // if (to.path !== '/login') return next()
  next()
})
export default router
