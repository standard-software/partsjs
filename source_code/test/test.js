const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _map,
} = require('../array/array.js');

const {
  _repeat,
} = require('../string/string.js');

const describeArray = [];
let testName = '';
let testCounter = 0;

const describe = (text, func) => {
  describeArray.push(text);
  func();
  describeArray.pop();
};

const it = (text, func) => {
  testName = text;
  testCounter = 0;
  func();
  testCounter = 0;
  testName = '';
};

const checkEqual = (a, b, message = '') => {
  if (!_isString(message)) {
    throw new TypeError('checkEqual args message is not string');
  }

  testCounter += 1;
  if (_isNaNStrict(a) && _isNaNStrict(b)) {
    return true;
  }
  if (a === b) {
    return true;
  }
  const indent = _repeat(' ', describeArray.length * 2);
  let output = _map(describeArray,
    (desc, i) => _repeat('  ', i) + `describe: ${desc}`,
  ).join('\n') + '\n';
  output +=
    `${indent}Test: ${testName}\n` +
    `${indent}  Counter: ${testCounter}\n` +
      (message === ''
        ? ''
        : `${indent}  Message: ${message}\n`) +
    `${indent}  A !== B\n` +
    `${indent}  A = ${String(a)}\n` +
    `${indent}  B = ${String(b)}`;
  console.log(output);
  return false;
};

/**
 * isThrown isThrownValue isThrownException isNotThrown
 */
const isThrown = (
  targetFunc,
  compareFunc,
) => {
  if (!_isFunction(targetFunc)) {
    throw new TypeError(
      'isThrown args targetFunc is not function',
    );
  }
  if (!( _isFunction(compareFunc) || _isUndefined(compareFunc) )) {
    throw new TypeError(
      'isThrown args compareFunc is not function',
    );
  }

  try {
    targetFunc();
  } catch (e) {
    if (_isUndefined(compareFunc)) {
      return true;
    }
    return compareFunc(e);
  }
  return false;
};

const isThrownValue = (
  targetFunc,
  thrownValue,
) => {
  return isThrown(
    targetFunc,
    (thrown) => {
      return thrown === thrownValue;
    },
  );
};

const isThrownException = (
  targetFunc,
  exceptionName,
) => {
  if (!( _isString(exceptionName) || _isUndefined(exceptionName) )) {
    throw new TypeError(
      'isThrownException args exceptionName is not string',
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
    },
  );
};

const isNotThrown = (targetFunc) => {
  return !isThrown(targetFunc, () => true);
};

const test = it;

module.exports = {
  checkEqual,
  describe, it, test,
  isThrown, isThrownValue, isThrownException, isNotThrown,
};

