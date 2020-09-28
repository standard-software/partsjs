import _polyfill from './polyfill.js';
import _root from './root/root.js';
import _platform from './platform/platform.js';
import _type from './type/type.js';
import _typeAlias from './type/typeAlias.js';
import _test from './test/test.js';
import _syntax from './syntax/syntax.js';
import _compare from './compare/compare.js';
import _convert from './convert/convert.js';
import _convertAlias from './convert/convertAlias.js';
import _number from './number/number.js';
import _string from './string/string.js';
import _object from './object/object.js';
import _array from './array/array.js';
import _consoleHook from './consoleHook/consoleHook.js';
import _wsh from './wsh/wsh.js';

export const VERSION = '8.1.0 beta';

let rootAlias = {};
const propertyNames = {};

const { _copyProperty } = _object;
const { _splitCommaItems } = _string;
const { _map } = _array;

/**
 * root
 */
export const {
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

/**
 * test
 */
export const {
  isThrown, isThrownValue, isThrownException, isNotThrown,
} = _test;

rootAlias = { ...rootAlias,
  isThrown, isThrownValue, isThrownException, isNotThrown,
};

export const test = {
  ..._test,
};

/**
 * syntax
 */
export const {
  assert, guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
} = _syntax;

rootAlias = { ...rootAlias,
  assert, guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
};

export const syntax = {
  ..._syntax,
};

/**
 * compare
 */
export const {
  equal, equalDeep,
  or,
  match, matchValue, initialValue,
  allMatch, indexOfMatch, someMatch,
  matchSome, matchSomeValue,
  allMatchSome, indexOfMatchSome, someMatchSome,
  matchAll, matchAllValue,
  allMatchAll, indexOfMatchAll, someMatchAll,
  includes, includesSome, includesAll,
} = _compare;

rootAlias = { ...rootAlias,
  equal, equalDeep,
  or,
  match, matchValue, initialValue,
  allMatch, indexOfMatch, someMatch,
  matchSome, matchSomeValue,
  allMatchSome, indexOfMatchSome, someMatchSome,
  matchAll, matchAllValue,
  allMatchAll, indexOfMatchAll, someMatchAll,
  includes, includesSome, includesAll,
};

export const compare = {
  ..._compare,
};

/**
 * convert
 */
export const {
  numberToString,
  valueToString,
  stringToNumber, stringToNumberDefault,
  stringToInteger, stringToIntegerDefault,
  valueToNumber, valueToNumberDefault,
  valueToInteger, valueToIntegerDefault,
} = _convert;

export const {
  numToString,
  valToString,
  strToNumber, strToNumberDef,
  strToInteger, strToIntegerDef,
  valToNumber, valToNumberDef,
  valToInteger, valToIntegerDef,

  numToStr,
  valToStr,
  valToNum, valToNumDef,
  valToInt, valToIntDef,

  strToNum, strToNumDef,
  strToInt, strToIntDef,
} = _convertAlias;

rootAlias = { ...rootAlias,
  numberToString,
  valueToString,
  stringToNumber, stringToNumberDefault,
  stringToInteger, stringToIntegerDefault,
  valueToNumber, valueToNumberDefault,
  valueToInteger, valueToIntegerDefault,

  numToString,
  valToString,
  strToNumber, strToNumberDef,
  strToInteger, strToIntegerDef,
  valToNumber, valToNumberDef,
  valToInteger, valToIntegerDef,

  numToStr,
  valToStr,
  valToNum, valToNumDef,
  valToInt, valToIntDef,

  strToNum, strToNumDef,
  strToInt, strToIntDef,
};

export const convert = {
  ..._convert,
  ..._convertAlias,
};

/**
 * number
 */
export const {
  isMultiples, isEven, isOdd,
  round, nearEqual,
  inRange, keepMinMax,
  randomInt,

  makeInRange,
} = _number;

rootAlias = { ...rootAlias,
  isMultiples, isEven, isOdd,
  round, nearEqual,
  inRange, keepMinMax,
  randomInt,

  makeInRange,
};

export const number = {
  ..._number,
};

/**
 * string
 */
export const {
  isLowerCase, isUpperCase,
  replaceAll,
  matchFormat,
  split,
  splitCommaItems,
  splitDotItems,
} = _string;

rootAlias = { ...rootAlias,
  isLowerCase, isUpperCase,
  replaceAll,
  matchFormat,
  split,
  splitCommaItems,
  splitDotItems,
};

export const string = {
  ..._string,
};

/**
 * object
 */
export const {
  copyProperty,
  getProperty,
  setProperty,
  inProperty,
  fixProperty,
  propertyCount,
  propertyList,
  objectEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectToKeyArray,
  objectToValueArray,

  // Short name
  copyProp,
  getProp,
  setProp,
  inProp,
  fixProp,
  propCount,
} = _object;

rootAlias = { ...rootAlias,
  copyProperty,
  getProperty,
  setProperty,
  inProperty,
  fixProperty,
  propertyCount,
  propertyList,
  objectEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectToKeyArray,
  objectToValueArray,

  // Short name
  copyProp,
  getProp,
  setProp,
  inProp,
  fixProp,
  propCount,
};

export const object = {
  ..._object,
};

/**
 * array
 */
export const {
  min, max,
  sum, average, median,
} = _array;

rootAlias = { ...rootAlias,
  min, max,
  sum, average, median,
};

export const array = {
  ..._array,
};


array.operation = {
  ..._array.operation,
};

/**
 * consoleHook
 */
const isPrefixSafixAdd = (prefix, safix, commaString) => {
  return _map(
    _splitCommaItems(commaString),  item => prefix + item + safix,
  ).join(',');
};

export const consoleHook = _copyProperty(_consoleHook,
  [
    isPrefixSafixAdd('hook',    '', 'Log,Info,Warn,Error,Debug,'),
    isPrefixSafixAdd('unHook',  '', 'Log,Info,Warn,Error,Debug,'),
    isPrefixSafixAdd('accept',  '', 'Log,Info,Warn,Error,Debug,'),
    'hook', 'unHook', 'accept',
  ].join(','),
);

/**
 * wsh
 */
export const wsh = {
  ..._wsh,
};

/**
 * parts
 */
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

