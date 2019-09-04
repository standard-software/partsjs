"use strict";

var test_execute_index = function test_execute_index(parts) {
  var _require = require('./type.test.js'),
      test_execute_type = _require.test_execute_type;

  var _require2 = require('./syntax.test.js'),
      test_execute_syntax = _require2.test_execute_syntax;

  var _require3 = require('./test.test.js'),
      test_execute_test = _require3.test_execute_test;

  console.log('test start. ' + parts.VERSION);
  test_execute_type(parts);
  test_execute_syntax(parts);
  test_execute_test(parts);
  console.log('test finish.');
};

module.exports = {
  test_execute_index: test_execute_index
};