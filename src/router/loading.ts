import { RouteRecordRaw } from 'vue-router';

const ComponentsPages: Array<RouteRecordRaw> = [];
const Components: any = import.meta.glob('@/pages/Loading/components/*.vue', { import: 'default', eager: true });
Object.keys(Components).forEach((key: string) => {
  if (Components[key].name) {
    ComponentsPages.push({
      path: `/loading/${Components[key].name}`,
      component: Components[key]
    });
  }
});

// 设置路由规则
let routes: Array<RouteRecordRaw> = [
  {
    path: '/loading',
    component: () => import('@/pages/Loading/index.vue'),
  },
  ...ComponentsPages
];
// 导出路由
export default routes;
