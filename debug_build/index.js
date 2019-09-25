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

var VERSION = '2.0.0 beta'; // Public Property

var type = _object._copyProperty(_type, 'isUndefined,isNull,isNaNStrict,' + 'isBoolean,isNumber,isInteger,isString,' + 'isFunction,isObject,isArray,isDate,isRegExp,' + 'isException,' + 'isNotUndefined,isNotNull,isNotNaNStrict,' + 'isNotBoolean,isNotNumber,isNotInteger,isNotString,' + 'isNotFunction,isNotObject,isNotArray,isNotDate,isNotRegExp,' + 'isNotException,' + 'isUndefinedArray,isNullArray,isNaNStrictArray,' + 'isBooleanArray,isNumberArray,isIntegerArray,isStringArray,' + 'isFunctionArray,isObjectArray,isArrayArray,isDateArray,isRegExpArray,' + 'isExceptionArray,' + 'isNotUndefinedArray,isNotNullArray,isNotNaNStrictArray,' + 'isNotBooleanArray,isNotNumberArray,isNotIntegerArray,isNotStringArray,' + 'isNotFunctionArray,isNotObjectArray,isNotArrayArray,isNotDateArray,isNotRegExpArray,' + 'isNotExceptionArray,');

var test = _object._copyProperty(_test, 'checkEqual,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,');

var syntax = _object._copyProperty(_syntax, 'assert,guard,' + 'sc,if_,switch_,');

var compare = _object._copyProperty(_compare, '_equal,equal,_or,or,' + '_match,match,matchValue,matchValue,_initialValue,initialValue,');

var convert = _object._copyProperty(_convert, 'numberToString,' + 'stringToNumber,stringToInteger,');

var string = _object._copyProperty(_string, 'matchFormat,includes,');

var consoleHook = _object._copyProperty(_consoleHook, 'hook,hookLog,hookInfo,hookWarn,hookError,hookDebug,' + 'unHook,unHookLog,unHookInfo,unHookWarn,unHookError,unHookDebug,' + 'accept,acceptLog,acceptInfo,acceptWarn,acceptError,acceptDebug,');

var object = _object._copyProperty(_object, 'copyProperty,'); // Root Property


var isUndefined = _type.isUndefined,
    isNull = _type.isNull,
    isNaNStrict = _type.isNaNStrict,
    isBoolean = _type.isBoolean,
    isNumber = _type.isNumber,
    isInteger = _type.isInteger,
    isString = _type.isString,
    isFunction = _type.isFunction,
    isObject = _type.isObject,
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
    isNotArrayArray = _type.isNotArrayArray,
    isNotDateArray = _type.isNotDateArray,
    isNotRegExpArray = _type.isNotRegExpArray,
    isNotExceptionArray = _type.isNotExceptionArray;
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
    stringToInteger = _convert.stringToInteger;
var matchFormat = _string.matchFormat,
    includes = _string.includes;
var copyProperty = _object.copyProperty;
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
  isNotArrayArray: isNotArrayArray,
  isNotDateArray: isNotDateArray,
  isNotRegExpArray: isNotRegExpArray,
  isNotExceptionArray: isNotExceptionArray,
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
  // string
  matchFormat: matchFormat,
  includes: includes,
  // object
  copyProperty: copyProperty
};