"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _root = require('./root/root.js');

var _platform = require('./platform/platform.js');

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

var VERSION = '4.5.0 beta';
var rootNames = {};
var propertyNames = {};
var _copyProperty = _object._copyProperty;
var _replaceAll = _string._replaceAll;
var _map = _array._map; // root

propertyNames.ROOT = 'clone, cloneDeep,' + 'cloneFunction,' + '';

var root = _copyProperty(_root, propertyNames.ROOT);

_copyProperty(_root, propertyNames.ROOT, rootNames); // platform


propertyNames.PLATFORM = 'name,' + 'isWebBrowser,' + 'isWindowsScriptHost,' + 'isGoogleAppsScript,' + 'isNodeJs,' + 'browserName,' + 'isChrome,' + 'isFirefox,' + 'isEdge,' + 'isInternetExplorer,' + 'isSafari,' + 'isOpera,' + 'buildMode,' + '';

var platform = _copyProperty(_platform, propertyNames.PLATFORM); // type


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

propertyNames.ARRAY_PUBLIC = 'from,' + 'min, max,' + 'sum, average, median,' + 'mode,' + 'unique, single, multiple,' + 'filter, map, count,' + 'findFirstIndex, findLastIndex,' + 'findFirst, findLast,' + 'some, all,' + 'isFirst, isLast, isBothEdges,' + 'subIndex, subLength,' + 'subFirst, subLast,' + 'findIndex, findBackIndex,' + 'find, findBack,' + 'every,' + 'isBothEnds,' + 'operation,' + '';
propertyNames.ARRAY_ROOT = 'min, max,' + 'sum, average, median,' + '';

var array = _copyProperty(_array, propertyNames.ARRAY_PUBLIC);

_copyProperty(_array, propertyNames.ARRAY_ROOT, rootNames); // consoleHook


propertyNames._CONSOLE_HOOK_BASE = ',Log,Info,Warn,Error,Debug';
propertyNames.CONSOLE_HOOK = [isPrefixSafixAdd('hook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('unHook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('accept', '', propertyNames._CONSOLE_HOOK_BASE)].join(',');

var consoleHook = _copyProperty(_consoleHook, propertyNames.CONSOLE_HOOK);

module.exports = _objectSpread({
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