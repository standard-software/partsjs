import { isArray, isInteger } from '../../type/isType.js';
import { _inRange } from '../../number/number.js';
import { isObjectParameter } from '../../object/isObjectParameter.js';
import { _popArrayLast } from './_popArrayLast.js';

/**
 * array.operation.popArrayLast
 */
export const popArrayLast = (array, length = 1) => {
  if (isObjectParameter(array, 'array', 'length')) {
    ({ array, length = 1 } = array);
  } else if (isObjectParameter(length, 'length')) {
    ({ length } = length);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'popArrayLast args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'popArrayLast args(length) is not integer',
    );
  }
  if (!_inRange(length, 1, array.length)) {
    throw new RangeError(
      'popArrayLast args(length) must be from 0 to array.length',
    );
  }

  return _popArrayLast(array, length);
};

export default { popArrayLast };
