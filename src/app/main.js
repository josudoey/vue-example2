//ref https://vuejs.org/guide/render-function.html
global.jQuery = require('jquery');
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js")
var Vue = require("vue");
var store = require('app/store');
var router = require('app/router');
var vm = new Vue({
  el: '#app',
  router: router,
  store: store
}).$mount("#app");

window.App = vm;

