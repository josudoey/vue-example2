var Vue = require("vue");
var $router = require("app/router");
var $store = require("app/store");
var vm = {
  name: "dashboard",
  template: require("./template.html"),
  data: function () {
    return {
      "container": ""
    }
  },
  methods: {
    logout: function () {
      $store.dispatch("setToken", null);
      $router.push({
        name: "login"
      });
    }
  }
};
module.exports = vm;

