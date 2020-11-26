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
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = this["webpackJsonpparts"] = this["webpackJsonpparts"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,2,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),

/***/ 107:
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.testCounter = exports.expect = exports.checkEqual = exports.checkCompare = exports.test = exports.it = exports.describe = exports.testFrame = void 0;

var _type = __webpack_require__(5);

var _array = __webpack_require__(61);

var _string = __webpack_require__(109);

var _compare = __webpack_require__(131);

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
  testFrame: testFrame,
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

/***/ 11:
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

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterFirst = exports._tagOuterFirst = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(109);

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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagInnerLast = exports._tagInnerLast = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(109);

var _isObjectParameter = __webpack_require__(15);

var _tagOuterLast2 = __webpack_require__(125);

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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterLast = exports._tagOuterLast = void 0;

var _isType = __webpack_require__(11);

var _string = __webpack_require__(109);

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

/***/ 14:
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.wsh = exports.consoleHook = void 0;

var _consoleHook = _interopRequireDefault(__webpack_require__(157));

var _wsh = _interopRequireDefault(__webpack_require__(158));

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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.acceptDebug = exports.acceptError = exports.acceptWarn = exports.acceptInfo = exports.acceptLog = exports.accept = exports._accept = exports.unHookDebug = exports.unHookError = exports.unHookWarn = exports.unHookInfo = exports.unHookLog = exports.unHook = exports._unHook = exports.hookDebug = exports.hookError = exports.hookWarn = exports.hookInfo = exports.hookLog = exports.hook = exports._hook = exports.original = void 0;

var _type = __webpack_require__(5);

var _compare = __webpack_require__(131);

var _array = __webpack_require__(61);

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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports.Shell = exports.FileSystemObject = void 0;

var _wshFileSystemObject = _interopRequireDefault(__webpack_require__(159));

var _wshShell = _interopRequireDefault(__webpack_require__(160));

var _forceCreateFolder = _interopRequireDefault(__webpack_require__(161));

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

/***/ 159:
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

/***/ 16:
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

/***/ 160:
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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports._forceCreateFolder = void 0;

var _isType = __webpack_require__(11);

var _platform = __webpack_require__(7);

var _wshFileSystemObject = __webpack_require__(159);

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

/***/ }),

/***/ 17:
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

/***/ 18:
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

/***/ 20:
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

/***/ 21:
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

/***/ 22:
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

/***/ 23:
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

/***/ 33:
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
var _default = {
  _Enum: _Enum
};
exports["default"] = _default;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__loop = void 0;

var _type = __webpack_require__(5);

var _IntegerArray2 = __webpack_require__(35);

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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.recursive = exports.Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.guard = exports.assert = exports._recursiveCall = exports._Enum = exports._assert = void 0;

var _assert2 = _interopRequireDefault(__webpack_require__(43));

var _guard = _interopRequireDefault(__webpack_require__(44));

var _sc = _interopRequireDefault(__webpack_require__(46));

var _if_ = _interopRequireDefault(__webpack_require__(47));

var _switch_ = _interopRequireDefault(__webpack_require__(48));

var _loop = _interopRequireDefault(__webpack_require__(49));

var _canUseMap = _interopRequireDefault(__webpack_require__(18));

var _canUseSet = _interopRequireDefault(__webpack_require__(21));

var _Enum2 = _interopRequireDefault(__webpack_require__(33));

var _Enum3 = _interopRequireDefault(__webpack_require__(51));

var _recursive = _interopRequireDefault(__webpack_require__(52));

var _recursive2 = _interopRequireDefault(__webpack_require__(54));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var syntaxJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _assert2["default"]), _guard["default"]), _sc["default"]), _if_["default"]), _switch_["default"]), _loop["default"]), _canUseMap["default"]), _canUseSet["default"]), _Enum2["default"]), _Enum3["default"]), _recursive["default"]), _recursive2["default"]);

var _assert = syntaxJs._assert,
    _Enum = syntaxJs._Enum,
    _recursiveCall = syntaxJs._recursiveCall,
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
    recursive = syntaxJs.recursive;
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
exports._recursiveCall = _recursiveCall;
exports._Enum = _Enum;
exports._assert = _assert;
var _default = {
  _assert: _assert,
  _Enum: _Enum,
  _recursiveCall: _recursiveCall,
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
};
exports["default"] = _default;

/***/ }),

/***/ 43:
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.guard = void 0;

var _type = __webpack_require__(5);

var _functionValue = __webpack_require__(45);

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

/***/ 46:
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.if_ = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _functionValue = __webpack_require__(45);

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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.switch_ = void 0;

var _type = __webpack_require__(5);

var _functionValue = __webpack_require__(45);

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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loop = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _IntegerArray2 = __webpack_require__(35);

var _objectEntries2 = __webpack_require__(50);

var _loop = __webpack_require__(34);

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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isExceptionAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = exports.isNotSymbol = exports.isSymbol = exports.isNotException = exports.isException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = exports.typeName = void 0;
exports["default"] = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotExceptionAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = void 0;

var _typeName = _interopRequireDefault(__webpack_require__(6));

var _isType = _interopRequireDefault(__webpack_require__(11));

var _isException = _interopRequireDefault(__webpack_require__(14));

var _isSymbol = _interopRequireDefault(__webpack_require__(16));

var _isMap = _interopRequireDefault(__webpack_require__(17));

var _isSet = _interopRequireDefault(__webpack_require__(20));

var _isTypeAll = _interopRequireDefault(__webpack_require__(22));

var _isTypeArray = _interopRequireDefault(__webpack_require__(23));

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

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  objectToString: objectToString,
  typeName: typeName,
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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Enum = void 0;

var _type = __webpack_require__(5);

var _isObjectParameter = __webpack_require__(15);

var _Enum2 = __webpack_require__(33);

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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._recursive = void 0;

var _isType = __webpack_require__(11);

var _loop = __webpack_require__(34);

var _objectEntries2 = __webpack_require__(50);

var _arrayEntries2 = __webpack_require__(53);

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

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.recursive = void 0;

var _isType = __webpack_require__(11);

var _isObjectParameter = __webpack_require__(15);

var _recursive2 = __webpack_require__(52);

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

/***/ 6:
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

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math', 'JSON', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'Map', 'WeakMap', 'Set', 'WeakSet', 'Symbol', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'WebAssembly', 'Intl', 'Module'], objectToStrValue)) {
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

/***/ 8:
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


/***/ })

/******/ });
});