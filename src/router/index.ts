import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/views/AboutPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      component: AboutPage,
    },
    {
      path: '/profile',
      component: ProfilePage,
    }
  ]
})

export default router
