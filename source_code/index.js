const polyfill = require('./polyfill.js');
const type = require('./type.js');
const test = require('./test.js');
const syntax = require('./syntax.js');
const compare = require('./compare.js');
const _TEXT = require('./_text.js');

const VERSION = '0.7.2 beta';

module.exports = {
  VERSION,
  type,
  test,
  syntax,
  compare,
  _TEXT,
};

