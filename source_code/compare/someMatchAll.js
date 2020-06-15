const {
  _indexOfMatchAll, indexOfMatchAll,
} = require('../compare/indexOfMatchAll.js');

/**
 * someMatchAll
 */
const _someMatchAll = (
  valueArray,
  compareArray,
) => {
  return _indexOfMatchAll(
    valueArray,
    compareArray,
  ) !== -1;
};

const someMatchAll = (
  valueArray,
  compareArray,
) => {
  return indexOfMatchAll(
    valueArray,
    compareArray,
  ) !== -1;
};

module.exports = {
  _someMatchAll,
  someMatchAll,
};
