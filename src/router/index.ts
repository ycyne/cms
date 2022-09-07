import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from) => {
  if (to.path !== "/login") {
    if (!localCache.getCache("token")) {
      return "/login";
    }
  }
});

export default router;
