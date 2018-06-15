const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'js/bundle.js',
    sourceMapFilename: 'js/bundle.map'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loaders: ['url-loader']
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') }
    })
  ]
}
