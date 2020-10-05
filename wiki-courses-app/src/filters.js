import Vue from "vue";

// Convert Letters To UpperCase.
Vue.filter("uppercase", function(v) {
  return v.toUpperCase();
});

// Reverse The Letter.
Vue.filter("reverse", function(v) {
  return v
    .split("")
    .reverse()
    .join("");
});
