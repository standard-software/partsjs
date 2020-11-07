const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: ['./build/babel_webpack/babel/index.test.js'],
  output: {
    filename: 'test_parts.js',
    path: __dirname + '/../build/babel_webpack/webpack_forWsh/',
    library: 'test_parts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 1000,
      maxSize: 300000,
    }),
  ],
};
