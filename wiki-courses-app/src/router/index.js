import Vue from "vue";

import Router from "vue-router";

import Home from "../views/Home.vue";

import Sections from "../views/Sections.vue";

import AllClassifications from "../views/AllClassifications.vue";

import Lecturers from "../views/Lecturers.vue";

import Classifications from "../views/Classifications.vue";

import ContactUs from "../views/ContactUs.vue";

import FAQ from "../views/FAQ.vue";

import Login from "../views/Login.vue";

import Register from "../views/Register.vue";

import Dashboard from "../views/Dashboard.vue";

import Statistics from "../components/dashboard/Statistics.vue";

import SectionsControlPanel from "../components/dashboard/sections/SectionsControlPanel.vue";

import ClassificationsControlPanel from "../components/dashboard/classifications/ClassificationsControlPanel.vue";

import LecturersControlPanel from "../components/dashboard/lecturers/LecturersControlPanel.vue";

import LecturerDashboard from "../views/LecturerDashboard.vue";

import CoursesControlPanel from "../components/lecturer-dashboard/courses/CoursesControlPanel.vue";

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
    path: "/classifications",
    name: "AllClassifications",
    component: AllClassifications
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
    path: "/faq",
    name: "FAQ",
    component: FAQ
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
    path: "/sign-up",
    name: "Register",
    component: Register
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
  },
  {
    path: "/lecturer/:lecturerId/dashboard",
    name: "LecturerDashboard",
    component: LecturerDashboard,
    children: [
      {
        path: "/lecturer/:lecturerId/dashboard/courses",
        name: "CoursesControlPanel",
        component: CoursesControlPanel
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
