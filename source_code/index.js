const polyfill = require('./polyfill.js');
const type = require('./type.js');
const test = require('./test.js');
const syntax = require('./syntax.js');
const compare = require('./compare.js');
const convert = require('./convert.js');
const string = require('./string.js');
const consoleHook = require('./consoleHook.js');

const VERSION = '0.9.0';

module.exports = {
  VERSION,
  type,
  test,
  syntax,
  compare,
  convert,
  string,
  consoleHook,
};

