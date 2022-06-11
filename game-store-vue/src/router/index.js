import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import wrap from '../views/WrapView.vue'
const routes = [
  {
    path: '/',
    redirect: '/wrap/home'
  },
  {
    path: '/wrap',
    name: 'wrap',
    component: wrap,
    children: [
      {
        path: '',
        redirect: '/wrap/home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'balance',
        name: 'balance',
        component: () => import('../views/BalanceView.vue')
      },
      {
        path: 'exchange',
        name: 'exchange',
        component: () => import('../views/ExchangeView.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  //mode: 'history',
  routes
})

export default router
