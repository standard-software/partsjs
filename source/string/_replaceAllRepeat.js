import { __includes } from '../compare/__includes.js';
import { _replaceAll } from '../string/_replaceAll.js';

/**
 * replaceAllRepeat
 */
export const _replaceAllRepeat = (str, before, after) => {
  let result = str;
  if (before === '') {
    return result;
  }
  while (__includes(result, before)) {
    result = _replaceAll(result, before, after);
  }
  return result;
};

export default {
  _replaceAllRepeat,
};
