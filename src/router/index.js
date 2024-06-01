// 导入VueRouter
// 导入vue----vue3版本以上版本使用这种方式导入
import {
  createRouter,
  createWebHashHistory,
} from "vue-router/dist/vue-router.cjs";
import HomePage from "../views/HomePage.vue";
import IndexPage from "../views/IndexPage.vue";
import InfoPage from "../views/InfoPage.vue";

const routes = [
  { path: "/", component: HomePage, meta: { noCache: true } },
  { path: "/index", component: IndexPage, name: "index" },
  { path: "/info", component: InfoPage, name: "info" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
