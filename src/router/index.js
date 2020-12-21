import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from '../views/Root.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Root',
    component: Root,
    children: [
      {
        path: '/',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'index',
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
