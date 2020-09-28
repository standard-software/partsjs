import { _indexOfLast } from '../string/_indexOfLast.js';
import { __loop } from '../syntax/__loop.js';

export const _indexOfAnyLast = (
  str, searchArray, indexStart = _max([0, str.length - 1]),
) => {
  let result = -1;
  let searchIndex = -1;
  __loop(searchArray)((search, index) => {
    const findIndex = _indexOfLast(str, search, indexStart);
    if (findIndex !== -1) {
      if (result < findIndex) {
        result = findIndex;
        searchIndex = index;
      }
    }
  });

  if (result === -1) {
    return {
      index: -1,
      searchIndex: -1,
    };
  }
  return {
    index: result,
    searchIndex,
  };
};

export default {
  _indexOfAnyLast,
};
