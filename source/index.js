import _polyfill from './polyfill.js';
import _root from './root/root.js';
import _platform from './platform/platform.js';
import _type from './type/type.js';
import _typeAlias from './type/typeAlias.js';
import _test from './test/test.js';
import _syntax from './syntax/syntax.js';
import _compare from './compare/compare.js';
import _convert from './convert/convert.js';
import _number from './number/number.js';
import _string from './string/string.js';
import _object from './object/object.js';
import _array from './array/array.js';
import _consoleHook from './consoleHook/consoleHook.js';
import _wsh from './wsh/wsh.js';

export const VERSION = '8.0.0 beta';

let rootAlias = {};
const propertyNames = {};

const { _copyProperty } = _object;
const { _replaceAll } = _string;
const { _map } = _array;

/**
 * root
 */
export const {
  // _clone, _cloneDeep,
  clone, cloneDeep,
} = _root;

rootAlias = { ...rootAlias,
  clone, cloneDeep,
};

export const root = {
  clone, cloneDeep,
};

/**
 * platform
 */
export const platform = {
  ..._platform,
};

/**
 * type
 */
export const {
  isError,
  // -----
  objectToString,
  // -----
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isException,
  isSymbol,
  isMap, isWeakMap,
  isSet, isWeakSet,
  // -----
  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction,
  isNotObject, isNotObjectNormal, isNotObjectFromNull,
  isNotObjectLike, isNotModule,
  isNotArray, isNotArraySeries,
  isNotDate, isNotRegExp,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotEmptyObject, isNotEmptyArray,

  isNotException,
  isNotSymbol,
  isNotMap, isNotWeakMap,
  isNotSet, isNotWeakSet,
  // -----
  isUndefinedAll, isNullAll, isNaNStrictAll,
  isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
  isFunctionAll,
  isObjectAll, isObjectNormalAll, isObjectFromNullAll,
  isObjectLikeAll, isModuleAll,
  isArrayAll, isArraySeriesAll,
  isDateAll, isRegExpAll,
  isBooleanObjectAll, isNumberObjectAll, isStringObjectAll,
  isEmptyObjectAll, isEmptyArrayAll,

  isExceptionAll,
  isSymbolAll,
  isMapAll, isWeakMapAll,
  isSetAll, isWeakSetAll,
  // -----
  isNotUndefinedAll, isNotNullAll, isNotNaNStrictAll,
  isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
  isNotFunctionAll,
  isNotObjectAll, isNotObjectNormalAll, isNotObjectFromNullAll,
  isNotObjectLikeAll, isNotModuleAll,
  isNotArrayAll, isNotArraySeriesAll,
  isNotDateAll, isNotRegExpAll,
  isNotBooleanObjectAll, isNotNumberObjectAll, isNotStringObjectAll,
  isNotEmptyObjectAll, isNotEmptyArrayAll,

  isNotExceptionAll,
  isNotSymbolAll,
  isNotMapAll, isNotWeakMapAll,
  isNotSetAll, isNotWeakSetAll,
  // -----
  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray,
  isObjectArray, isObjectNormalArray, isObjectFromNullArray,
  isObjectLikeArray, isModuleArray,
  isArrayArray, isArraySeriesArray,
  isDateArray, isRegExpArray,
  isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
  isEmptyObjectArray, isEmptyArrayArray,

  isExceptionArray,
  isSymbolArray,
  isMapArray, isWeakMapArray,
  isSetArray, isWeakSetArray,
  // -----
  isNotUndefinedArray, isNotNullArray, isNotNaNStrictArray,
  isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
  isNotFunctionArray,
  isNotObjectArray, isNotObjectNormalArray, isNotObjectFromNullArray,
  isNotObjectLikeArray, isNotModuleArray,
  isNotArrayArray, isNotArraySeriesArray,
  isNotDateArray, isNotRegExpArray,
  isNotBooleanObjectArray, isNotNumberObjectArray, isNotStringObjectArray,
  isNotEmptyObjectArray, isNotEmptyArrayArray,

  isNotExceptionArray,
  isNotSymbolArray,
  isNotMapArray, isNotWeakMapArray,
  isNotSetArray, isNotWeakSetArray,
  // -----
} = _type;

export const {
  isObjectType, isArrayType,

  isUndef,
  isBool, isNum, isInt, isStr,
  isFunc,
  isObj, isObjNormal, isObjFromNull,
  isObjLike,
  isEmptyObj,
  isExcept,
  isObjType,
  // -----
  isNotObjectType, isNotArrayType,

  isNotUndef,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc,
  isNotObj, isNotObjNormal, isNotObjFromNull,
  isNotObjLike,
  isNotEmptyObj,
  isNotExcept,
  isNotObjType,
  // -----
  isObjectTypeAll, isArrayTypeAll,

  isUndefAll,
  isBoolAll, isNumAll, isIntAll, isStrAll,
  isFuncAll,
  isObjAll, isObjNormalAll, isObjFromNullAll,
  isObjLikeAll,
  isEmptyObjAll,
  isExceptAll,
  isObjTypeAll,
  // -----
  isNotObjectTypeAll, isNotArrayTypeAll,

  isNotUndefAll,
  isNotBoolAll, isNotNumAll, isNotIntAll, isNotStrAll,
  isNotFuncAll,
  isNotObjAll, isNotObjNormalAll, isNotObjFromNullAll,
  isNotObjLikeAll,
  isNotEmptyObjAll,
  isNotExceptAll,
  isNotObjTypeAll,
  // -----
  isObjectTypeArray, isArrayTypeArray,

  isUndefArray,
  isBoolArray, isNumArray, isIntArray, isStrArray,
  isFuncArray,
  isObjArray, isObjNormalArray, isObjFromNullArray,
  isObjLikeArray,
  isEmptyObjArray,
  isExceptArray,
  isObjTypeArray,
  // -----
  isNotObjectTypeArray, isNotArrayTypeArray,

  isNotUndefArray,
  isNotBoolArray, isNotNumArray, isNotIntArray, isNotStrArray,
  isNotFuncArray,
  isNotObjArray, isNotObjNormalArray, isNotObjFromNullArray,
  isNotObjLikeArray,
  isNotEmptyObjArray,
  isNotExceptArray,
  isNotObjTypeArray,
  // -----
} = _typeAlias;

rootAlias = { ...rootAlias,
  ..._type,
  ..._typeAlias,
};

export const type = {
  ..._type,
  ..._typeAlias,
};

propertyNames._TYPE_BASE =
  'Undefined, Null, NaNStrict, ' +
  'Boolean, Number, Integer, String, ' +
  'Function, ' +
  'Object, ObjectNormal, ObjectFromNull, ' +
  'ObjectLike, Module, ' +
  'Array, ArraySeries, ' +
  'Date, RegExp, ' +
  'Exception, ' +
  'EmptyObject, EmptyArray, ' +
  'Symbol, ' +
  'Map, WeakMap, Set, WeakSet, ' +
  'BooleanObject, NumberObject, StringObject, ' +
  'ObjectType, ArrayType, ' +
  'Bool, Num, Int, Str, ' +
  'Func, ' +
  'Obj, ObjNormal, ObjFromNull, ' +
  'ObjLike, ' +
  'ObjType, ' +
  'Except, ' +
  'EmptyObj, ' +
  '';
const isPrefixSafixAdd = (prefix, safix, commaString) =>
  _map(_array.filter(_replaceAll(commaString, ' ', '').split(','), v => v !== ''),
    item => prefix + item + safix).join(',');
// propertyNames.TYPE = [
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

propertyNames.TEST_PUBLIC =
  'checkEqual, checkCompare,' +
  'describe, it, test, expect,' +
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  'testCounter,';
propertyNames.TEST_ROOT =
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  '';
const test = {};
_copyProperty(_test, propertyNames.TEST_PUBLIC, test);
_copyProperty(_test, propertyNames.TEST_ROOT, rootAlias);

// syntax
propertyNames.SYNTAX =
  'assert,guard,' +
  'functionValue,' +
  'sc,if_,switch_,' +
  'loop,' +
  'canUseMap, canUseWeakMap,' +
  'canUseSet, canUseWeakSet,' +
  'Enum,' +
  '';
const syntax = _copyProperty(_syntax, propertyNames.SYNTAX);
_copyProperty(_syntax, propertyNames.SYNTAX, rootAlias);

// compare
propertyNames.COMPARE =
  'equal, equalDeep,' +
  'or,' +
  'match, matchValue, initialValue,' +
  'allMatch, indexOfMatch, someMatch,' +
  'matchSome, matchSomeValue,' +
  'allMatchSome, indexOfMatchSome, someMatchSome,' +
  'matchAll, matchAllValue,' +
  'allMatchAll, indexOfMatchAll, someMatchAll,' +
  'includes, includesSome, includesAll,' +
  '';
const compare = {};
_copyProperty(_compare, propertyNames.COMPARE, compare);
_copyProperty(_compare, propertyNames.COMPARE, rootAlias);

// convert
propertyNames.CONVERT =
  'numberToString, valueToString,' +
  'stringToNumber,stringToNumberDefault,' +
  'stringToInteger,stringToIntegerDefault,' +
  'valueToNumber, valueToNumberDefault,' +
  'valueToInteger, valueToIntegerDefault,' +

  'numToString, valToString,' +
  'strToNumber, strToNumberDef,' +
  'strToInteger, strToIntegerDef,' +
  'valToNumber, valToNumberDefault,' +
  'valToInteger, valToIntegerDefault,' +

  'valToNum, valToNumDef,' +
  'valToInt, valToIntDef,' +

  'numToStr,' +
  'strToNum,strToNumDef,' +
  'strToInt,strToIntDef,' +
  '';
const convert = {};
_copyProperty(_convert, propertyNames.CONVERT, convert);
_copyProperty(_convert, propertyNames.CONVERT, rootAlias);

// number
propertyNames.NUMBER =
  'isMultiples,isEven,isOdd,' +
  'round,nearEqual,inRange,randomInt,' +
  '';
const number = _copyProperty(_number, propertyNames.NUMBER);
_copyProperty(_number, propertyNames.NUMBER, rootAlias);

// string
propertyNames.STRING_PUBLIC =
  'matchFormat, replaceAll,' +
  'repeat,' +
  'isLowerCase, isUpperCase,' +
  'indexOfFirst, indexOfLast,' +
  'isFirst, isLast, isBothEnds,' +
  'includeFirst, includeLast, includeBothEnds,' +
  'excludeFirst, excludeLast, excludeBothEnds,' +
  'trimFirst, trimLast, trimBothEnds,' +
  'subIndex, subLength, subFirst, subLast,' +
  'deleteIndex, deleteLength, deleteFirst, deleteLast,' +
  'insert, add,' +
  'subFirstDelimFirst, subFirstDelimLast, ' +
  'subLastDelimFirst, subLastDelimLast, ' +
  'tagInnerFirst, tagOuterFirst, ' +
  'tagInnerLast, tagOuterLast, ' +
  'split, splitCommaItems, splitDotItems, ' +
  '';
propertyNames.STRING_ROOT =
  'matchFormat,replaceAll,' +
  'isLowerCase,isUpperCase,' +
  'split, splitCommaItems, splitDotItems, ' +
  '';
const string = {};
_copyProperty(_string, propertyNames.STRING_PUBLIC, string);
_copyProperty(_string, propertyNames.STRING_ROOT, rootAlias);

// object
propertyNames.OBJECT_PUBLIC =
  'isObjectParameter,' +
  'copyProperty, propertyCount, inProperty, fixProperty,' +
  'has,hasOwn,hasPrototype,' +
  'getProperty, setProperty,' +
  'propertyList, ' +
  'objectEntries, objectToKeyValueArray,' +
  'objectKeys, objectToKeyArray,' +
  'objectValues, objectToValueArray,' +
  'copyProp, propCount, inProp, fixProp,' +
  'getProp, setProp,' +
  '';
propertyNames.OBJECT_ROOT =
  'copyProperty,propertyCount,inProperty, fixProperty,' +
  'has,hasOwn,hasPrototype,' +
  'getProperty,setProperty,' +
  'propertyList, ' +
  'objectEntries, objectToKeyValueArray,' +
  'objectKeys, objectToKeyArray,' +
  'objectValues, objectToValueArray,' +
  'copyProp,propCount,inProp, fixProp,' +
  'getProp,setProp,' +
  '';
const object = {};
_copyProperty(_object, propertyNames.OBJECT_PUBLIC, object);
_copyProperty(_object, propertyNames.OBJECT_ROOT, rootAlias);
object.objectToString = _type.objectToString;
rootAlias.objectToString = _type.objectToString;

// array
propertyNames.ARRAY_PUBLIC =
  'NumberArray, IntegerArray,' +
  'from,' +
  'min, max,' +
  'sum, average, median,' +
  'mode,' +
  'unique, single, multiple,' +
  'group,' +
  'filter, map, count,' +
  'findFirstIndex, findLastIndex,' +
  'findFirst, findLast,' +
  'some, all,' +
  'isFirst, isLast, isBothEnds,' +
  'subIndex, subLength,' +
  'subFirst, subLast,' +
  'findIndex, findBackIndex,' +
  'find, findBack,' +
  'every,' +
  'arrayToIndexValueArray, arrayEntries, ' +
  '';
propertyNames.ARRAY_ROOT =
  'min, max,' +
  'sum, average, median,' +
  '';
const array = {};
_copyProperty(_array, propertyNames.ARRAY_PUBLIC, array);
_copyProperty(_array, propertyNames.ARRAY_ROOT, rootAlias);

// array.operation
propertyNames.ARRAY_OPERATION_PUBLIC =
  'insert, add,' +
  'deleteLength, deleteIndex,' +
  'deleteFirst, deleteLast,' +
  'includeFirst, includeLast, includeBothEnds,' +
  'excludeFirst, excludeLast, excludeBothEnds,' +
  'trimFirst, trimLast, trimBothEnds,' +
  'popFirst, popLast,' +
  'pushFirst, pushLast,' +
  'remainFirst, remainLast,' +
  'filter,' +
  'sort,' +
  'sortNumber,' +
  'sortLength,' +
  'sortDictionary,' +
  'sortNumberAscending, sortNumberDescending,' +
  'sortLengthAscending, sortLengthDescending,' +
  'sortDictionaryAscending, sortDictionaryDescending,' +
  '';
array.operation = {};
_copyProperty(_array.operation, propertyNames.ARRAY_OPERATION_PUBLIC, array.operation);

// consoleHook
propertyNames._CONSOLE_HOOK_BASE =
  'Log,Info,Warn,Error,Debug,';
propertyNames.CONSOLE_HOOK = [
  isPrefixSafixAdd('hook',    '', propertyNames._CONSOLE_HOOK_BASE),
  isPrefixSafixAdd('unHook',  '', propertyNames._CONSOLE_HOOK_BASE),
  isPrefixSafixAdd('accept',  '', propertyNames._CONSOLE_HOOK_BASE),
  'hook', 'unHook', 'accept',
].join(',');
const consoleHook = {};
_copyProperty(_consoleHook, propertyNames.CONSOLE_HOOK, consoleHook);

// wsh
propertyNames.WSH =
  'FileSystemObject,Shell,' +
  'forceCreateFolder,' +
  '';
const wsh = {};
_copyProperty(_wsh, propertyNames.WSH, wsh);

export const {
  // clone, cloneDeep,

  // objectToString,

  // isUndefined, isNull, isNaNStrict,
  // isBoolean, isNumber, isInteger, isString,
  // isFunction,
  // isObject, isObjectNormal, isObjectFromNull,
  // isObjectLike, isModule,
  // isArray, isArraySeries,
  // isDate, isRegExp,
  // isException,
  // isEmptyObject, isEmptyArray,
  // isSymbol,
  // isMap, isWeakMap, isSet, isWeakSet,
  // isBooleanObject, isNumberObject, isStringObject,

  // isUndef,
  // isBool, isNum, isInt, isStr,
  // isFunc,
  // isObj, isObjNormal, isObjFromNull,
  // isObjLike,
  // isExcept,
  // isEmptyObj,
  // isObjectType, isArrayType,
  // isObjType,

  // isNotUndefined, isNotNull, isNotNaNStrict,
  // isNotBoolean, isNotNumber, isNotInteger, isNotString,
  // isNotFunction,
  // isNotObject, isNotObjectNormal, isNotObjectFromNull,
  // isNotObjectLike, isNotModule,
  // isNotArray, isNotArraySeries,
  // isNotDate, isNotRegExp,
  // isNotException,
  // isNotEmptyObject, isNotEmptyArray,
  // isNotSymbol,
  // isNotMap, isNotWeakMap, isNotSet, isNotWeakSet,
  // isNotBooleanObject, isNotNumberObject, isNotStringObject,

  // isNotUndef,
  // isNotBool, isNotNum, isNotInt, isNotStr,
  // isNotFunc,
  // isNotObj, isNotObjNormal, isNotObjFromNull,
  // isNotObjLike,
  // isNotExcept,
  // isNotEmptyObj,
  // isNotObjectType, isNotArrayType,
  // isNotObjType,

  // isUndefinedAll, isNullAll, isNaNStrictAll,
  // isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
  // isFunctionAll,
  // isObjectAll, isObjectNormalAll, isObjectFromNullAll,
  // isObjectLikeAll, isModuleAll,
  // isArrayAll, isArraySeriesAll,
  // isDateAll, isRegExpAll,
  // isExceptionAll,
  // isEmptyObjectAll, isEmptyArrayAll,
  // isSymbolAll,
  // isMapAll, isWeakMapAll, isSetAll, isWeakSetAll,
  // isBooleanObjectAll, isNumberObjectAll, isStringObjectAll,

  // isUndefAll,
  // isBoolAll, isNumAll, isIntAll, isStrAll,
  // isFuncAll,
  // isObjAll, isObjNormalAll, isObjFromNullAll,
  // isObjLikeAll,
  // isExceptAll,
  // isEmptyObjAll,

  // isNotUndefinedAll, isNotNullAll, isNotNaNStrictAll,
  // isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
  // isNotFunctionAll,
  // isNotObjectAll, isNotObjectNormalAll, isNotObjectFromNullAll,
  // isNotObjectLikeAll, isNotModuleAll,
  // isNotArrayAll, isNotArraySeriesAll,
  // isNotDateAll, isNotRegExpAll,
  // isNotExceptionAll,
  // isNotEmptyObjectAll, isNotEmptyArrayAll,
  // isNotSymbolAll,
  // isNotMapAll, isNotWeakMapAll, isNotSetAll, isNotWeakSetAll,
  // isNotBooleanObjectAll, isNotNumberObjectAll, isNotStringObjectAll,

  // isNotUndefAll,
  // isNotBoolAll, isNotNumAll, isNotIntAll, isNotStrAll,
  // isNotFuncAll,
  // isNotObjAll, isNotObjNormalAll, isNotObjFromNullAll,
  // isNotObjLikeAll,
  // isNotExceptAll,
  // isNotEmptyObjAll,

  // isObjectTypeAll, isArrayTypeAll,
  // isNotObjectTypeAll, isNotArrayTypeAll,
  // isObjTypeAll,
  // isNotObjTypeAll,

  // isUndefinedArray, isNullArray, isNaNStrictArray,
  // isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  // isFunctionArray,
  // isObjectArray, isObjectNormalArray, isObjectFromNullArray,
  // isObjectLikeArray, isModuleArray,
  // isArrayArray, isArraySeriesArray,
  // isDateArray, isRegExpArray,
  // isExceptionArray,
  // isEmptyObjectArray, isEmptyArrayArray,
  // isSymbolArray,
  // isMapArray, isWeakMapArray, isSetArray, isWeakSetArray,
  // isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,

  // isUndefArray,
  // isBoolArray, isNumArray, isIntArray, isStrArray,
  // isFuncArray,
  // isObjArray, isObjNormalArray, isObjFromNullArray,
  // isObjLikeArray,
  // isExceptArray,
  // isEmptyObjArray,

  // isNotUndefinedArray, isNotNullArray, isNotNaNStrictArray,
  // isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
  // isNotFunctionArray,
  // isNotObjectArray, isNotObjectNormalArray, isNotObjectFromNullArray,
  // isNotObjectLikeArray, isNotModuleArray,
  // isNotArrayArray, isNotArraySeriesArray,
  // isNotDateArray, isNotRegExpArray,
  // isNotExceptionArray,
  // isNotEmptyObjectArray, isNotEmptyArrayArray,
  // isNotSymbolArray,
  // isNotMapArray, isNotWeakMapArray, isNotSetArray, isNotWeakSetArray,
  // isNotBooleanObjectArray, isNotNumberObjectArray, isNotStringObjectArray,

  // isNotUndefArray,
  // isNotBoolArray, isNotNumArray, isNotIntArray, isNotStrArray,
  // isNotFuncArray,
  // isNotObjArray, isNotObjNormalArray, isNotObjFromNullArray,
  // isNotObjLikeArray,
  // isNotExceptArray,
  // isNotEmptyObjArray,

  // isObjectTypeArray, isArrayTypeArray,
  // isNotObjectTypeArray, isNotArrayTypeArray,
  // isObjTypeArray,
  // isNotObjTypeArray,

  isThrown, isThrownValue, isThrownException, isNotThrown,

  assert, guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap,  canUseWeakMap,
  canUseSet,  canUseWeakSet,
  Enum,

  equal,  equalDeep,
  or,
  match,    matchValue,  initialValue,
  allMatch, indexOfMatch, someMatch,
  matchSome, matchSomeValue,
  allMatchSome, indexOfMatchSome, someMatchSome,
  matchAll, matchAllValue,
  allMatchAll, indexOfMatchAll, someMatchAll,
  includes, includesSome, includesAll,

  numberToString, valueToString,
  stringToNumber, stringToNumberDefault,
  stringToInteger, stringToIntegerDefault,
  valueToNumber, valueToNumberDefault,
  valueToInteger, valueToIntegerDefault,

  numToString, valToString,
  strToNumber, strToNumberDef,
  strToInteger, strToIntegerDef,
  valToNumber, valToNumberDefault,
  valToInteger, valToIntegerDefault,

  valToNum, valToNumDef,
  valToInt, valToIntDef,

  numToStr,
  strToNum, strToNumDef,
  strToInt, strToIntDef,

  isMultiples, isEven, isOdd,
  round, nearEqual, inRange, randomInt,

  matchFormat, replaceAll,
  isLowerCase, isUpperCase,
  split, splitCommaItems, splitDotItems,

  copyProperty, propertyCount, inProperty, fixProperty,
  has, hasOwn, hasPrototype,
  getProperty, setProperty,
  propertyList,
  objectEntries, objectToKeyValueArray,
  objectKeys, objectToKeyArray,
  objectValues, objectToValueArray,
  copyProp, propCount, inProp, fixProp,
  getProp, setProp,


  min, max,
  sum, average, median,
} = rootAlias;

export {
  // platform,
  // type,
  test,
  syntax,
  compare,
  convert,
  number,
  string,
  object,
  array,
  consoleHook,
  wsh,
};

export const parts = {
  VERSION,
  root,
  platform,
  type,
  test,
  syntax,
  compare,
  convert,
  number,
  string,
  object,
  array,
  consoleHook,
  wsh,
  ...rootAlias,
};

export default {
  ...parts,
  parts,
};

