const type = require('./type.js');
const test = require('./test.js');
const syntax = require('./syntax.js')

const VERSION = '0.6.1 beta';

const test_babel_transpile = () => {
  const array = [1, 2, 3];
  return array.map(n => n ** 2);
};

module.exports = {
  VERSION,
  test_babel_transpile,
  type,
  test,
  syntax,
};

