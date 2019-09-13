"use strict";

var type = require('./type.js');

var test = require('./test.js');

var syntax = require('./syntax.js');

var compare = require('./compare.js');

var polyfill = require('./polyfill.js');

var VERSION = '0.7.1';
module.exports = {
  VERSION: VERSION,
  type: type,
  test: test,
  syntax: syntax,
  compare: compare
};