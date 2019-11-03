module.exports =
/******/ (function(modules) { // webpackBootstrap
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

var polyfill = __webpack_require__(2);

var _constant = __webpack_require__(3);

var _root = __webpack_require__(4);

var _type = __webpack_require__(5);

var _test = __webpack_require__(18);

var _syntax = __webpack_require__(19);

var _compare = __webpack_require__(20);

var _convert = __webpack_require__(21);

var _number = __webpack_require__(25);

var _string = __webpack_require__(22);

var _object = __webpack_require__(14);

var _array = __webpack_require__(17);

var _consoleHook = __webpack_require__(26);

var VERSION = '2.10.0 beta';
var rootNames = {}; // root

var root = _object._copyProperty(_root, _constant.propertyNames.ROOT);

_object._copyProperty(_root, _constant.propertyNames.ROOT, rootNames); // type


var type = _object._copyProperty(_type, _constant.propertyNames.TYPE);

rootNames = _objectSpread({}, rootNames, {}, type); // test

var test = _object._copyProperty(_test, _constant.propertyNames.TEST);

rootNames = _objectSpread({}, rootNames, {}, test); // syntax

var syntax = _object._copyProperty(_syntax, _constant.propertyNames.SYNTAX);

rootNames = _objectSpread({}, rootNames, {}, syntax); // compare

var compare = _object._copyProperty(_compare, _constant.propertyNames.COMPARE);

rootNames = _objectSpread({}, rootNames, {}, compare); // convert

var convert = _object._copyProperty(_convert, _constant.propertyNames.CONVERT);

rootNames = _objectSpread({}, rootNames, {}, convert); // number

var number = _object._copyProperty(_number, _constant.propertyNames.NUMBER);

_object._copyProperty(_number, _constant.propertyNames.NUMBER, rootNames); // string


var string = _object._copyProperty(_string, _constant.propertyNames.STRING_PUBLIC);

_object._copyProperty(_string, _constant.propertyNames.STRING_ROOT, rootNames); // object


var object = _object._copyProperty(_object, _constant.propertyNames.OBJECT_PUBLIC);

_object._copyProperty(_object, _constant.propertyNames.OBJECT_ROOT, rootNames);

object.objectToString = _type.objectToString;
rootNames.objectToString = _type.objectToString; // array

var array = _object._copyProperty(_array, _constant.propertyNames.ARRAY_PUBLIC);

_object._copyProperty(_array, _constant.propertyNames.ARRAY_ROOT, rootNames); // consoleHook


var consoleHook = _object._copyProperty(_consoleHook, _constant.propertyNames.CONSOLE_HOOK);

module.exports = _objectSpread({
  VERSION: VERSION,
  platform: {},
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

var polyfillDefine = function polyfillDefine() {
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';

      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
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
  } // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map


  if (!Array.prototype.map) {
    Array.prototype.map = function (callback
    /*, thisArg*/
    ) {
      var T, A, k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);
      var len = O.length >>> 0;

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      if (arguments.length > 1) {
        T = arguments[1];
      }

      A = new Array(len);
      k = 0;

      while (k < len) {
        var kValue, mappedValue;

        if (k in O) {
          kValue = O[k];
          mappedValue = callback.call(T, kValue, k, O);
          A[k] = mappedValue;
        }

        k++;
      }

      return A;
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


// type
var _TYPE_BASE = 'Undefined,Null,NaNStrict,' + 'Boolean,Number,Integer,String,' + 'Function,Object,ObjectType,' + 'Array,ArrayType,' + 'Date,RegExp,' + 'Exception,' + 'Symbol,' + 'Map,WeakMap,Set,WeakSet,' + 'BooleanObject,NumberObject,StringObject,' + '';

var IS_TYPE = _TYPE_BASE.split(',').map(function (item) {
  return "is".concat(item);
}).join(',');

var ISNOT_TYPE = _TYPE_BASE.split(',').map(function (item) {
  return "isNot".concat(item);
}).join(',');

var _TYPE_BASE_SHORT = 'Bool,Num,Int,Str,' + 'Func,Obj,ObjType,' + 'Except,' + '';

var IS_TYPE_SHORT = _TYPE_BASE_SHORT.split(',').map(function (item) {
  return "is".concat(item);
}).join(',');

var ISNOT_TYPE_SHORT = _TYPE_BASE_SHORT.split(',').map(function (item) {
  return "isNot".concat(item);
}).join(',');

var TYPE = [IS_TYPE, ISNOT_TYPE, IS_TYPE_SHORT, ISNOT_TYPE_SHORT].join(','); // test

var ROOT = 'clone, cloneDeep,' + 'cloneFunction,' + ''; // test

var TEST = 'checkEqual,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + ''; // syntax

var SYNTAX = 'assert,guard,' + 'sc,if_,switch_,' + ''; // compare

var COMPARE = 'equal, equalDeep,' + 'equalFunction,' + 'or,' + 'match,matchValue,initialValue,' + 'matchAll,matchSomeIndex,matchSome,' + 'matchEvery,matchAnyIndex,matchAny,' + 'isEmpty,' + ''; // convert

var CONVERT = 'numberToString,' + 'stringToNumber,stringToNumberDefault,' + 'stringToInteger,stringToIntegerDefault,' + 'numToString,' + 'strToNumber,strToNumberDef,' + 'strToInteger,strToIntegerDef,' + 'numToStr,' + 'strToNum,strToNumDef,' + 'strToInt,strToIntDef,' + ''; // number

var NUMBER = 'isMultiples,isEven,isOdd,' + 'round,nearEqual,inRange,randomInt,' + ''; // string

var STRING_PUBLIC = 'matchFormat,includes,replaceAll,' + '';
var STRING_ROOT = 'matchFormat,replaceAll,' + ''; // object

var OBJECT_PUBLIC = 'copyProperty,propertyCount,inProperty,' + 'getProperty,setProperty,' + 'copyProp,propCount,inProp,' + '';
var OBJECT_ROOT = 'copyProperty,propertyCount,inProperty,' + 'getProp,setProp,' + 'copyProp,propCount,inProp,' + ''; // array

var ARRAY_PUBLIC = 'equal,' + 'min, max,' + '';
var ARRAY_ROOT = 'min, max,' + ''; // consoleHook

var _CONSOLE_HOOK_BASE = ',Log,Info,Warn,Error,Debug';
var CONSOLE_HOOK = _CONSOLE_HOOK_BASE.split(',').map(function (item) {
  return "hook".concat(item);
}).join(',') + ',' + _CONSOLE_HOOK_BASE.split(',').map(function (item) {
  return "unHook".concat(item);
}).join(',') + ',' + _CONSOLE_HOOK_BASE.split(',').map(function (item) {
  return "accept".concat(item);
}).join(',') + ',' + '';
var propertyNames = {
  ROOT: ROOT,
  TYPE: TYPE,
  TEST: TEST,
  SYNTAX: SYNTAX,
  COMPARE: COMPARE,
  CONVERT: CONVERT,
  NUMBER: NUMBER,
  STRING_PUBLIC: STRING_PUBLIC,
  STRING_ROOT: STRING_ROOT,
  OBJECT_PUBLIC: OBJECT_PUBLIC,
  OBJECT_ROOT: OBJECT_ROOT,
  ARRAY_PUBLIC: ARRAY_PUBLIC,
  ARRAY_ROOT: ARRAY_ROOT,
  CONSOLE_HOOK: CONSOLE_HOOK
};
module.exports = {
  propertyNames: propertyNames
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException,
    _isBooleanObject = _require._isBooleanObject,
    _isNumberObject = _require._isNumberObject,
    _isStringObject = _require._isStringObject,
    _isSymbol = _require._isSymbol,
    _isMap = _require._isMap,
    _isWeakMap = _require._isWeakMap,
    _isSet = _require._isSet,
    _isWeakSet = _require._isWeakSet;

var object = __webpack_require__(14);

var array = __webpack_require__(17);

var _copyProperty = object._copyProperty;
/**
 * cloneFunction
 */

var cloneFunction = {}; // function is no clone

cloneFunction.cloneIgnoreFunction = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isFunction(source)) {
    return undefined;
  }

  return source;
}; // support
//  user object and user arrayType
//  Just good usability


cloneFunction.cloneObjectAndArrayType = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(_isObject(source) || _isArrayType(source))) {
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

  if (!_isObjectType(source)) {
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
}; // support only simple object


cloneFunction.cloneObject = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isObject(source)) {
    return undefined;
  }

  var cloneValue = {};
  bufferWrite(source, cloneValue);

  for (var key in source) {
    cloneValue[key] = __cloneDeep(source[key]);
  }

  return cloneValue;
}; // support only simple array


cloneFunction.cloneArray = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isArray(source)) {
    return undefined;
  }

  var cloneValue = [];
  bufferWrite(source, cloneValue);

  for (var i = 0, l = source.length; i < l; i += 1) {
    var value = source[i];
    cloneValue.push(__cloneDeep(value));
  }

  return cloneValue;
};

cloneFunction.cloneDate = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isDate(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

cloneFunction.cloneRegExp = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isRegExp(source)) {
    return undefined;
  }

  var cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
};

cloneFunction.cloneMap = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isMap(source)) {
    return undefined;
    ;
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

      cloneValue.set(key, value);
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
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isWeakMap(source)) {
    return undefined;
    ;
  }

  return source;
};

cloneFunction.cloneSet = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isSet(source)) {
    return undefined;
    ;
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
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!_isWeakSet(source)) {
    return undefined;
    ;
  }

  return source;
};
/**
 * clone
 */


var _clone = function _clone(source) {
  var __clone = function __clone(value) {
    if (_isUndefined(value)) {
      return undefined;
    }

    for (var i = 0, l = _clone.functions.length; i < l; i += 1) {
      var result = _clone.functions[i](value);

      if (!_isUndefined(result)) {
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

  _clone.add(cloneFunction.cloneObjectAndArrayType);

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

    if (_isUndefined(value)) {
      return undefined;
    }

    for (var i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      var result = _cloneDeep.functions[i](value, function (source, clone) {
        CircularReferenceBuffer.source.push(source);
        CircularReferenceBuffer.clone.push(clone);
      }, __cloneDeep);

      if (!_isUndefined(result)) {
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

  _cloneDeep.add(cloneFunction.cloneObjectAndArrayType);

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

module.exports = _objectSpread({}, __webpack_require__(6), {}, __webpack_require__(7), {}, __webpack_require__(10), {}, __webpack_require__(11), {}, __webpack_require__(12), {}, __webpack_require__(13));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _isUndefined = _typeofCheck('undefined');

var _isNull = function _isNull(value) {
  return value === null;
};

var _isNaNStrict = function _isNaNStrict(value) {
  return value !== value;
};

var _isBoolean = _typeofCheck('boolean');

var _isBooleanObject = function _isBooleanObject(value) {
  return _objectToStringCheck('Boolean') && !_isBoolean(value);
};

var _isNumber = function _isNumber(value) {
  return _typeofCheck('number')(value) && isFinite(value);
};

var _isNumberObject = function _isNumberObject(value) {
  return _objectToStringCheck('Number')(value) && !_typeofCheck('number')(value);
};

var _isInteger = function _isInteger(value) {
  if (!_isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

var _isString = _typeofCheck('string');

var _isStringObject = function _isStringObject(value) {
  return _objectToStringCheck('String') && !_isString(value);
};

var _isFunction = _typeofCheck('function');

var _isObject = function _isObject(value) {
  if (_objectToStringCheck('Object')(value) && !_isNull(value) && !_isUndefined(value)) {
    return true;
  }

  return false;
};

var _isObjectType = function _isObjectType(value) {
  if (_isNull(value)) {
    return false;
  }

  return ['function', 'object'].includes(_typeof(value));
};

var _isArray = _objectToStringCheck('Array');

var _isArrayType = function _isArrayType(value) {
  if (objectToString(value).includes('Array]')) {
    return true;
  }

  return false;
};

var _isDate = _objectToStringCheck('Date');

var _isRegExp = _objectToStringCheck('RegExp');

var _isError = _objectToStringCheck('Error');

var _isNotUndefined = function _isNotUndefined(value) {
  return !_isUndefined(value);
};

var _isNotNull = function _isNotNull(value) {
  return !_isNull(value);
};

var _isNotNaNStrict = function _isNotNaNStrict(value) {
  return !_isNaNStrict(value);
};

var _isNotBoolean = function _isNotBoolean(value) {
  return !_isBoolean(value);
};

var _isNotNumber = function _isNotNumber(value) {
  return !_isNumber(value);
};

var _isNotInteger = function _isNotInteger(value) {
  return !_isInteger(value);
};

var _isNotString = function _isNotString(value) {
  return !_isString(value);
};

var _isNotFunction = function _isNotFunction(value) {
  return !_isFunction(value);
};

var _isNotObject = function _isNotObject(value) {
  return !_isObject(value);
};

var _isNotObjectType = function _isNotObjectType(value) {
  return !_isObjectType(value);
};

var _isNotArray = function _isNotArray(value) {
  return !_isArray(value);
};

var _isNotArrayType = function _isNotArrayType(value) {
  return !_isArrayType(value);
};

var _isNotDate = function _isNotDate(value) {
  return !_isDate(value);
};

var _isNotRegExp = function _isNotRegExp(value) {
  return !_isRegExp(value);
};

var _isNotBooleanObject = function _isNotBooleanObject(value) {
  return !_isBooleanObject(value);
};

var _isNotNumberObject = function _isNotNumberObject(value) {
  return !_isNumberObject(value);
};

var _isNotStringObject = function _isNotStringObject(value) {
  return !_isStringObject(value);
};

module.exports = {
  _typeofCheck: _typeofCheck,
  _objectToStringCheck: _objectToStringCheck,
  objectToString: objectToString,
  _isUndefined: _isUndefined,
  _isNull: _isNull,
  _isNaNStrict: _isNaNStrict,
  _isBoolean: _isBoolean,
  _isNumber: _isNumber,
  _isInteger: _isInteger,
  _isString: _isString,
  _isFunction: _isFunction,
  _isObject: _isObject,
  _isObjectType: _isObjectType,
  _isArray: _isArray,
  _isArrayType: _isArrayType,
  _isDate: _isDate,
  _isRegExp: _isRegExp,
  _isError: _isError,
  _isBooleanObject: _isBooleanObject,
  _isNumberObject: _isNumberObject,
  _isStringObject: _isStringObject,
  _isNotUndefined: _isNotUndefined,
  _isNotNull: _isNotNull,
  _isNotNaNStrict: _isNotNaNStrict,
  _isNotBoolean: _isNotBoolean,
  _isNotNumber: _isNotNumber,
  _isNotInteger: _isNotInteger,
  _isNotString: _isNotString,
  _isNotFunction: _isNotFunction,
  _isNotObject: _isNotObject,
  _isNotObjectType: _isNotObjectType,
  _isNotArray: _isNotArray,
  _isNotArrayType: _isNotArrayType,
  _isNotDate: _isNotDate,
  _isNotRegExp: _isNotRegExp,
  _isNotBooleanObject: _isNotBooleanObject,
  _isNotNumberObject: _isNotNumberObject,
  _isNotStringObject: _isNotStringObject
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _isError = _require._isError;

var _require2 = __webpack_require__(8),
    _inProperty = _require2._inProperty;
/**
 * _isException
 * description:
 *  _isException can determine standard Error objects and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */


var _isException = function _isException(value) {
  if (_inProperty(value, 'name,message')) {
    return true;
  } else if (_isError(value)) {
    return true;
  }

  return false;
};

var _isNotException = function _isNotException(value) {
  return !_isException(value);
};

module.exports = {
  _isException: _isException,
  _isNotException: _isNotException
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = __webpack_require__(9),
    _replaceAll = _require2._replaceAll;
/**
 * _inProperty
 */


var _inProperty = function _inProperty(object, propertyArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!_isObject(object)) {
    return false;
  }

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || _isUndefined(propertyArray[i])) {
      continue;
    }

    if (!_isString(propertyArray[i])) {
      throw new TypeError('_inProperty args(propertyArray) element is not string');
    }

    if (hasOwn) {
      if (!object.hasOwnProperty(propertyArray[i])) {
        return false;
      }
    } else {
      if (!(propertyArray[i] in object)) {
        return false;
      }
    }
  }

  return true;
};

module.exports = {
  _inProperty: _inProperty
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _replaceAll = function _replaceAll(str, before, after) {
  return str.split(before).join(after);
};

module.exports = {
  _replaceAll: _replaceAll
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var _isSymbol = _typeofCheck('symbol');

var _isNotSymbol = function _isNotSymbol(value) {
  return !_isSymbol(value);
};

module.exports = {
  _isSymbol: _isSymbol,
  _isNotSymbol: _isNotSymbol
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var _isMap = _objectToStringCheck('Map');

var _isWeakMap = _objectToStringCheck('WeakMap');

var _isNotMap = function _isNotMap(value) {
  return !_isMap(value);
};

var _isNotWeakMap = function _isNotWeakMap(value) {
  return !_isWeakMap(value);
};

module.exports = {
  _isMap: _isMap,
  _isNotMap: _isNotMap,
  _isWeakMap: _isWeakMap,
  _isNotWeakMap: _isNotWeakMap
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var _isSet = _objectToStringCheck('Set');

var _isWeakSet = _objectToStringCheck('WeakSet');

var _isNotSet = function _isNotSet(value) {
  return !_isSet(value);
};

var _isNotWeakSet = function _isNotWeakSet(value) {
  return !_isWeakSet(value);
};

module.exports = {
  _isSet: _isSet,
  _isNotSet: _isNotSet,
  _isWeakSet: _isWeakSet,
  _isNotWeakSet: _isNotWeakSet
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isBooleanObject = _require._isBooleanObject,
    _isNumberObject = _require._isNumberObject,
    _isStringObject = _require._isStringObject,
    _isNotUndefined = _require._isNotUndefined,
    _isNotNull = _require._isNotNull,
    _isNotNaNStrict = _require._isNotNaNStrict,
    _isNotBoolean = _require._isNotBoolean,
    _isNotNumber = _require._isNotNumber,
    _isNotInteger = _require._isNotInteger,
    _isNotString = _require._isNotString,
    _isNotFunction = _require._isNotFunction,
    _isNotObject = _require._isNotObject,
    _isNotObjectType = _require._isNotObjectType,
    _isNotArray = _require._isNotArray,
    _isNotArrayType = _require._isNotArrayType,
    _isNotDate = _require._isNotDate,
    _isNotRegExp = _require._isNotRegExp,
    _isNotBooleanObject = _require._isNotBooleanObject,
    _isNotNumberObject = _require._isNotNumberObject,
    _isNotStringObject = _require._isNotStringObject;

var _require2 = __webpack_require__(7),
    _isException = _require2._isException,
    _isNotException = _require2._isNotException;

var _require3 = __webpack_require__(10),
    _isSymbol = _require3._isSymbol,
    _isNotSymbol = _require3._isNotSymbol;

var _require4 = __webpack_require__(11),
    _isMap = _require4._isMap,
    _isNotMap = _require4._isNotMap,
    _isWeakMap = _require4._isWeakMap,
    _isNotWeakMap = _require4._isNotWeakMap;

var _require5 = __webpack_require__(12),
    _isSet = _require5._isSet,
    _isNotSet = _require5._isNotSet,
    _isWeakSet = _require5._isWeakSet,
    _isNotWeakSet = _require5._isNotWeakSet;
/**
 * _isTypeCheck
 * description:
 *  check type for array argument.
 */


var _isTypeCheck = function _isTypeCheck(func, argsArray) {
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

var _isTypeCheckArgsFunc = function _isTypeCheckArgsFunc(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _isTypeCheck(func, args);
  };
};

var isUndefined = _isTypeCheckArgsFunc(_isUndefined);

var isNull = _isTypeCheckArgsFunc(_isNull);

var isNaNStrict = _isTypeCheckArgsFunc(_isNaNStrict);

var isBoolean = _isTypeCheckArgsFunc(_isBoolean);

var isNumber = _isTypeCheckArgsFunc(_isNumber);

var isInteger = _isTypeCheckArgsFunc(_isInteger);

var isString = _isTypeCheckArgsFunc(_isString);

var isFunction = _isTypeCheckArgsFunc(_isFunction);

var isObject = _isTypeCheckArgsFunc(_isObject);

var isObjectType = _isTypeCheckArgsFunc(_isObjectType);

var isArray = _isTypeCheckArgsFunc(_isArray);

var isArrayType = _isTypeCheckArgsFunc(_isArrayType);

var isDate = _isTypeCheckArgsFunc(_isDate);

var isRegExp = _isTypeCheckArgsFunc(_isRegExp);

var isException = _isTypeCheckArgsFunc(_isException);

var isBooleanObject = _isTypeCheckArgsFunc(_isBooleanObject);

var isNumberObject = _isTypeCheckArgsFunc(_isNumberObject);

var isStringObject = _isTypeCheckArgsFunc(_isStringObject);

var isSymbol = _isTypeCheckArgsFunc(_isSymbol);

var isMap = _isTypeCheckArgsFunc(_isMap);

var isWeakMap = _isTypeCheckArgsFunc(_isWeakMap);

var isSet = _isTypeCheckArgsFunc(_isSet);

var isWeakSet = _isTypeCheckArgsFunc(_isWeakSet);

var isNotUndefined = _isTypeCheckArgsFunc(_isNotUndefined);

var isNotNull = _isTypeCheckArgsFunc(_isNotNull);

var isNotNaNStrict = _isTypeCheckArgsFunc(_isNotNaNStrict);

var isNotBoolean = _isTypeCheckArgsFunc(_isNotBoolean);

var isNotNumber = _isTypeCheckArgsFunc(_isNotNumber);

var isNotInteger = _isTypeCheckArgsFunc(_isNotInteger);

var isNotString = _isTypeCheckArgsFunc(_isNotString);

var isNotFunction = _isTypeCheckArgsFunc(_isNotFunction);

var isNotObject = _isTypeCheckArgsFunc(_isNotObject);

var isNotObjectType = _isTypeCheckArgsFunc(_isNotObjectType);

var isNotArray = _isTypeCheckArgsFunc(_isNotArray);

var isNotArrayType = _isTypeCheckArgsFunc(_isNotArrayType);

var isNotDate = _isTypeCheckArgsFunc(_isNotDate);

var isNotRegExp = _isTypeCheckArgsFunc(_isNotRegExp);

var isNotException = _isTypeCheckArgsFunc(_isNotException);

var isNotBooleanObject = _isTypeCheckArgsFunc(_isNotBooleanObject);

var isNotNumberObject = _isTypeCheckArgsFunc(_isNotNumberObject);

var isNotStringObject = _isTypeCheckArgsFunc(_isNotStringObject);

var isNotSymbol = _isTypeCheckArgsFunc(_isNotSymbol);

var isNotMap = _isTypeCheckArgsFunc(_isNotMap);

var isNotWeakMap = _isTypeCheckArgsFunc(_isNotWeakMap);

var isNotSet = _isTypeCheckArgsFunc(_isNotSet);

var isNotWeakSet = _isTypeCheckArgsFunc(_isNotWeakSet);

var isUndef = isUndefined;
var isBool = isBoolean;
var isNum = isNumber;
var isInt = isInteger;
var isStr = isString;
var isFunc = isFunction;
var isObj = isObject;
var isObjType = isObjectType;
var isExcept = isException;
var isNotUndef = isNotUndefined;
var isNotBool = isNotBoolean;
var isNotNum = isNotNumber;
var isNotInt = isNotInteger;
var isNotStr = isNotString;
var isNotFunc = isNotFunction;
var isNotObj = isNotObject;
var isNotObjType = isNotObjectType;
var isNotExcept = isNotException;
module.exports = {
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
  isException: isException,
  isBooleanObject: isBooleanObject,
  isNumberObject: isNumberObject,
  isStringObject: isStringObject,
  isSymbol: isSymbol,
  isMap: isMap,
  isWeakMap: isWeakMap,
  isSet: isSet,
  isWeakSet: isWeakSet,
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
  isNotException: isNotException,
  isNotBooleanObject: isNotBooleanObject,
  isNotNumberObject: isNotNumberObject,
  isNotStringObject: isNotStringObject,
  isNotSymbol: isNotSymbol,
  isNotMap: isNotMap,
  isNotWeakMap: isNotWeakMap,
  isNotSet: isNotSet,
  isNotWeakSet: isNotWeakSet,
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjType: isObjType,
  isExcept: isExcept,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjType: isNotObjType,
  isNotExcept: isNotExcept
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(15), {}, __webpack_require__(8), {}, __webpack_require__(16));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isError = _require._isError,
    _isBooleanObject = _require._isBooleanObject,
    _isNumberObject = _require._isNumberObject,
    _isStringObject = _require._isStringObject;

var _require2 = __webpack_require__(8),
    _inProperty = _require2._inProperty;

var _require3 = __webpack_require__(9),
    _replaceAll = _require3._replaceAll;
/**
 * copyProperty
 */


var _copyProperty = function _copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || _isUndefined(propertyArray[i])) {
      continue;
    }

    if (!_isString(propertyArray[i])) {
      throw new TypeError('copyProperty args(propertyArray) element is not string');
    }

    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }

  return toObject;
};

var copyProperty = function copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_inProperty(fromObject, 'fromObject,propertyArray')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyArray = _fromObject.propertyArray;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  }

  if (!_isObject(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError('copyProperty args(propertyArray) is not [array|string]');
    }
  }

  if (!_isObject(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  _copyProperty(fromObject, propertyArray, toObject);
};
/**
 * propertyCount
 */


var _propertyCount = function _propertyCount(object) {
  var result = 0;

  for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    result += 1;
  }

  return result;
};

var propertyCount = function propertyCount(object) {
  if (!_isObject(object)) {
    throw new TypeError('propertyCount args(object) is not object');
  }

  return _propertyCount(object);
};
/**
 * getProperty
 */


var _getProperty = function _getProperty(object, propertyPath) {
  var result = object;
  var propertyArray = propertyPath.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      return undefined;
    }

    if (_isUndefined(result[propertyArray[i]])) {
      return undefined;
    }

    result = result[propertyArray[i]];
  }

  return result;
};

var getProperty = function getProperty(object, propertyPath) {
  if (_inProperty(object, 'object, propertyPath')) {
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
  }

  if (!_isObject(object)) {
    throw new TypeError('getProperty args(object) is not object');
  }

  if (!_isString(propertyPath)) {
    throw new TypeError('getProperty args(propertyPath) is not string');
  }

  return _getProperty(object, propertyPath);
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

  for (var _i2 = 0, _l = propertyArray.length - 1; _i2 < _l; _i2 += 1) {
    if (!(_isObject(result[propertyArray[_i2]]) || _isArrayType(result[propertyArray[_i2]]))) {
      result[propertyArray[_i2]] = {};
    }

    result = result[propertyArray[_i2]];
  }

  result[propertyArray[propertyArray.length - 1]] = value;
};

var setProperty = function setProperty(object, propertyPath, value) {
  if (_inProperty(object, 'object, propertyPath, value')) {
    var _object2 = object;
    object = _object2.object;
    propertyPath = _object2.propertyPath;
    value = _object2.value;
  }

  if (!_isObject(object)) {
    throw new TypeError('setProperty args(object) is not object');
  }

  if (!_isString(propertyPath)) {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = __webpack_require__(8),
    _inProperty = _require2._inProperty;
/**
 * inProperty
 */


var inProperty = function inProperty(object, propertyArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (_inProperty(object, 'object,propertyArray')) {
    var _object = object;
    object = _object.object;
    propertyArray = _object.propertyArray;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  } // no object check


  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError('inProperty args(propertyArray) is not [array|string]');
    }
  }

  if (!_isBoolean(hasOwn)) {
    throw new TypeError('inProperty args(hasOwn) is not boolean');
  }

  return _inProperty(object, propertyArray, hasOwn);
};

var inProp = inProperty;
module.exports = {
  inProperty: inProperty,
  inProp: inProp
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = __webpack_require__(8),
    _inProperty = _require2._inProperty;
/**
 * array.equal
 */


var _equal = function _equal(value1, value2) {
  if (value1.length !== value2.length) {
    return false;
  }

  for (var i = 0, l = value1.length; i < l; i += 1) {
    if (_isArray(value1[i]) && _isArray(value2[i])) {
      if (_equal(value1[i], value2[i]) === false) {
        return false;
      }
    } else if (value1[i] !== value2[i]) {
      return false;
    }
  }

  return true;
};

var equal = function equal(value1, value2) {
  if (_inProperty(value1, 'value1,value2')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
  }

  if (!_isArray(value1)) {
    throw new TypeError('array.equal args(value) is not array');
  }

  if (!_isArray(value2)) {
    throw new TypeError('array.equal args(value2) is not array');
  }

  return _equal(value1, value2);
};
/**
 * array.min max
 */


var _min = function _min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 1, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

var min = function min(array) {
  if (!_isArray(array)) {
    throw new TypeError('min args(array) is not array');
  }

  return _min(array);
};

var _max = function _max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 1, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError('_max args(array) element is not number');
    }

    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

var max = function max(array) {
  if (!_isArray(array)) {
    throw new TypeError('max args(array) is not array');
  }

  return _max(array);
};

module.exports = {
  _equal: _equal,
  _min: _min,
  _max: _max,
  equal: equal,
  min: min,
  max: max
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var checkEqual = function checkEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!_isString(message)) {
    throw new TypeError('checkEqual args message is not string');
  }

  checkEqual.testCounter += 1;

  if (_isNaNStrict(a) && _isNaNStrict(b)) {
    return true;
  }

  if (a === b) {
    return true;
  }

  message = "Test: ".concat(checkEqual.testCounter, ": ").concat(message, "\n") + '  A !== B\n' + "  A = ".concat(String(a), "\n") + "  B = ".concat(String(b));
  console.log(message);
  return false;
};

checkEqual.testCounter = 0;
/**
 * isThrown isThrownValue isThrownException isNotThrown
 */

var isThrown = function isThrown(targetFunc, compareFunc) {
  if (!_isFunction(targetFunc)) {
    throw new TypeError('isThrown args targetFunc is not function');
  }

  if (!(_isFunction(compareFunc) || _isUndefined(compareFunc))) {
    throw new TypeError('isThrown args compareFunc is not function');
  }

  try {
    targetFunc();
  } catch (e) {
    if (_isUndefined(compareFunc)) {
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
  if (!(_isString(exceptionName) || _isUndefined(exceptionName))) {
    throw new TypeError('isThrownException args exceptionName is not string');
  }

  return isThrown(targetFunc, function (thrown) {
    if (_isException(thrown)) {
      if (_isUndefined(exceptionName)) {
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
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;
/**
 * assert
 */


var assert = function assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!_isBoolean(value)) {
    throw new TypeError('assert args(value) is not boolean|message:' + "|message:".concat(message));
  }

  if (!_isString(message)) {
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

  if (!_isFunction(guardFunc)) {
    throw new TypeError('guard args(guardFunc) is not function');
  }

  var result = guardFunc();

  if (!_isArray(result)) {
    throw new TypeError('guard args(guardFunc result) is not array');
  }

  for (var i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if (i === result.length - 1 && _isUndefined(result[i])) {
      continue;
    }

    var resultValue = undefined;
    var message = '';

    if (_isArray(result[i])) {
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

    if (!_isBoolean(resultValue)) {
      throw new TypeError('guard args(guardFunc resultArray element value) is not boolean');
    }

    if (resultValue === false) {
      guard_message = message;

      if (!_isUndefined(runFunc)) {
        if (!_isFunction(runFunc)) {
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
  if (_isFunction(value)) {
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
  if (!_isBoolean(condition)) {
    throw new TypeError('if_ args(condition) is not boolean');
  }

  var checkSyntax = function checkSyntax(args) {
    if (!_isObject(args)) {
      throw new TypeError('if_() args is not object');
    }

    if (_isUndefined(args.then) && _isUndefined(args["else"])) {
      throw new ReferenceError('if_() parameter args(then,else) is not defined');
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
    if (!_isArray(args)) {
      throw new TypeError('switch_() args is not array');
    }

    for (var i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (i === args.length - 1 && _isUndefined(args[i])) {
        continue;
      }

      if (!_isArray(args[i])) {
        throw new TypeError('switch_() args is not array in array');
      }
    }

    for (var _i = 0; _i < args.length; _i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (_i === args.length - 1 && _isUndefined(args[_i])) {
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException,
    _isMap = _require._isMap,
    _isWeakMap = _require._isWeakMap,
    _isSet = _require._isSet,
    _isWeakSet = _require._isWeakSet,
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

var _require2 = __webpack_require__(14),
    _copyProperty = _require2._copyProperty,
    _propertyCount = _require2._propertyCount,
    _inProperty = _require2._inProperty;
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
  if (_inProperty(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('or args(compareArray) is not array');
  }

  return _or(value, compareArray);
};
/**
 * match
 */


var _match = function _match(value, compareArray) {
  if (_isString(value)) {
    for (var i = 0, l = compareArray.length; i < l; i += 1) {
      var element = compareArray[i];
      var result = false;

      if (_isRegExp(element)) {
        result = value.match(element) !== null;
      } else if (_isFunction(element)) {
        result = element(value);

        if (!_isBoolean(result)) {
          throw new TypeError('_match args(compareArray element function result) is not boolean');
        }
      } else {
        result = value === element;
      }

      if (result) {
        return true;
      }
    }

    return false;
  } else {
    for (var _i = 0, _l = compareArray.length; _i < _l; _i += 1) {
      var _element = compareArray[_i];

      var _result = void 0;

      if (_isFunction(_element)) {
        _result = _element(value);

        if (!_isBoolean(_result)) {
          throw new TypeError('_match args(compareArray element function result) is not boolean');
        }
      } else {
        _result = value === _element;
      }

      if (_result) {
        return true;
      }
    }

    return false;
  }
};

var match = function match(value, compareArray) {
  if (_inProperty(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('match args(compareArray) is not array');
  }

  return _match(value, compareArray);
};
/**
 * matchAll
 */


var _matchAll = function _matchAll(valueArray, compareArray) {
  var result = false;

  for (var i = 0, l = valueArray.length; i < l; i += 1) {
    if (_match(valueArray[i], compareArray)) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
};

var matchAll = function matchAll(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('matchAll args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(valueArray, compareArray);
};
/**
 * matchSome
 */


var _matchSomeIndex = function _matchSomeIndex(valueArray, compareArray) {
  var result = -1;

  for (var i = 0, l = valueArray.length; i < l; i += 1) {
    if (_match(valueArray[i], compareArray)) {
      result = i;
      break;
    }
  }

  return result;
};

var _matchSome = function _matchSome(valueArray, compareArray) {
  return _matchSomeIndex(valueArray, compareArray) !== -1;
};

var matchSomeIndex = function matchSomeIndex(valueArray, compareArray) {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    var _valueArray2 = valueArray;
    valueArray = _valueArray2.valueArray;
    compareArray = _valueArray2.compareArray;
  }

  if (!_isArray(valueArray)) {
    throw new TypeError('matchSomeIndex args(valueArray) is not array');
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchSomeIndex args(compareArray) is not array');
  }

  return _matchSomeIndex(valueArray, compareArray);
};

var matchSome = function matchSome(valueArray, compareArray) {
  return matchSomeIndex(valueArray, compareArray) !== -1;
};
/**
 * matchValue
 */


var _matchValue = function _matchValue(value, compareArray, inMatchValue) {
  if (_match(value, compareArray)) {
    return inMatchValue;
  }

  return value;
};

var matchValue = function matchValue(value, compareArray, inMatchValue) {
  if (_inProperty(value, 'value,compareArray,inMatchValue')) {
    var _value3 = value;
    value = _value3.value;
    compareArray = _value3.compareArray;
    inMatchValue = _value3.inMatchValue;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('matchValue args(compareArray) is not array');
  }

  return _matchValue(value, compareArray, inMatchValue);
};
/**
 * initialValue
 */


var _initialValue = function _initialValue(value, inMatchValue) {
  if (_match(value, [_isUndefined])) {
    return inMatchValue;
  }

  return value;
};

var initialValue = function initialValue(value, inMatchValue) {
  if (_inProperty(value, 'value,inMatchValue')) {
    var _value4 = value;
    value = _value4.value;
    inMatchValue = _value4.inMatchValue;
  }

  return _initialValue(value, inMatchValue);
};
/**
 * isEmpty
 */


var isEmpty = function isEmpty(value) {
  return _match(value, [undefined, null, '', function (value) {
    return _isObject(value) && _propertyCount(value) === 0;
  }, function (value) {
    return _isArrayType(value) && value.length === 0;
  }]);
};
/**
 * equalFunction
 */


var equalFunction = {}; // function is no recursive call

equalFunction.equalFunction = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isFunction(value1, value2)) {
    return;
  }

  return value1 === value2;
};

equalFunction.equalObject = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isObject(value1, value2)) {
    return;
  }

  var value1Keys = Object.keys(value1);
  var value2Keys = Object.keys(value2);

  if (value1Keys.length !== value2Keys.length) {
    return false;
  }

  for (var i = 0, l = value1Keys.length; i < l; i += 1) {
    var key = value1Keys[i];

    if (__equalDeep(value1[key], value2[key]) === false) {
      return false;
    }
  }

  return true;
};

equalFunction.equalArrayType = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isArrayType(value1, value2)) {
    return;
  }

  if (value1.length !== value2.length) {
    return false;
  }

  for (var i = 0, l = value1.length; i < l; i += 1) {
    if (__equalDeep(value1[i], value2[i]) === false) {
      return false;
    }
  }

  return true;
};

equalFunction.equalDate = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isDate(value1, value2)) {
    return;
  }

  return value1.getTime() === value2.getTime();
};

equalFunction.equalRegExp = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isRegExp(value1, value2)) {
    return;
  }

  return value1.source === value2.source;
};

equalFunction.equalMap = function (value1, value2) {
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isMap(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

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
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakMap(value1, value2)) {
    return;
  }

  if (value1.size !== value2.size) {
    return false;
  }

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
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isSet(value1, value2)) {
    return;
    ;
  }

  if (value1.size !== value2.size) {
    return false;
  }

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
  var __equalDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v1, v2) {
    return v1 === v2;
  };

  if (!isWeakSet(value1, value2)) {
    return;
    ;
  }

  if (value1.size !== value2.size) {
    return false;
  }

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

      if (!_isUndefined(result)) {
        return result;
      }
    }

    return value1 === value2;
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
  if (_inProperty(value1, 'value1,value2')) {
    var _value5 = value1;
    value1 = _value5.value1;
    value2 = _value5.value2;
  }

  return _equal(value1, value2);
};

_copyProperty(_equal, 'clear,reset,add,' + '', equal);
/**
 * equalDeep
 */


var _equalDeep = function _equalDeep(value1, value2) {
  var __equal = function __equal(value1, value2) {
    for (var i = 0, l = _equalDeep.functions.length; i < l; i += 1) {
      var result = _equalDeep.functions[i](value1, value2, __equal);

      if (!_isUndefined(result)) {
        return result;
      }
    }

    return value1 === value2;
  };

  return __equal(value1, value2);
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
  if (_inProperty(value1, 'value1,value2')) {
    var _value6 = value1;
    value1 = _value6.value1;
    value2 = _value6.value2;
  }

  return _equalDeep(value1, value2);
};

_copyProperty(_equalDeep, 'clear,reset,add,' + '', equalDeep);

var matchEvery = matchAll;
var matchAnyIndex = matchSomeIndex;
var matchAny = matchSome;
module.exports = {
  _equal: _equal,
  _equalDeep: _equalDeep,
  _or: _or,
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _matchAll: _matchAll,
  _matchSomeIndex: _matchSomeIndex,
  _matchSome: _matchSome,
  equal: equal,
  equalDeep: equalDeep,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  matchAll: matchAll,
  matchSomeIndex: matchSomeIndex,
  matchSome: matchSome,
  equalFunction: equalFunction,
  matchEvery: matchEvery,
  matchAnyIndex: matchAnyIndex,
  matchAny: matchAny,
  isEmpty: isEmpty
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException,
    _isNotUndefined = _require._isNotUndefined,
    _isNotNull = _require._isNotNull,
    _isNotNaNStrict = _require._isNotNaNStrict,
    _isNotBoolean = _require._isNotBoolean,
    _isNotNumber = _require._isNotNumber,
    _isNotInteger = _require._isNotInteger,
    _isNotString = _require._isNotString,
    _isNotFunction = _require._isNotFunction,
    _isNotObject = _require._isNotObject,
    _isNotArray = _require._isNotArray,
    _isNotDate = _require._isNotDate,
    _isNotRegExp = _require._isNotRegExp,
    _isNotException = _require._isNotException;

var _require2 = __webpack_require__(20),
    _matchValue = _require2._matchValue,
    _initialValue = _require2._initialValue;

var _require3 = __webpack_require__(22),
    _matchFormat = _require3._matchFormat;

var _require4 = __webpack_require__(14),
    _copyProperty = _require4._copyProperty,
    _propertyCount = _require4._propertyCount,
    _inProperty = _require4._inProperty;
/**
 * numberToString
 */


var _numberToString = function _numberToString(value, radix) {
  radix = _initialValue(radix, 10);
  return value.toString(radix);
};

var numberToString = function numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (_inProperty(value, 'value')) {
    var _value = value;
    value = _value.value;
    var _value$radix = _value.radix;
    radix = _value$radix === void 0 ? 10 : _value$radix;
  }

  if (!_isNumber(value)) {
    throw new TypeError('numberToString args(value) is not number');
  }

  if (!_isInteger(radix)) {
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

  if (!_isNumber(result)) {
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
  if (_inProperty(value, 'value')) {
    var _value2 = value;
    value = _value2.value;
  }

  if (!_isString(value)) {
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
  if (_inProperty(value, 'value')) {
    var _value3 = value;
    value = _value3.value;
    defaultValue = _value3.defaultValue;
  }

  if (!_isString(value)) {
    throw new TypeError('stringToNumberDefault args(value) is not string');
  }

  return _stringToNumberDefault(value, defaultValue);
};
/**
 * stringToInteger
 */


var __stringToInteger = function __stringToInteger(value, defaultValueFunc) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (value === '') {
    return defaultValueFunc();
  }

  if (!_matchFormat(String(radix) + '_base_number', value)) {
    return defaultValueFunc();
  }

  var result = parseInt(value, radix);

  if (!_isInteger(result)) {
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

  if (_inProperty(value, 'value')) {
    var _value4 = value;
    value = _value4.value;
    var _value4$radix = _value4.radix;
    radix = _value4$radix === void 0 ? 10 : _value4$radix;
  }

  if (!_isString(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!_isInteger(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToInteger(value, radix);
};

var _stringToIntegerDefault = function _stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return __stringToInteger(value, function () {
    return defaultValue;
  }, radix);
};

var stringToIntegerDefault = function stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (_inProperty(value, 'value')) {
    var _value5 = value;
    value = _value5.value;
    defaultValue = _value5.defaultValue;
    var _value5$radix = _value5.radix;
    radix = _value5$radix === void 0 ? 10 : _value5$radix;
  }

  if (!_isString(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!_isInteger(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToIntegerDefault(value, defaultValue, radix);
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
module.exports = {
  numberToString: numberToString,
  stringToNumber: stringToNumber,
  stringToNumberDefault: stringToNumberDefault,
  stringToInteger: stringToInteger,
  stringToIntegerDefault: stringToIntegerDefault,
  numToString: numToString,
  strToNumber: strToNumber,
  strToNumberDef: strToNumberDef,
  strToInteger: strToInteger,
  strToIntegerDef: strToIntegerDef,
  numToStr: numToStr,
  strToNum: strToNum,
  strToNumDef: strToNumDef,
  strToInt: strToInt,
  strToIntDef: strToIntDef
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, __webpack_require__(23), {}, __webpack_require__(9), {}, __webpack_require__(24));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = __webpack_require__(20),
    _match = _require2._match;

var _require3 = __webpack_require__(8),
    _inProperty = _require3._inProperty;
/**
 * matchFormat
 */


var _matchFormat = function _matchFormat(formatName, value) {
  switch (formatName) {
    case 'zenkaku':
      return value.match(/^[^\x01-\x7E\xA1-\xDF]+$/) ? true : false;

    case 'hiragana':
      return value.match(/^[\u3041-\u3096]+$/) ? true : false;

    case 'katakana':
      return value.match(/^[\u30a1-\u30f6]+$/) ? true : false;

    case 'alphabet-number':
      return value.match(/^[0-9a-zA-Z]+$/) ? true : false;

    case 'number':
      return value.match(/^[0-9]+$/) ? true : false;

    case 'alphabet':
      return value.match(/^[a-zA-Z]+$/) ? true : false;

    case 'upper_alphabet':
      return value.match(/^[A-Z]+$/) ? true : false;

    case 'lower_alphabet':
      return value.match(/^[a-z]+$/) ? true : false;

    case 'integer':
      return value.match(/^[+|-]?[0-9]+$/) ? true : false;

    case 'float_only':
      return value.match(/^[-|+]?[0-9]*\.[0-9]+$/) ? true : false;

    case 'float_integer':
      return value.match(/^[-|+]?[0-9]*\.[0-9]+$|^[+|-]?[0-9]+$/) ? true : false;

    case 'float_more':
      return value.match(/^[-|+]?[0-9]*\.[0-9]*$|^[+|-]?[0-9]+$|^[-|+]?[0-9]+\.?[0-9]*([eE][+-]?[0-9]+)?$/) ? true : false;
    // integer + float + exponential notation
    // return (value.match(new RegExp(
    //   '^[-|+]?[0-9]*\\.[0-9]*$' +
    //   '|^[+|-]?[0-9]+$' +
    //   '|^[-|+]?[0-9]+\\.?[0-9]*([eE][+-]?[0-9]+)?$'
    // , 'g'))) ? true : false;

    case '2_base_number':
    case 'binary':
      return value.match(/^[-|+]?[01]+$/) ? true : false;

    case '3_base_number':
      return value.match(/^[-|+]?[0-2]+$/) ? true : false;

    case '4_base_number':
      return value.match(/^[-|+]?[0-3]+$/) ? true : false;

    case '5_base_number':
      return value.match(/^[-|+]?[0-4]+$/) ? true : false;

    case '6_base_number':
      return value.match(/^[-|+]?[0-5]+$/) ? true : false;

    case '7_base_number':
      return value.match(/^[-|+]?[0-6]+$/) ? true : false;

    case '8_base_number':
    case 'octal':
      return value.match(/^[-|+]?[0-7]+$/) ? true : false;

    case '9_base_number':
      return value.match(/^[-|+]?[0-8]+$/) ? true : false;

    case '10_base_number':
      return value.match(/^[-|+]?[0-9]+$/) ? true : false;

    case '11_base_number':
      return value.match(/^[-|+]?[0-9A]+$|^[-|+]?[0-9a]+$/) ? true : false;

    case '12_base_number':
      return value.match(/^[-|+]?[0-9AB]+$|^[-|+]?[0-9ab]+$/) ? true : false;

    case '13_base_number':
      return value.match(/^[-|+]?[0-9A-C]+$|^[-|+]?[0-9a-c]+$/) ? true : false;

    case '14_base_number':
      return value.match(/^[-|+]?[0-9A-D]+$|^[-|+]?[0-9a-d]+$/) ? true : false;

    case '15_base_number':
      return value.match(/^[-|+]?[0-9A-E]+$|^[-|+]?[0-9a-e]+$/) ? true : false;

    case '16_base_number':
    case 'hex':
      return value.match(/^[-|+]?[0-9A-F]+$|^[-|+]?[0-9a-f]+$/) ? true : false;

    case 'date':
      // y/m/d
      return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}$/) ? true : false;

    case 'date-minutes':
      // y/m/d h:n
      return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}$/) ? true : false;

    case 'date-seconds':
      // y/m/d h:n:s
      return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}$/) ? true : false;

    case 'date-milliseconds':
      // y/m/d h:n:s.ms
      return value.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}\.\d{1,3}$/) ? true : false;

    default:
      throw new RangeError("matchFormat args(formatName) is not exists format. ".concat(formatName));
  }
};

var matchFormat = function matchFormat(formatName, value) {
  if (_inProperty(formatName, 'formatName,value')) {
    var _formatName = formatName;
    formatName = _formatName.formatName;
    value = _formatName.value;
  }

  if (!_isString(formatName)) {
    throw new TypeError('matchFormat args(formatName) is not string');
  }

  if (!_isString(value)) {
    throw new TypeError('matchFormat args(value) is not string');
  }

  return _matchFormat(formatName, value);
};
/**
 * includes
 */


var _includes = function _includes(value, compareArray) {
  var compareFunctionArray = compareArray.map(function (element) {
    if (_isRegExp(element)) {
      return element;
    } else if (_isString(element)) {
      return element === '' ? function () {
        return false;
      } : function (value) {
        return value.includes(element);
      };
    } else {
      throw new TypeError('_includes args(compareArray element) is not [regexp|string]');
    }
  });
  return _match(value, compareFunctionArray);
};

var includes = function includes(value, compareArray) {
  if (_inProperty(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('includes args(compareArray) is not array');
  }

  return _includes(value, compareArray);
};

var _replaceAll = function _replaceAll(str, before, after) {
  return str.split(before).join(after);
};

var replaceAll = function replaceAll(str, before, after) {
  if (_inProperty(str, 'str,before,after')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
  }

  if (!_isString(str)) {
    throw new TypeError('replaceAll args(str) is not string');
  }

  if (!_isString(before)) {
    throw new TypeError('replaceAll args(before) is not string');
  }

  if (!_isString(after)) {
    throw new TypeError('replaceAll args(after) is not string');
  }

  return _replaceAll(str, before, after);
};

module.exports = {
  _matchFormat: _matchFormat,
  _includes: _includes,
  _replaceAll: _replaceAll,
  matchFormat: matchFormat,
  includes: includes,
  replaceAll: replaceAll
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = __webpack_require__(8),
    _inProperty = _require2._inProperty;

var _require3 = __webpack_require__(9),
    _replaceAll = _require3._replaceAll;

var replaceAll = function replaceAll(str, before, after) {
  if (_inProperty(str, 'str,before,after')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
  }

  if (!_isString(str)) {
    throw new TypeError('replaceAll args(str) is not string');
  }

  if (!_isString(before)) {
    throw new TypeError('replaceAll args(before) is not string');
  }

  if (!_isString(after)) {
    throw new TypeError('replaceAll args(after) is not string');
  }

  return _replaceAll(str, before, after);
};

module.exports = {
  replaceAll: replaceAll
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = __webpack_require__(14),
    _copyProperty = _require2._copyProperty,
    _propertyCount = _require2._propertyCount,
    _inProperty = _require2._inProperty;
/**
 * isMultiples isEven isOdd
 */


var _isMultiples = function _isMultiples(number, radix) {
  return number % radix === 0;
};

var isMultiples = function isMultiples(number, radix) {
  if (_inProperty(number, 'number,radix')) {
    var _number = number;
    number = _number.number;
    radix = _number.radix;
  }

  if (!_isInteger(number)) {
    throw new TypeError('isMultiples args(number) is not integer');
  }

  if (!_isInteger(radix)) {
    throw new TypeError('isMultiples args(radix) is not integer');
  }

  return _isMultiples(number, radix);
};

var isEven = function isEven(number) {
  return isMultiples(number, 2);
};

var isOdd = function isOdd(number) {
  return !_.isMultiples(number, 2);
};
/**
 * round
 */


var _round = function _round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var powResult;
  var plusFlag = 0 <= value ? true : false;
  powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

var round = function round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (_inProperty(value, 'value')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  }

  if (!_isInteger(digit)) {
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
  if (_inProperty(value1, 'value1,value2,diff')) {
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
    diff = _value2.diff;
  }

  if (!_isNumber(value1)) {
    throw new TypeError('nearEqual args(value1) is not number');
  }

  if (!_isNumber(value2)) {
    throw new TypeError('nearEqual args(value2) is not number');
  }

  if (!_isNumber(diff)) {
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
  if (_inProperty(value, 'value,from,to')) {
    var _value3 = value;
    value = _value3.value;
    from = _value3.from;
    to = _value3.to;
  }

  if (!_isNumber(value)) {
    throw new TypeError('inRange args(value) is not number');
  }

  if (!_isNumber(from)) {
    throw new TypeError('inRange args(from) is not number');
  }

  if (!_isNumber(to)) {
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
  if (_inProperty(min, 'min,max')) {
    var _min = min;
    min = _min.min;
    max = _min.max;
  }

  if (!_isInteger(min)) {
    throw new TypeError('randomInt args(min) is not integer');
  }

  if (!_isInteger(max)) {
    throw new TypeError('randomInt args(max) is not integer');
  }

  return _randomInt(min, max);
};

module.exports = {
  _isMultiples: _isMultiples,
  _round: _round,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  isMultiples: isMultiples,
  isEven: isEven,
  isOdd: isOdd,
  round: round,
  nearEqual: nearEqual,
  inRange: inRange,
  randomInt: randomInt
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = __webpack_require__(20),
    _or = _require2._or;

var _require3 = __webpack_require__(22),
    _includes = _require3._includes;

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

  if (!_isFunction(hookFunc)) {
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

    var messageArgsAll = messageArgs.map(function (value) {
      return String(value);
    }).join(' ');
    var acceptFlag = acceptArray.length === 0;

    if (acceptFlag === false) {
      acceptFlag = _includes(messageArgsAll, acceptArray);
    }

    if (acceptFlag && _isArray(rejectArray)) {
      acceptFlag = !_includes(messageArgsAll, rejectArray);
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

  if (!_isArray(acceptArray)) {
    throw new TypeError('accept args(acceptArray) is not array');
  }

  if (!(_isUndefined(rejectArray) || _isArray(rejectArray))) {
    throw new TypeError('accept args(rejectArray) is not array');
  }

  if (!_isFunction(hookFunc)) {
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