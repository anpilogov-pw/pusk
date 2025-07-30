import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { ROUTER_NAMES } from '../constants'

const routes = [
  {
    path: '/',
    name: ROUTER_NAMES.HOME,
    component: Home
  },
  {
    path: '/about',
    name: ROUTER_NAMES.ABOUT,
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router