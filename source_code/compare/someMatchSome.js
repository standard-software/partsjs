const {
  _indexOfMatchSome, indexOfMatchSome,
} = require('../compare/indexOfMatchSome.js');

/**
 * someMatchSome
 */
const _someMatchSome = (
  valueArray,
  compareArray,
) => {
  return _indexOfMatchSome(
    valueArray,
    compareArray,
  ) !== -1;
};

const someMatchSome = (
  valueArray,
  compareArray,
) => {
  return indexOfMatchSome(
    valueArray,
    compareArray,
  ) !== -1;
};

module.exports = {
  _someMatchSome,
  someMatchSome,
};
