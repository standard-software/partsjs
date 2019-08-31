const parts = require('../../source_code/index.js');

const {
  test_execute_type,
} = require('../test_type.js');

console.log('test start', parts.VERSION);
test_execute_type(parts);
console.log('test finish.');
