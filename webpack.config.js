var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    'library/app': './src/index.js',
    'examples': './examples/main.js'
  },
  mode: "production",
  devServer: {
        contentBase: './prod'
   },
  output: {
    path: path.resolve(__dirname, './prod'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["syntax-dynamic-import"]
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
    // new HtmlWebpackPlugin({
    //   template : "./index.html",
    //   chunks: ['app'],
    //   filename: 'index.html'
    // }),
    new HtmlWebpackPlugin({
      template : "./index.html",
      chunks: ['examples'],
      filename: 'index.html'
    })
  ]
};