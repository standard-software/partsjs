"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isExceptionAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = exports.isNotSymbol = exports.isSymbol = exports.isNotException = exports.isException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = void 0;
exports["default"] = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotExceptionAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotRegExpAll = exports.isNotDateAll = void 0;

var _isType = _interopRequireDefault(require("./isType.js"));

var _isException = _interopRequireDefault(require("./isException.js"));

var _isSymbol = _interopRequireDefault(require("./isSymbol.js"));

var _isMap = _interopRequireDefault(require("./isMap.js"));

var _isSet = _interopRequireDefault(require("./isSet.js"));

var _isTypeAll = _interopRequireDefault(require("./isTypeAll.js"));

var _isTypeArray = _interopRequireDefault(require("./isTypeArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var objectToString = _isType["default"].objectToString,
    isUndefined = _isType["default"].isUndefined,
    isNull = _isType["default"].isNull,
    isNaNStrict = _isType["default"].isNaNStrict,
    isBoolean = _isType["default"].isBoolean,
    isNumber = _isType["default"].isNumber,
    isInteger = _isType["default"].isInteger,
    isString = _isType["default"].isString,
    isFunction = _isType["default"].isFunction,
    isObject = _isType["default"].isObject,
    isObjectNormal = _isType["default"].isObjectNormal,
    isObjectFromNull = _isType["default"].isObjectFromNull,
    isObjectLike = _isType["default"].isObjectLike,
    isModule = _isType["default"].isModule,
    isArray = _isType["default"].isArray,
    isArraySeries = _isType["default"].isArraySeries,
    isDate = _isType["default"].isDate,
    isRegExp = _isType["default"].isRegExp,
    isBooleanObject = _isType["default"].isBooleanObject,
    isNumberObject = _isType["default"].isNumberObject,
    isStringObject = _isType["default"].isStringObject,
    isEmptyObject = _isType["default"].isEmptyObject,
    isEmptyArray = _isType["default"].isEmptyArray,
    isNotUndefined = _isType["default"].isNotUndefined,
    isNotNull = _isType["default"].isNotNull,
    isNotNaNStrict = _isType["default"].isNotNaNStrict,
    isNotBoolean = _isType["default"].isNotBoolean,
    isNotNumber = _isType["default"].isNotNumber,
    isNotInteger = _isType["default"].isNotInteger,
    isNotString = _isType["default"].isNotString,
    isNotFunction = _isType["default"].isNotFunction,
    isNotObject = _isType["default"].isNotObject,
    isNotObjectNormal = _isType["default"].isNotObjectNormal,
    isNotObjectFromNull = _isType["default"].isNotObjectFromNull,
    isNotObjectLike = _isType["default"].isNotObjectLike,
    isNotModule = _isType["default"].isNotModule,
    isNotArray = _isType["default"].isNotArray,
    isNotArraySeries = _isType["default"].isNotArraySeries,
    isNotDate = _isType["default"].isNotDate,
    isNotRegExp = _isType["default"].isNotRegExp,
    isNotBooleanObject = _isType["default"].isNotBooleanObject,
    isNotNumberObject = _isType["default"].isNotNumberObject,
    isNotStringObject = _isType["default"].isNotStringObject,
    isNotEmptyObject = _isType["default"].isNotEmptyObject,
    isNotEmptyArray = _isType["default"].isNotEmptyArray;
exports.isNotEmptyArray = isNotEmptyArray;
exports.isNotEmptyObject = isNotEmptyObject;
exports.isNotStringObject = isNotStringObject;
exports.isNotNumberObject = isNotNumberObject;
exports.isNotBooleanObject = isNotBooleanObject;
exports.isNotRegExp = isNotRegExp;
exports.isNotDate = isNotDate;
exports.isNotArraySeries = isNotArraySeries;
exports.isNotArray = isNotArray;
exports.isNotModule = isNotModule;
exports.isNotObjectLike = isNotObjectLike;
exports.isNotObjectFromNull = isNotObjectFromNull;
exports.isNotObjectNormal = isNotObjectNormal;
exports.isNotObject = isNotObject;
exports.isNotFunction = isNotFunction;
exports.isNotString = isNotString;
exports.isNotInteger = isNotInteger;
exports.isNotNumber = isNotNumber;
exports.isNotBoolean = isNotBoolean;
exports.isNotNaNStrict = isNotNaNStrict;
exports.isNotNull = isNotNull;
exports.isNotUndefined = isNotUndefined;
exports.isEmptyArray = isEmptyArray;
exports.isEmptyObject = isEmptyObject;
exports.isStringObject = isStringObject;
exports.isNumberObject = isNumberObject;
exports.isBooleanObject = isBooleanObject;
exports.isRegExp = isRegExp;
exports.isDate = isDate;
exports.isArraySeries = isArraySeries;
exports.isArray = isArray;
exports.isModule = isModule;
exports.isObjectLike = isObjectLike;
exports.isObjectFromNull = isObjectFromNull;
exports.isObjectNormal = isObjectNormal;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isInteger = isInteger;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isNaNStrict = isNaNStrict;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.objectToString = objectToString;
var isException = _isException["default"].isException,
    isNotException = _isException["default"].isNotException;
exports.isNotException = isNotException;
exports.isException = isException;
var isSymbol = _isSymbol["default"].isSymbol,
    isNotSymbol = _isSymbol["default"].isNotSymbol;
exports.isNotSymbol = isNotSymbol;
exports.isSymbol = isSymbol;
var isMap = _isMap["default"].isMap,
    isWeakMap = _isMap["default"].isWeakMap,
    isNotMap = _isMap["default"].isNotMap,
    isNotWeakMap = _isMap["default"].isNotWeakMap;
exports.isNotWeakMap = isNotWeakMap;
exports.isNotMap = isNotMap;
exports.isWeakMap = isWeakMap;
exports.isMap = isMap;
var isSet = _isSet["default"].isSet,
    isWeakSet = _isSet["default"].isWeakSet,
    isNotSet = _isSet["default"].isNotSet,
    isNotWeakSet = _isSet["default"].isNotWeakSet;
exports.isNotWeakSet = isNotWeakSet;
exports.isNotSet = isNotSet;
exports.isWeakSet = isWeakSet;
exports.isSet = isSet;
var isUndefinedAll = _isTypeAll["default"].isUndefinedAll,
    isNullAll = _isTypeAll["default"].isNullAll,
    isNaNStrictAll = _isTypeAll["default"].isNaNStrictAll,
    isBooleanAll = _isTypeAll["default"].isBooleanAll,
    isNumberAll = _isTypeAll["default"].isNumberAll,
    isIntegerAll = _isTypeAll["default"].isIntegerAll,
    isStringAll = _isTypeAll["default"].isStringAll,
    isFunctionAll = _isTypeAll["default"].isFunctionAll,
    isObjectAll = _isTypeAll["default"].isObjectAll,
    isObjectNormalAll = _isTypeAll["default"].isObjectNormalAll,
    isObjectFromNullAll = _isTypeAll["default"].isObjectFromNullAll,
    isObjectLikeAll = _isTypeAll["default"].isObjectLikeAll,
    isModuleAll = _isTypeAll["default"].isModuleAll,
    isArrayAll = _isTypeAll["default"].isArrayAll,
    isArraySeriesAll = _isTypeAll["default"].isArraySeriesAll,
    isDateAll = _isTypeAll["default"].isDateAll,
    isRegExpAll = _isTypeAll["default"].isRegExpAll,
    isBooleanObjectAll = _isTypeAll["default"].isBooleanObjectAll,
    isNumberObjectAll = _isTypeAll["default"].isNumberObjectAll,
    isStringObjectAll = _isTypeAll["default"].isStringObjectAll,
    isEmptyObjectAll = _isTypeAll["default"].isEmptyObjectAll,
    isEmptyArrayAll = _isTypeAll["default"].isEmptyArrayAll,
    isExceptionAll = _isTypeAll["default"].isExceptionAll,
    isSymbolAll = _isTypeAll["default"].isSymbolAll,
    isMapAll = _isTypeAll["default"].isMapAll,
    isWeakMapAll = _isTypeAll["default"].isWeakMapAll,
    isSetAll = _isTypeAll["default"].isSetAll,
    isWeakSetAll = _isTypeAll["default"].isWeakSetAll,
    isNotUndefinedAll = _isTypeAll["default"].isNotUndefinedAll,
    isNotNullAll = _isTypeAll["default"].isNotNullAll,
    isNotNaNStrictAll = _isTypeAll["default"].isNotNaNStrictAll,
    isNotBooleanAll = _isTypeAll["default"].isNotBooleanAll,
    isNotNumberAll = _isTypeAll["default"].isNotNumberAll,
    isNotIntegerAll = _isTypeAll["default"].isNotIntegerAll,
    isNotStringAll = _isTypeAll["default"].isNotStringAll,
    isNotFunctionAll = _isTypeAll["default"].isNotFunctionAll,
    isNotObjectAll = _isTypeAll["default"].isNotObjectAll,
    isNotObjectNormalAll = _isTypeAll["default"].isNotObjectNormalAll,
    isNotObjectFromNullAll = _isTypeAll["default"].isNotObjectFromNullAll,
    isNotObjectLikeAll = _isTypeAll["default"].isNotObjectLikeAll,
    isNotModuleAll = _isTypeAll["default"].isNotModuleAll,
    isNotArrayAll = _isTypeAll["default"].isNotArrayAll,
    isNotArraySeriesAll = _isTypeAll["default"].isNotArraySeriesAll,
    isNotDateAll = _isTypeAll["default"].isNotDateAll,
    isNotRegExpAll = _isTypeAll["default"].isNotRegExpAll,
    isNotBooleanObjectAll = _isTypeAll["default"].isNotBooleanObjectAll,
    isNotNumberObjectAll = _isTypeAll["default"].isNotNumberObjectAll,
    isNotStringObjectAll = _isTypeAll["default"].isNotStringObjectAll,
    isNotEmptyObjectAll = _isTypeAll["default"].isNotEmptyObjectAll,
    isNotEmptyArrayAll = _isTypeAll["default"].isNotEmptyArrayAll,
    isNotExceptionAll = _isTypeAll["default"].isNotExceptionAll,
    isNotSymbolAll = _isTypeAll["default"].isNotSymbolAll,
    isNotMapAll = _isTypeAll["default"].isNotMapAll,
    isNotWeakMapAll = _isTypeAll["default"].isNotWeakMapAll,
    isNotSetAll = _isTypeAll["default"].isNotSetAll,
    isNotWeakSetAll = _isTypeAll["default"].isNotWeakSetAll;
exports.isNotWeakSetAll = isNotWeakSetAll;
exports.isNotSetAll = isNotSetAll;
exports.isNotWeakMapAll = isNotWeakMapAll;
exports.isNotMapAll = isNotMapAll;
exports.isNotSymbolAll = isNotSymbolAll;
exports.isNotExceptionAll = isNotExceptionAll;
exports.isNotEmptyArrayAll = isNotEmptyArrayAll;
exports.isNotEmptyObjectAll = isNotEmptyObjectAll;
exports.isNotStringObjectAll = isNotStringObjectAll;
exports.isNotNumberObjectAll = isNotNumberObjectAll;
exports.isNotBooleanObjectAll = isNotBooleanObjectAll;
exports.isNotRegExpAll = isNotRegExpAll;
exports.isNotDateAll = isNotDateAll;
exports.isNotArraySeriesAll = isNotArraySeriesAll;
exports.isNotArrayAll = isNotArrayAll;
exports.isNotModuleAll = isNotModuleAll;
exports.isNotObjectLikeAll = isNotObjectLikeAll;
exports.isNotObjectFromNullAll = isNotObjectFromNullAll;
exports.isNotObjectNormalAll = isNotObjectNormalAll;
exports.isNotObjectAll = isNotObjectAll;
exports.isNotFunctionAll = isNotFunctionAll;
exports.isNotStringAll = isNotStringAll;
exports.isNotIntegerAll = isNotIntegerAll;
exports.isNotNumberAll = isNotNumberAll;
exports.isNotBooleanAll = isNotBooleanAll;
exports.isNotNaNStrictAll = isNotNaNStrictAll;
exports.isNotNullAll = isNotNullAll;
exports.isNotUndefinedAll = isNotUndefinedAll;
exports.isWeakSetAll = isWeakSetAll;
exports.isSetAll = isSetAll;
exports.isWeakMapAll = isWeakMapAll;
exports.isMapAll = isMapAll;
exports.isSymbolAll = isSymbolAll;
exports.isExceptionAll = isExceptionAll;
exports.isEmptyArrayAll = isEmptyArrayAll;
exports.isEmptyObjectAll = isEmptyObjectAll;
exports.isStringObjectAll = isStringObjectAll;
exports.isNumberObjectAll = isNumberObjectAll;
exports.isBooleanObjectAll = isBooleanObjectAll;
exports.isRegExpAll = isRegExpAll;
exports.isDateAll = isDateAll;
exports.isArraySeriesAll = isArraySeriesAll;
exports.isArrayAll = isArrayAll;
exports.isModuleAll = isModuleAll;
exports.isObjectLikeAll = isObjectLikeAll;
exports.isObjectFromNullAll = isObjectFromNullAll;
exports.isObjectNormalAll = isObjectNormalAll;
exports.isObjectAll = isObjectAll;
exports.isFunctionAll = isFunctionAll;
exports.isStringAll = isStringAll;
exports.isIntegerAll = isIntegerAll;
exports.isNumberAll = isNumberAll;
exports.isBooleanAll = isBooleanAll;
exports.isNaNStrictAll = isNaNStrictAll;
exports.isNullAll = isNullAll;
exports.isUndefinedAll = isUndefinedAll;
var isUndefinedArray = _isTypeArray["default"].isUndefinedArray,
    isNullArray = _isTypeArray["default"].isNullArray,
    isNaNStrictArray = _isTypeArray["default"].isNaNStrictArray,
    isBooleanArray = _isTypeArray["default"].isBooleanArray,
    isNumberArray = _isTypeArray["default"].isNumberArray,
    isIntegerArray = _isTypeArray["default"].isIntegerArray,
    isStringArray = _isTypeArray["default"].isStringArray,
    isFunctionArray = _isTypeArray["default"].isFunctionArray,
    isObjectArray = _isTypeArray["default"].isObjectArray,
    isObjectNormalArray = _isTypeArray["default"].isObjectNormalArray,
    isObjectFromNullArray = _isTypeArray["default"].isObjectFromNullArray,
    isObjectLikeArray = _isTypeArray["default"].isObjectLikeArray,
    isModuleArray = _isTypeArray["default"].isModuleArray,
    isArrayArray = _isTypeArray["default"].isArrayArray,
    isArraySeriesArray = _isTypeArray["default"].isArraySeriesArray,
    isDateArray = _isTypeArray["default"].isDateArray,
    isRegExpArray = _isTypeArray["default"].isRegExpArray,
    isExceptionArray = _isTypeArray["default"].isExceptionArray,
    isBooleanObjectArray = _isTypeArray["default"].isBooleanObjectArray,
    isNumberObjectArray = _isTypeArray["default"].isNumberObjectArray,
    isStringObjectArray = _isTypeArray["default"].isStringObjectArray,
    isEmptyObjectArray = _isTypeArray["default"].isEmptyObjectArray,
    isEmptyArrayArray = _isTypeArray["default"].isEmptyArrayArray,
    isSymbolArray = _isTypeArray["default"].isSymbolArray,
    isMapArray = _isTypeArray["default"].isMapArray,
    isWeakMapArray = _isTypeArray["default"].isWeakMapArray,
    isSetArray = _isTypeArray["default"].isSetArray,
    isWeakSetArray = _isTypeArray["default"].isWeakSetArray,
    isNotUndefinedArray = _isTypeArray["default"].isNotUndefinedArray,
    isNotNullArray = _isTypeArray["default"].isNotNullArray,
    isNotNaNStrictArray = _isTypeArray["default"].isNotNaNStrictArray,
    isNotBooleanArray = _isTypeArray["default"].isNotBooleanArray,
    isNotNumberArray = _isTypeArray["default"].isNotNumberArray,
    isNotIntegerArray = _isTypeArray["default"].isNotIntegerArray,
    isNotStringArray = _isTypeArray["default"].isNotStringArray,
    isNotFunctionArray = _isTypeArray["default"].isNotFunctionArray,
    isNotObjectArray = _isTypeArray["default"].isNotObjectArray,
    isNotObjectNormalArray = _isTypeArray["default"].isNotObjectNormalArray,
    isNotObjectFromNullArray = _isTypeArray["default"].isNotObjectFromNullArray,
    isNotObjectLikeArray = _isTypeArray["default"].isNotObjectLikeArray,
    isNotModuleArray = _isTypeArray["default"].isNotModuleArray,
    isNotArrayArray = _isTypeArray["default"].isNotArrayArray,
    isNotArraySeriesArray = _isTypeArray["default"].isNotArraySeriesArray,
    isNotDateArray = _isTypeArray["default"].isNotDateArray,
    isNotRegExpArray = _isTypeArray["default"].isNotRegExpArray,
    isNotExceptionArray = _isTypeArray["default"].isNotExceptionArray,
    isNotBooleanObjectArray = _isTypeArray["default"].isNotBooleanObjectArray,
    isNotNumberObjectArray = _isTypeArray["default"].isNotNumberObjectArray,
    isNotStringObjectArray = _isTypeArray["default"].isNotStringObjectArray,
    isNotEmptyObjectArray = _isTypeArray["default"].isNotEmptyObjectArray,
    isNotEmptyArrayArray = _isTypeArray["default"].isNotEmptyArrayArray,
    isNotSymbolArray = _isTypeArray["default"].isNotSymbolArray,
    isNotMapArray = _isTypeArray["default"].isNotMapArray,
    isNotWeakMapArray = _isTypeArray["default"].isNotWeakMapArray,
    isNotSetArray = _isTypeArray["default"].isNotSetArray,
    isNotWeakSetArray = _isTypeArray["default"].isNotWeakSetArray;
exports.isNotWeakSetArray = isNotWeakSetArray;
exports.isNotSetArray = isNotSetArray;
exports.isNotWeakMapArray = isNotWeakMapArray;
exports.isNotMapArray = isNotMapArray;
exports.isNotSymbolArray = isNotSymbolArray;
exports.isNotEmptyArrayArray = isNotEmptyArrayArray;
exports.isNotEmptyObjectArray = isNotEmptyObjectArray;
exports.isNotStringObjectArray = isNotStringObjectArray;
exports.isNotNumberObjectArray = isNotNumberObjectArray;
exports.isNotBooleanObjectArray = isNotBooleanObjectArray;
exports.isNotExceptionArray = isNotExceptionArray;
exports.isNotRegExpArray = isNotRegExpArray;
exports.isNotDateArray = isNotDateArray;
exports.isNotArraySeriesArray = isNotArraySeriesArray;
exports.isNotArrayArray = isNotArrayArray;
exports.isNotModuleArray = isNotModuleArray;
exports.isNotObjectLikeArray = isNotObjectLikeArray;
exports.isNotObjectFromNullArray = isNotObjectFromNullArray;
exports.isNotObjectNormalArray = isNotObjectNormalArray;
exports.isNotObjectArray = isNotObjectArray;
exports.isNotFunctionArray = isNotFunctionArray;
exports.isNotStringArray = isNotStringArray;
exports.isNotIntegerArray = isNotIntegerArray;
exports.isNotNumberArray = isNotNumberArray;
exports.isNotBooleanArray = isNotBooleanArray;
exports.isNotNaNStrictArray = isNotNaNStrictArray;
exports.isNotNullArray = isNotNullArray;
exports.isNotUndefinedArray = isNotUndefinedArray;
exports.isWeakSetArray = isWeakSetArray;
exports.isSetArray = isSetArray;
exports.isWeakMapArray = isWeakMapArray;
exports.isMapArray = isMapArray;
exports.isSymbolArray = isSymbolArray;
exports.isEmptyArrayArray = isEmptyArrayArray;
exports.isEmptyObjectArray = isEmptyObjectArray;
exports.isStringObjectArray = isStringObjectArray;
exports.isNumberObjectArray = isNumberObjectArray;
exports.isBooleanObjectArray = isBooleanObjectArray;
exports.isExceptionArray = isExceptionArray;
exports.isRegExpArray = isRegExpArray;
exports.isDateArray = isDateArray;
exports.isArraySeriesArray = isArraySeriesArray;
exports.isArrayArray = isArrayArray;
exports.isModuleArray = isModuleArray;
exports.isObjectLikeArray = isObjectLikeArray;
exports.isObjectFromNullArray = isObjectFromNullArray;
exports.isObjectNormalArray = isObjectNormalArray;
exports.isObjectArray = isObjectArray;
exports.isFunctionArray = isFunctionArray;
exports.isStringArray = isStringArray;
exports.isIntegerArray = isIntegerArray;
exports.isNumberArray = isNumberArray;
exports.isBooleanArray = isBooleanArray;
exports.isNaNStrictArray = isNaNStrictArray;
exports.isNullArray = isNullArray;
exports.isUndefinedArray = isUndefinedArray;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // ...isTypeJs,
  objectToString: objectToString,
  isUndefined: isUndefined,
  isNull: isNull,
  isNaNStrict: isNaNStrict,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isInteger: isInteger,
  isString: isString,
  isFunction: isFunction,
  isObject: isObject,
  isObjectNormal: isObjectNormal,
  isObjectFromNull: isObjectFromNull,
  isObjectLike: isObjectLike,
  isModule: isModule,
  isArray: isArray,
  isArraySeries: isArraySeries,
  isDate: isDate,
  isRegExp: isRegExp,
  isBooleanObject: isBooleanObject,
  isNumberObject: isNumberObject,
  isStringObject: isStringObject,
  isEmptyObject: isEmptyObject,
  isEmptyArray: isEmptyArray,
  isNotUndefined: isNotUndefined,
  isNotNull: isNotNull,
  isNotNaNStrict: isNotNaNStrict,
  isNotBoolean: isNotBoolean,
  isNotNumber: isNotNumber,
  isNotInteger: isNotInteger,
  isNotString: isNotString,
  isNotFunction: isNotFunction,
  isNotObject: isNotObject,
  isNotObjectNormal: isNotObjectNormal,
  isNotObjectFromNull: isNotObjectFromNull,
  isNotObjectLike: isNotObjectLike,
  isNotModule: isNotModule,
  isNotArray: isNotArray,
  isNotArraySeries: isNotArraySeries,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotBooleanObject: isNotBooleanObject,
  isNotNumberObject: isNotNumberObject,
  isNotStringObject: isNotStringObject,
  isNotEmptyObject: isNotEmptyObject,
  isNotEmptyArray: isNotEmptyArray
}, _isException["default"]), _isSymbol["default"]), _isMap["default"]), _isSet["default"]), {}, {
  // isTypeAll
  isUndefinedAll: isUndefinedAll,
  isNullAll: isNullAll,
  isNaNStrictAll: isNaNStrictAll,
  isBooleanAll: isBooleanAll,
  isNumberAll: isNumberAll,
  isIntegerAll: isIntegerAll,
  isStringAll: isStringAll,
  isFunctionAll: isFunctionAll,
  isObjectAll: isObjectAll,
  isObjectNormalAll: isObjectNormalAll,
  isObjectFromNullAll: isObjectFromNullAll,
  isObjectLikeAll: isObjectLikeAll,
  isModuleAll: isModuleAll,
  isArrayAll: isArrayAll,
  isArraySeriesAll: isArraySeriesAll,
  isDateAll: isDateAll,
  isRegExpAll: isRegExpAll,
  isBooleanObjectAll: isBooleanObjectAll,
  isNumberObjectAll: isNumberObjectAll,
  isStringObjectAll: isStringObjectAll,
  isEmptyObjectAll: isEmptyObjectAll,
  isEmptyArrayAll: isEmptyArrayAll,
  isExceptionAll: isExceptionAll,
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
  isNotObjectNormalAll: isNotObjectNormalAll,
  isNotObjectFromNullAll: isNotObjectFromNullAll,
  isNotObjectLikeAll: isNotObjectLikeAll,
  isNotModuleAll: isNotModuleAll,
  isNotArrayAll: isNotArrayAll,
  isNotArraySeriesAll: isNotArraySeriesAll,
  isNotDateAll: isNotDateAll,
  isNotRegExpAll: isNotRegExpAll,
  isNotBooleanObjectAll: isNotBooleanObjectAll,
  isNotNumberObjectAll: isNotNumberObjectAll,
  isNotStringObjectAll: isNotStringObjectAll,
  isNotEmptyObjectAll: isNotEmptyObjectAll,
  isNotEmptyArrayAll: isNotEmptyArrayAll,
  isNotExceptionAll: isNotExceptionAll,
  isNotSymbolAll: isNotSymbolAll,
  isNotMapAll: isNotMapAll,
  isNotWeakMapAll: isNotWeakMapAll,
  isNotSetAll: isNotSetAll,
  isNotWeakSetAll: isNotWeakSetAll
}, _isTypeArray["default"]);

exports["default"] = _default;