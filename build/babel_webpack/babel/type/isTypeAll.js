"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyObjAll = exports.isNotExceptAll = exports.isNotObjTypeAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isEmptyObjAll = exports.isExceptAll = exports.isObjTypeAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotExceptionAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArrayTypeAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectTypeAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isExceptionAll = exports.isRegExpAll = exports.isDateAll = exports.isArrayTypeAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectTypeAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports._isTypeAllCheckFunc = exports._isTypeArray = void 0;

var _isType = require("../type/isType.js");

var _isException = require("../type/isException.js");

var _isSymbol = require("../type/isSymbol.js");

var _isMap = require("../type/isMap.js");

var _isSet = require("../type/isSet.js");

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

exports._isTypeArray = _isTypeArray;

var _isTypeAllCheckFunc = function _isTypeAllCheckFunc(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _isTypeArray(func, args);
  };
};

exports._isTypeAllCheckFunc = _isTypeAllCheckFunc;

var isUndefinedAll = _isTypeAllCheckFunc(_isType.isUndefined);

exports.isUndefinedAll = isUndefinedAll;

var isNullAll = _isTypeAllCheckFunc(_isType.isNull);

exports.isNullAll = isNullAll;

var isNaNStrictAll = _isTypeAllCheckFunc(_isType.isNaNStrict);

exports.isNaNStrictAll = isNaNStrictAll;

var isBooleanAll = _isTypeAllCheckFunc(_isType.isBoolean);

exports.isBooleanAll = isBooleanAll;

var isNumberAll = _isTypeAllCheckFunc(_isType.isNumber);

exports.isNumberAll = isNumberAll;

var isIntegerAll = _isTypeAllCheckFunc(_isType.isInteger);

exports.isIntegerAll = isIntegerAll;

var isStringAll = _isTypeAllCheckFunc(_isType.isString);

exports.isStringAll = isStringAll;

var isFunctionAll = _isTypeAllCheckFunc(_isType.isFunction);

exports.isFunctionAll = isFunctionAll;

var isObjectAll = _isTypeAllCheckFunc(_isType.isObject);

exports.isObjectAll = isObjectAll;

var isObjectTypeAll = _isTypeAllCheckFunc(_isType.isObjectType);

exports.isObjectTypeAll = isObjectTypeAll;

var isModuleAll = _isTypeAllCheckFunc(_isType.isModule);

exports.isModuleAll = isModuleAll;

var isArrayAll = _isTypeAllCheckFunc(_isType.isArray);

exports.isArrayAll = isArrayAll;

var isArrayTypeAll = _isTypeAllCheckFunc(_isType.isArrayType);

exports.isArrayTypeAll = isArrayTypeAll;

var isDateAll = _isTypeAllCheckFunc(_isType.isDate);

exports.isDateAll = isDateAll;

var isRegExpAll = _isTypeAllCheckFunc(_isType.isRegExp);

exports.isRegExpAll = isRegExpAll;

var isExceptionAll = _isTypeAllCheckFunc(_isException.isException);

exports.isExceptionAll = isExceptionAll;

var isBooleanObjectAll = _isTypeAllCheckFunc(_isType.isBooleanObject);

exports.isBooleanObjectAll = isBooleanObjectAll;

var isNumberObjectAll = _isTypeAllCheckFunc(_isType.isNumberObject);

exports.isNumberObjectAll = isNumberObjectAll;

var isStringObjectAll = _isTypeAllCheckFunc(_isType.isStringObject);

exports.isStringObjectAll = isStringObjectAll;

var isEmptyObjectAll = _isTypeAllCheckFunc(_isType.isEmptyObject);

exports.isEmptyObjectAll = isEmptyObjectAll;

var isEmptyArrayAll = _isTypeAllCheckFunc(_isType.isEmptyArray);

exports.isEmptyArrayAll = isEmptyArrayAll;

var isSymbolAll = _isTypeAllCheckFunc(_isSymbol.isSymbol);

exports.isSymbolAll = isSymbolAll;

var isMapAll = _isTypeAllCheckFunc(_isMap.isMap);

exports.isMapAll = isMapAll;

var isWeakMapAll = _isTypeAllCheckFunc(_isMap.isWeakMap);

exports.isWeakMapAll = isWeakMapAll;

var isSetAll = _isTypeAllCheckFunc(_isSet.isSet);

exports.isSetAll = isSetAll;

var isWeakSetAll = _isTypeAllCheckFunc(_isSet.isWeakSet);

exports.isWeakSetAll = isWeakSetAll;

var isNotUndefinedAll = _isTypeAllCheckFunc(_isType.isNotUndefined);

exports.isNotUndefinedAll = isNotUndefinedAll;

var isNotNullAll = _isTypeAllCheckFunc(_isType.isNotNull);

exports.isNotNullAll = isNotNullAll;

var isNotNaNStrictAll = _isTypeAllCheckFunc(_isType.isNotNaNStrict);

exports.isNotNaNStrictAll = isNotNaNStrictAll;

var isNotBooleanAll = _isTypeAllCheckFunc(_isType.isNotBoolean);

exports.isNotBooleanAll = isNotBooleanAll;

var isNotNumberAll = _isTypeAllCheckFunc(_isType.isNotNumber);

exports.isNotNumberAll = isNotNumberAll;

var isNotIntegerAll = _isTypeAllCheckFunc(_isType.isNotInteger);

exports.isNotIntegerAll = isNotIntegerAll;

var isNotStringAll = _isTypeAllCheckFunc(_isType.isNotString);

exports.isNotStringAll = isNotStringAll;

var isNotFunctionAll = _isTypeAllCheckFunc(_isType.isNotFunction);

exports.isNotFunctionAll = isNotFunctionAll;

var isNotObjectAll = _isTypeAllCheckFunc(_isType.isNotObject);

exports.isNotObjectAll = isNotObjectAll;

var isNotObjectTypeAll = _isTypeAllCheckFunc(_isType.isNotObjectType);

exports.isNotObjectTypeAll = isNotObjectTypeAll;

var isNotModuleAll = _isTypeAllCheckFunc(_isType.isNotModule);

exports.isNotModuleAll = isNotModuleAll;

var isNotArrayAll = _isTypeAllCheckFunc(_isType.isNotArray);

exports.isNotArrayAll = isNotArrayAll;

var isNotArrayTypeAll = _isTypeAllCheckFunc(_isType.isNotArrayType);

exports.isNotArrayTypeAll = isNotArrayTypeAll;

var isNotDateAll = _isTypeAllCheckFunc(_isType.isNotDate);

exports.isNotDateAll = isNotDateAll;

var isNotRegExpAll = _isTypeAllCheckFunc(_isType.isNotRegExp);

exports.isNotRegExpAll = isNotRegExpAll;

var isNotExceptionAll = _isTypeAllCheckFunc(_isException.isNotException);

exports.isNotExceptionAll = isNotExceptionAll;

var isNotBooleanObjectAll = _isTypeAllCheckFunc(_isType.isNotBooleanObject);

exports.isNotBooleanObjectAll = isNotBooleanObjectAll;

var isNotNumberObjectAll = _isTypeAllCheckFunc(_isType.isNotNumberObject);

exports.isNotNumberObjectAll = isNotNumberObjectAll;

var isNotStringObjectAll = _isTypeAllCheckFunc(_isType.isNotStringObject);

exports.isNotStringObjectAll = isNotStringObjectAll;

var isNotEmptyObjectAll = _isTypeAllCheckFunc(_isType.isNotEmptyObject);

exports.isNotEmptyObjectAll = isNotEmptyObjectAll;

var isNotEmptyArrayAll = _isTypeAllCheckFunc(_isType.isNotEmptyArray);

exports.isNotEmptyArrayAll = isNotEmptyArrayAll;

var isNotSymbolAll = _isTypeAllCheckFunc(_isSymbol.isNotSymbol);

exports.isNotSymbolAll = isNotSymbolAll;

var isNotMapAll = _isTypeAllCheckFunc(_isMap.isNotMap);

exports.isNotMapAll = isNotMapAll;

var isNotWeakMapAll = _isTypeAllCheckFunc(_isMap.isNotWeakMap);

exports.isNotWeakMapAll = isNotWeakMapAll;

var isNotSetAll = _isTypeAllCheckFunc(_isSet.isNotSet);

exports.isNotSetAll = isNotSetAll;

var isNotWeakSetAll = _isTypeAllCheckFunc(_isSet.isNotWeakSet);

exports.isNotWeakSetAll = isNotWeakSetAll;
var isUndefAll = isUndefinedAll;
exports.isUndefAll = isUndefAll;
var isBoolAll = isBooleanAll;
exports.isBoolAll = isBoolAll;
var isNumAll = isNumberAll;
exports.isNumAll = isNumAll;
var isIntAll = isIntegerAll;
exports.isIntAll = isIntAll;
var isStrAll = isStringAll;
exports.isStrAll = isStrAll;
var isFuncAll = isFunctionAll;
exports.isFuncAll = isFuncAll;
var isObjAll = isObjectAll;
exports.isObjAll = isObjAll;
var isObjTypeAll = isObjectTypeAll;
exports.isObjTypeAll = isObjTypeAll;
var isExceptAll = isExceptionAll;
exports.isExceptAll = isExceptAll;
var isEmptyObjAll = isEmptyObjectAll;
exports.isEmptyObjAll = isEmptyObjAll;
var isNotUndefAll = isNotUndefinedAll;
exports.isNotUndefAll = isNotUndefAll;
var isNotBoolAll = isNotBooleanAll;
exports.isNotBoolAll = isNotBoolAll;
var isNotNumAll = isNotNumberAll;
exports.isNotNumAll = isNotNumAll;
var isNotIntAll = isNotIntegerAll;
exports.isNotIntAll = isNotIntAll;
var isNotStrAll = isNotStringAll;
exports.isNotStrAll = isNotStrAll;
var isNotFuncAll = isNotFunctionAll;
exports.isNotFuncAll = isNotFuncAll;
var isNotObjAll = isNotObjectAll;
exports.isNotObjAll = isNotObjAll;
var isNotObjTypeAll = isNotObjectTypeAll;
exports.isNotObjTypeAll = isNotObjTypeAll;
var isNotExceptAll = isNotExceptionAll;
exports.isNotExceptAll = isNotExceptAll;
var isNotEmptyObjAll = isNotEmptyObjectAll;
exports.isNotEmptyObjAll = isNotEmptyObjAll;
var _default = {
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
  isModuleAll: isModuleAll,
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
  isNotModuleAll: isNotModuleAll,
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
exports["default"] = _default;