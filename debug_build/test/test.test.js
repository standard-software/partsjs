"use strict";

var test_execute_test = function test_execute_test(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown;

  var test_isThrown = function test_isThrown() {
    checkEqual(true, isThrown(function () {
      throw 1;
    }, function (throwValue) {
      return throwValue === 1;
    }));
    checkEqual(false, isThrown(function () {
      throw 1;
    }, function (throwValue) {
      return throwValue !== 1;
    }));
    checkEqual(false, isThrown(function () {
      throw 2;
    }, function (throwValue) {
      return throwValue === 1;
    }));
    checkEqual(false, isThrown(function () {
      throw 1;
    }, function (throwValue) {
      return throwValue === '1';
    }));
    checkEqual(true, isThrown(function () {
      throw '1';
    }, function (throwValue) {
      return throwValue === '1';
    }));
    checkEqual(true, isThrown(function () {
      throw '';
    }, function (throwValue) {
      return throwValue === '';
    }));
    checkEqual(true, isThrown(function () {
      throw {
        test: 'TEST'
      };
    }, function (throwValue) {
      return throwValue.test === 'TEST';
    }));
    checkEqual(false, isThrown(function () {
      throw {
        test: 'TEST'
      };
    }, function (throwValue) {
      return throwValue.test === 'test';
    }));
    checkEqual(false, isThrown(function () {}, function () {}));
    checkEqual(true, isThrown(function () {
      throw 1;
    }));
    checkEqual(true, isThrown(function () {
      throw '1';
    }));
    checkEqual(false, isThrown(function () {}));
  };

  console.log('  test test.js');
  test_isThrown();
};

module.exports = {
  test_execute_test: test_execute_test
};