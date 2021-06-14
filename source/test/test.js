import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  _map,
} from '../array/array.js';

import {
  _repeat,
} from '../string/string.js';

import {
  equalDeep,
} from '../compare/compare.js';

import {
  isWindowsScriptHost,
} from '../platform/platform.js';

/**
 * test framework
 */
export const testFrame = {
  describeArray: [],
  testName: '',
  counter: 0,
  outputDescribe: true,
  outputIt: false,
};

export const describe = (text, func) => {
  if (testFrame.outputDescribe) {
    const indent = _repeat(' ', testFrame.describeArray.length * 2);
    console.log(`${indent}describe: ${text}`);
  }
  testFrame.describeArray.push(text);
  func();
  testFrame.describeArray.pop();
};

export const it = (text, func) => {

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
  if (isWindowsScriptHost()) {
    func();
    // if wsh error catch
    // Cannot determine where the error occurred
  } else {
    try {
      func();
    } catch (e) {
      if (!testFrame.outputIt) {
        consoleLogTestName();
      }
      console.log(e);
    }
  }
  testFrame.counter = 0;
  testFrame.testName = '';
};

export const test = it;

const outputValue = (value) => {
  if (isString(value)) {
    return `'${value}'`;
  }
  if (!isWindowsScriptHost() && isObject(value)) {
    return JSON.stringify(value);
  }
  return String(value);
};

export const checkCompare = (compareFunc, a, b, result, message = '') => {
  if (!isString(message)) {
    throw new TypeError(`checkCompare args:message(=${message}) is not string`);
  }
  let conditionExpressText = '';
  if (result === true) {
    conditionExpressText = 'A !== B';
  } else if (result === false) {
    conditionExpressText = 'A === B';
  } else {
    throw new Error(`checkCompare args:result(=${result}) is not boolean`);
  }

  testFrame.counter += 1;
  if (compareFunc(a, b) === result) {
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
    `${indent}  ${conditionExpressText}\n` +
    `${indent}  A = ${outputValue(a)}\n` +
    `${indent}  B = ${outputValue(b)}`;
  console.log(output);
  return false;
};

export const checkEqual = (a, b, message = '') => {
  return checkCompare(equalDeep, a, b, true, message);
};

export const checkNotEqual = (a, b, message = '') => {
  return checkCompare(equalDeep, a, b, false, message);
};

export const expect = a => {
  const toBe = b => checkCompare(
    (v1, v2) => v1 === v2,
    a, b, true,
  );
  const toEqual = b => checkEqual(a, b);
  const notToBe = b => checkCompare(
    (v1, v2) => v1 !== v2,
    a, b, true,
  );
  const notToEqual = b => checkCompare(
    (v1, v2) => !equalDeep(v1, v2),
    a, b, true,
  );
  return {
    toBe,
    toEqual,
    not: {
      toBe: notToBe,
      toEqual: notToEqual,
    },
  };
};

export const testCounter = (value = 0) => {
  if (isInteger(value)) {
    testFrame.counter = value;
  }
  return testFrame.counter;
};

/**
 * isThrown isThrownValue isThrownException isNotThrown
 */
export const isThrown = (
  targetFunc,
  compareFunc,
) => {
  if (!isFunction(targetFunc)) {
    throw new TypeError(
      'isThrown args targetFunc is not function',
    );
  }
  if (!(isFunction(compareFunc) || isUndefined(compareFunc))) {
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

export const isThrownValue = (
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

export const isThrownException = (
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

export const isNotThrown = (targetFunc) => {
  return !isThrown(targetFunc, () => true);
};

export default {
  testFrame,
  checkCompare,
  checkEqual, checkNotEqual,
  describe, it, test, expect,
  isThrown, isThrownValue, isThrownException, isNotThrown,
  testCounter,
};

