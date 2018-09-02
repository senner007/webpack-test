var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    examples: './examples/main.js'
  },
  watch: true,
  mode: "development",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : "./index.html",
      chunks: ['app'],
      filename: 'index1.html'
    }),
    new HtmlWebpackPlugin({
      template : "./index.html",
      chunks: ['examples'],
      filename: 'index2.html'
    })
  ]
};