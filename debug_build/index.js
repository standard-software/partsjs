"use strict";

var type = require('./type.js');

var test = require('./test.js');

var VERSION = '0.4.0 beta';

var test_babel_transpile = function test_babel_transpile() {
  var array = [1, 2, 3];
  return array.map(function (n) {
    return Math.pow(n, 2);
  });
};

module.exports = {
  VERSION: VERSION,
  test_babel_transpile: test_babel_transpile,
  type: type,
  test: test
};