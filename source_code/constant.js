// type
const _TYPE_BASE =
  'Undefined,Null,NaNStrict,' +
  'Boolean,Number,Integer,String,' +
  'Symbol,' +
  'Function,Object,ObjectType,' +
  'Array,Date,RegExp,' +
  'Exception,' +
  'BooleanObject,NumberObject,StringObject,'
  '';

const IS_TYPE           = _TYPE_BASE.split(',').map(item => `is${item}`).join(',');
const ISNOT_TYPE        = _TYPE_BASE.split(',').map(item => `isNot${item}`).join(',');
const IS_TYPE_ARRAY     = _TYPE_BASE.split(',').map(item => `is${item}Array`).join(',');
const ISNOT_TYPE_ARRAY  = _TYPE_BASE.split(',').map(item => `isNot${item}Array`).join(',');

const _TYPE_BASE_SHORT =
  'Bool,Num,Int,Str,' +
  'Func,Obj,ObjType,' +
  'Except,' +
  '';
const IS_TYPE_SHORT     = _TYPE_BASE_SHORT.split(',').map(item => `is${item}`).join(',');
const ISNOT_TYPE_SHORT  = _TYPE_BASE_SHORT.split(',').map(item => `isNot${item}`).join(',');
const TYPE = [
  IS_TYPE, ISNOT_TYPE, IS_TYPE_ARRAY, ISNOT_TYPE_ARRAY,
  IS_TYPE_SHORT, ISNOT_TYPE_SHORT,
].join(',');

// test
const ROOT =
  'clone, cloneDeep,' +
  'cloneFunction,' +
  '';

// test
const TEST =
  'checkEqual,' +
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  '';

// syntax
const SYNTAX =
  'assert,guard,' +
  'sc,if_,switch_,' +
  '';

// compare
const COMPARE =
  'equal,or,' +
  'match,matchValue,initialValue,' +
  'isEmpty,' +
  '';

// convert
const CONVERT =
  'numberToString,' +
  'stringToNumber,stringToInteger,' +

  'numToString,' +
  'strToNumber,strToInteger,' +

  'numToStr,' +
  'strToNum,strToInt,' +
  ''

// number
const NUMBER =
  'isMultiples,isEven,isOdd,' +
  'round,nearEqual,inRange,randomInt,' +
  ''

// string
const STRING_PUBLIC =
  'matchFormat,includes,replaceAll,' +
  ''
const STRING_ROOT =
  'matchFormat,replaceAll,' +
  ''

// object
const OBJECT_PUBLIC =
  'copyProperty,propertyCount,inProperty,' +
  'copyProp,propCount,inProp,' +
  ''
const OBJECT_ROOT =
  'copyProperty,propertyCount,inProperty,' +
  'copyProp,propCount,inProp,' +
  ''

// array
const ARRAY_PUBLIC =
  'equal,' +
  'min, max,' +
  ''
const ARRAY_ROOT =
  'min, max,' +
  ''


// consoleHook
const _CONSOLE_HOOK_BASE =
  ',Log,Info,Warn,Error,Debug';
const CONSOLE_HOOK =
  _CONSOLE_HOOK_BASE.split(',').map(item => `hook${item}`).join(',') + ',' +
  _CONSOLE_HOOK_BASE.split(',').map(item => `unHook${item}`).join(',') + ',' +
  _CONSOLE_HOOK_BASE.split(',').map(item => `accept${item}`).join(',') + ',' +
  ''

const propertyNames = {
  ROOT,
  TYPE,
  TEST,
  SYNTAX,
  COMPARE,
  CONVERT,
  NUMBER,
  STRING_PUBLIC,
  STRING_ROOT,
  OBJECT_PUBLIC,
  OBJECT_ROOT,
  ARRAY_PUBLIC,
  ARRAY_ROOT,
  CONSOLE_HOOK,
};

module.exports = {
  propertyNames,
};
