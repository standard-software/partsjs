"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};

var _primitiveTypeCheckFunc = function _primitiveTypeCheckFunc(typeName) {
  return function (value) {
    return _typeof(value) === typeName;
  };
};

var _objectTypeCheckFunc = function _objectTypeCheckFunc(typeName) {
  return function (value) {
    return objectToString(value) === "[object ".concat(typeName, "]");
  };
};

var _isUndefined = _primitiveTypeCheckFunc('undefined');

var _isNull = function _isNull(value) {
  return value === null;
};

var _isNaNStrict = function _isNaNStrict(value) {
  return value !== value;
};

var _isBoolean = _primitiveTypeCheckFunc('boolean');

var _isNumber = function _isNumber(value) {
  return _primitiveTypeCheckFunc('number')(value) && isFinite(value);
};

var _isInteger = function _isInteger(value) {
  if (!_isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

var _isString = _primitiveTypeCheckFunc('string');

var _isFunction = _primitiveTypeCheckFunc('function');

var _isObject = function _isObject(value) {
  if (_objectTypeCheckFunc('Object')(value) && !_isNull(value) && !_isUndefined(value)) {
    return true;
  }

  return false;
};

var _isArray = _objectTypeCheckFunc('Array');

var _isDate = _objectTypeCheckFunc('Date');

var _isRegExp = _objectTypeCheckFunc('RegExp');

var _isError = _objectTypeCheckFunc('Error');
/**
 * _isException
 * description:
 *  _isException can determine standard Error objects and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */


var _isException = function _isException(value) {
  if (_isObject(value)) {
    if ('name' in value && 'message' in value) {
      return true;
    }
  } else if (_isError(value)) {
    return true;
  }

  return false;
};

var _isNotUndefined = function _isNotUndefined(value) {
  return !_isUndefined(value);
};

var _isNotNull = function _isNotNull(value) {
  return !_isNull(value);
};

var _isNotNaNStrict = function _isNotNaNStrict(value) {
  return !_isNaNStrict(value);
};

var _isNotBoolean = function _isNotBoolean(value) {
  return !_isBoolean(value);
};

var _isNotNumber = function _isNotNumber(value) {
  return !_isNumber(value);
};

var _isNotInteger = function _isNotInteger(value) {
  return !_isInteger(value);
};

var _isNotString = function _isNotString(value) {
  return !_isString(value);
};

var _isNotFunction = function _isNotFunction(value) {
  return !_isFunction(value);
};

var _isNotObject = function _isNotObject(value) {
  return !_isObject(value);
};

var _isNotArray = function _isNotArray(value) {
  return !_isArray(value);
};

var _isNotDate = function _isNotDate(value) {
  return !_isDate(value);
};

var _isNotRegExp = function _isNotRegExp(value) {
  return !_isRegExp(value);
};

var _isNotException = function _isNotException(value) {
  return !_isException(value);
};
/**
 * _isTypeCheck
 * description:
 *  check type for array argument.
 */


var _isTypeCheck = function _isTypeCheck(func, argsArray) {
  var l = argsArray.length;

  if (l === 0) {
    return false;
  } else if (l === 1) {
    return func(argsArray[0]);
  } else {
    for (var i = 0; i < l; i += 1) {
      if (!func(argsArray[i])) {
        return false;
      }
    }

    return true;
  }
};

var _isTypeCheckArgsFunc = function _isTypeCheckArgsFunc(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _isTypeCheck(func, args);
  };
};

var _isTypeCheckArrayFunc = function _isTypeCheckArrayFunc(func) {
  return function (value) {
    return _isTypeCheck(func, value);
  };
};

var isUndefined = _isTypeCheckArgsFunc(_isUndefined);

var isNull = _isTypeCheckArgsFunc(_isNull);

var isNaNStrict = _isTypeCheckArgsFunc(_isNaNStrict);

var isBoolean = _isTypeCheckArgsFunc(_isBoolean);

var isNumber = _isTypeCheckArgsFunc(_isNumber);

var isInteger = _isTypeCheckArgsFunc(_isInteger);

var isString = _isTypeCheckArgsFunc(_isString);

var isFunction = _isTypeCheckArgsFunc(_isFunction);

var isObject = _isTypeCheckArgsFunc(_isObject);

var isArray = _isTypeCheckArgsFunc(_isArray);

var isDate = _isTypeCheckArgsFunc(_isDate);

var isRegExp = _isTypeCheckArgsFunc(_isRegExp);

var isException = _isTypeCheckArgsFunc(_isException);

var isNotUndefined = _isTypeCheckArgsFunc(_isNotUndefined);

var isNotNull = _isTypeCheckArgsFunc(_isNotNull);

var isNotNaNStrict = _isTypeCheckArgsFunc(_isNotNaNStrict);

var isNotBoolean = _isTypeCheckArgsFunc(_isNotBoolean);

var isNotNumber = _isTypeCheckArgsFunc(_isNotNumber);

var isNotInteger = _isTypeCheckArgsFunc(_isNotInteger);

var isNotString = _isTypeCheckArgsFunc(_isNotString);

var isNotFunction = _isTypeCheckArgsFunc(_isNotFunction);

var isNotObject = _isTypeCheckArgsFunc(_isNotObject);

var isNotArray = _isTypeCheckArgsFunc(_isNotArray);

var isNotDate = _isTypeCheckArgsFunc(_isNotDate);

var isNotRegExp = _isTypeCheckArgsFunc(_isNotRegExp);

var isNotException = _isTypeCheckArgsFunc(_isNotException);

var isUndefinedArray = _isTypeCheckArrayFunc(_isUndefined);

var isNullArray = _isTypeCheckArrayFunc(_isNull);

var isNaNStrictArray = _isTypeCheckArrayFunc(_isNaNStrict);

var isBooleanArray = _isTypeCheckArrayFunc(_isBoolean);

var isNumberArray = _isTypeCheckArrayFunc(_isNumber);

var isIntegerArray = _isTypeCheckArrayFunc(_isInteger);

var isStringArray = _isTypeCheckArrayFunc(_isString);

var isFunctionArray = _isTypeCheckArrayFunc(_isFunction);

var isObjectArray = _isTypeCheckArrayFunc(_isObject);

var isArrayArray = _isTypeCheckArrayFunc(_isArray);

var isDateArray = _isTypeCheckArrayFunc(_isDate);

var isRegExpArray = _isTypeCheckArrayFunc(_isRegExp);

var isExceptionArray = _isTypeCheckArrayFunc(_isException);

var isNotUndefinedArray = _isTypeCheckArrayFunc(function (value) {
  return !_isUndefined(value);
});

var isNotNullArray = _isTypeCheckArrayFunc(function (value) {
  return !_isNull(value);
});

var isNotNaNStrictArray = _isTypeCheckArrayFunc(function (value) {
  return !_isNaNStrict(value);
});

var isNotBooleanArray = _isTypeCheckArrayFunc(function (value) {
  return !_isBoolean(value);
});

var isNotNumberArray = _isTypeCheckArrayFunc(function (value) {
  return !_isNumber(value);
});

var isNotIntegerArray = _isTypeCheckArrayFunc(function (value) {
  return !_isInteger(value);
});

var isNotStringArray = _isTypeCheckArrayFunc(function (value) {
  return !_isString(value);
});

var isNotFunctionArray = _isTypeCheckArrayFunc(function (value) {
  return !_isFunction(value);
});

var isNotObjectArray = _isTypeCheckArrayFunc(function (value) {
  return !_isObject(value);
});

var isNotArrayArray = _isTypeCheckArrayFunc(function (value) {
  return !_isArray(value);
});

var isNotDateArray = _isTypeCheckArrayFunc(function (value) {
  return !_isDate(value);
});

var isNotRegExpArray = _isTypeCheckArrayFunc(function (value) {
  return !_isRegExp(value);
});

var isNotExceptionArray = _isTypeCheckArrayFunc(function (value) {
  return !_isException(value);
});

module.exports = {
  _isUndefined: _isUndefined,
  _isNull: _isNull,
  _isNaNStrict: _isNaNStrict,
  _isBoolean: _isBoolean,
  _isNumber: _isNumber,
  _isInteger: _isInteger,
  _isString: _isString,
  _isFunction: _isFunction,
  _isObject: _isObject,
  _isArray: _isArray,
  _isDate: _isDate,
  _isRegExp: _isRegExp,
  _isError: _isError,
  _isException: _isException,
  _isNotUndefined: _isNotUndefined,
  _isNotNull: _isNotNull,
  _isNotNaNStrict: _isNotNaNStrict,
  _isNotBoolean: _isNotBoolean,
  _isNotNumber: _isNotNumber,
  _isNotInteger: _isNotInteger,
  _isNotString: _isNotString,
  _isNotFunction: _isNotFunction,
  _isNotObject: _isNotObject,
  _isNotArray: _isNotArray,
  _isNotDate: _isNotDate,
  _isNotRegExp: _isNotRegExp,
  _isNotException: _isNotException,
  isUndefined: isUndefined,
  isNull: isNull,
  isNaNStrict: isNaNStrict,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isInteger: isInteger,
  isString: isString,
  isFunction: isFunction,
  isObject: isObject,
  isArray: isArray,
  isDate: isDate,
  isRegExp: isRegExp,
  isException: isException,
  isNotUndefined: isNotUndefined,
  isNotNull: isNotNull,
  isNotNaNStrict: isNotNaNStrict,
  isNotBoolean: isNotBoolean,
  isNotNumber: isNotNumber,
  isNotInteger: isNotInteger,
  isNotString: isNotString,
  isNotFunction: isNotFunction,
  isNotObject: isNotObject,
  isNotArray: isNotArray,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotException: isNotException,
  isUndefinedArray: isUndefinedArray,
  isNullArray: isNullArray,
  isNaNStrictArray: isNaNStrictArray,
  isBooleanArray: isBooleanArray,
  isNumberArray: isNumberArray,
  isIntegerArray: isIntegerArray,
  isStringArray: isStringArray,
  isFunctionArray: isFunctionArray,
  isObjectArray: isObjectArray,
  isArrayArray: isArrayArray,
  isDateArray: isDateArray,
  isRegExpArray: isRegExpArray,
  isExceptionArray: isExceptionArray,
  isNotUndefinedArray: isNotUndefinedArray,
  isNotNullArray: isNotNullArray,
  isNotNaNStrictArray: isNotNaNStrictArray,
  isNotBooleanArray: isNotBooleanArray,
  isNotNumberArray: isNotNumberArray,
  isNotIntegerArray: isNotIntegerArray,
  isNotStringArray: isNotStringArray,
  isNotFunctionArray: isNotFunctionArray,
  isNotObjectArray: isNotObjectArray,
  isNotArrayArray: isNotArrayArray,
  isNotDateArray: isNotDateArray,
  isNotRegExpArray: isNotRegExpArray,
  isNotExceptionArray: isNotExceptionArray
};