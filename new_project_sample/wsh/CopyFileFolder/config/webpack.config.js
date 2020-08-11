module.exports = {
  mode: 'none',
  entry: ['./build/babel_webpack/babel/main.js'],
  output: {
    filename: 'main.js',
    path: __dirname + '/../build/babel_webpack/webpack/',
    library: 'CopyFileFolder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
