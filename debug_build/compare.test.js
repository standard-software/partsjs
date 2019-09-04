"use strict";

var test_execute_compare = function test_execute_compare(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException;
  var _parts$compare = parts.compare,
      or = _parts$compare.or,
      match = _parts$compare.match,
      matchValue = _parts$compare.matchValue,
      defaultValue = _parts$compare.defaultValue;

  var test_or = function test_or() {
    var value;
    checkEqual(false, or(value, []));
    checkEqual(false, or(value, [null]));
    checkEqual(false, or(value, [null, null]));
    checkEqual(false, or(value, [null, 0]));
    checkEqual(false, or(value, [0, '']));
    checkEqual(true, or(value, [undefined]));
    checkEqual(true, or(value, [undefined, null]));
    checkEqual(true, or(value, [null, undefined]));
    checkEqual(true, or(value, [undefined, undefined]));
    checkEqual(true, or(value, [undefined, 0]));
    value = null;
    checkEqual(false, or(value, []));
    checkEqual(false, or(value, [undefined]));
    checkEqual(false, or(value, [undefined, undefined]));
    checkEqual(false, or(value, [undefined, 0]));
    checkEqual(false, or(value, [0, '']));
    checkEqual(true, or(value, [null]));
    checkEqual(true, or(value, [null, undefined]));
    checkEqual(true, or(value, [undefined, null]));
    checkEqual(true, or(value, [null, null]));
    checkEqual(true, or(value, [null, 0]));
    value = 1;
    checkEqual(true, or(value, [1]));
    checkEqual(true, or(value, [1, 2]));
    checkEqual(true, or(value, [1, 2, 3]));
    checkEqual(false, or(value, [2]));
    checkEqual(false, or(value, [2, 3]));
  };

  var test_match = function test_match() {
    // normal args string
    checkEqual(false, match('abc', ['123', '456', '789']), 'test_match 1');
    checkEqual(true, match('abc', ['123', '456', 'abc']), 'test_match 2');
    checkEqual(false, match('abc', ['123', '456', /^b/]), 'test_match 3');
    checkEqual(true, match('abc', ['123', '456', /^a/]), 'test_match 4');
    checkEqual(false, match('abc', []), 'test_match 5');
    checkEqual(false, match('123', [null, undefined, 123, 'abc']), 'test_match 6');
    checkEqual(true, match('abc', [function (value) {
      return value.startsWith('a');
    }]), 'test_match 7');
    checkEqual(false, match('abc', [function (value) {
      return value.startsWith('b');
    }]), 'test_match 8'); // normal args number

    checkEqual(false, match(123, ['123', '456', '789']), 'test_match number 1');
    checkEqual(true, match(123, [123, 456, 'abc']), 'test_match number 2');
    checkEqual(false, match(123, ['123', '456', /^1/]), 'test_match number 3');
    checkEqual(true, match(123, [123, '456', /^1/]), 'test_match number 4');
    checkEqual(false, match(123, []), 'test_match number 5');
    checkEqual(true, match(123, [null, undefined, 123, 'abc']), 'test_match number 6');
    checkEqual(true, match(100, [function (value) {
      return 100 <= value;
    }]), 'test_match 7');
    checkEqual(false, match(99, [function (value) {
      return 100 <= value;
    }]), 'test_match 8'); // exception

    checkEqual(true, isThrownException(function () {
      match('123', 'abc');
    }, new TypeError().name)); // parameter args string

    checkEqual(false, match({
      value: 'abc',
      compareArray: ['123', '456', '789']
    }), 'test_match param 1');
    checkEqual(true, match({
      value: 'abc',
      compareArray: ['123', '456', 'abc']
    }), 'test_match param 2');
    checkEqual(false, match({
      value: 'abc',
      compareArray: ['123', '456', /^b/]
    }), 'test_match param 3');
    checkEqual(true, match({
      value: 'abc',
      compareArray: ['123', '456', /^a/]
    }), 'test_match param 4');
    checkEqual(false, match({
      value: 'abc',
      compareArray: []
    }), 'test_match param 5');
    checkEqual(false, match({
      value: '123',
      compareArray: [null, undefined, 123, 'abc']
    }), 'test_match param 6');
    checkEqual(true, match({
      value: 'abc',
      compareArray: [function (value) {
        return value.startsWith('a');
      }]
    }), 'test_match param 7');
    checkEqual(false, match({
      value: 'abc',
      compareArray: [function (value) {
        return value.startsWith('b');
      }]
    }), 'test_match param 8'); // parameter args number

    checkEqual(false, match({
      value: 123,
      compareArray: ['123', '456', '789']
    }), 'test_match param number 1');
    checkEqual(true, match({
      value: 123,
      compareArray: [123, 456, 'abc']
    }), 'test_match param number 2');
    checkEqual(false, match({
      value: 123,
      compareArray: ['123', '456', /^1/]
    }), 'test_match param number 3');
    checkEqual(true, match({
      value: 123,
      compareArray: [123, '456', /^1/]
    }), 'test_match param number 4');
    checkEqual(false, match({
      value: 123,
      compareArray: []
    }), 'test_match param number 5');
    checkEqual(true, match({
      value: 123,
      compareArray: [null, undefined, 123, 'abc']
    }), 'test_match param number 6');
    checkEqual(true, match({
      value: 100,
      compareArray: [function (value) {
        return 100 <= value;
      }]
    }), 'test_match param 7');
    checkEqual(false, match({
      value: 99,
      compareArray: [function (value) {
        return 100 <= value;
      }]
    }), 'test_match param 8'); // exception

    checkEqual(false, isThrown(function () {
      match({
        value: '123',
        compareArray: ['123']
      });
    }), 'test_match thrown 1');
    checkEqual(false, isThrown(function () {
      match({
        value: '123',
        compareArray: []
      });
    }), 'test_match thrown 2');
    checkEqual(false, isThrown(function () {
      match({
        value: '123',
        compareArray: [123]
      });
    }), 'test_match thrown 3');
    checkEqual(true, isThrown(function () {
      match({
        value: '123',
        compareArray: 123
      });
    }), 'test_match thrown 4');
  };

  var test_matchValue = function test_matchValue() {
    // almost test_match done
    checkEqual(999, matchValue(99, [99], 999));
    checkEqual(98, matchValue(98, [99], 999));
    checkEqual(999, matchValue({
      value: 99,
      compareArray: [99],
      inMatchValue: 999
    }));
    checkEqual(98, matchValue({
      value: 98,
      compareArray: [99],
      inMatchValue: 999
    }));
  };

  var test_defaultValue = function test_defaultValue() {
    // almost test_match done
    checkEqual('123', defaultValue('123', 999));
    checkEqual(999, defaultValue(undefined, 999));
    checkEqual(999, defaultValue(null, 999));
    checkEqual('123', defaultValue({
      value: '123',
      inMatchValue: 999
    }));
    checkEqual(999, defaultValue({
      value: undefined,
      inMatchValue: 999
    }));
    checkEqual(999, defaultValue({
      value: null,
      inMatchValue: 999
    }));
  };

  console.log('  test compare.js start.');
  test_or();
  test_match();
  test_matchValue();
  test_defaultValue();
  console.log('  test commpare.js finish.');
};

module.exports = {
  test_execute_compare: test_execute_compare
};