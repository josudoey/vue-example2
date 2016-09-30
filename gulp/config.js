//ref https://github.com/webpack/docs/wiki/optimization
//ref https://github.com/lpiepiora/bower-webpack-plugin
var webpack = require("webpack");
var path = require("path");
var BowerWebpackPlugin = require('bower-webpack-plugin');

var projectPath = path.resolve(__dirname, "..");
var contentBase = path.resolve(projectPath, "build");
var publicPath = "/assets/";
var config = module.exports = {
  contentBase: contentBase,
  projectPath: projectPath,
  webpack: {
    entry: {
      main: [projectPath + "/src/app/main.js"]
    },
    output: {
      path: path.resolve(contentBase, "assets"),
      publicPath: publicPath,
      filename: "[name].js"
    },
    module: {
      loaders: [{
        test: /\.html$/,
        loader: "raw!html-minify"
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
        loader: "file-loader?name=[name].[ext]"
      }, {
        test: /\.vue$/,
        loader: 'vue'
      }]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.ProvidePlugin({})
    ],
    devtool: 'source-map'
  },
  "webpack-dev-server": {
    contentBase: contentBase,
    hot: true,
    inline: true,
    quiet: false,
    noInfo: false,
    publicPath: publicPath,
    stats: {
      colors: true
    }
  },
  www: {
    path: projectPath + "/src/www"
  }
};

