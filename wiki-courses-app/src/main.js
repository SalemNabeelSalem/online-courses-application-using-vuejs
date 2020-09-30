import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "normalize.css";
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
