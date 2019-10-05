"use strict";

var test_execute_convert = function test_execute_convert(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException;
  var _parts$convert = parts.convert,
      numberToString = _parts$convert.numberToString,
      stringToNumber = _parts$convert.stringToNumber,
      stringToInteger = _parts$convert.stringToInteger;

  var test_numberToString = function test_numberToString() {
    // Positive number
    checkEqual('32', numberToString(32));
    checkEqual('32', numberToString(32, 10));
    checkEqual('31.5', numberToString(31.5, 10));
    checkEqual('100000', numberToString(32, 2));
    checkEqual('11111', numberToString(31, 2));
    checkEqual('11111.1', numberToString(31.5, 2));
    checkEqual('11111.01', numberToString(31.25, 2));
    checkEqual('40', numberToString(32, 8));
    checkEqual('37', numberToString(31, 8));
    checkEqual('37.4', numberToString(31.5, 8));
    checkEqual('20', numberToString(32, 16));
    checkEqual('1f', numberToString(31, 16));
    checkEqual('1f.8', numberToString(31.5, 16));
    checkEqual('44', numberToString(32, 7));
    checkEqual('43', numberToString(31, 7));
    checkEqual('255', numberToString(255));
    checkEqual('11', numberToString(11));
    checkEqual('255', numberToString(0xFF));
    checkEqual('16', numberToString(16));
    checkEqual('ff', numberToString(255, 16));
    checkEqual('b', numberToString(11, 16));
    checkEqual('177', numberToString(127, 8));
    checkEqual('12', numberToString(10, 8));
    checkEqual('11', numberToString(3, 2));
    checkEqual('1111', numberToString(15, 2)); // Negative number

    checkEqual('-32', numberToString(-32));
    checkEqual('-32', numberToString(-32, 10));
    checkEqual('-31.5', numberToString(-31.5, 10));
    checkEqual('-100000', numberToString(-32, 2));
    checkEqual('-11111', numberToString(-31, 2));
    checkEqual('-11111.1', numberToString(-31.5, 2));
    checkEqual('-11111.01', numberToString(-31.25, 2));
    checkEqual('-40', numberToString(-32, 8));
    checkEqual('-37', numberToString(-31, 8));
    checkEqual('-37.4', numberToString(-31.5, 8));
    checkEqual('-20', numberToString(-32, 16));
    checkEqual('-1f', numberToString(-31, 16));
    checkEqual('-1f.8', numberToString(-31.5, 16));
    checkEqual('-44', numberToString(-32, 7));
    checkEqual('-43', numberToString(-31, 7));
    checkEqual('-255', numberToString(-255));
    checkEqual('-11', numberToString(-11));
    checkEqual('-255', numberToString(-0xFF));
    checkEqual('-16', numberToString(-16));
    checkEqual('-ff', numberToString(-255, 16));
    checkEqual('-b', numberToString(-11, 16));
    checkEqual('-177', numberToString(-127, 8));
    checkEqual('-12', numberToString(-10, 8));
    checkEqual('-11', numberToString(-3, 2));
    checkEqual('-1111', numberToString(-15, 2)); // Exception

    var i = 0;
    i += 1;
    checkEqual(true, isThrownException(function () {
      numberToString('123', 10);
    }, new TypeError().name), "test numberToString exception ".concat(i));
    i += 1;
    checkEqual(false, isThrownException(function () {
      numberToString(32, 2);
    }, new TypeError().name), "test numberToString exception ".concat(i));
    i += 1;
    checkEqual(true, isThrownException(function () {
      numberToString(32, 2.5);
    }, new TypeError().name), "test numberToString exception ".concat(i));
    i += 1;
    checkEqual(true, isThrownException(function () {
      numberToString(32, 1);
    }, new RangeError().name), "test numberToString exception ".concat(i));
    i += 1;
    checkEqual(false, isThrownException(function () {
      numberToString(32, 36);
    }, new TypeError().name), "test numberToString exception ".concat(i));
    i += 1;
    checkEqual(true, isThrownException(function () {
      numberToString(32, 37);
    }, new RangeError().name), "test numberToString exception ".concat(i)); // Parameter Args

    checkEqual('-32', numberToString({
      value: -32
    }));
    checkEqual('-100000', numberToString({
      value: -32,
      radix: 2
    }));
  };

  var test_stringToNumber = function test_stringToNumber() {
    // Integer
    checkEqual(123, stringToNumber('123'));
    checkEqual(123, stringToNumber('0123'));
    checkEqual(123, stringToNumber('+123'));
    checkEqual(-123, stringToNumber('-0123'));
    checkEqual(undefined, stringToNumber(' 123'));
    checkEqual(undefined, stringToNumber('123 '));
    checkEqual(undefined, stringToNumber(' 123 '));
    checkEqual(undefined, stringToNumber('123 0'));
    checkEqual(undefined, stringToNumber('0 123'));
    checkEqual(undefined, stringToNumber('1 123'));
    checkEqual(undefined, stringToNumber('123a'));
    checkEqual(undefined, stringToNumber('a123')); // Decimal

    checkEqual(123.4, stringToNumber('123.4'));
    checkEqual(123.4, stringToNumber('0123.4'));
    checkEqual(123.4, stringToNumber('+123.4'));
    checkEqual(-123.4, stringToNumber('-0123.4'));
    checkEqual(undefined, stringToNumber(' 123.4'));
    checkEqual(undefined, stringToNumber('123.4 '));
    checkEqual(undefined, stringToNumber(' 123.4 '));
    checkEqual(undefined, stringToNumber('123.4 0'));
    checkEqual(undefined, stringToNumber('0 123.4'));
    checkEqual(undefined, stringToNumber('1 123.4'));
    checkEqual(undefined, stringToNumber('123 .4'));
    checkEqual(undefined, stringToNumber('123. 4'));
    checkEqual(undefined, stringToNumber('123.4a'));
    checkEqual(undefined, stringToNumber('a123.4'));
    checkEqual(123.45, stringToNumber('123.45'));
    checkEqual(undefined, stringToNumber('123.4.5'));
    checkEqual(undefined, stringToNumber('abc'));
    checkEqual(null, stringToNumber('abc', null));
    checkEqual(NaN, stringToNumber('abc', NaN)); // Exception

    var i = 0;
    i += 1;
    checkEqual(true, isThrownException(function () {
      stringToNumber(123);
    }, new TypeError().name), "test stringToNumber exception ".concat(i)); // Parameter Args

    checkEqual(-123, stringToNumber({
      value: '-0123'
    }));
    checkEqual(null, stringToNumber({
      value: 'abc',
      defaultValue: null
    }));
  };

  var test_stringToInteger = function test_stringToInteger() {
    // Integer
    checkEqual(123, stringToInteger('123'));
    checkEqual(123, stringToInteger('0123'));
    checkEqual(123, stringToInteger('+123'));
    checkEqual(-123, stringToInteger('-0123'));
    checkEqual(undefined, stringToInteger(' 123'));
    checkEqual(undefined, stringToInteger('123 '));
    checkEqual(undefined, stringToInteger(' 123 '));
    checkEqual(undefined, stringToInteger('123 0'));
    checkEqual(undefined, stringToInteger('0 123'));
    checkEqual(undefined, stringToInteger('1 123'));
    checkEqual(undefined, stringToInteger('123a'));
    checkEqual(undefined, stringToInteger('a123')); // Decimal

    checkEqual(undefined, stringToInteger('123.4'));
    checkEqual(undefined, stringToInteger('0123.4'));
    checkEqual(undefined, stringToInteger('+123.4'));
    checkEqual(undefined, stringToInteger('-0123.4'));
    checkEqual(undefined, stringToInteger(' 123.4'));
    checkEqual(undefined, stringToInteger('123.4 '));
    checkEqual(undefined, stringToInteger(' 123.4 '));
    checkEqual(undefined, stringToInteger('123.4 0'));
    checkEqual(undefined, stringToInteger('0 123.4'));
    checkEqual(undefined, stringToInteger('1 123.4'));
    checkEqual(undefined, stringToInteger('123 .4'));
    checkEqual(undefined, stringToInteger('123. 4'));
    checkEqual(undefined, stringToInteger('123.4a'));
    checkEqual(undefined, stringToInteger('a123.4'));
    checkEqual(undefined, stringToInteger('123.45'));
    checkEqual(undefined, stringToInteger('123.4.5')); // Positive number

    checkEqual(32, stringToInteger('32'));
    checkEqual(32, stringToInteger('32', undefined, 10));
    checkEqual(undefined, stringToInteger('31.5', undefined, 10));
    checkEqual(32, stringToInteger('100000', undefined, 2));
    checkEqual(31, stringToInteger('11111', undefined, 2));
    checkEqual(undefined, stringToInteger('11111.1', undefined, 2));
    checkEqual(undefined, stringToInteger('11111.01', undefined, 2));
    checkEqual(32, stringToInteger('40', undefined, 8));
    checkEqual(31, stringToInteger('37', undefined, 8));
    checkEqual(undefined, stringToInteger('37.4', undefined, 8));
    checkEqual(32, stringToInteger('20', undefined, 16));
    checkEqual(31, stringToInteger('1f', undefined, 16));
    checkEqual(undefined, stringToInteger('1f.8', undefined, 16));
    checkEqual(32, stringToInteger('44', undefined, 7));
    checkEqual(31, stringToInteger('43', undefined, 7));
    checkEqual(255, stringToInteger('255', undefined, 10));
    checkEqual(11, stringToInteger('11', undefined, 10));
    checkEqual(255, stringToInteger('FF', undefined, 16));
    checkEqual(16, stringToInteger('20', undefined, 8));
    checkEqual(255, stringToInteger('ff', undefined, 16));
    checkEqual(11, stringToInteger('b', undefined, 16));
    checkEqual(127, stringToInteger('177', undefined, 8));
    checkEqual(10, stringToInteger('12', undefined, 8));
    checkEqual(3, stringToInteger('11', undefined, 2));
    checkEqual(15, stringToInteger('1111', undefined, 2)); // Negative number

    checkEqual(-32, stringToInteger('-32'));
    checkEqual(-32, stringToInteger('-32', undefined, 10));
    checkEqual(undefined, stringToInteger('-31.5', undefined, 10));
    checkEqual(-32, stringToInteger('-100000', undefined, 2));
    checkEqual(-31, stringToInteger('-11111', undefined, 2));
    checkEqual(undefined, stringToInteger('-11111.1', undefined, 2));
    checkEqual(undefined, stringToInteger('-11111.01', undefined, 2));
    checkEqual(-32, stringToInteger('-40', undefined, 8));
    checkEqual(-31, stringToInteger('-37', undefined, 8));
    checkEqual(undefined, stringToInteger('-37.4', undefined, 8));
    checkEqual(-32, stringToInteger('-20', undefined, 16));
    checkEqual(-31, stringToInteger('-1f', undefined, 16));
    checkEqual(undefined, stringToInteger('-1f.8', undefined, 16));
    checkEqual(-32, stringToInteger('-44', undefined, 7));
    checkEqual(-31, stringToInteger('-43', undefined, 7));
    checkEqual(-255, stringToInteger('-255', undefined, 10));
    checkEqual(-11, stringToInteger('-11', undefined, 10));
    checkEqual(-255, stringToInteger('-FF', undefined, 16));
    checkEqual(-16, stringToInteger('-20', undefined, 8));
    checkEqual(-255, stringToInteger('-ff', undefined, 16));
    checkEqual(-11, stringToInteger('-b', undefined, 16));
    checkEqual(-127, stringToInteger('-177', undefined, 8));
    checkEqual(-10, stringToInteger('-12', undefined, 8));
    checkEqual(-3, stringToInteger('-11', undefined, 2));
    checkEqual(-15, stringToInteger('-1111', undefined, 2)); // Default Value

    checkEqual(undefined, stringToInteger('abc'));
    checkEqual(null, stringToInteger('abc', null, 10));
    checkEqual(NaN, stringToInteger('abc', NaN, 10)); // Exception

    var i = 0;
    i += 1;
    checkEqual(true, isThrownException(function () {
      stringToInteger(123);
    }, new TypeError().name), "test stringToInteger exception ".concat(i));
    i += 1;
    checkEqual(false, isThrownException(function () {
      stringToInteger('123', undefined, 2);
    }, new TypeError().name), "test stringToInteger exception ".concat(i));
    i += 1;
    checkEqual(true, isThrownException(function () {
      stringToInteger('123', undefined, 2.5);
    }, new TypeError().name), "test stringToInteger exception ".concat(i));
    i += 1;
    checkEqual(true, isThrownException(function () {
      stringToInteger('123', undefined, 1);
    }, new RangeError().name), "test stringToInteger exception ".concat(i));
    i += 1;
    checkEqual(false, isThrownException(function () {
      stringToInteger('123', undefined, 36);
    }, new TypeError().name), "test stringToInteger exception ".concat(i));
    i += 1;
    checkEqual(true, isThrownException(function () {
      stringToInteger('123', undefined, 37);
    }, new RangeError().name), "test stringToInteger exception ".concat(i)); // Parameter Args

    checkEqual(-123, stringToInteger({
      value: '-0123'
    }));
    checkEqual(null, stringToInteger({
      value: 'abc',
      defaultValue: null
    }));
    checkEqual(undefined, stringToInteger({
      value: 'abc'
    }));
    checkEqual(-15, stringToInteger({
      value: '-1111',
      radix: 2
    }));
  };

  console.log('  test convert.js');
  test_numberToString();
  test_stringToNumber();
  test_stringToInteger();
};

module.exports = {
  test_execute_convert: test_execute_convert
};