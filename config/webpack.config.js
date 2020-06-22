module.exports = {
  mode: 'none',
  entry: ['./build/babel_webpack/babel/index.js'],
  output: {
    filename: 'parts.js',
    path: __dirname + '/../release_build/',
    library: 'parts',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
