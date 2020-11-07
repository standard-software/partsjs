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
        recursiveCall = _parts$syntax.recursiveCall;
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

    var test_recursiveCall = function test_recursiveCall() {
      it('test_recursiveCall', function () {
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
        recursiveCall(data, function (value, key, level, source) {
          checkEqual(data, source);

          if ('folder' in value) {
            return value.folder;
          }
        }, function (value, key, level, source) {
          checkEqual(data, source);
          message += "".concat(key, ":").concat(value.name, " ");
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
        recursiveCall(testObject, function (value, key) {
          if (isObject(value)) {
            return value;
          }
        }, function (value, key) {
          message += "".concat(key, ":").concat(_typeof(value), " ");
        });
        checkEqual('a:number b:number c:object d:number e:object f:number g:object ', message);
        var message = '';
        recursiveCall(testObject, function (value, key) {
          if (isObject(value)) {
            return value;
          } else if (Array.isArray(value)) {
            return value;
          }
        }, function (value, key) {
          message += "".concat(key, ":").concat(_typeof(value), " ");
        });
        checkEqual('a:number b:number c:object d:number e:object f:number ' + 'g:object 0:number 1:object 0:object h:number ', message);
        var message = '';
        recursiveCall(testObject, function (value, key, level) {
          if (1 <= level) {
            return;
          }

          if (isObject(value)) {
            return value;
          } else if (Array.isArray(value)) {
            return value;
          }
        }, function (value, key) {
          message += "".concat(key, ":").concat(_typeof(value), " ");
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
        recursiveCall(data.children, function (value, key) {
          if ('children' in value) {
            return value.children;
          }
        }, function (value, key, level) {
          messages.push({
            name: value.name,
            level: level
          });
        });
        var SortFunc = parts.array.SortFunc;
        messages.sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.level;
        }]]));
        var message = parts.array.map(messages, function (v) {
          return "name:".concat(v.name);
        }).join(' ');
        checkEqual('name:test01 name:test02 name:test03 name:test04 name:test05 name:test06', message);
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
    test_recursiveCall();
  });
};

exports.test_execute_syntax = test_execute_syntax;
var _default = {
  test_execute_syntax: test_execute_syntax
};
exports["default"] = _default;