"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.testCounter = exports.expect = exports.checkEqual = exports.checkCompare = exports.test = exports.it = exports.describe = exports.testFrame = void 0;

var _type = require("../type/type.js");

var _array = require("../array/array.js");

var _string = require("../string/string.js");

var _compare = require("../compare/compare.js");

var _platform = require("../platform/platform.js");

/**
 * test framework
 */
var testFrame = {
  describeArray: [],
  testName: '',
  counter: 0,
  outputDescribe: true,
  outputIt: false
};
exports.testFrame = testFrame;

var describe = function describe(text, func) {
  if (testFrame.outputDescribe) {
    var indent = (0, _string._repeat)(' ', testFrame.describeArray.length * 2);
    console.log("".concat(indent, "describe: ").concat(text));
  }

  testFrame.describeArray.push(text);
  func();
  testFrame.describeArray.pop();
};

exports.describe = describe;

var it = function it(text, func) {
  var indent = (0, _string._repeat)(' ', testFrame.outputDescribe ? testFrame.describeArray.length * 2 : 2);

  var consoleLogTestName = function consoleLogTestName() {
    console.log(indent + "test: ".concat(testFrame.testName));
  };

  testFrame.testName = text;
  testFrame.counter = 0;

  if (testFrame.outputIt) {
    consoleLogTestName();
  }

  if ((0, _platform.isWindowsScriptHost)()) {
    func(); // if wsh error catch
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

exports.it = it;
var test = it;
exports.test = test;

var checkCompare = function checkCompare(compareFunc, a, b) {
  var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  if (!(0, _type.isString)(message)) {
    throw new TypeError('checkEqual args message is not string');
  }

  testFrame.counter += 1;

  if (compareFunc(a, b) === true) {
    return true;
  }

  var indent = (0, _string._repeat)(' ', testFrame.describeArray.length * 2);
  var output = (0, _array._map)(testFrame.describeArray, function (desc, i) {
    return (0, _string._repeat)('  ', i) + "describe: ".concat(desc);
  }).join('\n') + '\n';
  output += "".concat(indent, "Test: ").concat(testFrame.testName, "\n") + "".concat(indent, "  Counter: ").concat(testFrame.counter, "\n") + (message === '' ? '' : "".concat(indent, "  Message: ").concat(message, "\n")) + "".concat(indent, "  A !== B\n") + "".concat(indent, "  A = ").concat((0, _type.isString)(a) ? "'" + a + "'" : String(a), "\n") + "".concat(indent, "  B = ").concat((0, _type.isString)(b) ? "'" + b + "'" : String(b));
  console.log(output);
  return false;
};

exports.checkCompare = checkCompare;

var checkEqual = function checkEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return checkCompare(_compare.equalDeep, a, b, message);
};

exports.checkEqual = checkEqual;

var expect = function expect(a) {
  var toBe = function toBe(b) {
    return checkCompare(function (v1, v2) {
      return v1 === v2;
    }, a, b);
  };

  var toEqual = function toEqual(b) {
    return checkEqual(a, b);
  };

  var notToBe = function notToBe(b) {
    return checkCompare(function (v1, v2) {
      return v1 !== v2;
    }, a, b);
  };

  var notToEqual = function notToEqual(b) {
    return checkCompare(function (v1, v2) {
      return !(0, _compare.equalDeep)(v1, v2);
    }, a, b);
  };

  return {
    toBe: toBe,
    toEqual: toEqual,
    not: {
      toBe: notToBe,
      toEqual: notToEqual
    }
  };
};

exports.expect = expect;

var testCounter = function testCounter() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if ((0, _type.isInteger)(value)) {
    testFrame.counter = value;
  }

  return testFrame.counter;
};
/**
 * isThrown isThrownValue isThrownException isNotThrown
 */


exports.testCounter = testCounter;

var isThrown = function isThrown(targetFunc, compareFunc) {
  if (!(0, _type.isFunction)(targetFunc)) {
    throw new TypeError('isThrown args targetFunc is not function');
  }

  if (!((0, _type.isFunction)(compareFunc) || (0, _type.isUndefined)(compareFunc))) {
    throw new TypeError('isThrown args compareFunc is not function');
  }

  try {
    targetFunc();
  } catch (e) {
    if ((0, _type.isUndefined)(compareFunc)) {
      return true;
    }

    return compareFunc(e);
  }

  return false;
};

exports.isThrown = isThrown;

var isThrownValue = function isThrownValue(targetFunc, thrownValue) {
  return isThrown(targetFunc, function (thrown) {
    return thrown === thrownValue;
  });
};

exports.isThrownValue = isThrownValue;

var isThrownException = function isThrownException(targetFunc) {
  var exceptionName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!(0, _type.isString)(exceptionName)) {
    throw new TypeError('isThrownException args exceptionName is not string');
  }

  return isThrown(targetFunc, function (thrown) {
    if ((0, _type.isException)(thrown)) {
      if (exceptionName === '') {
        return true;
      }

      return thrown.name === exceptionName;
    }

    return false;
  });
};

exports.isThrownException = isThrownException;

var isNotThrown = function isNotThrown(targetFunc) {
  return !isThrown(targetFunc, function () {
    return true;
  });
};

exports.isNotThrown = isNotThrown;
var _default = {
  checkEqual: checkEqual,
  checkCompare: checkCompare,
  describe: describe,
  it: it,
  test: test,
  expect: expect,
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown,
  testCounter: testCounter
};
exports["default"] = _default;