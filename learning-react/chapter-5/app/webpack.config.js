module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-0', 'es2015', 'react']
      }
    }]
  }
}
