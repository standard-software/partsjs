const polyfill = require('./polyfill.js');
const type = require('./type.js');
const test = require('./test.js');
const syntax = require('./syntax.js');
const compare = require('./compare.js');

const VERSION = '0.8.0 beta';

module.exports = {
  VERSION,
  type,
  test,
  syntax,
  compare,
};

