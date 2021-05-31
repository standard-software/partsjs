import { isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _ThisYear } from './_ThisYear.js';

export const ThisYear = (isLocal = true) => {
  if (isObjectParameter(isLocal, '', 'isLocal')) {
    ({ isLocal = true } = isLocal);
  }

  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `ThisYear args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _ThisYear(isLocal);
};

export default { ThisYear };
