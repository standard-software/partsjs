import polyfillJs from './polyfill.js';
import commonJs from './common/common.js';
import platformJs from './platform/platform.js';
import typeJs from './type/type.js';
import typeAliasJs from './type/typeAlias.js';
import testJs from './test/test.js';
import syntaxJs from './syntax/syntax.js';
import compareJs from './compare/compare.js';
import convertJs from './convert/convert.js';
import convertAliasJs from './convert/convertAlias.js';
import numberJs from './number/number.js';
import stringJs from './string/string.js';
import objectJs from './object/object.js';
import arrayJs from './array/array.js';
import dateJs from './date/date.js';
import systemJs from './system/system.js';

export const VERSION = '10.6.0 beta';

let rootAlias = {};
const propertyNames = {};

/**
 * common
 */
export const {
  clone,
  cloneDeep,
  functionValue,
  merge,
} = commonJs;

rootAlias = { ...rootAlias,
  clone,
  cloneDeep,
  functionValue,
  merge,
};

export const common = {
  ...commonJs,
};

/**
 * platform
 */
export const platform = {
  ...platformJs,
};

/**
 * type
 */
export const {
  objectToString,
  typeName,
  isPrimitiveType, isReferenceType,
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
} = typeJs;

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
} = typeAliasJs;

rootAlias = { ...rootAlias,
  ...typeJs,
  ...typeAliasJs,
};

export const type = {
  ...typeJs,
  ...typeAliasJs,
};

/**
 * test
 */
export const {
  checkEqual, checkCompare,
  isThrown, isThrownValue, isThrownException, isNotThrown,
} = testJs;

rootAlias = { ...rootAlias,
  checkEqual, checkCompare,
  isThrown, isThrownValue, isThrownException, isNotThrown,
};

export const test = {
  ...testJs,
};

/**
 * syntax
 */
export const {
  assert, guard,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
  recursive,
} = syntaxJs;

rootAlias = { ...rootAlias,
  assert, guard,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
  recursive,
};

export const syntax = {
  ...syntaxJs,
};

/**
 * compare
 */
export const {
  or,
  match, matchValue, initialValue, indexOfMatch, allMatch, someMatch,
  matchSome, matchSomeValue, indexOfMatchSome, allMatchSome, someMatchSome,
  matchAll, matchAllValue, indexOfMatchAll, allMatchAll, someMatchAll,
  includes, includesSome, includesAll,
  equal, equalDeep,
} = compareJs;

rootAlias = { ...rootAlias,
  or,
  match, matchValue, initialValue, indexOfMatch, allMatch, someMatch,
  matchSome, matchSomeValue, indexOfMatchSome, allMatchSome, someMatchSome,
  matchAll, matchAllValue, indexOfMatchAll, allMatchAll, someMatchAll,
  includes, includesSome, includesAll,
  equal, equalDeep,
};

export const compare = {
  ...compareJs,
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
} = convertJs;

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
} = convertAliasJs;

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
  ...convertJs,
  ...convertAliasJs,
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
} = numberJs;

rootAlias = { ...rootAlias,
  isMultiples, isEven, isOdd,
  round, nearEqual,
  inRange, keepMinMax,
  randomInt,

  makeInRange,
};

export const number = {
  ...numberJs,
};

/**
 * string
 */
export const {
  isLowerCase, isUpperCase,
  replaceAll, replaceAllRepeat, replaceAllArray,
  matchFormat,
  split,
  splitCommaItems,
  splitDotItems,
} = stringJs;

rootAlias = { ...rootAlias,
  isLowerCase, isUpperCase,
  replaceAll, replaceAllRepeat, replaceAllArray,
  matchFormat,
  split,
  splitCommaItems,
  splitDotItems,
};

export const string = {
  ...stringJs,
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
  objectFromEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectFromKeyValueArray,
  objectToKeyArray,
  objectToValueArray,

  // Short name
  copyProp,
  getProp,
  setProp,
  inProp,
  fixProp,
  propCount,
} = objectJs;

rootAlias = { ...rootAlias,
  copyProperty,
  getProperty,
  setProperty,
  inProperty,
  fixProperty,
  propertyCount,
  propertyList,
  objectEntries,
  objectFromEntries,
  objectKeys,
  objectValues,
  hasOwn,
  hasPrototype,
  has,

  // Another name
  objectToKeyValueArray,
  objectFromKeyValueArray,
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
  ...objectJs,
};

/**
 * array
 */
export const {
  min, max,
  sum, average, median,
} = arrayJs;

rootAlias = { ...rootAlias,
  min, max,
  sum, average, median,
};

export const array = {
  ...arrayJs,
};

array.operation = {
  ...arrayJs.operation,
};

/**
 * date
 */
export const {
  Today,
  datetimeToString,
} = dateJs;

rootAlias = { ...rootAlias,
  Today,
  datetimeToString,
};

export const date = {
  ...dateJs,
};

/**
 * system
 */
export const system = {
  ...systemJs,
};

/**
 * parts
 */
export const parts = {
  VERSION,
  common,
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
  date,
  system,
  ...rootAlias,
};

export default {
  ...parts,
  parts,
};

