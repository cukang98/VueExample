import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Define your routes here
  // Example:
  // { path: '/', component: Home },
  // { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
