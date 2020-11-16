import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Lecturers from "../views/Lecturers.vue";
import Classifications from "../views/Classifications.vue";
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
    path: "/lecturers",
    name: "Lecturers",
    component: Lecturers
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
