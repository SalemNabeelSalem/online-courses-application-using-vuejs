import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/sections",
            name: "sections",
            component: () => import("./components/SectionsList")
        },
        {
            path: "/sections/:id",
            name: "section-details",
            component: () => import("./components/Section")
        }
    ]
});