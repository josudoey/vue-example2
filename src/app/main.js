//ref https://github.com/vuejs/vue-router/tree/1.0
var Vue = require("vue");
var VueRouter = require("vue-router");
Vue.use(VueRouter)
var App = Vue.extend({})

var router = new VueRouter()

router.map({
  '/foo': {
    component: function (resolve) {
      require(['./components/foo'], resolve);
    }
  },
  '/bar': {
    component: function (resolve) {
      require(['./components/bar'], resolve);
    }
  }
})
router.start(App, '#app');

