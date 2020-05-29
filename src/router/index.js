import Vue from 'vue';
import VueRouter from 'vue-router';
import api from '@/api';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { auth: true },
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/registration',
      component: () => import('../views/Registration.vue'),
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '*',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = api.currentUser();
  const requireAuth = to.matched.some((record) => record.meta.auth);
  if (requireAuth && !currentUser) {
    next('/login?message=login');
  } else {
    next();
  }
});

export default router;
