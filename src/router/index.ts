import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/views/AboutPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import CreateGame from '@/views/game/CreateGame.vue';

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
    },
    {
      path: '/games/new-game',
      component: CreateGame,
    }
  ]
})

export default router
