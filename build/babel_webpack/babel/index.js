"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyObjectAll = exports.isExceptionAll = exports.isRegExpAll = exports.isDateAll = exports.isArrayTypeAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectTypeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotEmptyObj = exports.isNotExcept = exports.isNotObjType = exports.isNotObjFromNull = exports.isNotObjNormal = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotWeakSet = exports.isNotSet = exports.isNotWeakMap = exports.isNotMap = exports.isNotSymbol = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotException = exports.isNotRegExp = exports.isNotDate = exports.isNotArrayType = exports.isNotArray = exports.isNotModule = exports.isNotObjectType = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isEmptyObj = exports.isExcept = exports.isObjType = exports.isObjFromNull = exports.isObjNormal = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isWeakSet = exports.isSet = exports.isWeakMap = exports.isMap = exports.isSymbol = exports.isEmptyArray = exports.isEmptyObject = exports.isException = exports.isRegExp = exports.isDate = exports.isArrayType = exports.isArray = exports.isModule = exports.isObjectType = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.cloneFunction = exports.cloneDeep = exports.clone = void 0;
exports.isNotNullArray = exports.isNotUndefinedArray = exports.isEmptyObjArray = exports.isExceptArray = exports.isObjTypeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isExceptionArray = exports.isRegExpArray = exports.isDateArray = exports.isArrayTypeArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectTypeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotEmptyObjAll = exports.isNotExceptAll = exports.isNotObjTypeAll = exports.isNotObjFromNullAll = exports.isNotObjNormalAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotExceptionAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArrayTypeAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectTypeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isEmptyObjAll = exports.isExceptAll = exports.isObjTypeAll = exports.isObjFromNullAll = exports.isObjNormalAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isEmptyArrayAll = void 0;
exports.strToNumDef = exports.strToNum = exports.numToStr = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.valToIntegerDefault = exports.valToInteger = exports.valToNumberDefault = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports.stringToInteger = exports.stringToNumberDefault = exports.stringToNumber = exports.valueToString = exports.numberToString = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = exports.indexOfMatchAll = exports.allMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.indexOfMatchSome = exports.allMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.indexOfMatch = exports.allMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports.equalFunction = exports.equalDeep = exports.equal = exports.canUseSet = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.isNotEmptyObjArray = exports.isNotExceptArray = exports.isNotObjTypeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotExceptionArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArrayTypeArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectTypeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = void 0;
exports["default"] = exports.parts = exports.consoleHook = exports.array = exports.object = exports.string = exports.number = exports.convert = exports.compare = exports.syntax = exports.test = exports.type = exports.platform = exports.root = exports.VERSION = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.objectToString = exports.setProp = exports.getProp = exports.inProp = exports.propCount = exports.copyProp = exports.setProperty = exports.getProperty = exports.hasPrototype = exports.hasOwn = exports.has = exports.inProperty = exports.propertyCount = exports.copyProperty = exports.isUpperCase = exports.isLowerCase = exports.replaceAll = exports.matchFormat = exports.randomInt = exports.inRange = exports.nearEqual = exports.round = exports.isOdd = exports.isEven = exports.isMultiples = exports.strToIntDef = exports.strToInt = void 0;

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

var VERSION = '6.2.0';
exports.VERSION = VERSION;
var rootNames = {};
var propertyNames = {};
var _copyProperty = _object2["default"]._copyProperty;
var _replaceAll = _string2["default"]._replaceAll;
var _map = _array2["default"]._map; // root

propertyNames.ROOT = 'clone, cloneDeep,' + 'cloneFunction,' + '';
var root = {};
exports.root = root;

_copyProperty(_root2["default"], propertyNames.ROOT, root);

_copyProperty(_root2["default"], propertyNames.ROOT, rootNames); // platform


propertyNames.PLATFORM = 'name,' + 'isWebBrowser,' + 'isWindowsScriptHost,' + 'isGoogleAppsScript,' + 'isJest,' + 'isNodeJs,' + 'isDeno,' + 'browserName,' + 'isChrome,' + 'isFirefox,' + 'isEdge,' + 'isInternetExplorer,' + 'isSafari,' + 'isOpera,' + 'googleAppScriptEngineName,' + 'isGasV8,' + 'isGasRhino,' + 'buildMode,' + '';

var platform = _copyProperty(_platform2["default"], propertyNames.PLATFORM); // type


exports.platform = platform;
propertyNames._TYPE_BASE = 'Undefined, Null, NaNStrict, ' + 'Boolean, Number, Integer, String, ' + 'Function, ' + 'Object, ObjectNormal, ObjectFromNull, ' + 'ObjectType, Module, ' + 'Array, ArrayType, ' + 'Date, RegExp, ' + 'Exception, ' + 'EmptyObject, EmptyArray, ' + 'Symbol, ' + 'Map, WeakMap, Set, WeakSet, ' + 'BooleanObject, NumberObject, StringObject, ' + 'Bool, Num, Int, Str, ' + 'Func, ' + 'Obj, ObjNormal, ObjFromNull, ' + 'ObjType, ' + 'Except, ' + 'EmptyObj, ' + '';

var isPrefixSafixAdd = function isPrefixSafixAdd(prefix, safix, commaString) {
  return _map(_array2["default"].filter(_replaceAll(commaString, ' ', '').split(','), function (v) {
    return v !== '';
  }), function (item) {
    return prefix + item + safix;
  }).join(',');
};

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


propertyNames.OBJECT_PUBLIC = 'isObjectParameter,' + 'copyProperty, propertyCount, inProperty,' + 'has,hasOwn,hasPrototype,' + 'getProperty, setProperty,' + 'objectToKeyValueArray, objectEntries,' + 'copyProp, propCount, inProp,' + 'getProp, setProp,' + '';
propertyNames.OBJECT_ROOT = 'copyProperty,propertyCount,inProperty,' + 'has,hasOwn,hasPrototype,' + 'getProperty,setProperty,' + 'copyProp,propCount,inProp,' + 'getProp,setProp,' + '';
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


propertyNames._CONSOLE_HOOK_BASE = 'Log,Info,Warn,Error,Debug,';
propertyNames.CONSOLE_HOOK = [isPrefixSafixAdd('hook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('unHook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('accept', '', propertyNames._CONSOLE_HOOK_BASE), 'hook', 'unHook', 'accept'].join(',');
var consoleHook = {};
exports.consoleHook = consoleHook;

_copyProperty(_consoleHook2["default"], propertyNames.CONSOLE_HOOK, consoleHook);

var clone = rootNames.clone,
    cloneDeep = rootNames.cloneDeep,
    cloneFunction = rootNames.cloneFunction,
    isUndefined = rootNames.isUndefined,
    isNull = rootNames.isNull,
    isNaNStrict = rootNames.isNaNStrict,
    isBoolean = rootNames.isBoolean,
    isNumber = rootNames.isNumber,
    isInteger = rootNames.isInteger,
    isString = rootNames.isString,
    isFunction = rootNames.isFunction,
    isObject = rootNames.isObject,
    isObjectNormal = rootNames.isObjectNormal,
    isObjectFromNull = rootNames.isObjectFromNull,
    isObjectType = rootNames.isObjectType,
    isModule = rootNames.isModule,
    isArray = rootNames.isArray,
    isArrayType = rootNames.isArrayType,
    isDate = rootNames.isDate,
    isRegExp = rootNames.isRegExp,
    isException = rootNames.isException,
    isEmptyObject = rootNames.isEmptyObject,
    isEmptyArray = rootNames.isEmptyArray,
    isSymbol = rootNames.isSymbol,
    isMap = rootNames.isMap,
    isWeakMap = rootNames.isWeakMap,
    isSet = rootNames.isSet,
    isWeakSet = rootNames.isWeakSet,
    isBooleanObject = rootNames.isBooleanObject,
    isNumberObject = rootNames.isNumberObject,
    isStringObject = rootNames.isStringObject,
    isBool = rootNames.isBool,
    isNum = rootNames.isNum,
    isInt = rootNames.isInt,
    isStr = rootNames.isStr,
    isFunc = rootNames.isFunc,
    isObj = rootNames.isObj,
    isObjNormal = rootNames.isObjNormal,
    isObjFromNull = rootNames.isObjFromNull,
    isObjType = rootNames.isObjType,
    isExcept = rootNames.isExcept,
    isEmptyObj = rootNames.isEmptyObj,
    isNotUndefined = rootNames.isNotUndefined,
    isNotNull = rootNames.isNotNull,
    isNotNaNStrict = rootNames.isNotNaNStrict,
    isNotBoolean = rootNames.isNotBoolean,
    isNotNumber = rootNames.isNotNumber,
    isNotInteger = rootNames.isNotInteger,
    isNotString = rootNames.isNotString,
    isNotFunction = rootNames.isNotFunction,
    isNotObject = rootNames.isNotObject,
    isNotObjectNormal = rootNames.isNotObjectNormal,
    isNotObjectFromNull = rootNames.isNotObjectFromNull,
    isNotObjectType = rootNames.isNotObjectType,
    isNotModule = rootNames.isNotModule,
    isNotArray = rootNames.isNotArray,
    isNotArrayType = rootNames.isNotArrayType,
    isNotDate = rootNames.isNotDate,
    isNotRegExp = rootNames.isNotRegExp,
    isNotException = rootNames.isNotException,
    isNotEmptyObject = rootNames.isNotEmptyObject,
    isNotEmptyArray = rootNames.isNotEmptyArray,
    isNotSymbol = rootNames.isNotSymbol,
    isNotMap = rootNames.isNotMap,
    isNotWeakMap = rootNames.isNotWeakMap,
    isNotSet = rootNames.isNotSet,
    isNotWeakSet = rootNames.isNotWeakSet,
    isNotBooleanObject = rootNames.isNotBooleanObject,
    isNotNumberObject = rootNames.isNotNumberObject,
    isNotStringObject = rootNames.isNotStringObject,
    isNotBool = rootNames.isNotBool,
    isNotNum = rootNames.isNotNum,
    isNotInt = rootNames.isNotInt,
    isNotStr = rootNames.isNotStr,
    isNotFunc = rootNames.isNotFunc,
    isNotObj = rootNames.isNotObj,
    isNotObjNormal = rootNames.isNotObjNormal,
    isNotObjFromNull = rootNames.isNotObjFromNull,
    isNotObjType = rootNames.isNotObjType,
    isNotExcept = rootNames.isNotExcept,
    isNotEmptyObj = rootNames.isNotEmptyObj,
    isUndefinedAll = rootNames.isUndefinedAll,
    isNullAll = rootNames.isNullAll,
    isNaNStrictAll = rootNames.isNaNStrictAll,
    isBooleanAll = rootNames.isBooleanAll,
    isNumberAll = rootNames.isNumberAll,
    isIntegerAll = rootNames.isIntegerAll,
    isStringAll = rootNames.isStringAll,
    isFunctionAll = rootNames.isFunctionAll,
    isObjectAll = rootNames.isObjectAll,
    isObjectNormalAll = rootNames.isObjectNormalAll,
    isObjectFromNullAll = rootNames.isObjectFromNullAll,
    isObjectTypeAll = rootNames.isObjectTypeAll,
    isModuleAll = rootNames.isModuleAll,
    isArrayAll = rootNames.isArrayAll,
    isArrayTypeAll = rootNames.isArrayTypeAll,
    isDateAll = rootNames.isDateAll,
    isRegExpAll = rootNames.isRegExpAll,
    isExceptionAll = rootNames.isExceptionAll,
    isEmptyObjectAll = rootNames.isEmptyObjectAll,
    isEmptyArrayAll = rootNames.isEmptyArrayAll,
    isSymbolAll = rootNames.isSymbolAll,
    isMapAll = rootNames.isMapAll,
    isWeakMapAll = rootNames.isWeakMapAll,
    isSetAll = rootNames.isSetAll,
    isWeakSetAll = rootNames.isWeakSetAll,
    isBooleanObjectAll = rootNames.isBooleanObjectAll,
    isNumberObjectAll = rootNames.isNumberObjectAll,
    isStringObjectAll = rootNames.isStringObjectAll,
    isBoolAll = rootNames.isBoolAll,
    isNumAll = rootNames.isNumAll,
    isIntAll = rootNames.isIntAll,
    isStrAll = rootNames.isStrAll,
    isFuncAll = rootNames.isFuncAll,
    isObjAll = rootNames.isObjAll,
    isObjNormalAll = rootNames.isObjNormalAll,
    isObjFromNullAll = rootNames.isObjFromNullAll,
    isObjTypeAll = rootNames.isObjTypeAll,
    isExceptAll = rootNames.isExceptAll,
    isEmptyObjAll = rootNames.isEmptyObjAll,
    isNotUndefinedAll = rootNames.isNotUndefinedAll,
    isNotNullAll = rootNames.isNotNullAll,
    isNotNaNStrictAll = rootNames.isNotNaNStrictAll,
    isNotBooleanAll = rootNames.isNotBooleanAll,
    isNotNumberAll = rootNames.isNotNumberAll,
    isNotIntegerAll = rootNames.isNotIntegerAll,
    isNotStringAll = rootNames.isNotStringAll,
    isNotFunctionAll = rootNames.isNotFunctionAll,
    isNotObjectAll = rootNames.isNotObjectAll,
    isNotObjectNormalAll = rootNames.isNotObjectNormalAll,
    isNotObjectFromNullAll = rootNames.isNotObjectFromNullAll,
    isNotObjectTypeAll = rootNames.isNotObjectTypeAll,
    isNotModuleAll = rootNames.isNotModuleAll,
    isNotArrayAll = rootNames.isNotArrayAll,
    isNotArrayTypeAll = rootNames.isNotArrayTypeAll,
    isNotDateAll = rootNames.isNotDateAll,
    isNotRegExpAll = rootNames.isNotRegExpAll,
    isNotExceptionAll = rootNames.isNotExceptionAll,
    isNotEmptyObjectAll = rootNames.isNotEmptyObjectAll,
    isNotEmptyArrayAll = rootNames.isNotEmptyArrayAll,
    isNotSymbolAll = rootNames.isNotSymbolAll,
    isNotMapAll = rootNames.isNotMapAll,
    isNotWeakMapAll = rootNames.isNotWeakMapAll,
    isNotSetAll = rootNames.isNotSetAll,
    isNotWeakSetAll = rootNames.isNotWeakSetAll,
    isNotBooleanObjectAll = rootNames.isNotBooleanObjectAll,
    isNotNumberObjectAll = rootNames.isNotNumberObjectAll,
    isNotStringObjectAll = rootNames.isNotStringObjectAll,
    isNotBoolAll = rootNames.isNotBoolAll,
    isNotNumAll = rootNames.isNotNumAll,
    isNotIntAll = rootNames.isNotIntAll,
    isNotStrAll = rootNames.isNotStrAll,
    isNotFuncAll = rootNames.isNotFuncAll,
    isNotObjAll = rootNames.isNotObjAll,
    isNotObjNormalAll = rootNames.isNotObjNormalAll,
    isNotObjFromNullAll = rootNames.isNotObjFromNullAll,
    isNotObjTypeAll = rootNames.isNotObjTypeAll,
    isNotExceptAll = rootNames.isNotExceptAll,
    isNotEmptyObjAll = rootNames.isNotEmptyObjAll,
    isUndefinedArray = rootNames.isUndefinedArray,
    isNullArray = rootNames.isNullArray,
    isNaNStrictArray = rootNames.isNaNStrictArray,
    isBooleanArray = rootNames.isBooleanArray,
    isNumberArray = rootNames.isNumberArray,
    isIntegerArray = rootNames.isIntegerArray,
    isStringArray = rootNames.isStringArray,
    isFunctionArray = rootNames.isFunctionArray,
    isObjectArray = rootNames.isObjectArray,
    isObjectNormalArray = rootNames.isObjectNormalArray,
    isObjectFromNullArray = rootNames.isObjectFromNullArray,
    isObjectTypeArray = rootNames.isObjectTypeArray,
    isModuleArray = rootNames.isModuleArray,
    isArrayArray = rootNames.isArrayArray,
    isArrayTypeArray = rootNames.isArrayTypeArray,
    isDateArray = rootNames.isDateArray,
    isRegExpArray = rootNames.isRegExpArray,
    isExceptionArray = rootNames.isExceptionArray,
    isEmptyObjectArray = rootNames.isEmptyObjectArray,
    isEmptyArrayArray = rootNames.isEmptyArrayArray,
    isSymbolArray = rootNames.isSymbolArray,
    isMapArray = rootNames.isMapArray,
    isWeakMapArray = rootNames.isWeakMapArray,
    isSetArray = rootNames.isSetArray,
    isWeakSetArray = rootNames.isWeakSetArray,
    isBooleanObjectArray = rootNames.isBooleanObjectArray,
    isNumberObjectArray = rootNames.isNumberObjectArray,
    isStringObjectArray = rootNames.isStringObjectArray,
    isBoolArray = rootNames.isBoolArray,
    isNumArray = rootNames.isNumArray,
    isIntArray = rootNames.isIntArray,
    isStrArray = rootNames.isStrArray,
    isFuncArray = rootNames.isFuncArray,
    isObjArray = rootNames.isObjArray,
    isObjNormalArray = rootNames.isObjNormalArray,
    isObjFromNullArray = rootNames.isObjFromNullArray,
    isObjTypeArray = rootNames.isObjTypeArray,
    isExceptArray = rootNames.isExceptArray,
    isEmptyObjArray = rootNames.isEmptyObjArray,
    isNotUndefinedArray = rootNames.isNotUndefinedArray,
    isNotNullArray = rootNames.isNotNullArray,
    isNotNaNStrictArray = rootNames.isNotNaNStrictArray,
    isNotBooleanArray = rootNames.isNotBooleanArray,
    isNotNumberArray = rootNames.isNotNumberArray,
    isNotIntegerArray = rootNames.isNotIntegerArray,
    isNotStringArray = rootNames.isNotStringArray,
    isNotFunctionArray = rootNames.isNotFunctionArray,
    isNotObjectArray = rootNames.isNotObjectArray,
    isNotObjectNormalArray = rootNames.isNotObjectNormalArray,
    isNotObjectFromNullArray = rootNames.isNotObjectFromNullArray,
    isNotObjectTypeArray = rootNames.isNotObjectTypeArray,
    isNotModuleArray = rootNames.isNotModuleArray,
    isNotArrayArray = rootNames.isNotArrayArray,
    isNotArrayTypeArray = rootNames.isNotArrayTypeArray,
    isNotDateArray = rootNames.isNotDateArray,
    isNotRegExpArray = rootNames.isNotRegExpArray,
    isNotExceptionArray = rootNames.isNotExceptionArray,
    isNotEmptyObjectArray = rootNames.isNotEmptyObjectArray,
    isNotEmptyArrayArray = rootNames.isNotEmptyArrayArray,
    isNotSymbolArray = rootNames.isNotSymbolArray,
    isNotMapArray = rootNames.isNotMapArray,
    isNotWeakMapArray = rootNames.isNotWeakMapArray,
    isNotSetArray = rootNames.isNotSetArray,
    isNotWeakSetArray = rootNames.isNotWeakSetArray,
    isNotBooleanObjectArray = rootNames.isNotBooleanObjectArray,
    isNotNumberObjectArray = rootNames.isNotNumberObjectArray,
    isNotStringObjectArray = rootNames.isNotStringObjectArray,
    isNotBoolArray = rootNames.isNotBoolArray,
    isNotNumArray = rootNames.isNotNumArray,
    isNotIntArray = rootNames.isNotIntArray,
    isNotStrArray = rootNames.isNotStrArray,
    isNotFuncArray = rootNames.isNotFuncArray,
    isNotObjArray = rootNames.isNotObjArray,
    isNotObjNormalArray = rootNames.isNotObjNormalArray,
    isNotObjFromNullArray = rootNames.isNotObjFromNullArray,
    isNotObjTypeArray = rootNames.isNotObjTypeArray,
    isNotExceptArray = rootNames.isNotExceptArray,
    isNotEmptyObjArray = rootNames.isNotEmptyObjArray,
    isThrown = rootNames.isThrown,
    isThrownValue = rootNames.isThrownValue,
    isThrownException = rootNames.isThrownException,
    isNotThrown = rootNames.isNotThrown,
    assert = rootNames.assert,
    guard = rootNames.guard,
    functionValue = rootNames.functionValue,
    sc = rootNames.sc,
    if_ = rootNames.if_,
    switch_ = rootNames.switch_,
    loop = rootNames.loop,
    canUseMap = rootNames.canUseMap,
    canUseSet = rootNames.canUseSet,
    equal = rootNames.equal,
    equalDeep = rootNames.equalDeep,
    equalFunction = rootNames.equalFunction,
    or = rootNames.or,
    match = rootNames.match,
    matchValue = rootNames.matchValue,
    initialValue = rootNames.initialValue,
    allMatch = rootNames.allMatch,
    indexOfMatch = rootNames.indexOfMatch,
    someMatch = rootNames.someMatch,
    matchSome = rootNames.matchSome,
    matchSomeValue = rootNames.matchSomeValue,
    allMatchSome = rootNames.allMatchSome,
    indexOfMatchSome = rootNames.indexOfMatchSome,
    someMatchSome = rootNames.someMatchSome,
    matchAll = rootNames.matchAll,
    matchAllValue = rootNames.matchAllValue,
    allMatchAll = rootNames.allMatchAll,
    indexOfMatchAll = rootNames.indexOfMatchAll,
    someMatchAll = rootNames.someMatchAll,
    includes = rootNames.includes,
    includesSome = rootNames.includesSome,
    includesAll = rootNames.includesAll,
    numberToString = rootNames.numberToString,
    valueToString = rootNames.valueToString,
    stringToNumber = rootNames.stringToNumber,
    stringToNumberDefault = rootNames.stringToNumberDefault,
    stringToInteger = rootNames.stringToInteger,
    stringToIntegerDefault = rootNames.stringToIntegerDefault,
    valueToNumber = rootNames.valueToNumber,
    valueToNumberDefault = rootNames.valueToNumberDefault,
    valueToInteger = rootNames.valueToInteger,
    valueToIntegerDefault = rootNames.valueToIntegerDefault,
    numToString = rootNames.numToString,
    valToString = rootNames.valToString,
    strToNumber = rootNames.strToNumber,
    strToNumberDef = rootNames.strToNumberDef,
    strToInteger = rootNames.strToInteger,
    strToIntegerDef = rootNames.strToIntegerDef,
    valToNumber = rootNames.valToNumber,
    valToNumberDefault = rootNames.valToNumberDefault,
    valToInteger = rootNames.valToInteger,
    valToIntegerDefault = rootNames.valToIntegerDefault,
    valToNum = rootNames.valToNum,
    valToNumDef = rootNames.valToNumDef,
    valToInt = rootNames.valToInt,
    valToIntDef = rootNames.valToIntDef,
    numToStr = rootNames.numToStr,
    strToNum = rootNames.strToNum,
    strToNumDef = rootNames.strToNumDef,
    strToInt = rootNames.strToInt,
    strToIntDef = rootNames.strToIntDef,
    isMultiples = rootNames.isMultiples,
    isEven = rootNames.isEven,
    isOdd = rootNames.isOdd,
    round = rootNames.round,
    nearEqual = rootNames.nearEqual,
    inRange = rootNames.inRange,
    randomInt = rootNames.randomInt,
    matchFormat = rootNames.matchFormat,
    replaceAll = rootNames.replaceAll,
    isLowerCase = rootNames.isLowerCase,
    isUpperCase = rootNames.isUpperCase,
    copyProperty = rootNames.copyProperty,
    propertyCount = rootNames.propertyCount,
    inProperty = rootNames.inProperty,
    has = rootNames.has,
    hasOwn = rootNames.hasOwn,
    hasPrototype = rootNames.hasPrototype,
    getProperty = rootNames.getProperty,
    setProperty = rootNames.setProperty,
    copyProp = rootNames.copyProp,
    propCount = rootNames.propCount,
    inProp = rootNames.inProp,
    getProp = rootNames.getProp,
    setProp = rootNames.setProp,
    objectToString = rootNames.objectToString,
    min = rootNames.min,
    max = rootNames.max,
    sum = rootNames.sum,
    average = rootNames.average,
    median = rootNames.median;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
exports.objectToString = objectToString;
exports.setProp = setProp;
exports.getProp = getProp;
exports.inProp = inProp;
exports.propCount = propCount;
exports.copyProp = copyProp;
exports.setProperty = setProperty;
exports.getProperty = getProperty;
exports.hasPrototype = hasPrototype;
exports.hasOwn = hasOwn;
exports.has = has;
exports.inProperty = inProperty;
exports.propertyCount = propertyCount;
exports.copyProperty = copyProperty;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.replaceAll = replaceAll;
exports.matchFormat = matchFormat;
exports.randomInt = randomInt;
exports.inRange = inRange;
exports.nearEqual = nearEqual;
exports.round = round;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isMultiples = isMultiples;
exports.strToIntDef = strToIntDef;
exports.strToInt = strToInt;
exports.strToNumDef = strToNumDef;
exports.strToNum = strToNum;
exports.numToStr = numToStr;
exports.valToIntDef = valToIntDef;
exports.valToInt = valToInt;
exports.valToNumDef = valToNumDef;
exports.valToNum = valToNum;
exports.valToIntegerDefault = valToIntegerDefault;
exports.valToInteger = valToInteger;
exports.valToNumberDefault = valToNumberDefault;
exports.valToNumber = valToNumber;
exports.strToIntegerDef = strToIntegerDef;
exports.strToInteger = strToInteger;
exports.strToNumberDef = strToNumberDef;
exports.strToNumber = strToNumber;
exports.valToString = valToString;
exports.numToString = numToString;
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
exports.includesAll = includesAll;
exports.includesSome = includesSome;
exports.includes = includes;
exports.someMatchAll = someMatchAll;
exports.indexOfMatchAll = indexOfMatchAll;
exports.allMatchAll = allMatchAll;
exports.matchAllValue = matchAllValue;
exports.matchAll = matchAll;
exports.someMatchSome = someMatchSome;
exports.indexOfMatchSome = indexOfMatchSome;
exports.allMatchSome = allMatchSome;
exports.matchSomeValue = matchSomeValue;
exports.matchSome = matchSome;
exports.someMatch = someMatch;
exports.indexOfMatch = indexOfMatch;
exports.allMatch = allMatch;
exports.initialValue = initialValue;
exports.matchValue = matchValue;
exports.match = match;
exports.or = or;
exports.equalFunction = equalFunction;
exports.equalDeep = equalDeep;
exports.equal = equal;
exports.canUseSet = canUseSet;
exports.canUseMap = canUseMap;
exports.loop = loop;
exports.switch_ = switch_;
exports.if_ = if_;
exports.sc = sc;
exports.functionValue = functionValue;
exports.guard = guard;
exports.assert = assert;
exports.isNotThrown = isNotThrown;
exports.isThrownException = isThrownException;
exports.isThrownValue = isThrownValue;
exports.isThrown = isThrown;
exports.isNotEmptyObjArray = isNotEmptyObjArray;
exports.isNotExceptArray = isNotExceptArray;
exports.isNotObjTypeArray = isNotObjTypeArray;
exports.isNotObjFromNullArray = isNotObjFromNullArray;
exports.isNotObjNormalArray = isNotObjNormalArray;
exports.isNotObjArray = isNotObjArray;
exports.isNotFuncArray = isNotFuncArray;
exports.isNotStrArray = isNotStrArray;
exports.isNotIntArray = isNotIntArray;
exports.isNotNumArray = isNotNumArray;
exports.isNotBoolArray = isNotBoolArray;
exports.isNotStringObjectArray = isNotStringObjectArray;
exports.isNotNumberObjectArray = isNotNumberObjectArray;
exports.isNotBooleanObjectArray = isNotBooleanObjectArray;
exports.isNotWeakSetArray = isNotWeakSetArray;
exports.isNotSetArray = isNotSetArray;
exports.isNotWeakMapArray = isNotWeakMapArray;
exports.isNotMapArray = isNotMapArray;
exports.isNotSymbolArray = isNotSymbolArray;
exports.isNotEmptyArrayArray = isNotEmptyArrayArray;
exports.isNotEmptyObjectArray = isNotEmptyObjectArray;
exports.isNotExceptionArray = isNotExceptionArray;
exports.isNotRegExpArray = isNotRegExpArray;
exports.isNotDateArray = isNotDateArray;
exports.isNotArrayTypeArray = isNotArrayTypeArray;
exports.isNotArrayArray = isNotArrayArray;
exports.isNotModuleArray = isNotModuleArray;
exports.isNotObjectTypeArray = isNotObjectTypeArray;
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
exports.isEmptyObjArray = isEmptyObjArray;
exports.isExceptArray = isExceptArray;
exports.isObjTypeArray = isObjTypeArray;
exports.isObjFromNullArray = isObjFromNullArray;
exports.isObjNormalArray = isObjNormalArray;
exports.isObjArray = isObjArray;
exports.isFuncArray = isFuncArray;
exports.isStrArray = isStrArray;
exports.isIntArray = isIntArray;
exports.isNumArray = isNumArray;
exports.isBoolArray = isBoolArray;
exports.isStringObjectArray = isStringObjectArray;
exports.isNumberObjectArray = isNumberObjectArray;
exports.isBooleanObjectArray = isBooleanObjectArray;
exports.isWeakSetArray = isWeakSetArray;
exports.isSetArray = isSetArray;
exports.isWeakMapArray = isWeakMapArray;
exports.isMapArray = isMapArray;
exports.isSymbolArray = isSymbolArray;
exports.isEmptyArrayArray = isEmptyArrayArray;
exports.isEmptyObjectArray = isEmptyObjectArray;
exports.isExceptionArray = isExceptionArray;
exports.isRegExpArray = isRegExpArray;
exports.isDateArray = isDateArray;
exports.isArrayTypeArray = isArrayTypeArray;
exports.isArrayArray = isArrayArray;
exports.isModuleArray = isModuleArray;
exports.isObjectTypeArray = isObjectTypeArray;
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
exports.isNotEmptyObjAll = isNotEmptyObjAll;
exports.isNotExceptAll = isNotExceptAll;
exports.isNotObjTypeAll = isNotObjTypeAll;
exports.isNotObjFromNullAll = isNotObjFromNullAll;
exports.isNotObjNormalAll = isNotObjNormalAll;
exports.isNotObjAll = isNotObjAll;
exports.isNotFuncAll = isNotFuncAll;
exports.isNotStrAll = isNotStrAll;
exports.isNotIntAll = isNotIntAll;
exports.isNotNumAll = isNotNumAll;
exports.isNotBoolAll = isNotBoolAll;
exports.isNotStringObjectAll = isNotStringObjectAll;
exports.isNotNumberObjectAll = isNotNumberObjectAll;
exports.isNotBooleanObjectAll = isNotBooleanObjectAll;
exports.isNotWeakSetAll = isNotWeakSetAll;
exports.isNotSetAll = isNotSetAll;
exports.isNotWeakMapAll = isNotWeakMapAll;
exports.isNotMapAll = isNotMapAll;
exports.isNotSymbolAll = isNotSymbolAll;
exports.isNotEmptyArrayAll = isNotEmptyArrayAll;
exports.isNotEmptyObjectAll = isNotEmptyObjectAll;
exports.isNotExceptionAll = isNotExceptionAll;
exports.isNotRegExpAll = isNotRegExpAll;
exports.isNotDateAll = isNotDateAll;
exports.isNotArrayTypeAll = isNotArrayTypeAll;
exports.isNotArrayAll = isNotArrayAll;
exports.isNotModuleAll = isNotModuleAll;
exports.isNotObjectTypeAll = isNotObjectTypeAll;
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
exports.isEmptyObjAll = isEmptyObjAll;
exports.isExceptAll = isExceptAll;
exports.isObjTypeAll = isObjTypeAll;
exports.isObjFromNullAll = isObjFromNullAll;
exports.isObjNormalAll = isObjNormalAll;
exports.isObjAll = isObjAll;
exports.isFuncAll = isFuncAll;
exports.isStrAll = isStrAll;
exports.isIntAll = isIntAll;
exports.isNumAll = isNumAll;
exports.isBoolAll = isBoolAll;
exports.isStringObjectAll = isStringObjectAll;
exports.isNumberObjectAll = isNumberObjectAll;
exports.isBooleanObjectAll = isBooleanObjectAll;
exports.isWeakSetAll = isWeakSetAll;
exports.isSetAll = isSetAll;
exports.isWeakMapAll = isWeakMapAll;
exports.isMapAll = isMapAll;
exports.isSymbolAll = isSymbolAll;
exports.isEmptyArrayAll = isEmptyArrayAll;
exports.isEmptyObjectAll = isEmptyObjectAll;
exports.isExceptionAll = isExceptionAll;
exports.isRegExpAll = isRegExpAll;
exports.isDateAll = isDateAll;
exports.isArrayTypeAll = isArrayTypeAll;
exports.isArrayAll = isArrayAll;
exports.isModuleAll = isModuleAll;
exports.isObjectTypeAll = isObjectTypeAll;
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
exports.isNotEmptyObj = isNotEmptyObj;
exports.isNotExcept = isNotExcept;
exports.isNotObjType = isNotObjType;
exports.isNotObjFromNull = isNotObjFromNull;
exports.isNotObjNormal = isNotObjNormal;
exports.isNotObj = isNotObj;
exports.isNotFunc = isNotFunc;
exports.isNotStr = isNotStr;
exports.isNotInt = isNotInt;
exports.isNotNum = isNotNum;
exports.isNotBool = isNotBool;
exports.isNotStringObject = isNotStringObject;
exports.isNotNumberObject = isNotNumberObject;
exports.isNotBooleanObject = isNotBooleanObject;
exports.isNotWeakSet = isNotWeakSet;
exports.isNotSet = isNotSet;
exports.isNotWeakMap = isNotWeakMap;
exports.isNotMap = isNotMap;
exports.isNotSymbol = isNotSymbol;
exports.isNotEmptyArray = isNotEmptyArray;
exports.isNotEmptyObject = isNotEmptyObject;
exports.isNotException = isNotException;
exports.isNotRegExp = isNotRegExp;
exports.isNotDate = isNotDate;
exports.isNotArrayType = isNotArrayType;
exports.isNotArray = isNotArray;
exports.isNotModule = isNotModule;
exports.isNotObjectType = isNotObjectType;
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
exports.isEmptyObj = isEmptyObj;
exports.isExcept = isExcept;
exports.isObjType = isObjType;
exports.isObjFromNull = isObjFromNull;
exports.isObjNormal = isObjNormal;
exports.isObj = isObj;
exports.isFunc = isFunc;
exports.isStr = isStr;
exports.isInt = isInt;
exports.isNum = isNum;
exports.isBool = isBool;
exports.isStringObject = isStringObject;
exports.isNumberObject = isNumberObject;
exports.isBooleanObject = isBooleanObject;
exports.isWeakSet = isWeakSet;
exports.isSet = isSet;
exports.isWeakMap = isWeakMap;
exports.isMap = isMap;
exports.isSymbol = isSymbol;
exports.isEmptyArray = isEmptyArray;
exports.isEmptyObject = isEmptyObject;
exports.isException = isException;
exports.isRegExp = isRegExp;
exports.isDate = isDate;
exports.isArrayType = isArrayType;
exports.isArray = isArray;
exports.isModule = isModule;
exports.isObjectType = isObjectType;
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
exports.cloneFunction = cloneFunction;
exports.cloneDeep = cloneDeep;
exports.clone = clone;

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

exports.parts = parts;

var _default = _objectSpread(_objectSpread({}, parts), {}, {
  parts: parts
});

exports["default"] = _default;