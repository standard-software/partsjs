import {
  _indexOfMatchAll, indexOfMatchAll,
} from '../compare/indexOfMatchAll.js';

/**
 * someMatchAll
 */
export const _someMatchAll = (
  valueArray,
  compareArray,
) => {
  return _indexOfMatchAll(
    valueArray,
    compareArray,
  ) !== -1;
};

export const someMatchAll = (
  valueArray,
  compareArray,
) => {
  return indexOfMatchAll(
    valueArray,
    compareArray,
  ) !== -1;
};

export default {
  _someMatchAll,
  someMatchAll,
};
