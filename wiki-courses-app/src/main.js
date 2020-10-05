import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Global Filters.
import filters from "./filters";

// Normalize File.
import "normalize.css";

// Bootstrap Files.
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap-Vue.
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// Font Awesome Files.
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Font Awesome Usage.
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Custome Style File.
import "./scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  filters,
  //=> Using ES6
  render: h => h(App)
}).$mount("#app");

/*
  => render: createElement => createElement(App)
  
  => Using JS
  render: function(createElement) {
      return createElement(App);
  }
*/
