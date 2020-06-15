const {
  _indexOfMatch, indexOfMatch,
} = require('../compare/indexOfMatch.js');

/**
 * someMatch
 */
const _someMatch = (
  valueArray,
  compare,
) => {
  return _indexOfMatch(
    valueArray,
    compare,
  ) !== -1;
};

const someMatch = (
  valueArray,
  compare,
) => {
  return indexOfMatch(
    valueArray,
    compare,
  ) !== -1;
};

module.exports = {
  _someMatch,
  someMatch,
};
