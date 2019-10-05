"use strict";

var test_execute_array = function test_execute_array(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown;

  var test_xxx = function test_xxx() {};

  console.log('  test array.js');
  test_xxx();
};

module.exports = {
  test_execute_test: test_execute_array
};