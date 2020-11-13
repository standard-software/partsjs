(this["webpackJsonptest_parts"] = this["webpackJsonptest_parts"] || []).push([[1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_index = void 0;

var _commonTest = __webpack_require__(2);

var _typeTest = __webpack_require__(3);

var _syntaxTest = __webpack_require__(4);

var _testTest = __webpack_require__(5);

var _compareTest = __webpack_require__(6);

var _convertTest = __webpack_require__(7);

var _numberTest = __webpack_require__(8);

var _stringTest = __webpack_require__(9);

var _objectTest = __webpack_require__(10);

var _arrayTest = __webpack_require__(11);

var _dateTest = __webpack_require__(12);

var _consoleHookTest = __webpack_require__(13);

var _otherTest = __webpack_require__(14);

var test_execute_index = function test_execute_index(parts) {
  console.log("parts.js version: ".concat(parts.VERSION));
  console.log("platform: ".concat(parts.platform.name()));

  if (parts.platform.isWebBrowser()) {
    console.log("  web browser: ".concat(parts.platform.browserName()));
    console.log("  User Agent: ".concat(window.navigator.userAgent));
  }

  console.log("  buildMode: ".concat(parts.platform.buildMode));
  console.log("  startName: ".concat(parts.platform.startName));
  console.log('test start');

  var test_execute_nameSpace = function test_execute_nameSpace(parts) {
    var _parts$test = parts.test,
        describe = _parts$test.describe,
        it = _parts$test.it,
        checkEqual = _parts$test.checkEqual;
    describe('test_execute_nameSpace', function () {
      var _parts$object = parts.object,
          propertyCount = _parts$object.propertyCount,
          inProperty = _parts$object.inProperty;
      it('test_execute_nameSpace 1', function () {
        var propertyCountForParts = function propertyCountForParts(parts) {
          var result = propertyCount(parts);

          if (parts.inProperty(parts, 'default')) {
            result -= 1;
          }

          if (parts.inProperty(parts, 'parts')) {
            result -= 1;
          }

          if (parts.platform.isWindowsScriptHost()) {
            if (parts.inProperty(parts, '__esModule')) {
              result -= 1;
            } // __esModule is "in" found but "for..in" or "Object.keys" not found
            // and WSH found

          }

          return result;
        };

        var countArray = [390, 19, 7, 259, 15, 12, 44, 35, 15, 90, 40, 68, 48, 1];
        checkEqual(countArray.shift(), propertyCountForParts(parts));
        checkEqual(countArray.shift(), propertyCount(parts.platform));
        checkEqual(countArray.shift(), propertyCount(parts.common));
        checkEqual(countArray.shift(), propertyCount(parts.type));
        checkEqual(countArray.shift(), propertyCount(parts.syntax));
        checkEqual(countArray.shift(), propertyCount(parts.test));
        checkEqual(countArray.shift(), propertyCount(parts.compare));
        checkEqual(countArray.shift(), propertyCount(parts.convert));
        checkEqual(countArray.shift(), propertyCount(parts.number));
        checkEqual(countArray.shift(), propertyCount(parts.string));
        checkEqual(countArray.shift(), propertyCount(parts.object));
        checkEqual(countArray.shift(), propertyCount(parts.array));
        checkEqual(countArray.shift(), propertyCount(parts.array.operation));
        checkEqual(countArray.shift(), propertyCount(parts.date));
        checkEqual(true, inProperty(parts, 'type,syntax,test,compare,convert,' + 'number,string,object,array,date'));
      });
      it('test_execute_nameSpace 2', function () {
        checkEqual(true, inProperty(parts, 'isUndefinedAll,isNotNullAll,' + 'isFunc,isNotObj,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'assert,guard,' + 'sc,if_,switch_,' + 'equal,or,' + 'matchSome,matchSomeValue,initialValue,' + 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + 'matchFormat,' + 'copyProperty,propertyCount,inProperty,' + 'copyProp,propCount,inProp,' + 'common'));
        checkEqual(false, inProperty(parts, 'abc,' + ''));
      });
    });
  };

  var test_execute_SelfReference = function test_execute_SelfReference(parts) {
    var _parts$test2 = parts.test,
        describe = _parts$test2.describe,
        it = _parts$test2.it,
        checkEqual = _parts$test2.checkEqual;
    describe('test_execute_SelfReference', function () {
      it('test_parts_SelfReference', function () {
        if (parts.isUndefined(parts.parts)) {
          return;
        }

        checkEqual(parts.VERSION, parts.parts.VERSION);

        if (parts.isModule(parts)) {
          return;
        }

        var parts1 = parts.cloneDeep(parts);
        delete parts1.parts;

        if (!parts.isUndefined(parts1["default"])) {
          delete parts1["default"];
        }

        if (!parts.isUndefined(parts1.__esModule)) {
          delete parts1.__esModule;
        }

        var parts2 = parts.cloneDeep(parts.parts);

        if (!parts2.isUndefined(parts2.parts)) {
          delete parts2.parts;
        }

        if (!parts.isUndefined(parts2["default"])) {
          delete parts2["default"];
        }

        if (!parts.isUndefined(parts2.__esModule)) {
          delete parts2.__esModule;
        }

        checkEqual(true, parts.equalDeep(parts1, parts2));
      });
    });
  };

  var _parts$test3 = parts.test,
      describe = _parts$test3.describe,
      testFrame = _parts$test3.testFrame;
  testFrame.outputDescribe = false;
  describe('test_execute_index', function () {
    (0, _commonTest.test_execute_common)(parts);
    (0, _typeTest.test_execute_type)(parts);
    (0, _syntaxTest.test_execute_syntax)(parts);
    (0, _testTest.test_execute_test)(parts);
    (0, _compareTest.test_execute_compare)(parts);
    (0, _convertTest.test_execute_convert)(parts);
    (0, _numberTest.test_execute_number)(parts);
    (0, _stringTest.test_execute_string)(parts);
    (0, _objectTest.test_execute_object)(parts);
    (0, _arrayTest.test_execute_array)(parts);
    (0, _dateTest.test_execute_date)(parts);
    (0, _otherTest.test_execute_other)(parts);
    test_execute_nameSpace(parts);
    test_execute_SelfReference(parts);
    console.log('test finish');
  });
};

exports.test_execute_index = test_execute_index;
var _default = {
  test_execute_index: test_execute_index
};
exports["default"] = _default;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_syntax = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_syntax = function test_execute_syntax(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      expect = _parts$test.expect;
  describe('test_execute_syntax', function () {
    var _parts$test2 = parts.test,
        isThrown = _parts$test2.isThrown,
        isThrownValue = _parts$test2.isThrownValue,
        isThrownException = _parts$test2.isThrownException,
        isNotThrown = _parts$test2.isNotThrown;
    var _parts$type = parts.type,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isArray = _parts$type.isArray,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isUndefinedAll = _parts$type.isUndefinedAll,
        isNullAll = _parts$type.isNullAll,
        isBooleanAll = _parts$type.isBooleanAll,
        isNumberAll = _parts$type.isNumberAll,
        isIntegerAll = _parts$type.isIntegerAll,
        isStringAll = _parts$type.isStringAll,
        isFunctionAll = _parts$type.isFunctionAll,
        isObjectAll = _parts$type.isObjectAll,
        isArrayAll = _parts$type.isArrayAll,
        isDateAll = _parts$type.isDateAll,
        isRegExpAll = _parts$type.isRegExpAll,
        isExceptionAll = _parts$type.isExceptionAll;
    var _parts$syntax = parts.syntax,
        assert = _parts$syntax.assert,
        guard = _parts$syntax.guard,
        sc = _parts$syntax.sc,
        if_ = _parts$syntax.if_,
        switch_ = _parts$syntax.switch_,
        canUseMap = _parts$syntax.canUseMap,
        canUseWeakMap = _parts$syntax.canUseWeakMap,
        canUseSet = _parts$syntax.canUseSet,
        canUseWeakSet = _parts$syntax.canUseWeakSet,
        Enum = _parts$syntax.Enum,
        recursive = _parts$syntax.recursive;
    var _parts$compare = parts.compare,
        equal = _parts$compare.equal,
        or = _parts$compare.or;

    var test_assert = function test_assert() {
      it('test_assert', function () {
        checkEqual(false, isThrown(function () {
          assert(true);
        }));
        checkEqual(false, isThrown(function () {
          assert(true, 'test');
        }));
        checkEqual(true, isThrown(function () {
          assert(false);
        }));
        checkEqual(true, isThrown(function () {
          assert(false, 'test');
        }));
        checkEqual(true, isThrown(function () {
          assert(false);
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false';
        }));
        checkEqual(true, isThrown(function () {
          assert(false, 'test');
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false message:test';
        })); // object parameter

        checkEqual(false, isThrown(function () {
          assert({
            value: true
          });
        }));
        checkEqual(false, isThrown(function () {
          assert({
            value: true,
            message: 'test'
          });
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false
          });
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false,
            message: 'test'
          });
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false
          });
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false';
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false,
            message: 'test'
          });
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false message:test';
        })); // exception TypeError

        checkEqual(true, isThrown(function () {
          assert(0);
        }, function (e) {
          // console.log(e);
          return e.name === new TypeError().name && e.message === 'assert args(value) is not boolean. value:0';
        }));
        checkEqual(true, isThrown(function () {
          assert(0, 'abc');
        }, function (e) {
          // console.log(e);
          return e.name === new TypeError().name && e.message === 'assert args(value) is not boolean. value:0 message:abc';
        }));
        checkEqual(true, isThrown(function () {
          assert(false, 100);
        }, function (e) {
          // console.log(e);
          return e.name === new TypeError().name && e.message === 'assert args(message) is not string. value:false message:100';
        }));
      });
    };

    var test_guard = function test_guard() {
      it('test_guard', function () {
        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2), 'testmessage']];
        };

        {
          // no guard
          {
            var result1 = false;
            var value1 = 1;
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'no guard');
            checkEqual('', guard.message());
          } // guard

          {
            var result1 = false;
            var value1 = '1';
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(true, result1, 'guard 1');
            checkEqual('', guard.message());
            var result1 = false;
            var value1 = 1;
            var value2 = '2';

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(true, result1, 'guard 2');
            checkEqual('testmessage', guard.message());
          } // guard no run

          guard.off();
          {
            var result1 = false;
            var value1 = '1';
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'guard off 1');
            checkEqual('', guard.message());
            var result1 = false;
            var value1 = 1;
            var value2 = '2';

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'guard off 2');
            checkEqual('', guard.message());
          }
          guard.on();
        } // guard array length

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), isArrayAll(value2), 1 <= value2.length];
        };

        {
          var result1 = false;
          var value1 = 1;
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(false, result1, 'guard array length 1');
          var result1 = false;
          var value1 = 1;
          var value2 = [];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array length 2');
          var result1 = false;
          var value1 = [1];
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array length 3');
        } // guard array value etc

        var guardFunc = function guardFunc() {
          return [isArrayAll(value1), [1 <= value1.length], [value1[0] === 1, 'value1[0]error'], function () {
            return isArrayAll(value2);
          }, [function () {
            return 2 <= value2.length;
          }], [function () {
            return value2[0] === 1;
          }, 'value2[0]error']];
        };

        {
          var result1 = false;
          var value1 = [1];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(false, result1, 'guard array value etc 1');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = 1;
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 2');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 3');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [2];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 4');
          checkEqual('value1[0]error', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = '[1,2]';

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 5');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 6');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = [2, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 7');
          checkEqual('value2[0]error', guard.message());
        } // gurad exception args1

        {
          checkEqual(true, isNotThrown(function () {
            return guard(function () {
              return [];
            });
          }));
          checkEqual(true, isThrownException(function () {
            return guard(123);
          }, new TypeError().name));
          checkEqual(true, isThrown(function () {
            return guard(123);
          }));
          checkEqual(true, isThrown(function () {
            return guard(123);
          }, function (e) {
            return e.message === 'guard args(guardFunc) is not function';
          }), 'gurad exception args1 4');
        } // (new SyntaxError).name
        // environment
        //  normal: 'SyntaxError'
        //  wsh:    'Error'
        // gurad exception args1 result

        {
          checkEqual(true, isThrownException(function () {
            return guard(function () {
              return 123;
            });
          }, new TypeError().name));
          checkEqual(true, isThrown(function () {
            return guard(function () {
              return 123;
            });
          }));
          checkEqual(true, isThrown(function () {
            return guard(function () {
              return 123;
            });
          }, function (e) {
            return e.message === 'guard args(guardFunc result) is not array';
          }));
        } // gurad exception args1 function result array

        var value1 = 1;
        var value2 = 2;

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2), 'testmessage']];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 1');

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2)]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 2');

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), []];
        };

        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 3');
        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element) is not array.length >= 1';
        }), 'gurad exception args1 function result array 3-2');

        var guardFunc = function guardFunc() {
          return [[isIntegerAll(value2), 'testmessage'], isIntegerAll(value1)];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 4');

        var guardFunc = function guardFunc() {
          return [[isIntegerAll(value2)], isIntegerAll(value1)];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 5');

        var guardFunc = function guardFunc() {
          return [[], isIntegerAll(value1)];
        };

        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 6');
        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element) is not array.length >= 1';
        }), 'gurad exception args1 function result array 6-2'); // gurad exception function result array function result

        var guardFunc = function guardFunc() {
          return [function () {
            return true;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception function result array function result 1');

        var guardFunc = function guardFunc() {
          return [function () {
            return 123;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element value) is not boolean';
        }), 'gurad exception function result array function result 2');

        var guardFunc = function guardFunc() {
          return [function () {
            return true;
          }, [function () {
            return 123;
          }]];
        };

        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element value) is not boolean';
        }), 'gurad exception function result array function result 3'); // gurad exception args2

        var guardFunc = function guardFunc() {
          return [function () {
            return false;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc, function () {});
        }), 'gurad exception args2(runFunc) 1');
        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc, 'test');
        }), 'gurad exception args2(runFunc) 2');
      });
    };

    var test_sc = function test_sc() {
      it('test_sc', function () {
        checkEqual(true, sc(1, equal, 1));
        checkEqual(false, sc(1, equal, 2));
        checkEqual(true, sc('1', equal, '1'));
        checkEqual(false, sc(1, equal, '1'));
        checkEqual(false, sc('1', equal, 1));
        checkEqual(true, sc(1, or, [1, 2]));
        checkEqual(false, sc(0, or, [1, 2]));
      });
    };

    var test_if_ = function test_if_() {
      it('test_if_', function () {
        // { then: value, else: value }
        checkEqual('THEN', if_(true)({
          then: 'THEN',
          "else": 'ELSE'
        }));
        checkEqual('ELSE', if_(false)({
          then: 'THEN',
          "else": 'ELSE'
        }));
        checkEqual('THEN', if_(true)({
          then: 'THEN'
        }));
        checkEqual(undefined, if_(false)({
          then: 'ELSE'
        }));
        checkEqual(undefined, if_(true)({
          "else": 'ELSE'
        }));
        checkEqual('ELSE', if_(false)({
          "else": 'ELSE'
        })); // { then: function, else: function }

        checkEqual('THEN', if_(true)({
          then: function then() {
            return 'THEN';
          },
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('ELSE', if_(false)({
          then: function then() {
            return 'THEN';
          },
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('THEN', if_(true)({
          then: function then() {
            return 'THEN';
          }
        }));
        checkEqual(undefined, if_(false)({
          then: function then() {
            return 'THEN';
          }
        }));
        checkEqual(undefined, if_(true)({
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('ELSE', if_(false)({
          "else": function _else() {
            return 'ELSE';
          }
        })); // (value, value)

        checkEqual('THEN', if_(true)('THEN', 'ELSE'));
        checkEqual('ELSE', if_(false)('THEN', 'ELSE'));
        checkEqual('THEN', if_(true)('THEN'));
        checkEqual(undefined, if_(false)('THEN'));
        checkEqual(undefined, if_(true)(undefined, 'ELSE'));
        checkEqual('ELSE', if_(false)(undefined, 'ELSE')); // (function, function)

        checkEqual('THEN', if_(true)(function () {
          return 'THEN';
        }, function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false)(function () {
          return 'THEN';
        }, function () {
          return 'ELSE';
        }));
        checkEqual('THEN', if_(true)(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(false)(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(true)(undefined, function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false)(undefined, function () {
          return 'ELSE';
        })); // .then(value).else(value)

        checkEqual('THEN', if_(true).then('THEN')["else"]('ELSE'));
        checkEqual('ELSE', if_(false).then('THEN')["else"]('ELSE'));
        checkEqual('THEN', if_(true).then('THEN')["else"]());
        checkEqual(undefined, if_(false).then('THEN')["else"]());
        checkEqual(undefined, if_(true).then()["else"]('ELSE'));
        checkEqual('ELSE', if_(false).then()["else"]('ELSE')); // .then(function).else(function)

        checkEqual('THEN', if_(true).then(function () {
          return 'THEN';
        })["else"](function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false).then(function () {
          return 'THEN';
        })["else"](function () {
          return 'ELSE';
        }));
        checkEqual('THEN', if_(true).then(function () {
          return 'THEN';
        })["else"]());
        checkEqual(undefined, if_(false).then(function () {
          return 'THEN';
        })["else"]());
        checkEqual(undefined, if_(true).then()["else"](function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false).then()["else"](function () {
          return 'ELSE';
        })); // .else(value).then(value)

        checkEqual('THEN', if_(true)["else"]('ELSE').then('THEN'));
        checkEqual('ELSE', if_(false)["else"]('ELSE').then('THEN'));
        checkEqual('THEN', if_(true)["else"]().then('THEN'));
        checkEqual(undefined, if_(false)["else"]().then('THEN'));
        checkEqual(undefined, if_(true)["else"]('ELSE').then());
        checkEqual('ELSE', if_(false)["else"]('ELSE').then()); // .else(function).then(function)

        checkEqual('THEN', if_(true)["else"](function () {
          return 'ELSE';
        }).then(function () {
          return 'THEN';
        }));
        checkEqual('ELSE', if_(false)["else"](function () {
          return 'ELSE';
        }).then(function () {
          return 'THEN';
        }));
        checkEqual('THEN', if_(true)["else"]().then(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(false)["else"]().then(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(true)["else"](function () {
          return 'ELSE';
        }).then());
        checkEqual('ELSE', if_(false)["else"](function () {
          return 'ELSE';
        }).then());
      });
    };

    var test_switch_ = function test_switch_() {
      it('test_switch_', function () {
        var switchResultValue1 = [[1, 'number 1'], ['1', 'string 1']];
        checkEqual('number 1', switch_(1)(switchResultValue1));
        checkEqual('string 1', switch_('1')(switchResultValue1));
        checkEqual(undefined, switch_(2)(switchResultValue1));
        var switchResultValue2 = [[1, 'number 1'], ['1', 'string 1'], ['default']];
        checkEqual('number 1', switch_(1)(switchResultValue2));
        checkEqual('string 1', switch_('1')(switchResultValue2));
        checkEqual('default', switch_(2)(switchResultValue2));
        var switchResultValue3 = [[1, 'number 1'], ['1', 'string 1'], []];
        checkEqual('number 1', switch_(1)(switchResultValue3));
        checkEqual('string 1', switch_('1')(switchResultValue3));
        checkEqual(undefined, switch_(2)(switchResultValue3)); // Error

        var switchResultValue4 = [[1, '1'], 'default'];
        checkEqual(true, isThrownException(function () {
          switch_(1)(switchResultValue4);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          switch_(2)(switchResultValue4);
        }, new TypeError().name));
        var switchResultFunc1 = [[1, function () {
          return 'number 1';
        }], ['1', function () {
          return 'string 1';
        }]];
        checkEqual('number 1', switch_(1)(switchResultFunc1));
        checkEqual('string 1', switch_('1')(switchResultFunc1));
        checkEqual(undefined, switch_(2)(switchResultFunc1));
        var switchResultFunc2 = [[1, function () {
          return 'number 1';
        }], ['1', function () {
          return 'string 1';
        }], [function () {
          return 'default';
        }]];
        checkEqual('number 1', switch_(1)(switchResultFunc2));
        checkEqual('string 1', switch_('1')(switchResultFunc2));
        checkEqual('default', switch_(2)(switchResultFunc2));
        var switchResultFunc3 = [[1, 'number 1'], ['1', 'string 1'], [function () {}]];
        checkEqual('number 1', switch_(1)(switchResultFunc3));
        checkEqual('string 1', switch_('1')(switchResultFunc3));
        checkEqual(undefined, switch_(2)(switchResultFunc3));
      });
    };

    var test_loop = function test_loop() {
      it('test_loop', function () {
        var outputConsoleText = '';

        var console_log = function console_log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          for (var _i = 0, _args = args; _i < _args.length; _i++) {
            var arg = _args[_i];

            if (isArray(arg)) {
              var argsText = '';

              var _iterator = _createForOfIteratorHelper(arg),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var element = _step.value;

                  if (isArray(element)) {
                    argsText += "[".concat(element, "],");
                  } else {
                    argsText += "".concat(element, ",");
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              argsText = parts.string.deleteLast(argsText, 1);
              outputConsoleText += "[".concat(argsText, "] ");
            } else {
              outputConsoleText += "".concat(arg, " ");
            }
          }

          outputConsoleText += '\n';
        };

        outputConsoleText = '';
        {
          // 3 times loop
          parts.loop(3)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false \n' + '1 1 [0,1,2] false false \n' + '2 2 [0,1,2] false true \n' + '');
        outputConsoleText = '';
        {
          // 1 to 3 loop
          parts.loop(1, 3)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('1 0 [1,2,3] true false \n' + '2 1 [1,2,3] false false \n' + '3 2 [1,2,3] false true \n' + '');
        outputConsoleText = '';
        {
          // 1 times loop : first last flag
          parts.loop(1)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0] true true \n' + '');
        outputConsoleText = '';
        {
          // 1 to 10 step 2 loop and continue and break
          parts.loop(1, 10, 2)(function (e, i, array, first, last) {
            if (i === 1) {
              return;
            }

            console_log(e, i, array, first, last);

            if (i === 3) {
              return {
                "break": true
              };
            }
          });
        }
        expect(outputConsoleText).toEqual('1 0 [1,3,5,7,9] true false \n' + '5 2 [1,3,5,7,9] false false \n' + '7 3 [1,3,5,7,9] false false \n' + '');
        outputConsoleText = '';
        {
          // double loop
          parts.loop(3)(function (e, j, array, first, last) {
            parts.loop(3)(function (e, i, array, first, last) {
              console_log(e, i, array, first, last, j);
            });
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false 0 \n' + '1 1 [0,1,2] false false 0 \n' + '2 2 [0,1,2] false true 0 \n' + '0 0 [0,1,2] true false 1 \n' + '1 1 [0,1,2] false false 1 \n' + '2 2 [0,1,2] false true 1 \n' + '0 0 [0,1,2] true false 2 \n' + '1 1 [0,1,2] false false 2 \n' + '2 2 [0,1,2] false true 2 \n' + '');
        outputConsoleText = '';
        {
          // Break from a double loop
          parts.loop(3)(function (e, j, array, first, last) {
            var loopResult = parts.loop(3)(function (e, i, array, first, last) {
              console_log(e, i, array, first, last, j);

              if (i === 0) {
                console_log('continue');
                return;
              }

              if (i === 1) {
                console_log('break');
                return {
                  "break": true,
                  parentLoopCounter: j
                };
              }
            });

            if (loopResult["break"] === true) {
              console_log('return break');

              if (loopResult.parentLoopCounter === 1) {
                console_log('break the double loop');
                return {
                  "break": true
                };
              } else {
                console_log('continue the double loop');
              }
            }
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false 0 \n' + 'continue \n' + '1 1 [0,1,2] false false 0 \n' + 'break \n' + 'return break \n' + 'continue the double loop \n' + '0 0 [0,1,2] true false 1 \n' + 'continue \n' + '1 1 [0,1,2] false false 1 \n' + 'break \n' + 'return break \n' + 'break the double loop \n' + '');
        outputConsoleText = '';
        {
          // loop array
          parts.loop(['A', 'B', 'C'])(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('A 0 [A,B,C] true false \n' + 'B 1 [A,B,C] false false \n' + 'C 2 [A,B,C] false true \n' + '');
        outputConsoleText = '';
        {
          // loop object
          parts.loop({
            a: 'A',
            b: 'B',
            c: 'C'
          })(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('[a,A] 0 [[a,A],[b,B],[c,C]] true false \n' + '[b,B] 1 [[a,A],[b,B],[c,C]] false false \n' + '[c,C] 2 [[a,A],[b,B],[c,C]] false true \n' + '');
      });
    };

    var test_canUseMap = function test_canUseMap() {
      it('test_canUseMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseMap());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseMap());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, canUseMap());
        } else {
          checkEqual(true, canUseMap());
        }
      });
    };

    var test_canUseWeakMap = function test_canUseWeakMap() {
      it('test_canUseWeakMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseWeakMap());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseWeakMap());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, canUseWeakMap());
        } else {
          checkEqual(true, canUseWeakMap());
        }
      });
    };

    var test_canUseSet = function test_canUseSet() {
      it('test_canUseSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseSet());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseSet());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, canUseSet());
        } else {
          checkEqual(true, canUseSet());
        }
      });
    };

    var test_canUseWeakSet = function test_canUseWeakSet() {
      it('test_canUseWeakSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseWeakSet());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseWeakSet());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(false, canUseWeakSet());
        } else {
          checkEqual(true, canUseWeakSet());
        }
      });
    };

    var test_Enum = function test_Enum() {
      it('test_Enum', function () {
        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, Enum(['a', 'b', 'c']));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, Enum(['a', 'b', 'c'], true));
        checkEqual({
          a: 2,
          b: 1,
          c: 0
        }, Enum(['c', 'b', 'a'], true)); // object parameter

        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, Enum({
          values: ['a', 'b', 'c']
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, Enum({
          values: ['a', 'b', 'c'],
          useIndex: true
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, Enum(['a', 'b', 'c'], {
          useIndex: true
        }));
        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, new Enum(['a', 'b', 'c']));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, new Enum(['a', 'b', 'c'], true));
        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, new Enum({
          values: ['a', 'b', 'c']
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, new Enum({
          values: ['a', 'b', 'c'],
          useIndex: true
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, new Enum(['a', 'b', 'c'], {
          useIndex: true
        })); // exception TypeError

        checkEqual(false, isThrown(function () {
          Enum(['a', 'b', 'c']);
        }));
        checkEqual(true, isThrown(function () {
          Enum([0, 'b', 'c']);
        }));
      });
    };

    var test_recursive = function test_recursive() {
      it('test_recursive', function () {
        var data = [{
          'id': 1,
          'name': 'folderA',
          'folder': [{
            'id': 2,
            'name': 'folderA-2'
          }, {
            'id': 3,
            'name': 'folderA-3'
          }]
        }, {
          'id': 4,
          'name': 'folderB'
        }, {
          'id': 5,
          'name': 'folderC',
          'folder': [{
            'id': 6,
            'name': 'folderC-1',
            'folder': [{
              'id': 7,
              'name': 'folderC-1-1'
            }]
          }]
        }];
        var message = '';
        recursive(data, function (value, key, level, source) {
          checkEqual(data, source);
          message += "".concat(key, ":").concat(value.name, " ");

          if ('folder' in value) {
            return value.folder;
          }
        });
        checkEqual('0:folderA 0:folderA-2 1:folderA-3 ' + '1:folderB 2:folderC 0:folderC-1 0:folderC-1-1 ', message);
        var testObject = {
          a: 1,
          b: 2,
          c: {
            d: 3,
            e: {
              f: 4
            }
          },
          g: [5, [{
            h: 6
          }]]
        };
        var message = '';
        recursive(testObject, function (value, key) {
          message += "".concat(key, ":").concat(_typeof(value), " ");

          if (isObject(value)) {
            return value;
          }
        });
        checkEqual('a:number b:number c:object d:number e:object f:number g:object ', message);
        var message = '';
        recursive(testObject, function (value, key) {
          message += "".concat(key, ":").concat(_typeof(value), " ");

          if (isObject(value)) {
            return value;
          } else if (Array.isArray(value)) {
            return value;
          }
        });
        checkEqual('a:number b:number c:object d:number e:object f:number ' + 'g:object 0:number 1:object 0:object h:number ', message);
        var message = '';
        recursive(testObject, function (value, key, level) {
          message += "".concat(key, ":").concat(_typeof(value), " ");

          if (1 <= level) {
            return;
          }

          if (isObject(value)) {
            return value;
          } else if (Array.isArray(value)) {
            return value;
          }
        });
        checkEqual('a:number b:number c:object d:number e:object ' + 'g:object 0:number 1:object ', message);
        var data = {
          'children': [{
            'contents': {
              'A': 0,
              'B': 1,
              'C': 2
            },
            'children': [{
              'children': [],
              'name': 'test03',
              'id': 3
            }, {
              'children': [],
              'name': 'test04',
              'id': 4
            }],
            'name': 'test01',
            'id': 1
          }, {
            'contents': {
              'A': 0,
              'B': 1,
              'C': 2
            },
            'children': [{
              'children': [],
              'name': 'test05',
              'id': 5
            }, {
              'children': [],
              'name': 'test06',
              'id': 6
            }],
            'name': 'test02',
            'id': 2
          }]
        };
        var messages = [];
        recursive(data.children, function (value, key, level) {
          messages.push({
            name: value.name,
            level: level
          });

          if ('children' in value) {
            return value.children;
          }
        });
        var SortFunc = parts.array.SortFunc;
        messages.sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.level;
        }]]));
        var message = parts.array.map(messages, function (v) {
          return "name:".concat(v.name);
        }).join(' ');
        checkEqual('name:test01 name:test02 name:test03 name:test04 name:test05 name:test06', message);
        var data = [{
          id: 0,
          parent: null
        }, {
          id: 1,
          parent: 0
        }, {
          id: 2,
          parent: 0
        }, {
          id: 3,
          parent: 1
        }, {
          id: 4,
          parent: 1
        }, {
          id: 5,
          parent: 2
        }];
        var output = [{
          id: 0,
          children: [{
            id: 1,
            children: [{
              id: 3,
              children: []
            }, {
              id: 4,
              children: []
            }]
          }, {
            id: 2,
            children: [{
              id: 5,
              children: []
            }]
          }]
        }];
        var result = [];
        result.push({
          id: data[0].id,
          children: []
        });

        var _iterator2 = _createForOfIteratorHelper(data),
            _step2;

        try {
          var _loop = function _loop() {
            var dataItem = _step2.value;
            parts.syntax.recursive(result, function (item) {
              if (item.id === dataItem.parent) {
                item.children.push({
                  id: dataItem.id,
                  children: []
                });
              } else {
                return item.children;
              }
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        checkEqual(output, result); // same logic no use parts.syntax.recursive

        var result = [];
        result.push({
          id: data[0].id,
          children: []
        });

        var _iterator3 = _createForOfIteratorHelper(data),
            _step3;

        try {
          var _loop2 = function _loop2() {
            var dataItem = _step3.value;

            var f = function f(array) {
              var _iterator4 = _createForOfIteratorHelper(array),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value;

                  if (item.id === dataItem.parent) {
                    item.children.push({
                      id: dataItem.id,
                      children: []
                    });
                  } else {
                    f(item.children);
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            };

            f(result);
          };

          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop2();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        checkEqual(output, result);
      });
    };

    test_assert();
    test_guard();
    test_sc();
    test_if_();
    test_switch_();
    test_loop();
    test_canUseMap();
    test_canUseWeakMap();
    test_canUseSet();
    test_canUseWeakSet();
    test_Enum();
    test_recursive();
  });
};

exports.test_execute_syntax = test_execute_syntax;
var _default = {
  test_execute_syntax: test_execute_syntax
};
exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_convert = void 0;

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
      it('test_NumberCast', function () {
        // Integer
        checkEqual(123, Number('123'));
        checkEqual(123, Number('0123'));
        checkEqual(123, Number('+123'));
        checkEqual(-123, Number('-0123'));
        checkEqual(123, Number(' 123'), '1');
        checkEqual(123, Number('123 '), '2');
        checkEqual(123, Number(' 123 '), '3');

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('　123'), '4');
          checkEqual(NaN, Number('123　'), '5');
          checkEqual(NaN, Number('　123　'), '6');
        } else {
          checkEqual(123, Number('　123'), '4');
          checkEqual(123, Number('123　'), '5');
          checkEqual(123, Number('　123　'), '6');
        }

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

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('　123.4'));
          checkEqual(NaN, Number('123.4　'));
          checkEqual(NaN, Number('　123.4　'));
        } else {
          checkEqual(123.4, Number('　123.4'));
          checkEqual(123.4, Number('123.4　'));
          checkEqual(123.4, Number('　123.4　'));
        }

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

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('　'));
        } else {
          checkEqual(0, Number('　')); // ?
        } // exponential notation


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
      it('test_parseFloat', function () {
        // Integer
        checkEqual(123, parseFloat('123'));
        checkEqual(123, parseFloat('0123'));
        checkEqual(123, parseFloat('+123'));
        checkEqual(-123, parseFloat('-0123'));
        checkEqual(123, parseFloat(' 123'), '1');
        checkEqual(123, parseFloat('123 '), '2');
        checkEqual(123, parseFloat(' 123 '), '3');

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　123'), '4');
          checkEqual(123, parseFloat('123　'), '5');
          checkEqual(NaN, parseFloat('　123　'), '6');
        } else {
          checkEqual(123, parseFloat('　123'), '4');
          checkEqual(123, parseFloat('123　'), '5');
          checkEqual(123, parseFloat('　123　'), '6');
        }

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

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　123.4'));
          checkEqual(123.4, parseFloat('123.4　'));
          checkEqual(NaN, parseFloat('　123.4　'));
        } else {
          checkEqual(123.4, parseFloat('　123.4'));
          checkEqual(123.4, parseFloat('123.4　'));
          checkEqual(123.4, parseFloat('　123.4　'));
        }

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
      it('test_parseInt', function () {
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

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　123'), '4');
          checkEqual(123, parseInt10('123　'), '5');
          checkEqual(NaN, parseInt10('　123　'), '6');
        } else {
          checkEqual(123, parseInt10('　123'), '4');
          checkEqual(123, parseInt10('123　'), '5');
          checkEqual(123, parseInt10('　123　'), '6');
        }

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

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　123.4'));
          checkEqual(123, parseInt10('123.4　'));
          checkEqual(NaN, parseInt10('　123.4　'));
        } else {
          checkEqual(123, parseInt10('　123.4'));
          checkEqual(123, parseInt10('123.4　'));
          checkEqual(123, parseInt10('　123.4　'));
        }

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_number = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_number = function test_execute_number(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_number', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$number = parts.number,
        isMultiples = _parts$number.isMultiples,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd,
        round = _parts$number.round,
        nearEqual = _parts$number.nearEqual,
        inRange = _parts$number.inRange,
        randomInt = _parts$number.randomInt;

    var test_isMultiples = function test_isMultiples() {
      it('test_isMultiples', function () {
        checkEqual(true, isMultiples(10, 2));
        checkEqual(true, isMultiples(10, 5));
        checkEqual(false, isMultiples(10, 3));
        checkEqual(false, isMultiples(9, 2));
        checkEqual(false, isMultiples(9, 5));
        checkEqual(true, isMultiples(9, 3));
        checkEqual(true, isMultiples(0, 2));
        checkEqual(false, isMultiples(-1, 2));
        checkEqual(true, isMultiples(-2, 2)); // Object Named Parameter

        checkEqual(true, isMultiples({
          number: 10,
          radix: 2
        }));
        checkEqual(false, isMultiples({
          number: 9,
          radix: 2
        })); // exception

        checkEqual(false, isThrown(function () {
          isMultiples(10, 2);
        }));
        checkEqual(true, isThrown(function () {
          isMultiples(10.1, 2);
        }));
        checkEqual(true, isThrown(function () {
          isMultiples(10, 2.2);
        }));
      });
    };

    var test_Math_round = function test_Math_round() {
      it('test_Math_round', function () {
        checkEqual(5, Math.round(5));
        checkEqual(5, Math.round(5.4));
        checkEqual(6, Math.round(5.5));
        checkEqual(-5, Math.round(-5));
        checkEqual(-5, Math.round(-5.4));
        checkEqual(-5, Math.round(-5.5));
      });
    };

    var test_round = function test_round() {
      it('test_round', function () {
        checkEqual(5, round(5));
        checkEqual(5, round(5.4));
        checkEqual(6, round(5.5));
        checkEqual(5, round(5, 0));
        checkEqual(5, round(5.4, 0));
        checkEqual(6, round(5.5, 0));
        checkEqual(5.4, round(5.44, 1));
        checkEqual(5.5, round(5.45, 1));
        checkEqual(5.5, round(5.54, 1));
        checkEqual(5.6, round(5.55, 1));
        checkEqual(5.04, round(5.044, 2));
        checkEqual(5.05, round(5.045, 2));
        checkEqual(5.05, round(5.054, 2));
        checkEqual(5.06, round(5.055, 2));
        checkEqual(540, round(544, -1));
        checkEqual(550, round(545, -1));
        checkEqual(550, round(554, -1));
        checkEqual(560, round(555, -1));
        checkEqual(5400, round(5440, -2));
        checkEqual(5500, round(5450, -2));
        checkEqual(5500, round(5540, -2));
        checkEqual(5600, round(5550, -2));
        checkEqual(-5, round(-5));
        checkEqual(-5, round(-5.4));
        checkEqual(-6, round(-5.5));
        checkEqual(-5, round(-5, 0));
        checkEqual(-5, round(-5.4, 0));
        checkEqual(-6, round(-5.5, 0));
        checkEqual(-5.4, round(-5.44, 1));
        checkEqual(-5.5, round(-5.45, 1));
        checkEqual(-5.5, round(-5.54, 1));
        checkEqual(-5.6, round(-5.55, 1));
        checkEqual(-5.04, round(-5.044, 2));
        checkEqual(-5.05, round(-5.045, 2));
        checkEqual(-5.05, round(-5.054, 2));
        checkEqual(-5.06, round(-5.055, 2));
        checkEqual(-540, round(-544, -1));
        checkEqual(-550, round(-545, -1));
        checkEqual(-550, round(-554, -1));
        checkEqual(-560, round(-555, -1));
        checkEqual(-5400, round(-5440, -2));
        checkEqual(-5500, round(-5450, -2));
        checkEqual(-5500, round(-5540, -2));
        checkEqual(-5600, round(-5550, -2)); // Object Named Parameter

        checkEqual(6, round({
          value: 5.5
        }));
        checkEqual(5.06, round({
          value: 5.055,
          digit: 2
        }));
        checkEqual(5600, round({
          value: 5550,
          digit: -2
        })); // exception

        checkEqual(false, isThrown(function () {
          round(5.5, 2);
        }));
        checkEqual(true, isThrown(function () {
          round(5.5, 2.2);
        }));
      });
    };

    var test_nearEqual = function test_nearEqual() {
      it('test_nearEqual', function () {
        checkEqual(true, nearEqual(0.049999, 0.050011, 0.001));
        checkEqual(true, nearEqual(0.050, 0.051, 0.001));
        checkEqual(true, nearEqual(0.050, 0.0509, 0.001));
        checkEqual(true, nearEqual(0.050, 0.0510, 0.001));
        checkEqual(false, nearEqual(0.050, 0.051000001, 0.001));
        checkEqual(true, nearEqual(0.050011, 0.049999, 0.001));
        checkEqual(true, nearEqual(0.051, 0.050, 0.001));
        checkEqual(true, nearEqual(0.0509, 0.050, 0.001));
        checkEqual(true, nearEqual(0.0510, 0.050, 0.001));
        checkEqual(false, nearEqual(0.05100001, 0.050, 0.001)); // Object Named Parameter

        checkEqual(false, nearEqual({
          value1: 0.050,
          value2: 0.051000001,
          diff: 0.001
        }));
        checkEqual(true, nearEqual({
          value1: 0.050011,
          value2: 0.049999,
          diff: 0.001
        })); // exception

        checkEqual(false, isThrown(function () {
          nearEqual(0.50, 0.51, 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual('0.50', 0.51, 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, '0.51', 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, 0.51, '0.001');
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, 0.51, -0.001);
        }));
      });
    };

    var test_inRange = function test_inRange() {
      it('test_inRange', function () {
        checkEqual(true, inRange(20, 10, 30));
        checkEqual(true, inRange(10, 10, 30));
        checkEqual(true, inRange(30, 10, 30));
        checkEqual(false, inRange(9, 10, 30));
        checkEqual(false, inRange(31, 10, 30));
        checkEqual(false, inRange(9.99, 10, 30));
        checkEqual(false, inRange(30.01, 10, 30));
        checkEqual(true, inRange(10, 10, 10)); // Object Named Parameter

        checkEqual(true, inRange({
          value: 30,
          from: 10,
          to: 30
        }));
        checkEqual(false, inRange({
          value: 9,
          from: 10,
          to: 30
        })); // exception

        checkEqual(false, isThrown(function () {
          inRange(20, 10, 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange('20', 10, 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange(20, '10', 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange(20, 10, '30');
        }));
      });
    };

    var test_randomInt = function test_randomInt() {
      it('test_randomInt', function () {
        checkEqual(5, randomInt(5, 5));
        var result = randomInt(1, 10);
        checkEqual(true, inRange(result, 1, 10)); // Object Named Parameter

        checkEqual(10, randomInt({
          min: 10,
          max: 10
        })); // exception

        checkEqual(false, isThrown(function () {
          randomInt(10, 10);
        }));
        checkEqual(true, isThrown(function () {
          randomInt('10', 10);
        }));
        checkEqual(true, isThrown(function () {
          randomInt(10, '10');
        }));
      });
    };

    test_isMultiples();
    test_Math_round();
    test_round();
    test_nearEqual();
    test_inRange();
    test_randomInt();
  });
};

exports.test_execute_number = test_execute_number;
var _default = {
  test_execute_number: test_execute_number
};
exports["default"] = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_string = void 0;

/* eslint-disable max-len */
var test_execute_string = function test_execute_string(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_string', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$string = parts.string,
        matchFormat = _parts$string.matchFormat,
        replaceAll = _parts$string.replaceAll,
        indexOfFirst = _parts$string.indexOfFirst,
        indexOfLast = _parts$string.indexOfLast,
        isFirst = _parts$string.isFirst,
        isLast = _parts$string.isLast,
        isBothEnds = _parts$string.isBothEnds,
        includeFirst = _parts$string.includeFirst,
        includeLast = _parts$string.includeLast,
        includeBothEnds = _parts$string.includeBothEnds,
        excludeFirst = _parts$string.excludeFirst,
        excludeLast = _parts$string.excludeLast,
        excludeBothEnds = _parts$string.excludeBothEnds,
        trimFirst = _parts$string.trimFirst,
        trimLast = _parts$string.trimLast,
        trimBothEnds = _parts$string.trimBothEnds,
        subIndex = _parts$string.subIndex,
        subLength = _parts$string.subLength,
        subFirst = _parts$string.subFirst,
        subLast = _parts$string.subLast,
        deleteIndex = _parts$string.deleteIndex,
        deleteLength = _parts$string.deleteLength,
        deleteFirst = _parts$string.deleteFirst,
        deleteLast = _parts$string.deleteLast,
        insert = _parts$string.insert,
        add = _parts$string.add,
        subFirstDelimFirst = _parts$string.subFirstDelimFirst,
        subFirstDelimLast = _parts$string.subFirstDelimLast,
        subLastDelimFirst = _parts$string.subLastDelimFirst,
        subLastDelimLast = _parts$string.subLastDelimLast,
        tagInnerFirst = _parts$string.tagInnerFirst,
        tagOuterFirst = _parts$string.tagOuterFirst,
        tagInnerLast = _parts$string.tagInnerLast,
        tagOuterLast = _parts$string.tagOuterLast,
        split = _parts$string.split,
        splitCommaItems = _parts$string.splitCommaItems,
        splitDotItems = _parts$string.splitDotItems,
        indexOfAnyFirst = _parts$string.indexOfAnyFirst,
        indexOfAnyLast = _parts$string.indexOfAnyLast,
        replaceAllArray = _parts$string.replaceAllArray,
        paddingFirst = _parts$string.paddingFirst,
        paddingLast = _parts$string.paddingLast;

    var test_matchFormat = function test_matchFormat() {
      it('test_matchFormat', function () {
        checkEqual(true, matchFormat('number', '123'));
        checkEqual(false, matchFormat('number', '12a'));
        checkEqual(false, matchFormat('number', '-123'));
        checkEqual(true, matchFormat('integer', '-123'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/9/5'));
        checkEqual(true, matchFormat('date_y/m/d', '19/1/1'));
        checkEqual(true, matchFormat('date_y/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '9//1'));
        checkEqual(false, matchFormat('date_y/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/mm/dd', '2019/11/05'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-9-9'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-9-5'));
        checkEqual(true, matchFormat('date_y-m-d', '19-1-1'));
        checkEqual(true, matchFormat('date_y-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '9--1'));
        checkEqual(false, matchFormat('date_y-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-mm-dd', '2019-11-05'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/9/9')); // Object Named Parameter

        checkEqual(false, matchFormat({
          formatName: 'number',
          value: '-123'
        }));
        checkEqual(true, matchFormat({
          formatName: 'integer',
          value: '-123'
        })); // Exception

        checkEqual(false, isThrownException(function () {
          matchFormat('integer', 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat(null, 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('integer', 123);
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('aaa', 'abc');
        }, new RangeError().name), 'test matchFormat exception');
      });
    };

    var test_replaceAll = function test_replaceAll() {
      it('test_replaceAll', function () {
        checkEqual('aaaa', replaceAll('abab', 'b', 'a'));
        checkEqual('aaaa', replaceAll('abab', 'ab', 'aa'));
        checkEqual('abcabc', replaceAll('abab', 'ab', 'abc')); // Object Named Parameter

        checkEqual('abcabc', replaceAll({
          str: 'abab',
          before: 'ab',
          after: 'abc'
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAll('1212', '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll(1212, '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', 12, '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', '12', 123);
        }));
      });
    };

    var test_replaceAllArray = function test_replaceAllArray() {
      it('test_replaceAllArray', function () {
        checkEqual('aaaa', replaceAllArray('abab', [['b', 'a']]));
        checkEqual('aaaa', replaceAllArray('abab', [['ab', 'aa']]));
        checkEqual('abcabc', replaceAllArray('abab', [['ab', 'abc']]));
        checkEqual('baba', replaceAllArray('abab', [['b', 'a'], ['a', 'b']]));
        checkEqual('bbbb', replaceAllArray('abab', [['a', 'b'], ['d', 'b']]));
        checkEqual('cbcb', replaceAllArray('abab', [['a', 'c'], ['d', 'b']]));
        checkEqual('acac', replaceAllArray('abab', [['c', 'a'], ['b', 'c']]));
        checkEqual('abab', replaceAllArray('abab', [['c', 'a'], ['d', 'b']]));
        checkEqual('abab', replaceAllArray('abcabc', [['abc', 'ab'], ['bca', 'b']]));
        checkEqual('abab', replaceAllArray('abcabc', [['bca', 'b'], ['abc', 'ab']]));
        checkEqual('abbc', replaceAllArray('abcabc', [['bca', 'b']]));
        checkEqual('ecec', replaceAllArray('abcabc', [['ab', 'e']]));
        checkEqual('ecec', replaceAllArray('abcabc', [['ab', 'e'], ['abc', 'd']]));
        checkEqual('dd', replaceAllArray('abcabc', [['abc', 'd'], ['ab', 'e']]));
        checkEqual('abcabcabcabc', replaceAllArray('abc\r\n abc\r abc \n a b c\r  \n', [[' ', ''], ['\n', ''], ['\r', '']])); // Object Named Parameter

        checkEqual('abcabc', replaceAllArray({
          str: 'abab',
          replaceArray: [['ab', 'abc']]
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAllArray('1212', [['12', '123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', 'a');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', 123);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', ['12', '123']);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray(1212, [['12', '123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', [['123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', [[12, '123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', [['12', 123]]);
        }));
      });
    };

    var test_indexOf_standard = function test_indexOf_standard() {
      it('test_indexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.indexOf('a'));
        checkEqual(0, 'a'.indexOf('')); // strange

        checkEqual(-1, ''.indexOf('a'));
        checkEqual(0, ''.indexOf('')); // strange

        checkEqual(0, 'abc'.indexOf('a'));
        checkEqual(1, 'abc'.indexOf('b'));
        checkEqual(2, 'abc'.indexOf('c'));
        checkEqual(-1, 'abc'.indexOf('d'));
        checkEqual(0, 'abc'.indexOf('')); // strange

        checkEqual(0, 'abcabc'.indexOf('a'));
        checkEqual(1, 'abcabc'.indexOf('b'));
        checkEqual(2, 'abcabc'.indexOf('c'));
        checkEqual(-1, 'abcabc'.indexOf('d'));
        checkEqual(0, 'abcabc'.indexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.indexOf('a', -1)); // ?

        checkEqual(0, 'abcabc'.indexOf('a', 0));
        checkEqual(3, 'abcabc'.indexOf('a', 1));
        checkEqual(3, 'abcabc'.indexOf('a', 2));
        checkEqual(3, 'abcabc'.indexOf('a', 3));
        checkEqual(-1, 'abcabc'.indexOf('a', 4));
        checkEqual(-1, 'abcabc'.indexOf('a', 5));
        checkEqual(-1, 'abcabc'.indexOf('a', 6)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', -1)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', 0));
        checkEqual(1, 'abcabc'.indexOf('b', 1));
        checkEqual(4, 'abcabc'.indexOf('b', 2));
        checkEqual(4, 'abcabc'.indexOf('b', 3));
        checkEqual(4, 'abcabc'.indexOf('b', 4));
        checkEqual(-1, 'abcabc'.indexOf('b', 5));
        checkEqual(-1, 'abcabc'.indexOf('b', 6)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', -1)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', 0));
        checkEqual(2, 'abcabc'.indexOf('c', 1));
        checkEqual(2, 'abcabc'.indexOf('c', 2));
        checkEqual(5, 'abcabc'.indexOf('c', 3));
        checkEqual(5, 'abcabc'.indexOf('c', 4));
        checkEqual(5, 'abcabc'.indexOf('c', 5));
        checkEqual(-1, 'abcabc'.indexOf('c', 6)); // ?
      });
    };

    var test_indexOfFirst = function test_indexOfFirst() {
      it('test_indexOfFirst', function () {
        checkEqual(0, indexOfFirst('a', 'a'));
        checkEqual(-1, indexOfFirst('a', '')); // not strange

        checkEqual(-1, indexOfFirst('', 'a'));
        checkEqual(-1, indexOfFirst('', '')); // not strange

        checkEqual(0, indexOfFirst('abc', 'a'));
        checkEqual(1, indexOfFirst('abc', 'b'));
        checkEqual(2, indexOfFirst('abc', 'c'));
        checkEqual(-1, indexOfFirst('abc', 'd'));
        checkEqual(-1, indexOfFirst('abc', '')); // not strange

        checkEqual(0, indexOfFirst('abcabc', 'a'));
        checkEqual(1, indexOfFirst('abcabc', 'b'));
        checkEqual(2, indexOfFirst('abcabc', 'c'));
        checkEqual(-1, indexOfFirst('abcabc', 'd'));
        checkEqual(-1, indexOfFirst('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfFirst('abcabc', 'a', 0));
        checkEqual(3, indexOfFirst('abcabc', 'a', 1));
        checkEqual(3, indexOfFirst('abcabc', 'a', 2));
        checkEqual(3, indexOfFirst('abcabc', 'a', 3));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', -1);
        }));
        checkEqual(1, indexOfFirst('abcabc', 'b', 0));
        checkEqual(1, indexOfFirst('abcabc', 'b', 1));
        checkEqual(4, indexOfFirst('abcabc', 'b', 2));
        checkEqual(4, indexOfFirst('abcabc', 'b', 3));
        checkEqual(4, indexOfFirst('abcabc', 'b', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', -1);
        }));
        checkEqual(2, indexOfFirst('abcabc', 'c', 0));
        checkEqual(2, indexOfFirst('abcabc', 'c', 1));
        checkEqual(2, indexOfFirst('abcabc', 'c', 2));
        checkEqual(5, indexOfFirst('abcabc', 'c', 3));
        checkEqual(5, indexOfFirst('abcabc', 'c', 4));
        checkEqual(5, indexOfFirst('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', 6);
        }));
      });
    };

    var test_lastIndexOf_standard = function test_lastIndexOf_standard() {
      it('test_lastIndexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.lastIndexOf('a'));
        checkEqual(1, 'a'.lastIndexOf('')); // strange

        checkEqual(-1, ''.lastIndexOf('a'));
        checkEqual(0, ''.lastIndexOf('')); // strange

        checkEqual(0, 'abc'.lastIndexOf('a'));
        checkEqual(1, 'abc'.lastIndexOf('b'));
        checkEqual(2, 'abc'.lastIndexOf('c'));
        checkEqual(-1, 'abc'.lastIndexOf('d'));
        checkEqual(3, 'abc'.lastIndexOf('')); // strange

        checkEqual(3, 'abcabc'.lastIndexOf('a'));
        checkEqual(4, 'abcabc'.lastIndexOf('b'));
        checkEqual(5, 'abcabc'.lastIndexOf('c'));
        checkEqual(-1, 'abcabc'.lastIndexOf('d'));
        checkEqual(6, 'abcabc'.lastIndexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.lastIndexOf('a', -1)); // ??

        checkEqual(0, 'abcabc'.lastIndexOf('a', 0));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 1));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 2));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 3));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 4));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 5));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', 0));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 1));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 2));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 3));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 4));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 5));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', 0));
        checkEqual(-1, 'abcabc'.lastIndexOf('c', 1));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 2));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 3));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 4));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 5));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 6)); // ?
      });
    };

    var test_indexOfLast = function test_indexOfLast() {
      it('test_indexOfLast', function () {
        checkEqual(0, indexOfLast('a', 'a'));
        checkEqual(-1, indexOfLast('a', '')); // not strange

        checkEqual(-1, indexOfLast('', 'a'));
        checkEqual(-1, indexOfLast('', '')); // not strange

        checkEqual(0, indexOfLast('abc', 'a'));
        checkEqual(1, indexOfLast('abc', 'b'));
        checkEqual(2, indexOfLast('abc', 'c'));
        checkEqual(-1, indexOfLast('abc', 'd'));
        checkEqual(-1, indexOfLast('abc', '')); // not strange

        checkEqual(3, indexOfLast('abcabc', 'a'));
        checkEqual(4, indexOfLast('abcabc', 'b'));
        checkEqual(5, indexOfLast('abcabc', 'c'));
        checkEqual(-1, indexOfLast('abcabc', 'd'));
        checkEqual(-1, indexOfLast('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfLast('abcabc', 'a', 0));
        checkEqual(0, indexOfLast('abcabc', 'a', 1));
        checkEqual(0, indexOfLast('abcabc', 'a', 2));
        checkEqual(3, indexOfLast('abcabc', 'a', 3));
        checkEqual(3, indexOfLast('abcabc', 'a', 4));
        checkEqual(3, indexOfLast('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'b', 0));
        checkEqual(1, indexOfLast('abcabc', 'b', 1));
        checkEqual(1, indexOfLast('abcabc', 'b', 2));
        checkEqual(1, indexOfLast('abcabc', 'b', 3));
        checkEqual(4, indexOfLast('abcabc', 'b', 4));
        checkEqual(4, indexOfLast('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'c', 0));
        checkEqual(-1, indexOfLast('abcabc', 'c', 1));
        checkEqual(2, indexOfLast('abcabc', 'c', 2));
        checkEqual(2, indexOfLast('abcabc', 'c', 3));
        checkEqual(2, indexOfLast('abcabc', 'c', 4));
        checkEqual(5, indexOfLast('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', 6);
        }));
      });
    };

    var test_indexOfAnyFirst = function test_indexOfAnyFirst() {
      it('test_indexOfAnyFirst', function () {
        // element 1
        checkEqual(0, indexOfAnyFirst('a', ['a']).index);
        checkEqual(-1, indexOfAnyFirst('a', ['']).index); // ]not strange

        checkEqual(-1, indexOfAnyFirst('', ['a']).index);
        checkEqual(-1, indexOfAnyFirst('', ['']).index); // [not strange

        checkEqual(0, indexOfAnyFirst('abc', ['a']).index);
        checkEqual(1, indexOfAnyFirst('abc', ['b']).index);
        checkEqual(2, indexOfAnyFirst('abc', ['c']).index);
        checkEqual(-1, indexOfAnyFirst('abc', ['d']).index);
        checkEqual(-1, indexOfAnyFirst('abc', ['']).index); // ]not strange

        checkEqual(0, indexOfAnyFirst('abcabc', ['a']).index);
        checkEqual(1, indexOfAnyFirst('abcabc', ['b']).index);
        checkEqual(2, indexOfAnyFirst('abcabc', ['c']).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['d']).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['']).index); // ]not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['a'], -1);
        }));
        checkEqual(0, indexOfAnyFirst('abcabc', ['a'], 0).index);
        checkEqual(3, indexOfAnyFirst('abcabc', ['a'], 1).index);
        checkEqual(3, indexOfAnyFirst('abcabc', ['a'], 2).index);
        checkEqual(3, indexOfAnyFirst('abcabc', ['a'], 3).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['a'], 4).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['a'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['a'], 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['b'], -1);
        }));
        checkEqual(1, indexOfAnyFirst('abcabc', ['b'], 0).index);
        checkEqual(1, indexOfAnyFirst('abcabc', ['b'], 1).index);
        checkEqual(4, indexOfAnyFirst('abcabc', ['b'], 2).index);
        checkEqual(4, indexOfAnyFirst('abcabc', ['b'], 3).index);
        checkEqual(4, indexOfAnyFirst('abcabc', ['b'], 4).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['b'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['b'], 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['c'], -1);
        }));
        checkEqual(2, indexOfAnyFirst('abcabc', ['c'], 0).index);
        checkEqual(2, indexOfAnyFirst('abcabc', ['c'], 1).index);
        checkEqual(2, indexOfAnyFirst('abcabc', ['c'], 2).index);
        checkEqual(5, indexOfAnyFirst('abcabc', ['c'], 3).index);
        checkEqual(5, indexOfAnyFirst('abcabc', ['c'], 4).index);
        checkEqual(5, indexOfAnyFirst('abcabc', ['c'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['c'], 6);
        })); // element many

        var _checkEqual = function _checkEqual(result, functionResult) {
          checkEqual({
            index: result[0],
            searchIndex: result[1]
          }, functionResult);
        };

        _checkEqual([-1, -1], indexOfAnyFirst('abc', ['d', 'e']));

        _checkEqual([0, 0], indexOfAnyFirst('abc', ['a', 'c']));

        _checkEqual([0, 1], indexOfAnyFirst('abc', ['c', 'a']));

        _checkEqual([1, 0], indexOfAnyFirst('abc', ['b', 'c']));

        _checkEqual([1, 1], indexOfAnyFirst('abc', ['c', 'b']));

        _checkEqual([2, 1], indexOfAnyFirst('abc', ['', 'c']));

        _checkEqual([2, 0], indexOfAnyFirst('abc', ['c', '']));

        _checkEqual([-1, -1], indexOfAnyFirst('abc', ['', '']));

        _checkEqual([-1, -1], indexOfAnyFirst('abc', ['']));

        _checkEqual([0, 0], indexOfAnyFirst('abcabc', ['a', 'c'], 0));

        _checkEqual([2, 1], indexOfAnyFirst('abcabc', ['a', 'c'], 1));

        _checkEqual([2, 1], indexOfAnyFirst('abcabc', ['a', 'c'], 2));

        _checkEqual([3, 0], indexOfAnyFirst('abcabc', ['a', 'c'], 3));

        _checkEqual([1, 0], indexOfAnyFirst('abcabc', ['b'], 1));

        _checkEqual([4, 0], indexOfAnyFirst('abcabc', ['b'], 2)); // exception


        checkEqual(true, isThrown(function () {
          indexOfAnyFirst('abc', 'ab');
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyFirst('abc', []);
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyFirst('abc', [123]);
        }));
      });
    };

    var test_indexOfAnyLast = function test_indexOfAnyLast() {
      it('test_indexOfAnyLast', function () {
        // element 1
        checkEqual(0, indexOfAnyLast('a', ['a']).index);
        checkEqual(-1, indexOfAnyLast('a', ['']).index); // not strange

        checkEqual(-1, indexOfAnyLast('', ['a']).index);
        checkEqual(-1, indexOfAnyLast('', ['']).index); // not strange

        checkEqual(0, indexOfAnyLast('abc', ['a']).index);
        checkEqual(1, indexOfAnyLast('abc', ['b']).index);
        checkEqual(2, indexOfAnyLast('abc', ['c']).index);
        checkEqual(-1, indexOfAnyLast('abc', ['d']).index);
        checkEqual(-1, indexOfAnyLast('abc', ['']).index); // not strange

        checkEqual(3, indexOfAnyLast('abcabc', ['a']).index);
        checkEqual(4, indexOfAnyLast('abcabc', ['b']).index);
        checkEqual(5, indexOfAnyLast('abcabc', ['c']).index);
        checkEqual(-1, indexOfAnyLast('abcabc', ['d']).index);
        checkEqual(-1, indexOfAnyLast('abcabc', ['']).index); // not strange

        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['a'], -1).index;
        }));
        checkEqual(0, indexOfAnyLast('abcabc', ['a'], 0).index);
        checkEqual(0, indexOfAnyLast('abcabc', ['a'], 1).index);
        checkEqual(0, indexOfAnyLast('abcabc', ['a'], 2).index);
        checkEqual(3, indexOfAnyLast('abcabc', ['a'], 3).index);
        checkEqual(3, indexOfAnyLast('abcabc', ['a'], 4).index);
        checkEqual(3, indexOfAnyLast('abcabc', ['a'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['a'], 6).index;
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['b'], -1).index;
        }));
        checkEqual(-1, indexOfAnyLast('abcabc', ['b'], 0).index);
        checkEqual(1, indexOfAnyLast('abcabc', ['b'], 1).index);
        checkEqual(1, indexOfAnyLast('abcabc', ['b'], 2).index);
        checkEqual(1, indexOfAnyLast('abcabc', ['b'], 3).index);
        checkEqual(4, indexOfAnyLast('abcabc', ['b'], 4).index);
        checkEqual(4, indexOfAnyLast('abcabc', ['b'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['b'], 6).index;
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['c'], -1).index;
        }));
        checkEqual(-1, indexOfAnyLast('abcabc', ['c'], 0).index);
        checkEqual(-1, indexOfAnyLast('abcabc', ['c'], 1).index);
        checkEqual(2, indexOfAnyLast('abcabc', ['c'], 2).index);
        checkEqual(2, indexOfAnyLast('abcabc', ['c'], 3).index);
        checkEqual(2, indexOfAnyLast('abcabc', ['c'], 4).index);
        checkEqual(5, indexOfAnyLast('abcabc', ['c'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['c'], 6).index;
        })); // element many

        testCounter();

        var _checkEqual = function _checkEqual(result, functionResult) {
          checkEqual({
            index: result[0],
            searchIndex: result[1]
          }, functionResult);
        };

        _checkEqual([-1, -1], indexOfAnyLast('abc', ['d', 'e']));

        _checkEqual([2, 1], indexOfAnyLast('abc', ['a', 'c']));

        _checkEqual([2, 0], indexOfAnyLast('abc', ['c', 'a']));

        _checkEqual([2, 1], indexOfAnyLast('abc', ['b', 'c']));

        _checkEqual([2, 0], indexOfAnyLast('abc', ['c', 'b']));

        _checkEqual([2, 1], indexOfAnyLast('abc', ['', 'c']));

        _checkEqual([2, 0], indexOfAnyLast('abc', ['c', '']));

        _checkEqual([-1, -1], indexOfAnyLast('abc', ['', '']));

        _checkEqual([-1, -1], indexOfAnyLast('abc', ['']));

        _checkEqual([5, 1], indexOfAnyLast('abcabc', ['a', 'c']));

        _checkEqual([5, 1], indexOfAnyLast('abcabc', ['a', 'c'], 5));

        _checkEqual([3, 0], indexOfAnyLast('abcabc', ['a', 'c'], 4));

        _checkEqual([3, 0], indexOfAnyLast('abcabc', ['a', 'c'], 3));

        _checkEqual([2, 1], indexOfAnyLast('abcabc', ['a', 'c'], 2));

        _checkEqual([0, 0], indexOfAnyLast('abcabc', ['a', 'c'], 1));

        _checkEqual([0, 0], indexOfAnyLast('abcabc', ['a', 'c'], 0));

        _checkEqual([4, 0], indexOfAnyLast('abcabc', ['b'], 5));

        _checkEqual([4, 0], indexOfAnyLast('abcabc', ['b'], 4));

        _checkEqual([1, 0], indexOfAnyLast('abcabc', ['b'], 3)); // exception


        checkEqual(true, isThrown(function () {
          indexOfAnyLast('abc', 'ab');
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyLast('abc', []);
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyLast('abc', [123]);
        }));
      });
    };

    var test_isFirst = function test_isFirst() {
      it('test_isFirst', function () {
        checkEqual(true, isFirst('123', '1'));
        checkEqual(true, isFirst('123', '12'));
        checkEqual(false, isFirst('123', '13'));
        checkEqual(false, isFirst('123', '2'));
        checkEqual(true, isFirst('ABC', 'A'));
        checkEqual(true, isFirst('ABC', 'AB'));
        checkEqual(false, isFirst('ABC', 'AC'));
        checkEqual(false, isFirst('ABC', 'a'));
        checkEqual(false, isFirst('ABC', 'B'));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast('123', '3'));
        checkEqual(true, isLast('123', '23'));
        checkEqual(false, isLast('123', '13'));
        checkEqual(false, isLast('123', '2'));
        checkEqual(true, isLast('ABC', 'C'));
        checkEqual(true, isLast('ABC', 'BC'));
        checkEqual(false, isLast('ABC', 'AC'));
        checkEqual(false, isLast('ABC', 'c'));
        checkEqual(false, isLast('ABC', 'B'));
        checkEqual(false, isLast('1', '23'));
      });
    };

    var test_isBothEnds = function test_isBothEnds() {
      it('test_isBothEnds', function () {
        checkEqual(true, isBothEnds('121', '1'));
        checkEqual(false, isBothEnds('121', '2'));
        checkEqual(true, isBothEnds('121', '12', '21'));
        checkEqual(true, isBothEnds('ABA', 'A'));
        checkEqual(false, isBothEnds('ABA', 'a'));
        checkEqual(false, isBothEnds('ABA', 'B'));
        checkEqual(true, isBothEnds('ABAB', 'AB'));
        checkEqual(false, isBothEnds('ABAD', 'A'));
        checkEqual(true, isBothEnds('ABAD', 'A', 'D'));
        checkEqual(true, isBothEnds('{AB}', '{', '}'));
        checkEqual(true, isBothEnds('{{}}', '{', '}'));
        checkEqual(false, isBothEnds('A{B}', '{', '}'));
        checkEqual(false, isBothEnds('{AB}', '}', '}'));
        checkEqual(false, isBothEnds('{AB}', '{', '{'));
        checkEqual(false, isBothEnds('1', '1'));
        checkEqual(true, isBothEnds('11', '1')); // Object Named Parameter

        checkEqual(true, isBothEnds({
          str: 'ABA',
          search: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABA',
          search: 'a'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABA',
          searchFirst: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A',
          searchLast: 'D'
        }));
      });
    };

    var test_includeFirst = function test_includeFirst() {
      it('test_includeFirst', function () {
        checkEqual('123', includeFirst('123', '1'));
        checkEqual('123', includeFirst('123', '12'));
        checkEqual('13123', includeFirst('123', '13'));
        checkEqual('2123', includeFirst('123', '2'));
        checkEqual('ABC', includeFirst('ABC', 'A'));
        checkEqual('ABC', includeFirst('ABC', 'AB'));
        checkEqual('ACABC', includeFirst('ABC', 'AC'));
        checkEqual('aABC', includeFirst('ABC', 'a'));
        checkEqual('BABC', includeFirst('ABC', 'B'));
      });
    };

    var test_includeLast = function test_includeLast() {
      it('test_includeLast', function () {
        checkEqual('123', includeLast('123', '3'));
        checkEqual('123', includeLast('123', '23'));
        checkEqual('12313', includeLast('123', '13'));
        checkEqual('1232', includeLast('123', '2'));
        checkEqual('ABC', includeLast('ABC', 'C'));
        checkEqual('ABC', includeLast('ABC', 'BC'));
        checkEqual('ABCAC', includeLast('ABC', 'AC'));
        checkEqual('ABCc', includeLast('ABC', 'c'));
        checkEqual('ABCB', includeLast('ABC', 'B'));
      });
    };

    var test_includeBothEnds = function test_includeBothEnds() {
      it('test_includeBothEnds', function () {
        checkEqual('121', includeBothEnds('121', '1'));
        checkEqual('21212', includeBothEnds('121', '2'));
        checkEqual('121', includeBothEnds('121', '12', '21'));
        checkEqual('ABA', includeBothEnds('ABA', 'A'));
        checkEqual('aABAa', includeBothEnds('ABA', 'a'));
        checkEqual('BABAB', includeBothEnds('ABA', 'B'));
        checkEqual('ABAB', includeBothEnds('ABAB', 'AB'));
        checkEqual('AABADA', includeBothEnds('ABAD', 'A'));
        checkEqual('ABAD', includeBothEnds('ABAD', 'A', 'D'));
        checkEqual('{AB}', includeBothEnds('{AB}', '{', '}'));
        checkEqual('{{}}', includeBothEnds('{{}}', '{', '}'));
        checkEqual('{A{B}}', includeBothEnds('A{B}', '{', '}'));
        checkEqual('}{AB}}', includeBothEnds('{AB}', '}', '}'));
        checkEqual('{{AB}{', includeBothEnds('{AB}', '{', '{'));
        checkEqual('111', includeBothEnds('1', '1'));
        checkEqual('11', includeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('aABAa', includeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('AABADA', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_excludeFirst = function test_excludeFirst() {
      it('test_excludeFirst', function () {
        checkEqual('23', excludeFirst('123', '1'));
        checkEqual('3', excludeFirst('123', '12'));
        checkEqual('123', excludeFirst('123', '13'));
        checkEqual('123', excludeFirst('123', '2'));
        checkEqual('BC', excludeFirst('ABC', 'A'));
        checkEqual('C', excludeFirst('ABC', 'AB'));
        checkEqual('ABC', excludeFirst('ABC', 'AC'));
        checkEqual('ABC', excludeFirst('ABC', 'a'));
        checkEqual('ABC', excludeFirst('ABC', 'B'));
      });
    };

    var test_excludeLast = function test_excludeLast() {
      it('test_excludeLast', function () {
        checkEqual('12', excludeLast('123', '3'));
        checkEqual('1', excludeLast('123', '23'));
        checkEqual('123', excludeLast('123', '13'));
        checkEqual('123', excludeLast('123', '2'));
        checkEqual('AB', excludeLast('ABC', 'C'));
        checkEqual('A', excludeLast('ABC', 'BC'));
        checkEqual('ABC', excludeLast('ABC', 'AC'));
        checkEqual('ABC', excludeLast('ABC', 'c'));
        checkEqual('ABC', excludeLast('ABC', 'B'));
      });
    };

    var test_excludeBothEnds = function test_excludeBothEnds() {
      it('test_excludeBothEnds', function () {
        checkEqual('2', excludeBothEnds('121', '1'));
        checkEqual('121', excludeBothEnds('121', '2'));
        checkEqual('', excludeBothEnds('121', '12', '21'));
        checkEqual('B', excludeBothEnds('ABA', 'A'));
        checkEqual('ABA', excludeBothEnds('ABA', 'a'));
        checkEqual('ABA', excludeBothEnds('ABA', 'B'));
        checkEqual('', excludeBothEnds('ABAB', 'AB'));
        checkEqual('ABAD', excludeBothEnds('ABAD', 'A'));
        checkEqual('BA', excludeBothEnds('ABAD', 'A', 'D'));
        testCounter();
        checkEqual('AB', excludeBothEnds('{AB}', '{', '}'));
        checkEqual('{}', excludeBothEnds('{{}}', '{', '}'));
        checkEqual('A{B}', excludeBothEnds('A{B}', '{', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '}', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '{', '{'));
        checkEqual('1', excludeBothEnds('1', '1'));
        checkEqual('', excludeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('ABA', excludeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('BA', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_trimFirst = function test_trimFirst() {
      it('test_trimFirst', function () {
        checkEqual('23', trimFirst('123', ['1']));
        checkEqual('3', trimFirst('123', ['12']));
        checkEqual('123', trimFirst('123', ['13']));
        checkEqual('123', trimFirst('123', ['2']));
        checkEqual('BC', trimFirst('ABC', ['A']));
        checkEqual('C', trimFirst('ABC', ['AB']));
        checkEqual('ABC', trimFirst('ABC', ['AC']));
        checkEqual('ABC', trimFirst('ABC', ['a']));
        checkEqual('ABC', trimFirst('ABC', ['B']));
        checkEqual('C', trimFirst('ABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABC', ['B', 'A']));
        checkEqual('C', trimFirst('AABBC', ['A', 'B']));
        checkEqual('C', trimFirst('ABABC', ['A', 'B']));
        checkEqual('C', trimFirst('BABAC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBAC', ['A', 'B']));
        checkEqual('C', trimFirst('BAABC', ['A', 'B']));
        checkEqual('C', trimFirst('AAABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBBC', ['A', 'B']));
        checkEqual('CABC', trimFirst('CABC', ['A', 'B']));
        checkEqual('ABC', trimFirst('ABC', []));
        checkEqual('', trimFirst('ABC', ['ABC']));
        checkEqual('', trimFirst('ABC', ['A', 'B', 'C']));
        checkEqual('', trimFirst('', []));
        checkEqual('', trimFirst('', ['ABC']));
        checkEqual('', trimFirst('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimFirst('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimFirst('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimLast = function test_trimLast() {
      it('test_trimLast', function () {
        checkEqual('12', trimLast('123', ['3']));
        checkEqual('1', trimLast('123', ['23']));
        checkEqual('123', trimLast('123', ['13']));
        checkEqual('123', trimLast('123', ['2']));
        checkEqual('AB', trimLast('ABC', ['C']));
        checkEqual('A', trimLast('ABC', ['BC']));
        checkEqual('ABC', trimLast('ABC', ['AC']));
        checkEqual('ABC', trimLast('ABC', ['c']));
        checkEqual('ABC', trimLast('ABC', ['B']));
        checkEqual('C', trimLast('CAB', ['A', 'B']));
        checkEqual('C', trimLast('CAB', ['B', 'A']));
        checkEqual('C', trimLast('CAABB', ['A', 'B']));
        checkEqual('C', trimLast('CABAB', ['A', 'B']));
        checkEqual('C', trimLast('CBABA', ['A', 'B']));
        checkEqual('C', trimLast('CABBA', ['A', 'B']));
        checkEqual('C', trimLast('CBAAB', ['A', 'B']));
        checkEqual('C', trimLast('CAAAB', ['A', 'B']));
        checkEqual('C', trimLast('CABBB', ['A', 'B']));
        checkEqual('CABC', trimLast('CABC', ['A', 'B']));
        checkEqual('ABC', trimLast('ABC', []));
        checkEqual('', trimLast('ABC', ['ABC']));
        checkEqual('', trimLast('ABC', ['A', 'B', 'C']));
        checkEqual('', trimLast('', []));
        checkEqual('', trimLast('', ['ABC']));
        checkEqual('', trimLast('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimLast('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimLast('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimBothEnds = function test_trimBothEnds() {
      it('test_trimBothEnds', function () {
        checkEqual('2', trimBothEnds('121', ['1']));
        checkEqual('121', trimBothEnds('121', ['2']));
        checkEqual('1', trimBothEnds('121', ['12'], ['21']));
        checkEqual('3', trimBothEnds('123', ['12'], ['23']));
        checkEqual('B', trimBothEnds('ABA', ['A']));
        checkEqual('ABA', trimBothEnds('ABA', ['a']));
        checkEqual('ABA', trimBothEnds('ABA', ['B']));
        checkEqual('', trimBothEnds('ABAB', ['AB']));
        checkEqual('BAD', trimBothEnds('ABAD', ['A']));
        checkEqual('BA', trimBothEnds('ABAD', ['A'], ['D']));
        checkEqual('AB', trimBothEnds('{AB}', ['{'], ['}']));
        checkEqual('', trimBothEnds('{{}}', ['{'], ['}']));
        checkEqual('A{B', trimBothEnds('A{B}', ['{'], ['}']));
        checkEqual('{AB', trimBothEnds('{AB}', ['}'], ['}']));
        checkEqual('AB}', trimBothEnds('{AB}', ['{'], ['{']));
        checkEqual('232', trimBothEnds('12321', ['1']));
        checkEqual('12321', trimBothEnds('12321', ['2']));
        checkEqual('3', trimBothEnds('12321', ['2', '1']));
        checkEqual('232', trimBothEnds('12321', ['', '1']));
        checkEqual('32', trimBothEnds('12321', ['2', '1'], ['1']));
        checkEqual('321', trimBothEnds('12321', ['2', '1'], ['2']));
        checkEqual('', trimBothEnds('1', ['1']));
        checkEqual('', trimBothEnds('11', ['1']));
        checkEqual('abc', trimBothEnds('  abc\n  \n', [' ', '\n']));
        checkEqual('abc', trimBothEnds('  abc\n  \n', ['\n', ' '])); // Object Named Parameter

        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueArray: ['A']
        }));
        checkEqual('ABA', trimBothEnds({
          str: 'ABA',
          valueArray: ['a']
        }));
        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A'],
          valueLastArray: []
        }));
        checkEqual('AB', trimBothEnds({
          str: 'ABA',
          valueFirstArray: [],
          valueLastArray: ['A']
        }));
        checkEqual('BAD', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_substring_stardard = function test_substring_stardard() {
      it('test_substring_stardard', function () {
        checkEqual('01234', '01234'.substring(-2));
        checkEqual('01234', '01234'.substring(-1));
        checkEqual('01234', '01234'.substring(0));
        checkEqual('1234', '01234'.substring(1));
        checkEqual('234', '01234'.substring(2));
        checkEqual('34', '01234'.substring(3));
        checkEqual('4', '01234'.substring(4));
        checkEqual('', '01234'.substring(5));
        checkEqual('', '01234'.substring(6));
        checkEqual('', '01234'.substring(-2, 0));
        checkEqual('', '01234'.substring(-1, 0));
        checkEqual('', '01234'.substring(0, 0));
        checkEqual('0', '01234'.substring(1, 0));
        checkEqual('01', '01234'.substring(2, 0));
        checkEqual('012', '01234'.substring(3, 0));
        checkEqual('0123', '01234'.substring(4, 0));
        checkEqual('01234', '01234'.substring(5, 0));
        checkEqual('01234', '01234'.substring(6, 0));
        checkEqual('012', '01234'.substring(-2, 3));
        checkEqual('012', '01234'.substring(-1, 3));
        checkEqual('012', '01234'.substring(0, 3));
        checkEqual('12', '01234'.substring(1, 3));
        checkEqual('2', '01234'.substring(2, 3));
        checkEqual('', '01234'.substring(3, 3));
        checkEqual('3', '01234'.substring(4, 3));
        checkEqual('34', '01234'.substring(5, 3));
        checkEqual('34', '01234'.substring(6, 3));
        checkEqual('01234', '01234'.substring(-2, 5));
        checkEqual('01234', '01234'.substring(-1, 5));
        checkEqual('01234', '01234'.substring(0, 5));
        checkEqual('1234', '01234'.substring(1, 5));
        checkEqual('234', '01234'.substring(2, 5));
        checkEqual('34', '01234'.substring(3, 5));
        checkEqual('4', '01234'.substring(4, 5));
        checkEqual('', '01234'.substring(5, 5));
        checkEqual('', '01234'.substring(6, 5));
        checkEqual('01234', '01234'.substring(-2, 6));
        checkEqual('01234', '01234'.substring(-1, 6));
        checkEqual('01234', '01234'.substring(0, 6));
        checkEqual('1234', '01234'.substring(1, 6));
        checkEqual('234', '01234'.substring(2, 6));
        checkEqual('34', '01234'.substring(3, 6));
        checkEqual('4', '01234'.substring(4, 6));
        checkEqual('', '01234'.substring(5, 6));
        checkEqual('', '01234'.substring(6, 6));
      });
    };

    var test_substr_stardard = function test_substr_stardard() {
      it('test_substr_stardard', function () {
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2)); // ?

          checkEqual('4', '01234'.substr(-1)); // ?
        } else {
          checkEqual('01234', '01234'.substr(-2)); // ?

          checkEqual('01234', '01234'.substr(-1)); // ?
        }

        checkEqual('01234', '01234'.substr(0));
        checkEqual('1234', '01234'.substr(1));
        checkEqual('234', '01234'.substr(2));
        checkEqual('34', '01234'.substr(3));
        checkEqual('4', '01234'.substr(4));
        checkEqual('', '01234'.substr(5)); // ?

        checkEqual('', '01234'.substr(6)); // ?

        checkEqual('', '01234'.substr(-2, 0));
        checkEqual('', '01234'.substr(-1, 0));
        checkEqual('', '01234'.substr(0, 0));
        checkEqual('', '01234'.substr(1, 0));
        checkEqual('', '01234'.substr(2, 0));
        checkEqual('', '01234'.substr(3, 0));
        checkEqual('', '01234'.substr(4, 0));
        checkEqual('', '01234'.substr(5, 0));
        checkEqual('', '01234'.substr(6, 0));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 3)); // ?

          checkEqual('4', '01234'.substr(-1, 3)); // ?
        } else {
          checkEqual('012', '01234'.substr(-2, 3)); // ?

          checkEqual('012', '01234'.substr(-1, 3)); // ?
        }

        checkEqual('012', '01234'.substr(0, 3));
        checkEqual('123', '01234'.substr(1, 3));
        checkEqual('234', '01234'.substr(2, 3));
        checkEqual('34', '01234'.substr(3, 3));
        checkEqual('4', '01234'.substr(4, 3));
        checkEqual('', '01234'.substr(5, 3)); // ?

        checkEqual('', '01234'.substr(6, 3)); // ?

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 5));
          checkEqual('4', '01234'.substr(-1, 5));
        } else {
          checkEqual('01234', '01234'.substr(-2, 5));
          checkEqual('01234', '01234'.substr(-1, 5));
        }

        checkEqual('01234', '01234'.substr(0, 5));
        checkEqual('1234', '01234'.substr(1, 5));
        checkEqual('234', '01234'.substr(2, 5));
        checkEqual('34', '01234'.substr(3, 5));
        checkEqual('4', '01234'.substr(4, 5));
        checkEqual('', '01234'.substr(5, 5));
        checkEqual('', '01234'.substr(6, 5));
        testCounter();

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 6));
          checkEqual('4', '01234'.substr(-1, 6));
        } else {
          checkEqual('01234', '01234'.substr(-2, 6));
          checkEqual('01234', '01234'.substr(-1, 6));
        }

        checkEqual('01234', '01234'.substr(0, 6));
        checkEqual('1234', '01234'.substr(1, 6));
        checkEqual('234', '01234'.substr(2, 6));
        checkEqual('34', '01234'.substr(3, 6));
        checkEqual('4', '01234'.substr(4, 6));
        checkEqual('', '01234'.substr(5, 6));
        checkEqual('', '01234'.substr(6, 6));
      });
    };

    var test_subIndex = function test_subIndex() {
      it('test_subIndex', function () {
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1);
        }));
        checkEqual('0', subIndex('01234', 0));
        checkEqual('1', subIndex('01234', 1));
        checkEqual('2', subIndex('01234', 2));
        checkEqual('3', subIndex('01234', 3));
        checkEqual('4', subIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 0);
        }));
        checkEqual('0', subIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 3);
        }));
        checkEqual('0123', subIndex('01234', 0, 3));
        checkEqual('123', subIndex('01234', 1, 3));
        checkEqual('23', subIndex('01234', 2, 3));
        checkEqual('3', subIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 6);
        }));
      });
    };

    var test_subLength = function test_subLength() {
      it('test_subLength', function () {
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1);
        }));
        checkEqual('01234', subLength('01234', 0));
        checkEqual('1234', subLength('01234', 1));
        checkEqual('234', subLength('01234', 2));
        checkEqual('34', subLength('01234', 3));
        checkEqual('4', subLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 0);
        }));
        checkEqual('', subLength('01234', 0, 0));
        checkEqual('', subLength('01234', 1, 0));
        checkEqual('', subLength('01234', 2, 0));
        checkEqual('', subLength('01234', 3, 0));
        checkEqual('', subLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 3);
        }));
        checkEqual('012', subLength('01234', 0, 3));
        checkEqual('123', subLength('01234', 1, 3));
        checkEqual('234', subLength('01234', 2, 3));
        checkEqual('34', subLength('01234', 3, 3));
        checkEqual('4', subLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 5);
        }));
        checkEqual('01234', subLength('01234', 0, 5));
        checkEqual('1234', subLength('01234', 1, 5));
        checkEqual('234', subLength('01234', 2, 5));
        checkEqual('34', subLength('01234', 3, 5));
        checkEqual('4', subLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 6);
        }));
        checkEqual('01234', subLength('01234', 0, 6));
        checkEqual('1234', subLength('01234', 1, 6));
        checkEqual('234', subLength('01234', 2, 6));
        checkEqual('34', subLength('01234', 3, 6));
        checkEqual('4', subLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 6);
        }));
      });
    };

    var test_subFirst = function test_subFirst() {
      it('test_subFirst', function () {
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -1);
        }));
        checkEqual('', subFirst('01234', 0));
        checkEqual('0', subFirst('01234', 1));
        checkEqual('01', subFirst('01234', 2));
        checkEqual('012', subFirst('01234', 3));
        checkEqual('0123', subFirst('01234', 4));
        checkEqual('01234', subFirst('01234', 5));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', 6);
        }));
      });
    };

    var test_subLast = function test_subLast() {
      it('test_subLast', function () {
        checkEqual(true, isThrown(function () {
          return subLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLast('01234', -1);
        }));
        checkEqual('', subLast('01234', 0));
        checkEqual('4', subLast('01234', 1));
        checkEqual('34', subLast('01234', 2));
        checkEqual('234', subLast('01234', 3));
        checkEqual('1234', subLast('01234', 4));
        checkEqual('01234', subLast('01234', 5));
        checkEqual(true, isThrown(function () {
          return subLast('01234', 6);
        }));
      });
    };

    var test_deleteIndex = function test_deleteIndex() {
      it('test_deleteIndex', function () {
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1);
        }));
        checkEqual('1234', deleteIndex('01234', 0));
        checkEqual('0234', deleteIndex('01234', 1));
        checkEqual('0134', deleteIndex('01234', 2));
        checkEqual('0124', deleteIndex('01234', 3));
        checkEqual('0123', deleteIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 0);
        }));
        checkEqual('1234', deleteIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 0);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 3);
        }));
        checkEqual('4', deleteIndex('01234', 0, 3));
        checkEqual('04', deleteIndex('01234', 1, 3));
        checkEqual('014', deleteIndex('01234', 2, 3));
        checkEqual('0124', deleteIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 6);
        }));
      });
    };

    var test_deleteLength = function test_deleteLength() {
      it('test_deleteLength', function () {
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1);
        }));
        checkEqual('', deleteLength('01234', 0));
        checkEqual('0', deleteLength('01234', 1));
        checkEqual('01', deleteLength('01234', 2));
        checkEqual('012', deleteLength('01234', 3));
        checkEqual('0123', deleteLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 0);
        }));
        checkEqual('01234', deleteLength('01234', 0, 0));
        checkEqual('01234', deleteLength('01234', 1, 0));
        checkEqual('01234', deleteLength('01234', 2, 0));
        checkEqual('01234', deleteLength('01234', 3, 0));
        checkEqual('01234', deleteLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 3);
        }));
        checkEqual('34', deleteLength('01234', 0, 3));
        checkEqual('04', deleteLength('01234', 1, 3));
        checkEqual('01', deleteLength('01234', 2, 3));
        checkEqual('012', deleteLength('01234', 3, 3));
        checkEqual('0123', deleteLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 5);
        }));
        checkEqual('', deleteLength('01234', 0, 5));
        checkEqual('0', deleteLength('01234', 1, 5));
        checkEqual('01', deleteLength('01234', 2, 5));
        checkEqual('012', deleteLength('01234', 3, 5));
        checkEqual('0123', deleteLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 6);
        }));
        checkEqual('', deleteLength('01234', 0, 6));
        checkEqual('0', deleteLength('01234', 1, 6));
        checkEqual('01', deleteLength('01234', 2, 6));
        checkEqual('012', deleteLength('01234', 3, 6));
        checkEqual('0123', deleteLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 6);
        })); // Object Named Parameter

        checkEqual('03', deleteLength({
          str: '0123',
          index: 1,
          length: 2
        }));
        checkEqual('03', deleteLength('0123', {
          index: 1,
          length: 2
        }));
        checkEqual('03', deleteLength('0123', 1, {
          length: 2
        }));
        checkEqual('01', deleteLength({
          str: '0123',
          index: 2
        }));
        checkEqual('01', deleteLength('0123', {
          index: 2
        }));
      });
    };

    var test_deleteFirst = function test_deleteFirst() {
      it('test_deleteFirst', function () {
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -1);
        }));
        checkEqual('01234', deleteFirst('01234', 0));
        checkEqual('1234', deleteFirst('01234', 1));
        checkEqual('234', deleteFirst('01234', 2));
        checkEqual('34', deleteFirst('01234', 3));
        checkEqual('4', deleteFirst('01234', 4));
        checkEqual('', deleteFirst('01234', 5));
        checkEqual('1234', deleteFirst('01234'));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', 6);
        })); // Object Named Parameter

        checkEqual('123', deleteFirst({
          str: '0123',
          length: 1
        }));
        checkEqual('123', deleteFirst('0123', {
          length: 1
        }));
      });
    };

    var test_deleteLast = function test_deleteLast() {
      it('test_deleteLast', function () {
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -1);
        }));
        checkEqual('01234', deleteLast('01234', 0));
        checkEqual('0123', deleteLast('01234', 1));
        checkEqual('012', deleteLast('01234', 2));
        checkEqual('01', deleteLast('01234', 3));
        checkEqual('0', deleteLast('01234', 4));
        checkEqual('', deleteLast('01234', 5));
        checkEqual('0123', deleteLast('01234'));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', 6);
        })); // Object Named Parameter

        checkEqual('012', deleteLast({
          str: '0123',
          length: 1
        }));
        checkEqual('012', deleteLast('0123', {
          length: 1
        }));
      });
    };

    var test_insert = function test_insert() {
      it('test_insert', function () {
        checkEqual('A01234', insert('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', -1);
        }));
        checkEqual('A01234', insert('01234', 'A', 0));
        checkEqual('0A1234', insert('01234', 'A', 1));
        checkEqual('01A234', insert('01234', 'A', 2));
        checkEqual('012A34', insert('01234', 'A', 3));
        checkEqual('0123A4', insert('01234', 'A', 4));
        checkEqual('01234A', insert('01234', 'A', 5));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', 6);
        }));
      });
    };

    var test_add = function test_add() {
      it('test_add', function () {
        checkEqual('01234A', add('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', -2);
        }));
        checkEqual('A01234', add('01234', 'A', -1));
        checkEqual('0A1234', add('01234', 'A', 0));
        checkEqual('01A234', add('01234', 'A', 1));
        checkEqual('012A34', add('01234', 'A', 2));
        checkEqual('0123A4', add('01234', 'A', 3));
        checkEqual('01234A', add('01234', 'A', 4));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', 5);
        }));
      });
    };

    var test_subFirstDelimFirst = function test_subFirstDelimFirst() {
      it('test_subFirstDelimFirst', function () {
        checkEqual('123', subFirstDelimFirst('123,456', ','));
        checkEqual('123', subFirstDelimFirst('123,456,789', ','));
        checkEqual('123', subFirstDelimFirst('123ttt456', 'ttt'));
        checkEqual('123', subFirstDelimFirst('123ttt456', 'tt'));
        checkEqual('123', subFirstDelimFirst('123ttt456', 't'));
        checkEqual('', subFirstDelimFirst('123ttt456', ','));
        checkEqual('123', subFirstDelimFirst('123,,', ','));
        checkEqual('', subFirstDelimFirst(',,123', ','));
        checkEqual('', subFirstDelimFirst(',,123,,', ','));
        checkEqual('123', subFirstDelimFirst('123,,', ',,'));
        checkEqual('', subFirstDelimFirst(',,123', ',,'));
        checkEqual('', subFirstDelimFirst(',,123,,', ',,')); // object parameter

        checkEqual('123', subFirstDelimFirst({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('123', subFirstDelimFirst('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_subFirstDelimLast = function test_subFirstDelimLast() {
      it('test_subFirstDelimLast', function () {
        checkEqual('123', subFirstDelimLast('123,456', ','));
        checkEqual('123,456', subFirstDelimLast('123,456,789', ','));
        checkEqual('123', subFirstDelimLast('123ttt456', 'ttt'));
        checkEqual('123t', subFirstDelimLast('123ttt456', 'tt'));
        checkEqual('123tt', subFirstDelimLast('123ttt456', 't'));
        checkEqual('', subFirstDelimLast('123ttt456', ','));
        checkEqual('123,', subFirstDelimLast('123,,', ','));
        checkEqual(',', subFirstDelimLast(',,123', ','));
        checkEqual(',,123,', subFirstDelimLast(',,123,,', ','));
        checkEqual('123', subFirstDelimLast('123,,', ',,'));
        checkEqual('', subFirstDelimLast(',,123', ',,'));
        checkEqual(',,123', subFirstDelimLast(',,123,,', ',,')); // object parameter

        checkEqual('123', subFirstDelimLast({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('123', subFirstDelimLast('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_subLastDelimFirst = function test_subLastDelimFirst() {
      it('test_subLastDelimFirst', function () {
        checkEqual('456', subLastDelimFirst('123,456', ','));
        checkEqual('456,789', subLastDelimFirst('123,456,789', ','));
        checkEqual('456', subLastDelimFirst('123ttt456', 'ttt'));
        checkEqual('t456', subLastDelimFirst('123ttt456', 'tt'));
        checkEqual('tt456', subLastDelimFirst('123ttt456', 't'));
        checkEqual('', subLastDelimFirst('123ttt456', ','));
        checkEqual(',', subLastDelimFirst('123,,', ','));
        checkEqual(',123', subLastDelimFirst(',,123', ','));
        checkEqual(',123,,', subLastDelimFirst(',,123,,', ','));
        checkEqual('', subLastDelimFirst('123,,', ',,'));
        checkEqual('123', subLastDelimFirst(',,123', ',,'));
        checkEqual('123,,', subLastDelimFirst(',,123,,', ',,')); // object parameter

        checkEqual('456', subLastDelimFirst({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('456', subLastDelimFirst('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_subLastDelimLast = function test_subLastDelimLast() {
      it('test_subLastDelimLast', function () {
        checkEqual('456', subLastDelimLast('123,456', ','));
        checkEqual('789', subLastDelimLast('123,456,789', ','));
        checkEqual('456', subLastDelimLast('123ttt456', 'ttt'));
        checkEqual('456', subLastDelimLast('123ttt456', 'tt'));
        checkEqual('456', subLastDelimLast('123ttt456', 't'));
        checkEqual('', subLastDelimLast('123ttt456', ','));
        checkEqual('', subLastDelimLast('123,,', ','));
        checkEqual('123', subLastDelimLast(',,123', ','));
        checkEqual('', subLastDelimLast(',,123,,', ','));
        checkEqual('', subLastDelimLast('123,,', ',,'));
        checkEqual('123', subLastDelimLast(',,123', ',,'));
        checkEqual('', subLastDelimLast(',,123,,', ',,')); // object parameter

        checkEqual('456', subLastDelimLast({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('456', subLastDelimLast('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_tagInnerFirst = function test_tagInnerFirst() {
      it('test_tagInnerFirst', function () {
        checkEqual('b', tagInnerFirst('  <aba>  ', '<a', 'a>'));
        checkEqual('', tagInnerFirst('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagInnerFirst('  <a>  ', '<a', 'a>'));
        checkEqual('b', tagInnerFirst('<<>>>a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>'));
        checkEqual('<<<', tagInnerFirst('<<>><a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('b', tagInnerFirst({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerFirst('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerFirst('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_tagOuterFirst = function test_tagOuterFirst() {
      it('test_tagOuterFirst', function () {
        checkEqual('<aba>', tagOuterFirst('  <aba>  ', '<a', 'a>'));
        checkEqual('<aa>', tagOuterFirst('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagOuterFirst('  <a>  ', '<a', 'a>'));
        checkEqual('<aba>', tagOuterFirst('<<>>>a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>'));
        checkEqual('<a<<<a>', tagOuterFirst('<<>><a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('<aba>', tagOuterFirst({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterFirst('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterFirst('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_tagInnerLast = function test_tagInnerLast() {
      it('test_tagInnerLast', function () {
        checkEqual('b', tagInnerLast('  <aba>  ', '<a', 'a>'));
        checkEqual('', tagInnerLast('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagInnerLast('  <a>  ', '<a', 'a>'));
        checkEqual('b', tagInnerLast('<<>>>a<<<a>><<aba>><<a>>>a<<<>>', '<a', 'a>'));
        checkEqual('>>>', tagInnerLast('<<>><a<<<a>><<aba>><<a>>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('b', tagInnerLast({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerLast('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerLast('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_tagOuterLast = function test_tagOuterLast() {
      it('test_tagOuterLast', function () {
        checkEqual('<aba>', tagOuterLast('  <aba>  ', '<a', 'a>'));
        checkEqual('<aa>', tagOuterLast('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagOuterLast('  <a>  ', '<a', 'a>'));
        checkEqual('<aba>', tagOuterLast('<<>>>a<<<a>><<aba>><<a>>>a<<<>>', '<a', 'a>'));
        checkEqual('<a>>>a>', tagOuterLast('<<>><a<<<a>><<aba>><<a>>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('<aba>', tagOuterLast({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterLast('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterLast('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_split = function test_split() {
      it('test_split', function () {
        checkEqual(['ABC', 'DEF', 'GHI'], split('ABC,DEF,GHI', ','));
        checkEqual(['ABC', 'DEF', 'GHI'], split('ABC.DEF.GHI', '.'));
        checkEqual(['ABC', 'DEF', 'GHI'], split('ABC DEF GHI', ' '));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',,ABC,,DEF,,GHI,,', ','));
        checkEqual(['', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.first));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', ''], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.last));
        checkEqual(['', 'ABC', '', 'DEF', '', 'GHI', ''], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.bothEnds));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.all));
        checkEqual(['', '', ' A B C ', '', ' DE F ', '', ' G HI ', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.none, split.executeConvert.none));
        checkEqual(['', '', 'A B C', '', 'DE F', '', 'G HI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.none, split.executeConvert.trimSpace));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.none, split.executeConvert.excludeSpace));
        checkEqual(['ABC', 'DEF', 'GHI'], split(' , , A B C , , DE F ,, G HI , , ', ',', split.excludeEmptyStr.all, split.executeConvert.excludeSpace));
        checkEqual([''], split('', ',', split.excludeEmptyStr.none));
        checkEqual([], split('', ',', split.excludeEmptyStr.first));
        checkEqual([''], split('', ',', split.excludeEmptyStr.last));
        checkEqual([''], split('', ',', split.excludeEmptyStr.bothEnds));
        checkEqual([], split('', ',', split.excludeEmptyStr.all));
        checkEqual(['', ''], split(',', ',', split.excludeEmptyStr.none));
        checkEqual([''], split(',', ',', split.excludeEmptyStr.first));
        checkEqual([''], split(',', ',', split.excludeEmptyStr.last));
        checkEqual([], split(',', ',', split.excludeEmptyStr.bothEnds));
        checkEqual([], split(',', ',', split.excludeEmptyStr.all));
        checkEqual(['', '', ''], split(',,', ',', split.excludeEmptyStr.none));
        checkEqual(['', ''], split(',,', ',', split.excludeEmptyStr.first));
        checkEqual(['', ''], split(',,', ',', split.excludeEmptyStr.last));
        checkEqual([''], split(',,', ',', split.excludeEmptyStr.bothEnds));
        checkEqual([], split(',,', ',', split.excludeEmptyStr.all));
        checkEqual(['', 'A', ''], split(',A,', ',', split.excludeEmptyStr.none));
        checkEqual(['A', ''], split(',A,', ',', split.excludeEmptyStr.first));
        checkEqual(['', 'A'], split(',A,', ',', split.excludeEmptyStr.last));
        checkEqual(['A'], split(',A,', ',', split.excludeEmptyStr.bothEnds));
        checkEqual(['A'], split(',A,', ',', split.excludeEmptyStr.all)); // object parameter

        testCounter();
        checkEqual(['ABC', 'DEF', 'GHI'], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all,
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all,
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',, A B C ,, DE F ,, G HI ,,', ',', {
          excludeEmptyStr: split.excludeEmptyStr.all,
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.all, {
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual([' A B C ', ' DE F ', ' G HI '], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all
        }));
        checkEqual([' A B C ', ' DE F ', ' G HI '], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all
        }));
        checkEqual([' A B C ', ' DE F ', ' G HI '], split(',, A B C ,, DE F ,, G HI ,,', ',', {
          excludeEmptyStr: split.excludeEmptyStr.all
        }));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ',',
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ',',
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', {
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['', '', ' A B C ', '', ' DE F ', '', ' G HI ', '', ''], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ','
        }));
        checkEqual(['', '', ' A B C ', '', ' DE F ', '', ' G HI ', '', ''], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ','
        }));
      });
    };

    var test_splitCommaItems = function test_splitCommaItems() {
      it('test_splitCommaItems', function () {
        checkEqual(['A'], splitCommaItems('A'));
        checkEqual(['A'], splitCommaItems('A,'));
        checkEqual(['A', 'B'], splitCommaItems('A,B'));
        checkEqual(['A', 'B'], splitCommaItems('A,B,'));
        checkEqual(['A', 'B'], splitCommaItems('A ,B ,'));
        checkEqual(['A', 'B'], splitCommaItems('\r\n A \r\n, B \r ,\r\n'));
        checkEqual(['A B', 'B'], splitCommaItems('\r\n A B\r\n, B \r ,\r\n'));
        checkEqual([], splitCommaItems(''));
        checkEqual(true, isThrown(function () {
          splitCommaItems(',A');
        }));
        checkEqual(true, isThrown(function () {
          splitCommaItems(',');
        }));
        checkEqual(true, isThrown(function () {
          splitCommaItems(',,');
        }));
        checkEqual(true, isThrown(function () {
          splitCommaItems('A,,B');
        }));
      });
    };

    var test_splitDotItems = function test_splitDotItems() {
      it('test_splitDotItems', function () {
        checkEqual(['A'], splitDotItems('A'));
        checkEqual(['A'], splitDotItems('.A'));
        checkEqual(['A', 'B'], splitDotItems('A.B'));
        checkEqual(['A', 'B'], splitDotItems('.A.B'));
        checkEqual([' '], splitDotItems(' '));
        checkEqual([], splitDotItems(''));
        checkEqual(true, isThrown(function () {
          splitDotItems('A.');
        }));
        checkEqual(false, isThrown(function () {
          splitDotItems('A. ');
        }));
        checkEqual(true, isThrown(function () {
          splitDotItems('.');
        }));
        checkEqual(true, isThrown(function () {
          splitDotItems('..');
        }));
        checkEqual(true, isThrown(function () {
          splitDotItems('A..B');
        }));
        checkEqual(false, isThrown(function () {
          splitDotItems('A. .B');
        }));
      });
    };

    var test_paddingFirst = function test_paddingFirst() {
      it('test_paddingFirst', function () {
        checkEqual('123', paddingFirst('123', 1, '0'));
        checkEqual('123', paddingFirst('123', 2, '0'));
        checkEqual('123', paddingFirst('123', 3, '0'));
        checkEqual('0123', paddingFirst('123', 4, '0'));
        checkEqual('00123', paddingFirst('123', 5, '0'));
        checkEqual(true, isThrown(function () {
          paddingFirst('123', 0, '0');
        }));
        checkEqual('00123', paddingFirst({
          str: '123',
          length: 5,
          fill: '0'
        }));
        checkEqual('00123', paddingFirst('123', {
          length: 5,
          fill: '0'
        }));
        checkEqual('00123', paddingFirst('123', 5, {
          fill: '0'
        }));
      });
    };

    var test_paddingLast = function test_paddingLast() {
      it('test_paddingLast', function () {
        checkEqual('123', paddingLast('123', 1, '0'));
        checkEqual('123', paddingLast('123', 2, '0'));
        checkEqual('123', paddingLast('123', 3, '0'));
        checkEqual('1230', paddingLast('123', 4, '0'));
        checkEqual('12300', paddingLast('123', 5, '0'));
        checkEqual(true, isThrown(function () {
          paddingLast('123', 0, '0');
        }));
        checkEqual('12300', paddingLast({
          str: '123',
          length: 5,
          fill: '0'
        }));
        checkEqual('12300', paddingLast('123', {
          length: 5,
          fill: '0'
        }));
        checkEqual('12300', paddingLast('123', 5, {
          fill: '0'
        }));
      });
    };

    test_matchFormat();
    test_replaceAll();
    test_replaceAllArray();
    test_indexOf_standard();
    test_indexOfFirst();
    test_lastIndexOf_standard();
    test_indexOfLast();
    test_indexOfAnyFirst();
    test_indexOfAnyLast();
    test_isFirst();
    test_isLast();
    test_isBothEnds();
    test_includeFirst();
    test_includeLast();
    test_includeBothEnds();
    test_excludeFirst();
    test_excludeLast();
    test_excludeBothEnds();
    test_trimFirst();
    test_trimLast();
    test_trimBothEnds();
    test_substring_stardard();
    test_substr_stardard();
    test_subIndex();
    test_subLength();
    test_subFirst();
    test_subLast();
    test_deleteIndex();
    test_deleteLength();
    test_deleteFirst();
    test_deleteLast();
    test_insert();
    test_add();
    test_subFirstDelimFirst();
    test_subFirstDelimLast();
    test_subLastDelimFirst();
    test_subLastDelimLast();
    test_tagInnerFirst();
    test_tagOuterFirst();
    test_tagInnerLast();
    test_tagOuterLast();
    test_split();
    test_splitCommaItems();
    test_splitDotItems();
    test_paddingFirst();
    test_paddingLast();
  });
};

exports.test_execute_string = test_execute_string;
var _default = {
  test_execute_string: test_execute_string
};
exports["default"] = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_object = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_object = function test_execute_object(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_object', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$object = parts.object,
        copyProperty = _parts$object.copyProperty,
        inProperty = _parts$object.inProperty,
        fixProperty = _parts$object.fixProperty,
        propertyCount = _parts$object.propertyCount,
        getProperty = _parts$object.getProperty,
        setProperty = _parts$object.setProperty,
        isEmptyObjectAll = _parts$object.isEmptyObjectAll,
        isObjectParameter = _parts$object.isObjectParameter,
        objectEntries = _parts$object.objectEntries,
        objectFromEntries = _parts$object.objectFromEntries,
        objectKeys = _parts$object.objectKeys,
        objectValues = _parts$object.objectValues,
        has = _parts$object.has,
        hasOwn = _parts$object.hasOwn,
        hasPrototype = _parts$object.hasPrototype,
        propertyList = _parts$object.propertyList;

    var test_has = function test_has() {
      it('test_has', function () {
        var object1 = {
          a: '1'
        };
        checkEqual(true, has(object1, 'a'));
        checkEqual(true, has(object1, 'a', true));
        checkEqual(true, hasOwn(object1, 'a'));
        checkEqual(false, hasPrototype(object1, 'a'));
        checkEqual(false, has(object1, 'b'));
        checkEqual(false, has(object1, 'b', true));
        checkEqual(false, hasOwn(object1, 'b'));
        checkEqual(false, hasPrototype(object1, 'b'));
        checkEqual(true, has(object1, 'constructor'));
        checkEqual(false, has(object1, 'constructor', true));
        checkEqual(false, hasOwn(object1, 'constructor'));
        checkEqual(true, hasPrototype(object1, 'constructor')); // object parameter

        checkEqual(true, has({
          object: object1,
          propertyName: 'constructor'
        }));
        checkEqual(false, has({
          object: object1,
          propertyName: 'constructor',
          hasOwn: true
        }));
        checkEqual(true, has(object1, {
          propertyName: 'constructor'
        }));
        checkEqual(false, has(object1, {
          propertyName: 'constructor',
          hasOwn: true
        }));
        checkEqual(true, has(object1, 'constructor', {
          hasOwn: false
        }));
        checkEqual(false, has(object1, 'constructor', {
          hasOwn: true
        }));
        checkEqual(false, hasOwn({
          object: object1,
          propertyName: 'constructor'
        }));
        checkEqual(false, hasOwn(object1, {
          propertyName: 'constructor'
        }));
        checkEqual(true, hasPrototype({
          object: object1,
          propertyName: 'constructor'
        }));
        checkEqual(true, hasPrototype(object1, {
          propertyName: 'constructor'
        }));
      });
    };

    var test_copyProperty = function test_copyProperty() {
      it('test_copyProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2',
          c: '3'
        };
        var destObject = {};
        copyProperty(sourceObject, 'a', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,b', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(true, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,c,', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(true, 'c' in destObject); // Object Named Parameter

        var destObject = {};
        copyProperty({
          fromObject: sourceObject,
          propertyNames: 'a',
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, {
          propertyNames: 'a',
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a', {
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = copyProperty({
          fromObject: sourceObject,
          propertyNames: 'a'
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = copyProperty(sourceObject, {
          propertyNames: 'a'
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject); // exception

        checkEqual(false, isThrown(function () {
          copyProperty({}, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty(1, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 1, {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 'a', 1);
        }));
      });
    };

    var test_inProperty = function test_inProperty() {
      it('test_inProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,')); // other object function

        checkEqual(false, inProperty(test_inProperty, 'constructor'));
        checkEqual(true, inProperty(test_inProperty, 'constructor', false)); // other object Module

        if (parts.isModule(parts)) {
          checkEqual(true, inProperty(parts, 'VERSION'));
          checkEqual(true, inProperty(parts, 'VERSION', false));
        } // array


        checkEqual(true, inProperty(sourceObject, ['a']));
        checkEqual(true, inProperty(sourceObject, ['a', 'b']));
        checkEqual(false, inProperty(sourceObject, ['a', 'b', 'c'])); // Object Named Parameter

        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPaths: 'b,a'
        }));
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPaths: 'd'
        }));
        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPaths: ['b', 'a']
        }));
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPaths: ['d']
        })); // exception

        checkEqual(false, isThrown(function () {
          inProperty({}, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty(1, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, 1);
        }));
        checkEqual(false, isThrown(function () {
          inProperty({}, ['a']);
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, [1]);
        })); // property exist value undefined

        var sourceObject = {
          a: '1',
          b: undefined
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        var sourceObject = {
          a: '1'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(false, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd')); // hasOwn

        function First() {
          this.a = '1';
          this.b = '2';
        }

        function Second() {
          this.c = '3';
        }

        First.prototype = new Second();
        Second.prototype.d = '4';
        var sourceObject = new First();
        checkEqual('1', sourceObject.a);
        checkEqual('2', sourceObject.b);
        checkEqual('3', sourceObject.c);
        checkEqual('4', sourceObject.d);
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        testCounter();
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,'));
        checkEqual(true, inProperty(sourceObject, 'a', false));
        checkEqual(true, inProperty(sourceObject, 'b', false));
        checkEqual(true, inProperty(sourceObject, 'c', false));
        checkEqual(true, inProperty(sourceObject, 'd', false));
        checkEqual(true, inProperty(sourceObject, 'a,b', false));
        checkEqual(true, inProperty(sourceObject, 'b,c', false));
        checkEqual(true, inProperty(sourceObject, 'a,c', false));
        checkEqual(true, inProperty(sourceObject, 'b,a', false));
        checkEqual(true, inProperty(sourceObject, 'a,d', false));
        checkEqual(true, inProperty(sourceObject, 'a,b,', false));
        checkEqual(true, inProperty(sourceObject, 'b,c,', false));
        checkEqual(true, inProperty(sourceObject, 'a,c,', false));
        checkEqual(true, inProperty(sourceObject, 'b,a,', false));
        checkEqual(true, inProperty(sourceObject, 'a,d,', false)); // property path

        var sourceObject2 = {
          a: '1',
          b: '2',
          c: {
            d: {
              e: 'E'
            }
          }
        };
        checkEqual(true, inProperty(sourceObject2, 'a'));
        checkEqual(true, inProperty(sourceObject2, 'a,b'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c.d'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c.d.e'));
        checkEqual(false, inProperty(sourceObject2, 'a,b,c.d.f'));
        checkEqual(true, isThrown(function () {
          return inProperty(sourceObject2, 'a,b,c.d.');
        }));
        checkEqual(true, isThrown(function () {
          return inProperty(sourceObject2, 'a,b,c.d..e');
        }));
        checkEqual(false, inProperty(sourceObject2, 'a,b,.d'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c.d.e,')); // object parameter

        testCounter();
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPaths: 'b,c'
        }));
        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPaths: 'b,c',
          hasOwn: false
        }));
        checkEqual(true, inProperty(sourceObject, {
          propertyPaths: 'b,c',
          hasOwn: false
        }));
        checkEqual(true, inProperty(sourceObject, 'b,c', {
          hasOwn: false
        }));
      });
    };

    var test_fixProperty = function test_fixProperty() {
      it('test_fixProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2'
        };
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'd'));
        checkEqual(true, fixProperty(sourceObject, 'a,b'));
        checkEqual(false, fixProperty(sourceObject, 'b,c'));
        checkEqual(false, fixProperty(sourceObject, 'a,c'));
        checkEqual(true, fixProperty(sourceObject, 'b,a'));
        checkEqual(false, fixProperty(sourceObject, 'a,d'));
        checkEqual(true, fixProperty(sourceObject, 'a,b,'));
        checkEqual(false, fixProperty(sourceObject, 'b,c,'));
        checkEqual(false, fixProperty(sourceObject, 'a,c,'));
        checkEqual(true, fixProperty(sourceObject, 'b,a,'));
        checkEqual(false, fixProperty(sourceObject, 'a,d,')); // other object function

        checkEqual(false, fixProperty(test_fixProperty, 'constructor')); // array

        checkEqual(false, fixProperty(sourceObject, ['a']));
        checkEqual(true, fixProperty(sourceObject, ['a', 'b']));
        checkEqual(false, fixProperty(sourceObject, ['a', 'b', 'c'])); // Object Named Parameter

        checkEqual(true, fixProperty({
          object: sourceObject,
          propertyNames: 'b,a'
        }));
        checkEqual(false, fixProperty({
          object: sourceObject,
          propertyNames: 'd'
        }));
        checkEqual(true, fixProperty({
          object: sourceObject,
          propertyNames: ['b', 'a']
        }));
        checkEqual(false, fixProperty({
          object: sourceObject,
          propertyNames: ['d']
        })); // exception

        checkEqual(false, isThrown(function () {
          fixProperty({}, 'a');
        }));
        checkEqual(true, isThrown(function () {
          fixProperty(1, 'a');
        }));
        checkEqual(true, isThrown(function () {
          fixProperty({}, 1);
        }));
        checkEqual(false, isThrown(function () {
          fixProperty({}, ['a']);
        }));
        checkEqual(true, isThrown(function () {
          fixProperty({}, [1]);
        })); // property exist value undefined

        var sourceObject = {
          a: '1',
          b: undefined
        };
        testCounter();
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(true, fixProperty(sourceObject, 'a,b'));
        var sourceObject = {
          a: '1'
        };
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(true, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'a,b')); // hasOwn

        function First() {
          this.a = '1';
          this.b = '2';
        }

        function Second() {
          this.c = '3';
        }

        First.prototype = new Second();
        Second.prototype.d = '4';
        var sourceObject = new First();
        testCounter();
        checkEqual('1', sourceObject.a);
        checkEqual('2', sourceObject.b);
        checkEqual('3', sourceObject.c);
        checkEqual('4', sourceObject.d);
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'd'));
        checkEqual(true, fixProperty(sourceObject, 'a,b'));
        checkEqual(false, fixProperty(sourceObject, 'b,c'));
        checkEqual(false, fixProperty(sourceObject, 'a,c'));
        checkEqual(true, fixProperty(sourceObject, 'b,a'));
        checkEqual(false, fixProperty(sourceObject, 'a,d'));
        testCounter();
        checkEqual(true, fixProperty(sourceObject, 'a,b,'));
        checkEqual(false, fixProperty(sourceObject, 'b,c,'));
        checkEqual(false, fixProperty(sourceObject, 'a,c,'));
        checkEqual(true, fixProperty(sourceObject, 'b,a,'));
        checkEqual(false, fixProperty(sourceObject, 'a,d,')); // property path

        var sourceObject2 = {
          a: '1',
          b: '2',
          c: {
            d: {
              e: 'E'
            }
          }
        };
        checkEqual(false, fixProperty(sourceObject2, 'a'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b'));
        checkEqual(true, fixProperty(sourceObject2, 'a,b,c'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.e'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.f'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d..e'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,.d'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,'));
        checkEqual(true, fixProperty(sourceObject2, 'a,b,c,'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.e,')); // object parameter

        testCounter();
        checkEqual(false, fixProperty({
          object: sourceObject,
          propertyNames: 'b,c'
        }));
        checkEqual(true, fixProperty({
          object: sourceObject,
          propertyNames: 'a,b'
        }));
        checkEqual(true, fixProperty(sourceObject, {
          propertyNames: 'a,b,'
        }));
      });
    };

    var test_propertyCount = function test_propertyCount() {
      it('test_propertyCount', function () {
        var object1 = {
          a: 1,
          b: 2,
          c: 3
        };

        function Object2() {
          this.d = 'red';
        }

        Object2.prototype = object1;
        var object2 = new Object2();
        checkEqual(3, propertyCount(object1));
        checkEqual(3, propertyCount(object1, false));
        checkEqual(1, propertyCount(object2));
        checkEqual(4, propertyCount(object2, false));
        checkEqual(0, propertyCount({}));
        checkEqual(0, propertyCount({}, false)); // other object function

        checkEqual(0, propertyCount(test_propertyCount));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(0, propertyCount(test_propertyCount, false));
        } else {
          checkEqual(1, propertyCount(test_propertyCount, false));
        } // other object Module


        if (parts.isModule(parts)) {
          checkEqual(true, 0 !== propertyCount(parts));
          checkEqual(true, 0 !== propertyCount(parts, false));
        } // exception


        checkEqual(false, isThrown(function () {
          propertyCount({});
        }));
        checkEqual(false, isThrown(function () {
          propertyCount([]);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount(10);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount('abc');
        })); // object parameter

        checkEqual(1, propertyCount({
          object: object2
        }));
        checkEqual(4, propertyCount({
          object: object2,
          hasOwn: false
        }));
        checkEqual(4, propertyCount(object2, {
          hasOwn: false
        }));
      });
    };

    var test_getProperty = function test_getProperty() {
      it('test_getProperty', function () {
        var testObj1 = {
          a: {
            b: {
              c: false
            }
          }
        };
        checkEqual(false, getProperty(testObj1, 'a').b.c);
        checkEqual(false, getProperty(testObj1, 'a.b').c);
        checkEqual(false, getProperty(testObj1, 'a.b.c'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.d'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.b'));
        checkEqual(undefined, getProperty(testObj1, ''));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, '.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, '..');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, 'a.b.c.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, 'a.');
        }));
        checkEqual(false, getProperty(testObj1, '.a').b.c);
        checkEqual(undefined, getProperty(testObj1, 'a.c'));
        checkEqual(undefined, getProperty(testObj1, 'b'));
        checkEqual(undefined, getProperty(testObj1, 'b.c'));
        var testObj2 = {
          a: {
            b: {
              c: undefined
            }
          }
        };
        checkEqual(undefined, getProperty(testObj2, 'a').b.c);
        checkEqual(undefined, getProperty(testObj2, 'a.b').c);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c'));
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d'));
        checkEqual(undefined, getProperty(testObj2, 'a.b.b'));
        checkEqual(undefined, getProperty(testObj2, ''));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, '.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, '..');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, 'a.b.c.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, 'a.');
        }));
        checkEqual(undefined, getProperty(testObj2, '.a').b.c);
        checkEqual(undefined, getProperty(testObj2, 'a.c'));
        checkEqual(undefined, getProperty(testObj2, 'b'));
        checkEqual(undefined, getProperty(testObj2, 'b.c'));
        /* eslint-disable comma-spacing */

        checkEqual(undefined, getProperty(testObj2, 'a', true, false).b.c);
        checkEqual(undefined, getProperty(testObj2, 'a.b', true, false).c);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c', true, false));
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d', true, false));
        checkEqual(undefined, getProperty(testObj2, 'a.b.b', true, false));
        checkEqual({
          b: {
            c: undefined
          }
        }, getProperty(testObj2, 'a', true, true).value);
        checkEqual(undefined, getProperty(testObj2, 'a.b', true, true).value.c);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c', true, true).value);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d', true, true).value);
        checkEqual(undefined, getProperty(testObj2, 'a.b.b', true, true).value);
        testCounter();
        checkEqual(true, getProperty(testObj2, 'a', true, true).exist);
        checkEqual(true, getProperty(testObj2, 'a.b', true, true).exist);
        checkEqual(true, getProperty(testObj2, 'a.b.c', true, true).exist);
        checkEqual(false, getProperty(testObj2, 'a.b.c.d', true, true).exist);
        checkEqual(false, getProperty(testObj2, 'a.b.b', true, true).exist);
        /* eslint-enable comma-spacing */
        // object parameter

        var object1 = {
          a: {
            b: {
              c: false
            }
          }
        };

        function Object2() {
          this.d = true;
        }

        Object2.prototype = object1;
        var object2 = new Object2();
        checkEqual(undefined, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: true
        }));
        checkEqual(false, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: false
        }));
        checkEqual(false, getProperty(object2, {
          propertyPath: 'a.b.c',
          hasOwn: false
        }));
        checkEqual(false, getProperty(object2, 'a.b.c', {
          hasOwn: false
        }));
        checkEqual({
          exist: false
        }, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: true,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: false,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty(object2, {
          propertyPath: 'a.b.c',
          hasOwn: false,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty(object2, 'a.b.c', {
          hasOwn: false,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty(object2, 'a.b.c', false, {
          detail: true
        }));
        checkEqual({
          exist: false
        }, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          detail: true
        }));
        checkEqual({
          exist: false
        }, getProperty(object2, {
          propertyPath: 'a.b.c',
          detail: true
        }));
        checkEqual({
          exist: false
        }, getProperty(object2, 'a.b.c', {
          detail: true
        }));
      });
    };

    var test_setProperty = function test_setProperty() {
      it('test_setProperty', function () {
        var testObj1 = {};
        setProperty(testObj1, 'a.b', true);
        checkEqual(true, testObj1.a.b);
        setProperty(testObj1, 'a', true);
        checkEqual(true, testObj1.a);
        setProperty(testObj1, 'a.b.c', true);
        checkEqual(true, testObj1.a.b.c);
        setProperty(testObj1, 'a.c', true);
        checkEqual(true, testObj1.a.c);
        setProperty(testObj1, 'b', true);
        checkEqual(true, testObj1.b);
        setProperty(testObj1, 'b.c', true);
        checkEqual(true, testObj1.b.c);
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, '', true);
        }));
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, 'a.', true);
        }));
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, '.a', true);
        }));
        checkEqual(false, isThrown(function () {
          return setProperty(testObj1, 'a', true);
        }));
        var testObj1 = {
          a: ['abc', {
            b: 'b'
          }]
        };
        checkEqual('abc', testObj1.a[0]);
        setProperty(testObj1, 'a.0', 'def');
        checkEqual('def', testObj1.a[0]);
        checkEqual('b', testObj1.a[1].b);
        setProperty(testObj1, 'a.1.b', 'c');
        checkEqual('c', testObj1.a[1].b);
      });
    };

    var test_isObjectParameter = function test_isObjectParameter() {
      it('test_isObjectParameter', function () {
        var testFunction01 = function testFunction01(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a = a;
            a = _a.a;
            b = _a.b;
            var _a$c = _a.c;
            c = _a$c === void 0 ? '' : _a$c;
            var _a$d = _a.d;
            d = _a$d === void 0 ? '' : _a$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction01('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction01('A', 'B', 'C'));
        checkEqual('AB', testFunction01('A', 'B'));
        checkEqual('ABCD', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction01({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction01({
          a: 'A',
          b: 'B'
        }));

        var testFunction02 = function testFunction02(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a2 = a;
            a = _a2.a;
            b = _a2.b;
            var _a2$c = _a2.c;
            c = _a2$c === void 0 ? '' : _a2$c;
            var _a2$d = _a2.d;
            d = _a2$d === void 0 ? '' : _a2$d;
          } else if (isObjectParameter(b, 'b', 'c, d')) {
            var _b = b;
            b = _b.b;
            var _b$c = _b.c;
            c = _b$c === void 0 ? '' : _b$c;
            var _b$d = _b.d;
            d = _b$d === void 0 ? '' : _b$d;
          } else if (isObjectParameter(c, '', 'c, d', 1)) {
            var _c = c;
            var _c$c = _c.c;
            c = _c$c === void 0 ? '' : _c$c;
            var _c$d = _c.d;
            d = _c$d === void 0 ? '' : _c$d;
          } else if (isObjectParameter(d, '', 'd', 1)) {
            var _d = d;
            var _d$d = _d.d;
            d = _d$d === void 0 ? '' : _d$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction02('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction02('A', 'B', 'C'));
        checkEqual('AB', testFunction02('A', 'B')); // object parameter a

        checkEqual('ABCD', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02({
          a: 'A',
          b: 'B'
        })); // object parameter b

        checkEqual('ABCD', testFunction02('A', {
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', {
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', {
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02('A', {
          b: 'B'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', 'B', {
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', 'B', {
          d: 'D'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', 'C', {
          d: 'D'
        })); // miss patern

        checkEqual('[object Object]undefined', testFunction02({
          a: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D',
          e: 'E'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {}));
        checkEqual('A[object Object]', testFunction02('A', {
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          a: 'A',
          b: 'B'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {}));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          a: 'A'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          b: 'B'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          e: 'D'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          c: 'C'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          e: 'E'
        }));
      });
    };

    var test_ObjectEntries_standard = function test_ObjectEntries_standard() {
      it('test_ObjectEntries_standard', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual([['a', '1'], ['b', '2'], ['c', '3']], Object.entries({
          a: '1',
          b: '2',
          c: '3'
        }));
        checkEqual([['0', 'a'], ['1', 'b'], ['2', 'c']], Object.entries(['a', 'b', 'c']));
      });
    };

    var test_objectEntries = function test_objectEntries() {
      it('test_objectEntries', function () {
        checkEqual([['a', '1'], ['b', '2'], ['c', '3']], objectEntries({
          a: '1',
          b: '2',
          c: '3'
        })); // array ok

        checkEqual([['0', 'a'], ['1', 'b'], ['2', 'c']], objectEntries(['a', 'b', 'c'])); // exception

        checkEqual(true, isThrown(function () {
          return objectEntries('ABC');
        }));
      });
    };

    var test_objectFromEntries = function test_objectFromEntries() {
      it('test_objectFromEntries', function () {
        checkEqual({
          a: '1',
          b: '2',
          c: '3'
        }, objectFromEntries([['a', '1'], ['b', '2'], ['c', '3']]));
        checkEqual({}, objectFromEntries([]));
        checkEqual({
          '0': 'a',
          '1': 'b',
          '2': 'c'
        }, objectFromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']])); // exception

        checkEqual(true, isThrown(function () {
          return objectFromEntries('ABC');
        }));
        checkEqual(false, isThrown(function () {
          return objectFromEntries([]);
        }));
        checkEqual(false, isThrown(function () {
          return objectFromEntries([['a', 1]]);
        }));
        checkEqual(true, isThrown(function () {
          return objectFromEntries([['a', 1], []]);
        }));
        checkEqual(true, isThrown(function () {
          return objectFromEntries([['a', 1], ['b']]);
        }));
        checkEqual(false, isThrown(function () {
          return objectFromEntries([['a', 1], ['b', 2]]);
        }));
        checkEqual(true, isThrown(function () {
          return objectFromEntries([['a', 1], ['b', 2, 3]]);
        }));
      });
    };

    var test_objectKeys = function test_objectKeys() {
      it('test_objectKeys', function () {
        var array1 = ['a', 'b', 'c'];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, objectKeys(object1)); // only object type

        checkEqual(true, isThrown(function () {
          return objectKeys(array1);
        })); // object parameter

        checkEqual(array1, objectKeys({
          object: object1
        }));
      });
    };

    var test_objectValues = function test_objectValues() {
      it('test_objectValues', function () {
        var array1 = ['1', '2', '3'];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, objectValues(object1)); // only object type

        checkEqual(true, isThrown(function () {
          return objectValues(array1);
        })); // object parameter

        checkEqual(array1, objectValues({
          object: object1
        }));
      });
    };

    var test_propertyList = function test_propertyList() {
      it('test_propertyList', function () {
        // checkEqual('a\n b\n c', parts.string.trimBothEnds('\n a\n b\n c\n  ', ['\n', ' ']));
        // checkEqual('a\nb\nc', 'a\n b\n c'.split('\n').map(v => parts.string.trimFirst(v, [' '])).join('\n'));
        var object1 = {
          a: 'A',
          b: {
            b1: 'B1',
            b2: 'B2'
          },
          c: {
            c1: {
              c11: 'C11'
            },
            c2: 'C2'
          },
          d: 'D'
        };
        var testPattern = parts.string.trimBothEnds("\n          .a:[object String]:string\n          .b.b1:[object String]:string\n          .b.b2:[object String]:string\n          .c.c1.c11:[object String]:string\n          .c.c2:[object String]:string\n          .d:[object String]:string\n        ", ['\n', ' ']); // checkEqual(6, testPattern.split('\n').length);

        checkEqual(parts.array.map(testPattern.split('\n'), function (v) {
          return parts.string.trimFirst(v, [' ']);
        }).join('\n') + '\n', propertyList(object1));
        checkEqual(false, parts.isModule(object1));
      });
    };

    test_has();
    test_copyProperty();
    test_inProperty();
    test_fixProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();
    test_isObjectParameter();
    test_ObjectEntries_standard();
    test_objectEntries();
    test_objectFromEntries();
    test_objectKeys();
    test_objectValues();
    test_propertyList();
  });
};

exports.test_execute_object = test_execute_object;
var _default = {
  test_execute_object: test_execute_object
};
exports["default"] = _default;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_date = void 0;

var test_execute_date = function test_execute_date(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException,
      testCounter = _parts$test.testCounter;
  var Today = parts.date.Today;
  describe('test_execute_date', function () {
    var test_Today = function test_Today() {
      it('test_Today', function () {
        checkEqual(new Date().toString(), Today().toString());
      });
    };

    test_Today();
  });
};

exports.test_execute_date = test_execute_date;
var _default = {
  test_execute_date: test_execute_date
};
exports["default"] = _default;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_other = void 0;

var test_execute_other = function test_execute_other(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_other', function () {
    var test_split = function test_split() {
      it('test_split', function () {
        checkEqual(3, 'a,b,c'.split(',').length);
        checkEqual(4, 'a,b,c,'.split(',').length);
        checkEqual('a', 'a,b,c,'.split(',')[0]);
        checkEqual('', 'a,b,c,'.split(',')[3]);
      });
    };

    test_split();
  });
};

exports.test_execute_other = test_execute_other;
var _default = {
  test_execute_other: test_execute_other
};
exports["default"] = _default;

/***/ })
]]);