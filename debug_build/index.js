"use strict";

var polyfill = require('./polyfill.js');

var type = require('./type.js');

var test = require('./test.js');

var syntax = require('./syntax.js');

var compare = require('./compare.js');

var convert = require('./convert.js');

var string = require('./string.js');

var VERSION = '0.8.1 beta';
module.exports = {
  VERSION: VERSION,
  type: type,
  test: test,
  syntax: syntax,
  compare: compare,
  convert: convert,
  string: string
};