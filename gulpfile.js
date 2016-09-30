//ref https://webpack.github.io/docs/usage-with-gulp.html#without-webpack-stream
var gulp = require("gulp");
var gutil = require("gulp-util");
var htmlmin = require('gulp-htmlmin');
var cssmin = require("gulp-cssmin");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var conf = require("./gulp/config");
var argv = require('minimist')(process.argv.slice(2));
var buildPath = "./build";

gulp.task("webpack", function (callback) {
  webpack(conf.webpack, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({}));
    callback();
  });
});

gulp.task("min:js", function () {
  return gulp.src(conf.www.path + "/**/*.css")
    .pipe(uglify())
    .pipe(gulp.dest(buildPath));
});

gulp.task("min:css", function () {
  return gulp.src(conf.www.path + "/**/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest(buildPath));
});

gulp.task("min:html", function () {
  return gulp.src(conf.www.path + "/**/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(buildPath));
});

gulp.task("www", ["min:js", "min:css", "min:html"]);

gulp.task("build", ["www", "webpack"]);

gulp.task("watch", function () {
  gulp.watch(conf.www.path + "/**/*", ["www"]);
});

gulp.task("listen", function () {
  var compiler = webpack(conf.webpack);
  var server = new webpackDevServer(compiler, conf["webpack-dev-server"]);
  //conf.webpack.entry.main.unshift("webpack-dev-server/client?http://localhost:8080/");
  require("vue").config.devtools = true;
  var host = argv.host || "0.0.0.0";
  var port = argv.port || 8080;
  server.listen(port, host, function () {
    var app = server.listeningApp;
    var httpListen = host + ":" + port;
    gutil.log("[webpack-dev-server]", "Http Listen in " + httpListen);
  });
});

gulp.task("app:start", ["www", "listen", "watch"]);

