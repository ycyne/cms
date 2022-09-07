import type { RouteRecordRaw } from "vue-router";
import { BreadCrumbItemType } from "@/common-ui/breadcrumb";

const firstMenu: any = null;
export default function (useMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  //加入全部路由
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("@/router/main", true, /\.ts$/);
  // routeFiles.keys().forEach((filePath)=>{
  //   const routeModule = require("@/router/main")
  // })
  //递归函数 获取可点击部分的URL，并进行筛选
  // function findRouteFun(useMenus)

  return routes;
}
// export function breadCrumbMapToMenu()
