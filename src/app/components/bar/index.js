//ref http://vuejs.org/api/
//ref https://vuejs.org/guide/components.html#Custom-Events
require("./style.css");
var Vue = require("vue");
var template = require("./template.html");
var vm = module.exports = {
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
  beforeRouteEnter: function (to, from, next) {
    console.log("bar beforeRouteEnter");
    next();
  },
  beforeRouteLeave: function (to, from, next) {
    console.log("bar beforeRouteLeave");
    if (this.saved || window.confirm('Are you sure you want to navigate away?')) {
      next()
    } else {
      next(false)
    }

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
};

