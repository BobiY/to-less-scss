const path = require('path')
module.exports = {
  target: 'node',
  mode: 'development',
  entry: "./toLess/index.js",
  output: {
    filename: 'toLess.js',
    path: path.resolve(__dirname, 'build')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['@babel/preset-env']]
        }
      }
    ]
  }
}