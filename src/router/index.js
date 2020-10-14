import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/helloHome'
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
      meta: { title: 'helloFront' },
      children: [
        {
          path: '/helloHome',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/index.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/goodsDesc',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/goodsDesc.vue'),
          meta: { title: '商品详情' }
        },
        {
          path: '/404',
          component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
          meta: { title: '404' }
        },
        {
          path: '/403',
          component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
          meta: { title: '403' }
        }

      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
      meta: { title: '登录' }
    },
    // {
    //   path: '/register',
    //   component: () => import(/* webpackChunkName: "login" */ '../components/page/Register.vue'),
    //   meta: { title: '注册' }
    // },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
