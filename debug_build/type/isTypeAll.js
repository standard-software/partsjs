"use strict";

var _require = require('../type/isType.js'),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isObjectType = _require.isObjectType,
    isArray = _require.isArray,
    isArrayType = _require.isArrayType,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isBooleanObject = _require.isBooleanObject,
    isNumberObject = _require.isNumberObject,
    isStringObject = _require.isStringObject,
    isEmptyObject = _require.isEmptyObject,
    isEmptyArray = _require.isEmptyArray,
    isNotUndefined = _require.isNotUndefined,
    isNotNull = _require.isNotNull,
    isNotNaNStrict = _require.isNotNaNStrict,
    isNotBoolean = _require.isNotBoolean,
    isNotNumber = _require.isNotNumber,
    isNotInteger = _require.isNotInteger,
    isNotString = _require.isNotString,
    isNotFunction = _require.isNotFunction,
    isNotObject = _require.isNotObject,
    isNotObjectType = _require.isNotObjectType,
    isNotArray = _require.isNotArray,
    isNotArrayType = _require.isNotArrayType,
    isNotDate = _require.isNotDate,
    isNotRegExp = _require.isNotRegExp,
    isNotBooleanObject = _require.isNotBooleanObject,
    isNotNumberObject = _require.isNotNumberObject,
    isNotStringObject = _require.isNotStringObject,
    isNotEmptyObject = _require.isNotEmptyObject,
    isNotEmptyArray = _require.isNotEmptyArray;

var _require2 = require('../type/_isException.js'),
    isException = _require2.isException,
    isNotException = _require2.isNotException;

var _require3 = require('../type/_isSymbol.js'),
    isSymbol = _require3.isSymbol,
    isNotSymbol = _require3.isNotSymbol;

var _require4 = require('../type/_isMap.js'),
    isMap = _require4.isMap,
    isNotMap = _require4.isNotMap,
    isWeakMap = _require4.isWeakMap,
    isNotWeakMap = _require4.isNotWeakMap;

var _require5 = require('../type/_isSet.js'),
    isSet = _require5.isSet,
    isNotSet = _require5.isNotSet,
    isWeakSet = _require5.isWeakSet,
    isNotWeakSet = _require5.isNotWeakSet;
/**
 *isTypeCheck
 * description:
 *  check type for array argument.
 */


var isTypeCheck = function isTypeCheck(func, argsArray) {
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

var isTypeCheckArgsFunc = function isTypeCheckArgsFunc(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return isTypeCheck(func, args);
  };
};

var isUndefinedAll = isTypeCheckArgsFunc(isUndefined);
var isNullAll = isTypeCheckArgsFunc(isNull);
var isNaNStrictAll = isTypeCheckArgsFunc(isNaNStrict);
var isBooleanAll = isTypeCheckArgsFunc(isBoolean);
var isNumberAll = isTypeCheckArgsFunc(isNumber);
var isIntegerAll = isTypeCheckArgsFunc(isInteger);
var isStringAll = isTypeCheckArgsFunc(isString);
var isFunctionAll = isTypeCheckArgsFunc(isFunction);
var isObjectAll = isTypeCheckArgsFunc(isObject);
var isObjectTypeAll = isTypeCheckArgsFunc(isObjectType);
var isArrayAll = isTypeCheckArgsFunc(isArray);
var isArrayTypeAll = isTypeCheckArgsFunc(isArrayType);
var isDateAll = isTypeCheckArgsFunc(isDate);
var isRegExpAll = isTypeCheckArgsFunc(isRegExp);
var isExceptionAll = isTypeCheckArgsFunc(isException);
var isBooleanObjectAll = isTypeCheckArgsFunc(isBooleanObject);
var isNumberObjectAll = isTypeCheckArgsFunc(isNumberObject);
var isStringObjectAll = isTypeCheckArgsFunc(isStringObject);
var isEmptyObjectAll = isTypeCheckArgsFunc(isEmptyObject);
var isEmptyArrayAll = isTypeCheckArgsFunc(isEmptyArray);
var isSymbolAll = isTypeCheckArgsFunc(isSymbol);
var isMapAll = isTypeCheckArgsFunc(isMap);
var isWeakMapAll = isTypeCheckArgsFunc(isWeakMap);
var isSetAll = isTypeCheckArgsFunc(isSet);
var isWeakSetAll = isTypeCheckArgsFunc(isWeakSet);
var isNotUndefinedAll = isTypeCheckArgsFunc(isNotUndefined);
var isNotNullAll = isTypeCheckArgsFunc(isNotNull);
var isNotNaNStrictAll = isTypeCheckArgsFunc(isNotNaNStrict);
var isNotBooleanAll = isTypeCheckArgsFunc(isNotBoolean);
var isNotNumberAll = isTypeCheckArgsFunc(isNotNumber);
var isNotIntegerAll = isTypeCheckArgsFunc(isNotInteger);
var isNotStringAll = isTypeCheckArgsFunc(isNotString);
var isNotFunctionAll = isTypeCheckArgsFunc(isNotFunction);
var isNotObjectAll = isTypeCheckArgsFunc(isNotObject);
var isNotObjectTypeAll = isTypeCheckArgsFunc(isNotObjectType);
var isNotArrayAll = isTypeCheckArgsFunc(isNotArray);
var isNotArrayTypeAll = isTypeCheckArgsFunc(isNotArrayType);
var isNotDateAll = isTypeCheckArgsFunc(isNotDate);
var isNotRegExpAll = isTypeCheckArgsFunc(isNotRegExp);
var isNotExceptionAll = isTypeCheckArgsFunc(isNotException);
var isNotBooleanObjectAll = isTypeCheckArgsFunc(isNotBooleanObject);
var isNotNumberObjectAll = isTypeCheckArgsFunc(isNotNumberObject);
var isNotStringObjectAll = isTypeCheckArgsFunc(isNotStringObject);
var isNotEmptyObjectAll = isTypeCheckArgsFunc(isNotEmptyObject);
var isNotEmptyArrayAll = isTypeCheckArgsFunc(isNotEmptyArray);
var isNotSymbolAll = isTypeCheckArgsFunc(isNotSymbol);
var isNotMapAll = isTypeCheckArgsFunc(isNotMap);
var isNotWeakMapAll = isTypeCheckArgsFunc(isNotWeakMap);
var isNotSetAll = isTypeCheckArgsFunc(isNotSet);
var isNotWeakSetAll = isTypeCheckArgsFunc(isNotWeakSet);
var isUndef = isUndefinedAll;
var isBool = isBooleanAll;
var isNum = isNumberAll;
var isInt = isIntegerAll;
var isStr = isStringAll;
var isFunc = isFunctionAll;
var isObj = isObjectAll;
var isObjType = isObjectTypeAll;
var isExcept = isExceptionAll;
var isEmptyObj = isEmptyObjectAll;
var isNotUndef = isNotUndefinedAll;
var isNotBool = isNotBooleanAll;
var isNotNum = isNotNumberAll;
var isNotInt = isNotIntegerAll;
var isNotStr = isNotStringAll;
var isNotFunc = isNotFunctionAll;
var isNotObj = isNotObjectAll;
var isNotObjType = isNotObjectTypeAll;
var isNotExcept = isNotExceptionAll;
var isNotEmptyObj = isNotEmptyObjectAll;
module.exports = {
  isUndefinedAll: isUndefinedAll,
  isNullAll: isNullAll,
  isNaNStrictAll: isNaNStrictAll,
  isBooleanAll: isBooleanAll,
  isNumberAll: isNumberAll,
  isIntegerAll: isIntegerAll,
  isStringAll: isStringAll,
  isFunctionAll: isFunctionAll,
  isObjectAll: isObjectAll,
  isObjectTypeAll: isObjectTypeAll,
  isArrayAll: isArrayAll,
  isArrayTypeAll: isArrayTypeAll,
  isDateAll: isDateAll,
  isRegExpAll: isRegExpAll,
  isExceptionAll: isExceptionAll,
  isBooleanObjectAll: isBooleanObjectAll,
  isNumberObjectAll: isNumberObjectAll,
  isStringObjectAll: isStringObjectAll,
  isEmptyObjectAll: isEmptyObjectAll,
  isEmptyArrayAll: isEmptyArrayAll,
  isSymbolAll: isSymbolAll,
  isMapAll: isMapAll,
  isWeakMapAll: isWeakMapAll,
  isSetAll: isSetAll,
  isWeakSetAll: isWeakSetAll,
  isNotUndefinedAll: isNotUndefinedAll,
  isNotNullAll: isNotNullAll,
  isNotNaNStrictAll: isNotNaNStrictAll,
  isNotBooleanAll: isNotBooleanAll,
  isNotNumberAll: isNotNumberAll,
  isNotIntegerAll: isNotIntegerAll,
  isNotStringAll: isNotStringAll,
  isNotFunctionAll: isNotFunctionAll,
  isNotObjectAll: isNotObjectAll,
  isNotObjectTypeAll: isNotObjectTypeAll,
  isNotArrayAll: isNotArrayAll,
  isNotArrayTypeAll: isNotArrayTypeAll,
  isNotDateAll: isNotDateAll,
  isNotRegExpAll: isNotRegExpAll,
  isNotExceptionAll: isNotExceptionAll,
  isNotBooleanObjectAll: isNotBooleanObjectAll,
  isNotNumberObjectAll: isNotNumberObjectAll,
  isNotStringObjectAll: isNotStringObjectAll,
  isNotEmptyObjectAll: isNotEmptyObjectAll,
  isNotEmptyArrayAll: isNotEmptyArrayAll,
  isNotSymbolAll: isNotSymbolAll,
  isNotMapAll: isNotMapAll,
  isNotWeakMapAll: isNotWeakMapAll,
  isNotSetAll: isNotSetAll,
  isNotWeakSetAll: isNotWeakSetAll,
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