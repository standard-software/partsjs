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

var _require6 = require('../type/isTypeAll.js'),
    _isTypeArray = _require6._isTypeArray;

var _isTypeArrayCheckFunc = function _isTypeArrayCheckFunc(func) {
  return function (array) {
    if (!isArray(array)) {
      return false;
    }

    return _isTypeArray(func, array);
  };
};

var isUndefinedArray = _isTypeArrayCheckFunc(isUndefined);

var isNullArray = _isTypeArrayCheckFunc(isNull);

var isNaNStrictArray = _isTypeArrayCheckFunc(isNaNStrict);

var isBooleanArray = _isTypeArrayCheckFunc(isBoolean);

var isNumberArray = _isTypeArrayCheckFunc(isNumber);

var isIntegerArray = _isTypeArrayCheckFunc(isInteger);

var isStringArray = _isTypeArrayCheckFunc(isString);

var isFunctionArray = _isTypeArrayCheckFunc(isFunction);

var isObjectArray = _isTypeArrayCheckFunc(isObject);

var isObjectTypeArray = _isTypeArrayCheckFunc(isObjectType);

var isArrayArray = _isTypeArrayCheckFunc(isArray);

var isArrayTypeArray = _isTypeArrayCheckFunc(isArrayType);

var isDateArray = _isTypeArrayCheckFunc(isDate);

var isRegExpArray = _isTypeArrayCheckFunc(isRegExp);

var isExceptionArray = _isTypeArrayCheckFunc(isException);

var isBooleanObjectArray = _isTypeArrayCheckFunc(isBooleanObject);

var isNumberObjectArray = _isTypeArrayCheckFunc(isNumberObject);

var isStringObjectArray = _isTypeArrayCheckFunc(isStringObject);

var isEmptyObjectArray = _isTypeArrayCheckFunc(isEmptyObject);

var isEmptyArrayArray = _isTypeArrayCheckFunc(isEmptyArray);

var isSymbolArray = _isTypeArrayCheckFunc(isSymbol);

var isMapArray = _isTypeArrayCheckFunc(isMap);

var isWeakMapArray = _isTypeArrayCheckFunc(isWeakMap);

var isSetArray = _isTypeArrayCheckFunc(isSet);

var isWeakSetArray = _isTypeArrayCheckFunc(isWeakSet);

var isNotUndefinedArray = _isTypeArrayCheckFunc(isNotUndefined);

var isNotNullArray = _isTypeArrayCheckFunc(isNotNull);

var isNotNaNStrictArray = _isTypeArrayCheckFunc(isNotNaNStrict);

var isNotBooleanArray = _isTypeArrayCheckFunc(isNotBoolean);

var isNotNumberArray = _isTypeArrayCheckFunc(isNotNumber);

var isNotIntegerArray = _isTypeArrayCheckFunc(isNotInteger);

var isNotStringArray = _isTypeArrayCheckFunc(isNotString);

var isNotFunctionArray = _isTypeArrayCheckFunc(isNotFunction);

var isNotObjectArray = _isTypeArrayCheckFunc(isNotObject);

var isNotObjectTypeArray = _isTypeArrayCheckFunc(isNotObjectType);

var isNotArrayArray = _isTypeArrayCheckFunc(isNotArray);

var isNotArrayTypeArray = _isTypeArrayCheckFunc(isNotArrayType);

var isNotDateArray = _isTypeArrayCheckFunc(isNotDate);

var isNotRegExpArray = _isTypeArrayCheckFunc(isNotRegExp);

var isNotExceptionArray = _isTypeArrayCheckFunc(isNotException);

var isNotBooleanObjectArray = _isTypeArrayCheckFunc(isNotBooleanObject);

var isNotNumberObjectArray = _isTypeArrayCheckFunc(isNotNumberObject);

var isNotStringObjectArray = _isTypeArrayCheckFunc(isNotStringObject);

var isNotEmptyObjectArray = _isTypeArrayCheckFunc(isNotEmptyObject);

var isNotEmptyArrayArray = _isTypeArrayCheckFunc(isNotEmptyArray);

var isNotSymbolArray = _isTypeArrayCheckFunc(isNotSymbol);

var isNotMapArray = _isTypeArrayCheckFunc(isNotMap);

var isNotWeakMapArray = _isTypeArrayCheckFunc(isNotWeakMap);

var isNotSetArray = _isTypeArrayCheckFunc(isNotSet);

var isNotWeakSetArray = _isTypeArrayCheckFunc(isNotWeakSet);

var isUndefArray = isUndefinedArray;
var isBoolArray = isBooleanArray;
var isNumArray = isNumberArray;
var isIntArray = isIntegerArray;
var isStrArray = isStringArray;
var isFuncArray = isFunctionArray;
var isObjArray = isObjectArray;
var isObjTypeArray = isObjectTypeArray;
var isExceptArray = isExceptionArray;
var isEmptyObjArray = isEmptyObjectArray;
var isNotUndefArray = isNotUndefinedArray;
var isNotBoolArray = isNotBooleanArray;
var isNotNumArray = isNotNumberArray;
var isNotIntArray = isNotIntegerArray;
var isNotStrArray = isNotStringArray;
var isNotFuncArray = isNotFunctionArray;
var isNotObjArray = isNotObjectArray;
var isNotObjTypeArray = isNotObjectTypeArray;
var isNotExceptArray = isNotExceptionArray;
var isNotEmptyObjArray = isNotEmptyObjectArray;
module.exports = {
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
  isEmptyObjectArray: isEmptyObjectArray,
  isEmptyArrayArray: isEmptyArrayArray,
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
  isNotEmptyObjectArray: isNotEmptyObjectArray,
  isNotEmptyArrayArray: isNotEmptyArrayArray,
  isNotSymbolArray: isNotSymbolArray,
  isNotMapArray: isNotMapArray,
  isNotWeakMapArray: isNotWeakMapArray,
  isNotSetArray: isNotSetArray,
  isNotWeakSetArray: isNotWeakSetArray,
  isUndefArray: isUndefArray,
  isBoolArray: isBoolArray,
  isNumArray: isNumArray,
  isIntArray: isIntArray,
  isStrArray: isStrArray,
  isFuncArray: isFuncArray,
  isObjArray: isObjArray,
  isObjTypeArray: isObjTypeArray,
  isExceptArray: isExceptArray,
  isEmptyObjArray: isEmptyObjArray,
  isNotUndefArray: isNotUndefArray,
  isNotBoolArray: isNotBoolArray,
  isNotNumArray: isNotNumArray,
  isNotIntArray: isNotIntArray,
  isNotStrArray: isNotStrArray,
  isNotFuncArray: isNotFuncArray,
  isNotObjArray: isNotObjArray,
  isNotObjTypeArray: isNotObjTypeArray,
  isNotExceptArray: isNotExceptArray,
  isNotEmptyObjArray: isNotEmptyObjArray
};