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
        },

        {
          path: '/docs',
          children: [
            {
              path: '/introduction',
              name: 'dash.docs.introduction',
              component: () => import('@/views/dash/doc/IntroductionView.vue'),
            },
            {
              path: '/buttons',
              name: 'dash.docs.buttons',
              component: () => import('@/views/dash/doc/ButtonsView.vue'),
            },
            {
              path: '/form',
              name: 'dash.docs.form',
              component: () => import('@/views/dash/doc/FormView.vue'),
            }
          ]
        },

        {
          path: '/profile',
          name: 'dash.profile',
          component: () => import('@/views/dash/ProfileView.vue')
        }
      ]
    }
  ],
})

export default router
