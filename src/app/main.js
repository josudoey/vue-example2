//ref https://github.com/vuejs/vue-router/tree/1.0
var Vue = require("vue");
var VueRouter = require("vue-router");
Vue.use(VueRouter)

//ref http://router.vuejs.org/en/advanced/lazy-loading.html
var router = new VueRouter({
  base: __dirname,
  routes: [{
    path: '/foo',
    component: function (resolve) {
      require(['./components/foo'], resolve);
    }
  }, {
    path: '/bar',
    name: 'bar',
    component: function (resolve) {
      require(['./components/bar'], resolve);
    }
  }, {
    path: '/bar/:name',
    component: function (resolve) {
      require(['./components/bar'], resolve);
    }
  }]
})

var App = new Vue({
  el: "#app",
  router: router,
  props: ["name"],
  data: function () {
    return {
      message: ""
    };
  },
  created: function () {
    var self = this;
    self.$on("message", function (msg) {
      self.message = msg;
    })
  },
  methods: {

  }
});

//ref https://github.com/vuejs/vue-router/blob/dev/examples/navigation-guards/app.js#L100
//ref http://router.vuejs.org/en/api/router-instance.html
router.beforeEach(function (to, from, next) {
  next();
});

router.afterEach(function (hook) {});

window.App = App;

