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
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        loaders: ['css-loader', 'sass-loader?sourceMap']
      },
      {
        test: /\.less$/,
        loaders: [
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javasscriptEnabled: true
            }
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2)$/,
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
