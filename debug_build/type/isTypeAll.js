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

var _require2 = require('../type/isException.js'),
    isException = _require2.isException,
    isNotException = _require2.isNotException;

var _require3 = require('../type/isSymbol.js'),
    isSymbol = _require3.isSymbol,
    isNotSymbol = _require3.isNotSymbol;

var _require4 = require('../type/isMap.js'),
    isMap = _require4.isMap,
    isNotMap = _require4.isNotMap,
    isWeakMap = _require4.isWeakMap,
    isNotWeakMap = _require4.isNotWeakMap;

var _require5 = require('../type/isSet.js'),
    isSet = _require5.isSet,
    isNotSet = _require5.isNotSet,
    isWeakSet = _require5.isWeakSet,
    isNotWeakSet = _require5.isNotWeakSet;
/**
 * _isTypeArray
 * check type for array argument.
 */


var _isTypeArray = function _isTypeArray(isTypeFunc, argsArray) {
  var l = argsArray.length;

  if (l === 0) {
    return false;
  } else if (l === 1) {
    return isTypeFunc(argsArray[0]);
  } else {
    for (var i = 0; i < l; i += 1) {
      if (!isTypeFunc(argsArray[i])) {
        return false;
      }
    }

    return true;
  }
};

var _isTypeAllCheckFunc = function _isTypeAllCheckFunc(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _isTypeArray(func, args);
  };
};

var isUndefinedAll = _isTypeAllCheckFunc(isUndefined);

var isNullAll = _isTypeAllCheckFunc(isNull);

var isNaNStrictAll = _isTypeAllCheckFunc(isNaNStrict);

var isBooleanAll = _isTypeAllCheckFunc(isBoolean);

var isNumberAll = _isTypeAllCheckFunc(isNumber);

var isIntegerAll = _isTypeAllCheckFunc(isInteger);

var isStringAll = _isTypeAllCheckFunc(isString);

var isFunctionAll = _isTypeAllCheckFunc(isFunction);

var isObjectAll = _isTypeAllCheckFunc(isObject);

var isObjectTypeAll = _isTypeAllCheckFunc(isObjectType);

var isArrayAll = _isTypeAllCheckFunc(isArray);

var isArrayTypeAll = _isTypeAllCheckFunc(isArrayType);

var isDateAll = _isTypeAllCheckFunc(isDate);

var isRegExpAll = _isTypeAllCheckFunc(isRegExp);

var isExceptionAll = _isTypeAllCheckFunc(isException);

var isBooleanObjectAll = _isTypeAllCheckFunc(isBooleanObject);

var isNumberObjectAll = _isTypeAllCheckFunc(isNumberObject);

var isStringObjectAll = _isTypeAllCheckFunc(isStringObject);

var isEmptyObjectAll = _isTypeAllCheckFunc(isEmptyObject);

var isEmptyArrayAll = _isTypeAllCheckFunc(isEmptyArray);

var isSymbolAll = _isTypeAllCheckFunc(isSymbol);

var isMapAll = _isTypeAllCheckFunc(isMap);

var isWeakMapAll = _isTypeAllCheckFunc(isWeakMap);

var isSetAll = _isTypeAllCheckFunc(isSet);

var isWeakSetAll = _isTypeAllCheckFunc(isWeakSet);

var isNotUndefinedAll = _isTypeAllCheckFunc(isNotUndefined);

var isNotNullAll = _isTypeAllCheckFunc(isNotNull);

var isNotNaNStrictAll = _isTypeAllCheckFunc(isNotNaNStrict);

var isNotBooleanAll = _isTypeAllCheckFunc(isNotBoolean);

var isNotNumberAll = _isTypeAllCheckFunc(isNotNumber);

var isNotIntegerAll = _isTypeAllCheckFunc(isNotInteger);

var isNotStringAll = _isTypeAllCheckFunc(isNotString);

var isNotFunctionAll = _isTypeAllCheckFunc(isNotFunction);

var isNotObjectAll = _isTypeAllCheckFunc(isNotObject);

var isNotObjectTypeAll = _isTypeAllCheckFunc(isNotObjectType);

var isNotArrayAll = _isTypeAllCheckFunc(isNotArray);

var isNotArrayTypeAll = _isTypeAllCheckFunc(isNotArrayType);

var isNotDateAll = _isTypeAllCheckFunc(isNotDate);

var isNotRegExpAll = _isTypeAllCheckFunc(isNotRegExp);

var isNotExceptionAll = _isTypeAllCheckFunc(isNotException);

var isNotBooleanObjectAll = _isTypeAllCheckFunc(isNotBooleanObject);

var isNotNumberObjectAll = _isTypeAllCheckFunc(isNotNumberObject);

var isNotStringObjectAll = _isTypeAllCheckFunc(isNotStringObject);

var isNotEmptyObjectAll = _isTypeAllCheckFunc(isNotEmptyObject);

var isNotEmptyArrayAll = _isTypeAllCheckFunc(isNotEmptyArray);

var isNotSymbolAll = _isTypeAllCheckFunc(isNotSymbol);

var isNotMapAll = _isTypeAllCheckFunc(isNotMap);

var isNotWeakMapAll = _isTypeAllCheckFunc(isNotWeakMap);

var isNotSetAll = _isTypeAllCheckFunc(isNotSet);

var isNotWeakSetAll = _isTypeAllCheckFunc(isNotWeakSet);

var isUndefAll = isUndefinedAll;
var isBoolAll = isBooleanAll;
var isNumAll = isNumberAll;
var isIntAll = isIntegerAll;
var isStrAll = isStringAll;
var isFuncAll = isFunctionAll;
var isObjAll = isObjectAll;
var isObjTypeAll = isObjectTypeAll;
var isExceptAll = isExceptionAll;
var isEmptyObjAll = isEmptyObjectAll;
var isNotUndefAll = isNotUndefinedAll;
var isNotBoolAll = isNotBooleanAll;
var isNotNumAll = isNotNumberAll;
var isNotIntAll = isNotIntegerAll;
var isNotStrAll = isNotStringAll;
var isNotFuncAll = isNotFunctionAll;
var isNotObjAll = isNotObjectAll;
var isNotObjTypeAll = isNotObjectTypeAll;
var isNotExceptAll = isNotExceptionAll;
var isNotEmptyObjAll = isNotEmptyObjectAll;
module.exports = {
  _isTypeArray: _isTypeArray,
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
  isUndefAll: isUndefAll,
  isBoolAll: isBoolAll,
  isNumAll: isNumAll,
  isIntAll: isIntAll,
  isStrAll: isStrAll,
  isFuncAll: isFuncAll,
  isObjAll: isObjAll,
  isObjTypeAll: isObjTypeAll,
  isExceptAll: isExceptAll,
  isEmptyObjAll: isEmptyObjAll,
  isNotUndefAll: isNotUndefAll,
  isNotBoolAll: isNotBoolAll,
  isNotNumAll: isNotNumAll,
  isNotIntAll: isNotIntAll,
  isNotStrAll: isNotStrAll,
  isNotFuncAll: isNotFuncAll,
  isNotObjAll: isNotObjAll,
  isNotObjTypeAll: isNotObjTypeAll,
  isNotExceptAll: isNotExceptAll,
  isNotEmptyObjAll: isNotEmptyObjAll
};