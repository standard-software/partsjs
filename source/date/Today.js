import { isBoolean } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _Today } from './_Today.js';

export const Today = (isLocal = true) => {
  if (isObjectParameter(isLocal, '', 'isLocal')) {
    ({ isLocal = true } = isLocal);
  }

  if (!isBoolean(isLocal)) {
    throw new TypeError(
      `Today args(isLocal:${isLocal}) is not boolean`,
    );
  }

  return _Today(isLocal);
};

export default { Today };
