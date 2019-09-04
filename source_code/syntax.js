const type = require('./type.js');

const {
  _isBoolean,
  _isString,
  _isFunction,
  _isArray,
  _isUndefined,
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
 * isThrown isThrownValue isThrownException isNotThrown
 */
const isThrown = (
  targetFunc,
  compareFunc
) => {
  guard(() => [
    [
      _isFunction(targetFunc),
      'isThrown args1(targetFunc) type is not function.'
    ],
    [
      _isFunction(compareFunc) || _isUndefined(compareFunc),
      'isThrown args2(compareFunc) type is not function or undefined.'
    ]
  ], () => {
    throw new SyntaxError(guard.message());
  });
  try {
    targetFunc();
  } catch (e) {
    if (_isUndefined(compareFunc)) { return true; }
    return compareFunc(e);
  }
  return false;
};

const isThrownValue = (
  targetFunc,
  thrownValue
) => {
  return isThrown(
    targetFunc,
    (thrown) => {
      return thrown === thrownValue;
    }
  );
};

const isThrownException = (
  targetFunc,
  exceptionName,
) => {
  guard(() => [
    [
      _isUndefined(exceptionName) || _isString(exceptionName),
      'isThrownException args2(exceptionName) type is not string.'
    ],
  ], () => {
    throw new SyntaxError(guard.message());
  });

  return isThrown(
    targetFunc,
    (thrown) => {
      if (_isException(thrown)) {
        if (_isUndefined(exceptionName)) {
          return true;
        }
        return thrown.name === exceptionName;
      }
      return false;
    }
  );
};

const isNotThrown = (targetFunc) => {
  return !isThrown(targetFunc, () => true);
};

module.exports = {
  assert,
  guard,
  isThrown,
  isThrownValue,
  isThrownException,
  isNotThrown,
};