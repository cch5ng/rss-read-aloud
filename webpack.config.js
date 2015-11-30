module.exports = {
  entry: {
    nprBundle: ['./src/js/NprFeed.jsx'],
    yahooBundle: ['./src/js/YahooFeed.jsx'],
    bbcBundle: ['./src/js/BbcFeed.jsx']
    //hackerNewsBundle: ['./src/js/HackerNewsFeed.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/js',
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist'
  }
};