import {
  _indexOfMatch, indexOfMatch,
} from '../compare/indexOfMatch.js';

/**
 * someMatch
 */
export const _someMatch = (
  valueArray,
  compare,
) => {
  return _indexOfMatch(
    valueArray,
    compare,
  ) !== -1;
};

export const someMatch = (
  valueArray,
  compare,
) => {
  return indexOfMatch(
    valueArray,
    compare,
  ) !== -1;
};

export default {
  _someMatch,
  someMatch,
}
