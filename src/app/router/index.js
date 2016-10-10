//ref https://router.vuejs.org/en/
var $store = require("app/store");
var Vue = require("vue");
var VueRouter = require("vue-router");
Vue.use(VueRouter);

var dashbaord = function (name, path) {
  var components = {
    "list": function (resolve) {
      require(["app/components/list"], resolve)
    },
    "alert": function (resolve) {
      require(["app/components/alert"], resolve)
    }
  };

  var component = function (resolve) {
    require(["app/components/dashboard"], function (vm) {
      vm.components = components;
      vm.mounted = function () {
        this.container = this.$route.name;
      };
      vm.watch = {
        $route: function (val, old) {
          this.container = val.name;
        }
      };
      resolve(vm);
    });
  }
  return {
    name: name,
    path: path,
    component: component
  }
};

var router = new VueRouter({
  base: __dirname,
  linkActiveClass: 'active',
  routes: [{
      name: 'root',
      path: '/',
      redirect: {
        name: 'home'
      }
    }, {
      name: 'home',
      path: '/dashboard',
      redirect: {
        name: 'list'
      }
    },
    dashbaord('list', '/list'),
    dashbaord('alert', '/alert'), {
      name: 'login',
      path: '/login',
      component: function (resolve) {
        require(["app/components/login"], resolve);
      }
    }, {
      name: '404',
      path: '/:tail*',
      component: function (resolve) {
        resolve({
          template: "<span><h3>Oops!! page not found.<h3><br />path={{$route.path}}<br />params={{$route.params}}</span>"
        });
      }
    }
  ]
})

//ref https://github.com/vuejs/vue-router/blob/dev/examples/navigation-guards/app.js#L100
//ref http://router.vuejs.org/en/api/router-instance.html
//ref http://router.vuejs.org/en/advanced/data-fetching.html
//ref http://router.vuejs.org/en/advanced/navigation-guards.html#incomponent-guards
router.beforeEach(function (to, from, next) {
  var vm = this.app;
  if (to.name == "login") {
    next();
    return;
  }
  if (!$store.state.token) {
    next({
      name: "login"
    })
    return;
  }
  next();
});

router.afterEach(function (hook) {});
module.exports = router;

