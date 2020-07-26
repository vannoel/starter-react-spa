const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scss_config = {
  test: /\.scss$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'sass-loader',
    },
  ],
};

module.exports = scss_config;
