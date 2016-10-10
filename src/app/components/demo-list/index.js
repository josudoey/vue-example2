require("app/plugs/alert");
var fake = require("app/api/fake");
var $ = require("jquery");
module.exports = {
  data: function () {
    return {
      query: "",
      list: [],
      user: {}
    }
  },
  template: require("./template.html"),
  components: {
    "bs-modal": require("app/mixins/bs-modal")
  },
  created: function () {
    this.refresh();
  },
  updated: function () {
    $('[data-toggle="tooltip"]').tooltip();
  },
  watch: {
    $route: function (val, old) {}
  },
  methods: {
    refresh: function () {
      var self = this;
      fake.getUsers().then(function (body) {
        self.list = body.users;
      }).catch(function (err) {
        self.$alert.error(err.message);
      })
    },
    defUser: function () {
      this.user = {
        role: "guest"
      }
    },
    add: function (e) {
      var self = this;
      var item = self.user;
      fake.addUser(item).then(function (body) {
        self.refresh();
        self.$alert('add success [' + item.name + ']');
        $(e.$el).modal('hide');
      }).catch(function (err) {
        self.$alert.error(err.message);
      })
    },
    update: function (e) {
      var self = this;
      var item = self.user;
      fake.updateUser(item).then(function (body) {
        self.refresh();
        self.$alert('update success [' + item.name + ']');
        $(e.$el).modal('hide');
      }).catch(function (err) {
        self.$alert.error(err.message);
      })
    },
    delUser: function (name) {
      var self = this;
      var item = self.user;
      fake.deleteUser(name).then(function (body) {
        self.refresh();
        self.$alert('delete success [' + name + ']');
      }).catch(function (err) {
        self.$alert.error(err.message);
      })
    }
  }
};

