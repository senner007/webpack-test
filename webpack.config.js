var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var config = {
  // TODO: Add common Configuration
  module: {},
};

var fooConfig = Object.assign({}, config, {
  entry: {
    examples: './examples/main.js'
  },
  mode: "development",
  devServer: {
        contentBase: './dist'
   },
  output: {
    path: path.resolve(__dirname, './dist'),
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
    new HtmlWebpackPlugin({
      template : "./index.html",
      chunks: ['examples'],
      filename: 'index.html'
    })
  ]
});


var barConfig = Object.assign({}, config,{
  entry: {
    app: './src/index.js',
  },
  mode: "production",
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
  }
});

// Return Array of Configurations
module.exports = [
  fooConfig, barConfig,       
];

// module.exports = {
//   entry: {
//     app: './src/index.js',
//     examples: './examples/main.js'
//   },
//   mode: "development",
//   devServer: {
//         contentBase: './dist'
//    },
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: '[name].js',
//   },
//   module: {
//     rules: [
//       { 
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: ["syntax-dynamic-import"]
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [ 'style-loader', 'css-loader' ]
//       }
//     ]
//   },
//   plugins: [
//     // new HtmlWebpackPlugin({
//     //   template : "./index.html",
//     //   chunks: ['app'],
//     //   filename: 'index.html'
//     // }),
//     new HtmlWebpackPlugin({
//       template : "./index.html",
//       chunks: ['examples'],
//       filename: 'index.html'
//     })
//   ]
// };