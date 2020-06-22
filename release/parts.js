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
exports["default"] = exports.parts = exports.consoleHook = exports.array = exports.object = exports.string = exports.number = exports.convert = exports.compare = exports.syntax = exports.test = exports.type = exports.isPrefixSafixAdd = exports.platform = exports.root = exports._map = exports._replaceAll = exports._copyProperty = exports.propertyNames = exports.rootNames = exports.VERSION = void 0;

var _root2 = _interopRequireDefault(__webpack_require__(2));

var _platform2 = _interopRequireDefault(__webpack_require__(19));

var _type2 = _interopRequireDefault(__webpack_require__(4));

var _test2 = _interopRequireDefault(__webpack_require__(29));

var _syntax2 = _interopRequireDefault(__webpack_require__(26));

var _compare2 = _interopRequireDefault(__webpack_require__(42));

var _convert2 = _interopRequireDefault(__webpack_require__(56));

var _number2 = _interopRequireDefault(__webpack_require__(25));

var _string2 = _interopRequireDefault(__webpack_require__(38));

var _object2 = _interopRequireDefault(__webpack_require__(15));

var _array2 = _interopRequireDefault(__webpack_require__(30));

var _consoleHook2 = _interopRequireDefault(__webpack_require__(57));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VERSION = '6.1.0 beta';
exports.VERSION = VERSION;
var rootNames = {};
exports.rootNames = rootNames;
var propertyNames = {};
exports.propertyNames = propertyNames;
var _copyProperty = _object2["default"]._copyProperty;
exports._copyProperty = _copyProperty;
var _replaceAll = _string2["default"]._replaceAll;
exports._replaceAll = _replaceAll;
var _map = _array2["default"]._map; // root

exports._map = _map;
propertyNames.ROOT = 'clone, cloneDeep,' + 'cloneFunction,' + '';
var root = {};
exports.root = root;

_copyProperty(_root2["default"], propertyNames.ROOT, root);

_copyProperty(_root2["default"], propertyNames.ROOT, rootNames); // platform


propertyNames.PLATFORM = 'name,' + 'isWebBrowser,' + 'isWindowsScriptHost,' + 'isGoogleAppsScript,' + 'isJest,' + 'isNodeJs,' + 'isDeno,' + 'browserName,' + 'isChrome,' + 'isFirefox,' + 'isEdge,' + 'isInternetExplorer,' + 'isSafari,' + 'isOpera,' + 'buildMode,' + '';

var platform = _copyProperty(_platform2["default"], propertyNames.PLATFORM); // type


exports.platform = platform;
propertyNames._TYPE_BASE = 'Undefined,Null,NaNStrict,' + 'Boolean,Number,Integer,String,' + 'Function,Object,ObjectType,' + 'Array,ArrayType,' + 'Date,RegExp,' + 'Exception,' + 'EmptyObject,EmptyArray,' + 'Symbol,' + 'Map,WeakMap,Set,WeakSet,' + 'BooleanObject,NumberObject,StringObject,' + 'Bool,Num,Int,Str,' + 'Func,Obj,ObjType,' + 'Except,' + 'EmptyObj,' + '';

var isPrefixSafixAdd = function isPrefixSafixAdd(prefix, safix, commaString) {
  return _map(_replaceAll(commaString, ' ', '').split(','), function (item) {
    return prefix + item + safix;
  }).join(',');
};

exports.isPrefixSafixAdd = isPrefixSafixAdd;
propertyNames.TYPE = [isPrefixSafixAdd('is', '', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', '', propertyNames._TYPE_BASE), isPrefixSafixAdd('is', 'All', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', 'All', propertyNames._TYPE_BASE), isPrefixSafixAdd('is', 'Array', propertyNames._TYPE_BASE), isPrefixSafixAdd('isNot', 'Array', propertyNames._TYPE_BASE)].join(',');
var type = {};
exports.type = type;

_copyProperty(_type2["default"], propertyNames.TYPE, type);

_copyProperty(_type2["default"], propertyNames.TYPE, rootNames); // test


propertyNames.TEST_PUBLIC = 'checkEqual, checkCompare,' + 'describe, it, test, expect,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'testCounter,';
propertyNames.TEST_ROOT = 'isThrown,isThrownValue,isThrownException,isNotThrown,' + '';
var test = {};
exports.test = test;

_copyProperty(_test2["default"], propertyNames.TEST_PUBLIC, test);

_copyProperty(_test2["default"], propertyNames.TEST_ROOT, rootNames); // syntax


propertyNames.SYNTAX = 'assert,guard,' + 'functionValue,' + 'sc,if_,switch_,' + 'loop,' + 'canUseMap, canUseSet,' + '';

var syntax = _copyProperty(_syntax2["default"], propertyNames.SYNTAX);

exports.syntax = syntax;

_copyProperty(_syntax2["default"], propertyNames.SYNTAX, rootNames); // compare


propertyNames.COMPARE = 'equal, equalDeep,' + 'equalFunction,' + 'or,' + 'match, matchValue, initialValue,' + 'allMatch, indexOfMatch, someMatch,' + 'matchSome, matchSomeValue,' + 'allMatchSome, indexOfMatchSome, someMatchSome,' + 'matchAll, matchAllValue,' + 'allMatchAll, indexOfMatchAll, someMatchAll,' + 'includes, includesSome, includesAll,' + '';
var compare = {};
exports.compare = compare;

_copyProperty(_compare2["default"], propertyNames.COMPARE, compare);

_copyProperty(_compare2["default"], propertyNames.COMPARE, rootNames); // convert


propertyNames.CONVERT = 'numberToString, valueToString,' + 'stringToNumber,stringToNumberDefault,' + 'stringToInteger,stringToIntegerDefault,' + 'valueToNumber, valueToNumberDefault,' + 'valueToInteger, valueToIntegerDefault,' + 'numToString, valToString,' + 'strToNumber, strToNumberDef,' + 'strToInteger, strToIntegerDef,' + 'valToNumber, valToNumberDefault,' + 'valToInteger, valToIntegerDefault,' + 'valToNum, valToNumDef,' + 'valToInt, valToIntDef,' + 'numToStr,' + 'strToNum,strToNumDef,' + 'strToInt,strToIntDef,' + '';
var convert = {};
exports.convert = convert;

_copyProperty(_convert2["default"], propertyNames.CONVERT, convert);

_copyProperty(_convert2["default"], propertyNames.CONVERT, rootNames); // number


propertyNames.NUMBER = 'isMultiples,isEven,isOdd,' + 'round,nearEqual,inRange,randomInt,' + '';

var number = _copyProperty(_number2["default"], propertyNames.NUMBER);

exports.number = number;

_copyProperty(_number2["default"], propertyNames.NUMBER, rootNames); // string


propertyNames.STRING_PUBLIC = 'matchFormat, replaceAll,' + 'repeat,' + 'isLowerCase, isUpperCase,' + 'indexOfFirst, indexOfLast,' + 'isFirst, isLast, isBothEnds,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'subIndex, subLength, subFirst, subLast,' + 'deleteIndex, deleteLength, deleteFirst, deleteLast,' + 'insert, add,' + '';
propertyNames.STRING_ROOT = 'matchFormat,replaceAll,' + 'isLowerCase,isUpperCase,' + '';
var string = {};
exports.string = string;

_copyProperty(_string2["default"], propertyNames.STRING_PUBLIC, string);

_copyProperty(_string2["default"], propertyNames.STRING_ROOT, rootNames); // object


propertyNames.OBJECT_PUBLIC = 'isObjectParameter,' + 'copyProperty, propertyCount, inProperty,' + 'getProperty, setProperty,' + 'objectToKeyValueArray, objectEntries,' + 'copyProp, propCount, inProp,' + 'getProp, setProp,' + '';
propertyNames.OBJECT_ROOT = 'copyProperty,propertyCount,inProperty,' + 'getProperty,setProperty,' + 'copyProp,propCount,inProp,' + 'getProp,setProp,' + '';
var object = {};
exports.object = object;

_copyProperty(_object2["default"], propertyNames.OBJECT_PUBLIC, object);

_copyProperty(_object2["default"], propertyNames.OBJECT_ROOT, rootNames);

object.objectToString = _type2["default"].objectToString;
rootNames.objectToString = _type2["default"].objectToString; // array

propertyNames.ARRAY_PUBLIC = 'NumberArray, IntegerArray,' + 'from,' + 'min, max,' + 'sum, average, median,' + 'mode,' + 'unique, single, multiple,' + 'filter, map, count,' + 'findFirstIndex, findLastIndex,' + 'findFirst, findLast,' + 'some, all,' + 'isFirst, isLast, isBothEnds,' + 'subIndex, subLength,' + 'subFirst, subLast,' + 'findIndex, findBackIndex,' + 'find, findBack,' + 'every,' + 'arrayToIndexValueArray, arrayEntries' + '';
propertyNames.ARRAY_ROOT = 'min, max,' + 'sum, average, median,' + '';
var array = {};
exports.array = array;

_copyProperty(_array2["default"], propertyNames.ARRAY_PUBLIC, array);

_copyProperty(_array2["default"], propertyNames.ARRAY_ROOT, rootNames); // array.operation


propertyNames.ARRAY_OPERATION_PUBLIC = 'insert, add,' + 'deleteLength, deleteIndex,' + 'deleteFirst, deleteLast,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'popFirst, popLast,' + 'pushFirst, pushLast,' + 'remainFirst, remainLast,' + 'filter,' + 'sortNumberAscending, sortNumberDescending,' + 'sortLengthAscending, sortLengthDescending,' + 'sortDictionaryAscending, sortDictionaryDescending,' + '';
array.operation = {};

_copyProperty(_array2["default"].operation, propertyNames.ARRAY_OPERATION_PUBLIC, array.operation); // consoleHook


propertyNames._CONSOLE_HOOK_BASE = ',Log,Info,Warn,Error,Debug';
propertyNames.CONSOLE_HOOK = [isPrefixSafixAdd('hook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('unHook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('accept', '', propertyNames._CONSOLE_HOOK_BASE)].join(',');
var consoleHook = {};
exports.consoleHook = consoleHook;

_copyProperty(_consoleHook2["default"], propertyNames.CONSOLE_HOOK, consoleHook);

var parts = _objectSpread(_objectSpread({
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
}, rootNames), {}, {
  parts: _objectSpread({
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
  }, rootNames)
});

exports.parts = parts;

var _default = _objectSpread({}, parts);

exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _clone = _interopRequireWildcard(__webpack_require__(3));

Object.keys(_clone).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _clone[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _clone["default"]);

exports["default"] = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = exports._cloneDeep = exports.clone = exports._clone = exports.cloneFunction = void 0;

var _type = __webpack_require__(4);

var _object = __webpack_require__(15);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * cloneFunction
 */
var cloneFunction = {}; // function is no clone

exports.cloneFunction = cloneFunction;

cloneFunction.cloneIgnoreFunction = function (source) {
  if (!(0, _type.isFunction)(source)) {
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

  if (!(0, _type.isObject)(source)) {
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

  if (!(0, _type.isArrayType)(source)) {
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

  if (!(0, _type.isObjectType)(source)) {
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

  if (!(0, _type.isDate)(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

cloneFunction.cloneRegExp = function (source) {
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


cloneFunction.cloneMap = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isMap)(source)) {
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
  if (!(0, _type.isWeakMap)(source)) {
    return undefined;
  }

  return source;
}; // cloneSet
//  element not recursive call
//  same map key


cloneFunction.cloneSet = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isSet)(source)) {
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
  if (!(0, _type.isWeakSet)(source)) {
    return undefined;
  }

  return source;
};
/**
 * clone
 */


var _clone = function _clone(source) {
  var __clone = function __clone(value) {
    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = _clone.functions.length; i < l; i += 1) {
      var result = _clone.functions[i](value);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return __clone(source);
};

exports._clone = _clone;
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

exports.clone = clone;
(0, _object._copyProperty)(_clone, 'clear,reset,add,' + '', clone);
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

    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      var result = _cloneDeep.functions[i](value, function (source, clone) {
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

exports.cloneDeep = cloneDeep;
(0, _object._copyProperty)(_cloneDeep, 'clear,reset,add,' + '', cloneDeep);
var _default = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  clone: clone,
  cloneDeep: cloneDeep,
  cloneFunction: cloneFunction
};
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _isTypeArray = _interopRequireWildcard(__webpack_require__(5));

Object.keys(_isTypeArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isTypeArray[key];
    }
  });
});

var _isTypeAll = _interopRequireWildcard(__webpack_require__(14));

Object.keys(_isTypeAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isTypeAll[key];
    }
  });
});

var _isSet = _interopRequireWildcard(__webpack_require__(13));

Object.keys(_isSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isSet[key];
    }
  });
});

var _isMap = _interopRequireWildcard(__webpack_require__(12));

Object.keys(_isMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isMap[key];
    }
  });
});

var _isSymbol = _interopRequireWildcard(__webpack_require__(11));

Object.keys(_isSymbol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isSymbol[key];
    }
  });
});

var _isException = _interopRequireWildcard(__webpack_require__(8));

Object.keys(_isException).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isException[key];
    }
  });
});

var _isType = _interopRequireWildcard(__webpack_require__(6));

Object.keys(_isType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isType[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _isType["default"]), _isException["default"]), _isSymbol["default"]), _isMap["default"]), _isSet["default"]), _isTypeAll["default"]), _isTypeArray["default"]);

exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyObjArray = exports.isNotExceptArray = exports.isNotObjTypeArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isEmptyObjArray = exports.isExceptArray = exports.isObjTypeArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArrayTypeArray = exports.isNotArrayArray = exports.isNotObjectTypeArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArrayTypeArray = exports.isArrayArray = exports.isObjectTypeArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports._isTypeArrayCheckFunc = void 0;

var _isType = __webpack_require__(6);

var _isException = __webpack_require__(8);

var _isSymbol = __webpack_require__(11);

var _isMap = __webpack_require__(12);

var _isSet = __webpack_require__(13);

var _isTypeAll = __webpack_require__(14);

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

var isObjectTypeArray = _isTypeArrayCheckFunc(_isType.isObjectType);

exports.isObjectTypeArray = isObjectTypeArray;

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

var isNotObjectTypeArray = _isTypeArrayCheckFunc(_isType.isNotObjectType);

exports.isNotObjectTypeArray = isNotObjectTypeArray;

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
exports["default"] = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyObj = exports.isNotObjType = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isEmptyObj = exports.isObjType = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArrayType = exports.isNotArray = exports.isNotObjectType = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isError = exports.isRegExp = exports.isDate = exports.isEmptyArray = exports.isArrayType = exports.isArray = exports.isEmptyObject = exports.isObjectType = exports.isObject = exports.isFunction = exports.isStringObject = exports.isString = exports.isInteger = exports.isNumberObject = exports.isNumber = exports.isBooleanObject = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports._objectToStringCheck = exports.objectToString = exports._typeofCheck = void 0;

var _propertyCount2 = __webpack_require__(7);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _typeofCheck = function _typeofCheck(typeName) {
  return function (value) {
    return _typeof(value) === typeName;
  };
};

exports._typeofCheck = _typeofCheck;

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};

exports.objectToString = objectToString;

var _objectToStringCheck = function _objectToStringCheck(typeName) {
  return function (value) {
    return objectToString(value) === "[object ".concat(typeName, "]");
  };
};

exports._objectToStringCheck = _objectToStringCheck;

var isUndefined = _typeofCheck('undefined');

exports.isUndefined = isUndefined;

var isNull = function isNull(value) {
  return value === null;
};

exports.isNull = isNull;

var isNaNStrict = function isNaNStrict(value) {
  return value !== value;
};

exports.isNaNStrict = isNaNStrict;

var isBoolean = _typeofCheck('boolean');

exports.isBoolean = isBoolean;

var isBooleanObject = function isBooleanObject(value) {
  return _objectToStringCheck('Boolean') && !isBoolean(value);
};

exports.isBooleanObject = isBooleanObject;

var isNumber = function isNumber(value) {
  return _typeofCheck('number')(value) && isFinite(value);
};

exports.isNumber = isNumber;

var isNumberObject = function isNumberObject(value) {
  return _objectToStringCheck('Number')(value) && !_typeofCheck('number')(value);
};

exports.isNumberObject = isNumberObject;

var isInteger = function isInteger(value) {
  if (!isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

exports.isInteger = isInteger;

var isString = _typeofCheck('string');

exports.isString = isString;

var isStringObject = function isStringObject(value) {
  return _objectToStringCheck('String') && !isString(value);
};

exports.isStringObject = isStringObject;

var isFunction = _typeofCheck('function');

exports.isFunction = isFunction;

var isObject = function isObject(value) {
  if (_objectToStringCheck('Object')(value) && !isNull(value) && !isUndefined(value)) {
    return true;
  }

  return false;
};

exports.isObject = isObject;

var isObjectType = function isObjectType(value) {
  if (isNull(value)) {
    return false;
  }

  return ['function', 'object'].indexOf(_typeof(value)) !== -1;
};

exports.isObjectType = isObjectType;

var isEmptyObject = function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }

  return (0, _propertyCount2._propertyCount)(value) === 0;
};

exports.isEmptyObject = isEmptyObject;

var isArray = _objectToStringCheck('Array'); // Int8Array Uint16Array Float32Array Float64Array etc...


exports.isArray = isArray;

var isArrayType = function isArrayType(value) {
  if (objectToString(value).indexOf('Array]') !== -1) {
    return true;
  }

  return false;
};

exports.isArrayType = isArrayType;

var isEmptyArray = function isEmptyArray(value) {
  if (!isArrayType(value)) {
    return false;
  }

  return value.length === 0;
};

exports.isEmptyArray = isEmptyArray;

var isDate = _objectToStringCheck('Date');

exports.isDate = isDate;

var isRegExp = _objectToStringCheck('RegExp');

exports.isRegExp = isRegExp;

var isError = _objectToStringCheck('Error');

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

var isNotObjectType = function isNotObjectType(value) {
  return !isObjectType(value);
};

exports.isNotObjectType = isNotObjectType;

var isNotArray = function isNotArray(value) {
  return !isArray(value);
};

exports.isNotArray = isNotArray;

var isNotArrayType = function isNotArrayType(value) {
  return !isArrayType(value);
};

exports.isNotArrayType = isNotArrayType;

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
var isObjType = isObjectType;
exports.isObjType = isObjType;
var isEmptyObj = isEmptyObject;
exports.isEmptyObj = isEmptyObj;
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
var isNotObjType = isNotObjectType;
exports.isNotObjType = isNotObjType;
var isNotEmptyObj = isNotEmptyObject;
exports.isNotEmptyObj = isNotEmptyObj;
var _default = {
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
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._propertyCount = void 0;

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
exports["default"] = exports.isNotExcept = exports.isExcept = exports.isNotException = exports.isException = void 0;

var _isType = __webpack_require__(6);

var _isObjectParameter = __webpack_require__(9);

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
var isExcept = isException;
exports.isExcept = isExcept;
var isNotExcept = isNotException;
exports.isNotExcept = isNotExcept;
var _default = {
  isException: isException,
  isNotException: isNotException,
  isExcept: isExcept,
  isNotExcept: isNotExcept
};
exports["default"] = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isObjectParameter = void 0;

var _isType = __webpack_require__(6);

var _replaceAll2 = __webpack_require__(10);

var _propertyCount2 = __webpack_require__(7);

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

exports.isObjectParameter = isObjectParameter;
var _default = {
  isObjectParameter: isObjectParameter
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
exports["default"] = exports.isNotSymbol = exports.isSymbol = void 0;

var _isType = __webpack_require__(6);

var isSymbol = (0, _isType._typeofCheck)('symbol');
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = void 0;

var _isType = __webpack_require__(6);

var isMap = (0, _isType._objectToStringCheck)('Map');
exports.isMap = isMap;
var isWeakMap = (0, _isType._objectToStringCheck)('WeakMap');
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = void 0;

var _isType = __webpack_require__(6);

var isSet = (0, _isType._objectToStringCheck)('Set');
exports.isSet = isSet;
var isWeakSet = (0, _isType._objectToStringCheck)('WeakSet');
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyObjAll = exports.isNotExceptAll = exports.isNotObjTypeAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isEmptyObjAll = exports.isExceptAll = exports.isObjTypeAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotExceptionAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArrayTypeAll = exports.isNotArrayAll = exports.isNotObjectTypeAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isExceptionAll = exports.isRegExpAll = exports.isDateAll = exports.isArrayTypeAll = exports.isArrayAll = exports.isObjectTypeAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports._isTypeAllCheckFunc = exports._isTypeArray = void 0;

var _isType = __webpack_require__(6);

var _isException = __webpack_require__(8);

var _isSymbol = __webpack_require__(11);

var _isMap = __webpack_require__(12);

var _isSet = __webpack_require__(13);

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
exports["default"] = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _objectToKeyValueArray = _interopRequireWildcard(__webpack_require__(16));

Object.keys(_objectToKeyValueArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _objectToKeyValueArray[key];
    }
  });
});

var _inProperty = _interopRequireWildcard(__webpack_require__(17));

Object.keys(_inProperty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inProperty[key];
    }
  });
});

var _isObjectParameter = _interopRequireWildcard(__webpack_require__(9));

Object.keys(_isObjectParameter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isObjectParameter[key];
    }
  });
});

var _object_common = _interopRequireWildcard(__webpack_require__(18));

Object.keys(_object_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _object_common[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _object_common["default"]), _isObjectParameter["default"]), _inProperty["default"]), _objectToKeyValueArray["default"]);

exports["default"] = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectEntries = exports.objectToKeyValueArray = exports._objectToKeyValueArray = void 0;

var _isType = __webpack_require__(6);

var _isObjectParameter = __webpack_require__(9);

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

exports._objectToKeyValueArray = _objectToKeyValueArray;

var objectToKeyValueArray = function objectToKeyValueArray(object) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('objectToKeyValueArray args(object) is not object');
  }

  return _objectToKeyValueArray(object);
};

exports.objectToKeyValueArray = objectToKeyValueArray;
var objectEntries = objectToKeyValueArray;
exports.objectEntries = objectEntries;
var _default = {
  _objectToKeyValueArray: _objectToKeyValueArray,
  objectToKeyValueArray: objectToKeyValueArray,
  objectEntries: objectEntries
};
exports["default"] = _default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.inProp = exports.inProperty = exports._inProperty = void 0;

var _isType = __webpack_require__(6);

var _replaceAll2 = __webpack_require__(10);

var _isObjectParameter = __webpack_require__(9);

var _object_common = __webpack_require__(18);

/**
 * _inProperty
 */
var _inProperty = function _inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!(0, _isType.isObject)(object)) {
    return false;
  }

  if ((0, _isType.isString)(propertyPathArray)) {
    propertyPathArray = (0, _replaceAll2._replaceAll)(propertyPathArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyPathArray.length; i += 1) {
    if (i !== 0 && i === propertyPathArray.length - 1) {
      if (propertyPathArray[i] === '' || (0, _isType.isUndefined)(propertyPathArray[i])) {
        continue;
      }
    }

    if (!(0, _isType.isString)(propertyPathArray[i])) {
      throw new TypeError('_inProperty args(propertyArray) element is not string');
    }

    var result = (0, _object_common._getPropertyBase)(object, propertyPathArray[i], hasOwn);

    if (result["in"] === false) {
      return false;
    }
  }

  return true;
};
/**
 * inProperty
 */


exports._inProperty = _inProperty;

var inProperty = function inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPathArray', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyPathArray = _object.propertyPathArray;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('inProperty args(object) is not object');
  }

  if (!(0, _isType.isString)(propertyPathArray)) {
    if (!(0, _isType.isArray)(propertyPathArray)) {
      throw new TypeError('inProperty args(propertyPathArray) is not [array|string]');
    }
  }

  if (!(0, _isType.isBoolean)(hasOwn)) {
    throw new TypeError('inProperty args(hasOwn) is not boolean');
  }

  return _inProperty(object, propertyPathArray, hasOwn);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setProp = exports.getProp = exports.propCount = exports.copyProp = exports.setProperty = exports._setProperty = exports.getProperty = exports._getProperty = exports._getPropertyBase = exports.propertyCount = exports.copyProperty = exports._copyProperty = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _propertyCount2 = __webpack_require__(7);

var _replaceAll2 = __webpack_require__(10);

/**
 * copyProperty
 */
var _copyProperty = function _copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _type.isString)(propertyArray)) {
    propertyArray = (0, _replaceAll2._replaceAll)(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || (0, _type.isUndefined)(propertyArray[i])) {
      continue;
    }

    if (!(0, _type.isString)(propertyArray[i])) {
      throw new TypeError('copyProperty args(propertyArray) element is not string');
    }

    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }

  return toObject;
};

exports._copyProperty = _copyProperty;

var copyProperty = function copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _isObjectParameter.isObjectParameter)(fromObject, 'fromObject,propertyArray', 'toObject')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyArray = _fromObject.propertyArray;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  }

  if (!(0, _type.isObject)(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!(0, _type.isString)(propertyArray)) {
    if (!(0, _type.isArray)(propertyArray)) {
      throw new TypeError('copyProperty args(propertyArray) is not [array|string]');
    }
  }

  if (!(0, _type.isObject)(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  _copyProperty(fromObject, propertyArray, toObject);
};
/**
 * propertyCount
 */


exports.copyProperty = copyProperty;

var propertyCount = function propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!(0, _type.isObjectType)(object)) {
    throw new TypeError('propertyCount args(object) is not object type');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return (0, _propertyCount2._propertyCount)(object, hasOwn);
};
/**
 * getProperty
 */


exports.propertyCount = propertyCount;

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

    if ((0, _type.isUndefined)(result[propertyArray[i]])) {
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

exports._getPropertyBase = _getPropertyBase;

var _getProperty = function _getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var result = _getPropertyBase(object, propertyPath, hasOwn);

  if (!(0, _type.isBoolean)(result["in"])) {
    throw new Error('_getProperty _getPropertyBase result is not boolean');
  }

  if (result["in"] === false) {
    return undefined;
  } else {
    return result.value;
  }
};

exports._getProperty = _getProperty;

var getProperty = function getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath', 'hasOwn')) {
    var _object2 = object;
    object = _object2.object;
    propertyPath = _object2.propertyPath;
    var _object2$hasOwn = _object2.hasOwn;
    hasOwn = _object2$hasOwn === void 0 ? true : _object2$hasOwn;
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

  return _getProperty(object, propertyPath, hasOwn);
};
/**
 * setProperty
 */


exports.getProperty = getProperty;

var _setProperty = function _setProperty(object, path, value) {
  var propertyArray = path.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      throw new Error('setProperty args(propertyPath) is no exist property');
    }
  }

  var result = object;

  for (var _i = 0, _l = propertyArray.length - 1; _i < _l; _i += 1) {
    if (!((0, _type.isObject)(result[propertyArray[_i]]) || (0, _type.isArrayType)(result[propertyArray[_i]]))) {
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
    var _object3 = object;
    object = _object3.object;
    propertyPath = _object3.propertyPath;
    value = _object3.value;
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
var propCount = propertyCount;
exports.propCount = propCount;
var getProp = getProperty;
exports.getProp = getProp;
var setProp = setProperty;
exports.setProp = setProp;
var _default = {
  _copyProperty: _copyProperty,
  _propertyCount: _propertyCount2._propertyCount,
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
exports["default"] = _default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isGasRhino = exports.isGasV8 = exports.googleAppScriptEngineName = exports.isOpera = exports.isSafari = exports.isInternetExplorer = exports.isEdge = exports.isFirefox = exports.isChrome = exports.browserName = exports.name = exports.isDeno = exports.isNodeJs = exports.isJest = exports.isGoogleAppsScript = exports.isWindowsScriptHost = exports.isWebBrowser = void 0;

var _includes2 = __webpack_require__(21);

var _includes_common = __webpack_require__(23);

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

var isNodeJs = function isNodeJs() {
  return name() === 'Node.js';
};

exports.isNodeJs = isNodeJs;

var isDeno = function isDeno() {
  return name() === 'Deno';
};

exports.isDeno = isDeno;

var name = function name() {
  var result;

  if (typeof WScript !== 'undefined') {
    result = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    result = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    result = 'GoogleAppsScript';
  } else if (typeof window === 'undefined') {
    result = 'Node.js';
  } else if (typeof jest !== 'undefined') {
    result = 'Jest';
  } else if (typeof process !== 'undefined') {
    result = 'WebBrowser';
  } else {
    result = 'unknown';
  }

  ;
  return result;
};

exports.name = name;

var browserName = function browserName() {
  if (!isWebBrowser()) {
    return '';
  }

  var ua = window.navigator.userAgent.toLowerCase();

  if ((0, _includes_common._includesSome)(ua, ['msie', 'trident'])) {
    return 'InternetExplorer';
  } else if ((0, _includes2._includes)(ua, 'edge')) {
    return 'Edge';
  } else if ((0, _includes2._includes)(ua, 'opr')) {
    return 'Opera';
  } else if ((0, _includes2._includes)(ua, 'chrome')) {
    return 'Chrome';
  } else if ((0, _includes2._includes)(ua, 'safari')) {
    return 'Safari';
  } else if ((0, _includes2._includes)(ua, 'firefox')) {
    return 'Firefox';
  } else {
    return 'other';
  }
};

exports.browserName = browserName;

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
  isNodeJs: isNodeJs,
  isDeno: isDeno,
  isJest: isJest,
  browserName: browserName,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  buildMode: ''
};
exports["default"] = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includes = exports._includes = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _match2 = __webpack_require__(22);

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

    return value.indexOf(compare) !== -1;
  } else if ((0, _type.isArray)(value)) {
    return value.indexOf(compare) !== -1;
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.match = exports._match = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includesAll = exports._includesAll = exports.includesSome = exports._includesSome = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _match2 = __webpack_require__(22);

var _includes2 = __webpack_require__(21);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLast = exports._subLast = exports.subFirst = exports._subFirst = exports.subLength = exports._subLength = exports.subIndex = exports._subIndex = exports.isBothEnds = exports._isBothEnds = exports.isLast = exports._isLast = exports.isFirst = exports._isFirst = exports.every = exports.all = exports._all = exports.some = exports._some = exports.findBack = exports.findLast = exports._findLast = exports.find = exports.findFirst = exports._findFirst = exports.findBackIndex = exports.findLastIndex = exports._findLastIndex = exports.findIndex = exports.findFirstIndex = exports._findFirstIndex = exports.count = exports._count = exports.map = exports._map = exports.filter = exports._filter = exports.multiple = exports._multiple = exports.single = exports._single = exports.unique = exports._unique = exports.mode = exports._mode = exports.median = exports._median = exports.average = exports._average = exports.sum = exports._sum = exports.from = exports.max = exports._max = exports.min = exports._min = void 0;

var _type = __webpack_require__(4);

var _number = __webpack_require__(25);

var _isObjectParameter = __webpack_require__(9);

var _clone2 = __webpack_require__(3);

var _syntax = __webpack_require__(26);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var sortedArray = (0, _clone2._cloneDeep)(array);
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

exports._mode = _mode;

var mode = function mode(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('mode args(array) is not array');
  }

  return _mode(array);
};
/**
 * uniqe
 */


exports.mode = mode;

var _unique = function _unique(array) {
  if ((0, _syntax.canUseSet)() && array.length > 120) {
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

exports._unique = _unique;

var unique = function unique(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('unique args(array) is not array');
  }

  return _unique(array);
};
/**
 * single
 */


exports.unique = unique;

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
    throw new TypeError('filter args(compareFunc) is not function');
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
    return array[index] === value;
  });
};

exports._isFirst = _isFirst;

var isFirst = function isFirst(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array10 = array;
    array = _array10.array;
    valueArray = _array10.valueArray;
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
    return array[array.length - valueArray.length + index] === value;
  });
};

exports._isLast = _isLast;

var isLast = function isLast(array, valueArray) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueArray = _array11.valueArray;
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
exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.randomInt = exports._randomInt = exports.makeInRange = exports._makeInRange = exports.inRange = exports._inRange = exports.nearEqual = exports._nearEqual = exports.round = exports._round = exports.isOdd = exports.isEven = exports.isMultiples = exports._isMultiples = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _isMultiples$_round$_;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * isMultiples isEven isOdd
 */
var _isMultiples = function _isMultiples(number, radix) {
  if (number === 0) {
    return false;
  }

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
  if (number === 0) {
    return false;
  }

  return isMultiples(number, 2);
};

exports.isEven = isEven;

var isOdd = function isOdd(number) {
  if (number === 0) {
    return false;
  }

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseSet = exports.canUseMap = exports.loop = exports._loopBase = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _IntegerArray2 = __webpack_require__(27);

var _objectToKeyValueArray = __webpack_require__(16);

/**
 * assert
 */
var assert = function assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!(0, _type.isBoolean)(value)) {
    throw new TypeError('assert args(value) is not boolean|message:' + "|message:".concat(message));
  }

  if (!(0, _type.isString)(message)) {
    throw new TypeError('assert args(message) is not string|message:' + "|message:".concat(message));
  }

  if (!value) {
    throw new Error("assert error|message:".concat(message));
  }
};
/**
 * guard
 */


exports.assert = assert;
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

    resultValue = functionValue(resultValue);

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
/**
 * sc (second call)
 */


exports.functionValue = functionValue;

var sc = function sc(argsFirst, func) {
  for (var _len = arguments.length, argsRest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    argsRest[_key - 2] = arguments[_key];
  }

  return func.apply(void 0, [argsFirst].concat(argsRest));
};
/**
 * if_
 */


exports.sc = sc;

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


exports.if_ = if_;

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


exports.switch_ = switch_;

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
    return _loopBase((0, _objectToKeyValueArray.objectToKeyValueArray)(start));
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
/**
 * canUseMap
 */


exports.loop = loop;

var _canUseMapFlag;

var canUseMap = function canUseMap() {
  if ((0, _type.isUndefined)(_canUseMapFlag)) {
    try {
      new Map();
      _canUseMapFlag = true;
    } catch (e) {
      _canUseMapFlag = false;
    }
  }

  return _canUseMapFlag;
};

exports.canUseMap = canUseMap;

canUseMap.reset = function () {
  _canUseMapFlag = undefined;
};
/**
 * canUseSet
 */


var _canUseSetFlag;

var canUseSet = function canUseSet() {
  if ((0, _type.isUndefined)(_canUseSetFlag)) {
    try {
      new Set();
      _canUseSetFlag = true;
    } catch (e) {
      _canUseSetFlag = false;
    }
  }

  return _canUseSetFlag;
};

exports.canUseSet = canUseSet;

canUseSet.reset = function () {
  _canUseSetFlag = undefined;
};

var _default = {
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
exports["default"] = _default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IntegerArray = exports._IntegerArray = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _NumberArray2 = __webpack_require__(28);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumberArray = exports._NumberArray = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

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
    for (var _i = start, _l = end; _i >= _l; _i += increment) {
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.testCounter = exports.expect = exports.checkEqual = exports.checkCompare = exports.test = exports.it = exports.describe = exports.testFrame = void 0;

var _type = __webpack_require__(4);

var _array = __webpack_require__(30);

var _string = __webpack_require__(38);

var _compare = __webpack_require__(42);

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

exports.it = it;
var test = it;
exports.test = test;

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
  output += "".concat(indent, "Test: ").concat(testFrame.testName, "\n") + "".concat(indent, "  Counter: ").concat(testFrame.counter, "\n") + (message === '' ? '' : "".concat(indent, "  Message: ").concat(message, "\n")) + "".concat(indent, "  A !== B\n") + "".concat(indent, "  A = ").concat((0, _type.isString)(a) ? "'" + a + "'" : String(a), "\n") + "".concat(indent, "  B = ").concat((0, _type.isString)(b) ? "'" + b + "'" : String(b));
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  operation: true
};
exports.operation = exports["default"] = void 0;

var _array_operation_sort = _interopRequireDefault(__webpack_require__(31));

var _array_operation = _interopRequireDefault(__webpack_require__(36));

var _arrayToIndexValueArray = _interopRequireWildcard(__webpack_require__(37));

Object.keys(_arrayToIndexValueArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _arrayToIndexValueArray[key];
    }
  });
});

var _IntegerArray = _interopRequireWildcard(__webpack_require__(27));

Object.keys(_IntegerArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IntegerArray[key];
    }
  });
});

var _NumberArray = _interopRequireWildcard(__webpack_require__(28));

Object.keys(_NumberArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NumberArray[key];
    }
  });
});

var _array_common = _interopRequireWildcard(__webpack_require__(24));

Object.keys(_array_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array_common[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_common["default"]), _NumberArray["default"]), _IntegerArray["default"]), _arrayToIndexValueArray["default"]), {}, {
  operation: _objectSpread(_objectSpread({}, _array_operation["default"]), _array_operation_sort["default"])
});

exports["default"] = _default;

var operation = _objectSpread(_objectSpread({}, _array_operation["default"]), _array_operation_sort["default"]);

exports.operation = operation;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortDictionaryDescending = exports._sortDictionaryDescending = exports.sortDictionaryAscending = exports._sortDictionaryAscending = exports.sortLengthDescending = exports._sortLengthDescending = exports.sortLengthAscending = exports._sortLengthAscending = exports.sortNumberDescending = exports._sortNumberDescending = exports.sortNumberAscending = exports._sortNumberAscending = exports.sort = exports._sort = void 0;

var _type = __webpack_require__(4);

var _allMatch = __webpack_require__(32);

var _allMatchSome = __webpack_require__(33);

var _compare_common = __webpack_require__(35);

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

exports._sort = _sort;

var sort = function sort(array, pattern, order) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('sortNumberAscending args(array) is not array');
  }

  if (!(0, _compare_common._or)(order, ['ascending', 'descending'])) {
    throw new TypeError('sort args(order) is not [ascending|descending]');
  }

  switch (pattern) {
    case 'number':
      if (!(0, _allMatch.allMatch)(array, _type.isNumber)) {
        throw new TypeError('sort number args(array) element is not number');
      }

      break;

    case 'length':
      if (!(0, _allMatchSome.allMatchSome)(array, [_type.isString, function (element) {
        return 'length' in element;
      }])) {
        throw new TypeError('sort length args(array) element does not have length property');
      }

      break;

    case 'dictionary':
      if (!(0, _allMatch.allMatch)(array, _type.isString)) {
        throw new TypeError('sort dictionary args(array) element is not string');
      }

      break;

    default:
      throw new TypeError('sort args(pattern) is not [number|length|dictionary]');
  }

  return _sort(array, pattern, order);
};

exports.sort = sort;

var _sortNumberAscending = function _sortNumberAscending(array) {
  return _sort(array, 'number', 'ascending');
};

exports._sortNumberAscending = _sortNumberAscending;

var sortNumberAscending = function sortNumberAscending(array) {
  return sort(array, 'number', 'ascending');
};

exports.sortNumberAscending = sortNumberAscending;

var _sortNumberDescending = function _sortNumberDescending(array) {
  return _sort(array, 'number', 'descending');
};

exports._sortNumberDescending = _sortNumberDescending;

var sortNumberDescending = function sortNumberDescending(array) {
  return sort(array, 'number', 'descending');
};

exports.sortNumberDescending = sortNumberDescending;

var _sortLengthAscending = function _sortLengthAscending(array) {
  return _sort(array, 'length', 'ascending');
};

exports._sortLengthAscending = _sortLengthAscending;

var sortLengthAscending = function sortLengthAscending(array) {
  return sort(array, 'length', 'ascending');
};

exports.sortLengthAscending = sortLengthAscending;

var _sortLengthDescending = function _sortLengthDescending(array) {
  return _sort(array, 'length', 'descending');
};

exports._sortLengthDescending = _sortLengthDescending;

var sortLengthDescending = function sortLengthDescending(array) {
  return sort(array, 'length', 'descending');
};

exports.sortLengthDescending = sortLengthDescending;

var _sortDictionaryAscending = function _sortDictionaryAscending(array) {
  return _sort(array, 'dictionary', 'ascending');
};

exports._sortDictionaryAscending = _sortDictionaryAscending;

var sortDictionaryAscending = function sortDictionaryAscending(array) {
  return sort(array, 'dictionary', 'ascending');
};

exports.sortDictionaryAscending = sortDictionaryAscending;

var _sortDictionaryDescending = function _sortDictionaryDescending(array) {
  return _sort(array, 'dictionary', 'descending');
};

exports._sortDictionaryDescending = _sortDictionaryDescending;

var sortDictionaryDescending = function sortDictionaryDescending(array) {
  return sort(array, 'dictionary', 'descending');
};

exports.sortDictionaryDescending = sortDictionaryDescending;
var _default = {
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
exports["default"] = _default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatch = exports._allMatch = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _match2 = __webpack_require__(22);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchSome = exports._allMatchSome = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _matchSome2 = __webpack_require__(34);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSome = exports._matchSome = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _match2 = __webpack_require__(22);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.or = exports._or = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

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
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filter = exports._filter = exports.remainLast = exports._remainLast = exports.remainFirst = exports._remainFirst = exports.pushLast = exports._pushLast = exports.pushFirst = exports._pushFirst = exports.popLast = exports._popLast = exports.popFirst = exports._popFirst = exports.trimBothEnds = exports._trimBothEnds = exports.trimLast = exports._trimLast = exports.trimFirst = exports._trimFirst = exports.excludeBothEnds = exports._excludeBothEnds = exports.excludeLast = exports._excludeLast = exports.excludeFirst = exports._excludeFirst = exports.includeBothEnds = exports._includeBothEnds = exports.includeLast = exports._includeLast = exports.includeFirst = exports._includeFirst = exports.deleteLast = exports._deleteLast = exports.deleteFirst = exports._deleteFirst = exports.deleteLength = exports._deleteLength = exports.deleteIndex = exports._deleteIndex = exports.add = exports._add = exports.insert = exports._insert = void 0;

var _type = __webpack_require__(4);

var _number = __webpack_require__(25);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

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

var _deleteFirst = function _deleteFirst(array, length) {
  return _deleteLength(array, 0, length);
};

exports._deleteFirst = _deleteFirst;

var deleteFirst = function deleteFirst(array, length) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array6 = array;
    array = _array6.array;
    length = _array6.length;
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

var _deleteLast = function _deleteLast(array, length) {
  return _deleteLength(array, array.length - length, length);
};

exports._deleteLast = _deleteLast;

var deleteLast = function deleteLast(array, length) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, length')) {
    var _array7 = array;
    array = _array7.array;
    length = _array7.length;
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrayEntries = exports.arrayToIndexValueArray = exports._arrayToIndexValueArray = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _NumberArray2 = __webpack_require__(28);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _matchFormat = _interopRequireWildcard(__webpack_require__(39));

Object.keys(_matchFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _matchFormat[key];
    }
  });
});

var _replaceAll2 = _interopRequireWildcard(__webpack_require__(40));

Object.keys(_replaceAll2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _replaceAll2[key];
    }
  });
});

var _replaceAll3 = _interopRequireWildcard(__webpack_require__(10));

Object.keys(_replaceAll3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _replaceAll3[key];
    }
  });
});

var _string_common = _interopRequireWildcard(__webpack_require__(41));

Object.keys(_string_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _string_common[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _string_common["default"]), _replaceAll3["default"]), _replaceAll2["default"]), _matchFormat["default"]);

exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchFormat = exports._matchFormat = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAll = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _replaceAll2 = __webpack_require__(10);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.add = exports._add = exports.insert = exports._insert = exports.deleteLast = exports._deleteLast = exports.deleteFirst = exports._deleteFirst = exports.deleteLength = exports._deleteLength = exports.deleteIndex = exports._deleteIndex = exports.subLast = exports._subLast = exports.subFirst = exports._subFirst = exports.subLength = exports._subLength = exports.subIndex = exports._subIndex = exports.trimBothEnds = exports._trimBothEnds = exports.trimLast = exports._trimLast = exports.trimFirst = exports._trimFirst = exports.excludeBothEnds = exports._excludeBothEnds = exports.excludeLast = exports._excludeLast = exports.excludeFirst = exports._excludeFirst = exports.includeBothEnds = exports._includeBothEnds = exports.includeLast = exports._includeLast = exports.includeFirst = exports._includeFirst = exports.isBothEnds = exports._isBothEnds = exports.isLast = exports._isLast = exports.isFirst = exports._isFirst = exports.indexOfLast = exports._indexOfLast = exports.indexOfFirst = exports._indexOfFirst = exports.isUpperCase = exports._isUpperCase = exports.isLowerCase = exports._isLowerCase = exports.repeat = exports._repeat = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _number = __webpack_require__(25);

var _array = __webpack_require__(30);

var _compare = __webpack_require__(42);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _equal = _interopRequireWildcard(__webpack_require__(43));

Object.keys(_equal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _equal[key];
    }
  });
});

var _includes_common = _interopRequireWildcard(__webpack_require__(23));

Object.keys(_includes_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _includes_common[key];
    }
  });
});

var _includes = _interopRequireWildcard(__webpack_require__(21));

Object.keys(_includes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _includes[key];
    }
  });
});

var _someMatchAll = _interopRequireWildcard(__webpack_require__(44));

Object.keys(_someMatchAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _someMatchAll[key];
    }
  });
});

var _allMatchAll = _interopRequireWildcard(__webpack_require__(47));

Object.keys(_allMatchAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _allMatchAll[key];
    }
  });
});

var _indexOfMatchAll = _interopRequireWildcard(__webpack_require__(45));

Object.keys(_indexOfMatchAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexOfMatchAll[key];
    }
  });
});

var _matchAllValue = _interopRequireWildcard(__webpack_require__(48));

Object.keys(_matchAllValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _matchAllValue[key];
    }
  });
});

var _matchAll = _interopRequireWildcard(__webpack_require__(46));

Object.keys(_matchAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _matchAll[key];
    }
  });
});

var _someMatchSome = _interopRequireWildcard(__webpack_require__(49));

Object.keys(_someMatchSome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _someMatchSome[key];
    }
  });
});

var _allMatchSome = _interopRequireWildcard(__webpack_require__(33));

Object.keys(_allMatchSome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _allMatchSome[key];
    }
  });
});

var _indexOfMatchSome = _interopRequireWildcard(__webpack_require__(50));

Object.keys(_indexOfMatchSome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexOfMatchSome[key];
    }
  });
});

var _matchSomeValue = _interopRequireWildcard(__webpack_require__(51));

Object.keys(_matchSomeValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _matchSomeValue[key];
    }
  });
});

var _matchSome = _interopRequireWildcard(__webpack_require__(34));

Object.keys(_matchSome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _matchSome[key];
    }
  });
});

var _someMatch = _interopRequireWildcard(__webpack_require__(52));

Object.keys(_someMatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _someMatch[key];
    }
  });
});

var _allMatch = _interopRequireWildcard(__webpack_require__(32));

Object.keys(_allMatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _allMatch[key];
    }
  });
});

var _indexOfMatch = _interopRequireWildcard(__webpack_require__(53));

Object.keys(_indexOfMatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexOfMatch[key];
    }
  });
});

var _initialValue = _interopRequireWildcard(__webpack_require__(54));

Object.keys(_initialValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _initialValue[key];
    }
  });
});

var _matchValue = _interopRequireWildcard(__webpack_require__(55));

Object.keys(_matchValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _matchValue[key];
    }
  });
});

var _match = _interopRequireWildcard(__webpack_require__(22));

Object.keys(_match).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _match[key];
    }
  });
});

var _compare_common = _interopRequireWildcard(__webpack_require__(35));

Object.keys(_compare_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _compare_common[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _compare_common["default"]), _match["default"]), _matchValue["default"]), _initialValue["default"]), _indexOfMatch["default"]), _allMatch["default"]), _someMatch["default"]), _matchSome["default"]), _matchSomeValue["default"]), _indexOfMatchSome["default"]), _allMatchSome["default"]), _someMatchSome["default"]), _matchAll["default"]), _matchAllValue["default"]), _indexOfMatchAll["default"]), _allMatchAll["default"]), _someMatchAll["default"]), _includes["default"]), _includes_common["default"]), _equal["default"]);

exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports._equalDeep = exports.equal = exports._equal = exports.equalFunction = void 0;

var _type = __webpack_require__(4);

var _object = __webpack_require__(15);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * equalFunction
 */
var equalFunction = {};
exports.equalFunction = equalFunction;

equalFunction.equalValue = function (value1, value2) {
  if ((0, _type.isNaNStrict)(value1) && (0, _type.isNaNStrict)(value2)) {
    return true;
  }

  return value1 === value2;
}; // function is no recursive call


equalFunction.equalFunction = function (value1, value2) {
  if (!(0, _type.isFunctionAll)(value1, value2)) {
    return;
  }

  return value1 === value2;
};

equalFunction.equalObject = function (value1, value2) {
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

equalFunction.equalArrayType = function (value1, value2) {
  var bufferWrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var __equalDeep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v1, v2) {
    return v1 === v2;
  };

  if (!(0, _type.isArrayTypeAll)(value1, value2)) {
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
  if (!(0, _type.isDateAll)(value1, value2)) {
    return;
  }

  return value1.getTime() === value2.getTime();
};

equalFunction.equalRegExp = function (value1, value2) {
  if (!(0, _type.isRegExpAll)(value1, value2)) {
    return;
  }

  return value1.source === value2.source;
};

equalFunction.equalMap = function (value1, value2) {
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

  if (!(0, _type.isWeakMapAll)(value1, value2)) {
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

  if (!(0, _type.isSetAll)(value1, value2)) {
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

  if (!(0, _type.isWeakSetAll)(value1, value2)) {
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

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equal(value1, value2);
};

exports._equal = _equal;
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
  if ((0, _object.isObjectParameter)(value1, 'value1, value2')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
  }

  return _equal(value1, value2);
};

exports.equal = equal;
(0, _object._copyProperty)(_equal, 'clear,reset,add,' + '', equal);
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

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equalDeep(value1, value2);
};

exports._equalDeep = _equalDeep;
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
  if ((0, _object.isObjectParameter)(value1, 'value1,value2')) {
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
  }

  return _equalDeep(value1, value2);
};

exports.equalDeep = equalDeep;
(0, _object._copyProperty)(_equalDeep, 'clear,reset,add,' + '', equalDeep);
var _default = {
  _equal: _equal,
  _equalDeep: _equalDeep,
  equal: equal,
  equalDeep: equalDeep,
  equalFunction: equalFunction
};
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchAll = exports._someMatchAll = void 0;

var _indexOfMatchAll2 = __webpack_require__(45);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchAll = exports._indexOfMatchAll = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _matchAll2 = __webpack_require__(46);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAll = exports._matchAll = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _match2 = __webpack_require__(22);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchAll = exports._allMatchAll = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _matchAll2 = __webpack_require__(46);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAllValue = exports._matchAllValue = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _matchAll2 = __webpack_require__(46);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchSome = exports._someMatchSome = void 0;

var _indexOfMatchSome2 = __webpack_require__(50);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchSome = exports._indexOfMatchSome = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _matchSome2 = __webpack_require__(34);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSomeValue = exports._matchSomeValue = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _matchSome2 = __webpack_require__(34);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatch = exports._someMatch = void 0;

var _indexOfMatch2 = __webpack_require__(53);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatch = exports._indexOfMatch = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _array_common = __webpack_require__(24);

var _match2 = __webpack_require__(22);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialValue = exports._initialValue = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _matchSomeValue2 = __webpack_require__(51);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchValue = exports._matchValue = void 0;

var _type = __webpack_require__(4);

var _isObjectParameter = __webpack_require__(9);

var _match3 = __webpack_require__(22);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.valToStr = exports.numToStr = exports.valToIntegerDef = exports.valToInteger = exports.valToNumberDef = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports._stringToIntegerDefault = exports.stringToInteger = exports._stringToInteger = exports._stringToIntegerBase = exports.stringToNumberDefault = exports._stringToNumberDefault = exports.stringToNumber = exports._stringToNumber = exports._stringToNumberBase = exports.valueToString = exports.numberToString = exports._numberToString = void 0;

var _type = __webpack_require__(4);

var _compare = __webpack_require__(42);

var _string = __webpack_require__(38);

var _isObjectParameter = __webpack_require__(9);

var _number = __webpack_require__(25);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.acceptDebug = exports.acceptError = exports.acceptWarn = exports.acceptInfo = exports.acceptLog = exports.accept = exports._accept = exports.unHookDebug = exports.unHookError = exports.unHookWarn = exports.unHookInfo = exports.unHookLog = exports.unHook = exports._unHook = exports.hookDebug = exports.hookError = exports.hookWarn = exports.hookInfo = exports.hookLog = exports.hook = exports._hook = exports.original = void 0;

var _type = __webpack_require__(4);

var _compare = __webpack_require__(42);

var _array = __webpack_require__(30);

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

/***/ })
/******/ ]);
});