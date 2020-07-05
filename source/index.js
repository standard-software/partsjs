import _root from './root/root.js';
import _platform from './platform/platform.js';
import _type from './type/type.js';
import _test from './test/test.js';
import _syntax from './syntax/syntax.js';
import _compare from './compare/compare.js';
import _convert from './convert/convert.js';
import _number from './number/number.js';
import _string from './string/string.js';
import _object from './object/object.js';
import _array from './array/array.js';
import _consoleHook from './consoleHook/consoleHook.js';

const VERSION = '6.4.0 beta';

const rootNames = {};
const propertyNames = {};

const { _copyProperty } = _object;
const { _replaceAll } = _string;
const { _map } = _array;

// root
propertyNames.ROOT =
  'clone, cloneDeep,' +
  'cloneFunction, cloneFunctionArrayDefault,' +
  '';
const root = {};
_copyProperty(_root, propertyNames.ROOT, root);
_copyProperty(_root, propertyNames.ROOT, rootNames);

// platform
propertyNames.PLATFORM =
  'name,' +
  'isWebBrowser,' +
  'isWindowsScriptHost,' +
  'isGoogleAppsScript,' +
  'isJest,' +
  'isNodeJs,' +
  'isDeno,' +
  'browserName,' +
  'isChrome,' +
  'isFirefox,' +
  'isEdge,' +
  'isInternetExplorer,' +
  'isSafari,' +
  'isOpera,' +
  'googleAppScriptEngineName,' +
  'isGasV8,' +
  'isGasRhino,' +
  'buildMode,' +
  '';
const platform = _copyProperty(_platform, propertyNames.PLATFORM);

// type
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
propertyNames.TYPE = [
  isPrefixSafixAdd('is',    '',     propertyNames._TYPE_BASE),
  isPrefixSafixAdd('isNot', '',     propertyNames._TYPE_BASE),
  isPrefixSafixAdd('is',    'All',  propertyNames._TYPE_BASE),
  isPrefixSafixAdd('isNot', 'All',  propertyNames._TYPE_BASE),
  isPrefixSafixAdd('is',    'Array',  propertyNames._TYPE_BASE),
  isPrefixSafixAdd('isNot', 'Array',  propertyNames._TYPE_BASE),
].join(',');
const type = {};
_copyProperty(_type, propertyNames.TYPE, type);
_copyProperty(_type, propertyNames.TYPE, rootNames);

// test
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
_copyProperty(_test, propertyNames.TEST_ROOT, rootNames);

// syntax
propertyNames.SYNTAX =
  'assert,guard,' +
  'functionValue,' +
  'sc,if_,switch_,' +
  'loop,' +
  'canUseMap, canUseSet,' +
  '';
const syntax = _copyProperty(_syntax, propertyNames.SYNTAX);
_copyProperty(_syntax, propertyNames.SYNTAX, rootNames);

// compare
propertyNames.COMPARE =
  'equal, equalDeep,' +
  'equalFunction,' +
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
_copyProperty(_compare, propertyNames.COMPARE, rootNames);

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
_copyProperty(_convert, propertyNames.CONVERT, rootNames);

// number
propertyNames.NUMBER =
  'isMultiples,isEven,isOdd,' +
  'round,nearEqual,inRange,randomInt,' +
  '';
const number = _copyProperty(_number, propertyNames.NUMBER);
_copyProperty(_number, propertyNames.NUMBER, rootNames);

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
  '';
propertyNames.STRING_ROOT =
  'matchFormat,replaceAll,' +
  'isLowerCase,isUpperCase,' +
  '';
const string = {};
_copyProperty(_string, propertyNames.STRING_PUBLIC, string);
_copyProperty(_string, propertyNames.STRING_ROOT, rootNames);

// object
propertyNames.OBJECT_PUBLIC =
  'isObjectParameter,' +
  'copyProperty, propertyCount, inProperty,' +
  'has,hasOwn,hasPrototype,' +
  'getProperty, setProperty,' +
  'objectToKeyValueArray, objectEntries,' +
  'copyProp, propCount, inProp,' +
  'getProp, setProp,' +
  '';
propertyNames.OBJECT_ROOT =
  'copyProperty,propertyCount,inProperty,' +
  'has,hasOwn,hasPrototype,' +
  'getProperty,setProperty,' +
  'copyProp,propCount,inProp,' +
  'getProp,setProp,' +
  '';
const object = {};
_copyProperty(_object, propertyNames.OBJECT_PUBLIC, object);
_copyProperty(_object, propertyNames.OBJECT_ROOT, rootNames);
object.objectToString = _type.objectToString;
rootNames.objectToString = _type.objectToString;

// array
propertyNames.ARRAY_PUBLIC =
  'NumberArray, IntegerArray,' +
  'from,' +
  'min, max,' +
  'sum, average, median,' +
  'mode,' +
  'unique, single, multiple,' +
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
  'arrayToIndexValueArray, arrayEntries' +
  '';
propertyNames.ARRAY_ROOT =
  'min, max,' +
  'sum, average, median,' +
  '';
const array = {};
_copyProperty(_array, propertyNames.ARRAY_PUBLIC, array);
_copyProperty(_array, propertyNames.ARRAY_ROOT, rootNames);

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

export const {
  clone, cloneDeep,
  cloneFunction, cloneFunctionArrayDefault,

  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isException,
  isEmptyObject, isEmptyArray,
  isSymbol,
  isMap, isWeakMap, isSet, isWeakSet,
  isBooleanObject, isNumberObject, isStringObject,
  isBool, isNum, isInt, isStr,
  isFunc,
  isObj, isObjNormal, isObjFromNull,
  isObjLike,
  isExcept,
  isEmptyObj,

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction,
  isNotObject, isNotObjectNormal, isNotObjectFromNull,
  isNotObjectLike, isNotModule,
  isNotArray, isNotArraySeries,
  isNotDate, isNotRegExp,
  isNotException,
  isNotEmptyObject, isNotEmptyArray,
  isNotSymbol,
  isNotMap, isNotWeakMap, isNotSet, isNotWeakSet,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc,
  isNotObj, isNotObjNormal, isNotObjFromNull,
  isNotObjLike,
  isNotExcept,
  isNotEmptyObj,

  isObjectType, isArrayType,
  isNotObjectType, isNotArrayType,
  isObjType,
  isNotObjType,

  isUndefinedAll, isNullAll, isNaNStrictAll,
  isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
  isFunctionAll,
  isObjectAll, isObjectNormalAll, isObjectFromNullAll,
  isObjectLikeAll, isModuleAll,
  isArrayAll, isArraySeriesAll,
  isDateAll, isRegExpAll,
  isExceptionAll,
  isEmptyObjectAll, isEmptyArrayAll,
  isSymbolAll,
  isMapAll, isWeakMapAll, isSetAll, isWeakSetAll,
  isBooleanObjectAll, isNumberObjectAll, isStringObjectAll,
  isBoolAll, isNumAll, isIntAll, isStrAll,
  isFuncAll,
  isObjAll, isObjNormalAll, isObjFromNullAll,
  isObjLikeAll,
  isExceptAll,
  isEmptyObjAll,

  isNotUndefinedAll, isNotNullAll, isNotNaNStrictAll,
  isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
  isNotFunctionAll,
  isNotObjectAll, isNotObjectNormalAll, isNotObjectFromNullAll,
  isNotObjectLikeAll, isNotModuleAll,
  isNotArrayAll, isNotArraySeriesAll,
  isNotDateAll, isNotRegExpAll,
  isNotExceptionAll,
  isNotEmptyObjectAll, isNotEmptyArrayAll,
  isNotSymbolAll,
  isNotMapAll, isNotWeakMapAll, isNotSetAll, isNotWeakSetAll,
  isNotBooleanObjectAll, isNotNumberObjectAll, isNotStringObjectAll,
  isNotBoolAll, isNotNumAll, isNotIntAll, isNotStrAll,
  isNotFuncAll,
  isNotObjAll, isNotObjNormalAll, isNotObjFromNullAll,
  isNotObjLikeAll,
  isNotExceptAll,
  isNotEmptyObjAll,

  isObjectTypeAll, isArrayTypeAll,
  isNotObjectTypeAll, isNotArrayTypeAll,
  isObjTypeAll,
  isNotObjTypeAll,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray,
  isObjectArray, isObjectNormalArray, isObjectFromNullArray,
  isObjectLikeArray, isModuleArray,
  isArrayArray, isArraySeriesArray,
  isDateArray, isRegExpArray,
  isExceptionArray,
  isEmptyObjectArray, isEmptyArrayArray,
  isSymbolArray,
  isMapArray, isWeakMapArray, isSetArray, isWeakSetArray,
  isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
  isBoolArray, isNumArray, isIntArray, isStrArray,
  isFuncArray,
  isObjArray, isObjNormalArray, isObjFromNullArray,
  isObjLikeArray,
  isExceptArray,
  isEmptyObjArray,

  isNotUndefinedArray, isNotNullArray, isNotNaNStrictArray,
  isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
  isNotFunctionArray,
  isNotObjectArray, isNotObjectNormalArray, isNotObjectFromNullArray,
  isNotObjectLikeArray, isNotModuleArray,
  isNotArrayArray, isNotArraySeriesArray,
  isNotDateArray, isNotRegExpArray,
  isNotExceptionArray,
  isNotEmptyObjectArray, isNotEmptyArrayArray,
  isNotSymbolArray,
  isNotMapArray, isNotWeakMapArray, isNotSetArray, isNotWeakSetArray,
  isNotBooleanObjectArray, isNotNumberObjectArray, isNotStringObjectArray,
  isNotBoolArray, isNotNumArray, isNotIntArray, isNotStrArray,
  isNotFuncArray,
  isNotObjArray, isNotObjNormalArray, isNotObjFromNullArray,
  isNotObjLikeArray,
  isNotExceptArray,
  isNotEmptyObjArray,

  isObjectTypeArray, isArrayTypeArray,
  isNotObjectTypeArray, isNotArrayTypeArray,
  isObjTypeArray,
  isNotObjTypeArray,

  isThrown, isThrownValue, isThrownException, isNotThrown,

  assert, guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap,  canUseSet,

  equal,  equalDeep,
  equalFunction,
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

  copyProperty, propertyCount, inProperty,
  has, hasOwn, hasPrototype,
  getProperty, setProperty,
  copyProp, propCount, inProp,
  getProp, setProp,
  objectToString,

  min, max,
  sum, average, median,
} = rootNames;

export {
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
};

export const parts = {
  VERSION,
  platform,
  type,
  test,
  syntax,
  compare,
  convert,
  number,
  string,
  consoleHook,
  object,
  array,
  root,
  ...rootNames,
};

export default {
  ...parts,
  parts,
};

