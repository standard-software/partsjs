const polyfill = require('./polyfill.js');
const _type = require('./type.js');
const _test = require('./test.js');
const _syntax = require('./syntax.js');
const _compare = require('./compare.js');
const _convert = require('./convert.js');
const _string = require('./string.js');
const _consoleHook = require('./consoleHook.js');
const _object = require('./object.js');

const VERSION = '2.1.1';

// Public Property
const type = _object._copyProperty(_type,
  'isUndefined,isNull,isNaNStrict,' +
  'isBoolean,isNumber,isInteger,isString,' +
  'isFunction,isObject,isObjectType,' +
  'isArray,isDate,isRegExp,' +
  'isException,' +

  'isNotUndefined,isNotNull,isNotNaNStrict,' +
  'isNotBoolean,isNotNumber,isNotInteger,isNotString,' +
  'isNotFunction,isNotObject,isNotObjectType,' +
  'isNotArray,isNotDate,isNotRegExp,' +
  'isNotException,' +

  'isUndefinedArray,isNullArray,isNaNStrictArray,' +
  'isBooleanArray,isNumberArray,isIntegerArray,isStringArray,' +
  'isFunctionArray,isObjectArray,isObjectTypeArray,' +
  'isArrayArray,isDateArray,isRegExpArray,' +
  'isExceptionArray,' +

  'isNotUndefinedArray,isNotNullArray,isNotNaNStrictArray,' +
  'isNotBooleanArray,isNotNumberArray,isNotIntegerArray,isNotStringArray,' +
  'isNotFunctionArray,isNotObjectArray,isNotObjectTypeArray,' +
  'isNotArrayArray,isNotDateArray,isNotRegExpArray,' +
  'isNotExceptionArray,' +

  'isUndef,' +
  'isBool,isNum,isInt,isStr,' +
  'isFunc,isObj,isObjType,' +
  'isExcept,' +

  'isNotUndef,' +
  'isNotBool,isNotNum,isNotInt,isNotStr,' +
  'isNotFunc,isNotObj,isNotObjType,' +
  'isNotExcept,' +
  ''
);

const test = _object._copyProperty(_test,
  'checkEqual,' +
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  ''
);

const syntax = _object._copyProperty(_syntax,
  'assert,guard,' +
  'sc,if_,switch_,' +
  ''
);

const compare = _object._copyProperty(_compare,
  '_equal,_or,' +
  '_match,_matchValue,_initialValue,' +

  'equal,or,' +
  'match,matchValue,initialValue,' +
  'isEmpty,' +
  ''
);

const convert = _object._copyProperty(_convert,
  'numberToString,' +
  'stringToNumber,stringToInteger,' +

  'numToString,' +
  'strToNumber,strToInteger,' +

  'numToStr,' +
  'strToNum,strToInt,' +
  ''
);

const string = _object._copyProperty(_string,
  'matchFormat,includes,' +
  ''
);

const consoleHook = _object._copyProperty(_consoleHook,
  'hook,hookLog,hookInfo,hookWarn,hookError,hookDebug,' +
  'unHook,unHookLog,unHookInfo,unHookWarn,unHookError,unHookDebug,' +
  'accept,acceptLog,acceptInfo,acceptWarn,acceptError,acceptDebug,' +
  ''
);

const object = _object._copyProperty(_object,
  'copyProperty,inProperty,' +
  'propertyCount,' +
  ''
);

// Root Property
const {
  isUndefined,isNull,isNaNStrict,
  isBoolean,isNumber,isInteger,isString,
  isFunction,isObject,isObjectType,
  isArray,isDate,isRegExp,
  isException,

  isNotUndefined,isNotNull,isNotNaNStrict,
  isNotBoolean,isNotNumber,isNotInteger,isNotString,
  isNotFunction,isNotObject,isNotObjectType,
  isNotArray,isNotDate,isNotRegExp,
  isNotException,

  isUndefinedArray,isNullArray,isNaNStrictArray,
  isBooleanArray,isNumberArray,isIntegerArray,isStringArray,
  isFunctionArray,isObjectArray,isObjectTypeArray,
  isArrayArray,isDateArray,isRegExpArray,
  isExceptionArray,

  isNotUndefinedArray,isNotNullArray,isNotNaNStrictArray,
  isNotBooleanArray,isNotNumberArray,isNotIntegerArray,isNotStringArray,
  isNotFunctionArray,isNotObjectArray,isNotObjectTypeArray,
  isNotArrayArray,isNotDateArray,isNotRegExpArray,
  isNotExceptionArray,

  isUndef,
  isBool,isNum,isInt,isStr,
  isFunc,isObj,isObjType,
  isExcept,

  isNotUndef,
  isNotBool,isNotNum,isNotInt,isNotStr,
  isNotFunc,isNotObj,isNotObjType,
  isNotExcept,
} = _type;

const {
  checkEqual,
  isThrown,isThrownValue,isThrownException,isNotThrown,
} = _test;

const {
  assert,guard,
  sc,if_,switch_,
} = _syntax;

const {
  equal,or,
  match,matchValue,initialValue,
} = _compare;

const {
  numberToString,
  stringToNumber,stringToInteger,

  numToString,
  strToNumber,strToInteger,

  numToStr,
  strToNum,strToInt,
} = _convert;

const {
  matchFormat,includes,
} = _string;

const {
  copyProperty,inProperty,
  propertyCount,

  copyProp,inProp,
  propCount,
} = _object;

module.exports = {
  VERSION,
  type,
  test,
  syntax,
  compare,
  convert,
  string,
  consoleHook,
  object,

  // type
  isUndefined,isNull,isNaNStrict,
  isBoolean,isNumber,isInteger,isString,
  isFunction,isObject,isObjectType,
  isArray,isDate,isRegExp,
  isException,

  isNotUndefined,isNotNull,isNotNaNStrict,
  isNotBoolean,isNotNumber,isNotInteger,isNotString,
  isNotFunction,isNotObject,isNotObjectType,
  isNotArray,isNotDate,isNotRegExp,
  isNotException,

  isUndefinedArray,isNullArray,isNaNStrictArray,
  isBooleanArray,isNumberArray,isIntegerArray,isStringArray,
  isFunctionArray,isObjectArray,isObjectTypeArray,
  isArrayArray,isDateArray,isRegExpArray,
  isExceptionArray,

  isNotUndefinedArray,isNotNullArray,isNotNaNStrictArray,
  isNotBooleanArray,isNotNumberArray,isNotIntegerArray,isNotStringArray,
  isNotFunctionArray,isNotObjectArray,isNotObjectTypeArray,
  isNotArrayArray,isNotDateArray,isNotRegExpArray,
  isNotExceptionArray,

  isUndef,
  isBool,isNum,isInt,isStr,
  isFunc,isObj,isObjType,
  isExcept,

  isNotUndef,
  isNotBool,isNotNum,isNotInt,isNotStr,
  isNotFunc,isNotObj,isNotObjType,
  isNotExcept,

  // test
  checkEqual,
  isThrown,isThrownValue,isThrownException,isNotThrown,

  // syntax
  assert,guard,
  sc,if_,switch_,

  // compare
  equal,or,
  match,matchValue,initialValue,

  // convert
  numberToString,
  stringToNumber,stringToInteger,

  numToString,
  strToNumber,strToInteger,

  numToStr,
  strToNum,strToInt,

  // string
  matchFormat,includes,

  // object
  copyProperty,inProperty,
  propertyCount,

  copyProp,inProp,
  propCount,

};

