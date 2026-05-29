import { createRouter, createWebHistory } from 'vue-router'
import SelectProfileView from '@/views/SelectProfileView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SelectProfileView,
    },
    {
      path: '/browse',
      name: 'browse',
      component: HomeView,
    },
  ],
})

export default router
