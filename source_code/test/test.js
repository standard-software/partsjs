const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isException,
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
    console.log(e);
  }
  testFrame.counter = 0;
  testFrame.testName = '';
};

const checkCompare = (compareFunc, a, b, message = '') => {
  if (!isString(message)) {
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
  if (!isFunction(targetFunc)) {
    throw new TypeError(
      'isThrown args targetFunc is not function',
    );
  }
  if (!(isFunction(compareFunc) ||isUndefined(compareFunc) )) {
    throw new TypeError(
      'isThrown args compareFunc is not function',
    );
  }

  try {
    targetFunc();
  } catch (e) {
    if (isUndefined(compareFunc)) {
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
  exceptionName = '',
) => {
  if (!isString(exceptionName)) {
    throw new TypeError(
      'isThrownException args exceptionName is not string',
    );
  }

  return isThrown(
    targetFunc,
    (thrown) => {
      if (isException(thrown)) {
        if (exceptionName === '') {
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

