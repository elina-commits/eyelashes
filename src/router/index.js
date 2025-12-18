import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/paymentPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
