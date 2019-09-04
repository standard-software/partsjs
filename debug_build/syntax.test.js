"use strict";

var test_execute_syntax = function test_execute_syntax(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownValue = _parts$test.isThrownValue,
      isThrownException = _parts$test.isThrownException,
      isNotThrown = _parts$test.isNotThrown;
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
      isNotUndefined = _parts$type.isNotUndefined,
      isNotNull = _parts$type.isNotNull,
      isNotBoolean = _parts$type.isNotBoolean,
      isNotNumber = _parts$type.isNotNumber,
      isNotInteger = _parts$type.isNotInteger,
      isNotString = _parts$type.isNotString,
      isNotFunction = _parts$type.isNotFunction,
      isNotObject = _parts$type.isNotObject,
      isNotArray = _parts$type.isNotArray,
      isNotDate = _parts$type.isNotDate,
      isNotRegExp = _parts$type.isNotRegExp,
      isNotException = _parts$type.isNotException,
      isUndefinedArray = _parts$type.isUndefinedArray,
      isNullArray = _parts$type.isNullArray,
      isBooleanArray = _parts$type.isBooleanArray,
      isNumberArray = _parts$type.isNumberArray,
      isIntegerArray = _parts$type.isIntegerArray,
      isStringArray = _parts$type.isStringArray,
      isFunctionArray = _parts$type.isFunctionArray,
      isObjectArray = _parts$type.isObjectArray,
      isArrayArray = _parts$type.isArrayArray,
      isDateArray = _parts$type.isDateArray,
      isRegExpArray = _parts$type.isRegExpArray,
      isExceptionArray = _parts$type.isExceptionArray,
      isNotUndefinedArray = _parts$type.isNotUndefinedArray,
      isNotNullArray = _parts$type.isNotNullArray,
      isNotBooleanArray = _parts$type.isNotBooleanArray,
      isNotNumberArray = _parts$type.isNotNumberArray,
      isNotIntegerArray = _parts$type.isNotIntegerArray,
      isNotStringArray = _parts$type.isNotStringArray,
      isNotFunctionArray = _parts$type.isNotFunctionArray,
      isNotObjectArray = _parts$type.isNotObjectArray,
      isNotArrayArray = _parts$type.isNotArrayArray,
      isNotDateArray = _parts$type.isNotDateArray,
      isNotRegExpArray = _parts$type.isNotRegExpArray,
      isNotExceptionArray = _parts$type.isNotExceptionArray;
  var _parts$syntax = parts.syntax,
      guard = _parts$syntax.guard,
      sc = _parts$syntax.sc,
      if_ = _parts$syntax.if_,
      switch_ = _parts$syntax.switch_;

  var test_guard = function test_guard() {
    var guardFunc = function guardFunc() {
      return [isInteger(value1), [isInteger(value2), 'testmessage']];
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
      return [isInteger(value1), isArray(value2), 1 <= value2.length];
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
      return [isArray(value1), [1 <= value1.length], [value1[0] === 1, 'value1[0]error'], function () {
        return isArray(value2);
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
      }, new SyntaxError().name));
      checkEqual(true, isThrown(function () {
        return guard(123);
      }));
      checkEqual(true, isThrown(function () {
        return guard(123);
      }, function (e) {
        return e.message === 'guard args1(guardFunc) type is not function.';
      }));
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
      }, new SyntaxError().name));
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
        return e.message === 'guard args1(guardFunc) result type is not array.';
      }));
    } // gurad exception args1 function result array

    var value1 = 1;
    var value2 = 2;

    var guardFunc = function guardFunc() {
      return [isInteger(value1), [isInteger(value2), 'testmessage']];
    };

    checkEqual(true, isNotThrown(function () {
      return guard(guardFunc);
    }), 'gurad exception args1 function result array 1');

    var guardFunc = function guardFunc() {
      return [isInteger(value1), [isInteger(value2)]];
    };

    checkEqual(true, isNotThrown(function () {
      return guard(guardFunc);
    }), 'gurad exception args1 function result array 2');

    var guardFunc = function guardFunc() {
      return [isInteger(value1), []];
    };

    checkEqual(false, isNotThrown(function () {
      return guard(guardFunc);
    }), 'gurad exception args1 function result array 3');
    checkEqual(true, isThrown(function () {
      return guard(guardFunc);
    }, function (e) {
      return e.message === 'guard args1(guardFunc) result item is not array.length >= 1.';
    }), 'gurad exception args1 function result array 3-2');

    var guardFunc = function guardFunc() {
      return [[isInteger(value2), 'testmessage'], isInteger(value1)];
    };

    checkEqual(true, isNotThrown(function () {
      return guard(guardFunc);
    }), 'gurad exception args1 function result array 4');

    var guardFunc = function guardFunc() {
      return [[isInteger(value2)], isInteger(value1)];
    };

    checkEqual(true, isNotThrown(function () {
      return guard(guardFunc);
    }), 'gurad exception args1 function result array 5');

    var guardFunc = function guardFunc() {
      return [[], isInteger(value1)];
    };

    checkEqual(false, isNotThrown(function () {
      return guard(guardFunc);
    }), 'gurad exception args1 function result array 6');
    checkEqual(true, isThrown(function () {
      return guard(guardFunc);
    }, function (e) {
      return e.message === 'guard args1(guardFunc) result item is not array.length >= 1.';
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
      return e.message === 'guard args1(guardFunc) result item value type is not boolean.';
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
      return e.message === 'guard args1(guardFunc) result item value type is not boolean.';
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
  };

  var test_sc = function test_sc() {// checkEqual(true, sc(1, equal, 1));
    // checkEqual(false, sc(1, equal, 2));
    // checkEqual(true, sc(1, or, [1, 2]));
    // checkEqual(false, sc(0, or, [1, 2]));
  };

  var test_if_ = function test_if_() {
    var ifResultValue = {
      then: 'THEN',
      "else": 'ELSE'
    };
    checkEqual('THEN', if_(true)(ifResultValue));
    checkEqual('ELSE', if_(false)(ifResultValue));
    var ifResultFunc = {
      then: function then() {
        return 'THEN';
      },
      "else": function _else() {
        return 'ELSE';
      }
    };
    checkEqual('THEN', if_(true)(ifResultFunc));
    checkEqual('ELSE', if_(false)(ifResultFunc));
    var ifThenValue = {
      then: 'THEN'
    };
    checkEqual('THEN', if_(true)(ifThenValue));
    checkEqual(undefined, if_(false)(ifThenValue));
    var ifElseValue = {
      "else": 'ELSE'
    };
    checkEqual(undefined, if_(true)(ifElseValue));
    checkEqual('ELSE', if_(false)(ifElseValue));
    var ifThenFunc = {
      then: function then() {
        return 'THEN';
      }
    };
    checkEqual('THEN', if_(true)(ifThenFunc));
    checkEqual(undefined, if_(false)(ifThenFunc));
    var ifElseFunc = {
      "else": function _else() {
        return 'ELSE';
      }
    };
    checkEqual(undefined, if_(true)(ifElseFunc));
    checkEqual('ELSE', if_(false)(ifElseFunc)); // Error

    checkEqual(true, isThrownException(function () {
      if_(true)();
    }, new SyntaxError().name));
    checkEqual(true, isThrownException(function () {
      if_(true)({});
    }, new SyntaxError().name));
    checkEqual(true, isThrownException(function () {
      if_(true)({
        thenn: ''
      });
    }, new SyntaxError().name));
    checkEqual(false, isNotThrown(function () {
      if_(true)();
    }));
    checkEqual(true, isNotThrown(function () {
      if_(true)({
        then: ''
      });
    }));
  };

  var test_switch_ = function test_switch_() {
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
    }, new SyntaxError().name));
    checkEqual(true, isThrownException(function () {
      switch_(2)(switchResultValue4);
    }, new SyntaxError().name));
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
  };

  console.log('  test syntax.js start.');
  test_guard();
  test_sc();
  test_if_();
  test_switch_();
  console.log('  test syntax.js finish.');
};

module.exports = {
  test_execute_syntax: test_execute_syntax
};