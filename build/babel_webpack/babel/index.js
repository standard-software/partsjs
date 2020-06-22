"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.parts = exports.consoleHook = exports.array = exports.object = exports.string = exports.number = exports.convert = exports.compare = exports.syntax = exports.test = exports.type = exports.isPrefixSafixAdd = exports.platform = exports.root = exports._map = exports._replaceAll = exports._copyProperty = exports.propertyNames = exports.rootNames = exports.VERSION = void 0;

var _root2 = _interopRequireDefault(require("./root/root.js"));

var _platform2 = _interopRequireDefault(require("./platform/platform.js"));

var _type2 = _interopRequireDefault(require("./type/type.js"));

var _test2 = _interopRequireDefault(require("./test/test.js"));

var _syntax2 = _interopRequireDefault(require("./syntax/syntax.js"));

var _compare2 = _interopRequireDefault(require("./compare/compare.js"));

var _convert2 = _interopRequireDefault(require("./convert/convert.js"));

var _number2 = _interopRequireDefault(require("./number/number.js"));

var _string2 = _interopRequireDefault(require("./string/string.js"));

var _object2 = _interopRequireDefault(require("./object/object.js"));

var _array2 = _interopRequireDefault(require("./array/array.js"));

var _consoleHook2 = _interopRequireDefault(require("./consoleHook/consoleHook.js"));

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