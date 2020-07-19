const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const eslint_config = require(path.join(__dirname, "/configs/eslint.config.js"));
const babel_config = require(path.join(__dirname, "/configs/babel.config.js"));
const scss_config = require(path.join(__dirname, "/configs/scss.config.js"));
const file_config = require(path.join(__dirname, "/configs/file.config.js"));

const PACKAGE = require("./package.json");

module.exports = {
  entry: {
    index: path.join(__dirname, "/src/index.jsx"),
    vendors: ['react', 'react-dom', 'react-router-dom', '@fortawesome/react-fontawesome']
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      eslint_config,
      babel_config,
      scss_config,
      file_config
    ]
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src")
    },
    modules: [
      path.resolve(__dirname, "./node_modules"),
      path.resolve(__dirname, "./src")
    ]
  },
  performance: {
    'hints': false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: PACKAGE.name,
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      chunks: ["index", "vendors"],
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
      ignoreOrder: false
    })
  ],
};