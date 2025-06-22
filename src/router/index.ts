import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        }
      ]
    },

    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'auth.login',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: 'register',
          name: 'auth.register',
          component: () => import('@/views/auth/RegisterView.vue')
        }
      ]
    },

    {
      path: '/dashboard',
      component: () => import('@/layouts/DashLayout.vue'),
      children: [
        {
          path: '',
          name: 'dash.home',
          component: () => import('@/views/dash/HomeView.vue')
        }
      ]
    }
  ],
})

export default router
