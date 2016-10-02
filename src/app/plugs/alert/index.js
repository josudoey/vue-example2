require("bootstrap/dist/css/bootstrap.min.css");
var $ = require("jquery");
var Vue = require("vue");
var Plug = {};
Plug.install = function (Vue, opts) {
  opts = opts || {};
  zIndex = opts.zIndex || 16777271;
  var el = opts.el;
  var vue = $(el);
  if (vue.length === 0) {
    vue = $('<div style="position: absolute; right: 0; margin-bottom: 0; z-index:' + zIndex + '"></div>');
    vue.prependTo("body");
  }

  var style = {
    "success": "alert-success",
    "info": "alert-info",
    "warn": "alert-warning",
    "error": "alert-danger"
  }
  var makeAlertFunc = function (type) {
    var cls = style[type];
    return function (msg, ms) {
      ms = ms || 3000;
      var el = $('<div class="alert ' + cls + '"role="alert" style="display: none; padding: 3px 6px 3px 6px; margin-bottom: 3px;">' + msg + '</div>');
      vue.append(el);
      el.slideDown(function () {
        el.delay(ms).slideUp(function () {
          el.remove();
        });
      });
    }
  };

  var $alert = Vue.prototype.$alert = makeAlertFunc("info");
  $alert.info = makeAlertFunc("info");
  $alert.success = makeAlertFunc("success");
  $alert.warn = makeAlertFunc("warn");
  $alert.error = makeAlertFunc("error");

};
module.exports = Plug;

