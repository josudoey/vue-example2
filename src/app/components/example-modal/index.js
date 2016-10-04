//ref http://vuejs.org/api/
//ref https://vuejs.org/guide/components.html#Custom-Events
require("./style.css");
var Vue = require("vue");
var $alert = require("../../plugs/alert");
Vue.use($alert);
var template = require("./template.html");
var modal = Vue.extend({
  name: "modal",
  mixins: [require("../../mixins/modal")]
});
var Component = module.exports = Vue.extend({
  name: "example-modal",
  components: {
    "modal": modal
  },
  template: template,
  data: function () {
    return {
      "message": "",
      "subject": ""
    };
  },
  methods: {}
});

