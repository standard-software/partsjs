import { _repeat, _subLast } from '../string/string_common.js';

/**
 * paddingFirst
 */
export const _paddingFirst = (str, length, fill) => {
  if (length <= str.length) {
    return str;
  }
  const result = _repeat(fill, length) + str;
  return _subLast(result, length);
};

export default {
  _paddingFirst,
};
