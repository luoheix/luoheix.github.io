import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/favicon.png',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/main/home' },
    { path: '/main', redirect: '/main/home' },
    {
      // 使用共同布局
      path: '/main',
      component: '@/layouts',
      routes: [
        {
          path: '/main/home',
          component: '@/pages',
          title: '主页',
          breadcrumbConfig: '',
        },
        { path: '/main/list', component: '@/pages/list', title: '列表页面' },
        { component: '@/pages/404' },
      ],
    },
    {
      path: '/detail',
      component: '@/pages/detail',
      title: '详情',
      breadcrumbConfig: '',
    },
    { component: '@/pages/404' },
  ],
});
