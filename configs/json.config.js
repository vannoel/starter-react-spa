const fileConfig = {
  test: /\.(json)$/,
  type: 'javascript/auto',
  use: [
    {
      loader: 'json-loader',
    },
  ],
};

module.exports = fileConfig;
