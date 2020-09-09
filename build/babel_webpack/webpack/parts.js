(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["parts"] = factory();
	else
		root["parts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isExceptionAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isNotWeakMap = exports.isNotMap = exports.isNotSymbol = exports.isNotException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isWeakSet = exports.isSet = exports.isWeakMap = exports.isMap = exports.isSymbol = exports.isException = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = exports.isError = exports.platform = exports.root = exports.cloneDeep = exports.clone = exports.VERSION = void 0;
exports.isNotObjNormal = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isNotArrayType = exports.isNotObjectType = exports.isObjType = exports.isExcept = exports.isEmptyObj = exports.isObjLike = exports.isObjFromNull = exports.isObjNormal = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isArrayType = exports.isObjectType = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotExceptionArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isExceptionArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotExceptionAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = void 0;
exports.indexOfMatchAll = exports.allMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.indexOfMatchSome = exports.allMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.indexOfMatch = exports.allMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports.equalDeep = exports.equal = exports.Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.type = exports.isNotObjTypeArray = exports.isNotExceptArray = exports.isNotEmptyObjArray = exports.isNotObjLikeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isNotArrayTypeArray = exports.isNotObjectTypeArray = exports.isObjTypeArray = exports.isExceptArray = exports.isEmptyObjArray = exports.isObjLikeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isArrayTypeArray = exports.isObjectTypeArray = exports.isNotObjTypeAll = exports.isNotExceptAll = exports.isNotEmptyObjAll = exports.isNotObjLikeAll = exports.isNotObjFromNullAll = exports.isNotObjNormalAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isNotArrayTypeAll = exports.isNotObjectTypeAll = exports.isObjTypeAll = exports.isExceptAll = exports.isEmptyObjAll = exports.isObjLikeAll = exports.isObjFromNullAll = exports.isObjNormalAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isArrayTypeAll = exports.isObjectTypeAll = exports.isNotObjType = exports.isNotExcept = exports.isNotEmptyObj = exports.isNotObjLike = exports.isNotObjFromNull = void 0;
exports["default"] = exports.parts = exports.wsh = exports.consoleHook = exports.array = exports.object = exports.string = exports.number = exports.convert = exports.compare = exports.syntax = exports.test = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.setProp = exports.getProp = exports.fixProp = exports.inProp = exports.propCount = exports.copyProp = exports.objectToValueArray = exports.objectValues = exports.objectToKeyArray = exports.objectKeys = exports.objectToKeyValueArray = exports.objectEntries = exports.propertyList = exports.setProperty = exports.getProperty = exports.hasPrototype = exports.hasOwn = exports.has = exports.fixProperty = exports.inProperty = exports.propertyCount = exports.copyProperty = exports.splitDotItems = exports.splitCommaItems = exports.split = exports.isUpperCase = exports.isLowerCase = exports.replaceAll = exports.matchFormat = exports.randomInt = exports.inRange = exports.nearEqual = exports.round = exports.isOdd = exports.isEven = exports.isMultiples = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.numToStr = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.valToIntegerDefault = exports.valToInteger = exports.valToNumberDefault = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports.stringToInteger = exports.stringToNumberDefault = exports.stringToNumber = exports.valueToString = exports.numberToString = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = void 0;

var _polyfill2 = _interopRequireDefault(__webpack_require__(2));

var _root2 = _interopRequireDefault(__webpack_require__(3));

var _platform2 = _interopRequireDefault(__webpack_require__(9));

var _type2 = _interopRequireDefault(__webpack_require__(5));

var _typeAlias2 = _interopRequireDefault(__webpack_require__(60));

var _test2 = _interopRequireDefault(__webpack_require__(61));

var _syntax2 = _interopRequireDefault(__webpack_require__(37));

var _compare2 = _interopRequireDefault(__webpack_require__(73));

var _convert2 = _interopRequireDefault(__webpack_require__(94));

var _number2 = _interopRequireDefault(__webpack_require__(33));

var _string2 = _interopRequireDefault(__webpack_require__(62));

var _object2 = _interopRequireDefault(__webpack_require__(23));

var _array2 = _interopRequireDefault(__webpack_require__(45));

var _consoleHook2 = _interopRequireDefault(__webpack_require__(95));

var _wsh2 = _interopRequireDefault(__webpack_require__(96));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VERSION = '8.0.0 beta';
exports.VERSION = VERSION;
var rootAlias = {};
var propertyNames = {};
var _copyProperty = _object2["default"]._copyProperty;
var _replaceAll = _string2["default"]._replaceAll;
var _map = _array2["default"]._map;
/**
 * root
 */

var clone = _root2["default"].clone,
    cloneDeep = _root2["default"].cloneDeep;
exports.cloneDeep = cloneDeep;
exports.clone = clone;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  clone: clone,
  cloneDeep: cloneDeep
});
var root = {
  clone: clone,
  cloneDeep: cloneDeep
};
/**
 * platform
 */

exports.root = root;

var platform = _objectSpread({}, _platform2["default"]);
/**
 * type
 */


exports.platform = platform;
var isError = _type2["default"].isError,
    objectToString = _type2["default"].objectToString,
    isUndefined = _type2["default"].isUndefined,
    isNull = _type2["default"].isNull,
    isNaNStrict = _type2["default"].isNaNStrict,
    isBoolean = _type2["default"].isBoolean,
    isNumber = _type2["default"].isNumber,
    isInteger = _type2["default"].isInteger,
    isString = _type2["default"].isString,
    isFunction = _type2["default"].isFunction,
    isObject = _type2["default"].isObject,
    isObjectNormal = _type2["default"].isObjectNormal,
    isObjectFromNull = _type2["default"].isObjectFromNull,
    isObjectLike = _type2["default"].isObjectLike,
    isModule = _type2["default"].isModule,
    isArray = _type2["default"].isArray,
    isArraySeries = _type2["default"].isArraySeries,
    isDate = _type2["default"].isDate,
    isRegExp = _type2["default"].isRegExp,
    isBooleanObject = _type2["default"].isBooleanObject,
    isNumberObject = _type2["default"].isNumberObject,
    isStringObject = _type2["default"].isStringObject,
    isEmptyObject = _type2["default"].isEmptyObject,
    isEmptyArray = _type2["default"].isEmptyArray,
    isException = _type2["default"].isException,
    isSymbol = _type2["default"].isSymbol,
    isMap = _type2["default"].isMap,
    isWeakMap = _type2["default"].isWeakMap,
    isSet = _type2["default"].isSet,
    isWeakSet = _type2["default"].isWeakSet,
    isNotUndefined = _type2["default"].isNotUndefined,
    isNotNull = _type2["default"].isNotNull,
    isNotNaNStrict = _type2["default"].isNotNaNStrict,
    isNotBoolean = _type2["default"].isNotBoolean,
    isNotNumber = _type2["default"].isNotNumber,
    isNotInteger = _type2["default"].isNotInteger,
    isNotString = _type2["default"].isNotString,
    isNotFunction = _type2["default"].isNotFunction,
    isNotObject = _type2["default"].isNotObject,
    isNotObjectNormal = _type2["default"].isNotObjectNormal,
    isNotObjectFromNull = _type2["default"].isNotObjectFromNull,
    isNotObjectLike = _type2["default"].isNotObjectLike,
    isNotModule = _type2["default"].isNotModule,
    isNotArray = _type2["default"].isNotArray,
    isNotArraySeries = _type2["default"].isNotArraySeries,
    isNotDate = _type2["default"].isNotDate,
    isNotRegExp = _type2["default"].isNotRegExp,
    isNotBooleanObject = _type2["default"].isNotBooleanObject,
    isNotNumberObject = _type2["default"].isNotNumberObject,
    isNotStringObject = _type2["default"].isNotStringObject,
    isNotEmptyObject = _type2["default"].isNotEmptyObject,
    isNotEmptyArray = _type2["default"].isNotEmptyArray,
    isNotException = _type2["default"].isNotException,
    isNotSymbol = _type2["default"].isNotSymbol,
    isNotMap = _type2["default"].isNotMap,
    isNotWeakMap = _type2["default"].isNotWeakMap,
    isNotSet = _type2["default"].isNotSet,
    isNotWeakSet = _type2["default"].isNotWeakSet,
    isUndefinedAll = _type2["default"].isUndefinedAll,
    isNullAll = _type2["default"].isNullAll,
    isNaNStrictAll = _type2["default"].isNaNStrictAll,
    isBooleanAll = _type2["default"].isBooleanAll,
    isNumberAll = _type2["default"].isNumberAll,
    isIntegerAll = _type2["default"].isIntegerAll,
    isStringAll = _type2["default"].isStringAll,
    isFunctionAll = _type2["default"].isFunctionAll,
    isObjectAll = _type2["default"].isObjectAll,
    isObjectNormalAll = _type2["default"].isObjectNormalAll,
    isObjectFromNullAll = _type2["default"].isObjectFromNullAll,
    isObjectLikeAll = _type2["default"].isObjectLikeAll,
    isModuleAll = _type2["default"].isModuleAll,
    isArrayAll = _type2["default"].isArrayAll,
    isArraySeriesAll = _type2["default"].isArraySeriesAll,
    isDateAll = _type2["default"].isDateAll,
    isRegExpAll = _type2["default"].isRegExpAll,
    isBooleanObjectAll = _type2["default"].isBooleanObjectAll,
    isNumberObjectAll = _type2["default"].isNumberObjectAll,
    isStringObjectAll = _type2["default"].isStringObjectAll,
    isEmptyObjectAll = _type2["default"].isEmptyObjectAll,
    isEmptyArrayAll = _type2["default"].isEmptyArrayAll,
    isExceptionAll = _type2["default"].isExceptionAll,
    isSymbolAll = _type2["default"].isSymbolAll,
    isMapAll = _type2["default"].isMapAll,
    isWeakMapAll = _type2["default"].isWeakMapAll,
    isSetAll = _type2["default"].isSetAll,
    isWeakSetAll = _type2["default"].isWeakSetAll,
    isNotUndefinedAll = _type2["default"].isNotUndefinedAll,
    isNotNullAll = _type2["default"].isNotNullAll,
    isNotNaNStrictAll = _type2["default"].isNotNaNStrictAll,
    isNotBooleanAll = _type2["default"].isNotBooleanAll,
    isNotNumberAll = _type2["default"].isNotNumberAll,
    isNotIntegerAll = _type2["default"].isNotIntegerAll,
    isNotStringAll = _type2["default"].isNotStringAll,
    isNotFunctionAll = _type2["default"].isNotFunctionAll,
    isNotObjectAll = _type2["default"].isNotObjectAll,
    isNotObjectNormalAll = _type2["default"].isNotObjectNormalAll,
    isNotObjectFromNullAll = _type2["default"].isNotObjectFromNullAll,
    isNotObjectLikeAll = _type2["default"].isNotObjectLikeAll,
    isNotModuleAll = _type2["default"].isNotModuleAll,
    isNotArrayAll = _type2["default"].isNotArrayAll,
    isNotArraySeriesAll = _type2["default"].isNotArraySeriesAll,
    isNotDateAll = _type2["default"].isNotDateAll,
    isNotRegExpAll = _type2["default"].isNotRegExpAll,
    isNotBooleanObjectAll = _type2["default"].isNotBooleanObjectAll,
    isNotNumberObjectAll = _type2["default"].isNotNumberObjectAll,
    isNotStringObjectAll = _type2["default"].isNotStringObjectAll,
    isNotEmptyObjectAll = _type2["default"].isNotEmptyObjectAll,
    isNotEmptyArrayAll = _type2["default"].isNotEmptyArrayAll,
    isNotExceptionAll = _type2["default"].isNotExceptionAll,
    isNotSymbolAll = _type2["default"].isNotSymbolAll,
    isNotMapAll = _type2["default"].isNotMapAll,
    isNotWeakMapAll = _type2["default"].isNotWeakMapAll,
    isNotSetAll = _type2["default"].isNotSetAll,
    isNotWeakSetAll = _type2["default"].isNotWeakSetAll,
    isUndefinedArray = _type2["default"].isUndefinedArray,
    isNullArray = _type2["default"].isNullArray,
    isNaNStrictArray = _type2["default"].isNaNStrictArray,
    isBooleanArray = _type2["default"].isBooleanArray,
    isNumberArray = _type2["default"].isNumberArray,
    isIntegerArray = _type2["default"].isIntegerArray,
    isStringArray = _type2["default"].isStringArray,
    isFunctionArray = _type2["default"].isFunctionArray,
    isObjectArray = _type2["default"].isObjectArray,
    isObjectNormalArray = _type2["default"].isObjectNormalArray,
    isObjectFromNullArray = _type2["default"].isObjectFromNullArray,
    isObjectLikeArray = _type2["default"].isObjectLikeArray,
    isModuleArray = _type2["default"].isModuleArray,
    isArrayArray = _type2["default"].isArrayArray,
    isArraySeriesArray = _type2["default"].isArraySeriesArray,
    isDateArray = _type2["default"].isDateArray,
    isRegExpArray = _type2["default"].isRegExpArray,
    isBooleanObjectArray = _type2["default"].isBooleanObjectArray,
    isNumberObjectArray = _type2["default"].isNumberObjectArray,
    isStringObjectArray = _type2["default"].isStringObjectArray,
    isEmptyObjectArray = _type2["default"].isEmptyObjectArray,
    isEmptyArrayArray = _type2["default"].isEmptyArrayArray,
    isExceptionArray = _type2["default"].isExceptionArray,
    isSymbolArray = _type2["default"].isSymbolArray,
    isMapArray = _type2["default"].isMapArray,
    isWeakMapArray = _type2["default"].isWeakMapArray,
    isSetArray = _type2["default"].isSetArray,
    isWeakSetArray = _type2["default"].isWeakSetArray,
    isNotUndefinedArray = _type2["default"].isNotUndefinedArray,
    isNotNullArray = _type2["default"].isNotNullArray,
    isNotNaNStrictArray = _type2["default"].isNotNaNStrictArray,
    isNotBooleanArray = _type2["default"].isNotBooleanArray,
    isNotNumberArray = _type2["default"].isNotNumberArray,
    isNotIntegerArray = _type2["default"].isNotIntegerArray,
    isNotStringArray = _type2["default"].isNotStringArray,
    isNotFunctionArray = _type2["default"].isNotFunctionArray,
    isNotObjectArray = _type2["default"].isNotObjectArray,
    isNotObjectNormalArray = _type2["default"].isNotObjectNormalArray,
    isNotObjectFromNullArray = _type2["default"].isNotObjectFromNullArray,
    isNotObjectLikeArray = _type2["default"].isNotObjectLikeArray,
    isNotModuleArray = _type2["default"].isNotModuleArray,
    isNotArrayArray = _type2["default"].isNotArrayArray,
    isNotArraySeriesArray = _type2["default"].isNotArraySeriesArray,
    isNotDateArray = _type2["default"].isNotDateArray,
    isNotRegExpArray = _type2["default"].isNotRegExpArray,
    isNotBooleanObjectArray = _type2["default"].isNotBooleanObjectArray,
    isNotNumberObjectArray = _type2["default"].isNotNumberObjectArray,
    isNotStringObjectArray = _type2["default"].isNotStringObjectArray,
    isNotEmptyObjectArray = _type2["default"].isNotEmptyObjectArray,
    isNotEmptyArrayArray = _type2["default"].isNotEmptyArrayArray,
    isNotExceptionArray = _type2["default"].isNotExceptionArray,
    isNotSymbolArray = _type2["default"].isNotSymbolArray,
    isNotMapArray = _type2["default"].isNotMapArray,
    isNotWeakMapArray = _type2["default"].isNotWeakMapArray,
    isNotSetArray = _type2["default"].isNotSetArray,
    isNotWeakSetArray = _type2["default"].isNotWeakSetArray;
exports.isNotWeakSetArray = isNotWeakSetArray;
exports.isNotSetArray = isNotSetArray;
exports.isNotWeakMapArray = isNotWeakMapArray;
exports.isNotMapArray = isNotMapArray;
exports.isNotSymbolArray = isNotSymbolArray;
exports.isNotExceptionArray = isNotExceptionArray;
exports.isNotEmptyArrayArray = isNotEmptyArrayArray;
exports.isNotEmptyObjectArray = isNotEmptyObjectArray;
exports.isNotStringObjectArray = isNotStringObjectArray;
exports.isNotNumberObjectArray = isNotNumberObjectArray;
exports.isNotBooleanObjectArray = isNotBooleanObjectArray;
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
exports.isExceptionArray = isExceptionArray;
exports.isEmptyArrayArray = isEmptyArrayArray;
exports.isEmptyObjectArray = isEmptyObjectArray;
exports.isStringObjectArray = isStringObjectArray;
exports.isNumberObjectArray = isNumberObjectArray;
exports.isBooleanObjectArray = isBooleanObjectArray;
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
exports.isNotWeakSet = isNotWeakSet;
exports.isNotSet = isNotSet;
exports.isNotWeakMap = isNotWeakMap;
exports.isNotMap = isNotMap;
exports.isNotSymbol = isNotSymbol;
exports.isNotException = isNotException;
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
exports.isWeakSet = isWeakSet;
exports.isSet = isSet;
exports.isWeakMap = isWeakMap;
exports.isMap = isMap;
exports.isSymbol = isSymbol;
exports.isException = isException;
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
exports.isError = isError;
var isObjectType = _typeAlias2["default"].isObjectType,
    isArrayType = _typeAlias2["default"].isArrayType,
    isUndef = _typeAlias2["default"].isUndef,
    isBool = _typeAlias2["default"].isBool,
    isNum = _typeAlias2["default"].isNum,
    isInt = _typeAlias2["default"].isInt,
    isStr = _typeAlias2["default"].isStr,
    isFunc = _typeAlias2["default"].isFunc,
    isObj = _typeAlias2["default"].isObj,
    isObjNormal = _typeAlias2["default"].isObjNormal,
    isObjFromNull = _typeAlias2["default"].isObjFromNull,
    isObjLike = _typeAlias2["default"].isObjLike,
    isEmptyObj = _typeAlias2["default"].isEmptyObj,
    isExcept = _typeAlias2["default"].isExcept,
    isObjType = _typeAlias2["default"].isObjType,
    isNotObjectType = _typeAlias2["default"].isNotObjectType,
    isNotArrayType = _typeAlias2["default"].isNotArrayType,
    isNotUndef = _typeAlias2["default"].isNotUndef,
    isNotBool = _typeAlias2["default"].isNotBool,
    isNotNum = _typeAlias2["default"].isNotNum,
    isNotInt = _typeAlias2["default"].isNotInt,
    isNotStr = _typeAlias2["default"].isNotStr,
    isNotFunc = _typeAlias2["default"].isNotFunc,
    isNotObj = _typeAlias2["default"].isNotObj,
    isNotObjNormal = _typeAlias2["default"].isNotObjNormal,
    isNotObjFromNull = _typeAlias2["default"].isNotObjFromNull,
    isNotObjLike = _typeAlias2["default"].isNotObjLike,
    isNotEmptyObj = _typeAlias2["default"].isNotEmptyObj,
    isNotExcept = _typeAlias2["default"].isNotExcept,
    isNotObjType = _typeAlias2["default"].isNotObjType,
    isObjectTypeAll = _typeAlias2["default"].isObjectTypeAll,
    isArrayTypeAll = _typeAlias2["default"].isArrayTypeAll,
    isUndefAll = _typeAlias2["default"].isUndefAll,
    isBoolAll = _typeAlias2["default"].isBoolAll,
    isNumAll = _typeAlias2["default"].isNumAll,
    isIntAll = _typeAlias2["default"].isIntAll,
    isStrAll = _typeAlias2["default"].isStrAll,
    isFuncAll = _typeAlias2["default"].isFuncAll,
    isObjAll = _typeAlias2["default"].isObjAll,
    isObjNormalAll = _typeAlias2["default"].isObjNormalAll,
    isObjFromNullAll = _typeAlias2["default"].isObjFromNullAll,
    isObjLikeAll = _typeAlias2["default"].isObjLikeAll,
    isEmptyObjAll = _typeAlias2["default"].isEmptyObjAll,
    isExceptAll = _typeAlias2["default"].isExceptAll,
    isObjTypeAll = _typeAlias2["default"].isObjTypeAll,
    isNotObjectTypeAll = _typeAlias2["default"].isNotObjectTypeAll,
    isNotArrayTypeAll = _typeAlias2["default"].isNotArrayTypeAll,
    isNotUndefAll = _typeAlias2["default"].isNotUndefAll,
    isNotBoolAll = _typeAlias2["default"].isNotBoolAll,
    isNotNumAll = _typeAlias2["default"].isNotNumAll,
    isNotIntAll = _typeAlias2["default"].isNotIntAll,
    isNotStrAll = _typeAlias2["default"].isNotStrAll,
    isNotFuncAll = _typeAlias2["default"].isNotFuncAll,
    isNotObjAll = _typeAlias2["default"].isNotObjAll,
    isNotObjNormalAll = _typeAlias2["default"].isNotObjNormalAll,
    isNotObjFromNullAll = _typeAlias2["default"].isNotObjFromNullAll,
    isNotObjLikeAll = _typeAlias2["default"].isNotObjLikeAll,
    isNotEmptyObjAll = _typeAlias2["default"].isNotEmptyObjAll,
    isNotExceptAll = _typeAlias2["default"].isNotExceptAll,
    isNotObjTypeAll = _typeAlias2["default"].isNotObjTypeAll,
    isObjectTypeArray = _typeAlias2["default"].isObjectTypeArray,
    isArrayTypeArray = _typeAlias2["default"].isArrayTypeArray,
    isUndefArray = _typeAlias2["default"].isUndefArray,
    isBoolArray = _typeAlias2["default"].isBoolArray,
    isNumArray = _typeAlias2["default"].isNumArray,
    isIntArray = _typeAlias2["default"].isIntArray,
    isStrArray = _typeAlias2["default"].isStrArray,
    isFuncArray = _typeAlias2["default"].isFuncArray,
    isObjArray = _typeAlias2["default"].isObjArray,
    isObjNormalArray = _typeAlias2["default"].isObjNormalArray,
    isObjFromNullArray = _typeAlias2["default"].isObjFromNullArray,
    isObjLikeArray = _typeAlias2["default"].isObjLikeArray,
    isEmptyObjArray = _typeAlias2["default"].isEmptyObjArray,
    isExceptArray = _typeAlias2["default"].isExceptArray,
    isObjTypeArray = _typeAlias2["default"].isObjTypeArray,
    isNotObjectTypeArray = _typeAlias2["default"].isNotObjectTypeArray,
    isNotArrayTypeArray = _typeAlias2["default"].isNotArrayTypeArray,
    isNotUndefArray = _typeAlias2["default"].isNotUndefArray,
    isNotBoolArray = _typeAlias2["default"].isNotBoolArray,
    isNotNumArray = _typeAlias2["default"].isNotNumArray,
    isNotIntArray = _typeAlias2["default"].isNotIntArray,
    isNotStrArray = _typeAlias2["default"].isNotStrArray,
    isNotFuncArray = _typeAlias2["default"].isNotFuncArray,
    isNotObjArray = _typeAlias2["default"].isNotObjArray,
    isNotObjNormalArray = _typeAlias2["default"].isNotObjNormalArray,
    isNotObjFromNullArray = _typeAlias2["default"].isNotObjFromNullArray,
    isNotObjLikeArray = _typeAlias2["default"].isNotObjLikeArray,
    isNotEmptyObjArray = _typeAlias2["default"].isNotEmptyObjArray,
    isNotExceptArray = _typeAlias2["default"].isNotExceptArray,
    isNotObjTypeArray = _typeAlias2["default"].isNotObjTypeArray;
exports.isNotObjTypeArray = isNotObjTypeArray;
exports.isNotExceptArray = isNotExceptArray;
exports.isNotEmptyObjArray = isNotEmptyObjArray;
exports.isNotObjLikeArray = isNotObjLikeArray;
exports.isNotObjFromNullArray = isNotObjFromNullArray;
exports.isNotObjNormalArray = isNotObjNormalArray;
exports.isNotObjArray = isNotObjArray;
exports.isNotFuncArray = isNotFuncArray;
exports.isNotStrArray = isNotStrArray;
exports.isNotIntArray = isNotIntArray;
exports.isNotNumArray = isNotNumArray;
exports.isNotBoolArray = isNotBoolArray;
exports.isNotUndefArray = isNotUndefArray;
exports.isNotArrayTypeArray = isNotArrayTypeArray;
exports.isNotObjectTypeArray = isNotObjectTypeArray;
exports.isObjTypeArray = isObjTypeArray;
exports.isExceptArray = isExceptArray;
exports.isEmptyObjArray = isEmptyObjArray;
exports.isObjLikeArray = isObjLikeArray;
exports.isObjFromNullArray = isObjFromNullArray;
exports.isObjNormalArray = isObjNormalArray;
exports.isObjArray = isObjArray;
exports.isFuncArray = isFuncArray;
exports.isStrArray = isStrArray;
exports.isIntArray = isIntArray;
exports.isNumArray = isNumArray;
exports.isBoolArray = isBoolArray;
exports.isUndefArray = isUndefArray;
exports.isArrayTypeArray = isArrayTypeArray;
exports.isObjectTypeArray = isObjectTypeArray;
exports.isNotObjTypeAll = isNotObjTypeAll;
exports.isNotExceptAll = isNotExceptAll;
exports.isNotEmptyObjAll = isNotEmptyObjAll;
exports.isNotObjLikeAll = isNotObjLikeAll;
exports.isNotObjFromNullAll = isNotObjFromNullAll;
exports.isNotObjNormalAll = isNotObjNormalAll;
exports.isNotObjAll = isNotObjAll;
exports.isNotFuncAll = isNotFuncAll;
exports.isNotStrAll = isNotStrAll;
exports.isNotIntAll = isNotIntAll;
exports.isNotNumAll = isNotNumAll;
exports.isNotBoolAll = isNotBoolAll;
exports.isNotUndefAll = isNotUndefAll;
exports.isNotArrayTypeAll = isNotArrayTypeAll;
exports.isNotObjectTypeAll = isNotObjectTypeAll;
exports.isObjTypeAll = isObjTypeAll;
exports.isExceptAll = isExceptAll;
exports.isEmptyObjAll = isEmptyObjAll;
exports.isObjLikeAll = isObjLikeAll;
exports.isObjFromNullAll = isObjFromNullAll;
exports.isObjNormalAll = isObjNormalAll;
exports.isObjAll = isObjAll;
exports.isFuncAll = isFuncAll;
exports.isStrAll = isStrAll;
exports.isIntAll = isIntAll;
exports.isNumAll = isNumAll;
exports.isBoolAll = isBoolAll;
exports.isUndefAll = isUndefAll;
exports.isArrayTypeAll = isArrayTypeAll;
exports.isObjectTypeAll = isObjectTypeAll;
exports.isNotObjType = isNotObjType;
exports.isNotExcept = isNotExcept;
exports.isNotEmptyObj = isNotEmptyObj;
exports.isNotObjLike = isNotObjLike;
exports.isNotObjFromNull = isNotObjFromNull;
exports.isNotObjNormal = isNotObjNormal;
exports.isNotObj = isNotObj;
exports.isNotFunc = isNotFunc;
exports.isNotStr = isNotStr;
exports.isNotInt = isNotInt;
exports.isNotNum = isNotNum;
exports.isNotBool = isNotBool;
exports.isNotUndef = isNotUndef;
exports.isNotArrayType = isNotArrayType;
exports.isNotObjectType = isNotObjectType;
exports.isObjType = isObjType;
exports.isExcept = isExcept;
exports.isEmptyObj = isEmptyObj;
exports.isObjLike = isObjLike;
exports.isObjFromNull = isObjFromNull;
exports.isObjNormal = isObjNormal;
exports.isObj = isObj;
exports.isFunc = isFunc;
exports.isStr = isStr;
exports.isInt = isInt;
exports.isNum = isNum;
exports.isBool = isBool;
exports.isUndef = isUndef;
exports.isArrayType = isArrayType;
exports.isObjectType = isObjectType;
rootAlias = _objectSpread(_objectSpread(_objectSpread({}, rootAlias), _type2["default"]), _typeAlias2["default"]);

var type = _objectSpread(_objectSpread({}, _type2["default"]), _typeAlias2["default"]);

exports.type = type;
propertyNames._TYPE_BASE = 'Undefined, Null, NaNStrict, ' + 'Boolean, Number, Integer, String, ' + 'Function, ' + 'Object, ObjectNormal, ObjectFromNull, ' + 'ObjectLike, Module, ' + 'Array, ArraySeries, ' + 'Date, RegExp, ' + 'Exception, ' + 'EmptyObject, EmptyArray, ' + 'Symbol, ' + 'Map, WeakMap, Set, WeakSet, ' + 'BooleanObject, NumberObject, StringObject, ' + 'ObjectType, ArrayType, ' + 'Bool, Num, Int, Str, ' + 'Func, ' + 'Obj, ObjNormal, ObjFromNull, ' + 'ObjLike, ' + 'ObjType, ' + 'Except, ' + 'EmptyObj, ' + '';

var isPrefixSafixAdd = function isPrefixSafixAdd(prefix, safix, commaString) {
  return _map(_array2["default"].filter(_replaceAll(commaString, ' ', '').split(','), function (v) {
    return v !== '';
  }), function (item) {
    return prefix + item + safix;
  }).join(',');
}; // propertyNames.TYPE = [
//   isPrefixSafixAdd('is',    '',     propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('isNot', '',     propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('is',    'All',  propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('isNot', 'All',  propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('is',    'Array',  propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('isNot', 'Array',  propertyNames._TYPE_BASE),
// ].join(',');
// const type = {};
// _copyProperty(_type, propertyNames.TYPE, type);
// _copyProperty(_type, propertyNames.TYPE, rootAlias);

/**
 * test
 */
// const {
//   checkEqual, checkCompare,
//   describe, it, test, expect,
//   isThrown, isThrownValue, isThrownException, isNotThrown,
//   testCounter,
// } = _test;


propertyNames.TEST_PUBLIC = 'checkEqual, checkCompare,' + 'describe, it, test, expect,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'testCounter,';
propertyNames.TEST_ROOT = 'isThrown,isThrownValue,isThrownException,isNotThrown,' + '';
var test = {};
exports.test = test;

_copyProperty(_test2["default"], propertyNames.TEST_PUBLIC, test);

_copyProperty(_test2["default"], propertyNames.TEST_ROOT, rootAlias); // syntax


propertyNames.SYNTAX = 'assert,guard,' + 'functionValue,' + 'sc,if_,switch_,' + 'loop,' + 'canUseMap, canUseWeakMap,' + 'canUseSet, canUseWeakSet,' + 'Enum,' + '';

var syntax = _copyProperty(_syntax2["default"], propertyNames.SYNTAX);

exports.syntax = syntax;

_copyProperty(_syntax2["default"], propertyNames.SYNTAX, rootAlias); // compare


propertyNames.COMPARE = 'equal, equalDeep,' + 'or,' + 'match, matchValue, initialValue,' + 'allMatch, indexOfMatch, someMatch,' + 'matchSome, matchSomeValue,' + 'allMatchSome, indexOfMatchSome, someMatchSome,' + 'matchAll, matchAllValue,' + 'allMatchAll, indexOfMatchAll, someMatchAll,' + 'includes, includesSome, includesAll,' + '';
var compare = {};
exports.compare = compare;

_copyProperty(_compare2["default"], propertyNames.COMPARE, compare);

_copyProperty(_compare2["default"], propertyNames.COMPARE, rootAlias); // convert


propertyNames.CONVERT = 'numberToString, valueToString,' + 'stringToNumber,stringToNumberDefault,' + 'stringToInteger,stringToIntegerDefault,' + 'valueToNumber, valueToNumberDefault,' + 'valueToInteger, valueToIntegerDefault,' + 'numToString, valToString,' + 'strToNumber, strToNumberDef,' + 'strToInteger, strToIntegerDef,' + 'valToNumber, valToNumberDefault,' + 'valToInteger, valToIntegerDefault,' + 'valToNum, valToNumDef,' + 'valToInt, valToIntDef,' + 'numToStr,' + 'strToNum,strToNumDef,' + 'strToInt,strToIntDef,' + '';
var convert = {};
exports.convert = convert;

_copyProperty(_convert2["default"], propertyNames.CONVERT, convert);

_copyProperty(_convert2["default"], propertyNames.CONVERT, rootAlias); // number


propertyNames.NUMBER = 'isMultiples,isEven,isOdd,' + 'round,nearEqual,inRange,randomInt,' + '';

var number = _copyProperty(_number2["default"], propertyNames.NUMBER);

exports.number = number;

_copyProperty(_number2["default"], propertyNames.NUMBER, rootAlias); // string


propertyNames.STRING_PUBLIC = 'matchFormat, replaceAll,' + 'repeat,' + 'isLowerCase, isUpperCase,' + 'indexOfFirst, indexOfLast,' + 'isFirst, isLast, isBothEnds,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'subIndex, subLength, subFirst, subLast,' + 'deleteIndex, deleteLength, deleteFirst, deleteLast,' + 'insert, add,' + 'subFirstDelimFirst, subFirstDelimLast, ' + 'subLastDelimFirst, subLastDelimLast, ' + 'tagInnerFirst, tagOuterFirst, ' + 'tagInnerLast, tagOuterLast, ' + 'split, splitCommaItems, splitDotItems, ' + '';
propertyNames.STRING_ROOT = 'matchFormat,replaceAll,' + 'isLowerCase,isUpperCase,' + 'split, splitCommaItems, splitDotItems, ' + '';
var string = {};
exports.string = string;

_copyProperty(_string2["default"], propertyNames.STRING_PUBLIC, string);

_copyProperty(_string2["default"], propertyNames.STRING_ROOT, rootAlias); // object


propertyNames.OBJECT_PUBLIC = 'isObjectParameter,' + 'copyProperty, propertyCount, inProperty, fixProperty,' + 'has,hasOwn,hasPrototype,' + 'getProperty, setProperty,' + 'propertyList, ' + 'objectEntries, objectToKeyValueArray,' + 'objectKeys, objectToKeyArray,' + 'objectValues, objectToValueArray,' + 'copyProp, propCount, inProp, fixProp,' + 'getProp, setProp,' + '';
propertyNames.OBJECT_ROOT = 'copyProperty,propertyCount,inProperty, fixProperty,' + 'has,hasOwn,hasPrototype,' + 'getProperty,setProperty,' + 'propertyList, ' + 'objectEntries, objectToKeyValueArray,' + 'objectKeys, objectToKeyArray,' + 'objectValues, objectToValueArray,' + 'copyProp,propCount,inProp, fixProp,' + 'getProp,setProp,' + '';
var object = {};
exports.object = object;

_copyProperty(_object2["default"], propertyNames.OBJECT_PUBLIC, object);

_copyProperty(_object2["default"], propertyNames.OBJECT_ROOT, rootAlias);

object.objectToString = _type2["default"].objectToString;
rootAlias.objectToString = _type2["default"].objectToString; // array

propertyNames.ARRAY_PUBLIC = 'NumberArray, IntegerArray,' + 'from,' + 'min, max,' + 'sum, average, median,' + 'mode,' + 'unique, single, multiple,' + 'group,' + 'filter, map, count,' + 'findFirstIndex, findLastIndex,' + 'findFirst, findLast,' + 'some, all,' + 'isFirst, isLast, isBothEnds,' + 'subIndex, subLength,' + 'subFirst, subLast,' + 'findIndex, findBackIndex,' + 'find, findBack,' + 'every,' + 'arrayToIndexValueArray, arrayEntries, ' + '';
propertyNames.ARRAY_ROOT = 'min, max,' + 'sum, average, median,' + '';
var array = {};
exports.array = array;

_copyProperty(_array2["default"], propertyNames.ARRAY_PUBLIC, array);

_copyProperty(_array2["default"], propertyNames.ARRAY_ROOT, rootAlias); // array.operation


propertyNames.ARRAY_OPERATION_PUBLIC = 'insert, add,' + 'deleteLength, deleteIndex,' + 'deleteFirst, deleteLast,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'popFirst, popLast,' + 'pushFirst, pushLast,' + 'remainFirst, remainLast,' + 'filter,' + 'sort,' + 'sortNumber,' + 'sortLength,' + 'sortDictionary,' + 'sortNumberAscending, sortNumberDescending,' + 'sortLengthAscending, sortLengthDescending,' + 'sortDictionaryAscending, sortDictionaryDescending,' + '';
array.operation = {};

_copyProperty(_array2["default"].operation, propertyNames.ARRAY_OPERATION_PUBLIC, array.operation); // consoleHook


propertyNames._CONSOLE_HOOK_BASE = 'Log,Info,Warn,Error,Debug,';
propertyNames.CONSOLE_HOOK = [isPrefixSafixAdd('hook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('unHook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('accept', '', propertyNames._CONSOLE_HOOK_BASE), 'hook', 'unHook', 'accept'].join(',');
var consoleHook = {};
exports.consoleHook = consoleHook;

_copyProperty(_consoleHook2["default"], propertyNames.CONSOLE_HOOK, consoleHook); // wsh


propertyNames.WSH = 'FileSystemObject,Shell,' + 'forceCreateFolder,' + '';
var wsh = {};
exports.wsh = wsh;

_copyProperty(_wsh2["default"], propertyNames.WSH, wsh);

var _rootAlias = rootAlias,
    isThrown = _rootAlias.isThrown,
    isThrownValue = _rootAlias.isThrownValue,
    isThrownException = _rootAlias.isThrownException,
    isNotThrown = _rootAlias.isNotThrown,
    assert = _rootAlias.assert,
    guard = _rootAlias.guard,
    functionValue = _rootAlias.functionValue,
    sc = _rootAlias.sc,
    if_ = _rootAlias.if_,
    switch_ = _rootAlias.switch_,
    loop = _rootAlias.loop,
    canUseMap = _rootAlias.canUseMap,
    canUseWeakMap = _rootAlias.canUseWeakMap,
    canUseSet = _rootAlias.canUseSet,
    canUseWeakSet = _rootAlias.canUseWeakSet,
    Enum = _rootAlias.Enum,
    equal = _rootAlias.equal,
    equalDeep = _rootAlias.equalDeep,
    or = _rootAlias.or,
    match = _rootAlias.match,
    matchValue = _rootAlias.matchValue,
    initialValue = _rootAlias.initialValue,
    allMatch = _rootAlias.allMatch,
    indexOfMatch = _rootAlias.indexOfMatch,
    someMatch = _rootAlias.someMatch,
    matchSome = _rootAlias.matchSome,
    matchSomeValue = _rootAlias.matchSomeValue,
    allMatchSome = _rootAlias.allMatchSome,
    indexOfMatchSome = _rootAlias.indexOfMatchSome,
    someMatchSome = _rootAlias.someMatchSome,
    matchAll = _rootAlias.matchAll,
    matchAllValue = _rootAlias.matchAllValue,
    allMatchAll = _rootAlias.allMatchAll,
    indexOfMatchAll = _rootAlias.indexOfMatchAll,
    someMatchAll = _rootAlias.someMatchAll,
    includes = _rootAlias.includes,
    includesSome = _rootAlias.includesSome,
    includesAll = _rootAlias.includesAll,
    numberToString = _rootAlias.numberToString,
    valueToString = _rootAlias.valueToString,
    stringToNumber = _rootAlias.stringToNumber,
    stringToNumberDefault = _rootAlias.stringToNumberDefault,
    stringToInteger = _rootAlias.stringToInteger,
    stringToIntegerDefault = _rootAlias.stringToIntegerDefault,
    valueToNumber = _rootAlias.valueToNumber,
    valueToNumberDefault = _rootAlias.valueToNumberDefault,
    valueToInteger = _rootAlias.valueToInteger,
    valueToIntegerDefault = _rootAlias.valueToIntegerDefault,
    numToString = _rootAlias.numToString,
    valToString = _rootAlias.valToString,
    strToNumber = _rootAlias.strToNumber,
    strToNumberDef = _rootAlias.strToNumberDef,
    strToInteger = _rootAlias.strToInteger,
    strToIntegerDef = _rootAlias.strToIntegerDef,
    valToNumber = _rootAlias.valToNumber,
    valToNumberDefault = _rootAlias.valToNumberDefault,
    valToInteger = _rootAlias.valToInteger,
    valToIntegerDefault = _rootAlias.valToIntegerDefault,
    valToNum = _rootAlias.valToNum,
    valToNumDef = _rootAlias.valToNumDef,
    valToInt = _rootAlias.valToInt,
    valToIntDef = _rootAlias.valToIntDef,
    numToStr = _rootAlias.numToStr,
    strToNum = _rootAlias.strToNum,
    strToNumDef = _rootAlias.strToNumDef,
    strToInt = _rootAlias.strToInt,
    strToIntDef = _rootAlias.strToIntDef,
    isMultiples = _rootAlias.isMultiples,
    isEven = _rootAlias.isEven,
    isOdd = _rootAlias.isOdd,
    round = _rootAlias.round,
    nearEqual = _rootAlias.nearEqual,
    inRange = _rootAlias.inRange,
    randomInt = _rootAlias.randomInt,
    matchFormat = _rootAlias.matchFormat,
    replaceAll = _rootAlias.replaceAll,
    isLowerCase = _rootAlias.isLowerCase,
    isUpperCase = _rootAlias.isUpperCase,
    split = _rootAlias.split,
    splitCommaItems = _rootAlias.splitCommaItems,
    splitDotItems = _rootAlias.splitDotItems,
    copyProperty = _rootAlias.copyProperty,
    propertyCount = _rootAlias.propertyCount,
    inProperty = _rootAlias.inProperty,
    fixProperty = _rootAlias.fixProperty,
    has = _rootAlias.has,
    hasOwn = _rootAlias.hasOwn,
    hasPrototype = _rootAlias.hasPrototype,
    getProperty = _rootAlias.getProperty,
    setProperty = _rootAlias.setProperty,
    propertyList = _rootAlias.propertyList,
    objectEntries = _rootAlias.objectEntries,
    objectToKeyValueArray = _rootAlias.objectToKeyValueArray,
    objectKeys = _rootAlias.objectKeys,
    objectToKeyArray = _rootAlias.objectToKeyArray,
    objectValues = _rootAlias.objectValues,
    objectToValueArray = _rootAlias.objectToValueArray,
    copyProp = _rootAlias.copyProp,
    propCount = _rootAlias.propCount,
    inProp = _rootAlias.inProp,
    fixProp = _rootAlias.fixProp,
    getProp = _rootAlias.getProp,
    setProp = _rootAlias.setProp,
    min = _rootAlias.min,
    max = _rootAlias.max,
    sum = _rootAlias.sum,
    average = _rootAlias.average,
    median = _rootAlias.median;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
exports.setProp = setProp;
exports.getProp = getProp;
exports.fixProp = fixProp;
exports.inProp = inProp;
exports.propCount = propCount;
exports.copyProp = copyProp;
exports.objectToValueArray = objectToValueArray;
exports.objectValues = objectValues;
exports.objectToKeyArray = objectToKeyArray;
exports.objectKeys = objectKeys;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.objectEntries = objectEntries;
exports.propertyList = propertyList;
exports.setProperty = setProperty;
exports.getProperty = getProperty;
exports.hasPrototype = hasPrototype;
exports.hasOwn = hasOwn;
exports.has = has;
exports.fixProperty = fixProperty;
exports.inProperty = inProperty;
exports.propertyCount = propertyCount;
exports.copyProperty = copyProperty;
exports.splitDotItems = splitDotItems;
exports.splitCommaItems = splitCommaItems;
exports.split = split;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.replaceAll = replaceAll;
exports.matchFormat = matchFormat;
exports.randomInt = randomInt;
exports.inRange = inRange;
exports.nearEqual = nearEqual;
exports.round = round;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isMultiples = isMultiples;
exports.strToIntDef = strToIntDef;
exports.strToInt = strToInt;
exports.strToNumDef = strToNumDef;
exports.strToNum = strToNum;
exports.numToStr = numToStr;
exports.valToIntDef = valToIntDef;
exports.valToInt = valToInt;
exports.valToNumDef = valToNumDef;
exports.valToNum = valToNum;
exports.valToIntegerDefault = valToIntegerDefault;
exports.valToInteger = valToInteger;
exports.valToNumberDefault = valToNumberDefault;
exports.valToNumber = valToNumber;
exports.strToIntegerDef = strToIntegerDef;
exports.strToInteger = strToInteger;
exports.strToNumberDef = strToNumberDef;
exports.strToNumber = strToNumber;
exports.valToString = valToString;
exports.numToString = numToString;
exports.valueToIntegerDefault = valueToIntegerDefault;
exports.valueToInteger = valueToInteger;
exports.valueToNumberDefault = valueToNumberDefault;
exports.valueToNumber = valueToNumber;
exports.stringToIntegerDefault = stringToIntegerDefault;
exports.stringToInteger = stringToInteger;
exports.stringToNumberDefault = stringToNumberDefault;
exports.stringToNumber = stringToNumber;
exports.valueToString = valueToString;
exports.numberToString = numberToString;
exports.includesAll = includesAll;
exports.includesSome = includesSome;
exports.includes = includes;
exports.someMatchAll = someMatchAll;
exports.indexOfMatchAll = indexOfMatchAll;
exports.allMatchAll = allMatchAll;
exports.matchAllValue = matchAllValue;
exports.matchAll = matchAll;
exports.someMatchSome = someMatchSome;
exports.indexOfMatchSome = indexOfMatchSome;
exports.allMatchSome = allMatchSome;
exports.matchSomeValue = matchSomeValue;
exports.matchSome = matchSome;
exports.someMatch = someMatch;
exports.indexOfMatch = indexOfMatch;
exports.allMatch = allMatch;
exports.initialValue = initialValue;
exports.matchValue = matchValue;
exports.match = match;
exports.or = or;
exports.equalDeep = equalDeep;
exports.equal = equal;
exports.Enum = Enum;
exports.canUseWeakSet = canUseWeakSet;
exports.canUseSet = canUseSet;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseMap = canUseMap;
exports.loop = loop;
exports.switch_ = switch_;
exports.if_ = if_;
exports.sc = sc;
exports.functionValue = functionValue;
exports.guard = guard;
exports.assert = assert;
exports.isNotThrown = isNotThrown;
exports.isThrownException = isThrownException;
exports.isThrownValue = isThrownValue;
exports.isThrown = isThrown;

var parts = _objectSpread({
  VERSION: VERSION,
  root: root,
  platform: platform,
  type: type,
  test: test,
  syntax: syntax,
  compare: compare,
  convert: convert,
  number: number,
  string: string,
  object: object,
  array: array,
  consoleHook: consoleHook,
  wsh: wsh
}, rootAlias);

exports.parts = parts;

var _default = _objectSpread(_objectSpread({}, parts), {}, {
  parts: parts
});

exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable brace-style */

/* eslint-disable space-before-blocks */

/* eslint-disable comma-dangle */

/* eslint-disable curly */

/* eslint-disable semi */

/* eslint-disable quotes */

/* eslint-disable max-len */

/* eslint-disable one-var */

/* eslint-disable no-var */

/* eslint-disable prefer-rest-params */

/* eslint-disable no-extend-native */
var polyfillDefine = function polyfillDefine() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
  if (!Array.isArray) {
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  } // update from: https://gist.github.com/hufyhang/c303ce1b80c7b6f8a73e


  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      'use strict';

      if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
      }

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      var array = this;
      thisArg = thisArg || this;

      for (var i = 0, l = array.length; i !== l; ++i) {
        callback.call(thisArg, array[i], i, array);
      }
    };
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  // This version tries to optimize by only checking for "in" when looking for undefined and
  // skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
  // Whether it is actually faster remains to be seen.


  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (Object, max, min) {
      "use strict";

      return function indexOf(member, fromIndex) {
        if (this === null || this === undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");
        var that = Object(this),
            Len = that.length >>> 0,
            i = min(fromIndex | 0, Len);
        if (i < 0) i = max(0, Len + i);else if (i >= Len) return -1;

        if (member === void 0) {
          // undefined
          for (; i !== Len; ++i) {
            if (that[i] === void 0 && i in that) return i;
          }
        } else if (member !== member) {
          // NaN
          return -1; // Since NaN !== NaN, it will never be found. Fast-path it.
        } else // all else
          for (; i !== Len; ++i) {
            if (that[i] === member) return i;
          }

        return -1; // if the value was not found, then return -1
      };
    }(Object, Math.max, Math.min);
  } // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


  if (!Object.keys) {
    Object.keys = function () {
      'use strict';

      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !{
        toString: null
      }.propertyIsEnumerable('toString'),
          dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
          dontEnumsLength = dontEnums.length;
      return function (obj) {
        if (typeof obj !== 'function' && (_typeof(obj) !== 'object' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }

        var result = [],
            prop,
            i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }

        return result;
      };
    }();
  } // https://jonlabelle.com/snippets/view/javascript/ecmascript-5-polyfills
  // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )


  if (typeof Object.getOwnPropertyDescriptor !== "function") {
    Object.getOwnPropertyDescriptor = function (o, name) {
      if (o !== Object(o)) {
        throw TypeError();
      }

      if (o.hasOwnProperty(name)) {
        return {
          value: o[name],
          enumerable: true,
          writable: true,
          configurable: true
        };
      }
    };
  }
};

polyfillDefine();
var _default = {};
exports["default"] = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = exports._cloneDeep = exports.clone = exports._clone = void 0;

var _clone2 = _interopRequireDefault(__webpack_require__(4));

var _cloneDeep2 = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _clone = _clone2["default"]._clone,
    clone = _clone2["default"].clone;
exports.clone = clone;
exports._clone = _clone;
var _cloneDeep = _cloneDeep2["default"]._cloneDeep,
    cloneDeep = _cloneDeep2["default"].cloneDeep;
exports.cloneDeep = cloneDeep;
exports._cloneDeep = _cloneDeep;

var _default = _objectSpread(_objectSpread({}, _clone2["default"]), _cloneDeep2["default"]);

exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clone = exports._clone = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(23);

var _isObjectParameter = __webpack_require__(13);

var _hasOwn2 = __webpack_require__(8);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * clone
 */
var _clone = function _clone(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone.func.defaultArray;

  var __clone = function __clone(value) {
    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      var result = cloneFuncArray[i](value);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return __clone(source);
};

exports._clone = _clone;

var clone = function clone(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone.func.defaultArray;

  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? clone.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!(0, _type.isArray)(cloneFuncArray)) {
    throw new TypeError('clone args(cloneFuncArray) is not array');
  }

  return _clone(source, cloneFuncArray);
};
/**
 * clone.func
 */


exports.clone = clone;
clone.func = {}; // function is no clone

clone.func.ignoreFunction = function (source) {
  if (!(0, _type.isFunction)(source)) {
    return undefined;
  }

  return source;
}; // support
//  user object and user arraySeries
//  Just good usability


clone.func.object = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isObject)(source)) {
    return undefined;
  }

  var cloneValue = (0, _type.isObjectFromNull)(source) ? Object.create(null) : new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if ((0, _hasOwn2._hasOwn)(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

clone.func.arraySeries = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isArraySeries)(source)) {
    return undefined;
  }

  var cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);

  for (var i = 0, l = source.length; i < l; i += 1) {
    cloneValue[i] = __cloneDeep(source[i]);
  } // // Code that does the same thing
  // // for in array key is string.
  // // legacy for loop is simple for array
  // for (const key in source) {
  //   if (source.hasOwnProperty(key)) {
  //     cloneValue[key] = __cloneDeep(source[key]);
  //   }
  // }


  return cloneValue;
}; // support
//  all object
//  but Math or JSON etc clone
//  Cloning unnecessary objects


clone.func.objectLike = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isObjectLike)(source)) {
    return undefined;
  }

  var cloneValue = (0, _type.isObjectFromNull)(source) ? Object.create(null) : new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if ((0, _hasOwn2._hasOwn)(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

clone.func.date = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isDate)(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

clone.func.regExp = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isRegExp)(source)) {
    return undefined;
  }

  var cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
}; // cloneMap
//  key not recursive call
//  value recursive call


clone.func.map = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isMap)(source)) {
    return undefined;
  }

  var cloneValue = new Map();
  bufferWrite(source, cloneValue);
  var sourceEntries = [];
  source.forEach(function (value, key) {
    sourceEntries.push([key, value]);
  });

  for (var _i = 0, _sourceEntries = sourceEntries; _i < _sourceEntries.length; _i++) {
    var _sourceEntries$_i = _slicedToArray(_sourceEntries[_i], 2),
        key = _sourceEntries$_i[0],
        value = _sourceEntries$_i[1];

    cloneValue.set(key, __cloneDeep(value));
  } // IE11 no support map.keys map.entries


  return cloneValue;
};

clone.func.ignoreWeakMap = function (source) {
  if (!(0, _type.isWeakMap)(source)) {
    return undefined;
  }

  return source;
}; // cloneSet
//  element not recursive call
//  same map key


clone.func.set = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isSet)(source)) {
    return undefined;
  }

  var cloneValue = new Set();
  bufferWrite(source, cloneValue);
  var sourceEntries = [];
  source.forEach(function (value, key) {
    sourceEntries.push([key, value]);
  });

  for (var _i2 = 0, _sourceEntries2 = sourceEntries; _i2 < _sourceEntries2.length; _i2++) {
    var _sourceEntries2$_i = _slicedToArray(_sourceEntries2[_i2], 2),
        key = _sourceEntries2$_i[0],
        value = _sourceEntries2$_i[1];

    cloneValue.add(value);
  } // IE11 no support set.keys set.entries


  return cloneValue;
};

clone.func.ignoreWeakSet = function (source) {
  if (!(0, _type.isWeakSet)(source)) {
    return undefined;
  }

  return source;
};

clone.func.defaultArray = [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.map, clone.func.ignoreWeakMap, clone.func.set, clone.func.ignoreWeakSet, clone.func.arraySeries, clone.func.object];
var _default = {
  _clone: _clone,
  clone: clone
};
exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isExceptionAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = exports.isNotSymbol = exports.isSymbol = exports.isNotException = exports.isException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = void 0;
exports["default"] = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotExceptionAll = exports.isNotRegExpAll = exports.isNotDateAll = void 0;

var _isType = _interopRequireDefault(__webpack_require__(6));

var _isException = _interopRequireDefault(__webpack_require__(12));

var _isSymbol = _interopRequireDefault(__webpack_require__(15));

var _isMap = _interopRequireDefault(__webpack_require__(16));

var _isSet = _interopRequireDefault(__webpack_require__(19));

var _isTypeAll = _interopRequireDefault(__webpack_require__(21));

var _isTypeArray = _interopRequireDefault(__webpack_require__(22));

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
    isExceptionAll = _isTypeAll["default"].isExceptionAll,
    isBooleanObjectAll = _isTypeAll["default"].isBooleanObjectAll,
    isNumberObjectAll = _isTypeAll["default"].isNumberObjectAll,
    isStringObjectAll = _isTypeAll["default"].isStringObjectAll,
    isEmptyObjectAll = _isTypeAll["default"].isEmptyObjectAll,
    isEmptyArrayAll = _isTypeAll["default"].isEmptyArrayAll,
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
    isNotExceptionAll = _isTypeAll["default"].isNotExceptionAll,
    isNotBooleanObjectAll = _isTypeAll["default"].isNotBooleanObjectAll,
    isNotNumberObjectAll = _isTypeAll["default"].isNotNumberObjectAll,
    isNotStringObjectAll = _isTypeAll["default"].isNotStringObjectAll,
    isNotEmptyObjectAll = _isTypeAll["default"].isNotEmptyObjectAll,
    isNotEmptyArrayAll = _isTypeAll["default"].isNotEmptyArrayAll,
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
exports.isNotEmptyArrayAll = isNotEmptyArrayAll;
exports.isNotEmptyObjectAll = isNotEmptyObjectAll;
exports.isNotStringObjectAll = isNotStringObjectAll;
exports.isNotNumberObjectAll = isNotNumberObjectAll;
exports.isNotBooleanObjectAll = isNotBooleanObjectAll;
exports.isNotExceptionAll = isNotExceptionAll;
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
exports.isEmptyArrayAll = isEmptyArrayAll;
exports.isEmptyObjectAll = isEmptyObjectAll;
exports.isStringObjectAll = isStringObjectAll;
exports.isNumberObjectAll = isNumberObjectAll;
exports.isBooleanObjectAll = isBooleanObjectAll;
exports.isExceptionAll = isExceptionAll;
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

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // ...isType_js,
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
}, _isException["default"]), _isSymbol["default"]), _isMap["default"]), _isSet["default"]), _isTypeAll["default"]), _isTypeArray["default"]);

exports["default"] = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isError = exports.isRegExp = exports.isDate = exports.isEmptyArray = exports.isArraySeries = exports.isArray = exports.isEmptyObject = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isStringObject = exports.isString = exports.isInteger = exports.isNumberObject = exports.isNumber = exports.isBooleanObject = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = void 0;

var _propertyCount2 = __webpack_require__(7);

var _platform = __webpack_require__(9);

var _includes = __webpack_require__(11);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};

exports.objectToString = objectToString;

var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

exports.isUndefined = isUndefined;

var isNull = function isNull(value) {
  return value === null;
};

exports.isNull = isNull;

var isNaNStrict = function isNaNStrict(value) {
  return value !== value;
};

exports.isNaNStrict = isNaNStrict;

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

exports.isBoolean = isBoolean;

var isBooleanObject = function isBooleanObject(value) {
  return objectToString(value) === '[object Boolean]' && !isBoolean(value);
};

exports.isBooleanObject = isBooleanObject;

var isNumber = function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
};

exports.isNumber = isNumber;

var isNumberObject = function isNumberObject(value) {
  return objectToString(value) === '[object Number]' && typeof value !== 'number';
};

exports.isNumberObject = isNumberObject;

var isInteger = function isInteger(value) {
  if (!isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

exports.isInteger = isInteger;

var isString = function isString(value) {
  return typeof value === 'string';
};

exports.isString = isString;

var isStringObject = function isStringObject(value) {
  return objectToString(value) === '[object String]' && typeof value !== 'string';
};

exports.isStringObject = isStringObject;

var isFunction = function isFunction(value) {
  return typeof value === 'function';
};

exports.isFunction = isFunction;

var isObject = function isObject(value) {
  if (isNull(value)) {
    return false;
  }

  if (isUndefined(value)) {
    return false;
  }

  if (objectToString(value) !== '[object Object]') {
    return false;
  }

  if ((0, _platform.isInternetExplorer)()) {
    // support for IE11
    if ((0, _includes.__includes)([Map, WeakMap, Set], value.constructor)) {
      return false;
    }
  }

  return true;
};

exports.isObject = isObject;

var isObjectNormal = function isObjectNormal(value) {
  if (!isObject(value)) {
    return false;
  }

  if ('constructor' in value) {
    return true;
  }

  return false;
};

exports.isObjectNormal = isObjectNormal;

var isObjectFromNull = function isObjectFromNull(value) {
  if (!isObject(value)) {
    return false;
  }

  if ('constructor' in value) {
    return false;
  }

  return true;
};

exports.isObjectFromNull = isObjectFromNull;

var isObjectLike = function isObjectLike(value) {
  if (isNull(value)) {
    return false;
  }

  return _typeof(value) === 'object' || typeof value === 'function';
};

exports.isObjectLike = isObjectLike;

var isModule = function isModule(value) {
  return objectToString(value) === '[object Module]';
};

exports.isModule = isModule;

var isEmptyObject = function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }

  return (0, _propertyCount2._propertyCount)(value) === 0;
};

exports.isEmptyObject = isEmptyObject;

var isArray = function isArray(value) {
  return objectToString(value) === '[object Array]';
}; // Int8Array Uint16Array Float32Array Float64Array etc


exports.isArray = isArray;

var isArraySeries = function isArraySeries(value) {
  if ((0, _includes.__includes)(objectToString(value), 'Array]')) {
    return true;
  }

  return false;
};

exports.isArraySeries = isArraySeries;

var isEmptyArray = function isEmptyArray(value) {
  if (!isArraySeries(value)) {
    return false;
  }

  return value.length === 0;
};

exports.isEmptyArray = isEmptyArray;

var isDate = function isDate(value) {
  return objectToString(value) === '[object Date]';
};

exports.isDate = isDate;

var isRegExp = function isRegExp(value) {
  return objectToString(value) === '[object RegExp]';
};

exports.isRegExp = isRegExp;

var isError = function isError(value) {
  return objectToString(value) === '[object Error]';
};

exports.isError = isError;

var isNotUndefined = function isNotUndefined(value) {
  return !isUndefined(value);
};

exports.isNotUndefined = isNotUndefined;

var isNotNull = function isNotNull(value) {
  return !isNull(value);
};

exports.isNotNull = isNotNull;

var isNotNaNStrict = function isNotNaNStrict(value) {
  return !isNaNStrict(value);
};

exports.isNotNaNStrict = isNotNaNStrict;

var isNotBoolean = function isNotBoolean(value) {
  return !isBoolean(value);
};

exports.isNotBoolean = isNotBoolean;

var isNotNumber = function isNotNumber(value) {
  return !isNumber(value);
};

exports.isNotNumber = isNotNumber;

var isNotInteger = function isNotInteger(value) {
  return !isInteger(value);
};

exports.isNotInteger = isNotInteger;

var isNotString = function isNotString(value) {
  return !isString(value);
};

exports.isNotString = isNotString;

var isNotFunction = function isNotFunction(value) {
  return !isFunction(value);
};

exports.isNotFunction = isNotFunction;

var isNotObject = function isNotObject(value) {
  return !isObject(value);
};

exports.isNotObject = isNotObject;

var isNotObjectNormal = function isNotObjectNormal(value) {
  return !isObjectNormal(value);
};

exports.isNotObjectNormal = isNotObjectNormal;

var isNotObjectFromNull = function isNotObjectFromNull(value) {
  return !isObjectFromNull(value);
};

exports.isNotObjectFromNull = isNotObjectFromNull;

var isNotObjectLike = function isNotObjectLike(value) {
  return !isObjectLike(value);
};

exports.isNotObjectLike = isNotObjectLike;

var isNotModule = function isNotModule(value) {
  return !isModule(value);
};

exports.isNotModule = isNotModule;

var isNotArray = function isNotArray(value) {
  return !isArray(value);
};

exports.isNotArray = isNotArray;

var isNotArraySeries = function isNotArraySeries(value) {
  return !isArraySeries(value);
};

exports.isNotArraySeries = isNotArraySeries;

var isNotDate = function isNotDate(value) {
  return !isDate(value);
};

exports.isNotDate = isNotDate;

var isNotRegExp = function isNotRegExp(value) {
  return !isRegExp(value);
};

exports.isNotRegExp = isNotRegExp;

var isNotBooleanObject = function isNotBooleanObject(value) {
  return !isBooleanObject(value);
};

exports.isNotBooleanObject = isNotBooleanObject;

var isNotNumberObject = function isNotNumberObject(value) {
  return !isNumberObject(value);
};

exports.isNotNumberObject = isNotNumberObject;

var isNotStringObject = function isNotStringObject(value) {
  return !isStringObject(value);
};

exports.isNotStringObject = isNotStringObject;

var isNotEmptyObject = function isNotEmptyObject(value) {
  return !isEmptyObject(value);
};

exports.isNotEmptyObject = isNotEmptyObject;

var isNotEmptyArray = function isNotEmptyArray(value) {
  return !isEmptyArray(value);
};

exports.isNotEmptyArray = isNotEmptyArray;
var _default = {
  isError: isError,
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
};
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._propertyCount = void 0;

var _hasOwn2 = __webpack_require__(8);

/**
 * propertyCount
 */
var _propertyCount = function _propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var result = 0;

  if (hasOwn) {
    for (var property in object) {
      if ((0, _hasOwn2._hasOwn)(object, property)) {
        result += 1;
      }
    }
  } else {
    for (var _property in object) {
      result += 1;
    }
  }

  return result;
};

exports._propertyCount = _propertyCount;
var _default = {
  _propertyCount: _propertyCount
};
exports["default"] = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._hasOwn = void 0;

/**
 * hasOwn
 */
var _hasOwn = function _hasOwn(object, propertyName) {
  return Object.prototype.hasOwnProperty.call(object, propertyName);
};

exports._hasOwn = _hasOwn;
var _default = {
  _hasOwn: _hasOwn
};
exports["default"] = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isGasRhino = exports.isGasV8 = exports.googleAppScriptEngineName = exports.isOpera = exports.isSafari = exports.isInternetExplorer = exports.isEdge = exports.isFirefox = exports.isChrome = exports.browserName = exports.name = exports.isDeno = exports.isNode = exports.isJest = exports.isGoogleAppsScript = exports.isWindowsScriptHost = exports.isWebBrowser = void 0;

var _includes = __webpack_require__(11);

var isWebBrowser = function isWebBrowser() {
  return name() === 'WebBrowser';
};

exports.isWebBrowser = isWebBrowser;

var isWindowsScriptHost = function isWindowsScriptHost() {
  return name() === 'WindowsScriptHost';
};

exports.isWindowsScriptHost = isWindowsScriptHost;

var isGoogleAppsScript = function isGoogleAppsScript() {
  return name() === 'GoogleAppsScript';
};

exports.isGoogleAppsScript = isGoogleAppsScript;

var isJest = function isJest() {
  return name() === 'Jest';
};

exports.isJest = isJest;

var isNode = function isNode() {
  return name() === 'Node';
};

exports.isNode = isNode;

var isDeno = function isDeno() {
  return name() === 'Deno';
};

exports.isDeno = isDeno;

var _name;

var name = function name() {
  if (typeof _name !== 'undefined') {
    return _name;
  }

  if (typeof WScript !== 'undefined') {
    _name = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    _name = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    _name = 'GoogleAppsScript';
  } else if (typeof window === 'undefined') {
    _name = 'Node';
  } else if (typeof jest !== 'undefined') {
    _name = 'Jest';
  } else if (typeof process !== 'undefined') {
    _name = 'WebBrowser';
  } else {
    _name = 'unknown';
  }

  ;
  return _name;
};

exports.name = name;

name.reset = function () {
  _name = undefined;
};

var _browserName;

var browserName = function browserName() {
  if (typeof _browserName !== 'undefined') {
    return _browserName;
  }

  if (!isWebBrowser()) {
    _browserName = '';
  } else {
    var ua = window.navigator.userAgent.toLowerCase();

    if ((0, _includes.__includes)(ua, 'msie') || (0, _includes.__includes)(ua, 'trident')) {
      _browserName = 'InternetExplorer';
    } else if ((0, _includes.__includes)(ua, 'edg')) {
      _browserName = 'Edge';
    } else if ((0, _includes.__includes)(ua, 'opr')) {
      _browserName = 'Opera';
    } else if ((0, _includes.__includes)(ua, 'chrome')) {
      _browserName = 'Chrome';
    } else if ((0, _includes.__includes)(ua, 'safari')) {
      _browserName = 'Safari';
    } else if ((0, _includes.__includes)(ua, 'firefox')) {
      _browserName = 'Firefox';
    } else {
      _browserName = 'other';
    }
  }

  return _browserName;
};

exports.browserName = browserName;

browserName.reset = function () {
  _browserName = undefined;
};

var isChrome = function isChrome() {
  return browserName() === 'Chrome';
};

exports.isChrome = isChrome;

var isFirefox = function isFirefox() {
  return browserName() === 'Firefox';
};

exports.isFirefox = isFirefox;

var isEdge = function isEdge() {
  return browserName() === 'Edge';
};

exports.isEdge = isEdge;

var isInternetExplorer = function isInternetExplorer() {
  return browserName() === 'InternetExplorer';
};

exports.isInternetExplorer = isInternetExplorer;

var isSafari = function isSafari() {
  return browserName() === 'Safari';
};

exports.isSafari = isSafari;

var isOpera = function isOpera() {
  return browserName() === 'Opera';
};

exports.isOpera = isOpera;

var googleAppScriptEngineName = function googleAppScriptEngineName() {
  if (!isGoogleAppsScript()) {
    return '';
  }

  if (typeof Object.toSource === 'undefined') {
    return 'V8';
  } else {
    return 'Rhino';
  }
};

exports.googleAppScriptEngineName = googleAppScriptEngineName;

var isGasV8 = function isGasV8() {
  return googleAppScriptEngineName() === 'V8';
};

exports.isGasV8 = isGasV8;

var isGasRhino = function isGasRhino() {
  return googleAppScriptEngineName() === 'Rhino';
};

exports.isGasRhino = isGasRhino;
var _default = {
  name: name,
  isWebBrowser: isWebBrowser,
  isWindowsScriptHost: isWindowsScriptHost,
  isGoogleAppsScript: isGoogleAppsScript,
  isNode: isNode,
  isDeno: isDeno,
  isJest: isJest,
  browserName: browserName,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  googleAppScriptEngineName: googleAppScriptEngineName,
  isGasV8: isGasV8,
  isGasRhino: isGasRhino,
  buildMode: '',
  startName: ''
};
exports["default"] = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__includes = void 0;

/**
 * __includes
 */
var __includes = function __includes(value, compare) {
  return value.indexOf(compare) !== -1;
};

exports.__includes = __includes;
var _default = {
  __includes: __includes
};
exports["default"] = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotException = exports.isException = void 0;

var _isType = __webpack_require__(6);

var _isObjectParameter = __webpack_require__(13);

/**
 *isException
 * description:
 * isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */
var isException = function isException(value) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'name,message')) {
    return true;
  } else if ((0, _isType.isError)(value)) {
    return true;
  }

  return false;
};

exports.isException = isException;

var isNotException = function isNotException(value) {
  return !isException(value);
};

exports.isNotException = isNotException;
var _default = {
  isException: isException,
  isNotException: isNotException
};
exports["default"] = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isObjectParameter = void 0;

var _isType = __webpack_require__(6);

var _replaceAll2 = __webpack_require__(14);

var _propertyCount2 = __webpack_require__(7);

var _hasOwn2 = __webpack_require__(8);

var _includes = __webpack_require__(11);

/**
 * isObjectParameter
 */
var isObjectParameter = function isObjectParameter(object, props) {
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!(0, _isType.isObject)(object)) {
    return false;
  }

  if (!(0, _isType.isString)(props)) {
    return false;
  }

  if (!(0, _isType.isString)(optionalProps)) {
    return false;
  }

  props = (0, _replaceAll2._replaceAll)(props, ' ', '').split(','); // last element === '' delete

  if (props[props.length - 1] === '') {
    props.splice(props.length - 1, 1);
  }

  optionalProps = (0, _replaceAll2._replaceAll)(optionalProps, ' ', '').split(',');

  if (optionalProps[optionalProps.length - 1] === '') {
    optionalProps.splice(optionalProps.length - 1, 1);
  }

  var propMatchCount = 0;
  var optionalPropMatchCount = 0;

  for (var property in object) {
    if ((0, _hasOwn2._hasOwn)(object, property)) {
      if ((0, _includes.__includes)(props, property)) {
        propMatchCount += 1;
      } else if ((0, _includes.__includes)(optionalProps, property)) {
        optionalPropMatchCount += 1;
      } else {
        return false;
      }
    }
  }

  if (propMatchCount !== props.length) {
    return false;
  }

  if (optionalPropMatchCount < optionalMinCount) {
    return false;
  }

  return true;
};

exports.isObjectParameter = isObjectParameter;
var _default = {
  isObjectParameter: isObjectParameter
};
exports["default"] = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._replaceAll = void 0;

var _replaceAll = function _replaceAll(str, before, after) {
  return str.split(before).join(after);
};

exports._replaceAll = _replaceAll;
var _default = {
  _replaceAll: _replaceAll
};
exports["default"] = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotSymbol = exports.isSymbol = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isSymbol = function isSymbol(value) {
  return _typeof(value) === 'symbol';
};

exports.isSymbol = isSymbol;

var isNotSymbol = function isNotSymbol(value) {
  return !isSymbol(value);
};

exports.isNotSymbol = isNotSymbol;
var _default = {
  isSymbol: isSymbol,
  isNotSymbol: isNotSymbol
};
exports["default"] = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = void 0;

var _isType = __webpack_require__(6);

var _canUseMap = __webpack_require__(17);

var isMap = function isMap(value) {
  if (!(0, _isType.isObjectLike)(value)) {
    return false;
  }

  if (!(0, _canUseMap.canUseMap)()) {
    return false;
  }

  return value.constructor === Map; // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object Map]'
  // already return false;
};

exports.isMap = isMap;

var isWeakMap = function isWeakMap(value) {
  if (!(0, _isType.isObjectLike)(value)) {
    return false;
  }

  if (!(0, _canUseMap.canUseMap)()) {
    return false;
  }

  return value.constructor === WeakMap; // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object WeakMap]'
  // already return false;
};

exports.isWeakMap = isWeakMap;

var isNotMap = function isNotMap(value) {
  return !isMap(value);
};

exports.isNotMap = isNotMap;

var isNotWeakMap = function isNotWeakMap(value) {
  return !isWeakMap(value);
};

exports.isNotWeakMap = isNotWeakMap;
var _default = {
  isMap: isMap,
  isNotMap: isNotMap,
  isWeakMap: isWeakMap,
  isNotWeakMap: isNotWeakMap
};
exports["default"] = _default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseWeakMap = exports.canUseMap = void 0;

var _type = __webpack_require__(5);

var _global2 = __webpack_require__(18);

/**
 * canUseMap
 */
var canUseMap = function canUseMap() {
  return 'Map' in _global2._global;
};
/**
 * canUseWeakMap
 */


exports.canUseMap = canUseMap;

var canUseWeakMap = function canUseWeakMap() {
  return 'WeakMap' in _global2._global;
};

exports.canUseWeakMap = canUseWeakMap;
var _default = {
  canUseMap: canUseMap,
  canUseWeakMap: canUseWeakMap
};
exports["default"] = _default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._global = void 0;

var _global = new Function('return this')();

exports._global = _global;
var _default = {
  _global: _global
};
exports["default"] = _default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = void 0;

var _isType = __webpack_require__(6);

var _canUseSet = __webpack_require__(20);

var isSet = function isSet(value) {
  if (!(0, _isType.isObjectLike)(value)) {
    return false;
  }

  if (!(0, _canUseSet.canUseSet)()) {
    return false;
  }

  return value.constructor === Set; // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object Set]'
  // already return false;
};

exports.isSet = isSet;

var isWeakSet = function isWeakSet(value) {
  return (0, _isType.objectToString)(value) === '[object WeakSet]';
};

exports.isWeakSet = isWeakSet;

var isNotSet = function isNotSet(value) {
  return !isSet(value);
};

exports.isNotSet = isNotSet;

var isNotWeakSet = function isNotWeakSet(value) {
  return !isWeakSet(value);
};

exports.isNotWeakSet = isNotWeakSet;
var _default = {
  isSet: isSet,
  isNotSet: isNotSet,
  isWeakSet: isWeakSet,
  isNotWeakSet: isNotWeakSet
};
exports["default"] = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseWeakSet = exports.canUseSet = void 0;

var _type = __webpack_require__(5);

var _global2 = __webpack_require__(18);

/**
 * canUseSet
 */
var canUseSet = function canUseSet() {
  return 'Set' in _global2._global;
};
/**
 * canUseWeakSet
 */


exports.canUseSet = canUseSet;

var canUseWeakSet = function canUseWeakSet() {
  return 'WeakSet' in _global2._global;
};

exports.canUseWeakSet = canUseWeakSet;
var _default = {
  canUseSet: canUseSet,
  canUseWeakSet: canUseWeakSet
};
exports["default"] = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotExceptionAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isExceptionAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports._isTypeAllCheckFunc = exports._isTypeArray = void 0;

var _isType = __webpack_require__(6);

var _isException = __webpack_require__(12);

var _isSymbol = __webpack_require__(15);

var _isMap = __webpack_require__(16);

var _isSet = __webpack_require__(19);

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

var isObjectNormalAll = _isTypeAllCheckFunc(_isType.isObjectNormal);

exports.isObjectNormalAll = isObjectNormalAll;

var isObjectFromNullAll = _isTypeAllCheckFunc(_isType.isObjectFromNull);

exports.isObjectFromNullAll = isObjectFromNullAll;

var isObjectLikeAll = _isTypeAllCheckFunc(_isType.isObjectLike);

exports.isObjectLikeAll = isObjectLikeAll;

var isModuleAll = _isTypeAllCheckFunc(_isType.isModule);

exports.isModuleAll = isModuleAll;

var isArrayAll = _isTypeAllCheckFunc(_isType.isArray);

exports.isArrayAll = isArrayAll;

var isArraySeriesAll = _isTypeAllCheckFunc(_isType.isArraySeries);

exports.isArraySeriesAll = isArraySeriesAll;

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

var isNotObjectNormalAll = _isTypeAllCheckFunc(_isType.isNotObjectNormal);

exports.isNotObjectNormalAll = isNotObjectNormalAll;

var isNotObjectFromNullAll = _isTypeAllCheckFunc(_isType.isNotObjectFromNull);

exports.isNotObjectFromNullAll = isNotObjectFromNullAll;

var isNotObjectLikeAll = _isTypeAllCheckFunc(_isType.isNotObjectLike);

exports.isNotObjectLikeAll = isNotObjectLikeAll;

var isNotModuleAll = _isTypeAllCheckFunc(_isType.isNotModule);

exports.isNotModuleAll = isNotModuleAll;

var isNotArrayAll = _isTypeAllCheckFunc(_isType.isNotArray);

exports.isNotArrayAll = isNotArrayAll;

var isNotArraySeriesAll = _isTypeAllCheckFunc(_isType.isNotArraySeries);

exports.isNotArraySeriesAll = isNotArraySeriesAll;

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
  isNotWeakSetAll: isNotWeakSetAll
};
exports["default"] = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports._isTypeArrayCheckFunc = void 0;

var _isType = __webpack_require__(6);

var _isException = __webpack_require__(12);

var _isSymbol = __webpack_require__(15);

var _isMap = __webpack_require__(16);

var _isSet = __webpack_require__(19);

var _isTypeAll = __webpack_require__(21);

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

var isObjectLikeArray = _isTypeArrayCheckFunc(_isType.isObjectLike);

exports.isObjectLikeArray = isObjectLikeArray;

var isModuleArray = _isTypeArrayCheckFunc(_isType.isModule);

exports.isModuleArray = isModuleArray;

var isArrayArray = _isTypeArrayCheckFunc(_isType.isArray);

exports.isArrayArray = isArrayArray;

var isArraySeriesArray = _isTypeArrayCheckFunc(_isType.isArraySeries);

exports.isArraySeriesArray = isArraySeriesArray;

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

var isNotObjectLikeArray = _isTypeArrayCheckFunc(_isType.isNotObjectLike);

exports.isNotObjectLikeArray = isNotObjectLikeArray;

var isNotModuleArray = _isTypeArrayCheckFunc(_isType.isNotModule);

exports.isNotModuleArray = isNotModuleArray;

var isNotArrayArray = _isTypeArrayCheckFunc(_isType.isNotArray);

exports.isNotArrayArray = isNotArrayArray;

var isNotArraySeriesArray = _isTypeArrayCheckFunc(_isType.isNotArraySeries);

exports.isNotArraySeriesArray = isNotArraySeriesArray;

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
  isObjectLikeArray: isObjectLikeArray,
  isModuleArray: isModuleArray,
  isArrayArray: isArrayArray,
  isArraySeriesArray: isArraySeriesArray,
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
  isNotObjectLikeArray: isNotObjectLikeArray,
  isNotModuleArray: isNotModuleArray,
  isNotArrayArray: isNotArrayArray,
  isNotArraySeriesArray: isNotArraySeriesArray,
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
  isNotWeakSetArray: isNotWeakSetArray
};
exports["default"] = _default;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propertyList = exports.propCount = exports.propertyCount = exports._propertyCount = exports.has = exports.hasPrototype = exports._has = exports._hasPrototype = exports.hasOwn = exports._hasOwn = exports.getProp = exports.getProperty = exports._getProperty = exports.objectToValueArray = exports.objectValues = exports._objectValues = exports.objectToKeyArray = exports.objectKeys = exports._objectKeys = exports.objectToKeyValueArray = exports.objectEntries = exports._objectEntries = exports.fixProp = exports.fixProperty = exports._fixProperty = exports.inProp = exports.inProperty = exports._inProperty = exports.isObjectParameter = exports.setProp = exports.copyProp = exports.setProperty = exports.copyProperty = exports._setProperty = exports._copyProperty = void 0;

var _object_common = _interopRequireDefault(__webpack_require__(24));

var _isObjectParameter = _interopRequireDefault(__webpack_require__(13));

var _inProperty2 = _interopRequireDefault(__webpack_require__(51));

var _fixProperty2 = _interopRequireDefault(__webpack_require__(55));

var _objectEntries2 = _interopRequireDefault(__webpack_require__(31));

var _objectKeys2 = _interopRequireDefault(__webpack_require__(56));

var _objectValues2 = _interopRequireDefault(__webpack_require__(50));

var _getProperty2 = _interopRequireDefault(__webpack_require__(52));

var _hasOwn2 = _interopRequireDefault(__webpack_require__(8));

var _hasOwn3 = _interopRequireDefault(__webpack_require__(57));

var _has2 = _interopRequireDefault(__webpack_require__(53));

var _propertyCount2 = _interopRequireDefault(__webpack_require__(7));

var _propertyCount3 = _interopRequireDefault(__webpack_require__(58));

var _propertyList = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _copyProperty = _object_common["default"]._copyProperty,
    _setProperty = _object_common["default"]._setProperty,
    copyProperty = _object_common["default"].copyProperty,
    setProperty = _object_common["default"].setProperty,
    copyProp = _object_common["default"].copyProp,
    setProp = _object_common["default"].setProp;
exports.setProp = setProp;
exports.copyProp = copyProp;
exports.setProperty = setProperty;
exports.copyProperty = copyProperty;
exports._setProperty = _setProperty;
exports._copyProperty = _copyProperty;
var isObjectParameter = _isObjectParameter["default"].isObjectParameter;
exports.isObjectParameter = isObjectParameter;
var _inProperty = _inProperty2["default"]._inProperty,
    inProperty = _inProperty2["default"].inProperty,
    inProp = _inProperty2["default"].inProp;
exports.inProp = inProp;
exports.inProperty = inProperty;
exports._inProperty = _inProperty;
var _fixProperty = _fixProperty2["default"]._fixProperty,
    fixProperty = _fixProperty2["default"].fixProperty,
    fixProp = _fixProperty2["default"].fixProp;
exports.fixProp = fixProp;
exports.fixProperty = fixProperty;
exports._fixProperty = _fixProperty;
var _objectEntries = _objectEntries2["default"]._objectEntries,
    objectEntries = _objectEntries2["default"].objectEntries,
    objectToKeyValueArray = _objectEntries2["default"].objectToKeyValueArray;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.objectEntries = objectEntries;
exports._objectEntries = _objectEntries;
var _objectKeys = _objectKeys2["default"]._objectKeys,
    objectKeys = _objectKeys2["default"].objectKeys,
    objectToKeyArray = _objectKeys2["default"].objectToKeyArray;
exports.objectToKeyArray = objectToKeyArray;
exports.objectKeys = objectKeys;
exports._objectKeys = _objectKeys;
var _objectValues = _objectValues2["default"]._objectValues,
    objectValues = _objectValues2["default"].objectValues,
    objectToValueArray = _objectValues2["default"].objectToValueArray;
exports.objectToValueArray = objectToValueArray;
exports.objectValues = objectValues;
exports._objectValues = _objectValues;
var _getProperty = _getProperty2["default"]._getProperty,
    getProperty = _getProperty2["default"].getProperty,
    getProp = _getProperty2["default"].getProp;
exports.getProp = getProp;
exports.getProperty = getProperty;
exports._getProperty = _getProperty;
var _hasOwn = _hasOwn2["default"]._hasOwn;
exports._hasOwn = _hasOwn;
var hasOwn = _hasOwn3["default"].hasOwn;
exports.hasOwn = hasOwn;
var _hasPrototype = _has2["default"]._hasPrototype,
    _has = _has2["default"]._has,
    hasPrototype = _has2["default"].hasPrototype,
    has = _has2["default"].has;
exports.has = has;
exports.hasPrototype = hasPrototype;
exports._has = _has;
exports._hasPrototype = _hasPrototype;
var _propertyCount = _propertyCount2["default"]._propertyCount;
exports._propertyCount = _propertyCount;
var propertyCount = _propertyCount3["default"].propertyCount,
    propCount = _propertyCount3["default"].propCount;
exports.propCount = propCount;
exports.propertyCount = propertyCount;
var propertyList = _propertyList["default"].propertyList;
exports.propertyList = propertyList;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _object_common["default"]), _isObjectParameter["default"]), _inProperty2["default"]), _fixProperty2["default"]), _objectEntries2["default"]), _objectKeys2["default"]), _objectValues2["default"]), _getProperty2["default"]), _hasOwn2["default"]), _hasOwn3["default"]), _has2["default"]), _propertyCount2["default"]), _propertyCount3["default"]), _propertyList["default"]);

exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setProp = exports.copyProp = exports.setProperty = exports._setProperty = exports.copyProperty = exports._copyProperty = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _propertyCount2 = __webpack_require__(7);

var _replaceAll2 = __webpack_require__(14);

var _splitCommaItems2 = __webpack_require__(25);

var _includes = __webpack_require__(11);

/**
 * copyProperty
 */
var _copyProperty = function _copyProperty(fromObject, propertyNames) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _type.isString)(propertyNames)) {
    propertyNames = (0, _splitCommaItems2._splitCommaItems)(propertyNames);
  } else {
    if ((0, _includes.__includes)(propertyNames, '')) {
      throw new Error('_copyProperty args(propertyNames) element is not empty string');
    }
  }

  for (var i = 0; i < propertyNames.length; i += 1) {
    toObject[propertyNames[i]] = fromObject[propertyNames[i]];
  }

  return toObject;
};

exports._copyProperty = _copyProperty;

var copyProperty = function copyProperty(fromObject, propertyNames) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _isObjectParameter.isObjectParameter)(fromObject, 'fromObject, propertyNames', 'toObject')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyNames = _fromObject.propertyNames;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyNames, 'propertyNames', 'toObject')) {
    var _propertyNames = propertyNames;
    propertyNames = _propertyNames.propertyNames;
    var _propertyNames$toObje = _propertyNames.toObject;
    toObject = _propertyNames$toObje === void 0 ? {} : _propertyNames$toObje;
  } else if ((0, _isObjectParameter.isObjectParameter)(toObject, 'toObject')) {
    var _toObject = toObject;
    toObject = _toObject.toObject;
  }

  if (!(0, _type.isObject)(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!((0, _type.isString)(propertyNames) || isStringArray(propertyNames))) {
    throw new TypeError('copyProperty args(propertyNames) is not [array|string]');
  }

  if (!(0, _type.isObject)(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  return _copyProperty(fromObject, propertyNames, toObject);
};
/**
 * setProperty
 */


exports.copyProperty = copyProperty;

var _setProperty = function _setProperty(object, propertyPath, value) {
  var propertyArray = propertyPath.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      throw new Error('setProperty args(propertyPath) is empty string');
    }
  }

  var result = object;

  for (var _i = 0, _l = propertyArray.length - 1; _i < _l; _i += 1) {
    if (!((0, _type.isObject)(result[propertyArray[_i]]) || (0, _type.isArraySeries)(result[propertyArray[_i]]))) {
      result[propertyArray[_i]] = {};
    }

    result = result[propertyArray[_i]];
  }

  result[propertyArray[propertyArray.length - 1]] = value;
  return result;
};

exports._setProperty = _setProperty;

var setProperty = function setProperty(object, propertyPath, value) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath, value')) {
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
    value = _object.value;
  }

  if (!(0, _type.isObject)(object)) {
    throw new TypeError('setProperty args(object) is not object');
  }

  if (!(0, _type.isString)(propertyPath)) {
    throw new TypeError('setProperty args(propertyPath) is not string');
  }

  return _setProperty(object, propertyPath, value);
};

exports.setProperty = setProperty;
var copyProp = copyProperty;
exports.copyProp = copyProp;
var setProp = setProperty;
exports.setProp = setProp;
var _default = {
  _copyProperty: _copyProperty,
  _setProperty: _setProperty,
  copyProperty: copyProperty,
  setProperty: setProperty,
  copyProp: copyProp,
  setProp: setProp
};
exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.splitCommaItems = exports._splitCommaItems = void 0;

var _type = __webpack_require__(5);

var _split = __webpack_require__(26);

var _string_common = __webpack_require__(44);

var _includes = __webpack_require__(11);

var _splitCommaItems = function _splitCommaItems(str) {
  if ((0, _string_common._trimBothEnds)(str) === '') {
    return [];
  }

  var result = (0, _split.split)(str, ',', _split.split.excludeEmptyStr.last, _split.split.excludeSpace.trim);

  if ((0, _includes.__includes)(result, '')) {
    throw new Error('_splitCommaItems args(str) is not correct format');
  }

  return result;
};

exports._splitCommaItems = _splitCommaItems;

var splitCommaItems = function splitCommaItems(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('splitCommaItems args(str) is not string');
  }

  return _splitCommaItems(str);
};

exports.splitCommaItems = splitCommaItems;
var _default = {
  _splitCommaItems: _splitCommaItems,
  splitCommaItems: splitCommaItems
};
exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.split = exports._split = void 0;

var _type = __webpack_require__(5);

var _Enum2 = __webpack_require__(27);

var _loop = __webpack_require__(28);

var _array_operation = __webpack_require__(32);

var _array_common = __webpack_require__(34);

var _string_common = __webpack_require__(44);

var _replaceAll2 = __webpack_require__(14);

var _isObjectParameter = __webpack_require__(13);

var _or2 = __webpack_require__(49);

var _objectValues2 = __webpack_require__(50);

/**
 * split
 */
var _split = function _split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : split.excludeEmptyStr.none;
  var excludeSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : split.excludeSpace.none;
  var result = str.split(separator);

  switch (excludeSpace) {
    case split.excludeSpace.none:
      break;

    case split.excludeSpace.trim:
      (0, _loop.loop)(result)(function (e, i) {
        result[i] = (0, _string_common._trimBothEnds)(e, [' ']);
      });
      break;

    case split.excludeSpace.all:
      (0, _loop.loop)(result)(function (e, i) {
        result[i] = (0, _replaceAll2._replaceAll)(e, ' ', '');
      });
      break;

    default:
      throw new TypeError('_split args(excludeSpace) is not ["none"|"trim"|"all"]');
  }

  switch (excludeEmptyStr) {
    case split.excludeEmptyStr.none:
      break;

    case split.excludeEmptyStr.first:
      if (1 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }
      }

      break;

    case split.excludeEmptyStr.last:
      if (2 <= result.length) {
        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case split.excludeEmptyStr.bothEnds:
      if (2 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }

        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case split.excludeEmptyStr.all:
      (0, _array_operation._filter)(result, function (element) {
        return element !== '';
      });
      break;

    default:
      throw new TypeError('_split args(excludeEmptyStr) is not ["none"|"first"|"last"|"bothEnds"|"all"]');
  }

  return result;
};

exports._split = _split;

var split = function split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : split.excludeEmptyStr.none;
  var excludeSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : split.excludeSpace.none;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, separator', 'excludeEmptyStr, excludeSpace')) {
    var _str = str;
    str = _str.str;
    separator = _str.separator;
    var _str$excludeEmptyStr = _str.excludeEmptyStr;
    excludeEmptyStr = _str$excludeEmptyStr === void 0 ? split.excludeEmptyStr.none : _str$excludeEmptyStr;
    var _str$excludeSpace = _str.excludeSpace;
    excludeSpace = _str$excludeSpace === void 0 ? split.excludeSpace.none : _str$excludeSpace;
  } else if ((0, _isObjectParameter.isObjectParameter)(separator, 'separator', 'excludeEmptyStr, excludeSpace')) {
    var _separator = separator;
    separator = _separator.separator;
    var _separator$excludeEmp = _separator.excludeEmptyStr;
    excludeEmptyStr = _separator$excludeEmp === void 0 ? split.excludeEmptyStr.none : _separator$excludeEmp;
    var _separator$excludeSpa = _separator.excludeSpace;
    excludeSpace = _separator$excludeSpa === void 0 ? split.excludeSpace.none : _separator$excludeSpa;
  } else if ((0, _isObjectParameter.isObjectParameter)(excludeEmptyStr, '', 'excludeEmptyStr, excludeSpace', 1)) {
    var _excludeEmptyStr = excludeEmptyStr;
    var _excludeEmptyStr$excl = _excludeEmptyStr.excludeEmptyStr;
    excludeEmptyStr = _excludeEmptyStr$excl === void 0 ? split.excludeEmptyStr.none : _excludeEmptyStr$excl;
    var _excludeEmptyStr$excl2 = _excludeEmptyStr.excludeSpace;
    excludeSpace = _excludeEmptyStr$excl2 === void 0 ? split.excludeSpace.none : _excludeEmptyStr$excl2;
  } else if ((0, _isObjectParameter.isObjectParameter)(excludeSpace, 'excludeSpace')) {
    var _excludeSpace = excludeSpace;
    excludeSpace = _excludeSpace.excludeSpace;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('split args(str) is not string');
  }

  if (!(0, _type.isString)(separator)) {
    throw new TypeError('split args(separator) is not string');
  }

  if (!(0, _or2._or)(excludeEmptyStr, (0, _objectValues2._objectValues)(split.excludeEmptyStr))) {
    throw new TypeError('split args(excludeEmptyStr) is not ["none","first","last","bothEnds","all"]');
  }

  if (!(0, _or2._or)(excludeSpace, (0, _objectValues2._objectValues)(split.excludeSpace))) {
    throw new TypeError('split args(excludeSpace) is not ["none","trim","all"]');
  }

  return _split(str, separator, excludeEmptyStr, excludeSpace);
};

exports.split = split;
split.excludeEmptyStr = (0, _Enum2._Enum)(['none', 'first', 'last', 'bothEnds', 'all']);
split.excludeSpace = (0, _Enum2._Enum)(['none', 'trim', 'all']);
var _default = {
  _split: _split,
  split: split
};
exports["default"] = _default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Enum = exports._Enum = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/* eslint-disable no-invalid-this */

/**
 * Enum
 */
var _Enum = function _Enum(values) {
  var useIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!(this instanceof _Enum)) {
    return new _Enum(values, useIndex);
  }

  if (useIndex === false) {
    for (var i = 0, l = values.length; i < l; i += 1) {
      this[values[i]] = values[i];
    }
  } else {
    for (var _i = 0, _l = values.length; _i < _l; _i += 1) {
      this[values[_i]] = _i;
    }
  }
};

exports._Enum = _Enum;

var Enum = function Enum(values) {
  var useIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if ((0, _isObjectParameter.isObjectParameter)(values, 'values', 'useIndex')) {
    var _values = values;
    values = _values.values;
    var _values$useIndex = _values.useIndex;
    useIndex = _values$useIndex === void 0 ? false : _values$useIndex;
  } else if ((0, _isObjectParameter.isObjectParameter)(useIndex, 'useIndex')) {
    var _useIndex = useIndex;
    useIndex = _useIndex.useIndex;
  }

  if (!(0, _type.isStringArray)(values)) {
    throw new TypeError('Enum args(values) is not string array');
  }

  if (!(0, _type.isBoolean)(useIndex)) {
    throw new TypeError('Enum args(useIndex) is not boolean');
  }

  return _Enum(values, useIndex);
};

exports.Enum = Enum;
var _default = {
  _Enum: _Enum,
  Enum: Enum
};
exports["default"] = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loop = exports._loopBase = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _IntegerArray2 = __webpack_require__(29);

var _objectEntries = __webpack_require__(31);

/**
 * loop
 */
var _loopBase = function _loopBase(loopArray) {
  return function (func) {
    if (!(0, _type.isFunction)(func)) {
      throw new TypeError('loop()(func) func is not function');
    }

    for (var i = 0, l = loopArray.length; i < l; i += 1) {
      var element = loopArray[i];
      var index = i;
      var array = loopArray;
      var loopFirst = i === 0;
      var loopLast = i === loopArray.length - 1;
      var result = func(element, index, array, loopFirst, loopLast);

      if (!(0, _type.isUndefined)(result) && result["break"] === true) {
        return result;
      }
    }

    return {};
  };
};

exports._loopBase = _loopBase;

var loop = function loop(start, end, increment) {
  if ((0, _isObjectParameter.isObjectParameter)(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if ((0, _isObjectParameter.isObjectParameter)(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  } else if ((0, _type.isObject)(start)) {
    return _loopBase((0, _objectEntries.objectEntries)(start));
  } else if ((0, _type.isArray)(start)) {
    return _loopBase(start);
  }

  if (!(0, _type.isInteger)(start)) {
    throw new TypeError('loop args(start) is not number');
  }

  if (!(0, _type.isUndefined)(end) && !(0, _type.isInteger)(end)) {
    throw new TypeError('loop args(end) is not number');
  }

  if (!(0, _type.isUndefined)(increment) && !(0, _type.isInteger)(increment)) {
    throw new TypeError('loop args(increment) is not number');
  }

  return _loopBase((0, _IntegerArray2._IntegerArray)(start, end, increment));
};

exports.loop = loop;
var _default = {
  loop: loop
};
exports["default"] = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IntegerArray = exports._IntegerArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _NumberArray2 = __webpack_require__(30);

/**
 * IntegerArray
 */
var _IntegerArray = function _IntegerArray(start, end, increment) {
  return (0, _NumberArray2._NumberArray)(start, end, increment);
};

exports._IntegerArray = _IntegerArray;

var IntegerArray = function IntegerArray(start, end, increment) {
  if ((0, _isObjectParameter.isObjectParameter)(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if ((0, _isObjectParameter.isObjectParameter)(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!(0, _type.isInteger)(start)) {
    throw new TypeError('IntegerArray args(start) is not number');
  }

  if (!(0, _type.isUndefined)(end) && !(0, _type.isInteger)(end)) {
    throw new TypeError('IntegerArray args(end) is not number');
  }

  if (!(0, _type.isUndefined)(increment) && !(0, _type.isInteger)(increment)) {
    throw new TypeError('IntegerArray args(increment) is not number');
  }

  return _IntegerArray(start, end, increment);
};

exports.IntegerArray = IntegerArray;
var _default = {
  _IntegerArray: _IntegerArray,
  IntegerArray: IntegerArray
};
exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumberArray = exports._NumberArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/**
 * NumberArray
 */
var _NumberArray = function _NumberArray(start, end, increment) {
  if ((0, _type.isUndefined)(increment)) {
    if ((0, _type.isUndefined)(end)) {
      increment = 1;
      end = increment * start - 1;
      start = 0;
    } else {
      if (start <= end) {
        increment = 1;
      } else {
        increment = -1;
      }
    }
  }

  if (increment === 0) {
    throw new RangeError('_NumberArray args(increment) is 0');
  }

  if (start <= end) {
    if (increment < 0) {
      throw new Error('_NumberArray args(increment) < 0');
    }
  } else {
    if (increment > 0) {
      throw new Error('_NumberArray args(increment) > 0');
    }
  }

  var result = [];

  if (start <= end) {
    for (var i = start, l = end; i <= l; i += increment) {
      result.push(i);
    }
  } else {
    for (var _i = start, _l = end; _l <= _i; _i += increment) {
      result.push(_i);
    }
  }

  return result;
};

exports._NumberArray = _NumberArray;

var NumberArray = function NumberArray(start, end, increment) {
  if ((0, _isObjectParameter.isObjectParameter)(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if ((0, _isObjectParameter.isObjectParameter)(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!(0, _type.isNumber)(start)) {
    throw new TypeError('NumberArray args(start) is not number');
  }

  if (!(0, _type.isUndefined)(end) && !(0, _type.isNumber)(end)) {
    throw new TypeError('NumberArray args(end) is not number');
  }

  if (!(0, _type.isUndefined)(increment) && !(0, _type.isNumber)(increment)) {
    throw new TypeError('NumberArray args(increment) is not number');
  }

  return _NumberArray(start, end, increment);
};

exports.NumberArray = NumberArray;
var _default = {
  _NumberArray: _NumberArray,
  NumberArray: NumberArray
};
exports["default"] = _default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToKeyValueArray = exports.objectEntries = exports._objectEntries = void 0;

var _isType = __webpack_require__(6);

var _isObjectParameter = __webpack_require__(13);

var _hasOwn2 = __webpack_require__(8);

/**
 * objectEntries
 */
var _objectEntries = function _objectEntries(object) {
  var result = [];

  for (var key in object) {
    if ((0, _hasOwn2._hasOwn)(object, key)) {
      result.push([key, object[key]]);
    }
  }

  return result;
};

exports._objectEntries = _objectEntries;

var objectEntries = function objectEntries(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObjectLike)(object)) {
    throw new TypeError('objectEntries args(object) is not object');
  }

  return _objectEntries(object);
};

exports.objectEntries = objectEntries;
var objectToKeyValueArray = objectEntries;
exports.objectToKeyValueArray = objectToKeyValueArray;
var _default = {
  _objectEntries: _objectEntries,
  objectEntries: objectEntries,
  objectToKeyValueArray: objectToKeyValueArray
};
exports["default"] = _default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filter = exports._filter = exports.remainLast = exports._remainLast = exports.remainFirst = exports._remainFirst = exports.pushLast = exports._pushLast = exports.pushFirst = exports._pushFirst = exports.popLast = exports._popLast = exports.popFirst = exports._popFirst = exports.trimBothEnds = exports._trimBothEnds = exports.trimLast = exports._trimLast = exports.trimFirst = exports._trimFirst = exports.excludeBothEnds = exports._excludeBothEnds = exports.excludeLast = exports._excludeLast = exports.excludeFirst = exports._excludeFirst = exports.includeBothEnds = exports._includeBothEnds = exports.includeLast = exports._includeLast = exports.includeFirst = exports._includeFirst = exports.deleteLast = exports._deleteLast = exports.deleteFirst = exports._deleteFirst = exports.deleteLength = exports._deleteLength = exports.deleteIndex = exports._deleteIndex = exports.add = exports._add = exports.insert = exports._insert = void 0;

var _type = __webpack_require__(5);

var _number = __webpack_require__(33);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * array.operation.insert
 */
var _insert = function _insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

exports._insert = _insert;

var insert = function insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray, index')) {
    var _array = array;
    array = _array.array;
    valueArray = _array.valueArray;
    index = _array.index;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('insert args(valueArray) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, valueArray, index);
};
/**
 * array.operation.add
 */


exports.insert = insert;

var _add = function _add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

exports._add = _add;

var add = function add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray, index')) {
    var _array2 = array;
    array = _array2.array;
    valueArray = _array2.valueArray;
    index = _array2.index;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('add args(valueArray) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from -1 to array.length - 1');
  }

  return _add(array, valueArray, index);
};
/**
 * array.operation.deleteIndex
 */


exports.add = add;

var _deleteIndex = function _deleteIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  array.splice(indexStart, indexEnd - indexStart + 1);
  return array;
};

exports._deleteIndex = _deleteIndex;

var deleteIndex = function deleteIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, indexStart', 'indexEnd')) {
    var _array3 = array;
    array = _array3.array;
    indexStart = _array3.indexStart;
    var _array3$indexEnd = _array3.indexEnd;
    indexEnd = _array3$indexEnd === void 0 ? indexStart : _array3$indexEnd;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, index')) {
    var _array4 = array;
    array = _array4.array;
    indexStart = _array4.index;
    var _array4$indexEnd = _array4.indexEnd;
    indexEnd = _array4$indexEnd === void 0 ? indexStart : _array4$indexEnd;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteIndex args(array) is not array');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('deleteIndex args(indexStart) is not integer');
  }

  if (!(0, _type.isInteger)(indexEnd)) {
    throw new TypeError('deleteIndex args(indexEnd) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexStart) must be from 0 to array.length - 1');
  }

  if (!(0, _number._inRange)(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexEnd) must be from indexStart to array.length - 1');
  }

  return _deleteIndex(array, indexStart, indexEnd);
};
/**
 * array.operation.deleteLength
 */


exports.deleteIndex = deleteIndex;

var _deleteLength = function _deleteLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;
  return _deleteIndex(array, index, index + length - 1); // same:
  //  array.splice(index, length);
  //  return array;
};

exports._deleteLength = _deleteLength;

var deleteLength = function deleteLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, index', 'length')) {
    var _array5 = array;
    array = _array5.array;
    index = _array5.index;
    var _array5$length = _array5.length;
    length = _array5$length === void 0 ? array.length - index : _array5$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(index, 'index', 'length')) {
    var _index = index;
    index = _index.index;
    var _index$length = _index.length;
    length = _index$length === void 0 ? array.length - index : _index$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteLength args(array) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('deleteLength args(index) is not integer');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, array.length - 1)) {
    throw new RangeError('deleteLength args(index) must be from 0 to array.length - 1');
  }

  length = (0, _array_common._min)([length, array.length - index]);

  if (!(0, _number._inRange)(length, 0, array.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 0 to array.length - index');
  }

  return _deleteLength(array, index, length);
};
/**
 * array.operation.deleteFirst
 */


exports.deleteLength = deleteLength;

var _deleteFirst = function _deleteFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(array, 0, length);
};

exports._deleteFirst = _deleteFirst;

var deleteFirst = function deleteFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array6 = array;
    array = _array6.array;
    var _array6$length = _array6.length;
    length = _array6$length === void 0 ? 1 : _array6$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length2 = length;
    length = _length2.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteFirst args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('deleteFirst args(length) must be from 0 to array.length');
  }

  return _deleteFirst(array, length);
};
/**
 * array.operation.deleteLast
 */


exports.deleteFirst = deleteFirst;

var _deleteLast = function _deleteLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(array, array.length - length, length);
};

exports._deleteLast = _deleteLast;

var deleteLast = function deleteLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array7 = array;
    array = _array7.array;
    var _array7$length = _array7.length;
    length = _array7$length === void 0 ? 1 : _array7$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length3 = length;
    length = _length3.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('deleteLast args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('deleteLast args(length) must be from 0 to array.length');
  }

  return _deleteLast(array, length);
};
/**
 * array.operation.includeFirst
 */


exports.deleteLast = deleteLast;

var _includeFirst = function _includeFirst(array, valueArray) {
  if (!(0, _array_common._isFirst)(array, valueArray)) {
    _insert(array, valueArray);
  }

  return array;
};

exports._includeFirst = _includeFirst;

var includeFirst = function includeFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array8 = array;
    array = _array8.array;
    valueArray = _array8.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('includeFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('includeFirst args(valueArray) is not array');
  }

  return _includeFirst(array, valueArray);
};
/**
 * array.operation.includeLast
 */


exports.includeFirst = includeFirst;

var _includeLast = function _includeLast(array, valueArray) {
  if (!(0, _array_common._isLast)(array, valueArray)) {
    _add(array, valueArray);
  }

  return array;
};

exports._includeLast = _includeLast;

var includeLast = function includeLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array9 = array;
    array = _array9.array;
    valueArray = _array9.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('includeLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('includeLast args(valueArray) is not array');
  }

  return _includeLast(array, valueArray);
};
/**
 * array.operation.includeBothEnds
 */


exports.includeLast = includeLast;

var _includeBothEnds = function _includeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (!(0, _array_common._isBothEnds)(array, valueFirstArray, valueLastArray)) {
    _insert(array, valueFirstArray);

    _add(array, valueLastArray);
  }

  return array;
};

exports._includeBothEnds = _includeBothEnds;

var includeBothEnds = function includeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array10 = array;
    array = _array10.array;
    valueFirstArray = _array10.valueFirstArray;
    var _array10$valueLastArr = _array10.valueLastArray;
    valueLastArray = _array10$valueLastArr === void 0 ? valueFirstArray : _array10$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueFirstArray = _array11.valueArray;
    var _array11$valueLastArr = _array11.valueLastArray;
    valueLastArray = _array11$valueLastArr === void 0 ? valueFirstArray : _array11$valueLastArr;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('includeBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('includeBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('includeBothEnds args(valueLastArray) is not array');
  }

  return _includeBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.excludeFirst
 */


exports.includeBothEnds = includeBothEnds;

var _excludeFirst = function _excludeFirst(array, valueArray) {
  if ((0, _array_common._isFirst)(array, valueArray)) {
    _deleteFirst(array, valueArray.length);
  }

  return array;
};

exports._excludeFirst = _excludeFirst;

var excludeFirst = function excludeFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array12 = array;
    array = _array12.array;
    valueArray = _array12.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('excludeFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('excludeFirst args(valueArray) is not array');
  }

  return _excludeFirst(array, valueArray);
};
/**
 * array.operation.excludeLast
 */


exports.excludeFirst = excludeFirst;

var _excludeLast = function _excludeLast(array, valueArray) {
  if ((0, _array_common._isLast)(array, valueArray)) {
    _deleteLast(array, valueArray.length);
  }

  return array;
};

exports._excludeLast = _excludeLast;

var excludeLast = function excludeLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array13 = array;
    array = _array13.array;
    valueArray = _array13.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('excludeLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('excludeLast args(valueArray) is not array');
  }

  return _excludeLast(array, valueArray);
};
/**
 * array.operation.excludeBothEnds
 */


exports.excludeLast = excludeLast;

var _excludeBothEnds = function _excludeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _array_common._isBothEnds)(array, valueFirstArray, valueLastArray)) {
    deleteFirst(array, valueFirstArray.length);
    deleteLast(array, (0, _array_common._min)([valueLastArray.length, array.length]));
  }

  return array;
};

exports._excludeBothEnds = _excludeBothEnds;

var excludeBothEnds = function excludeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array14 = array;
    array = _array14.array;
    valueFirstArray = _array14.valueFirstArray;
    var _array14$valueLastArr = _array14.valueLastArray;
    valueLastArray = _array14$valueLastArr === void 0 ? valueFirstArray : _array14$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array15 = array;
    array = _array15.array;
    valueFirstArray = _array15.valueArray;
    var _array15$valueLastArr = _array15.valueLastArray;
    valueLastArray = _array15$valueLastArr === void 0 ? valueFirstArray : _array15$valueLastArr;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('excludeBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('excludeBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('excludeBothEnds args(valueLastArray) is not array');
  }

  return _excludeBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.trimFirst
 */


exports.excludeBothEnds = excludeBothEnds;

var _trimFirst = function _trimFirst(array, valueArray) {
  while ((0, _array_common._some)(valueArray, function (value) {
    return (0, _array_common._isFirst)(array, [value]);
  })) {
    _deleteIndex(array, 0);
  }

  return array;
};

exports._trimFirst = _trimFirst;

var trimFirst = function trimFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array16 = array;
    array = _array16.array;
    valueArray = _array16.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('trimFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not array');
  }

  return _trimFirst(array, valueArray);
};
/**
 * array.operation.trimLast
 */


exports.trimFirst = trimFirst;

var _trimLast = function _trimLast(array, valueArray) {
  while ((0, _array_common._some)(valueArray, function (value) {
    return (0, _array_common._isLast)(array, [value]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

exports._trimLast = _trimLast;

var trimLast = function trimLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array17 = array;
    array = _array17.array;
    valueArray = _array17.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('trimLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('trimLast args(valueArray) is not array');
  }

  return _trimLast(array, valueArray);
};
/**
 * array.operation.trimBothEnds
 */


exports.trimLast = trimLast;

var _trimBothEnds = function _trimBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  while ((0, _array_common._some)(valueFirstArray, function (valueFirst) {
    return (0, _array_common._isFirst)(array, [valueFirst]);
  })) {
    _deleteIndex(array, 0);
  }

  while ((0, _array_common._some)(valueLastArray, function (valueLast) {
    return (0, _array_common._isLast)(array, [valueLast]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

exports._trimBothEnds = _trimBothEnds;

var trimBothEnds = function trimBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array18 = array;
    array = _array18.array;
    valueFirstArray = _array18.valueFirstArray;
    var _array18$valueLastArr = _array18.valueLastArray;
    valueLastArray = _array18$valueLastArr === void 0 ? valueFirstArray : _array18$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array19 = array;
    array = _array19.array;
    valueFirstArray = _array19.valueArray;
    var _array19$valueLastArr = _array19.valueLastArray;
    valueLastArray = _array19$valueLastArr === void 0 ? valueFirstArray : _array19$valueLastArr;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('trimBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('trimBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('trimBothEnds args(valueLastArray) is not array');
  }

  return _trimBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.popFirst
 */


exports.trimBothEnds = trimBothEnds;

var _popFirst = function _popFirst(array) {
  return array.shift();
};

exports._popFirst = _popFirst;

var popFirst = function popFirst(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('popFirst args(array) is not array');
  }

  return _popFirst(array);
};
/**
 * array.operation.popLast
 */


exports.popFirst = popFirst;

var _popLast = function _popLast(array, value) {
  return array.pop();
};

exports._popLast = _popLast;

var popLast = function popLast(array, value) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, value')) {
    var _array20 = array;
    array = _array20.array;
    value = _array20.value;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('popLast args(array) is not array');
  }

  return _popLast(array, value);
};
/**
 * array.operation.pushFirst
 */


exports.popLast = popLast;

var _pushFirst = function _pushFirst(array, value) {
  array.unshift(value);
  return array.length; // WSH array.unshift is return undefined
};

exports._pushFirst = _pushFirst;

var pushFirst = function pushFirst(array, value) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, value')) {
    var _array21 = array;
    array = _array21.array;
    value = _array21.value;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('pushFirst args(array) is not array');
  }

  return _pushFirst(array, value);
};
/**
 * array.operation.pushLast
 */


exports.pushFirst = pushFirst;

var _pushLast = function _pushLast(array, value) {
  return array.push(value);
};

exports._pushLast = _pushLast;

var pushLast = function pushLast(array, value) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, value')) {
    var _array22 = array;
    array = _array22.array;
    value = _array22.value;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('pushLast args(array) is not array');
  }

  return _pushLast(array, value);
};
/**
 * array.operation.remainFirst
 */


exports.pushLast = pushLast;

var _remainFirst = function _remainFirst(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteIndex(array, length, array.length - 1);
};

exports._remainFirst = _remainFirst;

var remainFirst = function remainFirst(array, length) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array23 = array;
    array = _array23.array;
    length = _array23.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('remainFirst args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('remainFirst args(length) is not integer');
  }

  if (!(0 <= length)) {
    throw new RangeError('remainFirst args(length) must be from 0 to array.length - 1');
  }

  return _remainFirst(array, length);
};
/**
 * array.operation.remainLast
 */


exports.remainFirst = remainFirst;

var _remainLast = function _remainLast(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteLength(array, 0, array.length - length);
};

exports._remainLast = _remainLast;

var remainLast = function remainLast(array, length) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array24 = array;
    array = _array24.array;
    length = _array24.length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('remainLast args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('remainLast args(length) is not integer');
  }

  if (!(0 <= length)) {
    throw new RangeError('remainLast args(length) must be from 0 to array.length - 1');
  }

  return _remainLast(array, length);
};
/**
 * filter
 */


exports.remainLast = remainLast;

var _filter = function _filter(array, func) {
  for (var i = array.length - 1; 0 <= i; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (!resultFunc) {
      _deleteIndex(array, i);
    }
  }

  return array;
};

exports._filter = _filter;

var filter = function filter(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array25 = array;
    array = _array25.array;
    func = _array25.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('filter args(compareFunc) is not function');
  }

  return _filter(array, func);
};

exports.filter = filter;
var _default = {
  _insert: _insert,
  _add: _add,
  _deleteLength: _deleteLength,
  _deleteIndex: _deleteIndex,
  _deleteFirst: _deleteFirst,
  _deleteLast: _deleteLast,
  _includeFirst: _includeFirst,
  _includeLast: _includeLast,
  _includeBothEnds: _includeBothEnds,
  _excludeFirst: _excludeFirst,
  _excludeLast: _excludeLast,
  _excludeBothEnds: _excludeBothEnds,
  _trimFirst: _trimFirst,
  _trimLast: _trimLast,
  _trimBothEnds: _trimBothEnds,
  _popFirst: _popFirst,
  _popLast: _popLast,
  _pushFirst: _pushFirst,
  _pushLast: _pushLast,
  _remainFirst: _remainFirst,
  _remainLast: _remainLast,
  _filter: _filter,
  insert: insert,
  add: add,
  deleteLength: deleteLength,
  deleteIndex: deleteIndex,
  deleteFirst: deleteFirst,
  deleteLast: deleteLast,
  includeFirst: includeFirst,
  includeLast: includeLast,
  includeBothEnds: includeBothEnds,
  excludeFirst: excludeFirst,
  excludeLast: excludeLast,
  excludeBothEnds: excludeBothEnds,
  trimFirst: trimFirst,
  trimLast: trimLast,
  trimBothEnds: trimBothEnds,
  popFirst: popFirst,
  popLast: popLast,
  pushFirst: pushFirst,
  pushLast: pushLast,
  remainFirst: remainFirst,
  remainLast: remainLast,
  filter: filter
};
exports["default"] = _default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.randomInt = exports._randomInt = exports.makeInRange = exports._makeInRange = exports.inRange = exports._inRange = exports.nearEqual = exports._nearEqual = exports.round = exports._round = exports.isOdd = exports.isEven = exports.isMultiples = exports._isMultiples = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _isMultiples$_round$_;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * isMultiples isEven isOdd
 */
var _isMultiples = function _isMultiples(number, radix) {
  return number % radix === 0;
};

exports._isMultiples = _isMultiples;

var isMultiples = function isMultiples(number, radix) {
  if ((0, _isObjectParameter.isObjectParameter)(number, 'number,radix')) {
    var _number = number;
    number = _number.number;
    radix = _number.radix;
  }

  if (!(0, _type.isInteger)(number)) {
    throw new TypeError('isMultiples args(number) is not integer');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('isMultiples args(radix) is not integer');
  }

  return _isMultiples(number, radix);
};

exports.isMultiples = isMultiples;

var isEven = function isEven(number) {
  return isMultiples(number, 2);
};

exports.isEven = isEven;

var isOdd = function isOdd(number) {
  return !isMultiples(number, 2);
};
/**
 * round
 */


exports.isOdd = isOdd;

var _round = function _round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value ? true : false;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

exports._round = _round;

var round = function round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  }

  if (!(0, _type.isInteger)(digit)) {
    throw new TypeError('round args(value) is not integer');
  }

  return _round(value, digit);
};
/**
 * nearEqual
 */


exports.round = round;

var _nearEqual = function _nearEqual(value1, value2, diff) {
  if (Math.abs(value1 - value2) <= diff) {
    return true;
  } else {
    return false;
  }
};

exports._nearEqual = _nearEqual;

var nearEqual = function nearEqual(value1, value2, diff) {
  if ((0, _isObjectParameter.isObjectParameter)(value1, 'value1,value2,diff')) {
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
    diff = _value2.diff;
  }

  if (!(0, _type.isNumber)(value1)) {
    throw new TypeError('nearEqual args(value1) is not number');
  }

  if (!(0, _type.isNumber)(value2)) {
    throw new TypeError('nearEqual args(value2) is not number');
  }

  if (!(0, _type.isNumber)(diff)) {
    throw new TypeError('nearEqual args(diff) is not number');
  }

  if (diff < 0) {
    throw new RangeError('nearEqual args(diff) must be < 0');
  }

  return _nearEqual(value1, value2, diff);
};
/**
 * inRange
 */


exports.nearEqual = nearEqual;

var _inRange = function _inRange(value, from, to) {
  if (from <= value && value <= to) {
    return true;
  } else {
    return false;
  }
};

exports._inRange = _inRange;

var inRange = function inRange(value, from, to) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,from,to')) {
    var _value3 = value;
    value = _value3.value;
    from = _value3.from;
    to = _value3.to;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('inRange args(value) is not number');
  }

  if (!(0, _type.isNumber)(from)) {
    throw new TypeError('inRange args(from) is not number');
  }

  if (!(0, _type.isNumber)(to)) {
    throw new TypeError('inRange args(to) is not number');
  }

  if (!(from <= to)) {
    throw new RangeError('inRange args(from,to) must be from <= to');
  }

  return _inRange(value, from, to);
};
/**
 * makeInRange
 */


exports.inRange = inRange;

var _makeInRange = function _makeInRange(value, from, to) {
  if (value < from) {
    return from;
  }

  if (to < value) {
    return to;
  }

  return value;
};

exports._makeInRange = _makeInRange;

var makeInRange = function makeInRange(value, from, to) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, from, to')) {
    var _value4 = value;
    value = _value4.value;
    from = _value4.from;
    to = _value4.to;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('makeInRange args(value) is not number');
  }

  if (!(0, _type.isNumber)(from)) {
    throw new TypeError('makeInRange args(from) is not number');
  }

  if (!(0, _type.isNumber)(to)) {
    throw new TypeError('makeInRange args(to) is not number');
  }

  if (!(from <= to)) {
    throw new RangeError('makeInRange args(from,to) must be from <= to');
  }

  return _makeinRange(value, from, to);
};
/**
 * randomInt
 */


exports.makeInRange = makeInRange;

var _randomInt = function _randomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

exports._randomInt = _randomInt;

var randomInt = function randomInt(min, max) {
  if ((0, _isObjectParameter.isObjectParameter)(min, 'min,max')) {
    var _min = min;
    min = _min.min;
    max = _min.max;
  }

  if (!(0, _type.isInteger)(min)) {
    throw new TypeError('randomInt args(min) is not integer');
  }

  if (!(0, _type.isInteger)(max)) {
    throw new TypeError('randomInt args(max) is not integer');
  }

  return _randomInt(min, max);
};

exports.randomInt = randomInt;

var _default = (_isMultiples$_round$_ = {
  isMultiples: isMultiples,
  _round: _round,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  _makeInRange: _makeInRange,
  _randomInt: _randomInt
}, _defineProperty(_isMultiples$_round$_, "isMultiples", isMultiples), _defineProperty(_isMultiples$_round$_, "isEven", isEven), _defineProperty(_isMultiples$_round$_, "isOdd", isOdd), _defineProperty(_isMultiples$_round$_, "round", round), _defineProperty(_isMultiples$_round$_, "nearEqual", nearEqual), _defineProperty(_isMultiples$_round$_, "inRange", inRange), _defineProperty(_isMultiples$_round$_, "makeInRange", makeInRange), _defineProperty(_isMultiples$_round$_, "randomInt", randomInt), _isMultiples$_round$_);

exports["default"] = _default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLast = exports._subLast = exports.subFirst = exports._subFirst = exports.subLength = exports._subLength = exports.subIndex = exports._subIndex = exports.isBothEnds = exports._isBothEnds = exports.isLast = exports._isLast = exports.isFirst = exports._isFirst = exports.every = exports.all = exports._all = exports.some = exports._some = exports.findBack = exports.findLast = exports._findLast = exports.find = exports.findFirst = exports._findFirst = exports.findBackIndex = exports.findLastIndex = exports._findLastIndex = exports.findIndex = exports.findFirstIndex = exports._findFirstIndex = exports.count = exports._count = exports.map = exports._map = exports.filter = exports._filter = exports.multiple = exports._multiple = exports.single = exports._single = exports.mode = exports._mode = exports.median = exports._median = exports.average = exports._average = exports.sum = exports._sum = exports.from = exports.max = exports._max = exports.min = exports._min = void 0;

var _type = __webpack_require__(5);

var _number = __webpack_require__(33);

var _isObjectParameter = __webpack_require__(13);

var _clone2 = __webpack_require__(4);

var _cloneDeep2 = __webpack_require__(35);

var _unique2 = __webpack_require__(36);

/**
 * array.min max
 */
var _min = function _min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

exports._min = _min;

var min = function min(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('min args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('min args(array) element is not number');
  }

  return _min(array);
};

exports.min = min;

var _max = function _max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

exports._max = _max;

var max = function max(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('max args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('max args(array) element is not number');
  }

  return _max(array);
};
/**
 * from
 */


exports.max = max;

var from = function from(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};
/**
 * sum
 */


exports.from = from;

var _sum = function _sum(array) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    result += array[i];
  }

  return result;
};

exports._sum = _sum;

var sum = function sum(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('sum args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('sum args(array) element is not number');
  }

  return _sum(array);
};
/**
 * average
 */


exports.sum = sum;

var _average = function _average(array) {
  if (array.length === 0) {
    return null;
  }

  return _sum(array) / array.length;
};

exports._average = _average;

var average = function average(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('average args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('average args(array) element is not number');
  }

  return _average(array);
};
/**
 * median
 */


exports.average = average;

var _median = function _median(array) {
  if (array.length === 0) {
    return null;
  }

  var sortedArray = (0, _cloneDeep2._cloneDeep)(array);
  sortedArray.sort(function (a, b) {
    return a - b;
  });

  if ((0, _number.isEven)(sortedArray.length)) {
    // Even number length
    var centerIndex = sortedArray.length / 2;
    return (sortedArray[centerIndex - 1] + sortedArray[centerIndex]) / 2;
  } else {
    // Odd number length
    return sortedArray[(sortedArray.length - 1) / 2];
  }
};

exports._median = _median;

var median = function median(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('median args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('median args(array) element is not number');
  }

  return _median(array);
};
/**
 * mode
 */


exports.median = median;

var _mode = function _mode(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = (0, _unique2._unique)(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  var maxValue = _max(countArray);

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === maxValue;
  });
};

exports._mode = _mode;

var mode = function mode(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('mode args(array) is not array');
  }

  return _mode(array);
};
/**
 * single
 */


exports.mode = mode;

var _single = function _single(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = (0, _unique2._unique)(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === 1;
  });
};

exports._single = _single;

var single = function single(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('single args(array) is not array');
  }

  return _single(array);
};
/**
 * multiple
 */


exports.single = single;

var _multiple = function _multiple(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = (0, _unique2._unique)(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] >= 2;
  });
};

exports._multiple = _multiple;

var multiple = function multiple(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('multiple args(array) is not array');
  }

  return _multiple(array);
};
/**
 * filter
 */


exports.multiple = multiple;

var _filter = function _filter(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      result.push(array[i]);
    }
  }

  return result;
};

exports._filter = _filter;

var filter = function filter(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array = array;
    array = _array.array;
    func = _array.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('filter args(func) is not function');
  }

  return _filter(array, func);
};
/**
 * map
 */


exports.filter = filter;

var _map = function _map(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);
    result.push(resultFunc);
  }

  return result;
};

exports._map = _map;

var map = function map(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array2 = array;
    array = _array2.array;
    func = _array2.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('map args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('map args(productFunc) is not function');
  }

  return _map(array, func);
};
/**
 * count
 */


exports.map = map;

var _count = function _count(array, func) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_count args(func) result is not boolean');
    }

    if (resultFunc) {
      result += 1;
    }
  }

  return result;
};

exports._count = _count;

var count = function count(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array3 = array;
    array = _array3.array;
    func = _array3.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('count args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('count args(func) is not function');
  }

  return _count(array, func);
};
/**
 * findFirstIndex
 */


exports.count = count;

var _findFirstIndex = function _findFirstIndex(array, func) {
  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_findFirstIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

exports._findFirstIndex = _findFirstIndex;

var findFirstIndex = function findFirstIndex(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array4 = array;
    array = _array4.array;
    func = _array4.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findFirstIndex args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findFirstIndex args(compareFunc) is not function');
  }

  return _findFirstIndex(array, func);
};

exports.findFirstIndex = findFirstIndex;
var findIndex = findFirstIndex;
/**
 * findLastIndex
 */

exports.findIndex = findIndex;

var _findLastIndex = function _findLastIndex(array, func) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!(0, _type.isBoolean)(resultFunc)) {
      throw new TypeError('_findLastIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

exports._findLastIndex = _findLastIndex;

var findLastIndex = function findLastIndex(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array5 = array;
    array = _array5.array;
    func = _array5.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findLastIndex args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findLastIndex args(compareFunc) is not function');
  }

  return _findLastIndex(array, func);
};

exports.findLastIndex = findLastIndex;
var findBackIndex = findLastIndex;
/**
 * findFirst
 */

exports.findBackIndex = findBackIndex;

var _findFirst = function _findFirst(array, func) {
  var resultIndex = _findFirstIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

exports._findFirst = _findFirst;

var findFirst = function findFirst(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array6 = array;
    array = _array6.array;
    func = _array6.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findFirst args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findFirst args(compareFunc) is not function');
  }

  return _findFirst(array, func);
};

exports.findFirst = findFirst;
var find = findFirst;
/**
 * findLast
 */

exports.find = find;

var _findLast = function _findLast(array, func) {
  var resultIndex = _findLastIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

exports._findLast = _findLast;

var findLast = function findLast(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array7 = array;
    array = _array7.array;
    func = _array7.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('findLast args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('findLast args(compareFunc) is not function');
  }

  return _findLast(array, func);
};

exports.findLast = findLast;
var findBack = findLast;
/**
 * some
 */

exports.findBack = findBack;

var _some = function _some(array, func) {
  return _findFirstIndex(array, func) !== -1;
};

exports._some = _some;

var some = function some(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array8 = array;
    array = _array8.array;
    func = _array8.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('some args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('some args(compareFunc) is not function');
  }

  return _some(array, func);
};
/**
 * all:every
 */


exports.some = some;

var _all = function _all(array, func) {
  if (array.length === 0) {
    return false;
  }

  return _filter(array, func).length === array.length;
};

exports._all = _all;

var all = function all(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array9 = array;
    array = _array9.array;
    func = _array9.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('all args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('all args(compareFunc) is not function');
  }

  return _all(array, func);
};

exports.all = all;
var every = all;
/**
 * isFirst
 */

exports.every = every;

var _isFirst = function _isFirst(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    var firstValue = array[index];

    if ((0, _type.isFunction)(value)) {
      return value(firstValue);
    }

    return firstValue === value;
  });
};

exports._isFirst = _isFirst;

var isFirst = function isFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array10 = array;
    array = _array10.array;
    valueArray = _array10.valueArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('isFirst args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isFirst(array, valueArray);
};
/**
 * isLast
 */


exports.isFirst = isFirst;

var _isLast = function _isLast(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    var lastValue = array[array.length - valueArray.length + index];

    if ((0, _type.isFunction)(value)) {
      return value(lastValue);
    }

    return lastValue === value;
  });
};

exports._isLast = _isLast;

var isLast = function isLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueArray = _array11.valueArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray')) {
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('isLast args(array) is not array');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isLast(array, valueArray);
};
/**
 * isBothEnds
 */


exports.isLast = isLast;

var _isBothEnds = function _isBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (array.length <= 1) {
    return false;
  }

  return _isFirst(array, valueFirstArray) && _isLast(array, valueLastArray);
};

exports._isBothEnds = _isBothEnds;

var isBothEnds = function isBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array12 = array;
    array = _array12.array;
    valueFirstArray = _array12.valueFirstArray;
    var _array12$valueLastArr = _array12.valueLastArray;
    valueLastArray = _array12$valueLastArr === void 0 ? valueFirstArray : _array12$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array13 = array;
    array = _array13.array;
    valueFirstArray = _array13.valueArray;
    valueLastArray = valueFirstArray;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('isBothEnds args(array) is not array');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('isBothEnds args(valueFirstArray) is not array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('isBothEnds args(valueLastArray) is not array');
  }

  return _isBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * subIndex
 */


exports.isBothEnds = isBothEnds;

var _subIndex = function _subIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  return array.slice(indexStart, indexEnd + 1);
};

exports._subIndex = _subIndex;

var subIndex = function subIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, indexStart', 'indexEnd')) {
    var _array14 = array;
    array = _array14.array;
    indexStart = _array14.indexStart;
    var _array14$indexEnd = _array14.indexEnd;
    indexEnd = _array14$indexEnd === void 0 ? indexStart : _array14$indexEnd;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subIndex args(array) is not array');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('subIndex args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, array.length - 1)) {
    throw new RangeError('subIndex args(indexStart) must be from 0 to array.length - 1');
  }

  if (!(0, _type.isInteger)(indexEnd)) {
    throw new TypeError('subIndex args(indexEnd) is not integer');
  }

  if (!(0, _number._inRange)(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError('subIndex args(indexEnd) must be from indexStart to array.length - 1');
  }

  return _subIndex(array, indexStart, indexEnd);
};
/**
 * subLength
 */


exports.subIndex = subIndex;

var _subLength = function _subLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;
  return _subIndex(array, index, index + length - 1); // same:
  //  return array.slice(index, index + length);
};

exports._subLength = _subLength;

var subLength = function subLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, index', 'length')) {
    var _array15 = array;
    array = _array15.array;
    index = _array15.index;
    var _array15$length = _array15.length;
    length = _array15$length === void 0 ? array.length - index : _array15$length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subLength args(array) is not array');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('subLength args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, array.length - 1)) {
    throw new RangeError('subLength args(index) must be from 0 to array.length - 1');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subLength args(length) is not integer');
  }

  length = _min([length, array.length - index]);

  if (!(0, _number._inRange)(length, 0, array.length - index)) {
    throw new RangeError('subLength args(length) must be from 0 to array.length - 1');
  }

  return _subLength(array, index, length);
};
/**
 * subFirst
 */


exports.subLength = subLength;

var _subFirst = function _subFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(array, 0, length);
};

exports._subFirst = _subFirst;

var subFirst = function subFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array16 = array;
    array = _array16.array;
    var _array16$length = _array16.length;
    length = _array16$length === void 0 ? 1 : _array16$length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subFirst args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('subFirst args(length) must be from 0 to array.length');
  }

  return _subFirst(array, length);
};
/**
 * subLast
 */


exports.subFirst = subFirst;

var _subLast = function _subLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(array, array.length - length, length);
};

exports._subLast = _subLast;

var subLast = function subLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array17 = array;
    array = _array17.array;
    var _array17$length = _array17.length;
    length = _array17$length === void 0 ? 1 : _array17$length;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('subLast args(array) is not array');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, array.length)) {
    throw new RangeError('subLast args(length) must be from 0 to array.length');
  }

  return _subLast(array, length);
};

exports.subLast = subLast;
var _default = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _median: _median,
  _mode: _mode,
  _single: _single,
  _multiple: _multiple,
  _filter: _filter,
  _map: _map,
  _count: _count,
  _findFirstIndex: _findFirstIndex,
  _findLastIndex: _findLastIndex,
  _findFirst: _findFirst,
  _findLast: _findLast,
  _some: _some,
  _all: _all,
  _isFirst: _isFirst,
  _isLast: _isLast,
  _isBothEnds: _isBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  from: from,
  min: min,
  max: max,
  sum: sum,
  average: average,
  median: median,
  mode: mode,
  single: single,
  multiple: multiple,
  filter: filter,
  map: map,
  count: count,
  findFirstIndex: findFirstIndex,
  findLastIndex: findLastIndex,
  findFirst: findFirst,
  findLast: findLast,
  some: some,
  all: all,
  isFirst: isFirst,
  isLast: isLast,
  isBothEnds: isBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast,
  findIndex: findIndex,
  findBackIndex: findBackIndex,
  find: find,
  findBack: findBack,
  every: every
};
exports["default"] = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = exports._cloneDeep = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(23);

var _isObjectParameter = __webpack_require__(13);

var _clone = __webpack_require__(4);

/**
 * cloneDeep
 */
var _cloneDeep = function _cloneDeep(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _clone.clone.func.defaultArray;
  var CircularReferenceBuffer = {
    source: [],
    clone: []
  };

  var __cloneDeep = function __cloneDeep(value) {
    var index = CircularReferenceBuffer.source.indexOf(value);

    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }

    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      var result = cloneFuncArray[i](value, function (source, clone) {
        CircularReferenceBuffer.source.push(source);
        CircularReferenceBuffer.clone.push(clone);
      }, __cloneDeep);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return __cloneDeep(source);
};

exports._cloneDeep = _cloneDeep;

var cloneDeep = function cloneDeep(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _clone.clone.func.defaultArray;

  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? _clone.clone.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!(0, _type.isArray)(cloneFuncArray)) {
    throw new TypeError('cloneDeep args(cloneFuncArray) is not array');
  }

  return _cloneDeep(source, cloneFuncArray);
};

exports.cloneDeep = cloneDeep;
var _default = {
  _cloneDeep: _cloneDeep,
  cloneDeep: cloneDeep
};
exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unique = exports._unique = exports.__unique = void 0;

var _type = __webpack_require__(5);

var _syntax = __webpack_require__(37);

var _isObjectParameter = __webpack_require__(13);

var _includes = __webpack_require__(11);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * uniqe
 */
var __unique = function __unique(array) {
  if ((0, _syntax.canUseSet)() && array.length > 120) {
    return _toConsumableArray(new Set(array));
  } else {
    var result = [];

    for (var i = 0, l = array.length; i < l; i += 1) {
      if (!(0, _includes.__includes)(result, array[i])) {
        result.push(array[i]);
      }
    }

    return result;
  } // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120

};

exports.__unique = __unique;

var defaultUniqueFunc = function defaultUniqueFunc(v) {
  return v;
};

var _unique = function _unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultUniqueFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === defaultUniqueFunc) {
    if (detail === false) {
      return __unique(array);
    }
  }

  var index = [];
  var result = [];
  array.forEach(function (v) {
    var funcResult = func(v);

    if (!(0, _includes.__includes)(index, funcResult)) {
      index.push(funcResult);
      result.push(v);
    }
  });
  func = undefined;

  if (detail) {
    return {
      index: index,
      result: result
    };
  }

  return result;
};

exports._unique = _unique;

var unique = function unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultUniqueFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? defaultUniqueFunc : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? defaultUniqueFunc : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('unique args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('group args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('group args(detail) is not boolean');
  }

  if (detail && func === defaultUniqueFunc) {
    throw new TypeError('group args(detail) is true and args(func) must be function');
  }

  return _unique(array, func, detail);
};

exports.unique = unique;
var _default = {
  __unique: __unique,
  _unique: _unique,
  unique: unique
};
exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Enum = exports._Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = exports._assert = void 0;

var _assert2 = _interopRequireDefault(__webpack_require__(38));

var _guard = _interopRequireDefault(__webpack_require__(39));

var _functionValue = _interopRequireDefault(__webpack_require__(40));

var _sc = _interopRequireDefault(__webpack_require__(41));

var _if_ = _interopRequireDefault(__webpack_require__(42));

var _switch_ = _interopRequireDefault(__webpack_require__(43));

var _loop = _interopRequireDefault(__webpack_require__(28));

var _canUseMap = _interopRequireDefault(__webpack_require__(17));

var _canUseSet = _interopRequireDefault(__webpack_require__(20));

var _Enum2 = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _assert = _assert2["default"]._assert,
    assert = _assert2["default"].assert;
exports.assert = assert;
exports._assert = _assert;
var guard = _guard["default"].guard;
exports.guard = guard;
var functionValue = _functionValue["default"].functionValue;
exports.functionValue = functionValue;
var sc = _sc["default"].sc;
exports.sc = sc;
var if_ = _if_["default"].if_;
exports.if_ = if_;
var switch_ = _switch_["default"].switch_;
exports.switch_ = switch_;
var loop = _loop["default"].loop;
exports.loop = loop;
var canUseMap = _canUseMap["default"].canUseMap,
    canUseWeakMap = _canUseMap["default"].canUseWeakMap;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseMap = canUseMap;
var canUseSet = _canUseSet["default"].canUseSet,
    canUseWeakSet = _canUseSet["default"].canUseWeakSet;
exports.canUseWeakSet = canUseWeakSet;
exports.canUseSet = canUseSet;
var _Enum = _Enum2["default"]._Enum,
    Enum = _Enum2["default"].Enum;
exports.Enum = Enum;
exports._Enum = _Enum;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _assert2["default"]), _guard["default"]), _functionValue["default"]), _sc["default"]), _if_["default"]), _switch_["default"]), _loop["default"]), _canUseMap["default"]), _canUseSet["default"]), _Enum2["default"]);

exports["default"] = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.assert = exports._assert = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/**
 * assert
 */
var _assert = function _assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (value === false) {
    throw new Error('assert error' + " value:".concat(value) + (message === '' ? '' : " message:".concat(message)));
  }
};

exports._assert = _assert;

var assert = function assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'message')) {
    var _value = value;
    value = _value.value;
    var _value$message = _value.message;
    message = _value$message === void 0 ? '' : _value$message;
  } else if ((0, _isObjectParameter.isObjectParameter)(message, 'message')) {
    var _message = message;
    message = _message.message;
  }

  if (!(0, _type.isBoolean)(value)) {
    throw new TypeError('assert args(value) is not boolean.' + " value:".concat(value) + (message === '' ? '' : " message:".concat(message)));
  }

  if (!(0, _type.isString)(message)) {
    throw new TypeError('assert args(message) is not string.' + " value:".concat(value) + (message === '' ? '' : " message:".concat(message)));
  }

  return _assert(value, message);
};

exports.assert = assert;
var _default = {
  _assert: _assert,
  assert: assert
};
exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.guard = void 0;

var _type = __webpack_require__(5);

var _functionValue = __webpack_require__(40);

/**
 * guard
 */
var guard_status = true;
var guard_message;

var guard = function guard(guardFunc, runFunc) {
  guard_message = '';

  if (guard_status === false) {
    return false;
  }

  if (!(0, _type.isFunction)(guardFunc)) {
    throw new TypeError('guard args(guardFunc) is not function');
  }

  var result = guardFunc();

  if (!(0, _type.isArray)(result)) {
    throw new TypeError('guard args(guardFunc result) is not array');
  }

  for (var i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if (i === result.length - 1 && (0, _type.isUndefined)(result[i])) {
      continue;
    }

    var resultValue = undefined;
    var message = '';

    if ((0, _type.isArray)(result[i])) {
      if (!(1 <= result[i].length)) {
        throw new TypeError('guard args(guardFunc resultArray element) is not array.length >= 1');
      }

      resultValue = result[i][0];

      if (2 <= result[i].length) {
        message = result[i][1];
      }
    } else {
      resultValue = result[i];
    }

    resultValue = (0, _functionValue.functionValue)(resultValue);

    if (!(0, _type.isBoolean)(resultValue)) {
      throw new TypeError('guard args(guardFunc resultArray element value) is not boolean');
    }

    if (resultValue === false) {
      guard_message = message;

      if (!(0, _type.isUndefined)(runFunc)) {
        if (!(0, _type.isFunction)(runFunc)) {
          throw new TypeError('guard args(runFunc) is not function');
        }

        runFunc();
      }

      return true;
    }
  }

  return false;
};

exports.guard = guard;

guard.message = function () {
  return guard_message;
};

guard.status = function (value) {
  return guard_status = value;
};

guard.on = function () {
  guard_status = true;
};

guard.off = function () {
  guard_status = false;
};

var _default = {
  guard: guard
};
exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.functionValue = void 0;

var _type = __webpack_require__(5);

/**
 * function Value
 */
var functionValue = function functionValue(value) {
  if ((0, _type.isFunction)(value)) {
    return value();
  } else {
    return value;
  }
};

exports.functionValue = functionValue;
var _default = {
  functionValue: functionValue
};
exports["default"] = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sc = void 0;

/**
 * sc (second call)
 */
var sc = function sc(argsFirst, func) {
  for (var _len = arguments.length, argsRest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    argsRest[_key - 2] = arguments[_key];
  }

  return func.apply(void 0, [argsFirst].concat(argsRest));
};

exports.sc = sc;
var _default = {
  sc: sc
};
exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.if_ = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _functionValue = __webpack_require__(40);

/**
 * if_
 */
var if_ = function if_(condition) {
  if (!(0, _type.isBoolean)(condition)) {
    throw new TypeError('if_ args(condition) is not boolean');
  }

  var returnFunc = function returnFunc(then_, else_) {
    if ((0, _isObjectParameter.isObjectParameter)(then_, '', 'then, else', 1)) {
      var _then_ = then_;
      then_ = _then_.then;
      else_ = _then_["else"];
    }

    return condition ? (0, _functionValue.functionValue)(then_) : (0, _functionValue.functionValue)(else_);
  };

  if (condition) {
    returnFunc.then = function (value) {
      return {
        "else": function _else() {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };

    returnFunc["else"] = function () {
      return {
        then: function then(value) {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };
  } else {
    returnFunc.then = function () {
      return {
        "else": function _else(value) {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };

    returnFunc["else"] = function (value) {
      return {
        then: function then() {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };
  }

  return returnFunc;
};

exports.if_ = if_;
var _default = {
  if_: if_
};
exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.switch_ = void 0;

var _type = __webpack_require__(5);

var _functionValue = __webpack_require__(40);

/**
 * switch_
 */
var switch_ = function switch_(expression) {
  return function (args) {
    if (!(0, _type.isArray)(args)) {
      throw new TypeError('switch_() args is not array');
    }

    for (var i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (i === args.length - 1 && (0, _type.isUndefined)(args[i])) {
        continue;
      }

      if (!(0, _type.isArray)(args[i])) {
        throw new TypeError('switch_() args is not array in array');
      }
    }

    for (var _i = 0; _i < args.length; _i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (_i === args.length - 1 && (0, _type.isUndefined)(args[_i])) {
        continue;
      }

      if (args[_i].length === 0) {
        return undefined;
      }

      if (args[_i].length === 1) {
        return (0, _functionValue.functionValue)(args[_i][0]);
      }

      if (args[_i][0] === expression) {
        return (0, _functionValue.functionValue)(args[_i][1]);
      }
    }

    return undefined;
  };
};

exports.switch_ = switch_;
var _default = {
  switch_: switch_
};
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.add = exports._add = exports.insert = exports._insert = exports.deleteLast = exports._deleteLast = exports.deleteFirst = exports._deleteFirst = exports.deleteLength = exports._deleteLength = exports.deleteIndex = exports._deleteIndex = exports.subLast = exports._subLast = exports.subFirst = exports._subFirst = exports.subLength = exports._subLength = exports.subIndex = exports._subIndex = exports.trimBothEnds = exports._trimBothEnds = exports.trimLast = exports._trimLast = exports.trimFirst = exports._trimFirst = exports.excludeBothEnds = exports._excludeBothEnds = exports.excludeLast = exports._excludeLast = exports.excludeFirst = exports._excludeFirst = exports.includeBothEnds = exports._includeBothEnds = exports.includeLast = exports._includeLast = exports.includeFirst = exports._includeFirst = exports.isBothEnds = exports._isBothEnds = exports.isLast = exports._isLast = exports.isFirst = exports._isFirst = exports.indexOfLast = exports._indexOfLast = exports.indexOfFirst = exports._indexOfFirst = exports.isUpperCase = exports._isUpperCase = exports.isLowerCase = exports._isLowerCase = exports.repeat = exports._repeat = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _number = __webpack_require__(33);

var _array = __webpack_require__(45);

/**
 * repeat
 */
var _repeat = function _repeat(str, count) {
  var result = '';

  for (var i = 0; i < count; i += 1) {
    result += str;
  }

  return result;
};

exports._repeat = _repeat;

var repeat = function repeat(str, count) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, count')) {
    var _str = str;
    str = _str.str;
    count = _str.count;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('repeat args(str) is not string');
  }

  if (!(0, _type.isInteger)(count)) {
    throw new TypeError('repeat args(count) is not integer');
  }

  return _repeat(str, count);
};
/**
 * isLowerCase
 */


exports.repeat = repeat;

var _isLowerCase = function _isLowerCase(str) {
  return str.toLowerCase() === str;
};

exports._isLowerCase = _isLowerCase;

var isLowerCase = function isLowerCase(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('isLowerCase args(str) is not string');
  }

  return _isLowerCase(str);
};
/**
 * isUpperCase
 */


exports.isLowerCase = isLowerCase;

var _isUpperCase = function _isUpperCase(str) {
  return str.toUpperCase() === str;
};

exports._isUpperCase = _isUpperCase;

var isUpperCase = function isUpperCase(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('isUpperCase args(str) is not string');
  }

  return _isUpperCase(str);
};
/**
 * indexOfFirst
 */


exports.isUpperCase = isUpperCase;

var _indexOfFirst = function _indexOfFirst(str, search, indexStart) {
  if (search === '') {
    return -1;
  }

  return str.indexOf(search, indexStart);
};

exports._indexOfFirst = _indexOfFirst;

var indexOfFirst = function indexOfFirst(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str2 = str;
    str = _str2.str;
    search = _str2.search;
    var _str2$indexStart = _str2.indexStart;
    indexStart = _str2$indexStart === void 0 ? 0 : _str2$indexStart;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('indexOfFirst args(str) is not string');
  }

  if (!(0, _type.isString)(search)) {
    throw new TypeError('indexOfFirst args(search) is not string');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('indexOfFirst args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfFirst args(indexStart) must be from 0 to str.length - 1');
  }

  return _indexOfFirst(str, search, indexStart);
};
/**
 * indexOfLast
 */


exports.indexOfFirst = indexOfFirst;

var _indexOfLast = function _indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if (search === '') {
    return -1;
  }

  return str.lastIndexOf(search, indexStart);
};

exports._indexOfLast = _indexOfLast;

var indexOfLast = function indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str3 = str;
    str = _str3.str;
    search = _str3.search;
    var _str3$indexStart = _str3.indexStart;
    indexStart = _str3$indexStart === void 0 ? (0, _array._max)([0, str.length - 1]) : _str3$indexStart;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('indexOfLast args(str) is not string');
  }

  if (!(0, _type.isString)(search)) {
    throw new TypeError('indexOfLast args(search) is not string');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('indexOfLast args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfLast args(indexStart) must be from 0 to str.length - 1');
  }

  return _indexOfLast(str, search, indexStart);
};
/**
 * isFirst
 */


exports.indexOfLast = indexOfLast;

var _isFirst = function _isFirst(str, search) {
  return _indexOfFirst(str, search) === 0;
};

exports._isFirst = _isFirst;

var isFirst = function isFirst(str, search) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str4 = str;
    str = _str4.str;
    search = _str4.search;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('isFirst args(str) is not string');
  }

  if (!(0, _type.isString)(search)) {
    throw new TypeError('isFirst args(search) is not string');
  }

  return _isFirst(str, search);
};
/**
 * isLast
 */


exports.isFirst = isFirst;

var _isLast = function _isLast(str, search) {
  var result = _indexOfLast(str, search);

  if (result === -1) {
    return false;
  }

  return result === str.length - search.length;
};

exports._isLast = _isLast;

var isLast = function isLast(str, search) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str5 = str;
    str = _str5.str;
    search = _str5.search;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('isLast args(str) is not string');
  }

  if (!(0, _type.isString)(search)) {
    throw new TypeError('isLast args(search) is not string');
  }

  return _isLast(str, search);
};
/**
 * isBothEnds
 */


exports.isLast = isLast;

var _isBothEnds = function _isBothEnds(str, searchFirst) {
  var searchLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : searchFirst;

  if (str.length <= 1) {
    return false;
  }

  return _isFirst(str, searchFirst) && _isLast(str, searchLast);
};

exports._isBothEnds = _isBothEnds;

var isBothEnds = function isBothEnds(str, searchFirst) {
  var searchLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : searchFirst;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, searchFirst', 'searchLast')) {
    var _str6 = str;
    str = _str6.str;
    searchFirst = _str6.searchFirst;
    var _str6$searchLast = _str6.searchLast;
    searchLast = _str6$searchLast === void 0 ? searchFirst : _str6$searchLast;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str7 = str;
    str = _str7.str;
    searchFirst = _str7.search;
    searchLast = searchFirst;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('isBothEnds args(str) is not string');
  }

  if (!(0, _type.isString)(searchFirst)) {
    throw new TypeError('isBothEnds args(searchFirst) is not string');
  }

  if (!(0, _type.isString)(searchLast)) {
    throw new TypeError('isBothEnds args(searchLast) is not string');
  }

  return _isBothEnds(str, searchFirst, searchLast);
};
/**
 * string.includeFirst
 */


exports.isBothEnds = isBothEnds;

var _includeFirst = function _includeFirst(str, value) {
  if (!_isFirst(str, value)) {
    return value + str;
  }

  return str;
};

exports._includeFirst = _includeFirst;

var includeFirst = function includeFirst(str, value) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str8 = str;
    str = _str8.str;
    value = _str8.value;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('includeFirst args(str) is not string');
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('includeFirst args(value) is not string');
  }

  return _includeFirst(str, value);
};
/**
 * string.includeLast
 */


exports.includeFirst = includeFirst;

var _includeLast = function _includeLast(str, value) {
  if (!_isLast(str, value)) {
    return str + value;
  }

  return str;
};

exports._includeLast = _includeLast;

var includeLast = function includeLast(str, value) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str9 = str;
    str = _str9.str;
    value = _str9.value;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('includeLast args(str) is not string');
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('includeLast args(value) is not string');
  }

  return _includeLast(str, value);
};
/**
 * string.includeBothEnds
 */


exports.includeLast = includeLast;

var _includeBothEnds = function _includeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (!_isBothEnds(str, valueFirst, valueLast)) {
    return valueFirst + str + valueLast;
  }

  return str;
};

exports._includeBothEnds = _includeBothEnds;

var includeBothEnds = function includeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, valueFirst', 'valueLast')) {
    var _str10 = str;
    str = _str10.str;
    valueFirst = _str10.valueFirst;
    var _str10$valueLast = _str10.valueLast;
    valueLast = _str10$valueLast === void 0 ? valueFirst : _str10$valueLast;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str11 = str;
    str = _str11.str;
    valueFirst = _str11.value;
    valueLast = valueFirst;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('includeBothEnds args(str) is not string');
  }

  if (!(0, _type.isString)(valueFirst)) {
    throw new TypeError('includeBothEnds args(valueFirst) is not string');
  }

  if (!(0, _type.isString)(valueLast)) {
    throw new TypeError('includeBothEnds args(valueLast) is not string');
  }

  return _includeBothEnds(str, valueFirst, valueLast);
};
/**
 * string.excludeFirst
 */


exports.includeBothEnds = includeBothEnds;

var _excludeFirst = function _excludeFirst(str, value) {
  if (_isFirst(str, value)) {
    return _deleteFirst(str, value.length);
  }

  return str;
};

exports._excludeFirst = _excludeFirst;

var excludeFirst = function excludeFirst(str, value) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str12 = str;
    str = _str12.str;
    value = _str12.value;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('excludeFirst args(array) is not string');
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('excludeFirst args(value) is not string');
  }

  return _excludeFirst(str, value);
};
/**
 * string.excludeLast
 */


exports.excludeFirst = excludeFirst;

var _excludeLast = function _excludeLast(str, value) {
  if (_isLast(str, value)) {
    return _deleteLast(str, value.length);
  }

  return str;
};

exports._excludeLast = _excludeLast;

var excludeLast = function excludeLast(str, value) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str13 = str;
    str = _str13.str;
    value = _str13.value;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('excludeLast args(array) is not string');
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('excludeLast args(value) is not string');
  }

  return _excludeLast(str, value);
};
/**
 * string.excludeBothEnds
 */


exports.excludeLast = excludeLast;

var _excludeBothEnds = function _excludeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (_isBothEnds(str, valueFirst, valueLast)) {
    str = deleteFirst(str, valueFirst.length);
    return deleteLast(str, (0, _array._min)([valueLast.length, str.length]));
  }

  return str;
};

exports._excludeBothEnds = _excludeBothEnds;

var excludeBothEnds = function excludeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, valueFirst', 'valueLast')) {
    var _str14 = str;
    str = _str14.str;
    valueFirst = _str14.valueFirst;
    var _str14$valueLast = _str14.valueLast;
    valueLast = _str14$valueLast === void 0 ? valueFirst : _str14$valueLast;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str15 = str;
    str = _str15.str;
    valueFirst = _str15.value;
    var _str15$valueLast = _str15.valueLast;
    valueLast = _str15$valueLast === void 0 ? valueFirst : _str15$valueLast;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('excludeBothEnds args(array) is not string');
  }

  if (!(0, _type.isString)(valueFirst)) {
    throw new TypeError('excludeBothEnds args(valueFirst) is not string');
  }

  if (!(0, _type.isString)(valueLast)) {
    throw new TypeError('excludeBothEnds args(valueLast) is not string');
  }

  return _excludeBothEnds(str, valueFirst, valueLast);
};
/**
 * string.trimFirst
 */


exports.excludeBothEnds = excludeBothEnds;

var _trimFirst = function _trimFirst(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  while (true) {
    var value = (0, _array._findFirst)(valueArray, function (value) {
      return _isFirst(str, value);
    });

    if ((0, _type.isUndefined)(value)) {
      break;
    }

    str = _deleteFirst(str, value.length);
  }

  return str;
};

exports._trimFirst = _trimFirst;

var trimFirst = function trimFirst(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, valueArray')) {
    var _str16 = str;
    str = _str16.str;
    var _str16$valueArray = _str16.valueArray;
    valueArray = _str16$valueArray === void 0 ? [' ', '\r', '\n'] : _str16$valueArray;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('trimFirst args(str) is not string');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not array');
  }

  if (valueArray.length > 0 && !(0, _type.isStringArray)(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not string array');
  }

  return _trimFirst(str, valueArray);
};
/**
 * string.trimLast
 */


exports.trimFirst = trimFirst;

var _trimLast = function _trimLast(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  while (true) {
    var value = (0, _array._findFirst)(valueArray, function (value) {
      return _isLast(str, value);
    });

    if ((0, _type.isUndefined)(value)) {
      break;
    }

    str = _deleteLast(str, value.length);
  }

  return str;
};

exports._trimLast = _trimLast;

var trimLast = function trimLast(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, valueArray')) {
    var _str17 = str;
    str = _str17.str;
    var _str17$valueArray = _str17.valueArray;
    valueArray = _str17$valueArray === void 0 ? [' ', '\r', '\n'] : _str17$valueArray;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('trimLast args(string) is not string');
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('trimLast args(valueArray) is not array');
  }

  if (valueArray.length > 0 && !(0, _type.isStringArray)(valueArray)) {
    throw new TypeError('trimLast args(valueArray) element is not string array');
  }

  return _trimLast(str, valueArray);
};
/**
 * string.trimBothEnds
 */


exports.trimLast = trimLast;

var _trimBothEnds = function _trimBothEnds(str) {
  var valueFirstArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  while (true) {
    var value = (0, _array._findFirst)(valueFirstArray, function (value) {
      return _isFirst(str, value);
    });

    if ((0, _type.isUndefined)(value)) {
      break;
    }

    str = _deleteFirst(str, value.length);
  }

  while (true) {
    var _value = (0, _array._findFirst)(valueLastArray, function (value) {
      return _isLast(str, value);
    });

    if ((0, _type.isUndefined)(_value)) {
      break;
    }

    str = _deleteLast(str, _value.length);
  }

  return str;
};

exports._trimBothEnds = _trimBothEnds;

var trimBothEnds = function trimBothEnds(str) {
  var valueFirstArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, valueFirstArray', 'valueLastArray')) {
    var _str18 = str;
    str = _str18.str;
    valueFirstArray = _str18.valueFirstArray;
    var _str18$valueLastArray = _str18.valueLastArray;
    valueLastArray = _str18$valueLastArray === void 0 ? valueFirstArray : _str18$valueLastArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, valueArray')) {
    var _str19 = str;
    str = _str19.str;
    valueFirstArray = _str19.valueArray;
    valueLastArray = valueFirstArray;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('trimBothEnds args(string) is not string');
  }

  if (!(0, _type.isArray)(valueFirstArray)) {
    throw new TypeError('trimBothEnds args(valueFirstArray) is not array');
  }

  if (valueFirstArray.length > 0 && !(0, _type.isStringArray)(valueFirstArray)) {
    throw new TypeError('trimBothEnds args(valueFirstArray) is not string array');
  }

  if (!(0, _type.isArray)(valueLastArray)) {
    throw new TypeError('trimBothEnds args(valueLastArray) is not array');
  }

  if (valueLastArray.length > 0 && !(0, _type.isStringArray)(valueLastArray)) {
    throw new TypeError('trimBothEnds args(valueLastArray) is not string array');
  }

  return _trimBothEnds(str, valueFirstArray, valueLastArray);
};
/**
 * subIndex
 */


exports.trimBothEnds = trimBothEnds;

var _subIndex = function _subIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  return str.substring(indexStart, indexEnd + 1);
};

exports._subIndex = _subIndex;

var subIndex = function subIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, indexStart', 'indexEnd')) {
    var _str20 = str;
    str = _str20.str;
    indexStart = _str20.indexStart;
    var _str20$indexEnd = _str20.indexEnd;
    indexEnd = _str20$indexEnd === void 0 ? indexStart : _str20$indexEnd;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('subIndex args(str) is not string');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('subIndex args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, str.length - 1)) {
    throw new RangeError('subIndex args(indexStart) must be from 0 to str.length - 1');
  }

  if (!(0, _type.isInteger)(indexEnd)) {
    throw new TypeError('subIndex args(indexEnd) is not integer');
  }

  if (!(0, _number._inRange)(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError('subIndex args(indexEnd) must be from indexStart to str.length - 1');
  }

  return _subIndex(str, indexStart, indexEnd);
};
/**
 * subLength
 */


exports.subIndex = subIndex;

var _subLength = function _subLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;
  return _subIndex(str, index, index + length - 1); // same:
  //  return str.substring(index, index + length);
};

exports._subLength = _subLength;

var subLength = function subLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, index', 'length')) {
    var _str21 = str;
    str = _str21.str;
    index = _str21.index;
    var _str21$length = _str21.length;
    length = _str21$length === void 0 ? str.length - index : _str21$length;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('subLength args(str) is not string');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('subLength args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, str.length - 1)) {
    throw new RangeError('subLength args(indexStart) must be from 0 to str.length - 1');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subLength args(length) is not integer');
  }

  length = (0, _array._min)([length, str.length - index]);

  if (!(0, _number._inRange)(length, 0, str.length - index)) {
    throw new RangeError('subLength args(length) must be from 0 to str.length - indexStart');
  }

  return _subLength(str, index, length);
};
/**
 * subFirst
 */


exports.subLength = subLength;

var _subFirst = function _subFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(str, 0, length);
};

exports._subFirst = _subFirst;

var subFirst = function subFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str', 'length')) {
    var _str22 = str;
    str = _str22.str;
    var _str22$length = _str22.length;
    length = _str22$length === void 0 ? 1 : _str22$length;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('subFirst args(str) is not string');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, str.length)) {
    throw new RangeError('subFirst args(length) must be from 0 to str.length');
  }

  return _subFirst(str, length);
};
/**
 * subLast
 */


exports.subFirst = subFirst;

var _subLast = function _subLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(str, str.length - length, length);
};

exports._subLast = _subLast;

var subLast = function subLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str', 'length')) {
    var _str23 = str;
    str = _str23.str;
    var _str23$length = _str23.length;
    length = _str23$length === void 0 ? 1 : _str23$length;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('subLast args(str) is not string');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('subLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, str.length)) {
    throw new RangeError('subLast args(length) must be from 0 to str.length');
  }

  return _subLast(str, length);
};
/**
 * deleteIndex
 */


exports.subLast = subLast;

var _deleteIndex = function _deleteIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  var startStr = str.slice(0, indexStart);
  var endStr = str.slice(indexEnd + 1, str.length);
  return startStr + endStr;
};

exports._deleteIndex = _deleteIndex;

var deleteIndex = function deleteIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, indexStart', 'indexEnd')) {
    var _str24 = str;
    str = _str24.str;
    indexStart = _str24.indexStart;
    var _str24$indexEnd = _str24.indexEnd;
    indexEnd = _str24$indexEnd === void 0 ? indexStart : _str24$indexEnd;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('deleteIndex args(str) is not string');
  }

  if (!(0, _type.isInteger)(indexStart)) {
    throw new TypeError('deleteIndex args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, str.length - 1)) {
    throw new RangeError('deleteIndex args(indexStart) must be from 0 to str.length - 1');
  }

  if (!(0, _type.isInteger)(indexEnd)) {
    throw new TypeError('deleteIndex args(indexEnd) is not integer');
  }

  if (!(0, _number._inRange)(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError('deleteIndex args(indexEnd) must be from indexStart to str.length - 1');
  }

  return _deleteIndex(str, indexStart, indexEnd);
};
/**
 * deleteLength
 */


exports.deleteIndex = deleteIndex;

var _deleteLength = function _deleteLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;
  return _deleteIndex(str, index, index + length - 1);
};

exports._deleteLength = _deleteLength;

var deleteLength = function deleteLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, index', 'length')) {
    var _str25 = str;
    str = _str25.str;
    index = _str25.index;
    var _str25$length = _str25.length;
    length = _str25$length === void 0 ? str.length - index : _str25$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(index, 'index', 'length')) {
    var _index = index;
    index = _index.index;
    var _index$length = _index.length;
    length = _index$length === void 0 ? str.length - index : _index$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('deleteLength args(str) is not string');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('deleteLength args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, str.length - 1)) {
    throw new RangeError('deleteLength args(indexStart) must be from 0 to str.length - 1');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  length = (0, _array._min)([length, str.length - index]);

  if (!(0, _number._inRange)(length, 0, str.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 0 to str.length - indexStart');
  }

  return _deleteLength(str, index, length);
};
/**
 * deleteFirst
 */


exports.deleteLength = deleteLength;

var _deleteFirst = function _deleteFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(str, 0, length);
};

exports._deleteFirst = _deleteFirst;

var deleteFirst = function deleteFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str', 'length')) {
    var _str26 = str;
    str = _str26.str;
    var _str26$length = _str26.length;
    length = _str26$length === void 0 ? 1 : _str26$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length2 = length;
    length = _length2.length;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('deleteFirst args(str) is not string');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, str.length)) {
    throw new RangeError('deleteFirst args(length) must be from 0 to str.length');
  }

  return _deleteFirst(str, length);
};
/**
 * deleteLast
 */


exports.deleteFirst = deleteFirst;

var _deleteLast = function _deleteLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(str, str.length - length, length);
};

exports._deleteLast = _deleteLast;

var deleteLast = function deleteLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str', 'length')) {
    var _str27 = str;
    str = _str27.str;
    var _str27$length = _str27.length;
    length = _str27$length === void 0 ? 1 : _str27$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length3 = length;
    length = _length3.length;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('deleteLast args(str) is not string');
  }

  if (!(0, _type.isInteger)(length)) {
    throw new TypeError('deleteLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 0, str.length)) {
    throw new RangeError('deleteLast args(length) must be from 0 to str.length');
  }

  return _deleteLast(str, length);
};
/**
 * string.insert
 */


exports.deleteLast = deleteLast;

var _insert = function _insert(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  str = _subFirst(str, index) + value + _subLast(str, str.length - index);
  return str;
};

exports._insert = _insert;

var insert = function insert(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value', 'index')) {
    var _str28 = str;
    str = _str28.str;
    value = _str28.value;
    var _str28$index = _str28.index;
    index = _str28$index === void 0 ? 0 : _str28$index;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('insert args(str) is not string');
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('insert args(value) is not string');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, 0, str.length)) {
    throw new RangeError('insert args(index) must be from 0 to str.length');
  }

  return _insert(str, value, index);
};
/**
 * string.add
 */


exports.insert = insert;

var _add = function _add(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - 1;
  str = _subFirst(str, index + 1) + value + _subLast(str, str.length - index - 1);
  return str;
};

exports._add = _add;

var add = function add(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - 1;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value', 'index')) {
    var _str29 = str;
    str = _str29.str;
    value = _str29.value;
    var _str29$index = _str29.index;
    index = _str29$index === void 0 ? str.length - 1 : _str29$index;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('add args(str) is not string');
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('add args(value) is not string');
  }

  if (!(0, _type.isInteger)(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!(0, _number._inRange)(index, -1, str.length - 1)) {
    throw new RangeError('add args(index) must be from -1 to str.length - 1');
  }

  return _add(str, value, index);
};

exports.add = add;
var _default = {
  _repeat: _repeat,
  _isLowerCase: _isLowerCase,
  _isUpperCase: _isUpperCase,
  _indexOfFirst: _indexOfFirst,
  _indexOfLast: _indexOfLast,
  _isFirst: _isFirst,
  _isLast: _isLast,
  _isBothEnds: _isBothEnds,
  _includeFirst: _includeFirst,
  _includeLast: _includeLast,
  _includeBothEnds: _includeBothEnds,
  _excludeFirst: _excludeFirst,
  _excludeLast: _excludeLast,
  _excludeBothEnds: _excludeBothEnds,
  _trimFirst: _trimFirst,
  _trimLast: _trimLast,
  _trimBothEnds: _trimBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  _deleteIndex: _deleteIndex,
  _deleteLength: _deleteLength,
  _deleteFirst: _deleteFirst,
  _deleteLast: _deleteLast,
  _insert: _insert,
  _add: _add,
  repeat: repeat,
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  indexOfFirst: indexOfFirst,
  indexOfLast: indexOfLast,
  isFirst: isFirst,
  isLast: isLast,
  isBothEnds: isBothEnds,
  includeFirst: includeFirst,
  includeLast: includeLast,
  includeBothEnds: includeBothEnds,
  excludeFirst: excludeFirst,
  excludeLast: excludeLast,
  excludeBothEnds: excludeBothEnds,
  trimFirst: trimFirst,
  trimLast: trimLast,
  trimBothEnds: trimBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast,
  deleteIndex: deleteIndex,
  deleteLength: deleteLength,
  deleteFirst: deleteFirst,
  deleteLast: deleteLast,
  insert: insert,
  add: add
};
exports["default"] = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operation = exports["default"] = exports.unique = exports._unique = exports.__unique = exports.group = exports._group = exports.arrayEntries = exports.arrayToIndexValueArray = exports._arrayToIndexValueArray = exports.IntegerArray = exports._IntegerArray = exports.NumberArray = exports._NumberArray = exports.every = exports.findBack = exports.find = exports.findBackIndex = exports.findIndex = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.isBothEnds = exports.isLast = exports.isFirst = exports.all = exports.some = exports.findLast = exports.findFirst = exports.findLastIndex = exports.findFirstIndex = exports.count = exports.map = exports.filter = exports.multiple = exports.single = exports.mode = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.from = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._isBothEnds = exports._isLast = exports._isFirst = exports._all = exports._some = exports._findLast = exports._findFirst = exports._findLastIndex = exports._findFirstIndex = exports._count = exports._map = exports._filter = exports._multiple = exports._single = exports._mode = exports._median = exports._average = exports._sum = exports._max = exports._min = void 0;

var _array_common = _interopRequireDefault(__webpack_require__(34));

var _NumberArray2 = _interopRequireDefault(__webpack_require__(30));

var _IntegerArray2 = _interopRequireDefault(__webpack_require__(29));

var _arrayToIndexValueArray2 = _interopRequireDefault(__webpack_require__(46));

var _group2 = _interopRequireDefault(__webpack_require__(47));

var _unique2 = _interopRequireDefault(__webpack_require__(36));

var _array_operation = _interopRequireDefault(__webpack_require__(32));

var _sort = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _min = _array_common["default"]._min,
    _max = _array_common["default"]._max,
    _sum = _array_common["default"]._sum,
    _average = _array_common["default"]._average,
    _median = _array_common["default"]._median,
    _mode = _array_common["default"]._mode,
    _single = _array_common["default"]._single,
    _multiple = _array_common["default"]._multiple,
    _filter = _array_common["default"]._filter,
    _map = _array_common["default"]._map,
    _count = _array_common["default"]._count,
    _findFirstIndex = _array_common["default"]._findFirstIndex,
    _findLastIndex = _array_common["default"]._findLastIndex,
    _findFirst = _array_common["default"]._findFirst,
    _findLast = _array_common["default"]._findLast,
    _some = _array_common["default"]._some,
    _all = _array_common["default"]._all,
    _isFirst = _array_common["default"]._isFirst,
    _isLast = _array_common["default"]._isLast,
    _isBothEnds = _array_common["default"]._isBothEnds,
    _subIndex = _array_common["default"]._subIndex,
    _subLength = _array_common["default"]._subLength,
    _subFirst = _array_common["default"]._subFirst,
    _subLast = _array_common["default"]._subLast,
    from = _array_common["default"].from,
    min = _array_common["default"].min,
    max = _array_common["default"].max,
    sum = _array_common["default"].sum,
    average = _array_common["default"].average,
    median = _array_common["default"].median,
    mode = _array_common["default"].mode,
    single = _array_common["default"].single,
    multiple = _array_common["default"].multiple,
    filter = _array_common["default"].filter,
    map = _array_common["default"].map,
    count = _array_common["default"].count,
    findFirstIndex = _array_common["default"].findFirstIndex,
    findLastIndex = _array_common["default"].findLastIndex,
    findFirst = _array_common["default"].findFirst,
    findLast = _array_common["default"].findLast,
    some = _array_common["default"].some,
    all = _array_common["default"].all,
    isFirst = _array_common["default"].isFirst,
    isLast = _array_common["default"].isLast,
    isBothEnds = _array_common["default"].isBothEnds,
    subIndex = _array_common["default"].subIndex,
    subLength = _array_common["default"].subLength,
    subFirst = _array_common["default"].subFirst,
    subLast = _array_common["default"].subLast,
    findIndex = _array_common["default"].findIndex,
    findBackIndex = _array_common["default"].findBackIndex,
    find = _array_common["default"].find,
    findBack = _array_common["default"].findBack,
    every = _array_common["default"].every;
exports.every = every;
exports.findBack = findBack;
exports.find = find;
exports.findBackIndex = findBackIndex;
exports.findIndex = findIndex;
exports.subLast = subLast;
exports.subFirst = subFirst;
exports.subLength = subLength;
exports.subIndex = subIndex;
exports.isBothEnds = isBothEnds;
exports.isLast = isLast;
exports.isFirst = isFirst;
exports.all = all;
exports.some = some;
exports.findLast = findLast;
exports.findFirst = findFirst;
exports.findLastIndex = findLastIndex;
exports.findFirstIndex = findFirstIndex;
exports.count = count;
exports.map = map;
exports.filter = filter;
exports.multiple = multiple;
exports.single = single;
exports.mode = mode;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
exports.from = from;
exports._subLast = _subLast;
exports._subFirst = _subFirst;
exports._subLength = _subLength;
exports._subIndex = _subIndex;
exports._isBothEnds = _isBothEnds;
exports._isLast = _isLast;
exports._isFirst = _isFirst;
exports._all = _all;
exports._some = _some;
exports._findLast = _findLast;
exports._findFirst = _findFirst;
exports._findLastIndex = _findLastIndex;
exports._findFirstIndex = _findFirstIndex;
exports._count = _count;
exports._map = _map;
exports._filter = _filter;
exports._multiple = _multiple;
exports._single = _single;
exports._mode = _mode;
exports._median = _median;
exports._average = _average;
exports._sum = _sum;
exports._max = _max;
exports._min = _min;
var _NumberArray = _NumberArray2["default"]._NumberArray,
    NumberArray = _NumberArray2["default"].NumberArray;
exports.NumberArray = NumberArray;
exports._NumberArray = _NumberArray;
var _IntegerArray = _IntegerArray2["default"]._IntegerArray,
    IntegerArray = _IntegerArray2["default"].IntegerArray;
exports.IntegerArray = IntegerArray;
exports._IntegerArray = _IntegerArray;
var _arrayToIndexValueArray = _arrayToIndexValueArray2["default"]._arrayToIndexValueArray,
    arrayToIndexValueArray = _arrayToIndexValueArray2["default"].arrayToIndexValueArray,
    arrayEntries = _arrayToIndexValueArray2["default"].arrayEntries;
exports.arrayEntries = arrayEntries;
exports.arrayToIndexValueArray = arrayToIndexValueArray;
exports._arrayToIndexValueArray = _arrayToIndexValueArray;
var _group = _group2["default"]._group,
    group = _group2["default"].group;
exports.group = group;
exports._group = _group;
var __unique = _unique2["default"].__unique,
    _unique = _unique2["default"]._unique,
    unique = _unique2["default"].unique;
exports.unique = unique;
exports._unique = _unique;
exports.__unique = __unique;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_common["default"]), _NumberArray2["default"]), _IntegerArray2["default"]), _arrayToIndexValueArray2["default"]), _group2["default"]), _unique2["default"]), {}, {
  operation: _objectSpread(_objectSpread({}, _array_operation["default"]), _sort["default"])
});

exports["default"] = _default;

var operation = _objectSpread(_objectSpread({}, _array_operation["default"]), _sort["default"]);

exports.operation = operation;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrayEntries = exports.arrayToIndexValueArray = exports._arrayToIndexValueArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _NumberArray2 = __webpack_require__(30);

/**
 * arrayToIndexValueArray
 */
var _arrayToIndexValueArray = function _arrayToIndexValueArray(array) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }

  return result;
};

exports._arrayToIndexValueArray = _arrayToIndexValueArray;

var arrayToIndexValueArray = function arrayToIndexValueArray(array) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array')) {
    var _array = array;
    array = _array.array;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('arrayToIndexValueArray args(array) is not array');
  }

  return _arrayToIndexValueArray(array);
};

exports.arrayToIndexValueArray = arrayToIndexValueArray;
var arrayEntries = arrayToIndexValueArray;
exports.arrayEntries = arrayEntries;
var _default = {
  _arrayToIndexValueArray: _arrayToIndexValueArray,
  arrayToIndexValueArray: arrayToIndexValueArray,
  arrayEntries: arrayEntries
};
exports["default"] = _default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.group = exports._group = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/**
 * group
 */
var _group = function _group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v;
  };
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var index = [];
  var result = [];
  array.forEach(function (v) {
    var funcResult = func(v);
    var i = index.indexOf(funcResult);

    if (i === -1) {
      index.push(funcResult);
      result.push([v]);
    } else {
      result[i].push(v);
    }
  });

  if (detail) {
    return {
      index: index,
      result: result
    };
  }

  return result;
};

exports._group = _group;

var group = function group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v;
  };
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? function (v) {
      return v;
    } : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? function (v) {
      return v;
    } : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('group args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('group args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('group args(detail) is not boolean');
  }

  return _group(array, func, detail);
};

exports.group = group;
var _default = {
  _group: _group,
  group: group
};
exports["default"] = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortDictionaryDescending = exports.sortDictionaryAscending = exports.sortLengthDescending = exports.sortLengthAscending = exports.sortNumberDescending = exports.sortNumberAscending = exports.sortDictionary = exports._sortDictionary = exports.sortLength = exports._sortLength = exports.sortNumber = exports._sortNumber = exports.sort = exports._sort = void 0;

var _type = __webpack_require__(5);

var _syntax = __webpack_require__(37);

var _or2 = __webpack_require__(49);

var _isObjectParameter = __webpack_require__(13);

var _objectValues2 = __webpack_require__(50);

var _Enum2 = __webpack_require__(27);

/**
 * array.operation.sort
 */
var _sort = function _sort(array) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sort.order.ascending;
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sort.targetFunc.returnValue;
  var orderFunc = (0, _syntax.switch_)(order)([[sort.order.ascending, function () {
    return sort.orderFunc.ascending;
  }], [sort.order.descending, function () {
    return sort.orderFunc.descending;
  }], [function () {
    throw new TypeError('_sort args(order) is not ["ascending"|"descending"]');
  }]]);
  array.sort(function (a, b) {
    return orderFunc(func(a), func(b));
  });
  return array;
};

exports._sort = _sort;

var sort = function sort(array) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sort.order.ascending;
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sort.targetFunc.returnValue;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'order, func')) {
    var _array = array;
    array = _array.array;
    var _array$order = _array.order;
    order = _array$order === void 0 ? sort.order.ascending : _array$order;
    var _array$func = _array.func;
    func = _array$func === void 0 ? sort.targetFunc.returnValue : _array$func;
  } else if ((0, _isObjectParameter.isObjectParameter)(order, '', 'order, func')) {
    var _order = order;
    var _order$order = _order.order;
    order = _order$order === void 0 ? sort.order.ascending : _order$order;
    var _order$func = _order.func;
    func = _order$func === void 0 ? sort.targetFunc.returnValue : _order$func;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? sort.targetFunc.returnValue : _func$func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('sort args(array) is not array');
  }

  if (!(0, _or2._or)(order, (0, _objectValues2._objectValues)(sort.order))) {
    throw new TypeError('sort args(order) is not ["ascending"|"descending"]');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('sort args(func) is not function');
  }

  return _sort(array, order, func);
};

exports.sort = sort;
sort.orderFunc = {
  ascending: function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  },
  descending: function descending(a, b) {
    return a > b ? -1 : a < b ? 1 : 0;
  }
};
sort.order = (0, _Enum2._Enum)(['ascending', 'descending']);
sort.targetFunc = {
  returnValue: function returnValue(v) {
    return v;
  },
  returnValueErrorNotIsNumber: function returnValueErrorNotIsNumber(v) {
    if (!(0, _type.isNumber)(v)) {
      throw new TypeError('sortNumber args(array) element is not number');
    }

    return v;
  },
  returnValueErrorNotIsString: function returnValueErrorNotIsString(v) {
    if (!(0, _type.isString)(v)) {
      throw new TypeError('sortDictionary args(array) element is not string');
    }

    return v.toLowerCase();
  },
  returnLength: function returnLength(v) {
    return v.length;
  },
  returnLengthErrorNotHasLength: function returnLengthErrorNotHasLength(v) {
    if (!((0, _type.isString)(v) || 'length' in v)) {
      throw new TypeError('sortLength args(array) element must have length property');
    }

    return v.length;
  }
};

var _sortNumber = function _sortNumber(array, order) {
  return _sort(array, order);
};

exports._sortNumber = _sortNumber;

var sortNumber = function sortNumber(array, order) {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsNumber);
};

exports.sortNumber = sortNumber;

var _sortLength = function _sortLength(array, order) {
  return sort(array, order, sort.targetFunc.returnLength);
};

exports._sortLength = _sortLength;

var sortLength = function sortLength(array, order) {
  return sort(array, order, sort.targetFunc.returnLengthErrorNotHasLength);
};

exports.sortLength = sortLength;

var _sortDictionary = function _sortDictionary(array, order) {
  return sort(array, order);
};

exports._sortDictionary = _sortDictionary;

var sortDictionary = function sortDictionary(array, order) {
  return sort(array, order, sort.targetFunc.returnValueErrorNotIsString);
};

exports.sortDictionary = sortDictionary;

var sortNumberAscending = function sortNumberAscending(array) {
  return sortNumber(array, sort.order.ascending);
};

exports.sortNumberAscending = sortNumberAscending;

var sortNumberDescending = function sortNumberDescending(array) {
  return sortNumber(array, sort.order.descending);
};

exports.sortNumberDescending = sortNumberDescending;

var sortLengthAscending = function sortLengthAscending(array) {
  return sortLength(array, sort.order.ascending);
};

exports.sortLengthAscending = sortLengthAscending;

var sortLengthDescending = function sortLengthDescending(array) {
  return sortLength(array, sort.order.descending);
};

exports.sortLengthDescending = sortLengthDescending;

var sortDictionaryAscending = function sortDictionaryAscending(array) {
  return sortDictionary(array, sort.order.ascending);
};

exports.sortDictionaryAscending = sortDictionaryAscending;

var sortDictionaryDescending = function sortDictionaryDescending(array) {
  return sortDictionary(array, sort.order.descending);
};

exports.sortDictionaryDescending = sortDictionaryDescending;
var _default = {
  _sort: _sort,
  _sortNumber: _sortNumber,
  _sortLength: _sortLength,
  _sortDictionary: _sortDictionary,
  sort: sort,
  sortNumber: sortNumber,
  sortLength: sortLength,
  sortDictionary: sortDictionary,
  sortNumberAscending: sortNumberAscending,
  sortNumberDescending: sortNumberDescending,
  sortLengthAscending: sortLengthAscending,
  sortLengthDescending: sortLengthDescending,
  sortDictionaryAscending: sortDictionaryAscending,
  sortDictionaryDescending: sortDictionaryDescending
};
exports["default"] = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.or = exports._or = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/**
 * or
 */
var _or = function _or(value, compareArray) {
  for (var i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }

  return false;
};

exports._or = _or;

var or = function or(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('or args(compareArray) is not array');
  }

  return _or(value, compareArray);
};

exports.or = or;
var _default = {
  _or: _or,
  or: or
};
exports["default"] = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToValueArray = exports.objectValues = exports._objectValues = void 0;

var _isType = __webpack_require__(6);

var _isObjectParameter = __webpack_require__(13);

var _hasOwn2 = __webpack_require__(8);

/**
 * objectValues
 */
var _objectValues = function _objectValues(object) {
  var result = [];

  for (var key in object) {
    if ((0, _hasOwn2._hasOwn)(object, key)) {
      result.push(object[key]);
    }
  }

  return result;
};

exports._objectValues = _objectValues;

var objectValues = function objectValues(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('objectValues args(object) is not object');
  }

  return _objectValues(object);
};

exports.objectValues = objectValues;
var objectToValueArray = objectValues;
exports.objectToValueArray = objectToValueArray;
var _default = {
  _objectValues: _objectValues,
  objectValues: objectValues,
  objectToValueArray: objectToValueArray
};
exports["default"] = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.inProp = exports.inProperty = exports._inProperty = void 0;

var _type = __webpack_require__(5);

var _replaceAll2 = __webpack_require__(14);

var _isObjectParameter = __webpack_require__(13);

var _getProperty2 = __webpack_require__(52);

var _splitCommaItems2 = __webpack_require__(25);

var _includes = __webpack_require__(11);

/**
 * _inProperty
 */
var _inProperty = function _inProperty(object, propertyPaths) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _type.isString)(propertyPaths)) {
    propertyPaths = (0, _splitCommaItems2._splitCommaItems)(propertyPaths);
  } else {
    if ((0, _includes.__includes)(propertyPaths, '')) {
      throw new Error('_inProperty args(propertyPaths) element is not empty string');
    }
  }

  if (propertyPaths.length === 0) {
    return false;
  }

  for (var i = 0; i < propertyPaths.length; i += 1) {
    var result = (0, _getProperty2._getProperty)(object, propertyPaths[i], hasOwn, true);

    if (result.exist === false) {
      return false;
    }
  }

  return true;
};
/**
 * inProperty
 */


exports._inProperty = _inProperty;

var inProperty = function inProperty(object, propertyPaths) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPaths', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyPaths = _object.propertyPaths;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyPaths, 'propertyPaths', 'hasOwn')) {
    var _propertyPaths = propertyPaths;
    propertyPaths = _propertyPaths.propertyPaths;
    var _propertyPaths$hasOwn = _propertyPaths.hasOwn;
    hasOwn = _propertyPaths$hasOwn === void 0 ? true : _propertyPaths$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, 'hasOwn')) {
    var _hasOwn = hasOwn;
    hasOwn = _hasOwn.hasOwn;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('inProperty args(object) is not objectLike');
  }

  if (!((0, _type.isString)(propertyPaths) || (0, _type.isStringArray)(propertyPaths))) {
    throw new TypeError('inProperty args(propertyPaths) is not [string array|string]');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('inProperty args(hasOwn) is not boolean');
  }

  return _inProperty(object, propertyPaths, hasOwn);
};

exports.inProperty = inProperty;
var inProp = inProperty;
exports.inProp = inProp;
var _default = {
  _inProperty: _inProperty,
  inProperty: inProperty,
  inProp: inProp
};
exports["default"] = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getProp = exports.getProperty = exports._getProperty = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _has2 = __webpack_require__(53);

var _splitDotItems2 = __webpack_require__(54);

/**
 * getProperty
 */
var _getProperty = function _getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var result = object;
  var propertyArray = (0, _splitDotItems2._splitDotItems)(propertyPath);

  if (propertyArray.length === 0) {
    return detail ? {
      exist: false
    } : undefined;
  }

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (!(0, _type.isObjectLike)(result)) {
      return detail ? {
        exist: false
      } : undefined;
    }

    var hasResult = (0, _has2._has)(result, propertyArray[i], hasOwn);

    if (!hasResult) {
      return detail ? {
        exist: false
      } : undefined;
    }

    result = result[propertyArray[i]];
  }

  return detail ? {
    exist: true,
    value: result
  } : result;
};

exports._getProperty = _getProperty;

var getProperty = function getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath', 'hasOwn, detail')) {
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
    var _object$detail = _object.detail;
    detail = _object$detail === void 0 ? false : _object$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyPath, 'propertyPath', 'hasOwn, detail')) {
    var _propertyPath = propertyPath;
    propertyPath = _propertyPath.propertyPath;
    var _propertyPath$hasOwn = _propertyPath.hasOwn;
    hasOwn = _propertyPath$hasOwn === void 0 ? true : _propertyPath$hasOwn;
    var _propertyPath$detail = _propertyPath.detail;
    detail = _propertyPath$detail === void 0 ? false : _propertyPath$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, '', 'hasOwn, detail', 1)) {
    var _hasOwn = hasOwn;
    var _hasOwn$hasOwn = _hasOwn.hasOwn;
    hasOwn = _hasOwn$hasOwn === void 0 ? true : _hasOwn$hasOwn;
    var _hasOwn$detail = _hasOwn.detail;
    detail = _hasOwn$detail === void 0 ? false : _hasOwn$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isObject)(object)) {
    throw new TypeError('getProperty args(object) is not object');
  }

  if (!(0, _type.isString)(propertyPath)) {
    throw new TypeError('getProperty args(propertyPath) is not string');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('getProperty args(detail) is not boolean');
  }

  return _getProperty(object, propertyPath, hasOwn, detail);
};

exports.getProperty = getProperty;
var getProp = getProperty;
exports.getProp = getProp;
var _default = {
  _getProperty: _getProperty,
  getProperty: getProperty,
  getProp: getProp
};
exports["default"] = _default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hasPrototype = exports._hasPrototype = exports.has = exports._has = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _hasOwn3 = __webpack_require__(8);

/**
 * has
 */
var _has = function _has(object, propertyName) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (hasOwn) {
    return (0, _hasOwn3._hasOwn)(object, propertyName);
  } else {
    return propertyName in object;
  }
};

exports._has = _has;

var has = function has(object, propertyName) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyName', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyName = _object.propertyName;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? false : _object$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyName, 'propertyName', 'hasOwn')) {
    var _propertyName = propertyName;
    propertyName = _propertyName.propertyName;
    var _propertyName$hasOwn = _propertyName.hasOwn;
    hasOwn = _propertyName$hasOwn === void 0 ? false : _propertyName$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, 'hasOwn')) {
    var _hasOwn2 = hasOwn;
    hasOwn = _hasOwn2.hasOwn;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('has args(object) is not objectLike');
  }

  if (!(0, _type.isString)(propertyName)) {
    throw new TypeError('has args(propertyName) is not string');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('has args(hasOwn) is not boolean');
  }

  return _has(object, propertyName, hasOwn);
};
/**
 * hasPrototype
 */


exports.has = has;

var _hasPrototype = function _hasPrototype(object, propertyName) {
  if (!(propertyName in object)) {
    return false;
  }

  return !(0, _hasOwn3._hasOwn)(object, propertyName);
};

exports._hasPrototype = _hasPrototype;

var hasPrototype = function hasPrototype(object, propertyName) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyName')) {
    var _object2 = object;
    object = _object2.object;
    propertyName = _object2.propertyName;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyName, 'propertyName')) {
    var _propertyName2 = propertyName;
    propertyName = _propertyName2.propertyName;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('hasPrototype args(object) is not objectLike');
  }

  if (!(0, _type.isString)(propertyName)) {
    throw new TypeError('hasPrototype args(propertyName) is not string');
  }

  return _hasPrototype(object, propertyName);
};

exports.hasPrototype = hasPrototype;
var _default = {
  _hasPrototype: _hasPrototype,
  _has: _has,
  hasPrototype: hasPrototype,
  has: has
};
exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.splitDotItems = exports._splitDotItems = void 0;

var _type = __webpack_require__(5);

var _split = __webpack_require__(26);

var _includes = __webpack_require__(11);

var _splitDotItems = function _splitDotItems(str) {
  if (str === '') {
    return [];
  }

  var result = (0, _split.split)(str, '.', _split.split.excludeEmptyStr.first, _split.split.excludeSpace.none);

  if ((0, _includes.__includes)(result, '')) {
    throw new Error("_splitDotItems args(str:".concat(str, ") is not correct format"));
  }

  return result;
};

exports._splitDotItems = _splitDotItems;

var splitDotItems = function splitDotItems(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('splitDotItems args(str) is not string');
  }

  return _splitDotItems(str);
};

exports.splitDotItems = splitDotItems;
var _default = {
  _splitDotItems: _splitDotItems,
  splitDotItems: splitDotItems
};
exports["default"] = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fixProp = exports.fixProperty = exports._fixProperty = void 0;

var _type = __webpack_require__(5);

var _replaceAll2 = __webpack_require__(14);

var _isObjectParameter = __webpack_require__(13);

var _hasOwn2 = __webpack_require__(8);

var _propertyCount2 = __webpack_require__(7);

var _splitCommaItems2 = __webpack_require__(25);

var _includes = __webpack_require__(11);

/**
 * _fixProperty
 */
var _fixProperty = function _fixProperty(object, propertyNames) {
  if ((0, _type.isString)(propertyNames)) {
    propertyNames = (0, _splitCommaItems2._splitCommaItems)(propertyNames);
  } else {
    if ((0, _includes.__includes)(propertyNames, '')) {
      throw new Error('_fixProperty args(propertyNames) element is not empty string');
    }
  }

  for (var i = 0; i < propertyNames.length; i += 1) {
    var result = (0, _hasOwn2._hasOwn)(object, propertyNames[i]);

    if (result === false) {
      return false;
    }
  }

  return (0, _propertyCount2._propertyCount)(object) === propertyNames.length;
};
/**
 * fixProperty
 */


exports._fixProperty = _fixProperty;

var fixProperty = function fixProperty(object, propertyNames) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyNames')) {
    var _object = object;
    object = _object.object;
    propertyNames = _object.propertyNames;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyNames, 'propertyNames')) {
    var _propertyNames = propertyNames;
    propertyNames = _propertyNames.propertyNames;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('fixProperty args(object) is not objectLike');
  }

  if (!((0, _type.isString)(propertyNames) || (0, _type.isStringArray)(propertyNames))) {
    throw new TypeError('fixProperty args(propertyPaths) is not [string array|string]');
  }

  return _fixProperty(object, propertyNames);
};

exports.fixProperty = fixProperty;
var fixProp = fixProperty;
exports.fixProp = fixProp;
var _default = {
  _fixProperty: _fixProperty,
  fixProperty: fixProperty,
  fixProp: fixProp
};
exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToKeyArray = exports.objectKeys = exports._objectKeys = void 0;

var _isType = __webpack_require__(6);

var _isObjectParameter = __webpack_require__(13);

var _hasOwn2 = __webpack_require__(8);

/**
 * objectKeys
 */
var _objectKeys = function _objectKeys(object) {
  var result = [];

  for (var key in object) {
    if ((0, _hasOwn2._hasOwn)(object, key)) {
      result.push(key);
    }
  }

  return result;
};

exports._objectKeys = _objectKeys;

var objectKeys = function objectKeys(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('objectKeys args(object) is not object');
  }

  return _objectKeys(object);
};

exports.objectKeys = objectKeys;
var objectToKeyArray = objectKeys;
exports.objectToKeyArray = objectToKeyArray;
var _default = {
  _objectKeys: _objectKeys,
  objectKeys: objectKeys,
  objectToKeyArray: objectToKeyArray
};
exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hasOwn = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _hasOwn2 = __webpack_require__(8);

/**
 * hasOwn
 */
var hasOwn = function hasOwn(object, propertyName) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyName')) {
    var _object = object;
    object = _object.object;
    propertyName = _object.propertyName;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyName, 'propertyName')) {
    var _propertyName = propertyName;
    propertyName = _propertyName.propertyName;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('hasOwn args(object) is not objectLike');
  }

  if (!(0, _type.isString)(propertyName)) {
    throw new TypeError('hasOwn args(propertyName) is not string');
  }

  return (0, _hasOwn2._hasOwn)(object, propertyName);
};

exports.hasOwn = hasOwn;
var _default = {
  hasOwn: hasOwn
};
exports["default"] = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propCount = exports.propertyCount = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _propertyCount2 = __webpack_require__(7);

/**
 * propertyCount
 */
var propertyCount = function propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, 'hasOwn')) {
    var _hasOwn = hasOwn;
    hasOwn = _hasOwn.hasOwn;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('propertyCount args(object) is not objectLike');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return (0, _propertyCount2._propertyCount)(object, hasOwn);
};

exports.propertyCount = propertyCount;
var propCount = propertyCount;
exports.propCount = propCount;
var _default = {
  propertyCount: propertyCount,
  propCount: propCount
};
exports["default"] = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propertyList = exports._propertyList = void 0;

var _isType = __webpack_require__(6);

var _loop = __webpack_require__(28);

var _objectEntries = __webpack_require__(31);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * propertyList
 */
var _propertyList = function _propertyList(object) {
  var result = '';
  var lineHead = '';

  var __propertyList = function __propertyList(object, lineHead) {
    (0, _loop.loop)((0, _objectEntries.objectEntries)(object))(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      if ((0, _isType.isObject)(value) || (0, _isType.isModule)(value)) {
        __propertyList(value, lineHead + '.' + key);
      } else {
        result += "".concat(lineHead, ".").concat(key, ":").concat((0, _isType.objectToString)(value), ":").concat(_typeof(value), "\n");
      }
    });
    return result;
  };

  return __propertyList(object, '');
};

exports._propertyList = _propertyList;

var propertyList = function propertyList(object) {
  if (!((0, _isType.isObject)(object) || (0, _isType.isModule)(object))) {
    throw new TypeError('propertyList args(object) is not object');
  }

  return _propertyList(object);
};

exports.propertyList = propertyList;
var _default = {
  _propertyList: _propertyList,
  propertyList: propertyList
};
exports["default"] = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotExceptArray = exports.isNotObjTypeArray = exports.isNotEmptyObjArray = exports.isNotObjLikeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isNotArrayTypeArray = exports.isNotObjectTypeArray = exports.isExceptArray = exports.isObjTypeArray = exports.isEmptyObjArray = exports.isObjLikeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isArrayTypeArray = exports.isObjectTypeArray = exports.isNotExceptAll = exports.isNotObjTypeAll = exports.isNotEmptyObjAll = exports.isNotObjLikeAll = exports.isNotObjFromNullAll = exports.isNotObjNormalAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isNotArrayTypeAll = exports.isNotObjectTypeAll = exports.isExceptAll = exports.isObjTypeAll = exports.isEmptyObjAll = exports.isObjLikeAll = exports.isObjFromNullAll = exports.isObjNormalAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isArrayTypeAll = exports.isObjectTypeAll = exports.isNotExcept = exports.isExcept = exports.isNotObjType = exports.isNotEmptyObj = exports.isNotObjLike = exports.isNotObjFromNull = exports.isNotObjNormal = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isNotArrayType = exports.isNotObjectType = exports.isObjType = exports.isEmptyObj = exports.isObjLike = exports.isObjFromNull = exports.isObjNormal = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isArrayType = exports.isObjectType = void 0;

var _isType = _interopRequireDefault(__webpack_require__(6));

var _isException = _interopRequireDefault(__webpack_require__(12));

var _isSymbol = _interopRequireDefault(__webpack_require__(15));

var _isMap = _interopRequireDefault(__webpack_require__(16));

var _isSet = _interopRequireDefault(__webpack_require__(19));

var _isTypeAll = _interopRequireDefault(__webpack_require__(21));

var _isTypeArray = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isUndefined = _isType["default"].isUndefined,
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
    isNotEmptyArray = _isType["default"].isNotEmptyArray; // Another name

var isObjectType = isObjectLike;
exports.isObjectType = isObjectType;
var isArrayType = isArraySeries; // Short name

exports.isArrayType = isArrayType;
var isUndef = isUndefined;
exports.isUndef = isUndef;
var isBool = isBoolean;
exports.isBool = isBool;
var isNum = isNumber;
exports.isNum = isNum;
var isInt = isInteger;
exports.isInt = isInt;
var isStr = isString;
exports.isStr = isStr;
var isFunc = isFunction;
exports.isFunc = isFunc;
var isObj = isObject;
exports.isObj = isObj;
var isObjNormal = isObjectNormal;
exports.isObjNormal = isObjNormal;
var isObjFromNull = isObjectFromNull;
exports.isObjFromNull = isObjFromNull;
var isObjLike = isObjectLike;
exports.isObjLike = isObjLike;
var isEmptyObj = isEmptyObject;
exports.isEmptyObj = isEmptyObj;
var isObjType = isObjectType; // Not Another name

exports.isObjType = isObjType;
var isNotObjectType = isNotObjectLike;
exports.isNotObjectType = isNotObjectType;
var isNotArrayType = isNotArraySeries; // Not Short name

exports.isNotArrayType = isNotArrayType;
var isNotUndef = isNotUndefined;
exports.isNotUndef = isNotUndef;
var isNotBool = isNotBoolean;
exports.isNotBool = isNotBool;
var isNotNum = isNotNumber;
exports.isNotNum = isNotNum;
var isNotInt = isNotInteger;
exports.isNotInt = isNotInt;
var isNotStr = isNotString;
exports.isNotStr = isNotStr;
var isNotFunc = isNotFunction;
exports.isNotFunc = isNotFunc;
var isNotObj = isNotObject;
exports.isNotObj = isNotObj;
var isNotObjNormal = isNotObjectNormal;
exports.isNotObjNormal = isNotObjNormal;
var isNotObjFromNull = isNotObjectFromNull;
exports.isNotObjFromNull = isNotObjFromNull;
var isNotObjLike = isNotObjectLike;
exports.isNotObjLike = isNotObjLike;
var isNotEmptyObj = isNotEmptyObject;
exports.isNotEmptyObj = isNotEmptyObj;
var isNotObjType = isNotObjectType;
exports.isNotObjType = isNotObjType;
var isException = _isException["default"].isException,
    isNotException = _isException["default"].isNotException;
var isExcept = isException;
exports.isExcept = isExcept;
var isNotExcept = isNotException;
exports.isNotExcept = isNotExcept;
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
    isNotWeakSetAll = _isTypeAll["default"].isNotWeakSetAll; // Another name

var isObjectTypeAll = isObjectLikeAll;
exports.isObjectTypeAll = isObjectTypeAll;
var isArrayTypeAll = isArraySeriesAll; // Short name

exports.isArrayTypeAll = isArrayTypeAll;
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
var isObjNormalAll = isObjectNormalAll;
exports.isObjNormalAll = isObjNormalAll;
var isObjFromNullAll = isObjectFromNullAll;
exports.isObjFromNullAll = isObjFromNullAll;
var isObjLikeAll = isObjectLikeAll;
exports.isObjLikeAll = isObjLikeAll;
var isEmptyObjAll = isEmptyObjectAll;
exports.isEmptyObjAll = isEmptyObjAll;
var isObjTypeAll = isObjectTypeAll;
exports.isObjTypeAll = isObjTypeAll;
var isExceptAll = isExceptionAll; // Not Another name

exports.isExceptAll = isExceptAll;
var isNotObjectTypeAll = isNotObjectLikeAll;
exports.isNotObjectTypeAll = isNotObjectTypeAll;
var isNotArrayTypeAll = isNotArraySeriesAll; // Not Short name

exports.isNotArrayTypeAll = isNotArrayTypeAll;
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
var isNotObjNormalAll = isNotObjectNormalAll;
exports.isNotObjNormalAll = isNotObjNormalAll;
var isNotObjFromNullAll = isNotObjectFromNullAll;
exports.isNotObjFromNullAll = isNotObjFromNullAll;
var isNotObjLikeAll = isNotObjectLikeAll;
exports.isNotObjLikeAll = isNotObjLikeAll;
var isNotEmptyObjAll = isNotEmptyObjectAll;
exports.isNotEmptyObjAll = isNotEmptyObjAll;
var isNotObjTypeAll = isNotObjectTypeAll;
exports.isNotObjTypeAll = isNotObjTypeAll;
var isNotExceptAll = isNotExceptionAll;
exports.isNotExceptAll = isNotExceptAll;
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
    isNotWeakSetArray = _isTypeArray["default"].isNotWeakSetArray; // Another name

var isObjectTypeArray = isObjectLikeArray;
exports.isObjectTypeArray = isObjectTypeArray;
var isArrayTypeArray = isArraySeriesArray; // Short name

exports.isArrayTypeArray = isArrayTypeArray;
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
var isObjLikeArray = isObjectLikeArray;
exports.isObjLikeArray = isObjLikeArray;
var isEmptyObjArray = isEmptyObjectArray;
exports.isEmptyObjArray = isEmptyObjArray;
var isObjTypeArray = isObjectTypeArray;
exports.isObjTypeArray = isObjTypeArray;
var isExceptArray = isExceptionArray; // Not Another name

exports.isExceptArray = isExceptArray;
var isNotObjectTypeArray = isNotObjectLikeArray;
exports.isNotObjectTypeArray = isNotObjectTypeArray;
var isNotArrayTypeArray = isNotArraySeriesArray; // Not Short name

exports.isNotArrayTypeArray = isNotArrayTypeArray;
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
var isNotObjLikeArray = isNotObjectLikeArray;
exports.isNotObjLikeArray = isNotObjLikeArray;
var isNotEmptyObjArray = isNotEmptyObjectArray;
exports.isNotEmptyObjArray = isNotEmptyObjArray;
var isNotObjTypeArray = isNotObjectTypeArray;
exports.isNotObjTypeArray = isNotObjTypeArray;
var isNotExceptArray = isNotExceptionArray;
exports.isNotExceptArray = isNotExceptArray;
var _default = {
  isObjectType: isObjectType,
  isArrayType: isArrayType,
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjNormal: isObjNormal,
  isObjFromNull: isObjFromNull,
  isObjLike: isObjLike,
  isEmptyObj: isEmptyObj,
  isObjType: isObjType,
  isExcept: isExcept,
  // -----
  isObjectTypeAll: isObjectTypeAll,
  isArrayTypeAll: isArrayTypeAll,
  isUndefAll: isUndefAll,
  isBoolAll: isBoolAll,
  isNumAll: isNumAll,
  isIntAll: isIntAll,
  isStrAll: isStrAll,
  isFuncAll: isFuncAll,
  isObjAll: isObjAll,
  isObjNormalAll: isObjNormalAll,
  isObjFromNullAll: isObjFromNullAll,
  isObjLikeAll: isObjLikeAll,
  isEmptyObjAll: isEmptyObjAll,
  isObjTypeAll: isObjTypeAll,
  isExceptAll: isExceptAll,
  // -----
  isObjectTypeArray: isObjectTypeArray,
  isArrayTypeArray: isArrayTypeArray,
  isUndefArray: isUndefArray,
  isBoolArray: isBoolArray,
  isNumArray: isNumArray,
  isIntArray: isIntArray,
  isStrArray: isStrArray,
  isFuncArray: isFuncArray,
  isObjArray: isObjArray,
  isObjNormalArray: isObjNormalArray,
  isObjFromNullArray: isObjFromNullArray,
  isObjLikeArray: isObjLikeArray,
  isEmptyObjArray: isEmptyObjArray,
  isObjTypeArray: isObjTypeArray,
  isExceptArray: isExceptArray,
  // -----
  isNotObjectType: isNotObjectType,
  isNotArrayType: isNotArrayType,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjNormal: isNotObjNormal,
  isNotObjFromNull: isNotObjFromNull,
  isNotObjLike: isNotObjLike,
  isNotEmptyObj: isNotEmptyObj,
  isNotObjType: isNotObjType,
  isNotExcept: isNotExcept,
  // -----
  isNotObjectTypeAll: isNotObjectTypeAll,
  isNotArrayTypeAll: isNotArrayTypeAll,
  isNotUndefAll: isNotUndefAll,
  isNotBoolAll: isNotBoolAll,
  isNotNumAll: isNotNumAll,
  isNotIntAll: isNotIntAll,
  isNotStrAll: isNotStrAll,
  isNotFuncAll: isNotFuncAll,
  isNotObjAll: isNotObjAll,
  isNotObjNormalAll: isNotObjNormalAll,
  isNotObjFromNullAll: isNotObjFromNullAll,
  isNotObjLikeAll: isNotObjLikeAll,
  isNotEmptyObjAll: isNotEmptyObjAll,
  isNotObjTypeAll: isNotObjTypeAll,
  isNotExceptAll: isNotExceptAll,
  // -----
  isNotObjectTypeArray: isNotObjectTypeArray,
  isNotArrayTypeArray: isNotArrayTypeArray,
  isNotUndefArray: isNotUndefArray,
  isNotBoolArray: isNotBoolArray,
  isNotNumArray: isNotNumArray,
  isNotIntArray: isNotIntArray,
  isNotStrArray: isNotStrArray,
  isNotFuncArray: isNotFuncArray,
  isNotObjArray: isNotObjArray,
  isNotObjNormalArray: isNotObjNormalArray,
  isNotObjFromNullArray: isNotObjFromNullArray,
  isNotObjLikeArray: isNotObjLikeArray,
  isNotEmptyObjArray: isNotEmptyObjArray,
  isNotObjTypeArray: isNotObjTypeArray,
  isNotExceptArray: isNotExceptArray
};
exports["default"] = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.testCounter = exports.expect = exports.checkEqual = exports.checkCompare = exports.test = exports.it = exports.describe = exports.testFrame = void 0;

var _type = __webpack_require__(5);

var _array = __webpack_require__(45);

var _string = __webpack_require__(62);

var _compare = __webpack_require__(73);

var _platform = __webpack_require__(9);

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

var outputValue = function outputValue(value) {
  if ((0, _type.isString)(value)) {
    return "'".concat(value, "'");
  }

  if (!(0, _platform.isWindowsScriptHost)() && (0, _type.isObject)(value)) {
    return JSON.stringify(value);
  }

  return String(value);
};

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
  output += "".concat(indent, "Test: ").concat(testFrame.testName, "\n") + "".concat(indent, "  Counter: ").concat(testFrame.counter, "\n") + (message === '' ? '' : "".concat(indent, "  Message: ").concat(message, "\n")) + "".concat(indent, "  A !== B\n") + "".concat(indent, "  A = ").concat(outputValue(a), "\n") + "".concat(indent, "  B = ").concat(outputValue(b));
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

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.splitDotItems = exports.splitCommaItems = exports.split = exports._split = exports.tagOuterLast = exports._tagOuterLast = exports.tagInnerLast = exports._tagInnerLast = exports.tagOuterFirst = exports._tagOuterFirst = exports.tagInnerFirst = exports._tagInnerFirst = exports.subLastDelimLast = exports._subLastDelimLast = exports.subLastDelimFirst = exports._subLastDelimFirst = exports.subFirstDelimLast = exports._subFirstDelimLast = exports.subFirstDelimFirst = exports._subFirstDelimFirst = exports.matchFormat = exports._matchFormat = exports.replaceAll = exports._replaceAll = exports.add = exports.insert = exports.deleteLast = exports.deleteFirst = exports.deleteLength = exports.deleteIndex = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.trimBothEnds = exports.trimLast = exports.trimFirst = exports.excludeBothEnds = exports.excludeLast = exports.excludeFirst = exports.includeBothEnds = exports.includeLast = exports.includeFirst = exports.isBothEnds = exports.isLast = exports.isFirst = exports.indexOfLast = exports.indexOfFirst = exports.isUpperCase = exports.isLowerCase = exports.repeat = exports._add = exports._insert = exports._deleteLast = exports._deleteFirst = exports._deleteLength = exports._deleteIndex = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._trimBothEnds = exports._trimLast = exports._trimFirst = exports._excludeBothEnds = exports._excludeLast = exports._excludeFirst = exports._includeBothEnds = exports._includeLast = exports._includeFirst = exports._isBothEnds = exports._isLast = exports._isFirst = exports._indexOfLast = exports._indexOfFirst = exports._isUpperCase = exports._isLowerCase = exports._repeat = void 0;

var _string_common = _interopRequireDefault(__webpack_require__(44));

var _replaceAll2 = _interopRequireDefault(__webpack_require__(14));

var _replaceAll3 = _interopRequireDefault(__webpack_require__(63));

var _matchFormat2 = _interopRequireDefault(__webpack_require__(64));

var _subFirstDelimFirst2 = _interopRequireDefault(__webpack_require__(65));

var _subFirstDelimLast2 = _interopRequireDefault(__webpack_require__(66));

var _subLastDelimFirst2 = _interopRequireDefault(__webpack_require__(67));

var _subLastDelimLast2 = _interopRequireDefault(__webpack_require__(68));

var _tagInnerFirst2 = _interopRequireDefault(__webpack_require__(69));

var _tagOuterFirst2 = _interopRequireDefault(__webpack_require__(70));

var _tagInnerLast2 = _interopRequireDefault(__webpack_require__(71));

var _tagOuterLast2 = _interopRequireDefault(__webpack_require__(72));

var _split2 = _interopRequireDefault(__webpack_require__(26));

var _splitCommaItems = _interopRequireDefault(__webpack_require__(25));

var _splitDotItems = _interopRequireDefault(__webpack_require__(54));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _repeat = _string_common["default"]._repeat,
    _isLowerCase = _string_common["default"]._isLowerCase,
    _isUpperCase = _string_common["default"]._isUpperCase,
    _indexOfFirst = _string_common["default"]._indexOfFirst,
    _indexOfLast = _string_common["default"]._indexOfLast,
    _isFirst = _string_common["default"]._isFirst,
    _isLast = _string_common["default"]._isLast,
    _isBothEnds = _string_common["default"]._isBothEnds,
    _includeFirst = _string_common["default"]._includeFirst,
    _includeLast = _string_common["default"]._includeLast,
    _includeBothEnds = _string_common["default"]._includeBothEnds,
    _excludeFirst = _string_common["default"]._excludeFirst,
    _excludeLast = _string_common["default"]._excludeLast,
    _excludeBothEnds = _string_common["default"]._excludeBothEnds,
    _trimFirst = _string_common["default"]._trimFirst,
    _trimLast = _string_common["default"]._trimLast,
    _trimBothEnds = _string_common["default"]._trimBothEnds,
    _subIndex = _string_common["default"]._subIndex,
    _subLength = _string_common["default"]._subLength,
    _subFirst = _string_common["default"]._subFirst,
    _subLast = _string_common["default"]._subLast,
    _deleteIndex = _string_common["default"]._deleteIndex,
    _deleteLength = _string_common["default"]._deleteLength,
    _deleteFirst = _string_common["default"]._deleteFirst,
    _deleteLast = _string_common["default"]._deleteLast,
    _insert = _string_common["default"]._insert,
    _add = _string_common["default"]._add,
    repeat = _string_common["default"].repeat,
    isLowerCase = _string_common["default"].isLowerCase,
    isUpperCase = _string_common["default"].isUpperCase,
    indexOfFirst = _string_common["default"].indexOfFirst,
    indexOfLast = _string_common["default"].indexOfLast,
    isFirst = _string_common["default"].isFirst,
    isLast = _string_common["default"].isLast,
    isBothEnds = _string_common["default"].isBothEnds,
    includeFirst = _string_common["default"].includeFirst,
    includeLast = _string_common["default"].includeLast,
    includeBothEnds = _string_common["default"].includeBothEnds,
    excludeFirst = _string_common["default"].excludeFirst,
    excludeLast = _string_common["default"].excludeLast,
    excludeBothEnds = _string_common["default"].excludeBothEnds,
    trimFirst = _string_common["default"].trimFirst,
    trimLast = _string_common["default"].trimLast,
    trimBothEnds = _string_common["default"].trimBothEnds,
    subIndex = _string_common["default"].subIndex,
    subLength = _string_common["default"].subLength,
    subFirst = _string_common["default"].subFirst,
    subLast = _string_common["default"].subLast,
    deleteIndex = _string_common["default"].deleteIndex,
    deleteLength = _string_common["default"].deleteLength,
    deleteFirst = _string_common["default"].deleteFirst,
    deleteLast = _string_common["default"].deleteLast,
    insert = _string_common["default"].insert,
    add = _string_common["default"].add;
exports.add = add;
exports.insert = insert;
exports.deleteLast = deleteLast;
exports.deleteFirst = deleteFirst;
exports.deleteLength = deleteLength;
exports.deleteIndex = deleteIndex;
exports.subLast = subLast;
exports.subFirst = subFirst;
exports.subLength = subLength;
exports.subIndex = subIndex;
exports.trimBothEnds = trimBothEnds;
exports.trimLast = trimLast;
exports.trimFirst = trimFirst;
exports.excludeBothEnds = excludeBothEnds;
exports.excludeLast = excludeLast;
exports.excludeFirst = excludeFirst;
exports.includeBothEnds = includeBothEnds;
exports.includeLast = includeLast;
exports.includeFirst = includeFirst;
exports.isBothEnds = isBothEnds;
exports.isLast = isLast;
exports.isFirst = isFirst;
exports.indexOfLast = indexOfLast;
exports.indexOfFirst = indexOfFirst;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.repeat = repeat;
exports._add = _add;
exports._insert = _insert;
exports._deleteLast = _deleteLast;
exports._deleteFirst = _deleteFirst;
exports._deleteLength = _deleteLength;
exports._deleteIndex = _deleteIndex;
exports._subLast = _subLast;
exports._subFirst = _subFirst;
exports._subLength = _subLength;
exports._subIndex = _subIndex;
exports._trimBothEnds = _trimBothEnds;
exports._trimLast = _trimLast;
exports._trimFirst = _trimFirst;
exports._excludeBothEnds = _excludeBothEnds;
exports._excludeLast = _excludeLast;
exports._excludeFirst = _excludeFirst;
exports._includeBothEnds = _includeBothEnds;
exports._includeLast = _includeLast;
exports._includeFirst = _includeFirst;
exports._isBothEnds = _isBothEnds;
exports._isLast = _isLast;
exports._isFirst = _isFirst;
exports._indexOfLast = _indexOfLast;
exports._indexOfFirst = _indexOfFirst;
exports._isUpperCase = _isUpperCase;
exports._isLowerCase = _isLowerCase;
exports._repeat = _repeat;
var _replaceAll = _replaceAll2["default"]._replaceAll;
exports._replaceAll = _replaceAll;
var replaceAll = _replaceAll3["default"].replaceAll;
exports.replaceAll = replaceAll;
var _matchFormat = _matchFormat2["default"]._matchFormat,
    matchFormat = _matchFormat2["default"].matchFormat;
exports.matchFormat = matchFormat;
exports._matchFormat = _matchFormat;
var _subFirstDelimFirst = _subFirstDelimFirst2["default"]._subFirstDelimFirst,
    subFirstDelimFirst = _subFirstDelimFirst2["default"].subFirstDelimFirst;
exports.subFirstDelimFirst = subFirstDelimFirst;
exports._subFirstDelimFirst = _subFirstDelimFirst;
var _subFirstDelimLast = _subFirstDelimLast2["default"]._subFirstDelimLast,
    subFirstDelimLast = _subFirstDelimLast2["default"].subFirstDelimLast;
exports.subFirstDelimLast = subFirstDelimLast;
exports._subFirstDelimLast = _subFirstDelimLast;
var _subLastDelimFirst = _subLastDelimFirst2["default"]._subLastDelimFirst,
    subLastDelimFirst = _subLastDelimFirst2["default"].subLastDelimFirst;
exports.subLastDelimFirst = subLastDelimFirst;
exports._subLastDelimFirst = _subLastDelimFirst;
var _subLastDelimLast = _subLastDelimLast2["default"]._subLastDelimLast,
    subLastDelimLast = _subLastDelimLast2["default"].subLastDelimLast;
exports.subLastDelimLast = subLastDelimLast;
exports._subLastDelimLast = _subLastDelimLast;
var _tagInnerFirst = _tagInnerFirst2["default"]._tagInnerFirst,
    tagInnerFirst = _tagInnerFirst2["default"].tagInnerFirst;
exports.tagInnerFirst = tagInnerFirst;
exports._tagInnerFirst = _tagInnerFirst;
var _tagOuterFirst = _tagOuterFirst2["default"]._tagOuterFirst,
    tagOuterFirst = _tagOuterFirst2["default"].tagOuterFirst;
exports.tagOuterFirst = tagOuterFirst;
exports._tagOuterFirst = _tagOuterFirst;
var _tagInnerLast = _tagInnerLast2["default"]._tagInnerLast,
    tagInnerLast = _tagInnerLast2["default"].tagInnerLast;
exports.tagInnerLast = tagInnerLast;
exports._tagInnerLast = _tagInnerLast;
var _tagOuterLast = _tagOuterLast2["default"]._tagOuterLast,
    tagOuterLast = _tagOuterLast2["default"].tagOuterLast;
exports.tagOuterLast = tagOuterLast;
exports._tagOuterLast = _tagOuterLast;
var _split = _split2["default"]._split,
    split = _split2["default"].split;
exports.split = split;
exports._split = _split;
var splitCommaItems = _splitCommaItems["default"].splitCommaItems;
exports.splitCommaItems = splitCommaItems;
var splitDotItems = _splitDotItems["default"].splitDotItems;
exports.splitDotItems = splitDotItems;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _string_common["default"]), _replaceAll2["default"]), _replaceAll3["default"]), _matchFormat2["default"]), _subFirstDelimFirst2["default"]), _subFirstDelimLast2["default"]), _subLastDelimFirst2["default"]), _subLastDelimLast2["default"]), _tagInnerFirst2["default"]), _tagOuterFirst2["default"]), _tagInnerLast2["default"]), _tagOuterLast2["default"]), _split2["default"]), _splitCommaItems["default"]), _splitDotItems["default"]);

exports["default"] = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _replaceAll2 = __webpack_require__(14);

var replaceAll = function replaceAll(str, before, after) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, before, after')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('replaceAll args(str) is not string');
  }

  if (!(0, _type.isString)(before)) {
    throw new TypeError('replaceAll args(before) is not string');
  }

  if (!(0, _type.isString)(after)) {
    throw new TypeError('replaceAll args(after) is not string');
  }

  return (0, _replaceAll2._replaceAll)(str, before, after);
};

exports.replaceAll = replaceAll;
var _default = {
  replaceAll: replaceAll
};
exports["default"] = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchFormat = exports._matchFormat = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/**
 * matchFormat
 */
var _matchFormat = function _matchFormat(formatName, value) {
  var patterns = Object.keys(_matchFormat.pattern);
  var index = patterns.indexOf(formatName);

  if (index === -1) {
    throw new RangeError("_matchFormat args(formatName:".concat(formatName, ") is not exists format"));
  }

  var result = _matchFormat.pattern[patterns[index]](value);

  if (!(0, _type.isBoolean)(result)) {
    throw new RangeError("_matchFormat args(formatName:".concat(formatName, ")") + ' function result is not boolean');
  }

  return result;
};

exports._matchFormat = _matchFormat;
_matchFormat.pattern = {};

_matchFormat.clear = function () {
  _matchFormat.pattern = {};
};

_matchFormat.add = function (nameArray, patternFunction) {
  for (var i = 0, l = nameArray.length; i < l; i += 1) {
    var name = nameArray[i];
    _matchFormat.pattern[name] = patternFunction;
  }
};

_matchFormat.reset = function () {
  _matchFormat.add(['zenkaku'], function (value) {
    return value.match(/^[^\x01-\x7E\xA1-\xDF]+$/) ? true : false;
  });

  _matchFormat.add(['hiragana'], function (value) {
    return value.match(/^[\u3041-\u3096]+$/) ? true : false;
  });

  _matchFormat.add(['katakana'], function (value) {
    return value.match(/^[\u30a1-\u30f6]+$/) ? true : false;
  });

  _matchFormat.add(['alphabet-number'], function (value) {
    return value.match(/^[0-9a-zA-Z]+$/) ? true : false;
  });

  _matchFormat.add(['number'], function (value) {
    return value.match(/^[0-9]+$/) ? true : false;
  });

  _matchFormat.add(['alphabet'], function (value) {
    return value.match(/^[a-zA-Z]+$/) ? true : false;
  });

  _matchFormat.add(['upper_alphabet'], function (value) {
    return value.match(/^[A-Z]+$/) ? true : false;
  });

  _matchFormat.add(['lower_alphabet'], function (value) {
    return value.match(/^[a-z]+$/) ? true : false;
  });

  _matchFormat.add(['integer'], function (value) {
    return value.match(/^[+|-]?[0-9]+$/) ? true : false;
  });

  _matchFormat.add(['float_only'], function (value) {
    return value.match(/^[-|+]?[0-9]*\.[0-9]+$/) ? true : false;
  });

  _matchFormat.add(['float_integer'], function (value) {
    return value.match(/^[-|+]?[0-9]*\.[0-9]+$|^[+|-]?[0-9]+$/) ? true : false;
  });

  _matchFormat.add(['float_more'], function (value) {
    return value.match( // eslint-disable-next-line max-len
    /^[-|+]?[0-9]*\.[0-9]*$|^[+|-]?[0-9]+$|^[-|+]?[0-9]+\.?[0-9]*([eE][+-]?[0-9]+)?$/) ? true : false;
  }); // float_more
  //  integer + float + exponential notation
  //  value.match(new RegExp(
  //    '^[-|+]?[0-9]*\\.[0-9]*$' +
  //    '|^[+|-]?[0-9]+$' +
  //    '|^[-|+]?[0-9]+\\.?[0-9]*([eE][+-]?[0-9]+)?$'
  //  , 'g'))) ? true : false;


  _matchFormat.add(['2_base_number', 'binary'], function (value) {
    return value.match(/^[-|+]?[01]+$/) ? true : false;
  });

  _matchFormat.add(['3_base_number'], function (value) {
    return value.match(/^[-|+]?[0-2]+$/) ? true : false;
  });

  _matchFormat.add(['4_base_number'], function (value) {
    return value.match(/^[-|+]?[0-3]+$/) ? true : false;
  });

  _matchFormat.add(['5_base_number'], function (value) {
    return value.match(/^[-|+]?[0-4]+$/) ? true : false;
  });

  _matchFormat.add(['6_base_number'], function (value) {
    return value.match(/^[-|+]?[0-5]+$/) ? true : false;
  });

  _matchFormat.add(['7_base_number'], function (value) {
    return value.match(/^[-|+]?[0-6]+$/) ? true : false;
  });

  _matchFormat.add(['8_base_number', 'octal'], function (value) {
    return value.match(/^[-|+]?[0-7]+$/) ? true : false;
  });

  _matchFormat.add(['9_base_number'], function (value) {
    return value.match(/^[-|+]?[0-8]+$/) ? true : false;
  });

  _matchFormat.add(['10_base_number'], function (value) {
    return value.match(/^[-|+]?[0-9]+$/) ? true : false;
  });

  _matchFormat.add(['11_base_number'], function (value) {
    return value.match(/^[-|+]?[0-9A]+$|^[-|+]?[0-9a]+$/) ? true : false;
  });

  _matchFormat.add(['12_base_number'], function (value) {
    return value.match(/^[-|+]?[0-9AB]+$|^[-|+]?[0-9ab]+$/) ? true : false;
  });

  _matchFormat.add(['13_base_number'], function (value) {
    return value.match(/^[-|+]?[0-9A-C]+$|^[-|+]?[0-9a-c]+$/) ? true : false;
  });

  _matchFormat.add(['14_base_number'], function (value) {
    return value.match(/^[-|+]?[0-9A-D]+$|^[-|+]?[0-9a-d]+$/) ? true : false;
  });

  _matchFormat.add(['15_base_number'], function (value) {
    return value.match(/^[-|+]?[0-9A-E]+$|^[-|+]?[0-9a-e]+$/) ? true : false;
  });

  _matchFormat.add(['16_base_number', 'hex'], function (value) {
    return value.match(/^[-|+]?[0-9A-F]+$|^[-|+]?[0-9a-f]+$/) ? true : false;
  });

  _matchFormat.add(['date_y/m/d', 'date'], function (value) {
    return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}$/) ? true : false;
  });

  _matchFormat.add(['date_yyyy/m/d'], function (value) {
    return value.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/) ? true : false;
  });

  _matchFormat.add(['date_yyyy/mm/dd'], function (value) {
    return value.match(/^\d{4}\/\d{2}\/\d{2}$/) ? true : false;
  });

  _matchFormat.add(['date_y/m/d_h:n'], function (value) {
    return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}$/) ? true : false;
  });

  _matchFormat.add(['date_y/m/d_h:n:s'], function (value) {
    return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}$/) ? true : false;
  });

  _matchFormat.add(['date_y/m/d_h:n:s.ms'], function (value) {
    return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}\.\d{1,3}$/) ? true : false;
  });

  _matchFormat.add(['date_y-m-d'], function (value) {
    return value.match(/^\d{1,4}-\d{1,2}-\d{1,2}$/) ? true : false;
  });

  _matchFormat.add(['date_yyyy-m-d'], function (value) {
    return value.match(/^\d{4}-\d{1,2}-\d{1,2}$/) ? true : false;
  });

  _matchFormat.add(['date_yyyy-mm-dd'], function (value) {
    return value.match(/^\d{4}-\d{2}-\d{2}$/) ? true : false;
  });
};

_matchFormat.reset();

var matchFormat = function matchFormat(formatName, value) {
  if ((0, _isObjectParameter.isObjectParameter)(formatName, 'formatName,value')) {
    var _formatName = formatName;
    formatName = _formatName.formatName;
    value = _formatName.value;
  }

  if (!(0, _type.isString)(formatName)) {
    throw new TypeError('matchFormat args(formatName) is not string');
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('matchFormat args(value) is not string');
  }

  return _matchFormat(formatName, value);
};

exports.matchFormat = matchFormat;
var _default = {
  _matchFormat: _matchFormat,
  matchFormat: matchFormat
};
exports["default"] = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subFirstDelimFirst = exports._subFirstDelimFirst = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _subFirstDelimFirst = function _subFirstDelimFirst(str, delimiter) {
  var index = (0, _string._indexOfFirst)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subIndex)(str, 0, index - 1);
  }
};

exports._subFirstDelimFirst = _subFirstDelimFirst;

var subFirstDelimFirst = function subFirstDelimFirst(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subFirstDelimFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subFirstDelimFirst args(delimiter) is not string');
  }

  return _subFirstDelimFirst(str, delimiter);
};

exports.subFirstDelimFirst = subFirstDelimFirst;
var _default = {
  _subFirstDelimFirst: _subFirstDelimFirst,
  subFirstDelimFirst: subFirstDelimFirst
};
exports["default"] = _default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subFirstDelimLast = exports._subFirstDelimLast = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _subFirstDelimLast = function _subFirstDelimLast(str, delimiter) {
  var index = (0, _string._indexOfLast)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subIndex)(str, 0, index - 1);
  }
};

exports._subFirstDelimLast = _subFirstDelimLast;

var subFirstDelimLast = function subFirstDelimLast(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subFirstDelimLast args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subFirstDelimLast args(delimiter) is not string');
  }

  return _subFirstDelimLast(str, delimiter);
};

exports.subFirstDelimLast = subFirstDelimLast;
var _default = {
  _subFirstDelimLast: _subFirstDelimLast,
  subFirstDelimLast: subFirstDelimLast
};
exports["default"] = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLastDelimFirst = exports._subLastDelimFirst = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _subLastDelimFirst = function _subLastDelimFirst(str, delimiter) {
  var index = (0, _string._indexOfFirst)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subLength)(str, index + delimiter.length);
  }
};

exports._subLastDelimFirst = _subLastDelimFirst;

var subLastDelimFirst = function subLastDelimFirst(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subLastDelimFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subLastDelimFirst args(delimiter) is not string');
  }

  return _subLastDelimFirst(str, delimiter);
};

exports.subLastDelimFirst = subLastDelimFirst;
var _default = {
  _subLastDelimFirst: _subLastDelimFirst,
  subLastDelimFirst: subLastDelimFirst
};
exports["default"] = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLastDelimLast = exports._subLastDelimLast = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _subLastDelimLast = function _subLastDelimLast(str, delimiter) {
  var index = (0, _string._indexOfLast)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subLength)(str, index + delimiter.length);
  }
};

exports._subLastDelimLast = _subLastDelimLast;

var subLastDelimLast = function subLastDelimLast(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subLastDelimLast args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subLastDelimLast args(delimiter) is not string');
  }

  return _subLastDelimLast(str, delimiter);
};

exports.subLastDelimLast = subLastDelimLast;
var _default = {
  _subLastDelimLast: _subLastDelimLast,
  subLastDelimLast: subLastDelimLast
};
exports["default"] = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagInnerFirst = exports._tagInnerFirst = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _tagOuterFirst2 = __webpack_require__(70);

var _tagInnerFirst = function _tagInnerFirst(str, startTag, endTag) {
  var result = (0, _tagOuterFirst2._tagOuterFirst)(str, startTag, endTag);

  if (result.length === 0) {
    return '';
  }

  return (0, _string._subIndex)(result, startTag.length, result.length - endTag.length - 1);
};

exports._tagInnerFirst = _tagInnerFirst;

var tagInnerFirst = function tagInnerFirst(str, startTag, endTag) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, startTag, endTag')) {
    var _str = str;
    str = _str.str;
    startTag = _str.startTag;
    endTag = _str.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(startTag, 'startTag, endTag')) {
    var _startTag = startTag;
    startTag = _startTag.startTag;
    endTag = _startTag.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(endTag, 'endTag')) {
    var _endTag = endTag;
    endTag = _endTag.endTag;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('tagInnerFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagInnerFirst args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagInnerFirst args(endTag) is not string');
  }

  return _tagInnerFirst(str, startTag, endTag);
};

exports.tagInnerFirst = tagInnerFirst;
var _default = {
  _tagInnerFirst: _tagInnerFirst,
  tagInnerFirst: tagInnerFirst
};
exports["default"] = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterFirst = exports._tagOuterFirst = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _tagOuterFirst = function _tagOuterFirst(str, startTag, endTag) {
  if (str === '') {
    return '';
  }

  var indexStartTag = (0, _string._indexOfFirst)(str, startTag);

  if (indexStartTag === -1) {
    return '';
  }

  var indexEndTag = (0, _string._indexOfFirst)(str, endTag, indexStartTag + startTag.length);

  if (indexEndTag === -1) {
    return '';
  }

  indexStartTag = (0, _string._indexOfLast)(str, startTag, indexEndTag - startTag.length);

  if (indexStartTag === -1) {
    return '';
  }

  return (0, _string._subIndex)(str, indexStartTag, indexEndTag + endTag.length - 1);
};

exports._tagOuterFirst = _tagOuterFirst;

var tagOuterFirst = function tagOuterFirst(str, startTag, endTag) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, startTag, endTag')) {
    var _str = str;
    str = _str.str;
    startTag = _str.startTag;
    endTag = _str.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(startTag, 'startTag, endTag')) {
    var _startTag = startTag;
    startTag = _startTag.startTag;
    endTag = _startTag.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(endTag, 'endTag')) {
    var _endTag = endTag;
    endTag = _endTag.endTag;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('tagOuterFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagOuterFirst args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagOuterFirst args(endTag) is not string');
  }

  return _tagOuterFirst(str, startTag, endTag);
};

exports.tagOuterFirst = tagOuterFirst;
var _default = {
  _tagOuterFirst: _tagOuterFirst,
  tagOuterFirst: tagOuterFirst
};
exports["default"] = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagInnerLast = exports._tagInnerLast = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _tagOuterLast2 = __webpack_require__(72);

var _tagInnerLast = function _tagInnerLast(str, startTag, endTag) {
  var result = (0, _tagOuterLast2._tagOuterLast)(str, startTag, endTag);

  if (result.length === 0) {
    return '';
  }

  return (0, _string._subIndex)(result, startTag.length, result.length - endTag.length - 1);
};

exports._tagInnerLast = _tagInnerLast;

var tagInnerLast = function tagInnerLast(str, startTag, endTag) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, startTag, endTag')) {
    var _str = str;
    str = _str.str;
    startTag = _str.startTag;
    endTag = _str.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(startTag, 'startTag, endTag')) {
    var _startTag = startTag;
    startTag = _startTag.startTag;
    endTag = _startTag.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(endTag, 'endTag')) {
    var _endTag = endTag;
    endTag = _endTag.endTag;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('tagInnerLast args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagInnerLast args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagInnerLast args(endTag) is not string');
  }

  return _tagInnerLast(str, startTag, endTag);
};

exports.tagInnerLast = tagInnerLast;
var _default = {
  _tagInnerLast: _tagInnerLast,
  tagInnerLast: tagInnerLast
};
exports["default"] = _default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterLast = exports._tagOuterLast = void 0;

var _isType = __webpack_require__(6);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _tagOuterLast = function _tagOuterLast(str, startTag, endTag) {
  if (str === '') {
    return '';
  }

  var indexEndTag = (0, _string._indexOfLast)(str, endTag);

  if (indexEndTag === -1) {
    return '';
  }

  var indexStartTag = (0, _string._indexOfLast)(str, startTag, indexEndTag - startTag.length);

  if (indexStartTag === -1) {
    return '';
  }

  indexEndTag = (0, _string._indexOfFirst)(str, endTag, indexStartTag + startTag.length);

  if (indexEndTag === -1) {
    return '';
  }

  return (0, _string._subIndex)(str, indexStartTag, indexEndTag + endTag.length - 1);
};

exports._tagOuterLast = _tagOuterLast;

var tagOuterLast = function tagOuterLast(str, startTag, endTag) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, startTag, endTag')) {
    var _str = str;
    str = _str.str;
    startTag = _str.startTag;
    endTag = _str.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(startTag, 'startTag, endTag')) {
    var _startTag = startTag;
    startTag = _startTag.startTag;
    endTag = _startTag.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(endTag, 'endTag')) {
    var _endTag = endTag;
    endTag = _endTag.endTag;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('tagOuterLast args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagOuterLast args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagOuterLast args(endTag) is not string');
  }

  return _tagOuterLast(str, startTag, endTag);
};

exports.tagOuterLast = tagOuterLast;
var _default = {
  _tagOuterLast: _tagOuterLast,
  tagOuterLast: tagOuterLast
};
exports["default"] = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports._equalDeep = exports.equal = exports._equal = exports.includesAll = exports.includesSome = exports._includesAll = exports._includesSome = exports.includes = exports._includes = exports.someMatchAll = exports._someMatchAll = exports.allMatchAll = exports._allMatchAll = exports.indexOfMatchAll = exports._indexOfMatchAll = exports.matchAllValue = exports._matchAllValue = exports.matchAll = exports._matchAll = exports.someMatchSome = exports._someMatchSome = exports.allMatchSome = exports._allMatchSome = exports.indexOfMatchSome = exports._indexOfMatchSome = exports.matchSomeValue = exports._matchSomeValue = exports.matchSome = exports._matchSome = exports.someMatch = exports._someMatch = exports.allMatch = exports._allMatch = exports.indexOfMatch = exports._indexOfMatch = exports.initialValue = exports._initialValue = exports.matchValue = exports._matchValue = exports.match = exports._match = exports.or = exports._or = void 0;

var _or2 = _interopRequireDefault(__webpack_require__(49));

var _match2 = _interopRequireDefault(__webpack_require__(74));

var _matchValue2 = _interopRequireDefault(__webpack_require__(75));

var _initialValue2 = _interopRequireDefault(__webpack_require__(76));

var _indexOfMatch2 = _interopRequireDefault(__webpack_require__(79));

var _allMatch2 = _interopRequireDefault(__webpack_require__(80));

var _someMatch2 = _interopRequireDefault(__webpack_require__(81));

var _matchSome2 = _interopRequireDefault(__webpack_require__(78));

var _matchSomeValue2 = _interopRequireDefault(__webpack_require__(77));

var _indexOfMatchSome2 = _interopRequireDefault(__webpack_require__(82));

var _allMatchSome2 = _interopRequireDefault(__webpack_require__(83));

var _someMatchSome2 = _interopRequireDefault(__webpack_require__(84));

var _matchAll2 = _interopRequireDefault(__webpack_require__(85));

var _matchAllValue2 = _interopRequireDefault(__webpack_require__(86));

var _indexOfMatchAll2 = _interopRequireDefault(__webpack_require__(87));

var _allMatchAll2 = _interopRequireDefault(__webpack_require__(88));

var _someMatchAll2 = _interopRequireDefault(__webpack_require__(89));

var _includes2 = _interopRequireDefault(__webpack_require__(90));

var _includes_common = _interopRequireDefault(__webpack_require__(91));

var _equal2 = _interopRequireDefault(__webpack_require__(92));

var _equalDeep2 = _interopRequireDefault(__webpack_require__(93));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _or = _or2["default"]._or,
    or = _or2["default"].or;
exports.or = or;
exports._or = _or;
var _match = _match2["default"]._match,
    match = _match2["default"].match;
exports.match = match;
exports._match = _match;
var _matchValue = _matchValue2["default"]._matchValue,
    matchValue = _matchValue2["default"].matchValue;
exports.matchValue = matchValue;
exports._matchValue = _matchValue;
var _initialValue = _initialValue2["default"]._initialValue,
    initialValue = _initialValue2["default"].initialValue;
exports.initialValue = initialValue;
exports._initialValue = _initialValue;
var _indexOfMatch = _indexOfMatch2["default"]._indexOfMatch,
    indexOfMatch = _indexOfMatch2["default"].indexOfMatch;
exports.indexOfMatch = indexOfMatch;
exports._indexOfMatch = _indexOfMatch;
var _allMatch = _allMatch2["default"]._allMatch,
    allMatch = _allMatch2["default"].allMatch;
exports.allMatch = allMatch;
exports._allMatch = _allMatch;
var _someMatch = _someMatch2["default"]._someMatch,
    someMatch = _someMatch2["default"].someMatch;
exports.someMatch = someMatch;
exports._someMatch = _someMatch;
var _matchSome = _matchSome2["default"]._matchSome,
    matchSome = _matchSome2["default"].matchSome;
exports.matchSome = matchSome;
exports._matchSome = _matchSome;
var _matchSomeValue = _matchSomeValue2["default"]._matchSomeValue,
    matchSomeValue = _matchSomeValue2["default"].matchSomeValue;
exports.matchSomeValue = matchSomeValue;
exports._matchSomeValue = _matchSomeValue;
var _indexOfMatchSome = _indexOfMatchSome2["default"]._indexOfMatchSome,
    indexOfMatchSome = _indexOfMatchSome2["default"].indexOfMatchSome;
exports.indexOfMatchSome = indexOfMatchSome;
exports._indexOfMatchSome = _indexOfMatchSome;
var _allMatchSome = _allMatchSome2["default"]._allMatchSome,
    allMatchSome = _allMatchSome2["default"].allMatchSome;
exports.allMatchSome = allMatchSome;
exports._allMatchSome = _allMatchSome;
var _someMatchSome = _someMatchSome2["default"]._someMatchSome,
    someMatchSome = _someMatchSome2["default"].someMatchSome;
exports.someMatchSome = someMatchSome;
exports._someMatchSome = _someMatchSome;
var _matchAll = _matchAll2["default"]._matchAll,
    matchAll = _matchAll2["default"].matchAll;
exports.matchAll = matchAll;
exports._matchAll = _matchAll;
var _matchAllValue = _matchAllValue2["default"]._matchAllValue,
    matchAllValue = _matchAllValue2["default"].matchAllValue;
exports.matchAllValue = matchAllValue;
exports._matchAllValue = _matchAllValue;
var _indexOfMatchAll = _indexOfMatchAll2["default"]._indexOfMatchAll,
    indexOfMatchAll = _indexOfMatchAll2["default"].indexOfMatchAll;
exports.indexOfMatchAll = indexOfMatchAll;
exports._indexOfMatchAll = _indexOfMatchAll;
var _allMatchAll = _allMatchAll2["default"]._allMatchAll,
    allMatchAll = _allMatchAll2["default"].allMatchAll;
exports.allMatchAll = allMatchAll;
exports._allMatchAll = _allMatchAll;
var _someMatchAll = _someMatchAll2["default"]._someMatchAll,
    someMatchAll = _someMatchAll2["default"].someMatchAll;
exports.someMatchAll = someMatchAll;
exports._someMatchAll = _someMatchAll;
var _includes = _includes2["default"]._includes,
    includes = _includes2["default"].includes;
exports.includes = includes;
exports._includes = _includes;
var _includesSome = _includes_common["default"]._includesSome,
    _includesAll = _includes_common["default"]._includesAll,
    includesSome = _includes_common["default"].includesSome,
    includesAll = _includes_common["default"].includesAll;
exports.includesAll = includesAll;
exports.includesSome = includesSome;
exports._includesAll = _includesAll;
exports._includesSome = _includesSome;
var _equal = _equal2["default"]._equal,
    equal = _equal2["default"].equal;
exports.equal = equal;
exports._equal = _equal;
var _equalDeep = _equalDeep2["default"]._equalDeep,
    equalDeep = _equalDeep2["default"].equalDeep;
exports.equalDeep = equalDeep;
exports._equalDeep = _equalDeep;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _or2["default"]), _match2["default"]), _matchValue2["default"]), _initialValue2["default"]), _indexOfMatch2["default"]), _allMatch2["default"]), _someMatch2["default"]), _matchSome2["default"]), _matchSomeValue2["default"]), _indexOfMatchSome2["default"]), _allMatchSome2["default"]), _someMatchSome2["default"]), _matchAll2["default"]), _matchAllValue2["default"]), _indexOfMatchAll2["default"]), _allMatchAll2["default"]), _someMatchAll2["default"]), _includes2["default"]), _includes_common["default"]), _equal2["default"]), _equalDeep2["default"]);

exports["default"] = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.match = exports._match = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

/**
 * match
 */
var _match = function _match(value, compare) {
  if ((0, _type.isString)(value)) {
    var result;

    if ((0, _type.isRegExp)(compare)) {
      result = value.match(compare) !== null;
    } else if ((0, _type.isFunction)(compare)) {
      result = compare(value);

      if (!(0, _type.isBoolean)(result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      result = value === compare;
    }

    return result;
  } else {
    var _result;

    if ((0, _type.isFunction)(compare)) {
      _result = compare(value);

      if (!(0, _type.isBoolean)(_result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      _result = value === compare;
    }

    return _result;
  }
};

exports._match = _match;

var match = function match(value, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare')) {
    var _compare = compare;
    compare = _compare.compare;
  }

  return _match(value, compare);
};

exports.match = match;
var _default = {
  _match: _match,
  match: match
};
exports["default"] = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchValue = exports._matchValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _match3 = __webpack_require__(74);

/**
 * matchValue
 */
var _matchValue = function _matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _match3._match)(value, compare)) {
    if ((0, _type.isFunction)(match)) {
      return match(value);
    }

    return match;
  }

  if ((0, _type.isFunction)(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

exports._matchValue = _matchValue;

var matchValue = function matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare, match', 'unmatch')) {
    var _compare = compare;
    compare = _compare.compare;
    match = _compare.match;
    var _compare$unmatch = _compare.unmatch;
    unmatch = _compare$unmatch === void 0 ? value : _compare$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match2 = match;
    match = _match2.match;
    var _match2$unmatch = _match2.unmatch;
    unmatch = _match2$unmatch === void 0 ? value : _match2$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  return _matchValue(value, compare, match, unmatch);
};

exports.matchValue = matchValue;
var _default = {
  _matchValue: _matchValue,
  matchValue: matchValue
};
exports["default"] = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialValue = exports._initialValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _matchSomeValue2 = __webpack_require__(77);

/**
 * initialValue
 */
var _initialValue = function _initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];
  return (0, _matchSomeValue2._matchSomeValue)(value, compareArray, match);
};

exports._initialValue = _initialValue;

var initialValue = function initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, match', 'compareArray')) {
    var _value = value;
    value = _value.value;
    match = _value.match;
    var _value$compareArray = _value.compareArray;
    compareArray = _value$compareArray === void 0 ? [undefined] : _value$compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'compareArray')) {
    var _match = match;
    match = _match.match;
    var _match$compareArray = _match.compareArray;
    compareArray = _match$compareArray === void 0 ? [undefined] : _match$compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('initialValue args(compareArray) is not array');
  }

  return _initialValue(value, match, compareArray);
};

exports.initialValue = initialValue;
var _default = {
  _initialValue: _initialValue,
  initialValue: initialValue
};
exports["default"] = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSomeValue = exports._matchSomeValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _matchSome2 = __webpack_require__(78);

/**
 * matchSomeValue
 */
var _matchSomeValue = function _matchSomeValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _matchSome2._matchSome)(value, compareArray)) {
    if ((0, _type.isFunction)(match)) {
      return match(value);
    }

    return match;
  }

  if ((0, _type.isFunction)(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

exports._matchSomeValue = _matchSomeValue;

var matchSomeValue = function matchSomeValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray, match', 'unmatch')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
    match = _compareArray.match;
    var _compareArray$unmatch = _compareArray.unmatch;
    unmatch = _compareArray$unmatch === void 0 ? value : _compareArray$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match = match;
    match = _match.match;
    var _match$unmatch = _match.unmatch;
    unmatch = _match$unmatch === void 0 ? value : _match$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchSomeValue args(compareArray) is not array');
  }

  return _matchSomeValue(value, compareArray, match, unmatch);
};

exports.matchSomeValue = matchSomeValue;
var _default = {
  _matchSomeValue: _matchSomeValue,
  matchSomeValue: matchSomeValue
};
exports["default"] = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSome = exports._matchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _match2 = __webpack_require__(74);

/**
 * matchSome
 */
var _matchSome = function _matchSome(value, compareArray) {
  return (0, _array_common._some)(compareArray, function (compare) {
    return (0, _match2._match)(value, compare);
  });
};

exports._matchSome = _matchSome;

var matchSome = function matchSome(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchSome args(compareArray) is not array');
  }

  return _matchSome(value, compareArray);
};

exports.matchSome = matchSome;
var _default = {
  _matchSome: _matchSome,
  matchSome: matchSome
};
exports["default"] = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatch = exports._indexOfMatch = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _match2 = __webpack_require__(74);

/**
 * indexOfMatch
 */
var _indexOfMatch = function _indexOfMatch(valueArray, compare) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _match2._match)(value, compare);
  });
};

exports._indexOfMatch = _indexOfMatch;

var indexOfMatch = function indexOfMatch(valueArray, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare')) {
    var _compare = compare;
    compare = _compare.compare;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatch args(valueArray) is not array');
  }

  return _indexOfMatch(valueArray, compare);
};

exports.indexOfMatch = indexOfMatch;
var _default = {
  _indexOfMatch: _indexOfMatch,
  indexOfMatch: indexOfMatch
};
exports["default"] = _default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatch = exports._allMatch = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _match2 = __webpack_require__(74);

/**
 * allMatch
 */
var _allMatch = function _allMatch(valueArray, compare) {
  return (0, _array_common._all)(valueArray, function (value) {
    return (0, _match2._match)(value, compare);
  });
};

exports._allMatch = _allMatch;

var allMatch = function allMatch(valueArray, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare')) {
    var _compare = compare;
    compare = _compare.compare;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('allMatch args(valueArray) is not array');
  }

  return _allMatch(valueArray, compare);
};

exports.allMatch = allMatch;
var _default = {
  _allMatch: _allMatch,
  allMatch: allMatch
};
exports["default"] = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatch = exports._someMatch = void 0;

var _indexOfMatch2 = __webpack_require__(79);

/**
 * someMatch
 */
var _someMatch = function _someMatch(valueArray, compare) {
  return (0, _indexOfMatch2._indexOfMatch)(valueArray, compare) !== -1;
};

exports._someMatch = _someMatch;

var someMatch = function someMatch(valueArray, compare) {
  return (0, _indexOfMatch2.indexOfMatch)(valueArray, compare) !== -1;
};

exports.someMatch = someMatch;
var _default = {
  _someMatch: _someMatch,
  someMatch: someMatch
};
exports["default"] = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchSome = exports._indexOfMatchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _matchSome2 = __webpack_require__(78);

/**
 * indexOfMatchSome
 */
var _indexOfMatchSome = function _indexOfMatchSome(valueArray, compareArray) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _matchSome2._matchSome)(value, compareArray);
  });
};

exports._indexOfMatchSome = _indexOfMatchSome;

var indexOfMatchSome = function indexOfMatchSome(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatchSome args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('indexOfMatchSome args(compareArray) is not array');
  }

  return _indexOfMatchSome(valueArray, compareArray);
};

exports.indexOfMatchSome = indexOfMatchSome;
var _default = {
  _indexOfMatchSome: _indexOfMatchSome,
  indexOfMatchSome: indexOfMatchSome
};
exports["default"] = _default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchSome = exports._allMatchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _matchSome2 = __webpack_require__(78);

/**
 * allMatchSome
 */
var _allMatchSome = function _allMatchSome(valueArray, compareArray) {
  return (0, _array_common._all)(valueArray, function (value) {
    return (0, _matchSome2._matchSome)(value, compareArray);
  });
};

exports._allMatchSome = _allMatchSome;

var allMatchSome = function allMatchSome(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('allMatchSome args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('allMatchSome args(compareArray) is not array');
  }

  return _allMatchSome(valueArray, compareArray);
};

exports.allMatchSome = allMatchSome;
var _default = {
  _allMatchSome: _allMatchSome,
  allMatchSome: allMatchSome
};
exports["default"] = _default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchSome = exports._someMatchSome = void 0;

var _indexOfMatchSome2 = __webpack_require__(82);

/**
 * someMatchSome
 */
var _someMatchSome = function _someMatchSome(valueArray, compareArray) {
  return (0, _indexOfMatchSome2._indexOfMatchSome)(valueArray, compareArray) !== -1;
};

exports._someMatchSome = _someMatchSome;

var someMatchSome = function someMatchSome(valueArray, compareArray) {
  return (0, _indexOfMatchSome2.indexOfMatchSome)(valueArray, compareArray) !== -1;
};

exports.someMatchSome = someMatchSome;
var _default = {
  _someMatchSome: _someMatchSome,
  someMatchSome: someMatchSome
};
exports["default"] = _default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAll = exports._matchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _match2 = __webpack_require__(74);

/**
 * matchAll
 */
var _matchAll = function _matchAll(value, compareArray) {
  return (0, _array_common._all)(compareArray, function (compare) {
    return (0, _match2._match)(value, compare);
  });
};

exports._matchAll = _matchAll;

var matchAll = function matchAll(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(value, compareArray);
};

exports.matchAll = matchAll;
var _default = {
  _matchAll: _matchAll,
  matchAll: matchAll
};
exports["default"] = _default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAllValue = exports._matchAllValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _matchAll2 = __webpack_require__(85);

/**
 * matchAllValue
 */
var _matchAllValue = function _matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _matchAll2._matchAll)(value, compareArray)) {
    if ((0, _type.isFunction)(match)) {
      return match(value);
    }

    return match;
  }

  if ((0, _type.isFunction)(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

exports._matchAllValue = _matchAllValue;

var matchAllValue = function matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray, match', 'unmatch')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
    match = _compareArray.match;
    var _compareArray$unmatch = _compareArray.unmatch;
    unmatch = _compareArray$unmatch === void 0 ? value : _compareArray$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match = match;
    match = _match.match;
    var _match$unmatch = _match.unmatch;
    unmatch = _match$unmatch === void 0 ? value : _match$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, match, unmatch);
};

exports.matchAllValue = matchAllValue;
var _default = {
  _matchAllValue: _matchAllValue,
  matchAllValue: matchAllValue
};
exports["default"] = _default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchAll = exports._indexOfMatchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _matchAll2 = __webpack_require__(85);

/**
 * indexOfMatchAll
 */
var _indexOfMatchAll = function _indexOfMatchAll(valueArray, compareArray) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _matchAll2._matchAll)(value, compareArray);
  });
};

exports._indexOfMatchAll = _indexOfMatchAll;

var indexOfMatchAll = function indexOfMatchAll(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatchAll args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('indexOfMatchAll args(compareArray) is not array');
  }

  return _indexOfMatchAll(valueArray, compareArray);
};

exports.indexOfMatchAll = indexOfMatchAll;
var _default = {
  _indexOfMatchAll: _indexOfMatchAll,
  indexOfMatchAll: indexOfMatchAll
};
exports["default"] = _default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchAll = exports._allMatchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _matchAll2 = __webpack_require__(85);

/**
 * allMatchAll
 */
var _allMatchAll = function _allMatchAll(valueArray, compareArray) {
  return (0, _array_common._all)(valueArray, function (value) {
    return (0, _matchAll2._matchAll)(value, compareArray);
  });
};

exports._allMatchAll = _allMatchAll;

var allMatchAll = function allMatchAll(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('allMatchAll args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('allMatchAll args(compareArray) is not array');
  }

  return _allMatchAll(valueArray, compareArray);
};

exports.allMatchAll = allMatchAll;
var _default = {
  _allMatchAll: _allMatchAll,
  allMatchAll: allMatchAll
};
exports["default"] = _default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchAll = exports._someMatchAll = void 0;

var _indexOfMatchAll2 = __webpack_require__(87);

/**
 * someMatchAll
 */
var _someMatchAll = function _someMatchAll(valueArray, compareArray) {
  return (0, _indexOfMatchAll2._indexOfMatchAll)(valueArray, compareArray) !== -1;
};

exports._someMatchAll = _someMatchAll;

var someMatchAll = function someMatchAll(valueArray, compareArray) {
  return (0, _indexOfMatchAll2.indexOfMatchAll)(valueArray, compareArray) !== -1;
};

exports.someMatchAll = someMatchAll;
var _default = {
  _someMatchAll: _someMatchAll,
  someMatchAll: someMatchAll
};
exports["default"] = _default;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includes = exports._includes = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _match2 = __webpack_require__(74);

var _includes2 = __webpack_require__(11);

/**
 * includes
 */
var _includes = function _includes(value, compare) {
  if ((0, _type.isString)(value)) {
    if (compare === '') {
      return false;
    }

    if ((0, _type.isRegExp)(compare)) {
      return (0, _match2._match)(value, compare);
    }

    return (0, _includes2.__includes)(value, compare);
  } else if ((0, _type.isArray)(value)) {
    return (0, _includes2.__includes)(value, compare);
  }
};

exports._includes = _includes;

var includes = function includes(value, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  if ((0, _type.isString)(value)) {
    if (!((0, _type.isString)(compare) || (0, _type.isRegExp)(compare))) {
      throw new TypeError('includes args(compare) is not [string|RegExp]');
    }
  } else if ((0, _type.isArray)(value)) {//
  } else {
    throw new TypeError('includes args(value) is not [string|array]');
  }

  return _includes(value, compare);
};

exports.includes = includes;
var _default = {
  _includes: _includes,
  includes: includes
};
exports["default"] = _default;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includesAll = exports._includesAll = exports.includesSome = exports._includesSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(13);

var _array_common = __webpack_require__(34);

var _match2 = __webpack_require__(74);

var _includes2 = __webpack_require__(90);

/**
 * includesSome
 */
var _includesSome = function _includesSome(value, compareArray) {
  return (0, _array_common._some)(compareArray, function (compare) {
    return (0, _includes2.includes)(value, compare);
  });
};

exports._includesSome = _includesSome;

var includesSome = function includesSome(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('includesSome args(compareArray) is not array');
  }

  return _includesSome(value, compareArray);
};
/**
 * includesAll
 */


exports.includesSome = includesSome;

var _includesAll = function _includesAll(value, compareArray) {
  return (0, _array_common._all)(compareArray, function (compare) {
    return (0, _includes2.includes)(value, compare);
  });
};

exports._includesAll = _includesAll;

var includesAll = function includesAll(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('includesAll args(compareArray) is not array');
  }

  return _includesAll(value, compareArray);
};

exports.includesAll = includesAll;
var _default = {
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  includesSome: includesSome,
  includesAll: includesAll
};
exports["default"] = _default;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equal = exports._equal = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(23);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * equal
 */
var _equal = function _equal(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equal.func.defaultArray;

  var __equal = function __equal(value1, value2) {
    for (var i = 0, l = equalFuncArray.length; i < l; i += 1) {
      var result = equalFuncArray[i](value1, value2);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equal(value1, value2);
};

exports._equal = _equal;

var equal = function equal(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equal.func.defaultArray;

  if ((0, _object.isObjectParameter)(value1, 'value1, value2', 'equalFuncArray')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    var _value$equalFuncArray = _value.equalFuncArray;
    equalFuncArray = _value$equalFuncArray === void 0 ? equal.func.defaultArray : _value$equalFuncArray;
  } else if ((0, _object.isObjectParameter)(value2, 'value2', 'equalFuncArray')) {
    var _value2 = value2;
    value2 = _value2.value2;
    var _value2$equalFuncArra = _value2.equalFuncArray;
    equalFuncArray = _value2$equalFuncArra === void 0 ? equal.func.defaultArray : _value2$equalFuncArra;
  } else if ((0, _object.isObjectParameter)(equalFuncArray, 'equalFuncArray')) {
    var _equalFuncArray = equalFuncArray;
    equalFuncArray = _equalFuncArray.equalFuncArray;
  }

  if (!(0, _type.isFunctionArray)(equalFuncArray)) {
    throw new TypeError('equal args(equalFuncArray) is not function array');
  }

  return _equal(value1, value2, equalFuncArray);
};
/**
 * equal.func
 */


exports.equal = equal;
equal.func = {};

equal.func.value = function (value1, value2) {
  if ((0, _type.isNaNStrict)(value1) && (0, _type.isNaNStrict)(value2)) {
    return true;
  }

  return value1 === value2;
}; // function is no recursive call


equal.func["function"] = function (value1, value2) {
  if (!(0, _type.isFunctionAll)(value1, value2)) {
    return;
  }

  return value1 === value2;
};

equal.func.object = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isObjectAll)(value1, value2)) {
    return;
  }

  var value1Keys = Object.keys(value1);
  var value2Keys = Object.keys(value2);

  if (value1Keys.length !== value2Keys.length) {
    return false;
  }

  bufferWrite(value1, value2);

  for (var i = 0, l = value1Keys.length; i < l; i += 1) {
    var key = value1Keys[i];

    if (__equalDeep(value1[key], value2[key]) === false) {
      return false;
    }
  }

  return true;
};

equal.func.arraySeries = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isArraySeriesAll)(value1, value2)) {
    return;
  }

  if (value1.length !== value2.length) {
    return false;
  }

  bufferWrite(value1, value2);

  for (var i = 0, l = value1.length; i < l; i += 1) {
    if (__equalDeep(value1[i], value2[i]) === false) {
      return false;
    }
  }

  return true;
};

equal.func.date = function (value1, value2) {
  if (!(0, _type.isDateAll)(value1, value2)) {
    return;
  }

  return value1.getTime() === value2.getTime();
};

equal.func.regExp = function (value1, value2) {
  if (!(0, _type.isRegExpAll)(value1, value2)) {
    return;
  }

  return value1.source === value2.source;
};

equal.func.map = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isMapAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);
  var value1Entries = [];
  value1.forEach(function (value, key) {
    value1Entries.push([key, value]);
  });

  for (var _i = 0, _value1Entries = value1Entries; _i < _value1Entries.length; _i++) {
    var _value1Entries$_i = _slicedToArray(_value1Entries[_i], 2),
        key = _value1Entries$_i[0],
        value = _value1Entries$_i[1];

    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  } // IE11 no support map.keys map.entries


  return true;
};

equal.func.weakMap = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isWeakMapAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);
  var value1Entries = [];
  value1.forEach(function (value, key) {
    value1Entries.push([key, value]);
  });

  for (var _i2 = 0, _value1Entries2 = value1Entries; _i2 < _value1Entries2.length; _i2++) {
    var _value1Entries2$_i = _slicedToArray(_value1Entries2[_i2], 2),
        key = _value1Entries2$_i[0],
        value = _value1Entries2$_i[1];

    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  } // IE11 no support weakmap.keys weakmap.entries


  return true;
};

equal.func.set = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isSetAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);
  var value1Entries = [];
  value1.forEach(function (value, key) {
    value1Entries.push([key, value]);
  });
  var value2Entries = [];
  value2.forEach(function (value, key) {
    value2Entries.push([key, value]);
  });

  for (var _i3 = 0, _value1Entries3 = value1Entries; _i3 < _value1Entries3.length; _i3++) {
    var _value1Entries3$_i = _slicedToArray(_value1Entries3[_i3], 2),
        key = _value1Entries3$_i[0],
        v1item = _value1Entries3$_i[1];

    var result = false;

    var _iterator = _createForOfIteratorHelper(value2Entries),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            _key = _step$value[0],
            v2item = _step$value[1];

        if (__equalDeep(v1item, v2item) === true) {
          result = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (result === false) {
      return false;
    }
  } // IE11 no support set.keys set.entries


  return true;
};

equal.func.weakSet = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isWeakSetAll)(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator2 = _createForOfIteratorHelper(value1),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var v1item = _step2.value;
      var result = false;

      var _iterator3 = _createForOfIteratorHelper(value2),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var v2item = _step3.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return true;
};

equal.func.defaultArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.map, equal.func.weakMap, equal.func.set, equal.func.weakSet, equal.func.arraySeries, equal.func.object, equal.func.value];
var _default = {
  _equal: _equal,
  equal: equal
};
exports["default"] = _default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports._equalDeep = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(23);

var _equal = __webpack_require__(92);

/**
 * equalDeep
 */
var _equalDeep = function _equalDeep(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equal.equal.func.defaultArray;
  var CircularReferenceBuffer = {
    v1Array: [],
    v2Array: []
  };

  var __equalDeep = function __equalDeep(value1, value2) {
    var index = CircularReferenceBuffer.v1Array.indexOf(value1);

    if (index !== -1) {
      if (CircularReferenceBuffer.v2Array[index] === value2) {
        return true;
      }

      return value1 === value2;
    }

    for (var i = 0, l = equalFuncArray.length; i < l; i += 1) {
      var result = equalFuncArray[i](value1, value2, function (v1, v2) {
        CircularReferenceBuffer.v1Array.push(v1);
        CircularReferenceBuffer.v2Array.push(v2);
      }, __equalDeep);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equalDeep(value1, value2);
};

exports._equalDeep = _equalDeep;

var equalDeep = function equalDeep(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equal.equal.func.defaultArray;

  if ((0, _object.isObjectParameter)(value1, 'value1, value2', 'equalFuncArray')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    var _value$equalFuncArray = _value.equalFuncArray;
    equalFuncArray = _value$equalFuncArray === void 0 ? _equal.equal.func.defaultArray : _value$equalFuncArray;
  } else if ((0, _object.isObjectParameter)(value2, 'value2', 'equalFuncArray')) {
    var _value2 = value2;
    value2 = _value2.value2;
    var _value2$equalFuncArra = _value2.equalFuncArray;
    equalFuncArray = _value2$equalFuncArra === void 0 ? _equal.equal.func.defaultArray : _value2$equalFuncArra;
  } else if ((0, _object.isObjectParameter)(equalFuncArray, 'equalFuncArray')) {
    var _equalFuncArray = equalFuncArray;
    equalFuncArray = _equalFuncArray.equalFuncArray;
  }

  return _equalDeep(value1, value2, equalFuncArray);
};

exports.equalDeep = equalDeep;
var _default = {
  _equalDeep: _equalDeep,
  equalDeep: equalDeep
};
exports["default"] = _default;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.valToStr = exports.numToStr = exports.valToIntegerDef = exports.valToInteger = exports.valToNumberDef = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports._stringToIntegerDefault = exports.stringToInteger = exports._stringToInteger = exports._stringToIntegerBase = exports.stringToNumberDefault = exports._stringToNumberDefault = exports.stringToNumber = exports._stringToNumber = exports._stringToNumberBase = exports.valueToString = exports.numberToString = exports._numberToString = void 0;

var _type = __webpack_require__(5);

var _compare = __webpack_require__(73);

var _string = __webpack_require__(62);

var _isObjectParameter = __webpack_require__(13);

var _number = __webpack_require__(33);

/**
 * numberToString
 */
var _numberToString = function _numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return value.toString(radix);
};

exports._numberToString = _numberToString;

var numberToString = function numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value = value;
    value = _value.value;
    var _value$radix = _value.radix;
    radix = _value$radix === void 0 ? 10 : _value$radix;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('numberToString args(value) is not number');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  return _numberToString(value, radix);
};
/**
 * valueToString
 */


exports.numberToString = numberToString;

var valueToString = function valueToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value2 = value;
    value = _value2.value;
    var _value2$radix = _value2.radix;
    radix = _value2$radix === void 0 ? 10 : _value2$radix;
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  if (!(0, _type.isNumber)(value)) {
    return String(value);
  }

  return _numberToString(value, radix);
};
/**
 * stringToNumber
 */


exports.valueToString = valueToString;

var _stringToNumberBase = function _stringToNumberBase(value, defaultValueFunc) {
  if (value === '') {
    return defaultValueFunc();
  }

  if (!(0, _string._matchFormat)('float_more', value)) {
    return defaultValueFunc();
  }

  var result = Number(value);

  if (!(0, _type.isNumber)(result)) {
    return defaultValueFunc();
  }

  return result;
};

exports._stringToNumberBase = _stringToNumberBase;

var _stringToNumber = function _stringToNumber(value) {
  return _stringToNumberBase(value, function () {
    throw new RangeError('stringToNumber args(value) is not changeing number');
  });
};

exports._stringToNumber = _stringToNumber;

var stringToNumber = function stringToNumber(value) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value')) {
    var _value3 = value;
    value = _value3.value;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToNumber args(value) is not string');
  }

  return _stringToNumber(value);
};

exports.stringToNumber = stringToNumber;

var _stringToNumberDefault = function _stringToNumberDefault(value, defaultValue) {
  return _stringToNumberBase(value, function () {
    return defaultValue;
  });
};

exports._stringToNumberDefault = _stringToNumberDefault;

var stringToNumberDefault = function stringToNumberDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'defaultValue')) {
    var _value4 = value;
    value = _value4.value;
    defaultValue = _value4.defaultValue;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToNumberDefault args(value) is not string');
  }

  return _stringToNumberDefault(value, defaultValue);
};
/**
 * stringToInteger
 */


exports.stringToNumberDefault = stringToNumberDefault;

var _stringToIntegerBase = function _stringToIntegerBase(value, defaultValueFunc) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (value === '') {
    return defaultValueFunc();
  }

  if (!(0, _string._matchFormat)(String(radix) + '_base_number', value)) {
    return defaultValueFunc();
  }

  var result = parseInt(value, radix);

  if (!(0, _type.isInteger)(result)) {
    return defaultValueFunc();
  }

  return result;
};

exports._stringToIntegerBase = _stringToIntegerBase;

var _stringToInteger = function _stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return _stringToIntegerBase(value, function () {
    throw new RangeError('stringToInteger args(value) is not changeing integer');
  }, radix);
};

exports._stringToInteger = _stringToInteger;

var stringToInteger = function stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value5 = value;
    value = _value5.value;
    var _value5$radix = _value5.radix;
    radix = _value5$radix === void 0 ? 10 : _value5$radix;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToInteger(value, radix);
};

exports.stringToInteger = stringToInteger;

var _stringToIntegerDefault = function _stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return _stringToIntegerBase(value, function () {
    return defaultValue;
  }, radix);
};

exports._stringToIntegerDefault = _stringToIntegerDefault;

var stringToIntegerDefault = function stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'defaultValue, radix')) {
    var _value6 = value;
    value = _value6.value;
    defaultValue = _value6.defaultValue;
    var _value6$radix = _value6.radix;
    radix = _value6$radix === void 0 ? 10 : _value6$radix;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToIntegerDefault(value, defaultValue, radix);
};
/**
 * valueToNumber
 */


exports.stringToIntegerDefault = stringToIntegerDefault;

var valueToNumber = function valueToNumber(value) {
  if ((0, _type.isNull)(value)) {
    return NaN;
  }

  if ((0, _type.isArray)(value)) {
    return NaN;
  }

  if (!(0, _type.isString)(value)) {
    return Number(value);
  }

  return stringToNumberDefault(value, NaN);
};

exports.valueToNumber = valueToNumber;

var valueToNumberDefault = function valueToNumberDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,defaultValue')) {
    var _value7 = value;
    value = _value7.value;
    defaultValue = _value7.defaultValue;
  }

  if ((0, _type.isNaNStrict)(value)) {
    return value;
  }

  var result = valueToNumber(value);

  if ((0, _type.isNaNStrict)(result)) {
    return defaultValue;
  }

  return result;
};
/**
 * valueToInteger
 */


exports.valueToNumberDefault = valueToNumberDefault;

var valueToInteger = function valueToInteger(value) {
  var result = valueToNumber(value);

  if ((0, _type.isNaNStrict)(result)) {
    return NaN;
  }

  return (0, _number._round)(result);
};

exports.valueToInteger = valueToInteger;

var valueToIntegerDefault = function valueToIntegerDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,defaultValue')) {
    var _value8 = value;
    value = _value8.value;
    defaultValue = _value8.defaultValue;
  }

  if ((0, _type.isNaNStrict)(value)) {
    return value;
  }

  var result = valueToInteger(value);

  if ((0, _type.isNaNStrict)(result)) {
    return defaultValue;
  }

  return result;
};

exports.valueToIntegerDefault = valueToIntegerDefault;
var numToString = numberToString;
exports.numToString = numToString;
var valToString = valueToString;
exports.valToString = valToString;
var strToNumber = stringToNumber;
exports.strToNumber = strToNumber;
var strToNumberDef = stringToNumberDefault;
exports.strToNumberDef = strToNumberDef;
var strToInteger = stringToInteger;
exports.strToInteger = strToInteger;
var strToIntegerDef = stringToIntegerDefault;
exports.strToIntegerDef = strToIntegerDef;
var valToNumber = valueToNumber;
exports.valToNumber = valToNumber;
var valToNumberDef = valueToNumberDefault;
exports.valToNumberDef = valToNumberDef;
var valToInteger = valueToInteger;
exports.valToInteger = valToInteger;
var valToIntegerDef = valueToIntegerDefault;
exports.valToIntegerDef = valToIntegerDef;
var numToStr = numberToString;
exports.numToStr = numToStr;
var valToStr = valueToString;
exports.valToStr = valToStr;
var strToNum = stringToNumber;
exports.strToNum = strToNum;
var strToNumDef = stringToNumberDefault;
exports.strToNumDef = strToNumDef;
var strToInt = stringToInteger;
exports.strToInt = strToInt;
var strToIntDef = stringToIntegerDefault;
exports.strToIntDef = strToIntDef;
var valToNum = valueToNumber;
exports.valToNum = valToNum;
var valToNumDef = valueToNumberDefault;
exports.valToNumDef = valToNumDef;
var valToInt = valueToInteger;
exports.valToInt = valToInt;
var valToIntDef = valueToIntegerDefault;
exports.valToIntDef = valToIntDef;
var _default = {
  numberToString: numberToString,
  valueToString: valueToString,
  stringToNumber: stringToNumber,
  stringToNumberDefault: stringToNumberDefault,
  stringToInteger: stringToInteger,
  stringToIntegerDefault: stringToIntegerDefault,
  valueToNumber: valueToNumber,
  valueToNumberDefault: valueToNumberDefault,
  valueToInteger: valueToInteger,
  valueToIntegerDefault: valueToIntegerDefault,
  numToString: numToString,
  valToString: valToString,
  strToNumber: strToNumber,
  strToNumberDef: strToNumberDef,
  strToInteger: strToInteger,
  strToIntegerDef: strToIntegerDef,
  valToNumber: valToNumber,
  valToNumberDef: valToNumberDef,
  valToInteger: valToInteger,
  valToIntegerDef: valToIntegerDef,
  numToStr: numToStr,
  valToStr: valToStr,
  valToNum: valToNum,
  valToNumDef: valToNumDef,
  valToInt: valToInt,
  valToIntDef: valToIntDef,
  strToNum: strToNum,
  strToNumDef: strToNumDef,
  strToInt: strToInt,
  strToIntDef: strToIntDef
};
exports["default"] = _default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.acceptDebug = exports.acceptError = exports.acceptWarn = exports.acceptInfo = exports.acceptLog = exports.accept = exports._accept = exports.unHookDebug = exports.unHookError = exports.unHookWarn = exports.unHookInfo = exports.unHookLog = exports.unHook = exports._unHook = exports.hookDebug = exports.hookError = exports.hookWarn = exports.hookInfo = exports.hookLog = exports.hook = exports._hook = exports.original = void 0;

var _type = __webpack_require__(5);

var _compare = __webpack_require__(73);

var _array = __webpack_require__(45);

var original = {};
exports.original = original;
original.log = console.log;
original.info = console.info;
original.warn = console.warn;
original.error = console.error;
original.debug = console.debug;

var _hook = function _hook(methodName, hookFunc) {
  console[methodName] = hookFunc;
};

exports._hook = _hook;

var hook = function hook(methodName) {
  var hookFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _compare._or)(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError('hook args(methodName) is not [log|info|warn|error|debug]');
  }

  if (!(0, _type.isFunction)(hookFunc)) {
    throw new TypeError('hook args(hookFunc) is not function');
  }

  _hook(methodName, hookFunc);
};

exports.hook = hook;

var hookLog = function hookLog(hookFunc) {
  hook('log', hookFunc);
};

exports.hookLog = hookLog;

var hookInfo = function hookInfo(hookFunc) {
  hook('info', hookFunc);
};

exports.hookInfo = hookInfo;

var hookWarn = function hookWarn(hookFunc) {
  hook('warn', hookFunc);
};

exports.hookWarn = hookWarn;

var hookError = function hookError(hookFunc) {
  hook('error', hookFunc);
};

exports.hookError = hookError;

var hookDebug = function hookDebug(hookFunc) {
  hook('debug', hookFunc);
};

exports.hookDebug = hookDebug;

var _unHook = function _unHook(methodName) {
  console[methodName] = original[methodName];
};

exports._unHook = _unHook;

var unHook = function unHook(methodName) {
  if (!(0, _compare._or)(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError('unHook args(methodName) is not [log|info|warn|error|debug]');
  }

  _unHook(methodName);
};

exports.unHook = unHook;

var unHookLog = function unHookLog() {
  unHook('log');
};

exports.unHookLog = unHookLog;

var unHookInfo = function unHookInfo() {
  unHook('info');
};

exports.unHookInfo = unHookInfo;

var unHookWarn = function unHookWarn() {
  unHook('warn');
};

exports.unHookWarn = unHookWarn;

var unHookError = function unHookError() {
  unHook('error');
};

exports.unHookError = unHookError;

var unHookDebug = function unHookDebug() {
  unHook('debug');
};

exports.unHookDebug = unHookDebug;

var _accept = function _accept(methodName, acceptArray, rejectArray, hookFunc) {
  _hook(methodName, function () {
    for (var _len = arguments.length, messageArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      messageArgs[_key] = arguments[_key];
    }

    var messageArgsAll = (0, _array.map)(messageArgs, function (value) {
      return String(value);
    }).join(' ');
    var acceptFlag = acceptArray.length === 0;

    if (acceptFlag === false) {
      acceptFlag = (0, _compare._includesSome)(messageArgsAll, acceptArray);
    }

    if (acceptFlag && (0, _type.isArray)(rejectArray)) {
      acceptFlag = !(0, _compare._includesSome)(messageArgsAll, rejectArray);
    }

    if (acceptFlag) {
      hookFunc.apply(void 0, messageArgs);
    }
  });
};

exports._accept = _accept;

var accept = function accept(methodName, acceptArray, rejectArray, hookFunc) {
  if (!(0, _compare._or)(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError('accept args(methodName) is not [log|info|warn|error|debug]');
  }

  if (!(0, _type.isArray)(acceptArray)) {
    throw new TypeError('accept args(acceptArray) is not array');
  }

  if (!((0, _type.isUndefined)(rejectArray) || (0, _type.isArray)(rejectArray))) {
    throw new TypeError('accept args(rejectArray) is not array');
  }

  if (!(0, _type.isFunction)(hookFunc)) {
    throw new TypeError('accept args(hookFunc) is not function');
  }

  _accept(methodName, acceptArray, rejectArray, hookFunc);
};

exports.accept = accept;

var acceptLog = function acceptLog(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.log;
  accept('log', acceptArray, rejectArray, hookFunc);
};

exports.acceptLog = acceptLog;

var acceptInfo = function acceptInfo(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.info;
  accept('info', acceptArray, rejectArray, hookFunc);
};

exports.acceptInfo = acceptInfo;

var acceptWarn = function acceptWarn(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.warn;
  accept('warn', acceptArray, rejectArray, hookFunc);
};

exports.acceptWarn = acceptWarn;

var acceptError = function acceptError(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.error;
  accept('error', acceptArray, rejectArray, hookFunc);
};

exports.acceptError = acceptError;

var acceptDebug = function acceptDebug(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.debug;
  accept('debug', acceptArray, rejectArray, hookFunc);
};

exports.acceptDebug = acceptDebug;
var _default = {
  _hook: _hook,
  hook: hook,
  hookLog: hookLog,
  hookInfo: hookInfo,
  hookWarn: hookWarn,
  hookError: hookError,
  hookDebug: hookDebug,
  _unHook: _unHook,
  unHook: unHook,
  unHookLog: unHookLog,
  unHookInfo: unHookInfo,
  unHookWarn: unHookWarn,
  unHookError: unHookError,
  unHookDebug: unHookDebug,
  accept: accept,
  acceptLog: acceptLog,
  acceptInfo: acceptInfo,
  acceptWarn: acceptWarn,
  acceptError: acceptError,
  acceptDebug: acceptDebug
};
exports["default"] = _default;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports.Shell = exports.FileSystemObject = void 0;

var _wshFileSystemObject = _interopRequireDefault(__webpack_require__(97));

var _wshShell = _interopRequireDefault(__webpack_require__(98));

var _forceCreateFolder = _interopRequireDefault(__webpack_require__(99));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FileSystemObject = _wshFileSystemObject["default"].FileSystemObject;
exports.FileSystemObject = FileSystemObject;
var Shell = _wshShell["default"].Shell;
exports.Shell = Shell;
var forceCreateFolder = _forceCreateFolder["default"].forceCreateFolder;
exports.forceCreateFolder = forceCreateFolder;

var _default = _objectSpread(_objectSpread(_objectSpread({}, _wshFileSystemObject["default"]), _wshShell["default"]), _forceCreateFolder["default"]);

exports["default"] = _default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileSystemObject = void 0;

var _isType = __webpack_require__(6);

var _platform = __webpack_require__(9);

var _fso;

var FileSystemObject = function FileSystemObject() {
  if (!(0, _platform.isWindowsScriptHost)()) {
    throw new Error('wsh.FileSystemObject can be used only in wsh platform');
  }

  if (!(this instanceof FileSystemObject)) {
    return new FileSystemObject();
  }

  if ((0, _isType.isUndefined)(_fso)) {
    _fso = new ActiveXObject('Scripting.FileSystemObject');
  }

  return _fso;
};

exports.FileSystemObject = FileSystemObject;
var _default = {
  FileSystemObject: FileSystemObject
};
exports["default"] = _default;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Shell = void 0;

var _isType = __webpack_require__(6);

var _platform = __webpack_require__(9);

var _shell;

var Shell = function Shell() {
  if (!(0, _platform.isWindowsScriptHost)()) {
    throw new Error('wsh.Shell can be used only in wsh platform');
  }

  if (!(this instanceof Shell)) {
    return new Shell();
  }

  if ((0, _isType.isUndefined)(_shell)) {
    _shell = new ActiveXObject('WScript.Shell');
  }

  return _shell;
};

exports.Shell = Shell;
var _default = {
  Shell: Shell
};
exports["default"] = _default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports._forceCreateFolder = void 0;

var _isType = __webpack_require__(6);

var _platform = __webpack_require__(9);

var _wshFileSystemObject = __webpack_require__(97);

var _forceCreateFolder = function _forceCreateFolder(folderPath) {
  var fso = (0, _wshFileSystemObject.FileSystemObject)();
  var parentFolderPath = fso.GetParentFolderName(folderPath);

  if (!fso.FolderExists(parentFolderPath)) {
    _forceCreateFolder(parentFolderPath);
  }

  if (!fso.FolderExists(folderPath)) {
    fso.CreateFolder(folderPath);
  }
};

exports._forceCreateFolder = _forceCreateFolder;

var forceCreateFolder = function forceCreateFolder(folderPath) {
  if (!(0, _platform.isWindowsScriptHost)()) {
    throw new Error('wsh.forceCreateFolder can be used only in wsh platform');
  }

  if (!(0, _isType.isString)(folderPath)) {
    throw new Error('forceCreateFolder args(folderPath) is not string');
  }

  return _forceCreateFolder(folderPath);
};

exports.forceCreateFolder = forceCreateFolder;
var _default = {
  _forceCreateFolder: _forceCreateFolder,
  forceCreateFolder: forceCreateFolder
};
exports["default"] = _default;

/***/ })
/******/ ]);
});