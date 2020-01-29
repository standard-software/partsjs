module.exports = {
  mode: 'none',
  entry: ['./debug_build/index.js'],
  output: {
    filename: 'parts.js',
    path: __dirname + '/../release_build/',
    library: 'parts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
