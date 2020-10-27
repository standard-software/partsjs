import { _repeat, _subFirst } from '../string/string_common.js';

/**
 * paddingLast
 */
export const _paddingLast = (str, length, fill) => {
  if (length <= str.length) {
    return str;
  }
  const result = str + _repeat(fill, length);
  return _subFirst(result, length);
};

export default {
  _paddingLast,
};
