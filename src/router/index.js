import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '@/pages/About.vue'
import Portfolio from '@/pages/Portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})

export default router
