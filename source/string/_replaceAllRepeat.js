import { __includes } from '../compare/__includes.js';
import { _replaceAll } from '../string/_replaceAll.js';

/**
 * replaceAllRepeat
 */
export const _replaceAllRepeat = (
  str, before, after, maxCount = 0,
) => {
  let result = str;
  if (before === '') {
    return result;
  }
  if (maxCount <= 0) {
    maxCount = Infinity;
  }
  let count = 0;
  while (__includes(result, before)) {
    result = _replaceAll(result, before, after);
    count += 1;
    if (maxCount <= count) {
      break;
    }
  }
  return result;
};

export default {
  _replaceAllRepeat,
};
