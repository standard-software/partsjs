const type = require('./type.js');

const VERSION = '0.2.2';

const test_babel = () => {
  const array = [1, 2, 3];
  return array.map(n => n ** 2);
};

module.exports = {
  VERSION,
  test_babel,
  type,
};

