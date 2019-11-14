const polyfill = require('./polyfill.js');
const _root = require('./root/root.js');
const _type = require('./type/type.js');
const _test = require('./test/test.js');
const _syntax = require('./syntax/syntax.js');
const _compare = require('./compare/compare.js');
const _convert = require('./convert/convert.js');
const _number = require('./number/number.js');
const _string = require('./string/string.js');
const _object = require('./object/object.js');
const _array = require('./array/array.js');
const _consoleHook = require('./consoleHook/consoleHook.js');

const VERSION = '2.12.0 beta';

const rootNames = {};
const propertyNames = {};

const { _copyProperty } = _object;
const { _replaceAll } = _string;

// root
propertyNames.ROOT =
  'clone, cloneDeep,' +
  'cloneFunction,' +
  '';
const root = _copyProperty(_root, propertyNames.ROOT);
_copyProperty(_root, propertyNames.ROOT, rootNames);

// type
propertyNames._TYPE_BASE =
  'Undefined,Null,NaNStrict,' +
  'Boolean,Number,Integer,String,' +
  'Function,Object,ObjectType,' +
  'Array,ArrayType,' +
  'Date,RegExp,' +
  'Exception,' +
  'Symbol,' +
  'Map,WeakMap,Set,WeakSet,' +
  'BooleanObject,NumberObject,StringObject,' +
  'Bool,Num,Int,Str,' +
  'Func,Obj,ObjType,' +
  'Except,' +
  '';
const isPrefixAdd = (prefix, commaString) =>
  _replaceAll(commaString, ' ', '').split(',')
  .map(item => prefix + item).join(',');
propertyNames.TYPE = [
  isPrefixAdd('is', propertyNames._TYPE_BASE),
  isPrefixAdd('isNot', propertyNames._TYPE_BASE)
].join(',')
const type = _copyProperty(_type, propertyNames.TYPE);
_copyProperty(_type, propertyNames.TYPE, rootNames);

// test
propertyNames.TEST =
  'checkEqual,' +
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  '';
const test = _copyProperty(_test, propertyNames.TEST);
_copyProperty(_test, propertyNames.TEST, rootNames);

// syntax
propertyNames.SYNTAX =
  'assert,guard,' +
  'sc,if_,switch_,' +
  '';
const syntax = _copyProperty(_syntax, propertyNames.SYNTAX);
_copyProperty(_syntax, propertyNames.SYNTAX, rootNames);

// compare
propertyNames.COMPARE =
  'equal, equalDeep,' +
  'equalFunction,' +
  'or,' +
  'match,matchValue,initialValue,' +
  'matchAll,matchSomeIndex,matchSome,' +
  'matchEvery,matchAnyIndex,matchAny,' +
  'isEmpty,' +
  '';
const compare = _copyProperty(_compare, propertyNames.COMPARE);
_copyProperty(_compare, propertyNames.COMPARE, rootNames);

// convert
propertyNames.CONVERT =
  'numberToString,' +
  'stringToNumber,stringToNumberDefault,' +
  'stringToInteger,stringToIntegerDefault,' +
  'toNumber, toNumberDefault,' +
  'toInteger, toIntegerDefault,' +

  'numToString,' +
  'strToNumber,strToNumberDef,' +
  'strToInteger,strToIntegerDef,' +
  'toNum, toNumDef,' +
  'toInt, toIntDef,' +

  'numToStr,' +
  'strToNum,strToNumDef,' +
  'strToInt,strToIntDef,' +
  ''
const convert = _copyProperty(_convert,
  propertyNames.CONVERT
);
_copyProperty(_convert, propertyNames.CONVERT, rootNames);

// number
propertyNames.NUMBER =
  'isMultiples,isEven,isOdd,' +
  'round,nearEqual,inRange,randomInt,' +
  ''
const number = _copyProperty(_number, propertyNames.NUMBER);
_copyProperty(_number, propertyNames.NUMBER, rootNames);

// string
propertyNames.STRING_PUBLIC =
  'matchFormat,includes,replaceAll,' +
  ''
propertyNames.STRING_ROOT =
  'matchFormat,replaceAll,' +
  ''
const string = _copyProperty(_string, propertyNames.STRING_PUBLIC);
_copyProperty(_string, propertyNames.STRING_ROOT, rootNames);

// object
propertyNames.OBJECT_PUBLIC =
  'copyProperty,propertyCount,inProperty,' +
  'getProperty,setProperty,' +
  'copyProp,propCount,inProp,' +
  ''
propertyNames.OBJECT_ROOT =
  'copyProperty,propertyCount,inProperty,' +
  'getProp,setProp,' +
  'copyProp,propCount,inProp,' +
  ''
const object = _copyProperty(_object, propertyNames.OBJECT_PUBLIC);
_copyProperty(_object, propertyNames.OBJECT_ROOT, rootNames);
object.objectToString = _type.objectToString;
rootNames.objectToString = _type.objectToString;

// array
propertyNames.ARRAY_PUBLIC =
  'equal,' +
  'min, max,' +
  ''
propertyNames.ARRAY_ROOT =
  'min, max,' +
  ''
const array = _copyProperty(_array, propertyNames.ARRAY_PUBLIC);
_copyProperty(_array, propertyNames.ARRAY_ROOT, rootNames);

// consoleHook
propertyNames._CONSOLE_HOOK_BASE =
  ',Log,Info,Warn,Error,Debug';
propertyNames.CONSOLE_HOOK = [
  isPrefixAdd('hook', propertyNames._CONSOLE_HOOK_BASE),
  isPrefixAdd('unHook', propertyNames._CONSOLE_HOOK_BASE),
  isPrefixAdd('accept', propertyNames._CONSOLE_HOOK_BASE),
].join(',')
const consoleHook = _copyProperty(_consoleHook, propertyNames.CONSOLE_HOOK);

module.exports = {
  VERSION,
  platform: {},
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

