import Vue from "vue";

// Convert Letters To UpperCase.
Vue.filter("uppercase", function(str) {
  return str.toUpperCase();
});

// Convert First Letter Of Word To Capitalize.
Vue.filter("capitalize", function(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
});

// Reverse The Letter.
Vue.filter("reverse", function(str) {
  return str
    .split("")
    .reverse()
    .join("");
});

// Shorten Text.
// Vue.filter("shortentext", function(str, strLength, suffix) {
//   return str.substring(0, strLength) + suffix;
// });
