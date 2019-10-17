"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var polyfill = require('./polyfill.js');

var _constant = require('./constant.js');

var _root = require('./root/root.js');

var _type = require('./type/type.js');

var _test = require('./test/test.js');

var _syntax = require('./syntax/syntax.js');

var _compare = require('./compare/compare.js');

var _convert = require('./convert/convert.js');

var _number = require('./number/number.js');

var _string = require('./string/string.js');

var _object = require('./object/object.js');

var _array = require('./array/array.js');

var _consoleHook = require('./consoleHook/consoleHook.js');

var VERSION = '2.5.3 beta';
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

_object._copyProperty(_object, _constant.propertyNames.OBJECT_ROOT, rootNames); // array


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