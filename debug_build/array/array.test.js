"use strict";

/* eslint-disable max-len */

/* eslint-disable no-var */

/* eslint-disable comma-spacing */

/* eslint-disable comma-dangle */
var test_execute_array = function test_execute_array(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException;
  var array = parts.array;

  var test_array_from = function test_array_from() {
    function test() {
      // eslint-disable-next-line prefer-rest-params
      return array.from(arguments);
    }

    checkEqual(true, parts.equal([10, 20], test(10, 20)));
  };

  var test_min = function test_min() {
    checkEqual(5, array.min([5, 10, 15, 20]));
    checkEqual(1, array.min([5, 4, 3, 2, 1]));
    checkEqual(3, array.min([5, 4, 3])); // exception

    checkEqual(false, isThrown(function () {
      array.min([1, 2, 3]);
    }));
    checkEqual(false, isThrown(function () {
      array.min([1, 2, 3]);
    }));
    checkEqual(true, isThrown(function () {
      array.min('1,2,3');
    }));
    checkEqual(true, isThrown(function () {
      array.min([1,, 3]);
    }));
    checkEqual(true, isThrown(function () {
      array.min([, 1, 2, 3]);
    }));
    checkEqual(true, isThrown(function () {
      array.min([1,, 3]);
    }));
  };

  var test_max = function test_max() {
    checkEqual(20, array.max([5, 10, 15, 20]));
    checkEqual(5, array.max([5, 4, 3, 2, 1]));
    checkEqual(3, array.max([1, 2, 3])); // exception

    checkEqual(false, isThrown(function () {
      array.max([1, 2, 3]);
    }));
    checkEqual(false, isThrown(function () {
      array.max([1, 2, 3]);
    }));
    checkEqual(true, isThrown(function () {
      array.max('1,2,3');
    }));
    checkEqual(true, isThrown(function () {
      array.max([1,, 3]);
    }));
    checkEqual(true, isThrown(function () {
      array.max([, 1, 2, 3]);
    }));
    checkEqual(true, isThrown(function () {
      array.max([1,, 3]);
    }));
  };

  var test_average = function test_average() {
    checkEqual(71, array.average([52, 52, 70, 72, 80, 100]));
    checkEqual(22, array.average([6, 9, 9, 10, 10, 10, 100]));
  };

  var test_midian = function test_midian() {
    checkEqual(71, array.midian([52, 52, 70, 72, 80, 100]));
    checkEqual(10, array.midian([6, 9, 9, 10, 10, 10, 100]));
  };

  console.log('  test array.js'); // test_array_equal();

  test_array_from();
  test_min();
  test_max(); // test_sum();

  test_average();
  test_midian();
};

module.exports = {
  test_execute_array: test_execute_array
};