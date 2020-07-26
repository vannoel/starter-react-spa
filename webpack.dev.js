const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.js');
const envParser = require('./utils/envParser.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    disableHostCheck: true,
    compress: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 9000,
    inline: true,
    hot: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: '/index.html' }],
    },
  },
  plugins: [new webpack.DefinePlugin(envParser(path.join(__dirname, '.env.development')))],
});
