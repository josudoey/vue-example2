require("./style.css");
var Vue = require("vue");
var template = require("./template.html").toString()
var vm = module.exports = Vue.extend({
  template: template,
  props: {},
  created: function () {
    console.log(template);
  }
});

