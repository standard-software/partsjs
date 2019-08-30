const parts = require('../../release_build/parts.js');

const {
  test_isUndefined,
  test_isNull,
  test_isBoolean,
  test_isNumber,
  test_isInteger,
  test_isString,
  test_isObject,
  test_isArray,
  test_isDate,
  test_isExcection,
} = require('./test_type.js');

console.log('test start', parts.VERSION);
test_isUndefined();
test_isNull();
test_isBoolean();
test_isNumber();
test_isInteger();
test_isString();
test_isObject();
test_isArray();
test_isDate();
test_isExcection();
console.log('test finish.');
