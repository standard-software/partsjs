import { isArray, isInteger } from '../../type/isType.js';
import { _inRange } from '../../number/number.js';
import { isObjectParameter } from '../../object/isObjectParameter.js';
import { _popArrayFirst } from './_popArrayFirst.js';

/**
 * array.operation.popArrayFirst
 */
export const popArrayFirst = (array, length = 1) => {
  if (isObjectParameter(array, 'array', 'length')) {
    ({ array, length = 1 } = array);
  } else if (isObjectParameter(length, 'length')) {
    ({ length } = length);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'popArrayFirst args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'popArrayFirst args(length) is not integer',
    );
  }
  if (!_inRange(length, 1, array.length)) {
    throw new RangeError(
      'popArrayFirst args(length) must be from 0 to array.length',
    );
  }

  return _popArrayFirst(array, length);
};

export default { popArrayFirst };
