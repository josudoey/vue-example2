global.jQuery = require('jquery');
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js")
var Vue = require("vue");

//ref https://github.com/vuejs/vue-router/tree/1.0
var VueRouter = require("vue-router");
Vue.use(VueRouter)

var Home = {
  data: function () {
    var page = this.$route.params.page || "Home";
    return {
      page: page
    }
  },
  template: "<span><h4>This is {{page}}!!<h4></span>",
  watch: {
    $route: function (val, old) {
      var page = this.$route.params.page || "Home";
      this.page = page;
    }
  }
};

var router = new VueRouter({
  base: __dirname,
  linkActiveClass: 'active',
  routes: [{
    path: '/alert',
    name: 'alert',
    component: function (resolve) {
      //ref http://router.vuejs.org/en/advanced/lazy-loading.html
      require(['./components/alert'], resolve);
    }
  }, {
    path: '/foo',
    name: 'foo',
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
    path: '/',
    name: 'home',
    component: Home,
    children: [ //ref http://router.vuejs.org/en/essentials/nested-routes.html
      {
        path: '/:page',
      }
    ]
  }, {
    path: '/:tail*',
    name: '404',
    component: {
      template: "'<span><h3>404 page not found.<h3><br />path={{$route.path}}<br />params={{$route.params}}</span>"
    }
  }]
})

var App = new Vue({
  el: "#app",
  router: router,
  props: ["id"],
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
//ref http://router.vuejs.org/en/advanced/data-fetching.html
//ref http://router.vuejs.org/en/advanced/navigation-guards.html#incomponent-guards
router.beforeEach(function (to, from, next) {
  console.log("router beforeEach");
  next();
});

router.afterEach(function (hook) {
  console.log("router afterEach", hook);
});

window.App = App;

