var path = require('path')
var webpack = require('webpack')
module.exports = {
  // 入口
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/dev-server',
      './src/main.js'
    ],
    'babel-polyfill': 'babel-polyfill',
    vendors: ['react','react-dom','react-router']
  },
  // 出口
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  // 模块
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader']
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }]
  }
}
