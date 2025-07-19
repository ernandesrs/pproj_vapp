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
          path: 'users',
          name: 'dash.users',
          component: () => import('@/views/dash/UsersView.vue')
        },

        {
          path: 'docs',
          children: [
            {
              path: 'introduction',
              name: 'dash.docs.introduction',
              component: () => import('@/views/dash/doc/IntroductionView.vue'),
            },
            {
              path: 'pages',
              name: 'dash.docs.pages',
              component: () => import('@/views/dash/doc/PagesView.vue'),
            },
            {
              path: 'buttons',
              name: 'dash.docs.buttons',
              component: () => import('@/views/dash/doc/ButtonsView.vue'),
            },
            {
              path: 'form',
              name: 'dash.docs.form',
              component: () => import('@/views/dash/doc/FormView.vue'),
            },
            {
              path: 'form-fields',
              name: 'dash.docs.formFields',
              component: () => import('@/views/dash/doc/FormFieldsView.vue'),
            },
            {
              path: 'icons',
              name: 'dash.docs.icons',
              component: () => import('@/views/dash/doc/IconsView.vue'),
            },
            {
              path: 'list',
              name: 'dash.docs.list',
              component: () => import('@/views/dash/doc/ListView.vue'),
            },
            {
              path: 'toast',
              name: 'dash.docs.toast',
              component: () => import('@/views/dash/doc/ToastsView.vue'),
            },
            {
              path: 'badges',
              name: 'dash.docs.badges',
              component: () => import('@/views/dash/doc/BadgesView.vue'),
            },
            {
              path: 'cards',
              name: 'dash.docs.cards',
              component: () => import('@/views/dash/doc/CardsView.vue'),
            },
            {
              path: 'thumbnails',
              name: 'dash.docs.thumbnails',
              component: () => import('@/views/dash/doc/ThumbnailsView.vue'),
            },
            {
              path: 'tables',
              name: 'dash.docs.tables',
              component: () => import('@/views/dash/doc/TablesView.vue'),
            },
            {
              path: 'skeletons',
              name: 'dash.docs.skeletons',
              component: () => import('@/views/dash/doc/SkeletonView.vue'),
            },
            {
              path: 'paginations',
              name: 'dash.docs.paginations',
              component: () => import('@/views/dash/doc/PaginationView.vue'),
            },
            {
              path: 'dialogs',
              name: 'dash.docs.dialogs',
              component: () => import('@/views/dash/doc/DialogsView.vue'),
            },
            {
              path: 'dropdowns',
              name: 'dash.docs.dropdowns',
              component: () => import('@/views/dash/doc/DropdownView.vue'),
            },
            {
              path: 'tooltips',
              name: 'dash.docs.tooltips',
              component: () => import('@/views/dash/doc/TooltipsView.vue'),
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
