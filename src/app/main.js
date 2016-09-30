//ref https://github.com/vuejs/vue-router/tree/1.0
var Vue = require("vue");
var VueRouter = require("vue-router");
Vue.use(VueRouter)
var App = Vue.extend({
  props: ["name"],
  data: function () {
    return {
      message: ""
    };
  },
  ready: function () {
    var self = this;
    this.$on("message", function (msg) {
      self.message = msg;
    });
  },
  methods: {

  }
})

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
    },
    subRoutes: {
      '/:name': {
        component: function (resolve) {
          require(['./components/bar'], resolve);
        }
      }
    }
  }
});
router.start(App, '#app');

