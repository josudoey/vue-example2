require("bootstrap/dist/css/bootstrap.min.css");
require("./style.css");
var Vue = require("vue");
var plugAlert = require("../../plugs/alert");
Vue.use(plugAlert);
var template = require("./template.html");
var vm = module.exports = {
  template: template,
  props: [],
  data: function () {
    return {
      "message": ""
    }
  },
  methods: {}
};

