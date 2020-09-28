import { _indexOfFirst } from '../string/_indexOfFirst.js';
import { __loop } from '../syntax/__loop.js';

export const _indexOfAnyFirst = (
  str, searchArray, indexStart = 0,
) => {
  let result = Infinity;
  let searchIndex = -1;
  __loop(searchArray)((search, index) => {
    const findIndex = _indexOfFirst(str, search, indexStart);
    if (findIndex !== -1) {
      if (findIndex < result) {
        result = findIndex;
        searchIndex = index;
      }
    }
  });

  if (result === Infinity) {
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
  _indexOfAnyFirst,
};
