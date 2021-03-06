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
exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isExceptionAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isNotWeakMap = exports.isNotMap = exports.isNotSymbol = exports.isNotException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isWeakSet = exports.isSet = exports.isWeakMap = exports.isMap = exports.isSymbol = exports.isException = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.isReferenceType = exports.isPrimitiveType = exports.typeName = exports.objectToString = exports.platform = exports.common = exports.merge = exports.functionValue = exports.cloneDeep = exports.clone = exports.VERSION = void 0;
exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isNotArrayType = exports.isNotObjectType = exports.isObjType = exports.isExcept = exports.isEmptyObj = exports.isObjLike = exports.isObjFromNull = exports.isObjNormal = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isArrayType = exports.isObjectType = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotExceptionArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isExceptionArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotExceptionAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = void 0;
exports.indexOfMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.allMatch = exports.indexOfMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports.syntax = exports.recursive = exports.Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.guard = exports.assert = exports.test = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.checkCompare = exports.checkEqual = exports.type = exports.isNotObjTypeArray = exports.isNotExceptArray = exports.isNotEmptyObjArray = exports.isNotObjLikeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isNotArrayTypeArray = exports.isNotObjectTypeArray = exports.isObjTypeArray = exports.isExceptArray = exports.isEmptyObjArray = exports.isObjLikeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isArrayTypeArray = exports.isObjectTypeArray = exports.isNotObjTypeAll = exports.isNotExceptAll = exports.isNotEmptyObjAll = exports.isNotObjLikeAll = exports.isNotObjFromNullAll = exports.isNotObjNormalAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isNotArrayTypeAll = exports.isNotObjectTypeAll = exports.isObjTypeAll = exports.isExceptAll = exports.isEmptyObjAll = exports.isObjLikeAll = exports.isObjFromNullAll = exports.isObjNormalAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isArrayTypeAll = exports.isObjectTypeAll = exports.isNotObjType = exports.isNotExcept = exports.isNotEmptyObj = exports.isNotObjLike = exports.isNotObjFromNull = exports.isNotObjNormal = exports.isNotObj = exports.isNotFunc = exports.isNotStr = void 0;
exports.stringToDateUTC = exports.stringToDate = exports.dateToStringUTC = exports.dateToString = exports.Today = exports.array = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.object = exports.propCount = exports.fixProp = exports.inProp = exports.setProp = exports.getProp = exports.copyProp = exports.objectToValueArray = exports.objectToKeyArray = exports.objectFromKeyValueArray = exports.objectToKeyValueArray = exports.has = exports.hasPrototype = exports.hasOwn = exports.objectValues = exports.objectKeys = exports.objectFromEntries = exports.objectEntries = exports.propertyList = exports.propertyCount = exports.fixProperty = exports.inProperty = exports.setProperty = exports.getProperty = exports.copyProperty = exports.string = exports.splitDotItems = exports.splitCommaItems = exports.split = exports.matchFormat = exports.replaceAllArray = exports.replaceAllRepeat = exports.replaceAll = exports.isUpperCase = exports.isLowerCase = exports.number = exports.makeInRange = exports.randomInt = exports.keepMinMax = exports.inRange = exports.nearEqual = exports.round = exports.isOdd = exports.isEven = exports.isMultiples = exports.convert = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.valToStr = exports.numToStr = exports.valToIntegerDef = exports.valToInteger = exports.valToNumberDef = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports.stringToInteger = exports.stringToNumberDefault = exports.stringToNumber = exports.valueToString = exports.numberToString = exports.compare = exports.equalDeep = exports.equal = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = exports.allMatchAll = exports.indexOfMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.allMatchSome = void 0;
exports["default"] = exports.parts = exports.system = exports.date = void 0;

var _polyfill = _interopRequireDefault(__webpack_require__(2));

var _common = _interopRequireDefault(__webpack_require__(3));

var _platform = _interopRequireDefault(__webpack_require__(7));

var _type = _interopRequireDefault(__webpack_require__(5));

var _typeAlias = _interopRequireDefault(__webpack_require__(123));

var _test = _interopRequireDefault(__webpack_require__(124));

var _syntax = _interopRequireDefault(__webpack_require__(53));

var _compare = _interopRequireDefault(__webpack_require__(153));

var _convert = _interopRequireDefault(__webpack_require__(171));

var _convertAlias = _interopRequireDefault(__webpack_require__(172));

var _number = _interopRequireDefault(__webpack_require__(42));

var _string = _interopRequireDefault(__webpack_require__(125));

var _object = _interopRequireDefault(__webpack_require__(31));

var _array = _interopRequireDefault(__webpack_require__(74));

var _date = _interopRequireDefault(__webpack_require__(173));

var _system = _interopRequireDefault(__webpack_require__(219));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VERSION = '10.7.0';
exports.VERSION = VERSION;
var rootAlias = {};
var propertyNames = {};
/**
 * common
 */

var clone = _common["default"].clone,
    cloneDeep = _common["default"].cloneDeep,
    functionValue = _common["default"].functionValue,
    merge = _common["default"].merge;
exports.merge = merge;
exports.functionValue = functionValue;
exports.cloneDeep = cloneDeep;
exports.clone = clone;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  clone: clone,
  cloneDeep: cloneDeep,
  functionValue: functionValue,
  merge: merge
});

var common = _objectSpread({}, _common["default"]);
/**
 * platform
 */


exports.common = common;

var platform = _objectSpread({}, _platform["default"]);
/**
 * type
 */


exports.platform = platform;
var objectToString = _type["default"].objectToString,
    typeName = _type["default"].typeName,
    isPrimitiveType = _type["default"].isPrimitiveType,
    isReferenceType = _type["default"].isReferenceType,
    isUndefined = _type["default"].isUndefined,
    isNull = _type["default"].isNull,
    isNaNStrict = _type["default"].isNaNStrict,
    isBoolean = _type["default"].isBoolean,
    isNumber = _type["default"].isNumber,
    isInteger = _type["default"].isInteger,
    isString = _type["default"].isString,
    isFunction = _type["default"].isFunction,
    isObject = _type["default"].isObject,
    isObjectNormal = _type["default"].isObjectNormal,
    isObjectFromNull = _type["default"].isObjectFromNull,
    isObjectLike = _type["default"].isObjectLike,
    isModule = _type["default"].isModule,
    isArray = _type["default"].isArray,
    isArraySeries = _type["default"].isArraySeries,
    isDate = _type["default"].isDate,
    isRegExp = _type["default"].isRegExp,
    isBooleanObject = _type["default"].isBooleanObject,
    isNumberObject = _type["default"].isNumberObject,
    isStringObject = _type["default"].isStringObject,
    isEmptyObject = _type["default"].isEmptyObject,
    isEmptyArray = _type["default"].isEmptyArray,
    isException = _type["default"].isException,
    isSymbol = _type["default"].isSymbol,
    isMap = _type["default"].isMap,
    isWeakMap = _type["default"].isWeakMap,
    isSet = _type["default"].isSet,
    isWeakSet = _type["default"].isWeakSet,
    isNotUndefined = _type["default"].isNotUndefined,
    isNotNull = _type["default"].isNotNull,
    isNotNaNStrict = _type["default"].isNotNaNStrict,
    isNotBoolean = _type["default"].isNotBoolean,
    isNotNumber = _type["default"].isNotNumber,
    isNotInteger = _type["default"].isNotInteger,
    isNotString = _type["default"].isNotString,
    isNotFunction = _type["default"].isNotFunction,
    isNotObject = _type["default"].isNotObject,
    isNotObjectNormal = _type["default"].isNotObjectNormal,
    isNotObjectFromNull = _type["default"].isNotObjectFromNull,
    isNotObjectLike = _type["default"].isNotObjectLike,
    isNotModule = _type["default"].isNotModule,
    isNotArray = _type["default"].isNotArray,
    isNotArraySeries = _type["default"].isNotArraySeries,
    isNotDate = _type["default"].isNotDate,
    isNotRegExp = _type["default"].isNotRegExp,
    isNotBooleanObject = _type["default"].isNotBooleanObject,
    isNotNumberObject = _type["default"].isNotNumberObject,
    isNotStringObject = _type["default"].isNotStringObject,
    isNotEmptyObject = _type["default"].isNotEmptyObject,
    isNotEmptyArray = _type["default"].isNotEmptyArray,
    isNotException = _type["default"].isNotException,
    isNotSymbol = _type["default"].isNotSymbol,
    isNotMap = _type["default"].isNotMap,
    isNotWeakMap = _type["default"].isNotWeakMap,
    isNotSet = _type["default"].isNotSet,
    isNotWeakSet = _type["default"].isNotWeakSet,
    isUndefinedAll = _type["default"].isUndefinedAll,
    isNullAll = _type["default"].isNullAll,
    isNaNStrictAll = _type["default"].isNaNStrictAll,
    isBooleanAll = _type["default"].isBooleanAll,
    isNumberAll = _type["default"].isNumberAll,
    isIntegerAll = _type["default"].isIntegerAll,
    isStringAll = _type["default"].isStringAll,
    isFunctionAll = _type["default"].isFunctionAll,
    isObjectAll = _type["default"].isObjectAll,
    isObjectNormalAll = _type["default"].isObjectNormalAll,
    isObjectFromNullAll = _type["default"].isObjectFromNullAll,
    isObjectLikeAll = _type["default"].isObjectLikeAll,
    isModuleAll = _type["default"].isModuleAll,
    isArrayAll = _type["default"].isArrayAll,
    isArraySeriesAll = _type["default"].isArraySeriesAll,
    isDateAll = _type["default"].isDateAll,
    isRegExpAll = _type["default"].isRegExpAll,
    isBooleanObjectAll = _type["default"].isBooleanObjectAll,
    isNumberObjectAll = _type["default"].isNumberObjectAll,
    isStringObjectAll = _type["default"].isStringObjectAll,
    isEmptyObjectAll = _type["default"].isEmptyObjectAll,
    isEmptyArrayAll = _type["default"].isEmptyArrayAll,
    isExceptionAll = _type["default"].isExceptionAll,
    isSymbolAll = _type["default"].isSymbolAll,
    isMapAll = _type["default"].isMapAll,
    isWeakMapAll = _type["default"].isWeakMapAll,
    isSetAll = _type["default"].isSetAll,
    isWeakSetAll = _type["default"].isWeakSetAll,
    isNotUndefinedAll = _type["default"].isNotUndefinedAll,
    isNotNullAll = _type["default"].isNotNullAll,
    isNotNaNStrictAll = _type["default"].isNotNaNStrictAll,
    isNotBooleanAll = _type["default"].isNotBooleanAll,
    isNotNumberAll = _type["default"].isNotNumberAll,
    isNotIntegerAll = _type["default"].isNotIntegerAll,
    isNotStringAll = _type["default"].isNotStringAll,
    isNotFunctionAll = _type["default"].isNotFunctionAll,
    isNotObjectAll = _type["default"].isNotObjectAll,
    isNotObjectNormalAll = _type["default"].isNotObjectNormalAll,
    isNotObjectFromNullAll = _type["default"].isNotObjectFromNullAll,
    isNotObjectLikeAll = _type["default"].isNotObjectLikeAll,
    isNotModuleAll = _type["default"].isNotModuleAll,
    isNotArrayAll = _type["default"].isNotArrayAll,
    isNotArraySeriesAll = _type["default"].isNotArraySeriesAll,
    isNotDateAll = _type["default"].isNotDateAll,
    isNotRegExpAll = _type["default"].isNotRegExpAll,
    isNotBooleanObjectAll = _type["default"].isNotBooleanObjectAll,
    isNotNumberObjectAll = _type["default"].isNotNumberObjectAll,
    isNotStringObjectAll = _type["default"].isNotStringObjectAll,
    isNotEmptyObjectAll = _type["default"].isNotEmptyObjectAll,
    isNotEmptyArrayAll = _type["default"].isNotEmptyArrayAll,
    isNotExceptionAll = _type["default"].isNotExceptionAll,
    isNotSymbolAll = _type["default"].isNotSymbolAll,
    isNotMapAll = _type["default"].isNotMapAll,
    isNotWeakMapAll = _type["default"].isNotWeakMapAll,
    isNotSetAll = _type["default"].isNotSetAll,
    isNotWeakSetAll = _type["default"].isNotWeakSetAll,
    isUndefinedArray = _type["default"].isUndefinedArray,
    isNullArray = _type["default"].isNullArray,
    isNaNStrictArray = _type["default"].isNaNStrictArray,
    isBooleanArray = _type["default"].isBooleanArray,
    isNumberArray = _type["default"].isNumberArray,
    isIntegerArray = _type["default"].isIntegerArray,
    isStringArray = _type["default"].isStringArray,
    isFunctionArray = _type["default"].isFunctionArray,
    isObjectArray = _type["default"].isObjectArray,
    isObjectNormalArray = _type["default"].isObjectNormalArray,
    isObjectFromNullArray = _type["default"].isObjectFromNullArray,
    isObjectLikeArray = _type["default"].isObjectLikeArray,
    isModuleArray = _type["default"].isModuleArray,
    isArrayArray = _type["default"].isArrayArray,
    isArraySeriesArray = _type["default"].isArraySeriesArray,
    isDateArray = _type["default"].isDateArray,
    isRegExpArray = _type["default"].isRegExpArray,
    isBooleanObjectArray = _type["default"].isBooleanObjectArray,
    isNumberObjectArray = _type["default"].isNumberObjectArray,
    isStringObjectArray = _type["default"].isStringObjectArray,
    isEmptyObjectArray = _type["default"].isEmptyObjectArray,
    isEmptyArrayArray = _type["default"].isEmptyArrayArray,
    isExceptionArray = _type["default"].isExceptionArray,
    isSymbolArray = _type["default"].isSymbolArray,
    isMapArray = _type["default"].isMapArray,
    isWeakMapArray = _type["default"].isWeakMapArray,
    isSetArray = _type["default"].isSetArray,
    isWeakSetArray = _type["default"].isWeakSetArray,
    isNotUndefinedArray = _type["default"].isNotUndefinedArray,
    isNotNullArray = _type["default"].isNotNullArray,
    isNotNaNStrictArray = _type["default"].isNotNaNStrictArray,
    isNotBooleanArray = _type["default"].isNotBooleanArray,
    isNotNumberArray = _type["default"].isNotNumberArray,
    isNotIntegerArray = _type["default"].isNotIntegerArray,
    isNotStringArray = _type["default"].isNotStringArray,
    isNotFunctionArray = _type["default"].isNotFunctionArray,
    isNotObjectArray = _type["default"].isNotObjectArray,
    isNotObjectNormalArray = _type["default"].isNotObjectNormalArray,
    isNotObjectFromNullArray = _type["default"].isNotObjectFromNullArray,
    isNotObjectLikeArray = _type["default"].isNotObjectLikeArray,
    isNotModuleArray = _type["default"].isNotModuleArray,
    isNotArrayArray = _type["default"].isNotArrayArray,
    isNotArraySeriesArray = _type["default"].isNotArraySeriesArray,
    isNotDateArray = _type["default"].isNotDateArray,
    isNotRegExpArray = _type["default"].isNotRegExpArray,
    isNotBooleanObjectArray = _type["default"].isNotBooleanObjectArray,
    isNotNumberObjectArray = _type["default"].isNotNumberObjectArray,
    isNotStringObjectArray = _type["default"].isNotStringObjectArray,
    isNotEmptyObjectArray = _type["default"].isNotEmptyObjectArray,
    isNotEmptyArrayArray = _type["default"].isNotEmptyArrayArray,
    isNotExceptionArray = _type["default"].isNotExceptionArray,
    isNotSymbolArray = _type["default"].isNotSymbolArray,
    isNotMapArray = _type["default"].isNotMapArray,
    isNotWeakMapArray = _type["default"].isNotWeakMapArray,
    isNotSetArray = _type["default"].isNotSetArray,
    isNotWeakSetArray = _type["default"].isNotWeakSetArray;
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
exports.isReferenceType = isReferenceType;
exports.isPrimitiveType = isPrimitiveType;
exports.typeName = typeName;
exports.objectToString = objectToString;
var isObjectType = _typeAlias["default"].isObjectType,
    isArrayType = _typeAlias["default"].isArrayType,
    isUndef = _typeAlias["default"].isUndef,
    isBool = _typeAlias["default"].isBool,
    isNum = _typeAlias["default"].isNum,
    isInt = _typeAlias["default"].isInt,
    isStr = _typeAlias["default"].isStr,
    isFunc = _typeAlias["default"].isFunc,
    isObj = _typeAlias["default"].isObj,
    isObjNormal = _typeAlias["default"].isObjNormal,
    isObjFromNull = _typeAlias["default"].isObjFromNull,
    isObjLike = _typeAlias["default"].isObjLike,
    isEmptyObj = _typeAlias["default"].isEmptyObj,
    isExcept = _typeAlias["default"].isExcept,
    isObjType = _typeAlias["default"].isObjType,
    isNotObjectType = _typeAlias["default"].isNotObjectType,
    isNotArrayType = _typeAlias["default"].isNotArrayType,
    isNotUndef = _typeAlias["default"].isNotUndef,
    isNotBool = _typeAlias["default"].isNotBool,
    isNotNum = _typeAlias["default"].isNotNum,
    isNotInt = _typeAlias["default"].isNotInt,
    isNotStr = _typeAlias["default"].isNotStr,
    isNotFunc = _typeAlias["default"].isNotFunc,
    isNotObj = _typeAlias["default"].isNotObj,
    isNotObjNormal = _typeAlias["default"].isNotObjNormal,
    isNotObjFromNull = _typeAlias["default"].isNotObjFromNull,
    isNotObjLike = _typeAlias["default"].isNotObjLike,
    isNotEmptyObj = _typeAlias["default"].isNotEmptyObj,
    isNotExcept = _typeAlias["default"].isNotExcept,
    isNotObjType = _typeAlias["default"].isNotObjType,
    isObjectTypeAll = _typeAlias["default"].isObjectTypeAll,
    isArrayTypeAll = _typeAlias["default"].isArrayTypeAll,
    isUndefAll = _typeAlias["default"].isUndefAll,
    isBoolAll = _typeAlias["default"].isBoolAll,
    isNumAll = _typeAlias["default"].isNumAll,
    isIntAll = _typeAlias["default"].isIntAll,
    isStrAll = _typeAlias["default"].isStrAll,
    isFuncAll = _typeAlias["default"].isFuncAll,
    isObjAll = _typeAlias["default"].isObjAll,
    isObjNormalAll = _typeAlias["default"].isObjNormalAll,
    isObjFromNullAll = _typeAlias["default"].isObjFromNullAll,
    isObjLikeAll = _typeAlias["default"].isObjLikeAll,
    isEmptyObjAll = _typeAlias["default"].isEmptyObjAll,
    isExceptAll = _typeAlias["default"].isExceptAll,
    isObjTypeAll = _typeAlias["default"].isObjTypeAll,
    isNotObjectTypeAll = _typeAlias["default"].isNotObjectTypeAll,
    isNotArrayTypeAll = _typeAlias["default"].isNotArrayTypeAll,
    isNotUndefAll = _typeAlias["default"].isNotUndefAll,
    isNotBoolAll = _typeAlias["default"].isNotBoolAll,
    isNotNumAll = _typeAlias["default"].isNotNumAll,
    isNotIntAll = _typeAlias["default"].isNotIntAll,
    isNotStrAll = _typeAlias["default"].isNotStrAll,
    isNotFuncAll = _typeAlias["default"].isNotFuncAll,
    isNotObjAll = _typeAlias["default"].isNotObjAll,
    isNotObjNormalAll = _typeAlias["default"].isNotObjNormalAll,
    isNotObjFromNullAll = _typeAlias["default"].isNotObjFromNullAll,
    isNotObjLikeAll = _typeAlias["default"].isNotObjLikeAll,
    isNotEmptyObjAll = _typeAlias["default"].isNotEmptyObjAll,
    isNotExceptAll = _typeAlias["default"].isNotExceptAll,
    isNotObjTypeAll = _typeAlias["default"].isNotObjTypeAll,
    isObjectTypeArray = _typeAlias["default"].isObjectTypeArray,
    isArrayTypeArray = _typeAlias["default"].isArrayTypeArray,
    isUndefArray = _typeAlias["default"].isUndefArray,
    isBoolArray = _typeAlias["default"].isBoolArray,
    isNumArray = _typeAlias["default"].isNumArray,
    isIntArray = _typeAlias["default"].isIntArray,
    isStrArray = _typeAlias["default"].isStrArray,
    isFuncArray = _typeAlias["default"].isFuncArray,
    isObjArray = _typeAlias["default"].isObjArray,
    isObjNormalArray = _typeAlias["default"].isObjNormalArray,
    isObjFromNullArray = _typeAlias["default"].isObjFromNullArray,
    isObjLikeArray = _typeAlias["default"].isObjLikeArray,
    isEmptyObjArray = _typeAlias["default"].isEmptyObjArray,
    isExceptArray = _typeAlias["default"].isExceptArray,
    isObjTypeArray = _typeAlias["default"].isObjTypeArray,
    isNotObjectTypeArray = _typeAlias["default"].isNotObjectTypeArray,
    isNotArrayTypeArray = _typeAlias["default"].isNotArrayTypeArray,
    isNotUndefArray = _typeAlias["default"].isNotUndefArray,
    isNotBoolArray = _typeAlias["default"].isNotBoolArray,
    isNotNumArray = _typeAlias["default"].isNotNumArray,
    isNotIntArray = _typeAlias["default"].isNotIntArray,
    isNotStrArray = _typeAlias["default"].isNotStrArray,
    isNotFuncArray = _typeAlias["default"].isNotFuncArray,
    isNotObjArray = _typeAlias["default"].isNotObjArray,
    isNotObjNormalArray = _typeAlias["default"].isNotObjNormalArray,
    isNotObjFromNullArray = _typeAlias["default"].isNotObjFromNullArray,
    isNotObjLikeArray = _typeAlias["default"].isNotObjLikeArray,
    isNotEmptyObjArray = _typeAlias["default"].isNotEmptyObjArray,
    isNotExceptArray = _typeAlias["default"].isNotExceptArray,
    isNotObjTypeArray = _typeAlias["default"].isNotObjTypeArray;
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
rootAlias = _objectSpread(_objectSpread(_objectSpread({}, rootAlias), _type["default"]), _typeAlias["default"]);

var type = _objectSpread(_objectSpread({}, _type["default"]), _typeAlias["default"]);
/**
 * test
 */


exports.type = type;
var checkEqual = _test["default"].checkEqual,
    checkCompare = _test["default"].checkCompare,
    isThrown = _test["default"].isThrown,
    isThrownValue = _test["default"].isThrownValue,
    isThrownException = _test["default"].isThrownException,
    isNotThrown = _test["default"].isNotThrown;
exports.isNotThrown = isNotThrown;
exports.isThrownException = isThrownException;
exports.isThrownValue = isThrownValue;
exports.isThrown = isThrown;
exports.checkCompare = checkCompare;
exports.checkEqual = checkEqual;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  checkEqual: checkEqual,
  checkCompare: checkCompare,
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown
});

var test = _objectSpread({}, _test["default"]);
/**
 * syntax
 */


exports.test = test;
var assert = _syntax["default"].assert,
    guard = _syntax["default"].guard,
    sc = _syntax["default"].sc,
    if_ = _syntax["default"].if_,
    switch_ = _syntax["default"].switch_,
    loop = _syntax["default"].loop,
    canUseMap = _syntax["default"].canUseMap,
    canUseWeakMap = _syntax["default"].canUseWeakMap,
    canUseSet = _syntax["default"].canUseSet,
    canUseWeakSet = _syntax["default"].canUseWeakSet,
    Enum = _syntax["default"].Enum,
    recursive = _syntax["default"].recursive;
exports.recursive = recursive;
exports.Enum = Enum;
exports.canUseWeakSet = canUseWeakSet;
exports.canUseSet = canUseSet;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseMap = canUseMap;
exports.loop = loop;
exports.switch_ = switch_;
exports.if_ = if_;
exports.sc = sc;
exports.guard = guard;
exports.assert = assert;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  assert: assert,
  guard: guard,
  sc: sc,
  if_: if_,
  switch_: switch_,
  loop: loop,
  canUseMap: canUseMap,
  canUseWeakMap: canUseWeakMap,
  canUseSet: canUseSet,
  canUseWeakSet: canUseWeakSet,
  Enum: Enum,
  recursive: recursive
});

var syntax = _objectSpread({}, _syntax["default"]);
/**
 * compare
 */


exports.syntax = syntax;
var or = _compare["default"].or,
    match = _compare["default"].match,
    matchValue = _compare["default"].matchValue,
    initialValue = _compare["default"].initialValue,
    indexOfMatch = _compare["default"].indexOfMatch,
    allMatch = _compare["default"].allMatch,
    someMatch = _compare["default"].someMatch,
    matchSome = _compare["default"].matchSome,
    matchSomeValue = _compare["default"].matchSomeValue,
    indexOfMatchSome = _compare["default"].indexOfMatchSome,
    allMatchSome = _compare["default"].allMatchSome,
    someMatchSome = _compare["default"].someMatchSome,
    matchAll = _compare["default"].matchAll,
    matchAllValue = _compare["default"].matchAllValue,
    indexOfMatchAll = _compare["default"].indexOfMatchAll,
    allMatchAll = _compare["default"].allMatchAll,
    someMatchAll = _compare["default"].someMatchAll,
    includes = _compare["default"].includes,
    includesSome = _compare["default"].includesSome,
    includesAll = _compare["default"].includesAll,
    equal = _compare["default"].equal,
    equalDeep = _compare["default"].equalDeep;
exports.equalDeep = equalDeep;
exports.equal = equal;
exports.includesAll = includesAll;
exports.includesSome = includesSome;
exports.includes = includes;
exports.someMatchAll = someMatchAll;
exports.allMatchAll = allMatchAll;
exports.indexOfMatchAll = indexOfMatchAll;
exports.matchAllValue = matchAllValue;
exports.matchAll = matchAll;
exports.someMatchSome = someMatchSome;
exports.allMatchSome = allMatchSome;
exports.indexOfMatchSome = indexOfMatchSome;
exports.matchSomeValue = matchSomeValue;
exports.matchSome = matchSome;
exports.someMatch = someMatch;
exports.allMatch = allMatch;
exports.indexOfMatch = indexOfMatch;
exports.initialValue = initialValue;
exports.matchValue = matchValue;
exports.match = match;
exports.or = or;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  indexOfMatch: indexOfMatch,
  allMatch: allMatch,
  someMatch: someMatch,
  matchSome: matchSome,
  matchSomeValue: matchSomeValue,
  indexOfMatchSome: indexOfMatchSome,
  allMatchSome: allMatchSome,
  someMatchSome: someMatchSome,
  matchAll: matchAll,
  matchAllValue: matchAllValue,
  indexOfMatchAll: indexOfMatchAll,
  allMatchAll: allMatchAll,
  someMatchAll: someMatchAll,
  includes: includes,
  includesSome: includesSome,
  includesAll: includesAll,
  equal: equal,
  equalDeep: equalDeep
});

var compare = _objectSpread({}, _compare["default"]);
/**
 * convert
 */


exports.compare = compare;
var numberToString = _convert["default"].numberToString,
    valueToString = _convert["default"].valueToString,
    stringToNumber = _convert["default"].stringToNumber,
    stringToNumberDefault = _convert["default"].stringToNumberDefault,
    stringToInteger = _convert["default"].stringToInteger,
    stringToIntegerDefault = _convert["default"].stringToIntegerDefault,
    valueToNumber = _convert["default"].valueToNumber,
    valueToNumberDefault = _convert["default"].valueToNumberDefault,
    valueToInteger = _convert["default"].valueToInteger,
    valueToIntegerDefault = _convert["default"].valueToIntegerDefault;
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
var numToString = _convertAlias["default"].numToString,
    valToString = _convertAlias["default"].valToString,
    strToNumber = _convertAlias["default"].strToNumber,
    strToNumberDef = _convertAlias["default"].strToNumberDef,
    strToInteger = _convertAlias["default"].strToInteger,
    strToIntegerDef = _convertAlias["default"].strToIntegerDef,
    valToNumber = _convertAlias["default"].valToNumber,
    valToNumberDef = _convertAlias["default"].valToNumberDef,
    valToInteger = _convertAlias["default"].valToInteger,
    valToIntegerDef = _convertAlias["default"].valToIntegerDef,
    numToStr = _convertAlias["default"].numToStr,
    valToStr = _convertAlias["default"].valToStr,
    valToNum = _convertAlias["default"].valToNum,
    valToNumDef = _convertAlias["default"].valToNumDef,
    valToInt = _convertAlias["default"].valToInt,
    valToIntDef = _convertAlias["default"].valToIntDef,
    strToNum = _convertAlias["default"].strToNum,
    strToNumDef = _convertAlias["default"].strToNumDef,
    strToInt = _convertAlias["default"].strToInt,
    strToIntDef = _convertAlias["default"].strToIntDef;
exports.strToIntDef = strToIntDef;
exports.strToInt = strToInt;
exports.strToNumDef = strToNumDef;
exports.strToNum = strToNum;
exports.valToIntDef = valToIntDef;
exports.valToInt = valToInt;
exports.valToNumDef = valToNumDef;
exports.valToNum = valToNum;
exports.valToStr = valToStr;
exports.numToStr = numToStr;
exports.valToIntegerDef = valToIntegerDef;
exports.valToInteger = valToInteger;
exports.valToNumberDef = valToNumberDef;
exports.valToNumber = valToNumber;
exports.strToIntegerDef = strToIntegerDef;
exports.strToInteger = strToInteger;
exports.strToNumberDef = strToNumberDef;
exports.strToNumber = strToNumber;
exports.valToString = valToString;
exports.numToString = numToString;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
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
});

var convert = _objectSpread(_objectSpread({}, _convert["default"]), _convertAlias["default"]);
/**
 * number
 */


exports.convert = convert;
var isMultiples = _number["default"].isMultiples,
    isEven = _number["default"].isEven,
    isOdd = _number["default"].isOdd,
    round = _number["default"].round,
    nearEqual = _number["default"].nearEqual,
    inRange = _number["default"].inRange,
    keepMinMax = _number["default"].keepMinMax,
    randomInt = _number["default"].randomInt,
    makeInRange = _number["default"].makeInRange;
exports.makeInRange = makeInRange;
exports.randomInt = randomInt;
exports.keepMinMax = keepMinMax;
exports.inRange = inRange;
exports.nearEqual = nearEqual;
exports.round = round;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isMultiples = isMultiples;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  isMultiples: isMultiples,
  isEven: isEven,
  isOdd: isOdd,
  round: round,
  nearEqual: nearEqual,
  inRange: inRange,
  keepMinMax: keepMinMax,
  randomInt: randomInt,
  makeInRange: makeInRange
});

var number = _objectSpread({}, _number["default"]);
/**
 * string
 */


exports.number = number;
var isLowerCase = _string["default"].isLowerCase,
    isUpperCase = _string["default"].isUpperCase,
    replaceAll = _string["default"].replaceAll,
    replaceAllRepeat = _string["default"].replaceAllRepeat,
    replaceAllArray = _string["default"].replaceAllArray,
    matchFormat = _string["default"].matchFormat,
    split = _string["default"].split,
    splitCommaItems = _string["default"].splitCommaItems,
    splitDotItems = _string["default"].splitDotItems;
exports.splitDotItems = splitDotItems;
exports.splitCommaItems = splitCommaItems;
exports.split = split;
exports.matchFormat = matchFormat;
exports.replaceAllArray = replaceAllArray;
exports.replaceAllRepeat = replaceAllRepeat;
exports.replaceAll = replaceAll;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  replaceAll: replaceAll,
  replaceAllRepeat: replaceAllRepeat,
  replaceAllArray: replaceAllArray,
  matchFormat: matchFormat,
  split: split,
  splitCommaItems: splitCommaItems,
  splitDotItems: splitDotItems
});

var string = _objectSpread({}, _string["default"]);
/**
 * object
 */


exports.string = string;
var copyProperty = _object["default"].copyProperty,
    getProperty = _object["default"].getProperty,
    setProperty = _object["default"].setProperty,
    inProperty = _object["default"].inProperty,
    fixProperty = _object["default"].fixProperty,
    propertyCount = _object["default"].propertyCount,
    propertyList = _object["default"].propertyList,
    objectEntries = _object["default"].objectEntries,
    objectFromEntries = _object["default"].objectFromEntries,
    objectKeys = _object["default"].objectKeys,
    objectValues = _object["default"].objectValues,
    hasOwn = _object["default"].hasOwn,
    hasPrototype = _object["default"].hasPrototype,
    has = _object["default"].has,
    objectToKeyValueArray = _object["default"].objectToKeyValueArray,
    objectFromKeyValueArray = _object["default"].objectFromKeyValueArray,
    objectToKeyArray = _object["default"].objectToKeyArray,
    objectToValueArray = _object["default"].objectToValueArray,
    copyProp = _object["default"].copyProp,
    getProp = _object["default"].getProp,
    setProp = _object["default"].setProp,
    inProp = _object["default"].inProp,
    fixProp = _object["default"].fixProp,
    propCount = _object["default"].propCount;
exports.propCount = propCount;
exports.fixProp = fixProp;
exports.inProp = inProp;
exports.setProp = setProp;
exports.getProp = getProp;
exports.copyProp = copyProp;
exports.objectToValueArray = objectToValueArray;
exports.objectToKeyArray = objectToKeyArray;
exports.objectFromKeyValueArray = objectFromKeyValueArray;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.has = has;
exports.hasPrototype = hasPrototype;
exports.hasOwn = hasOwn;
exports.objectValues = objectValues;
exports.objectKeys = objectKeys;
exports.objectFromEntries = objectFromEntries;
exports.objectEntries = objectEntries;
exports.propertyList = propertyList;
exports.propertyCount = propertyCount;
exports.fixProperty = fixProperty;
exports.inProperty = inProperty;
exports.setProperty = setProperty;
exports.getProperty = getProperty;
exports.copyProperty = copyProperty;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  copyProperty: copyProperty,
  getProperty: getProperty,
  setProperty: setProperty,
  inProperty: inProperty,
  fixProperty: fixProperty,
  propertyCount: propertyCount,
  propertyList: propertyList,
  objectEntries: objectEntries,
  objectFromEntries: objectFromEntries,
  objectKeys: objectKeys,
  objectValues: objectValues,
  hasOwn: hasOwn,
  hasPrototype: hasPrototype,
  has: has,
  // Another name
  objectToKeyValueArray: objectToKeyValueArray,
  objectFromKeyValueArray: objectFromKeyValueArray,
  objectToKeyArray: objectToKeyArray,
  objectToValueArray: objectToValueArray,
  // Short name
  copyProp: copyProp,
  getProp: getProp,
  setProp: setProp,
  inProp: inProp,
  fixProp: fixProp,
  propCount: propCount
});

var object = _objectSpread({}, _object["default"]);
/**
 * array
 */


exports.object = object;
var min = _array["default"].min,
    max = _array["default"].max,
    sum = _array["default"].sum,
    average = _array["default"].average,
    median = _array["default"].median;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  min: min,
  max: max,
  sum: sum,
  average: average,
  median: median
});

var array = _objectSpread({}, _array["default"]);

exports.array = array;
array.operation = _objectSpread({}, _array["default"].operation);
/**
 * date
 */

var Today = _date["default"].Today,
    dateToString = _date["default"].dateToString,
    dateToStringUTC = _date["default"].dateToStringUTC,
    stringToDate = _date["default"].stringToDate,
    stringToDateUTC = _date["default"].stringToDateUTC;
exports.stringToDateUTC = stringToDateUTC;
exports.stringToDate = stringToDate;
exports.dateToStringUTC = dateToStringUTC;
exports.dateToString = dateToString;
exports.Today = Today;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  Today: Today,
  dateToString: dateToString,
  dateToStringUTC: dateToStringUTC,
  stringToDate: stringToDate,
  stringToDateUTC: stringToDateUTC
});

var date = _objectSpread({}, _date["default"]);
/**
 * system
 */


exports.date = date;

var system = _objectSpread({}, _system["default"]);
/**
 * parts
 */


exports.system = system;

var parts = _objectSpread({
  VERSION: VERSION,
  common: common,
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
  date: date,
  system: system
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

/* eslint-disable no-plusplus */
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
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // Production steps of ECMA-262, Edition 5, 15.4.4.19
  // Reference: http://es5.github.io/#x15.4.4.19


  if (!Array.prototype.map) {
    Array.prototype.map = function (callback
    /* , thisArg*/
    ) {
      var T, A, k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      } // 1. Let O be the result of calling ToObject passing the |this|
      //    value as the argument.


      var O = Object(this); // 2. Let lenValue be the result of calling the Get internal
      //    method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).

      var len = O.length >>> 0; // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      } // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.


      if (arguments.length > 1) {
        T = arguments[1];
      } // 6. Let A be a new array created as if by the expression new Array(len)
      //    where Array is the standard built-in constructor with that name and
      //    len is the value of len.


      A = new Array(len); // 7. Let k be 0

      k = 0; // 8. Repeat, while k < len

      while (k < len) {
        var kValue, mappedValue; // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then

        if (k in O) {
          // i. Let kValue be the result of calling the Get internal
          //    method of O with argument Pk.
          kValue = O[k]; // ii. Let mappedValue be the result of calling the Call internal
          //     method of callback with T as the this value and argument
          //     list containing kValue, k, and O.

          mappedValue = callback.call(T, kValue, k, O); // iii. Call the DefineOwnProperty internal method of A with arguments
          // Pk, Property Descriptor
          // { Value: mappedValue,
          //   Writable: true,
          //   Enumerable: true,
          //   Configurable: true },
          // and false.
          // In browsers that support Object.defineProperty, use the following:
          // Object.defineProperty(A, k, {
          //   value: mappedValue,
          //   writable: true,
          //   enumerable: true,
          //   configurable: true
          // });
          // For best browser support, use the following:

          A[k] = mappedValue;
        } // d. Increase k by 1.


        k++;
      } // 9. return A


      return A;
    };
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


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
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString


  if (!Date.prototype.toISOString) {
    (function () {
      function pad(number) {
        if (number < 10) {
          return '0' + number;
        }

        return number;
      }

      Date.prototype.toISOString = function () {
        return this.getUTCFullYear() + '-' + pad(this.getUTCMonth() + 1) + '-' + pad(this.getUTCDate()) + 'T' + pad(this.getUTCHours()) + ':' + pad(this.getUTCMinutes()) + ':' + pad(this.getUTCSeconds()) + '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
      };
    })();
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
exports["default"] = exports.merge = exports.functionValue = exports.cloneDeep = exports.clone = exports._merge = exports._cloneDeep = exports._clone = void 0;

var _clone2 = _interopRequireDefault(__webpack_require__(4));

var _clone3 = _interopRequireDefault(__webpack_require__(118));

var _cloneDeep2 = _interopRequireDefault(__webpack_require__(28));

var _cloneDeep3 = _interopRequireDefault(__webpack_require__(119));

var _functionValue = _interopRequireDefault(__webpack_require__(56));

var _merge2 = _interopRequireDefault(__webpack_require__(120));

var _merge3 = _interopRequireDefault(__webpack_require__(122));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _clone2["default"]), _clone3["default"]), _cloneDeep2["default"]), _cloneDeep3["default"]), _functionValue["default"]), _merge2["default"]), _merge3["default"]);

var _clone = commonJs._clone,
    _cloneDeep = commonJs._cloneDeep,
    _merge = commonJs._merge,
    clone = commonJs.clone,
    cloneDeep = commonJs.cloneDeep,
    functionValue = commonJs.functionValue,
    merge = commonJs.merge;
exports.merge = merge;
exports.functionValue = functionValue;
exports.cloneDeep = cloneDeep;
exports.clone = clone;
exports._merge = _merge;
exports._cloneDeep = _cloneDeep;
exports._clone = _clone;
var _default = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  _merge: _merge,
  clone: clone,
  cloneDeep: cloneDeep,
  functionValue: functionValue,
  merge: merge
};
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._clone = void 0;

var _type = __webpack_require__(5);

var _hasOwn2 = __webpack_require__(13);

var _clone2 = __webpack_require__(26);

var _cloneDeep2 = __webpack_require__(28);

var _cloneFunc = __webpack_require__(30);

/**
 * clone
 */
var _clone = function _clone(source, cloneFuncArray) {
  if ((0, _type.isUndefined)(cloneFuncArray)) {
    return (0, _clone2.__clone)(source, false);
  }

  var _clone_ = function _clone_(value) {
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

  return _clone_(source);
};

exports._clone = _clone;
_clone.func = _cloneFunc.__cloneFunc;
var _default = {
  _clone: _clone
};
exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isExceptionAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = exports.isNotSymbol = exports.isSymbol = exports.isNotException = exports.isException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = exports.typeName = void 0;
exports["default"] = exports.isReferenceType = exports.isPrimitiveType = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotExceptionAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = void 0;

var _typeName = _interopRequireDefault(__webpack_require__(6));

var _isType = _interopRequireDefault(__webpack_require__(11));

var _isException = _interopRequireDefault(__webpack_require__(14));

var _isSymbol = _interopRequireDefault(__webpack_require__(16));

var _isMap = _interopRequireDefault(__webpack_require__(17));

var _isSet = _interopRequireDefault(__webpack_require__(20));

var _isTypeAll = _interopRequireDefault(__webpack_require__(22));

var _isTypeArray = _interopRequireDefault(__webpack_require__(23));

var _isPrimitiveType = _interopRequireDefault(__webpack_require__(24));

var _isReferenceType = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var typeName = _typeName["default"].typeName;
exports.typeName = typeName;
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
var isPrimitiveType = _isPrimitiveType["default"].isPrimitiveType;
exports.isPrimitiveType = isPrimitiveType;
var isReferenceType = _isReferenceType["default"].isReferenceType;
exports.isReferenceType = isReferenceType;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  objectToString: objectToString,
  typeName: typeName,
  isPrimitiveType: isPrimitiveType,
  isReferenceType: isReferenceType,
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.typeName = void 0;

var _platform = __webpack_require__(7);

var _includes = __webpack_require__(9);

var _replaceAll2 = __webpack_require__(10);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _objectToStr = function _objectToStr(value) {
  return (0, _replaceAll2._replaceAll)((0, _replaceAll2._replaceAll)(Object.prototype.toString.call(value), '[object ', ''), ']', '');
};

var _booleanType = function _booleanType(typeofValue, objectToStrValue) {
  if (objectToStrValue === 'Boolean') {
    if (typeofValue === 'boolean') {
      return 'Boolean';
    } else if (typeofValue === 'object') {
      return 'BooleanObject';
    }

    throw new Error('typeName');
  }
};

var _numberType = function _numberType(typeofValue, objectToStrValue, value) {
  if (objectToStrValue === 'Number') {
    if (typeofValue === 'number') {
      if (value !== value) {
        return 'NaN';
      }

      if (value === Infinity || value == -Infinity) {
        return 'Infinity';
      }

      return 'Number';
    } else if (typeofValue === 'object') {
      return 'NumberObject';
    }

    throw new Error('typeName');
  }
};

var _stringType = function _stringType(typeofValue, objectToStrValue) {
  if (objectToStrValue === 'String') {
    if (typeofValue === 'string') {
      return 'String';
    } else if (typeofValue === 'object') {
      return 'StringObject';
    }

    throw new Error('typeName');
  }
};

var _typeName;

switch ((0, _platform.platformName)()) {
  case 'WindowsScriptHost':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (value === null) {
        return 'Null';
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        return 'Object';
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  case 'GoogleAppsScriptRhino':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (value === null) {
        return 'Null';
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        if ('constructor' in value) {
          return 'Object';
        } else {
          return 'ObjectFromNull';
        }
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math', 'JSON'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  case 'InternetExplorer':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (objectToStrValue === 'Null') {
        return objectToStrValue;
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        if ('constructor' in value) {
          if (value.constructor === Map) {
            return 'Map';
          }

          if (value.constructor === WeakMap) {
            return 'WeakMap';
          }

          if (value.constructor === Set) {
            return 'Set';
          }

          return 'Object';
        } else {
          return 'ObjectFromNull';
        }
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math', 'JSON', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'Symbol', 'ArrayBuffer', 'Intl', 'Module'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  case 'Deno':
  case 'Node':
  case 'GoogleAppsScriptV8':
  case 'Jest':
  case 'Chrome':
  case 'Edge':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (objectToStrValue === 'Null') {
        return objectToStrValue;
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        if ('constructor' in value) {
          return 'Object';
        } else {
          return 'ObjectFromNull';
        }
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math', 'JSON', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'Map', 'WeakMap', 'Set', 'WeakSet', 'Symbol', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'WebAssembly', 'Intl', 'Module'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  default:
    throw new Error("typeName:".concat((0, _platform.platformName)()));
}

var typeName = _typeName;
exports.typeName = typeName;
var _default = {
  typeName: typeName
};
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isOpera = exports.isSafari = exports.isInternetExplorer = exports.isEdge = exports.isFirefox = exports.isChrome = exports.isDeno = exports.isNode = exports.isJest = exports.isGasRhino = exports.isGasV8 = exports.isGoogleAppsScript = exports.isWindowsScriptHost = exports.isWebBrowser = exports.platformName = void 0;

var _includes = __webpack_require__(9);

var _platformName;

var platformName = function platformName() {
  if (typeof _platformName !== 'undefined') {
    return _platformName;
  }

  if (typeof WScript !== 'undefined') {
    _platformName = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    _platformName = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    if (typeof Object.toSource === 'undefined') {
      _platformName = 'GoogleAppsScriptV8';
    } else {
      _platformName = 'GoogleAppsScriptRhino';
    }
  } else if (typeof window === 'undefined') {
    _platformName = 'Node';
  } else if (typeof jest !== 'undefined') {
    _platformName = 'Jest';
  } else if (typeof process !== 'undefined') {
    // WebBrowser
    var ua = window.navigator.userAgent.toLowerCase();

    if ((0, _includes.__includes)(ua, 'msie') || (0, _includes.__includes)(ua, 'trident')) {
      _platformName = 'InternetExplorer';
    } else if ((0, _includes.__includes)(ua, 'edg')) {
      _platformName = 'Edge';
    } else if ((0, _includes.__includes)(ua, 'opr')) {
      _platformName = 'Opera';
    } else if ((0, _includes.__includes)(ua, 'chrome')) {
      _platformName = 'Chrome';
    } else if ((0, _includes.__includes)(ua, 'safari')) {
      _platformName = 'Safari';
    } else if ((0, _includes.__includes)(ua, 'firefox')) {
      _platformName = 'Firefox';
    } else {
      _platformName = 'OtherBrowser';
    }
  } else {
    _platformName = 'Unknown';
  }

  ;
  return _platformName;
};

exports.platformName = platformName;

platformName.reset = function () {
  _platformName = undefined;
};

var isWebBrowser = function isWebBrowser() {
  return (0, _includes.__includes)(['InternetExplorer', 'Edge', 'Opera', 'Chrome', 'Safari', 'Firefox', 'OtherBrowser'], platformName());
};

exports.isWebBrowser = isWebBrowser;

var isWindowsScriptHost = function isWindowsScriptHost() {
  return platformName() === 'WindowsScriptHost';
};

exports.isWindowsScriptHost = isWindowsScriptHost;

var isGoogleAppsScript = function isGoogleAppsScript() {
  return (0, _includes.__includes)(['GoogleAppsScriptV8', 'GoogleAppsScriptRhino'], platformName());
};

exports.isGoogleAppsScript = isGoogleAppsScript;

var isGasV8 = function isGasV8() {
  return platformName() === 'GoogleAppsScriptV8';
};

exports.isGasV8 = isGasV8;

var isGasRhino = function isGasRhino() {
  return platformName() === 'GoogleAppsScriptRhino';
};

exports.isGasRhino = isGasRhino;

var isJest = function isJest() {
  return platformName() === 'Jest';
};

exports.isJest = isJest;

var isNode = function isNode() {
  return platformName() === 'Node';
};

exports.isNode = isNode;

var isDeno = function isDeno() {
  return platformName() === 'Deno';
};

exports.isDeno = isDeno;

var isChrome = function isChrome() {
  return platformName() === 'Chrome';
};

exports.isChrome = isChrome;

var isFirefox = function isFirefox() {
  return platformName() === 'Firefox';
};

exports.isFirefox = isFirefox;

var isEdge = function isEdge() {
  return platformName() === 'Edge';
};

exports.isEdge = isEdge;

var isInternetExplorer = function isInternetExplorer() {
  return platformName() === 'InternetExplorer';
};

exports.isInternetExplorer = isInternetExplorer;

var isSafari = function isSafari() {
  return platformName() === 'Safari';
};

exports.isSafari = isSafari;

var isOpera = function isOpera() {
  return platformName() === 'Opera';
};

exports.isOpera = isOpera;
var _default = {
  platformName: platformName,
  isWebBrowser: isWebBrowser,
  isWindowsScriptHost: isWindowsScriptHost,
  isGoogleAppsScript: isGoogleAppsScript,
  isNode: isNode,
  isDeno: isDeno,
  isJest: isJest,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  isGasV8: isGasV8,
  isGasRhino: isGasRhino,
  buildMode: '',
  testStartFileName: ''
};
exports["default"] = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._replaceAll = void 0;

/**
 * replaceAll
 */
var _replaceAll = function _replaceAll(str, before, after) {
  return str.split(before).join(after);
};

exports._replaceAll = _replaceAll;
var _default = {
  _replaceAll: _replaceAll
};
exports["default"] = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isError = exports.isRegExp = exports.isDate = exports.isEmptyArray = exports.isArraySeries = exports.isArray = exports.isEmptyObject = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isStringObject = exports.isString = exports.isInteger = exports.isNumberObject = exports.isNumber = exports.isBooleanObject = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = void 0;

var _propertyCount2 = __webpack_require__(12);

var _platform = __webpack_require__(7);

var _includes = __webpack_require__(9);

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

var _isObject;

if ((0, _platform.isWindowsScriptHost)() || (0, _platform.isGasRhino)()) {
  _isObject = function _isObject(value) {
    if (objectToString(value) !== '[object Object]') {
      return false;
    }

    if (isNull(value)) {
      return false;
    }

    if (isUndefined(value)) {
      return false;
    }

    return true;
  };
} else if ((0, _platform.isInternetExplorer)()) {
  _isObject = function _isObject(value) {
    if (objectToString(value) !== '[object Object]') {
      return false;
    }

    if ((0, _includes.__includes)([Map, WeakMap, Set], value.constructor)) {
      return false;
    }

    return true;
  };
} else {
  _isObject = function _isObject(value) {
    if (objectToString(value) !== '[object Object]') {
      return false;
    }

    return true;
  };
}

var isObject = _isObject;
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

var _isArray;

if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function _isArray(value) {
    return objectToString(value) === '[object Array]';
  };
}

var isArray = _isArray; // Int8Array Uint16Array Float32Array Float64Array etc

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._propertyCount = void 0;

var _hasOwn2 = __webpack_require__(13);

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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotException = exports.isException = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isObjectParameter = exports._isObjectParameter = void 0;

var _isType = __webpack_require__(11);

var _replaceAll2 = __webpack_require__(10);

var _propertyCount2 = __webpack_require__(12);

var _hasOwn2 = __webpack_require__(13);

var _includes = __webpack_require__(9);

/**
 * isObjectParameter
 */
var _isObjectParameter = function _isObjectParameter(object, props) {
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!(0, _isType.isObject)(object)) {
    return false;
  }

  props = (0, _replaceAll2._replaceAll)(props, ' ', '').split(',');

  if (props[props.length - 1] === '') {
    props.splice(props.length - 1, 1);
  } // props = _splitCommaItems(props); // Circular reference Error


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

exports._isObjectParameter = _isObjectParameter;

var isObjectParameter = function isObjectParameter(object, props) {
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!(0, _isType.isString)(props)) {
    throw new TypeError('isObjectParameter args(props) is not string');
  }

  if (!(0, _isType.isString)(optionalProps)) {
    throw new TypeError('isObjectParameter args(optionalProps) is not string');
  }

  if (!(0, _isType.isInteger)(optionalMinCount)) {
    throw new TypeError('isObjectParameter args(optionalMinCount) is not integer');
  }

  return _isObjectParameter(object, props, optionalProps, optionalMinCount);
};

exports.isObjectParameter = isObjectParameter;
var _default = {
  _isObjectParameter: _isObjectParameter,
  isObjectParameter: isObjectParameter
};
exports["default"] = _default;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = void 0;

var _isType = __webpack_require__(11);

var _canUseMap = __webpack_require__(18);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseWeakMap = exports.canUseMap = void 0;

var _type = __webpack_require__(5);

var _global2 = __webpack_require__(19);

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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = void 0;

var _isType = __webpack_require__(11);

var _canUseSet = __webpack_require__(21);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseWeakSet = exports.canUseSet = void 0;

var _type = __webpack_require__(5);

var _global2 = __webpack_require__(19);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotExceptionAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isExceptionAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports._isTypeAllCheckFunc = exports._isTypeArray = void 0;

var _isType = __webpack_require__(11);

var _isException = __webpack_require__(14);

var _isSymbol = __webpack_require__(16);

var _isMap = __webpack_require__(17);

var _isSet = __webpack_require__(20);

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
};
exports["default"] = _default;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports._isTypeArrayCheckFunc = void 0;

var _isType = __webpack_require__(11);

var _isException = __webpack_require__(14);

var _isSymbol = __webpack_require__(16);

var _isMap = __webpack_require__(17);

var _isSet = __webpack_require__(20);

var _isTypeAll = __webpack_require__(22);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isPrimitiveType = void 0;

var _includes = __webpack_require__(9);

var _typeName = __webpack_require__(6);

/**
 * isPrimitiveType
 */
var isPrimitiveType = function isPrimitiveType(value) {
  var name = (0, _typeName.typeName)(value);

  if ((0, _includes.__includes)(['Undefined', 'Null', 'Boolean', 'Number', 'NaN', 'Infinity', 'String', 'Symbol'], name)) {
    return true;
  }

  return false;
};

exports.isPrimitiveType = isPrimitiveType;
var _default = {
  isPrimitiveType: isPrimitiveType
};
exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isReferenceType = void 0;

var _isPrimitiveType = __webpack_require__(24);

/**
 * isPrimitiveType
 */
var isReferenceType = function isReferenceType(value) {
  return !(0, _isPrimitiveType.isPrimitiveType)(value);
};

exports.isReferenceType = isReferenceType;
var _default = {
  isReferenceType: isReferenceType
};
exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__clone = void 0;

var _isType = __webpack_require__(11);

var _returnFirstArgFunc = __webpack_require__(27);

/**
 * clone
 */
var __clone = function __clone(source) {
  var __clone_ = function __clone_(value) {
    if ((0, _isType.isObject)(value)) {
      var cloneValue = {};

      for (var key in value) {
        cloneValue[key] = value[key];
      }

      return cloneValue;
    } else if ((0, _isType.isArray)(value)) {
      var _cloneValue = Array(value.length);

      for (var i = 0, l = value.length; i < l; i += 1) {
        _cloneValue[i] = value[i];
      }

      return _cloneValue;
    }

    return value;
  };

  return __clone_(source);
};

exports.__clone = __clone;
var _default = {
  __clone: __clone
};
exports["default"] = _default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__returnFirstArgFunc = void 0;

/**
 * returnFirstArgFunc
 */
var __returnFirstArgFunc = function __returnFirstArgFunc(v) {
  return v;
};

exports.__returnFirstArgFunc = __returnFirstArgFunc;
var _default = {
  __returnFirstArgFunc: __returnFirstArgFunc
};
exports["default"] = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._cloneDeep = void 0;

var _type = __webpack_require__(5);

var _cloneDeep2 = __webpack_require__(29);

var _cloneFunc = __webpack_require__(30);

/**
 * cloneDeep
 */
var _cloneDeep = function _cloneDeep(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _cloneFunc.__cloneFunc.defaultArray;

  if ((0, _type.isUndefined)(cloneFuncArray)) {
    return (0, _cloneDeep2.__cloneDeep)(source);
  }

  var CircularReferenceBuffer = {
    source: [],
    clone: []
  };

  var _cloneDeep_ = function _cloneDeep_(value) {
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
      }, _cloneDeep_);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return _cloneDeep_(source);
};

exports._cloneDeep = _cloneDeep;
_cloneDeep.func = _cloneFunc.__cloneFunc;
var _default = {
  _cloneDeep: _cloneDeep
};
exports["default"] = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__cloneDeep = void 0;

var _isType = __webpack_require__(11);

/**
 * cloneDeep
 */
var __cloneDeep = function __cloneDeep(source) {
  var __cloneDeep_ = function __cloneDeep_(value) {
    if ((0, _isType.isObject)(value)) {
      var cloneValue = {};

      for (var key in value) {
        cloneValue[key] = __cloneDeep_(value[key]);
      }

      return cloneValue;
    } else if ((0, _isType.isArray)(value)) {
      var _cloneValue = Array(value.length);

      for (var i = 0, l = value.length; i < l; i += 1) {
        _cloneValue[i] = __cloneDeep_(value[i]);
      }

      return _cloneValue;
    }

    return value;
  };

  return __cloneDeep_(source);
};

exports.__cloneDeep = __cloneDeep;
var _default = {
  __cloneDeep: __cloneDeep
};
exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__cloneFunc = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(31);

var _hasOwn2 = __webpack_require__(13);

var _clone = __webpack_require__(26);

var _cloneDeep2 = __webpack_require__(28);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * clone.func
 */
var __cloneFunc = {}; // function is no clone

exports.__cloneFunc = __cloneFunc;

__cloneFunc.ignoreFunction = function (source) {
  if (!(0, _type.isFunction)(source)) {
    return undefined;
  }

  return source;
}; // support
//  user object and user arraySeries
//  Just good usability


__cloneFunc.object = function (source) {
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

__cloneFunc.arraySeries = function (source) {
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


__cloneFunc.objectLike = function (source) {
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

__cloneFunc.date = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isDate)(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

__cloneFunc.regExp = function (source) {
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


__cloneFunc.map = function (source) {
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

__cloneFunc.ignoreWeakMap = function (source) {
  if (!(0, _type.isWeakMap)(source)) {
    return undefined;
  }

  return source;
}; // cloneSet
//  element not recursive call
//  same map key


__cloneFunc.set = function (source) {
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

__cloneFunc.ignoreWeakSet = function (source) {
  if (!(0, _type.isWeakSet)(source)) {
    return undefined;
  }

  return source;
};

__cloneFunc.DefaultArray = function () {
  return [__cloneFunc.date, __cloneFunc.regExp, __cloneFunc.ignoreFunction, __cloneFunc.map, __cloneFunc.ignoreWeakMap, __cloneFunc.set, __cloneFunc.ignoreWeakSet, __cloneFunc.arraySeries, __cloneFunc.object];
};

var _default = {
  __cloneFunc: __cloneFunc
};
exports["default"] = _default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propCount = exports.fixProp = exports.inProp = exports.setProp = exports.getProp = exports.copyProp = exports.objectToValueArray = exports.objectToKeyArray = exports.objectFromKeyValueArray = exports.objectToKeyValueArray = exports.has = exports.hasPrototype = exports.hasOwn = exports.objectValues = exports.objectKeys = exports.objectFromEntries = exports.objectEntries = exports.propertyList = exports.propertyCount = exports.fixProperty = exports.inProperty = exports.setProperty = exports.getProperty = exports.copyProperty = exports.isObjectParameter = exports._has = exports._hasPrototype = exports._hasOwn = exports._objectValues = exports._objectKeys = exports._objectFromEntries = exports._objectEntries = exports._propertyList = exports._propertyCount = exports._fixProperty = exports._inProperty = exports._setProperty = exports._getProperty = exports._copyProperty = exports._isObjectParameter = void 0;

var _isObjectParameter2 = _interopRequireDefault(__webpack_require__(15));

var _inProperty2 = _interopRequireDefault(__webpack_require__(32));

var _fixProperty2 = _interopRequireDefault(__webpack_require__(105));

var _objectEntries2 = _interopRequireDefault(__webpack_require__(61));

var _objectEntries3 = _interopRequireDefault(__webpack_require__(106));

var _objectFromEntries2 = _interopRequireDefault(__webpack_require__(107));

var _objectFromEntries3 = _interopRequireDefault(__webpack_require__(108));

var _objectKeys2 = _interopRequireDefault(__webpack_require__(109));

var _objectValues2 = _interopRequireDefault(__webpack_require__(103));

var _getProperty2 = _interopRequireDefault(__webpack_require__(33));

var _getProperty3 = _interopRequireDefault(__webpack_require__(110));

var _setProperty2 = _interopRequireDefault(__webpack_require__(111));

var _setProperty3 = _interopRequireDefault(__webpack_require__(112));

var _copyProperty2 = _interopRequireDefault(__webpack_require__(113));

var _copyProperty3 = _interopRequireDefault(__webpack_require__(114));

var _hasOwn2 = _interopRequireDefault(__webpack_require__(13));

var _hasOwn3 = _interopRequireDefault(__webpack_require__(115));

var _has2 = _interopRequireDefault(__webpack_require__(34));

var _propertyCount2 = _interopRequireDefault(__webpack_require__(12));

var _propertyCount3 = _interopRequireDefault(__webpack_require__(116));

var _propertyList2 = _interopRequireDefault(__webpack_require__(117));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var objectJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _isObjectParameter2["default"]), _inProperty2["default"]), _fixProperty2["default"]), _objectEntries2["default"]), _objectEntries3["default"]), _objectFromEntries2["default"]), _objectFromEntries3["default"]), _objectKeys2["default"]), _objectValues2["default"]), _getProperty2["default"]), _getProperty3["default"]), _setProperty2["default"]), _setProperty3["default"]), _copyProperty2["default"]), _copyProperty3["default"]), _hasOwn2["default"]), _hasOwn3["default"]), _has2["default"]), _propertyCount2["default"]), _propertyCount3["default"]), _propertyList2["default"]);

var _isObjectParameter = objectJs._isObjectParameter,
    _copyProperty = objectJs._copyProperty,
    _getProperty = objectJs._getProperty,
    _setProperty = objectJs._setProperty,
    _inProperty = objectJs._inProperty,
    _fixProperty = objectJs._fixProperty,
    _propertyCount = objectJs._propertyCount,
    _propertyList = objectJs._propertyList,
    _objectEntries = objectJs._objectEntries,
    _objectFromEntries = objectJs._objectFromEntries,
    _objectKeys = objectJs._objectKeys,
    _objectValues = objectJs._objectValues,
    _hasOwn = objectJs._hasOwn,
    _hasPrototype = objectJs._hasPrototype,
    _has = objectJs._has,
    isObjectParameter = objectJs.isObjectParameter,
    copyProperty = objectJs.copyProperty,
    getProperty = objectJs.getProperty,
    setProperty = objectJs.setProperty,
    inProperty = objectJs.inProperty,
    fixProperty = objectJs.fixProperty,
    propertyCount = objectJs.propertyCount,
    propertyList = objectJs.propertyList,
    objectEntries = objectJs.objectEntries,
    objectFromEntries = objectJs.objectFromEntries,
    objectKeys = objectJs.objectKeys,
    objectValues = objectJs.objectValues,
    hasOwn = objectJs.hasOwn,
    hasPrototype = objectJs.hasPrototype,
    has = objectJs.has,
    objectToKeyValueArray = objectJs.objectToKeyValueArray,
    objectFromKeyValueArray = objectJs.objectFromKeyValueArray,
    objectToKeyArray = objectJs.objectToKeyArray,
    objectToValueArray = objectJs.objectToValueArray,
    copyProp = objectJs.copyProp,
    getProp = objectJs.getProp,
    setProp = objectJs.setProp,
    inProp = objectJs.inProp,
    fixProp = objectJs.fixProp,
    propCount = objectJs.propCount;
exports.propCount = propCount;
exports.fixProp = fixProp;
exports.inProp = inProp;
exports.setProp = setProp;
exports.getProp = getProp;
exports.copyProp = copyProp;
exports.objectToValueArray = objectToValueArray;
exports.objectToKeyArray = objectToKeyArray;
exports.objectFromKeyValueArray = objectFromKeyValueArray;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.has = has;
exports.hasPrototype = hasPrototype;
exports.hasOwn = hasOwn;
exports.objectValues = objectValues;
exports.objectKeys = objectKeys;
exports.objectFromEntries = objectFromEntries;
exports.objectEntries = objectEntries;
exports.propertyList = propertyList;
exports.propertyCount = propertyCount;
exports.fixProperty = fixProperty;
exports.inProperty = inProperty;
exports.setProperty = setProperty;
exports.getProperty = getProperty;
exports.copyProperty = copyProperty;
exports.isObjectParameter = isObjectParameter;
exports._has = _has;
exports._hasPrototype = _hasPrototype;
exports._hasOwn = _hasOwn;
exports._objectValues = _objectValues;
exports._objectKeys = _objectKeys;
exports._objectFromEntries = _objectFromEntries;
exports._objectEntries = _objectEntries;
exports._propertyList = _propertyList;
exports._propertyCount = _propertyCount;
exports._fixProperty = _fixProperty;
exports._inProperty = _inProperty;
exports._setProperty = _setProperty;
exports._getProperty = _getProperty;
exports._copyProperty = _copyProperty;
exports._isObjectParameter = _isObjectParameter;
var _default = {
  _isObjectParameter: _isObjectParameter,
  _copyProperty: _copyProperty,
  _getProperty: _getProperty,
  _setProperty: _setProperty,
  _inProperty: _inProperty,
  _fixProperty: _fixProperty,
  _propertyCount: _propertyCount,
  _propertyList: _propertyList,
  _objectEntries: _objectEntries,
  _objectFromEntries: _objectFromEntries,
  _objectKeys: _objectKeys,
  _objectValues: _objectValues,
  _hasOwn: _hasOwn,
  _hasPrototype: _hasPrototype,
  _has: _has,
  isObjectParameter: isObjectParameter,
  copyProperty: copyProperty,
  getProperty: getProperty,
  setProperty: setProperty,
  inProperty: inProperty,
  fixProperty: fixProperty,
  propertyCount: propertyCount,
  propertyList: propertyList,
  objectEntries: objectEntries,
  objectFromEntries: objectFromEntries,
  objectKeys: objectKeys,
  objectValues: objectValues,
  hasOwn: hasOwn,
  hasPrototype: hasPrototype,
  has: has,
  // Another name
  objectToKeyValueArray: objectToKeyValueArray,
  objectFromKeyValueArray: objectFromKeyValueArray,
  objectToKeyArray: objectToKeyArray,
  objectToValueArray: objectToValueArray,
  // Short name
  copyProp: copyProp,
  getProp: getProp,
  setProp: setProp,
  inProp: inProp,
  fixProp: fixProp,
  propCount: propCount
};
exports["default"] = _default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.inProp = exports.inProperty = exports._inProperty = void 0;

var _type = __webpack_require__(5);

var _replaceAll2 = __webpack_require__(10);

var _isObjectParameter = __webpack_require__(15);

var _getProperty2 = __webpack_require__(33);

var _splitCommaItems2 = __webpack_require__(104);

var _includes = __webpack_require__(9);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._getProperty = void 0;

var _type = __webpack_require__(5);

var _has2 = __webpack_require__(34);

var _splitDotItems2 = __webpack_require__(35);

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
var _default = {
  _getProperty: _getProperty
};
exports["default"] = _default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hasPrototype = exports._hasPrototype = exports.has = exports._has = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _hasOwn3 = __webpack_require__(13);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.splitDotItems = exports._splitDotItems = void 0;

var _type = __webpack_require__(5);

var _split2 = __webpack_require__(36);

var _includes = __webpack_require__(9);

var _splitDotItems = function _splitDotItems(str) {
  if (str === '') {
    return [];
  }

  var result = (0, _split2._split)(str, '.', _split2._split.excludeEmptyStr.first, _split2._split.executeConvert.none);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._split = void 0;

var _type = __webpack_require__(5);

var _Enum2 = __webpack_require__(37);

var _loop = __webpack_require__(38);

var _array_operation = __webpack_require__(41);

var _array_common = __webpack_require__(50);

var _string_common = __webpack_require__(73);

var _replaceAll2 = __webpack_require__(10);

var _replaceAllArray2 = __webpack_require__(100);

var _or2 = __webpack_require__(102);

var _objectValues2 = __webpack_require__(103);

/**
 * split
 */
var _split = function _split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _split.excludeEmptyStr.none;
  var executeConvert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _split.executeConvert.none;
  var result = str.split(separator);

  switch (executeConvert) {
    case _split.executeConvert.none:
      break;

    case _split.executeConvert.trimSpace:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _string_common._trimBothEnds)(e, [' ']);
      });
      break;

    case _split.executeConvert.trimSpaceCrlf:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _string_common._trimBothEnds)(e);
      });
      break;

    case _split.executeConvert.excludeSpace:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _replaceAll2._replaceAll)(e, ' ', '');
      });
      break;

    case _split.executeConvert.excludeSpaceCrlf:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _replaceAllArray2._replaceAllArray)(e, [[' ', ''], ['\n', ''], ['\r', '']]);
      });
      break;

    default:
      throw new TypeError('_split args(executeConvert) is not ["none"|"trim"|"all"]');
  }

  switch (excludeEmptyStr) {
    case _split.excludeEmptyStr.none:
      break;

    case _split.excludeEmptyStr.first:
      if (1 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }
      }

      break;

    case _split.excludeEmptyStr.last:
      if (2 <= result.length) {
        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case _split.excludeEmptyStr.bothEnds:
      if (2 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }

        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case _split.excludeEmptyStr.all:
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
_split.excludeEmptyStr = (0, _Enum2._Enum)(['none', 'first', 'last', 'bothEnds', 'all']);
_split.executeConvert = (0, _Enum2._Enum)(['none', 'trimSpace', 'trimSpaceCrlf', 'excludeSpace', 'excludeSpaceCrlf']);
var _default = {
  _split: _split
};
exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Enum = void 0;

/**
 * Enum
 */
var _Enum = function _Enum(values) {
  var useIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var self = {};

  if (useIndex === false) {
    for (var i = 0, l = values.length; i < l; i += 1) {
      self[values[i]] = values[i];
    }
  } else {
    for (var _i = 0, _l = values.length; _i < _l; _i += 1) {
      self[values[_i]] = _i;
    }
  }

  return self;
};

exports._Enum = _Enum;
var _default = {
  _Enum: _Enum
};
exports["default"] = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__loop = void 0;

var _type = __webpack_require__(5);

var _IntegerArray2 = __webpack_require__(39);

/**
 * loop
 */
var __loop = function __loop(loopArray) {
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

      if ((0, _type.isObject)(result) && result["break"] === true) {
        return result;
      }
    }

    return {};
  };
};

exports.__loop = __loop;
var _default = {
  __loop: __loop
};
exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._IntegerArray = void 0;

var _type = __webpack_require__(5);

var _NumberArray2 = __webpack_require__(40);

/**
 * IntegerArray
 */
var _IntegerArray = function _IntegerArray(start, end, increment) {
  return (0, _NumberArray2._NumberArray)(start, end, increment);
};

exports._IntegerArray = _IntegerArray;
var _default = {
  _IntegerArray: _IntegerArray
};
exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._NumberArray = void 0;

var _type = __webpack_require__(5);

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
var _default = {
  _NumberArray: _NumberArray
};
exports["default"] = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filter = exports._filter = exports.remainLast = exports._remainLast = exports.remainFirst = exports._remainFirst = exports.pushLast = exports._pushLast = exports.pushFirst = exports._pushFirst = exports.trimBothEnds = exports._trimBothEnds = exports.trimLast = exports._trimLast = exports.trimFirst = exports._trimFirst = exports.excludeBothEnds = exports._excludeBothEnds = exports.excludeLast = exports._excludeLast = exports.excludeFirst = exports._excludeFirst = exports.includeBothEnds = exports._includeBothEnds = exports.includeLast = exports._includeLast = exports.includeFirst = exports._includeFirst = exports.deleteLast = exports._deleteLast = exports.deleteFirst = exports._deleteFirst = exports.deleteLength = exports._deleteLength = exports.deleteIndex = exports._deleteIndex = exports.add = exports._add = exports.insert = exports._insert = void 0;

var _type = __webpack_require__(5);

var _number = __webpack_require__(42);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _min2 = __webpack_require__(68);

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
  array.splice(index, length);
  return array;
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

  length = (0, _min2._min)([length, array.length - index]);

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
    deleteLast(array, (0, _min2._min)([valueLastArray.length, array.length]));
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
 * array.operation.pushFirst
 */


exports.trimBothEnds = trimBothEnds;

var _pushFirst = function _pushFirst(array, value) {
  array.unshift(value);
  return array.length; // WSH array.unshift is return undefined
};

exports._pushFirst = _pushFirst;

var pushFirst = function pushFirst(array, value) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, value')) {
    var _array20 = array;
    array = _array20.array;
    value = _array20.value;
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
    var _array21 = array;
    array = _array21.array;
    value = _array21.value;
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
    var _array22 = array;
    array = _array22.array;
    length = _array22.length;
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
    var _array23 = array;
    array = _array23.array;
    length = _array23.length;
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
    var _array24 = array;
    array = _array24.array;
    func = _array24.func;
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
  pushFirst: pushFirst,
  pushLast: pushLast,
  remainFirst: remainFirst,
  remainLast: remainLast,
  filter: filter
};
exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.makeInRange = exports.roundDown = exports.roundUp = exports.round = exports.randomInt = exports.keepMinMax = exports.inRange = exports.nearEqual = exports.isOdd = exports.isEven = exports.isMultiples = exports._roundDown = exports._roundUp = exports._round = exports._randomInt = exports._keepMinMax = exports._inRange = exports._nearEqual = exports._isMultiples = void 0;

var _number_common = _interopRequireDefault(__webpack_require__(43));

var _round2 = _interopRequireDefault(__webpack_require__(44));

var _round3 = _interopRequireDefault(__webpack_require__(45));

var _roundUp2 = _interopRequireDefault(__webpack_require__(46));

var _roundUp3 = _interopRequireDefault(__webpack_require__(47));

var _roundDown2 = _interopRequireDefault(__webpack_require__(48));

var _roundDown3 = _interopRequireDefault(__webpack_require__(49));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var numberJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _number_common["default"]), _round2["default"]), _round3["default"]), _roundUp2["default"]), _roundUp3["default"]), _roundDown2["default"]), _roundDown3["default"]);

var _isMultiples = numberJs._isMultiples,
    _nearEqual = numberJs._nearEqual,
    _inRange = numberJs._inRange,
    _keepMinMax = numberJs._keepMinMax,
    _randomInt = numberJs._randomInt,
    _round = numberJs._round,
    _roundUp = numberJs._roundUp,
    _roundDown = numberJs._roundDown;
exports._roundDown = _roundDown;
exports._roundUp = _roundUp;
exports._round = _round;
exports._randomInt = _randomInt;
exports._keepMinMax = _keepMinMax;
exports._inRange = _inRange;
exports._nearEqual = _nearEqual;
exports._isMultiples = _isMultiples;
var isMultiples = numberJs.isMultiples,
    isEven = numberJs.isEven,
    isOdd = numberJs.isOdd,
    nearEqual = numberJs.nearEqual,
    inRange = numberJs.inRange,
    keepMinMax = numberJs.keepMinMax,
    randomInt = numberJs.randomInt,
    round = numberJs.round,
    roundUp = numberJs.roundUp,
    roundDown = numberJs.roundDown,
    makeInRange = numberJs.makeInRange;
exports.makeInRange = makeInRange;
exports.roundDown = roundDown;
exports.roundUp = roundUp;
exports.round = round;
exports.randomInt = randomInt;
exports.keepMinMax = keepMinMax;
exports.inRange = inRange;
exports.nearEqual = nearEqual;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isMultiples = isMultiples;
var _default = {
  _isMultiples: _isMultiples,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  _keepMinMax: _keepMinMax,
  _randomInt: _randomInt,
  _round: _round,
  _roundUp: _roundUp,
  _roundDown: _roundDown,
  isMultiples: isMultiples,
  isEven: isEven,
  isOdd: isOdd,
  nearEqual: nearEqual,
  inRange: inRange,
  keepMinMax: keepMinMax,
  randomInt: randomInt,
  round: round,
  roundUp: roundUp,
  roundDown: roundDown,
  makeInRange: makeInRange
};
exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.makeInRange = exports.randomInt = exports._randomInt = exports.keepMinMax = exports._keepMinMax = exports.inRange = exports._inRange = exports.nearEqual = exports._nearEqual = exports.isOdd = exports.isEven = exports.isMultiples = exports._isMultiples = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

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
 * nearEqual
 */


exports.isOdd = isOdd;

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
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    diff = _value.diff;
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
    var _value2 = value;
    value = _value2.value;
    from = _value2.from;
    to = _value2.to;
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
 * keepMinMax
 */


exports.inRange = inRange;

var _keepMinMax = function _keepMinMax(value, from, to) {
  if (value < from) {
    return from;
  }

  if (to < value) {
    return to;
  }

  return value;
};

exports._keepMinMax = _keepMinMax;

var keepMinMax = function keepMinMax(value, min, to) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, min, to')) {
    var _value3 = value;
    value = _value3.value;
    min = _value3.min;
    to = _value3.to;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('keepMinMax args(value) is not number');
  }

  if (!(0, _type.isNumber)(min)) {
    throw new TypeError('keepMinMax args(from) is not number');
  }

  if (!(0, _type.isNumber)(to)) {
    throw new TypeError('keepMinMax args(to) is not number');
  }

  if (!(min <= to)) {
    throw new RangeError('keepMinMax args(from,to) must be from <= to');
  }

  return _keepMinMax(value, min, to);
};
/**
 * randomInt
 */


exports.keepMinMax = keepMinMax;

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
var makeInRange = keepMinMax;
exports.makeInRange = makeInRange;
var _default = {
  _isMultiples: _isMultiples,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  _keepMinMax: _keepMinMax,
  _randomInt: _randomInt,
  isMultiples: isMultiples,
  isEven: isEven,
  isOdd: isOdd,
  nearEqual: nearEqual,
  inRange: inRange,
  keepMinMax: keepMinMax,
  randomInt: randomInt,
  makeInRange: makeInRange
};
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._round = void 0;

/**
 * round
 */
var _round = function _round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

exports._round = _round;
var _default = {
  _round: _round
};
exports["default"] = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.round = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _round2 = __webpack_require__(44);

/**
 * round
 */
var round = function round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  } else if ((0, _isObjectParameter.isObjectParameter)(digit, 'digit')) {
    var _digit = digit;
    digit = _digit.digit;
  }

  if (!(0, _isType.isNumber)(value)) {
    throw new TypeError('round args(value) is not number');
  }

  if (!(0, _isType.isInteger)(digit)) {
    throw new TypeError('round args(digit) is not integer');
  }

  return (0, _round2._round)(value, digit);
};

exports.round = round;
var _default = {
  round: round
};
exports["default"] = _default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._roundUp = void 0;

/**
 * roundUp
 */
var _roundUp = function _roundUp(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.ceil(value * powResult) / powResult;
  } else {
    return -1 * Math.ceil(-1 * value * powResult) / powResult;
  }
};

exports._roundUp = _roundUp;
var _default = {
  _roundUp: _roundUp
};
exports["default"] = _default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.roundUp = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _roundUp2 = __webpack_require__(46);

/**
 * roundUp
 */
var roundUp = function roundUp(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  } else if ((0, _isObjectParameter.isObjectParameter)(digit, 'digit')) {
    var _digit = digit;
    digit = _digit.digit;
  }

  if (!(0, _isType.isNumber)(value)) {
    throw new TypeError('roundUp args(value) is not number');
  }

  if (!(0, _isType.isInteger)(digit)) {
    throw new TypeError('roundUp args(digit) is not integer');
  }

  return (0, _roundUp2._roundUp)(value, digit);
};

exports.roundUp = roundUp;
var _default = {
  roundUp: roundUp
};
exports["default"] = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._roundDown = void 0;

/**
 * roundDown
 */
var _roundDown = function _roundDown(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.floor(value * powResult) / powResult;
  } else {
    return -1 * Math.floor(-1 * value * powResult) / powResult;
  }
};

exports._roundDown = _roundDown;
var _default = {
  _roundDown: _roundDown
};
exports["default"] = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.roundDown = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _roundDown2 = __webpack_require__(48);

/**
 * roundDown
 */
var roundDown = function roundDown(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  } else if ((0, _isObjectParameter.isObjectParameter)(digit, 'digit')) {
    var _digit = digit;
    digit = _digit.digit;
  }

  if (!(0, _isType.isNumber)(value)) {
    throw new TypeError('roundDown args(value) is not number');
  }

  if (!(0, _isType.isInteger)(digit)) {
    throw new TypeError('roundDown args(digit) is not integer');
  }

  return (0, _roundDown2._roundDown)(value, digit);
};

exports.roundDown = roundDown;
var _default = {
  roundDown: roundDown
};
exports["default"] = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLast = exports._subLast = exports.subFirst = exports._subFirst = exports.subLength = exports._subLength = exports.subIndex = exports._subIndex = exports.isBothEnds = exports._isBothEnds = exports.isLast = exports._isLast = exports.isFirst = exports._isFirst = exports.every = exports.all = exports._all = exports.some = exports._some = exports.findBack = exports.findLast = exports._findLast = exports.find = exports.findFirst = exports._findFirst = exports.findBackIndex = exports.findLastIndex = exports._findLastIndex = exports.findIndex = exports.findFirstIndex = exports._findFirstIndex = exports.count = exports._count = exports.filter = exports._filter = exports.multiple = exports._multiple = exports.single = exports._single = exports.mode = exports._mode = exports.median = exports._median = exports.average = exports._average = exports.sum = exports._sum = exports.from = void 0;

var _type = __webpack_require__(5);

var _number = __webpack_require__(42);

var _isObjectParameter = __webpack_require__(15);

var _clone2 = __webpack_require__(4);

var _cloneDeep2 = __webpack_require__(28);

var _unique2 = __webpack_require__(51);

var _min2 = __webpack_require__(68);

var _max2 = __webpack_require__(70);

var _map2 = __webpack_require__(72);

/**
 * from
 */
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
  var countArray = (0, _map2._map)(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });
  var maxValue = (0, _max2._max)(countArray);
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
  var countArray = (0, _map2._map)(uniqueArray, function (element1) {
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
  var countArray = (0, _map2._map)(uniqueArray, function (element1) {
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
 * count
 */


exports.filter = filter;

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
    var _array2 = array;
    array = _array2.array;
    func = _array2.func;
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
    var _array3 = array;
    array = _array3.array;
    func = _array3.func;
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
    var _array4 = array;
    array = _array4.array;
    func = _array4.func;
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
    var _array5 = array;
    array = _array5.array;
    func = _array5.func;
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
    var _array6 = array;
    array = _array6.array;
    func = _array6.func;
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
    var _array7 = array;
    array = _array7.array;
    func = _array7.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('some args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('some args(func) is not function');
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
    var _array8 = array;
    array = _array8.array;
    func = _array8.func;
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
    var _array9 = array;
    array = _array9.array;
    valueArray = _array9.valueArray;
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
    var _array10 = array;
    array = _array10.array;
    valueArray = _array10.valueArray;
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
    var _array11 = array;
    array = _array11.array;
    valueFirstArray = _array11.valueFirstArray;
    var _array11$valueLastArr = _array11.valueLastArray;
    valueLastArray = _array11$valueLastArr === void 0 ? valueFirstArray : _array11$valueLastArr;
  } else if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array12 = array;
    array = _array12.array;
    valueFirstArray = _array12.valueArray;
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
    var _array13 = array;
    array = _array13.array;
    indexStart = _array13.indexStart;
    var _array13$indexEnd = _array13.indexEnd;
    indexEnd = _array13$indexEnd === void 0 ? indexStart : _array13$indexEnd;
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
    var _array14 = array;
    array = _array14.array;
    index = _array14.index;
    var _array14$length = _array14.length;
    length = _array14$length === void 0 ? array.length - index : _array14$length;
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

  length = (0, _min2._min)([length, array.length - index]);

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
    var _array15 = array;
    array = _array15.array;
    var _array15$length = _array15.length;
    length = _array15$length === void 0 ? 1 : _array15$length;
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
    var _array16 = array;
    array = _array16.array;
    var _array16$length = _array16.length;
    length = _array16$length === void 0 ? 1 : _array16$length;
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
  _sum: _sum,
  _average: _average,
  _median: _median,
  _mode: _mode,
  _single: _single,
  _multiple: _multiple,
  _filter: _filter,
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
  sum: sum,
  average: average,
  median: median,
  mode: mode,
  single: single,
  multiple: multiple,
  filter: filter,
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._unique = void 0;

var _includes = __webpack_require__(9);

var _returnFirstArgFunc = __webpack_require__(27);

var _unique2 = __webpack_require__(52);

/**
 * uniqe
 */
var _unique = function _unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnFirstArgFunc.__returnFirstArgFunc) {
    if (detail === false) {
      return (0, _unique2.__unique)(array);
    }
  }

  var index = [];
  var result = [];
  var count = [];
  array.forEach(function (v) {
    var funcResult = func(v);
    var indexResult = index.indexOf(funcResult);

    if (indexResult === -1) {
      index.push(funcResult);
      result.push(v);
      count.push(1);
    } else {
      count[indexResult] += 1;
    }
  });
  func = undefined;

  if (detail) {
    return {
      index: index,
      result: result,
      count: count
    };
  }

  return result;
};

exports._unique = _unique;
var _default = {
  _unique: _unique
};
exports["default"] = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__unique = void 0;

var _syntax = __webpack_require__(53);

var _includes = __webpack_require__(9);

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
var _default = {
  __unique: __unique
};
exports["default"] = _default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.partial = exports.recursive = exports.Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.guard = exports.assert = exports._partial = exports._recursive = exports._Enum = exports._assert = void 0;

var _assert2 = _interopRequireDefault(__webpack_require__(54));

var _guard = _interopRequireDefault(__webpack_require__(55));

var _sc = _interopRequireDefault(__webpack_require__(57));

var _if_ = _interopRequireDefault(__webpack_require__(58));

var _switch_ = _interopRequireDefault(__webpack_require__(59));

var _loop = _interopRequireDefault(__webpack_require__(60));

var _canUseMap = _interopRequireDefault(__webpack_require__(18));

var _canUseSet = _interopRequireDefault(__webpack_require__(21));

var _Enum2 = _interopRequireDefault(__webpack_require__(37));

var _Enum3 = _interopRequireDefault(__webpack_require__(62));

var _recursive2 = _interopRequireDefault(__webpack_require__(63));

var _recursive3 = _interopRequireDefault(__webpack_require__(65));

var _partial2 = _interopRequireDefault(__webpack_require__(66));

var _partial3 = _interopRequireDefault(__webpack_require__(67));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var syntaxJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _assert2["default"]), _guard["default"]), _sc["default"]), _if_["default"]), _switch_["default"]), _loop["default"]), _canUseMap["default"]), _canUseSet["default"]), _Enum2["default"]), _Enum3["default"]), _recursive2["default"]), _recursive3["default"]), _partial2["default"]), _partial3["default"]);

var _assert = syntaxJs._assert,
    _Enum = syntaxJs._Enum,
    _recursive = syntaxJs._recursive,
    _partial = syntaxJs._partial,
    assert = syntaxJs.assert,
    guard = syntaxJs.guard,
    sc = syntaxJs.sc,
    if_ = syntaxJs.if_,
    switch_ = syntaxJs.switch_,
    loop = syntaxJs.loop,
    canUseMap = syntaxJs.canUseMap,
    canUseWeakMap = syntaxJs.canUseWeakMap,
    canUseSet = syntaxJs.canUseSet,
    canUseWeakSet = syntaxJs.canUseWeakSet,
    Enum = syntaxJs.Enum,
    recursive = syntaxJs.recursive,
    partial = syntaxJs.partial;
exports.partial = partial;
exports.recursive = recursive;
exports.Enum = Enum;
exports.canUseWeakSet = canUseWeakSet;
exports.canUseSet = canUseSet;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseMap = canUseMap;
exports.loop = loop;
exports.switch_ = switch_;
exports.if_ = if_;
exports.sc = sc;
exports.guard = guard;
exports.assert = assert;
exports._partial = _partial;
exports._recursive = _recursive;
exports._Enum = _Enum;
exports._assert = _assert;
var _default = {
  _assert: _assert,
  _Enum: _Enum,
  _recursive: _recursive,
  _partial: _partial,
  assert: assert,
  guard: guard,
  sc: sc,
  if_: if_,
  switch_: switch_,
  loop: loop,
  canUseMap: canUseMap,
  canUseWeakMap: canUseWeakMap,
  canUseSet: canUseSet,
  canUseWeakSet: canUseWeakSet,
  Enum: Enum,
  recursive: recursive,
  partial: partial
};
exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.assert = exports._assert = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.guard = void 0;

var _type = __webpack_require__(5);

var _functionValue = __webpack_require__(56);

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
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.if_ = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _functionValue = __webpack_require__(56);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.switch_ = void 0;

var _type = __webpack_require__(5);

var _functionValue = __webpack_require__(56);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loop = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _IntegerArray2 = __webpack_require__(39);

var _objectEntries2 = __webpack_require__(61);

var _loop = __webpack_require__(38);

/**
 * loop
 */
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
    return (0, _loop.__loop)((0, _objectEntries2._objectEntries)(start));
  } else if ((0, _type.isArray)(start)) {
    return (0, _loop.__loop)(start);
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

  return (0, _loop.__loop)((0, _IntegerArray2._IntegerArray)(start, end, increment));
};

exports.loop = loop;
var _default = {
  loop: loop
};
exports["default"] = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._objectEntries = void 0;

var _hasOwn2 = __webpack_require__(13);

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
var _default = {
  _objectEntries: _objectEntries
};
exports["default"] = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Enum = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _Enum2 = __webpack_require__(37);

/**
 * Enum
 */
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

  return (0, _Enum2._Enum)(values, useIndex);
};

exports.Enum = Enum;
var _default = {
  Enum: Enum
};
exports["default"] = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._recursive = void 0;

var _isType = __webpack_require__(11);

var _loop = __webpack_require__(38);

var _objectEntries2 = __webpack_require__(61);

var _arrayEntries2 = __webpack_require__(64);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _recursive = function _recursive(source, func) {
  var continueFlag = true;

  var _recursive_ = function _recursive_(value, level, path) {
    var loopArray;

    if ((0, _isType.isObject)(value)) {
      loopArray = (0, _objectEntries2._objectEntries)(value);
    } else if ((0, _isType.isArray)(value)) {
      loopArray = (0, _arrayEntries2._arrayEntries)(value);
    } else {
      return;
    }

    (0, _loop.__loop)(loopArray)(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var result = func(value, key, level, path, source);

      if (result === false) {
        continueFlag = false;
        return {
          "break": true
        };
      }

      _recursive_(result, level + 1, path + '.' + key);

      if (continueFlag === false) {
        return {
          "break": true
        };
      }
    });
  };

  _recursive_(source, 0, '');
};

exports._recursive = _recursive;
var _default = {
  _recursive: _recursive
};
exports["default"] = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._arrayEntries = void 0;

/**
 * arrayEntries
 */
var _arrayEntries = function _arrayEntries(array) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }

  return result;
};

exports._arrayEntries = _arrayEntries;
var _default = {
  _arrayEntries: _arrayEntries
};
exports["default"] = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.recursive = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _recursive2 = __webpack_require__(63);

var recursive = function recursive(source, func) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source, func')) {
    var _source = source;
    source = _source.source;
    func = _source.func;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func')) {
    var _func = func;
    func = _func.func;
  }

  if (!((0, _isType.isObject)(source) || (0, _isType.isArray)(source))) {
    throw new TypeError('recursive args source is not [object|array]');
  }

  if (!(0, _isType.isFunction)(func)) {
    throw new TypeError('recursive args func is not function');
  }

  return (0, _recursive2._recursive)(source, func);
};

exports.recursive = recursive;
var _default = {
  recursive: recursive
};
exports["default"] = _default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._partial = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _partial = function _partial(func, applyArgs) {
  return function () {
    var applyArray = _toConsumableArray(applyArgs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      var arg = _args[_i];
      var emptyIndex = applyArray.indexOf(_partial.empty);

      if (emptyIndex !== -1) {
        applyArray[emptyIndex] = arg;
      } else {
        applyArray.push(arg);
      }
    }

    return func.apply(void 0, _toConsumableArray(applyArray.map(function (e) {
      return e === _partial.empty ? undefined : e;
    })));
  };
};

exports._partial = _partial;
_partial.empty = {};
var _default = {
  _partial: _partial
};
exports["default"] = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.partial = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _partial2 = __webpack_require__(66);

var partial = function partial(func, applyArgs) {
  if ((0, _isObjectParameter.isObjectParameter)(func, 'func, applyArgs')) {
    var _func = func;
    func = _func.func;
    applyArgs = _func.applyArgs;
  } else if ((0, _isObjectParameter.isObjectParameter)(applyArgs, 'applyArgs')) {
    var _applyArgs = applyArgs;
    applyArgs = _applyArgs.applyArgs;
  }

  if (!(0, _isType.isFunction)(func)) {
    throw new TypeError("partial args(func:".concat(func, ") is not function"));
  }

  if (!(0, _isType.isArray)(applyArgs)) {
    throw new TypeError("partial args(applyArgs:".concat(applyArgs, ") is not array"));
  }

  return (0, _partial2._partial)(func, applyArgs);
};

exports.partial = partial;
partial.empty = _partial2._partial.empty;
var _default = {
  partial: partial
};
exports["default"] = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._min = void 0;

var _isType = __webpack_require__(11);

var _returnFirstArgFunc = __webpack_require__(27);

var _min2 = __webpack_require__(69);

/**
 * array.min
 */
var _min = function _min(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnFirstArgFunc.__returnFirstArgFunc && detail === false) {
    return (0, _min2.__min)(array);
  }

  var result = {
    index: -1,
    element: null,
    value: null
  };

  if (array.length === 0) {
    return detail ? result : result.value;
  }

  result.index = 0;
  result.element = array[0];
  result.value = Infinity;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var value = func(array[i]);

    if (!(0, _isType.isNumber)(value)) {
      throw new TypeError('_min args(array) element is not number');
    }

    if (value < result.value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }

  return detail ? result : result.value;
};

exports._min = _min;
var _default = {
  _min: _min
};
exports["default"] = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__min = void 0;

var _isType = __webpack_require__(11);

/**
 * array.min
 */
var __min = function __min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!(0, _isType.isNumber)(array[i])) {
      throw new TypeError('__min args(array) element is not number');
    }

    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

exports.__min = __min;
var _default = {
  __min: __min
};
exports["default"] = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._max = void 0;

var _isType = __webpack_require__(11);

var _returnFirstArgFunc = __webpack_require__(27);

var _max2 = __webpack_require__(71);

/**
 * array.max
 */
var _max = function _max(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnFirstArgFunc.__returnFirstArgFunc && detail === false) {
    return (0, _max2.__max)(array);
  }

  var result = {
    index: -1,
    element: null,
    value: null
  };

  if (array.length === 0) {
    return detail ? result : result.value;
  }

  result.index = 0;
  result.element = array[0];
  result.value = -Infinity;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var value = func(array[i]);

    if (!(0, _isType.isNumber)(value)) {
      throw new TypeError('_max args(array) element is not number');
    }

    if (result.value < value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }

  return detail ? result : result.value;
};

exports._max = _max;
var _default = {
  _max: _max
};
exports["default"] = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__max = void 0;

var _isType = __webpack_require__(11);

/**
 * array.max
 */
var __max = function __max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!(0, _isType.isNumber)(array[i])) {
      throw new TypeError('__max args(array) element is not number');
    }

    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

exports.__max = __max;
var _default = {
  __max: __max
};
exports["default"] = _default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._map = void 0;

/**
 * map
 */
var _map = function _map(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);
    result.push(resultFunc);
  }

  return result;
};

exports._map = _map;
var _default = {
  _map: _map
};
exports["default"] = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.add = exports._add = exports.insert = exports._insert = exports.deleteLast = exports._deleteLast = exports.deleteFirst = exports._deleteFirst = exports.deleteLength = exports._deleteLength = exports.deleteIndex = exports._deleteIndex = exports.subLast = exports._subLast = exports.subFirst = exports._subFirst = exports.subLength = exports._subLength = exports.subIndex = exports._subIndex = exports.trimBothEnds = exports._trimBothEnds = exports.trimLast = exports._trimLast = exports.trimFirst = exports._trimFirst = exports.excludeBothEnds = exports._excludeBothEnds = exports.excludeLast = exports._excludeLast = exports.excludeFirst = exports._excludeFirst = exports.includeBothEnds = exports._includeBothEnds = exports.includeLast = exports._includeLast = exports.includeFirst = exports._includeFirst = exports.isBothEnds = exports._isBothEnds = exports.isLast = exports._isLast = exports.isFirst = exports._isFirst = exports.isUpperCase = exports._isUpperCase = exports.isLowerCase = exports._isLowerCase = exports.repeat = exports._repeat = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

var _array = __webpack_require__(74);

var _indexOfFirst2 = __webpack_require__(98);

var _indexOfLast2 = __webpack_require__(99);

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
 * isFirst
 */


exports.isUpperCase = isUpperCase;

var _isFirst = function _isFirst(str, search) {
  return (0, _indexOfFirst2._indexOfFirst)(str, search) === 0;
};

exports._isFirst = _isFirst;

var isFirst = function isFirst(str, search) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str2 = str;
    str = _str2.str;
    search = _str2.search;
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
  var result = (0, _indexOfLast2._indexOfLast)(str, search);

  if (result === -1) {
    return false;
  }

  return result === str.length - search.length;
};

exports._isLast = _isLast;

var isLast = function isLast(str, search) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str3 = str;
    str = _str3.str;
    search = _str3.search;
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
    var _str4 = str;
    str = _str4.str;
    searchFirst = _str4.searchFirst;
    var _str4$searchLast = _str4.searchLast;
    searchLast = _str4$searchLast === void 0 ? searchFirst : _str4$searchLast;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str5 = str;
    str = _str5.str;
    searchFirst = _str5.search;
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
    var _str6 = str;
    str = _str6.str;
    value = _str6.value;
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
    var _str7 = str;
    str = _str7.str;
    value = _str7.value;
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
    var _str8 = str;
    str = _str8.str;
    valueFirst = _str8.valueFirst;
    var _str8$valueLast = _str8.valueLast;
    valueLast = _str8$valueLast === void 0 ? valueFirst : _str8$valueLast;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str9 = str;
    str = _str9.str;
    valueFirst = _str9.value;
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
    var _str10 = str;
    str = _str10.str;
    value = _str10.value;
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
    var _str11 = str;
    str = _str11.str;
    value = _str11.value;
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
    var _str12 = str;
    str = _str12.str;
    valueFirst = _str12.valueFirst;
    var _str12$valueLast = _str12.valueLast;
    valueLast = _str12$valueLast === void 0 ? valueFirst : _str12$valueLast;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, value')) {
    var _str13 = str;
    str = _str13.str;
    valueFirst = _str13.value;
    var _str13$valueLast = _str13.valueLast;
    valueLast = _str13$valueLast === void 0 ? valueFirst : _str13$valueLast;
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
    var _str14 = str;
    str = _str14.str;
    var _str14$valueArray = _str14.valueArray;
    valueArray = _str14$valueArray === void 0 ? [' ', '\r', '\n'] : _str14$valueArray;
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
    var _str15 = str;
    str = _str15.str;
    var _str15$valueArray = _str15.valueArray;
    valueArray = _str15$valueArray === void 0 ? [' ', '\r', '\n'] : _str15$valueArray;
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
    var _str16 = str;
    str = _str16.str;
    valueFirstArray = _str16.valueFirstArray;
    var _str16$valueLastArray = _str16.valueLastArray;
    valueLastArray = _str16$valueLastArray === void 0 ? valueFirstArray : _str16$valueLastArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(str, 'str, valueArray')) {
    var _str17 = str;
    str = _str17.str;
    valueFirstArray = _str17.valueArray;
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
    var _str18 = str;
    str = _str18.str;
    indexStart = _str18.indexStart;
    var _str18$indexEnd = _str18.indexEnd;
    indexEnd = _str18$indexEnd === void 0 ? indexStart : _str18$indexEnd;
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
    var _str19 = str;
    str = _str19.str;
    index = _str19.index;
    var _str19$length = _str19.length;
    length = _str19$length === void 0 ? str.length - index : _str19$length;
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
    var _str20 = str;
    str = _str20.str;
    var _str20$length = _str20.length;
    length = _str20$length === void 0 ? 1 : _str20$length;
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
    var _str21 = str;
    str = _str21.str;
    var _str21$length = _str21.length;
    length = _str21$length === void 0 ? 1 : _str21$length;
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
    var _str22 = str;
    str = _str22.str;
    indexStart = _str22.indexStart;
    var _str22$indexEnd = _str22.indexEnd;
    indexEnd = _str22$indexEnd === void 0 ? indexStart : _str22$indexEnd;
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
    var _str23 = str;
    str = _str23.str;
    index = _str23.index;
    var _str23$length = _str23.length;
    length = _str23$length === void 0 ? str.length - index : _str23$length;
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
    var _str24 = str;
    str = _str24.str;
    var _str24$length = _str24.length;
    length = _str24$length === void 0 ? 1 : _str24$length;
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
    var _str25 = str;
    str = _str25.str;
    var _str25$length = _str25.length;
    length = _str25$length === void 0 ? 1 : _str25$length;
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
    var _str26 = str;
    str = _str26.str;
    value = _str26.value;
    var _str26$index = _str26.index;
    index = _str26$index === void 0 ? 0 : _str26$index;
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
    var _str27 = str;
    str = _str27.str;
    value = _str27.value;
    var _str27$index = _str27.index;
    index = _str27$index === void 0 ? str.length - 1 : _str27$index;
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.operation = exports.arrayToIndexValueArray = exports.every = exports.findBack = exports.find = exports.findBackIndex = exports.findIndex = exports.SortFunc = exports.arrayEntries = exports.IntegerArray = exports.NumberArray = exports.unique = exports.group = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.isBothEnds = exports.isLast = exports.isFirst = exports.all = exports.some = exports.findLast = exports.findFirst = exports.findLastIndex = exports.findFirstIndex = exports.count = exports.map = exports.filter = exports.multiple = exports.single = exports.mode = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.from = exports._SortFunc = exports._arrayEntries = exports._IntegerArray = exports._NumberArray = exports._unique = exports._group = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._isBothEnds = exports._isLast = exports._isFirst = exports._all = exports._some = exports._findLast = exports._findFirst = exports._findLastIndex = exports._findFirstIndex = exports._count = exports._map = exports._filter = exports._multiple = exports._single = exports._mode = exports._median = exports._average = exports._sum = exports._max = exports._min = void 0;

var _array_common = _interopRequireDefault(__webpack_require__(50));

var _map2 = _interopRequireDefault(__webpack_require__(72));

var _map3 = _interopRequireDefault(__webpack_require__(75));

var _min2 = _interopRequireDefault(__webpack_require__(68));

var _min3 = _interopRequireDefault(__webpack_require__(76));

var _max2 = _interopRequireDefault(__webpack_require__(70));

var _max3 = _interopRequireDefault(__webpack_require__(77));

var _NumberArray2 = _interopRequireDefault(__webpack_require__(40));

var _NumberArray3 = _interopRequireDefault(__webpack_require__(78));

var _IntegerArray2 = _interopRequireDefault(__webpack_require__(39));

var _IntegerArray3 = _interopRequireDefault(__webpack_require__(79));

var _arrayEntries2 = _interopRequireDefault(__webpack_require__(64));

var _arrayEntries3 = _interopRequireDefault(__webpack_require__(80));

var _group2 = _interopRequireDefault(__webpack_require__(81));

var _group3 = _interopRequireDefault(__webpack_require__(82));

var _unique2 = _interopRequireDefault(__webpack_require__(51));

var _unique3 = _interopRequireDefault(__webpack_require__(83));

var _SortFuncOrder = _interopRequireDefault(__webpack_require__(84));

var _SortFunc2 = _interopRequireDefault(__webpack_require__(85));

var _SortFunc3 = _interopRequireDefault(__webpack_require__(86));

var _array_operation = _interopRequireDefault(__webpack_require__(41));

var _popFirst = _interopRequireDefault(__webpack_require__(90));

var _popFirst2 = _interopRequireDefault(__webpack_require__(91));

var _popLast = _interopRequireDefault(__webpack_require__(92));

var _popLast2 = _interopRequireDefault(__webpack_require__(93));

var _popArrayFirst = _interopRequireDefault(__webpack_require__(94));

var _popArrayFirst2 = _interopRequireDefault(__webpack_require__(95));

var _popArrayLast = _interopRequireDefault(__webpack_require__(96));

var _popArrayLast2 = _interopRequireDefault(__webpack_require__(97));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrayJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_common["default"]), _map2["default"]), _map3["default"]), _min2["default"]), _min3["default"]), _max2["default"]), _max3["default"]), _NumberArray2["default"]), _NumberArray3["default"]), _IntegerArray2["default"]), _IntegerArray3["default"]), _arrayEntries2["default"]), _arrayEntries3["default"]), _group2["default"]), _group3["default"]), _unique2["default"]), _unique3["default"]), _SortFuncOrder["default"]), _SortFunc2["default"]), _SortFunc3["default"]);

var arrayOperationJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_operation["default"]), _popFirst["default"]), _popFirst2["default"]), _popLast["default"]), _popLast2["default"]), _popArrayFirst["default"]), _popArrayFirst2["default"]), _popArrayLast["default"]), _popArrayLast2["default"]);

var _min = arrayJs._min,
    _max = arrayJs._max,
    _sum = arrayJs._sum,
    _average = arrayJs._average,
    _median = arrayJs._median,
    _mode = arrayJs._mode,
    _single = arrayJs._single,
    _multiple = arrayJs._multiple,
    _filter = arrayJs._filter,
    _map = arrayJs._map,
    _count = arrayJs._count,
    _findFirstIndex = arrayJs._findFirstIndex,
    _findLastIndex = arrayJs._findLastIndex,
    _findFirst = arrayJs._findFirst,
    _findLast = arrayJs._findLast,
    _some = arrayJs._some,
    _all = arrayJs._all,
    _isFirst = arrayJs._isFirst,
    _isLast = arrayJs._isLast,
    _isBothEnds = arrayJs._isBothEnds,
    _subIndex = arrayJs._subIndex,
    _subLength = arrayJs._subLength,
    _subFirst = arrayJs._subFirst,
    _subLast = arrayJs._subLast,
    _group = arrayJs._group,
    _unique = arrayJs._unique,
    _NumberArray = arrayJs._NumberArray,
    _IntegerArray = arrayJs._IntegerArray,
    _arrayEntries = arrayJs._arrayEntries,
    _SortFunc = arrayJs._SortFunc,
    from = arrayJs.from,
    min = arrayJs.min,
    max = arrayJs.max,
    sum = arrayJs.sum,
    average = arrayJs.average,
    median = arrayJs.median,
    mode = arrayJs.mode,
    single = arrayJs.single,
    multiple = arrayJs.multiple,
    filter = arrayJs.filter,
    map = arrayJs.map,
    count = arrayJs.count,
    findFirstIndex = arrayJs.findFirstIndex,
    findLastIndex = arrayJs.findLastIndex,
    findFirst = arrayJs.findFirst,
    findLast = arrayJs.findLast,
    some = arrayJs.some,
    all = arrayJs.all,
    isFirst = arrayJs.isFirst,
    isLast = arrayJs.isLast,
    isBothEnds = arrayJs.isBothEnds,
    subIndex = arrayJs.subIndex,
    subLength = arrayJs.subLength,
    subFirst = arrayJs.subFirst,
    subLast = arrayJs.subLast,
    group = arrayJs.group,
    unique = arrayJs.unique,
    NumberArray = arrayJs.NumberArray,
    IntegerArray = arrayJs.IntegerArray,
    arrayEntries = arrayJs.arrayEntries,
    SortFunc = arrayJs.SortFunc,
    findIndex = arrayJs.findIndex,
    findBackIndex = arrayJs.findBackIndex,
    find = arrayJs.find,
    findBack = arrayJs.findBack,
    every = arrayJs.every,
    arrayToIndexValueArray = arrayJs.arrayToIndexValueArray; // // Circular reference Error
// export const operation = _copyProperty(arrayOperationJs, `
//   _insert, _add,
//   _deleteLength, _deleteIndex,
//   _deleteFirst, _deleteLast,
//   _includeFirst, _includeLast, _includeBothEnds,
//   _excludeFirst, _excludeLast, _excludeBothEnds,
//   _trimFirst, _trimLast, _trimBothEnds,
//   _popFirst, _popLast,
//   _pushFirst, _pushLast,
//   _remainFirst, _remainLast,
//   _filter,
//   insert, add,
//   deleteLength, deleteIndex,
//   deleteFirst, deleteLast,
//   includeFirst, includeLast, includeBothEnds,
//   excludeFirst, excludeLast, excludeBothEnds,
//   trimFirst, trimLast, trimBothEnds,
//   popFirst, popLast,
//   pushFirst, pushLast,
//   remainFirst, remainLast,
//   filter,
// `);

exports.arrayToIndexValueArray = arrayToIndexValueArray;
exports.every = every;
exports.findBack = findBack;
exports.find = find;
exports.findBackIndex = findBackIndex;
exports.findIndex = findIndex;
exports.SortFunc = SortFunc;
exports.arrayEntries = arrayEntries;
exports.IntegerArray = IntegerArray;
exports.NumberArray = NumberArray;
exports.unique = unique;
exports.group = group;
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
exports._SortFunc = _SortFunc;
exports._arrayEntries = _arrayEntries;
exports._IntegerArray = _IntegerArray;
exports._NumberArray = _NumberArray;
exports._unique = _unique;
exports._group = _group;
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
var operation = arrayOperationJs;
exports.operation = operation;
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
  _group: _group,
  _unique: _unique,
  _NumberArray: _NumberArray,
  _IntegerArray: _IntegerArray,
  _arrayEntries: _arrayEntries,
  _SortFunc: _SortFunc,
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
  group: group,
  unique: unique,
  NumberArray: NumberArray,
  IntegerArray: IntegerArray,
  arrayEntries: arrayEntries,
  SortFunc: SortFunc,
  // Another name
  findIndex: findIndex,
  findBackIndex: findBackIndex,
  find: find,
  findBack: findBack,
  every: every,
  arrayToIndexValueArray: arrayToIndexValueArray,
  operation: operation
};
exports["default"] = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.map = void 0;

var _type = __webpack_require__(5);

var _map2 = __webpack_require__(72);

var _isObjectParameter = __webpack_require__(15);

/**
 * map
 */
var map = function map(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array = array;
    array = _array.array;
    func = _array.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('map args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('map args(productFunc) is not function');
  }

  return (0, _map2._map)(array, func);
};

exports.map = map;
var _default = {
  map: map
};
exports["default"] = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.min = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _returnFirstArgFunc = __webpack_require__(27);

var _min2 = __webpack_require__(68);

/**
 * array.min
 */
var min = function min(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('min args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('min args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('min args(detail) is not boolean');
  }

  return (0, _min2._min)(array, func, detail);
};

exports.min = min;
var _default = {
  min: min
};
exports["default"] = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.max = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _returnFirstArgFunc = __webpack_require__(27);

var _max2 = __webpack_require__(70);

/**
 * array.max
 */
var max = function max(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('max args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('max args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('max args(detail) is not boolean');
  }

  return (0, _max2._max)(array, func, detail);
};

exports.max = max;
var _default = {
  max: max
};
exports["default"] = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumberArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _NumberArray2 = __webpack_require__(40);

/**
 * NumberArray
 */
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

  return (0, _NumberArray2._NumberArray)(start, end, increment);
};

exports.NumberArray = NumberArray;
var _default = {
  NumberArray: NumberArray
};
exports["default"] = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IntegerArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _IntegerArray2 = __webpack_require__(39);

/**
 * IntegerArray
 */
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

  return (0, _IntegerArray2._IntegerArray)(start, end, increment);
};

exports.IntegerArray = IntegerArray;
var _default = {
  IntegerArray: IntegerArray
};
exports["default"] = _default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrayToIndexValueArray = exports.arrayEntries = void 0;

var _isType = __webpack_require__(11);

var _arrayEntries2 = __webpack_require__(64);

/**
 * arrayEntries
 */
var arrayEntries = function arrayEntries(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('arrayEntries args(array) is not array');
  }

  return (0, _arrayEntries2._arrayEntries)(array);
};

exports.arrayEntries = arrayEntries;
var arrayToIndexValueArray = arrayEntries;
exports.arrayToIndexValueArray = arrayToIndexValueArray;
var _default = {
  arrayEntries: arrayEntries,
  arrayToIndexValueArray: arrayToIndexValueArray
};
exports["default"] = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._group = void 0;

var _returnFirstArgFunc = __webpack_require__(27);

/**
 * group
 */
var _group = function _group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
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
var _default = {
  _group: _group
};
exports["default"] = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.group = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _returnFirstArgFunc = __webpack_require__(27);

var _group2 = __webpack_require__(81);

/**
 * group
 */
var group = function group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _func$func;
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

  return (0, _group2._group)(array, func, detail);
};

exports.group = group;
var _default = {
  group: group
};
exports["default"] = _default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unique = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _includes = __webpack_require__(9);

var _returnFirstArgFunc = __webpack_require__(27);

var _unique2 = __webpack_require__(51);

/**
 * uniqe
 */
var unique = function unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _func$func;
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
    throw new TypeError('unique args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('unique args(detail) is not boolean');
  }

  return (0, _unique2._unique)(array, func, detail);
};

exports.unique = unique;
var _default = {
  unique: unique
};
exports["default"] = _default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__SortFuncOrder = void 0;

/**
 * SortFunc.order
 */
var __SortFuncOrder = {};
exports.__SortFuncOrder = __SortFuncOrder;
__SortFuncOrder.normal = {};

__SortFuncOrder.normal.ascending = function (a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};

__SortFuncOrder.normal.descending = function (a, b) {
  return -1 * __SortFuncOrder.normal.ascending(a, b);
};

__SortFuncOrder.dictionaryUpperCase = {};

__SortFuncOrder.dictionaryUpperCase.ascending = function (a, b) {
  var al = a.toLowerCase();
  var bl = b.toLowerCase();
  return al < bl ? -1 : al > bl ? 1 : a < b ? -1 : a > b ? 1 : 0;
};

__SortFuncOrder.dictionaryUpperCase.descending = function (a, b) {
  return -1 * __SortFuncOrder.dictionaryUpperCase.ascending(a, b);
};

__SortFuncOrder.dictionaryLowerCase = {};

__SortFuncOrder.dictionaryLowerCase.ascending = function (a, b) {
  var al = a.toLowerCase();
  var bl = b.toLowerCase();
  return al < bl ? -1 : al > bl ? 1 : a < b ? 1 : a > b ? -1 : 0;
};

__SortFuncOrder.dictionaryLowerCase.descending = function (a, b) {
  return -1 * __SortFuncOrder.dictionaryLowerCase.ascending(a, b);
};

__SortFuncOrder.version = {};

__SortFuncOrder.version.ascending = function (a, b) {
  var arrayA = a.split('.');
  var arrayB = b.split('.');
  var length = Math.min(arrayA.length, arrayB.length);

  for (var i = 0; i < length; i += 1) {
    var numberA = parseInt(arrayA[i], 10);
    var numberB = parseInt(arrayB[i], 10);

    if (numberA < numberB) {
      return -1;
    }

    if (numberA > numberB) {
      return 1;
    }

    var valueA = arrayA[i];
    var valueB = arrayB[i];
    var lowerA = valueA.toLowerCase();
    var lowerB = valueB.toLowerCase();

    if (lowerA < lowerB) {
      return -1;
    }

    if (lowerA > lowerB) {
      return 1;
    }

    if (valueA < valueB) {
      return 1;
    }

    if (valueA > valueB) {
      return -1;
    } // lowerCase < upperCase

  }

  if (arrayA.length < arrayB.length) {
    return -1;
  }

  if (arrayA.length > arrayB.length) {
    return 1;
  }

  return 0;
};

__SortFuncOrder.version.descending = function (a, b) {
  return -1 * __SortFuncOrder.version.ascending(a, b);
};

var _default = {
  __SortFuncOrder: __SortFuncOrder
};
exports["default"] = _default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._SortFunc = void 0;

var _map2 = __webpack_require__(72);

var _returnFirstArgFunc = __webpack_require__(27);

var _SortFuncOrder = __webpack_require__(84);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * SortFunc
 */
var _SortFunc = function _SortFunc(orderSettingArray) {
  var sortFuncArray = (0, _map2._map)(orderSettingArray, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        orderFunc = _ref2[0],
        _ref2$ = _ref2[1],
        valueFunc = _ref2$ === void 0 ? _returnFirstArgFunc.__returnFirstArgFunc : _ref2$;

    return function (a, b) {
      return orderFunc(valueFunc(a), valueFunc(b));
    };
  });
  return function (a, b) {
    for (var i = 0, l = sortFuncArray.length; i < l; i += 1) {
      var result = sortFuncArray[i](a, b);

      if (result !== 0) {
        return result;
      }
    }

    return 0;
  };
};

exports._SortFunc = _SortFunc;
_SortFunc.order = _SortFuncOrder.__SortFuncOrder;
var _default = {
  _SortFunc: _SortFunc
};
exports["default"] = _default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SortFunc = void 0;

var _isType = __webpack_require__(11);

var _allMatchAll2 = __webpack_require__(87);

var _SortFunc2 = __webpack_require__(85);

var SortFunc = function SortFunc(orderSettingArray) {
  if (!(0, _isType.isArray)(orderSettingArray)) {
    throw new TypeError('SortFunc args(orderSettingArray) is not array');
  }

  if (!(0, _allMatchAll2._allMatchAll)(orderSettingArray, [_isType.isArray, function (element) {
    return (0, _isType.isFunction)(element[0]) && (0, _isType.isFunction)(element[1]);
  }])) {
    throw new TypeError('SortFunc args(orderSettingArray) element[0|1] is not function ');
  }

  return (0, _SortFunc2._SortFunc)(orderSettingArray);
};

exports.SortFunc = SortFunc;
SortFunc.order = _SortFunc2._SortFunc.order;
var _default = {
  SortFunc: SortFunc
};
exports["default"] = _default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchAll = exports._allMatchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _matchAll2 = __webpack_require__(88);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAll = exports._matchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _match2 = __webpack_require__(89);

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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.match = exports._match = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popFirst = void 0;

/**
 * array.operation.popFirst
 */
var _popFirst = function _popFirst(array) {
  return array.shift();
};

exports._popFirst = _popFirst;
var _default = {
  _popFirst: _popFirst
};
exports["default"] = _default;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popFirst = void 0;

var _isType = __webpack_require__(11);

var _popFirst2 = __webpack_require__(90);

/**
 * array.operation.popFirst
 */
var popFirst = function popFirst(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popFirst args(array) is not array');
  }

  return (0, _popFirst2._popFirst)(array);
};

exports.popFirst = popFirst;
var _default = {
  popFirst: popFirst
};
exports["default"] = _default;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popLast = void 0;

/**
 * array.operation.popLast
 */
var _popLast = function _popLast(array) {
  return array.pop();
};

exports._popLast = _popLast;
var _default = {
  _popLast: _popLast
};
exports["default"] = _default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popLast = void 0;

var _isType = __webpack_require__(11);

var _popLast2 = __webpack_require__(92);

/**
 * array.operation.popLast
 */
var popLast = function popLast(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popLast args(array) is not array');
  }

  return (0, _popLast2._popLast)(array);
};

exports.popLast = popLast;
var _default = {
  popLast: popLast
};
exports["default"] = _default;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popArrayFirst = void 0;

/**
 * array.operation.popArrayFirst
 */
var _popArrayFirst = function _popArrayFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.splice(0, length);
};

exports._popArrayFirst = _popArrayFirst;
var _default = {
  _popArrayFirst: _popArrayFirst
};
exports["default"] = _default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popArrayFirst = void 0;

var _isType = __webpack_require__(11);

var _number = __webpack_require__(42);

var _isObjectParameter = __webpack_require__(15);

var _popArrayFirst2 = __webpack_require__(94);

/**
 * array.operation.popArrayFirst
 */
var popArrayFirst = function popArrayFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'length')) {
    var _array = array;
    array = _array.array;
    var _array$length = _array.length;
    length = _array$length === void 0 ? 1 : _array$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popArrayFirst args(array) is not array');
  }

  if (!(0, _isType.isInteger)(length)) {
    throw new TypeError('popArrayFirst args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 1, array.length)) {
    throw new RangeError('popArrayFirst args(length) must be from 0 to array.length');
  }

  return (0, _popArrayFirst2._popArrayFirst)(array, length);
};

exports.popArrayFirst = popArrayFirst;
var _default = {
  popArrayFirst: popArrayFirst
};
exports["default"] = _default;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popArrayLast = void 0;

/**
 * array.operation.popArrayLast
 */
var _popArrayLast = function _popArrayLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.splice(array.length - length, length);
};

exports._popArrayLast = _popArrayLast;
var _default = {
  _popArrayLast: _popArrayLast
};
exports["default"] = _default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popArrayLast = void 0;

var _isType = __webpack_require__(11);

var _number = __webpack_require__(42);

var _isObjectParameter = __webpack_require__(15);

var _popArrayLast2 = __webpack_require__(96);

/**
 * array.operation.popArrayLast
 */
var popArrayLast = function popArrayLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'length')) {
    var _array = array;
    array = _array.array;
    var _array$length = _array.length;
    length = _array$length === void 0 ? 1 : _array$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popArrayLast args(array) is not array');
  }

  if (!(0, _isType.isInteger)(length)) {
    throw new TypeError('popArrayLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 1, array.length)) {
    throw new RangeError('popArrayLast args(length) must be from 0 to array.length');
  }

  return (0, _popArrayLast2._popArrayLast)(array, length);
};

exports.popArrayLast = popArrayLast;
var _default = {
  popArrayLast: popArrayLast
};
exports["default"] = _default;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfFirst = void 0;

/**
 * indexOfFirst
 */
var _indexOfFirst = function _indexOfFirst(str, search, indexStart) {
  if (search === '') {
    return -1;
  }

  return str.indexOf(search, indexStart);
};

exports._indexOfFirst = _indexOfFirst;
var _default = {
  _indexOfFirst: _indexOfFirst
};
exports["default"] = _default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfLast = void 0;

var _array = __webpack_require__(74);

/**
 * indexOfLast
 */
var _indexOfLast = function _indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if (search === '') {
    return -1;
  }

  return str.lastIndexOf(search, indexStart);
};

exports._indexOfLast = _indexOfLast;
var _default = {
  _indexOfLast: _indexOfLast
};
exports["default"] = _default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._replaceAllArray = void 0;

var _indexOfAnyFirst2 = __webpack_require__(101);

var _string_common = __webpack_require__(73);

var _map2 = __webpack_require__(72);

/**
 * replaceAllArray
 */
var _replaceAllArray = function _replaceAllArray(str, replaceArray) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var searchArray = (0, _map2._map)(replaceArray, function (element) {
    return element[0];
  });
  var start = 0;
  var result = '';
  var replaceInfo = [];

  while (true) {
    var searchResult = (0, _indexOfAnyFirst2._indexOfAnyFirst)(str, searchArray, start);

    if (searchResult.index === -1) {
      result += (0, _string_common._subLength)(str, start);
      break;
    }

    if (start < searchResult.index) {
      result += (0, _string_common._subIndex)(str, start, searchResult.index - 1);
      start = searchResult.index;
    }

    result += replaceArray[searchResult.searchIndex][1];
    replaceInfo.push({
      index: searchResult.index,
      searchIndex: searchResult.searchIndex
    });
    start += searchArray[searchResult.searchIndex].length;
  }

  if (detail) {
    return {
      result: result,
      replaceInfo: replaceInfo
    };
  }

  return result;
};

exports._replaceAllArray = _replaceAllArray;
var _default = {
  _replaceAllArray: _replaceAllArray
};
exports["default"] = _default;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfAnyFirst = void 0;

var _indexOfFirst2 = __webpack_require__(98);

var _loop = __webpack_require__(38);

var _indexOfAnyFirst = function _indexOfAnyFirst(str, searchArray) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var result = Infinity;
  var searchIndex = -1;
  (0, _loop.__loop)(searchArray)(function (search, index) {
    var findIndex = (0, _indexOfFirst2._indexOfFirst)(str, search, indexStart);

    if (findIndex !== -1) {
      if (findIndex < result) {
        result = findIndex;
        searchIndex = index;
      }
    }
  });

  if (result === Infinity) {
    return {
      index: -1,
      searchIndex: -1
    };
  }

  return {
    index: result,
    searchIndex: searchIndex
  };
};

exports._indexOfAnyFirst = _indexOfAnyFirst;
var _default = {
  _indexOfAnyFirst: _indexOfAnyFirst
};
exports["default"] = _default;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.or = exports._or = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToValueArray = exports.objectValues = exports._objectValues = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _hasOwn2 = __webpack_require__(13);

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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.splitCommaItems = exports._splitCommaItems = void 0;

var _type = __webpack_require__(5);

var _split2 = __webpack_require__(36);

var _string_common = __webpack_require__(73);

var _includes = __webpack_require__(9);

var _splitCommaItems = function _splitCommaItems(str) {
  if ((0, _string_common._trimBothEnds)(str) === '') {
    return [];
  }

  var result = (0, _split2._split)(str, ',', _split2._split.excludeEmptyStr.last, _split2._split.executeConvert.trimSpaceCrlf);

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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fixProp = exports.fixProperty = exports._fixProperty = void 0;

var _type = __webpack_require__(5);

var _replaceAll2 = __webpack_require__(10);

var _isObjectParameter = __webpack_require__(15);

var _hasOwn2 = __webpack_require__(13);

var _propertyCount2 = __webpack_require__(12);

var _splitCommaItems2 = __webpack_require__(104);

var _includes = __webpack_require__(9);

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToKeyValueArray = exports.objectEntries = void 0;

var _isType = __webpack_require__(11);

var _hasOwn2 = __webpack_require__(13);

var _objectEntries2 = __webpack_require__(61);

/**
 * objectEntries
 */
var objectEntries = function objectEntries(object) {
  if (!(0, _isType.isObjectLike)(object)) {
    throw new TypeError('objectEntries args(object) is not object');
  }

  return (0, _objectEntries2._objectEntries)(object);
};

exports.objectEntries = objectEntries;
var objectToKeyValueArray = objectEntries;
exports.objectToKeyValueArray = objectToKeyValueArray;
var _default = {
  objectEntries: objectEntries,
  objectToKeyValueArray: objectToKeyValueArray
};
exports["default"] = _default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._objectFromEntries = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * objectFromEntries
 */
var _objectFromEntries = function _objectFromEntries(entries) {
  var result = {};

  for (var i = 0, l = entries.length; i < l; i += 1) {
    var _entries$i = _slicedToArray(entries[i], 2),
        key = _entries$i[0],
        value = _entries$i[1];

    result[key] = value;
  }

  return result;
};

exports._objectFromEntries = _objectFromEntries;
var _default = {
  _objectFromEntries: _objectFromEntries
};
exports["default"] = _default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectFromKeyValueArray = exports.objectFromEntries = void 0;

var _isType = __webpack_require__(11);

var _array_common = __webpack_require__(50);

var _objectFromEntries2 = __webpack_require__(107);

/**
 * objectFromEntries
 */
var objectFromEntries = function objectFromEntries(entries) {
  if (!(0, _isType.isArray)(entries)) {
    throw new TypeError('objectFromEntries args(entriesArray) is not array');
  }

  if (!(entries.length === 0 || (0, _array_common._all)(entries, function (element) {
    return (0, _isType.isArray)(element) && element.length === 2;
  }))) {
    throw new TypeError('objectFromEntries args(entries) element is not array.length === 2');
  }

  return (0, _objectFromEntries2._objectFromEntries)(entries);
};

exports.objectFromEntries = objectFromEntries;
var objectFromKeyValueArray = objectFromEntries;
exports.objectFromKeyValueArray = objectFromKeyValueArray;
var _default = {
  objectFromEntries: objectFromEntries,
  objectFromKeyValueArray: objectFromKeyValueArray
};
exports["default"] = _default;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToKeyArray = exports.objectKeys = exports._objectKeys = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _hasOwn2 = __webpack_require__(13);

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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getProp = exports.getProperty = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _has2 = __webpack_require__(34);

var _splitDotItems2 = __webpack_require__(35);

var _getProperty2 = __webpack_require__(33);

/**
 * getProperty
 */
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

  if (!(0, _type.isObjectLike)(object)) {
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

  return (0, _getProperty2._getProperty)(object, propertyPath, hasOwn, detail);
};

exports.getProperty = getProperty;
var getProp = getProperty;
exports.getProp = getProp;
var _default = {
  getProperty: getProperty,
  getProp: getProp
};
exports["default"] = _default;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._setProperty = void 0;

var _type = __webpack_require__(5);

var _propertyCount2 = __webpack_require__(12);

var _replaceAll2 = __webpack_require__(10);

var _splitCommaItems2 = __webpack_require__(104);

var _splitDotItems2 = __webpack_require__(35);

var _includes = __webpack_require__(9);

var _string_common = __webpack_require__(73);

/**
 * setProperty
 */
var _setProperty = function _setProperty(object, propertyPath, value) {
  var propertyArray = (0, _splitDotItems2._splitDotItems)(propertyPath);

  if (propertyArray.length === 0) {
    throw new Error('setProperty args(propertyPath) is empty string');
  }

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
var _default = {
  _setProperty: _setProperty
};
exports["default"] = _default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setProp = exports.setProperty = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _propertyCount2 = __webpack_require__(12);

var _replaceAll2 = __webpack_require__(10);

var _splitCommaItems2 = __webpack_require__(104);

var _splitDotItems2 = __webpack_require__(35);

var _includes = __webpack_require__(9);

var _string_common = __webpack_require__(73);

var _setProperty2 = __webpack_require__(111);

/**
 * setProperty
 */
var setProperty = function setProperty(object, propertyPath, value) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath, value')) {
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
    value = _object.value;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyPath, 'propertyPath, value')) {
    var _propertyPath = propertyPath;
    propertyPath = _propertyPath.propertyPath;
    value = _propertyPath.value;
  } else if ((0, _isObjectParameter.isObjectParameter)(value, 'value')) {
    var _value = value;
    value = _value.value;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('setProperty args(object) is not object');
  }

  if (!(0, _type.isString)(propertyPath)) {
    throw new TypeError('setProperty args(propertyPath) is not string');
  }

  return (0, _setProperty2._setProperty)(object, propertyPath, value);
};

exports.setProperty = setProperty;
var setProp = setProperty;
exports.setProp = setProp;
var _default = {
  setProperty: setProperty,
  setProp: setProp
};
exports["default"] = _default;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._copyProperty = void 0;

var _type = __webpack_require__(5);

var _propertyCount2 = __webpack_require__(12);

var _replaceAll2 = __webpack_require__(10);

var _splitCommaItems2 = __webpack_require__(104);

var _splitDotItems2 = __webpack_require__(35);

var _includes = __webpack_require__(9);

var _string_common = __webpack_require__(73);

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
var _default = {
  _copyProperty: _copyProperty
};
exports["default"] = _default;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.copyProp = exports.copyProperty = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _propertyCount2 = __webpack_require__(12);

var _replaceAll2 = __webpack_require__(10);

var _splitCommaItems2 = __webpack_require__(104);

var _splitDotItems2 = __webpack_require__(35);

var _includes = __webpack_require__(9);

var _string_common = __webpack_require__(73);

var _copyProperty2 = __webpack_require__(113);

/**
 * copyProperty
 */
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

  return (0, _copyProperty2._copyProperty)(fromObject, propertyNames, toObject);
};

exports.copyProperty = copyProperty;
var copyProp = copyProperty;
exports.copyProp = copyProp;
var _default = {
  copyProperty: copyProperty,
  copyProp: copyProp
};
exports["default"] = _default;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hasOwn = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _hasOwn2 = __webpack_require__(13);

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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propCount = exports.propertyCount = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _propertyCount2 = __webpack_require__(12);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propertyList = exports._propertyList = void 0;

var _isType = __webpack_require__(11);

var _loop = __webpack_require__(60);

var _objectEntries = __webpack_require__(106);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * propertyList
 */
var _propertyList = function _propertyList(object) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    if ((0, _isType.isObject)(value) || (0, _isType.isModule)(value)) {
      return;
    }

    return "".concat((0, _isType.objectToString)(value), ":").concat(_typeof(value));
  };
  var result = '';

  var __propertyList = function __propertyList(object, lineHead) {
    (0, _loop.loop)((0, _objectEntries.objectEntries)(object))(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var output = func(value);

      if ((0, _isType.isString)(output)) {
        result += "".concat(lineHead, ".").concat(key, ":").concat(output, "\n");
      }

      if ((0, _isType.isObject)(value) || (0, _isType.isModule)(value)) {
        __propertyList(value, lineHead + '.' + key);
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clone = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(31);

var _isObjectParameter = __webpack_require__(15);

var _clone2 = __webpack_require__(4);

var _cloneFunc = __webpack_require__(30);

/**
 * clone
 */
var clone = function clone(source, cloneFuncArray) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? clone.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!((0, _type.isUndefined)(cloneFuncArray) || (0, _type.isArray)(cloneFuncArray))) {
    throw new TypeError('clone args(cloneFuncArray) is not array');
  }

  return (0, _clone2._clone)(source, cloneFuncArray);
};

exports.clone = clone;
clone.func = _cloneFunc.__cloneFunc;
var _default = {
  clone: clone
};
exports["default"] = _default;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(31);

var _isObjectParameter = __webpack_require__(15);

var _cloneDeep2 = __webpack_require__(28);

var _cloneFunc = __webpack_require__(30);

var cloneDeep = function cloneDeep(source, cloneFuncArray) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? cloneDeep.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!((0, _type.isUndefined)(cloneFuncArray) || (0, _type.isArray)(cloneFuncArray))) {
    throw new TypeError('cloneDeep args(cloneFuncArray) is not array');
  }

  return (0, _cloneDeep2._cloneDeep)(source, cloneFuncArray);
};

exports.cloneDeep = cloneDeep;
cloneDeep.func = _cloneFunc.__cloneFunc;
var _default = {
  cloneDeep: cloneDeep
};
exports["default"] = _default;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._merge = void 0;

var _isType = __webpack_require__(11);

var _isTypeAll = __webpack_require__(22);

var _loop = __webpack_require__(38);

var _recursive2 = __webpack_require__(63);

var _getProperty2 = __webpack_require__(33);

var _setProperty2 = __webpack_require__(111);

var _returnSecondArgFunc = __webpack_require__(121);

/**
 * merge
 */
var _merge = function _merge() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var targetArray = arguments.length > 1 ? arguments[1] : undefined;
  var func = arguments.length > 2 ? arguments[2] : undefined;
  (0, _loop.__loop)(targetArray)(function (target, targetIndex) {
    (0, _recursive2._recursive)(target, function (targetValue, key, level, path) {
      var propPath = path + '.' + key;
      var sourceValue = (0, _getProperty2._getProperty)(source, propPath);

      if ((0, _isType.isObject)(targetValue)) {
        if (!(0, _isType.isObject)(sourceValue)) {
          (0, _setProperty2._setProperty)(source, propPath, {});
        }

        return targetValue;
      } else if ((0, _isType.isArray)(targetValue)) {
        if (!(0, _isType.isArray)(sourceValue)) {
          (0, _setProperty2._setProperty)(source, propPath, []);
        }

        return targetValue;
      } else {
        if ((0, _isType.isUndefined)(func)) {
          if (!(0, _isType.isUndefined)(targetValue)) {
            (0, _setProperty2._setProperty)(source, propPath, targetValue);
          }
        } else {
          var setValue = func(sourceValue, targetValue, key, level, path, source, targetIndex, targetArray);

          if (!(0, _isType.isUndefined)(setValue)) {
            (0, _setProperty2._setProperty)(source, propPath, setValue);
          }
        }
      }
    });
  });
  return source;
};

exports._merge = _merge;
var _default = {
  _merge: _merge
};
exports["default"] = _default;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__returnSecondArgFunc = void 0;

/**
 * returnSecondArgFunc
 */
var __returnSecondArgFunc = function __returnSecondArgFunc(_, v) {
  return v;
};

exports.__returnSecondArgFunc = __returnSecondArgFunc;
var _default = {
  __returnSecondArgFunc: __returnSecondArgFunc
};
exports["default"] = _default;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.merge = void 0;

var _isType = __webpack_require__(11);

var _isTypeArray = __webpack_require__(23);

var _isObjectParameter = __webpack_require__(15);

var _returnFirstArgFunc = __webpack_require__(27);

var _merge2 = __webpack_require__(120);

/**
 * merge
 */
var merge = function merge(source, targetArray, func) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source, targetArray', 'func')) {
    var _source = source;
    source = _source.source;
    targetArray = _source.targetArray;
    func = _source.func;
  } else if ((0, _isObjectParameter.isObjectParameter)(targetArray, 'targetArray', 'func')) {
    var _targetArray = targetArray;
    targetArray = _targetArray.targetArray;
    func = _targetArray.func;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func')) {
    var _func = func;
    func = _func.func;
  }

  if (!((0, _isType.isObject)(source) || (0, _isType.isArray)(source))) {
    throw new TypeError('merge args(source) is not [Object|Array]');
  }

  if (!(0, _isType.isArray)(targetArray)) {
    throw new TypeError('merge args(targetArray) is not array');
  }

  if (!(targetArray.length === 0 || (0, _isTypeArray.isObjectArray)(targetArray) || (0, _isTypeArray.isArrayArray)(targetArray))) {
    throw new TypeError('merge args(targetArray) element is not [Object|Array]');
  }

  if (!((0, _isType.isUndefined)(func) || (0, _isType.isFunction)(func))) {
    throw new TypeError('merge args(func) is not function');
  }

  return (0, _merge2._merge)(source, targetArray, func);
};

exports.merge = merge;
var _default = {
  merge: merge
};
exports["default"] = _default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotExceptArray = exports.isNotObjTypeArray = exports.isNotEmptyObjArray = exports.isNotObjLikeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isNotArrayTypeArray = exports.isNotObjectTypeArray = exports.isExceptArray = exports.isObjTypeArray = exports.isEmptyObjArray = exports.isObjLikeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isArrayTypeArray = exports.isObjectTypeArray = exports.isNotExceptAll = exports.isNotObjTypeAll = exports.isNotEmptyObjAll = exports.isNotObjLikeAll = exports.isNotObjFromNullAll = exports.isNotObjNormalAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isNotArrayTypeAll = exports.isNotObjectTypeAll = exports.isExceptAll = exports.isObjTypeAll = exports.isEmptyObjAll = exports.isObjLikeAll = exports.isObjFromNullAll = exports.isObjNormalAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isArrayTypeAll = exports.isObjectTypeAll = exports.isNotExcept = exports.isExcept = exports.isNotObjType = exports.isNotEmptyObj = exports.isNotObjLike = exports.isNotObjFromNull = exports.isNotObjNormal = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isNotArrayType = exports.isNotObjectType = exports.isObjType = exports.isEmptyObj = exports.isObjLike = exports.isObjFromNull = exports.isObjNormal = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isArrayType = exports.isObjectType = void 0;

var _isType = _interopRequireDefault(__webpack_require__(11));

var _isException = _interopRequireDefault(__webpack_require__(14));

var _isSymbol = _interopRequireDefault(__webpack_require__(16));

var _isMap = _interopRequireDefault(__webpack_require__(17));

var _isSet = _interopRequireDefault(__webpack_require__(20));

var _isTypeAll = _interopRequireDefault(__webpack_require__(22));

var _isTypeArray = _interopRequireDefault(__webpack_require__(23));

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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.testCounter = exports.expect = exports.checkNotEqual = exports.checkEqual = exports.checkCompare = exports.test = exports.it = exports.describe = exports.testFrame = void 0;

var _type = __webpack_require__(5);

var _array = __webpack_require__(74);

var _string = __webpack_require__(125);

var _compare = __webpack_require__(153);

var _platform = __webpack_require__(7);

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

var checkCompare = function checkCompare(compareFunc, a, b, result) {
  var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

  if (!(0, _type.isString)(message)) {
    throw new TypeError("checkCompare args:message(=".concat(message, ") is not string"));
  }

  var conditionExpressText = '';

  if (result === true) {
    conditionExpressText = 'A !== B';
  } else if (result === false) {
    conditionExpressText = 'A === B';
  } else {
    throw new Error("checkCompare args:result(=".concat(result, ") is not boolean"));
  }

  testFrame.counter += 1;

  if (compareFunc(a, b) === result) {
    return true;
  }

  var indent = (0, _string._repeat)(' ', testFrame.describeArray.length * 2);
  var output = (0, _array._map)(testFrame.describeArray, function (desc, i) {
    return (0, _string._repeat)('  ', i) + "describe: ".concat(desc);
  }).join('\n') + '\n';
  output += "".concat(indent, "Test: ").concat(testFrame.testName, "\n") + "".concat(indent, "  Counter: ").concat(testFrame.counter, "\n") + (message === '' ? '' : "".concat(indent, "  Message: ").concat(message, "\n")) + "".concat(indent, "  ").concat(conditionExpressText, "\n") + "".concat(indent, "  A = ").concat(outputValue(a), "\n") + "".concat(indent, "  B = ").concat(outputValue(b));
  console.log(output);
  return false;
};

exports.checkCompare = checkCompare;

var checkEqual = function checkEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return checkCompare(_compare.equalDeep, a, b, true, message);
};

exports.checkEqual = checkEqual;

var checkNotEqual = function checkNotEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return checkCompare(_compare.equalDeep, a, b, false, message);
};

exports.checkNotEqual = checkNotEqual;

var expect = function expect(a) {
  var toBe = function toBe(b) {
    return checkCompare(function (v1, v2) {
      return v1 === v2;
    }, a, b, true);
  };

  var toEqual = function toEqual(b) {
    return checkEqual(a, b);
  };

  var notToBe = function notToBe(b) {
    return checkCompare(function (v1, v2) {
      return v1 !== v2;
    }, a, b, true);
  };

  var notToEqual = function notToEqual(b) {
    return checkCompare(function (v1, v2) {
      return !(0, _compare.equalDeep)(v1, v2);
    }, a, b, true);
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
  testFrame: testFrame,
  checkCompare: checkCompare,
  checkEqual: checkEqual,
  checkNotEqual: checkNotEqual,
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.escapeRegExp = exports.paddingLast = exports.paddingFirst = exports.splitDotItems = exports.splitCommaItems = exports.split = exports.tagOuterLast = exports.tagInnerLast = exports.tagOuterFirst = exports.tagInnerFirst = exports.subLastDelimLast = exports.subLastDelimFirst = exports.subFirstDelimLast = exports.subFirstDelimFirst = exports.matchFormat = exports.replaceAllArray = exports.replaceAllRepeat = exports.replaceAll = exports.add = exports.insert = exports.deleteLast = exports.deleteFirst = exports.deleteLength = exports.deleteIndex = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.trimBothEnds = exports.trimLast = exports.trimFirst = exports.excludeBothEnds = exports.excludeLast = exports.excludeFirst = exports.includeBothEnds = exports.includeLast = exports.includeFirst = exports.isBothEnds = exports.isLast = exports.isFirst = exports.includeCount = exports.indexOfAnyLast = exports.indexOfAnyFirst = exports.indexOfLast = exports.indexOfFirst = exports.isUpperCase = exports.isLowerCase = exports.repeat = exports._escapeRegExp = exports._paddingLast = exports._paddingFirst = exports._splitDotItems = exports._splitCommaItems = exports._split = exports._tagOuterLast = exports._tagInnerLast = exports._tagOuterFirst = exports._tagInnerFirst = exports._subLastDelimLast = exports._subLastDelimFirst = exports._subFirstDelimLast = exports._subFirstDelimFirst = exports._matchFormat = exports._replaceAllArray = exports._replaceAllRepeat = exports._replaceAll = exports._add = exports._insert = exports._deleteLast = exports._deleteFirst = exports._deleteLength = exports._deleteIndex = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._trimBothEnds = exports._trimLast = exports._trimFirst = exports._excludeBothEnds = exports._excludeLast = exports._excludeFirst = exports._includeBothEnds = exports._includeLast = exports._includeFirst = exports._isBothEnds = exports._isLast = exports._isFirst = exports._includeCount = exports._indexOfAnyLast = exports._indexOfAnyFirst = exports._indexOfLast = exports._indexOfFirst = exports._isUpperCase = exports._isLowerCase = exports._repeat = void 0;

var _string_common = _interopRequireDefault(__webpack_require__(73));

var _indexOfFirst2 = _interopRequireDefault(__webpack_require__(98));

var _indexOfFirst3 = _interopRequireDefault(__webpack_require__(126));

var _indexOfLast2 = _interopRequireDefault(__webpack_require__(99));

var _indexOfLast3 = _interopRequireDefault(__webpack_require__(127));

var _indexOfAnyFirst2 = _interopRequireDefault(__webpack_require__(101));

var _indexOfAnyFirst3 = _interopRequireDefault(__webpack_require__(128));

var _indexOfAnyLast2 = _interopRequireDefault(__webpack_require__(129));

var _indexOfAnyLast3 = _interopRequireDefault(__webpack_require__(130));

var _includeCount2 = _interopRequireDefault(__webpack_require__(131));

var _includeCount3 = _interopRequireDefault(__webpack_require__(132));

var _replaceAll2 = _interopRequireDefault(__webpack_require__(10));

var _replaceAll3 = _interopRequireDefault(__webpack_require__(133));

var _replaceAllRepeat2 = _interopRequireDefault(__webpack_require__(134));

var _replaceAllRepeat3 = _interopRequireDefault(__webpack_require__(135));

var _replaceAllArray2 = _interopRequireDefault(__webpack_require__(100));

var _replaceAllArray3 = _interopRequireDefault(__webpack_require__(136));

var _matchFormat2 = _interopRequireDefault(__webpack_require__(137));

var _subFirstDelimFirst2 = _interopRequireDefault(__webpack_require__(138));

var _subFirstDelimLast2 = _interopRequireDefault(__webpack_require__(139));

var _subLastDelimFirst2 = _interopRequireDefault(__webpack_require__(140));

var _subLastDelimLast2 = _interopRequireDefault(__webpack_require__(141));

var _tagInnerFirst2 = _interopRequireDefault(__webpack_require__(142));

var _tagOuterFirst2 = _interopRequireDefault(__webpack_require__(143));

var _tagInnerLast2 = _interopRequireDefault(__webpack_require__(144));

var _tagOuterLast2 = _interopRequireDefault(__webpack_require__(145));

var _split2 = _interopRequireDefault(__webpack_require__(36));

var _split3 = _interopRequireDefault(__webpack_require__(146));

var _splitCommaItems2 = _interopRequireDefault(__webpack_require__(104));

var _splitDotItems2 = _interopRequireDefault(__webpack_require__(35));

var _paddingFirst2 = _interopRequireDefault(__webpack_require__(147));

var _paddingFirst3 = _interopRequireDefault(__webpack_require__(148));

var _paddingLast2 = _interopRequireDefault(__webpack_require__(149));

var _paddingLast3 = _interopRequireDefault(__webpack_require__(150));

var _escapeRegExp2 = _interopRequireDefault(__webpack_require__(151));

var _escapeRegExp3 = _interopRequireDefault(__webpack_require__(152));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stringJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _string_common["default"]), _indexOfFirst2["default"]), _indexOfFirst3["default"]), _indexOfLast2["default"]), _indexOfLast3["default"]), _indexOfAnyFirst2["default"]), _indexOfAnyFirst3["default"]), _indexOfAnyLast2["default"]), _indexOfAnyLast3["default"]), _includeCount2["default"]), _includeCount3["default"]), _replaceAll2["default"]), _replaceAll3["default"]), _replaceAllRepeat2["default"]), _replaceAllRepeat3["default"]), _replaceAllArray2["default"]), _replaceAllArray3["default"]), _matchFormat2["default"]), _subFirstDelimFirst2["default"]), _subFirstDelimLast2["default"]), _subLastDelimFirst2["default"]), _subLastDelimLast2["default"]), _tagInnerFirst2["default"]), _tagOuterFirst2["default"]), _tagInnerLast2["default"]), _tagOuterLast2["default"]), _split2["default"]), _split3["default"]), _splitCommaItems2["default"]), _splitDotItems2["default"]), _paddingFirst2["default"]), _paddingFirst3["default"]), _paddingLast2["default"]), _paddingLast3["default"]), _escapeRegExp2["default"]), _escapeRegExp3["default"]);

var _repeat = stringJs._repeat,
    _isLowerCase = stringJs._isLowerCase,
    _isUpperCase = stringJs._isUpperCase,
    _indexOfFirst = stringJs._indexOfFirst,
    _indexOfLast = stringJs._indexOfLast,
    _indexOfAnyFirst = stringJs._indexOfAnyFirst,
    _indexOfAnyLast = stringJs._indexOfAnyLast,
    _includeCount = stringJs._includeCount,
    _isFirst = stringJs._isFirst,
    _isLast = stringJs._isLast,
    _isBothEnds = stringJs._isBothEnds,
    _includeFirst = stringJs._includeFirst,
    _includeLast = stringJs._includeLast,
    _includeBothEnds = stringJs._includeBothEnds,
    _excludeFirst = stringJs._excludeFirst,
    _excludeLast = stringJs._excludeLast,
    _excludeBothEnds = stringJs._excludeBothEnds,
    _trimFirst = stringJs._trimFirst,
    _trimLast = stringJs._trimLast,
    _trimBothEnds = stringJs._trimBothEnds,
    _subIndex = stringJs._subIndex,
    _subLength = stringJs._subLength,
    _subFirst = stringJs._subFirst,
    _subLast = stringJs._subLast,
    _deleteIndex = stringJs._deleteIndex,
    _deleteLength = stringJs._deleteLength,
    _deleteFirst = stringJs._deleteFirst,
    _deleteLast = stringJs._deleteLast,
    _insert = stringJs._insert,
    _add = stringJs._add,
    _replaceAll = stringJs._replaceAll,
    _replaceAllRepeat = stringJs._replaceAllRepeat,
    _replaceAllArray = stringJs._replaceAllArray,
    _matchFormat = stringJs._matchFormat,
    _subFirstDelimFirst = stringJs._subFirstDelimFirst,
    _subFirstDelimLast = stringJs._subFirstDelimLast,
    _subLastDelimFirst = stringJs._subLastDelimFirst,
    _subLastDelimLast = stringJs._subLastDelimLast,
    _tagInnerFirst = stringJs._tagInnerFirst,
    _tagOuterFirst = stringJs._tagOuterFirst,
    _tagInnerLast = stringJs._tagInnerLast,
    _tagOuterLast = stringJs._tagOuterLast,
    _split = stringJs._split,
    _splitCommaItems = stringJs._splitCommaItems,
    _splitDotItems = stringJs._splitDotItems,
    _paddingFirst = stringJs._paddingFirst,
    _paddingLast = stringJs._paddingLast,
    _escapeRegExp = stringJs._escapeRegExp;
exports._escapeRegExp = _escapeRegExp;
exports._paddingLast = _paddingLast;
exports._paddingFirst = _paddingFirst;
exports._splitDotItems = _splitDotItems;
exports._splitCommaItems = _splitCommaItems;
exports._split = _split;
exports._tagOuterLast = _tagOuterLast;
exports._tagInnerLast = _tagInnerLast;
exports._tagOuterFirst = _tagOuterFirst;
exports._tagInnerFirst = _tagInnerFirst;
exports._subLastDelimLast = _subLastDelimLast;
exports._subLastDelimFirst = _subLastDelimFirst;
exports._subFirstDelimLast = _subFirstDelimLast;
exports._subFirstDelimFirst = _subFirstDelimFirst;
exports._matchFormat = _matchFormat;
exports._replaceAllArray = _replaceAllArray;
exports._replaceAllRepeat = _replaceAllRepeat;
exports._replaceAll = _replaceAll;
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
exports._includeCount = _includeCount;
exports._indexOfAnyLast = _indexOfAnyLast;
exports._indexOfAnyFirst = _indexOfAnyFirst;
exports._indexOfLast = _indexOfLast;
exports._indexOfFirst = _indexOfFirst;
exports._isUpperCase = _isUpperCase;
exports._isLowerCase = _isLowerCase;
exports._repeat = _repeat;
var repeat = stringJs.repeat,
    isLowerCase = stringJs.isLowerCase,
    isUpperCase = stringJs.isUpperCase,
    indexOfFirst = stringJs.indexOfFirst,
    indexOfLast = stringJs.indexOfLast,
    indexOfAnyFirst = stringJs.indexOfAnyFirst,
    indexOfAnyLast = stringJs.indexOfAnyLast,
    includeCount = stringJs.includeCount,
    isFirst = stringJs.isFirst,
    isLast = stringJs.isLast,
    isBothEnds = stringJs.isBothEnds,
    includeFirst = stringJs.includeFirst,
    includeLast = stringJs.includeLast,
    includeBothEnds = stringJs.includeBothEnds,
    excludeFirst = stringJs.excludeFirst,
    excludeLast = stringJs.excludeLast,
    excludeBothEnds = stringJs.excludeBothEnds,
    trimFirst = stringJs.trimFirst,
    trimLast = stringJs.trimLast,
    trimBothEnds = stringJs.trimBothEnds,
    subIndex = stringJs.subIndex,
    subLength = stringJs.subLength,
    subFirst = stringJs.subFirst,
    subLast = stringJs.subLast,
    deleteIndex = stringJs.deleteIndex,
    deleteLength = stringJs.deleteLength,
    deleteFirst = stringJs.deleteFirst,
    deleteLast = stringJs.deleteLast,
    insert = stringJs.insert,
    add = stringJs.add,
    replaceAll = stringJs.replaceAll,
    replaceAllRepeat = stringJs.replaceAllRepeat,
    replaceAllArray = stringJs.replaceAllArray,
    matchFormat = stringJs.matchFormat,
    subFirstDelimFirst = stringJs.subFirstDelimFirst,
    subFirstDelimLast = stringJs.subFirstDelimLast,
    subLastDelimFirst = stringJs.subLastDelimFirst,
    subLastDelimLast = stringJs.subLastDelimLast,
    tagInnerFirst = stringJs.tagInnerFirst,
    tagOuterFirst = stringJs.tagOuterFirst,
    tagInnerLast = stringJs.tagInnerLast,
    tagOuterLast = stringJs.tagOuterLast,
    split = stringJs.split,
    splitCommaItems = stringJs.splitCommaItems,
    splitDotItems = stringJs.splitDotItems,
    paddingFirst = stringJs.paddingFirst,
    paddingLast = stringJs.paddingLast,
    escapeRegExp = stringJs.escapeRegExp;
exports.escapeRegExp = escapeRegExp;
exports.paddingLast = paddingLast;
exports.paddingFirst = paddingFirst;
exports.splitDotItems = splitDotItems;
exports.splitCommaItems = splitCommaItems;
exports.split = split;
exports.tagOuterLast = tagOuterLast;
exports.tagInnerLast = tagInnerLast;
exports.tagOuterFirst = tagOuterFirst;
exports.tagInnerFirst = tagInnerFirst;
exports.subLastDelimLast = subLastDelimLast;
exports.subLastDelimFirst = subLastDelimFirst;
exports.subFirstDelimLast = subFirstDelimLast;
exports.subFirstDelimFirst = subFirstDelimFirst;
exports.matchFormat = matchFormat;
exports.replaceAllArray = replaceAllArray;
exports.replaceAllRepeat = replaceAllRepeat;
exports.replaceAll = replaceAll;
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
exports.includeCount = includeCount;
exports.indexOfAnyLast = indexOfAnyLast;
exports.indexOfAnyFirst = indexOfAnyFirst;
exports.indexOfLast = indexOfLast;
exports.indexOfFirst = indexOfFirst;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.repeat = repeat;
var _default = {
  _repeat: _repeat,
  _isLowerCase: _isLowerCase,
  _isUpperCase: _isUpperCase,
  _indexOfFirst: _indexOfFirst,
  _indexOfLast: _indexOfLast,
  _indexOfAnyFirst: _indexOfAnyFirst,
  _indexOfAnyLast: _indexOfAnyLast,
  _includeCount: _includeCount,
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
  _replaceAll: _replaceAll,
  _replaceAllRepeat: _replaceAllRepeat,
  _replaceAllArray: _replaceAllArray,
  _matchFormat: _matchFormat,
  _subFirstDelimFirst: _subFirstDelimFirst,
  _subFirstDelimLast: _subFirstDelimLast,
  _subLastDelimFirst: _subLastDelimFirst,
  _subLastDelimLast: _subLastDelimLast,
  _tagInnerFirst: _tagInnerFirst,
  _tagOuterFirst: _tagOuterFirst,
  _tagInnerLast: _tagInnerLast,
  _tagOuterLast: _tagOuterLast,
  _split: _split,
  _splitCommaItems: _splitCommaItems,
  _splitDotItems: _splitDotItems,
  _paddingFirst: _paddingFirst,
  _paddingLast: _paddingLast,
  _escapeRegExp: _escapeRegExp,
  repeat: repeat,
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  indexOfFirst: indexOfFirst,
  indexOfLast: indexOfLast,
  indexOfAnyFirst: indexOfAnyFirst,
  indexOfAnyLast: indexOfAnyLast,
  includeCount: includeCount,
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
  add: add,
  replaceAll: replaceAll,
  replaceAllRepeat: replaceAllRepeat,
  replaceAllArray: replaceAllArray,
  matchFormat: matchFormat,
  subFirstDelimFirst: subFirstDelimFirst,
  subFirstDelimLast: subFirstDelimLast,
  subLastDelimFirst: subLastDelimFirst,
  subLastDelimLast: subLastDelimLast,
  tagInnerFirst: tagInnerFirst,
  tagOuterFirst: tagOuterFirst,
  tagInnerLast: tagInnerLast,
  tagOuterLast: tagOuterLast,
  split: split,
  splitCommaItems: splitCommaItems,
  splitDotItems: splitDotItems,
  paddingFirst: paddingFirst,
  paddingLast: paddingLast,
  escapeRegExp: escapeRegExp
};
exports["default"] = _default;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfFirst = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

var _array = __webpack_require__(74);

var _indexOfFirst2 = __webpack_require__(98);

/**
 * indexOfFirst
 */
var indexOfFirst = function indexOfFirst(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
    var _str$indexStart = _str.indexStart;
    indexStart = _str$indexStart === void 0 ? 0 : _str$indexStart;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('indexOfFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(search)) {
    throw new TypeError('indexOfFirst args(search) is not string');
  }

  if (!(0, _isType.isInteger)(indexStart)) {
    throw new TypeError('indexOfFirst args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfFirst args(indexStart) must be from 0 to str.length - 1');
  }

  return (0, _indexOfFirst2._indexOfFirst)(str, search, indexStart);
};

exports.indexOfFirst = indexOfFirst;
var _default = {
  indexOfFirst: indexOfFirst
};
exports["default"] = _default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfLast = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

var _array = __webpack_require__(74);

var _indexOfLast2 = __webpack_require__(99);

/**
 * indexOfLast
 */
var indexOfLast = function indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
    var _str$indexStart = _str.indexStart;
    indexStart = _str$indexStart === void 0 ? (0, _array._max)([0, str.length - 1]) : _str$indexStart;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('indexOfLast args(str) is not string');
  }

  if (!(0, _isType.isString)(search)) {
    throw new TypeError('indexOfLast args(search) is not string');
  }

  if (!(0, _isType.isInteger)(indexStart)) {
    throw new TypeError('indexOfLast args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfLast args(indexStart) must be from 0 to str.length - 1');
  }

  return (0, _indexOfLast2._indexOfLast)(str, search, indexStart);
};

exports.indexOfLast = indexOfLast;
var _default = {
  indexOfLast: indexOfLast
};
exports["default"] = _default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfAnyFirst = void 0;

var _isType = __webpack_require__(11);

var _isTypeArray = __webpack_require__(23);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

var _array = __webpack_require__(74);

var _indexOfAnyFirst2 = __webpack_require__(101);

/**
 * indexOfAnyFirst
 */
var indexOfAnyFirst = function indexOfAnyFirst(str, searchArray) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
    var _str$indexStart = _str.indexStart;
    indexStart = _str$indexStart === void 0 ? 0 : _str$indexStart;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('indexOfAnyFirst args(str) is not string');
  }

  if (!(0, _isTypeArray.isStringArray)(searchArray)) {
    throw new TypeError('indexOfAnyFirst args(searchArray) is not string array');
  }

  if (!(0, _isType.isInteger)(indexStart)) {
    throw new TypeError('indexOfAnyFirst args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfAnyFirst args(indexStart) must be from 0 to str.length - 1');
  }

  return (0, _indexOfAnyFirst2._indexOfAnyFirst)(str, searchArray, indexStart);
};

exports.indexOfAnyFirst = indexOfAnyFirst;
var _default = {
  indexOfAnyFirst: indexOfAnyFirst
};
exports["default"] = _default;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfAnyLast = void 0;

var _indexOfLast2 = __webpack_require__(99);

var _loop = __webpack_require__(38);

var _indexOfAnyLast = function _indexOfAnyLast(str, searchArray) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);
  var result = -1;
  var searchIndex = -1;
  (0, _loop.__loop)(searchArray)(function (search, index) {
    var findIndex = (0, _indexOfLast2._indexOfLast)(str, search, indexStart);

    if (findIndex !== -1) {
      if (result < findIndex) {
        result = findIndex;
        searchIndex = index;
      }
    }
  });

  if (result === -1) {
    return {
      index: -1,
      searchIndex: -1
    };
  }

  return {
    index: result,
    searchIndex: searchIndex
  };
};

exports._indexOfAnyLast = _indexOfAnyLast;
var _default = {
  _indexOfAnyLast: _indexOfAnyLast
};
exports["default"] = _default;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfAnyLast = void 0;

var _isType = __webpack_require__(11);

var _isTypeArray = __webpack_require__(23);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

var _array = __webpack_require__(74);

var _indexOfAnyLast2 = __webpack_require__(129);

/**
 * indexOfAnyLast
 */
var indexOfAnyLast = function indexOfAnyLast(str, searchArray) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
    var _str$indexStart = _str.indexStart;
    indexStart = _str$indexStart === void 0 ? (0, _array._max)([0, str.length - 1]) : _str$indexStart;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('indexOfAnyLast args(str) is not string');
  }

  if (!(0, _isTypeArray.isStringArray)(searchArray)) {
    throw new TypeError('indexOfAnyLast args(searchArray) is not string array');
  }

  if (!(0, _isType.isInteger)(indexStart)) {
    throw new TypeError('indexOfAnyLast args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfAnyLast args(indexStart) must be from 0 to str.length - 1');
  }

  return (0, _indexOfAnyLast2._indexOfAnyLast)(str, searchArray, indexStart);
};

exports.indexOfAnyLast = indexOfAnyLast;
var _default = {
  indexOfAnyLast: indexOfAnyLast
};
exports["default"] = _default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._includeCount = void 0;

var _indexOfFirst2 = __webpack_require__(98);

/**
 * includeCount
 */
var _includeCount = function _includeCount(str, search) {
  var result = 0;
  var index = 0;

  do {
    index = (0, _indexOfFirst2._indexOfFirst)(str, search, index);

    if (index === -1) {
      break;
    }

    index += search.length;
    result += 1;
  } while (true);

  return result;
};

exports._includeCount = _includeCount;
var _default = {
  _includeCount: _includeCount
};
exports["default"] = _default;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includeCount = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _includeCount2 = __webpack_require__(131);

/**
 * includeCount
 */
var includeCount = function includeCount(str, search) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
  } else if ((0, _isObjectParameter.isObjectParameter)(search, 'search')) {
    var _search = search;
    search = _search.search;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError("includeCount args(str:".concat(str, ") is not string"));
  }

  if (!(0, _isType.isString)(search)) {
    throw new TypeError("includeCount args(search:".concat(search, ") is not string"));
  }

  return (0, _includeCount2._includeCount)(str, search);
};

exports.includeCount = includeCount;
var _default = {
  includeCount: includeCount
};
exports["default"] = _default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _replaceAll2 = __webpack_require__(10);

/**
 * replaceAll
 */
var replaceAll = function replaceAll(str, before, after) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, before, after')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
  } else if ((0, _isObjectParameter.isObjectParameter)(before, 'before, after')) {
    var _before = before;
    before = _before.before;
    after = _before.after;
  } else if ((0, _isObjectParameter.isObjectParameter)(after, 'after')) {
    var _after = after;
    after = _after.after;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError("replaceAll args(str:".concat(str, ") is not string"));
  }

  if (str === '') {
    throw new TypeError("replaceAll args(str) is empty string");
  }

  if (!(0, _type.isString)(before)) {
    throw new TypeError("replaceAll args(before:".concat(before, ") is not string"));
  }

  if (before === '') {
    throw new TypeError("replaceAll args(before) is empty string");
  }

  if (!(0, _type.isString)(after)) {
    throw new TypeError("replaceAll args(after:".concat(after, ") is not string"));
  }

  return (0, _replaceAll2._replaceAll)(str, before, after);
};

exports.replaceAll = replaceAll;
var _default = {
  replaceAll: replaceAll
};
exports["default"] = _default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._replaceAllRepeat = void 0;

var _includes = __webpack_require__(9);

var _replaceAll2 = __webpack_require__(10);

/**
 * replaceAllRepeat
 */
var _replaceAllRepeat = function _replaceAllRepeat(str, before, after) {
  var maxCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var result = str;

  if (before === '') {
    return result;
  }

  if (maxCount <= 0) {
    maxCount = Infinity;
  }

  var count = 0;

  while ((0, _includes.__includes)(result, before)) {
    result = (0, _replaceAll2._replaceAll)(result, before, after);
    count += 1;

    if (maxCount <= count) {
      break;
    }
  }

  return result;
};

exports._replaceAllRepeat = _replaceAllRepeat;
var _default = {
  _replaceAllRepeat: _replaceAllRepeat
};
exports["default"] = _default;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAllRepeat = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _includes = __webpack_require__(9);

var _replaceAllRepeat2 = __webpack_require__(134);

/**
 * replaceAllRepeat
 */
var replaceAllRepeat = function replaceAllRepeat(str, before, after) {
  var maxCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, before, after', 'maxCount')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
    var _str$maxCount = _str.maxCount;
    maxCount = _str$maxCount === void 0 ? 0 : _str$maxCount;
  } else if ((0, _isObjectParameter.isObjectParameter)(before, 'before, after', 'maxCount')) {
    var _before = before;
    before = _before.before;
    after = _before.after;
    var _before$maxCount = _before.maxCount;
    maxCount = _before$maxCount === void 0 ? 0 : _before$maxCount;
  } else if ((0, _isObjectParameter.isObjectParameter)(after, 'after', 'maxCount')) {
    var _after = after;
    after = _after.after;
    var _after$maxCount = _after.maxCount;
    maxCount = _after$maxCount === void 0 ? 0 : _after$maxCount;
  } else if ((0, _isObjectParameter.isObjectParameter)(maxCount, 'maxCount')) {
    var _maxCount = maxCount;
    maxCount = _maxCount.maxCount;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError("replaceAllRepeat args(str:".concat(str, ") is not string"));
  }

  if (str === '') {
    throw new TypeError('replaceAllRepeat args(str) is empty string');
  }

  if (!(0, _type.isString)(before)) {
    throw new TypeError("replaceAllRepeat args(before:".concat(before, ") is not string"));
  }

  if (before === '') {
    throw new TypeError('replaceAllRepeat args(before) is empty string');
  }

  if (!(0, _type.isString)(after)) {
    throw new TypeError("replaceAllRepeat args(after:".concat(after, ") is not string"));
  }

  if ((0, _includes.__includes)(after, before)) {
    throw new TypeError('replaceAllRepeat args(before) is includes args(after)');
  }

  if (!(0, _type.isInteger)(maxCount)) {
    throw new TypeError('replaceAllRepeat args(maxCount) is not integer');
  }

  if (!(0 <= maxCount)) {
    throw new TypeError('replaceAllRepeat args(maxCount) is not 0 <= maxCount');
  }

  return (0, _replaceAllRepeat2._replaceAllRepeat)(str, before, after, maxCount);
};

exports.replaceAllRepeat = replaceAllRepeat;
var _default = {
  replaceAllRepeat: replaceAllRepeat
};
exports["default"] = _default;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAllArray = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _replaceAllArray2 = __webpack_require__(100);

var _allMatchAll = __webpack_require__(87);

/**
 * replaceAllArray
 */
var replaceAllArray = function replaceAllArray(str, replaceArray) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, replaceArray', 'detail')) {
    var _str = str;
    str = _str.str;
    replaceArray = _str.replaceArray;
    var _str$detail = _str.detail;
    detail = _str$detail === void 0 ? false : _str$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(replaceArray, 'replaceArray', 'detail')) {
    var _replaceArray = replaceArray;
    replaceArray = _replaceArray.replaceArray;
    var _replaceArray$detail = _replaceArray.detail;
    detail = _replaceArray$detail === void 0 ? false : _replaceArray$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('replaceAllArray args(str) is not string');
  }

  if (!(0, _allMatchAll.allMatchAll)(replaceArray, [_type.isArray, function (element) {
    return (0, _type.isStringArray)(element);
  }, function (element) {
    return element.length === 2;
  }])) {
    throw new TypeError('replaceAllArray args(replaceArray) element is not string array(length is 2)');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('replaceAllArray args(detail) is not boolean');
  }

  return (0, _replaceAllArray2._replaceAllArray)(str, replaceArray, detail);
};

exports.replaceAllArray = replaceAllArray;
var _default = {
  replaceAllArray: replaceAllArray
};
exports["default"] = _default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchFormat = exports._matchFormat = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

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
matchFormat.clear = _matchFormat.clear;
matchFormat.add = _matchFormat.add;
matchFormat.reset = _matchFormat.reset;
var _default = {
  _matchFormat: _matchFormat,
  matchFormat: matchFormat
};
exports["default"] = _default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subFirstDelimFirst = exports._subFirstDelimFirst = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subFirstDelimLast = exports._subFirstDelimLast = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLastDelimFirst = exports._subLastDelimFirst = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLastDelimLast = exports._subLastDelimLast = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagInnerFirst = exports._tagInnerFirst = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

var _tagOuterFirst2 = __webpack_require__(143);

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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterFirst = exports._tagOuterFirst = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagInnerLast = exports._tagInnerLast = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

var _tagOuterLast2 = __webpack_require__(145);

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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterLast = exports._tagOuterLast = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.split = void 0;

var _type = __webpack_require__(5);

var _Enum2 = __webpack_require__(37);

var _loop = __webpack_require__(60);

var _array_operation = __webpack_require__(41);

var _array_common = __webpack_require__(50);

var _string_common = __webpack_require__(73);

var _replaceAll2 = __webpack_require__(10);

var _isObjectParameter = __webpack_require__(15);

var _or2 = __webpack_require__(102);

var _objectValues2 = __webpack_require__(103);

var _split2 = __webpack_require__(36);

/**
 * split
 */
var split = function split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : split.excludeEmptyStr.none;
  var executeConvert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : split.executeConvert.none;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, separator', 'excludeEmptyStr, executeConvert')) {
    var _str = str;
    str = _str.str;
    separator = _str.separator;
    var _str$excludeEmptyStr = _str.excludeEmptyStr;
    excludeEmptyStr = _str$excludeEmptyStr === void 0 ? split.excludeEmptyStr.none : _str$excludeEmptyStr;
    var _str$executeConvert = _str.executeConvert;
    executeConvert = _str$executeConvert === void 0 ? split.executeConvert.none : _str$executeConvert;
  } else if ((0, _isObjectParameter.isObjectParameter)(separator, 'separator', 'excludeEmptyStr, executeConvert')) {
    var _separator = separator;
    separator = _separator.separator;
    var _separator$excludeEmp = _separator.excludeEmptyStr;
    excludeEmptyStr = _separator$excludeEmp === void 0 ? split.excludeEmptyStr.none : _separator$excludeEmp;
    var _separator$executeCon = _separator.executeConvert;
    executeConvert = _separator$executeCon === void 0 ? split.executeConvert.none : _separator$executeCon;
  } else if ((0, _isObjectParameter.isObjectParameter)(excludeEmptyStr, '', 'excludeEmptyStr, executeConvert', 1)) {
    var _excludeEmptyStr = excludeEmptyStr;
    var _excludeEmptyStr$excl = _excludeEmptyStr.excludeEmptyStr;
    excludeEmptyStr = _excludeEmptyStr$excl === void 0 ? split.excludeEmptyStr.none : _excludeEmptyStr$excl;
    var _excludeEmptyStr$exec = _excludeEmptyStr.executeConvert;
    executeConvert = _excludeEmptyStr$exec === void 0 ? split.executeConvert.none : _excludeEmptyStr$exec;
  } else if ((0, _isObjectParameter.isObjectParameter)(executeConvert, 'executeConvert')) {
    var _executeConvert = executeConvert;
    executeConvert = _executeConvert.executeConvert;
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

  if (!(0, _or2._or)(executeConvert, (0, _objectValues2._objectValues)(split.executeConvert))) {
    throw new TypeError('split args(executeConvert) is not ["none","trim","all"]');
  }

  return (0, _split2._split)(str, separator, excludeEmptyStr, executeConvert);
};

exports.split = split;
split.excludeEmptyStr = _split2._split.excludeEmptyStr;
split.executeConvert = _split2._split.executeConvert;
var _default = {
  split: split
};
exports["default"] = _default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._paddingFirst = void 0;

var _string_common = __webpack_require__(73);

/**
 * paddingFirst
 */
var _paddingFirst = function _paddingFirst(str, length, fill) {
  if (length <= str.length) {
    return str;
  }

  var result = (0, _string_common._repeat)(fill, length) + str;
  return (0, _string_common._subLast)(result, length);
};

exports._paddingFirst = _paddingFirst;
var _default = {
  _paddingFirst: _paddingFirst
};
exports["default"] = _default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.paddingFirst = void 0;

var _isObjectParameter = __webpack_require__(15);

var _isType = __webpack_require__(11);

var _paddingFirst2 = __webpack_require__(147);

/**
 * paddingFirst
 */
var paddingFirst = function paddingFirst(str, length, fill) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, length, fill')) {
    var _str = str;
    str = _str.str;
    length = _str.length;
    fill = _str.fill;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length, fill')) {
    var _length = length;
    length = _length.length;
    fill = _length.fill;
  } else if ((0, _isObjectParameter.isObjectParameter)(fill, 'fill')) {
    var _fill = fill;
    fill = _fill.fill;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('paddingFirst args(str) is not string');
  }

  if (!((0, _isType.isInteger)(length) && 1 <= length)) {
    throw new TypeError('paddingFirst args(length) is not integer >= 1');
  }

  if (!(0, _isType.isString)(fill)) {
    throw new TypeError('paddingFirst args(fill) is not string');
  }

  return (0, _paddingFirst2._paddingFirst)(str, length, fill);
};

exports.paddingFirst = paddingFirst;
var _default = {
  paddingFirst: paddingFirst
};
exports["default"] = _default;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._paddingLast = void 0;

var _string_common = __webpack_require__(73);

/**
 * paddingLast
 */
var _paddingLast = function _paddingLast(str, length, fill) {
  if (length <= str.length) {
    return str;
  }

  var result = str + (0, _string_common._repeat)(fill, length);
  return (0, _string_common._subFirst)(result, length);
};

exports._paddingLast = _paddingLast;
var _default = {
  _paddingLast: _paddingLast
};
exports["default"] = _default;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.paddingLast = void 0;

var _isObjectParameter = __webpack_require__(15);

var _isType = __webpack_require__(11);

var _paddingLast2 = __webpack_require__(149);

/**
 * paddingLast
 */
var paddingLast = function paddingLast(str, length, fill) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, length, fill')) {
    var _str = str;
    str = _str.str;
    length = _str.length;
    fill = _str.fill;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length, fill')) {
    var _length = length;
    length = _length.length;
    fill = _length.fill;
  } else if ((0, _isObjectParameter.isObjectParameter)(fill, 'fill')) {
    var _fill = fill;
    fill = _fill.fill;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('paddingLast args(str) is not string');
  }

  if (!((0, _isType.isInteger)(length) && 1 <= length)) {
    throw new TypeError('paddingLast args(length) is not integer >= 1');
  }

  if (!(0, _isType.isString)(fill)) {
    throw new TypeError('paddingLast args(fill) is not string');
  }

  return (0, _paddingLast2._paddingLast)(str, length, fill);
};

exports.paddingLast = paddingLast;
var _default = {
  paddingLast: paddingLast
};
exports["default"] = _default;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._escapeRegExp = void 0;

/**
 * escapeRegExp
 */
var _escapeRegExp = function _escapeRegExp(str) {
  return str.replace(/[\\^$.*+-?(){}[\]\|\/]/g, '\\$&');
};

exports._escapeRegExp = _escapeRegExp;
var _default = {
  _escapeRegExp: _escapeRegExp
};
exports["default"] = _default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.escapeRegExp = void 0;

var _type = __webpack_require__(5);

var _escapeRegExp2 = __webpack_require__(151);

/**
 * escapeRegExp
 */
var escapeRegExp = function escapeRegExp(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('escapeRegExp args(str) is not string');
  }

  return (0, _escapeRegExp2._escapeRegExp)(str);
};

exports.escapeRegExp = escapeRegExp;
var _default = {
  escapeRegExp: escapeRegExp
};
exports["default"] = _default;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports.equal = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = exports.allMatchAll = exports.indexOfMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.allMatchSome = exports.indexOfMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.allMatch = exports.indexOfMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports._equalDeep = exports._equal = exports._includesAll = exports._includesSome = exports._includes = exports._someMatchAll = exports._allMatchAll = exports._indexOfMatchAll = exports._matchAllValue = exports._matchAll = exports._someMatchSome = exports._allMatchSome = exports._indexOfMatchSome = exports._matchSomeValue = exports._matchSome = exports._someMatch = exports._allMatch = exports._indexOfMatch = exports._initialValue = exports._matchValue = exports._match = exports._or = void 0;

var _or2 = _interopRequireDefault(__webpack_require__(102));

var _match2 = _interopRequireDefault(__webpack_require__(89));

var _matchValue2 = _interopRequireDefault(__webpack_require__(154));

var _initialValue2 = _interopRequireDefault(__webpack_require__(155));

var _indexOfMatch2 = _interopRequireDefault(__webpack_require__(158));

var _allMatch2 = _interopRequireDefault(__webpack_require__(159));

var _someMatch2 = _interopRequireDefault(__webpack_require__(160));

var _matchSome2 = _interopRequireDefault(__webpack_require__(157));

var _matchSomeValue2 = _interopRequireDefault(__webpack_require__(156));

var _indexOfMatchSome2 = _interopRequireDefault(__webpack_require__(161));

var _allMatchSome2 = _interopRequireDefault(__webpack_require__(162));

var _someMatchSome2 = _interopRequireDefault(__webpack_require__(163));

var _matchAll2 = _interopRequireDefault(__webpack_require__(88));

var _matchAllValue2 = _interopRequireDefault(__webpack_require__(164));

var _indexOfMatchAll2 = _interopRequireDefault(__webpack_require__(165));

var _allMatchAll2 = _interopRequireDefault(__webpack_require__(87));

var _someMatchAll2 = _interopRequireDefault(__webpack_require__(166));

var _includes2 = _interopRequireDefault(__webpack_require__(167));

var _includes_common = _interopRequireDefault(__webpack_require__(168));

var _equal2 = _interopRequireDefault(__webpack_require__(169));

var _equalDeep2 = _interopRequireDefault(__webpack_require__(170));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compareJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _or2["default"]), _match2["default"]), _matchValue2["default"]), _initialValue2["default"]), _indexOfMatch2["default"]), _allMatch2["default"]), _someMatch2["default"]), _matchSome2["default"]), _matchSomeValue2["default"]), _indexOfMatchSome2["default"]), _allMatchSome2["default"]), _someMatchSome2["default"]), _matchAll2["default"]), _matchAllValue2["default"]), _indexOfMatchAll2["default"]), _allMatchAll2["default"]), _someMatchAll2["default"]), _includes2["default"]), _includes_common["default"]), _equal2["default"]), _equalDeep2["default"]);

var _or = compareJs._or,
    _match = compareJs._match,
    _matchValue = compareJs._matchValue,
    _initialValue = compareJs._initialValue,
    _indexOfMatch = compareJs._indexOfMatch,
    _allMatch = compareJs._allMatch,
    _someMatch = compareJs._someMatch,
    _matchSome = compareJs._matchSome,
    _matchSomeValue = compareJs._matchSomeValue,
    _indexOfMatchSome = compareJs._indexOfMatchSome,
    _allMatchSome = compareJs._allMatchSome,
    _someMatchSome = compareJs._someMatchSome,
    _matchAll = compareJs._matchAll,
    _matchAllValue = compareJs._matchAllValue,
    _indexOfMatchAll = compareJs._indexOfMatchAll,
    _allMatchAll = compareJs._allMatchAll,
    _someMatchAll = compareJs._someMatchAll,
    _includes = compareJs._includes,
    _includesSome = compareJs._includesSome,
    _includesAll = compareJs._includesAll,
    _equal = compareJs._equal,
    _equalDeep = compareJs._equalDeep;
exports._equalDeep = _equalDeep;
exports._equal = _equal;
exports._includesAll = _includesAll;
exports._includesSome = _includesSome;
exports._includes = _includes;
exports._someMatchAll = _someMatchAll;
exports._allMatchAll = _allMatchAll;
exports._indexOfMatchAll = _indexOfMatchAll;
exports._matchAllValue = _matchAllValue;
exports._matchAll = _matchAll;
exports._someMatchSome = _someMatchSome;
exports._allMatchSome = _allMatchSome;
exports._indexOfMatchSome = _indexOfMatchSome;
exports._matchSomeValue = _matchSomeValue;
exports._matchSome = _matchSome;
exports._someMatch = _someMatch;
exports._allMatch = _allMatch;
exports._indexOfMatch = _indexOfMatch;
exports._initialValue = _initialValue;
exports._matchValue = _matchValue;
exports._match = _match;
exports._or = _or;
var or = compareJs.or,
    match = compareJs.match,
    matchValue = compareJs.matchValue,
    initialValue = compareJs.initialValue,
    indexOfMatch = compareJs.indexOfMatch,
    allMatch = compareJs.allMatch,
    someMatch = compareJs.someMatch,
    matchSome = compareJs.matchSome,
    matchSomeValue = compareJs.matchSomeValue,
    indexOfMatchSome = compareJs.indexOfMatchSome,
    allMatchSome = compareJs.allMatchSome,
    someMatchSome = compareJs.someMatchSome,
    matchAll = compareJs.matchAll,
    matchAllValue = compareJs.matchAllValue,
    indexOfMatchAll = compareJs.indexOfMatchAll,
    allMatchAll = compareJs.allMatchAll,
    someMatchAll = compareJs.someMatchAll,
    includes = compareJs.includes,
    includesSome = compareJs.includesSome,
    includesAll = compareJs.includesAll,
    equal = compareJs.equal,
    equalDeep = compareJs.equalDeep;
exports.equalDeep = equalDeep;
exports.equal = equal;
exports.includesAll = includesAll;
exports.includesSome = includesSome;
exports.includes = includes;
exports.someMatchAll = someMatchAll;
exports.allMatchAll = allMatchAll;
exports.indexOfMatchAll = indexOfMatchAll;
exports.matchAllValue = matchAllValue;
exports.matchAll = matchAll;
exports.someMatchSome = someMatchSome;
exports.allMatchSome = allMatchSome;
exports.indexOfMatchSome = indexOfMatchSome;
exports.matchSomeValue = matchSomeValue;
exports.matchSome = matchSome;
exports.someMatch = someMatch;
exports.allMatch = allMatch;
exports.indexOfMatch = indexOfMatch;
exports.initialValue = initialValue;
exports.matchValue = matchValue;
exports.match = match;
exports.or = or;
var _default = {
  _or: _or,
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _indexOfMatch: _indexOfMatch,
  _allMatch: _allMatch,
  _someMatch: _someMatch,
  _matchSome: _matchSome,
  _matchSomeValue: _matchSomeValue,
  _indexOfMatchSome: _indexOfMatchSome,
  _allMatchSome: _allMatchSome,
  _someMatchSome: _someMatchSome,
  _matchAll: _matchAll,
  _matchAllValue: _matchAllValue,
  _indexOfMatchAll: _indexOfMatchAll,
  _allMatchAll: _allMatchAll,
  _someMatchAll: _someMatchAll,
  _includes: _includes,
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  _equal: _equal,
  _equalDeep: _equalDeep,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  indexOfMatch: indexOfMatch,
  allMatch: allMatch,
  someMatch: someMatch,
  matchSome: matchSome,
  matchSomeValue: matchSomeValue,
  indexOfMatchSome: indexOfMatchSome,
  allMatchSome: allMatchSome,
  someMatchSome: someMatchSome,
  matchAll: matchAll,
  matchAllValue: matchAllValue,
  indexOfMatchAll: indexOfMatchAll,
  allMatchAll: allMatchAll,
  someMatchAll: someMatchAll,
  includes: includes,
  includesSome: includesSome,
  includesAll: includesAll,
  equal: equal,
  equalDeep: equalDeep
};
exports["default"] = _default;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchValue = exports._matchValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _match3 = __webpack_require__(89);

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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialValue = exports._initialValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _matchSomeValue2 = __webpack_require__(156);

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSomeValue = exports._matchSomeValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _matchSome2 = __webpack_require__(157);

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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSome = exports._matchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _match2 = __webpack_require__(89);

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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatch = exports._indexOfMatch = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _match2 = __webpack_require__(89);

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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatch = exports._allMatch = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _match2 = __webpack_require__(89);

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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatch = exports._someMatch = void 0;

var _indexOfMatch2 = __webpack_require__(158);

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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchSome = exports._indexOfMatchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _matchSome2 = __webpack_require__(157);

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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchSome = exports._allMatchSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _matchSome2 = __webpack_require__(157);

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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchSome = exports._someMatchSome = void 0;

var _indexOfMatchSome2 = __webpack_require__(161);

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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAllValue = exports._matchAllValue = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _matchAll2 = __webpack_require__(88);

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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchAll = exports._indexOfMatchAll = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _matchAll2 = __webpack_require__(88);

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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchAll = exports._someMatchAll = void 0;

var _indexOfMatchAll2 = __webpack_require__(165);

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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includes = exports._includes = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _match2 = __webpack_require__(89);

var _includes2 = __webpack_require__(9);

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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includesAll = exports._includesAll = exports.includesSome = exports._includesSome = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _array_common = __webpack_require__(50);

var _match2 = __webpack_require__(89);

var _includes2 = __webpack_require__(167);

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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equal = exports._equal = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(31);

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

  return equal.func.value(value1.getTime(), value2.getTime());
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports._equalDeep = void 0;

var _type = __webpack_require__(5);

var _object = __webpack_require__(31);

var _equal = __webpack_require__(169);

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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports._stringToIntegerDefault = exports.stringToInteger = exports._stringToInteger = exports.stringToNumberDefault = exports._stringToNumberDefault = exports.stringToNumber = exports._stringToNumber = exports.valueToString = exports.numberToString = exports._numberToString = void 0;

var _type = __webpack_require__(5);

var _matchValue2 = __webpack_require__(154);

var _initialValue2 = __webpack_require__(155);

var _string = __webpack_require__(125);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

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

var _stringToInteger = function _stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return _stringToIntegerBase(value, function () {
    throw new RangeError("stringToInteger args(value:".concat(value, ") is not changeing integer"));
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
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, defaultValue')) {
    var _value7 = value;
    value = _value7.value;
    defaultValue = _value7.defaultValue;
  } else if ((0, _isObjectParameter.isObjectParameter)(defaultValue, 'defaultValue')) {
    var _defaultValue = defaultValue;
    defaultValue = _defaultValue.defaultValue;
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
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, defaultValue')) {
    var _value8 = value;
    value = _value8.value;
    defaultValue = _value8.defaultValue;
  } else if ((0, _isObjectParameter.isObjectParameter)(defaultValue, 'defaultValue')) {
    var _defaultValue2 = defaultValue;
    defaultValue = _defaultValue2.defaultValue;
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
var _default = {
  _numberToString: _numberToString,
  _stringToNumber: _stringToNumber,
  _stringToNumberDefault: _stringToNumberDefault,
  _stringToInteger: _stringToInteger,
  _stringToIntegerDefault: _stringToIntegerDefault,
  numberToString: numberToString,
  valueToString: valueToString,
  stringToNumber: stringToNumber,
  stringToNumberDefault: stringToNumberDefault,
  stringToInteger: stringToInteger,
  stringToIntegerDefault: stringToIntegerDefault,
  valueToNumber: valueToNumber,
  valueToNumberDefault: valueToNumberDefault,
  valueToInteger: valueToInteger,
  valueToIntegerDefault: valueToIntegerDefault
};
exports["default"] = _default;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.valToStr = exports.numToStr = exports.valToIntegerDef = exports.valToInteger = exports.valToNumberDef = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = void 0;

var _convert = __webpack_require__(171);

var numToString = _convert.numberToString;
exports.numToString = numToString;
var valToString = _convert.valueToString;
exports.valToString = valToString;
var strToNumber = _convert.stringToNumber;
exports.strToNumber = strToNumber;
var strToNumberDef = _convert.stringToNumberDefault;
exports.strToNumberDef = strToNumberDef;
var strToInteger = _convert.stringToInteger;
exports.strToInteger = strToInteger;
var strToIntegerDef = _convert.stringToIntegerDefault;
exports.strToIntegerDef = strToIntegerDef;
var valToNumber = _convert.valueToNumber;
exports.valToNumber = valToNumber;
var valToNumberDef = _convert.valueToNumberDefault;
exports.valToNumberDef = valToNumberDef;
var valToInteger = _convert.valueToInteger;
exports.valToInteger = valToInteger;
var valToIntegerDef = _convert.valueToIntegerDefault;
exports.valToIntegerDef = valToIntegerDef;
var numToStr = _convert.numberToString;
exports.numToStr = numToStr;
var valToStr = _convert.valueToString;
exports.valToStr = valToStr;
var strToNum = _convert.stringToNumber;
exports.strToNum = strToNum;
var strToNumDef = _convert.stringToNumberDefault;
exports.strToNumDef = strToNumDef;
var strToInt = _convert.stringToInteger;
exports.strToInt = strToInt;
var strToIntDef = _convert.stringToIntegerDefault;
exports.strToIntDef = strToIntDef;
var valToNum = _convert.valueToNumber;
exports.valToNum = valToNum;
var valToNumDef = _convert.valueToNumberDefault;
exports.valToNumDef = valToNumDef;
var valToInt = _convert.valueToInteger;
exports.valToInt = valToInt;
var valToIntDef = _convert.valueToIntegerDefault;
exports.valToIntDef = valToIntDef;
var _default = {
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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InvalidDate = exports.isInvalidDate = exports.DayUTC = exports.Day = exports.MonthUTC = exports.Month = exports.YearUTC = exports.Year = exports.textsToMinutes = exports.stringToDateUTC = exports.stringToDate = exports.nameOfMonth = exports.minutesToTexts = exports.dayOfWeek = exports.dateToStringUTC = exports.dateToString = exports.DatetimeUTC = exports.Datetime = exports._DayUTC = exports._Day = exports._MonthUTC = exports._Month = exports._YearUTC = exports._Year = exports._textsToMinutes = exports._stringToDateUTC = exports._stringToDate = exports._nameOfMonth = exports._minutesToTexts = exports._dayOfWeek = exports._dateToStringUTC = exports._dateToString = exports._DatetimeUTC = exports._Datetime = void 0;

var _Year2 = _interopRequireDefault(__webpack_require__(174));

var _Year3 = _interopRequireDefault(__webpack_require__(176));

var _YearUTC2 = _interopRequireDefault(__webpack_require__(177));

var _YearUTC3 = _interopRequireDefault(__webpack_require__(178));

var _Month2 = _interopRequireDefault(__webpack_require__(179));

var _Month3 = _interopRequireDefault(__webpack_require__(180));

var _MonthUTC2 = _interopRequireDefault(__webpack_require__(181));

var _MonthUTC3 = _interopRequireDefault(__webpack_require__(182));

var _Day2 = _interopRequireDefault(__webpack_require__(183));

var _Day3 = _interopRequireDefault(__webpack_require__(184));

var _DayUTC2 = _interopRequireDefault(__webpack_require__(185));

var _DayUTC3 = _interopRequireDefault(__webpack_require__(186));

var _isInvalidDate = _interopRequireDefault(__webpack_require__(187));

var _InvalidDate = _interopRequireDefault(__webpack_require__(188));

var _Datetime2 = _interopRequireDefault(__webpack_require__(189));

var _Datetime3 = _interopRequireDefault(__webpack_require__(190));

var _DatetimeUTC2 = _interopRequireDefault(__webpack_require__(191));

var _DatetimeUTC3 = _interopRequireDefault(__webpack_require__(192));

var _dateToString2 = _interopRequireDefault(__webpack_require__(193));

var _dateToString3 = _interopRequireDefault(__webpack_require__(200));

var _dateToStringUTC2 = _interopRequireDefault(__webpack_require__(201));

var _dateToStringUTC3 = _interopRequireDefault(__webpack_require__(202));

var _dayOfWeek2 = _interopRequireDefault(__webpack_require__(195));

var _dayOfWeek3 = _interopRequireDefault(__webpack_require__(203));

var _nameOfMonth2 = _interopRequireDefault(__webpack_require__(197));

var _nameOfMonth3 = _interopRequireDefault(__webpack_require__(204));

var _stringToDate2 = _interopRequireDefault(__webpack_require__(205));

var _stringToDate3 = _interopRequireDefault(__webpack_require__(208));

var _stringToDateUTC2 = _interopRequireDefault(__webpack_require__(209));

var _stringToDateUTC3 = _interopRequireDefault(__webpack_require__(210));

var _minutesToTexts2 = _interopRequireDefault(__webpack_require__(199));

var _minutesToTexts3 = _interopRequireDefault(__webpack_require__(211));

var _textsToMinutes2 = _interopRequireDefault(__webpack_require__(207));

var _textsToMinutes3 = _interopRequireDefault(__webpack_require__(212));

var _getDatetime2 = __webpack_require__(213);

var _getDatetime3 = __webpack_require__(214);

var _getDatetimeUTC2 = __webpack_require__(215);

var _getDatetimeUTC3 = __webpack_require__(216);

var _getTimezoneOffset2 = __webpack_require__(217);

var _getTimezoneOffset3 = __webpack_require__(218);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dateJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _Datetime2["default"]), _DatetimeUTC2["default"]), _dateToString2["default"]), _dateToStringUTC2["default"]), _dayOfWeek2["default"]), _minutesToTexts2["default"]), _nameOfMonth2["default"]), _stringToDate2["default"]), _stringToDateUTC2["default"]), _textsToMinutes2["default"]), _Year2["default"]), _YearUTC2["default"]), _Month2["default"]), _MonthUTC2["default"]), _Day2["default"]), _DayUTC2["default"]), _Datetime3["default"]), _DatetimeUTC3["default"]), _dateToString3["default"]), _dateToStringUTC3["default"]), _dayOfWeek3["default"]), _InvalidDate["default"]), _isInvalidDate["default"]), _minutesToTexts3["default"]), _nameOfMonth3["default"]), _stringToDate3["default"]), _stringToDateUTC3["default"]), _textsToMinutes3["default"]), _Year3["default"]), _YearUTC3["default"]), _Month3["default"]), _MonthUTC3["default"]), _Day3["default"]), _DayUTC3["default"]);

var _Datetime = dateJs._Datetime,
    _DatetimeUTC = dateJs._DatetimeUTC,
    _dateToString = dateJs._dateToString,
    _dateToStringUTC = dateJs._dateToStringUTC,
    _dayOfWeek = dateJs._dayOfWeek,
    _minutesToTexts = dateJs._minutesToTexts,
    _nameOfMonth = dateJs._nameOfMonth,
    _stringToDate = dateJs._stringToDate,
    _stringToDateUTC = dateJs._stringToDateUTC,
    _textsToMinutes = dateJs._textsToMinutes,
    _Year = dateJs._Year,
    _YearUTC = dateJs._YearUTC,
    _Month = dateJs._Month,
    _MonthUTC = dateJs._MonthUTC,
    _Day = dateJs._Day,
    _DayUTC = dateJs._DayUTC,
    Datetime = dateJs.Datetime,
    DatetimeUTC = dateJs.DatetimeUTC,
    dateToString = dateJs.dateToString,
    dateToStringUTC = dateJs.dateToStringUTC,
    dayOfWeek = dateJs.dayOfWeek,
    minutesToTexts = dateJs.minutesToTexts,
    nameOfMonth = dateJs.nameOfMonth,
    stringToDate = dateJs.stringToDate,
    stringToDateUTC = dateJs.stringToDateUTC,
    textsToMinutes = dateJs.textsToMinutes,
    Year = dateJs.Year,
    YearUTC = dateJs.YearUTC,
    Month = dateJs.Month,
    MonthUTC = dateJs.MonthUTC,
    Day = dateJs.Day,
    DayUTC = dateJs.DayUTC,
    isInvalidDate = dateJs.isInvalidDate,
    InvalidDate = dateJs.InvalidDate;
exports.InvalidDate = InvalidDate;
exports.isInvalidDate = isInvalidDate;
exports.DayUTC = DayUTC;
exports.Day = Day;
exports.MonthUTC = MonthUTC;
exports.Month = Month;
exports.YearUTC = YearUTC;
exports.Year = Year;
exports.textsToMinutes = textsToMinutes;
exports.stringToDateUTC = stringToDateUTC;
exports.stringToDate = stringToDate;
exports.nameOfMonth = nameOfMonth;
exports.minutesToTexts = minutesToTexts;
exports.dayOfWeek = dayOfWeek;
exports.dateToStringUTC = dateToStringUTC;
exports.dateToString = dateToString;
exports.DatetimeUTC = DatetimeUTC;
exports.Datetime = Datetime;
exports._DayUTC = _DayUTC;
exports._Day = _Day;
exports._MonthUTC = _MonthUTC;
exports._Month = _Month;
exports._YearUTC = _YearUTC;
exports._Year = _Year;
exports._textsToMinutes = _textsToMinutes;
exports._stringToDateUTC = _stringToDateUTC;
exports._stringToDate = _stringToDate;
exports._nameOfMonth = _nameOfMonth;
exports._minutesToTexts = _minutesToTexts;
exports._dayOfWeek = _dayOfWeek;
exports._dateToStringUTC = _dateToStringUTC;
exports._dateToString = _dateToString;
exports._DatetimeUTC = _DatetimeUTC;
exports._Datetime = _Datetime;
var _default = {
  _Datetime: _Datetime,
  _DatetimeUTC: _DatetimeUTC,
  _dateToString: _dateToString,
  _dateToStringUTC: _dateToStringUTC,
  _dayOfWeek: _dayOfWeek,
  _minutesToTexts: _minutesToTexts,
  _nameOfMonth: _nameOfMonth,
  _stringToDate: _stringToDate,
  _stringToDateUTC: _stringToDateUTC,
  _textsToMinutes: _textsToMinutes,
  _Year: _Year,
  _YearUTC: _YearUTC,
  _Month: _Month,
  _MonthUTC: _MonthUTC,
  _Day: _Day,
  _DayUTC: _DayUTC,
  Datetime: Datetime,
  DatetimeUTC: DatetimeUTC,
  dateToString: dateToString,
  dateToStringUTC: dateToStringUTC,
  dayOfWeek: dayOfWeek,
  minutesToTexts: minutesToTexts,
  nameOfMonth: nameOfMonth,
  stringToDate: stringToDate,
  stringToDateUTC: stringToDateUTC,
  textsToMinutes: textsToMinutes,
  Year: Year,
  YearUTC: YearUTC,
  Month: Month,
  MonthUTC: MonthUTC,
  Day: Day,
  DayUTC: DayUTC,
  isInvalidDate: isInvalidDate,
  InvalidDate: InvalidDate,
  _getDatetime: _getDatetime2._getDatetime,
  getDatetime: _getDatetime3.getDatetime,
  _getDatetimeUTC: _getDatetimeUTC2._getDatetimeUTC,
  getDatetimeUTC: _getDatetimeUTC3.getDatetimeUTC,
  _getTimezoneOffset: _getTimezoneOffset2._getTimezoneOffset,
  getTimezoneOffset: _getTimezoneOffset3.getTimezoneOffset
};
exports["default"] = _default;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Year = void 0;

var _isType = __webpack_require__(11);

var _cloneDate = __webpack_require__(175);

var _roundDown2 = __webpack_require__(48);

/**
 * Year
 */
var _Year = function _Year(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isType.isString)(value)) {
    value = value.toLowerCase();

    if (value === 'this') {
      value = 0;
    } else if (value === 'last') {
      value = -1;
    } else if (value === 'next') {
      value = 1;
    } else {
      throw new TypeError("_Year args(value:".concat(value, ") is not this | last | next"));
    }
  }

  var date = sourceDate;
  var self;

  if ((0, _isType.isUndefined)(timezoneOffset)) {
    self = new Date(date.getFullYear() + value, 0, 1, 0, 0, 0, 0);
  } else if ((0, _isType.isNull)(timezoneOffset)) {
    self = new Date(Date.UTC(date.getUTCFullYear() + value, 0, 1, 0, 0, 0, 0));
  } else {
    var d = (0, _cloneDate.__cloneDate)(sourceDate);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    self = new Date(Date.UTC(d.getUTCFullYear() + value, 0, 1, 0, 0, 0, 0));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }

  return self;
};

exports._Year = _Year;
var _default = {
  _Year: _Year
};
exports["default"] = _default;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cloneDate = void 0;

var __cloneDate = function __cloneDate(date) {
  return new Date(date.getTime());
};

exports.__cloneDate = __cloneDate;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Year = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _Year2 = __webpack_require__(174);

var _includes = __webpack_require__(9);

/**
 * Year
 */
var Year = function Year(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate, timezoneOffset')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
    timezoneOffset = _value.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
    timezoneOffset = _sourceDate.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, 'timezoneOffset', '')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError("Year args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("Year args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("Year args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("Year args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _Year2._Year)(value, sourceDate, timezoneOffset);
};

exports.Year = Year;
var _default = {
  Year: Year
};
exports["default"] = _default;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._YearUTC = void 0;

var _Year2 = __webpack_require__(174);

/**
 * YearUTC
 */
var _YearUTC = function _YearUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _Year2._Year)(value, sourceDate, null);
};

exports._YearUTC = _YearUTC;
var _default = {
  _YearUTC: _YearUTC
};
exports["default"] = _default;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.YearUTC = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _YearUTC2 = __webpack_require__(177);

var _includes = __webpack_require__(9);

/**
 * YearUTC
 */
var YearUTC = function YearUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, 'sourceDate', '')) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError("YearUTC args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("YearUTC args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("YearUTC args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  return (0, _YearUTC2._YearUTC)(value, sourceDate);
};

exports.YearUTC = YearUTC;
var _default = {
  YearUTC: YearUTC
};
exports["default"] = _default;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Month = void 0;

var _isType = __webpack_require__(11);

var _cloneDate = __webpack_require__(175);

var _roundDown2 = __webpack_require__(48);

/**
 * Month
 */
var _Month = function _Month(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isType.isString)(value)) {
    value = value.toLowerCase();

    if (value === 'this') {
      value = 0;
    } else if (value === 'last') {
      value = -1;
    } else if (value === 'next') {
      value = 1;
    }
  }

  var date = sourceDate;
  var self;

  if ((0, _isType.isUndefined)(timezoneOffset)) {
    self = new Date(date.getFullYear(), date.getMonth() + value, 1, 0, 0, 0, 0);
  } else if ((0, _isType.isNull)(timezoneOffset)) {
    self = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + value, 1, 0, 0, 0, 0));
  } else {
    var d = (0, _cloneDate.__cloneDate)(sourceDate);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    self = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + value, 1, 0, 0, 0, 0));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }

  return self;
};

exports._Month = _Month;
var _default = {
  _Month: _Month
};
exports["default"] = _default;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Month = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _Month2 = __webpack_require__(179);

var _includes = __webpack_require__(9);

/**
 * Month
 */
var Month = function Month(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate, timezoneOffset')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
    timezoneOffset = _value.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
    timezoneOffset = _sourceDate.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, 'timezoneOffset', '')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError("Month args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("Month args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("Month args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("Month args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _Month2._Month)(value, sourceDate, timezoneOffset);
};

exports.Month = Month;
var _default = {
  Month: Month
};
exports["default"] = _default;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._MonthUTC = void 0;

var _Month2 = __webpack_require__(179);

/**
 * Month
 */
var _MonthUTC = function _MonthUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _Month2._Month)(value, sourceDate, null);
};

exports._MonthUTC = _MonthUTC;
var _default = {
  _MonthUTC: _MonthUTC
};
exports["default"] = _default;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MonthUTC = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _MonthUTC2 = __webpack_require__(181);

var _includes = __webpack_require__(9);

/**
 * Month
 */
var MonthUTC = function MonthUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, 'sourceDate', '')) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError("MonthUTC args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("MonthUTC args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("MonthUTC args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  return (0, _MonthUTC2._MonthUTC)(value, sourceDate);
};

exports.MonthUTC = MonthUTC;
var _default = {
  MonthUTC: MonthUTC
};
exports["default"] = _default;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Day = void 0;

var _isType = __webpack_require__(11);

var _cloneDate = __webpack_require__(175);

var _roundDown2 = __webpack_require__(48);

/**
 * Day
 */
var _Day = function _Day(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isType.isString)(value)) {
    value = value.toLowerCase();

    if (value === 'this') {
      value = 0;
    } else if (value === 'today') {
      value = 0;
    } else if (value === 'last') {
      value = -1;
    } else if (value === 'yesterday') {
      value = -1;
    } else if (value === 'next') {
      value = 1;
    } else if (value === 'tomorrow') {
      value = 1;
    }
  }

  var date = sourceDate;
  var self;

  if ((0, _isType.isUndefined)(timezoneOffset)) {
    self = new Date(date.getFullYear(), date.getMonth(), date.getDate() + value, 0, 0, 0, 0);
  } else if ((0, _isType.isNull)(timezoneOffset)) {
    self = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + value, 0, 0, 0, 0));
  } else {
    var d = (0, _cloneDate.__cloneDate)(sourceDate);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    self = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + value, 0, 0, 0, 0));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }

  return self;
};

exports._Day = _Day;
var _default = {
  _Day: _Day
};
exports["default"] = _default;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Day = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _Day2 = __webpack_require__(183);

var _includes = __webpack_require__(9);

/**
 * Day
 */
var Day = function Day(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate, timezoneOffset')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
    timezoneOffset = _value.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
    timezoneOffset = _sourceDate.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, 'timezoneOffset', '')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next', 'today', 'yesterday', 'tomorrow'], value.toLowerCase())) {
      throw new TypeError("Day args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("Day args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("Day args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("Day args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _Day2._Day)(value, sourceDate, timezoneOffset);
};

exports.Day = Day;
var _default = {
  Day: Day
};
exports["default"] = _default;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._DayUTC = void 0;

var _Day2 = __webpack_require__(183);

/**
 * Day
 */
var _DayUTC = function _DayUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _Day2._Day)(value, sourceDate, null);
};

exports._DayUTC = _DayUTC;
var _default = {
  _DayUTC: _DayUTC
};
exports["default"] = _default;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DayUTC = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _DayUTC2 = __webpack_require__(185);

var _includes = __webpack_require__(9);

/**
 * Day
 */
var DayUTC = function DayUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, 'sourceDate', '')) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next', 'today', 'yesterday', 'tomorrow'], value.toLowerCase())) {
      throw new TypeError("DayUTC args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("DayUTC args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("DayUTC args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  return (0, _DayUTC2._DayUTC)(value, sourceDate);
};

exports.DayUTC = DayUTC;
var _default = {
  DayUTC: DayUTC
};
exports["default"] = _default;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isInvalidDate = void 0;

var _isType = __webpack_require__(11);

/**
 * isInvalidDate
 */
var isInvalidDate = function isInvalidDate(value) {
  return (0, _isType.isDate)(value) && (0, _isType.isNaNStrict)(value.getTime()); // WSH
  //  value.toString() !== 'Invalid Date'
};

exports.isInvalidDate = isInvalidDate;
var _default = {
  isInvalidDate: isInvalidDate
};
exports["default"] = _default;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InvalidDate = void 0;

var InvalidDate = function InvalidDate() {
  return new Date('');
};

exports.InvalidDate = InvalidDate;
var _default = {
  InvalidDate: InvalidDate
};
exports["default"] = _default;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Datetime = void 0;

var _type = __webpack_require__(5);

var _roundDown2 = __webpack_require__(48);

/**
 * Datetime
 */
var _Datetime = function _Datetime() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hours = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minutes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var seconds = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var milliseconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var timezoneOffset = arguments.length > 7 ? arguments[7] : undefined;
  var self = new Date(0);

  if ((0, _type.isUndefined)(timezoneOffset)) {
    self.setFullYear(year, month - 1, date);
    self.setHours(hours, minutes, seconds, milliseconds);
  } else if ((0, _type.isNull)(timezoneOffset)) {
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hours, minutes, seconds, milliseconds);
  } else {
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hours, minutes, seconds, milliseconds);
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
    self.setUTCSeconds(self.getUTCSeconds() + timezoneOffsetSeconds);
  }

  return self;
};

exports._Datetime = _Datetime;
var _default = {
  _Datetime: _Datetime
};
exports["default"] = _default;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Datetime = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

var _Datetime2 = __webpack_require__(189);

/* eslint-disable max-len */

/**
 * Datetime
 */
var Datetime = function Datetime() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hours = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minutes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var seconds = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var milliseconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var timezoneOffset = arguments.length > 7 ? arguments[7] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(year, '', 'year, month, day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _year = year;
    var _year$year = _year.year;
    year = _year$year === void 0 ? 1970 : _year$year;
    var _year$month = _year.month;
    month = _year$month === void 0 ? 1 : _year$month;
    var _year$day = _year.day;
    day = _year$day === void 0 ? 1 : _year$day;
    var _year$hours = _year.hours;
    hours = _year$hours === void 0 ? 0 : _year$hours;
    var _year$minutes = _year.minutes;
    minutes = _year$minutes === void 0 ? 0 : _year$minutes;
    var _year$seconds = _year.seconds;
    seconds = _year$seconds === void 0 ? 0 : _year$seconds;
    var _year$milliseconds = _year.milliseconds;
    milliseconds = _year$milliseconds === void 0 ? 0 : _year$milliseconds;
    timezoneOffset = _year.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(month, '', 'month, day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _month = month;
    var _month$month = _month.month;
    month = _month$month === void 0 ? 1 : _month$month;
    var _month$day = _month.day;
    day = _month$day === void 0 ? 1 : _month$day;
    var _month$hours = _month.hours;
    hours = _month$hours === void 0 ? 0 : _month$hours;
    var _month$minutes = _month.minutes;
    minutes = _month$minutes === void 0 ? 0 : _month$minutes;
    var _month$seconds = _month.seconds;
    seconds = _month$seconds === void 0 ? 0 : _month$seconds;
    var _month$milliseconds = _month.milliseconds;
    milliseconds = _month$milliseconds === void 0 ? 0 : _month$milliseconds;
    timezoneOffset = _month.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(day, '', 'day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _day = day;
    var _day$day = _day.day;
    day = _day$day === void 0 ? 1 : _day$day;
    var _day$hours = _day.hours;
    hours = _day$hours === void 0 ? 0 : _day$hours;
    var _day$minutes = _day.minutes;
    minutes = _day$minutes === void 0 ? 0 : _day$minutes;
    var _day$seconds = _day.seconds;
    seconds = _day$seconds === void 0 ? 0 : _day$seconds;
    var _day$milliseconds = _day.milliseconds;
    milliseconds = _day$milliseconds === void 0 ? 0 : _day$milliseconds;
    timezoneOffset = _day.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(hours, '', 'hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _hours = hours;
    var _hours$hours = _hours.hours;
    hours = _hours$hours === void 0 ? 0 : _hours$hours;
    var _hours$minutes = _hours.minutes;
    minutes = _hours$minutes === void 0 ? 0 : _hours$minutes;
    var _hours$seconds = _hours.seconds;
    seconds = _hours$seconds === void 0 ? 0 : _hours$seconds;
    var _hours$milliseconds = _hours.milliseconds;
    milliseconds = _hours$milliseconds === void 0 ? 0 : _hours$milliseconds;
    timezoneOffset = _hours.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(minutes, '', 'minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _minutes = minutes;
    var _minutes$minutes = _minutes.minutes;
    minutes = _minutes$minutes === void 0 ? 0 : _minutes$minutes;
    var _minutes$seconds = _minutes.seconds;
    seconds = _minutes$seconds === void 0 ? 0 : _minutes$seconds;
    var _minutes$milliseconds = _minutes.milliseconds;
    milliseconds = _minutes$milliseconds === void 0 ? 0 : _minutes$milliseconds;
    timezoneOffset = _minutes.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(seconds, '', 'seconds, milliseconds, timezoneOffset', 1)) {
    var _seconds = seconds;
    var _seconds$seconds = _seconds.seconds;
    seconds = _seconds$seconds === void 0 ? 0 : _seconds$seconds;
    var _seconds$milliseconds = _seconds.milliseconds;
    milliseconds = _seconds$milliseconds === void 0 ? 0 : _seconds$milliseconds;
    timezoneOffset = _seconds.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(milliseconds, '', 'milliseconds, timezoneOffset', 1)) {
    var _milliseconds = milliseconds;
    var _milliseconds$millise = _milliseconds.milliseconds;
    milliseconds = _milliseconds$millise === void 0 ? 0 : _milliseconds$millise;
    timezoneOffset = _milliseconds.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, '', 'timezoneOffset', 1)) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if (!(0, _isType.isInteger)(year)) {
    throw new TypeError("Datetime args(year:".concat(year, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(month)) {
    throw new TypeError("Datetime args(month:".concat(month, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(day)) {
    throw new TypeError("Datetime args(day:".concat(day, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(hours)) {
    throw new TypeError("Datetime args(hours:".concat(hours, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(minutes)) {
    throw new TypeError("Datetime args(minutes:".concat(minutes, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(seconds)) {
    throw new TypeError("Datetime args(seconds:".concat(seconds, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(milliseconds)) {
    throw new TypeError("Datetime args(milliseconds:".concat(milliseconds, ") is not integer"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("Datetime args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _Datetime2._Datetime)(year, month, day, hours, minutes, seconds, milliseconds, timezoneOffset);
};

exports.Datetime = Datetime;
var _default = {
  Datetime: Datetime
};
exports["default"] = _default;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._DatetimeUTC = void 0;

var _Datetime2 = __webpack_require__(189);

/**
 * Datetime
 */
var _DatetimeUTC = function _DatetimeUTC() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hours = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minutes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var seconds = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var milliseconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  return new _Datetime2._Datetime(year, month, date, hours, minutes, seconds, milliseconds, null);
};

exports._DatetimeUTC = _DatetimeUTC;
var _default = {
  _DatetimeUTC: _DatetimeUTC
};
exports["default"] = _default;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatetimeUTC = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _number = __webpack_require__(42);

var _DatetimeUTC2 = __webpack_require__(191);

/* eslint-disable max-len */

/**
 * Datetime
 */
var DatetimeUTC = function DatetimeUTC() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hours = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minutes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var seconds = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var milliseconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(year, '', 'year, month, day, hours, minutes, seconds, milliseconds', 1)) {
    var _year = year;
    var _year$year = _year.year;
    year = _year$year === void 0 ? 1970 : _year$year;
    var _year$month = _year.month;
    month = _year$month === void 0 ? 1 : _year$month;
    var _year$day = _year.day;
    day = _year$day === void 0 ? 1 : _year$day;
    var _year$hours = _year.hours;
    hours = _year$hours === void 0 ? 0 : _year$hours;
    var _year$minutes = _year.minutes;
    minutes = _year$minutes === void 0 ? 0 : _year$minutes;
    var _year$seconds = _year.seconds;
    seconds = _year$seconds === void 0 ? 0 : _year$seconds;
    var _year$milliseconds = _year.milliseconds;
    milliseconds = _year$milliseconds === void 0 ? 0 : _year$milliseconds;
  } else if ((0, _isObjectParameter.isObjectParameter)(month, '', 'month, day, hours, minutes, seconds, milliseconds', 1)) {
    var _month = month;
    var _month$month = _month.month;
    month = _month$month === void 0 ? 1 : _month$month;
    var _month$day = _month.day;
    day = _month$day === void 0 ? 1 : _month$day;
    var _month$hours = _month.hours;
    hours = _month$hours === void 0 ? 0 : _month$hours;
    var _month$minutes = _month.minutes;
    minutes = _month$minutes === void 0 ? 0 : _month$minutes;
    var _month$seconds = _month.seconds;
    seconds = _month$seconds === void 0 ? 0 : _month$seconds;
    var _month$milliseconds = _month.milliseconds;
    milliseconds = _month$milliseconds === void 0 ? 0 : _month$milliseconds;
  } else if ((0, _isObjectParameter.isObjectParameter)(day, '', 'day, hours, minutes, seconds, milliseconds', 1)) {
    var _day = day;
    var _day$day = _day.day;
    day = _day$day === void 0 ? 1 : _day$day;
    var _day$hours = _day.hours;
    hours = _day$hours === void 0 ? 0 : _day$hours;
    var _day$minutes = _day.minutes;
    minutes = _day$minutes === void 0 ? 0 : _day$minutes;
    var _day$seconds = _day.seconds;
    seconds = _day$seconds === void 0 ? 0 : _day$seconds;
    var _day$milliseconds = _day.milliseconds;
    milliseconds = _day$milliseconds === void 0 ? 0 : _day$milliseconds;
  } else if ((0, _isObjectParameter.isObjectParameter)(hours, '', 'hours, minutes, seconds, milliseconds', 1)) {
    var _hours = hours;
    var _hours$hours = _hours.hours;
    hours = _hours$hours === void 0 ? 0 : _hours$hours;
    var _hours$minutes = _hours.minutes;
    minutes = _hours$minutes === void 0 ? 0 : _hours$minutes;
    var _hours$seconds = _hours.seconds;
    seconds = _hours$seconds === void 0 ? 0 : _hours$seconds;
    var _hours$milliseconds = _hours.milliseconds;
    milliseconds = _hours$milliseconds === void 0 ? 0 : _hours$milliseconds;
  } else if ((0, _isObjectParameter.isObjectParameter)(minutes, '', 'minutes, seconds, milliseconds', 1)) {
    var _minutes = minutes;
    var _minutes$minutes = _minutes.minutes;
    minutes = _minutes$minutes === void 0 ? 0 : _minutes$minutes;
    var _minutes$seconds = _minutes.seconds;
    seconds = _minutes$seconds === void 0 ? 0 : _minutes$seconds;
    var _minutes$milliseconds = _minutes.milliseconds;
    milliseconds = _minutes$milliseconds === void 0 ? 0 : _minutes$milliseconds;
  } else if ((0, _isObjectParameter.isObjectParameter)(seconds, '', 'seconds, milliseconds', 1)) {
    var _seconds = seconds;
    var _seconds$seconds = _seconds.seconds;
    seconds = _seconds$seconds === void 0 ? 0 : _seconds$seconds;
    var _seconds$milliseconds = _seconds.milliseconds;
    milliseconds = _seconds$milliseconds === void 0 ? 0 : _seconds$milliseconds;
  } else if ((0, _isObjectParameter.isObjectParameter)(milliseconds, '', 'milliseconds', 1)) {
    var _milliseconds = milliseconds;
    var _milliseconds$millise = _milliseconds.milliseconds;
    milliseconds = _milliseconds$millise === void 0 ? 0 : _milliseconds$millise;
  }

  if (!(0, _isType.isInteger)(year)) {
    throw new TypeError("DatetimeUTC args(year:".concat(year, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(month)) {
    throw new TypeError("DatetimeUTC args(month:".concat(month, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(day)) {
    throw new TypeError("DatetimeUTC args(day:".concat(day, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(hours)) {
    throw new TypeError("DatetimeUTC args(hours:".concat(hours, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(minutes)) {
    throw new TypeError("DatetimeUTC args(minutes:".concat(minutes, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(seconds)) {
    throw new TypeError("DatetimeUTC args(seconds:".concat(seconds, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(milliseconds)) {
    throw new TypeError("DatetimeUTC args(milliseconds:".concat(milliseconds, ") is not integer"));
  }

  return (0, _DatetimeUTC2._DatetimeUTC)(year, month, day, hours, minutes, seconds, milliseconds);
};

exports.DatetimeUTC = DatetimeUTC;
var _default = {
  DatetimeUTC: DatetimeUTC
};
exports["default"] = _default;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dateToString = void 0;

var _includes = __webpack_require__(9);

var _objectKeys2 = __webpack_require__(109);

var _SortFunc2 = __webpack_require__(85);

var _loop = __webpack_require__(38);

var _replaceAllArray2 = __webpack_require__(100);

var _number = __webpack_require__(42);

var _includeCount2 = __webpack_require__(131);

var _dateToStringRule = __webpack_require__(194);

var _map2 = __webpack_require__(72);

/**
 * dateToString
 */
var _dateToString = function _dateToString(date, format, timezoneOffset) {
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _dateToStringRule.__dateToStringRule.Default();
  var existSingleQuote = (0, _includes.__includes)(format, "'");
  var existDoubleQuote = (0, _includes.__includes)(format, '"');

  if (existSingleQuote && existDoubleQuote) {
    throw new Error("__dateToString args(format:".concat(format, ") exists both singleQuote and doubleQuote"));
  }

  var keys = (0, _objectKeys2._objectKeys)(rule);
  keys.sort((0, _SortFunc2._SortFunc)([[_SortFunc2._SortFunc.order.normal.descending, function (v) {
    return v.length;
  }]]));
  var replaceArray = (0, _map2._map)(keys, function (key) {
    return [key, rule[key].func(date, timezoneOffset)];
  });
  var quoteChar;

  if (existSingleQuote === false && existDoubleQuote === false) {
    return (0, _replaceAllArray2._replaceAllArray)(format, replaceArray);
  } else if (existSingleQuote === false) {
    quoteChar = '"';
  } else if (existDoubleQuote === false) {
    quoteChar = "'";
  }

  if ((0, _number.isOdd)((0, _includeCount2._includeCount)(format, quoteChar))) {
    throw new Error("__dateToString args(format:".concat(format, ") exists odd Quotes"));
  }

  var formatStrs = format.split(quoteChar);

  for (var i = 0, l = formatStrs.length; i < l; i += 2) {
    formatStrs[i] = (0, _replaceAllArray2._replaceAllArray)(formatStrs[i], replaceArray);
  }

  return formatStrs.join('');
};

exports._dateToString = _dateToString;
_dateToString.rule = _dateToStringRule.__dateToStringRule;
var _default = {
  _dateToString: _dateToString
};
exports["default"] = _default;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__dateToStringRule = void 0;

var _type = __webpack_require__(5);

var _paddingFirst2 = __webpack_require__(147);

var _string_common = __webpack_require__(73);

var _dayOfWeek2 = __webpack_require__(195);

var _nameOfMonth2 = __webpack_require__(197);

var _minutesToTexts6 = __webpack_require__(199);

var _cloneDate = __webpack_require__(175);

var _roundDown2 = __webpack_require__(48);

var _defaultRule, _momentLikeRule;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var year4 = function year4(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getFullYear();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCFullYear();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCFullYear();
  }

  return result.toString();
};

var year2 = function year2(date, timezoneOffset) {
  return (0, _string_common._subLast)(year4(date, timezoneOffset), 2);
};

var month = function month(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getMonth();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCMonth();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCMonth();
  }

  return result;
};

var month1 = function month1(date, timezoneOffset) {
  return (month(date, timezoneOffset) + 1).toString();
};

var month2 = function month2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(month1(date, timezoneOffset), 2, '0');
};

var date1 = function date1(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getDate();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCDate();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCDate();
  }

  return result.toString();
};

var date2 = function date2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(date1(date, timezoneOffset), 2, '0');
};

var hours = function hours(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getHours();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCHours();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCHours();
  }

  return result;
};

var hour12_1 = function hour12_1(date, timezoneOffset) {
  // 0-11
  return (hours(date, timezoneOffset) % 12).toString();
};

var hour12_2 = function hour12_2(date, timezoneOffset) {
  // 00-11
  return (0, _paddingFirst2._paddingFirst)(hour12_1(date, timezoneOffset), 2, '0');
};

var hour24_1 = function hour24_1(date, timezoneOffset) {
  // 0-23
  return hours(date, timezoneOffset).toString();
};

var hour24_2 = function hour24_2(date, timezoneOffset) {
  // 00-23
  return (0, _paddingFirst2._paddingFirst)(hour24_1(date, timezoneOffset), 2, '0');
};

var minutes1 = function minutes1(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getMinutes();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCMinutes();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCMinutes();
  }

  return result.toString();
};

var minutes2 = function minutes2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(minutes1(date, timezoneOffset), 2, '0');
};

var seconds1 = function seconds1(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getSeconds();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCSeconds();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCSeconds();
  }

  return result.toString();
};

var seconds2 = function seconds2(date, timezoneOffset) {
  return (0, _paddingFirst2._paddingFirst)(seconds1(date, timezoneOffset), 2, '0');
};

var milliseconds3 = function milliseconds3(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getMilliseconds();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCMilliseconds();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCMilliseconds();
  }

  return (0, _paddingFirst2._paddingFirst)(result.toString(), 3, '0');
};

var milliseconds2 = function milliseconds2(date, timezoneOffset) {
  return (0, _string_common._subFirst)(milliseconds3(date, timezoneOffset), 2);
};

var milliseconds1 = function milliseconds1(date, timezoneOffset) {
  return (0, _string_common._subFirst)(milliseconds3(date, timezoneOffset), 1);
};

var am_pm = function am_pm(date, timezoneOffset) {
  return hours(date, timezoneOffset) < 12 ? 'am' : 'pm';
};

var AM_PM = function AM_PM(date, timezoneOffset) {
  return am_pm(date, timezoneOffset).toUpperCase();
};

var a_p = function a_p(date, timezoneOffset) {
  switch (am_pm(date, timezoneOffset)) {
    case 'am':
      return 'a';

    case 'pm':
      return 'p';

    default:
      throw new Error('a_p');
  }
};

var A_P = function A_P(date, timezoneOffset) {
  return a_p(date, timezoneOffset).toUpperCase();
};

var dayOfWeek = function dayOfWeek(date, timezoneOffset) {
  var result;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    result = date.getDay();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    result = date.getUTCDay();
  } else {
    var d = (0, _cloneDate.__cloneDate)(date);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    result = d.getUTCDay();
  }

  return result;
};

var dayOfWeekEnglishShort = function dayOfWeekEnglishShort(date, timezoneOffset) {
  return _dayOfWeek2._dayOfWeek.names.EnglishShort()[dayOfWeek(date, timezoneOffset)];
};

var dayOfWeekEnglishLong = function dayOfWeekEnglishLong(date, timezoneOffset) {
  return _dayOfWeek2._dayOfWeek.names.EnglishLong()[dayOfWeek(date, timezoneOffset)];
};

var nameOfMonthEnglishChar3 = function nameOfMonthEnglishChar3(date, timezoneOffset) {
  return _nameOfMonth2._nameOfMonth.names.EnglishChar3()[month(date, timezoneOffset)];
};

var nameOfMonthEnglishChar4 = function nameOfMonthEnglishChar4(date, timezoneOffset) {
  return _nameOfMonth2._nameOfMonth.names.EnglishChar4()[month(date, timezoneOffset)];
};

var nameOfMonthEnglishLong = function nameOfMonthEnglishLong(date, timezoneOffset) {
  return _nameOfMonth2._nameOfMonth.names.EnglishLong()[month(date, timezoneOffset)];
};

var timezoneHHMM = function timezoneHHMM(date, timezoneOffset) {
  if ((0, _type.isUndefined)(timezoneOffset)) {
    timezoneOffset = date.getTimezoneOffset();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    return 'Z';
  }

  var _minutesToTexts2 = (0, _minutesToTexts6._minutesToTexts)(-1 * timezoneOffset),
      _minutesToTexts3 = _slicedToArray(_minutesToTexts2, 3),
      sign = _minutesToTexts3[0],
      hour = _minutesToTexts3[1],
      min = _minutesToTexts3[2];

  return sign + hour + min;
};

var timezoneHH_MM = function timezoneHH_MM(date, timezoneOffset) {
  if ((0, _type.isUndefined)(timezoneOffset)) {
    timezoneOffset = date.getTimezoneOffset();
  } else if ((0, _type.isNull)(timezoneOffset)) {
    return 'Z';
  }

  var _minutesToTexts4 = (0, _minutesToTexts6._minutesToTexts)(-1 * timezoneOffset),
      _minutesToTexts5 = _slicedToArray(_minutesToTexts4, 3),
      sign = _minutesToTexts5[0],
      hour = _minutesToTexts5[1],
      min = _minutesToTexts5[2];

  return sign + hour + ':' + min;
};

var __dateToStringRule = {
  year4: year4,
  year2: year2,
  month2: month2,
  month1: month1,
  date2: date2,
  date1: date1,
  hour12_2: hour12_2,
  hour12_1: hour12_1,
  hour24_2: hour24_2,
  hour24_1: hour24_1,
  minutes2: minutes2,
  minutes1: minutes1,
  seconds2: seconds2,
  seconds1: seconds1,
  milliseconds3: milliseconds3,
  milliseconds2: milliseconds2,
  milliseconds1: milliseconds1,
  am_pm: am_pm,
  AM_PM: AM_PM,
  a_p: a_p,
  A_P: A_P,
  dayOfWeekEnglishShort: dayOfWeekEnglishShort,
  dayOfWeekEnglishLong: dayOfWeekEnglishLong,
  nameOfMonthEnglishChar3: nameOfMonthEnglishChar3,
  nameOfMonthEnglishChar4: nameOfMonthEnglishChar4,
  nameOfMonthEnglishLong: nameOfMonthEnglishLong,
  timezoneHH_MM: timezoneHH_MM,
  timezoneHHMM: timezoneHHMM
};
exports.__dateToStringRule = __dateToStringRule;
var r = __dateToStringRule;
var defaultRule = (_defaultRule = {}, _defineProperty(_defaultRule, 'YYYY', {
  func: r.year4
}), _defineProperty(_defaultRule, 'YY', {
  func: r.year2
}), _defineProperty(_defaultRule, 'MM', {
  func: r.month2
}), _defineProperty(_defaultRule, 'M', {
  func: r.month1
}), _defineProperty(_defaultRule, 'DD', {
  func: r.date2
}), _defineProperty(_defaultRule, 'D', {
  func: r.date1
}), _defineProperty(_defaultRule, 'HH', {
  func: r.hour24_2
}), _defineProperty(_defaultRule, 'H', {
  func: r.hour24_1
}), _defineProperty(_defaultRule, 'hh', {
  func: r.hour12_2
}), _defineProperty(_defaultRule, 'h', {
  func: r.hour12_1
}), _defineProperty(_defaultRule, 'mm', {
  func: r.minutes2
}), _defineProperty(_defaultRule, 'm', {
  func: r.minutes1
}), _defineProperty(_defaultRule, 'ss', {
  func: r.seconds2
}), _defineProperty(_defaultRule, 's', {
  func: r.seconds1
}), _defineProperty(_defaultRule, 'SSS', {
  func: r.milliseconds3
}), _defineProperty(_defaultRule, 'SS', {
  func: r.milliseconds2
}), _defineProperty(_defaultRule, 'S', {
  func: r.milliseconds1
}), _defineProperty(_defaultRule, 'aa', {
  func: r.am_pm
}), _defineProperty(_defaultRule, 'AA', {
  func: r.AM_PM
}), _defineProperty(_defaultRule, 'a', {
  func: r.a_p
}), _defineProperty(_defaultRule, 'A', {
  func: r.A_P
}), _defineProperty(_defaultRule, 'ddd', {
  func: r.dayOfWeekEnglishShort
}), _defineProperty(_defaultRule, 'dddd', {
  func: r.dayOfWeekEnglishLong
}), _defineProperty(_defaultRule, 'MMM', {
  func: r.nameOfMonthEnglishChar3
}), _defineProperty(_defaultRule, 'MMMM', {
  func: r.nameOfMonthEnglishChar4
}), _defineProperty(_defaultRule, 'MMMMM', {
  func: r.nameOfMonthEnglishLong
}), _defineProperty(_defaultRule, 'Z', {
  func: r.timezoneHH_MM
}), _defineProperty(_defaultRule, 'ZZ', {
  func: r.timezoneHHMM
}), _defaultRule);
var momentLikeRule = (_momentLikeRule = {}, _defineProperty(_momentLikeRule, 'YYYY', {
  func: r.year4
}), _defineProperty(_momentLikeRule, 'YY', {
  func: r.year2
}), _defineProperty(_momentLikeRule, 'MM', {
  func: r.month2
}), _defineProperty(_momentLikeRule, 'M', {
  func: r.month1
}), _defineProperty(_momentLikeRule, 'DD', {
  func: r.date2
}), _defineProperty(_momentLikeRule, 'D', {
  func: r.date1
}), _defineProperty(_momentLikeRule, 'HH', {
  func: r.hour24_2
}), _defineProperty(_momentLikeRule, 'H', {
  func: r.hour24_1
}), _defineProperty(_momentLikeRule, 'hh', {
  func: r.hour12_2
}), _defineProperty(_momentLikeRule, 'h', {
  func: r.hour12_1
}), _defineProperty(_momentLikeRule, 'mm', {
  func: r.minutes2
}), _defineProperty(_momentLikeRule, 'm', {
  func: r.minutes1
}), _defineProperty(_momentLikeRule, 'ss', {
  func: r.seconds2
}), _defineProperty(_momentLikeRule, 's', {
  func: r.seconds1
}), _defineProperty(_momentLikeRule, 'SSS', {
  func: r.milliseconds3
}), _defineProperty(_momentLikeRule, 'SS', {
  func: r.milliseconds2
}), _defineProperty(_momentLikeRule, 'S', {
  func: r.milliseconds1
}), _defineProperty(_momentLikeRule, 'a', {
  func: r.am_pm
}), _defineProperty(_momentLikeRule, 'A', {
  func: r.AM_PM
}), _defineProperty(_momentLikeRule, 'ddd', {
  func: r.dayOfWeekEnglishShort
}), _defineProperty(_momentLikeRule, 'dddd', {
  func: r.dayOfWeekEnglishLong
}), _defineProperty(_momentLikeRule, 'MMM', {
  func: r.nameOfMonthEnglishChar3
}), _defineProperty(_momentLikeRule, 'MMMM', {
  func: r.nameOfMonthEnglishLong
}), _defineProperty(_momentLikeRule, 'Z', {
  func: r.timezoneHH_MM
}), _defineProperty(_momentLikeRule, 'ZZ', {
  func: r.timezoneHHMM
}), _momentLikeRule);

__dateToStringRule.Default = function () {
  return defaultRule;
};

__dateToStringRule.MomentLike = function () {
  return momentLikeRule;
};

var _default = {
  __dateToStringRule: __dateToStringRule
};
exports["default"] = _default;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dayOfWeek = void 0;

var _dayOfWeekNames = __webpack_require__(196);

var _dayOfWeek = function _dayOfWeek(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dayOfWeekNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dayOfWeekNames.__dayOfWeekNames.EnglishShort;

  if (isLocal) {
    return dayOfWeekNames[date.getDay()];
  } else {
    return dayOfWeekNames[date.getUTCDay()];
  }
};

exports._dayOfWeek = _dayOfWeek;
_dayOfWeek.names = _dayOfWeekNames.__dayOfWeekNames;
var _default = {
  _dayOfWeek: _dayOfWeek
};
exports["default"] = _default;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__dayOfWeekNames = void 0;

/**
 * dayOfWeek.names
 */
var __dayOfWeekNames = {};
exports.__dayOfWeekNames = __dayOfWeekNames;

__dayOfWeekNames.EnglishShort = function () {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};

__dayOfWeekNames.EnglishLong = function () {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};

__dayOfWeekNames.JapaneseShort = function () {
  return ['日', '月', '火', '水', '木', '金', '土'];
};

__dayOfWeekNames.JapaneseLong = function () {
  return ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
};

var _default = {
  __dayOfWeekNames: __dayOfWeekNames
};
exports["default"] = _default;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._nameOfMonth = void 0;

var _monthNames = __webpack_require__(198);

var _nameOfMonth = function _nameOfMonth(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var monthNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _monthNames.__monthNames.EnglishChar3();

  if (isLocal) {
    return monthNames[date.getMonth()];
  } else {
    return monthNames[date.getUTCMonth()];
  }
};

exports._nameOfMonth = _nameOfMonth;
_nameOfMonth.names = _monthNames.__monthNames;
var _default = {
  _nameOfMonth: _nameOfMonth
};
exports["default"] = _default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__monthNames = void 0;

/**
 * nameOfMonth.names
 */
var __monthNames = {};
exports.__monthNames = __monthNames;

__monthNames.EnglishChar3 = function () {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
};

__monthNames.EnglishChar4 = function () {
  return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
};

__monthNames.EnglishLong = function () {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
};

var _default = {
  __monthNames: __monthNames
};
exports["default"] = _default;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._minutesToTexts = void 0;

var _paddingFirst2 = __webpack_require__(147);

/**
 * minutesToTexts
 */
var _minutesToTexts = function _minutesToTexts(minutes) {
  var sign = 0 <= minutes ? '+' : '-';
  var hourStr = (0, _paddingFirst2._paddingFirst)(String(Math.floor(Math.abs(minutes / 60))), 2, '0');
  var minStr = (0, _paddingFirst2._paddingFirst)(String(Math.abs(minutes % 60)), 2, '0');
  return [sign, hourStr, minStr];
};

exports._minutesToTexts = _minutesToTexts;
var _default = {
  _minutesToTexts: _minutesToTexts
};
exports["default"] = _default;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateToString = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _dateToString2 = __webpack_require__(193);

var dateToString = function dateToString(date, format, timezoneOffset) {
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _dateToString2._dateToString.rule.Default();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date, format', 'timezoneOffset, rule')) {
    var _date = date;
    date = _date.date;
    format = _date.format;
    timezoneOffset = _date.timezoneOffset;
    var _date$rule = _date.rule;
    rule = _date$rule === void 0 ? _dateToString2._dateToString.rule.Default() : _date$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'timezoneOffset, rule')) {
    var _format = format;
    format = _format.format;
    timezoneOffset = _format.timezoneOffset;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _dateToString2._dateToString.rule.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, 'timezoneOffset', 'rule')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
    var _timezoneOffset$rule = _timezoneOffset.rule;
    rule = _timezoneOffset$rule === void 0 ? _dateToString2._dateToString.rule.Default() : _timezoneOffset$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dateToString args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("dateToString args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("dateToString args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("dateToString args(rule:".concat(rule, ") is not object"));
  }

  return (0, _dateToString2._dateToString)(date, format, timezoneOffset, rule);
};

exports.dateToString = dateToString;
dateToString.rule = _dateToString2._dateToString.rule;
var _default = {
  dateToString: dateToString
};
exports["default"] = _default;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dateToStringUTC = void 0;

var _dateToStringRule = __webpack_require__(194);

var _dateToString2 = __webpack_require__(193);

var _dateToStringUTC = function _dateToStringUTC(date, format) {
  var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dateToStringRule.__dateToStringRule.Default();
  return (0, _dateToString2._dateToString)(date, format, null, rule);
};

exports._dateToStringUTC = _dateToStringUTC;
_dateToStringUTC.rule = _dateToString2._dateToString.rule;
var _default = {
  _dateToStringUTC: _dateToStringUTC
};
exports["default"] = _default;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateToStringUTC = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _dateToStringUTC2 = __webpack_require__(201);

var dateToStringUTC = function dateToStringUTC(date, format) {
  var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dateToStringUTC2._dateToStringUTC.rule.Default();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date, format', 'rule')) {
    var _date = date;
    date = _date.date;
    format = _date.format;
    var _date$rule = _date.rule;
    rule = _date$rule === void 0 ? _dateToStringUTC2._dateToStringUTC.rule.Default() : _date$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'rule')) {
    var _format = format;
    format = _format.format;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _dateToStringUTC2._dateToStringUTC.rule.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule', '')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dateToStringUTC args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("dateToStringUTC args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("dateToStringUTC args(rule:".concat(rule, ") is not object"));
  }

  return (0, _dateToStringUTC2._dateToStringUTC)(date, format, rule);
};

exports.dateToStringUTC = dateToStringUTC;
dateToStringUTC.rule = _dateToStringUTC2._dateToStringUTC.rule;
var _default = {
  dateToStringUTC: dateToStringUTC
};
exports["default"] = _default;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dayOfWeek = void 0;

var _isType = __webpack_require__(11);

var _isTypeArray = __webpack_require__(23);

var _isObjectParameter = __webpack_require__(15);

var _dayOfWeek2 = __webpack_require__(195);

var dayOfWeek = function dayOfWeek(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dayOfWeekNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dayOfWeek2._dayOfWeek.names.EnglishShort();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date', 'isLocal, dayOfWeekNames')) {
    var _date = date;
    date = _date.date;
    var _date$dayOfWeekNames = _date.dayOfWeekNames;
    dayOfWeekNames = _date$dayOfWeekNames === void 0 ? _dayOfWeek2._dayOfWeek.names.EnglishShort() : _date$dayOfWeekNames;
    var _date$isLocal = _date.isLocal;
    isLocal = _date$isLocal === void 0 ? true : _date$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'dayOfWeekNames, isLocal', 1)) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
    var _isLocal$dayOfWeekNam = _isLocal.dayOfWeekNames;
    dayOfWeekNames = _isLocal$dayOfWeekNam === void 0 ? _dayOfWeek2._dayOfWeek.names.EnglishShort() : _isLocal$dayOfWeekNam;
  } else if ((0, _isObjectParameter.isObjectParameter)(dayOfWeekNames, 'dayOfWeekNames')) {
    var _dayOfWeekNames = dayOfWeekNames;
    dayOfWeekNames = _dayOfWeekNames.dayOfWeekNames;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dayOfWeek args(date:".concat(date, ") is not date"));
  }

  if (!((0, _isTypeArray.isStringArray)(dayOfWeekNames) && dayOfWeekNames.length === 7)) {
    throw new TypeError("dayOfWeek args(dayOfWeekNames:".concat(dayOfWeekNames, ")") + " is not stringArray.length is 7");
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("dayOfWeek args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _dayOfWeek2._dayOfWeek)(date, isLocal, dayOfWeekNames);
};

exports.dayOfWeek = dayOfWeek;
dayOfWeek.names = _dayOfWeek2._dayOfWeek.names;
var _default = {
  dayOfWeek: dayOfWeek
};
exports["default"] = _default;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.nameOfMonth = void 0;

var _isType = __webpack_require__(11);

var _isTypeArray = __webpack_require__(23);

var _isObjectParameter = __webpack_require__(15);

var _nameOfMonth2 = __webpack_require__(197);

var nameOfMonth = function nameOfMonth(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var monthNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _nameOfMonth2._nameOfMonth.names.EnglishChar3();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date', 'isLocal, monthNames')) {
    var _date = date;
    date = _date.date;
    var _date$monthNames = _date.monthNames;
    monthNames = _date$monthNames === void 0 ? _nameOfMonth2._nameOfMonth.names.EnglishChar3() : _date$monthNames;
    var _date$isLocal = _date.isLocal;
    isLocal = _date$isLocal === void 0 ? true : _date$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'monthNames, isLocal', 1)) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
    var _isLocal$monthNames = _isLocal.monthNames;
    monthNames = _isLocal$monthNames === void 0 ? _nameOfMonth2._nameOfMonth.names.EnglishChar3() : _isLocal$monthNames;
  } else if ((0, _isObjectParameter.isObjectParameter)(monthNames, 'monthNames')) {
    var _monthNames = monthNames;
    monthNames = _monthNames.monthNames;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("nameOfMonth args(date:".concat(date, ") is not date"));
  }

  if (!((0, _isTypeArray.isStringArray)(monthNames) && monthNames.length === 12)) {
    throw new TypeError("nameOfMonth args(monthNames:".concat(monthNames, ")") + " is not stringArray.length is 12");
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("nameOfMonth args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _nameOfMonth2._nameOfMonth)(date, isLocal, monthNames);
};

exports.nameOfMonth = nameOfMonth;
nameOfMonth.names = _nameOfMonth2._nameOfMonth.names;
var _default = {
  nameOfMonth: nameOfMonth
};
exports["default"] = _default;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._stringToDate = void 0;

var _includes = __webpack_require__(9);

var _objectKeys2 = __webpack_require__(109);

var _SortFunc2 = __webpack_require__(85);

var _loop = __webpack_require__(38);

var _replaceAllArray2 = __webpack_require__(100);

var _includeCount2 = __webpack_require__(131);

var _number = __webpack_require__(42);

var _stringToDateRule = __webpack_require__(206);

var _InvalidDate = __webpack_require__(188);

var _dateToString2 = __webpack_require__(193);

var _escapeRegExp2 = __webpack_require__(151);

var _Year2 = __webpack_require__(174);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _stringToDate = function _stringToDate(str, format, timezoneOffset) {
  var sourceDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _Year2._Year)('this');
  var rule = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _stringToDateRule.__stringToDateRule.Default();
  var existSingleQuote = (0, _includes.__includes)(format, "'");
  var existDoubleQuote = (0, _includes.__includes)(format, '"');

  if (existSingleQuote && existDoubleQuote) {
    throw new Error("__stringToDate args(format:".concat(format, ") exists both singleQuote and doubleQuote"));
  }

  _stringToDateRule.__stringToDateRule.initialize(sourceDate, timezoneOffset); // console.log({ sourceDate, timezoneOffset });


  var keys = (0, _objectKeys2._objectKeys)(rule);
  keys.sort((0, _SortFunc2._SortFunc)([[_SortFunc2._SortFunc.order.normal.descending, function (v) {
    return v.length;
  }]]));
  var replaceArray = keys.map(function (key) {
    return [key, rule[key].reg];
  });
  var quoteChar = '';
  var replaceResult;

  if (existSingleQuote === false && existDoubleQuote === false) {
    replaceResult = (0, _replaceAllArray2._replaceAllArray)((0, _escapeRegExp2._escapeRegExp)(format), replaceArray, true);
  } else if (existSingleQuote === false) {
    quoteChar = '"';
  } else if (existDoubleQuote === false) {
    quoteChar = "'";
  }

  if (quoteChar !== '') {
    if ((0, _number.isOdd)((0, _includeCount2._includeCount)(format, quoteChar))) {
      throw new Error("__dateToString args(format:".concat(format, ") exists odd Quotes"));
    }

    var formatStrs = format.split(quoteChar);
    replaceResult = {
      result: '',
      replaceInfo: []
    };

    for (var i = 0, l = formatStrs.length; i < l; i += 2) {
      var replaceResult1 = (0, _replaceAllArray2._replaceAllArray)((0, _escapeRegExp2._escapeRegExp)(formatStrs[i]), replaceArray, true);
      formatStrs[i] = replaceResult1.result;
      replaceResult.replaceInfo = [].concat(_toConsumableArray(replaceResult.replaceInfo), _toConsumableArray(replaceResult1.replaceInfo));
    }

    replaceResult.result = formatStrs.join('');
  }

  var replaceInfoItems = replaceResult.replaceInfo.map(function (e) {
    return rule[keys[e.searchIndex]];
  });
  var matchResult = str.match(new RegExp("".concat(replaceResult.result))); // console.log({ matchResult, replaceResult });

  if (!Array.isArray(matchResult)) {
    return (0, _InvalidDate.InvalidDate)();
  }

  var _matchResult = _toArray(matchResult),
      match = _matchResult[0],
      valueItems = _matchResult.slice(1);

  if (replaceInfoItems.length !== valueItems.length) {
    return (0, _InvalidDate.InvalidDate)();
  }

  replaceInfoItems.forEach(function (item, i) {
    item.value = valueItems[i];
  });
  var result = new Date(sourceDate.getTime());

  var _iterator = _createForOfIteratorHelper(replaceInfoItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var infoItem = _step.value;
      infoItem.func(infoItem.value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var timezoneOffsetMin = _stringToDateRule.__stringToDateRule.finalize(result); // console.log('compare _dateToString',
  //   result, timezoneOffsetMin,
  //   _dateToString(result, format, timezoneOffsetMin, rule.toStringRule),
  // );


  if ((0, _dateToString2._dateToString)(result, format, timezoneOffsetMin, rule.toStringRule) === str) {
    return result;
  } else {
    return (0, _InvalidDate.InvalidDate)();
  }
};

exports._stringToDate = _stringToDate;
_stringToDate.rule = _stringToDateRule.__stringToDateRule;
var _default = {
  _stringToDate: _stringToDate
};
exports["default"] = _default;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__stringToDateRule = void 0;

var _type = __webpack_require__(5);

var _monthNames = __webpack_require__(198);

var _dayOfWeekNames = __webpack_require__(196);

var _includes = __webpack_require__(9);

var _string_common = __webpack_require__(73);

var _textsToMinutes2 = __webpack_require__(207);

var _dateToStringRule = __webpack_require__(194);

var _roundDown2 = __webpack_require__(48);

var _defaultRule, _momentLikeRule;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flagPM = false;
var datetimeInfo = {
  timezoneOffset: null,
  year: null,
  month: null,
  date: null,
  hours: null,
  minutes: null,
  seconds: null,
  milliseconds: null
};

var setTimezoneHH_MM = function setTimezoneHH_MM(UTCText) {
  return function (value) {
    if (value === UTCText) {
      datetimeInfo.timezoneOffset = null;
    } else {
      var _ref = [(0, _string_common._subLength)(value, 0, 1), (0, _string_common._subLength)(value, 1, 2), (0, _string_common._subLength)(value, 4, 2)],
          s = _ref[0],
          h = _ref[1],
          m = _ref[2];
      datetimeInfo.timezoneOffset = -1 * (0, _textsToMinutes2._textsToMinutes)([s, h, m]);
    }
  };
};

var setTimezoneHHMM = function setTimezoneHHMM(UTCText) {
  return function (value) {
    if (value === UTCText) {
      datetimeInfo.timezoneOffset = null;
    } else {
      var _ref2 = [(0, _string_common._subLength)(value, 0, 1), (0, _string_common._subLength)(value, 1, 2), (0, _string_common._subLength)(value, 3, 2)],
          s = _ref2[0],
          h = _ref2[1],
          m = _ref2[2];
      datetimeInfo.timezoneOffset = -1 * (0, _textsToMinutes2._textsToMinutes)([s, h, m]);
    }
  };
};

var setYear4 = function setYear4(value) {
  datetimeInfo.year = Number(value);
};

var setYear2 = function setYear2(value) {
  var plusValue = Math.floor(datetimeInfo.year / 100) * 100;
  datetimeInfo.year = Number(value) + plusValue;
};

var setMonth = function setMonth(value) {
  datetimeInfo.month = Number(value) - 1;
};

var setMonthEnglishChar3 = function setMonthEnglishChar3(value) {
  datetimeInfo.month = _monthNames.__monthNames.EnglishChar3().indexOf(value);
};

var setMonthEnglishChar4 = function setMonthEnglishChar4(value) {
  datetimeInfo.month = _monthNames.__monthNames.EnglishChar4().indexOf(value);
};

var setMonthEnglishLong = function setMonthEnglishLong(value) {
  datetimeInfo.month = _monthNames.__monthNames.EnglishLong().indexOf(value);
};

var setDate = function setDate(value) {
  datetimeInfo.date = Number(value);
};

var setHours = function setHours(value) {
  datetimeInfo.hours = Number(value);
};

var setAMPM = function setAMPM(value) {
  if ((0, _includes.__includes)(value.toLowerCase(), 'p')) {
    flagPM = true;
  }
};

var setHours12 = function setHours12(value) {
  datetimeInfo.hours = Number(value);
};

var setMinutes = function setMinutes(value) {
  datetimeInfo.minutes = Number(value);
};

var setSec = function setSec(value) {
  datetimeInfo.seconds = Number(value);
};

var setMsec = function setMsec(value) {
  datetimeInfo.milliseconds = Number(value);
};

var setMsecX10 = function setMsecX10(value) {
  datetimeInfo.milliseconds = Number(value) * 10;
};

var setMsecX100 = function setMsecX100(value) {
  datetimeInfo.milliseconds = Number(value) * 100;
};

var __stringToDateRule = {
  setYear4: setYear4,
  setYear2: setYear2,
  setMonth: setMonth,
  setDate: setDate,
  setHours: setHours,
  setHours12: setHours12,
  setMinutes: setMinutes,
  setSec: setSec,
  setMsec: setMsec,
  setMsecX10: setMsecX10,
  setMsecX100: setMsecX100,
  setAMPM: setAMPM,
  setMonthEnglishChar3: setMonthEnglishChar3,
  setMonthEnglishChar4: setMonthEnglishChar4,
  setMonthEnglishLong: setMonthEnglishLong,
  setTimezoneHH_MM: setTimezoneHH_MM,
  setTimezoneHHMM: setTimezoneHHMM
};
exports.__stringToDateRule = __stringToDateRule;

__stringToDateRule.initialize = function (sourceDate, timezoneOffset) {
  flagPM = false;
  datetimeInfo.year = sourceDate.getFullYear();
  datetimeInfo.month = sourceDate.getMonth();
  datetimeInfo.date = sourceDate.getDate();
  datetimeInfo.hours = sourceDate.getHours();
  datetimeInfo.minutes = sourceDate.getMinutes();
  datetimeInfo.seconds = sourceDate.getSeconds();
  datetimeInfo.milliseconds = sourceDate.getMilliseconds();
  datetimeInfo.timezoneOffset = timezoneOffset;
};

__stringToDateRule.finalize = function (targetDate) {
  var year = datetimeInfo.year,
      month = datetimeInfo.month,
      date = datetimeInfo.date,
      hours = datetimeInfo.hours,
      minutes = datetimeInfo.minutes,
      seconds = datetimeInfo.seconds,
      milliseconds = datetimeInfo.milliseconds,
      timezoneOffset = datetimeInfo.timezoneOffset;

  if ((0, _type.isUndefined)(timezoneOffset)) {
    targetDate.setFullYear(year, month, date);
    targetDate.setHours(flagPM === true ? hours + 12 : hours, minutes, seconds, milliseconds);
  } else if ((0, _type.isNull)(timezoneOffset)) {
    targetDate.setUTCFullYear(year, month, date);
    targetDate.setUTCHours(flagPM === true ? hours + 12 : hours, minutes, seconds, milliseconds);
  } else {
    targetDate.setUTCFullYear(year, month, date);
    targetDate.setUTCHours(flagPM === true ? hours + 12 : hours, minutes, seconds, milliseconds);
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    targetDate.setUTCMinutes(targetDate.getUTCMinutes() + timezoneOffset);
    targetDate.setUTCSeconds(targetDate.getUTCSeconds() + timezoneOffsetSeconds);
  }

  return timezoneOffset;
};

var r = __stringToDateRule;
var regDayOfWeekEnglishShort = "(".concat(_dayOfWeekNames.__dayOfWeekNames.EnglishShort().join('|'), ")");
var regDayOfWeekEnglishLong = "(".concat(_dayOfWeekNames.__dayOfWeekNames.EnglishLong().join('|'), ")");
var regMonthNameEnglishChar3 = "(".concat(_monthNames.__monthNames.EnglishChar3().join('|'), ")");
var regMonthNameEnglishChar4 = "(".concat(_monthNames.__monthNames.EnglishChar4().join('|'), ")");
var regMonthNameEnglishLong = "(".concat(_monthNames.__monthNames.EnglishLong().join('|'), ")");
var defaultRule = (_defaultRule = {}, _defineProperty(_defaultRule, 'YYYY', {
  reg: '(\\d{4})',
  func: r.setYear4
}), _defineProperty(_defaultRule, 'YY', {
  reg: '(\\d{2})',
  func: r.setYear2
}), _defineProperty(_defaultRule, 'MM', {
  reg: '(\\d{2})',
  func: r.setMonth
}), _defineProperty(_defaultRule, 'M', {
  reg: '(\\d{1,2})',
  func: r.setMonth
}), _defineProperty(_defaultRule, 'DD', {
  reg: '(\\d{2})',
  func: r.setDate
}), _defineProperty(_defaultRule, 'D', {
  reg: '(\\d{1,2})',
  func: r.setDate
}), _defineProperty(_defaultRule, 'HH', {
  reg: '(\\d{2})',
  func: r.setHours
}), _defineProperty(_defaultRule, 'H', {
  reg: '(\\d{1,2})',
  func: r.setHours
}), _defineProperty(_defaultRule, 'hh', {
  reg: '(\\d{2})',
  func: r.setHours12
}), _defineProperty(_defaultRule, 'h', {
  reg: '(\\d{1,2})',
  func: r.setHours12
}), _defineProperty(_defaultRule, 'mm', {
  reg: '(\\d{2})',
  func: r.setMinutes
}), _defineProperty(_defaultRule, 'm', {
  reg: '(\\d{1,2})',
  func: r.setMinutes
}), _defineProperty(_defaultRule, 'ss', {
  reg: '(\\d{2})',
  func: r.setSec
}), _defineProperty(_defaultRule, 's', {
  reg: '(\\d{1,2})',
  func: r.setSec
}), _defineProperty(_defaultRule, 'SSS', {
  reg: '(\\d{3})',
  func: r.setMsec
}), _defineProperty(_defaultRule, 'SS', {
  reg: '(\\d{2})',
  func: r.setMsecX10
}), _defineProperty(_defaultRule, 'S', {
  reg: '(\\d{1})',
  func: r.setMsecX100
}), _defineProperty(_defaultRule, 'aa', {
  reg: '(am|pm)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'AA', {
  reg: '(AM|PM)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'a', {
  reg: '(a|p)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'A', {
  reg: '(A|P)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'ddd', {
  reg: regDayOfWeekEnglishShort,
  func: function func() {}
}), _defineProperty(_defaultRule, 'dddd', {
  reg: regDayOfWeekEnglishLong,
  func: function func() {}
}), _defineProperty(_defaultRule, 'MMM', {
  reg: regMonthNameEnglishChar3,
  func: r.setMonthEnglishChar3
}), _defineProperty(_defaultRule, 'MMMM', {
  reg: regMonthNameEnglishChar4,
  func: r.setMonthEnglishChar4
}), _defineProperty(_defaultRule, 'MMMMM', {
  reg: regMonthNameEnglishLong,
  func: r.setMonthEnglishLong
}), _defineProperty(_defaultRule, 'Z', {
  reg: '(Z|[+|-]\\d{2}:\\d{2})',
  func: r.setTimezoneHH_MM('Z')
}), _defineProperty(_defaultRule, 'ZZ', {
  reg: '(Z|[+|-]\\d{2}\\d{2})',
  func: r.setTimezoneHHMM('Z')
}), _defineProperty(_defaultRule, "toStringRule", _dateToStringRule.__dateToStringRule.Default()), _defaultRule);
var momentLikeRule = (_momentLikeRule = {}, _defineProperty(_momentLikeRule, 'YYYY', {
  reg: '(\\d{4})',
  func: r.setYear4
}), _defineProperty(_momentLikeRule, 'YY', {
  reg: '(\\d{2})',
  func: r.setYear2
}), _defineProperty(_momentLikeRule, 'MM', {
  reg: '(\\d{2})',
  func: r.setMonth
}), _defineProperty(_momentLikeRule, 'M', {
  reg: '(\\d{1,2})',
  func: r.setMonth
}), _defineProperty(_momentLikeRule, 'DD', {
  reg: '(\\d{2})',
  func: r.setDate
}), _defineProperty(_momentLikeRule, 'D', {
  reg: '(\\d{1,2})',
  func: r.setDate
}), _defineProperty(_momentLikeRule, 'HH', {
  reg: '(\\d{2})',
  func: r.setHours
}), _defineProperty(_momentLikeRule, 'H', {
  reg: '(\\d{1,2})',
  func: r.setHours
}), _defineProperty(_momentLikeRule, 'hh', {
  reg: '(\\d{2})',
  func: r.setHours12
}), _defineProperty(_momentLikeRule, 'h', {
  reg: '(\\d{1,2})',
  func: r.setHours12
}), _defineProperty(_momentLikeRule, 'mm', {
  reg: '(\\d{2})',
  func: r.setMinutes
}), _defineProperty(_momentLikeRule, 'm', {
  reg: '(\\d{1,2})',
  func: r.setMinutes
}), _defineProperty(_momentLikeRule, 'ss', {
  reg: '(\\d{2})',
  func: r.setSec
}), _defineProperty(_momentLikeRule, 's', {
  reg: '(\\d{1,2})',
  func: r.setSec
}), _defineProperty(_momentLikeRule, 'SSS', {
  reg: '(\\d{3})',
  func: r.setMsec
}), _defineProperty(_momentLikeRule, 'SS', {
  reg: '(\\d{2})',
  func: r.setMsecX10
}), _defineProperty(_momentLikeRule, 'S', {
  reg: '(\\d{1})',
  func: r.setMsecX100
}), _defineProperty(_momentLikeRule, 'a', {
  reg: '(am|pm)',
  func: r.setAMPM
}), _defineProperty(_momentLikeRule, 'A', {
  reg: '(AM|PM)',
  func: r.setAMPM
}), _defineProperty(_momentLikeRule, 'ddd', {
  reg: regDayOfWeekEnglishShort,
  func: function func() {}
}), _defineProperty(_momentLikeRule, 'dddd', {
  reg: regDayOfWeekEnglishLong,
  func: function func() {}
}), _defineProperty(_momentLikeRule, 'MMM', {
  reg: regMonthNameEnglishChar3,
  func: r.setMonthEnglishChar3
}), _defineProperty(_momentLikeRule, 'MMMM', {
  reg: regMonthNameEnglishLong,
  func: r.setMonthEnglishLong
}), _defineProperty(_momentLikeRule, 'Z', {
  reg: '(Z|[+|-]\\d{2}:\\d{2})',
  func: r.setTimezoneHH_MM('Z')
}), _defineProperty(_momentLikeRule, 'ZZ', {
  reg: '(Z|[+|-]\\d{2}\\d{2})',
  func: r.setTimezoneHHMM('Z')
}), _defineProperty(_momentLikeRule, "toStringRule", _dateToStringRule.__dateToStringRule.MomentLike()), _momentLikeRule);

__stringToDateRule.Default = function () {
  return defaultRule;
};

__stringToDateRule.MomentLike = function () {
  return momentLikeRule;
};

var _default = {
  __stringToDateRule: __stringToDateRule
};
exports["default"] = _default;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._textsToMinutes = void 0;

var _convert = __webpack_require__(171);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * textsToMinutes
 */
var _textsToMinutes = function _textsToMinutes(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      sign = _ref2[0],
      hourStr = _ref2[1],
      minStr = _ref2[2];

  var hour = Math.abs((0, _convert._stringToInteger)(hourStr));
  var min = Math.abs((0, _convert._stringToInteger)(minStr));
  var result = hour * 60 + min;
  result = sign === '-' ? -1 * result : result;
  return result;
};

exports._textsToMinutes = _textsToMinutes;
var _default = {
  _textsToMinutes: _textsToMinutes
};
exports["default"] = _default;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.stringToDate = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _Year2 = __webpack_require__(174);

var _stringToDateRule = __webpack_require__(206);

var _stringToDate2 = __webpack_require__(205);

var stringToDate = function stringToDate(str, format, timezoneOffset) {
  var sourceDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _Year2._Year)('this');
  var rule = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _stringToDateRule.__stringToDateRule.Default();

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, format', 'timezoneOffset, sourceDate, rule')) {
    var _str = str;
    str = _str.str;
    format = _str.format;
    timezoneOffset = _str.timezoneOffset;
    var _str$sourceDate = _str.sourceDate;
    sourceDate = _str$sourceDate === void 0 ? (0, _Year2._Year)('this') : _str$sourceDate;
    var _str$rule = _str.rule;
    rule = _str$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _str$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'timezoneOffset, sourceDate, rule')) {
    var _format = format;
    format = _format.format;
    timezoneOffset = _format.timezoneOffset;
    var _format$sourceDate = _format.sourceDate;
    sourceDate = _format$sourceDate === void 0 ? (0, _Year2._Year)('this') : _format$sourceDate;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, '', 'timezoneOffset, sourceDate, rule', 1)) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
    var _timezoneOffset$sourc = _timezoneOffset.sourceDate;
    sourceDate = _timezoneOffset$sourc === void 0 ? (0, _Year2._Year)('this') : _timezoneOffset$sourc;
    var _timezoneOffset$rule = _timezoneOffset.rule;
    rule = _timezoneOffset$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _timezoneOffset$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, '', 'sourceDate, rule', 1)) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? (0, _Year2._Year)('this') : _sourceDate$sourceDat;
    var _sourceDate$rule = _sourceDate.rule;
    rule = _sourceDate$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _sourceDate$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError("stringToDate args(str:".concat(str, ") is not string"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("stringToDate args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("stringToDate args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("stringToDate args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("stringToDate args(rule:".concat(rule, ") is not object"));
  }

  return (0, _stringToDate2._stringToDate)(str, format, timezoneOffset, sourceDate, rule);
};

exports.stringToDate = stringToDate;
stringToDate.rule = _stringToDate2._stringToDate.rule;
var _default = {
  stringToDate: stringToDate
};
exports["default"] = _default;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._stringToDateUTC = void 0;

var _stringToDateRule2 = __webpack_require__(206);

var _stringToDate2 = __webpack_require__(205);

var _Year2 = __webpack_require__(174);

var _stringToDateUTC = function _stringToDateUTC(str, format) {
  var sourceDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _Year2._Year)('this');
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _stringToDateRule.Default();
  return (0, _stringToDate2._stringToDate)(str, format, null, sourceDate, rule);
};

exports._stringToDateUTC = _stringToDateUTC;
_stringToDateUTC.rule = _stringToDate2._stringToDate.rule;
var _default = {
  _stringToDateUTC: _stringToDateUTC
};
exports["default"] = _default;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.stringToDateUTC = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _Year2 = __webpack_require__(174);

var _stringToDateRule = __webpack_require__(206);

var _stringToDateUTC2 = __webpack_require__(209);

var stringToDateUTC = function stringToDateUTC(str, format) {
  var sourceDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _Year2._Year)('this');
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _stringToDateRule.__stringToDateRule.Default();

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, format', 'sourceDate, rule')) {
    var _str = str;
    str = _str.str;
    format = _str.format;
    var _str$sourceDate = _str.sourceDate;
    sourceDate = _str$sourceDate === void 0 ? (0, _Year2._Year)('this') : _str$sourceDate;
    var _str$rule = _str.rule;
    rule = _str$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _str$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'sourceDate, rule')) {
    var _format = format;
    format = _format.format;
    var _format$sourceDate = _format.sourceDate;
    sourceDate = _format$sourceDate === void 0 ? (0, _Year2._Year)('this') : _format$sourceDate;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, '', 'sourceDate, rule', 1)) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? (0, _Year2._Year)('this') : _sourceDate$sourceDat;
    var _sourceDate$rule = _sourceDate.rule;
    rule = _sourceDate$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _sourceDate$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError("stringToDateUTC args(str:".concat(str, ") is not string"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("stringToDateUTC args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("stringToDateUTC args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("stringToDateUTC args(rule:".concat(rule, ") is not object"));
  }

  return (0, _stringToDateUTC2._stringToDateUTC)(str, format, sourceDate, rule);
};

exports.stringToDateUTC = stringToDateUTC;
stringToDateUTC.rule = _stringToDateUTC2._stringToDateUTC.rule;
var _default = {
  stringToDateUTC: stringToDateUTC
};
exports["default"] = _default;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.minutesToTexts = void 0;

var _type = __webpack_require__(5);

var _minutesToTexts2 = __webpack_require__(199);

/**
 * minutesToTexts
 */
var minutesToTexts = function minutesToTexts(minutes) {
  if (!(0, _type.isInteger)(minutes)) {
    throw new TypeError('minutesToTexts args(minutes) is not integer');
  }

  return (0, _minutesToTexts2._minutesToTexts)(minutes);
};

exports.minutesToTexts = minutesToTexts;
var _default = {
  minutesToTexts: minutesToTexts
};
exports["default"] = _default;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.textsToMinutes = void 0;

var _type = __webpack_require__(5);

var _textsToMinutes2 = __webpack_require__(207);

/**
 * textsToMinutes
 */
var textsToMinutes = function textsToMinutes(texts) {
  if (!(0, _type.isStringArray)(texts)) {
    throw new TypeError('textsToMinutes args(texts) is not array');
  }

  if (texts.length !== 3) {
    throw new TypeError('textsToMinutes args(texts) is array.length !== 0');
  }

  return (0, _textsToMinutes2._textsToMinutes)(texts);
};

exports.textsToMinutes = textsToMinutes;
var _default = {
  textsToMinutes: textsToMinutes
};
exports["default"] = _default;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getDatetime = void 0;

var _type = __webpack_require__(5);

var _cloneDate = __webpack_require__(175);

var _roundDown2 = __webpack_require__(48);

var _getDatetime = function _getDatetime(date, timezoneOffset) {
  var d = (0, _cloneDate.__cloneDate)(date);

  if ((0, _type.isUndefined)(timezoneOffset)) {
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      date: d.getDate(),
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
      milliseconds: d.getMilliseconds()
    };
  } else if ((0, _type.isNull)(timezoneOffset)) {
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      date: d.getUTCDate(),
      hours: d.getUTCHours(),
      minutes: d.getUTCMinutes(),
      seconds: d.getUTCSeconds(),
      milliseconds: d.getUTCMilliseconds()
    };
  } else {
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      date: d.getUTCDate(),
      hours: d.getUTCHours(),
      minutes: d.getUTCMinutes(),
      seconds: d.getUTCSeconds(),
      milliseconds: d.getUTCMilliseconds()
    };
  }
};

exports._getDatetime = _getDatetime;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatetime = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter2 = __webpack_require__(15);

var _getDatetime2 = __webpack_require__(213);

var getDatetime = function getDatetime(date, timezoneOffset) {
  if ((0, _isObjectParameter2._isObjectParameter)(date, 'date', 'timezoneOffset')) {
    var _date = date;
    date = _date.date;
    timezoneOffset = _date.timezoneOffset;
  } else if ((0, _isObjectParameter2._isObjectParameter)(timezoneOffset, 'timezoneOffset')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if (!(0, _type.isDate)(date)) {
    throw new TypeError("getDatetime args(date:".concat(date, ") is not date"));
  }

  if (!(0, _type.isUndefined)(timezoneOffset) && !(0, _type.isNumber)(timezoneOffset)) {
    throw new TypeError("getDatetime args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _getDatetime2._getDatetime)(date, timezoneOffset);
};

exports.getDatetime = getDatetime;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getDatetimeUTC = void 0;

var _getDatetime2 = __webpack_require__(213);

var _getDatetimeUTC = function _getDatetimeUTC(date) {
  return (0, _getDatetime2._getDatetime)(date, null);
};

exports._getDatetimeUTC = _getDatetimeUTC;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatetimeUTC = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter2 = __webpack_require__(15);

var _getDatetimeUTC2 = __webpack_require__(215);

var getDatetimeUTC = function getDatetimeUTC(date) {
  if ((0, _isObjectParameter2._isObjectParameter)(date, 'date')) {
    var _date = date;
    date = _date.date;
  }

  if (!(0, _type.isDate)(date)) {
    throw new TypeError("getDatetimeUTC args(date:".concat(date, ") is not date"));
  }

  return (0, _getDatetimeUTC2._getDatetimeUTC)(date, null);
};

exports.getDatetimeUTC = getDatetimeUTC;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getTimezoneOffset = void 0;

var _roundDown2 = __webpack_require__(48);

var _getTimezoneOffset = function _getTimezoneOffset(date) {
  var _date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));

  var diffMsec = date.getTime() - _date.getTime();

  var minutes = (0, _roundDown2._roundDown)(diffMsec / 60 / 1000);
  var seconds = diffMsec / 1000;
  return {
    minutes: minutes,
    seconds: seconds
  };
};

exports._getTimezoneOffset = _getTimezoneOffset;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimezoneOffset = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter2 = __webpack_require__(15);

var _getTimezoneOffset2 = __webpack_require__(217);

var getTimezoneOffset = function getTimezoneOffset(date) {
  if ((0, _isObjectParameter2._isObjectParameter)(date, 'date')) {
    var _date = date;
    date = _date.date;
  }

  if (!(0, _type.isDate)(date)) {
    throw new TypeError("getTimezoneOffset args(date:".concat(date, ") is not date"));
  }

  return (0, _getTimezoneOffset2._getTimezoneOffset)(date);
};

exports.getTimezoneOffset = getTimezoneOffset;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.wsh = exports.consoleHook = void 0;

var _consoleHook = _interopRequireDefault(__webpack_require__(220));

var _wsh = _interopRequireDefault(__webpack_require__(221));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var consoleHook = _consoleHook["default"];
exports.consoleHook = consoleHook;
var wsh = _wsh["default"];
exports.wsh = wsh;
var _default = {
  consoleHook: consoleHook,
  wsh: wsh
};
exports["default"] = _default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.acceptDebug = exports.acceptError = exports.acceptWarn = exports.acceptInfo = exports.acceptLog = exports.accept = exports._accept = exports.unHookDebug = exports.unHookError = exports.unHookWarn = exports.unHookInfo = exports.unHookLog = exports.unHook = exports._unHook = exports.hookDebug = exports.hookError = exports.hookWarn = exports.hookInfo = exports.hookLog = exports.hook = exports._hook = exports.original = void 0;

var _type = __webpack_require__(5);

var _compare = __webpack_require__(153);

var _array = __webpack_require__(74);

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
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports.Shell = exports.FileSystemObject = void 0;

var _wshFileSystemObject = _interopRequireDefault(__webpack_require__(222));

var _wshShell = _interopRequireDefault(__webpack_require__(223));

var _forceCreateFolder = _interopRequireDefault(__webpack_require__(224));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wshJs = _objectSpread(_objectSpread(_objectSpread({}, _wshFileSystemObject["default"]), _wshShell["default"]), _forceCreateFolder["default"]);

var FileSystemObject = wshJs.FileSystemObject,
    Shell = wshJs.Shell,
    forceCreateFolder = wshJs.forceCreateFolder;
exports.forceCreateFolder = forceCreateFolder;
exports.Shell = Shell;
exports.FileSystemObject = FileSystemObject;
var _default = {
  FileSystemObject: FileSystemObject,
  Shell: Shell,
  forceCreateFolder: forceCreateFolder
};
exports["default"] = _default;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileSystemObject = void 0;

var _isType = __webpack_require__(11);

var _platform = __webpack_require__(7);

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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Shell = void 0;

var _isType = __webpack_require__(11);

var _platform = __webpack_require__(7);

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
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports._forceCreateFolder = void 0;

var _isType = __webpack_require__(11);

var _platform = __webpack_require__(7);

var _wshFileSystemObject = __webpack_require__(222);

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