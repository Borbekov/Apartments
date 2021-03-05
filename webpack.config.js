const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ] 
      },
    ],
  },
  devServer: {
    port: 5000
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
}