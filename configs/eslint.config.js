const eslintConfig = {
  test: /\.(js|jsx)$/,
  include: /src/,
  exclude: /node_modules/,
  enforce: 'pre',
  use: [
    {
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    },
  ],
};

module.exports = eslintConfig;
