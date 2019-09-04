const test_execute_index = (parts) => {

  const { test_execute_type } = require('./type.test.js');
  const { test_execute_syntax } = require('./syntax.test.js');
  const { test_execute_test } = require('./test.test.js');

  console.log('test start. ' + parts.VERSION);
  test_execute_type(parts);
  test_execute_syntax(parts);
  test_execute_test(parts);
  console.log('test finish.');
}

module.exports = {
  test_execute_index,
};