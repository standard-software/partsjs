module.exports = {
  mode: 'none',
  entry: ['./debug_build/index.test.js'],
  output: {
    filename: 'test_parts.js',
    path: __dirname + '/../release_build/',
    library: 'test_parts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
