import { isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _ThisMonth } from './_ThisMonth.js';

export const ThisMonth = (isLocal = true) => {
  if (isObjectParameter(isLocal, '', 'isLocal')) {
    ({ isLocal = true } = isLocal);
  }

  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `ThisMonth args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _ThisMonth(isLocal);
};

export default { ThisMonth };
