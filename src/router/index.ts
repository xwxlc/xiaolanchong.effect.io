// 1 引入所需方法
// 路由创建：createRouter
// 路由模式(两者任选其一)：createWebHistory - history模式、createWebHashHistory - hash模式
// RouteRecordRaw：意为路由原始信息 （使用vue3+js的不用引入）
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import loading from './loading';
import card from './card';
// 设置路由规则
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/pages/index.vue')
  },
  ...loading,
  ...card,
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/layout/404.vue'),
  }
];
console.log(routes);
// 设置路由
const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// 导出路由
export default router;
