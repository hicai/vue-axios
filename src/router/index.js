import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lx',
    name: 'axios基础用法',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/lx.vue')
  },
  {
    path:'/lx2',
    name:'axios并发请求',
    component:()=> import('../views/lx2.vue')
  },
  {
    path:'/lx3',
    name:'axios多接口请求',
    component:()=>import('../views/lx3.vue')
  },
  {
    path:'/lx4',
    name:'axios相关配置',
    component:()=>import('../views/lx4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
