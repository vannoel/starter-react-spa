const fileConfig = {
  test: /\.(ttf|otf|png|jpg|svg|gif|eot|woff2)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './files/',
      },
    },
  ],
};

module.exports = fileConfig;
