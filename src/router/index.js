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
            isOnNavbar: true,
          },
          redirect: { name: 'SemanticElements' },
        },
        {
          path: 'CssStudy',
          name: 'CssStudy',
          children: [
            {
              path: 'CssSelectors',
              name: 'CssSelectors',
              component: () => import('../content/WebBody/CssStudy/CssSelectors.vue'),
              meta: {
                title: 'css選擇器',
                icon: 'bx bxs-file-css',
                isOnSidebar: true,
              },
            },
            {
              path: 'CssTable',
              name: 'CssTable',
              component: () => import('../content/WebBody/CssStudy/CssTable.vue'),
              meta: {
                title: 'css表格',
                icon: 'bx bx-table',
                isOnSidebar: true,
              },
            },
          ],
          meta: {
            title: 'css學習區',
            isOnNavbar: true,
          },
          redirect: { name: 'CssSelectors' },
        },
        {
          path: 'UnitTest',
          name: 'UnitTest',
          children: [
            {
              path: 'CalendarTest',
              name: 'CalendarTest',
              component: () => import('../content/WebBody/UnitTest/CalendarTest.vue'),
              meta: {
                title: '行事曆開發',
                icon: 'bx bxs-calendar',
                isOnSidebar: true,
              },
            },
          ],
          meta: {
            title: '測試區',
            isOnNavbar: true,
          },
          redirect: { name: 'CalendarTest' },
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
    {
      path: '/StudyCode',
      name: 'StudyCode',
      component: () => import('../StudyCode/index.vue'),
    },
  ],
})

export default router
