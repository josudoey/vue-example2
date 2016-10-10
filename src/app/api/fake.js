var $store = require("app/store");
var fake = module.exports = {};

var users = [{
  "name": "guest",
  "password": "guest",
  "role": "guest"
}];

fake.reqToken = function (user, password) {
  var token = {
    token_type: "bearer",
    access_token: "fake",
    expires_in: 3600
  }
  return Promise.resolve(token);
}

fake.getUsers = function () {
  var json = {
    "users": JSON.parse(JSON.stringify(users))
  };
  return Promise.resolve(json);
};

fake.addUser = function (user) {
  users.push(JSON.parse(JSON.stringify(user)));
  return Promise.resolve({
    "ok": 1
  });
};

fake.updateUser = function (user) {
  users.forEach(function (item, i) {
    if (user.name === item.name) {
      users[i] = JSON.parse(JSON.stringify(user))
    }
  });
  return Promise.resolve({
    "ok": 1
  });
};

fake.deleteUser = function (name) {
  users.forEach(function (uesr, i) {
    if (uesr.name === name) {
      users.splice(i, 1);
    }
  });
  return Promise.resolve();
};

