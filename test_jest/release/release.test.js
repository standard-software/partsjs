const parts = require('../../release_build/parts.js');

const {
  test_execute_index,
} = require('../../source_code/index.test.js');

parts.test.checkEqual = (a, b) => {
  expect(a).toBe(b);
};
parts.test.it = it;
parts.test.describe = describe;

parts.consoleHook.hook('log');

test_execute_index(parts);


