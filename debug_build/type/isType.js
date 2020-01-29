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
    _isEmptyObject = _require._isEmptyObject,
    _isEmptyArray = _require._isEmptyArray,
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
    _isNotStringObject = _require._isNotStringObject,
    _isNotEmptyObject = _require._isNotEmptyObject,
    _isNotEmptyArray = _require._isNotEmptyArray;

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

var isEmptyObject = _isTypeCheckArgsFunc(_isEmptyObject);

var isEmptyArray = _isTypeCheckArgsFunc(_isEmptyArray);

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

var isNotEmptyObject = _isTypeCheckArgsFunc(_isNotEmptyObject);

var isNotEmptyArray = _isTypeCheckArgsFunc(_isNotEmptyArray);

var isNotSymbol = _isTypeCheckArgsFunc(_isNotSymbol);

var isNotMap = _isTypeCheckArgsFunc(_isNotMap);

var isNotWeakMap = _isTypeCheckArgsFunc(_isNotWeakMap);

var isNotSet = _isTypeCheckArgsFunc(_isNotSet);

var isNotWeakSet = _isTypeCheckArgsFunc(_isNotWeakSet);

var isUndef = isUndefined;
var isBool = isBoolean;
var isNum = isNumber;
var isInt = isInteger;
var isStr = isString;
var isFunc = isFunction;
var isObj = isObject;
var isObjType = isObjectType;
var isExcept = isException;
var isEmptyObj = isEmptyObject;
var isNotUndef = isNotUndefined;
var isNotBool = isNotBoolean;
var isNotNum = isNotNumber;
var isNotInt = isNotInteger;
var isNotStr = isNotString;
var isNotFunc = isNotFunction;
var isNotObj = isNotObject;
var isNotObjType = isNotObjectType;
var isNotExcept = isNotException;
var isNotEmptyObj = isNotEmptyObject;
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
  isEmptyObject: isEmptyObject,
  isEmptyArray: isEmptyArray,
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
  isNotEmptyObject: isNotEmptyObject,
  isNotEmptyArray: isNotEmptyArray,
  isNotSymbol: isNotSymbol,
  isNotMap: isNotMap,
  isNotWeakMap: isNotWeakMap,
  isNotSet: isNotSet,
  isNotWeakSet: isNotWeakSet,
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjType: isObjType,
  isExcept: isExcept,
  isEmptyObj: isEmptyObj,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjType: isNotObjType,
  isNotExcept: isNotExcept,
  isNotEmptyObj: isNotEmptyObj
};