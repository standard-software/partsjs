import { isString } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _includeCount } from '../string/_includeCount.js';

/**
 * includeCount
 */
export const includeCount = (str, search) => {
  if (isObjectParameter(str, 'str, search')) {
    ({ str, search } = str);
  } else if (isObjectParameter(search, 'search')) {
    ({ search } = search);
  }

  if (!isString(str)) {
    throw new TypeError(
      `includeCount args(str:${str}) is not string`,
    );
  }
  if (!isString(search)) {
    throw new TypeError(
      `includeCount args(search:${search}) is not string`,
    );
  }

  return _includeCount(str, search);
};

export default { includeCount };
