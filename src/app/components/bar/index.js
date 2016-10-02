//ref http://vuejs.org/api/
//ref https://vuejs.org/guide/components.html#Custom-Events
require("./style.css");
var Vue = require("vue");
var template = require("./template.html");
var vm = module.exports = Vue.extend({
  template: template,
  props: {},
  data: function () {
    return {
      "message": this.$route.query.id
    };
  },
  created: function () {
    console.log("bar created");
  },
  beforeDestroy: function () {
    console.log("bar beforeDestroy");
  },
  methods: {
    send: function (msg) {
      // https://vuejs.org/guide/components.html#Composing-Components
      var p = this.$parent;
      if (!p) {
        return;
      };
      p.$emit("message", msg);
    }
  }
});

