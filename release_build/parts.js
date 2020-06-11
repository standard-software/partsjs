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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(2);

var _root = __webpack_require__(3);

var _platform = __webpack_require__(20);

var _type = __webpack_require__(5);

var _test = __webpack_require__(29);

var _syntax = __webpack_require__(25);

var _compare = __webpack_require__(38);

var _convert = __webpack_require__(44);

var _number = __webpack_require__(24);

var _string = __webpack_require__(36);

var _object = __webpack_require__(16);

var _array = __webpack_require__(30);

var _consoleHook = __webpack_require__(45);

var VERSION = '5.7.0 beta';
var rootNames = {};
var propertyNames = {};
var _copyProperty = _object._copyProperty;
var _replaceAll = _string._replaceAll;
var _map = _array._map; // root

propertyNames.ROOT = 'clone, cloneDeep,' + 'cloneFunction,' + '';
var root = {};

_copyProperty(_root, propertyNames.ROOT, root);

_copyProperty(_root, propertyNames.ROOT, rootNames); // platform


propertyNames.PLATFORM = 'name,' + 'isWebBrowser,' + 'isWindowsScriptHost,' + 'isGoogleAppsScript,' + 'isNodeJs,' + 'browserName,' + 'isChrome,' + 'isFirefox,' + 'isEdge,' + 'isInternetExplorer,' + 'isSafari,' + 'isOpera,' + 'buildMode,' + '';

var platform = _copyProperty(_platform, propertyNames.PLATFORM); // type


propertyNames._TYPE_BASE = 'Undefined,Null,NaNStrict,' + 'Boolean,Number,Integer,String,' + 'Function,Object,ObjectType,' + 'Array,ArrayType,' + 'Date,RegExp,' + 'Exception,' + 'EmptyObject,EmptyArray,' + 'Symbol,' + 'Map,WeakMap,Set,WeakSet,' + 'BooleanObject,NumberObject,StringObject,' + 'Bool,Num,Int,Str,' + 'Func,Obj,ObjType,' + 'Except,' + 'EmptyObj,' + '';

var isPrefixSafixAdd = function isPrefixSafixAdd(prefix, safix, commaString) {
  return _map(_replaceAll(commaString, ' ', '').split(','), function (item) {
    return prefix + item + safix;
  }).join(',');
};

propertyNames.TYPE = [isPrefixSafixAdd('is', '', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', '', propertyNames._TYPE_BASE), isPrefixSafixAdd('is', 'All', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', 'All', propertyNames._TYPE_BASE), isPrefixSafixAdd('is', 'Array', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', 'Array', propertyNames._TYPE_BASE)].join(',');
var type = {};

_copyProperty(_type, propertyNames.TYPE, type);

_copyProperty(_type, propertyNames.TYPE, rootNames); // test


propertyNames.TEST_PUBLIC = 'checkEqual, checkCompare,' + 'describe, it, test, expect,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'testCounter,';
propertyNames.TEST_ROOT = 'isThrown,isThrownValue,isThrownException,isNotThrown,' + '';
var test = {};

_copyProperty(_test, propertyNames.TEST_PUBLIC, test);

_copyProperty(_test, propertyNames.TEST_ROOT, rootNames); // syntax


propertyNames.SYNTAX = 'assert,guard,' + 'functionValue,' + 'sc,if_,switch_,' + 'loop,' + 'canUseMap, canUseSet,' + '';

var syntax = _copyProperty(_syntax, propertyNames.SYNTAX);

_copyProperty(_syntax, propertyNames.SYNTAX, rootNames); // compare


propertyNames.COMPARE = 'equal, equalDeep,' + 'equalFunction,' + 'or,' + 'match, matchValue, initialValue,' + 'allMatch, indexOfMatch, someMatch,' + 'matchSome, matchSomeValue,' + 'allMatchSome, indexOfMatchSome, someMatchSome,' + 'matchAll, matchAllValue,' + 'allMatchAll, indexOfMatchAll, someMatchAll,' + 'includes, includesSome, includesAll,' + '';
var compare = {};

_copyProperty(_compare, propertyNames.COMPARE, compare);

_copyProperty(_compare, propertyNames.COMPARE, rootNames); // convert


propertyNames.CONVERT = 'numberToString, valueToString,' + 'stringToNumber,stringToNumberDefault,' + 'stringToInteger,stringToIntegerDefault,' + 'valueToNumber, valueToNumberDefault,' + 'valueToInteger, valueToIntegerDefault,' + 'numToString, valToString,' + 'strToNumber, strToNumberDef,' + 'strToInteger, strToIntegerDef,' + 'valToNumber, valToNumberDefault,' + 'valToInteger, valToIntegerDefault,' + 'valToNum, valToNumDef,' + 'valToInt, valToIntDef,' + 'numToStr,' + 'strToNum,strToNumDef,' + 'strToInt,strToIntDef,' + '';
var convert = {};

_copyProperty(_convert, propertyNames.CONVERT, convert);

_copyProperty(_convert, propertyNames.CONVERT, rootNames); // number


propertyNames.NUMBER = 'isMultiples,isEven,isOdd,' + 'round,nearEqual,inRange,randomInt,' + '';

var number = _copyProperty(_number, propertyNames.NUMBER);

_copyProperty(_number, propertyNames.NUMBER, rootNames); // string


propertyNames.STRING_PUBLIC = 'matchFormat, replaceAll,' + 'repeat,' + 'isLowerCase, isUpperCase,' + 'indexOfFirst, indexOfLast,' + 'isFirst, isLast, isBothEnds,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'subIndex, subLength, subFirst, subLast,' + 'deleteIndex, deleteLength, deleteFirst, deleteLast,' + 'insert, add,' + '';
propertyNames.STRING_ROOT = 'matchFormat,replaceAll,' + 'isLowerCase,isUpperCase,' + '';
var string = {};

_copyProperty(_string, propertyNames.STRING_PUBLIC, string);

_copyProperty(_string, propertyNames.STRING_ROOT, rootNames); // object


propertyNames.OBJECT_PUBLIC = 'isObjectParameter,' + 'copyProperty,propertyCount,inProperty,' + 'getProperty,setProperty,' + 'objectToKeyValueArray,' + 'copyProp,propCount,inProp,' + 'getProp,setProp,' + '';
propertyNames.OBJECT_ROOT = 'copyProperty,propertyCount,inProperty,' + 'getProperty,setProperty,' + 'copyProp,propCount,inProp,' + 'getProp,setProp,' + '';
var object = {};

_copyProperty(_object, propertyNames.OBJECT_PUBLIC, object);

_copyProperty(_object, propertyNames.OBJECT_ROOT, rootNames);

object.objectToString = _type.objectToString;
rootNames.objectToString = _type.objectToString; // array

propertyNames.ARRAY_PUBLIC = 'NumberArray, IntegerArray,' + 'from,' + 'min, max,' + 'sum, average, median,' + 'mode,' + 'unique, single, multiple,' + 'filter, map, count,' + 'findFirstIndex, findLastIndex,' + 'findFirst, findLast,' + 'some, all,' + 'isFirst, isLast, isBothEnds,' + 'subIndex, subLength,' + 'subFirst, subLast,' + 'findIndex, findBackIndex,' + 'find, findBack,' + 'every,' + 'arrayToIndexValueArray,' + '';
propertyNames.ARRAY_ROOT = 'min, max,' + 'sum, average, median,' + '';
var array = {};

_copyProperty(_array, propertyNames.ARRAY_PUBLIC, array);

_copyProperty(_array, propertyNames.ARRAY_ROOT, rootNames); // array.operation


propertyNames.ARRAY_OPERATION_PUBLIC = 'insert, add,' + 'deleteLength, deleteIndex,' + 'deleteFirst, deleteLast,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'popFirst, popLast,' + 'pushFirst, pushLast,' + 'remainFirst, remainLast,' + 'filter,' + 'sortNumberAscending, sortNumberDescending,' + 'sortLengthAscending, sortLengthDescending,' + 'sortDictionaryAscending, sortDictionaryDescending,' + '';
array.operation = {};

_copyProperty(_array.operation, propertyNames.ARRAY_OPERATION_PUBLIC, array.operation); // consoleHook


propertyNames._CONSOLE_HOOK_BASE = ',Log,Info,Warn,Error,Debug';
propertyNames.CONSOLE_HOOK = [isPrefixSafixAdd('hook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('unHook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('accept', '', propertyNames._CONSOLE_HOOK_BASE)].join(',');
var consoleHook = {};

_copyProperty(_consoleHook, propertyNames.CONSOLE_HOOK, consoleHook);

var parts = _objectSpread({
  VERSION: VERSION,
  platform: platform,
  type: type,
  test: test,
  syntax: syntax,
  compare: compare,
  convert: convert,
  number: number,
  string: string,
  consoleHook: consoleHook,
  object: object,
  array: array,
  root: root
}, rootNames);

module.exports = _objectSpread(_objectSpread({}, parts), {}, {
  parts: parts
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable brace-style */

/* eslint-disable space-before-blocks */

/* eslint-disable comma-dangle */

/* eslint-disable curly */

/* eslint-disable new-cap */

/* eslint-disable semi */

/* eslint-disable quotes */

/* eslint-disable max-len */

/* eslint-disable space-before-function-paren */

/* eslint-disable spaced-comment */

/* eslint-disable indent */

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
  // ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
  // Partial support for most common case - getters, setters, and values


  if (!Object.defineProperty || !function () {
    try {
      Object.defineProperty({}, 'x', {});
      return true;
    } catch (e) {
      return false;
    }
  }()) {
    var orig = Object.defineProperty;

    Object.defineProperty = function (o, prop, desc) {
      // In IE8 try built-in implementation for defining properties on DOM prototypes.
      if (orig) {
        try {
          return orig(o, prop, desc);
        } catch (e) {}
      }

      if (o !== Object(o)) {
        throw TypeError("Object.defineProperty called on non-object");
      }

      if (Object.prototype.__defineGetter__ && 'get' in desc) {
        Object.prototype.__defineGetter__.call(o, prop, desc.get);
      }

      if (Object.prototype.__defineSetter__ && 'set' in desc) {
        Object.prototype.__defineSetter__.call(o, prop, desc.set);
      }

      if ('value' in desc) {
        o[prop] = desc.value;
      }

      return o;
    };
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
module.exports = {};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(4));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isBooleanObject = _require.isBooleanObject,
    isNumberObject = _require.isNumberObject,
    isStringObject = _require.isStringObject,
    isSymbol = _require.isSymbol,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(16),
    _copyProperty = _require2._copyProperty;
/**
 * cloneFunction
 */


var cloneFunction = {}; // function is no clone

cloneFunction.cloneIgnoreFunction = function (source) {
  if (!isFunction(source)) {
    return undefined;
  }

  return source;
}; // support
//  user object and user arrayType
//  Just good usability


cloneFunction.cloneObject = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isObject(source)) {
    return undefined;
  }

  var cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

cloneFunction.cloneArrayType = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isArrayType(source)) {
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


cloneFunction.cloneObjectType = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isObjectType(source)) {
    return undefined;
  }

  var cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
}; // // support only simple object
// cloneFunction.cloneObject = (
//   source,
//   bufferWrite = () => {},
//   __cloneDeep = value => value,
// ) => {
//   if (!isObject(source)) {
//     return undefined;
//   }
//   const cloneValue = {};
//   bufferWrite(source, cloneValue);
//   for (let key in source) {
//     cloneValue[key] = __cloneDeep(source[key]);
//   }
//   return cloneValue;
// }
// // support only simple array
// cloneFunction.cloneArray = (
//   source,
//   bufferWrite = () => {},
//   __cloneDeep = value => value,
// ) => {
//   if (!isArray(source)) {
//     return undefined;
//   }
//   const cloneValue = [];
//   bufferWrite(source, cloneValue);
//   for (let i = 0, l = source.length; i < l; i += 1) {
//     const value = source[i];
//     cloneValue.push(__cloneDeep(value))
//   }
//   return cloneValue;
// }


cloneFunction.cloneDate = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!isDate(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

cloneFunction.cloneRegExp = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!isRegExp(source)) {
    return undefined;
  }

  var cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
}; // cloneMap
//  key not recursive call
//  value recursive call


cloneFunction.cloneMap = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isMap(source)) {
    return undefined;
  }

  var cloneValue = new Map();
  bufferWrite(source, cloneValue);

  var _iterator = _createForOfIteratorHelper(source.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      cloneValue.set(key, __cloneDeep(value));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return cloneValue;
};

cloneFunction.cloneIgnoreWeakMap = function (source) {
  if (!isWeakMap(source)) {
    return undefined;
  }

  return source;
}; // cloneSet
//  element not recursive call
//  same map key


cloneFunction.cloneSet = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!isSet(source)) {
    return undefined;
  }

  var cloneValue = new Set();
  bufferWrite(source, cloneValue);

  var _iterator2 = _createForOfIteratorHelper(source),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      cloneValue.add(value);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return cloneValue;
};

cloneFunction.cloneIgnoreWeakSet = function (source) {
  if (!isWeakSet(source)) {
    return undefined;
  }

  return source;
};
/**
 * clone
 */


var _clone = function _clone(source) {
  var __clone = function __clone(value) {
    if (isUndefined(value)) {
      return undefined;
    }

    for (var i = 0, l = _clone.functions.length; i < l; i += 1) {
      var result = _clone.functions[i](value);

      if (!isUndefined(result)) {
        return result;
      }
    }

    return value;
  };

  return __clone(source);
};

_clone.functions = [];

_clone.clear = function () {
  _clone.functions = [];
};

_clone.add = function (func) {
  _clone.functions.unshift(func);
};

_clone.reset = function () {
  _clone.clear();

  _clone.add(cloneFunction.cloneObject);

  _clone.add(cloneFunction.cloneArrayType);

  _clone.add(cloneFunction.cloneIgnoreWeakSet);

  _clone.add(cloneFunction.cloneSet);

  _clone.add(cloneFunction.cloneIgnoreWeakMap);

  _clone.add(cloneFunction.cloneMap);

  _clone.add(cloneFunction.cloneIgnoreFunction);

  _clone.add(cloneFunction.cloneRegExp);

  _clone.add(cloneFunction.cloneDate);
};

_clone.reset();

var clone = function clone(source) {
  return _clone(source);
};

_copyProperty(_clone, 'clear,reset,add,' + '', clone);
/**
 * cloneDeep
 */


var _cloneDeep = function _cloneDeep(source) {
  var CircularReferenceBuffer = {
    source: [],
    clone: []
  };

  var __cloneDeep = function __cloneDeep(value) {
    var index = CircularReferenceBuffer.source.indexOf(value);

    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }

    if (isUndefined(value)) {
      return undefined;
    }

    for (var i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      var result = _cloneDeep.functions[i](value, function (source, clone) {
        CircularReferenceBuffer.source.push(source);
        CircularReferenceBuffer.clone.push(clone);
      }, __cloneDeep);

      if (!isUndefined(result)) {
        return result;
      }
    }

    return value;
  };

  return __cloneDeep(source);
};

_cloneDeep.functions = [];

_cloneDeep.clear = function (func) {
  _cloneDeep.functions = [];
};

_cloneDeep.add = function (func) {
  _cloneDeep.functions.unshift(func);
};

_cloneDeep.reset = function () {
  _cloneDeep.clear();

  _cloneDeep.add(cloneFunction.cloneObject);

  _cloneDeep.add(cloneFunction.cloneArrayType);

  _cloneDeep.add(cloneFunction.cloneIgnoreWeakSet);

  _cloneDeep.add(cloneFunction.cloneSet);

  _cloneDeep.add(cloneFunction.cloneIgnoreWeakMap);

  _cloneDeep.add(cloneFunction.cloneMap);

  _cloneDeep.add(cloneFunction.cloneIgnoreFunction);

  _cloneDeep.add(cloneFunction.cloneRegExp);

  _cloneDeep.add(cloneFunction.cloneDate);
};

_cloneDeep.reset();

var cloneDeep = function cloneDeep(source) {
  return _cloneDeep(source);
};

_copyProperty(_cloneDeep, 'clear,reset,add,' + '', cloneDeep);

module.exports = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  clone: clone,
  cloneDeep: cloneDeep,
  cloneFunction: cloneFunction
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __webpack_require__(6)), __webpack_require__(8)), __webpack_require__(11)), __webpack_require__(12)), __webpack_require__(13)), __webpack_require__(14)), __webpack_require__(15));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(7),
    _propertyCount = _require._propertyCount;

var _typeofCheck = function _typeofCheck(typeName) {
  return function (value) {
    return _typeof(value) === typeName;
  };
};

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};

var _objectToStringCheck = function _objectToStringCheck(typeName) {
  return function (value) {
    return objectToString(value) === "[object ".concat(typeName, "]");
  };
};

var isUndefined = _typeofCheck('undefined');

var isNull = function isNull(value) {
  return value === null;
};

var isNaNStrict = function isNaNStrict(value) {
  return value !== value;
};

var isBoolean = _typeofCheck('boolean');

var isBooleanObject = function isBooleanObject(value) {
  return _objectToStringCheck('Boolean') && !isBoolean(value);
};

var isNumber = function isNumber(value) {
  return _typeofCheck('number')(value) && isFinite(value);
};

var isNumberObject = function isNumberObject(value) {
  return _objectToStringCheck('Number')(value) && !_typeofCheck('number')(value);
};

var isInteger = function isInteger(value) {
  if (!isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

var isString = _typeofCheck('string');

var isStringObject = function isStringObject(value) {
  return _objectToStringCheck('String') && !isString(value);
};

var isFunction = _typeofCheck('function');

var isObject = function isObject(value) {
  if (_objectToStringCheck('Object')(value) && !isNull(value) && !isUndefined(value)) {
    return true;
  }

  return false;
};

var isObjectType = function isObjectType(value) {
  if (isNull(value)) {
    return false;
  }

  return ['function', 'object'].indexOf(_typeof(value)) !== -1;
};

var isEmptyObject = function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }

  return _propertyCount(value) === 0;
};

var isArray = _objectToStringCheck('Array'); // Int8Array Uint16Array Float32Array Float64Array etc...


var isArrayType = function isArrayType(value) {
  if (objectToString(value).indexOf('Array]') !== -1) {
    return true;
  }

  return false;
};

var isEmptyArray = function isEmptyArray(value) {
  if (!isArrayType(value)) {
    return false;
  }

  return value.length === 0;
};

var isDate = _objectToStringCheck('Date');

var isRegExp = _objectToStringCheck('RegExp');

var isError = _objectToStringCheck('Error');

var isNotUndefined = function isNotUndefined(value) {
  return !isUndefined(value);
};

var isNotNull = function isNotNull(value) {
  return !isNull(value);
};

var isNotNaNStrict = function isNotNaNStrict(value) {
  return !isNaNStrict(value);
};

var isNotBoolean = function isNotBoolean(value) {
  return !isBoolean(value);
};

var isNotNumber = function isNotNumber(value) {
  return !isNumber(value);
};

var isNotInteger = function isNotInteger(value) {
  return !isInteger(value);
};

var isNotString = function isNotString(value) {
  return !isString(value);
};

var isNotFunction = function isNotFunction(value) {
  return !isFunction(value);
};

var isNotObject = function isNotObject(value) {
  return !isObject(value);
};

var isNotObjectType = function isNotObjectType(value) {
  return !isObjectType(value);
};

var isNotArray = function isNotArray(value) {
  return !isArray(value);
};

var isNotArrayType = function isNotArrayType(value) {
  return !isArrayType(value);
};

var isNotDate = function isNotDate(value) {
  return !isDate(value);
};

var isNotRegExp = function isNotRegExp(value) {
  return !isRegExp(value);
};

var isNotBooleanObject = function isNotBooleanObject(value) {
  return !isBooleanObject(value);
};

var isNotNumberObject = function isNotNumberObject(value) {
  return !isNumberObject(value);
};

var isNotStringObject = function isNotStringObject(value) {
  return !isStringObject(value);
};

var isNotEmptyObject = function isNotEmptyObject(value) {
  return !isEmptyObject(value);
};

var isNotEmptyArray = function isNotEmptyArray(value) {
  return !isEmptyArray(value);
};

var isUndef = isUndefined;
var isBool = isBoolean;
var isNum = isNumber;
var isInt = isInteger;
var isStr = isString;
var isFunc = isFunction;
var isObj = isObject;
var isObjType = isObjectType;
var isEmptyObj = isEmptyObject;
var isNotUndef = isNotUndefined;
var isNotBool = isNotBoolean;
var isNotNum = isNotNumber;
var isNotInt = isNotInteger;
var isNotStr = isNotString;
var isNotFunc = isNotFunction;
var isNotObj = isNotObject;
var isNotObjType = isNotObjectType;
var isNotEmptyObj = isNotEmptyObject;
module.exports = {
  _typeofCheck: _typeofCheck,
  _objectToStringCheck: _objectToStringCheck,
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
  isObjectType: isObjectType,
  isArray: isArray,
  isArrayType: isArrayType,
  isDate: isDate,
  isRegExp: isRegExp,
  isError: isError,
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
  isNotObjectType: isNotObjectType,
  isNotArray: isNotArray,
  isNotArrayType: isNotArrayType,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotBooleanObject: isNotBooleanObject,
  isNotNumberObject: isNotNumberObject,
  isNotStringObject: isNotStringObject,
  isNotEmptyObject: isNotEmptyObject,
  isNotEmptyArray: isNotEmptyArray,
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjType: isObjType,
  isEmptyObj: isEmptyObj,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjType: isNotObjType,
  isNotEmptyObj: isNotEmptyObj
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * propertyCount
 */
var _propertyCount = function _propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var result = 0;

  if (hasOwn) {
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
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

module.exports = {
  _propertyCount: _propertyCount
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    isError = _require.isError;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;
/**
 *isException
 * description:
 * isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */


var isException = function isException(value) {
  if (isObjectParameter(value, 'name,message')) {
    return true;
  } else if (isError(value)) {
    return true;
  }

  return false;
};

var isNotException = function isNotException(value) {
  return !isException(value);
};

var isExcept = isException;
var isNotExcept = isNotException;
module.exports = {
  isException: isException,
  isNotException: isNotException,
  isExcept: isExcept,
  isNotExcept: isNotExcept
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(10),
    _replaceAll = _require2._replaceAll;

var _require3 = __webpack_require__(7),
    _propertyCount = _require3._propertyCount;
/**
 * isObjectParameter
 */


var isObjectParameter = function isObjectParameter(object, props) {
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!isObject(object)) {
    return false;
  }

  if (!isString(props)) {
    return false;
  }

  if (!isString(optionalProps)) {
    return false;
  }

  props = _replaceAll(props, ' ', '').split(','); // last element === '' delete

  if (props[props.length - 1] === '') {
    props.splice(props.length - 1, 1);
  }

  optionalProps = _replaceAll(optionalProps, ' ', '').split(',');

  if (optionalProps[optionalProps.length - 1] === '') {
    optionalProps.splice(optionalProps.length - 1, 1);
  }

  var propMatchCount = 0;
  var optionalPropMatchCount = 0;

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (props.indexOf(property) !== -1) {
        propMatchCount += 1;
      } else if (optionalProps.indexOf(property) !== -1) {
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

module.exports = {
  isObjectParameter: isObjectParameter
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _replaceAll = function _replaceAll(str, before, after) {
  return str.split(before).join(after);
};

module.exports = {
  _replaceAll: _replaceAll
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var isSymbol = _typeofCheck('symbol');

var isNotSymbol = function isNotSymbol(value) {
  return !isSymbol(value);
};

module.exports = {
  isSymbol: isSymbol,
  isNotSymbol: isNotSymbol
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var isMap = _objectToStringCheck('Map');

var isWeakMap = _objectToStringCheck('WeakMap');

var isNotMap = function isNotMap(value) {
  return !isMap(value);
};

var isNotWeakMap = function isNotWeakMap(value) {
  return !isWeakMap(value);
};

module.exports = {
  isMap: isMap,
  isNotMap: isNotMap,
  isWeakMap: isWeakMap,
  isNotWeakMap: isNotWeakMap
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var isSet = _objectToStringCheck('Set');

var isWeakSet = _objectToStringCheck('WeakSet');

var isNotSet = function isNotSet(value) {
  return !isSet(value);
};

var isNotWeakSet = function isNotWeakSet(value) {
  return !isWeakSet(value);
};

module.exports = {
  isSet: isSet,
  isNotSet: isNotSet,
  isWeakSet: isWeakSet,
  isNotWeakSet: isNotWeakSet
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
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

var _require2 = __webpack_require__(8),
    isException = _require2.isException,
    isNotException = _require2.isNotException;

var _require3 = __webpack_require__(11),
    isSymbol = _require3.isSymbol,
    isNotSymbol = _require3.isNotSymbol;

var _require4 = __webpack_require__(12),
    isMap = _require4.isMap,
    isNotMap = _require4.isNotMap,
    isWeakMap = _require4.isWeakMap,
    isNotWeakMap = _require4.isNotWeakMap;

var _require5 = __webpack_require__(13),
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
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

var _require2 = __webpack_require__(8),
    isException = _require2.isException,
    isNotException = _require2.isNotException;

var _require3 = __webpack_require__(11),
    isSymbol = _require3.isSymbol,
    isNotSymbol = _require3.isNotSymbol;

var _require4 = __webpack_require__(12),
    isMap = _require4.isMap,
    isNotMap = _require4.isNotMap,
    isWeakMap = _require4.isWeakMap,
    isNotWeakMap = _require4.isNotWeakMap;

var _require5 = __webpack_require__(13),
    isSet = _require5.isSet,
    isNotSet = _require5.isNotSet,
    isWeakSet = _require5.isWeakSet,
    isNotWeakSet = _require5.isNotWeakSet;

var _require6 = __webpack_require__(14),
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __webpack_require__(17)), __webpack_require__(9)), __webpack_require__(18)), __webpack_require__(19));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isError = _require.isError,
    isBooleanObject = _require.isBooleanObject,
    isNumberObject = _require.isNumberObject,
    isStringObject = _require.isStringObject;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(7),
    _propertyCount = _require3._propertyCount;

var _require4 = __webpack_require__(10),
    _replaceAll = _require4._replaceAll;
/**
 * copyProperty
 */


var _copyProperty = function _copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || isUndefined(propertyArray[i])) {
      continue;
    }

    if (!isString(propertyArray[i])) {
      throw new TypeError('copyProperty args(propertyArray) element is not string');
    }

    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }

  return toObject;
};

var copyProperty = function copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (isObjectParameter(fromObject, 'fromObject,propertyArray', 'toObject')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyArray = _fromObject.propertyArray;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  }

  if (!isObject(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!isString(propertyArray)) {
    if (!isArray(propertyArray)) {
      throw new TypeError('copyProperty args(propertyArray) is not [array|string]');
    }
  }

  if (!isObject(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  _copyProperty(fromObject, propertyArray, toObject);
};
/**
 * propertyCount
 */


var propertyCount = function propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isObjectParameter(object, 'object', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!isObjectType(object)) {
    throw new TypeError('propertyCount args(object) is not object type');
  }

  if (!isBoolean(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return _propertyCount(object, hasOwn);
};
/**
 * getProperty
 */


var _getPropertyBase = function _getPropertyBase(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var result = object;
  var propertyArray = propertyPath.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      return {
        "in": false
      };
    }

    if (hasOwn) {
      if (!result.hasOwnProperty(propertyArray[i])) {
        return {
          "in": false
        };
      }
    } else {
      if (!(propertyArray[i] in result)) {
        return {
          "in": false
        };
      }
    }

    if (isUndefined(result[propertyArray[i]])) {
      return {
        "in": true,
        value: undefined
      };
    }

    result = result[propertyArray[i]];
  }

  return {
    "in": true,
    value: result
  };
};

var _getProperty = function _getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var result = _getPropertyBase(object, propertyPath, hasOwn);

  if (!isBoolean(result["in"])) {
    throw new Error('_getProperty _getPropertyBase result is not boolean');
  }

  if (result["in"] === false) {
    return undefined;
  } else {
    return result.value;
  }
};

var getProperty = function getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (isObjectParameter(object, 'object, propertyPath', 'hasOwn')) {
    var _object2 = object;
    object = _object2.object;
    propertyPath = _object2.propertyPath;
    var _object2$hasOwn = _object2.hasOwn;
    hasOwn = _object2$hasOwn === void 0 ? true : _object2$hasOwn;
  }

  if (!isObject(object)) {
    throw new TypeError('getProperty args(object) is not object');
  }

  if (!isString(propertyPath)) {
    throw new TypeError('getProperty args(propertyPath) is not string');
  }

  if (!isBoolean(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return _getProperty(object, propertyPath, hasOwn);
};
/**
 * setProperty
 */


var _setProperty = function _setProperty(object, path, value) {
  var propertyArray = path.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      throw new Error('setProperty args(propertyPath) is no exist property');
    }
  }

  var result = object;

  for (var _i = 0, _l = propertyArray.length - 1; _i < _l; _i += 1) {
    if (!(isObject(result[propertyArray[_i]]) || isArrayType(result[propertyArray[_i]]))) {
      result[propertyArray[_i]] = {};
    }

    result = result[propertyArray[_i]];
  }

  result[propertyArray[propertyArray.length - 1]] = value;
  return result;
};

var setProperty = function setProperty(object, propertyPath, value) {
  if (isObjectParameter(object, 'object, propertyPath, value')) {
    var _object3 = object;
    object = _object3.object;
    propertyPath = _object3.propertyPath;
    value = _object3.value;
  }

  if (!isObject(object)) {
    throw new TypeError('setProperty args(object) is not object');
  }

  if (!isString(propertyPath)) {
    throw new TypeError('setProperty args(propertyPath) is not string');
  }

  return _setProperty(object, propertyPath, value);
};

var copyProp = copyProperty;
var propCount = propertyCount;
var getProp = getProperty;
var setProp = setProperty;
module.exports = {
  _copyProperty: _copyProperty,
  _propertyCount: _propertyCount,
  _getProperty: _getProperty,
  _getPropertyBase: _getPropertyBase,
  _setProperty: _setProperty,
  copyProperty: copyProperty,
  propertyCount: propertyCount,
  getProperty: getProperty,
  setProperty: setProperty,
  copyProp: copyProp,
  propCount: propCount,
  getProp: getProp,
  setProp: setProp
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(10),
    _replaceAll = _require2._replaceAll;

var _require3 = __webpack_require__(9),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = __webpack_require__(17),
    _getPropertyBase = _require4._getPropertyBase;
/**
 * _inProperty
 */


var _inProperty = function _inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!isObject(object)) {
    return false;
  }

  if (isString(propertyPathArray)) {
    propertyPathArray = _replaceAll(propertyPathArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyPathArray.length; i += 1) {
    if (i !== 0 && i === propertyPathArray.length - 1) {
      if (propertyPathArray[i] === '' || isUndefined(propertyPathArray[i])) {
        continue;
      }
    }

    if (!isString(propertyPathArray[i])) {
      throw new TypeError('_inProperty args(propertyArray) element is not string');
    }

    var result = _getPropertyBase(object, propertyPathArray[i], hasOwn);

    if (result["in"] === false) {
      return false;
    }
  }

  return true;
};
/**
 * inProperty
 */


var inProperty = function inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (isObjectParameter(object, 'object, propertyPathArray', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyPathArray = _object.propertyPathArray;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!isObject(object)) {
    throw new TypeError('inProperty args(object) is not object');
  }

  if (!isString(propertyPathArray)) {
    if (!isArray(propertyPathArray)) {
      throw new TypeError('inProperty args(propertyPathArray) is not [array|string]');
    }
  }

  if (!isBoolean(hasOwn)) {
    throw new TypeError('inProperty args(hasOwn) is not boolean');
  }

  return _inProperty(object, propertyPathArray, hasOwn);
};

var inProp = inProperty;
module.exports = {
  _inProperty: _inProperty,
  inProperty: inProperty,
  inProp: inProp
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;
/**
 * objectToKeyValueArray
 */


var _objectToKeyValueArray = function _objectToKeyValueArray(object) {
  var result = [];

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }

  return result;
};

var objectToKeyValueArray = function objectToKeyValueArray(object) {
  if (isObjectParameter(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!isObject(object)) {
    throw new TypeError('objectToKeyValueArray args(object) is not object');
  }

  return _objectToKeyValueArray(object);
};

module.exports = {
  _objectToKeyValueArray: _objectToKeyValueArray,
  objectToKeyValueArray: objectToKeyValueArray
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(21),
    _includes = _require._includes;

var _require2 = __webpack_require__(28),
    _includesSome = _require2._includesSome;

var isWebBrowser = function isWebBrowser() {
  return typeof window !== 'undefined';
};

var isWindowsScriptHost = function isWindowsScriptHost() {
  return typeof WScript !== 'undefined';
};

var isGoogleAppsScript = function isGoogleAppsScript() {
  return typeof Browser !== 'undefined';
};

var isNodeJs = function isNodeJs() {
  return name() === 'Node.js';
};

var name = function name() {
  var result;

  if (isWindowsScriptHost()) {
    result = 'WindowsScriptHost';
  } else if (isWebBrowser()) {
    result = 'WebBrowser';
  } else if (isGoogleAppsScript()) {
    result = 'GoogleAppsScript';
  } else {
    result = 'Node.js';
  }

  ;

  if (_includes(['WindowsScriptHost', 'WebBrowser', 'GoogleAppsScript', 'Node.js'], result) === false) {
    throw new Error('platform name error');
  }

  return result;
};

var browserName = function browserName() {
  var result = '';

  if (isWebBrowser()) {
    var ua = window.navigator.userAgent.toLowerCase();

    if (_includesSome(ua, ['msie', 'trident'])) {
      result = 'InternetExplorer';
    } else if (_includes(ua, 'edge')) {
      result = 'Edge';
    } else if (_includes(ua, 'opr')) {
      result = 'Opera';
    } else if (_includes(ua, 'chrome')) {
      result = 'Chrome';
    } else if (_includes(ua, 'safari')) {
      result = 'Safari';
    } else if (_includes(ua, 'firefox')) {
      result = 'Firefox';
    } else {
      result = 'other';
    }
  }

  if (_includes(['Chrome', 'Firefox', 'Edge', 'InternetExplorer', 'Safari', 'Opera', 'other', ''], result) === false) {
    throw new Error('platform browserName error');
  }

  return result;
};

var isChrome = function isChrome() {
  return browserName() === 'Chrome';
};

var isFirefox = function isFirefox() {
  return browserName() === 'Firefox';
};

var isEdge = function isEdge() {
  return browserName() === 'Edge';
};

var isInternetExplorer = function isInternetExplorer() {
  return browserName() === 'InternetExplorer';
};

var isSafari = function isSafari() {
  return browserName() === 'Safari';
};

var isOpera = function isOpera() {
  return browserName() === 'Opera';
};

module.exports = {
  name: name,
  isWebBrowser: isWebBrowser,
  isWindowsScriptHost: isWindowsScriptHost,
  isGoogleAppsScript: isGoogleAppsScript,
  isNodeJs: isNodeJs,
  browserName: browserName,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  buildMode: ''
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(22),
    _match = _require3._match;
/**
 * includes
 */


var _includes = function _includes(value, compare) {
  if (isString(value)) {
    if (compare === '') {
      return false;
    }

    if (isRegExp(compare)) {
      return _match(value, compare);
    }

    return value.indexOf(compare) !== -1;
  } else if (isArray(value)) {
    return value.indexOf(compare) !== -1;
  }
};

var includes = function includes(value, compare) {
  if (isObjectParameter(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  if (isString(value)) {
    if (!(isString(compare) || isRegExp(compare))) {
      throw new TypeError('includes args(compare) is not [string|RegExp]');
    }
  } else if (isArray(value)) {//
  } else {
    throw new TypeError('includes args(value) is not [string|array]');
  }

  return _includes(value, compare);
};

module.exports = {
  _includes: _includes,
  includes: includes
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(23),
    _some = _require3._some,
    _all = _require3._all,
    _findFirstIndex = _require3._findFirstIndex;
/**
 * match
 */


var _match = function _match(value, compare) {
  if (isString(value)) {
    var result;

    if (isRegExp(compare)) {
      result = value.match(compare) !== null;
    } else if (isFunction(compare)) {
      result = compare(value);

      if (!isBoolean(result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      result = value === compare;
    }

    return result;
  } else {
    var _result;

    if (isFunction(compare)) {
      _result = compare(value);

      if (!isBoolean(_result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      _result = value === compare;
    }

    return _result;
  }
};

var match = function match(value, compare) {
  if (isObjectParameter(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  return _match(value, compare);
};
/**
 * indexOfMatch
 */


var _indexOfMatch = function _indexOfMatch(valueArray, compare) {
  return _findFirstIndex(valueArray, function (value) {
    return _match(value, compare);
  });
};

var indexOfMatch = function indexOfMatch(valueArray, compare) {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('indexOfMatch args(valueArray) is not array');
  }

  return _indexOfMatch(valueArray, compare);
};
/**
 * someMatch
 */


var _someMatch = function _someMatch(valueArray, compare) {
  return _indexOfMatch(valueArray, compare) !== -1;
};

var someMatch = function someMatch(valueArray, compare) {
  return indexOfMatch(valueArray, compare) !== -1;
};
/**
 * matchSome
 */


var _matchSome = function _matchSome(value, compareArray) {
  return _some(compareArray, function (compare) {
    return _match(value, compare);
  });
};

var matchSome = function matchSome(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchSome args(compareArray) is not array');
  }

  return _matchSome(value, compareArray);
};
/**
 * matchSomeValue
 */


var _matchSomeValue = function _matchSomeValue(value, compareArray, valueWhenMatched) {
  if (_matchSome(value, compareArray)) {
    if (isFunction(valueWhenMatched)) {
      return valueWhenMatched(value);
    }

    return valueWhenMatched;
  }

  return value;
};

var matchSomeValue = function matchSomeValue(value, compareArray, valueWhenMatched) {
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    var _value3 = value;
    value = _value3.value;
    compareArray = _value3.compareArray;
    valueWhenMatched = _value3.valueWhenMatched;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchSomeValue args(compareArray) is not array');
  }

  return _matchSomeValue(value, compareArray, valueWhenMatched);
};
/**
 * allMatchSome
 */


var _allMatchSome = function _allMatchSome(valueArray, compareArray) {
  return _all(valueArray, function (value) {
    return _matchSome(value, compareArray);
  });
};

var allMatchSome = function allMatchSome(valueArray, compareArray) {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
    compareArray = _valueArray2.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('allMatchSome args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
    throw new TypeError('allMatchSome args(compareArray) is not array');
  }

  return _allMatchSome(valueArray, compareArray);
};
/**
 * indexOfMatchSome
 */


var _indexOfMatchSome = function _indexOfMatchSome(valueArray, compareArray) {
  return _findFirstIndex(valueArray, function (value) {
    return _matchSome(value, compareArray);
  });
};

var indexOfMatchSome = function indexOfMatchSome(valueArray, compareArray) {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray3 = valueArray;
    valueArray = _valueArray3.valueArray;
    compareArray = _valueArray3.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('indexOfMatchSome args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
    throw new TypeError('indexOfMatchSome args(compareArray) is not array');
  }

  return _indexOfMatchSome(valueArray, compareArray);
};
/**
 * someMatchSome
 */


var _someMatchSome = function _someMatchSome(valueArray, compareArray) {
  return _indexOfMatchSome(valueArray, compareArray) !== -1;
};

var someMatchSome = function someMatchSome(valueArray, compareArray) {
  return indexOfMatchSome(valueArray, compareArray) !== -1;
};
/**
 * matchAll
 */


var _matchAll = function _matchAll(value, compareArray) {
  return _all(compareArray, function (compare) {
    return _match(value, compare);
  });
};

var matchAll = function matchAll(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value4 = value;
    value = _value4.value;
    compareArray = _value4.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(value, compareArray);
};
/**
 * matchAllValue
 */


var _matchAllValue = function _matchAllValue(value, compareArray, valueWhenMatched) {
  if (_matchAll(value, compareArray)) {
    if (isFunction(valueWhenMatched)) {
      return valueWhenMatched(value);
    }

    return valueWhenMatched;
  }

  return value;
};

var matchAllValue = function matchAllValue(value, compareArray, valueWhenMatched) {
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    var _value5 = value;
    value = _value5.value;
    compareArray = _value5.compareArray;
    valueWhenMatched = _value5.valueWhenMatched;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, valueWhenMatched);
};
/**
 * allMatchAll
 */


var _allMatchAll = function _allMatchAll(valueArray, compareArray) {
  return _all(valueArray, function (value) {
    return _matchAll(value, compareArray);
  });
};

var allMatchAll = function allMatchAll(valueArray, compareArray) {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray4 = valueArray;
    valueArray = _valueArray4.valueArray;
    compareArray = _valueArray4.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('allMatchAll args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
    throw new TypeError('allMatchAll args(compareArray) is not array');
  }

  return _allMatchAll(valueArray, compareArray);
};
/**
 * indexOfMatchAll
 */


var _indexOfMatchAll = function _indexOfMatchAll(valueArray, compareArray) {
  return _findFirstIndex(valueArray, function (value) {
    return _matchAll(value, compareArray);
  });
};

var indexOfMatchAll = function indexOfMatchAll(valueArray, compareArray) {
  if (isObjectParameter(valueArray, 'valueArray,compareArray')) {
    var _valueArray5 = valueArray;
    valueArray = _valueArray5.valueArray;
    compareArray = _valueArray5.compareArray;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('indexOfMatchAll args(valueArray) is not array');
  }

  if (!isArray(compareArray)) {
    throw new TypeError('indexOfMatchAll args(compareArray) is not array');
  }

  return _indexOfMatchAll(valueArray, compareArray);
};
/**
 * someMatchAll
 */


var _someMatchAll = function _someMatchAll(valueArray, compareArray) {
  return _indexOfMatchAll(valueArray, compareArray) !== -1;
};

var someMatchAll = function someMatchAll(valueArray, compareArray) {
  return indexOfMatchAll(valueArray, compareArray) !== -1;
};

module.exports = {
  _match: _match,
  _indexOfMatch: _indexOfMatch,
  _someMatch: _someMatch,
  _matchSome: _matchSome,
  _matchSomeValue: _matchSomeValue,
  _allMatchSome: _allMatchSome,
  _indexOfMatchSome: _indexOfMatchSome,
  _someMatchSome: _someMatchSome,
  _matchAll: _matchAll,
  _matchAllValue: _matchAllValue,
  _allMatchAll: _allMatchAll,
  _indexOfMatchAll: _indexOfMatchAll,
  _someMatchAll: _someMatchAll,
  match: match,
  indexOfMatch: indexOfMatch,
  someMatch: someMatch,
  matchSome: matchSome,
  matchSomeValue: matchSomeValue,
  allMatchSome: allMatchSome,
  indexOfMatchSome: indexOfMatchSome,
  someMatchSome: someMatchSome,
  matchAll: matchAll,
  matchAllValue: matchAllValue,
  allMatchAll: allMatchAll,
  indexOfMatchAll: indexOfMatchAll,
  someMatchAll: someMatchAll
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isUndefinedArray = _require.isUndefinedArray,
    isNullArray = _require.isNullArray,
    isNaNStrictArray = _require.isNaNStrictArray,
    isBooleanArray = _require.isBooleanArray,
    isNumberArray = _require.isNumberArray,
    isIntegerArray = _require.isIntegerArray,
    isStringArray = _require.isStringArray,
    isFunctionArray = _require.isFunctionArray,
    isObjectArray = _require.isObjectArray,
    isArrayArray = _require.isArrayArray,
    isDateArray = _require.isDateArray,
    isRegExpArray = _require.isRegExpArray,
    isExceptionArray = _require.isExceptionArray;

var _require2 = __webpack_require__(24),
    isEven = _require2.isEven,
    _inRange = _require2._inRange;

var _require3 = __webpack_require__(9),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = __webpack_require__(4),
    _clone = _require4._clone,
    _cloneDeep = _require4._cloneDeep;

var _require5 = __webpack_require__(25),
    canUseSet = _require5.canUseSet;
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

var min = function min(array) {
  if (!isArray(array)) {
    throw new TypeError('min args(array) is not array');
  }

  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError('min args(array) element is not number');
  }

  return _min(array);
};

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

var max = function max(array) {
  if (!isArray(array)) {
    throw new TypeError('max args(array) is not array');
  }

  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError('max args(array) element is not number');
  }

  return _max(array);
};
/**
 * from
 */


var from = function from(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};
/**
 * sum
 */


var _sum = function _sum(array) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    result += array[i];
  }

  return result;
};

var sum = function sum(array) {
  if (!isArray(array)) {
    throw new TypeError('sum args(array) is not array');
  }

  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError('sum args(array) element is not number');
  }

  return _sum(array);
};
/**
 * average
 */


var _average = function _average(array) {
  if (array.length === 0) {
    return null;
  }

  return _sum(array) / array.length;
};

var average = function average(array) {
  if (!isArray(array)) {
    throw new TypeError('average args(array) is not array');
  }

  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError('average args(array) element is not number');
  }

  return _average(array);
};
/**
 * median
 */


var _median = function _median(array) {
  if (array.length === 0) {
    return null;
  }

  var sortedArray = _cloneDeep(array);

  sortedArray.sort(function (a, b) {
    return a - b;
  });

  if (isEven(sortedArray.length)) {
    // Even number length
    var centerIndex = sortedArray.length / 2;
    return (sortedArray[centerIndex - 1] + sortedArray[centerIndex]) / 2;
  } else {
    // Odd number length
    return sortedArray[(sortedArray.length - 1) / 2];
  }
};

var median = function median(array) {
  if (!isArray(array)) {
    throw new TypeError('median args(array) is not array');
  }

  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError('median args(array) element is not number');
  }

  return _median(array);
};
/**
 * mode
 */


var _mode = function _mode(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = _unique(array);

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

var mode = function mode(array) {
  if (!isArray(array)) {
    throw new TypeError('mode args(array) is not array');
  }

  return _mode(array);
};
/**
 * uniqe
 */


var _unique = function _unique(array) {
  if (canUseSet() && array.length > 120) {
    return _toConsumableArray(new Set(array));
  } else {
    var result = [];

    for (var i = 0, l = array.length; i < l; i += 1) {
      if (result.indexOf(array[i]) === -1) {
        result.push(array[i]);
      }
    }

    return result;
  } // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120

};

var unique = function unique(array) {
  if (!isArray(array)) {
    throw new TypeError('unique args(array) is not array');
  }

  return _unique(array);
};
/**
 * single
 */


var _single = function _single(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = _unique(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] === 1;
  });
};

var single = function single(array) {
  if (!isArray(array)) {
    throw new TypeError('single args(array) is not array');
  }

  return _single(array);
};
/**
 * multiple
 */


var _multiple = function _multiple(array) {
  if (array.length === 0) {
    return [];
  }

  var uniqueArray = _unique(array);

  var countArray = _map(uniqueArray, function (element1) {
    return _filter(array, function (element2) {
      return element1 === element2;
    }).length;
  });

  return _filter(uniqueArray, function (element, index) {
    return countArray[index] >= 2;
  });
};

var multiple = function multiple(array) {
  if (!isArray(array)) {
    throw new TypeError('multiple args(array) is not array');
  }

  return _multiple(array);
};
/**
 * filter
 */


var _filter = function _filter(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      result.push(array[i]);
    }
  }

  return result;
};

var filter = function filter(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array = array;
    array = _array.array;
    func = _array.func;
  }

  if (!isArray(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('filter args(compareFunc) is not function');
  }

  return _filter(array, func);
};
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

var map = function map(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array2 = array;
    array = _array2.array;
    func = _array2.func;
  }

  if (!isArray(array)) {
    throw new TypeError('map args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('map args(productFunc) is not function');
  }

  return _map(array, func);
};
/**
 * count
 */


var _count = function _count(array, func) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_count args(func) result is not boolean');
    }

    if (resultFunc) {
      result += 1;
    }
  }

  return result;
};

var count = function count(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array3 = array;
    array = _array3.array;
    func = _array3.func;
  }

  if (!isArray(array)) {
    throw new TypeError('count args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('count args(func) is not function');
  }

  return _count(array, func);
};
/**
 * findFirstIndex
 */


var _findFirstIndex = function _findFirstIndex(array, func) {
  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_findFirstIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

var findFirstIndex = function findFirstIndex(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array4 = array;
    array = _array4.array;
    func = _array4.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findFirstIndex args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findFirstIndex args(compareFunc) is not function');
  }

  return _findFirstIndex(array, func);
};

var findIndex = findFirstIndex;
/**
 * findLastIndex
 */

var _findLastIndex = function _findLastIndex(array, func) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_findLastIndex args(compareFunc) result is not boolean');
    }

    if (resultFunc) {
      return i;
    }
  }

  return -1;
};

var findLastIndex = function findLastIndex(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array5 = array;
    array = _array5.array;
    func = _array5.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findLastIndex args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findLastIndex args(compareFunc) is not function');
  }

  return _findLastIndex(array, func);
};

var findBackIndex = findLastIndex;
/**
 * findFirst
 */

var _findFirst = function _findFirst(array, func) {
  var resultIndex = _findFirstIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

var findFirst = function findFirst(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array6 = array;
    array = _array6.array;
    func = _array6.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findFirst args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findFirst args(compareFunc) is not function');
  }

  return _findFirst(array, func);
};

var find = findFirst;
/**
 * findLast
 */

var _findLast = function _findLast(array, func) {
  var resultIndex = _findLastIndex(array, func);

  if (resultIndex === -1) {
    return undefined;
  }

  return array[resultIndex];
};

var findLast = function findLast(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array7 = array;
    array = _array7.array;
    func = _array7.func;
  }

  if (!isArray(array)) {
    throw new TypeError('findLast args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('findLast args(compareFunc) is not function');
  }

  return _findLast(array, func);
};

var findBack = findLast;
/**
 * some
 */

var _some = function _some(array, func) {
  return _findFirstIndex(array, func) !== -1;
};

var some = function some(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array8 = array;
    array = _array8.array;
    func = _array8.func;
  }

  if (!isArray(array)) {
    throw new TypeError('some args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('some args(compareFunc) is not function');
  }

  return _some(array, func);
};
/**
 * all:every
 */


var _all = function _all(array, func) {
  if (array.length === 0) {
    return false;
  }

  return _filter(array, func).length === array.length;
};

var all = function all(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array9 = array;
    array = _array9.array;
    func = _array9.func;
  }

  if (!isArray(array)) {
    throw new TypeError('all args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('all args(compareFunc) is not function');
  }

  return _all(array, func);
};

var every = all;
/**
 * isFirst
 */

var _isFirst = function _isFirst(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    return array[index] === value;
  });
};

var isFirst = function isFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array10 = array;
    array = _array10.array;
    valueArray = _array10.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('isFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isFirst(array, valueArray);
};
/**
 * isLast
 */


var _isLast = function _isLast(array, valueArray) {
  if (array.length < valueArray.length) {
    return false;
  }

  return _all(valueArray, function (value, index) {
    return array[array.length - valueArray.length + index] === value;
  });
};

var isLast = function isLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueArray = _array11.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('isLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('isFirst args(valueArray) is not array');
  }

  return _isLast(array, valueArray);
};
/**
 * isBothEnds
 */


var _isBothEnds = function _isBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (array.length <= 1) {
    return false;
  }

  return _isFirst(array, valueFirstArray) && _isLast(array, valueLastArray);
};

var isBothEnds = function isBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array12 = array;
    array = _array12.array;
    valueFirstArray = _array12.valueFirstArray;
    var _array12$valueLastArr = _array12.valueLastArray;
    valueLastArray = _array12$valueLastArr === void 0 ? valueFirstArray : _array12$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array13 = array;
    array = _array13.array;
    valueFirstArray = _array13.valueArray;
    valueLastArray = valueFirstArray;
  }

  if (!isArray(array)) {
    throw new TypeError('isBothEnds args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('isBothEnds args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('isBothEnds args(valueLastArray) is not array');
  }

  return _isBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * subIndex
 */


var _subIndex = function _subIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  return array.slice(indexStart, indexEnd + 1);
};

var subIndex = function subIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if (isObjectParameter(array, 'array, indexStart', 'indexEnd')) {
    var _array14 = array;
    array = _array14.array;
    indexStart = _array14.indexStart;
    var _array14$indexEnd = _array14.indexEnd;
    indexEnd = _array14$indexEnd === void 0 ? indexStart : _array14$indexEnd;
  }

  if (!isArray(array)) {
    throw new TypeError('subIndex args(array) is not array');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('subIndex args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, array.length - 1)) {
    throw new RangeError('subIndex args(indexStart) must be from 0 to array.length - 1');
  }

  if (!isInteger(indexEnd)) {
    throw new TypeError('subIndex args(indexEnd) is not integer');
  }

  if (!_inRange(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError('subIndex args(indexEnd) must be from indexStart to array.length - 1');
  }

  return _subIndex(array, indexStart, indexEnd);
};
/**
 * subLength
 */


var _subLength = function _subLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;
  return _subIndex(array, index, index + length - 1); // same:
  //  return array.slice(index, index + length);
};

var subLength = function subLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;

  if (isObjectParameter(array, 'array, index', 'length')) {
    var _array15 = array;
    array = _array15.array;
    index = _array15.index;
    var _array15$length = _array15.length;
    length = _array15$length === void 0 ? array.length - index : _array15$length;
  }

  if (!isArray(array)) {
    throw new TypeError('subLength args(array) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('subLength args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError('subLength args(index) must be from 0 to array.length - 1');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLength args(length) is not integer');
  }

  length = _min([length, array.length - index]);

  if (!_inRange(length, 0, array.length - index)) {
    throw new RangeError('subLength args(length) must be from 0 to array.length - 1');
  }

  return _subLength(array, index, length);
};
/**
 * subFirst
 */


var _subFirst = function _subFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(array, 0, length);
};

var subFirst = function subFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(array, 'array, length')) {
    var _array16 = array;
    array = _array16.array;
    var _array16$length = _array16.length;
    length = _array16$length === void 0 ? 1 : _array16$length;
  }

  if (!isArray(array)) {
    throw new TypeError('subFirst args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('subFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('subFirst args(length) must be from 0 to array.length');
  }

  return _subFirst(array, length);
};
/**
 * subLast
 */


var _subLast = function _subLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(array, array.length - length, length);
};

var subLast = function subLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(array, 'array, length')) {
    var _array17 = array;
    array = _array17.array;
    var _array17$length = _array17.length;
    length = _array17$length === void 0 ? 1 : _array17$length;
  }

  if (!isArray(array)) {
    throw new TypeError('subLast args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLast args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('subLast args(length) must be from 0 to array.length');
  }

  return _subLast(array, length);
};

module.exports = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _median: _median,
  _mode: _mode,
  _unique: _unique,
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
  unique: unique,
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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;
/**
 * isMultiples isEven isOdd
 */


var _isMultiples = function _isMultiples(number, radix) {
  if (number === 0) {
    return false;
  }

  return number % radix === 0;
};

var isMultiples = function isMultiples(number, radix) {
  if (isObjectParameter(number, 'number,radix')) {
    var _number = number;
    number = _number.number;
    radix = _number.radix;
  }

  if (!isInteger(number)) {
    throw new TypeError('isMultiples args(number) is not integer');
  }

  if (!isInteger(radix)) {
    throw new TypeError('isMultiples args(radix) is not integer');
  }

  return _isMultiples(number, radix);
};

var isEven = function isEven(number) {
  if (number === 0) {
    return false;
  }

  return isMultiples(number, 2);
};

var isOdd = function isOdd(number) {
  if (number === 0) {
    return false;
  }

  return !isMultiples(number, 2);
};
/**
 * round
 */


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

var round = function round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isObjectParameter(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  }

  if (!isInteger(digit)) {
    throw new TypeError('round args(value) is not integer');
  }

  return _round(value, digit);
};
/**
 * nearEqual
 */


var _nearEqual = function _nearEqual(value1, value2, diff) {
  if (Math.abs(value1 - value2) <= diff) {
    return true;
  } else {
    return false;
  }
};

var nearEqual = function nearEqual(value1, value2, diff) {
  if (isObjectParameter(value1, 'value1,value2,diff')) {
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
    diff = _value2.diff;
  }

  if (!isNumber(value1)) {
    throw new TypeError('nearEqual args(value1) is not number');
  }

  if (!isNumber(value2)) {
    throw new TypeError('nearEqual args(value2) is not number');
  }

  if (!isNumber(diff)) {
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


var _inRange = function _inRange(value, from, to) {
  if (from <= value && value <= to) {
    return true;
  } else {
    return false;
  }
};

var inRange = function inRange(value, from, to) {
  if (isObjectParameter(value, 'value,from,to')) {
    var _value3 = value;
    value = _value3.value;
    from = _value3.from;
    to = _value3.to;
  }

  if (!isNumber(value)) {
    throw new TypeError('inRange args(value) is not number');
  }

  if (!isNumber(from)) {
    throw new TypeError('inRange args(from) is not number');
  }

  if (!isNumber(to)) {
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


var _makeInRange = function _makeInRange(value, from, to) {
  if (value < from) {
    return from;
  }

  if (to < value) {
    return to;
  }

  return value;
};

var makeInRange = function makeInRange(value, from, to) {
  if (isObjectParameter(value, 'value, from, to')) {
    var _value4 = value;
    value = _value4.value;
    from = _value4.from;
    to = _value4.to;
  }

  if (!isNumber(value)) {
    throw new TypeError('makeInRange args(value) is not number');
  }

  if (!isNumber(from)) {
    throw new TypeError('makeInRange args(from) is not number');
  }

  if (!isNumber(to)) {
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


var _randomInt = function _randomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var randomInt = function randomInt(min, max) {
  if (isObjectParameter(min, 'min,max')) {
    var _min = min;
    min = _min.min;
    max = _min.max;
  }

  if (!isInteger(min)) {
    throw new TypeError('randomInt args(min) is not integer');
  }

  if (!isInteger(max)) {
    throw new TypeError('randomInt args(max) is not integer');
  }

  return _randomInt(min, max);
};

module.exports = (_module$exports = {
  isMultiples: isMultiples,
  _round: _round,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  _makeInRange: _makeInRange,
  _randomInt: _randomInt
}, _defineProperty(_module$exports, "isMultiples", isMultiples), _defineProperty(_module$exports, "isEven", isEven), _defineProperty(_module$exports, "isOdd", isOdd), _defineProperty(_module$exports, "round", round), _defineProperty(_module$exports, "nearEqual", nearEqual), _defineProperty(_module$exports, "inRange", inRange), _defineProperty(_module$exports, "makeInRange", makeInRange), _defineProperty(_module$exports, "randomInt", randomInt), _module$exports);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isUndefinedAll = _require.isUndefinedAll;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(26),
    _IntegerArray = _require3._IntegerArray;

var _require4 = __webpack_require__(19),
    objectToKeyValueArray = _require4.objectToKeyValueArray;
/**
 * assert
 */


var assert = function assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!isBoolean(value)) {
    throw new TypeError('assert args(value) is not boolean|message:' + "|message:".concat(message));
  }

  if (!isString(message)) {
    throw new TypeError('assert args(message) is not string|message:' + "|message:".concat(message));
  }

  if (!value) {
    throw new Error("assert error|message:".concat(message));
  }
};
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

  if (!isFunction(guardFunc)) {
    throw new TypeError('guard args(guardFunc) is not function');
  }

  var result = guardFunc();

  if (!isArray(result)) {
    throw new TypeError('guard args(guardFunc result) is not array');
  }

  for (var i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if (i === result.length - 1 && isUndefined(result[i])) {
      continue;
    }

    var resultValue = undefined;
    var message = '';

    if (isArray(result[i])) {
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

    resultValue = functionValue(resultValue);

    if (!isBoolean(resultValue)) {
      throw new TypeError('guard args(guardFunc resultArray element value) is not boolean');
    }

    if (resultValue === false) {
      guard_message = message;

      if (!isUndefined(runFunc)) {
        if (!isFunction(runFunc)) {
          throw new TypeError('guard args(runFunc) is not function');
        }

        runFunc();
      }

      return true;
    }
  }

  return false;
};

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
/**
 * function Value
 */


var functionValue = function functionValue(value) {
  if (isFunction(value)) {
    return value();
  } else {
    return value;
  }
};
/**
 * sc (second call)
 */


var sc = function sc(argsFirst, func) {
  for (var _len = arguments.length, argsRest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    argsRest[_key - 2] = arguments[_key];
  }

  return func.apply(void 0, [argsFirst].concat(argsRest));
};
/**
 * if_
 */


var if_ = function if_(condition) {
  if (!isBoolean(condition)) {
    throw new TypeError('if_ args(condition) is not boolean');
  }

  var returnFunc = function returnFunc(then_, else_) {
    if (isObjectParameter(then_, '', 'then, else', 1)) {
      var _then_ = then_;
      then_ = _then_.then;
      else_ = _then_["else"];
    }

    return condition ? functionValue(then_) : functionValue(else_);
  };

  if (condition) {
    returnFunc.then = function (value) {
      return {
        "else": function _else() {
          return functionValue(value);
        }
      };
    };

    returnFunc["else"] = function () {
      return {
        then: function then(value) {
          return functionValue(value);
        }
      };
    };
  } else {
    returnFunc.then = function () {
      return {
        "else": function _else(value) {
          return functionValue(value);
        }
      };
    };

    returnFunc["else"] = function (value) {
      return {
        then: function then() {
          return functionValue(value);
        }
      };
    };
  }

  return returnFunc;
};
/**
 * switch_
 */


var switch_ = function switch_(expression) {
  return function (args) {
    if (!isArray(args)) {
      throw new TypeError('switch_() args is not array');
    }

    for (var i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (i === args.length - 1 && isUndefined(args[i])) {
        continue;
      }

      if (!isArray(args[i])) {
        throw new TypeError('switch_() args is not array in array');
      }
    }

    for (var _i = 0; _i < args.length; _i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (_i === args.length - 1 && isUndefined(args[_i])) {
        continue;
      }

      if (args[_i].length === 0) {
        return undefined;
      }

      if (args[_i].length === 1) {
        return functionValue(args[_i][0]);
      }

      if (args[_i][0] === expression) {
        return functionValue(args[_i][1]);
      }
    }

    return undefined;
  };
};
/**
 * loop
 */


var _loopBase = function _loopBase(loopArray) {
  return function (func) {
    if (!isFunction(func)) {
      throw new TypeError('loop()(func) func is not function');
    }

    for (var i = 0, l = loopArray.length; i < l; i += 1) {
      var element = loopArray[i];
      var index = i;
      var array = loopArray;
      var loopFirst = i === 0;
      var loopLast = i === loopArray.length - 1;
      var result = func(element, index, array, loopFirst, loopLast);

      if (!isUndefined(result) && result["break"] === true) {
        return result;
      }
    }

    return {};
  };
};

var loop = function loop(start, end, increment) {
  if (isObjectParameter(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if (isObjectParameter(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if (isObjectParameter(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if (isObjectParameter(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  } else if (isObject(start)) {
    return _loopBase(objectToKeyValueArray(start));
  } else if (isArray(start)) {
    return _loopBase(start);
  }

  if (!isInteger(start)) {
    throw new TypeError('loop args(start) is not number');
  }

  if (!isUndefined(end) && !isInteger(end)) {
    throw new TypeError('loop args(end) is not number');
  }

  if (!isUndefined(increment) && !isInteger(increment)) {
    throw new TypeError('loop args(increment) is not number');
  }

  return _loopBase(_IntegerArray(start, end, increment));
};
/**
 * canUseMap
 */


var _canUseMapFlag;

var canUseMap = function canUseMap() {
  if (isUndefined(_canUseMapFlag)) {
    try {
      new Map();
      _canUseMapFlag = true;
    } catch (e) {
      _canUseMapFlag = false;
    }
  }

  return _canUseMapFlag;
};

canUseMap.reset = function () {
  _canUseMapFlag = undefined;
};
/**
 * canUseSet
 */


var _canUseSetFlag;

var canUseSet = function canUseSet() {
  if (isUndefined(_canUseSetFlag)) {
    try {
      new Set();
      _canUseSetFlag = true;
    } catch (e) {
      _canUseSetFlag = false;
    }
  }

  return _canUseSetFlag;
};

canUseSet.reset = function () {
  _canUseSetFlag = undefined;
};

module.exports = {
  assert: assert,
  guard: guard,
  functionValue: functionValue,
  sc: sc,
  if_: if_,
  switch_: switch_,
  loop: loop,
  canUseMap: canUseMap,
  canUseSet: canUseSet
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isUndefinedArray = _require.isUndefinedArray,
    isNullArray = _require.isNullArray,
    isNaNStrictArray = _require.isNaNStrictArray,
    isBooleanArray = _require.isBooleanArray,
    isNumberArray = _require.isNumberArray,
    isIntegerArray = _require.isIntegerArray,
    isStringArray = _require.isStringArray,
    isFunctionArray = _require.isFunctionArray,
    isObjectArray = _require.isObjectArray,
    isArrayArray = _require.isArrayArray,
    isDateArray = _require.isDateArray,
    isRegExpArray = _require.isRegExpArray,
    isExceptionArray = _require.isExceptionArray;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(27),
    _NumberArray = _require3._NumberArray;
/**
 * IntegerArray
 */


var _IntegerArray = function _IntegerArray(start, end, increment) {
  return _NumberArray(start, end, increment);
};

var IntegerArray = function IntegerArray(start, end, increment) {
  if (isObjectParameter(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if (isObjectParameter(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if (isObjectParameter(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if (isObjectParameter(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!isInteger(start)) {
    throw new TypeError('IntegerArray args(start) is not number');
  }

  if (!isUndefined(end) && !isInteger(end)) {
    throw new TypeError('IntegerArray args(end) is not number');
  }

  if (!isUndefined(increment) && !isInteger(increment)) {
    throw new TypeError('IntegerArray args(increment) is not number');
  }

  return _IntegerArray(start, end, increment);
};

module.exports = {
  _IntegerArray: _IntegerArray,
  IntegerArray: IntegerArray
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isUndefinedArray = _require.isUndefinedArray,
    isNullArray = _require.isNullArray,
    isNaNStrictArray = _require.isNaNStrictArray,
    isBooleanArray = _require.isBooleanArray,
    isNumberArray = _require.isNumberArray,
    isIntegerArray = _require.isIntegerArray,
    isStringArray = _require.isStringArray,
    isFunctionArray = _require.isFunctionArray,
    isObjectArray = _require.isObjectArray,
    isArrayArray = _require.isArrayArray,
    isDateArray = _require.isDateArray,
    isRegExpArray = _require.isRegExpArray,
    isExceptionArray = _require.isExceptionArray;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;
/**
 * NumberArray
 */


var _NumberArray = function _NumberArray(start, end, increment) {
  if (isUndefined(increment)) {
    if (isUndefined(end)) {
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
    for (var _i = start, _l = end; _i >= _l; _i += increment) {
      result.push(_i);
    }
  }

  return result;
};

var NumberArray = function NumberArray(start, end, increment) {
  if (isObjectParameter(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if (isObjectParameter(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if (isObjectParameter(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if (isObjectParameter(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!isNumber(start)) {
    throw new TypeError('NumberArray args(start) is not number');
  }

  if (!isUndefined(end) && !isNumber(end)) {
    throw new TypeError('NumberArray args(end) is not number');
  }

  if (!isUndefined(increment) && !isNumber(increment)) {
    throw new TypeError('NumberArray args(increment) is not number');
  }

  return _NumberArray(start, end, increment);
};

module.exports = {
  _NumberArray: _NumberArray,
  NumberArray: NumberArray
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(23),
    _some = _require3._some,
    _all = _require3._all,
    _findFirstIndex = _require3._findFirstIndex;

var _require4 = __webpack_require__(22),
    _match = _require4._match;

var _require5 = __webpack_require__(21),
    _includes = _require5._includes,
    includes = _require5.includes;
/**
 * includesSome
 */


var _includesSome = function _includesSome(value, compareArray) {
  return _some(compareArray, function (compare) {
    return includes(value, compare);
  });
};

var includesSome = function includesSome(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('includesSome args(compareArray) is not array');
  }

  return _includesSome(value, compareArray);
};
/**
 * includesAll
 */


var _includesAll = function _includesAll(value, compareArray) {
  return _all(compareArray, function (compare) {
    return includes(value, compare);
  });
};

var includesAll = function includesAll(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('includesAll args(compareArray) is not array');
  }

  return _includesAll(value, compareArray);
};

module.exports = {
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  includesSome: includesSome,
  includesAll: includesAll
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isError = _require.isError,
    isException = _require.isException;

var _require2 = __webpack_require__(30),
    _map = _require2._map;

var _require3 = __webpack_require__(36),
    _repeat = _require3._repeat;

var _require4 = __webpack_require__(38),
    equal = _require4.equal,
    equalDeep = _require4.equalDeep;
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

var describe = function describe(text, func) {
  if (testFrame.outputDescribe) {
    var indent = _repeat(' ', testFrame.describeArray.length * 2);

    console.log("".concat(indent, "describe: ").concat(text));
  }

  testFrame.describeArray.push(text);
  func();
  testFrame.describeArray.pop();
};

var it = function it(text, func) {
  var indent = _repeat(' ', testFrame.outputDescribe ? testFrame.describeArray.length * 2 : 2);

  var consoleLogTestName = function consoleLogTestName() {
    console.log(indent + "test: ".concat(testFrame.testName));
  };

  testFrame.testName = text;
  testFrame.counter = 0;

  if (testFrame.outputIt) {
    consoleLogTestName();
  }

  try {
    func();
  } catch (e) {
    if (!testFrame.outputIt) {
      consoleLogTestName();
    }

    console.log(e);
  }

  testFrame.counter = 0;
  testFrame.testName = '';
};

var test = it;

var checkCompare = function checkCompare(compareFunc, a, b) {
  var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  if (!isString(message)) {
    throw new TypeError('checkEqual args message is not string');
  }

  testFrame.counter += 1;

  if (compareFunc(a, b) === true) {
    return true;
  }

  var indent = _repeat(' ', testFrame.describeArray.length * 2);

  var output = _map(testFrame.describeArray, function (desc, i) {
    return _repeat('  ', i) + "describe: ".concat(desc);
  }).join('\n') + '\n';
  output += "".concat(indent, "Test: ").concat(testFrame.testName, "\n") + "".concat(indent, "  Counter: ").concat(testFrame.counter, "\n") + (message === '' ? '' : "".concat(indent, "  Message: ").concat(message, "\n")) + "".concat(indent, "  A !== B\n") + "".concat(indent, "  A = ").concat(isString(a) ? "'" + a + "'" : String(a), "\n") + "".concat(indent, "  B = ").concat(isString(b) ? "'" + b + "'" : String(b));
  console.log(output);
  return false;
};

var checkEqual = function checkEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return checkCompare(equalDeep, a, b, message);
};

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
      return !equalDeep(v1, v2);
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

var testCounter = function testCounter() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (isInteger(value)) {
    testFrame.counter = value;
  }

  return testFrame.counter;
};
/**
 * isThrown isThrownValue isThrownException isNotThrown
 */


var isThrown = function isThrown(targetFunc, compareFunc) {
  if (!isFunction(targetFunc)) {
    throw new TypeError('isThrown args targetFunc is not function');
  }

  if (!(isFunction(compareFunc) || isUndefined(compareFunc))) {
    throw new TypeError('isThrown args compareFunc is not function');
  }

  try {
    targetFunc();
  } catch (e) {
    if (isUndefined(compareFunc)) {
      return true;
    }

    return compareFunc(e);
  }

  return false;
};

var isThrownValue = function isThrownValue(targetFunc, thrownValue) {
  return isThrown(targetFunc, function (thrown) {
    return thrown === thrownValue;
  });
};

var isThrownException = function isThrownException(targetFunc) {
  var exceptionName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!isString(exceptionName)) {
    throw new TypeError('isThrownException args exceptionName is not string');
  }

  return isThrown(targetFunc, function (thrown) {
    if (isException(thrown)) {
      if (exceptionName === '') {
        return true;
      }

      return thrown.name === exceptionName;
    }

    return false;
  });
};

var isNotThrown = function isNotThrown(targetFunc) {
  return !isThrown(targetFunc, function () {
    return true;
  });
};

module.exports = {
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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __webpack_require__(23)), __webpack_require__(27)), __webpack_require__(26)), __webpack_require__(31)), {}, {
  operation: _objectSpread(_objectSpread({}, __webpack_require__(32)), __webpack_require__(33))
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isUndefinedArray = _require.isUndefinedArray,
    isNullArray = _require.isNullArray,
    isNaNStrictArray = _require.isNaNStrictArray,
    isBooleanArray = _require.isBooleanArray,
    isNumberArray = _require.isNumberArray,
    isIntegerArray = _require.isIntegerArray,
    isStringArray = _require.isStringArray,
    isFunctionArray = _require.isFunctionArray,
    isObjectArray = _require.isObjectArray,
    isArrayArray = _require.isArrayArray,
    isDateArray = _require.isDateArray,
    isRegExpArray = _require.isRegExpArray,
    isExceptionArray = _require.isExceptionArray;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(27),
    _NumberArray = _require3._NumberArray;
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

var arrayToIndexValueArray = function arrayToIndexValueArray(array) {
  if (isObjectParameter(array, 'array')) {
    var _array = array;
    array = _array.array;
  }

  if (!isArray(array)) {
    throw new TypeError('arrayToIndexValueArray args(array) is not array');
  }

  return _arrayToIndexValueArray(array);
};

module.exports = {
  _arrayToIndexValueArray: _arrayToIndexValueArray,
  arrayToIndexValueArray: arrayToIndexValueArray
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(24),
    _inRange = _require2._inRange,
    _makeInRange = _require2._makeInRange;

var _require3 = __webpack_require__(9),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = __webpack_require__(23),
    _min = _require4._min,
    _some = _require4._some,
    _isFirst = _require4._isFirst,
    _isLast = _require4._isLast,
    _isBothEnds = _require4._isBothEnds;
/**
 * array.operation.insert
 */


var _insert = function _insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

var insert = function insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(array, 'array, valueArray, index')) {
    var _array = array;
    array = _array.array;
    valueArray = _array.valueArray;
    index = _array.index;
  }

  if (!isArray(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('insert args(valueArray) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, valueArray, index);
};
/**
 * array.operation.add
 */


var _add = function _add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

var add = function add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if (isObjectParameter(array, 'array, valueArray, index')) {
    var _array2 = array;
    array = _array2.array;
    valueArray = _array2.valueArray;
    index = _array2.index;
  }

  if (!isArray(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('add args(valueArray) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from -1 to array.length - 1');
  }

  return _add(array, valueArray, index);
};
/**
 * array.operation.deleteIndex
 */


var _deleteIndex = function _deleteIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  array.splice(indexStart, indexEnd - indexStart + 1);
  return array;
};

var deleteIndex = function deleteIndex(array, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if (isObjectParameter(array, 'array, indexStart', 'indexEnd')) {
    var _array3 = array;
    array = _array3.array;
    indexStart = _array3.indexStart;
    var _array3$indexEnd = _array3.indexEnd;
    indexEnd = _array3$indexEnd === void 0 ? indexStart : _array3$indexEnd;
  } else if (isObjectParameter(array, 'array, index')) {
    var _array4 = array;
    array = _array4.array;
    indexStart = _array4.index;
    var _array4$indexEnd = _array4.indexEnd;
    indexEnd = _array4$indexEnd === void 0 ? indexStart : _array4$indexEnd;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteIndex args(array) is not array');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('deleteIndex args(indexStart) is not integer');
  }

  if (!isInteger(indexEnd)) {
    throw new TypeError('deleteIndex args(indexEnd) is not integer');
  }

  if (!_inRange(indexStart, 0, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexStart) must be from 0 to array.length - 1');
  }

  if (!_inRange(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexEnd) must be from indexStart to array.length - 1');
  }

  return _deleteIndex(array, indexStart, indexEnd);
};
/**
 * array.operation.deleteLength
 */


var _deleteLength = function _deleteLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;
  return _deleteIndex(array, index, index + length - 1); // same:
  //  array.splice(index, length);
  //  return array;
};

var deleteLength = function deleteLength(array, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - index;

  if (isObjectParameter(array, 'array, index', 'length')) {
    var _array5 = array;
    array = _array5.array;
    index = _array5.index;
    var _array5$length = _array5.length;
    length = _array5$length === void 0 ? array.length - index : _array5$length;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteLength args(array) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('deleteLength args(index) is not integer');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError('deleteLength args(index) must be from 0 to array.length - 1');
  }

  length = _min([length, array.length - index]);

  if (!_inRange(length, 0, array.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 0 to array.length - index');
  }

  return _deleteLength(array, index, length);
};
/**
 * array.operation.deleteFirst
 */


var _deleteFirst = function _deleteFirst(array, length) {
  return _deleteLength(array, 0, length);
};

var deleteFirst = function deleteFirst(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array6 = array;
    array = _array6.array;
    length = _array6.length;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteFirst args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('deleteFirst args(length) must be from 0 to array.length');
  }

  return _deleteFirst(array, length);
};
/**
 * array.operation.deleteLast
 */


var _deleteLast = function _deleteLast(array, length) {
  return _deleteLength(array, array.length - length, length);
};

var deleteLast = function deleteLast(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array7 = array;
    array = _array7.array;
    length = _array7.length;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteLast args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLast args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('deleteLast args(length) must be from 0 to array.length');
  }

  return _deleteLast(array, length);
};
/**
 * array.operation.includeFirst
 */


var _includeFirst = function _includeFirst(array, valueArray) {
  if (!_isFirst(array, valueArray)) {
    _insert(array, valueArray);
  }

  return array;
};

var includeFirst = function includeFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array8 = array;
    array = _array8.array;
    valueArray = _array8.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('includeFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('includeFirst args(valueArray) is not array');
  }

  return _includeFirst(array, valueArray);
};
/**
 * array.operation.includeLast
 */


var _includeLast = function _includeLast(array, valueArray) {
  if (!_isLast(array, valueArray)) {
    _add(array, valueArray);
  }

  return array;
};

var includeLast = function includeLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array9 = array;
    array = _array9.array;
    valueArray = _array9.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('includeLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('includeLast args(valueArray) is not array');
  }

  return _includeLast(array, valueArray);
};
/**
 * array.operation.includeBothEnds
 */


var _includeBothEnds = function _includeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (!_isBothEnds(array, valueFirstArray, valueLastArray)) {
    _insert(array, valueFirstArray);

    _add(array, valueLastArray);
  }

  return array;
};

var includeBothEnds = function includeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array10 = array;
    array = _array10.array;
    valueFirstArray = _array10.valueFirstArray;
    var _array10$valueLastArr = _array10.valueLastArray;
    valueLastArray = _array10$valueLastArr === void 0 ? valueFirstArray : _array10$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueFirstArray = _array11.valueArray;
    var _array11$valueLastArr = _array11.valueLastArray;
    valueLastArray = _array11$valueLastArr === void 0 ? valueFirstArray : _array11$valueLastArr;
  }

  if (!isArray(array)) {
    throw new TypeError('includeBothEnds args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('includeBothEnds args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('includeBothEnds args(valueLastArray) is not array');
  }

  return _includeBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.excludeFirst
 */


var _excludeFirst = function _excludeFirst(array, valueArray) {
  if (_isFirst(array, valueArray)) {
    _deleteFirst(array, valueArray.length);
  }

  return array;
};

var excludeFirst = function excludeFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array12 = array;
    array = _array12.array;
    valueArray = _array12.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('excludeFirst args(valueArray) is not array');
  }

  return _excludeFirst(array, valueArray);
};
/**
 * array.operation.excludeLast
 */


var _excludeLast = function _excludeLast(array, valueArray) {
  if (_isLast(array, valueArray)) {
    _deleteLast(array, valueArray.length);
  }

  return array;
};

var excludeLast = function excludeLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array13 = array;
    array = _array13.array;
    valueArray = _array13.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('excludeLast args(valueArray) is not array');
  }

  return _excludeLast(array, valueArray);
};
/**
 * array.operation.excludeBothEnds
 */


var _excludeBothEnds = function _excludeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (_isBothEnds(array, valueFirstArray, valueLastArray)) {
    deleteFirst(array, valueFirstArray.length);
    deleteLast(array, _min([valueLastArray.length, array.length]));
  }

  return array;
};

var excludeBothEnds = function excludeBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array14 = array;
    array = _array14.array;
    valueFirstArray = _array14.valueFirstArray;
    var _array14$valueLastArr = _array14.valueLastArray;
    valueLastArray = _array14$valueLastArr === void 0 ? valueFirstArray : _array14$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array15 = array;
    array = _array15.array;
    valueFirstArray = _array15.valueArray;
    var _array15$valueLastArr = _array15.valueLastArray;
    valueLastArray = _array15$valueLastArr === void 0 ? valueFirstArray : _array15$valueLastArr;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeBothEnds args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('excludeBothEnds args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('excludeBothEnds args(valueLastArray) is not array');
  }

  return _excludeBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.trimFirst
 */


var _trimFirst = function _trimFirst(array, valueArray) {
  while (_some(valueArray, function (value) {
    return _isFirst(array, [value]);
  })) {
    _deleteIndex(array, 0);
  }

  return array;
};

var trimFirst = function trimFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array16 = array;
    array = _array16.array;
    valueArray = _array16.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('trimFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not array');
  }

  return _trimFirst(array, valueArray);
};
/**
 * array.operation.trimLast
 */


var _trimLast = function _trimLast(array, valueArray) {
  while (_some(valueArray, function (value) {
    return _isLast(array, [value]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var trimLast = function trimLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array17 = array;
    array = _array17.array;
    valueArray = _array17.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('trimLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('trimLast args(valueArray) is not array');
  }

  return _trimLast(array, valueArray);
};
/**
 * array.operation.trimBothEnds
 */


var _trimBothEnds = function _trimBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  while (_some(valueFirstArray, function (valueFirst) {
    return _isFirst(array, [valueFirst]);
  })) {
    _deleteIndex(array, 0);
  }

  while (_some(valueLastArray, function (valueLast) {
    return _isLast(array, [valueLast]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var trimBothEnds = function trimBothEnds(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array18 = array;
    array = _array18.array;
    valueFirstArray = _array18.valueFirstArray;
    var _array18$valueLastArr = _array18.valueLastArray;
    valueLastArray = _array18$valueLastArr === void 0 ? valueFirstArray : _array18$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array19 = array;
    array = _array19.array;
    valueFirstArray = _array19.valueArray;
    var _array19$valueLastArr = _array19.valueLastArray;
    valueLastArray = _array19$valueLastArr === void 0 ? valueFirstArray : _array19$valueLastArr;
  }

  if (!isArray(array)) {
    throw new TypeError('trimBothEnds args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('trimBothEnds args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('trimBothEnds args(valueLastArray) is not array');
  }

  return _trimBothEnds(array, valueFirstArray, valueLastArray);
};
/**
 * array.operation.popFirst
 */


var _popFirst = function _popFirst(array) {
  return array.shift();
};

var popFirst = function popFirst(array) {
  if (!isArray(array)) {
    throw new TypeError('popFirst args(array) is not array');
  }

  return _popFirst(array);
};
/**
 * array.operation.popLast
 */


var _popLast = function _popLast(array, value) {
  return array.pop();
};

var popLast = function popLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array20 = array;
    array = _array20.array;
    value = _array20.value;
  }

  if (!isArray(array)) {
    throw new TypeError('popLast args(array) is not array');
  }

  return _popLast(array, value);
};
/**
 * array.operation.pushFirst
 */


var _pushFirst = function _pushFirst(array, value) {
  array.unshift(value);
  return array.length; // WSH array.unshift is return undefined
};

var pushFirst = function pushFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array21 = array;
    array = _array21.array;
    value = _array21.value;
  }

  if (!isArray(array)) {
    throw new TypeError('pushFirst args(array) is not array');
  }

  return _pushFirst(array, value);
};
/**
 * array.operation.pushLast
 */


var _pushLast = function _pushLast(array, value) {
  return array.push(value);
};

var pushLast = function pushLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array22 = array;
    array = _array22.array;
    value = _array22.value;
  }

  if (!isArray(array)) {
    throw new TypeError('pushLast args(array) is not array');
  }

  return _pushLast(array, value);
};
/**
 * array.operation.remainFirst
 */


var _remainFirst = function _remainFirst(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteIndex(array, length, array.length - 1);
};

var remainFirst = function remainFirst(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array23 = array;
    array = _array23.array;
    length = _array23.length;
  }

  if (!isArray(array)) {
    throw new TypeError('remainFirst args(array) is not array');
  }

  if (!isInteger(length)) {
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


var _remainLast = function _remainLast(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteLength(array, 0, array.length - length);
};

var remainLast = function remainLast(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array24 = array;
    array = _array24.array;
    length = _array24.length;
  }

  if (!isArray(array)) {
    throw new TypeError('remainLast args(array) is not array');
  }

  if (!isInteger(length)) {
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


var _filter = function _filter(array, func) {
  for (var i = array.length - 1; 0 <= i; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (!resultFunc) {
      _deleteIndex(array, i);
    }
  }

  return array;
};

var filter = function filter(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array25 = array;
    array = _array25.array;
    func = _array25.func;
  }

  if (!isArray(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('filter args(compareFunc) is not function');
  }

  return _filter(array, func);
};

module.exports = {
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

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(22),
    allMatchSome = _require2.allMatchSome;

var _require3 = __webpack_require__(34),
    allMatch = _require3.allMatch; // const {
//   _inProperty,
// } = require('../object/inProperty.js');


var _require4 = __webpack_require__(35),
    _or = _require4._or;
/**
 * array.sort
 */


var _sort = function _sort(array, pattern, order) {
  switch (pattern) {
    case 'number':
      switch (order) {
        case 'ascending':
          return array.sort(function (a, b) {
            return a - b;
          });

        case 'descending':
          return array.sort(function (a, b) {
            return b - a;
          });
      }

      break;

    case 'length':
      switch (order) {
        case 'ascending':
          return array.sort(function (a, b) {
            return a.length - b.length;
          });

        case 'descending':
          return array.sort(function (a, b) {
            return b.length - a.length;
          });
      }

      break;

    case 'dictionary':
      switch (order) {
        case 'ascending':
          return array.sort(function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          });
        // = array.sort();

        case 'descending':
          return array.sort(function (a, b) {
            return a > b ? -1 : a < b ? 1 : 0;
          });
      }

      break;
  }
};

var sort = function sort(array, pattern, order) {
  if (!isArray(array)) {
    throw new TypeError('sortNumberAscending args(array) is not array');
  }

  if (!_or(order, ['ascending', 'descending'])) {
    throw new TypeError('sort args(order) is not [ascending|descending]');
  }

  switch (pattern) {
    case 'number':
      if (!allMatch(array, isNumber)) {
        throw new TypeError('sort number args(array) element is not number');
      }

      break;

    case 'length':
      if (!allMatchSome(array, [isString, function (element) {
        return 'length' in element;
      }])) {
        throw new TypeError('sort length args(array) element does not have length property');
      }

      break;

    case 'dictionary':
      if (!allMatch(array, isString)) {
        throw new TypeError('sort dictionary args(array) element is not string');
      }

      break;

    default:
      throw new TypeError('sort args(pattern) is not [number|length|dictionary]');
  }

  return _sort(array, pattern, order);
};

var _sortNumberAscending = function _sortNumberAscending(array) {
  return _sort(array, 'number', 'ascending');
};

var sortNumberAscending = function sortNumberAscending(array) {
  return sort(array, 'number', 'ascending');
};

var _sortNumberDescending = function _sortNumberDescending(array) {
  return _sort(array, 'number', 'descending');
};

var sortNumberDescending = function sortNumberDescending(array) {
  return sort(array, 'number', 'descending');
};

var _sortLengthAscending = function _sortLengthAscending(array) {
  return _sort(array, 'length', 'ascending');
};

var sortLengthAscending = function sortLengthAscending(array) {
  return sort(array, 'length', 'ascending');
};

var _sortLengthDescending = function _sortLengthDescending(array) {
  return _sort(array, 'length', 'descending');
};

var sortLengthDescending = function sortLengthDescending(array) {
  return sort(array, 'length', 'descending');
};

var _sortDictionaryAscending = function _sortDictionaryAscending(array) {
  return _sort(array, 'dictionary', 'ascending');
};

var sortDictionaryAscending = function sortDictionaryAscending(array) {
  return sort(array, 'dictionary', 'ascending');
};

var _sortDictionaryDescending = function _sortDictionaryDescending(array) {
  return _sort(array, 'dictionary', 'descending');
};

var sortDictionaryDescending = function sortDictionaryDescending(array) {
  return sort(array, 'dictionary', 'descending');
};

module.exports = {
  _sortNumberAscending: _sortNumberAscending,
  _sortNumberDescending: _sortNumberDescending,
  _sortLengthAscending: _sortLengthAscending,
  _sortLengthDescending: _sortLengthDescending,
  _sortDictionaryAscending: _sortDictionaryAscending,
  _sortDictionaryDescending: _sortDictionaryDescending,
  sortNumberAscending: sortNumberAscending,
  sortNumberDescending: sortNumberDescending,
  sortLengthAscending: sortLengthAscending,
  sortLengthDescending: sortLengthDescending,
  sortDictionaryAscending: sortDictionaryAscending,
  sortDictionaryDescending: sortDictionaryDescending
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(23),
    _all = _require3._all;

var _require4 = __webpack_require__(22),
    _match = _require4._match;
/**
 * allMatch
 */


var _allMatch = function _allMatch(valueArray, compare) {
  return _all(valueArray, function (value) {
    return _match(value, compare);
  });
};

var allMatch = function allMatch(valueArray, compare) {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('allMatch args(valueArray) is not array');
  }

  return _allMatch(valueArray, compare);
};

module.exports = {
  _allMatch: _allMatch,
  allMatch: allMatch
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;
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

var or = function or(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('or args(compareArray) is not array');
  }

  return _or(value, compareArray);
};

module.exports = {
  _or: _or,
  or: or
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __webpack_require__(37)), __webpack_require__(10)), __webpack_require__(42)), __webpack_require__(43));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isStringArray = _require.isStringArray;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(24),
    _inRange = _require3._inRange;

var _require4 = __webpack_require__(30),
    _min = _require4._min,
    _max = _require4._max,
    _findIndex = _require4._findIndex,
    _findFirst = _require4._findFirst;

var _require5 = __webpack_require__(38),
    allMatchSome = _require5.allMatchSome;
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

var repeat = function repeat(str, count) {
  if (isObjectParameter(str, 'str, count')) {
    var _str = str;
    str = _str.str;
    count = _str.count;
  }

  if (!isString(str)) {
    throw new TypeError('repeat args(str) is not string');
  }

  if (!isInteger(count)) {
    throw new TypeError('repeat args(count) is not integer');
  }

  return _repeat(str, count);
};
/**
 * isLowerCase
 */


var _isLowerCase = function _isLowerCase(str) {
  return str.toLowerCase() === str;
};

var isLowerCase = function isLowerCase(str) {
  if (!isString(str)) {
    throw new TypeError('isLowerCase args(str) is not string');
  }

  return _isLowerCase(str);
};
/**
 * isUpperCase
 */


var _isUpperCase = function _isUpperCase(str) {
  return str.toUpperCase() === str;
};

var isUpperCase = function isUpperCase(str) {
  if (!isString(str)) {
    throw new TypeError('isUpperCase args(str) is not string');
  }

  return _isUpperCase(str);
};
/**
 * indexOfFirst
 */


var _indexOfFirst = function _indexOfFirst(str, search, indexStart) {
  if (search === '') {
    return -1;
  }

  return str.indexOf(search, indexStart);
};

var indexOfFirst = function indexOfFirst(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    var _str2 = str;
    str = _str2.str;
    search = _str2.search;
    var _str2$indexStart = _str2.indexStart;
    indexStart = _str2$indexStart === void 0 ? 0 : _str2$indexStart;
  }

  if (!isString(str)) {
    throw new TypeError('indexOfFirst args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('indexOfFirst args(search) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('indexOfFirst args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError('indexOfFirst args(indexStart) must be from 0 to str.length - 1');
  }

  return _indexOfFirst(str, search, indexStart);
};
/**
 * indexOfLast
 */


var _indexOfLast = function _indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);

  if (search === '') {
    return -1;
  }

  return str.lastIndexOf(search, indexStart);
};

var indexOfLast = function indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);

  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    var _str3 = str;
    str = _str3.str;
    search = _str3.search;
    var _str3$indexStart = _str3.indexStart;
    indexStart = _str3$indexStart === void 0 ? _max([0, str.length - 1]) : _str3$indexStart;
  }

  if (!isString(str)) {
    throw new TypeError('indexOfLast args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('indexOfLast args(search) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('indexOfLast args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError('indexOfLast args(indexStart) must be from 0 to str.length - 1');
  }

  return _indexOfLast(str, search, indexStart);
};
/**
 * isFirst
 */


var _isFirst = function _isFirst(str, search) {
  return _indexOfFirst(str, search) === 0;
};

var isFirst = function isFirst(str, search) {
  if (isObjectParameter(str, 'str, search')) {
    var _str4 = str;
    str = _str4.str;
    search = _str4.search;
  }

  if (!isString(str)) {
    throw new TypeError('isFirst args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('isFirst args(search) is not string');
  }

  return _isFirst(str, search);
};
/**
 * isLast
 */


var _isLast = function _isLast(str, search) {
  var result = _indexOfLast(str, search);

  if (result === -1) {
    return false;
  }

  return result === str.length - search.length;
};

var isLast = function isLast(str, search) {
  if (isObjectParameter(str, 'str, search')) {
    var _str5 = str;
    str = _str5.str;
    search = _str5.search;
  }

  if (!isString(str)) {
    throw new TypeError('isLast args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('isLast args(search) is not string');
  }

  return _isLast(str, search);
};
/**
 * isBothEnds
 */


var _isBothEnds = function _isBothEnds(str, searchFirst) {
  var searchLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : searchFirst;

  if (str.length <= 1) {
    return false;
  }

  return _isFirst(str, searchFirst) && _isLast(str, searchLast);
};

var isBothEnds = function isBothEnds(str, searchFirst) {
  var searchLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : searchFirst;

  if (isObjectParameter(str, 'str, searchFirst', 'searchLast')) {
    var _str6 = str;
    str = _str6.str;
    searchFirst = _str6.searchFirst;
    var _str6$searchLast = _str6.searchLast;
    searchLast = _str6$searchLast === void 0 ? searchFirst : _str6$searchLast;
  } else if (isObjectParameter(str, 'str, search')) {
    var _str7 = str;
    str = _str7.str;
    searchFirst = _str7.search;
    searchLast = searchFirst;
  }

  if (!isString(str)) {
    throw new TypeError('isBothEnds args(str) is not string');
  }

  if (!isString(searchFirst)) {
    throw new TypeError('isBothEnds args(searchFirst) is not string');
  }

  if (!isString(searchLast)) {
    throw new TypeError('isBothEnds args(searchLast) is not string');
  }

  return _isBothEnds(str, searchFirst, searchLast);
};
/**
 * string.includeFirst
 */


var _includeFirst = function _includeFirst(str, value) {
  if (!_isFirst(str, value)) {
    return value + str;
  }

  return str;
};

var includeFirst = function includeFirst(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str8 = str;
    str = _str8.str;
    value = _str8.value;
  }

  if (!isString(str)) {
    throw new TypeError('includeFirst args(str) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('includeFirst args(value) is not string');
  }

  return _includeFirst(str, value);
};
/**
 * string.includeLast
 */


var _includeLast = function _includeLast(str, value) {
  if (!_isLast(str, value)) {
    return str + value;
  }

  return str;
};

var includeLast = function includeLast(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str9 = str;
    str = _str9.str;
    value = _str9.value;
  }

  if (!isString(str)) {
    throw new TypeError('includeLast args(str) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('includeLast args(value) is not string');
  }

  return _includeLast(str, value);
};
/**
 * string.includeBothEnds
 */


var _includeBothEnds = function _includeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (!_isBothEnds(str, valueFirst, valueLast)) {
    return valueFirst + str + valueLast;
  }

  return str;
};

var includeBothEnds = function includeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(str, 'str, valueFirst', 'valueLast')) {
    var _str10 = str;
    str = _str10.str;
    valueFirst = _str10.valueFirst;
    var _str10$valueLast = _str10.valueLast;
    valueLast = _str10$valueLast === void 0 ? valueFirst : _str10$valueLast;
  } else if (isObjectParameter(str, 'str, value')) {
    var _str11 = str;
    str = _str11.str;
    valueFirst = _str11.value;
    valueLast = valueFirst;
  }

  if (!isString(str)) {
    throw new TypeError('includeBothEnds args(str) is not string');
  }

  if (!isString(valueFirst)) {
    throw new TypeError('includeBothEnds args(valueFirst) is not string');
  }

  if (!isString(valueLast)) {
    throw new TypeError('includeBothEnds args(valueLast) is not string');
  }

  return _includeBothEnds(str, valueFirst, valueLast);
};
/**
 * string.excludeFirst
 */


var _excludeFirst = function _excludeFirst(str, value) {
  if (_isFirst(str, value)) {
    return _deleteFirst(str, value.length);
  }

  return str;
};

var excludeFirst = function excludeFirst(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str12 = str;
    str = _str12.str;
    value = _str12.value;
  }

  if (!isString(str)) {
    throw new TypeError('excludeFirst args(array) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('excludeFirst args(value) is not string');
  }

  return _excludeFirst(str, value);
};
/**
 * string.excludeLast
 */


var _excludeLast = function _excludeLast(str, value) {
  if (_isLast(str, value)) {
    return _deleteLast(str, value.length);
  }

  return str;
};

var excludeLast = function excludeLast(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str13 = str;
    str = _str13.str;
    value = _str13.value;
  }

  if (!isString(str)) {
    throw new TypeError('excludeLast args(array) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('excludeLast args(value) is not string');
  }

  return _excludeLast(str, value);
};
/**
 * string.excludeBothEnds
 */


var _excludeBothEnds = function _excludeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (_isBothEnds(str, valueFirst, valueLast)) {
    str = deleteFirst(str, valueFirst.length);
    return deleteLast(str, _min([valueLast.length, str.length]));
  }

  return str;
};

var excludeBothEnds = function excludeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(str, 'str, valueFirst', 'valueLast')) {
    var _str14 = str;
    str = _str14.str;
    valueFirst = _str14.valueFirst;
    var _str14$valueLast = _str14.valueLast;
    valueLast = _str14$valueLast === void 0 ? valueFirst : _str14$valueLast;
  } else if (isObjectParameter(str, 'str, value')) {
    var _str15 = str;
    str = _str15.str;
    valueFirst = _str15.value;
    var _str15$valueLast = _str15.valueLast;
    valueLast = _str15$valueLast === void 0 ? valueFirst : _str15$valueLast;
  }

  if (!isString(str)) {
    throw new TypeError('excludeBothEnds args(array) is not string');
  }

  if (!isString(valueFirst)) {
    throw new TypeError('excludeBothEnds args(valueFirst) is not string');
  }

  if (!isString(valueLast)) {
    throw new TypeError('excludeBothEnds args(valueLast) is not string');
  }

  return _excludeBothEnds(str, valueFirst, valueLast);
};
/**
 * string.trimFirst
 */


var _trimFirst = function _trimFirst(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  while (true) {
    var value = _findFirst(valueArray, function (value) {
      return _isFirst(str, value);
    });

    if (isUndefined(value)) {
      break;
    }

    str = _deleteFirst(str, value.length);
  }

  return str;
};

var trimFirst = function trimFirst(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  if (isObjectParameter(str, 'str, valueArray')) {
    var _str16 = str;
    str = _str16.str;
    var _str16$valueArray = _str16.valueArray;
    valueArray = _str16$valueArray === void 0 ? [' ', '\r', '\n'] : _str16$valueArray;
  }

  if (!isString(str)) {
    throw new TypeError('trimFirst args(str) is not string');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not array');
  }

  if (valueArray.length > 0 && !isStringArray(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not string array');
  }

  return _trimFirst(str, valueArray);
};
/**
 * string.trimLast
 */


var _trimLast = function _trimLast(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  while (true) {
    var value = _findFirst(valueArray, function (value) {
      return _isLast(str, value);
    });

    if (isUndefined(value)) {
      break;
    }

    str = _deleteLast(str, value.length);
  }

  return str;
};

var trimLast = function trimLast(str) {
  var valueArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];

  if (isObjectParameter(str, 'str, valueArray')) {
    var _str17 = str;
    str = _str17.str;
    var _str17$valueArray = _str17.valueArray;
    valueArray = _str17$valueArray === void 0 ? [' ', '\r', '\n'] : _str17$valueArray;
  }

  if (!isString(str)) {
    throw new TypeError('trimLast args(string) is not string');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('trimLast args(valueArray) is not array');
  }

  if (valueArray.length > 0 && !isStringArray(valueArray)) {
    throw new TypeError('trimLast args(valueArray) element is not string array');
  }

  return _trimLast(str, valueArray);
};
/**
 * string.trimBothEnds
 */


var _trimBothEnds = function _trimBothEnds(str) {
  var valueFirstArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  while (true) {
    var value = _findFirst(valueFirstArray, function (value) {
      return _isFirst(str, value);
    });

    if (isUndefined(value)) {
      break;
    }

    str = _deleteFirst(str, value.length);
  }

  while (true) {
    var _value = _findFirst(valueLastArray, function (value) {
      return _isLast(str, value);
    });

    if (isUndefined(_value)) {
      break;
    }

    str = _deleteLast(str, _value.length);
  }

  return str;
};

var trimBothEnds = function trimBothEnds(str) {
  var valueFirstArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [' ', '\r', '\n'];
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(str, 'str, valueFirstArray', 'valueLastArray')) {
    var _str18 = str;
    str = _str18.str;
    valueFirstArray = _str18.valueFirstArray;
    var _str18$valueLastArray = _str18.valueLastArray;
    valueLastArray = _str18$valueLastArray === void 0 ? valueFirstArray : _str18$valueLastArray;
  } else if (isObjectParameter(str, 'str, valueArray')) {
    var _str19 = str;
    str = _str19.str;
    valueFirstArray = _str19.valueArray;
    valueLastArray = valueFirstArray;
  }

  if (!isString(str)) {
    throw new TypeError('trimBothEnds args(string) is not string');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('trimBothEnds args(valueFirstArray) is not array');
  }

  if (valueFirstArray.length > 0 && !isStringArray(valueFirstArray)) {
    throw new TypeError('trimBothEnds args(valueFirstArray) is not string array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('trimBothEnds args(valueLastArray) is not array');
  }

  if (valueLastArray.length > 0 && !isStringArray(valueLastArray)) {
    throw new TypeError('trimBothEnds args(valueLastArray) is not string array');
  }

  return _trimBothEnds(str, valueFirstArray, valueLastArray);
};
/**
 * subIndex
 */


var _subIndex = function _subIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  return str.substring(indexStart, indexEnd + 1);
};

var subIndex = function subIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if (isObjectParameter(str, 'str, indexStart', 'indexEnd')) {
    var _str20 = str;
    str = _str20.str;
    indexStart = _str20.indexStart;
    var _str20$indexEnd = _str20.indexEnd;
    indexEnd = _str20$indexEnd === void 0 ? indexStart : _str20$indexEnd;
  }

  if (!isString(str)) {
    throw new TypeError('subIndex args(str) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('subIndex args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, str.length - 1)) {
    throw new RangeError('subIndex args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(indexEnd)) {
    throw new TypeError('subIndex args(indexEnd) is not integer');
  }

  if (!_inRange(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError('subIndex args(indexEnd) must be from indexStart to str.length - 1');
  }

  return _subIndex(str, indexStart, indexEnd);
};
/**
 * subLength
 */


var _subLength = function _subLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;
  return _subIndex(str, index, index + length - 1); // same:
  //  return str.substring(index, index + length);
};

var subLength = function subLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;

  if (isObjectParameter(str, 'str, index', 'length')) {
    var _str21 = str;
    str = _str21.str;
    index = _str21.index;
    var _str21$length = _str21.length;
    length = _str21$length === void 0 ? str.length - index : _str21$length;
  }

  if (!isString(str)) {
    throw new TypeError('subLength args(str) is not string');
  }

  if (!isInteger(index)) {
    throw new TypeError('subLength args(indexStart) is not integer');
  }

  if (!_inRange(index, 0, str.length - 1)) {
    throw new RangeError('subLength args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLength args(length) is not integer');
  }

  length = _min([length, str.length - index]);

  if (!_inRange(length, 0, str.length - index)) {
    throw new RangeError('subLength args(length) must be from 0 to str.length - indexStart');
  }

  return _subLength(str, index, length);
};
/**
 * subFirst
 */


var _subFirst = function _subFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(str, 0, length);
};

var subFirst = function subFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str22 = str;
    str = _str22.str;
    var _str22$length = _str22.length;
    length = _str22$length === void 0 ? 1 : _str22$length;
  }

  if (!isString(str)) {
    throw new TypeError('subFirst args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('subFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('subFirst args(length) must be from 0 to str.length');
  }

  return _subFirst(str, length);
};
/**
 * subLast
 */


var _subLast = function _subLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(str, str.length - length, length);
};

var subLast = function subLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str23 = str;
    str = _str23.str;
    var _str23$length = _str23.length;
    length = _str23$length === void 0 ? 1 : _str23$length;
  }

  if (!isString(str)) {
    throw new TypeError('subLast args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLast args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('subLast args(length) must be from 0 to str.length');
  }

  return _subLast(str, length);
};
/**
 * deleteIndex
 */


var _deleteIndex = function _deleteIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  var startStr = str.slice(0, indexStart);
  var endStr = str.slice(indexEnd + 1, str.length);
  return startStr + endStr;
};

var deleteIndex = function deleteIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if (isObjectParameter(str, 'str, indexStart', 'indexEnd')) {
    var _str24 = str;
    str = _str24.str;
    indexStart = _str24.indexStart;
    var _str24$indexEnd = _str24.indexEnd;
    indexEnd = _str24$indexEnd === void 0 ? indexStart : _str24$indexEnd;
  }

  if (!isString(str)) {
    throw new TypeError('deleteIndex args(str) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('deleteIndex args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, str.length - 1)) {
    throw new RangeError('deleteIndex args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(indexEnd)) {
    throw new TypeError('deleteIndex args(indexEnd) is not integer');
  }

  if (!_inRange(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError('deleteIndex args(indexEnd) must be from indexStart to str.length - 1');
  }

  return _deleteIndex(str, indexStart, indexEnd);
};
/**
 * deleteLength
 */


var _deleteLength = function _deleteLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;
  return _deleteIndex(str, index, index + length - 1);
};

var deleteLength = function deleteLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;

  if (isObjectParameter(str, 'str, index', 'length')) {
    var _str25 = str;
    str = _str25.str;
    index = _str25.index;
    var _str25$length = _str25.length;
    length = _str25$length === void 0 ? str.length - index : _str25$length;
  }

  if (!isString(str)) {
    throw new TypeError('deleteLength args(str) is not string');
  }

  if (!isInteger(index)) {
    throw new TypeError('deleteLength args(indexStart) is not integer');
  }

  if (!_inRange(index, 0, str.length - 1)) {
    throw new RangeError('deleteLength args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  length = _min([length, str.length - index]);

  if (!_inRange(length, 0, str.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 0 to str.length - indexStart');
  }

  return _deleteLength(str, index, length);
};
/**
 * deleteFirst
 */


var _deleteFirst = function _deleteFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(str, 0, length);
};

var deleteFirst = function deleteFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str26 = str;
    str = _str26.str;
    var _str26$length = _str26.length;
    length = _str26$length === void 0 ? 1 : _str26$length;
  }

  if (!isString(str)) {
    throw new TypeError('deleteFirst args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('deleteFirst args(length) must be from 0 to str.length');
  }

  return _deleteFirst(str, length);
};
/**
 * deleteLast
 */


var _deleteLast = function _deleteLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(str, str.length - length, length);
};

var deleteLast = function deleteLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str27 = str;
    str = _str27.str;
    var _str27$length = _str27.length;
    length = _str27$length === void 0 ? 1 : _str27$length;
  }

  if (!isString(str)) {
    throw new TypeError('deleteLast args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLast args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('deleteLast args(length) must be from 0 to str.length');
  }

  return _deleteLast(str, length);
};
/**
 * string.insert
 */


var _insert = function _insert(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  str = _subFirst(str, index) + value + _subLast(str, str.length - index);
  return str;
};

var insert = function insert(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(str, 'str, value', 'index')) {
    var _str28 = str;
    str = _str28.str;
    value = _str28.value;
    var _str28$index = _str28.index;
    index = _str28$index === void 0 ? 0 : _str28$index;
  }

  if (!isString(str)) {
    throw new TypeError('insert args(str) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('insert args(value) is not string');
  }

  if (!isInteger(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!_inRange(index, 0, str.length)) {
    throw new RangeError('insert args(index) must be from 0 to str.length');
  }

  return _insert(str, value, index);
};
/**
 * string.add
 */


var _add = function _add(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - 1;
  str = _subFirst(str, index + 1) + value + _subLast(str, str.length - index - 1);
  return str;
};

var add = function add(str, value) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - 1;

  if (isObjectParameter(str, 'str, value', 'index')) {
    var _str29 = str;
    str = _str29.str;
    value = _str29.value;
    var _str29$index = _str29.index;
    index = _str29$index === void 0 ? str.length - 1 : _str29$index;
  }

  if (!isString(str)) {
    throw new TypeError('add args(str) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('add args(value) is not string');
  }

  if (!isInteger(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!_inRange(index, -1, str.length - 1)) {
    throw new RangeError('add args(index) must be from -1 to str.length - 1');
  }

  return _add(str, value, index);
};

module.exports = {
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

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __webpack_require__(35)), __webpack_require__(22)), __webpack_require__(39)), __webpack_require__(34)), __webpack_require__(40)), __webpack_require__(21)), __webpack_require__(28)), __webpack_require__(41));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(22),
    _match = _require3._match;
/**
 * matchValue
 */


var _matchValue = function _matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if (_match(value, compare)) {
    if (isFunction(match)) {
      return match(value);
    }

    return match;
  }

  if (isFunction(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

var matchValue = function matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if (isObjectParameter(value, 'value, compare, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if (isObjectParameter(compare, 'compare, match', 'unmatch')) {
    var _compare = compare;
    compare = _compare.compare;
    match = _compare.match;
    var _compare$unmatch = _compare.unmatch;
    unmatch = _compare$unmatch === void 0 ? value : _compare$unmatch;
  } else if (isObjectParameter(match, 'match', 'unmatch')) {
    var _match2 = match;
    match = _match2.match;
    var _match2$unmatch = _match2.unmatch;
    unmatch = _match2$unmatch === void 0 ? value : _match2$unmatch;
  } else if (isObjectParameter(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  return _matchValue(value, compare, match, unmatch);
};

module.exports = {
  _matchValue: _matchValue,
  matchValue: matchValue
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(22),
    _matchSomeValue = _require3._matchSomeValue;
/**
 * initialValue
 */


var _initialValue = function _initialValue(value, valueWhenMatched) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];
  return _matchSomeValue(value, compareArray, valueWhenMatched);
};

var initialValue = function initialValue(value, valueWhenMatched) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];

  if (isObjectParameter(value, 'value, valueWhenMatched', 'compareArray')) {
    var _value = value;
    value = _value.value;
    valueWhenMatched = _value.valueWhenMatched;
    var _value$compareArray = _value.compareArray;
    compareArray = _value$compareArray === void 0 ? [undefined] : _value$compareArray;
  }

  return _initialValue(value, valueWhenMatched, compareArray);
};

module.exports = {
  _initialValue: _initialValue,
  initialValue: initialValue
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = __webpack_require__(5),
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
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet,
    isUndefinedAll = _require.isUndefinedAll,
    isNullAll = _require.isNullAll,
    isNaNStrictAll = _require.isNaNStrictAll,
    isBooleanAll = _require.isBooleanAll,
    isNumberAll = _require.isNumberAll,
    isIntegerAll = _require.isIntegerAll,
    isStringAll = _require.isStringAll,
    isFunctionAll = _require.isFunctionAll,
    isObjectAll = _require.isObjectAll,
    isObjectTypeAll = _require.isObjectTypeAll,
    isArrayAll = _require.isArrayAll,
    isArrayTypeAll = _require.isArrayTypeAll,
    isDateAll = _require.isDateAll,
    isRegExpAll = _require.isRegExpAll,
    isExceptionAll = _require.isExceptionAll,
    isMapAll = _require.isMapAll,
    isWeakMapAll = _require.isWeakMapAll,
    isSetAll = _require.isSetAll,
    isWeakSetAll = _require.isWeakSetAll;

var _require2 = __webpack_require__(16),
    _copyProperty = _require2._copyProperty,
    isObjectParameter = _require2.isObjectParameter;
/**
 * equalFunction
 */


var equalFunction = {};

equalFunction.equalValue = function (value1, value2) {
  if (isNaNStrict(value1) && isNaNStrict(value2)) {
    return true;
  }

  return value1 === value2;
}; // function is no recursive call


equalFunction.equalFunction = function (value1, value2) {
  if (!isFunctionAll(value1, value2)) {
    return;
  }

  return value1 === value2;
};

equalFunction.equalObject = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isObjectAll(value1, value2)) {
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

equalFunction.equalArrayType = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isArrayTypeAll(value1, value2)) {
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

equalFunction.equalDate = function (value1, value2) {
  if (!isDateAll(value1, value2)) {
    return;
  }

  return value1.getTime() === value2.getTime();
};

equalFunction.equalRegExp = function (value1, value2) {
  if (!isRegExpAll(value1, value2)) {
    return;
  }

  return value1.source === value2.source;
};

equalFunction.equalMap = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isMapAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator = _createForOfIteratorHelper(value1.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
};

equalFunction.equalWeakMap = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakMapAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator2 = _createForOfIteratorHelper(value1.entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
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

equalFunction.equalSet = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isSetAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator3 = _createForOfIteratorHelper(value1),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var v1item = _step3.value;
      var result = false;

      var _iterator4 = _createForOfIteratorHelper(value2),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var v2item = _step4.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return true;
};

equalFunction.equalWeakSet = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakSetAll(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

  bufferWrite(value1, value2);

  var _iterator5 = _createForOfIteratorHelper(value1),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var v1item = _step5.value;
      var result = false;

      var _iterator6 = _createForOfIteratorHelper(value2),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var v2item = _step6.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return true;
};
/**
 * equal
 */


var _equal = function _equal(value1, value2) {
  var __equal = function __equal(value1, value2) {
    for (var i = 0, l = _equal.functions.length; i < l; i += 1) {
      var result = _equal.functions[i](value1, value2);

      if (!isUndefined(result)) {
        return result;
      }
    }

    return false;
  };

  return __equal(value1, value2);
};

_equal.functions = [];

_equal.clear = function () {
  _equal.functions = [];
};

_equal.add = function (func) {
  _equal.functions.unshift(func);
};

_equal.reset = function () {
  _equal.clear();

  _equal.add(equalFunction.equalValue);

  _equal.add(equalFunction.equalObject);

  _equal.add(equalFunction.equalArrayType);

  _equal.add(equalFunction.equalWeakSet);

  _equal.add(equalFunction.equalSet);

  _equal.add(equalFunction.equalWeakMap);

  _equal.add(equalFunction.equalMap);

  _equal.add(equalFunction.equalFunction);

  _equal.add(equalFunction.equalRegExp);

  _equal.add(equalFunction.equalDate);
};

_equal.reset();

var equal = function equal(value1, value2) {
  if (isObjectParameter(value1, 'value1, value2')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
  }

  return _equal(value1, value2);
};

_copyProperty(_equal, 'clear,reset,add,' + '', equal);
/**
 * equalDeep
 */


var _equalDeep = function _equalDeep(value1, value2) {
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

    for (var i = 0, l = _equalDeep.functions.length; i < l; i += 1) {
      var result = _equalDeep.functions[i](value1, value2, function (v1, v2) {
        CircularReferenceBuffer.v1Array.push(v1);
        CircularReferenceBuffer.v2Array.push(v2);
      }, __equalDeep);

      if (!isUndefined(result)) {
        return result;
      }
    }

    return false;
  };

  return __equalDeep(value1, value2);
};

_equalDeep.functions = [];

_equalDeep.clear = function () {
  _equalDeep.functions = [];
};

_equalDeep.add = function (func) {
  _equalDeep.functions.unshift(func);
};

_equalDeep.reset = function () {
  _equalDeep.clear();

  _equalDeep.add(equalFunction.equalValue);

  _equalDeep.add(equalFunction.equalObject);

  _equalDeep.add(equalFunction.equalArrayType);

  _equalDeep.add(equalFunction.equalWeakSet);

  _equalDeep.add(equalFunction.equalSet);

  _equalDeep.add(equalFunction.equalWeakMap);

  _equalDeep.add(equalFunction.equalMap);

  _equalDeep.add(equalFunction.equalFunction);

  _equalDeep.add(equalFunction.equalRegExp);

  _equalDeep.add(equalFunction.equalDate);
};

_equalDeep.reset();

var equalDeep = function equalDeep(value1, value2) {
  if (isObjectParameter(value1, 'value1,value2')) {
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
  }

  return _equalDeep(value1, value2);
};

_copyProperty(_equalDeep, 'clear,reset,add,' + '', equalDeep);

module.exports = {
  _equal: _equal,
  _equalDeep: _equalDeep,
  equal: equal,
  equalDeep: equalDeep,
  equalFunction: equalFunction
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = __webpack_require__(10),
    _replaceAll = _require3._replaceAll;

var replaceAll = function replaceAll(str, before, after) {
  if (isObjectParameter(str, 'str, before, after')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
  }

  if (!isString(str)) {
    throw new TypeError('replaceAll args(str) is not string');
  }

  if (!isString(before)) {
    throw new TypeError('replaceAll args(before) is not string');
  }

  if (!isString(after)) {
    throw new TypeError('replaceAll args(after) is not string');
  }

  return _replaceAll(str, before, after);
};

module.exports = {
  replaceAll: replaceAll
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(9),
    isObjectParameter = _require2.isObjectParameter;
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

  if (!isBoolean(result)) {
    throw new RangeError("_matchFormat args(formatName:".concat(formatName, ")") + ' function result is not boolean');
  }

  return result;
};

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
  if (isObjectParameter(formatName, 'formatName,value')) {
    var _formatName = formatName;
    formatName = _formatName.formatName;
    value = _formatName.value;
  }

  if (!isString(formatName)) {
    throw new TypeError('matchFormat args(formatName) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('matchFormat args(value) is not string');
  }

  return _matchFormat(formatName, value);
};

module.exports = {
  _matchFormat: _matchFormat,
  matchFormat: matchFormat
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isNotUndefined = _require.isNotUndefined,
    isNotNull = _require.isNotNull,
    isNotNaNStrictAll = _require.isNotNaNStrictAll,
    isNotBoolean = _require.isNotBoolean,
    isNotNumber = _require.isNotNumber,
    isNotInteger = _require.isNotInteger,
    isNotString = _require.isNotString,
    isNotFunction = _require.isNotFunction,
    isNotObject = _require.isNotObject,
    isNotArray = _require.isNotArray,
    isNotDate = _require.isNotDate,
    isNotRegExp = _require.isNotRegExp,
    isNotException = _require.isNotException;

var _require2 = __webpack_require__(38),
    _matchValue = _require2._matchValue,
    _initialValue = _require2._initialValue;

var _require3 = __webpack_require__(36),
    _matchFormat = _require3._matchFormat;

var _require4 = __webpack_require__(9),
    isObjectParameter = _require4.isObjectParameter;

var _require5 = __webpack_require__(24),
    _round = _require5._round;
/**
 * numberToString
 */


var _numberToString = function _numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return value.toString(radix);
};

var numberToString = function numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (isObjectParameter(value, 'value', 'radix')) {
    var _value = value;
    value = _value.value;
    var _value$radix = _value.radix;
    radix = _value$radix === void 0 ? 10 : _value$radix;
  }

  if (!isNumber(value)) {
    throw new TypeError('numberToString args(value) is not number');
  }

  if (!isInteger(radix)) {
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


var valueToString = function valueToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (isObjectParameter(value, 'value', 'radix')) {
    var _value2 = value;
    value = _value2.value;
    var _value2$radix = _value2.radix;
    radix = _value2$radix === void 0 ? 10 : _value2$radix;
  }

  if (!isInteger(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  if (!isNumber(value)) {
    return String(value);
  }

  return _numberToString(value, radix);
};
/**
 * stringToNumber
 */


var _stringToNumberBase = function _stringToNumberBase(value, defaultValueFunc) {
  if (value === '') {
    return defaultValueFunc();
  }

  if (!_matchFormat('float_more', value)) {
    return defaultValueFunc();
  }

  var result = Number(value);

  if (!isNumber(result)) {
    return defaultValueFunc();
  }

  return result;
};

var _stringToNumber = function _stringToNumber(value) {
  return _stringToNumberBase(value, function () {
    throw new RangeError('stringToNumber args(value) is not changeing number');
  });
};

var stringToNumber = function stringToNumber(value) {
  if (isObjectParameter(value, 'value')) {
    var _value3 = value;
    value = _value3.value;
  }

  if (!isString(value)) {
    throw new TypeError('stringToNumber args(value) is not string');
  }

  return _stringToNumber(value);
};

var _stringToNumberDefault = function _stringToNumberDefault(value, defaultValue) {
  return _stringToNumberBase(value, function () {
    return defaultValue;
  });
};

var stringToNumberDefault = function stringToNumberDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value', 'defaultValue')) {
    var _value4 = value;
    value = _value4.value;
    defaultValue = _value4.defaultValue;
  }

  if (!isString(value)) {
    throw new TypeError('stringToNumberDefault args(value) is not string');
  }

  return _stringToNumberDefault(value, defaultValue);
};
/**
 * stringToInteger
 */


var _stringToIntegerBase = function _stringToIntegerBase(value, defaultValueFunc) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (value === '') {
    return defaultValueFunc();
  }

  if (!_matchFormat(String(radix) + '_base_number', value)) {
    return defaultValueFunc();
  }

  var result = parseInt(value, radix);

  if (!isInteger(result)) {
    return defaultValueFunc();
  }

  return result;
};

var _stringToInteger = function _stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return _stringToIntegerBase(value, function () {
    throw new RangeError('stringToInteger args(value) is not changeing integer');
  }, radix);
};

var stringToInteger = function stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (isObjectParameter(value, 'value', 'radix')) {
    var _value5 = value;
    value = _value5.value;
    var _value5$radix = _value5.radix;
    radix = _value5$radix === void 0 ? 10 : _value5$radix;
  }

  if (!isString(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!isInteger(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToInteger(value, radix);
};

var _stringToIntegerDefault = function _stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return _stringToIntegerBase(value, function () {
    return defaultValue;
  }, radix);
};

var stringToIntegerDefault = function stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (isObjectParameter(value, 'value', 'defaultValue, radix')) {
    var _value6 = value;
    value = _value6.value;
    defaultValue = _value6.defaultValue;
    var _value6$radix = _value6.radix;
    radix = _value6$radix === void 0 ? 10 : _value6$radix;
  }

  if (!isString(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!isInteger(radix)) {
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


var valueToNumber = function valueToNumber(value) {
  if (isNull(value)) {
    return NaN;
  }

  if (isArray(value)) {
    return NaN;
  }

  if (!isString(value)) {
    return Number(value);
  }

  return stringToNumberDefault(value, NaN);
};

var valueToNumberDefault = function valueToNumberDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value,defaultValue')) {
    var _value7 = value;
    value = _value7.value;
    defaultValue = _value7.defaultValue;
  }

  if (isNaNStrict(value)) {
    return value;
  }

  var result = valueToNumber(value);

  if (isNaNStrict(result)) {
    return defaultValue;
  }

  return result;
};
/**
 * valueToInteger
 */


var valueToInteger = function valueToInteger(value) {
  var result = valueToNumber(value);

  if (isNaNStrict(result)) {
    return NaN;
  }

  return _round(result);
};

var valueToIntegerDefault = function valueToIntegerDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value,defaultValue')) {
    var _value8 = value;
    value = _value8.value;
    defaultValue = _value8.defaultValue;
  }

  if (isNaNStrict(value)) {
    return value;
  }

  var result = valueToInteger(value);

  if (isNaNStrict(result)) {
    return defaultValue;
  }

  return result;
};

var numToString = numberToString;
var valToString = valueToString;
var strToNumber = stringToNumber;
var strToNumberDef = stringToNumberDefault;
var strToInteger = stringToInteger;
var strToIntegerDef = stringToIntegerDefault;
var valToNumber = valueToNumber;
var valToNumberDef = valueToNumberDefault;
var valToInteger = valueToInteger;
var valToIntegerDef = valueToIntegerDefault;
var numToStr = numberToString;
var valToStr = valueToString;
var strToNum = stringToNumber;
var strToNumDef = stringToNumberDefault;
var strToInt = stringToInteger;
var strToIntDef = stringToIntegerDefault;
var valToNum = valueToNumber;
var valToNumDef = valueToNumberDefault;
var valToInt = valueToInteger;
var valToIntDef = valueToIntegerDefault;
module.exports = {
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

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = __webpack_require__(38),
    _or = _require2._or,
    _includes = _require2._includes,
    _includesSome = _require2._includesSome,
    _includesAll = _require2._includesAll;

var _require3 = __webpack_require__(30),
    map = _require3.map;

var original = {};
original.log = console.log;
original.info = console.info;
original.warn = console.warn;
original.error = console.error;
original.debug = console.debug;

var _hook = function _hook(methodName, hookFunc) {
  console[methodName] = hookFunc;
};

var hook = function hook(methodName) {
  var hookFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError('hook args(methodName) is not [log|info|warn|error|debug]');
  }

  if (!isFunction(hookFunc)) {
    throw new TypeError('hook args(hookFunc) is not function');
  }

  _hook(methodName, hookFunc);
};

var hookLog = function hookLog(hookFunc) {
  hook('log', hookFunc);
};

var hookInfo = function hookInfo(hookFunc) {
  hook('info', hookFunc);
};

var hookWarn = function hookWarn(hookFunc) {
  hook('warn', hookFunc);
};

var hookError = function hookError(hookFunc) {
  hook('error', hookFunc);
};

var hookDebug = function hookDebug(hookFunc) {
  hook('debug', hookFunc);
};

var _unHook = function _unHook(methodName) {
  console[methodName] = original[methodName];
};

var unHook = function unHook(methodName) {
  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError('unHook args(methodName) is not [log|info|warn|error|debug]');
  }

  _unHook(methodName);
};

var unHookLog = function unHookLog() {
  unHook('log');
};

var unHookInfo = function unHookInfo() {
  unHook('info');
};

var unHookWarn = function unHookWarn() {
  unHook('warn');
};

var unHookError = function unHookError() {
  unHook('error');
};

var unHookDebug = function unHookDebug() {
  unHook('debug');
};

var _accept = function _accept(methodName, acceptArray, rejectArray, hookFunc) {
  _hook(methodName, function () {
    for (var _len = arguments.length, messageArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      messageArgs[_key] = arguments[_key];
    }

    var messageArgsAll = map(messageArgs, function (value) {
      return String(value);
    }).join(' ');
    var acceptFlag = acceptArray.length === 0;

    if (acceptFlag === false) {
      acceptFlag = _includesSome(messageArgsAll, acceptArray);
    }

    if (acceptFlag && isArray(rejectArray)) {
      acceptFlag = !_includesSome(messageArgsAll, rejectArray);
    }

    if (acceptFlag) {
      hookFunc.apply(void 0, messageArgs);
    }
  });
};

var accept = function accept(methodName, acceptArray, rejectArray, hookFunc) {
  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError('accept args(methodName) is not [log|info|warn|error|debug]');
  }

  if (!isArray(acceptArray)) {
    throw new TypeError('accept args(acceptArray) is not array');
  }

  if (!(isUndefined(rejectArray) || isArray(rejectArray))) {
    throw new TypeError('accept args(rejectArray) is not array');
  }

  if (!isFunction(hookFunc)) {
    throw new TypeError('accept args(hookFunc) is not function');
  }

  _accept(methodName, acceptArray, rejectArray, hookFunc);
};

var acceptLog = function acceptLog(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.log;
  accept('log', acceptArray, rejectArray, hookFunc);
};

var acceptInfo = function acceptInfo(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.info;
  accept('info', acceptArray, rejectArray, hookFunc);
};

var acceptWarn = function acceptWarn(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.warn;
  accept('warn', acceptArray, rejectArray, hookFunc);
};

var acceptError = function acceptError(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.error;
  accept('error', acceptArray, rejectArray, hookFunc);
};

var acceptDebug = function acceptDebug(acceptArray, rejectArray) {
  var hookFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : original.debug;
  accept('debug', acceptArray, rejectArray, hookFunc);
};

module.exports = {
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

/***/ })
/******/ ]);
});