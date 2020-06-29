"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyObjArray = exports.isNotExceptArray = exports.isNotObjTypeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isEmptyObjArray = exports.isExceptArray = exports.isObjTypeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArrayTypeArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectTypeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArrayTypeArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectTypeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports._isTypeArrayCheckFunc = void 0;

var _isType = require("../type/isType.js");

var _isException = require("../type/isException.js");

var _isSymbol = require("../type/isSymbol.js");

var _isMap = require("../type/isMap.js");

var _isSet = require("../type/isSet.js");

var _isTypeAll = require("../type/isTypeAll.js");

var _isTypeArrayCheckFunc = function _isTypeArrayCheckFunc(func) {
  return function (array) {
    if (!(0, _isType.isArray)(array)) {
      return false;
    }

    return (0, _isTypeAll._isTypeArray)(func, array);
  };
};

exports._isTypeArrayCheckFunc = _isTypeArrayCheckFunc;

var isUndefinedArray = _isTypeArrayCheckFunc(_isType.isUndefined);

exports.isUndefinedArray = isUndefinedArray;

var isNullArray = _isTypeArrayCheckFunc(_isType.isNull);

exports.isNullArray = isNullArray;

var isNaNStrictArray = _isTypeArrayCheckFunc(_isType.isNaNStrict);

exports.isNaNStrictArray = isNaNStrictArray;

var isBooleanArray = _isTypeArrayCheckFunc(_isType.isBoolean);

exports.isBooleanArray = isBooleanArray;

var isNumberArray = _isTypeArrayCheckFunc(_isType.isNumber);

exports.isNumberArray = isNumberArray;

var isIntegerArray = _isTypeArrayCheckFunc(_isType.isInteger);

exports.isIntegerArray = isIntegerArray;

var isStringArray = _isTypeArrayCheckFunc(_isType.isString);

exports.isStringArray = isStringArray;

var isFunctionArray = _isTypeArrayCheckFunc(_isType.isFunction);

exports.isFunctionArray = isFunctionArray;

var isObjectArray = _isTypeArrayCheckFunc(_isType.isObject);

exports.isObjectArray = isObjectArray;

var isObjectNormalArray = _isTypeArrayCheckFunc(_isType.isObjectNormal);

exports.isObjectNormalArray = isObjectNormalArray;

var isObjectFromNullArray = _isTypeArrayCheckFunc(_isType.isObjectFromNull);

exports.isObjectFromNullArray = isObjectFromNullArray;

var isObjectTypeArray = _isTypeArrayCheckFunc(_isType.isObjectType);

exports.isObjectTypeArray = isObjectTypeArray;

var isModuleArray = _isTypeArrayCheckFunc(_isType.isModule);

exports.isModuleArray = isModuleArray;

var isArrayArray = _isTypeArrayCheckFunc(_isType.isArray);

exports.isArrayArray = isArrayArray;

var isArrayTypeArray = _isTypeArrayCheckFunc(_isType.isArrayType);

exports.isArrayTypeArray = isArrayTypeArray;

var isDateArray = _isTypeArrayCheckFunc(_isType.isDate);

exports.isDateArray = isDateArray;

var isRegExpArray = _isTypeArrayCheckFunc(_isType.isRegExp);

exports.isRegExpArray = isRegExpArray;

var isExceptionArray = _isTypeArrayCheckFunc(_isException.isException);

exports.isExceptionArray = isExceptionArray;

var isBooleanObjectArray = _isTypeArrayCheckFunc(_isType.isBooleanObject);

exports.isBooleanObjectArray = isBooleanObjectArray;

var isNumberObjectArray = _isTypeArrayCheckFunc(_isType.isNumberObject);

exports.isNumberObjectArray = isNumberObjectArray;

var isStringObjectArray = _isTypeArrayCheckFunc(_isType.isStringObject);

exports.isStringObjectArray = isStringObjectArray;

var isEmptyObjectArray = _isTypeArrayCheckFunc(_isType.isEmptyObject);

exports.isEmptyObjectArray = isEmptyObjectArray;

var isEmptyArrayArray = _isTypeArrayCheckFunc(_isType.isEmptyArray);

exports.isEmptyArrayArray = isEmptyArrayArray;

var isSymbolArray = _isTypeArrayCheckFunc(_isSymbol.isSymbol);

exports.isSymbolArray = isSymbolArray;

var isMapArray = _isTypeArrayCheckFunc(_isMap.isMap);

exports.isMapArray = isMapArray;

var isWeakMapArray = _isTypeArrayCheckFunc(_isMap.isWeakMap);

exports.isWeakMapArray = isWeakMapArray;

var isSetArray = _isTypeArrayCheckFunc(_isSet.isSet);

exports.isSetArray = isSetArray;

var isWeakSetArray = _isTypeArrayCheckFunc(_isSet.isWeakSet);

exports.isWeakSetArray = isWeakSetArray;

var isNotUndefinedArray = _isTypeArrayCheckFunc(_isType.isNotUndefined);

exports.isNotUndefinedArray = isNotUndefinedArray;

var isNotNullArray = _isTypeArrayCheckFunc(_isType.isNotNull);

exports.isNotNullArray = isNotNullArray;

var isNotNaNStrictArray = _isTypeArrayCheckFunc(_isType.isNotNaNStrict);

exports.isNotNaNStrictArray = isNotNaNStrictArray;

var isNotBooleanArray = _isTypeArrayCheckFunc(_isType.isNotBoolean);

exports.isNotBooleanArray = isNotBooleanArray;

var isNotNumberArray = _isTypeArrayCheckFunc(_isType.isNotNumber);

exports.isNotNumberArray = isNotNumberArray;

var isNotIntegerArray = _isTypeArrayCheckFunc(_isType.isNotInteger);

exports.isNotIntegerArray = isNotIntegerArray;

var isNotStringArray = _isTypeArrayCheckFunc(_isType.isNotString);

exports.isNotStringArray = isNotStringArray;

var isNotFunctionArray = _isTypeArrayCheckFunc(_isType.isNotFunction);

exports.isNotFunctionArray = isNotFunctionArray;

var isNotObjectArray = _isTypeArrayCheckFunc(_isType.isNotObject);

exports.isNotObjectArray = isNotObjectArray;

var isNotObjectNormalArray = _isTypeArrayCheckFunc(_isType.isNotObjectNormal);

exports.isNotObjectNormalArray = isNotObjectNormalArray;

var isNotObjectFromNullArray = _isTypeArrayCheckFunc(_isType.isNotObjectFromNull);

exports.isNotObjectFromNullArray = isNotObjectFromNullArray;

var isNotObjectTypeArray = _isTypeArrayCheckFunc(_isType.isNotObjectType);

exports.isNotObjectTypeArray = isNotObjectTypeArray;

var isNotModuleArray = _isTypeArrayCheckFunc(_isType.isNotModule);

exports.isNotModuleArray = isNotModuleArray;

var isNotArrayArray = _isTypeArrayCheckFunc(_isType.isNotArray);

exports.isNotArrayArray = isNotArrayArray;

var isNotArrayTypeArray = _isTypeArrayCheckFunc(_isType.isNotArrayType);

exports.isNotArrayTypeArray = isNotArrayTypeArray;

var isNotDateArray = _isTypeArrayCheckFunc(_isType.isNotDate);

exports.isNotDateArray = isNotDateArray;

var isNotRegExpArray = _isTypeArrayCheckFunc(_isType.isNotRegExp);

exports.isNotRegExpArray = isNotRegExpArray;

var isNotExceptionArray = _isTypeArrayCheckFunc(_isException.isNotException);

exports.isNotExceptionArray = isNotExceptionArray;

var isNotBooleanObjectArray = _isTypeArrayCheckFunc(_isType.isNotBooleanObject);

exports.isNotBooleanObjectArray = isNotBooleanObjectArray;

var isNotNumberObjectArray = _isTypeArrayCheckFunc(_isType.isNotNumberObject);

exports.isNotNumberObjectArray = isNotNumberObjectArray;

var isNotStringObjectArray = _isTypeArrayCheckFunc(_isType.isNotStringObject);

exports.isNotStringObjectArray = isNotStringObjectArray;

var isNotEmptyObjectArray = _isTypeArrayCheckFunc(_isType.isNotEmptyObject);

exports.isNotEmptyObjectArray = isNotEmptyObjectArray;

var isNotEmptyArrayArray = _isTypeArrayCheckFunc(_isType.isNotEmptyArray);

exports.isNotEmptyArrayArray = isNotEmptyArrayArray;

var isNotSymbolArray = _isTypeArrayCheckFunc(_isSymbol.isNotSymbol);

exports.isNotSymbolArray = isNotSymbolArray;

var isNotMapArray = _isTypeArrayCheckFunc(_isMap.isNotMap);

exports.isNotMapArray = isNotMapArray;

var isNotWeakMapArray = _isTypeArrayCheckFunc(_isMap.isNotWeakMap);

exports.isNotWeakMapArray = isNotWeakMapArray;

var isNotSetArray = _isTypeArrayCheckFunc(_isSet.isNotSet);

exports.isNotSetArray = isNotSetArray;

var isNotWeakSetArray = _isTypeArrayCheckFunc(_isSet.isNotWeakSet);

exports.isNotWeakSetArray = isNotWeakSetArray;
var isUndefArray = isUndefinedArray;
exports.isUndefArray = isUndefArray;
var isBoolArray = isBooleanArray;
exports.isBoolArray = isBoolArray;
var isNumArray = isNumberArray;
exports.isNumArray = isNumArray;
var isIntArray = isIntegerArray;
exports.isIntArray = isIntArray;
var isStrArray = isStringArray;
exports.isStrArray = isStrArray;
var isFuncArray = isFunctionArray;
exports.isFuncArray = isFuncArray;
var isObjArray = isObjectArray;
exports.isObjArray = isObjArray;
var isObjNormalArray = isObjectNormalArray;
exports.isObjNormalArray = isObjNormalArray;
var isObjFromNullArray = isObjectFromNullArray;
exports.isObjFromNullArray = isObjFromNullArray;
var isObjTypeArray = isObjectTypeArray;
exports.isObjTypeArray = isObjTypeArray;
var isExceptArray = isExceptionArray;
exports.isExceptArray = isExceptArray;
var isEmptyObjArray = isEmptyObjectArray;
exports.isEmptyObjArray = isEmptyObjArray;
var isNotUndefArray = isNotUndefinedArray;
exports.isNotUndefArray = isNotUndefArray;
var isNotBoolArray = isNotBooleanArray;
exports.isNotBoolArray = isNotBoolArray;
var isNotNumArray = isNotNumberArray;
exports.isNotNumArray = isNotNumArray;
var isNotIntArray = isNotIntegerArray;
exports.isNotIntArray = isNotIntArray;
var isNotStrArray = isNotStringArray;
exports.isNotStrArray = isNotStrArray;
var isNotFuncArray = isNotFunctionArray;
exports.isNotFuncArray = isNotFuncArray;
var isNotObjArray = isNotObjectArray;
exports.isNotObjArray = isNotObjArray;
var isNotObjNormalArray = isNotObjectNormalArray;
exports.isNotObjNormalArray = isNotObjNormalArray;
var isNotObjFromNullArray = isNotObjectFromNullArray;
exports.isNotObjFromNullArray = isNotObjFromNullArray;
var isNotObjTypeArray = isNotObjectTypeArray;
exports.isNotObjTypeArray = isNotObjTypeArray;
var isNotExceptArray = isNotExceptionArray;
exports.isNotExceptArray = isNotExceptArray;
var isNotEmptyObjArray = isNotEmptyObjectArray;
exports.isNotEmptyObjArray = isNotEmptyObjArray;
var _default = {
  isUndefinedArray: isUndefinedArray,
  isNullArray: isNullArray,
  isNaNStrictArray: isNaNStrictArray,
  isBooleanArray: isBooleanArray,
  isNumberArray: isNumberArray,
  isIntegerArray: isIntegerArray,
  isStringArray: isStringArray,
  isFunctionArray: isFunctionArray,
  isObjectArray: isObjectArray,
  isObjectNormalArray: isObjectNormalArray,
  isObjectFromNullArray: isObjectFromNullArray,
  isObjectTypeArray: isObjectTypeArray,
  isModuleArray: isModuleArray,
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
  isNotObjectNormalArray: isNotObjectNormalArray,
  isNotObjectFromNullArray: isNotObjectFromNullArray,
  isNotObjectTypeArray: isNotObjectTypeArray,
  isNotModuleArray: isNotModuleArray,
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
  isObjNormalArray: isObjNormalArray,
  isObjFromNullArray: isObjFromNullArray,
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
  isNotObjNormalArray: isNotObjNormalArray,
  isNotObjFromNullArray: isNotObjFromNullArray,
  isNotObjTypeArray: isNotObjTypeArray,
  isNotExceptArray: isNotExceptArray,
  isNotEmptyObjArray: isNotEmptyObjArray
};
exports["default"] = _default;