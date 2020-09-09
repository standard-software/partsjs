"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isExceptionAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isNotWeakMap = exports.isNotMap = exports.isNotSymbol = exports.isNotException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isWeakSet = exports.isSet = exports.isWeakMap = exports.isMap = exports.isSymbol = exports.isException = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = exports.isError = exports.platform = exports.root = exports.cloneDeep = exports.clone = exports.VERSION = void 0;
exports.isNotObjNormal = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isNotArrayType = exports.isNotObjectType = exports.isObjType = exports.isExcept = exports.isEmptyObj = exports.isObjLike = exports.isObjFromNull = exports.isObjNormal = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isArrayType = exports.isObjectType = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotExceptionArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isExceptionArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotExceptionAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = exports.isNotObjectNormalAll = void 0;
exports.indexOfMatchAll = exports.allMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.indexOfMatchSome = exports.allMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.indexOfMatch = exports.allMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports.equalDeep = exports.equal = exports.Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.type = exports.isNotObjTypeArray = exports.isNotExceptArray = exports.isNotEmptyObjArray = exports.isNotObjLikeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isNotArrayTypeArray = exports.isNotObjectTypeArray = exports.isObjTypeArray = exports.isExceptArray = exports.isEmptyObjArray = exports.isObjLikeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isArrayTypeArray = exports.isObjectTypeArray = exports.isNotObjTypeAll = exports.isNotExceptAll = exports.isNotEmptyObjAll = exports.isNotObjLikeAll = exports.isNotObjFromNullAll = exports.isNotObjNormalAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isNotArrayTypeAll = exports.isNotObjectTypeAll = exports.isObjTypeAll = exports.isExceptAll = exports.isEmptyObjAll = exports.isObjLikeAll = exports.isObjFromNullAll = exports.isObjNormalAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isArrayTypeAll = exports.isObjectTypeAll = exports.isNotObjType = exports.isNotExcept = exports.isNotEmptyObj = exports.isNotObjLike = exports.isNotObjFromNull = void 0;
exports["default"] = exports.parts = exports.wsh = exports.consoleHook = exports.array = exports.object = exports.string = exports.number = exports.convert = exports.compare = exports.syntax = exports.test = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.setProp = exports.getProp = exports.fixProp = exports.inProp = exports.propCount = exports.copyProp = exports.objectToValueArray = exports.objectValues = exports.objectToKeyArray = exports.objectKeys = exports.objectToKeyValueArray = exports.objectEntries = exports.propertyList = exports.setProperty = exports.getProperty = exports.hasPrototype = exports.hasOwn = exports.has = exports.fixProperty = exports.inProperty = exports.propertyCount = exports.copyProperty = exports.splitDotItems = exports.splitCommaItems = exports.split = exports.isUpperCase = exports.isLowerCase = exports.replaceAll = exports.matchFormat = exports.randomInt = exports.inRange = exports.nearEqual = exports.round = exports.isOdd = exports.isEven = exports.isMultiples = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.numToStr = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.valToIntegerDefault = exports.valToInteger = exports.valToNumberDefault = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports.stringToInteger = exports.stringToNumberDefault = exports.stringToNumber = exports.valueToString = exports.numberToString = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = void 0;

var _polyfill2 = _interopRequireDefault(require("./polyfill.js"));

var _root2 = _interopRequireDefault(require("./root/root.js"));

var _platform2 = _interopRequireDefault(require("./platform/platform.js"));

var _type2 = _interopRequireDefault(require("./type/type.js"));

var _typeAlias2 = _interopRequireDefault(require("./type/typeAlias.js"));

var _test2 = _interopRequireDefault(require("./test/test.js"));

var _syntax2 = _interopRequireDefault(require("./syntax/syntax.js"));

var _compare2 = _interopRequireDefault(require("./compare/compare.js"));

var _convert2 = _interopRequireDefault(require("./convert/convert.js"));

var _number2 = _interopRequireDefault(require("./number/number.js"));

var _string2 = _interopRequireDefault(require("./string/string.js"));

var _object2 = _interopRequireDefault(require("./object/object.js"));

var _array2 = _interopRequireDefault(require("./array/array.js"));

var _consoleHook2 = _interopRequireDefault(require("./consoleHook/consoleHook.js"));

var _wsh2 = _interopRequireDefault(require("./wsh/wsh.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VERSION = '8.0.0 beta';
exports.VERSION = VERSION;
var rootAlias = {};
var propertyNames = {};
var _copyProperty = _object2["default"]._copyProperty;
var _replaceAll = _string2["default"]._replaceAll;
var _map = _array2["default"]._map;
/**
 * root
 */

var clone = _root2["default"].clone,
    cloneDeep = _root2["default"].cloneDeep;
exports.cloneDeep = cloneDeep;
exports.clone = clone;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  clone: clone,
  cloneDeep: cloneDeep
});
var root = {
  clone: clone,
  cloneDeep: cloneDeep
};
/**
 * platform
 */

exports.root = root;

var platform = _objectSpread({}, _platform2["default"]);
/**
 * type
 */


exports.platform = platform;
var isError = _type2["default"].isError,
    objectToString = _type2["default"].objectToString,
    isUndefined = _type2["default"].isUndefined,
    isNull = _type2["default"].isNull,
    isNaNStrict = _type2["default"].isNaNStrict,
    isBoolean = _type2["default"].isBoolean,
    isNumber = _type2["default"].isNumber,
    isInteger = _type2["default"].isInteger,
    isString = _type2["default"].isString,
    isFunction = _type2["default"].isFunction,
    isObject = _type2["default"].isObject,
    isObjectNormal = _type2["default"].isObjectNormal,
    isObjectFromNull = _type2["default"].isObjectFromNull,
    isObjectLike = _type2["default"].isObjectLike,
    isModule = _type2["default"].isModule,
    isArray = _type2["default"].isArray,
    isArraySeries = _type2["default"].isArraySeries,
    isDate = _type2["default"].isDate,
    isRegExp = _type2["default"].isRegExp,
    isBooleanObject = _type2["default"].isBooleanObject,
    isNumberObject = _type2["default"].isNumberObject,
    isStringObject = _type2["default"].isStringObject,
    isEmptyObject = _type2["default"].isEmptyObject,
    isEmptyArray = _type2["default"].isEmptyArray,
    isException = _type2["default"].isException,
    isSymbol = _type2["default"].isSymbol,
    isMap = _type2["default"].isMap,
    isWeakMap = _type2["default"].isWeakMap,
    isSet = _type2["default"].isSet,
    isWeakSet = _type2["default"].isWeakSet,
    isNotUndefined = _type2["default"].isNotUndefined,
    isNotNull = _type2["default"].isNotNull,
    isNotNaNStrict = _type2["default"].isNotNaNStrict,
    isNotBoolean = _type2["default"].isNotBoolean,
    isNotNumber = _type2["default"].isNotNumber,
    isNotInteger = _type2["default"].isNotInteger,
    isNotString = _type2["default"].isNotString,
    isNotFunction = _type2["default"].isNotFunction,
    isNotObject = _type2["default"].isNotObject,
    isNotObjectNormal = _type2["default"].isNotObjectNormal,
    isNotObjectFromNull = _type2["default"].isNotObjectFromNull,
    isNotObjectLike = _type2["default"].isNotObjectLike,
    isNotModule = _type2["default"].isNotModule,
    isNotArray = _type2["default"].isNotArray,
    isNotArraySeries = _type2["default"].isNotArraySeries,
    isNotDate = _type2["default"].isNotDate,
    isNotRegExp = _type2["default"].isNotRegExp,
    isNotBooleanObject = _type2["default"].isNotBooleanObject,
    isNotNumberObject = _type2["default"].isNotNumberObject,
    isNotStringObject = _type2["default"].isNotStringObject,
    isNotEmptyObject = _type2["default"].isNotEmptyObject,
    isNotEmptyArray = _type2["default"].isNotEmptyArray,
    isNotException = _type2["default"].isNotException,
    isNotSymbol = _type2["default"].isNotSymbol,
    isNotMap = _type2["default"].isNotMap,
    isNotWeakMap = _type2["default"].isNotWeakMap,
    isNotSet = _type2["default"].isNotSet,
    isNotWeakSet = _type2["default"].isNotWeakSet,
    isUndefinedAll = _type2["default"].isUndefinedAll,
    isNullAll = _type2["default"].isNullAll,
    isNaNStrictAll = _type2["default"].isNaNStrictAll,
    isBooleanAll = _type2["default"].isBooleanAll,
    isNumberAll = _type2["default"].isNumberAll,
    isIntegerAll = _type2["default"].isIntegerAll,
    isStringAll = _type2["default"].isStringAll,
    isFunctionAll = _type2["default"].isFunctionAll,
    isObjectAll = _type2["default"].isObjectAll,
    isObjectNormalAll = _type2["default"].isObjectNormalAll,
    isObjectFromNullAll = _type2["default"].isObjectFromNullAll,
    isObjectLikeAll = _type2["default"].isObjectLikeAll,
    isModuleAll = _type2["default"].isModuleAll,
    isArrayAll = _type2["default"].isArrayAll,
    isArraySeriesAll = _type2["default"].isArraySeriesAll,
    isDateAll = _type2["default"].isDateAll,
    isRegExpAll = _type2["default"].isRegExpAll,
    isBooleanObjectAll = _type2["default"].isBooleanObjectAll,
    isNumberObjectAll = _type2["default"].isNumberObjectAll,
    isStringObjectAll = _type2["default"].isStringObjectAll,
    isEmptyObjectAll = _type2["default"].isEmptyObjectAll,
    isEmptyArrayAll = _type2["default"].isEmptyArrayAll,
    isExceptionAll = _type2["default"].isExceptionAll,
    isSymbolAll = _type2["default"].isSymbolAll,
    isMapAll = _type2["default"].isMapAll,
    isWeakMapAll = _type2["default"].isWeakMapAll,
    isSetAll = _type2["default"].isSetAll,
    isWeakSetAll = _type2["default"].isWeakSetAll,
    isNotUndefinedAll = _type2["default"].isNotUndefinedAll,
    isNotNullAll = _type2["default"].isNotNullAll,
    isNotNaNStrictAll = _type2["default"].isNotNaNStrictAll,
    isNotBooleanAll = _type2["default"].isNotBooleanAll,
    isNotNumberAll = _type2["default"].isNotNumberAll,
    isNotIntegerAll = _type2["default"].isNotIntegerAll,
    isNotStringAll = _type2["default"].isNotStringAll,
    isNotFunctionAll = _type2["default"].isNotFunctionAll,
    isNotObjectAll = _type2["default"].isNotObjectAll,
    isNotObjectNormalAll = _type2["default"].isNotObjectNormalAll,
    isNotObjectFromNullAll = _type2["default"].isNotObjectFromNullAll,
    isNotObjectLikeAll = _type2["default"].isNotObjectLikeAll,
    isNotModuleAll = _type2["default"].isNotModuleAll,
    isNotArrayAll = _type2["default"].isNotArrayAll,
    isNotArraySeriesAll = _type2["default"].isNotArraySeriesAll,
    isNotDateAll = _type2["default"].isNotDateAll,
    isNotRegExpAll = _type2["default"].isNotRegExpAll,
    isNotBooleanObjectAll = _type2["default"].isNotBooleanObjectAll,
    isNotNumberObjectAll = _type2["default"].isNotNumberObjectAll,
    isNotStringObjectAll = _type2["default"].isNotStringObjectAll,
    isNotEmptyObjectAll = _type2["default"].isNotEmptyObjectAll,
    isNotEmptyArrayAll = _type2["default"].isNotEmptyArrayAll,
    isNotExceptionAll = _type2["default"].isNotExceptionAll,
    isNotSymbolAll = _type2["default"].isNotSymbolAll,
    isNotMapAll = _type2["default"].isNotMapAll,
    isNotWeakMapAll = _type2["default"].isNotWeakMapAll,
    isNotSetAll = _type2["default"].isNotSetAll,
    isNotWeakSetAll = _type2["default"].isNotWeakSetAll,
    isUndefinedArray = _type2["default"].isUndefinedArray,
    isNullArray = _type2["default"].isNullArray,
    isNaNStrictArray = _type2["default"].isNaNStrictArray,
    isBooleanArray = _type2["default"].isBooleanArray,
    isNumberArray = _type2["default"].isNumberArray,
    isIntegerArray = _type2["default"].isIntegerArray,
    isStringArray = _type2["default"].isStringArray,
    isFunctionArray = _type2["default"].isFunctionArray,
    isObjectArray = _type2["default"].isObjectArray,
    isObjectNormalArray = _type2["default"].isObjectNormalArray,
    isObjectFromNullArray = _type2["default"].isObjectFromNullArray,
    isObjectLikeArray = _type2["default"].isObjectLikeArray,
    isModuleArray = _type2["default"].isModuleArray,
    isArrayArray = _type2["default"].isArrayArray,
    isArraySeriesArray = _type2["default"].isArraySeriesArray,
    isDateArray = _type2["default"].isDateArray,
    isRegExpArray = _type2["default"].isRegExpArray,
    isBooleanObjectArray = _type2["default"].isBooleanObjectArray,
    isNumberObjectArray = _type2["default"].isNumberObjectArray,
    isStringObjectArray = _type2["default"].isStringObjectArray,
    isEmptyObjectArray = _type2["default"].isEmptyObjectArray,
    isEmptyArrayArray = _type2["default"].isEmptyArrayArray,
    isExceptionArray = _type2["default"].isExceptionArray,
    isSymbolArray = _type2["default"].isSymbolArray,
    isMapArray = _type2["default"].isMapArray,
    isWeakMapArray = _type2["default"].isWeakMapArray,
    isSetArray = _type2["default"].isSetArray,
    isWeakSetArray = _type2["default"].isWeakSetArray,
    isNotUndefinedArray = _type2["default"].isNotUndefinedArray,
    isNotNullArray = _type2["default"].isNotNullArray,
    isNotNaNStrictArray = _type2["default"].isNotNaNStrictArray,
    isNotBooleanArray = _type2["default"].isNotBooleanArray,
    isNotNumberArray = _type2["default"].isNotNumberArray,
    isNotIntegerArray = _type2["default"].isNotIntegerArray,
    isNotStringArray = _type2["default"].isNotStringArray,
    isNotFunctionArray = _type2["default"].isNotFunctionArray,
    isNotObjectArray = _type2["default"].isNotObjectArray,
    isNotObjectNormalArray = _type2["default"].isNotObjectNormalArray,
    isNotObjectFromNullArray = _type2["default"].isNotObjectFromNullArray,
    isNotObjectLikeArray = _type2["default"].isNotObjectLikeArray,
    isNotModuleArray = _type2["default"].isNotModuleArray,
    isNotArrayArray = _type2["default"].isNotArrayArray,
    isNotArraySeriesArray = _type2["default"].isNotArraySeriesArray,
    isNotDateArray = _type2["default"].isNotDateArray,
    isNotRegExpArray = _type2["default"].isNotRegExpArray,
    isNotBooleanObjectArray = _type2["default"].isNotBooleanObjectArray,
    isNotNumberObjectArray = _type2["default"].isNotNumberObjectArray,
    isNotStringObjectArray = _type2["default"].isNotStringObjectArray,
    isNotEmptyObjectArray = _type2["default"].isNotEmptyObjectArray,
    isNotEmptyArrayArray = _type2["default"].isNotEmptyArrayArray,
    isNotExceptionArray = _type2["default"].isNotExceptionArray,
    isNotSymbolArray = _type2["default"].isNotSymbolArray,
    isNotMapArray = _type2["default"].isNotMapArray,
    isNotWeakMapArray = _type2["default"].isNotWeakMapArray,
    isNotSetArray = _type2["default"].isNotSetArray,
    isNotWeakSetArray = _type2["default"].isNotWeakSetArray;
exports.isNotWeakSetArray = isNotWeakSetArray;
exports.isNotSetArray = isNotSetArray;
exports.isNotWeakMapArray = isNotWeakMapArray;
exports.isNotMapArray = isNotMapArray;
exports.isNotSymbolArray = isNotSymbolArray;
exports.isNotExceptionArray = isNotExceptionArray;
exports.isNotEmptyArrayArray = isNotEmptyArrayArray;
exports.isNotEmptyObjectArray = isNotEmptyObjectArray;
exports.isNotStringObjectArray = isNotStringObjectArray;
exports.isNotNumberObjectArray = isNotNumberObjectArray;
exports.isNotBooleanObjectArray = isNotBooleanObjectArray;
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
exports.isExceptionArray = isExceptionArray;
exports.isEmptyArrayArray = isEmptyArrayArray;
exports.isEmptyObjectArray = isEmptyObjectArray;
exports.isStringObjectArray = isStringObjectArray;
exports.isNumberObjectArray = isNumberObjectArray;
exports.isBooleanObjectArray = isBooleanObjectArray;
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
exports.isNotWeakSet = isNotWeakSet;
exports.isNotSet = isNotSet;
exports.isNotWeakMap = isNotWeakMap;
exports.isNotMap = isNotMap;
exports.isNotSymbol = isNotSymbol;
exports.isNotException = isNotException;
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
exports.isWeakSet = isWeakSet;
exports.isSet = isSet;
exports.isWeakMap = isWeakMap;
exports.isMap = isMap;
exports.isSymbol = isSymbol;
exports.isException = isException;
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
exports.isError = isError;
var isObjectType = _typeAlias2["default"].isObjectType,
    isArrayType = _typeAlias2["default"].isArrayType,
    isUndef = _typeAlias2["default"].isUndef,
    isBool = _typeAlias2["default"].isBool,
    isNum = _typeAlias2["default"].isNum,
    isInt = _typeAlias2["default"].isInt,
    isStr = _typeAlias2["default"].isStr,
    isFunc = _typeAlias2["default"].isFunc,
    isObj = _typeAlias2["default"].isObj,
    isObjNormal = _typeAlias2["default"].isObjNormal,
    isObjFromNull = _typeAlias2["default"].isObjFromNull,
    isObjLike = _typeAlias2["default"].isObjLike,
    isEmptyObj = _typeAlias2["default"].isEmptyObj,
    isExcept = _typeAlias2["default"].isExcept,
    isObjType = _typeAlias2["default"].isObjType,
    isNotObjectType = _typeAlias2["default"].isNotObjectType,
    isNotArrayType = _typeAlias2["default"].isNotArrayType,
    isNotUndef = _typeAlias2["default"].isNotUndef,
    isNotBool = _typeAlias2["default"].isNotBool,
    isNotNum = _typeAlias2["default"].isNotNum,
    isNotInt = _typeAlias2["default"].isNotInt,
    isNotStr = _typeAlias2["default"].isNotStr,
    isNotFunc = _typeAlias2["default"].isNotFunc,
    isNotObj = _typeAlias2["default"].isNotObj,
    isNotObjNormal = _typeAlias2["default"].isNotObjNormal,
    isNotObjFromNull = _typeAlias2["default"].isNotObjFromNull,
    isNotObjLike = _typeAlias2["default"].isNotObjLike,
    isNotEmptyObj = _typeAlias2["default"].isNotEmptyObj,
    isNotExcept = _typeAlias2["default"].isNotExcept,
    isNotObjType = _typeAlias2["default"].isNotObjType,
    isObjectTypeAll = _typeAlias2["default"].isObjectTypeAll,
    isArrayTypeAll = _typeAlias2["default"].isArrayTypeAll,
    isUndefAll = _typeAlias2["default"].isUndefAll,
    isBoolAll = _typeAlias2["default"].isBoolAll,
    isNumAll = _typeAlias2["default"].isNumAll,
    isIntAll = _typeAlias2["default"].isIntAll,
    isStrAll = _typeAlias2["default"].isStrAll,
    isFuncAll = _typeAlias2["default"].isFuncAll,
    isObjAll = _typeAlias2["default"].isObjAll,
    isObjNormalAll = _typeAlias2["default"].isObjNormalAll,
    isObjFromNullAll = _typeAlias2["default"].isObjFromNullAll,
    isObjLikeAll = _typeAlias2["default"].isObjLikeAll,
    isEmptyObjAll = _typeAlias2["default"].isEmptyObjAll,
    isExceptAll = _typeAlias2["default"].isExceptAll,
    isObjTypeAll = _typeAlias2["default"].isObjTypeAll,
    isNotObjectTypeAll = _typeAlias2["default"].isNotObjectTypeAll,
    isNotArrayTypeAll = _typeAlias2["default"].isNotArrayTypeAll,
    isNotUndefAll = _typeAlias2["default"].isNotUndefAll,
    isNotBoolAll = _typeAlias2["default"].isNotBoolAll,
    isNotNumAll = _typeAlias2["default"].isNotNumAll,
    isNotIntAll = _typeAlias2["default"].isNotIntAll,
    isNotStrAll = _typeAlias2["default"].isNotStrAll,
    isNotFuncAll = _typeAlias2["default"].isNotFuncAll,
    isNotObjAll = _typeAlias2["default"].isNotObjAll,
    isNotObjNormalAll = _typeAlias2["default"].isNotObjNormalAll,
    isNotObjFromNullAll = _typeAlias2["default"].isNotObjFromNullAll,
    isNotObjLikeAll = _typeAlias2["default"].isNotObjLikeAll,
    isNotEmptyObjAll = _typeAlias2["default"].isNotEmptyObjAll,
    isNotExceptAll = _typeAlias2["default"].isNotExceptAll,
    isNotObjTypeAll = _typeAlias2["default"].isNotObjTypeAll,
    isObjectTypeArray = _typeAlias2["default"].isObjectTypeArray,
    isArrayTypeArray = _typeAlias2["default"].isArrayTypeArray,
    isUndefArray = _typeAlias2["default"].isUndefArray,
    isBoolArray = _typeAlias2["default"].isBoolArray,
    isNumArray = _typeAlias2["default"].isNumArray,
    isIntArray = _typeAlias2["default"].isIntArray,
    isStrArray = _typeAlias2["default"].isStrArray,
    isFuncArray = _typeAlias2["default"].isFuncArray,
    isObjArray = _typeAlias2["default"].isObjArray,
    isObjNormalArray = _typeAlias2["default"].isObjNormalArray,
    isObjFromNullArray = _typeAlias2["default"].isObjFromNullArray,
    isObjLikeArray = _typeAlias2["default"].isObjLikeArray,
    isEmptyObjArray = _typeAlias2["default"].isEmptyObjArray,
    isExceptArray = _typeAlias2["default"].isExceptArray,
    isObjTypeArray = _typeAlias2["default"].isObjTypeArray,
    isNotObjectTypeArray = _typeAlias2["default"].isNotObjectTypeArray,
    isNotArrayTypeArray = _typeAlias2["default"].isNotArrayTypeArray,
    isNotUndefArray = _typeAlias2["default"].isNotUndefArray,
    isNotBoolArray = _typeAlias2["default"].isNotBoolArray,
    isNotNumArray = _typeAlias2["default"].isNotNumArray,
    isNotIntArray = _typeAlias2["default"].isNotIntArray,
    isNotStrArray = _typeAlias2["default"].isNotStrArray,
    isNotFuncArray = _typeAlias2["default"].isNotFuncArray,
    isNotObjArray = _typeAlias2["default"].isNotObjArray,
    isNotObjNormalArray = _typeAlias2["default"].isNotObjNormalArray,
    isNotObjFromNullArray = _typeAlias2["default"].isNotObjFromNullArray,
    isNotObjLikeArray = _typeAlias2["default"].isNotObjLikeArray,
    isNotEmptyObjArray = _typeAlias2["default"].isNotEmptyObjArray,
    isNotExceptArray = _typeAlias2["default"].isNotExceptArray,
    isNotObjTypeArray = _typeAlias2["default"].isNotObjTypeArray;
exports.isNotObjTypeArray = isNotObjTypeArray;
exports.isNotExceptArray = isNotExceptArray;
exports.isNotEmptyObjArray = isNotEmptyObjArray;
exports.isNotObjLikeArray = isNotObjLikeArray;
exports.isNotObjFromNullArray = isNotObjFromNullArray;
exports.isNotObjNormalArray = isNotObjNormalArray;
exports.isNotObjArray = isNotObjArray;
exports.isNotFuncArray = isNotFuncArray;
exports.isNotStrArray = isNotStrArray;
exports.isNotIntArray = isNotIntArray;
exports.isNotNumArray = isNotNumArray;
exports.isNotBoolArray = isNotBoolArray;
exports.isNotUndefArray = isNotUndefArray;
exports.isNotArrayTypeArray = isNotArrayTypeArray;
exports.isNotObjectTypeArray = isNotObjectTypeArray;
exports.isObjTypeArray = isObjTypeArray;
exports.isExceptArray = isExceptArray;
exports.isEmptyObjArray = isEmptyObjArray;
exports.isObjLikeArray = isObjLikeArray;
exports.isObjFromNullArray = isObjFromNullArray;
exports.isObjNormalArray = isObjNormalArray;
exports.isObjArray = isObjArray;
exports.isFuncArray = isFuncArray;
exports.isStrArray = isStrArray;
exports.isIntArray = isIntArray;
exports.isNumArray = isNumArray;
exports.isBoolArray = isBoolArray;
exports.isUndefArray = isUndefArray;
exports.isArrayTypeArray = isArrayTypeArray;
exports.isObjectTypeArray = isObjectTypeArray;
exports.isNotObjTypeAll = isNotObjTypeAll;
exports.isNotExceptAll = isNotExceptAll;
exports.isNotEmptyObjAll = isNotEmptyObjAll;
exports.isNotObjLikeAll = isNotObjLikeAll;
exports.isNotObjFromNullAll = isNotObjFromNullAll;
exports.isNotObjNormalAll = isNotObjNormalAll;
exports.isNotObjAll = isNotObjAll;
exports.isNotFuncAll = isNotFuncAll;
exports.isNotStrAll = isNotStrAll;
exports.isNotIntAll = isNotIntAll;
exports.isNotNumAll = isNotNumAll;
exports.isNotBoolAll = isNotBoolAll;
exports.isNotUndefAll = isNotUndefAll;
exports.isNotArrayTypeAll = isNotArrayTypeAll;
exports.isNotObjectTypeAll = isNotObjectTypeAll;
exports.isObjTypeAll = isObjTypeAll;
exports.isExceptAll = isExceptAll;
exports.isEmptyObjAll = isEmptyObjAll;
exports.isObjLikeAll = isObjLikeAll;
exports.isObjFromNullAll = isObjFromNullAll;
exports.isObjNormalAll = isObjNormalAll;
exports.isObjAll = isObjAll;
exports.isFuncAll = isFuncAll;
exports.isStrAll = isStrAll;
exports.isIntAll = isIntAll;
exports.isNumAll = isNumAll;
exports.isBoolAll = isBoolAll;
exports.isUndefAll = isUndefAll;
exports.isArrayTypeAll = isArrayTypeAll;
exports.isObjectTypeAll = isObjectTypeAll;
exports.isNotObjType = isNotObjType;
exports.isNotExcept = isNotExcept;
exports.isNotEmptyObj = isNotEmptyObj;
exports.isNotObjLike = isNotObjLike;
exports.isNotObjFromNull = isNotObjFromNull;
exports.isNotObjNormal = isNotObjNormal;
exports.isNotObj = isNotObj;
exports.isNotFunc = isNotFunc;
exports.isNotStr = isNotStr;
exports.isNotInt = isNotInt;
exports.isNotNum = isNotNum;
exports.isNotBool = isNotBool;
exports.isNotUndef = isNotUndef;
exports.isNotArrayType = isNotArrayType;
exports.isNotObjectType = isNotObjectType;
exports.isObjType = isObjType;
exports.isExcept = isExcept;
exports.isEmptyObj = isEmptyObj;
exports.isObjLike = isObjLike;
exports.isObjFromNull = isObjFromNull;
exports.isObjNormal = isObjNormal;
exports.isObj = isObj;
exports.isFunc = isFunc;
exports.isStr = isStr;
exports.isInt = isInt;
exports.isNum = isNum;
exports.isBool = isBool;
exports.isUndef = isUndef;
exports.isArrayType = isArrayType;
exports.isObjectType = isObjectType;
rootAlias = _objectSpread(_objectSpread(_objectSpread({}, rootAlias), _type2["default"]), _typeAlias2["default"]);

var type = _objectSpread(_objectSpread({}, _type2["default"]), _typeAlias2["default"]);

exports.type = type;
propertyNames._TYPE_BASE = 'Undefined, Null, NaNStrict, ' + 'Boolean, Number, Integer, String, ' + 'Function, ' + 'Object, ObjectNormal, ObjectFromNull, ' + 'ObjectLike, Module, ' + 'Array, ArraySeries, ' + 'Date, RegExp, ' + 'Exception, ' + 'EmptyObject, EmptyArray, ' + 'Symbol, ' + 'Map, WeakMap, Set, WeakSet, ' + 'BooleanObject, NumberObject, StringObject, ' + 'ObjectType, ArrayType, ' + 'Bool, Num, Int, Str, ' + 'Func, ' + 'Obj, ObjNormal, ObjFromNull, ' + 'ObjLike, ' + 'ObjType, ' + 'Except, ' + 'EmptyObj, ' + '';

var isPrefixSafixAdd = function isPrefixSafixAdd(prefix, safix, commaString) {
  return _map(_array2["default"].filter(_replaceAll(commaString, ' ', '').split(','), function (v) {
    return v !== '';
  }), function (item) {
    return prefix + item + safix;
  }).join(',');
}; // propertyNames.TYPE = [
//   isPrefixSafixAdd('is',    '',     propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('isNot', '',     propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('is',    'All',  propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('isNot', 'All',  propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('is',    'Array',  propertyNames._TYPE_BASE),
//   isPrefixSafixAdd('isNot', 'Array',  propertyNames._TYPE_BASE),
// ].join(',');
// const type = {};
// _copyProperty(_type, propertyNames.TYPE, type);
// _copyProperty(_type, propertyNames.TYPE, rootAlias);

/**
 * test
 */
// const {
//   checkEqual, checkCompare,
//   describe, it, test, expect,
//   isThrown, isThrownValue, isThrownException, isNotThrown,
//   testCounter,
// } = _test;


propertyNames.TEST_PUBLIC = 'checkEqual, checkCompare,' + 'describe, it, test, expect,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'testCounter,';
propertyNames.TEST_ROOT = 'isThrown,isThrownValue,isThrownException,isNotThrown,' + '';
var test = {};
exports.test = test;

_copyProperty(_test2["default"], propertyNames.TEST_PUBLIC, test);

_copyProperty(_test2["default"], propertyNames.TEST_ROOT, rootAlias); // syntax


propertyNames.SYNTAX = 'assert,guard,' + 'functionValue,' + 'sc,if_,switch_,' + 'loop,' + 'canUseMap, canUseWeakMap,' + 'canUseSet, canUseWeakSet,' + 'Enum,' + '';

var syntax = _copyProperty(_syntax2["default"], propertyNames.SYNTAX);

exports.syntax = syntax;

_copyProperty(_syntax2["default"], propertyNames.SYNTAX, rootAlias); // compare


propertyNames.COMPARE = 'equal, equalDeep,' + 'or,' + 'match, matchValue, initialValue,' + 'allMatch, indexOfMatch, someMatch,' + 'matchSome, matchSomeValue,' + 'allMatchSome, indexOfMatchSome, someMatchSome,' + 'matchAll, matchAllValue,' + 'allMatchAll, indexOfMatchAll, someMatchAll,' + 'includes, includesSome, includesAll,' + '';
var compare = {};
exports.compare = compare;

_copyProperty(_compare2["default"], propertyNames.COMPARE, compare);

_copyProperty(_compare2["default"], propertyNames.COMPARE, rootAlias); // convert


propertyNames.CONVERT = 'numberToString, valueToString,' + 'stringToNumber,stringToNumberDefault,' + 'stringToInteger,stringToIntegerDefault,' + 'valueToNumber, valueToNumberDefault,' + 'valueToInteger, valueToIntegerDefault,' + 'numToString, valToString,' + 'strToNumber, strToNumberDef,' + 'strToInteger, strToIntegerDef,' + 'valToNumber, valToNumberDefault,' + 'valToInteger, valToIntegerDefault,' + 'valToNum, valToNumDef,' + 'valToInt, valToIntDef,' + 'numToStr,' + 'strToNum,strToNumDef,' + 'strToInt,strToIntDef,' + '';
var convert = {};
exports.convert = convert;

_copyProperty(_convert2["default"], propertyNames.CONVERT, convert);

_copyProperty(_convert2["default"], propertyNames.CONVERT, rootAlias); // number


propertyNames.NUMBER = 'isMultiples,isEven,isOdd,' + 'round,nearEqual,inRange,randomInt,' + '';

var number = _copyProperty(_number2["default"], propertyNames.NUMBER);

exports.number = number;

_copyProperty(_number2["default"], propertyNames.NUMBER, rootAlias); // string


propertyNames.STRING_PUBLIC = 'matchFormat, replaceAll,' + 'repeat,' + 'isLowerCase, isUpperCase,' + 'indexOfFirst, indexOfLast,' + 'isFirst, isLast, isBothEnds,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'subIndex, subLength, subFirst, subLast,' + 'deleteIndex, deleteLength, deleteFirst, deleteLast,' + 'insert, add,' + 'subFirstDelimFirst, subFirstDelimLast, ' + 'subLastDelimFirst, subLastDelimLast, ' + 'tagInnerFirst, tagOuterFirst, ' + 'tagInnerLast, tagOuterLast, ' + 'split, splitCommaItems, splitDotItems, ' + '';
propertyNames.STRING_ROOT = 'matchFormat,replaceAll,' + 'isLowerCase,isUpperCase,' + 'split, splitCommaItems, splitDotItems, ' + '';
var string = {};
exports.string = string;

_copyProperty(_string2["default"], propertyNames.STRING_PUBLIC, string);

_copyProperty(_string2["default"], propertyNames.STRING_ROOT, rootAlias); // object


propertyNames.OBJECT_PUBLIC = 'isObjectParameter,' + 'copyProperty, propertyCount, inProperty, fixProperty,' + 'has,hasOwn,hasPrototype,' + 'getProperty, setProperty,' + 'propertyList, ' + 'objectEntries, objectToKeyValueArray,' + 'objectKeys, objectToKeyArray,' + 'objectValues, objectToValueArray,' + 'copyProp, propCount, inProp, fixProp,' + 'getProp, setProp,' + '';
propertyNames.OBJECT_ROOT = 'copyProperty,propertyCount,inProperty, fixProperty,' + 'has,hasOwn,hasPrototype,' + 'getProperty,setProperty,' + 'propertyList, ' + 'objectEntries, objectToKeyValueArray,' + 'objectKeys, objectToKeyArray,' + 'objectValues, objectToValueArray,' + 'copyProp,propCount,inProp, fixProp,' + 'getProp,setProp,' + '';
var object = {};
exports.object = object;

_copyProperty(_object2["default"], propertyNames.OBJECT_PUBLIC, object);

_copyProperty(_object2["default"], propertyNames.OBJECT_ROOT, rootAlias);

object.objectToString = _type2["default"].objectToString;
rootAlias.objectToString = _type2["default"].objectToString; // array

propertyNames.ARRAY_PUBLIC = 'NumberArray, IntegerArray,' + 'from,' + 'min, max,' + 'sum, average, median,' + 'mode,' + 'unique, single, multiple,' + 'group,' + 'filter, map, count,' + 'findFirstIndex, findLastIndex,' + 'findFirst, findLast,' + 'some, all,' + 'isFirst, isLast, isBothEnds,' + 'subIndex, subLength,' + 'subFirst, subLast,' + 'findIndex, findBackIndex,' + 'find, findBack,' + 'every,' + 'arrayToIndexValueArray, arrayEntries, ' + '';
propertyNames.ARRAY_ROOT = 'min, max,' + 'sum, average, median,' + '';
var array = {};
exports.array = array;

_copyProperty(_array2["default"], propertyNames.ARRAY_PUBLIC, array);

_copyProperty(_array2["default"], propertyNames.ARRAY_ROOT, rootAlias); // array.operation


propertyNames.ARRAY_OPERATION_PUBLIC = 'insert, add,' + 'deleteLength, deleteIndex,' + 'deleteFirst, deleteLast,' + 'includeFirst, includeLast, includeBothEnds,' + 'excludeFirst, excludeLast, excludeBothEnds,' + 'trimFirst, trimLast, trimBothEnds,' + 'popFirst, popLast,' + 'pushFirst, pushLast,' + 'remainFirst, remainLast,' + 'filter,' + 'sort,' + 'sortNumber,' + 'sortLength,' + 'sortDictionary,' + 'sortNumberAscending, sortNumberDescending,' + 'sortLengthAscending, sortLengthDescending,' + 'sortDictionaryAscending, sortDictionaryDescending,' + '';
array.operation = {};

_copyProperty(_array2["default"].operation, propertyNames.ARRAY_OPERATION_PUBLIC, array.operation); // consoleHook


propertyNames._CONSOLE_HOOK_BASE = 'Log,Info,Warn,Error,Debug,';
propertyNames.CONSOLE_HOOK = [isPrefixSafixAdd('hook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('unHook', '', propertyNames._CONSOLE_HOOK_BASE), isPrefixSafixAdd('accept', '', propertyNames._CONSOLE_HOOK_BASE), 'hook', 'unHook', 'accept'].join(',');
var consoleHook = {};
exports.consoleHook = consoleHook;

_copyProperty(_consoleHook2["default"], propertyNames.CONSOLE_HOOK, consoleHook); // wsh


propertyNames.WSH = 'FileSystemObject,Shell,' + 'forceCreateFolder,' + '';
var wsh = {};
exports.wsh = wsh;

_copyProperty(_wsh2["default"], propertyNames.WSH, wsh);

var _rootAlias = rootAlias,
    isThrown = _rootAlias.isThrown,
    isThrownValue = _rootAlias.isThrownValue,
    isThrownException = _rootAlias.isThrownException,
    isNotThrown = _rootAlias.isNotThrown,
    assert = _rootAlias.assert,
    guard = _rootAlias.guard,
    functionValue = _rootAlias.functionValue,
    sc = _rootAlias.sc,
    if_ = _rootAlias.if_,
    switch_ = _rootAlias.switch_,
    loop = _rootAlias.loop,
    canUseMap = _rootAlias.canUseMap,
    canUseWeakMap = _rootAlias.canUseWeakMap,
    canUseSet = _rootAlias.canUseSet,
    canUseWeakSet = _rootAlias.canUseWeakSet,
    Enum = _rootAlias.Enum,
    equal = _rootAlias.equal,
    equalDeep = _rootAlias.equalDeep,
    or = _rootAlias.or,
    match = _rootAlias.match,
    matchValue = _rootAlias.matchValue,
    initialValue = _rootAlias.initialValue,
    allMatch = _rootAlias.allMatch,
    indexOfMatch = _rootAlias.indexOfMatch,
    someMatch = _rootAlias.someMatch,
    matchSome = _rootAlias.matchSome,
    matchSomeValue = _rootAlias.matchSomeValue,
    allMatchSome = _rootAlias.allMatchSome,
    indexOfMatchSome = _rootAlias.indexOfMatchSome,
    someMatchSome = _rootAlias.someMatchSome,
    matchAll = _rootAlias.matchAll,
    matchAllValue = _rootAlias.matchAllValue,
    allMatchAll = _rootAlias.allMatchAll,
    indexOfMatchAll = _rootAlias.indexOfMatchAll,
    someMatchAll = _rootAlias.someMatchAll,
    includes = _rootAlias.includes,
    includesSome = _rootAlias.includesSome,
    includesAll = _rootAlias.includesAll,
    numberToString = _rootAlias.numberToString,
    valueToString = _rootAlias.valueToString,
    stringToNumber = _rootAlias.stringToNumber,
    stringToNumberDefault = _rootAlias.stringToNumberDefault,
    stringToInteger = _rootAlias.stringToInteger,
    stringToIntegerDefault = _rootAlias.stringToIntegerDefault,
    valueToNumber = _rootAlias.valueToNumber,
    valueToNumberDefault = _rootAlias.valueToNumberDefault,
    valueToInteger = _rootAlias.valueToInteger,
    valueToIntegerDefault = _rootAlias.valueToIntegerDefault,
    numToString = _rootAlias.numToString,
    valToString = _rootAlias.valToString,
    strToNumber = _rootAlias.strToNumber,
    strToNumberDef = _rootAlias.strToNumberDef,
    strToInteger = _rootAlias.strToInteger,
    strToIntegerDef = _rootAlias.strToIntegerDef,
    valToNumber = _rootAlias.valToNumber,
    valToNumberDefault = _rootAlias.valToNumberDefault,
    valToInteger = _rootAlias.valToInteger,
    valToIntegerDefault = _rootAlias.valToIntegerDefault,
    valToNum = _rootAlias.valToNum,
    valToNumDef = _rootAlias.valToNumDef,
    valToInt = _rootAlias.valToInt,
    valToIntDef = _rootAlias.valToIntDef,
    numToStr = _rootAlias.numToStr,
    strToNum = _rootAlias.strToNum,
    strToNumDef = _rootAlias.strToNumDef,
    strToInt = _rootAlias.strToInt,
    strToIntDef = _rootAlias.strToIntDef,
    isMultiples = _rootAlias.isMultiples,
    isEven = _rootAlias.isEven,
    isOdd = _rootAlias.isOdd,
    round = _rootAlias.round,
    nearEqual = _rootAlias.nearEqual,
    inRange = _rootAlias.inRange,
    randomInt = _rootAlias.randomInt,
    matchFormat = _rootAlias.matchFormat,
    replaceAll = _rootAlias.replaceAll,
    isLowerCase = _rootAlias.isLowerCase,
    isUpperCase = _rootAlias.isUpperCase,
    split = _rootAlias.split,
    splitCommaItems = _rootAlias.splitCommaItems,
    splitDotItems = _rootAlias.splitDotItems,
    copyProperty = _rootAlias.copyProperty,
    propertyCount = _rootAlias.propertyCount,
    inProperty = _rootAlias.inProperty,
    fixProperty = _rootAlias.fixProperty,
    has = _rootAlias.has,
    hasOwn = _rootAlias.hasOwn,
    hasPrototype = _rootAlias.hasPrototype,
    getProperty = _rootAlias.getProperty,
    setProperty = _rootAlias.setProperty,
    propertyList = _rootAlias.propertyList,
    objectEntries = _rootAlias.objectEntries,
    objectToKeyValueArray = _rootAlias.objectToKeyValueArray,
    objectKeys = _rootAlias.objectKeys,
    objectToKeyArray = _rootAlias.objectToKeyArray,
    objectValues = _rootAlias.objectValues,
    objectToValueArray = _rootAlias.objectToValueArray,
    copyProp = _rootAlias.copyProp,
    propCount = _rootAlias.propCount,
    inProp = _rootAlias.inProp,
    fixProp = _rootAlias.fixProp,
    getProp = _rootAlias.getProp,
    setProp = _rootAlias.setProp,
    min = _rootAlias.min,
    max = _rootAlias.max,
    sum = _rootAlias.sum,
    average = _rootAlias.average,
    median = _rootAlias.median;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
exports.setProp = setProp;
exports.getProp = getProp;
exports.fixProp = fixProp;
exports.inProp = inProp;
exports.propCount = propCount;
exports.copyProp = copyProp;
exports.objectToValueArray = objectToValueArray;
exports.objectValues = objectValues;
exports.objectToKeyArray = objectToKeyArray;
exports.objectKeys = objectKeys;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.objectEntries = objectEntries;
exports.propertyList = propertyList;
exports.setProperty = setProperty;
exports.getProperty = getProperty;
exports.hasPrototype = hasPrototype;
exports.hasOwn = hasOwn;
exports.has = has;
exports.fixProperty = fixProperty;
exports.inProperty = inProperty;
exports.propertyCount = propertyCount;
exports.copyProperty = copyProperty;
exports.splitDotItems = splitDotItems;
exports.splitCommaItems = splitCommaItems;
exports.split = split;
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
exports.equalDeep = equalDeep;
exports.equal = equal;
exports.Enum = Enum;
exports.canUseWeakSet = canUseWeakSet;
exports.canUseSet = canUseSet;
exports.canUseWeakMap = canUseWeakMap;
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

var parts = _objectSpread({
  VERSION: VERSION,
  root: root,
  platform: platform,
  type: type,
  test: test,
  syntax: syntax,
  compare: compare,
  convert: convert,
  number: number,
  string: string,
  object: object,
  array: array,
  consoleHook: consoleHook,
  wsh: wsh
}, rootAlias);

exports.parts = parts;

var _default = _objectSpread(_objectSpread({}, parts), {}, {
  parts: parts
});

exports["default"] = _default;