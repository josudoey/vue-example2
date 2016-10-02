require("bootstrap/dist/css/bootstrap.min.css");
var Vue = require("vue");
var plugAlert = require("../../plugs/alert");
Vue.use(plugAlert);
var template = require("./template.html");
var vm = module.exports = Vue.extend({
  template: template,
  props: [],
  data: function () {
    return {
      "message": ""
    }
  },
  methods: {}
});

