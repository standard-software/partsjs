const parts = require('../../release_build/parts.js');

const {
  test_execute_type,
} = require('../../source_code/type.test.js');

console.log('test start', parts.VERSION);
test_execute_type(parts);
console.log('test finish.');
