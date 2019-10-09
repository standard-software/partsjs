const polyfill = require('./polyfill.js');
const _constant = require('./constant.js');
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

const VERSION = '2.4.0';

let rootNames = {};

// type
const type = _object._copyProperty(_type,
  _constant.propertyNames.TYPE
);
rootNames = { ...rootNames, ...type };

// test
const test = _object._copyProperty(_test,
  _constant.propertyNames.TEST
);
rootNames = { ...rootNames, ...test };

// syntax
const syntax = _object._copyProperty(_syntax,
  _constant.propertyNames.SYNTAX
);
rootNames = { ...rootNames, ...syntax };

// compare
const compare = _object._copyProperty(_compare,
  _constant.propertyNames.COMPARE
);
rootNames = { ...rootNames, ...compare };

// convert
const convert = _object._copyProperty(_convert,
  _constant.propertyNames.CONVERT
);
rootNames = { ...rootNames, ...convert };

// number
const number = _object._copyProperty(_number,
  _constant.propertyNames.NUMBER
);
_object._copyProperty(_number,
  _constant.propertyNames.NUMBER,
  rootNames
);

// string
const string = _object._copyProperty(_string,
  _constant.propertyNames.STRING_PUBLIC
);
_object._copyProperty(_string,
  _constant.propertyNames.STRING_ROOT,
  rootNames
);

// object
const object = _object._copyProperty(_object,
  _constant.propertyNames.OBJECT_PUBLIC
);
_object._copyProperty(_object,
  _constant.propertyNames.OBJECT_ROOT,
  rootNames
);

// array
const array = _object._copyProperty(_array,
  _constant.propertyNames.ARRAY_PUBLIC
);
_object._copyProperty(_array,
  _constant.propertyNames.ARRAY_ROOT,
  rootNames
);

// consoleHook
const consoleHook = _object._copyProperty(_consoleHook,
  _constant.propertyNames.CONSOLE_HOOK
);

module.exports = {
  VERSION,
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

  ...rootNames,
};

