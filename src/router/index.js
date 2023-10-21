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
            isOnNavbar: true,
          },
        },
        {
          path: 'HtmlStudy',
          name: 'HtmlStudy',
          children: [
            {
              path: 'SemanticElements',
              name: 'SemanticElements',
              component: () => import('../content/WebBody/HtmlStudy/SemanticElements.vue'),
              meta: {
                title: 'html標籤語意',
                icon: 'bx bxs-file-html',
                isOnSidebar: true,
              },
            },
            {
              path: 'HtmlForm',
              name: 'HtmlForm',
              component: () => import('../content/WebBody/HtmlStudy/HtmlForm.vue'),
              meta: {
                title: 'html表單',
                icon: 'bx bx-receipt',
                isOnSidebar: true,
              },
            },
          ],
          meta: {
            title: 'html學習區',
            icon: 'bx bxs-home',
            isOnNavbar: true,
          },
          redirect: { name: 'SemanticElements' },
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
