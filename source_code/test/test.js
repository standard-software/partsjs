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

const {
  equal,
} = require('../compare/compare.js');

/**
 * test framework
 */
const testFrame = {
  describeArray: [],
  testName: '',
  counter: 0,
  outputDescribe: true,
  outputIt: false,
};

const describe = (text, func) => {
  if (testFrame.outputDescribe) {
    const indent = _repeat(' ', testFrame.describeArray.length * 2);
    console.log(`${indent}describe: ${text}`);
  }
  testFrame.describeArray.push(text);
  func();
  testFrame.describeArray.pop();
};

const it = (text, func) => {

  const indent = _repeat(
    ' ',
    testFrame.outputDescribe
      ? (testFrame.describeArray.length * 2)
      : 2,
  );
  const consoleLogTestName = () => {
    console.log(indent + `test: ${testFrame.testName}`);
  };

  testFrame.testName = text;
  testFrame.counter = 0;
  if (testFrame.outputIt) {
    consoleLogTestName();
  }
  try {
    func();
  } catch (e) {
    if (!testFrame.outputIt) {
      consoleLogTestName();
    }
    let errorMessage = '';
    for (prop in e) {
      errorMessage += 'e.' + prop + ':' + e[prop] + '\n';
    }
    console.log(errorMessage);
  }
  testFrame.counter = 0;
  testFrame.testName = '';
};

const checkCompare = (compareFunc, a, b, message = '') => {
  if (!_isString(message)) {
    throw new TypeError('checkEqual args message is not string');
  }

  testFrame.counter += 1;
  if (compareFunc(a, b) === true) {
    return true;
  }

  const indent = _repeat(' ', testFrame.describeArray.length * 2);
  let output = _map(testFrame.describeArray,
    (desc, i) => _repeat('  ', i) + `describe: ${desc}`,
  ).join('\n') + '\n';
  output +=
    `${indent}Test: ${testFrame.testName}\n` +
    `${indent}  Counter: ${testFrame.counter}\n` +
      (message === ''
        ? ''
        : `${indent}  Message: ${message}\n`) +
    `${indent}  A !== B\n` +
    `${indent}  A = ${String(a)}\n` +
    `${indent}  B = ${String(b)}`;
  console.log(output);
  return false;
};

const checkEqual = (a, b, message = '') => {
  return checkCompare(equal, a, b, message);
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
  checkEqual, checkCompare,
  describe, it, test,
  isThrown, isThrownValue, isThrownException, isNotThrown,
};

