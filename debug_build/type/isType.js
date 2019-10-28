"use strict";

var _require = require('../type/_isType.js'),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isBooleanObject = _require._isBooleanObject,
    _isNumberObject = _require._isNumberObject,
    _isStringObject = _require._isStringObject,
    _isNotUndefined = _require._isNotUndefined,
    _isNotNull = _require._isNotNull,
    _isNotNaNStrict = _require._isNotNaNStrict,
    _isNotBoolean = _require._isNotBoolean,
    _isNotNumber = _require._isNotNumber,
    _isNotInteger = _require._isNotInteger,
    _isNotString = _require._isNotString,
    _isNotFunction = _require._isNotFunction,
    _isNotObject = _require._isNotObject,
    _isNotObjectType = _require._isNotObjectType,
    _isNotArray = _require._isNotArray,
    _isNotArrayType = _require._isNotArrayType,
    _isNotDate = _require._isNotDate,
    _isNotRegExp = _require._isNotRegExp,
    _isNotBooleanObject = _require._isNotBooleanObject,
    _isNotNumberObject = _require._isNotNumberObject,
    _isNotStringObject = _require._isNotStringObject;

var _require2 = require('../type/_isException.js'),
    _isException = _require2._isException,
    _isNotException = _require2._isNotException;

var _require3 = require('../type/_isSymbol.js'),
    _isSymbol = _require3._isSymbol,
    _isNotSymbol = _require3._isNotSymbol;

var _require4 = require('../type/_isMap.js'),
    _isMap = _require4._isMap,
    _isNotMap = _require4._isNotMap,
    _isWeakMap = _require4._isWeakMap,
    _isNotWeakMap = _require4._isNotWeakMap;

var _require5 = require('../type/_isSet.js'),
    _isSet = _require5._isSet,
    _isNotSet = _require5._isNotSet,
    _isWeakSet = _require5._isWeakSet,
    _isNotWeakSet = _require5._isNotWeakSet;
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

var isObjectType = _isTypeCheckArgsFunc(_isObjectType);

var isArray = _isTypeCheckArgsFunc(_isArray);

var isArrayType = _isTypeCheckArgsFunc(_isArrayType);

var isDate = _isTypeCheckArgsFunc(_isDate);

var isRegExp = _isTypeCheckArgsFunc(_isRegExp);

var isException = _isTypeCheckArgsFunc(_isException);

var isBooleanObject = _isTypeCheckArgsFunc(_isBooleanObject);

var isNumberObject = _isTypeCheckArgsFunc(_isNumberObject);

var isStringObject = _isTypeCheckArgsFunc(_isStringObject);

var isSymbol = _isTypeCheckArgsFunc(_isSymbol);

var isMap = _isTypeCheckArgsFunc(_isMap);

var isWeakMap = _isTypeCheckArgsFunc(_isWeakMap);

var isSet = _isTypeCheckArgsFunc(_isSet);

var isWeakSet = _isTypeCheckArgsFunc(_isWeakSet);

var isNotUndefined = _isTypeCheckArgsFunc(_isNotUndefined);

var isNotNull = _isTypeCheckArgsFunc(_isNotNull);

var isNotNaNStrict = _isTypeCheckArgsFunc(_isNotNaNStrict);

var isNotBoolean = _isTypeCheckArgsFunc(_isNotBoolean);

var isNotNumber = _isTypeCheckArgsFunc(_isNotNumber);

var isNotInteger = _isTypeCheckArgsFunc(_isNotInteger);

var isNotString = _isTypeCheckArgsFunc(_isNotString);

var isNotFunction = _isTypeCheckArgsFunc(_isNotFunction);

var isNotObject = _isTypeCheckArgsFunc(_isNotObject);

var isNotObjectType = _isTypeCheckArgsFunc(_isNotObjectType);

var isNotArray = _isTypeCheckArgsFunc(_isNotArray);

var isNotArrayType = _isTypeCheckArgsFunc(_isNotArrayType);

var isNotDate = _isTypeCheckArgsFunc(_isNotDate);

var isNotRegExp = _isTypeCheckArgsFunc(_isNotRegExp);

var isNotException = _isTypeCheckArgsFunc(_isNotException);

var isNotBooleanObject = _isTypeCheckArgsFunc(_isNotBooleanObject);

var isNotNumberObject = _isTypeCheckArgsFunc(_isNotNumberObject);

var isNotStringObject = _isTypeCheckArgsFunc(_isNotStringObject);

var isNotSymbol = _isTypeCheckArgsFunc(_isNotSymbol);

var isNotMap = _isTypeCheckArgsFunc(_isNotMap);

var isNotWeakMap = _isTypeCheckArgsFunc(_isNotWeakMap);

var isNotSet = _isTypeCheckArgsFunc(_isNotSet);

var isNotWeakSet = _isTypeCheckArgsFunc(_isNotWeakSet);

var isUndefinedArray = _isTypeCheckArrayFunc(_isUndefined);

var isNullArray = _isTypeCheckArrayFunc(_isNull);

var isNaNStrictArray = _isTypeCheckArrayFunc(_isNaNStrict);

var isBooleanArray = _isTypeCheckArrayFunc(_isBoolean);

var isNumberArray = _isTypeCheckArrayFunc(_isNumber);

var isIntegerArray = _isTypeCheckArrayFunc(_isInteger);

var isStringArray = _isTypeCheckArrayFunc(_isString);

var isFunctionArray = _isTypeCheckArrayFunc(_isFunction);

var isObjectArray = _isTypeCheckArrayFunc(_isObject);

var isObjectTypeArray = _isTypeCheckArrayFunc(_isObjectType);

var isArrayArray = _isTypeCheckArrayFunc(_isArray);

var isArrayTypeArray = _isTypeCheckArrayFunc(_isArrayType);

var isDateArray = _isTypeCheckArrayFunc(_isDate);

var isRegExpArray = _isTypeCheckArrayFunc(_isRegExp);

var isExceptionArray = _isTypeCheckArrayFunc(_isException);

var isBooleanObjectArray = _isTypeCheckArrayFunc(_isBooleanObject);

var isNumberObjectArray = _isTypeCheckArrayFunc(_isNumberObject);

var isStringObjectArray = _isTypeCheckArrayFunc(_isStringObject);

var isSymbolArray = _isTypeCheckArrayFunc(_isSymbol);

var isMapArray = _isTypeCheckArrayFunc(_isMap);

var isWeakMapArray = _isTypeCheckArrayFunc(_isWeakMap);

var isSetArray = _isTypeCheckArrayFunc(_isSet);

var isWeakSetArray = _isTypeCheckArrayFunc(_isWeakSet);

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

var isNotObjectTypeArray = _isTypeCheckArrayFunc(function (value) {
  return !_isObjectType(value);
});

var isNotArrayArray = _isTypeCheckArrayFunc(function (value) {
  return !_isArray(value);
});

var isNotArrayTypeArray = _isTypeCheckArrayFunc(function (value) {
  return !_isArrayType(value);
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

var isNotBooleanObjectArray = _isTypeCheckArrayFunc(function (value) {
  return !_isBooleanObject(value);
});

var isNotNumberObjectArray = _isTypeCheckArrayFunc(function (value) {
  return !_isNumberObject(value);
});

var isNotStringObjectArray = _isTypeCheckArrayFunc(function (value) {
  return !_isStringObject(value);
});

var isNotSymbolArray = _isTypeCheckArrayFunc(function (value) {
  return !_isSymbol(value);
});

var isNotMapArray = _isTypeCheckArrayFunc(function (value) {
  return !_isMap(value);
});

var isNotWeakMapArray = _isTypeCheckArrayFunc(function (value) {
  return !_isWeakMap(value);
});

var isNotSetArray = _isTypeCheckArrayFunc(function (value) {
  return !_isSet(value);
});

var isNotWeakSetArray = _isTypeCheckArrayFunc(function (value) {
  return !_isWeakSet(value);
});

var isUndef = isUndefined;
var isBool = isBoolean;
var isNum = isNumber;
var isInt = isInteger;
var isStr = isString;
var isFunc = isFunction;
var isObj = isObject;
var isObjType = isObjectType;
var isExcept = isException;
var isNotUndef = isNotUndefined;
var isNotBool = isNotBoolean;
var isNotNum = isNotNumber;
var isNotInt = isNotInteger;
var isNotStr = isNotString;
var isNotFunc = isNotFunction;
var isNotObj = isNotObject;
var isNotObjType = isNotObjectType;
var isNotExcept = isNotException;
module.exports = {
  isUndefined: isUndefined,
  isNull: isNull,
  isNaNStrict: isNaNStrict,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isInteger: isInteger,
  isString: isString,
  isFunction: isFunction,
  isObject: isObject,
  isObjectType: isObjectType,
  isArray: isArray,
  isArrayType: isArrayType,
  isDate: isDate,
  isRegExp: isRegExp,
  isException: isException,
  isBooleanObject: isBooleanObject,
  isNumberObject: isNumberObject,
  isStringObject: isStringObject,
  isSymbol: isSymbol,
  isMap: isMap,
  isWeakMap: isWeakMap,
  isSet: isSet,
  isWeakSet: isWeakSet,
  isNotUndefined: isNotUndefined,
  isNotNull: isNotNull,
  isNotNaNStrict: isNotNaNStrict,
  isNotBoolean: isNotBoolean,
  isNotNumber: isNotNumber,
  isNotInteger: isNotInteger,
  isNotString: isNotString,
  isNotFunction: isNotFunction,
  isNotObject: isNotObject,
  isNotObjectType: isNotObjectType,
  isNotArray: isNotArray,
  isNotArrayType: isNotArrayType,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotException: isNotException,
  isNotBooleanObject: isNotBooleanObject,
  isNotNumberObject: isNotNumberObject,
  isNotStringObject: isNotStringObject,
  isNotSymbol: isNotSymbol,
  isNotMap: isNotMap,
  isNotWeakMap: isNotWeakMap,
  isNotSet: isNotSet,
  isNotWeakSet: isNotWeakSet,
  isUndefinedArray: isUndefinedArray,
  isNullArray: isNullArray,
  isNaNStrictArray: isNaNStrictArray,
  isBooleanArray: isBooleanArray,
  isNumberArray: isNumberArray,
  isIntegerArray: isIntegerArray,
  isStringArray: isStringArray,
  isFunctionArray: isFunctionArray,
  isObjectArray: isObjectArray,
  isObjectTypeArray: isObjectTypeArray,
  isArrayArray: isArrayArray,
  isArrayTypeArray: isArrayTypeArray,
  isDateArray: isDateArray,
  isRegExpArray: isRegExpArray,
  isExceptionArray: isExceptionArray,
  isBooleanObjectArray: isBooleanObjectArray,
  isNumberObjectArray: isNumberObjectArray,
  isStringObjectArray: isStringObjectArray,
  isSymbolArray: isSymbolArray,
  isMapArray: isMapArray,
  isWeakMapArray: isWeakMapArray,
  isSetArray: isSetArray,
  isWeakSetArray: isWeakSetArray,
  isNotUndefinedArray: isNotUndefinedArray,
  isNotNullArray: isNotNullArray,
  isNotNaNStrictArray: isNotNaNStrictArray,
  isNotBooleanArray: isNotBooleanArray,
  isNotNumberArray: isNotNumberArray,
  isNotIntegerArray: isNotIntegerArray,
  isNotStringArray: isNotStringArray,
  isNotFunctionArray: isNotFunctionArray,
  isNotObjectArray: isNotObjectArray,
  isNotObjectTypeArray: isNotObjectTypeArray,
  isNotArrayArray: isNotArrayArray,
  isNotArrayTypeArray: isNotArrayTypeArray,
  isNotDateArray: isNotDateArray,
  isNotRegExpArray: isNotRegExpArray,
  isNotExceptionArray: isNotExceptionArray,
  isNotBooleanObjectArray: isNotBooleanObjectArray,
  isNotNumberObjectArray: isNotNumberObjectArray,
  isNotStringObjectArray: isNotStringObjectArray,
  isNotSymbolArray: isNotSymbolArray,
  isNotMapArray: isNotMapArray,
  isNotWeakMapArray: isNotWeakMapArray,
  isNotSetArray: isNotSetArray,
  isNotWeakSetArray: isNotWeakSetArray,
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjType: isObjType,
  isExcept: isExcept,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjType: isNotObjType,
  isNotExcept: isNotExcept
};