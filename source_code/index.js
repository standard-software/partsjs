const polyfill = require('./polyfill.js');
const _type = require('./type/type.js');
const _test = require('./test/test.js');
const _syntax = require('./syntax/syntax.js');
const _compare = require('./compare/compare.js');
const _convert = require('./convert/convert.js');
const _string = require('./string/string.js');
const _consoleHook = require('./consoleHook/consoleHook.js');
const _object = require('./object/object.js');

const VERSION = '2.2.0 beta';

let rootNames = {};

// name space type
const typePropertyBaseNames =
  'Undefined,Null,NaNStrict,' +
  'Boolean,Number,Integer,String,' +
  'Function,Object,ObjectType,' +
  'Array,Date,RegExp,' +
  'Exception,' +
  '';
const type = {};
_object._copyProperty(_type,
  typePropertyBaseNames.split(',').map(item => `is${item}`).join(',') + ',' +
  typePropertyBaseNames.split(',').map(item => `isNot${item}`).join(',') + ',' +
  typePropertyBaseNames.split(',').map(item => `is${item}Array`).join(',') + ',' +
  typePropertyBaseNames.split(',').map(item => `isNot${item}Array`).join(',') + ',' +
  '', type
);

const typePropertyBaseShortNames =
  'Bool,Num,Int,Str,' +
  'Func,Obj,ObjType,' +
  'Except,' +
  '';
_object._copyProperty(_type,
  typePropertyBaseShortNames.split(',').map(item => 'is' + item).join(',') + ',' +
  typePropertyBaseShortNames.split(',').map(item => 'isNot' + item).join(',') + ',' +
  '', type
);

rootNames = { ...rootNames, ...type };

// name space test
const test = _object._copyProperty(_test,
  'checkEqual,' +
  'isThrown,isThrownValue,isThrownException,isNotThrown,' +
  ''
);

rootNames = { ...rootNames, ...test };

// name space syntax
const syntax = _object._copyProperty(_syntax,
  'assert,guard,' +
  'sc,if_,switch_,' +
  ''
);

rootNames = { ...rootNames, ...syntax };

// name space compare
const compare = _object._copyProperty(_compare,
  'equal,or,' +
  'match,matchValue,initialValue,' +
  'isEmpty,' +
  ''
);

rootNames = { ...rootNames, ...compare };

// name space convert
const convert = _object._copyProperty(_convert,
  'numberToString,' +
  'stringToNumber,stringToInteger,' +

  'numToString,' +
  'strToNumber,strToInteger,' +

  'numToStr,' +
  'strToNum,strToInt,' +
  ''
);

rootNames = { ...rootNames, ...convert };

// name space string
const string = _object._copyProperty(_string,
  'matchFormat,includes,' +
  ''
);

rootNames = { ...rootNames, matchFormat: string.matchFormat };

// name space consoleHook
const consoleHook = _object._copyProperty(_consoleHook,
  'hook,hookLog,hookInfo,hookWarn,hookError,hookDebug,' +
  'unHook,unHookLog,unHookInfo,unHookWarn,unHookError,unHookDebug,' +
  'accept,acceptLog,acceptInfo,acceptWarn,acceptError,acceptDebug,' +
  ''
);

// name space object
const object = _object._copyProperty(_object,
  'copyProperty,propertyCount,inProperty,' +
  'copyProp,propCount,inProp,' +
  ''
);

rootNames = { ...rootNames, ...object };


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

  ...rootNames,
};

