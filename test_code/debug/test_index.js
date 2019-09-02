const parts = require('../../debug_build/index.js');

const {
  test_execute_type,
} = require('../../source_code/type.test.js');

console.log('test start', parts.VERSION);
test_execute_type(parts);
console.log('test finish.');
