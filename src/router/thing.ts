import { RouteRecordRaw } from 'vue-router';

const ComponentsPages: Array<RouteRecordRaw> = [];
const Components: any = import.meta.glob('@/pages/Thing/components/*.vue', { import: 'default', eager: true });
Object.keys(Components).forEach((key: string) => {
  if (Components[key].name) {
    ComponentsPages.push({
      path: `/thing/${Components[key].name}`,
      component: Components[key],
      props: {
        isPage: true
      }
    });
  }
});

// 设置路由规则
let routes: Array<RouteRecordRaw> = [
  {
    path: '/thing',
    component: () => import('@/pages/Thing/index.vue'),
  },
  ...ComponentsPages
];
// 导出路由
export default routes;
