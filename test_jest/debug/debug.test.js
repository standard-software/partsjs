const parts = require('../../debug_build/index.js');

const {
  test_execute_index,
} = require('../../source_code/index.test.js');

parts.test.checkEqual = (a, b) => {
  expect(a).toEqual(b);
  // jest expect().toEqual is deep equal
};
parts.test.it = it;
parts.test.describe = describe;
parts.test.expect = expect;

parts.consoleHook.hook('log');

test_execute_index(parts);


