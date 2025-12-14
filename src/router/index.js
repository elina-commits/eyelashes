import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue'),
    meta: { breadcrumb: 'Главная' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
