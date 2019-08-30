const parts = {};

parts.VERSION = '0.2.1';

parts.test_babel = () => {
  const array = [1, 2, 3];
  console.log(array.map(n => n ** 2));
};

module.exports = parts;

