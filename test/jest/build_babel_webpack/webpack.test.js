const { parts } = require('../../../build/babel_webpack/webpack/parts.js');

const {
  test_execute_index,
} = require('../../../build/babel_webpack/babel/index.test.js');

parts.test.checkEqual = (a, b) => {
  const { isInvalidDate } = parts.date;
  if (isInvalidDate(a) && isInvalidDate(b)) {
    expect(true).toBe(true);
  } else {
    expect(a).toEqual(b);
  }
  // jest expect().toEqual is deep equal
};
parts.test.it = it;
parts.test.describe = describe;
parts.test.expect = expect;

parts.system.consoleHook.hook('log');

test_execute_index(parts);


