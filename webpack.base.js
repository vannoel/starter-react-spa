const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const eslintConfig = require('./configs/eslint.config.js');
const babelConfig = require('./configs/babel.config.js');
const scssConfig = require('./configs/scss.config.js');
const fileConfig = require('./configs/file.config.js');

const PACKAGE = require('./package.json');

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/index.jsx'),
    vendors: ['react', 'react-dom', 'react-router-dom', '@fortawesome/react-fontawesome'],
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [eslintConfig, babelConfig, scssConfig, fileConfig],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: PACKAGE.name,
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
      chunks: ['index', 'vendors'],
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      ignoreOrder: false,
    }),
  ],
};
