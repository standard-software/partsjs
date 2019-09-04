const type = require('./type.js');

const {
  _isUndefined,
  _isNull,
  _isNaNStrict,
  _isBoolean,
  _isNumber,
  _isInteger,
  _isString,
  _isFunction,
  _isObject,
  _isArray,
  _isDate,
  _isRegExp,
  _isError,
  _isException,
} = type;

/**
 * assert
 */
const assert = (value, message = '') => {
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
let guard_status = true;
let guard_message;
const guard = (guardFunc, runFunc) => {
  guard_message = '';
  if (guard_status === false) { return false; }

  if (!_isFunction(guardFunc)) {
    throw new SyntaxError('guard args1(guardFunc) type is not function.');
  }
  const result = guardFunc();
  if (!_isArray(result)) {
    throw new SyntaxError('guard args1(guardFunc) result type is not array.');
  }
  for (let i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if ((i === result.length - 1) && _isUndefined(result[i])) {
      continue;
    }
    let resultValue = undefined;
    let message = '';
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
guard.message = () => guard_message;

guard.status = (value) => {
  return guard_status = value;
};
guard.on = () => {
  guard_status = true;
};
guard.off = () => {
  guard_status = false;
};

/**
 * function Value
 */
const functionValue = (value) => {
  if (_isFunction(value)) {
    return value();
  } else {
    return value;
  }
};

/**
 * sc (second call)
 */
const sc = (
  argsFirst,
  func,
  ...argsRest
) => {
  return func(argsFirst, ...argsRest);
};

/**
 * if_
 */
const if_ = (condition) => {
  if (!_isBoolean(condition)) {
    throw new TypeError('if_ args(condition) type is not boolean.');
  }
  const checkSyntax = (args) => {
    if (!_isObject(args)) {
      throw new SyntaxError('if_() args type is not object.');
    }
    if (_isUndefined(args.then) && _isUndefined(args.else)) {
      throw new SyntaxError('if_() args .then .else both nothing.');
    }
  };
  if (condition) {
    return (args) => {
      checkSyntax(args);
      return functionValue(args.then);
    };
  } else {
    return (args) => {
      checkSyntax(args);
      return functionValue(args.else);
    };
  }
};

/**
 * switch_
 */
const switch_ = (expression) => {
  return (args) => {
    if (!_isArray(args)) {
      throw new SyntaxError('switch_() args type is not array.');
    }
    for (let i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if ((i === args.length - 1) && _isUndefined(args[i])) {
        continue;
      }
      if (!_isArray(args[i])) {
        throw new SyntaxError('switch_() args type is not array in array.');
      }
    }
    for (let i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if ((i === args.length - 1) && _isUndefined(args[i])) {
        continue;
      }
      if (args[i].length === 0) { return undefined; }
      if (args[i].length === 1) { return functionValue(args[i][0]); }
      if (args[i][0] === expression) {
        return functionValue(args[i][1]);
      }
    }
    return undefined;
  };
};

module.exports = {
  assert,
  guard,
  sc,
  if_,
  switch_,
};