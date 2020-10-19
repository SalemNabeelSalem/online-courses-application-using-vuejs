import Vue from "vue";

import App from "./App.vue";

import router from "./router";

// Vuex => State Management Pattern + Library.
import store from "./store";

// Bootstrap Framework.
import "./plugins/bootstrap-vue";

// Fontawesome Library.
import "./plugins/font-awesome";

import "./filters";

// Normalize File.
import "normalize.css";

// Bootstrap Files.
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Custome Style File.
import "./scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
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
