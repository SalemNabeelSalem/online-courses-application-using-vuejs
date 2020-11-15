import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Classifications from "../views/Classifications.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import Dashboard from "../views/Dashboard.vue";
import SectionsControlPanel from "../components/dashboard/sections/SectionsControlPanel.vue";
import ClassificationsControlPanel from "../components/dashboard/classifications/ClassificationsControlPanel.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/help",
    name: "Help",
    component: Help
  },
  {
    path: "/section/:sectionId",
    name: "Classifications",
    component: Classifications
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/sections",
        name: "SectionsControlPanel",
        component: SectionsControlPanel
      },
      {
        path: "/dashboard/classifications",
        name: "ClassificationsControlPanel",
        component: ClassificationsControlPanel
      }
    ]
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
