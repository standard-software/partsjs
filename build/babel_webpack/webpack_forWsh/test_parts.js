(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test_parts"] = factory();
	else
		root["test_parts"] = factory();
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
/******/ 	var jsonpArray = this["webpackJsonptest_parts"] = this["webpackJsonptest_parts"] || [];
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_type = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable new-cap */

/* eslint-disable no-array-constructor */

/* eslint-disable no-new-object */

/* eslint-disable no-new-wrappers */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_type = function test_execute_type(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_type', function () {
    var isThrown = parts.test.isThrown;
    var _parts$type = parts.type,
        typeName = _parts$type.typeName,
        isPrimitiveType = _parts$type.isPrimitiveType,
        isReferenceType = _parts$type.isReferenceType,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull,
        isNaNStrict = _parts$type.isNaNStrict,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isObjectNormal = _parts$type.isObjectNormal,
        isObjectFromNull = _parts$type.isObjectFromNull,
        isObjectLike = _parts$type.isObjectLike,
        isArray = _parts$type.isArray,
        isArraySeries = _parts$type.isArraySeries,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isBooleanObject = _parts$type.isBooleanObject,
        isNumberObject = _parts$type.isNumberObject,
        isStringObject = _parts$type.isStringObject,
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
        isSymbol = _parts$type.isSymbol,
        isMap = _parts$type.isMap,
        isWeakMap = _parts$type.isWeakMap,
        isSet = _parts$type.isSet,
        isWeakSet = _parts$type.isWeakSet,
        isNotUndefined = _parts$type.isNotUndefined,
        isNotNull = _parts$type.isNotNull,
        isNotNaNStrict = _parts$type.isNotNaNStrict,
        isNotBoolean = _parts$type.isNotBoolean,
        isNotNumber = _parts$type.isNotNumber,
        isNotInteger = _parts$type.isNotInteger,
        isNotString = _parts$type.isNotString,
        isNotFunction = _parts$type.isNotFunction,
        isNotObject = _parts$type.isNotObject,
        isNotObjectNormal = _parts$type.isNotObjectNormal,
        isNotObjectFromNull = _parts$type.isNotObjectFromNull,
        isNotObjectType = _parts$type.isNotObjectType,
        isNotArray = _parts$type.isNotArray,
        isNotArrayType = _parts$type.isNotArrayType,
        isNotDate = _parts$type.isNotDate,
        isNotRegExp = _parts$type.isNotRegExp,
        isNotException = _parts$type.isNotException,
        isNotBooleanObject = _parts$type.isNotBooleanObject,
        isNotNumberObject = _parts$type.isNotNumberObject,
        isNotStringObject = _parts$type.isNotStringObject,
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray,
        isNotSymbol = _parts$type.isNotSymbol,
        isNotMap = _parts$type.isNotMap,
        isNotWeakMap = _parts$type.isNotWeakMap,
        isNotSet = _parts$type.isNotSet,
        isNotWeakSet = _parts$type.isNotWeakSet,
        isUndefinedAll = _parts$type.isUndefinedAll,
        isNullAll = _parts$type.isNullAll,
        isNaNStrictAll = _parts$type.isNaNStrictAll,
        isBooleanAll = _parts$type.isBooleanAll,
        isNumberAll = _parts$type.isNumberAll,
        isIntegerAll = _parts$type.isIntegerAll,
        isStringAll = _parts$type.isStringAll,
        isFunctionAll = _parts$type.isFunctionAll,
        isObjectAll = _parts$type.isObjectAll,
        isObjectNormalAll = _parts$type.isObjectNormalAll,
        isObjectFromNullAll = _parts$type.isObjectFromNullAll,
        isObjectLikeAll = _parts$type.isObjectLikeAll,
        isArrayAll = _parts$type.isArrayAll,
        isArraySeriesAll = _parts$type.isArraySeriesAll,
        isDateAll = _parts$type.isDateAll,
        isRegExpAll = _parts$type.isRegExpAll,
        isExceptionAll = _parts$type.isExceptionAll,
        isBooleanObjectAll = _parts$type.isBooleanObjectAll,
        isNumberObjectAll = _parts$type.isNumberObjectAll,
        isStringObjectAll = _parts$type.isStringObjectAll,
        isEmptyObjectAll = _parts$type.isEmptyObjectAll,
        isEmptyArrayAll = _parts$type.isEmptyArrayAll,
        isSymbolAll = _parts$type.isSymbolAll,
        isMapAll = _parts$type.isMapAll,
        isWeakMapAll = _parts$type.isWeakMapAll,
        isSetAll = _parts$type.isSetAll,
        isWeakSetAll = _parts$type.isWeakSetAll,
        isNotUndefinedAll = _parts$type.isNotUndefinedAll,
        isNotNullAll = _parts$type.isNotNullAll,
        isNotNaNStrictAll = _parts$type.isNotNaNStrictAll,
        isNotBooleanAll = _parts$type.isNotBooleanAll,
        isNotNumberAll = _parts$type.isNotNumberAll,
        isNotIntegerAll = _parts$type.isNotIntegerAll,
        isNotStringAll = _parts$type.isNotStringAll,
        isNotFunctionAll = _parts$type.isNotFunctionAll,
        isNotObjectAll = _parts$type.isNotObjectAll,
        isNotObjectNormalAll = _parts$type.isNotObjectNormalAll,
        isNotObjectFromNullAll = _parts$type.isNotObjectFromNullAll,
        isNotObjectTypeAll = _parts$type.isNotObjectTypeAll,
        isNotArrayAll = _parts$type.isNotArrayAll,
        isNotArrayTypeAll = _parts$type.isNotArrayTypeAll,
        isNotDateAll = _parts$type.isNotDateAll,
        isNotRegExpAll = _parts$type.isNotRegExpAll,
        isNotExceptionAll = _parts$type.isNotExceptionAll,
        isNotBooleanObjectAll = _parts$type.isNotBooleanObjectAll,
        isNotNumberObjectAll = _parts$type.isNotNumberObjectAll,
        isNotStringObjectAll = _parts$type.isNotStringObjectAll,
        isNotEmptyObjectAll = _parts$type.isNotEmptyObjectAll,
        isNotEmptyArrayAll = _parts$type.isNotEmptyArrayAll,
        isNotSymbolAll = _parts$type.isNotSymbolAll,
        isNotMapAll = _parts$type.isNotMapAll,
        isNotWeakMapAll = _parts$type.isNotWeakMapAll,
        isNotSetAll = _parts$type.isNotSetAll,
        isNotWeakSetAll = _parts$type.isNotWeakSetAll,
        isUndefinedArray = _parts$type.isUndefinedArray,
        isNullArray = _parts$type.isNullArray,
        isNaNStrictArray = _parts$type.isNaNStrictArray,
        isBooleanArray = _parts$type.isBooleanArray,
        isNumberArray = _parts$type.isNumberArray,
        isIntegerArray = _parts$type.isIntegerArray,
        isStringArray = _parts$type.isStringArray,
        isFunctionArray = _parts$type.isFunctionArray,
        isObjectArray = _parts$type.isObjectArray,
        isObjectNormalArray = _parts$type.isObjectNormalArray,
        isObjectFromNullArray = _parts$type.isObjectFromNullArray,
        isObjectLikeArray = _parts$type.isObjectLikeArray,
        isArrayArray = _parts$type.isArrayArray,
        isArraySeriesArray = _parts$type.isArraySeriesArray,
        isDateArray = _parts$type.isDateArray,
        isRegExpArray = _parts$type.isRegExpArray,
        isExceptionArray = _parts$type.isExceptionArray,
        isBooleanObjectArray = _parts$type.isBooleanObjectArray,
        isNumberObjectArray = _parts$type.isNumberObjectArray,
        isStringObjectArray = _parts$type.isStringObjectArray,
        isEmptyObjectArray = _parts$type.isEmptyObjectArray,
        isEmptyArrayArray = _parts$type.isEmptyArrayArray,
        isSymbolArray = _parts$type.isSymbolArray,
        isMapArray = _parts$type.isMapArray,
        isWeakMapArray = _parts$type.isWeakMapArray,
        isSetArray = _parts$type.isSetArray,
        isWeakSetArray = _parts$type.isWeakSetArray,
        isNotUndefinedArray = _parts$type.isNotUndefinedArray,
        isNotNullArray = _parts$type.isNotNullArray,
        isNotNaNStrictArray = _parts$type.isNotNaNStrictArray,
        isNotBooleanArray = _parts$type.isNotBooleanArray,
        isNotNumberArray = _parts$type.isNotNumberArray,
        isNotIntegerArray = _parts$type.isNotIntegerArray,
        isNotStringArray = _parts$type.isNotStringArray,
        isNotFunctionArray = _parts$type.isNotFunctionArray,
        isNotObjectArray = _parts$type.isNotObjectArray,
        isNotObjectNormalArray = _parts$type.isNotObjectNormalArray,
        isNotObjectFromNullArray = _parts$type.isNotObjectFromNullArray,
        isNotObjectTypeArray = _parts$type.isNotObjectTypeArray,
        isNotArrayArray = _parts$type.isNotArrayArray,
        isNotArrayTypeArray = _parts$type.isNotArrayTypeArray,
        isNotDateArray = _parts$type.isNotDateArray,
        isNotRegExpArray = _parts$type.isNotRegExpArray,
        isNotExceptionArray = _parts$type.isNotExceptionArray,
        isNotBooleanObjectArray = _parts$type.isNotBooleanObjectArray,
        isNotNumberObjectArray = _parts$type.isNotNumberObjectArray,
        isNotStringObjectArray = _parts$type.isNotStringObjectArray,
        isNotEmptyObjectArray = _parts$type.isNotEmptyObjectArray,
        isNotEmptyArrayArray = _parts$type.isNotEmptyArrayArray,
        isNotSymbolArray = _parts$type.isNotSymbolArray,
        isNotMapArray = _parts$type.isNotMapArray,
        isNotWeakMapArray = _parts$type.isNotWeakMapArray,
        isNotSetArray = _parts$type.isNotSetArray,
        isNotWeakSetArray = _parts$type.isNotWeakSetArray;
    var allMatchSome = parts.compare.allMatchSome;
    var objectToString = parts.objectToString;

    var test_checkType = function test_checkType() {
      it('test_checkType', function () {
        var checkType = function checkType(typeofName, objectStringName, value) {
          checkEqual(typeofName, _typeof(value)); // checkEqual(true, parts.includes(objectStringName, objectToString(value)));

          checkEqual(objectStringName, objectToString(value));
        };

        if (parts.platform.isWindowsScriptHost()) {
          checkType('undefined', '[object Object]', undefined);
          checkType('object', '[object Object]', null);
        } else if (parts.platform.isGasRhino()) {
          checkType('undefined', '[object Object]', undefined);
          checkType('object', '[object Object]', null); // bad specification
        } else {
          checkType('undefined', '[object Undefined]', undefined);
          checkType('object', '[object Null]', null); // bad specification
        }

        checkType('boolean', '[object Boolean]', true);
        checkType('boolean', '[object Boolean]', false);
        checkType('object', '[object Boolean]', new Boolean());
        checkType('number', '[object Number]', 1);
        checkType('number', '[object Number]', NaN);
        checkType('number', '[object Number]', Infinity);
        checkType('object', '[object Number]', new Number(1));
        checkType('object', '[object Number]', new Number(NaN));
        checkType('object', '[object Number]', new Number(Infinity));
        checkType('object', '[object Number]', new Number(null));
        checkType('object', '[object Number]', new Number(undefined));
        checkType('string', '[object String]', '');
        checkType('string', '[object String]', '1');
        checkType('object', '[object String]', new String(''));
        checkType('object', '[object String]', new String('1'));
        checkType('object', '[object String]', new String(null));
        checkType('object', '[object String]', new String(undefined));

        function testFunc() {}

        checkType('function', '[object Function]', testFunc);
        checkType('function', '[object Function]', function () {});
        checkType('function', '[object Function]', function () {});
        checkType('object', '[object Object]', {});
        checkType('object', '[object Object]', new Object());
        checkType('object', '[object Array]', []);
        checkType('object', '[object Array]', new Array());
        checkType('object', '[object RegExp]', /^a/);
        checkType('object', '[object RegExp]', new RegExp('^a'));
        checkType('object', '[object Date]', new Date());
        checkType('object', '[object Math]', Math);

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkType('object', '[object JSON]', JSON);
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkType('object', '[object Int8Array]', new Int8Array());
          checkType('object', '[object Uint8Array]', new Uint8Array());
          checkType('object', '[object Uint8ClampedArray]', new Uint8ClampedArray());
          checkType('object', '[object Int16Array]', new Int16Array());
          checkType('object', '[object Uint16Array]', new Uint16Array());
          checkType('object', '[object Int32Array]', new Int32Array());
          checkType('object', '[object Uint32Array]', new Uint32Array());
          checkType('object', '[object Float32Array]', new Float32Array());
          checkType('object', '[object Float64Array]', new Float64Array());
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkType('object', '[object Object]', new Map());
          checkType('object', '[object Object]', new WeakMap());
          checkType('object', '[object Object]', new Set());
        } else {
          checkType('object', '[object Map]', new Map());
          checkType('object', '[object WeakMap]', new WeakMap());
          checkType('object', '[object Set]', new Set());
          checkType('object', '[object WeakSet]', new WeakSet());
          checkType('symbol', '[object Symbol]', Symbol());
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkType('object', '[object ArrayBuffer]', new ArrayBuffer(8));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkType('object', '[object SharedArrayBuffer]', new SharedArrayBuffer(8));
          checkType('object', '[object Atomics]', Atomics);
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkType('object', '[object Object]', new DataView(new ArrayBuffer(16)));
        } else {
          checkType('object', '[object DataView]', new DataView(new ArrayBuffer(16)));
          checkType('function', '[object Function]', Promise);
        }

        if (parts.platform.isDeno()) {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return 1;

                  case 2:
                    _context.next = 4;
                    return 2;

                  case 4:
                    _context.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2);
          }))).constructor;
          checkType('object', '[object Generator]', Generator());
          checkType('function', '[object GeneratorFunction]', new GeneratorFunction());
          checkType('function', '[object AsyncFunction]', new AsyncFunction());
        } // Proxy


        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkType('object', '[object Object]', new Proxy({}, {}));
        } // WebAssembly


        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkType('object', '[object Object]', WebAssembly);
        } else {
          checkType('object', '[object WebAssembly]', WebAssembly);
        } // Reflect


        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkType('object', '[object Reflect]', Reflect);
        } else {
          checkType('object', '[object Object]', Reflect);
        } // Intl


        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkType('object', '[object Intl]', Intl);
        } else {
          checkType('object', '[object Object]', Intl);
        }
      });
    };

    var test_typeName = function test_typeName() {
      it('test_typeName', function () {
        checkEqual('Undefined', typeName(undefined));
        checkEqual('Null', typeName(null));
        checkEqual('Boolean', typeName(true));
        checkEqual('Boolean', typeName(false));
        checkEqual('BooleanObject', typeName(new Boolean()));
        checkEqual('Number', typeName(1));
        checkEqual('NaN', typeName(NaN));
        checkEqual('Infinity', typeName(Infinity));
        checkEqual('Infinity', typeName(-Infinity));
        checkEqual('Infinity', typeName(Infinity / 2));
        checkEqual('NaN', typeName(Infinity / Infinity));
        checkEqual('NumberObject', typeName(new Number(0)));
        checkEqual('NumberObject', typeName(new Number(1)));
        checkEqual('NumberObject', typeName(new Number(NaN)));
        checkEqual('NumberObject', typeName(new Number(Infinity)));
        checkEqual('NumberObject', typeName(new Number(-Infinity)));
        checkEqual('NumberObject', typeName(new Number('')));
        checkEqual('NumberObject', typeName(new Number('0')));
        checkEqual('NumberObject', typeName(new Number('1')));
        checkEqual('NumberObject', typeName(new Number(null)));
        checkEqual('NumberObject', typeName(new Number()));
        checkEqual('String', typeName(''));
        checkEqual('String', typeName('a'));
        checkEqual('StringObject', typeName(new String('')));
        checkEqual('StringObject', typeName(new String('a')));
        checkEqual('StringObject', typeName(new String(1)));
        checkEqual('StringObject', typeName(new String(null)));
        checkEqual('StringObject', typeName(new String()));
        checkEqual('Object', typeName({}));
        checkEqual('Object', typeName(new Object()));
        checkEqual('Object', typeName(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('Object', typeName(Object.create({})));
          checkEqual('Object', typeName(Object.create({
            a: 'A'
          })));
          checkEqual('ObjectFromNull', typeName(Object.create(null)));
        }

        function testFunc() {}

        checkEqual('Function', typeName(testFunc));
        checkEqual('Function', typeName(function () {}));
        checkEqual('Function', typeName(function () {}));
        checkEqual('Array', typeName([]));
        checkEqual('Array', typeName([0, 1, 2]));
        checkEqual('Array', typeName(new Array()));
        checkEqual('RegExp', typeName(/^a/));
        checkEqual('RegExp', typeName(new RegExp('^a')));
        checkEqual('Date', typeName(new Date()));
        checkEqual('Math', typeName(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual('JSON', typeName(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual('Int8Array', typeName(new Int8Array()));
          checkEqual('Uint8Array', typeName(new Uint8Array()));
          checkEqual('Uint8ClampedArray', typeName(new Uint8ClampedArray()));
          checkEqual('Int16Array', typeName(new Int16Array()));
          checkEqual('Uint16Array', typeName(new Uint16Array()));
          checkEqual('Int32Array', typeName(new Int32Array()));
          checkEqual('Uint32Array', typeName(new Uint32Array()));
          checkEqual('Float32Array', typeName(new Float32Array()));
          checkEqual('Float64Array', typeName(new Float64Array()));
          checkEqual('ArrayBuffer', typeName(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual('Map', typeName(new Map()));
          checkEqual('WeakMap', typeName(new WeakMap()));
          checkEqual('Set', typeName(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual('WeakSet', typeName(new WeakSet()));
          checkEqual('Symbol', typeName(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual('SharedArrayBuffer', typeName(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual('Atomics', typeName(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual('Object', typeName(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual('DataView', typeName(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual('Function', typeName(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return 1;

                  case 2:
                    _context4.next = 4;
                    return 2;

                  case 4:
                    _context4.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee3);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee4);
          }))).constructor;
          checkEqual('Generator', typeName(Generator()));
          checkEqual('GeneratorFunction', typeName(new GeneratorFunction()));
          checkEqual('AsyncFunction', typeName(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual('Object', typeName(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual('Object', typeName(WebAssembly));
        } else {
          checkEqual('WebAssembly', typeName(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual('Reflect', typeName(Reflect));
        } else {
          checkEqual('Object', typeName(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual('Intl', typeName(Intl));
        } else {
          checkEqual('Object', typeName(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual('Module', typeName(parts));
        }
      });
    };

    var test_isObjectLike2 = function test_isObjectLike2() {
      it('test_isObjectLike2', function () {
        checkEqual(false, isObjectLike(undefined));
        checkEqual(false, isObjectLike(null));
        checkEqual(false, isObjectLike(true));
        checkEqual(false, isObjectLike(false));
        checkEqual(true, isObjectLike(new Boolean()));
        checkEqual(false, isObjectLike(1));
        checkEqual(false, isObjectLike(NaN));
        checkEqual(false, isObjectLike(Infinity));
        checkEqual(false, isObjectLike(-Infinity));
        checkEqual(false, isObjectLike(Infinity / 2));
        checkEqual(false, isObjectLike(Infinity / Infinity));
        checkEqual(true, isObjectLike(new Number(0)));
        checkEqual(true, isObjectLike(new Number(1)));
        checkEqual(true, isObjectLike(new Number(NaN)));
        checkEqual(true, isObjectLike(new Number(Infinity)));
        checkEqual(true, isObjectLike(new Number(-Infinity)));
        checkEqual(true, isObjectLike(new Number('')));
        checkEqual(true, isObjectLike(new Number('0')));
        checkEqual(true, isObjectLike(new Number('1')));
        checkEqual(true, isObjectLike(new Number(null)));
        checkEqual(true, isObjectLike(new Number()));
        checkEqual(false, isObjectLike(''));
        checkEqual(false, isObjectLike('a'));
        checkEqual(true, isObjectLike(new String('')));
        checkEqual(true, isObjectLike(new String('a')));
        checkEqual(true, isObjectLike(new String(1)));
        checkEqual(true, isObjectLike(new String(null)));
        checkEqual(true, isObjectLike(new String()));
        checkEqual(true, isObjectLike({}));
        checkEqual(true, isObjectLike(new Object()));
        checkEqual(true, isObjectLike(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObjectLike(Object.create({})));
          checkEqual(true, isObjectLike(Object.create({
            a: 'A'
          })));
          checkEqual(true, isObjectLike(Object.create(null)));
        }

        function testFunc() {}

        checkEqual(true, isObjectLike(testFunc));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike([]));
        checkEqual(true, isObjectLike([0, 1, 2]));
        checkEqual(true, isObjectLike(new Array()));
        checkEqual(true, isObjectLike(/^a/));
        checkEqual(true, isObjectLike(new RegExp('^a')));
        checkEqual(true, isObjectLike(new Date()));
        checkEqual(true, isObjectLike(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual(true, isObjectLike(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isObjectLike(new Int8Array()));
          checkEqual(true, isObjectLike(new Uint8Array()));
          checkEqual(true, isObjectLike(new Uint8ClampedArray()));
          checkEqual(true, isObjectLike(new Int16Array()));
          checkEqual(true, isObjectLike(new Uint16Array()));
          checkEqual(true, isObjectLike(new Int32Array()));
          checkEqual(true, isObjectLike(new Uint32Array()));
          checkEqual(true, isObjectLike(new Float32Array()));
          checkEqual(true, isObjectLike(new Float64Array()));
          checkEqual(true, isObjectLike(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isObjectLike(new Map()));
          checkEqual(true, isObjectLike(new WeakMap()));
          checkEqual(true, isObjectLike(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isObjectLike(new WeakSet()));
          checkEqual(false, isObjectLike(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isObjectLike(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isObjectLike(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, isObjectLike(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(true, isObjectLike(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isObjectLike(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return 1;

                  case 2:
                    _context7.next = 4;
                    return 2;

                  case 4:
                    _context7.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee5);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee6);
          }))).constructor;
          checkEqual(true, isObjectLike(Generator()));
          checkEqual(true, isObjectLike(new GeneratorFunction()));
          checkEqual(true, isObjectLike(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isObjectLike(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual(true, isObjectLike(WebAssembly));
        } else {
          checkEqual(true, isObjectLike(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isObjectLike(Reflect));
        } else {
          checkEqual(true, isObjectLike(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isObjectLike(Intl));
        } else {
          checkEqual(true, isObjectLike(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(true, isObjectLike(parts));
        }
      });
    };

    var test_isPrimitiveType = function test_isPrimitiveType() {
      it('test_isPrimitiveType', function () {
        checkEqual(true, isPrimitiveType(undefined));
        checkEqual(true, isPrimitiveType(null));
        checkEqual(true, isPrimitiveType(true));
        checkEqual(true, isPrimitiveType(false));
        checkEqual(false, isPrimitiveType(new Boolean()));
        checkEqual(true, isPrimitiveType(1));
        checkEqual(true, isPrimitiveType(NaN));
        checkEqual(true, isPrimitiveType(Infinity));
        checkEqual(true, isPrimitiveType(-Infinity));
        checkEqual(true, isPrimitiveType(Infinity / 2));
        checkEqual(true, isPrimitiveType(Infinity / Infinity));
        checkEqual(false, isPrimitiveType(new Number(0)));
        checkEqual(false, isPrimitiveType(new Number(1)));
        checkEqual(false, isPrimitiveType(new Number(NaN)));
        checkEqual(false, isPrimitiveType(new Number(Infinity)));
        checkEqual(false, isPrimitiveType(new Number(-Infinity)));
        checkEqual(false, isPrimitiveType(new Number('')));
        checkEqual(false, isPrimitiveType(new Number('0')));
        checkEqual(false, isPrimitiveType(new Number('1')));
        checkEqual(false, isPrimitiveType(new Number(null)));
        checkEqual(false, isPrimitiveType(new Number()));
        checkEqual(true, isPrimitiveType(''));
        checkEqual(true, isPrimitiveType('a'));
        checkEqual(false, isPrimitiveType(new String('')));
        checkEqual(false, isPrimitiveType(new String('a')));
        checkEqual(false, isPrimitiveType(new String(1)));
        checkEqual(false, isPrimitiveType(new String(null)));
        checkEqual(false, isPrimitiveType(new String()));
        checkEqual(false, isPrimitiveType({}));
        checkEqual(false, isPrimitiveType(new Object()));
        checkEqual(false, isPrimitiveType(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isPrimitiveType(Object.create({})));
          checkEqual(false, isPrimitiveType(Object.create({
            a: 'A'
          })));
          checkEqual(false, isPrimitiveType(Object.create(null)));
        }

        function testFunc() {}

        checkEqual(false, isPrimitiveType(testFunc));
        checkEqual(false, isPrimitiveType(function () {}));
        checkEqual(false, isPrimitiveType(function () {}));
        checkEqual(false, isPrimitiveType([]));
        checkEqual(false, isPrimitiveType([0, 1, 2]));
        checkEqual(false, isPrimitiveType(new Array()));
        checkEqual(false, isPrimitiveType(/^a/));
        checkEqual(false, isPrimitiveType(new RegExp('^a')));
        checkEqual(false, isPrimitiveType(new Date()));
        checkEqual(false, isPrimitiveType(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual(false, isPrimitiveType(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(false, isPrimitiveType(new Int8Array()));
          checkEqual(false, isPrimitiveType(new Uint8Array()));
          checkEqual(false, isPrimitiveType(new Uint8ClampedArray()));
          checkEqual(false, isPrimitiveType(new Int16Array()));
          checkEqual(false, isPrimitiveType(new Uint16Array()));
          checkEqual(false, isPrimitiveType(new Int32Array()));
          checkEqual(false, isPrimitiveType(new Uint32Array()));
          checkEqual(false, isPrimitiveType(new Float32Array()));
          checkEqual(false, isPrimitiveType(new Float64Array()));
          checkEqual(false, isPrimitiveType(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(false, isPrimitiveType(new Map()));
          checkEqual(false, isPrimitiveType(new WeakMap()));
          checkEqual(false, isPrimitiveType(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(false, isPrimitiveType(new WeakSet()));
          checkEqual(true, isPrimitiveType(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(false, isPrimitiveType(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(false, isPrimitiveType(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual(false, isPrimitiveType(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(false, isPrimitiveType(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(false, isPrimitiveType(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return 1;

                  case 2:
                    _context10.next = 4;
                    return 2;

                  case 4:
                    _context10.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee7);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee8);
          }))).constructor;
          checkEqual(false, isPrimitiveType(Generator()));
          checkEqual(false, isPrimitiveType(new GeneratorFunction()));
          checkEqual(false, isPrimitiveType(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(false, isPrimitiveType(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual(false, isPrimitiveType(WebAssembly));
        } else {
          checkEqual(false, isPrimitiveType(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(false, isPrimitiveType(Reflect));
        } else {
          checkEqual(false, isPrimitiveType(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(false, isPrimitiveType(Intl));
        } else {
          checkEqual(false, isPrimitiveType(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(false, isPrimitiveType(parts));
        }
      });
    };

    var test_isReferenceType = function test_isReferenceType() {
      it('test_isReferenceType', function () {
        // return value exactly matches isObjectLike
        checkEqual(false, isReferenceType(undefined));
        checkEqual(false, isReferenceType(null));
        checkEqual(false, isReferenceType(true));
        checkEqual(false, isReferenceType(false));
        checkEqual(true, isReferenceType(new Boolean()));
        checkEqual(false, isReferenceType(1));
        checkEqual(false, isReferenceType(NaN));
        checkEqual(false, isReferenceType(Infinity));
        checkEqual(false, isReferenceType(-Infinity));
        checkEqual(false, isReferenceType(Infinity / 2));
        checkEqual(false, isReferenceType(Infinity / Infinity));
        checkEqual(true, isReferenceType(new Number(0)));
        checkEqual(true, isReferenceType(new Number(1)));
        checkEqual(true, isReferenceType(new Number(NaN)));
        checkEqual(true, isReferenceType(new Number(Infinity)));
        checkEqual(true, isReferenceType(new Number(-Infinity)));
        checkEqual(true, isReferenceType(new Number('')));
        checkEqual(true, isReferenceType(new Number('0')));
        checkEqual(true, isReferenceType(new Number('1')));
        checkEqual(true, isReferenceType(new Number(null)));
        checkEqual(true, isReferenceType(new Number()));
        checkEqual(false, isReferenceType(''));
        checkEqual(false, isReferenceType('a'));
        checkEqual(true, isReferenceType(new String('')));
        checkEqual(true, isReferenceType(new String('a')));
        checkEqual(true, isReferenceType(new String(1)));
        checkEqual(true, isReferenceType(new String(null)));
        checkEqual(true, isReferenceType(new String()));
        checkEqual(true, isReferenceType({}));
        checkEqual(true, isReferenceType(new Object()));
        checkEqual(true, isReferenceType(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isReferenceType(Object.create({})));
          checkEqual(true, isReferenceType(Object.create({
            a: 'A'
          })));
          checkEqual(true, isReferenceType(Object.create(null)));
        }

        function testFunc() {}

        checkEqual(true, isReferenceType(testFunc));
        checkEqual(true, isReferenceType(function () {}));
        checkEqual(true, isReferenceType(function () {}));
        checkEqual(true, isReferenceType([]));
        checkEqual(true, isReferenceType([0, 1, 2]));
        checkEqual(true, isReferenceType(new Array()));
        checkEqual(true, isReferenceType(/^a/));
        checkEqual(true, isReferenceType(new RegExp('^a')));
        checkEqual(true, isReferenceType(new Date()));
        checkEqual(true, isReferenceType(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual(true, isReferenceType(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isReferenceType(new Int8Array()));
          checkEqual(true, isReferenceType(new Uint8Array()));
          checkEqual(true, isReferenceType(new Uint8ClampedArray()));
          checkEqual(true, isReferenceType(new Int16Array()));
          checkEqual(true, isReferenceType(new Uint16Array()));
          checkEqual(true, isReferenceType(new Int32Array()));
          checkEqual(true, isReferenceType(new Uint32Array()));
          checkEqual(true, isReferenceType(new Float32Array()));
          checkEqual(true, isReferenceType(new Float64Array()));
          checkEqual(true, isReferenceType(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isReferenceType(new Map()));
          checkEqual(true, isReferenceType(new WeakMap()));
          checkEqual(true, isReferenceType(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isReferenceType(new WeakSet()));
          checkEqual(false, isReferenceType(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isReferenceType(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isReferenceType(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, isReferenceType(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(true, isReferenceType(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isReferenceType(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return 1;

                  case 2:
                    _context13.next = 4;
                    return 2;

                  case 4:
                    _context13.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee9);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee10);
          }))).constructor;
          checkEqual(true, isReferenceType(Generator()));
          checkEqual(true, isReferenceType(new GeneratorFunction()));
          checkEqual(true, isReferenceType(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isReferenceType(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual(true, isReferenceType(WebAssembly));
        } else {
          checkEqual(true, isReferenceType(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isReferenceType(Reflect));
        } else {
          checkEqual(true, isReferenceType(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isReferenceType(Intl));
        } else {
          checkEqual(true, isReferenceType(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(true, isReferenceType(parts));
        }
      });
    };

    var test_isUndefinedAll = function test_isUndefinedAll() {
      it('test_isUndefinedAll', function () {
        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(true, isUndefinedAll(u1));
        checkEqual(false, isUndefinedAll(n1));
        checkEqual(false, isUndefinedAll(v1));
        checkEqual(true, isUndefinedArray([u1]));
        checkEqual(false, isUndefinedArray([n1]));
        checkEqual(false, isUndefinedArray([v1]));
        checkEqual(true, isUndefinedAll(u1, u1));
        checkEqual(false, isUndefinedAll(u1, n1));
        checkEqual(false, isUndefinedAll(u1, v1));
        checkEqual(true, isUndefinedArray([u1, u1]));
        checkEqual(false, isUndefinedArray([u1, n1]));
        checkEqual(false, isUndefinedArray([u1, v1]));
        checkEqual(false, isNotUndefinedAll(u1));
        checkEqual(true, isNotUndefinedAll(n1));
        checkEqual(true, isNotUndefinedAll(v1));
        checkEqual(false, isNotUndefinedArray([u1]));
        checkEqual(true, isNotUndefinedArray([n1]));
        checkEqual(true, isNotUndefinedArray([v1]));
        checkEqual(false, isNotUndefinedAll(u1, u1));
        checkEqual(false, isNotUndefinedAll(u1, n1));
        checkEqual(true, isNotUndefinedAll(n1, n1));
        checkEqual(false, isNotUndefinedAll(n1, u1));
        checkEqual(true, isNotUndefinedAll(v1, v1));
        checkEqual(true, isNotUndefinedAll(v1, n1));
        checkEqual(false, isNotUndefinedAll(v1, u1));
        checkEqual(false, isNotUndefinedArray([u1, u1]));
        checkEqual(false, isNotUndefinedArray([u1, n1]));
        checkEqual(true, isNotUndefinedArray([n1, n1]));
        checkEqual(false, isNotUndefinedArray([n1, u1]));
        checkEqual(true, isNotUndefinedArray([v1, v1]));
        checkEqual(true, isNotUndefinedArray([v1, n1]));
        checkEqual(false, isNotUndefinedArray([v1, u1]));
        checkEqual(false, isUndefinedAll([v1, v1]));
        checkEqual(false, isUndefinedAll([u1, u1]));
        checkEqual(true, isNotUndefinedAll([v1, v1]));
        checkEqual(true, isNotUndefinedAll([u1, u1]));
      });
    };

    var test_isNull = function test_isNull() {
      it('test_isNull', function () {
        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(false, isNullAll(u1));
        checkEqual(true, isNullAll(n1));
        checkEqual(false, isNullAll(v1));
        checkEqual(false, isNullArray([u1]));
        checkEqual(true, isNullArray([n1]));
        checkEqual(false, isNullArray([v1]));
        checkEqual(true, isNullAll(n1, n1));
        checkEqual(false, isNullAll(n1, u1));
        checkEqual(false, isNullAll(n1, v1));
        checkEqual(true, isNullArray([n1, n1]));
        checkEqual(false, isNullArray([n1, u1]));
        checkEqual(false, isNullArray([n1, v1]));
        checkEqual(true, isNotNullAll(u1));
        checkEqual(false, isNotNullAll(n1));
        checkEqual(true, isNotNullAll(v1));
        checkEqual(true, isNotNullArray([u1]));
        checkEqual(false, isNotNullArray([n1]));
        checkEqual(true, isNotNullArray([v1]));
        checkEqual(true, isNotNullAll(u1, u1));
        checkEqual(false, isNotNullAll(u1, n1));
        checkEqual(false, isNotNullAll(n1, n1));
        checkEqual(false, isNotNullAll(n1, u1));
        checkEqual(true, isNotNullAll(v1, v1));
        checkEqual(false, isNotNullAll(v1, n1));
        checkEqual(true, isNotNullAll(v1, u1));
        checkEqual(true, isNotNullArray([u1, u1]));
        checkEqual(false, isNotNullArray([u1, n1]));
        checkEqual(false, isNotNullArray([n1, n1]));
        checkEqual(false, isNotNullArray([n1, u1]));
        checkEqual(true, isNotNullArray([v1, v1]));
        checkEqual(false, isNotNullArray([v1, n1]));
        checkEqual(true, isNotNullArray([v1, u1]));
      });
    };

    var test_isBoolean = function test_isBoolean() {
      it('test_isBoolean', function () {
        checkEqual(true, isBoolean(true));
        checkEqual(true, isBoolean(false));
        checkEqual(false, isBoolean(undefined));
        checkEqual(false, isBoolean(null));
        checkEqual(false, isBoolean(''));
        checkEqual(false, isBoolean('aaa'));
        checkEqual(false, isBoolean(123));
        checkEqual(false, isBoolean(0));
        checkEqual(false, isBoolean(-1));
        checkEqual(false, isBoolean([]));
        checkEqual(false, isBoolean({}));
        checkEqual(true, isBooleanAll(true, true));
        checkEqual(true, isBooleanAll(true, false));
        checkEqual(false, isBooleanAll(true, 1));
        checkEqual(false, isBooleanAll(true, {}));
        checkEqual(false, isBooleanAll(true, []));
        checkEqual(false, isBooleanAll(true, null));
        checkEqual(false, isBooleanAll(true, undefined));
        checkEqual(false, isBooleanAll(true, ''));
        checkEqual(true, isBooleanArray([true, true]));
        checkEqual(true, isBooleanArray([true, false]));
        checkEqual(false, isBooleanArray([true, 1]));
        checkEqual(false, isBooleanArray([true, {}]));
        checkEqual(false, isBooleanArray([true, []]));
        checkEqual(false, isBooleanArray([true, null]));
        checkEqual(false, isBooleanArray([true, undefined]));
        checkEqual(false, isBooleanArray([true, ''])); // boolean object

        checkEqual(false, isBoolean(new Boolean()));
        checkEqual(false, isBoolean(new Boolean(0)));
        checkEqual(false, isBoolean(new Boolean(1)));
        checkEqual(false, isBoolean(new Boolean(true)));
        checkEqual(false, isBoolean(new Boolean(false)));
        checkEqual(false, isBoolean(new Boolean('')));
        checkEqual(false, isBoolean(new Boolean('a')));
        checkEqual(false, isBoolean(new Boolean([])));
        checkEqual(false, isBoolean(new Boolean({})));
        checkEqual(true, isBooleanObject(new Boolean()));
        checkEqual(true, isBooleanObject(new Boolean(0)));
        checkEqual(true, isBooleanObject(new Boolean(1)));
        checkEqual(true, isBooleanObject(new Boolean(true)));
        checkEqual(true, isBooleanObject(new Boolean(false)));
        checkEqual(true, isBooleanObject(new Boolean('')));
        checkEqual(true, isBooleanObject(new Boolean('a')));
        checkEqual(true, isBooleanObject(new Boolean([])));
        checkEqual(true, isBooleanObject(new Boolean({})));
        checkEqual(false, isBooleanObject(true));
        checkEqual(false, isBooleanObject(false));
        checkEqual(false, isBooleanObject(undefined));
        checkEqual(false, isBooleanObject(null));
        checkEqual(false, isBooleanObject(''));
        checkEqual(false, isBooleanObject('aaa'));
        checkEqual(false, isBooleanObject(123));
        checkEqual(false, isBooleanObject(0));
        checkEqual(false, isBooleanObject(-1));
        checkEqual(false, isBooleanObject([]));
        checkEqual(false, isBooleanObject({}));
      });
    };

    var test_isNumber = function test_isNumber() {
      it('test_isNumber', function () {
        checkEqual(true, isNumberAll(123));
        checkEqual(true, isNumberAll(0));
        checkEqual(true, isNumberAll(-1));
        checkEqual(true, isNumberAll(123.4));
        checkEqual(true, isNumberAll(123.0));
        checkEqual(false, isNumberAll(true));
        checkEqual(false, isNumberAll(false));
        checkEqual(false, isNumberAll(null));
        checkEqual(false, isNumberAll(undefined));
        checkEqual(false, isNumberAll(Infinity)); // Infinity is not number

        checkEqual(false, isNumberAll(NaN));
        checkEqual(false, isNumberAll(''));
        checkEqual(false, isNumberAll('ABC'));
        checkEqual(false, isNumberAll('ABC10'));
        checkEqual(false, isNumberAll('10ABC'));
        checkEqual(false, isNumberAll('0ABC'));
        checkEqual(false, isNumberAll('0'));
        checkEqual(false, isNumberAll('5'));
        checkEqual(false, isNumberAll('-5'));
        checkEqual(false, isNumberAll('100'));
        checkEqual(false, isNumberAll('-100'));
        checkEqual(false, isNumberAll([]));
        checkEqual(false, isNumberAll({}));
        checkEqual(false, isNotNumberAll(123));
        checkEqual(false, isNotNumberAll(0));
        checkEqual(true, isNotNumberAll(true));
        checkEqual(true, isNotNumberAll(null));
        checkEqual(true, isNotNumberAll(undefined));
        checkEqual(true, isNotNumberAll(Infinity));
        checkEqual(true, isNotNumberAll(NaN));
        checkEqual(true, isNotNumberAll(''));
        checkEqual(true, isNumberAll(1, 2));
        checkEqual(true, isNumberAll(3, 4, 5));
        checkEqual(true, isNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNumberAll(1, 2, true));
        checkEqual(false, isNotNumberAll(1, 2));
        checkEqual(false, isNotNumberAll(3, 4, 5));
        checkEqual(false, isNotNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNotNumberAll(1, 2, true));
        checkEqual(true, isNotNumberAll(false, true));
        checkEqual(true, isNotNumberAll('a', 'b'));
        checkEqual(false, isNumberAll([1, 2]));
        checkEqual(true, isNumberArray([1, 2]));
        checkEqual(true, isNumberArray([3, 4, 5]));
        checkEqual(true, isNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNumberArray([1, 2, true]));
        checkEqual(false, isNotNumberArray([1, 2]));
        checkEqual(false, isNotNumberArray([3, 4, 5]));
        checkEqual(false, isNotNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNotNumberArray([1, 2, true]));
        checkEqual(true, isNotNumberArray([false, true]));
        checkEqual(true, isNotNumberArray(['a', 'b']));
        checkEqual(0, Number(new Number()));
        checkEqual(0, Number(new Number('')));
        checkEqual(0, Number(new Number(' ')));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number(new Number('　')));
        } else {
          checkEqual(0, Number(new Number('　')));
        }

        checkEqual(1, Number(new Number('1')));
        checkEqual(1.1, Number(new Number('1.1')));
        checkEqual(NaN, Number(new Number(NaN)));
        checkEqual(Infinity, Number(new Number(Infinity)));
        checkEqual(NaN, Number(new Number(undefined)));
        checkEqual(0, Number(new Number(null)));
        checkEqual(false, isNumberAll(new Number()));
        checkEqual(false, isNumberAll(new Number('')));
        checkEqual(false, isNumberAll(new Number('1')));
        checkEqual(false, isNumberAll(new Number('1.1')));
        checkEqual(true, isNumberObjectAll(new Number()));
        checkEqual(true, isNumberObjectAll(new Number('')));
        checkEqual(true, isNumberObjectAll(new Number('1')));
        checkEqual(true, isNumberObjectAll(new Number('1.1')));
      });
    };

    var test_isInteger = function test_isInteger() {
      it('test_isInteger', function () {
        checkEqual(true, isIntegerAll(123));
        checkEqual(true, isIntegerAll(0));
        checkEqual(true, isIntegerAll(-1));
        checkEqual(false, isIntegerAll(123.4));
        checkEqual(true, isIntegerAll(123.0)); // .0 equal Integer

        checkEqual(false, isIntegerAll(true));
        checkEqual(false, isIntegerAll(false));
        checkEqual(false, isIntegerAll(null));
        checkEqual(false, isIntegerAll(undefined));
        checkEqual(false, isIntegerAll(''));
        checkEqual(false, isIntegerAll('ABC'));
        checkEqual(false, isIntegerAll('0'));
        checkEqual(false, isIntegerAll('5'));
        checkEqual(false, isIntegerAll('-5'));
        checkEqual(false, isIntegerAll('100'));
        checkEqual(false, isIntegerAll('-100'));
        checkEqual(false, isIntegerAll([]));
        checkEqual(false, isIntegerAll({}));
        checkEqual(true, isIntegerAll(1, 2));
        checkEqual(true, isIntegerAll(3, 4, 5));
        checkEqual(true, isIntegerAll(10, 20, 30));
        checkEqual(false, isIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2));
        checkEqual(false, isNotIntegerAll(3, 4, 5));
        checkEqual(false, isNotIntegerAll(10, 20, 30));
        checkEqual(false, isNotIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2.1, 3.5));
        checkEqual(true, isNotIntegerAll(1.1, 2.2, 3.5));
        checkEqual(false, isIntegerArray([]), '?');
        checkEqual(true, isIntegerArray([1]));
        checkEqual(true, isIntegerArray([1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(true, isIntegerArray([1, 2, 0]));
        checkEqual(false, isIntegerArray([1, 2, NaN]));
        checkEqual(false, isIntegerArray([1, 2, null]));
        checkEqual(false, isIntegerArray(['a', 'b', 1]));
        checkEqual(false, isIntegerArray(['a', 'b', 1.1]));
        checkEqual(false, isIntegerArray(['a', 'b', 'c']));
        checkEqual(false, isNotIntegerArray([]));
        checkEqual(false, isNotIntegerArray([1]));
        checkEqual(false, isNotIntegerArray([1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2.2, 3]));
        checkEqual(true, isNotIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(false, isNotIntegerArray([1, 2, 0]));
        checkEqual(false, isNotIntegerArray([1, 2, NaN]));
        checkEqual(false, isNotIntegerArray([1, 2, null]));
        checkEqual(false, isNotIntegerArray(['a', 'b', 1]));
        checkEqual(true, isNotIntegerArray(['a', 'b', 1.1]));
        checkEqual(true, isNotIntegerArray(['a', 'b', 'c']));
        checkEqual(false, isIntegerAll(new Number()));
        checkEqual(false, isIntegerAll(new Number('')));
        checkEqual(false, isIntegerAll(new Number('1')));
        checkEqual(false, isIntegerAll(new Number('1.1')));
        checkEqual(false, isIntegerAll(new Number(1)));
      });
    };

    var test_isString = function test_isString() {
      it('test_isString', function () {
        checkEqual(false, isString(true));
        checkEqual(false, isString(false));
        checkEqual(false, isString(undefined));
        checkEqual(false, isString(null));
        checkEqual(true, isString(''));
        checkEqual(true, isString('aaa'));
        checkEqual(false, isString(123));
        checkEqual(false, isString(0));
        checkEqual(false, isString(-1));
        checkEqual(false, isString([]));
        checkEqual(false, isString({}));
        checkEqual(true, isStringAll(''));
        checkEqual(true, isStringAll('a'));
        checkEqual(true, isStringAll('a', 'b', 'c'));
        checkEqual(true, isStringAll('a', 'b', ''));
        checkEqual(false, isStringAll('a', 'b', 0));
        checkEqual(false, isStringAll('a', 'b', 1));
        checkEqual(false, isStringAll('a', 'b', null));
        checkEqual(false, isStringAll('a', 'b', undefined));
        checkEqual(false, isStringArray([]));
        checkEqual(true, isStringArray(['']));
        checkEqual(true, isStringArray(['a']));
        checkEqual(true, isStringArray(['a', 'b', 'c']));
        checkEqual(true, isStringArray(['a', 'b', '']));
        checkEqual(false, isStringArray(['a', 'b', 0]));
        checkEqual(false, isStringArray(['a', 'b', 1]));
        checkEqual(false, isStringArray(['a', 'b', null]));
        checkEqual(false, isStringArray(['a', 'b', undefined]));
        checkEqual(false, isNotStringArray([]));
        checkEqual(false, isNotStringArray(['']));
        checkEqual(false, isNotStringArray(['a']));
        checkEqual(false, isNotStringArray(['a', 'b', 'c']));
        checkEqual(false, isNotStringArray(['a', 'b', '']));
        checkEqual(false, isNotStringArray(['a', 'b', 0]));
        checkEqual(false, isNotStringArray(['a', 'b', 1]));
        checkEqual(false, isNotStringArray(['a', 'b', null]));
        checkEqual(false, isNotStringArray(['a', 'b', undefined]));
        checkEqual(true, isNotStringArray([0, 1, 2]));
        checkEqual(true, isNotStringArray([0, null, undefined])); // string object

        checkEqual('', String(new String()));
        checkEqual('', String(new String('')));
        checkEqual(' ', String(new String(' ')));
        checkEqual('　', String(new String('　')));
        checkEqual('1', String(new String('1')));
        checkEqual('1.1', String(new String('1.1')));
        checkEqual('1', String(new String(1)));
        checkEqual('1.1', String(new String(1.1)));
        checkEqual('NaN', String(new String(NaN)));
        checkEqual('Infinity', String(new String(Infinity)));
        checkEqual('undefined', String(new String(undefined)));
        checkEqual('null', String(new String(null)));
        checkEqual(false, isString(new String()));
        checkEqual(false, isString(new String(undefined)));
        checkEqual(false, isString(new String(null)));
        checkEqual(false, isString(new String('')));
        checkEqual(false, isString(new String('1')));
        checkEqual(false, isString(new String(1)));
        checkEqual(true, isStringObject(new String()));
        checkEqual(true, isStringObject(new String(undefined)));
        checkEqual(true, isStringObject(new String(null)));
        checkEqual(true, isStringObject(new String('')));
        checkEqual(true, isStringObject(new String('1')));
        checkEqual(true, isStringObject(new String(1)));
        checkEqual(false, isStringObject(true));
        checkEqual(false, isStringObject(false));
        checkEqual(false, isStringObject(undefined));
        checkEqual(false, isStringObject(null));
        checkEqual(false, isStringObject(''));
        checkEqual(false, isStringObject('aaa'));
        checkEqual(false, isStringObject(123));
        checkEqual(false, isStringObject(0));
        checkEqual(false, isStringObject(-1));
        checkEqual(false, isStringObject([]));
        checkEqual(false, isStringObject({}));
      });
    };

    var test_isFunction = function test_isFunction() {
      it('test_isFunction', function () {
        checkEqual(true, isFunctionAll(function () {}));
        checkEqual(false, isFunctionAll({}));
        checkEqual(true, isFunctionAll(function () {}, test_isFunction));
        checkEqual(false, isFunctionAll({}, test_isFunction));
        checkEqual(true, isFunctionArray([function () {}, test_isFunction]));
        checkEqual(false, isFunctionArray([{}, test_isFunction]));
      });
    };

    var test_different_objectNormal_objectFromNull = function test_different_objectNormal_objectFromNull() {
      checkEqual(true, 'hasOwnProperty' in {});
      checkEqual(true, 'constructor' in {});

      if (!parts.platform.isWindowsScriptHost()) {
        checkEqual(false, 'hasOwnProperty' in Object.create(null));
        checkEqual(false, 'constructor' in Object.create(null));
        checkEqual(false, isThrown(function () {
          typeName(Object.create({}));
        }));
        checkEqual(false, isThrown(function () {
          typeName(Object.create(null));
        }));
        checkEqual(true, isThrown(function () {
          typeName(Object.create());
        }));
      } else {
        checkEqual(true, isThrown(function () {
          typeName(Object.create({}));
        }));
        checkEqual(true, isThrown(function () {
          typeName(Object.create(null));
        }));
        checkEqual(true, isThrown(function () {
          typeName(Object.create());
        }));
      }
    };

    var test_isObject = function test_isObject() {
      it('test_isObject', function () {
        // object other value
        checkEqual(false, isObject(null));
        checkEqual(false, isObject(undefined));
        checkEqual(false, isObject(undefined));
        checkEqual(false, isObject('a'));
        checkEqual(false, isObject(1));
        checkEqual(false, isObject(true)); // normal object

        checkEqual(true, isObject({}));
        checkEqual(true, isObject({
          a: 0
        }));
        checkEqual(true, isObject({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObject(Object.create(null)));
        } // object like


        checkEqual(false, isObject([]));
        checkEqual(false, isObject(function () {}));
        checkEqual(false, isObject(function () {}));
        checkEqual(false, isObject(new Error()));
        checkEqual(false, isObject(new Date()));
        checkEqual(false, isObject(new RegExp()));
        checkEqual(false, isObject(new String()));
        checkEqual(false, isObject(new Number()));
        checkEqual(false, isObject(new Boolean()));
        checkEqual(true, isObject(new Object()));
        checkEqual(false, isObject(new Array()));
        checkEqual(false, isObject(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObject(parts));
        } // is...All


        checkEqual(true, isObjectAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        })); // is...Array

        checkEqual(true, isObjectArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(false, isObjectArray([[], {
          a: 0,
          b: 1
        }]));

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObject(testObject1));
      });
    };

    var test_isObjectNormal = function test_isObjectNormal() {
      it('test_isObjectNormal', function () {
        // object other value
        checkEqual(false, isObjectNormal(null));
        checkEqual(false, isObjectNormal(undefined));
        checkEqual(false, isObjectNormal(undefined));
        checkEqual(false, isObjectNormal('a'));
        checkEqual(false, isObjectNormal(1));
        checkEqual(false, isObjectNormal(true)); // normal object

        checkEqual(true, isObjectNormal({}));
        checkEqual(true, isObjectNormal({
          a: 0
        }));
        checkEqual(true, isObjectNormal({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormal(Object.create(null)));
        } // object like


        checkEqual(false, isObjectNormal([]));
        checkEqual(false, isObjectNormal(function () {}));
        checkEqual(false, isObjectNormal(function () {}));
        checkEqual(false, isObjectNormal(new Error()));
        checkEqual(false, isObjectNormal(new Date()));
        checkEqual(false, isObjectNormal(new RegExp()));
        checkEqual(false, isObjectNormal(new String()));
        checkEqual(false, isObjectNormal(new Number()));
        checkEqual(false, isObjectNormal(new Boolean()));
        checkEqual(true, isObjectNormal(new Object()));
        checkEqual(false, isObjectNormal(new Array()));
        checkEqual(false, isObjectNormal(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObjectNormal(parts));
        } // is...All


        testCounter();
        checkEqual(true, isObjectNormalAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));
        checkEqual(false, isNotObjectNormalAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormalAll({}, Object.create(null)));
          checkEqual(false, isObjectNormalAll(Object.create(null), Object.create(null)));
          checkEqual(false, isNotObjectNormalAll({}, Object.create(null)));
          checkEqual(true, isNotObjectNormalAll(Object.create(null), Object.create(null)));
        } // is...Array


        checkEqual(true, isObjectNormalArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(false, isNotObjectNormalArray([{}, {
          a: 0,
          b: 1
        }]));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormalArray([{}, Object.create(null)]));
          checkEqual(false, isObjectNormalArray([Object.create(null), Object.create(null)]));
          checkEqual(false, isNotObjectNormalArray([{}, Object.create(null)]));
          checkEqual(true, isNotObjectNormalArray([Object.create(null), Object.create(null)]));
        }

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObjectNormal(testObject1));
      });
    };

    var test_isObjectFromNull = function test_isObjectFromNull() {
      it('test_isObjectFromNull', function () {
        // object other value
        checkEqual(false, isObjectFromNull(null));
        checkEqual(false, isObjectFromNull(undefined));
        checkEqual(false, isObjectFromNull(undefined));
        checkEqual(false, isObjectFromNull('a'));
        checkEqual(false, isObjectFromNull(1));
        checkEqual(false, isObjectFromNull(true)); // normal object

        checkEqual(false, isObjectFromNull({}));
        checkEqual(false, isObjectFromNull({
          a: 0
        }));
        checkEqual(false, isObjectFromNull({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObjectFromNull(Object.create(null)));
        } // object like


        checkEqual(false, isObjectFromNull([]));
        checkEqual(false, isObjectFromNull(function () {}));
        checkEqual(false, isObjectFromNull(function () {}));
        checkEqual(false, isObjectFromNull(new Error()));
        checkEqual(false, isObjectFromNull(new Date()));
        checkEqual(false, isObjectFromNull(new RegExp()));
        checkEqual(false, isObjectFromNull(new String()));
        checkEqual(false, isObjectFromNull(new Number()));
        checkEqual(false, isObjectFromNull(new Boolean()));
        checkEqual(false, isObjectFromNull(new Object()));
        checkEqual(false, isObjectFromNull(new Array()));
        checkEqual(false, isObjectFromNull(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObjectFromNull(parts));
        } // is...All


        testCounter();
        checkEqual(false, isObjectFromNullAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));
        checkEqual(true, isNotObjectFromNullAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectFromNullAll({}, Object.create(null)));
          checkEqual(true, isObjectFromNullAll(Object.create(null), Object.create(null)));
          checkEqual(false, isNotObjectFromNullAll({}, Object.create(null)));
          checkEqual(false, isNotObjectFromNullAll(Object.create(null), Object.create(null)));
        } // is...Array


        checkEqual(false, isObjectFromNullArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(true, isNotObjectFromNullArray([{}, {
          a: 0,
          b: 1
        }]));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectFromNullArray([{}, Object.create(null)]));
          checkEqual(true, isObjectFromNullArray([Object.create(null), Object.create(null)]));
          checkEqual(false, isNotObjectFromNullArray([{}, Object.create(null)]));
          checkEqual(false, isNotObjectFromNullArray([Object.create(null), Object.create(null)]));
        }

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(false, isObjectFromNull(testObject1));
      });
    };

    var test_isObjectLike1 = function test_isObjectLike1() {
      it('test_isObjectLike1', function () {
        // object other value
        checkEqual(false, isObjectLike(null));
        checkEqual(false, isObjectLike(undefined));
        checkEqual(false, isObjectLike('a'));
        checkEqual(false, isObjectLike(1));
        checkEqual(false, isObjectLike(true)); // normal object

        checkEqual(true, isObjectLike({}));
        checkEqual(true, isObjectLike({
          a: 0
        }));
        checkEqual(true, isObjectLike({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObjectLike(Object.create(null)));
        } // object like


        checkEqual(true, isObjectLike([]));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike(new Error()));
        checkEqual(true, isObjectLike(new Date()));
        checkEqual(true, isObjectLike(new RegExp()));
        checkEqual(true, isObjectLike(new String()));
        checkEqual(true, isObjectLike(new Number()));
        checkEqual(true, isObjectLike(new Boolean()));
        checkEqual(true, isObjectLike(new Object()));
        checkEqual(true, isObjectLike(new Array()));
        checkEqual(true, isObjectLike(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(true, isObjectLike(parts));
        } // is...All


        checkEqual(true, isObjectLikeAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        })); // is...Array

        checkEqual(true, isObjectLikeArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(true, isObjectLikeArray([[], {
          a: 0,
          b: 1
        }]));

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObjectLikeAll(testObject1));
      });
    };

    var test_isModule = function test_isModule() {
      it('test_isModule', function () {
        if (parts.isModule(parts)) {
          checkEqual(false, parts.platform.isWindowsScriptHost());
        }
      });
    };

    var test_isArray = function test_isArray() {
      it('test_isArray', function () {
        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(false, isArrayAll(123));
        checkEqual(false, isArrayAll('1,2,3'));
        checkEqual(true, isArrayAll([1], [2]));
        checkEqual(true, isArrayAll([3], [4], [5]));
        checkEqual(true, isArrayAll([10, 20], [30]));
        checkEqual(false, isArrayAll([1, 2], 3));
        checkEqual(true, isNotArrayAll(1, 2));
        checkEqual(false, isNotArrayAll([3], [4], 5));
        checkEqual(true, isNotArrayAll(10, 20, 30));
        checkEqual(false, isNotArrayAll(10, 20, [30]));
        checkEqual(true, isArrayArray([[1], [2]]));
        checkEqual(true, isArrayArray([[3], [4], [5]]));
        checkEqual(true, isArrayArray([[10, 20], [30]]));
        checkEqual(false, isArrayArray([[1, 2], 3]));
        checkEqual(true, isNotArrayArray([1, 2]));
        checkEqual(false, isNotArrayArray([[3], [4], 5]));
        checkEqual(true, isNotArrayArray([10, 20, 30]));
        checkEqual(false, isNotArrayArray([10, 20, [30]]));
      });
    };

    var test_ArrayisArray = function test_ArrayisArray() {
      it('test_ArrayisArray', function () {
        var ArrayisArrayAll = function ArrayisArrayAll() {
          for (var i = 0, l = arguments.length; i < l; i += 1) {
            var result = Array.isArray(i < 0 || arguments.length <= i ? undefined : arguments[i]);

            if (result === false) {
              return false;
            }
          }

          return true;
        };

        var NotArrayisArrayAll = function NotArrayisArrayAll() {
          for (var i = 0, l = arguments.length; i < l; i += 1) {
            var result = Array.isArray(i < 0 || arguments.length <= i ? undefined : arguments[i]);

            if (result === true) {
              return false;
            }
          }

          return true;
        };

        checkEqual(true, ArrayisArrayAll([123]));
        checkEqual(true, ArrayisArrayAll([]));
        checkEqual(true, ArrayisArrayAll([1, 2, 3]));
        checkEqual(false, ArrayisArrayAll(123));
        checkEqual(false, ArrayisArrayAll('1,2,3'));
        checkEqual(true, ArrayisArrayAll([1], [2]));
        checkEqual(true, ArrayisArrayAll([3], [4], [5]));
        checkEqual(true, ArrayisArrayAll([10, 20], [30]));
        checkEqual(false, ArrayisArrayAll([1, 2], 3));
        checkEqual(true, NotArrayisArrayAll(1, 2));
        checkEqual(false, NotArrayisArrayAll([3], [4], 5));
        checkEqual(true, NotArrayisArrayAll(10, 20, 30));
        checkEqual(false, NotArrayisArrayAll(10, 20, [30]));
      });
    };

    var test_isArraySeries = function test_isArraySeries() {
      it('test_isArraySeries', function () {
        checkEqual(true, Array.isArray([]));
        checkEqual(true, Array.isArray([123]));
        checkEqual(true, Array.isArray([1, 2, 3]));
        checkEqual(true, Array.isArray(new Array()));
        checkEqual(true, Array.isArray(new Array(1, 2, 3)));
        checkEqual(true, Array.isArray(new Array()));

        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isGasRhino()) {
          checkEqual(false, Array.isArray(new Int8Array()));
          checkEqual(false, Array.isArray(new Uint8Array()));
          checkEqual(false, Array.isArray(new Uint8ClampedArray()));
          checkEqual(false, Array.isArray(new Int16Array()));
          checkEqual(false, Array.isArray(new Uint16Array()));
          checkEqual(false, Array.isArray(new Int32Array()));
          checkEqual(false, Array.isArray(new Uint32Array()));
          checkEqual(false, Array.isArray(new Float32Array()));
          checkEqual(false, Array.isArray(new Float64Array()));
        }

        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(true, isArrayAll(new Array()));
        checkEqual(true, isArrayAll(new Array(1, 2, 3)));
        checkEqual(true, isArrayAll(new Array()));

        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isGasRhino()) {
          checkEqual(false, isArrayAll(new Int8Array()));
          checkEqual(false, isArrayAll(new Uint8Array()));
          checkEqual(false, isArrayAll(new Uint8ClampedArray()));
          checkEqual(false, isArrayAll(new Int16Array()));
          checkEqual(false, isArrayAll(new Uint16Array()));
          checkEqual(false, isArrayAll(new Int32Array()));
          checkEqual(false, isArrayAll(new Uint32Array()));
          checkEqual(false, isArrayAll(new Float32Array()));
          checkEqual(false, isArrayAll(new Float64Array()));
        }

        checkEqual(true, isArraySeriesAll([]));
        checkEqual(true, isArraySeriesAll([123]));
        checkEqual(true, isArraySeriesAll([1, 2, 3]));
        checkEqual(true, isArraySeriesAll(new Array()));
        checkEqual(true, isArraySeriesAll(new Array(1, 2, 3)));
        checkEqual(true, isArraySeriesAll(new Array()));

        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isGasRhino()) {
          checkEqual(true, isArraySeriesAll(new Int8Array()));
          checkEqual(true, isArraySeriesAll(new Uint8Array()));
          checkEqual(true, isArraySeriesAll(new Uint8ClampedArray()));
          checkEqual(true, isArraySeriesAll(new Int16Array()));
          checkEqual(true, isArraySeriesAll(new Uint16Array()));
          checkEqual(true, isArraySeriesAll(new Int32Array()));
          checkEqual(true, isArraySeriesAll(new Uint32Array()));
          checkEqual(true, isArraySeriesAll(new Float32Array()));
          checkEqual(true, isArraySeriesAll(new Float64Array()));
        }
      });
    };

    var test_isDate = function test_isDate() {
      it('test_isDate', function () {
        checkEqual(true, isDateAll(new Date(2017, 1, 1)));
        checkEqual(true, isDateAll(new Date('2017/01')));
        checkEqual(true, isDateAll(new Date(2017, 1)));
        checkEqual(true, isDateAll(new Date(2017, 1)));
      });
    };

    var test_isExcection = function test_isExcection() {
      it('test_isExcection', function () {
        checkEqual(true, isExceptionAll({
          name: '',
          message: ''
        }));
        checkEqual(false, isExceptionAll({
          name: ''
        }));
        checkEqual(false, isExceptionAll({
          message: ''
        }));
        checkEqual(true, isExceptionAll(new Error()));
        checkEqual(true, isExceptionAll(new TypeError()));
        checkEqual(true, isExceptionAll(new SyntaxError()));
        checkEqual(true, isExceptionAll(new ReferenceError()));

        var UserException = function UserException(message) {
          this.message = message;
          this.name = 'UserException';
        };

        checkEqual(true, isExceptionAll(new UserException('message')));
      });
    };

    var test_isEmptyObject = function test_isEmptyObject() {
      it('test_isEmptyObject', function () {
        checkEqual(true, isEmptyObjectAll({}));
        checkEqual(false, isEmptyObjectAll({
          a: 1
        }));
        checkEqual(false, isEmptyObjectAll(null));
        checkEqual(false, isEmptyObjectAll(undefined));
        checkEqual(false, isEmptyObjectAll(123));
        checkEqual(false, isEmptyObjectAll('abc'));
        checkEqual(false, isEmptyObjectAll([]));
        checkEqual(false, isEmptyObjectAll([123]));
      });
    };

    var test_isEmptyArray = function test_isEmptyArray() {
      it('test_isEmptyArray', function () {
        checkEqual(false, isEmptyArrayAll({}));
        checkEqual(false, isEmptyArrayAll({
          a: 1
        }));
        checkEqual(false, isEmptyArrayAll(null));
        checkEqual(false, isEmptyArrayAll(undefined));
        checkEqual(false, isEmptyArrayAll(123));
        checkEqual(false, isEmptyArrayAll('abc'));
        checkEqual(true, isEmptyArrayAll([]));
        checkEqual(false, isEmptyArrayAll([123]));
      });
    };

    var test_isSymbol = function test_isSymbol() {
      it('test_isSymbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isSymbolAll(1));
        checkEqual(true, isSymbolAll(Symbol()));
      });
    };

    var test_isMap = function test_isMap() {
      it('test_isMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isMapAll({}));
        checkEqual(false, isWeakMapAll({}));
        checkEqual(true, isMapAll(new Map()));
        checkEqual(false, isWeakMapAll(new Map()));
        checkEqual(false, isMapAll(new WeakMap()));
        checkEqual(true, isWeakMapAll(new WeakMap()));
        checkEqual(true, isObjectAll({}));
        checkEqual(false, isObjectAll(new Map()));
        checkEqual(false, isObjectAll(new WeakMap()));
      });
    };

    var test_isSet = function test_isSet() {
      it('test_isSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isSetAll({}));
        checkEqual(true, isSetAll(new Set()));
        checkEqual(false, isWeakSetAll({}));
        checkEqual(false, isWeakSetAll(new Set()));
        checkEqual(true, isObjectAll({}));
        checkEqual(false, isObjectAll(new Set()));

        if (!parts.platform.isInternetExplorer()) {
          // IE11 no exist WeakSet
          checkEqual(false, isSetAll(new WeakSet()));
          checkEqual(true, isWeakSetAll(new WeakSet()));
          checkEqual(false, isObjectAll(new WeakSet()));
        }
      });
    };

    test_checkType();
    test_typeName();
    test_isObjectLike2();
    test_isPrimitiveType();
    test_isReferenceType();
    test_isUndefinedAll();
    test_isNull();
    test_isBoolean();
    test_isNumber();
    test_isInteger();
    test_isString();
    test_isFunction();
    test_different_objectNormal_objectFromNull();
    test_isObject();
    test_isObjectNormal();
    test_isObjectFromNull();
    test_isObjectLike1();
    test_isModule();
    test_isArray();
    test_ArrayisArray();
    test_isArraySeries();
    test_isDate();
    test_isExcection();
    test_isEmptyObject();
    test_isEmptyArray();
    test_isSymbol();
    test_isMap();
    test_isSet();
  });
};

exports.test_execute_type = test_execute_type;
var _default = {
  test_execute_type: test_execute_type
};
exports["default"] = _default;

/***/ })
/******/ ]);
});