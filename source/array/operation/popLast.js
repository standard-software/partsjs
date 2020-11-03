import { isArray } from '../../type/isType.js';
import { _popLast } from './_popLast.js';

/**
 * array.operation.popLast
 */
export const popLast = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'popLast args(array) is not array',
    );
  }

  return _popLast(array);
};

export default { popLast };
