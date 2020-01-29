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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(2);

var _root = __webpack_require__(3);

var _type = __webpack_require__(5);

var _test = __webpack_require__(18);

var _syntax = __webpack_require__(31);

var _compare = __webpack_require__(25);

var _convert = __webpack_require__(32);

var _number = __webpack_require__(21);

var _string = __webpack_require__(23);

var _object = __webpack_require__(15);

var _array = __webpack_require__(19);

var _consoleHook = __webpack_require__(33);

var VERSION = '4.0.0 beta';
var rootNames = {};
var propertyNames = {};
var _copyProperty = _object._copyProperty;
var _replaceAll = _string._replaceAll;
var _map = _array._map; // root

propertyNames.ROOT = 'clone, cloneDeep,' + 'cloneFunction,' + '';

var root = _copyProperty(_root, propertyNames.ROOT);

_copyProperty(_root, propertyNames.ROOT, rootNames); // type


propertyNames._TYPE_BASE = 'Undefined,Null,NaNStrict,' + 'Boolean,Number,Integer,String,' + 'Function,Object,ObjectType,' + 'Array,ArrayType,' + 'Date,RegExp,' + 'Exception,' + 'EmptyObject,EmptyArray,' + 'Symbol,' + 'Map,WeakMap,Set,WeakSet,' + 'BooleanObject,NumberObject,StringObject,' + 'Bool,Num,Int,Str,' + 'Func,Obj,ObjType,' + 'Except,' + 'EmptyObj,' + '';

var isPrefixSafixAdd = function isPrefixSafixAdd(prefix, safix, commaString) {
  return _map(_replaceAll(commaString, ' ', '').split(','), function (item) {
    return prefix + item + safix;
  }).join(',');
};

propertyNames.TYPE = [isPrefixSafixAdd('is', '', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', '', propertyNames._TYPE_BASE), isPrefixSafixAdd('is', 'All', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', 'All', propertyNames._TYPE_BASE)].join(',');

var type = _copyProperty(_type, propertyNames.TYPE);

_copyProperty(_type, propertyNames.TYPE, rootNames); // test


propertyNames.TEST_PUBLIC = 'checkEqual, checkCompare,' + 'describe, it, test,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + '';
propertyNames.TEST_ROOT = 'isThrown,isThrownValue,isThrownException,isNotThrown,' + '';

var test = _copyProperty(_test, propertyNames.TEST_PUBLIC);

_copyProperty(_test, propertyNames.TEST_ROOT, rootNames); // syntax


propertyNames.SYNTAX = 'assert,guard,' + 'sc,if_,switch_,' + '';

var syntax = _copyProperty(_syntax, propertyNames.SYNTAX);

_copyProperty(_syntax, propertyNames.SYNTAX, rootNames); // compare


propertyNames.COMPARE = 'equal, equalDeep,' + 'equalFunction,' + 'or,' + 'match, matchValue, initialValue,' + 'matchSome, matchSomeValue,' + 'allMatchSome, indexOfMatchSome, someMatchSome,' + 'matchAll, matchAllValue,' + 'allMatchAll, indexOfMatchAll, someMatchAll,' + 'includes, includesSome, includesAll,' + '';

var compare = _copyProperty(_compare, propertyNames.COMPARE);

_copyProperty(_compare, propertyNames.COMPARE, rootNames); // convert


propertyNames.CONVERT = 'numberToString,' + 'stringToNumber,stringToNumberDefault,' + 'stringToInteger,stringToIntegerDefault,' + 'toNumber, toNumberDefault,' + 'toInteger, toIntegerDefault,' + 'numToString,' + 'strToNumber,strToNumberDef,' + 'strToInteger,strToIntegerDef,' + 'toNum, toNumDef,' + 'toInt, toIntDef,' + 'numToStr,' + 'strToNum,strToNumDef,' + 'strToInt,strToIntDef,' + '';

var convert = _copyProperty(_convert, propertyNames.CONVERT);

_copyProperty(_convert, propertyNames.CONVERT, rootNames); // number


propertyNames.NUMBER = 'isMultiples,isEven,isOdd,' + 'round,nearEqual,inRange,randomInt,' + '';

var number = _copyProperty(_number, propertyNames.NUMBER);

_copyProperty(_number, propertyNames.NUMBER, rootNames); // string


propertyNames.STRING_PUBLIC = 'includes,' + 'matchFormat,replaceAll,' + 'repeat,' + 'isLowerCase,isUpperCase,' + '';
propertyNames.STRING_ROOT = 'matchFormat,replaceAll,' + 'isLowerCase,isUpperCase,' + '';

var string = _copyProperty(_string, propertyNames.STRING_PUBLIC);

_copyProperty(_string, propertyNames.STRING_ROOT, rootNames); // object


propertyNames.OBJECT_PUBLIC = 'isObjectParameter,' + 'copyProperty,propertyCount,inProperty,' + 'getProperty,setProperty,' + 'copyProp,propCount,inProp,' + 'getProp,setProp,' + '';
propertyNames.OBJECT_ROOT = 'copyProperty,propertyCount,inProperty,' + 'getProperty,setProperty,' + 'copyProp,propCount,inProp,' + 'getProp,setProp,' + '';

var object = _copyProperty(_object, propertyNames.OBJECT_PUBLIC);

_copyProperty(_object, propertyNames.OBJECT_ROOT, rootNames);

object.objectToString = _type.objectToString;
rootNames.objectToString = _type.objectToString; // array

propertyNames.ARRAY_PUBLIC = 'from,' + 'min, max,' + 'sum, average, midian,' + 'mode,' + 'unique, single, multiple,' + 'filter, map, count,' + 'findIndex, findIndexFirst,' + 'findBackIndex, findIndexLast,' + 'find, findFirst,' + 'findBack, findLast,' + 'some, all, every,' + 'operation,' + '';
propertyNames.ARRAY_ROOT = 'min, max,' + 'sum, average, midian,' + '';

var array = _copyProperty(_array, propertyNames.ARRAY_PUBLIC);

_copyProperty(_array, propertyNames.ARRAY_ROOT, rootNames); // consoleHook


propertyNames._CONSOLE_HOOK_BASE = ',Log,Info,Warn,Error,Debug';
propertyNames.CONSOLE_HOOK = [isPrefixSafixAdd('hook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('unHook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('accept', '', propertyNames._CONSOLE_HOOK_BASE)].join(',');

var consoleHook = _copyProperty(_consoleHook, propertyNames.CONSOLE_HOOK);

module.exports = _objectSpread({
  VERSION: VERSION,
  platform: {
    node: null,
    web: null,
    wsh: null
  },
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';

      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }

      if (start === undefined) {
        start = 0;
      }

      return this.indexOf(search, start) !== -1;
    };
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
      pos = !pos || pos < 0 ? 0 : +pos;
      return this.substring(pos, pos + search.length) === search;
    };
  }

  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
      if (this_len === undefined || this_len > this.length) {
        this_len = this.length;
      }

      return this.substring(this_len - search.length, this_len) === search;
    };
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray


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
  } // https://github.com/kevlatus/polyfill-array-includes/blob/master/array-includes.js


  if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement, fromIndex) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If len is 0, return false.

      if (len === 0) {
        return false;
      } // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)


      var n = fromIndex | 0; // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.

      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      } // 7. Repeat, while k < len


      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }

        k++;
      } // 8. Return false


      return false;
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
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries


  if (!Object.entries) {
    Object.entries = function (obj) {
      var ownProps = Object.keys(obj),
          i = ownProps.length,
          resArray = new Array(i); // preallocate the Array

      while (i--) {
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
      }

      return resArray;
    };
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
  // ES 15.2.3.7 Object.defineProperties ( O, Properties )


  if (typeof Object.defineProperties !== "function") {
    Object.defineProperties = function (o, properties) {
      if (o !== Object(o)) {
        throw TypeError("Object.defineProperties called on non-object");
      }

      var name;

      for (name in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, name)) {
          Object.defineProperty(o, name, properties[name]);
        }
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(4));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var _require2 = __webpack_require__(15),
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

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = source.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      cloneValue.set(key, __cloneDeep(value));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
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
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = source[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var value = _step2.value;
      cloneValue.add(value);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(6), {}, __webpack_require__(8), {}, __webpack_require__(11), {}, __webpack_require__(12), {}, __webpack_require__(13), {}, __webpack_require__(14));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  return ['function', 'object'].includes(_typeof(value));
};

var isEmptyObject = function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }

  return _propertyCount(value) === 0;
};

var isArray = _objectToStringCheck('Array'); // Int8Array Uint16Array Float32Array Float64Array etc...


var isArrayType = function isArrayType(value) {
  if (objectToString(value).includes('Array]')) {
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

var isNotNaNStrictAll = function isNotNaNStrictAll(value) {
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
  isNotNaNStrictAll: isNotNaNStrictAll,
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
  isNotEmptyArray: isNotEmptyArray
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

module.exports = {
  isException: isException,
  isNotException: isNotException
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


var isObjectParameter = function isObjectParameter(object, propertyArray) {
  var defaultPropertyArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!isObject(object)) {
    return false;
  }

  var filterArray = function filterArray(array) {
    var result = [];

    for (var i = 0; i < array.length; i += 1) {
      if (array[i] === '' || isUndefined(array[i])) {
        continue;
      }

      if (!isString(array[i])) {
        throw new TypeError('isObjectParameter args(propertyArray|defaultPropertyArray)' + ' element is not string');
      }

      result.push(array[i]);
    }

    return result;
  };

  if (isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  propertyArray = filterArray(propertyArray);

  if (isString(defaultPropertyArray)) {
    defaultPropertyArray = _replaceAll(defaultPropertyArray, ' ', '').split(',');
  }

  defaultPropertyArray = filterArray(defaultPropertyArray);

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (!(propertyArray.indexOf(property) !== -1 || defaultPropertyArray.indexOf(property) !== -1)) {
        return false;
      }
    }
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (!object.hasOwnProperty(propertyArray[i])) {
      return false;
    }
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
 *isTypeCheck
 * description:
 *  check type for array argument.
 */


var isTypeCheck = function isTypeCheck(func, argsArray) {
  var l = argsArray.length;

  if (l === 0) {
    return false;
  } else if (l === 1) {
    return func(argsArray[0]);
  } else {
    for (var i = 0; i < l; i += 1) {
      if (!func(argsArray[i])) {
        return false;
      }
    }

    return true;
  }
};

var isTypeCheckArgsFunc = function isTypeCheckArgsFunc(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return isTypeCheck(func, args);
  };
};

var isUndefinedAll = isTypeCheckArgsFunc(isUndefined);
var isNullAll = isTypeCheckArgsFunc(isNull);
var isNaNStrictAll = isTypeCheckArgsFunc(isNaNStrict);
var isBooleanAll = isTypeCheckArgsFunc(isBoolean);
var isNumberAll = isTypeCheckArgsFunc(isNumber);
var isIntegerAll = isTypeCheckArgsFunc(isInteger);
var isStringAll = isTypeCheckArgsFunc(isString);
var isFunctionAll = isTypeCheckArgsFunc(isFunction);
var isObjectAll = isTypeCheckArgsFunc(isObject);
var isObjectTypeAll = isTypeCheckArgsFunc(isObjectType);
var isArrayAll = isTypeCheckArgsFunc(isArray);
var isArrayTypeAll = isTypeCheckArgsFunc(isArrayType);
var isDateAll = isTypeCheckArgsFunc(isDate);
var isRegExpAll = isTypeCheckArgsFunc(isRegExp);
var isExceptionAll = isTypeCheckArgsFunc(isException);
var isBooleanObjectAll = isTypeCheckArgsFunc(isBooleanObject);
var isNumberObjectAll = isTypeCheckArgsFunc(isNumberObject);
var isStringObjectAll = isTypeCheckArgsFunc(isStringObject);
var isEmptyObjectAll = isTypeCheckArgsFunc(isEmptyObject);
var isEmptyArrayAll = isTypeCheckArgsFunc(isEmptyArray);
var isSymbolAll = isTypeCheckArgsFunc(isSymbol);
var isMapAll = isTypeCheckArgsFunc(isMap);
var isWeakMapAll = isTypeCheckArgsFunc(isWeakMap);
var isSetAll = isTypeCheckArgsFunc(isSet);
var isWeakSetAll = isTypeCheckArgsFunc(isWeakSet);
var isNotUndefinedAll = isTypeCheckArgsFunc(isNotUndefined);
var isNotNullAll = isTypeCheckArgsFunc(isNotNull);
var isNotNaNStrictAll = isTypeCheckArgsFunc(isNotNaNStrict);
var isNotBooleanAll = isTypeCheckArgsFunc(isNotBoolean);
var isNotNumberAll = isTypeCheckArgsFunc(isNotNumber);
var isNotIntegerAll = isTypeCheckArgsFunc(isNotInteger);
var isNotStringAll = isTypeCheckArgsFunc(isNotString);
var isNotFunctionAll = isTypeCheckArgsFunc(isNotFunction);
var isNotObjectAll = isTypeCheckArgsFunc(isNotObject);
var isNotObjectTypeAll = isTypeCheckArgsFunc(isNotObjectType);
var isNotArrayAll = isTypeCheckArgsFunc(isNotArray);
var isNotArrayTypeAll = isTypeCheckArgsFunc(isNotArrayType);
var isNotDateAll = isTypeCheckArgsFunc(isNotDate);
var isNotRegExpAll = isTypeCheckArgsFunc(isNotRegExp);
var isNotExceptionAll = isTypeCheckArgsFunc(isNotException);
var isNotBooleanObjectAll = isTypeCheckArgsFunc(isNotBooleanObject);
var isNotNumberObjectAll = isTypeCheckArgsFunc(isNotNumberObject);
var isNotStringObjectAll = isTypeCheckArgsFunc(isNotStringObject);
var isNotEmptyObjectAll = isTypeCheckArgsFunc(isNotEmptyObject);
var isNotEmptyArrayAll = isTypeCheckArgsFunc(isNotEmptyArray);
var isNotSymbolAll = isTypeCheckArgsFunc(isNotSymbol);
var isNotMapAll = isTypeCheckArgsFunc(isNotMap);
var isNotWeakMapAll = isTypeCheckArgsFunc(isNotWeakMap);
var isNotSetAll = isTypeCheckArgsFunc(isNotSet);
var isNotWeakSetAll = isTypeCheckArgsFunc(isNotWeakSet);
var isUndef = isUndefinedAll;
var isBool = isBooleanAll;
var isNum = isNumberAll;
var isInt = isIntegerAll;
var isStr = isStringAll;
var isFunc = isFunctionAll;
var isObj = isObjectAll;
var isObjType = isObjectTypeAll;
var isExcept = isExceptionAll;
var isEmptyObj = isEmptyObjectAll;
var isNotUndef = isNotUndefinedAll;
var isNotBool = isNotBooleanAll;
var isNotNum = isNotNumberAll;
var isNotInt = isNotIntegerAll;
var isNotStr = isNotStringAll;
var isNotFunc = isNotFunctionAll;
var isNotObj = isNotObjectAll;
var isNotObjType = isNotObjectTypeAll;
var isNotExcept = isNotExceptionAll;
var isNotEmptyObj = isNotEmptyObjectAll;
module.exports = {
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
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjType: isObjType,
  isExcept: isExcept,
  isEmptyObj: isEmptyObj,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjType: isNotObjType,
  isNotExcept: isNotExcept,
  isNotEmptyObj: isNotEmptyObj
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(16), {}, __webpack_require__(9), {}, __webpack_require__(17));

/***/ }),
/* 16 */
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


var _getProperty = function _getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var result = object;
  var propertyArray = propertyPath.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      return undefined;
    }

    if (hasOwn) {
      if (!result.hasOwnProperty(propertyArray[i])) {
        return undefined;
      }
    } else {
      if (!(propertyArray[i] in result)) {
        return undefined;
      }
    }

    if (isUndefined(result[propertyArray[i]])) {
      return undefined;
    }

    result = result[propertyArray[i]];
  }

  return result;
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
/* 17 */
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

var _require4 = __webpack_require__(16),
    _getProperty = _require4._getProperty;
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
    // if ((propertyPathArray[i] === '')
    // || (isUndefined(propertyPathArray[i]))) {
    //   continue;
    // }
    if (!isString(propertyPathArray[i])) {
      throw new TypeError('_inProperty args(propertyArray) element is not string');
    }

    var result = _getProperty(object, propertyPathArray[i], hasOwn);

    if (isUndefined(result)) {
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
    throw new TypeError('inProperty args(fromObject) is not object');
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
/* 18 */
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

var _require2 = __webpack_require__(19),
    _map = _require2._map;

var _require3 = __webpack_require__(23),
    _repeat = _require3._repeat;

var _require4 = __webpack_require__(25),
    equal = _require4.equal;
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
  output += "".concat(indent, "Test: ").concat(testFrame.testName, "\n") + "".concat(indent, "  Counter: ").concat(testFrame.counter, "\n") + (message === '' ? '' : "".concat(indent, "  Message: ").concat(message, "\n")) + "".concat(indent, "  A !== B\n") + "".concat(indent, "  A = ").concat(String(a), "\n") + "".concat(indent, "  B = ").concat(String(b));
  console.log(output);
  return false;
};

var checkEqual = function checkEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return checkCompare(equal, a, b, message);
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

var isThrownException = function isThrownException(targetFunc, exceptionName) {
  if (!(isString(exceptionName) || isUndefined(exceptionName))) {
    throw new TypeError('isThrownException args exceptionName is not string');
  }

  return isThrown(targetFunc, function (thrown) {
    if (isException(thrown)) {
      if (isUndefined(exceptionName)) {
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

var test = it;
module.exports = {
  checkEqual: checkEqual,
  checkCompare: checkCompare,
  describe: describe,
  it: it,
  test: test,
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(20), {
  operation: _objectSpread({}, __webpack_require__(22))
});

/***/ }),
/* 20 */
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

var _require2 = __webpack_require__(21),
    isEven = _require2.isEven;

var _require3 = __webpack_require__(9),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = __webpack_require__(4),
    _clone = _require4._clone,
    _cloneDeep = _require4._cloneDeep;
/**
 * array.min max
 */


var _min = function _min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

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

  return _min(array);
};

var _max = function _max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!isNumber(array[i])) {
      throw new TypeError('_max args(array) element is not number');
    }

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
    if (!isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    result += array[i];
  }

  return result;
};

var sum = function sum(array) {
  if (!isArray(array)) {
    throw new TypeError('sum args(array) is not array');
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

  return _average(array);
};
/**
 * midian
 */


var _midian = function _midian(array) {
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

var midian = function midian(array) {
  if (!isArray(array)) {
    throw new TypeError('midian args(array) is not array');
  }

  return _midian(array);
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
  var resultArray = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!resultArray.includes(array[i])) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
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
 * findIndex
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
 * findBackIndex
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
module.exports = (_module$exports = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _midian: _midian,
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
  from: from,
  min: min,
  max: max,
  sum: sum,
  average: average,
  midian: midian,
  mode: mode,
  unique: unique,
  single: single,
  multiple: multiple,
  filter: filter,
  map: map,
  count: count,
  findFirstIndex: findFirstIndex,
  findIndex: findIndex,
  findLastIndex: findLastIndex,
  findBackIndex: findBackIndex,
  findFirst: findFirst,
  findLast: findLast,
  some: some,
  all: all,
  every: every
}, _defineProperty(_module$exports, "findIndex", findIndex), _defineProperty(_module$exports, "findBackIndex", findBackIndex), _defineProperty(_module$exports, "find", find), _defineProperty(_module$exports, "findBack", findBack), _module$exports);

/***/ }),
/* 21 */
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
  return isMultiples(number, 2);
};

var isOdd = function isOdd(number) {
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
  _inRange: _inRange
}, _defineProperty(_module$exports, "isMultiples", isMultiples), _defineProperty(_module$exports, "isEven", isEven), _defineProperty(_module$exports, "isOdd", isOdd), _defineProperty(_module$exports, "round", round), _defineProperty(_module$exports, "nearEqual", nearEqual), _defineProperty(_module$exports, "inRange", inRange), _defineProperty(_module$exports, "randomInt", randomInt), _module$exports);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var _require2 = __webpack_require__(21),
    _inRange = _require2._inRange;

var _require3 = __webpack_require__(9),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = __webpack_require__(4),
    _clone = _require4._clone,
    _cloneDeep = _require4._cloneDeep;
/**
 * array.insert
 */


var _insert = function _insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(values)));
  return array;
};

var insert = function insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(array, 'array, values, index')) {
    var _array = array;
    array = _array.array;
    values = _array.values;
    index = _array.index;
  }

  if (!isArray(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!isArray(values)) {
    throw new TypeError('insert args(values) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, values, index);
};
/**
 * array.add
 */


var _add = function _add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(values)));
  return array;
};

var add = function add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if (isObjectParameter(array, 'array, values, index')) {
    var _array2 = array;
    array = _array2.array;
    values = _array2.values;
    index = _array2.index;
  }

  if (!isArray(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!isArray(values)) {
    throw new TypeError('add args(values) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from 0 to array.length - 1');
  }

  return _add(array, values, index);
};
/**
 * array.delete
 */


var _delete = function _delete(array, index) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  array.splice(index, deleteCount);
  return array;
};

var deleteLength = function deleteLength(array, index) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (isObjectParameter(array, 'array, index, deleteCount')) {
    var _array3 = array;
    array = _array3.array;
    index = _array3.index;
    deleteCount = _array3.deleteCount;
  }

  if (!isArray(array)) {
    throw new TypeError('delete args(array) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('delete args(index) is not integer');
  }

  if (!isInteger(deleteCount)) {
    throw new TypeError('delete args(deleteCount) is not integer');
  }

  if (!_inRange(index, 0, array.length - deleteCount)) {
    throw new RangeError('delete args(index) must be from 0 to array.length - args deleteCount');
  }

  if (deleteCount <= 0) {
    throw new RangeError('delete args(deleteCount) must be >= 1');
  }

  return _delete(array, index, deleteCount);
};

module.exports = {
  insert: insert,
  add: add,
  "delete": deleteLength
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(24), {}, __webpack_require__(10), {}, __webpack_require__(30));

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

var _require2 = __webpack_require__(25),
    _matchSome = _require2._matchSome;

var _require3 = __webpack_require__(9),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = __webpack_require__(19),
    _map = _require4._map;
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
    throw new RangeError("_matchFormat args(formatName:".concat(formatName, ")") + " function result is not boolean");
  }

  return result;
};

_matchFormat.pattern = {};

_matchFormat.clear = function () {
  _matchFormat.pattern = {};
};

_matchFormat.add = function (nameArray, patternFunction) {
  nameArray.forEach(function (name) {
    _matchFormat.pattern[name] = patternFunction;
  });
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
/**
 * repeat
 */


var _repeat = function _repeat(value, count) {
  var result = '';

  for (var i = 0; i < count; i += 1) {
    result += value;
  }

  return result;
};

var repeat = function repeat(value, count) {
  if (isObjectParameter(value, 'value, count')) {
    var _value = value;
    value = _value.value;
    count = _value.count;
  }

  if (!isString(value)) {
    throw new TypeError('repeat args(value) is not string');
  }

  if (!isInteger(count)) {
    throw new TypeError('repeat args(count) is not integer');
  }

  return _repeat(value, count);
};
/**
 * isLowerCase
 */


var _isLowerCase = function _isLowerCase(value) {
  return value.toLowerCase() === value;
};

var isLowerCase = function isLowerCase(value) {
  if (!isString(value)) {
    throw new TypeError('isLowerCase args(value) is not string');
  }

  return _isLowerCase(value);
};
/**
 * isUpperCase
 */


var _isUpperCase = function _isUpperCase(value) {
  return value.toUpperCase() === value;
};

var isUpperCase = function isUpperCase(value) {
  if (!isString(value)) {
    throw new TypeError('isUpperCase args(value) is not string');
  }

  return _isUpperCase(value);
};

module.exports = (_module$exports = {
  _matchFormat: _matchFormat,
  _repeat: _repeat,
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  matchFormat: matchFormat,
  repeat: repeat
}, _defineProperty(_module$exports, "isLowerCase", isLowerCase), _defineProperty(_module$exports, "isUpperCase", isUpperCase), _module$exports);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(26), {}, __webpack_require__(27), {}, __webpack_require__(28), {}, __webpack_require__(29));

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

var _require3 = __webpack_require__(20),
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
 * matchValue
 */


var _matchValue = function _matchValue(value, compare, valueWhenMatched) {
  if (_match(value, compare)) {
    return valueWhenMatched;
  }

  return value;
};

var matchValue = function matchValue(value, compare, valueWhenMatched) {
  if (isObjectParameter(value, 'value, compare, valueWhenMatched')) {
    var _value2 = value;
    value = _value2.value;
    compare = _value2.compare;
    valueWhenMatched = _value2.valueWhenMatched;
  }

  return _matchValue(value, compare, valueWhenMatched);
};
/**
 * initialValue
 */


var _initialValue = function _initialValue(value, valueWhenMatched) {
  return _matchValue(value, isUndefined, valueWhenMatched);
};

var initialValue = function initialValue(value, valueWhenMatched) {
  if (isObjectParameter(value, 'value, valueWhenMatched')) {
    var _value3 = value;
    value = _value3.value;
    valueWhenMatched = _value3.valueWhenMatched;
  }

  return _initialValue(value, valueWhenMatched);
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
    var _value4 = value;
    value = _value4.value;
    compareArray = _value4.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchSome args(compareArray) is not array');
  }

  return _matchSome(value, compareArray);
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
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
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
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
    compareArray = _valueArray2.compareArray;
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
 * matchSomeValue
 */


var _matchSomeValue = function _matchSomeValue(value, compareArray, valueWhenMatched) {
  if (_matchSome(value, compareArray)) {
    return valueWhenMatched;
  }

  return value;
};

var matchSomeValue = function matchSomeValue(value, compareArray, valueWhenMatched) {
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    var _value5 = value;
    value = _value5.value;
    compareArray = _value5.compareArray;
    valueWhenMatched = _value5.valueWhenMatched;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchSomeValue args(compareArray) is not array');
  }

  return _matchSomeValue(value, compareArray, valueWhenMatched);
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
    var _value6 = value;
    value = _value6.value;
    compareArray = _value6.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(value, compareArray);
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
    var _valueArray3 = valueArray;
    valueArray = _valueArray3.valueArray;
    compareArray = _valueArray3.compareArray;
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
    var _valueArray4 = valueArray;
    valueArray = _valueArray4.valueArray;
    compareArray = _valueArray4.compareArray;
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
/**
 * matchAllValue
 */


var _matchAllValue = function _matchAllValue(value, compareArray, valueWhenMatched) {
  if (_matchAll(value, compareArray)) {
    return valueWhenMatched;
  }

  return value;
};

var matchAllValue = function matchAllValue(value, compareArray, valueWhenMatched) {
  if (isObjectParameter(value, 'value, compareArray, valueWhenMatched')) {
    var _value7 = value;
    value = _value7.value;
    compareArray = _value7.compareArray;
    valueWhenMatched = _value7.valueWhenMatched;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, valueWhenMatched);
};

module.exports = {
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
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
  matchValue: matchValue,
  initialValue: initialValue,
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

var _require3 = __webpack_require__(20),
    _some = _require3._some,
    _all = _require3._all,
    _findFirstIndex = _require3._findFirstIndex;

var _require4 = __webpack_require__(27),
    _match = _require4._match;
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
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
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
    var _value3 = value;
    value = _value3.value;
    compareArray = _value3.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('includesAll args(compareArray) is not array');
  }

  return _includesAll(value, compareArray);
};

module.exports = {
  _includes: _includes,
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  includes: includes,
  includesSome: includesSome,
  includesAll: includesAll
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var _require2 = __webpack_require__(15),
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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = value1.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
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
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = value1.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (__equalDeep(value, value2.get(key)) === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
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
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = value1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var v1item = _step3.value;
      var result = false;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = value2[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var v2item = _step4.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
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
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = value1[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var v1item = _step5.value;
      var result = false;
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = value2[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var v2item = _step6.value;

          if (__equalDeep(v1item, v2item) === true) {
            result = true;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      if (result === false) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
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

    return value1 === value2;
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
/* 30 */
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
    isException = _require.isException;
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

  var checkSyntax = function checkSyntax(args) {
    if (!isObject(args)) {
      throw new TypeError('if_() args is not object');
    }

    if (isUndefined(args.then) && isUndefined(args["else"])) {
      throw new ReferenceError('if_() args.then and .else is not defined');
    }
  };

  if (condition) {
    return function (args) {
      checkSyntax(args);
      return functionValue(args.then);
    };
  } else {
    return function (args) {
      checkSyntax(args);
      return functionValue(args["else"]);
    };
  }
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

module.exports = {
  assert: assert,
  guard: guard,
  sc: sc,
  if_: if_,
  switch_: switch_
};

/***/ }),
/* 32 */
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

var _require2 = __webpack_require__(25),
    _matchValue = _require2._matchValue,
    _initialValue = _require2._initialValue;

var _require3 = __webpack_require__(23),
    _matchFormat = _require3._matchFormat;

var _require4 = __webpack_require__(9),
    isObjectParameter = _require4.isObjectParameter;

var _require5 = __webpack_require__(21),
    _round = _require5._round;
/**
 * numberToString
 */


var _numberToString = function _numberToString(value, radix) {
  radix = _initialValue(radix, 10);
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
    var _value2 = value;
    value = _value2.value;
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
    var _value3 = value;
    value = _value3.value;
    defaultValue = _value3.defaultValue;
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
  return _stringToNumberBase(value, function () {
    throw new RangeError('stringToInteger args(value) is not changeing integer');
  }, radix);
};

var stringToInteger = function stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (isObjectParameter(value, 'value', 'radix')) {
    var _value4 = value;
    value = _value4.value;
    var _value4$radix = _value4.radix;
    radix = _value4$radix === void 0 ? 10 : _value4$radix;
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
    var _value5 = value;
    value = _value5.value;
    defaultValue = _value5.defaultValue;
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

  return _stringToIntegerDefault(value, defaultValue, radix);
};
/**
 * toNumber
 */


var toNumber = function toNumber(value) {
  if (isNull(value)) {
    return NaN;
  }

  if (!isString(value)) {
    return Number(value);
  }

  return stringToNumberDefault(value, NaN);
};

var toNumberDefault = function toNumberDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value,defaultValue')) {
    var _value6 = value;
    value = _value6.value;
    defaultValue = _value6.defaultValue;
  }

  var result = toNumber(value);

  if (isNaNStrict(result)) {
    return defaultValue;
  }

  return result;
};
/**
 * toInteger
 */


var toInteger = function toInteger(value) {
  var result = toNumber(value);

  if (isNaNStrict(result)) {
    return NaN;
  }

  return _round(result);
};

var toIntegerDefault = function toIntegerDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value,defaultValue')) {
    var _value7 = value;
    value = _value7.value;
    defaultValue = _value7.defaultValue;
  }

  var result = toInteger(value);

  if (isNaNStrict(result)) {
    return defaultValue;
  }

  return result;
};

var numToString = numberToString;
var strToNumber = stringToNumber;
var strToNumberDef = stringToNumberDefault;
var strToInteger = stringToInteger;
var strToIntegerDef = stringToIntegerDefault;
var numToStr = numberToString;
var strToNum = stringToNumber;
var strToNumDef = stringToNumberDefault;
var strToInt = stringToInteger;
var strToIntDef = stringToIntegerDefault;
var toNum = toNumber;
var toNumDef = toNumberDefault;
var toInt = toInteger;
var toIntDef = toIntegerDefault;
module.exports = {
  numberToString: numberToString,
  stringToNumber: stringToNumber,
  stringToNumberDefault: stringToNumberDefault,
  stringToInteger: stringToInteger,
  stringToIntegerDefault: stringToIntegerDefault,
  toNumber: toNumber,
  toNumberDefault: toNumberDefault,
  toInteger: toInteger,
  toIntegerDefault: toIntegerDefault,
  numToString: numToString,
  strToNumber: strToNumber,
  strToNumberDef: strToNumberDef,
  strToInteger: strToInteger,
  strToIntegerDef: strToIntegerDef,
  toNum: toNum,
  toNumDef: toNumDef,
  toInt: toInt,
  toIntDef: toIntDef,
  numToStr: numToStr,
  strToNum: strToNum,
  strToNumDef: strToNumDef,
  strToInt: strToInt,
  strToIntDef: strToIntDef
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

var _require2 = __webpack_require__(25),
    _or = _require2._or,
    _includes = _require2._includes,
    _includesSome = _require2._includesSome,
    _includesAll = _require2._includesAll;

var _require3 = __webpack_require__(19),
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
    throw new RangeError('hook args(methodName) is not [log|info|warn|error|debug]');
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
    throw new RangeError('unHook args(methodName) is not [log|info|warn|error|debug]');
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
    throw new RangeError('accept args(methodName) is not [log|info|warn|error|debug]');
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