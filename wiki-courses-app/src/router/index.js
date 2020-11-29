import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";

import Sections from "../views/Sections.vue";

import Lecturers from "../views/Lecturers.vue";

import Classifications from "../views/Classifications.vue";

import ContactUs from "../views/ContactUs.vue";

import Login from "../views/Login.vue";

import Dashboard from "../views/Dashboard.vue";

import Statistics from "../components/dashboard/Statistics.vue";

import SectionsControlPanel from "../components/dashboard/sections/SectionsControlPanel.vue";

import ClassificationsControlPanel from "../components/dashboard/classifications/ClassificationsControlPanel.vue";

import LecturersControlPanel from "../components/dashboard/lecturers/LecturersControlPanel.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sections",
    name: "Sections",
    component: Sections
  },
  {
    path: "/lecturers",
    name: "Lecturers",
    component: Lecturers
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs
  },
  {
    path: "/sections/:sectionId/classifications",
    name: "Classifications",
    component: Classifications
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/statistics",
        name: "Statistics",
        component: Statistics
      },
      {
        path: "/dashboard/sections",
        name: "SectionsControlPanel",
        component: SectionsControlPanel
      },
      {
        path: "/dashboard/classifications",
        name: "ClassificationsControlPanel",
        component: ClassificationsControlPanel
      },
      {
        path: "/dashboard/lecturers",
        name: "LecturersControlPanel",
        component: LecturersControlPanel
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
