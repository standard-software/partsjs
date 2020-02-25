module.exports = {
  mode: 'none',
  entry: ['@babel/polyfill', './debug_build/index.js'],
  output: {
    filename: 'parts.js',
    path: __dirname + '/../release_build/',
    library: 'parts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
