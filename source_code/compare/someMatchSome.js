import {
  _indexOfMatchSome, indexOfMatchSome,
} from '../compare/indexOfMatchSome.js';

/**
 * someMatchSome
 */
export const _someMatchSome = (
  valueArray,
  compareArray,
) => {
  return _indexOfMatchSome(
    valueArray,
    compareArray,
  ) !== -1;
};

export const someMatchSome = (
  valueArray,
  compareArray,
) => {
  return indexOfMatchSome(
    valueArray,
    compareArray,
  ) !== -1;
};

export default {
  _someMatchSome,
  someMatchSome,
}
