const {
  _isString,
  _isNaNStrict,
  _isFunction,
  _isUndefined,
  _isException,
} = require('./type.js');

const {
  guard,
} = require('./syntax.js');

const checkEqual = (a, b, message = '') => {
  if (!_isString(message)) {
    throw new SyntaxError('checkEqual args(message) type is not string.');
  }

  if (_isNaNStrict(a, b)) {
    return true;
  }
  if (a === b) {
    return true;
  }
  message =
    `Test: ${message}\n` +
    '  A !== B\n' +
    `  A = ${String(a)}\n` +
    `  B = ${String(b)}`;
  console.log(message);
  return false;
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
  checkEqual,
  isThrown,
  isThrownValue,
  isThrownException,
  isNotThrown,
};

