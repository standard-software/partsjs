import { _indexOfFirst } from '../string/_indexOfFirst.js';

/**
 * includeCount
 */
export const _includeCount = (str, search) => {
  let result = 0;
  let index = 0;
  do {
    index = _indexOfFirst(str, search, index);
    if (index === -1) { break; }
    index += search.length;
    result += 1;
  } while (true);
  return result;
};

export default { _includeCount };
