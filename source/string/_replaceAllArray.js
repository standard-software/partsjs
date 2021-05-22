import { _indexOfAnyFirst } from '../string/_indexOfAnyFirst.js';
import { _subIndex, _subLength } from '../string/string_common.js';
import { _map } from '../array/_map.js';

/**
 * replaceAllArray
 */
export const _replaceAllArray = function(str, replaceArray, detail = false) {
  const searchArray = _map(replaceArray, element => element[0]);
  let start = 0;
  let result = '';
  const replaceInfo = [];
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
    replaceInfo.push({
      index: searchResult.index,
      searchIndex: searchResult.searchIndex,
    });
    start += searchArray[searchResult.searchIndex].length;
  }
  if (detail) {
    return {
      result,
      replaceInfo,
    };
  }
  return result;
};

export default {
  _replaceAllArray,
};
