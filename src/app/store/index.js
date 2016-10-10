//ref https://vuex.vuejs.org/en/api.html
var Vue = require("vue");
var Vuex = require("vuex");
Vue.use(Vuex);

var session = localStorage;
var token = null;
if (session["token"]) {
  try {
    token = JSON.parse(session["token"]);
  } catch (e) {
    delete session["token"];
  }
}

var store = {};
store.state = store.state = {
  token: token
}

store.mutations = store.mutations = {
  setToken: function (state, token) {
    state.token = token;
    if (!token) {
      delete session["token"];
      return;
    }
    session["token"] = JSON.stringify(token);
  }
}

store.actions = {
  setToken: function (ctx, token) {
    ctx.commit('setToken', token);
  }
}

store.getters = {
  token: function (state, token) {
    return state.token;
  }
}

module.exports = new Vuex.Store(store);

