const type = require('./type.js');
const test = require('./test.js');

const VERSION = '0.4.1';

const test_babel_transpile = () => {
  const array = [1, 2, 3];
  return array.map(n => n ** 2);
};

module.exports = {
  VERSION,
  test_babel_transpile,
  type,
  test,
};

