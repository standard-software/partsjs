const webpack = require('webpack');
const EncodingPlugin = require('webpack-encoding-plugin');

module.exports = {
  mode: 'none',
  entry: ['./build/babel_webpack/babel/index.js'],
  output: {
    filename: 'parts.js',
    path: __dirname + '/../build/babel_webpack/webpack_forWsh/',
    library: 'parts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 1000,
      maxSize: 200000,
    }),
    new EncodingPlugin({
      encoding: 'shiftjis',
      // encoding: 'UTF-16LE',
    }),
  ],
};
