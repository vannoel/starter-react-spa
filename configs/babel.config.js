const babelConfig = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          ['@babel/plugin-proposal-object-rest-spread'],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    },
  ],
};

module.exports = babelConfig;
