import { createRouter, createWebHistory } from 'vue-router';
import LoginIndex from '@/views/login/LoginIndex.vue';
import AboutPage from '@/views/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginIndex,
    },
    {
      path: '/about',
      component: AboutPage
    }
  ]
})

export default router
