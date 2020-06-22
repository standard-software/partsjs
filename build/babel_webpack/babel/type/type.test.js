"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_type = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable new-cap */

/* eslint-disable no-array-constructor */

/* eslint-disable no-new-object */

/* eslint-disable no-new-wrappers */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_type = function test_execute_type(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_type', function () {
    var _parts$type = parts.type,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull,
        isNaNStrict = _parts$type.isNaNStrict,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isObjectType = _parts$type.isObjectType,
        isArray = _parts$type.isArray,
        isArrayType = _parts$type.isArrayType,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isBooleanObject = _parts$type.isBooleanObject,
        isNumberObject = _parts$type.isNumberObject,
        isStringObject = _parts$type.isStringObject,
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
        isSymbol = _parts$type.isSymbol,
        isMap = _parts$type.isMap,
        isWeakMap = _parts$type.isWeakMap,
        isSet = _parts$type.isSet,
        isWeakSet = _parts$type.isWeakSet,
        isNotUndefined = _parts$type.isNotUndefined,
        isNotNull = _parts$type.isNotNull,
        isNotNaNStrict = _parts$type.isNotNaNStrict,
        isNotBoolean = _parts$type.isNotBoolean,
        isNotNumber = _parts$type.isNotNumber,
        isNotInteger = _parts$type.isNotInteger,
        isNotString = _parts$type.isNotString,
        isNotFunction = _parts$type.isNotFunction,
        isNotObject = _parts$type.isNotObject,
        isNotObjectType = _parts$type.isNotObjectType,
        isNotArray = _parts$type.isNotArray,
        isNotArrayType = _parts$type.isNotArrayType,
        isNotDate = _parts$type.isNotDate,
        isNotRegExp = _parts$type.isNotRegExp,
        isNotException = _parts$type.isNotException,
        isNotBooleanObject = _parts$type.isNotBooleanObject,
        isNotNumberObject = _parts$type.isNotNumberObject,
        isNotStringObject = _parts$type.isNotStringObject,
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray,
        isNotSymbol = _parts$type.isNotSymbol,
        isNotMap = _parts$type.isNotMap,
        isNotWeakMap = _parts$type.isNotWeakMap,
        isNotSet = _parts$type.isNotSet,
        isNotWeakSet = _parts$type.isNotWeakSet,
        isUndefinedAll = _parts$type.isUndefinedAll,
        isNullAll = _parts$type.isNullAll,
        isNaNStrictAll = _parts$type.isNaNStrictAll,
        isBooleanAll = _parts$type.isBooleanAll,
        isNumberAll = _parts$type.isNumberAll,
        isIntegerAll = _parts$type.isIntegerAll,
        isStringAll = _parts$type.isStringAll,
        isFunctionAll = _parts$type.isFunctionAll,
        isObjectAll = _parts$type.isObjectAll,
        isObjectTypeAll = _parts$type.isObjectTypeAll,
        isArrayAll = _parts$type.isArrayAll,
        isArrayTypeAll = _parts$type.isArrayTypeAll,
        isDateAll = _parts$type.isDateAll,
        isRegExpAll = _parts$type.isRegExpAll,
        isExceptionAll = _parts$type.isExceptionAll,
        isBooleanObjectAll = _parts$type.isBooleanObjectAll,
        isNumberObjectAll = _parts$type.isNumberObjectAll,
        isStringObjectAll = _parts$type.isStringObjectAll,
        isEmptyObjectAll = _parts$type.isEmptyObjectAll,
        isEmptyArrayAll = _parts$type.isEmptyArrayAll,
        isSymbolAll = _parts$type.isSymbolAll,
        isMapAll = _parts$type.isMapAll,
        isWeakMapAll = _parts$type.isWeakMapAll,
        isSetAll = _parts$type.isSetAll,
        isWeakSetAll = _parts$type.isWeakSetAll,
        isNotUndefinedAll = _parts$type.isNotUndefinedAll,
        isNotNullAll = _parts$type.isNotNullAll,
        isNotNaNStrictAll = _parts$type.isNotNaNStrictAll,
        isNotBooleanAll = _parts$type.isNotBooleanAll,
        isNotNumberAll = _parts$type.isNotNumberAll,
        isNotIntegerAll = _parts$type.isNotIntegerAll,
        isNotStringAll = _parts$type.isNotStringAll,
        isNotFunctionAll = _parts$type.isNotFunctionAll,
        isNotObjectAll = _parts$type.isNotObjectAll,
        isNotObjectTypeAll = _parts$type.isNotObjectTypeAll,
        isNotArrayAll = _parts$type.isNotArrayAll,
        isNotArrayTypeAll = _parts$type.isNotArrayTypeAll,
        isNotDateAll = _parts$type.isNotDateAll,
        isNotRegExpAll = _parts$type.isNotRegExpAll,
        isNotExceptionAll = _parts$type.isNotExceptionAll,
        isNotBooleanObjectAll = _parts$type.isNotBooleanObjectAll,
        isNotNumberObjectAll = _parts$type.isNotNumberObjectAll,
        isNotStringObjectAll = _parts$type.isNotStringObjectAll,
        isNotEmptyObjectAll = _parts$type.isNotEmptyObjectAll,
        isNotEmptyArrayAll = _parts$type.isNotEmptyArrayAll,
        isNotSymbolAll = _parts$type.isNotSymbolAll,
        isNotMapAll = _parts$type.isNotMapAll,
        isNotWeakMapAll = _parts$type.isNotWeakMapAll,
        isNotSetAll = _parts$type.isNotSetAll,
        isNotWeakSetAll = _parts$type.isNotWeakSetAll,
        isUndefinedArray = _parts$type.isUndefinedArray,
        isNullArray = _parts$type.isNullArray,
        isNaNStrictArray = _parts$type.isNaNStrictArray,
        isBooleanArray = _parts$type.isBooleanArray,
        isNumberArray = _parts$type.isNumberArray,
        isIntegerArray = _parts$type.isIntegerArray,
        isStringArray = _parts$type.isStringArray,
        isFunctionArray = _parts$type.isFunctionArray,
        isObjectArray = _parts$type.isObjectArray,
        isObjectTypeArray = _parts$type.isObjectTypeArray,
        isArrayArray = _parts$type.isArrayArray,
        isArrayTypeArray = _parts$type.isArrayTypeArray,
        isDateArray = _parts$type.isDateArray,
        isRegExpArray = _parts$type.isRegExpArray,
        isExceptionArray = _parts$type.isExceptionArray,
        isBooleanObjectArray = _parts$type.isBooleanObjectArray,
        isNumberObjectArray = _parts$type.isNumberObjectArray,
        isStringObjectArray = _parts$type.isStringObjectArray,
        isEmptyObjectArray = _parts$type.isEmptyObjectArray,
        isEmptyArrayArray = _parts$type.isEmptyArrayArray,
        isSymbolArray = _parts$type.isSymbolArray,
        isMapArray = _parts$type.isMapArray,
        isWeakMapArray = _parts$type.isWeakMapArray,
        isSetArray = _parts$type.isSetArray,
        isWeakSetArray = _parts$type.isWeakSetArray,
        isNotUndefinedArray = _parts$type.isNotUndefinedArray,
        isNotNullArray = _parts$type.isNotNullArray,
        isNotNaNStrictArray = _parts$type.isNotNaNStrictArray,
        isNotBooleanArray = _parts$type.isNotBooleanArray,
        isNotNumberArray = _parts$type.isNotNumberArray,
        isNotIntegerArray = _parts$type.isNotIntegerArray,
        isNotStringArray = _parts$type.isNotStringArray,
        isNotFunctionArray = _parts$type.isNotFunctionArray,
        isNotObjectArray = _parts$type.isNotObjectArray,
        isNotObjectTypeArray = _parts$type.isNotObjectTypeArray,
        isNotArrayArray = _parts$type.isNotArrayArray,
        isNotArrayTypeArray = _parts$type.isNotArrayTypeArray,
        isNotDateArray = _parts$type.isNotDateArray,
        isNotRegExpArray = _parts$type.isNotRegExpArray,
        isNotExceptionArray = _parts$type.isNotExceptionArray,
        isNotBooleanObjectArray = _parts$type.isNotBooleanObjectArray,
        isNotNumberObjectArray = _parts$type.isNotNumberObjectArray,
        isNotStringObjectArray = _parts$type.isNotStringObjectArray,
        isNotEmptyObjectArray = _parts$type.isNotEmptyObjectArray,
        isNotEmptyArrayArray = _parts$type.isNotEmptyArrayArray,
        isNotSymbolArray = _parts$type.isNotSymbolArray,
        isNotMapArray = _parts$type.isNotMapArray,
        isNotWeakMapArray = _parts$type.isNotWeakMapArray,
        isNotSetArray = _parts$type.isNotSetArray,
        isNotWeakSetArray = _parts$type.isNotWeakSetArray;
    var allMatchSome = parts.compare.allMatchSome;
    var objectToString = parts.objectToString;

    var test_checkType = function test_checkType() {
      it('test_checkType', function () {
        var checkType = function checkType(typeofName, objectStringName, value) {
          checkEqual(typeofName, _typeof(value));
          checkEqual(objectStringName, objectToString(value));
        };

        if (parts.platform.isWindowsScriptHost()) {
          checkType('undefined', '[object Object]', undefined);
          checkType('object', '[object Object]', null);
        } else {
          checkType('undefined', '[object Undefined]', undefined);
          checkType('object', '[object Null]', null); // bad specification
        }

        checkType('boolean', '[object Boolean]', true);
        checkType('boolean', '[object Boolean]', false);
        checkType('object', '[object Boolean]', new Boolean());
        checkType('number', '[object Number]', 1);
        checkType('number', '[object Number]', NaN);
        checkType('number', '[object Number]', Infinity);
        checkType('object', '[object Number]', new Number(1));
        checkType('object', '[object Number]', new Number(NaN));
        checkType('object', '[object Number]', new Number(Infinity));
        checkType('object', '[object Number]', new Number(null));
        checkType('object', '[object Number]', new Number(undefined));
        checkType('string', '[object String]', '');
        checkType('string', '[object String]', '1');
        checkType('object', '[object String]', new String(''));
        checkType('object', '[object String]', new String('1'));
        checkType('object', '[object String]', new String(null));
        checkType('object', '[object String]', new String(undefined));

        function testFunc() {}

        checkType('function', '[object Function]', testFunc);
        checkType('function', '[object Function]', function () {});
        checkType('function', '[object Function]', function () {});
        checkType('object', '[object Object]', {});
        checkType('object', '[object Object]', new Object());
        checkType('object', '[object Array]', []);
        checkType('object', '[object Array]', new Array());
        checkType('object', '[object RegExp]', /^a/);
        checkType('object', '[object RegExp]', new RegExp('^a'));
        checkType('object', '[object Math]', Math);

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkType('object', '[object Int8Array]', new Int8Array());
        checkType('object', '[object Uint8Array]', new Uint8Array());
        checkType('object', '[object Uint8ClampedArray]', new Uint8ClampedArray());
        checkType('object', '[object Int16Array]', new Int16Array());
        checkType('object', '[object Uint16Array]', new Uint16Array());
        checkType('object', '[object Int32Array]', new Int32Array());
        checkType('object', '[object Uint32Array]', new Uint32Array());
        checkType('object', '[object Float32Array]', new Float32Array());
        checkType('object', '[object Float64Array]', new Float64Array());

        if (parts.platform.isInternetExplorer()) {
          checkType('object', '[object Object]', new Map());
          checkType('object', '[object Object]', new WeakMap());
          checkType('object', '[object Object]', new Set());
        } else {
          checkType('object', '[object Map]', new Map());
          checkType('object', '[object WeakMap]', new WeakMap());
          checkType('object', '[object Set]', new Set());
          checkType('object', '[object WeakSet]', new WeakSet());
          checkType('symbol', '[object Symbol]', Symbol());
        }

        checkType('object', '[object ArrayBuffer]', new ArrayBuffer(8));

        if (parts.platform.isChrome() || parts.platform.isSafari() || parts.platform.isOpera()) {
          checkType('object', '[object SharedArrayBuffer]', new SharedArrayBuffer(8)); // firefox no support

          checkType('object', '[object Atomics]', Atomics); // firefox no support
        }

        checkType('object', '[object JSON]', JSON);

        if (!parts.platform.isInternetExplorer()) {
          checkType('object', '[object DataView]', new DataView(new ArrayBuffer(16)));
          checkType('function', '[object Function]', Promise);
        } else {
          checkType('object', '[object Object]', new DataView(new ArrayBuffer(16)));
        }

        if (parts.platform.buildMode === 'source') {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return 1;

                  case 2:
                    _context.next = 4;
                    return 2;

                  case 4:
                    _context.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2);
          }))).constructor;
          checkType('object', '[object Generator]', Generator());
          checkType('function', '[object GeneratorFunction]', new GeneratorFunction());
          checkType('function', '[object AsyncFunction]', new AsyncFunction());
        }

        if (parts.platform.isInternetExplorer()) {// no define Proxy
          // no define WebAssembly
        } else {
          checkType('object', '[object Object]', Reflect);
          checkType('object', '[object Object]', new Proxy({}, {}));
          checkType('object', '[object WebAssembly]', WebAssembly);
        }

        if (!parts.platform.isDeno()) {
          checkType('object', '[object Object]', Intl);
        }
      });
    };

    var test_isUndefinedAll = function test_isUndefinedAll() {
      it('test_isUndefinedAll', function () {
        var isUndefinedArray = function isUndefinedArray(array) {
          return allMatchSome(array, [undefined]);
        };

        var isNotUndefinedArray = function isNotUndefinedArray(array) {
          return allMatchSome(array, [isNotUndefinedAll]);
        };

        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(true, isUndefinedAll(u1));
        checkEqual(false, isUndefinedAll(n1));
        checkEqual(false, isUndefinedAll(v1));
        checkEqual(true, isUndefinedArray([u1]));
        checkEqual(false, isUndefinedArray([n1]));
        checkEqual(false, isUndefinedArray([v1]));
        checkEqual(true, isUndefinedAll(u1, u1));
        checkEqual(false, isUndefinedAll(u1, n1));
        checkEqual(false, isUndefinedAll(u1, v1));
        checkEqual(true, isUndefinedArray([u1, u1]));
        checkEqual(false, isUndefinedArray([u1, n1]));
        checkEqual(false, isUndefinedArray([u1, v1]));
        checkEqual(false, isNotUndefinedAll(u1));
        checkEqual(true, isNotUndefinedAll(n1));
        checkEqual(true, isNotUndefinedAll(v1));
        checkEqual(false, isNotUndefinedArray([u1]));
        checkEqual(true, isNotUndefinedArray([n1]));
        checkEqual(true, isNotUndefinedArray([v1]));
        checkEqual(false, isNotUndefinedAll(u1, u1));
        checkEqual(false, isNotUndefinedAll(u1, n1));
        checkEqual(true, isNotUndefinedAll(n1, n1));
        checkEqual(false, isNotUndefinedAll(n1, u1));
        checkEqual(true, isNotUndefinedAll(v1, v1));
        checkEqual(true, isNotUndefinedAll(v1, n1));
        checkEqual(false, isNotUndefinedAll(v1, u1));
        checkEqual(false, isNotUndefinedArray([u1, u1]));
        checkEqual(false, isNotUndefinedArray([u1, n1]));
        checkEqual(true, isNotUndefinedArray([n1, n1]));
        checkEqual(false, isNotUndefinedArray([n1, u1]));
        checkEqual(true, isNotUndefinedArray([v1, v1]));
        checkEqual(true, isNotUndefinedArray([v1, n1]));
        checkEqual(false, isNotUndefinedArray([v1, u1])); // 配列の中身ではなく配列自体を判定する
        // 配列はundefinedではない

        checkEqual(false, isUndefinedAll([v1, v1]));
        checkEqual(false, isUndefinedAll([u1, u1]));
        checkEqual(true, isNotUndefinedAll([v1, v1]));
        checkEqual(true, isNotUndefinedAll([u1, u1]));
      });
    };

    var test_isNull = function test_isNull() {
      it('test_isNull', function () {
        var isNullArray = function isNullArray(array) {
          return allMatchSome(array, [null]);
        };

        var isNotNullArray = function isNotNullArray(array) {
          return allMatchSome(array, [isNotNullAll]);
        };

        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(false, isNullAll(u1));
        checkEqual(true, isNullAll(n1));
        checkEqual(false, isNullAll(v1));
        checkEqual(false, isNullArray([u1]));
        checkEqual(true, isNullArray([n1]));
        checkEqual(false, isNullArray([v1]));
        checkEqual(true, isNullAll(n1, n1));
        checkEqual(false, isNullAll(n1, u1));
        checkEqual(false, isNullAll(n1, v1));
        checkEqual(true, isNullArray([n1, n1]));
        checkEqual(false, isNullArray([n1, u1]));
        checkEqual(false, isNullArray([n1, v1]));
        checkEqual(true, isNotNullAll(u1));
        checkEqual(false, isNotNullAll(n1));
        checkEqual(true, isNotNullAll(v1));
        checkEqual(true, isNotNullArray([u1]));
        checkEqual(false, isNotNullArray([n1]));
        checkEqual(true, isNotNullArray([v1]));
        checkEqual(true, isNotNullAll(u1, u1));
        checkEqual(false, isNotNullAll(u1, n1));
        checkEqual(false, isNotNullAll(n1, n1));
        checkEqual(false, isNotNullAll(n1, u1));
        checkEqual(true, isNotNullAll(v1, v1));
        checkEqual(false, isNotNullAll(v1, n1));
        checkEqual(true, isNotNullAll(v1, u1));
        checkEqual(true, isNotNullArray([u1, u1]));
        checkEqual(false, isNotNullArray([u1, n1]));
        checkEqual(false, isNotNullArray([n1, n1]));
        checkEqual(false, isNotNullArray([n1, u1]));
        checkEqual(true, isNotNullArray([v1, v1]));
        checkEqual(false, isNotNullArray([v1, n1]));
        checkEqual(true, isNotNullArray([v1, u1]));
      });
    };

    var test_isBoolean = function test_isBoolean() {
      it('test_isBoolean', function () {
        var isBooleanArray = function isBooleanArray(array) {
          return allMatchSome(array, [isBooleanAll]);
        };

        var isNotBooleanArray = function isNotBooleanArray(array) {
          return allMatchSome(array, [isNotBooleanAll]);
        };

        checkEqual(true, isBooleanAll(true));
        checkEqual(true, isBooleanAll(false));
        checkEqual(false, isBooleanAll(undefined));
        checkEqual(false, isBooleanAll(null));
        checkEqual(false, isBooleanAll(''));
        checkEqual(false, isBooleanAll('true'));
        checkEqual(false, isBooleanAll('false'));
        checkEqual(false, isBooleanAll(123));
        checkEqual(false, isBooleanAll(0));
        checkEqual(false, isBooleanAll(-1));
        checkEqual(true, isBooleanAll(true, true));
        checkEqual(true, isBooleanAll(true, true, true));
        checkEqual(true, isBooleanAll(true, false, true));
        checkEqual(false, isBooleanAll(true, 1, true));
        checkEqual(false, isBooleanAll([true, true]));
        checkEqual(true, isBooleanArray([true, true]));
        checkEqual(true, isBooleanArray([true, true, true]));
        checkEqual(true, isBooleanArray([true, false, true]));
        checkEqual(false, isBooleanArray([true, 1, true]));
        checkEqual(false, isBooleanAll(new Boolean()));
        checkEqual(false, isBooleanAll(new Boolean('1')));
        checkEqual(false, isBooleanAll(new Boolean('a')));
        checkEqual(false, isBooleanAll(new Boolean('true')));
        checkEqual(true, isBooleanObjectAll(new Boolean()), 'test isBooleanObjectAll');
        checkEqual(true, isBooleanObjectAll(new Boolean('1')));
        checkEqual(true, isBooleanObjectAll(new Boolean('a')));
        checkEqual(true, isBooleanObjectAll(new Boolean('true')));
      });
    };

    var test_isNumber = function test_isNumber() {
      it('test_isNumber', function () {
        var isNumberArray = function isNumberArray(array) {
          return allMatchSome(array, [isNumberAll]);
        };

        var isNotNumberArray = function isNotNumberArray(array) {
          return allMatchSome(array, [isNotNumberAll]);
        };

        checkEqual(true, isNumberAll(123));
        checkEqual(true, isNumberAll(0));
        checkEqual(true, isNumberAll(-1));
        checkEqual(true, isNumberAll(123.4));
        checkEqual(true, isNumberAll(123.0));
        checkEqual(false, isNumberAll(true));
        checkEqual(false, isNumberAll(false));
        checkEqual(false, isNumberAll(null));
        checkEqual(false, isNumberAll(undefined));
        checkEqual(false, isNumberAll(Infinity)); // InfinityもNumberとして許可しないことにする

        checkEqual(false, isNumberAll(NaN));
        checkEqual(false, isNumberAll(''));
        checkEqual(false, isNumberAll('ABC'));
        checkEqual(false, isNumberAll('ABC10'));
        checkEqual(false, isNumberAll('10ABC'));
        checkEqual(false, isNumberAll('0ABC'));
        checkEqual(false, isNumberAll('0'));
        checkEqual(false, isNumberAll('5'));
        checkEqual(false, isNumberAll('-5'));
        checkEqual(false, isNumberAll('100'));
        checkEqual(false, isNumberAll('-100'));
        checkEqual(false, isNumberAll([]));
        checkEqual(false, isNumberAll({}));
        checkEqual(false, isNotNumberAll(123));
        checkEqual(false, isNotNumberAll(0));
        checkEqual(true, isNotNumberAll(true));
        checkEqual(true, isNotNumberAll(null));
        checkEqual(true, isNotNumberAll(undefined));
        checkEqual(true, isNotNumberAll(Infinity));
        checkEqual(true, isNotNumberAll(NaN));
        checkEqual(true, isNotNumberAll(''));
        checkEqual(true, isNumberAll(1, 2));
        checkEqual(true, isNumberAll(3, 4, 5));
        checkEqual(true, isNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNumberAll(1, 2, true));
        checkEqual(false, isNotNumberAll(1, 2));
        checkEqual(false, isNotNumberAll(3, 4, 5));
        checkEqual(false, isNotNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNotNumberAll(1, 2, true));
        checkEqual(true, isNotNumberAll(false, true));
        checkEqual(true, isNotNumberAll('a', 'b'));
        checkEqual(false, isNumberAll([1, 2]));
        checkEqual(true, isNumberArray([1, 2]));
        checkEqual(true, isNumberArray([3, 4, 5]));
        checkEqual(true, isNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNumberArray([1, 2, true]));
        checkEqual(false, isNotNumberArray([1, 2]));
        checkEqual(false, isNotNumberArray([3, 4, 5]));
        checkEqual(false, isNotNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNotNumberArray([1, 2, true]));
        checkEqual(true, isNotNumberArray([false, true]));
        checkEqual(true, isNotNumberArray(['a', 'b']));
        checkEqual(0, Number(new Number()));
        checkEqual(0, Number(new Number('')));
        checkEqual(0, Number(new Number(' ')));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number(new Number('　')));
        } else {
          checkEqual(0, Number(new Number('　')));
        }

        checkEqual(1, Number(new Number('1')));
        checkEqual(1.1, Number(new Number('1.1')));
        checkEqual(NaN, Number(new Number(NaN)));
        checkEqual(Infinity, Number(new Number(Infinity)));
        checkEqual(NaN, Number(new Number(undefined)));
        checkEqual(0, Number(new Number(null)));
        checkEqual(false, isNumberAll(new Number()));
        checkEqual(false, isNumberAll(new Number('')));
        checkEqual(false, isNumberAll(new Number('1')));
        checkEqual(false, isNumberAll(new Number('1.1')));
        checkEqual(true, isNumberObjectAll(new Number()));
        checkEqual(true, isNumberObjectAll(new Number('')));
        checkEqual(true, isNumberObjectAll(new Number('1')));
        checkEqual(true, isNumberObjectAll(new Number('1.1')));
      });
    };

    var test_isInteger = function test_isInteger() {
      it('test_isInteger', function () {
        var isIntegerArray = function isIntegerArray(array) {
          return allMatchSome(array, [isIntegerAll]);
        };

        var isNotIntegerArray = function isNotIntegerArray(array) {
          return allMatchSome(array, [isNotIntegerAll]);
        };

        checkEqual(true, isIntegerAll(123));
        checkEqual(true, isIntegerAll(0));
        checkEqual(true, isIntegerAll(-1));
        checkEqual(false, isIntegerAll(123.4));
        checkEqual(true, isIntegerAll(123.0)); // .0の場合は整数か小数かは判断できない

        checkEqual(false, isIntegerAll(true));
        checkEqual(false, isIntegerAll(false));
        checkEqual(false, isIntegerAll(null));
        checkEqual(false, isIntegerAll(undefined));
        checkEqual(false, isIntegerAll(''));
        checkEqual(false, isIntegerAll('ABC'));
        checkEqual(false, isIntegerAll('0'));
        checkEqual(false, isIntegerAll('5'));
        checkEqual(false, isIntegerAll('-5'));
        checkEqual(false, isIntegerAll('100'));
        checkEqual(false, isIntegerAll('-100'));
        checkEqual(false, isIntegerAll([]));
        checkEqual(false, isIntegerAll({}));
        checkEqual(true, isIntegerAll(1, 2));
        checkEqual(true, isIntegerAll(3, 4, 5));
        checkEqual(true, isIntegerAll(10, 20, 30));
        checkEqual(false, isIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2));
        checkEqual(false, isNotIntegerAll(3, 4, 5));
        checkEqual(false, isNotIntegerAll(10, 20, 30));
        checkEqual(false, isNotIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2.1, 3.5));
        checkEqual(true, isNotIntegerAll(1.1, 2.2, 3.5));
        checkEqual(false, isIntegerArray([]), '?');
        checkEqual(true, isIntegerArray([1]));
        checkEqual(true, isIntegerArray([1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(true, isIntegerArray([1, 2, 0]));
        checkEqual(false, isIntegerArray([1, 2, NaN]));
        checkEqual(false, isIntegerArray([1, 2, null]));
        checkEqual(false, isIntegerArray(['a', 'b', 1]));
        checkEqual(false, isIntegerArray(['a', 'b', 1.1]));
        checkEqual(false, isIntegerArray(['a', 'b', 'c']));
        checkEqual(false, isNotIntegerArray([]));
        checkEqual(false, isNotIntegerArray([1]));
        checkEqual(false, isNotIntegerArray([1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2.2, 3]));
        checkEqual(true, isNotIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(false, isNotIntegerArray([1, 2, 0]));
        checkEqual(false, isNotIntegerArray([1, 2, NaN]));
        checkEqual(false, isNotIntegerArray([1, 2, null]));
        checkEqual(false, isNotIntegerArray(['a', 'b', 1]));
        checkEqual(true, isNotIntegerArray(['a', 'b', 1.1]));
        checkEqual(true, isNotIntegerArray(['a', 'b', 'c']));
        checkEqual(false, isIntegerAll(new Number()));
        checkEqual(false, isIntegerAll(new Number('')));
        checkEqual(false, isIntegerAll(new Number('1')));
        checkEqual(false, isIntegerAll(new Number('1.1')));
        checkEqual(false, isIntegerAll(new Number(1)));
      });
    };

    var test_isString = function test_isString() {
      it('test_isString', function () {
        checkEqual(true, isStringAll(''));
        checkEqual(true, isStringAll('a'));
        checkEqual(true, isStringAll('a', 'b', 'c'));
        checkEqual(true, isStringAll('a', 'b', ''));
        checkEqual(false, isStringAll('a', 'b', 0));
        checkEqual(false, isStringAll('a', 'b', 1));
        checkEqual(false, isStringAll('a', 'b', null));
        checkEqual(false, isStringAll('a', 'b', undefined));
        checkEqual(false, isStringArray([]));
        checkEqual(true, isStringArray(['']));
        checkEqual(true, isStringArray(['a']));
        checkEqual(true, isStringArray(['a', 'b', 'c']));
        checkEqual(true, isStringArray(['a', 'b', '']));
        checkEqual(false, isStringArray(['a', 'b', 0]));
        checkEqual(false, isStringArray(['a', 'b', 1]));
        checkEqual(false, isStringArray(['a', 'b', null]));
        checkEqual(false, isStringArray(['a', 'b', undefined]));
        checkEqual(false, isNotStringArray([]));
        checkEqual(false, isNotStringArray(['']));
        checkEqual(false, isNotStringArray(['a']));
        checkEqual(false, isNotStringArray(['a', 'b', 'c']));
        checkEqual(false, isNotStringArray(['a', 'b', '']));
        checkEqual(false, isNotStringArray(['a', 'b', 0]));
        checkEqual(false, isNotStringArray(['a', 'b', 1]));
        checkEqual(false, isNotStringArray(['a', 'b', null]));
        checkEqual(false, isNotStringArray(['a', 'b', undefined]));
        checkEqual(true, isNotStringArray([0, 1, 2]));
        checkEqual(true, isNotStringArray([0, null, undefined]));
        checkEqual('', String(new String()));
        checkEqual('', String(new String('')));
        checkEqual(' ', String(new String(' ')));
        checkEqual('　', String(new String('　')));
        checkEqual('1', String(new String('1')));
        checkEqual('1.1', String(new String('1.1')));
        checkEqual('1', String(new String(1)));
        checkEqual('1.1', String(new String(1.1)));
        checkEqual('NaN', String(new String(NaN)));
        checkEqual('Infinity', String(new String(Infinity)));
        checkEqual('undefined', String(new String(undefined)));
        checkEqual('null', String(new String(null)));
        checkEqual(false, isStringAll(new String()));
        checkEqual(false, isStringAll(new String(undefined)));
        checkEqual(false, isStringAll(new String(null)));
        checkEqual(false, isStringAll(new String('')));
        checkEqual(false, isStringAll(new String('1')));
        checkEqual(false, isStringAll(new String(1)));
        checkEqual(true, isStringObjectAll(new String()));
        checkEqual(true, isStringObjectAll(new String(undefined)));
        checkEqual(true, isStringObjectAll(new String(null)));
        checkEqual(true, isStringObjectAll(new String('')));
        checkEqual(true, isStringObjectAll(new String('1')));
        checkEqual(true, isStringObjectAll(new String(1)));
      });
    };

    var test_isFunction = function test_isFunction() {
      it('test_isFunction', function () {
        var isFunctionArray = function isFunctionArray(array) {
          return allMatchSome(array, [isFunctionAll]);
        };

        var isNotFunctionArray = function isNotFunctionArray(array) {
          return allMatchSome(array, [isNotFunctionAll]);
        };

        checkEqual(true, isFunctionAll(function () {}));
        checkEqual(false, isFunctionAll({}));
        checkEqual(true, isFunctionAll(function () {}, test_isFunction));
        checkEqual(false, isFunctionAll({}, test_isFunction));
        checkEqual(true, isFunctionArray([function () {}, test_isFunction]));
        checkEqual(false, isFunctionArray([{}, test_isFunction]));
      });
    };

    var test_isObject = function test_isObject() {
      it('test_isObject', function () {
        var isObjectArray = function isObjectArray(array) {
          return allMatchSome(array, [isObjectAll]);
        };

        var isNotObjectArray = function isNotObjectArray(array) {
          return allMatchSome(array, [isNotObjectAll]);
        };

        checkEqual(false, isObjectAll(null));
        checkEqual(false, isObjectAll(undefined));
        checkEqual(false, isObjectAll(undefined));
        checkEqual(false, isObjectAll('a'));
        checkEqual(false, isObjectAll(1));
        checkEqual(false, isObjectAll(true));
        checkEqual(true, isObjectAll({}));
        checkEqual(true, isObjectAll({
          a: 0
        }));
        checkEqual(true, isObjectAll({
          a: 0,
          b: 1
        }));
        checkEqual(false, isObjectAll([]));
        checkEqual(false, isObjectAll(function () {}));
        checkEqual(false, isObjectAll(function () {}));
        checkEqual(false, isObjectAll(new Error()));
        checkEqual(false, isObjectAll(new Date()));
        checkEqual(false, isObjectAll(new RegExp()));
        checkEqual(false, isObjectAll(new String()));
        checkEqual(false, isObjectAll(new Number()));
        checkEqual(false, isObjectAll(new Boolean()));
        checkEqual(true, isObjectAll(new Object()));
        checkEqual(false, isObjectAll(new Array()));
        checkEqual(false, isObjectAll(new Function()));
        checkEqual(true, isObjectAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));
        checkEqual(true, isObjectArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(false, isObjectArray([[], {
          a: 0,
          b: 1
        }]));
        checkEqual(false, isObjectArray([[{}], {
          a: 0,
          b: 1
        }]));

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObjectAll(testObject1));
      });
    };

    var test_isObjectType = function test_isObjectType() {
      it('test_isObjectType', function () {
        var isObjectTypeArray = function isObjectTypeArray(array) {
          return allMatchSome(array, [isObjectTypeAll]);
        };

        var isNotObjectTypeArray = function isNotObjectTypeArray(array) {
          return allMatchSome(array, [isNotObjectTypeAll]);
        };

        checkEqual(false, isObjectTypeAll(null));
        checkEqual(false, isObjectTypeAll(undefined));
        checkEqual(false, isObjectTypeAll('a'));
        checkEqual(false, isObjectTypeAll(1));
        checkEqual(false, isObjectTypeAll(true));
        checkEqual(true, isObjectTypeAll({}));
        checkEqual(true, isObjectTypeAll({
          a: 0
        }));
        checkEqual(true, isObjectTypeAll({
          a: 0,
          b: 1
        }));
        checkEqual(true, isObjectTypeAll([]));
        checkEqual(true, isObjectTypeAll(function () {}));
        checkEqual(true, isObjectTypeAll(function () {}));
        checkEqual(true, isObjectTypeAll(new Error()));
        checkEqual(true, isObjectTypeAll(new Date()));
        checkEqual(true, isObjectTypeAll(new RegExp()));
        checkEqual(true, isObjectTypeAll(new String()));
        checkEqual(true, isObjectTypeAll(new Number()));
        checkEqual(true, isObjectTypeAll(new Boolean()));
        checkEqual(true, isObjectTypeAll(new Object()));
        checkEqual(true, isObjectTypeAll(new Array()));
        checkEqual(true, isObjectTypeAll(new Function()));
        checkEqual(true, isObjectTypeAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));
        checkEqual(true, isObjectTypeArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(true, isObjectTypeArray([[], {
          a: 0,
          b: 1
        }]));
        checkEqual(true, isObjectTypeArray([[{}], {
          a: 0,
          b: 1
        }]));

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObjectTypeAll(testObject1));
      });
    };

    var test_isArray = function test_isArray() {
      it('test_isArray', function () {
        var isArrayArray = function isArrayArray(array) {
          return allMatchSome(array, [isArrayAll]);
        };

        var isNotArrayArray = function isNotArrayArray(array) {
          return allMatchSome(array, [isNotArrayAll]);
        };

        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(false, isArrayAll(123));
        checkEqual(false, isArrayAll('1,2,3'));
        checkEqual(true, isArrayAll([1], [2]));
        checkEqual(true, isArrayAll([3], [4], [5]));
        checkEqual(true, isArrayAll([10, 20], [30]));
        checkEqual(false, isArrayAll([1, 2], 3));
        checkEqual(true, isNotArrayAll(1, 2));
        checkEqual(false, isNotArrayAll([3], [4], 5));
        checkEqual(true, isNotArrayAll(10, 20, 30));
        checkEqual(false, isNotArrayAll(10, 20, [30]));
        checkEqual(true, isArrayArray([[1], [2]]));
        checkEqual(true, isArrayArray([[3], [4], [5]]));
        checkEqual(true, isArrayArray([[10, 20], [30]]));
        checkEqual(false, isArrayArray([[1, 2], 3]));
        checkEqual(true, isNotArrayArray([1, 2]));
        checkEqual(false, isNotArrayArray([[3], [4], 5]));
        checkEqual(true, isNotArrayArray([10, 20, 30]));
        checkEqual(false, isNotArrayArray([10, 20, [30]]));
      });
    };

    var test_isArrayType = function test_isArrayType() {
      it('test_isArrayType', function () {
        checkEqual(true, Array.isArray([]));
        checkEqual(true, Array.isArray([123]));
        checkEqual(true, Array.isArray([1, 2, 3]));
        checkEqual(true, Array.isArray(new Array()));
        checkEqual(true, Array.isArray(new Array(1, 2, 3)));
        checkEqual(true, Array.isArray(new Array()));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, Array.isArray(new Int8Array()));
          checkEqual(false, Array.isArray(new Uint8Array()));
          checkEqual(false, Array.isArray(new Uint8ClampedArray()));
          checkEqual(false, Array.isArray(new Int16Array()));
          checkEqual(false, Array.isArray(new Uint16Array()));
          checkEqual(false, Array.isArray(new Int32Array()));
          checkEqual(false, Array.isArray(new Uint32Array()));
          checkEqual(false, Array.isArray(new Float32Array()));
          checkEqual(false, Array.isArray(new Float64Array()));
        }

        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(true, isArrayAll(new Array()));
        checkEqual(true, isArrayAll(new Array(1, 2, 3)));
        checkEqual(true, isArrayAll(new Array()));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isArrayAll(new Int8Array()));
          checkEqual(false, isArrayAll(new Uint8Array()));
          checkEqual(false, isArrayAll(new Uint8ClampedArray()));
          checkEqual(false, isArrayAll(new Int16Array()));
          checkEqual(false, isArrayAll(new Uint16Array()));
          checkEqual(false, isArrayAll(new Int32Array()));
          checkEqual(false, isArrayAll(new Uint32Array()));
          checkEqual(false, isArrayAll(new Float32Array()));
          checkEqual(false, isArrayAll(new Float64Array()));
        }

        checkEqual(true, isArrayTypeAll([]));
        checkEqual(true, isArrayTypeAll([123]));
        checkEqual(true, isArrayTypeAll([1, 2, 3]));
        checkEqual(true, isArrayTypeAll(new Array()));
        checkEqual(true, isArrayTypeAll(new Array(1, 2, 3)));
        checkEqual(true, isArrayTypeAll(new Array()));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isArrayTypeAll(new Int8Array()));
          checkEqual(true, isArrayTypeAll(new Uint8Array()));
          checkEqual(true, isArrayTypeAll(new Uint8ClampedArray()));
          checkEqual(true, isArrayTypeAll(new Int16Array()));
          checkEqual(true, isArrayTypeAll(new Uint16Array()));
          checkEqual(true, isArrayTypeAll(new Int32Array()));
          checkEqual(true, isArrayTypeAll(new Uint32Array()));
          checkEqual(true, isArrayTypeAll(new Float32Array()));
          checkEqual(true, isArrayTypeAll(new Float64Array()));
        }
      });
    };

    var test_isDate = function test_isDate() {
      it('test_isDate', function () {
        checkEqual(true, isDateAll(new Date(2017, 1, 1)));
        checkEqual(true, isDateAll(new Date('2017/01')));
        checkEqual(true, isDateAll(new Date(2017, 1)));
        checkEqual(true, isDateAll(new Date(2017, 1)));
      });
    };

    var test_isExcection = function test_isExcection() {
      it('test_isExcection', function () {
        checkEqual(true, isExceptionAll({
          name: '',
          message: ''
        }));
        checkEqual(false, isExceptionAll({
          name: ''
        }));
        checkEqual(false, isExceptionAll({
          message: ''
        }));
        checkEqual(true, isExceptionAll(new Error()));
        checkEqual(true, isExceptionAll(new TypeError()));
        checkEqual(true, isExceptionAll(new SyntaxError()));
        checkEqual(true, isExceptionAll(new ReferenceError()));

        var UserException = function UserException(message) {
          this.message = message;
          this.name = 'UserException';
        };

        checkEqual(true, isExceptionAll(new UserException('message')));
      });
    };

    var test_isEmptyObject = function test_isEmptyObject() {
      it('test_isEmptyObject', function () {
        checkEqual(true, isEmptyObjectAll({}));
        checkEqual(false, isEmptyObjectAll({
          a: 1
        }));
        checkEqual(false, isEmptyObjectAll(null));
        checkEqual(false, isEmptyObjectAll(undefined));
        checkEqual(false, isEmptyObjectAll(123));
        checkEqual(false, isEmptyObjectAll('abc'));
        checkEqual(false, isEmptyObjectAll([]));
        checkEqual(false, isEmptyObjectAll([123]));
      });
    };

    var test_isEmptyArray = function test_isEmptyArray() {
      it('test_isEmptyArray', function () {
        checkEqual(false, isEmptyArrayAll({}));
        checkEqual(false, isEmptyArrayAll({
          a: 1
        }));
        checkEqual(false, isEmptyArrayAll(null));
        checkEqual(false, isEmptyArrayAll(undefined));
        checkEqual(false, isEmptyArrayAll(123));
        checkEqual(false, isEmptyArrayAll('abc'));
        checkEqual(true, isEmptyArrayAll([]));
        checkEqual(false, isEmptyArrayAll([123]));
      });
    };

    var test_isSymbol = function test_isSymbol() {
      it('test_isSymbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        checkEqual(false, isSymbolAll(1));
        checkEqual(true, isSymbolAll(Symbol()));
      });
    };

    var test_isMap = function test_isMap() {
      it('test_isMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, isMapAll({}));
          checkEqual(false, isWeakMapAll({}));
          checkEqual(true, isMapAll(new Map()));
          checkEqual(false, isWeakMapAll(new Map()));
          checkEqual(false, isMapAll(new WeakMap()));
          checkEqual(true, isWeakMapAll(new WeakMap()));
          checkEqual(true, isObjectAll({}));
          checkEqual(false, isObjectAll(new Map()));
          checkEqual(false, isObjectAll(new WeakMap()));
        } else {
          checkEqual(false, isMapAll({}));
          checkEqual(false, isWeakMapAll({}));
          checkEqual(false, isMapAll(new Map())); // IE11 bug

          checkEqual(false, isWeakMapAll(new Map()));
          checkEqual(false, isMapAll(new WeakMap()));
          checkEqual(false, isWeakMapAll(new WeakMap())); // IE11 bug

          checkEqual(true, isObjectAll({}));
          checkEqual(true, isObjectAll(new Map())); // IE11 bug

          checkEqual(true, isObjectAll(new WeakMap())); // IE11 bug
        }
      });
    };

    var test_isSet = function test_isSet() {
      it('test_isSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (!parts.platform.isInternetExplorer()) {
          checkEqual(false, isSetAll({}));
          checkEqual(true, isSetAll(new Set()));
          checkEqual(false, isSetAll(new WeakSet()));
          checkEqual(false, isWeakSetAll({}));
          checkEqual(false, isWeakSetAll(new Set()));
          checkEqual(true, isWeakSetAll(new WeakSet()));
          checkEqual(true, isObjectAll({}));
          checkEqual(false, isObjectAll(new Set()));
          checkEqual(false, isObjectAll(new WeakSet()));
        } else {
          checkEqual(false, isSetAll({}));
          checkEqual(false, isSetAll(new Set())); // IE11 bug

          checkEqual(false, isWeakSetAll({}));
          checkEqual(false, isWeakSetAll(new Set()));
          checkEqual(true, isObjectAll({}));
          checkEqual(true, isObjectAll(new Set())); // IE11 bug
        }
      });
    };

    test_checkType();
    test_isUndefinedAll();
    test_isNull();
    test_isBoolean();
    test_isNumber();
    test_isInteger();
    test_isString();
    test_isFunction();
    test_isObject();
    test_isObjectType();
    test_isArray();
    test_isArrayType();
    test_isDate();
    test_isExcection();
    test_isEmptyObject();
    test_isEmptyArray();
    test_isSymbol();
    test_isMap();
    test_isSet();
  });
};

exports.test_execute_type = test_execute_type;
var _default = {
  test_execute_type: test_execute_type
};
exports["default"] = _default;