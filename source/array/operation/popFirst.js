import { isArray } from '../../type/isType.js';
import { _popFirst } from './_popFirst.js';

/**
 * array.operation.popFirst
 */
export const popFirst = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'popFirst args(array) is not array',
    );
  }

  return _popFirst(array);
};

export default { popFirst };
