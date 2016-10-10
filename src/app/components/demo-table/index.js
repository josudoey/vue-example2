//ref http://bootstrap-table.wenzhixin.net.cn/examples/
require("app/plugs/alert");
var fake = require("app/api/fake");
var $ = require("jquery");
module.exports = {
  data: function () {
    return {
      query: "",
      list: [{
        "name": "bootstrap-table",
        "stargazers_count": "526",
        "forks_count": "122",
        "description": "An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3) "
      }, {
        "name": "multiple-select",
        "stargazers_count": "288",
        "forks_count": "150",
        "description": "A jQuery plugin to select multiple elements with checkboxes :)"
      }, {
        "name": "bootstrap-show-password",
        "stargazers_count": "32",
        "forks_count": "11",
        "description": "Show/hide password plugin for twitter bootstrap."
      }, {
        "name": "blog",
        "stargazers_count": "13",
        "forks_count": "4",
        "description": "my blog"
      }, {
        "name": "scutech-redmine",
        "stargazers_count": "6",
        "forks_count": "3",
        "description": "Redmine notification tools for chrome extension."
      }],
      user: {}
    }
  },
  template: require("./template.html"),
  components: {
    "bs-modal": require("app/mixins/bs-modal"),
    "bs-table": require("app/mixins/bs-table")
  },
  mounted: function () {
    var self = this;
    var $table = $("#vtable");
    $table.bootstrapTable({
      "ajax": self.fill
    });
  },
  created: function () {},
  updated: function () {
    $('[data-toggle="tooltip"]').tooltip();
  },
  watch: {
    $route: function (val, old) {}
  },
  methods: {
    fill: function (params) {
      var self = this;
      params.success({
        data: self.list
      });
    }
  }
};

