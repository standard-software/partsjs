const polyfill = require('./polyfill.js');
const type = require('./type.js');
const test = require('./test.js');
const syntax = require('./syntax.js');
const compare = require('./compare.js');
const convert = require('./convert.js');
const string = require('./string.js');

const VERSION = '0.8.1 beta';

module.exports = {
  VERSION,
  type,
  test,
  syntax,
  compare,
  convert,
  string,
};

