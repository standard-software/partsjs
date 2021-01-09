"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_convert = void 0;

/* eslint-disable space-in-parens */

/* eslint-disable no-var */
var test_execute_convert = function test_execute_convert(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_convert', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$convert = parts.convert,
        numberToString = _parts$convert.numberToString,
        valueToString = _parts$convert.valueToString,
        stringToNumber = _parts$convert.stringToNumber,
        stringToNumberDefault = _parts$convert.stringToNumberDefault,
        stringToInteger = _parts$convert.stringToInteger,
        stringToIntegerDefault = _parts$convert.stringToIntegerDefault,
        valueToNumber = _parts$convert.valueToNumber,
        valueToNumberDefault = _parts$convert.valueToNumberDefault,
        valueToInteger = _parts$convert.valueToInteger,
        valueToIntegerDefault = _parts$convert.valueToIntegerDefault;

    var test_StringCast_standard = function test_StringCast_standard() {
      it('test_standardStringCast', function () {
        // Positive number
        checkEqual('32', String(32));
        checkEqual('31.5', String(31.5));
        checkEqual('255', String(255));
        checkEqual('11', String(11));
        checkEqual('255', String(0xFF));
        checkEqual('16', String(16));
        checkEqual('100000', String(1e+5));
        checkEqual('0.00001', String(1e-5));
        checkEqual('255', String(+0xFF));
        checkEqual('16', String(+16));
        checkEqual('100000', String(+1e+5));
        checkEqual('0.00001', String(+1e-5)); // Negative number

        checkEqual('-32', String(-32));
        checkEqual('-31.5', String(-31.5));
        checkEqual('-255', String(-255));
        checkEqual('-11', String(-11));
        checkEqual('-255', String(-0xFF));
        checkEqual('-16', String(-16));
        checkEqual('-100000', String(-1e+5));
        checkEqual('-0.00001', String(-1e-5)); // spacial number value

        checkEqual('NaN', String(NaN));
        checkEqual('Infinity', String(Infinity));
        checkEqual('-Infinity', String(-Infinity)); // other type

        checkEqual('null', String(null));
        checkEqual('undefined', String(undefined));
        checkEqual('[object Object]', String({}));
        checkEqual('', String([]));
        checkEqual('1', String([1]));
        checkEqual('1,2,3', String([1, 2, 3]));
        checkEqual('', String(''));
        checkEqual('a', String('a'));
        checkEqual('true', String(true));
        checkEqual('false', String(false));
      });
    };

    var test_toString_standard = function test_toString_standard() {
      it('test_standardToString', function () {
        // Positive number
        checkEqual('32', 32 .toString());
        checkEqual('31.5', 31.5.toString());
        checkEqual('255', 255 .toString());
        checkEqual('11', 11 .toString());
        checkEqual('255', 0xFF.toString());
        checkEqual('16', 16 .toString());
        checkEqual('100000', 1e+5.toString());
        checkEqual('0.00001', 1e-5.toString());
        checkEqual('255', (+0xFF).toString());
        checkEqual('16', (+16).toString());
        checkEqual('100000', (+1e+5).toString());
        checkEqual('0.00001', (+1e-5).toString()); // Negative number

        checkEqual('-32', (-32).toString());
        checkEqual('-31.5', (-31.5).toString());
        checkEqual('-255', (-255).toString());
        checkEqual('-11', (-11).toString());
        checkEqual('-255', (-0xFF).toString());
        checkEqual('-16', (-16).toString());
        checkEqual('-100000', (-1e+5).toString());
        checkEqual('-0.00001', (-1e-5).toString()); // spacial number value

        checkEqual('NaN', NaN.toString());
        checkEqual('Infinity', Infinity.toString());
        checkEqual('-Infinity', (-Infinity).toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -'Infinity'); // Decimal number other

        checkEqual('1010.01', 10.25.toString(2));
        checkEqual('22.1', 10.25.toString(4));
        checkEqual('12.2', 10.25.toString(8));
        checkEqual('a.4', 10.25.toString(16)); // other type

        checkEqual(true, isThrown(function () {
          return null.toString();
        }));
        checkEqual(true, isThrown(function () {
          return undefined.toString();
        }));
        checkEqual('[object Object]', {}.toString());
        checkEqual('', [].toString());
        checkEqual('1', [1].toString());
        checkEqual('1,2,3', [1, 2, 3].toString());
        checkEqual('', ''.toString());
        checkEqual('a', 'a'.toString());
        checkEqual('true', true.toString());
        checkEqual('false', false.toString());
      });
    };

    var test_numberToString = function test_numberToString() {
      it('test_numberToString', function () {
        // Positive number
        checkEqual('32', numberToString(32));
        checkEqual('32.5', numberToString(32.5));
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
        checkEqual('-32.5', numberToString(-32.5));
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
        checkEqual('-1111', numberToString(-15, 2)); // spacial value

        checkEqual(true, isThrown(function () {
          return numberToString(NaN);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(Infinity);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(-Infinity);
        })); // Exception

        checkEqual(true, isThrown(function () {
          return numberToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', numberToString({
          value: -32
        }));
        checkEqual('-100000', numberToString({
          value: -32,
          radix: 2
        })); // other type

        checkEqual(true, isThrown(function () {
          return numberToString(null);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(undefined);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString({});
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('a');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(true);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(false);
        }));
      });
    };

    var test_valueToString = function test_valueToString() {
      it('test_valueToString', function () {
        // Positive number
        checkEqual('32', valueToString(32));
        checkEqual('32.5', valueToString(32.5));
        checkEqual('32', valueToString(32, 10));
        checkEqual('31.5', valueToString(31.5, 10));
        checkEqual('100000', valueToString(32, 2));
        checkEqual('11111', valueToString(31, 2));
        checkEqual('11111.1', valueToString(31.5, 2));
        checkEqual('11111.01', valueToString(31.25, 2));
        checkEqual('40', valueToString(32, 8));
        checkEqual('37', valueToString(31, 8));
        checkEqual('37.4', valueToString(31.5, 8));
        checkEqual('20', valueToString(32, 16));
        checkEqual('1f', valueToString(31, 16));
        checkEqual('1f.8', valueToString(31.5, 16));
        checkEqual('44', valueToString(32, 7));
        checkEqual('43', valueToString(31, 7));
        checkEqual('255', valueToString(255));
        checkEqual('11', valueToString(11));
        checkEqual('255', valueToString(0xFF));
        checkEqual('16', valueToString(16));
        checkEqual('ff', valueToString(255, 16));
        checkEqual('b', valueToString(11, 16));
        checkEqual('177', valueToString(127, 8));
        checkEqual('12', valueToString(10, 8));
        checkEqual('11', valueToString(3, 2));
        checkEqual('1111', valueToString(15, 2)); // Negative number

        checkEqual('-32', valueToString(-32));
        checkEqual('-32.5', valueToString(-32.5));
        checkEqual('-32', valueToString(-32, 10));
        checkEqual('-31.5', valueToString(-31.5, 10));
        checkEqual('-100000', valueToString(-32, 2));
        checkEqual('-11111', valueToString(-31, 2));
        checkEqual('-11111.1', valueToString(-31.5, 2));
        checkEqual('-11111.01', valueToString(-31.25, 2));
        checkEqual('-40', valueToString(-32, 8));
        checkEqual('-37', valueToString(-31, 8));
        checkEqual('-37.4', valueToString(-31.5, 8));
        checkEqual('-20', valueToString(-32, 16));
        checkEqual('-1f', valueToString(-31, 16));
        checkEqual('-1f.8', valueToString(-31.5, 16));
        checkEqual('-44', valueToString(-32, 7));
        checkEqual('-43', valueToString(-31, 7));
        checkEqual('-255', valueToString(-255));
        checkEqual('-11', valueToString(-11));
        checkEqual('-255', valueToString(-0xFF));
        checkEqual('-16', valueToString(-16));
        checkEqual('-ff', valueToString(-255, 16));
        checkEqual('-b', valueToString(-11, 16));
        checkEqual('-177', valueToString(-127, 8));
        checkEqual('-12', valueToString(-10, 8));
        checkEqual('-11', valueToString(-3, 2));
        checkEqual('-1111', valueToString(-15, 2)); // spacial number value

        testCounter(0);
        checkEqual('NaN', valueToString(NaN));
        checkEqual('Infinity', valueToString(Infinity));
        checkEqual('-Infinity', valueToString(-Infinity)); // Exception

        checkEqual(false, isThrown(function () {
          return valueToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', valueToString({
          value: -32
        }));
        checkEqual('-100000', valueToString({
          value: -32,
          radix: 2
        })); // Decimal number other

        checkEqual('1010.01', valueToString(10.25, 2));
        checkEqual('22.1', valueToString(10.25, 4));
        checkEqual('12.2', valueToString(10.25, 8));
        checkEqual('a.4', valueToString(10.25, 16)); // other type

        checkEqual('null', valueToString(null));
        checkEqual('undefined', valueToString(undefined));
        checkEqual('[object Object]', valueToString({}));
        checkEqual('', valueToString([]));
        checkEqual('1', valueToString([1]));
        checkEqual('1,2,3', valueToString([1, 2, 3]));
        checkEqual('', valueToString(''));
        checkEqual('a', valueToString('a'));
        checkEqual('true', valueToString(true));
        checkEqual('false', valueToString(false));
      });
    };

    var test_NumberCast_standard = function test_NumberCast_standard() {
      it('test_NumberCast_standard', function () {
        // Integer
        checkEqual(123, Number('123'));
        checkEqual(123, Number('0123'));
        checkEqual(123, Number('+123'));
        checkEqual(-123, Number('-0123'));
        checkEqual(123, Number(' 123'), '1');
        checkEqual(123, Number('123 '), '2');
        checkEqual(123, Number(' 123 '), '3');
        checkEqual(123, Number('　123'), '4');
        checkEqual(123, Number('123　'), '5');
        checkEqual(123, Number('　123　'), '6');
        checkEqual(NaN, Number('123 0'));
        checkEqual(NaN, Number('0 123'));
        checkEqual(NaN, Number('1 123'));
        checkEqual(NaN, Number('123a'));
        checkEqual(NaN, Number('a123')); // Decimal

        checkEqual(123.4, Number('123.4'));
        checkEqual(123.4, Number('0123.4'));
        checkEqual(123.4, Number('+123.4'));
        checkEqual(-123.4, Number('-0123.4'));
        checkEqual(123.5, Number('123.5'));
        checkEqual(123.5, Number('0123.5'));
        checkEqual(123.5, Number('+123.5'));
        checkEqual(-123.5, Number('-0123.5'));
        checkEqual(123.4, Number(' 123.4'));
        checkEqual(123.4, Number('123.4 '));
        checkEqual(123.4, Number(' 123.4 '));
        checkEqual(123.4, Number('　123.4'));
        checkEqual(123.4, Number('123.4　'));
        checkEqual(123.4, Number('　123.4　'));
        checkEqual(NaN, Number('123.4 0'));
        checkEqual(NaN, Number('0 123.4'));
        checkEqual(NaN, Number('1 123.4'));
        checkEqual(NaN, Number('123 .4'));
        checkEqual(NaN, Number('123. 4'));
        checkEqual(NaN, Number('123.4a'));
        checkEqual(NaN, Number('a123.4'));
        checkEqual(123.45, Number('123.45'));
        checkEqual(NaN, Number('123.4.5')); // string default value

        checkEqual(NaN, Number('abc')); // space string

        checkEqual(0, Number('')); // ?

        checkEqual(0, Number(' ')); // ?

        checkEqual(0, Number('　')); // ?
        // exponential notation

        checkEqual(3.14, Number(3.14));
        checkEqual(3.14, Number('3.14'));
        checkEqual(3.14, Number('314e-2'));
        checkEqual(3.14, Number('0.0314E+2'));
        checkEqual(0.14, Number('.14'));
        checkEqual(0.00000000000000001, Number('1e-17'));
        checkEqual(1e-17, Number('1e-17')); // exponential notation detail

        checkEqual(1, Number('1.'));
        checkEqual(NaN, Number('1.1e'));
        checkEqual(NaN, Number('1.1e+'));
        checkEqual(100000, Number('1e+5'));
        checkEqual(0.00001, Number('1e-5'));
        checkEqual(NaN, Number('1.e'));
        checkEqual(NaN, Number('1.e+'));
        checkEqual(100000, Number('1.e+5')); // Number different

        checkEqual(291, Number('0x123'));

        if (parts.platform.isGasRhino()) {
          checkEqual(291, Number('+0x123'));
          checkEqual(-291, Number('-0x123'));
        } else {
          checkEqual(NaN, Number('+0x123'));
          checkEqual(NaN, Number('-0x123'));
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('0o123'));
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(NaN, Number('0o123'));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(NaN, Number('0o123'));
        } else {
          checkEqual(83, Number('0o123'));
        }

        checkEqual(NaN, Number('+0o123'));
        checkEqual(NaN, Number('-0o123'));
        checkEqual(Infinity, Number('Infinity'));
        checkEqual(NaN, Number('infinity'));
        checkEqual(NaN, Number('inf'));
        checkEqual(NaN, Number('info')); // Number

        checkEqual(123, Number(123));
        checkEqual(-123, Number(-123));
        checkEqual(1.23, Number(1.23));
        checkEqual(-1.23, Number(-1.23));
        checkEqual(Infinity, Number(Infinity));
        checkEqual(-Infinity, Number(-Infinity));
        checkEqual(NaN, Number(NaN)); // Other

        checkEqual(0, Number(null)); // !

        checkEqual(NaN, Number(undefined));
        checkEqual(NaN, Number({}));
        checkEqual(NaN, Number({
          a: 1
        }));
        checkEqual(0, Number([])); // ?

        checkEqual(1, Number([1])); // ?

        checkEqual(123, Number([123])); // ?

        checkEqual(NaN, Number([1, 2]));
      });
    };

    var test_parseFloat_standard = function test_parseFloat_standard() {
      it('test_parseFloat_standard', function () {
        // Integer
        checkEqual(123, parseFloat('123'));
        checkEqual(123, parseFloat('0123'));
        checkEqual(123, parseFloat('+123'));
        checkEqual(-123, parseFloat('-0123'));
        checkEqual(123, parseFloat(' 123'), '1');
        checkEqual(123, parseFloat('123 '), '2');
        checkEqual(123, parseFloat(' 123 '), '3');
        checkEqual(123, parseFloat('　123'), '4');
        checkEqual(123, parseFloat('123　'), '5');
        checkEqual(123, parseFloat('　123　'), '6');
        checkEqual(123, parseFloat('123 0'));
        checkEqual(0, parseFloat('0 123'));
        checkEqual(1, parseFloat('1 123'));
        checkEqual(123, parseFloat('123a'));
        checkEqual(NaN, parseFloat('a123')); // Decimal

        checkEqual(123.4, parseFloat('123.4'));
        checkEqual(123.4, parseFloat('0123.4'));
        checkEqual(123.4, parseFloat('+123.4'));
        checkEqual(-123.4, parseFloat('-0123.4'));
        checkEqual(123.5, parseFloat('123.5'));
        checkEqual(123.5, parseFloat('0123.5'));
        checkEqual(123.5, parseFloat('+123.5'));
        checkEqual(-123.5, parseFloat('-0123.5'));
        checkEqual(123.4, parseFloat(' 123.4'));
        checkEqual(123.4, parseFloat('123.4 '));
        checkEqual(123.4, parseFloat(' 123.4 '));
        checkEqual(123.4, parseFloat('　123.4'));
        checkEqual(123.4, parseFloat('123.4　'));
        checkEqual(123.4, parseFloat('　123.4　'));
        checkEqual(123.4, parseFloat('123.4 0'));
        checkEqual(0, parseFloat('0 123.4'));
        checkEqual(1, parseFloat('1 123.4'));
        checkEqual(123, parseFloat('123 .4'));
        checkEqual(123, parseFloat('123. 4'));
        checkEqual(123.4, parseFloat('123.4a'));
        checkEqual(NaN, parseFloat('a123.4'));
        checkEqual(123.45, parseFloat('123.45'));
        checkEqual(123.4, parseFloat('123.4.5')); // string default value

        checkEqual(NaN, parseFloat('abc')); // space string

        checkEqual(NaN, parseFloat(''));
        checkEqual(NaN, parseFloat(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　'));
        } else {
          checkEqual(NaN, parseFloat('　'));
        } // exponential notation


        checkEqual(3.14, parseFloat(3.14));
        checkEqual(3.14, parseFloat('3.14'));
        checkEqual(3.14, parseFloat('314e-2'));
        checkEqual(3.14, parseFloat('0.0314E+2'));
        checkEqual(0.14, parseFloat('.14'));
        checkEqual(0.00000000000000001, parseFloat('1e-17'));
        checkEqual(1e-17, parseFloat('1e-17')); // exponential notation detail

        checkEqual(1, parseFloat('1.'));
        checkEqual(1.1, parseFloat('1.1e'));
        checkEqual(1.1, parseFloat('1.1e+'));
        checkEqual(100000, parseFloat('1e+5'));
        checkEqual(0.00001, parseFloat('1e-5'));
        checkEqual(1, parseFloat('1.e'));
        checkEqual(1, parseFloat('1.e+'));
        checkEqual(100000, parseFloat('1.e+5')); // parseFloat different

        checkEqual(0, parseFloat('0x123'));
        checkEqual(0, parseFloat('+0x123'));
        checkEqual(-0, parseFloat('-0x123'));
        checkEqual(0, parseFloat('0o123'));
        checkEqual(0, parseFloat('+0o123'));
        checkEqual(-0, parseFloat('-0o123'));
        checkEqual(Infinity, parseFloat('Infinity'));
        checkEqual(NaN, parseFloat('infinity'));
        checkEqual(NaN, parseFloat('inf'));
        checkEqual(NaN, parseFloat('info')); // parseFloat

        checkEqual(123, parseFloat(123));
        checkEqual(-123, parseFloat(-123));
        checkEqual(1.23, parseFloat(1.23));
        checkEqual(-1.23, parseFloat(-1.23));
        checkEqual(Infinity, parseFloat(Infinity));
        checkEqual(-Infinity, parseFloat(-Infinity));
        checkEqual(NaN, parseFloat(NaN)); // Other

        checkEqual(NaN, parseFloat(null));
        checkEqual(NaN, parseFloat(undefined));
        checkEqual(NaN, parseFloat({}));
        checkEqual(NaN, parseFloat({
          a: 1
        }));
        checkEqual(NaN, parseFloat([]));
        checkEqual(1, parseFloat([1]));
        checkEqual(123, parseFloat([123]));
        checkEqual(1, parseFloat([1, 2]));
      });
    };

    var test_parseInt_standard = function test_parseInt_standard() {
      it('test_parseInt_standard', function () {
        var parseInt10 = function parseInt10(value) {
          return parseInt(value, 10);
        }; // Integer


        checkEqual(123, parseInt10('123'));
        checkEqual(123, parseInt10('0123'));
        checkEqual(123, parseInt10('+123'));
        checkEqual(-123, parseInt10('-0123'));
        checkEqual(123, parseInt10(' 123'), '1');
        checkEqual(123, parseInt10('123 '), '2');
        checkEqual(123, parseInt10(' 123 '), '3');
        checkEqual(123, parseInt10('　123'), '4');
        checkEqual(123, parseInt10('123　'), '5');
        checkEqual(123, parseInt10('　123　'), '6');
        checkEqual(123, parseInt10('123 0'));
        checkEqual(0, parseInt10('0 123'));
        checkEqual(1, parseInt10('1 123'));
        checkEqual(123, parseInt10('123a'));
        checkEqual(NaN, parseInt10('a123')); // Decimal

        checkEqual(123, parseInt10('123.4'));
        checkEqual(123, parseInt10('0123.4'));
        checkEqual(123, parseInt10('+123.4'));
        checkEqual(-123, parseInt10('-0123.4'));
        checkEqual(123, parseInt10('123.5'));
        checkEqual(123, parseInt10('0123.5'));
        checkEqual(123, parseInt10('+123.5'));
        checkEqual(-123, parseInt10('-0123.5'));
        checkEqual(123, parseInt10(' 123.4'));
        checkEqual(123, parseInt10('123.4 '));
        checkEqual(123, parseInt10(' 123.4 '));
        checkEqual(123, parseInt10('　123.4'));
        checkEqual(123, parseInt10('123.4　'));
        checkEqual(123, parseInt10('　123.4　'));
        checkEqual(123, parseInt10('123.4 0'));
        checkEqual(0, parseInt10('0 123.4'));
        checkEqual(1, parseInt10('1 123.4'));
        checkEqual(123, parseInt10('123 .4'));
        checkEqual(123, parseInt10('123. 4'));
        checkEqual(123, parseInt10('123.4a'));
        checkEqual(NaN, parseInt10('a123.4'));
        checkEqual(123, parseInt10('123.45'));
        checkEqual(123, parseInt10('123.4.5')); // string default value

        checkEqual(NaN, parseInt10('abc')); // space string

        checkEqual(NaN, parseInt10(''));
        checkEqual(NaN, parseInt10(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　'));
        } else {
          checkEqual(NaN, parseInt10('　'));
        } // exponential notation


        checkEqual(3, parseInt10(3.14));
        checkEqual(3, parseInt10('3.14'));
        checkEqual(314, parseInt10('314e-2'));
        checkEqual(0, parseInt10('0.0314E+2'));
        checkEqual(NaN, parseInt10('.14')); // ?

        checkEqual(1, parseInt10('1e-17'));
        checkEqual(1, parseInt10('1e-17')); // exponential notation detail

        checkEqual(1, parseInt10('1.'));
        checkEqual(1, parseInt10('1.1e'));
        checkEqual(1, parseInt10('1.1e+'));
        checkEqual(1, parseInt10('1e+5'));
        checkEqual(1, parseInt10('1e-5'));
        checkEqual(1, parseInt10('1.e'));
        checkEqual(1, parseInt10('1.e+'));
        checkEqual(1, parseInt10('1.e+5')); // parseFloat different

        checkEqual(0, parseInt10('0x123'));
        checkEqual(0, parseInt10('+0x123'));
        checkEqual(-0, parseInt10('-0x123'));
        checkEqual(0, parseInt10('0o123'));
        checkEqual(0, parseInt10('+0o123'));
        checkEqual(-0, parseInt10('-0o123'));
        checkEqual(NaN, parseInt10('Infinity')); // ?

        checkEqual(NaN, parseInt10('infinity'));
        checkEqual(NaN, parseInt10('inf'));
        checkEqual(NaN, parseInt10('info')); // parseFloat

        checkEqual(123, parseInt10(123));
        checkEqual(-123, parseInt10(-123));
        checkEqual(1, parseInt10(1.23));
        checkEqual(-1, parseInt10(-1.23));
        checkEqual(NaN, parseInt10(Infinity));
        checkEqual(NaN, parseInt10(-Infinity));
        checkEqual(NaN, parseInt10(NaN)); // Other

        checkEqual(NaN, parseInt10(null));
        checkEqual(NaN, parseInt10(undefined));
        checkEqual(NaN, parseInt10({}));
        checkEqual(NaN, parseInt10({
          a: 1
        }));
        checkEqual(NaN, parseInt10([]));
        checkEqual(1, parseInt10([1]));
        checkEqual(123, parseInt10([123]));
        checkEqual(1, parseInt10([1, 2])); // Decimal number other

        checkEqual(10, parseInt('1010', 2));
        checkEqual(10, parseInt('22', 4));
        checkEqual(10, parseInt('12', 8));
        checkEqual(10, parseInt('a', 16));
        checkEqual(10, parseInt('A', 16));
      });
    };

    var test_stringToNumber = function test_stringToNumber() {
      it('test_stringToNumber', function () {
        // Integer
        checkEqual(123, stringToNumber('123'));
        checkEqual(123, stringToNumber('0123'));
        checkEqual(123, stringToNumber('+123'));
        checkEqual(-123, stringToNumber('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123');
        })); // Decimal

        checkEqual(123.4, stringToNumber('123.4'));
        checkEqual(123.4, stringToNumber('0123.4'));
        checkEqual(123.4, stringToNumber('+123.4'));
        checkEqual(-123.4, stringToNumber('-0123.4'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123.4');
        }));
        checkEqual(123.45, stringToNumber('123.45'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4.5');
        })); // // string  value

        checkEqual(true, isThrown(function () {
          return stringToNumber('abc');
        })); // // space string

        checkEqual(true, isThrown(function () {
          return stringToNumber('');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　');
        })); // // exponential notation

        checkEqual(3.14, stringToNumber('3.14'));
        checkEqual(3.14, stringToNumber('314e-2'));
        checkEqual(3.14, stringToNumber('0.0314E+2'));
        checkEqual(0.14, stringToNumber('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumber('1e-17'));
        checkEqual(1e-17, stringToNumber('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumber('1.'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e+');
        }));
        checkEqual(100000, stringToNumber('1e+5'));
        checkEqual(0.00001, stringToNumber('1e-5'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e+');
        }));
        checkEqual(100000, stringToNumber('1.e+5')); // Number different

        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumber(123);
        }, new TypeError().name), "test stringToNumber exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumber({
          value: '-0123'
        }));
      });
    };

    var test_stringToNumberDefault = function test_stringToNumberDefault() {
      it('test_stringToNumberDefault', function () {
        // Integer
        checkEqual(123, stringToNumberDefault('123'));
        checkEqual(123, stringToNumberDefault('0123'));
        checkEqual(123, stringToNumberDefault('+123'));
        checkEqual(-123, stringToNumberDefault('-0123'));
        checkEqual(undefined, stringToNumberDefault(' 123'), '1');
        checkEqual(undefined, stringToNumberDefault('123 '), '2');
        checkEqual(undefined, stringToNumberDefault(' 123 '), '3');
        checkEqual(undefined, stringToNumberDefault('　123'), '4');
        checkEqual(undefined, stringToNumberDefault('123　'), '5');
        checkEqual(undefined, stringToNumberDefault('　123　'), '6');
        checkEqual(undefined, stringToNumberDefault('123 0'));
        checkEqual(undefined, stringToNumberDefault('0 123'));
        checkEqual(undefined, stringToNumberDefault('1 123'));
        checkEqual(undefined, stringToNumberDefault('123a'));
        checkEqual(undefined, stringToNumberDefault('a123')); // Decimal

        checkEqual(123.4, stringToNumberDefault('123.4'));
        checkEqual(123.4, stringToNumberDefault('0123.4'));
        checkEqual(123.4, stringToNumberDefault('+123.4'));
        checkEqual(-123.4, stringToNumberDefault('-0123.4'));
        checkEqual(undefined, stringToNumberDefault(' 123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4 '));
        checkEqual(undefined, stringToNumberDefault(' 123.4 '));
        checkEqual(undefined, stringToNumberDefault('　123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4　'));
        checkEqual(undefined, stringToNumberDefault('　123.4　'));
        checkEqual(undefined, stringToNumberDefault('123.4 0'));
        checkEqual(undefined, stringToNumberDefault('0 123.4'));
        checkEqual(undefined, stringToNumberDefault('1 123.4'));
        checkEqual(undefined, stringToNumberDefault('123 .4'));
        checkEqual(undefined, stringToNumberDefault('123. 4'));
        checkEqual(undefined, stringToNumberDefault('123.4a'));
        checkEqual(undefined, stringToNumberDefault('a123.4'));
        checkEqual(123.45, stringToNumberDefault('123.45'));
        checkEqual(undefined, stringToNumberDefault('123.4.5')); // string default value

        checkEqual(undefined, stringToNumberDefault('abc'));
        checkEqual(null, stringToNumberDefault('abc', null));
        checkEqual(NaN, stringToNumberDefault('abc', NaN)); // space string

        checkEqual(undefined, stringToNumberDefault(''));
        checkEqual(undefined, stringToNumberDefault(' '));
        checkEqual(undefined, stringToNumberDefault('　')); // exponential notation

        checkEqual(3.14, stringToNumberDefault('3.14'));
        checkEqual(3.14, stringToNumberDefault('314e-2'));
        checkEqual(3.14, stringToNumberDefault('0.0314E+2'));
        checkEqual(0.14, stringToNumberDefault('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumberDefault('1e-17'));
        checkEqual(1e-17, stringToNumberDefault('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumberDefault('1.'));
        checkEqual(undefined, stringToNumberDefault('1.1e'));
        checkEqual(undefined, stringToNumberDefault('1.1e+'));
        checkEqual(100000, stringToNumberDefault('1e+5'));
        checkEqual(0.00001, stringToNumberDefault('1e-5'));
        checkEqual(undefined, stringToNumberDefault('1.e'));
        checkEqual(undefined, stringToNumberDefault('1.e+'));
        checkEqual(100000, stringToNumberDefault('1.e+5')); // Number different

        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('Infinity'));
        checkEqual(undefined, stringToNumberDefault('infinity'));
        checkEqual(undefined, stringToNumberDefault('inf'));
        checkEqual(undefined, stringToNumberDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumberDefault(123);
        }, new TypeError().name), "test stringToNumberDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumberDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToNumberDefault({
          value: 'abc',
          defaultValue: null
        }));
      });
    };

    var test_valueToNumber = function test_valueToNumber() {
      it('test_valueToNumber', function () {
        // Integer
        checkEqual(123, valueToNumber('123'));
        checkEqual(123, valueToNumber('0123'));
        checkEqual(123, valueToNumber('+123'));
        checkEqual(-123, valueToNumber('-0123'));
        checkEqual(NaN, valueToNumber(' 123'), '1');
        checkEqual(NaN, valueToNumber('123 '), '2');
        checkEqual(NaN, valueToNumber(' 123 '), '3');
        checkEqual(NaN, valueToNumber('　123'), '4');
        checkEqual(NaN, valueToNumber('123　'), '5');
        checkEqual(NaN, valueToNumber('　123　'), '6');
        checkEqual(NaN, valueToNumber('123 0'));
        checkEqual(NaN, valueToNumber('0 123'));
        checkEqual(NaN, valueToNumber('1 123'));
        checkEqual(NaN, valueToNumber('123a'));
        checkEqual(NaN, valueToNumber('a123')); // Decimal

        checkEqual(123.4, valueToNumber('123.4'));
        checkEqual(123.4, valueToNumber('0123.4'));
        checkEqual(123.4, valueToNumber('+123.4'));
        checkEqual(-123.4, valueToNumber('-0123.4'));
        checkEqual(123.5, valueToNumber('123.5'));
        checkEqual(123.5, valueToNumber('0123.5'));
        checkEqual(123.5, valueToNumber('+123.5'));
        checkEqual(-123.5, valueToNumber('-0123.5'));
        checkEqual(NaN, valueToNumber(' 123.4'));
        checkEqual(NaN, valueToNumber('123.4 '));
        checkEqual(NaN, valueToNumber(' 123.4 '));
        checkEqual(NaN, valueToNumber('　123.4'));
        checkEqual(NaN, valueToNumber('123.4　'));
        checkEqual(NaN, valueToNumber('　123.4　'));
        checkEqual(NaN, valueToNumber('123.4 0'));
        checkEqual(NaN, valueToNumber('0 123.4'));
        checkEqual(NaN, valueToNumber('1 123.4'));
        checkEqual(NaN, valueToNumber('123 .4'));
        checkEqual(NaN, valueToNumber('123. 4'));
        checkEqual(NaN, valueToNumber('123.4a'));
        checkEqual(NaN, valueToNumber('a123.4'));
        checkEqual(123.45, valueToNumber('123.45'));
        checkEqual(NaN, valueToNumber('123.4.5')); // space string

        checkEqual(NaN, valueToNumber(''));
        checkEqual(NaN, valueToNumber(' '));
        checkEqual(NaN, valueToNumber('　')); // exponential notation

        checkEqual(3.14, valueToNumber(3.14));
        checkEqual(3.14, valueToNumber('3.14'));
        checkEqual(3.14, valueToNumber('314e-2'));
        checkEqual(3.14, valueToNumber('0.0314E+2'));
        checkEqual(0.14, valueToNumber('.14')); // exponential notation detail

        checkEqual(1, valueToNumber('1.'));
        checkEqual(NaN, valueToNumber('1.1e'));
        checkEqual(NaN, valueToNumber('1.1e+'));
        checkEqual(100000, valueToNumber('1e+5'));
        checkEqual(0.00001, valueToNumber('1e-5'));
        checkEqual(NaN, valueToNumber('1.e'));
        checkEqual(NaN, valueToNumber('1.e+'));
        checkEqual(100000, valueToNumber('1.e+5')); // Number different

        checkEqual(NaN, valueToNumber('0x123'));
        checkEqual(NaN, valueToNumber('+0x123'));
        checkEqual(NaN, valueToNumber('-0x123'));
        checkEqual(NaN, valueToNumber('0o123'));
        checkEqual(NaN, valueToNumber('+0o123'));
        checkEqual(NaN, valueToNumber('-0o123'));
        checkEqual(NaN, valueToNumber('Infinity'));
        checkEqual(NaN, valueToNumber('infinity'));
        checkEqual(NaN, valueToNumber('inf'));
        checkEqual(NaN, valueToNumber('info')); // Number

        checkEqual(123, valueToNumber(123));
        checkEqual(-123, valueToNumber(-123));
        checkEqual(1.23, valueToNumber(1.23));
        checkEqual(-1.23, valueToNumber(-1.23));
        checkEqual(Infinity, valueToNumber(Infinity));
        checkEqual(-Infinity, valueToNumber(-Infinity));
        checkEqual(NaN, valueToNumber(NaN)); // Default

        checkEqual(null, valueToNumberDefault('', null));
        checkEqual(null, valueToNumberDefault({
          value: '',
          defaultValue: null
        }));
        checkEqual(null, valueToNumberDefault('', {
          defaultValue: null
        }));
        checkEqual(1.5, valueToNumberDefault('1.5', null));
        checkEqual(1.5, valueToNumberDefault({
          value: '1.5',
          defaultValue: null
        }));
        checkEqual(1.5, valueToNumberDefault('1.5', {
          defaultValue: null
        }));
        checkEqual(NaN, valueToNumberDefault(NaN, null));
        checkEqual(NaN, valueToNumberDefault({
          value: NaN,
          defaultValue: null
        }));
        checkEqual(NaN, valueToNumberDefault(NaN, {
          defaultValue: null
        })); // Other

        checkEqual(NaN, valueToNumber(null));
        checkEqual(NaN, valueToNumber(undefined));
        checkEqual(NaN, valueToNumber({}));
        checkEqual(NaN, valueToNumber({
          a: 1
        }));
        checkEqual(NaN, valueToNumber([]));
        checkEqual(NaN, valueToNumber([1]));
        checkEqual(NaN, valueToNumber([123]));
        checkEqual(NaN, valueToNumber([1, 2]));
      });
    };

    var test_stringToInteger = function test_stringToInteger() {
      it('test_stringToInteger', function () {
        // Integer
        checkEqual(123, stringToInteger('123'));
        checkEqual(123, stringToInteger('0123'));
        checkEqual(123, stringToInteger('+123'));
        checkEqual(-123, stringToInteger('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123');
        })); // Decimal

        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.45');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4.5');
        })); // Positive number

        checkEqual(32, stringToInteger('32'));
        checkEqual(32, stringToInteger('32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('31.5', 10);
        }));
        checkEqual(32, stringToInteger('100000', 2));
        checkEqual(31, stringToInteger('11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.01', 2);
        }));
        checkEqual(32, stringToInteger('40', 8));
        checkEqual(31, stringToInteger('37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('37.4', 8);
        }));
        checkEqual(32, stringToInteger('20', 16));
        checkEqual(31, stringToInteger('1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1f.8', 16);
        }));
        checkEqual(32, stringToInteger('44', 7));
        checkEqual(31, stringToInteger('43', 7));
        checkEqual(255, stringToInteger('255', 10));
        checkEqual(11, stringToInteger('11', 10));
        checkEqual(255, stringToInteger('FF', 16));
        checkEqual(16, stringToInteger('20', 8));
        checkEqual(255, stringToInteger('ff', 16));
        checkEqual(11, stringToInteger('b', 16));
        checkEqual(127, stringToInteger('177', 8));
        checkEqual(10, stringToInteger('12', 8));
        checkEqual(3, stringToInteger('11', 2));
        checkEqual(15, stringToInteger('1111', 2)); // Negative number

        checkEqual(-32, stringToInteger('-32'));
        checkEqual(-32, stringToInteger('-32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-31.5', 10);
        }));
        checkEqual(-32, stringToInteger('-100000', 2));
        checkEqual(-31, stringToInteger('-11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.01', 2);
        }));
        checkEqual(-32, stringToInteger('-40', 8));
        checkEqual(-31, stringToInteger('-37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-37.4', 8);
        }));
        checkEqual(-32, stringToInteger('-20', 16));
        checkEqual(-31, stringToInteger('-1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-1f.8', 16);
        }));
        checkEqual(-32, stringToInteger('-44', 7));
        checkEqual(-31, stringToInteger('-43', 7));
        checkEqual(-255, stringToInteger('-255', 10));
        checkEqual(-11, stringToInteger('-11', 10));
        checkEqual(-255, stringToInteger('-FF', 16));
        checkEqual(-16, stringToInteger('-20', 8));
        checkEqual(-255, stringToInteger('-ff', 16));
        checkEqual(-11, stringToInteger('-b', 16));
        checkEqual(-127, stringToInteger('-177', 8));
        checkEqual(-10, stringToInteger('-12', 8));
        checkEqual(-3, stringToInteger('-11', 2));
        checkEqual(-15, stringToInteger('-1111', 2)); // // Default Value

        checkEqual(true, isThrown(function () {
          return stringToInteger('abc');
        })); // checkEqual(null,      stringToInteger('abc', null,  10));
        // checkEqual(NaN,       stringToInteger('abc', NaN,   10));

        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger(123);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 2);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 2.5);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 1);
        }, new RangeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 36);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 37);
        }, new RangeError().name), "test stringToInteger exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToInteger({
          value: '-0123'
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger({
            value: 'abc'
          });
        }));
        checkEqual(-15, stringToInteger({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_stringToIntegerDefault = function test_stringToIntegerDefault() {
      it('test_stringToIntegerDefault', function () {
        // Integer
        checkEqual(123, stringToIntegerDefault('123'));
        checkEqual(123, stringToIntegerDefault('0123'));
        checkEqual(123, stringToIntegerDefault('+123'));
        checkEqual(-123, stringToIntegerDefault('-0123'));
        checkEqual(undefined, stringToIntegerDefault(' 123'));
        checkEqual(undefined, stringToIntegerDefault('123 '));
        checkEqual(undefined, stringToIntegerDefault(' 123 '));
        checkEqual(undefined, stringToIntegerDefault('123 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123'));
        checkEqual(undefined, stringToIntegerDefault('1 123'));
        checkEqual(undefined, stringToIntegerDefault('123a'));
        checkEqual(undefined, stringToIntegerDefault('a123')); // Decimal

        checkEqual(undefined, stringToIntegerDefault('123.4'));
        checkEqual(undefined, stringToIntegerDefault('0123.4'));
        checkEqual(undefined, stringToIntegerDefault('+123.4'));
        checkEqual(undefined, stringToIntegerDefault('-0123.4'));
        checkEqual(undefined, stringToIntegerDefault(' 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.4 '));
        checkEqual(undefined, stringToIntegerDefault(' 123.4 '));
        checkEqual(undefined, stringToIntegerDefault('123.4 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123.4'));
        checkEqual(undefined, stringToIntegerDefault('1 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123 .4'));
        checkEqual(undefined, stringToIntegerDefault('123. 4'));
        checkEqual(undefined, stringToIntegerDefault('123.4a'));
        checkEqual(undefined, stringToIntegerDefault('a123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.45'));
        checkEqual(undefined, stringToIntegerDefault('123.4.5')); // Positive number

        checkEqual(32, stringToIntegerDefault('32'));
        checkEqual(32, stringToIntegerDefault('32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('31.5', undefined, 10));
        checkEqual(32, stringToIntegerDefault('100000', undefined, 2));
        checkEqual(31, stringToIntegerDefault('11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.01', undefined, 2));
        checkEqual(32, stringToIntegerDefault('40', undefined, 8));
        checkEqual(31, stringToIntegerDefault('37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('37.4', undefined, 8));
        checkEqual(32, stringToIntegerDefault('20', undefined, 16));
        checkEqual(31, stringToIntegerDefault('1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('1f.8', undefined, 16));
        checkEqual(32, stringToIntegerDefault('44', undefined, 7));
        checkEqual(31, stringToIntegerDefault('43', undefined, 7));
        checkEqual(255, stringToIntegerDefault('255', undefined, 10));
        checkEqual(11, stringToIntegerDefault('11', undefined, 10));
        checkEqual(255, stringToIntegerDefault('FF', undefined, 16));
        checkEqual(16, stringToIntegerDefault('20', undefined, 8));
        checkEqual(255, stringToIntegerDefault('ff', undefined, 16));
        checkEqual(11, stringToIntegerDefault('b', undefined, 16));
        checkEqual(127, stringToIntegerDefault('177', undefined, 8));
        checkEqual(10, stringToIntegerDefault('12', undefined, 8));
        checkEqual(3, stringToIntegerDefault('11', undefined, 2));
        checkEqual(15, stringToIntegerDefault('1111', undefined, 2)); // Negative number

        checkEqual(-32, stringToIntegerDefault('-32'));
        checkEqual(-32, stringToIntegerDefault('-32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('-31.5', undefined, 10));
        checkEqual(-32, stringToIntegerDefault('-100000', undefined, 2));
        checkEqual(-31, stringToIntegerDefault('-11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.01', undefined, 2));
        checkEqual(-32, stringToIntegerDefault('-40', undefined, 8));
        checkEqual(-31, stringToIntegerDefault('-37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('-37.4', undefined, 8));
        checkEqual(-32, stringToIntegerDefault('-20', undefined, 16));
        checkEqual(-31, stringToIntegerDefault('-1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('-1f.8', undefined, 16));
        checkEqual(-32, stringToIntegerDefault('-44', undefined, 7));
        checkEqual(-31, stringToIntegerDefault('-43', undefined, 7));
        checkEqual(-255, stringToIntegerDefault('-255', undefined, 10));
        checkEqual(-11, stringToIntegerDefault('-11', undefined, 10));
        checkEqual(-255, stringToIntegerDefault('-FF', undefined, 16));
        checkEqual(-16, stringToIntegerDefault('-20', undefined, 8));
        checkEqual(-255, stringToIntegerDefault('-ff', undefined, 16));
        checkEqual(-11, stringToIntegerDefault('-b', undefined, 16));
        checkEqual(-127, stringToIntegerDefault('-177', undefined, 8));
        checkEqual(-10, stringToIntegerDefault('-12', undefined, 8));
        checkEqual(-3, stringToIntegerDefault('-11', undefined, 2));
        checkEqual(-15, stringToIntegerDefault('-1111', undefined, 2)); // Default Value

        checkEqual(undefined, stringToIntegerDefault('abc'));
        checkEqual(null, stringToIntegerDefault('abc', null, 10));
        checkEqual(NaN, stringToIntegerDefault('abc', NaN, 10));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('Infinity'));
        checkEqual(undefined, stringToIntegerDefault('infinity'));
        checkEqual(undefined, stringToIntegerDefault('inf'));
        checkEqual(undefined, stringToIntegerDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault(123);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2.5);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 1);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 36);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 37);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToIntegerDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToIntegerDefault({
          value: 'abc',
          defaultValue: null
        }));
        checkEqual(undefined, stringToIntegerDefault({
          value: 'abc'
        }));
        checkEqual(-15, stringToIntegerDefault({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_valueToInteger = function test_valueToInteger() {
      it('test_valueToInteger', function () {
        // Integer
        checkEqual(123, valueToInteger('123'));
        checkEqual(123, valueToInteger('0123'));
        checkEqual(123, valueToInteger('+123'));
        checkEqual(-123, valueToInteger('-0123'));
        checkEqual(NaN, valueToInteger(' 123'), '1');
        checkEqual(NaN, valueToInteger('123 '), '2');
        checkEqual(NaN, valueToInteger(' 123 '), '3');
        checkEqual(NaN, valueToInteger('　123'), '4');
        checkEqual(NaN, valueToInteger('123　'), '5');
        checkEqual(NaN, valueToInteger('　123　'), '6');
        checkEqual(NaN, valueToInteger('123 0'));
        checkEqual(NaN, valueToInteger('0 123'));
        checkEqual(NaN, valueToInteger('1 123'));
        checkEqual(NaN, valueToInteger('123a'));
        checkEqual(NaN, valueToInteger('a123')); // Decimal

        checkEqual(123, valueToInteger('123.4'));
        checkEqual(123, valueToInteger('0123.4'));
        checkEqual(123, valueToInteger('+123.4'));
        checkEqual(-123, valueToInteger('-0123.4'));
        checkEqual(124, valueToInteger('123.5'));
        checkEqual(124, valueToInteger('0123.5'));
        checkEqual(124, valueToInteger('+123.5'));
        checkEqual(-124, valueToInteger('-0123.5'));
        checkEqual(NaN, valueToInteger(' 123.4'));
        checkEqual(NaN, valueToInteger('123.4 '));
        checkEqual(NaN, valueToInteger(' 123.4 '));
        checkEqual(NaN, valueToInteger('　123.4'));
        checkEqual(NaN, valueToInteger('123.4　'));
        checkEqual(NaN, valueToInteger('　123.4　'));
        checkEqual(NaN, valueToInteger('123.4 0'));
        checkEqual(NaN, valueToInteger('0 123.4'));
        checkEqual(NaN, valueToInteger('1 123.4'));
        checkEqual(NaN, valueToInteger('123 .4'));
        checkEqual(NaN, valueToInteger('123. 4'));
        checkEqual(NaN, valueToInteger('123.4a'));
        checkEqual(NaN, valueToInteger('a123.4'));
        checkEqual(123, valueToInteger('123.45'));
        checkEqual(NaN, valueToInteger('123.4.5')); // space string

        checkEqual(NaN, valueToInteger(''));
        checkEqual(NaN, valueToInteger(' '));
        checkEqual(NaN, valueToInteger('　')); // exponential notation

        checkEqual(3, valueToInteger(3.14));
        checkEqual(3, valueToInteger('3.14'));
        checkEqual(3, valueToInteger('314e-2'));
        checkEqual(3, valueToInteger('0.0314E+2'));
        checkEqual(0, valueToInteger('.14')); // exponential notation detail

        checkEqual(1, valueToInteger('1.'));
        checkEqual(NaN, valueToInteger('1.1e'));
        checkEqual(NaN, valueToInteger('1.1e+'));
        checkEqual(100000, valueToInteger('1e+5'));
        checkEqual(0, valueToInteger('1e-5'));
        checkEqual(NaN, valueToInteger('1.e'));
        checkEqual(NaN, valueToInteger('1.e+'));
        checkEqual(100000, valueToInteger('1.e+5')); // Number different

        checkEqual(NaN, valueToInteger('0x123'));
        checkEqual(NaN, valueToInteger('+0x123'));
        checkEqual(NaN, valueToInteger('-0x123'));
        checkEqual(NaN, valueToInteger('0o123'));
        checkEqual(NaN, valueToInteger('+0o123'));
        checkEqual(NaN, valueToInteger('-0o123'));
        checkEqual(NaN, valueToInteger('Infinity'));
        checkEqual(NaN, valueToInteger('infinity'));
        checkEqual(NaN, valueToInteger('inf'));
        checkEqual(NaN, valueToInteger('info')); // Number

        checkEqual(123, valueToInteger(123));
        checkEqual(-123, valueToInteger(-123));
        checkEqual(1, valueToInteger(1.23));
        checkEqual(2, valueToInteger(1.67));
        checkEqual(-1, valueToInteger(-1.23));
        checkEqual(-2, valueToInteger(-1.67));
        checkEqual(Infinity, valueToInteger(Infinity));
        checkEqual(-Infinity, valueToInteger(-Infinity));
        checkEqual(NaN, valueToInteger(NaN)); // Default

        checkEqual(null, valueToIntegerDefault('', null));
        checkEqual(null, valueToIntegerDefault({
          value: '',
          defaultValue: null
        }));
        checkEqual(null, valueToIntegerDefault('', {
          defaultValue: null
        }));
        checkEqual(2, valueToIntegerDefault('1.5', null));
        checkEqual(2, valueToIntegerDefault({
          value: '1.5',
          defaultValue: null
        }));
        checkEqual(2, valueToIntegerDefault('1.5', {
          defaultValue: null
        }));
        checkEqual(1, valueToIntegerDefault('1', null));
        checkEqual(1, valueToIntegerDefault({
          value: '1',
          defaultValue: null
        }));
        checkEqual(1, valueToIntegerDefault('1', {
          defaultValue: null
        }));
        checkEqual(NaN, valueToIntegerDefault(NaN, null));
        checkEqual(NaN, valueToIntegerDefault({
          value: NaN,
          defaultValue: null
        }));
        checkEqual(NaN, valueToIntegerDefault(NaN, {
          defaultValue: null
        })); // Other

        checkEqual(NaN, valueToInteger(null));
        checkEqual(NaN, valueToInteger(undefined));
        checkEqual(NaN, valueToInteger({}));
        checkEqual(NaN, valueToInteger({
          a: 1
        }));
        checkEqual(NaN, valueToInteger([]));
        checkEqual(NaN, valueToInteger([1]));
        checkEqual(NaN, valueToInteger([123]));
      });
    };

    test_numberToString();
    test_valueToString();
    test_StringCast_standard();
    test_toString_standard();
    test_NumberCast_standard();
    test_parseFloat_standard();
    test_parseInt_standard();
    test_stringToNumber();
    test_stringToNumberDefault();
    test_valueToNumber();
    test_stringToInteger();
    test_stringToIntegerDefault();
    test_valueToInteger();
  });
};

exports.test_execute_convert = test_execute_convert;
var _default = {
  test_execute_convert: test_execute_convert
};
exports["default"] = _default;