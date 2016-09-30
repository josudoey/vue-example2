//ref http://vuejs.org/api/
//ref https://vuejs.org/guide/components.html#Custom-Events
require("./style.css");
var Vue = require("vue");
var template = require("./template.html");
var vm = module.exports = Vue.extend({
  template: template,
  props: {},
  created: function () {
    this.$dispatch("message", "bar create name=" + this.$route.params.name);
  },
  beforeDestroy: function () {
    console.log("test");
    this.$dispatch("message", "bar destroyed");
  }
});

