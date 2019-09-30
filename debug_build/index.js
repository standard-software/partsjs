"use strict";

var polyfill = require('./polyfill.js');

var _type = require('./type.js');

var _test = require('./test.js');

var _syntax = require('./syntax.js');

var _compare = require('./compare.js');

var _convert = require('./convert.js');

var _string = require('./string.js');

var _consoleHook = require('./consoleHook.js');

var _object = require('./object.js');

var VERSION = '2.1.0 beta'; // Public Property

var type = _object._copyProperty(_type, 'isUndefined,isNull,isNaNStrict,' + 'isBoolean,isNumber,isInteger,isString,' + 'isFunction,isObject,isObjectType,' + 'isArray,isDate,isRegExp,' + 'isException,' + 'isNotUndefined,isNotNull,isNotNaNStrict,' + 'isNotBoolean,isNotNumber,isNotInteger,isNotString,' + 'isNotFunction,isNotObject,isNotObjectType,' + 'isNotArray,isNotDate,isNotRegExp,' + 'isNotException,' + 'isUndefinedArray,isNullArray,isNaNStrictArray,' + 'isBooleanArray,isNumberArray,isIntegerArray,isStringArray,' + 'isFunctionArray,isObjectArray,isObjectTypeArray,' + 'isArrayArray,isDateArray,isRegExpArray,' + 'isExceptionArray,' + 'isNotUndefinedArray,isNotNullArray,isNotNaNStrictArray,' + 'isNotBooleanArray,isNotNumberArray,isNotIntegerArray,isNotStringArray,' + 'isNotFunctionArray,isNotObjectArray,isNotObjectTypeArray,' + 'isNotArrayArray,isNotDateArray,isNotRegExpArray,' + 'isNotExceptionArray,' + 'isUndef,' + 'isBool,isNum,isInt,isStr,' + 'isFunc,isObj,isObjType,' + 'isExcept,' + 'isNotUndef,' + 'isNotBool,isNotNum,isNotInt,isNotStr,' + 'isNotFunc,isNotObj,isNotObjType,' + 'isNotExcept,' + '');

var test = _object._copyProperty(_test, 'checkEqual,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + '');

var syntax = _object._copyProperty(_syntax, 'assert,guard,' + 'sc,if_,switch_,' + '');

var compare = _object._copyProperty(_compare, '_equal,_or,' + '_match,_matchValue,_initialValue,' + 'equal,or,' + 'match,matchValue,initialValue,' + 'isEmpty,' + '');

var convert = _object._copyProperty(_convert, 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + '');

var string = _object._copyProperty(_string, 'matchFormat,includes,' + '');

var consoleHook = _object._copyProperty(_consoleHook, 'hook,hookLog,hookInfo,hookWarn,hookError,hookDebug,' + 'unHook,unHookLog,unHookInfo,unHookWarn,unHookError,unHookDebug,' + 'accept,acceptLog,acceptInfo,acceptWarn,acceptError,acceptDebug,' + '');

var object = _object._copyProperty(_object, 'copyProperty,inProperty,' + 'propertyCount,' + ''); // Root Property


var isUndefined = _type.isUndefined,
    isNull = _type.isNull,
    isNaNStrict = _type.isNaNStrict,
    isBoolean = _type.isBoolean,
    isNumber = _type.isNumber,
    isInteger = _type.isInteger,
    isString = _type.isString,
    isFunction = _type.isFunction,
    isObject = _type.isObject,
    isObjectType = _type.isObjectType,
    isArray = _type.isArray,
    isDate = _type.isDate,
    isRegExp = _type.isRegExp,
    isException = _type.isException,
    isNotUndefined = _type.isNotUndefined,
    isNotNull = _type.isNotNull,
    isNotNaNStrict = _type.isNotNaNStrict,
    isNotBoolean = _type.isNotBoolean,
    isNotNumber = _type.isNotNumber,
    isNotInteger = _type.isNotInteger,
    isNotString = _type.isNotString,
    isNotFunction = _type.isNotFunction,
    isNotObject = _type.isNotObject,
    isNotObjectType = _type.isNotObjectType,
    isNotArray = _type.isNotArray,
    isNotDate = _type.isNotDate,
    isNotRegExp = _type.isNotRegExp,
    isNotException = _type.isNotException,
    isUndefinedArray = _type.isUndefinedArray,
    isNullArray = _type.isNullArray,
    isNaNStrictArray = _type.isNaNStrictArray,
    isBooleanArray = _type.isBooleanArray,
    isNumberArray = _type.isNumberArray,
    isIntegerArray = _type.isIntegerArray,
    isStringArray = _type.isStringArray,
    isFunctionArray = _type.isFunctionArray,
    isObjectArray = _type.isObjectArray,
    isObjectTypeArray = _type.isObjectTypeArray,
    isArrayArray = _type.isArrayArray,
    isDateArray = _type.isDateArray,
    isRegExpArray = _type.isRegExpArray,
    isExceptionArray = _type.isExceptionArray,
    isNotUndefinedArray = _type.isNotUndefinedArray,
    isNotNullArray = _type.isNotNullArray,
    isNotNaNStrictArray = _type.isNotNaNStrictArray,
    isNotBooleanArray = _type.isNotBooleanArray,
    isNotNumberArray = _type.isNotNumberArray,
    isNotIntegerArray = _type.isNotIntegerArray,
    isNotStringArray = _type.isNotStringArray,
    isNotFunctionArray = _type.isNotFunctionArray,
    isNotObjectArray = _type.isNotObjectArray,
    isNotObjectTypeArray = _type.isNotObjectTypeArray,
    isNotArrayArray = _type.isNotArrayArray,
    isNotDateArray = _type.isNotDateArray,
    isNotRegExpArray = _type.isNotRegExpArray,
    isNotExceptionArray = _type.isNotExceptionArray,
    isUndef = _type.isUndef,
    isBool = _type.isBool,
    isNum = _type.isNum,
    isInt = _type.isInt,
    isStr = _type.isStr,
    isFunc = _type.isFunc,
    isObj = _type.isObj,
    isObjType = _type.isObjType,
    isExcept = _type.isExcept,
    isNotUndef = _type.isNotUndef,
    isNotBool = _type.isNotBool,
    isNotNum = _type.isNotNum,
    isNotInt = _type.isNotInt,
    isNotStr = _type.isNotStr,
    isNotFunc = _type.isNotFunc,
    isNotObj = _type.isNotObj,
    isNotObjType = _type.isNotObjType,
    isNotExcept = _type.isNotExcept;
var checkEqual = _test.checkEqual,
    isThrown = _test.isThrown,
    isThrownValue = _test.isThrownValue,
    isThrownException = _test.isThrownException,
    isNotThrown = _test.isNotThrown;
var assert = _syntax.assert,
    guard = _syntax.guard,
    sc = _syntax.sc,
    if_ = _syntax.if_,
    switch_ = _syntax.switch_;
var equal = _compare.equal,
    or = _compare.or,
    match = _compare.match,
    matchValue = _compare.matchValue,
    initialValue = _compare.initialValue;
var numberToString = _convert.numberToString,
    stringToNumber = _convert.stringToNumber,
    stringToInteger = _convert.stringToInteger,
    numToString = _convert.numToString,
    strToNumber = _convert.strToNumber,
    strToInteger = _convert.strToInteger,
    numToStr = _convert.numToStr,
    strToNum = _convert.strToNum,
    strToInt = _convert.strToInt;
var matchFormat = _string.matchFormat,
    includes = _string.includes;
var copyProperty = _object.copyProperty,
    inProperty = _object.inProperty,
    propertyCount = _object.propertyCount,
    copyProp = _object.copyProp,
    inProp = _object.inProp,
    propCount = _object.propCount;
module.exports = {
  VERSION: VERSION,
  type: type,
  test: test,
  syntax: syntax,
  compare: compare,
  convert: convert,
  string: string,
  consoleHook: consoleHook,
  object: object,
  // type
  isUndefined: isUndefined,
  isNull: isNull,
  isNaNStrict: isNaNStrict,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isInteger: isInteger,
  isString: isString,
  isFunction: isFunction,
  isObject: isObject,
  isObjectType: isObjectType,
  isArray: isArray,
  isDate: isDate,
  isRegExp: isRegExp,
  isException: isException,
  isNotUndefined: isNotUndefined,
  isNotNull: isNotNull,
  isNotNaNStrict: isNotNaNStrict,
  isNotBoolean: isNotBoolean,
  isNotNumber: isNotNumber,
  isNotInteger: isNotInteger,
  isNotString: isNotString,
  isNotFunction: isNotFunction,
  isNotObject: isNotObject,
  isNotObjectType: isNotObjectType,
  isNotArray: isNotArray,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotException: isNotException,
  isUndefinedArray: isUndefinedArray,
  isNullArray: isNullArray,
  isNaNStrictArray: isNaNStrictArray,
  isBooleanArray: isBooleanArray,
  isNumberArray: isNumberArray,
  isIntegerArray: isIntegerArray,
  isStringArray: isStringArray,
  isFunctionArray: isFunctionArray,
  isObjectArray: isObjectArray,
  isObjectTypeArray: isObjectTypeArray,
  isArrayArray: isArrayArray,
  isDateArray: isDateArray,
  isRegExpArray: isRegExpArray,
  isExceptionArray: isExceptionArray,
  isNotUndefinedArray: isNotUndefinedArray,
  isNotNullArray: isNotNullArray,
  isNotNaNStrictArray: isNotNaNStrictArray,
  isNotBooleanArray: isNotBooleanArray,
  isNotNumberArray: isNotNumberArray,
  isNotIntegerArray: isNotIntegerArray,
  isNotStringArray: isNotStringArray,
  isNotFunctionArray: isNotFunctionArray,
  isNotObjectArray: isNotObjectArray,
  isNotObjectTypeArray: isNotObjectTypeArray,
  isNotArrayArray: isNotArrayArray,
  isNotDateArray: isNotDateArray,
  isNotRegExpArray: isNotRegExpArray,
  isNotExceptionArray: isNotExceptionArray,
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjType: isObjType,
  isExcept: isExcept,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjType: isNotObjType,
  isNotExcept: isNotExcept,
  // test
  checkEqual: checkEqual,
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown,
  // syntax
  assert: assert,
  guard: guard,
  sc: sc,
  if_: if_,
  switch_: switch_,
  // compare
  equal: equal,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  // convert
  numberToString: numberToString,
  stringToNumber: stringToNumber,
  stringToInteger: stringToInteger,
  numToString: numToString,
  strToNumber: strToNumber,
  strToInteger: strToInteger,
  numToStr: numToStr,
  strToNum: strToNum,
  strToInt: strToInt,
  // string
  matchFormat: matchFormat,
  includes: includes,
  // object
  copyProperty: copyProperty,
  inProperty: inProperty,
  propertyCount: propertyCount,
  copyProp: copyProp,
  inProp: inProp,
  propCount: propCount
};