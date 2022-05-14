import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import('../views/BalanceView.vue')
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: () => import('../views/ExchangeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/ExchangeView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
