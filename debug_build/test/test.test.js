"use strict";

/* eslint-disable no-throw-literal */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_test = function test_execute_test(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe(test_execute_test.name, function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;

    var test_isThrown = function test_isThrown() {
      describe(test_isThrown.name, function () {
        it(test_isThrown.name, function () {
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
        });
      });
    };

    console.log('  test test.js');
    test_isThrown();
  });
};

module.exports = {
  test_execute_test: test_execute_test
};