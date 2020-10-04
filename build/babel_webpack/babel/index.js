"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotObjectNormalAll = exports.isNotObjectAll = exports.isNotFunctionAll = exports.isNotStringAll = exports.isNotIntegerAll = exports.isNotNumberAll = exports.isNotBooleanAll = exports.isNotNaNStrictAll = exports.isNotNullAll = exports.isNotUndefinedAll = exports.isWeakSetAll = exports.isSetAll = exports.isWeakMapAll = exports.isMapAll = exports.isSymbolAll = exports.isExceptionAll = exports.isEmptyArrayAll = exports.isEmptyObjectAll = exports.isStringObjectAll = exports.isNumberObjectAll = exports.isBooleanObjectAll = exports.isRegExpAll = exports.isDateAll = exports.isArraySeriesAll = exports.isArrayAll = exports.isModuleAll = exports.isObjectLikeAll = exports.isObjectFromNullAll = exports.isObjectNormalAll = exports.isObjectAll = exports.isFunctionAll = exports.isStringAll = exports.isIntegerAll = exports.isNumberAll = exports.isBooleanAll = exports.isNaNStrictAll = exports.isNullAll = exports.isUndefinedAll = exports.isNotWeakSet = exports.isNotSet = exports.isNotWeakMap = exports.isNotMap = exports.isNotSymbol = exports.isNotException = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isWeakSet = exports.isSet = exports.isWeakMap = exports.isMap = exports.isSymbol = exports.isException = exports.isEmptyArray = exports.isEmptyObject = exports.isStringObject = exports.isNumberObject = exports.isBooleanObject = exports.isRegExp = exports.isDate = exports.isArraySeries = exports.isArray = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isString = exports.isInteger = exports.isNumber = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = exports.platform = exports.root = exports.cloneDeep = exports.clone = exports.VERSION = void 0;
exports.isNotObjFromNull = exports.isNotObjNormal = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isNotArrayType = exports.isNotObjectType = exports.isObjType = exports.isExcept = exports.isEmptyObj = exports.isObjLike = exports.isObjFromNull = exports.isObjNormal = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isArrayType = exports.isObjectType = exports.isNotWeakSetArray = exports.isNotSetArray = exports.isNotWeakMapArray = exports.isNotMapArray = exports.isNotSymbolArray = exports.isNotExceptionArray = exports.isNotEmptyArrayArray = exports.isNotEmptyObjectArray = exports.isNotStringObjectArray = exports.isNotNumberObjectArray = exports.isNotBooleanObjectArray = exports.isNotRegExpArray = exports.isNotDateArray = exports.isNotArraySeriesArray = exports.isNotArrayArray = exports.isNotModuleArray = exports.isNotObjectLikeArray = exports.isNotObjectFromNullArray = exports.isNotObjectNormalArray = exports.isNotObjectArray = exports.isNotFunctionArray = exports.isNotStringArray = exports.isNotIntegerArray = exports.isNotNumberArray = exports.isNotBooleanArray = exports.isNotNaNStrictArray = exports.isNotNullArray = exports.isNotUndefinedArray = exports.isWeakSetArray = exports.isSetArray = exports.isWeakMapArray = exports.isMapArray = exports.isSymbolArray = exports.isExceptionArray = exports.isEmptyArrayArray = exports.isEmptyObjectArray = exports.isStringObjectArray = exports.isNumberObjectArray = exports.isBooleanObjectArray = exports.isRegExpArray = exports.isDateArray = exports.isArraySeriesArray = exports.isArrayArray = exports.isModuleArray = exports.isObjectLikeArray = exports.isObjectFromNullArray = exports.isObjectNormalArray = exports.isObjectArray = exports.isFunctionArray = exports.isStringArray = exports.isIntegerArray = exports.isNumberArray = exports.isBooleanArray = exports.isNaNStrictArray = exports.isNullArray = exports.isUndefinedArray = exports.isNotWeakSetAll = exports.isNotSetAll = exports.isNotWeakMapAll = exports.isNotMapAll = exports.isNotSymbolAll = exports.isNotExceptionAll = exports.isNotEmptyArrayAll = exports.isNotEmptyObjectAll = exports.isNotStringObjectAll = exports.isNotNumberObjectAll = exports.isNotBooleanObjectAll = exports.isNotRegExpAll = exports.isNotDateAll = exports.isNotArraySeriesAll = exports.isNotArrayAll = exports.isNotModuleAll = exports.isNotObjectLikeAll = exports.isNotObjectFromNullAll = void 0;
exports.allMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.indexOfMatchSome = exports.allMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.indexOfMatch = exports.allMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports.equalDeep = exports.equal = exports.syntax = exports.Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = exports.test = exports.isNotThrown = exports.isThrownException = exports.isThrownValue = exports.isThrown = exports.type = exports.isNotObjTypeArray = exports.isNotExceptArray = exports.isNotEmptyObjArray = exports.isNotObjLikeArray = exports.isNotObjFromNullArray = exports.isNotObjNormalArray = exports.isNotObjArray = exports.isNotFuncArray = exports.isNotStrArray = exports.isNotIntArray = exports.isNotNumArray = exports.isNotBoolArray = exports.isNotUndefArray = exports.isNotArrayTypeArray = exports.isNotObjectTypeArray = exports.isObjTypeArray = exports.isExceptArray = exports.isEmptyObjArray = exports.isObjLikeArray = exports.isObjFromNullArray = exports.isObjNormalArray = exports.isObjArray = exports.isFuncArray = exports.isStrArray = exports.isIntArray = exports.isNumArray = exports.isBoolArray = exports.isUndefArray = exports.isArrayTypeArray = exports.isObjectTypeArray = exports.isNotObjTypeAll = exports.isNotExceptAll = exports.isNotEmptyObjAll = exports.isNotObjLikeAll = exports.isNotObjFromNullAll = exports.isNotObjNormalAll = exports.isNotObjAll = exports.isNotFuncAll = exports.isNotStrAll = exports.isNotIntAll = exports.isNotNumAll = exports.isNotBoolAll = exports.isNotUndefAll = exports.isNotArrayTypeAll = exports.isNotObjectTypeAll = exports.isObjTypeAll = exports.isExceptAll = exports.isEmptyObjAll = exports.isObjLikeAll = exports.isObjFromNullAll = exports.isObjNormalAll = exports.isObjAll = exports.isFuncAll = exports.isStrAll = exports.isIntAll = exports.isNumAll = exports.isBoolAll = exports.isUndefAll = exports.isArrayTypeAll = exports.isObjectTypeAll = exports.isNotObjType = exports.isNotExcept = exports.isNotEmptyObj = exports.isNotObjLike = void 0;
exports["default"] = exports.parts = exports.wsh = exports.consoleHook = exports.date = exports.Today = exports.array = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.object = exports.propCount = exports.fixProp = exports.inProp = exports.setProp = exports.getProp = exports.copyProp = exports.objectToValueArray = exports.objectToKeyArray = exports.objectToKeyValueArray = exports.has = exports.hasPrototype = exports.hasOwn = exports.objectValues = exports.objectKeys = exports.objectEntries = exports.propertyList = exports.propertyCount = exports.fixProperty = exports.inProperty = exports.setProperty = exports.getProperty = exports.copyProperty = exports.string = exports.splitDotItems = exports.splitCommaItems = exports.split = exports.matchFormat = exports.replaceAll = exports.isUpperCase = exports.isLowerCase = exports.number = exports.makeInRange = exports.randomInt = exports.keepMinMax = exports.inRange = exports.nearEqual = exports.round = exports.isOdd = exports.isEven = exports.isMultiples = exports.convert = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.valToStr = exports.numToStr = exports.valToIntegerDef = exports.valToInteger = exports.valToNumberDef = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports.stringToInteger = exports.stringToNumberDefault = exports.stringToNumber = exports.valueToString = exports.numberToString = exports.compare = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = exports.indexOfMatchAll = void 0;

var _polyfill = _interopRequireDefault(require("./polyfill.js"));

var _root = _interopRequireDefault(require("./root/root.js"));

var _platform = _interopRequireDefault(require("./platform/platform.js"));

var _type = _interopRequireDefault(require("./type/type.js"));

var _typeAlias = _interopRequireDefault(require("./type/typeAlias.js"));

var _test = _interopRequireDefault(require("./test/test.js"));

var _syntax = _interopRequireDefault(require("./syntax/syntax.js"));

var _compare = _interopRequireDefault(require("./compare/compare.js"));

var _convert = _interopRequireDefault(require("./convert/convert.js"));

var _convertAlias = _interopRequireDefault(require("./convert/convertAlias.js"));

var _number = _interopRequireDefault(require("./number/number.js"));

var _string = _interopRequireDefault(require("./string/string.js"));

var _object = _interopRequireDefault(require("./object/object.js"));

var _array = _interopRequireDefault(require("./array/array.js"));

var _date = _interopRequireDefault(require("./date/date.js"));

var _consoleHook = _interopRequireDefault(require("./consoleHook/consoleHook.js"));

var _wsh = _interopRequireDefault(require("./wsh/wsh.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VERSION = '8.2.0 beta 1';
exports.VERSION = VERSION;
var rootAlias = {};
var propertyNames = {};
var _copyProperty = _object["default"]._copyProperty;
var _splitCommaItems = _string["default"]._splitCommaItems;
var _map = _array["default"]._map;
/**
 * root
 */

var clone = _root["default"].clone,
    cloneDeep = _root["default"].cloneDeep;
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

var platform = _objectSpread({}, _platform["default"]);
/**
 * type
 */


exports.platform = platform;
var objectToString = _type["default"].objectToString,
    isUndefined = _type["default"].isUndefined,
    isNull = _type["default"].isNull,
    isNaNStrict = _type["default"].isNaNStrict,
    isBoolean = _type["default"].isBoolean,
    isNumber = _type["default"].isNumber,
    isInteger = _type["default"].isInteger,
    isString = _type["default"].isString,
    isFunction = _type["default"].isFunction,
    isObject = _type["default"].isObject,
    isObjectNormal = _type["default"].isObjectNormal,
    isObjectFromNull = _type["default"].isObjectFromNull,
    isObjectLike = _type["default"].isObjectLike,
    isModule = _type["default"].isModule,
    isArray = _type["default"].isArray,
    isArraySeries = _type["default"].isArraySeries,
    isDate = _type["default"].isDate,
    isRegExp = _type["default"].isRegExp,
    isBooleanObject = _type["default"].isBooleanObject,
    isNumberObject = _type["default"].isNumberObject,
    isStringObject = _type["default"].isStringObject,
    isEmptyObject = _type["default"].isEmptyObject,
    isEmptyArray = _type["default"].isEmptyArray,
    isException = _type["default"].isException,
    isSymbol = _type["default"].isSymbol,
    isMap = _type["default"].isMap,
    isWeakMap = _type["default"].isWeakMap,
    isSet = _type["default"].isSet,
    isWeakSet = _type["default"].isWeakSet,
    isNotUndefined = _type["default"].isNotUndefined,
    isNotNull = _type["default"].isNotNull,
    isNotNaNStrict = _type["default"].isNotNaNStrict,
    isNotBoolean = _type["default"].isNotBoolean,
    isNotNumber = _type["default"].isNotNumber,
    isNotInteger = _type["default"].isNotInteger,
    isNotString = _type["default"].isNotString,
    isNotFunction = _type["default"].isNotFunction,
    isNotObject = _type["default"].isNotObject,
    isNotObjectNormal = _type["default"].isNotObjectNormal,
    isNotObjectFromNull = _type["default"].isNotObjectFromNull,
    isNotObjectLike = _type["default"].isNotObjectLike,
    isNotModule = _type["default"].isNotModule,
    isNotArray = _type["default"].isNotArray,
    isNotArraySeries = _type["default"].isNotArraySeries,
    isNotDate = _type["default"].isNotDate,
    isNotRegExp = _type["default"].isNotRegExp,
    isNotBooleanObject = _type["default"].isNotBooleanObject,
    isNotNumberObject = _type["default"].isNotNumberObject,
    isNotStringObject = _type["default"].isNotStringObject,
    isNotEmptyObject = _type["default"].isNotEmptyObject,
    isNotEmptyArray = _type["default"].isNotEmptyArray,
    isNotException = _type["default"].isNotException,
    isNotSymbol = _type["default"].isNotSymbol,
    isNotMap = _type["default"].isNotMap,
    isNotWeakMap = _type["default"].isNotWeakMap,
    isNotSet = _type["default"].isNotSet,
    isNotWeakSet = _type["default"].isNotWeakSet,
    isUndefinedAll = _type["default"].isUndefinedAll,
    isNullAll = _type["default"].isNullAll,
    isNaNStrictAll = _type["default"].isNaNStrictAll,
    isBooleanAll = _type["default"].isBooleanAll,
    isNumberAll = _type["default"].isNumberAll,
    isIntegerAll = _type["default"].isIntegerAll,
    isStringAll = _type["default"].isStringAll,
    isFunctionAll = _type["default"].isFunctionAll,
    isObjectAll = _type["default"].isObjectAll,
    isObjectNormalAll = _type["default"].isObjectNormalAll,
    isObjectFromNullAll = _type["default"].isObjectFromNullAll,
    isObjectLikeAll = _type["default"].isObjectLikeAll,
    isModuleAll = _type["default"].isModuleAll,
    isArrayAll = _type["default"].isArrayAll,
    isArraySeriesAll = _type["default"].isArraySeriesAll,
    isDateAll = _type["default"].isDateAll,
    isRegExpAll = _type["default"].isRegExpAll,
    isBooleanObjectAll = _type["default"].isBooleanObjectAll,
    isNumberObjectAll = _type["default"].isNumberObjectAll,
    isStringObjectAll = _type["default"].isStringObjectAll,
    isEmptyObjectAll = _type["default"].isEmptyObjectAll,
    isEmptyArrayAll = _type["default"].isEmptyArrayAll,
    isExceptionAll = _type["default"].isExceptionAll,
    isSymbolAll = _type["default"].isSymbolAll,
    isMapAll = _type["default"].isMapAll,
    isWeakMapAll = _type["default"].isWeakMapAll,
    isSetAll = _type["default"].isSetAll,
    isWeakSetAll = _type["default"].isWeakSetAll,
    isNotUndefinedAll = _type["default"].isNotUndefinedAll,
    isNotNullAll = _type["default"].isNotNullAll,
    isNotNaNStrictAll = _type["default"].isNotNaNStrictAll,
    isNotBooleanAll = _type["default"].isNotBooleanAll,
    isNotNumberAll = _type["default"].isNotNumberAll,
    isNotIntegerAll = _type["default"].isNotIntegerAll,
    isNotStringAll = _type["default"].isNotStringAll,
    isNotFunctionAll = _type["default"].isNotFunctionAll,
    isNotObjectAll = _type["default"].isNotObjectAll,
    isNotObjectNormalAll = _type["default"].isNotObjectNormalAll,
    isNotObjectFromNullAll = _type["default"].isNotObjectFromNullAll,
    isNotObjectLikeAll = _type["default"].isNotObjectLikeAll,
    isNotModuleAll = _type["default"].isNotModuleAll,
    isNotArrayAll = _type["default"].isNotArrayAll,
    isNotArraySeriesAll = _type["default"].isNotArraySeriesAll,
    isNotDateAll = _type["default"].isNotDateAll,
    isNotRegExpAll = _type["default"].isNotRegExpAll,
    isNotBooleanObjectAll = _type["default"].isNotBooleanObjectAll,
    isNotNumberObjectAll = _type["default"].isNotNumberObjectAll,
    isNotStringObjectAll = _type["default"].isNotStringObjectAll,
    isNotEmptyObjectAll = _type["default"].isNotEmptyObjectAll,
    isNotEmptyArrayAll = _type["default"].isNotEmptyArrayAll,
    isNotExceptionAll = _type["default"].isNotExceptionAll,
    isNotSymbolAll = _type["default"].isNotSymbolAll,
    isNotMapAll = _type["default"].isNotMapAll,
    isNotWeakMapAll = _type["default"].isNotWeakMapAll,
    isNotSetAll = _type["default"].isNotSetAll,
    isNotWeakSetAll = _type["default"].isNotWeakSetAll,
    isUndefinedArray = _type["default"].isUndefinedArray,
    isNullArray = _type["default"].isNullArray,
    isNaNStrictArray = _type["default"].isNaNStrictArray,
    isBooleanArray = _type["default"].isBooleanArray,
    isNumberArray = _type["default"].isNumberArray,
    isIntegerArray = _type["default"].isIntegerArray,
    isStringArray = _type["default"].isStringArray,
    isFunctionArray = _type["default"].isFunctionArray,
    isObjectArray = _type["default"].isObjectArray,
    isObjectNormalArray = _type["default"].isObjectNormalArray,
    isObjectFromNullArray = _type["default"].isObjectFromNullArray,
    isObjectLikeArray = _type["default"].isObjectLikeArray,
    isModuleArray = _type["default"].isModuleArray,
    isArrayArray = _type["default"].isArrayArray,
    isArraySeriesArray = _type["default"].isArraySeriesArray,
    isDateArray = _type["default"].isDateArray,
    isRegExpArray = _type["default"].isRegExpArray,
    isBooleanObjectArray = _type["default"].isBooleanObjectArray,
    isNumberObjectArray = _type["default"].isNumberObjectArray,
    isStringObjectArray = _type["default"].isStringObjectArray,
    isEmptyObjectArray = _type["default"].isEmptyObjectArray,
    isEmptyArrayArray = _type["default"].isEmptyArrayArray,
    isExceptionArray = _type["default"].isExceptionArray,
    isSymbolArray = _type["default"].isSymbolArray,
    isMapArray = _type["default"].isMapArray,
    isWeakMapArray = _type["default"].isWeakMapArray,
    isSetArray = _type["default"].isSetArray,
    isWeakSetArray = _type["default"].isWeakSetArray,
    isNotUndefinedArray = _type["default"].isNotUndefinedArray,
    isNotNullArray = _type["default"].isNotNullArray,
    isNotNaNStrictArray = _type["default"].isNotNaNStrictArray,
    isNotBooleanArray = _type["default"].isNotBooleanArray,
    isNotNumberArray = _type["default"].isNotNumberArray,
    isNotIntegerArray = _type["default"].isNotIntegerArray,
    isNotStringArray = _type["default"].isNotStringArray,
    isNotFunctionArray = _type["default"].isNotFunctionArray,
    isNotObjectArray = _type["default"].isNotObjectArray,
    isNotObjectNormalArray = _type["default"].isNotObjectNormalArray,
    isNotObjectFromNullArray = _type["default"].isNotObjectFromNullArray,
    isNotObjectLikeArray = _type["default"].isNotObjectLikeArray,
    isNotModuleArray = _type["default"].isNotModuleArray,
    isNotArrayArray = _type["default"].isNotArrayArray,
    isNotArraySeriesArray = _type["default"].isNotArraySeriesArray,
    isNotDateArray = _type["default"].isNotDateArray,
    isNotRegExpArray = _type["default"].isNotRegExpArray,
    isNotBooleanObjectArray = _type["default"].isNotBooleanObjectArray,
    isNotNumberObjectArray = _type["default"].isNotNumberObjectArray,
    isNotStringObjectArray = _type["default"].isNotStringObjectArray,
    isNotEmptyObjectArray = _type["default"].isNotEmptyObjectArray,
    isNotEmptyArrayArray = _type["default"].isNotEmptyArrayArray,
    isNotExceptionArray = _type["default"].isNotExceptionArray,
    isNotSymbolArray = _type["default"].isNotSymbolArray,
    isNotMapArray = _type["default"].isNotMapArray,
    isNotWeakMapArray = _type["default"].isNotWeakMapArray,
    isNotSetArray = _type["default"].isNotSetArray,
    isNotWeakSetArray = _type["default"].isNotWeakSetArray;
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
var isObjectType = _typeAlias["default"].isObjectType,
    isArrayType = _typeAlias["default"].isArrayType,
    isUndef = _typeAlias["default"].isUndef,
    isBool = _typeAlias["default"].isBool,
    isNum = _typeAlias["default"].isNum,
    isInt = _typeAlias["default"].isInt,
    isStr = _typeAlias["default"].isStr,
    isFunc = _typeAlias["default"].isFunc,
    isObj = _typeAlias["default"].isObj,
    isObjNormal = _typeAlias["default"].isObjNormal,
    isObjFromNull = _typeAlias["default"].isObjFromNull,
    isObjLike = _typeAlias["default"].isObjLike,
    isEmptyObj = _typeAlias["default"].isEmptyObj,
    isExcept = _typeAlias["default"].isExcept,
    isObjType = _typeAlias["default"].isObjType,
    isNotObjectType = _typeAlias["default"].isNotObjectType,
    isNotArrayType = _typeAlias["default"].isNotArrayType,
    isNotUndef = _typeAlias["default"].isNotUndef,
    isNotBool = _typeAlias["default"].isNotBool,
    isNotNum = _typeAlias["default"].isNotNum,
    isNotInt = _typeAlias["default"].isNotInt,
    isNotStr = _typeAlias["default"].isNotStr,
    isNotFunc = _typeAlias["default"].isNotFunc,
    isNotObj = _typeAlias["default"].isNotObj,
    isNotObjNormal = _typeAlias["default"].isNotObjNormal,
    isNotObjFromNull = _typeAlias["default"].isNotObjFromNull,
    isNotObjLike = _typeAlias["default"].isNotObjLike,
    isNotEmptyObj = _typeAlias["default"].isNotEmptyObj,
    isNotExcept = _typeAlias["default"].isNotExcept,
    isNotObjType = _typeAlias["default"].isNotObjType,
    isObjectTypeAll = _typeAlias["default"].isObjectTypeAll,
    isArrayTypeAll = _typeAlias["default"].isArrayTypeAll,
    isUndefAll = _typeAlias["default"].isUndefAll,
    isBoolAll = _typeAlias["default"].isBoolAll,
    isNumAll = _typeAlias["default"].isNumAll,
    isIntAll = _typeAlias["default"].isIntAll,
    isStrAll = _typeAlias["default"].isStrAll,
    isFuncAll = _typeAlias["default"].isFuncAll,
    isObjAll = _typeAlias["default"].isObjAll,
    isObjNormalAll = _typeAlias["default"].isObjNormalAll,
    isObjFromNullAll = _typeAlias["default"].isObjFromNullAll,
    isObjLikeAll = _typeAlias["default"].isObjLikeAll,
    isEmptyObjAll = _typeAlias["default"].isEmptyObjAll,
    isExceptAll = _typeAlias["default"].isExceptAll,
    isObjTypeAll = _typeAlias["default"].isObjTypeAll,
    isNotObjectTypeAll = _typeAlias["default"].isNotObjectTypeAll,
    isNotArrayTypeAll = _typeAlias["default"].isNotArrayTypeAll,
    isNotUndefAll = _typeAlias["default"].isNotUndefAll,
    isNotBoolAll = _typeAlias["default"].isNotBoolAll,
    isNotNumAll = _typeAlias["default"].isNotNumAll,
    isNotIntAll = _typeAlias["default"].isNotIntAll,
    isNotStrAll = _typeAlias["default"].isNotStrAll,
    isNotFuncAll = _typeAlias["default"].isNotFuncAll,
    isNotObjAll = _typeAlias["default"].isNotObjAll,
    isNotObjNormalAll = _typeAlias["default"].isNotObjNormalAll,
    isNotObjFromNullAll = _typeAlias["default"].isNotObjFromNullAll,
    isNotObjLikeAll = _typeAlias["default"].isNotObjLikeAll,
    isNotEmptyObjAll = _typeAlias["default"].isNotEmptyObjAll,
    isNotExceptAll = _typeAlias["default"].isNotExceptAll,
    isNotObjTypeAll = _typeAlias["default"].isNotObjTypeAll,
    isObjectTypeArray = _typeAlias["default"].isObjectTypeArray,
    isArrayTypeArray = _typeAlias["default"].isArrayTypeArray,
    isUndefArray = _typeAlias["default"].isUndefArray,
    isBoolArray = _typeAlias["default"].isBoolArray,
    isNumArray = _typeAlias["default"].isNumArray,
    isIntArray = _typeAlias["default"].isIntArray,
    isStrArray = _typeAlias["default"].isStrArray,
    isFuncArray = _typeAlias["default"].isFuncArray,
    isObjArray = _typeAlias["default"].isObjArray,
    isObjNormalArray = _typeAlias["default"].isObjNormalArray,
    isObjFromNullArray = _typeAlias["default"].isObjFromNullArray,
    isObjLikeArray = _typeAlias["default"].isObjLikeArray,
    isEmptyObjArray = _typeAlias["default"].isEmptyObjArray,
    isExceptArray = _typeAlias["default"].isExceptArray,
    isObjTypeArray = _typeAlias["default"].isObjTypeArray,
    isNotObjectTypeArray = _typeAlias["default"].isNotObjectTypeArray,
    isNotArrayTypeArray = _typeAlias["default"].isNotArrayTypeArray,
    isNotUndefArray = _typeAlias["default"].isNotUndefArray,
    isNotBoolArray = _typeAlias["default"].isNotBoolArray,
    isNotNumArray = _typeAlias["default"].isNotNumArray,
    isNotIntArray = _typeAlias["default"].isNotIntArray,
    isNotStrArray = _typeAlias["default"].isNotStrArray,
    isNotFuncArray = _typeAlias["default"].isNotFuncArray,
    isNotObjArray = _typeAlias["default"].isNotObjArray,
    isNotObjNormalArray = _typeAlias["default"].isNotObjNormalArray,
    isNotObjFromNullArray = _typeAlias["default"].isNotObjFromNullArray,
    isNotObjLikeArray = _typeAlias["default"].isNotObjLikeArray,
    isNotEmptyObjArray = _typeAlias["default"].isNotEmptyObjArray,
    isNotExceptArray = _typeAlias["default"].isNotExceptArray,
    isNotObjTypeArray = _typeAlias["default"].isNotObjTypeArray;
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
rootAlias = _objectSpread(_objectSpread(_objectSpread({}, rootAlias), _type["default"]), _typeAlias["default"]);

var type = _objectSpread(_objectSpread({}, _type["default"]), _typeAlias["default"]);
/**
 * test
 */


exports.type = type;
var isThrown = _test["default"].isThrown,
    isThrownValue = _test["default"].isThrownValue,
    isThrownException = _test["default"].isThrownException,
    isNotThrown = _test["default"].isNotThrown;
exports.isNotThrown = isNotThrown;
exports.isThrownException = isThrownException;
exports.isThrownValue = isThrownValue;
exports.isThrown = isThrown;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown
});

var test = _objectSpread({}, _test["default"]);
/**
 * syntax
 */


exports.test = test;
var assert = _syntax["default"].assert,
    guard = _syntax["default"].guard,
    functionValue = _syntax["default"].functionValue,
    sc = _syntax["default"].sc,
    if_ = _syntax["default"].if_,
    switch_ = _syntax["default"].switch_,
    loop = _syntax["default"].loop,
    canUseMap = _syntax["default"].canUseMap,
    canUseWeakMap = _syntax["default"].canUseWeakMap,
    canUseSet = _syntax["default"].canUseSet,
    canUseWeakSet = _syntax["default"].canUseWeakSet,
    Enum = _syntax["default"].Enum;
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
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  assert: assert,
  guard: guard,
  functionValue: functionValue,
  sc: sc,
  if_: if_,
  switch_: switch_,
  loop: loop,
  canUseMap: canUseMap,
  canUseWeakMap: canUseWeakMap,
  canUseSet: canUseSet,
  canUseWeakSet: canUseWeakSet,
  Enum: Enum
});

var syntax = _objectSpread({}, _syntax["default"]);
/**
 * compare
 */


exports.syntax = syntax;
var equal = _compare["default"].equal,
    equalDeep = _compare["default"].equalDeep,
    or = _compare["default"].or,
    match = _compare["default"].match,
    matchValue = _compare["default"].matchValue,
    initialValue = _compare["default"].initialValue,
    allMatch = _compare["default"].allMatch,
    indexOfMatch = _compare["default"].indexOfMatch,
    someMatch = _compare["default"].someMatch,
    matchSome = _compare["default"].matchSome,
    matchSomeValue = _compare["default"].matchSomeValue,
    allMatchSome = _compare["default"].allMatchSome,
    indexOfMatchSome = _compare["default"].indexOfMatchSome,
    someMatchSome = _compare["default"].someMatchSome,
    matchAll = _compare["default"].matchAll,
    matchAllValue = _compare["default"].matchAllValue,
    allMatchAll = _compare["default"].allMatchAll,
    indexOfMatchAll = _compare["default"].indexOfMatchAll,
    someMatchAll = _compare["default"].someMatchAll,
    includes = _compare["default"].includes,
    includesSome = _compare["default"].includesSome,
    includesAll = _compare["default"].includesAll;
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
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  equal: equal,
  equalDeep: equalDeep,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  allMatch: allMatch,
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
  someMatchAll: someMatchAll,
  includes: includes,
  includesSome: includesSome,
  includesAll: includesAll
});

var compare = _objectSpread({}, _compare["default"]);
/**
 * convert
 */


exports.compare = compare;
var numberToString = _convert["default"].numberToString,
    valueToString = _convert["default"].valueToString,
    stringToNumber = _convert["default"].stringToNumber,
    stringToNumberDefault = _convert["default"].stringToNumberDefault,
    stringToInteger = _convert["default"].stringToInteger,
    stringToIntegerDefault = _convert["default"].stringToIntegerDefault,
    valueToNumber = _convert["default"].valueToNumber,
    valueToNumberDefault = _convert["default"].valueToNumberDefault,
    valueToInteger = _convert["default"].valueToInteger,
    valueToIntegerDefault = _convert["default"].valueToIntegerDefault;
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
var numToString = _convertAlias["default"].numToString,
    valToString = _convertAlias["default"].valToString,
    strToNumber = _convertAlias["default"].strToNumber,
    strToNumberDef = _convertAlias["default"].strToNumberDef,
    strToInteger = _convertAlias["default"].strToInteger,
    strToIntegerDef = _convertAlias["default"].strToIntegerDef,
    valToNumber = _convertAlias["default"].valToNumber,
    valToNumberDef = _convertAlias["default"].valToNumberDef,
    valToInteger = _convertAlias["default"].valToInteger,
    valToIntegerDef = _convertAlias["default"].valToIntegerDef,
    numToStr = _convertAlias["default"].numToStr,
    valToStr = _convertAlias["default"].valToStr,
    valToNum = _convertAlias["default"].valToNum,
    valToNumDef = _convertAlias["default"].valToNumDef,
    valToInt = _convertAlias["default"].valToInt,
    valToIntDef = _convertAlias["default"].valToIntDef,
    strToNum = _convertAlias["default"].strToNum,
    strToNumDef = _convertAlias["default"].strToNumDef,
    strToInt = _convertAlias["default"].strToInt,
    strToIntDef = _convertAlias["default"].strToIntDef;
exports.strToIntDef = strToIntDef;
exports.strToInt = strToInt;
exports.strToNumDef = strToNumDef;
exports.strToNum = strToNum;
exports.valToIntDef = valToIntDef;
exports.valToInt = valToInt;
exports.valToNumDef = valToNumDef;
exports.valToNum = valToNum;
exports.valToStr = valToStr;
exports.numToStr = numToStr;
exports.valToIntegerDef = valToIntegerDef;
exports.valToInteger = valToInteger;
exports.valToNumberDef = valToNumberDef;
exports.valToNumber = valToNumber;
exports.strToIntegerDef = strToIntegerDef;
exports.strToInteger = strToInteger;
exports.strToNumberDef = strToNumberDef;
exports.strToNumber = strToNumber;
exports.valToString = valToString;
exports.numToString = numToString;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
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
});

var convert = _objectSpread(_objectSpread({}, _convert["default"]), _convertAlias["default"]);
/**
 * number
 */


exports.convert = convert;
var isMultiples = _number["default"].isMultiples,
    isEven = _number["default"].isEven,
    isOdd = _number["default"].isOdd,
    round = _number["default"].round,
    nearEqual = _number["default"].nearEqual,
    inRange = _number["default"].inRange,
    keepMinMax = _number["default"].keepMinMax,
    randomInt = _number["default"].randomInt,
    makeInRange = _number["default"].makeInRange;
exports.makeInRange = makeInRange;
exports.randomInt = randomInt;
exports.keepMinMax = keepMinMax;
exports.inRange = inRange;
exports.nearEqual = nearEqual;
exports.round = round;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isMultiples = isMultiples;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  isMultiples: isMultiples,
  isEven: isEven,
  isOdd: isOdd,
  round: round,
  nearEqual: nearEqual,
  inRange: inRange,
  keepMinMax: keepMinMax,
  randomInt: randomInt,
  makeInRange: makeInRange
});

var number = _objectSpread({}, _number["default"]);
/**
 * string
 */


exports.number = number;
var isLowerCase = _string["default"].isLowerCase,
    isUpperCase = _string["default"].isUpperCase,
    replaceAll = _string["default"].replaceAll,
    matchFormat = _string["default"].matchFormat,
    split = _string["default"].split,
    splitCommaItems = _string["default"].splitCommaItems,
    splitDotItems = _string["default"].splitDotItems;
exports.splitDotItems = splitDotItems;
exports.splitCommaItems = splitCommaItems;
exports.split = split;
exports.matchFormat = matchFormat;
exports.replaceAll = replaceAll;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  replaceAll: replaceAll,
  matchFormat: matchFormat,
  split: split,
  splitCommaItems: splitCommaItems,
  splitDotItems: splitDotItems
});

var string = _objectSpread({}, _string["default"]);
/**
 * object
 */


exports.string = string;
var copyProperty = _object["default"].copyProperty,
    getProperty = _object["default"].getProperty,
    setProperty = _object["default"].setProperty,
    inProperty = _object["default"].inProperty,
    fixProperty = _object["default"].fixProperty,
    propertyCount = _object["default"].propertyCount,
    propertyList = _object["default"].propertyList,
    objectEntries = _object["default"].objectEntries,
    objectKeys = _object["default"].objectKeys,
    objectValues = _object["default"].objectValues,
    hasOwn = _object["default"].hasOwn,
    hasPrototype = _object["default"].hasPrototype,
    has = _object["default"].has,
    objectToKeyValueArray = _object["default"].objectToKeyValueArray,
    objectToKeyArray = _object["default"].objectToKeyArray,
    objectToValueArray = _object["default"].objectToValueArray,
    copyProp = _object["default"].copyProp,
    getProp = _object["default"].getProp,
    setProp = _object["default"].setProp,
    inProp = _object["default"].inProp,
    fixProp = _object["default"].fixProp,
    propCount = _object["default"].propCount;
exports.propCount = propCount;
exports.fixProp = fixProp;
exports.inProp = inProp;
exports.setProp = setProp;
exports.getProp = getProp;
exports.copyProp = copyProp;
exports.objectToValueArray = objectToValueArray;
exports.objectToKeyArray = objectToKeyArray;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.has = has;
exports.hasPrototype = hasPrototype;
exports.hasOwn = hasOwn;
exports.objectValues = objectValues;
exports.objectKeys = objectKeys;
exports.objectEntries = objectEntries;
exports.propertyList = propertyList;
exports.propertyCount = propertyCount;
exports.fixProperty = fixProperty;
exports.inProperty = inProperty;
exports.setProperty = setProperty;
exports.getProperty = getProperty;
exports.copyProperty = copyProperty;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  copyProperty: copyProperty,
  getProperty: getProperty,
  setProperty: setProperty,
  inProperty: inProperty,
  fixProperty: fixProperty,
  propertyCount: propertyCount,
  propertyList: propertyList,
  objectEntries: objectEntries,
  objectKeys: objectKeys,
  objectValues: objectValues,
  hasOwn: hasOwn,
  hasPrototype: hasPrototype,
  has: has,
  // Another name
  objectToKeyValueArray: objectToKeyValueArray,
  objectToKeyArray: objectToKeyArray,
  objectToValueArray: objectToValueArray,
  // Short name
  copyProp: copyProp,
  getProp: getProp,
  setProp: setProp,
  inProp: inProp,
  fixProp: fixProp,
  propCount: propCount
});

var object = _objectSpread({}, _object["default"]);
/**
 * array
 */


exports.object = object;
var min = _array["default"].min,
    max = _array["default"].max,
    sum = _array["default"].sum,
    average = _array["default"].average,
    median = _array["default"].median;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  min: min,
  max: max,
  sum: sum,
  average: average,
  median: median
});

var array = _objectSpread({}, _array["default"]);

exports.array = array;
array.operation = _objectSpread({}, _array["default"].operation);
/**
 * date
 */

var Today = _date["default"].Today;
exports.Today = Today;
rootAlias = _objectSpread(_objectSpread({}, rootAlias), {}, {
  Today: Today
});

var date = _objectSpread({}, _date["default"]);
/**
 * consoleHook
 */


exports.date = date;

var isPrefixSafixAdd = function isPrefixSafixAdd(prefix, safix, commaString) {
  return _map(_splitCommaItems(commaString), function (item) {
    return prefix + item + safix;
  }).join(',');
};

var consoleHook = _copyProperty(_consoleHook["default"], [isPrefixSafixAdd('hook', '', 'Log,Info,Warn,Error,Debug,'), isPrefixSafixAdd('unHook', '', 'Log,Info,Warn,Error,Debug,'), isPrefixSafixAdd('accept', '', 'Log,Info,Warn,Error,Debug,'), 'hook', 'unHook', 'accept'].join(','));
/**
 * wsh
 */


exports.consoleHook = consoleHook;

var wsh = _objectSpread({}, _wsh["default"]);
/**
 * parts
 */


exports.wsh = wsh;

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
  date: date,
  consoleHook: consoleHook,
  wsh: wsh
}, rootAlias);

exports.parts = parts;

var _default = _objectSpread(_objectSpread({}, parts), {}, {
  parts: parts
});

exports["default"] = _default;