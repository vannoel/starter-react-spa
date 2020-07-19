const file_config = {
  test: /\.(json|ttf|otf|png|jpg|svg|gif|eot|woff2)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './files/'
      }
    }
  ]
}

module.exports = file_config;
