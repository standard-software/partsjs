"use strict";

var type = require('./type.js');

var _isUndefined = type._isUndefined,
    _isNull = type._isNull,
    _isNaNStrict = type._isNaNStrict,
    _isBoolean = type._isBoolean,
    _isNumber = type._isNumber,
    _isInteger = type._isInteger,
    _isString = type._isString,
    _isFunction = type._isFunction,
    _isObject = type._isObject,
    _isArray = type._isArray,
    _isDate = type._isDate,
    _isRegExp = type._isRegExp,
    _isError = type._isError,
    _isException = type._isException;
/**
 * assert
 */

var assert = function assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!_isBoolean(value)) {
    throw new TypeError('assert args1(value) type is not boolean. message:' + message);
  }

  if (!_isString(message)) {
    throw new TypeError('assert args2(message) type is not string. message:' + message);
  }

  if (!value) {
    throw new Error('assert error. message:' + message);
  }
};
/**
 * guard
 */


var guard_status = true;
var guard_message;

var guard = function guard(guardFunc, runFunc) {
  guard_message = '';

  if (guard_status === false) {
    return false;
  }

  if (!_isFunction(guardFunc)) {
    throw new SyntaxError('guard args1(guardFunc) type is not function.');
  }

  var result = guardFunc();

  if (!_isArray(result)) {
    throw new SyntaxError('guard args1(guardFunc) result type is not array.');
  }

  for (var i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if (i === result.length - 1 && _isUndefined(result[i])) {
      continue;
    }

    var resultValue = undefined;
    var message = '';

    if (_isArray(result[i])) {
      if (!(1 <= result[i].length)) {
        throw new SyntaxError('guard args1(guardFunc) result item is not array.length >= 1.');
      }

      resultValue = result[i][0];

      if (2 <= result[i].length) {
        message = result[i][1];
      }
    } else {
      resultValue = result[i];
    }

    resultValue = functionValue(resultValue);

    if (!_isBoolean(resultValue)) {
      throw new SyntaxError('guard args1(guardFunc) result item value type is not boolean.');
    }

    if (resultValue === false) {
      guard_message = message;

      if (!_isUndefined(runFunc)) {
        if (!_isFunction(runFunc)) {
          throw new SyntaxError('guard args2(runFunc) type is not function');
        }

        runFunc();
      }

      return true;
    }
  }

  return false;
};

guard.message = function () {
  return guard_message;
};

guard.status = function (value) {
  return guard_status = value;
};

guard.on = function () {
  guard_status = true;
};

guard.off = function () {
  guard_status = false;
};
/**
 * function Value
 */


var functionValue = function functionValue(value) {
  if (_isFunction(value)) {
    return value();
  } else {
    return value;
  }
};
/**
 * sc (second call)
 */


var sc = function sc(argsFirst, func) {
  for (var _len = arguments.length, argsRest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    argsRest[_key - 2] = arguments[_key];
  }

  return func.apply(void 0, [argsFirst].concat(argsRest));
};
/**
 * if_
 */


var if_ = function if_(condition) {
  if (!_isBoolean(condition)) {
    throw new TypeError('if_ args(condition) type is not boolean.');
  }

  var checkSyntax = function checkSyntax(args) {
    if (!_isObject(args)) {
      throw new SyntaxError('if_() args type is not object.');
    }

    if (_isUndefined(args.then) && _isUndefined(args["else"])) {
      throw new SyntaxError('if_() args .then .else both nothing.');
    }
  };

  if (condition) {
    return function (args) {
      checkSyntax(args);
      return functionValue(args.then);
    };
  } else {
    return function (args) {
      checkSyntax(args);
      return functionValue(args["else"]);
    };
  }
};
/**
 * switch_
 */


var switch_ = function switch_(expression) {
  return function (args) {
    if (!_isArray(args)) {
      throw new SyntaxError('switch_() args type is not array.');
    }

    for (var i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (i === args.length - 1 && _isUndefined(args[i])) {
        continue;
      }

      if (!_isArray(args[i])) {
        throw new SyntaxError('switch_() args type is not array in array.');
      }
    }

    for (var _i = 0; _i < args.length; _i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (_i === args.length - 1 && _isUndefined(args[_i])) {
        continue;
      }

      if (args[_i].length === 0) {
        return undefined;
      }

      if (args[_i].length === 1) {
        return functionValue(args[_i][0]);
      }

      if (args[_i][0] === expression) {
        return functionValue(args[_i][1]);
      }
    }

    return undefined;
  };
};

module.exports = {
  assert: assert,
  guard: guard,
  sc: sc,
  if_: if_,
  switch_: switch_
};