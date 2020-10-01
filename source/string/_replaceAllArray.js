import { _indexOfAnyFirst } from '../string/_indexOfAnyFirst.js';
import { _subIndex, _subLength } from '../string/string_common.js';
import { _map } from '../array/array_common.js';

/**
 * replaceAllArray
 */
export const _replaceAllArray = function(str, replaceArray) {
  const searchArray = _map(replaceArray, element => element[0]);
  let start = 0;
  let result = '';
  while (true) {
    const searchResult = _indexOfAnyFirst(str, searchArray, start);
    if (searchResult.index === -1) {
      result += _subLength(str, start);
      break;
    }

    if (start < searchResult.index) {
      result += _subIndex(str, start, searchResult.index - 1);
      start = searchResult.index;
    }
    result += replaceArray[searchResult.searchIndex][1];
    start += searchArray[searchResult.searchIndex].length;
  }
  return result;
};

export default {
  _replaceAllArray,
};
