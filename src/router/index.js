import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeViews.vue';
import IncomeView from '@/views/IncomeView.vue';
import OutcomeView from '@/views/OutcomeView.vue';

const routes = [
  { path: '/home', name: 'home', component: HomeView },
  { path: '/income', name: 'income', component: IncomeView },
  { path: '/outcome', name: 'outcome', component: OutcomeView },
  { path: '/', redirect: '/home' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
