"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_test = void 0;

/* eslint-disable no-throw-literal */
var test_execute_test = function test_execute_test(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      expect = _parts$test.expect;
  describe('test_execute_test', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;

    var test_isThrown = function test_isThrown() {
      it('test_isThrown', function () {
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
    };

    var test_expect = function test_expect() {
      it('test_expect', function () {
        expect(123).toBe(123);
        expect([1, 2, 3]).not.toBe([1, 2, 3]);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect([1, 2, 3]).not.toEqual([1, 2, 2]);
      });
    };

    test_isThrown();
    test_expect();
  });
};

exports.test_execute_test = test_execute_test;
var _default = {
  test_execute_test: test_execute_test
};
exports["default"] = _default;