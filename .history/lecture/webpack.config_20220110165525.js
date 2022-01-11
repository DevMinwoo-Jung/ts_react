const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 배포는 production
  devtool: 'eval', // 배포는 hidden-source-map 이거 안쓰면 코드 노출됨
  resolve: {
    extentions: ['.jsx', '.js', '.tsx', '.ts'],
  },

  entry: {
    app: './client'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }]
  },
  plugins: [
    
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  }
}