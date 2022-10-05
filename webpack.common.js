const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })

console.log(`Path:: ${path.join(__dirname, 'front/public')}`)

module.exports = {
  entry: './front/src/app.js',
  output: {
    path: path.join(__dirname, 'front/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    })
  ]
}