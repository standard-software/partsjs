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
    throw new TypeError('checkEqual args message is not string');
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
  if (!_isFunction(targetFunc)) {
    throw new TypeError(
      'isThrown args targetFunc is not function'
    );
  }
  if (!( _isFunction(compareFunc) || _isUndefined(compareFunc) )) {
    throw new TypeError(
      'isThrown args compareFunc is not function'
    );
  }

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
  if (!( _isString(exceptionName) || _isUndefined(exceptionName) )) {
    throw new TypeError(
      'isThrownException args exceptionName is not string'
    );
  }

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

