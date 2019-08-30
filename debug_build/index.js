"use strict";

var type = require('./type.js');

var VERSION = '0.2.2';

var test_babel = function test_babel() {
  var array = [1, 2, 3];
  return array.map(function (n) {
    return Math.pow(n, 2);
  });
};

module.exports = {
  VERSION: VERSION,
  test_babel: test_babel,
  type: type
};