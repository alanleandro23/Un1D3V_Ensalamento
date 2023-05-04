import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseView from '../views/BaseView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BaseView,
    children: [
      {
        path: "",
        name: "index",
        component: HomeView,
      },
      {
        path: '/notfound',
        name: 'not-found',
        component: NotFoundView
      }
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: "*",
    beforeEnter: (to, from, next) => { next({name: 'not-found'}) }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
