var path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    root: path.join(__dirname, '/src')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        optional: ['runtime'],
        stage: 1
      }
    }]
  }
}
