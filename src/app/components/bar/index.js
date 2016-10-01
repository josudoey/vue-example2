//ref http://vuejs.org/api/
//ref https://vuejs.org/guide/components.html#Custom-Events
require("./style.css");
var Vue = require("vue");
var template = require("./template.html");
var vm = module.exports = Vue.extend({
  template: template,
  props: {},
  beforeRouteEnter: function (to, from, next) {
    //ref http://router.vuejs.org/en/advanced/data-fetching.html
  },
  created: function () {
    // https://vuejs.org/guide/components.html#Composing-Components
    this.send("bar create name=" + this.$route.params.name);
  },
  beforeDestroy: function () {
    this.send("bar destroyed");
  },
  methods: {
    send: function (msg) {
      var p = this.$parent;
      if (!p) {
        return;
      };
      p.$emit("message", msg);
    }
  }
});

