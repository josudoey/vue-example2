require("app/plugs/alert");
var Vue = require("vue");
var fake = require("app/api/fake");
var vm = {
  template: require("./index.html"),
  name: "login",
  data: function () {
    return {
      user: "",
      password: "",
      disableLogin: false
    };
  },
  created: function () {
    if (this.$store.state.token) {
      this.$router.push({
        name: "home"
      });
      return;
    }
  },
  methods: {
    login: function () {
      var self = this;
      self.disableLogin = true;
      fake.reqToken(this.user, this.password)
        .then(function (token) {
          self.$store.dispatch('setToken', token);
          self.$router.push({
            name: "home"
          });
        }).catch(function (err) {
          self.disableLogin = false;
          self.$alert.error(err.message);
          console.error(err);
        });
    }
  }
};

module.exports = vm;

