import { createRouter, createWebHashHistory } from 'vue-router'

const hash = createWebHashHistory()
const router = createRouter({
  history: hash,
  routes: [
    // 登入 Page
    {
      path: '/',
      name: 'SignIn',
      component: () => import('../content/SignIn/index.vue'),
      children: [
        {
          path: 'UserLogin',
          name: 'UserLogin',
          component: () => import('../content/SignIn/UserLogin.vue'),
        },
      ],
      redirect: { name: 'UserLogin' },
    },
    // Project Body
    {
      path: '/Project',
      name: 'Project',
      component: () => import('../content/WebBody/index.vue'),
      children: [
        {
          path: 'DashBoard',
          name: 'DashBoard',
          component: () => import('../content/WebBody/DashBoard/DashBoard.vue'),
          meta: {
            title: '首頁',
            icon: 'bx bxs-home',
            isOnSidebar: true,
          },
        },
      ],
      redirect: { name: 'DashBoard' },
    },
    // 404 Page
    {
      path: '/404',
      name: '404',
      component: () => import('../content/404.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
    },
  ],
})

export default router
