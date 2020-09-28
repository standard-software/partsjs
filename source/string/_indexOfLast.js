import {
  _max,
} from '../array/array.js';

/**
 * indexOfLast
 */
export const _indexOfLast = (
  str, search, indexStart = _max([0, str.length - 1]),
) => {
  if (search === '') {
    return -1;
  }
  return str.lastIndexOf(search, indexStart);
};

export default {
  _indexOfLast,
};
